require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");  // for etherscan verification
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
};

const { PRIVATE_KEY, LINEA_RPC_URL, ETHERSCAN_API_KEY } = process.env;

module.exports = {
  solidity: "0.8.18", // or your preferred version
  networks: {
    linea: {
      url: LINEA_RPC_URL,
      accounts: [`0x${PRIVATE_KEY}`],  // Private key of the account you're using
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,  // Optional for contract verification
  },
};
