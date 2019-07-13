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
        sendTransactionAsync(hash: string, signerAddress: string, signature: string, txData?: Partial<TxData>): Promise<string>;
        awaitTransactionSuccessAsync(hash: string, signerAddress: string, signature: string, txData?: number | Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(hash: string, signerAddress: string, signature: string, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(hash: string, signerAddress: string, signature: string): string;
        callAsync(hash: string, signerAddress: string, signature: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    transactions: {
        callAsync(index_0: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    setSignatureValidatorApproval: {
        sendTransactionAsync(validatorAddress: string, approval: boolean, txData?: Partial<TxData>): Promise<string>;
        awaitTransactionSuccessAsync(validatorAddress: string, approval: boolean, txData?: number | Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(validatorAddress: string, approval: boolean, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(validatorAddress: string, approval: boolean): string;
        callAsync(validatorAddress: string, approval: boolean, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    allowedValidators: {
        callAsync(index_0: string, index_1: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    preSigned: {
        callAsync(index_0: string, index_1: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    isValidSignature: {
        callAsync(hash: string, signerAddress: string, signature: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    publicIsValidSignature: {
        callAsync(hash: string, signer: string, signature: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    executeTransaction: {
        sendTransactionAsync(salt: BigNumber, signerAddress: string, data: string, signature: string, txData?: Partial<TxData>): Promise<string>;
        awaitTransactionSuccessAsync(salt: BigNumber, signerAddress: string, data: string, signature: string, txData?: number | Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(salt: BigNumber, signerAddress: string, data: string, signature: string, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(salt: BigNumber, signerAddress: string, data: string, signature: string): string;
        callAsync(salt: BigNumber, signerAddress: string, data: string, signature: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    EIP712_DOMAIN_HASH: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    currentContextAddress: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    static deployFrom0xArtifactAsync(artifact: ContractArtifact | SimpleContractArtifact, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>): Promise<TestSignatureValidatorContract>;
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>): Promise<TestSignatureValidatorContract>;
    constructor(abi: ContractAbi, address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>);
}
//# sourceMappingURL=test_signature_validator.d.ts.map