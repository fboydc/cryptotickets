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
    string public eventuuid;
    string public baseURI = "https://nuefwqsdv3.execute-api.us-east-1.amazonaws.com/testing/cryptotickets/";

  /**
   * Enforce the existence of only 100 OpenSea creatures.
   */
    uint256 TICKETS_SUPPLY = 100;

  /**
   * Three different options for minting Creatures (basic, premium, and gold).
   */
    uint256 NUM_OPTIONS = 2;
    uint256 SINGLE_TICKETS_OPTION = 0;
    uint256 MULTIPLE_TICKETS_OPTION = 1;
    uint256 NUM_TICKETS_IN_MULTIPLE_TICKETS_OPTION = 4;

    constructor(address _proxyRegistryAddress, address _nftAddress, string _eventuuid) public {
        proxyRegistryAddress = _proxyRegistryAddress;
        nftAddress = _nftAddress;
        eventuuid = _eventuuid;
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
        
        if (_optionId == SINGLE_TICKETS_OPTION) {
            cryptoticket.mintTo(_toAddress);
        } else if (_optionId == MULTIPLE_TICKETS_OPTION) {
            for (uint256 i = 0; i < NUM_TICKETS_IN_MULTIPLE_TICKETS_OPTION; i++) {
                cryptoticket.mintTo(_toAddress);
            }
        } 
    }

    function canMint(uint256 _optionId) public view returns (bool) {
        if (_optionId >= NUM_OPTIONS) {
            return false;
        }

        Cryptotickets cryptoticket = Cryptotickets(nftAddress);
        uint256 ticketSupply = cryptoticket.totalSupply();

        uint256 numItemsAllocated;
        
        if (_optionId == SINGLE_TICKETS_OPTION) {
            numItemsAllocated = 1;
        } else if (_optionId == MULTIPLE_TICKETS_OPTION) {
            numItemsAllocated = NUM_TICKETS_IN_MULTIPLE_TICKETS_OPTION;
        } 
        return ticketSupply < (TICKETS_SUPPLY - numItemsAllocated);
    }
  
    function tokenURI(uint256 _optionId) public view returns (string) {
        return Strings.strConcat(
            baseURI,
            eventuuid,
            "/",
            Strings.uint2str(_optionId)
        );
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