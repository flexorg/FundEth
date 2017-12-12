var contract = artifacts.require("./FundEth.sol");

module.exports = function(deployer) {
  deployer.deploy(contract);
};
