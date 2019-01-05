var ProxyRegistry = artifacts.require("./ProxyRegistry.sol");
var Cryptotickets = artifacts.require("./Cryptotickets.sol");
var TicketsFactory = artifacts.require("./TicketsFactory.sol");


module.exports = function(deployer, network, accounts){


    deployer.deploy(ProxyRegistry).then(()=>{
       return deployer.deploy(Cryptotickets, ProxyRegistry.address).then(()=>{
            return deployer.deploy(TicketsFactory, ProxyRegistry.address, Cryptotickets.address).then(async ()=>{
                var cryptotickets = await Cryptotickets.deployed();
                //cryptotickets.transferOwnership(TicketsFactory.address); 
            })
        })
    })
   /*.then(async()=>{
        var cryptotickets = await Cryptotickets.deployed();
        return cryptotickets.transferOwnership(TicketsFactory.address); 
    })*/

}