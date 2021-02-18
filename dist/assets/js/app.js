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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_vertical_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/vertical-slider */ \"./src/assets/js/scripts/vertical-slider.js\");\n/* harmony import */ var _scripts_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/slider */ \"./src/assets/js/scripts/slider.js\");\n/* harmony import */ var _scripts_burger_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/burger-menu */ \"./src/assets/js/scripts/burger-menu.js\");\n\r\n\r\n\r\n\r\nwindow.addEventListener('DOMContentLoaded', () => {\r\n    const preloader = document.querySelector('.preloader');\r\n    setTimeout(() => {\r\n        preloader.classList.add('preloader-nactive');\r\n    }, 1000);\r\n\r\n    Object(_scripts_vertical_slider__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    Object(_scripts_slider__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    Object(_scripts_burger_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n})\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/scripts/burger-menu.js":
/*!**********************************************!*\
  !*** ./src/assets/js/scripts/burger-menu.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction burger () {\r\n    const burger = document.querySelector('.burger-block'),\r\n          burgerMenu = document.querySelector('.burger-menu');\r\n\r\n    burger.addEventListener('click', () => {\r\n        burgerMenu.classList.toggle('active-burger');\r\n    });\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (burger);\n\n//# sourceURL=webpack:///./src/assets/js/scripts/burger-menu.js?");

/***/ }),

/***/ "./src/assets/js/scripts/slider.js":
/*!*****************************************!*\
  !*** ./src/assets/js/scripts/slider.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// import { off } from \"gulp\";\r\n\r\nfunction slider () {\r\n    const slider = document.querySelector('.myskils-slider'),\r\n          sliderWrapper = document.querySelector('.slider-wrapper'),\r\n          carusel = document.querySelector('.myskils-slider-carusel'),\r\n          slides = document.querySelectorAll('.slide'),\r\n          prev = document.querySelector('.prev'),\r\n          next = document.querySelector('.next'),\r\n          width = parseInt(window.getComputedStyle(slider).width),\r\n          showSlideContentBtn = document.querySelector('.show-slide-content'),\r\n          sliderModal = document.querySelector('.slider-modal'),\r\n          cross = document.querySelector('.cross'),\r\n          textContentModal = document.querySelector('.text-content');\r\n\r\n\r\n\r\n    carusel.style.width = `${100 * (slides.length)}%`;\r\n    slides.forEach(item => {\r\n        item.style.width = `${(width)}px`;\r\n    });\r\n\r\n    function showModal (text) {\r\n        sliderWrapper.style.overflow = 'hidden';\r\n        sliderModal.style.display = 'flex';\r\n        textContentModal.textContent = text;\r\n    }\r\n\r\n    let offset = 0;\r\n\r\n    next.addEventListener('click', () => {\r\n        if (offset === -width * (slides.length - 1)){\r\n            offset += width * slides.length;\r\n            carusel.style.transform = `translateX(${offset}px)`;\r\n        }\r\n\r\n        offset -= width;\r\n        carusel.style.transform = `translateX(${offset}px)`;\r\n\r\n    });\r\n    prev.addEventListener('click', () => {\r\n        if (offset === 0){\r\n            offset -= width * slides.length;\r\n            carusel.style.transform = `translateX(${offset}px)`;\r\n        }\r\n\r\n        offset += width;\r\n        carusel.style.transform = `translateX(${offset}px)`;\r\n    });\r\n\r\n    showSlideContentBtn.addEventListener('click', () => {\r\n        console.log(1);\r\n        let slideNum = (offset / width) * -1 ;\r\n        showModal(slides[slideNum].textContent)\r\n    });\r\n    cross.addEventListener('click', () => {\r\n        sliderModal.style.display = 'none';\r\n        sliderWrapper.style.overflow = '';\r\n    });\r\n\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (slider);\n\n//# sourceURL=webpack:///./src/assets/js/scripts/slider.js?");

/***/ }),

/***/ "./src/assets/js/scripts/vertical-slider.js":
/*!**************************************************!*\
  !*** ./src/assets/js/scripts/vertical-slider.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction verticalSlider () {   \r\n    const sliderCarusel = document.querySelector('.slider-carusel'),\r\n          sliderWrap = document.querySelector('.slider-wrapper'),\r\n          slides = document.querySelectorAll('.slider-item'),\r\n          slideTabs = document.querySelectorAll('.slide-tabs-item'),\r\n          height = parseInt(window.getComputedStyle(sliderWrap).height);\r\n    let   scrollCord = 0;\r\n\r\n    sliderCarusel.style.maxHeight = `${100 * slides.length}%`;\r\n    slides.forEach(item => {\r\n        item.style.height = `${height}px`;\r\n    });\r\n\r\n    const isMobile = /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(navigator.userAgent);\r\n    \r\n    if (isMobile) {\r\n        document.querySelector('.slider-wrapper').style.overflow = 'scroll';\r\n        return\r\n    };\r\n\r\n    slideTabs.forEach((item, i) => {\r\n        item.addEventListener('click', (e) => {\r\n            hideTabsActive();\r\n\r\n            e.target.classList.add('active');\r\n\r\n            scrollCord = 0;\r\n\r\n            if (i !== 0) {\r\n                scrollCord -= height * i;\r\n            }\r\n            \r\n            sliderCarusel.style.transform = `translateY(-${height * i}px)`;\r\n        });\r\n    });\r\n\r\n    function showTabsActive (i) {\r\n        i = i > 0 ? i : i * -1; \r\n        slideTabs[i].classList.add('active');\r\n    }\r\n\r\n    function hideTabsActive () {\r\n        slideTabs.forEach(item => {\r\n            item.classList.remove('active');\r\n        });\r\n    }\r\n\r\n\r\n\r\n    window.addEventListener('wheel', onScroll);\r\n\r\n    function onScroll (e) {\r\n        if (e.deltaY < 0) {\r\n            if(scrollCord === 0){\r\n                return;\r\n            }\r\n            scrollCord += height;\r\n            sliderCarusel.style.transform = `translateY(${scrollCord}px)`;\r\n\r\n            let i = scrollCord / height;\r\n\r\n            hideTabsActive();\r\n            showTabsActive(i);\r\n\r\n\r\n        } else if (e.deltaY > 0) {\r\n            if (scrollCord === -(height * (slides.length - 1))){\r\n                return;\r\n            }\r\n\r\n            scrollCord -= height;\r\n            sliderCarusel.style.transform = `translateY(${scrollCord}px)`;\r\n\r\n            let i = (scrollCord / height) * -1;\r\n\r\n\r\n\r\n            hideTabsActive();\r\n            showTabsActive(i);\r\n        }\r\n\r\n\r\n\r\n        this.removeEventListener('wheel', onScroll);\r\n\r\n        setTimeout(() => {\r\n            window.addEventListener('wheel', onScroll)\r\n        }, 500);\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (verticalSlider);\n\n//# sourceURL=webpack:///./src/assets/js/scripts/vertical-slider.js?");

/***/ })

/******/ });