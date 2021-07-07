import { BaseContract } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, ContractArtifact, TxData, SupportedProvider } from 'ethereum-types';
import { SimpleContractArtifact } from '@0x/types';
export declare class IWalletContract extends BaseContract {
    isValidSignature: {
        callAsync(hash: string, signature: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
        getABIEncodedTransactionData(hash: string, signature: string): string;
    };
    static deployFrom0xArtifactAsync(artifact: ContractArtifact | SimpleContractArtifact, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>): Promise<IWalletContract>;
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>): Promise<IWalletContract>;
    /**
     * @returns      The contract ABI
     */
    static ABI(): ContractAbi;
    constructor(address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>);
}
//# sourceMappingURL=i_wallet.d.ts.map