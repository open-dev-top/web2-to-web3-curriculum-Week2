```shell
# day1 & day2
yarn init
yarn add ethers@5
yarn add dotenv

# day3
yarn add --dev hardhat

# Something is very strange, I want to init a hardhat project just in the day3 folder.During the "yarn hardhat init" command, I choose the root path to day3, but always show that day3 is not a hardhat project, when I run "yarn hardhat init" in the ethers-scripts-v5 folder, everything is ok.
yarn hardhat init

yarn add --dev "hardhat@^2.14.0" "@nomicfoundation/hardhat-network-helpers@^1.0.0" "@nomicfoundation/hardhat-verify@^2.0.0" "chai@^4.2.0" "hardhat-gas-reporter@^1.0.8" "solidity-coverage@^0.8.0" "@nomicfoundation/hardhat-ignition@^0.15.0" "@nomicfoundation/hardhat-toolbox@^5.0.0" "@nomicfoundation/hardhat-chai-matchers@^2.0.0" "@nomicfoundation/hardhat-ethers@^3.0.0" "ethers@^6.4.0" "@typechain/hardhat@^9.0.0" "typechain@^8.3.0" "@typechain/ethers-v6@^0.5.0" "@nomicfoundation/hardhat-ignition-ethers@^0.15.0"
```
