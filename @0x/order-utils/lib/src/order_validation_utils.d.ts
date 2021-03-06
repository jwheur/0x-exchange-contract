import { NetworkId } from '@0x/abi-gen-wrappers';
import { SignedOrder } from '@0x/types';
import { BigNumber } from '@0x/utils';
import { SupportedProvider } from 'ethereum-types';
import { AbstractOrderFilledCancelledFetcher } from './abstract/abstract_order_filled_cancelled_fetcher';
import { ExchangeTransferSimulator } from './exchange_transfer_simulator';
/**
 * A utility class for validating orders
 */
export declare class OrderValidationUtils {
    private readonly _orderFilledCancelledFetcher;
    private readonly _provider;
    /**
     * A Typescript implementation mirroring the implementation of isRoundingError in the
     * Exchange smart contract
     * @param numerator Numerator value. When used to check an order, pass in `takerAssetFilledAmount`
     * @param denominator Denominator value.  When used to check an order, pass in `order.takerAssetAmount`
     * @param target Target value. When used to check an order, pass in `order.makerAssetAmount`
     */
    static isRoundingErrorFloor(numerator: BigNumber, denominator: BigNumber, target: BigNumber): boolean;
    /**
     * Validate that the maker & taker have sufficient balances/allowances
     * to fill the supplied order to the fillTakerAssetAmount amount
     * @param exchangeTradeEmulator ExchangeTradeEmulator to use
     * @param signedOrder SignedOrder to test
     * @param fillTakerAssetAmount Amount of takerAsset to fill the signedOrder
     * @param senderAddress Sender of the fillOrder tx
     * @param zrxAssetData AssetData for the ZRX token
     */
    static validateFillOrderBalancesAllowancesThrowIfInvalidAsync(exchangeTradeEmulator: ExchangeTransferSimulator, signedOrder: SignedOrder, fillTakerAssetAmount: BigNumber, senderAddress: string, zrxAssetData: string): Promise<void>;
    /**
     * Validate the transfer from the maker to the taker. This is simulated on-chain
     * via an eth_call. If this call fails, the asset is currently nontransferable.
     * @param exchangeTradeEmulator ExchangeTradeEmulator to use
     * @param signedOrder SignedOrder of interest
     * @param makerAssetAmount Amount to transfer from the maker
     * @param takerAddress The address to transfer to, defaults to signedOrder.takerAddress
     */
    static validateMakerTransferThrowIfInvalidAsync(networkId: NetworkId, supportedProvider: SupportedProvider, signedOrder: SignedOrder, makerAssetAmount: BigNumber, takerAddress?: string): Promise<void>;
    private static _validateOrderNotExpiredOrThrow;
    /**
     * Instantiate OrderValidationUtils
     * @param orderFilledCancelledFetcher A module that implements the AbstractOrderFilledCancelledFetcher
     * @param supportedProvider Web3 provider to use for JSON RPC calls
     * @return An instance of OrderValidationUtils
     */
    constructor(orderFilledCancelledFetcher: AbstractOrderFilledCancelledFetcher, supportedProvider: SupportedProvider);
    /**
     * Validate if the supplied order is fillable, and throw if it isn't
     * @param exchangeTradeEmulator ExchangeTradeEmulator instance
     * @param signedOrder SignedOrder of interest
     * @param zrxAssetData ZRX assetData
     * @param expectedFillTakerTokenAmount If supplied, this call will make sure this amount is fillable.
     * If it isn't supplied, we check if the order is fillable for a non-zero amount
     */
    validateOrderFillableOrThrowAsync(exchangeTradeEmulator: ExchangeTransferSimulator, signedOrder: SignedOrder, zrxAssetData: string, expectedFillTakerTokenAmount?: BigNumber): Promise<void>;
    /**
     * Validate a call to FillOrder and throw if it wouldn't succeed
     * @param exchangeTradeEmulator ExchangeTradeEmulator to use
     * @param supportedProvider Web3 provider to use for JSON RPC requests
     * @param signedOrder SignedOrder of interest
     * @param fillTakerAssetAmount Amount we'd like to fill the order for
     * @param takerAddress The taker of the order
     * @param zrxAssetData ZRX asset data
     */
    validateFillOrderThrowIfInvalidAsync(exchangeTradeEmulator: ExchangeTransferSimulator, supportedProvider: SupportedProvider, signedOrder: SignedOrder, fillTakerAssetAmount: BigNumber, takerAddress: string, zrxAssetData: string): Promise<BigNumber>;
}
//# sourceMappingURL=order_validation_utils.d.ts.map