const Web3 = require('web3');
const express = require('express');
const tx = require('ethereumjs-tx');
const MnemonicWalletSubprovider = require('@0x/subproviders').MnemonicWalletSubprovider
const RPCSubprovider = require('web3-provider-engine/subproviders/rpc')
const Web3ProviderEngine = require('web3-provider-engine')

const app = express();


web3js = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/89003dae7ccd446d906c2196189ebfe3"));

app.get('/', (req, res)=>{
   // web3js.eth.Contract()
});

app.listen(8080, ()=>console.log('Listening on port 8080...'));