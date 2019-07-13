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

export type TestSignatureValidatorEventArgs =
    | TestSignatureValidatorSignatureValidatorApprovalEventArgs;

export enum TestSignatureValidatorEvents {
    SignatureValidatorApproval = 'SignatureValidatorApproval',
}

export interface TestSignatureValidatorSignatureValidatorApprovalEventArgs extends DecodedLogArgs {
    signerAddress: string;
    validatorAddress: string;
    approved: boolean;
}


/* istanbul ignore next */
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
export class TestSignatureValidatorContract extends BaseContract {
    public preSign = {
        async sendTransactionAsync(
            hash: string,
            signerAddress: string,
            signature: string,
        txData?: Partial<TxData> | undefined,
        ): Promise<string> {
        assert.isString('hash', hash);
        assert.isString('signerAddress', signerAddress);
        assert.isString('signature', signature);
        const self = this as any as TestSignatureValidatorContract;
        const encodedData = self._strictEncodeArguments('preSign(bytes32,address,bytes)', [hash,
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
            self.preSign.estimateGasAsync.bind(
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
        const self = this as any as TestSignatureValidatorContract;
        const txHashPromise = self.preSign.sendTransactionAsync(hash,
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
        const self = this as any as TestSignatureValidatorContract;
        const encodedData = self._strictEncodeArguments('preSign(bytes32,address,bytes)', [hash,
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
        ): Promise<void
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
            const self = this as any as TestSignatureValidatorContract;
            const encodedData = self._strictEncodeArguments('preSign(bytes32,address,bytes)', [hash,
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
            const abiEncoder = self._lookupAbiEncoder('preSign(bytes32,address,bytes)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
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
            const self = this as any as TestSignatureValidatorContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('preSign(bytes32,address,bytes)', [hash,
        signerAddress,
        signature
        ]);
            return abiEncodedTransactionData;
        },
    };
    public transactions = {
        async callAsync(
            index_0: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
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
            const self = this as any as TestSignatureValidatorContract;
            const encodedData = self._strictEncodeArguments('transactions(bytes32)', [index_0
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
            const abiEncoder = self._lookupAbiEncoder('transactions(bytes32)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<boolean
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                index_0: string,
            ): string {
            assert.isString('index_0', index_0);
            const self = this as any as TestSignatureValidatorContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('transactions(bytes32)', [index_0
        ]);
            return abiEncodedTransactionData;
        },
    };
    public setSignatureValidatorApproval = {
        async sendTransactionAsync(
            validatorAddress: string,
            approval: boolean,
        txData?: Partial<TxData> | undefined,
        ): Promise<string> {
        assert.isString('validatorAddress', validatorAddress);
        assert.isBoolean('approval', approval);
        const self = this as any as TestSignatureValidatorContract;
        const encodedData = self._strictEncodeArguments('setSignatureValidatorApproval(address,bool)', [validatorAddress,
    approval
    ]);
        const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
                to: self.address,
                ...txData,
                data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            self.setSignatureValidatorApproval.estimateGasAsync.bind(
                self,
                validatorAddress,
                approval
            ),
        );
        const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
        return txHash;
        },
        awaitTransactionSuccessAsync(
            validatorAddress: string,
            approval: boolean,
            txData?: Partial<TxData>,
            pollingIntervalMs?: number,
            timeoutMs?: number,
        ): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs> {
        assert.isString('validatorAddress', validatorAddress);
        assert.isBoolean('approval', approval);
        const self = this as any as TestSignatureValidatorContract;
        const txHashPromise = self.setSignatureValidatorApproval.sendTransactionAsync(validatorAddress,
    approval
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
            validatorAddress: string,
            approval: boolean,
            txData?: Partial<TxData> | undefined,
        ): Promise<number> {
        assert.isString('validatorAddress', validatorAddress);
        assert.isBoolean('approval', approval);
        const self = this as any as TestSignatureValidatorContract;
        const encodedData = self._strictEncodeArguments('setSignatureValidatorApproval(address,bool)', [validatorAddress,
    approval
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
            validatorAddress: string,
            approval: boolean,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            assert.isString('validatorAddress', validatorAddress);
            assert.isBoolean('approval', approval);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as TestSignatureValidatorContract;
            const encodedData = self._strictEncodeArguments('setSignatureValidatorApproval(address,bool)', [validatorAddress,
        approval
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
            const abiEncoder = self._lookupAbiEncoder('setSignatureValidatorApproval(address,bool)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                validatorAddress: string,
                approval: boolean,
            ): string {
            assert.isString('validatorAddress', validatorAddress);
            assert.isBoolean('approval', approval);
            const self = this as any as TestSignatureValidatorContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('setSignatureValidatorApproval(address,bool)', [validatorAddress,
        approval
        ]);
            return abiEncodedTransactionData;
        },
    };
    public allowedValidators = {
        async callAsync(
            index_0: string,
            index_1: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            assert.isString('index_0', index_0);
            assert.isString('index_1', index_1);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as TestSignatureValidatorContract;
            const encodedData = self._strictEncodeArguments('allowedValidators(address,address)', [index_0,
        index_1
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
            const abiEncoder = self._lookupAbiEncoder('allowedValidators(address,address)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<boolean
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                index_0: string,
                index_1: string,
            ): string {
            assert.isString('index_0', index_0);
            assert.isString('index_1', index_1);
            const self = this as any as TestSignatureValidatorContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('allowedValidators(address,address)', [index_0,
        index_1
        ]);
            return abiEncodedTransactionData;
        },
    };
    public preSigned = {
        async callAsync(
            index_0: string,
            index_1: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            assert.isString('index_0', index_0);
            assert.isString('index_1', index_1);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as TestSignatureValidatorContract;
            const encodedData = self._strictEncodeArguments('preSigned(bytes32,address)', [index_0,
        index_1
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
            const abiEncoder = self._lookupAbiEncoder('preSigned(bytes32,address)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<boolean
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                index_0: string,
                index_1: string,
            ): string {
            assert.isString('index_0', index_0);
            assert.isString('index_1', index_1);
            const self = this as any as TestSignatureValidatorContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('preSigned(bytes32,address)', [index_0,
        index_1
        ]);
            return abiEncodedTransactionData;
        },
    };
    public isValidSignature = {
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
            const self = this as any as TestSignatureValidatorContract;
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
            const self = this as any as TestSignatureValidatorContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('isValidSignature(bytes32,address,bytes)', [hash,
        signerAddress,
        signature
        ]);
            return abiEncodedTransactionData;
        },
    };
    public publicIsValidSignature = {
        async callAsync(
            hash: string,
            signer: string,
            signature: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            assert.isString('hash', hash);
            assert.isString('signer', signer);
            assert.isString('signature', signature);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as TestSignatureValidatorContract;
            const encodedData = self._strictEncodeArguments('publicIsValidSignature(bytes32,address,bytes)', [hash,
        signer,
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
            const abiEncoder = self._lookupAbiEncoder('publicIsValidSignature(bytes32,address,bytes)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<boolean
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                hash: string,
                signer: string,
                signature: string,
            ): string {
            assert.isString('hash', hash);
            assert.isString('signer', signer);
            assert.isString('signature', signature);
            const self = this as any as TestSignatureValidatorContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('publicIsValidSignature(bytes32,address,bytes)', [hash,
        signer,
        signature
        ]);
            return abiEncodedTransactionData;
        },
    };
    public executeTransaction = {
        async sendTransactionAsync(
            salt: BigNumber,
            signerAddress: string,
            data: string,
            signature: string,
        txData?: Partial<TxData> | undefined,
        ): Promise<string> {
        assert.isBigNumber('salt', salt);
        assert.isString('signerAddress', signerAddress);
        assert.isString('data', data);
        assert.isString('signature', signature);
        const self = this as any as TestSignatureValidatorContract;
        const encodedData = self._strictEncodeArguments('executeTransaction(uint256,address,bytes,bytes)', [salt,
    signerAddress,
    data,
    signature
    ]);
        const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
                to: self.address,
                ...txData,
                data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            self.executeTransaction.estimateGasAsync.bind(
                self,
                salt,
                signerAddress,
                data,
                signature
            ),
        );
        const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
        return txHash;
        },
        awaitTransactionSuccessAsync(
            salt: BigNumber,
            signerAddress: string,
            data: string,
            signature: string,
            txData?: Partial<TxData>,
            pollingIntervalMs?: number,
            timeoutMs?: number,
        ): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs> {
        assert.isBigNumber('salt', salt);
        assert.isString('signerAddress', signerAddress);
        assert.isString('data', data);
        assert.isString('signature', signature);
        const self = this as any as TestSignatureValidatorContract;
        const txHashPromise = self.executeTransaction.sendTransactionAsync(salt,
    signerAddress,
    data,
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
            salt: BigNumber,
            signerAddress: string,
            data: string,
            signature: string,
            txData?: Partial<TxData> | undefined,
        ): Promise<number> {
        assert.isBigNumber('salt', salt);
        assert.isString('signerAddress', signerAddress);
        assert.isString('data', data);
        assert.isString('signature', signature);
        const self = this as any as TestSignatureValidatorContract;
        const encodedData = self._strictEncodeArguments('executeTransaction(uint256,address,bytes,bytes)', [salt,
    signerAddress,
    data,
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
            salt: BigNumber,
            signerAddress: string,
            data: string,
            signature: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            assert.isBigNumber('salt', salt);
            assert.isString('signerAddress', signerAddress);
            assert.isString('data', data);
            assert.isString('signature', signature);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as TestSignatureValidatorContract;
            const encodedData = self._strictEncodeArguments('executeTransaction(uint256,address,bytes,bytes)', [salt,
        signerAddress,
        data,
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
            const abiEncoder = self._lookupAbiEncoder('executeTransaction(uint256,address,bytes,bytes)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                salt: BigNumber,
                signerAddress: string,
                data: string,
                signature: string,
            ): string {
            assert.isBigNumber('salt', salt);
            assert.isString('signerAddress', signerAddress);
            assert.isString('data', data);
            assert.isString('signature', signature);
            const self = this as any as TestSignatureValidatorContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('executeTransaction(uint256,address,bytes,bytes)', [salt,
        signerAddress,
        data,
        signature
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
            const self = this as any as TestSignatureValidatorContract;
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
            const self = this as any as TestSignatureValidatorContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('EIP712_DOMAIN_HASH()', []);
            return abiEncodedTransactionData;
        },
    };
    public currentContextAddress = {
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
            const self = this as any as TestSignatureValidatorContract;
            const encodedData = self._strictEncodeArguments('currentContextAddress()', []);
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
            const abiEncoder = self._lookupAbiEncoder('currentContextAddress()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
            ): string {
            const self = this as any as TestSignatureValidatorContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('currentContextAddress()', []);
            return abiEncodedTransactionData;
        },
    };
    public static async deployFrom0xArtifactAsync(
        artifact: ContractArtifact | SimpleContractArtifact,
        supportedProvider: SupportedProvider,
        txDefaults: Partial<TxData>,
    ): Promise<TestSignatureValidatorContract> {
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
        return TestSignatureValidatorContract.deployAsync(bytecode, abi, provider, txDefaults, );
    }
    public static async deployAsync(
        bytecode: string,
        abi: ContractAbi,
        supportedProvider: SupportedProvider,
        txDefaults: Partial<TxData>,
    ): Promise<TestSignatureValidatorContract> {
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
        logUtils.log(`TestSignatureValidator successfully deployed at ${txReceipt.contractAddress}`);
        const contractInstance = new TestSignatureValidatorContract(txReceipt.contractAddress as string, provider, txDefaults);
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
                        name: 'signerAddress',
                        type: 'address',
                        
                    },
                    {
                        name: 'signature',
                        type: 'bytes',
                        
                    },
                ],
                name: 'preSign',
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
                        name: 'index_0',
                        type: 'bytes32',
                        
                    },
                ],
                name: 'transactions',
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
                        name: 'validatorAddress',
                        type: 'address',
                        
                    },
                    {
                        name: 'approval',
                        type: 'bool',
                        
                    },
                ],
                name: 'setSignatureValidatorApproval',
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
                        name: 'index_0',
                        type: 'address',
                        
                    },
                    {
                        name: 'index_1',
                        type: 'address',
                        
                    },
                ],
                name: 'allowedValidators',
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
                constant: true,
                inputs: [
                    {
                        name: 'index_0',
                        type: 'bytes32',
                        
                    },
                    {
                        name: 'index_1',
                        type: 'address',
                        
                    },
                ],
                name: 'preSigned',
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
                constant: true,
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
                stateMutability: 'view',
                type: 'function',
            },
            { 
                constant: true,
                inputs: [
                    {
                        name: 'hash',
                        type: 'bytes32',
                        
                    },
                    {
                        name: 'signer',
                        type: 'address',
                        
                    },
                    {
                        name: 'signature',
                        type: 'bytes',
                        
                    },
                ],
                name: 'publicIsValidSignature',
                outputs: [
                    {
                        name: 'isValid',
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
                        name: 'salt',
                        type: 'uint256',
                        
                    },
                    {
                        name: 'signerAddress',
                        type: 'address',
                        
                    },
                    {
                        name: 'data',
                        type: 'bytes',
                        
                    },
                    {
                        name: 'signature',
                        type: 'bytes',
                        
                    },
                ],
                name: 'executeTransaction',
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
                ],
                name: 'currentContextAddress',
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
                anonymous: false,
                inputs: [
                    {
                        name: 'signerAddress',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'validatorAddress',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'approved',
                        type: 'bool',
                        indexed: false,
                    },
                ],
                name: 'SignatureValidatorApproval',
                outputs: [
                ],
                type: 'event',
            },
        ] as ContractAbi;
        return abi;
    }
    constructor(address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>) {
        super('TestSignatureValidator', TestSignatureValidatorContract.ABI(), address, supportedProvider, txDefaults);
        classUtils.bindAll(this, ['_abiEncoderByFunctionSignature', 'address', '_web3Wrapper']);
    }
} 

// tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method no-parameter-reassignment no-consecutive-blank-lines ordered-imports align
// tslint:enable:trailing-comma whitespace no-trailing-whitespace
