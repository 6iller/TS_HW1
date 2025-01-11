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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst users_1 = __webpack_require__(/*! ./users */ \"./src/users.ts\");\nconst userInfo_1 = __webpack_require__(/*! ./userInfo */ \"./src/userInfo.ts\");\nfunction getUsersJobPositions() {\n    const userInfoMap = new Map(userInfo_1.userInfoArray.map(user => [user.userid, user]));\n    return users_1.usersArray.map(user => {\n        const userInfo = userInfoMap.get(user.userid);\n        if (!userInfo) {\n            console.warn(`info for user ID does not exist: ${user.userid}`);\n            return { name: user.name, position: 'Unknown', age: 0, gender: user.gender };\n        }\n        return {\n            name: user.name,\n            position: userInfo.organization.position,\n            age: userInfo.age,\n            gender: user.gender\n        };\n    });\n}\nconst usersPositions = getUsersJobPositions();\nconsole.log(usersPositions);\n\n\n//# sourceURL=webpack://js_ts_tests/./src/index.ts?");

/***/ }),

/***/ "./src/userInfo.ts":
/*!*************************!*\
  !*** ./src/userInfo.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.userInfoArray = void 0;\nexports.userInfoArray = [\n    {\n        userid: '127e4567-e89b-12d3-a458-426614174000',\n        name: 'John',\n        birthdate: '1982-02-17T21:00:00.000Z',\n        age: 40,\n        organization: {\n            name: 'Amazon',\n            position: 'General manager'\n        }\n    },\n    {\n        userid: '127e4567-e89a-12f3-a458-327395154000',\n        name: 'Anna',\n        birthdate: '1988-02-17T21:00:00.000Z',\n        age: 34,\n        organization: {\n            name: 'Amazon',\n            position: 'Manager'\n        }\n    }\n];\n\n\n//# sourceURL=webpack://js_ts_tests/./src/userInfo.ts?");

/***/ }),

/***/ "./src/users.ts":
/*!**********************!*\
  !*** ./src/users.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.usersArray = void 0;\nexports.usersArray = [\n    {\n        userid: '127e4567-e89b-12d3-a458-426614174000',\n        name: 'John',\n        gender: 'man'\n    },\n    {\n        userid: '127e4567-e89a-12f3-a458-327395154000',\n        name: 'Anna',\n        gender: 'woman'\n    }\n];\n\n\n//# sourceURL=webpack://js_ts_tests/./src/users.ts?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;