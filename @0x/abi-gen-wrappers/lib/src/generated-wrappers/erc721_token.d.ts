import { BaseContract, PromiseWithTransactionHash } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, ContractArtifact, DecodedLogArgs, TransactionReceiptWithDecodedLogs, TxData, SupportedProvider } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
import { SimpleContractArtifact } from '@0x/types';
export declare type ERC721TokenEventArgs = ERC721TokenTransferEventArgs | ERC721TokenApprovalEventArgs | ERC721TokenApprovalForAllEventArgs;
export declare enum ERC721TokenEvents {
    Transfer = "Transfer",
    Approval = "Approval",
    ApprovalForAll = "ApprovalForAll"
}
export interface ERC721TokenTransferEventArgs extends DecodedLogArgs {
    _from: string;
    _to: string;
    _tokenId: BigNumber;
}
export interface ERC721TokenApprovalEventArgs extends DecodedLogArgs {
    _owner: string;
    _approved: string;
    _tokenId: BigNumber;
}
export interface ERC721TokenApprovalForAllEventArgs extends DecodedLogArgs {
    _owner: string;
    _operator: string;
    _approved: boolean;
}
export declare class ERC721TokenContract extends BaseContract {
    getApproved: {
        callAsync(_tokenId: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(_tokenId: BigNumber): string;
    };
    approve: {
        sendTransactionAsync(_approved: string, _tokenId: BigNumber, txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(_approved: string, _tokenId: BigNumber, txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(_approved: string, _tokenId: BigNumber, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_approved: string, _tokenId: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_approved: string, _tokenId: BigNumber): string;
    };
    transferFrom: {
        sendTransactionAsync(_from: string, _to: string, _tokenId: BigNumber, txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(_from: string, _to: string, _tokenId: BigNumber, txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(_from: string, _to: string, _tokenId: BigNumber, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_from: string, _to: string, _tokenId: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_from: string, _to: string, _tokenId: BigNumber): string;
    };
    safeTransferFrom1: {
        sendTransactionAsync(_from: string, _to: string, _tokenId: BigNumber, txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(_from: string, _to: string, _tokenId: BigNumber, txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(_from: string, _to: string, _tokenId: BigNumber, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_from: string, _to: string, _tokenId: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_from: string, _to: string, _tokenId: BigNumber): string;
    };
    ownerOf: {
        callAsync(_tokenId: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(_tokenId: BigNumber): string;
    };
    balanceOf: {
        callAsync(_owner: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(_owner: string): string;
    };
    setApprovalForAll: {
        sendTransactionAsync(_operator: string, _approved: boolean, txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(_operator: string, _approved: boolean, txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(_operator: string, _approved: boolean, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_operator: string, _approved: boolean, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_operator: string, _approved: boolean): string;
    };
    safeTransferFrom2: {
        sendTransactionAsync(_from: string, _to: string, _tokenId: BigNumber, _data: string, txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(_from: string, _to: string, _tokenId: BigNumber, _data: string, txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(_from: string, _to: string, _tokenId: BigNumber, _data: string, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_from: string, _to: string, _tokenId: BigNumber, _data: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_from: string, _to: string, _tokenId: BigNumber, _data: string): string;
    };
    isApprovedForAll: {
        callAsync(_owner: string, _operator: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
        getABIEncodedTransactionData(_owner: string, _operator: string): string;
    };
    static deployFrom0xArtifactAsync(artifact: ContractArtifact | SimpleContractArtifact, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>): Promise<ERC721TokenContract>;
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>): Promise<ERC721TokenContract>;
    /**
     * @returns      The contract ABI
     */
    static ABI(): ContractAbi;
    constructor(address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>);
}
//# sourceMappingURL=erc721_token.d.ts.map