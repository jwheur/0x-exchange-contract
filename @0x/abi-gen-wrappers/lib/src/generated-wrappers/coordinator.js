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
// tslint:enable:no-unused-variable
/* istanbul ignore next */
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
var CoordinatorContract = /** @class */ (function (_super) {
    __extends(CoordinatorContract, _super);
    function CoordinatorContract(address, supportedProvider, txDefaults) {
        var _this = _super.call(this, 'Coordinator', CoordinatorContract.ABI(), address, supportedProvider, txDefaults) || this;
        _this.getSignerAddress = {
            callAsync: function (hash, signature, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, callDataWithDefaults, rawCallResult, abiEncoder, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isString('hash', hash);
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
                                encodedData = self._strictEncodeArguments('getSignerAddress(bytes32,bytes)', [hash, signature]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                abiEncoder = self._lookupAbiEncoder('getSignerAddress(bytes32,bytes)');
                                result = abiEncoder.strictDecodeReturnValue(rawCallResult);
                                // tslint:enable boolean-naming
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (hash, signature) {
                assert_1.assert.isString('hash', hash);
                assert_1.assert.isString('signature', signature);
                var self = this;
                var abiEncodedTransactionData = self._strictEncodeArguments('getSignerAddress(bytes32,bytes)', [
                    hash,
                    signature,
                ]);
                return abiEncodedTransactionData;
            },
        };
        _this.getTransactionHash = {
            callAsync: function (transaction, callData, defaultBlock) {
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
                                encodedData = self._strictEncodeArguments('getTransactionHash((uint256,address,bytes))', [
                                    transaction,
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                abiEncoder = self._lookupAbiEncoder('getTransactionHash((uint256,address,bytes))');
                                result = abiEncoder.strictDecodeReturnValue(rawCallResult);
                                // tslint:enable boolean-naming
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (transaction) {
                var self = this;
                var abiEncodedTransactionData = self._strictEncodeArguments('getTransactionHash((uint256,address,bytes))', [transaction]);
                return abiEncodedTransactionData;
            },
        };
        _this.getCoordinatorApprovalHash = {
            callAsync: function (approval, callData, defaultBlock) {
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
                                encodedData = self._strictEncodeArguments('getCoordinatorApprovalHash((address,bytes32,bytes,uint256))', [approval]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                abiEncoder = self._lookupAbiEncoder('getCoordinatorApprovalHash((address,bytes32,bytes,uint256))');
                                result = abiEncoder.strictDecodeReturnValue(rawCallResult);
                                // tslint:enable boolean-naming
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (approval) {
                var self = this;
                var abiEncodedTransactionData = self._strictEncodeArguments('getCoordinatorApprovalHash((address,bytes32,bytes,uint256))', [approval]);
                return abiEncodedTransactionData;
            },
        };
        _this.executeTransaction = {
            sendTransactionAsync: function (transaction, txOrigin, transactionSignature, approvalExpirationTimeSeconds, approvalSignatures, txData) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isString('txOrigin', txOrigin);
                                assert_1.assert.isString('transactionSignature', transactionSignature);
                                assert_1.assert.isArray('approvalExpirationTimeSeconds', approvalExpirationTimeSeconds);
                                assert_1.assert.isArray('approvalSignatures', approvalSignatures);
                                self = this;
                                encodedData = self._strictEncodeArguments('executeTransaction((uint256,address,bytes),address,bytes,uint256[],bytes[])', [transaction, txOrigin, transactionSignature, approvalExpirationTimeSeconds, approvalSignatures]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.executeTransaction.estimateGasAsync.bind(self, transaction, txOrigin, transactionSignature, approvalExpirationTimeSeconds, approvalSignatures))];
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
            awaitTransactionSuccessAsync: function (transaction, txOrigin, transactionSignature, approvalExpirationTimeSeconds, approvalSignatures, txData, pollingIntervalMs, timeoutMs) {
                var _this = this;
                assert_1.assert.isString('txOrigin', txOrigin);
                assert_1.assert.isString('transactionSignature', transactionSignature);
                assert_1.assert.isArray('approvalExpirationTimeSeconds', approvalExpirationTimeSeconds);
                assert_1.assert.isArray('approvalSignatures', approvalSignatures);
                var self = this;
                var txHashPromise = self.executeTransaction.sendTransactionAsync(transaction, txOrigin, transactionSignature, approvalExpirationTimeSeconds, approvalSignatures, txData);
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
            estimateGasAsync: function (transaction, txOrigin, transactionSignature, approvalExpirationTimeSeconds, approvalSignatures, txData) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isString('txOrigin', txOrigin);
                                assert_1.assert.isString('transactionSignature', transactionSignature);
                                assert_1.assert.isArray('approvalExpirationTimeSeconds', approvalExpirationTimeSeconds);
                                assert_1.assert.isArray('approvalSignatures', approvalSignatures);
                                self = this;
                                encodedData = self._strictEncodeArguments('executeTransaction((uint256,address,bytes),address,bytes,uint256[],bytes[])', [transaction, txOrigin, transactionSignature, approvalExpirationTimeSeconds, approvalSignatures]);
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
            callAsync: function (transaction, txOrigin, transactionSignature, approvalExpirationTimeSeconds, approvalSignatures, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, callDataWithDefaults, rawCallResult, abiEncoder, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isString('txOrigin', txOrigin);
                                assert_1.assert.isString('transactionSignature', transactionSignature);
                                assert_1.assert.isArray('approvalExpirationTimeSeconds', approvalExpirationTimeSeconds);
                                assert_1.assert.isArray('approvalSignatures', approvalSignatures);
                                assert_1.assert.doesConformToSchema('callData', callData, json_schemas_1.schemas.callDataSchema, [
                                    json_schemas_1.schemas.addressSchema,
                                    json_schemas_1.schemas.numberSchema,
                                    json_schemas_1.schemas.jsNumber,
                                ]);
                                if (defaultBlock !== undefined) {
                                    assert_1.assert.isBlockParam('defaultBlock', defaultBlock);
                                }
                                self = this;
                                encodedData = self._strictEncodeArguments('executeTransaction((uint256,address,bytes),address,bytes,uint256[],bytes[])', [transaction, txOrigin, transactionSignature, approvalExpirationTimeSeconds, approvalSignatures]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                abiEncoder = self._lookupAbiEncoder('executeTransaction((uint256,address,bytes),address,bytes,uint256[],bytes[])');
                                result = abiEncoder.strictDecodeReturnValue(rawCallResult);
                                // tslint:enable boolean-naming
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (transaction, txOrigin, transactionSignature, approvalExpirationTimeSeconds, approvalSignatures) {
                assert_1.assert.isString('txOrigin', txOrigin);
                assert_1.assert.isString('transactionSignature', transactionSignature);
                assert_1.assert.isArray('approvalExpirationTimeSeconds', approvalExpirationTimeSeconds);
                assert_1.assert.isArray('approvalSignatures', approvalSignatures);
                var self = this;
                var abiEncodedTransactionData = self._strictEncodeArguments('executeTransaction((uint256,address,bytes),address,bytes,uint256[],bytes[])', [transaction, txOrigin, transactionSignature, approvalExpirationTimeSeconds, approvalSignatures]);
                return abiEncodedTransactionData;
            },
        };
        _this.EIP712_EXCHANGE_DOMAIN_HASH = {
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
                                encodedData = self._strictEncodeArguments('EIP712_EXCHANGE_DOMAIN_HASH()', []);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                abiEncoder = self._lookupAbiEncoder('EIP712_EXCHANGE_DOMAIN_HASH()');
                                result = abiEncoder.strictDecodeReturnValue(rawCallResult);
                                // tslint:enable boolean-naming
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                var self = this;
                var abiEncodedTransactionData = self._strictEncodeArguments('EIP712_EXCHANGE_DOMAIN_HASH()', []);
                return abiEncodedTransactionData;
            },
        };
        _this.assertValidCoordinatorApprovals = {
            callAsync: function (transaction, txOrigin, transactionSignature, approvalExpirationTimeSeconds, approvalSignatures, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, callDataWithDefaults, rawCallResult, abiEncoder, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isString('txOrigin', txOrigin);
                                assert_1.assert.isString('transactionSignature', transactionSignature);
                                assert_1.assert.isArray('approvalExpirationTimeSeconds', approvalExpirationTimeSeconds);
                                assert_1.assert.isArray('approvalSignatures', approvalSignatures);
                                assert_1.assert.doesConformToSchema('callData', callData, json_schemas_1.schemas.callDataSchema, [
                                    json_schemas_1.schemas.addressSchema,
                                    json_schemas_1.schemas.numberSchema,
                                    json_schemas_1.schemas.jsNumber,
                                ]);
                                if (defaultBlock !== undefined) {
                                    assert_1.assert.isBlockParam('defaultBlock', defaultBlock);
                                }
                                self = this;
                                encodedData = self._strictEncodeArguments('assertValidCoordinatorApprovals((uint256,address,bytes),address,bytes,uint256[],bytes[])', [transaction, txOrigin, transactionSignature, approvalExpirationTimeSeconds, approvalSignatures]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                abiEncoder = self._lookupAbiEncoder('assertValidCoordinatorApprovals((uint256,address,bytes),address,bytes,uint256[],bytes[])');
                                result = abiEncoder.strictDecodeReturnValue(rawCallResult);
                                // tslint:enable boolean-naming
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (transaction, txOrigin, transactionSignature, approvalExpirationTimeSeconds, approvalSignatures) {
                assert_1.assert.isString('txOrigin', txOrigin);
                assert_1.assert.isString('transactionSignature', transactionSignature);
                assert_1.assert.isArray('approvalExpirationTimeSeconds', approvalExpirationTimeSeconds);
                assert_1.assert.isArray('approvalSignatures', approvalSignatures);
                var self = this;
                var abiEncodedTransactionData = self._strictEncodeArguments('assertValidCoordinatorApprovals((uint256,address,bytes),address,bytes,uint256[],bytes[])', [transaction, txOrigin, transactionSignature, approvalExpirationTimeSeconds, approvalSignatures]);
                return abiEncodedTransactionData;
            },
        };
        _this.decodeOrdersFromFillData = {
            callAsync: function (data, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, callDataWithDefaults, rawCallResult, abiEncoder, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isString('data', data);
                                assert_1.assert.doesConformToSchema('callData', callData, json_schemas_1.schemas.callDataSchema, [
                                    json_schemas_1.schemas.addressSchema,
                                    json_schemas_1.schemas.numberSchema,
                                    json_schemas_1.schemas.jsNumber,
                                ]);
                                if (defaultBlock !== undefined) {
                                    assert_1.assert.isBlockParam('defaultBlock', defaultBlock);
                                }
                                self = this;
                                encodedData = self._strictEncodeArguments('decodeOrdersFromFillData(bytes)', [data]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                abiEncoder = self._lookupAbiEncoder('decodeOrdersFromFillData(bytes)');
                                result = abiEncoder.strictDecodeReturnValue(rawCallResult);
                                // tslint:enable boolean-naming
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (data) {
                assert_1.assert.isString('data', data);
                var self = this;
                var abiEncodedTransactionData = self._strictEncodeArguments('decodeOrdersFromFillData(bytes)', [data]);
                return abiEncodedTransactionData;
            },
        };
        _this.EIP712_COORDINATOR_DOMAIN_HASH = {
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
                                encodedData = self._strictEncodeArguments('EIP712_COORDINATOR_DOMAIN_HASH()', []);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                abiEncoder = self._lookupAbiEncoder('EIP712_COORDINATOR_DOMAIN_HASH()');
                                result = abiEncoder.strictDecodeReturnValue(rawCallResult);
                                // tslint:enable boolean-naming
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                var self = this;
                var abiEncodedTransactionData = self._strictEncodeArguments('EIP712_COORDINATOR_DOMAIN_HASH()', []);
                return abiEncodedTransactionData;
            },
        };
        utils_1.classUtils.bindAll(_this, ['_abiEncoderByFunctionSignature', 'address', '_web3Wrapper']);
        return _this;
    }
    CoordinatorContract.deployFrom0xArtifactAsync = function (artifact, supportedProvider, txDefaults, _exchange) {
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
                return [2 /*return*/, CoordinatorContract.deployAsync(bytecode, abi, provider, txDefaults, _exchange)];
            });
        });
    };
    CoordinatorContract.deployAsync = function (bytecode, abi, supportedProvider, txDefaults, _exchange) {
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
                        _a = __read(base_contract_1.BaseContract._formatABIDataItemList(constructorAbi.inputs, [_exchange], base_contract_1.BaseContract._bigNumberToString), 1), _exchange = _a[0];
                        iface = new ethers.utils.Interface(abi);
                        deployInfo = iface.deployFunction;
                        txData = deployInfo.encode(bytecode, [_exchange]);
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
                        utils_1.logUtils.log("Coordinator successfully deployed at " + txReceipt.contractAddress);
                        contractInstance = new CoordinatorContract(txReceipt.contractAddress, provider, txDefaults);
                        contractInstance.constructorArgs = [_exchange];
                        return [2 /*return*/, contractInstance];
                }
            });
        });
    };
    /**
     * @returns      The contract ABI
     */
    CoordinatorContract.ABI = function () {
        var abi = [
            {
                constant: true,
                inputs: [
                    {
                        name: 'hash',
                        type: 'bytes32',
                    },
                    {
                        name: 'signature',
                        type: 'bytes',
                    },
                ],
                name: 'getSignerAddress',
                outputs: [
                    {
                        name: 'signerAddress',
                        type: 'address',
                    },
                ],
                payable: false,
                stateMutability: 'pure',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'transaction',
                        type: 'tuple',
                        components: [
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
                        ],
                    },
                ],
                name: 'getTransactionHash',
                outputs: [
                    {
                        name: 'transactionHash',
                        type: 'bytes32',
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
                        name: 'approval',
                        type: 'tuple',
                        components: [
                            {
                                name: 'txOrigin',
                                type: 'address',
                            },
                            {
                                name: 'transactionHash',
                                type: 'bytes32',
                            },
                            {
                                name: 'transactionSignature',
                                type: 'bytes',
                            },
                            {
                                name: 'approvalExpirationTimeSeconds',
                                type: 'uint256',
                            },
                        ],
                    },
                ],
                name: 'getCoordinatorApprovalHash',
                outputs: [
                    {
                        name: 'approvalHash',
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
                        name: 'transaction',
                        type: 'tuple',
                        components: [
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
                        ],
                    },
                    {
                        name: 'txOrigin',
                        type: 'address',
                    },
                    {
                        name: 'transactionSignature',
                        type: 'bytes',
                    },
                    {
                        name: 'approvalExpirationTimeSeconds',
                        type: 'uint256[]',
                    },
                    {
                        name: 'approvalSignatures',
                        type: 'bytes[]',
                    },
                ],
                name: 'executeTransaction',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'EIP712_EXCHANGE_DOMAIN_HASH',
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
                constant: true,
                inputs: [
                    {
                        name: 'transaction',
                        type: 'tuple',
                        components: [
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
                        ],
                    },
                    {
                        name: 'txOrigin',
                        type: 'address',
                    },
                    {
                        name: 'transactionSignature',
                        type: 'bytes',
                    },
                    {
                        name: 'approvalExpirationTimeSeconds',
                        type: 'uint256[]',
                    },
                    {
                        name: 'approvalSignatures',
                        type: 'bytes[]',
                    },
                ],
                name: 'assertValidCoordinatorApprovals',
                outputs: [],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'data',
                        type: 'bytes',
                    },
                ],
                name: 'decodeOrdersFromFillData',
                outputs: [
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
                payable: false,
                stateMutability: 'pure',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'EIP712_COORDINATOR_DOMAIN_HASH',
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
                inputs: [
                    {
                        name: '_exchange',
                        type: 'address',
                    },
                ],
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'constructor',
            },
        ];
        return abi;
    };
    return CoordinatorContract;
}(base_contract_1.BaseContract));
exports.CoordinatorContract = CoordinatorContract;
// tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method no-parameter-reassignment no-consecutive-blank-lines ordered-imports align
// tslint:enable:trailing-comma whitespace no-trailing-whitespace
//# sourceMappingURL=coordinator.js.map