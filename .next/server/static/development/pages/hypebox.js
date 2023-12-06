module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/MyLayout.js":
/*!********************************!*\
  !*** ./components/MyLayout.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Nav */ "./components/Nav.js");
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Page */ "./components/Page.js");



var layoutStyle = {};

var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Nav__WEBPACK_IMPORTED_MODULE_1__["default"], {
    Content: props.Content,
    hypebox_index: props.hypebox_index,
    content_modified: props.content_modified,
    content_saveReady: props.content_saveReady
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Page__WEBPACK_IMPORTED_MODULE_2__["default"], null, props.children));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);



var Nav = function Nav(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container fixed"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "inner-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "page-container"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "Nav",
    className: "nav-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Nokia"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "thin"
  }, "Museum ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "CMS")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "divider"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "main"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: props.hypebox_index == 1 ? 'selected' : ''
  }, "Hypebox #1", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "editing")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: props.hypebox_index == 2 ? 'selected' : ''
  }, "Hypebox #2", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "editing")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: props.hypebox_index == 3 ? 'selected' : ''
  }, "Hypebox #3", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "editing"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'bottom ' + (props.content_modified ? 'show' : '') + ' ' + (props.content_saveReady ? 'save' : '')
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "divider"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "finalize"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: true,
    className: "btn preview",
    onClick: function onClick() {
      props.Content.preview();
    }
  }, "Preview"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: true,
    className: "btn save",
    onClick: function onClick() {
      props.Content.save();
    }
  }, "Save")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: true,
    className: "undo",
    onClick: function onClick() {
      props.Content.load(true);
    }
  }, "revert to last saved version")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./components/Page.js":
/*!****************************!*\
  !*** ./components/Page.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);



var Page = function Page(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "inner-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "Page",
    className: "page-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("bg", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("content", null, props.children)))));
};

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./components/RepeatTopicSelector2.js":
/*!********************************************!*\
  !*** ./components/RepeatTopicSelector2.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sass/styles.scss */ "./sass/styles.scss");
/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_sass_styles_scss__WEBPACK_IMPORTED_MODULE_6__);








var RepeatTopicSelector =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RepeatTopicSelector, _React$Component);

  function RepeatTopicSelector() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, RepeatTopicSelector);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(RepeatTopicSelector).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(RepeatTopicSelector, [{
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "topic-placements"
      }, this.props.topics.map(function (item, index) {
        var topic = _this.props.topics[index];
        var artifact = topic.artifact[0]['loc'];
        var diameter = artifact.d; //console.log(diameter);

        var xperc = artifact.x / 1920;
        var yperc = artifact.y / 1080; //console.log(index, this.props.topics, topic.name, diameter);

        var type = 'none';
        if (diameter <= 225 && diameter > 2) type = 'small';else if (diameter > 225 && diameter <= 350) type = 'medium';else if (diameter > 350 && diameter <= 425) type = 'large';else if (diameter > 425) type = 'xl'; //console.log(index, type, diameter);

        xperc *= 100;
        yperc *= 100;
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
          className: (index == _this.props.topic_index ? 'selected' : '') + ' ' + type,
          onClick: function onClick(e) {
            return _this.props.selectTopic(index, e);
          },
          style: {
            left: xperc + '%',
            top: yperc + '%'
          }
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null));
      }));
    }
  }]);

  return RepeatTopicSelector;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (RepeatTopicSelector);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "core-js/library/fn/get-iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "core-js/library/fn/parse-int");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "next/router"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/hypebox.js":
/*!**************************!*\
  !*** ./pages/hypebox.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var _components_RepeatTopicSelector2_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/RepeatTopicSelector2.js */ "./components/RepeatTopicSelector2.js");
/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../sass/styles.scss */ "./sass/styles.scss");
/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_sass_styles_scss__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_18__);




















var Hypebox =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_12__["default"])(Hypebox, _React$Component);

  function Hypebox() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__["default"])(this, Hypebox);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__["default"])(Hypebox).call(this));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__["default"])(_this), "selectTopic", function (index, evt) {
      var _this2 = this;

      //console.log(index);
      //this.state.topic_index = index;
      var topic = this.state.screens[this.state.hypebox_index - 1].topics[index];
      this.setState({
        contentItem_index: 0,
        topic_index: index
      });
      setTimeout(function () {
        _this2.$selectedTopic = $('ul.topic-placements li.selected');
        var xperc = (topic['artifact'][0]['loc'].x - _this2.Constants.minPosTopic) / _this2.Constants.maxPosTopicX;
        var yperc = (topic['artifact'][0]['loc'].y - _this2.Constants.minPosTopic) / _this2.Constants.maxPosTopicY; //console.log('x:', topic['artifact'][0]['loc'].x, xperc);
        //console.log('y:', topic['artifact'][0]['loc'].y, yperc);

        _this2.sliderPosX.setPerc(xperc, true);

        _this2.sliderPosY.setPerc(yperc, true);

        _this2.contentPosX.setPerc(topic['contentsBox']['topLeftLoc']['x'] / _this2.Constants.maxPosContentX, true);

        _this2.contentPosY.setPerc(topic['contentsBox']['topLeftLoc']['y'] / _this2.Constants.maxPosContentY, true);

        Content.resizeTextAreas();

        _this2.TextArea.updateAll();
      }, 45); //console.log(this);
    });

    _this.state = {
      hypebox_index: 1,
      topic_index: 0,
      contentItem_index: 0,
      pos_topicx: 0,
      pos_topicy: 0,
      pos_contentx: 0,
      pos_contenty: 0,
      content_modified: false,
      content_saveReady: false,
      history: [],
      currHistory: '',
      showHistory: false,
      screens: [{
        title: '',
        test: 'test',
        topics: [{
          artifact: [{
            "_comment": "caption lines are unescaped HTML, so you can <br>",
            "caption": "Theseus, Shannon's mechanical mouse<br>Original chess pieces from Belle",
            "loc": {
              "_comment": "units in pixels. top left is 0,0",
              "x": 460,
              "y": 800,
              "d": 380
            },
            "show": true
          }],
          contentsBox: {},
          deepDive: {
            columns: [{
              item: []
            }]
          },
          intro: '',
          slides: [],
          title: '',
          topicId: ''
        }]
      }]
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_8__["default"])(Hypebox, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this11 = this;

      var self = this;
      window.React = this; //

      console.log('Hypebox did mount.');
      console.log(this.props.id);
      this.handleKeyUp = this.handleKeyUp.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.selectTopic = this.selectTopic.bind(this);
      this.getArtifactDiameter = this.getArtifactDiameter.bind(this);
      this.getArtifactCaption = this.getArtifactCaption.bind(this);
      this.getContentItems = this.getContentItems.bind(this);
      this.getContentItem = this.getContentItem.bind(this);
      this.getCurrContentItem = this.getCurrContentItem.bind(this);
      this.handleFocus = this.handleFocus.bind(this);
      this.handleBlur = this.handleBlur.bind(this);
      this.handleContentItemClick = this.handleContentItemClick.bind(this);
      this.getContentItemTextCaption = this.getContentItemTextCaption.bind(this);
      this.getContentImageSrc = this.getContentImageSrc.bind(this);
      this.getContentVideoSrc = this.getContentVideoSrc.bind(this);
      this.setTopicArtifactDiameter = this.setTopicArtifactDiameter.bind(this); //

      var Constants = {
        maxPosContentX: 1920 - 980,
        maxPosContentY: 1080 - 550,
        minPosTopic: 0,
        maxPosTopicX: 1920,
        maxPosTopicY: 1080
        /*minPosTopic: 225,
        maxPosTopicX: 1920 - (225*2),
        maxPosTopicY: 1080 - (225*2)*/

      };
      this.Constants = Constants; //

      var Content = {
        original: [],
        lastLoadedData: null,
        storedData: false,
        history: function history(filename) {
          var _this3 = this;

          console.log('load history:', filename);
          $.get('/history/' + filename, function (res) {
            var results = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_6__["default"])({}, res);

            if (results.success === true && results.content) results.content = JSON.parse(results.content);
            _this3.storedData = false;
            _this3.lastLoadedData = results.content.screens;

            _this3.reset();

            self.setState({
              currHistory: filename,
              content_modified: true
            }); //if ( filename.indexOf('Saved') != -1 ) self.setState({content_saveReady: true});
          });
        },
        getHistory: function getHistory(showHistory, clicked) {
          if (self.state.showHistory === true && clicked === true) {
            self.setState({
              showHistory: false
            });
            return;
          }

          $.get('/history', function (res) {
            self.setState({
              history: res.history
            });
            if (showHistory === true) self.setState({
              showHistory: showHistory
            });
            if (res.history.length > 0) self.setState({
              currHistory: res.history[0].file
            });
          });
        },
        loadFromHistory: function loadFromHistory() {
          var _this4 = this;

          //console.log('loadFromHistory');
          $.get('/history', function (res) {
            self.setState({
              history: res.history
            });

            if (res.history.length > 0 && res.history[0].file.indexOf('Saved') == -1) {
              _this4.history(res.history[0].file);
            }
          });
        },
        read: function read(cb) {
          $.get('/api/read.content', function (res) {
            var results = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_6__["default"])({}, res);

            if (results.success === true && results.content) results.content = JSON.parse(results.content);
            cb(results);
          });
        },
        hasChanged: function hasChanged() {
          return !(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_5___default()(this.original) == _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_5___default()(self.state.screens));
        },
        load: function load(removeTempHistory) {
          var _this5 = this;

          if (removeTempHistory) {
            $.get('/remove-temp-history', function (res) {
              _this5.getHistory();
            });
          }

          this.read(function (results) {
            if (results.success === true) {
              _this5.storedData = false;
              _this5.lastLoadedData = results.content.screens;

              _this5.reset();

              _this5.loadFromHistory();
            }
          });
        },
        resizeTextAreas: function resizeTextAreas() {
          TextArea.updateAll();
          $('textarea').each(function (index, target) {
            self.handleKeyUp({
              target: target
            });
          });
        },
        output: function output() {
          var o = {
            screens: {}
          };

          for (var index in self.state.screens) {
            o.screens['touchtable_' + (_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_4___default()(index) + 1)] = self.state.screens[index];
          }

          return o;
        },
        saveJSON: function saveJSON(type) {
          var _this6 = this;

          $.post('/save/' + type, {
            data: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_5___default()(this.output())
          }, function (res) {
            console.log('res =>', res);
            console.log(typeof res.received);

            _this6.getHistory(); //console.log()

          });
        },
        removeTempImages: function removeTempImages() {
          console.log('Content.removeTempImages()');
          $.get('/remote-temp-images', function (res) {
            console.log('/remove-temp-images res=>', res);
          });
        },
        checkRemoveTempImages: function checkRemoveTempImages(subtract) {
          if (subtract === true) this.saveImageTotal--;
          if (this.saveImageTotal <= 0) this.removeTempImages();
        },
        saveImageTotal: 0,
        removeTempVideos: function removeTempVideos() {
          console.log('Content.removeTempVideos()');
          $.get('/remote-temp-videos', function (res) {
            console.log('/remove-temp-videos res=>', res);
          });
        },
        checkRemoveTempVideos: function checkRemoveTempVideos(subtract) {
          if (subtract === true) this.saveVideoTotal--;
          if (this.saveVideoTotal <= 0) this.removeTempVideos();
        },
        saveVideoTotal: 0,
        save: function save() {
          var _this7 = this;

          console.log('Content.save()');
          this.saveImageTotal = 0;
          this.saveVideoTotal = 0;
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_3___default()(self.state.screens), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var screen = _step.value;
              var topics = screen.topics;
              var _iteratorNormalCompletion2 = true;
              var _didIteratorError2 = false;
              var _iteratorError2 = undefined;

              try {
                for (var _iterator2 = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_3___default()(topics), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  var topic = _step2.value;
                  var items = topic.deepDive.columns[0].item;
                  var _iteratorNormalCompletion3 = true;
                  var _didIteratorError3 = false;
                  var _iteratorError3 = undefined;

                  try {
                    for (var _iterator3 = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_3___default()(items), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                      var item = _step3.value;

                      if (item.figure != undefined) {
                        if (item.figure && item.figure.src && item.figure.src.indexOf('tmp/') != -1) {
                          var filename = item.figure.src.split('tmp/')[1];
                          item.figure.src = 'img/' + filename;
                          console.log(item.figure.src);
                          this.saveImageTotal++;
                          $.ajax({
                            type: "POST",
                            url: '/transfer',
                            data: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_5___default()({
                              filename: filename
                            }),
                            cache: false,
                            contentType: 'application/json',
                            processData: false,
                            success: function success(data) {
                              //console.log(data);
                              _this7.checkRemoveTempImages(true);
                            },
                            error: function error() {//alert('error handling here');
                            }
                          });
                        }
                      } else {
                        if (item.video && item.video.src && item.video.src.indexOf('tmp/') != -1) {
                          var _filename = item.video.src.split('tmp/')[1];
                          item.video.src = 'img/' + _filename;
                          console.log(item.video.src);
                          this.saveImageTotal++;
                          $.ajax({
                            type: "POST",
                            url: '/transfer',
                            data: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_5___default()({
                              filename: _filename
                            }),
                            cache: false,
                            contentType: 'application/json',
                            processData: false,
                            success: function success(data) {
                              //console.log(data);
                              _this7.checkRemoveTempImages(true);
                            },
                            error: function error() {//alert('error handling here');
                            }
                          });
                        }
                      }
                    }
                  } catch (err) {
                    _didIteratorError3 = true;
                    _iteratorError3 = err;
                  } finally {
                    try {
                      if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                        _iterator3.return();
                      }
                    } finally {
                      if (_didIteratorError3) {
                        throw _iteratorError3;
                      }
                    }
                  }

                  var artifacts = topic.artifact;
                  var _iteratorNormalCompletion4 = true;
                  var _didIteratorError4 = false;
                  var _iteratorError4 = undefined;

                  try {
                    for (var _iterator4 = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_3___default()(artifacts), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                      var artifact = _step4.value;
                      if (artifact.loc.d <= 2) artifact.show = false;else artifact.show = true;
                    }
                  } catch (err) {
                    _didIteratorError4 = true;
                    _iteratorError4 = err;
                  } finally {
                    try {
                      if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                        _iterator4.return();
                      }
                    } finally {
                      if (_didIteratorError4) {
                        throw _iteratorError4;
                      }
                    }
                  }
                }
              } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                    _iterator2.return();
                  }
                } finally {
                  if (_didIteratorError2) {
                    throw _iteratorError2;
                  }
                }
              }
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          this.checkRemoveTempImages();
          self.setState({
            screens: self.state.screens
          });
          this.storedData = JSON.parse(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_5___default()(self.state.screens));
          this.saveJSON('live');
          this.saveJSON('temp-saved');
          self.setState({
            content_modified: false,
            content_saveReady: false
          });
        },
        preview: function preview() {
          //console.log('Content.preview()');
          self.setState({
            content_saveReady: true
          });
          this.saveJSON('temp');
        },
        reset: function reset() {
          //console.log('Content.reset()');

          /*if ( this.storedData ){
          	this.original = JSON.parse(JSON.stringify(this.storedData));
          	self.setState({screens:JSON.parse(JSON.stringify(this.storedData)), hypebox_index: 1, content_modified: false, content_saveReady: false});
          		setTimeout(()=>{
          		self.selectTopic(0);
          	}, 25);
          	return;
          }*/
          var screens = [];
          this.original = [];

          var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(this.lastLoadedData);

          var _iteratorNormalCompletion5 = true;
          var _didIteratorError5 = false;
          var _iteratorError5 = undefined;

          try {
            for (var _iterator5 = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_3___default()(keys), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
              var key = _step5.value;
              //console.log(key);
              screens.push(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_6__["default"])({}, this.lastLoadedData[key]));
              this.original.push(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_6__["default"])({}, this.lastLoadedData[key]));
            }
          } catch (err) {
            _didIteratorError5 = true;
            _iteratorError5 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                _iterator5.return();
              }
            } finally {
              if (_didIteratorError5) {
                throw _iteratorError5;
              }
            }
          }

          this.original = JSON.parse(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_5___default()(this.original));
          this.storedData = JSON.parse(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_5___default()(this.original));
          self.setState({
            screens: JSON.parse(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_5___default()(screens)),
            hypebox_index: 1,
            content_modified: false,
            content_saveReady: false
          });
          setTimeout(function () {
            self.selectTopic(0);
          }, 25);
        }
      };
      Content.load();
      this.Content = Content;
      window.Content = Content; //

      var ContentSelector = {
        $el: $('#ContentSelector'),
        selectFile: function selectFile() {
          $('#file-input').trigger('click');
        },
        close: function close() {
          //console.log('close...');
          this.$el.removeClass('visible');
        },
        open: function open() {
          this.$el.addClass('visible');
        },
        addText: function addText() {
          //console.log('ContentSelector::addText');
          var obj = self.state.screens;
          var total = obj[self.state.hypebox_index - 1].topics[self.state.topic_index]['deepDive']['columns'][0]['item'].length;
          obj[self.state.hypebox_index - 1].topics[self.state.topic_index]['deepDive']['columns'][0]['item'].push({
            "text": ''
          });
          self.setState({
            screens: obj
          });
          self.handleContentItemClick(total);
          this.close();
          self.setState({
            content_modified: self.Content.hasChanged(),
            content_saveReady: false
          });
        },
        addImage: function addImage() {
          //console.log('ContentSelector::addImage');
          var obj = self.state.screens;
          var total = obj[self.state.hypebox_index - 1].topics[self.state.topic_index]['deepDive']['columns'][0]['item'].length;
          obj[self.state.hypebox_index - 1].topics[self.state.topic_index]['deepDive']['columns'][0]['item'].push({
            "figure": {
              "src": '',
              "caption": ''
            }
          });
          self.setState({
            screens: obj
          });
          self.handleContentItemClick(total);
          this.close();
          self.setState({
            content_modified: self.Content.hasChanged(),
            content_saveReady: false
          });
        },
        addVideo: function addVideo() {
          //console.log('ContentSelector::addVideo');
          var obj = self.state.screens;
          var total = obj[self.state.hypebox_index - 1].topics[self.state.topic_index]['deepDive']['columns'][0]['item'].length;
          obj[self.state.hypebox_index - 1].topics[self.state.topic_index]['deepDive']['columns'][0]['item'].push({
            "video": {
              "src": '',
              "caption": ''
            }
          });
          self.setState({
            screens: obj
          });
          self.handleContentItemClick(total);
          this.close();
          self.setState({
            content_modified: self.Content.hasChanged(),
            content_saveReady: false
          });
        },
        removeContentItem: function removeContentItem(index) {
          var obj = self.state.screens;
          obj[self.state.hypebox_index - 1].topics[self.state.topic_index]['deepDive']['columns'][0]['item'].splice(index, 1);
          self.setState({
            screens: obj
          });
          self.handleContentItemClick(0);
          self.setState({
            content_modified: self.Content.hasChanged(),
            content_saveReady: false
          });
        },
        previewImage: function previewImage(base64) {
          //console.log('previewImage => UploadFileForm');
          //let obj = self.state.screens;
          //obj[self.state.hypebox_index-1].topics[self.state.topic_index]['deepDive']['columns'][0]['item'][self.state.contentItem_index].figure.src = base64;
          //self.setState({screens: obj});
          $('input[type="submit"]').click();
        },
        init: function init() {
          var _this8 = this;

          $('#UploadFileForm').on('submit', function (evt) {
            evt.preventDefault();
            var formData = new FormData($(this)[0]);
            $.ajax({
              type: "POST",
              url: $(this).attr('action'),
              data: formData,
              cache: false,
              contentType: false,
              processData: false,
              success: function success(data) {
                //console.log(data);
                if (data && data.filename) {
                  var obj = self.state.screens;

                  if (data.filename.split('.').pop() != 'mp4') {
                    obj[self.state.hypebox_index - 1].topics[self.state.topic_index]['deepDive']['columns'][0]['item'][self.state.contentItem_index].figure.src = 'tmp/' + data.filename;
                  } else {
                    obj[self.state.hypebox_index - 1].topics[self.state.topic_index]['deepDive']['columns'][0]['item'][self.state.contentItem_index].video.src = 'tmp/' + data.filename;
                  }

                  self.setState({
                    screens: obj
                  });
                  self.setState({
                    content_modified: self.Content.hasChanged(),
                    content_saveReady: false
                  });
                }
              },
              error: function error() {
                alert('error handling here');
              }
            });
          });
          $('#file-input').on('change', function (e) {
            var file = e.originalEvent.target.files[0]; //console.log('files =>', e.originalEvent.target.files[0] );

            if (e.originalEvent.target.files[0] === undefined) return;
            var reader = new FileReader();

            reader.onload = function (e) {
              //$('#blah').attr('src', e.target.result);
              // console.log("CHANGE HERE :  " + file.src)
              _this8.previewImage(e.target.result);
            };

            reader.readAsDataURL(file);
          });
        }
      };
      ContentSelector.init(); //this.closeContentSelector = ContentSelector.close.bind(this);

      this.ContentSelector = ContentSelector; //

      var $container = $('.container.fixed');
      var $content = $('.section.content');
      var $contentData = $('#ContentItemData');
      $(window).scroll(function (evt) {
        $container[0].style.left = '-' + window.scrollX + 'px';
        var pos = $content.position(); //console.log( pos.top, window.scrollY );

        if (window.scrollY > pos.top + 80) $contentData.css({
          top: window.scrollY - pos.top - 70
        });else $contentData.css({
          top: 0
        });
      });
      /*$('textarea').each((index,target)=>{
      			this.handleKeyUp({target});
      });*/

      var $navItems = $('#Nav ul li');
      $navItems.each(function (index, target) {
        $(target).click(function (index) {
          return function () {
            self.setState({
              hypebox_index: index
            });
            self.selectTopic(0); //$(window).scrollTop(0);

            $('html, body').animate({
              scrollTop: 0
            }, 250);
          };
        }(index + 1));
      });

      var SliderButton =
      /*#__PURE__*/
      function () {
        function SliderButton($el) {
          Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__["default"])(this, SliderButton);

          this.$el = $el;
          this.startX = null;
          this.events = {};
          this.dragging = false;
          this.init();
        }

        Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_8__["default"])(SliderButton, [{
          key: "setPerc",
          value: function setPerc(perc) {
            this.$el.css({
              left: 'calc(' + (perc * 100 + '%') + ' - ' + perc * 50 + 'px)'
            });
          }
        }, {
          key: "on",
          value: function on(eventName, cb) {
            if (eventName.indexOf(' ') !== -1) {
              var arr = eventName.split(' ');
              var _iteratorNormalCompletion6 = true;
              var _didIteratorError6 = false;
              var _iteratorError6 = undefined;

              try {
                for (var _iterator6 = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_3___default()(arr), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                  var value = _step6.value;
                  this.on(value, cb);
                }
              } catch (err) {
                _didIteratorError6 = true;
                _iteratorError6 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
                    _iterator6.return();
                  }
                } finally {
                  if (_didIteratorError6) {
                    throw _iteratorError6;
                  }
                }
              }
            } else {
              this.events[eventName] = cb;
            }
          }
        }, {
          key: "trigger",
          value: function trigger(eventName, data) {
            if (this.events[eventName]) this.events[eventName](data);
          }
        }, {
          key: "init",
          value: function init() {
            var _this9 = this;

            this.$el.on('mousedown mousemove mouseup mouseout', function (evt) {
              switch (evt.type) {
                case 'mousedown':
                  _this9.startX = evt.pageX;

                  _this9.trigger('startdrag');

                  _this9.dragging = true;
                  break;

                case 'mousemove':
                  if (_this9.dragging) _this9.trigger('dragging', evt.pageX - _this9.startX);
                  break;

                case 'mouseup':
                  //case 'mouseout':
                  if (_this9.dragging) {
                    _this9.trigger('enddrag', evt.pageX - _this9.startX);

                    _this9.dragging = false;
                  }

                  break;
              }
            });
          }
        }, {
          key: "stop",
          value: function stop() {
            this.dragging = false;
          }
        }]);

        return SliderButton;
      }(); // ------------------------------------------------------------------------------------------------


      var TextArea =
      /*#__PURE__*/
      function () {
        function TextArea(el) {
          Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__["default"])(this, TextArea);

          this.el = el;
          this.$el = $(el);
          this.id = $(el).attr('textarea-id');
          TextArea.instances.push(this);
        }

        Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_8__["default"])(TextArea, [{
          key: "update",
          value: function update() {
            var val = this.$el.attr('textarea-value');
            this.$el.val(val);
            self.handleKeyUp({
              target: this.el
            });
          }
        }]);

        return TextArea;
      }();

      TextArea.instances = [];

      TextArea.getInstanceById = function (id) {
        var _iteratorNormalCompletion7 = true;
        var _didIteratorError7 = false;
        var _iteratorError7 = undefined;

        try {
          for (var _iterator7 = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_3___default()(TextArea.instances), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
            var instance = _step7.value;
            if (instance.id === id) return instance;
          }
        } catch (err) {
          _didIteratorError7 = true;
          _iteratorError7 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion7 && _iterator7.return != null) {
              _iterator7.return();
            }
          } finally {
            if (_didIteratorError7) {
              throw _iteratorError7;
            }
          }
        }
      };

      TextArea.updateAll = function () {
        //console.log('udpateAll...');
        var _iteratorNormalCompletion8 = true;
        var _didIteratorError8 = false;
        var _iteratorError8 = undefined;

        try {
          for (var _iterator8 = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_3___default()(TextArea.instances), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
            var instance = _step8.value;
            //console.log('updating..')
            instance.update();
          }
        } catch (err) {
          _didIteratorError8 = true;
          _iteratorError8 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion8 && _iterator8.return != null) {
              _iterator8.return();
            }
          } finally {
            if (_didIteratorError8) {
              throw _iteratorError8;
            }
          }
        }
      };

      $('textarea[textarea-value]').each(function (index, target) {
        var ta = new TextArea(target);
      });
      this.TextArea = TextArea; // ------------------------------------------------------------------------------------------------

      var Slider =
      /*#__PURE__*/
      function () {
        function Slider(el, min, max) {
          Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__["default"])(this, Slider);

          this.el = el;
          this.$el = $(el);
          this.$bar = null;
          this.$label = null;
          this.$btn = null;
          this.perc = 0.0;
          this.width = 0.0;
          this.btnState = '';
          this.button = null;
          this.min = min;
          this.max = max;
          this.range = max - min;
          this.val = null;
          this.events = {};
          this.id = this.$el.attr('slider-id') || '';
          this.init();
        }

        Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_8__["default"])(Slider, [{
          key: "init",
          value: function init() {
            var _this10 = this;

            //console.log('new Slider:', this.el, this.$el );
            this.$bar = this.$el.find('.bar');
            this.$label = this.$el.find('h4');
            this.$btn = this.$el.find('.btn');
            this.$hitarea = this.$el.find('.bar-hitarea');
            this.onResize();
            this.button = new SliderButton(this.$btn);
            this.button.on('startdrag', function (x) {
              //console.log('startdrag', Math.random());
              _this10.button.startPerc = _this10.perc;
            });
            this.button.on('dragging dragend', function (x) {
              //console.log('dragging', Math.random());
              var percX = x / _this10.width;

              _this10.setPerc(_this10.button.startPerc + percX);
            });
            this.$hitarea.click(function (evt) {
              var x = evt.pageX - _this10.$hitarea.offset().left;

              var percX = x / _this10.width;

              _this10.setPerc(percX);
            });
            this.$hitarea.on('mouseover mouseout', function (evt) {
              _this10.button.stop();
            });
            Slider.instances.push(this);
          }
        }, {
          key: "on",
          value: function on(eventName, cb) {
            if (eventName.indexOf(' ') !== -1) {
              var arr = eventName.split(' ');
              var _iteratorNormalCompletion9 = true;
              var _didIteratorError9 = false;
              var _iteratorError9 = undefined;

              try {
                for (var _iterator9 = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_3___default()(arr), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                  var value = _step9.value;
                  this.on(value, cb);
                }
              } catch (err) {
                _didIteratorError9 = true;
                _iteratorError9 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion9 && _iterator9.return != null) {
                    _iterator9.return();
                  }
                } finally {
                  if (_didIteratorError9) {
                    throw _iteratorError9;
                  }
                }
              }
            } else {
              this.events[eventName] = cb;
            }
          }
        }, {
          key: "trigger",
          value: function trigger(eventName, data) {
            if (this.events[eventName]) this.events[eventName](data);
          }
        }, {
          key: "setPerc",
          value: function setPerc(perc, init) {
            this.perc = perc;
            if (this.perc < 0.0) this.perc = 0;else if (this.perc > 1.0) this.perc = 1.0;
            this.val = Math.round(this.min + this.perc * this.range);
            this.setLabel(this.val);
            this.button.setPerc(this.perc);
            this.trigger('update-perc', {
              perc: this.perc,
              init: init
            });
          }
        }, {
          key: "onResize",
          value: function onResize() {
            this.width = this.$hitarea.width();
          }
        }, {
          key: "setLabel",
          value: function setLabel(val) {//this.$label.html(val + 'px' );
          }
        }]);

        return Slider;
      }();

      Slider.instances = [];

      Slider.getInstanceById = function (id) {
        var _iteratorNormalCompletion10 = true;
        var _didIteratorError10 = false;
        var _iteratorError10 = undefined;

        try {
          for (var _iterator10 = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_3___default()(Slider.instances), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
            var instance = _step10.value;
            if (instance.id === id) return instance;
          }
        } catch (err) {
          _didIteratorError10 = true;
          _iteratorError10 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion10 && _iterator10.return != null) {
              _iterator10.return();
            }
          } finally {
            if (_didIteratorError10) {
              throw _iteratorError10;
            }
          }
        }
      };

      $('section.slider').each(function (index, target) {
        var slider = new Slider(target, 0, 1000);
      });
      var sliderPosX = Slider.getInstanceById('topic-posx');
      var sliderPosY = Slider.getInstanceById('topic-posy');
      sliderPosX.on('update-perc', function (evt) {
        _this11.setState({
          pos_topicx: Math.round(evt.perc * 100)
        });

        var obj = _this11.state.screens;
        obj[_this11.state.hypebox_index - 1].topics[_this11.state.topic_index].artifact[0]['loc'].x = _this11.Constants.minPosTopic + evt.perc * _this11.Constants.maxPosTopicX;

        _this11.setState({
          screens: obj
        });

        if (_this11.$selectedTopic) _this11.$selectedTopic.css({
          left: evt.perc * 100 + '%'
        });
        if (!evt.init) _this11.setState({
          content_modified: _this11.Content.hasChanged(),
          content_saveReady: false
        });
      });
      sliderPosY.on('update-perc', function (evt) {
        _this11.setState({
          pos_topicy: Math.round(evt.perc * 100)
        });

        var obj = _this11.state.screens;
        obj[_this11.state.hypebox_index - 1].topics[_this11.state.topic_index].artifact[0]['loc'].y = _this11.Constants.minPosTopic + evt.perc * _this11.Constants.maxPosTopicY;

        _this11.setState({
          screens: obj
        });

        if (_this11.$selectedTopic) _this11.$selectedTopic.css({
          top: evt.perc * 100 + '%'
        });
        if (!evt.init) _this11.setState({
          content_modified: _this11.Content.hasChanged(),
          content_saveReady: false
        });
      });
      this.sliderPosX = sliderPosX;
      this.sliderPosY = sliderPosY; //

      var contentPosX = Slider.getInstanceById('content-posx');
      var contentPosY = Slider.getInstanceById('content-posy');
      var $contentBox = $('ul.content-placement li');
      contentPosX.on('update-perc', function (evt) {
        _this11.setState({
          pos_contentx: Math.round(evt.perc * 100)
        });

        var obj = _this11.state.screens;
        obj[_this11.state.hypebox_index - 1].topics[_this11.state.topic_index]['contentsBox']['topLeftLoc']['x'] = evt.perc * _this11.Constants.maxPosContentX;

        _this11.setState({
          screens: obj
        });

        $contentBox.css({
          left: evt.perc * 100 + '%'
        });
        if (!evt.init) _this11.setState({
          content_modified: _this11.Content.hasChanged(),
          content_saveReady: false
        });
      });
      contentPosY.on('update-perc', function (evt) {
        _this11.setState({
          pos_contenty: Math.round(evt.perc * 100)
        });

        var obj = _this11.state.screens;
        obj[_this11.state.hypebox_index - 1].topics[_this11.state.topic_index]['contentsBox']['topLeftLoc']['y'] = evt.perc * _this11.Constants.maxPosContentY;

        _this11.setState({
          screens: obj
        });

        $contentBox.css({
          top: evt.perc * 100 + '%'
        });
        if (!evt.init) _this11.setState({
          content_modified: _this11.Content.hasChanged(),
          content_saveReady: false
        });
      });
      this.contentPosX = contentPosX;
      this.contentPosY = contentPosY;
      var ResizeHandler = {
        to: false,
        update: function update() {
          var _this12 = this;

          clearTimeout(this.to);
          this.to = setTimeout(function () {
            _this12.trigger();
          }, 100);
        },
        trigger: function trigger() {
          Content.resizeTextAreas();
        },
        init: function init() {
          var _this13 = this;

          $(window).on('resize', function () {
            _this13.update();
          });
        }
      };
      ResizeHandler.init(); //

      var Toggle =
      /*#__PURE__*/
      function () {
        function Toggle(el) {
          Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__["default"])(this, Toggle);

          this.el = el;
          this.$el = $(el);
          this.init();
        }

        Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_8__["default"])(Toggle, [{
          key: "init",
          value: function init() {
            var _this14 = this;

            this.$buttons = this.$el.find('li');
            this.$buttons.each(function (index, val) {
              var $btn = $(val);
              $btn.click(function () {
                _this14.$buttons.removeClass('selected');

                $btn.addClass('selected');
              });
            });
          }
        }]);

        return Toggle;
      }();

      $('section.toggle').each(function (index, target) {
        var toggle = new Toggle(target);
      }); //
    }
  }, {
    key: "handleContentItemClick",
    value: function handleContentItemClick(index) {
      var _this15 = this;

      //console.log('handleContentItemClick', new Date().toISOString() );
      //let index = $(target).parent().attr('content-index');
      //if ( index ) this.setState({contentItem_index: index});
      //onClick={this.handleContentItemClick}
      this.setState({
        contentItem_index: index
      });
      setTimeout(function () {
        _this15.TextArea.getInstanceById('content-item-text').update();
      }, 20);
    }
  }, {
    key: "handleKeyUp",
    value: function handleKeyUp(_ref) {
      var target = _ref.target;
      //console.log(target)
      target.style.height = '1px';
      target.style.height = 14 + target.scrollHeight + 'px';
    }
  }, {
    key: "handleFocus",
    value: function handleFocus(_ref2) {
      var target = _ref2.target;
      //console.log('focusing...');
      target.style.height = '1px';
      target.style.height = 14 + target.scrollHeight + 'px';
    }
  }, {
    key: "handleBlur",
    value: function handleBlur(_ref3) {
      var target = _ref3.target;
      //console.log('blurring...');
      target.style.height = '1px';
      target.style.height = 14 + target.scrollHeight + 'px';
      var id = $(target).attr('textarea-id');
      var edited = false;
      var obj = this.state.screens;
      /*
      	attract-caption-1
      	attract-caption-2
      */

      if (id == 'main-title') {
        var hypebox = obj[this.state.hypebox_index - 1];
        hypebox.title = $(target).val();
        edited = true;
      }

      if (id == 'topic-title') {
        var topic = obj[this.state.hypebox_index - 1].topics[this.state.topic_index];
        topic.title = $(target).val();
        edited = true;
      }

      if (id == 'intro') {
        var _topic = obj[this.state.hypebox_index - 1].topics[this.state.topic_index];
        _topic.intro = $(target).val();
        edited = true;
      }

      if (id == 'attract-caption-1' || id == 'attract-caption-2') {
        var artifact = obj[this.state.hypebox_index - 1].topics[this.state.topic_index]['artifact'][0];
        var cap1 = $('[textarea-id="attract-caption-1"]').val();
        var cap2 = $('[textarea-id="attract-caption-2"]').val();
        console.log(cap1, cap2);
        if (cap2 != '') artifact.caption = cap1 + '<br>' + cap2;else artifact.caption = cap1;
        edited = true;
      }

      if (id == 'content-item-text') {
        var item = obj[this.state.hypebox_index - 1].topics[this.state.topic_index]['deepDive']['columns'][0]['item'][this.state.contentItem_index];
        if (item.figure) item.figure.caption = $(target).val();else if (item.video) item.video.caption = $(target).val();else item.text = $(target).val();
        edited = true;
      }

      if (edited) this.setState({
        screens: obj
      }); //console.log('content changed?', this.Content.hasChanged());

      this.setState({
        content_modified: this.Content.hasChanged(),
        content_saveReady: false
      }); //console.log('blur', $(target).attr('textarea-id') );
    }
  }, {
    key: "handleChange",
    value: function handleChange(evt, id) {
      var o = {};
      o[id] = evt.nativeEvent.target.value;
      this.setState(o); //console.log(id, evt.nativeEvent);
    }
  }, {
    key: "getArtifactDiameter",
    value: function getArtifactDiameter() {
      return this.state.screens[this.state.hypebox_index - 1].topics[this.state.topic_index]['artifact'][0]['loc']['d'];
    }
  }, {
    key: "setTopicArtifactDiameter",
    value: function setTopicArtifactDiameter(diameter) {
      var _this16 = this;

      var obj = this.state.screens;
      obj[this.state.hypebox_index - 1].topics[this.state.topic_index]['artifact'][0]['loc']['d'] = diameter; //this.state.screens[this.state.hypebox_index-1].topics[this.state.topic_index]['artifact'][0]['loc']['d'] = diameter;

      this.setState({
        screens: obj
      }); //this.TextArea.updateAll();

      setTimeout(function () {
        _this16.Content.resizeTextAreas();

        _this16.setState({
          content_modified: _this16.Content.hasChanged(),
          content_saveReady: false
        });
      }, 1);
    }
  }, {
    key: "getArtifactCaption",
    value: function getArtifactCaption(lineIndex) {
      var caption = this.state.screens[this.state.hypebox_index - 1].topics[this.state.topic_index]['artifact'][0]['caption'] || '';
      var captionArr = caption.split('<br>');
      if (lineIndex <= captionArr.length - 1) return captionArr[lineIndex];else return '';
    }
  }, {
    key: "getContentItems",
    value: function getContentItems() {
      return this.state.screens[this.state.hypebox_index - 1].topics[this.state.topic_index]['deepDive']['columns'][0]['item'] || [];
    }
  }, {
    key: "getCurrContentItem",
    value: function getCurrContentItem() {
      return this.getContentItems()[this.state.contentItem_index] || {
        text: '',
        figure: '',
        video: ''
      };
    }
  }, {
    key: "getContentItem",
    value: function getContentItem(index) {
      return this.getContentItems()[index];
    }
  }, {
    key: "getContentImageSrc",
    value: function getContentImageSrc(index) {
      return this.getContentItems()[index].figure.src;
    }
  }, {
    key: "getContentVideoSrc",
    value: function getContentVideoSrc(index) {
      return this.getContentItems()[index].video.src;
    }
  }, {
    key: "getContentItemTextCaption",
    value: function getContentItemTextCaption(index) {
      var item = this.getContentItems()[index];
      if (!item) return '';
      if (item.figure != undefined) return item.figure.caption;
      if (item.video != undefined) return item.video.caption;
      return item.text;
    }
  }, {
    key: "getContentItemType",
    value: function getContentItemType(index) {
      var type = 'text';
      if (!this.getContentItems()[index]) return '';
      if (this.getContentItems()[index].figure != undefined) type = 'image';
      if (this.getContentItems()[index].video != undefined) type = 'video';
      return type;
    }
  }, {
    key: "render",
    value: function render() {
      var _this17 = this;

      return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
        hypebox_index: this.state.hypebox_index,
        content_saveReady: this.state.content_saveReady,
        content_modified: this.state.content_modified,
        Content: this.Content
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("section", {
        className: "title"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("h3", null, "Title"), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("textarea", {
        onBlur: this.handleBlur,
        onKeyUp: this.handleKeyUp,
        "textarea-value": this.state.screens[this.state.hypebox_index - 1].title,
        "textarea-id": "main-title"
      })), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "topic"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "topic-settings"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "col left"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "row top"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("h3", null, "topics")), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "row btm"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "box"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_components_RepeatTopicSelector2_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
        selectTopic: this.selectTopic,
        topic_index: this.state.topic_index,
        topics: this.state.screens[this.state.hypebox_index - 1].topics
      })))), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "col right"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "row top"
      }), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "row btm"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("section", {
        className: "slider",
        "slider-id": "topic-posx"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("h3", null, "position ", react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("span", null, "x")), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("h4", null, this.state.pos_topicx, "%"), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "slider-container"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "bar-hitarea"
      }), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "bar"
      }), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "btn"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "inner"
      })))), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("section", {
        className: "slider",
        "slider-id": "topic-posy"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("h3", null, "position ", react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("span", null, "y")), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("h4", null, this.state.pos_topicy, "%"), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "slider-container"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "bar-hitarea"
      }), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "bar"
      }), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "btn"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "inner"
      })))), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("section", {
        className: "toggle"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("h3", null, "artifact / diameter"), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("li", {
        className: this.getArtifactDiameter() < 2 ? 'selected' : '',
        onClick: function onClick() {
          _this17.setTopicArtifactDiameter(1);
        }
      }, "none", react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("span", null)), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("li", {
        className: this.getArtifactDiameter() > 2 && this.getArtifactDiameter() <= 225 ? 'selected' : '',
        onClick: function onClick() {
          _this17.setTopicArtifactDiameter(225);
        }
      }, "small", react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("span", null)), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("li", {
        className: this.getArtifactDiameter() > 225 && this.getArtifactDiameter() <= 350 ? 'selected' : '',
        onClick: function onClick() {
          _this17.setTopicArtifactDiameter(350);
        }
      }, "medium", react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("span", null)), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("li", {
        className: this.getArtifactDiameter() > 350 && this.getArtifactDiameter() <= 425 ? 'selected' : '',
        onClick: function onClick() {
          _this17.setTopicArtifactDiameter(425);
        }
      }, "large", react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("span", null)), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("li", {
        className: this.getArtifactDiameter() > 425 ? 'selected' : '',
        onClick: function onClick() {
          _this17.setTopicArtifactDiameter(525);
        }
      }, "XL", react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("span", null))))))), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "divider"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "triangle"
      })), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("section", {
        className: "subtitle"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("h3", null, "Topic Title"), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("textarea", {
        onBlur: this.handleBlur,
        "textarea-id": "topic-title",
        onKeyUp: this.handleKeyUp,
        "textarea-value": this.state.screens[this.state.hypebox_index - 1].topics[this.state.topic_index].title
      })), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("section", {
        className: this.getArtifactDiameter() < 10 ? 'hidden' : ''
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("h3", null, "Artifact Caption"), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("textarea", {
        onBlur: this.handleBlur,
        "textarea-id": "attract-caption-1",
        placeholder: "Attract Caption - Line 1",
        onKeyUp: this.handleKeyUp,
        "textarea-value": this.getArtifactCaption(0)
      }), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("textarea", {
        onBlur: this.handleBlur,
        "textarea-id": "attract-caption-2",
        placeholder: "Attract Caption - Line 2 ",
        onKeyUp: this.handleKeyUp,
        "textarea-value": this.getArtifactCaption(1)
      })), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("section", null, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("h3", null, "Intro"), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("textarea", {
        onBlur: this.handleBlur,
        "textarea-id": "intro",
        onKeyUp: this.handleKeyUp,
        "textarea-value": this.state.screens[this.state.hypebox_index - 1].topics[this.state.topic_index].intro
      })), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "section content-box"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "col left"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "row top"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("h3", {
        className: "inactive"
      }, "content box")), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "row btm"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "box"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("ul", {
        className: "content-placement"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("li", {
        style: {
          left: this.state.pos_contentx + '%',
          top: this.state.pos_contenty + '%'
        }
      }))))), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "col right"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "row top"
      }), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "row btm"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("section", {
        className: "slider",
        "slider-id": "content-posx"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("h3", null, "position ", react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("span", null, "x")), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("h4", null, this.state.pos_contentx, "%"), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "slider-container"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "bar-hitarea"
      }), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "bar"
      }), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "btn"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "inner"
      })))), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("section", {
        className: "slider",
        "slider-id": "content-posy"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("h3", null, "position ", react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("span", null, "y")), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("h4", null, this.state.pos_contenty, "%"), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "slider-container"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "bar-hitarea"
      }), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "bar"
      }), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "btn"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "inner"
      }))))))), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "section content"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "col left"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "row top"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("h3", null, "content")), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "row btm"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "box"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("ul", null, this.getContentItems().map(function (item, index) {
        var type = item.figure != undefined ? 'image' : item.video != undefined ? 'video' : 'text';
        return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("li", {
          className: type + ' ' + (index == _this17.state.contentItem_index ? 'selected' : '')
        }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
          className: 'icon ' + type,
          onClick: function onClick() {
            _this17.handleContentItemClick(index);
          }
        }), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
          className: "remove",
          onClick: function onClick() {
            _this17.ContentSelector.removeContentItem(index);
          }
        }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("span", null)));
      }), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("li", {
        className: "add"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "icon",
        onClick: function onClick() {
          _this17.ContentSelector.open();
        }
      })))))), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "col right"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "row top"
      }), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "row btm",
        id: "ContentItemData"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("section", null, this.getContentItemType(this.state.contentItem_index) == 'image' && react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "img-container"
      }, " ", react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("img", {
        src: this.getContentImageSrc(this.state.contentItem_index)
      }), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "inner",
        onClick: function onClick() {
          _this17.ContentSelector.selectFile();
        }
      }, "upload image"))), this.getContentItemType(this.state.contentItem_index) == 'video' && react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "img-container"
      }, " ", react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("video", {
        src: this.getContentVideoSrc(this.state.contentItem_index)
      }), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "inner",
        onClick: function onClick() {
          _this17.ContentSelector.selectFile();
        }
      }, "upload video"))), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("h3", null, this.getContentItemType(this.state.contentItem_index) == 'text' ? 'text' : this.getContentItemType(this.state.contentItem_index) == 'image' ? 'image caption' : 'video caption'), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("textarea", {
        placeholder: "Please enter text or leave empty as a spacer.",
        "textarea-id": "content-item-text",
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        onKeyUp: this.handleKeyUp,
        "textarea-value": this.getContentItemTextCaption(this.state.contentItem_index)
      })))))), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("form", {
        id: "UploadFileForm",
        action: "/temp-upload",
        method: "post",
        enctype: "multipart/form-data",
        style: {
          display: 'none'
        }
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("input", {
        id: "file-input",
        type: "file",
        name: "image",
        accept: "image/jpeg, image/jpg, image/png, video/mp4"
      }), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("input", {
        type: "submit"
      })), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        id: "ContentSelector"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "inner"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("h1", null, "Add Content Type"), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "fullwidth"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("li", {
        onClick: function onClick() {
          _this17.ContentSelector.addText();
        }
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "icon text"
      }), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("h2", null, "TEXT")), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("li", {
        onClick: function onClick() {
          _this17.ContentSelector.addImage();
        }
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "icon image"
      }), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("h2", null, "IMAGE w/ CAPTION")), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("li", {
        onClick: function onClick() {
          _this17.ContentSelector.addVideo();
        }
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "icon video"
      }), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("h2", null, "VIDEO w/ CAPTION"))))), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("a", {
        href: true,
        onClick: function onClick() {
          _this17.ContentSelector.close();
        },
        className: "close"
      })), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "history"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "full-width"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("a", {
        href: true,
        className: 'history-btn ' + (this.state.showHistory ? 'showing' : ''),
        onClick: function onClick() {
          _this17.Content.getHistory(true, true);
        }
      }, "REVISION HISTORY ", react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("span", null, "(Newest to Oldest)"))), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("ul", {
        className: this.state.showHistory ? 'show' : ''
      }, this.state.history.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("a", {
          className: _this17.state.currHistory == item.file ? 'selected' : '',
          onClick: function onClick() {
            _this17.Content.history(item.file);
          }
        }, item.name));
      }), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("a", {
        className: this.state.currHistory == 'original.json' ? 'selected' : '',
        onClick: function onClick() {
          _this17.Content.history("original.json");
        }
      }, "Pre-CMS Version (Original/Unedited)")))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref4) {
        var query, req, res, errorCode, json, ua;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref4.query, req = _ref4.req;
                _context.next = 3;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_18___default()('https://api.github.com/repos/zeit/next.js');

              case 3:
                res = _context.sent;
                errorCode = res.statusCode > 200 ? res.statusCode : false;
                _context.next = 7;
                return res.json();

              case 7:
                json = _context.sent;
                ua = req ? req.headers['user-agent'] : navigator.userAgent; //console.log('query:', query);
                //console.log('json', json);
                //console.log(query);

                return _context.abrupt("return", {
                  hypebox_index: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_4___default()(query.id),
                  screens: [],
                  ua: ua
                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Hypebox;
}(react__WEBPACK_IMPORTED_MODULE_14___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Hypebox);

/***/ }),

/***/ "./sass/styles.scss":
/*!**************************!*\
  !*** ./sass/styles.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/*!********************************!*\
  !*** multi ./pages/hypebox.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Ash Tiwari\Documents\GitHub\nbl-museum-cms\pages\hypebox.js */"./pages/hypebox.js");


/***/ }),

/***/ "core-js/library/fn/get-iterator":
/*!**************************************************!*\
  !*** external "core-js/library/fn/get-iterator" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/parse-int":
/*!***********************************************!*\
  !*** external "core-js/library/fn/parse-int" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=hypebox.js.map