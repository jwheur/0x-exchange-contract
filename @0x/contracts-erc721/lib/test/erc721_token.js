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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var contracts_test_utils_1 = require("@0x/contracts-test-utils");
var dev_utils_1 = require("@0x/dev-utils");
var types_1 = require("@0x/types");
var utils_1 = require("@0x/utils");
var chai = require("chai");
var src_1 = require("../src");
contracts_test_utils_1.chaiSetup.configure();
var expect = chai.expect;
var blockchainLifecycle = new dev_utils_1.BlockchainLifecycle(contracts_test_utils_1.web3Wrapper);
// tslint:disable:no-unnecessary-type-assertion
describe('ERC721Token', function () {
    var owner;
    var spender;
    var token;
    var erc721Receiver;
    var logDecoder;
    var tokenId = new utils_1.BigNumber(1);
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
        var accounts, _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, contracts_test_utils_1.web3Wrapper.getAvailableAddressesAsync()];
                case 1:
                    accounts = _c.sent();
                    owner = accounts[0];
                    spender = accounts[1];
                    return [4 /*yield*/, src_1.DummyERC721TokenContract.deployFrom0xArtifactAsync(src_1.artifacts.DummyERC721Token, contracts_test_utils_1.provider, contracts_test_utils_1.txDefaults, contracts_test_utils_1.constants.DUMMY_TOKEN_NAME, contracts_test_utils_1.constants.DUMMY_TOKEN_SYMBOL)];
                case 2:
                    token = _c.sent();
                    return [4 /*yield*/, src_1.DummyERC721ReceiverContract.deployFrom0xArtifactAsync(src_1.artifacts.DummyERC721Receiver, contracts_test_utils_1.provider, contracts_test_utils_1.txDefaults)];
                case 3:
                    erc721Receiver = _c.sent();
                    logDecoder = new contracts_test_utils_1.LogDecoder(contracts_test_utils_1.web3Wrapper, src_1.artifacts);
                    _b = (_a = contracts_test_utils_1.web3Wrapper).awaitTransactionSuccessAsync;
                    return [4 /*yield*/, token.mint.sendTransactionAsync(owner, tokenId, { from: owner })];
                case 4: return [4 /*yield*/, _b.apply(_a, [_c.sent(),
                        contracts_test_utils_1.constants.AWAIT_TRANSACTION_MINED_MS])];
                case 5:
                    _c.sent();
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
    describe('transferFrom', function () {
        it('should revert if the tokenId is not owner', function () { return __awaiter(_this, void 0, void 0, function () {
            var from, to, unownedTokenId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        from = owner;
                        to = erc721Receiver.address;
                        unownedTokenId = new utils_1.BigNumber(2);
                        return [4 /*yield*/, contracts_test_utils_1.expectTransactionFailedAsync(token.transferFrom.sendTransactionAsync(from, to, unownedTokenId), types_1.RevertReason.Erc721ZeroOwner)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should revert if transferring to a null address', function () { return __awaiter(_this, void 0, void 0, function () {
            var from, to;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        from = owner;
                        to = contracts_test_utils_1.constants.NULL_ADDRESS;
                        return [4 /*yield*/, contracts_test_utils_1.expectTransactionFailedAsync(token.transferFrom.sendTransactionAsync(from, to, tokenId), types_1.RevertReason.Erc721ZeroToAddress)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should revert if the from address does not own the token', function () { return __awaiter(_this, void 0, void 0, function () {
            var from, to;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        from = spender;
                        to = erc721Receiver.address;
                        return [4 /*yield*/, contracts_test_utils_1.expectTransactionFailedAsync(token.transferFrom.sendTransactionAsync(from, to, tokenId), types_1.RevertReason.Erc721OwnerMismatch)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should revert if spender does not own the token, is not approved, and is not approved for all', function () { return __awaiter(_this, void 0, void 0, function () {
            var from, to;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        from = owner;
                        to = erc721Receiver.address;
                        return [4 /*yield*/, contracts_test_utils_1.expectTransactionFailedAsync(token.transferFrom.sendTransactionAsync(from, to, tokenId, { from: spender }), types_1.RevertReason.Erc721InvalidSpender)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should transfer the token if called by owner', function () { return __awaiter(_this, void 0, void 0, function () {
            var from, to, txReceipt, _a, _b, newOwner, log;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        from = owner;
                        to = erc721Receiver.address;
                        _b = (_a = logDecoder).getTxWithDecodedLogsAsync;
                        return [4 /*yield*/, token.transferFrom.sendTransactionAsync(from, to, tokenId)];
                    case 1: return [4 /*yield*/, _b.apply(_a, [_c.sent()])];
                    case 2:
                        txReceipt = _c.sent();
                        return [4 /*yield*/, token.ownerOf.callAsync(tokenId)];
                    case 3:
                        newOwner = _c.sent();
                        expect(newOwner).to.be.equal(to);
                        log = txReceipt.logs[0];
                        expect(log.args._from).to.be.equal(from);
                        expect(log.args._to).to.be.equal(to);
                        expect(log.args._tokenId).to.be.bignumber.equal(tokenId);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should transfer the token if spender is approved for all', function () { return __awaiter(_this, void 0, void 0, function () {
            var isApproved, _a, _b, from, to, txReceipt, _c, _d, newOwner, log;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        isApproved = true;
                        _b = (_a = contracts_test_utils_1.web3Wrapper).awaitTransactionSuccessAsync;
                        return [4 /*yield*/, token.setApprovalForAll.sendTransactionAsync(spender, isApproved)];
                    case 1: return [4 /*yield*/, _b.apply(_a, [_e.sent(),
                            contracts_test_utils_1.constants.AWAIT_TRANSACTION_MINED_MS])];
                    case 2:
                        _e.sent();
                        from = owner;
                        to = erc721Receiver.address;
                        _d = (_c = logDecoder).getTxWithDecodedLogsAsync;
                        return [4 /*yield*/, token.transferFrom.sendTransactionAsync(from, to, tokenId)];
                    case 3: return [4 /*yield*/, _d.apply(_c, [_e.sent()])];
                    case 4:
                        txReceipt = _e.sent();
                        return [4 /*yield*/, token.ownerOf.callAsync(tokenId)];
                    case 5:
                        newOwner = _e.sent();
                        expect(newOwner).to.be.equal(to);
                        log = txReceipt.logs[0];
                        expect(log.args._from).to.be.equal(from);
                        expect(log.args._to).to.be.equal(to);
                        expect(log.args._tokenId).to.be.bignumber.equal(tokenId);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should transfer the token if spender is individually approved', function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, _b, from, to, txReceipt, _c, _d, newOwner, approvedAddress, log;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _b = (_a = contracts_test_utils_1.web3Wrapper).awaitTransactionSuccessAsync;
                        return [4 /*yield*/, token.approve.sendTransactionAsync(spender, tokenId)];
                    case 1: return [4 /*yield*/, _b.apply(_a, [_e.sent(),
                            contracts_test_utils_1.constants.AWAIT_TRANSACTION_MINED_MS])];
                    case 2:
                        _e.sent();
                        from = owner;
                        to = erc721Receiver.address;
                        _d = (_c = logDecoder).getTxWithDecodedLogsAsync;
                        return [4 /*yield*/, token.transferFrom.sendTransactionAsync(from, to, tokenId)];
                    case 3: return [4 /*yield*/, _d.apply(_c, [_e.sent()])];
                    case 4:
                        txReceipt = _e.sent();
                        return [4 /*yield*/, token.ownerOf.callAsync(tokenId)];
                    case 5:
                        newOwner = _e.sent();
                        expect(newOwner).to.be.equal(to);
                        return [4 /*yield*/, token.getApproved.callAsync(tokenId)];
                    case 6:
                        approvedAddress = _e.sent();
                        expect(approvedAddress).to.be.equal(contracts_test_utils_1.constants.NULL_ADDRESS);
                        log = txReceipt.logs[0];
                        expect(log.args._from).to.be.equal(from);
                        expect(log.args._to).to.be.equal(to);
                        expect(log.args._tokenId).to.be.bignumber.equal(tokenId);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('safeTransferFrom without data', function () {
        it('should transfer token to a non-contract address if called by owner', function () { return __awaiter(_this, void 0, void 0, function () {
            var from, to, txReceipt, _a, _b, newOwner, log;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        from = owner;
                        to = spender;
                        _b = (_a = logDecoder).getTxWithDecodedLogsAsync;
                        return [4 /*yield*/, token.safeTransferFrom1.sendTransactionAsync(from, to, tokenId)];
                    case 1: return [4 /*yield*/, _b.apply(_a, [_c.sent()])];
                    case 2:
                        txReceipt = _c.sent();
                        return [4 /*yield*/, token.ownerOf.callAsync(tokenId)];
                    case 3:
                        newOwner = _c.sent();
                        expect(newOwner).to.be.equal(to);
                        log = txReceipt.logs[0];
                        expect(log.args._from).to.be.equal(from);
                        expect(log.args._to).to.be.equal(to);
                        expect(log.args._tokenId).to.be.bignumber.equal(tokenId);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should revert if transferring to a contract address without onERC721Received', function () { return __awaiter(_this, void 0, void 0, function () {
            var contract, from, to;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, src_1.DummyERC721TokenContract.deployFrom0xArtifactAsync(src_1.artifacts.DummyERC721Token, contracts_test_utils_1.provider, contracts_test_utils_1.txDefaults, contracts_test_utils_1.constants.DUMMY_TOKEN_NAME, contracts_test_utils_1.constants.DUMMY_TOKEN_SYMBOL)];
                    case 1:
                        contract = _a.sent();
                        from = owner;
                        to = contract.address;
                        return [4 /*yield*/, contracts_test_utils_1.expectTransactionFailedWithoutReasonAsync(token.safeTransferFrom1.sendTransactionAsync(from, to, tokenId))];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should revert if onERC721Received does not return the correct value', function () { return __awaiter(_this, void 0, void 0, function () {
            var invalidErc721Receiver, from, to;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, src_1.InvalidERC721ReceiverContract.deployFrom0xArtifactAsync(src_1.artifacts.InvalidERC721Receiver, contracts_test_utils_1.provider, contracts_test_utils_1.txDefaults)];
                    case 1:
                        invalidErc721Receiver = _a.sent();
                        from = owner;
                        to = invalidErc721Receiver.address;
                        return [4 /*yield*/, contracts_test_utils_1.expectTransactionFailedAsync(token.safeTransferFrom1.sendTransactionAsync(from, to, tokenId), types_1.RevertReason.Erc721InvalidSelector)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should transfer to contract and call onERC721Received with correct return value', function () { return __awaiter(_this, void 0, void 0, function () {
            var from, to, txReceipt, _a, _b, newOwner, transferLog, receiverLog;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        from = owner;
                        to = erc721Receiver.address;
                        _b = (_a = logDecoder).getTxWithDecodedLogsAsync;
                        return [4 /*yield*/, token.safeTransferFrom1.sendTransactionAsync(from, to, tokenId)];
                    case 1: return [4 /*yield*/, _b.apply(_a, [_c.sent()])];
                    case 2:
                        txReceipt = _c.sent();
                        return [4 /*yield*/, token.ownerOf.callAsync(tokenId)];
                    case 3:
                        newOwner = _c.sent();
                        expect(newOwner).to.be.equal(to);
                        transferLog = txReceipt.logs[0];
                        receiverLog = txReceipt.logs[1];
                        expect(transferLog.args._from).to.be.equal(from);
                        expect(transferLog.args._to).to.be.equal(to);
                        expect(transferLog.args._tokenId).to.be.bignumber.equal(tokenId);
                        expect(receiverLog.args.operator).to.be.equal(owner);
                        expect(receiverLog.args.from).to.be.equal(from);
                        expect(receiverLog.args.tokenId).to.be.bignumber.equal(tokenId);
                        expect(receiverLog.args.data).to.be.equal(contracts_test_utils_1.constants.NULL_BYTES);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('safeTransferFrom with data', function () {
        var data = '0x0102030405060708090a0b0c0d0e0f';
        it('should transfer token to a non-contract address if called by owner', function () { return __awaiter(_this, void 0, void 0, function () {
            var from, to, txReceipt, _a, _b, newOwner, log;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        from = owner;
                        to = spender;
                        _b = (_a = logDecoder).getTxWithDecodedLogsAsync;
                        return [4 /*yield*/, token.safeTransferFrom2.sendTransactionAsync(from, to, tokenId, data)];
                    case 1: return [4 /*yield*/, _b.apply(_a, [_c.sent()])];
                    case 2:
                        txReceipt = _c.sent();
                        return [4 /*yield*/, token.ownerOf.callAsync(tokenId)];
                    case 3:
                        newOwner = _c.sent();
                        expect(newOwner).to.be.equal(to);
                        log = txReceipt.logs[0];
                        expect(log.args._from).to.be.equal(from);
                        expect(log.args._to).to.be.equal(to);
                        expect(log.args._tokenId).to.be.bignumber.equal(tokenId);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should revert if transferring to a contract address without onERC721Received', function () { return __awaiter(_this, void 0, void 0, function () {
            var contract, from, to;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, src_1.DummyERC721TokenContract.deployFrom0xArtifactAsync(src_1.artifacts.DummyERC721Token, contracts_test_utils_1.provider, contracts_test_utils_1.txDefaults, contracts_test_utils_1.constants.DUMMY_TOKEN_NAME, contracts_test_utils_1.constants.DUMMY_TOKEN_SYMBOL)];
                    case 1:
                        contract = _a.sent();
                        from = owner;
                        to = contract.address;
                        return [4 /*yield*/, contracts_test_utils_1.expectTransactionFailedWithoutReasonAsync(token.safeTransferFrom2.sendTransactionAsync(from, to, tokenId, data))];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should revert if onERC721Received does not return the correct value', function () { return __awaiter(_this, void 0, void 0, function () {
            var invalidErc721Receiver, from, to;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, src_1.InvalidERC721ReceiverContract.deployFrom0xArtifactAsync(src_1.artifacts.InvalidERC721Receiver, contracts_test_utils_1.provider, contracts_test_utils_1.txDefaults)];
                    case 1:
                        invalidErc721Receiver = _a.sent();
                        from = owner;
                        to = invalidErc721Receiver.address;
                        return [4 /*yield*/, contracts_test_utils_1.expectTransactionFailedAsync(token.safeTransferFrom2.sendTransactionAsync(from, to, tokenId, data), types_1.RevertReason.Erc721InvalidSelector)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should transfer to contract and call onERC721Received with correct return value', function () { return __awaiter(_this, void 0, void 0, function () {
            var from, to, txReceipt, _a, _b, newOwner, transferLog, receiverLog;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        from = owner;
                        to = erc721Receiver.address;
                        _b = (_a = logDecoder).getTxWithDecodedLogsAsync;
                        return [4 /*yield*/, token.safeTransferFrom2.sendTransactionAsync(from, to, tokenId, data)];
                    case 1: return [4 /*yield*/, _b.apply(_a, [_c.sent()])];
                    case 2:
                        txReceipt = _c.sent();
                        return [4 /*yield*/, token.ownerOf.callAsync(tokenId)];
                    case 3:
                        newOwner = _c.sent();
                        expect(newOwner).to.be.equal(to);
                        transferLog = txReceipt.logs[0];
                        receiverLog = txReceipt.logs[1];
                        expect(transferLog.args._from).to.be.equal(from);
                        expect(transferLog.args._to).to.be.equal(to);
                        expect(transferLog.args._tokenId).to.be.bignumber.equal(tokenId);
                        expect(receiverLog.args.operator).to.be.equal(owner);
                        expect(receiverLog.args.from).to.be.equal(from);
                        expect(receiverLog.args.tokenId).to.be.bignumber.equal(tokenId);
                        expect(receiverLog.args.data).to.be.equal(data);
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
// tslint:enable:no-unnecessary-type-assertion
//# sourceMappingURL=erc721_token.js.map