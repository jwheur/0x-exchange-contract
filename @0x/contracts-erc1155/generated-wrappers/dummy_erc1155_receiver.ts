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

export type DummyERC1155ReceiverEventArgs =
    | DummyERC1155ReceiverTokenReceivedEventArgs
    | DummyERC1155ReceiverBatchTokenReceivedEventArgs;

export enum DummyERC1155ReceiverEvents {
    TokenReceived = 'TokenReceived',
    BatchTokenReceived = 'BatchTokenReceived',
}

export interface DummyERC1155ReceiverTokenReceivedEventArgs extends DecodedLogArgs {
    operator: string;
    from: string;
    tokenId: BigNumber;
    tokenValue: BigNumber;
    data: string;
}

export interface DummyERC1155ReceiverBatchTokenReceivedEventArgs extends DecodedLogArgs {
    operator: string;
    from: string;
    tokenIds: BigNumber[];
    tokenValues: BigNumber[];
    data: string;
}


/* istanbul ignore next */
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
export class DummyERC1155ReceiverContract extends BaseContract {
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
        const self = this as any as DummyERC1155ReceiverContract;
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
        const self = this as any as DummyERC1155ReceiverContract;
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
        const self = this as any as DummyERC1155ReceiverContract;
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
            const self = this as any as DummyERC1155ReceiverContract;
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
            const self = this as any as DummyERC1155ReceiverContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)', [operator,
        from,
        ids,
        values,
        data
        ]);
            return abiEncodedTransactionData;
        },
    };
    public setRejectTransferFlag = {
        async sendTransactionAsync(
            _shouldRejectTransfer: boolean,
        txData?: Partial<TxData> | undefined,
        ): Promise<string> {
        assert.isBoolean('_shouldRejectTransfer', _shouldRejectTransfer);
        const self = this as any as DummyERC1155ReceiverContract;
        const encodedData = self._strictEncodeArguments('setRejectTransferFlag(bool)', [_shouldRejectTransfer
    ]);
        const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
                to: self.address,
                ...txData,
                data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            self.setRejectTransferFlag.estimateGasAsync.bind(
                self,
                _shouldRejectTransfer
            ),
        );
        const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
        return txHash;
        },
        awaitTransactionSuccessAsync(
            _shouldRejectTransfer: boolean,
            txData?: Partial<TxData>,
            pollingIntervalMs?: number,
            timeoutMs?: number,
        ): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs> {
        assert.isBoolean('_shouldRejectTransfer', _shouldRejectTransfer);
        const self = this as any as DummyERC1155ReceiverContract;
        const txHashPromise = self.setRejectTransferFlag.sendTransactionAsync(_shouldRejectTransfer
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
            _shouldRejectTransfer: boolean,
            txData?: Partial<TxData> | undefined,
        ): Promise<number> {
        assert.isBoolean('_shouldRejectTransfer', _shouldRejectTransfer);
        const self = this as any as DummyERC1155ReceiverContract;
        const encodedData = self._strictEncodeArguments('setRejectTransferFlag(bool)', [_shouldRejectTransfer
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
            _shouldRejectTransfer: boolean,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            assert.isBoolean('_shouldRejectTransfer', _shouldRejectTransfer);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as DummyERC1155ReceiverContract;
            const encodedData = self._strictEncodeArguments('setRejectTransferFlag(bool)', [_shouldRejectTransfer
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
            const abiEncoder = self._lookupAbiEncoder('setRejectTransferFlag(bool)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                _shouldRejectTransfer: boolean,
            ): string {
            assert.isBoolean('_shouldRejectTransfer', _shouldRejectTransfer);
            const self = this as any as DummyERC1155ReceiverContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('setRejectTransferFlag(bool)', [_shouldRejectTransfer
        ]);
            return abiEncodedTransactionData;
        },
    };
    public ERC1155_RECEIVED = {
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
            const self = this as any as DummyERC1155ReceiverContract;
            const encodedData = self._strictEncodeArguments('ERC1155_RECEIVED()', []);
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
            const abiEncoder = self._lookupAbiEncoder('ERC1155_RECEIVED()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
            ): string {
            const self = this as any as DummyERC1155ReceiverContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('ERC1155_RECEIVED()', []);
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
        const self = this as any as DummyERC1155ReceiverContract;
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
        const self = this as any as DummyERC1155ReceiverContract;
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
        const self = this as any as DummyERC1155ReceiverContract;
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
            const self = this as any as DummyERC1155ReceiverContract;
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
            const self = this as any as DummyERC1155ReceiverContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('onERC1155Received(address,address,uint256,uint256,bytes)', [operator,
        from,
        id,
        value,
        data
        ]);
            return abiEncodedTransactionData;
        },
    };
    public ERC1155_BATCH_RECEIVED = {
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
            const self = this as any as DummyERC1155ReceiverContract;
            const encodedData = self._strictEncodeArguments('ERC1155_BATCH_RECEIVED()', []);
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
            const abiEncoder = self._lookupAbiEncoder('ERC1155_BATCH_RECEIVED()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
            ): string {
            const self = this as any as DummyERC1155ReceiverContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('ERC1155_BATCH_RECEIVED()', []);
            return abiEncodedTransactionData;
        },
    };
    public static async deployFrom0xArtifactAsync(
        artifact: ContractArtifact | SimpleContractArtifact,
        supportedProvider: SupportedProvider,
        txDefaults: Partial<TxData>,
    ): Promise<DummyERC1155ReceiverContract> {
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
        return DummyERC1155ReceiverContract.deployAsync(bytecode, abi, provider, txDefaults, );
    }
    public static async deployAsync(
        bytecode: string,
        abi: ContractAbi,
        supportedProvider: SupportedProvider,
        txDefaults: Partial<TxData>,
    ): Promise<DummyERC1155ReceiverContract> {
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
        logUtils.log(`DummyERC1155Receiver successfully deployed at ${txReceipt.contractAddress}`);
        const contractInstance = new DummyERC1155ReceiverContract(txReceipt.contractAddress as string, provider, txDefaults);
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
                        name: '_shouldRejectTransfer',
                        type: 'bool',
                        
                    },
                ],
                name: 'setRejectTransferFlag',
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
                name: 'ERC1155_RECEIVED',
                outputs: [
                    {
                        name: '',
                        type: 'bytes4',
                        
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
            { 
                constant: true,
                inputs: [
                ],
                name: 'ERC1155_BATCH_RECEIVED',
                outputs: [
                    {
                        name: '',
                        type: 'bytes4',
                        
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            { 
                inputs: [
                ],
                outputs: [
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'constructor',
            },
            { 
                anonymous: false,
                inputs: [
                    {
                        name: 'operator',
                        type: 'address',
                        indexed: false,
                    },
                    {
                        name: 'from',
                        type: 'address',
                        indexed: false,
                    },
                    {
                        name: 'tokenId',
                        type: 'uint256',
                        indexed: false,
                    },
                    {
                        name: 'tokenValue',
                        type: 'uint256',
                        indexed: false,
                    },
                    {
                        name: 'data',
                        type: 'bytes',
                        indexed: false,
                    },
                ],
                name: 'TokenReceived',
                outputs: [
                ],
                type: 'event',
            },
            { 
                anonymous: false,
                inputs: [
                    {
                        name: 'operator',
                        type: 'address',
                        indexed: false,
                    },
                    {
                        name: 'from',
                        type: 'address',
                        indexed: false,
                    },
                    {
                        name: 'tokenIds',
                        type: 'uint256[]',
                        indexed: false,
                    },
                    {
                        name: 'tokenValues',
                        type: 'uint256[]',
                        indexed: false,
                    },
                    {
                        name: 'data',
                        type: 'bytes',
                        indexed: false,
                    },
                ],
                name: 'BatchTokenReceived',
                outputs: [
                ],
                type: 'event',
            },
        ] as ContractAbi;
        return abi;
    }
    constructor(address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>) {
        super('DummyERC1155Receiver', DummyERC1155ReceiverContract.ABI(), address, supportedProvider, txDefaults);
        classUtils.bindAll(this, ['_abiEncoderByFunctionSignature', 'address', '_web3Wrapper']);
    }
} 

// tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method no-parameter-reassignment no-consecutive-blank-lines ordered-imports align
// tslint:enable:trailing-comma whitespace no-trailing-whitespace
