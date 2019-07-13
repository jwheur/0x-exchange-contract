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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var contracts_test_utils_1 = require("@0x/contracts-test-utils");
var dev_utils_1 = require("@0x/dev-utils");
var utils_1 = require("@0x/utils");
var web3_wrapper_1 = require("@0x/web3-wrapper");
var chai = require("chai");
var src_1 = require("../src");
contracts_test_utils_1.chaiSetup.configure();
var expect = chai.expect;
var blockchainLifecycle = new dev_utils_1.BlockchainLifecycle(contracts_test_utils_1.web3Wrapper);
describe('EtherToken', function () {
    var account;
    var gasPrice = web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(20), 9);
    var etherToken;
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
        var accounts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, contracts_test_utils_1.web3Wrapper.getAvailableAddressesAsync()];
                case 1:
                    accounts = _a.sent();
                    account = accounts[0];
                    return [4 /*yield*/, src_1.WETH9Contract.deployFrom0xArtifactAsync(src_1.artifacts.WETH9, contracts_test_utils_1.provider, __assign({ gasPrice: gasPrice }, contracts_test_utils_1.txDefaults))];
                case 2:
                    etherToken = _a.sent();
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
    describe('deposit', function () {
        it('should throw if caller attempts to deposit more Ether than caller balance', function () { return __awaiter(_this, void 0, void 0, function () {
            var initEthBalance, ethToDeposit;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, contracts_test_utils_1.web3Wrapper.getBalanceInWeiAsync(account)];
                    case 1:
                        initEthBalance = _a.sent();
                        ethToDeposit = initEthBalance.plus(1);
                        return [2 /*return*/, contracts_test_utils_1.expectInsufficientFundsAsync(etherToken.deposit.sendTransactionAsync({ value: ethToDeposit }))];
                }
            });
        }); });
        it('should convert deposited Ether to wrapped Ether tokens', function () { return __awaiter(_this, void 0, void 0, function () {
            var initEthBalance, initEthTokenBalance, ethToDeposit, txHash, receipt, ethSpentOnGas, finalEthBalance, finalEthTokenBalance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, contracts_test_utils_1.web3Wrapper.getBalanceInWeiAsync(account)];
                    case 1:
                        initEthBalance = _a.sent();
                        return [4 /*yield*/, etherToken.balanceOf.callAsync(account)];
                    case 2:
                        initEthTokenBalance = _a.sent();
                        ethToDeposit = new utils_1.BigNumber(web3_wrapper_1.Web3Wrapper.toWei(new utils_1.BigNumber(1)));
                        return [4 /*yield*/, etherToken.deposit.sendTransactionAsync({ value: ethToDeposit })];
                    case 3:
                        txHash = _a.sent();
                        return [4 /*yield*/, contracts_test_utils_1.web3Wrapper.awaitTransactionSuccessAsync(txHash, contracts_test_utils_1.constants.AWAIT_TRANSACTION_MINED_MS)];
                    case 4:
                        receipt = _a.sent();
                        ethSpentOnGas = gasPrice.times(receipt.gasUsed);
                        return [4 /*yield*/, contracts_test_utils_1.web3Wrapper.getBalanceInWeiAsync(account)];
                    case 5:
                        finalEthBalance = _a.sent();
                        return [4 /*yield*/, etherToken.balanceOf.callAsync(account)];
                    case 6:
                        finalEthTokenBalance = _a.sent();
                        expect(finalEthBalance).to.be.bignumber.equal(initEthBalance.minus(ethToDeposit.plus(ethSpentOnGas)));
                        expect(finalEthTokenBalance).to.be.bignumber.equal(initEthTokenBalance.plus(ethToDeposit));
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('withdraw', function () {
        it('should throw if caller attempts to withdraw greater than caller balance', function () { return __awaiter(_this, void 0, void 0, function () {
            var initEthTokenBalance, ethTokensToWithdraw;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, etherToken.balanceOf.callAsync(account)];
                    case 1:
                        initEthTokenBalance = _a.sent();
                        ethTokensToWithdraw = initEthTokenBalance.plus(1);
                        return [2 /*return*/, contracts_test_utils_1.expectTransactionFailedWithoutReasonAsync(etherToken.withdraw.sendTransactionAsync(ethTokensToWithdraw))];
                }
            });
        }); });
        it('should convert ether tokens to ether with sufficient balance', function () { return __awaiter(_this, void 0, void 0, function () {
            var ethToDeposit, _a, _b, initEthTokenBalance, initEthBalance, ethTokensToWithdraw, txHash, receipt, ethSpentOnGas, finalEthBalance, finalEthTokenBalance;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        ethToDeposit = new utils_1.BigNumber(web3_wrapper_1.Web3Wrapper.toWei(new utils_1.BigNumber(1)));
                        _b = (_a = contracts_test_utils_1.web3Wrapper).awaitTransactionSuccessAsync;
                        return [4 /*yield*/, etherToken.deposit.sendTransactionAsync({ value: ethToDeposit })];
                    case 1: return [4 /*yield*/, _b.apply(_a, [_c.sent(),
                            contracts_test_utils_1.constants.AWAIT_TRANSACTION_MINED_MS])];
                    case 2:
                        _c.sent();
                        return [4 /*yield*/, etherToken.balanceOf.callAsync(account)];
                    case 3:
                        initEthTokenBalance = _c.sent();
                        return [4 /*yield*/, contracts_test_utils_1.web3Wrapper.getBalanceInWeiAsync(account)];
                    case 4:
                        initEthBalance = _c.sent();
                        ethTokensToWithdraw = initEthTokenBalance;
                        expect(ethTokensToWithdraw).to.not.be.bignumber.equal(0);
                        return [4 /*yield*/, etherToken.withdraw.sendTransactionAsync(ethTokensToWithdraw, {
                                gas: contracts_test_utils_1.constants.MAX_ETHERTOKEN_WITHDRAW_GAS,
                            })];
                    case 5:
                        txHash = _c.sent();
                        return [4 /*yield*/, contracts_test_utils_1.web3Wrapper.awaitTransactionSuccessAsync(txHash, contracts_test_utils_1.constants.AWAIT_TRANSACTION_MINED_MS)];
                    case 6:
                        receipt = _c.sent();
                        ethSpentOnGas = gasPrice.times(receipt.gasUsed);
                        return [4 /*yield*/, contracts_test_utils_1.web3Wrapper.getBalanceInWeiAsync(account)];
                    case 7:
                        finalEthBalance = _c.sent();
                        return [4 /*yield*/, etherToken.balanceOf.callAsync(account)];
                    case 8:
                        finalEthTokenBalance = _c.sent();
                        expect(finalEthBalance).to.be.bignumber.equal(initEthBalance.plus(ethTokensToWithdraw.minus(ethSpentOnGas)));
                        expect(finalEthTokenBalance).to.be.bignumber.equal(initEthTokenBalance.minus(ethTokensToWithdraw));
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('fallback', function () {
        it('should convert sent ether to ether tokens', function () { return __awaiter(_this, void 0, void 0, function () {
            var initEthBalance, initEthTokenBalance, ethToDeposit, txHash, receipt, ethSpentOnGas, finalEthBalance, finalEthTokenBalance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, contracts_test_utils_1.web3Wrapper.getBalanceInWeiAsync(account)];
                    case 1:
                        initEthBalance = _a.sent();
                        return [4 /*yield*/, etherToken.balanceOf.callAsync(account)];
                    case 2:
                        initEthTokenBalance = _a.sent();
                        ethToDeposit = web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new utils_1.BigNumber(1), 18);
                        return [4 /*yield*/, contracts_test_utils_1.web3Wrapper.sendTransactionAsync({
                                from: account,
                                to: etherToken.address,
                                value: ethToDeposit,
                                gasPrice: gasPrice,
                            })];
                    case 3:
                        txHash = _a.sent();
                        return [4 /*yield*/, contracts_test_utils_1.web3Wrapper.awaitTransactionSuccessAsync(txHash, contracts_test_utils_1.constants.AWAIT_TRANSACTION_MINED_MS)];
                    case 4:
                        receipt = _a.sent();
                        ethSpentOnGas = gasPrice.times(receipt.gasUsed);
                        return [4 /*yield*/, contracts_test_utils_1.web3Wrapper.getBalanceInWeiAsync(account)];
                    case 5:
                        finalEthBalance = _a.sent();
                        return [4 /*yield*/, etherToken.balanceOf.callAsync(account)];
                    case 6:
                        finalEthTokenBalance = _a.sent();
                        expect(finalEthBalance).to.be.bignumber.equal(initEthBalance.minus(ethToDeposit.plus(ethSpentOnGas)));
                        expect(finalEthTokenBalance).to.be.bignumber.equal(initEthTokenBalance.plus(ethToDeposit));
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
//# sourceMappingURL=weth9.js.map