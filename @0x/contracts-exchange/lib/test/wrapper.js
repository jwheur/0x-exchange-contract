"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
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
var web3_wrapper_1 = require("@0x/web3-wrapper");
var chai = require("chai");
var _ = require("lodash");
var src_1 = require("../src");
contracts_test_utils_1.chaiSetup.configure();
var expect = chai.expect;
var blockchainLifecycle = new dev_utils_1.BlockchainLifecycle(contracts_test_utils_1.web3Wrapper);
describe('Exchange wrappers', function () {
    var makerAddress;
    var owner;
    var takerAddress;
    var feeRecipientAddress;
    var erc20TokenA;
    var erc20TokenB;
    var zrxToken;
    var erc721Token;
    var exchange;
    var erc20Proxy;
    var erc721Proxy;
    var reentrantErc20Token;
    var exchangeWrapper;
    var erc20Wrapper;
    var erc721Wrapper;
    var erc20Balances;
    var orderFactory;
    var erc721MakerAssetId;
    var erc721TakerAssetId;
    var defaultMakerAssetAddress;
    var defaultTakerAssetAddress;
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
        var _a, _b, _c, _d, accounts, usedAddresses, numDummyErc20ToDeploy, erc721Balances, _e, _f, _g, _h, defaultOrderParams, privateKey;
        return __generator(this, function (_j) {
            switch (_j.label) {
                case 0: return [4 /*yield*/, contracts_test_utils_1.web3Wrapper.getAvailableAddressesAsync()];
                case 1:
                    accounts = _j.sent();
                    usedAddresses = (_a = _.slice(accounts, 0, 4), _b = __read(_a, 4), owner = _b[0], makerAddress = _b[1], takerAddress = _b[2], feeRecipientAddress = _b[3], _a);
                    erc20Wrapper = new contracts_asset_proxy_1.ERC20Wrapper(contracts_test_utils_1.provider, usedAddresses, owner);
                    erc721Wrapper = new contracts_asset_proxy_1.ERC721Wrapper(contracts_test_utils_1.provider, usedAddresses, owner);
                    numDummyErc20ToDeploy = 3;
                    return [4 /*yield*/, erc20Wrapper.deployDummyTokensAsync(numDummyErc20ToDeploy, contracts_test_utils_1.constants.DUMMY_TOKEN_DECIMALS)];
                case 2:
                    _c = __read.apply(void 0, [_j.sent(), 3]), erc20TokenA = _c[0], erc20TokenB = _c[1], zrxToken = _c[2];
                    return [4 /*yield*/, erc20Wrapper.deployProxyAsync()];
                case 3:
                    erc20Proxy = _j.sent();
                    return [4 /*yield*/, erc20Wrapper.setBalancesAndAllowancesAsync()];
                case 4:
                    _j.sent();
                    return [4 /*yield*/, erc721Wrapper.deployDummyTokensAsync()];
                case 5:
                    _d = __read.apply(void 0, [_j.sent(), 1]), erc721Token = _d[0];
                    return [4 /*yield*/, erc721Wrapper.deployProxyAsync()];
                case 6:
                    erc721Proxy = _j.sent();
                    return [4 /*yield*/, erc721Wrapper.setBalancesAndAllowancesAsync()];
                case 7:
                    _j.sent();
                    return [4 /*yield*/, erc721Wrapper.getBalancesAsync()];
                case 8:
                    erc721Balances = _j.sent();
                    erc721MakerAssetId = erc721Balances[makerAddress][erc721Token.address][0];
                    erc721TakerAssetId = erc721Balances[takerAddress][erc721Token.address][0];
                    return [4 /*yield*/, src_1.ExchangeContract.deployFrom0xArtifactAsync(src_1.artifacts.Exchange, contracts_test_utils_1.provider, contracts_test_utils_1.txDefaults, order_utils_1.assetDataUtils.encodeERC20AssetData(zrxToken.address))];
                case 9:
                    exchange = _j.sent();
                    exchangeWrapper = new src_1.ExchangeWrapper(exchange, contracts_test_utils_1.provider);
                    return [4 /*yield*/, exchangeWrapper.registerAssetProxyAsync(erc20Proxy.address, owner)];
                case 10:
                    _j.sent();
                    return [4 /*yield*/, exchangeWrapper.registerAssetProxyAsync(erc721Proxy.address, owner)];
                case 11:
                    _j.sent();
                    _f = (_e = contracts_test_utils_1.web3Wrapper).awaitTransactionSuccessAsync;
                    return [4 /*yield*/, erc20Proxy.addAuthorizedAddress.sendTransactionAsync(exchange.address, {
                            from: owner,
                        })];
                case 12: return [4 /*yield*/, _f.apply(_e, [_j.sent(),
                        contracts_test_utils_1.constants.AWAIT_TRANSACTION_MINED_MS])];
                case 13:
                    _j.sent();
                    _h = (_g = contracts_test_utils_1.web3Wrapper).awaitTransactionSuccessAsync;
                    return [4 /*yield*/, erc721Proxy.addAuthorizedAddress.sendTransactionAsync(exchange.address, {
                            from: owner,
                        })];
                case 14: return [4 /*yield*/, _h.apply(_g, [_j.sent(),
                        contracts_test_utils_1.constants.AWAIT_TRANSACTION_MINED_MS])];
                case 15:
                    _j.sent();
                    return [4 /*yield*/, src_1.ReentrantERC20TokenContract.deployFrom0xArtifactAsync(src_1.artifacts.ReentrantERC20Token, contracts_test_utils_1.provider, contracts_test_utils_1.txDefaults, exchange.address)];
                case 16:
                    reentrantErc20Token = _j.sent();
                    defaultMakerAssetAddress = erc20TokenA.address;
                    defaultTakerAssetAddress = erc20TokenB.address;
                    defaultOrderParams = __assign({}, contracts_test_utils_1.constants.STATIC_ORDER_PARAMS, { exchangeAddress: exchange.address, makerAddress: makerAddress,
                        feeRecipientAddress: feeRecipientAddress, makerAssetData: order_utils_1.assetDataUtils.encodeERC20AssetData(defaultMakerAssetAddress), takerAssetData: order_utils_1.assetDataUtils.encodeERC20AssetData(defaultTakerAssetAddress) });
                    privateKey = contracts_test_utils_1.constants.TESTRPC_PRIVATE_KEYS[accounts.indexOf(makerAddress)];
                    orderFactory = new contracts_test_utils_1.OrderFactory(privateKey, defaultOrderParams);
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
                    return [4 /*yield*/, erc20Wrapper.getBalancesAsync()];
                case 2:
                    erc20Balances = _a.sent();
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
    describe('fillOrKillOrder', function () {
        var reentrancyTest = function (functionNames) {
            _.forEach(functionNames, function (functionName, functionId) { return __awaiter(_this, void 0, void 0, function () {
                var description;
                var _this = this;
                return __generator(this, function (_a) {
                    description = "should not allow fillOrKillOrder to reenter the Exchange contract via " + functionName;
                    it(description, function () { return __awaiter(_this, void 0, void 0, function () {
                        var signedOrder, _a, _b;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0: return [4 /*yield*/, orderFactory.newSignedOrderAsync({
                                        makerAssetData: order_utils_1.assetDataUtils.encodeERC20AssetData(reentrantErc20Token.address),
                                    })];
                                case 1:
                                    signedOrder = _c.sent();
                                    _b = (_a = contracts_test_utils_1.web3Wrapper).awaitTransactionSuccessAsync;
                                    return [4 /*yield*/, reentrantErc20Token.setCurrentFunction.sendTransactionAsync(functionId)];
                                case 2: return [4 /*yield*/, _b.apply(_a, [_c.sent(),
                                        contracts_test_utils_1.constants.AWAIT_TRANSACTION_MINED_MS])];
                                case 3:
                                    _c.sent();
                                    return [4 /*yield*/, contracts_test_utils_1.expectTransactionFailedAsync(exchangeWrapper.fillOrKillOrderAsync(signedOrder, takerAddress), types_1.RevertReason.TransferFailed)];
                                case 4:
                                    _c.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    return [2 /*return*/];
                });
            }); });
        };
        describe('fillOrKillOrder reentrancy tests', function () { return reentrancyTest(contracts_test_utils_1.constants.FUNCTIONS_WITH_MUTEX); });
        it('should transfer the correct amounts', function () { return __awaiter(_this, void 0, void 0, function () {
            var signedOrder, takerAssetFillAmount, newBalances, makerAssetFilledAmount, makerFee, takerFee;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, orderFactory.newSignedOrderAsync({
                            makerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 18),
                            takerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(200), 18),
                        })];
                    case 1:
                        signedOrder = _a.sent();
                        takerAssetFillAmount = signedOrder.takerAssetAmount.div(2);
                        return [4 /*yield*/, exchangeWrapper.fillOrKillOrderAsync(signedOrder, takerAddress, {
                                takerAssetFillAmount: takerAssetFillAmount,
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, erc20Wrapper.getBalancesAsync()];
                    case 3:
                        newBalances = _a.sent();
                        makerAssetFilledAmount = takerAssetFillAmount
                            .times(signedOrder.makerAssetAmount)
                            .dividedToIntegerBy(signedOrder.takerAssetAmount);
                        makerFee = signedOrder.makerFee
                            .times(makerAssetFilledAmount)
                            .dividedToIntegerBy(signedOrder.makerAssetAmount);
                        takerFee = signedOrder.takerFee
                            .times(makerAssetFilledAmount)
                            .dividedToIntegerBy(signedOrder.makerAssetAmount);
                        expect(newBalances[makerAddress][defaultMakerAssetAddress]).to.be.bignumber.equal(erc20Balances[makerAddress][defaultMakerAssetAddress].minus(makerAssetFilledAmount));
                        expect(newBalances[makerAddress][defaultTakerAssetAddress]).to.be.bignumber.equal(erc20Balances[makerAddress][defaultTakerAssetAddress].plus(takerAssetFillAmount));
                        expect(newBalances[makerAddress][zrxToken.address]).to.be.bignumber.equal(erc20Balances[makerAddress][zrxToken.address].minus(makerFee));
                        expect(newBalances[takerAddress][defaultTakerAssetAddress]).to.be.bignumber.equal(erc20Balances[takerAddress][defaultTakerAssetAddress].minus(takerAssetFillAmount));
                        expect(newBalances[takerAddress][defaultMakerAssetAddress]).to.be.bignumber.equal(erc20Balances[takerAddress][defaultMakerAssetAddress].plus(makerAssetFilledAmount));
                        expect(newBalances[takerAddress][zrxToken.address]).to.be.bignumber.equal(erc20Balances[takerAddress][zrxToken.address].minus(takerFee));
                        expect(newBalances[feeRecipientAddress][zrxToken.address]).to.be.bignumber.equal(erc20Balances[feeRecipientAddress][zrxToken.address].plus(makerFee.plus(takerFee)));
                        return [2 /*return*/];
                }
            });
        }); });
        it('should throw if a signedOrder is expired', function () { return __awaiter(_this, void 0, void 0, function () {
            var currentTimestamp, signedOrder;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, contracts_test_utils_1.getLatestBlockTimestampAsync()];
                    case 1:
                        currentTimestamp = _a.sent();
                        return [4 /*yield*/, orderFactory.newSignedOrderAsync({
                                expirationTimeSeconds: new utils_1.BigNumber(currentTimestamp).minus(10),
                            })];
                    case 2:
                        signedOrder = _a.sent();
                        return [2 /*return*/, contracts_test_utils_1.expectTransactionFailedAsync(exchangeWrapper.fillOrKillOrderAsync(signedOrder, takerAddress), types_1.RevertReason.OrderUnfillable)];
                }
            });
        }); });
        it('should throw if entire takerAssetFillAmount not filled', function () { return __awaiter(_this, void 0, void 0, function () {
            var signedOrder;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, orderFactory.newSignedOrderAsync()];
                    case 1:
                        signedOrder = _a.sent();
                        return [4 /*yield*/, exchangeWrapper.fillOrderAsync(signedOrder, takerAddress, {
                                takerAssetFillAmount: signedOrder.takerAssetAmount.div(2),
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, contracts_test_utils_1.expectTransactionFailedAsync(exchangeWrapper.fillOrKillOrderAsync(signedOrder, takerAddress), types_1.RevertReason.CompleteFillFailed)];
                }
            });
        }); });
    });
    describe('fillOrderNoThrow', function () {
        var reentrancyTest = function (functionNames) {
            _.forEach(functionNames, function (functionName, functionId) { return __awaiter(_this, void 0, void 0, function () {
                var description;
                var _this = this;
                return __generator(this, function (_a) {
                    description = "should not allow fillOrderNoThrow to reenter the Exchange contract via " + functionName;
                    it(description, function () { return __awaiter(_this, void 0, void 0, function () {
                        var signedOrder, _a, _b, newBalances;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0: return [4 /*yield*/, orderFactory.newSignedOrderAsync({
                                        makerAssetData: order_utils_1.assetDataUtils.encodeERC20AssetData(reentrantErc20Token.address),
                                    })];
                                case 1:
                                    signedOrder = _c.sent();
                                    _b = (_a = contracts_test_utils_1.web3Wrapper).awaitTransactionSuccessAsync;
                                    return [4 /*yield*/, reentrantErc20Token.setCurrentFunction.sendTransactionAsync(functionId)];
                                case 2: return [4 /*yield*/, _b.apply(_a, [_c.sent(),
                                        contracts_test_utils_1.constants.AWAIT_TRANSACTION_MINED_MS])];
                                case 3:
                                    _c.sent();
                                    return [4 /*yield*/, exchangeWrapper.fillOrderNoThrowAsync(signedOrder, takerAddress)];
                                case 4:
                                    _c.sent();
                                    return [4 /*yield*/, erc20Wrapper.getBalancesAsync()];
                                case 5:
                                    newBalances = _c.sent();
                                    expect(erc20Balances).to.deep.equal(newBalances);
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    return [2 /*return*/];
                });
            }); });
        };
        describe('fillOrderNoThrow reentrancy tests', function () { return reentrancyTest(contracts_test_utils_1.constants.FUNCTIONS_WITH_MUTEX); });
        it('should transfer the correct amounts', function () { return __awaiter(_this, void 0, void 0, function () {
            var signedOrder, takerAssetFillAmount, newBalances, makerAssetFilledAmount, makerFee, takerFee;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, orderFactory.newSignedOrderAsync({
                            makerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 18),
                            takerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(200), 18),
                        })];
                    case 1:
                        signedOrder = _a.sent();
                        takerAssetFillAmount = signedOrder.takerAssetAmount.div(2);
                        return [4 /*yield*/, exchangeWrapper.fillOrderNoThrowAsync(signedOrder, takerAddress, {
                                takerAssetFillAmount: takerAssetFillAmount,
                                // HACK(albrow): We need to hardcode the gas estimate here because
                                // the Geth gas estimator doesn't work with the way we use
                                // delegatecall and swallow errors.
                                gas: 250000,
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, erc20Wrapper.getBalancesAsync()];
                    case 3:
                        newBalances = _a.sent();
                        makerAssetFilledAmount = takerAssetFillAmount
                            .times(signedOrder.makerAssetAmount)
                            .dividedToIntegerBy(signedOrder.takerAssetAmount);
                        makerFee = signedOrder.makerFee
                            .times(makerAssetFilledAmount)
                            .dividedToIntegerBy(signedOrder.makerAssetAmount);
                        takerFee = signedOrder.takerFee
                            .times(makerAssetFilledAmount)
                            .dividedToIntegerBy(signedOrder.makerAssetAmount);
                        expect(newBalances[makerAddress][defaultMakerAssetAddress]).to.be.bignumber.equal(erc20Balances[makerAddress][defaultMakerAssetAddress].minus(makerAssetFilledAmount));
                        expect(newBalances[makerAddress][defaultTakerAssetAddress]).to.be.bignumber.equal(erc20Balances[makerAddress][defaultTakerAssetAddress].plus(takerAssetFillAmount));
                        expect(newBalances[makerAddress][zrxToken.address]).to.be.bignumber.equal(erc20Balances[makerAddress][zrxToken.address].minus(makerFee));
                        expect(newBalances[takerAddress][defaultTakerAssetAddress]).to.be.bignumber.equal(erc20Balances[takerAddress][defaultTakerAssetAddress].minus(takerAssetFillAmount));
                        expect(newBalances[takerAddress][defaultMakerAssetAddress]).to.be.bignumber.equal(erc20Balances[takerAddress][defaultMakerAssetAddress].plus(makerAssetFilledAmount));
                        expect(newBalances[takerAddress][zrxToken.address]).to.be.bignumber.equal(erc20Balances[takerAddress][zrxToken.address].minus(takerFee));
                        expect(newBalances[feeRecipientAddress][zrxToken.address]).to.be.bignumber.equal(erc20Balances[feeRecipientAddress][zrxToken.address].plus(makerFee.plus(takerFee)));
                        return [2 /*return*/];
                }
            });
        }); });
        it('should not change erc20Balances if maker erc20Balances are too low to fill order', function () { return __awaiter(_this, void 0, void 0, function () {
            var signedOrder, newBalances;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, orderFactory.newSignedOrderAsync({
                            makerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100000), 18),
                        })];
                    case 1:
                        signedOrder = _a.sent();
                        return [4 /*yield*/, exchangeWrapper.fillOrderNoThrowAsync(signedOrder, takerAddress)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, erc20Wrapper.getBalancesAsync()];
                    case 3:
                        newBalances = _a.sent();
                        expect(newBalances).to.be.deep.equal(erc20Balances);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should not change erc20Balances if taker erc20Balances are too low to fill order', function () { return __awaiter(_this, void 0, void 0, function () {
            var signedOrder, newBalances;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, orderFactory.newSignedOrderAsync({
                            takerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100000), 18),
                        })];
                    case 1:
                        signedOrder = _a.sent();
                        return [4 /*yield*/, exchangeWrapper.fillOrderNoThrowAsync(signedOrder, takerAddress)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, erc20Wrapper.getBalancesAsync()];
                    case 3:
                        newBalances = _a.sent();
                        expect(newBalances).to.be.deep.equal(erc20Balances);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should not change erc20Balances if maker allowances are too low to fill order', function () { return __awaiter(_this, void 0, void 0, function () {
            var signedOrder, _a, _b, _c, _d, newBalances;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, orderFactory.newSignedOrderAsync()];
                    case 1:
                        signedOrder = _e.sent();
                        _b = (_a = contracts_test_utils_1.web3Wrapper).awaitTransactionSuccessAsync;
                        return [4 /*yield*/, erc20TokenA.approve.sendTransactionAsync(erc20Proxy.address, new utils_1.BigNumber(0), {
                                from: makerAddress,
                            })];
                    case 2: return [4 /*yield*/, _b.apply(_a, [_e.sent(),
                            contracts_test_utils_1.constants.AWAIT_TRANSACTION_MINED_MS])];
                    case 3:
                        _e.sent();
                        return [4 /*yield*/, exchangeWrapper.fillOrderNoThrowAsync(signedOrder, takerAddress)];
                    case 4:
                        _e.sent();
                        _d = (_c = contracts_test_utils_1.web3Wrapper).awaitTransactionSuccessAsync;
                        return [4 /*yield*/, erc20TokenA.approve.sendTransactionAsync(erc20Proxy.address, contracts_test_utils_1.constants.INITIAL_ERC20_ALLOWANCE, {
                                from: makerAddress,
                            })];
                    case 5: return [4 /*yield*/, _d.apply(_c, [_e.sent(),
                            contracts_test_utils_1.constants.AWAIT_TRANSACTION_MINED_MS])];
                    case 6:
                        _e.sent();
                        return [4 /*yield*/, erc20Wrapper.getBalancesAsync()];
                    case 7:
                        newBalances = _e.sent();
                        expect(newBalances).to.be.deep.equal(erc20Balances);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should not change erc20Balances if taker allowances are too low to fill order', function () { return __awaiter(_this, void 0, void 0, function () {
            var signedOrder, _a, _b, _c, _d, newBalances;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, orderFactory.newSignedOrderAsync()];
                    case 1:
                        signedOrder = _e.sent();
                        _b = (_a = contracts_test_utils_1.web3Wrapper).awaitTransactionSuccessAsync;
                        return [4 /*yield*/, erc20TokenB.approve.sendTransactionAsync(erc20Proxy.address, new utils_1.BigNumber(0), {
                                from: takerAddress,
                            })];
                    case 2: return [4 /*yield*/, _b.apply(_a, [_e.sent(),
                            contracts_test_utils_1.constants.AWAIT_TRANSACTION_MINED_MS])];
                    case 3:
                        _e.sent();
                        return [4 /*yield*/, exchangeWrapper.fillOrderNoThrowAsync(signedOrder, takerAddress)];
                    case 4:
                        _e.sent();
                        _d = (_c = contracts_test_utils_1.web3Wrapper).awaitTransactionSuccessAsync;
                        return [4 /*yield*/, erc20TokenB.approve.sendTransactionAsync(erc20Proxy.address, contracts_test_utils_1.constants.INITIAL_ERC20_ALLOWANCE, {
                                from: takerAddress,
                            })];
                    case 5: return [4 /*yield*/, _d.apply(_c, [_e.sent(),
                            contracts_test_utils_1.constants.AWAIT_TRANSACTION_MINED_MS])];
                    case 6:
                        _e.sent();
                        return [4 /*yield*/, erc20Wrapper.getBalancesAsync()];
                    case 7:
                        newBalances = _e.sent();
                        expect(newBalances).to.be.deep.equal(erc20Balances);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should not change erc20Balances if makerAssetAddress is ZRX, makerAssetAmount + makerFee > maker balance', function () { return __awaiter(_this, void 0, void 0, function () {
            var makerZRXBalance, signedOrder, newBalances;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        makerZRXBalance = new utils_1.BigNumber(erc20Balances[makerAddress][zrxToken.address]);
                        return [4 /*yield*/, orderFactory.newSignedOrderAsync({
                                makerAssetAmount: makerZRXBalance,
                                makerFee: new utils_1.BigNumber(1),
                                makerAssetData: order_utils_1.assetDataUtils.encodeERC20AssetData(zrxToken.address),
                            })];
                    case 1:
                        signedOrder = _a.sent();
                        return [4 /*yield*/, exchangeWrapper.fillOrderNoThrowAsync(signedOrder, takerAddress)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, erc20Wrapper.getBalancesAsync()];
                    case 3:
                        newBalances = _a.sent();
                        expect(newBalances).to.be.deep.equal(erc20Balances);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should not change erc20Balances if makerAssetAddress is ZRX, makerAssetAmount + makerFee > maker allowance', function () { return __awaiter(_this, void 0, void 0, function () {
            var makerZRXAllowance, signedOrder, newBalances;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, zrxToken.allowance.callAsync(makerAddress, erc20Proxy.address)];
                    case 1:
                        makerZRXAllowance = _a.sent();
                        return [4 /*yield*/, orderFactory.newSignedOrderAsync({
                                makerAssetAmount: new utils_1.BigNumber(makerZRXAllowance),
                                makerFee: new utils_1.BigNumber(1),
                                makerAssetData: order_utils_1.assetDataUtils.encodeERC20AssetData(zrxToken.address),
                            })];
                    case 2:
                        signedOrder = _a.sent();
                        return [4 /*yield*/, exchangeWrapper.fillOrderNoThrowAsync(signedOrder, takerAddress)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, erc20Wrapper.getBalancesAsync()];
                    case 4:
                        newBalances = _a.sent();
                        expect(newBalances).to.be.deep.equal(erc20Balances);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should not change erc20Balances if takerAssetAddress is ZRX, takerAssetAmount + takerFee > taker balance', function () { return __awaiter(_this, void 0, void 0, function () {
            var takerZRXBalance, signedOrder, newBalances;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        takerZRXBalance = new utils_1.BigNumber(erc20Balances[takerAddress][zrxToken.address]);
                        return [4 /*yield*/, orderFactory.newSignedOrderAsync({
                                takerAssetAmount: takerZRXBalance,
                                takerFee: new utils_1.BigNumber(1),
                                takerAssetData: order_utils_1.assetDataUtils.encodeERC20AssetData(zrxToken.address),
                            })];
                    case 1:
                        signedOrder = _a.sent();
                        return [4 /*yield*/, exchangeWrapper.fillOrderNoThrowAsync(signedOrder, takerAddress)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, erc20Wrapper.getBalancesAsync()];
                    case 3:
                        newBalances = _a.sent();
                        expect(newBalances).to.be.deep.equal(erc20Balances);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should not change erc20Balances if takerAssetAddress is ZRX, takerAssetAmount + takerFee > taker allowance', function () { return __awaiter(_this, void 0, void 0, function () {
            var takerZRXAllowance, signedOrder, newBalances;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, zrxToken.allowance.callAsync(takerAddress, erc20Proxy.address)];
                    case 1:
                        takerZRXAllowance = _a.sent();
                        return [4 /*yield*/, orderFactory.newSignedOrderAsync({
                                takerAssetAmount: new utils_1.BigNumber(takerZRXAllowance),
                                takerFee: new utils_1.BigNumber(1),
                                takerAssetData: order_utils_1.assetDataUtils.encodeERC20AssetData(zrxToken.address),
                            })];
                    case 2:
                        signedOrder = _a.sent();
                        return [4 /*yield*/, exchangeWrapper.fillOrderNoThrowAsync(signedOrder, takerAddress)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, erc20Wrapper.getBalancesAsync()];
                    case 4:
                        newBalances = _a.sent();
                        expect(newBalances).to.be.deep.equal(erc20Balances);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should successfully exchange ERC721 tokens', function () { return __awaiter(_this, void 0, void 0, function () {
            var makerAssetId, takerAssetId, signedOrder, initialOwnerMakerAsset, initialOwnerTakerAsset, takerAssetFillAmount, newOwnerMakerAsset, newOwnerTakerAsset;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        makerAssetId = erc721MakerAssetId;
                        takerAssetId = erc721TakerAssetId;
                        return [4 /*yield*/, orderFactory.newSignedOrderAsync({
                                makerAssetAmount: new utils_1.BigNumber(1),
                                takerAssetAmount: new utils_1.BigNumber(1),
                                makerAssetData: order_utils_1.assetDataUtils.encodeERC721AssetData(erc721Token.address, makerAssetId),
                                takerAssetData: order_utils_1.assetDataUtils.encodeERC721AssetData(erc721Token.address, takerAssetId),
                            })];
                    case 1:
                        signedOrder = _a.sent();
                        return [4 /*yield*/, erc721Token.ownerOf.callAsync(makerAssetId)];
                    case 2:
                        initialOwnerMakerAsset = _a.sent();
                        expect(initialOwnerMakerAsset).to.be.bignumber.equal(makerAddress);
                        return [4 /*yield*/, erc721Token.ownerOf.callAsync(takerAssetId)];
                    case 3:
                        initialOwnerTakerAsset = _a.sent();
                        expect(initialOwnerTakerAsset).to.be.bignumber.equal(takerAddress);
                        takerAssetFillAmount = signedOrder.takerAssetAmount;
                        return [4 /*yield*/, exchangeWrapper.fillOrderNoThrowAsync(signedOrder, takerAddress, {
                                takerAssetFillAmount: takerAssetFillAmount,
                                // HACK(albrow): We need to hardcode the gas estimate here because
                                // the Geth gas estimator doesn't work with the way we use
                                // delegatecall and swallow errors.
                                gas: 280000,
                            })];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, erc721Token.ownerOf.callAsync(makerAssetId)];
                    case 5:
                        newOwnerMakerAsset = _a.sent();
                        expect(newOwnerMakerAsset).to.be.bignumber.equal(takerAddress);
                        return [4 /*yield*/, erc721Token.ownerOf.callAsync(takerAssetId)];
                    case 6:
                        newOwnerTakerAsset = _a.sent();
                        expect(newOwnerTakerAsset).to.be.bignumber.equal(makerAddress);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('batch functions', function () {
        var signedOrders;
        beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, orderFactory.newSignedOrderAsync()];
                    case 1:
                        _a = [
                            _b.sent()
                        ];
                        return [4 /*yield*/, orderFactory.newSignedOrderAsync()];
                    case 2:
                        _a = _a.concat([
                            _b.sent()
                        ]);
                        return [4 /*yield*/, orderFactory.newSignedOrderAsync()];
                    case 3:
                        signedOrders = _a.concat([
                            _b.sent()
                        ]);
                        return [2 /*return*/];
                }
            });
        }); });
        describe('batchFillOrders', function () {
            var reentrancyTest = function (functionNames) {
                _.forEach(functionNames, function (functionName, functionId) { return __awaiter(_this, void 0, void 0, function () {
                    var description;
                    var _this = this;
                    return __generator(this, function (_a) {
                        description = "should not allow batchFillOrders to reenter the Exchange contract via " + functionName;
                        it(description, function () { return __awaiter(_this, void 0, void 0, function () {
                            var signedOrder, _a, _b;
                            return __generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0: return [4 /*yield*/, orderFactory.newSignedOrderAsync({
                                            makerAssetData: order_utils_1.assetDataUtils.encodeERC20AssetData(reentrantErc20Token.address),
                                        })];
                                    case 1:
                                        signedOrder = _c.sent();
                                        _b = (_a = contracts_test_utils_1.web3Wrapper).awaitTransactionSuccessAsync;
                                        return [4 /*yield*/, reentrantErc20Token.setCurrentFunction.sendTransactionAsync(functionId)];
                                    case 2: return [4 /*yield*/, _b.apply(_a, [_c.sent(),
                                            contracts_test_utils_1.constants.AWAIT_TRANSACTION_MINED_MS])];
                                    case 3:
                                        _c.sent();
                                        return [4 /*yield*/, contracts_test_utils_1.expectTransactionFailedAsync(exchangeWrapper.batchFillOrdersAsync([signedOrder], takerAddress), types_1.RevertReason.TransferFailed)];
                                    case 4:
                                        _c.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                    });
                }); });
            };
            describe('batchFillOrders reentrancy tests', function () { return reentrancyTest(contracts_test_utils_1.constants.FUNCTIONS_WITH_MUTEX); });
            it('should transfer the correct amounts', function () { return __awaiter(_this, void 0, void 0, function () {
                var takerAssetFillAmounts, makerAssetAddress, takerAssetAddress, newBalances;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            takerAssetFillAmounts = [];
                            makerAssetAddress = erc20TokenA.address;
                            takerAssetAddress = erc20TokenB.address;
                            _.forEach(signedOrders, function (signedOrder) {
                                var takerAssetFillAmount = signedOrder.takerAssetAmount.div(2);
                                var makerAssetFilledAmount = takerAssetFillAmount
                                    .times(signedOrder.makerAssetAmount)
                                    .dividedToIntegerBy(signedOrder.takerAssetAmount);
                                var makerFee = signedOrder.makerFee
                                    .times(makerAssetFilledAmount)
                                    .dividedToIntegerBy(signedOrder.makerAssetAmount);
                                var takerFee = signedOrder.takerFee
                                    .times(makerAssetFilledAmount)
                                    .dividedToIntegerBy(signedOrder.makerAssetAmount);
                                takerAssetFillAmounts.push(takerAssetFillAmount);
                                erc20Balances[makerAddress][makerAssetAddress] = erc20Balances[makerAddress][makerAssetAddress].minus(makerAssetFilledAmount);
                                erc20Balances[makerAddress][takerAssetAddress] = erc20Balances[makerAddress][takerAssetAddress].plus(takerAssetFillAmount);
                                erc20Balances[makerAddress][zrxToken.address] = erc20Balances[makerAddress][zrxToken.address].minus(makerFee);
                                erc20Balances[takerAddress][makerAssetAddress] = erc20Balances[takerAddress][makerAssetAddress].plus(makerAssetFilledAmount);
                                erc20Balances[takerAddress][takerAssetAddress] = erc20Balances[takerAddress][takerAssetAddress].minus(takerAssetFillAmount);
                                erc20Balances[takerAddress][zrxToken.address] = erc20Balances[takerAddress][zrxToken.address].minus(takerFee);
                                erc20Balances[feeRecipientAddress][zrxToken.address] = erc20Balances[feeRecipientAddress][zrxToken.address].plus(makerFee.plus(takerFee));
                            });
                            return [4 /*yield*/, exchangeWrapper.batchFillOrdersAsync(signedOrders, takerAddress, {
                                    takerAssetFillAmounts: takerAssetFillAmounts,
                                })];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, erc20Wrapper.getBalancesAsync()];
                        case 2:
                            newBalances = _a.sent();
                            expect(newBalances).to.be.deep.equal(erc20Balances);
                            return [2 /*return*/];
                    }
                });
            }); });
        });
        describe('batchFillOrKillOrders', function () {
            var reentrancyTest = function (functionNames) {
                _.forEach(functionNames, function (functionName, functionId) { return __awaiter(_this, void 0, void 0, function () {
                    var description;
                    var _this = this;
                    return __generator(this, function (_a) {
                        description = "should not allow batchFillOrKillOrders to reenter the Exchange contract via " + functionName;
                        it(description, function () { return __awaiter(_this, void 0, void 0, function () {
                            var signedOrder, _a, _b;
                            return __generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0: return [4 /*yield*/, orderFactory.newSignedOrderAsync({
                                            makerAssetData: order_utils_1.assetDataUtils.encodeERC20AssetData(reentrantErc20Token.address),
                                        })];
                                    case 1:
                                        signedOrder = _c.sent();
                                        _b = (_a = contracts_test_utils_1.web3Wrapper).awaitTransactionSuccessAsync;
                                        return [4 /*yield*/, reentrantErc20Token.setCurrentFunction.sendTransactionAsync(functionId)];
                                    case 2: return [4 /*yield*/, _b.apply(_a, [_c.sent(),
                                            contracts_test_utils_1.constants.AWAIT_TRANSACTION_MINED_MS])];
                                    case 3:
                                        _c.sent();
                                        return [4 /*yield*/, contracts_test_utils_1.expectTransactionFailedAsync(exchangeWrapper.batchFillOrKillOrdersAsync([signedOrder], takerAddress), types_1.RevertReason.TransferFailed)];
                                    case 4:
                                        _c.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                    });
                }); });
            };
            describe('batchFillOrKillOrders reentrancy tests', function () { return reentrancyTest(contracts_test_utils_1.constants.FUNCTIONS_WITH_MUTEX); });
            it('should transfer the correct amounts', function () { return __awaiter(_this, void 0, void 0, function () {
                var takerAssetFillAmounts, makerAssetAddress, takerAssetAddress, newBalances;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            takerAssetFillAmounts = [];
                            makerAssetAddress = erc20TokenA.address;
                            takerAssetAddress = erc20TokenB.address;
                            _.forEach(signedOrders, function (signedOrder) {
                                var takerAssetFillAmount = signedOrder.takerAssetAmount.div(2);
                                var makerAssetFilledAmount = takerAssetFillAmount
                                    .times(signedOrder.makerAssetAmount)
                                    .dividedToIntegerBy(signedOrder.takerAssetAmount);
                                var makerFee = signedOrder.makerFee
                                    .times(makerAssetFilledAmount)
                                    .dividedToIntegerBy(signedOrder.makerAssetAmount);
                                var takerFee = signedOrder.takerFee
                                    .times(makerAssetFilledAmount)
                                    .dividedToIntegerBy(signedOrder.makerAssetAmount);
                                takerAssetFillAmounts.push(takerAssetFillAmount);
                                erc20Balances[makerAddress][makerAssetAddress] = erc20Balances[makerAddress][makerAssetAddress].minus(makerAssetFilledAmount);
                                erc20Balances[makerAddress][takerAssetAddress] = erc20Balances[makerAddress][takerAssetAddress].plus(takerAssetFillAmount);
                                erc20Balances[makerAddress][zrxToken.address] = erc20Balances[makerAddress][zrxToken.address].minus(makerFee);
                                erc20Balances[takerAddress][makerAssetAddress] = erc20Balances[takerAddress][makerAssetAddress].plus(makerAssetFilledAmount);
                                erc20Balances[takerAddress][takerAssetAddress] = erc20Balances[takerAddress][takerAssetAddress].minus(takerAssetFillAmount);
                                erc20Balances[takerAddress][zrxToken.address] = erc20Balances[takerAddress][zrxToken.address].minus(takerFee);
                                erc20Balances[feeRecipientAddress][zrxToken.address] = erc20Balances[feeRecipientAddress][zrxToken.address].plus(makerFee.plus(takerFee));
                            });
                            return [4 /*yield*/, exchangeWrapper.batchFillOrKillOrdersAsync(signedOrders, takerAddress, {
                                    takerAssetFillAmounts: takerAssetFillAmounts,
                                })];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, erc20Wrapper.getBalancesAsync()];
                        case 2:
                            newBalances = _a.sent();
                            expect(newBalances).to.be.deep.equal(erc20Balances);
                            return [2 /*return*/];
                    }
                });
            }); });
            it('should throw if a single signedOrder does not fill the expected amount', function () { return __awaiter(_this, void 0, void 0, function () {
                var takerAssetFillAmounts;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            takerAssetFillAmounts = [];
                            _.forEach(signedOrders, function (signedOrder) {
                                var takerAssetFillAmount = signedOrder.takerAssetAmount.div(2);
                                takerAssetFillAmounts.push(takerAssetFillAmount);
                            });
                            return [4 /*yield*/, exchangeWrapper.fillOrKillOrderAsync(signedOrders[0], takerAddress)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, contracts_test_utils_1.expectTransactionFailedAsync(exchangeWrapper.batchFillOrKillOrdersAsync(signedOrders, takerAddress, {
                                    takerAssetFillAmounts: takerAssetFillAmounts,
                                }), types_1.RevertReason.OrderUnfillable)];
                    }
                });
            }); });
        });
        describe('batchFillOrdersNoThrow', function () { return __awaiter(_this, void 0, void 0, function () {
            var reentrancyTest;
            var _this = this;
            return __generator(this, function (_a) {
                reentrancyTest = function (functionNames) {
                    _.forEach(functionNames, function (functionName, functionId) { return __awaiter(_this, void 0, void 0, function () {
                        var description;
                        var _this = this;
                        return __generator(this, function (_a) {
                            description = "should not allow batchFillOrdersNoThrow to reenter the Exchange contract via " + functionName;
                            it(description, function () { return __awaiter(_this, void 0, void 0, function () {
                                var signedOrder, _a, _b, newBalances;
                                return __generator(this, function (_c) {
                                    switch (_c.label) {
                                        case 0: return [4 /*yield*/, orderFactory.newSignedOrderAsync({
                                                makerAssetData: order_utils_1.assetDataUtils.encodeERC20AssetData(reentrantErc20Token.address),
                                            })];
                                        case 1:
                                            signedOrder = _c.sent();
                                            _b = (_a = contracts_test_utils_1.web3Wrapper).awaitTransactionSuccessAsync;
                                            return [4 /*yield*/, reentrantErc20Token.setCurrentFunction.sendTransactionAsync(functionId)];
                                        case 2: return [4 /*yield*/, _b.apply(_a, [_c.sent(),
                                                contracts_test_utils_1.constants.AWAIT_TRANSACTION_MINED_MS])];
                                        case 3:
                                            _c.sent();
                                            return [4 /*yield*/, exchangeWrapper.batchFillOrdersNoThrowAsync([signedOrder], takerAddress)];
                                        case 4:
                                            _c.sent();
                                            return [4 /*yield*/, erc20Wrapper.getBalancesAsync()];
                                        case 5:
                                            newBalances = _c.sent();
                                            expect(erc20Balances).to.deep.equal(newBalances);
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
                            return [2 /*return*/];
                        });
                    }); });
                };
                describe('batchFillOrdersNoThrow reentrancy tests', function () { return reentrancyTest(contracts_test_utils_1.constants.FUNCTIONS_WITH_MUTEX); });
                it('should transfer the correct amounts', function () { return __awaiter(_this, void 0, void 0, function () {
                    var takerAssetFillAmounts, makerAssetAddress, takerAssetAddress, newBalances;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                takerAssetFillAmounts = [];
                                makerAssetAddress = erc20TokenA.address;
                                takerAssetAddress = erc20TokenB.address;
                                _.forEach(signedOrders, function (signedOrder) {
                                    var takerAssetFillAmount = signedOrder.takerAssetAmount.div(2);
                                    var makerAssetFilledAmount = takerAssetFillAmount
                                        .times(signedOrder.makerAssetAmount)
                                        .dividedToIntegerBy(signedOrder.takerAssetAmount);
                                    var makerFee = signedOrder.makerFee
                                        .times(makerAssetFilledAmount)
                                        .dividedToIntegerBy(signedOrder.makerAssetAmount);
                                    var takerFee = signedOrder.takerFee
                                        .times(makerAssetFilledAmount)
                                        .dividedToIntegerBy(signedOrder.makerAssetAmount);
                                    takerAssetFillAmounts.push(takerAssetFillAmount);
                                    erc20Balances[makerAddress][makerAssetAddress] = erc20Balances[makerAddress][makerAssetAddress].minus(makerAssetFilledAmount);
                                    erc20Balances[makerAddress][takerAssetAddress] = erc20Balances[makerAddress][takerAssetAddress].plus(takerAssetFillAmount);
                                    erc20Balances[makerAddress][zrxToken.address] = erc20Balances[makerAddress][zrxToken.address].minus(makerFee);
                                    erc20Balances[takerAddress][makerAssetAddress] = erc20Balances[takerAddress][makerAssetAddress].plus(makerAssetFilledAmount);
                                    erc20Balances[takerAddress][takerAssetAddress] = erc20Balances[takerAddress][takerAssetAddress].minus(takerAssetFillAmount);
                                    erc20Balances[takerAddress][zrxToken.address] = erc20Balances[takerAddress][zrxToken.address].minus(takerFee);
                                    erc20Balances[feeRecipientAddress][zrxToken.address] = erc20Balances[feeRecipientAddress][zrxToken.address].plus(makerFee.plus(takerFee));
                                });
                                return [4 /*yield*/, exchangeWrapper.batchFillOrdersNoThrowAsync(signedOrders, takerAddress, {
                                        takerAssetFillAmounts: takerAssetFillAmounts,
                                        // HACK(albrow): We need to hardcode the gas estimate here because
                                        // the Geth gas estimator doesn't work with the way we use
                                        // delegatecall and swallow errors.
                                        gas: 600000,
                                    })];
                            case 1:
                                _a.sent();
                                return [4 /*yield*/, erc20Wrapper.getBalancesAsync()];
                            case 2:
                                newBalances = _a.sent();
                                expect(newBalances).to.be.deep.equal(erc20Balances);
                                return [2 /*return*/];
                        }
                    });
                }); });
                it('should not throw if an order is invalid and fill the remaining orders', function () { return __awaiter(_this, void 0, void 0, function () {
                    var takerAssetFillAmounts, makerAssetAddress, takerAssetAddress, invalidOrder, validOrders, newOrders, newBalances;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                takerAssetFillAmounts = [];
                                makerAssetAddress = erc20TokenA.address;
                                takerAssetAddress = erc20TokenB.address;
                                invalidOrder = __assign({}, signedOrders[0], { signature: '0x00' });
                                validOrders = signedOrders.slice(1);
                                takerAssetFillAmounts.push(invalidOrder.takerAssetAmount.div(2));
                                _.forEach(validOrders, function (signedOrder) {
                                    var takerAssetFillAmount = signedOrder.takerAssetAmount.div(2);
                                    var makerAssetFilledAmount = takerAssetFillAmount
                                        .times(signedOrder.makerAssetAmount)
                                        .dividedToIntegerBy(signedOrder.takerAssetAmount);
                                    var makerFee = signedOrder.makerFee
                                        .times(makerAssetFilledAmount)
                                        .dividedToIntegerBy(signedOrder.makerAssetAmount);
                                    var takerFee = signedOrder.takerFee
                                        .times(makerAssetFilledAmount)
                                        .dividedToIntegerBy(signedOrder.makerAssetAmount);
                                    takerAssetFillAmounts.push(takerAssetFillAmount);
                                    erc20Balances[makerAddress][makerAssetAddress] = erc20Balances[makerAddress][makerAssetAddress].minus(makerAssetFilledAmount);
                                    erc20Balances[makerAddress][takerAssetAddress] = erc20Balances[makerAddress][takerAssetAddress].plus(takerAssetFillAmount);
                                    erc20Balances[makerAddress][zrxToken.address] = erc20Balances[makerAddress][zrxToken.address].minus(makerFee);
                                    erc20Balances[takerAddress][makerAssetAddress] = erc20Balances[takerAddress][makerAssetAddress].plus(makerAssetFilledAmount);
                                    erc20Balances[takerAddress][takerAssetAddress] = erc20Balances[takerAddress][takerAssetAddress].minus(takerAssetFillAmount);
                                    erc20Balances[takerAddress][zrxToken.address] = erc20Balances[takerAddress][zrxToken.address].minus(takerFee);
                                    erc20Balances[feeRecipientAddress][zrxToken.address] = erc20Balances[feeRecipientAddress][zrxToken.address].plus(makerFee.plus(takerFee));
                                });
                                newOrders = __spread([invalidOrder], validOrders);
                                return [4 /*yield*/, exchangeWrapper.batchFillOrdersNoThrowAsync(newOrders, takerAddress, {
                                        takerAssetFillAmounts: takerAssetFillAmounts,
                                        // HACK(albrow): We need to hardcode the gas estimate here because
                                        // the Geth gas estimator doesn't work with the way we use
                                        // delegatecall and swallow errors.
                                        gas: 450000,
                                    })];
                            case 1:
                                _a.sent();
                                return [4 /*yield*/, erc20Wrapper.getBalancesAsync()];
                            case 2:
                                newBalances = _a.sent();
                                expect(newBalances).to.be.deep.equal(erc20Balances);
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        }); });
        describe('marketSellOrders', function () {
            var reentrancyTest = function (functionNames) {
                _.forEach(functionNames, function (functionName, functionId) { return __awaiter(_this, void 0, void 0, function () {
                    var description;
                    var _this = this;
                    return __generator(this, function (_a) {
                        description = "should not allow marketSellOrders to reenter the Exchange contract via " + functionName;
                        it(description, function () { return __awaiter(_this, void 0, void 0, function () {
                            var signedOrder, _a, _b;
                            return __generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0: return [4 /*yield*/, orderFactory.newSignedOrderAsync({
                                            makerAssetData: order_utils_1.assetDataUtils.encodeERC20AssetData(reentrantErc20Token.address),
                                        })];
                                    case 1:
                                        signedOrder = _c.sent();
                                        _b = (_a = contracts_test_utils_1.web3Wrapper).awaitTransactionSuccessAsync;
                                        return [4 /*yield*/, reentrantErc20Token.setCurrentFunction.sendTransactionAsync(functionId)];
                                    case 2: return [4 /*yield*/, _b.apply(_a, [_c.sent(),
                                            contracts_test_utils_1.constants.AWAIT_TRANSACTION_MINED_MS])];
                                    case 3:
                                        _c.sent();
                                        return [4 /*yield*/, contracts_test_utils_1.expectTransactionFailedAsync(exchangeWrapper.marketSellOrdersAsync([signedOrder], takerAddress, {
                                                takerAssetFillAmount: signedOrder.takerAssetAmount,
                                            }), types_1.RevertReason.TransferFailed)];
                                    case 4:
                                        _c.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                    });
                }); });
            };
            describe('marketSellOrders reentrancy tests', function () { return reentrancyTest(contracts_test_utils_1.constants.FUNCTIONS_WITH_MUTEX); });
            it('should stop when the entire takerAssetFillAmount is filled', function () { return __awaiter(_this, void 0, void 0, function () {
                var takerAssetFillAmount, newBalances, makerAssetFilledAmount, makerFee, takerFee;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            takerAssetFillAmount = signedOrders[0].takerAssetAmount.plus(signedOrders[1].takerAssetAmount.div(2));
                            return [4 /*yield*/, exchangeWrapper.marketSellOrdersAsync(signedOrders, takerAddress, {
                                    takerAssetFillAmount: takerAssetFillAmount,
                                })];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, erc20Wrapper.getBalancesAsync()];
                        case 2:
                            newBalances = _a.sent();
                            makerAssetFilledAmount = signedOrders[0].makerAssetAmount.plus(signedOrders[1].makerAssetAmount.dividedToIntegerBy(2));
                            makerFee = signedOrders[0].makerFee.plus(signedOrders[1].makerFee.dividedToIntegerBy(2));
                            takerFee = signedOrders[0].takerFee.plus(signedOrders[1].takerFee.dividedToIntegerBy(2));
                            expect(newBalances[makerAddress][defaultMakerAssetAddress]).to.be.bignumber.equal(erc20Balances[makerAddress][defaultMakerAssetAddress].minus(makerAssetFilledAmount));
                            expect(newBalances[makerAddress][defaultTakerAssetAddress]).to.be.bignumber.equal(erc20Balances[makerAddress][defaultTakerAssetAddress].plus(takerAssetFillAmount));
                            expect(newBalances[makerAddress][zrxToken.address]).to.be.bignumber.equal(erc20Balances[makerAddress][zrxToken.address].minus(makerFee));
                            expect(newBalances[takerAddress][defaultTakerAssetAddress]).to.be.bignumber.equal(erc20Balances[takerAddress][defaultTakerAssetAddress].minus(takerAssetFillAmount));
                            expect(newBalances[takerAddress][defaultMakerAssetAddress]).to.be.bignumber.equal(erc20Balances[takerAddress][defaultMakerAssetAddress].plus(makerAssetFilledAmount));
                            expect(newBalances[takerAddress][zrxToken.address]).to.be.bignumber.equal(erc20Balances[takerAddress][zrxToken.address].minus(takerFee));
                            expect(newBalances[feeRecipientAddress][zrxToken.address]).to.be.bignumber.equal(erc20Balances[feeRecipientAddress][zrxToken.address].plus(makerFee.plus(takerFee)));
                            return [2 /*return*/];
                    }
                });
            }); });
            it('should fill all signedOrders if cannot fill entire takerAssetFillAmount', function () { return __awaiter(_this, void 0, void 0, function () {
                var takerAssetFillAmount, newBalances;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            takerAssetFillAmount = web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100000), 18);
                            _.forEach(signedOrders, function (signedOrder) {
                                erc20Balances[makerAddress][defaultMakerAssetAddress] = erc20Balances[makerAddress][defaultMakerAssetAddress].minus(signedOrder.makerAssetAmount);
                                erc20Balances[makerAddress][defaultTakerAssetAddress] = erc20Balances[makerAddress][defaultTakerAssetAddress].plus(signedOrder.takerAssetAmount);
                                erc20Balances[makerAddress][zrxToken.address] = erc20Balances[makerAddress][zrxToken.address].minus(signedOrder.makerFee);
                                erc20Balances[takerAddress][defaultMakerAssetAddress] = erc20Balances[takerAddress][defaultMakerAssetAddress].plus(signedOrder.makerAssetAmount);
                                erc20Balances[takerAddress][defaultTakerAssetAddress] = erc20Balances[takerAddress][defaultTakerAssetAddress].minus(signedOrder.takerAssetAmount);
                                erc20Balances[takerAddress][zrxToken.address] = erc20Balances[takerAddress][zrxToken.address].minus(signedOrder.takerFee);
                                erc20Balances[feeRecipientAddress][zrxToken.address] = erc20Balances[feeRecipientAddress][zrxToken.address].plus(signedOrder.makerFee.plus(signedOrder.takerFee));
                            });
                            return [4 /*yield*/, exchangeWrapper.marketSellOrdersAsync(signedOrders, takerAddress, {
                                    takerAssetFillAmount: takerAssetFillAmount,
                                })];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, erc20Wrapper.getBalancesAsync()];
                        case 2:
                            newBalances = _a.sent();
                            expect(newBalances).to.be.deep.equal(erc20Balances);
                            return [2 /*return*/];
                    }
                });
            }); });
            it('should throw when a signedOrder does not use the same takerAssetAddress', function () { return __awaiter(_this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, orderFactory.newSignedOrderAsync()];
                        case 1:
                            _a = [
                                _b.sent()
                            ];
                            return [4 /*yield*/, orderFactory.newSignedOrderAsync({
                                    takerAssetData: order_utils_1.assetDataUtils.encodeERC20AssetData(zrxToken.address),
                                })];
                        case 2:
                            _a = _a.concat([
                                _b.sent()
                            ]);
                            return [4 /*yield*/, orderFactory.newSignedOrderAsync()];
                        case 3:
                            signedOrders = _a.concat([
                                _b.sent()
                            ]);
                            return [2 /*return*/, contracts_test_utils_1.expectTransactionFailedAsync(exchangeWrapper.marketSellOrdersAsync(signedOrders, takerAddress, {
                                    takerAssetFillAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(1000), 18),
                                }), 
                                // We simply use the takerAssetData from the first order for all orders.
                                // If they are not the same, the contract throws when validating the order signature
                                types_1.RevertReason.InvalidOrderSignature)];
                    }
                });
            }); });
        });
        describe('marketSellOrdersNoThrow', function () {
            var reentrancyTest = function (functionNames) {
                _.forEach(functionNames, function (functionName, functionId) { return __awaiter(_this, void 0, void 0, function () {
                    var description;
                    var _this = this;
                    return __generator(this, function (_a) {
                        description = "should not allow marketSellOrdersNoThrow to reenter the Exchange contract via " + functionName;
                        it(description, function () { return __awaiter(_this, void 0, void 0, function () {
                            var signedOrder, _a, _b, newBalances;
                            return __generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0: return [4 /*yield*/, orderFactory.newSignedOrderAsync({
                                            makerAssetData: order_utils_1.assetDataUtils.encodeERC20AssetData(reentrantErc20Token.address),
                                        })];
                                    case 1:
                                        signedOrder = _c.sent();
                                        _b = (_a = contracts_test_utils_1.web3Wrapper).awaitTransactionSuccessAsync;
                                        return [4 /*yield*/, reentrantErc20Token.setCurrentFunction.sendTransactionAsync(functionId)];
                                    case 2: return [4 /*yield*/, _b.apply(_a, [_c.sent(),
                                            contracts_test_utils_1.constants.AWAIT_TRANSACTION_MINED_MS])];
                                    case 3:
                                        _c.sent();
                                        return [4 /*yield*/, exchangeWrapper.marketSellOrdersNoThrowAsync([signedOrder], takerAddress, {
                                                takerAssetFillAmount: signedOrder.takerAssetAmount,
                                            })];
                                    case 4:
                                        _c.sent();
                                        return [4 /*yield*/, erc20Wrapper.getBalancesAsync()];
                                    case 5:
                                        newBalances = _c.sent();
                                        expect(erc20Balances).to.deep.equal(newBalances);
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                    });
                }); });
            };
            describe('marketSellOrdersNoThrow reentrancy tests', function () { return reentrancyTest(contracts_test_utils_1.constants.FUNCTIONS_WITH_MUTEX); });
            it('should stop when the entire takerAssetFillAmount is filled', function () { return __awaiter(_this, void 0, void 0, function () {
                var takerAssetFillAmount, newBalances, makerAssetFilledAmount, makerFee, takerFee;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            takerAssetFillAmount = signedOrders[0].takerAssetAmount.plus(signedOrders[1].takerAssetAmount.div(2));
                            return [4 /*yield*/, exchangeWrapper.marketSellOrdersNoThrowAsync(signedOrders, takerAddress, {
                                    takerAssetFillAmount: takerAssetFillAmount,
                                    // HACK(albrow): We need to hardcode the gas estimate here because
                                    // the Geth gas estimator doesn't work with the way we use
                                    // delegatecall and swallow errors.
                                    gas: 6000000,
                                })];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, erc20Wrapper.getBalancesAsync()];
                        case 2:
                            newBalances = _a.sent();
                            makerAssetFilledAmount = signedOrders[0].makerAssetAmount.plus(signedOrders[1].makerAssetAmount.dividedToIntegerBy(2));
                            makerFee = signedOrders[0].makerFee.plus(signedOrders[1].makerFee.dividedToIntegerBy(2));
                            takerFee = signedOrders[0].takerFee.plus(signedOrders[1].takerFee.dividedToIntegerBy(2));
                            expect(newBalances[makerAddress][defaultMakerAssetAddress]).to.be.bignumber.equal(erc20Balances[makerAddress][defaultMakerAssetAddress].minus(makerAssetFilledAmount));
                            expect(newBalances[makerAddress][defaultTakerAssetAddress]).to.be.bignumber.equal(erc20Balances[makerAddress][defaultTakerAssetAddress].plus(takerAssetFillAmount));
                            expect(newBalances[makerAddress][zrxToken.address]).to.be.bignumber.equal(erc20Balances[makerAddress][zrxToken.address].minus(makerFee));
                            expect(newBalances[takerAddress][defaultTakerAssetAddress]).to.be.bignumber.equal(erc20Balances[takerAddress][defaultTakerAssetAddress].minus(takerAssetFillAmount));
                            expect(newBalances[takerAddress][defaultMakerAssetAddress]).to.be.bignumber.equal(erc20Balances[takerAddress][defaultMakerAssetAddress].plus(makerAssetFilledAmount));
                            expect(newBalances[takerAddress][zrxToken.address]).to.be.bignumber.equal(erc20Balances[takerAddress][zrxToken.address].minus(takerFee));
                            expect(newBalances[feeRecipientAddress][zrxToken.address]).to.be.bignumber.equal(erc20Balances[feeRecipientAddress][zrxToken.address].plus(makerFee.plus(takerFee)));
                            return [2 /*return*/];
                    }
                });
            }); });
            it('should fill all signedOrders if cannot fill entire takerAssetFillAmount', function () { return __awaiter(_this, void 0, void 0, function () {
                var takerAssetFillAmount, newBalances;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            takerAssetFillAmount = web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100000), 18);
                            _.forEach(signedOrders, function (signedOrder) {
                                erc20Balances[makerAddress][defaultMakerAssetAddress] = erc20Balances[makerAddress][defaultMakerAssetAddress].minus(signedOrder.makerAssetAmount);
                                erc20Balances[makerAddress][defaultTakerAssetAddress] = erc20Balances[makerAddress][defaultTakerAssetAddress].plus(signedOrder.takerAssetAmount);
                                erc20Balances[makerAddress][zrxToken.address] = erc20Balances[makerAddress][zrxToken.address].minus(signedOrder.makerFee);
                                erc20Balances[takerAddress][defaultMakerAssetAddress] = erc20Balances[takerAddress][defaultMakerAssetAddress].plus(signedOrder.makerAssetAmount);
                                erc20Balances[takerAddress][defaultTakerAssetAddress] = erc20Balances[takerAddress][defaultTakerAssetAddress].minus(signedOrder.takerAssetAmount);
                                erc20Balances[takerAddress][zrxToken.address] = erc20Balances[takerAddress][zrxToken.address].minus(signedOrder.takerFee);
                                erc20Balances[feeRecipientAddress][zrxToken.address] = erc20Balances[feeRecipientAddress][zrxToken.address].plus(signedOrder.makerFee.plus(signedOrder.takerFee));
                            });
                            return [4 /*yield*/, exchangeWrapper.marketSellOrdersNoThrowAsync(signedOrders, takerAddress, {
                                    takerAssetFillAmount: takerAssetFillAmount,
                                    // HACK(albrow): We need to hardcode the gas estimate here because
                                    // the Geth gas estimator doesn't work with the way we use
                                    // delegatecall and swallow errors.
                                    gas: 600000,
                                })];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, erc20Wrapper.getBalancesAsync()];
                        case 2:
                            newBalances = _a.sent();
                            expect(newBalances).to.be.deep.equal(erc20Balances);
                            return [2 /*return*/];
                    }
                });
            }); });
            it('should not fill a signedOrder that does not use the same takerAssetAddress', function () { return __awaiter(_this, void 0, void 0, function () {
                var _a, takerAssetFillAmount, filledSignedOrders, newBalances;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, orderFactory.newSignedOrderAsync()];
                        case 1:
                            _a = [
                                _b.sent()
                            ];
                            return [4 /*yield*/, orderFactory.newSignedOrderAsync()];
                        case 2:
                            _a = _a.concat([
                                _b.sent()
                            ]);
                            return [4 /*yield*/, orderFactory.newSignedOrderAsync({
                                    takerAssetData: order_utils_1.assetDataUtils.encodeERC20AssetData(zrxToken.address),
                                })];
                        case 3:
                            signedOrders = _a.concat([
                                _b.sent()
                            ]);
                            takerAssetFillAmount = web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100000), 18);
                            filledSignedOrders = signedOrders.slice(0, -1);
                            _.forEach(filledSignedOrders, function (signedOrder) {
                                erc20Balances[makerAddress][defaultMakerAssetAddress] = erc20Balances[makerAddress][defaultMakerAssetAddress].minus(signedOrder.makerAssetAmount);
                                erc20Balances[makerAddress][defaultTakerAssetAddress] = erc20Balances[makerAddress][defaultTakerAssetAddress].plus(signedOrder.takerAssetAmount);
                                erc20Balances[makerAddress][zrxToken.address] = erc20Balances[makerAddress][zrxToken.address].minus(signedOrder.makerFee);
                                erc20Balances[takerAddress][defaultMakerAssetAddress] = erc20Balances[takerAddress][defaultMakerAssetAddress].plus(signedOrder.makerAssetAmount);
                                erc20Balances[takerAddress][defaultTakerAssetAddress] = erc20Balances[takerAddress][defaultTakerAssetAddress].minus(signedOrder.takerAssetAmount);
                                erc20Balances[takerAddress][zrxToken.address] = erc20Balances[takerAddress][zrxToken.address].minus(signedOrder.takerFee);
                                erc20Balances[feeRecipientAddress][zrxToken.address] = erc20Balances[feeRecipientAddress][zrxToken.address].plus(signedOrder.makerFee.plus(signedOrder.takerFee));
                            });
                            return [4 /*yield*/, exchangeWrapper.marketSellOrdersNoThrowAsync(signedOrders, takerAddress, {
                                    takerAssetFillAmount: takerAssetFillAmount,
                                    // HACK(albrow): We need to hardcode the gas estimate here because
                                    // the Geth gas estimator doesn't work with the way we use
                                    // delegatecall and swallow errors.
                                    gas: 600000,
                                })];
                        case 4:
                            _b.sent();
                            return [4 /*yield*/, erc20Wrapper.getBalancesAsync()];
                        case 5:
                            newBalances = _b.sent();
                            expect(newBalances).to.be.deep.equal(erc20Balances);
                            return [2 /*return*/];
                    }
                });
            }); });
        });
        describe('marketBuyOrders', function () {
            var reentrancyTest = function (functionNames) {
                _.forEach(functionNames, function (functionName, functionId) { return __awaiter(_this, void 0, void 0, function () {
                    var description;
                    var _this = this;
                    return __generator(this, function (_a) {
                        description = "should not allow marketBuyOrders to reenter the Exchange contract via " + functionName;
                        it(description, function () { return __awaiter(_this, void 0, void 0, function () {
                            var signedOrder, _a, _b;
                            return __generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0: return [4 /*yield*/, orderFactory.newSignedOrderAsync({
                                            makerAssetData: order_utils_1.assetDataUtils.encodeERC20AssetData(reentrantErc20Token.address),
                                        })];
                                    case 1:
                                        signedOrder = _c.sent();
                                        _b = (_a = contracts_test_utils_1.web3Wrapper).awaitTransactionSuccessAsync;
                                        return [4 /*yield*/, reentrantErc20Token.setCurrentFunction.sendTransactionAsync(functionId)];
                                    case 2: return [4 /*yield*/, _b.apply(_a, [_c.sent(),
                                            contracts_test_utils_1.constants.AWAIT_TRANSACTION_MINED_MS])];
                                    case 3:
                                        _c.sent();
                                        return [4 /*yield*/, contracts_test_utils_1.expectTransactionFailedAsync(exchangeWrapper.marketBuyOrdersAsync([signedOrder], takerAddress, {
                                                makerAssetFillAmount: signedOrder.makerAssetAmount,
                                            }), types_1.RevertReason.TransferFailed)];
                                    case 4:
                                        _c.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                    });
                }); });
            };
            describe('marketBuyOrders reentrancy tests', function () { return reentrancyTest(contracts_test_utils_1.constants.FUNCTIONS_WITH_MUTEX); });
            it('should stop when the entire makerAssetFillAmount is filled', function () { return __awaiter(_this, void 0, void 0, function () {
                var makerAssetFillAmount, newBalances, makerAmountBought, makerFee, takerFee;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            makerAssetFillAmount = signedOrders[0].makerAssetAmount.plus(signedOrders[1].makerAssetAmount.div(2));
                            return [4 /*yield*/, exchangeWrapper.marketBuyOrdersAsync(signedOrders, takerAddress, {
                                    makerAssetFillAmount: makerAssetFillAmount,
                                })];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, erc20Wrapper.getBalancesAsync()];
                        case 2:
                            newBalances = _a.sent();
                            makerAmountBought = signedOrders[0].takerAssetAmount.plus(signedOrders[1].takerAssetAmount.dividedToIntegerBy(2));
                            makerFee = signedOrders[0].makerFee.plus(signedOrders[1].makerFee.dividedToIntegerBy(2));
                            takerFee = signedOrders[0].takerFee.plus(signedOrders[1].takerFee.dividedToIntegerBy(2));
                            expect(newBalances[makerAddress][defaultMakerAssetAddress]).to.be.bignumber.equal(erc20Balances[makerAddress][defaultMakerAssetAddress].minus(makerAssetFillAmount));
                            expect(newBalances[makerAddress][defaultTakerAssetAddress]).to.be.bignumber.equal(erc20Balances[makerAddress][defaultTakerAssetAddress].plus(makerAmountBought));
                            expect(newBalances[makerAddress][zrxToken.address]).to.be.bignumber.equal(erc20Balances[makerAddress][zrxToken.address].minus(makerFee));
                            expect(newBalances[takerAddress][defaultTakerAssetAddress]).to.be.bignumber.equal(erc20Balances[takerAddress][defaultTakerAssetAddress].minus(makerAmountBought));
                            expect(newBalances[takerAddress][defaultMakerAssetAddress]).to.be.bignumber.equal(erc20Balances[takerAddress][defaultMakerAssetAddress].plus(makerAssetFillAmount));
                            expect(newBalances[takerAddress][zrxToken.address]).to.be.bignumber.equal(erc20Balances[takerAddress][zrxToken.address].minus(takerFee));
                            expect(newBalances[feeRecipientAddress][zrxToken.address]).to.be.bignumber.equal(erc20Balances[feeRecipientAddress][zrxToken.address].plus(makerFee.plus(takerFee)));
                            return [2 /*return*/];
                    }
                });
            }); });
            it('should fill all signedOrders if cannot fill entire makerAssetFillAmount', function () { return __awaiter(_this, void 0, void 0, function () {
                var makerAssetFillAmount, newBalances;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            makerAssetFillAmount = web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100000), 18);
                            _.forEach(signedOrders, function (signedOrder) {
                                erc20Balances[makerAddress][defaultMakerAssetAddress] = erc20Balances[makerAddress][defaultMakerAssetAddress].minus(signedOrder.makerAssetAmount);
                                erc20Balances[makerAddress][defaultTakerAssetAddress] = erc20Balances[makerAddress][defaultTakerAssetAddress].plus(signedOrder.takerAssetAmount);
                                erc20Balances[makerAddress][zrxToken.address] = erc20Balances[makerAddress][zrxToken.address].minus(signedOrder.makerFee);
                                erc20Balances[takerAddress][defaultMakerAssetAddress] = erc20Balances[takerAddress][defaultMakerAssetAddress].plus(signedOrder.makerAssetAmount);
                                erc20Balances[takerAddress][defaultTakerAssetAddress] = erc20Balances[takerAddress][defaultTakerAssetAddress].minus(signedOrder.takerAssetAmount);
                                erc20Balances[takerAddress][zrxToken.address] = erc20Balances[takerAddress][zrxToken.address].minus(signedOrder.takerFee);
                                erc20Balances[feeRecipientAddress][zrxToken.address] = erc20Balances[feeRecipientAddress][zrxToken.address].plus(signedOrder.makerFee.plus(signedOrder.takerFee));
                            });
                            return [4 /*yield*/, exchangeWrapper.marketBuyOrdersAsync(signedOrders, takerAddress, {
                                    makerAssetFillAmount: makerAssetFillAmount,
                                })];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, erc20Wrapper.getBalancesAsync()];
                        case 2:
                            newBalances = _a.sent();
                            expect(newBalances).to.be.deep.equal(erc20Balances);
                            return [2 /*return*/];
                    }
                });
            }); });
            it('should throw when a signedOrder does not use the same makerAssetAddress', function () { return __awaiter(_this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, orderFactory.newSignedOrderAsync()];
                        case 1:
                            _a = [
                                _b.sent()
                            ];
                            return [4 /*yield*/, orderFactory.newSignedOrderAsync({
                                    makerAssetData: order_utils_1.assetDataUtils.encodeERC20AssetData(zrxToken.address),
                                })];
                        case 2:
                            _a = _a.concat([
                                _b.sent()
                            ]);
                            return [4 /*yield*/, orderFactory.newSignedOrderAsync()];
                        case 3:
                            signedOrders = _a.concat([
                                _b.sent()
                            ]);
                            return [2 /*return*/, contracts_test_utils_1.expectTransactionFailedAsync(exchangeWrapper.marketBuyOrdersAsync(signedOrders, takerAddress, {
                                    makerAssetFillAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(1000), 18),
                                }), types_1.RevertReason.InvalidOrderSignature)];
                    }
                });
            }); });
        });
        describe('marketBuyOrdersNoThrow', function () {
            var reentrancyTest = function (functionNames) {
                _.forEach(functionNames, function (functionName, functionId) { return __awaiter(_this, void 0, void 0, function () {
                    var description;
                    var _this = this;
                    return __generator(this, function (_a) {
                        description = "should not allow marketBuyOrdersNoThrow to reenter the Exchange contract via " + functionName;
                        it(description, function () { return __awaiter(_this, void 0, void 0, function () {
                            var signedOrder, _a, _b, newBalances;
                            return __generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0: return [4 /*yield*/, orderFactory.newSignedOrderAsync({
                                            makerAssetData: order_utils_1.assetDataUtils.encodeERC20AssetData(reentrantErc20Token.address),
                                        })];
                                    case 1:
                                        signedOrder = _c.sent();
                                        _b = (_a = contracts_test_utils_1.web3Wrapper).awaitTransactionSuccessAsync;
                                        return [4 /*yield*/, reentrantErc20Token.setCurrentFunction.sendTransactionAsync(functionId)];
                                    case 2: return [4 /*yield*/, _b.apply(_a, [_c.sent(),
                                            contracts_test_utils_1.constants.AWAIT_TRANSACTION_MINED_MS])];
                                    case 3:
                                        _c.sent();
                                        return [4 /*yield*/, exchangeWrapper.marketBuyOrdersNoThrowAsync([signedOrder], takerAddress, {
                                                makerAssetFillAmount: signedOrder.makerAssetAmount,
                                            })];
                                    case 4:
                                        _c.sent();
                                        return [4 /*yield*/, erc20Wrapper.getBalancesAsync()];
                                    case 5:
                                        newBalances = _c.sent();
                                        expect(erc20Balances).to.deep.equal(newBalances);
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                    });
                }); });
            };
            describe('marketBuyOrdersNoThrow reentrancy tests', function () { return reentrancyTest(contracts_test_utils_1.constants.FUNCTIONS_WITH_MUTEX); });
            it('should stop when the entire makerAssetFillAmount is filled', function () { return __awaiter(_this, void 0, void 0, function () {
                var makerAssetFillAmount, newBalances, makerAmountBought, makerFee, takerFee;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            makerAssetFillAmount = signedOrders[0].makerAssetAmount.plus(signedOrders[1].makerAssetAmount.div(2));
                            return [4 /*yield*/, exchangeWrapper.marketBuyOrdersNoThrowAsync(signedOrders, takerAddress, {
                                    makerAssetFillAmount: makerAssetFillAmount,
                                    // HACK(albrow): We need to hardcode the gas estimate here because
                                    // the Geth gas estimator doesn't work with the way we use
                                    // delegatecall and swallow errors.
                                    gas: 600000,
                                })];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, erc20Wrapper.getBalancesAsync()];
                        case 2:
                            newBalances = _a.sent();
                            makerAmountBought = signedOrders[0].takerAssetAmount.plus(signedOrders[1].takerAssetAmount.dividedToIntegerBy(2));
                            makerFee = signedOrders[0].makerFee.plus(signedOrders[1].makerFee.dividedToIntegerBy(2));
                            takerFee = signedOrders[0].takerFee.plus(signedOrders[1].takerFee.dividedToIntegerBy(2));
                            expect(newBalances[makerAddress][defaultMakerAssetAddress]).to.be.bignumber.equal(erc20Balances[makerAddress][defaultMakerAssetAddress].minus(makerAssetFillAmount));
                            expect(newBalances[makerAddress][defaultTakerAssetAddress]).to.be.bignumber.equal(erc20Balances[makerAddress][defaultTakerAssetAddress].plus(makerAmountBought));
                            expect(newBalances[makerAddress][zrxToken.address]).to.be.bignumber.equal(erc20Balances[makerAddress][zrxToken.address].minus(makerFee));
                            expect(newBalances[takerAddress][defaultTakerAssetAddress]).to.be.bignumber.equal(erc20Balances[takerAddress][defaultTakerAssetAddress].minus(makerAmountBought));
                            expect(newBalances[takerAddress][defaultMakerAssetAddress]).to.be.bignumber.equal(erc20Balances[takerAddress][defaultMakerAssetAddress].plus(makerAssetFillAmount));
                            expect(newBalances[takerAddress][zrxToken.address]).to.be.bignumber.equal(erc20Balances[takerAddress][zrxToken.address].minus(takerFee));
                            expect(newBalances[feeRecipientAddress][zrxToken.address]).to.be.bignumber.equal(erc20Balances[feeRecipientAddress][zrxToken.address].plus(makerFee.plus(takerFee)));
                            return [2 /*return*/];
                    }
                });
            }); });
            it('should fill all signedOrders if cannot fill entire makerAssetFillAmount', function () { return __awaiter(_this, void 0, void 0, function () {
                var makerAssetFillAmount, newBalances;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            makerAssetFillAmount = web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100000), 18);
                            _.forEach(signedOrders, function (signedOrder) {
                                erc20Balances[makerAddress][defaultMakerAssetAddress] = erc20Balances[makerAddress][defaultMakerAssetAddress].minus(signedOrder.makerAssetAmount);
                                erc20Balances[makerAddress][defaultTakerAssetAddress] = erc20Balances[makerAddress][defaultTakerAssetAddress].plus(signedOrder.takerAssetAmount);
                                erc20Balances[makerAddress][zrxToken.address] = erc20Balances[makerAddress][zrxToken.address].minus(signedOrder.makerFee);
                                erc20Balances[takerAddress][defaultMakerAssetAddress] = erc20Balances[takerAddress][defaultMakerAssetAddress].plus(signedOrder.makerAssetAmount);
                                erc20Balances[takerAddress][defaultTakerAssetAddress] = erc20Balances[takerAddress][defaultTakerAssetAddress].minus(signedOrder.takerAssetAmount);
                                erc20Balances[takerAddress][zrxToken.address] = erc20Balances[takerAddress][zrxToken.address].minus(signedOrder.takerFee);
                                erc20Balances[feeRecipientAddress][zrxToken.address] = erc20Balances[feeRecipientAddress][zrxToken.address].plus(signedOrder.makerFee.plus(signedOrder.takerFee));
                            });
                            return [4 /*yield*/, exchangeWrapper.marketBuyOrdersNoThrowAsync(signedOrders, takerAddress, {
                                    makerAssetFillAmount: makerAssetFillAmount,
                                    // HACK(albrow): We need to hardcode the gas estimate here because
                                    // the Geth gas estimator doesn't work with the way we use
                                    // delegatecall and swallow errors.
                                    gas: 600000,
                                })];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, erc20Wrapper.getBalancesAsync()];
                        case 2:
                            newBalances = _a.sent();
                            expect(newBalances).to.be.deep.equal(erc20Balances);
                            return [2 /*return*/];
                    }
                });
            }); });
            it('should not fill a signedOrder that does not use the same makerAssetAddress', function () { return __awaiter(_this, void 0, void 0, function () {
                var _a, makerAssetFillAmount, filledSignedOrders, newBalances;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, orderFactory.newSignedOrderAsync()];
                        case 1:
                            _a = [
                                _b.sent()
                            ];
                            return [4 /*yield*/, orderFactory.newSignedOrderAsync()];
                        case 2:
                            _a = _a.concat([
                                _b.sent()
                            ]);
                            return [4 /*yield*/, orderFactory.newSignedOrderAsync({
                                    makerAssetData: order_utils_1.assetDataUtils.encodeERC20AssetData(zrxToken.address),
                                })];
                        case 3:
                            signedOrders = _a.concat([
                                _b.sent()
                            ]);
                            makerAssetFillAmount = web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100000), 18);
                            filledSignedOrders = signedOrders.slice(0, -1);
                            _.forEach(filledSignedOrders, function (signedOrder) {
                                erc20Balances[makerAddress][defaultMakerAssetAddress] = erc20Balances[makerAddress][defaultMakerAssetAddress].minus(signedOrder.makerAssetAmount);
                                erc20Balances[makerAddress][defaultTakerAssetAddress] = erc20Balances[makerAddress][defaultTakerAssetAddress].plus(signedOrder.takerAssetAmount);
                                erc20Balances[makerAddress][zrxToken.address] = erc20Balances[makerAddress][zrxToken.address].minus(signedOrder.makerFee);
                                erc20Balances[takerAddress][defaultMakerAssetAddress] = erc20Balances[takerAddress][defaultMakerAssetAddress].plus(signedOrder.makerAssetAmount);
                                erc20Balances[takerAddress][defaultTakerAssetAddress] = erc20Balances[takerAddress][defaultTakerAssetAddress].minus(signedOrder.takerAssetAmount);
                                erc20Balances[takerAddress][zrxToken.address] = erc20Balances[takerAddress][zrxToken.address].minus(signedOrder.takerFee);
                                erc20Balances[feeRecipientAddress][zrxToken.address] = erc20Balances[feeRecipientAddress][zrxToken.address].plus(signedOrder.makerFee.plus(signedOrder.takerFee));
                            });
                            return [4 /*yield*/, exchangeWrapper.marketBuyOrdersNoThrowAsync(signedOrders, takerAddress, {
                                    makerAssetFillAmount: makerAssetFillAmount,
                                    // HACK(albrow): We need to hardcode the gas estimate here because
                                    // the Geth gas estimator doesn't work with the way we use
                                    // delegatecall and swallow errors.
                                    gas: 600000,
                                })];
                        case 4:
                            _b.sent();
                            return [4 /*yield*/, erc20Wrapper.getBalancesAsync()];
                        case 5:
                            newBalances = _b.sent();
                            expect(newBalances).to.be.deep.equal(erc20Balances);
                            return [2 /*return*/];
                    }
                });
            }); });
        });
        describe('batchCancelOrders', function () {
            it('should be able to cancel multiple signedOrders', function () { return __awaiter(_this, void 0, void 0, function () {
                var takerAssetCancelAmounts, newBalances;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            takerAssetCancelAmounts = _.map(signedOrders, function (signedOrder) { return signedOrder.takerAssetAmount; });
                            return [4 /*yield*/, exchangeWrapper.batchCancelOrdersAsync(signedOrders, makerAddress)];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, exchangeWrapper.batchFillOrdersNoThrowAsync(signedOrders, takerAddress, {
                                    takerAssetFillAmounts: takerAssetCancelAmounts,
                                })];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, erc20Wrapper.getBalancesAsync()];
                        case 3:
                            newBalances = _a.sent();
                            expect(erc20Balances).to.be.deep.equal(newBalances);
                            return [2 /*return*/];
                    }
                });
            }); });
        });
        describe('getOrdersInfo', function () {
            beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, orderFactory.newSignedOrderAsync()];
                        case 1:
                            _a = [
                                _b.sent()
                            ];
                            return [4 /*yield*/, orderFactory.newSignedOrderAsync()];
                        case 2:
                            _a = _a.concat([
                                _b.sent()
                            ]);
                            return [4 /*yield*/, orderFactory.newSignedOrderAsync()];
                        case 3:
                            signedOrders = _a.concat([
                                _b.sent()
                            ]);
                            return [2 /*return*/];
                    }
                });
            }); });
            it('should get the correct information for multiple unfilled orders', function () { return __awaiter(_this, void 0, void 0, function () {
                var ordersInfo;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, exchangeWrapper.getOrdersInfoAsync(signedOrders)];
                        case 1:
                            ordersInfo = _a.sent();
                            expect(ordersInfo.length).to.be.equal(3);
                            _.forEach(signedOrders, function (signedOrder, index) {
                                var expectedOrderHash = order_utils_1.orderHashUtils.getOrderHashHex(signedOrder);
                                var expectedTakerAssetFilledAmount = new utils_1.BigNumber(0);
                                var expectedOrderStatus = contracts_test_utils_1.OrderStatus.Fillable;
                                var orderInfo = ordersInfo[index];
                                expect(orderInfo.orderHash).to.be.equal(expectedOrderHash);
                                expect(orderInfo.orderTakerAssetFilledAmount).to.be.bignumber.equal(expectedTakerAssetFilledAmount);
                                expect(orderInfo.orderStatus).to.equal(expectedOrderStatus);
                            });
                            return [2 /*return*/];
                    }
                });
            }); });
            it('should get the correct information for multiple partially filled orders', function () { return __awaiter(_this, void 0, void 0, function () {
                var takerAssetFillAmounts, ordersInfo;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            takerAssetFillAmounts = _.map(signedOrders, function (signedOrder) { return signedOrder.takerAssetAmount.div(2); });
                            return [4 /*yield*/, exchangeWrapper.batchFillOrdersAsync(signedOrders, takerAddress, { takerAssetFillAmounts: takerAssetFillAmounts })];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, exchangeWrapper.getOrdersInfoAsync(signedOrders)];
                        case 2:
                            ordersInfo = _a.sent();
                            expect(ordersInfo.length).to.be.equal(3);
                            _.forEach(signedOrders, function (signedOrder, index) {
                                var expectedOrderHash = order_utils_1.orderHashUtils.getOrderHashHex(signedOrder);
                                var expectedTakerAssetFilledAmount = signedOrder.takerAssetAmount.div(2);
                                var expectedOrderStatus = contracts_test_utils_1.OrderStatus.Fillable;
                                var orderInfo = ordersInfo[index];
                                expect(orderInfo.orderHash).to.be.equal(expectedOrderHash);
                                expect(orderInfo.orderTakerAssetFilledAmount).to.be.bignumber.equal(expectedTakerAssetFilledAmount);
                                expect(orderInfo.orderStatus).to.equal(expectedOrderStatus);
                            });
                            return [2 /*return*/];
                    }
                });
            }); });
            it('should get the correct information for multiple fully filled orders', function () { return __awaiter(_this, void 0, void 0, function () {
                var ordersInfo;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, exchangeWrapper.batchFillOrdersAsync(signedOrders, takerAddress)];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, exchangeWrapper.getOrdersInfoAsync(signedOrders)];
                        case 2:
                            ordersInfo = _a.sent();
                            expect(ordersInfo.length).to.be.equal(3);
                            _.forEach(signedOrders, function (signedOrder, index) {
                                var expectedOrderHash = order_utils_1.orderHashUtils.getOrderHashHex(signedOrder);
                                var expectedTakerAssetFilledAmount = signedOrder.takerAssetAmount;
                                var expectedOrderStatus = contracts_test_utils_1.OrderStatus.FullyFilled;
                                var orderInfo = ordersInfo[index];
                                expect(orderInfo.orderHash).to.be.equal(expectedOrderHash);
                                expect(orderInfo.orderTakerAssetFilledAmount).to.be.bignumber.equal(expectedTakerAssetFilledAmount);
                                expect(orderInfo.orderStatus).to.equal(expectedOrderStatus);
                            });
                            return [2 /*return*/];
                    }
                });
            }); });
            it('should get the correct information for multiple cancelled and unfilled orders', function () { return __awaiter(_this, void 0, void 0, function () {
                var ordersInfo;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, exchangeWrapper.batchCancelOrdersAsync(signedOrders, makerAddress)];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, exchangeWrapper.getOrdersInfoAsync(signedOrders)];
                        case 2:
                            ordersInfo = _a.sent();
                            expect(ordersInfo.length).to.be.equal(3);
                            _.forEach(signedOrders, function (signedOrder, index) {
                                var expectedOrderHash = order_utils_1.orderHashUtils.getOrderHashHex(signedOrder);
                                var expectedTakerAssetFilledAmount = new utils_1.BigNumber(0);
                                var expectedOrderStatus = contracts_test_utils_1.OrderStatus.Cancelled;
                                var orderInfo = ordersInfo[index];
                                expect(orderInfo.orderHash).to.be.equal(expectedOrderHash);
                                expect(orderInfo.orderTakerAssetFilledAmount).to.be.bignumber.equal(expectedTakerAssetFilledAmount);
                                expect(orderInfo.orderStatus).to.equal(expectedOrderStatus);
                            });
                            return [2 /*return*/];
                    }
                });
            }); });
            it('should get the correct information for multiple cancelled and partially filled orders', function () { return __awaiter(_this, void 0, void 0, function () {
                var takerAssetFillAmounts, ordersInfo;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            takerAssetFillAmounts = _.map(signedOrders, function (signedOrder) { return signedOrder.takerAssetAmount.div(2); });
                            return [4 /*yield*/, exchangeWrapper.batchFillOrdersAsync(signedOrders, takerAddress, { takerAssetFillAmounts: takerAssetFillAmounts })];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, exchangeWrapper.batchCancelOrdersAsync(signedOrders, makerAddress)];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, exchangeWrapper.getOrdersInfoAsync(signedOrders)];
                        case 3:
                            ordersInfo = _a.sent();
                            expect(ordersInfo.length).to.be.equal(3);
                            _.forEach(signedOrders, function (signedOrder, index) {
                                var expectedOrderHash = order_utils_1.orderHashUtils.getOrderHashHex(signedOrder);
                                var expectedTakerAssetFilledAmount = signedOrder.takerAssetAmount.div(2);
                                var expectedOrderStatus = contracts_test_utils_1.OrderStatus.Cancelled;
                                var orderInfo = ordersInfo[index];
                                expect(orderInfo.orderHash).to.be.equal(expectedOrderHash);
                                expect(orderInfo.orderTakerAssetFilledAmount).to.be.bignumber.equal(expectedTakerAssetFilledAmount);
                                expect(orderInfo.orderStatus).to.equal(expectedOrderStatus);
                            });
                            return [2 /*return*/];
                    }
                });
            }); });
            it('should get the correct information for multiple expired and unfilled orders', function () { return __awaiter(_this, void 0, void 0, function () {
                var currentTimestamp, timeUntilExpiration, ordersInfo;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, contracts_test_utils_1.getLatestBlockTimestampAsync()];
                        case 1:
                            currentTimestamp = _a.sent();
                            timeUntilExpiration = signedOrders[0].expirationTimeSeconds.minus(currentTimestamp).toNumber();
                            return [4 /*yield*/, contracts_test_utils_1.increaseTimeAndMineBlockAsync(timeUntilExpiration)];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, exchangeWrapper.getOrdersInfoAsync(signedOrders)];
                        case 3:
                            ordersInfo = _a.sent();
                            expect(ordersInfo.length).to.be.equal(3);
                            _.forEach(signedOrders, function (signedOrder, index) {
                                var expectedOrderHash = order_utils_1.orderHashUtils.getOrderHashHex(signedOrder);
                                var expectedTakerAssetFilledAmount = new utils_1.BigNumber(0);
                                var expectedOrderStatus = contracts_test_utils_1.OrderStatus.Expired;
                                var orderInfo = ordersInfo[index];
                                expect(orderInfo.orderHash).to.be.equal(expectedOrderHash);
                                expect(orderInfo.orderTakerAssetFilledAmount).to.be.bignumber.equal(expectedTakerAssetFilledAmount);
                                expect(orderInfo.orderStatus).to.equal(expectedOrderStatus);
                            });
                            return [2 /*return*/];
                    }
                });
            }); });
            it('should get the correct information for multiple expired and partially filled orders', function () { return __awaiter(_this, void 0, void 0, function () {
                var takerAssetFillAmounts, currentTimestamp, timeUntilExpiration, ordersInfo;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            takerAssetFillAmounts = _.map(signedOrders, function (signedOrder) { return signedOrder.takerAssetAmount.div(2); });
                            return [4 /*yield*/, exchangeWrapper.batchFillOrdersAsync(signedOrders, takerAddress, { takerAssetFillAmounts: takerAssetFillAmounts })];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, contracts_test_utils_1.getLatestBlockTimestampAsync()];
                        case 2:
                            currentTimestamp = _a.sent();
                            timeUntilExpiration = signedOrders[0].expirationTimeSeconds.minus(currentTimestamp).toNumber();
                            return [4 /*yield*/, contracts_test_utils_1.increaseTimeAndMineBlockAsync(timeUntilExpiration)];
                        case 3:
                            _a.sent();
                            return [4 /*yield*/, exchangeWrapper.getOrdersInfoAsync(signedOrders)];
                        case 4:
                            ordersInfo = _a.sent();
                            expect(ordersInfo.length).to.be.equal(3);
                            _.forEach(signedOrders, function (signedOrder, index) {
                                var expectedOrderHash = order_utils_1.orderHashUtils.getOrderHashHex(signedOrder);
                                var expectedTakerAssetFilledAmount = signedOrder.takerAssetAmount.div(2);
                                var expectedOrderStatus = contracts_test_utils_1.OrderStatus.Expired;
                                var orderInfo = ordersInfo[index];
                                expect(orderInfo.orderHash).to.be.equal(expectedOrderHash);
                                expect(orderInfo.orderTakerAssetFilledAmount).to.be.bignumber.equal(expectedTakerAssetFilledAmount);
                                expect(orderInfo.orderStatus).to.equal(expectedOrderStatus);
                            });
                            return [2 /*return*/];
                    }
                });
            }); });
            it('should get the correct information for a mix of unfilled, partially filled, fully filled, cancelled, and expired orders', function () { return __awaiter(_this, void 0, void 0, function () {
                var unfilledOrder, partiallyFilledOrder, fullyFilledOrder, cancelledOrder, currentTimestamp, expiredOrder, ordersInfo, expectedUnfilledOrderHash, expectedUnfilledTakerAssetFilledAmount, expectedUnfilledOrderStatus, unfilledOrderInfo, expectedPartialOrderHash, expectedPartialTakerAssetFilledAmount, expectedPartialOrderStatus, partialOrderInfo, expectedFilledOrderHash, expectedFilledTakerAssetFilledAmount, expectedFilledOrderStatus, filledOrderInfo, expectedCancelledOrderHash, expectedCancelledTakerAssetFilledAmount, expectedCancelledOrderStatus, cancelledOrderInfo, expectedExpiredOrderHash, expectedExpiredTakerAssetFilledAmount, expectedExpiredOrderStatus, expiredOrderInfo;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, orderFactory.newSignedOrderAsync()];
                        case 1:
                            unfilledOrder = _a.sent();
                            return [4 /*yield*/, orderFactory.newSignedOrderAsync()];
                        case 2:
                            partiallyFilledOrder = _a.sent();
                            return [4 /*yield*/, exchangeWrapper.fillOrderAsync(partiallyFilledOrder, takerAddress, {
                                    takerAssetFillAmount: partiallyFilledOrder.takerAssetAmount.div(2),
                                })];
                        case 3:
                            _a.sent();
                            return [4 /*yield*/, orderFactory.newSignedOrderAsync()];
                        case 4:
                            fullyFilledOrder = _a.sent();
                            return [4 /*yield*/, exchangeWrapper.fillOrderAsync(fullyFilledOrder, takerAddress)];
                        case 5:
                            _a.sent();
                            return [4 /*yield*/, orderFactory.newSignedOrderAsync()];
                        case 6:
                            cancelledOrder = _a.sent();
                            return [4 /*yield*/, exchangeWrapper.cancelOrderAsync(cancelledOrder, makerAddress)];
                        case 7:
                            _a.sent();
                            return [4 /*yield*/, contracts_test_utils_1.getLatestBlockTimestampAsync()];
                        case 8:
                            currentTimestamp = _a.sent();
                            return [4 /*yield*/, orderFactory.newSignedOrderAsync({
                                    expirationTimeSeconds: new utils_1.BigNumber(currentTimestamp),
                                })];
                        case 9:
                            expiredOrder = _a.sent();
                            signedOrders = [unfilledOrder, partiallyFilledOrder, fullyFilledOrder, cancelledOrder, expiredOrder];
                            return [4 /*yield*/, exchangeWrapper.getOrdersInfoAsync(signedOrders)];
                        case 10:
                            ordersInfo = _a.sent();
                            expect(ordersInfo.length).to.be.equal(5);
                            expectedUnfilledOrderHash = order_utils_1.orderHashUtils.getOrderHashHex(unfilledOrder);
                            expectedUnfilledTakerAssetFilledAmount = new utils_1.BigNumber(0);
                            expectedUnfilledOrderStatus = contracts_test_utils_1.OrderStatus.Fillable;
                            unfilledOrderInfo = ordersInfo[0];
                            expect(unfilledOrderInfo.orderHash).to.be.equal(expectedUnfilledOrderHash);
                            expect(unfilledOrderInfo.orderTakerAssetFilledAmount).to.be.bignumber.equal(expectedUnfilledTakerAssetFilledAmount);
                            expect(unfilledOrderInfo.orderStatus).to.be.equal(expectedUnfilledOrderStatus);
                            expectedPartialOrderHash = order_utils_1.orderHashUtils.getOrderHashHex(partiallyFilledOrder);
                            expectedPartialTakerAssetFilledAmount = partiallyFilledOrder.takerAssetAmount.div(2);
                            expectedPartialOrderStatus = contracts_test_utils_1.OrderStatus.Fillable;
                            partialOrderInfo = ordersInfo[1];
                            expect(partialOrderInfo.orderHash).to.be.equal(expectedPartialOrderHash);
                            expect(partialOrderInfo.orderTakerAssetFilledAmount).to.be.bignumber.equal(expectedPartialTakerAssetFilledAmount);
                            expect(partialOrderInfo.orderStatus).to.be.equal(expectedPartialOrderStatus);
                            expectedFilledOrderHash = order_utils_1.orderHashUtils.getOrderHashHex(fullyFilledOrder);
                            expectedFilledTakerAssetFilledAmount = fullyFilledOrder.takerAssetAmount;
                            expectedFilledOrderStatus = contracts_test_utils_1.OrderStatus.FullyFilled;
                            filledOrderInfo = ordersInfo[2];
                            expect(filledOrderInfo.orderHash).to.be.equal(expectedFilledOrderHash);
                            expect(filledOrderInfo.orderTakerAssetFilledAmount).to.be.bignumber.equal(expectedFilledTakerAssetFilledAmount);
                            expect(filledOrderInfo.orderStatus).to.be.equal(expectedFilledOrderStatus);
                            expectedCancelledOrderHash = order_utils_1.orderHashUtils.getOrderHashHex(cancelledOrder);
                            expectedCancelledTakerAssetFilledAmount = new utils_1.BigNumber(0);
                            expectedCancelledOrderStatus = contracts_test_utils_1.OrderStatus.Cancelled;
                            cancelledOrderInfo = ordersInfo[3];
                            expect(cancelledOrderInfo.orderHash).to.be.equal(expectedCancelledOrderHash);
                            expect(cancelledOrderInfo.orderTakerAssetFilledAmount).to.be.bignumber.equal(expectedCancelledTakerAssetFilledAmount);
                            expect(cancelledOrderInfo.orderStatus).to.be.equal(expectedCancelledOrderStatus);
                            expectedExpiredOrderHash = order_utils_1.orderHashUtils.getOrderHashHex(expiredOrder);
                            expectedExpiredTakerAssetFilledAmount = new utils_1.BigNumber(0);
                            expectedExpiredOrderStatus = contracts_test_utils_1.OrderStatus.Expired;
                            expiredOrderInfo = ordersInfo[4];
                            expect(expiredOrderInfo.orderHash).to.be.equal(expectedExpiredOrderHash);
                            expect(expiredOrderInfo.orderTakerAssetFilledAmount).to.be.bignumber.equal(expectedExpiredTakerAssetFilledAmount);
                            expect(expiredOrderInfo.orderStatus).to.be.equal(expectedExpiredOrderStatus);
                            return [2 /*return*/];
                    }
                });
            }); });
        });
    });
}); // tslint:disable-line:max-file-line-count
//# sourceMappingURL=wrapper.js.map