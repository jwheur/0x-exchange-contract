// tslint:disable:no-consecutive-blank-lines ordered-imports align trailing-comma
// tslint:disable:whitespace no-unbound-method no-trailing-whitespace
// tslint:disable:no-unused-variable
import { BaseContract, PromiseWithTransactionHash } from '@0x/base-contract';
import { schemas } from '@0x/json-schemas';
import {
    BlockParam,
    BlockParamLiteral,
    CallData,
    ContractAbi,
    ContractArtifact,
    DecodedLogArgs,
    MethodAbi,
    TransactionReceiptWithDecodedLogs,
    TxData,
    TxDataPayable,
    SupportedProvider,
} from 'ethereum-types';
import { BigNumber, classUtils, logUtils, providerUtils } from '@0x/utils';
import { SimpleContractArtifact } from '@0x/types';
import { Web3Wrapper } from '@0x/web3-wrapper';
import { assert } from '@0x/assert';
import * as ethers from 'ethers';
// tslint:enable:no-unused-variable


/* istanbul ignore next */
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
export class IWrapperFunctionsContract extends BaseContract {
    public batchFillOrders = {
        async sendTransactionAsync(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            takerAssetFillAmounts: BigNumber[],
            signatures: string[],
        txData?: Partial<TxData> | undefined,
        ): Promise<string> {
        assert.isArray('orders', orders);
        assert.isArray('takerAssetFillAmounts', takerAssetFillAmounts);
        assert.isArray('signatures', signatures);
        const self = this as any as IWrapperFunctionsContract;
        const encodedData = self._strictEncodeArguments('batchFillOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256[],bytes[])', [orders,
    takerAssetFillAmounts,
    signatures
    ]);
        const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
                to: self.address,
                ...txData,
                data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            self.batchFillOrders.estimateGasAsync.bind(
                self,
                orders,
                takerAssetFillAmounts,
                signatures
            ),
        );
        const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
        return txHash;
        },
        awaitTransactionSuccessAsync(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            takerAssetFillAmounts: BigNumber[],
            signatures: string[],
            txData?: Partial<TxData>,
            pollingIntervalMs?: number,
            timeoutMs?: number,
        ): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs> {
        assert.isArray('orders', orders);
        assert.isArray('takerAssetFillAmounts', takerAssetFillAmounts);
        assert.isArray('signatures', signatures);
        const self = this as any as IWrapperFunctionsContract;
        const txHashPromise = self.batchFillOrders.sendTransactionAsync(orders,
    takerAssetFillAmounts,
    signatures
    , txData);
        return new PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>(
            txHashPromise,
            (async (): Promise<TransactionReceiptWithDecodedLogs> => {
                // When the transaction hash resolves, wait for it to be mined.
                return self._web3Wrapper.awaitTransactionSuccessAsync(
                    await txHashPromise,
                    pollingIntervalMs,
                    timeoutMs,
                );
            })(),
        );
        },
        async estimateGasAsync(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            takerAssetFillAmounts: BigNumber[],
            signatures: string[],
            txData?: Partial<TxData> | undefined,
        ): Promise<number> {
        assert.isArray('orders', orders);
        assert.isArray('takerAssetFillAmounts', takerAssetFillAmounts);
        assert.isArray('signatures', signatures);
        const self = this as any as IWrapperFunctionsContract;
        const encodedData = self._strictEncodeArguments('batchFillOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256[],bytes[])', [orders,
    takerAssetFillAmounts,
    signatures
    ]);
        const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
                to: self.address,
                ...txData,
                data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
        );
        const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
        return gas;
        },
        async callAsync(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            takerAssetFillAmounts: BigNumber[],
            signatures: string[],
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<{makerAssetFilledAmount: BigNumber;takerAssetFilledAmount: BigNumber;makerFeePaid: BigNumber;takerFeePaid: BigNumber}
        > {
            assert.isArray('orders', orders);
            assert.isArray('takerAssetFillAmounts', takerAssetFillAmounts);
            assert.isArray('signatures', signatures);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as IWrapperFunctionsContract;
            const encodedData = self._strictEncodeArguments('batchFillOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256[],bytes[])', [orders,
        takerAssetFillAmounts,
        signatures
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('batchFillOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256[],bytes[])');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<{makerAssetFilledAmount: BigNumber;takerAssetFilledAmount: BigNumber;makerFeePaid: BigNumber;takerFeePaid: BigNumber}
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
                takerAssetFillAmounts: BigNumber[],
                signatures: string[],
            ): string {
            assert.isArray('orders', orders);
            assert.isArray('takerAssetFillAmounts', takerAssetFillAmounts);
            assert.isArray('signatures', signatures);
            const self = this as any as IWrapperFunctionsContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('batchFillOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256[],bytes[])', [orders,
        takerAssetFillAmounts,
        signatures
        ]);
            return abiEncodedTransactionData;
        },
    };
    public fillOrderNoThrow = {
        async sendTransactionAsync(
            order: {makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string},
            takerAssetFillAmount: BigNumber,
            signature: string,
        txData?: Partial<TxData> | undefined,
        ): Promise<string> {
        
        assert.isBigNumber('takerAssetFillAmount', takerAssetFillAmount);
        assert.isString('signature', signature);
        const self = this as any as IWrapperFunctionsContract;
        const encodedData = self._strictEncodeArguments('fillOrderNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),uint256,bytes)', [order,
    takerAssetFillAmount,
    signature
    ]);
        const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
                to: self.address,
                ...txData,
                data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            self.fillOrderNoThrow.estimateGasAsync.bind(
                self,
                order,
                takerAssetFillAmount,
                signature
            ),
        );
        const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
        return txHash;
        },
        awaitTransactionSuccessAsync(
            order: {makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string},
            takerAssetFillAmount: BigNumber,
            signature: string,
            txData?: Partial<TxData>,
            pollingIntervalMs?: number,
            timeoutMs?: number,
        ): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs> {
        
        assert.isBigNumber('takerAssetFillAmount', takerAssetFillAmount);
        assert.isString('signature', signature);
        const self = this as any as IWrapperFunctionsContract;
        const txHashPromise = self.fillOrderNoThrow.sendTransactionAsync(order,
    takerAssetFillAmount,
    signature
    , txData);
        return new PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>(
            txHashPromise,
            (async (): Promise<TransactionReceiptWithDecodedLogs> => {
                // When the transaction hash resolves, wait for it to be mined.
                return self._web3Wrapper.awaitTransactionSuccessAsync(
                    await txHashPromise,
                    pollingIntervalMs,
                    timeoutMs,
                );
            })(),
        );
        },
        async estimateGasAsync(
            order: {makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string},
            takerAssetFillAmount: BigNumber,
            signature: string,
            txData?: Partial<TxData> | undefined,
        ): Promise<number> {
        
        assert.isBigNumber('takerAssetFillAmount', takerAssetFillAmount);
        assert.isString('signature', signature);
        const self = this as any as IWrapperFunctionsContract;
        const encodedData = self._strictEncodeArguments('fillOrderNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),uint256,bytes)', [order,
    takerAssetFillAmount,
    signature
    ]);
        const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
                to: self.address,
                ...txData,
                data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
        );
        const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
        return gas;
        },
        async callAsync(
            order: {makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string},
            takerAssetFillAmount: BigNumber,
            signature: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<{makerAssetFilledAmount: BigNumber;takerAssetFilledAmount: BigNumber;makerFeePaid: BigNumber;takerFeePaid: BigNumber}
        > {
            
            assert.isBigNumber('takerAssetFillAmount', takerAssetFillAmount);
            assert.isString('signature', signature);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as IWrapperFunctionsContract;
            const encodedData = self._strictEncodeArguments('fillOrderNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),uint256,bytes)', [order,
        takerAssetFillAmount,
        signature
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('fillOrderNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),uint256,bytes)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<{makerAssetFilledAmount: BigNumber;takerAssetFilledAmount: BigNumber;makerFeePaid: BigNumber;takerFeePaid: BigNumber}
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                order: {makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string},
                takerAssetFillAmount: BigNumber,
                signature: string,
            ): string {
            
            assert.isBigNumber('takerAssetFillAmount', takerAssetFillAmount);
            assert.isString('signature', signature);
            const self = this as any as IWrapperFunctionsContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('fillOrderNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),uint256,bytes)', [order,
        takerAssetFillAmount,
        signature
        ]);
            return abiEncodedTransactionData;
        },
    };
    public batchCancelOrders = {
        async sendTransactionAsync(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
        txData?: Partial<TxData> | undefined,
        ): Promise<string> {
        assert.isArray('orders', orders);
        const self = this as any as IWrapperFunctionsContract;
        const encodedData = self._strictEncodeArguments('batchCancelOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[])', [orders
    ]);
        const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
                to: self.address,
                ...txData,
                data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            self.batchCancelOrders.estimateGasAsync.bind(
                self,
                orders
            ),
        );
        const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
        return txHash;
        },
        awaitTransactionSuccessAsync(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            txData?: Partial<TxData>,
            pollingIntervalMs?: number,
            timeoutMs?: number,
        ): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs> {
        assert.isArray('orders', orders);
        const self = this as any as IWrapperFunctionsContract;
        const txHashPromise = self.batchCancelOrders.sendTransactionAsync(orders
    , txData);
        return new PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>(
            txHashPromise,
            (async (): Promise<TransactionReceiptWithDecodedLogs> => {
                // When the transaction hash resolves, wait for it to be mined.
                return self._web3Wrapper.awaitTransactionSuccessAsync(
                    await txHashPromise,
                    pollingIntervalMs,
                    timeoutMs,
                );
            })(),
        );
        },
        async estimateGasAsync(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            txData?: Partial<TxData> | undefined,
        ): Promise<number> {
        assert.isArray('orders', orders);
        const self = this as any as IWrapperFunctionsContract;
        const encodedData = self._strictEncodeArguments('batchCancelOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[])', [orders
    ]);
        const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
                to: self.address,
                ...txData,
                data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
        );
        const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
        return gas;
        },
        async callAsync(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            assert.isArray('orders', orders);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as IWrapperFunctionsContract;
            const encodedData = self._strictEncodeArguments('batchCancelOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[])', [orders
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('batchCancelOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[])');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            ): string {
            assert.isArray('orders', orders);
            const self = this as any as IWrapperFunctionsContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('batchCancelOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[])', [orders
        ]);
            return abiEncodedTransactionData;
        },
    };
    public batchFillOrKillOrders = {
        async sendTransactionAsync(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            takerAssetFillAmounts: BigNumber[],
            signatures: string[],
        txData?: Partial<TxData> | undefined,
        ): Promise<string> {
        assert.isArray('orders', orders);
        assert.isArray('takerAssetFillAmounts', takerAssetFillAmounts);
        assert.isArray('signatures', signatures);
        const self = this as any as IWrapperFunctionsContract;
        const encodedData = self._strictEncodeArguments('batchFillOrKillOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256[],bytes[])', [orders,
    takerAssetFillAmounts,
    signatures
    ]);
        const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
                to: self.address,
                ...txData,
                data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            self.batchFillOrKillOrders.estimateGasAsync.bind(
                self,
                orders,
                takerAssetFillAmounts,
                signatures
            ),
        );
        const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
        return txHash;
        },
        awaitTransactionSuccessAsync(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            takerAssetFillAmounts: BigNumber[],
            signatures: string[],
            txData?: Partial<TxData>,
            pollingIntervalMs?: number,
            timeoutMs?: number,
        ): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs> {
        assert.isArray('orders', orders);
        assert.isArray('takerAssetFillAmounts', takerAssetFillAmounts);
        assert.isArray('signatures', signatures);
        const self = this as any as IWrapperFunctionsContract;
        const txHashPromise = self.batchFillOrKillOrders.sendTransactionAsync(orders,
    takerAssetFillAmounts,
    signatures
    , txData);
        return new PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>(
            txHashPromise,
            (async (): Promise<TransactionReceiptWithDecodedLogs> => {
                // When the transaction hash resolves, wait for it to be mined.
                return self._web3Wrapper.awaitTransactionSuccessAsync(
                    await txHashPromise,
                    pollingIntervalMs,
                    timeoutMs,
                );
            })(),
        );
        },
        async estimateGasAsync(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            takerAssetFillAmounts: BigNumber[],
            signatures: string[],
            txData?: Partial<TxData> | undefined,
        ): Promise<number> {
        assert.isArray('orders', orders);
        assert.isArray('takerAssetFillAmounts', takerAssetFillAmounts);
        assert.isArray('signatures', signatures);
        const self = this as any as IWrapperFunctionsContract;
        const encodedData = self._strictEncodeArguments('batchFillOrKillOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256[],bytes[])', [orders,
    takerAssetFillAmounts,
    signatures
    ]);
        const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
                to: self.address,
                ...txData,
                data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
        );
        const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
        return gas;
        },
        async callAsync(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            takerAssetFillAmounts: BigNumber[],
            signatures: string[],
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<{makerAssetFilledAmount: BigNumber;takerAssetFilledAmount: BigNumber;makerFeePaid: BigNumber;takerFeePaid: BigNumber}
        > {
            assert.isArray('orders', orders);
            assert.isArray('takerAssetFillAmounts', takerAssetFillAmounts);
            assert.isArray('signatures', signatures);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as IWrapperFunctionsContract;
            const encodedData = self._strictEncodeArguments('batchFillOrKillOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256[],bytes[])', [orders,
        takerAssetFillAmounts,
        signatures
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('batchFillOrKillOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256[],bytes[])');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<{makerAssetFilledAmount: BigNumber;takerAssetFilledAmount: BigNumber;makerFeePaid: BigNumber;takerFeePaid: BigNumber}
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
                takerAssetFillAmounts: BigNumber[],
                signatures: string[],
            ): string {
            assert.isArray('orders', orders);
            assert.isArray('takerAssetFillAmounts', takerAssetFillAmounts);
            assert.isArray('signatures', signatures);
            const self = this as any as IWrapperFunctionsContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('batchFillOrKillOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256[],bytes[])', [orders,
        takerAssetFillAmounts,
        signatures
        ]);
            return abiEncodedTransactionData;
        },
    };
    public batchFillOrdersNoThrow = {
        async sendTransactionAsync(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            takerAssetFillAmounts: BigNumber[],
            signatures: string[],
        txData?: Partial<TxData> | undefined,
        ): Promise<string> {
        assert.isArray('orders', orders);
        assert.isArray('takerAssetFillAmounts', takerAssetFillAmounts);
        assert.isArray('signatures', signatures);
        const self = this as any as IWrapperFunctionsContract;
        const encodedData = self._strictEncodeArguments('batchFillOrdersNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256[],bytes[])', [orders,
    takerAssetFillAmounts,
    signatures
    ]);
        const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
                to: self.address,
                ...txData,
                data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            self.batchFillOrdersNoThrow.estimateGasAsync.bind(
                self,
                orders,
                takerAssetFillAmounts,
                signatures
            ),
        );
        const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
        return txHash;
        },
        awaitTransactionSuccessAsync(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            takerAssetFillAmounts: BigNumber[],
            signatures: string[],
            txData?: Partial<TxData>,
            pollingIntervalMs?: number,
            timeoutMs?: number,
        ): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs> {
        assert.isArray('orders', orders);
        assert.isArray('takerAssetFillAmounts', takerAssetFillAmounts);
        assert.isArray('signatures', signatures);
        const self = this as any as IWrapperFunctionsContract;
        const txHashPromise = self.batchFillOrdersNoThrow.sendTransactionAsync(orders,
    takerAssetFillAmounts,
    signatures
    , txData);
        return new PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>(
            txHashPromise,
            (async (): Promise<TransactionReceiptWithDecodedLogs> => {
                // When the transaction hash resolves, wait for it to be mined.
                return self._web3Wrapper.awaitTransactionSuccessAsync(
                    await txHashPromise,
                    pollingIntervalMs,
                    timeoutMs,
                );
            })(),
        );
        },
        async estimateGasAsync(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            takerAssetFillAmounts: BigNumber[],
            signatures: string[],
            txData?: Partial<TxData> | undefined,
        ): Promise<number> {
        assert.isArray('orders', orders);
        assert.isArray('takerAssetFillAmounts', takerAssetFillAmounts);
        assert.isArray('signatures', signatures);
        const self = this as any as IWrapperFunctionsContract;
        const encodedData = self._strictEncodeArguments('batchFillOrdersNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256[],bytes[])', [orders,
    takerAssetFillAmounts,
    signatures
    ]);
        const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
                to: self.address,
                ...txData,
                data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
        );
        const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
        return gas;
        },
        async callAsync(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            takerAssetFillAmounts: BigNumber[],
            signatures: string[],
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<{makerAssetFilledAmount: BigNumber;takerAssetFilledAmount: BigNumber;makerFeePaid: BigNumber;takerFeePaid: BigNumber}
        > {
            assert.isArray('orders', orders);
            assert.isArray('takerAssetFillAmounts', takerAssetFillAmounts);
            assert.isArray('signatures', signatures);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as IWrapperFunctionsContract;
            const encodedData = self._strictEncodeArguments('batchFillOrdersNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256[],bytes[])', [orders,
        takerAssetFillAmounts,
        signatures
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('batchFillOrdersNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256[],bytes[])');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<{makerAssetFilledAmount: BigNumber;takerAssetFilledAmount: BigNumber;makerFeePaid: BigNumber;takerFeePaid: BigNumber}
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
                takerAssetFillAmounts: BigNumber[],
                signatures: string[],
            ): string {
            assert.isArray('orders', orders);
            assert.isArray('takerAssetFillAmounts', takerAssetFillAmounts);
            assert.isArray('signatures', signatures);
            const self = this as any as IWrapperFunctionsContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('batchFillOrdersNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256[],bytes[])', [orders,
        takerAssetFillAmounts,
        signatures
        ]);
            return abiEncodedTransactionData;
        },
    };
    public fillOrKillOrder = {
        async sendTransactionAsync(
            order: {makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string},
            takerAssetFillAmount: BigNumber,
            signature: string,
        txData?: Partial<TxData> | undefined,
        ): Promise<string> {
        
        assert.isBigNumber('takerAssetFillAmount', takerAssetFillAmount);
        assert.isString('signature', signature);
        const self = this as any as IWrapperFunctionsContract;
        const encodedData = self._strictEncodeArguments('fillOrKillOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),uint256,bytes)', [order,
    takerAssetFillAmount,
    signature
    ]);
        const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
                to: self.address,
                ...txData,
                data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            self.fillOrKillOrder.estimateGasAsync.bind(
                self,
                order,
                takerAssetFillAmount,
                signature
            ),
        );
        const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
        return txHash;
        },
        awaitTransactionSuccessAsync(
            order: {makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string},
            takerAssetFillAmount: BigNumber,
            signature: string,
            txData?: Partial<TxData>,
            pollingIntervalMs?: number,
            timeoutMs?: number,
        ): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs> {
        
        assert.isBigNumber('takerAssetFillAmount', takerAssetFillAmount);
        assert.isString('signature', signature);
        const self = this as any as IWrapperFunctionsContract;
        const txHashPromise = self.fillOrKillOrder.sendTransactionAsync(order,
    takerAssetFillAmount,
    signature
    , txData);
        return new PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>(
            txHashPromise,
            (async (): Promise<TransactionReceiptWithDecodedLogs> => {
                // When the transaction hash resolves, wait for it to be mined.
                return self._web3Wrapper.awaitTransactionSuccessAsync(
                    await txHashPromise,
                    pollingIntervalMs,
                    timeoutMs,
                );
            })(),
        );
        },
        async estimateGasAsync(
            order: {makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string},
            takerAssetFillAmount: BigNumber,
            signature: string,
            txData?: Partial<TxData> | undefined,
        ): Promise<number> {
        
        assert.isBigNumber('takerAssetFillAmount', takerAssetFillAmount);
        assert.isString('signature', signature);
        const self = this as any as IWrapperFunctionsContract;
        const encodedData = self._strictEncodeArguments('fillOrKillOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),uint256,bytes)', [order,
    takerAssetFillAmount,
    signature
    ]);
        const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
                to: self.address,
                ...txData,
                data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
        );
        const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
        return gas;
        },
        async callAsync(
            order: {makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string},
            takerAssetFillAmount: BigNumber,
            signature: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<{makerAssetFilledAmount: BigNumber;takerAssetFilledAmount: BigNumber;makerFeePaid: BigNumber;takerFeePaid: BigNumber}
        > {
            
            assert.isBigNumber('takerAssetFillAmount', takerAssetFillAmount);
            assert.isString('signature', signature);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as IWrapperFunctionsContract;
            const encodedData = self._strictEncodeArguments('fillOrKillOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),uint256,bytes)', [order,
        takerAssetFillAmount,
        signature
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('fillOrKillOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),uint256,bytes)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<{makerAssetFilledAmount: BigNumber;takerAssetFilledAmount: BigNumber;makerFeePaid: BigNumber;takerFeePaid: BigNumber}
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                order: {makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string},
                takerAssetFillAmount: BigNumber,
                signature: string,
            ): string {
            
            assert.isBigNumber('takerAssetFillAmount', takerAssetFillAmount);
            assert.isString('signature', signature);
            const self = this as any as IWrapperFunctionsContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('fillOrKillOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),uint256,bytes)', [order,
        takerAssetFillAmount,
        signature
        ]);
            return abiEncodedTransactionData;
        },
    };
    public marketSellOrders = {
        async sendTransactionAsync(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            takerAssetFillAmount: BigNumber,
            signatures: string[],
        txData?: Partial<TxData> | undefined,
        ): Promise<string> {
        assert.isArray('orders', orders);
        assert.isBigNumber('takerAssetFillAmount', takerAssetFillAmount);
        assert.isArray('signatures', signatures);
        const self = this as any as IWrapperFunctionsContract;
        const encodedData = self._strictEncodeArguments('marketSellOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256,bytes[])', [orders,
    takerAssetFillAmount,
    signatures
    ]);
        const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
                to: self.address,
                ...txData,
                data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            self.marketSellOrders.estimateGasAsync.bind(
                self,
                orders,
                takerAssetFillAmount,
                signatures
            ),
        );
        const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
        return txHash;
        },
        awaitTransactionSuccessAsync(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            takerAssetFillAmount: BigNumber,
            signatures: string[],
            txData?: Partial<TxData>,
            pollingIntervalMs?: number,
            timeoutMs?: number,
        ): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs> {
        assert.isArray('orders', orders);
        assert.isBigNumber('takerAssetFillAmount', takerAssetFillAmount);
        assert.isArray('signatures', signatures);
        const self = this as any as IWrapperFunctionsContract;
        const txHashPromise = self.marketSellOrders.sendTransactionAsync(orders,
    takerAssetFillAmount,
    signatures
    , txData);
        return new PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>(
            txHashPromise,
            (async (): Promise<TransactionReceiptWithDecodedLogs> => {
                // When the transaction hash resolves, wait for it to be mined.
                return self._web3Wrapper.awaitTransactionSuccessAsync(
                    await txHashPromise,
                    pollingIntervalMs,
                    timeoutMs,
                );
            })(),
        );
        },
        async estimateGasAsync(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            takerAssetFillAmount: BigNumber,
            signatures: string[],
            txData?: Partial<TxData> | undefined,
        ): Promise<number> {
        assert.isArray('orders', orders);
        assert.isBigNumber('takerAssetFillAmount', takerAssetFillAmount);
        assert.isArray('signatures', signatures);
        const self = this as any as IWrapperFunctionsContract;
        const encodedData = self._strictEncodeArguments('marketSellOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256,bytes[])', [orders,
    takerAssetFillAmount,
    signatures
    ]);
        const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
                to: self.address,
                ...txData,
                data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
        );
        const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
        return gas;
        },
        async callAsync(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            takerAssetFillAmount: BigNumber,
            signatures: string[],
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<{makerAssetFilledAmount: BigNumber;takerAssetFilledAmount: BigNumber;makerFeePaid: BigNumber;takerFeePaid: BigNumber}
        > {
            assert.isArray('orders', orders);
            assert.isBigNumber('takerAssetFillAmount', takerAssetFillAmount);
            assert.isArray('signatures', signatures);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as IWrapperFunctionsContract;
            const encodedData = self._strictEncodeArguments('marketSellOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256,bytes[])', [orders,
        takerAssetFillAmount,
        signatures
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('marketSellOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256,bytes[])');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<{makerAssetFilledAmount: BigNumber;takerAssetFilledAmount: BigNumber;makerFeePaid: BigNumber;takerFeePaid: BigNumber}
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
                takerAssetFillAmount: BigNumber,
                signatures: string[],
            ): string {
            assert.isArray('orders', orders);
            assert.isBigNumber('takerAssetFillAmount', takerAssetFillAmount);
            assert.isArray('signatures', signatures);
            const self = this as any as IWrapperFunctionsContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('marketSellOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256,bytes[])', [orders,
        takerAssetFillAmount,
        signatures
        ]);
            return abiEncodedTransactionData;
        },
    };
    public getOrdersInfo = {
        async callAsync(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<Array<{orderStatus: number;orderHash: string;orderTakerAssetFilledAmount: BigNumber}>
        > {
            assert.isArray('orders', orders);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as IWrapperFunctionsContract;
            const encodedData = self._strictEncodeArguments('getOrdersInfo((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[])', [orders
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('getOrdersInfo((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[])');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<Array<{orderStatus: number;orderHash: string;orderTakerAssetFilledAmount: BigNumber}>
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            ): string {
            assert.isArray('orders', orders);
            const self = this as any as IWrapperFunctionsContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('getOrdersInfo((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[])', [orders
        ]);
            return abiEncodedTransactionData;
        },
    };
    public marketBuyOrdersNoThrow = {
        async sendTransactionAsync(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            makerAssetFillAmount: BigNumber,
            signatures: string[],
        txData?: Partial<TxData> | undefined,
        ): Promise<string> {
        assert.isArray('orders', orders);
        assert.isBigNumber('makerAssetFillAmount', makerAssetFillAmount);
        assert.isArray('signatures', signatures);
        const self = this as any as IWrapperFunctionsContract;
        const encodedData = self._strictEncodeArguments('marketBuyOrdersNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256,bytes[])', [orders,
    makerAssetFillAmount,
    signatures
    ]);
        const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
                to: self.address,
                ...txData,
                data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            self.marketBuyOrdersNoThrow.estimateGasAsync.bind(
                self,
                orders,
                makerAssetFillAmount,
                signatures
            ),
        );
        const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
        return txHash;
        },
        awaitTransactionSuccessAsync(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            makerAssetFillAmount: BigNumber,
            signatures: string[],
            txData?: Partial<TxData>,
            pollingIntervalMs?: number,
            timeoutMs?: number,
        ): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs> {
        assert.isArray('orders', orders);
        assert.isBigNumber('makerAssetFillAmount', makerAssetFillAmount);
        assert.isArray('signatures', signatures);
        const self = this as any as IWrapperFunctionsContract;
        const txHashPromise = self.marketBuyOrdersNoThrow.sendTransactionAsync(orders,
    makerAssetFillAmount,
    signatures
    , txData);
        return new PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>(
            txHashPromise,
            (async (): Promise<TransactionReceiptWithDecodedLogs> => {
                // When the transaction hash resolves, wait for it to be mined.
                return self._web3Wrapper.awaitTransactionSuccessAsync(
                    await txHashPromise,
                    pollingIntervalMs,
                    timeoutMs,
                );
            })(),
        );
        },
        async estimateGasAsync(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            makerAssetFillAmount: BigNumber,
            signatures: string[],
            txData?: Partial<TxData> | undefined,
        ): Promise<number> {
        assert.isArray('orders', orders);
        assert.isBigNumber('makerAssetFillAmount', makerAssetFillAmount);
        assert.isArray('signatures', signatures);
        const self = this as any as IWrapperFunctionsContract;
        const encodedData = self._strictEncodeArguments('marketBuyOrdersNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256,bytes[])', [orders,
    makerAssetFillAmount,
    signatures
    ]);
        const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
                to: self.address,
                ...txData,
                data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
        );
        const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
        return gas;
        },
        async callAsync(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            makerAssetFillAmount: BigNumber,
            signatures: string[],
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<{makerAssetFilledAmount: BigNumber;takerAssetFilledAmount: BigNumber;makerFeePaid: BigNumber;takerFeePaid: BigNumber}
        > {
            assert.isArray('orders', orders);
            assert.isBigNumber('makerAssetFillAmount', makerAssetFillAmount);
            assert.isArray('signatures', signatures);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as IWrapperFunctionsContract;
            const encodedData = self._strictEncodeArguments('marketBuyOrdersNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256,bytes[])', [orders,
        makerAssetFillAmount,
        signatures
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('marketBuyOrdersNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256,bytes[])');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<{makerAssetFilledAmount: BigNumber;takerAssetFilledAmount: BigNumber;makerFeePaid: BigNumber;takerFeePaid: BigNumber}
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
                makerAssetFillAmount: BigNumber,
                signatures: string[],
            ): string {
            assert.isArray('orders', orders);
            assert.isBigNumber('makerAssetFillAmount', makerAssetFillAmount);
            assert.isArray('signatures', signatures);
            const self = this as any as IWrapperFunctionsContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('marketBuyOrdersNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256,bytes[])', [orders,
        makerAssetFillAmount,
        signatures
        ]);
            return abiEncodedTransactionData;
        },
    };
    public marketSellOrdersNoThrow = {
        async sendTransactionAsync(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            takerAssetFillAmount: BigNumber,
            signatures: string[],
        txData?: Partial<TxData> | undefined,
        ): Promise<string> {
        assert.isArray('orders', orders);
        assert.isBigNumber('takerAssetFillAmount', takerAssetFillAmount);
        assert.isArray('signatures', signatures);
        const self = this as any as IWrapperFunctionsContract;
        const encodedData = self._strictEncodeArguments('marketSellOrdersNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256,bytes[])', [orders,
    takerAssetFillAmount,
    signatures
    ]);
        const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
                to: self.address,
                ...txData,
                data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            self.marketSellOrdersNoThrow.estimateGasAsync.bind(
                self,
                orders,
                takerAssetFillAmount,
                signatures
            ),
        );
        const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
        return txHash;
        },
        awaitTransactionSuccessAsync(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            takerAssetFillAmount: BigNumber,
            signatures: string[],
            txData?: Partial<TxData>,
            pollingIntervalMs?: number,
            timeoutMs?: number,
        ): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs> {
        assert.isArray('orders', orders);
        assert.isBigNumber('takerAssetFillAmount', takerAssetFillAmount);
        assert.isArray('signatures', signatures);
        const self = this as any as IWrapperFunctionsContract;
        const txHashPromise = self.marketSellOrdersNoThrow.sendTransactionAsync(orders,
    takerAssetFillAmount,
    signatures
    , txData);
        return new PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>(
            txHashPromise,
            (async (): Promise<TransactionReceiptWithDecodedLogs> => {
                // When the transaction hash resolves, wait for it to be mined.
                return self._web3Wrapper.awaitTransactionSuccessAsync(
                    await txHashPromise,
                    pollingIntervalMs,
                    timeoutMs,
                );
            })(),
        );
        },
        async estimateGasAsync(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            takerAssetFillAmount: BigNumber,
            signatures: string[],
            txData?: Partial<TxData> | undefined,
        ): Promise<number> {
        assert.isArray('orders', orders);
        assert.isBigNumber('takerAssetFillAmount', takerAssetFillAmount);
        assert.isArray('signatures', signatures);
        const self = this as any as IWrapperFunctionsContract;
        const encodedData = self._strictEncodeArguments('marketSellOrdersNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256,bytes[])', [orders,
    takerAssetFillAmount,
    signatures
    ]);
        const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
                to: self.address,
                ...txData,
                data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
        );
        const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
        return gas;
        },
        async callAsync(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            takerAssetFillAmount: BigNumber,
            signatures: string[],
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<{makerAssetFilledAmount: BigNumber;takerAssetFilledAmount: BigNumber;makerFeePaid: BigNumber;takerFeePaid: BigNumber}
        > {
            assert.isArray('orders', orders);
            assert.isBigNumber('takerAssetFillAmount', takerAssetFillAmount);
            assert.isArray('signatures', signatures);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as IWrapperFunctionsContract;
            const encodedData = self._strictEncodeArguments('marketSellOrdersNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256,bytes[])', [orders,
        takerAssetFillAmount,
        signatures
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('marketSellOrdersNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256,bytes[])');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<{makerAssetFilledAmount: BigNumber;takerAssetFilledAmount: BigNumber;makerFeePaid: BigNumber;takerFeePaid: BigNumber}
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
                takerAssetFillAmount: BigNumber,
                signatures: string[],
            ): string {
            assert.isArray('orders', orders);
            assert.isBigNumber('takerAssetFillAmount', takerAssetFillAmount);
            assert.isArray('signatures', signatures);
            const self = this as any as IWrapperFunctionsContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('marketSellOrdersNoThrow((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256,bytes[])', [orders,
        takerAssetFillAmount,
        signatures
        ]);
            return abiEncodedTransactionData;
        },
    };
    public marketBuyOrders = {
        async sendTransactionAsync(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            makerAssetFillAmount: BigNumber,
            signatures: string[],
        txData?: Partial<TxData> | undefined,
        ): Promise<string> {
        assert.isArray('orders', orders);
        assert.isBigNumber('makerAssetFillAmount', makerAssetFillAmount);
        assert.isArray('signatures', signatures);
        const self = this as any as IWrapperFunctionsContract;
        const encodedData = self._strictEncodeArguments('marketBuyOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256,bytes[])', [orders,
    makerAssetFillAmount,
    signatures
    ]);
        const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
                to: self.address,
                ...txData,
                data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            self.marketBuyOrders.estimateGasAsync.bind(
                self,
                orders,
                makerAssetFillAmount,
                signatures
            ),
        );
        const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
        return txHash;
        },
        awaitTransactionSuccessAsync(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            makerAssetFillAmount: BigNumber,
            signatures: string[],
            txData?: Partial<TxData>,
            pollingIntervalMs?: number,
            timeoutMs?: number,
        ): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs> {
        assert.isArray('orders', orders);
        assert.isBigNumber('makerAssetFillAmount', makerAssetFillAmount);
        assert.isArray('signatures', signatures);
        const self = this as any as IWrapperFunctionsContract;
        const txHashPromise = self.marketBuyOrders.sendTransactionAsync(orders,
    makerAssetFillAmount,
    signatures
    , txData);
        return new PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>(
            txHashPromise,
            (async (): Promise<TransactionReceiptWithDecodedLogs> => {
                // When the transaction hash resolves, wait for it to be mined.
                return self._web3Wrapper.awaitTransactionSuccessAsync(
                    await txHashPromise,
                    pollingIntervalMs,
                    timeoutMs,
                );
            })(),
        );
        },
        async estimateGasAsync(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            makerAssetFillAmount: BigNumber,
            signatures: string[],
            txData?: Partial<TxData> | undefined,
        ): Promise<number> {
        assert.isArray('orders', orders);
        assert.isBigNumber('makerAssetFillAmount', makerAssetFillAmount);
        assert.isArray('signatures', signatures);
        const self = this as any as IWrapperFunctionsContract;
        const encodedData = self._strictEncodeArguments('marketBuyOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256,bytes[])', [orders,
    makerAssetFillAmount,
    signatures
    ]);
        const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
                to: self.address,
                ...txData,
                data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
        );
        const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
        return gas;
        },
        async callAsync(
            orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
            makerAssetFillAmount: BigNumber,
            signatures: string[],
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<{makerAssetFilledAmount: BigNumber;takerAssetFilledAmount: BigNumber;makerFeePaid: BigNumber;takerFeePaid: BigNumber}
        > {
            assert.isArray('orders', orders);
            assert.isBigNumber('makerAssetFillAmount', makerAssetFillAmount);
            assert.isArray('signatures', signatures);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as IWrapperFunctionsContract;
            const encodedData = self._strictEncodeArguments('marketBuyOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256,bytes[])', [orders,
        makerAssetFillAmount,
        signatures
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('marketBuyOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256,bytes[])');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<{makerAssetFilledAmount: BigNumber;takerAssetFilledAmount: BigNumber;makerFeePaid: BigNumber;takerFeePaid: BigNumber}
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                orders: Array<{makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string}>,
                makerAssetFillAmount: BigNumber,
                signatures: string[],
            ): string {
            assert.isArray('orders', orders);
            assert.isBigNumber('makerAssetFillAmount', makerAssetFillAmount);
            assert.isArray('signatures', signatures);
            const self = this as any as IWrapperFunctionsContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('marketBuyOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],uint256,bytes[])', [orders,
        makerAssetFillAmount,
        signatures
        ]);
            return abiEncodedTransactionData;
        },
    };
    public static async deployFrom0xArtifactAsync(
        artifact: ContractArtifact | SimpleContractArtifact,
        supportedProvider: SupportedProvider,
        txDefaults: Partial<TxData>,
    ): Promise<IWrapperFunctionsContract> {
        assert.doesConformToSchema('txDefaults', txDefaults, schemas.txDataSchema, [
            schemas.addressSchema,
            schemas.numberSchema,
            schemas.jsNumber,
        ]);
        if (artifact.compilerOutput === undefined) {
            throw new Error('Compiler output not found in the artifact file');
        }
        const provider = providerUtils.standardizeOrThrow(supportedProvider);
        const bytecode = artifact.compilerOutput.evm.bytecode.object;
        const abi = artifact.compilerOutput.abi;
        return IWrapperFunctionsContract.deployAsync(bytecode, abi, provider, txDefaults, );
    }
    public static async deployAsync(
        bytecode: string,
        abi: ContractAbi,
        supportedProvider: SupportedProvider,
        txDefaults: Partial<TxData>,
    ): Promise<IWrapperFunctionsContract> {
        assert.isHexString('bytecode', bytecode);
        assert.doesConformToSchema('txDefaults', txDefaults, schemas.txDataSchema, [
            schemas.addressSchema,
            schemas.numberSchema,
            schemas.jsNumber,
        ]);
        const provider = providerUtils.standardizeOrThrow(supportedProvider);
        const constructorAbi = BaseContract._lookupConstructorAbi(abi);
        [] = BaseContract._formatABIDataItemList(
            constructorAbi.inputs,
            [],
            BaseContract._bigNumberToString,
        );
        const iface = new ethers.utils.Interface(abi);
        const deployInfo = iface.deployFunction;
        const txData = deployInfo.encode(bytecode, []);
        const web3Wrapper = new Web3Wrapper(provider);
        const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {data: txData},
            txDefaults,
            web3Wrapper.estimateGasAsync.bind(web3Wrapper),
        );
        const txHash = await web3Wrapper.sendTransactionAsync(txDataWithDefaults);
        logUtils.log(`transactionHash: ${txHash}`);
        const txReceipt = await web3Wrapper.awaitTransactionSuccessAsync(txHash);
        logUtils.log(`IWrapperFunctions successfully deployed at ${txReceipt.contractAddress}`);
        const contractInstance = new IWrapperFunctionsContract(txReceipt.contractAddress as string, provider, txDefaults);
        contractInstance.constructorArgs = [];
        return contractInstance;
    }


    /**
     * @returns      The contract ABI
     */
    public static ABI(): ContractAbi {
        const abi = [
            { 
                constant: false,
                inputs: [
                    {
                        name: 'orders',
                        type: 'tuple[]',
                        
                        components: [
                            {
                                name: 'makerAddress',
                                type: 'address',
                                
                            },
                            {
                                name: 'takerAddress',
                                type: 'address',
                                
                            },
                            {
                                name: 'feeRecipientAddress',
                                type: 'address',
                                
                            },
                            {
                                name: 'senderAddress',
                                type: 'address',
                                
                            },
                            {
                                name: 'makerAssetAmount',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'takerAssetAmount',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'makerFee',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'takerFee',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'expirationTimeSeconds',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'salt',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'makerAssetData',
                                type: 'bytes',
                                
                            },
                            {
                                name: 'takerAssetData',
                                type: 'bytes',
                                
                            },
                        ]
                    },
                    {
                        name: 'takerAssetFillAmounts',
                        type: 'uint256[]',
                        
                    },
                    {
                        name: 'signatures',
                        type: 'bytes[]',
                        
                    },
                ],
                name: 'batchFillOrders',
                outputs: [
                    {
                        name: 'totalFillResults',
                        type: 'tuple',
                        
                        components: [
                            {
                                name: 'makerAssetFilledAmount',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'takerAssetFilledAmount',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'makerFeePaid',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'takerFeePaid',
                                type: 'uint256',
                                
                            },
                        ]
                    },
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                constant: false,
                inputs: [
                    {
                        name: 'order',
                        type: 'tuple',
                        
                        components: [
                            {
                                name: 'makerAddress',
                                type: 'address',
                                
                            },
                            {
                                name: 'takerAddress',
                                type: 'address',
                                
                            },
                            {
                                name: 'feeRecipientAddress',
                                type: 'address',
                                
                            },
                            {
                                name: 'senderAddress',
                                type: 'address',
                                
                            },
                            {
                                name: 'makerAssetAmount',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'takerAssetAmount',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'makerFee',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'takerFee',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'expirationTimeSeconds',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'salt',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'makerAssetData',
                                type: 'bytes',
                                
                            },
                            {
                                name: 'takerAssetData',
                                type: 'bytes',
                                
                            },
                        ]
                    },
                    {
                        name: 'takerAssetFillAmount',
                        type: 'uint256',
                        
                    },
                    {
                        name: 'signature',
                        type: 'bytes',
                        
                    },
                ],
                name: 'fillOrderNoThrow',
                outputs: [
                    {
                        name: 'fillResults',
                        type: 'tuple',
                        
                        components: [
                            {
                                name: 'makerAssetFilledAmount',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'takerAssetFilledAmount',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'makerFeePaid',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'takerFeePaid',
                                type: 'uint256',
                                
                            },
                        ]
                    },
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                constant: false,
                inputs: [
                    {
                        name: 'orders',
                        type: 'tuple[]',
                        
                        components: [
                            {
                                name: 'makerAddress',
                                type: 'address',
                                
                            },
                            {
                                name: 'takerAddress',
                                type: 'address',
                                
                            },
                            {
                                name: 'feeRecipientAddress',
                                type: 'address',
                                
                            },
                            {
                                name: 'senderAddress',
                                type: 'address',
                                
                            },
                            {
                                name: 'makerAssetAmount',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'takerAssetAmount',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'makerFee',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'takerFee',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'expirationTimeSeconds',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'salt',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'makerAssetData',
                                type: 'bytes',
                                
                            },
                            {
                                name: 'takerAssetData',
                                type: 'bytes',
                                
                            },
                        ]
                    },
                ],
                name: 'batchCancelOrders',
                outputs: [
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                constant: false,
                inputs: [
                    {
                        name: 'orders',
                        type: 'tuple[]',
                        
                        components: [
                            {
                                name: 'makerAddress',
                                type: 'address',
                                
                            },
                            {
                                name: 'takerAddress',
                                type: 'address',
                                
                            },
                            {
                                name: 'feeRecipientAddress',
                                type: 'address',
                                
                            },
                            {
                                name: 'senderAddress',
                                type: 'address',
                                
                            },
                            {
                                name: 'makerAssetAmount',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'takerAssetAmount',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'makerFee',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'takerFee',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'expirationTimeSeconds',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'salt',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'makerAssetData',
                                type: 'bytes',
                                
                            },
                            {
                                name: 'takerAssetData',
                                type: 'bytes',
                                
                            },
                        ]
                    },
                    {
                        name: 'takerAssetFillAmounts',
                        type: 'uint256[]',
                        
                    },
                    {
                        name: 'signatures',
                        type: 'bytes[]',
                        
                    },
                ],
                name: 'batchFillOrKillOrders',
                outputs: [
                    {
                        name: 'totalFillResults',
                        type: 'tuple',
                        
                        components: [
                            {
                                name: 'makerAssetFilledAmount',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'takerAssetFilledAmount',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'makerFeePaid',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'takerFeePaid',
                                type: 'uint256',
                                
                            },
                        ]
                    },
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                constant: false,
                inputs: [
                    {
                        name: 'orders',
                        type: 'tuple[]',
                        
                        components: [
                            {
                                name: 'makerAddress',
                                type: 'address',
                                
                            },
                            {
                                name: 'takerAddress',
                                type: 'address',
                                
                            },
                            {
                                name: 'feeRecipientAddress',
                                type: 'address',
                                
                            },
                            {
                                name: 'senderAddress',
                                type: 'address',
                                
                            },
                            {
                                name: 'makerAssetAmount',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'takerAssetAmount',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'makerFee',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'takerFee',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'expirationTimeSeconds',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'salt',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'makerAssetData',
                                type: 'bytes',
                                
                            },
                            {
                                name: 'takerAssetData',
                                type: 'bytes',
                                
                            },
                        ]
                    },
                    {
                        name: 'takerAssetFillAmounts',
                        type: 'uint256[]',
                        
                    },
                    {
                        name: 'signatures',
                        type: 'bytes[]',
                        
                    },
                ],
                name: 'batchFillOrdersNoThrow',
                outputs: [
                    {
                        name: 'totalFillResults',
                        type: 'tuple',
                        
                        components: [
                            {
                                name: 'makerAssetFilledAmount',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'takerAssetFilledAmount',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'makerFeePaid',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'takerFeePaid',
                                type: 'uint256',
                                
                            },
                        ]
                    },
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                constant: false,
                inputs: [
                    {
                        name: 'order',
                        type: 'tuple',
                        
                        components: [
                            {
                                name: 'makerAddress',
                                type: 'address',
                                
                            },
                            {
                                name: 'takerAddress',
                                type: 'address',
                                
                            },
                            {
                                name: 'feeRecipientAddress',
                                type: 'address',
                                
                            },
                            {
                                name: 'senderAddress',
                                type: 'address',
                                
                            },
                            {
                                name: 'makerAssetAmount',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'takerAssetAmount',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'makerFee',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'takerFee',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'expirationTimeSeconds',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'salt',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'makerAssetData',
                                type: 'bytes',
                                
                            },
                            {
                                name: 'takerAssetData',
                                type: 'bytes',
                                
                            },
                        ]
                    },
                    {
                        name: 'takerAssetFillAmount',
                        type: 'uint256',
                        
                    },
                    {
                        name: 'signature',
                        type: 'bytes',
                        
                    },
                ],
                name: 'fillOrKillOrder',
                outputs: [
                    {
                        name: 'fillResults',
                        type: 'tuple',
                        
                        components: [
                            {
                                name: 'makerAssetFilledAmount',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'takerAssetFilledAmount',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'makerFeePaid',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'takerFeePaid',
                                type: 'uint256',
                                
                            },
                        ]
                    },
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                constant: false,
                inputs: [
                    {
                        name: 'orders',
                        type: 'tuple[]',
                        
                        components: [
                            {
                                name: 'makerAddress',
                                type: 'address',
                                
                            },
                            {
                                name: 'takerAddress',
                                type: 'address',
                                
                            },
                            {
                                name: 'feeRecipientAddress',
                                type: 'address',
                                
                            },
                            {
                                name: 'senderAddress',
                                type: 'address',
                                
                            },
                            {
                                name: 'makerAssetAmount',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'takerAssetAmount',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'makerFee',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'takerFee',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'expirationTimeSeconds',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'salt',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'makerAssetData',
                                type: 'bytes',
                                
                            },
                            {
                                name: 'takerAssetData',
                                type: 'bytes',
                                
                            },
                        ]
                    },
                    {
                        name: 'takerAssetFillAmount',
                        type: 'uint256',
                        
                    },
                    {
                        name: 'signatures',
                        type: 'bytes[]',
                        
                    },
                ],
                name: 'marketSellOrders',
                outputs: [
                    {
                        name: 'totalFillResults',
                        type: 'tuple',
                        
                        components: [
                            {
                                name: 'makerAssetFilledAmount',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'takerAssetFilledAmount',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'makerFeePaid',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'takerFeePaid',
                                type: 'uint256',
                                
                            },
                        ]
                    },
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                constant: true,
                inputs: [
                    {
                        name: 'orders',
                        type: 'tuple[]',
                        
                        components: [
                            {
                                name: 'makerAddress',
                                type: 'address',
                                
                            },
                            {
                                name: 'takerAddress',
                                type: 'address',
                                
                            },
                            {
                                name: 'feeRecipientAddress',
                                type: 'address',
                                
                            },
                            {
                                name: 'senderAddress',
                                type: 'address',
                                
                            },
                            {
                                name: 'makerAssetAmount',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'takerAssetAmount',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'makerFee',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'takerFee',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'expirationTimeSeconds',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'salt',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'makerAssetData',
                                type: 'bytes',
                                
                            },
                            {
                                name: 'takerAssetData',
                                type: 'bytes',
                                
                            },
                        ]
                    },
                ],
                name: 'getOrdersInfo',
                outputs: [
                    {
                        name: '',
                        type: 'tuple[]',
                        
                        components: [
                            {
                                name: 'orderStatus',
                                type: 'uint8',
                                
                            },
                            {
                                name: 'orderHash',
                                type: 'bytes32',
                                
                            },
                            {
                                name: 'orderTakerAssetFilledAmount',
                                type: 'uint256',
                                
                            },
                        ]
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            { 
                constant: false,
                inputs: [
                    {
                        name: 'orders',
                        type: 'tuple[]',
                        
                        components: [
                            {
                                name: 'makerAddress',
                                type: 'address',
                                
                            },
                            {
                                name: 'takerAddress',
                                type: 'address',
                                
                            },
                            {
                                name: 'feeRecipientAddress',
                                type: 'address',
                                
                            },
                            {
                                name: 'senderAddress',
                                type: 'address',
                                
                            },
                            {
                                name: 'makerAssetAmount',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'takerAssetAmount',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'makerFee',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'takerFee',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'expirationTimeSeconds',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'salt',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'makerAssetData',
                                type: 'bytes',
                                
                            },
                            {
                                name: 'takerAssetData',
                                type: 'bytes',
                                
                            },
                        ]
                    },
                    {
                        name: 'makerAssetFillAmount',
                        type: 'uint256',
                        
                    },
                    {
                        name: 'signatures',
                        type: 'bytes[]',
                        
                    },
                ],
                name: 'marketBuyOrdersNoThrow',
                outputs: [
                    {
                        name: 'totalFillResults',
                        type: 'tuple',
                        
                        components: [
                            {
                                name: 'makerAssetFilledAmount',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'takerAssetFilledAmount',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'makerFeePaid',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'takerFeePaid',
                                type: 'uint256',
                                
                            },
                        ]
                    },
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                constant: false,
                inputs: [
                    {
                        name: 'orders',
                        type: 'tuple[]',
                        
                        components: [
                            {
                                name: 'makerAddress',
                                type: 'address',
                                
                            },
                            {
                                name: 'takerAddress',
                                type: 'address',
                                
                            },
                            {
                                name: 'feeRecipientAddress',
                                type: 'address',
                                
                            },
                            {
                                name: 'senderAddress',
                                type: 'address',
                                
                            },
                            {
                                name: 'makerAssetAmount',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'takerAssetAmount',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'makerFee',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'takerFee',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'expirationTimeSeconds',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'salt',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'makerAssetData',
                                type: 'bytes',
                                
                            },
                            {
                                name: 'takerAssetData',
                                type: 'bytes',
                                
                            },
                        ]
                    },
                    {
                        name: 'takerAssetFillAmount',
                        type: 'uint256',
                        
                    },
                    {
                        name: 'signatures',
                        type: 'bytes[]',
                        
                    },
                ],
                name: 'marketSellOrdersNoThrow',
                outputs: [
                    {
                        name: 'totalFillResults',
                        type: 'tuple',
                        
                        components: [
                            {
                                name: 'makerAssetFilledAmount',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'takerAssetFilledAmount',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'makerFeePaid',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'takerFeePaid',
                                type: 'uint256',
                                
                            },
                        ]
                    },
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                constant: false,
                inputs: [
                    {
                        name: 'orders',
                        type: 'tuple[]',
                        
                        components: [
                            {
                                name: 'makerAddress',
                                type: 'address',
                                
                            },
                            {
                                name: 'takerAddress',
                                type: 'address',
                                
                            },
                            {
                                name: 'feeRecipientAddress',
                                type: 'address',
                                
                            },
                            {
                                name: 'senderAddress',
                                type: 'address',
                                
                            },
                            {
                                name: 'makerAssetAmount',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'takerAssetAmount',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'makerFee',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'takerFee',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'expirationTimeSeconds',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'salt',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'makerAssetData',
                                type: 'bytes',
                                
                            },
                            {
                                name: 'takerAssetData',
                                type: 'bytes',
                                
                            },
                        ]
                    },
                    {
                        name: 'makerAssetFillAmount',
                        type: 'uint256',
                        
                    },
                    {
                        name: 'signatures',
                        type: 'bytes[]',
                        
                    },
                ],
                name: 'marketBuyOrders',
                outputs: [
                    {
                        name: 'totalFillResults',
                        type: 'tuple',
                        
                        components: [
                            {
                                name: 'makerAssetFilledAmount',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'takerAssetFilledAmount',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'makerFeePaid',
                                type: 'uint256',
                                
                            },
                            {
                                name: 'takerFeePaid',
                                type: 'uint256',
                                
                            },
                        ]
                    },
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
        ] as ContractAbi;
        return abi;
    }
    constructor(address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>) {
        super('IWrapperFunctions', IWrapperFunctionsContract.ABI(), address, supportedProvider, txDefaults);
        classUtils.bindAll(this, ['_abiEncoderByFunctionSignature', 'address', '_web3Wrapper']);
    }
} 

// tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method no-parameter-reassignment no-consecutive-blank-lines ordered-imports align
// tslint:enable:trailing-comma whitespace no-trailing-whitespace
