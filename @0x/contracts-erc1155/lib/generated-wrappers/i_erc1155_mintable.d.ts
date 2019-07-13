import { BaseContract, PromiseWithTransactionHash } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, ContractArtifact, DecodedLogArgs, TransactionReceiptWithDecodedLogs, TxData, SupportedProvider } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
import { SimpleContractArtifact } from '@0x/types';
export declare type IERC1155MintableEventArgs = IERC1155MintableTransferSingleEventArgs | IERC1155MintableTransferBatchEventArgs | IERC1155MintableApprovalForAllEventArgs | IERC1155MintableURIEventArgs;
export declare enum IERC1155MintableEvents {
    TransferSingle = "TransferSingle",
    TransferBatch = "TransferBatch",
    ApprovalForAll = "ApprovalForAll",
    URI = "URI"
}
export interface IERC1155MintableTransferSingleEventArgs extends DecodedLogArgs {
    operator: string;
    from: string;
    to: string;
    id: BigNumber;
    value: BigNumber;
}
export interface IERC1155MintableTransferBatchEventArgs extends DecodedLogArgs {
    operator: string;
    from: string;
    to: string;
    ids: BigNumber[];
    values: BigNumber[];
}
export interface IERC1155MintableApprovalForAllEventArgs extends DecodedLogArgs {
    owner: string;
    operator: string;
    approved: boolean;
}
export interface IERC1155MintableURIEventArgs extends DecodedLogArgs {
    value: string;
    id: BigNumber;
}
export declare class IERC1155MintableContract extends BaseContract {
    balanceOf: {
        callAsync(owner: string, id: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(owner: string, id: BigNumber): string;
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
    mintFungible: {
        sendTransactionAsync(id: BigNumber, to: string[], quantities: BigNumber[], txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(id: BigNumber, to: string[], quantities: BigNumber[], txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(id: BigNumber, to: string[], quantities: BigNumber[], txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(id: BigNumber, to: string[], quantities: BigNumber[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(id: BigNumber, to: string[], quantities: BigNumber[]): string;
    };
    setApprovalForAll: {
        sendTransactionAsync(operator: string, approved: boolean, txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(operator: string, approved: boolean, txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(operator: string, approved: boolean, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(operator: string, approved: boolean, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(operator: string, approved: boolean): string;
    };
    create: {
        sendTransactionAsync(uri: string, isNF: boolean, txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(uri: string, isNF: boolean, txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(uri: string, isNF: boolean, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(uri: string, isNF: boolean, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(uri: string, isNF: boolean): string;
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
    static deployFrom0xArtifactAsync(artifact: ContractArtifact | SimpleContractArtifact, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>): Promise<IERC1155MintableContract>;
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>): Promise<IERC1155MintableContract>;
    /**
     * @returns      The contract ABI
     */
    static ABI(): ContractAbi;
    constructor(address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>);
}
//# sourceMappingURL=i_erc1155_mintable.d.ts.map