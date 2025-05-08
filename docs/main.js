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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\r\n    background-color: rgb(232, 214, 214);\r\n    margin: 0;\r\n    padding: 0;\r\n    height: 120svh;\r\n}\r\n\r\n/* Home Page CSS */\r\n\r\n#home-burger {\r\n    display: block;\r\n    width: 800px;\r\n    height: 420px;\r\n    margin: auto;\r\n    border-radius: 30px;\r\n}\r\n\r\n#fork-image {\r\n    position: absolute;\r\n    left: 2%;\r\n    bottom: -5%;\r\n}\r\n\r\n#knife-image {\r\n    position: absolute;\r\n    right: 2%;\r\n    bottom: -5%;\r\n}\r\n\r\n.image-container {\r\n    width: 1200px;\r\n    outline: 15px groove black;\r\n    padding: 30px 0px;\r\n    margin: 0 auto;\r\n    margin-top: 50px;\r\n    border-radius: 30px 80px;\r\n    background-color: #0d1117;\r\n}\r\n\r\n.store-name-home {\r\n    font-size: 2.7rem;\r\n    text-decoration: underline;\r\n    text-shadow: 0px 0px 5px blue;\r\n}\r\n\r\n.message {\r\n    width: 50%;\r\n    margin: 0 auto;\r\n    margin-top: 30px;\r\n    padding: 10px;\r\n    text-align: center;\r\n    background-color: rgb(252, 252, 86);\r\n    color: darkred;\r\n    font-weight: bold;\r\n    position: relative;\r\n    border-radius: 15px;\r\n}\r\n\r\n\r\n.main-headline, .menu-headline {\r\n    color: darkred;\r\n    text-align: center;\r\n    font-family: Delius Swash Caps;\r\n    font-size: 2rem;\r\n    font-weight: bold;\r\n    background-color: #FFF7E6;\r\n    padding: 10px;\r\n    margin: 30px auto;\r\n    width: 90%;\r\n    box-sizing: border-box;\r\n    border-radius: 20px 50px;\r\n    box-shadow: 0px 0px 10px 12px rebeccapurple;\r\n}\r\n\r\n.buttons-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 70px;\r\n    background: black;\r\n    padding: 30px;\r\n}\r\n\r\n.nav-buttons {\r\n    font-size: 2rem;\r\n    font-family: cursive;\r\n    padding: 10px 50px;\r\n    border-radius: 25px;\r\n    background-color: navy;\r\n    text-shadow: 0px 0px 2px red;\r\n    color: whitesmoke;\r\n    outline: 6px ridge crimson;\r\n    cursor: pointer;\r\n    transition: all 400ms ease-in-out;\r\n    &:hover {\r\n        transform: scale(1.2);\r\n        background-color: hsl(240, 100%, 45%);\r\n        box-shadow: 0px 0px 10px 8px aqua;\r\n    }\r\n}\r\n\r\n.home-credit {\r\n    display: inline-block;\r\n    background-color: black;\r\n    color: whitesmoke;\r\n    width: 100%;\r\n    top: 102.5%;\r\n    bottom: 5%;\r\n    left: 0;\r\n    margin-top: -50px;\r\n    text-align: center;\r\n    padding: 5px;\r\n    box-sizing: border-box;\r\n    transition: all 200ms ease;\r\n    position: fixed;\r\n    z-index: 10;\r\n    &:hover {\r\n        font-weight: bold;\r\n    }\r\n}\r\n\r\n/* Menu Page CSS */\r\n\r\n#menu-burger {\r\n    width: 470px;\r\n    height: 350px;\r\n    border-radius: 30px;\r\n}\r\n\r\n.menu-grid {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n    background-color: #0d1117;\r\n}\r\n\r\n.burger-card {\r\n    padding: 10px;\r\n    text-align: center;\r\n    transition: all 300ms ease;\r\n    border-radius: 10px;\r\n    cursor: pointer;\r\n    &:hover {\r\n        border: 4px ridge gold;\r\n    }\r\n}\r\n\r\n.burger-card:last-child {\r\n    display: block;\r\n    margin-bottom: 80px;\r\n    grid-column: 2;\r\n}\r\n\r\n.headline-container {\r\n    background-color: crimson;\r\n    color: rgb(252, 252, 124);\r\n    padding: 15px;\r\n}\r\n\r\n.headline-container h1,\r\n.headline-container h2 {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.store-name-menu {\r\n    font-size: 3.6rem;\r\n    text-decoration: underline;\r\n    color: black;\r\n    text-shadow: 0px 0px 10px blue;\r\n    -webkit-text-stroke: 1px black;\r\n    font-family: Delius Swash Caps;\r\n}\r\n\r\n#menu-headline {\r\n    text-align: center;\r\n    font-size: 1.5rem;\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n#menu-subline {\r\n    text-align: center;\r\n    margin-top: 5px;\r\n    font-family: Arial;\r\n    color: gold;\r\n}\r\n\r\n.menu-headline {\r\n    font-size: 1.35rem;\r\n    background-color: black;\r\n    color: white;\r\n    font-variant: small-caps;\r\n    font-family: Delius Swash Caps, sans-serif;\r\n    border-radius: 5px;\r\n}\r\n\r\n.menu-subline {\r\n    font-size: 1rem;\r\n    font-family: cursive;\r\n    background-color: darkgreen;\r\n    color: white;\r\n    padding: 5px;\r\n    border-radius: 5px;\r\n}\r\n\r\n/* About Page CSS */\r\n\r\n\r\n.about-page {\r\n    width: 100%;\r\n    height: 120svh;\r\n    position: relative;\r\n}\r\n\r\n.about-background {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    filter: blur(1.4px);\r\n    background-color: #333; \r\n    object-fit: cover;\r\n}\r\n\r\n.about-message {\r\n    background-color: rgb(228, 226, 208);\r\n    position: absolute;\r\n    top: 25%;\r\n    right: 2%;\r\n    text-align: center;\r\n    padding: 10px;\r\n    border-radius: 20px;\r\n    z-index: 1; \r\n}\r\n\r\n.message-headline {\r\n    font-family: roboto;\r\n}\r\n\r\n#message-paragraph {\r\n    font-family: cursive;\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.store-name-about {\r\n    font-size: 2rem;\r\n    text-decoration: underline;\r\n    color: black;\r\n    text-shadow: 0px 0px 10px green;\r\n    -webkit-text-stroke: 1px black;\r\n    font-family: Delius Swash Caps;\r\n    margin-left: 5px;\r\n}\r\n\r\nsmall {\r\n    display: block;\r\n    text-align: start;\r\n    margin: -5px;\r\n    margin-left: 65px;\r\n    font-weight: bold;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-project/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/assets/Beast Burger.png":
/*!*************************************!*\
  !*** ./src/assets/Beast Burger.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0a64003418fdab9c3b49.png\";\n\n//# sourceURL=webpack://restaurant-project/./src/assets/Beast_Burger.png?");

/***/ }),

/***/ "./src/assets/Burger.avif":
/*!********************************!*\
  !*** ./src/assets/Burger.avif ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0d7c45260ad2c7f9e5de.avif\";\n\n//# sourceURL=webpack://restaurant-project/./src/assets/Burger.avif?");

/***/ }),

/***/ "./src/assets/Burgeraious.jpg":
/*!************************************!*\
  !*** ./src/assets/Burgeraious.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"de63e8db713ea51dbabc.jpg\";\n\n//# sourceURL=webpack://restaurant-project/./src/assets/Burgeraious.jpg?");

/***/ }),

/***/ "./src/assets/Cheese Burger.png":
/*!**************************************!*\
  !*** ./src/assets/Cheese Burger.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"496dd3c0524e625934cd.png\";\n\n//# sourceURL=webpack://restaurant-project/./src/assets/Cheese_Burger.png?");

/***/ }),

/***/ "./src/assets/Child Burger.jpg":
/*!*************************************!*\
  !*** ./src/assets/Child Burger.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d2f6611fffe652d6ddd3.jpg\";\n\n//# sourceURL=webpack://restaurant-project/./src/assets/Child_Burger.jpg?");

/***/ }),

/***/ "./src/assets/Crispy Fish Burger.jpg":
/*!*******************************************!*\
  !*** ./src/assets/Crispy Fish Burger.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ade6582da1d26c159856.jpg\";\n\n//# sourceURL=webpack://restaurant-project/./src/assets/Crispy_Fish_Burger.jpg?");

/***/ }),

/***/ "./src/assets/Dry Burger.jpg":
/*!***********************************!*\
  !*** ./src/assets/Dry Burger.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"db7e6aae7a4ce1e43821.jpg\";\n\n//# sourceURL=webpack://restaurant-project/./src/assets/Dry_Burger.jpg?");

/***/ }),

/***/ "./src/assets/Egg Burger.jpg":
/*!***********************************!*\
  !*** ./src/assets/Egg Burger.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"29fc8580d26d6728bc31.jpg\";\n\n//# sourceURL=webpack://restaurant-project/./src/assets/Egg_Burger.jpg?");

/***/ }),

/***/ "./src/assets/Juicy Standard Burger.png":
/*!**********************************************!*\
  !*** ./src/assets/Juicy Standard Burger.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"36e0d3e5c6e060c0fdf0.png\";\n\n//# sourceURL=webpack://restaurant-project/./src/assets/Juicy_Standard_Burger.png?");

/***/ }),

/***/ "./src/assets/fork.png":
/*!*****************************!*\
  !*** ./src/assets/fork.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"106ffcef4ffde8311e65.png\";\n\n//# sourceURL=webpack://restaurant-project/./src/assets/fork.png?");

/***/ }),

/***/ "./src/assets/knife.png":
/*!******************************!*\
  !*** ./src/assets/knife.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"363a21f349a8907fa8e0.png\";\n\n//# sourceURL=webpack://restaurant-project/./src/assets/knife.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/layout */ \"./src/modules/layout.js\");\n/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/home */ \"./src/modules/home.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/about */ \"./src/modules/about.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst container = document.querySelector('.main-container');\r\n\r\nconst availablePages = {\r\n    home: _modules_home__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\r\n    menu: _modules_menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\r\n    about: _modules_about__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\r\n};\r\n\r\nfunction renderPage(pageKey) {\r\n    container.innerHTML = '';\r\n    (0,_modules_layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(renderPage);\r\n    const pageElement = availablePages[pageKey]();\r\n    container.appendChild(pageElement);\r\n    const credit = document.createElement('p');\r\n    credit.className = 'home-credit';\r\n    credit.textContent = 'Ori Trabelsi/最も相応しい弟子  - The Odin Project - 2025';\r\n    container.appendChild(credit);\r\n}\r\n\r\nrenderPage('home');\r\n\n\n//# sourceURL=webpack://restaurant-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/about.js":
/*!******************************!*\
  !*** ./src/modules/about.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toAboutPage)\n/* harmony export */ });\n/* harmony import */ var _assets_Burgeraious_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/Burgeraious.jpg */ \"./src/assets/Burgeraious.jpg\");\n\r\n\r\n\r\n\r\nconst container = document.querySelector('.main-container');\r\n\r\nfunction toAboutPage() {\r\n    const content = document.createElement('div');\r\n    content.classList.add('about-page'); \r\n    container.append(content);\r\n    const background = document.createElement('img');\r\n    background.src = _assets_Burgeraious_jpg__WEBPACK_IMPORTED_MODULE_0__;\r\n    background.classList.add('about-background');\r\n    content.appendChild(background);\r\n\r\n    const message = document.createElement('div');\r\n    message.classList.add('about-message');\r\n    message.innerHTML = `\r\n    <h2 class=\"message-headline\">About <span class=\"store-name-about\">Burgeraious</span>:</h2>\r\n    <p id=\"message-paragraph\">In case you haven't figured it out by now the store doesn't actually <br> exist, dummy! This is an exercise dummy model!</p>\r\n    <small>Phone: Unknown Plane-123456789</small> <br>\r\n    <small>Address: Not on this domain 馬鹿野郎!</small>\r\n    `;\r\n    content.appendChild(message);\r\n\r\n    return content;\r\n}\n\n//# sourceURL=webpack://restaurant-project/./src/modules/about.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toHomePage)\n/* harmony export */ });\n/* harmony import */ var _assets_Burger_avif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/Burger.avif */ \"./src/assets/Burger.avif\");\n/* harmony import */ var _assets_fork_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/fork.png */ \"./src/assets/fork.png\");\n/* harmony import */ var _assets_knife_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/knife.png */ \"./src/assets/knife.png\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction toHomePage() {\r\n    const wrapper = document.createElement('div');\r\n    wrapper.classList.add('home-page');\r\n\r\n    const headliner = document.createElement('h1');\r\n    headliner.classList.add('main-headline');\r\n    headliner.innerHTML = `Welcome to <span class=\"store-name-home\">Burgeraious</span> Where beautiful burgers meet beautiful customers!`;\r\n    wrapper.appendChild(headliner);\r\n\r\n    const image = document.createElement('img');\r\n    image.setAttribute('id', 'home-burger')\r\n    image.src = _assets_Burger_avif__WEBPACK_IMPORTED_MODULE_0__;\r\n    wrapper.appendChild(image);\r\n\r\n    const imageContainer = document.createElement('div');\r\n    imageContainer.classList.add('image-container');\r\n    wrapper.append(imageContainer);\r\n    imageContainer.append(image);\r\n    \r\n    const forkImage = document.createElement('img');\r\n    forkImage.setAttribute('id', 'fork-image');\r\n    forkImage.src = _assets_fork_png__WEBPACK_IMPORTED_MODULE_1__;\r\n    imageContainer.prepend(forkImage)\r\n\r\n    const knifeImage = document.createElement('img');\r\n    knifeImage.setAttribute('id', 'knife-image');\r\n    knifeImage.src = _assets_knife_png__WEBPACK_IMPORTED_MODULE_2__;\r\n    imageContainer.prepend(knifeImage)\r\n\r\n    \r\n    const message = document.createElement('p');\r\n    message.innerHTML = `<em>Using a cutlery to eat hamburger is just stupid! Well, duh! It looks awesome though!</em>`;\r\n    message.className = 'message';\r\n    wrapper.append(message);\r\n    const credit = document.createElement('p');\r\n    credit.className = 'home-credit';\r\n    credit.textContent = 'Ori Trabelsi/最も相応しい弟子  - The Odin Project - 2025';\r\n    wrapper.appendChild(credit);\r\n    \r\n    return wrapper;\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-project/./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/layout.js":
/*!*******************************!*\
  !*** ./src/modules/layout.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createLayout)\n/* harmony export */ });\n\r\n\r\nconst container = document.querySelector('.main-container');\r\n\r\nfunction createLayout(designatedPage) {\r\n    container.innerHTML = '';\r\n    const buttonsContainer = document.createElement('div');\r\n    container.append(buttonsContainer);\r\n    buttonsContainer.classList.add('buttons-container');\r\n    const pages = ['home', 'menu', 'about'];\r\n\r\n    pages.forEach(pageKey => {\r\n        const button = document.createElement('button');\r\n        button.textContent = pageKey.charAt(0).toUpperCase() + pageKey.slice(1);\r\n        button.classList.add('nav-buttons');\r\n        button.addEventListener('click', () => {\r\n            designatedPage(pageKey);\r\n        });\r\n        buttonsContainer.append(button);\r\n    });\r\n}\n\n//# sourceURL=webpack://restaurant-project/./src/modules/layout.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toMenuPage)\n/* harmony export */ });\n/* harmony import */ var _assets_Juicy_Standard_Burger_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/Juicy Standard Burger.png */ \"./src/assets/Juicy Standard Burger.png\");\n/* harmony import */ var _assets_Crispy_Fish_Burger_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/Crispy Fish Burger.jpg */ \"./src/assets/Crispy Fish Burger.jpg\");\n/* harmony import */ var _assets_Cheese_Burger_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/Cheese Burger.png */ \"./src/assets/Cheese Burger.png\");\n/* harmony import */ var _assets_Beast_Burger_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/Beast Burger.png */ \"./src/assets/Beast Burger.png\");\n/* harmony import */ var _assets_Child_Burger_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/Child Burger.jpg */ \"./src/assets/Child Burger.jpg\");\n/* harmony import */ var _assets_Egg_Burger_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/Egg Burger.jpg */ \"./src/assets/Egg Burger.jpg\");\n/* harmony import */ var _assets_Dry_Burger_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/Dry Burger.jpg */ \"./src/assets/Dry Burger.jpg\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst container = document.querySelector('.main-container');\r\n\r\nfunction toMenuPage() {\r\n    const content = document.createElement('div');\r\n    container.append(content);\r\n\r\n    const headlinesContainer = document.createElement('div');\r\n    headlinesContainer.classList.add('headline-container');\r\n    content.append(headlinesContainer);\r\n    const headliner = document.createElement('h1');\r\n    headliner.innerHTML = `<h1>At <span class=\"store-name-menu\">Burgeraious</span> we offer only the very best!</h1>`;\r\n    headliner.id = 'menu-headline';\r\n\r\n    const subHeadliner = document.createElement('h2');\r\n    subHeadliner.innerHTML = `<h2>Most refined ingredients, fresh, delicious, juicy burgers to brighten your day!</h2>`;\r\n    subHeadliner.id = 'menu-subline';\r\n    headlinesContainer.append(headliner, subHeadliner);\r\n\r\n    const typesOfBurgers = [\r\n        {\r\n            src: _assets_Juicy_Standard_Burger_png__WEBPACK_IMPORTED_MODULE_0__,\r\n            title: \"The Juicy Standard - 8$\",\r\n            description: \"Our classic beef patty with fresh lettuce and secret sauce!\"\r\n        },\r\n        {\r\n            src: _assets_Crispy_Fish_Burger_jpg__WEBPACK_IMPORTED_MODULE_1__,\r\n            title: \"The Crispy Fish-Burger - 9$\",\r\n            description: \"The fantastic, crispy burger - The Fish Burger!\"\r\n        },\r\n        {\r\n            src: _assets_Cheese_Burger_png__WEBPACK_IMPORTED_MODULE_2__,\r\n            title: \"Cheese Converge Within The Burger - 9$\",\r\n            description: \"Our classic version of the classic Cheese Burger!\"\r\n        },\r\n        {\r\n            src: _assets_Beast_Burger_png__WEBPACK_IMPORTED_MODULE_3__,\r\n            title: \"The Delicious Monstrosity - 15$\",\r\n            description: \"Beastly Meat of DOOM. Eat at your own healthy risk!\"\r\n        },\r\n        {\r\n            src: _assets_Child_Burger_jpg__WEBPACK_IMPORTED_MODULE_4__,\r\n            title: \"The Bratty Burger - 7$\",\r\n            description: \"Buy yourself this package of small burger and fries to distract and calm your loud children at our restaurant.. Please!\"\r\n        },\r\n        {\r\n            src: _assets_Egg_Burger_jpg__WEBPACK_IMPORTED_MODULE_5__,\r\n            title: \"Burger Explosion - 8$\",\r\n            description: \"Egg burger is the direct result of the combination of the cosmos of the burger-verse!\"\r\n        },\r\n        {\r\n            src: _assets_Dry_Burger_jpg__WEBPACK_IMPORTED_MODULE_6__,\r\n            title: \"The Dull Yet Delicious Burger - 7$\",\r\n            description: \"Do you have a fear of sauces/vegetables ruining your burger experience? Look no further than here!\"\r\n        },\r\n    ];\r\n\r\n    const grid = document.createElement('div');\r\n    grid.classList.add('menu-grid');\r\n    content.append(grid);\r\n\r\n    typesOfBurgers.forEach(({ src, title, description }) => {\r\n        const burgerCard = document.createElement('div');\r\n        burgerCard.classList.add('burger-card');\r\n        const image = document.createElement('img');\r\n        image.setAttribute('id', 'menu-burger');\r\n        image.src = src;\r\n        image.alt = title;\r\n\r\n        const headline = document.createElement('h1');\r\n        headline.innerHTML = title;\r\n        headline.classList.add('menu-headline');\r\n\r\n        const subLine = document.createElement('p');\r\n        subLine.textContent = description;\r\n        subLine.classList.add('menu-subline');\r\n\r\n        burgerCard.append(image, headline, subLine);\r\n        grid.appendChild(burgerCard);\r\n    });\r\n\r\n    return content;\r\n}\n\n//# sourceURL=webpack://restaurant-project/./src/modules/menu.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-project/./src/style.css?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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