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
Object.defineProperty(exports, "__esModule", { value: true });
var contracts_asset_proxy_1 = require("@0x/contracts-asset-proxy");
var contracts_exchange_libs_1 = require("@0x/contracts-exchange-libs");
var contracts_test_utils_1 = require("@0x/contracts-test-utils");
var order_utils_1 = require("@0x/order-utils");
var types_1 = require("@0x/types");
var utils_1 = require("@0x/utils");
var chai = require("chai");
var _ = require("lodash");
require("make-promises-safe");
var src_1 = require("../../src");
var asset_wrapper_1 = require("./asset_wrapper");
var exchange_wrapper_1 = require("./exchange_wrapper");
var order_factory_from_scenario_1 = require("./order_factory_from_scenario");
var simple_asset_balance_and_proxy_allowance_fetcher_1 = require("./simple_asset_balance_and_proxy_allowance_fetcher");
var simple_order_filled_cancelled_fetcher_1 = require("./simple_order_filled_cancelled_fetcher");
contracts_test_utils_1.chaiSetup.configure();
var expect = chai.expect;
/**
 * Instantiates a new instance of FillOrderCombinatorialUtils. Since this method has some
 * required async setup, a factory method is required.
 * @param web3Wrapper Web3Wrapper instance
 * @param txDefaults Default Ethereum tx options
 * @return FillOrderCombinatorialUtils instance
 */
function fillOrderCombinatorialUtilsFactoryAsync(web3Wrapper, txDefaults) {
    return __awaiter(this, void 0, void 0, function () {
        var accounts, userAddresses, _a, ownerAddress, makerAddress, takerAddress, makerPrivateKey, supportedProvider, provider, erc20Wrapper, erc721Wrapper, erc20EighteenDecimalTokenCount, eighteenDecimals, _b, erc20EighteenDecimalTokenA, erc20EighteenDecimalTokenB, zrxToken, zrxAssetData, erc20FiveDecimalTokenCount, fiveDecimals, _c, erc20FiveDecimalTokenA, erc20FiveDecimalTokenB, zeroDecimals, erc20ZeroDecimalTokenCount, _d, erc20ZeroDecimalTokenA, erc20ZeroDecimalTokenB, erc20Proxy, _e, erc721Token, erc721Proxy, erc721Balances, assetWrapper, exchangeContract, exchangeWrapper, _f, _g, _h, _j, orderFactory, testLibsContract, fillOrderCombinatorialUtils;
        return __generator(this, function (_k) {
            switch (_k.label) {
                case 0: return [4 /*yield*/, web3Wrapper.getAvailableAddressesAsync()];
                case 1:
                    accounts = _k.sent();
                    userAddresses = _.slice(accounts, 0, 5);
                    _a = __read(userAddresses, 3), ownerAddress = _a[0], makerAddress = _a[1], takerAddress = _a[2];
                    makerPrivateKey = contracts_test_utils_1.constants.TESTRPC_PRIVATE_KEYS[userAddresses.indexOf(makerAddress)];
                    supportedProvider = web3Wrapper.getProvider();
                    provider = utils_1.providerUtils.standardizeOrThrow(supportedProvider);
                    erc20Wrapper = new contracts_asset_proxy_1.ERC20Wrapper(provider, userAddresses, ownerAddress);
                    erc721Wrapper = new contracts_asset_proxy_1.ERC721Wrapper(provider, userAddresses, ownerAddress);
                    erc20EighteenDecimalTokenCount = 3;
                    eighteenDecimals = new utils_1.BigNumber(18);
                    return [4 /*yield*/, erc20Wrapper.deployDummyTokensAsync(erc20EighteenDecimalTokenCount, eighteenDecimals)];
                case 2:
                    _b = __read.apply(void 0, [_k.sent(), 3]), erc20EighteenDecimalTokenA = _b[0], erc20EighteenDecimalTokenB = _b[1], zrxToken = _b[2];
                    zrxAssetData = order_utils_1.assetDataUtils.encodeERC20AssetData(zrxToken.address);
                    erc20FiveDecimalTokenCount = 2;
                    fiveDecimals = new utils_1.BigNumber(5);
                    return [4 /*yield*/, erc20Wrapper.deployDummyTokensAsync(erc20FiveDecimalTokenCount, fiveDecimals)];
                case 3:
                    _c = __read.apply(void 0, [_k.sent(), 2]), erc20FiveDecimalTokenA = _c[0], erc20FiveDecimalTokenB = _c[1];
                    zeroDecimals = new utils_1.BigNumber(0);
                    erc20ZeroDecimalTokenCount = 2;
                    return [4 /*yield*/, erc20Wrapper.deployDummyTokensAsync(erc20ZeroDecimalTokenCount, zeroDecimals)];
                case 4:
                    _d = __read.apply(void 0, [_k.sent(), 2]), erc20ZeroDecimalTokenA = _d[0], erc20ZeroDecimalTokenB = _d[1];
                    return [4 /*yield*/, erc20Wrapper.deployProxyAsync()];
                case 5:
                    erc20Proxy = _k.sent();
                    return [4 /*yield*/, erc20Wrapper.setBalancesAndAllowancesAsync()];
                case 6:
                    _k.sent();
                    return [4 /*yield*/, erc721Wrapper.deployDummyTokensAsync()];
                case 7:
                    _e = __read.apply(void 0, [_k.sent(), 1]), erc721Token = _e[0];
                    return [4 /*yield*/, erc721Wrapper.deployProxyAsync()];
                case 8:
                    erc721Proxy = _k.sent();
                    return [4 /*yield*/, erc721Wrapper.setBalancesAndAllowancesAsync()];
                case 9:
                    _k.sent();
                    return [4 /*yield*/, erc721Wrapper.getBalancesAsync()];
                case 10:
                    erc721Balances = _k.sent();
                    assetWrapper = new asset_wrapper_1.AssetWrapper([erc20Wrapper, erc721Wrapper]);
                    return [4 /*yield*/, src_1.ExchangeContract.deployFrom0xArtifactAsync(src_1.artifacts.Exchange, provider, txDefaults, zrxAssetData)];
                case 11:
                    exchangeContract = _k.sent();
                    exchangeWrapper = new exchange_wrapper_1.ExchangeWrapper(exchangeContract, provider);
                    return [4 /*yield*/, exchangeWrapper.registerAssetProxyAsync(erc20Proxy.address, ownerAddress)];
                case 12:
                    _k.sent();
                    return [4 /*yield*/, exchangeWrapper.registerAssetProxyAsync(erc721Proxy.address, ownerAddress)];
                case 13:
                    _k.sent();
                    _g = (_f = web3Wrapper).awaitTransactionSuccessAsync;
                    return [4 /*yield*/, erc20Proxy.addAuthorizedAddress.sendTransactionAsync(exchangeContract.address, {
                            from: ownerAddress,
                        })];
                case 14: return [4 /*yield*/, _g.apply(_f, [_k.sent(),
                        contracts_test_utils_1.constants.AWAIT_TRANSACTION_MINED_MS])];
                case 15:
                    _k.sent();
                    _j = (_h = web3Wrapper).awaitTransactionSuccessAsync;
                    return [4 /*yield*/, erc721Proxy.addAuthorizedAddress.sendTransactionAsync(exchangeContract.address, {
                            from: ownerAddress,
                        })];
                case 16: return [4 /*yield*/, _j.apply(_h, [_k.sent(),
                        contracts_test_utils_1.constants.AWAIT_TRANSACTION_MINED_MS])];
                case 17:
                    _k.sent();
                    orderFactory = new order_factory_from_scenario_1.OrderFactoryFromScenario(userAddresses, zrxToken.address, [erc20EighteenDecimalTokenA.address, erc20EighteenDecimalTokenB.address], [erc20FiveDecimalTokenA.address, erc20FiveDecimalTokenB.address], [erc20ZeroDecimalTokenA.address, erc20ZeroDecimalTokenB.address], erc721Token, erc721Balances, exchangeContract.address);
                    return [4 /*yield*/, contracts_exchange_libs_1.TestLibsContract.deployFrom0xArtifactAsync(contracts_exchange_libs_1.artifacts.TestLibs, provider, txDefaults)];
                case 18:
                    testLibsContract = _k.sent();
                    fillOrderCombinatorialUtils = new FillOrderCombinatorialUtils(orderFactory, ownerAddress, makerAddress, makerPrivateKey, takerAddress, zrxAssetData, exchangeWrapper, assetWrapper, testLibsContract);
                    return [2 /*return*/, fillOrderCombinatorialUtils];
            }
        });
    });
}
exports.fillOrderCombinatorialUtilsFactoryAsync = fillOrderCombinatorialUtilsFactoryAsync;
var FillOrderCombinatorialUtils = /** @class */ (function () {
    function FillOrderCombinatorialUtils(orderFactory, ownerAddress, makerAddress, makerPrivateKey, takerAddress, zrxAssetData, exchangeWrapper, assetWrapper, testLibsContract) {
        this.orderFactory = orderFactory;
        this.ownerAddress = ownerAddress;
        this.makerAddress = makerAddress;
        this.makerPrivateKey = makerPrivateKey;
        this.takerAddress = takerAddress;
        this.zrxAssetData = zrxAssetData;
        this.exchangeWrapper = exchangeWrapper;
        this.assetWrapper = assetWrapper;
        this.testLibsContract = testLibsContract;
    }
    FillOrderCombinatorialUtils.generateFillOrderCombinations = function () {
        var takerScenarios = [
            contracts_test_utils_1.TakerScenario.Unspecified,
        ];
        var feeRecipientScenarios = [
            contracts_test_utils_1.FeeRecipientAddressScenario.EthUserAddress,
        ];
        var makerAssetAmountScenario = [
            contracts_test_utils_1.OrderAssetAmountScenario.Large,
        ];
        var takerAssetAmountScenario = [
            contracts_test_utils_1.OrderAssetAmountScenario.Large,
        ];
        var makerFeeScenario = [
            contracts_test_utils_1.OrderAssetAmountScenario.Large,
        ];
        var takerFeeScenario = [
            contracts_test_utils_1.OrderAssetAmountScenario.Large,
        ];
        var expirationTimeSecondsScenario = [
            contracts_test_utils_1.ExpirationTimeSecondsScenario.InFuture,
            contracts_test_utils_1.ExpirationTimeSecondsScenario.InPast,
        ];
        var makerAssetDataScenario = [
            contracts_test_utils_1.AssetDataScenario.ERC20FiveDecimals,
            contracts_test_utils_1.AssetDataScenario.ERC20NonZRXEighteenDecimals,
            contracts_test_utils_1.AssetDataScenario.ERC721,
            contracts_test_utils_1.AssetDataScenario.ZRXFeeToken,
        ];
        var takerAssetDataScenario = [
            contracts_test_utils_1.AssetDataScenario.ERC20FiveDecimals,
            contracts_test_utils_1.AssetDataScenario.ERC20NonZRXEighteenDecimals,
            contracts_test_utils_1.AssetDataScenario.ERC721,
            contracts_test_utils_1.AssetDataScenario.ZRXFeeToken,
        ];
        var takerAssetFillAmountScenario = [
            contracts_test_utils_1.TakerAssetFillAmountScenario.ExactlyRemainingFillableTakerAssetAmount,
        ];
        var makerAssetBalanceScenario = [
            contracts_test_utils_1.BalanceAmountScenario.Higher,
        ];
        var makerAssetAllowanceScenario = [
            contracts_test_utils_1.AllowanceAmountScenario.Higher,
        ];
        var makerZRXBalanceScenario = [
            contracts_test_utils_1.BalanceAmountScenario.Higher,
        ];
        var makerZRXAllowanceScenario = [
            contracts_test_utils_1.AllowanceAmountScenario.Higher,
        ];
        var takerAssetBalanceScenario = [
            contracts_test_utils_1.BalanceAmountScenario.Higher,
        ];
        var takerAssetAllowanceScenario = [
            contracts_test_utils_1.AllowanceAmountScenario.Higher,
        ];
        var takerZRXBalanceScenario = [
            contracts_test_utils_1.BalanceAmountScenario.Higher,
        ];
        var takerZRXAllowanceScenario = [
            contracts_test_utils_1.AllowanceAmountScenario.Higher,
        ];
        var fillScenarioArrays = FillOrderCombinatorialUtils._getAllCombinations([
            takerScenarios,
            feeRecipientScenarios,
            makerAssetAmountScenario,
            takerAssetAmountScenario,
            makerFeeScenario,
            takerFeeScenario,
            expirationTimeSecondsScenario,
            makerAssetDataScenario,
            takerAssetDataScenario,
            takerAssetFillAmountScenario,
            makerAssetBalanceScenario,
            makerAssetAllowanceScenario,
            makerZRXBalanceScenario,
            makerZRXAllowanceScenario,
            takerAssetBalanceScenario,
            takerAssetAllowanceScenario,
            takerZRXBalanceScenario,
            takerZRXAllowanceScenario,
        ]);
        var fillScenarios = _.map(fillScenarioArrays, function (fillScenarioArray) {
            // tslint:disable:custom-no-magic-numbers
            var fillScenario = {
                orderScenario: {
                    takerScenario: fillScenarioArray[0],
                    feeRecipientScenario: fillScenarioArray[1],
                    makerAssetAmountScenario: fillScenarioArray[2],
                    takerAssetAmountScenario: fillScenarioArray[3],
                    makerFeeScenario: fillScenarioArray[4],
                    takerFeeScenario: fillScenarioArray[5],
                    expirationTimeSecondsScenario: fillScenarioArray[6],
                    makerAssetDataScenario: fillScenarioArray[7],
                    takerAssetDataScenario: fillScenarioArray[8],
                },
                takerAssetFillAmountScenario: fillScenarioArray[9],
                makerStateScenario: {
                    traderAssetBalance: fillScenarioArray[10],
                    traderAssetAllowance: fillScenarioArray[11],
                    zrxFeeBalance: fillScenarioArray[12],
                    zrxFeeAllowance: fillScenarioArray[13],
                },
                takerStateScenario: {
                    traderAssetBalance: fillScenarioArray[14],
                    traderAssetAllowance: fillScenarioArray[15],
                    zrxFeeBalance: fillScenarioArray[16],
                    zrxFeeAllowance: fillScenarioArray[17],
                },
            };
            // tslint:enable:custom-no-magic-numbers
            return fillScenario;
        });
        return fillScenarios;
    };
    /**
     * Recursive implementation of generating all combinations of the supplied
     * string-containing arrays.
     */
    FillOrderCombinatorialUtils._getAllCombinations = function (arrays) {
        // Base case
        if (arrays.length === 1) {
            var remainingValues = _.map(arrays[0], function (val) {
                return [val];
            });
            return remainingValues;
        }
        else {
            var result = [];
            var restOfArrays = arrays.slice(1);
            var allCombinationsOfRemaining = FillOrderCombinatorialUtils._getAllCombinations(restOfArrays); // recur with the rest of array
            // tslint:disable:prefer-for-of
            for (var i = 0; i < allCombinationsOfRemaining.length; i++) {
                for (var j = 0; j < arrays[0].length; j++) {
                    result.push(__spread([arrays[0][j]], allCombinationsOfRemaining[i]));
                }
            }
            // tslint:enable:prefer-for-of
            return result;
        }
    };
    FillOrderCombinatorialUtils.prototype.testFillOrderScenarioAsync = function (provider, fillScenario, isVerbose) {
        if (isVerbose === void 0) { isVerbose = false; }
        return __awaiter(this, void 0, void 0, function () {
            var order, orderHashBuff, signature, signedOrder, balanceAndProxyAllowanceFetcher, orderFilledCancelledFetcher, takerAssetFillAmount, orderValidationUtils, lazyStore, exchangeTransferSimulator, fillRevertReasonIfExists, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        order = this.orderFactory.generateOrder(fillScenario.orderScenario);
                        orderHashBuff = order_utils_1.orderHashUtils.getOrderHashBuffer(order);
                        signature = contracts_test_utils_1.signingUtils.signMessage(orderHashBuff, this.makerPrivateKey, types_1.SignatureType.EthSign);
                        signedOrder = __assign({}, order, { signature: "0x" + signature.toString('hex') });
                        balanceAndProxyAllowanceFetcher = new simple_asset_balance_and_proxy_allowance_fetcher_1.SimpleAssetBalanceAndProxyAllowanceFetcher(this.assetWrapper);
                        orderFilledCancelledFetcher = new simple_order_filled_cancelled_fetcher_1.SimpleOrderFilledCancelledFetcher(this.exchangeWrapper, this.zrxAssetData);
                        return [4 /*yield*/, this._getTakerAssetFillAmountAsync(signedOrder, fillScenario.takerAssetFillAmountScenario, balanceAndProxyAllowanceFetcher, orderFilledCancelledFetcher)];
                    case 1:
                        takerAssetFillAmount = _a.sent();
                        // 4. Permutate the maker and taker balance/allowance scenarios
                        return [4 /*yield*/, this._modifyTraderStateAsync(fillScenario.makerStateScenario, fillScenario.takerStateScenario, signedOrder, takerAssetFillAmount)];
                    case 2:
                        // 4. Permutate the maker and taker balance/allowance scenarios
                        _a.sent();
                        orderValidationUtils = new order_utils_1.OrderValidationUtils(orderFilledCancelledFetcher, provider);
                        lazyStore = new order_utils_1.BalanceAndProxyAllowanceLazyStore(balanceAndProxyAllowanceFetcher);
                        exchangeTransferSimulator = new order_utils_1.ExchangeTransferSimulator(lazyStore);
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, orderValidationUtils.validateFillOrderThrowIfInvalidAsync(exchangeTransferSimulator, provider, signedOrder, takerAssetFillAmount, this.takerAddress, this.zrxAssetData)];
                    case 4:
                        _a.sent();
                        if (isVerbose) {
                            utils_1.logUtils.log("Expecting fillOrder to succeed.");
                        }
                        return [3 /*break*/, 6];
                    case 5:
                        err_1 = _a.sent();
                        fillRevertReasonIfExists = err_1.message;
                        if (isVerbose) {
                            utils_1.logUtils.log("Expecting fillOrder to fail with:");
                            utils_1.logUtils.log(err_1);
                        }
                        return [3 /*break*/, 6];
                    case 6: 
                    // 6. Fill the order
                    return [4 /*yield*/, this._fillOrderAndAssertOutcomeAsync(signedOrder, takerAssetFillAmount, lazyStore, fillRevertReasonIfExists)];
                    case 7:
                        // 6. Fill the order
                        _a.sent();
                        return [4 /*yield*/, this._abiEncodeFillOrderAndAssertOutcomeAsync(signedOrder, takerAssetFillAmount)];
                    case 8:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FillOrderCombinatorialUtils.prototype._fillOrderAndAssertOutcomeAsync = function (signedOrder, takerAssetFillAmount, lazyStore, fillRevertReasonIfExists) {
        return __awaiter(this, void 0, void 0, function () {
            var makerAddress, makerAssetData, takerAssetData, feeRecipient, expMakerAssetBalanceOfMaker, expMakerAssetAllowanceOfMaker, expTakerAssetBalanceOfMaker, expZRXAssetBalanceOfMaker, expZRXAssetAllowanceOfMaker, expTakerAssetBalanceOfTaker, expTakerAssetAllowanceOfTaker, expMakerAssetBalanceOfTaker, expZRXAssetBalanceOfTaker, expZRXAssetAllowanceOfTaker, expZRXAssetBalanceOfFeeRecipient, orderHash, alreadyFilledTakerAmount, remainingTakerAmountToFill, expFilledTakerAmount, expFilledMakerAmount, expMakerFeePaid, expTakerFeePaid, fillResults, txReceipt, actFilledTakerAmount, exchangeLogs, log, actMakerAssetBalanceOfMaker, actMakerAssetAllowanceOfMaker, actTakerAssetBalanceOfMaker, actZRXAssetBalanceOfMaker, actZRXAssetAllowanceOfMaker, actTakerAssetBalanceOfTaker, actTakerAssetAllowanceOfTaker, actMakerAssetBalanceOfTaker, actZRXAssetBalanceOfTaker, actZRXAssetAllowanceOfTaker, actZRXAssetBalanceOfFeeRecipient;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (fillRevertReasonIfExists !== undefined) {
                            return [2 /*return*/, contracts_test_utils_1.expectTransactionFailedAsync(this.exchangeWrapper.fillOrderAsync(signedOrder, this.takerAddress, { takerAssetFillAmount: takerAssetFillAmount }), fillRevertReasonIfExists)];
                        }
                        makerAddress = signedOrder.makerAddress;
                        makerAssetData = signedOrder.makerAssetData;
                        takerAssetData = signedOrder.takerAssetData;
                        feeRecipient = signedOrder.feeRecipientAddress;
                        return [4 /*yield*/, lazyStore.getBalanceAsync(makerAssetData, makerAddress)];
                    case 1:
                        expMakerAssetBalanceOfMaker = _a.sent();
                        return [4 /*yield*/, lazyStore.getProxyAllowanceAsync(makerAssetData, makerAddress)];
                    case 2:
                        expMakerAssetAllowanceOfMaker = _a.sent();
                        return [4 /*yield*/, lazyStore.getBalanceAsync(takerAssetData, makerAddress)];
                    case 3:
                        expTakerAssetBalanceOfMaker = _a.sent();
                        return [4 /*yield*/, lazyStore.getBalanceAsync(this.zrxAssetData, makerAddress)];
                    case 4:
                        expZRXAssetBalanceOfMaker = _a.sent();
                        return [4 /*yield*/, lazyStore.getProxyAllowanceAsync(this.zrxAssetData, makerAddress)];
                    case 5:
                        expZRXAssetAllowanceOfMaker = _a.sent();
                        return [4 /*yield*/, lazyStore.getBalanceAsync(takerAssetData, this.takerAddress)];
                    case 6:
                        expTakerAssetBalanceOfTaker = _a.sent();
                        return [4 /*yield*/, lazyStore.getProxyAllowanceAsync(takerAssetData, this.takerAddress)];
                    case 7:
                        expTakerAssetAllowanceOfTaker = _a.sent();
                        return [4 /*yield*/, lazyStore.getBalanceAsync(makerAssetData, this.takerAddress)];
                    case 8:
                        expMakerAssetBalanceOfTaker = _a.sent();
                        return [4 /*yield*/, lazyStore.getBalanceAsync(this.zrxAssetData, this.takerAddress)];
                    case 9:
                        expZRXAssetBalanceOfTaker = _a.sent();
                        return [4 /*yield*/, lazyStore.getProxyAllowanceAsync(this.zrxAssetData, this.takerAddress)];
                    case 10:
                        expZRXAssetAllowanceOfTaker = _a.sent();
                        return [4 /*yield*/, lazyStore.getBalanceAsync(this.zrxAssetData, feeRecipient)];
                    case 11:
                        expZRXAssetBalanceOfFeeRecipient = _a.sent();
                        orderHash = order_utils_1.orderHashUtils.getOrderHashHex(signedOrder);
                        return [4 /*yield*/, this.exchangeWrapper.getTakerAssetFilledAmountAsync(orderHash)];
                    case 12:
                        alreadyFilledTakerAmount = _a.sent();
                        remainingTakerAmountToFill = signedOrder.takerAssetAmount.minus(alreadyFilledTakerAmount);
                        expFilledTakerAmount = takerAssetFillAmount.gt(remainingTakerAmountToFill)
                            ? remainingTakerAmountToFill
                            : alreadyFilledTakerAmount.plus(takerAssetFillAmount);
                        expFilledMakerAmount = contracts_test_utils_1.orderUtils.getPartialAmountFloor(expFilledTakerAmount, signedOrder.takerAssetAmount, signedOrder.makerAssetAmount);
                        expMakerFeePaid = contracts_test_utils_1.orderUtils.getPartialAmountFloor(expFilledTakerAmount, signedOrder.takerAssetAmount, signedOrder.makerFee);
                        expTakerFeePaid = contracts_test_utils_1.orderUtils.getPartialAmountFloor(expFilledTakerAmount, signedOrder.takerAssetAmount, signedOrder.takerFee);
                        return [4 /*yield*/, this.exchangeWrapper.getFillOrderResultsAsync(signedOrder, this.takerAddress, {
                                takerAssetFillAmount: takerAssetFillAmount,
                            })];
                    case 13:
                        fillResults = _a.sent();
                        expect(fillResults.takerAssetFilledAmount).to.be.bignumber.equal(expFilledTakerAmount, 'takerAssetFilledAmount');
                        expect(fillResults.makerAssetFilledAmount).to.be.bignumber.equal(expFilledMakerAmount, 'makerAssetFilledAmount');
                        expect(fillResults.takerFeePaid).to.be.bignumber.equal(expTakerFeePaid, 'takerFeePaid');
                        expect(fillResults.makerFeePaid).to.be.bignumber.equal(expMakerFeePaid, 'makerFeePaid');
                        return [4 /*yield*/, this.exchangeWrapper.fillOrderAsync(signedOrder, this.takerAddress, {
                                takerAssetFillAmount: takerAssetFillAmount,
                            })];
                    case 14:
                        txReceipt = _a.sent();
                        return [4 /*yield*/, this.exchangeWrapper.getTakerAssetFilledAmountAsync(orderHash)];
                    case 15:
                        actFilledTakerAmount = _a.sent();
                        expect(actFilledTakerAmount).to.be.bignumber.equal(expFilledTakerAmount, 'filledTakerAmount');
                        exchangeLogs = _.filter(txReceipt.logs, function (txLog) { return txLog.address === _this.exchangeWrapper.getExchangeAddress(); });
                        expect(exchangeLogs.length).to.be.equal(1, 'logs length');
                        log = txReceipt.logs[0];
                        expect(log.args.makerAddress).to.be.equal(makerAddress, 'log.args.makerAddress');
                        expect(log.args.takerAddress).to.be.equal(this.takerAddress, 'log.args.this.takerAddress');
                        expect(log.args.feeRecipientAddress).to.be.equal(feeRecipient, 'log.args.feeRecipientAddress');
                        expect(log.args.makerAssetFilledAmount).to.be.bignumber.equal(expFilledMakerAmount, 'log.args.makerAssetFilledAmount');
                        expect(log.args.takerAssetFilledAmount).to.be.bignumber.equal(expFilledTakerAmount, 'log.args.takerAssetFilledAmount');
                        expect(log.args.makerFeePaid).to.be.bignumber.equal(expMakerFeePaid, 'log.args.makerFeePaid');
                        expect(log.args.takerFeePaid).to.be.bignumber.equal(expTakerFeePaid, 'logs.args.takerFeePaid');
                        expect(log.args.orderHash).to.be.equal(orderHash, 'log.args.orderHash');
                        expect(log.args.makerAssetData).to.be.equal(makerAssetData, 'log.args.makerAssetData');
                        expect(log.args.takerAssetData).to.be.equal(takerAssetData, 'log.args.takerAssetData');
                        return [4 /*yield*/, this.assetWrapper.getBalanceAsync(makerAddress, makerAssetData)];
                    case 16:
                        actMakerAssetBalanceOfMaker = _a.sent();
                        expect(actMakerAssetBalanceOfMaker).to.be.bignumber.equal(expMakerAssetBalanceOfMaker, 'makerAssetBalanceOfMaker');
                        return [4 /*yield*/, this.assetWrapper.getProxyAllowanceAsync(makerAddress, makerAssetData)];
                    case 17:
                        actMakerAssetAllowanceOfMaker = _a.sent();
                        expect(actMakerAssetAllowanceOfMaker).to.be.bignumber.equal(expMakerAssetAllowanceOfMaker, 'makerAssetAllowanceOfMaker');
                        return [4 /*yield*/, this.assetWrapper.getBalanceAsync(makerAddress, takerAssetData)];
                    case 18:
                        actTakerAssetBalanceOfMaker = _a.sent();
                        expect(actTakerAssetBalanceOfMaker).to.be.bignumber.equal(expTakerAssetBalanceOfMaker, 'takerAssetBalanceOfMaker');
                        return [4 /*yield*/, this.assetWrapper.getBalanceAsync(makerAddress, this.zrxAssetData)];
                    case 19:
                        actZRXAssetBalanceOfMaker = _a.sent();
                        expect(actZRXAssetBalanceOfMaker).to.be.bignumber.equal(expZRXAssetBalanceOfMaker, 'ZRXAssetBalanceOfMaker');
                        return [4 /*yield*/, this.assetWrapper.getProxyAllowanceAsync(makerAddress, this.zrxAssetData)];
                    case 20:
                        actZRXAssetAllowanceOfMaker = _a.sent();
                        expect(actZRXAssetAllowanceOfMaker).to.be.bignumber.equal(expZRXAssetAllowanceOfMaker, 'ZRXAssetAllowanceOfMaker');
                        return [4 /*yield*/, this.assetWrapper.getBalanceAsync(this.takerAddress, takerAssetData)];
                    case 21:
                        actTakerAssetBalanceOfTaker = _a.sent();
                        expect(actTakerAssetBalanceOfTaker).to.be.bignumber.equal(expTakerAssetBalanceOfTaker, 'TakerAssetBalanceOfTaker');
                        return [4 /*yield*/, this.assetWrapper.getProxyAllowanceAsync(this.takerAddress, takerAssetData)];
                    case 22:
                        actTakerAssetAllowanceOfTaker = _a.sent();
                        expect(actTakerAssetAllowanceOfTaker).to.be.bignumber.equal(expTakerAssetAllowanceOfTaker, 'TakerAssetAllowanceOfTaker');
                        return [4 /*yield*/, this.assetWrapper.getBalanceAsync(this.takerAddress, makerAssetData)];
                    case 23:
                        actMakerAssetBalanceOfTaker = _a.sent();
                        expect(actMakerAssetBalanceOfTaker).to.be.bignumber.equal(expMakerAssetBalanceOfTaker, 'MakerAssetBalanceOfTaker');
                        return [4 /*yield*/, this.assetWrapper.getBalanceAsync(this.takerAddress, this.zrxAssetData)];
                    case 24:
                        actZRXAssetBalanceOfTaker = _a.sent();
                        expect(actZRXAssetBalanceOfTaker).to.be.bignumber.equal(expZRXAssetBalanceOfTaker, 'ZRXAssetBalanceOfTaker');
                        return [4 /*yield*/, this.assetWrapper.getProxyAllowanceAsync(this.takerAddress, this.zrxAssetData)];
                    case 25:
                        actZRXAssetAllowanceOfTaker = _a.sent();
                        expect(actZRXAssetAllowanceOfTaker).to.be.bignumber.equal(expZRXAssetAllowanceOfTaker, 'ZRXAssetAllowanceOfTaker');
                        return [4 /*yield*/, this.assetWrapper.getBalanceAsync(feeRecipient, this.zrxAssetData)];
                    case 26:
                        actZRXAssetBalanceOfFeeRecipient = _a.sent();
                        expect(actZRXAssetBalanceOfFeeRecipient).to.be.bignumber.equal(expZRXAssetBalanceOfFeeRecipient, 'ZRXAssetBalanceOfFeeRecipient');
                        return [2 /*return*/];
                }
            });
        });
    };
    FillOrderCombinatorialUtils.prototype._abiEncodeFillOrderAndAssertOutcomeAsync = function (signedOrder, takerAssetFillAmount) {
        return __awaiter(this, void 0, void 0, function () {
            var params, abiDataEncodedByContract, paramsDecodedByClient;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = contracts_test_utils_1.orderUtils.createFill(signedOrder, takerAssetFillAmount);
                        return [4 /*yield*/, this.testLibsContract.publicAbiEncodeFillOrder.callAsync(params.order, params.takerAssetFillAmount, params.signature)];
                    case 1:
                        abiDataEncodedByContract = _a.sent();
                        paramsDecodedByClient = this.exchangeWrapper.abiDecodeFillOrder(abiDataEncodedByContract);
                        expect(paramsDecodedByClient).to.be.deep.equal(params, 'ABIEncodedFillOrderData');
                        return [2 /*return*/];
                }
            });
        });
    };
    FillOrderCombinatorialUtils.prototype._getTakerAssetFillAmountAsync = function (signedOrder, takerAssetFillAmountScenario, balanceAndProxyAllowanceFetcher, orderFilledCancelledFetcher) {
        return __awaiter(this, void 0, void 0, function () {
            var orderStateUtils, fillableTakerAssetAmount, takerAssetFillAmount, takerAssetProxyId, makerAssetProxyId, isEitherAssetERC721;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        orderStateUtils = new order_utils_1.OrderStateUtils(balanceAndProxyAllowanceFetcher, orderFilledCancelledFetcher);
                        return [4 /*yield*/, orderStateUtils.getMaxFillableTakerAssetAmountAsync(signedOrder, this.takerAddress)];
                    case 1:
                        fillableTakerAssetAmount = _a.sent();
                        switch (takerAssetFillAmountScenario) {
                            case contracts_test_utils_1.TakerAssetFillAmountScenario.Zero:
                                takerAssetFillAmount = new utils_1.BigNumber(0);
                                break;
                            case contracts_test_utils_1.TakerAssetFillAmountScenario.ExactlyRemainingFillableTakerAssetAmount:
                                takerAssetFillAmount = fillableTakerAssetAmount;
                                break;
                            case contracts_test_utils_1.TakerAssetFillAmountScenario.GreaterThanRemainingFillableTakerAssetAmount:
                                takerAssetFillAmount = fillableTakerAssetAmount.plus(1);
                                break;
                            case contracts_test_utils_1.TakerAssetFillAmountScenario.LessThanRemainingFillableTakerAssetAmount:
                                takerAssetProxyId = order_utils_1.assetDataUtils.decodeAssetProxyId(signedOrder.takerAssetData);
                                makerAssetProxyId = order_utils_1.assetDataUtils.decodeAssetProxyId(signedOrder.makerAssetData);
                                isEitherAssetERC721 = takerAssetProxyId === types_1.AssetProxyId.ERC721 || makerAssetProxyId === types_1.AssetProxyId.ERC721;
                                if (isEitherAssetERC721) {
                                    throw new Error('Cannot test `TakerAssetFillAmountScenario.LessThanRemainingFillableTakerAssetAmount` together with ERC721 assets since orders involving ERC721 must always be filled exactly.');
                                }
                                takerAssetFillAmount = fillableTakerAssetAmount.div(2).integerValue(utils_1.BigNumber.ROUND_FLOOR);
                                break;
                            default:
                                throw utils_1.errorUtils.spawnSwitchErr('TakerAssetFillAmountScenario', takerAssetFillAmountScenario);
                        }
                        return [2 /*return*/, takerAssetFillAmount];
                }
            });
        });
    };
    FillOrderCombinatorialUtils.prototype._modifyTraderStateAsync = function (makerStateScenario, takerStateScenario, signedOrder, takerAssetFillAmount) {
        return __awaiter(this, void 0, void 0, function () {
            var makerAssetFillAmount, _a, tooLowBalance, exactBalance, makerFee, _b, tooLowBalance, exactBalance, _c, tooLowAllowance, exactAllowance, _d, tooLowAllowance, exactAllowance, _e, tooLowBalance, exactBalance, takerFee, _f, tooLowBalance, exactBalance, _g, tooLowAllowance, exactAllowance, _h, tooLowAllowance, exactAllowance;
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        makerAssetFillAmount = contracts_test_utils_1.orderUtils.getPartialAmountFloor(takerAssetFillAmount, signedOrder.takerAssetAmount, signedOrder.makerAssetAmount);
                        _a = makerStateScenario.traderAssetBalance;
                        switch (_a) {
                            case contracts_test_utils_1.BalanceAmountScenario.Higher: return [3 /*break*/, 1];
                            case contracts_test_utils_1.BalanceAmountScenario.TooLow: return [3 /*break*/, 2];
                            case contracts_test_utils_1.BalanceAmountScenario.Exact: return [3 /*break*/, 4];
                        }
                        return [3 /*break*/, 6];
                    case 1: return [3 /*break*/, 7]; // Noop since this is already the default
                    case 2:
                        if (makerAssetFillAmount.eq(0)) {
                            throw new Error("Cannot set makerAssetBalanceOfMaker TooLow if makerAssetFillAmount is 0");
                        }
                        tooLowBalance = makerAssetFillAmount.minus(1);
                        return [4 /*yield*/, this.assetWrapper.setBalanceAsync(signedOrder.makerAddress, signedOrder.makerAssetData, tooLowBalance)];
                    case 3:
                        _j.sent();
                        return [3 /*break*/, 7];
                    case 4:
                        exactBalance = makerAssetFillAmount;
                        return [4 /*yield*/, this.assetWrapper.setBalanceAsync(signedOrder.makerAddress, signedOrder.makerAssetData, exactBalance)];
                    case 5:
                        _j.sent();
                        return [3 /*break*/, 7];
                    case 6: throw utils_1.errorUtils.spawnSwitchErr('makerStateScenario.traderAssetBalance', makerStateScenario.traderAssetBalance);
                    case 7:
                        makerFee = contracts_test_utils_1.orderUtils.getPartialAmountFloor(takerAssetFillAmount, signedOrder.takerAssetAmount, signedOrder.makerFee);
                        _b = makerStateScenario.zrxFeeBalance;
                        switch (_b) {
                            case contracts_test_utils_1.BalanceAmountScenario.Higher: return [3 /*break*/, 8];
                            case contracts_test_utils_1.BalanceAmountScenario.TooLow: return [3 /*break*/, 9];
                            case contracts_test_utils_1.BalanceAmountScenario.Exact: return [3 /*break*/, 11];
                        }
                        return [3 /*break*/, 13];
                    case 8: return [3 /*break*/, 14]; // Noop since this is already the default
                    case 9:
                        if (makerFee.eq(0)) {
                            throw new Error("Cannot set zrxAsserBalanceOfMaker TooLow if makerFee is 0");
                        }
                        tooLowBalance = makerFee.minus(1);
                        return [4 /*yield*/, this.assetWrapper.setBalanceAsync(signedOrder.makerAddress, this.zrxAssetData, tooLowBalance)];
                    case 10:
                        _j.sent();
                        return [3 /*break*/, 14];
                    case 11:
                        exactBalance = makerFee;
                        return [4 /*yield*/, this.assetWrapper.setBalanceAsync(signedOrder.makerAddress, this.zrxAssetData, exactBalance)];
                    case 12:
                        _j.sent();
                        return [3 /*break*/, 14];
                    case 13: throw utils_1.errorUtils.spawnSwitchErr('makerStateScenario.zrxFeeBalance', makerStateScenario.zrxFeeBalance);
                    case 14:
                        _c = makerStateScenario.traderAssetAllowance;
                        switch (_c) {
                            case contracts_test_utils_1.AllowanceAmountScenario.Higher: return [3 /*break*/, 15];
                            case contracts_test_utils_1.AllowanceAmountScenario.TooLow: return [3 /*break*/, 16];
                            case contracts_test_utils_1.AllowanceAmountScenario.Exact: return [3 /*break*/, 18];
                            case contracts_test_utils_1.AllowanceAmountScenario.Unlimited: return [3 /*break*/, 20];
                        }
                        return [3 /*break*/, 22];
                    case 15: return [3 /*break*/, 23]; // Noop since this is already the default
                    case 16:
                        tooLowAllowance = makerAssetFillAmount.minus(1);
                        return [4 /*yield*/, this.assetWrapper.setProxyAllowanceAsync(signedOrder.makerAddress, signedOrder.makerAssetData, tooLowAllowance)];
                    case 17:
                        _j.sent();
                        return [3 /*break*/, 23];
                    case 18:
                        exactAllowance = makerAssetFillAmount;
                        return [4 /*yield*/, this.assetWrapper.setProxyAllowanceAsync(signedOrder.makerAddress, signedOrder.makerAssetData, exactAllowance)];
                    case 19:
                        _j.sent();
                        return [3 /*break*/, 23];
                    case 20: return [4 /*yield*/, this.assetWrapper.setProxyAllowanceAsync(signedOrder.makerAddress, signedOrder.makerAssetData, contracts_test_utils_1.constants.UNLIMITED_ALLOWANCE_IN_BASE_UNITS)];
                    case 21:
                        _j.sent();
                        return [3 /*break*/, 23];
                    case 22: throw utils_1.errorUtils.spawnSwitchErr('makerStateScenario.traderAssetAllowance', makerStateScenario.traderAssetAllowance);
                    case 23:
                        _d = makerStateScenario.zrxFeeAllowance;
                        switch (_d) {
                            case contracts_test_utils_1.AllowanceAmountScenario.Higher: return [3 /*break*/, 24];
                            case contracts_test_utils_1.AllowanceAmountScenario.TooLow: return [3 /*break*/, 25];
                            case contracts_test_utils_1.AllowanceAmountScenario.Exact: return [3 /*break*/, 27];
                            case contracts_test_utils_1.AllowanceAmountScenario.Unlimited: return [3 /*break*/, 29];
                        }
                        return [3 /*break*/, 31];
                    case 24: return [3 /*break*/, 32]; // Noop since this is already the default
                    case 25:
                        tooLowAllowance = makerFee.minus(1);
                        return [4 /*yield*/, this.assetWrapper.setProxyAllowanceAsync(signedOrder.makerAddress, this.zrxAssetData, tooLowAllowance)];
                    case 26:
                        _j.sent();
                        return [3 /*break*/, 32];
                    case 27:
                        exactAllowance = makerFee;
                        return [4 /*yield*/, this.assetWrapper.setProxyAllowanceAsync(signedOrder.makerAddress, this.zrxAssetData, exactAllowance)];
                    case 28:
                        _j.sent();
                        return [3 /*break*/, 32];
                    case 29: return [4 /*yield*/, this.assetWrapper.setProxyAllowanceAsync(signedOrder.makerAddress, this.zrxAssetData, contracts_test_utils_1.constants.UNLIMITED_ALLOWANCE_IN_BASE_UNITS)];
                    case 30:
                        _j.sent();
                        return [3 /*break*/, 32];
                    case 31: throw utils_1.errorUtils.spawnSwitchErr('makerStateScenario.zrxFeeAllowance', makerStateScenario.zrxFeeAllowance);
                    case 32:
                        _e = takerStateScenario.traderAssetBalance;
                        switch (_e) {
                            case contracts_test_utils_1.BalanceAmountScenario.Higher: return [3 /*break*/, 33];
                            case contracts_test_utils_1.BalanceAmountScenario.TooLow: return [3 /*break*/, 34];
                            case contracts_test_utils_1.BalanceAmountScenario.Exact: return [3 /*break*/, 36];
                        }
                        return [3 /*break*/, 38];
                    case 33: return [3 /*break*/, 39]; // Noop since this is already the default
                    case 34:
                        if (takerAssetFillAmount.eq(0)) {
                            throw new Error("Cannot set takerAssetBalanceOfTaker TooLow if takerAssetFillAmount is 0");
                        }
                        tooLowBalance = takerAssetFillAmount.minus(1);
                        return [4 /*yield*/, this.assetWrapper.setBalanceAsync(this.takerAddress, signedOrder.takerAssetData, tooLowBalance)];
                    case 35:
                        _j.sent();
                        return [3 /*break*/, 39];
                    case 36:
                        exactBalance = takerAssetFillAmount;
                        return [4 /*yield*/, this.assetWrapper.setBalanceAsync(this.takerAddress, signedOrder.takerAssetData, exactBalance)];
                    case 37:
                        _j.sent();
                        return [3 /*break*/, 39];
                    case 38: throw utils_1.errorUtils.spawnSwitchErr('takerStateScenario.traderAssetBalance', takerStateScenario.traderAssetBalance);
                    case 39:
                        takerFee = contracts_test_utils_1.orderUtils.getPartialAmountFloor(takerAssetFillAmount, signedOrder.takerAssetAmount, signedOrder.takerFee);
                        _f = takerStateScenario.zrxFeeBalance;
                        switch (_f) {
                            case contracts_test_utils_1.BalanceAmountScenario.Higher: return [3 /*break*/, 40];
                            case contracts_test_utils_1.BalanceAmountScenario.TooLow: return [3 /*break*/, 41];
                            case contracts_test_utils_1.BalanceAmountScenario.Exact: return [3 /*break*/, 43];
                        }
                        return [3 /*break*/, 45];
                    case 40: return [3 /*break*/, 46]; // Noop since this is already the default
                    case 41:
                        if (takerFee.eq(0)) {
                            throw new Error("Cannot set zrxAssetBalanceOfTaker TooLow if takerFee is 0");
                        }
                        tooLowBalance = takerFee.minus(1);
                        return [4 /*yield*/, this.assetWrapper.setBalanceAsync(this.takerAddress, this.zrxAssetData, tooLowBalance)];
                    case 42:
                        _j.sent();
                        return [3 /*break*/, 46];
                    case 43:
                        exactBalance = takerFee;
                        return [4 /*yield*/, this.assetWrapper.setBalanceAsync(this.takerAddress, this.zrxAssetData, exactBalance)];
                    case 44:
                        _j.sent();
                        return [3 /*break*/, 46];
                    case 45: throw utils_1.errorUtils.spawnSwitchErr('takerStateScenario.zrxFeeBalance', takerStateScenario.zrxFeeBalance);
                    case 46:
                        _g = takerStateScenario.traderAssetAllowance;
                        switch (_g) {
                            case contracts_test_utils_1.AllowanceAmountScenario.Higher: return [3 /*break*/, 47];
                            case contracts_test_utils_1.AllowanceAmountScenario.TooLow: return [3 /*break*/, 48];
                            case contracts_test_utils_1.AllowanceAmountScenario.Exact: return [3 /*break*/, 50];
                            case contracts_test_utils_1.AllowanceAmountScenario.Unlimited: return [3 /*break*/, 52];
                        }
                        return [3 /*break*/, 54];
                    case 47: return [3 /*break*/, 55]; // Noop since this is already the default
                    case 48:
                        tooLowAllowance = takerAssetFillAmount.minus(1);
                        return [4 /*yield*/, this.assetWrapper.setProxyAllowanceAsync(this.takerAddress, signedOrder.takerAssetData, tooLowAllowance)];
                    case 49:
                        _j.sent();
                        return [3 /*break*/, 55];
                    case 50:
                        exactAllowance = takerAssetFillAmount;
                        return [4 /*yield*/, this.assetWrapper.setProxyAllowanceAsync(this.takerAddress, signedOrder.takerAssetData, exactAllowance)];
                    case 51:
                        _j.sent();
                        return [3 /*break*/, 55];
                    case 52: return [4 /*yield*/, this.assetWrapper.setProxyAllowanceAsync(this.takerAddress, signedOrder.takerAssetData, contracts_test_utils_1.constants.UNLIMITED_ALLOWANCE_IN_BASE_UNITS)];
                    case 53:
                        _j.sent();
                        return [3 /*break*/, 55];
                    case 54: throw utils_1.errorUtils.spawnSwitchErr('takerStateScenario.traderAssetAllowance', takerStateScenario.traderAssetAllowance);
                    case 55:
                        _h = takerStateScenario.zrxFeeAllowance;
                        switch (_h) {
                            case contracts_test_utils_1.AllowanceAmountScenario.Higher: return [3 /*break*/, 56];
                            case contracts_test_utils_1.AllowanceAmountScenario.TooLow: return [3 /*break*/, 57];
                            case contracts_test_utils_1.AllowanceAmountScenario.Exact: return [3 /*break*/, 59];
                            case contracts_test_utils_1.AllowanceAmountScenario.Unlimited: return [3 /*break*/, 61];
                        }
                        return [3 /*break*/, 63];
                    case 56: return [3 /*break*/, 64]; // Noop since this is already the default
                    case 57:
                        tooLowAllowance = takerFee.minus(1);
                        return [4 /*yield*/, this.assetWrapper.setProxyAllowanceAsync(this.takerAddress, this.zrxAssetData, tooLowAllowance)];
                    case 58:
                        _j.sent();
                        return [3 /*break*/, 64];
                    case 59:
                        exactAllowance = takerFee;
                        return [4 /*yield*/, this.assetWrapper.setProxyAllowanceAsync(this.takerAddress, this.zrxAssetData, exactAllowance)];
                    case 60:
                        _j.sent();
                        return [3 /*break*/, 64];
                    case 61: return [4 /*yield*/, this.assetWrapper.setProxyAllowanceAsync(this.takerAddress, this.zrxAssetData, contracts_test_utils_1.constants.UNLIMITED_ALLOWANCE_IN_BASE_UNITS)];
                    case 62:
                        _j.sent();
                        return [3 /*break*/, 64];
                    case 63: throw utils_1.errorUtils.spawnSwitchErr('takerStateScenario.zrxFeeAllowance', takerStateScenario.zrxFeeAllowance);
                    case 64: return [2 /*return*/];
                }
            });
        });
    };
    return FillOrderCombinatorialUtils;
}()); // tslint:disable:max-file-line-count
exports.FillOrderCombinatorialUtils = FillOrderCombinatorialUtils;
//# sourceMappingURL=fill_order_combinatorial_utils.js.map