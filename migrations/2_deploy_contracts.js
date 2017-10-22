var Question = artifacts.require("./Question.sol");
var Questions = artifacts.require("./Questions.sol");

module.exports = function(deployer) {
  deployer.deploy(Question);
  deployer.link(Question, Questions);
  deployer.deploy(Questions);
};
