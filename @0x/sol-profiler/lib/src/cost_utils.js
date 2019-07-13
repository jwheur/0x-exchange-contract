"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var sol_tracing_utils_1 = require("@0x/sol-tracing-utils");
var utils_1 = require("@0x/utils");
var ethereum_types_1 = require("ethereum-types");
var ethereumjs_util_1 = require("ethereumjs-util");
var _ = require("lodash");
var ZERO_BYTE_CALL_DATA_COST = 4;
var NON_ZERO_BYTE_CALL_DATA_COST = 68;
var WORD_SIZE = 32;
var G_MEMORY = 3;
var G_QUAD_COEF = 512;
var HEX_BASE = 16;
var G_COPY = 3;
exports.costUtils = {
    reportCallDataCost: function (traceInfo) {
        if (traceInfo.dataIfExists === undefined) {
            // No call data to report
            return 0;
        }
        var callData = traceInfo.dataIfExists;
        var callDataBuf = Buffer.from(ethereumjs_util_1.stripHexPrefix(callData), 'hex');
        var _a = _.countBy(callDataBuf, function (byte) { return byte === 0; }), zeroBytesCountIfExist = _a.true, nonZeroBytesCountIfExist = _a.false;
        var zeroBytesCost = (zeroBytesCountIfExist || 0) * ZERO_BYTE_CALL_DATA_COST;
        var nonZeroBytesCost = (nonZeroBytesCountIfExist || 0) * NON_ZERO_BYTE_CALL_DATA_COST;
        var callDataCost = zeroBytesCost + nonZeroBytesCost;
        utils_1.logUtils.header('Call data breakdown', '-');
        utils_1.logUtils.table({
            'call data size (bytes)': callData.length,
            callDataCost: callDataCost,
            zeroBytesCost: zeroBytesCost,
            nonZeroBytesCost: nonZeroBytesCost,
            zeroBytesCountIfExist: zeroBytesCountIfExist,
            nonZeroBytesCountIfExist: nonZeroBytesCountIfExist,
        });
        return callDataCost;
    },
    reportMemoryCost: function (traceInfo) {
        var structLogs = traceInfo.trace.structLogs;
        var MEMORY_OPCODES = [ethereum_types_1.OpCode.MLoad, ethereum_types_1.OpCode.MStore, ethereum_types_1.OpCode.MStore8];
        var CALL_DATA_OPCODES = [ethereum_types_1.OpCode.CallDataCopy];
        var memoryLogs = _.filter(structLogs, function (structLog) {
            return _.includes(__spread(MEMORY_OPCODES, CALL_DATA_OPCODES), structLog.op);
        });
        var memoryLocationsAccessed = _.map(memoryLogs, function (structLog) {
            if (_.includes(CALL_DATA_OPCODES, structLog.op)) {
                var memoryOffsetStackOffset = sol_tracing_utils_1.constants.opCodeToParamToStackOffset[structLog.op].memoryOffset;
                var lengthStackOffset = sol_tracing_utils_1.constants.opCodeToParamToStackOffset[structLog.op].length;
                var memOffset = parseInt(structLog.stack[structLog.stack.length - memoryOffsetStackOffset - 1], HEX_BASE);
                var length_1 = parseInt(structLog.stack[structLog.stack.length - lengthStackOffset - 1], HEX_BASE);
                return memOffset + length_1;
            }
            else {
                var memoryLocationStackOffset = sol_tracing_utils_1.constants.opCodeToParamToStackOffset[structLog.op].offset;
                return parseInt(structLog.stack[structLog.stack.length - memoryLocationStackOffset - 1], HEX_BASE);
            }
        });
        var highestMemoryLocationAccessed = _.max(memoryLocationsAccessed);
        return exports.costUtils._printMemoryCost(highestMemoryLocationAccessed);
    },
    reportCopyingCost: function (traceInfo) {
        var structLogs = traceInfo.trace.structLogs;
        var COPY_OPCODES = [ethereum_types_1.OpCode.CallDataCopy];
        var copyLogs = _.filter(structLogs, function (structLog) { return _.includes(COPY_OPCODES, structLog.op); });
        var copyCosts = _.map(copyLogs, function (structLog) {
            var lengthStackOffset = sol_tracing_utils_1.constants.opCodeToParamToStackOffset[structLog.op].length;
            var length = parseInt(structLog.stack[structLog.stack.length - lengthStackOffset - 1], HEX_BASE);
            return Math.ceil(length / WORD_SIZE) * G_COPY;
        });
        return _.sum(copyCosts);
    },
    reportOpcodesCost: function (traceInfo) {
        var structLogs = traceInfo.trace.structLogs;
        var gasCosts = _.map(structLogs, function (structLog) { return structLog.gasCost; });
        var gasCost = _.sum(gasCosts);
        return gasCost;
    },
    _printMemoryCost: function (highestMemoryLocationAccessed) {
        if (highestMemoryLocationAccessed === undefined) {
            return 0;
        }
        var memoryWordsUsed = Math.ceil((highestMemoryLocationAccessed + WORD_SIZE) / WORD_SIZE);
        var linearMemoryCost = G_MEMORY * memoryWordsUsed;
        var quadraticMemoryCost = Math.floor((memoryWordsUsed * memoryWordsUsed) / G_QUAD_COEF);
        var memoryCost = linearMemoryCost + quadraticMemoryCost;
        utils_1.logUtils.header('Memory breakdown', '-');
        utils_1.logUtils.table({
            'memoryCost = linearMemoryCost + quadraticMemoryCost': memoryCost,
            linearMemoryCost: linearMemoryCost,
            quadraticMemoryCost: quadraticMemoryCost,
            highestMemoryLocationAccessed: highestMemoryLocationAccessed,
            memoryWordsUsed: memoryWordsUsed,
        });
        return memoryCost;
    },
};
//# sourceMappingURL=cost_utils.js.map