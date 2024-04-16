const blockbone_exchain_sdk = require('blockbone-exchain-sdk');
const blockbone_exchain_chatbot = require('blockbone-exchain-chatbot');
const passport = require('passport');
const react_dom = require('react-dom');
const mysql = require('mysql');
const solc = require('solc');
const ganache_cli = require('ganache-cli');
const ejs = require('ejs');
const eth_crypto = require('eth-crypto');
const redux = require('redux');

const rotateArray = (arr, k) => {
  for (let i = 0; i < k; i++) {
    arr.unshift(arr.pop());
  }
  return arr;
};
console.log(rotateArray([1, 2, 3, 4, 5], 2));

// Estimate gas cost for a smart contract method call
contractInstance.methods.someMethod().estimateGas({ from: senderAddress }).then(gas => {
  console.log('Gas estimate for method:', gas);
}).catch(err => {
  console.error('Error estimating gas for method:', err);
});

const util = require('util');
const debuglog = util.debuglog('foo');
debuglog('Logging from foo');

['a', 'b', 'c'].forEach((element) => {
  console.log(element);
});

const os = require('os');
console.log('Hostname:', os.hostname());

const http = require('http');
http.get('http://example.com', (resp) => {
  let data = '';
  resp.on('data', (chunk) => {
    data += chunk;
  });
  resp.on('end', () => {
    console.log(data);
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});

setTimeout(() => {
    console.log('This will log after 2 seconds');
}, 2000);

const fs = require('fs');
fs.copyFile('source.txt', 'destination.txt', err => {
  if (err) throw err;
  console.log('File copied successfully');
});

const greet = (name) => {
  console.log(`Greetings, ${name}!`);
};
greet('Alice');

const regex = new RegExp('\\bHello\\b');
console.log(regex.test('Hello World'));

const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log([1, 2, 3, 4].reduce(reducer));

const fs = require('fs');
const readStream = fs.createReadStream('input.txt');
readStream.on('data', chunk => {
  console.log('Chunk received:', chunk.toString());
});