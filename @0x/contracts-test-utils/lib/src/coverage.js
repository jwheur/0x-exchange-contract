"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dev_utils_1 = require("@0x/dev-utils");
var sol_coverage_1 = require("@0x/sol-coverage");
var coverageSubprovider;
exports.coverage = {
    getCoverageSubproviderSingleton: function () {
        if (coverageSubprovider === undefined) {
            coverageSubprovider = exports.coverage._getCoverageSubprovider();
        }
        return coverageSubprovider;
    },
    _getCoverageSubprovider: function () {
        var defaultFromAddress = dev_utils_1.devConstants.TESTRPC_FIRST_ADDRESS;
        var solCompilerArtifactAdapter = new sol_coverage_1.SolCompilerArtifactAdapter();
        var coverageSubproviderConfig = {
            isVerbose: true,
            ignoreFilesGlobs: ['**/node_modules/**', '**/interfaces/**', '**/test/**'],
        };
        var subprovider = new sol_coverage_1.CoverageSubprovider(solCompilerArtifactAdapter, defaultFromAddress, coverageSubproviderConfig);
        return subprovider;
    },
};
//# sourceMappingURL=coverage.js.map