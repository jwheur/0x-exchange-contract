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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var contracts_asset_proxy_1 = require("@0x/contracts-asset-proxy");
var contracts_test_utils_1 = require("@0x/contracts-test-utils");
var dev_utils_1 = require("@0x/dev-utils");
var order_utils_1 = require("@0x/order-utils");
var types_1 = require("@0x/types");
var utils_1 = require("@0x/utils");
var chai = require("chai");
var _ = require("lodash");
var src_1 = require("../src");
contracts_test_utils_1.chaiSetup.configure();
var expect = chai.expect;
var blockchainLifecycle = new dev_utils_1.BlockchainLifecycle(contracts_test_utils_1.web3Wrapper);
// tslint:disable:no-unnecessary-type-assertion
describe('AssetProxyDispatcher', function () {
    var owner;
    var notOwner;
    var makerAddress;
    var takerAddress;
    var zrxToken;
    var erc20Proxy;
    var erc721Proxy;
    var assetProxyDispatcher;
    var erc20Wrapper;
    var erc721Wrapper;
    before(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, blockchainLifecycle.startAsync()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    after(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, blockchainLifecycle.revertAsync()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    before(function () { return __awaiter(_this, void 0, void 0, function () {
        var _a, _b, _c, accounts, usedAddresses, numDummyErc20ToDeploy, _d, _e, _f, _g;
        return __generator(this, function (_h) {
            switch (_h.label) {
                case 0: return [4 /*yield*/, contracts_test_utils_1.web3Wrapper.getAvailableAddressesAsync()];
                case 1:
                    accounts = _h.sent();
                    usedAddresses = (_a = _.slice(accounts, 0, 4), _b = __read(_a, 4), owner = _b[0], notOwner = _b[1], makerAddress = _b[2], takerAddress = _b[3], _a);
                    erc20Wrapper = new contracts_asset_proxy_1.ERC20Wrapper(contracts_test_utils_1.provider, usedAddresses, owner);
                    erc721Wrapper = new contracts_asset_proxy_1.ERC721Wrapper(contracts_test_utils_1.provider, usedAddresses, owner);
                    numDummyErc20ToDeploy = 1;
                    return [4 /*yield*/, erc20Wrapper.deployDummyTokensAsync(numDummyErc20ToDeploy, contracts_test_utils_1.constants.DUMMY_TOKEN_DECIMALS)];
                case 2:
                    _c = __read.apply(void 0, [_h.sent(), 1]), zrxToken = _c[0];
                    return [4 /*yield*/, erc20Wrapper.deployProxyAsync()];
                case 3:
                    erc20Proxy = _h.sent();
                    return [4 /*yield*/, erc20Wrapper.setBalancesAndAllowancesAsync()];
                case 4:
                    _h.sent();
                    return [4 /*yield*/, erc721Wrapper.deployProxyAsync()];
                case 5:
                    erc721Proxy = _h.sent();
                    return [4 /*yield*/, src_1.TestAssetProxyDispatcherContract.deployFrom0xArtifactAsync(src_1.artifacts.TestAssetProxyDispatcher, contracts_test_utils_1.provider, contracts_test_utils_1.txDefaults)];
                case 6:
                    assetProxyDispatcher = _h.sent();
                    _e = (_d = contracts_test_utils_1.web3Wrapper).awaitTransactionSuccessAsync;
                    return [4 /*yield*/, erc20Proxy.addAuthorizedAddress.sendTransactionAsync(assetProxyDispatcher.address, {
                            from: owner,
                        })];
                case 7: return [4 /*yield*/, _e.apply(_d, [_h.sent(),
                        contracts_test_utils_1.constants.AWAIT_TRANSACTION_MINED_MS])];
                case 8:
                    _h.sent();
                    _g = (_f = contracts_test_utils_1.web3Wrapper).awaitTransactionSuccessAsync;
                    return [4 /*yield*/, erc721Proxy.addAuthorizedAddress.sendTransactionAsync(assetProxyDispatcher.address, {
                            from: owner,
                        })];
                case 9: return [4 /*yield*/, _g.apply(_f, [_h.sent(),
                        contracts_test_utils_1.constants.AWAIT_TRANSACTION_MINED_MS])];
                case 10:
                    _h.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, blockchainLifecycle.startAsync()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    afterEach(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, blockchainLifecycle.revertAsync()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    describe('registerAssetProxy', function () {
        it('should record proxy upon registration', function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, _b, proxyAddress;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = contracts_test_utils_1.web3Wrapper).awaitTransactionSuccessAsync;
                        return [4 /*yield*/, assetProxyDispatcher.registerAssetProxy.sendTransactionAsync(erc20Proxy.address, { from: owner })];
                    case 1: return [4 /*yield*/, _b.apply(_a, [_c.sent(),
                            contracts_test_utils_1.constants.AWAIT_TRANSACTION_MINED_MS])];
                    case 2:
                        _c.sent();
                        return [4 /*yield*/, assetProxyDispatcher.getAssetProxy.callAsync(types_1.AssetProxyId.ERC20)];
                    case 3:
                        proxyAddress = _c.sent();
                        expect(proxyAddress).to.be.equal(erc20Proxy.address);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should be able to record multiple proxies', function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, _b, proxyAddress, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _b = (_a = contracts_test_utils_1.web3Wrapper).awaitTransactionSuccessAsync;
                        return [4 /*yield*/, assetProxyDispatcher.registerAssetProxy.sendTransactionAsync(erc20Proxy.address, { from: owner })];
                    case 1: 
                    // Record first proxy
                    return [4 /*yield*/, _b.apply(_a, [_e.sent(),
                            contracts_test_utils_1.constants.AWAIT_TRANSACTION_MINED_MS])];
                    case 2:
                        // Record first proxy
                        _e.sent();
                        return [4 /*yield*/, assetProxyDispatcher.getAssetProxy.callAsync(types_1.AssetProxyId.ERC20)];
                    case 3:
                        proxyAddress = _e.sent();
                        expect(proxyAddress).to.be.equal(erc20Proxy.address);
                        _d = (_c = contracts_test_utils_1.web3Wrapper).awaitTransactionSuccessAsync;
                        return [4 /*yield*/, assetProxyDispatcher.registerAssetProxy.sendTransactionAsync(erc721Proxy.address, {
                                from: owner,
                            })];
                    case 4: 
                    // Record another proxy
                    return [4 /*yield*/, _d.apply(_c, [_e.sent(),
                            contracts_test_utils_1.constants.AWAIT_TRANSACTION_MINED_MS])];
                    case 5:
                        // Record another proxy
                        _e.sent();
                        return [4 /*yield*/, assetProxyDispatcher.getAssetProxy.callAsync(types_1.AssetProxyId.ERC721)];
                    case 6:
                        proxyAddress = _e.sent();
                        expect(proxyAddress).to.be.equal(erc721Proxy.address);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should throw if a proxy with the same id is already registered', function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, _b, proxyAddress, newErc20TransferProxy;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = contracts_test_utils_1.web3Wrapper).awaitTransactionSuccessAsync;
                        return [4 /*yield*/, assetProxyDispatcher.registerAssetProxy.sendTransactionAsync(erc20Proxy.address, { from: owner })];
                    case 1: 
                    // Initial registration
                    return [4 /*yield*/, _b.apply(_a, [_c.sent(),
                            contracts_test_utils_1.constants.AWAIT_TRANSACTION_MINED_MS])];
                    case 2:
                        // Initial registration
                        _c.sent();
                        return [4 /*yield*/, assetProxyDispatcher.getAssetProxy.callAsync(types_1.AssetProxyId.ERC20)];
                    case 3:
                        proxyAddress = _c.sent();
                        expect(proxyAddress).to.be.equal(erc20Proxy.address);
                        return [4 /*yield*/, contracts_asset_proxy_1.ERC20ProxyContract.deployFrom0xArtifactAsync(contracts_asset_proxy_1.artifacts.ERC20Proxy, contracts_test_utils_1.provider, contracts_test_utils_1.txDefaults)];
                    case 4:
                        newErc20TransferProxy = _c.sent();
                        // Register new ERC20 Transfer Proxy contract
                        return [2 /*return*/, contracts_test_utils_1.expectTransactionFailedAsync(assetProxyDispatcher.registerAssetProxy.sendTransactionAsync(newErc20TransferProxy.address, {
                                from: owner,
                            }), types_1.RevertReason.AssetProxyAlreadyExists)];
                }
            });
        }); });
        it('should throw if requesting address is not owner', function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, contracts_test_utils_1.expectTransactionFailedAsync(assetProxyDispatcher.registerAssetProxy.sendTransactionAsync(erc20Proxy.address, { from: notOwner }), types_1.RevertReason.OnlyContractOwner)];
            });
        }); });
        it('should log an event with correct arguments when an asset proxy is registered', function () { return __awaiter(_this, void 0, void 0, function () {
            var logDecoder, txReceipt, _a, _b, logs, log;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        logDecoder = new contracts_test_utils_1.LogDecoder(contracts_test_utils_1.web3Wrapper, src_1.artifacts);
                        _b = (_a = logDecoder).getTxWithDecodedLogsAsync;
                        return [4 /*yield*/, assetProxyDispatcher.registerAssetProxy.sendTransactionAsync(erc20Proxy.address, { from: owner })];
                    case 1: return [4 /*yield*/, _b.apply(_a, [_c.sent()])];
                    case 2:
                        txReceipt = _c.sent();
                        logs = txReceipt.logs;
                        log = logs[0];
                        expect(log.args.id).to.equal(types_1.AssetProxyId.ERC20);
                        expect(log.args.assetProxy).to.equal(erc20Proxy.address);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('getAssetProxy', function () {
        it('should return correct address of registered proxy', function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, _b, proxyAddress;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = contracts_test_utils_1.web3Wrapper).awaitTransactionSuccessAsync;
                        return [4 /*yield*/, assetProxyDispatcher.registerAssetProxy.sendTransactionAsync(erc20Proxy.address, { from: owner })];
                    case 1: return [4 /*yield*/, _b.apply(_a, [_c.sent(),
                            contracts_test_utils_1.constants.AWAIT_TRANSACTION_MINED_MS])];
                    case 2:
                        _c.sent();
                        return [4 /*yield*/, assetProxyDispatcher.getAssetProxy.callAsync(types_1.AssetProxyId.ERC20)];
                    case 3:
                        proxyAddress = _c.sent();
                        expect(proxyAddress).to.be.equal(erc20Proxy.address);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should return NULL address if requesting non-existent proxy', function () { return __awaiter(_this, void 0, void 0, function () {
            var proxyAddress;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, assetProxyDispatcher.getAssetProxy.callAsync(types_1.AssetProxyId.ERC20)];
                    case 1:
                        proxyAddress = _a.sent();
                        expect(proxyAddress).to.be.equal(contracts_test_utils_1.constants.NULL_ADDRESS);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('dispatchTransferFrom', function () {
        it('should dispatch transfer to registered proxy', function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, _b, encodedAssetData, erc20Balances, amount, _c, _d, newBalances;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _b = (_a = contracts_test_utils_1.web3Wrapper).awaitTransactionSuccessAsync;
                        return [4 /*yield*/, assetProxyDispatcher.registerAssetProxy.sendTransactionAsync(erc20Proxy.address, { from: owner })];
                    case 1: 
                    // Register ERC20 proxy
                    return [4 /*yield*/, _b.apply(_a, [_e.sent(),
                            contracts_test_utils_1.constants.AWAIT_TRANSACTION_MINED_MS])];
                    case 2:
                        // Register ERC20 proxy
                        _e.sent();
                        encodedAssetData = order_utils_1.assetDataUtils.encodeERC20AssetData(zrxToken.address);
                        return [4 /*yield*/, erc20Wrapper.getBalancesAsync()];
                    case 3:
                        erc20Balances = _e.sent();
                        amount = new utils_1.BigNumber(10);
                        _d = (_c = contracts_test_utils_1.web3Wrapper).awaitTransactionSuccessAsync;
                        return [4 /*yield*/, assetProxyDispatcher.publicDispatchTransferFrom.sendTransactionAsync(encodedAssetData, makerAddress, takerAddress, amount, { from: owner })];
                    case 4: return [4 /*yield*/, _d.apply(_c, [_e.sent(),
                            contracts_test_utils_1.constants.AWAIT_TRANSACTION_MINED_MS])];
                    case 5:
                        _e.sent();
                        return [4 /*yield*/, erc20Wrapper.getBalancesAsync()];
                    case 6:
                        newBalances = _e.sent();
                        expect(newBalances[makerAddress][zrxToken.address]).to.be.bignumber.equal(erc20Balances[makerAddress][zrxToken.address].minus(amount));
                        expect(newBalances[takerAddress][zrxToken.address]).to.be.bignumber.equal(erc20Balances[takerAddress][zrxToken.address].plus(amount));
                        return [2 /*return*/];
                }
            });
        }); });
        it('should not dispatch a transfer if amount == 0', function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, _b, encodedAssetData, erc20Balances, amount, txReceipt, _c, _d, newBalances;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _b = (_a = contracts_test_utils_1.web3Wrapper).awaitTransactionSuccessAsync;
                        return [4 /*yield*/, assetProxyDispatcher.registerAssetProxy.sendTransactionAsync(erc20Proxy.address, { from: owner })];
                    case 1: 
                    // Register ERC20 proxy
                    return [4 /*yield*/, _b.apply(_a, [_e.sent(),
                            contracts_test_utils_1.constants.AWAIT_TRANSACTION_MINED_MS])];
                    case 2:
                        // Register ERC20 proxy
                        _e.sent();
                        encodedAssetData = order_utils_1.assetDataUtils.encodeERC20AssetData(zrxToken.address);
                        return [4 /*yield*/, erc20Wrapper.getBalancesAsync()];
                    case 3:
                        erc20Balances = _e.sent();
                        amount = contracts_test_utils_1.constants.ZERO_AMOUNT;
                        _d = (_c = contracts_test_utils_1.web3Wrapper).awaitTransactionSuccessAsync;
                        return [4 /*yield*/, assetProxyDispatcher.publicDispatchTransferFrom.sendTransactionAsync(encodedAssetData, makerAddress, takerAddress, amount, { from: owner })];
                    case 4: return [4 /*yield*/, _d.apply(_c, [_e.sent(),
                            contracts_test_utils_1.constants.AWAIT_TRANSACTION_MINED_MS])];
                    case 5:
                        txReceipt = _e.sent();
                        expect(txReceipt.logs.length).to.be.equal(0);
                        return [4 /*yield*/, erc20Wrapper.getBalancesAsync()];
                    case 6:
                        newBalances = _e.sent();
                        expect(newBalances).to.deep.equal(erc20Balances);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should not dispatch a transfer if from == to', function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, _b, encodedAssetData, erc20Balances, amount, txReceipt, _c, _d, newBalances;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _b = (_a = contracts_test_utils_1.web3Wrapper).awaitTransactionSuccessAsync;
                        return [4 /*yield*/, assetProxyDispatcher.registerAssetProxy.sendTransactionAsync(erc20Proxy.address, { from: owner })];
                    case 1: 
                    // Register ERC20 proxy
                    return [4 /*yield*/, _b.apply(_a, [_e.sent(),
                            contracts_test_utils_1.constants.AWAIT_TRANSACTION_MINED_MS])];
                    case 2:
                        // Register ERC20 proxy
                        _e.sent();
                        encodedAssetData = order_utils_1.assetDataUtils.encodeERC20AssetData(zrxToken.address);
                        return [4 /*yield*/, erc20Wrapper.getBalancesAsync()];
                    case 3:
                        erc20Balances = _e.sent();
                        amount = new utils_1.BigNumber(10);
                        _d = (_c = contracts_test_utils_1.web3Wrapper).awaitTransactionSuccessAsync;
                        return [4 /*yield*/, assetProxyDispatcher.publicDispatchTransferFrom.sendTransactionAsync(encodedAssetData, makerAddress, makerAddress, amount, { from: owner })];
                    case 4: return [4 /*yield*/, _d.apply(_c, [_e.sent(),
                            contracts_test_utils_1.constants.AWAIT_TRANSACTION_MINED_MS])];
                    case 5:
                        txReceipt = _e.sent();
                        expect(txReceipt.logs.length).to.be.equal(0);
                        return [4 /*yield*/, erc20Wrapper.getBalancesAsync()];
                    case 6:
                        newBalances = _e.sent();
                        expect(newBalances).to.deep.equal(erc20Balances);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should throw if dispatching to unregistered proxy', function () { return __awaiter(_this, void 0, void 0, function () {
            var encodedAssetData, amount;
            return __generator(this, function (_a) {
                encodedAssetData = order_utils_1.assetDataUtils.encodeERC20AssetData(zrxToken.address);
                amount = new utils_1.BigNumber(10);
                return [2 /*return*/, contracts_test_utils_1.expectTransactionFailedAsync(assetProxyDispatcher.publicDispatchTransferFrom.sendTransactionAsync(encodedAssetData, makerAddress, takerAddress, amount, { from: owner }), types_1.RevertReason.AssetProxyDoesNotExist)];
            });
        }); });
    });
});
// tslint:enable:no-unnecessary-type-assertion
//# sourceMappingURL=dispatcher.js.map