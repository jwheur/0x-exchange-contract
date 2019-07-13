import { DummyERC721TokenContract } from '@0x/contracts-erc721';
import { ERC721TokenIdsByOwner, OrderScenario } from '@0x/contracts-test-utils';
import { Order } from '@0x/types';
export declare class OrderFactoryFromScenario {
    private readonly _userAddresses;
    private readonly _zrxAddress;
    private readonly _nonZrxERC20EighteenDecimalTokenAddresses;
    private readonly _erc20FiveDecimalTokenAddresses;
    private readonly _erc20ZeroDecimalTokenAddresses;
    private readonly _erc721Token;
    private readonly _erc721Balances;
    private readonly _exchangeAddress;
    constructor(userAddresses: string[], zrxAddress: string, nonZrxERC20EighteenDecimalTokenAddresses: string[], erc20FiveDecimalTokenAddresses: string[], erc20ZeroDecimalTokenAddresses: string[], erc721Token: DummyERC721TokenContract, erc721Balances: ERC721TokenIdsByOwner, exchangeAddress: string);
    generateOrder(orderScenario: OrderScenario): Order;
}
//# sourceMappingURL=order_factory_from_scenario.d.ts.map