pragma solidity ^0.4.24;

import "../node_modules/zeppelin-solidity/contracts/ownership/Ownable.sol";
import "./Factory.sol";
import "./Cryptotickets.sol";
import "./Strings.sol";
import "./ProxyRegistry.sol";

contract TicketsFactory is Factory, Ownable {
    using Strings for string;

    address public proxyRegistryAddress;
    address public nftAddress;
    string public baseURI = "https://nuefwqsdv3.execute-api.us-east-1.amazonaws.com/testing/cryptotickets/";
    mapping(uint256=>uint256) ticketsReceivable;
    mapping(uint256=>address) eventToOwner;
    mapping(uint256=>uint256) public lastAPIEventId;

    struct Event{
        string id;
        bool exists;
    }

    Event[] events;
  /**
   * Enforce the existence of only 100 OpenSea Cryptotickets.
   */
    uint256 TICKETS_SUPPLY = 100;

  /**
   * Three different options for minting Creatures (basic, premium, and gold).
   */
    uint256 NUM_OPTIONS = events.length;
    /*uint256 SINGLE_TICKETS_OPTION = 0;
    uint256 MULTIPLE_TICKETS_OPTION = 1;
    uint256 NUM_TICKETS_IN_MULTIPLE_TICKETS_OPTION = 4;*/

    modifier eventOwner(address _address){
        require(msg.sender == _address, "only event owner can access");
        _;
    }

    constructor(address _proxyRegistryAddress, address _nftAddress) public {
        proxyRegistryAddress = _proxyRegistryAddress;
        nftAddress = _nftAddress;
    }

    function name() external view returns (string) {
        return "Cryptotickets Item Sale";
    }

    function symbol() external view returns (string) {
        return "CTF";
    }

    function supportsFactoryInterface() public view returns (bool) {
        return true;
    }

    function numOptions() public view returns (uint256) {
        return NUM_OPTIONS;
    }

   
  
    function mint(uint256 _optionId, address _toAddress) public {
        // Must be sent from the owner proxy or owner.
        ProxyRegistry proxyRegistry = ProxyRegistry(proxyRegistryAddress);
        
        assert(proxyRegistry.proxies(owner) == msg.sender || owner == msg.sender);
        require(canMint(_optionId));
    
        Cryptotickets cryptoticket = Cryptotickets(nftAddress);
        ticketsReceivable[_optionId] = ticketsReceivable[_optionId] + 1;
        cryptoticket.mintTo(_toAddress);
        
    }

    function canMint(uint256 _optionId) public view returns (bool) {

       /* if (_optionId >= NUM_OPTIONS) {
            return false;
        }*/
        if(!events[_optionId].exists){
            return false;
        }

        Cryptotickets cryptoticket = Cryptotickets(nftAddress);
        uint256 ticketSupply = cryptoticket.totalSupply();
        uint256 numItemsAllocated = 1;
        return ticketSupply < (TICKETS_SUPPLY - numItemsAllocated);
    }
  
    function tokenURI(uint256 _optionId) public view returns (string) {
        require(events[_optionId].exists);
        string memory eventid = events[_optionId].id;
        return Strings.strConcat(
            baseURI,
            //Strings.uint2str(eventid)
            eventid
        );
    }

    function createEvent(string _id, uint256 _optionId, address _owner) public {
        events.push(Event(_id, true));
        NUM_OPTIONS = NUM_OPTIONS + 1;
        eventToOwner[_optionId] = _owner;
    }


    function getEvent(string _id) view public returns(string){
        string memory evt = "none";
        for(uint i = 0; i < events.length; i++){
            if(keccak256(events[i].id) == keccak256(_id)){
                evt = events[i].id;
            }
        }
        return evt;
    }


    function collectTicketsReceivable(uint256 _optionId, uint256 _lastAPIeventId) public eventOwner(eventToOwner[_optionId]) returns(uint256){
        uint256 amount = ticketsReceivable[_optionId];
        ticketsReceivable[_optionId] = 0;
        lastAPIEventId[_optionId] = _lastAPIeventId;
        return amount;
    }

    function getTicketsReceivableAmount(uint256 _optionId) view public returns (uint256){
        return ticketsReceivable[_optionId];
    }

    function getEventOption(string _id)view public returns(uint256){
        uint256 eventid;
        for(uint i = 0; i<events.length ; i++){
            if(keccak256(events[i].id) == keccak256(_id)){
                eventid = i;
            }
        }

        return eventid;
    }

  /**
   * Hack to get things to work automatically on OpenSea.
   * Use transferFrom so the frontend doesn't have to worry about different method names.
   */
    function transferFrom(address _from, address _to, uint256 _tokenId) public {
        mint(_tokenId, _to);
    }

  /**
   * Hack to get things to work automatically on OpenSea.
   * Use isApprovedForAll so the frontend doesn't have to worry about different method names.
   */
    function isApprovedForAll(
        address _owner,
        address _operator
        )
        public
        view
        returns (bool)
        {
        if (owner == _owner && _owner == _operator) {
            return true;
        }

        ProxyRegistry proxyRegistry = ProxyRegistry(proxyRegistryAddress);
        if (owner == _owner && proxyRegistry.proxies(_owner) == _operator) {
            return true;
        }

        return false;
    }

  /**
   * Hack to get things to work automatically on OpenSea.
   * Use isApprovedForAll so the frontend doesn't have to worry about different method names.
   */
    function ownerOf(uint256 _tokenId) public view returns (address _owner) {
        return owner;
    }
}