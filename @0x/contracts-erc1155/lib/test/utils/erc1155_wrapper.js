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
var contracts_test_utils_1 = require("@0x/contracts-test-utils");
var web3_wrapper_1 = require("@0x/web3-wrapper");
var chai = require("chai");
var _ = require("lodash");
var src_1 = require("../../src");
var expect = chai.expect;
var Erc1155Wrapper = /** @class */ (function () {
    function Erc1155Wrapper(contractInstance, provider, contractOwner) {
        this._erc1155Contract = contractInstance;
        this._web3Wrapper = new web3_wrapper_1.Web3Wrapper(provider);
        this._contractOwner = contractOwner;
        this._logDecoder = new contracts_test_utils_1.LogDecoder(this._web3Wrapper, src_1.artifacts);
    }
    Erc1155Wrapper.prototype.getContract = function () {
        return this._erc1155Contract;
    };
    Erc1155Wrapper.prototype.getBalancesAsync = function (owners, tokens) {
        return __awaiter(this, void 0, void 0, function () {
            var balances;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._erc1155Contract.balanceOfBatch.callAsync(owners, tokens)];
                    case 1:
                        balances = _a.sent();
                        return [2 /*return*/, balances];
                }
            });
        });
    };
    Erc1155Wrapper.prototype.safeTransferFromAsync = function (from, to, token, value, callbackData, delegatedSpender) {
        return __awaiter(this, void 0, void 0, function () {
            var spender, callbackDataHex, tx, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        spender = delegatedSpender === undefined ? from : delegatedSpender;
                        callbackDataHex = callbackData === undefined ? '0x' : callbackData;
                        _b = (_a = this._logDecoder).getTxWithDecodedLogsAsync;
                        return [4 /*yield*/, this._erc1155Contract.safeTransferFrom.sendTransactionAsync(from, to, token, value, callbackDataHex, {
                                from: spender,
                            })];
                    case 1: return [4 /*yield*/, _b.apply(_a, [_c.sent()])];
                    case 2:
                        tx = _c.sent();
                        return [2 /*return*/, tx];
                }
            });
        });
    };
    Erc1155Wrapper.prototype.safeBatchTransferFromAsync = function (from, to, tokens, values, callbackData, delegatedSpender) {
        return __awaiter(this, void 0, void 0, function () {
            var spender, callbackDataHex, tx, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        spender = delegatedSpender === undefined ? from : delegatedSpender;
                        callbackDataHex = callbackData === undefined ? '0x' : callbackData;
                        _b = (_a = this._logDecoder).getTxWithDecodedLogsAsync;
                        return [4 /*yield*/, this._erc1155Contract.safeBatchTransferFrom.sendTransactionAsync(from, to, tokens, values, callbackDataHex, { from: spender })];
                    case 1: return [4 /*yield*/, _b.apply(_a, [_c.sent()])];
                    case 2:
                        tx = _c.sent();
                        return [2 /*return*/, tx];
                }
            });
        });
    };
    Erc1155Wrapper.prototype.mintFungibleTokensAsync = function (beneficiaries, tokenAmounts) {
        return __awaiter(this, void 0, void 0, function () {
            var tokenUri, tokenIsNonFungible, tx, _a, _b, createFungibleTokenLog, token, tokenAmountsAsArray, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        tokenUri = 'dummyFungibleToken';
                        tokenIsNonFungible = false;
                        _b = (_a = this._logDecoder).getTxWithDecodedLogsAsync;
                        return [4 /*yield*/, this._erc1155Contract.create.sendTransactionAsync(tokenUri, tokenIsNonFungible, {
                                from: this._contractOwner,
                            })];
                    case 1: return [4 /*yield*/, _b.apply(_a, [_e.sent()])];
                    case 2:
                        tx = _e.sent();
                        createFungibleTokenLog = tx.logs[0];
                        token = createFungibleTokenLog.args.id;
                        tokenAmountsAsArray = _.isArray(tokenAmounts) ? tokenAmounts : [];
                        if (!_.isArray(tokenAmounts)) {
                            _.each(_.range(0, beneficiaries.length), function () {
                                tokenAmountsAsArray.push(tokenAmounts);
                            });
                        }
                        _d = (_c = this._web3Wrapper).awaitTransactionSuccessAsync;
                        return [4 /*yield*/, this._erc1155Contract.mintFungible.sendTransactionAsync(token, beneficiaries, tokenAmountsAsArray, {
                                from: this._contractOwner,
                            })];
                    case 3: return [4 /*yield*/, _d.apply(_c, [_e.sent(),
                            contracts_test_utils_1.constants.AWAIT_TRANSACTION_MINED_MS])];
                    case 4:
                        _e.sent();
                        return [2 /*return*/, token];
                }
            });
        });
    };
    Erc1155Wrapper.prototype.mintNonFungibleTokensAsync = function (beneficiaries) {
        return __awaiter(this, void 0, void 0, function () {
            var tokenUri, tokenIsNonFungible, tx, _a, _b, createFungibleTokenLog, token, _c, _d, encodedNftIds, nftIdBegin, nftIdEnd, nftIdRange;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        tokenUri = 'dummyNonFungibleToken';
                        tokenIsNonFungible = true;
                        _b = (_a = this._logDecoder).getTxWithDecodedLogsAsync;
                        return [4 /*yield*/, this._erc1155Contract.create.sendTransactionAsync(tokenUri, tokenIsNonFungible, {
                                from: this._contractOwner,
                            })];
                    case 1: return [4 /*yield*/, _b.apply(_a, [_e.sent()])];
                    case 2:
                        tx = _e.sent();
                        createFungibleTokenLog = tx.logs[0];
                        token = createFungibleTokenLog.args.id;
                        _d = (_c = this._web3Wrapper).awaitTransactionSuccessAsync;
                        return [4 /*yield*/, this._erc1155Contract.mintNonFungible.sendTransactionAsync(token, beneficiaries, {
                                from: this._contractOwner,
                            })];
                    case 3: return [4 /*yield*/, _d.apply(_c, [_e.sent(),
                            contracts_test_utils_1.constants.AWAIT_TRANSACTION_MINED_MS])];
                    case 4:
                        _e.sent();
                        encodedNftIds = [];
                        nftIdBegin = 1;
                        nftIdEnd = beneficiaries.length + 1;
                        nftIdRange = _.range(nftIdBegin, nftIdEnd);
                        _.each(nftIdRange, function (nftId) {
                            var encodedNftId = token.plus(nftId);
                            encodedNftIds.push(encodedNftId);
                        });
                        return [2 /*return*/, [token, encodedNftIds]];
                }
            });
        });
    };
    Erc1155Wrapper.prototype.setApprovalForAllAsync = function (owner, beneficiary, isApproved) {
        return __awaiter(this, void 0, void 0, function () {
            var tx, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = this._logDecoder).getTxWithDecodedLogsAsync;
                        return [4 /*yield*/, this._erc1155Contract.setApprovalForAll.sendTransactionAsync(beneficiary, isApproved, {
                                from: owner,
                            })];
                    case 1: return [4 /*yield*/, _b.apply(_a, [_c.sent()])];
                    case 2:
                        tx = _c.sent();
                        return [2 /*return*/, tx];
                }
            });
        });
    };
    Erc1155Wrapper.prototype.isApprovedForAllAsync = function (owner, beneficiary) {
        return __awaiter(this, void 0, void 0, function () {
            var isApprovedForAll;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._erc1155Contract.isApprovedForAll.callAsync(owner, beneficiary)];
                    case 1:
                        isApprovedForAll = _a.sent();
                        return [2 /*return*/, isApprovedForAll];
                }
            });
        });
    };
    Erc1155Wrapper.prototype.assertBalancesAsync = function (owners, tokens, expectedBalances) {
        return __awaiter(this, void 0, void 0, function () {
            var ownersExtended, tokensExtended, balances;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ownersExtended = [];
                        tokensExtended = [];
                        _.each(owners, function (owner) {
                            tokensExtended = tokensExtended.concat(tokens);
                            _.each(_.range(0, tokens.length), function () {
                                ownersExtended.push(owner);
                            });
                        });
                        return [4 /*yield*/, this.getBalancesAsync(ownersExtended, tokensExtended)];
                    case 1:
                        balances = _a.sent();
                        _.each(balances, function (balance, i) {
                            expect(balance, "" + ownersExtended[i] + tokensExtended[i]).to.be.bignumber.equal(expectedBalances[i]);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    return Erc1155Wrapper;
}());
exports.Erc1155Wrapper = Erc1155Wrapper;
//# sourceMappingURL=erc1155_wrapper.js.map