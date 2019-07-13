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
export class TestLibBytesContract extends BaseContract {
    public publicPopLastByte = {
        async callAsync(
            b: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<[string, string]
        > {
            assert.isString('b', b);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as TestLibBytesContract;
            const encodedData = self._strictEncodeArguments('publicPopLastByte(bytes)', [b
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
            const abiEncoder = self._lookupAbiEncoder('publicPopLastByte(bytes)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<[string, string]
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                b: string,
            ): string {
            assert.isString('b', b);
            const self = this as any as TestLibBytesContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('publicPopLastByte(bytes)', [b
        ]);
            return abiEncodedTransactionData;
        },
    };
    public publicReadBytesWithLength = {
        async callAsync(
            b: string,
            index: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            assert.isString('b', b);
            assert.isBigNumber('index', index);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as TestLibBytesContract;
            const encodedData = self._strictEncodeArguments('publicReadBytesWithLength(bytes,uint256)', [b,
        index
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
            const abiEncoder = self._lookupAbiEncoder('publicReadBytesWithLength(bytes,uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                b: string,
                index: BigNumber,
            ): string {
            assert.isString('b', b);
            assert.isBigNumber('index', index);
            const self = this as any as TestLibBytesContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('publicReadBytesWithLength(bytes,uint256)', [b,
        index
        ]);
            return abiEncodedTransactionData;
        },
    };
    public publicDeepCopyBytes = {
        async callAsync(
            dest: string,
            source: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            assert.isString('dest', dest);
            assert.isString('source', source);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as TestLibBytesContract;
            const encodedData = self._strictEncodeArguments('publicDeepCopyBytes(bytes,bytes)', [dest,
        source
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
            const abiEncoder = self._lookupAbiEncoder('publicDeepCopyBytes(bytes,bytes)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                dest: string,
                source: string,
            ): string {
            assert.isString('dest', dest);
            assert.isString('source', source);
            const self = this as any as TestLibBytesContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('publicDeepCopyBytes(bytes,bytes)', [dest,
        source
        ]);
            return abiEncodedTransactionData;
        },
    };
    public publicWriteAddress = {
        async callAsync(
            b: string,
            index: BigNumber,
            input: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            assert.isString('b', b);
            assert.isBigNumber('index', index);
            assert.isString('input', input);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as TestLibBytesContract;
            const encodedData = self._strictEncodeArguments('publicWriteAddress(bytes,uint256,address)', [b,
        index,
        input
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
            const abiEncoder = self._lookupAbiEncoder('publicWriteAddress(bytes,uint256,address)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                b: string,
                index: BigNumber,
                input: string,
            ): string {
            assert.isString('b', b);
            assert.isBigNumber('index', index);
            assert.isString('input', input);
            const self = this as any as TestLibBytesContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('publicWriteAddress(bytes,uint256,address)', [b,
        index,
        input
        ]);
            return abiEncodedTransactionData;
        },
    };
    public publicWriteBytesWithLength = {
        async callAsync(
            b: string,
            index: BigNumber,
            input: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            assert.isString('b', b);
            assert.isBigNumber('index', index);
            assert.isString('input', input);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as TestLibBytesContract;
            const encodedData = self._strictEncodeArguments('publicWriteBytesWithLength(bytes,uint256,bytes)', [b,
        index,
        input
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
            const abiEncoder = self._lookupAbiEncoder('publicWriteBytesWithLength(bytes,uint256,bytes)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                b: string,
                index: BigNumber,
                input: string,
            ): string {
            assert.isString('b', b);
            assert.isBigNumber('index', index);
            assert.isString('input', input);
            const self = this as any as TestLibBytesContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('publicWriteBytesWithLength(bytes,uint256,bytes)', [b,
        index,
        input
        ]);
            return abiEncodedTransactionData;
        },
    };
    public testMemcpy = {
        async callAsync(
            mem: string,
            dest: BigNumber,
            source: BigNumber,
            length: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            assert.isString('mem', mem);
            assert.isBigNumber('dest', dest);
            assert.isBigNumber('source', source);
            assert.isBigNumber('length', length);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as TestLibBytesContract;
            const encodedData = self._strictEncodeArguments('testMemcpy(bytes,uint256,uint256,uint256)', [mem,
        dest,
        source,
        length
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
            const abiEncoder = self._lookupAbiEncoder('testMemcpy(bytes,uint256,uint256,uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                mem: string,
                dest: BigNumber,
                source: BigNumber,
                length: BigNumber,
            ): string {
            assert.isString('mem', mem);
            assert.isBigNumber('dest', dest);
            assert.isBigNumber('source', source);
            assert.isBigNumber('length', length);
            const self = this as any as TestLibBytesContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('testMemcpy(bytes,uint256,uint256,uint256)', [mem,
        dest,
        source,
        length
        ]);
            return abiEncodedTransactionData;
        },
    };
    public publicReadAddress = {
        async callAsync(
            b: string,
            index: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            assert.isString('b', b);
            assert.isBigNumber('index', index);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as TestLibBytesContract;
            const encodedData = self._strictEncodeArguments('publicReadAddress(bytes,uint256)', [b,
        index
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
            const abiEncoder = self._lookupAbiEncoder('publicReadAddress(bytes,uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                b: string,
                index: BigNumber,
            ): string {
            assert.isString('b', b);
            assert.isBigNumber('index', index);
            const self = this as any as TestLibBytesContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('publicReadAddress(bytes,uint256)', [b,
        index
        ]);
            return abiEncodedTransactionData;
        },
    };
    public publicWriteBytes32 = {
        async callAsync(
            b: string,
            index: BigNumber,
            input: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            assert.isString('b', b);
            assert.isBigNumber('index', index);
            assert.isString('input', input);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as TestLibBytesContract;
            const encodedData = self._strictEncodeArguments('publicWriteBytes32(bytes,uint256,bytes32)', [b,
        index,
        input
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
            const abiEncoder = self._lookupAbiEncoder('publicWriteBytes32(bytes,uint256,bytes32)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                b: string,
                index: BigNumber,
                input: string,
            ): string {
            assert.isString('b', b);
            assert.isBigNumber('index', index);
            assert.isString('input', input);
            const self = this as any as TestLibBytesContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('publicWriteBytes32(bytes,uint256,bytes32)', [b,
        index,
        input
        ]);
            return abiEncodedTransactionData;
        },
    };
    public publicSlice = {
        async callAsync(
            b: string,
            from: BigNumber,
            to: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<[string, string]
        > {
            assert.isString('b', b);
            assert.isBigNumber('from', from);
            assert.isBigNumber('to', to);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as TestLibBytesContract;
            const encodedData = self._strictEncodeArguments('publicSlice(bytes,uint256,uint256)', [b,
        from,
        to
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
            const abiEncoder = self._lookupAbiEncoder('publicSlice(bytes,uint256,uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<[string, string]
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                b: string,
                from: BigNumber,
                to: BigNumber,
            ): string {
            assert.isString('b', b);
            assert.isBigNumber('from', from);
            assert.isBigNumber('to', to);
            const self = this as any as TestLibBytesContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('publicSlice(bytes,uint256,uint256)', [b,
        from,
        to
        ]);
            return abiEncodedTransactionData;
        },
    };
    public publicPopLast20Bytes = {
        async callAsync(
            b: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<[string, string]
        > {
            assert.isString('b', b);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as TestLibBytesContract;
            const encodedData = self._strictEncodeArguments('publicPopLast20Bytes(bytes)', [b
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
            const abiEncoder = self._lookupAbiEncoder('publicPopLast20Bytes(bytes)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<[string, string]
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                b: string,
            ): string {
            assert.isString('b', b);
            const self = this as any as TestLibBytesContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('publicPopLast20Bytes(bytes)', [b
        ]);
            return abiEncodedTransactionData;
        },
    };
    public publicEqualsPop1 = {
        async callAsync(
            lhs: string,
            rhs: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            assert.isString('lhs', lhs);
            assert.isString('rhs', rhs);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as TestLibBytesContract;
            const encodedData = self._strictEncodeArguments('publicEqualsPop1(bytes,bytes)', [lhs,
        rhs
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
            const abiEncoder = self._lookupAbiEncoder('publicEqualsPop1(bytes,bytes)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<boolean
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                lhs: string,
                rhs: string,
            ): string {
            assert.isString('lhs', lhs);
            assert.isString('rhs', rhs);
            const self = this as any as TestLibBytesContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('publicEqualsPop1(bytes,bytes)', [lhs,
        rhs
        ]);
            return abiEncodedTransactionData;
        },
    };
    public publicWriteUint256 = {
        async callAsync(
            b: string,
            index: BigNumber,
            input: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            assert.isString('b', b);
            assert.isBigNumber('index', index);
            assert.isBigNumber('input', input);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as TestLibBytesContract;
            const encodedData = self._strictEncodeArguments('publicWriteUint256(bytes,uint256,uint256)', [b,
        index,
        input
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
            const abiEncoder = self._lookupAbiEncoder('publicWriteUint256(bytes,uint256,uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                b: string,
                index: BigNumber,
                input: BigNumber,
            ): string {
            assert.isString('b', b);
            assert.isBigNumber('index', index);
            assert.isBigNumber('input', input);
            const self = this as any as TestLibBytesContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('publicWriteUint256(bytes,uint256,uint256)', [b,
        index,
        input
        ]);
            return abiEncodedTransactionData;
        },
    };
    public publicReadBytes32 = {
        async callAsync(
            b: string,
            index: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            assert.isString('b', b);
            assert.isBigNumber('index', index);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as TestLibBytesContract;
            const encodedData = self._strictEncodeArguments('publicReadBytes32(bytes,uint256)', [b,
        index
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
            const abiEncoder = self._lookupAbiEncoder('publicReadBytes32(bytes,uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                b: string,
                index: BigNumber,
            ): string {
            assert.isString('b', b);
            assert.isBigNumber('index', index);
            const self = this as any as TestLibBytesContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('publicReadBytes32(bytes,uint256)', [b,
        index
        ]);
            return abiEncodedTransactionData;
        },
    };
    public publicSliceDestructive = {
        async callAsync(
            b: string,
            from: BigNumber,
            to: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<[string, string]
        > {
            assert.isString('b', b);
            assert.isBigNumber('from', from);
            assert.isBigNumber('to', to);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as TestLibBytesContract;
            const encodedData = self._strictEncodeArguments('publicSliceDestructive(bytes,uint256,uint256)', [b,
        from,
        to
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
            const abiEncoder = self._lookupAbiEncoder('publicSliceDestructive(bytes,uint256,uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<[string, string]
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                b: string,
                from: BigNumber,
                to: BigNumber,
            ): string {
            assert.isString('b', b);
            assert.isBigNumber('from', from);
            assert.isBigNumber('to', to);
            const self = this as any as TestLibBytesContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('publicSliceDestructive(bytes,uint256,uint256)', [b,
        from,
        to
        ]);
            return abiEncodedTransactionData;
        },
    };
    public publicReadBytes4 = {
        async callAsync(
            b: string,
            index: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            assert.isString('b', b);
            assert.isBigNumber('index', index);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as TestLibBytesContract;
            const encodedData = self._strictEncodeArguments('publicReadBytes4(bytes,uint256)', [b,
        index
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
            const abiEncoder = self._lookupAbiEncoder('publicReadBytes4(bytes,uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                b: string,
                index: BigNumber,
            ): string {
            assert.isString('b', b);
            assert.isBigNumber('index', index);
            const self = this as any as TestLibBytesContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('publicReadBytes4(bytes,uint256)', [b,
        index
        ]);
            return abiEncodedTransactionData;
        },
    };
    public publicReadUint256 = {
        async callAsync(
            b: string,
            index: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            assert.isString('b', b);
            assert.isBigNumber('index', index);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as TestLibBytesContract;
            const encodedData = self._strictEncodeArguments('publicReadUint256(bytes,uint256)', [b,
        index
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
            const abiEncoder = self._lookupAbiEncoder('publicReadUint256(bytes,uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                b: string,
                index: BigNumber,
            ): string {
            assert.isString('b', b);
            assert.isBigNumber('index', index);
            const self = this as any as TestLibBytesContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('publicReadUint256(bytes,uint256)', [b,
        index
        ]);
            return abiEncodedTransactionData;
        },
    };
    public publicEquals = {
        async callAsync(
            lhs: string,
            rhs: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            assert.isString('lhs', lhs);
            assert.isString('rhs', rhs);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as TestLibBytesContract;
            const encodedData = self._strictEncodeArguments('publicEquals(bytes,bytes)', [lhs,
        rhs
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
            const abiEncoder = self._lookupAbiEncoder('publicEquals(bytes,bytes)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<boolean
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                lhs: string,
                rhs: string,
            ): string {
            assert.isString('lhs', lhs);
            assert.isString('rhs', rhs);
            const self = this as any as TestLibBytesContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('publicEquals(bytes,bytes)', [lhs,
        rhs
        ]);
            return abiEncodedTransactionData;
        },
    };
    public static async deployFrom0xArtifactAsync(
        artifact: ContractArtifact | SimpleContractArtifact,
        supportedProvider: SupportedProvider,
        txDefaults: Partial<TxData>,
    ): Promise<TestLibBytesContract> {
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
        return TestLibBytesContract.deployAsync(bytecode, abi, provider, txDefaults, );
    }
    public static async deployAsync(
        bytecode: string,
        abi: ContractAbi,
        supportedProvider: SupportedProvider,
        txDefaults: Partial<TxData>,
    ): Promise<TestLibBytesContract> {
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
        logUtils.log(`TestLibBytes successfully deployed at ${txReceipt.contractAddress}`);
        const contractInstance = new TestLibBytesContract(txReceipt.contractAddress as string, provider, txDefaults);
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
                        name: 'b',
                        type: 'bytes',
                        
                    },
                ],
                name: 'publicPopLastByte',
                outputs: [
                    {
                        name: '',
                        type: 'bytes',
                        
                    },
                    {
                        name: 'result',
                        type: 'bytes1',
                        
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
                        name: 'b',
                        type: 'bytes',
                        
                    },
                    {
                        name: 'index',
                        type: 'uint256',
                        
                    },
                ],
                name: 'publicReadBytesWithLength',
                outputs: [
                    {
                        name: 'result',
                        type: 'bytes',
                        
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
                        name: 'dest',
                        type: 'bytes',
                        
                    },
                    {
                        name: 'source',
                        type: 'bytes',
                        
                    },
                ],
                name: 'publicDeepCopyBytes',
                outputs: [
                    {
                        name: '',
                        type: 'bytes',
                        
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
                        name: 'b',
                        type: 'bytes',
                        
                    },
                    {
                        name: 'index',
                        type: 'uint256',
                        
                    },
                    {
                        name: 'input',
                        type: 'address',
                        
                    },
                ],
                name: 'publicWriteAddress',
                outputs: [
                    {
                        name: '',
                        type: 'bytes',
                        
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
                        name: 'b',
                        type: 'bytes',
                        
                    },
                    {
                        name: 'index',
                        type: 'uint256',
                        
                    },
                    {
                        name: 'input',
                        type: 'bytes',
                        
                    },
                ],
                name: 'publicWriteBytesWithLength',
                outputs: [
                    {
                        name: '',
                        type: 'bytes',
                        
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
                        name: 'mem',
                        type: 'bytes',
                        
                    },
                    {
                        name: 'dest',
                        type: 'uint256',
                        
                    },
                    {
                        name: 'source',
                        type: 'uint256',
                        
                    },
                    {
                        name: 'length',
                        type: 'uint256',
                        
                    },
                ],
                name: 'testMemcpy',
                outputs: [
                    {
                        name: '',
                        type: 'bytes',
                        
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
                        name: 'b',
                        type: 'bytes',
                        
                    },
                    {
                        name: 'index',
                        type: 'uint256',
                        
                    },
                ],
                name: 'publicReadAddress',
                outputs: [
                    {
                        name: 'result',
                        type: 'address',
                        
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
                        name: 'b',
                        type: 'bytes',
                        
                    },
                    {
                        name: 'index',
                        type: 'uint256',
                        
                    },
                    {
                        name: 'input',
                        type: 'bytes32',
                        
                    },
                ],
                name: 'publicWriteBytes32',
                outputs: [
                    {
                        name: '',
                        type: 'bytes',
                        
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
                        name: 'b',
                        type: 'bytes',
                        
                    },
                    {
                        name: 'from',
                        type: 'uint256',
                        
                    },
                    {
                        name: 'to',
                        type: 'uint256',
                        
                    },
                ],
                name: 'publicSlice',
                outputs: [
                    {
                        name: 'result',
                        type: 'bytes',
                        
                    },
                    {
                        name: 'original',
                        type: 'bytes',
                        
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
                        name: 'b',
                        type: 'bytes',
                        
                    },
                ],
                name: 'publicPopLast20Bytes',
                outputs: [
                    {
                        name: '',
                        type: 'bytes',
                        
                    },
                    {
                        name: 'result',
                        type: 'address',
                        
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
                        name: 'lhs',
                        type: 'bytes',
                        
                    },
                    {
                        name: 'rhs',
                        type: 'bytes',
                        
                    },
                ],
                name: 'publicEqualsPop1',
                outputs: [
                    {
                        name: 'equal',
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
                        name: 'b',
                        type: 'bytes',
                        
                    },
                    {
                        name: 'index',
                        type: 'uint256',
                        
                    },
                    {
                        name: 'input',
                        type: 'uint256',
                        
                    },
                ],
                name: 'publicWriteUint256',
                outputs: [
                    {
                        name: '',
                        type: 'bytes',
                        
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
                        name: 'b',
                        type: 'bytes',
                        
                    },
                    {
                        name: 'index',
                        type: 'uint256',
                        
                    },
                ],
                name: 'publicReadBytes32',
                outputs: [
                    {
                        name: 'result',
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
                        name: 'b',
                        type: 'bytes',
                        
                    },
                    {
                        name: 'from',
                        type: 'uint256',
                        
                    },
                    {
                        name: 'to',
                        type: 'uint256',
                        
                    },
                ],
                name: 'publicSliceDestructive',
                outputs: [
                    {
                        name: 'result',
                        type: 'bytes',
                        
                    },
                    {
                        name: 'original',
                        type: 'bytes',
                        
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
                        name: 'b',
                        type: 'bytes',
                        
                    },
                    {
                        name: 'index',
                        type: 'uint256',
                        
                    },
                ],
                name: 'publicReadBytes4',
                outputs: [
                    {
                        name: 'result',
                        type: 'bytes4',
                        
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
                        name: 'b',
                        type: 'bytes',
                        
                    },
                    {
                        name: 'index',
                        type: 'uint256',
                        
                    },
                ],
                name: 'publicReadUint256',
                outputs: [
                    {
                        name: 'result',
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
                        name: 'lhs',
                        type: 'bytes',
                        
                    },
                    {
                        name: 'rhs',
                        type: 'bytes',
                        
                    },
                ],
                name: 'publicEquals',
                outputs: [
                    {
                        name: 'equal',
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
        super('TestLibBytes', TestLibBytesContract.ABI(), address, supportedProvider, txDefaults);
        classUtils.bindAll(this, ['_abiEncoderByFunctionSignature', 'address', '_web3Wrapper']);
    }
} 

// tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method no-parameter-reassignment no-consecutive-blank-lines ordered-imports align
// tslint:enable:trailing-comma whitespace no-trailing-whitespace
