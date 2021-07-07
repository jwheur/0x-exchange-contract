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
export class IExchangeCoreContract extends BaseContract {
    public cancelOrdersUpTo = {
        async sendTransactionAsync(
            targetOrderEpoch: BigNumber,
        txData?: Partial<TxData> | undefined,
        ): Promise<string> {
        assert.isBigNumber('targetOrderEpoch', targetOrderEpoch);
        const self = this as any as IExchangeCoreContract;
        const encodedData = self._strictEncodeArguments('cancelOrdersUpTo(uint256)', [targetOrderEpoch
    ]);
        const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
                to: self.address,
                ...txData,
                data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            self.cancelOrdersUpTo.estimateGasAsync.bind(
                self,
                targetOrderEpoch
            ),
        );
        const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
        return txHash;
        },
        awaitTransactionSuccessAsync(
            targetOrderEpoch: BigNumber,
            txData?: Partial<TxData>,
            pollingIntervalMs?: number,
            timeoutMs?: number,
        ): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs> {
        assert.isBigNumber('targetOrderEpoch', targetOrderEpoch);
        const self = this as any as IExchangeCoreContract;
        const txHashPromise = self.cancelOrdersUpTo.sendTransactionAsync(targetOrderEpoch
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
            targetOrderEpoch: BigNumber,
            txData?: Partial<TxData> | undefined,
        ): Promise<number> {
        assert.isBigNumber('targetOrderEpoch', targetOrderEpoch);
        const self = this as any as IExchangeCoreContract;
        const encodedData = self._strictEncodeArguments('cancelOrdersUpTo(uint256)', [targetOrderEpoch
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
            targetOrderEpoch: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            assert.isBigNumber('targetOrderEpoch', targetOrderEpoch);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as IExchangeCoreContract;
            const encodedData = self._strictEncodeArguments('cancelOrdersUpTo(uint256)', [targetOrderEpoch
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
            const abiEncoder = self._lookupAbiEncoder('cancelOrdersUpTo(uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                targetOrderEpoch: BigNumber,
            ): string {
            assert.isBigNumber('targetOrderEpoch', targetOrderEpoch);
            const self = this as any as IExchangeCoreContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('cancelOrdersUpTo(uint256)', [targetOrderEpoch
        ]);
            return abiEncodedTransactionData;
        },
    };
    public fillOrder = {
        async sendTransactionAsync(
            order: {makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string},
            takerAssetFillAmount: BigNumber,
            signature: string,
        txData?: Partial<TxData> | undefined,
        ): Promise<string> {
        
        assert.isBigNumber('takerAssetFillAmount', takerAssetFillAmount);
        assert.isString('signature', signature);
        const self = this as any as IExchangeCoreContract;
        const encodedData = self._strictEncodeArguments('fillOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),uint256,bytes)', [order,
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
            self.fillOrder.estimateGasAsync.bind(
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
        const self = this as any as IExchangeCoreContract;
        const txHashPromise = self.fillOrder.sendTransactionAsync(order,
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
        const self = this as any as IExchangeCoreContract;
        const encodedData = self._strictEncodeArguments('fillOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),uint256,bytes)', [order,
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
            const self = this as any as IExchangeCoreContract;
            const encodedData = self._strictEncodeArguments('fillOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),uint256,bytes)', [order,
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
            const abiEncoder = self._lookupAbiEncoder('fillOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),uint256,bytes)');
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
            const self = this as any as IExchangeCoreContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('fillOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),uint256,bytes)', [order,
        takerAssetFillAmount,
        signature
        ]);
            return abiEncodedTransactionData;
        },
    };
    public getOrderInfo = {
        async callAsync(
            order: {makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string},
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<{orderStatus: number;orderHash: string;orderTakerAssetFilledAmount: BigNumber}
        > {
            
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as IExchangeCoreContract;
            const encodedData = self._strictEncodeArguments('getOrderInfo((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes))', [order
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
            const abiEncoder = self._lookupAbiEncoder('getOrderInfo((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes))');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<{orderStatus: number;orderHash: string;orderTakerAssetFilledAmount: BigNumber}
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                order: {makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string},
            ): string {
            
            const self = this as any as IExchangeCoreContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('getOrderInfo((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes))', [order
        ]);
            return abiEncodedTransactionData;
        },
    };
    public cancelOrder = {
        async sendTransactionAsync(
            order: {makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string},
        txData?: Partial<TxData> | undefined,
        ): Promise<string> {
        
        const self = this as any as IExchangeCoreContract;
        const encodedData = self._strictEncodeArguments('cancelOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes))', [order
    ]);
        const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
                to: self.address,
                ...txData,
                data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            self.cancelOrder.estimateGasAsync.bind(
                self,
                order
            ),
        );
        const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
        return txHash;
        },
        awaitTransactionSuccessAsync(
            order: {makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string},
            txData?: Partial<TxData>,
            pollingIntervalMs?: number,
            timeoutMs?: number,
        ): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs> {
        
        const self = this as any as IExchangeCoreContract;
        const txHashPromise = self.cancelOrder.sendTransactionAsync(order
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
            txData?: Partial<TxData> | undefined,
        ): Promise<number> {
        
        const self = this as any as IExchangeCoreContract;
        const encodedData = self._strictEncodeArguments('cancelOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes))', [order
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
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as IExchangeCoreContract;
            const encodedData = self._strictEncodeArguments('cancelOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes))', [order
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
            const abiEncoder = self._lookupAbiEncoder('cancelOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes))');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                order: {makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string},
            ): string {
            
            const self = this as any as IExchangeCoreContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('cancelOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes))', [order
        ]);
            return abiEncodedTransactionData;
        },
    };
    public static async deployFrom0xArtifactAsync(
        artifact: ContractArtifact | SimpleContractArtifact,
        supportedProvider: SupportedProvider,
        txDefaults: Partial<TxData>,
    ): Promise<IExchangeCoreContract> {
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
        return IExchangeCoreContract.deployAsync(bytecode, abi, provider, txDefaults, );
    }
    public static async deployAsync(
        bytecode: string,
        abi: ContractAbi,
        supportedProvider: SupportedProvider,
        txDefaults: Partial<TxData>,
    ): Promise<IExchangeCoreContract> {
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
        logUtils.log(`IExchangeCore successfully deployed at ${txReceipt.contractAddress}`);
        const contractInstance = new IExchangeCoreContract(txReceipt.contractAddress as string, provider, txDefaults);
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
                        name: 'targetOrderEpoch',
                        type: 'uint256',
                        
                    },
                ],
                name: 'cancelOrdersUpTo',
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
                name: 'fillOrder',
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
                constant: true,
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
                ],
                name: 'getOrderInfo',
                outputs: [
                    {
                        name: 'orderInfo',
                        type: 'tuple',
                        
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
                ],
                name: 'cancelOrder',
                outputs: [
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
        ] as ContractAbi;
        return abi;
    }
    constructor(address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>) {
        super('IExchangeCore', IExchangeCoreContract.ABI(), address, supportedProvider, txDefaults);
        classUtils.bindAll(this, ['_abiEncoderByFunctionSignature', 'address', '_web3Wrapper']);
    }
} 

// tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method no-parameter-reassignment no-consecutive-blank-lines ordered-imports align
// tslint:enable:trailing-comma whitespace no-trailing-whitespace
