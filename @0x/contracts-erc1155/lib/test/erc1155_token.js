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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var contracts_test_utils_1 = require("@0x/contracts-test-utils");
var dev_utils_1 = require("@0x/dev-utils");
var types_1 = require("@0x/types");
var utils_1 = require("@0x/utils");
var chai = require("chai");
var src_1 = require("../src");
var erc1155_wrapper_1 = require("./utils/erc1155_wrapper");
contracts_test_utils_1.chaiSetup.configure();
var expect = chai.expect;
var blockchainLifecycle = new dev_utils_1.BlockchainLifecycle(contracts_test_utils_1.web3Wrapper);
// tslint:disable:no-unnecessary-type-assertion
describe('ERC1155Token', function () {
    // constant values used in transfer tests
    var nftOwnerBalance = new utils_1.BigNumber(1);
    var nftNotOwnerBalance = new utils_1.BigNumber(0);
    var spenderInitialFungibleBalance = new utils_1.BigNumber(500);
    var receiverInitialFungibleBalance = new utils_1.BigNumber(0);
    var fungibleValueToTransfer = spenderInitialFungibleBalance.div(2);
    var nonFungibleValueToTransfer = nftOwnerBalance;
    var receiverCallbackData = '0x01020304';
    // tokens & addresses
    var owner;
    var spender;
    var delegatedSpender;
    var receiver;
    var erc1155Contract;
    var erc1155Receiver;
    var nonFungibleToken;
    var erc1155Wrapper;
    var fungibleToken;
    // tests
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
        var _a, _b, accounts, nonFungibleTokens;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, contracts_test_utils_1.web3Wrapper.getAvailableAddressesAsync()];
                case 1:
                    accounts = _c.sent();
                    _a = __read(accounts, 3), owner = _a[0], spender = _a[1], delegatedSpender = _a[2];
                    return [4 /*yield*/, src_1.ERC1155MintableContract.deployFrom0xArtifactAsync(src_1.artifacts.ERC1155Mintable, contracts_test_utils_1.provider, contracts_test_utils_1.txDefaults)];
                case 2:
                    erc1155Contract = _c.sent();
                    return [4 /*yield*/, src_1.DummyERC1155ReceiverContract.deployFrom0xArtifactAsync(src_1.artifacts.DummyERC1155Receiver, contracts_test_utils_1.provider, contracts_test_utils_1.txDefaults)];
                case 3:
                    erc1155Receiver = _c.sent();
                    receiver = erc1155Receiver.address;
                    // create wrapper & mint erc1155 tokens
                    erc1155Wrapper = new erc1155_wrapper_1.Erc1155Wrapper(erc1155Contract, contracts_test_utils_1.provider, owner);
                    return [4 /*yield*/, erc1155Wrapper.mintFungibleTokensAsync([spender], spenderInitialFungibleBalance)];
                case 4:
                    fungibleToken = _c.sent();
                    return [4 /*yield*/, erc1155Wrapper.mintNonFungibleTokensAsync([spender])];
                case 5:
                    _b = __read.apply(void 0, [_c.sent(), 2]), nonFungibleTokens = _b[1];
                    nonFungibleToken = nonFungibleTokens[0];
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
    describe('safeTransferFrom', function () {
        it('should transfer fungible token if called by token owner', function () { return __awaiter(_this, void 0, void 0, function () {
            var tokenHolders, tokenToTransfer, valueToTransfer, expectedInitialBalances, expectedFinalBalances;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tokenHolders = [spender, receiver];
                        tokenToTransfer = fungibleToken;
                        valueToTransfer = fungibleValueToTransfer;
                        expectedInitialBalances = [spenderInitialFungibleBalance, receiverInitialFungibleBalance];
                        return [4 /*yield*/, erc1155Wrapper.assertBalancesAsync(tokenHolders, [tokenToTransfer], expectedInitialBalances)];
                    case 1:
                        _a.sent();
                        // execute transfer
                        return [4 /*yield*/, erc1155Wrapper.safeTransferFromAsync(spender, receiver, fungibleToken, valueToTransfer, receiverCallbackData)];
                    case 2:
                        // execute transfer
                        _a.sent();
                        expectedFinalBalances = [
                            spenderInitialFungibleBalance.minus(valueToTransfer),
                            receiverInitialFungibleBalance.plus(valueToTransfer),
                        ];
                        return [4 /*yield*/, erc1155Wrapper.assertBalancesAsync(tokenHolders, [tokenToTransfer], expectedFinalBalances)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should transfer non-fungible token if called by token owner', function () { return __awaiter(_this, void 0, void 0, function () {
            var tokenHolders, tokenToTransfer, valueToTransfer, expectedInitialBalances, expectedFinalBalances;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tokenHolders = [spender, receiver];
                        tokenToTransfer = nonFungibleToken;
                        valueToTransfer = nonFungibleValueToTransfer;
                        expectedInitialBalances = [nftOwnerBalance, nftNotOwnerBalance];
                        return [4 /*yield*/, erc1155Wrapper.assertBalancesAsync(tokenHolders, [tokenToTransfer], expectedInitialBalances)];
                    case 1:
                        _a.sent();
                        // execute transfer
                        return [4 /*yield*/, erc1155Wrapper.safeTransferFromAsync(spender, receiver, tokenToTransfer, valueToTransfer, receiverCallbackData)];
                    case 2:
                        // execute transfer
                        _a.sent();
                        expectedFinalBalances = [nftNotOwnerBalance, nftOwnerBalance];
                        return [4 /*yield*/, erc1155Wrapper.assertBalancesAsync(tokenHolders, [tokenToTransfer], expectedFinalBalances)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should trigger callback if transferring to a contract', function () { return __awaiter(_this, void 0, void 0, function () {
            var tokenHolders, tokenToTransfer, valueToTransfer, expectedInitialBalances, tx, receiverLog, expectedCallbackLog, expectedFinalBalances;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tokenHolders = [spender, receiver];
                        tokenToTransfer = fungibleToken;
                        valueToTransfer = fungibleValueToTransfer;
                        expectedInitialBalances = [
                            spenderInitialFungibleBalance,
                            receiverInitialFungibleBalance,
                            nftOwnerBalance,
                            nftNotOwnerBalance,
                        ];
                        return [4 /*yield*/, erc1155Wrapper.assertBalancesAsync(tokenHolders, [tokenToTransfer], expectedInitialBalances)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, erc1155Wrapper.safeTransferFromAsync(spender, receiver, tokenToTransfer, valueToTransfer, receiverCallbackData)];
                    case 2:
                        tx = _a.sent();
                        expect(tx.logs.length).to.be.equal(2);
                        receiverLog = tx.logs[1];
                        expectedCallbackLog = {
                            operator: spender,
                            from: spender,
                            tokenId: tokenToTransfer,
                            tokenValue: valueToTransfer,
                            data: receiverCallbackData,
                        };
                        expect(receiverLog.args.operator).to.be.equal(expectedCallbackLog.operator);
                        expect(receiverLog.args.from).to.be.equal(expectedCallbackLog.from);
                        expect(receiverLog.args.tokenId).to.be.bignumber.equal(expectedCallbackLog.tokenId);
                        expect(receiverLog.args.tokenValue).to.be.bignumber.equal(expectedCallbackLog.tokenValue);
                        expect(receiverLog.args.data).to.be.deep.equal(expectedCallbackLog.data);
                        expectedFinalBalances = [
                            spenderInitialFungibleBalance.minus(valueToTransfer),
                            receiverInitialFungibleBalance.plus(valueToTransfer),
                        ];
                        return [4 /*yield*/, erc1155Wrapper.assertBalancesAsync(tokenHolders, [tokenToTransfer], expectedFinalBalances)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should throw if transfer reverts', function () { return __awaiter(_this, void 0, void 0, function () {
            var tokenToTransfer, valueToTransfer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tokenToTransfer = fungibleToken;
                        valueToTransfer = spenderInitialFungibleBalance.plus(1);
                        // execute transfer
                        return [4 /*yield*/, contracts_test_utils_1.expectTransactionFailedAsync(erc1155Contract.safeTransferFrom.sendTransactionAsync(spender, receiver, tokenToTransfer, valueToTransfer, receiverCallbackData, { from: spender }), types_1.RevertReason.Uint256Underflow)];
                    case 1:
                        // execute transfer
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should throw if callback reverts', function () { return __awaiter(_this, void 0, void 0, function () {
            var tokenToTransfer, valueToTransfer, shouldRejectTransfer, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        tokenToTransfer = fungibleToken;
                        valueToTransfer = fungibleValueToTransfer;
                        shouldRejectTransfer = true;
                        _b = (_a = contracts_test_utils_1.web3Wrapper).awaitTransactionSuccessAsync;
                        return [4 /*yield*/, erc1155Receiver.setRejectTransferFlag.sendTransactionAsync(shouldRejectTransfer)];
                    case 1: return [4 /*yield*/, _b.apply(_a, [_c.sent(),
                            contracts_test_utils_1.constants.AWAIT_TRANSACTION_MINED_MS])];
                    case 2:
                        _c.sent();
                        // execute transfer
                        return [4 /*yield*/, contracts_test_utils_1.expectTransactionFailedAsync(erc1155Contract.safeTransferFrom.sendTransactionAsync(spender, receiver, tokenToTransfer, valueToTransfer, receiverCallbackData, { from: spender }), types_1.RevertReason.TransferRejected)];
                    case 3:
                        // execute transfer
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('batchSafeTransferFrom', function () {
        it('should transfer fungible tokens if called by token owner', function () { return __awaiter(_this, void 0, void 0, function () {
            var tokenHolders, tokensToTransfer, valuesToTransfer, expectedInitialBalances, expectedFinalBalances;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tokenHolders = [spender, receiver];
                        tokensToTransfer = [fungibleToken];
                        valuesToTransfer = [fungibleValueToTransfer];
                        expectedInitialBalances = [spenderInitialFungibleBalance, receiverInitialFungibleBalance];
                        return [4 /*yield*/, erc1155Wrapper.assertBalancesAsync(tokenHolders, tokensToTransfer, expectedInitialBalances)];
                    case 1:
                        _a.sent();
                        // execute transfer
                        return [4 /*yield*/, erc1155Wrapper.safeBatchTransferFromAsync(spender, receiver, tokensToTransfer, valuesToTransfer, receiverCallbackData)];
                    case 2:
                        // execute transfer
                        _a.sent();
                        expectedFinalBalances = [
                            spenderInitialFungibleBalance.minus(valuesToTransfer[0]),
                            receiverInitialFungibleBalance.plus(valuesToTransfer[0]),
                        ];
                        return [4 /*yield*/, erc1155Wrapper.assertBalancesAsync(tokenHolders, tokensToTransfer, expectedFinalBalances)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should transfer non-fungible token if called by token owner', function () { return __awaiter(_this, void 0, void 0, function () {
            var tokenHolders, tokensToTransfer, valuesToTransfer, expectedInitialBalances, expectedFinalBalances;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tokenHolders = [spender, receiver];
                        tokensToTransfer = [nonFungibleToken];
                        valuesToTransfer = [nonFungibleValueToTransfer];
                        expectedInitialBalances = [nftOwnerBalance, nftNotOwnerBalance];
                        return [4 /*yield*/, erc1155Wrapper.assertBalancesAsync(tokenHolders, tokensToTransfer, expectedInitialBalances)];
                    case 1:
                        _a.sent();
                        // execute transfer
                        return [4 /*yield*/, erc1155Wrapper.safeBatchTransferFromAsync(spender, receiver, tokensToTransfer, valuesToTransfer, receiverCallbackData)];
                    case 2:
                        // execute transfer
                        _a.sent();
                        expectedFinalBalances = [nftNotOwnerBalance, nftOwnerBalance];
                        return [4 /*yield*/, erc1155Wrapper.assertBalancesAsync(tokenHolders, tokensToTransfer, expectedFinalBalances)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should transfer mix of fungible / non-fungible tokens if called by token owner', function () { return __awaiter(_this, void 0, void 0, function () {
            var tokenHolders, tokensToTransfer, valuesToTransfer, expectedInitialBalances, expectedFinalBalances;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tokenHolders = [spender, receiver];
                        tokensToTransfer = [fungibleToken, nonFungibleToken];
                        valuesToTransfer = [fungibleValueToTransfer, nonFungibleValueToTransfer];
                        expectedInitialBalances = [
                            // spender
                            spenderInitialFungibleBalance,
                            nftOwnerBalance,
                            // receiver
                            receiverInitialFungibleBalance,
                            nftNotOwnerBalance,
                        ];
                        return [4 /*yield*/, erc1155Wrapper.assertBalancesAsync(tokenHolders, tokensToTransfer, expectedInitialBalances)];
                    case 1:
                        _a.sent();
                        // execute transfer
                        return [4 /*yield*/, erc1155Wrapper.safeBatchTransferFromAsync(spender, receiver, tokensToTransfer, valuesToTransfer, receiverCallbackData)];
                    case 2:
                        // execute transfer
                        _a.sent();
                        expectedFinalBalances = [
                            // spender
                            spenderInitialFungibleBalance.minus(valuesToTransfer[0]),
                            nftNotOwnerBalance,
                            // receiver
                            receiverInitialFungibleBalance.plus(valuesToTransfer[0]),
                            nftOwnerBalance,
                        ];
                        return [4 /*yield*/, erc1155Wrapper.assertBalancesAsync(tokenHolders, tokensToTransfer, expectedFinalBalances)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should trigger callback if transferring to a contract', function () { return __awaiter(_this, void 0, void 0, function () {
            var tokenHolders, tokensToTransfer, valuesToTransfer, expectedInitialBalances, tx, receiverLog, expectedCallbackLog, expectedFinalBalances;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tokenHolders = [spender, receiver];
                        tokensToTransfer = [fungibleToken, nonFungibleToken];
                        valuesToTransfer = [fungibleValueToTransfer, nonFungibleValueToTransfer];
                        expectedInitialBalances = [
                            // spender
                            spenderInitialFungibleBalance,
                            nftOwnerBalance,
                            // receiver
                            receiverInitialFungibleBalance,
                            nftNotOwnerBalance,
                        ];
                        return [4 /*yield*/, erc1155Wrapper.assertBalancesAsync(tokenHolders, tokensToTransfer, expectedInitialBalances)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, erc1155Wrapper.safeBatchTransferFromAsync(spender, receiver, tokensToTransfer, valuesToTransfer, receiverCallbackData)];
                    case 2:
                        tx = _a.sent();
                        expect(tx.logs.length).to.be.equal(2);
                        receiverLog = tx.logs[1];
                        expectedCallbackLog = {
                            operator: spender,
                            from: spender,
                            tokenIds: tokensToTransfer,
                            tokenValues: valuesToTransfer,
                            data: receiverCallbackData,
                        };
                        expect(receiverLog.args.operator).to.be.equal(expectedCallbackLog.operator);
                        expect(receiverLog.args.from).to.be.equal(expectedCallbackLog.from);
                        expect(receiverLog.args.tokenIds.length).to.be.equal(2);
                        expect(receiverLog.args.tokenIds[0]).to.be.bignumber.equal(expectedCallbackLog.tokenIds[0]);
                        expect(receiverLog.args.tokenIds[1]).to.be.bignumber.equal(expectedCallbackLog.tokenIds[1]);
                        expect(receiverLog.args.tokenValues.length).to.be.equal(2);
                        expect(receiverLog.args.tokenValues[0]).to.be.bignumber.equal(expectedCallbackLog.tokenValues[0]);
                        expect(receiverLog.args.tokenValues[1]).to.be.bignumber.equal(expectedCallbackLog.tokenValues[1]);
                        expect(receiverLog.args.data).to.be.deep.equal(expectedCallbackLog.data);
                        expectedFinalBalances = [
                            // spender
                            spenderInitialFungibleBalance.minus(valuesToTransfer[0]),
                            nftNotOwnerBalance,
                            // receiver
                            receiverInitialFungibleBalance.plus(valuesToTransfer[0]),
                            nftOwnerBalance,
                        ];
                        return [4 /*yield*/, erc1155Wrapper.assertBalancesAsync(tokenHolders, tokensToTransfer, expectedFinalBalances)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should throw if transfer reverts', function () { return __awaiter(_this, void 0, void 0, function () {
            var tokensToTransfer, valuesToTransfer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tokensToTransfer = [fungibleToken];
                        valuesToTransfer = [spenderInitialFungibleBalance.plus(1)];
                        // execute transfer
                        return [4 /*yield*/, contracts_test_utils_1.expectTransactionFailedAsync(erc1155Contract.safeBatchTransferFrom.sendTransactionAsync(spender, receiver, tokensToTransfer, valuesToTransfer, receiverCallbackData, { from: spender }), types_1.RevertReason.Uint256Underflow)];
                    case 1:
                        // execute transfer
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should throw if callback reverts', function () { return __awaiter(_this, void 0, void 0, function () {
            var tokensToTransfer, valuesToTransfer, shouldRejectTransfer, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        tokensToTransfer = [fungibleToken];
                        valuesToTransfer = [fungibleValueToTransfer];
                        shouldRejectTransfer = true;
                        _b = (_a = contracts_test_utils_1.web3Wrapper).awaitTransactionSuccessAsync;
                        return [4 /*yield*/, erc1155Receiver.setRejectTransferFlag.sendTransactionAsync(shouldRejectTransfer)];
                    case 1: return [4 /*yield*/, _b.apply(_a, [_c.sent(),
                            contracts_test_utils_1.constants.AWAIT_TRANSACTION_MINED_MS])];
                    case 2:
                        _c.sent();
                        // execute transfer
                        return [4 /*yield*/, contracts_test_utils_1.expectTransactionFailedAsync(erc1155Contract.safeBatchTransferFrom.sendTransactionAsync(spender, receiver, tokensToTransfer, valuesToTransfer, receiverCallbackData, { from: spender }), types_1.RevertReason.TransferRejected)];
                    case 3:
                        // execute transfer
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('setApprovalForAll', function () {
        it('should transfer token via safeTransferFrom if called by approved account', function () { return __awaiter(_this, void 0, void 0, function () {
            var isApprovedForAll, isApprovedForAllCheck, tokenHolders, tokenToTransfer, valueToTransfer, expectedInitialBalances, expectedFinalBalances;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        isApprovedForAll = true;
                        return [4 /*yield*/, erc1155Wrapper.setApprovalForAllAsync(spender, delegatedSpender, isApprovedForAll)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, erc1155Wrapper.isApprovedForAllAsync(spender, delegatedSpender)];
                    case 2:
                        isApprovedForAllCheck = _a.sent();
                        expect(isApprovedForAllCheck).to.be.true();
                        tokenHolders = [spender, receiver];
                        tokenToTransfer = fungibleToken;
                        valueToTransfer = fungibleValueToTransfer;
                        expectedInitialBalances = [spenderInitialFungibleBalance, receiverInitialFungibleBalance];
                        return [4 /*yield*/, erc1155Wrapper.assertBalancesAsync(tokenHolders, [tokenToTransfer], expectedInitialBalances)];
                    case 3:
                        _a.sent();
                        // execute transfer
                        return [4 /*yield*/, erc1155Wrapper.safeTransferFromAsync(spender, receiver, tokenToTransfer, valueToTransfer, receiverCallbackData, delegatedSpender)];
                    case 4:
                        // execute transfer
                        _a.sent();
                        expectedFinalBalances = [
                            spenderInitialFungibleBalance.minus(valueToTransfer),
                            receiverInitialFungibleBalance.plus(valueToTransfer),
                        ];
                        return [4 /*yield*/, erc1155Wrapper.assertBalancesAsync(tokenHolders, [tokenToTransfer], expectedFinalBalances)];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should throw if trying to transfer tokens via safeTransferFrom by an unapproved account', function () { return __awaiter(_this, void 0, void 0, function () {
            var isApprovedForAllCheck, tokenHolders, tokenToTransfer, valueToTransfer, expectedInitialBalances;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, erc1155Wrapper.isApprovedForAllAsync(spender, delegatedSpender)];
                    case 1:
                        isApprovedForAllCheck = _a.sent();
                        expect(isApprovedForAllCheck).to.be.false();
                        tokenHolders = [spender, receiver];
                        tokenToTransfer = fungibleToken;
                        valueToTransfer = fungibleValueToTransfer;
                        expectedInitialBalances = [spenderInitialFungibleBalance, receiverInitialFungibleBalance];
                        return [4 /*yield*/, erc1155Wrapper.assertBalancesAsync(tokenHolders, [tokenToTransfer], expectedInitialBalances)];
                    case 2:
                        _a.sent();
                        // execute transfer
                        return [4 /*yield*/, contracts_test_utils_1.expectTransactionFailedAsync(erc1155Contract.safeTransferFrom.sendTransactionAsync(spender, receiver, tokenToTransfer, valueToTransfer, receiverCallbackData, { from: delegatedSpender }), types_1.RevertReason.InsufficientAllowance)];
                    case 3:
                        // execute transfer
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should transfer token via safeBatchTransferFrom if called by approved account', function () { return __awaiter(_this, void 0, void 0, function () {
            var isApprovedForAll, isApprovedForAllCheck, tokenHolders, tokensToTransfer, valuesToTransfer, expectedInitialBalances, expectedFinalBalances;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        isApprovedForAll = true;
                        return [4 /*yield*/, erc1155Wrapper.setApprovalForAllAsync(spender, delegatedSpender, isApprovedForAll)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, erc1155Wrapper.isApprovedForAllAsync(spender, delegatedSpender)];
                    case 2:
                        isApprovedForAllCheck = _a.sent();
                        expect(isApprovedForAllCheck).to.be.true();
                        tokenHolders = [spender, receiver];
                        tokensToTransfer = [fungibleToken];
                        valuesToTransfer = [fungibleValueToTransfer];
                        expectedInitialBalances = [spenderInitialFungibleBalance, receiverInitialFungibleBalance];
                        return [4 /*yield*/, erc1155Wrapper.assertBalancesAsync(tokenHolders, tokensToTransfer, expectedInitialBalances)];
                    case 3:
                        _a.sent();
                        // execute transfer
                        return [4 /*yield*/, erc1155Wrapper.safeBatchTransferFromAsync(spender, receiver, tokensToTransfer, valuesToTransfer, receiverCallbackData, delegatedSpender)];
                    case 4:
                        // execute transfer
                        _a.sent();
                        expectedFinalBalances = [
                            spenderInitialFungibleBalance.minus(valuesToTransfer[0]),
                            receiverInitialFungibleBalance.plus(valuesToTransfer[0]),
                        ];
                        return [4 /*yield*/, erc1155Wrapper.assertBalancesAsync(tokenHolders, tokensToTransfer, expectedFinalBalances)];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should throw if trying to transfer tokens via safeBatchTransferFrom by an unapproved account', function () { return __awaiter(_this, void 0, void 0, function () {
            var isApprovedForAllCheck, tokenHolders, tokensToTransfer, valuesToTransfer, expectedInitialBalances;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, erc1155Wrapper.isApprovedForAllAsync(spender, delegatedSpender)];
                    case 1:
                        isApprovedForAllCheck = _a.sent();
                        expect(isApprovedForAllCheck).to.be.false();
                        tokenHolders = [spender, receiver];
                        tokensToTransfer = [fungibleToken];
                        valuesToTransfer = [fungibleValueToTransfer];
                        expectedInitialBalances = [spenderInitialFungibleBalance, receiverInitialFungibleBalance];
                        return [4 /*yield*/, erc1155Wrapper.assertBalancesAsync(tokenHolders, tokensToTransfer, expectedInitialBalances)];
                    case 2:
                        _a.sent();
                        // execute transfer
                        return [4 /*yield*/, contracts_test_utils_1.expectTransactionFailedAsync(erc1155Contract.safeBatchTransferFrom.sendTransactionAsync(spender, receiver, tokensToTransfer, valuesToTransfer, receiverCallbackData, { from: delegatedSpender }), types_1.RevertReason.InsufficientAllowance)];
                    case 3:
                        // execute transfer
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
// tslint:enable:no-unnecessary-type-assertion
//# sourceMappingURL=erc1155_token.js.map