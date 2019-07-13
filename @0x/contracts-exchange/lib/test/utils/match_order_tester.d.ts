import { ERC20Wrapper, ERC721Wrapper } from '@0x/contracts-asset-proxy';
import { ERC20BalancesByOwner, ERC721TokenIdsByOwner, TransferAmountsByMatchOrders as TransferAmounts } from '@0x/contracts-test-utils';
import { SignedOrder } from '@0x/types';
import { BigNumber } from '@0x/utils';
import { ExchangeWrapper } from './exchange_wrapper';
export declare class MatchOrderTester {
    private readonly _exchangeWrapper;
    private readonly _erc20Wrapper;
    private readonly _erc721Wrapper;
    private readonly _feeTokenAddress;
    private static _assertLogsAsync;
    private static _assertAllKnownBalancesAsync;
    constructor(exchangeWrapper: ExchangeWrapper, erc20Wrapper: ERC20Wrapper, erc721Wrapper: ERC721Wrapper, feeTokenAddress: string);
    matchOrdersAndAssertEffectsAsync(signedOrderLeft: SignedOrder, signedOrderRight: SignedOrder, takerAddress: string, erc20BalancesByOwner: ERC20BalancesByOwner, erc721TokenIdsByOwner: ERC721TokenIdsByOwner, expectedTransferAmounts: TransferAmounts, initialLeftOrderFilledAmount?: BigNumber, initialRightOrderFilledAmount?: BigNumber): Promise<[ERC20BalancesByOwner, ERC721TokenIdsByOwner]>;
    private _assertInitialOrderStatesAsync;
    private _assertExchangeStateAsync;
    private _assertBalancesAsync;
    private _calculateExpectedBalances;
    private _assertMakerTakerAndFeeRecipientBalancesAsync;
}
//# sourceMappingURL=match_order_tester.d.ts.map