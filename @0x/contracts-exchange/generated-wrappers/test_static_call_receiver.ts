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
export class TestStaticCallReceiverContract extends BaseContract {
    public isValidSignature2 = {
        async sendTransactionAsync(
            hash: string,
            signature: string,
        txData?: Partial<TxData> | undefined,
        ): Promise<string> {
        assert.isString('hash', hash);
        assert.isString('signature', signature);
        const self = this as any as TestStaticCallReceiverContract;
        const encodedData = self._strictEncodeArguments('isValidSignature(bytes32,bytes)', [hash,
    signature
    ]);
        const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
                to: self.address,
                ...txData,
                data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            self.isValidSignature2.estimateGasAsync.bind(
                self,
                hash,
                signature
            ),
        );
        const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
        return txHash;
        },
        awaitTransactionSuccessAsync(
            hash: string,
            signature: string,
            txData?: Partial<TxData>,
            pollingIntervalMs?: number,
            timeoutMs?: number,
        ): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs> {
        assert.isString('hash', hash);
        assert.isString('signature', signature);
        const self = this as any as TestStaticCallReceiverContract;
        const txHashPromise = self.isValidSignature2.sendTransactionAsync(hash,
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
            hash: string,
            signature: string,
            txData?: Partial<TxData> | undefined,
        ): Promise<number> {
        assert.isString('hash', hash);
        assert.isString('signature', signature);
        const self = this as any as TestStaticCallReceiverContract;
        const encodedData = self._strictEncodeArguments('isValidSignature(bytes32,bytes)', [hash,
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
            hash: string,
            signature: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            assert.isString('hash', hash);
            assert.isString('signature', signature);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as TestStaticCallReceiverContract;
            const encodedData = self._strictEncodeArguments('isValidSignature(bytes32,bytes)', [hash,
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
            const abiEncoder = self._lookupAbiEncoder('isValidSignature(bytes32,bytes)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<boolean
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                hash: string,
                signature: string,
            ): string {
            assert.isString('hash', hash);
            assert.isString('signature', signature);
            const self = this as any as TestStaticCallReceiverContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('isValidSignature(bytes32,bytes)', [hash,
        signature
        ]);
            return abiEncodedTransactionData;
        },
    };
    public isValidSignature1 = {
        async sendTransactionAsync(
            hash: string,
            signerAddress: string,
            signature: string,
        txData?: Partial<TxData> | undefined,
        ): Promise<string> {
        assert.isString('hash', hash);
        assert.isString('signerAddress', signerAddress);
        assert.isString('signature', signature);
        const self = this as any as TestStaticCallReceiverContract;
        const encodedData = self._strictEncodeArguments('isValidSignature(bytes32,address,bytes)', [hash,
    signerAddress,
    signature
    ]);
        const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
                to: self.address,
                ...txData,
                data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            self.isValidSignature1.estimateGasAsync.bind(
                self,
                hash,
                signerAddress,
                signature
            ),
        );
        const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
        return txHash;
        },
        awaitTransactionSuccessAsync(
            hash: string,
            signerAddress: string,
            signature: string,
            txData?: Partial<TxData>,
            pollingIntervalMs?: number,
            timeoutMs?: number,
        ): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs> {
        assert.isString('hash', hash);
        assert.isString('signerAddress', signerAddress);
        assert.isString('signature', signature);
        const self = this as any as TestStaticCallReceiverContract;
        const txHashPromise = self.isValidSignature1.sendTransactionAsync(hash,
    signerAddress,
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
            hash: string,
            signerAddress: string,
            signature: string,
            txData?: Partial<TxData> | undefined,
        ): Promise<number> {
        assert.isString('hash', hash);
        assert.isString('signerAddress', signerAddress);
        assert.isString('signature', signature);
        const self = this as any as TestStaticCallReceiverContract;
        const encodedData = self._strictEncodeArguments('isValidSignature(bytes32,address,bytes)', [hash,
    signerAddress,
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
            hash: string,
            signerAddress: string,
            signature: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            assert.isString('hash', hash);
            assert.isString('signerAddress', signerAddress);
            assert.isString('signature', signature);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as TestStaticCallReceiverContract;
            const encodedData = self._strictEncodeArguments('isValidSignature(bytes32,address,bytes)', [hash,
        signerAddress,
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
            const abiEncoder = self._lookupAbiEncoder('isValidSignature(bytes32,address,bytes)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<boolean
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                hash: string,
                signerAddress: string,
                signature: string,
            ): string {
            assert.isString('hash', hash);
            assert.isString('signerAddress', signerAddress);
            assert.isString('signature', signature);
            const self = this as any as TestStaticCallReceiverContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('isValidSignature(bytes32,address,bytes)', [hash,
        signerAddress,
        signature
        ]);
            return abiEncodedTransactionData;
        },
    };
    public approveERC20 = {
        async sendTransactionAsync(
            token: string,
            spender: string,
            value: BigNumber,
        txData?: Partial<TxData> | undefined,
        ): Promise<string> {
        assert.isString('token', token);
        assert.isString('spender', spender);
        assert.isBigNumber('value', value);
        const self = this as any as TestStaticCallReceiverContract;
        const encodedData = self._strictEncodeArguments('approveERC20(address,address,uint256)', [token,
    spender,
    value
    ]);
        const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
                to: self.address,
                ...txData,
                data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            self.approveERC20.estimateGasAsync.bind(
                self,
                token,
                spender,
                value
            ),
        );
        const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
        return txHash;
        },
        awaitTransactionSuccessAsync(
            token: string,
            spender: string,
            value: BigNumber,
            txData?: Partial<TxData>,
            pollingIntervalMs?: number,
            timeoutMs?: number,
        ): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs> {
        assert.isString('token', token);
        assert.isString('spender', spender);
        assert.isBigNumber('value', value);
        const self = this as any as TestStaticCallReceiverContract;
        const txHashPromise = self.approveERC20.sendTransactionAsync(token,
    spender,
    value
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
            token: string,
            spender: string,
            value: BigNumber,
            txData?: Partial<TxData> | undefined,
        ): Promise<number> {
        assert.isString('token', token);
        assert.isString('spender', spender);
        assert.isBigNumber('value', value);
        const self = this as any as TestStaticCallReceiverContract;
        const encodedData = self._strictEncodeArguments('approveERC20(address,address,uint256)', [token,
    spender,
    value
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
            token: string,
            spender: string,
            value: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            assert.isString('token', token);
            assert.isString('spender', spender);
            assert.isBigNumber('value', value);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as TestStaticCallReceiverContract;
            const encodedData = self._strictEncodeArguments('approveERC20(address,address,uint256)', [token,
        spender,
        value
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
            const abiEncoder = self._lookupAbiEncoder('approveERC20(address,address,uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                token: string,
                spender: string,
                value: BigNumber,
            ): string {
            assert.isString('token', token);
            assert.isString('spender', spender);
            assert.isBigNumber('value', value);
            const self = this as any as TestStaticCallReceiverContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('approveERC20(address,address,uint256)', [token,
        spender,
        value
        ]);
            return abiEncodedTransactionData;
        },
    };
    public static async deployFrom0xArtifactAsync(
        artifact: ContractArtifact | SimpleContractArtifact,
        supportedProvider: SupportedProvider,
        txDefaults: Partial<TxData>,
    ): Promise<TestStaticCallReceiverContract> {
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
        return TestStaticCallReceiverContract.deployAsync(bytecode, abi, provider, txDefaults, );
    }
    public static async deployAsync(
        bytecode: string,
        abi: ContractAbi,
        supportedProvider: SupportedProvider,
        txDefaults: Partial<TxData>,
    ): Promise<TestStaticCallReceiverContract> {
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
        logUtils.log(`TestStaticCallReceiver successfully deployed at ${txReceipt.contractAddress}`);
        const contractInstance = new TestStaticCallReceiverContract(txReceipt.contractAddress as string, provider, txDefaults);
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
                        name: 'hash',
                        type: 'bytes32',
                        
                    },
                    {
                        name: 'signature',
                        type: 'bytes',
                        
                    },
                ],
                name: 'isValidSignature',
                outputs: [
                    {
                        name: 'isValid',
                        type: 'bool',
                        
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
                        name: 'hash',
                        type: 'bytes32',
                        
                    },
                    {
                        name: 'signerAddress',
                        type: 'address',
                        
                    },
                    {
                        name: 'signature',
                        type: 'bytes',
                        
                    },
                ],
                name: 'isValidSignature',
                outputs: [
                    {
                        name: 'isValid',
                        type: 'bool',
                        
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
                        name: 'token',
                        type: 'address',
                        
                    },
                    {
                        name: 'spender',
                        type: 'address',
                        
                    },
                    {
                        name: 'value',
                        type: 'uint256',
                        
                    },
                ],
                name: 'approveERC20',
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
        super('TestStaticCallReceiver', TestStaticCallReceiverContract.ABI(), address, supportedProvider, txDefaults);
        classUtils.bindAll(this, ['_abiEncoderByFunctionSignature', 'address', '_web3Wrapper']);
    }
} 

// tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method no-parameter-reassignment no-consecutive-blank-lines ordered-imports align
// tslint:enable:trailing-comma whitespace no-trailing-whitespace
