var Cryptotickets = artifacts.require("./Cryptotickets.sol");


module.exports = function(deployer, network, accounts){

    deployer.deploy(Cryptotickets, accounts[0]);
}