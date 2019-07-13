import { BaseContract, PromiseWithTransactionHash } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, ContractArtifact, DecodedLogArgs, TransactionReceiptWithDecodedLogs, TxData, SupportedProvider } from 'ethereum-types';
import { SimpleContractArtifact } from '@0x/types';
export declare type CoordinatorRegistryEventArgs = CoordinatorRegistryCoordinatorEndpointSetEventArgs;
export declare enum CoordinatorRegistryEvents {
    CoordinatorEndpointSet = "CoordinatorEndpointSet"
}
export interface CoordinatorRegistryCoordinatorEndpointSetEventArgs extends DecodedLogArgs {
    coordinatorOperator: string;
    coordinatorEndpoint: string;
}
export declare class CoordinatorRegistryContract extends BaseContract {
    setCoordinatorEndpoint: {
        sendTransactionAsync(coordinatorEndpoint: string, txData?: Partial<TxData> | undefined): Promise<string>;
        awaitTransactionSuccessAsync(coordinatorEndpoint: string, txData?: Partial<TxData> | undefined, pollingIntervalMs?: number | undefined, timeoutMs?: number | undefined): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>;
        estimateGasAsync(coordinatorEndpoint: string, txData?: Partial<TxData> | undefined): Promise<number>;
        callAsync(coordinatorEndpoint: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
        getABIEncodedTransactionData(coordinatorEndpoint: string): string;
    };
    getCoordinatorEndpoint: {
        callAsync(coordinatorOperator: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(coordinatorOperator: string): string;
    };
    static deployFrom0xArtifactAsync(artifact: ContractArtifact | SimpleContractArtifact, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>): Promise<CoordinatorRegistryContract>;
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>): Promise<CoordinatorRegistryContract>;
    /**
     * @returns      The contract ABI
     */
    static ABI(): ContractAbi;
    constructor(address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>);
}
//# sourceMappingURL=coordinator_registry.d.ts.map