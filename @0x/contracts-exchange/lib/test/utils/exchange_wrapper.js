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
Object.defineProperty(exports, "__esModule", { value: true });
var contracts_erc1155_1 = require("@0x/contracts-erc1155");
var contracts_erc20_1 = require("@0x/contracts-erc20");
var contracts_erc721_1 = require("@0x/contracts-erc721");
var contracts_test_utils_1 = require("@0x/contracts-test-utils");
var utils_1 = require("@0x/utils");
var web3_wrapper_1 = require("@0x/web3-wrapper");
var _ = require("lodash");
var src_1 = require("../../src");
var ExchangeWrapper = /** @class */ (function () {
    function ExchangeWrapper(exchangeContract, provider) {
        this._exchange = exchangeContract;
        this._web3Wrapper = new web3_wrapper_1.Web3Wrapper(provider);
        this._logDecoder = new contracts_test_utils_1.LogDecoder(this._web3Wrapper, __assign({}, src_1.artifacts, contracts_erc20_1.artifacts, contracts_erc721_1.artifacts, contracts_erc1155_1.artifacts));
    }
    ExchangeWrapper.prototype.fillOrderAsync = function (signedOrder, from, opts) {
        if (opts === void 0) { opts = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var params, txHash, txReceipt;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = contracts_test_utils_1.orderUtils.createFill(signedOrder, opts.takerAssetFillAmount);
                        return [4 /*yield*/, this._exchange.fillOrder.sendTransactionAsync(params.order, params.takerAssetFillAmount, params.signature, { from: from })];
                    case 1:
                        txHash = _a.sent();
                        return [4 /*yield*/, this._logDecoder.getTxWithDecodedLogsAsync(txHash)];
                    case 2:
                        txReceipt = _a.sent();
                        return [2 /*return*/, txReceipt];
                }
            });
        });
    };
    ExchangeWrapper.prototype.cancelOrderAsync = function (signedOrder, from) {
        return __awaiter(this, void 0, void 0, function () {
            var params, txHash, tx;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = contracts_test_utils_1.orderUtils.createCancel(signedOrder);
                        return [4 /*yield*/, this._exchange.cancelOrder.sendTransactionAsync(params.order, { from: from })];
                    case 1:
                        txHash = _a.sent();
                        return [4 /*yield*/, this._logDecoder.getTxWithDecodedLogsAsync(txHash)];
                    case 2:
                        tx = _a.sent();
                        return [2 /*return*/, tx];
                }
            });
        });
    };
    ExchangeWrapper.prototype.fillOrKillOrderAsync = function (signedOrder, from, opts) {
        if (opts === void 0) { opts = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var params, txHash, tx;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = contracts_test_utils_1.orderUtils.createFill(signedOrder, opts.takerAssetFillAmount);
                        return [4 /*yield*/, this._exchange.fillOrKillOrder.sendTransactionAsync(params.order, params.takerAssetFillAmount, params.signature, { from: from })];
                    case 1:
                        txHash = _a.sent();
                        return [4 /*yield*/, this._logDecoder.getTxWithDecodedLogsAsync(txHash)];
                    case 2:
                        tx = _a.sent();
                        return [2 /*return*/, tx];
                }
            });
        });
    };
    ExchangeWrapper.prototype.fillOrderNoThrowAsync = function (signedOrder, from, opts) {
        if (opts === void 0) { opts = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var params, txHash, tx;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = contracts_test_utils_1.orderUtils.createFill(signedOrder, opts.takerAssetFillAmount);
                        return [4 /*yield*/, this._exchange.fillOrderNoThrow.sendTransactionAsync(params.order, params.takerAssetFillAmount, params.signature, { from: from, gas: opts.gas })];
                    case 1:
                        txHash = _a.sent();
                        return [4 /*yield*/, this._logDecoder.getTxWithDecodedLogsAsync(txHash)];
                    case 2:
                        tx = _a.sent();
                        return [2 /*return*/, tx];
                }
            });
        });
    };
    ExchangeWrapper.prototype.batchFillOrdersAsync = function (orders, from, opts) {
        if (opts === void 0) { opts = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var params, txHash, tx;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = contracts_test_utils_1.formatters.createBatchFill(orders, opts.takerAssetFillAmounts);
                        return [4 /*yield*/, this._exchange.batchFillOrders.sendTransactionAsync(params.orders, params.takerAssetFillAmounts, params.signatures, { from: from })];
                    case 1:
                        txHash = _a.sent();
                        return [4 /*yield*/, this._logDecoder.getTxWithDecodedLogsAsync(txHash)];
                    case 2:
                        tx = _a.sent();
                        return [2 /*return*/, tx];
                }
            });
        });
    };
    ExchangeWrapper.prototype.batchFillOrKillOrdersAsync = function (orders, from, opts) {
        if (opts === void 0) { opts = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var params, txHash, tx;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = contracts_test_utils_1.formatters.createBatchFill(orders, opts.takerAssetFillAmounts);
                        return [4 /*yield*/, this._exchange.batchFillOrKillOrders.sendTransactionAsync(params.orders, params.takerAssetFillAmounts, params.signatures, { from: from })];
                    case 1:
                        txHash = _a.sent();
                        return [4 /*yield*/, this._logDecoder.getTxWithDecodedLogsAsync(txHash)];
                    case 2:
                        tx = _a.sent();
                        return [2 /*return*/, tx];
                }
            });
        });
    };
    ExchangeWrapper.prototype.batchFillOrdersNoThrowAsync = function (orders, from, opts) {
        if (opts === void 0) { opts = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var params, txHash, tx;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = contracts_test_utils_1.formatters.createBatchFill(orders, opts.takerAssetFillAmounts);
                        return [4 /*yield*/, this._exchange.batchFillOrdersNoThrow.sendTransactionAsync(params.orders, params.takerAssetFillAmounts, params.signatures, { from: from, gas: opts.gas })];
                    case 1:
                        txHash = _a.sent();
                        return [4 /*yield*/, this._logDecoder.getTxWithDecodedLogsAsync(txHash)];
                    case 2:
                        tx = _a.sent();
                        return [2 /*return*/, tx];
                }
            });
        });
    };
    ExchangeWrapper.prototype.marketSellOrdersAsync = function (orders, from, opts) {
        return __awaiter(this, void 0, void 0, function () {
            var params, txHash, tx;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = contracts_test_utils_1.formatters.createMarketSellOrders(orders, opts.takerAssetFillAmount);
                        return [4 /*yield*/, this._exchange.marketSellOrders.sendTransactionAsync(params.orders, params.takerAssetFillAmount, params.signatures, { from: from })];
                    case 1:
                        txHash = _a.sent();
                        return [4 /*yield*/, this._logDecoder.getTxWithDecodedLogsAsync(txHash)];
                    case 2:
                        tx = _a.sent();
                        return [2 /*return*/, tx];
                }
            });
        });
    };
    ExchangeWrapper.prototype.marketSellOrdersNoThrowAsync = function (orders, from, opts) {
        return __awaiter(this, void 0, void 0, function () {
            var params, txHash, tx;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = contracts_test_utils_1.formatters.createMarketSellOrders(orders, opts.takerAssetFillAmount);
                        return [4 /*yield*/, this._exchange.marketSellOrdersNoThrow.sendTransactionAsync(params.orders, params.takerAssetFillAmount, params.signatures, { from: from, gas: opts.gas })];
                    case 1:
                        txHash = _a.sent();
                        return [4 /*yield*/, this._logDecoder.getTxWithDecodedLogsAsync(txHash)];
                    case 2:
                        tx = _a.sent();
                        return [2 /*return*/, tx];
                }
            });
        });
    };
    ExchangeWrapper.prototype.marketBuyOrdersAsync = function (orders, from, opts) {
        return __awaiter(this, void 0, void 0, function () {
            var params, txHash, tx;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = contracts_test_utils_1.formatters.createMarketBuyOrders(orders, opts.makerAssetFillAmount);
                        return [4 /*yield*/, this._exchange.marketBuyOrders.sendTransactionAsync(params.orders, params.makerAssetFillAmount, params.signatures, { from: from })];
                    case 1:
                        txHash = _a.sent();
                        return [4 /*yield*/, this._logDecoder.getTxWithDecodedLogsAsync(txHash)];
                    case 2:
                        tx = _a.sent();
                        return [2 /*return*/, tx];
                }
            });
        });
    };
    ExchangeWrapper.prototype.marketBuyOrdersNoThrowAsync = function (orders, from, opts) {
        return __awaiter(this, void 0, void 0, function () {
            var params, txHash, tx;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = contracts_test_utils_1.formatters.createMarketBuyOrders(orders, opts.makerAssetFillAmount);
                        return [4 /*yield*/, this._exchange.marketBuyOrdersNoThrow.sendTransactionAsync(params.orders, params.makerAssetFillAmount, params.signatures, { from: from, gas: opts.gas })];
                    case 1:
                        txHash = _a.sent();
                        return [4 /*yield*/, this._logDecoder.getTxWithDecodedLogsAsync(txHash)];
                    case 2:
                        tx = _a.sent();
                        return [2 /*return*/, tx];
                }
            });
        });
    };
    ExchangeWrapper.prototype.batchCancelOrdersAsync = function (orders, from) {
        return __awaiter(this, void 0, void 0, function () {
            var params, txHash, tx;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = contracts_test_utils_1.formatters.createBatchCancel(orders);
                        return [4 /*yield*/, this._exchange.batchCancelOrders.sendTransactionAsync(params.orders, { from: from })];
                    case 1:
                        txHash = _a.sent();
                        return [4 /*yield*/, this._logDecoder.getTxWithDecodedLogsAsync(txHash)];
                    case 2:
                        tx = _a.sent();
                        return [2 /*return*/, tx];
                }
            });
        });
    };
    ExchangeWrapper.prototype.cancelOrdersUpToAsync = function (salt, from) {
        return __awaiter(this, void 0, void 0, function () {
            var txHash, tx;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._exchange.cancelOrdersUpTo.sendTransactionAsync(salt, { from: from })];
                    case 1:
                        txHash = _a.sent();
                        return [4 /*yield*/, this._logDecoder.getTxWithDecodedLogsAsync(txHash)];
                    case 2:
                        tx = _a.sent();
                        return [2 /*return*/, tx];
                }
            });
        });
    };
    ExchangeWrapper.prototype.registerAssetProxyAsync = function (assetProxyAddress, from) {
        return __awaiter(this, void 0, void 0, function () {
            var txHash, tx;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._exchange.registerAssetProxy.sendTransactionAsync(assetProxyAddress, { from: from })];
                    case 1:
                        txHash = _a.sent();
                        return [4 /*yield*/, this._logDecoder.getTxWithDecodedLogsAsync(txHash)];
                    case 2:
                        tx = _a.sent();
                        return [2 /*return*/, tx];
                }
            });
        });
    };
    ExchangeWrapper.prototype.executeTransactionAsync = function (signedTx, from) {
        return __awaiter(this, void 0, void 0, function () {
            var txHash, tx;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._exchange.executeTransaction.sendTransactionAsync(signedTx.salt, signedTx.signerAddress, signedTx.data, signedTx.signature, { from: from })];
                    case 1:
                        txHash = _a.sent();
                        return [4 /*yield*/, this._logDecoder.getTxWithDecodedLogsAsync(txHash)];
                    case 2:
                        tx = _a.sent();
                        return [2 /*return*/, tx];
                }
            });
        });
    };
    ExchangeWrapper.prototype.getTakerAssetFilledAmountAsync = function (orderHashHex) {
        return __awaiter(this, void 0, void 0, function () {
            var filledAmount;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._exchange.filled.callAsync(orderHashHex)];
                    case 1:
                        filledAmount = _a.sent();
                        return [2 /*return*/, filledAmount];
                }
            });
        });
    };
    ExchangeWrapper.prototype.isCancelledAsync = function (orderHashHex) {
        return __awaiter(this, void 0, void 0, function () {
            var isCancelled;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._exchange.cancelled.callAsync(orderHashHex)];
                    case 1:
                        isCancelled = _a.sent();
                        return [2 /*return*/, isCancelled];
                }
            });
        });
    };
    ExchangeWrapper.prototype.getOrderEpochAsync = function (makerAddress, senderAddress) {
        return __awaiter(this, void 0, void 0, function () {
            var orderEpoch;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._exchange.orderEpoch.callAsync(makerAddress, senderAddress)];
                    case 1:
                        orderEpoch = _a.sent();
                        return [2 /*return*/, orderEpoch];
                }
            });
        });
    };
    ExchangeWrapper.prototype.getOrderInfoAsync = function (signedOrder) {
        return __awaiter(this, void 0, void 0, function () {
            var orderInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._exchange.getOrderInfo.callAsync(signedOrder)];
                    case 1:
                        orderInfo = _a.sent();
                        return [2 /*return*/, orderInfo];
                }
            });
        });
    };
    ExchangeWrapper.prototype.getOrdersInfoAsync = function (signedOrders) {
        return __awaiter(this, void 0, void 0, function () {
            var ordersInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._exchange.getOrdersInfo.callAsync(signedOrders)];
                    case 1:
                        ordersInfo = (_a.sent());
                        return [2 /*return*/, ordersInfo];
                }
            });
        });
    };
    ExchangeWrapper.prototype.matchOrdersAsync = function (signedOrderLeft, signedOrderRight, from) {
        return __awaiter(this, void 0, void 0, function () {
            var params, txHash, tx;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = contracts_test_utils_1.orderUtils.createMatchOrders(signedOrderLeft, signedOrderRight);
                        return [4 /*yield*/, this._exchange.matchOrders.sendTransactionAsync(params.left, params.right, params.leftSignature, params.rightSignature, { from: from })];
                    case 1:
                        txHash = _a.sent();
                        return [4 /*yield*/, this._logDecoder.getTxWithDecodedLogsAsync(txHash)];
                    case 2:
                        tx = _a.sent();
                        return [2 /*return*/, tx];
                }
            });
        });
    };
    ExchangeWrapper.prototype.getFillOrderResultsAsync = function (signedOrder, from, opts) {
        if (opts === void 0) { opts = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var params, fillResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = contracts_test_utils_1.orderUtils.createFill(signedOrder, opts.takerAssetFillAmount);
                        return [4 /*yield*/, this._exchange.fillOrder.callAsync(params.order, params.takerAssetFillAmount, params.signature, { from: from })];
                    case 1:
                        fillResults = _a.sent();
                        return [2 /*return*/, fillResults];
                }
            });
        });
    };
    ExchangeWrapper.prototype.abiEncodeFillOrder = function (signedOrder, opts) {
        if (opts === void 0) { opts = {}; }
        var params = contracts_test_utils_1.orderUtils.createFill(signedOrder, opts.takerAssetFillAmount);
        var data = this._exchange.fillOrder.getABIEncodedTransactionData(params.order, params.takerAssetFillAmount, params.signature);
        return data;
    };
    ExchangeWrapper.prototype.abiDecodeFillOrder = function (data) {
        // Lookup fillOrder ABI in exchange abi
        var fillOrderAbi = _.find(this._exchange.abi, { name: 'fillOrder' });
        // Decode input data
        var abiEncoder = new utils_1.AbiEncoder.Method(fillOrderAbi);
        var decodedData = abiEncoder.decode(data);
        return decodedData;
    };
    ExchangeWrapper.prototype.getExchangeAddress = function () {
        return this._exchange.address;
    };
    return ExchangeWrapper;
}());
exports.ExchangeWrapper = ExchangeWrapper;
//# sourceMappingURL=exchange_wrapper.js.map