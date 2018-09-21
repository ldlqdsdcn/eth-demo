pragma solidity ^0.4.0;
contract EventTest{
    event hi(string);
    string private myName ;
    address owner;

    function EventTest()
    {
        owner=msg.sender;
    }


    function setName(string name)public
    {
        myName=name;
        hi(strConcat("Hello,",myName));
    }

    function strConcat(string _a, string _b) internal returns (string){
        bytes memory _ba = bytes(_a);
        bytes memory _bb = bytes(_b);
        string memory ret = new string(_ba.length +_bb.length);
        bytes memory bret = bytes(ret);
        uint k = 0;
        for (uint i = 0; i < _ba.length; i++)bret[k++] = _ba[i];
        for (i = 0; i < _bb.length; i++) bret[k++] = _bb[i];
        return string(ret);
   }
}