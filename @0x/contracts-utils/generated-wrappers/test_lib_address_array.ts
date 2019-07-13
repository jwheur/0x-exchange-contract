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
export class TestLibAddressArrayContract extends BaseContract {
    public publicIndexOf = {
        async callAsync(
            addressArray: string[],
            target: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<[boolean, BigNumber]
        > {
            assert.isArray('addressArray', addressArray);
            assert.isString('target', target);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as TestLibAddressArrayContract;
            const encodedData = self._strictEncodeArguments('publicIndexOf(address[],address)', [addressArray,
        target
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
            const abiEncoder = self._lookupAbiEncoder('publicIndexOf(address[],address)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<[boolean, BigNumber]
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                addressArray: string[],
                target: string,
            ): string {
            assert.isArray('addressArray', addressArray);
            assert.isString('target', target);
            const self = this as any as TestLibAddressArrayContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('publicIndexOf(address[],address)', [addressArray,
        target
        ]);
            return abiEncodedTransactionData;
        },
    };
    public publicContains = {
        async callAsync(
            addressArray: string[],
            target: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            assert.isArray('addressArray', addressArray);
            assert.isString('target', target);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as TestLibAddressArrayContract;
            const encodedData = self._strictEncodeArguments('publicContains(address[],address)', [addressArray,
        target
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
            const abiEncoder = self._lookupAbiEncoder('publicContains(address[],address)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<boolean
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                addressArray: string[],
                target: string,
            ): string {
            assert.isArray('addressArray', addressArray);
            assert.isString('target', target);
            const self = this as any as TestLibAddressArrayContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('publicContains(address[],address)', [addressArray,
        target
        ]);
            return abiEncodedTransactionData;
        },
    };
    public publicAppend = {
        async callAsync(
            addressArray: string[],
            addressToAppend: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string[]
        > {
            assert.isArray('addressArray', addressArray);
            assert.isString('addressToAppend', addressToAppend);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as TestLibAddressArrayContract;
            const encodedData = self._strictEncodeArguments('publicAppend(address[],address)', [addressArray,
        addressToAppend
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
            const abiEncoder = self._lookupAbiEncoder('publicAppend(address[],address)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string[]
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                addressArray: string[],
                addressToAppend: string,
            ): string {
            assert.isArray('addressArray', addressArray);
            assert.isString('addressToAppend', addressToAppend);
            const self = this as any as TestLibAddressArrayContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('publicAppend(address[],address)', [addressArray,
        addressToAppend
        ]);
            return abiEncodedTransactionData;
        },
    };
    public testAppendRealloc = {
        async callAsync(
            addressArray: string[],
            freeMemOffset: BigNumber,
            addressToAppend: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<[string[], BigNumber, BigNumber]
        > {
            assert.isArray('addressArray', addressArray);
            assert.isBigNumber('freeMemOffset', freeMemOffset);
            assert.isString('addressToAppend', addressToAppend);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as TestLibAddressArrayContract;
            const encodedData = self._strictEncodeArguments('testAppendRealloc(address[],int256,address)', [addressArray,
        freeMemOffset,
        addressToAppend
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
            const abiEncoder = self._lookupAbiEncoder('testAppendRealloc(address[],int256,address)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<[string[], BigNumber, BigNumber]
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                addressArray: string[],
                freeMemOffset: BigNumber,
                addressToAppend: string,
            ): string {
            assert.isArray('addressArray', addressArray);
            assert.isBigNumber('freeMemOffset', freeMemOffset);
            assert.isString('addressToAppend', addressToAppend);
            const self = this as any as TestLibAddressArrayContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('testAppendRealloc(address[],int256,address)', [addressArray,
        freeMemOffset,
        addressToAppend
        ]);
            return abiEncodedTransactionData;
        },
    };
    public static async deployFrom0xArtifactAsync(
        artifact: ContractArtifact | SimpleContractArtifact,
        supportedProvider: SupportedProvider,
        txDefaults: Partial<TxData>,
    ): Promise<TestLibAddressArrayContract> {
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
        return TestLibAddressArrayContract.deployAsync(bytecode, abi, provider, txDefaults, );
    }
    public static async deployAsync(
        bytecode: string,
        abi: ContractAbi,
        supportedProvider: SupportedProvider,
        txDefaults: Partial<TxData>,
    ): Promise<TestLibAddressArrayContract> {
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
        logUtils.log(`TestLibAddressArray successfully deployed at ${txReceipt.contractAddress}`);
        const contractInstance = new TestLibAddressArrayContract(txReceipt.contractAddress as string, provider, txDefaults);
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
                        name: 'addressArray',
                        type: 'address[]',
                        
                    },
                    {
                        name: 'target',
                        type: 'address',
                        
                    },
                ],
                name: 'publicIndexOf',
                outputs: [
                    {
                        name: 'success',
                        type: 'bool',
                        
                    },
                    {
                        name: 'index',
                        type: 'uint256',
                        
                    },
                ],
                payable: false,
                stateMutability: 'pure',
                type: 'function',
            },
            { 
                constant: true,
                inputs: [
                    {
                        name: 'addressArray',
                        type: 'address[]',
                        
                    },
                    {
                        name: 'target',
                        type: 'address',
                        
                    },
                ],
                name: 'publicContains',
                outputs: [
                    {
                        name: 'success',
                        type: 'bool',
                        
                    },
                ],
                payable: false,
                stateMutability: 'pure',
                type: 'function',
            },
            { 
                constant: true,
                inputs: [
                    {
                        name: 'addressArray',
                        type: 'address[]',
                        
                    },
                    {
                        name: 'addressToAppend',
                        type: 'address',
                        
                    },
                ],
                name: 'publicAppend',
                outputs: [
                    {
                        name: '',
                        type: 'address[]',
                        
                    },
                ],
                payable: false,
                stateMutability: 'pure',
                type: 'function',
            },
            { 
                constant: true,
                inputs: [
                    {
                        name: 'addressArray',
                        type: 'address[]',
                        
                    },
                    {
                        name: 'freeMemOffset',
                        type: 'int256',
                        
                    },
                    {
                        name: 'addressToAppend',
                        type: 'address',
                        
                    },
                ],
                name: 'testAppendRealloc',
                outputs: [
                    {
                        name: 'result',
                        type: 'address[]',
                        
                    },
                    {
                        name: 'oldArrayMemStart',
                        type: 'uint256',
                        
                    },
                    {
                        name: 'newArrayMemStart',
                        type: 'uint256',
                        
                    },
                ],
                payable: false,
                stateMutability: 'pure',
                type: 'function',
            },
        ] as ContractAbi;
        return abi;
    }
    constructor(address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>) {
        super('TestLibAddressArray', TestLibAddressArrayContract.ABI(), address, supportedProvider, txDefaults);
        classUtils.bindAll(this, ['_abiEncoderByFunctionSignature', 'address', '_web3Wrapper']);
    }
} 

// tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method no-parameter-reassignment no-consecutive-blank-lines ordered-imports align
// tslint:enable:trailing-comma whitespace no-trailing-whitespace
