"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_otp_otp_module_ts"],{

/***/ 7227:
/*!*******************************************!*\
  !*** ./src/app/otp/otp-routing.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtpPageRoutingModule": () => (/* binding */ OtpPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _otp_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./otp.page */ 6076);




const routes = [
    {
        path: '',
        component: _otp_page__WEBPACK_IMPORTED_MODULE_0__.OtpPage
    }
];
let OtpPageRoutingModule = class OtpPageRoutingModule {
};
OtpPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OtpPageRoutingModule);



/***/ }),

/***/ 1599:
/*!***********************************!*\
  !*** ./src/app/otp/otp.module.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtpPageModule": () => (/* binding */ OtpPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _otp_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./otp-routing.module */ 7227);
/* harmony import */ var _otp_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./otp.page */ 6076);







let OtpPageModule = class OtpPageModule {
};
OtpPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _otp_routing_module__WEBPACK_IMPORTED_MODULE_0__.OtpPageRoutingModule
        ],
        declarations: [_otp_page__WEBPACK_IMPORTED_MODULE_1__.OtpPage]
    })
], OtpPageModule);



/***/ }),

/***/ 6076:
/*!*********************************!*\
  !*** ./src/app/otp/otp.page.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtpPage": () => (/* binding */ OtpPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _otp_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./otp.page.html?ngResource */ 9815);
/* harmony import */ var _otp_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./otp.page.scss?ngResource */ 693);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/http.service */ 8191);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ 598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);










let OtpPage = class OtpPage {
    constructor(modalCtrl, router, http, toastCtrl, route) {
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.route = route;
        this.GetUserDetail = {};
        this.OneTimePassword = "";
        this.OTPSent = false;
        this.OTPField = true;
        this.PhoneNumber = localStorage.getItem("24hrs-user-data-mobile-number");
        this.SendOTP();
    }
    ngOnInit() {
    }
    dismiss() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalCtrl.dismiss();
        });
    }
    ReSendOTP() {
        const obj = {
            mobile_number: this.PhoneNumber
        };
        this.http.post('/seller_get_otp', obj).subscribe((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
        });
    }
    verifyOTP() {
        const obj = {
            mobile_number: this.PhoneNumber,
            verify_otp: this.OneTimePassword
        };
        this.http.post('/seller_verify_otp', obj).subscribe((response) => {
            if (response.success == "true") {
                this.router.navigate(['/signinpage']);
                const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 1000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', (sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().stopTimer));
                        toast.addEventListener('mouseleave', (sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().resumeTimer));
                    }
                });
                Toast.fire({
                    icon: 'success',
                    title: 'OTP Verified Successfully'
                });
            }
            else {
                const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 1000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', (sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().stopTimer));
                        toast.addEventListener('mouseleave', (sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().resumeTimer));
                    }
                });
                Toast.fire({
                    icon: 'error',
                    title: 'Invalid OTP'
                });
            }
        }, (error) => {
            console.log(error);
        });
    }
    NaviagtetoBack() {
        this.router.navigate(['/signinpage']);
    }
    confirmThePassword() {
        if (this.OTPVerificationStatus == true) {
            if (this.password == this.confirmPassword) {
                const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 1000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', (sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().stopTimer));
                        toast.addEventListener('mouseleave', (sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().resumeTimer));
                    }
                });
                Toast.fire({
                    icon: 'success',
                    title: 'Password Updated'
                });
            }
            else {
                const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 1000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', (sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().stopTimer));
                        toast.addEventListener('mouseleave', (sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().resumeTimer));
                    }
                });
                Toast.fire({
                    icon: 'error',
                    title: 'Password Not Updated'
                });
            }
        }
    }
    SendOTP() {
        setTimeout(() => {
            this.enableResendOTP();
        }, 60000);
        const obj = {
            mobile_number: this.PhoneNumber
        };
        this.http.post('/seller_get_otp', obj).subscribe((response) => {
            if (response.success == "true") {
                const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 1000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', (sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().stopTimer));
                        toast.addEventListener('mouseleave', (sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().resumeTimer));
                    }
                });
                Toast.fire({
                    icon: 'success',
                    title: 'OTP Sent To Your Mobile'
                });
            }
            else {
                this.ifOTPSent = false;
                const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 1000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', (sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().stopTimer));
                        toast.addEventListener('mouseleave', (sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().resumeTimer));
                    }
                });
                Toast.fire({
                    icon: 'error',
                    title: 'Mobile Not Exist'
                });
            }
        }, (error) => {
            console.log(error);
        });
    }
    enableResendOTP() {
        this.AfterSixtySeconds = true;
    }
};
OtpPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _shared_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute }
];
OtpPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-otp',
        template: _otp_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_otp_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], OtpPage);



/***/ }),

/***/ 693:
/*!**********************************************!*\
  !*** ./src/app/otp/otp.page.scss?ngResource ***!
  \**********************************************/
/***/ ((module) => {

module.exports = ".title {\n  margin-top: -5%;\n  margin-bottom: 30px;\n}\n\n.title h4 {\n  color: var(--ion-color-dark);\n}\n\n.title p {\n  margin-top: 0 !important;\n  color: #999999;\n  font-size: small;\n}\n\n.forget a {\n  font-size: small !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm90cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLDRCQUFBO0FBQ0o7O0FBRUE7RUFDSSx3QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksMkJBQUE7QUFDSiIsImZpbGUiOiJvdHAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcclxuICAgIG1hcmdpbi10b3A6IC01JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi50aXRsZSBoNCB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG59XHJcblxyXG4udGl0bGUgcCB7XHJcbiAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzk5OTk5OTtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbn1cclxuXHJcbi5mb3JnZXQgYSB7XHJcbiAgICBmb250LXNpemU6IHNtYWxsICFpbXBvcnRhbnQ7XHJcbn0iXX0= */";

/***/ }),

/***/ 9815:
/*!**********************************************!*\
  !*** ./src/app/otp/otp.page.html?ngResource ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "<ion-content class=\"ion-padding\">\r\n\r\n  <div class=\"title\">\r\n    <div class=\"row\">\r\n      <div class=\"col-10\">\r\n        <h4 ><b>OTP Verification</b></h4>\r\n      </div>\r\n      <div class=\"col-2\">\r\n        <div class=\"ion-margin-top ion-text-center\">\r\n          <svg (click)=\"dismiss()\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n            <circle cx=\"12\" cy=\"12\" r=\"9\" fill=\"red\" fill-opacity=\"0.25\"/>\r\n            <path d=\"M16 8L8 16\" stroke=\"white\" stroke-width=\"1.2\" stroke-linecap=\"square\" stroke-linejoin=\"round\"/>\r\n            <path d=\"M8 8L16 16\" stroke=\"white\" stroke-width=\"1.2\" stroke-linecap=\"square\" stroke-linejoin=\"round\"/>\r\n            </svg>\r\n          </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div style=\"margin-top: -10%;\" *ngIf=\"OTPField\">\r\n    <div class=\"row\">\r\n\r\n      <p>Hi User, OTP Has Been Sent To Your <br>Mobile Number : {{PhoneNumber}} </p>\r\n\r\n      <div class=\"col-12\">\r\n        <ion-input style=\"color: #000000;\" [(ngModel)]=\"OneTimePassword\" placeholder=\" - - - - \"\r\n          class=\"primary-input\"></ion-input>\r\n      </div>\r\n    </div>\r\n\r\n    <p class=\"small text-center mt-1\">Resend OTP Will Be Enabled In 60 Seconds</p>\r\n    \r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-6\">\r\n        <ion-button  *ngIf=\"AfterSixtySeconds\" class=\"btn btn-sm text-white\" color=\"dark\" (click)=\"ReSendOTP()\" >Resend OTP\r\n        </ion-button>\r\n      </div>\r\n  \r\n      <div class=\"col-6\">\r\n        <ion-button class=\"btn btn-sm text-white\" color=\"dark\" (click)=\"verifyOTP()\">Verify OTP\r\n        </ion-button>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_otp_otp_module_ts.js.map