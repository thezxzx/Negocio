(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-pages-add-products-add-products-module"],{

/***/ "9UkO":
/*!********************************************************************!*\
  !*** ./src/app/products/pages/add-products/add-products.module.ts ***!
  \********************************************************************/
/*! exports provided: AddProductsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductsPageModule", function() { return AddProductsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _add_products_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-products-routing.module */ "y9ay");
/* harmony import */ var _add_products_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-products.page */ "P5kU");







let AddProductsPageModule = class AddProductsPageModule {
};
AddProductsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_products_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddProductsPageRoutingModule"]
        ],
        declarations: [_add_products_page__WEBPACK_IMPORTED_MODULE_6__["AddProductsPage"]]
    })
], AddProductsPageModule);



/***/ }),

/***/ "P5kU":
/*!******************************************************************!*\
  !*** ./src/app/products/pages/add-products/add-products.page.ts ***!
  \******************************************************************/
/*! exports provided: AddProductsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductsPage", function() { return AddProductsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_products_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-products.page.html */ "zy63");
/* harmony import */ var _add_products_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-products.page.scss */ "ddTz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AddProductsPage = class AddProductsPage {
    constructor() { }
    ngOnInit() {
    }
};
AddProductsPage.ctorParameters = () => [];
AddProductsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-products',
        template: _raw_loader_add_products_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_products_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AddProductsPage);



/***/ }),

/***/ "ddTz":
/*!********************************************************************!*\
  !*** ./src/app/products/pages/add-products/add-products.page.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtcHJvZHVjdHMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "y9ay":
/*!****************************************************************************!*\
  !*** ./src/app/products/pages/add-products/add-products-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: AddProductsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductsPageRoutingModule", function() { return AddProductsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_products_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-products.page */ "P5kU");




const routes = [
    {
        path: '',
        component: _add_products_page__WEBPACK_IMPORTED_MODULE_3__["AddProductsPage"]
    }
];
let AddProductsPageRoutingModule = class AddProductsPageRoutingModule {
};
AddProductsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddProductsPageRoutingModule);



/***/ }),

/***/ "zy63":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/pages/add-products/add-products.page.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>addProducts</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=products-pages-add-products-add-products-module.js.map