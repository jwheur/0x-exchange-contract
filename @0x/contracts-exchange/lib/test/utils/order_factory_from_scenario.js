"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var contracts_test_utils_1 = require("@0x/contracts-test-utils");
var order_utils_1 = require("@0x/order-utils");
var utils_1 = require("@0x/utils");
var TEN_UNITS_EIGHTEEN_DECIMALS = new utils_1.BigNumber(10000000000000000000);
var FIVE_UNITS_EIGHTEEN_DECIMALS = new utils_1.BigNumber(5000000000000000000);
var POINT_ONE_UNITS_EIGHTEEN_DECIMALS = new utils_1.BigNumber(100000000000000000);
var POINT_ZERO_FIVE_UNITS_EIGHTEEN_DECIMALS = new utils_1.BigNumber(50000000000000000);
var TEN_UNITS_FIVE_DECIMALS = new utils_1.BigNumber(1000000);
var FIVE_UNITS_FIVE_DECIMALS = new utils_1.BigNumber(500000);
var TEN_UNITS_ZERO_DECIMALS = new utils_1.BigNumber(10);
var ONE_THOUSAND_UNITS_ZERO_DECIMALS = new utils_1.BigNumber(1000);
var ONE_NFT_UNIT = new utils_1.BigNumber(1);
var OrderFactoryFromScenario = /** @class */ (function () {
    function OrderFactoryFromScenario(userAddresses, zrxAddress, nonZrxERC20EighteenDecimalTokenAddresses, erc20FiveDecimalTokenAddresses, erc20ZeroDecimalTokenAddresses, erc721Token, erc721Balances, exchangeAddress) {
        this._userAddresses = userAddresses;
        this._zrxAddress = zrxAddress;
        this._nonZrxERC20EighteenDecimalTokenAddresses = nonZrxERC20EighteenDecimalTokenAddresses;
        this._erc20FiveDecimalTokenAddresses = erc20FiveDecimalTokenAddresses;
        this._erc20ZeroDecimalTokenAddresses = erc20ZeroDecimalTokenAddresses;
        this._erc721Token = erc721Token;
        this._erc721Balances = erc721Balances;
        this._exchangeAddress = exchangeAddress;
    }
    OrderFactoryFromScenario.prototype.generateOrder = function (orderScenario) {
        var makerAddress = this._userAddresses[1];
        var takerAddress = this._userAddresses[2];
        var erc721MakerAssetIds = this._erc721Balances[makerAddress][this._erc721Token.address];
        var erc721TakerAssetIds = this._erc721Balances[takerAddress][this._erc721Token.address];
        var feeRecipientAddress;
        var makerAssetAmount;
        var takerAssetAmount;
        var makerFee;
        var takerFee;
        var expirationTimeSeconds;
        var makerAssetData;
        var takerAssetData;
        switch (orderScenario.feeRecipientScenario) {
            case contracts_test_utils_1.FeeRecipientAddressScenario.BurnAddress:
                feeRecipientAddress = contracts_test_utils_1.constants.NULL_ADDRESS;
                break;
            case contracts_test_utils_1.FeeRecipientAddressScenario.EthUserAddress:
                feeRecipientAddress = this._userAddresses[4];
                break;
            default:
                throw utils_1.errorUtils.spawnSwitchErr('FeeRecipientAddressScenario', orderScenario.feeRecipientScenario);
        }
        switch (orderScenario.makerAssetDataScenario) {
            case contracts_test_utils_1.AssetDataScenario.ZRXFeeToken:
                makerAssetData = order_utils_1.assetDataUtils.encodeERC20AssetData(this._zrxAddress);
                break;
            case contracts_test_utils_1.AssetDataScenario.ERC20NonZRXEighteenDecimals:
                makerAssetData = order_utils_1.assetDataUtils.encodeERC20AssetData(this._nonZrxERC20EighteenDecimalTokenAddresses[0]);
                break;
            case contracts_test_utils_1.AssetDataScenario.ERC20FiveDecimals:
                makerAssetData = order_utils_1.assetDataUtils.encodeERC20AssetData(this._erc20FiveDecimalTokenAddresses[0]);
                break;
            case contracts_test_utils_1.AssetDataScenario.ERC721:
                makerAssetData = order_utils_1.assetDataUtils.encodeERC721AssetData(this._erc721Token.address, erc721MakerAssetIds[0]);
                break;
            case contracts_test_utils_1.AssetDataScenario.ERC20ZeroDecimals:
                makerAssetData = order_utils_1.assetDataUtils.encodeERC20AssetData(this._erc20ZeroDecimalTokenAddresses[0]);
                break;
            default:
                throw utils_1.errorUtils.spawnSwitchErr('AssetDataScenario', orderScenario.makerAssetDataScenario);
        }
        switch (orderScenario.takerAssetDataScenario) {
            case contracts_test_utils_1.AssetDataScenario.ZRXFeeToken:
                takerAssetData = order_utils_1.assetDataUtils.encodeERC20AssetData(this._zrxAddress);
                break;
            case contracts_test_utils_1.AssetDataScenario.ERC20NonZRXEighteenDecimals:
                takerAssetData = order_utils_1.assetDataUtils.encodeERC20AssetData(this._nonZrxERC20EighteenDecimalTokenAddresses[1]);
                break;
            case contracts_test_utils_1.AssetDataScenario.ERC20FiveDecimals:
                takerAssetData = order_utils_1.assetDataUtils.encodeERC20AssetData(this._erc20FiveDecimalTokenAddresses[1]);
                break;
            case contracts_test_utils_1.AssetDataScenario.ERC721:
                takerAssetData = order_utils_1.assetDataUtils.encodeERC721AssetData(this._erc721Token.address, erc721TakerAssetIds[0]);
                break;
            case contracts_test_utils_1.AssetDataScenario.ERC20ZeroDecimals:
                takerAssetData = order_utils_1.assetDataUtils.encodeERC20AssetData(this._erc20ZeroDecimalTokenAddresses[1]);
                break;
            default:
                throw utils_1.errorUtils.spawnSwitchErr('AssetDataScenario', orderScenario.takerAssetDataScenario);
        }
        switch (orderScenario.makerAssetAmountScenario) {
            case contracts_test_utils_1.OrderAssetAmountScenario.Large:
                switch (orderScenario.makerAssetDataScenario) {
                    case contracts_test_utils_1.AssetDataScenario.ZRXFeeToken:
                    case contracts_test_utils_1.AssetDataScenario.ERC20NonZRXEighteenDecimals:
                        makerAssetAmount = TEN_UNITS_EIGHTEEN_DECIMALS;
                        break;
                    case contracts_test_utils_1.AssetDataScenario.ERC20FiveDecimals:
                        makerAssetAmount = TEN_UNITS_FIVE_DECIMALS;
                        break;
                    case contracts_test_utils_1.AssetDataScenario.ERC721:
                        makerAssetAmount = ONE_NFT_UNIT;
                        break;
                    case contracts_test_utils_1.AssetDataScenario.ERC20ZeroDecimals:
                        makerAssetAmount = ONE_THOUSAND_UNITS_ZERO_DECIMALS;
                        break;
                    default:
                        throw utils_1.errorUtils.spawnSwitchErr('AssetDataScenario', orderScenario.makerAssetDataScenario);
                }
                break;
            case contracts_test_utils_1.OrderAssetAmountScenario.Small:
                switch (orderScenario.makerAssetDataScenario) {
                    case contracts_test_utils_1.AssetDataScenario.ZRXFeeToken:
                    case contracts_test_utils_1.AssetDataScenario.ERC20NonZRXEighteenDecimals:
                        makerAssetAmount = FIVE_UNITS_EIGHTEEN_DECIMALS;
                        break;
                    case contracts_test_utils_1.AssetDataScenario.ERC20FiveDecimals:
                        makerAssetAmount = FIVE_UNITS_FIVE_DECIMALS;
                        break;
                    case contracts_test_utils_1.AssetDataScenario.ERC721:
                        makerAssetAmount = ONE_NFT_UNIT;
                        break;
                    case contracts_test_utils_1.AssetDataScenario.ERC20ZeroDecimals:
                        makerAssetAmount = TEN_UNITS_ZERO_DECIMALS;
                        break;
                    default:
                        throw utils_1.errorUtils.spawnSwitchErr('AssetDataScenario', orderScenario.makerAssetDataScenario);
                }
                break;
            case contracts_test_utils_1.OrderAssetAmountScenario.Zero:
                makerAssetAmount = new utils_1.BigNumber(0);
                break;
            default:
                throw utils_1.errorUtils.spawnSwitchErr('OrderAssetAmountScenario', orderScenario.makerAssetAmountScenario);
        }
        switch (orderScenario.takerAssetAmountScenario) {
            case contracts_test_utils_1.OrderAssetAmountScenario.Large:
                switch (orderScenario.takerAssetDataScenario) {
                    case contracts_test_utils_1.AssetDataScenario.ERC20NonZRXEighteenDecimals:
                    case contracts_test_utils_1.AssetDataScenario.ZRXFeeToken:
                        takerAssetAmount = TEN_UNITS_EIGHTEEN_DECIMALS;
                        break;
                    case contracts_test_utils_1.AssetDataScenario.ERC20FiveDecimals:
                        takerAssetAmount = TEN_UNITS_FIVE_DECIMALS;
                        break;
                    case contracts_test_utils_1.AssetDataScenario.ERC721:
                        takerAssetAmount = ONE_NFT_UNIT;
                        break;
                    case contracts_test_utils_1.AssetDataScenario.ERC20ZeroDecimals:
                        takerAssetAmount = ONE_THOUSAND_UNITS_ZERO_DECIMALS;
                        break;
                    default:
                        throw utils_1.errorUtils.spawnSwitchErr('AssetDataScenario', orderScenario.takerAssetDataScenario);
                }
                break;
            case contracts_test_utils_1.OrderAssetAmountScenario.Small:
                switch (orderScenario.takerAssetDataScenario) {
                    case contracts_test_utils_1.AssetDataScenario.ERC20NonZRXEighteenDecimals:
                    case contracts_test_utils_1.AssetDataScenario.ZRXFeeToken:
                        takerAssetAmount = FIVE_UNITS_EIGHTEEN_DECIMALS;
                        break;
                    case contracts_test_utils_1.AssetDataScenario.ERC20FiveDecimals:
                        takerAssetAmount = FIVE_UNITS_FIVE_DECIMALS;
                        break;
                    case contracts_test_utils_1.AssetDataScenario.ERC721:
                        takerAssetAmount = ONE_NFT_UNIT;
                        break;
                    case contracts_test_utils_1.AssetDataScenario.ERC20ZeroDecimals:
                        takerAssetAmount = TEN_UNITS_ZERO_DECIMALS;
                        break;
                    default:
                        throw utils_1.errorUtils.spawnSwitchErr('AssetDataScenario', orderScenario.takerAssetDataScenario);
                }
                break;
            case contracts_test_utils_1.OrderAssetAmountScenario.Zero:
                takerAssetAmount = new utils_1.BigNumber(0);
                break;
            default:
                throw utils_1.errorUtils.spawnSwitchErr('OrderAssetAmountScenario', orderScenario.takerAssetAmountScenario);
        }
        switch (orderScenario.makerFeeScenario) {
            case contracts_test_utils_1.OrderAssetAmountScenario.Large:
                makerFee = POINT_ONE_UNITS_EIGHTEEN_DECIMALS;
                break;
            case contracts_test_utils_1.OrderAssetAmountScenario.Small:
                makerFee = POINT_ZERO_FIVE_UNITS_EIGHTEEN_DECIMALS;
                break;
            case contracts_test_utils_1.OrderAssetAmountScenario.Zero:
                makerFee = new utils_1.BigNumber(0);
                break;
            default:
                throw utils_1.errorUtils.spawnSwitchErr('OrderAssetAmountScenario', orderScenario.makerFeeScenario);
        }
        switch (orderScenario.takerFeeScenario) {
            case contracts_test_utils_1.OrderAssetAmountScenario.Large:
                takerFee = POINT_ONE_UNITS_EIGHTEEN_DECIMALS;
                break;
            case contracts_test_utils_1.OrderAssetAmountScenario.Small:
                takerFee = POINT_ZERO_FIVE_UNITS_EIGHTEEN_DECIMALS;
                break;
            case contracts_test_utils_1.OrderAssetAmountScenario.Zero:
                takerFee = new utils_1.BigNumber(0);
                break;
            default:
                throw utils_1.errorUtils.spawnSwitchErr('OrderAssetAmountScenario', orderScenario.takerFeeScenario);
        }
        switch (orderScenario.expirationTimeSecondsScenario) {
            case contracts_test_utils_1.ExpirationTimeSecondsScenario.InFuture:
                expirationTimeSeconds = new utils_1.BigNumber(2524604400); // Close to infinite
                break;
            case contracts_test_utils_1.ExpirationTimeSecondsScenario.InPast:
                expirationTimeSeconds = new utils_1.BigNumber(0); // Jan 1, 1970
                break;
            default:
                throw utils_1.errorUtils.spawnSwitchErr('ExpirationTimeSecondsScenario', orderScenario.expirationTimeSecondsScenario);
        }
        switch (orderScenario.takerScenario) {
            case contracts_test_utils_1.TakerScenario.CorrectlySpecified:
                break; // noop since takerAddress is already specified
            case contracts_test_utils_1.TakerScenario.IncorrectlySpecified:
                var notTaker = this._userAddresses[3];
                takerAddress = notTaker;
                break;
            case contracts_test_utils_1.TakerScenario.Unspecified:
                takerAddress = contracts_test_utils_1.constants.NULL_ADDRESS;
                break;
            default:
                throw utils_1.errorUtils.spawnSwitchErr('TakerScenario', orderScenario.takerScenario);
        }
        var order = {
            senderAddress: contracts_test_utils_1.constants.NULL_ADDRESS,
            makerAddress: makerAddress,
            takerAddress: takerAddress,
            makerFee: makerFee,
            takerFee: takerFee,
            makerAssetAmount: makerAssetAmount,
            takerAssetAmount: takerAssetAmount,
            makerAssetData: makerAssetData,
            takerAssetData: takerAssetData,
            salt: order_utils_1.generatePseudoRandomSalt(),
            exchangeAddress: this._exchangeAddress,
            feeRecipientAddress: feeRecipientAddress,
            expirationTimeSeconds: expirationTimeSeconds,
        };
        return order;
    };
    return OrderFactoryFromScenario;
}());
exports.OrderFactoryFromScenario = OrderFactoryFromScenario;
//# sourceMappingURL=order_factory_from_scenario.js.map