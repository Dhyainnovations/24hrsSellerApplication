"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_forget-password_otpverification_page_ts"],{

/***/ 2263:
/*!*********************************************************!*\
  !*** ./src/app/forget-password/otpverification.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtpverificationPage": () => (/* binding */ OtpverificationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _otpverification_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./otpverification.page.html?ngResource */ 8820);
/* harmony import */ var _otpverification_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./otpverification.page.scss?ngResource */ 1082);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/http.service */ 8191);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ 598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);










let OtpverificationPage = class OtpverificationPage {
    constructor(modalCtrl, router, http, toastCtrl, route) {
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.route = route;
        this.GetUserDetail = {};
        this.OneTimePassword = "";
        this.OTPSent = false;
    }
    ngOnInit() {
        this.OTPField = "true";
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
    dismiss() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalCtrl.dismiss();
        });
    }
    verifyOTP() {
        const obj = {
            mobile_number: this.PhoneNumber,
            verify_otp: this.OneTimePassword
        };
        this.http.post('/seller_verify_otp', obj).subscribe((response) => {
            if (response.success == "true") {
                this.sellertbid = response.tbid;
                this.OTPVerificationStatus = "true";
                this.PasswordField = true;
                this.OTPField = false;
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
        this.router.navigate((['/signinpage']), { queryParams: { checkbox: true } });
    }
    confirmThePassword() {
        if (this.OTPVerificationStatus == "true") {
            if (this.password == this.confirmPassword) {
                const obj = {
                    tbid: this.sellertbid,
                    confirm_password: this.password,
                    password: this.confirmPassword
                };
                console.log(obj);
                this.http.post('/seller_forget_pwd', obj).subscribe((response) => {
                    if (response.success == "true") {
                        console.log(response);
                        this.NaviagtetoBack();
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
                            title: 'Password Successfully Changed'
                        });
                    }
                }, (error) => {
                    console.log(error);
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
                    title: "Password Does'nt Match"
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
                this.isOTPsent = true;
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
    passwordValidation(pw) {
        console.log(pw);
        this.invalidAlert = false;
        var lowerCaseLetters = /[a-z]/g;
        this.passwordRes = (lowerCaseLetters.test(pw));
        if (this.passwordRes) {
            this.pwLowercaseAlert = false;
        }
        else {
            this.pwLowercaseAlert = true;
        }
        var upperCaseLetters = /[A-Z]/g;
        this.passwordRes = (upperCaseLetters.test(pw));
        if (this.passwordRes) {
            this.pwUppercaseAlert = false;
        }
        else {
            this.pwUppercaseAlert = true;
        }
        var numbers = /[0-9]/g;
        this.passwordRes = (numbers.test(pw));
        if (this.passwordRes) {
            this.pwNumberAlert = false;
        }
        else {
            this.pwNumberAlert = true;
        }
        if (pw.length >= 8) {
            this.pwMinimumAlert = false;
        }
        else {
            this.pwMinimumAlert = true;
        }
        return numbers.test(pw);
    }
};
OtpverificationPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _shared_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute }
];
OtpverificationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-otpverification',
        template: _otpverification_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_otpverification_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], OtpverificationPage);



/***/ }),

/***/ 1082:
/*!**********************************************************************!*\
  !*** ./src/app/forget-password/otpverification.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "ion-label {\n  font-size: 12px !important;\n  color: #4c4c4d !important;\n}\n\nion-item {\n  --background: transparent !important;\n}\n\nion-input:focus {\n  --border-bottom: 2px solid #23d5ab !important;\n}\n\n.title {\n  margin-top: -5%;\n  margin-bottom: 30px;\n}\n\n.title h4 {\n  color: var(--ion-color-dark);\n}\n\n.title p {\n  margin-top: 0 !important;\n  color: #999999;\n  font-size: small;\n}\n\n.forget a {\n  font-size: small !important;\n}\n\nion-content {\n  background-color: #fff !important;\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n\n.welcome {\n  font-size: 15px;\n}\n\n.OTPmessage {\n  color: #23d5ab;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm90cHZlcmlmaWNhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxvQ0FBQTtBQUVKOztBQUFBO0VBQ0ksNkNBQUE7QUFHSjs7QUFBQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQUdKOztBQUFBO0VBQ0ksNEJBQUE7QUFHSjs7QUFBQTtFQUNJLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBR0o7O0FBQUE7RUFDSSwyQkFBQTtBQUdKOztBQUFBO0VBQ0ksaUNBQUE7RUFJQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUNJO0VBQ0ksYUFBQTtBQUNSOztBQUdFO0VBQ0ksZUFBQTtBQUFOOztBQUdFO0VBQ0ksY0FBQTtBQUFOIiwiZmlsZSI6Im90cHZlcmlmaWNhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGFiZWx7XHJcbiAgICBmb250LXNpemU6MTJweCAgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiM0YzRjNGQgIWltcG9ydGFudDs7XHJcbn1cclxuaW9uLWl0ZW17XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWlucHV0OmZvY3Vze1xyXG4gICAgLS1ib3JkZXItYm90dG9tOiAycHggc29saWQgIzIzZDVhYiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgbWFyZ2luLXRvcDogLTUlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLnRpdGxlIGg0IHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbn1cclxuXHJcbi50aXRsZSBwIHtcclxuICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjOTk5OTk5O1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxufVxyXG5cclxuLmZvcmdldCBhIHtcclxuICAgIGZvbnQtc2l6ZTogc21hbGwgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCBkYXJrdHVycXVvaXNlXHJcbiAgICAvLyAwJSwgI2QxZjJlN1xyXG4gICAgLy8gMTAwJSkgIWltcG9ydGFudDtcclxuICAgIC0tb2Zmc2V0LWJvdHRvbTogYXV0byFpbXBvcnRhbnQ7XHJcbiAgICAtLW92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLndlbGNvbWV7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcblxyXG4gIC5PVFBtZXNzYWdle1xyXG4gICAgICBjb2xvcjogIzIzZDVhYjtcclxuICB9Il19 */";

/***/ }),

/***/ 8820:
/*!**********************************************************************!*\
  !*** ./src/app/forget-password/otpverification.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-content class=\"ion-padding\">\r\n  <div class=\"title\">\r\n    <div class=\"row\">\r\n      <div class=\"col-10\">\r\n        <h4><b>Forgot Password </b></h4>\r\n      </div>\r\n      <div class=\"col-2\">\r\n        <div class=\"ion-margin-top ion-text-center\">\r\n          <svg (click)=\"dismiss()\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\"\r\n            xmlns=\"http://www.w3.org/2000/svg\">\r\n            <circle cx=\"12\" cy=\"12\" r=\"9\" fill=\"red\" fill-opacity=\"0.25\" />\r\n            <path d=\"M16 8L8 16\" stroke=\"white\" stroke-width=\"1.2\" stroke-linecap=\"square\" stroke-linejoin=\"round\" />\r\n            <path d=\"M8 8L16 16\" stroke=\"white\" stroke-width=\"1.2\" stroke-linecap=\"square\" stroke-linejoin=\"round\" />\r\n          </svg>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div style=\"margin-top: -7%;\" *ngIf=\"OTPField\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12\">\r\n        <ion-input style=\"color: #000000;\" [(ngModel)]=\"PhoneNumber\" placeholder=\"Enter Your Phone Number\"\r\n          class=\"primary-input\"></ion-input>\r\n      </div>\r\n\r\n      <ion-button class=\"btn btn-sm text-white\" color=\"dark\" (click)=\"SendOTP()\">Send OTP</ion-button>\r\n\r\n    </div>\r\n\r\n\r\n    <ion-input style=\"color: #000000;\" [(ngModel)]=\"OneTimePassword\" placeholder=\" - - - - \" type=\"password\"\r\n      class=\"primary-input\"></ion-input>\r\n\r\n    \r\n    <p class=\"small text-center mt-1\">Resend OTP Will Be Enabled In 60 Seconds</p>\r\n    <!-- <ion-button class=\"btn btn-sm text-white\" color=\"success\" (click)=\"NaviagtetoBack()\">\r\n    Back</ion-button> -->\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-6\">\r\n        <ion-button  *ngIf=\"AfterSixtySeconds\" class=\"btn btn-sm text-white\" color=\"dark\" (click)=\"ReSendOTP()\" >Resend OTP\r\n        </ion-button>\r\n      </div>\r\n  \r\n      <div class=\"col-6\">\r\n        <ion-button *ngIf=\"isOTPsent\" class=\"btn btn-sm text-white\" color=\"dark\" (click)=\"verifyOTP()\">Verify OTP\r\n        </ion-button>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n  <div class=\"input-field mb-5\" *ngIf=\"PasswordField\">\r\n\r\n    <ion-input style=\"color: #000000;\" [(ngModel)]=\"password\" placeholder=\"Enter Your Password\" type=\"password\"\r\n      (keyup)=\"passwordValidation(password)\" class=\"primary-input\"></ion-input>\r\n    <p *ngIf=\"pwLowercaseAlert\" style=\"color:red;font-size: 10px;\"> A <b>lowercase</b> letter </p>\r\n    <p *ngIf=\"pwUppercaseAlert\" style=\"color:red;font-size: 10px;\"> A <b>capital (uppercase)</b> lette</p>\r\n    <p *ngIf=\"pwNumberAlert\" style=\"color:red;font-size: 10px;\"> A <b>number</b> </p>\r\n    <p *ngIf=\"pwMinimumAlert\" style=\"color:red;font-size: 10px;\">Minimum <b>8 characters</b> </p>\r\n    <p *ngIf=\"invalidAlert\" style=\"color:red;font-size: 10px;\"><b>Invalid</b> </p>\r\n\r\n\r\n    <ion-input style=\"color: #000000;\" [(ngModel)]=\"confirmPassword\" placeholder=\"Confirm Your Password\"  type=\"password\" class=\"primary-input\"></ion-input>\r\n\r\n    <ion-button class=\"btn btn-sm text-white\" color=\"dark\" (click)=\"confirmThePassword()\">\r\n      Submit</ion-button>\r\n\r\n  </div>\r\n\r\n\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=default-src_app_forget-password_otpverification_page_ts.js.map