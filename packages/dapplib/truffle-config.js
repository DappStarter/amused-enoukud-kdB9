require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh skull drift razor rifle upgrade hidden private army gate'; 
let testAccounts = [
"0x6ff0f3928741ac0dbbd8e8a0c270cfc8594341aa13b2434b23480f75205ce2fc",
"0x9944c9c716c254b3fad691c6c5336ac9bc67a8ec5ef2dd986058758da7586394",
"0xe0da1b26e0d508b8175ad08c004b78366b1cdfaf1145eb582bac5f260769cb65",
"0x1c3438239fe0ba00a8aaef62692bdff0b165e564ca73fed2f74e6a2089247a02",
"0x7cb7a53ae70f74749be337481de2a1b575308172e253d05766f4c26ca6c0c781",
"0xebb520a50fc51c0fa76f649d753dbd37484ebe02df72bd57057abcc55bb63630",
"0xe1dbd82a7aea69f023a75dff1e32119b390b1269b77cba59e80904ff4e684b67",
"0x76b911a942364cd651933e25ccbda693dfc2123792ed892d36da4d69c050c206",
"0xc710479afe99a5c13cdc8d10ef0a660b36a9b79c1ebc120d67cf0e677a066ba4",
"0xc9141571b9a556d58d3c809a3c781f2aaffdeed59a6e22f1cf4df98f0a8d51ef"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

