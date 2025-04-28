require("@nomicfoundation/hardhat-toolbox");

const NEXT_PUBLIC_RPC_URL = "https://rpc.ankr.com/eth_holesky";
const NEXT_PUBLIC_PRIVATE_KEY = "df57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e";

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
