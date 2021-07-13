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

/***/ "./src/Task.js":
/*!*********************!*\
  !*** ./src/Task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar taskId = 0;\nvar tasks = [{\n  project: 1,\n  title: 'a',\n  taskId: 1,\n  description: 'a',\n  dueDate: 1,\n  priority: 1\n}];\n\nfunction Task(project, title, description, dueDate, priority) {\n  this.project = project, this.title = title, this.taskId = taskId, this.description = description, this.dueDate = dueDate, this.priority = priority, taskId++;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tasks);\n\n//# sourceURL=webpack://toDoList/./src/Task.js?");

/***/ }),

/***/ "./src/Template.js":
/*!*************************!*\
  !*** ./src/Template.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Header\": () => (/* binding */ Header),\n/* harmony export */   \"TaskView\": () => (/* binding */ TaskView)\n/* harmony export */ });\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ \"./src/Task.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\nfunction createElement(tagName) {\n  var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    children[_key - 2] = arguments[_key];\n  }\n\n  if (tagName === 'fragment') return children;\n  var elem = Object.assign(document.createElement(tagName), attrs);\n\n  for (var _i = 0, _children = children; _i < _children.length; _i++) {\n    var child = _children[_i];\n    if (Array.isArray(child)) elem.append.apply(elem, _toConsumableArray(child));else elem.append(child);\n  }\n\n  return elem;\n}\n\nvar Header = createElement(\"div\", {\n  id: \"header\"\n}, createElement(\"h1\", null, \"ToDo List 2\"));\nvar TaskView = createElement(\"div\", {\n  id: \"task-container\"\n}, createElement(\"table\", null, createElement(\"tr\", null, createElement(\"th\", null, \"Col 1\"), createElement(\"th\", null, \"Col 2\")), createElement(\"tr\", null, createElement(\"td\", null, _Task__WEBPACK_IMPORTED_MODULE_0__.default[0].description), createElement(\"td\", null, _Task__WEBPACK_IMPORTED_MODULE_0__.default[0].priority))));\n\n\n//# sourceURL=webpack://toDoList/./src/Template.js?");

/***/ }),

/***/ "./src/TemplateForBootstrap.js":
/*!*************************************!*\
  !*** ./src/TemplateForBootstrap.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Navbar\": () => (/* binding */ Navbar)\n/* harmony export */ });\nvar Navbar = function Navbar() {\n  var navBlock = document.createElement('nav');\n  navBlock.classList.add('navbar', 'navbar-expand-lg', 'navbar-light', 'bg-light');\n  var navbarBrand = document.createElement('a');\n  navbarBrand.href = \"#\";\n  navbarBrand.classList.add('navbar-brand');\n  navbarBrand.innerText = 'Navbar 2';\n  var togglerButton = document.createElement('button');\n  togglerButton.classList.add('navbar-toggler');\n  togglerButton.type = \"button\";\n  togglerButton.setAttribute('data-toggle', \"collapse\");\n  togglerButton.setAttribute(\"data-target\", \"#navbarSupportedContent\");\n  togglerButton.setAttribute(\"aria-controls\", \"navbarSupportedContent\");\n  togglerButton.setAttribute(\"aria-expanded\", \"false\");\n  togglerButton.setAttribute(\"aria-label\", \"Toggle navigation\");\n  var spanInButton = document.createElement('span');\n  spanInButton.classList.add(\"navbar-toggler-icon\");\n  togglerButton.appendChild(spanInButton);\n  var navbarSupportedContent = document.createElement('div');\n  navbarSupportedContent.classList.add(\"collapse\", \"navbar-collapse\");\n  navbarSupportedContent.id = 'navbarSupportedContent';\n  var ulInNavSupContent = document.createElement('ul');\n  ulInNavSupContent.classList.add(\"navbar-nav\", \"mr-auto\");\n  var li1 = document.createElement('li');\n  li1.classList.add(\"nav-item\", \"active\");\n  var aInLi1 = document.createElement('a');\n  aInLi1.classList.add('nav-link');\n  aInLi1.href = '#';\n  aInLi1.innerText = 'Home';\n  var spanIna1 = document.createElement('span');\n  spanIna1.classList.add('sr-only');\n  spanIna1.innerText = '(current)';\n  aInLi1.appendChild(spanIna1);\n  li1.appendChild(aInLi1);\n  var li2 = document.createElement('li');\n  li2.classList.add(\"nav-item\", \"dropdown\");\n  var aInLi2 = document.createElement('a');\n  aInLi2.classList.add('nav-link', 'dropdown-toggle');\n  aInLi2.href = '#';\n  aInLi2.id = \"navbarDropdown\";\n  aInLi2.setAttribute(\"role\", \"button\");\n  aInLi2.setAttribute(\"data-toggle\", \"dropdown\");\n  aInLi2.setAttribute(\"aria-haspopup\", \"true\");\n  aInLi2.setAttribute(\"aria-expanded\", \"false\");\n  aInLi2.innerText = 'Projects';\n  li2.appendChild(aInLi2);\n  var divInli2 = document.createElement('div');\n  divInli2.classList.add('dropdown-menu');\n  divInli2.setAttribute('aria-labelledby', 'navbarDropdown');\n  var a2inLi2 = document.createElement('a');\n  a2inLi2.classList.add('dropdown-item');\n  a2inLi2.href = '#';\n  a2inLi2.innerText = 'Project 1';\n  divInli2.appendChild(a2inLi2);\n  li2.appendChild(divInli2);\n  var li3 = document.createElement('li');\n  li3.classList.add(\"nav-item\", \"active\");\n  var aInLi3 = document.createElement('a');\n  aInLi3.classList.add('nav-link');\n  aInLi3.href = '#';\n  aInLi3.innerText = 'Task view';\n  li3.appendChild(aInLi3);\n  ulInNavSupContent.appendChild(li1);\n  ulInNavSupContent.appendChild(li2);\n  ulInNavSupContent.appendChild(li3);\n  navbarSupportedContent.appendChild(ulInNavSupContent);\n  navBlock.appendChild(navbarBrand);\n  navBlock.appendChild(togglerButton);\n  navBlock.appendChild(navbarSupportedContent);\n  return navBlock;\n};\n\n\n\n//# sourceURL=webpack://toDoList/./src/TemplateForBootstrap.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Template */ \"./src/Template.js\");\n/* harmony import */ var _TemplateForBootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TemplateForBootstrap */ \"./src/TemplateForBootstrap.js\");\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Task */ \"./src/Task.js\");\n\n\n\n\nvar content = document.getElementById('content');\ncontent.appendChild(_Template__WEBPACK_IMPORTED_MODULE_0__.Header);\ncontent.appendChild((0,_TemplateForBootstrap__WEBPACK_IMPORTED_MODULE_1__.Navbar)());\ncontent.appendChild(_Template__WEBPACK_IMPORTED_MODULE_0__.TaskView);\n\n//# sourceURL=webpack://toDoList/./src/index.js?");

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