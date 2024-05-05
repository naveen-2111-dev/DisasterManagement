/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",

  networks: {
    hardhat: {},
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/kU0vnF-EMOTyFAsQvjjyGkqwirWHBLIB",
      accounts:
        ["72daf6709917fbd6a2af7ac8e9b2855cf920e49accc6b60b0b0a5a0b45698a06"],
    },
  },

  paths: {
    artifacts:
      "./artifacts",
    sources: "./contracts",
  },
};
