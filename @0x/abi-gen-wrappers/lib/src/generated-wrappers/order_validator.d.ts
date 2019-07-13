import { BaseContract } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, ContractArtifact, TxData, SupportedProvider } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
import { SimpleContractArtifact } from '@0x/types';
export declare class OrderValidatorContract extends BaseContract {
    getOrderAndTraderInfo: {
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
        }, takerAddress: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[{
            orderStatus: number;
            orderHash: string;
            orderTakerAssetFilledAmount: BigNumber;
        }, {
            makerBalance: BigNumber;
            makerAllowance: BigNumber;
            takerBalance: BigNumber;
            takerAllowance: BigNumber;
            makerZrxBalance: BigNumber;
            makerZrxAllowance: BigNumber;
            takerZrxBalance: BigNumber;
            takerZrxAllowance: BigNumber;
        }]>;
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
        }, takerAddress: string): string;
    };
    getBalanceAndAllowance: {
        callAsync(target: string, assetData: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber, BigNumber]>;
        getABIEncodedTransactionData(target: string, assetData: string): string;
    };
    getOrdersAndTradersInfo: {
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
        }[], takerAddresses: string[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[{
            orderStatus: number;
            orderHash: string;
            orderTakerAssetFilledAmount: BigNumber;
        }[], {
            makerBalance: BigNumber;
            makerAllowance: BigNumber;
            takerBalance: BigNumber;
            takerAllowance: BigNumber;
            makerZrxBalance: BigNumber;
            makerZrxAllowance: BigNumber;
            takerZrxBalance: BigNumber;
            takerZrxAllowance: BigNumber;
        }[]]>;
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
        }[], takerAddresses: string[]): string;
    };
    getTradersInfo: {
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
        }[], takerAddresses: string[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<{
            makerBalance: BigNumber;
            makerAllowance: BigNumber;
            takerBalance: BigNumber;
            takerAllowance: BigNumber;
            makerZrxBalance: BigNumber;
            makerZrxAllowance: BigNumber;
            takerZrxBalance: BigNumber;
            takerZrxAllowance: BigNumber;
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
        }[], takerAddresses: string[]): string;
    };
    getERC721TokenOwner: {
        callAsync(token: string, tokenId: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
        getABIEncodedTransactionData(token: string, tokenId: BigNumber): string;
    };
    getBalancesAndAllowances: {
        callAsync(target: string, assetData: string[], callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<[BigNumber[], BigNumber[]]>;
        getABIEncodedTransactionData(target: string, assetData: string[]): string;
    };
    getTraderInfo: {
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
        }, takerAddress: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<{
            makerBalance: BigNumber;
            makerAllowance: BigNumber;
            takerBalance: BigNumber;
            takerAllowance: BigNumber;
            makerZrxBalance: BigNumber;
            makerZrxAllowance: BigNumber;
            takerZrxBalance: BigNumber;
            takerZrxAllowance: BigNumber;
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
        }, takerAddress: string): string;
    };
    static deployFrom0xArtifactAsync(artifact: ContractArtifact | SimpleContractArtifact, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>, _exchange: string, _zrxAssetData: string): Promise<OrderValidatorContract>;
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>, _exchange: string, _zrxAssetData: string): Promise<OrderValidatorContract>;
    /**
     * @returns      The contract ABI
     */
    static ABI(): ContractAbi;
    constructor(address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>);
}
//# sourceMappingURL=order_validator.d.ts.map