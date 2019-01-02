pragma solidity ^0.4.24;

import "../node_modules/zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol";
import "../node_modules/zeppelin-solidity/contracts/ownership/Ownable.sol";
import "./strings.sol";
import "./ProxyRegistry.sol";

/**************************************************************
* @title Cryptoticket
* @description:
* Cryptotickets are an ERC721 implementation for event tickets 
***************************************************************/

contract Cryptoticket is ERC721Token, Ownable {
    using strings for *;
    address proxyRegistryAddress;

    constructor(address _proxyRegistryAddress) ERC721Token("Cryptoticket", "CTKT") public {
        proxyRegistryAddress = _proxyRegistryAddress;
    }

    /***********************************************************
    *@name: tokenURI
    *@parameters: unique ticket ID (uint256), unique event ID (uint256)    
    *@description: 
    *returns the URI for the related token metadata  (string)
    ************************************************************/
    function tokenURI(uint256 _tokenId, uint256 _eventId) public view returns (string){
        string memory event_schema = "event=";
        string memory ticket_schema = "ticket=";
        string memory substring_1 = baseTokenURI().concat(event_schema.concat(_eventId));
        return substring_1.concat(ticket_schema.concat(_tokenId));
    }


    /***********************************************************
    *@name: baseTokenURI
    *@parameters: NONE    
    *@description: 
    *returns the base URI for the API endpoint (string)
    ************************************************************/
    function baseTokenURI() public view returns(string) {
        return "http://www.example.com/";
    }

    /***********************************************************
    *@name: isApprovedForAll
    *@parameters: NONE    
    *@description: 
    *Override isApprovedForAll to whitelist user's OpenSea proxy 
    *accounts to enable gas-less listings.
    *returns boolean
    ************************************************************/
    function isApprovedForAll(address owner, address operator) public view returns(bool){
        // Whitelist OpenSea proxy contract for easy trading.
        ProxyRegistry proxyRegistry = ProxyRegistry(proxyRegistryAddress);
        if(proxyRegistry.proxies(owner) == operator) {
            return true;
        }

        return super.isApprovedForAll(owner, operator);
    }






}


