const Web3 = require('web3');
const web3 = new Web3("https://data-seed-prebsc-1-s1.binance.org:8545/");
const version = web3.version;
console.log(version);
