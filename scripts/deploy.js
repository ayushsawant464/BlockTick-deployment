const hre = require("hardhat");
require("@nomicfoundation/hardhat-verify");

async function main() {

  const contractEvents = await hre.ethers.deployContract("ContractEvents");
  await contractEvents.waitForDeployment();
  console.log(contractEvents.target);

  await hre.run("verify:verify", {
    address: contractEvents.target,
    constructorArguments: [],
  });

}

main()