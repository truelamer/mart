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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_rainbows_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _js_rainbows_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_rainbows_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_unicorns_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _js_unicorns_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_unicorns_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_main_scss__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),
/* 1 */
/***/ (function(module, exports) {

let currentSlide = 0;
let currentMargin = 0;

function animateWithMargin(direction) {
    if (currentSlide === 0 && direction < 0 || currentSlide === 6 && direction > 0) {
        return false;
    }

    currentSlide += direction;
    currentMargin = -currentSlide * 100;

    $('#carousel-with-margin .first').css('margin-left', currentMargin + '%');
}

let carousel = document.getElementById('carousel-with-margin');
carousel.children[0].addEventListener('click', function() { animateWithMargin(-1) });
carousel.children[carousel.children.length - 1].addEventListener('click', function() { animateWithMargin(1) });


let currentSlide2 = 0;
let currentTransform = 0;
function animateWithTransform(direction) {
    if (currentSlide2 === 0 && direction < 0 || currentSlide2 === 6 && direction > 0) {
        return false;
    }

    currentSlide2 += direction;
    currentTransform = -currentSlide2 * 100;

    $('#carousel-with-transform .slides-container').css('transform', 'translateX(' + currentTransform + '%)');
}

$('#carousel-with-transform .carousel-button-left').click(function() { animateWithTransform(-1) });
$('#carousel-with-transform .carousel-button-right').click(() => animateWithTransform(1));

/***/ }),
/* 2 */
/***/ (function(module, exports) {


let a = 12345;

String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}

var reverse = function(x) {
    let s = x + '';         // s = '12345'
    let l = s.length;       // l = 5
    let stepsCount = parseInt(l / 2);  // 2

    for (let i = 0; i < stepsCount; i++) {
        let a = s[i];
        let b = s[l - 1 - i];
        
        s = s.replaceAt(i, b);
        s = s.replaceAt(l - 1 - i, a);
    }

    return +s;
};

console.log(reverse(a));

/* &&

i result  new_result
4   ''       '5'     [0] [4] => [0] [l - 1]
3   '5'     '54'     [1] [3] => [1] [l - 1 - 1]
2   '54'    '543'    [2] [2] => [2] [l - 1 - 2]
1   '543'   '5432'
0   '5432'  '54321'

a b c
0 0 0
0 1 0
1 0 0
1 1 1

a b c
0 0 0
0 1 1
1 0 1
1 1 1


*/

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);