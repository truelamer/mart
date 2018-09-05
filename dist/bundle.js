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
/* harmony import */ var _js_rainbow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _js_rainbow_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_rainbow_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_add_to_cart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _js_add_to_cart_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_add_to_cart_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_show_more_products_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _js_show_more_products_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_show_more_products_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_main_scss__WEBPACK_IMPORTED_MODULE_3__);





/***/ }),
/* 1 */
/***/ (function(module, exports) {

let currentSlide = 0;
let currentMargin = 0;

let pics = ["<div class='carousel-image first' id=0></div>", "<div class='carousel-image second' id=1></div>", "<div class='carousel-image third' id=2></div>", 
            "<div class='carousel-image fourth' id=3></div>", "<div class='carousel-image fifth' id=4></div>", 
            "<div class='carousel-image sixth' id=5></div>", "<div class='carousel-image seventh' id=6></div>"];

function animateWithMargin(direction) 
{
    currentId = $(".carousel-image").attr('id');

    nextId = + currentId + direction;
    
    if (nextId > pics.length-1)
    {
        nextId = 0;
    }
    else if (nextId < 0)
    {
        nextId = pics.length-1;
    }

    if (direction > 0)
    {
        $('.frame :last-child').after(pics[nextId]);
        $('#'+currentId).animate({
            marginLeft: '-100%'
        }, 400);
        setTimeout(function() { $('.carousel-image:not(#'+nextId+')').remove(); }, 400);
    }  
    else if (direction < 0)
    {
        $('.frame :first-child').before(pics[nextId]);
        $('#'+nextId).css('margin-left', -100 + '%'); 
        $('#'+nextId).animate({
            marginLeft: '0'
        }, 400);
        setTimeout(function() { $('.carousel-image:not(#'+nextId+')').remove(); }, 400);
    }      
}
let carousel = document.getElementById('carousel-with-margin');
carousel.children[0].addEventListener('click', function() { animateWithMargin(-1) });
carousel.children[carousel.children.length - 1].addEventListener('click', function() { animateWithMargin(1) });

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function addToCart() {
    let currentCount = $("#bag-count").html();
    currentCount++;
    $("#bag-count").html(currentCount);
}

$(".container").on('click', ".wide", function() {addToCart();});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function showMoreProducts(elm) {
    let newProducts = `<div class="products">`;
    for (let i = 0; i < 4; i++)
    {
        newProducts += `<div class="product-item">                        
        <div class="product-image-with-hover">
            <div class="product-image"><img src="src/img/man.png" alt="model's photo"></div>
            <div class="product-image-actions">
                <button class="product-button"><i class="far fa-heart"></i></button>
                <button class="product-button"><i class="fas fa-random"></i></button>
                <button class="product-button"><i class="far fa-clock"></i></button>
                <button class="product-button wide"><i class="fas fa-cart-plus"></i><span class="product-image-action-to-cart">Add to cart</span></button>
            </div>
        </div>
        <div class="product-title-and-price">
            <div class="product-title">Blue tshirt</div>
            <div class="product-price">$26</div>
        </div>
    </div>`;
    }
    newProducts +=(`</div>`);
    elm.after(newProducts);
}

$(".show-more").click(function() {
    let elm = $(this).closest(".container").find('.products').last();
    showMoreProducts(elm); 
})


/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);