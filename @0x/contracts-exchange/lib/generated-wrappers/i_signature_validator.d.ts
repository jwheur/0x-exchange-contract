import { BaseContract, PromiseWithTransactionHash } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, ContractArtifact, TransactionReceiptWithDecodedLogs, TxData, SupportedProvider } from 'ethereum-types';
import { SimpleContractArtifact } from '@0x/types';
export declare class ISignatureValidatorContract extends BaseContract {
    preSign: {
        sendTransactionAsync(hash: string, signerAddress: string, signature: string, txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(hash: string, signerAddress: string, signature: string, txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(hash: string, signerAddress: string, signature: string, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(hash: string, signerAddress: string, signature: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(hash: string, signerAddress: string, signature: string): string;
    };
    setSignatureValidatorApproval: {
        sendTransactionAsync(validatorAddress: string, approval: boolean, txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(validatorAddress: string, approval: boolean, txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(validatorAddress: string, approval: boolean, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(validatorAddress: string, approval: boolean, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(validatorAddress: string, approval: boolean): string;
    };
    isValidSignature: {
        callAsync(hash: string, signerAddress: string, signature: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
        getABIEncodedTransactionData(hash: string, signerAddress: string, signature: string): string;
    };
    static deployFrom0xArtifactAsync(artifact: ContractArtifact | SimpleContractArtifact, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>): Promise<ISignatureValidatorContract>;
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>): Promise<ISignatureValidatorContract>;
    /**
     * @returns      The contract ABI
     */
    static ABI(): ContractAbi;
    constructor(address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>);
}
//# sourceMappingURL=i_signature_validator.d.ts.map