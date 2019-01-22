const Web3 = require('web3');
const express = require('express');
const tx = require('ethereumjs-tx');
const MnemonicWalletSubprovider = require('@0x/subproviders').MnemonicWalletSubprovider
const RPCSubprovider = require('web3-provider-engine/subproviders/rpc')
const Web3ProviderEngine = require('web3-provider-engine')
const abi = require('./src/ticketsfactory.json')
const api = require('./meta/api.json')
const bodyParser = require('body-parser')
const uuidv1 = require('uuid/v1')
const config = require('./meta/config.json');
const opensea = require('opensea-js')
const OpenSeaPort = opensea.OpenSeaPort;
const Network = opensea.Network;

const {SERVER_WALLET, PRIVATE_KEY, FACTORY_CONTRACT_ADDRESS, API_ENDPOINT, MNEMONIC, NETWORK, INFURA_KEY, API_KEY} = config;

const privateKey= Buffer.from(PRIVATE_KEY, "hex")


const endpoint_create = API_ENDPOINT+"create";

const app = express();



app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
const BASE_DERIVATION_PATH = `44'/60'/0'/0`;
const mnemonicWalletSubprovider = new MnemonicWalletSubprovider({ mnemonic: MNEMONIC, baseDerivationPath: BASE_DERIVATION_PATH})
const infuraRpcSubprovider = new RPCSubprovider({
    rpcUrl: 'https://' + NETWORK + '.infura.io/' + INFURA_KEY,
})
const providerEngine = new Web3ProviderEngine()
providerEngine.addProvider(mnemonicWalletSubprovider)
providerEngine.addProvider(infuraRpcSubprovider)
providerEngine.start();

const seaport = new OpenSeaPort(providerEngine, {
    networkName: Network.Rinkeby,
    apiKey: API_KEY
  }, (arg) => console.log(arg))




web3js = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/89003dae7ccd446d906c2196189ebfe3'));
const contract = new web3js.eth.Contract(abi, FACTORY_CONTRACT_ADDRESS);

app.get('/get/:eventid', (req, res)=>{
    const {eventid} = req.params;
    console.log("fetching - events for" + eventid);
    return fetch(api.server_url + api.resource + eventid).then(response=>
        response.json()
    ).then(data=>{
        return res.send(data);
    });
});



app.post('/add', (req, res)=>{
    //console.log("request body", req.body);
    console.log("req", req);
    const{id, wallet, metadata, image, category} = req.body;
    const requestBody = {
        id,
        wallet,
        metadata,
        file_name: uuidv1() + ".jpg",
        image,
        category
    }

    console.log("request body", requestBody);
    fetch(endpoint_create, {
        method: 'POST',
        body: JSON.stringify(requestBody)
    }).then(response=>
        response.json()
    ).then(data=>{
        console.log("data", data);
        if(data.body === true){
            contract.methods.numOptions().call().then(num=>{
                web3js.eth.getTransactionCount(SERVER_WALLET).then(function(count){
                    var rawTransaction = {"from":SERVER_WALLET, "gasPrice":web3js.utils.toHex(20*1e9), "gasLimit":web3js.utils.toHex(210000), "to":FACTORY_CONTRACT_ADDRESS, "value":"0x0", "data":contract.methods.createEvent(id, num, wallet).encodeABI(), "nonce":web3js.utils.toHex(count)}
                    var transaction = new tx(rawTransaction);
                    transaction.sign(privateKey);
                    web3js.eth.sendSignedTransaction('0x'+transaction.serialize().toString('hex')).on('transactionHash', ()=>{
                        res.send("created event - " + id);
                    });
                    
                });
            })
        }else{
            res.send(false);
        }
    })


})

app.get('/walletevents/:id', (req,res)=>{
    
    const {id} = req.params;
    console.log("wallet", id);
    console.log("endpoint", API_ENDPOINT+"walletevents/"+id);
    return fetch(API_ENDPOINT+"walletevents/"+id).then(response=>
        response.json()
    ).then(data=>{
        console.log("data", data);
        res.send(data);
    })
})

app.post('/edit/', (req, res)=>{
    const {eventid, wallet} = req.body;

    //return fetch()
})

app.post('/sellorder', (req, res)=>{
    const {eventid, type, price, numOfTickets, wallet} = req.body;

    contract.methods.getEventOption(eventid).call().then(optionId=>{
        createOrder(optionId, price, numOfTickets, res);
        //res.send("done");
    })



});


async function createOrder(optionId,  price, numOfTickets, res){
    try{
        console.log("Creating fixed price auctions...")
        const fixedSellOrders = await seaport.createFactorySellOrders({
            assetId: optionId,
            factoryAddress: FACTORY_CONTRACT_ADDRESS,
            accountAddress: SERVER_WALLET.toLowerCase(),
            startAmount: price,
            numberOfOrders: numOfTickets
        })
        res.send(true);
        console.log(`Successfully made ${fixedSellOrders.length} fixed-price sell orders! ${fixedSellOrders[0].asset.openseaLink}\n`)
    }catch(error){
        console.log("Something happened", error);
        res.send(false)
    }
}







app.listen(8080, ()=>console.log('Listening on port 8080...'));