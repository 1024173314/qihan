import logo from './logo.svg';
import './App.css';

import {useEffect} from 'react'
import Web3 from 'web3'

function App() {
  // 定义合约abi
  const contractAbi=[
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "name": "",
          "type": "uint8"
        }
      ],
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [],
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        },
        {
          "name": "_extraData",
          "type": "bytes"
        }
      ],
      "name": "approveAndCall",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        },
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "spentAllowance",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        },
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "initialSupply",
          "type": "uint256"
        },
        {
          "name": "tokenName",
          "type": "string"
        },
        {
          "name": "decimalUnits",
          "type": "uint8"
        },
        {
          "name": "tokenSymbol",
          "type": "string"
        }
      ],
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    }]
    const address='0xe1c91942e366dd875d0ba2729fd89569fdd552db';//合约地址
  const topay=async()=>{
    const web3=new Web3(window.web3.currentProvider);
    const [account]=await web3.eth.getAccounts()
    web3.eth.getBalance(account).then(console.log);

    var myContract = new web3.eth.Contract(contractAbi, address, {  //定义合约
      from: account, // 默认发件人地址
  });
  myContract.methods.balanceOf(account).call().then(data => { 
    console.log('from balance:' + data)
  });//输出余额

  //发送代币交易
  myContract.methods.transfer('0x000000000000000000000000000000000000dead', '1000000000000000000').send(({from: account}), function(error, transactionHash){
    if(!error) {
       console.log('transactionHash is ' + transactionHash);
    } else {
       console.log(error);
    }
});
    

}

  return (
    <div className="App">
      <button onClick={topay}>
        发起交易
      </button>
    </div>
  );
}

export default App;
