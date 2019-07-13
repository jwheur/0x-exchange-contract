"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var chai = require("chai");
var types_1 = require("@0x/types");
var utils_1 = require("@0x/utils");
var asset_data_utils_1 = require("../src/asset_data_utils");
var chai_setup_1 = require("./utils/chai_setup");
chai_setup_1.chaiSetup.configure();
var expect = chai.expect;
var KNOWN_ERC20_ENCODING = {
    address: '0x1dc4c1cefef38a777b15aa20260a54e584b16c48',
    assetData: '0xf47261b00000000000000000000000001dc4c1cefef38a777b15aa20260a54e584b16c48',
};
var KNOWN_ERC721_ENCODING = {
    address: '0x1dc4c1cefef38a777b15aa20260a54e584b16c48',
    tokenId: new utils_1.BigNumber(1),
    assetData: '0x025717920000000000000000000000001dc4c1cefef38a777b15aa20260a54e584b16c480000000000000000000000000000000000000000000000000000000000000001',
};
var KNOWN_ERC1155_ENCODING = {
    tokenAddress: '0x1dc4c1cefef38a777b15aa20260a54e584b16c48',
    tokenIds: [new utils_1.BigNumber(100), new utils_1.BigNumber(1001), new utils_1.BigNumber(10001)],
    tokenValues: [new utils_1.BigNumber(200), new utils_1.BigNumber(2001), new utils_1.BigNumber(20001)],
    callbackData: '0x025717920000000000000000000000001dc4c1cefef38a777b15aa20260a54e584b16c480000000000000000000000000000000000000000000000000000000000000001',
    assetData: '0xa7cb5fb70000000000000000000000001dc4c1cefef38a777b15aa20260a54e584b16c480000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001800000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000006400000000000000000000000000000000000000000000000000000000000003e90000000000000000000000000000000000000000000000000000000000002711000000000000000000000000000000000000000000000000000000000000000300000000000000000000000000000000000000000000000000000000000000c800000000000000000000000000000000000000000000000000000000000007d10000000000000000000000000000000000000000000000000000000000004e210000000000000000000000000000000000000000000000000000000000000044025717920000000000000000000000001dc4c1cefef38a777b15aa20260a54e584b16c48000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000',
};
var KNOWN_MULTI_ASSET_ENCODING = {
    amounts: [new utils_1.BigNumber(70), new utils_1.BigNumber(1), new utils_1.BigNumber(18)],
    nestedAssetData: [
        KNOWN_ERC20_ENCODING.assetData,
        KNOWN_ERC721_ENCODING.assetData,
        KNOWN_ERC1155_ENCODING.assetData,
    ],
    assetData: '0x94cfcdd7000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000030000000000000000000000000000000000000000000000000000000000000046000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000120000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000001400000000000000000000000000000000000000000000000000000000000000024f47261b00000000000000000000000001dc4c1cefef38a777b15aa20260a54e584b16c48000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000044025717920000000000000000000000001dc4c1cefef38a777b15aa20260a54e584b16c480000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000204a7cb5fb70000000000000000000000001dc4c1cefef38a777b15aa20260a54e584b16c480000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001800000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000006400000000000000000000000000000000000000000000000000000000000003e90000000000000000000000000000000000000000000000000000000000002711000000000000000000000000000000000000000000000000000000000000000300000000000000000000000000000000000000000000000000000000000000c800000000000000000000000000000000000000000000000000000000000007d10000000000000000000000000000000000000000000000000000000000004e210000000000000000000000000000000000000000000000000000000000000044025717920000000000000000000000001dc4c1cefef38a777b15aa20260a54e584b16c4800000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
};
var KNOWN_DUTCH_AUCTION_ENCODING = {
    tokenAddress: '0x34d402f14d58e001d8efbe6585051bf9706aa064',
    assetData: '0xf47261b000000000000000000000000034d402f14d58e001d8efbe6585051bf9706aa064',
    beginTimeSeconds: new utils_1.BigNumber(1562807905),
    beginAmount: new utils_1.BigNumber(5),
    dutchAuctionAssetData: '0xf47261b000000000000000000000000034d402f14d58e001d8efbe6585051bf9706aa064000000000000000000000000000000000000000000000000000000005d268e610000000000000000000000000000000000000000000000000000000000000005',
};
describe('assetDataUtils', function () {
    it('should encode ERC20', function () {
        var assetData = asset_data_utils_1.assetDataUtils.encodeERC20AssetData(KNOWN_ERC20_ENCODING.address);
        expect(assetData).to.equal(KNOWN_ERC20_ENCODING.assetData);
    });
    it('should decode ERC20', function () {
        var decodedAssetData = asset_data_utils_1.assetDataUtils.decodeERC20AssetData(KNOWN_ERC20_ENCODING.assetData);
        expect(decodedAssetData.tokenAddress).to.equal(KNOWN_ERC20_ENCODING.address);
        expect(decodedAssetData.assetProxyId).to.equal(types_1.AssetProxyId.ERC20);
    });
    it('should encode ERC721', function () {
        var assetData = asset_data_utils_1.assetDataUtils.encodeERC721AssetData(KNOWN_ERC721_ENCODING.address, KNOWN_ERC721_ENCODING.tokenId);
        expect(assetData).to.equal(KNOWN_ERC721_ENCODING.assetData);
    });
    it('should decode ERC721', function () {
        var decodedAssetData = asset_data_utils_1.assetDataUtils.decodeERC721AssetData(KNOWN_ERC721_ENCODING.assetData);
        expect(decodedAssetData.tokenAddress).to.equal(KNOWN_ERC721_ENCODING.address);
        expect(decodedAssetData.assetProxyId).to.equal(types_1.AssetProxyId.ERC721);
        expect(decodedAssetData.tokenId).to.be.bignumber.equal(KNOWN_ERC721_ENCODING.tokenId);
    });
    it('should encode ERC1155', function () {
        var assetData = asset_data_utils_1.assetDataUtils.encodeERC1155AssetData(KNOWN_ERC1155_ENCODING.tokenAddress, KNOWN_ERC1155_ENCODING.tokenIds, KNOWN_ERC1155_ENCODING.tokenValues, KNOWN_ERC1155_ENCODING.callbackData);
        expect(assetData).to.equal(KNOWN_ERC1155_ENCODING.assetData);
    });
    it('should decode ERC1155', function () {
        var decodedAssetData = asset_data_utils_1.assetDataUtils.decodeERC1155AssetData(KNOWN_ERC1155_ENCODING.assetData);
        expect(decodedAssetData.assetProxyId).to.be.equal(types_1.AssetProxyId.ERC1155);
        expect(decodedAssetData.tokenAddress).to.be.equal(KNOWN_ERC1155_ENCODING.tokenAddress);
        expect(decodedAssetData.tokenValues).to.be.deep.equal(KNOWN_ERC1155_ENCODING.tokenValues);
        expect(decodedAssetData.tokenIds).to.be.deep.equal(KNOWN_ERC1155_ENCODING.tokenIds);
        expect(decodedAssetData.callbackData).to.be.equal(KNOWN_ERC1155_ENCODING.callbackData);
    });
    it('should encode ERC20, ERC721 and ERC1155 multiAssetData', function () {
        var assetData = asset_data_utils_1.assetDataUtils.encodeMultiAssetData(KNOWN_MULTI_ASSET_ENCODING.amounts, KNOWN_MULTI_ASSET_ENCODING.nestedAssetData);
        expect(assetData).to.equal(KNOWN_MULTI_ASSET_ENCODING.assetData);
    });
    it('should decode ERC20, ERC721 and ERC1155 multiAssetData', function () {
        var decodedAssetData = asset_data_utils_1.assetDataUtils.decodeMultiAssetData(KNOWN_MULTI_ASSET_ENCODING.assetData);
        expect(decodedAssetData.assetProxyId).to.equal(types_1.AssetProxyId.MultiAsset);
        expect(decodedAssetData.amounts).to.deep.equal(KNOWN_MULTI_ASSET_ENCODING.amounts);
        expect(decodedAssetData.nestedAssetData).to.deep.equal(KNOWN_MULTI_ASSET_ENCODING.nestedAssetData);
    });
    it('should recursively decode ERC20 and ERC721 multiAssetData', function () {
        var decodedAssetData = asset_data_utils_1.assetDataUtils.decodeMultiAssetDataRecursively(KNOWN_MULTI_ASSET_ENCODING.assetData);
        expect(decodedAssetData.assetProxyId).to.equal(types_1.AssetProxyId.MultiAsset);
        expect(decodedAssetData.amounts).to.deep.equal(KNOWN_MULTI_ASSET_ENCODING.amounts);
        expect(decodedAssetData.nestedAssetData.length).to.equal(3);
        // tslint:disable-next-line:no-unnecessary-type-assertion
        var decodedErc20AssetData = decodedAssetData.nestedAssetData[0];
        expect(decodedErc20AssetData.tokenAddress).to.equal(KNOWN_ERC20_ENCODING.address);
        expect(decodedErc20AssetData.assetProxyId).to.equal(types_1.AssetProxyId.ERC20);
        // tslint:disable-next-line:no-unnecessary-type-assertion
        var decodedErc721AssetData = decodedAssetData.nestedAssetData[1];
        expect(decodedErc721AssetData.tokenAddress).to.equal(KNOWN_ERC721_ENCODING.address);
        expect(decodedErc721AssetData.assetProxyId).to.equal(types_1.AssetProxyId.ERC721);
        expect(decodedErc721AssetData.tokenId).to.be.bignumber.equal(KNOWN_ERC721_ENCODING.tokenId);
        // tslint:disable-next-line:no-unnecessary-type-assertion
        var decodedErc1155AssetData = decodedAssetData.nestedAssetData[2];
        expect(decodedErc1155AssetData.tokenAddress).to.be.equal(KNOWN_ERC1155_ENCODING.tokenAddress);
        expect(decodedErc1155AssetData.tokenValues).to.be.deep.equal(KNOWN_ERC1155_ENCODING.tokenValues);
        expect(decodedErc1155AssetData.tokenIds).to.be.deep.equal(KNOWN_ERC1155_ENCODING.tokenIds);
        expect(decodedErc1155AssetData.callbackData).to.be.equal(KNOWN_ERC1155_ENCODING.callbackData);
    });
    it('should recursively decode nested assetData within multiAssetData', function () {
        // setup test parameters
        var erc20Amount = new utils_1.BigNumber(1);
        var erc721Amount = new utils_1.BigNumber(1);
        var erc1155Amount = new utils_1.BigNumber(15);
        var nestedAssetsAmount = new utils_1.BigNumber(2);
        var amounts = [erc20Amount, erc721Amount, erc1155Amount, nestedAssetsAmount];
        var nestedAssetData = [
            KNOWN_ERC20_ENCODING.assetData,
            KNOWN_ERC721_ENCODING.assetData,
            KNOWN_ERC1155_ENCODING.assetData,
            KNOWN_MULTI_ASSET_ENCODING.assetData,
        ];
        var assetData = asset_data_utils_1.assetDataUtils.encodeMultiAssetData(amounts, nestedAssetData);
        // execute test
        var decodedAssetData = asset_data_utils_1.assetDataUtils.decodeMultiAssetDataRecursively(assetData);
        // validate asset data
        expect(decodedAssetData.assetProxyId).to.equal(types_1.AssetProxyId.MultiAsset);
        var expectedAmounts = [
            erc20Amount,
            erc721Amount,
            erc1155Amount,
            KNOWN_MULTI_ASSET_ENCODING.amounts[0].times(nestedAssetsAmount),
            KNOWN_MULTI_ASSET_ENCODING.amounts[1].times(nestedAssetsAmount),
            KNOWN_MULTI_ASSET_ENCODING.amounts[2].times(nestedAssetsAmount),
        ];
        expect(decodedAssetData.amounts).to.deep.equal(expectedAmounts);
        var expectedNestedAssetDataLength = 6;
        expect(decodedAssetData.nestedAssetData.length).to.be.equal(expectedNestedAssetDataLength);
        // validate nested asset data (outer)
        var nestedAssetDataIndex = 0;
        // tslint:disable-next-line:no-unnecessary-type-assertion
        var decodedErc20AssetData1 = decodedAssetData.nestedAssetData[nestedAssetDataIndex++];
        expect(decodedErc20AssetData1.tokenAddress).to.equal(KNOWN_ERC20_ENCODING.address);
        expect(decodedErc20AssetData1.assetProxyId).to.equal(types_1.AssetProxyId.ERC20);
        // tslint:disable-next-line:no-unnecessary-type-assertion
        var decodedErc721AssetData1 = decodedAssetData.nestedAssetData[nestedAssetDataIndex++];
        expect(decodedErc721AssetData1.tokenAddress).to.equal(KNOWN_ERC721_ENCODING.address);
        expect(decodedErc721AssetData1.assetProxyId).to.equal(types_1.AssetProxyId.ERC721);
        // tslint:disable-next-line:no-unnecessary-type-assertion
        var decodedErc1155AssetData1 = decodedAssetData.nestedAssetData[nestedAssetDataIndex++];
        expect(decodedErc1155AssetData1.tokenAddress).to.be.equal(KNOWN_ERC1155_ENCODING.tokenAddress);
        expect(decodedErc1155AssetData1.tokenValues).to.be.deep.equal(KNOWN_ERC1155_ENCODING.tokenValues);
        expect(decodedErc1155AssetData1.tokenIds).to.be.deep.equal(KNOWN_ERC1155_ENCODING.tokenIds);
        expect(decodedErc1155AssetData1.callbackData).to.be.equal(KNOWN_ERC1155_ENCODING.callbackData);
        // validate nested asset data (inner)
        // tslint:disable-next-line:no-unnecessary-type-assertion
        var decodedErc20AssetData2 = decodedAssetData.nestedAssetData[nestedAssetDataIndex++];
        expect(decodedErc20AssetData2.tokenAddress).to.equal(KNOWN_ERC20_ENCODING.address);
        expect(decodedErc20AssetData2.assetProxyId).to.equal(types_1.AssetProxyId.ERC20);
        // tslint:disable-next-line:no-unnecessary-type-assertion
        var decodedErc721AssetData2 = decodedAssetData.nestedAssetData[nestedAssetDataIndex++];
        expect(decodedErc721AssetData2.tokenAddress).to.equal(KNOWN_ERC721_ENCODING.address);
        expect(decodedErc721AssetData2.assetProxyId).to.equal(types_1.AssetProxyId.ERC721);
        // tslint:disable-next-line:no-unnecessary-type-assertion
        var decodedErc1155AssetData2 = decodedAssetData.nestedAssetData[nestedAssetDataIndex++];
        expect(decodedErc1155AssetData2.tokenAddress).to.be.equal(KNOWN_ERC1155_ENCODING.tokenAddress);
        expect(decodedErc1155AssetData2.tokenValues).to.be.deep.equal(KNOWN_ERC1155_ENCODING.tokenValues);
        expect(decodedErc1155AssetData2.tokenIds).to.be.deep.equal(KNOWN_ERC1155_ENCODING.tokenIds);
        expect(decodedErc1155AssetData2.callbackData).to.be.equal(KNOWN_ERC1155_ENCODING.callbackData);
    });
    it('should encode Dutch Auction', function () { return __awaiter(_this, void 0, void 0, function () {
        var encodedAssetData;
        return __generator(this, function (_a) {
            encodedAssetData = asset_data_utils_1.assetDataUtils.encodeDutchAuctionAssetData(KNOWN_DUTCH_AUCTION_ENCODING.assetData, KNOWN_DUTCH_AUCTION_ENCODING.beginTimeSeconds, KNOWN_DUTCH_AUCTION_ENCODING.beginAmount);
            expect(encodedAssetData).to.be.equal(KNOWN_DUTCH_AUCTION_ENCODING.dutchAuctionAssetData);
            return [2 /*return*/];
        });
    }); });
    it('should decode Dutch Auction', function () { return __awaiter(_this, void 0, void 0, function () {
        var _a, assetData, beginTimeSeconds, beginAmount, _b, assetProxyId, tokenAddress;
        return __generator(this, function (_c) {
            _a = asset_data_utils_1.assetDataUtils.decodeDutchAuctionData(KNOWN_DUTCH_AUCTION_ENCODING.dutchAuctionAssetData), assetData = _a.assetData, beginTimeSeconds = _a.beginTimeSeconds, beginAmount = _a.beginAmount;
            _b = asset_data_utils_1.assetDataUtils.decodeERC20AssetData(KNOWN_DUTCH_AUCTION_ENCODING.assetData), assetProxyId = _b.assetProxyId, tokenAddress = _b.tokenAddress;
            // tslint:disable:no-unnecessary-type-assertion
            expect(assetData.assetProxyId).to.be.equal(assetProxyId);
            expect(assetData.tokenAddress).to.be.equal(tokenAddress);
            // tslint:enable:no-unnecessary-type-assertion
            expect(beginTimeSeconds).to.deep.equal(KNOWN_DUTCH_AUCTION_ENCODING.beginTimeSeconds);
            expect(beginAmount).to.deep.equal(KNOWN_DUTCH_AUCTION_ENCODING.beginAmount);
            return [2 /*return*/];
        });
    }); });
});
//# sourceMappingURL=asset_data_utils_test.js.map