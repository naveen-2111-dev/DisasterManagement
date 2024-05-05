const { ethers } = require("@nomiclabs/hardhat-ethers");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("deployer/...",deployer)
  console.log("deploying contract with address/...", deployer.address);
  console.log("balance of the deployer account/...", await deployer.getBalance);
  const Contract = await ethers.getContractFactory("DisasterManagements");
  console.log("contract/...", Contract);
  const DeployedContract = await Contract.deploy();
  console.log("deployed contract/...", DeployedContract);
  console.log("Contract address/...", DeployedContract.address);
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((err) => {
    console.log("error/...", err);
    process.exit(1);
  });
