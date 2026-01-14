/******/ (() => { // webpackBootstrap
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
const core = reqiure('@actions/core')
const github = reqiure('@actions/github')

try {
    const jsNum1 = core.getInput('num1')
    const jsNum2 = core.getInput('num2')
    result = parseInt(jsNum1) + parseInt(jsNum2)
    core.setOutput(result)
} catch (error) {
    core.setFailed(Error.message)
}
module.exports = __webpack_exports__;
/******/ })()
;