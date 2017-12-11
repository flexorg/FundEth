pragma solidity ^0.4.17;

import "github.com/ethereum/solidity/std/mortal.sol";

contract Projects is mortal {

  struct Project {
    address address;
    string name;
    string imageUrl;
    string description;
    uint funding;
  }

  address[] public projectAddresses;
  uint public totalProjects

  event NewProject(address address, string name, string imageUrl, string description)
  event NewDonation(address address, uint amt)

  function createProject(address address, string name, string imageUrl) payable public {

  }

}
