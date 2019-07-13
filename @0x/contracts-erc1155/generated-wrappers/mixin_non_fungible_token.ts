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
export class MixinNonFungibleTokenContract extends BaseContract {
    public isNonFungibleItem = {
        async callAsync(
            id: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            assert.isBigNumber('id', id);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as MixinNonFungibleTokenContract;
            const encodedData = self._strictEncodeArguments('isNonFungibleItem(uint256)', [id
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
            const abiEncoder = self._lookupAbiEncoder('isNonFungibleItem(uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<boolean
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                id: BigNumber,
            ): string {
            assert.isBigNumber('id', id);
            const self = this as any as MixinNonFungibleTokenContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('isNonFungibleItem(uint256)', [id
        ]);
            return abiEncodedTransactionData;
        },
    };
    public ownerOf = {
        async callAsync(
            id: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            assert.isBigNumber('id', id);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as MixinNonFungibleTokenContract;
            const encodedData = self._strictEncodeArguments('ownerOf(uint256)', [id
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
            const abiEncoder = self._lookupAbiEncoder('ownerOf(uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                id: BigNumber,
            ): string {
            assert.isBigNumber('id', id);
            const self = this as any as MixinNonFungibleTokenContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('ownerOf(uint256)', [id
        ]);
            return abiEncodedTransactionData;
        },
    };
    public getNonFungibleBaseType = {
        async callAsync(
            id: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            assert.isBigNumber('id', id);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as MixinNonFungibleTokenContract;
            const encodedData = self._strictEncodeArguments('getNonFungibleBaseType(uint256)', [id
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
            const abiEncoder = self._lookupAbiEncoder('getNonFungibleBaseType(uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                id: BigNumber,
            ): string {
            assert.isBigNumber('id', id);
            const self = this as any as MixinNonFungibleTokenContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('getNonFungibleBaseType(uint256)', [id
        ]);
            return abiEncodedTransactionData;
        },
    };
    public isNonFungibleBaseType = {
        async callAsync(
            id: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            assert.isBigNumber('id', id);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as MixinNonFungibleTokenContract;
            const encodedData = self._strictEncodeArguments('isNonFungibleBaseType(uint256)', [id
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
            const abiEncoder = self._lookupAbiEncoder('isNonFungibleBaseType(uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<boolean
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                id: BigNumber,
            ): string {
            assert.isBigNumber('id', id);
            const self = this as any as MixinNonFungibleTokenContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('isNonFungibleBaseType(uint256)', [id
        ]);
            return abiEncodedTransactionData;
        },
    };
    public getNonFungibleIndex = {
        async callAsync(
            id: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            assert.isBigNumber('id', id);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as MixinNonFungibleTokenContract;
            const encodedData = self._strictEncodeArguments('getNonFungibleIndex(uint256)', [id
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
            const abiEncoder = self._lookupAbiEncoder('getNonFungibleIndex(uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                id: BigNumber,
            ): string {
            assert.isBigNumber('id', id);
            const self = this as any as MixinNonFungibleTokenContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('getNonFungibleIndex(uint256)', [id
        ]);
            return abiEncodedTransactionData;
        },
    };
    public isFungible = {
        async callAsync(
            id: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            assert.isBigNumber('id', id);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as MixinNonFungibleTokenContract;
            const encodedData = self._strictEncodeArguments('isFungible(uint256)', [id
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
            const abiEncoder = self._lookupAbiEncoder('isFungible(uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<boolean
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                id: BigNumber,
            ): string {
            assert.isBigNumber('id', id);
            const self = this as any as MixinNonFungibleTokenContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('isFungible(uint256)', [id
        ]);
            return abiEncodedTransactionData;
        },
    };
    public isNonFungible = {
        async callAsync(
            id: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            assert.isBigNumber('id', id);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as MixinNonFungibleTokenContract;
            const encodedData = self._strictEncodeArguments('isNonFungible(uint256)', [id
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
            const abiEncoder = self._lookupAbiEncoder('isNonFungible(uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<boolean
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                id: BigNumber,
            ): string {
            assert.isBigNumber('id', id);
            const self = this as any as MixinNonFungibleTokenContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('isNonFungible(uint256)', [id
        ]);
            return abiEncodedTransactionData;
        },
    };
    public static async deployFrom0xArtifactAsync(
        artifact: ContractArtifact | SimpleContractArtifact,
        supportedProvider: SupportedProvider,
        txDefaults: Partial<TxData>,
    ): Promise<MixinNonFungibleTokenContract> {
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
        return MixinNonFungibleTokenContract.deployAsync(bytecode, abi, provider, txDefaults, );
    }
    public static async deployAsync(
        bytecode: string,
        abi: ContractAbi,
        supportedProvider: SupportedProvider,
        txDefaults: Partial<TxData>,
    ): Promise<MixinNonFungibleTokenContract> {
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
        logUtils.log(`MixinNonFungibleToken successfully deployed at ${txReceipt.contractAddress}`);
        const contractInstance = new MixinNonFungibleTokenContract(txReceipt.contractAddress as string, provider, txDefaults);
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
                        name: 'id',
                        type: 'uint256',
                        
                    },
                ],
                name: 'isNonFungibleItem',
                outputs: [
                    {
                        name: '',
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
                        name: 'id',
                        type: 'uint256',
                        
                    },
                ],
                name: 'ownerOf',
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
                        name: 'id',
                        type: 'uint256',
                        
                    },
                ],
                name: 'getNonFungibleBaseType',
                outputs: [
                    {
                        name: '',
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
                        name: 'id',
                        type: 'uint256',
                        
                    },
                ],
                name: 'isNonFungibleBaseType',
                outputs: [
                    {
                        name: '',
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
                        name: 'id',
                        type: 'uint256',
                        
                    },
                ],
                name: 'getNonFungibleIndex',
                outputs: [
                    {
                        name: '',
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
                        name: 'id',
                        type: 'uint256',
                        
                    },
                ],
                name: 'isFungible',
                outputs: [
                    {
                        name: '',
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
                        name: 'id',
                        type: 'uint256',
                        
                    },
                ],
                name: 'isNonFungible',
                outputs: [
                    {
                        name: '',
                        type: 'bool',
                        
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
        super('MixinNonFungibleToken', MixinNonFungibleTokenContract.ABI(), address, supportedProvider, txDefaults);
        classUtils.bindAll(this, ['_abiEncoderByFunctionSignature', 'address', '_web3Wrapper']);
    }
} 

// tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method no-parameter-reassignment no-consecutive-blank-lines ordered-imports align
// tslint:enable:trailing-comma whitespace no-trailing-whitespace
