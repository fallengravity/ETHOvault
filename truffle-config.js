module.exports = {
compilers: {
    solc: {
      version: "0.4.21",
}
},
  networks: {
    ganache: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    }
  }
};
