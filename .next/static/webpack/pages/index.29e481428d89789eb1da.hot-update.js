webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dropzone */ \"./node_modules/react-dropzone/dist/es/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/pages/Home */ \"./src/styles/pages/Home.ts\");\n/* harmony import */ var _context_Context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/Context */ \"./src/context/Context.tsx\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/hcls/Hevolsoft/meme-generator/src/pages/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\nvar Home = function Home() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_context_Context__WEBPACK_IMPORTED_MODULE_5__[\"Context\"]),\n      canvasRef = _useContext.canvasRef,\n      lowerText = _useContext.lowerText,\n      setLowerText = _useContext.setLowerText,\n      setUpperText = _useContext.setUpperText,\n      upperText = _useContext.upperText;\n\n  var _useDropzone = Object(react_dropzone__WEBPACK_IMPORTED_MODULE_2__[\"useDropzone\"])({}),\n      getRootProps = _useDropzone.getRootProps,\n      getInputProps = _useDropzone.getInputProps;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    title: 'Meme Generator',\n    description: 'Meme Generator or editing.'\n  }),\n      name = _useState[0];\n\n  return __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__[\"Container\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, \"Meme Generator\"), __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/favicon.ico\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  })), __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__[\"Title\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }\n  }, name.title), __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__[\"Description\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }\n  }, name.description), __jsx(\"main\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }\n  }, __jsx(\"canvas\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, getRootProps, {\n    ref: canvasRef,\n    style: {\n      background: 'red',\n      margin: 10\n    },\n    onClick: function onClick() {\n      alert(canvasRef.current);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, getInputProps, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 11\n    }\n  }))), __jsx(\"form\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 9\n    }\n  }, __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__[\"DivInput\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 11\n    }\n  }, __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__[\"Label\"], {\n    htmlFor: \"upperText\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 13\n    }\n  }, \"Title\"), __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__[\"Input\"], {\n    value: upperText,\n    onChange: function onChange(e) {\n      return setUpperText(e.target.value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 13\n    }\n  })), __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__[\"DivInput\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 11\n    }\n  }, __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__[\"Label\"], {\n    htmlFor: \"lowerText\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 13\n    }\n  }, \"Description\"), __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__[\"Input\"], {\n    value: lowerText,\n    onChange: function onChange(e) {\n      return setLowerText(e.target.value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 13\n    }\n  })))));\n};\n\n_s(Home, \"qc+L+ryUlbVbuNe5ayjCKfkL+4Q=\", false, function () {\n  return [react_dropzone__WEBPACK_IMPORTED_MODULE_2__[\"useDropzone\"]];\n});\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD80MWUwIl0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VDb250ZXh0IiwiQ29udGV4dCIsImNhbnZhc1JlZiIsImxvd2VyVGV4dCIsInNldExvd2VyVGV4dCIsInNldFVwcGVyVGV4dCIsInVwcGVyVGV4dCIsInVzZURyb3B6b25lIiwiZ2V0Um9vdFByb3BzIiwiZ2V0SW5wdXRQcm9wcyIsInVzZVN0YXRlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIm5hbWUiLCJiYWNrZ3JvdW5kIiwibWFyZ2luIiwiYWxlcnQiLCJjdXJyZW50IiwiZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFRQTs7QUFFQSxJQUFNQSxJQUFjLEdBQUcsU0FBakJBLElBQWlCLEdBQU07QUFBQTs7QUFBQSxvQkFPdkJDLHdEQUFVLENBQUNDLHdEQUFELENBUGE7QUFBQSxNQUV6QkMsU0FGeUIsZUFFekJBLFNBRnlCO0FBQUEsTUFHekJDLFNBSHlCLGVBR3pCQSxTQUh5QjtBQUFBLE1BSXpCQyxZQUp5QixlQUl6QkEsWUFKeUI7QUFBQSxNQUt6QkMsWUFMeUIsZUFLekJBLFlBTHlCO0FBQUEsTUFNekJDLFNBTnlCLGVBTXpCQSxTQU55Qjs7QUFBQSxxQkFRYUMsa0VBQVcsQ0FBQyxFQUFELENBUnhCO0FBQUEsTUFRbkJDLFlBUm1CLGdCQVFuQkEsWUFSbUI7QUFBQSxNQVFMQyxhQVJLLGdCQVFMQSxhQVJLOztBQUFBLGtCQVNaQyxzREFBUSxDQUFDO0FBQ3RCQyxTQUFLLEVBQUUsZ0JBRGU7QUFFdEJDLGVBQVcsRUFBRTtBQUZTLEdBQUQsQ0FUSTtBQUFBLE1BU3BCQyxJQVRvQjs7QUFhM0IsU0FDRSxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLEVBRUU7QUFBTSxPQUFHLEVBQUMsTUFBVjtBQUFpQixRQUFJLEVBQUMsY0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsRUFLRSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUUEsSUFBSSxDQUFDRixLQUFiLENBTEYsRUFNRSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBY0UsSUFBSSxDQUFDRCxXQUFuQixDQU5GLEVBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHVHQUNNSixZQUROO0FBRUUsT0FBRyxFQUFFTixTQUZQO0FBR0UsU0FBSyxFQUFFO0FBQUVZLGdCQUFVLEVBQUUsS0FBZDtBQUFxQkMsWUFBTSxFQUFFO0FBQTdCLEtBSFQ7QUFJRSxXQUFPLEVBQUUsbUJBQU07QUFDYkMsV0FBSyxDQUFDZCxTQUFTLENBQUNlLE9BQVgsQ0FBTDtBQUNELEtBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVFFLHNHQUFXUixhQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FSRixDQURGLEVBV0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFBTyxXQUFPLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFFRSxNQUFDLHdEQUFEO0FBQ0UsU0FBSyxFQUFFSCxTQURUO0FBRUUsWUFBUSxFQUFFLGtCQUFDWSxDQUFEO0FBQUEsYUFBT2IsWUFBWSxDQUFDYSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFuQjtBQUFBLEtBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsRUFRRSxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdEQUFEO0FBQU8sV0FBTyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixFQUVFLE1BQUMsd0RBQUQ7QUFDRSxTQUFLLEVBQUVqQixTQURUO0FBRUUsWUFBUSxFQUFFLGtCQUFDZSxDQUFEO0FBQUEsYUFBT2QsWUFBWSxDQUFDYyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFuQjtBQUFBLEtBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBUkYsQ0FYRixDQVJGLENBREY7QUF3Q0QsQ0FyREQ7O0dBQU1yQixJO1VBUW9DUSwwRDs7O0tBUnBDUixJO0FBdURTQSxtRUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZURyb3B6b25lIH0gZnJvbSAncmVhY3QtZHJvcHpvbmUnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmltcG9ydCB7XG4gIENvbnRhaW5lcixcbiAgVGl0bGUsXG4gIERlc2NyaXB0aW9uLFxuICBJbnB1dCxcbiAgTGFiZWwsXG4gIERpdklucHV0XG59IGZyb20gJy4uL3N0eWxlcy9wYWdlcy9Ib21lJ1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvQ29udGV4dCdcblxuY29uc3QgSG9tZTogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBjYW52YXNSZWYsXG4gICAgbG93ZXJUZXh0LFxuICAgIHNldExvd2VyVGV4dCxcbiAgICBzZXRVcHBlclRleHQsXG4gICAgdXBwZXJUZXh0XG4gIH0gPSB1c2VDb250ZXh0KENvbnRleHQpXG4gIGNvbnN0IHsgZ2V0Um9vdFByb3BzLCBnZXRJbnB1dFByb3BzIH0gPSB1c2VEcm9wem9uZSh7fSlcbiAgY29uc3QgW25hbWVdID0gdXNlU3RhdGUoe1xuICAgIHRpdGxlOiAnTWVtZSBHZW5lcmF0b3InLFxuICAgIGRlc2NyaXB0aW9uOiAnTWVtZSBHZW5lcmF0b3Igb3IgZWRpdGluZy4nXG4gIH0pXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+TWVtZSBHZW5lcmF0b3I8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8VGl0bGU+e25hbWUudGl0bGV9PC9UaXRsZT5cbiAgICAgIDxEZXNjcmlwdGlvbj57bmFtZS5kZXNjcmlwdGlvbn08L0Rlc2NyaXB0aW9uPlxuXG4gICAgICA8bWFpbj5cbiAgICAgICAgPGNhbnZhc1xuICAgICAgICAgIHsuLi5nZXRSb290UHJvcHN9XG4gICAgICAgICAgcmVmPXtjYW52YXNSZWZ9XG4gICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogJ3JlZCcsIG1hcmdpbjogMTAgfX1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBhbGVydChjYW52YXNSZWYuY3VycmVudCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxpbnB1dCB7Li4uZ2V0SW5wdXRQcm9wc30gLz5cbiAgICAgICAgPC9jYW52YXM+XG4gICAgICAgIDxmb3JtPlxuICAgICAgICAgIDxEaXZJbnB1dD5cbiAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwidXBwZXJUZXh0XCI+VGl0bGU8L0xhYmVsPlxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIHZhbHVlPXt1cHBlclRleHR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXBwZXJUZXh0KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9EaXZJbnB1dD5cbiAgICAgICAgICA8RGl2SW5wdXQ+XG4gICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cImxvd2VyVGV4dFwiPkRlc2NyaXB0aW9uPC9MYWJlbD5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICB2YWx1ZT17bG93ZXJUZXh0fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldExvd2VyVGV4dChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRGl2SW5wdXQ+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvbWFpbj5cblxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

})