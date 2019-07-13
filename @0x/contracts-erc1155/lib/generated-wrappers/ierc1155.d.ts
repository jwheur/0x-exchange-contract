import { BaseContract, PromiseWithTransactionHash } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, ContractArtifact, DecodedLogArgs, TransactionReceiptWithDecodedLogs, TxData, SupportedProvider } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
import { SimpleContractArtifact } from '@0x/types';
export declare type IERC1155EventArgs = IERC1155TransferSingleEventArgs | IERC1155TransferBatchEventArgs | IERC1155ApprovalForAllEventArgs | IERC1155URIEventArgs;
export declare enum IERC1155Events {
    TransferSingle = "TransferSingle",
    TransferBatch = "TransferBatch",
    ApprovalForAll = "ApprovalForAll",
    URI = "URI"
}
export interface IERC1155TransferSingleEventArgs extends DecodedLogArgs {
    operator: string;
    from: string;
    to: string;
    id: BigNumber;
    value: BigNumber;
}
export interface IERC1155TransferBatchEventArgs extends DecodedLogArgs {
    operator: string;
    from: string;
    to: string;
    ids: BigNumber[];
    values: BigNumber[];
}
export interface IERC1155ApprovalForAllEventArgs extends DecodedLogArgs {
    owner: string;
    operator: string;
    approved: boolean;
}
export interface IERC1155URIEventArgs extends DecodedLogArgs {
    value: string;
    id: BigNumber;
}
export declare class IERC1155Contract extends BaseContract {
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
    setApprovalForAll: {
        sendTransactionAsync(operator: string, approved: boolean, txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(operator: string, approved: boolean, txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(operator: string, approved: boolean, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(operator: string, approved: boolean, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(operator: string, approved: boolean): string;
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
    static deployFrom0xArtifactAsync(artifact: ContractArtifact | SimpleContractArtifact, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>): Promise<IERC1155Contract>;
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>): Promise<IERC1155Contract>;
    /**
     * @returns      The contract ABI
     */
    static ABI(): ContractAbi;
    constructor(address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>);
}
//# sourceMappingURL=ierc1155.d.ts.map