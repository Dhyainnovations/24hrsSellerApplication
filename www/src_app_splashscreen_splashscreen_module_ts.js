"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_splashscreen_splashscreen_module_ts"],{

/***/ 3860:
/*!*************************************************************!*\
  !*** ./src/app/splashscreen/splashscreen-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashscreenPageRoutingModule": () => (/* binding */ SplashscreenPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _splashscreen_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./splashscreen.page */ 4853);




const routes = [
    {
        path: '',
        component: _splashscreen_page__WEBPACK_IMPORTED_MODULE_0__.SplashscreenPage
    }
];
let SplashscreenPageRoutingModule = class SplashscreenPageRoutingModule {
};
SplashscreenPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SplashscreenPageRoutingModule);



/***/ }),

/***/ 5481:
/*!*****************************************************!*\
  !*** ./src/app/splashscreen/splashscreen.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashscreenPageModule": () => (/* binding */ SplashscreenPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _splashscreen_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./splashscreen-routing.module */ 3860);
/* harmony import */ var _splashscreen_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./splashscreen.page */ 4853);







let SplashscreenPageModule = class SplashscreenPageModule {
};
SplashscreenPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _splashscreen_routing_module__WEBPACK_IMPORTED_MODULE_0__.SplashscreenPageRoutingModule
        ],
        declarations: [_splashscreen_page__WEBPACK_IMPORTED_MODULE_1__.SplashscreenPage]
    })
], SplashscreenPageModule);



/***/ }),

/***/ 4853:
/*!***************************************************!*\
  !*** ./src/app/splashscreen/splashscreen.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashscreenPage": () => (/* binding */ SplashscreenPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _splashscreen_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./splashscreen.page.html?ngResource */ 2272);
/* harmony import */ var _splashscreen_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./splashscreen.page.scss?ngResource */ 4539);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);






let SplashscreenPage = class SplashscreenPage {
    constructor(router, route) {
        this.router = router;
        route.params.subscribe(val => {
            console.log(localStorage.getItem("tbid"));
            var userdetails = (localStorage.getItem("tbid"));
            console.log(userdetails);
            setTimeout(() => {
                if (userdetails) {
                    this.router.navigate(['/tabs']);
                }
                else {
                    this.router.navigate(['/welcome']);
                }
            }, 2200);
        });
    }
    ngOnInit() {
    }
};
SplashscreenPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute }
];
SplashscreenPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-splashscreen',
        template: _splashscreen_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_splashscreen_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SplashscreenPage);



/***/ }),

/***/ 4539:
/*!****************************************************************!*\
  !*** ./src/app/splashscreen/splashscreen.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "@import url(\"https://fonts.googleapis.com/css2?family=Beau+Rivage&family=Cinzel+Decorative:wght@900&family=Courgette&family=Fira+Mono:wght@700&family=Marck+Script&family=Merienda&family=Playball&family=Rubik+Puddles&display=swap\");\nion-content {\n  background-color: var(--ion-color-primary) !important;\n  --offset-bottom: auto !important;\n  --overflow: hidden;\n  overflow: auto;\n}\nion-content::-webkit-scrollbar {\n  display: none;\n}\n* {\n  font-family: \"Fira Mono\", monospace;\n  color: #fff;\n  font-size: 35px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwbGFzaHNjcmVlbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY1Esc09BQUE7QUFkUjtFQUNJLHFEQUFBO0VBSUEsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFESjtBQUdJO0VBQ0ksYUFBQTtBQURSO0FBTUE7RUFDSSxtQ0FBQTtFQUNZLFdBQUE7RUFDWiwwQkFBQTtBQUhKIiwiZmlsZSI6InNwbGFzaHNjcmVlbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAhaW1wb3J0YW50O1xuICAgIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIGRhcmt0dXJxdW9pc2VcbiAgICAvLyAwJSwgI2QxZjJlN1xuICAgIC8vIDEwMCUpICFpbXBvcnRhbnQ7XG4gICAgLS1vZmZzZXQtYm90dG9tIDogYXV0byAhaW1wb3J0YW50O1xuICAgIC0tb3ZlcmZsb3cgICAgICA6IGhpZGRlbjtcbiAgICBvdmVyZmxvdyAgICAgICAgOiBhdXRvO1xuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cblxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmVhdStSaXZhZ2UmZmFtaWx5PUNpbnplbCtEZWNvcmF0aXZlOndnaHRAOTAwJmZhbWlseT1Db3VyZ2V0dGUmZmFtaWx5PUZpcmErTW9ubzp3Z2h0QDcwMCZmYW1pbHk9TWFyY2srU2NyaXB0JmZhbWlseT1NZXJpZW5kYSZmYW1pbHk9UGxheWJhbGwmZmFtaWx5PVJ1YmlrK1B1ZGRsZXMmZGlzcGxheT1zd2FwJyk7XG4qe1xuICAgIGZvbnQtZmFtaWx5OiAnRmlyYSBNb25vJywgbW9ub3NwYWNlO1xuICAgICAgICAgICAgICAgIGNvbG9yOiNmZmY7XG4gICAgZm9udC1zaXplOiAzNXB4ICFpbXBvcnRhbnQ7XG59Il19 */";

/***/ }),

/***/ 2272:
/*!****************************************************************!*\
  !*** ./src/app/splashscreen/splashscreen.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-content >\n  \n  <div class=\"row\">\n   \n    <div class=\"col-12 mx-2\">\n      <div style=\"text-align: center;margin-top:90%\" class=\"cover ion-text-center\">\n        <h1><b>24Hrs</b></h1>\n      </div>\n\n    </div>\n    \n  </div>\n   \n  </ion-content>\n  ";

/***/ })

}]);
//# sourceMappingURL=src_app_splashscreen_splashscreen_module_ts.js.map