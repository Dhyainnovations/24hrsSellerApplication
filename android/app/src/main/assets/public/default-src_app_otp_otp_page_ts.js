"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_otp_otp_page_ts"],{

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
        this.intervalId = 0;
        this.otpseconds = "60";
        this.GetUserDetail = {};
        this.OneTimePassword = "";
        this.OTPSent = false;
        this.OTPField = true;
        this.PhoneNumber = localStorage.getItem("24hrs-user-data-mobile-number");
        this.SendOTP();
    }
    ngOnInit() {
        this.start();
    }
    clearTimer() { clearInterval(this.intervalId); }
    start() { this.countDown(); }
    stop() {
        this.clearTimer();
    }
    countDown() {
        this.clearTimer();
        this.intervalId = window.setInterval(() => {
            this.otpseconds -= 1;
            if (this.otpseconds === 0) {
                this.clearTimer();
                this.otpseconds = 0;
            }
        }, 1000);
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

module.exports = ".title {\n  margin-top: -5%;\n  margin-bottom: 30px;\n}\n\n.title h4 {\n  color: var(--ion-color-secondary);\n}\n\n.title p {\n  margin-top: 0 !important;\n  color: #999999;\n  font-size: small;\n}\n\n.forget a {\n  font-size: small !important;\n}\n\n.welcomecard {\n  background: var(--ion-color-light);\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n  margin-bottom: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm90cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGlDQUFBO0FBQ0o7O0FBRUE7RUFDSSx3QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksMkJBQUE7QUFDSjs7QUFFQTtFQUNJLGtDQUFBO0VBQ0EseUNBQUE7RUFDQSxtQkFBQTtBQUNKIiwiZmlsZSI6Im90cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xuICAgIG1hcmdpbi10b3A6IC01JTtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4udGl0bGUgaDQge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cblxuLnRpdGxlIHAge1xuICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzk5OTk5OTtcbiAgICBmb250LXNpemU6IHNtYWxsO1xufVxuXG4uZm9yZ2V0IGEge1xuICAgIGZvbnQtc2l6ZTogc21hbGwgIWltcG9ydGFudDtcbn1cblxuLndlbGNvbWVjYXJke1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn0iXX0= */";

/***/ }),

/***/ 9815:
/*!**********************************************!*\
  !*** ./src/app/otp/otp.page.html?ngResource ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "<ion-content class=\"ion-padding\">\n  <div class=\"welcomecard p-3\" style=\"margin-top: 55%;\">\n  <div class=\"title\">\n    <div class=\"row\">\n      <div class=\"col-10\">\n        <h4 ><b>OTP Verification</b></h4>\n      </div>\n      <div class=\"col-2\">\n        <div class=\"ion-margin-top ion-text-center\">\n          <svg (click)=\"dismiss()\" style=\"cursor:pointer\" width=\"24\" height=\"27\"\n          viewBox=\"0 0 24 27\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <g filter=\"url(#filter0_d_1056_2574)\">\n            <path d=\"M18 6L6 18\" stroke=\"#EB154B\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n            <path d=\"M6 6L18 18\" stroke=\"#EB154B\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n          </g>\n          <defs>\n            <filter id=\"filter0_d_1056_2574\" x=\"-4\" y=\"0\" width=\"32\" height=\"32\" filterUnits=\"userSpaceOnUse\"\n              color-interpolation-filters=\"sRGB\">\n              <feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\" />\n              <feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\"\n                result=\"hardAlpha\" />\n              <feOffset dy=\"4\" />\n              <feGaussianBlur stdDeviation=\"2\" />\n              <feComposite in2=\"hardAlpha\" operator=\"out\" />\n              <feColorMatrix type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0\" />\n              <feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_1056_2574\" />\n              <feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_1056_2574\" result=\"shape\" />\n            </filter>\n          </defs>\n        </svg> \n          </div>\n      </div>\n    </div>\n  </div>\n\n\n  <div style=\"margin-top: -10%;\" *ngIf=\"OTPField\">\n    <div class=\"row\">\n\n      <p>Hi User, OTP Has Been Sent To Your <br>Mobile Number : {{PhoneNumber}} </p>\n\n      <div class=\"col-12\">\n        <ion-input  [(ngModel)]=\"OneTimePassword\" placeholder=\" - - - - \"\n          class=\"primary-input\"></ion-input>\n      </div>\n    </div>\n\n    <p class=\"small text-center mt-1\">Resend OTP Will Be Enabled In {{otpseconds}} Seconds</p>\n    \n\n    <div class=\"row\">\n      <div class=\"col-6\">\n        <ion-button  *ngIf=\"AfterSixtySeconds\" class=\"btn btn-sm secondarySmallBtn\" color=\"none\" (click)=\"ReSendOTP()\" >Resend OTP\n        </ion-button>\n      </div>\n  \n      <div class=\"col-6\">\n        <ion-button class=\"btn btn-sm  secondarySmallBtn\" color=\"none\" (click)=\"verifyOTP()\">Verify OTP\n        </ion-button>\n      </div>\n    </div>\n\n  </div>\n</div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=default-src_app_otp_otp_page_ts.js.map