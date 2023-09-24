require('dotenv').config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  defaultNetWork: "hardhat",
  networks: {
    hardhat: {
      chainId: 137,
      forking: {
        url: "https://polygon-mainnet.infura.io/v3/f2e1f299987142df94ed9fbb88262c45",
      }
    }
  }
};
