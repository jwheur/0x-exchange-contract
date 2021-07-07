import { BaseContract, PromiseWithTransactionHash } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, ContractArtifact, DecodedLogArgs, TransactionReceiptWithDecodedLogs, TxData, SupportedProvider } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
import { SimpleContractArtifact } from '@0x/types';
export declare type TestSignatureValidatorEventArgs = TestSignatureValidatorSignatureValidatorApprovalEventArgs;
export declare enum TestSignatureValidatorEvents {
    SignatureValidatorApproval = "SignatureValidatorApproval"
}
export interface TestSignatureValidatorSignatureValidatorApprovalEventArgs extends DecodedLogArgs {
    signerAddress: string;
    validatorAddress: string;
    approved: boolean;
}
export declare class TestSignatureValidatorContract extends BaseContract {
    preSign: {
        sendTransactionAsync(hash: string, signerAddress: string, signature: string, txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(hash: string, signerAddress: string, signature: string, txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(hash: string, signerAddress: string, signature: string, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(hash: string, signerAddress: string, signature: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(hash: string, signerAddress: string, signature: string): string;
    };
    transactions: {
        callAsync(index_0: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
        getABIEncodedTransactionData(index_0: string): string;
    };
    setSignatureValidatorApproval: {
        sendTransactionAsync(validatorAddress: string, approval: boolean, txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(validatorAddress: string, approval: boolean, txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(validatorAddress: string, approval: boolean, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(validatorAddress: string, approval: boolean, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(validatorAddress: string, approval: boolean): string;
    };
    allowedValidators: {
        callAsync(index_0: string, index_1: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
        getABIEncodedTransactionData(index_0: string, index_1: string): string;
    };
    preSigned: {
        callAsync(index_0: string, index_1: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
        getABIEncodedTransactionData(index_0: string, index_1: string): string;
    };
    isValidSignature: {
        callAsync(hash: string, signerAddress: string, signature: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
        getABIEncodedTransactionData(hash: string, signerAddress: string, signature: string): string;
    };
    publicIsValidSignature: {
        callAsync(hash: string, signer: string, signature: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
        getABIEncodedTransactionData(hash: string, signer: string, signature: string): string;
    };
    executeTransaction: {
        sendTransactionAsync(salt: BigNumber, signerAddress: string, data: string, signature: string, txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(salt: BigNumber, signerAddress: string, data: string, signature: string, txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(salt: BigNumber, signerAddress: string, data: string, signature: string, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(salt: BigNumber, signerAddress: string, data: string, signature: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(salt: BigNumber, signerAddress: string, data: string, signature: string): string;
    };
    EIP712_DOMAIN_HASH: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    currentContextAddress: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    static deployFrom0xArtifactAsync(artifact: ContractArtifact | SimpleContractArtifact, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>): Promise<TestSignatureValidatorContract>;
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>): Promise<TestSignatureValidatorContract>;
    /**
     * @returns      The contract ABI
     */
    static ABI(): ContractAbi;
    constructor(address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>);
}
//# sourceMappingURL=test_signature_validator.d.ts.map