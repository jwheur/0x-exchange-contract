import { BaseContract, PromiseWithTransactionHash } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, ContractArtifact, DecodedLogArgs, TransactionReceiptWithDecodedLogs, TxData, SupportedProvider } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
import { SimpleContractArtifact } from '@0x/types';
export declare type TestExchangeInternalsEventArgs = TestExchangeInternalsSignatureValidatorApprovalEventArgs | TestExchangeInternalsFillEventArgs | TestExchangeInternalsCancelEventArgs | TestExchangeInternalsCancelUpToEventArgs | TestExchangeInternalsAssetProxyRegisteredEventArgs;
export declare enum TestExchangeInternalsEvents {
    SignatureValidatorApproval = "SignatureValidatorApproval",
    Fill = "Fill",
    Cancel = "Cancel",
    CancelUpTo = "CancelUpTo",
    AssetProxyRegistered = "AssetProxyRegistered"
}
export interface TestExchangeInternalsSignatureValidatorApprovalEventArgs extends DecodedLogArgs {
    signerAddress: string;
    validatorAddress: string;
    approved: boolean;
}
export interface TestExchangeInternalsFillEventArgs extends DecodedLogArgs {
    makerAddress: string;
    feeRecipientAddress: string;
    takerAddress: string;
    senderAddress: string;
    makerAssetFilledAmount: BigNumber;
    takerAssetFilledAmount: BigNumber;
    makerFeePaid: BigNumber;
    takerFeePaid: BigNumber;
    orderHash: string;
    makerAssetData: string;
    takerAssetData: string;
}
export interface TestExchangeInternalsCancelEventArgs extends DecodedLogArgs {
    makerAddress: string;
    feeRecipientAddress: string;
    senderAddress: string;
    orderHash: string;
    makerAssetData: string;
    takerAssetData: string;
}
export interface TestExchangeInternalsCancelUpToEventArgs extends DecodedLogArgs {
    makerAddress: string;
    senderAddress: string;
    orderEpoch: BigNumber;
}
export interface TestExchangeInternalsAssetProxyRegisteredEventArgs extends DecodedLogArgs {
    id: string;
    assetProxy: string;
}
export declare class TestExchangeInternalsContract extends BaseContract {
    publicIsRoundingErrorFloor: {
        callAsync(numerator: BigNumber, denominator: BigNumber, target: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
        getABIEncodedTransactionData(numerator: BigNumber, denominator: BigNumber, target: BigNumber): string;
    };
    publicUpdateFilledState: {
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
        }, takerAddress: string, orderHash: string, orderTakerAssetFilledAmount: BigNumber, fillResults: {
            makerAssetFilledAmount: BigNumber;
            takerAssetFilledAmount: BigNumber;
            makerFeePaid: BigNumber;
            takerFeePaid: BigNumber;
        }, txData?: Partial<TxData> | undefined): Promise<string>;
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
        }, takerAddress: string, orderHash: string, orderTakerAssetFilledAmount: BigNumber, fillResults: {
            makerAssetFilledAmount: BigNumber;
            takerAssetFilledAmount: BigNumber;
            makerFeePaid: BigNumber;
            takerFeePaid: BigNumber;
        }, txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
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
        }, takerAddress: string, orderHash: string, orderTakerAssetFilledAmount: BigNumber, fillResults: {
            makerAssetFilledAmount: BigNumber;
            takerAssetFilledAmount: BigNumber;
            makerFeePaid: BigNumber;
            takerFeePaid: BigNumber;
        }, txData?: Partial<TxData> | undefined): Promise<number>;
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
        }, takerAddress: string, orderHash: string, orderTakerAssetFilledAmount: BigNumber, fillResults: {
            makerAssetFilledAmount: BigNumber;
            takerAssetFilledAmount: BigNumber;
            makerFeePaid: BigNumber;
            takerFeePaid: BigNumber;
        }, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
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
        }, takerAddress: string, orderHash: string, orderTakerAssetFilledAmount: BigNumber, fillResults: {
            makerAssetFilledAmount: BigNumber;
            takerAssetFilledAmount: BigNumber;
            makerFeePaid: BigNumber;
            takerFeePaid: BigNumber;
        }): string;
    };
    publicGetPartialAmountCeil: {
        callAsync(numerator: BigNumber, denominator: BigNumber, target: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(numerator: BigNumber, denominator: BigNumber, target: BigNumber): string;
    };
    filled: {
        callAsync(index_0: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(index_0: string): string;
    };
    batchFillOrders: {
        sendTransactionAsync(orders: {
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
        }[], takerAssetFillAmounts: BigNumber[], signatures: string[], txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(orders: {
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
        }[], takerAssetFillAmounts: BigNumber[], signatures: string[], txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(orders: {
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
        }[], takerAssetFillAmounts: BigNumber[], signatures: string[], txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(orders: {
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
        }[], takerAssetFillAmounts: BigNumber[], signatures: string[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<{
            makerAssetFilledAmount: BigNumber;
            takerAssetFilledAmount: BigNumber;
            makerFeePaid: BigNumber;
            takerFeePaid: BigNumber;
        }>;
        getABIEncodedTransactionData(orders: {
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
        }[], takerAssetFillAmounts: BigNumber[], signatures: string[]): string;
    };
    cancelled: {
        callAsync(index_0: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
        getABIEncodedTransactionData(index_0: string): string;
    };
    preSign: {
        sendTransactionAsync(hash: string, signerAddress: string, signature: string, txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(hash: string, signerAddress: string, signature: string, txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(hash: string, signerAddress: string, signature: string, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(hash: string, signerAddress: string, signature: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(hash: string, signerAddress: string, signature: string): string;
    };
    matchOrders: {
        sendTransactionAsync(leftOrder: {
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
        }, rightOrder: {
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
        }, leftSignature: string, rightSignature: string, txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(leftOrder: {
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
        }, rightOrder: {
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
        }, leftSignature: string, rightSignature: string, txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(leftOrder: {
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
        }, rightOrder: {
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
        }, leftSignature: string, rightSignature: string, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(leftOrder: {
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
        }, rightOrder: {
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
        }, leftSignature: string, rightSignature: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<{
            left: {
                makerAssetFilledAmount: BigNumber;
                takerAssetFilledAmount: BigNumber;
                makerFeePaid: BigNumber;
                takerFeePaid: BigNumber;
            };
            right: {
                makerAssetFilledAmount: BigNumber;
                takerAssetFilledAmount: BigNumber;
                makerFeePaid: BigNumber;
                takerFeePaid: BigNumber;
            };
            leftMakerAssetSpreadAmount: BigNumber;
        }>;
        getABIEncodedTransactionData(leftOrder: {
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
        }, rightOrder: {
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
        }, leftSignature: string, rightSignature: string): string;
    };
    fillOrderNoThrow: {
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
        }, takerAssetFillAmount: BigNumber, signature: string, txData?: Partial<TxData> | undefined): Promise<string>;
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
        }, takerAssetFillAmount: BigNumber, signature: string, txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
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
        }, takerAssetFillAmount: BigNumber, signature: string, txData?: Partial<TxData> | undefined): Promise<number>;
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
        }, takerAssetFillAmount: BigNumber, signature: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<{
            makerAssetFilledAmount: BigNumber;
            takerAssetFilledAmount: BigNumber;
            makerFeePaid: BigNumber;
            takerFeePaid: BigNumber;
        }>;
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
        }, takerAssetFillAmount: BigNumber, signature: string): string;
    };
    assetProxies: {
        callAsync(index_0: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(index_0: string): string;
    };
    batchCancelOrders: {
        sendTransactionAsync(orders: {
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
        }[], txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(orders: {
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
        }[], txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(orders: {
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
        }[], txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(orders: {
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
        }[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(orders: {
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
        }[]): string;
    };
    batchFillOrKillOrders: {
        sendTransactionAsync(orders: {
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
        }[], takerAssetFillAmounts: BigNumber[], signatures: string[], txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(orders: {
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
        }[], takerAssetFillAmounts: BigNumber[], signatures: string[], txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(orders: {
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
        }[], takerAssetFillAmounts: BigNumber[], signatures: string[], txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(orders: {
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
        }[], takerAssetFillAmounts: BigNumber[], signatures: string[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<{
            makerAssetFilledAmount: BigNumber;
            takerAssetFilledAmount: BigNumber;
            makerFeePaid: BigNumber;
            takerFeePaid: BigNumber;
        }>;
        getABIEncodedTransactionData(orders: {
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
        }[], takerAssetFillAmounts: BigNumber[], signatures: string[]): string;
    };
    cancelOrdersUpTo: {
        sendTransactionAsync(targetOrderEpoch: BigNumber, txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(targetOrderEpoch: BigNumber, txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(targetOrderEpoch: BigNumber, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(targetOrderEpoch: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(targetOrderEpoch: BigNumber): string;
    };
    batchFillOrdersNoThrow: {
        sendTransactionAsync(orders: {
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
        }[], takerAssetFillAmounts: BigNumber[], signatures: string[], txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(orders: {
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
        }[], takerAssetFillAmounts: BigNumber[], signatures: string[], txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(orders: {
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
        }[], takerAssetFillAmounts: BigNumber[], signatures: string[], txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(orders: {
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
        }[], takerAssetFillAmounts: BigNumber[], signatures: string[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<{
            makerAssetFilledAmount: BigNumber;
            takerAssetFilledAmount: BigNumber;
            makerFeePaid: BigNumber;
            takerFeePaid: BigNumber;
        }>;
        getABIEncodedTransactionData(orders: {
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
        }[], takerAssetFillAmounts: BigNumber[], signatures: string[]): string;
    };
    getAssetProxy: {
        callAsync(assetProxyId: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(assetProxyId: string): string;
    };
    transactions: {
        callAsync(index_0: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
        getABIEncodedTransactionData(index_0: string): string;
    };
    fillOrKillOrder: {
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
        }, takerAssetFillAmount: BigNumber, signature: string, txData?: Partial<TxData> | undefined): Promise<string>;
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
        }, takerAssetFillAmount: BigNumber, signature: string, txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
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
        }, takerAssetFillAmount: BigNumber, signature: string, txData?: Partial<TxData> | undefined): Promise<number>;
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
        }, takerAssetFillAmount: BigNumber, signature: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<{
            makerAssetFilledAmount: BigNumber;
            takerAssetFilledAmount: BigNumber;
            makerFeePaid: BigNumber;
            takerFeePaid: BigNumber;
        }>;
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
        }, takerAssetFillAmount: BigNumber, signature: string): string;
    };
    publicAddFillResults: {
        callAsync(totalFillResults: {
            makerAssetFilledAmount: BigNumber;
            takerAssetFilledAmount: BigNumber;
            makerFeePaid: BigNumber;
            takerFeePaid: BigNumber;
        }, singleFillResults: {
            makerAssetFilledAmount: BigNumber;
            takerAssetFilledAmount: BigNumber;
            makerFeePaid: BigNumber;
            takerFeePaid: BigNumber;
        }, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<{
            makerAssetFilledAmount: BigNumber;
            takerAssetFilledAmount: BigNumber;
            makerFeePaid: BigNumber;
            takerFeePaid: BigNumber;
        }>;
        getABIEncodedTransactionData(totalFillResults: {
            makerAssetFilledAmount: BigNumber;
            takerAssetFilledAmount: BigNumber;
            makerFeePaid: BigNumber;
            takerFeePaid: BigNumber;
        }, singleFillResults: {
            makerAssetFilledAmount: BigNumber;
            takerAssetFilledAmount: BigNumber;
            makerFeePaid: BigNumber;
            takerFeePaid: BigNumber;
        }): string;
    };
    publicIsRoundingErrorCeil: {
        callAsync(numerator: BigNumber, denominator: BigNumber, target: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
        getABIEncodedTransactionData(numerator: BigNumber, denominator: BigNumber, target: BigNumber): string;
    };
    setSignatureValidatorApproval: {
        sendTransactionAsync(validatorAddress: string, approval: boolean, txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(validatorAddress: string, approval: boolean, txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(validatorAddress: string, approval: boolean, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(validatorAddress: string, approval: boolean, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(validatorAddress: string, approval: boolean): string;
    };
    allowedValidators: {
        callAsync(index_0: string, index_1: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
        getABIEncodedTransactionData(index_0: string, index_1: string): string;
    };
    marketSellOrders: {
        sendTransactionAsync(orders: {
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
        }[], takerAssetFillAmount: BigNumber, signatures: string[], txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(orders: {
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
        }[], takerAssetFillAmount: BigNumber, signatures: string[], txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(orders: {
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
        }[], takerAssetFillAmount: BigNumber, signatures: string[], txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(orders: {
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
        }[], takerAssetFillAmount: BigNumber, signatures: string[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<{
            makerAssetFilledAmount: BigNumber;
            takerAssetFilledAmount: BigNumber;
            makerFeePaid: BigNumber;
            takerFeePaid: BigNumber;
        }>;
        getABIEncodedTransactionData(orders: {
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
        }[], takerAssetFillAmount: BigNumber, signatures: string[]): string;
    };
    getOrdersInfo: {
        callAsync(orders: {
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
        }[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<{
            orderStatus: number;
            orderHash: string;
            orderTakerAssetFilledAmount: BigNumber;
        }[]>;
        getABIEncodedTransactionData(orders: {
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
        }[]): string;
    };
    preSigned: {
        callAsync(index_0: string, index_1: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
        getABIEncodedTransactionData(index_0: string, index_1: string): string;
    };
    owner: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    isValidSignature: {
        callAsync(hash: string, signerAddress: string, signature: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
        getABIEncodedTransactionData(hash: string, signerAddress: string, signature: string): string;
    };
    marketBuyOrdersNoThrow: {
        sendTransactionAsync(orders: {
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
        }[], makerAssetFillAmount: BigNumber, signatures: string[], txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(orders: {
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
        }[], makerAssetFillAmount: BigNumber, signatures: string[], txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(orders: {
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
        }[], makerAssetFillAmount: BigNumber, signatures: string[], txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(orders: {
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
        }[], makerAssetFillAmount: BigNumber, signatures: string[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<{
            makerAssetFilledAmount: BigNumber;
            takerAssetFilledAmount: BigNumber;
            makerFeePaid: BigNumber;
            takerFeePaid: BigNumber;
        }>;
        getABIEncodedTransactionData(orders: {
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
        }[], makerAssetFillAmount: BigNumber, signatures: string[]): string;
    };
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
        }, takerAssetFillAmount: BigNumber, signature: string, txData?: Partial<TxData> | undefined): Promise<string>;
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
        }, takerAssetFillAmount: BigNumber, signature: string, txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
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
        }, takerAssetFillAmount: BigNumber, signature: string, txData?: Partial<TxData> | undefined): Promise<number>;
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
        }, takerAssetFillAmount: BigNumber, signature: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<{
            makerAssetFilledAmount: BigNumber;
            takerAssetFilledAmount: BigNumber;
            makerFeePaid: BigNumber;
            takerFeePaid: BigNumber;
        }>;
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
        }, takerAssetFillAmount: BigNumber, signature: string): string;
    };
    publicGetPartialAmountFloor: {
        callAsync(numerator: BigNumber, denominator: BigNumber, target: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(numerator: BigNumber, denominator: BigNumber, target: BigNumber): string;
    };
    executeTransaction: {
        sendTransactionAsync(salt: BigNumber, signerAddress: string, data: string, signature: string, txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(salt: BigNumber, signerAddress: string, data: string, signature: string, txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(salt: BigNumber, signerAddress: string, data: string, signature: string, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(salt: BigNumber, signerAddress: string, data: string, signature: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(salt: BigNumber, signerAddress: string, data: string, signature: string): string;
    };
    registerAssetProxy: {
        sendTransactionAsync(assetProxy: string, txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(assetProxy: string, txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(assetProxy: string, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(assetProxy: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(assetProxy: string): string;
    };
    getOrderInfo: {
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
        }, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<{
            orderStatus: number;
            orderHash: string;
            orderTakerAssetFilledAmount: BigNumber;
        }>;
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
        }): string;
    };
    cancelOrder: {
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
        }, txData?: Partial<TxData> | undefined): Promise<string>;
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
        }, txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
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
        }, txData?: Partial<TxData> | undefined): Promise<number>;
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
        }, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
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
        }): string;
    };
    orderEpoch: {
        callAsync(index_0: string, index_1: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(index_0: string, index_1: string): string;
    };
    ZRX_ASSET_DATA: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    marketSellOrdersNoThrow: {
        sendTransactionAsync(orders: {
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
        }[], takerAssetFillAmount: BigNumber, signatures: string[], txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(orders: {
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
        }[], takerAssetFillAmount: BigNumber, signatures: string[], txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(orders: {
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
        }[], takerAssetFillAmount: BigNumber, signatures: string[], txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(orders: {
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
        }[], takerAssetFillAmount: BigNumber, signatures: string[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<{
            makerAssetFilledAmount: BigNumber;
            takerAssetFilledAmount: BigNumber;
            makerFeePaid: BigNumber;
            takerFeePaid: BigNumber;
        }>;
        getABIEncodedTransactionData(orders: {
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
        }[], takerAssetFillAmount: BigNumber, signatures: string[]): string;
    };
    publicSafeGetPartialAmountFloor: {
        callAsync(numerator: BigNumber, denominator: BigNumber, target: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(numerator: BigNumber, denominator: BigNumber, target: BigNumber): string;
    };
    publicSafeGetPartialAmountCeil: {
        callAsync(numerator: BigNumber, denominator: BigNumber, target: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(numerator: BigNumber, denominator: BigNumber, target: BigNumber): string;
    };
    publicCalculateFillResults: {
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
        }, takerAssetFilledAmount: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<{
            makerAssetFilledAmount: BigNumber;
            takerAssetFilledAmount: BigNumber;
            makerFeePaid: BigNumber;
            takerFeePaid: BigNumber;
        }>;
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
        }, takerAssetFilledAmount: BigNumber): string;
    };
    EIP712_DOMAIN_HASH: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    marketBuyOrders: {
        sendTransactionAsync(orders: {
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
        }[], makerAssetFillAmount: BigNumber, signatures: string[], txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(orders: {
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
        }[], makerAssetFillAmount: BigNumber, signatures: string[], txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(orders: {
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
        }[], makerAssetFillAmount: BigNumber, signatures: string[], txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(orders: {
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
        }[], makerAssetFillAmount: BigNumber, signatures: string[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<{
            makerAssetFilledAmount: BigNumber;
            takerAssetFilledAmount: BigNumber;
            makerFeePaid: BigNumber;
            takerFeePaid: BigNumber;
        }>;
        getABIEncodedTransactionData(orders: {
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
        }[], makerAssetFillAmount: BigNumber, signatures: string[]): string;
    };
    currentContextAddress: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    transferOwnership: {
        sendTransactionAsync(newOwner: string, txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(newOwner: string, txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(newOwner: string, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(newOwner: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(newOwner: string): string;
    };
    VERSION: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    static deployFrom0xArtifactAsync(artifact: ContractArtifact | SimpleContractArtifact, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>): Promise<TestExchangeInternalsContract>;
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>): Promise<TestExchangeInternalsContract>;
    /**
     * @returns      The contract ABI
     */
    static ABI(): ContractAbi;
    constructor(address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>);
}
//# sourceMappingURL=test_exchange_internals.d.ts.map