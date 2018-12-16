var ARFREYRToken = artifacts.require("./ARFREYRToken");

module.exports = (deployer) => {
  	deployer.deploy(ARFREYRToken, 
  		process.env.CROWDSALE_WALLET, 
  		process.env.BOUNTY_WALLET, 
  		process.env.SITE_ACCOUNT_WALLET);
};
