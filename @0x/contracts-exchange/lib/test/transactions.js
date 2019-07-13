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
var chai = require("chai");
var _ = require("lodash");
var src_1 = require("../src/");
contracts_test_utils_1.chaiSetup.configure();
var expect = chai.expect;
var blockchainLifecycle = new dev_utils_1.BlockchainLifecycle(contracts_test_utils_1.web3Wrapper);
describe('Exchange transactions', function () {
    var senderAddress;
    var owner;
    var makerAddress;
    var takerAddress;
    var feeRecipientAddress;
    var erc20TokenA;
    var erc20TokenB;
    var zrxToken;
    var exchange;
    var erc20Proxy;
    var erc20Balances;
    var signedOrder;
    var signedTx;
    var orderWithoutExchangeAddress;
    var orderFactory;
    var makerTransactionFactory;
    var takerTransactionFactory;
    var exchangeWrapper;
    var erc20Wrapper;
    var defaultMakerTokenAddress;
    var defaultTakerTokenAddress;
    var makerPrivateKey;
    var takerPrivateKey;
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
    before(function () { return __awaiter(_this, void 0, void 0, function () {
        var _a, _b, _c, accounts, usedAddresses, numDummyErc20ToDeploy, _d, _e, defaultOrderParams;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0: return [4 /*yield*/, contracts_test_utils_1.web3Wrapper.getAvailableAddressesAsync()];
                case 1:
                    accounts = _f.sent();
                    usedAddresses = (_a = _.slice(accounts, 0, 5), _b = __read(_a, 5), owner = _b[0], senderAddress = _b[1], makerAddress = _b[2], takerAddress = _b[3], feeRecipientAddress = _b[4], _a);
                    erc20Wrapper = new contracts_asset_proxy_1.ERC20Wrapper(contracts_test_utils_1.provider, usedAddresses, owner);
                    numDummyErc20ToDeploy = 3;
                    return [4 /*yield*/, erc20Wrapper.deployDummyTokensAsync(numDummyErc20ToDeploy, contracts_test_utils_1.constants.DUMMY_TOKEN_DECIMALS)];
                case 2:
                    _c = __read.apply(void 0, [_f.sent(), 3]), erc20TokenA = _c[0], erc20TokenB = _c[1], zrxToken = _c[2];
                    return [4 /*yield*/, erc20Wrapper.deployProxyAsync()];
                case 3:
                    erc20Proxy = _f.sent();
                    return [4 /*yield*/, erc20Wrapper.setBalancesAndAllowancesAsync()];
                case 4:
                    _f.sent();
                    return [4 /*yield*/, src_1.ExchangeContract.deployFrom0xArtifactAsync(src_1.artifacts.Exchange, contracts_test_utils_1.provider, contracts_test_utils_1.txDefaults, order_utils_1.assetDataUtils.encodeERC20AssetData(zrxToken.address))];
                case 5:
                    exchange = _f.sent();
                    exchangeWrapper = new src_1.ExchangeWrapper(exchange, contracts_test_utils_1.provider);
                    return [4 /*yield*/, exchangeWrapper.registerAssetProxyAsync(erc20Proxy.address, owner)];
                case 6:
                    _f.sent();
                    _e = (_d = contracts_test_utils_1.web3Wrapper).awaitTransactionSuccessAsync;
                    return [4 /*yield*/, erc20Proxy.addAuthorizedAddress.sendTransactionAsync(exchange.address, { from: owner })];
                case 7: return [4 /*yield*/, _e.apply(_d, [_f.sent(),
                        contracts_test_utils_1.constants.AWAIT_TRANSACTION_MINED_MS])];
                case 8:
                    _f.sent();
                    defaultMakerTokenAddress = erc20TokenA.address;
                    defaultTakerTokenAddress = erc20TokenB.address;
                    defaultOrderParams = __assign({}, contracts_test_utils_1.constants.STATIC_ORDER_PARAMS, { senderAddress: senderAddress, exchangeAddress: exchange.address, makerAddress: makerAddress,
                        feeRecipientAddress: feeRecipientAddress, makerAssetData: order_utils_1.assetDataUtils.encodeERC20AssetData(defaultMakerTokenAddress), takerAssetData: order_utils_1.assetDataUtils.encodeERC20AssetData(defaultTakerTokenAddress) });
                    makerPrivateKey = contracts_test_utils_1.constants.TESTRPC_PRIVATE_KEYS[accounts.indexOf(makerAddress)];
                    takerPrivateKey = contracts_test_utils_1.constants.TESTRPC_PRIVATE_KEYS[accounts.indexOf(takerAddress)];
                    orderFactory = new contracts_test_utils_1.OrderFactory(makerPrivateKey, defaultOrderParams);
                    makerTransactionFactory = new contracts_test_utils_1.TransactionFactory(makerPrivateKey, exchange.address);
                    takerTransactionFactory = new contracts_test_utils_1.TransactionFactory(takerPrivateKey, exchange.address);
                    return [2 /*return*/];
            }
        });
    }); });
    describe('executeTransaction', function () {
        describe('fillOrder', function () {
            var takerAssetFillAmount;
            beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
                var data;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, erc20Wrapper.getBalancesAsync()];
                        case 1:
                            erc20Balances = _a.sent();
                            return [4 /*yield*/, orderFactory.newSignedOrderAsync()];
                        case 2:
                            signedOrder = _a.sent();
                            orderWithoutExchangeAddress = contracts_test_utils_1.orderUtils.getOrderWithoutExchangeAddress(signedOrder);
                            takerAssetFillAmount = signedOrder.takerAssetAmount.div(2);
                            data = exchange.fillOrder.getABIEncodedTransactionData(orderWithoutExchangeAddress, takerAssetFillAmount, signedOrder.signature);
                            signedTx = takerTransactionFactory.newSignedTransaction(data);
                            return [2 /*return*/];
                    }
                });
            }); });
            it('should throw if not called by specified sender', function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, contracts_test_utils_1.expectTransactionFailedAsync(exchangeWrapper.executeTransactionAsync(signedTx, takerAddress), types_1.RevertReason.FailedExecution)];
                });
            }); });
            it('should transfer the correct amounts when signed by taker and called by sender', function () { return __awaiter(_this, void 0, void 0, function () {
                var newBalances, makerAssetFillAmount, makerFeePaid, takerFeePaid;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, exchangeWrapper.executeTransactionAsync(signedTx, senderAddress)];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, erc20Wrapper.getBalancesAsync()];
                        case 2:
                            newBalances = _a.sent();
                            makerAssetFillAmount = takerAssetFillAmount
                                .times(signedOrder.makerAssetAmount)
                                .dividedToIntegerBy(signedOrder.takerAssetAmount);
                            makerFeePaid = signedOrder.makerFee
                                .times(makerAssetFillAmount)
                                .dividedToIntegerBy(signedOrder.makerAssetAmount);
                            takerFeePaid = signedOrder.takerFee
                                .times(makerAssetFillAmount)
                                .dividedToIntegerBy(signedOrder.makerAssetAmount);
                            expect(newBalances[makerAddress][defaultMakerTokenAddress]).to.be.bignumber.equal(erc20Balances[makerAddress][defaultMakerTokenAddress].minus(makerAssetFillAmount));
                            expect(newBalances[makerAddress][defaultTakerTokenAddress]).to.be.bignumber.equal(erc20Balances[makerAddress][defaultTakerTokenAddress].plus(takerAssetFillAmount));
                            expect(newBalances[makerAddress][zrxToken.address]).to.be.bignumber.equal(erc20Balances[makerAddress][zrxToken.address].minus(makerFeePaid));
                            expect(newBalances[takerAddress][defaultTakerTokenAddress]).to.be.bignumber.equal(erc20Balances[takerAddress][defaultTakerTokenAddress].minus(takerAssetFillAmount));
                            expect(newBalances[takerAddress][defaultMakerTokenAddress]).to.be.bignumber.equal(erc20Balances[takerAddress][defaultMakerTokenAddress].plus(makerAssetFillAmount));
                            expect(newBalances[takerAddress][zrxToken.address]).to.be.bignumber.equal(erc20Balances[takerAddress][zrxToken.address].minus(takerFeePaid));
                            expect(newBalances[feeRecipientAddress][zrxToken.address]).to.be.bignumber.equal(erc20Balances[feeRecipientAddress][zrxToken.address].plus(makerFeePaid.plus(takerFeePaid)));
                            return [2 /*return*/];
                    }
                });
            }); });
            it('should throw if the a 0x transaction with the same transactionHash has already been executed', function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, exchangeWrapper.executeTransactionAsync(signedTx, senderAddress)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, contracts_test_utils_1.expectTransactionFailedAsync(exchangeWrapper.executeTransactionAsync(signedTx, senderAddress), types_1.RevertReason.InvalidTxHash)];
                    }
                });
            }); });
            it('should reset the currentContextAddress', function () { return __awaiter(_this, void 0, void 0, function () {
                var currentContextAddress;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, exchangeWrapper.executeTransactionAsync(signedTx, senderAddress)];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, exchange.currentContextAddress.callAsync()];
                        case 2:
                            currentContextAddress = _a.sent();
                            expect(currentContextAddress).to.equal(contracts_test_utils_1.constants.NULL_ADDRESS);
                            return [2 /*return*/];
                    }
                });
            }); });
        });
        describe('cancelOrder', function () {
            beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
                var data;
                return __generator(this, function (_a) {
                    data = exchange.cancelOrder.getABIEncodedTransactionData(orderWithoutExchangeAddress);
                    signedTx = makerTransactionFactory.newSignedTransaction(data);
                    return [2 /*return*/];
                });
            }); });
            it('should throw if not called by specified sender', function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, contracts_test_utils_1.expectTransactionFailedAsync(exchangeWrapper.executeTransactionAsync(signedTx, makerAddress), types_1.RevertReason.FailedExecution)];
                });
            }); });
            it('should cancel the order when signed by maker and called by sender', function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, exchangeWrapper.executeTransactionAsync(signedTx, senderAddress)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, contracts_test_utils_1.expectTransactionFailedAsync(exchangeWrapper.fillOrderAsync(signedOrder, senderAddress), types_1.RevertReason.OrderUnfillable)];
                    }
                });
            }); });
        });
        describe('cancelOrdersUpTo', function () {
            var exchangeWrapperContract;
            before(function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, src_1.ExchangeWrapperContract.deployFrom0xArtifactAsync(src_1.artifacts.ExchangeWrapper, contracts_test_utils_1.provider, contracts_test_utils_1.txDefaults, exchange.address)];
                        case 1:
                            exchangeWrapperContract = _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
            it("should cancel an order if called from the order's sender", function () { return __awaiter(_this, void 0, void 0, function () {
                var orderSalt, targetOrderEpoch, cancelData, signedCancelTx, takerAssetFillAmount, fillData, signedFillTx;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            orderSalt = new utils_1.BigNumber(0);
                            return [4 /*yield*/, orderFactory.newSignedOrderAsync({
                                    senderAddress: exchangeWrapperContract.address,
                                    salt: orderSalt,
                                })];
                        case 1:
                            signedOrder = _a.sent();
                            targetOrderEpoch = orderSalt.plus(1);
                            cancelData = exchange.cancelOrdersUpTo.getABIEncodedTransactionData(targetOrderEpoch);
                            signedCancelTx = makerTransactionFactory.newSignedTransaction(cancelData);
                            return [4 /*yield*/, exchangeWrapperContract.cancelOrdersUpTo.sendTransactionAsync(targetOrderEpoch, signedCancelTx.salt, signedCancelTx.signature, {
                                    from: makerAddress,
                                })];
                        case 2:
                            _a.sent();
                            takerAssetFillAmount = signedOrder.takerAssetAmount;
                            orderWithoutExchangeAddress = contracts_test_utils_1.orderUtils.getOrderWithoutExchangeAddress(signedOrder);
                            fillData = exchange.fillOrder.getABIEncodedTransactionData(orderWithoutExchangeAddress, takerAssetFillAmount, signedOrder.signature);
                            signedFillTx = takerTransactionFactory.newSignedTransaction(fillData);
                            return [2 /*return*/, contracts_test_utils_1.expectTransactionFailedAsync(exchangeWrapperContract.fillOrder.sendTransactionAsync(orderWithoutExchangeAddress, takerAssetFillAmount, signedFillTx.salt, signedOrder.signature, signedFillTx.signature, { from: takerAddress }), types_1.RevertReason.FailedExecution)];
                    }
                });
            }); });
            it("should not cancel an order if not called from the order's sender", function () { return __awaiter(_this, void 0, void 0, function () {
                var orderSalt, targetOrderEpoch, takerAssetFillAmount, data, newBalances, makerAssetFillAmount, makerFeePaid, takerFeePaid;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            orderSalt = new utils_1.BigNumber(0);
                            return [4 /*yield*/, orderFactory.newSignedOrderAsync({
                                    senderAddress: exchangeWrapperContract.address,
                                    salt: orderSalt,
                                })];
                        case 1:
                            signedOrder = _a.sent();
                            targetOrderEpoch = orderSalt.plus(1);
                            return [4 /*yield*/, exchangeWrapper.cancelOrdersUpToAsync(targetOrderEpoch, makerAddress)];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, erc20Wrapper.getBalancesAsync()];
                        case 3:
                            erc20Balances = _a.sent();
                            takerAssetFillAmount = signedOrder.takerAssetAmount;
                            orderWithoutExchangeAddress = contracts_test_utils_1.orderUtils.getOrderWithoutExchangeAddress(signedOrder);
                            data = exchange.fillOrder.getABIEncodedTransactionData(orderWithoutExchangeAddress, takerAssetFillAmount, signedOrder.signature);
                            signedTx = takerTransactionFactory.newSignedTransaction(data);
                            return [4 /*yield*/, exchangeWrapperContract.fillOrder.sendTransactionAsync(orderWithoutExchangeAddress, takerAssetFillAmount, signedTx.salt, signedOrder.signature, signedTx.signature, { from: takerAddress })];
                        case 4:
                            _a.sent();
                            return [4 /*yield*/, erc20Wrapper.getBalancesAsync()];
                        case 5:
                            newBalances = _a.sent();
                            makerAssetFillAmount = takerAssetFillAmount
                                .times(signedOrder.makerAssetAmount)
                                .dividedToIntegerBy(signedOrder.takerAssetAmount);
                            makerFeePaid = signedOrder.makerFee
                                .times(makerAssetFillAmount)
                                .dividedToIntegerBy(signedOrder.makerAssetAmount);
                            takerFeePaid = signedOrder.takerFee
                                .times(makerAssetFillAmount)
                                .dividedToIntegerBy(signedOrder.makerAssetAmount);
                            expect(newBalances[makerAddress][defaultMakerTokenAddress]).to.be.bignumber.equal(erc20Balances[makerAddress][defaultMakerTokenAddress].minus(makerAssetFillAmount));
                            expect(newBalances[makerAddress][defaultTakerTokenAddress]).to.be.bignumber.equal(erc20Balances[makerAddress][defaultTakerTokenAddress].plus(takerAssetFillAmount));
                            expect(newBalances[makerAddress][zrxToken.address]).to.be.bignumber.equal(erc20Balances[makerAddress][zrxToken.address].minus(makerFeePaid));
                            expect(newBalances[takerAddress][defaultTakerTokenAddress]).to.be.bignumber.equal(erc20Balances[takerAddress][defaultTakerTokenAddress].minus(takerAssetFillAmount));
                            expect(newBalances[takerAddress][defaultMakerTokenAddress]).to.be.bignumber.equal(erc20Balances[takerAddress][defaultMakerTokenAddress].plus(makerAssetFillAmount));
                            expect(newBalances[takerAddress][zrxToken.address]).to.be.bignumber.equal(erc20Balances[takerAddress][zrxToken.address].minus(takerFeePaid));
                            expect(newBalances[feeRecipientAddress][zrxToken.address]).to.be.bignumber.equal(erc20Balances[feeRecipientAddress][zrxToken.address].plus(makerFeePaid.plus(takerFeePaid)));
                            return [2 /*return*/];
                    }
                });
            }); });
        });
    });
    describe('Whitelist', function () {
        var whitelist;
        var whitelistOrderFactory;
        before(function () { return __awaiter(_this, void 0, void 0, function () {
            var isApproved, _a, _b, defaultOrderParams;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, src_1.WhitelistContract.deployFrom0xArtifactAsync(src_1.artifacts.Whitelist, contracts_test_utils_1.provider, contracts_test_utils_1.txDefaults, exchange.address)];
                    case 1:
                        whitelist = _c.sent();
                        isApproved = true;
                        _b = (_a = contracts_test_utils_1.web3Wrapper).awaitTransactionSuccessAsync;
                        return [4 /*yield*/, exchange.setSignatureValidatorApproval.sendTransactionAsync(whitelist.address, isApproved, {
                                from: takerAddress,
                            })];
                    case 2: return [4 /*yield*/, _b.apply(_a, [_c.sent(),
                            contracts_test_utils_1.constants.AWAIT_TRANSACTION_MINED_MS])];
                    case 3:
                        _c.sent();
                        defaultOrderParams = __assign({}, contracts_test_utils_1.constants.STATIC_ORDER_PARAMS, { senderAddress: whitelist.address, exchangeAddress: exchange.address, makerAddress: makerAddress,
                            feeRecipientAddress: feeRecipientAddress, makerAssetData: order_utils_1.assetDataUtils.encodeERC20AssetData(defaultMakerTokenAddress), takerAssetData: order_utils_1.assetDataUtils.encodeERC20AssetData(defaultTakerTokenAddress) });
                        whitelistOrderFactory = new contracts_test_utils_1.OrderFactory(makerPrivateKey, defaultOrderParams);
                        return [2 /*return*/];
                }
            });
        }); });
        beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, whitelistOrderFactory.newSignedOrderAsync()];
                    case 1:
                        signedOrder = _a.sent();
                        return [4 /*yield*/, erc20Wrapper.getBalancesAsync()];
                    case 2:
                        erc20Balances = _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should revert if maker has not been whitelisted', function () { return __awaiter(_this, void 0, void 0, function () {
            var isApproved, _a, _b, takerAssetFillAmount, salt;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        isApproved = true;
                        _b = (_a = contracts_test_utils_1.web3Wrapper).awaitTransactionSuccessAsync;
                        return [4 /*yield*/, whitelist.updateWhitelistStatus.sendTransactionAsync(takerAddress, isApproved, { from: owner })];
                    case 1: return [4 /*yield*/, _b.apply(_a, [_c.sent(),
                            contracts_test_utils_1.constants.AWAIT_TRANSACTION_MINED_MS])];
                    case 2:
                        _c.sent();
                        orderWithoutExchangeAddress = contracts_test_utils_1.orderUtils.getOrderWithoutExchangeAddress(signedOrder);
                        takerAssetFillAmount = signedOrder.takerAssetAmount;
                        salt = order_utils_1.generatePseudoRandomSalt();
                        return [2 /*return*/, contracts_test_utils_1.expectTransactionFailedAsync(whitelist.fillOrderIfWhitelisted.sendTransactionAsync(orderWithoutExchangeAddress, takerAssetFillAmount, salt, signedOrder.signature, { from: takerAddress }), types_1.RevertReason.MakerNotWhitelisted)];
                }
            });
        }); });
        it('should revert if taker has not been whitelisted', function () { return __awaiter(_this, void 0, void 0, function () {
            var isApproved, _a, _b, takerAssetFillAmount, salt;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        isApproved = true;
                        _b = (_a = contracts_test_utils_1.web3Wrapper).awaitTransactionSuccessAsync;
                        return [4 /*yield*/, whitelist.updateWhitelistStatus.sendTransactionAsync(makerAddress, isApproved, { from: owner })];
                    case 1: return [4 /*yield*/, _b.apply(_a, [_c.sent(),
                            contracts_test_utils_1.constants.AWAIT_TRANSACTION_MINED_MS])];
                    case 2:
                        _c.sent();
                        orderWithoutExchangeAddress = contracts_test_utils_1.orderUtils.getOrderWithoutExchangeAddress(signedOrder);
                        takerAssetFillAmount = signedOrder.takerAssetAmount;
                        salt = order_utils_1.generatePseudoRandomSalt();
                        return [2 /*return*/, contracts_test_utils_1.expectTransactionFailedAsync(whitelist.fillOrderIfWhitelisted.sendTransactionAsync(orderWithoutExchangeAddress, takerAssetFillAmount, salt, signedOrder.signature, { from: takerAddress }), types_1.RevertReason.TakerNotWhitelisted)];
                }
            });
        }); });
        it('should fill the order if maker and taker have been whitelisted', function () { return __awaiter(_this, void 0, void 0, function () {
            var isApproved, _a, _b, _c, _d, takerAssetFillAmount, salt, _e, _f, newBalances, makerAssetFillAmount, makerFeePaid, takerFeePaid;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        isApproved = true;
                        _b = (_a = contracts_test_utils_1.web3Wrapper).awaitTransactionSuccessAsync;
                        return [4 /*yield*/, whitelist.updateWhitelistStatus.sendTransactionAsync(makerAddress, isApproved, { from: owner })];
                    case 1: return [4 /*yield*/, _b.apply(_a, [_g.sent(),
                            contracts_test_utils_1.constants.AWAIT_TRANSACTION_MINED_MS])];
                    case 2:
                        _g.sent();
                        _d = (_c = contracts_test_utils_1.web3Wrapper).awaitTransactionSuccessAsync;
                        return [4 /*yield*/, whitelist.updateWhitelistStatus.sendTransactionAsync(takerAddress, isApproved, { from: owner })];
                    case 3: return [4 /*yield*/, _d.apply(_c, [_g.sent(),
                            contracts_test_utils_1.constants.AWAIT_TRANSACTION_MINED_MS])];
                    case 4:
                        _g.sent();
                        orderWithoutExchangeAddress = contracts_test_utils_1.orderUtils.getOrderWithoutExchangeAddress(signedOrder);
                        takerAssetFillAmount = signedOrder.takerAssetAmount;
                        salt = order_utils_1.generatePseudoRandomSalt();
                        _f = (_e = contracts_test_utils_1.web3Wrapper).awaitTransactionSuccessAsync;
                        return [4 /*yield*/, whitelist.fillOrderIfWhitelisted.sendTransactionAsync(orderWithoutExchangeAddress, takerAssetFillAmount, salt, signedOrder.signature, { from: takerAddress })];
                    case 5: return [4 /*yield*/, _f.apply(_e, [_g.sent(),
                            contracts_test_utils_1.constants.AWAIT_TRANSACTION_MINED_MS])];
                    case 6:
                        _g.sent();
                        return [4 /*yield*/, erc20Wrapper.getBalancesAsync()];
                    case 7:
                        newBalances = _g.sent();
                        makerAssetFillAmount = signedOrder.makerAssetAmount;
                        makerFeePaid = signedOrder.makerFee;
                        takerFeePaid = signedOrder.takerFee;
                        expect(newBalances[makerAddress][defaultMakerTokenAddress]).to.be.bignumber.equal(erc20Balances[makerAddress][defaultMakerTokenAddress].minus(makerAssetFillAmount));
                        expect(newBalances[makerAddress][defaultTakerTokenAddress]).to.be.bignumber.equal(erc20Balances[makerAddress][defaultTakerTokenAddress].plus(takerAssetFillAmount));
                        expect(newBalances[makerAddress][zrxToken.address]).to.be.bignumber.equal(erc20Balances[makerAddress][zrxToken.address].minus(makerFeePaid));
                        expect(newBalances[takerAddress][defaultTakerTokenAddress]).to.be.bignumber.equal(erc20Balances[takerAddress][defaultTakerTokenAddress].minus(takerAssetFillAmount));
                        expect(newBalances[takerAddress][defaultMakerTokenAddress]).to.be.bignumber.equal(erc20Balances[takerAddress][defaultMakerTokenAddress].plus(makerAssetFillAmount));
                        expect(newBalances[takerAddress][zrxToken.address]).to.be.bignumber.equal(erc20Balances[takerAddress][zrxToken.address].minus(takerFeePaid));
                        expect(newBalances[feeRecipientAddress][zrxToken.address]).to.be.bignumber.equal(erc20Balances[feeRecipientAddress][zrxToken.address].plus(makerFeePaid.plus(takerFeePaid)));
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
//# sourceMappingURL=transactions.js.map