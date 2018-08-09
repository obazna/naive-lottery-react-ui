import Web3 from 'web3';

const isMetamaskAlive = () => !!window.web3;

if (!isMetamaskAlive()) {
    alert('Metamask is not alive!');
}

const web3 = new Web3(window.web3.currentProvider);

export default web3;