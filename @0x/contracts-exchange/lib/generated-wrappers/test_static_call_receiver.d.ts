import { BaseContract, PromiseWithTransactionHash } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, ContractArtifact, TransactionReceiptWithDecodedLogs, TxData, SupportedProvider } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
import { SimpleContractArtifact } from '@0x/types';
export declare class TestStaticCallReceiverContract extends BaseContract {
    isValidSignature2: {
        sendTransactionAsync(hash: string, signature: string, txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(hash: string, signature: string, txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(hash: string, signature: string, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(hash: string, signature: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
        getABIEncodedTransactionData(hash: string, signature: string): string;
    };
    isValidSignature1: {
        sendTransactionAsync(hash: string, signerAddress: string, signature: string, txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(hash: string, signerAddress: string, signature: string, txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(hash: string, signerAddress: string, signature: string, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(hash: string, signerAddress: string, signature: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
        getABIEncodedTransactionData(hash: string, signerAddress: string, signature: string): string;
    };
    approveERC20: {
        sendTransactionAsync(token: string, spender: string, value: BigNumber, txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(token: string, spender: string, value: BigNumber, txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(token: string, spender: string, value: BigNumber, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(token: string, spender: string, value: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(token: string, spender: string, value: BigNumber): string;
    };
    static deployFrom0xArtifactAsync(artifact: ContractArtifact | SimpleContractArtifact, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>): Promise<TestStaticCallReceiverContract>;
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>): Promise<TestStaticCallReceiverContract>;
    /**
     * @returns      The contract ABI
     */
    static ABI(): ContractAbi;
    constructor(address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>);
}
//# sourceMappingURL=test_static_call_receiver.d.ts.map