"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Lint = require("tslint");
var ts = require("typescript");
var Rule = /** @class */ (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithFunction(sourceFile, walk);
    };
    Rule.FAILURE_STRING = "Use built-in equivalent";
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function walk(ctx) {
    // Recursively walk the AST starting with root node, `ctx.sourceFile`.
    // Call the function `cb` (defined below) for each child.
    return ts.forEachChild(ctx.sourceFile, cb);
    function cb(node) {
        if (node.kind === ts.SyntaxKind.CallExpression) {
            var firstChild = node.getChildAt(0, ctx.sourceFile);
            if (firstChild.kind === ts.SyntaxKind.PropertyAccessExpression &&
                firstChild.getText(ctx.sourceFile) === '_.isUndefined') {
                return ctx.addFailureAtNode(node, Rule.FAILURE_STRING, getFix(node));
            }
        }
        // Continue recursion into the AST by calling function `cb` for every child of the current node.
        return ts.forEachChild(node, cb);
    }
    function getFix(node) {
        var isNegated = node.parent.kind === ts.SyntaxKind.PrefixUnaryExpression && node.parent.getText(ctx.sourceFile)[0] === '!';
        var args = node.getChildAt(2, ctx.sourceFile).getText(ctx.sourceFile);
        if (isNegated) {
            return new Lint.Replacement(node.parent.getStart(ctx.sourceFile), node.parent.getWidth(ctx.sourceFile), args + " !== undefined");
        }
        else {
            return new Lint.Replacement(node.getStart(ctx.sourceFile), node.getWidth(ctx.sourceFile), args + " === undefined");
        }
    }
}
//# sourceMappingURL=noLodashIsundefinedRule.js.map