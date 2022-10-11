pragma solidity ^0.8.0;

import "../contracts/VIP180.sol";

contract TestVIP180 is VIP180 {
    constructor(string memory name, string memory symbol)
        VIP180(name, symbol)
    {}
}
