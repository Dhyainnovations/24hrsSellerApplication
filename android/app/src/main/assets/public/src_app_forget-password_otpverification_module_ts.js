"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_forget-password_otpverification_module_ts"],{

/***/ 8410:
/*!*******************************************************************!*\
  !*** ./src/app/forget-password/otpverification-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtpverificationPageRoutingModule": () => (/* binding */ OtpverificationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _otpverification_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./otpverification.page */ 2263);




const routes = [
    {
        path: '',
        component: _otpverification_page__WEBPACK_IMPORTED_MODULE_0__.OtpverificationPage
    }
];
let OtpverificationPageRoutingModule = class OtpverificationPageRoutingModule {
};
OtpverificationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OtpverificationPageRoutingModule);



/***/ }),

/***/ 1716:
/*!***********************************************************!*\
  !*** ./src/app/forget-password/otpverification.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtpverificationPageModule": () => (/* binding */ OtpverificationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _otpverification_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./otpverification-routing.module */ 8410);
/* harmony import */ var _otpverification_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./otpverification.page */ 2263);







let OtpverificationPageModule = class OtpverificationPageModule {
};
OtpverificationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _otpverification_routing_module__WEBPACK_IMPORTED_MODULE_0__.OtpverificationPageRoutingModule
        ],
        declarations: [_otpverification_page__WEBPACK_IMPORTED_MODULE_1__.OtpverificationPage]
    })
], OtpverificationPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_forget-password_otpverification_module_ts.js.map