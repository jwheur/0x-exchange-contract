import { BaseContract, PromiseWithTransactionHash } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, ContractArtifact, DecodedLogArgs, TransactionReceiptWithDecodedLogs, TxData, SupportedProvider } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
import { SimpleContractArtifact } from '@0x/types';
export declare type ERC1155MintableEventArgs = ERC1155MintableTransferSingleEventArgs | ERC1155MintableTransferBatchEventArgs | ERC1155MintableApprovalForAllEventArgs | ERC1155MintableURIEventArgs;
export declare enum ERC1155MintableEvents {
    TransferSingle = "TransferSingle",
    TransferBatch = "TransferBatch",
    ApprovalForAll = "ApprovalForAll",
    URI = "URI"
}
export interface ERC1155MintableTransferSingleEventArgs extends DecodedLogArgs {
    operator: string;
    from: string;
    to: string;
    id: BigNumber;
    value: BigNumber;
}
export interface ERC1155MintableTransferBatchEventArgs extends DecodedLogArgs {
    operator: string;
    from: string;
    to: string;
    ids: BigNumber[];
    values: BigNumber[];
}
export interface ERC1155MintableApprovalForAllEventArgs extends DecodedLogArgs {
    owner: string;
    operator: string;
    approved: boolean;
}
export interface ERC1155MintableURIEventArgs extends DecodedLogArgs {
    value: string;
    id: BigNumber;
}
export declare class ERC1155MintableContract extends BaseContract {
    balanceOf: {
        callAsync(owner: string, id: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(owner: string, id: BigNumber): string;
    };
    maxIndex: {
        callAsync(index_0: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(index_0: BigNumber): string;
    };
    safeBatchTransferFrom: {
        sendTransactionAsync(from: string, to: string, ids: BigNumber[], values: BigNumber[], data: string, txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(from: string, to: string, ids: BigNumber[], values: BigNumber[], data: string, txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(from: string, to: string, ids: BigNumber[], values: BigNumber[], data: string, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(from: string, to: string, ids: BigNumber[], values: BigNumber[], data: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(from: string, to: string, ids: BigNumber[], values: BigNumber[], data: string): string;
    };
    balanceOfBatch: {
        callAsync(owners: string[], ids: BigNumber[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber[]>;
        getABIEncodedTransactionData(owners: string[], ids: BigNumber[]): string;
    };
    isNonFungibleItem: {
        callAsync(id: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
        getABIEncodedTransactionData(id: BigNumber): string;
    };
    ownerOf: {
        callAsync(id: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(id: BigNumber): string;
    };
    getNonFungibleBaseType: {
        callAsync(id: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(id: BigNumber): string;
    };
    isNonFungibleBaseType: {
        callAsync(id: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
        getABIEncodedTransactionData(id: BigNumber): string;
    };
    mintFungible: {
        sendTransactionAsync(id: BigNumber, to: string[], quantities: BigNumber[], txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(id: BigNumber, to: string[], quantities: BigNumber[], txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(id: BigNumber, to: string[], quantities: BigNumber[], txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(id: BigNumber, to: string[], quantities: BigNumber[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(id: BigNumber, to: string[], quantities: BigNumber[]): string;
    };
    getNonFungibleIndex: {
        callAsync(id: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(id: BigNumber): string;
    };
    createWithType: {
        sendTransactionAsync(type_: BigNumber, uri: string, txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(type_: BigNumber, uri: string, txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(type_: BigNumber, uri: string, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(type_: BigNumber, uri: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(type_: BigNumber, uri: string): string;
    };
    setApprovalForAll: {
        sendTransactionAsync(operator: string, approved: boolean, txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(operator: string, approved: boolean, txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(operator: string, approved: boolean, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(operator: string, approved: boolean, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(operator: string, approved: boolean): string;
    };
    isFungible: {
        callAsync(id: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
        getABIEncodedTransactionData(id: BigNumber): string;
    };
    create: {
        sendTransactionAsync(uri: string, isNF: boolean, txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(uri: string, isNF: boolean, txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(uri: string, isNF: boolean, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(uri: string, isNF: boolean, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(uri: string, isNF: boolean): string;
    };
    creators: {
        callAsync(index_0: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(index_0: BigNumber): string;
    };
    ERC1155_RECEIVED: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    isNonFungible: {
        callAsync(id: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
        getABIEncodedTransactionData(id: BigNumber): string;
    };
    isApprovedForAll: {
        callAsync(owner: string, operator: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
        getABIEncodedTransactionData(owner: string, operator: string): string;
    };
    safeTransferFrom: {
        sendTransactionAsync(from: string, to: string, id: BigNumber, value: BigNumber, data: string, txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(from: string, to: string, id: BigNumber, value: BigNumber, data: string, txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(from: string, to: string, id: BigNumber, value: BigNumber, data: string, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(from: string, to: string, id: BigNumber, value: BigNumber, data: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(from: string, to: string, id: BigNumber, value: BigNumber, data: string): string;
    };
    mintNonFungible: {
        sendTransactionAsync(type_: BigNumber, to: string[], txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(type_: BigNumber, to: string[], txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(type_: BigNumber, to: string[], txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(type_: BigNumber, to: string[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(type_: BigNumber, to: string[]): string;
    };
    ERC1155_BATCH_RECEIVED: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    static deployFrom0xArtifactAsync(artifact: ContractArtifact | SimpleContractArtifact, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>): Promise<ERC1155MintableContract>;
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>): Promise<ERC1155MintableContract>;
    /**
     * @returns      The contract ABI
     */
    static ABI(): ContractAbi;
    constructor(address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>);
}
//# sourceMappingURL=erc1155_mintable.d.ts.map