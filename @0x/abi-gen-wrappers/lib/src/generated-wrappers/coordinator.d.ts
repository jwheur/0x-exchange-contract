import { BaseContract, PromiseWithTransactionHash } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, ContractArtifact, TransactionReceiptWithDecodedLogs, TxData, SupportedProvider } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
import { SimpleContractArtifact } from '@0x/types';
export declare class CoordinatorContract extends BaseContract {
    getSignerAddress: {
        callAsync(hash: string, signature: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(hash: string, signature: string): string;
    };
    getTransactionHash: {
        callAsync(transaction: {
            salt: BigNumber;
            signerAddress: string;
            data: string;
        }, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(transaction: {
            salt: BigNumber;
            signerAddress: string;
            data: string;
        }): string;
    };
    getCoordinatorApprovalHash: {
        callAsync(approval: {
            txOrigin: string;
            transactionHash: string;
            transactionSignature: string;
            approvalExpirationTimeSeconds: BigNumber;
        }, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(approval: {
            txOrigin: string;
            transactionHash: string;
            transactionSignature: string;
            approvalExpirationTimeSeconds: BigNumber;
        }): string;
    };
    executeTransaction: {
        sendTransactionAsync(transaction: {
            salt: BigNumber;
            signerAddress: string;
            data: string;
        }, txOrigin: string, transactionSignature: string, approvalExpirationTimeSeconds: BigNumber[], approvalSignatures: string[], txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(transaction: {
            salt: BigNumber;
            signerAddress: string;
            data: string;
        }, txOrigin: string, transactionSignature: string, approvalExpirationTimeSeconds: BigNumber[], approvalSignatures: string[], txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(transaction: {
            salt: BigNumber;
            signerAddress: string;
            data: string;
        }, txOrigin: string, transactionSignature: string, approvalExpirationTimeSeconds: BigNumber[], approvalSignatures: string[], txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(transaction: {
            salt: BigNumber;
            signerAddress: string;
            data: string;
        }, txOrigin: string, transactionSignature: string, approvalExpirationTimeSeconds: BigNumber[], approvalSignatures: string[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(transaction: {
            salt: BigNumber;
            signerAddress: string;
            data: string;
        }, txOrigin: string, transactionSignature: string, approvalExpirationTimeSeconds: BigNumber[], approvalSignatures: string[]): string;
    };
    EIP712_EXCHANGE_DOMAIN_HASH: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    assertValidCoordinatorApprovals: {
        callAsync(transaction: {
            salt: BigNumber;
            signerAddress: string;
            data: string;
        }, txOrigin: string, transactionSignature: string, approvalExpirationTimeSeconds: BigNumber[], approvalSignatures: string[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(transaction: {
            salt: BigNumber;
            signerAddress: string;
            data: string;
        }, txOrigin: string, transactionSignature: string, approvalExpirationTimeSeconds: BigNumber[], approvalSignatures: string[]): string;
    };
    decodeOrdersFromFillData: {
        callAsync(data: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<{
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
        }[]>;
        getABIEncodedTransactionData(data: string): string;
    };
    EIP712_COORDINATOR_DOMAIN_HASH: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(): string;
    };
    static deployFrom0xArtifactAsync(artifact: ContractArtifact | SimpleContractArtifact, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>, _exchange: string): Promise<CoordinatorContract>;
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>, _exchange: string): Promise<CoordinatorContract>;
    /**
     * @returns      The contract ABI
     */
    static ABI(): ContractAbi;
    constructor(address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>);
}
//# sourceMappingURL=coordinator.d.ts.map