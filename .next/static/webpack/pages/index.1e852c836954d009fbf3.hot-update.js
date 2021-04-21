webpackHotUpdate_N_E("pages/index",{

/***/ "./src/styles/pages/Home.ts":
/*!**********************************!*\
  !*** ./src/styles/pages/Home.ts ***!
  \**********************************/
/*! exports provided: Container, Title, Description, Input, Label, DivInput, Canvas, DivCanvas, DragActive, DragActiveTitle, ButtonFont, ButtonColorRed, ButtonColorWhite, ButtonColorBlack, ButtonSave, ButtonFontDiv, ButtonColorDiv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Title\", function() { return Title; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Description\", function() { return Description; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Input\", function() { return Input; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Label\", function() { return Label; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DivInput\", function() { return DivInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Canvas\", function() { return Canvas; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DivCanvas\", function() { return DivCanvas; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DragActive\", function() { return DragActive; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DragActiveTitle\", function() { return DragActiveTitle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ButtonFont\", function() { return ButtonFont; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ButtonColorRed\", function() { return ButtonColorRed; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ButtonColorWhite\", function() { return ButtonColorWhite; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ButtonColorBlack\", function() { return ButtonColorBlack; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ButtonSave\", function() { return ButtonSave; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ButtonFontDiv\", function() { return ButtonFontDiv; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ButtonColorDiv\", function() { return ButtonColorDiv; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"Home__Container\",\n  componentId: \"heizgz-0\"\n})([\"width:100vw;height:100vh;display:flex;justify-content:flex-start;align-items:center;flex-direction:column;\"]);\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h1.withConfig({\n  displayName: \"Home__Title\",\n  componentId: \"heizgz-1\"\n})([\"font-size:54px;color:\", \";margin-top:40px;font-family:'Zen Dots'\"], function (props) {\n  return props.theme.colors.primary;\n});\nvar Description = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].p.withConfig({\n  displayName: \"Home__Description\",\n  componentId: \"heizgz-2\"\n})([\"margin-top:24px;font-size:24px;line-height:32px;\"]);\nvar Input = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].input.attrs({\n  id: \"upperText\",\n  name: \"upperText\"\n}).withConfig({\n  displayName: \"Home__Input\",\n  componentId: \"heizgz-3\"\n})([\"margin:4px;font-size:24px;line-height:32px;border-radius:10px;\"]);\nvar Label = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].label.withConfig({\n  displayName: \"Home__Label\",\n  componentId: \"heizgz-4\"\n})([\"color:#ddd;align-self:center;\"]);\nvar DivInput = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"Home__DivInput\",\n  componentId: \"heizgz-5\"\n})([\"display:flex;flex-direction:column;justify-content:space-between;\"]);\nvar Canvas = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].canvas.withConfig({\n  displayName: \"Home__Canvas\",\n  componentId: \"heizgz-6\"\n})([\"background:#666;margin:10px;width:500px;border-radius:10px;\"]);\nvar DivCanvas = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"Home__DivCanvas\",\n  componentId: \"heizgz-7\"\n})([\"\"]);\nvar DragActive = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"Home__DragActive\",\n  componentId: \"heizgz-8\"\n})([\"background:#ff6600;margin:10px;width:500px;height:250px;border-radius:10px;\"]);\nvar DragActiveTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"Home__DragActiveTitle\",\n  componentId: \"heizgz-9\"\n})([\"text-align:center;color:#333;align-items:center;\"]);\nvar ButtonFont = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button.withConfig({\n  displayName: \"Home__ButtonFont\",\n  componentId: \"heizgz-10\"\n})([\"border-radius:10px;height:20px;width:100px;\"]);\nvar ButtonColorRed = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button.withConfig({\n  displayName: \"Home__ButtonColorRed\",\n  componentId: \"heizgz-11\"\n})([\"border-radius:10px;height:20px;width:100px;background:'red'\"]);\nvar ButtonColorWhite = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button.withConfig({\n  displayName: \"Home__ButtonColorWhite\",\n  componentId: \"heizgz-12\"\n})([\"border-radius:10px;height:20px;width:100px;background:'white'\"]);\nvar ButtonColorBlack = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button.withConfig({\n  displayName: \"Home__ButtonColorBlack\",\n  componentId: \"heizgz-13\"\n})([\"border-radius:10px;height:20px;width:100px;background:'Black'\"]);\nvar ButtonSave = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button.withConfig({\n  displayName: \"Home__ButtonSave\",\n  componentId: \"heizgz-14\"\n})([\"border-radius:10px;height:20px;width:10px;\"]);\nvar ButtonFontDiv = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"Home__ButtonFontDiv\",\n  componentId: \"heizgz-15\"\n})([\"flex-direction:row;justify-content:space-around;padding:2%;\"]);\nvar ButtonColorDiv = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"Home__ButtonColorDiv\",\n  componentId: \"heizgz-16\"\n})([\"flex-direction:row;justify-content:space-around;padding:2%;\"]);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9wYWdlcy9Ib21lLnRzP2JmNzciXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiVGl0bGUiLCJoMSIsInByb3BzIiwidGhlbWUiLCJjb2xvcnMiLCJwcmltYXJ5IiwiRGVzY3JpcHRpb24iLCJwIiwiSW5wdXQiLCJpbnB1dCIsImF0dHJzIiwiaWQiLCJuYW1lIiwiTGFiZWwiLCJsYWJlbCIsIkRpdklucHV0IiwiQ2FudmFzIiwiY2FudmFzIiwiRGl2Q2FudmFzIiwiRHJhZ0FjdGl2ZSIsIkRyYWdBY3RpdmVUaXRsZSIsIkJ1dHRvbkZvbnQiLCJidXR0b24iLCJCdXR0b25Db2xvclJlZCIsIkJ1dHRvbkNvbG9yV2hpdGUiLCJCdXR0b25Db2xvckJsYWNrIiwiQnV0dG9uU2F2ZSIsIkJ1dHRvbkZvbnREaXYiLCJCdXR0b25Db2xvckRpdiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLElBQU1BLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxrSEFBZjtBQVVBLElBQU1DLEtBQUssR0FBR0YseURBQU0sQ0FBQ0csRUFBVjtBQUFBO0FBQUE7QUFBQSx5RUFFUCxVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJDLE9BQXZCO0FBQUEsQ0FGRSxDQUFYO0FBT0EsSUFBTUMsV0FBVyxHQUFHUix5REFBTSxDQUFDUyxDQUFWO0FBQUE7QUFBQTtBQUFBLHdEQUFqQjtBQU1BLElBQU1DLEtBQUssR0FBR1YseURBQU0sQ0FBQ1csS0FBUCxDQUFhQyxLQUFiLENBQW1CO0FBQ3RDQyxJQUFFLEVBQUUsV0FEa0M7QUFFdENDLE1BQUksRUFBRTtBQUZnQyxDQUFuQixDQUFIO0FBQUE7QUFBQTtBQUFBLHNFQUFYO0FBVUEsSUFBTUMsS0FBSyxHQUFHZix5REFBTSxDQUFDZ0IsS0FBVjtBQUFBO0FBQUE7QUFBQSxxQ0FBWDtBQUtBLElBQU1DLFFBQVEsR0FBR2pCLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEseUVBQWQ7QUFNQSxJQUFNaUIsTUFBTSxHQUFHbEIseURBQU0sQ0FBQ21CLE1BQVY7QUFBQTtBQUFBO0FBQUEsbUVBQVo7QUFPQSxJQUFNQyxTQUFTLEdBQUdwQix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLFFBQWY7QUFJQSxJQUFNb0IsVUFBVSxHQUFHckIseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxtRkFBaEI7QUFRQSxJQUFNcUIsZUFBZSxHQUFHdEIseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx3REFBckI7QUFNQSxJQUFNc0IsVUFBVSxHQUFHdkIseURBQU0sQ0FBQ3dCLE1BQVY7QUFBQTtBQUFBO0FBQUEsbURBQWhCO0FBTUEsSUFBTUMsY0FBYyxHQUFHekIseURBQU0sQ0FBQ3dCLE1BQVY7QUFBQTtBQUFBO0FBQUEsbUVBQXBCO0FBT0EsSUFBTUUsZ0JBQWdCLEdBQUcxQix5REFBTSxDQUFDd0IsTUFBVjtBQUFBO0FBQUE7QUFBQSxxRUFBdEI7QUFPQSxJQUFNRyxnQkFBZ0IsR0FBRzNCLHlEQUFNLENBQUN3QixNQUFWO0FBQUE7QUFBQTtBQUFBLHFFQUF0QjtBQU9BLElBQU1JLFVBQVUsR0FBRzVCLHlEQUFNLENBQUN3QixNQUFWO0FBQUE7QUFBQTtBQUFBLGtEQUFoQjtBQU1BLElBQU1LLGFBQWEsR0FBRzdCLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsbUVBQW5CO0FBS0EsSUFBTTZCLGNBQWMsR0FBRzlCLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsbUVBQXBCIiwiZmlsZSI6Ii4vc3JjL3N0eWxlcy9wYWdlcy9Ib21lLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5gXG5cbmV4cG9ydCBjb25zdCBUaXRsZSA9IHN0eWxlZC5oMWBcbiAgZm9udC1zaXplOiA1NHB4O1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMucHJpbWFyeX07XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIGZvbnQtZmFtaWx5OiAnWmVuIERvdHMnXG5gXG5cbmV4cG9ydCBjb25zdCBEZXNjcmlwdGlvbiA9IHN0eWxlZC5wYFxuICBtYXJnaW4tdG9wOiAyNHB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4OyAgXG5gXG5cbmV4cG9ydCBjb25zdCBJbnB1dCA9IHN0eWxlZC5pbnB1dC5hdHRycyh7XG4gIGlkOiBcInVwcGVyVGV4dFwiLFxuICBuYW1lOiBcInVwcGVyVGV4dFwiLFxufSlgXG4gIG1hcmdpbjogNHB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4OyAgXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5gXG5cbmV4cG9ydCBjb25zdCBMYWJlbCA9IHN0eWxlZC5sYWJlbGBcbiAgY29sb3I6ICNkZGQ7ICBcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuYFxuXG5leHBvcnQgY29uc3QgRGl2SW5wdXQgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5gXG5cbmV4cG9ydCBjb25zdCBDYW52YXMgPSBzdHlsZWQuY2FudmFzYFxuICBiYWNrZ3JvdW5kOiAjNjY2O1xuICBtYXJnaW46IDEwcHg7XG4gIHdpZHRoOiA1MDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbmBcblxuZXhwb3J0IGNvbnN0IERpdkNhbnZhcyA9IHN0eWxlZC5kaXZgXG4gIFxuYFxuXG5leHBvcnQgY29uc3QgRHJhZ0FjdGl2ZSA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6ICNmZjY2MDA7XG4gIG1hcmdpbjogMTBweDtcbiAgd2lkdGg6IDUwMHB4O1xuICBoZWlnaHQ6IDI1MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuYFxuXG5leHBvcnQgY29uc3QgRHJhZ0FjdGl2ZVRpdGxlID0gc3R5bGVkLmRpdmBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzMzMztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmBcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbkZvbnQgPSBzdHlsZWQuYnV0dG9uYFxuYm9yZGVyLXJhZGl1czogMTBweDtcbmhlaWdodDogMjBweDtcbndpZHRoOiAxMDBweDtcbmBcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbkNvbG9yUmVkID0gc3R5bGVkLmJ1dHRvbmBcbmJvcmRlci1yYWRpdXM6IDEwcHg7XG5oZWlnaHQ6IDIwcHg7XG53aWR0aDogMTAwcHg7XG5iYWNrZ3JvdW5kOiAncmVkJ1xuYFxuXG5leHBvcnQgY29uc3QgQnV0dG9uQ29sb3JXaGl0ZSA9IHN0eWxlZC5idXR0b25gXG5ib3JkZXItcmFkaXVzOiAxMHB4O1xuaGVpZ2h0OiAyMHB4O1xud2lkdGg6IDEwMHB4O1xuYmFja2dyb3VuZDogJ3doaXRlJ1xuYFxuXG5leHBvcnQgY29uc3QgQnV0dG9uQ29sb3JCbGFjayA9IHN0eWxlZC5idXR0b25gXG5ib3JkZXItcmFkaXVzOiAxMHB4O1xuaGVpZ2h0OiAyMHB4O1xud2lkdGg6IDEwMHB4O1xuYmFja2dyb3VuZDogJ0JsYWNrJ1xuYFxuXG5leHBvcnQgY29uc3QgQnV0dG9uU2F2ZSA9IHN0eWxlZC5idXR0b25gXG5ib3JkZXItcmFkaXVzOiAxMHB4O1xuaGVpZ2h0OiAyMHB4O1xud2lkdGg6IDEwcHg7XG5gXG5cbmV4cG9ydCBjb25zdCBCdXR0b25Gb250RGl2ID0gc3R5bGVkLmRpdmBcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHBhZGRpbmc6IDIlO1xuYFxuZXhwb3J0IGNvbnN0IEJ1dHRvbkNvbG9yRGl2ID0gc3R5bGVkLmRpdmBcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHBhZGRpbmc6IDIlO1xuYFxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/styles/pages/Home.ts\n");

/***/ })

})