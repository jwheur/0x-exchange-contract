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
var contracts_erc20_1 = require("@0x/contracts-erc20");
var contracts_test_utils_1 = require("@0x/contracts-test-utils");
var dev_utils_1 = require("@0x/dev-utils");
var order_utils_1 = require("@0x/order-utils");
var types_1 = require("@0x/types");
var utils_1 = require("@0x/utils");
var web3_wrapper_1 = require("@0x/web3-wrapper");
var chai = require("chai");
var ethUtil = require("ethereumjs-util");
var _ = require("lodash");
var src_1 = require("../src");
contracts_test_utils_1.chaiSetup.configure();
var expect = chai.expect;
var blockchainLifecycle = new dev_utils_1.BlockchainLifecycle(contracts_test_utils_1.web3Wrapper);
// tslint:disable:no-unnecessary-type-assertion
describe('Exchange core', function () {
    var makerAddress;
    var owner;
    var takerAddress;
    var feeRecipientAddress;
    var erc20TokenA;
    var erc20TokenB;
    var zrxToken;
    var erc721Token;
    var noReturnErc20Token;
    var reentrantErc20Token;
    var exchange;
    var erc20Proxy;
    var erc721Proxy;
    var erc1155Proxy;
    var multiAssetProxy;
    var staticCallProxy;
    var staticCallTarget;
    var maliciousWallet;
    var maliciousValidator;
    var erc1155Contract;
    var signedOrder;
    var erc20Balances;
    var exchangeWrapper;
    var erc20Wrapper;
    var erc721Wrapper;
    var erc1155Wrapper;
    var erc1155ProxyWrapper;
    var orderFactory;
    var erc721MakerAssetIds;
    var erc721TakerAssetIds;
    var erc1155FungibleTokens;
    var erc1155NonFungibleTokensOwnedByMaker;
    var erc1155NonFungibleTokensOwnedByTaker;
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
        var _a, _b, _c, _d, _e, accounts, usedAddresses, numDummyErc20ToDeploy, erc721Balances, nonFungibleTokens, tokenBalances, defaultOrderParams, privateKey;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0: return [4 /*yield*/, contracts_test_utils_1.web3Wrapper.getAvailableAddressesAsync()];
                case 1:
                    accounts = _f.sent();
                    usedAddresses = (_a = _.slice(accounts, 0, 4), _b = __read(_a, 4), owner = _b[0], makerAddress = _b[1], takerAddress = _b[2], feeRecipientAddress = _b[3], _a);
                    erc20Wrapper = new contracts_asset_proxy_1.ERC20Wrapper(contracts_test_utils_1.provider, usedAddresses, owner);
                    erc721Wrapper = new contracts_asset_proxy_1.ERC721Wrapper(contracts_test_utils_1.provider, usedAddresses, owner);
                    erc1155ProxyWrapper = new contracts_asset_proxy_1.ERC1155ProxyWrapper(contracts_test_utils_1.provider, usedAddresses, owner);
                    return [4 /*yield*/, erc20Wrapper.deployProxyAsync()];
                case 2:
                    // Deploy AssetProxies, Exchange, tokens, and malicious contracts
                    erc20Proxy = _f.sent();
                    return [4 /*yield*/, erc721Wrapper.deployProxyAsync()];
                case 3:
                    erc721Proxy = _f.sent();
                    return [4 /*yield*/, contracts_asset_proxy_1.MultiAssetProxyContract.deployFrom0xArtifactAsync(contracts_asset_proxy_1.artifacts.MultiAssetProxy, contracts_test_utils_1.provider, contracts_test_utils_1.txDefaults)];
                case 4:
                    multiAssetProxy = _f.sent();
                    return [4 /*yield*/, contracts_asset_proxy_1.StaticCallProxyContract.deployFrom0xArtifactAsync(contracts_asset_proxy_1.artifacts.StaticCallProxy, contracts_test_utils_1.provider, contracts_test_utils_1.txDefaults)];
                case 5:
                    staticCallProxy = _f.sent();
                    numDummyErc20ToDeploy = 3;
                    return [4 /*yield*/, erc20Wrapper.deployDummyTokensAsync(numDummyErc20ToDeploy, contracts_test_utils_1.constants.DUMMY_TOKEN_DECIMALS)];
                case 6:
                    _c = __read.apply(void 0, [_f.sent(), 3]), erc20TokenA = _c[0], erc20TokenB = _c[1], zrxToken = _c[2];
                    return [4 /*yield*/, erc721Wrapper.deployDummyTokensAsync()];
                case 7:
                    _d = __read.apply(void 0, [_f.sent(), 1]), erc721Token = _d[0];
                    return [4 /*yield*/, erc1155ProxyWrapper.deployProxyAsync()];
                case 8:
                    erc1155Proxy = _f.sent();
                    return [4 /*yield*/, erc1155ProxyWrapper.deployDummyContractsAsync()];
                case 9:
                    _e = __read.apply(void 0, [_f.sent(), 1]), erc1155Wrapper = _e[0];
                    erc1155Contract = erc1155Wrapper.getContract();
                    return [4 /*yield*/, src_1.ExchangeContract.deployFrom0xArtifactAsync(src_1.artifacts.Exchange, contracts_test_utils_1.provider, contracts_test_utils_1.txDefaults, order_utils_1.assetDataUtils.encodeERC20AssetData(zrxToken.address))];
                case 10:
                    exchange = _f.sent();
                    return [4 /*yield*/, src_1.TestStaticCallReceiverContract.deployFrom0xArtifactAsync(src_1.artifacts.TestStaticCallReceiver, contracts_test_utils_1.provider, contracts_test_utils_1.txDefaults)];
                case 11:
                    maliciousWallet = maliciousValidator = _f.sent();
                    return [4 /*yield*/, src_1.ReentrantERC20TokenContract.deployFrom0xArtifactAsync(src_1.artifacts.ReentrantERC20Token, contracts_test_utils_1.provider, contracts_test_utils_1.txDefaults, exchange.address)];
                case 12:
                    reentrantErc20Token = _f.sent();
                    // Configure ERC20Proxy
                    return [4 /*yield*/, erc20Proxy.addAuthorizedAddress.awaitTransactionSuccessAsync(exchange.address, { from: owner })];
                case 13:
                    // Configure ERC20Proxy
                    _f.sent();
                    return [4 /*yield*/, erc20Proxy.addAuthorizedAddress.awaitTransactionSuccessAsync(multiAssetProxy.address, { from: owner })];
                case 14:
                    _f.sent();
                    // Configure ERC721Proxy
                    return [4 /*yield*/, erc721Proxy.addAuthorizedAddress.awaitTransactionSuccessAsync(exchange.address, { from: owner })];
                case 15:
                    // Configure ERC721Proxy
                    _f.sent();
                    return [4 /*yield*/, erc721Proxy.addAuthorizedAddress.awaitTransactionSuccessAsync(multiAssetProxy.address, { from: owner })];
                case 16:
                    _f.sent();
                    // Configure ERC1155Proxy
                    return [4 /*yield*/, erc1155Proxy.addAuthorizedAddress.awaitTransactionSuccessAsync(exchange.address, { from: owner })];
                case 17:
                    // Configure ERC1155Proxy
                    _f.sent();
                    return [4 /*yield*/, erc1155Proxy.addAuthorizedAddress.awaitTransactionSuccessAsync(multiAssetProxy.address, { from: owner })];
                case 18:
                    _f.sent();
                    // Configure MultiAssetProxy
                    return [4 /*yield*/, multiAssetProxy.addAuthorizedAddress.awaitTransactionSuccessAsync(exchange.address, { from: owner })];
                case 19:
                    // Configure MultiAssetProxy
                    _f.sent();
                    return [4 /*yield*/, multiAssetProxy.registerAssetProxy.awaitTransactionSuccessAsync(erc20Proxy.address, { from: owner })];
                case 20:
                    _f.sent();
                    return [4 /*yield*/, multiAssetProxy.registerAssetProxy.awaitTransactionSuccessAsync(erc721Proxy.address, { from: owner })];
                case 21:
                    _f.sent();
                    return [4 /*yield*/, multiAssetProxy.registerAssetProxy.awaitTransactionSuccessAsync(staticCallProxy.address, { from: owner })];
                case 22:
                    _f.sent();
                    // Configure Exchange
                    exchangeWrapper = new src_1.ExchangeWrapper(exchange, contracts_test_utils_1.provider);
                    return [4 /*yield*/, exchangeWrapper.registerAssetProxyAsync(erc20Proxy.address, owner)];
                case 23:
                    _f.sent();
                    return [4 /*yield*/, exchangeWrapper.registerAssetProxyAsync(erc721Proxy.address, owner)];
                case 24:
                    _f.sent();
                    return [4 /*yield*/, exchangeWrapper.registerAssetProxyAsync(erc1155Proxy.address, owner)];
                case 25:
                    _f.sent();
                    return [4 /*yield*/, exchangeWrapper.registerAssetProxyAsync(multiAssetProxy.address, owner)];
                case 26:
                    _f.sent();
                    return [4 /*yield*/, exchangeWrapper.registerAssetProxyAsync(staticCallProxy.address, owner)];
                case 27:
                    _f.sent();
                    // Configure ERC20 tokens
                    return [4 /*yield*/, erc20Wrapper.setBalancesAndAllowancesAsync()];
                case 28:
                    // Configure ERC20 tokens
                    _f.sent();
                    // Configure ERC721 tokens
                    return [4 /*yield*/, erc721Wrapper.setBalancesAndAllowancesAsync()];
                case 29:
                    // Configure ERC721 tokens
                    _f.sent();
                    return [4 /*yield*/, erc721Wrapper.getBalancesAsync()];
                case 30:
                    erc721Balances = _f.sent();
                    erc721MakerAssetIds = erc721Balances[makerAddress][erc721Token.address];
                    erc721TakerAssetIds = erc721Balances[takerAddress][erc721Token.address];
                    // Configure ERC1155 tokens
                    return [4 /*yield*/, erc1155ProxyWrapper.setBalancesAndAllowancesAsync()];
                case 31:
                    // Configure ERC1155 tokens
                    _f.sent();
                    erc1155FungibleTokens = erc1155ProxyWrapper.getFungibleTokenIds();
                    nonFungibleTokens = erc1155ProxyWrapper.getNonFungibleTokenIds();
                    return [4 /*yield*/, erc1155ProxyWrapper.getBalancesAsync()];
                case 32:
                    tokenBalances = _f.sent();
                    erc1155NonFungibleTokensOwnedByMaker = [];
                    erc1155NonFungibleTokensOwnedByTaker = [];
                    _.each(nonFungibleTokens, function (nonFungibleToken) {
                        var nonFungibleTokenAsString = nonFungibleToken.toString();
                        var nonFungibleTokenHeldByMaker = tokenBalances.nonFungible[makerAddress][erc1155Contract.address][nonFungibleTokenAsString][0];
                        erc1155NonFungibleTokensOwnedByMaker.push(nonFungibleTokenHeldByMaker);
                        var nonFungibleTokenHeldByTaker = tokenBalances.nonFungible[takerAddress][erc1155Contract.address][nonFungibleTokenAsString][0];
                        erc1155NonFungibleTokensOwnedByTaker.push(nonFungibleTokenHeldByTaker);
                    });
                    // Configure order defaults
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
    describe('fillOrder', function () {
        beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, erc20Wrapper.getBalancesAsync()];
                    case 1:
                        erc20Balances = _a.sent();
                        return [4 /*yield*/, orderFactory.newSignedOrderAsync()];
                    case 2:
                        signedOrder = _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        var reentrancyTest = function (functionNames) {
            _.forEach(functionNames, function (functionName, functionId) { return __awaiter(_this, void 0, void 0, function () {
                var description;
                var _this = this;
                return __generator(this, function (_a) {
                    description = "should not allow fillOrder to reenter the Exchange contract via " + functionName;
                    it(description, function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, orderFactory.newSignedOrderAsync({
                                        makerAssetData: order_utils_1.assetDataUtils.encodeERC20AssetData(reentrantErc20Token.address),
                                    })];
                                case 1:
                                    signedOrder = _a.sent();
                                    return [4 /*yield*/, reentrantErc20Token.setCurrentFunction.awaitTransactionSuccessAsync(functionId)];
                                case 2:
                                    _a.sent();
                                    return [4 /*yield*/, contracts_test_utils_1.expectTransactionFailedAsync(exchangeWrapper.fillOrderAsync(signedOrder, takerAddress), types_1.RevertReason.TransferFailed)];
                                case 3:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    return [2 /*return*/];
                });
            }); });
        };
        describe('fillOrder reentrancy tests', function () { return reentrancyTest(contracts_test_utils_1.constants.FUNCTIONS_WITH_MUTEX); });
        it('should throw if signature is invalid', function () { return __awaiter(_this, void 0, void 0, function () {
            var v, invalidR, invalidS, signatureType, invalidSigBuff, invalidSigHex;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, orderFactory.newSignedOrderAsync({
                            makerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(10), 18),
                        })];
                    case 1:
                        signedOrder = _a.sent();
                        v = ethUtil.toBuffer(signedOrder.signature.slice(0, 4));
                        invalidR = ethUtil.sha3('invalidR');
                        invalidS = ethUtil.sha3('invalidS');
                        signatureType = ethUtil.toBuffer("0x" + signedOrder.signature.slice(-2));
                        invalidSigBuff = Buffer.concat([v, invalidR, invalidS, signatureType]);
                        invalidSigHex = "0x" + invalidSigBuff.toString('hex');
                        signedOrder.signature = invalidSigHex;
                        return [2 /*return*/, contracts_test_utils_1.expectTransactionFailedAsync(exchangeWrapper.fillOrderAsync(signedOrder, takerAddress), types_1.RevertReason.InvalidOrderSignature)];
                }
            });
        }); });
        it('should throw if no value is filled', function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, orderFactory.newSignedOrderAsync()];
                    case 1:
                        signedOrder = _a.sent();
                        return [4 /*yield*/, exchangeWrapper.fillOrderAsync(signedOrder, takerAddress)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, contracts_test_utils_1.expectTransactionFailedAsync(exchangeWrapper.fillOrderAsync(signedOrder, takerAddress), types_1.RevertReason.OrderUnfillable)];
                }
            });
        }); });
        it('should revert if `isValidSignature` tries to update state when SignatureType=Wallet', function () { return __awaiter(_this, void 0, void 0, function () {
            var maliciousMakerAddress;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        maliciousMakerAddress = maliciousWallet.address;
                        return [4 /*yield*/, erc20TokenA.setBalance.awaitTransactionSuccessAsync(maliciousMakerAddress, contracts_test_utils_1.constants.INITIAL_ERC20_BALANCE)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, maliciousWallet.approveERC20.awaitTransactionSuccessAsync(erc20TokenA.address, erc20Proxy.address, contracts_test_utils_1.constants.INITIAL_ERC20_ALLOWANCE)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, orderFactory.newSignedOrderAsync({
                                makerAddress: maliciousMakerAddress,
                                makerFee: contracts_test_utils_1.constants.ZERO_AMOUNT,
                            })];
                    case 3:
                        signedOrder = _a.sent();
                        signedOrder.signature = "0x0" + types_1.SignatureType.Wallet;
                        return [4 /*yield*/, contracts_test_utils_1.expectTransactionFailedAsync(exchangeWrapper.fillOrderAsync(signedOrder, takerAddress), types_1.RevertReason.WalletError)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should revert if `isValidSignature` tries to update state when SignatureType=Validator', function () { return __awaiter(_this, void 0, void 0, function () {
            var isApproved;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        isApproved = true;
                        return [4 /*yield*/, exchange.setSignatureValidatorApproval.awaitTransactionSuccessAsync(maliciousValidator.address, isApproved, { from: makerAddress })];
                    case 1:
                        _a.sent();
                        signedOrder.signature = maliciousValidator.address + "0" + types_1.SignatureType.Validator;
                        return [4 /*yield*/, contracts_test_utils_1.expectTransactionFailedAsync(exchangeWrapper.fillOrderAsync(signedOrder, takerAddress), types_1.RevertReason.ValidatorError)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should not emit transfer events for transfers where from == to', function () { return __awaiter(_this, void 0, void 0, function () {
            var txReceipt, logs, transferLogs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, exchangeWrapper.fillOrderAsync(signedOrder, makerAddress)];
                    case 1:
                        txReceipt = _a.sent();
                        logs = txReceipt.logs;
                        transferLogs = _.filter(logs, function (log) { return log.event === 'Transfer'; });
                        expect(transferLogs.length).to.be.equal(2);
                        expect(transferLogs[0].address).to.be.equal(zrxToken.address);
                        expect(transferLogs[0].args._from).to.be.equal(makerAddress);
                        expect(transferLogs[0].args._to).to.be.equal(feeRecipientAddress);
                        expect(transferLogs[0].args._value).to.be.bignumber.equal(signedOrder.makerFee);
                        expect(transferLogs[1].address).to.be.equal(zrxToken.address);
                        expect(transferLogs[1].args._from).to.be.equal(makerAddress);
                        expect(transferLogs[1].args._to).to.be.equal(feeRecipientAddress);
                        expect(transferLogs[1].args._value).to.be.bignumber.equal(signedOrder.takerFee);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('Testing exchange of ERC20 tokens with no return values', function () {
        before(function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, contracts_erc20_1.DummyNoReturnERC20TokenContract.deployFrom0xArtifactAsync(contracts_erc20_1.artifacts.DummyNoReturnERC20Token, contracts_test_utils_1.provider, contracts_test_utils_1.txDefaults, contracts_test_utils_1.constants.DUMMY_TOKEN_NAME, contracts_test_utils_1.constants.DUMMY_TOKEN_SYMBOL, contracts_test_utils_1.constants.DUMMY_TOKEN_DECIMALS, contracts_test_utils_1.constants.DUMMY_TOKEN_TOTAL_SUPPLY)];
                    case 1:
                        noReturnErc20Token = _a.sent();
                        return [4 /*yield*/, noReturnErc20Token.setBalance.awaitTransactionSuccessAsync(makerAddress, contracts_test_utils_1.constants.INITIAL_ERC20_BALANCE)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, noReturnErc20Token.approve.awaitTransactionSuccessAsync(erc20Proxy.address, contracts_test_utils_1.constants.INITIAL_ERC20_ALLOWANCE, { from: makerAddress })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should transfer the correct amounts when makerAssetAmount === takerAssetAmount', function () { return __awaiter(_this, void 0, void 0, function () {
            var initialMakerBalanceA, initialMakerBalanceB, initialMakerZrxBalance, initialTakerBalanceA, initialTakerBalanceB, initialTakerZrxBalance, initialFeeRecipientZrxBalance, finalMakerBalanceA, finalMakerBalanceB, finalMakerZrxBalance, finalTakerBalanceA, finalTakerBalanceB, finalTakerZrxBalance, finalFeeRecipientZrxBalance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, orderFactory.newSignedOrderAsync({
                            makerAssetData: order_utils_1.assetDataUtils.encodeERC20AssetData(noReturnErc20Token.address),
                            makerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 18),
                            takerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 18),
                        })];
                    case 1:
                        signedOrder = _a.sent();
                        return [4 /*yield*/, noReturnErc20Token.balanceOf.callAsync(makerAddress)];
                    case 2:
                        initialMakerBalanceA = _a.sent();
                        return [4 /*yield*/, erc20TokenB.balanceOf.callAsync(makerAddress)];
                    case 3:
                        initialMakerBalanceB = _a.sent();
                        return [4 /*yield*/, zrxToken.balanceOf.callAsync(makerAddress)];
                    case 4:
                        initialMakerZrxBalance = _a.sent();
                        return [4 /*yield*/, noReturnErc20Token.balanceOf.callAsync(takerAddress)];
                    case 5:
                        initialTakerBalanceA = _a.sent();
                        return [4 /*yield*/, erc20TokenB.balanceOf.callAsync(takerAddress)];
                    case 6:
                        initialTakerBalanceB = _a.sent();
                        return [4 /*yield*/, zrxToken.balanceOf.callAsync(takerAddress)];
                    case 7:
                        initialTakerZrxBalance = _a.sent();
                        return [4 /*yield*/, zrxToken.balanceOf.callAsync(feeRecipientAddress)];
                    case 8:
                        initialFeeRecipientZrxBalance = _a.sent();
                        return [4 /*yield*/, exchangeWrapper.fillOrderAsync(signedOrder, takerAddress)];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, noReturnErc20Token.balanceOf.callAsync(makerAddress)];
                    case 10:
                        finalMakerBalanceA = _a.sent();
                        return [4 /*yield*/, erc20TokenB.balanceOf.callAsync(makerAddress)];
                    case 11:
                        finalMakerBalanceB = _a.sent();
                        return [4 /*yield*/, zrxToken.balanceOf.callAsync(makerAddress)];
                    case 12:
                        finalMakerZrxBalance = _a.sent();
                        return [4 /*yield*/, noReturnErc20Token.balanceOf.callAsync(takerAddress)];
                    case 13:
                        finalTakerBalanceA = _a.sent();
                        return [4 /*yield*/, erc20TokenB.balanceOf.callAsync(takerAddress)];
                    case 14:
                        finalTakerBalanceB = _a.sent();
                        return [4 /*yield*/, zrxToken.balanceOf.callAsync(takerAddress)];
                    case 15:
                        finalTakerZrxBalance = _a.sent();
                        return [4 /*yield*/, zrxToken.balanceOf.callAsync(feeRecipientAddress)];
                    case 16:
                        finalFeeRecipientZrxBalance = _a.sent();
                        expect(finalMakerBalanceA).to.be.bignumber.equal(initialMakerBalanceA.minus(signedOrder.makerAssetAmount));
                        expect(finalMakerBalanceB).to.be.bignumber.equal(initialMakerBalanceB.plus(signedOrder.takerAssetAmount));
                        expect(finalTakerBalanceA).to.be.bignumber.equal(initialTakerBalanceA.plus(signedOrder.makerAssetAmount));
                        expect(finalTakerBalanceB).to.be.bignumber.equal(initialTakerBalanceB.minus(signedOrder.takerAssetAmount));
                        expect(finalMakerZrxBalance).to.be.bignumber.equal(initialMakerZrxBalance.minus(signedOrder.makerFee));
                        expect(finalTakerZrxBalance).to.be.bignumber.equal(initialTakerZrxBalance.minus(signedOrder.takerFee));
                        expect(finalFeeRecipientZrxBalance).to.be.bignumber.equal(initialFeeRecipientZrxBalance.plus(signedOrder.makerFee.plus(signedOrder.takerFee)));
                        return [2 /*return*/];
                }
            });
        }); });
        it('should transfer the correct amounts when makerAssetAmount > takerAssetAmount', function () { return __awaiter(_this, void 0, void 0, function () {
            var initialMakerBalanceA, initialMakerBalanceB, initialMakerZrxBalance, initialTakerBalanceA, initialTakerBalanceB, initialTakerZrxBalance, initialFeeRecipientZrxBalance, finalMakerBalanceA, finalMakerBalanceB, finalMakerZrxBalance, finalTakerBalanceA, finalTakerBalanceB, finalTakerZrxBalance, finalFeeRecipientZrxBalance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, orderFactory.newSignedOrderAsync({
                            makerAssetData: order_utils_1.assetDataUtils.encodeERC20AssetData(noReturnErc20Token.address),
                            makerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(200), 18),
                            takerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 18),
                        })];
                    case 1:
                        signedOrder = _a.sent();
                        return [4 /*yield*/, noReturnErc20Token.balanceOf.callAsync(makerAddress)];
                    case 2:
                        initialMakerBalanceA = _a.sent();
                        return [4 /*yield*/, erc20TokenB.balanceOf.callAsync(makerAddress)];
                    case 3:
                        initialMakerBalanceB = _a.sent();
                        return [4 /*yield*/, zrxToken.balanceOf.callAsync(makerAddress)];
                    case 4:
                        initialMakerZrxBalance = _a.sent();
                        return [4 /*yield*/, noReturnErc20Token.balanceOf.callAsync(takerAddress)];
                    case 5:
                        initialTakerBalanceA = _a.sent();
                        return [4 /*yield*/, erc20TokenB.balanceOf.callAsync(takerAddress)];
                    case 6:
                        initialTakerBalanceB = _a.sent();
                        return [4 /*yield*/, zrxToken.balanceOf.callAsync(takerAddress)];
                    case 7:
                        initialTakerZrxBalance = _a.sent();
                        return [4 /*yield*/, zrxToken.balanceOf.callAsync(feeRecipientAddress)];
                    case 8:
                        initialFeeRecipientZrxBalance = _a.sent();
                        return [4 /*yield*/, exchangeWrapper.fillOrderAsync(signedOrder, takerAddress)];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, noReturnErc20Token.balanceOf.callAsync(makerAddress)];
                    case 10:
                        finalMakerBalanceA = _a.sent();
                        return [4 /*yield*/, erc20TokenB.balanceOf.callAsync(makerAddress)];
                    case 11:
                        finalMakerBalanceB = _a.sent();
                        return [4 /*yield*/, zrxToken.balanceOf.callAsync(makerAddress)];
                    case 12:
                        finalMakerZrxBalance = _a.sent();
                        return [4 /*yield*/, noReturnErc20Token.balanceOf.callAsync(takerAddress)];
                    case 13:
                        finalTakerBalanceA = _a.sent();
                        return [4 /*yield*/, erc20TokenB.balanceOf.callAsync(takerAddress)];
                    case 14:
                        finalTakerBalanceB = _a.sent();
                        return [4 /*yield*/, zrxToken.balanceOf.callAsync(takerAddress)];
                    case 15:
                        finalTakerZrxBalance = _a.sent();
                        return [4 /*yield*/, zrxToken.balanceOf.callAsync(feeRecipientAddress)];
                    case 16:
                        finalFeeRecipientZrxBalance = _a.sent();
                        expect(finalMakerBalanceA).to.be.bignumber.equal(initialMakerBalanceA.minus(signedOrder.makerAssetAmount));
                        expect(finalMakerBalanceB).to.be.bignumber.equal(initialMakerBalanceB.plus(signedOrder.takerAssetAmount));
                        expect(finalTakerBalanceA).to.be.bignumber.equal(initialTakerBalanceA.plus(signedOrder.makerAssetAmount));
                        expect(finalTakerBalanceB).to.be.bignumber.equal(initialTakerBalanceB.minus(signedOrder.takerAssetAmount));
                        expect(finalMakerZrxBalance).to.be.bignumber.equal(initialMakerZrxBalance.minus(signedOrder.makerFee));
                        expect(finalTakerZrxBalance).to.be.bignumber.equal(initialTakerZrxBalance.minus(signedOrder.takerFee));
                        expect(finalFeeRecipientZrxBalance).to.be.bignumber.equal(initialFeeRecipientZrxBalance.plus(signedOrder.makerFee.plus(signedOrder.takerFee)));
                        return [2 /*return*/];
                }
            });
        }); });
        it('should transfer the correct amounts when makerAssetAmount < takerAssetAmount', function () { return __awaiter(_this, void 0, void 0, function () {
            var initialMakerBalanceA, initialMakerBalanceB, initialMakerZrxBalance, initialTakerBalanceA, initialTakerBalanceB, initialTakerZrxBalance, initialFeeRecipientZrxBalance, finalMakerBalanceA, finalMakerBalanceB, finalMakerZrxBalance, finalTakerBalanceA, finalTakerBalanceB, finalTakerZrxBalance, finalFeeRecipientZrxBalance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, orderFactory.newSignedOrderAsync({
                            makerAssetData: order_utils_1.assetDataUtils.encodeERC20AssetData(noReturnErc20Token.address),
                            makerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 18),
                            takerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(200), 18),
                        })];
                    case 1:
                        signedOrder = _a.sent();
                        return [4 /*yield*/, noReturnErc20Token.balanceOf.callAsync(makerAddress)];
                    case 2:
                        initialMakerBalanceA = _a.sent();
                        return [4 /*yield*/, erc20TokenB.balanceOf.callAsync(makerAddress)];
                    case 3:
                        initialMakerBalanceB = _a.sent();
                        return [4 /*yield*/, zrxToken.balanceOf.callAsync(makerAddress)];
                    case 4:
                        initialMakerZrxBalance = _a.sent();
                        return [4 /*yield*/, noReturnErc20Token.balanceOf.callAsync(takerAddress)];
                    case 5:
                        initialTakerBalanceA = _a.sent();
                        return [4 /*yield*/, erc20TokenB.balanceOf.callAsync(takerAddress)];
                    case 6:
                        initialTakerBalanceB = _a.sent();
                        return [4 /*yield*/, zrxToken.balanceOf.callAsync(takerAddress)];
                    case 7:
                        initialTakerZrxBalance = _a.sent();
                        return [4 /*yield*/, zrxToken.balanceOf.callAsync(feeRecipientAddress)];
                    case 8:
                        initialFeeRecipientZrxBalance = _a.sent();
                        return [4 /*yield*/, exchangeWrapper.fillOrderAsync(signedOrder, takerAddress)];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, noReturnErc20Token.balanceOf.callAsync(makerAddress)];
                    case 10:
                        finalMakerBalanceA = _a.sent();
                        return [4 /*yield*/, erc20TokenB.balanceOf.callAsync(makerAddress)];
                    case 11:
                        finalMakerBalanceB = _a.sent();
                        return [4 /*yield*/, zrxToken.balanceOf.callAsync(makerAddress)];
                    case 12:
                        finalMakerZrxBalance = _a.sent();
                        return [4 /*yield*/, noReturnErc20Token.balanceOf.callAsync(takerAddress)];
                    case 13:
                        finalTakerBalanceA = _a.sent();
                        return [4 /*yield*/, erc20TokenB.balanceOf.callAsync(takerAddress)];
                    case 14:
                        finalTakerBalanceB = _a.sent();
                        return [4 /*yield*/, zrxToken.balanceOf.callAsync(takerAddress)];
                    case 15:
                        finalTakerZrxBalance = _a.sent();
                        return [4 /*yield*/, zrxToken.balanceOf.callAsync(feeRecipientAddress)];
                    case 16:
                        finalFeeRecipientZrxBalance = _a.sent();
                        expect(finalMakerBalanceA).to.be.bignumber.equal(initialMakerBalanceA.minus(signedOrder.makerAssetAmount));
                        expect(finalMakerBalanceB).to.be.bignumber.equal(initialMakerBalanceB.plus(signedOrder.takerAssetAmount));
                        expect(finalTakerBalanceA).to.be.bignumber.equal(initialTakerBalanceA.plus(signedOrder.makerAssetAmount));
                        expect(finalTakerBalanceB).to.be.bignumber.equal(initialTakerBalanceB.minus(signedOrder.takerAssetAmount));
                        expect(finalMakerZrxBalance).to.be.bignumber.equal(initialMakerZrxBalance.minus(signedOrder.makerFee));
                        expect(finalTakerZrxBalance).to.be.bignumber.equal(initialTakerZrxBalance.minus(signedOrder.takerFee));
                        expect(finalFeeRecipientZrxBalance).to.be.bignumber.equal(initialFeeRecipientZrxBalance.plus(signedOrder.makerFee.plus(signedOrder.takerFee)));
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('cancelOrder', function () {
        beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, erc20Wrapper.getBalancesAsync()];
                    case 1:
                        erc20Balances = _a.sent();
                        return [4 /*yield*/, orderFactory.newSignedOrderAsync()];
                    case 2:
                        signedOrder = _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should throw if not sent by maker', function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, contracts_test_utils_1.expectTransactionFailedAsync(exchangeWrapper.cancelOrderAsync(signedOrder, takerAddress), types_1.RevertReason.InvalidMaker)];
            });
        }); });
        it('should throw if makerAssetAmount is 0', function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, orderFactory.newSignedOrderAsync({
                            makerAssetAmount: new utils_1.BigNumber(0),
                        })];
                    case 1:
                        signedOrder = _a.sent();
                        return [2 /*return*/, contracts_test_utils_1.expectTransactionFailedAsync(exchangeWrapper.cancelOrderAsync(signedOrder, makerAddress), types_1.RevertReason.OrderUnfillable)];
                }
            });
        }); });
        it('should throw if takerAssetAmount is 0', function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, orderFactory.newSignedOrderAsync({
                            takerAssetAmount: new utils_1.BigNumber(0),
                        })];
                    case 1:
                        signedOrder = _a.sent();
                        return [2 /*return*/, contracts_test_utils_1.expectTransactionFailedAsync(exchangeWrapper.cancelOrderAsync(signedOrder, makerAddress), types_1.RevertReason.OrderUnfillable)];
                }
            });
        }); });
        it('should be able to cancel a full order', function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, exchangeWrapper.cancelOrderAsync(signedOrder, makerAddress)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, contracts_test_utils_1.expectTransactionFailedAsync(exchangeWrapper.fillOrderAsync(signedOrder, takerAddress, {
                                takerAssetFillAmount: signedOrder.takerAssetAmount.div(2),
                            }), types_1.RevertReason.OrderUnfillable)];
                }
            });
        }); });
        it('should log 1 event with correct arguments', function () { return __awaiter(_this, void 0, void 0, function () {
            var res, log, logArgs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, exchangeWrapper.cancelOrderAsync(signedOrder, makerAddress)];
                    case 1:
                        res = _a.sent();
                        expect(res.logs).to.have.length(1);
                        log = res.logs[0];
                        logArgs = log.args;
                        expect(signedOrder.makerAddress).to.be.equal(logArgs.makerAddress);
                        expect(signedOrder.makerAddress).to.be.equal(logArgs.senderAddress);
                        expect(signedOrder.feeRecipientAddress).to.be.equal(logArgs.feeRecipientAddress);
                        expect(signedOrder.makerAssetData).to.be.equal(logArgs.makerAssetData);
                        expect(signedOrder.takerAssetData).to.be.equal(logArgs.takerAssetData);
                        expect(order_utils_1.orderHashUtils.getOrderHashHex(signedOrder)).to.be.equal(logArgs.orderHash);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should throw if already cancelled', function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, exchangeWrapper.cancelOrderAsync(signedOrder, makerAddress)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, contracts_test_utils_1.expectTransactionFailedAsync(exchangeWrapper.cancelOrderAsync(signedOrder, makerAddress), types_1.RevertReason.OrderUnfillable)];
                }
            });
        }); });
        it('should throw if order is expired', function () { return __awaiter(_this, void 0, void 0, function () {
            var currentTimestamp;
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
                        return [2 /*return*/, contracts_test_utils_1.expectTransactionFailedAsync(exchangeWrapper.cancelOrderAsync(signedOrder, makerAddress), types_1.RevertReason.OrderUnfillable)];
                }
            });
        }); });
        it('should throw if rounding error is greater than 0.1%', function () { return __awaiter(_this, void 0, void 0, function () {
            var fillTakerAssetAmount1, fillTakerAssetAmount2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, orderFactory.newSignedOrderAsync({
                            makerAssetAmount: new utils_1.BigNumber(1001),
                            takerAssetAmount: new utils_1.BigNumber(3),
                        })];
                    case 1:
                        signedOrder = _a.sent();
                        fillTakerAssetAmount1 = new utils_1.BigNumber(2);
                        return [4 /*yield*/, exchangeWrapper.fillOrderAsync(signedOrder, takerAddress, {
                                takerAssetFillAmount: fillTakerAssetAmount1,
                            })];
                    case 2:
                        _a.sent();
                        fillTakerAssetAmount2 = new utils_1.BigNumber(1);
                        return [2 /*return*/, contracts_test_utils_1.expectTransactionFailedAsync(exchangeWrapper.fillOrderAsync(signedOrder, takerAddress, {
                                takerAssetFillAmount: fillTakerAssetAmount2,
                            }), types_1.RevertReason.RoundingError)];
                }
            });
        }); });
    });
    describe('cancelOrdersUpTo', function () {
        it('should fail to set orderEpoch less than current orderEpoch', function () { return __awaiter(_this, void 0, void 0, function () {
            var orderEpoch, lesserOrderEpoch;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        orderEpoch = new utils_1.BigNumber(1);
                        return [4 /*yield*/, exchangeWrapper.cancelOrdersUpToAsync(orderEpoch, makerAddress)];
                    case 1:
                        _a.sent();
                        lesserOrderEpoch = new utils_1.BigNumber(0);
                        return [2 /*return*/, contracts_test_utils_1.expectTransactionFailedAsync(exchangeWrapper.cancelOrdersUpToAsync(lesserOrderEpoch, makerAddress), types_1.RevertReason.InvalidNewOrderEpoch)];
                }
            });
        }); });
        it('should fail to set orderEpoch equal to existing orderEpoch', function () { return __awaiter(_this, void 0, void 0, function () {
            var orderEpoch;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        orderEpoch = new utils_1.BigNumber(1);
                        return [4 /*yield*/, exchangeWrapper.cancelOrdersUpToAsync(orderEpoch, makerAddress)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, contracts_test_utils_1.expectTransactionFailedAsync(exchangeWrapper.cancelOrdersUpToAsync(orderEpoch, makerAddress), types_1.RevertReason.InvalidNewOrderEpoch)];
                }
            });
        }); });
        it('should cancel only orders with a orderEpoch less than existing orderEpoch', function () { return __awaiter(_this, void 0, void 0, function () {
            var orderEpoch, signedOrders, _a, newBalances, fillMakerAssetAmount, fillTakerAssetAmount, makerFee, takerFee;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        orderEpoch = new utils_1.BigNumber(1);
                        return [4 /*yield*/, exchangeWrapper.cancelOrdersUpToAsync(orderEpoch, makerAddress)];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, erc20Wrapper.getBalancesAsync()];
                    case 2:
                        // Create 3 orders with orderEpoch values: 0,1,2,3
                        // Since we cancelled with orderEpoch=1, orders with orderEpoch<=1 will not be processed
                        erc20Balances = _b.sent();
                        return [4 /*yield*/, orderFactory.newSignedOrderAsync({
                                makerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(9), 18),
                                takerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(9), 18),
                                salt: new utils_1.BigNumber(0),
                            })];
                    case 3:
                        _a = [
                            _b.sent()
                        ];
                        return [4 /*yield*/, orderFactory.newSignedOrderAsync({
                                makerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(79), 18),
                                takerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(79), 18),
                                salt: new utils_1.BigNumber(1),
                            })];
                    case 4:
                        _a = _a.concat([
                            _b.sent()
                        ]);
                        return [4 /*yield*/, orderFactory.newSignedOrderAsync({
                                makerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(979), 18),
                                takerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(979), 18),
                                salt: new utils_1.BigNumber(2),
                            })];
                    case 5:
                        _a = _a.concat([
                            _b.sent()
                        ]);
                        return [4 /*yield*/, orderFactory.newSignedOrderAsync({
                                makerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(7979), 18),
                                takerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(7979), 18),
                                salt: new utils_1.BigNumber(3),
                            })];
                    case 6:
                        signedOrders = _a.concat([
                            _b.sent()
                        ]);
                        return [4 /*yield*/, exchangeWrapper.batchFillOrdersNoThrowAsync(signedOrders, takerAddress, {
                                // HACK(albrow): We need to hardcode the gas estimate here because
                                // the Geth gas estimator doesn't work with the way we use
                                // delegatecall and swallow errors.
                                gas: 600000,
                            })];
                    case 7:
                        _b.sent();
                        return [4 /*yield*/, erc20Wrapper.getBalancesAsync()];
                    case 8:
                        newBalances = _b.sent();
                        fillMakerAssetAmount = signedOrders[2].makerAssetAmount.plus(signedOrders[3].makerAssetAmount);
                        fillTakerAssetAmount = signedOrders[2].takerAssetAmount.plus(signedOrders[3].takerAssetAmount);
                        makerFee = signedOrders[2].makerFee.plus(signedOrders[3].makerFee);
                        takerFee = signedOrders[2].takerFee.plus(signedOrders[3].takerFee);
                        expect(newBalances[makerAddress][defaultMakerAssetAddress]).to.be.bignumber.equal(erc20Balances[makerAddress][defaultMakerAssetAddress].minus(fillMakerAssetAmount));
                        expect(newBalances[makerAddress][defaultTakerAssetAddress]).to.be.bignumber.equal(erc20Balances[makerAddress][defaultTakerAssetAddress].plus(fillTakerAssetAmount));
                        expect(newBalances[makerAddress][zrxToken.address]).to.be.bignumber.equal(erc20Balances[makerAddress][zrxToken.address].minus(makerFee));
                        expect(newBalances[takerAddress][defaultTakerAssetAddress]).to.be.bignumber.equal(erc20Balances[takerAddress][defaultTakerAssetAddress].minus(fillTakerAssetAmount));
                        expect(newBalances[takerAddress][defaultMakerAssetAddress]).to.be.bignumber.equal(erc20Balances[takerAddress][defaultMakerAssetAddress].plus(fillMakerAssetAmount));
                        expect(newBalances[takerAddress][zrxToken.address]).to.be.bignumber.equal(erc20Balances[takerAddress][zrxToken.address].minus(takerFee));
                        expect(newBalances[feeRecipientAddress][zrxToken.address]).to.be.bignumber.equal(erc20Balances[feeRecipientAddress][zrxToken.address].plus(makerFee.plus(takerFee)));
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('Testing Exchange of ERC721 Tokens', function () {
        it('should throw when maker does not own the token with id makerAssetId', function () { return __awaiter(_this, void 0, void 0, function () {
            var makerAssetId, takerAssetId, initialOwnerMakerAsset, initialOwnerTakerAsset, takerAssetFillAmount;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        makerAssetId = erc721TakerAssetIds[0];
                        takerAssetId = erc721TakerAssetIds[1];
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
                        expect(initialOwnerMakerAsset).to.be.bignumber.not.equal(makerAddress);
                        return [4 /*yield*/, erc721Token.ownerOf.callAsync(takerAssetId)];
                    case 3:
                        initialOwnerTakerAsset = _a.sent();
                        expect(initialOwnerTakerAsset).to.be.bignumber.equal(takerAddress);
                        takerAssetFillAmount = signedOrder.takerAssetAmount;
                        return [2 /*return*/, contracts_test_utils_1.expectTransactionFailedAsync(exchangeWrapper.fillOrderAsync(signedOrder, takerAddress, { takerAssetFillAmount: takerAssetFillAmount }), types_1.RevertReason.TransferFailed)];
                }
            });
        }); });
        it('should throw when taker does not own the token with id takerAssetId', function () { return __awaiter(_this, void 0, void 0, function () {
            var makerAssetId, takerAssetId, initialOwnerMakerAsset, initialOwnerTakerAsset, takerAssetFillAmount;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        makerAssetId = erc721MakerAssetIds[0];
                        takerAssetId = erc721MakerAssetIds[1];
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
                        expect(initialOwnerTakerAsset).to.be.bignumber.not.equal(takerAddress);
                        takerAssetFillAmount = signedOrder.takerAssetAmount;
                        return [2 /*return*/, contracts_test_utils_1.expectTransactionFailedAsync(exchangeWrapper.fillOrderAsync(signedOrder, takerAddress, { takerAssetFillAmount: takerAssetFillAmount }), types_1.RevertReason.TransferFailed)];
                }
            });
        }); });
        it('should throw when makerAssetAmount is greater than 1', function () { return __awaiter(_this, void 0, void 0, function () {
            var makerAssetId, takerAssetId, initialOwnerMakerAsset, initialOwnerTakerAsset, takerAssetFillAmount;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        makerAssetId = erc721MakerAssetIds[0];
                        takerAssetId = erc721TakerAssetIds[0];
                        return [4 /*yield*/, orderFactory.newSignedOrderAsync({
                                makerAssetAmount: new utils_1.BigNumber(2),
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
                        return [2 /*return*/, contracts_test_utils_1.expectTransactionFailedAsync(exchangeWrapper.fillOrderAsync(signedOrder, takerAddress, { takerAssetFillAmount: takerAssetFillAmount }), types_1.RevertReason.InvalidAmount)];
                }
            });
        }); });
        it('should throw when takerAssetAmount is greater than 1', function () { return __awaiter(_this, void 0, void 0, function () {
            var makerAssetId, takerAssetId, initialOwnerMakerAsset, initialOwnerTakerAsset, takerAssetFillAmount;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        makerAssetId = erc721MakerAssetIds[0];
                        takerAssetId = erc721TakerAssetIds[0];
                        return [4 /*yield*/, orderFactory.newSignedOrderAsync({
                                makerAssetAmount: new utils_1.BigNumber(1),
                                takerAssetAmount: new utils_1.BigNumber(500),
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
                        return [2 /*return*/, contracts_test_utils_1.expectTransactionFailedAsync(exchangeWrapper.fillOrderAsync(signedOrder, takerAddress, { takerAssetFillAmount: takerAssetFillAmount }), types_1.RevertReason.InvalidAmount)];
                }
            });
        }); });
        it('should throw on partial fill', function () { return __awaiter(_this, void 0, void 0, function () {
            var makerAssetId, takerAssetFillAmount;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        makerAssetId = erc721MakerAssetIds[0];
                        return [4 /*yield*/, orderFactory.newSignedOrderAsync({
                                makerAssetAmount: new utils_1.BigNumber(1),
                                takerAssetAmount: web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(100), 18),
                                makerAssetData: order_utils_1.assetDataUtils.encodeERC721AssetData(erc721Token.address, makerAssetId),
                                takerAssetData: order_utils_1.assetDataUtils.encodeERC20AssetData(defaultTakerAssetAddress),
                            })];
                    case 1:
                        signedOrder = _a.sent();
                        takerAssetFillAmount = signedOrder.takerAssetAmount.div(2);
                        return [2 /*return*/, contracts_test_utils_1.expectTransactionFailedAsync(exchangeWrapper.fillOrderAsync(signedOrder, takerAddress, { takerAssetFillAmount: takerAssetFillAmount }), types_1.RevertReason.RoundingError)];
                }
            });
        }); });
    });
    describe('Testing exchange of multiple assets', function () {
        it('should allow multiple assets to be exchanged for a single asset', function () { return __awaiter(_this, void 0, void 0, function () {
            var makerAmounts, makerNestedAssetData, makerAssetData, makerAssetAmount, takerAssetData, takerAssetAmount, initialMakerBalanceA, initialMakerBalanceB, initialMakerZrxBalance, initialTakerBalanceA, initialTakerBalanceB, initialTakerZrxBalance, finalMakerBalanceA, finalMakerBalanceB, finalMakerZrxBalance, finalTakerBalanceA, finalTakerBalanceB, finalTakerZrxBalance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        makerAmounts = [new utils_1.BigNumber(10), new utils_1.BigNumber(20)];
                        makerNestedAssetData = [
                            order_utils_1.assetDataUtils.encodeERC20AssetData(erc20TokenA.address),
                            order_utils_1.assetDataUtils.encodeERC20AssetData(erc20TokenB.address),
                        ];
                        makerAssetData = order_utils_1.assetDataUtils.encodeMultiAssetData(makerAmounts, makerNestedAssetData);
                        makerAssetAmount = new utils_1.BigNumber(1);
                        takerAssetData = order_utils_1.assetDataUtils.encodeERC20AssetData(zrxToken.address);
                        takerAssetAmount = new utils_1.BigNumber(10);
                        return [4 /*yield*/, orderFactory.newSignedOrderAsync({
                                makerAssetData: makerAssetData,
                                takerAssetData: takerAssetData,
                                makerAssetAmount: makerAssetAmount,
                                takerAssetAmount: takerAssetAmount,
                                makerFee: contracts_test_utils_1.constants.ZERO_AMOUNT,
                                takerFee: contracts_test_utils_1.constants.ZERO_AMOUNT,
                            })];
                    case 1:
                        signedOrder = _a.sent();
                        return [4 /*yield*/, erc20TokenA.balanceOf.callAsync(makerAddress)];
                    case 2:
                        initialMakerBalanceA = _a.sent();
                        return [4 /*yield*/, erc20TokenB.balanceOf.callAsync(makerAddress)];
                    case 3:
                        initialMakerBalanceB = _a.sent();
                        return [4 /*yield*/, zrxToken.balanceOf.callAsync(makerAddress)];
                    case 4:
                        initialMakerZrxBalance = _a.sent();
                        return [4 /*yield*/, erc20TokenA.balanceOf.callAsync(takerAddress)];
                    case 5:
                        initialTakerBalanceA = _a.sent();
                        return [4 /*yield*/, erc20TokenB.balanceOf.callAsync(takerAddress)];
                    case 6:
                        initialTakerBalanceB = _a.sent();
                        return [4 /*yield*/, zrxToken.balanceOf.callAsync(takerAddress)];
                    case 7:
                        initialTakerZrxBalance = _a.sent();
                        return [4 /*yield*/, exchangeWrapper.fillOrderAsync(signedOrder, takerAddress)];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, erc20TokenA.balanceOf.callAsync(makerAddress)];
                    case 9:
                        finalMakerBalanceA = _a.sent();
                        return [4 /*yield*/, erc20TokenB.balanceOf.callAsync(makerAddress)];
                    case 10:
                        finalMakerBalanceB = _a.sent();
                        return [4 /*yield*/, zrxToken.balanceOf.callAsync(makerAddress)];
                    case 11:
                        finalMakerZrxBalance = _a.sent();
                        return [4 /*yield*/, erc20TokenA.balanceOf.callAsync(takerAddress)];
                    case 12:
                        finalTakerBalanceA = _a.sent();
                        return [4 /*yield*/, erc20TokenB.balanceOf.callAsync(takerAddress)];
                    case 13:
                        finalTakerBalanceB = _a.sent();
                        return [4 /*yield*/, zrxToken.balanceOf.callAsync(takerAddress)];
                    case 14:
                        finalTakerZrxBalance = _a.sent();
                        expect(finalMakerBalanceA).to.be.bignumber.equal(initialMakerBalanceA.minus(makerAmounts[0].times(makerAssetAmount)));
                        expect(finalMakerBalanceB).to.be.bignumber.equal(initialMakerBalanceB.minus(makerAmounts[1].times(makerAssetAmount)));
                        expect(finalMakerZrxBalance).to.be.bignumber.equal(initialMakerZrxBalance.plus(takerAssetAmount));
                        expect(finalTakerBalanceA).to.be.bignumber.equal(initialTakerBalanceA.plus(makerAmounts[0].times(makerAssetAmount)));
                        expect(finalTakerBalanceB).to.be.bignumber.equal(initialTakerBalanceB.plus(makerAmounts[1].times(makerAssetAmount)));
                        expect(finalTakerZrxBalance).to.be.bignumber.equal(initialTakerZrxBalance.minus(takerAssetAmount));
                        return [2 /*return*/];
                }
            });
        }); });
        it('should allow multiple assets to be exchanged for multiple assets', function () { return __awaiter(_this, void 0, void 0, function () {
            var makerAmounts, makerNestedAssetData, makerAssetData, makerAssetAmount, takerAmounts, takerAssetId, takerNestedAssetData, takerAssetData, takerAssetAmount, initialMakerBalanceA, initialMakerBalanceB, initialMakerZrxBalance, initialTakerBalanceA, initialTakerBalanceB, initialTakerZrxBalance, initialOwnerTakerAsset, finalMakerBalanceA, finalMakerBalanceB, finalMakerZrxBalance, finalTakerBalanceA, finalTakerBalanceB, finalTakerZrxBalance, finalOwnerTakerAsset;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        makerAmounts = [new utils_1.BigNumber(10), new utils_1.BigNumber(20)];
                        makerNestedAssetData = [
                            order_utils_1.assetDataUtils.encodeERC20AssetData(erc20TokenA.address),
                            order_utils_1.assetDataUtils.encodeERC20AssetData(erc20TokenB.address),
                        ];
                        makerAssetData = order_utils_1.assetDataUtils.encodeMultiAssetData(makerAmounts, makerNestedAssetData);
                        makerAssetAmount = new utils_1.BigNumber(1);
                        takerAmounts = [new utils_1.BigNumber(10), new utils_1.BigNumber(1)];
                        takerAssetId = erc721TakerAssetIds[0];
                        takerNestedAssetData = [
                            order_utils_1.assetDataUtils.encodeERC20AssetData(zrxToken.address),
                            order_utils_1.assetDataUtils.encodeERC721AssetData(erc721Token.address, takerAssetId),
                        ];
                        takerAssetData = order_utils_1.assetDataUtils.encodeMultiAssetData(takerAmounts, takerNestedAssetData);
                        takerAssetAmount = new utils_1.BigNumber(1);
                        return [4 /*yield*/, orderFactory.newSignedOrderAsync({
                                makerAssetData: makerAssetData,
                                takerAssetData: takerAssetData,
                                makerAssetAmount: makerAssetAmount,
                                takerAssetAmount: takerAssetAmount,
                                makerFee: contracts_test_utils_1.constants.ZERO_AMOUNT,
                                takerFee: contracts_test_utils_1.constants.ZERO_AMOUNT,
                            })];
                    case 1:
                        signedOrder = _a.sent();
                        return [4 /*yield*/, erc20TokenA.balanceOf.callAsync(makerAddress)];
                    case 2:
                        initialMakerBalanceA = _a.sent();
                        return [4 /*yield*/, erc20TokenB.balanceOf.callAsync(makerAddress)];
                    case 3:
                        initialMakerBalanceB = _a.sent();
                        return [4 /*yield*/, zrxToken.balanceOf.callAsync(makerAddress)];
                    case 4:
                        initialMakerZrxBalance = _a.sent();
                        return [4 /*yield*/, erc20TokenA.balanceOf.callAsync(takerAddress)];
                    case 5:
                        initialTakerBalanceA = _a.sent();
                        return [4 /*yield*/, erc20TokenB.balanceOf.callAsync(takerAddress)];
                    case 6:
                        initialTakerBalanceB = _a.sent();
                        return [4 /*yield*/, zrxToken.balanceOf.callAsync(takerAddress)];
                    case 7:
                        initialTakerZrxBalance = _a.sent();
                        return [4 /*yield*/, erc721Token.ownerOf.callAsync(takerAssetId)];
                    case 8:
                        initialOwnerTakerAsset = _a.sent();
                        expect(initialOwnerTakerAsset).to.be.bignumber.equal(takerAddress);
                        return [4 /*yield*/, exchangeWrapper.fillOrderAsync(signedOrder, takerAddress)];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, erc20TokenA.balanceOf.callAsync(makerAddress)];
                    case 10:
                        finalMakerBalanceA = _a.sent();
                        return [4 /*yield*/, erc20TokenB.balanceOf.callAsync(makerAddress)];
                    case 11:
                        finalMakerBalanceB = _a.sent();
                        return [4 /*yield*/, zrxToken.balanceOf.callAsync(makerAddress)];
                    case 12:
                        finalMakerZrxBalance = _a.sent();
                        return [4 /*yield*/, erc20TokenA.balanceOf.callAsync(takerAddress)];
                    case 13:
                        finalTakerBalanceA = _a.sent();
                        return [4 /*yield*/, erc20TokenB.balanceOf.callAsync(takerAddress)];
                    case 14:
                        finalTakerBalanceB = _a.sent();
                        return [4 /*yield*/, zrxToken.balanceOf.callAsync(takerAddress)];
                    case 15:
                        finalTakerZrxBalance = _a.sent();
                        return [4 /*yield*/, erc721Token.ownerOf.callAsync(takerAssetId)];
                    case 16:
                        finalOwnerTakerAsset = _a.sent();
                        expect(finalMakerBalanceA).to.be.bignumber.equal(initialMakerBalanceA.minus(makerAmounts[0].times(makerAssetAmount)));
                        expect(finalMakerBalanceB).to.be.bignumber.equal(initialMakerBalanceB.minus(makerAmounts[1].times(makerAssetAmount)));
                        expect(finalMakerZrxBalance).to.be.bignumber.equal(initialMakerZrxBalance.plus(takerAmounts[0].times(takerAssetAmount)));
                        expect(finalTakerBalanceA).to.be.bignumber.equal(initialTakerBalanceA.plus(makerAmounts[0].times(makerAssetAmount)));
                        expect(finalTakerBalanceB).to.be.bignumber.equal(initialTakerBalanceB.plus(makerAmounts[1].times(makerAssetAmount)));
                        expect(finalTakerZrxBalance).to.be.bignumber.equal(initialTakerZrxBalance.minus(takerAmounts[0].times(takerAssetAmount)));
                        expect(finalOwnerTakerAsset).to.be.equal(makerAddress);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should allow an order selling multiple assets to be partially filled', function () { return __awaiter(_this, void 0, void 0, function () {
            var makerAmounts, makerNestedAssetData, makerAssetData, makerAssetAmount, takerAssetData, takerAssetAmount, initialMakerBalanceA, initialMakerBalanceB, initialMakerZrxBalance, initialTakerBalanceA, initialTakerBalanceB, initialTakerZrxBalance, takerAssetFillAmount, finalMakerBalanceA, finalMakerBalanceB, finalMakerZrxBalance, finalTakerBalanceA, finalTakerBalanceB, finalTakerZrxBalance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        makerAmounts = [new utils_1.BigNumber(10), new utils_1.BigNumber(20)];
                        makerNestedAssetData = [
                            order_utils_1.assetDataUtils.encodeERC20AssetData(erc20TokenA.address),
                            order_utils_1.assetDataUtils.encodeERC20AssetData(erc20TokenB.address),
                        ];
                        makerAssetData = order_utils_1.assetDataUtils.encodeMultiAssetData(makerAmounts, makerNestedAssetData);
                        makerAssetAmount = new utils_1.BigNumber(30);
                        takerAssetData = order_utils_1.assetDataUtils.encodeERC20AssetData(zrxToken.address);
                        takerAssetAmount = new utils_1.BigNumber(10);
                        return [4 /*yield*/, orderFactory.newSignedOrderAsync({
                                makerAssetData: makerAssetData,
                                takerAssetData: takerAssetData,
                                makerAssetAmount: makerAssetAmount,
                                takerAssetAmount: takerAssetAmount,
                                makerFee: contracts_test_utils_1.constants.ZERO_AMOUNT,
                                takerFee: contracts_test_utils_1.constants.ZERO_AMOUNT,
                            })];
                    case 1:
                        signedOrder = _a.sent();
                        return [4 /*yield*/, erc20TokenA.balanceOf.callAsync(makerAddress)];
                    case 2:
                        initialMakerBalanceA = _a.sent();
                        return [4 /*yield*/, erc20TokenB.balanceOf.callAsync(makerAddress)];
                    case 3:
                        initialMakerBalanceB = _a.sent();
                        return [4 /*yield*/, zrxToken.balanceOf.callAsync(makerAddress)];
                    case 4:
                        initialMakerZrxBalance = _a.sent();
                        return [4 /*yield*/, erc20TokenA.balanceOf.callAsync(takerAddress)];
                    case 5:
                        initialTakerBalanceA = _a.sent();
                        return [4 /*yield*/, erc20TokenB.balanceOf.callAsync(takerAddress)];
                    case 6:
                        initialTakerBalanceB = _a.sent();
                        return [4 /*yield*/, zrxToken.balanceOf.callAsync(takerAddress)];
                    case 7:
                        initialTakerZrxBalance = _a.sent();
                        takerAssetFillAmount = takerAssetAmount.dividedToIntegerBy(2);
                        return [4 /*yield*/, exchangeWrapper.fillOrderAsync(signedOrder, takerAddress, {
                                takerAssetFillAmount: takerAssetFillAmount,
                            })];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, erc20TokenA.balanceOf.callAsync(makerAddress)];
                    case 9:
                        finalMakerBalanceA = _a.sent();
                        return [4 /*yield*/, erc20TokenB.balanceOf.callAsync(makerAddress)];
                    case 10:
                        finalMakerBalanceB = _a.sent();
                        return [4 /*yield*/, zrxToken.balanceOf.callAsync(makerAddress)];
                    case 11:
                        finalMakerZrxBalance = _a.sent();
                        return [4 /*yield*/, erc20TokenA.balanceOf.callAsync(takerAddress)];
                    case 12:
                        finalTakerBalanceA = _a.sent();
                        return [4 /*yield*/, erc20TokenB.balanceOf.callAsync(takerAddress)];
                    case 13:
                        finalTakerBalanceB = _a.sent();
                        return [4 /*yield*/, zrxToken.balanceOf.callAsync(takerAddress)];
                    case 14:
                        finalTakerZrxBalance = _a.sent();
                        expect(finalMakerBalanceA).to.be.bignumber.equal(initialMakerBalanceA.minus(makerAmounts[0].times(makerAssetAmount.times(takerAssetFillAmount).dividedToIntegerBy(takerAssetAmount))));
                        expect(finalMakerBalanceB).to.be.bignumber.equal(initialMakerBalanceB.minus(makerAmounts[1].times(makerAssetAmount.times(takerAssetFillAmount).dividedToIntegerBy(takerAssetAmount))));
                        expect(finalMakerZrxBalance).to.be.bignumber.equal(initialMakerZrxBalance.plus(takerAssetAmount.times(takerAssetFillAmount).dividedToIntegerBy(takerAssetAmount)));
                        expect(finalTakerBalanceA).to.be.bignumber.equal(initialTakerBalanceA.plus(makerAmounts[0].times(makerAssetAmount.times(takerAssetFillAmount).dividedToIntegerBy(takerAssetAmount))));
                        expect(finalTakerBalanceB).to.be.bignumber.equal(initialTakerBalanceB.plus(makerAmounts[1].times(makerAssetAmount.times(takerAssetFillAmount).dividedToIntegerBy(takerAssetAmount))));
                        expect(finalTakerZrxBalance).to.be.bignumber.equal(initialTakerZrxBalance.minus(takerAssetAmount.times(takerAssetFillAmount).dividedToIntegerBy(takerAssetAmount)));
                        return [2 /*return*/];
                }
            });
        }); });
        it('should allow an order buying multiple assets to be partially filled', function () { return __awaiter(_this, void 0, void 0, function () {
            var takerAmounts, takerNestedAssetData, takerAssetData, takerAssetAmount, makerAssetData, makerAssetAmount, initialMakerBalanceA, initialMakerBalanceB, initialMakerZrxBalance, initialTakerBalanceA, initialTakerBalanceB, initialTakerZrxBalance, takerAssetFillAmount, finalMakerBalanceA, finalMakerBalanceB, finalMakerZrxBalance, finalTakerBalanceA, finalTakerBalanceB, finalTakerZrxBalance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        takerAmounts = [new utils_1.BigNumber(10), new utils_1.BigNumber(20)];
                        takerNestedAssetData = [
                            order_utils_1.assetDataUtils.encodeERC20AssetData(erc20TokenA.address),
                            order_utils_1.assetDataUtils.encodeERC20AssetData(erc20TokenB.address),
                        ];
                        takerAssetData = order_utils_1.assetDataUtils.encodeMultiAssetData(takerAmounts, takerNestedAssetData);
                        takerAssetAmount = new utils_1.BigNumber(30);
                        makerAssetData = order_utils_1.assetDataUtils.encodeERC20AssetData(zrxToken.address);
                        makerAssetAmount = new utils_1.BigNumber(10);
                        return [4 /*yield*/, orderFactory.newSignedOrderAsync({
                                makerAssetData: makerAssetData,
                                takerAssetData: takerAssetData,
                                makerAssetAmount: makerAssetAmount,
                                takerAssetAmount: takerAssetAmount,
                                makerFee: contracts_test_utils_1.constants.ZERO_AMOUNT,
                                takerFee: contracts_test_utils_1.constants.ZERO_AMOUNT,
                            })];
                    case 1:
                        signedOrder = _a.sent();
                        return [4 /*yield*/, erc20TokenA.balanceOf.callAsync(makerAddress)];
                    case 2:
                        initialMakerBalanceA = _a.sent();
                        return [4 /*yield*/, erc20TokenB.balanceOf.callAsync(makerAddress)];
                    case 3:
                        initialMakerBalanceB = _a.sent();
                        return [4 /*yield*/, zrxToken.balanceOf.callAsync(makerAddress)];
                    case 4:
                        initialMakerZrxBalance = _a.sent();
                        return [4 /*yield*/, erc20TokenA.balanceOf.callAsync(takerAddress)];
                    case 5:
                        initialTakerBalanceA = _a.sent();
                        return [4 /*yield*/, erc20TokenB.balanceOf.callAsync(takerAddress)];
                    case 6:
                        initialTakerBalanceB = _a.sent();
                        return [4 /*yield*/, zrxToken.balanceOf.callAsync(takerAddress)];
                    case 7:
                        initialTakerZrxBalance = _a.sent();
                        takerAssetFillAmount = takerAssetAmount.dividedToIntegerBy(2);
                        return [4 /*yield*/, exchangeWrapper.fillOrderAsync(signedOrder, takerAddress, {
                                takerAssetFillAmount: takerAssetFillAmount,
                            })];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, erc20TokenA.balanceOf.callAsync(makerAddress)];
                    case 9:
                        finalMakerBalanceA = _a.sent();
                        return [4 /*yield*/, erc20TokenB.balanceOf.callAsync(makerAddress)];
                    case 10:
                        finalMakerBalanceB = _a.sent();
                        return [4 /*yield*/, zrxToken.balanceOf.callAsync(makerAddress)];
                    case 11:
                        finalMakerZrxBalance = _a.sent();
                        return [4 /*yield*/, erc20TokenA.balanceOf.callAsync(takerAddress)];
                    case 12:
                        finalTakerBalanceA = _a.sent();
                        return [4 /*yield*/, erc20TokenB.balanceOf.callAsync(takerAddress)];
                    case 13:
                        finalTakerBalanceB = _a.sent();
                        return [4 /*yield*/, zrxToken.balanceOf.callAsync(takerAddress)];
                    case 14:
                        finalTakerZrxBalance = _a.sent();
                        expect(finalMakerBalanceA).to.be.bignumber.equal(initialMakerBalanceA.plus(takerAmounts[0].times(takerAssetAmount.times(takerAssetFillAmount).dividedToIntegerBy(takerAssetAmount))));
                        expect(finalMakerBalanceB).to.be.bignumber.equal(initialMakerBalanceB.plus(takerAmounts[1].times(takerAssetAmount.times(takerAssetFillAmount).dividedToIntegerBy(takerAssetAmount))));
                        expect(finalMakerZrxBalance).to.be.bignumber.equal(initialMakerZrxBalance.minus(makerAssetAmount.times(takerAssetFillAmount).dividedToIntegerBy(takerAssetAmount)));
                        expect(finalTakerBalanceA).to.be.bignumber.equal(initialTakerBalanceA.minus(takerAmounts[0].times(takerAssetAmount.times(takerAssetFillAmount).dividedToIntegerBy(takerAssetAmount))));
                        expect(finalTakerBalanceB).to.be.bignumber.equal(initialTakerBalanceB.minus(takerAmounts[1].times(takerAssetAmount.times(takerAssetFillAmount).dividedToIntegerBy(takerAssetAmount))));
                        expect(finalTakerZrxBalance).to.be.bignumber.equal(initialTakerZrxBalance.plus(makerAssetAmount.times(takerAssetFillAmount).dividedToIntegerBy(takerAssetAmount)));
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('Testing exchange of erc1155 assets', function () {
        it('should allow a single fungible erc1155 asset to be exchanged for another', function () { return __awaiter(_this, void 0, void 0, function () {
            var tokenHolders, makerAssetsToTransfer, takerAssetsToTransfer, makerValuesToTransfer, takerValuesToTransfer, tokensToTransfer, makerAssetAmount, takerAssetAmount, totalMakerValuesTransferred, totalTakerValuesTransferred, receiverCallbackData, makerAssetData, takerAssetData, takerAssetFillAmount, expectedInitialBalances, expectedFinalBalances;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tokenHolders = [makerAddress, takerAddress];
                        makerAssetsToTransfer = erc1155FungibleTokens.slice(0, 1);
                        takerAssetsToTransfer = erc1155FungibleTokens.slice(1, 2);
                        makerValuesToTransfer = [new utils_1.BigNumber(500)];
                        takerValuesToTransfer = [new utils_1.BigNumber(200)];
                        tokensToTransfer = makerAssetsToTransfer.concat(takerAssetsToTransfer);
                        makerAssetAmount = new utils_1.BigNumber(1);
                        takerAssetAmount = new utils_1.BigNumber(1);
                        totalMakerValuesTransferred = _.map(makerValuesToTransfer, function (value) {
                            return value.times(makerAssetAmount);
                        });
                        totalTakerValuesTransferred = _.map(takerValuesToTransfer, function (value) {
                            return value.times(takerAssetAmount);
                        });
                        receiverCallbackData = '0x';
                        makerAssetData = order_utils_1.assetDataUtils.encodeERC1155AssetData(erc1155Contract.address, makerAssetsToTransfer, makerValuesToTransfer, receiverCallbackData);
                        takerAssetData = order_utils_1.assetDataUtils.encodeERC1155AssetData(erc1155Contract.address, takerAssetsToTransfer, takerValuesToTransfer, receiverCallbackData);
                        return [4 /*yield*/, orderFactory.newSignedOrderAsync({
                                makerAssetData: makerAssetData,
                                takerAssetData: takerAssetData,
                                makerAssetAmount: makerAssetAmount,
                                takerAssetAmount: takerAssetAmount,
                                makerFee: contracts_test_utils_1.constants.ZERO_AMOUNT,
                                takerFee: contracts_test_utils_1.constants.ZERO_AMOUNT,
                            })];
                    case 1:
                        signedOrder = _a.sent();
                        takerAssetFillAmount = new utils_1.BigNumber(1);
                        expectedInitialBalances = [
                            // makerAddress / makerToken
                            contracts_test_utils_1.constants.INITIAL_ERC1155_FUNGIBLE_BALANCE,
                            // makerAddress / takerToken
                            contracts_test_utils_1.constants.INITIAL_ERC1155_FUNGIBLE_BALANCE,
                            // takerAddress / makerToken
                            contracts_test_utils_1.constants.INITIAL_ERC1155_FUNGIBLE_BALANCE,
                            // takerAddress / takerToken
                            contracts_test_utils_1.constants.INITIAL_ERC1155_FUNGIBLE_BALANCE,
                        ];
                        return [4 /*yield*/, erc1155Wrapper.assertBalancesAsync(tokenHolders, tokensToTransfer, expectedInitialBalances)];
                    case 2:
                        _a.sent();
                        // execute transfer
                        return [4 /*yield*/, exchangeWrapper.fillOrderAsync(signedOrder, takerAddress, {
                                takerAssetFillAmount: takerAssetFillAmount,
                            })];
                    case 3:
                        // execute transfer
                        _a.sent();
                        expectedFinalBalances = [
                            // makerAddress / makerToken
                            expectedInitialBalances[0].minus(totalMakerValuesTransferred[0]),
                            // makerAddress / takerToken
                            expectedInitialBalances[1].plus(totalTakerValuesTransferred[0]),
                            // takerAddress / makerToken
                            expectedInitialBalances[2].plus(totalMakerValuesTransferred[0]),
                            // takerAddress / takerToken
                            expectedInitialBalances[3].minus(totalTakerValuesTransferred[0]),
                        ];
                        return [4 /*yield*/, erc1155Wrapper.assertBalancesAsync(tokenHolders, tokensToTransfer, expectedFinalBalances)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should allow a single non-fungible erc1155 asset to be exchanged for another', function () { return __awaiter(_this, void 0, void 0, function () {
            var tokenHolders, makerAssetsToTransfer, takerAssetsToTransfer, makerValuesToTransfer, takerValuesToTransfer, tokensToTransfer, makerAssetAmount, takerAssetAmount, totalMakerValuesTransferred, totalTakerValuesTransferred, receiverCallbackData, makerAssetData, takerAssetData, takerAssetFillAmount, nftOwnerBalance, nftNotOwnerBalance, expectedInitialBalances, expectedFinalBalances;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tokenHolders = [makerAddress, takerAddress];
                        makerAssetsToTransfer = erc1155NonFungibleTokensOwnedByMaker.slice(0, 1);
                        takerAssetsToTransfer = erc1155NonFungibleTokensOwnedByTaker.slice(0, 1);
                        makerValuesToTransfer = [new utils_1.BigNumber(1)];
                        takerValuesToTransfer = [new utils_1.BigNumber(1)];
                        tokensToTransfer = makerAssetsToTransfer.concat(takerAssetsToTransfer);
                        makerAssetAmount = new utils_1.BigNumber(1);
                        takerAssetAmount = new utils_1.BigNumber(1);
                        totalMakerValuesTransferred = _.map(makerValuesToTransfer, function (value) {
                            return value.times(makerAssetAmount);
                        });
                        totalTakerValuesTransferred = _.map(takerValuesToTransfer, function (value) {
                            return value.times(takerAssetAmount);
                        });
                        receiverCallbackData = '0x';
                        makerAssetData = order_utils_1.assetDataUtils.encodeERC1155AssetData(erc1155Contract.address, makerAssetsToTransfer, makerValuesToTransfer, receiverCallbackData);
                        takerAssetData = order_utils_1.assetDataUtils.encodeERC1155AssetData(erc1155Contract.address, takerAssetsToTransfer, takerValuesToTransfer, receiverCallbackData);
                        return [4 /*yield*/, orderFactory.newSignedOrderAsync({
                                makerAssetData: makerAssetData,
                                takerAssetData: takerAssetData,
                                makerAssetAmount: makerAssetAmount,
                                takerAssetAmount: takerAssetAmount,
                                makerFee: contracts_test_utils_1.constants.ZERO_AMOUNT,
                                takerFee: contracts_test_utils_1.constants.ZERO_AMOUNT,
                            })];
                    case 1:
                        signedOrder = _a.sent();
                        takerAssetFillAmount = new utils_1.BigNumber(1);
                        nftOwnerBalance = new utils_1.BigNumber(1);
                        nftNotOwnerBalance = new utils_1.BigNumber(0);
                        expectedInitialBalances = [
                            // makerAddress / makerToken
                            nftOwnerBalance,
                            // makerAddress / takerToken
                            nftNotOwnerBalance,
                            // takerAddress / makerToken
                            nftNotOwnerBalance,
                            // takerAddress / takerToken
                            nftOwnerBalance,
                        ];
                        return [4 /*yield*/, erc1155Wrapper.assertBalancesAsync(tokenHolders, tokensToTransfer, expectedInitialBalances)];
                    case 2:
                        _a.sent();
                        // execute transfer
                        return [4 /*yield*/, exchangeWrapper.fillOrderAsync(signedOrder, takerAddress, {
                                takerAssetFillAmount: takerAssetFillAmount,
                            })];
                    case 3:
                        // execute transfer
                        _a.sent();
                        expectedFinalBalances = [
                            // makerAddress / makerToken
                            expectedInitialBalances[0].minus(totalMakerValuesTransferred[0]),
                            // makerAddress / takerToken
                            expectedInitialBalances[1].plus(totalTakerValuesTransferred[0]),
                            // takerAddress / makerToken
                            expectedInitialBalances[2].plus(totalMakerValuesTransferred[0]),
                            // takerAddress / takerToken
                            expectedInitialBalances[3].minus(totalTakerValuesTransferred[0]),
                        ];
                        return [4 /*yield*/, erc1155Wrapper.assertBalancesAsync(tokenHolders, tokensToTransfer, expectedFinalBalances)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should allow multiple erc1155 assets to be exchanged for a single asset', function () { return __awaiter(_this, void 0, void 0, function () {
            var tokenHolders, makerAssetsToTransfer, takerAssetsToTransfer, makerValuesToTransfer, takerValuesToTransfer, tokensToTransfer, makerAssetAmount, takerAssetAmount, totalMakerValuesTransferred, totalTakerValuesTransferred, receiverCallbackData, makerAssetData, takerAssetData, takerAssetFillAmount, nftOwnerBalance, nftNotOwnerBalance, expectedInitialBalances, expectedFinalBalances;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tokenHolders = [makerAddress, takerAddress];
                        makerAssetsToTransfer = erc1155FungibleTokens.slice(0, 3);
                        takerAssetsToTransfer = erc1155NonFungibleTokensOwnedByTaker.slice(0, 1);
                        makerValuesToTransfer = [new utils_1.BigNumber(500), new utils_1.BigNumber(700), new utils_1.BigNumber(900)];
                        takerValuesToTransfer = [new utils_1.BigNumber(1)];
                        tokensToTransfer = makerAssetsToTransfer.concat(takerAssetsToTransfer);
                        makerAssetAmount = new utils_1.BigNumber(1);
                        takerAssetAmount = new utils_1.BigNumber(1);
                        totalMakerValuesTransferred = _.map(makerValuesToTransfer, function (value) {
                            return value.times(makerAssetAmount);
                        });
                        totalTakerValuesTransferred = _.map(takerValuesToTransfer, function (value) {
                            return value.times(takerAssetAmount);
                        });
                        receiverCallbackData = '0x';
                        makerAssetData = order_utils_1.assetDataUtils.encodeERC1155AssetData(erc1155Contract.address, makerAssetsToTransfer, makerValuesToTransfer, receiverCallbackData);
                        takerAssetData = order_utils_1.assetDataUtils.encodeERC1155AssetData(erc1155Contract.address, takerAssetsToTransfer, takerValuesToTransfer, receiverCallbackData);
                        return [4 /*yield*/, orderFactory.newSignedOrderAsync({
                                makerAssetData: makerAssetData,
                                takerAssetData: takerAssetData,
                                makerAssetAmount: makerAssetAmount,
                                takerAssetAmount: takerAssetAmount,
                                makerFee: contracts_test_utils_1.constants.ZERO_AMOUNT,
                                takerFee: contracts_test_utils_1.constants.ZERO_AMOUNT,
                            })];
                    case 1:
                        signedOrder = _a.sent();
                        takerAssetFillAmount = new utils_1.BigNumber(1);
                        nftOwnerBalance = new utils_1.BigNumber(1);
                        nftNotOwnerBalance = new utils_1.BigNumber(0);
                        expectedInitialBalances = [
                            // makerAddress / makerToken[0]
                            contracts_test_utils_1.constants.INITIAL_ERC1155_FUNGIBLE_BALANCE,
                            // makerAddress / makerToken[1]
                            contracts_test_utils_1.constants.INITIAL_ERC1155_FUNGIBLE_BALANCE,
                            // makerAddress / makerToken[2]
                            contracts_test_utils_1.constants.INITIAL_ERC1155_FUNGIBLE_BALANCE,
                            // makerAddress / takerToken
                            nftNotOwnerBalance,
                            // takerAddress / makerToken[0]
                            contracts_test_utils_1.constants.INITIAL_ERC1155_FUNGIBLE_BALANCE,
                            // takerAddress / makerToken[1]
                            contracts_test_utils_1.constants.INITIAL_ERC1155_FUNGIBLE_BALANCE,
                            // takerAddress / makerToken[2]
                            contracts_test_utils_1.constants.INITIAL_ERC1155_FUNGIBLE_BALANCE,
                            // takerAddress / takerToken
                            nftOwnerBalance,
                        ];
                        return [4 /*yield*/, erc1155Wrapper.assertBalancesAsync(tokenHolders, tokensToTransfer, expectedInitialBalances)];
                    case 2:
                        _a.sent();
                        // execute transfer
                        return [4 /*yield*/, exchangeWrapper.fillOrderAsync(signedOrder, takerAddress, {
                                takerAssetFillAmount: takerAssetFillAmount,
                            })];
                    case 3:
                        // execute transfer
                        _a.sent();
                        expectedFinalBalances = [
                            // makerAddress / makerToken[0]
                            expectedInitialBalances[0].minus(totalMakerValuesTransferred[0]),
                            // makerAddress / makerToken[1]
                            expectedInitialBalances[1].minus(totalMakerValuesTransferred[1]),
                            // makerAddress / makerToken[2]
                            expectedInitialBalances[2].minus(totalMakerValuesTransferred[2]),
                            // makerAddress / takerToken
                            expectedInitialBalances[3].plus(totalTakerValuesTransferred[0]),
                            // takerAddress / makerToken[0]
                            expectedInitialBalances[4].plus(totalMakerValuesTransferred[0]),
                            // takerAddress / makerToken[1]
                            expectedInitialBalances[5].plus(totalMakerValuesTransferred[1]),
                            // takerAddress / makerToken[2]
                            expectedInitialBalances[6].plus(totalMakerValuesTransferred[2]),
                            // takerAddress / takerToken
                            expectedInitialBalances[7].minus(totalTakerValuesTransferred[0]),
                        ];
                        return [4 /*yield*/, erc1155Wrapper.assertBalancesAsync(tokenHolders, tokensToTransfer, expectedFinalBalances)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should allow multiple erc1155 assets to be exchanged for multiple erc1155 assets, mixed fungible/non-fungible', function () { return __awaiter(_this, void 0, void 0, function () {
            var tokenHolders, makerFungibleAssetsToTransfer, makerNonFungibleAssetsToTransfer, makerAssetsToTransfer, takerFungibleAssetsToTransfer, takerNonFungibleAssetsToTransfer, takerAssetsToTransfer, makerValuesToTransfer, takerValuesToTransfer, tokensToTransfer, makerAssetAmount, takerAssetAmount, totalMakerValuesTransferred, totalTakerValuesTransferred, receiverCallbackData, makerAssetData, takerAssetData, takerAssetFillAmount, nftOwnerBalance, nftNotOwnerBalance, expectedInitialBalances, expectedFinalBalances;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tokenHolders = [makerAddress, takerAddress];
                        makerFungibleAssetsToTransfer = erc1155FungibleTokens.slice(0, 2);
                        makerNonFungibleAssetsToTransfer = erc1155NonFungibleTokensOwnedByMaker.slice(0, 1);
                        makerAssetsToTransfer = makerFungibleAssetsToTransfer.concat(makerNonFungibleAssetsToTransfer);
                        takerFungibleAssetsToTransfer = erc1155FungibleTokens.slice(2, 3);
                        takerNonFungibleAssetsToTransfer = erc1155NonFungibleTokensOwnedByTaker.slice(0, 2);
                        takerAssetsToTransfer = takerFungibleAssetsToTransfer.concat(takerNonFungibleAssetsToTransfer);
                        makerValuesToTransfer = [new utils_1.BigNumber(500), new utils_1.BigNumber(700), new utils_1.BigNumber(1)];
                        takerValuesToTransfer = [new utils_1.BigNumber(900), new utils_1.BigNumber(1), new utils_1.BigNumber(1)];
                        tokensToTransfer = makerAssetsToTransfer.concat(takerAssetsToTransfer);
                        makerAssetAmount = new utils_1.BigNumber(1);
                        takerAssetAmount = new utils_1.BigNumber(1);
                        totalMakerValuesTransferred = _.map(makerValuesToTransfer, function (value) {
                            return value.times(makerAssetAmount);
                        });
                        totalTakerValuesTransferred = _.map(takerValuesToTransfer, function (value) {
                            return value.times(takerAssetAmount);
                        });
                        receiverCallbackData = '0x';
                        makerAssetData = order_utils_1.assetDataUtils.encodeERC1155AssetData(erc1155Contract.address, makerAssetsToTransfer, makerValuesToTransfer, receiverCallbackData);
                        takerAssetData = order_utils_1.assetDataUtils.encodeERC1155AssetData(erc1155Contract.address, takerAssetsToTransfer, takerValuesToTransfer, receiverCallbackData);
                        return [4 /*yield*/, orderFactory.newSignedOrderAsync({
                                makerAssetData: makerAssetData,
                                takerAssetData: takerAssetData,
                                makerAssetAmount: makerAssetAmount,
                                takerAssetAmount: takerAssetAmount,
                                makerFee: contracts_test_utils_1.constants.ZERO_AMOUNT,
                                takerFee: contracts_test_utils_1.constants.ZERO_AMOUNT,
                            })];
                    case 1:
                        signedOrder = _a.sent();
                        takerAssetFillAmount = new utils_1.BigNumber(1);
                        nftOwnerBalance = new utils_1.BigNumber(1);
                        nftNotOwnerBalance = new utils_1.BigNumber(0);
                        expectedInitialBalances = [
                            // makerAddress / makerToken[0]
                            contracts_test_utils_1.constants.INITIAL_ERC1155_FUNGIBLE_BALANCE,
                            // makerAddress / makerToken[1]
                            contracts_test_utils_1.constants.INITIAL_ERC1155_FUNGIBLE_BALANCE,
                            // makerAddress / makerToken[2]
                            nftOwnerBalance,
                            // makerAddress / takerToken[0]
                            contracts_test_utils_1.constants.INITIAL_ERC1155_FUNGIBLE_BALANCE,
                            // makerAddress / takerToken[1]
                            nftNotOwnerBalance,
                            // makerAddress / takerToken[2]
                            nftNotOwnerBalance,
                            // takerAddress / makerToken[0]
                            contracts_test_utils_1.constants.INITIAL_ERC1155_FUNGIBLE_BALANCE,
                            // takerAddress / makerToken[1]
                            contracts_test_utils_1.constants.INITIAL_ERC1155_FUNGIBLE_BALANCE,
                            // takerAddress / makerToken[2]
                            nftNotOwnerBalance,
                            // takerAddress / takerToken[0]
                            contracts_test_utils_1.constants.INITIAL_ERC1155_FUNGIBLE_BALANCE,
                            // takerAddress / takerToken[1]
                            nftOwnerBalance,
                            // takerAddress / takerToken[2]
                            nftOwnerBalance,
                        ];
                        return [4 /*yield*/, erc1155Wrapper.assertBalancesAsync(tokenHolders, tokensToTransfer, expectedInitialBalances)];
                    case 2:
                        _a.sent();
                        // execute transfer
                        return [4 /*yield*/, exchangeWrapper.fillOrderAsync(signedOrder, takerAddress, {
                                takerAssetFillAmount: takerAssetFillAmount,
                            })];
                    case 3:
                        // execute transfer
                        _a.sent();
                        expectedFinalBalances = [
                            // makerAddress / makerToken[0]
                            expectedInitialBalances[0].minus(totalMakerValuesTransferred[0]),
                            // makerAddress / makerToken[1]
                            expectedInitialBalances[1].minus(totalMakerValuesTransferred[1]),
                            // makerAddress / makerToken[2]
                            expectedInitialBalances[2].minus(totalMakerValuesTransferred[2]),
                            // makerAddress / takerToken[0]
                            expectedInitialBalances[3].plus(totalTakerValuesTransferred[0]),
                            // makerAddress / takerToken[1]
                            expectedInitialBalances[4].plus(totalTakerValuesTransferred[1]),
                            // makerAddress / takerToken[2]
                            expectedInitialBalances[5].plus(totalTakerValuesTransferred[2]),
                            // takerAddress / makerToken[0]
                            expectedInitialBalances[6].plus(totalMakerValuesTransferred[0]),
                            // takerAddress / makerToken[1]
                            expectedInitialBalances[7].plus(totalMakerValuesTransferred[1]),
                            // takerAddress / makerToken[2]
                            expectedInitialBalances[8].plus(totalMakerValuesTransferred[2]),
                            // takerAddress / takerToken[0]
                            expectedInitialBalances[9].minus(totalTakerValuesTransferred[0]),
                            // takerAddress / takerToken[1]
                            expectedInitialBalances[10].minus(totalTakerValuesTransferred[1]),
                            // takerAddress / takerToken[2]
                            expectedInitialBalances[11].minus(totalTakerValuesTransferred[2]),
                        ];
                        return [4 /*yield*/, erc1155Wrapper.assertBalancesAsync(tokenHolders, tokensToTransfer, expectedFinalBalances)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should allow an order exchanging erc1155 assets to be partially filled', function () { return __awaiter(_this, void 0, void 0, function () {
            var takerAssetFillAmount, tokenHolders, makerAssetsToTransfer, takerAssetsToTransfer, makerValuesToTransfer, takerValuesToTransfer, tokensToTransfer, makerAssetAmount, takerAssetAmount, totalMakerValuesTransferred, totalTakerValuesTransferred, receiverCallbackData, makerAssetData, takerAssetData, expectedInitialBalances, expectedFinalBalances, orderInfo, expectedOrderHash, expectedTakerAssetFilledAmount, expectedOrderStatus;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        takerAssetFillAmount = new utils_1.BigNumber(6);
                        tokenHolders = [makerAddress, takerAddress];
                        makerAssetsToTransfer = erc1155FungibleTokens.slice(0, 2);
                        takerAssetsToTransfer = erc1155FungibleTokens.slice(2, 3);
                        makerValuesToTransfer = [new utils_1.BigNumber(500), new utils_1.BigNumber(700)];
                        takerValuesToTransfer = [new utils_1.BigNumber(900)];
                        tokensToTransfer = makerAssetsToTransfer.concat(takerAssetsToTransfer);
                        makerAssetAmount = new utils_1.BigNumber(10);
                        takerAssetAmount = new utils_1.BigNumber(20);
                        totalMakerValuesTransferred = _.map(makerValuesToTransfer, function (value) {
                            return value
                                .times(makerAssetAmount)
                                .times(takerAssetFillAmount)
                                .dividedToIntegerBy(takerAssetAmount);
                        });
                        totalTakerValuesTransferred = _.map(takerValuesToTransfer, function (value) {
                            return value
                                .times(takerAssetAmount)
                                .times(takerAssetFillAmount)
                                .dividedToIntegerBy(takerAssetAmount);
                        });
                        receiverCallbackData = '0x';
                        makerAssetData = order_utils_1.assetDataUtils.encodeERC1155AssetData(erc1155Contract.address, makerAssetsToTransfer, makerValuesToTransfer, receiverCallbackData);
                        takerAssetData = order_utils_1.assetDataUtils.encodeERC1155AssetData(erc1155Contract.address, takerAssetsToTransfer, takerValuesToTransfer, receiverCallbackData);
                        return [4 /*yield*/, orderFactory.newSignedOrderAsync({
                                makerAssetData: makerAssetData,
                                takerAssetData: takerAssetData,
                                makerAssetAmount: makerAssetAmount,
                                takerAssetAmount: takerAssetAmount,
                                makerFee: contracts_test_utils_1.constants.ZERO_AMOUNT,
                                takerFee: contracts_test_utils_1.constants.ZERO_AMOUNT,
                            })];
                    case 1:
                        signedOrder = _a.sent();
                        expectedInitialBalances = [
                            // makerAddress / makerToken[0]
                            contracts_test_utils_1.constants.INITIAL_ERC1155_FUNGIBLE_BALANCE,
                            // makerAddress / makerToken[1]
                            contracts_test_utils_1.constants.INITIAL_ERC1155_FUNGIBLE_BALANCE,
                            // makerAddress / takerToken[0]
                            contracts_test_utils_1.constants.INITIAL_ERC1155_FUNGIBLE_BALANCE,
                            // takerAddress / makerToken[0]
                            contracts_test_utils_1.constants.INITIAL_ERC1155_FUNGIBLE_BALANCE,
                            // takerAddress / makerToken[1]
                            contracts_test_utils_1.constants.INITIAL_ERC1155_FUNGIBLE_BALANCE,
                            // takerAddress / takerToken[0]
                            contracts_test_utils_1.constants.INITIAL_ERC1155_FUNGIBLE_BALANCE,
                        ];
                        return [4 /*yield*/, erc1155Wrapper.assertBalancesAsync(tokenHolders, tokensToTransfer, expectedInitialBalances)];
                    case 2:
                        _a.sent();
                        // execute transfer
                        return [4 /*yield*/, exchangeWrapper.fillOrderAsync(signedOrder, takerAddress, {
                                takerAssetFillAmount: takerAssetFillAmount,
                            })];
                    case 3:
                        // execute transfer
                        _a.sent();
                        expectedFinalBalances = [
                            // makerAddress / makerToken[0]
                            expectedInitialBalances[0].minus(totalMakerValuesTransferred[0]),
                            // makerAddress / makerToken[1]
                            expectedInitialBalances[1].minus(totalMakerValuesTransferred[1]),
                            // makerAddress / takerToken[0]
                            expectedInitialBalances[2].plus(totalTakerValuesTransferred[0]),
                            // takerAddress / makerToken[0]
                            expectedInitialBalances[3].plus(totalMakerValuesTransferred[0]),
                            // takerAddress / makerToken[1]
                            expectedInitialBalances[4].plus(totalMakerValuesTransferred[1]),
                            // takerAddress / takerToken[0]
                            expectedInitialBalances[5].minus(totalTakerValuesTransferred[0]),
                        ];
                        return [4 /*yield*/, erc1155Wrapper.assertBalancesAsync(tokenHolders, tokensToTransfer, expectedFinalBalances)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, exchangeWrapper.getOrderInfoAsync(signedOrder)];
                    case 5:
                        orderInfo = _a.sent();
                        expectedOrderHash = order_utils_1.orderHashUtils.getOrderHashHex(signedOrder);
                        expectedTakerAssetFilledAmount = takerAssetFillAmount;
                        expectedOrderStatus = contracts_test_utils_1.OrderStatus.Fillable;
                        expect(orderInfo.orderHash).to.be.equal(expectedOrderHash);
                        expect(orderInfo.orderTakerAssetFilledAmount).to.be.bignumber.equal(expectedTakerAssetFilledAmount);
                        expect(orderInfo.orderStatus).to.equal(expectedOrderStatus);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('Testing orders that utilize StaticCallProxy', function () {
        before(function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, contracts_asset_proxy_1.TestStaticCallTargetContract.deployFrom0xArtifactAsync(contracts_asset_proxy_1.artifacts.TestStaticCallTarget, contracts_test_utils_1.provider, contracts_test_utils_1.txDefaults)];
                    case 1:
                        staticCallTarget = _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should revert if the staticcall is unsuccessful', function () { return __awaiter(_this, void 0, void 0, function () {
            var staticCallData, assetData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        staticCallData = staticCallTarget.assertEvenNumber.getABIEncodedTransactionData(new utils_1.BigNumber(1));
                        assetData = order_utils_1.assetDataUtils.encodeStaticCallAssetData(staticCallTarget.address, staticCallData, contracts_test_utils_1.constants.KECCAK256_NULL);
                        return [4 /*yield*/, orderFactory.newSignedOrderAsync({ makerAssetData: assetData })];
                    case 1:
                        signedOrder = _a.sent();
                        return [4 /*yield*/, contracts_test_utils_1.expectTransactionFailedAsync(exchangeWrapper.fillOrderAsync(signedOrder, takerAddress), types_1.RevertReason.TargetNotEven)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should fill the order if the staticcall is successful', function () { return __awaiter(_this, void 0, void 0, function () {
            var staticCallData, assetData, initialMakerZrxBalance, initialTakerZrxBalance, initialFeeRecipientZrxBalance, initialMakerBalanceB, initialTakerBalanceB, finalMakerZrxBalance, finalTakerZrxBalance, finalFeeRecipientZrxBalance, finalMakerBalanceB, finalTakerBalanceB;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        staticCallData = staticCallTarget.assertEvenNumber.getABIEncodedTransactionData(contracts_test_utils_1.constants.ZERO_AMOUNT);
                        assetData = order_utils_1.assetDataUtils.encodeStaticCallAssetData(staticCallTarget.address, staticCallData, contracts_test_utils_1.constants.KECCAK256_NULL);
                        return [4 /*yield*/, orderFactory.newSignedOrderAsync({ makerAssetData: assetData })];
                    case 1:
                        signedOrder = _a.sent();
                        return [4 /*yield*/, zrxToken.balanceOf.callAsync(makerAddress)];
                    case 2:
                        initialMakerZrxBalance = _a.sent();
                        return [4 /*yield*/, zrxToken.balanceOf.callAsync(takerAddress)];
                    case 3:
                        initialTakerZrxBalance = _a.sent();
                        return [4 /*yield*/, zrxToken.balanceOf.callAsync(feeRecipientAddress)];
                    case 4:
                        initialFeeRecipientZrxBalance = _a.sent();
                        return [4 /*yield*/, erc20TokenB.balanceOf.callAsync(makerAddress)];
                    case 5:
                        initialMakerBalanceB = _a.sent();
                        return [4 /*yield*/, erc20TokenB.balanceOf.callAsync(takerAddress)];
                    case 6:
                        initialTakerBalanceB = _a.sent();
                        return [4 /*yield*/, exchangeWrapper.fillOrderAsync(signedOrder, takerAddress)];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, zrxToken.balanceOf.callAsync(makerAddress)];
                    case 8:
                        finalMakerZrxBalance = _a.sent();
                        return [4 /*yield*/, zrxToken.balanceOf.callAsync(takerAddress)];
                    case 9:
                        finalTakerZrxBalance = _a.sent();
                        return [4 /*yield*/, zrxToken.balanceOf.callAsync(feeRecipientAddress)];
                    case 10:
                        finalFeeRecipientZrxBalance = _a.sent();
                        return [4 /*yield*/, erc20TokenB.balanceOf.callAsync(makerAddress)];
                    case 11:
                        finalMakerBalanceB = _a.sent();
                        return [4 /*yield*/, erc20TokenB.balanceOf.callAsync(takerAddress)];
                    case 12:
                        finalTakerBalanceB = _a.sent();
                        expect(finalMakerZrxBalance).to.bignumber.equal(initialMakerZrxBalance.minus(signedOrder.makerFee));
                        expect(finalTakerZrxBalance).to.bignumber.equal(initialTakerZrxBalance.minus(signedOrder.takerFee));
                        expect(finalFeeRecipientZrxBalance).to.bignumber.equal(initialFeeRecipientZrxBalance.plus(signedOrder.makerFee).plus(signedOrder.takerFee));
                        expect(finalMakerBalanceB).to.bignumber.equal(initialMakerBalanceB.plus(signedOrder.takerAssetAmount));
                        expect(finalTakerBalanceB).to.bignumber.equal(initialTakerBalanceB.minus(signedOrder.takerAssetAmount));
                        return [2 /*return*/];
                }
            });
        }); });
        it('should revert if the staticcall is unsuccessful using the MultiAssetProxy', function () { return __awaiter(_this, void 0, void 0, function () {
            var staticCallData, staticCallAssetData, assetData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        staticCallData = staticCallTarget.assertEvenNumber.getABIEncodedTransactionData(new utils_1.BigNumber(1));
                        staticCallAssetData = order_utils_1.assetDataUtils.encodeStaticCallAssetData(staticCallTarget.address, staticCallData, contracts_test_utils_1.constants.KECCAK256_NULL);
                        assetData = order_utils_1.assetDataUtils.encodeMultiAssetData([new utils_1.BigNumber(1), new utils_1.BigNumber(1)], [order_utils_1.assetDataUtils.encodeERC20AssetData(defaultMakerAssetAddress), staticCallAssetData]);
                        return [4 /*yield*/, orderFactory.newSignedOrderAsync({ makerAssetData: assetData })];
                    case 1:
                        signedOrder = _a.sent();
                        return [4 /*yield*/, contracts_test_utils_1.expectTransactionFailedAsync(exchangeWrapper.fillOrderAsync(signedOrder, takerAddress), types_1.RevertReason.TargetNotEven)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should fill the order is the staticcall is successful using the MultiAssetProxy', function () { return __awaiter(_this, void 0, void 0, function () {
            var staticCallData, staticCallAssetData, assetData, initialMakerZrxBalance, initialTakerZrxBalance, initialFeeRecipientZrxBalance, initialMakerBalanceA, initialTakerBalanceA, initialMakerBalanceB, initialTakerBalanceB, finalMakerZrxBalance, finalTakerZrxBalance, finalFeeRecipientZrxBalance, finalMakerBalanceA, finalTakerBalanceA, finalMakerBalanceB, finalTakerBalanceB;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        staticCallData = staticCallTarget.assertEvenNumber.getABIEncodedTransactionData(contracts_test_utils_1.constants.ZERO_AMOUNT);
                        staticCallAssetData = order_utils_1.assetDataUtils.encodeStaticCallAssetData(staticCallTarget.address, staticCallData, contracts_test_utils_1.constants.KECCAK256_NULL);
                        assetData = order_utils_1.assetDataUtils.encodeMultiAssetData([new utils_1.BigNumber(1), new utils_1.BigNumber(1)], [order_utils_1.assetDataUtils.encodeERC20AssetData(defaultMakerAssetAddress), staticCallAssetData]);
                        return [4 /*yield*/, orderFactory.newSignedOrderAsync({ makerAssetData: assetData })];
                    case 1:
                        signedOrder = _a.sent();
                        return [4 /*yield*/, zrxToken.balanceOf.callAsync(makerAddress)];
                    case 2:
                        initialMakerZrxBalance = _a.sent();
                        return [4 /*yield*/, zrxToken.balanceOf.callAsync(takerAddress)];
                    case 3:
                        initialTakerZrxBalance = _a.sent();
                        return [4 /*yield*/, zrxToken.balanceOf.callAsync(feeRecipientAddress)];
                    case 4:
                        initialFeeRecipientZrxBalance = _a.sent();
                        return [4 /*yield*/, erc20TokenA.balanceOf.callAsync(makerAddress)];
                    case 5:
                        initialMakerBalanceA = _a.sent();
                        return [4 /*yield*/, erc20TokenA.balanceOf.callAsync(takerAddress)];
                    case 6:
                        initialTakerBalanceA = _a.sent();
                        return [4 /*yield*/, erc20TokenB.balanceOf.callAsync(makerAddress)];
                    case 7:
                        initialMakerBalanceB = _a.sent();
                        return [4 /*yield*/, erc20TokenB.balanceOf.callAsync(takerAddress)];
                    case 8:
                        initialTakerBalanceB = _a.sent();
                        return [4 /*yield*/, exchangeWrapper.fillOrderAsync(signedOrder, takerAddress)];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, zrxToken.balanceOf.callAsync(makerAddress)];
                    case 10:
                        finalMakerZrxBalance = _a.sent();
                        return [4 /*yield*/, zrxToken.balanceOf.callAsync(takerAddress)];
                    case 11:
                        finalTakerZrxBalance = _a.sent();
                        return [4 /*yield*/, zrxToken.balanceOf.callAsync(feeRecipientAddress)];
                    case 12:
                        finalFeeRecipientZrxBalance = _a.sent();
                        return [4 /*yield*/, erc20TokenA.balanceOf.callAsync(makerAddress)];
                    case 13:
                        finalMakerBalanceA = _a.sent();
                        return [4 /*yield*/, erc20TokenA.balanceOf.callAsync(takerAddress)];
                    case 14:
                        finalTakerBalanceA = _a.sent();
                        return [4 /*yield*/, erc20TokenB.balanceOf.callAsync(makerAddress)];
                    case 15:
                        finalMakerBalanceB = _a.sent();
                        return [4 /*yield*/, erc20TokenB.balanceOf.callAsync(takerAddress)];
                    case 16:
                        finalTakerBalanceB = _a.sent();
                        expect(finalMakerZrxBalance).to.bignumber.equal(initialMakerZrxBalance.minus(signedOrder.makerFee));
                        expect(finalTakerZrxBalance).to.bignumber.equal(initialTakerZrxBalance.minus(signedOrder.takerFee));
                        expect(finalFeeRecipientZrxBalance).to.bignumber.equal(initialFeeRecipientZrxBalance.plus(signedOrder.makerFee).plus(signedOrder.takerFee));
                        expect(finalMakerBalanceA).to.bignumber.equal(initialMakerBalanceA.minus(signedOrder.makerAssetAmount));
                        expect(finalTakerBalanceA).to.bignumber.equal(initialTakerBalanceA.plus(signedOrder.makerAssetAmount));
                        expect(finalMakerBalanceB).to.bignumber.equal(initialMakerBalanceB.plus(signedOrder.takerAssetAmount));
                        expect(finalTakerBalanceB).to.bignumber.equal(initialTakerBalanceB.minus(signedOrder.takerAssetAmount));
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('getOrderInfo', function () {
        beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, orderFactory.newSignedOrderAsync()];
                    case 1:
                        signedOrder = _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should return the correct orderInfo for an unfilled valid order', function () { return __awaiter(_this, void 0, void 0, function () {
            var orderInfo, expectedOrderHash, expectedTakerAssetFilledAmount, expectedOrderStatus;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, exchangeWrapper.getOrderInfoAsync(signedOrder)];
                    case 1:
                        orderInfo = _a.sent();
                        expectedOrderHash = order_utils_1.orderHashUtils.getOrderHashHex(signedOrder);
                        expectedTakerAssetFilledAmount = new utils_1.BigNumber(0);
                        expectedOrderStatus = contracts_test_utils_1.OrderStatus.Fillable;
                        expect(orderInfo.orderHash).to.be.equal(expectedOrderHash);
                        expect(orderInfo.orderTakerAssetFilledAmount).to.be.bignumber.equal(expectedTakerAssetFilledAmount);
                        expect(orderInfo.orderStatus).to.equal(expectedOrderStatus);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should return the correct orderInfo for a fully filled order', function () { return __awaiter(_this, void 0, void 0, function () {
            var orderInfo, expectedOrderHash, expectedTakerAssetFilledAmount, expectedOrderStatus;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, exchangeWrapper.fillOrderAsync(signedOrder, takerAddress)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, exchangeWrapper.getOrderInfoAsync(signedOrder)];
                    case 2:
                        orderInfo = _a.sent();
                        expectedOrderHash = order_utils_1.orderHashUtils.getOrderHashHex(signedOrder);
                        expectedTakerAssetFilledAmount = signedOrder.takerAssetAmount;
                        expectedOrderStatus = contracts_test_utils_1.OrderStatus.FullyFilled;
                        expect(orderInfo.orderHash).to.be.equal(expectedOrderHash);
                        expect(orderInfo.orderTakerAssetFilledAmount).to.be.bignumber.equal(expectedTakerAssetFilledAmount);
                        expect(orderInfo.orderStatus).to.equal(expectedOrderStatus);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should return the correct orderInfo for a partially filled order', function () { return __awaiter(_this, void 0, void 0, function () {
            var takerAssetFillAmount, orderInfo, expectedOrderHash, expectedTakerAssetFilledAmount, expectedOrderStatus;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        takerAssetFillAmount = signedOrder.takerAssetAmount.div(2);
                        return [4 /*yield*/, exchangeWrapper.fillOrderAsync(signedOrder, takerAddress, { takerAssetFillAmount: takerAssetFillAmount })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, exchangeWrapper.getOrderInfoAsync(signedOrder)];
                    case 2:
                        orderInfo = _a.sent();
                        expectedOrderHash = order_utils_1.orderHashUtils.getOrderHashHex(signedOrder);
                        expectedTakerAssetFilledAmount = takerAssetFillAmount;
                        expectedOrderStatus = contracts_test_utils_1.OrderStatus.Fillable;
                        expect(orderInfo.orderHash).to.be.equal(expectedOrderHash);
                        expect(orderInfo.orderTakerAssetFilledAmount).to.be.bignumber.equal(expectedTakerAssetFilledAmount);
                        expect(orderInfo.orderStatus).to.equal(expectedOrderStatus);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should return the correct orderInfo for a cancelled and unfilled order', function () { return __awaiter(_this, void 0, void 0, function () {
            var orderInfo, expectedOrderHash, expectedTakerAssetFilledAmount, expectedOrderStatus;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, exchangeWrapper.cancelOrderAsync(signedOrder, makerAddress)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, exchangeWrapper.getOrderInfoAsync(signedOrder)];
                    case 2:
                        orderInfo = _a.sent();
                        expectedOrderHash = order_utils_1.orderHashUtils.getOrderHashHex(signedOrder);
                        expectedTakerAssetFilledAmount = new utils_1.BigNumber(0);
                        expectedOrderStatus = contracts_test_utils_1.OrderStatus.Cancelled;
                        expect(orderInfo.orderHash).to.be.equal(expectedOrderHash);
                        expect(orderInfo.orderTakerAssetFilledAmount).to.be.bignumber.equal(expectedTakerAssetFilledAmount);
                        expect(orderInfo.orderStatus).to.equal(expectedOrderStatus);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should return the correct orderInfo for a cancelled and partially filled order', function () { return __awaiter(_this, void 0, void 0, function () {
            var takerAssetFillAmount, orderInfo, expectedOrderHash, expectedTakerAssetFilledAmount, expectedOrderStatus;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        takerAssetFillAmount = signedOrder.takerAssetAmount.div(2);
                        return [4 /*yield*/, exchangeWrapper.fillOrderAsync(signedOrder, takerAddress, { takerAssetFillAmount: takerAssetFillAmount })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, exchangeWrapper.cancelOrderAsync(signedOrder, makerAddress)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, exchangeWrapper.getOrderInfoAsync(signedOrder)];
                    case 3:
                        orderInfo = _a.sent();
                        expectedOrderHash = order_utils_1.orderHashUtils.getOrderHashHex(signedOrder);
                        expectedTakerAssetFilledAmount = takerAssetFillAmount;
                        expectedOrderStatus = contracts_test_utils_1.OrderStatus.Cancelled;
                        expect(orderInfo.orderHash).to.be.equal(expectedOrderHash);
                        expect(orderInfo.orderTakerAssetFilledAmount).to.be.bignumber.equal(expectedTakerAssetFilledAmount);
                        expect(orderInfo.orderStatus).to.equal(expectedOrderStatus);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should return the correct orderInfo for an expired and unfilled order', function () { return __awaiter(_this, void 0, void 0, function () {
            var currentTimestamp, timeUntilExpiration, orderInfo, expectedOrderHash, expectedTakerAssetFilledAmount, expectedOrderStatus;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, contracts_test_utils_1.getLatestBlockTimestampAsync()];
                    case 1:
                        currentTimestamp = _a.sent();
                        timeUntilExpiration = signedOrder.expirationTimeSeconds.minus(currentTimestamp).toNumber();
                        return [4 /*yield*/, contracts_test_utils_1.increaseTimeAndMineBlockAsync(timeUntilExpiration)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, exchangeWrapper.getOrderInfoAsync(signedOrder)];
                    case 3:
                        orderInfo = _a.sent();
                        expectedOrderHash = order_utils_1.orderHashUtils.getOrderHashHex(signedOrder);
                        expectedTakerAssetFilledAmount = new utils_1.BigNumber(0);
                        expectedOrderStatus = contracts_test_utils_1.OrderStatus.Expired;
                        expect(orderInfo.orderHash).to.be.equal(expectedOrderHash);
                        expect(orderInfo.orderTakerAssetFilledAmount).to.be.bignumber.equal(expectedTakerAssetFilledAmount);
                        expect(orderInfo.orderStatus).to.equal(expectedOrderStatus);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should return the correct orderInfo for an expired and partially filled order', function () { return __awaiter(_this, void 0, void 0, function () {
            var takerAssetFillAmount, currentTimestamp, timeUntilExpiration, orderInfo, expectedOrderHash, expectedTakerAssetFilledAmount, expectedOrderStatus;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        takerAssetFillAmount = signedOrder.takerAssetAmount.div(2);
                        return [4 /*yield*/, exchangeWrapper.fillOrderAsync(signedOrder, takerAddress, { takerAssetFillAmount: takerAssetFillAmount })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, contracts_test_utils_1.getLatestBlockTimestampAsync()];
                    case 2:
                        currentTimestamp = _a.sent();
                        timeUntilExpiration = signedOrder.expirationTimeSeconds.minus(currentTimestamp).toNumber();
                        return [4 /*yield*/, contracts_test_utils_1.increaseTimeAndMineBlockAsync(timeUntilExpiration)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, exchangeWrapper.getOrderInfoAsync(signedOrder)];
                    case 4:
                        orderInfo = _a.sent();
                        expectedOrderHash = order_utils_1.orderHashUtils.getOrderHashHex(signedOrder);
                        expectedTakerAssetFilledAmount = takerAssetFillAmount;
                        expectedOrderStatus = contracts_test_utils_1.OrderStatus.Expired;
                        expect(orderInfo.orderHash).to.be.equal(expectedOrderHash);
                        expect(orderInfo.orderTakerAssetFilledAmount).to.be.bignumber.equal(expectedTakerAssetFilledAmount);
                        expect(orderInfo.orderStatus).to.equal(expectedOrderStatus);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should return the correct orderInfo for an expired and fully filled order', function () { return __awaiter(_this, void 0, void 0, function () {
            var currentTimestamp, timeUntilExpiration, orderInfo, expectedOrderHash, expectedTakerAssetFilledAmount, expectedOrderStatus;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, exchangeWrapper.fillOrderAsync(signedOrder, takerAddress)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, contracts_test_utils_1.getLatestBlockTimestampAsync()];
                    case 2:
                        currentTimestamp = _a.sent();
                        timeUntilExpiration = signedOrder.expirationTimeSeconds.minus(currentTimestamp).toNumber();
                        return [4 /*yield*/, contracts_test_utils_1.increaseTimeAndMineBlockAsync(timeUntilExpiration)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, exchangeWrapper.getOrderInfoAsync(signedOrder)];
                    case 4:
                        orderInfo = _a.sent();
                        expectedOrderHash = order_utils_1.orderHashUtils.getOrderHashHex(signedOrder);
                        expectedTakerAssetFilledAmount = signedOrder.takerAssetAmount;
                        expectedOrderStatus = contracts_test_utils_1.OrderStatus.FullyFilled;
                        expect(orderInfo.orderHash).to.be.equal(expectedOrderHash);
                        expect(orderInfo.orderTakerAssetFilledAmount).to.be.bignumber.equal(expectedTakerAssetFilledAmount);
                        expect(orderInfo.orderStatus).to.equal(expectedOrderStatus);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should return the correct orderInfo for an order with a makerAssetAmount of 0', function () { return __awaiter(_this, void 0, void 0, function () {
            var orderInfo, expectedOrderHash, expectedTakerAssetFilledAmount, expectedOrderStatus;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, orderFactory.newSignedOrderAsync({ makerAssetAmount: new utils_1.BigNumber(0) })];
                    case 1:
                        signedOrder = _a.sent();
                        return [4 /*yield*/, exchangeWrapper.getOrderInfoAsync(signedOrder)];
                    case 2:
                        orderInfo = _a.sent();
                        expectedOrderHash = order_utils_1.orderHashUtils.getOrderHashHex(signedOrder);
                        expectedTakerAssetFilledAmount = new utils_1.BigNumber(0);
                        expectedOrderStatus = contracts_test_utils_1.OrderStatus.InvalidMakerAssetAmount;
                        expect(orderInfo.orderHash).to.be.equal(expectedOrderHash);
                        expect(orderInfo.orderTakerAssetFilledAmount).to.be.bignumber.equal(expectedTakerAssetFilledAmount);
                        expect(orderInfo.orderStatus).to.equal(expectedOrderStatus);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should return the correct orderInfo for an order with a takerAssetAmount of 0', function () { return __awaiter(_this, void 0, void 0, function () {
            var orderInfo, expectedOrderHash, expectedTakerAssetFilledAmount, expectedOrderStatus;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, orderFactory.newSignedOrderAsync({ takerAssetAmount: new utils_1.BigNumber(0) })];
                    case 1:
                        signedOrder = _a.sent();
                        return [4 /*yield*/, exchangeWrapper.getOrderInfoAsync(signedOrder)];
                    case 2:
                        orderInfo = _a.sent();
                        expectedOrderHash = order_utils_1.orderHashUtils.getOrderHashHex(signedOrder);
                        expectedTakerAssetFilledAmount = new utils_1.BigNumber(0);
                        expectedOrderStatus = contracts_test_utils_1.OrderStatus.InvalidTakerAssetAmount;
                        expect(orderInfo.orderHash).to.be.equal(expectedOrderHash);
                        expect(orderInfo.orderTakerAssetFilledAmount).to.be.bignumber.equal(expectedTakerAssetFilledAmount);
                        expect(orderInfo.orderStatus).to.equal(expectedOrderStatus);
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
// tslint:disable:max-file-line-count
// tslint:enable:no-unnecessary-type-assertion
//# sourceMappingURL=core.js.map