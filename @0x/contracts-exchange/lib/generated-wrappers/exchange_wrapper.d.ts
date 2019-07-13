import { BaseContract, PromiseWithTransactionHash } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, ContractArtifact, TransactionReceiptWithDecodedLogs, TxData, SupportedProvider } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
import { SimpleContractArtifact } from '@0x/types';
export declare class ExchangeWrapperContract extends BaseContract {
    fillOrder: {
        sendTransactionAsync(order: {
            makerAddress: string;
            takerAddress: string;
            feeRecipientAddress: string;
            senderAddress: string;
            makerAssetAmount: BigNumber;
            takerAssetAmount: BigNumber;
            makerFee: BigNumber;
            takerFee: BigNumber;
            expirationTimeSeconds: BigNumber;
            salt: BigNumber;
            makerAssetData: string;
            takerAssetData: string;
        }, takerAssetFillAmount: BigNumber, salt: BigNumber, orderSignature: string, takerSignature: string, txData?: Partial<TxData>): Promise<string>;
        awaitTransactionSuccessAsync(order: {
            makerAddress: string;
            takerAddress: string;
            feeRecipientAddress: string;
            senderAddress: string;
            makerAssetAmount: BigNumber;
            takerAssetAmount: BigNumber;
            makerFee: BigNumber;
            takerFee: BigNumber;
            expirationTimeSeconds: BigNumber;
            salt: BigNumber;
            makerAssetData: string;
            takerAssetData: string;
        }, takerAssetFillAmount: BigNumber, salt: BigNumber, orderSignature: string, takerSignature: string, txData?: number | Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(order: {
            makerAddress: string;
            takerAddress: string;
            feeRecipientAddress: string;
            senderAddress: string;
            makerAssetAmount: BigNumber;
            takerAssetAmount: BigNumber;
            makerFee: BigNumber;
            takerFee: BigNumber;
            expirationTimeSeconds: BigNumber;
            salt: BigNumber;
            makerAssetData: string;
            takerAssetData: string;
        }, takerAssetFillAmount: BigNumber, salt: BigNumber, orderSignature: string, takerSignature: string, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(order: {
            makerAddress: string;
            takerAddress: string;
            feeRecipientAddress: string;
            senderAddress: string;
            makerAssetAmount: BigNumber;
            takerAssetAmount: BigNumber;
            makerFee: BigNumber;
            takerFee: BigNumber;
            expirationTimeSeconds: BigNumber;
            salt: BigNumber;
            makerAssetData: string;
            takerAssetData: string;
        }, takerAssetFillAmount: BigNumber, salt: BigNumber, orderSignature: string, takerSignature: string): string;
        callAsync(order: {
            makerAddress: string;
            takerAddress: string;
            feeRecipientAddress: string;
            senderAddress: string;
            makerAssetAmount: BigNumber;
            takerAssetAmount: BigNumber;
            makerFee: BigNumber;
            takerFee: BigNumber;
            expirationTimeSeconds: BigNumber;
            salt: BigNumber;
            makerAssetData: string;
            takerAssetData: string;
        }, takerAssetFillAmount: BigNumber, salt: BigNumber, orderSignature: string, takerSignature: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    cancelOrdersUpTo: {
        sendTransactionAsync(targetOrderEpoch: BigNumber, salt: BigNumber, makerSignature: string, txData?: Partial<TxData>): Promise<string>;
        awaitTransactionSuccessAsync(targetOrderEpoch: BigNumber, salt: BigNumber, makerSignature: string, txData?: number | Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(targetOrderEpoch: BigNumber, salt: BigNumber, makerSignature: string, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(targetOrderEpoch: BigNumber, salt: BigNumber, makerSignature: string): string;
        callAsync(targetOrderEpoch: BigNumber, salt: BigNumber, makerSignature: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    static deployFrom0xArtifactAsync(artifact: ContractArtifact | SimpleContractArtifact, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>, _exchange: string): Promise<ExchangeWrapperContract>;
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>, _exchange: string): Promise<ExchangeWrapperContract>;
    constructor(abi: ContractAbi, address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>);
}
//# sourceMappingURL=exchange_wrapper.d.ts.map