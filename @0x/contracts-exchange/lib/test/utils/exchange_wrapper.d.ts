/// <reference types="web3-provider-engine" />
import { FillResults, OrderInfo, Web3ProviderEngine } from '@0x/contracts-test-utils';
import { SignedOrder, SignedZeroExTransaction } from '@0x/types';
import { BigNumber } from '@0x/utils';
import { TransactionReceiptWithDecodedLogs, ZeroExProvider } from 'ethereum-types';
import { ExchangeContract } from '../../src';
import { AbiDecodedFillOrderData } from './types';
export declare class ExchangeWrapper {
    private readonly _exchange;
    private readonly _web3Wrapper;
    private readonly _logDecoder;
    constructor(exchangeContract: ExchangeContract, provider: Web3ProviderEngine | ZeroExProvider);
    fillOrderAsync(signedOrder: SignedOrder, from: string, opts?: {
        takerAssetFillAmount?: BigNumber;
    }): Promise<TransactionReceiptWithDecodedLogs>;
    cancelOrderAsync(signedOrder: SignedOrder, from: string): Promise<TransactionReceiptWithDecodedLogs>;
    fillOrKillOrderAsync(signedOrder: SignedOrder, from: string, opts?: {
        takerAssetFillAmount?: BigNumber;
    }): Promise<TransactionReceiptWithDecodedLogs>;
    fillOrderNoThrowAsync(signedOrder: SignedOrder, from: string, opts?: {
        takerAssetFillAmount?: BigNumber;
        gas?: number;
    }): Promise<TransactionReceiptWithDecodedLogs>;
    batchFillOrdersAsync(orders: SignedOrder[], from: string, opts?: {
        takerAssetFillAmounts?: BigNumber[];
    }): Promise<TransactionReceiptWithDecodedLogs>;
    batchFillOrKillOrdersAsync(orders: SignedOrder[], from: string, opts?: {
        takerAssetFillAmounts?: BigNumber[];
    }): Promise<TransactionReceiptWithDecodedLogs>;
    batchFillOrdersNoThrowAsync(orders: SignedOrder[], from: string, opts?: {
        takerAssetFillAmounts?: BigNumber[];
        gas?: number;
    }): Promise<TransactionReceiptWithDecodedLogs>;
    marketSellOrdersAsync(orders: SignedOrder[], from: string, opts: {
        takerAssetFillAmount: BigNumber;
    }): Promise<TransactionReceiptWithDecodedLogs>;
    marketSellOrdersNoThrowAsync(orders: SignedOrder[], from: string, opts: {
        takerAssetFillAmount: BigNumber;
        gas?: number;
    }): Promise<TransactionReceiptWithDecodedLogs>;
    marketBuyOrdersAsync(orders: SignedOrder[], from: string, opts: {
        makerAssetFillAmount: BigNumber;
    }): Promise<TransactionReceiptWithDecodedLogs>;
    marketBuyOrdersNoThrowAsync(orders: SignedOrder[], from: string, opts: {
        makerAssetFillAmount: BigNumber;
        gas?: number;
    }): Promise<TransactionReceiptWithDecodedLogs>;
    batchCancelOrdersAsync(orders: SignedOrder[], from: string): Promise<TransactionReceiptWithDecodedLogs>;
    cancelOrdersUpToAsync(salt: BigNumber, from: string): Promise<TransactionReceiptWithDecodedLogs>;
    registerAssetProxyAsync(assetProxyAddress: string, from: string): Promise<TransactionReceiptWithDecodedLogs>;
    executeTransactionAsync(signedTx: SignedZeroExTransaction, from: string): Promise<TransactionReceiptWithDecodedLogs>;
    getTakerAssetFilledAmountAsync(orderHashHex: string): Promise<BigNumber>;
    isCancelledAsync(orderHashHex: string): Promise<boolean>;
    getOrderEpochAsync(makerAddress: string, senderAddress: string): Promise<BigNumber>;
    getOrderInfoAsync(signedOrder: SignedOrder): Promise<OrderInfo>;
    getOrdersInfoAsync(signedOrders: SignedOrder[]): Promise<OrderInfo[]>;
    matchOrdersAsync(signedOrderLeft: SignedOrder, signedOrderRight: SignedOrder, from: string): Promise<TransactionReceiptWithDecodedLogs>;
    getFillOrderResultsAsync(signedOrder: SignedOrder, from: string, opts?: {
        takerAssetFillAmount?: BigNumber;
    }): Promise<FillResults>;
    abiEncodeFillOrder(signedOrder: SignedOrder, opts?: {
        takerAssetFillAmount?: BigNumber;
    }): string;
    abiDecodeFillOrder(data: string): AbiDecodedFillOrderData;
    getExchangeAddress(): string;
}
//# sourceMappingURL=exchange_wrapper.d.ts.map