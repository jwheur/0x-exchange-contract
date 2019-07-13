/// <reference types="node" />
import { SignatureType, SignedZeroExTransaction } from '@0x/types';
export declare class TransactionFactory {
    private readonly _signerBuff;
    private readonly _exchangeAddress;
    private readonly _privateKey;
    constructor(privateKey: Buffer, exchangeAddress: string);
    newSignedTransaction(data: string, signatureType?: SignatureType): SignedZeroExTransaction;
}
//# sourceMappingURL=transaction_factory.d.ts.map