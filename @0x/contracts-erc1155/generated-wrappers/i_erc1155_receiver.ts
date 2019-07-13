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
export class IERC1155ReceiverContract extends BaseContract {
    public onERC1155BatchReceived = {
        async sendTransactionAsync(
            operator: string,
            from: string,
            ids: BigNumber[],
            values: BigNumber[],
            data: string,
        txData?: Partial<TxData> | undefined,
        ): Promise<string> {
        assert.isString('operator', operator);
        assert.isString('from', from);
        assert.isArray('ids', ids);
        assert.isArray('values', values);
        assert.isString('data', data);
        const self = this as any as IERC1155ReceiverContract;
        const encodedData = self._strictEncodeArguments('onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)', [operator,
    from,
    ids,
    values,
    data
    ]);
        const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
                to: self.address,
                ...txData,
                data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            self.onERC1155BatchReceived.estimateGasAsync.bind(
                self,
                operator,
                from,
                ids,
                values,
                data
            ),
        );
        const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
        return txHash;
        },
        awaitTransactionSuccessAsync(
            operator: string,
            from: string,
            ids: BigNumber[],
            values: BigNumber[],
            data: string,
            txData?: Partial<TxData>,
            pollingIntervalMs?: number,
            timeoutMs?: number,
        ): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs> {
        assert.isString('operator', operator);
        assert.isString('from', from);
        assert.isArray('ids', ids);
        assert.isArray('values', values);
        assert.isString('data', data);
        const self = this as any as IERC1155ReceiverContract;
        const txHashPromise = self.onERC1155BatchReceived.sendTransactionAsync(operator,
    from,
    ids,
    values,
    data
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
            operator: string,
            from: string,
            ids: BigNumber[],
            values: BigNumber[],
            data: string,
            txData?: Partial<TxData> | undefined,
        ): Promise<number> {
        assert.isString('operator', operator);
        assert.isString('from', from);
        assert.isArray('ids', ids);
        assert.isArray('values', values);
        assert.isString('data', data);
        const self = this as any as IERC1155ReceiverContract;
        const encodedData = self._strictEncodeArguments('onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)', [operator,
    from,
    ids,
    values,
    data
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
            operator: string,
            from: string,
            ids: BigNumber[],
            values: BigNumber[],
            data: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            assert.isString('operator', operator);
            assert.isString('from', from);
            assert.isArray('ids', ids);
            assert.isArray('values', values);
            assert.isString('data', data);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as IERC1155ReceiverContract;
            const encodedData = self._strictEncodeArguments('onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)', [operator,
        from,
        ids,
        values,
        data
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
            const abiEncoder = self._lookupAbiEncoder('onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                operator: string,
                from: string,
                ids: BigNumber[],
                values: BigNumber[],
                data: string,
            ): string {
            assert.isString('operator', operator);
            assert.isString('from', from);
            assert.isArray('ids', ids);
            assert.isArray('values', values);
            assert.isString('data', data);
            const self = this as any as IERC1155ReceiverContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)', [operator,
        from,
        ids,
        values,
        data
        ]);
            return abiEncodedTransactionData;
        },
    };
    public onERC1155Received = {
        async sendTransactionAsync(
            operator: string,
            from: string,
            id: BigNumber,
            value: BigNumber,
            data: string,
        txData?: Partial<TxData> | undefined,
        ): Promise<string> {
        assert.isString('operator', operator);
        assert.isString('from', from);
        assert.isBigNumber('id', id);
        assert.isBigNumber('value', value);
        assert.isString('data', data);
        const self = this as any as IERC1155ReceiverContract;
        const encodedData = self._strictEncodeArguments('onERC1155Received(address,address,uint256,uint256,bytes)', [operator,
    from,
    id,
    value,
    data
    ]);
        const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
                to: self.address,
                ...txData,
                data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            self.onERC1155Received.estimateGasAsync.bind(
                self,
                operator,
                from,
                id,
                value,
                data
            ),
        );
        const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
        return txHash;
        },
        awaitTransactionSuccessAsync(
            operator: string,
            from: string,
            id: BigNumber,
            value: BigNumber,
            data: string,
            txData?: Partial<TxData>,
            pollingIntervalMs?: number,
            timeoutMs?: number,
        ): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs> {
        assert.isString('operator', operator);
        assert.isString('from', from);
        assert.isBigNumber('id', id);
        assert.isBigNumber('value', value);
        assert.isString('data', data);
        const self = this as any as IERC1155ReceiverContract;
        const txHashPromise = self.onERC1155Received.sendTransactionAsync(operator,
    from,
    id,
    value,
    data
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
            operator: string,
            from: string,
            id: BigNumber,
            value: BigNumber,
            data: string,
            txData?: Partial<TxData> | undefined,
        ): Promise<number> {
        assert.isString('operator', operator);
        assert.isString('from', from);
        assert.isBigNumber('id', id);
        assert.isBigNumber('value', value);
        assert.isString('data', data);
        const self = this as any as IERC1155ReceiverContract;
        const encodedData = self._strictEncodeArguments('onERC1155Received(address,address,uint256,uint256,bytes)', [operator,
    from,
    id,
    value,
    data
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
            operator: string,
            from: string,
            id: BigNumber,
            value: BigNumber,
            data: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            assert.isString('operator', operator);
            assert.isString('from', from);
            assert.isBigNumber('id', id);
            assert.isBigNumber('value', value);
            assert.isString('data', data);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as IERC1155ReceiverContract;
            const encodedData = self._strictEncodeArguments('onERC1155Received(address,address,uint256,uint256,bytes)', [operator,
        from,
        id,
        value,
        data
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
            const abiEncoder = self._lookupAbiEncoder('onERC1155Received(address,address,uint256,uint256,bytes)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                operator: string,
                from: string,
                id: BigNumber,
                value: BigNumber,
                data: string,
            ): string {
            assert.isString('operator', operator);
            assert.isString('from', from);
            assert.isBigNumber('id', id);
            assert.isBigNumber('value', value);
            assert.isString('data', data);
            const self = this as any as IERC1155ReceiverContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('onERC1155Received(address,address,uint256,uint256,bytes)', [operator,
        from,
        id,
        value,
        data
        ]);
            return abiEncodedTransactionData;
        },
    };
    public static async deployFrom0xArtifactAsync(
        artifact: ContractArtifact | SimpleContractArtifact,
        supportedProvider: SupportedProvider,
        txDefaults: Partial<TxData>,
    ): Promise<IERC1155ReceiverContract> {
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
        return IERC1155ReceiverContract.deployAsync(bytecode, abi, provider, txDefaults, );
    }
    public static async deployAsync(
        bytecode: string,
        abi: ContractAbi,
        supportedProvider: SupportedProvider,
        txDefaults: Partial<TxData>,
    ): Promise<IERC1155ReceiverContract> {
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
        logUtils.log(`IERC1155Receiver successfully deployed at ${txReceipt.contractAddress}`);
        const contractInstance = new IERC1155ReceiverContract(txReceipt.contractAddress as string, provider, txDefaults);
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
                        name: 'operator',
                        type: 'address',
                        
                    },
                    {
                        name: 'from',
                        type: 'address',
                        
                    },
                    {
                        name: 'ids',
                        type: 'uint256[]',
                        
                    },
                    {
                        name: 'values',
                        type: 'uint256[]',
                        
                    },
                    {
                        name: 'data',
                        type: 'bytes',
                        
                    },
                ],
                name: 'onERC1155BatchReceived',
                outputs: [
                    {
                        name: '',
                        type: 'bytes4',
                        
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
                        name: 'operator',
                        type: 'address',
                        
                    },
                    {
                        name: 'from',
                        type: 'address',
                        
                    },
                    {
                        name: 'id',
                        type: 'uint256',
                        
                    },
                    {
                        name: 'value',
                        type: 'uint256',
                        
                    },
                    {
                        name: 'data',
                        type: 'bytes',
                        
                    },
                ],
                name: 'onERC1155Received',
                outputs: [
                    {
                        name: '',
                        type: 'bytes4',
                        
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
        super('IERC1155Receiver', IERC1155ReceiverContract.ABI(), address, supportedProvider, txDefaults);
        classUtils.bindAll(this, ['_abiEncoderByFunctionSignature', 'address', '_web3Wrapper']);
    }
} 

// tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method no-parameter-reassignment no-consecutive-blank-lines ordered-imports align
// tslint:enable:trailing-comma whitespace no-trailing-whitespace
