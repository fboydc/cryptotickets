const Web3 = require('web3');
const express = require('express');
const tx = require('ethereumjs-tx');
const MnemonicWalletSubprovider = require('@0x/subproviders').MnemonicWalletSubprovider
const RPCSubprovider = require('web3-provider-engine/subproviders/rpc')
const Web3ProviderEngine = require('web3-provider-engine')
const abi = require('./src/ticketsfactory.json')
const api = require('./meta/api.json')
const bodyParser = require('body-parser')


const server_wallet = "0x5824a273379D7c2960519101a43067eCfFF248a3"

const app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


web3js = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/89003dae7ccd446d906c2196189ebfe3"));
const contract = new web3js.eth.Contract(abi, "0x90d368d3b588ab4a37ab10d92077ec8fc9cfe51d");

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
    const{eventId, name, image, data, description} = req.body;
    return res.send("Hello");

})



app.listen(8080, ()=>console.log('Listening on port 8080...'));