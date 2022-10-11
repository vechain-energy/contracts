pragma solidity ^0.8.0;

import "../contracts/VIP181.sol";

contract TestVIP181 is VIP181 {
    constructor(string memory name, string memory symbol)
        VIP181(name, symbol)
    {}
}
