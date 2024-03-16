require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomicfoundation/hardhat-verify");
require("hardhat-gas-reporter");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "hardhat",
  networks: {
    linea: {
      url: process.env.RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
      chainId: 59140
    },
    sepolia: {
      url: process.env.RPC,
      accounts: [process.env.PRIVATE_KEY]
    },
    polygon: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  etherscan: {
    // apiKey: process.env.API_KEY,
    apiKey: process.env.API
  },
  sourcify: {
    enabled: true,
  },
  gasReporter: {
    enabled: true
  }
};
