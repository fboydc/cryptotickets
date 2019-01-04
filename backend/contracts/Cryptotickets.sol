pragma solidity ^0.4.24;

import "./TradeableERC721Token.sol";
import "./ProxyRegistry.sol";
import "./Strings.sol";

/**************************************************************
* @title Cryptoticket
* Description:
* Cryptotickets are an ERC721 implementation for event tickets 
***************************************************************/

contract Cryptotickets is TradeableERC721Token {
    using Strings for *;

    address proxyRegistryAddress;
    string api_endpoint = "https://nuefwqsdv3.execute-api.us-east-1.amazonaws.com/testing/cryptotickets/{proxy+}/?";

    constructor(address _proxyRegistryAddress) TradeableERC721Token("Cryptoticket", "CTKT", _proxyRegistryAddress) public {
        proxyRegistryAddress = _proxyRegistryAddress;
    }

    /***********************************************************
    *@name: tokenURI
    *@parameters: unique ticket ID (uint256), unique event ID (uint256)    
    *Description: 
    *returns the URI for the related token metadata  (string)
    ************************************************************/
    function tokenURI(uint256 _tokenId, uint256 _eventId) public view returns (string){
        return Strings.strConcat(baseTokenURI(), "event=", Strings.uint2str(_eventId), "&ticket=", Strings.uint2str(_tokenId));
    }


    /***********************************************************
    *@name: baseTokenURI
    *@parameters: NONE    
    *Description: 
    *returns the base URI for the API endpoint (string)
    ************************************************************/
    function baseTokenURI() public view returns(string) {
        return api_endpoint;
    }






}


