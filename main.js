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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style */ \"./src/style.js\");\n\n\nconst createContact = () => {\n    const contact = document.createElement('div');\n    contact.classList.add('contact');\n  \n    const phoneNumber = document.createElement('p');\n    phoneNumber.textContent = '📞 123 456 789';\n  \n    const address = document.createElement('p');\n    address.textContent = '🏠 123 Jane Finch Street, Toronto, Canada';\n  \n    const restaurantLocation = document.createElement('img');\n    restaurantLocation.src = 'images/restaurant-location.png';\n    restaurantLocation.alt = 'Pho Cuu Long Restaurant';\n  \n    contact.appendChild(phoneNumber);\n    contact.appendChild(address);\n    contact.appendChild(restaurantLocation);\n  \n    (0,_style__WEBPACK_IMPORTED_MODULE_0__.styleContact)(contact, phoneNumber, address, restaurantLocation);\n    return contact;\n  }\n  \nconst loadContact = () => {\n    const main = document.querySelector(\".main-content\");\n    main.textContent = '';\n    main.appendChild(createContact());\n  }\n  \n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style */ \"./src/style.js\");\n\n\nconst createHome = () => {\n    const home = document.createElement(\"div\");\n    home.classList.add(\"home\");\n\n    const headline = document.createElement(\"h2\");\n    headline.classList.add(\"headline\");\n    headline.textContent = \"Discover the Art of Vietnamese Cuisine\";\n\n    const chefImage = document.createElement(\"img\");\n    const chefFig = document.createElement(\"figure\");\n    const imageCaption = document.createElement(\"figcaption\");\n    chefImage.src = \"/images/Chef.jpeg\";\n    chefImage.alt = \"Vietnamese Chef\";\n    imageCaption.innerText = \"Our Very Own Chef Kevin Nguyen\";\n\n    const restaurantDesc1 = document.createElement(\"p\");\n    restaurantDesc1.classList.add(\"desc-1\");\n    restaurantDesc1.textContent = \"Immerse yourself in the rich and vibrant culinary traditions of Vietnam. Our skilled chefs use the finest ingredients to create dishes that capture the essence of Vietnamese flavors, from savory pho to mouthwatering banh mi.\";\n\n    const restaurantDesc2 = document.createElement(\"p\");\n    restaurantDesc2.classList.add(\"desc-2\");\n    restaurantDesc2.textContent = \"Join us for an unforgettable dining experience that will transport you to the bustling streets of Hanoi, where each bite is a journey through Vietnam's diverse and delicious cuisine.\";\n\n    chefFig.appendChild(chefImage);\n    chefFig.appendChild(imageCaption);\n    home.appendChild(headline);\n    home.append(chefFig);\n    home.appendChild(restaurantDesc1);\n    home.appendChild(restaurantDesc2);\n\n    (0,_style__WEBPACK_IMPORTED_MODULE_0__.styleHome)(home, headline, chefImage, restaurantDesc1, restaurantDesc2);\n    return home;\n}\n\nconst loadHome = () => {\n    const main = document.querySelector(\".main-content\");\n    main.textContent = '';\n    main.appendChild(createHome());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ \"./src/style.js\");\n\n\n\n\n\nconst setActiveButton = (button) => {\n    const buttons = document.querySelectorAll(\".button-nav\");\n\n    buttons.forEach((button) => {\n        if (button !== undefined) {\n            button.classList.remove(\"active\");\n        }\n    });\n    button.classList.add(\"active\");\n}\n\nconst createNav = () => {\n    const nav = document.createElement(\"nav\");\n\n    const homeButton = document.createElement(\"button\");\n    homeButton.classList.add(\"button-nav\");\n    homeButton.textContent = \"Home\";\n    homeButton.addEventListener(\"click\", (e) => {\n      if (e.target.classList.contains(\"active\")) {\n        return;\n      }\n      setActiveButton(homeButton);\n      (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    });\n  \n    const menuButton = document.createElement(\"button\");\n    menuButton.classList.add(\"button-nav\");\n    menuButton.textContent = \"Menu\";\n    menuButton.addEventListener(\"click\", (e) => {\n      if (e.target.classList.contains(\"active\")) {\n        return;\n      }\n      setActiveButton(menuButton);\n      (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    });\n  \n    const contactButton = document.createElement(\"button\");\n    contactButton.classList.add(\"button-nav\");\n    contactButton.textContent = \"Contact\";\n    contactButton.addEventListener(\"click\", (e) => {\n      if (e.target.classList.contains(\"active\")) {\n        return;\n      }\n      setActiveButton(contactButton);\n      (0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    });\n  \n    (0,_style__WEBPACK_IMPORTED_MODULE_3__.styleNav)(nav, homeButton, menuButton, contactButton);\n    return nav;\n}\n\nconst createHeader = () => {\n    const header = document.createElement(\"div\");\n    header.classList.add(\"header\");\n\n    const restaurantName = document.createElement(\"h1\");\n    restaurantName.classList.add(\"restaurant-name\");\n    restaurantName.textContent = \"Pho Cuu Long\";\n\n    const headerDesc = document.createElement(\"p\");\n    headerDesc.textContent = \"Experience the Authentic Flavors of Vietnam\";\n    \n    header.appendChild(restaurantName);\n    header.appendChild(headerDesc);\n    header.appendChild(createNav());\n\n    (0,_style__WEBPACK_IMPORTED_MODULE_3__.styleHeader)(header, restaurantName);\n    return header;\n}\n\nconst createMain = () => {\n    const mainContent = document.createElement(\"div\");\n    mainContent.classList.add(\"main-content\");\n\n    return mainContent;\n}\n\nconst initializeWebsite = () => {\n    const content = document.getElementById(\"content\");\n    content.appendChild(createHeader());\n    content.appendChild(createMain());\n\n    setActiveButton(document.querySelector(\".button-nav\"));\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\ninitializeWebsite();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style */ \"./src/style.js\");\n\n\nconst createMenuItem = (name, description) => {\n    const menuItem = document.createElement(\"div\");\n    menuItem.classList.add(\"menu-item\");\n  \n    const foodName = document.createElement(\"h2\");\n    foodName.textContent = name;\n  \n    const foodDescription = document.createElement(\"p\");\n    foodDescription.textContent = description;\n  \n    const foodImage = document.createElement(\"img\");\n    foodImage.src = `/images/${name.toLowerCase()}.png`;\n    foodImage.alt = `${name}`;\n  \n    menuItem.appendChild(foodImage);\n    menuItem.appendChild(foodName);\n    menuItem.appendChild(foodDescription);\n  \n    (0,_style__WEBPACK_IMPORTED_MODULE_0__.styleMenuItem)(foodImage);\n    return menuItem;\n}\n\nconst createMenu = () => {\n    const menu  = document.createElement(\"div\");\n    menu.classList.add(\"menu\");\n\n    menu.appendChild(createMenuItem(\"Pho\", \"Beef Noodle Soup\"));\n    menu.appendChild(createMenuItem(\"Bun Rieu\", \"Tomato Crab Noodle Soup\"));\n    menu.appendChild(createMenuItem(\"Cha Gio\", \"Crispy Fried Spring Rolls\"));\n    menu.appendChild(createMenuItem(\"Banh Mi\", \"Vietnamese Sub\"));\n    menu.appendChild(createMenuItem(\"Com Tam Dac Biet\", \"Broken rice w/ Grilled Beef, Chicken, and Pork\"));\n    menu.appendChild(createMenuItem(\"Xoi Ga\", \"Fried Chicken Wings w/ Sticky Rice\"));\n\n    (0,_style__WEBPACK_IMPORTED_MODULE_0__.styleMenu)(menu);\n    return menu;\n}\n\nconst loadMenu = () => {\n    const main = document.querySelector(\".main-content\");\n    main.textContent = '';\n    main.appendChild(createMenu());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/style.js":
/*!**********************!*\
  !*** ./src/style.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   styleContact: () => (/* binding */ styleContact),\n/* harmony export */   styleHeader: () => (/* binding */ styleHeader),\n/* harmony export */   styleHome: () => (/* binding */ styleHome),\n/* harmony export */   styleMenu: () => (/* binding */ styleMenu),\n/* harmony export */   styleMenuItem: () => (/* binding */ styleMenuItem),\n/* harmony export */   styleNav: () => (/* binding */ styleNav)\n/* harmony export */ });\nconst styleNav = (nav, homeBtn, menuBtn, contactBtn) => {\n    nav.classList = (\"bg-slate-700\");\n\n    const div1 = document.createElement(\"div\");\n    const div2 = document.createElement(\"div\");\n    const ul = document.createElement(\"ul\");\n    const li1 = document.createElement(\"li\");\n    const li2 = document.createElement(\"li\");\n    const li3 = document.createElement(\"li\");\n\n    div1.classList = (\"max-w-screen-xl px-4 py-3\");\n    div2.classList = (\"flex items-center\");\n    ul.classList = (\"flex flex-row font-medium mt-0 space-x-8 text-sm mx-auto\");\n    homeBtn.classList.add(\"text-white\", \"hover:underline\");\n    menuBtn.classList.add(\"text-white\",  \"hover:underline\");\n    contactBtn.classList.add(\"text-white\", \"hover:underline\");\n\n    nav.appendChild(div1);\n    div1.appendChild(div2);\n    div2.appendChild(ul);\n\n    ul.appendChild(li1);\n    ul.appendChild(li2);\n    ul.appendChild(li3);\n\n    li1.appendChild(homeBtn);\n    li2.appendChild(menuBtn);\n    li3.appendChild(contactBtn);\n}\n\nconst styleHeader = (header, restaurantName) => {\n    header.classList.add(\"grid\", \"grid-rows-3\", \"mt-4\");\n    restaurantName.classList.add(\"text-lg\");\n}\n\nconst styleHome = (home, headline, chefImage, restaurantDesc1, restaurantDesc2) => {\n    headline.classList.add(\"m-16\");\n    chefImage.classList.add(\"mx-auto\");\n    restaurantDesc1.classList.add(\"m-12\");\n    restaurantDesc2.classList.add(\"m-12\");\n}\n\nconst styleContact = (contact, phoneNumber, address, restaurantLocation) => {\n    contact.classList.add(\"grid\", \"grid-rows-3\", \"h-80\", \"m-20\", \"text-lg\");\n}\n\nconst styleMenu = (menu) => {\n    menu.classList.add(\"grid\", \"grid-cols-2\");\n}\n\nconst styleMenuItem = (menuItem) => {\n    menuItem.classList.add(\"h-40\", \"w-40\", \"mx-auto\", \"mt-16\");\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.js?");

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