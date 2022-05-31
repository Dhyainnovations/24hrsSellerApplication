"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_reference_reference_module_ts"],{

/***/ 3216:
/*!*******************************************************!*\
  !*** ./src/app/reference/reference-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReferencePageRoutingModule": () => (/* binding */ ReferencePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _reference_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reference.page */ 1006);




const routes = [
    {
        path: '',
        component: _reference_page__WEBPACK_IMPORTED_MODULE_0__.ReferencePage
    }
];
let ReferencePageRoutingModule = class ReferencePageRoutingModule {
};
ReferencePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ReferencePageRoutingModule);



/***/ }),

/***/ 7696:
/*!***********************************************!*\
  !*** ./src/app/reference/reference.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReferencePageModule": () => (/* binding */ ReferencePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _reference_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reference-routing.module */ 3216);
/* harmony import */ var _reference_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reference.page */ 1006);







let ReferencePageModule = class ReferencePageModule {
};
ReferencePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _reference_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReferencePageRoutingModule
        ],
        declarations: [_reference_page__WEBPACK_IMPORTED_MODULE_1__.ReferencePage]
    })
], ReferencePageModule);



/***/ }),

/***/ 1006:
/*!*********************************************!*\
  !*** ./src/app/reference/reference.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReferencePage": () => (/* binding */ ReferencePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _reference_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reference.page.html?ngResource */ 2593);
/* harmony import */ var _reference_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reference.page.scss?ngResource */ 8147);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);





let ReferencePage = class ReferencePage {
    constructor(router) {
        this.router = router;
        setInterval(() => {
            this.slides.startAutoplay();
        }, 5000);
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.slides.startAutoplay();
    }
    // slide() {
    //   this.ngAfterViewInit()
    // }
    onClick() {
        console.log('element clicked');
        alert('test');
        return true;
    }
    navigateToLoginScreen() {
        this.router.navigate(['/welcome']);
    }
};
ReferencePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
ReferencePage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ['mySlider',] }],
    namedElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ['el', { static: false },] }]
};
ReferencePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-reference',
        template: _reference_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_reference_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ReferencePage);



/***/ }),

/***/ 8147:
/*!**********************************************************!*\
  !*** ./src/app/reference/reference.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = ".carousel-control-next-icon {\n  color: #000 !important;\n}\n\n.carousel-control-prev-icon {\n  color: #000 !important;\n}\n\nion-app ion-header ion-toolbar {\n  --background: transparent;\n}\n\nion-app ion-content {\n  --ion-color-base: transparent;\n}\n\nion-app ion-content ion-slides {\n  --bullet-background: #eee;\n  --bullet-background-active: #000;\n}\n\nion-app ion-content ion-slides ion-slide {\n  height: 85vh;\n  width: 100vw;\n}\n\n.dot {\n  height: 10px;\n  width: 10px;\n  background-color: #bbb;\n  border-radius: 50%;\n  display: inline-block;\n  margin: 10px;\n}\n\nimg {\n  height: 85vh;\n  width: 100vw;\n}\n\n.secondarySmallOutlineBtn {\n  margin: 5px;\n  background-color: var(--ion-color-secondary) !important;\n  border: 1px solid var(--ion-color-secondary) !important;\n  color: var(--ion-color-light) !important;\n  border-radius: 3px;\n  font-size: 12px;\n  height: 32px;\n  text-transform: none;\n}\n\nion-slides {\n  --bullet-background: white !important;\n  --bullet-background-active: black !important;\n}\n\nion-content {\n  background-color: var(--ion-color-primary) !important;\n  --offset-bottom: auto !important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZmVyZW5jZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7QUFDRjs7QUFJSTtFQUNFLHlCQUFBO0FBRE47O0FBS0U7RUFDRSw2QkFBQTtBQUhKOztBQUtJO0VBQ0UseUJBQUE7RUFDQSxnQ0FBQTtBQUhOOztBQUtNO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUFIUjs7QUFxQkE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUFsQkY7O0FBcUJBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUFsQkY7O0FBc0JBO0VBQ0MsV0FBQTtFQUNDLHVEQUFBO0VBQ0EsdURBQUE7RUFDQSx3Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQW5CRjs7QUF3QkE7RUFDRSxxQ0FBQTtFQUNBLDRDQUFBO0FBckJGOztBQXVCQTtFQUNFLHFEQUFBO0VBS0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUF4QkY7O0FBMEJFO0VBQ0UsYUFBQTtBQXhCSiIsImZpbGUiOiJyZWZlcmVuY2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uIHtcbiAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbn1cblxuLmNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uIHtcbiAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbn1cblxuaW9uLWFwcCB7XG4gIGlvbi1oZWFkZXIge1xuICAgIGlvbi10b29sYmFyIHtcbiAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuICB9XG5cbiAgaW9uLWNvbnRlbnQge1xuICAgIC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50O1xuXG4gICAgaW9uLXNsaWRlcyB7XG4gICAgICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiAjZWVlO1xuICAgICAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6ICMwMDA7XG5cbiAgICAgIGlvbi1zbGlkZSB7XG4gICAgICAgIGhlaWdodDogODV2aDtcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xuXG4gICAgICAgIC8vICY6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHBpbms7XG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyAmOm50aC1jaGlsZCgyKSB7XG4gICAgICAgIC8vICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIC8vICY6bnRoLWNoaWxkKDMpIHtcbiAgICAgICAgLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XG4gICAgICAgIC8vIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmRvdCB7XG4gIGhlaWdodDogMTBweDtcbiAgd2lkdGg6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiYmI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDEwcHg7XG59XG5cbmltZyB7XG4gIGhlaWdodDogODV2aDtcbiAgd2lkdGg6IDEwMHZ3O1xufVxuXG5cbi5zZWNvbmRhcnlTbWFsbE91dGxpbmVCdG57XG4gbWFyZ2luOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7IFxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcblxufVxuXG5cbmlvbi1zbGlkZXMge1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogYmxhY2sgIWltcG9ydGFudDtcbn1cbmlvbi1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XG4gIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM4Y2RiZTJcbiAgLy8gMCUsICNkMWYyZTdcbiAgLy8gMTAwJSkgIWltcG9ydGFudDtcblxuICAtLW9mZnNldC1ib3R0b206IGF1dG8gIWltcG9ydGFudDtcbiAgLS1vdmVyZmxvdzogaGlkZGVuO1xuICBvdmVyZmxvdzogYXV0bztcblxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSJdfQ== */";

/***/ }),

/***/ 2593:
/*!**********************************************************!*\
  !*** ./src/app/reference/reference.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-app>\n\n  \n\n  <ion-content padding>\n\n    \n\n    <ion-slides (click)=\"slide()\"  class=\"slider-pager-page\" pager=\"true\" loop autoplay #mySlider>\n\n      <ion-slide  class=\"slider-pager-page\">\n        <img class=\"d-block w-100\" src=\"assets/refereceScreens/screen1.png\"\n              alt=\"First slide\">\n      </ion-slide>\n   \n      <ion-slide>\n        <img class=\"d-block w-100\" src=\"assets/refereceScreens/screen2.png\"\n              alt=\"First slide\">\n      </ion-slide>\n   \n      <ion-slide>\n        <img class=\"d-block w-100\" src=\"assets/refereceScreens/screen3.png\"\n              alt=\"First slide\">\n      </ion-slide>\n\n    \n   \n    </ion-slides>\n\n    <div class=\"ion-text-center\">\n      <ion-button style=\"width: 60%;\" class=\"secondarySmallOutlineBtn\" color=\"none\" (click)=\"navigateToLoginScreen()\">\n        <b>Skip To Login</b> </ion-button>\n    </div>\n\n  </ion-content>\n\n \n</ion-app>";

/***/ })

}]);
//# sourceMappingURL=src_app_reference_reference_module_ts.js.map