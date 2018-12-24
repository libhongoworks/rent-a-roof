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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(19);


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("firebase/firestore");

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(3);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(1);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// CONCATENATED MODULE: ./components/header.js



var header_Header = function Header() {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement("nav", {
    className: "navbar container"
  }, external_react_default.a.createElement(link_default.a, {
    href: ""
  }, external_react_default.a.createElement("a", {
    className: "navbar-brand"
  }, external_react_default.a.createElement("img", {
    src: "../static/images/00108-real-estate-logos-design-free-house-logo-maker-01.png",
    alt: "",
    height: "72"
  }), external_react_default.a.createElement("span", null, "Rent-A-Roof"))), external_react_default.a.createElement("div", {
    className: "userSignIn"
  }, external_react_default.a.createElement("i", {
    className: "far fa-user"
  }), external_react_default.a.createElement("a", {
    className: "btn"
  }, external_react_default.a.createElement("button", {
    className: "btn btn-outline-dark"
  }, "Sign in")))));
};

/* harmony default export */ var header = (header_Header);
// CONCATENATED MODULE: ./components/provinces.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var provinces_Province =
/*#__PURE__*/
function (_Component) {
  _inherits(Province, _Component);

  function Province(props) {
    var _this;

    _classCallCheck(this, Province);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Province).call(this, props));
    _this.name = props.name;
    return _this;
  }

  _createClass(Province, [{
    key: "render",
    value: function render(props) {
      return external_react_default.a.createElement("div", {
        className: "col-4"
      }, external_react_default.a.createElement(link_default.a, {
        href: ""
      }, external_react_default.a.createElement("a", {
        className: "provinceLink"
      }, external_react_default.a.createElement("h5", null, this.name))));
    }
  }]);

  return Province;
}(external_react_["Component"]);


// CONCATENATED MODULE: ./components/searchInput.js
function searchInput_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { searchInput_typeof = function _typeof(obj) { return typeof obj; }; } else { searchInput_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return searchInput_typeof(obj); }

function searchInput_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function searchInput_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function searchInput_createClass(Constructor, protoProps, staticProps) { if (protoProps) searchInput_defineProperties(Constructor.prototype, protoProps); if (staticProps) searchInput_defineProperties(Constructor, staticProps); return Constructor; }

function searchInput_possibleConstructorReturn(self, call) { if (call && (searchInput_typeof(call) === "object" || typeof call === "function")) { return call; } return searchInput_assertThisInitialized(self); }

function searchInput_getPrototypeOf(o) { searchInput_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return searchInput_getPrototypeOf(o); }

function searchInput_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) searchInput_setPrototypeOf(subClass, superClass); }

function searchInput_setPrototypeOf(o, p) { searchInput_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return searchInput_setPrototypeOf(o, p); }

function searchInput_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



var searchInput_SearchInput =
/*#__PURE__*/
function (_Component) {
  searchInput_inherits(SearchInput, _Component);

  function SearchInput(props) {
    var _this;

    searchInput_classCallCheck(this, SearchInput);

    _this = searchInput_possibleConstructorReturn(this, searchInput_getPrototypeOf(SearchInput).call(this, props));
    _this.state = {
      searchTerm: ""
    };
    _this.handleSearchInput = _this.handleSearchInput.bind(searchInput_assertThisInitialized(searchInput_assertThisInitialized(_this)));
    return _this;
  }

  searchInput_createClass(SearchInput, [{
    key: "handleSearchInput",
    value: function handleSearchInput(e) {
      this.setState({
        searchTerm: e.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("input", {
        id: "suburb-input",
        className: "form-control",
        placeholder: "Type Town/City",
        value: this.state.searchTerm,
        onChange: this.handleSearchInput
      });
    }
  }]);

  return SearchInput;
}(external_react_["Component"]);


// CONCATENATED MODULE: ./static/config/db.js
var dbConfig = {
  apiKey: "AIzaSyDYLRCkHsB3c0iaNCBudn4ZG7uCR9Tsbt8",
  authDomain: "rentaroofza.firebaseapp.com",
  databaseURL: "https://rentaroofza.firebaseio.com",
  projectId: "rentaroofza",
  storageBucket: "rentaroofza.appspot.com",
  messagingSenderId: "601210377767"
};
// EXTERNAL MODULE: external "firebase/app"
var app_ = __webpack_require__(2);
var app_default = /*#__PURE__*/__webpack_require__.n(app_);

// EXTERNAL MODULE: external "firebase/firestore"
var firestore_ = __webpack_require__(5);

// CONCATENATED MODULE: ./pages/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pages_Index; });
function pages_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { pages_typeof = function _typeof(obj) { return typeof obj; }; } else { pages_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return pages_typeof(obj); }

function pages_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function pages_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function pages_createClass(Constructor, protoProps, staticProps) { if (protoProps) pages_defineProperties(Constructor.prototype, protoProps); if (staticProps) pages_defineProperties(Constructor, staticProps); return Constructor; }

function pages_possibleConstructorReturn(self, call) { if (call && (pages_typeof(call) === "object" || typeof call === "function")) { return call; } return pages_assertThisInitialized(self); }

function pages_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function pages_getPrototypeOf(o) { pages_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return pages_getPrototypeOf(o); }

function pages_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) pages_setPrototypeOf(subClass, superClass); }

function pages_setPrototypeOf(o, p) { pages_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return pages_setPrototypeOf(o, p); }










if (!app_default.a.apps.length) {
  app_default.a.initializeApp(dbConfig);
  console.log("Firebase initialized");
}

var db = app_default.a.firestore();
db.settings({
  timestampsInSnapshots: true
});

var pages_HeadContents = function HeadContents() {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement("title", null, "Rent A Roof"), external_react_default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
  }), external_react_default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://use.fontawesome.com/releases/v5.6.3/css/all.css",
    integrity: "sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/",
    crossorigin: "anonymous"
  }), external_react_default.a.createElement("link", {
    rel: "stylesheet",
    href: "../static/css/index.css"
  }));
};

var pages_Index =
/*#__PURE__*/
function (_Component) {
  pages_inherits(Index, _Component);

  function Index(props) {
    var _this;

    pages_classCallCheck(this, Index);

    _this = pages_possibleConstructorReturn(this, pages_getPrototypeOf(Index).call(this, props));
    _this.state = {
      provinces: []
    };
    return _this;
  }

  pages_createClass(Index, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      var prevState = this.state.provinces;
      db.collection("provinces").get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          prevState.push({
            id: doc.id,
            name: doc.data().name
          });

          _this2.setState({
            provinces: prevState
          });
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement(pages_HeadContents, null)), external_react_default.a.createElement(header, null), external_react_default.a.createElement("div", {
        id: "landing-bg"
      }, external_react_default.a.createElement("div", {
        id: "landing-text"
      }, external_react_default.a.createElement("h1", {
        id: "landing-heading"
      }, "A home for everyone"), external_react_default.a.createElement("br", null), external_react_default.a.createElement("br", null), external_react_default.a.createElement(searchInput_SearchInput, null))), external_react_default.a.createElement("div", {
        id: "provinces-list",
        className: "container"
      }, external_react_default.a.createElement("h1", {
        id: "provinces-heading"
      }, "Property by provinces"), external_react_default.a.createElement("div", {
        className: "row"
      }, this.state.provinces.map(function (province) {
        return external_react_default.a.createElement(provinces_Province, {
          name: province.name,
          key: province.id
        });
      }))));
    }
  }]);

  return Index;
}(external_react_["Component"]);



/***/ })
/******/ ]);