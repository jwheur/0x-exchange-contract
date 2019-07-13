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
var TestLibBytesContract = /** @class */ (function (_super) {
    __extends(TestLibBytesContract, _super);
    function TestLibBytesContract(address, supportedProvider, txDefaults) {
        var _this = _super.call(this, 'TestLibBytes', TestLibBytesContract.ABI(), address, supportedProvider, txDefaults) || this;
        _this.publicPopLastByte = {
            callAsync: function (b, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, callDataWithDefaults, rawCallResult, abiEncoder, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isString('b', b);
                                assert_1.assert.doesConformToSchema('callData', callData, json_schemas_1.schemas.callDataSchema, [
                                    json_schemas_1.schemas.addressSchema,
                                    json_schemas_1.schemas.numberSchema,
                                    json_schemas_1.schemas.jsNumber,
                                ]);
                                if (defaultBlock !== undefined) {
                                    assert_1.assert.isBlockParam('defaultBlock', defaultBlock);
                                }
                                self = this;
                                encodedData = self._strictEncodeArguments('publicPopLastByte(bytes)', [b
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                abiEncoder = self._lookupAbiEncoder('publicPopLastByte(bytes)');
                                result = abiEncoder.strictDecodeReturnValue(rawCallResult);
                                // tslint:enable boolean-naming
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (b) {
                assert_1.assert.isString('b', b);
                var self = this;
                var abiEncodedTransactionData = self._strictEncodeArguments('publicPopLastByte(bytes)', [b
                ]);
                return abiEncodedTransactionData;
            },
        };
        _this.publicReadBytesWithLength = {
            callAsync: function (b, index, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, callDataWithDefaults, rawCallResult, abiEncoder, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isString('b', b);
                                assert_1.assert.isBigNumber('index', index);
                                assert_1.assert.doesConformToSchema('callData', callData, json_schemas_1.schemas.callDataSchema, [
                                    json_schemas_1.schemas.addressSchema,
                                    json_schemas_1.schemas.numberSchema,
                                    json_schemas_1.schemas.jsNumber,
                                ]);
                                if (defaultBlock !== undefined) {
                                    assert_1.assert.isBlockParam('defaultBlock', defaultBlock);
                                }
                                self = this;
                                encodedData = self._strictEncodeArguments('publicReadBytesWithLength(bytes,uint256)', [b,
                                    index
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                abiEncoder = self._lookupAbiEncoder('publicReadBytesWithLength(bytes,uint256)');
                                result = abiEncoder.strictDecodeReturnValue(rawCallResult);
                                // tslint:enable boolean-naming
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (b, index) {
                assert_1.assert.isString('b', b);
                assert_1.assert.isBigNumber('index', index);
                var self = this;
                var abiEncodedTransactionData = self._strictEncodeArguments('publicReadBytesWithLength(bytes,uint256)', [b,
                    index
                ]);
                return abiEncodedTransactionData;
            },
        };
        _this.publicDeepCopyBytes = {
            callAsync: function (dest, source, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, callDataWithDefaults, rawCallResult, abiEncoder, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isString('dest', dest);
                                assert_1.assert.isString('source', source);
                                assert_1.assert.doesConformToSchema('callData', callData, json_schemas_1.schemas.callDataSchema, [
                                    json_schemas_1.schemas.addressSchema,
                                    json_schemas_1.schemas.numberSchema,
                                    json_schemas_1.schemas.jsNumber,
                                ]);
                                if (defaultBlock !== undefined) {
                                    assert_1.assert.isBlockParam('defaultBlock', defaultBlock);
                                }
                                self = this;
                                encodedData = self._strictEncodeArguments('publicDeepCopyBytes(bytes,bytes)', [dest,
                                    source
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                abiEncoder = self._lookupAbiEncoder('publicDeepCopyBytes(bytes,bytes)');
                                result = abiEncoder.strictDecodeReturnValue(rawCallResult);
                                // tslint:enable boolean-naming
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (dest, source) {
                assert_1.assert.isString('dest', dest);
                assert_1.assert.isString('source', source);
                var self = this;
                var abiEncodedTransactionData = self._strictEncodeArguments('publicDeepCopyBytes(bytes,bytes)', [dest,
                    source
                ]);
                return abiEncodedTransactionData;
            },
        };
        _this.publicWriteAddress = {
            callAsync: function (b, index, input, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, callDataWithDefaults, rawCallResult, abiEncoder, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isString('b', b);
                                assert_1.assert.isBigNumber('index', index);
                                assert_1.assert.isString('input', input);
                                assert_1.assert.doesConformToSchema('callData', callData, json_schemas_1.schemas.callDataSchema, [
                                    json_schemas_1.schemas.addressSchema,
                                    json_schemas_1.schemas.numberSchema,
                                    json_schemas_1.schemas.jsNumber,
                                ]);
                                if (defaultBlock !== undefined) {
                                    assert_1.assert.isBlockParam('defaultBlock', defaultBlock);
                                }
                                self = this;
                                encodedData = self._strictEncodeArguments('publicWriteAddress(bytes,uint256,address)', [b,
                                    index,
                                    input
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                abiEncoder = self._lookupAbiEncoder('publicWriteAddress(bytes,uint256,address)');
                                result = abiEncoder.strictDecodeReturnValue(rawCallResult);
                                // tslint:enable boolean-naming
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (b, index, input) {
                assert_1.assert.isString('b', b);
                assert_1.assert.isBigNumber('index', index);
                assert_1.assert.isString('input', input);
                var self = this;
                var abiEncodedTransactionData = self._strictEncodeArguments('publicWriteAddress(bytes,uint256,address)', [b,
                    index,
                    input
                ]);
                return abiEncodedTransactionData;
            },
        };
        _this.publicWriteBytesWithLength = {
            callAsync: function (b, index, input, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, callDataWithDefaults, rawCallResult, abiEncoder, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isString('b', b);
                                assert_1.assert.isBigNumber('index', index);
                                assert_1.assert.isString('input', input);
                                assert_1.assert.doesConformToSchema('callData', callData, json_schemas_1.schemas.callDataSchema, [
                                    json_schemas_1.schemas.addressSchema,
                                    json_schemas_1.schemas.numberSchema,
                                    json_schemas_1.schemas.jsNumber,
                                ]);
                                if (defaultBlock !== undefined) {
                                    assert_1.assert.isBlockParam('defaultBlock', defaultBlock);
                                }
                                self = this;
                                encodedData = self._strictEncodeArguments('publicWriteBytesWithLength(bytes,uint256,bytes)', [b,
                                    index,
                                    input
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                abiEncoder = self._lookupAbiEncoder('publicWriteBytesWithLength(bytes,uint256,bytes)');
                                result = abiEncoder.strictDecodeReturnValue(rawCallResult);
                                // tslint:enable boolean-naming
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (b, index, input) {
                assert_1.assert.isString('b', b);
                assert_1.assert.isBigNumber('index', index);
                assert_1.assert.isString('input', input);
                var self = this;
                var abiEncodedTransactionData = self._strictEncodeArguments('publicWriteBytesWithLength(bytes,uint256,bytes)', [b,
                    index,
                    input
                ]);
                return abiEncodedTransactionData;
            },
        };
        _this.testMemcpy = {
            callAsync: function (mem, dest, source, length, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, callDataWithDefaults, rawCallResult, abiEncoder, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isString('mem', mem);
                                assert_1.assert.isBigNumber('dest', dest);
                                assert_1.assert.isBigNumber('source', source);
                                assert_1.assert.isBigNumber('length', length);
                                assert_1.assert.doesConformToSchema('callData', callData, json_schemas_1.schemas.callDataSchema, [
                                    json_schemas_1.schemas.addressSchema,
                                    json_schemas_1.schemas.numberSchema,
                                    json_schemas_1.schemas.jsNumber,
                                ]);
                                if (defaultBlock !== undefined) {
                                    assert_1.assert.isBlockParam('defaultBlock', defaultBlock);
                                }
                                self = this;
                                encodedData = self._strictEncodeArguments('testMemcpy(bytes,uint256,uint256,uint256)', [mem,
                                    dest,
                                    source,
                                    length
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                abiEncoder = self._lookupAbiEncoder('testMemcpy(bytes,uint256,uint256,uint256)');
                                result = abiEncoder.strictDecodeReturnValue(rawCallResult);
                                // tslint:enable boolean-naming
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (mem, dest, source, length) {
                assert_1.assert.isString('mem', mem);
                assert_1.assert.isBigNumber('dest', dest);
                assert_1.assert.isBigNumber('source', source);
                assert_1.assert.isBigNumber('length', length);
                var self = this;
                var abiEncodedTransactionData = self._strictEncodeArguments('testMemcpy(bytes,uint256,uint256,uint256)', [mem,
                    dest,
                    source,
                    length
                ]);
                return abiEncodedTransactionData;
            },
        };
        _this.publicReadAddress = {
            callAsync: function (b, index, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, callDataWithDefaults, rawCallResult, abiEncoder, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isString('b', b);
                                assert_1.assert.isBigNumber('index', index);
                                assert_1.assert.doesConformToSchema('callData', callData, json_schemas_1.schemas.callDataSchema, [
                                    json_schemas_1.schemas.addressSchema,
                                    json_schemas_1.schemas.numberSchema,
                                    json_schemas_1.schemas.jsNumber,
                                ]);
                                if (defaultBlock !== undefined) {
                                    assert_1.assert.isBlockParam('defaultBlock', defaultBlock);
                                }
                                self = this;
                                encodedData = self._strictEncodeArguments('publicReadAddress(bytes,uint256)', [b,
                                    index
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                abiEncoder = self._lookupAbiEncoder('publicReadAddress(bytes,uint256)');
                                result = abiEncoder.strictDecodeReturnValue(rawCallResult);
                                // tslint:enable boolean-naming
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (b, index) {
                assert_1.assert.isString('b', b);
                assert_1.assert.isBigNumber('index', index);
                var self = this;
                var abiEncodedTransactionData = self._strictEncodeArguments('publicReadAddress(bytes,uint256)', [b,
                    index
                ]);
                return abiEncodedTransactionData;
            },
        };
        _this.publicWriteBytes32 = {
            callAsync: function (b, index, input, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, callDataWithDefaults, rawCallResult, abiEncoder, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isString('b', b);
                                assert_1.assert.isBigNumber('index', index);
                                assert_1.assert.isString('input', input);
                                assert_1.assert.doesConformToSchema('callData', callData, json_schemas_1.schemas.callDataSchema, [
                                    json_schemas_1.schemas.addressSchema,
                                    json_schemas_1.schemas.numberSchema,
                                    json_schemas_1.schemas.jsNumber,
                                ]);
                                if (defaultBlock !== undefined) {
                                    assert_1.assert.isBlockParam('defaultBlock', defaultBlock);
                                }
                                self = this;
                                encodedData = self._strictEncodeArguments('publicWriteBytes32(bytes,uint256,bytes32)', [b,
                                    index,
                                    input
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                abiEncoder = self._lookupAbiEncoder('publicWriteBytes32(bytes,uint256,bytes32)');
                                result = abiEncoder.strictDecodeReturnValue(rawCallResult);
                                // tslint:enable boolean-naming
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (b, index, input) {
                assert_1.assert.isString('b', b);
                assert_1.assert.isBigNumber('index', index);
                assert_1.assert.isString('input', input);
                var self = this;
                var abiEncodedTransactionData = self._strictEncodeArguments('publicWriteBytes32(bytes,uint256,bytes32)', [b,
                    index,
                    input
                ]);
                return abiEncodedTransactionData;
            },
        };
        _this.publicSlice = {
            callAsync: function (b, from, to, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, callDataWithDefaults, rawCallResult, abiEncoder, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isString('b', b);
                                assert_1.assert.isBigNumber('from', from);
                                assert_1.assert.isBigNumber('to', to);
                                assert_1.assert.doesConformToSchema('callData', callData, json_schemas_1.schemas.callDataSchema, [
                                    json_schemas_1.schemas.addressSchema,
                                    json_schemas_1.schemas.numberSchema,
                                    json_schemas_1.schemas.jsNumber,
                                ]);
                                if (defaultBlock !== undefined) {
                                    assert_1.assert.isBlockParam('defaultBlock', defaultBlock);
                                }
                                self = this;
                                encodedData = self._strictEncodeArguments('publicSlice(bytes,uint256,uint256)', [b,
                                    from,
                                    to
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                abiEncoder = self._lookupAbiEncoder('publicSlice(bytes,uint256,uint256)');
                                result = abiEncoder.strictDecodeReturnValue(rawCallResult);
                                // tslint:enable boolean-naming
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (b, from, to) {
                assert_1.assert.isString('b', b);
                assert_1.assert.isBigNumber('from', from);
                assert_1.assert.isBigNumber('to', to);
                var self = this;
                var abiEncodedTransactionData = self._strictEncodeArguments('publicSlice(bytes,uint256,uint256)', [b,
                    from,
                    to
                ]);
                return abiEncodedTransactionData;
            },
        };
        _this.publicPopLast20Bytes = {
            callAsync: function (b, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, callDataWithDefaults, rawCallResult, abiEncoder, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isString('b', b);
                                assert_1.assert.doesConformToSchema('callData', callData, json_schemas_1.schemas.callDataSchema, [
                                    json_schemas_1.schemas.addressSchema,
                                    json_schemas_1.schemas.numberSchema,
                                    json_schemas_1.schemas.jsNumber,
                                ]);
                                if (defaultBlock !== undefined) {
                                    assert_1.assert.isBlockParam('defaultBlock', defaultBlock);
                                }
                                self = this;
                                encodedData = self._strictEncodeArguments('publicPopLast20Bytes(bytes)', [b
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                abiEncoder = self._lookupAbiEncoder('publicPopLast20Bytes(bytes)');
                                result = abiEncoder.strictDecodeReturnValue(rawCallResult);
                                // tslint:enable boolean-naming
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (b) {
                assert_1.assert.isString('b', b);
                var self = this;
                var abiEncodedTransactionData = self._strictEncodeArguments('publicPopLast20Bytes(bytes)', [b
                ]);
                return abiEncodedTransactionData;
            },
        };
        _this.publicEqualsPop1 = {
            callAsync: function (lhs, rhs, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, callDataWithDefaults, rawCallResult, abiEncoder, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isString('lhs', lhs);
                                assert_1.assert.isString('rhs', rhs);
                                assert_1.assert.doesConformToSchema('callData', callData, json_schemas_1.schemas.callDataSchema, [
                                    json_schemas_1.schemas.addressSchema,
                                    json_schemas_1.schemas.numberSchema,
                                    json_schemas_1.schemas.jsNumber,
                                ]);
                                if (defaultBlock !== undefined) {
                                    assert_1.assert.isBlockParam('defaultBlock', defaultBlock);
                                }
                                self = this;
                                encodedData = self._strictEncodeArguments('publicEqualsPop1(bytes,bytes)', [lhs,
                                    rhs
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                abiEncoder = self._lookupAbiEncoder('publicEqualsPop1(bytes,bytes)');
                                result = abiEncoder.strictDecodeReturnValue(rawCallResult);
                                // tslint:enable boolean-naming
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (lhs, rhs) {
                assert_1.assert.isString('lhs', lhs);
                assert_1.assert.isString('rhs', rhs);
                var self = this;
                var abiEncodedTransactionData = self._strictEncodeArguments('publicEqualsPop1(bytes,bytes)', [lhs,
                    rhs
                ]);
                return abiEncodedTransactionData;
            },
        };
        _this.publicWriteUint256 = {
            callAsync: function (b, index, input, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, callDataWithDefaults, rawCallResult, abiEncoder, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isString('b', b);
                                assert_1.assert.isBigNumber('index', index);
                                assert_1.assert.isBigNumber('input', input);
                                assert_1.assert.doesConformToSchema('callData', callData, json_schemas_1.schemas.callDataSchema, [
                                    json_schemas_1.schemas.addressSchema,
                                    json_schemas_1.schemas.numberSchema,
                                    json_schemas_1.schemas.jsNumber,
                                ]);
                                if (defaultBlock !== undefined) {
                                    assert_1.assert.isBlockParam('defaultBlock', defaultBlock);
                                }
                                self = this;
                                encodedData = self._strictEncodeArguments('publicWriteUint256(bytes,uint256,uint256)', [b,
                                    index,
                                    input
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                abiEncoder = self._lookupAbiEncoder('publicWriteUint256(bytes,uint256,uint256)');
                                result = abiEncoder.strictDecodeReturnValue(rawCallResult);
                                // tslint:enable boolean-naming
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (b, index, input) {
                assert_1.assert.isString('b', b);
                assert_1.assert.isBigNumber('index', index);
                assert_1.assert.isBigNumber('input', input);
                var self = this;
                var abiEncodedTransactionData = self._strictEncodeArguments('publicWriteUint256(bytes,uint256,uint256)', [b,
                    index,
                    input
                ]);
                return abiEncodedTransactionData;
            },
        };
        _this.publicReadBytes32 = {
            callAsync: function (b, index, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, callDataWithDefaults, rawCallResult, abiEncoder, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isString('b', b);
                                assert_1.assert.isBigNumber('index', index);
                                assert_1.assert.doesConformToSchema('callData', callData, json_schemas_1.schemas.callDataSchema, [
                                    json_schemas_1.schemas.addressSchema,
                                    json_schemas_1.schemas.numberSchema,
                                    json_schemas_1.schemas.jsNumber,
                                ]);
                                if (defaultBlock !== undefined) {
                                    assert_1.assert.isBlockParam('defaultBlock', defaultBlock);
                                }
                                self = this;
                                encodedData = self._strictEncodeArguments('publicReadBytes32(bytes,uint256)', [b,
                                    index
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                abiEncoder = self._lookupAbiEncoder('publicReadBytes32(bytes,uint256)');
                                result = abiEncoder.strictDecodeReturnValue(rawCallResult);
                                // tslint:enable boolean-naming
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (b, index) {
                assert_1.assert.isString('b', b);
                assert_1.assert.isBigNumber('index', index);
                var self = this;
                var abiEncodedTransactionData = self._strictEncodeArguments('publicReadBytes32(bytes,uint256)', [b,
                    index
                ]);
                return abiEncodedTransactionData;
            },
        };
        _this.publicSliceDestructive = {
            callAsync: function (b, from, to, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, callDataWithDefaults, rawCallResult, abiEncoder, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isString('b', b);
                                assert_1.assert.isBigNumber('from', from);
                                assert_1.assert.isBigNumber('to', to);
                                assert_1.assert.doesConformToSchema('callData', callData, json_schemas_1.schemas.callDataSchema, [
                                    json_schemas_1.schemas.addressSchema,
                                    json_schemas_1.schemas.numberSchema,
                                    json_schemas_1.schemas.jsNumber,
                                ]);
                                if (defaultBlock !== undefined) {
                                    assert_1.assert.isBlockParam('defaultBlock', defaultBlock);
                                }
                                self = this;
                                encodedData = self._strictEncodeArguments('publicSliceDestructive(bytes,uint256,uint256)', [b,
                                    from,
                                    to
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                abiEncoder = self._lookupAbiEncoder('publicSliceDestructive(bytes,uint256,uint256)');
                                result = abiEncoder.strictDecodeReturnValue(rawCallResult);
                                // tslint:enable boolean-naming
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (b, from, to) {
                assert_1.assert.isString('b', b);
                assert_1.assert.isBigNumber('from', from);
                assert_1.assert.isBigNumber('to', to);
                var self = this;
                var abiEncodedTransactionData = self._strictEncodeArguments('publicSliceDestructive(bytes,uint256,uint256)', [b,
                    from,
                    to
                ]);
                return abiEncodedTransactionData;
            },
        };
        _this.publicReadBytes4 = {
            callAsync: function (b, index, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, callDataWithDefaults, rawCallResult, abiEncoder, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isString('b', b);
                                assert_1.assert.isBigNumber('index', index);
                                assert_1.assert.doesConformToSchema('callData', callData, json_schemas_1.schemas.callDataSchema, [
                                    json_schemas_1.schemas.addressSchema,
                                    json_schemas_1.schemas.numberSchema,
                                    json_schemas_1.schemas.jsNumber,
                                ]);
                                if (defaultBlock !== undefined) {
                                    assert_1.assert.isBlockParam('defaultBlock', defaultBlock);
                                }
                                self = this;
                                encodedData = self._strictEncodeArguments('publicReadBytes4(bytes,uint256)', [b,
                                    index
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                abiEncoder = self._lookupAbiEncoder('publicReadBytes4(bytes,uint256)');
                                result = abiEncoder.strictDecodeReturnValue(rawCallResult);
                                // tslint:enable boolean-naming
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (b, index) {
                assert_1.assert.isString('b', b);
                assert_1.assert.isBigNumber('index', index);
                var self = this;
                var abiEncodedTransactionData = self._strictEncodeArguments('publicReadBytes4(bytes,uint256)', [b,
                    index
                ]);
                return abiEncodedTransactionData;
            },
        };
        _this.publicReadUint256 = {
            callAsync: function (b, index, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, callDataWithDefaults, rawCallResult, abiEncoder, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isString('b', b);
                                assert_1.assert.isBigNumber('index', index);
                                assert_1.assert.doesConformToSchema('callData', callData, json_schemas_1.schemas.callDataSchema, [
                                    json_schemas_1.schemas.addressSchema,
                                    json_schemas_1.schemas.numberSchema,
                                    json_schemas_1.schemas.jsNumber,
                                ]);
                                if (defaultBlock !== undefined) {
                                    assert_1.assert.isBlockParam('defaultBlock', defaultBlock);
                                }
                                self = this;
                                encodedData = self._strictEncodeArguments('publicReadUint256(bytes,uint256)', [b,
                                    index
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                abiEncoder = self._lookupAbiEncoder('publicReadUint256(bytes,uint256)');
                                result = abiEncoder.strictDecodeReturnValue(rawCallResult);
                                // tslint:enable boolean-naming
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (b, index) {
                assert_1.assert.isString('b', b);
                assert_1.assert.isBigNumber('index', index);
                var self = this;
                var abiEncodedTransactionData = self._strictEncodeArguments('publicReadUint256(bytes,uint256)', [b,
                    index
                ]);
                return abiEncodedTransactionData;
            },
        };
        _this.publicEquals = {
            callAsync: function (lhs, rhs, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, callDataWithDefaults, rawCallResult, abiEncoder, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isString('lhs', lhs);
                                assert_1.assert.isString('rhs', rhs);
                                assert_1.assert.doesConformToSchema('callData', callData, json_schemas_1.schemas.callDataSchema, [
                                    json_schemas_1.schemas.addressSchema,
                                    json_schemas_1.schemas.numberSchema,
                                    json_schemas_1.schemas.jsNumber,
                                ]);
                                if (defaultBlock !== undefined) {
                                    assert_1.assert.isBlockParam('defaultBlock', defaultBlock);
                                }
                                self = this;
                                encodedData = self._strictEncodeArguments('publicEquals(bytes,bytes)', [lhs,
                                    rhs
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                abiEncoder = self._lookupAbiEncoder('publicEquals(bytes,bytes)');
                                result = abiEncoder.strictDecodeReturnValue(rawCallResult);
                                // tslint:enable boolean-naming
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (lhs, rhs) {
                assert_1.assert.isString('lhs', lhs);
                assert_1.assert.isString('rhs', rhs);
                var self = this;
                var abiEncodedTransactionData = self._strictEncodeArguments('publicEquals(bytes,bytes)', [lhs,
                    rhs
                ]);
                return abiEncodedTransactionData;
            },
        };
        utils_1.classUtils.bindAll(_this, ['_abiEncoderByFunctionSignature', 'address', '_web3Wrapper']);
        return _this;
    }
    TestLibBytesContract.deployFrom0xArtifactAsync = function (artifact, supportedProvider, txDefaults) {
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
                return [2 /*return*/, TestLibBytesContract.deployAsync(bytecode, abi, provider, txDefaults)];
            });
        });
    };
    TestLibBytesContract.deployAsync = function (bytecode, abi, supportedProvider, txDefaults) {
        return __awaiter(this, void 0, void 0, function () {
            var provider, constructorAbi, iface, deployInfo, txData, web3Wrapper, txDataWithDefaults, txHash, txReceipt, contractInstance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        assert_1.assert.isHexString('bytecode', bytecode);
                        assert_1.assert.doesConformToSchema('txDefaults', txDefaults, json_schemas_1.schemas.txDataSchema, [
                            json_schemas_1.schemas.addressSchema,
                            json_schemas_1.schemas.numberSchema,
                            json_schemas_1.schemas.jsNumber,
                        ]);
                        provider = utils_1.providerUtils.standardizeOrThrow(supportedProvider);
                        constructorAbi = base_contract_1.BaseContract._lookupConstructorAbi(abi);
                        base_contract_1.BaseContract._formatABIDataItemList(constructorAbi.inputs, [], base_contract_1.BaseContract._bigNumberToString);
                        iface = new ethers.utils.Interface(abi);
                        deployInfo = iface.deployFunction;
                        txData = deployInfo.encode(bytecode, []);
                        web3Wrapper = new web3_wrapper_1.Web3Wrapper(provider);
                        return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync({ data: txData }, txDefaults, web3Wrapper.estimateGasAsync.bind(web3Wrapper))];
                    case 1:
                        txDataWithDefaults = _a.sent();
                        return [4 /*yield*/, web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                    case 2:
                        txHash = _a.sent();
                        utils_1.logUtils.log("transactionHash: " + txHash);
                        return [4 /*yield*/, web3Wrapper.awaitTransactionSuccessAsync(txHash)];
                    case 3:
                        txReceipt = _a.sent();
                        utils_1.logUtils.log("TestLibBytes successfully deployed at " + txReceipt.contractAddress);
                        contractInstance = new TestLibBytesContract(txReceipt.contractAddress, provider, txDefaults);
                        contractInstance.constructorArgs = [];
                        return [2 /*return*/, contractInstance];
                }
            });
        });
    };
    /**
     * @returns      The contract ABI
     */
    TestLibBytesContract.ABI = function () {
        var abi = [
            {
                constant: true,
                inputs: [
                    {
                        name: 'b',
                        type: 'bytes',
                    },
                ],
                name: 'publicPopLastByte',
                outputs: [
                    {
                        name: '',
                        type: 'bytes',
                    },
                    {
                        name: 'result',
                        type: 'bytes1',
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
                        name: 'b',
                        type: 'bytes',
                    },
                    {
                        name: 'index',
                        type: 'uint256',
                    },
                ],
                name: 'publicReadBytesWithLength',
                outputs: [
                    {
                        name: 'result',
                        type: 'bytes',
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
                        name: 'dest',
                        type: 'bytes',
                    },
                    {
                        name: 'source',
                        type: 'bytes',
                    },
                ],
                name: 'publicDeepCopyBytes',
                outputs: [
                    {
                        name: '',
                        type: 'bytes',
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
                        name: 'b',
                        type: 'bytes',
                    },
                    {
                        name: 'index',
                        type: 'uint256',
                    },
                    {
                        name: 'input',
                        type: 'address',
                    },
                ],
                name: 'publicWriteAddress',
                outputs: [
                    {
                        name: '',
                        type: 'bytes',
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
                        name: 'b',
                        type: 'bytes',
                    },
                    {
                        name: 'index',
                        type: 'uint256',
                    },
                    {
                        name: 'input',
                        type: 'bytes',
                    },
                ],
                name: 'publicWriteBytesWithLength',
                outputs: [
                    {
                        name: '',
                        type: 'bytes',
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
                        name: 'mem',
                        type: 'bytes',
                    },
                    {
                        name: 'dest',
                        type: 'uint256',
                    },
                    {
                        name: 'source',
                        type: 'uint256',
                    },
                    {
                        name: 'length',
                        type: 'uint256',
                    },
                ],
                name: 'testMemcpy',
                outputs: [
                    {
                        name: '',
                        type: 'bytes',
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
                        name: 'b',
                        type: 'bytes',
                    },
                    {
                        name: 'index',
                        type: 'uint256',
                    },
                ],
                name: 'publicReadAddress',
                outputs: [
                    {
                        name: 'result',
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
                        name: 'b',
                        type: 'bytes',
                    },
                    {
                        name: 'index',
                        type: 'uint256',
                    },
                    {
                        name: 'input',
                        type: 'bytes32',
                    },
                ],
                name: 'publicWriteBytes32',
                outputs: [
                    {
                        name: '',
                        type: 'bytes',
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
                        name: 'b',
                        type: 'bytes',
                    },
                    {
                        name: 'from',
                        type: 'uint256',
                    },
                    {
                        name: 'to',
                        type: 'uint256',
                    },
                ],
                name: 'publicSlice',
                outputs: [
                    {
                        name: 'result',
                        type: 'bytes',
                    },
                    {
                        name: 'original',
                        type: 'bytes',
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
                        name: 'b',
                        type: 'bytes',
                    },
                ],
                name: 'publicPopLast20Bytes',
                outputs: [
                    {
                        name: '',
                        type: 'bytes',
                    },
                    {
                        name: 'result',
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
                        name: 'lhs',
                        type: 'bytes',
                    },
                    {
                        name: 'rhs',
                        type: 'bytes',
                    },
                ],
                name: 'publicEqualsPop1',
                outputs: [
                    {
                        name: 'equal',
                        type: 'bool',
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
                        name: 'b',
                        type: 'bytes',
                    },
                    {
                        name: 'index',
                        type: 'uint256',
                    },
                    {
                        name: 'input',
                        type: 'uint256',
                    },
                ],
                name: 'publicWriteUint256',
                outputs: [
                    {
                        name: '',
                        type: 'bytes',
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
                        name: 'b',
                        type: 'bytes',
                    },
                    {
                        name: 'index',
                        type: 'uint256',
                    },
                ],
                name: 'publicReadBytes32',
                outputs: [
                    {
                        name: 'result',
                        type: 'bytes32',
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
                        name: 'b',
                        type: 'bytes',
                    },
                    {
                        name: 'from',
                        type: 'uint256',
                    },
                    {
                        name: 'to',
                        type: 'uint256',
                    },
                ],
                name: 'publicSliceDestructive',
                outputs: [
                    {
                        name: 'result',
                        type: 'bytes',
                    },
                    {
                        name: 'original',
                        type: 'bytes',
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
                        name: 'b',
                        type: 'bytes',
                    },
                    {
                        name: 'index',
                        type: 'uint256',
                    },
                ],
                name: 'publicReadBytes4',
                outputs: [
                    {
                        name: 'result',
                        type: 'bytes4',
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
                        name: 'b',
                        type: 'bytes',
                    },
                    {
                        name: 'index',
                        type: 'uint256',
                    },
                ],
                name: 'publicReadUint256',
                outputs: [
                    {
                        name: 'result',
                        type: 'uint256',
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
                        name: 'lhs',
                        type: 'bytes',
                    },
                    {
                        name: 'rhs',
                        type: 'bytes',
                    },
                ],
                name: 'publicEquals',
                outputs: [
                    {
                        name: 'equal',
                        type: 'bool',
                    },
                ],
                payable: false,
                stateMutability: 'pure',
                type: 'function',
            },
        ];
        return abi;
    };
    return TestLibBytesContract;
}(base_contract_1.BaseContract));
exports.TestLibBytesContract = TestLibBytesContract;
// tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method no-parameter-reassignment no-consecutive-blank-lines ordered-imports align
// tslint:enable:trailing-comma whitespace no-trailing-whitespace
//# sourceMappingURL=test_lib_bytes.js.map