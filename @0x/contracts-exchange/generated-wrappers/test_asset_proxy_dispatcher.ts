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

export type TestAssetProxyDispatcherEventArgs =
    | TestAssetProxyDispatcherAssetProxyRegisteredEventArgs;

export enum TestAssetProxyDispatcherEvents {
    AssetProxyRegistered = 'AssetProxyRegistered',
}

export interface TestAssetProxyDispatcherAssetProxyRegisteredEventArgs extends DecodedLogArgs {
    id: string;
    assetProxy: string;
}


/* istanbul ignore next */
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
export class TestAssetProxyDispatcherContract extends BaseContract {
    public assetProxies = {
        async callAsync(
            index_0: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            assert.isString('index_0', index_0);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as TestAssetProxyDispatcherContract;
            const encodedData = self._strictEncodeArguments('assetProxies(bytes4)', [index_0
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
            const abiEncoder = self._lookupAbiEncoder('assetProxies(bytes4)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                index_0: string,
            ): string {
            assert.isString('index_0', index_0);
            const self = this as any as TestAssetProxyDispatcherContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('assetProxies(bytes4)', [index_0
        ]);
            return abiEncodedTransactionData;
        },
    };
    public getAssetProxy = {
        async callAsync(
            assetProxyId: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            assert.isString('assetProxyId', assetProxyId);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as TestAssetProxyDispatcherContract;
            const encodedData = self._strictEncodeArguments('getAssetProxy(bytes4)', [assetProxyId
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
            const abiEncoder = self._lookupAbiEncoder('getAssetProxy(bytes4)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                assetProxyId: string,
            ): string {
            assert.isString('assetProxyId', assetProxyId);
            const self = this as any as TestAssetProxyDispatcherContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('getAssetProxy(bytes4)', [assetProxyId
        ]);
            return abiEncodedTransactionData;
        },
    };
    public publicDispatchTransferFrom = {
        async sendTransactionAsync(
            assetData: string,
            from: string,
            to: string,
            amount: BigNumber,
        txData?: Partial<TxData> | undefined,
        ): Promise<string> {
        assert.isString('assetData', assetData);
        assert.isString('from', from);
        assert.isString('to', to);
        assert.isBigNumber('amount', amount);
        const self = this as any as TestAssetProxyDispatcherContract;
        const encodedData = self._strictEncodeArguments('publicDispatchTransferFrom(bytes,address,address,uint256)', [assetData,
    from,
    to,
    amount
    ]);
        const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
                to: self.address,
                ...txData,
                data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            self.publicDispatchTransferFrom.estimateGasAsync.bind(
                self,
                assetData,
                from,
                to,
                amount
            ),
        );
        const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
        return txHash;
        },
        awaitTransactionSuccessAsync(
            assetData: string,
            from: string,
            to: string,
            amount: BigNumber,
            txData?: Partial<TxData>,
            pollingIntervalMs?: number,
            timeoutMs?: number,
        ): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs> {
        assert.isString('assetData', assetData);
        assert.isString('from', from);
        assert.isString('to', to);
        assert.isBigNumber('amount', amount);
        const self = this as any as TestAssetProxyDispatcherContract;
        const txHashPromise = self.publicDispatchTransferFrom.sendTransactionAsync(assetData,
    from,
    to,
    amount
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
            assetData: string,
            from: string,
            to: string,
            amount: BigNumber,
            txData?: Partial<TxData> | undefined,
        ): Promise<number> {
        assert.isString('assetData', assetData);
        assert.isString('from', from);
        assert.isString('to', to);
        assert.isBigNumber('amount', amount);
        const self = this as any as TestAssetProxyDispatcherContract;
        const encodedData = self._strictEncodeArguments('publicDispatchTransferFrom(bytes,address,address,uint256)', [assetData,
    from,
    to,
    amount
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
            assetData: string,
            from: string,
            to: string,
            amount: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            assert.isString('assetData', assetData);
            assert.isString('from', from);
            assert.isString('to', to);
            assert.isBigNumber('amount', amount);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as TestAssetProxyDispatcherContract;
            const encodedData = self._strictEncodeArguments('publicDispatchTransferFrom(bytes,address,address,uint256)', [assetData,
        from,
        to,
        amount
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
            const abiEncoder = self._lookupAbiEncoder('publicDispatchTransferFrom(bytes,address,address,uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                assetData: string,
                from: string,
                to: string,
                amount: BigNumber,
            ): string {
            assert.isString('assetData', assetData);
            assert.isString('from', from);
            assert.isString('to', to);
            assert.isBigNumber('amount', amount);
            const self = this as any as TestAssetProxyDispatcherContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('publicDispatchTransferFrom(bytes,address,address,uint256)', [assetData,
        from,
        to,
        amount
        ]);
            return abiEncodedTransactionData;
        },
    };
    public owner = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as TestAssetProxyDispatcherContract;
            const encodedData = self._strictEncodeArguments('owner()', []);
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
            const abiEncoder = self._lookupAbiEncoder('owner()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
            ): string {
            const self = this as any as TestAssetProxyDispatcherContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('owner()', []);
            return abiEncodedTransactionData;
        },
    };
    public registerAssetProxy = {
        async sendTransactionAsync(
            assetProxy: string,
        txData?: Partial<TxData> | undefined,
        ): Promise<string> {
        assert.isString('assetProxy', assetProxy);
        const self = this as any as TestAssetProxyDispatcherContract;
        const encodedData = self._strictEncodeArguments('registerAssetProxy(address)', [assetProxy
    ]);
        const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
                to: self.address,
                ...txData,
                data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            self.registerAssetProxy.estimateGasAsync.bind(
                self,
                assetProxy
            ),
        );
        const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
        return txHash;
        },
        awaitTransactionSuccessAsync(
            assetProxy: string,
            txData?: Partial<TxData>,
            pollingIntervalMs?: number,
            timeoutMs?: number,
        ): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs> {
        assert.isString('assetProxy', assetProxy);
        const self = this as any as TestAssetProxyDispatcherContract;
        const txHashPromise = self.registerAssetProxy.sendTransactionAsync(assetProxy
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
            assetProxy: string,
            txData?: Partial<TxData> | undefined,
        ): Promise<number> {
        assert.isString('assetProxy', assetProxy);
        const self = this as any as TestAssetProxyDispatcherContract;
        const encodedData = self._strictEncodeArguments('registerAssetProxy(address)', [assetProxy
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
            assetProxy: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            assert.isString('assetProxy', assetProxy);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as TestAssetProxyDispatcherContract;
            const encodedData = self._strictEncodeArguments('registerAssetProxy(address)', [assetProxy
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
            const abiEncoder = self._lookupAbiEncoder('registerAssetProxy(address)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                assetProxy: string,
            ): string {
            assert.isString('assetProxy', assetProxy);
            const self = this as any as TestAssetProxyDispatcherContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('registerAssetProxy(address)', [assetProxy
        ]);
            return abiEncodedTransactionData;
        },
    };
    public transferOwnership = {
        async sendTransactionAsync(
            newOwner: string,
        txData?: Partial<TxData> | undefined,
        ): Promise<string> {
        assert.isString('newOwner', newOwner);
        const self = this as any as TestAssetProxyDispatcherContract;
        const encodedData = self._strictEncodeArguments('transferOwnership(address)', [newOwner
    ]);
        const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
                to: self.address,
                ...txData,
                data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            self.transferOwnership.estimateGasAsync.bind(
                self,
                newOwner
            ),
        );
        const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
        return txHash;
        },
        awaitTransactionSuccessAsync(
            newOwner: string,
            txData?: Partial<TxData>,
            pollingIntervalMs?: number,
            timeoutMs?: number,
        ): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs> {
        assert.isString('newOwner', newOwner);
        const self = this as any as TestAssetProxyDispatcherContract;
        const txHashPromise = self.transferOwnership.sendTransactionAsync(newOwner
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
            newOwner: string,
            txData?: Partial<TxData> | undefined,
        ): Promise<number> {
        assert.isString('newOwner', newOwner);
        const self = this as any as TestAssetProxyDispatcherContract;
        const encodedData = self._strictEncodeArguments('transferOwnership(address)', [newOwner
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
            newOwner: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            assert.isString('newOwner', newOwner);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as TestAssetProxyDispatcherContract;
            const encodedData = self._strictEncodeArguments('transferOwnership(address)', [newOwner
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
            const abiEncoder = self._lookupAbiEncoder('transferOwnership(address)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                newOwner: string,
            ): string {
            assert.isString('newOwner', newOwner);
            const self = this as any as TestAssetProxyDispatcherContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('transferOwnership(address)', [newOwner
        ]);
            return abiEncodedTransactionData;
        },
    };
    public static async deployFrom0xArtifactAsync(
        artifact: ContractArtifact | SimpleContractArtifact,
        supportedProvider: SupportedProvider,
        txDefaults: Partial<TxData>,
    ): Promise<TestAssetProxyDispatcherContract> {
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
        return TestAssetProxyDispatcherContract.deployAsync(bytecode, abi, provider, txDefaults, );
    }
    public static async deployAsync(
        bytecode: string,
        abi: ContractAbi,
        supportedProvider: SupportedProvider,
        txDefaults: Partial<TxData>,
    ): Promise<TestAssetProxyDispatcherContract> {
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
        logUtils.log(`TestAssetProxyDispatcher successfully deployed at ${txReceipt.contractAddress}`);
        const contractInstance = new TestAssetProxyDispatcherContract(txReceipt.contractAddress as string, provider, txDefaults);
        contractInstance.constructorArgs = [];
        return contractInstance;
    }


    /**
     * @returns      The contract ABI
     */
    public static ABI(): ContractAbi {
        const abi = [
            { 
                constant: true,
                inputs: [
                    {
                        name: 'index_0',
                        type: 'bytes4',
                        
                    },
                ],
                name: 'assetProxies',
                outputs: [
                    {
                        name: '',
                        type: 'address',
                        
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            { 
                constant: true,
                inputs: [
                    {
                        name: 'assetProxyId',
                        type: 'bytes4',
                        
                    },
                ],
                name: 'getAssetProxy',
                outputs: [
                    {
                        name: '',
                        type: 'address',
                        
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
                        name: 'assetData',
                        type: 'bytes',
                        
                    },
                    {
                        name: 'from',
                        type: 'address',
                        
                    },
                    {
                        name: 'to',
                        type: 'address',
                        
                    },
                    {
                        name: 'amount',
                        type: 'uint256',
                        
                    },
                ],
                name: 'publicDispatchTransferFrom',
                outputs: [
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                constant: true,
                inputs: [
                ],
                name: 'owner',
                outputs: [
                    {
                        name: '',
                        type: 'address',
                        
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
                        name: 'assetProxy',
                        type: 'address',
                        
                    },
                ],
                name: 'registerAssetProxy',
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
                        name: 'newOwner',
                        type: 'address',
                        
                    },
                ],
                name: 'transferOwnership',
                outputs: [
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                anonymous: false,
                inputs: [
                    {
                        name: 'id',
                        type: 'bytes4',
                        indexed: false,
                    },
                    {
                        name: 'assetProxy',
                        type: 'address',
                        indexed: false,
                    },
                ],
                name: 'AssetProxyRegistered',
                outputs: [
                ],
                type: 'event',
            },
        ] as ContractAbi;
        return abi;
    }
    constructor(address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>) {
        super('TestAssetProxyDispatcher', TestAssetProxyDispatcherContract.ABI(), address, supportedProvider, txDefaults);
        classUtils.bindAll(this, ['_abiEncoderByFunctionSignature', 'address', '_web3Wrapper']);
    }
} 

// tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method no-parameter-reassignment no-consecutive-blank-lines ordered-imports align
// tslint:enable:trailing-comma whitespace no-trailing-whitespace
