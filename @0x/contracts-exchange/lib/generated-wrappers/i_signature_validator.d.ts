import { BaseContract, PromiseWithTransactionHash } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, ContractArtifact, TransactionReceiptWithDecodedLogs, TxData, SupportedProvider } from 'ethereum-types';
import { SimpleContractArtifact } from '@0x/types';
export declare class ISignatureValidatorContract extends BaseContract {
    preSign: {
        sendTransactionAsync(hash: string, signerAddress: string, signature: string, txData?: Partial<TxData>): Promise<string>;
        awaitTransactionSuccessAsync(hash: string, signerAddress: string, signature: string, txData?: number | Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(hash: string, signerAddress: string, signature: string, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(hash: string, signerAddress: string, signature: string): string;
        callAsync(hash: string, signerAddress: string, signature: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    setSignatureValidatorApproval: {
        sendTransactionAsync(validatorAddress: string, approval: boolean, txData?: Partial<TxData>): Promise<string>;
        awaitTransactionSuccessAsync(validatorAddress: string, approval: boolean, txData?: number | Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(validatorAddress: string, approval: boolean, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(validatorAddress: string, approval: boolean): string;
        callAsync(validatorAddress: string, approval: boolean, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    isValidSignature: {
        callAsync(hash: string, signerAddress: string, signature: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    static deployFrom0xArtifactAsync(artifact: ContractArtifact | SimpleContractArtifact, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>): Promise<ISignatureValidatorContract>;
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>): Promise<ISignatureValidatorContract>;
    constructor(abi: ContractAbi, address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>);
}
//# sourceMappingURL=i_signature_validator.d.ts.map