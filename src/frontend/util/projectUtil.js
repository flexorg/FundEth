import { default as Web3 } from 'web3';
import { default as contract } from 'truffle-contract';

// import fundeth_artifacts from '../../../build/contracts/FundEth.json';

// var FundEth = contract(fundeth_artifacts);

var accounts;
var account;

var projects = {};

// export const start = (web3) => {
//   var self = this;
//   var abiArray = [ { "constant": false, "inputs": [], "name": "kill", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "projectIds", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "totalProjects", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "projectId", "type": "uint256" }, { "name": "amount", "type": "uint256" } ], "name": "donateToProject", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [ { "name": "name", "type": "string" }, { "name": "description", "type": "string" }, { "name": "imageUrl", "type": "string" } ], "name": "CreateProject", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [ { "name": "projectId", "type": "uint256" } ], "name": "getProject", "outputs": [ { "name": "", "type": "address", "value": "0x0000000000000000000000000000000000000000" }, { "name": "", "type": "string", "value": "" }, { "name": "", "type": "string", "value": "" }, { "name": "", "type": "string", "value": "" }, { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "payable": false, "stateMutability": "nonpayable", "type": "fallback" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "_value", "type": "uint256" } ], "name": "ProjectNumber", "type": "event" } ]
//   // explicitly define web 3 provider to avoid compile errors
//    window.MyContract = web3.eth.contract(abiArray);
//   // Bootstrap the MetaCoin abstraction for use.
//   // FundEth.setProvider(web3.currentProvider);
//
//   // Get the initial account balanceso it can be displayed
//   web3.eth.getAccounts((err, accs) => {
//     if (err != null) {
//       alert('There was an error fetching your accounts.');
//       return;
//     }
//
//     if (accs.length == 0) {
//       alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly");
//       return;
//     }
//
//     accounts = accs;
//     account = accounts[0];
//
//   });
// };

const deployInstance = () => {
  var contractInstance = window.MyContract.at("0xc3b083Fda43C81d037Be1739A72A5abd26e07A0B");
  return contractInstance;
};

const deployPromise = async (id) => {
  var instance = await deployInstance();
  // This is the same as doing deployInstance().then(instance => {instance.getProject...})

  return instance.getProject(id, { from: account });
};

export const getProject = async (id) => {
  var project = await deployPromise(id);
  if (project[0] !== "0x0000000000000000000000000000000000000000") {
    var pojo = {
      id: id,
      address: project[0],
      name: project[1],
      image_url: project[2],
      description: project[3],
      amt_raised: project[4].toNumber()
    };
    return pojo;
  }
};

//null account = "0x0000000000000000000000000000000000000000"


const fetchProjects = () => {
  for (var i = 1; i < 20; i++) {
    getProject(i).then(response => {
      if (response) {
        projects[response.id] = response;
      }
    })
  }
};

export const getProjects = async () => {
  var fetches = await fetchProjects();

  return projects;
};


export const createProject = async (name, description, imageUrl) => {
  var project = await deployInstance();

  project.CreateProject(name, description, imageUrl, { from: account, gas: 500000 });
  return true;
};

export const donateToProject = async (projectId, amount) => {
  var project = await deployInstance();
  project.donateToProject(projectId, amount, { from: account, value: amount });
  return true;
};
