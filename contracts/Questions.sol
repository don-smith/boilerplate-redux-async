pragma solidity ^0.4.4;

import "./Question.sol";

contract Questions {
	mapping (address => Question) questions;
}
