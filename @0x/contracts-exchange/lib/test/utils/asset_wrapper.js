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
Object.defineProperty(exports, "__esModule", { value: true });
var contracts_test_utils_1 = require("@0x/contracts-test-utils");
var order_utils_1 = require("@0x/order-utils");
var types_1 = require("@0x/types");
var utils_1 = require("@0x/utils");
var _ = require("lodash");
/**
 * This class abstracts away the differences between ERC20 and ERC721 tokens so that
 * the logic that uses it does not need to care what standard a token belongs to.
 */
var AssetWrapper = /** @class */ (function () {
    function AssetWrapper(assetWrappers) {
        var _this = this;
        this._proxyIdToAssetWrappers = {};
        _.each(assetWrappers, function (assetWrapper) {
            var proxyId = assetWrapper.getProxyId();
            _this._proxyIdToAssetWrappers[proxyId] = assetWrapper;
        });
    }
    AssetWrapper.prototype.getBalanceAsync = function (userAddress, assetData) {
        return __awaiter(this, void 0, void 0, function () {
            var proxyId, _a, erc20Wrapper, balance, assetWrapper, assetProxyData, isOwner, balance;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        proxyId = order_utils_1.assetDataUtils.decodeAssetProxyId(assetData);
                        _a = proxyId;
                        switch (_a) {
                            case types_1.AssetProxyId.ERC20: return [3 /*break*/, 1];
                            case types_1.AssetProxyId.ERC721: return [3 /*break*/, 3];
                        }
                        return [3 /*break*/, 5];
                    case 1:
                        erc20Wrapper = this._proxyIdToAssetWrappers[proxyId];
                        return [4 /*yield*/, erc20Wrapper.getBalanceAsync(userAddress, assetData)];
                    case 2:
                        balance = _b.sent();
                        return [2 /*return*/, balance];
                    case 3:
                        assetWrapper = this._proxyIdToAssetWrappers[proxyId];
                        assetProxyData = order_utils_1.assetDataUtils.decodeERC721AssetData(assetData);
                        return [4 /*yield*/, assetWrapper.isOwnerAsync(userAddress, assetProxyData.tokenAddress, assetProxyData.tokenId)];
                    case 4:
                        isOwner = _b.sent();
                        balance = isOwner ? new utils_1.BigNumber(1) : new utils_1.BigNumber(0);
                        return [2 /*return*/, balance];
                    case 5: throw utils_1.errorUtils.spawnSwitchErr('proxyId', proxyId);
                }
            });
        });
    };
    AssetWrapper.prototype.setBalanceAsync = function (userAddress, assetData, desiredBalance) {
        return __awaiter(this, void 0, void 0, function () {
            var proxyId, _a, erc20Wrapper, erc721Wrapper, assetProxyData, doesTokenExist, tokenOwner, userAddresses, nonOwner;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        proxyId = order_utils_1.assetDataUtils.decodeAssetProxyId(assetData);
                        _a = proxyId;
                        switch (_a) {
                            case types_1.AssetProxyId.ERC20: return [3 /*break*/, 1];
                            case types_1.AssetProxyId.ERC721: return [3 /*break*/, 3];
                        }
                        return [3 /*break*/, 14];
                    case 1:
                        erc20Wrapper = this._proxyIdToAssetWrappers[proxyId];
                        return [4 /*yield*/, erc20Wrapper.setBalanceAsync(userAddress, assetData, desiredBalance)];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                    case 3:
                        if (!desiredBalance.eq(0) && !desiredBalance.eq(1)) {
                            throw new Error("Balance for ERC721 token can only be set to 0 or 1. Got: " + desiredBalance);
                        }
                        erc721Wrapper = this._proxyIdToAssetWrappers[proxyId];
                        assetProxyData = order_utils_1.assetDataUtils.decodeERC721AssetData(assetData);
                        doesTokenExist = erc721Wrapper.doesTokenExistAsync(assetProxyData.tokenAddress, assetProxyData.tokenId);
                        if (!(!doesTokenExist && desiredBalance.eq(1))) return [3 /*break*/, 5];
                        return [4 /*yield*/, erc721Wrapper.mintAsync(assetProxyData.tokenAddress, assetProxyData.tokenId, userAddress)];
                    case 4:
                        _b.sent();
                        return [2 /*return*/];
                    case 5:
                        if (!doesTokenExist && desiredBalance.eq(0)) {
                            return [2 /*return*/]; // noop
                        }
                        _b.label = 6;
                    case 6: return [4 /*yield*/, erc721Wrapper.ownerOfAsync(assetProxyData.tokenAddress, assetProxyData.tokenId)];
                    case 7:
                        tokenOwner = _b.sent();
                        if (!(userAddress !== tokenOwner && desiredBalance.eq(1))) return [3 /*break*/, 9];
                        return [4 /*yield*/, erc721Wrapper.transferFromAsync(assetProxyData.tokenAddress, assetProxyData.tokenId, tokenOwner, userAddress)];
                    case 8:
                        _b.sent();
                        return [3 /*break*/, 13];
                    case 9:
                        if (!(tokenOwner === userAddress && desiredBalance.eq(0))) return [3 /*break*/, 12];
                        return [4 /*yield*/, erc721Wrapper._web3Wrapper.getAvailableAddressesAsync()];
                    case 10:
                        userAddresses = _b.sent();
                        nonOwner = _.find(userAddresses, function (a) { return a !== userAddress; });
                        return [4 /*yield*/, erc721Wrapper.transferFromAsync(assetProxyData.tokenAddress, assetProxyData.tokenId, tokenOwner, nonOwner)];
                    case 11:
                        _b.sent();
                        return [2 /*return*/];
                    case 12:
                        if ((userAddress !== tokenOwner && desiredBalance.eq(0)) ||
                            (tokenOwner === userAddress && desiredBalance.eq(1))) {
                            return [2 /*return*/]; // noop
                        }
                        _b.label = 13;
                    case 13: return [3 /*break*/, 15];
                    case 14: throw utils_1.errorUtils.spawnSwitchErr('proxyId', proxyId);
                    case 15: return [2 /*return*/];
                }
            });
        });
    };
    AssetWrapper.prototype.getProxyAllowanceAsync = function (userAddress, assetData) {
        return __awaiter(this, void 0, void 0, function () {
            var proxyId, _a, erc20Wrapper, allowance, assetWrapper, erc721ProxyData, isProxyApprovedForAll, isProxyApproved, allowance;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        proxyId = order_utils_1.assetDataUtils.decodeAssetProxyId(assetData);
                        _a = proxyId;
                        switch (_a) {
                            case types_1.AssetProxyId.ERC20: return [3 /*break*/, 1];
                            case types_1.AssetProxyId.ERC721: return [3 /*break*/, 3];
                        }
                        return [3 /*break*/, 6];
                    case 1:
                        erc20Wrapper = this._proxyIdToAssetWrappers[proxyId];
                        return [4 /*yield*/, erc20Wrapper.getProxyAllowanceAsync(userAddress, assetData)];
                    case 2:
                        allowance = _b.sent();
                        return [2 /*return*/, allowance];
                    case 3:
                        assetWrapper = this._proxyIdToAssetWrappers[proxyId];
                        erc721ProxyData = order_utils_1.assetDataUtils.decodeERC721AssetData(assetData);
                        return [4 /*yield*/, assetWrapper.isProxyApprovedForAllAsync(userAddress, erc721ProxyData.tokenAddress)];
                    case 4:
                        isProxyApprovedForAll = _b.sent();
                        if (isProxyApprovedForAll) {
                            return [2 /*return*/, contracts_test_utils_1.constants.UNLIMITED_ALLOWANCE_IN_BASE_UNITS];
                        }
                        return [4 /*yield*/, assetWrapper.isProxyApprovedAsync(erc721ProxyData.tokenAddress, erc721ProxyData.tokenId)];
                    case 5:
                        isProxyApproved = _b.sent();
                        allowance = isProxyApproved ? new utils_1.BigNumber(1) : new utils_1.BigNumber(0);
                        return [2 /*return*/, allowance];
                    case 6: throw utils_1.errorUtils.spawnSwitchErr('proxyId', proxyId);
                }
            });
        });
    };
    AssetWrapper.prototype.setProxyAllowanceAsync = function (userAddress, assetData, desiredAllowance) {
        return __awaiter(this, void 0, void 0, function () {
            var proxyId, _a, erc20Wrapper, erc721Wrapper, assetProxyData, doesTokenExist, isProxyApprovedForAll, isApproved, isApproved, isProxyApproved;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        proxyId = order_utils_1.assetDataUtils.decodeAssetProxyId(assetData);
                        _a = proxyId;
                        switch (_a) {
                            case types_1.AssetProxyId.ERC20: return [3 /*break*/, 1];
                            case types_1.AssetProxyId.ERC721: return [3 /*break*/, 3];
                        }
                        return [3 /*break*/, 17];
                    case 1:
                        erc20Wrapper = this._proxyIdToAssetWrappers[proxyId];
                        return [4 /*yield*/, erc20Wrapper.setAllowanceAsync(userAddress, assetData, desiredAllowance)];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                    case 3:
                        if (!desiredAllowance.eq(0) &&
                            !desiredAllowance.eq(1) &&
                            !desiredAllowance.eq(contracts_test_utils_1.constants.UNLIMITED_ALLOWANCE_IN_BASE_UNITS)) {
                            throw new Error("Allowance for ERC721 token can only be set to 0, 1 or 2^256-1. Got: " + desiredAllowance);
                        }
                        erc721Wrapper = this._proxyIdToAssetWrappers[proxyId];
                        assetProxyData = order_utils_1.assetDataUtils.decodeERC721AssetData(assetData);
                        return [4 /*yield*/, erc721Wrapper.doesTokenExistAsync(assetProxyData.tokenAddress, assetProxyData.tokenId)];
                    case 4:
                        doesTokenExist = _b.sent();
                        if (!doesTokenExist) {
                            throw new Error("Cannot setProxyAllowance on non-existent token: " + assetProxyData.tokenAddress + " " + assetProxyData.tokenId);
                        }
                        return [4 /*yield*/, erc721Wrapper.isProxyApprovedForAllAsync(userAddress, assetProxyData.tokenAddress)];
                    case 5:
                        isProxyApprovedForAll = _b.sent();
                        if (!(!isProxyApprovedForAll && desiredAllowance.eq(contracts_test_utils_1.constants.UNLIMITED_ALLOWANCE_IN_BASE_UNITS))) return [3 /*break*/, 7];
                        isApproved = true;
                        return [4 /*yield*/, erc721Wrapper.approveProxyForAllAsync(assetProxyData.tokenAddress, assetProxyData.tokenId, isApproved)];
                    case 6:
                        _b.sent();
                        return [3 /*break*/, 10];
                    case 7:
                        if (!(isProxyApprovedForAll && desiredAllowance.eq(0))) return [3 /*break*/, 9];
                        isApproved = false;
                        return [4 /*yield*/, erc721Wrapper.approveProxyForAllAsync(assetProxyData.tokenAddress, assetProxyData.tokenId, isApproved)];
                    case 8:
                        _b.sent();
                        return [3 /*break*/, 10];
                    case 9:
                        if (isProxyApprovedForAll && desiredAllowance.eq(contracts_test_utils_1.constants.UNLIMITED_ALLOWANCE_IN_BASE_UNITS)) {
                            return [2 /*return*/]; // Noop
                        }
                        _b.label = 10;
                    case 10: return [4 /*yield*/, erc721Wrapper.isProxyApprovedAsync(assetProxyData.tokenAddress, assetProxyData.tokenId)];
                    case 11:
                        isProxyApproved = _b.sent();
                        if (!(!isProxyApproved && desiredAllowance.eq(1))) return [3 /*break*/, 13];
                        return [4 /*yield*/, erc721Wrapper.approveProxyAsync(assetProxyData.tokenAddress, assetProxyData.tokenId)];
                    case 12:
                        _b.sent();
                        return [3 /*break*/, 16];
                    case 13:
                        if (!(isProxyApproved && desiredAllowance.eq(0))) return [3 /*break*/, 15];
                        // Remove approval
                        return [4 /*yield*/, erc721Wrapper.approveAsync(contracts_test_utils_1.constants.NULL_ADDRESS, assetProxyData.tokenAddress, assetProxyData.tokenId)];
                    case 14:
                        // Remove approval
                        _b.sent();
                        return [3 /*break*/, 16];
                    case 15:
                        if ((!isProxyApproved && desiredAllowance.eq(0)) ||
                            (isProxyApproved && desiredAllowance.eq(1))) {
                            return [2 /*return*/]; // noop
                        }
                        _b.label = 16;
                    case 16: return [3 /*break*/, 18];
                    case 17: throw utils_1.errorUtils.spawnSwitchErr('proxyId', proxyId);
                    case 18: return [2 /*return*/];
                }
            });
        });
    };
    return AssetWrapper;
}());
exports.AssetWrapper = AssetWrapper;
//# sourceMappingURL=asset_wrapper.js.map