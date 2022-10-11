pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

abstract contract VIP210 is ERC1155 {
    constructor(string memory uri_) ERC1155(uri_) {}
}
