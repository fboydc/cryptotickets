

const ProxyRegistry = artifacts.require("ProxyRegistry");
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

        it("should be able to mint a ticket", async()=>{
            await instance.mintTo(owner_1);
            assert.equal(await instance.ownerOf(1), owner_1);
        })

        it("should be able to trade ticket", async ()=>{
            await instance.safeTransferFrom(owner_1, owner_2, 1, {from: owner_1});
            assert.equal(await instance.ownerOf(1), owner_2);
        })

       

        
    })

    


});

contract("TicketsFactory", async accounts=>{

    const owner_1 = accounts[0];
    const owner_2 = accounts[1];
    const owner_3 = accounts[2];
    const owner_4 = accounts[3];
    const owner_5 = accounts[5];

    let Pinstance;
    let Cinstance;
    let TFinstance;

    beforeEach(async()=>{
        Pinstance = await ProxyRegistry.deployed();
        Cinstance = await Cryptotickets.deployed();
        TFinstance = await TicketsFactory.deployed();
        
    })
    it("should be able to transfer ownership to factory contract", async()=>{
        //const value = await TFinstance.getnftAddress();
        //const owner = await TFinstance.owner();
        await Cinstance.transferOwnership(TFinstance.address);
        assert.equal(await Cinstance.owner(), TFinstance.address);
        

    });

    it("should be able to create an event", async()=>{
        await TFinstance.createEvent("reqwr3-12341r-werw2", 0, owner_1);
        const event = await TFinstance.getEvent("reqwr3-12341r-werw2");

        assert.equal(event, "reqwr3-12341r-werw2");
    })
    
    it("should be able to mint many tickets", async()=>{
        await TFinstance.mint(0, owner_2);
        assert.equal(await Cinstance.ownerOf(1), owner_2);
       await TFinstance.mint(0, owner_3);
        assert.equal(await Cinstance.ownerOf(2), owner_3);
        await TFinstance.mint(0, owner_4);
        assert.equal(await Cinstance.ownerOf(3), owner_4);
        await TFinstance.mint(0, owner_5);
        assert.equal(await Cinstance.ownerOf(4), owner_5);
        await TFinstance.createEvent("alkjsklajfas-2342-sdfasf", 1, owner_1);
        await TFinstance.mint(1, owner_2);
        assert.equal(await Cinstance.ownerOf(5), owner_2);
       
    })

    /*it("should be able to get metadata URI", async()=>{
        const URI = await TFinstance.tokenURI(0);
        assert.equal(URI, "https://nuefwqsdv3.execute-api.us-east-1.amazonaws.com/testing/cryptotickets/0");
    })*/

    it("should be able to claim its tickets receivable", async()=>{
        //console.log("tickets receivable", TFinstance.ticketsReceivable[0]);
        await TFinstance.createEvent("a2345234523-sagsadg-3235s", 2, owner_1);
        await TFinstance.mint(2, owner_3);
        await TFinstance.mint(2, owner_2);
        const total = await TFinstance.getTicketsReceivableAmount(2);
        assert.equal(total, 2);
        await TFinstance.collectTicketsReceivable(2, 163229);
        assert.equal(await TFinstance.getTicketsReceivableAmount(2), 0);
        assert.equal(await TFinstance.lastAPIEventId(2), 163229);
       
        
    })


    it("should be able to get correct eventid", async()=>{
        assert.equal(await TFinstance.getEventOption("reqwr3-12341r-werw2"), 0);
        assert.equal(await TFinstance.getEventOption("alkjsklajfas-2342-sdfasf"), 1);
        assert.equal(await TFinstance.getEventOption("a2345234523-sagsadg-3235s"), 2);

    })

    /*
    it("should get correct metadata", async()=>{
       const uri = await TFinstance.tokenURI(0);
       assert.equal(uri, "https://nuefwqsdv3.execute-api.us-east-1.amazonaws.com/testing/cryptotickets/234252-tt-45253/0");
    })*/
});