import { BaseContract, PromiseWithTransactionHash } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, ContractArtifact, DecodedLogArgs, TransactionReceiptWithDecodedLogs, TxData, SupportedProvider } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
import { SimpleContractArtifact } from '@0x/types';
export declare type DummyERC721TokenEventArgs = DummyERC721TokenTransferEventArgs | DummyERC721TokenApprovalEventArgs | DummyERC721TokenApprovalForAllEventArgs;
export declare enum DummyERC721TokenEvents {
    Transfer = "Transfer",
    Approval = "Approval",
    ApprovalForAll = "ApprovalForAll"
}
export interface DummyERC721TokenTransferEventArgs extends DecodedLogArgs {
    _from: string;
    _to: string;
    _tokenId: BigNumber;
}
export interface DummyERC721TokenApprovalEventArgs extends DecodedLogArgs {
    _owner: string;
    _approved: string;
    _tokenId: BigNumber;
}
export interface DummyERC721TokenApprovalForAllEventArgs extends DecodedLogArgs {
    _owner: string;
    _operator: string;
    _approved: boolean;
}
export declare class DummyERC721TokenContract extends BaseContract {
    name: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
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
    mint: {
        sendTransactionAsync(_to: string, _tokenId: BigNumber, txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(_to: string, _tokenId: BigNumber, txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(_to: string, _tokenId: BigNumber, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_to: string, _tokenId: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_to: string, _tokenId: BigNumber): string;
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
    owner: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    symbol: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    burn: {
        sendTransactionAsync(_owner: string, _tokenId: BigNumber, txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(_owner: string, _tokenId: BigNumber, txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(_owner: string, _tokenId: BigNumber, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_owner: string, _tokenId: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_owner: string, _tokenId: BigNumber): string;
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
    transferOwnership: {
        sendTransactionAsync(newOwner: string, txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(newOwner: string, txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(newOwner: string, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(newOwner: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(newOwner: string): string;
    };
    static deployFrom0xArtifactAsync(artifact: ContractArtifact | SimpleContractArtifact, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>, _name: string, _symbol: string): Promise<DummyERC721TokenContract>;
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>, _name: string, _symbol: string): Promise<DummyERC721TokenContract>;
    /**
     * @returns      The contract ABI
     */
    static ABI(): ContractAbi;
    constructor(address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>);
}
//# sourceMappingURL=dummy_erc721_token.d.ts.map