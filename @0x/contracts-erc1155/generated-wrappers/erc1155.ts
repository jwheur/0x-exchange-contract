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

export type ERC1155EventArgs =
    | ERC1155TransferSingleEventArgs
    | ERC1155TransferBatchEventArgs
    | ERC1155ApprovalForAllEventArgs
    | ERC1155URIEventArgs;

export enum ERC1155Events {
    TransferSingle = 'TransferSingle',
    TransferBatch = 'TransferBatch',
    ApprovalForAll = 'ApprovalForAll',
    URI = 'URI',
}

export interface ERC1155TransferSingleEventArgs extends DecodedLogArgs {
    operator: string;
    from: string;
    to: string;
    id: BigNumber;
    value: BigNumber;
}

export interface ERC1155TransferBatchEventArgs extends DecodedLogArgs {
    operator: string;
    from: string;
    to: string;
    ids: BigNumber[];
    values: BigNumber[];
}

export interface ERC1155ApprovalForAllEventArgs extends DecodedLogArgs {
    owner: string;
    operator: string;
    approved: boolean;
}

export interface ERC1155URIEventArgs extends DecodedLogArgs {
    value: string;
    id: BigNumber;
}


/* istanbul ignore next */
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
export class ERC1155Contract extends BaseContract {
    public balanceOf = {
        async callAsync(
            owner: string,
            id: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            assert.isString('owner', owner);
            assert.isBigNumber('id', id);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as ERC1155Contract;
            const encodedData = self._strictEncodeArguments('balanceOf(address,uint256)', [owner,
        id
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
            const abiEncoder = self._lookupAbiEncoder('balanceOf(address,uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                owner: string,
                id: BigNumber,
            ): string {
            assert.isString('owner', owner);
            assert.isBigNumber('id', id);
            const self = this as any as ERC1155Contract;
            const abiEncodedTransactionData = self._strictEncodeArguments('balanceOf(address,uint256)', [owner,
        id
        ]);
            return abiEncodedTransactionData;
        },
    };
    public safeBatchTransferFrom = {
        async sendTransactionAsync(
            from: string,
            to: string,
            ids: BigNumber[],
            values: BigNumber[],
            data: string,
        txData?: Partial<TxData> | undefined,
        ): Promise<string> {
        assert.isString('from', from);
        assert.isString('to', to);
        assert.isArray('ids', ids);
        assert.isArray('values', values);
        assert.isString('data', data);
        const self = this as any as ERC1155Contract;
        const encodedData = self._strictEncodeArguments('safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)', [from,
    to,
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
            self.safeBatchTransferFrom.estimateGasAsync.bind(
                self,
                from,
                to,
                ids,
                values,
                data
            ),
        );
        const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
        return txHash;
        },
        awaitTransactionSuccessAsync(
            from: string,
            to: string,
            ids: BigNumber[],
            values: BigNumber[],
            data: string,
            txData?: Partial<TxData>,
            pollingIntervalMs?: number,
            timeoutMs?: number,
        ): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs> {
        assert.isString('from', from);
        assert.isString('to', to);
        assert.isArray('ids', ids);
        assert.isArray('values', values);
        assert.isString('data', data);
        const self = this as any as ERC1155Contract;
        const txHashPromise = self.safeBatchTransferFrom.sendTransactionAsync(from,
    to,
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
            from: string,
            to: string,
            ids: BigNumber[],
            values: BigNumber[],
            data: string,
            txData?: Partial<TxData> | undefined,
        ): Promise<number> {
        assert.isString('from', from);
        assert.isString('to', to);
        assert.isArray('ids', ids);
        assert.isArray('values', values);
        assert.isString('data', data);
        const self = this as any as ERC1155Contract;
        const encodedData = self._strictEncodeArguments('safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)', [from,
    to,
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
            from: string,
            to: string,
            ids: BigNumber[],
            values: BigNumber[],
            data: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            assert.isString('from', from);
            assert.isString('to', to);
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
            const self = this as any as ERC1155Contract;
            const encodedData = self._strictEncodeArguments('safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)', [from,
        to,
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
            const abiEncoder = self._lookupAbiEncoder('safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                from: string,
                to: string,
                ids: BigNumber[],
                values: BigNumber[],
                data: string,
            ): string {
            assert.isString('from', from);
            assert.isString('to', to);
            assert.isArray('ids', ids);
            assert.isArray('values', values);
            assert.isString('data', data);
            const self = this as any as ERC1155Contract;
            const abiEncodedTransactionData = self._strictEncodeArguments('safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)', [from,
        to,
        ids,
        values,
        data
        ]);
            return abiEncodedTransactionData;
        },
    };
    public balanceOfBatch = {
        async callAsync(
            owners: string[],
            ids: BigNumber[],
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber[]
        > {
            assert.isArray('owners', owners);
            assert.isArray('ids', ids);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as ERC1155Contract;
            const encodedData = self._strictEncodeArguments('balanceOfBatch(address[],uint256[])', [owners,
        ids
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
            const abiEncoder = self._lookupAbiEncoder('balanceOfBatch(address[],uint256[])');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber[]
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                owners: string[],
                ids: BigNumber[],
            ): string {
            assert.isArray('owners', owners);
            assert.isArray('ids', ids);
            const self = this as any as ERC1155Contract;
            const abiEncodedTransactionData = self._strictEncodeArguments('balanceOfBatch(address[],uint256[])', [owners,
        ids
        ]);
            return abiEncodedTransactionData;
        },
    };
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
            const self = this as any as ERC1155Contract;
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
            const self = this as any as ERC1155Contract;
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
            const self = this as any as ERC1155Contract;
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
            const self = this as any as ERC1155Contract;
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
            const self = this as any as ERC1155Contract;
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
            const self = this as any as ERC1155Contract;
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
            const self = this as any as ERC1155Contract;
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
            const self = this as any as ERC1155Contract;
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
            const self = this as any as ERC1155Contract;
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
            const self = this as any as ERC1155Contract;
            const abiEncodedTransactionData = self._strictEncodeArguments('getNonFungibleIndex(uint256)', [id
        ]);
            return abiEncodedTransactionData;
        },
    };
    public setApprovalForAll = {
        async sendTransactionAsync(
            operator: string,
            approved: boolean,
        txData?: Partial<TxData> | undefined,
        ): Promise<string> {
        assert.isString('operator', operator);
        assert.isBoolean('approved', approved);
        const self = this as any as ERC1155Contract;
        const encodedData = self._strictEncodeArguments('setApprovalForAll(address,bool)', [operator,
    approved
    ]);
        const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
                to: self.address,
                ...txData,
                data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            self.setApprovalForAll.estimateGasAsync.bind(
                self,
                operator,
                approved
            ),
        );
        const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
        return txHash;
        },
        awaitTransactionSuccessAsync(
            operator: string,
            approved: boolean,
            txData?: Partial<TxData>,
            pollingIntervalMs?: number,
            timeoutMs?: number,
        ): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs> {
        assert.isString('operator', operator);
        assert.isBoolean('approved', approved);
        const self = this as any as ERC1155Contract;
        const txHashPromise = self.setApprovalForAll.sendTransactionAsync(operator,
    approved
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
            approved: boolean,
            txData?: Partial<TxData> | undefined,
        ): Promise<number> {
        assert.isString('operator', operator);
        assert.isBoolean('approved', approved);
        const self = this as any as ERC1155Contract;
        const encodedData = self._strictEncodeArguments('setApprovalForAll(address,bool)', [operator,
    approved
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
            approved: boolean,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            assert.isString('operator', operator);
            assert.isBoolean('approved', approved);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as ERC1155Contract;
            const encodedData = self._strictEncodeArguments('setApprovalForAll(address,bool)', [operator,
        approved
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
            const abiEncoder = self._lookupAbiEncoder('setApprovalForAll(address,bool)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                operator: string,
                approved: boolean,
            ): string {
            assert.isString('operator', operator);
            assert.isBoolean('approved', approved);
            const self = this as any as ERC1155Contract;
            const abiEncodedTransactionData = self._strictEncodeArguments('setApprovalForAll(address,bool)', [operator,
        approved
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
            const self = this as any as ERC1155Contract;
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
            const self = this as any as ERC1155Contract;
            const abiEncodedTransactionData = self._strictEncodeArguments('isFungible(uint256)', [id
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
            const self = this as any as ERC1155Contract;
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
            const self = this as any as ERC1155Contract;
            const abiEncodedTransactionData = self._strictEncodeArguments('ERC1155_RECEIVED()', []);
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
            const self = this as any as ERC1155Contract;
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
            const self = this as any as ERC1155Contract;
            const abiEncodedTransactionData = self._strictEncodeArguments('isNonFungible(uint256)', [id
        ]);
            return abiEncodedTransactionData;
        },
    };
    public isApprovedForAll = {
        async callAsync(
            owner: string,
            operator: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            assert.isString('owner', owner);
            assert.isString('operator', operator);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as ERC1155Contract;
            const encodedData = self._strictEncodeArguments('isApprovedForAll(address,address)', [owner,
        operator
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
            const abiEncoder = self._lookupAbiEncoder('isApprovedForAll(address,address)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<boolean
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                owner: string,
                operator: string,
            ): string {
            assert.isString('owner', owner);
            assert.isString('operator', operator);
            const self = this as any as ERC1155Contract;
            const abiEncodedTransactionData = self._strictEncodeArguments('isApprovedForAll(address,address)', [owner,
        operator
        ]);
            return abiEncodedTransactionData;
        },
    };
    public safeTransferFrom = {
        async sendTransactionAsync(
            from: string,
            to: string,
            id: BigNumber,
            value: BigNumber,
            data: string,
        txData?: Partial<TxData> | undefined,
        ): Promise<string> {
        assert.isString('from', from);
        assert.isString('to', to);
        assert.isBigNumber('id', id);
        assert.isBigNumber('value', value);
        assert.isString('data', data);
        const self = this as any as ERC1155Contract;
        const encodedData = self._strictEncodeArguments('safeTransferFrom(address,address,uint256,uint256,bytes)', [from,
    to,
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
            self.safeTransferFrom.estimateGasAsync.bind(
                self,
                from,
                to,
                id,
                value,
                data
            ),
        );
        const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
        return txHash;
        },
        awaitTransactionSuccessAsync(
            from: string,
            to: string,
            id: BigNumber,
            value: BigNumber,
            data: string,
            txData?: Partial<TxData>,
            pollingIntervalMs?: number,
            timeoutMs?: number,
        ): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs> {
        assert.isString('from', from);
        assert.isString('to', to);
        assert.isBigNumber('id', id);
        assert.isBigNumber('value', value);
        assert.isString('data', data);
        const self = this as any as ERC1155Contract;
        const txHashPromise = self.safeTransferFrom.sendTransactionAsync(from,
    to,
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
            from: string,
            to: string,
            id: BigNumber,
            value: BigNumber,
            data: string,
            txData?: Partial<TxData> | undefined,
        ): Promise<number> {
        assert.isString('from', from);
        assert.isString('to', to);
        assert.isBigNumber('id', id);
        assert.isBigNumber('value', value);
        assert.isString('data', data);
        const self = this as any as ERC1155Contract;
        const encodedData = self._strictEncodeArguments('safeTransferFrom(address,address,uint256,uint256,bytes)', [from,
    to,
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
            from: string,
            to: string,
            id: BigNumber,
            value: BigNumber,
            data: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            assert.isString('from', from);
            assert.isString('to', to);
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
            const self = this as any as ERC1155Contract;
            const encodedData = self._strictEncodeArguments('safeTransferFrom(address,address,uint256,uint256,bytes)', [from,
        to,
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
            const abiEncoder = self._lookupAbiEncoder('safeTransferFrom(address,address,uint256,uint256,bytes)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                from: string,
                to: string,
                id: BigNumber,
                value: BigNumber,
                data: string,
            ): string {
            assert.isString('from', from);
            assert.isString('to', to);
            assert.isBigNumber('id', id);
            assert.isBigNumber('value', value);
            assert.isString('data', data);
            const self = this as any as ERC1155Contract;
            const abiEncodedTransactionData = self._strictEncodeArguments('safeTransferFrom(address,address,uint256,uint256,bytes)', [from,
        to,
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
            const self = this as any as ERC1155Contract;
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
            const self = this as any as ERC1155Contract;
            const abiEncodedTransactionData = self._strictEncodeArguments('ERC1155_BATCH_RECEIVED()', []);
            return abiEncodedTransactionData;
        },
    };
    public static async deployFrom0xArtifactAsync(
        artifact: ContractArtifact | SimpleContractArtifact,
        supportedProvider: SupportedProvider,
        txDefaults: Partial<TxData>,
    ): Promise<ERC1155Contract> {
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
        return ERC1155Contract.deployAsync(bytecode, abi, provider, txDefaults, );
    }
    public static async deployAsync(
        bytecode: string,
        abi: ContractAbi,
        supportedProvider: SupportedProvider,
        txDefaults: Partial<TxData>,
    ): Promise<ERC1155Contract> {
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
        logUtils.log(`ERC1155 successfully deployed at ${txReceipt.contractAddress}`);
        const contractInstance = new ERC1155Contract(txReceipt.contractAddress as string, provider, txDefaults);
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
                        name: 'owner',
                        type: 'address',
                        
                    },
                    {
                        name: 'id',
                        type: 'uint256',
                        
                    },
                ],
                name: 'balanceOf',
                outputs: [
                    {
                        name: '',
                        type: 'uint256',
                        
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
                        name: 'from',
                        type: 'address',
                        
                    },
                    {
                        name: 'to',
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
                name: 'safeBatchTransferFrom',
                outputs: [
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                constant: true,
                inputs: [
                    {
                        name: 'owners',
                        type: 'address[]',
                        
                    },
                    {
                        name: 'ids',
                        type: 'uint256[]',
                        
                    },
                ],
                name: 'balanceOfBatch',
                outputs: [
                    {
                        name: 'balances_',
                        type: 'uint256[]',
                        
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
                constant: false,
                inputs: [
                    {
                        name: 'operator',
                        type: 'address',
                        
                    },
                    {
                        name: 'approved',
                        type: 'bool',
                        
                    },
                ],
                name: 'setApprovalForAll',
                outputs: [
                ],
                payable: false,
                stateMutability: 'nonpayable',
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
            { 
                constant: true,
                inputs: [
                    {
                        name: 'owner',
                        type: 'address',
                        
                    },
                    {
                        name: 'operator',
                        type: 'address',
                        
                    },
                ],
                name: 'isApprovedForAll',
                outputs: [
                    {
                        name: '',
                        type: 'bool',
                        
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
                        name: 'from',
                        type: 'address',
                        
                    },
                    {
                        name: 'to',
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
                name: 'safeTransferFrom',
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
                anonymous: false,
                inputs: [
                    {
                        name: 'operator',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'from',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'to',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'id',
                        type: 'uint256',
                        indexed: false,
                    },
                    {
                        name: 'value',
                        type: 'uint256',
                        indexed: false,
                    },
                ],
                name: 'TransferSingle',
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
                        indexed: true,
                    },
                    {
                        name: 'from',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'to',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'ids',
                        type: 'uint256[]',
                        indexed: false,
                    },
                    {
                        name: 'values',
                        type: 'uint256[]',
                        indexed: false,
                    },
                ],
                name: 'TransferBatch',
                outputs: [
                ],
                type: 'event',
            },
            { 
                anonymous: false,
                inputs: [
                    {
                        name: 'owner',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'operator',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'approved',
                        type: 'bool',
                        indexed: false,
                    },
                ],
                name: 'ApprovalForAll',
                outputs: [
                ],
                type: 'event',
            },
            { 
                anonymous: false,
                inputs: [
                    {
                        name: 'value',
                        type: 'string',
                        indexed: false,
                    },
                    {
                        name: 'id',
                        type: 'uint256',
                        indexed: true,
                    },
                ],
                name: 'URI',
                outputs: [
                ],
                type: 'event',
            },
        ] as ContractAbi;
        return abi;
    }
    constructor(address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>) {
        super('ERC1155', ERC1155Contract.ABI(), address, supportedProvider, txDefaults);
        classUtils.bindAll(this, ['_abiEncoderByFunctionSignature', 'address', '_web3Wrapper']);
    }
} 

// tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method no-parameter-reassignment no-consecutive-blank-lines ordered-imports align
// tslint:enable:trailing-comma whitespace no-trailing-whitespace
