pragma solidity ^0.8.0;

import "../contracts/VIP210.sol";

contract TestVIP210 is VIP210 {
    constructor(string memory uri)
        VIP210(uri)
    {}
}
