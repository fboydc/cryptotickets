
const Cryptotickets = artifacts.require("Cryptotickets");

contract("Cryptotickets", async accounts=>{
    const owner_1 = accounts[0];
    describe("buying and selling tickets", ()=>{

        let instance;

        beforeEach(async()=>{
            instance = await Cryptotickets.deployed();

        })
        it("should be able to buy a ticket", async ()=>{
          await instance.mintTo(owner_1);
          assert.equal(await instance.ownerOf(1), owner_1);
        })
    })
})