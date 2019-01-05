
const Cryptotickets = artifacts.require("Cryptotickets");
const TicketsFactory = artifacts.require("TicketsFactory");

contract("Cryptotickets", async accounts=>{
    const owner_1 = accounts[0];
    const owner_2 = accounts[1];
    describe("buying and selling tickets", ()=>{

        let instance;

        beforeEach(async()=>{
            instance = await Cryptotickets.deployed(); 
        })

        it("should be able to mint a ticker", async()=>{
            await instance.mintTo(owner_1);
            assert.equal(await instance.ownerOf(1), owner_1);
        })

        it("should be able to trade ticket", async ()=>{
            await instance.safeTransferFrom(owner_1, owner_2, 1, {from: owner_1});
            assert.equal(await instance.ownerOf(1), owner_2);
        })

       

        
    })


})

contract("TicketsFactory", async accounts=>{

    const owner_1 = accounts[0];
    const owner_2 = accounts[1];
    let Cinstance;
    let TFinstance;

    beforeEach(async()=>{
        Cinstance = await Cryptotickets.deployed();
        TFinstance = await TicketsFactory.deployed();
        
    })
    it("should be able to mint a ticket", async()=>{
        //const value = await TFinstance.getnftAddress();
        const owner = await TFinstance.owner();
        const proxyRegistryOwner = await TFinstance.mint(0, owner_2, {from: owner_1});
        //await TFinstance.mint(0, owner_2, {from: owner_1});

        console.log("owner", owner);
        console.log("first", owner_1);
        
       // assert(await TFinstance.ownerOf(1), owner_2);
        //console.log("address", value);
        //console.log("owner", owner);
        //console.log("first account", owner_1);
        //await TFinstance.mint(0, owner_2, {from: owner_1});
       // assert.equal(await instance.ownerOf(1), owner_2);
    });
});