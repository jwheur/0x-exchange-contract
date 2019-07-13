/// <reference types="node" />
/// <reference types="web3-provider-engine" />
import { TestLibsContract } from '@0x/contracts-exchange-libs';
import { FillScenario, Web3ProviderEngine } from '@0x/contracts-test-utils';
import { Web3Wrapper } from '@0x/web3-wrapper';
import { TxData } from 'ethereum-types';
import 'make-promises-safe';
import { AssetWrapper } from './asset_wrapper';
import { ExchangeWrapper } from './exchange_wrapper';
import { OrderFactoryFromScenario } from './order_factory_from_scenario';
/**
 * Instantiates a new instance of FillOrderCombinatorialUtils. Since this method has some
 * required async setup, a factory method is required.
 * @param web3Wrapper Web3Wrapper instance
 * @param txDefaults Default Ethereum tx options
 * @return FillOrderCombinatorialUtils instance
 */
export declare function fillOrderCombinatorialUtilsFactoryAsync(web3Wrapper: Web3Wrapper, txDefaults: Partial<TxData>): Promise<FillOrderCombinatorialUtils>;
export declare class FillOrderCombinatorialUtils {
    orderFactory: OrderFactoryFromScenario;
    ownerAddress: string;
    makerAddress: string;
    makerPrivateKey: Buffer;
    takerAddress: string;
    zrxAssetData: string;
    exchangeWrapper: ExchangeWrapper;
    assetWrapper: AssetWrapper;
    testLibsContract: TestLibsContract;
    static generateFillOrderCombinations(): FillScenario[];
    /**
     * Recursive implementation of generating all combinations of the supplied
     * string-containing arrays.
     */
    private static _getAllCombinations;
    constructor(orderFactory: OrderFactoryFromScenario, ownerAddress: string, makerAddress: string, makerPrivateKey: Buffer, takerAddress: string, zrxAssetData: string, exchangeWrapper: ExchangeWrapper, assetWrapper: AssetWrapper, testLibsContract: TestLibsContract);
    testFillOrderScenarioAsync(provider: Web3ProviderEngine, fillScenario: FillScenario, isVerbose?: boolean): Promise<void>;
    private _fillOrderAndAssertOutcomeAsync;
    private _abiEncodeFillOrderAndAssertOutcomeAsync;
    private _getTakerAssetFillAmountAsync;
    private _modifyTraderStateAsync;
}
//# sourceMappingURL=fill_order_combinatorial_utils.d.ts.map