/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.log = function (event) {
        console.log(event);
    };
    App.prototype.render = function () {
        return React.createElement("div", null,
            React.createElement("h1", null, "App"),
            React.createElement("p", null, "Content would be here"),
            React.createElement("button", { className: "", onClick: this.log }, "Click me for output"));
    };
    return App;
}(React.Component));
exports.App = App;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(5);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(7)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../css-loader/index.js!./milligram.css", function() {
			var newContent = require("!!../../css-loader/index.js!./milligram.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(3);
// Import css from milligram
__webpack_require__(2);
var App_1 = __webpack_require__(1);
ReactDOM.render(React.createElement(App_1.App, null), document.getElementById('app'));


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, "/*!\n * Milligram v1.3.0\n * https://milligram.github.io\n *\n * Copyright (c) 2017 CJ Patoilo\n * Licensed under the MIT license\n */\n\n*,\n*:after,\n*:before {\n  box-sizing: inherit;\n}\n\nhtml {\n  box-sizing: border-box;\n  font-size: 62.5%;\n}\n\nbody {\n  color: #606c76;\n  font-family: 'Roboto', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;\n  font-size: 1.6em;\n  font-weight: 300;\n  letter-spacing: .01em;\n  line-height: 1.6;\n}\n\nblockquote {\n  border-left: 0.3rem solid #d1d1d1;\n  margin-left: 0;\n  margin-right: 0;\n  padding: 1rem 1.5rem;\n}\n\nblockquote *:last-child {\n  margin-bottom: 0;\n}\n\n.button,\nbutton,\ninput[type='button'],\ninput[type='reset'],\ninput[type='submit'] {\n  background-color: #9b4dca;\n  border: 0.1rem solid #9b4dca;\n  border-radius: .4rem;\n  color: #fff;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 1.1rem;\n  font-weight: 700;\n  height: 3.8rem;\n  letter-spacing: .1rem;\n  line-height: 3.8rem;\n  padding: 0 3.0rem;\n  text-align: center;\n  text-decoration: none;\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n\n.button:focus, .button:hover,\nbutton:focus,\nbutton:hover,\ninput[type='button']:focus,\ninput[type='button']:hover,\ninput[type='reset']:focus,\ninput[type='reset']:hover,\ninput[type='submit']:focus,\ninput[type='submit']:hover {\n  background-color: #606c76;\n  border-color: #606c76;\n  color: #fff;\n  outline: 0;\n}\n\n.button[disabled],\nbutton[disabled],\ninput[type='button'][disabled],\ninput[type='reset'][disabled],\ninput[type='submit'][disabled] {\n  cursor: default;\n  opacity: .5;\n}\n\n.button[disabled]:focus, .button[disabled]:hover,\nbutton[disabled]:focus,\nbutton[disabled]:hover,\ninput[type='button'][disabled]:focus,\ninput[type='button'][disabled]:hover,\ninput[type='reset'][disabled]:focus,\ninput[type='reset'][disabled]:hover,\ninput[type='submit'][disabled]:focus,\ninput[type='submit'][disabled]:hover {\n  background-color: #9b4dca;\n  border-color: #9b4dca;\n}\n\n.button.button-outline,\nbutton.button-outline,\ninput[type='button'].button-outline,\ninput[type='reset'].button-outline,\ninput[type='submit'].button-outline {\n  background-color: transparent;\n  color: #9b4dca;\n}\n\n.button.button-outline:focus, .button.button-outline:hover,\nbutton.button-outline:focus,\nbutton.button-outline:hover,\ninput[type='button'].button-outline:focus,\ninput[type='button'].button-outline:hover,\ninput[type='reset'].button-outline:focus,\ninput[type='reset'].button-outline:hover,\ninput[type='submit'].button-outline:focus,\ninput[type='submit'].button-outline:hover {\n  background-color: transparent;\n  border-color: #606c76;\n  color: #606c76;\n}\n\n.button.button-outline[disabled]:focus, .button.button-outline[disabled]:hover,\nbutton.button-outline[disabled]:focus,\nbutton.button-outline[disabled]:hover,\ninput[type='button'].button-outline[disabled]:focus,\ninput[type='button'].button-outline[disabled]:hover,\ninput[type='reset'].button-outline[disabled]:focus,\ninput[type='reset'].button-outline[disabled]:hover,\ninput[type='submit'].button-outline[disabled]:focus,\ninput[type='submit'].button-outline[disabled]:hover {\n  border-color: inherit;\n  color: #9b4dca;\n}\n\n.button.button-clear,\nbutton.button-clear,\ninput[type='button'].button-clear,\ninput[type='reset'].button-clear,\ninput[type='submit'].button-clear {\n  background-color: transparent;\n  border-color: transparent;\n  color: #9b4dca;\n}\n\n.button.button-clear:focus, .button.button-clear:hover,\nbutton.button-clear:focus,\nbutton.button-clear:hover,\ninput[type='button'].button-clear:focus,\ninput[type='button'].button-clear:hover,\ninput[type='reset'].button-clear:focus,\ninput[type='reset'].button-clear:hover,\ninput[type='submit'].button-clear:focus,\ninput[type='submit'].button-clear:hover {\n  background-color: transparent;\n  border-color: transparent;\n  color: #606c76;\n}\n\n.button.button-clear[disabled]:focus, .button.button-clear[disabled]:hover,\nbutton.button-clear[disabled]:focus,\nbutton.button-clear[disabled]:hover,\ninput[type='button'].button-clear[disabled]:focus,\ninput[type='button'].button-clear[disabled]:hover,\ninput[type='reset'].button-clear[disabled]:focus,\ninput[type='reset'].button-clear[disabled]:hover,\ninput[type='submit'].button-clear[disabled]:focus,\ninput[type='submit'].button-clear[disabled]:hover {\n  color: #9b4dca;\n}\n\ncode {\n  background: #f4f5f6;\n  border-radius: .4rem;\n  font-size: 86%;\n  margin: 0 .2rem;\n  padding: .2rem .5rem;\n  white-space: nowrap;\n}\n\npre {\n  background: #f4f5f6;\n  border-left: 0.3rem solid #9b4dca;\n  overflow-y: hidden;\n}\n\npre > code {\n  border-radius: 0;\n  display: block;\n  padding: 1rem 1.5rem;\n  white-space: pre;\n}\n\nhr {\n  border: 0;\n  border-top: 0.1rem solid #f4f5f6;\n  margin: 3.0rem 0;\n}\n\ninput[type='email'],\ninput[type='number'],\ninput[type='password'],\ninput[type='search'],\ninput[type='tel'],\ninput[type='text'],\ninput[type='url'],\ntextarea,\nselect {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  background-color: transparent;\n  border: 0.1rem solid #d1d1d1;\n  border-radius: .4rem;\n  box-shadow: none;\n  box-sizing: inherit;\n  height: 3.8rem;\n  padding: .6rem 1.0rem;\n  width: 100%;\n}\n\ninput[type='email']:focus,\ninput[type='number']:focus,\ninput[type='password']:focus,\ninput[type='search']:focus,\ninput[type='tel']:focus,\ninput[type='text']:focus,\ninput[type='url']:focus,\ntextarea:focus,\nselect:focus {\n  border-color: #9b4dca;\n  outline: 0;\n}\n\nselect {\n  background: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"14\" viewBox=\"0 0 29 14\" width=\"29\"><path fill=\"#d1d1d1\" d=\"M9.37727 3.625l5.08154 6.93523L19.54036 3.625\"/></svg>') center right no-repeat;\n  padding-right: 3.0rem;\n}\n\nselect:focus {\n  background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"14\" viewBox=\"0 0 29 14\" width=\"29\"><path fill=\"#9b4dca\" d=\"M9.37727 3.625l5.08154 6.93523L19.54036 3.625\"/></svg>');\n}\n\ntextarea {\n  min-height: 6.5rem;\n}\n\nlabel,\nlegend {\n  display: block;\n  font-size: 1.6rem;\n  font-weight: 700;\n  margin-bottom: .5rem;\n}\n\nfieldset {\n  border-width: 0;\n  padding: 0;\n}\n\ninput[type='checkbox'],\ninput[type='radio'] {\n  display: inline;\n}\n\n.label-inline {\n  display: inline-block;\n  font-weight: normal;\n  margin-left: .5rem;\n}\n\n.container {\n  margin: 0 auto;\n  max-width: 112.0rem;\n  padding: 0 2.0rem;\n  position: relative;\n  width: 100%;\n}\n\n.row {\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n  width: 100%;\n}\n\n.row.row-no-padding {\n  padding: 0;\n}\n\n.row.row-no-padding > .column {\n  padding: 0;\n}\n\n.row.row-wrap {\n  flex-wrap: wrap;\n}\n\n.row.row-top {\n  align-items: flex-start;\n}\n\n.row.row-bottom {\n  align-items: flex-end;\n}\n\n.row.row-center {\n  align-items: center;\n}\n\n.row.row-stretch {\n  align-items: stretch;\n}\n\n.row.row-baseline {\n  align-items: baseline;\n}\n\n.row .column {\n  display: block;\n  flex: 1 1 auto;\n  margin-left: 0;\n  max-width: 100%;\n  width: 100%;\n}\n\n.row .column.column-offset-10 {\n  margin-left: 10%;\n}\n\n.row .column.column-offset-20 {\n  margin-left: 20%;\n}\n\n.row .column.column-offset-25 {\n  margin-left: 25%;\n}\n\n.row .column.column-offset-33, .row .column.column-offset-34 {\n  margin-left: 33.3333%;\n}\n\n.row .column.column-offset-50 {\n  margin-left: 50%;\n}\n\n.row .column.column-offset-66, .row .column.column-offset-67 {\n  margin-left: 66.6666%;\n}\n\n.row .column.column-offset-75 {\n  margin-left: 75%;\n}\n\n.row .column.column-offset-80 {\n  margin-left: 80%;\n}\n\n.row .column.column-offset-90 {\n  margin-left: 90%;\n}\n\n.row .column.column-10 {\n  flex: 0 0 10%;\n  max-width: 10%;\n}\n\n.row .column.column-20 {\n  flex: 0 0 20%;\n  max-width: 20%;\n}\n\n.row .column.column-25 {\n  flex: 0 0 25%;\n  max-width: 25%;\n}\n\n.row .column.column-33, .row .column.column-34 {\n  flex: 0 0 33.3333%;\n  max-width: 33.3333%;\n}\n\n.row .column.column-40 {\n  flex: 0 0 40%;\n  max-width: 40%;\n}\n\n.row .column.column-50 {\n  flex: 0 0 50%;\n  max-width: 50%;\n}\n\n.row .column.column-60 {\n  flex: 0 0 60%;\n  max-width: 60%;\n}\n\n.row .column.column-66, .row .column.column-67 {\n  flex: 0 0 66.6666%;\n  max-width: 66.6666%;\n}\n\n.row .column.column-75 {\n  flex: 0 0 75%;\n  max-width: 75%;\n}\n\n.row .column.column-80 {\n  flex: 0 0 80%;\n  max-width: 80%;\n}\n\n.row .column.column-90 {\n  flex: 0 0 90%;\n  max-width: 90%;\n}\n\n.row .column .column-top {\n  align-self: flex-start;\n}\n\n.row .column .column-bottom {\n  align-self: flex-end;\n}\n\n.row .column .column-center {\n  -ms-grid-row-align: center;\n      align-self: center;\n}\n\n@media (min-width: 40rem) {\n  .row {\n    flex-direction: row;\n    margin-left: -1.0rem;\n    width: calc(100% + 2.0rem);\n  }\n  .row .column {\n    margin-bottom: inherit;\n    padding: 0 1.0rem;\n  }\n}\n\na {\n  color: #9b4dca;\n  text-decoration: none;\n}\n\na:focus, a:hover {\n  color: #606c76;\n}\n\ndl,\nol,\nul {\n  list-style: none;\n  margin-top: 0;\n  padding-left: 0;\n}\n\ndl dl,\ndl ol,\ndl ul,\nol dl,\nol ol,\nol ul,\nul dl,\nul ol,\nul ul {\n  font-size: 90%;\n  margin: 1.5rem 0 1.5rem 3.0rem;\n}\n\nol {\n  list-style: decimal inside;\n}\n\nul {\n  list-style: circle inside;\n}\n\n.button,\nbutton,\ndd,\ndt,\nli {\n  margin-bottom: 1.0rem;\n}\n\nfieldset,\ninput,\nselect,\ntextarea {\n  margin-bottom: 1.5rem;\n}\n\nblockquote,\ndl,\nfigure,\nform,\nol,\np,\npre,\ntable,\nul {\n  margin-bottom: 2.5rem;\n}\n\ntable {\n  border-spacing: 0;\n  width: 100%;\n}\n\ntd,\nth {\n  border-bottom: 0.1rem solid #e1e1e1;\n  padding: 1.2rem 1.5rem;\n  text-align: left;\n}\n\ntd:first-child,\nth:first-child {\n  padding-left: 0;\n}\n\ntd:last-child,\nth:last-child {\n  padding-right: 0;\n}\n\nb,\nstrong {\n  font-weight: bold;\n}\n\np {\n  margin-top: 0;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: 300;\n  letter-spacing: -.1rem;\n  margin-bottom: 2.0rem;\n  margin-top: 0;\n}\n\nh1 {\n  font-size: 4.6rem;\n  line-height: 1.2;\n}\n\nh2 {\n  font-size: 3.6rem;\n  line-height: 1.25;\n}\n\nh3 {\n  font-size: 2.8rem;\n  line-height: 1.3;\n}\n\nh4 {\n  font-size: 2.2rem;\n  letter-spacing: -.08rem;\n  line-height: 1.35;\n}\n\nh5 {\n  font-size: 1.8rem;\n  letter-spacing: -.05rem;\n  line-height: 1.5;\n}\n\nh6 {\n  font-size: 1.6rem;\n  letter-spacing: 0;\n  line-height: 1.4;\n}\n\nimg {\n  max-width: 100%;\n}\n\n.clearfix:after {\n  clear: both;\n  content: ' ';\n  display: table;\n}\n\n.float-left {\n  float: left;\n}\n\n.float-right {\n  float: right;\n}", ""]);

// exports


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		// Test for IE <= 9 as proposed by Browserhacks
		// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
		// Tests for existence of standard globals is to allow style-loader 
		// to operate correctly into non-standard environments
		// @see https://github.com/webpack-contrib/style-loader/issues/177
		return window && document && document.all && !window.atob;
	}),
	getElement = (function(fn) {
		var memo = {};
		return function(selector) {
			if (typeof memo[selector] === "undefined") {
				memo[selector] = fn.call(this, selector);
			}
			return memo[selector]
		};
	})(function (styleTarget) {
		return document.querySelector(styleTarget)
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [],
	fixUrls = __webpack_require__(8);

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (typeof options.insertInto === "undefined") options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list, options);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list, options) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var styleTarget = getElement(options.insertInto)
	if (!styleTarget) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			styleTarget.insertBefore(styleElement, styleTarget.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			styleTarget.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			styleTarget.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		styleTarget.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	options.attrs.type = "text/css";

	attachTagAttrs(styleElement, options.attrs);
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	attachTagAttrs(linkElement, options.attrs);
	insertStyleElement(options, linkElement);
	return linkElement;
}

function attachTagAttrs(element, attrs) {
	Object.keys(attrs).forEach(function (key) {
		element.setAttribute(key, attrs[key]);
	});
}

function addStyle(obj, options) {
	var styleElement, update, remove, transformResult;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    transformResult = options.transform(obj.css);
	    
	    if (transformResult) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = transformResult;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css. 
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement, options);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/* If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
	and there is no publicPath defined then lets turn convertToAbsoluteUrls
	on by default.  Otherwise default to the convertToAbsoluteUrls option
	directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls){
		css = fixUrls(css);
	}

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map