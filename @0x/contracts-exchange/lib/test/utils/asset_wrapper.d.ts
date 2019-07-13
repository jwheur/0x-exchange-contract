import { AbstractAssetWrapper } from '@0x/contracts-test-utils';
import { BigNumber } from '@0x/utils';
/**
 * This class abstracts away the differences between ERC20 and ERC721 tokens so that
 * the logic that uses it does not need to care what standard a token belongs to.
 */
export declare class AssetWrapper {
    private readonly _proxyIdToAssetWrappers;
    constructor(assetWrappers: AbstractAssetWrapper[]);
    getBalanceAsync(userAddress: string, assetData: string): Promise<BigNumber>;
    setBalanceAsync(userAddress: string, assetData: string, desiredBalance: BigNumber): Promise<void>;
    getProxyAllowanceAsync(userAddress: string, assetData: string): Promise<BigNumber>;
    setProxyAllowanceAsync(userAddress: string, assetData: string, desiredAllowance: BigNumber): Promise<void>;
}
//# sourceMappingURL=asset_wrapper.d.ts.map