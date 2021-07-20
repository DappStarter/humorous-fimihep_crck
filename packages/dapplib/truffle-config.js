require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half problem forward tooth warrior ridge remain snake hope ensure bone then'; 
let testAccounts = [
"0xe4e49e241c6c293259f610a307e955d892b9d38da720a3bdf02849945ba8f022",
"0xf68c83d52371bdaf9d71947e54d219bb74d165fdfb7db5da7a2c23ec3fed1acd",
"0x0a8db155c28bf23b2513524412e30638db19c27bfb59048bd710724f0482ba9b",
"0xcb0c9e717b4b0006aafca96d7b2f6692caf9eaa60ee3a049bf3e1e76074a8819",
"0x6a549b07cbcb1d10a104a30f046a1c4f3e18fc6a798ec7b69aa468d2fd0aa11f",
"0x7caf208a67c591f540818d476ecb95d63bfa80c56edc938cf585f6c912927c7a",
"0x5be0a3854556fef12303eb0440642ddb92099869c472cbed7b2642b5eb44bfed",
"0x387be5ed83753069fad092744000b19ee16bc955ddaa6216e7d36f31b7b3d18e",
"0x1cd807a6cc597ecc72f1d5836532951c41e2aa2ccff877dcf313e0896a4d30a4",
"0x7c51a250b6d9fc96a8015f9aa0427e779d282979781458f32eddccb85bfa5745"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

