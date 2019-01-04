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

    constructor(address _proxyRegistryAddress) TradeableERC721Token("Cryptoticket", "CTKT", _proxyRegistryAddress) public {
        proxyRegistryAddress = _proxyRegistryAddress;
    }


    /***********************************************************
    *@name: baseTokenURI
    *@parameters: NONE    
    *Description: 
    *returns the base URI for the API endpoint (string)
    ************************************************************/
    function baseTokenURI() public view returns(string) {
        return "https://nuefwqsdv3.execute-api.us-east-1.amazonaws.com/testing/cryptotickets/";
    }






}


