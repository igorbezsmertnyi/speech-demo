webpackJsonp(["main"],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__containers_pages_container_pages_container_component__ = __webpack_require__("../../../../../src/app/containers/pages-container/pages-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_synthesis_synthesis_component__ = __webpack_require__("../../../../../src/app/pages/synthesis/synthesis.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', children: [], component: __WEBPACK_IMPORTED_MODULE_2__containers_pages_container_pages_container_component__["a" /* PagesContainerComponent */] },
    { path: 'synthesis', component: __WEBPACK_IMPORTED_MODULE_3__pages_synthesis_synthesis_component__["a" /* SynthesisComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]],
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_store__ = __webpack_require__("../../../../../src/app/app.store.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__containers_app_app_component__ = __webpack_require__("../../../../../src/app/containers/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_nav_nav_component__ = __webpack_require__("../../../../../src/app/components/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_page_page_component__ = __webpack_require__("../../../../../src/app/components/page/page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__containers_pages_container_pages_container_component__ = __webpack_require__("../../../../../src/app/containers/pages-container/pages-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_welcome_welcome_component__ = __webpack_require__("../../../../../src/app/pages/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_instalation_instalation_component__ = __webpack_require__("../../../../../src/app/pages/instalation/instalation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_title_title_component__ = __webpack_require__("../../../../../src/app/components/title/title.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_code_block_code_block_component__ = __webpack_require__("../../../../../src/app/components/code-block/code-block.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_quick_start_quick_start_component__ = __webpack_require__("../../../../../src/app/pages/quick-start/quick-start.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_synthesis_synthesis_component__ = __webpack_require__("../../../../../src/app/pages/synthesis/synthesis.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__containers_app_app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_nav_nav_component__["a" /* NavComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_page_page_component__["a" /* PageComponent */],
            __WEBPACK_IMPORTED_MODULE_11__containers_pages_container_pages_container_component__["a" /* PagesContainerComponent */],
            __WEBPACK_IMPORTED_MODULE_12__pages_welcome_welcome_component__["a" /* WelcomeComponent */],
            __WEBPACK_IMPORTED_MODULE_13__pages_instalation_instalation_component__["a" /* InstalationComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_title_title_component__["a" /* TitleComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_code_block_code_block_component__["a" /* CodeBlockComponent */],
            __WEBPACK_IMPORTED_MODULE_16__pages_quick_start_quick_start_component__["a" /* QuickStartComponent */],
            __WEBPACK_IMPORTED_MODULE_17__pages_synthesis_synthesis_component__["a" /* SynthesisComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MdSliderModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MdSelectModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__app_store__["a" /* StoreService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__containers_app_app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.store.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var StoreService = (function () {
    function StoreService() {
    }
    return StoreService;
}());
StoreService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], StoreService);

//# sourceMappingURL=app.store.js.map

/***/ }),

/***/ "../../../../../src/app/components/code-block/code-block.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"code-block\">\n  <code class=\"code-block__code\">\n    <ng-content></ng-content>\n  </code>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/code-block/code-block.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../material/prebuilt-themes/indigo-pink.css"), "");
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Saira+Condensed:100,200,300,400,500,600,700,800,900);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i);", ""]);

// module
exports.push([module.i, "body,\nhtml {\n  margin: 0;\n  padding: 0;\n  overflow-x: hidden; }\n\nnav {\n  position: fixed;\n  width: 240px;\n  height: 100vh;\n  left: 0;\n  top: 0; }\n\nmain {\n  position: relative;\n  width: calc(100vw - 240px);\n  left: 240px; }\n\n.git-link {\n  position: fixed;\n  top: -100px;\n  right: -100px;\n  width: 200px;\n  height: 200px;\n  background: #8E44AD;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  z-index: 200; }\n  .git-link:hover img {\n    transition: ease-in-out .4s;\n    opacity: 0.7; }\n  .git-link img {\n    margin-top: 135px;\n    margin-left: 75px;\n    width: 50px;\n    height: 50px;\n    -o-object-fit: contain;\n       object-fit: contain;\n    transition: ease-in-out .4s;\n    opacity: 1; }\n\nh3 {\n  font-family: 'Saira Condensed', sans-serif; }\n\nlabel {\n  font: 14px system-ui !important; }\n\nmd-input-container {\n  width: 100%; }\n\n.slider label {\n  min-width: 70px;\n  margin-right: 10px; }\n\nmd-slider {\n  min-width: 250px; }\n\ninput {\n  font-family: Helvetica, Arial, sans-serif; }\n\n@-webkit-keyframes fade-in-left {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-100px);\n            transform: translateX(-100px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: rotateX(0);\n            transform: rotateX(0); } }\n\n@keyframes fade-in-left {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-100px);\n            transform: translateX(-100px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: rotateX(0);\n            transform: rotateX(0); } }\n\n@-webkit-keyframes fade-in-bottom {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(100px);\n            transform: translateY(100px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: rotateY(0);\n            transform: rotateY(0); } }\n\n@keyframes fade-in-bottom {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(100px);\n            transform: translateY(100px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: rotateY(0);\n            transform: rotateY(0); } }\n\n.code-block {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  background-color: rgba(27, 31, 35, 0.05);\n  padding: 20px;\n  box-shadow: 3px 3px 14px 2px rgba(0, 0, 0, 0.15); }\n  .code-block__code {\n    white-space: normal; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/code-block/code-block.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodeBlockComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CodeBlockComponent = (function () {
    function CodeBlockComponent() {
    }
    CodeBlockComponent.prototype.ngOnInit = function () { };
    return CodeBlockComponent;
}());
CodeBlockComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'code-block',
        template: __webpack_require__("../../../../../src/app/components/code-block/code-block.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/code-block/code-block.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], CodeBlockComponent);

//# sourceMappingURL=code-block.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"nav\">\n  <div class=\"nav__header\">\n    <a href=\"#\">\n      <h3>Speech JS</h3>\n    </a>\n  </div>\n  <div class=\"nav__container\">\n    <a md-button href=\"{{item.link}}\" class=\"nav__container__item\" *ngFor=\"let item of menuItems\">\n      {{item.name}}\n    </a>\n  </div>\n  <div class=\"nav__footer\">\n    <a href=\"https://www.npmjs.com/package/speech-js\">npm package v {{version}}</a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/nav/nav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../material/prebuilt-themes/indigo-pink.css"), "");
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Saira+Condensed:100,200,300,400,500,600,700,800,900);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i);", ""]);

// module
exports.push([module.i, "body,\nhtml {\n  margin: 0;\n  padding: 0;\n  overflow-x: hidden; }\n\nnav {\n  position: fixed;\n  width: 240px;\n  height: 100vh;\n  left: 0;\n  top: 0; }\n\nmain {\n  position: relative;\n  width: calc(100vw - 240px);\n  left: 240px; }\n\n.git-link {\n  position: fixed;\n  top: -100px;\n  right: -100px;\n  width: 200px;\n  height: 200px;\n  background: #8E44AD;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  z-index: 200; }\n  .git-link:hover img {\n    transition: ease-in-out .4s;\n    opacity: 0.7; }\n  .git-link img {\n    margin-top: 135px;\n    margin-left: 75px;\n    width: 50px;\n    height: 50px;\n    -o-object-fit: contain;\n       object-fit: contain;\n    transition: ease-in-out .4s;\n    opacity: 1; }\n\nh3 {\n  font-family: 'Saira Condensed', sans-serif; }\n\nlabel {\n  font: 14px system-ui !important; }\n\nmd-input-container {\n  width: 100%; }\n\n.slider label {\n  min-width: 70px;\n  margin-right: 10px; }\n\nmd-slider {\n  min-width: 250px; }\n\ninput {\n  font-family: Helvetica, Arial, sans-serif; }\n\n@-webkit-keyframes fade-in-left {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-100px);\n            transform: translateX(-100px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: rotateX(0);\n            transform: rotateX(0); } }\n\n@keyframes fade-in-left {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-100px);\n            transform: translateX(-100px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: rotateX(0);\n            transform: rotateX(0); } }\n\n@-webkit-keyframes fade-in-bottom {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(100px);\n            transform: translateY(100px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: rotateY(0);\n            transform: rotateY(0); } }\n\n@keyframes fade-in-bottom {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(100px);\n            transform: translateY(100px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: rotateY(0);\n            transform: rotateY(0); } }\n\n.nav {\n  box-shadow: 3px 0px 5px 2px rgba(0, 0, 0, 0.15); }\n  .nav__header a, .nav__header h3 {\n    text-align: center;\n    font-size: 1.7em;\n    color: #2CC990;\n    cursor: pointer;\n    text-decoration: none;\n    transition: ease-in-out .3s; }\n    .nav__header a:hover, .nav__header h3:hover {\n      transition: ease-in-out .3s;\n      color: #1e8a63;\n      text-decoration: none; }\n  .nav__container {\n    position: relative; }\n    .nav__container__item {\n      position: relative;\n      width: 100%;\n      height: 70px;\n      padding: 15px 30px;\n      border-bottom: 1px solid #ECECEC;\n      font-size: 22px;\n      font-family: Helvetica;\n      text-align: left;\n      color: #000;\n      text-decoration: none;\n      font-weight: lighter;\n      cursor: pointer; }\n      .nav__container__item:hover {\n        background-color: #8E44AD;\n        color: #fff;\n        text-decoration: none; }\n      .nav__container__item--avtive {\n        background-color: #8E44AD;\n        color: #fff !important; }\n  .nav__footer {\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    padding: 15px 20px; }\n    .nav__footer a {\n      font-family: 'Roboto', sans-serif;\n      font-size: 0.8em;\n      color: gray;\n      text-decoration: none; }\n      .nav__footer a:hover {\n        text-decoration: none;\n        color: #000; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = (function () {
    function NavComponent() {
        this.menuItems = [
            { name: 'Instalation', link: '#instalation' },
            { name: 'Quick Start', link: '#quick-start' },
            { name: 'Synthesis', link: '/speech-demo/synthesis' },
            { name: 'Recognition', link: 'recognition' },
            { name: 'Demo', link: 'demo' }
        ];
        this.version = '0.1.0';
    }
    NavComponent.prototype.ngOnInit = function () { };
    return NavComponent;
}());
NavComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-nav',
        template: __webpack_require__("../../../../../src/app/components/nav/nav.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/nav/nav.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], NavComponent);

//# sourceMappingURL=nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"{{pageId}}\" class=\"page\">\n  <ng-content></ng-content>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page {\n  width: calc(100% - 48px);\n  height: 100vh;\n  padding: 0 24px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageComponent = (function () {
    function PageComponent() {
    }
    PageComponent.prototype.ngOnInit = function () { };
    return PageComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], PageComponent.prototype, "pageId", void 0);
PageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'page',
        template: __webpack_require__("../../../../../src/app/components/page/page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], PageComponent);

//# sourceMappingURL=page.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/title/title.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-title\">\n  <h3>\n    <ng-content></ng-content>\n  </h3>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/title/title.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../material/prebuilt-themes/indigo-pink.css"), "");
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Saira+Condensed:100,200,300,400,500,600,700,800,900);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i);", ""]);

// module
exports.push([module.i, "body,\nhtml {\n  margin: 0;\n  padding: 0;\n  overflow-x: hidden; }\n\nnav {\n  position: fixed;\n  width: 240px;\n  height: 100vh;\n  left: 0;\n  top: 0; }\n\nmain {\n  position: relative;\n  width: calc(100vw - 240px);\n  left: 240px; }\n\n.git-link {\n  position: fixed;\n  top: -100px;\n  right: -100px;\n  width: 200px;\n  height: 200px;\n  background: #8E44AD;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  z-index: 200; }\n  .git-link:hover img {\n    transition: ease-in-out .4s;\n    opacity: 0.7; }\n  .git-link img {\n    margin-top: 135px;\n    margin-left: 75px;\n    width: 50px;\n    height: 50px;\n    -o-object-fit: contain;\n       object-fit: contain;\n    transition: ease-in-out .4s;\n    opacity: 1; }\n\nh3 {\n  font-family: 'Saira Condensed', sans-serif; }\n\nlabel {\n  font: 14px system-ui !important; }\n\nmd-input-container {\n  width: 100%; }\n\n.slider label {\n  min-width: 70px;\n  margin-right: 10px; }\n\nmd-slider {\n  min-width: 250px; }\n\ninput {\n  font-family: Helvetica, Arial, sans-serif; }\n\n@-webkit-keyframes fade-in-left {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-100px);\n            transform: translateX(-100px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: rotateX(0);\n            transform: rotateX(0); } }\n\n@keyframes fade-in-left {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-100px);\n            transform: translateX(-100px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: rotateX(0);\n            transform: rotateX(0); } }\n\n@-webkit-keyframes fade-in-bottom {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(100px);\n            transform: translateY(100px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: rotateY(0);\n            transform: rotateY(0); } }\n\n@keyframes fade-in-bottom {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(100px);\n            transform: translateY(100px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: rotateY(0);\n            transform: rotateY(0); } }\n\n.page-title {\n  width: 80%;\n  border-bottom: 1px solid #ECECEC; }\n  .page-title h3 {\n    color: #24292e;\n    font-weight: 100;\n    font-size: 4.5em;\n    margin: 0;\n    font-family: 'Open Sans', sans-serif; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/title/title.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TitleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TitleComponent = (function () {
    function TitleComponent() {
    }
    TitleComponent.prototype.ngOnInit = function () { };
    return TitleComponent;
}());
TitleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-title',
        template: __webpack_require__("../../../../../src/app/components/title/title.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/title/title.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], TitleComponent);

//# sourceMappingURL=title.component.js.map

/***/ }),

/***/ "../../../../../src/app/containers/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<main>\n  <router-outlet></router-outlet>\n</main>\n"

/***/ }),

/***/ "../../../../../src/app/containers/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/containers/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        // this.router.events.subscribe((evt) => {
        //     if (!(evt instanceof NavigationEnd)) {
        //       return
        //     }
        //     console.log(evt)
        // })
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/containers/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/containers/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/containers/pages-container/pages-container.component.html":
/***/ (function(module, exports) {

module.exports = "<welcome></welcome>\n<instalation></instalation>\n<quick-start></quick-start>\n"

/***/ }),

/***/ "../../../../../src/app/containers/pages-container/pages-container.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/containers/pages-container/pages-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PagesContainerComponent = (function () {
    function PagesContainerComponent() {
    }
    PagesContainerComponent.prototype.ngOnInit = function () { };
    return PagesContainerComponent;
}());
PagesContainerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'pages-container',
        template: __webpack_require__("../../../../../src/app/containers/pages-container/pages-container.component.html"),
        styles: [__webpack_require__("../../../../../src/app/containers/pages-container/pages-container.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], PagesContainerComponent);

//# sourceMappingURL=pages-container.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/instalation/instalation.component.html":
/***/ (function(module, exports) {

module.exports = "<page pageId=\"instalation\">\n  <div class=\"instalation\">\n    <app-title>\n      Instaltion\n    </app-title>\n\n    <div class=\"instalation__content\">\n      <code-block>\n        npm install --save speech-js\n      </code-block>\n      <span>or</span>\n      <code-block>\n        yarn add speech-js\n      </code-block>\n    </div>\n  </div>\n</page>\n"

/***/ }),

/***/ "../../../../../src/app/pages/instalation/instalation.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../material/prebuilt-themes/indigo-pink.css"), "");
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Saira+Condensed:100,200,300,400,500,600,700,800,900);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i);", ""]);

// module
exports.push([module.i, "body,\nhtml {\n  margin: 0;\n  padding: 0;\n  overflow-x: hidden; }\n\nnav {\n  position: fixed;\n  width: 240px;\n  height: 100vh;\n  left: 0;\n  top: 0; }\n\nmain {\n  position: relative;\n  width: calc(100vw - 240px);\n  left: 240px; }\n\n.git-link {\n  position: fixed;\n  top: -100px;\n  right: -100px;\n  width: 200px;\n  height: 200px;\n  background: #8E44AD;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  z-index: 200; }\n  .git-link:hover img {\n    transition: ease-in-out .4s;\n    opacity: 0.7; }\n  .git-link img {\n    margin-top: 135px;\n    margin-left: 75px;\n    width: 50px;\n    height: 50px;\n    -o-object-fit: contain;\n       object-fit: contain;\n    transition: ease-in-out .4s;\n    opacity: 1; }\n\nh3 {\n  font-family: 'Saira Condensed', sans-serif; }\n\nlabel {\n  font: 14px system-ui !important; }\n\nmd-input-container {\n  width: 100%; }\n\n.slider label {\n  min-width: 70px;\n  margin-right: 10px; }\n\nmd-slider {\n  min-width: 250px; }\n\ninput {\n  font-family: Helvetica, Arial, sans-serif; }\n\n@-webkit-keyframes fade-in-left {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-100px);\n            transform: translateX(-100px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: rotateX(0);\n            transform: rotateX(0); } }\n\n@keyframes fade-in-left {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-100px);\n            transform: translateX(-100px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: rotateX(0);\n            transform: rotateX(0); } }\n\n@-webkit-keyframes fade-in-bottom {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(100px);\n            transform: translateY(100px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: rotateY(0);\n            transform: rotateY(0); } }\n\n@keyframes fade-in-bottom {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(100px);\n            transform: translateY(100px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: rotateY(0);\n            transform: rotateY(0); } }\n\n.instalation {\n  position: relative;\n  width: 100%;\n  height: calc(100% - 127px); }\n  .instalation__content {\n    width: 100%;\n    height: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: column;\n            flex-flow: column; }\n    .instalation__content code-block {\n      font-size: 2em; }\n    .instalation__content span {\n      color: #8E44AD;\n      margin: 30px 0;\n      font-family: Helvetica, sans-serif;\n      font-weight: 400;\n      font-size: 1.5em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/instalation/instalation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstalationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InstalationComponent = (function () {
    function InstalationComponent() {
    }
    InstalationComponent.prototype.ngOnInit = function () { };
    return InstalationComponent;
}());
InstalationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'instalation',
        template: __webpack_require__("../../../../../src/app/pages/instalation/instalation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/instalation/instalation.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], InstalationComponent);

//# sourceMappingURL=instalation.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/quick-start/quick-start.component.html":
/***/ (function(module, exports) {

module.exports = "<page pageId=\"quick-start\">\n  <div class=\"quick-start\">\n    <app-title>\n      Quick Start\n    </app-title>\n\n    <div class=\"quick-start__content\">\n      <code-block>\n        import speech from 'speech-js'\n        <br />\n        <br />\n        speech.synthesis('hello world', 'en-US')\n        <br />\n        <br />\n        const recognition = speech.recognition('en-US')<br />\n        recognition.start()<br />\n        recognition.onresult = e => {{ '{' }}<br />\n        <dd>let result = e.results[0][0].transcript<br /></dd>\n        <dd>speech.synthesis(result, 'en-US')<br /></dd>\n        {{ '}' }}<br />\n      </code-block>\n    </div>\n  </div>\n</page>\n"

/***/ }),

/***/ "../../../../../src/app/pages/quick-start/quick-start.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".quick-start {\n  width: 100%;\n  height: 100%; }\n  .quick-start__content {\n    width: 100%;\n    height: calc(100% - 127px);\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n    .quick-start__content code-block {\n      font-size: 2.2em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/quick-start/quick-start.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuickStartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuickStartComponent = (function () {
    function QuickStartComponent() {
    }
    QuickStartComponent.prototype.ngOnInit = function () { };
    return QuickStartComponent;
}());
QuickStartComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'quick-start',
        template: __webpack_require__("../../../../../src/app/pages/quick-start/quick-start.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/quick-start/quick-start.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], QuickStartComponent);

//# sourceMappingURL=quick-start.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/synthesis/synthesis.component.html":
/***/ (function(module, exports) {

module.exports = "<page pageId=\"synthesis\">\n  <div class=\"synthesis\">\n    <app-title>\n      Speech Synthesis\n    </app-title>\n\n    <div class=\"synthesis__container\">\n      <div class=\"synthesis__container__code\">\n        <code>\n          speech.synthesis({{text}}, {{ selectedLang ? selectedLang : selectedVoiceName }}, {{rate}}, {{volume}}, {{pitch}})\n        </code>\n      </div>\n      <div class=\"synthesis__container__form\">\n        <md-input-container>\n          <input mdInput [(ngModel)]=\"text\" placeholder=\"text\" [value]=\"text\" autoFocus>\n        </md-input-container>\n\n        <div class=\"synthesis__container__row\">\n          <div class=\"synthesis__container__col\">\n            <div class=\"slider\">\n              <label>Rate</label>\n              <md-slider min=\"0.1\" max=\"10\" step=\"0.1\" [value]=\"rate\" (input)=\"setRate($event)\"></md-slider>\n            </div>\n\n            <div class=\"slider\">\n              <label>Volume</label>\n              <md-slider min=\"0\" max=\"1\" step=\"0.1\" [value]=\"volume\" (input)=\"setVolume($event)\"></md-slider>\n            </div>\n\n            <div class=\"slider\">\n              <label>Pitch</label>\n              <md-slider min=\"0\" max=\"2\" step=\"0.1\" [value]=\"pitch\" (input)=\"setPitch($event)\"></md-slider>\n            </div>\n          </div>\n\n          <div class=\"synthesis__container__col\">\n            <md-select placeholder=\"Select Langs\" [(ngModel)]=\"selectedLang\" (change)=\"selectLang($event)\">\n              <md-option *ngFor=\"let lang of langs\" [value]=\"lang\">\n                {{lang}}\n              </md-option>\n            </md-select>\n\n            <md-select placeholder=\"Select Voice\" [(ngModel)]=\"selectedVoiceName\" (change)=\"selectVoice($event)\">\n              <md-option *ngFor=\"let voice of voices\" [value]=\"voice.name\">\n                {{voice.name}} {{voice.lang}}\n              </md-option>\n            </md-select>\n          </div>\n        </div>\n\n        <div class=\"synthesis__container__form__submit synthesis__container__row\">\n          <button md-button (click)=\"speck()\">Speck</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</page>\n"

/***/ }),

/***/ "../../../../../src/app/pages/synthesis/synthesis.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../material/prebuilt-themes/indigo-pink.css"), "");
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Saira+Condensed:100,200,300,400,500,600,700,800,900);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i);", ""]);

// module
exports.push([module.i, "body,\nhtml {\n  margin: 0;\n  padding: 0;\n  overflow-x: hidden; }\n\nnav {\n  position: fixed;\n  width: 240px;\n  height: 100vh;\n  left: 0;\n  top: 0; }\n\nmain {\n  position: relative;\n  width: calc(100vw - 240px);\n  left: 240px; }\n\n.git-link {\n  position: fixed;\n  top: -100px;\n  right: -100px;\n  width: 200px;\n  height: 200px;\n  background: #8E44AD;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  z-index: 200; }\n  .git-link:hover img {\n    transition: ease-in-out .4s;\n    opacity: 0.7; }\n  .git-link img {\n    margin-top: 135px;\n    margin-left: 75px;\n    width: 50px;\n    height: 50px;\n    -o-object-fit: contain;\n       object-fit: contain;\n    transition: ease-in-out .4s;\n    opacity: 1; }\n\nh3 {\n  font-family: 'Saira Condensed', sans-serif; }\n\nlabel {\n  font: 14px system-ui !important; }\n\nmd-input-container {\n  width: 100%; }\n\n.slider label {\n  min-width: 70px;\n  margin-right: 10px; }\n\nmd-slider {\n  min-width: 250px; }\n\ninput {\n  font-family: Helvetica, Arial, sans-serif; }\n\n@-webkit-keyframes fade-in-left {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-100px);\n            transform: translateX(-100px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: rotateX(0);\n            transform: rotateX(0); } }\n\n@keyframes fade-in-left {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-100px);\n            transform: translateX(-100px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: rotateX(0);\n            transform: rotateX(0); } }\n\n@-webkit-keyframes fade-in-bottom {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(100px);\n            transform: translateY(100px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: rotateY(0);\n            transform: rotateY(0); } }\n\n@keyframes fade-in-bottom {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(100px);\n            transform: translateY(100px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: rotateY(0);\n            transform: rotateY(0); } }\n\n.synthesis {\n  width: 100%;\n  height: 100%; }\n  .synthesis__container {\n    width: 100%;\n    height: calc(100% - 127px);\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n    .synthesis__container__code {\n      width: 100%;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      font-size: 1.7em;\n      margin-top: 70px;\n      color: #9ea9b3; }\n    .synthesis__container__form {\n      width: 85%;\n      margin-top: 120px; }\n      .synthesis__container__form__submit {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center; }\n        .synthesis__container__form__submit button {\n          background-color: #2CC990;\n          color: #fff;\n          text-transform: uppercase;\n          font-weight: 300;\n          letter-spacing: 1.1px;\n          font-size: 1em;\n          padding: 10px 40px; }\n    .synthesis__container__row {\n      width: 100%;\n      margin-top: 40px;\n      display: -webkit-inline-box;\n      display: -ms-inline-flexbox;\n      display: inline-flex; }\n    .synthesis__container__col {\n      width: 50%; }\n    .synthesis__container md-select {\n      width: 100%;\n      margin-bottom: 40px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/synthesis/synthesis.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SynthesisComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_speech_js__ = __webpack_require__("../../../../speech-js/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_speech_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_speech_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_uniq__ = __webpack_require__("../../../../lodash/uniq.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_uniq___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_uniq__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SynthesisComponent = (function () {
    function SynthesisComponent() {
        this.rate = 1;
        this.volume = 0.5;
        this.pitch = 1;
        this.text = 'Write something';
        this.voices = [];
        this.langs = [];
        this.selectedLang = 'en-US';
        this.selectedVoice = '';
    }
    SynthesisComponent.prototype.ngOnInit = function () {
        var _this = this;
        speechSynthesis.onvoiceschanged = function () {
            _this.voices = window.speechSynthesis.getVoices();
            _this.langs = __WEBPACK_IMPORTED_MODULE_2_lodash_uniq___default()(_this.voices.map(function (voice) { return voice.lang; }));
        };
    };
    SynthesisComponent.prototype.setRate = function (v) {
        this.rate = Number(v.value.toFixed(3));
    };
    SynthesisComponent.prototype.setVolume = function (v) {
        this.volume = Number(v.value.toFixed(3));
    };
    SynthesisComponent.prototype.setPitch = function (v) {
        this.pitch = Number(v.value.toFixed(3));
    };
    SynthesisComponent.prototype.selectVoice = function (v) {
        this.selectedVoice = this.voices.find(function (voice) { return v.value === voice.name; });
        this.selectedVoiceName = this.selectedVoice.name;
        this.selectedLang = null;
    };
    SynthesisComponent.prototype.selectLang = function (v) {
        this.selectedLang = v.value;
        this.selectedVoice = null;
    };
    SynthesisComponent.prototype.speck = function () {
        var lang = this.selectedLang ? this.selectedLang : this.selectedVoice;
        __WEBPACK_IMPORTED_MODULE_1_speech_js___default.a.synthesis(this.text, lang, this.rate, this.volume, this.pitch);
    };
    return SynthesisComponent;
}());
SynthesisComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'synthesis',
        template: __webpack_require__("../../../../../src/app/pages/synthesis/synthesis.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/synthesis/synthesis.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], SynthesisComponent);

//# sourceMappingURL=synthesis.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<page pageId=\"welcome\">\n  <div class=\"welcome\">\n    <div class=\"welcome__container\">\n      <h3 class=\"welcome__text welcome__text--one\">Welcome</h3>\n      <h3 class=\"welcome__text welcome__text--two\">to</h3>\n      <h3 class=\"welcome__text welcome__text--three\">speech js</h3>\n      <h3 class=\"welcome__text welcome__text--four\">demo page</h3>\n    </div>\n    <div class=\"welcome__subtitle\">\n      <p>Speech Synthesis & Recognition</p>\n    </div>\n  </div>\n</page>\n"

/***/ }),

/***/ "../../../../../src/app/pages/welcome/welcome.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../material/prebuilt-themes/indigo-pink.css"), "");
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Saira+Condensed:100,200,300,400,500,600,700,800,900);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i);", ""]);

// module
exports.push([module.i, "body,\nhtml {\n  margin: 0;\n  padding: 0;\n  overflow-x: hidden; }\n\nnav {\n  position: fixed;\n  width: 240px;\n  height: 100vh;\n  left: 0;\n  top: 0; }\n\nmain {\n  position: relative;\n  width: calc(100vw - 240px);\n  left: 240px; }\n\n.git-link {\n  position: fixed;\n  top: -100px;\n  right: -100px;\n  width: 200px;\n  height: 200px;\n  background: #8E44AD;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  z-index: 200; }\n  .git-link:hover img {\n    transition: ease-in-out .4s;\n    opacity: 0.7; }\n  .git-link img {\n    margin-top: 135px;\n    margin-left: 75px;\n    width: 50px;\n    height: 50px;\n    -o-object-fit: contain;\n       object-fit: contain;\n    transition: ease-in-out .4s;\n    opacity: 1; }\n\nh3 {\n  font-family: 'Saira Condensed', sans-serif; }\n\nlabel {\n  font: 14px system-ui !important; }\n\nmd-input-container {\n  width: 100%; }\n\n.slider label {\n  min-width: 70px;\n  margin-right: 10px; }\n\nmd-slider {\n  min-width: 250px; }\n\ninput {\n  font-family: Helvetica, Arial, sans-serif; }\n\n@-webkit-keyframes fade-in-left {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-100px);\n            transform: translateX(-100px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: rotateX(0);\n            transform: rotateX(0); } }\n\n@keyframes fade-in-left {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-100px);\n            transform: translateX(-100px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: rotateX(0);\n            transform: rotateX(0); } }\n\n@-webkit-keyframes fade-in-bottom {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(100px);\n            transform: translateY(100px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: rotateY(0);\n            transform: rotateY(0); } }\n\n@keyframes fade-in-bottom {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(100px);\n            transform: translateY(100px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: rotateY(0);\n            transform: rotateY(0); } }\n\n.welcome {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column nowrap;\n          flex-flow: column nowrap; }\n  .welcome__container {\n    width: 90%;\n    height: 200px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    -webkit-animation: fade-in-left 1 ease-in .7s;\n            animation: fade-in-left 1 ease-in .7s; }\n  .welcome__text {\n    padding: 0 10px;\n    color: #2CC990;\n    font-size: 3.5em;\n    margin: 0; }\n    .welcome__text--one {\n      font-size: 4.7em;\n      width: 100%; }\n  .welcome__subtitle {\n    width: 90%;\n    text-align: left;\n    -webkit-animation: fade-in-bottom 1 ease-in .7s;\n            animation: fade-in-bottom 1 ease-in .7s; }\n    .welcome__subtitle p {\n      padding: 0 15px;\n      font-family: Helvetica, Arial, sans-serif;\n      font-weight: 100;\n      font-size: 1.6em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/welcome/welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_speech_js__ = __webpack_require__("../../../../speech-js/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_speech_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_speech_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WelcomeComponent = (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
        var synthesis = __WEBPACK_IMPORTED_MODULE_1_speech_js___default.a.synthesis('welcome to speech js demo page', 'en-US');
    };
    return WelcomeComponent;
}());
WelcomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'welcome',
        template: __webpack_require__("../../../../../src/app/pages/welcome/welcome.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/welcome/welcome.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], WelcomeComponent);

//# sourceMappingURL=welcome.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map