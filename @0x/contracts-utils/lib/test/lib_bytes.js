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
var order_utils_1 = require("@0x/order-utils");
var types_1 = require("@0x/types");
var utils_1 = require("@0x/utils");
var BN = require("bn.js");
var chai = require("chai");
var ethUtil = require("ethereumjs-util");
var _ = require("lodash");
var src_1 = require("../src");
contracts_test_utils_1.chaiSetup.configure();
var expect = chai.expect;
var blockchainLifecycle = new dev_utils_1.BlockchainLifecycle(contracts_test_utils_1.web3Wrapper);
// BUG: Ideally we would use Buffer.from(memory).toString('hex')
// https://github.com/Microsoft/TypeScript/issues/23155
var toHex = function (buf) { return buf.reduce(function (a, v) { return a + ("00" + v.toString(16)).slice(-2); }, '0x'); };
var fromHex = function (str) { return Uint8Array.from(Buffer.from(str.slice(2), 'hex')); };
describe('LibBytes', function () {
    var libBytes;
    var byteArrayShorterThan32Bytes = '0x012345';
    var byteArrayShorterThan20Bytes = byteArrayShorterThan32Bytes;
    var byteArrayLongerThan32Bytes = '0x0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef';
    var byteArrayLongerThan32BytesFirstBytesSwapped = '0x2301456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef';
    var byteArrayLongerThan32BytesLastBytesSwapped = '0x0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789abefcd';
    var testAddress;
    var testAddressB;
    var testBytes32 = '0x102030405060708090a0b0c0d0e0f0102030405060708090a0b0c0d0e0f01020';
    var testBytes32B = '0x534877abd8443578526845cdfef020047528759477fedef87346527659aced32';
    var testUint256 = new utils_1.BigNumber(testBytes32, 16);
    var testUint256B = new utils_1.BigNumber(testBytes32B, 16);
    var testBytes4 = '0xabcdef12';
    var testByte = '0xab';
    var shortData;
    var shortTestBytes;
    var shortTestBytesAsBuffer;
    var wordOfData;
    var wordOfTestBytes;
    var wordOfTestBytesAsBuffer;
    var longData;
    var longTestBytes;
    var longTestBytesAsBuffer;
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
        var accounts, byteArrayShorterThan32BytesLength, byteArrayLongerThan32BytesLength, testBytes32Length, encodedShortData, shortDataLength, encodedShortDataLength, encodedWordOfData, wordOfDataLength, encodedWordOfDataLength, longDataLength, encodedLongDataLength;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, contracts_test_utils_1.web3Wrapper.getAvailableAddressesAsync()];
                case 1:
                    accounts = _a.sent();
                    testAddress = accounts[1];
                    testAddressB = accounts[2];
                    return [4 /*yield*/, src_1.TestLibBytesContract.deployFrom0xArtifactAsync(src_1.artifacts.TestLibBytes, contracts_test_utils_1.provider, contracts_test_utils_1.txDefaults)];
                case 2:
                    // Deploy LibBytes
                    libBytes = _a.sent();
                    byteArrayShorterThan32BytesLength = ethUtil.toBuffer(byteArrayShorterThan32Bytes).byteLength;
                    expect(byteArrayShorterThan32BytesLength).to.be.lessThan(32);
                    byteArrayLongerThan32BytesLength = ethUtil.toBuffer(byteArrayLongerThan32Bytes).byteLength;
                    expect(byteArrayLongerThan32BytesLength).to.be.greaterThan(32);
                    testBytes32Length = ethUtil.toBuffer(testBytes32).byteLength;
                    expect(testBytes32Length).to.be.equal(32);
                    // Create short test bytes
                    shortData = '0xffffaa';
                    encodedShortData = ethUtil.toBuffer(shortData);
                    shortDataLength = new utils_1.BigNumber(encodedShortData.byteLength);
                    encodedShortDataLength = contracts_test_utils_1.typeEncodingUtils.encodeUint256(shortDataLength);
                    shortTestBytesAsBuffer = Buffer.concat([encodedShortDataLength, encodedShortData]);
                    shortTestBytes = ethUtil.bufferToHex(shortTestBytesAsBuffer);
                    // Create test bytes one word in length
                    wordOfData = ethUtil.bufferToHex(contracts_test_utils_1.typeEncodingUtils.encodeUint256(order_utils_1.generatePseudoRandomSalt()));
                    encodedWordOfData = ethUtil.toBuffer(wordOfData);
                    wordOfDataLength = new utils_1.BigNumber(encodedWordOfData.byteLength);
                    encodedWordOfDataLength = contracts_test_utils_1.typeEncodingUtils.encodeUint256(wordOfDataLength);
                    wordOfTestBytesAsBuffer = Buffer.concat([encodedWordOfDataLength, encodedWordOfData]);
                    wordOfTestBytes = ethUtil.bufferToHex(wordOfTestBytesAsBuffer);
                    // Create long test bytes (combines short test bytes with word of test bytes)
                    longData = ethUtil.bufferToHex(Buffer.concat([encodedShortData, encodedWordOfData]));
                    longDataLength = new utils_1.BigNumber(encodedShortData.byteLength + encodedWordOfData.byteLength);
                    encodedLongDataLength = contracts_test_utils_1.typeEncodingUtils.encodeUint256(longDataLength);
                    longTestBytesAsBuffer = Buffer.concat([encodedLongDataLength, encodedShortData, encodedWordOfData]);
                    longTestBytes = ethUtil.bufferToHex(longTestBytesAsBuffer);
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
    describe('popLastByte', function () {
        it('should revert if length is 0', function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, contracts_test_utils_1.expectContractCallFailedAsync(libBytes.publicPopLastByte.callAsync(contracts_test_utils_1.constants.NULL_BYTES), types_1.RevertReason.LibBytesGreaterThanZeroLengthRequired)];
            });
        }); });
        it('should pop the last byte from the input and return it when array holds more than 1 byte', function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, newBytes, poppedByte, expectedNewBytes, expectedPoppedByte;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, libBytes.publicPopLastByte.callAsync(byteArrayLongerThan32Bytes)];
                    case 1:
                        _a = __read.apply(void 0, [_b.sent(), 2]), newBytes = _a[0], poppedByte = _a[1];
                        expectedNewBytes = byteArrayLongerThan32Bytes.slice(0, -2);
                        expectedPoppedByte = "0x" + byteArrayLongerThan32Bytes.slice(-2);
                        expect(newBytes).to.equal(expectedNewBytes);
                        expect(poppedByte).to.equal(expectedPoppedByte);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should pop the last byte from the input and return it when array is exactly 1 byte', function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, newBytes, poppedByte, expectedNewBytes;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, libBytes.publicPopLastByte.callAsync(testByte)];
                    case 1:
                        _a = __read.apply(void 0, [_b.sent(), 2]), newBytes = _a[0], poppedByte = _a[1];
                        expectedNewBytes = '0x';
                        expect(newBytes).to.equal(expectedNewBytes);
                        return [2 /*return*/, expect(poppedByte).to.be.equal(testByte)];
                }
            });
        }); });
    });
    describe('popLast20Bytes', function () {
        it('should revert if length is less than 20', function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, contracts_test_utils_1.expectContractCallFailedAsync(libBytes.publicPopLast20Bytes.callAsync(byteArrayShorterThan20Bytes), types_1.RevertReason.LibBytesGreaterOrEqualTo20LengthRequired)];
            });
        }); });
        it('should pop the last 20 bytes from the input and return it when array holds more than 20 bytes', function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, newBytes, poppedAddress, expectedNewBytes, expectedPoppedAddress;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, libBytes.publicPopLast20Bytes.callAsync(byteArrayLongerThan32Bytes)];
                    case 1:
                        _a = __read.apply(void 0, [_b.sent(), 2]), newBytes = _a[0], poppedAddress = _a[1];
                        expectedNewBytes = byteArrayLongerThan32Bytes.slice(0, -40);
                        expectedPoppedAddress = "0x" + byteArrayLongerThan32Bytes.slice(-40);
                        expect(newBytes).to.equal(expectedNewBytes);
                        expect(poppedAddress).to.equal(expectedPoppedAddress);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should pop the last 20 bytes from the input and return it when array is exactly 20 bytes', function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, newBytes, poppedAddress, expectedNewBytes, expectedPoppedAddress;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, libBytes.publicPopLast20Bytes.callAsync(testAddress)];
                    case 1:
                        _a = __read.apply(void 0, [_b.sent(), 2]), newBytes = _a[0], poppedAddress = _a[1];
                        expectedNewBytes = '0x';
                        expectedPoppedAddress = testAddress;
                        expect(newBytes).to.equal(expectedNewBytes);
                        expect(poppedAddress).to.equal(expectedPoppedAddress);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('equals', function () {
        it('should return true if byte arrays are equal (both arrays < 32 bytes)', function () { return __awaiter(_this, void 0, void 0, function () {
            var isEqual;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, libBytes.publicEquals.callAsync(byteArrayShorterThan32Bytes, byteArrayShorterThan32Bytes)];
                    case 1:
                        isEqual = _a.sent();
                        return [2 /*return*/, expect(isEqual).to.be.true()];
                }
            });
        }); });
        it('should return true if byte arrays are equal (both arrays > 32 bytes)', function () { return __awaiter(_this, void 0, void 0, function () {
            var isEqual;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, libBytes.publicEquals.callAsync(byteArrayLongerThan32Bytes, byteArrayLongerThan32Bytes)];
                    case 1:
                        isEqual = _a.sent();
                        return [2 /*return*/, expect(isEqual).to.be.true()];
                }
            });
        }); });
        it('should return false if byte arrays are not equal (first array < 32 bytes, second array > 32 bytes)', function () { return __awaiter(_this, void 0, void 0, function () {
            var isEqual;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, libBytes.publicEquals.callAsync(byteArrayShorterThan32Bytes, byteArrayLongerThan32Bytes)];
                    case 1:
                        isEqual = _a.sent();
                        return [2 /*return*/, expect(isEqual).to.be.false()];
                }
            });
        }); });
        it('should return false if byte arrays are not equal (first array > 32 bytes, second array < 32 bytes)', function () { return __awaiter(_this, void 0, void 0, function () {
            var isEqual;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, libBytes.publicEquals.callAsync(byteArrayLongerThan32Bytes, byteArrayShorterThan32Bytes)];
                    case 1:
                        isEqual = _a.sent();
                        return [2 /*return*/, expect(isEqual).to.be.false()];
                }
            });
        }); });
        it('should return false if byte arrays are not equal (same length, but a byte in first word differs)', function () { return __awaiter(_this, void 0, void 0, function () {
            var isEqual;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, libBytes.publicEquals.callAsync(byteArrayLongerThan32BytesFirstBytesSwapped, byteArrayLongerThan32Bytes)];
                    case 1:
                        isEqual = _a.sent();
                        return [2 /*return*/, expect(isEqual).to.be.false()];
                }
            });
        }); });
        it('should return false if byte arrays are not equal (same length, but a byte in last word differs)', function () { return __awaiter(_this, void 0, void 0, function () {
            var isEqual;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, libBytes.publicEquals.callAsync(byteArrayLongerThan32BytesLastBytesSwapped, byteArrayLongerThan32Bytes)];
                    case 1:
                        isEqual = _a.sent();
                        return [2 /*return*/, expect(isEqual).to.be.false()];
                }
            });
        }); });
        describe('should ignore trailing data', function () {
            it('should return true when both < 32 bytes', function () { return __awaiter(_this, void 0, void 0, function () {
                var isEqual;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, libBytes.publicEqualsPop1.callAsync('0x0102', '0x0103')];
                        case 1:
                            isEqual = _a.sent();
                            return [2 /*return*/, expect(isEqual).to.be.true()];
                    }
                });
            }); });
        });
    });
    describe('deepCopyBytes', function () {
        it('should revert if dest is shorter than source', function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, contracts_test_utils_1.expectContractCallFailedAsync(libBytes.publicDeepCopyBytes.callAsync(byteArrayShorterThan32Bytes, byteArrayLongerThan32Bytes), types_1.RevertReason.LibBytesGreaterOrEqualToSourceBytesLengthRequired)];
            });
        }); });
        it('should overwrite dest with source if source and dest have equal length', function () { return __awaiter(_this, void 0, void 0, function () {
            var zeroedByteArrayLongerThan32Bytes, zeroedBytesAfterCopy;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        zeroedByteArrayLongerThan32Bytes = "0x" + _.repeat('0', byteArrayLongerThan32Bytes.length - 2);
                        return [4 /*yield*/, libBytes.publicDeepCopyBytes.callAsync(zeroedByteArrayLongerThan32Bytes, byteArrayLongerThan32Bytes)];
                    case 1:
                        zeroedBytesAfterCopy = _a.sent();
                        return [2 /*return*/, expect(zeroedBytesAfterCopy).to.be.equal(byteArrayLongerThan32Bytes)];
                }
            });
        }); });
        it('should overwrite the leftmost len(source) bytes of dest if dest is larger than source', function () { return __awaiter(_this, void 0, void 0, function () {
            var zeroedByteArrayLongerThan32Bytes, zeroedBytesAfterCopy, copiedBytes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        zeroedByteArrayLongerThan32Bytes = "0x" + _.repeat('0', byteArrayLongerThan32Bytes.length * 2);
                        return [4 /*yield*/, libBytes.publicDeepCopyBytes.callAsync(zeroedByteArrayLongerThan32Bytes, byteArrayLongerThan32Bytes)];
                    case 1:
                        zeroedBytesAfterCopy = _a.sent();
                        copiedBytes = zeroedBytesAfterCopy.slice(0, byteArrayLongerThan32Bytes.length);
                        return [2 /*return*/, expect(copiedBytes).to.be.equal(byteArrayLongerThan32Bytes)];
                }
            });
        }); });
        it('should not overwrite the rightmost bytes of dest if dest is larger than source', function () { return __awaiter(_this, void 0, void 0, function () {
            var zeroedByteArrayLongerThan32Bytes, zeroedBytesAfterCopy, expectedNotCopiedBytes, notCopiedBytes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        zeroedByteArrayLongerThan32Bytes = "0x" + _.repeat('0', byteArrayLongerThan32Bytes.length * 2);
                        return [4 /*yield*/, libBytes.publicDeepCopyBytes.callAsync(zeroedByteArrayLongerThan32Bytes, byteArrayLongerThan32Bytes)];
                    case 1:
                        zeroedBytesAfterCopy = _a.sent();
                        expectedNotCopiedBytes = zeroedByteArrayLongerThan32Bytes.slice(byteArrayLongerThan32Bytes.length);
                        notCopiedBytes = zeroedBytesAfterCopy.slice(byteArrayLongerThan32Bytes.length);
                        return [2 /*return*/, expect(notCopiedBytes).to.be.equal(expectedNotCopiedBytes)];
                }
            });
        }); });
    });
    describe('readAddress', function () {
        it('should successfully read address when the address takes up the whole array', function () { return __awaiter(_this, void 0, void 0, function () {
            var byteArray, testAddressOffset, address;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        byteArray = ethUtil.addHexPrefix(testAddress);
                        testAddressOffset = new utils_1.BigNumber(0);
                        return [4 /*yield*/, libBytes.publicReadAddress.callAsync(byteArray, testAddressOffset)];
                    case 1:
                        address = _a.sent();
                        return [2 /*return*/, expect(address).to.be.equal(testAddress)];
                }
            });
        }); });
        it('should successfully read address when it is offset in the array', function () { return __awaiter(_this, void 0, void 0, function () {
            var addressByteArrayBuffer, prefixByteArrayBuffer, combinedByteArrayBuffer, combinedByteArray, testAddressOffset, address;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        addressByteArrayBuffer = ethUtil.toBuffer(testAddress);
                        prefixByteArrayBuffer = ethUtil.toBuffer('0xabcdef');
                        combinedByteArrayBuffer = Buffer.concat([prefixByteArrayBuffer, addressByteArrayBuffer]);
                        combinedByteArray = ethUtil.bufferToHex(combinedByteArrayBuffer);
                        testAddressOffset = new utils_1.BigNumber(prefixByteArrayBuffer.byteLength);
                        return [4 /*yield*/, libBytes.publicReadAddress.callAsync(combinedByteArray, testAddressOffset)];
                    case 1:
                        address = _a.sent();
                        return [2 /*return*/, expect(address).to.be.equal(testAddress)];
                }
            });
        }); });
        it('should fail if the byte array is too short to hold an address', function () { return __awaiter(_this, void 0, void 0, function () {
            var shortByteArray, offset;
            return __generator(this, function (_a) {
                shortByteArray = '0xabcdef';
                offset = new utils_1.BigNumber(0);
                return [2 /*return*/, contracts_test_utils_1.expectContractCallFailedAsync(libBytes.publicReadAddress.callAsync(shortByteArray, offset), types_1.RevertReason.LibBytesGreaterOrEqualTo20LengthRequired)];
            });
        }); });
        it('should fail if the length between the offset and end of the byte array is too short to hold an address', function () { return __awaiter(_this, void 0, void 0, function () {
            var byteArray, badOffset;
            return __generator(this, function (_a) {
                byteArray = testAddress;
                badOffset = new utils_1.BigNumber(ethUtil.toBuffer(byteArray).byteLength);
                return [2 /*return*/, contracts_test_utils_1.expectContractCallFailedAsync(libBytes.publicReadAddress.callAsync(byteArray, badOffset), types_1.RevertReason.LibBytesGreaterOrEqualTo20LengthRequired)];
            });
        }); });
    });
    describe('writeAddress', function () {
        it('should successfully write address when the address takes up the whole array', function () { return __awaiter(_this, void 0, void 0, function () {
            var byteArray, testAddressOffset, newByteArray;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        byteArray = testAddress;
                        testAddressOffset = new utils_1.BigNumber(0);
                        return [4 /*yield*/, libBytes.publicWriteAddress.callAsync(byteArray, testAddressOffset, testAddressB)];
                    case 1:
                        newByteArray = _a.sent();
                        return [2 /*return*/, expect(newByteArray).to.be.equal(testAddressB)];
                }
            });
        }); });
        it('should successfully write address when it is offset in the array', function () { return __awaiter(_this, void 0, void 0, function () {
            var addressByteArrayBuffer, prefixByteArrayBuffer, combinedByteArrayBuffer, combinedByteArray, testAddressOffset, newByteArray, newByteArrayBuffer, addressFromOffsetBuffer, addressFromOffset;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        addressByteArrayBuffer = ethUtil.toBuffer(testAddress);
                        prefixByteArrayBuffer = ethUtil.toBuffer('0xabcdef');
                        combinedByteArrayBuffer = Buffer.concat([prefixByteArrayBuffer, addressByteArrayBuffer]);
                        combinedByteArray = ethUtil.bufferToHex(combinedByteArrayBuffer);
                        testAddressOffset = new utils_1.BigNumber(prefixByteArrayBuffer.byteLength);
                        return [4 /*yield*/, libBytes.publicWriteAddress.callAsync(combinedByteArray, testAddressOffset, testAddressB)];
                    case 1:
                        newByteArray = _a.sent();
                        newByteArrayBuffer = ethUtil.toBuffer(newByteArray);
                        addressFromOffsetBuffer = newByteArrayBuffer.slice(prefixByteArrayBuffer.byteLength);
                        addressFromOffset = ethUtil.addHexPrefix(ethUtil.bufferToHex(addressFromOffsetBuffer));
                        return [2 /*return*/, expect(addressFromOffset).to.be.equal(testAddressB)];
                }
            });
        }); });
        it('should fail if the byte array is too short to hold an address', function () { return __awaiter(_this, void 0, void 0, function () {
            var offset;
            return __generator(this, function (_a) {
                offset = new utils_1.BigNumber(0);
                return [2 /*return*/, contracts_test_utils_1.expectContractCallFailedAsync(libBytes.publicWriteAddress.callAsync(byteArrayShorterThan20Bytes, offset, testAddress), types_1.RevertReason.LibBytesGreaterOrEqualTo20LengthRequired)];
            });
        }); });
        it('should fail if the length between the offset and end of the byte array is too short to hold an address', function () { return __awaiter(_this, void 0, void 0, function () {
            var byteArray, badOffset;
            return __generator(this, function (_a) {
                byteArray = byteArrayLongerThan32Bytes;
                badOffset = new utils_1.BigNumber(ethUtil.toBuffer(byteArray).byteLength);
                return [2 /*return*/, contracts_test_utils_1.expectContractCallFailedAsync(libBytes.publicWriteAddress.callAsync(byteArray, badOffset, testAddress), types_1.RevertReason.LibBytesGreaterOrEqualTo20LengthRequired)];
            });
        }); });
    });
    describe('readBytes32', function () {
        it('should successfully read bytes32 when the bytes32 takes up the whole array', function () { return __awaiter(_this, void 0, void 0, function () {
            var testBytes32Offset, bytes32;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        testBytes32Offset = new utils_1.BigNumber(0);
                        return [4 /*yield*/, libBytes.publicReadBytes32.callAsync(testBytes32, testBytes32Offset)];
                    case 1:
                        bytes32 = _a.sent();
                        return [2 /*return*/, expect(bytes32).to.be.equal(testBytes32)];
                }
            });
        }); });
        it('should successfully read bytes32 when it is offset in the array', function () { return __awaiter(_this, void 0, void 0, function () {
            var bytes32ByteArrayBuffer, prefixByteArrayBuffer, combinedByteArrayBuffer, combinedByteArray, testBytes32Offset, bytes32;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        bytes32ByteArrayBuffer = ethUtil.toBuffer(testBytes32);
                        prefixByteArrayBuffer = ethUtil.toBuffer('0xabcdef');
                        combinedByteArrayBuffer = Buffer.concat([prefixByteArrayBuffer, bytes32ByteArrayBuffer]);
                        combinedByteArray = ethUtil.bufferToHex(combinedByteArrayBuffer);
                        testBytes32Offset = new utils_1.BigNumber(prefixByteArrayBuffer.byteLength);
                        return [4 /*yield*/, libBytes.publicReadBytes32.callAsync(combinedByteArray, testBytes32Offset)];
                    case 1:
                        bytes32 = _a.sent();
                        return [2 /*return*/, expect(bytes32).to.be.equal(testBytes32)];
                }
            });
        }); });
        it('should fail if the byte array is too short to hold a bytes32', function () { return __awaiter(_this, void 0, void 0, function () {
            var offset;
            return __generator(this, function (_a) {
                offset = new utils_1.BigNumber(0);
                return [2 /*return*/, contracts_test_utils_1.expectContractCallFailedAsync(libBytes.publicReadBytes32.callAsync(byteArrayShorterThan32Bytes, offset), types_1.RevertReason.LibBytesGreaterOrEqualTo32LengthRequired)];
            });
        }); });
        it('should fail if the length between the offset and end of the byte array is too short to hold a bytes32', function () { return __awaiter(_this, void 0, void 0, function () {
            var badOffset;
            return __generator(this, function (_a) {
                badOffset = new utils_1.BigNumber(ethUtil.toBuffer(testBytes32).byteLength);
                return [2 /*return*/, contracts_test_utils_1.expectContractCallFailedAsync(libBytes.publicReadBytes32.callAsync(testBytes32, badOffset), types_1.RevertReason.LibBytesGreaterOrEqualTo32LengthRequired)];
            });
        }); });
    });
    describe('writeBytes32', function () {
        it('should successfully write bytes32 when the address takes up the whole array', function () { return __awaiter(_this, void 0, void 0, function () {
            var byteArray, testBytes32Offset, newByteArray;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        byteArray = testBytes32;
                        testBytes32Offset = new utils_1.BigNumber(0);
                        return [4 /*yield*/, libBytes.publicWriteBytes32.callAsync(byteArray, testBytes32Offset, testBytes32B)];
                    case 1:
                        newByteArray = _a.sent();
                        return [2 /*return*/, expect(newByteArray).to.be.equal(testBytes32B)];
                }
            });
        }); });
        it('should successfully write bytes32 when it is offset in the array', function () { return __awaiter(_this, void 0, void 0, function () {
            var bytes32ByteArrayBuffer, prefixByteArrayBuffer, combinedByteArrayBuffer, combinedByteArray, testBytes32Offset, newByteArray, newByteArrayBuffer, bytes32FromOffsetBuffer, bytes32FromOffset;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        bytes32ByteArrayBuffer = ethUtil.toBuffer(testBytes32);
                        prefixByteArrayBuffer = ethUtil.toBuffer('0xabcdef');
                        combinedByteArrayBuffer = Buffer.concat([prefixByteArrayBuffer, bytes32ByteArrayBuffer]);
                        combinedByteArray = ethUtil.bufferToHex(combinedByteArrayBuffer);
                        testBytes32Offset = new utils_1.BigNumber(prefixByteArrayBuffer.byteLength);
                        return [4 /*yield*/, libBytes.publicWriteBytes32.callAsync(combinedByteArray, testBytes32Offset, testBytes32B)];
                    case 1:
                        newByteArray = _a.sent();
                        newByteArrayBuffer = ethUtil.toBuffer(newByteArray);
                        bytes32FromOffsetBuffer = newByteArrayBuffer.slice(prefixByteArrayBuffer.byteLength);
                        bytes32FromOffset = ethUtil.addHexPrefix(ethUtil.bufferToHex(bytes32FromOffsetBuffer));
                        return [2 /*return*/, expect(bytes32FromOffset).to.be.equal(testBytes32B)];
                }
            });
        }); });
        it('should fail if the byte array is too short to hold a bytes32', function () { return __awaiter(_this, void 0, void 0, function () {
            var offset;
            return __generator(this, function (_a) {
                offset = new utils_1.BigNumber(0);
                return [2 /*return*/, contracts_test_utils_1.expectContractCallFailedAsync(libBytes.publicWriteBytes32.callAsync(byteArrayShorterThan32Bytes, offset, testBytes32), types_1.RevertReason.LibBytesGreaterOrEqualTo32LengthRequired)];
            });
        }); });
        it('should fail if the length between the offset and end of the byte array is too short to hold a bytes32', function () { return __awaiter(_this, void 0, void 0, function () {
            var byteArray, badOffset;
            return __generator(this, function (_a) {
                byteArray = byteArrayLongerThan32Bytes;
                badOffset = new utils_1.BigNumber(ethUtil.toBuffer(byteArray).byteLength);
                return [2 /*return*/, contracts_test_utils_1.expectContractCallFailedAsync(libBytes.publicWriteBytes32.callAsync(byteArray, badOffset, testBytes32), types_1.RevertReason.LibBytesGreaterOrEqualTo32LengthRequired)];
            });
        }); });
    });
    describe('readUint256', function () {
        it('should successfully read uint256 when the uint256 takes up the whole array', function () { return __awaiter(_this, void 0, void 0, function () {
            var formattedTestUint256, testUint256AsBuffer, byteArray, testUint256Offset, uint256;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        formattedTestUint256 = new BN(testUint256.toString(10));
                        testUint256AsBuffer = ethUtil.toBuffer(formattedTestUint256);
                        byteArray = ethUtil.bufferToHex(testUint256AsBuffer);
                        testUint256Offset = new utils_1.BigNumber(0);
                        return [4 /*yield*/, libBytes.publicReadUint256.callAsync(byteArray, testUint256Offset)];
                    case 1:
                        uint256 = _a.sent();
                        return [2 /*return*/, expect(uint256).to.bignumber.equal(testUint256)];
                }
            });
        }); });
        it('should successfully read uint256 when it is offset in the array', function () { return __awaiter(_this, void 0, void 0, function () {
            var prefixByteArrayBuffer, formattedTestUint256, testUint256AsBuffer, combinedByteArrayBuffer, combinedByteArray, testUint256Offset, uint256;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        prefixByteArrayBuffer = ethUtil.toBuffer('0xabcdef');
                        formattedTestUint256 = new BN(testUint256.toString(10));
                        testUint256AsBuffer = ethUtil.toBuffer(formattedTestUint256);
                        combinedByteArrayBuffer = Buffer.concat([prefixByteArrayBuffer, testUint256AsBuffer]);
                        combinedByteArray = ethUtil.bufferToHex(combinedByteArrayBuffer);
                        testUint256Offset = new utils_1.BigNumber(prefixByteArrayBuffer.byteLength);
                        return [4 /*yield*/, libBytes.publicReadUint256.callAsync(combinedByteArray, testUint256Offset)];
                    case 1:
                        uint256 = _a.sent();
                        return [2 /*return*/, expect(uint256).to.bignumber.equal(testUint256)];
                }
            });
        }); });
        it('should fail if the byte array is too short to hold a uint256', function () { return __awaiter(_this, void 0, void 0, function () {
            var offset;
            return __generator(this, function (_a) {
                offset = new utils_1.BigNumber(0);
                return [2 /*return*/, contracts_test_utils_1.expectContractCallFailedAsync(libBytes.publicReadUint256.callAsync(byteArrayShorterThan32Bytes, offset), types_1.RevertReason.LibBytesGreaterOrEqualTo32LengthRequired)];
            });
        }); });
        it('should fail if the length between the offset and end of the byte array is too short to hold a uint256', function () { return __awaiter(_this, void 0, void 0, function () {
            var formattedTestUint256, testUint256AsBuffer, byteArray, badOffset;
            return __generator(this, function (_a) {
                formattedTestUint256 = new BN(testUint256.toString(10));
                testUint256AsBuffer = ethUtil.toBuffer(formattedTestUint256);
                byteArray = ethUtil.bufferToHex(testUint256AsBuffer);
                badOffset = new utils_1.BigNumber(testUint256AsBuffer.byteLength);
                return [2 /*return*/, contracts_test_utils_1.expectContractCallFailedAsync(libBytes.publicReadUint256.callAsync(byteArray, badOffset), types_1.RevertReason.LibBytesGreaterOrEqualTo32LengthRequired)];
            });
        }); });
    });
    describe('writeUint256', function () {
        it('should successfully write uint256 when the address takes up the whole array', function () { return __awaiter(_this, void 0, void 0, function () {
            var byteArray, testUint256Offset, newByteArray, newByteArrayAsUint256;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        byteArray = testBytes32;
                        testUint256Offset = new utils_1.BigNumber(0);
                        return [4 /*yield*/, libBytes.publicWriteUint256.callAsync(byteArray, testUint256Offset, testUint256B)];
                    case 1:
                        newByteArray = _a.sent();
                        newByteArrayAsUint256 = new utils_1.BigNumber(newByteArray, 16);
                        return [2 /*return*/, expect(newByteArrayAsUint256).to.be.bignumber.equal(testUint256B)];
                }
            });
        }); });
        it('should successfully write uint256 when it is offset in the array', function () { return __awaiter(_this, void 0, void 0, function () {
            var bytes32ByteArrayBuffer, prefixByteArrayBuffer, combinedByteArrayBuffer, combinedByteArray, testUint256Offset, newByteArray, newByteArrayBuffer, uint256FromOffsetBuffer, uint256FromOffset;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        bytes32ByteArrayBuffer = ethUtil.toBuffer(testBytes32);
                        prefixByteArrayBuffer = ethUtil.toBuffer('0xabcdef');
                        combinedByteArrayBuffer = Buffer.concat([prefixByteArrayBuffer, bytes32ByteArrayBuffer]);
                        combinedByteArray = ethUtil.bufferToHex(combinedByteArrayBuffer);
                        testUint256Offset = new utils_1.BigNumber(prefixByteArrayBuffer.byteLength);
                        return [4 /*yield*/, libBytes.publicWriteUint256.callAsync(combinedByteArray, testUint256Offset, testUint256B)];
                    case 1:
                        newByteArray = _a.sent();
                        newByteArrayBuffer = ethUtil.toBuffer(newByteArray);
                        uint256FromOffsetBuffer = newByteArrayBuffer.slice(prefixByteArrayBuffer.byteLength);
                        uint256FromOffset = new utils_1.BigNumber(ethUtil.addHexPrefix(ethUtil.bufferToHex(uint256FromOffsetBuffer)), 16);
                        return [2 /*return*/, expect(uint256FromOffset).to.be.bignumber.equal(testUint256B)];
                }
            });
        }); });
        it('should fail if the byte array is too short to hold a uint256', function () { return __awaiter(_this, void 0, void 0, function () {
            var offset;
            return __generator(this, function (_a) {
                offset = new utils_1.BigNumber(0);
                return [2 /*return*/, contracts_test_utils_1.expectContractCallFailedAsync(libBytes.publicWriteUint256.callAsync(byteArrayShorterThan32Bytes, offset, testUint256), types_1.RevertReason.LibBytesGreaterOrEqualTo32LengthRequired)];
            });
        }); });
        it('should fail if the length between the offset and end of the byte array is too short to hold a uint256', function () { return __awaiter(_this, void 0, void 0, function () {
            var byteArray, badOffset;
            return __generator(this, function (_a) {
                byteArray = byteArrayLongerThan32Bytes;
                badOffset = new utils_1.BigNumber(ethUtil.toBuffer(byteArray).byteLength);
                return [2 /*return*/, contracts_test_utils_1.expectContractCallFailedAsync(libBytes.publicWriteUint256.callAsync(byteArray, badOffset, testUint256), types_1.RevertReason.LibBytesGreaterOrEqualTo32LengthRequired)];
            });
        }); });
    });
    describe('readBytes4', function () {
        // AssertionError: expected promise to be rejected with an error including 'revert' but it was fulfilled with '0x08c379a0'
        it('should revert if byte array has a length < 4', function () { return __awaiter(_this, void 0, void 0, function () {
            var byteArrayLessThan4Bytes, offset;
            return __generator(this, function (_a) {
                byteArrayLessThan4Bytes = '0x010101';
                offset = new utils_1.BigNumber(0);
                return [2 /*return*/, contracts_test_utils_1.expectContractCallFailedAsync(libBytes.publicReadBytes4.callAsync(byteArrayLessThan4Bytes, offset), types_1.RevertReason.LibBytesGreaterOrEqualTo4LengthRequired)];
            });
        }); });
        it('should return the first 4 bytes of a byte array of arbitrary length', function () { return __awaiter(_this, void 0, void 0, function () {
            var first4Bytes, expectedFirst4Bytes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, libBytes.publicReadBytes4.callAsync(byteArrayLongerThan32Bytes, new utils_1.BigNumber(0))];
                    case 1:
                        first4Bytes = _a.sent();
                        expectedFirst4Bytes = byteArrayLongerThan32Bytes.slice(0, 10);
                        expect(first4Bytes).to.equal(expectedFirst4Bytes);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should successfully read bytes4 when the bytes4 takes up the whole array', function () { return __awaiter(_this, void 0, void 0, function () {
            var testBytes4Offset, bytes4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        testBytes4Offset = new utils_1.BigNumber(0);
                        return [4 /*yield*/, libBytes.publicReadBytes4.callAsync(testBytes4, testBytes4Offset)];
                    case 1:
                        bytes4 = _a.sent();
                        return [2 /*return*/, expect(bytes4).to.be.equal(testBytes4)];
                }
            });
        }); });
        it('should successfully read bytes4 when it is offset in the array', function () { return __awaiter(_this, void 0, void 0, function () {
            var bytes4ByteArrayBuffer, prefixByteArrayBuffer, combinedByteArrayBuffer, combinedByteArray, testBytes4Offset, bytes4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        bytes4ByteArrayBuffer = ethUtil.toBuffer(testBytes4);
                        prefixByteArrayBuffer = ethUtil.toBuffer('0xabcdef');
                        combinedByteArrayBuffer = Buffer.concat([prefixByteArrayBuffer, bytes4ByteArrayBuffer]);
                        combinedByteArray = ethUtil.bufferToHex(combinedByteArrayBuffer);
                        testBytes4Offset = new utils_1.BigNumber(prefixByteArrayBuffer.byteLength);
                        return [4 /*yield*/, libBytes.publicReadBytes4.callAsync(combinedByteArray, testBytes4Offset)];
                    case 1:
                        bytes4 = _a.sent();
                        return [2 /*return*/, expect(bytes4).to.be.equal(testBytes4)];
                }
            });
        }); });
        it('should fail if the length between the offset and end of the byte array is too short to hold a bytes4', function () { return __awaiter(_this, void 0, void 0, function () {
            var badOffset;
            return __generator(this, function (_a) {
                badOffset = new utils_1.BigNumber(ethUtil.toBuffer(testBytes4).byteLength);
                return [2 /*return*/, contracts_test_utils_1.expectContractCallFailedAsync(libBytes.publicReadBytes4.callAsync(testBytes4, badOffset), types_1.RevertReason.LibBytesGreaterOrEqualTo4LengthRequired)];
            });
        }); });
    });
    describe('readBytesWithLength', function () {
        it('should successfully read short, nested array of bytes when it takes up the whole array', function () { return __awaiter(_this, void 0, void 0, function () {
            var testBytesOffset, bytes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        testBytesOffset = new utils_1.BigNumber(0);
                        return [4 /*yield*/, libBytes.publicReadBytesWithLength.callAsync(shortTestBytes, testBytesOffset)];
                    case 1:
                        bytes = _a.sent();
                        return [2 /*return*/, expect(bytes).to.be.equal(shortData)];
                }
            });
        }); });
        it('should successfully read short, nested array of bytes when it is offset in the array', function () { return __awaiter(_this, void 0, void 0, function () {
            var prefixByteArrayBuffer, combinedByteArrayBuffer, combinedByteArray, testUint256Offset, bytes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        prefixByteArrayBuffer = ethUtil.toBuffer('0xabcdef');
                        combinedByteArrayBuffer = Buffer.concat([prefixByteArrayBuffer, shortTestBytesAsBuffer]);
                        combinedByteArray = ethUtil.bufferToHex(combinedByteArrayBuffer);
                        testUint256Offset = new utils_1.BigNumber(prefixByteArrayBuffer.byteLength);
                        return [4 /*yield*/, libBytes.publicReadBytesWithLength.callAsync(combinedByteArray, testUint256Offset)];
                    case 1:
                        bytes = _a.sent();
                        return [2 /*return*/, expect(bytes).to.be.equal(shortData)];
                }
            });
        }); });
        it('should successfully read a nested array of bytes - one word in length - when it takes up the whole array', function () { return __awaiter(_this, void 0, void 0, function () {
            var testBytesOffset, bytes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        testBytesOffset = new utils_1.BigNumber(0);
                        return [4 /*yield*/, libBytes.publicReadBytesWithLength.callAsync(wordOfTestBytes, testBytesOffset)];
                    case 1:
                        bytes = _a.sent();
                        return [2 /*return*/, expect(bytes).to.be.equal(wordOfData)];
                }
            });
        }); });
        it('should successfully read a nested array of bytes - one word in length - when it is offset in the array', function () { return __awaiter(_this, void 0, void 0, function () {
            var prefixByteArrayBuffer, combinedByteArrayBuffer, combinedByteArray, testUint256Offset, bytes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        prefixByteArrayBuffer = ethUtil.toBuffer('0xabcdef');
                        combinedByteArrayBuffer = Buffer.concat([prefixByteArrayBuffer, wordOfTestBytesAsBuffer]);
                        combinedByteArray = ethUtil.bufferToHex(combinedByteArrayBuffer);
                        testUint256Offset = new utils_1.BigNumber(prefixByteArrayBuffer.byteLength);
                        return [4 /*yield*/, libBytes.publicReadBytesWithLength.callAsync(combinedByteArray, testUint256Offset)];
                    case 1:
                        bytes = _a.sent();
                        return [2 /*return*/, expect(bytes).to.be.equal(wordOfData)];
                }
            });
        }); });
        it('should successfully read long, nested array of bytes when it takes up the whole array', function () { return __awaiter(_this, void 0, void 0, function () {
            var testBytesOffset, bytes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        testBytesOffset = new utils_1.BigNumber(0);
                        return [4 /*yield*/, libBytes.publicReadBytesWithLength.callAsync(longTestBytes, testBytesOffset)];
                    case 1:
                        bytes = _a.sent();
                        return [2 /*return*/, expect(bytes).to.be.equal(longData)];
                }
            });
        }); });
        it('should successfully read long, nested array of bytes when it is offset in the array', function () { return __awaiter(_this, void 0, void 0, function () {
            var prefixByteArrayBuffer, combinedByteArrayBuffer, combinedByteArray, testUint256Offset, bytes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        prefixByteArrayBuffer = ethUtil.toBuffer('0xabcdef');
                        combinedByteArrayBuffer = Buffer.concat([prefixByteArrayBuffer, longTestBytesAsBuffer]);
                        combinedByteArray = ethUtil.bufferToHex(combinedByteArrayBuffer);
                        testUint256Offset = new utils_1.BigNumber(prefixByteArrayBuffer.byteLength);
                        return [4 /*yield*/, libBytes.publicReadBytesWithLength.callAsync(combinedByteArray, testUint256Offset)];
                    case 1:
                        bytes = _a.sent();
                        return [2 /*return*/, expect(bytes).to.be.equal(longData)];
                }
            });
        }); });
        it('should fail if the byte array is too short to hold the length of a nested byte array', function () { return __awaiter(_this, void 0, void 0, function () {
            var offset;
            return __generator(this, function (_a) {
                offset = new utils_1.BigNumber(0);
                return [2 /*return*/, contracts_test_utils_1.expectContractCallFailedAsync(libBytes.publicReadBytesWithLength.callAsync(byteArrayShorterThan32Bytes, offset), types_1.RevertReason.LibBytesGreaterOrEqualTo32LengthRequired)];
            });
        }); });
        it('should fail if we store a nested byte array length, without a nested byte array', function () { return __awaiter(_this, void 0, void 0, function () {
            var offset;
            return __generator(this, function (_a) {
                offset = new utils_1.BigNumber(0);
                return [2 /*return*/, contracts_test_utils_1.expectContractCallFailedAsync(libBytes.publicReadBytesWithLength.callAsync(testBytes32, offset), types_1.RevertReason.LibBytesGreaterOrEqualToNestedBytesLengthRequired)];
            });
        }); });
        it('should fail if the length between the offset and end of the byte array is too short to hold the length of a nested byte array', function () { return __awaiter(_this, void 0, void 0, function () {
            var badOffset;
            return __generator(this, function (_a) {
                badOffset = new utils_1.BigNumber(ethUtil.toBuffer(byteArrayShorterThan32Bytes).byteLength);
                return [2 /*return*/, contracts_test_utils_1.expectContractCallFailedAsync(libBytes.publicReadBytesWithLength.callAsync(byteArrayShorterThan32Bytes, badOffset), types_1.RevertReason.LibBytesGreaterOrEqualTo32LengthRequired)];
            });
        }); });
        it('should fail if the length between the offset and end of the byte array is too short to hold the nested byte array', function () { return __awaiter(_this, void 0, void 0, function () {
            var badOffset;
            return __generator(this, function (_a) {
                badOffset = new utils_1.BigNumber(ethUtil.toBuffer(testBytes32).byteLength);
                return [2 /*return*/, contracts_test_utils_1.expectContractCallFailedAsync(libBytes.publicReadBytesWithLength.callAsync(testBytes32, badOffset), types_1.RevertReason.LibBytesGreaterOrEqualTo32LengthRequired)];
            });
        }); });
    });
    describe('writeBytesWithLength', function () {
        it('should successfully write short, nested array of bytes when it takes up the whole array', function () { return __awaiter(_this, void 0, void 0, function () {
            var testBytesOffset, emptyByteArray, bytesWritten, bytesRead;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        testBytesOffset = new utils_1.BigNumber(0);
                        emptyByteArray = ethUtil.bufferToHex(new Buffer(shortTestBytesAsBuffer.byteLength));
                        return [4 /*yield*/, libBytes.publicWriteBytesWithLength.callAsync(emptyByteArray, testBytesOffset, shortData)];
                    case 1:
                        bytesWritten = _a.sent();
                        return [4 /*yield*/, libBytes.publicReadBytesWithLength.callAsync(bytesWritten, testBytesOffset)];
                    case 2:
                        bytesRead = _a.sent();
                        return [2 /*return*/, expect(bytesRead).to.be.equal(shortData)];
                }
            });
        }); });
        it('should successfully write short, nested array of bytes when it is offset in the array', function () { return __awaiter(_this, void 0, void 0, function () {
            var prefixData, prefixDataAsBuffer, prefixOffset, emptyByteArray, bytesWritten, testBytesOffset, bytes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        prefixData = '0xabcdef';
                        prefixDataAsBuffer = ethUtil.toBuffer(prefixData);
                        prefixOffset = new utils_1.BigNumber(0);
                        emptyByteArray = ethUtil.bufferToHex(new Buffer(prefixDataAsBuffer.byteLength + shortTestBytesAsBuffer.byteLength));
                        return [4 /*yield*/, libBytes.publicWriteBytesWithLength.callAsync(emptyByteArray, prefixOffset, prefixData)];
                    case 1:
                        bytesWritten = _a.sent();
                        testBytesOffset = new utils_1.BigNumber(prefixDataAsBuffer.byteLength);
                        return [4 /*yield*/, libBytes.publicWriteBytesWithLength.callAsync(bytesWritten, testBytesOffset, shortData)];
                    case 2:
                        bytesWritten = _a.sent();
                        return [4 /*yield*/, libBytes.publicReadBytesWithLength.callAsync(bytesWritten, testBytesOffset)];
                    case 3:
                        bytes = _a.sent();
                        return [2 /*return*/, expect(bytes).to.be.equal(shortData)];
                }
            });
        }); });
        it('should successfully write a nested array of bytes - one word in length - when it takes up the whole array', function () { return __awaiter(_this, void 0, void 0, function () {
            var testBytesOffset, emptyByteArray, bytesWritten, bytesRead;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        testBytesOffset = new utils_1.BigNumber(0);
                        emptyByteArray = ethUtil.bufferToHex(new Buffer(wordOfTestBytesAsBuffer.byteLength));
                        return [4 /*yield*/, libBytes.publicWriteBytesWithLength.callAsync(emptyByteArray, testBytesOffset, wordOfData)];
                    case 1:
                        bytesWritten = _a.sent();
                        return [4 /*yield*/, libBytes.publicReadBytesWithLength.callAsync(bytesWritten, testBytesOffset)];
                    case 2:
                        bytesRead = _a.sent();
                        return [2 /*return*/, expect(bytesRead).to.be.equal(wordOfData)];
                }
            });
        }); });
        it('should successfully write a nested array of bytes - one word in length - when it is offset in the array', function () { return __awaiter(_this, void 0, void 0, function () {
            var prefixData, prefixDataAsBuffer, prefixOffset, emptyByteArray, bytesWritten, testBytesOffset, bytes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        prefixData = '0xabcdef';
                        prefixDataAsBuffer = ethUtil.toBuffer(prefixData);
                        prefixOffset = new utils_1.BigNumber(0);
                        emptyByteArray = ethUtil.bufferToHex(new Buffer(prefixDataAsBuffer.byteLength + wordOfTestBytesAsBuffer.byteLength));
                        return [4 /*yield*/, libBytes.publicWriteBytesWithLength.callAsync(emptyByteArray, prefixOffset, prefixData)];
                    case 1:
                        bytesWritten = _a.sent();
                        testBytesOffset = new utils_1.BigNumber(prefixDataAsBuffer.byteLength);
                        return [4 /*yield*/, libBytes.publicWriteBytesWithLength.callAsync(bytesWritten, testBytesOffset, wordOfData)];
                    case 2:
                        bytesWritten = _a.sent();
                        return [4 /*yield*/, libBytes.publicReadBytesWithLength.callAsync(bytesWritten, testBytesOffset)];
                    case 3:
                        bytes = _a.sent();
                        return [2 /*return*/, expect(bytes).to.be.equal(wordOfData)];
                }
            });
        }); });
        it('should successfully write a long, nested bytes when it takes up the whole array', function () { return __awaiter(_this, void 0, void 0, function () {
            var testBytesOffset, emptyByteArray, bytesWritten, bytesRead;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        testBytesOffset = new utils_1.BigNumber(0);
                        emptyByteArray = ethUtil.bufferToHex(new Buffer(longTestBytesAsBuffer.byteLength));
                        return [4 /*yield*/, libBytes.publicWriteBytesWithLength.callAsync(emptyByteArray, testBytesOffset, longData)];
                    case 1:
                        bytesWritten = _a.sent();
                        return [4 /*yield*/, libBytes.publicReadBytesWithLength.callAsync(bytesWritten, testBytesOffset)];
                    case 2:
                        bytesRead = _a.sent();
                        return [2 /*return*/, expect(bytesRead).to.be.equal(longData)];
                }
            });
        }); });
        it('should successfully write long, nested array of bytes when it is offset in the array', function () { return __awaiter(_this, void 0, void 0, function () {
            var prefixData, prefixDataAsBuffer, prefixOffset, emptyByteArray, bytesWritten, testBytesOffset, bytes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        prefixData = '0xabcdef';
                        prefixDataAsBuffer = ethUtil.toBuffer(prefixData);
                        prefixOffset = new utils_1.BigNumber(0);
                        emptyByteArray = ethUtil.bufferToHex(new Buffer(prefixDataAsBuffer.byteLength + longTestBytesAsBuffer.byteLength));
                        return [4 /*yield*/, libBytes.publicWriteBytesWithLength.callAsync(emptyByteArray, prefixOffset, prefixData)];
                    case 1:
                        bytesWritten = _a.sent();
                        testBytesOffset = new utils_1.BigNumber(prefixDataAsBuffer.byteLength);
                        return [4 /*yield*/, libBytes.publicWriteBytesWithLength.callAsync(bytesWritten, testBytesOffset, longData)];
                    case 2:
                        bytesWritten = _a.sent();
                        return [4 /*yield*/, libBytes.publicReadBytesWithLength.callAsync(bytesWritten, testBytesOffset)];
                    case 3:
                        bytes = _a.sent();
                        return [2 /*return*/, expect(bytes).to.be.equal(longData)];
                }
            });
        }); });
        it('should fail if the byte array is too short to hold the length of a nested byte array', function () { return __awaiter(_this, void 0, void 0, function () {
            var offset, emptyByteArray;
            return __generator(this, function (_a) {
                offset = new utils_1.BigNumber(0);
                emptyByteArray = ethUtil.bufferToHex(new Buffer(1));
                return [2 /*return*/, contracts_test_utils_1.expectContractCallFailedAsync(libBytes.publicWriteBytesWithLength.callAsync(emptyByteArray, offset, longData), types_1.RevertReason.LibBytesGreaterOrEqualToNestedBytesLengthRequired)];
            });
        }); });
        it('should fail if the length between the offset and end of the byte array is too short to hold the length of a nested byte array', function () { return __awaiter(_this, void 0, void 0, function () {
            var emptyByteArray, badOffset;
            return __generator(this, function (_a) {
                emptyByteArray = ethUtil.bufferToHex(new Buffer(shortTestBytesAsBuffer.byteLength));
                badOffset = new utils_1.BigNumber(ethUtil.toBuffer(shortTestBytesAsBuffer).byteLength);
                return [2 /*return*/, contracts_test_utils_1.expectContractCallFailedAsync(libBytes.publicWriteBytesWithLength.callAsync(emptyByteArray, badOffset, shortData), types_1.RevertReason.LibBytesGreaterOrEqualToNestedBytesLengthRequired)];
            });
        }); });
    });
    describe('memCopy', function () {
        // Create memory 0x000102...FF
        var memSize = 256;
        // tslint:disable:no-shadowed-variable
        var memory = new Uint8Array(memSize).map(function (_, i) { return i; });
        var memHex = toHex(memory);
        // Reference implementation to test against
        var refMemcpy = function (mem, dest, source, length) {
            return Uint8Array.from(mem).copyWithin(dest, source, source + length);
        };
        var test = function (tests) {
            return tests.forEach(function (_a) {
                var _b = __read(_a, 4), dest = _b[0], source = _b[1], length = _b[2], job = _b[3];
                return it(job, function () { return __awaiter(_this, void 0, void 0, function () {
                    var expected, resultStr, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                expected = refMemcpy(memory, dest, source, length);
                                return [4 /*yield*/, libBytes.testMemcpy.callAsync(memHex, new utils_1.BigNumber(dest), new utils_1.BigNumber(source), new utils_1.BigNumber(length))];
                            case 1:
                                resultStr = _a.sent();
                                result = fromHex(resultStr);
                                expect(result).to.deep.equal(expected);
                                return [2 /*return*/];
                        }
                    });
                }); });
            });
        };
        test([[0, 0, 0, 'copies zero bytes with overlap']]);
        describe('copies forward', function () {
            return test([
                [128, 0, 0, 'zero bytes'],
                [128, 0, 1, 'one byte'],
                [128, 0, 11, 'eleven bytes'],
                [128, 0, 31, 'thirty-one bytes'],
                [128, 0, 32, 'one word'],
                [128, 0, 64, 'two words'],
                [128, 0, 96, 'three words'],
                [128, 0, 33, 'one word and one byte'],
                [128, 0, 72, 'two words and eight bytes'],
                [128, 0, 100, 'three words and four bytes'],
            ]);
        });
        describe('copies forward within one word', function () {
            return test([
                [16, 0, 0, 'zero bytes'],
                [16, 0, 1, 'one byte'],
                [16, 0, 11, 'eleven bytes'],
                [16, 0, 16, 'sixteen bytes'],
            ]);
        });
        describe('copies forward with one byte overlap', function () {
            return test([
                [0, 0, 1, 'one byte'],
                [10, 0, 11, 'eleven bytes'],
                [30, 0, 31, 'thirty-one bytes'],
                [31, 0, 32, 'one word'],
                [32, 0, 33, 'one word and one byte'],
                [71, 0, 72, 'two words and eight bytes'],
                [99, 0, 100, 'three words and four bytes'],
            ]);
        });
        describe('copies forward with thirty-one bytes overlap', function () {
            return test([
                [0, 0, 31, 'thirty-one bytes'],
                [1, 0, 32, 'one word'],
                [2, 0, 33, 'one word and one byte'],
                [41, 0, 72, 'two words and eight bytes'],
                [69, 0, 100, 'three words and four bytes'],
            ]);
        });
        describe('copies forward with one word overlap', function () {
            return test([
                [0, 0, 32, 'one word'],
                [1, 0, 33, 'one word and one byte'],
                [41, 0, 72, 'two words and eight bytes'],
                [69, 0, 100, 'three words and four bytes'],
            ]);
        });
        describe('copies forward with one word and one byte overlap', function () {
            return test([
                [0, 0, 33, 'one word and one byte'],
                [40, 0, 72, 'two words and eight bytes'],
                [68, 0, 100, 'three words and four bytes'],
            ]);
        });
        describe('copies forward with two words overlap', function () {
            return test([
                [0, 0, 64, 'two words'],
                [8, 0, 72, 'two words and eight bytes'],
                [36, 0, 100, 'three words and four bytes'],
            ]);
        });
        describe('copies forward within one word and one byte overlap', function () {
            return test([[0, 0, 1, 'one byte'], [10, 0, 11, 'eleven bytes'], [15, 0, 16, 'sixteen bytes']]);
        });
        describe('copies backward', function () {
            return test([
                [0, 128, 0, 'zero bytes'],
                [0, 128, 1, 'one byte'],
                [0, 128, 11, 'eleven bytes'],
                [0, 128, 31, 'thirty-one bytes'],
                [0, 128, 32, 'one word'],
                [0, 128, 64, 'two words'],
                [0, 128, 96, 'three words'],
                [0, 128, 33, 'one word and one byte'],
                [0, 128, 72, 'two words and eight bytes'],
                [0, 128, 100, 'three words and four bytes'],
            ]);
        });
        describe('copies backward within one word', function () {
            return test([
                [0, 16, 0, 'zero bytes'],
                [0, 16, 1, 'one byte'],
                [0, 16, 11, 'eleven bytes'],
                [0, 16, 16, 'sixteen bytes'],
            ]);
        });
        describe('copies backward with one byte overlap', function () {
            return test([
                [0, 0, 1, 'one byte'],
                [0, 10, 11, 'eleven bytes'],
                [0, 30, 31, 'thirty-one bytes'],
                [0, 31, 32, 'one word'],
                [0, 32, 33, 'one word and one byte'],
                [0, 71, 72, 'two words and eight bytes'],
                [0, 99, 100, 'three words and four bytes'],
            ]);
        });
        describe('copies backward with thirty-one bytes overlap', function () {
            return test([
                [0, 0, 31, 'thirty-one bytes'],
                [0, 1, 32, 'one word'],
                [0, 2, 33, 'one word and one byte'],
                [0, 41, 72, 'two words and eight bytes'],
                [0, 69, 100, 'three words and four bytes'],
            ]);
        });
        describe('copies backward with one word overlap', function () {
            return test([
                [0, 0, 32, 'one word'],
                [0, 1, 33, 'one word and one byte'],
                [0, 41, 72, 'two words and eight bytes'],
                [0, 69, 100, 'three words and four bytes'],
            ]);
        });
        describe('copies backward with one word and one byte overlap', function () {
            return test([
                [0, 0, 33, 'one word and one byte'],
                [0, 40, 72, 'two words and eight bytes'],
                [0, 68, 100, 'three words and four bytes'],
            ]);
        });
        describe('copies backward with two words overlap', function () {
            return test([
                [0, 0, 64, 'two words'],
                [0, 8, 72, 'two words and eight bytes'],
                [0, 36, 100, 'three words and four bytes'],
            ]);
        });
        describe('copies forward within one word and one byte overlap', function () {
            return test([[0, 0, 1, 'one byte'], [0, 10, 11, 'eleven bytes'], [0, 15, 16, 'sixteen bytes']]);
        });
    });
    describe('slice', function () {
        it('should revert if from > to', function () { return __awaiter(_this, void 0, void 0, function () {
            var from, to;
            return __generator(this, function (_a) {
                from = new utils_1.BigNumber(1);
                to = new utils_1.BigNumber(0);
                contracts_test_utils_1.expectContractCallFailedAsync(libBytes.publicSlice.callAsync(byteArrayLongerThan32Bytes, from, to), types_1.RevertReason.FromLessThanToRequired);
                return [2 /*return*/];
            });
        }); });
        it('should return a byte array of length 0 if from == to', function () { return __awaiter(_this, void 0, void 0, function () {
            var from, to, _a, result, original;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        from = new utils_1.BigNumber(0);
                        to = from;
                        return [4 /*yield*/, libBytes.publicSlice.callAsync(byteArrayLongerThan32Bytes, from, to)];
                    case 1:
                        _a = __read.apply(void 0, [_b.sent(), 2]), result = _a[0], original = _a[1];
                        expect(original).to.eq(byteArrayLongerThan32Bytes);
                        expect(result).to.eq(contracts_test_utils_1.constants.NULL_BYTES);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should return a byte array of length 0 if from == to == b.length', function () { return __awaiter(_this, void 0, void 0, function () {
            var byteLen, from, to, _a, result, original;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        byteLen = (byteArrayLongerThan32Bytes.length - 2) / 2;
                        from = new utils_1.BigNumber(byteLen);
                        to = from;
                        return [4 /*yield*/, libBytes.publicSlice.callAsync(byteArrayLongerThan32Bytes, from, to)];
                    case 1:
                        _a = __read.apply(void 0, [_b.sent(), 2]), result = _a[0], original = _a[1];
                        expect(original).to.eq(byteArrayLongerThan32Bytes);
                        expect(result).to.eq(contracts_test_utils_1.constants.NULL_BYTES);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should revert if to > input.length', function () { return __awaiter(_this, void 0, void 0, function () {
            var byteLen, from, to;
            return __generator(this, function (_a) {
                byteLen = (byteArrayLongerThan32Bytes.length - 2) / 2;
                from = new utils_1.BigNumber(0);
                to = new utils_1.BigNumber(byteLen).plus(1);
                contracts_test_utils_1.expectContractCallFailedAsync(libBytes.publicSlice.callAsync(byteArrayLongerThan32Bytes, from, to), types_1.RevertReason.ToLessThanLengthRequired);
                return [2 /*return*/];
            });
        }); });
        it('should slice a section of the input', function () { return __awaiter(_this, void 0, void 0, function () {
            var from, to, _a, result, original, expectedResult;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        from = new utils_1.BigNumber(1);
                        to = new utils_1.BigNumber(2);
                        return [4 /*yield*/, libBytes.publicSlice.callAsync(byteArrayLongerThan32Bytes, from, to)];
                    case 1:
                        _a = __read.apply(void 0, [_b.sent(), 2]), result = _a[0], original = _a[1];
                        expectedResult = "0x" + byteArrayLongerThan32Bytes.slice(4, 6);
                        expect(original).to.eq(byteArrayLongerThan32Bytes);
                        expect(result).to.eq(expectedResult);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should copy the entire input if from = 0 and to = input.length', function () { return __awaiter(_this, void 0, void 0, function () {
            var byteLen, from, to, _a, result, original;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        byteLen = (byteArrayLongerThan32Bytes.length - 2) / 2;
                        from = new utils_1.BigNumber(0);
                        to = new utils_1.BigNumber(byteLen);
                        return [4 /*yield*/, libBytes.publicSlice.callAsync(byteArrayLongerThan32Bytes, from, to)];
                    case 1:
                        _a = __read.apply(void 0, [_b.sent(), 2]), result = _a[0], original = _a[1];
                        expect(original).to.eq(byteArrayLongerThan32Bytes);
                        expect(result).to.eq(byteArrayLongerThan32Bytes);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('sliceDestructive', function () {
        it('should revert if from > to', function () { return __awaiter(_this, void 0, void 0, function () {
            var from, to;
            return __generator(this, function (_a) {
                from = new utils_1.BigNumber(1);
                to = new utils_1.BigNumber(0);
                contracts_test_utils_1.expectContractCallFailedAsync(libBytes.publicSliceDestructive.callAsync(byteArrayLongerThan32Bytes, from, to), types_1.RevertReason.FromLessThanToRequired);
                return [2 /*return*/];
            });
        }); });
        it('should return a byte array of length 0 if from == to', function () { return __awaiter(_this, void 0, void 0, function () {
            var from, to, _a, result;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        from = new utils_1.BigNumber(0);
                        to = from;
                        return [4 /*yield*/, libBytes.publicSliceDestructive.callAsync(byteArrayLongerThan32Bytes, from, to)];
                    case 1:
                        _a = __read.apply(void 0, [_b.sent(), 1]), result = _a[0];
                        expect(result).to.eq(contracts_test_utils_1.constants.NULL_BYTES);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should return a byte array of length 0 if from == to == b.length', function () { return __awaiter(_this, void 0, void 0, function () {
            var byteLen, from, to, _a, result;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        byteLen = (byteArrayLongerThan32Bytes.length - 2) / 2;
                        from = new utils_1.BigNumber(byteLen);
                        to = from;
                        return [4 /*yield*/, libBytes.publicSliceDestructive.callAsync(byteArrayLongerThan32Bytes, from, to)];
                    case 1:
                        _a = __read.apply(void 0, [_b.sent(), 1]), result = _a[0];
                        expect(result).to.eq(contracts_test_utils_1.constants.NULL_BYTES);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should revert if to > input.length', function () { return __awaiter(_this, void 0, void 0, function () {
            var byteLen, from, to;
            return __generator(this, function (_a) {
                byteLen = (byteArrayLongerThan32Bytes.length - 2) / 2;
                from = new utils_1.BigNumber(0);
                to = new utils_1.BigNumber(byteLen).plus(1);
                contracts_test_utils_1.expectContractCallFailedAsync(libBytes.publicSliceDestructive.callAsync(byteArrayLongerThan32Bytes, from, to), types_1.RevertReason.ToLessThanLengthRequired);
                return [2 /*return*/];
            });
        }); });
        it('should slice a section of the input', function () { return __awaiter(_this, void 0, void 0, function () {
            var from, to, _a, result, expectedResult;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        from = new utils_1.BigNumber(1);
                        to = new utils_1.BigNumber(2);
                        return [4 /*yield*/, libBytes.publicSliceDestructive.callAsync(byteArrayLongerThan32Bytes, from, to)];
                    case 1:
                        _a = __read.apply(void 0, [_b.sent(), 1]), result = _a[0];
                        expectedResult = "0x" + byteArrayLongerThan32Bytes.slice(4, 6);
                        expect(result).to.eq(expectedResult);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should copy the entire input if from = 0 and to = input.length', function () { return __awaiter(_this, void 0, void 0, function () {
            var byteLen, from, to, _a, result;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        byteLen = (byteArrayLongerThan32Bytes.length - 2) / 2;
                        from = new utils_1.BigNumber(0);
                        to = new utils_1.BigNumber(byteLen);
                        return [4 /*yield*/, libBytes.publicSliceDestructive.callAsync(byteArrayLongerThan32Bytes, from, to)];
                    case 1:
                        _a = __read.apply(void 0, [_b.sent(), 1]), result = _a[0];
                        expect(result).to.eq(byteArrayLongerThan32Bytes);
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
// tslint:disable:max-file-line-count
//# sourceMappingURL=lib_bytes.js.map