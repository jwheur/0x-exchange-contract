"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable:no-consecutive-blank-lines ordered-imports align trailing-comma
// tslint:disable:whitespace no-unbound-method no-trailing-whitespace
// tslint:disable:no-unused-variable
var base_contract_1 = require("@0x/base-contract");
var json_schemas_1 = require("@0x/json-schemas");
var utils_1 = require("@0x/utils");
var web3_wrapper_1 = require("@0x/web3-wrapper");
var assert_1 = require("@0x/assert");
var ethers = require("ethers");
var ExchangeEvents;
(function (ExchangeEvents) {
    ExchangeEvents["SignatureValidatorApproval"] = "SignatureValidatorApproval";
    ExchangeEvents["Fill"] = "Fill";
    ExchangeEvents["Cancel"] = "Cancel";
    ExchangeEvents["CancelUpTo"] = "CancelUpTo";
    ExchangeEvents["AssetProxyRegistered"] = "AssetProxyRegistered";
})(ExchangeEvents = exports.ExchangeEvents || (exports.ExchangeEvents = {}));
/* istanbul ignore next */
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
var ExchangeContract = /** @class */ (function (_super) {
    __extends(ExchangeContract, _super);
    function ExchangeContract(address, supportedProvider, txDefaults) {
        var _this = _super.call(this, 'Exchange', ExchangeContract.ABI(), address, supportedProvider, txDefaults) || this;
        _this.filled = {
            callAsync: function (index_0, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, callDataWithDefaults, rawCallResult, abiEncoder, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isString('index_0', index_0);
                                assert_1.assert.doesConformToSchema('callData', callData, json_schemas_1.schemas.callDataSchema, [
                                    json_schemas_1.schemas.addressSchema,
                                    json_schemas_1.schemas.numberSchema,
                                    json_schemas_1.schemas.jsNumber,
                                ]);
                                if (defaultBlock !== undefined) {
                                    assert_1.assert.isBlockParam('defaultBlock', defaultBlock);
                                }
                                self = this;
                                encodedData = self._strictEncodeArguments('filled(bytes32)', [index_0]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                abiEncoder = self._lookupAbiEncoder('filled(bytes32)');
                                result = abiEncoder.strictDecodeReturnValue(rawCallResult);
                                // tslint:enable boolean-naming
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (index_0) {
                assert_1.assert.isString('index_0', index_0);
                var self = this;
                var abiEncodedTransactionData = self._strictEncodeArguments('filled(bytes32)', [index_0]);
                return abiEncodedTransactionData;
            },
        };
        _this.batchFillOrders = {
            sendTransactionAsync: function (orders, takerAssetFillAmounts, signatures, txData) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isArray('orders', orders);
                                assert_1.assert.isArray('takerAssetFillAmounts', takerAssetFillAmounts);
                                assert_1.assert.isArray('signatures', signatures);
                                self = this;
                                encodedData = self._strictEncodeArguments('batchFillOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256[],bytes[])', [orders, takerAssetFillAmounts, signatures]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.batchFillOrders.estimateGasAsync.bind(self, orders, takerAssetFillAmounts, signatures))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            awaitTransactionSuccessAsync: function (orders, takerAssetFillAmounts, signatures, txData, pollingIntervalMs, timeoutMs) {
                var _this = this;
                assert_1.assert.isArray('orders', orders);
                assert_1.assert.isArray('takerAssetFillAmounts', takerAssetFillAmounts);
                assert_1.assert.isArray('signatures', signatures);
                var self = this;
                var txHashPromise = self.batchFillOrders.sendTransactionAsync(orders, takerAssetFillAmounts, signatures, txData);
                return new base_contract_1.PromiseWithTransactionHash(txHashPromise, (function () { return __awaiter(_this, void 0, void 0, function () {
                    var _a, _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                _b = (_a = self._web3Wrapper).awaitTransactionSuccessAsync;
                                return [4 /*yield*/, txHashPromise];
                            case 1: 
                            // When the transaction hash resolves, wait for it to be mined.
                            return [2 /*return*/, _b.apply(_a, [_c.sent(),
                                    pollingIntervalMs,
                                    timeoutMs])];
                        }
                    });
                }); })());
            },
            estimateGasAsync: function (orders, takerAssetFillAmounts, signatures, txData) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isArray('orders', orders);
                                assert_1.assert.isArray('takerAssetFillAmounts', takerAssetFillAmounts);
                                assert_1.assert.isArray('signatures', signatures);
                                self = this;
                                encodedData = self._strictEncodeArguments('batchFillOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256[],bytes[])', [orders, takerAssetFillAmounts, signatures]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            callAsync: function (orders, takerAssetFillAmounts, signatures, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, callDataWithDefaults, rawCallResult, abiEncoder, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isArray('orders', orders);
                                assert_1.assert.isArray('takerAssetFillAmounts', takerAssetFillAmounts);
                                assert_1.assert.isArray('signatures', signatures);
                                assert_1.assert.doesConformToSchema('callData', callData, json_schemas_1.schemas.callDataSchema, [
                                    json_schemas_1.schemas.addressSchema,
                                    json_schemas_1.schemas.numberSchema,
                                    json_schemas_1.schemas.jsNumber,
                                ]);
                                if (defaultBlock !== undefined) {
                                    assert_1.assert.isBlockParam('defaultBlock', defaultBlock);
                                }
                                self = this;
                                encodedData = self._strictEncodeArguments('batchFillOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256[],bytes[])', [orders, takerAssetFillAmounts, signatures]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                abiEncoder = self._lookupAbiEncoder('batchFillOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256[],bytes[])');
                                result = abiEncoder.strictDecodeReturnValue(rawCallResult);
                                // tslint:enable boolean-naming
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (orders, takerAssetFillAmounts, signatures) {
                assert_1.assert.isArray('orders', orders);
                assert_1.assert.isArray('takerAssetFillAmounts', takerAssetFillAmounts);
                assert_1.assert.isArray('signatures', signatures);
                var self = this;
                var abiEncodedTransactionData = self._strictEncodeArguments('batchFillOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256[],bytes[])', [orders, takerAssetFillAmounts, signatures]);
                return abiEncodedTransactionData;
            },
        };
        _this.cancelled = {
            callAsync: function (index_0, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, callDataWithDefaults, rawCallResult, abiEncoder, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isString('index_0', index_0);
                                assert_1.assert.doesConformToSchema('callData', callData, json_schemas_1.schemas.callDataSchema, [
                                    json_schemas_1.schemas.addressSchema,
                                    json_schemas_1.schemas.numberSchema,
                                    json_schemas_1.schemas.jsNumber,
                                ]);
                                if (defaultBlock !== undefined) {
                                    assert_1.assert.isBlockParam('defaultBlock', defaultBlock);
                                }
                                self = this;
                                encodedData = self._strictEncodeArguments('cancelled(bytes32)', [index_0]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                abiEncoder = self._lookupAbiEncoder('cancelled(bytes32)');
                                result = abiEncoder.strictDecodeReturnValue(rawCallResult);
                                // tslint:enable boolean-naming
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (index_0) {
                assert_1.assert.isString('index_0', index_0);
                var self = this;
                var abiEncodedTransactionData = self._strictEncodeArguments('cancelled(bytes32)', [index_0]);
                return abiEncodedTransactionData;
            },
        };
        _this.preSign = {
            sendTransactionAsync: function (hash, signerAddress, signature, txData) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isString('hash', hash);
                                assert_1.assert.isString('signerAddress', signerAddress);
                                assert_1.assert.isString('signature', signature);
                                self = this;
                                encodedData = self._strictEncodeArguments('preSign(bytes32,address,bytes)', [
                                    hash,
                                    signerAddress,
                                    signature,
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.preSign.estimateGasAsync.bind(self, hash, signerAddress, signature))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            awaitTransactionSuccessAsync: function (hash, signerAddress, signature, txData, pollingIntervalMs, timeoutMs) {
                var _this = this;
                assert_1.assert.isString('hash', hash);
                assert_1.assert.isString('signerAddress', signerAddress);
                assert_1.assert.isString('signature', signature);
                var self = this;
                var txHashPromise = self.preSign.sendTransactionAsync(hash, signerAddress, signature, txData);
                return new base_contract_1.PromiseWithTransactionHash(txHashPromise, (function () { return __awaiter(_this, void 0, void 0, function () {
                    var _a, _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                _b = (_a = self._web3Wrapper).awaitTransactionSuccessAsync;
                                return [4 /*yield*/, txHashPromise];
                            case 1: 
                            // When the transaction hash resolves, wait for it to be mined.
                            return [2 /*return*/, _b.apply(_a, [_c.sent(),
                                    pollingIntervalMs,
                                    timeoutMs])];
                        }
                    });
                }); })());
            },
            estimateGasAsync: function (hash, signerAddress, signature, txData) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isString('hash', hash);
                                assert_1.assert.isString('signerAddress', signerAddress);
                                assert_1.assert.isString('signature', signature);
                                self = this;
                                encodedData = self._strictEncodeArguments('preSign(bytes32,address,bytes)', [
                                    hash,
                                    signerAddress,
                                    signature,
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            callAsync: function (hash, signerAddress, signature, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, callDataWithDefaults, rawCallResult, abiEncoder, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isString('hash', hash);
                                assert_1.assert.isString('signerAddress', signerAddress);
                                assert_1.assert.isString('signature', signature);
                                assert_1.assert.doesConformToSchema('callData', callData, json_schemas_1.schemas.callDataSchema, [
                                    json_schemas_1.schemas.addressSchema,
                                    json_schemas_1.schemas.numberSchema,
                                    json_schemas_1.schemas.jsNumber,
                                ]);
                                if (defaultBlock !== undefined) {
                                    assert_1.assert.isBlockParam('defaultBlock', defaultBlock);
                                }
                                self = this;
                                encodedData = self._strictEncodeArguments('preSign(bytes32,address,bytes)', [
                                    hash,
                                    signerAddress,
                                    signature,
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                abiEncoder = self._lookupAbiEncoder('preSign(bytes32,address,bytes)');
                                result = abiEncoder.strictDecodeReturnValue(rawCallResult);
                                // tslint:enable boolean-naming
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (hash, signerAddress, signature) {
                assert_1.assert.isString('hash', hash);
                assert_1.assert.isString('signerAddress', signerAddress);
                assert_1.assert.isString('signature', signature);
                var self = this;
                var abiEncodedTransactionData = self._strictEncodeArguments('preSign(bytes32,address,bytes)', [
                    hash,
                    signerAddress,
                    signature,
                ]);
                return abiEncodedTransactionData;
            },
        };
        _this.matchOrders = {
            sendTransactionAsync: function (leftOrder, rightOrder, leftSignature, rightSignature, txData) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isString('leftSignature', leftSignature);
                                assert_1.assert.isString('rightSignature', rightSignature);
                                self = this;
                                encodedData = self._strictEncodeArguments('matchOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),bytes,bytes)', [leftOrder, rightOrder, leftSignature, rightSignature]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.matchOrders.estimateGasAsync.bind(self, leftOrder, rightOrder, leftSignature, rightSignature))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            awaitTransactionSuccessAsync: function (leftOrder, rightOrder, leftSignature, rightSignature, txData, pollingIntervalMs, timeoutMs) {
                var _this = this;
                assert_1.assert.isString('leftSignature', leftSignature);
                assert_1.assert.isString('rightSignature', rightSignature);
                var self = this;
                var txHashPromise = self.matchOrders.sendTransactionAsync(leftOrder, rightOrder, leftSignature, rightSignature, txData);
                return new base_contract_1.PromiseWithTransactionHash(txHashPromise, (function () { return __awaiter(_this, void 0, void 0, function () {
                    var _a, _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                _b = (_a = self._web3Wrapper).awaitTransactionSuccessAsync;
                                return [4 /*yield*/, txHashPromise];
                            case 1: 
                            // When the transaction hash resolves, wait for it to be mined.
                            return [2 /*return*/, _b.apply(_a, [_c.sent(),
                                    pollingIntervalMs,
                                    timeoutMs])];
                        }
                    });
                }); })());
            },
            estimateGasAsync: function (leftOrder, rightOrder, leftSignature, rightSignature, txData) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isString('leftSignature', leftSignature);
                                assert_1.assert.isString('rightSignature', rightSignature);
                                self = this;
                                encodedData = self._strictEncodeArguments('matchOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),bytes,bytes)', [leftOrder, rightOrder, leftSignature, rightSignature]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            callAsync: function (leftOrder, rightOrder, leftSignature, rightSignature, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, callDataWithDefaults, rawCallResult, abiEncoder, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isString('leftSignature', leftSignature);
                                assert_1.assert.isString('rightSignature', rightSignature);
                                assert_1.assert.doesConformToSchema('callData', callData, json_schemas_1.schemas.callDataSchema, [
                                    json_schemas_1.schemas.addressSchema,
                                    json_schemas_1.schemas.numberSchema,
                                    json_schemas_1.schemas.jsNumber,
                                ]);
                                if (defaultBlock !== undefined) {
                                    assert_1.assert.isBlockParam('defaultBlock', defaultBlock);
                                }
                                self = this;
                                encodedData = self._strictEncodeArguments('matchOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),bytes,bytes)', [leftOrder, rightOrder, leftSignature, rightSignature]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                abiEncoder = self._lookupAbiEncoder('matchOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),bytes,bytes)');
                                result = abiEncoder.strictDecodeReturnValue(rawCallResult);
                                // tslint:enable boolean-naming
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (leftOrder, rightOrder, leftSignature, rightSignature) {
                assert_1.assert.isString('leftSignature', leftSignature);
                assert_1.assert.isString('rightSignature', rightSignature);
                var self = this;
                var abiEncodedTransactionData = self._strictEncodeArguments('matchOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),bytes,bytes)', [leftOrder, rightOrder, leftSignature, rightSignature]);
                return abiEncodedTransactionData;
            },
        };
        _this.fillOrderNoThrow = {
            sendTransactionAsync: function (order, takerAssetFillAmount, signature, txData) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isBigNumber('takerAssetFillAmount', takerAssetFillAmount);
                                assert_1.assert.isString('signature', signature);
                                self = this;
                                encodedData = self._strictEncodeArguments('fillOrderNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),uint256,bytes)', [order, takerAssetFillAmount, signature]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.fillOrderNoThrow.estimateGasAsync.bind(self, order, takerAssetFillAmount, signature))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            awaitTransactionSuccessAsync: function (order, takerAssetFillAmount, signature, txData, pollingIntervalMs, timeoutMs) {
                var _this = this;
                assert_1.assert.isBigNumber('takerAssetFillAmount', takerAssetFillAmount);
                assert_1.assert.isString('signature', signature);
                var self = this;
                var txHashPromise = self.fillOrderNoThrow.sendTransactionAsync(order, takerAssetFillAmount, signature, txData);
                return new base_contract_1.PromiseWithTransactionHash(txHashPromise, (function () { return __awaiter(_this, void 0, void 0, function () {
                    var _a, _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                _b = (_a = self._web3Wrapper).awaitTransactionSuccessAsync;
                                return [4 /*yield*/, txHashPromise];
                            case 1: 
                            // When the transaction hash resolves, wait for it to be mined.
                            return [2 /*return*/, _b.apply(_a, [_c.sent(),
                                    pollingIntervalMs,
                                    timeoutMs])];
                        }
                    });
                }); })());
            },
            estimateGasAsync: function (order, takerAssetFillAmount, signature, txData) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isBigNumber('takerAssetFillAmount', takerAssetFillAmount);
                                assert_1.assert.isString('signature', signature);
                                self = this;
                                encodedData = self._strictEncodeArguments('fillOrderNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),uint256,bytes)', [order, takerAssetFillAmount, signature]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            callAsync: function (order, takerAssetFillAmount, signature, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, callDataWithDefaults, rawCallResult, abiEncoder, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isBigNumber('takerAssetFillAmount', takerAssetFillAmount);
                                assert_1.assert.isString('signature', signature);
                                assert_1.assert.doesConformToSchema('callData', callData, json_schemas_1.schemas.callDataSchema, [
                                    json_schemas_1.schemas.addressSchema,
                                    json_schemas_1.schemas.numberSchema,
                                    json_schemas_1.schemas.jsNumber,
                                ]);
                                if (defaultBlock !== undefined) {
                                    assert_1.assert.isBlockParam('defaultBlock', defaultBlock);
                                }
                                self = this;
                                encodedData = self._strictEncodeArguments('fillOrderNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),uint256,bytes)', [order, takerAssetFillAmount, signature]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                abiEncoder = self._lookupAbiEncoder('fillOrderNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),uint256,bytes)');
                                result = abiEncoder.strictDecodeReturnValue(rawCallResult);
                                // tslint:enable boolean-naming
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (order, takerAssetFillAmount, signature) {
                assert_1.assert.isBigNumber('takerAssetFillAmount', takerAssetFillAmount);
                assert_1.assert.isString('signature', signature);
                var self = this;
                var abiEncodedTransactionData = self._strictEncodeArguments('fillOrderNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),uint256,bytes)', [order, takerAssetFillAmount, signature]);
                return abiEncodedTransactionData;
            },
        };
        _this.assetProxies = {
            callAsync: function (index_0, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, callDataWithDefaults, rawCallResult, abiEncoder, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isString('index_0', index_0);
                                assert_1.assert.doesConformToSchema('callData', callData, json_schemas_1.schemas.callDataSchema, [
                                    json_schemas_1.schemas.addressSchema,
                                    json_schemas_1.schemas.numberSchema,
                                    json_schemas_1.schemas.jsNumber,
                                ]);
                                if (defaultBlock !== undefined) {
                                    assert_1.assert.isBlockParam('defaultBlock', defaultBlock);
                                }
                                self = this;
                                encodedData = self._strictEncodeArguments('assetProxies(bytes4)', [index_0]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                abiEncoder = self._lookupAbiEncoder('assetProxies(bytes4)');
                                result = abiEncoder.strictDecodeReturnValue(rawCallResult);
                                // tslint:enable boolean-naming
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (index_0) {
                assert_1.assert.isString('index_0', index_0);
                var self = this;
                var abiEncodedTransactionData = self._strictEncodeArguments('assetProxies(bytes4)', [index_0]);
                return abiEncodedTransactionData;
            },
        };
        _this.batchCancelOrders = {
            sendTransactionAsync: function (orders, txData) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isArray('orders', orders);
                                self = this;
                                encodedData = self._strictEncodeArguments('batchCancelOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[])', [orders]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.batchCancelOrders.estimateGasAsync.bind(self, orders))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            awaitTransactionSuccessAsync: function (orders, txData, pollingIntervalMs, timeoutMs) {
                var _this = this;
                assert_1.assert.isArray('orders', orders);
                var self = this;
                var txHashPromise = self.batchCancelOrders.sendTransactionAsync(orders, txData);
                return new base_contract_1.PromiseWithTransactionHash(txHashPromise, (function () { return __awaiter(_this, void 0, void 0, function () {
                    var _a, _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                _b = (_a = self._web3Wrapper).awaitTransactionSuccessAsync;
                                return [4 /*yield*/, txHashPromise];
                            case 1: 
                            // When the transaction hash resolves, wait for it to be mined.
                            return [2 /*return*/, _b.apply(_a, [_c.sent(),
                                    pollingIntervalMs,
                                    timeoutMs])];
                        }
                    });
                }); })());
            },
            estimateGasAsync: function (orders, txData) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isArray('orders', orders);
                                self = this;
                                encodedData = self._strictEncodeArguments('batchCancelOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[])', [orders]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            callAsync: function (orders, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, callDataWithDefaults, rawCallResult, abiEncoder, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isArray('orders', orders);
                                assert_1.assert.doesConformToSchema('callData', callData, json_schemas_1.schemas.callDataSchema, [
                                    json_schemas_1.schemas.addressSchema,
                                    json_schemas_1.schemas.numberSchema,
                                    json_schemas_1.schemas.jsNumber,
                                ]);
                                if (defaultBlock !== undefined) {
                                    assert_1.assert.isBlockParam('defaultBlock', defaultBlock);
                                }
                                self = this;
                                encodedData = self._strictEncodeArguments('batchCancelOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[])', [orders]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                abiEncoder = self._lookupAbiEncoder('batchCancelOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[])');
                                result = abiEncoder.strictDecodeReturnValue(rawCallResult);
                                // tslint:enable boolean-naming
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (orders) {
                assert_1.assert.isArray('orders', orders);
                var self = this;
                var abiEncodedTransactionData = self._strictEncodeArguments('batchCancelOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[])', [orders]);
                return abiEncodedTransactionData;
            },
        };
        _this.batchFillOrKillOrders = {
            sendTransactionAsync: function (orders, takerAssetFillAmounts, signatures, txData) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isArray('orders', orders);
                                assert_1.assert.isArray('takerAssetFillAmounts', takerAssetFillAmounts);
                                assert_1.assert.isArray('signatures', signatures);
                                self = this;
                                encodedData = self._strictEncodeArguments('batchFillOrKillOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256[],bytes[])', [orders, takerAssetFillAmounts, signatures]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.batchFillOrKillOrders.estimateGasAsync.bind(self, orders, takerAssetFillAmounts, signatures))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            awaitTransactionSuccessAsync: function (orders, takerAssetFillAmounts, signatures, txData, pollingIntervalMs, timeoutMs) {
                var _this = this;
                assert_1.assert.isArray('orders', orders);
                assert_1.assert.isArray('takerAssetFillAmounts', takerAssetFillAmounts);
                assert_1.assert.isArray('signatures', signatures);
                var self = this;
                var txHashPromise = self.batchFillOrKillOrders.sendTransactionAsync(orders, takerAssetFillAmounts, signatures, txData);
                return new base_contract_1.PromiseWithTransactionHash(txHashPromise, (function () { return __awaiter(_this, void 0, void 0, function () {
                    var _a, _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                _b = (_a = self._web3Wrapper).awaitTransactionSuccessAsync;
                                return [4 /*yield*/, txHashPromise];
                            case 1: 
                            // When the transaction hash resolves, wait for it to be mined.
                            return [2 /*return*/, _b.apply(_a, [_c.sent(),
                                    pollingIntervalMs,
                                    timeoutMs])];
                        }
                    });
                }); })());
            },
            estimateGasAsync: function (orders, takerAssetFillAmounts, signatures, txData) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isArray('orders', orders);
                                assert_1.assert.isArray('takerAssetFillAmounts', takerAssetFillAmounts);
                                assert_1.assert.isArray('signatures', signatures);
                                self = this;
                                encodedData = self._strictEncodeArguments('batchFillOrKillOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256[],bytes[])', [orders, takerAssetFillAmounts, signatures]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            callAsync: function (orders, takerAssetFillAmounts, signatures, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, callDataWithDefaults, rawCallResult, abiEncoder, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isArray('orders', orders);
                                assert_1.assert.isArray('takerAssetFillAmounts', takerAssetFillAmounts);
                                assert_1.assert.isArray('signatures', signatures);
                                assert_1.assert.doesConformToSchema('callData', callData, json_schemas_1.schemas.callDataSchema, [
                                    json_schemas_1.schemas.addressSchema,
                                    json_schemas_1.schemas.numberSchema,
                                    json_schemas_1.schemas.jsNumber,
                                ]);
                                if (defaultBlock !== undefined) {
                                    assert_1.assert.isBlockParam('defaultBlock', defaultBlock);
                                }
                                self = this;
                                encodedData = self._strictEncodeArguments('batchFillOrKillOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256[],bytes[])', [orders, takerAssetFillAmounts, signatures]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                abiEncoder = self._lookupAbiEncoder('batchFillOrKillOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256[],bytes[])');
                                result = abiEncoder.strictDecodeReturnValue(rawCallResult);
                                // tslint:enable boolean-naming
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (orders, takerAssetFillAmounts, signatures) {
                assert_1.assert.isArray('orders', orders);
                assert_1.assert.isArray('takerAssetFillAmounts', takerAssetFillAmounts);
                assert_1.assert.isArray('signatures', signatures);
                var self = this;
                var abiEncodedTransactionData = self._strictEncodeArguments('batchFillOrKillOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256[],bytes[])', [orders, takerAssetFillAmounts, signatures]);
                return abiEncodedTransactionData;
            },
        };
        _this.cancelOrdersUpTo = {
            sendTransactionAsync: function (targetOrderEpoch, txData) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isBigNumber('targetOrderEpoch', targetOrderEpoch);
                                self = this;
                                encodedData = self._strictEncodeArguments('cancelOrdersUpTo(uint256)', [targetOrderEpoch]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.cancelOrdersUpTo.estimateGasAsync.bind(self, targetOrderEpoch))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            awaitTransactionSuccessAsync: function (targetOrderEpoch, txData, pollingIntervalMs, timeoutMs) {
                var _this = this;
                assert_1.assert.isBigNumber('targetOrderEpoch', targetOrderEpoch);
                var self = this;
                var txHashPromise = self.cancelOrdersUpTo.sendTransactionAsync(targetOrderEpoch, txData);
                return new base_contract_1.PromiseWithTransactionHash(txHashPromise, (function () { return __awaiter(_this, void 0, void 0, function () {
                    var _a, _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                _b = (_a = self._web3Wrapper).awaitTransactionSuccessAsync;
                                return [4 /*yield*/, txHashPromise];
                            case 1: 
                            // When the transaction hash resolves, wait for it to be mined.
                            return [2 /*return*/, _b.apply(_a, [_c.sent(),
                                    pollingIntervalMs,
                                    timeoutMs])];
                        }
                    });
                }); })());
            },
            estimateGasAsync: function (targetOrderEpoch, txData) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isBigNumber('targetOrderEpoch', targetOrderEpoch);
                                self = this;
                                encodedData = self._strictEncodeArguments('cancelOrdersUpTo(uint256)', [targetOrderEpoch]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            callAsync: function (targetOrderEpoch, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, callDataWithDefaults, rawCallResult, abiEncoder, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isBigNumber('targetOrderEpoch', targetOrderEpoch);
                                assert_1.assert.doesConformToSchema('callData', callData, json_schemas_1.schemas.callDataSchema, [
                                    json_schemas_1.schemas.addressSchema,
                                    json_schemas_1.schemas.numberSchema,
                                    json_schemas_1.schemas.jsNumber,
                                ]);
                                if (defaultBlock !== undefined) {
                                    assert_1.assert.isBlockParam('defaultBlock', defaultBlock);
                                }
                                self = this;
                                encodedData = self._strictEncodeArguments('cancelOrdersUpTo(uint256)', [targetOrderEpoch]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                abiEncoder = self._lookupAbiEncoder('cancelOrdersUpTo(uint256)');
                                result = abiEncoder.strictDecodeReturnValue(rawCallResult);
                                // tslint:enable boolean-naming
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (targetOrderEpoch) {
                assert_1.assert.isBigNumber('targetOrderEpoch', targetOrderEpoch);
                var self = this;
                var abiEncodedTransactionData = self._strictEncodeArguments('cancelOrdersUpTo(uint256)', [
                    targetOrderEpoch,
                ]);
                return abiEncodedTransactionData;
            },
        };
        _this.batchFillOrdersNoThrow = {
            sendTransactionAsync: function (orders, takerAssetFillAmounts, signatures, txData) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isArray('orders', orders);
                                assert_1.assert.isArray('takerAssetFillAmounts', takerAssetFillAmounts);
                                assert_1.assert.isArray('signatures', signatures);
                                self = this;
                                encodedData = self._strictEncodeArguments('batchFillOrdersNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256[],bytes[])', [orders, takerAssetFillAmounts, signatures]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.batchFillOrdersNoThrow.estimateGasAsync.bind(self, orders, takerAssetFillAmounts, signatures))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            awaitTransactionSuccessAsync: function (orders, takerAssetFillAmounts, signatures, txData, pollingIntervalMs, timeoutMs) {
                var _this = this;
                assert_1.assert.isArray('orders', orders);
                assert_1.assert.isArray('takerAssetFillAmounts', takerAssetFillAmounts);
                assert_1.assert.isArray('signatures', signatures);
                var self = this;
                var txHashPromise = self.batchFillOrdersNoThrow.sendTransactionAsync(orders, takerAssetFillAmounts, signatures, txData);
                return new base_contract_1.PromiseWithTransactionHash(txHashPromise, (function () { return __awaiter(_this, void 0, void 0, function () {
                    var _a, _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                _b = (_a = self._web3Wrapper).awaitTransactionSuccessAsync;
                                return [4 /*yield*/, txHashPromise];
                            case 1: 
                            // When the transaction hash resolves, wait for it to be mined.
                            return [2 /*return*/, _b.apply(_a, [_c.sent(),
                                    pollingIntervalMs,
                                    timeoutMs])];
                        }
                    });
                }); })());
            },
            estimateGasAsync: function (orders, takerAssetFillAmounts, signatures, txData) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isArray('orders', orders);
                                assert_1.assert.isArray('takerAssetFillAmounts', takerAssetFillAmounts);
                                assert_1.assert.isArray('signatures', signatures);
                                self = this;
                                encodedData = self._strictEncodeArguments('batchFillOrdersNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256[],bytes[])', [orders, takerAssetFillAmounts, signatures]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            callAsync: function (orders, takerAssetFillAmounts, signatures, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, callDataWithDefaults, rawCallResult, abiEncoder, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isArray('orders', orders);
                                assert_1.assert.isArray('takerAssetFillAmounts', takerAssetFillAmounts);
                                assert_1.assert.isArray('signatures', signatures);
                                assert_1.assert.doesConformToSchema('callData', callData, json_schemas_1.schemas.callDataSchema, [
                                    json_schemas_1.schemas.addressSchema,
                                    json_schemas_1.schemas.numberSchema,
                                    json_schemas_1.schemas.jsNumber,
                                ]);
                                if (defaultBlock !== undefined) {
                                    assert_1.assert.isBlockParam('defaultBlock', defaultBlock);
                                }
                                self = this;
                                encodedData = self._strictEncodeArguments('batchFillOrdersNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256[],bytes[])', [orders, takerAssetFillAmounts, signatures]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                abiEncoder = self._lookupAbiEncoder('batchFillOrdersNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256[],bytes[])');
                                result = abiEncoder.strictDecodeReturnValue(rawCallResult);
                                // tslint:enable boolean-naming
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (orders, takerAssetFillAmounts, signatures) {
                assert_1.assert.isArray('orders', orders);
                assert_1.assert.isArray('takerAssetFillAmounts', takerAssetFillAmounts);
                assert_1.assert.isArray('signatures', signatures);
                var self = this;
                var abiEncodedTransactionData = self._strictEncodeArguments('batchFillOrdersNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256[],bytes[])', [orders, takerAssetFillAmounts, signatures]);
                return abiEncodedTransactionData;
            },
        };
        _this.getAssetProxy = {
            callAsync: function (assetProxyId, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, callDataWithDefaults, rawCallResult, abiEncoder, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isString('assetProxyId', assetProxyId);
                                assert_1.assert.doesConformToSchema('callData', callData, json_schemas_1.schemas.callDataSchema, [
                                    json_schemas_1.schemas.addressSchema,
                                    json_schemas_1.schemas.numberSchema,
                                    json_schemas_1.schemas.jsNumber,
                                ]);
                                if (defaultBlock !== undefined) {
                                    assert_1.assert.isBlockParam('defaultBlock', defaultBlock);
                                }
                                self = this;
                                encodedData = self._strictEncodeArguments('getAssetProxy(bytes4)', [assetProxyId]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                abiEncoder = self._lookupAbiEncoder('getAssetProxy(bytes4)');
                                result = abiEncoder.strictDecodeReturnValue(rawCallResult);
                                // tslint:enable boolean-naming
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (assetProxyId) {
                assert_1.assert.isString('assetProxyId', assetProxyId);
                var self = this;
                var abiEncodedTransactionData = self._strictEncodeArguments('getAssetProxy(bytes4)', [assetProxyId]);
                return abiEncodedTransactionData;
            },
        };
        _this.transactions = {
            callAsync: function (index_0, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, callDataWithDefaults, rawCallResult, abiEncoder, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isString('index_0', index_0);
                                assert_1.assert.doesConformToSchema('callData', callData, json_schemas_1.schemas.callDataSchema, [
                                    json_schemas_1.schemas.addressSchema,
                                    json_schemas_1.schemas.numberSchema,
                                    json_schemas_1.schemas.jsNumber,
                                ]);
                                if (defaultBlock !== undefined) {
                                    assert_1.assert.isBlockParam('defaultBlock', defaultBlock);
                                }
                                self = this;
                                encodedData = self._strictEncodeArguments('transactions(bytes32)', [index_0]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                abiEncoder = self._lookupAbiEncoder('transactions(bytes32)');
                                result = abiEncoder.strictDecodeReturnValue(rawCallResult);
                                // tslint:enable boolean-naming
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (index_0) {
                assert_1.assert.isString('index_0', index_0);
                var self = this;
                var abiEncodedTransactionData = self._strictEncodeArguments('transactions(bytes32)', [index_0]);
                return abiEncodedTransactionData;
            },
        };
        _this.fillOrKillOrder = {
            sendTransactionAsync: function (order, takerAssetFillAmount, signature, txData) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isBigNumber('takerAssetFillAmount', takerAssetFillAmount);
                                assert_1.assert.isString('signature', signature);
                                self = this;
                                encodedData = self._strictEncodeArguments('fillOrKillOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),uint256,bytes)', [order, takerAssetFillAmount, signature]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.fillOrKillOrder.estimateGasAsync.bind(self, order, takerAssetFillAmount, signature))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            awaitTransactionSuccessAsync: function (order, takerAssetFillAmount, signature, txData, pollingIntervalMs, timeoutMs) {
                var _this = this;
                assert_1.assert.isBigNumber('takerAssetFillAmount', takerAssetFillAmount);
                assert_1.assert.isString('signature', signature);
                var self = this;
                var txHashPromise = self.fillOrKillOrder.sendTransactionAsync(order, takerAssetFillAmount, signature, txData);
                return new base_contract_1.PromiseWithTransactionHash(txHashPromise, (function () { return __awaiter(_this, void 0, void 0, function () {
                    var _a, _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                _b = (_a = self._web3Wrapper).awaitTransactionSuccessAsync;
                                return [4 /*yield*/, txHashPromise];
                            case 1: 
                            // When the transaction hash resolves, wait for it to be mined.
                            return [2 /*return*/, _b.apply(_a, [_c.sent(),
                                    pollingIntervalMs,
                                    timeoutMs])];
                        }
                    });
                }); })());
            },
            estimateGasAsync: function (order, takerAssetFillAmount, signature, txData) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isBigNumber('takerAssetFillAmount', takerAssetFillAmount);
                                assert_1.assert.isString('signature', signature);
                                self = this;
                                encodedData = self._strictEncodeArguments('fillOrKillOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),uint256,bytes)', [order, takerAssetFillAmount, signature]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            callAsync: function (order, takerAssetFillAmount, signature, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, callDataWithDefaults, rawCallResult, abiEncoder, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isBigNumber('takerAssetFillAmount', takerAssetFillAmount);
                                assert_1.assert.isString('signature', signature);
                                assert_1.assert.doesConformToSchema('callData', callData, json_schemas_1.schemas.callDataSchema, [
                                    json_schemas_1.schemas.addressSchema,
                                    json_schemas_1.schemas.numberSchema,
                                    json_schemas_1.schemas.jsNumber,
                                ]);
                                if (defaultBlock !== undefined) {
                                    assert_1.assert.isBlockParam('defaultBlock', defaultBlock);
                                }
                                self = this;
                                encodedData = self._strictEncodeArguments('fillOrKillOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),uint256,bytes)', [order, takerAssetFillAmount, signature]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                abiEncoder = self._lookupAbiEncoder('fillOrKillOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),uint256,bytes)');
                                result = abiEncoder.strictDecodeReturnValue(rawCallResult);
                                // tslint:enable boolean-naming
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (order, takerAssetFillAmount, signature) {
                assert_1.assert.isBigNumber('takerAssetFillAmount', takerAssetFillAmount);
                assert_1.assert.isString('signature', signature);
                var self = this;
                var abiEncodedTransactionData = self._strictEncodeArguments('fillOrKillOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),uint256,bytes)', [order, takerAssetFillAmount, signature]);
                return abiEncodedTransactionData;
            },
        };
        _this.setSignatureValidatorApproval = {
            sendTransactionAsync: function (validatorAddress, approval, txData) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isString('validatorAddress', validatorAddress);
                                assert_1.assert.isBoolean('approval', approval);
                                self = this;
                                encodedData = self._strictEncodeArguments('setSignatureValidatorApproval(address,bool)', [
                                    validatorAddress,
                                    approval,
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.setSignatureValidatorApproval.estimateGasAsync.bind(self, validatorAddress, approval))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            awaitTransactionSuccessAsync: function (validatorAddress, approval, txData, pollingIntervalMs, timeoutMs) {
                var _this = this;
                assert_1.assert.isString('validatorAddress', validatorAddress);
                assert_1.assert.isBoolean('approval', approval);
                var self = this;
                var txHashPromise = self.setSignatureValidatorApproval.sendTransactionAsync(validatorAddress, approval, txData);
                return new base_contract_1.PromiseWithTransactionHash(txHashPromise, (function () { return __awaiter(_this, void 0, void 0, function () {
                    var _a, _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                _b = (_a = self._web3Wrapper).awaitTransactionSuccessAsync;
                                return [4 /*yield*/, txHashPromise];
                            case 1: 
                            // When the transaction hash resolves, wait for it to be mined.
                            return [2 /*return*/, _b.apply(_a, [_c.sent(),
                                    pollingIntervalMs,
                                    timeoutMs])];
                        }
                    });
                }); })());
            },
            estimateGasAsync: function (validatorAddress, approval, txData) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isString('validatorAddress', validatorAddress);
                                assert_1.assert.isBoolean('approval', approval);
                                self = this;
                                encodedData = self._strictEncodeArguments('setSignatureValidatorApproval(address,bool)', [
                                    validatorAddress,
                                    approval,
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            callAsync: function (validatorAddress, approval, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, callDataWithDefaults, rawCallResult, abiEncoder, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isString('validatorAddress', validatorAddress);
                                assert_1.assert.isBoolean('approval', approval);
                                assert_1.assert.doesConformToSchema('callData', callData, json_schemas_1.schemas.callDataSchema, [
                                    json_schemas_1.schemas.addressSchema,
                                    json_schemas_1.schemas.numberSchema,
                                    json_schemas_1.schemas.jsNumber,
                                ]);
                                if (defaultBlock !== undefined) {
                                    assert_1.assert.isBlockParam('defaultBlock', defaultBlock);
                                }
                                self = this;
                                encodedData = self._strictEncodeArguments('setSignatureValidatorApproval(address,bool)', [
                                    validatorAddress,
                                    approval,
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                abiEncoder = self._lookupAbiEncoder('setSignatureValidatorApproval(address,bool)');
                                result = abiEncoder.strictDecodeReturnValue(rawCallResult);
                                // tslint:enable boolean-naming
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (validatorAddress, approval) {
                assert_1.assert.isString('validatorAddress', validatorAddress);
                assert_1.assert.isBoolean('approval', approval);
                var self = this;
                var abiEncodedTransactionData = self._strictEncodeArguments('setSignatureValidatorApproval(address,bool)', [validatorAddress, approval]);
                return abiEncodedTransactionData;
            },
        };
        _this.allowedValidators = {
            callAsync: function (index_0, index_1, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, callDataWithDefaults, rawCallResult, abiEncoder, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isString('index_0', index_0);
                                assert_1.assert.isString('index_1', index_1);
                                assert_1.assert.doesConformToSchema('callData', callData, json_schemas_1.schemas.callDataSchema, [
                                    json_schemas_1.schemas.addressSchema,
                                    json_schemas_1.schemas.numberSchema,
                                    json_schemas_1.schemas.jsNumber,
                                ]);
                                if (defaultBlock !== undefined) {
                                    assert_1.assert.isBlockParam('defaultBlock', defaultBlock);
                                }
                                self = this;
                                encodedData = self._strictEncodeArguments('allowedValidators(address,address)', [index_0, index_1]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                abiEncoder = self._lookupAbiEncoder('allowedValidators(address,address)');
                                result = abiEncoder.strictDecodeReturnValue(rawCallResult);
                                // tslint:enable boolean-naming
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (index_0, index_1) {
                assert_1.assert.isString('index_0', index_0);
                assert_1.assert.isString('index_1', index_1);
                var self = this;
                var abiEncodedTransactionData = self._strictEncodeArguments('allowedValidators(address,address)', [
                    index_0,
                    index_1,
                ]);
                return abiEncodedTransactionData;
            },
        };
        _this.marketSellOrders = {
            sendTransactionAsync: function (orders, takerAssetFillAmount, signatures, txData) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isArray('orders', orders);
                                assert_1.assert.isBigNumber('takerAssetFillAmount', takerAssetFillAmount);
                                assert_1.assert.isArray('signatures', signatures);
                                self = this;
                                encodedData = self._strictEncodeArguments('marketSellOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256,bytes[])', [orders, takerAssetFillAmount, signatures]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.marketSellOrders.estimateGasAsync.bind(self, orders, takerAssetFillAmount, signatures))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            awaitTransactionSuccessAsync: function (orders, takerAssetFillAmount, signatures, txData, pollingIntervalMs, timeoutMs) {
                var _this = this;
                assert_1.assert.isArray('orders', orders);
                assert_1.assert.isBigNumber('takerAssetFillAmount', takerAssetFillAmount);
                assert_1.assert.isArray('signatures', signatures);
                var self = this;
                var txHashPromise = self.marketSellOrders.sendTransactionAsync(orders, takerAssetFillAmount, signatures, txData);
                return new base_contract_1.PromiseWithTransactionHash(txHashPromise, (function () { return __awaiter(_this, void 0, void 0, function () {
                    var _a, _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                _b = (_a = self._web3Wrapper).awaitTransactionSuccessAsync;
                                return [4 /*yield*/, txHashPromise];
                            case 1: 
                            // When the transaction hash resolves, wait for it to be mined.
                            return [2 /*return*/, _b.apply(_a, [_c.sent(),
                                    pollingIntervalMs,
                                    timeoutMs])];
                        }
                    });
                }); })());
            },
            estimateGasAsync: function (orders, takerAssetFillAmount, signatures, txData) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isArray('orders', orders);
                                assert_1.assert.isBigNumber('takerAssetFillAmount', takerAssetFillAmount);
                                assert_1.assert.isArray('signatures', signatures);
                                self = this;
                                encodedData = self._strictEncodeArguments('marketSellOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256,bytes[])', [orders, takerAssetFillAmount, signatures]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            callAsync: function (orders, takerAssetFillAmount, signatures, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, callDataWithDefaults, rawCallResult, abiEncoder, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isArray('orders', orders);
                                assert_1.assert.isBigNumber('takerAssetFillAmount', takerAssetFillAmount);
                                assert_1.assert.isArray('signatures', signatures);
                                assert_1.assert.doesConformToSchema('callData', callData, json_schemas_1.schemas.callDataSchema, [
                                    json_schemas_1.schemas.addressSchema,
                                    json_schemas_1.schemas.numberSchema,
                                    json_schemas_1.schemas.jsNumber,
                                ]);
                                if (defaultBlock !== undefined) {
                                    assert_1.assert.isBlockParam('defaultBlock', defaultBlock);
                                }
                                self = this;
                                encodedData = self._strictEncodeArguments('marketSellOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256,bytes[])', [orders, takerAssetFillAmount, signatures]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                abiEncoder = self._lookupAbiEncoder('marketSellOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256,bytes[])');
                                result = abiEncoder.strictDecodeReturnValue(rawCallResult);
                                // tslint:enable boolean-naming
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (orders, takerAssetFillAmount, signatures) {
                assert_1.assert.isArray('orders', orders);
                assert_1.assert.isBigNumber('takerAssetFillAmount', takerAssetFillAmount);
                assert_1.assert.isArray('signatures', signatures);
                var self = this;
                var abiEncodedTransactionData = self._strictEncodeArguments('marketSellOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256,bytes[])', [orders, takerAssetFillAmount, signatures]);
                return abiEncodedTransactionData;
            },
        };
        _this.getOrdersInfo = {
            callAsync: function (orders, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, callDataWithDefaults, rawCallResult, abiEncoder, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isArray('orders', orders);
                                assert_1.assert.doesConformToSchema('callData', callData, json_schemas_1.schemas.callDataSchema, [
                                    json_schemas_1.schemas.addressSchema,
                                    json_schemas_1.schemas.numberSchema,
                                    json_schemas_1.schemas.jsNumber,
                                ]);
                                if (defaultBlock !== undefined) {
                                    assert_1.assert.isBlockParam('defaultBlock', defaultBlock);
                                }
                                self = this;
                                encodedData = self._strictEncodeArguments('getOrdersInfo((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[])', [orders]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                abiEncoder = self._lookupAbiEncoder('getOrdersInfo((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[])');
                                result = abiEncoder.strictDecodeReturnValue(rawCallResult);
                                // tslint:enable boolean-naming
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (orders) {
                assert_1.assert.isArray('orders', orders);
                var self = this;
                var abiEncodedTransactionData = self._strictEncodeArguments('getOrdersInfo((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[])', [orders]);
                return abiEncodedTransactionData;
            },
        };
        _this.preSigned = {
            callAsync: function (index_0, index_1, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, callDataWithDefaults, rawCallResult, abiEncoder, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isString('index_0', index_0);
                                assert_1.assert.isString('index_1', index_1);
                                assert_1.assert.doesConformToSchema('callData', callData, json_schemas_1.schemas.callDataSchema, [
                                    json_schemas_1.schemas.addressSchema,
                                    json_schemas_1.schemas.numberSchema,
                                    json_schemas_1.schemas.jsNumber,
                                ]);
                                if (defaultBlock !== undefined) {
                                    assert_1.assert.isBlockParam('defaultBlock', defaultBlock);
                                }
                                self = this;
                                encodedData = self._strictEncodeArguments('preSigned(bytes32,address)', [index_0, index_1]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                abiEncoder = self._lookupAbiEncoder('preSigned(bytes32,address)');
                                result = abiEncoder.strictDecodeReturnValue(rawCallResult);
                                // tslint:enable boolean-naming
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (index_0, index_1) {
                assert_1.assert.isString('index_0', index_0);
                assert_1.assert.isString('index_1', index_1);
                var self = this;
                var abiEncodedTransactionData = self._strictEncodeArguments('preSigned(bytes32,address)', [
                    index_0,
                    index_1,
                ]);
                return abiEncodedTransactionData;
            },
        };
        _this.owner = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, callDataWithDefaults, rawCallResult, abiEncoder, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.doesConformToSchema('callData', callData, json_schemas_1.schemas.callDataSchema, [
                                    json_schemas_1.schemas.addressSchema,
                                    json_schemas_1.schemas.numberSchema,
                                    json_schemas_1.schemas.jsNumber,
                                ]);
                                if (defaultBlock !== undefined) {
                                    assert_1.assert.isBlockParam('defaultBlock', defaultBlock);
                                }
                                self = this;
                                encodedData = self._strictEncodeArguments('owner()', []);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                abiEncoder = self._lookupAbiEncoder('owner()');
                                result = abiEncoder.strictDecodeReturnValue(rawCallResult);
                                // tslint:enable boolean-naming
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                var self = this;
                var abiEncodedTransactionData = self._strictEncodeArguments('owner()', []);
                return abiEncodedTransactionData;
            },
        };
        _this.isValidSignature = {
            callAsync: function (hash, signerAddress, signature, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, callDataWithDefaults, rawCallResult, abiEncoder, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isString('hash', hash);
                                assert_1.assert.isString('signerAddress', signerAddress);
                                assert_1.assert.isString('signature', signature);
                                assert_1.assert.doesConformToSchema('callData', callData, json_schemas_1.schemas.callDataSchema, [
                                    json_schemas_1.schemas.addressSchema,
                                    json_schemas_1.schemas.numberSchema,
                                    json_schemas_1.schemas.jsNumber,
                                ]);
                                if (defaultBlock !== undefined) {
                                    assert_1.assert.isBlockParam('defaultBlock', defaultBlock);
                                }
                                self = this;
                                encodedData = self._strictEncodeArguments('isValidSignature(bytes32,address,bytes)', [
                                    hash,
                                    signerAddress,
                                    signature,
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                abiEncoder = self._lookupAbiEncoder('isValidSignature(bytes32,address,bytes)');
                                result = abiEncoder.strictDecodeReturnValue(rawCallResult);
                                // tslint:enable boolean-naming
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (hash, signerAddress, signature) {
                assert_1.assert.isString('hash', hash);
                assert_1.assert.isString('signerAddress', signerAddress);
                assert_1.assert.isString('signature', signature);
                var self = this;
                var abiEncodedTransactionData = self._strictEncodeArguments('isValidSignature(bytes32,address,bytes)', [
                    hash,
                    signerAddress,
                    signature,
                ]);
                return abiEncodedTransactionData;
            },
        };
        _this.marketBuyOrdersNoThrow = {
            sendTransactionAsync: function (orders, makerAssetFillAmount, signatures, txData) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isArray('orders', orders);
                                assert_1.assert.isBigNumber('makerAssetFillAmount', makerAssetFillAmount);
                                assert_1.assert.isArray('signatures', signatures);
                                self = this;
                                encodedData = self._strictEncodeArguments('marketBuyOrdersNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256,bytes[])', [orders, makerAssetFillAmount, signatures]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.marketBuyOrdersNoThrow.estimateGasAsync.bind(self, orders, makerAssetFillAmount, signatures))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            awaitTransactionSuccessAsync: function (orders, makerAssetFillAmount, signatures, txData, pollingIntervalMs, timeoutMs) {
                var _this = this;
                assert_1.assert.isArray('orders', orders);
                assert_1.assert.isBigNumber('makerAssetFillAmount', makerAssetFillAmount);
                assert_1.assert.isArray('signatures', signatures);
                var self = this;
                var txHashPromise = self.marketBuyOrdersNoThrow.sendTransactionAsync(orders, makerAssetFillAmount, signatures, txData);
                return new base_contract_1.PromiseWithTransactionHash(txHashPromise, (function () { return __awaiter(_this, void 0, void 0, function () {
                    var _a, _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                _b = (_a = self._web3Wrapper).awaitTransactionSuccessAsync;
                                return [4 /*yield*/, txHashPromise];
                            case 1: 
                            // When the transaction hash resolves, wait for it to be mined.
                            return [2 /*return*/, _b.apply(_a, [_c.sent(),
                                    pollingIntervalMs,
                                    timeoutMs])];
                        }
                    });
                }); })());
            },
            estimateGasAsync: function (orders, makerAssetFillAmount, signatures, txData) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isArray('orders', orders);
                                assert_1.assert.isBigNumber('makerAssetFillAmount', makerAssetFillAmount);
                                assert_1.assert.isArray('signatures', signatures);
                                self = this;
                                encodedData = self._strictEncodeArguments('marketBuyOrdersNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256,bytes[])', [orders, makerAssetFillAmount, signatures]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            callAsync: function (orders, makerAssetFillAmount, signatures, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, callDataWithDefaults, rawCallResult, abiEncoder, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isArray('orders', orders);
                                assert_1.assert.isBigNumber('makerAssetFillAmount', makerAssetFillAmount);
                                assert_1.assert.isArray('signatures', signatures);
                                assert_1.assert.doesConformToSchema('callData', callData, json_schemas_1.schemas.callDataSchema, [
                                    json_schemas_1.schemas.addressSchema,
                                    json_schemas_1.schemas.numberSchema,
                                    json_schemas_1.schemas.jsNumber,
                                ]);
                                if (defaultBlock !== undefined) {
                                    assert_1.assert.isBlockParam('defaultBlock', defaultBlock);
                                }
                                self = this;
                                encodedData = self._strictEncodeArguments('marketBuyOrdersNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256,bytes[])', [orders, makerAssetFillAmount, signatures]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                abiEncoder = self._lookupAbiEncoder('marketBuyOrdersNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256,bytes[])');
                                result = abiEncoder.strictDecodeReturnValue(rawCallResult);
                                // tslint:enable boolean-naming
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (orders, makerAssetFillAmount, signatures) {
                assert_1.assert.isArray('orders', orders);
                assert_1.assert.isBigNumber('makerAssetFillAmount', makerAssetFillAmount);
                assert_1.assert.isArray('signatures', signatures);
                var self = this;
                var abiEncodedTransactionData = self._strictEncodeArguments('marketBuyOrdersNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256,bytes[])', [orders, makerAssetFillAmount, signatures]);
                return abiEncodedTransactionData;
            },
        };
        _this.fillOrder = {
            sendTransactionAsync: function (order, takerAssetFillAmount, signature, txData) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isBigNumber('takerAssetFillAmount', takerAssetFillAmount);
                                assert_1.assert.isString('signature', signature);
                                self = this;
                                encodedData = self._strictEncodeArguments('fillOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),uint256,bytes)', [order, takerAssetFillAmount, signature]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.fillOrder.estimateGasAsync.bind(self, order, takerAssetFillAmount, signature))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            awaitTransactionSuccessAsync: function (order, takerAssetFillAmount, signature, txData, pollingIntervalMs, timeoutMs) {
                var _this = this;
                assert_1.assert.isBigNumber('takerAssetFillAmount', takerAssetFillAmount);
                assert_1.assert.isString('signature', signature);
                var self = this;
                var txHashPromise = self.fillOrder.sendTransactionAsync(order, takerAssetFillAmount, signature, txData);
                return new base_contract_1.PromiseWithTransactionHash(txHashPromise, (function () { return __awaiter(_this, void 0, void 0, function () {
                    var _a, _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                _b = (_a = self._web3Wrapper).awaitTransactionSuccessAsync;
                                return [4 /*yield*/, txHashPromise];
                            case 1: 
                            // When the transaction hash resolves, wait for it to be mined.
                            return [2 /*return*/, _b.apply(_a, [_c.sent(),
                                    pollingIntervalMs,
                                    timeoutMs])];
                        }
                    });
                }); })());
            },
            estimateGasAsync: function (order, takerAssetFillAmount, signature, txData) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isBigNumber('takerAssetFillAmount', takerAssetFillAmount);
                                assert_1.assert.isString('signature', signature);
                                self = this;
                                encodedData = self._strictEncodeArguments('fillOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),uint256,bytes)', [order, takerAssetFillAmount, signature]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            callAsync: function (order, takerAssetFillAmount, signature, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, callDataWithDefaults, rawCallResult, abiEncoder, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isBigNumber('takerAssetFillAmount', takerAssetFillAmount);
                                assert_1.assert.isString('signature', signature);
                                assert_1.assert.doesConformToSchema('callData', callData, json_schemas_1.schemas.callDataSchema, [
                                    json_schemas_1.schemas.addressSchema,
                                    json_schemas_1.schemas.numberSchema,
                                    json_schemas_1.schemas.jsNumber,
                                ]);
                                if (defaultBlock !== undefined) {
                                    assert_1.assert.isBlockParam('defaultBlock', defaultBlock);
                                }
                                self = this;
                                encodedData = self._strictEncodeArguments('fillOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),uint256,bytes)', [order, takerAssetFillAmount, signature]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                abiEncoder = self._lookupAbiEncoder('fillOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),uint256,bytes)');
                                result = abiEncoder.strictDecodeReturnValue(rawCallResult);
                                // tslint:enable boolean-naming
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (order, takerAssetFillAmount, signature) {
                assert_1.assert.isBigNumber('takerAssetFillAmount', takerAssetFillAmount);
                assert_1.assert.isString('signature', signature);
                var self = this;
                var abiEncodedTransactionData = self._strictEncodeArguments('fillOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),uint256,bytes)', [order, takerAssetFillAmount, signature]);
                return abiEncodedTransactionData;
            },
        };
        _this.executeTransaction = {
            sendTransactionAsync: function (salt, signerAddress, data, signature, txData) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isBigNumber('salt', salt);
                                assert_1.assert.isString('signerAddress', signerAddress);
                                assert_1.assert.isString('data', data);
                                assert_1.assert.isString('signature', signature);
                                self = this;
                                encodedData = self._strictEncodeArguments('executeTransaction(uint256,address,bytes,bytes)', [
                                    salt,
                                    signerAddress,
                                    data,
                                    signature,
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.executeTransaction.estimateGasAsync.bind(self, salt, signerAddress, data, signature))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            awaitTransactionSuccessAsync: function (salt, signerAddress, data, signature, txData, pollingIntervalMs, timeoutMs) {
                var _this = this;
                assert_1.assert.isBigNumber('salt', salt);
                assert_1.assert.isString('signerAddress', signerAddress);
                assert_1.assert.isString('data', data);
                assert_1.assert.isString('signature', signature);
                var self = this;
                var txHashPromise = self.executeTransaction.sendTransactionAsync(salt, signerAddress, data, signature, txData);
                return new base_contract_1.PromiseWithTransactionHash(txHashPromise, (function () { return __awaiter(_this, void 0, void 0, function () {
                    var _a, _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                _b = (_a = self._web3Wrapper).awaitTransactionSuccessAsync;
                                return [4 /*yield*/, txHashPromise];
                            case 1: 
                            // When the transaction hash resolves, wait for it to be mined.
                            return [2 /*return*/, _b.apply(_a, [_c.sent(),
                                    pollingIntervalMs,
                                    timeoutMs])];
                        }
                    });
                }); })());
            },
            estimateGasAsync: function (salt, signerAddress, data, signature, txData) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isBigNumber('salt', salt);
                                assert_1.assert.isString('signerAddress', signerAddress);
                                assert_1.assert.isString('data', data);
                                assert_1.assert.isString('signature', signature);
                                self = this;
                                encodedData = self._strictEncodeArguments('executeTransaction(uint256,address,bytes,bytes)', [
                                    salt,
                                    signerAddress,
                                    data,
                                    signature,
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            callAsync: function (salt, signerAddress, data, signature, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, callDataWithDefaults, rawCallResult, abiEncoder, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isBigNumber('salt', salt);
                                assert_1.assert.isString('signerAddress', signerAddress);
                                assert_1.assert.isString('data', data);
                                assert_1.assert.isString('signature', signature);
                                assert_1.assert.doesConformToSchema('callData', callData, json_schemas_1.schemas.callDataSchema, [
                                    json_schemas_1.schemas.addressSchema,
                                    json_schemas_1.schemas.numberSchema,
                                    json_schemas_1.schemas.jsNumber,
                                ]);
                                if (defaultBlock !== undefined) {
                                    assert_1.assert.isBlockParam('defaultBlock', defaultBlock);
                                }
                                self = this;
                                encodedData = self._strictEncodeArguments('executeTransaction(uint256,address,bytes,bytes)', [
                                    salt,
                                    signerAddress,
                                    data,
                                    signature,
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                abiEncoder = self._lookupAbiEncoder('executeTransaction(uint256,address,bytes,bytes)');
                                result = abiEncoder.strictDecodeReturnValue(rawCallResult);
                                // tslint:enable boolean-naming
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (salt, signerAddress, data, signature) {
                assert_1.assert.isBigNumber('salt', salt);
                assert_1.assert.isString('signerAddress', signerAddress);
                assert_1.assert.isString('data', data);
                assert_1.assert.isString('signature', signature);
                var self = this;
                var abiEncodedTransactionData = self._strictEncodeArguments('executeTransaction(uint256,address,bytes,bytes)', [salt, signerAddress, data, signature]);
                return abiEncodedTransactionData;
            },
        };
        _this.registerAssetProxy = {
            sendTransactionAsync: function (assetProxy, txData) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isString('assetProxy', assetProxy);
                                self = this;
                                encodedData = self._strictEncodeArguments('registerAssetProxy(address)', [assetProxy]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.registerAssetProxy.estimateGasAsync.bind(self, assetProxy))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            awaitTransactionSuccessAsync: function (assetProxy, txData, pollingIntervalMs, timeoutMs) {
                var _this = this;
                assert_1.assert.isString('assetProxy', assetProxy);
                var self = this;
                var txHashPromise = self.registerAssetProxy.sendTransactionAsync(assetProxy, txData);
                return new base_contract_1.PromiseWithTransactionHash(txHashPromise, (function () { return __awaiter(_this, void 0, void 0, function () {
                    var _a, _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                _b = (_a = self._web3Wrapper).awaitTransactionSuccessAsync;
                                return [4 /*yield*/, txHashPromise];
                            case 1: 
                            // When the transaction hash resolves, wait for it to be mined.
                            return [2 /*return*/, _b.apply(_a, [_c.sent(),
                                    pollingIntervalMs,
                                    timeoutMs])];
                        }
                    });
                }); })());
            },
            estimateGasAsync: function (assetProxy, txData) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isString('assetProxy', assetProxy);
                                self = this;
                                encodedData = self._strictEncodeArguments('registerAssetProxy(address)', [assetProxy]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            callAsync: function (assetProxy, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, callDataWithDefaults, rawCallResult, abiEncoder, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isString('assetProxy', assetProxy);
                                assert_1.assert.doesConformToSchema('callData', callData, json_schemas_1.schemas.callDataSchema, [
                                    json_schemas_1.schemas.addressSchema,
                                    json_schemas_1.schemas.numberSchema,
                                    json_schemas_1.schemas.jsNumber,
                                ]);
                                if (defaultBlock !== undefined) {
                                    assert_1.assert.isBlockParam('defaultBlock', defaultBlock);
                                }
                                self = this;
                                encodedData = self._strictEncodeArguments('registerAssetProxy(address)', [assetProxy]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                abiEncoder = self._lookupAbiEncoder('registerAssetProxy(address)');
                                result = abiEncoder.strictDecodeReturnValue(rawCallResult);
                                // tslint:enable boolean-naming
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (assetProxy) {
                assert_1.assert.isString('assetProxy', assetProxy);
                var self = this;
                var abiEncodedTransactionData = self._strictEncodeArguments('registerAssetProxy(address)', [assetProxy]);
                return abiEncodedTransactionData;
            },
        };
        _this.getOrderInfo = {
            callAsync: function (order, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, callDataWithDefaults, rawCallResult, abiEncoder, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.doesConformToSchema('callData', callData, json_schemas_1.schemas.callDataSchema, [
                                    json_schemas_1.schemas.addressSchema,
                                    json_schemas_1.schemas.numberSchema,
                                    json_schemas_1.schemas.jsNumber,
                                ]);
                                if (defaultBlock !== undefined) {
                                    assert_1.assert.isBlockParam('defaultBlock', defaultBlock);
                                }
                                self = this;
                                encodedData = self._strictEncodeArguments('getOrderInfo((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes))', [order]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                abiEncoder = self._lookupAbiEncoder('getOrderInfo((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes))');
                                result = abiEncoder.strictDecodeReturnValue(rawCallResult);
                                // tslint:enable boolean-naming
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (order) {
                var self = this;
                var abiEncodedTransactionData = self._strictEncodeArguments('getOrderInfo((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes))', [order]);
                return abiEncodedTransactionData;
            },
        };
        _this.cancelOrder = {
            sendTransactionAsync: function (order, txData) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                encodedData = self._strictEncodeArguments('cancelOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes))', [order]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.cancelOrder.estimateGasAsync.bind(self, order))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            awaitTransactionSuccessAsync: function (order, txData, pollingIntervalMs, timeoutMs) {
                var _this = this;
                var self = this;
                var txHashPromise = self.cancelOrder.sendTransactionAsync(order, txData);
                return new base_contract_1.PromiseWithTransactionHash(txHashPromise, (function () { return __awaiter(_this, void 0, void 0, function () {
                    var _a, _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                _b = (_a = self._web3Wrapper).awaitTransactionSuccessAsync;
                                return [4 /*yield*/, txHashPromise];
                            case 1: 
                            // When the transaction hash resolves, wait for it to be mined.
                            return [2 /*return*/, _b.apply(_a, [_c.sent(),
                                    pollingIntervalMs,
                                    timeoutMs])];
                        }
                    });
                }); })());
            },
            estimateGasAsync: function (order, txData) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                encodedData = self._strictEncodeArguments('cancelOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes))', [order]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            callAsync: function (order, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, callDataWithDefaults, rawCallResult, abiEncoder, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.doesConformToSchema('callData', callData, json_schemas_1.schemas.callDataSchema, [
                                    json_schemas_1.schemas.addressSchema,
                                    json_schemas_1.schemas.numberSchema,
                                    json_schemas_1.schemas.jsNumber,
                                ]);
                                if (defaultBlock !== undefined) {
                                    assert_1.assert.isBlockParam('defaultBlock', defaultBlock);
                                }
                                self = this;
                                encodedData = self._strictEncodeArguments('cancelOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes))', [order]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                abiEncoder = self._lookupAbiEncoder('cancelOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes))');
                                result = abiEncoder.strictDecodeReturnValue(rawCallResult);
                                // tslint:enable boolean-naming
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (order) {
                var self = this;
                var abiEncodedTransactionData = self._strictEncodeArguments('cancelOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes))', [order]);
                return abiEncodedTransactionData;
            },
        };
        _this.orderEpoch = {
            callAsync: function (index_0, index_1, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, callDataWithDefaults, rawCallResult, abiEncoder, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isString('index_0', index_0);
                                assert_1.assert.isString('index_1', index_1);
                                assert_1.assert.doesConformToSchema('callData', callData, json_schemas_1.schemas.callDataSchema, [
                                    json_schemas_1.schemas.addressSchema,
                                    json_schemas_1.schemas.numberSchema,
                                    json_schemas_1.schemas.jsNumber,
                                ]);
                                if (defaultBlock !== undefined) {
                                    assert_1.assert.isBlockParam('defaultBlock', defaultBlock);
                                }
                                self = this;
                                encodedData = self._strictEncodeArguments('orderEpoch(address,address)', [index_0, index_1]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                abiEncoder = self._lookupAbiEncoder('orderEpoch(address,address)');
                                result = abiEncoder.strictDecodeReturnValue(rawCallResult);
                                // tslint:enable boolean-naming
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (index_0, index_1) {
                assert_1.assert.isString('index_0', index_0);
                assert_1.assert.isString('index_1', index_1);
                var self = this;
                var abiEncodedTransactionData = self._strictEncodeArguments('orderEpoch(address,address)', [
                    index_0,
                    index_1,
                ]);
                return abiEncodedTransactionData;
            },
        };
        _this.ZRX_ASSET_DATA = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, callDataWithDefaults, rawCallResult, abiEncoder, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.doesConformToSchema('callData', callData, json_schemas_1.schemas.callDataSchema, [
                                    json_schemas_1.schemas.addressSchema,
                                    json_schemas_1.schemas.numberSchema,
                                    json_schemas_1.schemas.jsNumber,
                                ]);
                                if (defaultBlock !== undefined) {
                                    assert_1.assert.isBlockParam('defaultBlock', defaultBlock);
                                }
                                self = this;
                                encodedData = self._strictEncodeArguments('ZRX_ASSET_DATA()', []);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                abiEncoder = self._lookupAbiEncoder('ZRX_ASSET_DATA()');
                                result = abiEncoder.strictDecodeReturnValue(rawCallResult);
                                // tslint:enable boolean-naming
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                var self = this;
                var abiEncodedTransactionData = self._strictEncodeArguments('ZRX_ASSET_DATA()', []);
                return abiEncodedTransactionData;
            },
        };
        _this.marketSellOrdersNoThrow = {
            sendTransactionAsync: function (orders, takerAssetFillAmount, signatures, txData) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isArray('orders', orders);
                                assert_1.assert.isBigNumber('takerAssetFillAmount', takerAssetFillAmount);
                                assert_1.assert.isArray('signatures', signatures);
                                self = this;
                                encodedData = self._strictEncodeArguments('marketSellOrdersNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256,bytes[])', [orders, takerAssetFillAmount, signatures]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.marketSellOrdersNoThrow.estimateGasAsync.bind(self, orders, takerAssetFillAmount, signatures))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            awaitTransactionSuccessAsync: function (orders, takerAssetFillAmount, signatures, txData, pollingIntervalMs, timeoutMs) {
                var _this = this;
                assert_1.assert.isArray('orders', orders);
                assert_1.assert.isBigNumber('takerAssetFillAmount', takerAssetFillAmount);
                assert_1.assert.isArray('signatures', signatures);
                var self = this;
                var txHashPromise = self.marketSellOrdersNoThrow.sendTransactionAsync(orders, takerAssetFillAmount, signatures, txData);
                return new base_contract_1.PromiseWithTransactionHash(txHashPromise, (function () { return __awaiter(_this, void 0, void 0, function () {
                    var _a, _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                _b = (_a = self._web3Wrapper).awaitTransactionSuccessAsync;
                                return [4 /*yield*/, txHashPromise];
                            case 1: 
                            // When the transaction hash resolves, wait for it to be mined.
                            return [2 /*return*/, _b.apply(_a, [_c.sent(),
                                    pollingIntervalMs,
                                    timeoutMs])];
                        }
                    });
                }); })());
            },
            estimateGasAsync: function (orders, takerAssetFillAmount, signatures, txData) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isArray('orders', orders);
                                assert_1.assert.isBigNumber('takerAssetFillAmount', takerAssetFillAmount);
                                assert_1.assert.isArray('signatures', signatures);
                                self = this;
                                encodedData = self._strictEncodeArguments('marketSellOrdersNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256,bytes[])', [orders, takerAssetFillAmount, signatures]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            callAsync: function (orders, takerAssetFillAmount, signatures, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, callDataWithDefaults, rawCallResult, abiEncoder, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isArray('orders', orders);
                                assert_1.assert.isBigNumber('takerAssetFillAmount', takerAssetFillAmount);
                                assert_1.assert.isArray('signatures', signatures);
                                assert_1.assert.doesConformToSchema('callData', callData, json_schemas_1.schemas.callDataSchema, [
                                    json_schemas_1.schemas.addressSchema,
                                    json_schemas_1.schemas.numberSchema,
                                    json_schemas_1.schemas.jsNumber,
                                ]);
                                if (defaultBlock !== undefined) {
                                    assert_1.assert.isBlockParam('defaultBlock', defaultBlock);
                                }
                                self = this;
                                encodedData = self._strictEncodeArguments('marketSellOrdersNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256,bytes[])', [orders, takerAssetFillAmount, signatures]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                abiEncoder = self._lookupAbiEncoder('marketSellOrdersNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256,bytes[])');
                                result = abiEncoder.strictDecodeReturnValue(rawCallResult);
                                // tslint:enable boolean-naming
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (orders, takerAssetFillAmount, signatures) {
                assert_1.assert.isArray('orders', orders);
                assert_1.assert.isBigNumber('takerAssetFillAmount', takerAssetFillAmount);
                assert_1.assert.isArray('signatures', signatures);
                var self = this;
                var abiEncodedTransactionData = self._strictEncodeArguments('marketSellOrdersNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256,bytes[])', [orders, takerAssetFillAmount, signatures]);
                return abiEncodedTransactionData;
            },
        };
        _this.EIP712_DOMAIN_HASH = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, callDataWithDefaults, rawCallResult, abiEncoder, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.doesConformToSchema('callData', callData, json_schemas_1.schemas.callDataSchema, [
                                    json_schemas_1.schemas.addressSchema,
                                    json_schemas_1.schemas.numberSchema,
                                    json_schemas_1.schemas.jsNumber,
                                ]);
                                if (defaultBlock !== undefined) {
                                    assert_1.assert.isBlockParam('defaultBlock', defaultBlock);
                                }
                                self = this;
                                encodedData = self._strictEncodeArguments('EIP712_DOMAIN_HASH()', []);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                abiEncoder = self._lookupAbiEncoder('EIP712_DOMAIN_HASH()');
                                result = abiEncoder.strictDecodeReturnValue(rawCallResult);
                                // tslint:enable boolean-naming
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                var self = this;
                var abiEncodedTransactionData = self._strictEncodeArguments('EIP712_DOMAIN_HASH()', []);
                return abiEncodedTransactionData;
            },
        };
        _this.marketBuyOrders = {
            sendTransactionAsync: function (orders, makerAssetFillAmount, signatures, txData) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isArray('orders', orders);
                                assert_1.assert.isBigNumber('makerAssetFillAmount', makerAssetFillAmount);
                                assert_1.assert.isArray('signatures', signatures);
                                self = this;
                                encodedData = self._strictEncodeArguments('marketBuyOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256,bytes[])', [orders, makerAssetFillAmount, signatures]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.marketBuyOrders.estimateGasAsync.bind(self, orders, makerAssetFillAmount, signatures))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            awaitTransactionSuccessAsync: function (orders, makerAssetFillAmount, signatures, txData, pollingIntervalMs, timeoutMs) {
                var _this = this;
                assert_1.assert.isArray('orders', orders);
                assert_1.assert.isBigNumber('makerAssetFillAmount', makerAssetFillAmount);
                assert_1.assert.isArray('signatures', signatures);
                var self = this;
                var txHashPromise = self.marketBuyOrders.sendTransactionAsync(orders, makerAssetFillAmount, signatures, txData);
                return new base_contract_1.PromiseWithTransactionHash(txHashPromise, (function () { return __awaiter(_this, void 0, void 0, function () {
                    var _a, _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                _b = (_a = self._web3Wrapper).awaitTransactionSuccessAsync;
                                return [4 /*yield*/, txHashPromise];
                            case 1: 
                            // When the transaction hash resolves, wait for it to be mined.
                            return [2 /*return*/, _b.apply(_a, [_c.sent(),
                                    pollingIntervalMs,
                                    timeoutMs])];
                        }
                    });
                }); })());
            },
            estimateGasAsync: function (orders, makerAssetFillAmount, signatures, txData) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isArray('orders', orders);
                                assert_1.assert.isBigNumber('makerAssetFillAmount', makerAssetFillAmount);
                                assert_1.assert.isArray('signatures', signatures);
                                self = this;
                                encodedData = self._strictEncodeArguments('marketBuyOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256,bytes[])', [orders, makerAssetFillAmount, signatures]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            callAsync: function (orders, makerAssetFillAmount, signatures, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, callDataWithDefaults, rawCallResult, abiEncoder, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isArray('orders', orders);
                                assert_1.assert.isBigNumber('makerAssetFillAmount', makerAssetFillAmount);
                                assert_1.assert.isArray('signatures', signatures);
                                assert_1.assert.doesConformToSchema('callData', callData, json_schemas_1.schemas.callDataSchema, [
                                    json_schemas_1.schemas.addressSchema,
                                    json_schemas_1.schemas.numberSchema,
                                    json_schemas_1.schemas.jsNumber,
                                ]);
                                if (defaultBlock !== undefined) {
                                    assert_1.assert.isBlockParam('defaultBlock', defaultBlock);
                                }
                                self = this;
                                encodedData = self._strictEncodeArguments('marketBuyOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256,bytes[])', [orders, makerAssetFillAmount, signatures]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                abiEncoder = self._lookupAbiEncoder('marketBuyOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256,bytes[])');
                                result = abiEncoder.strictDecodeReturnValue(rawCallResult);
                                // tslint:enable boolean-naming
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (orders, makerAssetFillAmount, signatures) {
                assert_1.assert.isArray('orders', orders);
                assert_1.assert.isBigNumber('makerAssetFillAmount', makerAssetFillAmount);
                assert_1.assert.isArray('signatures', signatures);
                var self = this;
                var abiEncodedTransactionData = self._strictEncodeArguments('marketBuyOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256,bytes[])', [orders, makerAssetFillAmount, signatures]);
                return abiEncodedTransactionData;
            },
        };
        _this.currentContextAddress = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, callDataWithDefaults, rawCallResult, abiEncoder, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.doesConformToSchema('callData', callData, json_schemas_1.schemas.callDataSchema, [
                                    json_schemas_1.schemas.addressSchema,
                                    json_schemas_1.schemas.numberSchema,
                                    json_schemas_1.schemas.jsNumber,
                                ]);
                                if (defaultBlock !== undefined) {
                                    assert_1.assert.isBlockParam('defaultBlock', defaultBlock);
                                }
                                self = this;
                                encodedData = self._strictEncodeArguments('currentContextAddress()', []);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                abiEncoder = self._lookupAbiEncoder('currentContextAddress()');
                                result = abiEncoder.strictDecodeReturnValue(rawCallResult);
                                // tslint:enable boolean-naming
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                var self = this;
                var abiEncodedTransactionData = self._strictEncodeArguments('currentContextAddress()', []);
                return abiEncodedTransactionData;
            },
        };
        _this.transferOwnership = {
            sendTransactionAsync: function (newOwner, txData) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isString('newOwner', newOwner);
                                self = this;
                                encodedData = self._strictEncodeArguments('transferOwnership(address)', [newOwner]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.transferOwnership.estimateGasAsync.bind(self, newOwner))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            awaitTransactionSuccessAsync: function (newOwner, txData, pollingIntervalMs, timeoutMs) {
                var _this = this;
                assert_1.assert.isString('newOwner', newOwner);
                var self = this;
                var txHashPromise = self.transferOwnership.sendTransactionAsync(newOwner, txData);
                return new base_contract_1.PromiseWithTransactionHash(txHashPromise, (function () { return __awaiter(_this, void 0, void 0, function () {
                    var _a, _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                _b = (_a = self._web3Wrapper).awaitTransactionSuccessAsync;
                                return [4 /*yield*/, txHashPromise];
                            case 1: 
                            // When the transaction hash resolves, wait for it to be mined.
                            return [2 /*return*/, _b.apply(_a, [_c.sent(),
                                    pollingIntervalMs,
                                    timeoutMs])];
                        }
                    });
                }); })());
            },
            estimateGasAsync: function (newOwner, txData) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isString('newOwner', newOwner);
                                self = this;
                                encodedData = self._strictEncodeArguments('transferOwnership(address)', [newOwner]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            callAsync: function (newOwner, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, callDataWithDefaults, rawCallResult, abiEncoder, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isString('newOwner', newOwner);
                                assert_1.assert.doesConformToSchema('callData', callData, json_schemas_1.schemas.callDataSchema, [
                                    json_schemas_1.schemas.addressSchema,
                                    json_schemas_1.schemas.numberSchema,
                                    json_schemas_1.schemas.jsNumber,
                                ]);
                                if (defaultBlock !== undefined) {
                                    assert_1.assert.isBlockParam('defaultBlock', defaultBlock);
                                }
                                self = this;
                                encodedData = self._strictEncodeArguments('transferOwnership(address)', [newOwner]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                abiEncoder = self._lookupAbiEncoder('transferOwnership(address)');
                                result = abiEncoder.strictDecodeReturnValue(rawCallResult);
                                // tslint:enable boolean-naming
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (newOwner) {
                assert_1.assert.isString('newOwner', newOwner);
                var self = this;
                var abiEncodedTransactionData = self._strictEncodeArguments('transferOwnership(address)', [newOwner]);
                return abiEncodedTransactionData;
            },
        };
        _this.VERSION = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, callDataWithDefaults, rawCallResult, abiEncoder, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.doesConformToSchema('callData', callData, json_schemas_1.schemas.callDataSchema, [
                                    json_schemas_1.schemas.addressSchema,
                                    json_schemas_1.schemas.numberSchema,
                                    json_schemas_1.schemas.jsNumber,
                                ]);
                                if (defaultBlock !== undefined) {
                                    assert_1.assert.isBlockParam('defaultBlock', defaultBlock);
                                }
                                self = this;
                                encodedData = self._strictEncodeArguments('VERSION()', []);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                abiEncoder = self._lookupAbiEncoder('VERSION()');
                                result = abiEncoder.strictDecodeReturnValue(rawCallResult);
                                // tslint:enable boolean-naming
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                var self = this;
                var abiEncodedTransactionData = self._strictEncodeArguments('VERSION()', []);
                return abiEncodedTransactionData;
            },
        };
        utils_1.classUtils.bindAll(_this, ['_abiEncoderByFunctionSignature', 'address', '_web3Wrapper']);
        return _this;
    }
    ExchangeContract.deployFrom0xArtifactAsync = function (artifact, supportedProvider, txDefaults, _zrxAssetData) {
        return __awaiter(this, void 0, void 0, function () {
            var provider, bytecode, abi;
            return __generator(this, function (_a) {
                assert_1.assert.doesConformToSchema('txDefaults', txDefaults, json_schemas_1.schemas.txDataSchema, [
                    json_schemas_1.schemas.addressSchema,
                    json_schemas_1.schemas.numberSchema,
                    json_schemas_1.schemas.jsNumber,
                ]);
                if (artifact.compilerOutput === undefined) {
                    throw new Error('Compiler output not found in the artifact file');
                }
                provider = utils_1.providerUtils.standardizeOrThrow(supportedProvider);
                bytecode = artifact.compilerOutput.evm.bytecode.object;
                abi = artifact.compilerOutput.abi;
                return [2 /*return*/, ExchangeContract.deployAsync(bytecode, abi, provider, txDefaults, _zrxAssetData)];
            });
        });
    };
    ExchangeContract.deployAsync = function (bytecode, abi, supportedProvider, txDefaults, _zrxAssetData) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, provider, constructorAbi, iface, deployInfo, txData, web3Wrapper, txDataWithDefaults, txHash, txReceipt, contractInstance;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        assert_1.assert.isHexString('bytecode', bytecode);
                        assert_1.assert.doesConformToSchema('txDefaults', txDefaults, json_schemas_1.schemas.txDataSchema, [
                            json_schemas_1.schemas.addressSchema,
                            json_schemas_1.schemas.numberSchema,
                            json_schemas_1.schemas.jsNumber,
                        ]);
                        provider = utils_1.providerUtils.standardizeOrThrow(supportedProvider);
                        constructorAbi = base_contract_1.BaseContract._lookupConstructorAbi(abi);
                        _a = __read(base_contract_1.BaseContract._formatABIDataItemList(constructorAbi.inputs, [_zrxAssetData], base_contract_1.BaseContract._bigNumberToString), 1), _zrxAssetData = _a[0];
                        iface = new ethers.utils.Interface(abi);
                        deployInfo = iface.deployFunction;
                        txData = deployInfo.encode(bytecode, [_zrxAssetData]);
                        web3Wrapper = new web3_wrapper_1.Web3Wrapper(provider);
                        return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync({ data: txData }, txDefaults, web3Wrapper.estimateGasAsync.bind(web3Wrapper))];
                    case 1:
                        txDataWithDefaults = _b.sent();
                        return [4 /*yield*/, web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                    case 2:
                        txHash = _b.sent();
                        utils_1.logUtils.log("transactionHash: " + txHash);
                        return [4 /*yield*/, web3Wrapper.awaitTransactionSuccessAsync(txHash)];
                    case 3:
                        txReceipt = _b.sent();
                        utils_1.logUtils.log("Exchange successfully deployed at " + txReceipt.contractAddress);
                        contractInstance = new ExchangeContract(txReceipt.contractAddress, provider, txDefaults);
                        contractInstance.constructorArgs = [_zrxAssetData];
                        return [2 /*return*/, contractInstance];
                }
            });
        });
    };
    /**
     * @returns      The contract ABI
     */
    ExchangeContract.ABI = function () {
        var abi = [
            {
                constant: true,
                inputs: [
                    {
                        name: 'index_0',
                        type: 'bytes32',
                    },
                ],
                name: 'filled',
                outputs: [
                    {
                        name: '',
                        type: 'uint256',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    {
                        name: 'orders',
                        type: 'tuple[]',
                        components: [
                            {
                                name: 'makerAddress',
                                type: 'address',
                            },
                            {
                                name: 'takerAddress',
                                type: 'address',
                            },
                            {
                                name: 'feeRecipientAddress',
                                type: 'address',
                            },
                            {
                                name: 'senderAddress',
                                type: 'address',
                            },
                            {
                                name: 'makerAssetAmount',
                                type: 'uint256',
                            },
                            {
                                name: 'takerAssetAmount',
                                type: 'uint256',
                            },
                            {
                                name: 'makerFee',
                                type: 'uint256',
                            },
                            {
                                name: 'takerFee',
                                type: 'uint256',
                            },
                            {
                                name: 'expirationTimeSeconds',
                                type: 'uint256',
                            },
                            {
                                name: 'salt',
                                type: 'uint256',
                            },
                            {
                                name: 'makerAssetData',
                                type: 'bytes',
                            },
                            {
                                name: 'takerAssetData',
                                type: 'bytes',
                            },
                        ],
                    },
                    {
                        name: 'takerAssetFillAmounts',
                        type: 'uint256[]',
                    },
                    {
                        name: 'signatures',
                        type: 'bytes[]',
                    },
                ],
                name: 'batchFillOrders',
                outputs: [
                    {
                        name: 'totalFillResults',
                        type: 'tuple',
                        components: [
                            {
                                name: 'makerAssetFilledAmount',
                                type: 'uint256',
                            },
                            {
                                name: 'takerAssetFilledAmount',
                                type: 'uint256',
                            },
                            {
                                name: 'makerFeePaid',
                                type: 'uint256',
                            },
                            {
                                name: 'takerFeePaid',
                                type: 'uint256',
                            },
                        ],
                    },
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'index_0',
                        type: 'bytes32',
                    },
                ],
                name: 'cancelled',
                outputs: [
                    {
                        name: '',
                        type: 'bool',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    {
                        name: 'hash',
                        type: 'bytes32',
                    },
                    {
                        name: 'signerAddress',
                        type: 'address',
                    },
                    {
                        name: 'signature',
                        type: 'bytes',
                    },
                ],
                name: 'preSign',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    {
                        name: 'leftOrder',
                        type: 'tuple',
                        components: [
                            {
                                name: 'makerAddress',
                                type: 'address',
                            },
                            {
                                name: 'takerAddress',
                                type: 'address',
                            },
                            {
                                name: 'feeRecipientAddress',
                                type: 'address',
                            },
                            {
                                name: 'senderAddress',
                                type: 'address',
                            },
                            {
                                name: 'makerAssetAmount',
                                type: 'uint256',
                            },
                            {
                                name: 'takerAssetAmount',
                                type: 'uint256',
                            },
                            {
                                name: 'makerFee',
                                type: 'uint256',
                            },
                            {
                                name: 'takerFee',
                                type: 'uint256',
                            },
                            {
                                name: 'expirationTimeSeconds',
                                type: 'uint256',
                            },
                            {
                                name: 'salt',
                                type: 'uint256',
                            },
                            {
                                name: 'makerAssetData',
                                type: 'bytes',
                            },
                            {
                                name: 'takerAssetData',
                                type: 'bytes',
                            },
                        ],
                    },
                    {
                        name: 'rightOrder',
                        type: 'tuple',
                        components: [
                            {
                                name: 'makerAddress',
                                type: 'address',
                            },
                            {
                                name: 'takerAddress',
                                type: 'address',
                            },
                            {
                                name: 'feeRecipientAddress',
                                type: 'address',
                            },
                            {
                                name: 'senderAddress',
                                type: 'address',
                            },
                            {
                                name: 'makerAssetAmount',
                                type: 'uint256',
                            },
                            {
                                name: 'takerAssetAmount',
                                type: 'uint256',
                            },
                            {
                                name: 'makerFee',
                                type: 'uint256',
                            },
                            {
                                name: 'takerFee',
                                type: 'uint256',
                            },
                            {
                                name: 'expirationTimeSeconds',
                                type: 'uint256',
                            },
                            {
                                name: 'salt',
                                type: 'uint256',
                            },
                            {
                                name: 'makerAssetData',
                                type: 'bytes',
                            },
                            {
                                name: 'takerAssetData',
                                type: 'bytes',
                            },
                        ],
                    },
                    {
                        name: 'leftSignature',
                        type: 'bytes',
                    },
                    {
                        name: 'rightSignature',
                        type: 'bytes',
                    },
                ],
                name: 'matchOrders',
                outputs: [
                    {
                        name: 'matchedFillResults',
                        type: 'tuple',
                        components: [
                            {
                                name: 'left',
                                type: 'tuple',
                                components: [
                                    {
                                        name: 'makerAssetFilledAmount',
                                        type: 'uint256',
                                    },
                                    {
                                        name: 'takerAssetFilledAmount',
                                        type: 'uint256',
                                    },
                                    {
                                        name: 'makerFeePaid',
                                        type: 'uint256',
                                    },
                                    {
                                        name: 'takerFeePaid',
                                        type: 'uint256',
                                    },
                                ],
                            },
                            {
                                name: 'right',
                                type: 'tuple',
                                components: [
                                    {
                                        name: 'makerAssetFilledAmount',
                                        type: 'uint256',
                                    },
                                    {
                                        name: 'takerAssetFilledAmount',
                                        type: 'uint256',
                                    },
                                    {
                                        name: 'makerFeePaid',
                                        type: 'uint256',
                                    },
                                    {
                                        name: 'takerFeePaid',
                                        type: 'uint256',
                                    },
                                ],
                            },
                            {
                                name: 'leftMakerAssetSpreadAmount',
                                type: 'uint256',
                            },
                        ],
                    },
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    {
                        name: 'order',
                        type: 'tuple',
                        components: [
                            {
                                name: 'makerAddress',
                                type: 'address',
                            },
                            {
                                name: 'takerAddress',
                                type: 'address',
                            },
                            {
                                name: 'feeRecipientAddress',
                                type: 'address',
                            },
                            {
                                name: 'senderAddress',
                                type: 'address',
                            },
                            {
                                name: 'makerAssetAmount',
                                type: 'uint256',
                            },
                            {
                                name: 'takerAssetAmount',
                                type: 'uint256',
                            },
                            {
                                name: 'makerFee',
                                type: 'uint256',
                            },
                            {
                                name: 'takerFee',
                                type: 'uint256',
                            },
                            {
                                name: 'expirationTimeSeconds',
                                type: 'uint256',
                            },
                            {
                                name: 'salt',
                                type: 'uint256',
                            },
                            {
                                name: 'makerAssetData',
                                type: 'bytes',
                            },
                            {
                                name: 'takerAssetData',
                                type: 'bytes',
                            },
                        ],
                    },
                    {
                        name: 'takerAssetFillAmount',
                        type: 'uint256',
                    },
                    {
                        name: 'signature',
                        type: 'bytes',
                    },
                ],
                name: 'fillOrderNoThrow',
                outputs: [
                    {
                        name: 'fillResults',
                        type: 'tuple',
                        components: [
                            {
                                name: 'makerAssetFilledAmount',
                                type: 'uint256',
                            },
                            {
                                name: 'takerAssetFilledAmount',
                                type: 'uint256',
                            },
                            {
                                name: 'makerFeePaid',
                                type: 'uint256',
                            },
                            {
                                name: 'takerFeePaid',
                                type: 'uint256',
                            },
                        ],
                    },
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'index_0',
                        type: 'bytes4',
                    },
                ],
                name: 'assetProxies',
                outputs: [
                    {
                        name: '',
                        type: 'address',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    {
                        name: 'orders',
                        type: 'tuple[]',
                        components: [
                            {
                                name: 'makerAddress',
                                type: 'address',
                            },
                            {
                                name: 'takerAddress',
                                type: 'address',
                            },
                            {
                                name: 'feeRecipientAddress',
                                type: 'address',
                            },
                            {
                                name: 'senderAddress',
                                type: 'address',
                            },
                            {
                                name: 'makerAssetAmount',
                                type: 'uint256',
                            },
                            {
                                name: 'takerAssetAmount',
                                type: 'uint256',
                            },
                            {
                                name: 'makerFee',
                                type: 'uint256',
                            },
                            {
                                name: 'takerFee',
                                type: 'uint256',
                            },
                            {
                                name: 'expirationTimeSeconds',
                                type: 'uint256',
                            },
                            {
                                name: 'salt',
                                type: 'uint256',
                            },
                            {
                                name: 'makerAssetData',
                                type: 'bytes',
                            },
                            {
                                name: 'takerAssetData',
                                type: 'bytes',
                            },
                        ],
                    },
                ],
                name: 'batchCancelOrders',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    {
                        name: 'orders',
                        type: 'tuple[]',
                        components: [
                            {
                                name: 'makerAddress',
                                type: 'address',
                            },
                            {
                                name: 'takerAddress',
                                type: 'address',
                            },
                            {
                                name: 'feeRecipientAddress',
                                type: 'address',
                            },
                            {
                                name: 'senderAddress',
                                type: 'address',
                            },
                            {
                                name: 'makerAssetAmount',
                                type: 'uint256',
                            },
                            {
                                name: 'takerAssetAmount',
                                type: 'uint256',
                            },
                            {
                                name: 'makerFee',
                                type: 'uint256',
                            },
                            {
                                name: 'takerFee',
                                type: 'uint256',
                            },
                            {
                                name: 'expirationTimeSeconds',
                                type: 'uint256',
                            },
                            {
                                name: 'salt',
                                type: 'uint256',
                            },
                            {
                                name: 'makerAssetData',
                                type: 'bytes',
                            },
                            {
                                name: 'takerAssetData',
                                type: 'bytes',
                            },
                        ],
                    },
                    {
                        name: 'takerAssetFillAmounts',
                        type: 'uint256[]',
                    },
                    {
                        name: 'signatures',
                        type: 'bytes[]',
                    },
                ],
                name: 'batchFillOrKillOrders',
                outputs: [
                    {
                        name: 'totalFillResults',
                        type: 'tuple',
                        components: [
                            {
                                name: 'makerAssetFilledAmount',
                                type: 'uint256',
                            },
                            {
                                name: 'takerAssetFilledAmount',
                                type: 'uint256',
                            },
                            {
                                name: 'makerFeePaid',
                                type: 'uint256',
                            },
                            {
                                name: 'takerFeePaid',
                                type: 'uint256',
                            },
                        ],
                    },
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    {
                        name: 'targetOrderEpoch',
                        type: 'uint256',
                    },
                ],
                name: 'cancelOrdersUpTo',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    {
                        name: 'orders',
                        type: 'tuple[]',
                        components: [
                            {
                                name: 'makerAddress',
                                type: 'address',
                            },
                            {
                                name: 'takerAddress',
                                type: 'address',
                            },
                            {
                                name: 'feeRecipientAddress',
                                type: 'address',
                            },
                            {
                                name: 'senderAddress',
                                type: 'address',
                            },
                            {
                                name: 'makerAssetAmount',
                                type: 'uint256',
                            },
                            {
                                name: 'takerAssetAmount',
                                type: 'uint256',
                            },
                            {
                                name: 'makerFee',
                                type: 'uint256',
                            },
                            {
                                name: 'takerFee',
                                type: 'uint256',
                            },
                            {
                                name: 'expirationTimeSeconds',
                                type: 'uint256',
                            },
                            {
                                name: 'salt',
                                type: 'uint256',
                            },
                            {
                                name: 'makerAssetData',
                                type: 'bytes',
                            },
                            {
                                name: 'takerAssetData',
                                type: 'bytes',
                            },
                        ],
                    },
                    {
                        name: 'takerAssetFillAmounts',
                        type: 'uint256[]',
                    },
                    {
                        name: 'signatures',
                        type: 'bytes[]',
                    },
                ],
                name: 'batchFillOrdersNoThrow',
                outputs: [
                    {
                        name: 'totalFillResults',
                        type: 'tuple',
                        components: [
                            {
                                name: 'makerAssetFilledAmount',
                                type: 'uint256',
                            },
                            {
                                name: 'takerAssetFilledAmount',
                                type: 'uint256',
                            },
                            {
                                name: 'makerFeePaid',
                                type: 'uint256',
                            },
                            {
                                name: 'takerFeePaid',
                                type: 'uint256',
                            },
                        ],
                    },
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'assetProxyId',
                        type: 'bytes4',
                    },
                ],
                name: 'getAssetProxy',
                outputs: [
                    {
                        name: '',
                        type: 'address',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'index_0',
                        type: 'bytes32',
                    },
                ],
                name: 'transactions',
                outputs: [
                    {
                        name: '',
                        type: 'bool',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    {
                        name: 'order',
                        type: 'tuple',
                        components: [
                            {
                                name: 'makerAddress',
                                type: 'address',
                            },
                            {
                                name: 'takerAddress',
                                type: 'address',
                            },
                            {
                                name: 'feeRecipientAddress',
                                type: 'address',
                            },
                            {
                                name: 'senderAddress',
                                type: 'address',
                            },
                            {
                                name: 'makerAssetAmount',
                                type: 'uint256',
                            },
                            {
                                name: 'takerAssetAmount',
                                type: 'uint256',
                            },
                            {
                                name: 'makerFee',
                                type: 'uint256',
                            },
                            {
                                name: 'takerFee',
                                type: 'uint256',
                            },
                            {
                                name: 'expirationTimeSeconds',
                                type: 'uint256',
                            },
                            {
                                name: 'salt',
                                type: 'uint256',
                            },
                            {
                                name: 'makerAssetData',
                                type: 'bytes',
                            },
                            {
                                name: 'takerAssetData',
                                type: 'bytes',
                            },
                        ],
                    },
                    {
                        name: 'takerAssetFillAmount',
                        type: 'uint256',
                    },
                    {
                        name: 'signature',
                        type: 'bytes',
                    },
                ],
                name: 'fillOrKillOrder',
                outputs: [
                    {
                        name: 'fillResults',
                        type: 'tuple',
                        components: [
                            {
                                name: 'makerAssetFilledAmount',
                                type: 'uint256',
                            },
                            {
                                name: 'takerAssetFilledAmount',
                                type: 'uint256',
                            },
                            {
                                name: 'makerFeePaid',
                                type: 'uint256',
                            },
                            {
                                name: 'takerFeePaid',
                                type: 'uint256',
                            },
                        ],
                    },
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    {
                        name: 'validatorAddress',
                        type: 'address',
                    },
                    {
                        name: 'approval',
                        type: 'bool',
                    },
                ],
                name: 'setSignatureValidatorApproval',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'index_0',
                        type: 'address',
                    },
                    {
                        name: 'index_1',
                        type: 'address',
                    },
                ],
                name: 'allowedValidators',
                outputs: [
                    {
                        name: '',
                        type: 'bool',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    {
                        name: 'orders',
                        type: 'tuple[]',
                        components: [
                            {
                                name: 'makerAddress',
                                type: 'address',
                            },
                            {
                                name: 'takerAddress',
                                type: 'address',
                            },
                            {
                                name: 'feeRecipientAddress',
                                type: 'address',
                            },
                            {
                                name: 'senderAddress',
                                type: 'address',
                            },
                            {
                                name: 'makerAssetAmount',
                                type: 'uint256',
                            },
                            {
                                name: 'takerAssetAmount',
                                type: 'uint256',
                            },
                            {
                                name: 'makerFee',
                                type: 'uint256',
                            },
                            {
                                name: 'takerFee',
                                type: 'uint256',
                            },
                            {
                                name: 'expirationTimeSeconds',
                                type: 'uint256',
                            },
                            {
                                name: 'salt',
                                type: 'uint256',
                            },
                            {
                                name: 'makerAssetData',
                                type: 'bytes',
                            },
                            {
                                name: 'takerAssetData',
                                type: 'bytes',
                            },
                        ],
                    },
                    {
                        name: 'takerAssetFillAmount',
                        type: 'uint256',
                    },
                    {
                        name: 'signatures',
                        type: 'bytes[]',
                    },
                ],
                name: 'marketSellOrders',
                outputs: [
                    {
                        name: 'totalFillResults',
                        type: 'tuple',
                        components: [
                            {
                                name: 'makerAssetFilledAmount',
                                type: 'uint256',
                            },
                            {
                                name: 'takerAssetFilledAmount',
                                type: 'uint256',
                            },
                            {
                                name: 'makerFeePaid',
                                type: 'uint256',
                            },
                            {
                                name: 'takerFeePaid',
                                type: 'uint256',
                            },
                        ],
                    },
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'orders',
                        type: 'tuple[]',
                        components: [
                            {
                                name: 'makerAddress',
                                type: 'address',
                            },
                            {
                                name: 'takerAddress',
                                type: 'address',
                            },
                            {
                                name: 'feeRecipientAddress',
                                type: 'address',
                            },
                            {
                                name: 'senderAddress',
                                type: 'address',
                            },
                            {
                                name: 'makerAssetAmount',
                                type: 'uint256',
                            },
                            {
                                name: 'takerAssetAmount',
                                type: 'uint256',
                            },
                            {
                                name: 'makerFee',
                                type: 'uint256',
                            },
                            {
                                name: 'takerFee',
                                type: 'uint256',
                            },
                            {
                                name: 'expirationTimeSeconds',
                                type: 'uint256',
                            },
                            {
                                name: 'salt',
                                type: 'uint256',
                            },
                            {
                                name: 'makerAssetData',
                                type: 'bytes',
                            },
                            {
                                name: 'takerAssetData',
                                type: 'bytes',
                            },
                        ],
                    },
                ],
                name: 'getOrdersInfo',
                outputs: [
                    {
                        name: '',
                        type: 'tuple[]',
                        components: [
                            {
                                name: 'orderStatus',
                                type: 'uint8',
                            },
                            {
                                name: 'orderHash',
                                type: 'bytes32',
                            },
                            {
                                name: 'orderTakerAssetFilledAmount',
                                type: 'uint256',
                            },
                        ],
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'index_0',
                        type: 'bytes32',
                    },
                    {
                        name: 'index_1',
                        type: 'address',
                    },
                ],
                name: 'preSigned',
                outputs: [
                    {
                        name: '',
                        type: 'bool',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'owner',
                outputs: [
                    {
                        name: '',
                        type: 'address',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'hash',
                        type: 'bytes32',
                    },
                    {
                        name: 'signerAddress',
                        type: 'address',
                    },
                    {
                        name: 'signature',
                        type: 'bytes',
                    },
                ],
                name: 'isValidSignature',
                outputs: [
                    {
                        name: 'isValid',
                        type: 'bool',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    {
                        name: 'orders',
                        type: 'tuple[]',
                        components: [
                            {
                                name: 'makerAddress',
                                type: 'address',
                            },
                            {
                                name: 'takerAddress',
                                type: 'address',
                            },
                            {
                                name: 'feeRecipientAddress',
                                type: 'address',
                            },
                            {
                                name: 'senderAddress',
                                type: 'address',
                            },
                            {
                                name: 'makerAssetAmount',
                                type: 'uint256',
                            },
                            {
                                name: 'takerAssetAmount',
                                type: 'uint256',
                            },
                            {
                                name: 'makerFee',
                                type: 'uint256',
                            },
                            {
                                name: 'takerFee',
                                type: 'uint256',
                            },
                            {
                                name: 'expirationTimeSeconds',
                                type: 'uint256',
                            },
                            {
                                name: 'salt',
                                type: 'uint256',
                            },
                            {
                                name: 'makerAssetData',
                                type: 'bytes',
                            },
                            {
                                name: 'takerAssetData',
                                type: 'bytes',
                            },
                        ],
                    },
                    {
                        name: 'makerAssetFillAmount',
                        type: 'uint256',
                    },
                    {
                        name: 'signatures',
                        type: 'bytes[]',
                    },
                ],
                name: 'marketBuyOrdersNoThrow',
                outputs: [
                    {
                        name: 'totalFillResults',
                        type: 'tuple',
                        components: [
                            {
                                name: 'makerAssetFilledAmount',
                                type: 'uint256',
                            },
                            {
                                name: 'takerAssetFilledAmount',
                                type: 'uint256',
                            },
                            {
                                name: 'makerFeePaid',
                                type: 'uint256',
                            },
                            {
                                name: 'takerFeePaid',
                                type: 'uint256',
                            },
                        ],
                    },
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    {
                        name: 'order',
                        type: 'tuple',
                        components: [
                            {
                                name: 'makerAddress',
                                type: 'address',
                            },
                            {
                                name: 'takerAddress',
                                type: 'address',
                            },
                            {
                                name: 'feeRecipientAddress',
                                type: 'address',
                            },
                            {
                                name: 'senderAddress',
                                type: 'address',
                            },
                            {
                                name: 'makerAssetAmount',
                                type: 'uint256',
                            },
                            {
                                name: 'takerAssetAmount',
                                type: 'uint256',
                            },
                            {
                                name: 'makerFee',
                                type: 'uint256',
                            },
                            {
                                name: 'takerFee',
                                type: 'uint256',
                            },
                            {
                                name: 'expirationTimeSeconds',
                                type: 'uint256',
                            },
                            {
                                name: 'salt',
                                type: 'uint256',
                            },
                            {
                                name: 'makerAssetData',
                                type: 'bytes',
                            },
                            {
                                name: 'takerAssetData',
                                type: 'bytes',
                            },
                        ],
                    },
                    {
                        name: 'takerAssetFillAmount',
                        type: 'uint256',
                    },
                    {
                        name: 'signature',
                        type: 'bytes',
                    },
                ],
                name: 'fillOrder',
                outputs: [
                    {
                        name: 'fillResults',
                        type: 'tuple',
                        components: [
                            {
                                name: 'makerAssetFilledAmount',
                                type: 'uint256',
                            },
                            {
                                name: 'takerAssetFilledAmount',
                                type: 'uint256',
                            },
                            {
                                name: 'makerFeePaid',
                                type: 'uint256',
                            },
                            {
                                name: 'takerFeePaid',
                                type: 'uint256',
                            },
                        ],
                    },
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    {
                        name: 'salt',
                        type: 'uint256',
                    },
                    {
                        name: 'signerAddress',
                        type: 'address',
                    },
                    {
                        name: 'data',
                        type: 'bytes',
                    },
                    {
                        name: 'signature',
                        type: 'bytes',
                    },
                ],
                name: 'executeTransaction',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    {
                        name: 'assetProxy',
                        type: 'address',
                    },
                ],
                name: 'registerAssetProxy',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'order',
                        type: 'tuple',
                        components: [
                            {
                                name: 'makerAddress',
                                type: 'address',
                            },
                            {
                                name: 'takerAddress',
                                type: 'address',
                            },
                            {
                                name: 'feeRecipientAddress',
                                type: 'address',
                            },
                            {
                                name: 'senderAddress',
                                type: 'address',
                            },
                            {
                                name: 'makerAssetAmount',
                                type: 'uint256',
                            },
                            {
                                name: 'takerAssetAmount',
                                type: 'uint256',
                            },
                            {
                                name: 'makerFee',
                                type: 'uint256',
                            },
                            {
                                name: 'takerFee',
                                type: 'uint256',
                            },
                            {
                                name: 'expirationTimeSeconds',
                                type: 'uint256',
                            },
                            {
                                name: 'salt',
                                type: 'uint256',
                            },
                            {
                                name: 'makerAssetData',
                                type: 'bytes',
                            },
                            {
                                name: 'takerAssetData',
                                type: 'bytes',
                            },
                        ],
                    },
                ],
                name: 'getOrderInfo',
                outputs: [
                    {
                        name: 'orderInfo',
                        type: 'tuple',
                        components: [
                            {
                                name: 'orderStatus',
                                type: 'uint8',
                            },
                            {
                                name: 'orderHash',
                                type: 'bytes32',
                            },
                            {
                                name: 'orderTakerAssetFilledAmount',
                                type: 'uint256',
                            },
                        ],
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    {
                        name: 'order',
                        type: 'tuple',
                        components: [
                            {
                                name: 'makerAddress',
                                type: 'address',
                            },
                            {
                                name: 'takerAddress',
                                type: 'address',
                            },
                            {
                                name: 'feeRecipientAddress',
                                type: 'address',
                            },
                            {
                                name: 'senderAddress',
                                type: 'address',
                            },
                            {
                                name: 'makerAssetAmount',
                                type: 'uint256',
                            },
                            {
                                name: 'takerAssetAmount',
                                type: 'uint256',
                            },
                            {
                                name: 'makerFee',
                                type: 'uint256',
                            },
                            {
                                name: 'takerFee',
                                type: 'uint256',
                            },
                            {
                                name: 'expirationTimeSeconds',
                                type: 'uint256',
                            },
                            {
                                name: 'salt',
                                type: 'uint256',
                            },
                            {
                                name: 'makerAssetData',
                                type: 'bytes',
                            },
                            {
                                name: 'takerAssetData',
                                type: 'bytes',
                            },
                        ],
                    },
                ],
                name: 'cancelOrder',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'index_0',
                        type: 'address',
                    },
                    {
                        name: 'index_1',
                        type: 'address',
                    },
                ],
                name: 'orderEpoch',
                outputs: [
                    {
                        name: '',
                        type: 'uint256',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'ZRX_ASSET_DATA',
                outputs: [
                    {
                        name: '',
                        type: 'bytes',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    {
                        name: 'orders',
                        type: 'tuple[]',
                        components: [
                            {
                                name: 'makerAddress',
                                type: 'address',
                            },
                            {
                                name: 'takerAddress',
                                type: 'address',
                            },
                            {
                                name: 'feeRecipientAddress',
                                type: 'address',
                            },
                            {
                                name: 'senderAddress',
                                type: 'address',
                            },
                            {
                                name: 'makerAssetAmount',
                                type: 'uint256',
                            },
                            {
                                name: 'takerAssetAmount',
                                type: 'uint256',
                            },
                            {
                                name: 'makerFee',
                                type: 'uint256',
                            },
                            {
                                name: 'takerFee',
                                type: 'uint256',
                            },
                            {
                                name: 'expirationTimeSeconds',
                                type: 'uint256',
                            },
                            {
                                name: 'salt',
                                type: 'uint256',
                            },
                            {
                                name: 'makerAssetData',
                                type: 'bytes',
                            },
                            {
                                name: 'takerAssetData',
                                type: 'bytes',
                            },
                        ],
                    },
                    {
                        name: 'takerAssetFillAmount',
                        type: 'uint256',
                    },
                    {
                        name: 'signatures',
                        type: 'bytes[]',
                    },
                ],
                name: 'marketSellOrdersNoThrow',
                outputs: [
                    {
                        name: 'totalFillResults',
                        type: 'tuple',
                        components: [
                            {
                                name: 'makerAssetFilledAmount',
                                type: 'uint256',
                            },
                            {
                                name: 'takerAssetFilledAmount',
                                type: 'uint256',
                            },
                            {
                                name: 'makerFeePaid',
                                type: 'uint256',
                            },
                            {
                                name: 'takerFeePaid',
                                type: 'uint256',
                            },
                        ],
                    },
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'EIP712_DOMAIN_HASH',
                outputs: [
                    {
                        name: '',
                        type: 'bytes32',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    {
                        name: 'orders',
                        type: 'tuple[]',
                        components: [
                            {
                                name: 'makerAddress',
                                type: 'address',
                            },
                            {
                                name: 'takerAddress',
                                type: 'address',
                            },
                            {
                                name: 'feeRecipientAddress',
                                type: 'address',
                            },
                            {
                                name: 'senderAddress',
                                type: 'address',
                            },
                            {
                                name: 'makerAssetAmount',
                                type: 'uint256',
                            },
                            {
                                name: 'takerAssetAmount',
                                type: 'uint256',
                            },
                            {
                                name: 'makerFee',
                                type: 'uint256',
                            },
                            {
                                name: 'takerFee',
                                type: 'uint256',
                            },
                            {
                                name: 'expirationTimeSeconds',
                                type: 'uint256',
                            },
                            {
                                name: 'salt',
                                type: 'uint256',
                            },
                            {
                                name: 'makerAssetData',
                                type: 'bytes',
                            },
                            {
                                name: 'takerAssetData',
                                type: 'bytes',
                            },
                        ],
                    },
                    {
                        name: 'makerAssetFillAmount',
                        type: 'uint256',
                    },
                    {
                        name: 'signatures',
                        type: 'bytes[]',
                    },
                ],
                name: 'marketBuyOrders',
                outputs: [
                    {
                        name: 'totalFillResults',
                        type: 'tuple',
                        components: [
                            {
                                name: 'makerAssetFilledAmount',
                                type: 'uint256',
                            },
                            {
                                name: 'takerAssetFilledAmount',
                                type: 'uint256',
                            },
                            {
                                name: 'makerFeePaid',
                                type: 'uint256',
                            },
                            {
                                name: 'takerFeePaid',
                                type: 'uint256',
                            },
                        ],
                    },
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'currentContextAddress',
                outputs: [
                    {
                        name: '',
                        type: 'address',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    {
                        name: 'newOwner',
                        type: 'address',
                    },
                ],
                name: 'transferOwnership',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'VERSION',
                outputs: [
                    {
                        name: '',
                        type: 'string',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                inputs: [
                    {
                        name: '_zrxAssetData',
                        type: 'bytes',
                    },
                ],
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'constructor',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'signerAddress',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'validatorAddress',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'approved',
                        type: 'bool',
                        indexed: false,
                    },
                ],
                name: 'SignatureValidatorApproval',
                outputs: [],
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'makerAddress',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'feeRecipientAddress',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'takerAddress',
                        type: 'address',
                        indexed: false,
                    },
                    {
                        name: 'senderAddress',
                        type: 'address',
                        indexed: false,
                    },
                    {
                        name: 'makerAssetFilledAmount',
                        type: 'uint256',
                        indexed: false,
                    },
                    {
                        name: 'takerAssetFilledAmount',
                        type: 'uint256',
                        indexed: false,
                    },
                    {
                        name: 'makerFeePaid',
                        type: 'uint256',
                        indexed: false,
                    },
                    {
                        name: 'takerFeePaid',
                        type: 'uint256',
                        indexed: false,
                    },
                    {
                        name: 'orderHash',
                        type: 'bytes32',
                        indexed: true,
                    },
                    {
                        name: 'makerAssetData',
                        type: 'bytes',
                        indexed: false,
                    },
                    {
                        name: 'takerAssetData',
                        type: 'bytes',
                        indexed: false,
                    },
                ],
                name: 'Fill',
                outputs: [],
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'makerAddress',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'feeRecipientAddress',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'senderAddress',
                        type: 'address',
                        indexed: false,
                    },
                    {
                        name: 'orderHash',
                        type: 'bytes32',
                        indexed: true,
                    },
                    {
                        name: 'makerAssetData',
                        type: 'bytes',
                        indexed: false,
                    },
                    {
                        name: 'takerAssetData',
                        type: 'bytes',
                        indexed: false,
                    },
                ],
                name: 'Cancel',
                outputs: [],
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'makerAddress',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'senderAddress',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'orderEpoch',
                        type: 'uint256',
                        indexed: false,
                    },
                ],
                name: 'CancelUpTo',
                outputs: [],
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'id',
                        type: 'bytes4',
                        indexed: false,
                    },
                    {
                        name: 'assetProxy',
                        type: 'address',
                        indexed: false,
                    },
                ],
                name: 'AssetProxyRegistered',
                outputs: [],
                type: 'event',
            },
        ];
        return abi;
    };
    return ExchangeContract;
}(base_contract_1.BaseContract));
exports.ExchangeContract = ExchangeContract;
// tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method no-parameter-reassignment no-consecutive-blank-lines ordered-imports align
// tslint:enable:trailing-comma whitespace no-trailing-whitespace
//# sourceMappingURL=exchange.js.map