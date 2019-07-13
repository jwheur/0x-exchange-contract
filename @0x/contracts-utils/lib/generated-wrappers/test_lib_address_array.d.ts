import { BaseContract } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, ContractArtifact, TxData, SupportedProvider } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
import { SimpleContractArtifact } from '@0x/types';
export declare class TestLibAddressArrayContract extends BaseContract {
    publicIndexOf: {
        callAsync(addressArray: string[], target: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[boolean, BigNumber]>;
        getABIEncodedTransactionData(addressArray: string[], target: string): string;
    };
    publicContains: {
        callAsync(addressArray: string[], target: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
        getABIEncodedTransactionData(addressArray: string[], target: string): string;
    };
    publicAppend: {
        callAsync(addressArray: string[], addressToAppend: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string[]>;
        getABIEncodedTransactionData(addressArray: string[], addressToAppend: string): string;
    };
    testAppendRealloc: {
        callAsync(addressArray: string[], freeMemOffset: BigNumber, addressToAppend: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[string[], BigNumber, BigNumber]>;
        getABIEncodedTransactionData(addressArray: string[], freeMemOffset: BigNumber, addressToAppend: string): string;
    };
    static deployFrom0xArtifactAsync(artifact: ContractArtifact | SimpleContractArtifact, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>): Promise<TestLibAddressArrayContract>;
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>): Promise<TestLibAddressArrayContract>;
    /**
     * @returns      The contract ABI
     */
    static ABI(): ContractAbi;
    constructor(address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>);
}
//# sourceMappingURL=test_lib_address_array.d.ts.map