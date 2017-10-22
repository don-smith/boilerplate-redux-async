import Web3 from 'web3';

let connection

const errMsg = 'Ethereum network not found: install the MetaMask browser extension.'

if (window.web3 && window.web3.currentProvider) {
  connection = new Web3(window.web3.currentProvider);
} else {
  console.error(errMsg)
}

export function getConnection () {
  return connection
}
