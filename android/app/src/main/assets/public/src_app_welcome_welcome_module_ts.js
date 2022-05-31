"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_welcome_welcome_module_ts"],{

/***/ 752:
/*!***************************************************!*\
  !*** ./src/app/welcome/welcome-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomePageRoutingModule": () => (/* binding */ WelcomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome.page */ 3297);




const routes = [
    {
        path: '',
        component: _welcome_page__WEBPACK_IMPORTED_MODULE_0__.WelcomePage
    }
];
let WelcomePageRoutingModule = class WelcomePageRoutingModule {
};
WelcomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], WelcomePageRoutingModule);



/***/ }),

/***/ 2526:
/*!*******************************************!*\
  !*** ./src/app/welcome/welcome.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomePageModule": () => (/* binding */ WelcomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _welcome_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome-routing.module */ 752);
/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome.page */ 3297);







let WelcomePageModule = class WelcomePageModule {
};
WelcomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _welcome_routing_module__WEBPACK_IMPORTED_MODULE_0__.WelcomePageRoutingModule
        ],
        declarations: [_welcome_page__WEBPACK_IMPORTED_MODULE_1__.WelcomePage]
    })
], WelcomePageModule);



/***/ }),

/***/ 3297:
/*!*****************************************!*\
  !*** ./src/app/welcome/welcome.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomePage": () => (/* binding */ WelcomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _welcome_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome.page.html?ngResource */ 7030);
/* harmony import */ var _welcome_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome.page.scss?ngResource */ 787);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _signin_signin_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../signin/signin.page */ 1895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);






// import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';


let WelcomePage = class WelcomePage {
    constructor(modalCtrl, platform, router) {
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.router = router;
        this.googleUser = "";
        this.userInfo = "";
        // this.platform.ready().then(async () => {
        //   GoogleAuth.initialize();
        // });
    }
    ngOnInit() {
    }
    guide() {
        this.router.navigate(['/ref']);
    }
    login() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _signin_signin_page__WEBPACK_IMPORTED_MODULE_2__.SigninPage,
                animated: true,
                mode: 'ios',
                backdropDismiss: false,
                cssClass: 'login-modal',
            });
            return yield modal.present();
        });
    }
    // async googleSignup() {
    //   this.googleUser = await GoogleAuth.signIn() as any;
    //   console.log('my user: ', this.googleUser);
    //   this.userInfo = this.googleUser;
    // }
    register() {
        this.router.navigate(['/signuppage']);
    }
};
WelcomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
WelcomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-welcome',
        template: _welcome_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_welcome_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], WelcomePage);



/***/ }),

/***/ 787:
/*!******************************************************!*\
  !*** ./src/app/welcome/welcome.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = ".logo {\n  width: 80%;\n  margin: auto;\n  margin-top: 28% !important;\n}\n\n.title {\n  font-size: 20px;\n  margin: 20px !important;\n  text-transform: uppercase;\n  margin-bottom: 2px !important;\n}\n\n.subtitle {\n  font-size: 14px !important;\n  letter-spacing: 0px !important;\n  text-transform: none;\n  margin: 0 !important;\n}\n\n.welcomecard {\n  margin-top: 28% !important;\n  background: rgba(128, 120, 120, 0.18);\n  border-radius: 8px;\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n  -webkit-backdrop-filter: blur(8.2px);\n          backdrop-filter: blur(8.2px);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  height: 270px !important;\n}\n\nion-content {\n  background: var(--ion-color-light) !important;\n  background-repeat: no-repeat;\n  background-size: cover;\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtBQUNKOztBQUdBO0VBQ0ksMEJBQUE7RUFDQSw4QkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7QUFBSjs7QUFHQTtFQUNJLDBCQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0VBQ0Esb0NBQUE7VUFBQSw0QkFBQTtFQUNBLDBDQUFBO0VBQ0Esd0JBQUE7QUFBSjs7QUFLQTtFQUNJLDZDQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUVBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBSEo7O0FBSUk7RUFDSSxhQUFBO0FBRlIiLCJmaWxlIjoid2VsY29tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nbyB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWFyZ2luLXRvcDogMjglICFpbXBvcnRhbnQ7XG59XG5cbi50aXRsZSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbjogMjBweCAhaW1wb3J0YW50O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbWFyZ2luLWJvdHRvbTogMnB4ICFpbXBvcnRhbnQ7XG5cbn1cblxuLnN1YnRpdGxle1xuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAgIGxldHRlci1zcGFjaW5nOiAwcHggIWltcG9ydGFudDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cblxuLndlbGNvbWVjYXJke1xuICAgIG1hcmdpbi10b3A6IDI4JSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMTI4LCAxMjAsIDEyMCwgMC4xOCk7XG4gICAgYm9yZGVyLXJhZGl1czo4cHg7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDguMnB4KTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gICAgaGVpZ2h0OiAyNzBweCAhaW1wb3J0YW50O1xuICAgIFxufVxuXG5cbmlvbi1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpICFpbXBvcnRhbnQgO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgIFxuICBcbiAgICAtLW9mZnNldC1ib3R0b206IGF1dG8haW1wb3J0YW50O1xuICAgIC0tb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9Il19 */";

/***/ }),

/***/ 7030:
/*!******************************************************!*\
  !*** ./src/app/welcome/welcome.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n\n</ion-header>\n\n<ion-content class=\"ion-padding ion-text-center\">\n  <img src=\"assets/logo.jpeg\" class=\"logo\" />\n  <div class=\"welcomecard mb-3 mt-3\">\n    <div>\n      <p style=\"margin-top:12% !important ;\" class=\"title\"><b>Welcome</b> <br>\n      </p>\n      <p class=\"subtitle\">Enjoy The 24hrs App</p>\n\n    </div>\n\n    <div class=\"ion-margin-top mt-3\">\n      <div class=\"row\">\n        <div class=\"col-12 mt-2\">\n          <ion-button style=\"width: 90%;\" class=\"ion-margin-top secondaryLargelOutlineBtn\" color=\"none\"\n            (click)=\"register()\">\n            <span style=\"margin-top: 4px;\">SIGN UP</span>\n          </ion-button>\n        </div>\n        <div class=\"col-12 mt-3\">\n          <ion-button style=\"width: 90%;\" class=\"ion-margin-top secondaryLargeBtn\" color=\"none\" (click)=\"login()\">\n            SIGN IN</ion-button>\n        </div>\n      </div>\n\n\n      \n    </div>\n\n\n  </div>\n\n  <p class=\"subtitle ion-text-center mb-2\" (click)=\"guide()\" > How To Use Guide ? </p>\n\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_welcome_welcome_module_ts.js.map