import { BaseContract, PromiseWithTransactionHash } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, ContractArtifact, DecodedLogArgs, TransactionReceiptWithDecodedLogs, TxData, SupportedProvider } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
import { SimpleContractArtifact } from '@0x/types';
export declare type DummyERC1155ReceiverEventArgs = DummyERC1155ReceiverTokenReceivedEventArgs | DummyERC1155ReceiverBatchTokenReceivedEventArgs;
export declare enum DummyERC1155ReceiverEvents {
    TokenReceived = "TokenReceived",
    BatchTokenReceived = "BatchTokenReceived"
}
export interface DummyERC1155ReceiverTokenReceivedEventArgs extends DecodedLogArgs {
    operator: string;
    from: string;
    tokenId: BigNumber;
    tokenValue: BigNumber;
    data: string;
}
export interface DummyERC1155ReceiverBatchTokenReceivedEventArgs extends DecodedLogArgs {
    operator: string;
    from: string;
    tokenIds: BigNumber[];
    tokenValues: BigNumber[];
    data: string;
}
export declare class DummyERC1155ReceiverContract extends BaseContract {
    onERC1155BatchReceived: {
        sendTransactionAsync(operator: string, from: string, ids: BigNumber[], values: BigNumber[], data: string, txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(operator: string, from: string, ids: BigNumber[], values: BigNumber[], data: string, txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(operator: string, from: string, ids: BigNumber[], values: BigNumber[], data: string, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(operator: string, from: string, ids: BigNumber[], values: BigNumber[], data: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(operator: string, from: string, ids: BigNumber[], values: BigNumber[], data: string): string;
    };
    setRejectTransferFlag: {
        sendTransactionAsync(_shouldRejectTransfer: boolean, txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(_shouldRejectTransfer: boolean, txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(_shouldRejectTransfer: boolean, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_shouldRejectTransfer: boolean, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_shouldRejectTransfer: boolean): string;
    };
    ERC1155_RECEIVED: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    onERC1155Received: {
        sendTransactionAsync(operator: string, from: string, id: BigNumber, value: BigNumber, data: string, txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(operator: string, from: string, id: BigNumber, value: BigNumber, data: string, txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(operator: string, from: string, id: BigNumber, value: BigNumber, data: string, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(operator: string, from: string, id: BigNumber, value: BigNumber, data: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(operator: string, from: string, id: BigNumber, value: BigNumber, data: string): string;
    };
    ERC1155_BATCH_RECEIVED: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    static deployFrom0xArtifactAsync(artifact: ContractArtifact | SimpleContractArtifact, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>): Promise<DummyERC1155ReceiverContract>;
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>): Promise<DummyERC1155ReceiverContract>;
    /**
     * @returns      The contract ABI
     */
    static ABI(): ContractAbi;
    constructor(address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>);
}
//# sourceMappingURL=dummy_erc1155_receiver.d.ts.map