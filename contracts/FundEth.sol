pragma solidity ^0.4.2;


contract owned {
    address owner;

    modifier onlyowner() {
        if (msg.sender == owner) {
            _;
        }
    }

    function owned() public {
        owner = msg.sender;
    }
}

contract mortal is owned {
    function kill() public {
        if (msg.sender == owner)
            selfdestruct(owner);
    }
  }

contract FundEth is mortal {

  struct Project {
    address addr;
    string name;
    string imageUrl;
    string description;
    bool valid;
  }

  Project[] public projects;
  uint public totalProjects;



  function CreateProject(string name,string description, string imageUrl) payable public {
    projects.push(Project({addr: msg.sender, name: name, imageUrl: imageUrl, description: description, valid: true}));
    totalProjects++;
  }

  function DonateToProject(address sender, address receiver, uint amt) payable public {
    receiver.send(amt);
  }
}
