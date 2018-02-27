pragma solidity ^0.4.19;

contract repo {
    address owner;
    
    string[] public refNames;
    mapping (string => string) refs;
    
    string[] public symrefNames;
    mapping (string => string) symrefs;

    string[] public ipfsBlocks;
    
    function repo() public {
        owner = msg.sender;
    }
    
    function getRefCount() public constant returns (uint) {
        return refNames.length;
    }
    
    function getRef(string name) public constant returns (string) {
        return refs[name];
    }
    
    function setRef(string refName, string hash) public {
        refNames.push(refName);
        refs[refName] = hash;
    }
    
    function getSymrefCount() public constant returns (uint) {
        return symrefNames.length;
    }
    
    function getSymref(string name) public constant returns (string) {
        return symrefs[name];
    }
    
    function setSymref(string refName, string hash) public {
        symrefNames.push(refName);
        symrefs[refName] = hash;
    }
    
    function getIpfsBlockCount() public constant returns (uint) {
        return ipfsBlocks.length;
    }

    function addIpfsBlock(string hash) public {
        ipfsBlocks.push(hash);
    }
}
