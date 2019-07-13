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
export class ExchangeWrapperContract extends BaseContract {
    public fillOrder = {
        async sendTransactionAsync(
            order: {makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string},
            takerAssetFillAmount: BigNumber,
            salt: BigNumber,
            orderSignature: string,
            takerSignature: string,
        txData?: Partial<TxData> | undefined,
        ): Promise<string> {
        
        assert.isBigNumber('takerAssetFillAmount', takerAssetFillAmount);
        assert.isBigNumber('salt', salt);
        assert.isString('orderSignature', orderSignature);
        assert.isString('takerSignature', takerSignature);
        const self = this as any as ExchangeWrapperContract;
        const encodedData = self._strictEncodeArguments('fillOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),uint256,uint256,bytes,bytes)', [order,
    takerAssetFillAmount,
    salt,
    orderSignature,
    takerSignature
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
                salt,
                orderSignature,
                takerSignature
            ),
        );
        const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
        return txHash;
        },
        awaitTransactionSuccessAsync(
            order: {makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string},
            takerAssetFillAmount: BigNumber,
            salt: BigNumber,
            orderSignature: string,
            takerSignature: string,
            txData?: Partial<TxData>,
            pollingIntervalMs?: number,
            timeoutMs?: number,
        ): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs> {
        
        assert.isBigNumber('takerAssetFillAmount', takerAssetFillAmount);
        assert.isBigNumber('salt', salt);
        assert.isString('orderSignature', orderSignature);
        assert.isString('takerSignature', takerSignature);
        const self = this as any as ExchangeWrapperContract;
        const txHashPromise = self.fillOrder.sendTransactionAsync(order,
    takerAssetFillAmount,
    salt,
    orderSignature,
    takerSignature
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
            salt: BigNumber,
            orderSignature: string,
            takerSignature: string,
            txData?: Partial<TxData> | undefined,
        ): Promise<number> {
        
        assert.isBigNumber('takerAssetFillAmount', takerAssetFillAmount);
        assert.isBigNumber('salt', salt);
        assert.isString('orderSignature', orderSignature);
        assert.isString('takerSignature', takerSignature);
        const self = this as any as ExchangeWrapperContract;
        const encodedData = self._strictEncodeArguments('fillOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),uint256,uint256,bytes,bytes)', [order,
    takerAssetFillAmount,
    salt,
    orderSignature,
    takerSignature
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
            salt: BigNumber,
            orderSignature: string,
            takerSignature: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            
            assert.isBigNumber('takerAssetFillAmount', takerAssetFillAmount);
            assert.isBigNumber('salt', salt);
            assert.isString('orderSignature', orderSignature);
            assert.isString('takerSignature', takerSignature);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as ExchangeWrapperContract;
            const encodedData = self._strictEncodeArguments('fillOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),uint256,uint256,bytes,bytes)', [order,
        takerAssetFillAmount,
        salt,
        orderSignature,
        takerSignature
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
            const abiEncoder = self._lookupAbiEncoder('fillOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),uint256,uint256,bytes,bytes)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                order: {makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string},
                takerAssetFillAmount: BigNumber,
                salt: BigNumber,
                orderSignature: string,
                takerSignature: string,
            ): string {
            
            assert.isBigNumber('takerAssetFillAmount', takerAssetFillAmount);
            assert.isBigNumber('salt', salt);
            assert.isString('orderSignature', orderSignature);
            assert.isString('takerSignature', takerSignature);
            const self = this as any as ExchangeWrapperContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('fillOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),uint256,uint256,bytes,bytes)', [order,
        takerAssetFillAmount,
        salt,
        orderSignature,
        takerSignature
        ]);
            return abiEncodedTransactionData;
        },
    };
    public cancelOrdersUpTo = {
        async sendTransactionAsync(
            targetOrderEpoch: BigNumber,
            salt: BigNumber,
            makerSignature: string,
        txData?: Partial<TxData> | undefined,
        ): Promise<string> {
        assert.isBigNumber('targetOrderEpoch', targetOrderEpoch);
        assert.isBigNumber('salt', salt);
        assert.isString('makerSignature', makerSignature);
        const self = this as any as ExchangeWrapperContract;
        const encodedData = self._strictEncodeArguments('cancelOrdersUpTo(uint256,uint256,bytes)', [targetOrderEpoch,
    salt,
    makerSignature
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
                targetOrderEpoch,
                salt,
                makerSignature
            ),
        );
        const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
        return txHash;
        },
        awaitTransactionSuccessAsync(
            targetOrderEpoch: BigNumber,
            salt: BigNumber,
            makerSignature: string,
            txData?: Partial<TxData>,
            pollingIntervalMs?: number,
            timeoutMs?: number,
        ): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs> {
        assert.isBigNumber('targetOrderEpoch', targetOrderEpoch);
        assert.isBigNumber('salt', salt);
        assert.isString('makerSignature', makerSignature);
        const self = this as any as ExchangeWrapperContract;
        const txHashPromise = self.cancelOrdersUpTo.sendTransactionAsync(targetOrderEpoch,
    salt,
    makerSignature
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
            salt: BigNumber,
            makerSignature: string,
            txData?: Partial<TxData> | undefined,
        ): Promise<number> {
        assert.isBigNumber('targetOrderEpoch', targetOrderEpoch);
        assert.isBigNumber('salt', salt);
        assert.isString('makerSignature', makerSignature);
        const self = this as any as ExchangeWrapperContract;
        const encodedData = self._strictEncodeArguments('cancelOrdersUpTo(uint256,uint256,bytes)', [targetOrderEpoch,
    salt,
    makerSignature
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
            salt: BigNumber,
            makerSignature: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            assert.isBigNumber('targetOrderEpoch', targetOrderEpoch);
            assert.isBigNumber('salt', salt);
            assert.isString('makerSignature', makerSignature);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as ExchangeWrapperContract;
            const encodedData = self._strictEncodeArguments('cancelOrdersUpTo(uint256,uint256,bytes)', [targetOrderEpoch,
        salt,
        makerSignature
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
            const abiEncoder = self._lookupAbiEncoder('cancelOrdersUpTo(uint256,uint256,bytes)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                targetOrderEpoch: BigNumber,
                salt: BigNumber,
                makerSignature: string,
            ): string {
            assert.isBigNumber('targetOrderEpoch', targetOrderEpoch);
            assert.isBigNumber('salt', salt);
            assert.isString('makerSignature', makerSignature);
            const self = this as any as ExchangeWrapperContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('cancelOrdersUpTo(uint256,uint256,bytes)', [targetOrderEpoch,
        salt,
        makerSignature
        ]);
            return abiEncodedTransactionData;
        },
    };
    public static async deployFrom0xArtifactAsync(
        artifact: ContractArtifact | SimpleContractArtifact,
        supportedProvider: SupportedProvider,
        txDefaults: Partial<TxData>,
            _exchange: string,
    ): Promise<ExchangeWrapperContract> {
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
        return ExchangeWrapperContract.deployAsync(bytecode, abi, provider, txDefaults, _exchange
);
    }
    public static async deployAsync(
        bytecode: string,
        abi: ContractAbi,
        supportedProvider: SupportedProvider,
        txDefaults: Partial<TxData>,
            _exchange: string,
    ): Promise<ExchangeWrapperContract> {
        assert.isHexString('bytecode', bytecode);
        assert.doesConformToSchema('txDefaults', txDefaults, schemas.txDataSchema, [
            schemas.addressSchema,
            schemas.numberSchema,
            schemas.jsNumber,
        ]);
        const provider = providerUtils.standardizeOrThrow(supportedProvider);
        const constructorAbi = BaseContract._lookupConstructorAbi(abi);
        [_exchange
] = BaseContract._formatABIDataItemList(
            constructorAbi.inputs,
            [_exchange
],
            BaseContract._bigNumberToString,
        );
        const iface = new ethers.utils.Interface(abi);
        const deployInfo = iface.deployFunction;
        const txData = deployInfo.encode(bytecode, [_exchange
]);
        const web3Wrapper = new Web3Wrapper(provider);
        const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {data: txData},
            txDefaults,
            web3Wrapper.estimateGasAsync.bind(web3Wrapper),
        );
        const txHash = await web3Wrapper.sendTransactionAsync(txDataWithDefaults);
        logUtils.log(`transactionHash: ${txHash}`);
        const txReceipt = await web3Wrapper.awaitTransactionSuccessAsync(txHash);
        logUtils.log(`ExchangeWrapper successfully deployed at ${txReceipt.contractAddress}`);
        const contractInstance = new ExchangeWrapperContract(txReceipt.contractAddress as string, provider, txDefaults);
        contractInstance.constructorArgs = [_exchange
];
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
                        name: 'salt',
                        type: 'uint256',
                        
                    },
                    {
                        name: 'orderSignature',
                        type: 'bytes',
                        
                    },
                    {
                        name: 'takerSignature',
                        type: 'bytes',
                        
                    },
                ],
                name: 'fillOrder',
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
                        name: 'targetOrderEpoch',
                        type: 'uint256',
                        
                    },
                    {
                        name: 'salt',
                        type: 'uint256',
                        
                    },
                    {
                        name: 'makerSignature',
                        type: 'bytes',
                        
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
                inputs: [
                    {
                        name: '_exchange',
                        type: 'address',
                        
                    },
                ],
                outputs: [
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'constructor',
            },
        ] as ContractAbi;
        return abi;
    }
    constructor(address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>) {
        super('ExchangeWrapper', ExchangeWrapperContract.ABI(), address, supportedProvider, txDefaults);
        classUtils.bindAll(this, ['_abiEncoderByFunctionSignature', 'address', '_web3Wrapper']);
    }
} 

// tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method no-parameter-reassignment no-consecutive-blank-lines ordered-imports align
// tslint:enable:trailing-comma whitespace no-trailing-whitespace
