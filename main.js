/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initWebsite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initWebsite */ \"./src/initWebsite.js\");\n\n\n(0,_initWebsite__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/initWebsite.js":
/*!****************************!*\
  !*** ./src/initWebsite.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createHeader = () => {\n    const header = document.createElement(\"div\");\n    header.classList.add(\"header\");\n\n    const restaurantName = document.createElement(\"h1\");\n    restaurantName.classList.add(\"restaurant-name\");\n    restaurantName.textContent = \"Pho Cuu Long\";\n\n    const headerDesc = document.createElement(\"p\");\n    headerDesc.textContent = \"Experience the Authentic Flavors of Vietnam\";\n    \n    header.appendChild(restaurantName);\n    header.appendChild(headerDesc);\n\n    return header;\n}\n\nconst createMain = () => {\n    const mainContent = document.createElement(\"div\");\n    mainContent.classList.add(\"main-content\");\n\n    const headline = document.createElement(\"h2\");\n    headline.textContent = \"Discover the Art of Vietnamese Cuisine\";\n\n    const restaurantDesc1 = document.createElement(\"p\");\n    restaurantDesc1.classList.add(\"desc-1\");\n    restaurantDesc1.textContent = \"Immerse yourself in the rich and vibrant culinary traditions of Vietnam. Our skilled chefs use the finest ingredients to create dishes that capture the essence of Vietnamese flavors, from savory pho to mouthwatering banh mi.\";\n\n    const restaurantDesc2 = document.createElement(\"p\");\n    restaurantDesc2.classList.add(\"desc-2\");\n    restaurantDesc2.textContent = \"Join us for an unforgettable dining experience that will transport you to the bustling streets of Hanoi, where each bite is a journey through Vietnam's diverse and delicious cuisine.\";\n\n    mainContent.appendChild(headline);\n    mainContent.appendChild(restaurantDesc1);\n    mainContent.appendChild(restaurantDesc2);\n\n    return mainContent;\n}\n\n\nconst initializeWebsite = () => {\n    const content = document.getElementById(\"content\");\n    \n    content.appendChild(createHeader());\n    content.appendChild(createMain());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeWebsite);\n\n//# sourceURL=webpack://restaurant-page/./src/initWebsite.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;