require("@nomicfoundation/hardhat-toolbox");

const NEXT_PUBLIC_RPC_URL = "https://rpc.ankr.com/eth_holesky";
const NEXT_PUBLIC_PRIVATE_KEY = "5662de70d90e08a8e7913af374ee9161b7bedd42a436e72a5218c7d900cf6f1b";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      viaIR: true,
    },
  },
  networks: {
    // hardhat: {
    //   chainId: 31337,
    // },
    holesky: {
      url: NEXT_PUBLIC_RPC_URL,
      accounts: [`0x${NEXT_PUBLIC_PRIVATE_KEY}`],
    },
  },
};
