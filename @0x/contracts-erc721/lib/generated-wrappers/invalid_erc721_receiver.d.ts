import { BaseContract, PromiseWithTransactionHash } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, ContractArtifact, DecodedLogArgs, TransactionReceiptWithDecodedLogs, TxData, SupportedProvider } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
import { SimpleContractArtifact } from '@0x/types';
export declare type InvalidERC721ReceiverEventArgs = InvalidERC721ReceiverTokenReceivedEventArgs;
export declare enum InvalidERC721ReceiverEvents {
    TokenReceived = "TokenReceived"
}
export interface InvalidERC721ReceiverTokenReceivedEventArgs extends DecodedLogArgs {
    operator: string;
    from: string;
    tokenId: BigNumber;
    data: string;
}
export declare class InvalidERC721ReceiverContract extends BaseContract {
    onERC721Received: {
        sendTransactionAsync(_operator: string, _from: string, _tokenId: BigNumber, _data: string, txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(_operator: string, _from: string, _tokenId: BigNumber, _data: string, txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(_operator: string, _from: string, _tokenId: BigNumber, _data: string, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_operator: string, _from: string, _tokenId: BigNumber, _data: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(_operator: string, _from: string, _tokenId: BigNumber, _data: string): string;
    };
    static deployFrom0xArtifactAsync(artifact: ContractArtifact | SimpleContractArtifact, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>): Promise<InvalidERC721ReceiverContract>;
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>): Promise<InvalidERC721ReceiverContract>;
    /**
     * @returns      The contract ABI
     */
    static ABI(): ContractAbi;
    constructor(address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>);
}
//# sourceMappingURL=invalid_erc721_receiver.d.ts.map