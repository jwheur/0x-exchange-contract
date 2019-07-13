import { BaseContract, PromiseWithTransactionHash } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, ContractArtifact, DecodedLogArgs, TransactionReceiptWithDecodedLogs, TxData, SupportedProvider } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
import { SimpleContractArtifact } from '@0x/types';
export declare type TestAssetProxyDispatcherEventArgs = TestAssetProxyDispatcherAssetProxyRegisteredEventArgs;
export declare enum TestAssetProxyDispatcherEvents {
    AssetProxyRegistered = "AssetProxyRegistered"
}
export interface TestAssetProxyDispatcherAssetProxyRegisteredEventArgs extends DecodedLogArgs {
    id: string;
    assetProxy: string;
}
export declare class TestAssetProxyDispatcherContract extends BaseContract {
    assetProxies: {
        callAsync(index_0: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(index_0: string): string;
    };
    getAssetProxy: {
        callAsync(assetProxyId: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(assetProxyId: string): string;
    };
    publicDispatchTransferFrom: {
        sendTransactionAsync(assetData: string, from: string, to: string, amount: BigNumber, txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(assetData: string, from: string, to: string, amount: BigNumber, txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(assetData: string, from: string, to: string, amount: BigNumber, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(assetData: string, from: string, to: string, amount: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(assetData: string, from: string, to: string, amount: BigNumber): string;
    };
    owner: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    registerAssetProxy: {
        sendTransactionAsync(assetProxy: string, txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(assetProxy: string, txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(assetProxy: string, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(assetProxy: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(assetProxy: string): string;
    };
    transferOwnership: {
        sendTransactionAsync(newOwner: string, txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(newOwner: string, txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(newOwner: string, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(newOwner: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(newOwner: string): string;
    };
    static deployFrom0xArtifactAsync(artifact: ContractArtifact | SimpleContractArtifact, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>): Promise<TestAssetProxyDispatcherContract>;
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>): Promise<TestAssetProxyDispatcherContract>;
    /**
     * @returns      The contract ABI
     */
    static ABI(): ContractAbi;
    constructor(address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>);
}
//# sourceMappingURL=test_asset_proxy_dispatcher.d.ts.map