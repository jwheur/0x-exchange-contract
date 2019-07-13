import { BaseContract, PromiseWithTransactionHash } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, ContractArtifact, TransactionReceiptWithDecodedLogs, TxData, SupportedProvider } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
import { SimpleContractArtifact } from '@0x/types';
export declare class IAssetDataContract extends BaseContract {
    ERC721Token: {
        sendTransactionAsync(tokenAddress: string, tokenId: BigNumber, txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(tokenAddress: string, tokenId: BigNumber, txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(tokenAddress: string, tokenId: BigNumber, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(tokenAddress: string, tokenId: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(tokenAddress: string, tokenId: BigNumber): string;
    };
    MultiAsset: {
        sendTransactionAsync(amounts: BigNumber[], nestedAssetData: string[], txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(amounts: BigNumber[], nestedAssetData: string[], txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(amounts: BigNumber[], nestedAssetData: string[], txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(amounts: BigNumber[], nestedAssetData: string[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(amounts: BigNumber[], nestedAssetData: string[]): string;
    };
    ERC1155Assets: {
        sendTransactionAsync(tokenAddress: string, tokenIds: BigNumber[], tokenValues: BigNumber[], callbackData: string, txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(tokenAddress: string, tokenIds: BigNumber[], tokenValues: BigNumber[], callbackData: string, txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(tokenAddress: string, tokenIds: BigNumber[], tokenValues: BigNumber[], callbackData: string, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(tokenAddress: string, tokenIds: BigNumber[], tokenValues: BigNumber[], callbackData: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(tokenAddress: string, tokenIds: BigNumber[], tokenValues: BigNumber[], callbackData: string): string;
    };
    StaticCall: {
        sendTransactionAsync(callTarget: string, staticCallData: string, callResultHash: string, txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(callTarget: string, staticCallData: string, callResultHash: string, txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(callTarget: string, staticCallData: string, callResultHash: string, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(callTarget: string, staticCallData: string, callResultHash: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(callTarget: string, staticCallData: string, callResultHash: string): string;
    };
    ERC20Token: {
        sendTransactionAsync(tokenAddress: string, txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(tokenAddress: string, txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(tokenAddress: string, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(tokenAddress: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(tokenAddress: string): string;
    };
    static deployFrom0xArtifactAsync(artifact: ContractArtifact | SimpleContractArtifact, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>): Promise<IAssetDataContract>;
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>): Promise<IAssetDataContract>;
    /**
     * @returns      The contract ABI
     */
    static ABI(): ContractAbi;
    constructor(address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>);
}
//# sourceMappingURL=i_asset_data.d.ts.map