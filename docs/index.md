# Remix Nahmii Compiler

<TODO>

## Install

In the Remix plugin manager activate Nahmii Compiler.

<img src="./images/install.png" alt="installing" width="50%"/>

Now you should be able to compile Nahmii compatible smart contracts.

## Deploy to Nahmii Testnet using Remix

For this example we will use the following contract

```javascript
//SPDX-License-Identifier: Unlicense
pragma solidity ^0.7.0;

contract Greeter {
  string greeting;

  constructor(string memory _greeting) {
    greeting = _greeting;
  }

  function greet() public view returns (string memory) {
    return greeting;
  }

  function setGreeting(string memory _greeting) public {
    greeting = _greeting;
  }
}
```

We will assume you have funds in Nahmii Testnet. 

Now, go to the Nahmii compiler and compile the contract.

Switch metamask to Nahmii Testnet by going to [connect-nahmii-2](https://nahmii-community.github.io/connect-nahmii-2/) and clicking `Add Nahmii Testnet`.

<img src="./images/nahmii-testnet.png" alt="nahmii-testnet" width="50%"/>

Be sure metamask is in the following network:

<img src="./images/metamask.png" alt="metamask" width="50%"/>

Now go to the Deploy & Run transactions plugin and select injected provider and deploy the contract.

<img src="./images/injected-provider.png" alt="injected-provider" width="90%"/>

<IMAGE_DEPLOY>

## Issues

If you have any issues, please feel free to create an issue in our [Github repository](https://github.com/Machinalabs/remix-optimism-compiler-plugin/issues).