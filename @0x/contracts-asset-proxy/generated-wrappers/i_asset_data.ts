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
export class IAssetDataContract extends BaseContract {
    public ERC721Token = {
        async sendTransactionAsync(
            tokenAddress: string,
            tokenId: BigNumber,
        txData?: Partial<TxData> | undefined,
        ): Promise<string> {
        assert.isString('tokenAddress', tokenAddress);
        assert.isBigNumber('tokenId', tokenId);
        const self = this as any as IAssetDataContract;
        const encodedData = self._strictEncodeArguments('ERC721Token(address,uint256)', [tokenAddress,
    tokenId
    ]);
        const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
                to: self.address,
                ...txData,
                data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            self.ERC721Token.estimateGasAsync.bind(
                self,
                tokenAddress,
                tokenId
            ),
        );
        const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
        return txHash;
        },
        awaitTransactionSuccessAsync(
            tokenAddress: string,
            tokenId: BigNumber,
            txData?: Partial<TxData>,
            pollingIntervalMs?: number,
            timeoutMs?: number,
        ): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs> {
        assert.isString('tokenAddress', tokenAddress);
        assert.isBigNumber('tokenId', tokenId);
        const self = this as any as IAssetDataContract;
        const txHashPromise = self.ERC721Token.sendTransactionAsync(tokenAddress,
    tokenId
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
            tokenAddress: string,
            tokenId: BigNumber,
            txData?: Partial<TxData> | undefined,
        ): Promise<number> {
        assert.isString('tokenAddress', tokenAddress);
        assert.isBigNumber('tokenId', tokenId);
        const self = this as any as IAssetDataContract;
        const encodedData = self._strictEncodeArguments('ERC721Token(address,uint256)', [tokenAddress,
    tokenId
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
            tokenAddress: string,
            tokenId: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            assert.isString('tokenAddress', tokenAddress);
            assert.isBigNumber('tokenId', tokenId);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as IAssetDataContract;
            const encodedData = self._strictEncodeArguments('ERC721Token(address,uint256)', [tokenAddress,
        tokenId
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
            const abiEncoder = self._lookupAbiEncoder('ERC721Token(address,uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                tokenAddress: string,
                tokenId: BigNumber,
            ): string {
            assert.isString('tokenAddress', tokenAddress);
            assert.isBigNumber('tokenId', tokenId);
            const self = this as any as IAssetDataContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('ERC721Token(address,uint256)', [tokenAddress,
        tokenId
        ]);
            return abiEncodedTransactionData;
        },
    };
    public MultiAsset = {
        async sendTransactionAsync(
            amounts: BigNumber[],
            nestedAssetData: string[],
        txData?: Partial<TxData> | undefined,
        ): Promise<string> {
        assert.isArray('amounts', amounts);
        assert.isArray('nestedAssetData', nestedAssetData);
        const self = this as any as IAssetDataContract;
        const encodedData = self._strictEncodeArguments('MultiAsset(uint256[],bytes[])', [amounts,
    nestedAssetData
    ]);
        const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
                to: self.address,
                ...txData,
                data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            self.MultiAsset.estimateGasAsync.bind(
                self,
                amounts,
                nestedAssetData
            ),
        );
        const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
        return txHash;
        },
        awaitTransactionSuccessAsync(
            amounts: BigNumber[],
            nestedAssetData: string[],
            txData?: Partial<TxData>,
            pollingIntervalMs?: number,
            timeoutMs?: number,
        ): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs> {
        assert.isArray('amounts', amounts);
        assert.isArray('nestedAssetData', nestedAssetData);
        const self = this as any as IAssetDataContract;
        const txHashPromise = self.MultiAsset.sendTransactionAsync(amounts,
    nestedAssetData
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
            amounts: BigNumber[],
            nestedAssetData: string[],
            txData?: Partial<TxData> | undefined,
        ): Promise<number> {
        assert.isArray('amounts', amounts);
        assert.isArray('nestedAssetData', nestedAssetData);
        const self = this as any as IAssetDataContract;
        const encodedData = self._strictEncodeArguments('MultiAsset(uint256[],bytes[])', [amounts,
    nestedAssetData
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
            amounts: BigNumber[],
            nestedAssetData: string[],
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            assert.isArray('amounts', amounts);
            assert.isArray('nestedAssetData', nestedAssetData);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as IAssetDataContract;
            const encodedData = self._strictEncodeArguments('MultiAsset(uint256[],bytes[])', [amounts,
        nestedAssetData
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
            const abiEncoder = self._lookupAbiEncoder('MultiAsset(uint256[],bytes[])');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                amounts: BigNumber[],
                nestedAssetData: string[],
            ): string {
            assert.isArray('amounts', amounts);
            assert.isArray('nestedAssetData', nestedAssetData);
            const self = this as any as IAssetDataContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('MultiAsset(uint256[],bytes[])', [amounts,
        nestedAssetData
        ]);
            return abiEncodedTransactionData;
        },
    };
    public ERC1155Assets = {
        async sendTransactionAsync(
            tokenAddress: string,
            tokenIds: BigNumber[],
            tokenValues: BigNumber[],
            callbackData: string,
        txData?: Partial<TxData> | undefined,
        ): Promise<string> {
        assert.isString('tokenAddress', tokenAddress);
        assert.isArray('tokenIds', tokenIds);
        assert.isArray('tokenValues', tokenValues);
        assert.isString('callbackData', callbackData);
        const self = this as any as IAssetDataContract;
        const encodedData = self._strictEncodeArguments('ERC1155Assets(address,uint256[],uint256[],bytes)', [tokenAddress,
    tokenIds,
    tokenValues,
    callbackData
    ]);
        const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
                to: self.address,
                ...txData,
                data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            self.ERC1155Assets.estimateGasAsync.bind(
                self,
                tokenAddress,
                tokenIds,
                tokenValues,
                callbackData
            ),
        );
        const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
        return txHash;
        },
        awaitTransactionSuccessAsync(
            tokenAddress: string,
            tokenIds: BigNumber[],
            tokenValues: BigNumber[],
            callbackData: string,
            txData?: Partial<TxData>,
            pollingIntervalMs?: number,
            timeoutMs?: number,
        ): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs> {
        assert.isString('tokenAddress', tokenAddress);
        assert.isArray('tokenIds', tokenIds);
        assert.isArray('tokenValues', tokenValues);
        assert.isString('callbackData', callbackData);
        const self = this as any as IAssetDataContract;
        const txHashPromise = self.ERC1155Assets.sendTransactionAsync(tokenAddress,
    tokenIds,
    tokenValues,
    callbackData
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
            tokenAddress: string,
            tokenIds: BigNumber[],
            tokenValues: BigNumber[],
            callbackData: string,
            txData?: Partial<TxData> | undefined,
        ): Promise<number> {
        assert.isString('tokenAddress', tokenAddress);
        assert.isArray('tokenIds', tokenIds);
        assert.isArray('tokenValues', tokenValues);
        assert.isString('callbackData', callbackData);
        const self = this as any as IAssetDataContract;
        const encodedData = self._strictEncodeArguments('ERC1155Assets(address,uint256[],uint256[],bytes)', [tokenAddress,
    tokenIds,
    tokenValues,
    callbackData
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
            tokenAddress: string,
            tokenIds: BigNumber[],
            tokenValues: BigNumber[],
            callbackData: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            assert.isString('tokenAddress', tokenAddress);
            assert.isArray('tokenIds', tokenIds);
            assert.isArray('tokenValues', tokenValues);
            assert.isString('callbackData', callbackData);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as IAssetDataContract;
            const encodedData = self._strictEncodeArguments('ERC1155Assets(address,uint256[],uint256[],bytes)', [tokenAddress,
        tokenIds,
        tokenValues,
        callbackData
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
            const abiEncoder = self._lookupAbiEncoder('ERC1155Assets(address,uint256[],uint256[],bytes)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                tokenAddress: string,
                tokenIds: BigNumber[],
                tokenValues: BigNumber[],
                callbackData: string,
            ): string {
            assert.isString('tokenAddress', tokenAddress);
            assert.isArray('tokenIds', tokenIds);
            assert.isArray('tokenValues', tokenValues);
            assert.isString('callbackData', callbackData);
            const self = this as any as IAssetDataContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('ERC1155Assets(address,uint256[],uint256[],bytes)', [tokenAddress,
        tokenIds,
        tokenValues,
        callbackData
        ]);
            return abiEncodedTransactionData;
        },
    };
    public StaticCall = {
        async sendTransactionAsync(
            callTarget: string,
            staticCallData: string,
            callResultHash: string,
        txData?: Partial<TxData> | undefined,
        ): Promise<string> {
        assert.isString('callTarget', callTarget);
        assert.isString('staticCallData', staticCallData);
        assert.isString('callResultHash', callResultHash);
        const self = this as any as IAssetDataContract;
        const encodedData = self._strictEncodeArguments('StaticCall(address,bytes,bytes32)', [callTarget,
    staticCallData,
    callResultHash
    ]);
        const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
                to: self.address,
                ...txData,
                data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            self.StaticCall.estimateGasAsync.bind(
                self,
                callTarget,
                staticCallData,
                callResultHash
            ),
        );
        const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
        return txHash;
        },
        awaitTransactionSuccessAsync(
            callTarget: string,
            staticCallData: string,
            callResultHash: string,
            txData?: Partial<TxData>,
            pollingIntervalMs?: number,
            timeoutMs?: number,
        ): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs> {
        assert.isString('callTarget', callTarget);
        assert.isString('staticCallData', staticCallData);
        assert.isString('callResultHash', callResultHash);
        const self = this as any as IAssetDataContract;
        const txHashPromise = self.StaticCall.sendTransactionAsync(callTarget,
    staticCallData,
    callResultHash
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
            callTarget: string,
            staticCallData: string,
            callResultHash: string,
            txData?: Partial<TxData> | undefined,
        ): Promise<number> {
        assert.isString('callTarget', callTarget);
        assert.isString('staticCallData', staticCallData);
        assert.isString('callResultHash', callResultHash);
        const self = this as any as IAssetDataContract;
        const encodedData = self._strictEncodeArguments('StaticCall(address,bytes,bytes32)', [callTarget,
    staticCallData,
    callResultHash
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
            callTarget: string,
            staticCallData: string,
            callResultHash: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            assert.isString('callTarget', callTarget);
            assert.isString('staticCallData', staticCallData);
            assert.isString('callResultHash', callResultHash);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as IAssetDataContract;
            const encodedData = self._strictEncodeArguments('StaticCall(address,bytes,bytes32)', [callTarget,
        staticCallData,
        callResultHash
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
            const abiEncoder = self._lookupAbiEncoder('StaticCall(address,bytes,bytes32)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                callTarget: string,
                staticCallData: string,
                callResultHash: string,
            ): string {
            assert.isString('callTarget', callTarget);
            assert.isString('staticCallData', staticCallData);
            assert.isString('callResultHash', callResultHash);
            const self = this as any as IAssetDataContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('StaticCall(address,bytes,bytes32)', [callTarget,
        staticCallData,
        callResultHash
        ]);
            return abiEncodedTransactionData;
        },
    };
    public ERC20Token = {
        async sendTransactionAsync(
            tokenAddress: string,
        txData?: Partial<TxData> | undefined,
        ): Promise<string> {
        assert.isString('tokenAddress', tokenAddress);
        const self = this as any as IAssetDataContract;
        const encodedData = self._strictEncodeArguments('ERC20Token(address)', [tokenAddress
    ]);
        const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
                to: self.address,
                ...txData,
                data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            self.ERC20Token.estimateGasAsync.bind(
                self,
                tokenAddress
            ),
        );
        const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
        return txHash;
        },
        awaitTransactionSuccessAsync(
            tokenAddress: string,
            txData?: Partial<TxData>,
            pollingIntervalMs?: number,
            timeoutMs?: number,
        ): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs> {
        assert.isString('tokenAddress', tokenAddress);
        const self = this as any as IAssetDataContract;
        const txHashPromise = self.ERC20Token.sendTransactionAsync(tokenAddress
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
            tokenAddress: string,
            txData?: Partial<TxData> | undefined,
        ): Promise<number> {
        assert.isString('tokenAddress', tokenAddress);
        const self = this as any as IAssetDataContract;
        const encodedData = self._strictEncodeArguments('ERC20Token(address)', [tokenAddress
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
            tokenAddress: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            assert.isString('tokenAddress', tokenAddress);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as IAssetDataContract;
            const encodedData = self._strictEncodeArguments('ERC20Token(address)', [tokenAddress
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
            const abiEncoder = self._lookupAbiEncoder('ERC20Token(address)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                tokenAddress: string,
            ): string {
            assert.isString('tokenAddress', tokenAddress);
            const self = this as any as IAssetDataContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('ERC20Token(address)', [tokenAddress
        ]);
            return abiEncodedTransactionData;
        },
    };
    public static async deployFrom0xArtifactAsync(
        artifact: ContractArtifact | SimpleContractArtifact,
        supportedProvider: SupportedProvider,
        txDefaults: Partial<TxData>,
    ): Promise<IAssetDataContract> {
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
        return IAssetDataContract.deployAsync(bytecode, abi, provider, txDefaults, );
    }
    public static async deployAsync(
        bytecode: string,
        abi: ContractAbi,
        supportedProvider: SupportedProvider,
        txDefaults: Partial<TxData>,
    ): Promise<IAssetDataContract> {
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
        logUtils.log(`IAssetData successfully deployed at ${txReceipt.contractAddress}`);
        const contractInstance = new IAssetDataContract(txReceipt.contractAddress as string, provider, txDefaults);
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
                        name: 'tokenAddress',
                        type: 'address',
                        
                    },
                    {
                        name: 'tokenId',
                        type: 'uint256',
                        
                    },
                ],
                name: 'ERC721Token',
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
                        name: 'amounts',
                        type: 'uint256[]',
                        
                    },
                    {
                        name: 'nestedAssetData',
                        type: 'bytes[]',
                        
                    },
                ],
                name: 'MultiAsset',
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
                        name: 'tokenAddress',
                        type: 'address',
                        
                    },
                    {
                        name: 'tokenIds',
                        type: 'uint256[]',
                        
                    },
                    {
                        name: 'tokenValues',
                        type: 'uint256[]',
                        
                    },
                    {
                        name: 'callbackData',
                        type: 'bytes',
                        
                    },
                ],
                name: 'ERC1155Assets',
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
                        name: 'callTarget',
                        type: 'address',
                        
                    },
                    {
                        name: 'staticCallData',
                        type: 'bytes',
                        
                    },
                    {
                        name: 'callResultHash',
                        type: 'bytes32',
                        
                    },
                ],
                name: 'StaticCall',
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
                        name: 'tokenAddress',
                        type: 'address',
                        
                    },
                ],
                name: 'ERC20Token',
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
        super('IAssetData', IAssetDataContract.ABI(), address, supportedProvider, txDefaults);
        classUtils.bindAll(this, ['_abiEncoderByFunctionSignature', 'address', '_web3Wrapper']);
    }
} 

// tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method no-parameter-reassignment no-consecutive-blank-lines ordered-imports align
// tslint:enable:trailing-comma whitespace no-trailing-whitespace
