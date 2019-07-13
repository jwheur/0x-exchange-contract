import { BaseContract } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, ContractArtifact, TxData, SupportedProvider } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
import { SimpleContractArtifact } from '@0x/types';
export declare class TestLibsContract extends BaseContract {
    publicIsRoundingErrorFloor: {
        callAsync(numerator: BigNumber, denominator: BigNumber, target: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    publicGetPartialAmountCeil: {
        callAsync(numerator: BigNumber, denominator: BigNumber, target: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    getDomainSeparatorSchemaHash: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
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
    };
    publicIsRoundingErrorCeil: {
        callAsync(numerator: BigNumber, denominator: BigNumber, target: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    getOrderSchemaHash: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    publicGetPartialAmountFloor: {
        callAsync(numerator: BigNumber, denominator: BigNumber, target: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    publicGetOrderHash: {
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
        }, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    EIP712_DOMAIN_HASH: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    publicAbiEncodeFillOrder: {
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
        }, takerAssetFillAmount: BigNumber, signature: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    static deployFrom0xArtifactAsync(artifact: ContractArtifact | SimpleContractArtifact, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>): Promise<TestLibsContract>;
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>): Promise<TestLibsContract>;
    constructor(abi: ContractAbi, address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>);
}
//# sourceMappingURL=test_libs.d.ts.map