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
var types_1 = require("@0x/types");
var utils_1 = require("@0x/utils");
var chai = require("chai");
var _ = require("lodash");
var src_1 = require("../src");
contracts_test_utils_1.chaiSetup.configure();
var expect = chai.expect;
var blockchainLifecycle = new dev_utils_1.BlockchainLifecycle(contracts_test_utils_1.web3Wrapper);
var MAX_UINT256 = new utils_1.BigNumber(2).pow(256).minus(1);
var emptyOrder = {
    senderAddress: contracts_test_utils_1.constants.NULL_ADDRESS,
    makerAddress: contracts_test_utils_1.constants.NULL_ADDRESS,
    takerAddress: contracts_test_utils_1.constants.NULL_ADDRESS,
    makerFee: new utils_1.BigNumber(0),
    takerFee: new utils_1.BigNumber(0),
    makerAssetAmount: new utils_1.BigNumber(0),
    takerAssetAmount: new utils_1.BigNumber(0),
    makerAssetData: '0x',
    takerAssetData: '0x',
    salt: new utils_1.BigNumber(0),
    exchangeAddress: contracts_test_utils_1.constants.NULL_ADDRESS,
    feeRecipientAddress: contracts_test_utils_1.constants.NULL_ADDRESS,
    expirationTimeSeconds: new utils_1.BigNumber(0),
};
var emptySignedOrder = __assign({}, emptyOrder, { signature: '' });
var overflowErrorForCall = new Error(types_1.RevertReason.Uint256Overflow);
describe('Exchange core internal functions', function () {
    var testExchange;
    var overflowErrorForSendTransaction;
    var divisionByZeroErrorForCall;
    var roundingErrorForCall;
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
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, src_1.TestExchangeInternalsContract.deployFrom0xArtifactAsync(src_1.artifacts.TestExchangeInternals, contracts_test_utils_1.provider, contracts_test_utils_1.txDefaults)];
                case 1:
                    testExchange = _b.sent();
                    _a = Error.bind;
                    return [4 /*yield*/, contracts_test_utils_1.getRevertReasonOrErrorMessageForSendTransactionAsync(types_1.RevertReason.Uint256Overflow)];
                case 2:
                    overflowErrorForSendTransaction = new (_a.apply(Error, [void 0, _b.sent()]))();
                    divisionByZeroErrorForCall = new Error(types_1.RevertReason.DivisionByZero);
                    roundingErrorForCall = new Error(types_1.RevertReason.RoundingError);
                    return [2 /*return*/];
            }
        });
    }); });
    // Note(albrow): Don't forget to add beforeEach and afterEach calls to reset
    // the blockchain state for any tests which modify it!
    function referenceIsRoundingErrorFloorAsync(numerator, denominator, target) {
        return __awaiter(this, void 0, void 0, function () {
            var product, remainder, remainderTimes1000, isError;
            return __generator(this, function (_a) {
                if (denominator.eq(0)) {
                    throw divisionByZeroErrorForCall;
                }
                if (numerator.eq(0)) {
                    return [2 /*return*/, false];
                }
                if (target.eq(0)) {
                    return [2 /*return*/, false];
                }
                product = numerator.multipliedBy(target);
                remainder = product.mod(denominator);
                remainderTimes1000 = remainder.multipliedBy('1000');
                isError = remainderTimes1000.gte(product);
                if (product.isGreaterThan(MAX_UINT256)) {
                    throw overflowErrorForCall;
                }
                if (remainderTimes1000.isGreaterThan(MAX_UINT256)) {
                    throw overflowErrorForCall;
                }
                return [2 /*return*/, isError];
            });
        });
    }
    function referenceIsRoundingErrorCeilAsync(numerator, denominator, target) {
        return __awaiter(this, void 0, void 0, function () {
            var product, remainder, error, errorTimes1000, isError;
            return __generator(this, function (_a) {
                if (denominator.eq(0)) {
                    throw divisionByZeroErrorForCall;
                }
                if (numerator.eq(0)) {
                    return [2 /*return*/, false];
                }
                if (target.eq(0)) {
                    return [2 /*return*/, false];
                }
                product = numerator.multipliedBy(target);
                remainder = product.mod(denominator);
                error = denominator.minus(remainder).mod(denominator);
                errorTimes1000 = error.multipliedBy('1000');
                isError = errorTimes1000.gte(product);
                if (product.isGreaterThan(MAX_UINT256)) {
                    throw overflowErrorForCall;
                }
                if (errorTimes1000.isGreaterThan(MAX_UINT256)) {
                    throw overflowErrorForCall;
                }
                return [2 /*return*/, isError];
            });
        });
    }
    function referenceSafeGetPartialAmountFloorAsync(numerator, denominator, target) {
        return __awaiter(this, void 0, void 0, function () {
            var isRoundingError, product;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (denominator.eq(0)) {
                            throw divisionByZeroErrorForCall;
                        }
                        return [4 /*yield*/, referenceIsRoundingErrorFloorAsync(numerator, denominator, target)];
                    case 1:
                        isRoundingError = _a.sent();
                        if (isRoundingError) {
                            throw roundingErrorForCall;
                        }
                        product = numerator.multipliedBy(target);
                        if (product.isGreaterThan(MAX_UINT256)) {
                            throw overflowErrorForCall;
                        }
                        return [2 /*return*/, product.dividedToIntegerBy(denominator)];
                }
            });
        });
    }
    describe('addFillResults', function () { return __awaiter(_this, void 0, void 0, function () {
        function makeFillResults(value) {
            return {
                makerAssetFilledAmount: value,
                takerAssetFilledAmount: value,
                makerFeePaid: value,
                takerFeePaid: value,
            };
        }
        function referenceAddFillResultsAsync(totalValue, singleValue) {
            return __awaiter(this, void 0, void 0, function () {
                var totalFillResults, singleFillResults;
                return __generator(this, function (_a) {
                    totalFillResults = makeFillResults(totalValue);
                    singleFillResults = makeFillResults(singleValue);
                    // HACK(albrow): _.mergeWith mutates the first argument! To
                    // workaround this we use _.cloneDeep.
                    return [2 /*return*/, _.mergeWith(_.cloneDeep(totalFillResults), singleFillResults, function (totalVal, singleVal) {
                            var newTotal = totalVal.plus(singleVal);
                            if (newTotal.isGreaterThan(MAX_UINT256)) {
                                throw overflowErrorForCall;
                            }
                            return newTotal;
                        })];
                });
            });
        }
        function testAddFillResultsAsync(totalValue, singleValue) {
            return __awaiter(this, void 0, void 0, function () {
                var totalFillResults, singleFillResults;
                return __generator(this, function (_a) {
                    totalFillResults = makeFillResults(totalValue);
                    singleFillResults = makeFillResults(singleValue);
                    return [2 /*return*/, testExchange.publicAddFillResults.callAsync(totalFillResults, singleFillResults)];
                });
            });
        }
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, contracts_test_utils_1.testCombinatoriallyWithReferenceFuncAsync('addFillResults', referenceAddFillResultsAsync, testAddFillResultsAsync, [contracts_test_utils_1.uint256Values, contracts_test_utils_1.uint256Values])];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    describe('calculateFillResults', function () { return __awaiter(_this, void 0, void 0, function () {
        function makeOrder(makerAssetAmount, takerAssetAmount, makerFee, takerFee) {
            return __assign({}, emptyOrder, { makerAssetAmount: makerAssetAmount,
                takerAssetAmount: takerAssetAmount,
                makerFee: makerFee,
                takerFee: takerFee });
        }
        function referenceCalculateFillResultsAsync(orderTakerAssetAmount, takerAssetFilledAmount, otherAmount) {
            return __awaiter(this, void 0, void 0, function () {
                var makerAssetFilledAmount, order, orderMakerAssetAmount, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, referenceSafeGetPartialAmountFloorAsync(takerAssetFilledAmount, orderTakerAssetAmount, otherAmount)];
                        case 1:
                            makerAssetFilledAmount = _b.sent();
                            order = makeOrder(otherAmount, orderTakerAssetAmount, otherAmount, otherAmount);
                            orderMakerAssetAmount = order.makerAssetAmount;
                            _a = {
                                makerAssetFilledAmount: makerAssetFilledAmount,
                                takerAssetFilledAmount: takerAssetFilledAmount
                            };
                            return [4 /*yield*/, referenceSafeGetPartialAmountFloorAsync(makerAssetFilledAmount, orderMakerAssetAmount, otherAmount)];
                        case 2:
                            _a.makerFeePaid = _b.sent();
                            return [4 /*yield*/, referenceSafeGetPartialAmountFloorAsync(takerAssetFilledAmount, orderTakerAssetAmount, otherAmount)];
                        case 3: return [2 /*return*/, (_a.takerFeePaid = _b.sent(),
                                _a)];
                    }
                });
            });
        }
        function testCalculateFillResultsAsync(orderTakerAssetAmount, takerAssetFilledAmount, otherAmount) {
            return __awaiter(this, void 0, void 0, function () {
                var order;
                return __generator(this, function (_a) {
                    order = makeOrder(otherAmount, orderTakerAssetAmount, otherAmount, otherAmount);
                    return [2 /*return*/, testExchange.publicCalculateFillResults.callAsync(order, takerAssetFilledAmount)];
                });
            });
        }
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, contracts_test_utils_1.testCombinatoriallyWithReferenceFuncAsync('calculateFillResults', referenceCalculateFillResultsAsync, testCalculateFillResultsAsync, [contracts_test_utils_1.uint256Values, contracts_test_utils_1.uint256Values, contracts_test_utils_1.uint256Values])];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    describe('getPartialAmountFloor', function () { return __awaiter(_this, void 0, void 0, function () {
        function referenceGetPartialAmountFloorAsync(numerator, denominator, target) {
            return __awaiter(this, void 0, void 0, function () {
                var product;
                return __generator(this, function (_a) {
                    if (denominator.eq(0)) {
                        throw divisionByZeroErrorForCall;
                    }
                    product = numerator.multipliedBy(target);
                    if (product.isGreaterThan(MAX_UINT256)) {
                        throw overflowErrorForCall;
                    }
                    return [2 /*return*/, product.dividedToIntegerBy(denominator)];
                });
            });
        }
        function testGetPartialAmountFloorAsync(numerator, denominator, target) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, testExchange.publicGetPartialAmountFloor.callAsync(numerator, denominator, target)];
                });
            });
        }
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, contracts_test_utils_1.testCombinatoriallyWithReferenceFuncAsync('getPartialAmountFloor', referenceGetPartialAmountFloorAsync, testGetPartialAmountFloorAsync, [contracts_test_utils_1.uint256Values, contracts_test_utils_1.uint256Values, contracts_test_utils_1.uint256Values])];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    describe('getPartialAmountCeil', function () { return __awaiter(_this, void 0, void 0, function () {
        function referenceGetPartialAmountCeilAsync(numerator, denominator, target) {
            return __awaiter(this, void 0, void 0, function () {
                var product, offset, result;
                return __generator(this, function (_a) {
                    if (denominator.eq(0)) {
                        throw divisionByZeroErrorForCall;
                    }
                    product = numerator.multipliedBy(target);
                    offset = product.plus(denominator.minus(1));
                    if (offset.isGreaterThan(MAX_UINT256)) {
                        throw overflowErrorForCall;
                    }
                    result = offset.dividedToIntegerBy(denominator);
                    if (product.mod(denominator).eq(0)) {
                        expect(result.multipliedBy(denominator)).to.be.bignumber.eq(product);
                    }
                    else {
                        expect(result.multipliedBy(denominator)).to.be.bignumber.gt(product);
                    }
                    return [2 /*return*/, result];
                });
            });
        }
        function testGetPartialAmountCeilAsync(numerator, denominator, target) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, testExchange.publicGetPartialAmountCeil.callAsync(numerator, denominator, target)];
                });
            });
        }
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, contracts_test_utils_1.testCombinatoriallyWithReferenceFuncAsync('getPartialAmountCeil', referenceGetPartialAmountCeilAsync, testGetPartialAmountCeilAsync, [contracts_test_utils_1.uint256Values, contracts_test_utils_1.uint256Values, contracts_test_utils_1.uint256Values])];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    describe('safeGetPartialAmountFloor', function () { return __awaiter(_this, void 0, void 0, function () {
        function testSafeGetPartialAmountFloorAsync(numerator, denominator, target) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, testExchange.publicSafeGetPartialAmountFloor.callAsync(numerator, denominator, target)];
                });
            });
        }
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, contracts_test_utils_1.testCombinatoriallyWithReferenceFuncAsync('safeGetPartialAmountFloor', referenceSafeGetPartialAmountFloorAsync, testSafeGetPartialAmountFloorAsync, [contracts_test_utils_1.uint256Values, contracts_test_utils_1.uint256Values, contracts_test_utils_1.uint256Values])];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    describe('safeGetPartialAmountCeil', function () { return __awaiter(_this, void 0, void 0, function () {
        function referenceSafeGetPartialAmountCeilAsync(numerator, denominator, target) {
            return __awaiter(this, void 0, void 0, function () {
                var isRoundingError, product, offset, result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (denominator.eq(0)) {
                                throw divisionByZeroErrorForCall;
                            }
                            return [4 /*yield*/, referenceIsRoundingErrorCeilAsync(numerator, denominator, target)];
                        case 1:
                            isRoundingError = _a.sent();
                            if (isRoundingError) {
                                throw roundingErrorForCall;
                            }
                            product = numerator.multipliedBy(target);
                            offset = product.plus(denominator.minus(1));
                            if (offset.isGreaterThan(MAX_UINT256)) {
                                throw overflowErrorForCall;
                            }
                            result = offset.dividedToIntegerBy(denominator);
                            if (product.mod(denominator).eq(0)) {
                                expect(result.multipliedBy(denominator)).to.be.bignumber.eq(product);
                            }
                            else {
                                expect(result.multipliedBy(denominator)).to.be.bignumber.gt(product);
                            }
                            return [2 /*return*/, result];
                    }
                });
            });
        }
        function testSafeGetPartialAmountCeilAsync(numerator, denominator, target) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, testExchange.publicSafeGetPartialAmountCeil.callAsync(numerator, denominator, target)];
                });
            });
        }
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, contracts_test_utils_1.testCombinatoriallyWithReferenceFuncAsync('safeGetPartialAmountCeil', referenceSafeGetPartialAmountCeilAsync, testSafeGetPartialAmountCeilAsync, [contracts_test_utils_1.uint256Values, contracts_test_utils_1.uint256Values, contracts_test_utils_1.uint256Values])];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    describe('isRoundingErrorFloor', function () { return __awaiter(_this, void 0, void 0, function () {
        function testIsRoundingErrorFloorAsync(numerator, denominator, target) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, testExchange.publicIsRoundingErrorFloor.callAsync(numerator, denominator, target)];
                });
            });
        }
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, contracts_test_utils_1.testCombinatoriallyWithReferenceFuncAsync('isRoundingErrorFloor', referenceIsRoundingErrorFloorAsync, testIsRoundingErrorFloorAsync, [contracts_test_utils_1.uint256Values, contracts_test_utils_1.uint256Values, contracts_test_utils_1.uint256Values])];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    describe('isRoundingErrorCeil', function () { return __awaiter(_this, void 0, void 0, function () {
        function testIsRoundingErrorCeilAsync(numerator, denominator, target) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, testExchange.publicIsRoundingErrorCeil.callAsync(numerator, denominator, target)];
                });
            });
        }
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, contracts_test_utils_1.testCombinatoriallyWithReferenceFuncAsync('isRoundingErrorCeil', referenceIsRoundingErrorCeilAsync, testIsRoundingErrorCeilAsync, [contracts_test_utils_1.uint256Values, contracts_test_utils_1.uint256Values, contracts_test_utils_1.uint256Values])];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    describe('updateFilledState', function () { return __awaiter(_this, void 0, void 0, function () {
        function referenceUpdateFilledStateAsync(takerAssetFilledAmount, orderTakerAssetFilledAmount, 
        // tslint:disable-next-line:no-unused-variable
        orderHash) {
            return __awaiter(this, void 0, void 0, function () {
                var totalFilledAmount;
                return __generator(this, function (_a) {
                    totalFilledAmount = takerAssetFilledAmount.plus(orderTakerAssetFilledAmount);
                    if (totalFilledAmount.isGreaterThan(MAX_UINT256)) {
                        throw overflowErrorForSendTransaction;
                    }
                    return [2 /*return*/, totalFilledAmount];
                });
            });
        }
        function testUpdateFilledStateAsync(takerAssetFilledAmount, orderTakerAssetFilledAmount, orderHash) {
            return __awaiter(this, void 0, void 0, function () {
                var fillResults, _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            fillResults = {
                                makerAssetFilledAmount: new utils_1.BigNumber(0),
                                takerAssetFilledAmount: takerAssetFilledAmount,
                                makerFeePaid: new utils_1.BigNumber(0),
                                takerFeePaid: new utils_1.BigNumber(0),
                            };
                            _b = (_a = contracts_test_utils_1.web3Wrapper).awaitTransactionSuccessAsync;
                            return [4 /*yield*/, testExchange.publicUpdateFilledState.sendTransactionAsync(emptySignedOrder, contracts_test_utils_1.constants.NULL_ADDRESS, orderHash, orderTakerAssetFilledAmount, fillResults)];
                        case 1: return [4 /*yield*/, _b.apply(_a, [_c.sent(),
                                contracts_test_utils_1.constants.AWAIT_TRANSACTION_MINED_MS])];
                        case 2:
                            _c.sent();
                            return [2 /*return*/, testExchange.filled.callAsync(orderHash)];
                    }
                });
            });
        }
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // Note(albrow): Since updateFilledState modifies the state by calling
                    // sendTransaction, we must reset the state after each test.
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
                    return [4 /*yield*/, contracts_test_utils_1.testCombinatoriallyWithReferenceFuncAsync('updateFilledState', referenceUpdateFilledStateAsync, testUpdateFilledStateAsync, [contracts_test_utils_1.uint256Values, contracts_test_utils_1.uint256Values, contracts_test_utils_1.bytes32Values])];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=internal.js.map