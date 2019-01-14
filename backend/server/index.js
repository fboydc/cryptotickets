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
const contract_address = "0x90d368d3b588ab4a37ab10d92077ec8fc9cfe51d";
const privateKey= Buffer.from("4eb64b9546be3170b43733c71ec45da205c79c32cb99f58c89ccb8f91834867f", "hex")


const server_wallet = "0x5824a273379D7c2960519101a43067eCfFF248a3"
const endpoint_create = "https://nuefwqsdv3.execute-api.us-east-1.amazonaws.com/testing/cryptotickets/create"
const app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


web3js = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/89003dae7ccd446d906c2196189ebfe3'));
const contract = new web3js.eth.Contract(abi, contract_address);

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

    const{id, wallet, metadata, image} = req.body;
    const requestBody = {
        id,
        wallet,
        metadata,
        file_name: uuidv1() + ".jpg",
        image
    }
    fetch(endpoint_create, {
        method: 'POST',
        body: JSON.stringify(requestBody)
    }).then(response=>
        response.json()
    ).then(data=>{
        if(data.body === true){
            console.log("we add to contract here");
            contract.methods.numOptions().call().then(num=>{
                web3js.eth.getTransactionCount(server_wallet).then(function(count){
                    var rawTransaction = {"from":server_wallet, "gasPrice":web3js.utils.toHex(20*1e9), "gasLimit":web3js.utils.toHex(210000), "to":contract_address, "value":"0x0", "data":contract.methods.createEvent(id, num).encodeABI(), "nonce":web3js.utils.toHex(count)}
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







app.listen(8080, ()=>console.log('Listening on port 8080...'));