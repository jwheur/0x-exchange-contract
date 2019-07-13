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
export class IMatchOrdersContract extends BaseContract {
    public matchOrders = {
        async sendTransactionAsync(
            leftOrder: {makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string},
            rightOrder: {makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string},
            leftSignature: string,
            rightSignature: string,
        txData?: Partial<TxData> | undefined,
        ): Promise<string> {
        
        
        assert.isString('leftSignature', leftSignature);
        assert.isString('rightSignature', rightSignature);
        const self = this as any as IMatchOrdersContract;
        const encodedData = self._strictEncodeArguments('matchOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),bytes,bytes)', [leftOrder,
    rightOrder,
    leftSignature,
    rightSignature
    ]);
        const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
                to: self.address,
                ...txData,
                data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            self.matchOrders.estimateGasAsync.bind(
                self,
                leftOrder,
                rightOrder,
                leftSignature,
                rightSignature
            ),
        );
        const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
        return txHash;
        },
        awaitTransactionSuccessAsync(
            leftOrder: {makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string},
            rightOrder: {makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string},
            leftSignature: string,
            rightSignature: string,
            txData?: Partial<TxData>,
            pollingIntervalMs?: number,
            timeoutMs?: number,
        ): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs> {
        
        
        assert.isString('leftSignature', leftSignature);
        assert.isString('rightSignature', rightSignature);
        const self = this as any as IMatchOrdersContract;
        const txHashPromise = self.matchOrders.sendTransactionAsync(leftOrder,
    rightOrder,
    leftSignature,
    rightSignature
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
            leftOrder: {makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string},
            rightOrder: {makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string},
            leftSignature: string,
            rightSignature: string,
            txData?: Partial<TxData> | undefined,
        ): Promise<number> {
        
        
        assert.isString('leftSignature', leftSignature);
        assert.isString('rightSignature', rightSignature);
        const self = this as any as IMatchOrdersContract;
        const encodedData = self._strictEncodeArguments('matchOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),bytes,bytes)', [leftOrder,
    rightOrder,
    leftSignature,
    rightSignature
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
            leftOrder: {makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string},
            rightOrder: {makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string},
            leftSignature: string,
            rightSignature: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<{left: {makerAssetFilledAmount: BigNumber;takerAssetFilledAmount: BigNumber;makerFeePaid: BigNumber;takerFeePaid: BigNumber};right: {makerAssetFilledAmount: BigNumber;takerAssetFilledAmount: BigNumber;makerFeePaid: BigNumber;takerFeePaid: BigNumber};leftMakerAssetSpreadAmount: BigNumber}
        > {
            
            
            assert.isString('leftSignature', leftSignature);
            assert.isString('rightSignature', rightSignature);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as IMatchOrdersContract;
            const encodedData = self._strictEncodeArguments('matchOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),bytes,bytes)', [leftOrder,
        rightOrder,
        leftSignature,
        rightSignature
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
            const abiEncoder = self._lookupAbiEncoder('matchOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),bytes,bytes)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<{left: {makerAssetFilledAmount: BigNumber;takerAssetFilledAmount: BigNumber;makerFeePaid: BigNumber;takerFeePaid: BigNumber};right: {makerAssetFilledAmount: BigNumber;takerAssetFilledAmount: BigNumber;makerFeePaid: BigNumber;takerFeePaid: BigNumber};leftMakerAssetSpreadAmount: BigNumber}
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                leftOrder: {makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string},
                rightOrder: {makerAddress: string;takerAddress: string;feeRecipientAddress: string;senderAddress: string;makerAssetAmount: BigNumber;takerAssetAmount: BigNumber;makerFee: BigNumber;takerFee: BigNumber;expirationTimeSeconds: BigNumber;salt: BigNumber;makerAssetData: string;takerAssetData: string},
                leftSignature: string,
                rightSignature: string,
            ): string {
            
            
            assert.isString('leftSignature', leftSignature);
            assert.isString('rightSignature', rightSignature);
            const self = this as any as IMatchOrdersContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('matchOrders((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),bytes,bytes)', [leftOrder,
        rightOrder,
        leftSignature,
        rightSignature
        ]);
            return abiEncodedTransactionData;
        },
    };
    public static async deployFrom0xArtifactAsync(
        artifact: ContractArtifact | SimpleContractArtifact,
        supportedProvider: SupportedProvider,
        txDefaults: Partial<TxData>,
    ): Promise<IMatchOrdersContract> {
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
        return IMatchOrdersContract.deployAsync(bytecode, abi, provider, txDefaults, );
    }
    public static async deployAsync(
        bytecode: string,
        abi: ContractAbi,
        supportedProvider: SupportedProvider,
        txDefaults: Partial<TxData>,
    ): Promise<IMatchOrdersContract> {
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
        logUtils.log(`IMatchOrders successfully deployed at ${txReceipt.contractAddress}`);
        const contractInstance = new IMatchOrdersContract(txReceipt.contractAddress as string, provider, txDefaults);
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
                        name: 'leftOrder',
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
                        name: 'rightOrder',
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
                        name: 'leftSignature',
                        type: 'bytes',
                        
                    },
                    {
                        name: 'rightSignature',
                        type: 'bytes',
                        
                    },
                ],
                name: 'matchOrders',
                outputs: [
                    {
                        name: 'matchedFillResults',
                        type: 'tuple',
                        
                        components: [
                            {
                                name: 'left',
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
                                name: 'right',
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
                                name: 'leftMakerAssetSpreadAmount',
                                type: 'uint256',
                                
                            },
                        ]
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
        super('IMatchOrders', IMatchOrdersContract.ABI(), address, supportedProvider, txDefaults);
        classUtils.bindAll(this, ['_abiEncoderByFunctionSignature', 'address', '_web3Wrapper']);
    }
} 

// tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method no-parameter-reassignment no-consecutive-blank-lines ordered-imports align
// tslint:enable:trailing-comma whitespace no-trailing-whitespace
