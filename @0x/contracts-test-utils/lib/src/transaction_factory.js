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
var order_utils_1 = require("@0x/order-utils");
var types_1 = require("@0x/types");
var ethUtil = require("ethereumjs-util");
var signing_utils_1 = require("./signing_utils");
var TransactionFactory = /** @class */ (function () {
    function TransactionFactory(privateKey, exchangeAddress) {
        this._privateKey = privateKey;
        this._exchangeAddress = exchangeAddress;
        this._signerBuff = ethUtil.privateToAddress(this._privateKey);
    }
    TransactionFactory.prototype.newSignedTransaction = function (data, signatureType) {
        if (signatureType === void 0) { signatureType = types_1.SignatureType.EthSign; }
        var salt = order_utils_1.generatePseudoRandomSalt();
        var signerAddress = "0x" + this._signerBuff.toString('hex');
        var transaction = {
            salt: salt,
            signerAddress: signerAddress,
            data: data,
            verifyingContractAddress: this._exchangeAddress,
        };
        var transactionHashBuffer = order_utils_1.transactionHashUtils.getTransactionHashBuffer(transaction);
        var signature = signing_utils_1.signingUtils.signMessage(transactionHashBuffer, this._privateKey, signatureType);
        var signedTransaction = __assign({}, transaction, { signature: "0x" + signature.toString('hex') });
        return signedTransaction;
    };
    return TransactionFactory;
}());
exports.TransactionFactory = TransactionFactory;
//# sourceMappingURL=transaction_factory.js.map