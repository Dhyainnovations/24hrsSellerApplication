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
        this.slideData = [{ image: "assets/logo.jpeg" }, { image: "assets/images/slide-2.jpg" }, { image: "assets/images/slide-2.jpg" }];
        this.slideLength = false;
        if (this.slideData.length > 0) {
            this.slideLength = true;
        }
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.namedElement.nativeElement.click();
        }, 2000);
    }
    onClick() {
        console.log('element clicked');
        alert('test');
    }
    navigateToLoginScreen() {
        this.router.navigate(['/welcome']);
    }
};
ReferencePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
ReferencePage.propDecorators = {
    namedElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ['el', { static: false },] }]
};
ReferencePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-reference',
        template: _reference_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_reference_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ReferencePage);

function Slides(Slides) {
    throw new Error('Function not implemented.');
}


/***/ }),

/***/ 8147:
/*!**********************************************************!*\
  !*** ./src/app/reference/reference.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = ".carousel-control-next-icon {\n  color: #000 !important;\n}\n\n.carousel-control-prev-icon {\n  color: #000 !important;\n}\n\nion-app ion-header ion-toolbar {\n  --background: transparent;\n}\n\nion-app ion-content {\n  --ion-color-base: transparent;\n}\n\nion-app ion-content ion-slides {\n  --bullet-background: #eee;\n  --bullet-background-active: #000;\n}\n\nion-app ion-content ion-slides ion-slide {\n  height: 400px !important;\n}\n\nion-app ion-content ion-slides ion-slide:nth-child(1) {\n  background-color: lightpink;\n}\n\nion-app ion-content ion-slides ion-slide:nth-child(2) {\n  background-color: lightgreen;\n}\n\nion-app ion-content ion-slides ion-slide:nth-child(3) {\n  background-color: lightblue;\n}\n\n.dot {\n  height: 10px;\n  width: 10px;\n  background-color: #bbb;\n  border-radius: 50%;\n  display: inline-block;\n  margin: 10px;\n}\n\nimg {\n  height: 65vh;\n  width: 100vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZmVyZW5jZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSixzQkFBQTtBQUFBOztBQUdJO0VBQzRaLHNCQUFBO0FBQWhhOztBQUtRO0VBQ0UseUJBQUE7QUFGVjs7QUFNTTtFQUNFLDZCQUFBO0FBSlI7O0FBTVE7RUFDRSx5QkFBQTtFQUNBLGdDQUFBO0FBSlY7O0FBTVU7RUFDRSx3QkFBQTtBQUpaOztBQU1ZO0VBQ0UsMkJBQUE7QUFKZDs7QUFPWTtFQUNFLDRCQUFBO0FBTGQ7O0FBUVk7RUFDRSwyQkFBQTtBQU5kOztBQWFJO0VBQ0YsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FBVkY7O0FBYUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQVZBIiwiZmlsZSI6InJlZmVyZW5jZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAuY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb257XG5jb2xvcjogIzAwMCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5jYXJvdXNlbC1jb250cm9sLXByZXYtaWNvbntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IzAwMCFpbXBvcnRhbnQ7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICB9XG5cbiAgICBpb24tYXBwIHtcbiAgICAgIGlvbi1oZWFkZXIge1xuICAgICAgICBpb24tdG9vbGJhciB7XG4gICAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpb24tY29udGVudCB7XG4gICAgICAgIC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50O1xuXG4gICAgICAgIGlvbi1zbGlkZXMge1xuICAgICAgICAgIC0tYnVsbGV0LWJhY2tncm91bmQ6ICNlZWU7XG4gICAgICAgICAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6ICMwMDA7XG5cbiAgICAgICAgICBpb24tc2xpZGUge1xuICAgICAgICAgICAgaGVpZ2h0OiA0MDBweCAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICAmOm50aC1jaGlsZCgxKSB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0cGluaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpudGgtY2hpbGQoMikge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOm50aC1jaGlsZCgzKSB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZG90IHtcbiAgaGVpZ2h0OiAxMHB4O1xuICB3aWR0aDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JiYjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuaW1ne1xuaGVpZ2h0OjY1dmg7XG53aWR0aDogMTAwdnc7XG59Il19 */";

/***/ }),

/***/ 2593:
/*!**********************************************************!*\
  !*** ./src/app/reference/reference.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-app>\n  <!-- <ion-header>\n    <ion-toolbar color=\"light\">\n      <ion-title color=\"secondary\">\n        Reference Screen\n      </ion-title>\n    </ion-toolbar>\n  </ion-header> -->\n\n  <ion-content padding>\n\n\n    <!-- <ion-slides #Slides [pager]=\"false\">\n\t\t\t<ion-slide #Slides>\n\t\t\t\t<ion-item #Slides>\n                    <ion-input required type=\"text\" placeholder=\"First Name *\"></ion-input>\n                </ion-item>\n\t\t\t</ion-slide>\n\t\t\t<ion-slide>\n\t\t\t\tSlide 2\n\t\t\t</ion-slide>\n\t\t\t<ion-slide>\n\t\t\t\tSlide 3\n\t\t\t</ion-slide>\n\t\t</ion-slides>\n    <br />\n    <ion-button (click)=\"getInfo()\">Info</ion-button> -->\n\n    \n    <div class=\"mt-5\">\n      <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n        <ol class=\"carousel-indicators\">\n          <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n          <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n          <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n        </ol>\n        <div class=\"carousel-inner\">\n          <div class=\"carousel-item active\">\n            <img class=\"d-block w-100\" src=\"https://64.media.tumblr.com/ffbd00893afbb3c2332091edd2e76018/tumblr_pksk1jBCMH1stn28do1_640.gifv\"\n              alt=\"First slide\">\n\n              <p class=\"ion-text-center mt-3\"><span style=\"background-color:#121212 !important\" class=\"dot\"></span> <span class=\"dot\"></span> <span class=\"dot\"></span></p>\n          </div>\n          <div class=\"carousel-item\">\n            <img class=\"d-block w-100\"\n              src=\"https://img.lovepik.com/free-template/20201202/bg/c44ec73a43753.png_detail.jpg!wh650\"\n              alt=\"Second slide\">\n\n              <p class=\"ion-text-center mt-3\"><span  class=\"dot\"></span> <span style=\"background-color:#121212 !important\" class=\"dot\"></span> <span class=\"dot\"></span></p>\n\n          </div>\n          <div class=\"carousel-item\">\n            <img class=\"d-block w-100\"\n              src=\"https://img.lovepik.com/free-template/20201202/bg/f4bd611663eb0.png_detail.jpg!wh650\"\n              alt=\"Third slide\">\n              <p class=\"ion-text-center \"><span  class=\"dot\"></span> <span class=\"dot\"></span> <span style=\"background-color:#121212 !important\" class=\"dot\"></span></p>\n\n\n          </div>\n        </div>\n        <a  class=\"carousel-control-prev mt-3\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n          <span  \n            class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n          <span   class=\"sr-only\">Previous</span>\n        </a>\n        <a #el  class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n          <span \n            class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n          <span  class=\"sr-only\">Next</span>\n        </a>\n      </div>\n\n\n      <div class=\"ion-text-center \">\n\n        <ion-button style=\"width: 70%;\" class=\"secondarySmallOutlineBtn\" color=\"none\" (click)=\"navigateToLoginScreen()\">\n          <b>Skip To Login</b> </ion-button>\n\n      </div>\n    </div>\n\n  </ion-content>\n\n \n</ion-app>";

/***/ })

}]);
//# sourceMappingURL=src_app_reference_reference_module_ts.js.map