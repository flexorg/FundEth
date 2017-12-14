import { default as Web3} from 'web3';
import { default as contract } from 'truffle-contract';




import fundeth_artifacts from '../../build/contracts/FundEth.json';
var FundEth = contract(fundeth_artifacts);



var accounts;
var account;

window.App = {
  start: function() {
    var self = this;

    // Bootstrap the MetaCoin abstraction for Use.
    FundEth.setProvider(web3.currentProvider);

    // Get the initial account balance so it can be displayed.
    web3.eth.getAccounts(function(err, accs) {
      if (err != null) {
        alert("There was an error fetching your accounts.");
        return;
      }

      if (accs.length == 0) {
        alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
        return;
      }

      accounts = accs;
      account = accounts[0];


    });
  },

  createProject: function(name, description, imageUrl){
    FundEth.deployed().then((instance) => {
      let fundEthInstance = instance;
      fundEthInstance.CreateProject(name, description, imageUrl, {from: account});
    });
  },

  donateToProject: function(projectId, amount){

    FundEth.deployed().then( function (instance) {
      let fundEthInstance = instance;
      fundEthInstance.donateToProject(projectId, amount, {from: account});
    });
  },


  getProject: function(id){
    FundEth.deployed().then((instance) => {
      let fundEthInstance = instance;
      fundEthInstance.getProject(id, {from: account}).then( project => {
        if (project[0] !== "0x0000000000000000000000000000000000000000") {
          window.projects[id] = {
            id: id,
            address: project[0],
            name: project[1],
            image_url: project[2],
            description: project[3],
            amt_raised: project[4].toNumber()
          };
        }
      });
    });
  }
};

//null account = "0x0000000000000000000000000000000000000000"

window.addEventListener('load', function() {
  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== 'undefined') {
    console.warn("Using web3 detected from external source. If using MetaMask, see the following link. Feel free to delete this warning. :) http://truffleframework.com/tutorials/truffle-and-metamask")
    // Use Mist/MetaMask's provider
    window.web3 = new Web3(web3.currentProvider);
  } else {
    console.warn("No web3 detected. Falling back to http://localhost:8545. You should remove this fallback when you deploy live, as it's inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask");
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  }

  App.start();

  window.testStart = function () {
    App.createProject("test", "I am a test", "google.com");
  };

  window.projects = {};

  window.testGet = function () {
    App.getProject(3);
  };

  window.testDonate = function (){
    App.donateToProject(3,500);
  };


});
