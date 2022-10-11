- This repository provides templates for formalized VeChain-Contracts-Interfaces.
- The contracts are based on OpenZeppelin and modified mostly for naming purpose only.

## Install

```shell
yarn add https://github.com/vechain-energy/contracts.git
```

**Example for VIP-180**

```solidity
pragma solidity ^0.8.0;

import "@vechain.energy/contracts/VIP180.sol";

contract TestVIP180 is VIP180 {
    constructor(string memory name, string memory symbol)
        VIP180(name, symbol)
    {}
}

```


## Links

* https://github.com/OpenZeppelin/openzeppelin-contracts
* https://github.com/OpenZeppelin/openzeppelin-contracts-upgradeable
* https://github.com/vechain/VIPs


## Commands

* `yarn build` compile contracts
* `yarn test` run test suite
* `yarn test:watch` run test suite in watchAll mode
* `yarn gen:interfaces` generate interfaces for all contracts