var ProxyRegistry = artifacts.require("./ProxyRegistry.sol");
var Cryptotickets = artifacts.require("./Cryptotickets.sol");
var TicketsFactory = artifacts.require("./TicketsFactory.sol");

const proxyAddress = "0xf57b2c51ded3a29e6891aba85459d600256cf317";

/*
module.exports = (deployer, network, accounts)=>{
    let cryptotickets;
    deployer.deploy(Cryptotickets, proxyAddress).then(async()=>{
            await Cryptotickets.deployed();
            console.log("deployed", Cryptotickets.address);
            deployer.deploy(TicketsFactory, proxyAddress, Cryptotickets.address).then(async()=>{
            console.log("deploying tickets factory");
            await TicketsFactory.deployed();
            console.log("TicketsFactory address ->", TicketsFactory.address);
            await cryptotickets.transferOwnership(TicketsFactory.address);
            console.log("transfered ownership");
        })
        /*cryptotickets = await Cryptotickets.deployed();
        console.log("Cryptotickets address ->", cryptotickets.address);
        
    })

   
}*/


module.exports = function(deployer, network, accounts){


    deployer.deploy(ProxyRegistry).then(()=>{
       return deployer.deploy(Cryptotickets, ProxyRegistry.address).then(()=>{
            return deployer.deploy(TicketsFactory, ProxyRegistry.address, Cryptotickets.address);
        })
    })
   /*.then(async()=>{
        var cryptotickets = await Cryptotickets.deployed();
        return cryptotickets.transferOwnership(TicketsFactory.address); 
    })*/

}

