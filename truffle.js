require('dotenv').config();
const HDWalletProvider = require("truffle-hdwallet-provider");
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
  	development: {
  		host: "127.0.0.1",
  		port: "8545",
  		network_id: '*',
  	},
  	ropsten: {
      provider: new HDWalletProvider(process.env.ROPSTEN_MNEMONIC, process.env.ROPSTEN_INFURA_URL),
      network_id: 3,
      gas: 4700000,
      gasPrice: 30000000000
    },
    mainnet: {
      provider: new HDWalletProvider(process.env.MAINNET_MNEMONIC, process.env.MAINNET_INFURA_URL),
      network_id: 1,
      gasPrice: 7000000000
    }
  },
  solc: {
  	optimizer: {
  		enabled: true,
  		runs: 200
  	}
  }
};
