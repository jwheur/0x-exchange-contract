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
export class TestLibsContract extends BaseContract {
    public publicIsRoundingErrorFloor = {
        async callAsync(
            numerator: BigNumber,
            denominator: BigNumber,
            target: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            assert.isBigNumber('numerator', numerator);
            assert.isBigNumber('denominator', denominator);
            assert.isBigNumber('target', target);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as TestLibsContract;
            const encodedData = self._strictEncodeArguments('publicIsRoundingErrorFloor(uint256,uint256,uint256)', [numerator,
        denominator,
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
            const abiEncoder = self._lookupAbiEncoder('publicIsRoundingErrorFloor(uint256,uint256,uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<boolean
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                numerator: BigNumber,
                denominator: BigNumber,
                target: BigNumber,
            ): string {
            assert.isBigNumber('numerator', numerator);
            assert.isBigNumber('denominator', denominator);
            assert.isBigNumber('target', target);
            const self = this as any as TestLibsContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('publicIsRoundingErrorFloor(uint256,uint256,uint256)', [numerator,
        denominator,
        target
        ]);
            return abiEncodedTransactionData;
        },
    };
    public publicGetPartialAmountCeil = {
        async callAsync(
            numerator: BigNumber,
            denominator: BigNumber,
            target: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            assert.isBigNumber('numerator', numerator);
            assert.isBigNumber('denominator', denominator);
            assert.isBigNumber('target', target);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as TestLibsContract;
            const encodedData = self._strictEncodeArguments('publicGetPartialAmountCeil(uint256,uint256,uint256)', [numerator,
        denominator,
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
            const abiEncoder = self._lookupAbiEncoder('publicGetPartialAmountCeil(uint256,uint256,uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                numerator: BigNumber,
                denominator: BigNumber,
                target: BigNumber,
            ): string {
            assert.isBigNumber('numerator', numerator);
            assert.isBigNumber('denominator', denominator);
            assert.isBigNumber('target', target);
            const self = this as any as TestLibsContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('publicGetPartialAmountCeil(uint256,uint256,uint256)', [numerator,
        denominator,
        target
        ]);
            return abiEncodedTransactionData;
        },
    };
    public getDomainSeparatorSchemaHash = {
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
            const self = this as any as TestLibsContract;
            const encodedData = self._strictEncodeArguments('getDomainSeparatorSchemaHash()', []);
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
            const abiEncoder = self._lookupAbiEncoder('getDomainSeparatorSchemaHash()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
            ): string {
            const self = this as any as TestLibsContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('getDomainSeparatorSchemaHash()', []);
            return abiEncodedTransactionData;
        },
    };
    public publicAddFillResults = {
        async callAsync(
            totalFillResults: {makerAssetFilledAmount: BigNumber;takerAssetFilledAmount: BigNumber;makerFeePaid: BigNumber;takerFeePaid: BigNumber},
            singleFillResults: {makerAssetFilledAmount: BigNumber;takerAssetFilledAmount: BigNumber;makerFeePaid: BigNumber;takerFeePaid: BigNumber},
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<{makerAssetFilledAmount: BigNumber;takerAssetFilledAmount: BigNumber;makerFeePaid: BigNumber;takerFeePaid: BigNumber}
        > {
            
            
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as TestLibsContract;
            const encodedData = self._strictEncodeArguments('publicAddFillResults((uint256,uint256,uint256,uint256),(uint256,uint256,uint256,uint256))', [totalFillResults,
        singleFillResults
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
            const abiEncoder = self._lookupAbiEncoder('publicAddFillResults((uint256,uint256,uint256,uint256),(uint256,uint256,uint256,uint256))');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<{makerAssetFilledAmount: BigNumber;takerAssetFilledAmount: BigNumber;makerFeePaid: BigNumber;takerFeePaid: BigNumber}
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                totalFillResults: {makerAssetFilledAmount: BigNumber;takerAssetFilledAmount: BigNumber;makerFeePaid: BigNumber;takerFeePaid: BigNumber},
                singleFillResults: {makerAssetFilledAmount: BigNumber;takerAssetFilledAmount: BigNumber;makerFeePaid: BigNumber;takerFeePaid: BigNumber},
            ): string {
            
            
            const self = this as any as TestLibsContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('publicAddFillResults((uint256,uint256,uint256,uint256),(uint256,uint256,uint256,uint256))', [totalFillResults,
        singleFillResults
        ]);
            return abiEncodedTransactionData;
        },
    };
    public publicIsRoundingErrorCeil = {
        async callAsync(
            numerator: BigNumber,
            denominator: BigNumber,
            target: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            assert.isBigNumber('numerator', numerator);
            assert.isBigNumber('denominator', denominator);
            assert.isBigNumber('target', target);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as TestLibsContract;
            const encodedData = self._strictEncodeArguments('publicIsRoundingErrorCeil(uint256,uint256,uint256)', [numerator,
        denominator,
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
            const abiEncoder = self._lookupAbiEncoder('publicIsRoundingErrorCeil(uint256,uint256,uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<boolean
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                numerator: BigNumber,
                denominator: BigNumber,
                target: BigNumber,
            ): string {
            assert.isBigNumber('numerator', numerator);
            assert.isBigNumber('denominator', denominator);
            assert.isBigNumber('target', target);
            const self = this as any as TestLibsContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('publicIsRoundingErrorCeil(uint256,uint256,uint256)', [numerator,
        denominator,
        target
        ]);
            return abiEncodedTransactionData;
        },
    };
    public getOrderSchemaHash = {
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
            const self = this as any as TestLibsContract;
            const encodedData = self._strictEncodeArguments('getOrderSchemaHash()', []);
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
            const abiEncoder = self._lookupAbiEncoder('getOrderSchemaHash()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
            ): string {
            const self = this as any as TestLibsContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('getOrderSchemaHash()', []);
            return abiEncodedTransactionData;
        },
    };
    public publicGetPartialAmountFloor = {
        async callAsync(
            numerator: BigNumber,
            denominator: BigNumber,
            target: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            assert.isBigNumber('numerator', numerator);
            assert.isBigNumber('denominator', denominator);
            assert.isBigNumber('target', target);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as TestLibsContract;
            const encodedData = self._strictEncodeArguments('publicGetPartialAmountFloor(uint256,uint256,uint256)', [numerator,
        denominator,
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
            const abiEncoder = self._lookupAbiEncoder('publicGetPartialAmountFloor(uint256,uint256,uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                numerator: BigNumber,
                denominator: BigNumber,
                target: BigNumber,
            ): string {
            assert.isBigNumber('numerator', numerator);
            assert.isBigNumber('denominator', denominator);
            assert.isBigNumber('target', target);
            const self = this as any as TestLibsContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('publicGetPartialAmountFloor(uint256,uint256,uint256)', [numerator,
        denominator,
        target
        ]);
            return abiEncodedTransactionData;
        },
    };
    public publicGetOrderHash = {
        async callAsync(
            order: {makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string},
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
            const self = this as any as TestLibsContract;
            const encodedData = self._strictEncodeArguments('publicGetOrderHash((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes))', [order
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
            const abiEncoder = self._lookupAbiEncoder('publicGetOrderHash((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes))');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                order: {makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string},
            ): string {
            
            const self = this as any as TestLibsContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('publicGetOrderHash((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes))', [order
        ]);
            return abiEncodedTransactionData;
        },
    };
    public EIP712_DOMAIN_HASH = {
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
            const self = this as any as TestLibsContract;
            const encodedData = self._strictEncodeArguments('EIP712_DOMAIN_HASH()', []);
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
            const abiEncoder = self._lookupAbiEncoder('EIP712_DOMAIN_HASH()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
            ): string {
            const self = this as any as TestLibsContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('EIP712_DOMAIN_HASH()', []);
            return abiEncodedTransactionData;
        },
    };
    public publicAbiEncodeFillOrder = {
        async callAsync(
            order: {makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string},
            takerAssetFillAmount: BigNumber,
            signature: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
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
            const self = this as any as TestLibsContract;
            const encodedData = self._strictEncodeArguments('publicAbiEncodeFillOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),uint256,bytes)', [order,
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
            const abiEncoder = self._lookupAbiEncoder('publicAbiEncodeFillOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),uint256,bytes)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
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
            const self = this as any as TestLibsContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('publicAbiEncodeFillOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),uint256,bytes)', [order,
        takerAssetFillAmount,
        signature
        ]);
            return abiEncodedTransactionData;
        },
    };
    public static async deployFrom0xArtifactAsync(
        artifact: ContractArtifact | SimpleContractArtifact,
        supportedProvider: SupportedProvider,
        txDefaults: Partial<TxData>,
    ): Promise<TestLibsContract> {
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
        return TestLibsContract.deployAsync(bytecode, abi, provider, txDefaults, );
    }
    public static async deployAsync(
        bytecode: string,
        abi: ContractAbi,
        supportedProvider: SupportedProvider,
        txDefaults: Partial<TxData>,
    ): Promise<TestLibsContract> {
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
        logUtils.log(`TestLibs successfully deployed at ${txReceipt.contractAddress}`);
        const contractInstance = new TestLibsContract(txReceipt.contractAddress as string, provider, txDefaults);
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
                        name: 'numerator',
                        type: 'uint256',
                        
                    },
                    {
                        name: 'denominator',
                        type: 'uint256',
                        
                    },
                    {
                        name: 'target',
                        type: 'uint256',
                        
                    },
                ],
                name: 'publicIsRoundingErrorFloor',
                outputs: [
                    {
                        name: 'isError',
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
                        name: 'numerator',
                        type: 'uint256',
                        
                    },
                    {
                        name: 'denominator',
                        type: 'uint256',
                        
                    },
                    {
                        name: 'target',
                        type: 'uint256',
                        
                    },
                ],
                name: 'publicGetPartialAmountCeil',
                outputs: [
                    {
                        name: 'partialAmount',
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
                ],
                name: 'getDomainSeparatorSchemaHash',
                outputs: [
                    {
                        name: '',
                        type: 'bytes32',
                        
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
                    {
                        name: 'singleFillResults',
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
                name: 'publicAddFillResults',
                outputs: [
                    {
                        name: '',
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
                stateMutability: 'pure',
                type: 'function',
            },
            { 
                constant: true,
                inputs: [
                    {
                        name: 'numerator',
                        type: 'uint256',
                        
                    },
                    {
                        name: 'denominator',
                        type: 'uint256',
                        
                    },
                    {
                        name: 'target',
                        type: 'uint256',
                        
                    },
                ],
                name: 'publicIsRoundingErrorCeil',
                outputs: [
                    {
                        name: 'isError',
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
                ],
                name: 'getOrderSchemaHash',
                outputs: [
                    {
                        name: '',
                        type: 'bytes32',
                        
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
                        name: 'numerator',
                        type: 'uint256',
                        
                    },
                    {
                        name: 'denominator',
                        type: 'uint256',
                        
                    },
                    {
                        name: 'target',
                        type: 'uint256',
                        
                    },
                ],
                name: 'publicGetPartialAmountFloor',
                outputs: [
                    {
                        name: 'partialAmount',
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
                name: 'publicGetOrderHash',
                outputs: [
                    {
                        name: 'orderHash',
                        type: 'bytes32',
                        
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            { 
                constant: true,
                inputs: [
                ],
                name: 'EIP712_DOMAIN_HASH',
                outputs: [
                    {
                        name: '',
                        type: 'bytes32',
                        
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
                name: 'publicAbiEncodeFillOrder',
                outputs: [
                    {
                        name: 'fillOrderCalldata',
                        type: 'bytes',
                        
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
        super('TestLibs', TestLibsContract.ABI(), address, supportedProvider, txDefaults);
        classUtils.bindAll(this, ['_abiEncoderByFunctionSignature', 'address', '_web3Wrapper']);
    }
} 

// tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method no-parameter-reassignment no-consecutive-blank-lines ordered-imports align
// tslint:enable:trailing-comma whitespace no-trailing-whitespace
