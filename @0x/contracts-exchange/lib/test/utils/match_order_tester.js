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
Object.defineProperty(exports, "__esModule", { value: true });
var contracts_test_utils_1 = require("@0x/contracts-test-utils");
var order_utils_1 = require("@0x/order-utils");
var types_1 = require("@0x/types");
var utils_1 = require("@0x/utils");
var chai = require("chai");
var _ = require("lodash");
contracts_test_utils_1.chaiSetup.configure();
var expect = chai.expect;
var MatchOrderTester = /** @class */ (function () {
    /// @dev Constructs new MatchOrderTester.
    /// @param exchangeWrapper Used to call to the Exchange.
    /// @param erc20Wrapper Used to fetch ERC20 balances.
    /// @param erc721Wrapper Used to fetch ERC721 token owners.
    /// @param feeTokenAddress Address of ERC20 fee token.
    function MatchOrderTester(exchangeWrapper, erc20Wrapper, erc721Wrapper, feeTokenAddress) {
        this._exchangeWrapper = exchangeWrapper;
        this._erc20Wrapper = erc20Wrapper;
        this._erc721Wrapper = erc721Wrapper;
        this._feeTokenAddress = feeTokenAddress;
    }
    /// @dev Checks values from the logs produced by Exchange.matchOrders against the expected transfer amounts.
    ///      Values include the amounts transferred from the left/right makers and taker, along with
    ///      the fees paid on each matched order. These are also the return values of MatchOrders.
    /// @param signedOrderLeft First matched order.
    /// @param signedOrderRight Second matched order.
    /// @param transactionReceipt Transaction receipt and logs produced by Exchange.matchOrders.
    /// @param takerAddress Address of taker (account that called Exchange.matchOrders)
    /// @param expectedTransferAmounts Expected amounts transferred as a result of order matching.
    MatchOrderTester._assertLogsAsync = function (signedOrderLeft, signedOrderRight, transactionReceipt, takerAddress, expectedTransferAmounts) {
        return __awaiter(this, void 0, void 0, function () {
            var transactionFillLogs, leftLog, amountBoughtByLeftMaker, amountSoldByLeftMaker, feePaidByLeftMaker, feePaidByTakerLeft, rightLog, amountBoughtByRightMaker, amountSoldByRightMaker, feePaidByRightMaker, feePaidByTakerRight, amountReceivedByTaker;
            return __generator(this, function (_a) {
                transactionFillLogs = _.filter(transactionReceipt.logs, ['event', 'Fill']);
                expect(transactionFillLogs.length, 'Checking number of logs').to.be.equal(2);
                leftLog = transactionFillLogs[0].args;
                expect(leftLog.makerAddress, 'Checking logged maker address of left order').to.be.equal(signedOrderLeft.makerAddress);
                expect(leftLog.takerAddress, 'Checking logged taker address of right order').to.be.equal(takerAddress);
                amountBoughtByLeftMaker = new utils_1.BigNumber(leftLog.takerAssetFilledAmount);
                amountSoldByLeftMaker = new utils_1.BigNumber(leftLog.makerAssetFilledAmount);
                feePaidByLeftMaker = new utils_1.BigNumber(leftLog.makerFeePaid);
                feePaidByTakerLeft = new utils_1.BigNumber(leftLog.takerFeePaid);
                rightLog = transactionFillLogs[1].args;
                expect(rightLog.makerAddress, 'Checking logged maker address of right order').to.be.equal(signedOrderRight.makerAddress);
                expect(rightLog.takerAddress, 'Checking loggerd taker address of right order').to.be.equal(takerAddress);
                amountBoughtByRightMaker = new utils_1.BigNumber(rightLog.takerAssetFilledAmount);
                amountSoldByRightMaker = new utils_1.BigNumber(rightLog.makerAssetFilledAmount);
                feePaidByRightMaker = new utils_1.BigNumber(rightLog.makerFeePaid);
                feePaidByTakerRight = new utils_1.BigNumber(rightLog.takerFeePaid);
                amountReceivedByTaker = amountSoldByLeftMaker.minus(amountBoughtByRightMaker);
                // Assert log values - left order
                expect(amountBoughtByLeftMaker, 'Checking logged amount bought by left maker').to.be.bignumber.equal(expectedTransferAmounts.amountBoughtByLeftMaker);
                expect(amountSoldByLeftMaker, 'Checking logged amount sold by left maker').to.be.bignumber.equal(expectedTransferAmounts.amountSoldByLeftMaker);
                expect(feePaidByLeftMaker, 'Checking logged fee paid by left maker').to.be.bignumber.equal(expectedTransferAmounts.feePaidByLeftMaker);
                expect(feePaidByTakerLeft, 'Checking logged fee paid on left order by taker').to.be.bignumber.equal(expectedTransferAmounts.feePaidByTakerLeft);
                // Assert log values - right order
                expect(amountBoughtByRightMaker, 'Checking logged amount bought by right maker').to.be.bignumber.equal(expectedTransferAmounts.amountBoughtByRightMaker);
                expect(amountSoldByRightMaker, 'Checking logged amount sold by right maker').to.be.bignumber.equal(expectedTransferAmounts.amountSoldByRightMaker);
                expect(feePaidByRightMaker, 'Checking logged fee paid by right maker').to.be.bignumber.equal(expectedTransferAmounts.feePaidByRightMaker);
                expect(feePaidByTakerRight, 'Checking logged fee paid on right order by taker').to.be.bignumber.equal(expectedTransferAmounts.feePaidByTakerRight);
                // Assert derived amount received by taker
                expect(amountReceivedByTaker, 'Checking logged amount received by taker').to.be.bignumber.equal(expectedTransferAmounts.amountReceivedByTaker);
                return [2 /*return*/];
            });
        });
    };
    /// @dev Asserts all expected ERC20 and ERC721 account holdings match the real holdings.
    /// @param expectedERC20BalancesByOwner Expected ERC20 balances.
    /// @param realERC20BalancesByOwner Real ERC20 balances.
    /// @param expectedERC721TokenIdsByOwner Expected ERC721 token owners.
    /// @param realERC721TokenIdsByOwner Real ERC20 token owners.
    MatchOrderTester._assertAllKnownBalancesAsync = function (expectedERC20BalancesByOwner, realERC20BalancesByOwner, expectedERC721TokenIdsByOwner, realERC721TokenIdsByOwner) {
        return __awaiter(this, void 0, void 0, function () {
            var areERC20BalancesEqual, sortedExpectedNewERC721TokenIdsByOwner, sortedNewERC721TokenIdsByOwner, areERC721TokenIdsEqual;
            return __generator(this, function (_a) {
                areERC20BalancesEqual = _.isEqual(expectedERC20BalancesByOwner, realERC20BalancesByOwner);
                expect(areERC20BalancesEqual, 'Checking all known ERC20 account balances').to.be.true();
                sortedExpectedNewERC721TokenIdsByOwner = _.mapValues(expectedERC721TokenIdsByOwner, function (tokenIdsByOwner) {
                    _.mapValues(tokenIdsByOwner, function (tokenIds) {
                        _.sortBy(tokenIds);
                    });
                });
                sortedNewERC721TokenIdsByOwner = _.mapValues(realERC721TokenIdsByOwner, function (tokenIdsByOwner) {
                    _.mapValues(tokenIdsByOwner, function (tokenIds) {
                        _.sortBy(tokenIds);
                    });
                });
                areERC721TokenIdsEqual = _.isEqual(sortedExpectedNewERC721TokenIdsByOwner, sortedNewERC721TokenIdsByOwner);
                expect(areERC721TokenIdsEqual, 'Checking all known ERC721 account balances').to.be.true();
                return [2 /*return*/];
            });
        });
    };
    /// @dev Matches two complementary orders and asserts results.
    /// @param signedOrderLeft First matched order.
    /// @param signedOrderRight Second matched order.
    /// @param takerAddress Address of taker (the address who matched the two orders)
    /// @param erc20BalancesByOwner Current ERC20 balances.
    /// @param erc721TokenIdsByOwner Current ERC721 token owners.
    /// @param expectedTransferAmounts Expected amounts transferred as a result of order matching.
    /// @param initialLeftOrderFilledAmount How much left order has been filled, prior to matching orders.
    /// @param initialRightOrderFilledAmount How much the right order has been filled, prior to matching orders.
    /// @return New ERC20 balances & ERC721 token owners.
    MatchOrderTester.prototype.matchOrdersAndAssertEffectsAsync = function (signedOrderLeft, signedOrderRight, takerAddress, erc20BalancesByOwner, erc721TokenIdsByOwner, expectedTransferAmounts, initialLeftOrderFilledAmount, initialRightOrderFilledAmount) {
        if (initialLeftOrderFilledAmount === void 0) { initialLeftOrderFilledAmount = new utils_1.BigNumber(0); }
        if (initialRightOrderFilledAmount === void 0) { initialRightOrderFilledAmount = new utils_1.BigNumber(0); }
        return __awaiter(this, void 0, void 0, function () {
            var transactionReceipt, newERC20BalancesByOwner, newERC721TokenIdsByOwner;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // Assert initial order states
                    return [4 /*yield*/, this._assertInitialOrderStatesAsync(signedOrderLeft, signedOrderRight, initialLeftOrderFilledAmount, initialRightOrderFilledAmount)];
                    case 1:
                        // Assert initial order states
                        _a.sent();
                        return [4 /*yield*/, this._exchangeWrapper.matchOrdersAsync(signedOrderLeft, signedOrderRight, takerAddress)];
                    case 2:
                        transactionReceipt = _a.sent();
                        return [4 /*yield*/, this._erc20Wrapper.getBalancesAsync()];
                    case 3:
                        newERC20BalancesByOwner = _a.sent();
                        return [4 /*yield*/, this._erc721Wrapper.getBalancesAsync()];
                    case 4:
                        newERC721TokenIdsByOwner = _a.sent();
                        // Assert logs
                        return [4 /*yield*/, MatchOrderTester._assertLogsAsync(signedOrderLeft, signedOrderRight, transactionReceipt, takerAddress, expectedTransferAmounts)];
                    case 5:
                        // Assert logs
                        _a.sent();
                        // Assert exchange state
                        return [4 /*yield*/, this._assertExchangeStateAsync(signedOrderLeft, signedOrderRight, initialLeftOrderFilledAmount, initialRightOrderFilledAmount, expectedTransferAmounts)];
                    case 6:
                        // Assert exchange state
                        _a.sent();
                        // Assert balances of makers, taker, and fee recipients
                        return [4 /*yield*/, this._assertBalancesAsync(signedOrderLeft, signedOrderRight, erc20BalancesByOwner, erc721TokenIdsByOwner, newERC20BalancesByOwner, newERC721TokenIdsByOwner, expectedTransferAmounts, takerAddress)];
                    case 7:
                        // Assert balances of makers, taker, and fee recipients
                        _a.sent();
                        return [2 /*return*/, [newERC20BalancesByOwner, newERC721TokenIdsByOwner]];
                }
            });
        });
    };
    /// @dev Asserts initial exchange state for the left and right orders.
    /// @param signedOrderLeft First matched order.
    /// @param signedOrderRight Second matched order.
    /// @param expectedOrderFilledAmountLeft How much left order has been filled, prior to matching orders.
    /// @param expectedOrderFilledAmountRight How much the right order has been filled, prior to matching orders.
    MatchOrderTester.prototype._assertInitialOrderStatesAsync = function (signedOrderLeft, signedOrderRight, expectedOrderFilledAmountLeft, expectedOrderFilledAmountRight) {
        return __awaiter(this, void 0, void 0, function () {
            var orderTakerAssetFilledAmountLeft, orderTakerAssetFilledAmountRight;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._exchangeWrapper.getTakerAssetFilledAmountAsync(order_utils_1.orderHashUtils.getOrderHashHex(signedOrderLeft))];
                    case 1:
                        orderTakerAssetFilledAmountLeft = _a.sent();
                        expect(orderTakerAssetFilledAmountLeft, 'Checking inital state of left order').to.be.bignumber.equal(expectedOrderFilledAmountLeft);
                        return [4 /*yield*/, this._exchangeWrapper.getTakerAssetFilledAmountAsync(order_utils_1.orderHashUtils.getOrderHashHex(signedOrderRight))];
                    case 2:
                        orderTakerAssetFilledAmountRight = _a.sent();
                        expect(orderTakerAssetFilledAmountRight, 'Checking inital state of right order').to.be.bignumber.equal(expectedOrderFilledAmountRight);
                        return [2 /*return*/];
                }
            });
        });
    };
    /// @dev Asserts the exchange state against the expected amounts transferred by from matching orders.
    /// @param signedOrderLeft First matched order.
    /// @param signedOrderRight Second matched order.
    /// @param initialLeftOrderFilledAmount How much left order has been filled, prior to matching orders.
    /// @param initialRightOrderFilledAmount How much the right order has been filled, prior to matching orders.
    /// @return TransferAmounts A struct containing the expected transfer amounts.
    MatchOrderTester.prototype._assertExchangeStateAsync = function (signedOrderLeft, signedOrderRight, initialLeftOrderFilledAmount, initialRightOrderFilledAmount, expectedTransferAmounts) {
        return __awaiter(this, void 0, void 0, function () {
            var amountBoughtByLeftMaker, amountBoughtByRightMaker, maxAmountBoughtByLeftMaker, leftOrderInfo, leftExpectedStatus, maxAmountBoughtByRightMaker, rightOrderInfo, rightExpectedStatus;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._exchangeWrapper.getTakerAssetFilledAmountAsync(order_utils_1.orderHashUtils.getOrderHashHex(signedOrderLeft))];
                    case 1:
                        amountBoughtByLeftMaker = _a.sent();
                        amountBoughtByLeftMaker = amountBoughtByLeftMaker.minus(initialLeftOrderFilledAmount);
                        expect(amountBoughtByLeftMaker, 'Checking exchange state for left order').to.be.bignumber.equal(expectedTransferAmounts.amountBoughtByLeftMaker);
                        return [4 /*yield*/, this._exchangeWrapper.getTakerAssetFilledAmountAsync(order_utils_1.orderHashUtils.getOrderHashHex(signedOrderRight))];
                    case 2:
                        amountBoughtByRightMaker = _a.sent();
                        amountBoughtByRightMaker = amountBoughtByRightMaker.minus(initialRightOrderFilledAmount);
                        expect(amountBoughtByRightMaker, 'Checking exchange state for right order').to.be.bignumber.equal(expectedTransferAmounts.amountBoughtByRightMaker);
                        maxAmountBoughtByLeftMaker = signedOrderLeft.takerAssetAmount.minus(initialLeftOrderFilledAmount);
                        return [4 /*yield*/, this._exchangeWrapper.getOrderInfoAsync(signedOrderLeft)];
                    case 3:
                        leftOrderInfo = _a.sent();
                        leftExpectedStatus = expectedTransferAmounts.amountBoughtByLeftMaker.isEqualTo(maxAmountBoughtByLeftMaker)
                            ? contracts_test_utils_1.OrderStatus.FullyFilled
                            : contracts_test_utils_1.OrderStatus.Fillable;
                        expect(leftOrderInfo.orderStatus, 'Checking exchange status for left order').to.be.equal(leftExpectedStatus);
                        maxAmountBoughtByRightMaker = signedOrderRight.takerAssetAmount.minus(initialRightOrderFilledAmount);
                        return [4 /*yield*/, this._exchangeWrapper.getOrderInfoAsync(signedOrderRight)];
                    case 4:
                        rightOrderInfo = _a.sent();
                        rightExpectedStatus = expectedTransferAmounts.amountBoughtByRightMaker.isEqualTo(maxAmountBoughtByRightMaker)
                            ? contracts_test_utils_1.OrderStatus.FullyFilled
                            : contracts_test_utils_1.OrderStatus.Fillable;
                        expect(rightOrderInfo.orderStatus, 'Checking exchange status for right order').to.be.equal(rightExpectedStatus);
                        return [2 /*return*/];
                }
            });
        });
    };
    /// @dev Asserts account balances after matching orders.
    /// @param signedOrderLeft First matched order.
    /// @param signedOrderRight Second matched order.
    /// @param initialERC20BalancesByOwner ERC20 balances prior to order matching.
    /// @param initialERC721TokenIdsByOwner ERC721 token owners prior to order matching.
    /// @param finalERC20BalancesByOwner ERC20 balances after order matching.
    /// @param finalERC721TokenIdsByOwner ERC721 token owners after order matching.
    /// @param expectedTransferAmounts Expected amounts transferred as a result of order matching.
    /// @param takerAddress Address of taker (account that called Exchange.matchOrders).
    MatchOrderTester.prototype._assertBalancesAsync = function (signedOrderLeft, signedOrderRight, initialERC20BalancesByOwner, initialERC721TokenIdsByOwner, finalERC20BalancesByOwner, finalERC721TokenIdsByOwner, expectedTransferAmounts, takerAddress) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, expectedERC20BalancesByOwner, expectedERC721TokenIdsByOwner;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = __read(this._calculateExpectedBalances(signedOrderLeft, signedOrderRight, takerAddress, initialERC20BalancesByOwner, initialERC721TokenIdsByOwner, expectedTransferAmounts), 2), expectedERC20BalancesByOwner = _a[0], expectedERC721TokenIdsByOwner = _a[1];
                        // Assert balances of makers, taker, and fee recipients
                        return [4 /*yield*/, this._assertMakerTakerAndFeeRecipientBalancesAsync(signedOrderLeft, signedOrderRight, expectedERC20BalancesByOwner, finalERC20BalancesByOwner, expectedERC721TokenIdsByOwner, finalERC721TokenIdsByOwner, takerAddress)];
                    case 1:
                        // Assert balances of makers, taker, and fee recipients
                        _b.sent();
                        // Assert balances for all known accounts
                        return [4 /*yield*/, MatchOrderTester._assertAllKnownBalancesAsync(expectedERC20BalancesByOwner, finalERC20BalancesByOwner, expectedERC721TokenIdsByOwner, finalERC721TokenIdsByOwner)];
                    case 2:
                        // Assert balances for all known accounts
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /// @dev Calculates the expected balances of order makers, fee recipients, and the taker,
    ///      as a result of matching two orders.
    /// @param signedOrderRight First matched order.
    /// @param signedOrderRight Second matched order.
    /// @param takerAddress Address of taker (the address who matched the two orders)
    /// @param erc20BalancesByOwner Current ERC20 balances.
    /// @param erc721TokenIdsByOwner Current ERC721 token owners.
    /// @param expectedTransferAmounts Expected amounts transferred as a result of order matching.
    /// @return Expected ERC20 balances & ERC721 token owners after orders have been matched.
    MatchOrderTester.prototype._calculateExpectedBalances = function (signedOrderLeft, signedOrderRight, takerAddress, erc20BalancesByOwner, erc721TokenIdsByOwner, expectedTransferAmounts) {
        var makerAddressLeft = signedOrderLeft.makerAddress;
        var makerAddressRight = signedOrderRight.makerAddress;
        var feeRecipientAddressLeft = signedOrderLeft.feeRecipientAddress;
        var feeRecipientAddressRight = signedOrderRight.feeRecipientAddress;
        // Operations are performed on copies of the balances
        var expectedNewERC20BalancesByOwner = _.cloneDeep(erc20BalancesByOwner);
        var expectedNewERC721TokenIdsByOwner = _.cloneDeep(erc721TokenIdsByOwner);
        // Left Maker Asset (Right Taker Asset)
        var makerAssetProxyIdLeft = order_utils_1.assetDataUtils.decodeAssetProxyId(signedOrderLeft.makerAssetData);
        if (makerAssetProxyIdLeft === types_1.AssetProxyId.ERC20) {
            // Decode asset data
            var erc20AssetData = order_utils_1.assetDataUtils.decodeERC20AssetData(signedOrderLeft.makerAssetData);
            var makerAssetAddressLeft = erc20AssetData.tokenAddress;
            var takerAssetAddressRight = makerAssetAddressLeft;
            // Left Maker
            expectedNewERC20BalancesByOwner[makerAddressLeft][makerAssetAddressLeft] = expectedNewERC20BalancesByOwner[makerAddressLeft][makerAssetAddressLeft].minus(expectedTransferAmounts.amountSoldByLeftMaker);
            // Right Maker
            expectedNewERC20BalancesByOwner[makerAddressRight][takerAssetAddressRight] = expectedNewERC20BalancesByOwner[makerAddressRight][takerAssetAddressRight].plus(expectedTransferAmounts.amountBoughtByRightMaker);
            // Taker
            expectedNewERC20BalancesByOwner[takerAddress][makerAssetAddressLeft] = expectedNewERC20BalancesByOwner[takerAddress][makerAssetAddressLeft].plus(expectedTransferAmounts.amountReceivedByTaker);
        }
        else if (makerAssetProxyIdLeft === types_1.AssetProxyId.ERC721) {
            // Decode asset data
            var erc721AssetData = order_utils_1.assetDataUtils.decodeERC721AssetData(signedOrderLeft.makerAssetData);
            var makerAssetAddressLeft = erc721AssetData.tokenAddress;
            var makerAssetIdLeft = erc721AssetData.tokenId;
            var takerAssetAddressRight = makerAssetAddressLeft;
            var takerAssetIdRight = makerAssetIdLeft;
            // Left Maker
            _.remove(expectedNewERC721TokenIdsByOwner[makerAddressLeft][makerAssetAddressLeft], makerAssetIdLeft);
            // Right Maker
            expectedNewERC721TokenIdsByOwner[makerAddressRight][takerAssetAddressRight].push(takerAssetIdRight);
            // Taker: Since there is only 1 asset transferred, the taker does not receive any of the left maker asset.
        }
        // Left Taker Asset (Right Maker Asset)
        // Note: This exchange is only between the order makers: the Taker does not receive any of the left taker asset.
        var takerAssetProxyIdLeft = order_utils_1.assetDataUtils.decodeAssetProxyId(signedOrderLeft.takerAssetData);
        if (takerAssetProxyIdLeft === types_1.AssetProxyId.ERC20) {
            // Decode asset data
            var erc20AssetData = order_utils_1.assetDataUtils.decodeERC20AssetData(signedOrderLeft.takerAssetData);
            var takerAssetAddressLeft = erc20AssetData.tokenAddress;
            var makerAssetAddressRight = takerAssetAddressLeft;
            // Left Maker
            expectedNewERC20BalancesByOwner[makerAddressLeft][takerAssetAddressLeft] = expectedNewERC20BalancesByOwner[makerAddressLeft][takerAssetAddressLeft].plus(expectedTransferAmounts.amountBoughtByLeftMaker);
            // Right Maker
            expectedNewERC20BalancesByOwner[makerAddressRight][makerAssetAddressRight] = expectedNewERC20BalancesByOwner[makerAddressRight][makerAssetAddressRight].minus(expectedTransferAmounts.amountSoldByRightMaker);
        }
        else if (takerAssetProxyIdLeft === types_1.AssetProxyId.ERC721) {
            // Decode asset data
            var erc721AssetData = order_utils_1.assetDataUtils.decodeERC721AssetData(signedOrderRight.makerAssetData);
            var makerAssetAddressRight = erc721AssetData.tokenAddress;
            var makerAssetIdRight = erc721AssetData.tokenId;
            var takerAssetAddressLeft = makerAssetAddressRight;
            var takerAssetIdLeft = makerAssetIdRight;
            // Right Maker
            _.remove(expectedNewERC721TokenIdsByOwner[makerAddressRight][makerAssetAddressRight], makerAssetIdRight);
            // Left Maker
            expectedNewERC721TokenIdsByOwner[makerAddressLeft][takerAssetAddressLeft].push(takerAssetIdLeft);
        }
        // Left Maker Fees
        expectedNewERC20BalancesByOwner[makerAddressLeft][this._feeTokenAddress] = expectedNewERC20BalancesByOwner[makerAddressLeft][this._feeTokenAddress].minus(expectedTransferAmounts.feePaidByLeftMaker);
        // Right Maker Fees
        expectedNewERC20BalancesByOwner[makerAddressRight][this._feeTokenAddress] = expectedNewERC20BalancesByOwner[makerAddressRight][this._feeTokenAddress].minus(expectedTransferAmounts.feePaidByRightMaker);
        // Taker Fees
        expectedNewERC20BalancesByOwner[takerAddress][this._feeTokenAddress] = expectedNewERC20BalancesByOwner[takerAddress][this._feeTokenAddress].minus(expectedTransferAmounts.feePaidByTakerLeft.plus(expectedTransferAmounts.feePaidByTakerRight));
        // Left Fee Recipient Fees
        expectedNewERC20BalancesByOwner[feeRecipientAddressLeft][this._feeTokenAddress] = expectedNewERC20BalancesByOwner[feeRecipientAddressLeft][this._feeTokenAddress].plus(expectedTransferAmounts.feePaidByLeftMaker.plus(expectedTransferAmounts.feePaidByTakerLeft));
        // Right Fee Recipient Fees
        expectedNewERC20BalancesByOwner[feeRecipientAddressRight][this._feeTokenAddress] = expectedNewERC20BalancesByOwner[feeRecipientAddressRight][this._feeTokenAddress].plus(expectedTransferAmounts.feePaidByRightMaker.plus(expectedTransferAmounts.feePaidByTakerRight));
        return [expectedNewERC20BalancesByOwner, expectedNewERC721TokenIdsByOwner];
    };
    /// @dev Asserts ERC20 account balances and ERC721 token holdings that result from order matching.
    ///      Specifically checks balances of makers, taker and fee recipients.
    /// @param signedOrderLeft First matched order.
    /// @param signedOrderRight Second matched order.
    /// @param expectedERC20BalancesByOwner Expected ERC20 balances.
    /// @param realERC20BalancesByOwner Real ERC20 balances.
    /// @param expectedERC721TokenIdsByOwner Expected ERC721 token owners.
    /// @param realERC721TokenIdsByOwner Real ERC20 token owners.
    /// @param takerAddress Address of taker (account that called Exchange.matchOrders).
    MatchOrderTester.prototype._assertMakerTakerAndFeeRecipientBalancesAsync = function (signedOrderLeft, signedOrderRight, expectedERC20BalancesByOwner, realERC20BalancesByOwner, expectedERC721TokenIdsByOwner, realERC721TokenIdsByOwner, takerAddress) {
        return __awaiter(this, void 0, void 0, function () {
            var makerAssetProxyIdLeft, makerERC20AssetDataLeft, makerAssetAddressLeft, makerAssetProxyIdRight, makerERC20AssetDataRight, makerAssetAddressRight;
            return __generator(this, function (_a) {
                makerAssetProxyIdLeft = order_utils_1.assetDataUtils.decodeAssetProxyId(signedOrderLeft.makerAssetData);
                makerERC20AssetDataLeft = makerAssetProxyIdLeft === types_1.AssetProxyId.ERC20
                    ? order_utils_1.assetDataUtils.decodeERC20AssetData(signedOrderLeft.makerAssetData)
                    : order_utils_1.assetDataUtils.decodeERC721AssetData(signedOrderLeft.makerAssetData);
                makerAssetAddressLeft = makerERC20AssetDataLeft.tokenAddress;
                makerAssetProxyIdRight = order_utils_1.assetDataUtils.decodeAssetProxyId(signedOrderRight.makerAssetData);
                makerERC20AssetDataRight = makerAssetProxyIdRight === types_1.AssetProxyId.ERC20
                    ? order_utils_1.assetDataUtils.decodeERC20AssetData(signedOrderRight.makerAssetData)
                    : order_utils_1.assetDataUtils.decodeERC721AssetData(signedOrderRight.makerAssetData);
                makerAssetAddressRight = makerERC20AssetDataRight.tokenAddress;
                if (makerAssetProxyIdLeft === types_1.AssetProxyId.ERC20) {
                    expect(realERC20BalancesByOwner[signedOrderLeft.makerAddress][makerAssetAddressLeft], 'Checking left maker egress ERC20 account balance').to.be.bignumber.equal(expectedERC20BalancesByOwner[signedOrderLeft.makerAddress][makerAssetAddressLeft]);
                    expect(realERC20BalancesByOwner[signedOrderRight.makerAddress][makerAssetAddressLeft], 'Checking right maker ingress ERC20 account balance').to.be.bignumber.equal(expectedERC20BalancesByOwner[signedOrderRight.makerAddress][makerAssetAddressLeft]);
                    expect(realERC20BalancesByOwner[takerAddress][makerAssetAddressLeft], 'Checking taker ingress ERC20 account balance').to.be.bignumber.equal(expectedERC20BalancesByOwner[takerAddress][makerAssetAddressLeft]);
                }
                else if (makerAssetProxyIdLeft === types_1.AssetProxyId.ERC721) {
                    expect(realERC721TokenIdsByOwner[signedOrderLeft.makerAddress][makerAssetAddressLeft].sort(), 'Checking left maker egress ERC721 account holdings').to.be.deep.equal(expectedERC721TokenIdsByOwner[signedOrderLeft.makerAddress][makerAssetAddressLeft].sort());
                    expect(realERC721TokenIdsByOwner[signedOrderRight.makerAddress][makerAssetAddressLeft].sort(), 'Checking right maker ERC721 account holdings').to.be.deep.equal(expectedERC721TokenIdsByOwner[signedOrderRight.makerAddress][makerAssetAddressLeft].sort());
                    expect(realERC721TokenIdsByOwner[takerAddress][makerAssetAddressLeft].sort(), 'Checking taker ingress ERC721 account holdings').to.be.deep.equal(expectedERC721TokenIdsByOwner[takerAddress][makerAssetAddressLeft].sort());
                }
                else {
                    throw new Error("Unhandled Asset Proxy ID: " + makerAssetProxyIdLeft);
                }
                if (makerAssetProxyIdRight === types_1.AssetProxyId.ERC20) {
                    expect(realERC20BalancesByOwner[signedOrderLeft.makerAddress][makerAssetAddressRight], 'Checking left maker ingress ERC20 account balance').to.be.bignumber.equal(expectedERC20BalancesByOwner[signedOrderLeft.makerAddress][makerAssetAddressRight]);
                    expect(realERC20BalancesByOwner[signedOrderRight.makerAddress][makerAssetAddressRight], 'Checking right maker egress ERC20 account balance').to.be.bignumber.equal(expectedERC20BalancesByOwner[signedOrderRight.makerAddress][makerAssetAddressRight]);
                }
                else if (makerAssetProxyIdRight === types_1.AssetProxyId.ERC721) {
                    expect(realERC721TokenIdsByOwner[signedOrderLeft.makerAddress][makerAssetAddressRight].sort(), 'Checking left maker ingress ERC721 account holdings').to.be.deep.equal(expectedERC721TokenIdsByOwner[signedOrderLeft.makerAddress][makerAssetAddressRight].sort());
                    expect(realERC721TokenIdsByOwner[signedOrderRight.makerAddress][makerAssetAddressRight], 'Checking right maker agress ERC721 account holdings').to.be.deep.equal(expectedERC721TokenIdsByOwner[signedOrderRight.makerAddress][makerAssetAddressRight]);
                }
                else {
                    throw new Error("Unhandled Asset Proxy ID: " + makerAssetProxyIdRight);
                }
                // Paid fees
                expect(realERC20BalancesByOwner[signedOrderLeft.makerAddress][this._feeTokenAddress], 'Checking left maker egress ERC20 account fees').to.be.bignumber.equal(expectedERC20BalancesByOwner[signedOrderLeft.makerAddress][this._feeTokenAddress]);
                expect(realERC20BalancesByOwner[signedOrderRight.makerAddress][this._feeTokenAddress], 'Checking right maker egress ERC20 account fees').to.be.bignumber.equal(expectedERC20BalancesByOwner[signedOrderRight.makerAddress][this._feeTokenAddress]);
                expect(realERC20BalancesByOwner[takerAddress][this._feeTokenAddress], 'Checking taker egress ERC20 account fees').to.be.bignumber.equal(expectedERC20BalancesByOwner[takerAddress][this._feeTokenAddress]);
                // Received fees
                expect(realERC20BalancesByOwner[signedOrderLeft.feeRecipientAddress][this._feeTokenAddress], 'Checking left fee recipient ingress ERC20 account fees').to.be.bignumber.equal(expectedERC20BalancesByOwner[signedOrderLeft.feeRecipientAddress][this._feeTokenAddress]);
                expect(realERC20BalancesByOwner[signedOrderRight.feeRecipientAddress][this._feeTokenAddress], 'Checking right fee receipient ingress ERC20 account fees').to.be.bignumber.equal(expectedERC20BalancesByOwner[signedOrderRight.feeRecipientAddress][this._feeTokenAddress]);
                return [2 /*return*/];
            });
        });
    };
    return MatchOrderTester;
}()); // tslint:disable-line:max-file-line-count
exports.MatchOrderTester = MatchOrderTester;
//# sourceMappingURL=match_order_tester.js.map