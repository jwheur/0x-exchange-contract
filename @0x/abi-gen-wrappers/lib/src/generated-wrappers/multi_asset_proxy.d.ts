import { BaseContract, PromiseWithTransactionHash } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, ContractArtifact, DecodedLogArgs, TransactionReceiptWithDecodedLogs, TxData, SupportedProvider } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
import { SimpleContractArtifact } from '@0x/types';
export declare type MultiAssetProxyEventArgs = MultiAssetProxyAuthorizedAddressAddedEventArgs | MultiAssetProxyAuthorizedAddressRemovedEventArgs | MultiAssetProxyAssetProxyRegisteredEventArgs;
export declare enum MultiAssetProxyEvents {
    AuthorizedAddressAdded = "AuthorizedAddressAdded",
    AuthorizedAddressRemoved = "AuthorizedAddressRemoved",
    AssetProxyRegistered = "AssetProxyRegistered"
}
export interface MultiAssetProxyAuthorizedAddressAddedEventArgs extends DecodedLogArgs {
    target: string;
    caller: string;
}
export interface MultiAssetProxyAuthorizedAddressRemovedEventArgs extends DecodedLogArgs {
    target: string;
    caller: string;
}
export interface MultiAssetProxyAssetProxyRegisteredEventArgs extends DecodedLogArgs {
    id: string;
    assetProxy: string;
}
export declare class MultiAssetProxyContract extends BaseContract {
    assetProxies: {
        callAsync(index_0: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(index_0: string): string;
    };
    addAuthorizedAddress: {
        sendTransactionAsync(target: string, txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(target: string, txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(target: string, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(target: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(target: string): string;
    };
    authorities: {
        callAsync(index_0: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(index_0: BigNumber): string;
    };
    getAssetProxy: {
        callAsync(assetProxyId: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(assetProxyId: string): string;
    };
    removeAuthorizedAddress: {
        sendTransactionAsync(target: string, txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(target: string, txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(target: string, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(target: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(target: string): string;
    };
    owner: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    removeAuthorizedAddressAtIndex: {
        sendTransactionAsync(target: string, index: BigNumber, txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(target: string, index: BigNumber, txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(target: string, index: BigNumber, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(target: string, index: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(target: string, index: BigNumber): string;
    };
    getProxyId: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    authorized: {
        callAsync(index_0: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
        getABIEncodedTransactionData(index_0: string): string;
    };
    registerAssetProxy: {
        sendTransactionAsync(assetProxy: string, txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(assetProxy: string, txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(assetProxy: string, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(assetProxy: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(assetProxy: string): string;
    };
    getAuthorizedAddresses: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
        getABIEncodedTransactionData(): string;
    };
    transferOwnership: {
        sendTransactionAsync(newOwner: string, txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(newOwner: string, txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(newOwner: string, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(newOwner: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(newOwner: string): string;
    };
    static deployFrom0xArtifactAsync(artifact: ContractArtifact | SimpleContractArtifact, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>): Promise<MultiAssetProxyContract>;
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>): Promise<MultiAssetProxyContract>;
    /**
     * @returns      The contract ABI
     */
    static ABI(): ContractAbi;
    constructor(address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>);
}
//# sourceMappingURL=multi_asset_proxy.d.ts.map