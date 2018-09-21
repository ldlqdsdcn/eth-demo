var config = require('../config/config');
var Web3 = require('web3');
var fs = require('fs');
var abiStr = fs.readFileSync('/home/liudalei/code/eth-demo/contract/bin/EventTest.abi').toString();
var abi = JSON.parse(abiStr);
var web3 = new Web3(new Web3.providers.HttpProvider(config.ethereum_url));
var contract = web3.eth.contract(abi);
var contractInstance = contract.at(config.contract_address);

/*contractInstance.watch(function (err, result) {
    if (err) {
        console.log(err.message);

    }
    console.log(result.args[0]);
});*/
web3.personal.unlockAccount(config.wallet_address, config.wallet_password);
var hello=contractInstance.hi();
var rs = contractInstance.setName("北京毛",{from:config.wallet_address,gas:500000}, function (err, result) {
    if (err) {
        console.log(err.message);
    }
    console.log(result);
});
hello.watch(function (err, result) {
    if (err) {
        console.log(err.message);

    }
    console.log(result.args);
    hello.stopWatching();
});
console.log(rs);