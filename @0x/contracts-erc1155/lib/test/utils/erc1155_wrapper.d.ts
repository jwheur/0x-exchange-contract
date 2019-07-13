import { BigNumber } from '@0x/utils';
import { Provider, TransactionReceiptWithDecodedLogs } from 'ethereum-types';
import { ERC1155MintableContract } from '../../src';
export declare class Erc1155Wrapper {
    private readonly _erc1155Contract;
    private readonly _web3Wrapper;
    private readonly _contractOwner;
    private readonly _logDecoder;
    constructor(contractInstance: ERC1155MintableContract, provider: Provider, contractOwner: string);
    getContract(): ERC1155MintableContract;
    getBalancesAsync(owners: string[], tokens: BigNumber[]): Promise<BigNumber[]>;
    safeTransferFromAsync(from: string, to: string, token: BigNumber, value: BigNumber, callbackData?: string, delegatedSpender?: string): Promise<TransactionReceiptWithDecodedLogs>;
    safeBatchTransferFromAsync(from: string, to: string, tokens: BigNumber[], values: BigNumber[], callbackData?: string, delegatedSpender?: string): Promise<TransactionReceiptWithDecodedLogs>;
    mintFungibleTokensAsync(beneficiaries: string[], tokenAmounts: BigNumber | BigNumber[]): Promise<BigNumber>;
    mintNonFungibleTokensAsync(beneficiaries: string[]): Promise<[BigNumber, BigNumber[]]>;
    setApprovalForAllAsync(owner: string, beneficiary: string, isApproved: boolean): Promise<TransactionReceiptWithDecodedLogs>;
    isApprovedForAllAsync(owner: string, beneficiary: string): Promise<boolean>;
    assertBalancesAsync(owners: string[], tokens: BigNumber[], expectedBalances: BigNumber[]): Promise<void>;
}
//# sourceMappingURL=erc1155_wrapper.d.ts.map