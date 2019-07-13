import { AbstractOrderFilledCancelledFetcher } from '@0x/order-utils';
import { SignedOrder } from '@0x/types';
import { BigNumber } from '@0x/utils';
import { ExchangeWrapper } from './exchange_wrapper';
export declare class SimpleOrderFilledCancelledFetcher implements AbstractOrderFilledCancelledFetcher {
    private readonly _exchangeWrapper;
    private readonly _zrxAssetData;
    constructor(exchange: ExchangeWrapper, zrxAssetData: string);
    getFilledTakerAmountAsync(orderHash: string): Promise<BigNumber>;
    isOrderCancelledAsync(signedOrder: SignedOrder): Promise<boolean>;
    getZRXAssetData(): string;
}
//# sourceMappingURL=simple_order_filled_cancelled_fetcher.d.ts.map