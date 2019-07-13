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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var contracts_test_utils_1 = require("@0x/contracts-test-utils");
var dev_utils_1 = require("@0x/dev-utils");
var _ = require("lodash");
var src_1 = require("../src");
contracts_test_utils_1.chaiSetup.configure();
var blockchainLifecycle = new dev_utils_1.BlockchainLifecycle(contracts_test_utils_1.web3Wrapper);
var defaultFillScenario = {
    orderScenario: {
        takerScenario: contracts_test_utils_1.TakerScenario.Unspecified,
        feeRecipientScenario: contracts_test_utils_1.FeeRecipientAddressScenario.EthUserAddress,
        makerAssetAmountScenario: contracts_test_utils_1.OrderAssetAmountScenario.Large,
        takerAssetAmountScenario: contracts_test_utils_1.OrderAssetAmountScenario.Large,
        makerFeeScenario: contracts_test_utils_1.OrderAssetAmountScenario.Large,
        takerFeeScenario: contracts_test_utils_1.OrderAssetAmountScenario.Large,
        expirationTimeSecondsScenario: contracts_test_utils_1.ExpirationTimeSecondsScenario.InFuture,
        makerAssetDataScenario: contracts_test_utils_1.AssetDataScenario.ERC20NonZRXEighteenDecimals,
        takerAssetDataScenario: contracts_test_utils_1.AssetDataScenario.ERC20NonZRXEighteenDecimals,
    },
    takerAssetFillAmountScenario: contracts_test_utils_1.TakerAssetFillAmountScenario.LessThanRemainingFillableTakerAssetAmount,
    makerStateScenario: {
        traderAssetBalance: contracts_test_utils_1.BalanceAmountScenario.Higher,
        traderAssetAllowance: contracts_test_utils_1.AllowanceAmountScenario.Higher,
        zrxFeeBalance: contracts_test_utils_1.BalanceAmountScenario.Higher,
        zrxFeeAllowance: contracts_test_utils_1.AllowanceAmountScenario.Higher,
    },
    takerStateScenario: {
        traderAssetBalance: contracts_test_utils_1.BalanceAmountScenario.Higher,
        traderAssetAllowance: contracts_test_utils_1.AllowanceAmountScenario.Higher,
        zrxFeeBalance: contracts_test_utils_1.BalanceAmountScenario.Higher,
        zrxFeeAllowance: contracts_test_utils_1.AllowanceAmountScenario.Higher,
    },
};
describe('FillOrder Tests', function () {
    var fillOrderCombinatorialUtils;
    before(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, blockchainLifecycle.startAsync()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, src_1.fillOrderCombinatorialUtilsFactoryAsync(contracts_test_utils_1.web3Wrapper, contracts_test_utils_1.txDefaults)];
                case 2:
                    fillOrderCombinatorialUtils = _a.sent();
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
    describe('fillOrder', function () {
        var test = function (fillScenarios) {
            _.forEach(fillScenarios, function (fillScenario) {
                var description = "Combinatorial OrderFill: " + JSON.stringify(fillScenario);
                it(description, function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, fillOrderCombinatorialUtils.testFillOrderScenarioAsync(contracts_test_utils_1.provider, fillScenario)];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
            });
        };
        var allFillScenarios = src_1.FillOrderCombinatorialUtils.generateFillOrderCombinations();
        describe('Combinatorially generated fills orders', function () { return test(allFillScenarios); });
        it('should transfer the correct amounts when makerAssetAmount === takerAssetAmount', function () { return __awaiter(_this, void 0, void 0, function () {
            var fillScenario;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fillScenario = __assign({}, defaultFillScenario);
                        return [4 /*yield*/, fillOrderCombinatorialUtils.testFillOrderScenarioAsync(contracts_test_utils_1.provider, fillScenario)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should transfer the correct amounts when makerAssetAmount > takerAssetAmount', function () { return __awaiter(_this, void 0, void 0, function () {
            var fillScenario;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fillScenario = __assign({}, defaultFillScenario, { orderScenario: __assign({}, defaultFillScenario.orderScenario, { takerAssetAmountScenario: contracts_test_utils_1.OrderAssetAmountScenario.Small }) });
                        return [4 /*yield*/, fillOrderCombinatorialUtils.testFillOrderScenarioAsync(contracts_test_utils_1.provider, fillScenario)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should transfer the correct amounts when makerAssetAmount < takerAssetAmount', function () { return __awaiter(_this, void 0, void 0, function () {
            var fillScenario;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fillScenario = __assign({}, defaultFillScenario, { orderScenario: __assign({}, defaultFillScenario.orderScenario, { makerAssetAmountScenario: contracts_test_utils_1.OrderAssetAmountScenario.Small }) });
                        return [4 /*yield*/, fillOrderCombinatorialUtils.testFillOrderScenarioAsync(contracts_test_utils_1.provider, fillScenario)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should transfer the correct amounts when makerAssetAmount < takerAssetAmount with zero decimals', function () { return __awaiter(_this, void 0, void 0, function () {
            var fillScenario;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fillScenario = __assign({}, defaultFillScenario, { orderScenario: __assign({}, defaultFillScenario.orderScenario, { makerAssetAmountScenario: contracts_test_utils_1.OrderAssetAmountScenario.Small, makerAssetDataScenario: contracts_test_utils_1.AssetDataScenario.ERC20ZeroDecimals }) });
                        return [4 /*yield*/, fillOrderCombinatorialUtils.testFillOrderScenarioAsync(contracts_test_utils_1.provider, fillScenario)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should transfer the correct amounts when taker is specified and order is claimed by taker', function () { return __awaiter(_this, void 0, void 0, function () {
            var fillScenario;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fillScenario = __assign({}, defaultFillScenario, { orderScenario: __assign({}, defaultFillScenario.orderScenario, { takerScenario: contracts_test_utils_1.TakerScenario.CorrectlySpecified }) });
                        return [4 /*yield*/, fillOrderCombinatorialUtils.testFillOrderScenarioAsync(contracts_test_utils_1.provider, fillScenario)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should fill remaining value if takerAssetFillAmount > remaining takerAssetAmount', function () { return __awaiter(_this, void 0, void 0, function () {
            var fillScenario;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fillScenario = __assign({}, defaultFillScenario, { takerAssetFillAmountScenario: contracts_test_utils_1.TakerAssetFillAmountScenario.GreaterThanRemainingFillableTakerAssetAmount });
                        return [4 /*yield*/, fillOrderCombinatorialUtils.testFillOrderScenarioAsync(contracts_test_utils_1.provider, fillScenario)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should throw when taker is specified and order is claimed by other', function () { return __awaiter(_this, void 0, void 0, function () {
            var fillScenario;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fillScenario = __assign({}, defaultFillScenario, { orderScenario: __assign({}, defaultFillScenario.orderScenario, { takerScenario: contracts_test_utils_1.TakerScenario.IncorrectlySpecified }) });
                        return [4 /*yield*/, fillOrderCombinatorialUtils.testFillOrderScenarioAsync(contracts_test_utils_1.provider, fillScenario)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should throw if makerAssetAmount is 0', function () { return __awaiter(_this, void 0, void 0, function () {
            var fillScenario;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fillScenario = __assign({}, defaultFillScenario, { orderScenario: __assign({}, defaultFillScenario.orderScenario, { makerAssetAmountScenario: contracts_test_utils_1.OrderAssetAmountScenario.Zero }), takerAssetFillAmountScenario: contracts_test_utils_1.TakerAssetFillAmountScenario.GreaterThanRemainingFillableTakerAssetAmount });
                        return [4 /*yield*/, fillOrderCombinatorialUtils.testFillOrderScenarioAsync(contracts_test_utils_1.provider, fillScenario)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should throw if takerAssetAmount is 0', function () { return __awaiter(_this, void 0, void 0, function () {
            var fillScenario;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fillScenario = __assign({}, defaultFillScenario, { orderScenario: __assign({}, defaultFillScenario.orderScenario, { takerAssetAmountScenario: contracts_test_utils_1.OrderAssetAmountScenario.Zero }), takerAssetFillAmountScenario: contracts_test_utils_1.TakerAssetFillAmountScenario.GreaterThanRemainingFillableTakerAssetAmount });
                        return [4 /*yield*/, fillOrderCombinatorialUtils.testFillOrderScenarioAsync(contracts_test_utils_1.provider, fillScenario)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should throw if takerAssetFillAmount is 0', function () { return __awaiter(_this, void 0, void 0, function () {
            var fillScenario;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fillScenario = __assign({}, defaultFillScenario, { takerAssetFillAmountScenario: contracts_test_utils_1.TakerAssetFillAmountScenario.Zero });
                        return [4 /*yield*/, fillOrderCombinatorialUtils.testFillOrderScenarioAsync(contracts_test_utils_1.provider, fillScenario)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should throw if an order is expired', function () { return __awaiter(_this, void 0, void 0, function () {
            var fillScenario;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fillScenario = __assign({}, defaultFillScenario, { orderScenario: __assign({}, defaultFillScenario.orderScenario, { expirationTimeSecondsScenario: contracts_test_utils_1.ExpirationTimeSecondsScenario.InPast }) });
                        return [4 /*yield*/, fillOrderCombinatorialUtils.testFillOrderScenarioAsync(contracts_test_utils_1.provider, fillScenario)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should throw if maker erc20Balances are too low to fill order', function () { return __awaiter(_this, void 0, void 0, function () {
            var fillScenario;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fillScenario = __assign({}, defaultFillScenario, { makerStateScenario: __assign({}, defaultFillScenario.makerStateScenario, { traderAssetBalance: contracts_test_utils_1.BalanceAmountScenario.TooLow }) });
                        return [4 /*yield*/, fillOrderCombinatorialUtils.testFillOrderScenarioAsync(contracts_test_utils_1.provider, fillScenario)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should throw if taker erc20Balances are too low to fill order', function () { return __awaiter(_this, void 0, void 0, function () {
            var fillScenario;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fillScenario = __assign({}, defaultFillScenario, { takerStateScenario: __assign({}, defaultFillScenario.makerStateScenario, { traderAssetBalance: contracts_test_utils_1.BalanceAmountScenario.TooLow }) });
                        return [4 /*yield*/, fillOrderCombinatorialUtils.testFillOrderScenarioAsync(contracts_test_utils_1.provider, fillScenario)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should throw if maker allowances are too low to fill order', function () { return __awaiter(_this, void 0, void 0, function () {
            var fillScenario;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fillScenario = __assign({}, defaultFillScenario, { makerStateScenario: __assign({}, defaultFillScenario.makerStateScenario, { traderAssetAllowance: contracts_test_utils_1.AllowanceAmountScenario.TooLow }) });
                        return [4 /*yield*/, fillOrderCombinatorialUtils.testFillOrderScenarioAsync(contracts_test_utils_1.provider, fillScenario)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should throw if taker allowances are too low to fill order', function () { return __awaiter(_this, void 0, void 0, function () {
            var fillScenario;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fillScenario = __assign({}, defaultFillScenario, { takerStateScenario: __assign({}, defaultFillScenario.makerStateScenario, { traderAssetAllowance: contracts_test_utils_1.AllowanceAmountScenario.TooLow }) });
                        return [4 /*yield*/, fillOrderCombinatorialUtils.testFillOrderScenarioAsync(contracts_test_utils_1.provider, fillScenario)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('Testing exchange of ERC721 Tokens', function () {
        it('should successfully exchange a single token between the maker and taker (via fillOrder)', function () { return __awaiter(_this, void 0, void 0, function () {
            var fillScenario;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fillScenario = __assign({}, defaultFillScenario, { orderScenario: __assign({}, defaultFillScenario.orderScenario, { makerAssetDataScenario: contracts_test_utils_1.AssetDataScenario.ERC721, takerAssetDataScenario: contracts_test_utils_1.AssetDataScenario.ERC721 }), takerAssetFillAmountScenario: contracts_test_utils_1.TakerAssetFillAmountScenario.ExactlyRemainingFillableTakerAssetAmount });
                        return [4 /*yield*/, fillOrderCombinatorialUtils.testFillOrderScenarioAsync(contracts_test_utils_1.provider, fillScenario)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should successfully fill order when makerAsset is ERC721 and takerAsset is ERC20', function () { return __awaiter(_this, void 0, void 0, function () {
            var fillScenario;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fillScenario = __assign({}, defaultFillScenario, { orderScenario: __assign({}, defaultFillScenario.orderScenario, { makerAssetDataScenario: contracts_test_utils_1.AssetDataScenario.ERC721, takerAssetDataScenario: contracts_test_utils_1.AssetDataScenario.ERC20NonZRXEighteenDecimals }), takerAssetFillAmountScenario: contracts_test_utils_1.TakerAssetFillAmountScenario.ExactlyRemainingFillableTakerAssetAmount });
                        return [4 /*yield*/, fillOrderCombinatorialUtils.testFillOrderScenarioAsync(contracts_test_utils_1.provider, fillScenario, true)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should successfully fill order when makerAsset is ERC20 and takerAsset is ERC721', function () { return __awaiter(_this, void 0, void 0, function () {
            var fillScenario;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fillScenario = __assign({}, defaultFillScenario, { orderScenario: __assign({}, defaultFillScenario.orderScenario, { makerAssetDataScenario: contracts_test_utils_1.AssetDataScenario.ERC20NonZRXEighteenDecimals, takerAssetDataScenario: contracts_test_utils_1.AssetDataScenario.ERC721 }), takerAssetFillAmountScenario: contracts_test_utils_1.TakerAssetFillAmountScenario.ExactlyRemainingFillableTakerAssetAmount });
                        return [4 /*yield*/, fillOrderCombinatorialUtils.testFillOrderScenarioAsync(contracts_test_utils_1.provider, fillScenario)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should successfully fill order when makerAsset is ERC721 and approveAll is set for it', function () { return __awaiter(_this, void 0, void 0, function () {
            var fillScenario;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fillScenario = __assign({}, defaultFillScenario, { orderScenario: __assign({}, defaultFillScenario.orderScenario, { makerAssetDataScenario: contracts_test_utils_1.AssetDataScenario.ERC721, takerAssetDataScenario: contracts_test_utils_1.AssetDataScenario.ERC20NonZRXEighteenDecimals }), takerAssetFillAmountScenario: contracts_test_utils_1.TakerAssetFillAmountScenario.ExactlyRemainingFillableTakerAssetAmount, makerStateScenario: __assign({}, defaultFillScenario.makerStateScenario, { traderAssetAllowance: contracts_test_utils_1.AllowanceAmountScenario.Unlimited }) });
                        return [4 /*yield*/, fillOrderCombinatorialUtils.testFillOrderScenarioAsync(contracts_test_utils_1.provider, fillScenario)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should successfully fill order when makerAsset and takerAsset are ERC721 and approveAll is set for them', function () { return __awaiter(_this, void 0, void 0, function () {
            var fillScenario;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fillScenario = __assign({}, defaultFillScenario, { orderScenario: __assign({}, defaultFillScenario.orderScenario, { makerAssetDataScenario: contracts_test_utils_1.AssetDataScenario.ERC721, takerAssetDataScenario: contracts_test_utils_1.AssetDataScenario.ERC721 }), takerAssetFillAmountScenario: contracts_test_utils_1.TakerAssetFillAmountScenario.ExactlyRemainingFillableTakerAssetAmount, makerStateScenario: __assign({}, defaultFillScenario.makerStateScenario, { traderAssetAllowance: contracts_test_utils_1.AllowanceAmountScenario.Unlimited }), takerStateScenario: __assign({}, defaultFillScenario.takerStateScenario, { traderAssetAllowance: contracts_test_utils_1.AllowanceAmountScenario.Unlimited }) });
                        return [4 /*yield*/, fillOrderCombinatorialUtils.testFillOrderScenarioAsync(contracts_test_utils_1.provider, fillScenario)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
//# sourceMappingURL=fill_order.js.map