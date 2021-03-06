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
Object.defineProperty(exports, "__esModule", { value: true });
var order_hash_1 = require("../order_hash");
/**
 * Copy on read store for balances/proxyAllowances of tokens/accounts
 */
var OrderFilledCancelledLazyStore = /** @class */ (function () {
    /**
     * Instantiate a OrderFilledCancelledLazyStore
     * @param orderFilledCancelledFetcher Class instance that implements the AbstractOrderFilledCancelledFetcher
     * @returns An instance of OrderFilledCancelledLazyStore
     */
    function OrderFilledCancelledLazyStore(orderFilledCancelledFetcher) {
        this._orderFilledCancelledFetcher = orderFilledCancelledFetcher;
        this._filledTakerAmount = {};
        this._isCancelled = {};
    }
    /**
     * Get the filledTakerAssetAmount of an order
     * @param orderHash OrderHash from order of interest
     * @return filledTakerAssetAmount
     */
    OrderFilledCancelledLazyStore.prototype.getFilledTakerAmountAsync = function (orderHash) {
        return __awaiter(this, void 0, void 0, function () {
            var filledTakerAmount, cachedFilledTakerAmount;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this._filledTakerAmount[orderHash] === undefined)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this._orderFilledCancelledFetcher.getFilledTakerAmountAsync(orderHash)];
                    case 1:
                        filledTakerAmount = _a.sent();
                        this.setFilledTakerAmount(orderHash, filledTakerAmount);
                        _a.label = 2;
                    case 2:
                        cachedFilledTakerAmount = this._filledTakerAmount[orderHash];
                        return [2 /*return*/, cachedFilledTakerAmount];
                }
            });
        });
    };
    /**
     * Set the filledTakerAssetAmount of an order
     * @param orderHash OrderHash from order of interest
     * @param filledTakerAmount Desired filledTakerAssetAmount
     */
    OrderFilledCancelledLazyStore.prototype.setFilledTakerAmount = function (orderHash, filledTakerAmount) {
        this._filledTakerAmount[orderHash] = filledTakerAmount;
    };
    /**
     * Clear the filledTakerAssetAmount of an order
     * @param orderHash OrderHash from order of interest
     */
    OrderFilledCancelledLazyStore.prototype.deleteFilledTakerAmount = function (orderHash) {
        delete this._filledTakerAmount[orderHash];
    };
    /**
     * Check if an order has been cancelled
     * @param orderHash OrderHash from order of interest
     * @return Whether the order has been cancelled
     */
    OrderFilledCancelledLazyStore.prototype.getIsCancelledAsync = function (signedOrder) {
        return __awaiter(this, void 0, void 0, function () {
            var orderHash, isCancelled, cachedIsCancelled;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        orderHash = order_hash_1.orderHashUtils.getOrderHashHex(signedOrder);
                        if (!(this._isCancelled[orderHash] === undefined)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this._orderFilledCancelledFetcher.isOrderCancelledAsync(signedOrder)];
                    case 1:
                        isCancelled = _a.sent();
                        this.setIsCancelled(orderHash, isCancelled);
                        _a.label = 2;
                    case 2:
                        cachedIsCancelled = this._isCancelled[orderHash];
                        return [2 /*return*/, cachedIsCancelled];
                }
            });
        });
    };
    /**
     * Set whether an order has been cancelled or not
     * @param orderHash OrderHash from order of interest
     * @param isCancelled Whether this order should be cancelled or not
     */
    OrderFilledCancelledLazyStore.prototype.setIsCancelled = function (orderHash, isCancelled) {
        this._isCancelled[orderHash] = isCancelled;
    };
    /**
     * Clear whether the order has been cancelled if already set
     * @param orderHash OrderHash from order of interest
     */
    OrderFilledCancelledLazyStore.prototype.deleteIsCancelled = function (orderHash) {
        delete this._isCancelled[orderHash];
    };
    /**
     * Clear all filled/cancelled state
     */
    OrderFilledCancelledLazyStore.prototype.deleteAll = function () {
        this.deleteAllFilled();
        this.deleteAllIsCancelled();
    };
    /**
     * Clear all cancelled state
     */
    OrderFilledCancelledLazyStore.prototype.deleteAllIsCancelled = function () {
        this._isCancelled = {};
    };
    /**
     * Clear all filled state
     */
    OrderFilledCancelledLazyStore.prototype.deleteAllFilled = function () {
        this._filledTakerAmount = {};
    };
    /**
     * Get the ZRX assetData
     */
    OrderFilledCancelledLazyStore.prototype.getZRXAssetData = function () {
        var zrxAssetData = this._orderFilledCancelledFetcher.getZRXAssetData();
        return zrxAssetData;
    };
    return OrderFilledCancelledLazyStore;
}());
exports.OrderFilledCancelledLazyStore = OrderFilledCancelledLazyStore;
//# sourceMappingURL=order_filled_cancelled_lazy_store.js.map