"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const script = document.createElement(\"script\");\n        script.src = \"/script.js\";\n        script.async = true;\n        document.body.appendChild(script);\n        return ()=>{\n            document.body.removeChild(script); // Cleanup on unmount\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Cache Simulator\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kaitlyntighe/sp/pages/index.js\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"stylesheet\",\n                        href: \"/styles.css\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kaitlyntighe/sp/pages/index.js\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kaitlyntighe/sp/pages/index.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"app\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Cache Simulator (FA/LRU)\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kaitlyntighe/sp/pages/index.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Initialization\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kaitlyntighe/sp/pages/index.js\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"input-form\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"form-group left-align\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"block-size\",\n                                        children: \"Block Size:\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kaitlyntighe/sp/pages/index.js\",\n                                        lineNumber: 27,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        id: \"block-size\",\n                                        name: \"block-size\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kaitlyntighe/sp/pages/index.js\",\n                                        lineNumber: 28,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kaitlyntighe/sp/pages/index.js\",\n                                lineNumber: 26,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"form-group\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"main-memory\",\n                                        children: \"Main Memory Size:\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kaitlyntighe/sp/pages/index.js\",\n                                        lineNumber: 32,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"input-group\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"text\",\n                                                id: \"main-memory\",\n                                                name: \"main-memory\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/kaitlyntighe/sp/pages/index.js\",\n                                                lineNumber: 34,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                                id: \"main-memory-type\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                        value: \"blocks\",\n                                                        children: \"blocks\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/kaitlyntighe/sp/pages/index.js\",\n                                                        lineNumber: 36,\n                                                        columnNumber: 17\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                        value: \"words\",\n                                                        children: \"words\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/kaitlyntighe/sp/pages/index.js\",\n                                                        lineNumber: 37,\n                                                        columnNumber: 17\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/kaitlyntighe/sp/pages/index.js\",\n                                                lineNumber: 35,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/kaitlyntighe/sp/pages/index.js\",\n                                        lineNumber: 33,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kaitlyntighe/sp/pages/index.js\",\n                                lineNumber: 31,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"form-group\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"cache-memory\",\n                                        children: \"Cache Memory Size:\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kaitlyntighe/sp/pages/index.js\",\n                                        lineNumber: 43,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"input-group\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"text\",\n                                                id: \"cache-memory\",\n                                                name: \"cache-memory\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/kaitlyntighe/sp/pages/index.js\",\n                                                lineNumber: 45,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                                id: \"cache-memory-type\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                        value: \"blocks\",\n                                                        children: \"blocks\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/kaitlyntighe/sp/pages/index.js\",\n                                                        lineNumber: 47,\n                                                        columnNumber: 17\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                        value: \"words\",\n                                                        children: \"words\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/kaitlyntighe/sp/pages/index.js\",\n                                                        lineNumber: 48,\n                                                        columnNumber: 17\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/kaitlyntighe/sp/pages/index.js\",\n                                                lineNumber: 46,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/kaitlyntighe/sp/pages/index.js\",\n                                        lineNumber: 44,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kaitlyntighe/sp/pages/index.js\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"form-group\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"program-flow\",\n                                        children: \"Program Flow (e.g., 0, 2, 4, 0, 2, 6):\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kaitlyntighe/sp/pages/index.js\",\n                                        lineNumber: 54,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"input-group\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"text\",\n                                                id: \"program-flow\",\n                                                name: \"program-flow\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/kaitlyntighe/sp/pages/index.js\",\n                                                lineNumber: 56,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                                id: \"program-flow-type\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                        value: \"blocks\",\n                                                        children: \"blocks\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/kaitlyntighe/sp/pages/index.js\",\n                                                        lineNumber: 58,\n                                                        columnNumber: 17\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                        value: \"words\",\n                                                        children: \"words\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/kaitlyntighe/sp/pages/index.js\",\n                                                        lineNumber: 59,\n                                                        columnNumber: 17\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/kaitlyntighe/sp/pages/index.js\",\n                                                lineNumber: 57,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/kaitlyntighe/sp/pages/index.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kaitlyntighe/sp/pages/index.js\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"button\",\n                                id: \"simulate-button\",\n                                className: \"simulate-button\",\n                                children: \"Simulate\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kaitlyntighe/sp/pages/index.js\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kaitlyntighe/sp/pages/index.js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"output\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"Results\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kaitlyntighe/sp/pages/index.js\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                id: \"hits\",\n                                children: \"Cache Hits: \"\n                            }, void 0, false, {\n                                fileName: \"/Users/kaitlyntighe/sp/pages/index.js\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                id: \"misses\",\n                                children: \"Cache Misses: \"\n                            }, void 0, false, {\n                                fileName: \"/Users/kaitlyntighe/sp/pages/index.js\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                id: \"miss-penalty-output\",\n                                children: \"Miss Penalty: \"\n                            }, void 0, false, {\n                                fileName: \"/Users/kaitlyntighe/sp/pages/index.js\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                id: \"average-access-time\",\n                                children: \"Average Memory Access Time: \"\n                            }, void 0, false, {\n                                fileName: \"/Users/kaitlyntighe/sp/pages/index.js\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                id: \"total-access-time\",\n                                children: \"Total Memory Access Time: \"\n                            }, void 0, false, {\n                                fileName: \"/Users/kaitlyntighe/sp/pages/index.js\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"Cache Snapshot\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kaitlyntighe/sp/pages/index.js\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                                id: \"cache-snapshot\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kaitlyntighe/sp/pages/index.js\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"button\",\n                                id: \"download-results\",\n                                children: \"Download Results\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kaitlyntighe/sp/pages/index.js\",\n                                lineNumber: 75,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kaitlyntighe/sp/pages/index.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kaitlyntighe/sp/pages/index.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U1AsSUFBRzswQ0FBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3REO0dBNUV3QmQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgIHNjcmlwdC5zcmMgPSAnL3NjcmlwdC5qcyc7XG4gICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzY3JpcHQpOyAvLyBDbGVhbnVwIG9uIHVubW91bnRcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DYWNoZSBTaW11bGF0b3I8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9zdHlsZXMuY3NzXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgaWQ9XCJhcHBcIj5cbiAgICAgICAgPGgxPkNhY2hlIFNpbXVsYXRvciAoRkEvTFJVKTwvaDE+XG4gICAgICAgIDxoMj5Jbml0aWFsaXphdGlvbjwvaDI+XG4gICAgICAgIDxkaXYgaWQ9XCJpbnB1dC1mb3JtXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGxlZnQtYWxpZ25cIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYmxvY2stc2l6ZVwiPkJsb2NrIFNpemU6PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiYmxvY2stc2l6ZVwiIG5hbWU9XCJibG9jay1zaXplXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJtYWluLW1lbW9yeVwiPk1haW4gTWVtb3J5IFNpemU6PC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJtYWluLW1lbW9yeVwiIG5hbWU9XCJtYWluLW1lbW9yeVwiIC8+XG4gICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJtYWluLW1lbW9yeS10eXBlXCI+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImJsb2Nrc1wiPmJsb2Nrczwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ3b3Jkc1wiPndvcmRzPC9vcHRpb24+XG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY2FjaGUtbWVtb3J5XCI+Q2FjaGUgTWVtb3J5IFNpemU6PC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJjYWNoZS1tZW1vcnlcIiBuYW1lPVwiY2FjaGUtbWVtb3J5XCIgLz5cbiAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cImNhY2hlLW1lbW9yeS10eXBlXCI+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImJsb2Nrc1wiPmJsb2Nrczwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ3b3Jkc1wiPndvcmRzPC9vcHRpb24+XG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicHJvZ3JhbS1mbG93XCI+UHJvZ3JhbSBGbG93IChlLmcuLCAwLCAyLCA0LCAwLCAyLCA2KTo8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInByb2dyYW0tZmxvd1wiIG5hbWU9XCJwcm9ncmFtLWZsb3dcIiAvPlxuICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwicHJvZ3JhbS1mbG93LXR5cGVcIj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYmxvY2tzXCI+YmxvY2tzPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIndvcmRzXCI+d29yZHM8L29wdGlvbj5cbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwic2ltdWxhdGUtYnV0dG9uXCIgY2xhc3NOYW1lPVwic2ltdWxhdGUtYnV0dG9uXCI+U2ltdWxhdGU8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9XCJvdXRwdXRcIj5cbiAgICAgICAgICA8aDI+UmVzdWx0czwvaDI+XG4gICAgICAgICAgPHAgaWQ9XCJoaXRzXCI+Q2FjaGUgSGl0czogPC9wPlxuICAgICAgICAgIDxwIGlkPVwibWlzc2VzXCI+Q2FjaGUgTWlzc2VzOiA8L3A+XG4gICAgICAgICAgPHAgaWQ9XCJtaXNzLXBlbmFsdHktb3V0cHV0XCI+TWlzcyBQZW5hbHR5OiA8L3A+XG4gICAgICAgICAgPHAgaWQ9XCJhdmVyYWdlLWFjY2Vzcy10aW1lXCI+QXZlcmFnZSBNZW1vcnkgQWNjZXNzIFRpbWU6IDwvcD5cbiAgICAgICAgICA8cCBpZD1cInRvdGFsLWFjY2Vzcy10aW1lXCI+VG90YWwgTWVtb3J5IEFjY2VzcyBUaW1lOiA8L3A+XG4gICAgICAgICAgPGgyPkNhY2hlIFNuYXBzaG90PC9oMj5cbiAgICAgICAgICA8cHJlIGlkPVwiY2FjaGUtc25hcHNob3RcIj48L3ByZT5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImRvd25sb2FkLXJlc3VsdHNcIj5Eb3dubG9hZCBSZXN1bHRzPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsInVzZUVmZmVjdCIsIkhvbWUiLCJzY3JpcHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJhc3luYyIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInJlbW92ZUNoaWxkIiwidGl0bGUiLCJsaW5rIiwicmVsIiwiaHJlZiIsImRpdiIsImlkIiwiaDEiLCJoMiIsImNsYXNzTmFtZSIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJzZWxlY3QiLCJvcHRpb24iLCJ2YWx1ZSIsImJ1dHRvbiIsInAiLCJwcmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});