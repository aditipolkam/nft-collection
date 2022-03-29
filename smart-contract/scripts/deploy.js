const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { WHITELIST_CONTRACT_ADDRESS, METADATA_URL } = require("../constants")


async function main() {
    const whitelistContract = WHITELIST_CONTRACT_ADDRESS;
    const metadataURL = METADATA_URL;

    const cryptoDevsContract = await ethers.getContractFactory("CryptoDevs");

    const deployedCryptoDevsContract = await cryptoDevsContract.deploy(metadataURL, whitelistContract);

    console.log("Crypto Devs Contract Address: ", deployedCryptoDevsContract.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });

    //contract address = 0x286979b587dc189a09639815805914A9f3E27F73