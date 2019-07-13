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
var order_utils_1 = require("@0x/order-utils");
var types_1 = require("@0x/types");
var chai = require("chai");
var ethUtil = require("ethereumjs-util");
var src_1 = require("../src");
contracts_test_utils_1.chaiSetup.configure();
var expect = chai.expect;
var blockchainLifecycle = new dev_utils_1.BlockchainLifecycle(contracts_test_utils_1.web3Wrapper);
// tslint:disable:no-unnecessary-type-assertion
describe('MixinSignatureValidator', function () {
    var signedOrder;
    var orderFactory;
    var signatureValidator;
    var testWallet;
    var testValidator;
    var maliciousWallet;
    var maliciousValidator;
    var signerAddress;
    var signerPrivateKey;
    var notSignerAddress;
    var notSignerPrivateKey;
    var signatureValidatorLogDecoder;
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
        var accounts, makerAddress, _a, _b, _c, _d, defaultOrderParams;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0: return [4 /*yield*/, contracts_test_utils_1.web3Wrapper.getAvailableAddressesAsync()];
                case 1:
                    accounts = _e.sent();
                    makerAddress = accounts[0];
                    signerAddress = makerAddress;
                    notSignerAddress = accounts[1];
                    return [4 /*yield*/, src_1.TestSignatureValidatorContract.deployFrom0xArtifactAsync(src_1.artifacts.TestSignatureValidator, contracts_test_utils_1.provider, contracts_test_utils_1.txDefaults)];
                case 2:
                    signatureValidator = _e.sent();
                    return [4 /*yield*/, src_1.WalletContract.deployFrom0xArtifactAsync(src_1.artifacts.Wallet, contracts_test_utils_1.provider, contracts_test_utils_1.txDefaults, signerAddress)];
                case 3:
                    testWallet = _e.sent();
                    return [4 /*yield*/, src_1.ValidatorContract.deployFrom0xArtifactAsync(src_1.artifacts.Validator, contracts_test_utils_1.provider, contracts_test_utils_1.txDefaults, signerAddress)];
                case 4:
                    testValidator = _e.sent();
                    return [4 /*yield*/, src_1.TestStaticCallReceiverContract.deployFrom0xArtifactAsync(src_1.artifacts.TestStaticCallReceiver, contracts_test_utils_1.provider, contracts_test_utils_1.txDefaults)];
                case 5:
                    maliciousWallet = maliciousValidator = _e.sent();
                    signatureValidatorLogDecoder = new contracts_test_utils_1.LogDecoder(contracts_test_utils_1.web3Wrapper, src_1.artifacts);
                    _b = (_a = contracts_test_utils_1.web3Wrapper).awaitTransactionSuccessAsync;
                    return [4 /*yield*/, signatureValidator.setSignatureValidatorApproval.sendTransactionAsync(testValidator.address, true, {
                            from: signerAddress,
                        })];
                case 6: return [4 /*yield*/, _b.apply(_a, [_e.sent(),
                        contracts_test_utils_1.constants.AWAIT_TRANSACTION_MINED_MS])];
                case 7:
                    _e.sent();
                    _d = (_c = contracts_test_utils_1.web3Wrapper).awaitTransactionSuccessAsync;
                    return [4 /*yield*/, signatureValidator.setSignatureValidatorApproval.sendTransactionAsync(maliciousValidator.address, true, {
                            from: signerAddress,
                        })];
                case 8: return [4 /*yield*/, _d.apply(_c, [_e.sent(),
                        contracts_test_utils_1.constants.AWAIT_TRANSACTION_MINED_MS])];
                case 9:
                    _e.sent();
                    defaultOrderParams = __assign({}, contracts_test_utils_1.constants.STATIC_ORDER_PARAMS, { exchangeAddress: signatureValidator.address, makerAddress: makerAddress, feeRecipientAddress: contracts_test_utils_1.addressUtils.generatePseudoRandomAddress(), makerAssetData: order_utils_1.assetDataUtils.encodeERC20AssetData(contracts_test_utils_1.addressUtils.generatePseudoRandomAddress()), takerAssetData: order_utils_1.assetDataUtils.encodeERC20AssetData(contracts_test_utils_1.addressUtils.generatePseudoRandomAddress()) });
                    signerPrivateKey = contracts_test_utils_1.constants.TESTRPC_PRIVATE_KEYS[accounts.indexOf(makerAddress)];
                    notSignerPrivateKey = contracts_test_utils_1.constants.TESTRPC_PRIVATE_KEYS[accounts.indexOf(notSignerAddress)];
                    orderFactory = new contracts_test_utils_1.OrderFactory(signerPrivateKey, defaultOrderParams);
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
    describe('isValidSignature', function () {
        beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, orderFactory.newSignedOrderAsync()];
                    case 1:
                        signedOrder = _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should revert when signature is empty', function () { return __awaiter(_this, void 0, void 0, function () {
            var emptySignature, orderHashHex;
            return __generator(this, function (_a) {
                emptySignature = '0x';
                orderHashHex = order_utils_1.orderHashUtils.getOrderHashHex(signedOrder);
                return [2 /*return*/, contracts_test_utils_1.expectContractCallFailedAsync(signatureValidator.publicIsValidSignature.callAsync(orderHashHex, signedOrder.makerAddress, emptySignature), types_1.RevertReason.LengthGreaterThan0Required)];
            });
        }); });
        it('should revert when signature type is unsupported', function () { return __awaiter(_this, void 0, void 0, function () {
            var unsupportedSignatureType, unsupportedSignatureHex, orderHashHex;
            return __generator(this, function (_a) {
                unsupportedSignatureType = types_1.SignatureType.NSignatureTypes;
                unsupportedSignatureHex = "0x" + Buffer.from([unsupportedSignatureType]).toString('hex');
                orderHashHex = order_utils_1.orderHashUtils.getOrderHashHex(signedOrder);
                return [2 /*return*/, contracts_test_utils_1.expectContractCallFailedAsync(signatureValidator.publicIsValidSignature.callAsync(orderHashHex, signedOrder.makerAddress, unsupportedSignatureHex), types_1.RevertReason.SignatureUnsupported)];
            });
        }); });
        it('should revert when SignatureType=Illegal', function () { return __awaiter(_this, void 0, void 0, function () {
            var unsupportedSignatureHex, orderHashHex;
            return __generator(this, function (_a) {
                unsupportedSignatureHex = "0x" + Buffer.from([types_1.SignatureType.Illegal]).toString('hex');
                orderHashHex = order_utils_1.orderHashUtils.getOrderHashHex(signedOrder);
                return [2 /*return*/, contracts_test_utils_1.expectContractCallFailedAsync(signatureValidator.publicIsValidSignature.callAsync(orderHashHex, signedOrder.makerAddress, unsupportedSignatureHex), types_1.RevertReason.SignatureIllegal)];
            });
        }); });
        it('should return false when SignatureType=Invalid and signature has a length of zero', function () { return __awaiter(_this, void 0, void 0, function () {
            var signatureHex, orderHashHex, isValidSignature;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        signatureHex = "0x" + Buffer.from([types_1.SignatureType.Invalid]).toString('hex');
                        orderHashHex = order_utils_1.orderHashUtils.getOrderHashHex(signedOrder);
                        return [4 /*yield*/, signatureValidator.publicIsValidSignature.callAsync(orderHashHex, signedOrder.makerAddress, signatureHex)];
                    case 1:
                        isValidSignature = _a.sent();
                        expect(isValidSignature).to.be.false();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should revert when SignatureType=Invalid and signature length is non-zero', function () { return __awaiter(_this, void 0, void 0, function () {
            var fillerData, signatureType, signatureBuffer, signatureHex, orderHashHex;
            return __generator(this, function (_a) {
                fillerData = ethUtil.toBuffer('0xdeadbeef');
                signatureType = ethUtil.toBuffer("0x" + types_1.SignatureType.Invalid);
                signatureBuffer = Buffer.concat([fillerData, signatureType]);
                signatureHex = ethUtil.bufferToHex(signatureBuffer);
                orderHashHex = order_utils_1.orderHashUtils.getOrderHashHex(signedOrder);
                return [2 /*return*/, contracts_test_utils_1.expectContractCallFailedAsync(signatureValidator.publicIsValidSignature.callAsync(orderHashHex, signedOrder.makerAddress, signatureHex), types_1.RevertReason.Length0Required)];
            });
        }); });
        it('should return true when SignatureType=EIP712 and signature is valid', function () { return __awaiter(_this, void 0, void 0, function () {
            var orderHashHex, orderHashBuffer, ecSignature, signature, signatureHex, isValidSignature;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        orderHashHex = order_utils_1.orderHashUtils.getOrderHashHex(signedOrder);
                        orderHashBuffer = ethUtil.toBuffer(orderHashHex);
                        ecSignature = ethUtil.ecsign(orderHashBuffer, signerPrivateKey);
                        signature = Buffer.concat([
                            ethUtil.toBuffer(ecSignature.v),
                            ecSignature.r,
                            ecSignature.s,
                            ethUtil.toBuffer("0x" + types_1.SignatureType.EIP712),
                        ]);
                        signatureHex = ethUtil.bufferToHex(signature);
                        return [4 /*yield*/, signatureValidator.publicIsValidSignature.callAsync(orderHashHex, signerAddress, signatureHex)];
                    case 1:
                        isValidSignature = _a.sent();
                        expect(isValidSignature).to.be.true();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should return false when SignatureType=EIP712 and signature is invalid', function () { return __awaiter(_this, void 0, void 0, function () {
            var orderHashHex, orderHashBuffer, ecSignature, signature, signatureHex, isValidSignature;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        orderHashHex = order_utils_1.orderHashUtils.getOrderHashHex(signedOrder);
                        orderHashBuffer = ethUtil.toBuffer(orderHashHex);
                        ecSignature = ethUtil.ecsign(orderHashBuffer, signerPrivateKey);
                        signature = Buffer.concat([
                            ethUtil.toBuffer(ecSignature.v),
                            ecSignature.r,
                            ecSignature.s,
                            ethUtil.toBuffer("0x" + types_1.SignatureType.EIP712),
                        ]);
                        signatureHex = ethUtil.bufferToHex(signature);
                        return [4 /*yield*/, signatureValidator.publicIsValidSignature.callAsync(orderHashHex, notSignerAddress, signatureHex)];
                    case 1:
                        isValidSignature = _a.sent();
                        expect(isValidSignature).to.be.false();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should return true when SignatureType=EthSign and signature is valid', function () { return __awaiter(_this, void 0, void 0, function () {
            var orderHashHex, orderHashWithEthSignPrefixHex, orderHashWithEthSignPrefixBuffer, ecSignature, signature, signatureHex, isValidSignature;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        orderHashHex = order_utils_1.orderHashUtils.getOrderHashHex(signedOrder);
                        orderHashWithEthSignPrefixHex = order_utils_1.signatureUtils.addSignedMessagePrefix(orderHashHex);
                        orderHashWithEthSignPrefixBuffer = ethUtil.toBuffer(orderHashWithEthSignPrefixHex);
                        ecSignature = ethUtil.ecsign(orderHashWithEthSignPrefixBuffer, signerPrivateKey);
                        signature = Buffer.concat([
                            ethUtil.toBuffer(ecSignature.v),
                            ecSignature.r,
                            ecSignature.s,
                            ethUtil.toBuffer("0x" + types_1.SignatureType.EthSign),
                        ]);
                        signatureHex = ethUtil.bufferToHex(signature);
                        return [4 /*yield*/, signatureValidator.publicIsValidSignature.callAsync(orderHashHex, signerAddress, signatureHex)];
                    case 1:
                        isValidSignature = _a.sent();
                        expect(isValidSignature).to.be.true();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should return false when SignatureType=EthSign and signature is invalid', function () { return __awaiter(_this, void 0, void 0, function () {
            var orderHashHex, orderHashWithEthSignPrefixHex, orderHashWithEthSignPrefixBuffer, ecSignature, signature, signatureHex, isValidSignature;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        orderHashHex = order_utils_1.orderHashUtils.getOrderHashHex(signedOrder);
                        orderHashWithEthSignPrefixHex = order_utils_1.signatureUtils.addSignedMessagePrefix(orderHashHex);
                        orderHashWithEthSignPrefixBuffer = ethUtil.toBuffer(orderHashWithEthSignPrefixHex);
                        ecSignature = ethUtil.ecsign(orderHashWithEthSignPrefixBuffer, signerPrivateKey);
                        signature = Buffer.concat([
                            ethUtil.toBuffer(ecSignature.v),
                            ecSignature.r,
                            ecSignature.s,
                            ethUtil.toBuffer("0x" + types_1.SignatureType.EthSign),
                        ]);
                        signatureHex = ethUtil.bufferToHex(signature);
                        return [4 /*yield*/, signatureValidator.publicIsValidSignature.callAsync(orderHashHex, notSignerAddress, signatureHex)];
                    case 1:
                        isValidSignature = _a.sent();
                        expect(isValidSignature).to.be.false();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should return true when SignatureType=Wallet and signature is valid', function () { return __awaiter(_this, void 0, void 0, function () {
            var orderHashHex, orderHashBuffer, ecSignature, signature, signatureHex, isValidSignature;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        orderHashHex = order_utils_1.orderHashUtils.getOrderHashHex(signedOrder);
                        orderHashBuffer = ethUtil.toBuffer(orderHashHex);
                        ecSignature = ethUtil.ecsign(orderHashBuffer, signerPrivateKey);
                        signature = Buffer.concat([
                            ethUtil.toBuffer(ecSignature.v),
                            ecSignature.r,
                            ecSignature.s,
                            ethUtil.toBuffer("0x" + types_1.SignatureType.Wallet),
                        ]);
                        signatureHex = ethUtil.bufferToHex(signature);
                        return [4 /*yield*/, signatureValidator.publicIsValidSignature.callAsync(orderHashHex, testWallet.address, signatureHex)];
                    case 1:
                        isValidSignature = _a.sent();
                        expect(isValidSignature).to.be.true();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should return false when SignatureType=Wallet and signature is invalid', function () { return __awaiter(_this, void 0, void 0, function () {
            var orderHashHex, orderHashBuffer, notWalletOwnerPrivateKey, ecSignature, signature, signatureHex, isValidSignature;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        orderHashHex = order_utils_1.orderHashUtils.getOrderHashHex(signedOrder);
                        orderHashBuffer = ethUtil.toBuffer(orderHashHex);
                        notWalletOwnerPrivateKey = notSignerPrivateKey;
                        ecSignature = ethUtil.ecsign(orderHashBuffer, notWalletOwnerPrivateKey);
                        signature = Buffer.concat([
                            ethUtil.toBuffer(ecSignature.v),
                            ecSignature.r,
                            ecSignature.s,
                            ethUtil.toBuffer("0x" + types_1.SignatureType.Wallet),
                        ]);
                        signatureHex = ethUtil.bufferToHex(signature);
                        return [4 /*yield*/, signatureValidator.publicIsValidSignature.callAsync(orderHashHex, testWallet.address, signatureHex)];
                    case 1:
                        isValidSignature = _a.sent();
                        expect(isValidSignature).to.be.false();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should revert when `isValidSignature` attempts to update state and SignatureType=Wallet', function () { return __awaiter(_this, void 0, void 0, function () {
            var orderHashHex, orderHashBuffer, ecSignature, signature, signatureHex;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        orderHashHex = order_utils_1.orderHashUtils.getOrderHashHex(signedOrder);
                        orderHashBuffer = ethUtil.toBuffer(orderHashHex);
                        ecSignature = ethUtil.ecsign(orderHashBuffer, signerPrivateKey);
                        signature = Buffer.concat([
                            ethUtil.toBuffer(ecSignature.v),
                            ecSignature.r,
                            ecSignature.s,
                            ethUtil.toBuffer("0x" + types_1.SignatureType.Wallet),
                        ]);
                        signatureHex = ethUtil.bufferToHex(signature);
                        return [4 /*yield*/, contracts_test_utils_1.expectContractCallFailedAsync(signatureValidator.publicIsValidSignature.callAsync(orderHashHex, maliciousWallet.address, signatureHex), types_1.RevertReason.WalletError)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should return true when SignatureType=Validator, signature is valid and validator is approved', function () { return __awaiter(_this, void 0, void 0, function () {
            var validatorAddress, signatureType, signature, signatureHex, orderHashHex, isValidSignature;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        validatorAddress = ethUtil.toBuffer("" + testValidator.address);
                        signatureType = ethUtil.toBuffer("0x" + types_1.SignatureType.Validator);
                        signature = Buffer.concat([validatorAddress, signatureType]);
                        signatureHex = ethUtil.bufferToHex(signature);
                        orderHashHex = order_utils_1.orderHashUtils.getOrderHashHex(signedOrder);
                        return [4 /*yield*/, signatureValidator.publicIsValidSignature.callAsync(orderHashHex, signerAddress, signatureHex)];
                    case 1:
                        isValidSignature = _a.sent();
                        expect(isValidSignature).to.be.true();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should return false when SignatureType=Validator, signature is invalid and validator is approved', function () { return __awaiter(_this, void 0, void 0, function () {
            var validatorAddress, signatureType, signature, signatureHex, orderHashHex, isValidSignature;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        validatorAddress = ethUtil.toBuffer("" + testValidator.address);
                        signatureType = ethUtil.toBuffer("0x" + types_1.SignatureType.Validator);
                        signature = Buffer.concat([validatorAddress, signatureType]);
                        signatureHex = ethUtil.bufferToHex(signature);
                        orderHashHex = order_utils_1.orderHashUtils.getOrderHashHex(signedOrder);
                        return [4 /*yield*/, signatureValidator.publicIsValidSignature.callAsync(orderHashHex, notSignerAddress, signatureHex)];
                    case 1:
                        isValidSignature = _a.sent();
                        expect(isValidSignature).to.be.false();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should revert when `isValidSignature` attempts to update state and SignatureType=Validator', function () { return __awaiter(_this, void 0, void 0, function () {
            var validatorAddress, signatureType, signature, signatureHex, orderHashHex;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        validatorAddress = ethUtil.toBuffer("" + maliciousValidator.address);
                        signatureType = ethUtil.toBuffer("0x" + types_1.SignatureType.Validator);
                        signature = Buffer.concat([validatorAddress, signatureType]);
                        signatureHex = ethUtil.bufferToHex(signature);
                        orderHashHex = order_utils_1.orderHashUtils.getOrderHashHex(signedOrder);
                        return [4 /*yield*/, contracts_test_utils_1.expectContractCallFailedAsync(signatureValidator.publicIsValidSignature.callAsync(orderHashHex, signerAddress, signatureHex), types_1.RevertReason.ValidatorError)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should return false when SignatureType=Validator, signature is valid and validator is not approved', function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, _b, validatorAddress, signatureType, signature, signatureHex, orderHashHex, isValidSignature;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = contracts_test_utils_1.web3Wrapper).awaitTransactionSuccessAsync;
                        return [4 /*yield*/, signatureValidator.setSignatureValidatorApproval.sendTransactionAsync(testValidator.address, false, { from: signerAddress })];
                    case 1: 
                    // Set approval of signature validator to false
                    return [4 /*yield*/, _b.apply(_a, [_c.sent(),
                            contracts_test_utils_1.constants.AWAIT_TRANSACTION_MINED_MS])];
                    case 2:
                        // Set approval of signature validator to false
                        _c.sent();
                        validatorAddress = ethUtil.toBuffer("" + testValidator.address);
                        signatureType = ethUtil.toBuffer("0x" + types_1.SignatureType.Validator);
                        signature = Buffer.concat([validatorAddress, signatureType]);
                        signatureHex = ethUtil.bufferToHex(signature);
                        orderHashHex = order_utils_1.orderHashUtils.getOrderHashHex(signedOrder);
                        return [4 /*yield*/, signatureValidator.publicIsValidSignature.callAsync(orderHashHex, signerAddress, signatureHex)];
                    case 3:
                        isValidSignature = _c.sent();
                        expect(isValidSignature).to.be.false();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should return true when SignatureType=Presigned and signer has presigned hash', function () { return __awaiter(_this, void 0, void 0, function () {
            var orderHashHex, _a, _b, signature, signatureHex, isValidSignature;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        orderHashHex = order_utils_1.orderHashUtils.getOrderHashHex(signedOrder);
                        _b = (_a = contracts_test_utils_1.web3Wrapper).awaitTransactionSuccessAsync;
                        return [4 /*yield*/, signatureValidator.preSign.sendTransactionAsync(orderHashHex, signedOrder.makerAddress, signedOrder.signature)];
                    case 1: return [4 /*yield*/, _b.apply(_a, [_c.sent(),
                            contracts_test_utils_1.constants.AWAIT_TRANSACTION_MINED_MS])];
                    case 2:
                        _c.sent();
                        signature = ethUtil.toBuffer("0x" + types_1.SignatureType.PreSigned);
                        signatureHex = ethUtil.bufferToHex(signature);
                        return [4 /*yield*/, signatureValidator.publicIsValidSignature.callAsync(orderHashHex, signedOrder.makerAddress, signatureHex)];
                    case 3:
                        isValidSignature = _c.sent();
                        expect(isValidSignature).to.be.true();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should return false when SignatureType=Presigned and signer has not presigned hash', function () { return __awaiter(_this, void 0, void 0, function () {
            var signature, signatureHex, orderHashHex, isValidSignature;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        signature = ethUtil.toBuffer("0x" + types_1.SignatureType.PreSigned);
                        signatureHex = ethUtil.bufferToHex(signature);
                        orderHashHex = order_utils_1.orderHashUtils.getOrderHashHex(signedOrder);
                        return [4 /*yield*/, signatureValidator.publicIsValidSignature.callAsync(orderHashHex, signedOrder.makerAddress, signatureHex)];
                    case 1:
                        isValidSignature = _a.sent();
                        expect(isValidSignature).to.be.false();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should return true when message was signed by a Trezor One (firmware version 1.6.2)', function () { return __awaiter(_this, void 0, void 0, function () {
            var messageHash, signer, v, r, s, trezorSignatureType, signature, signatureHex, isValidSignature;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        messageHash = ethUtil.bufferToHex(ethUtil.toBuffer('++++++++++++++++++++++++++++++++'));
                        signer = '0xc28b145f10f0bcf0fc000e778615f8fd73490bad';
                        v = ethUtil.toBuffer('0x1c');
                        r = ethUtil.toBuffer('0x7b888b596ccf87f0bacab0dcb483124973f7420f169b4824d7a12534ac1e9832');
                        s = ethUtil.toBuffer('0x0c8e14f7edc01459e13965f1da56e0c23ed11e2cca932571eee1292178f90424');
                        trezorSignatureType = ethUtil.toBuffer("0x" + types_1.SignatureType.EthSign);
                        signature = Buffer.concat([v, r, s, trezorSignatureType]);
                        signatureHex = ethUtil.bufferToHex(signature);
                        return [4 /*yield*/, signatureValidator.publicIsValidSignature.callAsync(messageHash, signer, signatureHex)];
                    case 1:
                        isValidSignature = _a.sent();
                        expect(isValidSignature).to.be.true();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should return true when message was signed by a Trezor Model T (firmware version 2.0.7)', function () { return __awaiter(_this, void 0, void 0, function () {
            var messageHash, signer, v, r, s, trezorSignatureType, signature, signatureHex, isValidSignature;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        messageHash = ethUtil.bufferToHex(ethUtil.toBuffer('++++++++++++++++++++++++++++++++'));
                        signer = '0x98ce6d9345e8ffa7d99ee0822272fae9d2c0e895';
                        v = ethUtil.toBuffer('0x1c');
                        r = ethUtil.toBuffer('0x423b71062c327f0ec4fe199b8da0f34185e59b4c1cb4cc23df86cac4a601fb3f');
                        s = ethUtil.toBuffer('0x53810d6591b5348b7ee08ee812c874b0fdfb942c9849d59512c90e295221091f');
                        trezorSignatureType = ethUtil.toBuffer("0x" + types_1.SignatureType.EthSign);
                        signature = Buffer.concat([v, r, s, trezorSignatureType]);
                        signatureHex = ethUtil.bufferToHex(signature);
                        return [4 /*yield*/, signatureValidator.publicIsValidSignature.callAsync(messageHash, signer, signatureHex)];
                    case 1:
                        isValidSignature = _a.sent();
                        expect(isValidSignature).to.be.true();
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('setSignatureValidatorApproval', function () {
        it('should emit a SignatureValidatorApprovalSet with correct args when a validator is approved', function () { return __awaiter(_this, void 0, void 0, function () {
            var approval, res, _a, _b, log, logArgs;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        approval = true;
                        _b = (_a = signatureValidatorLogDecoder).getTxWithDecodedLogsAsync;
                        return [4 /*yield*/, signatureValidator.setSignatureValidatorApproval.sendTransactionAsync(testValidator.address, approval, {
                                from: signerAddress,
                            })];
                    case 1: return [4 /*yield*/, _b.apply(_a, [_c.sent()])];
                    case 2:
                        res = _c.sent();
                        expect(res.logs.length).to.equal(1);
                        log = res.logs[0];
                        logArgs = log.args;
                        expect(logArgs.signerAddress).to.equal(signerAddress);
                        expect(logArgs.validatorAddress).to.equal(testValidator.address);
                        expect(logArgs.approved).to.equal(approval);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should emit a SignatureValidatorApprovalSet with correct args when a validator is disapproved', function () { return __awaiter(_this, void 0, void 0, function () {
            var approval, res, _a, _b, log, logArgs;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        approval = false;
                        _b = (_a = signatureValidatorLogDecoder).getTxWithDecodedLogsAsync;
                        return [4 /*yield*/, signatureValidator.setSignatureValidatorApproval.sendTransactionAsync(testValidator.address, approval, {
                                from: signerAddress,
                            })];
                    case 1: return [4 /*yield*/, _b.apply(_a, [_c.sent()])];
                    case 2:
                        res = _c.sent();
                        expect(res.logs.length).to.equal(1);
                        log = res.logs[0];
                        logArgs = log.args;
                        expect(logArgs.signerAddress).to.equal(signerAddress);
                        expect(logArgs.validatorAddress).to.equal(testValidator.address);
                        expect(logArgs.approved).to.equal(approval);
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
// tslint:disable:max-file-line-count
// tslint:enable:no-unnecessary-type-assertion
//# sourceMappingURL=signature_validator.js.map