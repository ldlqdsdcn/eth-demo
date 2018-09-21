var config = require('../config/config');
var Web3 = require('web3');
var fs = require('fs');
var abiStr = fs.readFileSync('/home/liudalei/code/eth-demo/contract/bin/Trans.abi').toString();
var abi = JSON.parse(abiStr);
var web3 = new Web3(new Web3.providers.HttpProvider(config.ethereum_url));
var contractAddress = "0x2817267b86c683e2419c09b07066220039db5c6c";
var contract = web3.eth.contract(abi);
var contractInstance = contract.at(contractAddress);
web3.personal.unlockAccount(config.wallet_address, config.wallet_password);
contractInstance.addTran("王二", "一百万元", {from: config.wallet_address, gas: 500000}).watch(function (error, result) {
    if (error) {
        console.log(error.message);
    }
    else {
        console.log(JSON.stringify(result));
    }
});

