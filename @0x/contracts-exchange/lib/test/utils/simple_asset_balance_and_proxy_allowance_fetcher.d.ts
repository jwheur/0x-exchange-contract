import { AbstractBalanceAndProxyAllowanceFetcher } from '@0x/order-utils';
import { BigNumber } from '@0x/utils';
import { AssetWrapper } from './asset_wrapper';
export declare class SimpleAssetBalanceAndProxyAllowanceFetcher implements AbstractBalanceAndProxyAllowanceFetcher {
    private readonly _assetWrapper;
    constructor(assetWrapper: AssetWrapper);
    getBalanceAsync(assetData: string, userAddress: string): Promise<BigNumber>;
    getProxyAllowanceAsync(assetData: string, userAddress: string): Promise<BigNumber>;
}
//# sourceMappingURL=simple_asset_balance_and_proxy_allowance_fetcher.d.ts.map