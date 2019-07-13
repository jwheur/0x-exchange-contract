import { BaseContract, PromiseWithTransactionHash } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, ContractArtifact, TransactionReceiptWithDecodedLogs, TxData, SupportedProvider } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
import { SimpleContractArtifact } from '@0x/types';
export declare class IERC1155ReceiverContract extends BaseContract {
    onERC1155BatchReceived: {
        sendTransactionAsync(operator: string, from: string, ids: BigNumber[], values: BigNumber[], data: string, txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(operator: string, from: string, ids: BigNumber[], values: BigNumber[], data: string, txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(operator: string, from: string, ids: BigNumber[], values: BigNumber[], data: string, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(operator: string, from: string, ids: BigNumber[], values: BigNumber[], data: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(operator: string, from: string, ids: BigNumber[], values: BigNumber[], data: string): string;
    };
    onERC1155Received: {
        sendTransactionAsync(operator: string, from: string, id: BigNumber, value: BigNumber, data: string, txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(operator: string, from: string, id: BigNumber, value: BigNumber, data: string, txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(operator: string, from: string, id: BigNumber, value: BigNumber, data: string, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(operator: string, from: string, id: BigNumber, value: BigNumber, data: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(operator: string, from: string, id: BigNumber, value: BigNumber, data: string): string;
    };
    static deployFrom0xArtifactAsync(artifact: ContractArtifact | SimpleContractArtifact, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>): Promise<IERC1155ReceiverContract>;
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>): Promise<IERC1155ReceiverContract>;
    /**
     * @returns      The contract ABI
     */
    static ABI(): ContractAbi;
    constructor(address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>);
}
//# sourceMappingURL=i_erc1155_receiver.d.ts.map