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
describe('UnlimitedAllowanceToken', function () {
    var owner;
    var spender;
    var MAX_MINT_VALUE = new utils_1.BigNumber(10000000000000000000000);
    var token;
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
                    return [4 /*yield*/, src_1.DummyERC20TokenContract.deployFrom0xArtifactAsync(src_1.artifacts.DummyERC20Token, contracts_test_utils_1.provider, contracts_test_utils_1.txDefaults, contracts_test_utils_1.constants.DUMMY_TOKEN_NAME, contracts_test_utils_1.constants.DUMMY_TOKEN_SYMBOL, contracts_test_utils_1.constants.DUMMY_TOKEN_DECIMALS, contracts_test_utils_1.constants.DUMMY_TOKEN_TOTAL_SUPPLY)];
                case 2:
                    token = _c.sent();
                    _b = (_a = contracts_test_utils_1.web3Wrapper).awaitTransactionSuccessAsync;
                    return [4 /*yield*/, token.mint.sendTransactionAsync(MAX_MINT_VALUE, { from: owner })];
                case 3: return [4 /*yield*/, _b.apply(_a, [_c.sent(),
                        contracts_test_utils_1.constants.AWAIT_TRANSACTION_MINED_MS])];
                case 4:
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
    describe('transfer', function () {
        it('should throw if owner has insufficient balance', function () { return __awaiter(_this, void 0, void 0, function () {
            var ownerBalance, amountToTransfer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, token.balanceOf.callAsync(owner)];
                    case 1:
                        ownerBalance = _a.sent();
                        amountToTransfer = ownerBalance.plus(1);
                        return [2 /*return*/, contracts_test_utils_1.expectContractCallFailedAsync(token.transfer.callAsync(spender, amountToTransfer, { from: owner }), types_1.RevertReason.Erc20InsufficientBalance)];
                }
            });
        }); });
        it('should transfer balance from sender to receiver', function () { return __awaiter(_this, void 0, void 0, function () {
            var receiver, initOwnerBalance, amountToTransfer, _a, _b, finalOwnerBalance, finalReceiverBalance, expectedFinalOwnerBalance, expectedFinalReceiverBalance;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        receiver = spender;
                        return [4 /*yield*/, token.balanceOf.callAsync(owner)];
                    case 1:
                        initOwnerBalance = _c.sent();
                        amountToTransfer = new utils_1.BigNumber(1);
                        _b = (_a = contracts_test_utils_1.web3Wrapper).awaitTransactionSuccessAsync;
                        return [4 /*yield*/, token.transfer.sendTransactionAsync(receiver, amountToTransfer, { from: owner })];
                    case 2: return [4 /*yield*/, _b.apply(_a, [_c.sent(),
                            contracts_test_utils_1.constants.AWAIT_TRANSACTION_MINED_MS])];
                    case 3:
                        _c.sent();
                        return [4 /*yield*/, token.balanceOf.callAsync(owner)];
                    case 4:
                        finalOwnerBalance = _c.sent();
                        return [4 /*yield*/, token.balanceOf.callAsync(receiver)];
                    case 5:
                        finalReceiverBalance = _c.sent();
                        expectedFinalOwnerBalance = initOwnerBalance.minus(amountToTransfer);
                        expectedFinalReceiverBalance = amountToTransfer;
                        expect(finalOwnerBalance).to.be.bignumber.equal(expectedFinalOwnerBalance);
                        expect(finalReceiverBalance).to.be.bignumber.equal(expectedFinalReceiverBalance);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should return true on a 0 value transfer', function () { return __awaiter(_this, void 0, void 0, function () {
            var didReturnTrue;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, token.transfer.callAsync(spender, new utils_1.BigNumber(0), {
                            from: owner,
                        })];
                    case 1:
                        didReturnTrue = _a.sent();
                        expect(didReturnTrue).to.be.true();
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('transferFrom', function () {
        it('should throw if owner has insufficient balance', function () { return __awaiter(_this, void 0, void 0, function () {
            var ownerBalance, amountToTransfer, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, token.balanceOf.callAsync(owner)];
                    case 1:
                        ownerBalance = _c.sent();
                        amountToTransfer = ownerBalance.plus(1);
                        _b = (_a = contracts_test_utils_1.web3Wrapper).awaitTransactionSuccessAsync;
                        return [4 /*yield*/, token.approve.sendTransactionAsync(spender, amountToTransfer, { from: owner })];
                    case 2: return [4 /*yield*/, _b.apply(_a, [_c.sent(),
                            contracts_test_utils_1.constants.AWAIT_TRANSACTION_MINED_MS])];
                    case 3:
                        _c.sent();
                        return [2 /*return*/, contracts_test_utils_1.expectContractCallFailedAsync(token.transferFrom.callAsync(owner, spender, amountToTransfer, {
                                from: spender,
                            }), types_1.RevertReason.Erc20InsufficientBalance)];
                }
            });
        }); });
        it('should throw if spender has insufficient allowance', function () { return __awaiter(_this, void 0, void 0, function () {
            var ownerBalance, amountToTransfer, spenderAllowance, isSpenderAllowanceInsufficient;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, token.balanceOf.callAsync(owner)];
                    case 1:
                        ownerBalance = _a.sent();
                        amountToTransfer = ownerBalance;
                        return [4 /*yield*/, token.allowance.callAsync(owner, spender)];
                    case 2:
                        spenderAllowance = _a.sent();
                        isSpenderAllowanceInsufficient = spenderAllowance.comparedTo(amountToTransfer) < 0;
                        expect(isSpenderAllowanceInsufficient).to.be.true();
                        return [2 /*return*/, contracts_test_utils_1.expectContractCallFailedAsync(token.transferFrom.callAsync(owner, spender, amountToTransfer, {
                                from: spender,
                            }), types_1.RevertReason.Erc20InsufficientAllowance)];
                }
            });
        }); });
        it('should return true on a 0 value transfer', function () { return __awaiter(_this, void 0, void 0, function () {
            var amountToTransfer, didReturnTrue;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        amountToTransfer = new utils_1.BigNumber(0);
                        return [4 /*yield*/, token.transferFrom.callAsync(owner, spender, amountToTransfer, {
                                from: spender,
                            })];
                    case 1:
                        didReturnTrue = _a.sent();
                        expect(didReturnTrue).to.be.true();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should not modify spender allowance if spender allowance is 2^256 - 1', function () { return __awaiter(_this, void 0, void 0, function () {
            var initOwnerBalance, amountToTransfer, initSpenderAllowance, _a, _b, _c, _d, newSpenderAllowance;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, token.balanceOf.callAsync(owner)];
                    case 1:
                        initOwnerBalance = _e.sent();
                        amountToTransfer = initOwnerBalance;
                        initSpenderAllowance = contracts_test_utils_1.constants.UNLIMITED_ALLOWANCE_IN_BASE_UNITS;
                        _b = (_a = contracts_test_utils_1.web3Wrapper).awaitTransactionSuccessAsync;
                        return [4 /*yield*/, token.approve.sendTransactionAsync(spender, initSpenderAllowance, { from: owner })];
                    case 2: return [4 /*yield*/, _b.apply(_a, [_e.sent(),
                            contracts_test_utils_1.constants.AWAIT_TRANSACTION_MINED_MS])];
                    case 3:
                        _e.sent();
                        _d = (_c = contracts_test_utils_1.web3Wrapper).awaitTransactionSuccessAsync;
                        return [4 /*yield*/, token.transferFrom.sendTransactionAsync(owner, spender, amountToTransfer, {
                                from: spender,
                                gas: contracts_test_utils_1.constants.MAX_TOKEN_TRANSFERFROM_GAS,
                            })];
                    case 4: return [4 /*yield*/, _d.apply(_c, [_e.sent(),
                            contracts_test_utils_1.constants.AWAIT_TRANSACTION_MINED_MS])];
                    case 5:
                        _e.sent();
                        return [4 /*yield*/, token.allowance.callAsync(owner, spender)];
                    case 6:
                        newSpenderAllowance = _e.sent();
                        expect(initSpenderAllowance).to.be.bignumber.equal(newSpenderAllowance);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should transfer the correct balances if spender has sufficient allowance', function () { return __awaiter(_this, void 0, void 0, function () {
            var initOwnerBalance, amountToTransfer, initSpenderAllowance, _a, _b, _c, _d, newOwnerBalance, newSpenderBalance;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, token.balanceOf.callAsync(owner)];
                    case 1:
                        initOwnerBalance = _e.sent();
                        amountToTransfer = initOwnerBalance;
                        initSpenderAllowance = initOwnerBalance;
                        _b = (_a = contracts_test_utils_1.web3Wrapper).awaitTransactionSuccessAsync;
                        return [4 /*yield*/, token.approve.sendTransactionAsync(spender, initSpenderAllowance, { from: owner })];
                    case 2: return [4 /*yield*/, _b.apply(_a, [_e.sent(),
                            contracts_test_utils_1.constants.AWAIT_TRANSACTION_MINED_MS])];
                    case 3:
                        _e.sent();
                        _d = (_c = contracts_test_utils_1.web3Wrapper).awaitTransactionSuccessAsync;
                        return [4 /*yield*/, token.transferFrom.sendTransactionAsync(owner, spender, amountToTransfer, {
                                from: spender,
                                gas: contracts_test_utils_1.constants.MAX_TOKEN_TRANSFERFROM_GAS,
                            })];
                    case 4: return [4 /*yield*/, _d.apply(_c, [_e.sent(),
                            contracts_test_utils_1.constants.AWAIT_TRANSACTION_MINED_MS])];
                    case 5:
                        _e.sent();
                        return [4 /*yield*/, token.balanceOf.callAsync(owner)];
                    case 6:
                        newOwnerBalance = _e.sent();
                        return [4 /*yield*/, token.balanceOf.callAsync(spender)];
                    case 7:
                        newSpenderBalance = _e.sent();
                        expect(newOwnerBalance).to.be.bignumber.equal(0);
                        expect(newSpenderBalance).to.be.bignumber.equal(initOwnerBalance);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should modify allowance if spender has sufficient allowance less than 2^256 - 1', function () { return __awaiter(_this, void 0, void 0, function () {
            var initOwnerBalance, amountToTransfer, initSpenderAllowance, _a, _b, _c, _d, newSpenderAllowance;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, token.balanceOf.callAsync(owner)];
                    case 1:
                        initOwnerBalance = _e.sent();
                        amountToTransfer = initOwnerBalance;
                        initSpenderAllowance = initOwnerBalance;
                        _b = (_a = contracts_test_utils_1.web3Wrapper).awaitTransactionSuccessAsync;
                        return [4 /*yield*/, token.approve.sendTransactionAsync(spender, initSpenderAllowance, { from: owner })];
                    case 2: return [4 /*yield*/, _b.apply(_a, [_e.sent(),
                            contracts_test_utils_1.constants.AWAIT_TRANSACTION_MINED_MS])];
                    case 3:
                        _e.sent();
                        _d = (_c = contracts_test_utils_1.web3Wrapper).awaitTransactionSuccessAsync;
                        return [4 /*yield*/, token.transferFrom.sendTransactionAsync(owner, spender, amountToTransfer, {
                                from: spender,
                                gas: contracts_test_utils_1.constants.MAX_TOKEN_TRANSFERFROM_GAS,
                            })];
                    case 4: return [4 /*yield*/, _d.apply(_c, [_e.sent(),
                            contracts_test_utils_1.constants.AWAIT_TRANSACTION_MINED_MS])];
                    case 5:
                        _e.sent();
                        return [4 /*yield*/, token.allowance.callAsync(owner, spender)];
                    case 6:
                        newSpenderAllowance = _e.sent();
                        expect(newSpenderAllowance).to.be.bignumber.equal(0);
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
//# sourceMappingURL=unlimited_allowance_token.js.map