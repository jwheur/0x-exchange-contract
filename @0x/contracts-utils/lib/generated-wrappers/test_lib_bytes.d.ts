import { BaseContract } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, ContractArtifact, TxData, SupportedProvider } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
import { SimpleContractArtifact } from '@0x/types';
export declare class TestLibBytesContract extends BaseContract {
    publicPopLastByte: {
        callAsync(b: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[string, string]>;
        getABIEncodedTransactionData(b: string): string;
    };
    publicReadBytesWithLength: {
        callAsync(b: string, index: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(b: string, index: BigNumber): string;
    };
    publicDeepCopyBytes: {
        callAsync(dest: string, source: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(dest: string, source: string): string;
    };
    publicWriteAddress: {
        callAsync(b: string, index: BigNumber, input: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(b: string, index: BigNumber, input: string): string;
    };
    publicWriteBytesWithLength: {
        callAsync(b: string, index: BigNumber, input: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(b: string, index: BigNumber, input: string): string;
    };
    testMemcpy: {
        callAsync(mem: string, dest: BigNumber, source: BigNumber, length: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(mem: string, dest: BigNumber, source: BigNumber, length: BigNumber): string;
    };
    publicReadAddress: {
        callAsync(b: string, index: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(b: string, index: BigNumber): string;
    };
    publicWriteBytes32: {
        callAsync(b: string, index: BigNumber, input: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(b: string, index: BigNumber, input: string): string;
    };
    publicSlice: {
        callAsync(b: string, from: BigNumber, to: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[string, string]>;
        getABIEncodedTransactionData(b: string, from: BigNumber, to: BigNumber): string;
    };
    publicPopLast20Bytes: {
        callAsync(b: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[string, string]>;
        getABIEncodedTransactionData(b: string): string;
    };
    publicEqualsPop1: {
        callAsync(lhs: string, rhs: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
        getABIEncodedTransactionData(lhs: string, rhs: string): string;
    };
    publicWriteUint256: {
        callAsync(b: string, index: BigNumber, input: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(b: string, index: BigNumber, input: BigNumber): string;
    };
    publicReadBytes32: {
        callAsync(b: string, index: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(b: string, index: BigNumber): string;
    };
    publicSliceDestructive: {
        callAsync(b: string, from: BigNumber, to: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[string, string]>;
        getABIEncodedTransactionData(b: string, from: BigNumber, to: BigNumber): string;
    };
    publicReadBytes4: {
        callAsync(b: string, index: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(b: string, index: BigNumber): string;
    };
    publicReadUint256: {
        callAsync(b: string, index: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
        getABIEncodedTransactionData(b: string, index: BigNumber): string;
    };
    publicEquals: {
        callAsync(lhs: string, rhs: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
        getABIEncodedTransactionData(lhs: string, rhs: string): string;
    };
    static deployFrom0xArtifactAsync(artifact: ContractArtifact | SimpleContractArtifact, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>): Promise<TestLibBytesContract>;
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>): Promise<TestLibBytesContract>;
    /**
     * @returns      The contract ABI
     */
    static ABI(): ContractAbi;
    constructor(address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>);
}
//# sourceMappingURL=test_lib_bytes.d.ts.map