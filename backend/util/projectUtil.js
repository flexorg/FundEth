import { default as Web3 } from 'web3';
import { default as contract } from 'truffle-contract';

import fundeth_artifacts from '../../build/contracts/FundEth.json';

var FundEth = contract(fundeth_artifacts);

var accounts;
var account;

var projects = {};

export const start = () => {
  var self = this;

  // Bootstrap the MetaCoin abstraction for use.
  FundEth.setProvider(web3.currentProvider);

  // Get the initial account balanceso it can be displayed
  web3.eth.getAccounts((err, accs) => {
    if (err != null) {
      alert('There was an error fetching your accounts.');
      return;
    }

    if (accs.length == 0) {
      alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly");
      return;
    }

    accounts = accs;
    account = accounts[0];
  });
};

const deployInstance = () => {
  var instance = FundEth.deployed();
  return instance;
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

  project.CreateProject(name, description, imageUrl, { from: account });
  return true;
};

export const donateToProject = async (projectId, amount) => {
  var project = await deployInstance();

  project.donateToProject(projectId, amount, { from: account, value: amount, gas: 500000 });
  return true;
};
