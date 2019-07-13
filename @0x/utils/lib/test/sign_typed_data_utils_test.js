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
Object.defineProperty(exports, "__esModule", { value: true });
var chai = require("chai");
require("mocha");
var sign_typed_data_utils_1 = require("../src/sign_typed_data_utils");
var expect = chai.expect;
describe('signTypedDataUtils', function () {
    describe('signTypedDataHash', function () {
        var simpleSignTypedDataHashHex = '0xb460d69ca60383293877cd765c0f97bd832d66bca720f7e32222ce1118832493';
        var simpleSignTypedData = {
            types: {
                EIP712Domain: [
                    {
                        name: 'name',
                        type: 'string',
                    },
                ],
                Test: [
                    {
                        name: 'testAddress',
                        type: 'address',
                    },
                    {
                        name: 'testNumber',
                        type: 'uint256',
                    },
                ],
            },
            domain: {
                name: 'Test',
            },
            message: {
                testAddress: '0x0000000000000000000000000000000000000000',
                testNumber: '12345',
            },
            primaryType: 'Test',
        };
        var orderSignTypedDataHashHex = '0x55eaa6ec02f3224d30873577e9ddd069a288c16d6fb407210eecbc501fa76692';
        var orderSignTypedData = {
            types: {
                EIP712Domain: [
                    {
                        name: 'name',
                        type: 'string',
                    },
                    {
                        name: 'version',
                        type: 'string',
                    },
                    {
                        name: 'verifyingContract',
                        type: 'address',
                    },
                ],
                Order: [
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
            domain: {
                name: '0x Protocol',
                version: '2',
                verifyingContract: '0x0000000000000000000000000000000000000000',
            },
            message: {
                makerAddress: '0x0000000000000000000000000000000000000000',
                takerAddress: '0x0000000000000000000000000000000000000000',
                makerAssetAmount: '1000000000000000000',
                takerAssetAmount: '1000000000000000000',
                expirationTimeSeconds: '12345',
                makerFee: '0',
                takerFee: '0',
                feeRecipientAddress: '0x0000000000000000000000000000000000000000',
                senderAddress: '0x0000000000000000000000000000000000000000',
                salt: '12345',
                makerAssetData: '0x0000000000000000000000000000000000000000',
                takerAssetData: '0x0000000000000000000000000000000000000000',
                exchangeAddress: '0x0000000000000000000000000000000000000000',
            },
            primaryType: 'Order',
        };
        it('creates a hash of the test sign typed data', function () {
            var hash = sign_typed_data_utils_1.signTypedDataUtils.generateTypedDataHash(simpleSignTypedData).toString('hex');
            var hashHex = "0x" + hash;
            expect(hashHex).to.be.eq(simpleSignTypedDataHashHex);
        });
        it('creates a hash of the order sign typed data', function () {
            var hash = sign_typed_data_utils_1.signTypedDataUtils.generateTypedDataHash(orderSignTypedData).toString('hex');
            var hashHex = "0x" + hash;
            expect(hashHex).to.be.eq(orderSignTypedDataHashHex);
        });
        it('creates a hash of an uninitialized order', function () {
            var uninitializedOrder = __assign({}, orderSignTypedData, { message: {
                    makerAddress: '0x0000000000000000000000000000000000000000',
                    takerAddress: '0x0000000000000000000000000000000000000000',
                    makerAssetAmount: 0,
                    takerAssetAmount: 0,
                    expirationTimeSeconds: 0,
                    makerFee: 0,
                    takerFee: 0,
                    feeRecipientAddress: '0x0000000000000000000000000000000000000000',
                    senderAddress: '0x0000000000000000000000000000000000000000',
                    salt: 0,
                    makerAssetData: '0x0000000000000000000000000000000000000000',
                    takerAssetData: '0x0000000000000000000000000000000000000000',
                    exchangeAddress: '0x0000000000000000000000000000000000000000',
                } });
            var hash = sign_typed_data_utils_1.signTypedDataUtils.generateTypedDataHash(uninitializedOrder).toString('hex');
            var hashHex = "0x" + hash;
            expect(hashHex).to.be.eq('0xfaa49b35faeb9197e9c3ba7a52075e6dad19739549f153b77dfcf59408a4b422');
        });
    });
});
//# sourceMappingURL=sign_typed_data_utils_test.js.map