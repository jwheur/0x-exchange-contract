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
var IAssetDataContract = /** @class */ (function (_super) {
    __extends(IAssetDataContract, _super);
    function IAssetDataContract(address, supportedProvider, txDefaults) {
        var _this = _super.call(this, 'IAssetData', IAssetDataContract.ABI(), address, supportedProvider, txDefaults) || this;
        _this.ERC721Token = {
            sendTransactionAsync: function (tokenAddress, tokenId, txData) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isString('tokenAddress', tokenAddress);
                                assert_1.assert.isBigNumber('tokenId', tokenId);
                                self = this;
                                encodedData = self._strictEncodeArguments('ERC721Token(address,uint256)', [tokenAddress,
                                    tokenId
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.ERC721Token.estimateGasAsync.bind(self, tokenAddress, tokenId))];
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
            awaitTransactionSuccessAsync: function (tokenAddress, tokenId, txData, pollingIntervalMs, timeoutMs) {
                var _this = this;
                assert_1.assert.isString('tokenAddress', tokenAddress);
                assert_1.assert.isBigNumber('tokenId', tokenId);
                var self = this;
                var txHashPromise = self.ERC721Token.sendTransactionAsync(tokenAddress, tokenId, txData);
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
            estimateGasAsync: function (tokenAddress, tokenId, txData) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isString('tokenAddress', tokenAddress);
                                assert_1.assert.isBigNumber('tokenId', tokenId);
                                self = this;
                                encodedData = self._strictEncodeArguments('ERC721Token(address,uint256)', [tokenAddress,
                                    tokenId
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
            callAsync: function (tokenAddress, tokenId, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, callDataWithDefaults, rawCallResult, abiEncoder, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isString('tokenAddress', tokenAddress);
                                assert_1.assert.isBigNumber('tokenId', tokenId);
                                assert_1.assert.doesConformToSchema('callData', callData, json_schemas_1.schemas.callDataSchema, [
                                    json_schemas_1.schemas.addressSchema,
                                    json_schemas_1.schemas.numberSchema,
                                    json_schemas_1.schemas.jsNumber,
                                ]);
                                if (defaultBlock !== undefined) {
                                    assert_1.assert.isBlockParam('defaultBlock', defaultBlock);
                                }
                                self = this;
                                encodedData = self._strictEncodeArguments('ERC721Token(address,uint256)', [tokenAddress,
                                    tokenId
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                abiEncoder = self._lookupAbiEncoder('ERC721Token(address,uint256)');
                                result = abiEncoder.strictDecodeReturnValue(rawCallResult);
                                // tslint:enable boolean-naming
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (tokenAddress, tokenId) {
                assert_1.assert.isString('tokenAddress', tokenAddress);
                assert_1.assert.isBigNumber('tokenId', tokenId);
                var self = this;
                var abiEncodedTransactionData = self._strictEncodeArguments('ERC721Token(address,uint256)', [tokenAddress,
                    tokenId
                ]);
                return abiEncodedTransactionData;
            },
        };
        _this.MultiAsset = {
            sendTransactionAsync: function (amounts, nestedAssetData, txData) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isArray('amounts', amounts);
                                assert_1.assert.isArray('nestedAssetData', nestedAssetData);
                                self = this;
                                encodedData = self._strictEncodeArguments('MultiAsset(uint256[],bytes[])', [amounts,
                                    nestedAssetData
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.MultiAsset.estimateGasAsync.bind(self, amounts, nestedAssetData))];
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
            awaitTransactionSuccessAsync: function (amounts, nestedAssetData, txData, pollingIntervalMs, timeoutMs) {
                var _this = this;
                assert_1.assert.isArray('amounts', amounts);
                assert_1.assert.isArray('nestedAssetData', nestedAssetData);
                var self = this;
                var txHashPromise = self.MultiAsset.sendTransactionAsync(amounts, nestedAssetData, txData);
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
            estimateGasAsync: function (amounts, nestedAssetData, txData) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isArray('amounts', amounts);
                                assert_1.assert.isArray('nestedAssetData', nestedAssetData);
                                self = this;
                                encodedData = self._strictEncodeArguments('MultiAsset(uint256[],bytes[])', [amounts,
                                    nestedAssetData
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
            callAsync: function (amounts, nestedAssetData, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, callDataWithDefaults, rawCallResult, abiEncoder, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isArray('amounts', amounts);
                                assert_1.assert.isArray('nestedAssetData', nestedAssetData);
                                assert_1.assert.doesConformToSchema('callData', callData, json_schemas_1.schemas.callDataSchema, [
                                    json_schemas_1.schemas.addressSchema,
                                    json_schemas_1.schemas.numberSchema,
                                    json_schemas_1.schemas.jsNumber,
                                ]);
                                if (defaultBlock !== undefined) {
                                    assert_1.assert.isBlockParam('defaultBlock', defaultBlock);
                                }
                                self = this;
                                encodedData = self._strictEncodeArguments('MultiAsset(uint256[],bytes[])', [amounts,
                                    nestedAssetData
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                abiEncoder = self._lookupAbiEncoder('MultiAsset(uint256[],bytes[])');
                                result = abiEncoder.strictDecodeReturnValue(rawCallResult);
                                // tslint:enable boolean-naming
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (amounts, nestedAssetData) {
                assert_1.assert.isArray('amounts', amounts);
                assert_1.assert.isArray('nestedAssetData', nestedAssetData);
                var self = this;
                var abiEncodedTransactionData = self._strictEncodeArguments('MultiAsset(uint256[],bytes[])', [amounts,
                    nestedAssetData
                ]);
                return abiEncodedTransactionData;
            },
        };
        _this.ERC1155Assets = {
            sendTransactionAsync: function (tokenAddress, tokenIds, tokenValues, callbackData, txData) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isString('tokenAddress', tokenAddress);
                                assert_1.assert.isArray('tokenIds', tokenIds);
                                assert_1.assert.isArray('tokenValues', tokenValues);
                                assert_1.assert.isString('callbackData', callbackData);
                                self = this;
                                encodedData = self._strictEncodeArguments('ERC1155Assets(address,uint256[],uint256[],bytes)', [tokenAddress,
                                    tokenIds,
                                    tokenValues,
                                    callbackData
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.ERC1155Assets.estimateGasAsync.bind(self, tokenAddress, tokenIds, tokenValues, callbackData))];
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
            awaitTransactionSuccessAsync: function (tokenAddress, tokenIds, tokenValues, callbackData, txData, pollingIntervalMs, timeoutMs) {
                var _this = this;
                assert_1.assert.isString('tokenAddress', tokenAddress);
                assert_1.assert.isArray('tokenIds', tokenIds);
                assert_1.assert.isArray('tokenValues', tokenValues);
                assert_1.assert.isString('callbackData', callbackData);
                var self = this;
                var txHashPromise = self.ERC1155Assets.sendTransactionAsync(tokenAddress, tokenIds, tokenValues, callbackData, txData);
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
            estimateGasAsync: function (tokenAddress, tokenIds, tokenValues, callbackData, txData) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isString('tokenAddress', tokenAddress);
                                assert_1.assert.isArray('tokenIds', tokenIds);
                                assert_1.assert.isArray('tokenValues', tokenValues);
                                assert_1.assert.isString('callbackData', callbackData);
                                self = this;
                                encodedData = self._strictEncodeArguments('ERC1155Assets(address,uint256[],uint256[],bytes)', [tokenAddress,
                                    tokenIds,
                                    tokenValues,
                                    callbackData
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
            callAsync: function (tokenAddress, tokenIds, tokenValues, callbackData, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, callDataWithDefaults, rawCallResult, abiEncoder, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isString('tokenAddress', tokenAddress);
                                assert_1.assert.isArray('tokenIds', tokenIds);
                                assert_1.assert.isArray('tokenValues', tokenValues);
                                assert_1.assert.isString('callbackData', callbackData);
                                assert_1.assert.doesConformToSchema('callData', callData, json_schemas_1.schemas.callDataSchema, [
                                    json_schemas_1.schemas.addressSchema,
                                    json_schemas_1.schemas.numberSchema,
                                    json_schemas_1.schemas.jsNumber,
                                ]);
                                if (defaultBlock !== undefined) {
                                    assert_1.assert.isBlockParam('defaultBlock', defaultBlock);
                                }
                                self = this;
                                encodedData = self._strictEncodeArguments('ERC1155Assets(address,uint256[],uint256[],bytes)', [tokenAddress,
                                    tokenIds,
                                    tokenValues,
                                    callbackData
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                abiEncoder = self._lookupAbiEncoder('ERC1155Assets(address,uint256[],uint256[],bytes)');
                                result = abiEncoder.strictDecodeReturnValue(rawCallResult);
                                // tslint:enable boolean-naming
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (tokenAddress, tokenIds, tokenValues, callbackData) {
                assert_1.assert.isString('tokenAddress', tokenAddress);
                assert_1.assert.isArray('tokenIds', tokenIds);
                assert_1.assert.isArray('tokenValues', tokenValues);
                assert_1.assert.isString('callbackData', callbackData);
                var self = this;
                var abiEncodedTransactionData = self._strictEncodeArguments('ERC1155Assets(address,uint256[],uint256[],bytes)', [tokenAddress,
                    tokenIds,
                    tokenValues,
                    callbackData
                ]);
                return abiEncodedTransactionData;
            },
        };
        _this.StaticCall = {
            sendTransactionAsync: function (callTarget, staticCallData, callResultHash, txData) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isString('callTarget', callTarget);
                                assert_1.assert.isString('staticCallData', staticCallData);
                                assert_1.assert.isString('callResultHash', callResultHash);
                                self = this;
                                encodedData = self._strictEncodeArguments('StaticCall(address,bytes,bytes32)', [callTarget,
                                    staticCallData,
                                    callResultHash
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.StaticCall.estimateGasAsync.bind(self, callTarget, staticCallData, callResultHash))];
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
            awaitTransactionSuccessAsync: function (callTarget, staticCallData, callResultHash, txData, pollingIntervalMs, timeoutMs) {
                var _this = this;
                assert_1.assert.isString('callTarget', callTarget);
                assert_1.assert.isString('staticCallData', staticCallData);
                assert_1.assert.isString('callResultHash', callResultHash);
                var self = this;
                var txHashPromise = self.StaticCall.sendTransactionAsync(callTarget, staticCallData, callResultHash, txData);
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
            estimateGasAsync: function (callTarget, staticCallData, callResultHash, txData) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isString('callTarget', callTarget);
                                assert_1.assert.isString('staticCallData', staticCallData);
                                assert_1.assert.isString('callResultHash', callResultHash);
                                self = this;
                                encodedData = self._strictEncodeArguments('StaticCall(address,bytes,bytes32)', [callTarget,
                                    staticCallData,
                                    callResultHash
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
            callAsync: function (callTarget, staticCallData, callResultHash, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, callDataWithDefaults, rawCallResult, abiEncoder, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isString('callTarget', callTarget);
                                assert_1.assert.isString('staticCallData', staticCallData);
                                assert_1.assert.isString('callResultHash', callResultHash);
                                assert_1.assert.doesConformToSchema('callData', callData, json_schemas_1.schemas.callDataSchema, [
                                    json_schemas_1.schemas.addressSchema,
                                    json_schemas_1.schemas.numberSchema,
                                    json_schemas_1.schemas.jsNumber,
                                ]);
                                if (defaultBlock !== undefined) {
                                    assert_1.assert.isBlockParam('defaultBlock', defaultBlock);
                                }
                                self = this;
                                encodedData = self._strictEncodeArguments('StaticCall(address,bytes,bytes32)', [callTarget,
                                    staticCallData,
                                    callResultHash
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                abiEncoder = self._lookupAbiEncoder('StaticCall(address,bytes,bytes32)');
                                result = abiEncoder.strictDecodeReturnValue(rawCallResult);
                                // tslint:enable boolean-naming
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (callTarget, staticCallData, callResultHash) {
                assert_1.assert.isString('callTarget', callTarget);
                assert_1.assert.isString('staticCallData', staticCallData);
                assert_1.assert.isString('callResultHash', callResultHash);
                var self = this;
                var abiEncodedTransactionData = self._strictEncodeArguments('StaticCall(address,bytes,bytes32)', [callTarget,
                    staticCallData,
                    callResultHash
                ]);
                return abiEncodedTransactionData;
            },
        };
        _this.ERC20Token = {
            sendTransactionAsync: function (tokenAddress, txData) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isString('tokenAddress', tokenAddress);
                                self = this;
                                encodedData = self._strictEncodeArguments('ERC20Token(address)', [tokenAddress
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.ERC20Token.estimateGasAsync.bind(self, tokenAddress))];
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
            awaitTransactionSuccessAsync: function (tokenAddress, txData, pollingIntervalMs, timeoutMs) {
                var _this = this;
                assert_1.assert.isString('tokenAddress', tokenAddress);
                var self = this;
                var txHashPromise = self.ERC20Token.sendTransactionAsync(tokenAddress, txData);
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
            estimateGasAsync: function (tokenAddress, txData) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isString('tokenAddress', tokenAddress);
                                self = this;
                                encodedData = self._strictEncodeArguments('ERC20Token(address)', [tokenAddress
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
            callAsync: function (tokenAddress, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, encodedData, callDataWithDefaults, rawCallResult, abiEncoder, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                assert_1.assert.isString('tokenAddress', tokenAddress);
                                assert_1.assert.doesConformToSchema('callData', callData, json_schemas_1.schemas.callDataSchema, [
                                    json_schemas_1.schemas.addressSchema,
                                    json_schemas_1.schemas.numberSchema,
                                    json_schemas_1.schemas.jsNumber,
                                ]);
                                if (defaultBlock !== undefined) {
                                    assert_1.assert.isBlockParam('defaultBlock', defaultBlock);
                                }
                                self = this;
                                encodedData = self._strictEncodeArguments('ERC20Token(address)', [tokenAddress
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                abiEncoder = self._lookupAbiEncoder('ERC20Token(address)');
                                result = abiEncoder.strictDecodeReturnValue(rawCallResult);
                                // tslint:enable boolean-naming
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (tokenAddress) {
                assert_1.assert.isString('tokenAddress', tokenAddress);
                var self = this;
                var abiEncodedTransactionData = self._strictEncodeArguments('ERC20Token(address)', [tokenAddress
                ]);
                return abiEncodedTransactionData;
            },
        };
        utils_1.classUtils.bindAll(_this, ['_abiEncoderByFunctionSignature', 'address', '_web3Wrapper']);
        return _this;
    }
    IAssetDataContract.deployFrom0xArtifactAsync = function (artifact, supportedProvider, txDefaults) {
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
                return [2 /*return*/, IAssetDataContract.deployAsync(bytecode, abi, provider, txDefaults)];
            });
        });
    };
    IAssetDataContract.deployAsync = function (bytecode, abi, supportedProvider, txDefaults) {
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
                        utils_1.logUtils.log("IAssetData successfully deployed at " + txReceipt.contractAddress);
                        contractInstance = new IAssetDataContract(txReceipt.contractAddress, provider, txDefaults);
                        contractInstance.constructorArgs = [];
                        return [2 /*return*/, contractInstance];
                }
            });
        });
    };
    /**
     * @returns      The contract ABI
     */
    IAssetDataContract.ABI = function () {
        var abi = [
            {
                constant: false,
                inputs: [
                    {
                        name: 'tokenAddress',
                        type: 'address',
                    },
                    {
                        name: 'tokenId',
                        type: 'uint256',
                    },
                ],
                name: 'ERC721Token',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    {
                        name: 'amounts',
                        type: 'uint256[]',
                    },
                    {
                        name: 'nestedAssetData',
                        type: 'bytes[]',
                    },
                ],
                name: 'MultiAsset',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    {
                        name: 'tokenAddress',
                        type: 'address',
                    },
                    {
                        name: 'tokenIds',
                        type: 'uint256[]',
                    },
                    {
                        name: 'tokenValues',
                        type: 'uint256[]',
                    },
                    {
                        name: 'callbackData',
                        type: 'bytes',
                    },
                ],
                name: 'ERC1155Assets',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    {
                        name: 'callTarget',
                        type: 'address',
                    },
                    {
                        name: 'staticCallData',
                        type: 'bytes',
                    },
                    {
                        name: 'callResultHash',
                        type: 'bytes32',
                    },
                ],
                name: 'StaticCall',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    {
                        name: 'tokenAddress',
                        type: 'address',
                    },
                ],
                name: 'ERC20Token',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
        ];
        return abi;
    };
    return IAssetDataContract;
}(base_contract_1.BaseContract));
exports.IAssetDataContract = IAssetDataContract;
// tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method no-parameter-reassignment no-consecutive-blank-lines ordered-imports align
// tslint:enable:trailing-comma whitespace no-trailing-whitespace
//# sourceMappingURL=i_asset_data.js.map