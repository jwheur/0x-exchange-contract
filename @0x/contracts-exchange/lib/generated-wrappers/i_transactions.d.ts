import { BaseContract, PromiseWithTransactionHash } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, ContractArtifact, TransactionReceiptWithDecodedLogs, TxData, SupportedProvider } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
import { SimpleContractArtifact } from '@0x/types';
export declare class ITransactionsContract extends BaseContract {
    executeTransaction: {
        sendTransactionAsync(salt: BigNumber, signerAddress: string, data: string, signature: string, txData?: Partial<TxData>): Promise<string>;
        awaitTransactionSuccessAsync(salt: BigNumber, signerAddress: string, data: string, signature: string, txData?: number | Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(salt: BigNumber, signerAddress: string, data: string, signature: string, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(salt: BigNumber, signerAddress: string, data: string, signature: string): string;
        callAsync(salt: BigNumber, signerAddress: string, data: string, signature: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    static deployFrom0xArtifactAsync(artifact: ContractArtifact | SimpleContractArtifact, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>): Promise<ITransactionsContract>;
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>): Promise<ITransactionsContract>;
    constructor(abi: ContractAbi, address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>);
}
//# sourceMappingURL=i_transactions.d.ts.map