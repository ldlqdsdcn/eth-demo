pragma solidity ^0.4.0;
contract Trans{
    struct Transaction{
        string code;
        string message;
    }

    Transaction[] private tranList;

    function addTran(string code,string message) public returns(bool,string)
    {
        Transaction memory  tran= Transaction(code,message);
        tranList.push(tran);
        return(true,"添加教育交易数据成功");
    }
}