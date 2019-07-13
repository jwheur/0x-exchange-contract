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
export class IERC721ReceiverContract extends BaseContract {
    public onERC721Received = {
        async sendTransactionAsync(
            _operator: string,
            _from: string,
            _tokenId: BigNumber,
            _data: string,
        txData?: Partial<TxData> | undefined,
        ): Promise<string> {
        assert.isString('_operator', _operator);
        assert.isString('_from', _from);
        assert.isBigNumber('_tokenId', _tokenId);
        assert.isString('_data', _data);
        const self = this as any as IERC721ReceiverContract;
        const encodedData = self._strictEncodeArguments('onERC721Received(address,address,uint256,bytes)', [_operator,
    _from,
    _tokenId,
    _data
    ]);
        const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {
                to: self.address,
                ...txData,
                data: encodedData,
            },
            self._web3Wrapper.getContractDefaults(),
            self.onERC721Received.estimateGasAsync.bind(
                self,
                _operator,
                _from,
                _tokenId,
                _data
            ),
        );
        const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
        return txHash;
        },
        awaitTransactionSuccessAsync(
            _operator: string,
            _from: string,
            _tokenId: BigNumber,
            _data: string,
            txData?: Partial<TxData>,
            pollingIntervalMs?: number,
            timeoutMs?: number,
        ): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs> {
        assert.isString('_operator', _operator);
        assert.isString('_from', _from);
        assert.isBigNumber('_tokenId', _tokenId);
        assert.isString('_data', _data);
        const self = this as any as IERC721ReceiverContract;
        const txHashPromise = self.onERC721Received.sendTransactionAsync(_operator,
    _from,
    _tokenId,
    _data
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
            _operator: string,
            _from: string,
            _tokenId: BigNumber,
            _data: string,
            txData?: Partial<TxData> | undefined,
        ): Promise<number> {
        assert.isString('_operator', _operator);
        assert.isString('_from', _from);
        assert.isBigNumber('_tokenId', _tokenId);
        assert.isString('_data', _data);
        const self = this as any as IERC721ReceiverContract;
        const encodedData = self._strictEncodeArguments('onERC721Received(address,address,uint256,bytes)', [_operator,
    _from,
    _tokenId,
    _data
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
            _operator: string,
            _from: string,
            _tokenId: BigNumber,
            _data: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            assert.isString('_operator', _operator);
            assert.isString('_from', _from);
            assert.isBigNumber('_tokenId', _tokenId);
            assert.isString('_data', _data);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = this as any as IERC721ReceiverContract;
            const encodedData = self._strictEncodeArguments('onERC721Received(address,address,uint256,bytes)', [_operator,
        _from,
        _tokenId,
        _data
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
            const abiEncoder = self._lookupAbiEncoder('onERC721Received(address,address,uint256,bytes)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
                _operator: string,
                _from: string,
                _tokenId: BigNumber,
                _data: string,
            ): string {
            assert.isString('_operator', _operator);
            assert.isString('_from', _from);
            assert.isBigNumber('_tokenId', _tokenId);
            assert.isString('_data', _data);
            const self = this as any as IERC721ReceiverContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('onERC721Received(address,address,uint256,bytes)', [_operator,
        _from,
        _tokenId,
        _data
        ]);
            return abiEncodedTransactionData;
        },
    };
    public static async deployFrom0xArtifactAsync(
        artifact: ContractArtifact | SimpleContractArtifact,
        supportedProvider: SupportedProvider,
        txDefaults: Partial<TxData>,
    ): Promise<IERC721ReceiverContract> {
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
        return IERC721ReceiverContract.deployAsync(bytecode, abi, provider, txDefaults, );
    }
    public static async deployAsync(
        bytecode: string,
        abi: ContractAbi,
        supportedProvider: SupportedProvider,
        txDefaults: Partial<TxData>,
    ): Promise<IERC721ReceiverContract> {
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
        logUtils.log(`IERC721Receiver successfully deployed at ${txReceipt.contractAddress}`);
        const contractInstance = new IERC721ReceiverContract(txReceipt.contractAddress as string, provider, txDefaults);
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
                        name: '_operator',
                        type: 'address',
                        
                    },
                    {
                        name: '_from',
                        type: 'address',
                        
                    },
                    {
                        name: '_tokenId',
                        type: 'uint256',
                        
                    },
                    {
                        name: '_data',
                        type: 'bytes',
                        
                    },
                ],
                name: 'onERC721Received',
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
        super('IERC721Receiver', IERC721ReceiverContract.ABI(), address, supportedProvider, txDefaults);
        classUtils.bindAll(this, ['_abiEncoderByFunctionSignature', 'address', '_web3Wrapper']);
    }
} 

// tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method no-parameter-reassignment no-consecutive-blank-lines ordered-imports align
// tslint:enable:trailing-comma whitespace no-trailing-whitespace
