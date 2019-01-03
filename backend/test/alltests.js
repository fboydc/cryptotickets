
const Cryptotickets = artifacts.require("Cryptotickets");

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

        it("should be able to get NFT metadata URI", async()=>{
            const metadataURI = await instance.tokenURI(1, 1);
            assert.equal(metadataURI, "http://www.example.com/?event=1&ticket=1");
        })

        
    })


    describe("buying and selling tickets", ()=>{
        let instance;

        beforeEach(async()=>{
            instance = await Cryptotickets.deployed();
            await instance.mintTo(owner_1);
        })


        it("should be able to get NFT metadata URI", async()=>{
            const metadataURI = await instance.tokenURI(1, 1);
            assert.equal(metadataURI, "http://www.example.com/?event=1&ticket=1");
        })



    });
})