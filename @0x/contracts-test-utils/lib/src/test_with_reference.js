"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
var chai = require("chai");
var _ = require("lodash");
var chai_setup_1 = require("./chai_setup");
chai_setup_1.chaiSetup.configure();
var expect = chai.expect;
var Value = /** @class */ (function () {
    function Value(value) {
        this.value = value;
    }
    return Value;
}());
// tslint:disable-next-line: max-classes-per-file
var ErrorMessage = /** @class */ (function () {
    function ErrorMessage(message) {
        this.error = message;
    }
    return ErrorMessage;
}());
// TODO(albrow): This seems like a generic utility function that could exist in
// lodash. We should replace it by a library implementation, or move it to our
// own.
function evaluatePromiseAsync(promise) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, e_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    _a = Value.bind;
                    return [4 /*yield*/, promise];
                case 1: return [2 /*return*/, new (_a.apply(Value, [void 0, _b.sent()]))()];
                case 2:
                    e_1 = _b.sent();
                    return [2 /*return*/, new ErrorMessage(e_1.message)];
                case 3: return [2 /*return*/];
            }
        });
    });
}
/**
 * Tests the behavior of a test function by comparing it to the expected
 * behavior (defined by a reference function).
 *
 * First the reference function will be called to obtain an "expected result",
 * or if the reference function throws/rejects, an "expected error". Next, the
 * test function will be called to obtain an "actual result", or if the test
 * function throws/rejects, an "actual error". The test passes if at least one
 * of the following conditions is met:
 *
 * 1) Neither the reference function or the test function throw and the
 * "expected result" equals the "actual result".
 *
 * 2) Both the reference function and the test function throw and the "actual
 * error" message *contains* the "expected error" message.
 *
 * @param referenceFuncAsync a reference function implemented in pure
 * JavaScript/TypeScript which accepts N arguments and returns the "expected
 * result" or throws/rejects with the "expected error".
 * @param testFuncAsync a test function which, e.g., makes a call or sends a
 * transaction to a contract. It accepts the same N arguments returns the
 * "actual result" or throws/rejects with the "actual error".
 * @param values an array of N values, where each value corresponds in-order to
 * an argument to both the test function and the reference function.
 * @return A Promise that resolves if the test passes and rejects if the test
 * fails, according to the rules described above.
 */
function testWithReferenceFuncAsync(referenceFuncAsync, testFuncAsync, values) {
    return __awaiter(this, void 0, void 0, function () {
        var expected, actual;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, evaluatePromiseAsync(referenceFuncAsync.apply(void 0, __spread(values)))];
                case 1:
                    expected = _a.sent();
                    return [4 /*yield*/, evaluatePromiseAsync(testFuncAsync.apply(void 0, __spread(values)))];
                case 2:
                    actual = _a.sent();
                    // Compare behaviour
                    if (expected instanceof ErrorMessage) {
                        // If we expected an error, check if the actual error message contains the
                        // expected error message.
                        if (!(actual instanceof ErrorMessage)) {
                            throw new Error("Expected error containing " + expected.error + " but got no error\n\tTest case: " + _getTestCaseString(referenceFuncAsync, values));
                        }
                        expect(actual.error).to.contain(expected.error, actual.error + "\n\tTest case: " + _getTestCaseString(referenceFuncAsync, values));
                    }
                    else {
                        // If we do not expect an error, compare actual and expected directly.
                        expect(actual).to.deep.equal(expected, "Test case " + _getTestCaseString(referenceFuncAsync, values));
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.testWithReferenceFuncAsync = testWithReferenceFuncAsync;
function _getTestCaseString(referenceFuncAsync, values) {
    var paramNames = _getParameterNames(referenceFuncAsync);
    return JSON.stringify(_.zipObject(paramNames, values));
}
// Source: https://stackoverflow.com/questions/1007981/how-to-get-function-parameter-names-values-dynamically
function _getParameterNames(func) {
    return _.toString(func)
        .replace(/[/][/].*$/gm, '') // strip single-line comments
        .replace(/\s+/g, '') // strip white space
        .replace(/[/][*][^/*]*[*][/]/g, '') // strip multi-line comments
        .split('){', 1)[0]
        .replace(/^[^(]*[(]/, '') // extract the parameters
        .replace(/=[^,]+/g, '') // strip any ES6 defaults
        .split(',')
        .filter(Boolean); // split & filter [""]
}
//# sourceMappingURL=test_with_reference.js.map