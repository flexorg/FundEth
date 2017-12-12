pragma solidity ^0.4.17;

import "github.com/ethereum/solidity/std/mortal.sol";

contract Projects is mortal {

  struct Project {
    address addr;
    string name;
    string imageUrl;
    string description;
    uint funding;
    bool valid;
  }

  Project[] public projects;
  uint public totalProjects;

  event NewProject(address addr, string name, string imageUrl, string description, bool valid);
  event NewDonation(address addrFrom, address addrTo, uint amt);

  function CreateProject(address addr, string name,string description, string imageUrl) payable public {
    projects.push(addr, name, imageUrl,description, true)
    NewProject(addr, name, imageUrl,description, true);
  }

  function DonateToProject(address sender, address receiver, uint amt) payable public {
  }
}
