"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NetworkId;
(function (NetworkId) {
    NetworkId[NetworkId["Mainnet"] = 1] = "Mainnet";
    NetworkId[NetworkId["Ropsten"] = 3] = "Ropsten";
    NetworkId[NetworkId["Rinkeby"] = 4] = "Rinkeby";
    NetworkId[NetworkId["Kovan"] = 42] = "Kovan";
    NetworkId[NetworkId["Ganache"] = 50] = "Ganache";
})(NetworkId = exports.NetworkId || (exports.NetworkId = {}));
var NULL_ADDRESS = '0x0000000000000000000000000000000000000000';
var networkToAddresses = {
    1: {
        exchange: '0x080bf510fcbf18b91105470639e9561022937712',
        erc20Proxy: '0x95e6f48254609a6ee006f7d493c8e5fb97094cef',
        erc721Proxy: '0xefc70a1b18c432bdc64b596838b4d138f6bc6cad',
        forwarder: '0xdc4587cb17d2a1829512e2cfec621f8066290e6a',
        orderValidator: '0xa09329c6003c9a5402102e226417738ee22cf1f2',
        zrxToken: '0xe41d2489571d322189246dafa5ebde1f4699f498',
        etherToken: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
        assetProxyOwner: '0xdffe798c7172dd6deb32baee68af322e8f495ce0',
        dutchAuction: NULL_ADDRESS,
        coordinatorRegistry: NULL_ADDRESS,
        coordinator: NULL_ADDRESS,
    },
    3: {
        erc20Proxy: '0xb1408f4c245a23c31b98d2c626777d4c0d766caa',
        erc721Proxy: '0xe654aac058bfbf9f83fcaee7793311dd82f6ddb4',
        zrxToken: '0xff67881f8d12f372d91baae9752eb3631ff0ed00',
        etherToken: '0xc778417e063141139fce010982780140aa0cd5ab',
        exchange: '0x4530c0483a1633c7a1c97d2c53721caff2caaaaf',
        assetProxyOwner: '0xf5fa5b5fed2727a0e44ac67f6772e97977aa358b',
        forwarder: '0x2240dab907db71e64d3e0dba4800c83b5c502d4e',
        orderValidator: '0x90431a90516ab49af23a0530e04e8c7836e7122f',
        dutchAuction: '0x2df6b59309f35ada230ec7d61d7d97355017a1df',
        coordinatorRegistry: '0x403cc23e88c17c4652fb904784d1af640a6722d9',
        coordinator: '0x25aae5b981ce6683cc5aeea1855d927e0b59066f',
    },
    4: {
        exchange: '0xbce0b5f6eb618c565c3e5f5cd69652bbc279f44e',
        erc20Proxy: '0x2f5ae4f6106e89b4147651688a92256885c5f410',
        erc721Proxy: '0x7656d773e11ff7383a14dcf09a9c50990481cd10',
        zrxToken: '0x8080c7e4b81ecf23aa6f877cfbfd9b0c228c6ffa',
        etherToken: '0xc778417e063141139fce010982780140aa0cd5ab',
        assetProxyOwner: '0xe1703da878afcebff5b7624a826902af475b9c03',
        forwarder: '0x2d40589abbdee84961f3a7656b9af7adb0ee5ab4',
        orderValidator: '0x0c5173a51e26b29d6126c686756fb9fbef71f762',
        dutchAuction: '0xdd7bd6437e67c422879364740ab5855fe3dc41f7',
        coordinatorRegistry: '0x1084b6a398e47907bae43fec3ff4b677db6e4fee',
        coordinator: '0x25aae5b981ce6683cc5aeea1855d927e0b59066f',
    },
    42: {
        erc20Proxy: '0xf1ec01d6236d3cd881a0bf0130ea25fe4234003e',
        erc721Proxy: '0x2a9127c745688a165106c11cd4d647d2220af821',
        zrxToken: '0x2002d3812f58e35f0ea1ffbf80a75a38c32175fa',
        etherToken: '0xd0a1e359811322d97991e03f863a0c30c2cf029c',
        exchange: '0x35dd2932454449b14cee11a94d3674a936d5d7b2',
        assetProxyOwner: '0x2c824d2882baa668e0d5202b1e7f2922278703f8',
        forwarder: '0x17992e4ffb22730138e4b62aaa6367fa9d3699a6',
        orderValidator: '0xb389da3d204b412df2f75c6afb3d0a7ce0bc283d',
        dutchAuction: '0xe11667fb51f34c5367f40d7e379327ce32ee7150',
        coordinatorRegistry: '0x09fb99968c016a3ff537bf58fb3d9fe55a7975d5',
        coordinator: '0x25aae5b981ce6683cc5aeea1855d927e0b59066f',
    },
    // NetworkId 50 represents our Ganache snapshot generated from migrations.
    50: {
        erc20Proxy: '0x1dc4c1cefef38a777b15aa20260a54e584b16c48',
        erc721Proxy: '0x1d7022f5b17d2f8b695918fb48fa1089c9f85401',
        zrxToken: '0x871dd7c2b4b25e1aa18728e9d5f2af4c4e431f5c',
        etherToken: '0x0b1ba0af832d7c05fd64161e0db78e85978e8082',
        exchange: '0x48bacb9266a570d521063ef5dd96e61686dbe788',
        assetProxyOwner: '0x04b5dadd2c0d6a261bfafbc964e0cac48585def3',
        forwarder: '0x6000eca38b8b5bba64986182fe2a69c57f6b5414',
        orderValidator: '0x32eecaf51dfea9618e9bc94e9fbfddb1bbdcba15',
        dutchAuction: '0x7e3f4e1deb8d3a05d9d2da87d9521268d0ec3239',
        coordinatorRegistry: '0xaa86dda78e9434aca114b6676fc742a18d15a1cc',
        coordinator: '0x4d3d5c850dd5bd9d6f4adda3dd039a3c8054ca29',
    },
};
/**
 * Used to get addresses of contracts that have been deployed to either the
 * Ethereum mainnet or a supported testnet. Throws if there are no known
 * contracts deployed on the corresponding network.
 * @param networkId The desired networkId.
 * @returns The set of addresses for contracts which have been deployed on the
 * given networkId.
 */
function getContractAddressesForNetworkOrThrow(networkId) {
    if (networkToAddresses[networkId] === undefined) {
        throw new Error("Unknown network id (" + networkId + "). No known 0x contracts have been deployed on this network.");
    }
    return networkToAddresses[networkId];
}
exports.getContractAddressesForNetworkOrThrow = getContractAddressesForNetworkOrThrow;
//# sourceMappingURL=index.js.map