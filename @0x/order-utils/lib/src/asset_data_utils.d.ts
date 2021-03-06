import { AssetProxyId, DutchAuctionData, ERC1155AssetData, ERC20AssetData, ERC721AssetData, MultiAssetData, MultiAssetDataWithRecursiveDecoding, StaticCallAssetData } from '@0x/types';
import { BigNumber } from '@0x/utils';
export declare const assetDataUtils: {
    /**
     * Encodes an ERC20 token address into a hex encoded assetData string, usable in the makerAssetData or
     * takerAssetData fields in a 0x order.
     * @param tokenAddress  The ERC20 token address to encode
     * @return The hex encoded assetData string
     */
    encodeERC20AssetData(tokenAddress: string): string;
    /**
     * Decodes an ERC20 assetData hex string into its corresponding ERC20 tokenAddress & assetProxyId
     * @param assetData Hex encoded assetData string to decode
     * @return An object containing the decoded tokenAddress & assetProxyId
     */
    decodeERC20AssetData(assetData: string): ERC20AssetData;
    /**
     * Encodes an ERC721 token address into a hex encoded assetData string, usable in the makerAssetData or
     * takerAssetData fields in a 0x order.
     * @param tokenAddress  The ERC721 token address to encode
     * @param tokenId  The ERC721 tokenId to encode
     * @return The hex encoded assetData string
     */
    encodeERC721AssetData(tokenAddress: string, tokenId: BigNumber): string;
    /**
     * Decodes an ERC721 assetData hex string into its corresponding ERC721 tokenAddress, tokenId & assetProxyId
     * @param assetData Hex encoded assetData string to decode
     * @return An object containing the decoded tokenAddress, tokenId & assetProxyId
     */
    decodeERC721AssetData(assetData: string): ERC721AssetData;
    /**
     * Encodes a set of ERC1155 assets into an assetData string, usable in the makerAssetData or
     * takerAssetData fields of a 0x order.
     * @param tokenAddress The token address of the ERC1155 contract
     * @param tokenIds The Id's of the ERC1155 tokens to transfer
     * @param tokenValues The values of each respective token Id to transfer
     * @param callbackData The data forwarded to a receiver, if receiver is a contract.
     * @return The hex encoded assetData string
     */
    encodeERC1155AssetData(tokenAddress: string, tokenIds: BigNumber[], tokenValues: BigNumber[], callbackData: string): string;
    /**
     * Decodes an ERC1155 assetData hex string into its corresponding ERC1155 components.
     * @param assetData Hex encoded assetData string to decode
     * @return An object containing the decoded tokenAddress, tokenIds, tokenValues, callbackData & assetProxyId
     */
    decodeERC1155AssetData(assetData: string): ERC1155AssetData;
    /**
     * Encodes assetData for multiple AssetProxies into a single hex encoded assetData string, usable in the makerAssetData or
     * takerAssetData fields in a 0x order.
     * @param amounts Amounts of each asset that correspond to a single unit within an order.
     * @param nestedAssetData assetData strings that correspond to a valid assetProxyId.
     * @return The hex encoded assetData string
     */
    encodeMultiAssetData(amounts: BigNumber[], nestedAssetData: string[]): string;
    /**
     * Decodes a MultiAsset assetData hex string into its corresponding amounts and nestedAssetData
     * @param assetData Hex encoded assetData string to decode
     * @return An object containing the decoded amounts and nestedAssetData
     */
    decodeMultiAssetData(assetData: string): MultiAssetData;
    /**
     * Decodes a MultiAsset assetData hex string into its corresponding amounts and decoded nestedAssetData elements (all nested elements are flattened)
     * @param assetData Hex encoded assetData string to decode
     * @return An object containing the decoded amounts and nestedAssetData
     */
    decodeMultiAssetDataRecursively(assetData: string): MultiAssetDataWithRecursiveDecoding;
    /**
     * Encodes StaticCallProxy data into an assetData hex string
     * @param callTarget Address of contract to call from StaticCallProxy
     * @param staticCallData The function data that will be called on the callTarget contract
     * @param callResultHash The keccak256 hash of the ABI encoded expected output of the static call
     * @return The hex encoded assetData string
     */
    encodeStaticCallAssetData(callTarget: string, staticCallData: string, callResultHash: string): string;
    /**
     * Decoded StaticCall assetData into its corresponding callTarget, staticCallData, and expected callResultHash
     * @param assetData Hex encoded assetData string to decode
     * @return An object containing the decoded callTarget, staticCallData, and expected callResultHash
     */
    decodeStaticCallAssetData(assetData: string): StaticCallAssetData;
    /**
     * Dutch auction details are encoded with the asset data for a 0x order. This function produces a hex
     * encoded assetData string, containing information both about the asset being traded and the
     * dutch auction; which is usable in the makerAssetData or takerAssetData fields in a 0x order.
     * @param assetData Hex encoded assetData string for the asset being auctioned.
     * @param beginTimeSeconds Begin time of the dutch auction.
     * @param beginAmount Starting amount being sold in the dutch auction.
     * @return The hex encoded assetData string.
     */
    encodeDutchAuctionAssetData(assetData: string, beginTimeSeconds: BigNumber, beginAmount: BigNumber): string;
    /**
     * Dutch auction details are encoded with the asset data for a 0x order. This function decodes a hex
     * encoded assetData string, containing information both about the asset being traded and the
     * dutch auction.
     * @param dutchAuctionData Hex encoded assetData string for the asset being auctioned.
     * @return An object containing the auction asset, auction begin time and auction begin amount.
     */
    decodeDutchAuctionData(dutchAuctionData: string): DutchAuctionData;
    /**
     * Decode and return the assetProxyId from the assetData
     * @param assetData Hex encoded assetData string to decode
     * @return The assetProxyId
     */
    decodeAssetProxyId(assetData: string): AssetProxyId;
    /**
     * Checks if the decoded asset data is valid ERC20 data
     * @param decodedAssetData The decoded asset data to check
     */
    isERC20AssetData(decodedAssetData: ERC20AssetData | ERC721AssetData | ERC1155AssetData | MultiAssetData | StaticCallAssetData): decodedAssetData is ERC20AssetData;
    /**
     * Checks if the decoded asset data is valid ERC721 data
     * @param decodedAssetData The decoded asset data to check
     */
    isERC721AssetData(decodedAssetData: ERC20AssetData | ERC721AssetData | ERC1155AssetData | MultiAssetData | StaticCallAssetData): decodedAssetData is ERC721AssetData;
    /**
     * Checks if the decoded asset data is valid ERC1155 data
     * @param decodedAssetData The decoded asset data to check
     */
    isERC1155AssetData(decodedAssetData: ERC20AssetData | ERC721AssetData | ERC1155AssetData | MultiAssetData | StaticCallAssetData): decodedAssetData is ERC1155AssetData;
    /**
     * Checks if the decoded asset data is valid MultiAsset data
     * @param decodedAssetData The decoded asset data to check
     */
    isMultiAssetData(decodedAssetData: ERC20AssetData | ERC721AssetData | ERC1155AssetData | MultiAssetData | StaticCallAssetData): decodedAssetData is MultiAssetData;
    /**
     * Checks if the decoded asset data is valid StaticCall data
     * @param decodedAssetData The decoded asset data to check
     */
    isStaticCallAssetData(decodedAssetData: ERC20AssetData | ERC721AssetData | ERC1155AssetData | MultiAssetData | StaticCallAssetData): decodedAssetData is StaticCallAssetData;
    /**
     * Throws if the length or assetProxyId are invalid for the ERC20Proxy.
     * @param assetData Hex encoded assetData string
     */
    assertIsERC20AssetData(assetData: string): void;
    /**
     * Throws if the length or assetProxyId are invalid for the ERC721Proxy.
     * @param assetData Hex encoded assetData string
     */
    assertIsERC721AssetData(assetData: string): void;
    /**
     * Throws if the assetData is not ERC1155.
     * @param assetData Hex encoded assetData string
     */
    assertIsERC1155AssetData(assetData: string): void;
    /**
     * Throws if the length or assetProxyId are invalid for the MultiAssetProxy.
     * @param assetData Hex encoded assetData string
     */
    assertIsMultiAssetData(assetData: string): void;
    /**
     * Throws if the assetData is not StaticCallData.
     * @param assetData Hex encoded assetData string
     */
    assertIsStaticCallAssetData(assetData: string): void;
    /**
     * Throws if the length or assetProxyId are invalid for the corresponding AssetProxy.
     * @param assetData Hex encoded assetData string
     */
    validateAssetDataOrThrow(assetData: string): void;
    /**
     * Decode any assetData into its corresponding assetData object
     * @param assetData Hex encoded assetData string to decode
     * @return Either a ERC20, ERC721, ERC1155, or MultiAsset assetData object
     */
    decodeAssetDataOrThrow(assetData: string): ERC20AssetData | ERC721AssetData | ERC1155AssetData | MultiAssetData | StaticCallAssetData;
};
//# sourceMappingURL=asset_data_utils.d.ts.map