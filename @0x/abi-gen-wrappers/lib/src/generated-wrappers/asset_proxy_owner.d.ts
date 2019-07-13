import { BaseContract, PromiseWithTransactionHash } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, ContractArtifact, DecodedLogArgs, TransactionReceiptWithDecodedLogs, TxData, SupportedProvider } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
import { SimpleContractArtifact } from '@0x/types';
export declare type AssetProxyOwnerEventArgs = AssetProxyOwnerAssetProxyRegistrationEventArgs | AssetProxyOwnerConfirmationTimeSetEventArgs | AssetProxyOwnerTimeLockChangeEventArgs | AssetProxyOwnerConfirmationEventArgs | AssetProxyOwnerRevocationEventArgs | AssetProxyOwnerSubmissionEventArgs | AssetProxyOwnerExecutionEventArgs | AssetProxyOwnerExecutionFailureEventArgs | AssetProxyOwnerDepositEventArgs | AssetProxyOwnerOwnerAdditionEventArgs | AssetProxyOwnerOwnerRemovalEventArgs | AssetProxyOwnerRequirementChangeEventArgs;
export declare enum AssetProxyOwnerEvents {
    AssetProxyRegistration = "AssetProxyRegistration",
    ConfirmationTimeSet = "ConfirmationTimeSet",
    TimeLockChange = "TimeLockChange",
    Confirmation = "Confirmation",
    Revocation = "Revocation",
    Submission = "Submission",
    Execution = "Execution",
    ExecutionFailure = "ExecutionFailure",
    Deposit = "Deposit",
    OwnerAddition = "OwnerAddition",
    OwnerRemoval = "OwnerRemoval",
    RequirementChange = "RequirementChange"
}
export interface AssetProxyOwnerAssetProxyRegistrationEventArgs extends DecodedLogArgs {
    assetProxyContract: string;
    isRegistered: boolean;
}
export interface AssetProxyOwnerConfirmationTimeSetEventArgs extends DecodedLogArgs {
    transactionId: BigNumber;
    confirmationTime: BigNumber;
}
export interface AssetProxyOwnerTimeLockChangeEventArgs extends DecodedLogArgs {
    secondsTimeLocked: BigNumber;
}
export interface AssetProxyOwnerConfirmationEventArgs extends DecodedLogArgs {
    sender: string;
    transactionId: BigNumber;
}
export interface AssetProxyOwnerRevocationEventArgs extends DecodedLogArgs {
    sender: string;
    transactionId: BigNumber;
}
export interface AssetProxyOwnerSubmissionEventArgs extends DecodedLogArgs {
    transactionId: BigNumber;
}
export interface AssetProxyOwnerExecutionEventArgs extends DecodedLogArgs {
    transactionId: BigNumber;
}
export interface AssetProxyOwnerExecutionFailureEventArgs extends DecodedLogArgs {
    transactionId: BigNumber;
}
export interface AssetProxyOwnerDepositEventArgs extends DecodedLogArgs {
    sender: string;
    value: BigNumber;
}
export interface AssetProxyOwnerOwnerAdditionEventArgs extends DecodedLogArgs {
    owner: string;
}
export interface AssetProxyOwnerOwnerRemovalEventArgs extends DecodedLogArgs {
    owner: string;
}
export interface AssetProxyOwnerRequirementChangeEventArgs extends DecodedLogArgs {
    required: BigNumber;
}
export declare class AssetProxyOwnerContract extends BaseContract {
    owners: {
        callAsync(index_0: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(index_0: BigNumber): string;
    };
    removeOwner: {
        sendTransactionAsync(owner: string, txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(owner: string, txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(owner: string, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(owner: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(owner: string): string;
    };
    revokeConfirmation: {
        sendTransactionAsync(transactionId: BigNumber, txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(transactionId: BigNumber, txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(transactionId: BigNumber, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(transactionId: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(transactionId: BigNumber): string;
    };
    isOwner: {
        callAsync(index_0: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
        getABIEncodedTransactionData(index_0: string): string;
    };
    confirmations: {
        callAsync(index_0: BigNumber, index_1: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
        getABIEncodedTransactionData(index_0: BigNumber, index_1: string): string;
    };
    executeRemoveAuthorizedAddressAtIndex: {
        sendTransactionAsync(transactionId: BigNumber, txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(transactionId: BigNumber, txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(transactionId: BigNumber, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(transactionId: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(transactionId: BigNumber): string;
    };
    secondsTimeLocked: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(): string;
    };
    getTransactionCount: {
        callAsync(pending: boolean, executed: boolean, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(pending: boolean, executed: boolean): string;
    };
    registerAssetProxy: {
        sendTransactionAsync(assetProxyContract: string, isRegistered: boolean, txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(assetProxyContract: string, isRegistered: boolean, txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(assetProxyContract: string, isRegistered: boolean, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(assetProxyContract: string, isRegistered: boolean, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(assetProxyContract: string, isRegistered: boolean): string;
    };
    addOwner: {
        sendTransactionAsync(owner: string, txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(owner: string, txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(owner: string, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(owner: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(owner: string): string;
    };
    isConfirmed: {
        callAsync(transactionId: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
        getABIEncodedTransactionData(transactionId: BigNumber): string;
    };
    changeTimeLock: {
        sendTransactionAsync(_secondsTimeLocked: BigNumber, txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(_secondsTimeLocked: BigNumber, txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(_secondsTimeLocked: BigNumber, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_secondsTimeLocked: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_secondsTimeLocked: BigNumber): string;
    };
    isAssetProxyRegistered: {
        callAsync(index_0: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
        getABIEncodedTransactionData(index_0: string): string;
    };
    getConfirmationCount: {
        callAsync(transactionId: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(transactionId: BigNumber): string;
    };
    transactions: {
        callAsync(index_0: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[string, BigNumber, string, boolean]>;
        getABIEncodedTransactionData(index_0: BigNumber): string;
    };
    getOwners: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
        getABIEncodedTransactionData(): string;
    };
    getTransactionIds: {
        callAsync(from: BigNumber, to: BigNumber, pending: boolean, executed: boolean, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber[]>;
        getABIEncodedTransactionData(from: BigNumber, to: BigNumber, pending: boolean, executed: boolean): string;
    };
    getConfirmations: {
        callAsync(transactionId: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
        getABIEncodedTransactionData(transactionId: BigNumber): string;
    };
    transactionCount: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(): string;
    };
    changeRequirement: {
        sendTransactionAsync(_required: BigNumber, txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(_required: BigNumber, txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(_required: BigNumber, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(_required: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(_required: BigNumber): string;
    };
    confirmTransaction: {
        sendTransactionAsync(transactionId: BigNumber, txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(transactionId: BigNumber, txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(transactionId: BigNumber, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(transactionId: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(transactionId: BigNumber): string;
    };
    submitTransaction: {
        sendTransactionAsync(destination: string, value: BigNumber, data: string, txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(destination: string, value: BigNumber, data: string, txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(destination: string, value: BigNumber, data: string, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(destination: string, value: BigNumber, data: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(destination: string, value: BigNumber, data: string): string;
    };
    confirmationTimes: {
        callAsync(index_0: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(index_0: BigNumber): string;
    };
    MAX_OWNER_COUNT: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(): string;
    };
    required: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(): string;
    };
    replaceOwner: {
        sendTransactionAsync(owner: string, newOwner: string, txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(owner: string, newOwner: string, txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(owner: string, newOwner: string, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(owner: string, newOwner: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(owner: string, newOwner: string): string;
    };
    executeTransaction: {
        sendTransactionAsync(transactionId: BigNumber, txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(transactionId: BigNumber, txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(transactionId: BigNumber, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(transactionId: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(transactionId: BigNumber): string;
    };
    static deployFrom0xArtifactAsync(artifact: ContractArtifact | SimpleContractArtifact, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>, _owners: string[], _assetProxyContracts: string[], _required: BigNumber, _secondsTimeLocked: BigNumber): Promise<AssetProxyOwnerContract>;
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>, _owners: string[], _assetProxyContracts: string[], _required: BigNumber, _secondsTimeLocked: BigNumber): Promise<AssetProxyOwnerContract>;
    /**
     * @returns      The contract ABI
     */
    static ABI(): ContractAbi;
    constructor(address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>);
}
//# sourceMappingURL=asset_proxy_owner.d.ts.map