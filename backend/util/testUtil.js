import { default as Web3 } from 'web3';
import { default as contract } from 'truffle-contract';

import fundeth_artifacts from '../../build/contracts/FundEth.json';

var FundEth = contract(fundeth_artifacts);

var accounts;
var account;



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

export const deployInstance = () => {
    FundEth.deployed().then(instance => {
      console.log(instance);
      return instance;
    });
  };

export const deployPromise = (id) => {
    deployInstance().getProject(id, { from: account }).then(project => {
      return project;
    });
  };

export const getProject = (id) => {
    var project = deployPromise(id);
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

export const createProject = (name, description, imageUrl) => {
  return FundEth.deployed();
};
