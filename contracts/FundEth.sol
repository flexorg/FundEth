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
    uint amt;
  }

  event ProjectNumber(uint _value);


  mapping ( uint => Project ) projects;
  uint public totalProjects;
  uint[] public projectIds;

  function CreateProject(string name,string description, string imageUrl) payable public {
    totalProjects++;
    var project = projects[totalProjects];
    projectIds.push(totalProjects);

    project.addr = msg.sender;
    project.name = name;
    project.description = description;
    project.imageUrl = imageUrl;
    project.amt = 0;
  }

  function getProject(uint projectId) view public returns (address, string, string, string, uint){
    return (projects[projectId].addr, projects[projectId].name, projects[projectId].imageUrl, projects[projectId].description, projects[projectId].amt );
  }
  function donateToProject(uint projectId, uint amount) payable returns (bool, address){
    projects[projectId].amt += amount;
    var addr = projects[projectId].addr;
    return (true, addr);
  }



  function () public {

  }


  }
