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

module.exports = ".logo {\n  width: 50%;\n  margin: 20% 0 20% 0;\n}\n\n.title {\n  margin-bottom: 5lotti0px;\n}\n\n.title p {\n  margin-top: 0 !important;\n}\n\n.welcomecard {\n  margin-top: 5%;\n  background: rgba(49, 38, 38, 0.18);\n  border-radius: 7px;\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n  -webkit-backdrop-filter: blur(8.2px);\n          backdrop-filter: blur(8.2px);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n}\n\nion-content {\n  background: url('background.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSx3QkFBQTtBQUNKOztBQUVBO0VBQ0ksd0JBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7RUFDQSxvQ0FBQTtVQUFBLDRCQUFBO0VBQ0EsMENBQUE7QUFDSjs7QUFHQTtFQUNJLGlDQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUVBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBREo7O0FBRUk7RUFDSSxhQUFBO0FBQVIiLCJmaWxlIjoid2VsY29tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nbyB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luOiAyMCUgMCAyMCUgMDtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDVsb3R0aTBweDtcclxufVxyXG5cclxuLnRpdGxlIHAge1xyXG4gICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ud2VsY29tZWNhcmR7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoNDksIDM4LCAzOCwgMC4xOCk7XHJcbiAgICBib3JkZXItcmFkaXVzOjdweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDguMnB4KTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxufVxyXG5cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9iYWNrZ3JvdW5kLmpwZ1wiKSA7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgIFxyXG4gIFxyXG4gICAgLS1vZmZzZXQtYm90dG9tOiBhdXRvIWltcG9ydGFudDtcclxuICAgIC0tb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfSJdfQ== */";

/***/ }),

/***/ 7030:
/*!******************************************************!*\
  !*** ./src/app/welcome/welcome.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding ion-text-center\" >\r\n  <img src=\"assets/logo.jpeg\" class=\"logo\" />\r\n  <div class=\"welcomecard mb-5\">\r\n    <div class=\"title\">\r\n      <h2>Welcome</h2>\r\n      <p>Enjoy the 24hrs App</p>\r\n    </div>\r\n\r\n    <div class=\"ion-margin-top mb-4\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <ion-button style=\"width: 90%;\" class=\"ion-margin-top\" fill=\"outline\" color=\"dark\" (click)=\"register()\">\r\n            <span style=\"margin-top: 4px;\">SIGN UP</span>\r\n          </ion-button>\r\n        </div>\r\n        <div class=\"col-12\">\r\n          <ion-button style=\"width: 90%;\" class=\"ion-margin-top\" (click)=\"login()\" color=\"dark\">\r\n            SIGN IN</ion-button>\r\n        </div>\r\n      </div>\r\n     \r\n     \r\n    </div>\r\n  </div>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_welcome_welcome_module_ts.js.map