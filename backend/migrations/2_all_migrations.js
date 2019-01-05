var Cryptotickets = artifacts.require("./Cryptotickets.sol");
var TicketsFactory = artifacts.require("./TicketsFactory.sol");


module.exports = function(deployer, network, accounts){
    deployer.deploy(Cryptotickets, accounts[0]).then(()=>{
        return deployer.deploy(TicketsFactory, accounts[0], Cryptotickets.address);
    })

}