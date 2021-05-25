(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-pages-show-products-show-products-module"],{

/***/ "BR66":
/*!**********************************************************************!*\
  !*** ./src/app/products/pages/show-products/show-products.module.ts ***!
  \**********************************************************************/
/*! exports provided: ShowProductsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowProductsPageModule", function() { return ShowProductsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _show_products_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./show-products-routing.module */ "yD/w");
/* harmony import */ var _show_products_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./show-products.page */ "WWYm");







let ShowProductsPageModule = class ShowProductsPageModule {
};
ShowProductsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _show_products_routing_module__WEBPACK_IMPORTED_MODULE_5__["ShowProductsPageRoutingModule"]
        ],
        declarations: [_show_products_page__WEBPACK_IMPORTED_MODULE_6__["ShowProductsPage"]]
    })
], ShowProductsPageModule);



/***/ }),

/***/ "RuFE":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/pages/show-products/show-products.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>showProducts</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "WWYm":
/*!********************************************************************!*\
  !*** ./src/app/products/pages/show-products/show-products.page.ts ***!
  \********************************************************************/
/*! exports provided: ShowProductsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowProductsPage", function() { return ShowProductsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_show_products_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./show-products.page.html */ "RuFE");
/* harmony import */ var _show_products_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./show-products.page.scss */ "YOWx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ShowProductsPage = class ShowProductsPage {
    constructor() { }
    ngOnInit() {
    }
};
ShowProductsPage.ctorParameters = () => [];
ShowProductsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-show-products',
        template: _raw_loader_show_products_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_show_products_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ShowProductsPage);



/***/ }),

/***/ "YOWx":
/*!**********************************************************************!*\
  !*** ./src/app/products/pages/show-products/show-products.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG93LXByb2R1Y3RzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "yD/w":
/*!******************************************************************************!*\
  !*** ./src/app/products/pages/show-products/show-products-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: ShowProductsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowProductsPageRoutingModule", function() { return ShowProductsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _show_products_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./show-products.page */ "WWYm");




const routes = [
    {
        path: '',
        component: _show_products_page__WEBPACK_IMPORTED_MODULE_3__["ShowProductsPage"]
    }
];
let ShowProductsPageRoutingModule = class ShowProductsPageRoutingModule {
};
ShowProductsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ShowProductsPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=products-pages-show-products-show-products-module.js.map