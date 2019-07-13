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
export class IAssetProxyDispatcherContract extends BaseContract {
    public getAssetProxy = {
        async callAsync(
            assetProxyId: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            assert.isString('assetProxyId', assetProxyId);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as IAssetProxyDispatcherContract;
            const encodedData = self._strictEncodeArguments('getAssetProxy(bytes4)', [assetProxyId
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
            const abiEncoder = self._lookupAbiEncoder('getAssetProxy(bytes4)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                assetProxyId: string,
            ): string {
            assert.isString('assetProxyId', assetProxyId);
            const self = this as any as IAssetProxyDispatcherContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('getAssetProxy(bytes4)', [assetProxyId
        ]);
            return abiEncodedTransactionData;
        },
    };
    public registerAssetProxy = {
        async sendTransactionAsync(
            assetProxy: string,
        txData?: Partial<TxData> | undefined,
        ): Promise<string> {
        assert.isString('assetProxy', assetProxy);
        const self = this as any as IAssetProxyDispatcherContract;
        const encodedData = self._strictEncodeArguments('registerAssetProxy(address)', [assetProxy
    ]);
        const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
                to: self.address,
                ...txData,
                data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            self.registerAssetProxy.estimateGasAsync.bind(
                self,
                assetProxy
            ),
        );
        const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
        return txHash;
        },
        awaitTransactionSuccessAsync(
            assetProxy: string,
            txData?: Partial<TxData>,
            pollingIntervalMs?: number,
            timeoutMs?: number,
        ): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs> {
        assert.isString('assetProxy', assetProxy);
        const self = this as any as IAssetProxyDispatcherContract;
        const txHashPromise = self.registerAssetProxy.sendTransactionAsync(assetProxy
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
            assetProxy: string,
            txData?: Partial<TxData> | undefined,
        ): Promise<number> {
        assert.isString('assetProxy', assetProxy);
        const self = this as any as IAssetProxyDispatcherContract;
        const encodedData = self._strictEncodeArguments('registerAssetProxy(address)', [assetProxy
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
            assetProxy: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            assert.isString('assetProxy', assetProxy);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as IAssetProxyDispatcherContract;
            const encodedData = self._strictEncodeArguments('registerAssetProxy(address)', [assetProxy
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
            const abiEncoder = self._lookupAbiEncoder('registerAssetProxy(address)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                assetProxy: string,
            ): string {
            assert.isString('assetProxy', assetProxy);
            const self = this as any as IAssetProxyDispatcherContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('registerAssetProxy(address)', [assetProxy
        ]);
            return abiEncodedTransactionData;
        },
    };
    public static async deployFrom0xArtifactAsync(
        artifact: ContractArtifact | SimpleContractArtifact,
        supportedProvider: SupportedProvider,
        txDefaults: Partial<TxData>,
    ): Promise<IAssetProxyDispatcherContract> {
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
        return IAssetProxyDispatcherContract.deployAsync(bytecode, abi, provider, txDefaults, );
    }
    public static async deployAsync(
        bytecode: string,
        abi: ContractAbi,
        supportedProvider: SupportedProvider,
        txDefaults: Partial<TxData>,
    ): Promise<IAssetProxyDispatcherContract> {
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
        logUtils.log(`IAssetProxyDispatcher successfully deployed at ${txReceipt.contractAddress}`);
        const contractInstance = new IAssetProxyDispatcherContract(txReceipt.contractAddress as string, provider, txDefaults);
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
                        name: 'assetProxyId',
                        type: 'bytes4',
                        
                    },
                ],
                name: 'getAssetProxy',
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
                constant: false,
                inputs: [
                    {
                        name: 'assetProxy',
                        type: 'address',
                        
                    },
                ],
                name: 'registerAssetProxy',
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
        super('IAssetProxyDispatcher', IAssetProxyDispatcherContract.ABI(), address, supportedProvider, txDefaults);
        classUtils.bindAll(this, ['_abiEncoderByFunctionSignature', 'address', '_web3Wrapper']);
    }
} 

// tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method no-parameter-reassignment no-consecutive-blank-lines ordered-imports align
// tslint:enable:trailing-comma whitespace no-trailing-whitespace
