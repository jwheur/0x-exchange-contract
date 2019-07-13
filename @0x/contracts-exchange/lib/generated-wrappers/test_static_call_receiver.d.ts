import { BaseContract, PromiseWithTransactionHash } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, ContractArtifact, TransactionReceiptWithDecodedLogs, TxData, SupportedProvider } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
import { SimpleContractArtifact } from '@0x/types';
export declare class TestStaticCallReceiverContract extends BaseContract {
    isValidSignature2: {
        sendTransactionAsync(hash: string, signature: string, txData?: Partial<TxData>): Promise<string>;
        awaitTransactionSuccessAsync(hash: string, signature: string, txData?: number | Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(hash: string, signature: string, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(hash: string, signature: string): string;
        callAsync(hash: string, signature: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    isValidSignature1: {
        sendTransactionAsync(hash: string, signerAddress: string, signature: string, txData?: Partial<TxData>): Promise<string>;
        awaitTransactionSuccessAsync(hash: string, signerAddress: string, signature: string, txData?: number | Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(hash: string, signerAddress: string, signature: string, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(hash: string, signerAddress: string, signature: string): string;
        callAsync(hash: string, signerAddress: string, signature: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    approveERC20: {
        sendTransactionAsync(token: string, spender: string, value: BigNumber, txData?: Partial<TxData>): Promise<string>;
        awaitTransactionSuccessAsync(token: string, spender: string, value: BigNumber, txData?: number | Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(token: string, spender: string, value: BigNumber, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(token: string, spender: string, value: BigNumber): string;
        callAsync(token: string, spender: string, value: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    static deployFrom0xArtifactAsync(artifact: ContractArtifact | SimpleContractArtifact, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>): Promise<TestStaticCallReceiverContract>;
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>): Promise<TestStaticCallReceiverContract>;
    constructor(abi: ContractAbi, address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>);
}
//# sourceMappingURL=test_static_call_receiver.d.ts.map