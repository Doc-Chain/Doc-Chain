require('@nomiclabs/hardhat-waffle');

module.exports = {
    solidity: "0.8.17",
    networks: {
      hardhat: {
        chainId: 5777,
      },
      ganache: {
        url: "http://127.0.0.1:7545",
        accounts:["0x362b51a6edc29bdd94b389399b19aa2ab8f85f6bbd271488b41299dd43f196ec"]
      }
  
    },
    paths: {
      artifacts: "./src/artifacts",
    }
  };