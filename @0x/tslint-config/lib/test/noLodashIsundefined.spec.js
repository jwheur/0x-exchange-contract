"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("assert");
var noLodashIsundefinedRule_1 = require("../rules/noLodashIsundefinedRule");
var lintrunner_1 = require("./lintrunner");
var rule = 'no-lodash-isundefined';
describe('noLodashIsundefinedRule', function () {
    it("should not fail built-in", function () {
        var src = "if (someObj === undefined) { // do stuff }";
        var result = lintrunner_1.helper(src, rule);
        assert.equal(result.errorCount, 0);
    });
    it("should not fail custom isUndefined", function () {
        var src = "if (isUndefined(someObj)) { // do stuff }";
        var result = lintrunner_1.helper(src, rule);
        assert.equal(result.errorCount, 0);
    });
    it("should fail _.isUndefined with simple identifier", function () {
        var src = "if (_.isUndefined(obj)) { // do stuff }";
        var result = lintrunner_1.helper(src, rule);
        assert.equal(result.errorCount, 1);
    });
    it("should fail _.isUndefined with property access expression", function () {
        var src = "if (_.isUndefined(this.property)) { // do stuff }";
        var result = lintrunner_1.helper(src, rule);
        assert.equal(result.errorCount, 1);
    });
    it("should fail _.isUndefined with element access expression", function () {
        var src = "if (_.isUndefined(someArray[nested])) { // do stuff }";
        var result = lintrunner_1.helper(src, rule);
        assert.equal(result.errorCount, 1);
    });
    it("should fail _.isUndefined with property and element access expression", function () {
        var src = "if (_.isUndefined(someObj.someArray[nested])) { // do stuff }";
        var result = lintrunner_1.helper(src, rule);
        assert.equal(result.errorCount, 1);
    });
    it("should fail with the right message", function () {
        var src = "if (_.isUndefined(obj)) { // do stuff }";
        var failure = lintrunner_1.helper(src, rule).failures[0];
        assert.equal(failure.getFailure(), noLodashIsundefinedRule_1.Rule.FAILURE_STRING);
    });
});
describe('noLodashIsundefined fixer', function () {
    it('should fix simple identifier', function () {
        var src = "if (_.isUndefined(obj)) { // do stuff }";
        var expected = "if (obj === undefined) { // do stuff }";
        var actual = lintrunner_1.getFixedResult(src, rule);
        var result = lintrunner_1.helper(src, rule);
        assert.equal(result.errorCount, 1);
        assert.equal(actual, expected);
    });
    it('should fix property access expression', function () {
        var src = "if (_.isUndefined(this.property)) { // do stuff }";
        var expected = "if (this.property === undefined) { // do stuff }";
        var actual = lintrunner_1.getFixedResult(src, rule);
        var result = lintrunner_1.helper(src, rule);
        assert.equal(result.errorCount, 1);
        assert.equal(actual, expected);
    });
    it('should fix element access expression', function () {
        var src = "if (_.isUndefined(someArray[nested])) { // do stuff }";
        var expected = "if (someArray[nested] === undefined) { // do stuff }";
        var actual = lintrunner_1.getFixedResult(src, rule);
        var result = lintrunner_1.helper(src, rule);
        assert.equal(result.errorCount, 1);
        assert.equal(actual, expected);
    });
    it('should fix property and element access expression', function () {
        var src = "if (_.isUndefined(someObj.someArray[nested])) { // do stuff }";
        var expected = "if (someObj.someArray[nested] === undefined) { // do stuff }";
        var actual = lintrunner_1.getFixedResult(src, rule);
        var result = lintrunner_1.helper(src, rule);
        assert.equal(result.errorCount, 1);
        assert.equal(actual, expected);
    });
    it('should fix negation', function () {
        var src = "if (!_.isUndefined(someObj)) { // do stuff }";
        var expected = "if (someObj !== undefined) { // do stuff }";
        var actual = lintrunner_1.getFixedResult(src, rule);
        var result = lintrunner_1.helper(src, rule);
        assert.equal(result.errorCount, 1);
        assert.equal(actual, expected);
    });
    it('should fix negation with property and element access expression', function () {
        var src = "if (!_.isUndefined(someObj.someArray[nested])) { // do stuff }";
        var expected = "if (someObj.someArray[nested] !== undefined) { // do stuff }";
        var actual = lintrunner_1.getFixedResult(src, rule);
        var result = lintrunner_1.helper(src, rule);
        assert.equal(result.errorCount, 1);
        assert.equal(actual, expected);
    });
});
//# sourceMappingURL=noLodashIsundefined.spec.js.map