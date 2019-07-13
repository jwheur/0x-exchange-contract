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
var blockchainLifecycle = new dev_utils_1.BlockchainLifecycle(contracts_test_utils_1.web3Wrapper);
contracts_test_utils_1.chaiSetup.configure();
var expect = chai.expect;
describe('matchOrders', function () {
    var makerAddressLeft;
    var makerAddressRight;
    var owner;
    var takerAddress;
    var feeRecipientAddressLeft;
    var feeRecipientAddressRight;
    var erc20TokenA;
    var erc20TokenB;
    var zrxToken;
    var erc721Token;
    var reentrantErc20Token;
    var exchange;
    var erc20Proxy;
    var erc721Proxy;
    var erc20BalancesByOwner;
    var erc721TokenIdsByOwner;
    var exchangeWrapper;
    var erc20Wrapper;
    var erc721Wrapper;
    var orderFactoryLeft;
    var orderFactoryRight;
    var erc721LeftMakerAssetIds;
    var erc721RightMakerAssetIds;
    var defaultERC20MakerAssetAddress;
    var defaultERC20TakerAssetAddress;
    var defaultERC721AssetAddress;
    var matchOrderTester;
    var testExchange;
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
        var _a, _b, _c, _d, accounts, usedAddresses, numDummyErc20ToDeploy, erc721Balances, _e, _f, _g, _h, defaultOrderParamsLeft, defaultOrderParamsRight, privateKeyLeft, privateKeyRight;
        return __generator(this, function (_j) {
            switch (_j.label) {
                case 0: return [4 /*yield*/, contracts_test_utils_1.web3Wrapper.getAvailableAddressesAsync()];
                case 1:
                    accounts = _j.sent();
                    usedAddresses = (_a = _.slice(accounts, 0, 6), _b = __read(_a, 6), owner = _b[0], makerAddressLeft = _b[1], makerAddressRight = _b[2], takerAddress = _b[3], feeRecipientAddressLeft = _b[4], 
                    // tslint:disable-next-line:trailing-comma
                    feeRecipientAddressRight = _b[5], _a);
                    // Create wrappers
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
                    // Deploy ERC721 token and proxy
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
                    erc721LeftMakerAssetIds = erc721Balances[makerAddressLeft][erc721Token.address];
                    erc721RightMakerAssetIds = erc721Balances[makerAddressRight][erc721Token.address];
                    return [4 /*yield*/, src_1.ExchangeContract.deployFrom0xArtifactAsync(src_1.artifacts.Exchange, contracts_test_utils_1.provider, contracts_test_utils_1.txDefaults, order_utils_1.assetDataUtils.encodeERC20AssetData(zrxToken.address))];
                case 9:
                    // Depoy exchange
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
                case 12: 
                // Authorize ERC20 and ERC721 trades by exchange
                return [4 /*yield*/, _f.apply(_e, [_j.sent(),
                        contracts_test_utils_1.constants.AWAIT_TRANSACTION_MINED_MS])];
                case 13:
                    // Authorize ERC20 and ERC721 trades by exchange
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
                    // Set default addresses
                    defaultERC20MakerAssetAddress = erc20TokenA.address;
                    defaultERC20TakerAssetAddress = erc20TokenB.address;
                    defaultERC721AssetAddress = erc721Token.address;
                    defaultOrderParamsLeft = __assign({}, contracts_test_utils_1.constants.STATIC_ORDER_PARAMS, { makerAddress: makerAddressLeft, exchangeAddress: exchange.address, makerAssetData: order_utils_1.assetDataUtils.encodeERC20AssetData(defaultERC20MakerAssetAddress), takerAssetData: order_utils_1.assetDataUtils.encodeERC20AssetData(defaultERC20TakerAssetAddress), feeRecipientAddress: feeRecipientAddressLeft });
                    defaultOrderParamsRight = __assign({}, contracts_test_utils_1.constants.STATIC_ORDER_PARAMS, { makerAddress: makerAddressRight, exchangeAddress: exchange.address, makerAssetData: order_utils_1.assetDataUtils.encodeERC20AssetData(defaultERC20TakerAssetAddress), takerAssetData: order_utils_1.assetDataUtils.encodeERC20AssetData(defaultERC20MakerAssetAddress), feeRecipientAddress: feeRecipientAddressRight });
                    privateKeyLeft = contracts_test_utils_1.constants.TESTRPC_PRIVATE_KEYS[accounts.indexOf(makerAddressLeft)];
                    orderFactoryLeft = new contracts_test_utils_1.OrderFactory(privateKeyLeft, defaultOrderParamsLeft);
                    privateKeyRight = contracts_test_utils_1.constants.TESTRPC_PRIVATE_KEYS[accounts.indexOf(makerAddressRight)];
                    orderFactoryRight = new contracts_test_utils_1.OrderFactory(privateKeyRight, defaultOrderParamsRight);
                    // Set match order tester
                    matchOrderTester = new src_1.MatchOrderTester(exchangeWrapper, erc20Wrapper, erc721Wrapper, zrxToken.address);
                    return [4 /*yield*/, src_1.TestExchangeInternalsContract.deployFrom0xArtifactAsync(src_1.artifacts.TestExchangeInternals, contracts_test_utils_1.provider, contracts_test_utils_1.txDefaults)];
                case 17:
                    testExchange = _j.sent();
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
    describe('matchOrders', function () {
        beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, erc20Wrapper.getBalancesAsync()];
                    case 1:
                        erc20BalancesByOwner = _a.sent();
                        return [4 /*yield*/, erc721Wrapper.getBalancesAsync()];
                    case 2:
                        erc721TokenIdsByOwner = _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('Should transfer correct amounts when right order is fully filled and values pass isRoundingErrorFloor but fail isRoundingErrorCeil', function () { return __awaiter(_this, void 0, void 0, function () {
            var signedOrderLeft, signedOrderRight, numerator, denominator, target, isRoundingErrorCeil, isRoundingErrorFloor, expectedTransferAmounts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, orderFactoryLeft.newSignedOrderAsync({
                            makerAddress: makerAddressLeft,
                            makerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(17), 0),
                            takerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(98), 0),
                            feeRecipientAddress: feeRecipientAddressLeft,
                        })];
                    case 1:
                        signedOrderLeft = _a.sent();
                        return [4 /*yield*/, orderFactoryRight.newSignedOrderAsync({
                                makerAddress: makerAddressRight,
                                makerAssetData: order_utils_1.assetDataUtils.encodeERC20AssetData(defaultERC20TakerAssetAddress),
                                takerAssetData: order_utils_1.assetDataUtils.encodeERC20AssetData(defaultERC20MakerAssetAddress),
                                makerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(75), 0),
                                takerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(13), 0),
                                feeRecipientAddress: feeRecipientAddressRight,
                            })];
                    case 2:
                        signedOrderRight = _a.sent();
                        numerator = signedOrderLeft.makerAssetAmount;
                        denominator = signedOrderLeft.takerAssetAmount;
                        target = signedOrderRight.makerAssetAmount;
                        return [4 /*yield*/, testExchange.publicIsRoundingErrorCeil.callAsync(numerator, denominator, target)];
                    case 3:
                        isRoundingErrorCeil = _a.sent();
                        expect(isRoundingErrorCeil).to.be.true();
                        return [4 /*yield*/, testExchange.publicIsRoundingErrorFloor.callAsync(numerator, denominator, target)];
                    case 4:
                        isRoundingErrorFloor = _a.sent();
                        expect(isRoundingErrorFloor).to.be.false();
                        expectedTransferAmounts = {
                            // Left Maker
                            amountSoldByLeftMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(13), 0),
                            amountBoughtByLeftMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(75), 0),
                            feePaidByLeftMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber('76.4705882352941176'), 16),
                            // Right Maker
                            amountSoldByRightMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(75), 0),
                            amountBoughtByRightMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(13), 0),
                            feePaidByRightMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 16),
                            // Taker
                            amountReceivedByTaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(0), 0),
                            feePaidByTakerLeft: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber('76.5306122448979591'), 16),
                            feePaidByTakerRight: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 16),
                        };
                        return [4 /*yield*/, matchOrderTester.matchOrdersAndAssertEffectsAsync(signedOrderLeft, signedOrderRight, takerAddress, erc20BalancesByOwner, erc721TokenIdsByOwner, expectedTransferAmounts)];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('Should transfer correct amounts when left order is fully filled and values pass isRoundingErrorCeil but fail isRoundingErrorFloor', function () { return __awaiter(_this, void 0, void 0, function () {
            var signedOrderLeft, signedOrderRight, numerator, denominator, target, isRoundingErrorFloor, isRoundingErrorCeil, expectedTransferAmounts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, orderFactoryLeft.newSignedOrderAsync({
                            makerAddress: makerAddressLeft,
                            makerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(15), 0),
                            takerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(90), 0),
                            feeRecipientAddress: feeRecipientAddressLeft,
                        })];
                    case 1:
                        signedOrderLeft = _a.sent();
                        return [4 /*yield*/, orderFactoryRight.newSignedOrderAsync({
                                makerAddress: makerAddressRight,
                                makerAssetData: order_utils_1.assetDataUtils.encodeERC20AssetData(defaultERC20TakerAssetAddress),
                                takerAssetData: order_utils_1.assetDataUtils.encodeERC20AssetData(defaultERC20MakerAssetAddress),
                                makerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(97), 0),
                                takerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(14), 0),
                                feeRecipientAddress: feeRecipientAddressRight,
                            })];
                    case 2:
                        signedOrderRight = _a.sent();
                        numerator = signedOrderRight.takerAssetAmount;
                        denominator = signedOrderRight.makerAssetAmount;
                        target = signedOrderLeft.takerAssetAmount;
                        return [4 /*yield*/, testExchange.publicIsRoundingErrorFloor.callAsync(numerator, denominator, target)];
                    case 3:
                        isRoundingErrorFloor = _a.sent();
                        expect(isRoundingErrorFloor).to.be.true();
                        return [4 /*yield*/, testExchange.publicIsRoundingErrorCeil.callAsync(numerator, denominator, target)];
                    case 4:
                        isRoundingErrorCeil = _a.sent();
                        expect(isRoundingErrorCeil).to.be.false();
                        expectedTransferAmounts = {
                            // Left Maker
                            amountSoldByLeftMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(15), 0),
                            amountBoughtByLeftMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(90), 0),
                            feePaidByLeftMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 16),
                            // Right Maker
                            amountSoldByRightMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(90), 0),
                            amountBoughtByRightMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(13), 0),
                            feePaidByRightMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber('92.7835051546391752'), 16),
                            // Taker
                            amountReceivedByTaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(2), 0),
                            feePaidByTakerLeft: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 16),
                            feePaidByTakerRight: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber('92.8571428571428571'), 16),
                        };
                        return [4 /*yield*/, matchOrderTester.matchOrdersAndAssertEffectsAsync(signedOrderLeft, signedOrderRight, takerAddress, erc20BalancesByOwner, erc721TokenIdsByOwner, expectedTransferAmounts)];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('Should give right maker a better buy price when rounding', function () { return __awaiter(_this, void 0, void 0, function () {
            var signedOrderLeft, signedOrderRight, expectedTransferAmounts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, orderFactoryLeft.newSignedOrderAsync({
                            makerAddress: makerAddressLeft,
                            makerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(16), 0),
                            takerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(22), 0),
                            feeRecipientAddress: feeRecipientAddressLeft,
                        })];
                    case 1:
                        signedOrderLeft = _a.sent();
                        return [4 /*yield*/, orderFactoryRight.newSignedOrderAsync({
                                makerAddress: makerAddressRight,
                                makerAssetData: order_utils_1.assetDataUtils.encodeERC20AssetData(defaultERC20TakerAssetAddress),
                                takerAssetData: order_utils_1.assetDataUtils.encodeERC20AssetData(defaultERC20MakerAssetAddress),
                                makerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(83), 0),
                                takerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(49), 0),
                                feeRecipientAddress: feeRecipientAddressRight,
                            })];
                    case 2:
                        signedOrderRight = _a.sent();
                        expectedTransferAmounts = {
                            // Left Maker
                            amountSoldByLeftMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(16), 0),
                            amountBoughtByLeftMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(22), 0),
                            feePaidByLeftMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 16),
                            // Right Maker
                            amountSoldByRightMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(22), 0),
                            amountBoughtByRightMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(13), 0),
                            feePaidByRightMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber('26.5060240963855421'), 16),
                            // Taker
                            amountReceivedByTaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(3), 0),
                            feePaidByTakerLeft: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 16),
                            feePaidByTakerRight: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber('26.5306122448979591'), 16),
                        };
                        // Match signedOrderLeft with signedOrderRight
                        return [4 /*yield*/, matchOrderTester.matchOrdersAndAssertEffectsAsync(signedOrderLeft, signedOrderRight, takerAddress, erc20BalancesByOwner, erc721TokenIdsByOwner, expectedTransferAmounts)];
                    case 3:
                        // Match signedOrderLeft with signedOrderRight
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('Should give left maker a better sell price when rounding', function () { return __awaiter(_this, void 0, void 0, function () {
            var signedOrderLeft, signedOrderRight, expectedTransferAmounts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, orderFactoryLeft.newSignedOrderAsync({
                            makerAddress: makerAddressLeft,
                            makerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(12), 0),
                            takerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(97), 0),
                            feeRecipientAddress: feeRecipientAddressLeft,
                        })];
                    case 1:
                        signedOrderLeft = _a.sent();
                        return [4 /*yield*/, orderFactoryRight.newSignedOrderAsync({
                                makerAddress: makerAddressRight,
                                makerAssetData: order_utils_1.assetDataUtils.encodeERC20AssetData(defaultERC20TakerAssetAddress),
                                takerAssetData: order_utils_1.assetDataUtils.encodeERC20AssetData(defaultERC20MakerAssetAddress),
                                makerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(89), 0),
                                takerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(1), 0),
                                feeRecipientAddress: feeRecipientAddressRight,
                            })];
                    case 2:
                        signedOrderRight = _a.sent();
                        expectedTransferAmounts = {
                            // Left Maker
                            amountSoldByLeftMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(11), 0),
                            amountBoughtByLeftMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(89), 0),
                            feePaidByLeftMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber('91.6666666666666666'), 16),
                            // Right Maker
                            amountSoldByRightMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(89), 0),
                            amountBoughtByRightMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(1), 0),
                            feePaidByRightMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 16),
                            // Taker
                            amountReceivedByTaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(10), 0),
                            feePaidByTakerLeft: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber('91.7525773195876288'), 16),
                            feePaidByTakerRight: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 16),
                        };
                        // Match signedOrderLeft with signedOrderRight
                        return [4 /*yield*/, matchOrderTester.matchOrdersAndAssertEffectsAsync(signedOrderLeft, signedOrderRight, takerAddress, erc20BalancesByOwner, erc721TokenIdsByOwner, expectedTransferAmounts)];
                    case 3:
                        // Match signedOrderLeft with signedOrderRight
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('Should give right maker and right taker a favorable fee price when rounding', function () { return __awaiter(_this, void 0, void 0, function () {
            var signedOrderLeft, signedOrderRight, expectedTransferAmounts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, orderFactoryLeft.newSignedOrderAsync({
                            makerAddress: makerAddressLeft,
                            makerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(16), 0),
                            takerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(22), 0),
                            feeRecipientAddress: feeRecipientAddressLeft,
                        })];
                    case 1:
                        signedOrderLeft = _a.sent();
                        return [4 /*yield*/, orderFactoryRight.newSignedOrderAsync({
                                makerAddress: makerAddressRight,
                                makerAssetData: order_utils_1.assetDataUtils.encodeERC20AssetData(defaultERC20TakerAssetAddress),
                                takerAssetData: order_utils_1.assetDataUtils.encodeERC20AssetData(defaultERC20MakerAssetAddress),
                                makerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(83), 0),
                                takerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(49), 0),
                                feeRecipientAddress: feeRecipientAddressRight,
                                makerFee: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(10000), 0),
                                takerFee: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(10000), 0),
                            })];
                    case 2:
                        signedOrderRight = _a.sent();
                        expectedTransferAmounts = {
                            // Left Maker
                            amountSoldByLeftMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(16), 0),
                            amountBoughtByLeftMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(22), 0),
                            feePaidByLeftMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 16),
                            // Right Maker
                            amountSoldByRightMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(22), 0),
                            amountBoughtByRightMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(13), 0),
                            feePaidByRightMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(2650), 0),
                            // Taker
                            amountReceivedByTaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(3), 0),
                            feePaidByTakerLeft: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 16),
                            feePaidByTakerRight: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(2653), 0),
                        };
                        // Match signedOrderLeft with signedOrderRight
                        return [4 /*yield*/, matchOrderTester.matchOrdersAndAssertEffectsAsync(signedOrderLeft, signedOrderRight, takerAddress, erc20BalancesByOwner, erc721TokenIdsByOwner, expectedTransferAmounts)];
                    case 3:
                        // Match signedOrderLeft with signedOrderRight
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('Should give left maker and left taker a favorable fee price when rounding', function () { return __awaiter(_this, void 0, void 0, function () {
            var signedOrderLeft, signedOrderRight, expectedTransferAmounts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, orderFactoryLeft.newSignedOrderAsync({
                            makerAddress: makerAddressLeft,
                            makerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(12), 0),
                            takerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(97), 0),
                            feeRecipientAddress: feeRecipientAddressLeft,
                            makerFee: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(10000), 0),
                            takerFee: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(10000), 0),
                        })];
                    case 1:
                        signedOrderLeft = _a.sent();
                        return [4 /*yield*/, orderFactoryRight.newSignedOrderAsync({
                                makerAddress: makerAddressRight,
                                makerAssetData: order_utils_1.assetDataUtils.encodeERC20AssetData(defaultERC20TakerAssetAddress),
                                takerAssetData: order_utils_1.assetDataUtils.encodeERC20AssetData(defaultERC20MakerAssetAddress),
                                makerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(89), 0),
                                takerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(1), 0),
                                feeRecipientAddress: feeRecipientAddressRight,
                            })];
                    case 2:
                        signedOrderRight = _a.sent();
                        expectedTransferAmounts = {
                            // Left Maker
                            amountSoldByLeftMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(11), 0),
                            amountBoughtByLeftMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(89), 0),
                            feePaidByLeftMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(9166), 0),
                            // Right Maker
                            amountSoldByRightMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(89), 0),
                            amountBoughtByRightMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(1), 0),
                            feePaidByRightMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 16),
                            // Taker
                            amountReceivedByTaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(10), 0),
                            feePaidByTakerLeft: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(9175), 0),
                            feePaidByTakerRight: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 16),
                        };
                        // Match signedOrderLeft with signedOrderRight
                        return [4 /*yield*/, matchOrderTester.matchOrdersAndAssertEffectsAsync(signedOrderLeft, signedOrderRight, takerAddress, erc20BalancesByOwner, erc721TokenIdsByOwner, expectedTransferAmounts)];
                    case 3:
                        // Match signedOrderLeft with signedOrderRight
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('Should transfer correct amounts when right order fill amount deviates from amount derived by `Exchange.fillOrder`', function () { return __awaiter(_this, void 0, void 0, function () {
            var signedOrderLeft, signedOrderRight, expectedTransferAmounts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, orderFactoryLeft.newSignedOrderAsync({
                            makerAddress: makerAddressLeft,
                            makerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(1000), 0),
                            takerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(1005), 0),
                            feeRecipientAddress: feeRecipientAddressLeft,
                        })];
                    case 1:
                        signedOrderLeft = _a.sent();
                        return [4 /*yield*/, orderFactoryRight.newSignedOrderAsync({
                                makerAddress: makerAddressRight,
                                makerAssetData: order_utils_1.assetDataUtils.encodeERC20AssetData(defaultERC20TakerAssetAddress),
                                takerAssetData: order_utils_1.assetDataUtils.encodeERC20AssetData(defaultERC20MakerAssetAddress),
                                makerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(2126), 0),
                                takerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(1063), 0),
                                feeRecipientAddress: feeRecipientAddressRight,
                            })];
                    case 2:
                        signedOrderRight = _a.sent();
                        expectedTransferAmounts = {
                            // Left Maker
                            amountSoldByLeftMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(1000), 0),
                            amountBoughtByLeftMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(1005), 0),
                            feePaidByLeftMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 16),
                            // Right Maker
                            // Notes:
                            //  i.
                            //    The left order is fully filled by the right order, so the right maker must sell 1005 units of their asset to the left maker.
                            //    By selling 1005 units, the right maker should theoretically receive 502.5 units of the left maker's asset.
                            //    Since the transfer amount must be an integer, this value must be rounded down to 502 or up to 503.
                            //  ii.
                            //    If the right order were filled via `Exchange.fillOrder` the respective fill amounts would be [1004, 502] or [1006, 503].
                            //    It follows that we cannot trigger a sale of 1005 units of the right maker's asset through `Exchange.fillOrder`.
                            //  iii.
                            //    For an optimal match, the algorithm must choose either [1005, 502] or [1005, 503] as fill amounts for the right order.
                            //    The algorithm favors the right maker when the exchange rate must be rounded, so the final fill for the right order is [1005, 503].
                            //  iv.
                            //    The right maker fee differs from the right taker fee because their exchange rate differs.
                            //    The right maker always receives the better exchange and fee price.
                            amountSoldByRightMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(1005), 0),
                            amountBoughtByRightMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(503), 0),
                            feePaidByRightMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber('47.2718720602069614'), 16),
                            // Taker
                            amountReceivedByTaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(497), 0),
                            feePaidByTakerLeft: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 16),
                            feePaidByTakerRight: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber('47.3189087488240827'), 16),
                        };
                        // Match signedOrderLeft with signedOrderRight
                        return [4 /*yield*/, matchOrderTester.matchOrdersAndAssertEffectsAsync(signedOrderLeft, signedOrderRight, takerAddress, erc20BalancesByOwner, erc721TokenIdsByOwner, expectedTransferAmounts)];
                    case 3:
                        // Match signedOrderLeft with signedOrderRight
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        var reentrancyTest = function (functionNames) {
            _.forEach(functionNames, function (functionName, functionId) { return __awaiter(_this, void 0, void 0, function () {
                var description;
                var _this = this;
                return __generator(this, function (_a) {
                    description = "should not allow matchOrders to reenter the Exchange contract via " + functionName;
                    it(description, function () { return __awaiter(_this, void 0, void 0, function () {
                        var signedOrderLeft, signedOrderRight, _a, _b;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0: return [4 /*yield*/, orderFactoryLeft.newSignedOrderAsync({
                                        makerAssetData: order_utils_1.assetDataUtils.encodeERC20AssetData(reentrantErc20Token.address),
                                        makerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(5), 18),
                                        takerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(10), 18),
                                    })];
                                case 1:
                                    signedOrderLeft = _c.sent();
                                    return [4 /*yield*/, orderFactoryRight.newSignedOrderAsync({
                                            makerAddress: makerAddressRight,
                                            takerAssetData: order_utils_1.assetDataUtils.encodeERC20AssetData(reentrantErc20Token.address),
                                            makerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(10), 18),
                                            takerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(2), 18),
                                            feeRecipientAddress: feeRecipientAddressRight,
                                        })];
                                case 2:
                                    signedOrderRight = _c.sent();
                                    _b = (_a = contracts_test_utils_1.web3Wrapper).awaitTransactionSuccessAsync;
                                    return [4 /*yield*/, reentrantErc20Token.setCurrentFunction.sendTransactionAsync(functionId)];
                                case 3: return [4 /*yield*/, _b.apply(_a, [_c.sent(),
                                        contracts_test_utils_1.constants.AWAIT_TRANSACTION_MINED_MS])];
                                case 4:
                                    _c.sent();
                                    return [4 /*yield*/, contracts_test_utils_1.expectTransactionFailedAsync(exchangeWrapper.matchOrdersAsync(signedOrderLeft, signedOrderRight, takerAddress), types_1.RevertReason.TransferFailed)];
                                case 5:
                                    _c.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    return [2 /*return*/];
                });
            }); });
        };
        describe('matchOrders reentrancy tests', function () { return reentrancyTest(contracts_test_utils_1.constants.FUNCTIONS_WITH_MUTEX); });
        it('should transfer the correct amounts when orders completely fill each other', function () { return __awaiter(_this, void 0, void 0, function () {
            var signedOrderLeft, signedOrderRight, expectedTransferAmounts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, orderFactoryLeft.newSignedOrderAsync({
                            makerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(5), 18),
                            takerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(10), 18),
                        })];
                    case 1:
                        signedOrderLeft = _a.sent();
                        return [4 /*yield*/, orderFactoryRight.newSignedOrderAsync({
                                makerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(10), 18),
                                takerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(2), 18),
                            })];
                    case 2:
                        signedOrderRight = _a.sent();
                        expectedTransferAmounts = {
                            // Left Maker
                            amountSoldByLeftMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(5), 18),
                            amountBoughtByLeftMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(10), 18),
                            feePaidByLeftMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 16),
                            // Right Maker
                            amountSoldByRightMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(10), 18),
                            amountBoughtByRightMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(2), 18),
                            feePaidByRightMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 16),
                            // Taker
                            amountReceivedByTaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(3), 18),
                            feePaidByTakerLeft: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 16),
                            feePaidByTakerRight: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 16),
                        };
                        return [4 /*yield*/, matchOrderTester.matchOrdersAndAssertEffectsAsync(signedOrderLeft, signedOrderRight, takerAddress, erc20BalancesByOwner, erc721TokenIdsByOwner, expectedTransferAmounts)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should transfer the correct amounts when orders completely fill each other and taker doesnt take a profit', function () { return __awaiter(_this, void 0, void 0, function () {
            var signedOrderLeft, signedOrderRight, expectedTransferAmounts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, orderFactoryLeft.newSignedOrderAsync({
                            makerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(5), 18),
                            takerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(10), 18),
                        })];
                    case 1:
                        signedOrderLeft = _a.sent();
                        return [4 /*yield*/, orderFactoryRight.newSignedOrderAsync({
                                makerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(10), 18),
                                takerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(5), 18),
                            })];
                    case 2:
                        signedOrderRight = _a.sent();
                        expectedTransferAmounts = {
                            // Left Maker
                            amountSoldByLeftMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(5), 18),
                            amountBoughtByLeftMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(10), 18),
                            feePaidByLeftMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 16),
                            // Right Maker
                            amountSoldByRightMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(10), 18),
                            amountBoughtByRightMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(5), 18),
                            feePaidByRightMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 16),
                            // Taker
                            amountReceivedByTaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(0), 18),
                            feePaidByTakerLeft: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 16),
                            feePaidByTakerRight: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 16),
                        };
                        // Match signedOrderLeft with signedOrderRight
                        return [4 /*yield*/, matchOrderTester.matchOrdersAndAssertEffectsAsync(signedOrderLeft, signedOrderRight, takerAddress, erc20BalancesByOwner, erc721TokenIdsByOwner, expectedTransferAmounts)];
                    case 3:
                        // Match signedOrderLeft with signedOrderRight
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should transfer the correct amounts when left order is completely filled and right order is partially filled', function () { return __awaiter(_this, void 0, void 0, function () {
            var signedOrderLeft, signedOrderRight, expectedTransferAmounts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, orderFactoryLeft.newSignedOrderAsync({
                            makerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(5), 18),
                            takerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(10), 18),
                        })];
                    case 1:
                        signedOrderLeft = _a.sent();
                        return [4 /*yield*/, orderFactoryRight.newSignedOrderAsync({
                                makerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(20), 18),
                                takerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(4), 18),
                            })];
                    case 2:
                        signedOrderRight = _a.sent();
                        expectedTransferAmounts = {
                            // Left Maker
                            amountSoldByLeftMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(5), 18),
                            amountBoughtByLeftMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(10), 18),
                            feePaidByLeftMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 16),
                            // Right Maker
                            amountSoldByRightMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(10), 18),
                            amountBoughtByRightMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(2), 18),
                            feePaidByRightMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(50), 16),
                            // Taker
                            amountReceivedByTaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(3), 18),
                            feePaidByTakerLeft: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 16),
                            feePaidByTakerRight: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(50), 16),
                        };
                        // Match signedOrderLeft with signedOrderRight
                        return [4 /*yield*/, matchOrderTester.matchOrdersAndAssertEffectsAsync(signedOrderLeft, signedOrderRight, takerAddress, erc20BalancesByOwner, erc721TokenIdsByOwner, expectedTransferAmounts)];
                    case 3:
                        // Match signedOrderLeft with signedOrderRight
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should transfer the correct amounts when right order is completely filled and left order is partially filled', function () { return __awaiter(_this, void 0, void 0, function () {
            var signedOrderLeft, signedOrderRight, expectedTransferAmounts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, orderFactoryLeft.newSignedOrderAsync({
                            makerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(50), 18),
                            takerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 18),
                        })];
                    case 1:
                        signedOrderLeft = _a.sent();
                        return [4 /*yield*/, orderFactoryRight.newSignedOrderAsync({
                                makerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(10), 18),
                                takerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(2), 18),
                            })];
                    case 2:
                        signedOrderRight = _a.sent();
                        expectedTransferAmounts = {
                            // Left Maker
                            amountSoldByLeftMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(5), 18),
                            amountBoughtByLeftMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(10), 18),
                            feePaidByLeftMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(10), 16),
                            // Right Maker
                            amountSoldByRightMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(10), 18),
                            amountBoughtByRightMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(2), 18),
                            feePaidByRightMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 16),
                            // Taker
                            amountReceivedByTaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(3), 18),
                            feePaidByTakerLeft: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(10), 16),
                            feePaidByTakerRight: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 16),
                        };
                        // Match signedOrderLeft with signedOrderRight
                        return [4 /*yield*/, matchOrderTester.matchOrdersAndAssertEffectsAsync(signedOrderLeft, signedOrderRight, takerAddress, erc20BalancesByOwner, erc721TokenIdsByOwner, expectedTransferAmounts)];
                    case 3:
                        // Match signedOrderLeft with signedOrderRight
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should transfer the correct amounts when consecutive calls are used to completely fill the left order', function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, signedOrderLeft, signedOrderRight, newERC20BalancesByOwner, newERC721TokenIdsByOwner, expectedTransferAmounts, signedOrderRight2, leftTakerAssetFilledAmount, rightTakerAssetFilledAmount, expectedTransferAmounts2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, orderFactoryLeft.newSignedOrderAsync({
                            makerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(50), 18),
                            takerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 18),
                        })];
                    case 1:
                        signedOrderLeft = _b.sent();
                        return [4 /*yield*/, orderFactoryRight.newSignedOrderAsync({
                                makerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(10), 18),
                                takerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(2), 18),
                            })];
                    case 2:
                        signedOrderRight = _b.sent();
                        expectedTransferAmounts = {
                            // Left Maker
                            amountSoldByLeftMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(5), 18),
                            amountBoughtByLeftMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(10), 18),
                            feePaidByLeftMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(10), 16),
                            // Right Maker
                            amountSoldByRightMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(10), 18),
                            amountBoughtByRightMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(2), 18),
                            feePaidByRightMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 16),
                            // Taker
                            amountReceivedByTaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(3), 18),
                            feePaidByTakerLeft: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(10), 16),
                            feePaidByTakerRight: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 16),
                        };
                        return [4 /*yield*/, matchOrderTester.matchOrdersAndAssertEffectsAsync(signedOrderLeft, signedOrderRight, takerAddress, erc20BalancesByOwner, erc721TokenIdsByOwner, expectedTransferAmounts)];
                    case 3:
                        // prettier-ignore
                        _a = __read.apply(void 0, [_b.sent(), 2]), newERC20BalancesByOwner = _a[0], 
                        // tslint:disable-next-line:trailing-comma
                        newERC721TokenIdsByOwner = _a[1];
                        return [4 /*yield*/, orderFactoryRight.newSignedOrderAsync({
                                makerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 18),
                                takerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(50), 18),
                            })];
                    case 4:
                        signedOrderRight2 = _b.sent();
                        leftTakerAssetFilledAmount = signedOrderRight.makerAssetAmount;
                        rightTakerAssetFilledAmount = new utils_1.BigNumber(0);
                        expectedTransferAmounts2 = {
                            // Left Maker
                            amountSoldByLeftMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(45), 18),
                            amountBoughtByLeftMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(90), 18),
                            feePaidByLeftMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(90), 16),
                            // Right Maker
                            amountSoldByRightMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(90), 18),
                            amountBoughtByRightMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(45), 18),
                            feePaidByRightMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(90), 16),
                            // Taker
                            amountReceivedByTaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(0), 18),
                            feePaidByTakerLeft: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(90), 16),
                            feePaidByTakerRight: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(90), 16),
                        };
                        return [4 /*yield*/, matchOrderTester.matchOrdersAndAssertEffectsAsync(signedOrderLeft, signedOrderRight2, takerAddress, newERC20BalancesByOwner, newERC721TokenIdsByOwner, expectedTransferAmounts2, leftTakerAssetFilledAmount, rightTakerAssetFilledAmount)];
                    case 5:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should transfer the correct amounts when consecutive calls are used to completely fill the right order', function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, signedOrderLeft, signedOrderRight, newERC20BalancesByOwner, newERC721TokenIdsByOwner, expectedTransferAmounts, signedOrderLeft2, leftTakerAssetFilledAmount, takerAmountReceived, rightTakerAssetFilledAmount, expectedTransferAmounts2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, orderFactoryLeft.newSignedOrderAsync({
                            makerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(10), 18),
                            takerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(2), 18),
                        })];
                    case 1:
                        signedOrderLeft = _b.sent();
                        return [4 /*yield*/, orderFactoryRight.newSignedOrderAsync({
                                makerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(50), 18),
                                takerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 18),
                            })];
                    case 2:
                        signedOrderRight = _b.sent();
                        expectedTransferAmounts = {
                            // Left Maker
                            amountSoldByLeftMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(10), 18),
                            amountBoughtByLeftMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(2), 18),
                            feePaidByLeftMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 16),
                            // Right Maker
                            amountSoldByRightMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(2), 18),
                            amountBoughtByRightMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(4), 18),
                            feePaidByRightMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(4), 16),
                            // Taker
                            amountReceivedByTaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(6), 18),
                            feePaidByTakerLeft: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 16),
                            feePaidByTakerRight: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(4), 16),
                        };
                        return [4 /*yield*/, matchOrderTester.matchOrdersAndAssertEffectsAsync(signedOrderLeft, signedOrderRight, takerAddress, erc20BalancesByOwner, erc721TokenIdsByOwner, expectedTransferAmounts)];
                    case 3:
                        // prettier-ignore
                        _a = __read.apply(void 0, [_b.sent(), 2]), newERC20BalancesByOwner = _a[0], 
                        // tslint:disable-next-line:trailing-comma
                        newERC721TokenIdsByOwner = _a[1];
                        return [4 /*yield*/, orderFactoryLeft.newSignedOrderAsync({
                                makerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 18),
                                takerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(50), 18),
                            })];
                    case 4:
                        signedOrderLeft2 = _b.sent();
                        leftTakerAssetFilledAmount = new utils_1.BigNumber(0);
                        takerAmountReceived = newERC20BalancesByOwner[takerAddress][defaultERC20MakerAssetAddress].minus(erc20BalancesByOwner[takerAddress][defaultERC20MakerAssetAddress]);
                        rightTakerAssetFilledAmount = signedOrderLeft.makerAssetAmount.minus(takerAmountReceived);
                        expectedTransferAmounts2 = {
                            // Left Maker
                            amountSoldByLeftMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(96), 18),
                            amountBoughtByLeftMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(48), 18),
                            feePaidByLeftMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(96), 16),
                            // Right Maker
                            amountSoldByRightMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(48), 18),
                            amountBoughtByRightMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(96), 18),
                            feePaidByRightMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(96), 16),
                            // Taker
                            amountReceivedByTaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(0), 18),
                            feePaidByTakerLeft: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(96), 16),
                            feePaidByTakerRight: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(96), 16),
                        };
                        return [4 /*yield*/, matchOrderTester.matchOrdersAndAssertEffectsAsync(signedOrderLeft2, signedOrderRight, takerAddress, newERC20BalancesByOwner, newERC721TokenIdsByOwner, expectedTransferAmounts2, leftTakerAssetFilledAmount, rightTakerAssetFilledAmount)];
                    case 5:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should transfer the correct amounts if fee recipient is the same across both matched orders', function () { return __awaiter(_this, void 0, void 0, function () {
            var feeRecipientAddress, signedOrderLeft, signedOrderRight, expectedTransferAmounts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        feeRecipientAddress = feeRecipientAddressLeft;
                        return [4 /*yield*/, orderFactoryLeft.newSignedOrderAsync({
                                makerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(5), 18),
                                takerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(10), 18),
                                feeRecipientAddress: feeRecipientAddress,
                            })];
                    case 1:
                        signedOrderLeft = _a.sent();
                        return [4 /*yield*/, orderFactoryRight.newSignedOrderAsync({
                                makerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(10), 18),
                                takerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(2), 18),
                                feeRecipientAddress: feeRecipientAddress,
                            })];
                    case 2:
                        signedOrderRight = _a.sent();
                        expectedTransferAmounts = {
                            // Left Maker
                            amountSoldByLeftMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(5), 18),
                            amountBoughtByLeftMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(10), 18),
                            feePaidByLeftMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 16),
                            // Right Maker
                            amountSoldByRightMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(10), 18),
                            amountBoughtByRightMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(2), 18),
                            feePaidByRightMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 16),
                            // Taker
                            amountReceivedByTaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(3), 18),
                            feePaidByTakerLeft: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 16),
                            feePaidByTakerRight: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 16),
                        };
                        return [4 /*yield*/, matchOrderTester.matchOrdersAndAssertEffectsAsync(signedOrderLeft, signedOrderRight, takerAddress, erc20BalancesByOwner, erc721TokenIdsByOwner, expectedTransferAmounts)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should transfer the correct amounts if taker is also the left order maker', function () { return __awaiter(_this, void 0, void 0, function () {
            var signedOrderLeft, signedOrderRight, expectedTransferAmounts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, orderFactoryLeft.newSignedOrderAsync({
                            makerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(5), 18),
                            takerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(10), 18),
                        })];
                    case 1:
                        signedOrderLeft = _a.sent();
                        return [4 /*yield*/, orderFactoryRight.newSignedOrderAsync({
                                makerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(10), 18),
                                takerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(2), 18),
                            })];
                    case 2:
                        signedOrderRight = _a.sent();
                        // Match orders
                        takerAddress = signedOrderLeft.makerAddress;
                        expectedTransferAmounts = {
                            // Left Maker
                            amountSoldByLeftMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(5), 18),
                            amountBoughtByLeftMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(10), 18),
                            feePaidByLeftMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 16),
                            // Right Maker
                            amountSoldByRightMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(10), 18),
                            amountBoughtByRightMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(2), 18),
                            feePaidByRightMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 16),
                            // Taker
                            amountReceivedByTaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(3), 18),
                            feePaidByTakerLeft: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 16),
                            feePaidByTakerRight: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 16),
                        };
                        return [4 /*yield*/, matchOrderTester.matchOrdersAndAssertEffectsAsync(signedOrderLeft, signedOrderRight, takerAddress, erc20BalancesByOwner, erc721TokenIdsByOwner, expectedTransferAmounts)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should transfer the correct amounts if taker is also the right order maker', function () { return __awaiter(_this, void 0, void 0, function () {
            var signedOrderLeft, signedOrderRight, expectedTransferAmounts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, orderFactoryLeft.newSignedOrderAsync({
                            makerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(5), 18),
                            takerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(10), 18),
                        })];
                    case 1:
                        signedOrderLeft = _a.sent();
                        return [4 /*yield*/, orderFactoryRight.newSignedOrderAsync({
                                makerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(10), 18),
                                takerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(2), 18),
                            })];
                    case 2:
                        signedOrderRight = _a.sent();
                        // Match orders
                        takerAddress = signedOrderRight.makerAddress;
                        expectedTransferAmounts = {
                            // Left Maker
                            amountSoldByLeftMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(5), 18),
                            amountBoughtByLeftMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(10), 18),
                            feePaidByLeftMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 16),
                            // Right Maker
                            amountSoldByRightMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(10), 18),
                            amountBoughtByRightMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(2), 18),
                            feePaidByRightMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 16),
                            // Taker
                            amountReceivedByTaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(3), 18),
                            feePaidByTakerLeft: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 16),
                            feePaidByTakerRight: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 16),
                        };
                        return [4 /*yield*/, matchOrderTester.matchOrdersAndAssertEffectsAsync(signedOrderLeft, signedOrderRight, takerAddress, erc20BalancesByOwner, erc721TokenIdsByOwner, expectedTransferAmounts)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should transfer the correct amounts if taker is also the left fee recipient', function () { return __awaiter(_this, void 0, void 0, function () {
            var signedOrderLeft, signedOrderRight, expectedTransferAmounts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, orderFactoryLeft.newSignedOrderAsync({
                            makerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(5), 18),
                            takerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(10), 18),
                        })];
                    case 1:
                        signedOrderLeft = _a.sent();
                        return [4 /*yield*/, orderFactoryRight.newSignedOrderAsync({
                                makerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(10), 18),
                                takerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(2), 18),
                            })];
                    case 2:
                        signedOrderRight = _a.sent();
                        // Match orders
                        takerAddress = feeRecipientAddressLeft;
                        expectedTransferAmounts = {
                            // Left Maker
                            amountSoldByLeftMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(5), 18),
                            amountBoughtByLeftMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(10), 18),
                            feePaidByLeftMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 16),
                            // Right Maker
                            amountSoldByRightMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(10), 18),
                            amountBoughtByRightMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(2), 18),
                            feePaidByRightMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 16),
                            // Taker
                            amountReceivedByTaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(3), 18),
                            feePaidByTakerLeft: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 16),
                            feePaidByTakerRight: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 16),
                        };
                        return [4 /*yield*/, matchOrderTester.matchOrdersAndAssertEffectsAsync(signedOrderLeft, signedOrderRight, takerAddress, erc20BalancesByOwner, erc721TokenIdsByOwner, expectedTransferAmounts)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should transfer the correct amounts if taker is also the right fee recipient', function () { return __awaiter(_this, void 0, void 0, function () {
            var signedOrderLeft, signedOrderRight, expectedTransferAmounts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, orderFactoryLeft.newSignedOrderAsync({
                            makerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(5), 18),
                            takerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(10), 18),
                        })];
                    case 1:
                        signedOrderLeft = _a.sent();
                        return [4 /*yield*/, orderFactoryRight.newSignedOrderAsync({
                                makerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(10), 18),
                                takerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(2), 18),
                            })];
                    case 2:
                        signedOrderRight = _a.sent();
                        // Match orders
                        takerAddress = feeRecipientAddressRight;
                        expectedTransferAmounts = {
                            // Left Maker
                            amountSoldByLeftMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(5), 18),
                            amountBoughtByLeftMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(10), 18),
                            feePaidByLeftMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 16),
                            // Right Maker
                            amountSoldByRightMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(10), 18),
                            amountBoughtByRightMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(2), 18),
                            feePaidByRightMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 16),
                            // Taker
                            amountReceivedByTaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(3), 18),
                            feePaidByTakerLeft: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 16),
                            feePaidByTakerRight: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 16),
                        };
                        return [4 /*yield*/, matchOrderTester.matchOrdersAndAssertEffectsAsync(signedOrderLeft, signedOrderRight, takerAddress, erc20BalancesByOwner, erc721TokenIdsByOwner, expectedTransferAmounts)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should transfer the correct amounts if left maker is the left fee recipient and right maker is the right fee recipient', function () { return __awaiter(_this, void 0, void 0, function () {
            var signedOrderLeft, signedOrderRight, expectedTransferAmounts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, orderFactoryLeft.newSignedOrderAsync({
                            makerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(5), 18),
                            takerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(10), 18),
                        })];
                    case 1:
                        signedOrderLeft = _a.sent();
                        return [4 /*yield*/, orderFactoryRight.newSignedOrderAsync({
                                makerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(10), 18),
                                takerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(2), 18),
                            })];
                    case 2:
                        signedOrderRight = _a.sent();
                        expectedTransferAmounts = {
                            // Left Maker
                            amountSoldByLeftMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(5), 18),
                            amountBoughtByLeftMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(10), 18),
                            feePaidByLeftMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 16),
                            // Right Maker
                            amountSoldByRightMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(10), 18),
                            amountBoughtByRightMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(2), 18),
                            feePaidByRightMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 16),
                            // Taker
                            amountReceivedByTaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(3), 18),
                            feePaidByTakerLeft: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 16),
                            feePaidByTakerRight: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 16),
                        };
                        return [4 /*yield*/, matchOrderTester.matchOrdersAndAssertEffectsAsync(signedOrderLeft, signedOrderRight, takerAddress, erc20BalancesByOwner, erc721TokenIdsByOwner, expectedTransferAmounts)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('Should throw if left order is not fillable', function () { return __awaiter(_this, void 0, void 0, function () {
            var signedOrderLeft, signedOrderRight;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, orderFactoryLeft.newSignedOrderAsync({
                            makerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(5), 18),
                            takerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(10), 18),
                        })];
                    case 1:
                        signedOrderLeft = _a.sent();
                        return [4 /*yield*/, orderFactoryRight.newSignedOrderAsync({
                                makerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(10), 18),
                                takerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(2), 18),
                            })];
                    case 2:
                        signedOrderRight = _a.sent();
                        // Cancel left order
                        return [4 /*yield*/, exchangeWrapper.cancelOrderAsync(signedOrderLeft, signedOrderLeft.makerAddress)];
                    case 3:
                        // Cancel left order
                        _a.sent();
                        // Match orders
                        return [2 /*return*/, contracts_test_utils_1.expectTransactionFailedAsync(exchangeWrapper.matchOrdersAsync(signedOrderLeft, signedOrderRight, takerAddress), types_1.RevertReason.OrderUnfillable)];
                }
            });
        }); });
        it('Should throw if right order is not fillable', function () { return __awaiter(_this, void 0, void 0, function () {
            var signedOrderLeft, signedOrderRight;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, orderFactoryLeft.newSignedOrderAsync({
                            makerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(5), 18),
                            takerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(10), 18),
                        })];
                    case 1:
                        signedOrderLeft = _a.sent();
                        return [4 /*yield*/, orderFactoryRight.newSignedOrderAsync({
                                makerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(10), 18),
                                takerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(2), 18),
                            })];
                    case 2:
                        signedOrderRight = _a.sent();
                        // Cancel right order
                        return [4 /*yield*/, exchangeWrapper.cancelOrderAsync(signedOrderRight, signedOrderRight.makerAddress)];
                    case 3:
                        // Cancel right order
                        _a.sent();
                        // Match orders
                        return [2 /*return*/, contracts_test_utils_1.expectTransactionFailedAsync(exchangeWrapper.matchOrdersAsync(signedOrderLeft, signedOrderRight, takerAddress), types_1.RevertReason.OrderUnfillable)];
                }
            });
        }); });
        it('should throw if there is not a positive spread', function () { return __awaiter(_this, void 0, void 0, function () {
            var signedOrderLeft, signedOrderRight;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, orderFactoryLeft.newSignedOrderAsync({
                            makerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(5), 18),
                            takerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 18),
                        })];
                    case 1:
                        signedOrderLeft = _a.sent();
                        return [4 /*yield*/, orderFactoryRight.newSignedOrderAsync({
                                makerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(1), 18),
                                takerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(200), 18),
                            })];
                    case 2:
                        signedOrderRight = _a.sent();
                        // Match orders
                        return [2 /*return*/, contracts_test_utils_1.expectTransactionFailedAsync(exchangeWrapper.matchOrdersAsync(signedOrderLeft, signedOrderRight, takerAddress), types_1.RevertReason.NegativeSpreadRequired)];
                }
            });
        }); });
        it('should throw if the left maker asset is not equal to the right taker asset ', function () { return __awaiter(_this, void 0, void 0, function () {
            var signedOrderLeft, signedOrderRight;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, orderFactoryLeft.newSignedOrderAsync({
                            makerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(5), 18),
                            takerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(10), 18),
                        })];
                    case 1:
                        signedOrderLeft = _a.sent();
                        return [4 /*yield*/, orderFactoryRight.newSignedOrderAsync({
                                takerAssetData: order_utils_1.assetDataUtils.encodeERC20AssetData(defaultERC20TakerAssetAddress),
                                makerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(10), 18),
                                takerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(2), 18),
                            })];
                    case 2:
                        signedOrderRight = _a.sent();
                        // Match orders
                        return [2 /*return*/, contracts_test_utils_1.expectTransactionFailedAsync(exchangeWrapper.matchOrdersAsync(signedOrderLeft, signedOrderRight, takerAddress), 
                            // We are assuming assetData fields of the right order are the
                            // reverse of the left order, rather than checking equality. This
                            // saves a bunch of gas, but as a result if the assetData fields are
                            // off then the failure ends up happening at signature validation
                            types_1.RevertReason.InvalidOrderSignature)];
                }
            });
        }); });
        it('should throw if the right maker asset is not equal to the left taker asset', function () { return __awaiter(_this, void 0, void 0, function () {
            var signedOrderLeft, signedOrderRight;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, orderFactoryLeft.newSignedOrderAsync({
                            takerAssetData: order_utils_1.assetDataUtils.encodeERC20AssetData(defaultERC20MakerAssetAddress),
                            makerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(5), 18),
                            takerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(10), 18),
                        })];
                    case 1:
                        signedOrderLeft = _a.sent();
                        return [4 /*yield*/, orderFactoryRight.newSignedOrderAsync({
                                makerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(10), 18),
                                takerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(2), 18),
                            })];
                    case 2:
                        signedOrderRight = _a.sent();
                        // Match orders
                        return [2 /*return*/, contracts_test_utils_1.expectTransactionFailedAsync(exchangeWrapper.matchOrdersAsync(signedOrderLeft, signedOrderRight, takerAddress), types_1.RevertReason.InvalidOrderSignature)];
                }
            });
        }); });
        it('should transfer correct amounts when left order maker asset is an ERC721 token', function () { return __awaiter(_this, void 0, void 0, function () {
            var erc721TokenToTransfer, signedOrderLeft, signedOrderRight, expectedTransferAmounts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        erc721TokenToTransfer = erc721LeftMakerAssetIds[0];
                        return [4 /*yield*/, orderFactoryLeft.newSignedOrderAsync({
                                makerAssetData: order_utils_1.assetDataUtils.encodeERC721AssetData(defaultERC721AssetAddress, erc721TokenToTransfer),
                                makerAssetAmount: new utils_1.BigNumber(1),
                                takerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(10), 18),
                            })];
                    case 1:
                        signedOrderLeft = _a.sent();
                        return [4 /*yield*/, orderFactoryRight.newSignedOrderAsync({
                                takerAssetData: order_utils_1.assetDataUtils.encodeERC721AssetData(defaultERC721AssetAddress, erc721TokenToTransfer),
                                makerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(10), 18),
                                takerAssetAmount: new utils_1.BigNumber(1),
                            })];
                    case 2:
                        signedOrderRight = _a.sent();
                        expectedTransferAmounts = {
                            // Left Maker
                            amountSoldByLeftMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(1), 0),
                            amountBoughtByLeftMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(10), 18),
                            feePaidByLeftMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 16),
                            // Right Maker
                            amountSoldByRightMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(10), 18),
                            amountBoughtByRightMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(1), 0),
                            feePaidByRightMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 16),
                            // Taker
                            amountReceivedByTaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(0), 18),
                            feePaidByTakerLeft: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 16),
                            feePaidByTakerRight: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 16),
                        };
                        return [4 /*yield*/, matchOrderTester.matchOrdersAndAssertEffectsAsync(signedOrderLeft, signedOrderRight, takerAddress, erc20BalancesByOwner, erc721TokenIdsByOwner, expectedTransferAmounts)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should transfer correct amounts when right order maker asset is an ERC721 token', function () { return __awaiter(_this, void 0, void 0, function () {
            var erc721TokenToTransfer, signedOrderLeft, signedOrderRight, expectedTransferAmounts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        erc721TokenToTransfer = erc721RightMakerAssetIds[0];
                        return [4 /*yield*/, orderFactoryLeft.newSignedOrderAsync({
                                takerAssetData: order_utils_1.assetDataUtils.encodeERC721AssetData(defaultERC721AssetAddress, erc721TokenToTransfer),
                                makerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(10), 18),
                                takerAssetAmount: new utils_1.BigNumber(1),
                            })];
                    case 1:
                        signedOrderLeft = _a.sent();
                        return [4 /*yield*/, orderFactoryRight.newSignedOrderAsync({
                                makerAssetData: order_utils_1.assetDataUtils.encodeERC721AssetData(defaultERC721AssetAddress, erc721TokenToTransfer),
                                makerAssetAmount: new utils_1.BigNumber(1),
                                takerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(8), 18),
                            })];
                    case 2:
                        signedOrderRight = _a.sent();
                        expectedTransferAmounts = {
                            // Left Maker
                            amountSoldByLeftMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(10), 18),
                            amountBoughtByLeftMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(1), 0),
                            feePaidByLeftMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 16),
                            // Right Maker
                            amountSoldByRightMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(1), 0),
                            amountBoughtByRightMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(8), 18),
                            feePaidByRightMaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 16),
                            // Taker
                            amountReceivedByTaker: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(2), 18),
                            feePaidByTakerLeft: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 16),
                            feePaidByTakerRight: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 16),
                        };
                        return [4 /*yield*/, matchOrderTester.matchOrdersAndAssertEffectsAsync(signedOrderLeft, signedOrderRight, takerAddress, erc20BalancesByOwner, erc721TokenIdsByOwner, expectedTransferAmounts)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    });
}); // tslint:disable-line:max-file-line-count
//# sourceMappingURL=match_orders.js.map