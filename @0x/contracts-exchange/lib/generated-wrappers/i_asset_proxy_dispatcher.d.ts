import { BaseContract, PromiseWithTransactionHash } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, ContractArtifact, TransactionReceiptWithDecodedLogs, TxData, SupportedProvider } from 'ethereum-types';
import { SimpleContractArtifact } from '@0x/types';
export declare class IAssetProxyDispatcherContract extends BaseContract {
    getAssetProxy: {
        callAsync(assetProxyId: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(assetProxyId: string): string;
    };
    registerAssetProxy: {
        sendTransactionAsync(assetProxy: string, txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(assetProxy: string, txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(assetProxy: string, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(assetProxy: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(assetProxy: string): string;
    };
    static deployFrom0xArtifactAsync(artifact: ContractArtifact | SimpleContractArtifact, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>): Promise<IAssetProxyDispatcherContract>;
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>): Promise<IAssetProxyDispatcherContract>;
    /**
     * @returns      The contract ABI
     */
    static ABI(): ContractAbi;
    constructor(address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>);
}
//# sourceMappingURL=i_asset_proxy_dispatcher.d.ts.map