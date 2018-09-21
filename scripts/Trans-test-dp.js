var fs = require('fs');
var solc = require('solc');
var config = require('../config/config');
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider(config.ethereum_url));
//console.log(web3.version);
//web3.personal.unlockAccount(web3.eth.accounts[0],"wms123456");


var code = fs.readFileSync("/home/liudalei/code/eth-demo/contract/Trans.sol").toString();
var compiledCode = solc.compile(code);
var bytecode = compiledCode.contracts[":Trans"].bytecode;
var abiDefinitionStr = compiledCode.contracts[":Trans"].interface;
fs.writeFileSync("/home/liudalei/code/eth-demo/contract/bin/Trans.abi", abiDefinitionStr);
var abiDefinition = JSON.parse(abiDefinitionStr);
var contract = web3.eth.contract(abiDefinition);
console.log(web3.eth.accounts[0]);
web3.personal.unlockAccount(web3.eth.accounts[0], "wms123456");
console.log("estimateGas:" + web3.eth.estimateGas({data: "0x" + bytecode}));
var deployedContract = contract.new({
    from: web3.eth.accounts[0],
    gas: 600265,
    data: "0x" + bytecode
}, function (error, myContract) {
    if (!error) {
        console.log("myContract.address=" + myContract.address);
        console.log("myContract.transactionHash" + myContract.transactionHash);
    }
    else {
        console.log("error:" + error.message);
    }

});
while (deployedContract.address == undefined) {
    require("deasync").sleep('100');
}
console.log("contract address:" + deployedContract.address);
