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
        this.show = true;
        this.showPw = true;
        this.intervalId = 0;
        this.otpseconds = "60";
        this.GetUserDetail = {};
        this.OneTimePassword = "";
        this.OTPSent = false;
    }
    ngOnInit() {
        this.OTPField = "true";
        this.show = true;
        this.showPw = true;
    }
    onClick() {
        if (this.passwordType === 'password') {
            this.passwordType = 'text';
            this.show = true;
        }
        else {
            this.passwordType = 'password';
            this.show = false;
        }
    }
    Click() {
        if (this.pwType === 'password') {
            this.pwType = 'text';
            this.showPw = true;
        }
        else {
            this.pwType = 'password';
            this.showPw = false;
        }
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
    ReSendOTP() {
        this.start();
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
        this.dismiss();
        this.router.navigate(['/signinpage']);
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
        this.start();
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

module.exports = "ion-label {\n  font-size: 12px !important;\n  color: #4c4c4d !important;\n}\n\nion-item {\n  --background: transparent !important;\n}\n\nion-input:focus {\n  --border-bottom: 2px solid var(--ion-color-success) !important;\n}\n\n.title {\n  margin-top: -5%;\n  margin-bottom: 30px;\n}\n\n.title h4 {\n  color: var(--ion-color-secondary);\n}\n\n.title p {\n  margin-top: 0 !important;\n  color: #999999;\n  font-size: small;\n}\n\n.forget a {\n  font-size: small !important;\n}\n\n.welcomecard {\n  background: var(--ion-color-light);\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n  margin-bottom: 25px;\n}\n\n.validation {\n  color: var(--ion-color-primary);\n  font-size: 10px;\n}\n\nion-content {\n  background-color: var(--ion-color-light) !important;\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n\n.welcome {\n  font-size: 15px;\n}\n\n.OTPmessage {\n  color: var(--ion-color-success);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm90cHZlcmlmaWNhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxvQ0FBQTtBQUVKOztBQUFBO0VBQ0ksOERBQUE7QUFHSjs7QUFBQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQUdKOztBQUFBO0VBQ0ksaUNBQUE7QUFHSjs7QUFBQTtFQUNJLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBR0o7O0FBQUE7RUFDSSwyQkFBQTtBQUdKOztBQUFBO0VBQ0ksa0NBQUE7RUFDQSx5Q0FBQTtFQUNBLG1CQUFBO0FBR0o7O0FBQUE7RUFDSSwrQkFBQTtFQUNBLGVBQUE7QUFHSjs7QUFFQTtFQUNJLG1EQUFBO0VBSUEsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFGSjs7QUFHSTtFQUNJLGFBQUE7QUFEUjs7QUFLRTtFQUNJLGVBQUE7QUFGTjs7QUFLRTtFQUNJLCtCQUFBO0FBRk4iLCJmaWxlIjoib3RwdmVyaWZpY2F0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1sYWJlbHtcbiAgICBmb250LXNpemU6MTJweCAgIWltcG9ydGFudDtcbiAgICBjb2xvcjojNGM0YzRkICFpbXBvcnRhbnQ7O1xufVxuaW9uLWl0ZW17XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuaW9uLWlucHV0OmZvY3Vze1xuICAgIC0tYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKSAhaW1wb3J0YW50O1xufVxuXG4udGl0bGUge1xuICAgIG1hcmdpbi10b3A6IC01JTtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4udGl0bGUgaDQge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cblxuLnRpdGxlIHAge1xuICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzk5OTk5OTtcbiAgICBmb250LXNpemU6IHNtYWxsO1xufVxuXG4uZm9yZ2V0IGEge1xuICAgIGZvbnQtc2l6ZTogc21hbGwgIWltcG9ydGFudDtcbn1cblxuLndlbGNvbWVjYXJke1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuLnZhbGlkYXRpb257XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBmb250LXNpemU6IDEwcHg7XG59XG5cblxuXG5pb24tY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1pb24tY29sb3ItbGlnaHQpICFpbXBvcnRhbnQ7XG4gICAgLy8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgZGFya3R1cnF1b2lzZVxuICAgIC8vIDAlLCAjZDFmMmU3XG4gICAgLy8gMTAwJSkgIWltcG9ydGFudDtcbiAgICAtLW9mZnNldC1ib3R0b206IGF1dG8haW1wb3J0YW50O1xuICAgIC0tb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLndlbGNvbWV7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cblxuICAuT1RQbWVzc2FnZXtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG4gIH0iXX0= */";

/***/ }),

/***/ 8820:
/*!**********************************************************************!*\
  !*** ./src/app/forget-password/otpverification.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-content class=\"ion-padding\">\n  <div class=\"welcomecard p-3 \" style=\"margin-top: 55%;\">\n  <div class=\"title mt-1\">\n    <div class=\"row\">\n      <div class=\"col-10\">\n        <h4><b>Forgot Password </b></h4>\n      </div>\n      <div class=\"col-2\">\n        <div class=\"ion-margin-top ion-text-center\">\n          <svg (click)=\"dismiss()\" style=\"cursor:pointer\" width=\"24\" height=\"27\"\n          viewBox=\"0 0 24 27\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <g filter=\"url(#filter0_d_1056_2574)\">\n            <path d=\"M18 6L6 18\" stroke=\"#EB154B\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n            <path d=\"M6 6L18 18\" stroke=\"#EB154B\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n          </g>\n          <defs>\n            <filter id=\"filter0_d_1056_2574\" x=\"-4\" y=\"0\" width=\"32\" height=\"32\" filterUnits=\"userSpaceOnUse\"\n              color-interpolation-filters=\"sRGB\">\n              <feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\" />\n              <feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\"\n                result=\"hardAlpha\" />\n              <feOffset dy=\"4\" />\n              <feGaussianBlur stdDeviation=\"2\" />\n              <feComposite in2=\"hardAlpha\" operator=\"out\" />\n              <feColorMatrix type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0\" />\n              <feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_1056_2574\" />\n              <feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_1056_2574\" result=\"shape\" />\n            </filter>\n          </defs>\n        </svg>\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <div style=\"margin-top: -7%;\" *ngIf=\"OTPField\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <ion-input [(ngModel)]=\"PhoneNumber\" placeholder=\"Enter Your Phone Number\"\n          class=\"primary-input\"></ion-input>\n      </div>\n\n\n      <div class=\"ion-text-center\">\n        <ion-button (click)=\"SendOTP()\"  style=\"width: 97%;\"  class=\"secondarySmallBtn mt-3 mb-4\" color=\"none\" >\n          Send OTP </ion-button>\n      </div>\n\n    </div>\n\n\n    <ion-input [(ngModel)]=\"OneTimePassword\" placeholder=\" - - - - \" type=\"password\"\n      class=\"primary-input\"></ion-input>\n\n    \n    <p class=\"small text-center mt-1\">Resend OTP Will Be Enabled In {{otpseconds}} Seconds</p>\n    <!-- <ion-button class=\"btn btn-sm text-white\" color=\"success\" (click)=\"NaviagtetoBack()\">\n    Back</ion-button> -->\n\n    <div class=\"row\">\n      <div class=\"col-6 mb-3\">\n\n        <ion-button style=\"width: 95%;margin: auto;\"   class=\"secondarySmallBtn mt-2\" color=\"none\" (click)=\"ReSendOTP()\" *ngIf=\"AfterSixtySeconds\">\n         Resend OTP</ion-button>\n\n    \n      </div>\n  \n      <div class=\"col-6 mb-3\">\n\n        <ion-button style=\"width: 95%;margin: auto;\"  class=\"secondarySmallBtn mt-2\" color=\"none\" (click)=\"verifyOTP()\" *ngIf=\"isOTPsent\">\n          Verify OTP</ion-button>\n      </div>\n    </div>\n\n  </div>\n\n\n  <div class=\"input-field mb-5\" *ngIf=\"PasswordField\" >\n\n    <div class=\"container\">\n    <div style=\"height: 45px !important;\" class=\"row primary-input\">\n      <div  class=\"col-10 passInput\">\n        <ion-input (keyup)=\"passwordValidation(password)\" [type]=\"passwordType\" [(ngModel)]=\"password\"  placeholder=\"Enter Your Password\"> </ion-input>\n      </div>\n      \n      <div class=\"col-2\">\n        <button style=\"background-color:transparent !important;margin-top: 47% !important;\" class=\"eyebutton\" (click)=\"onClick()\">\n          <i style=\"color:black\" class=\"fa fa-eye\" aria-hidden=\"true\" *ngIf=\"!show\"></i>\n          <i style=\"color:black\" class=\"fa fa-eye-slash\" aria-hidden=\"true\" *ngIf=\"show\"></i>\n        </button>\n      </div>\n    </div>\n   </div>\n\n   \n    <p *ngIf=\"pwLowercaseAlert\" class=\"validation\" > A <b>lowercase</b> letter </p>\n    <p *ngIf=\"pwUppercaseAlert\" class=\"validation\" > A <b>capital (uppercase)</b> lette</p>\n    <p *ngIf=\"pwNumberAlert\" class=\"validation\" > A <b>number</b> </p>\n    <p *ngIf=\"pwMinimumAlert\" class=\"validation\" >Minimum <b>8 characters</b> </p>\n    <p *ngIf=\"invalidAlert\" class=\"validation\" ><b>Invalid</b> </p>\n\n\n\n\n\n    <div class=\"container\">\n      <div style=\"height: 45px !important;\" class=\"row primary-input\">\n        <div  class=\"col-10 passInput\">\n          <ion-input (keyup)=\"passwordValidation(password)\" [type]=\"pwType\" [(ngModel)]=\"confirmPassword\"  placeholder=\"Enter Your Password\"> </ion-input>\n        </div>\n        \n        <div class=\"col-2\">\n          <button style=\"background-color:transparent !important;margin-top: 47% !important;\" class=\"eyebutton\" (click)=\"Click()\">\n            <i style=\"color:black\" class=\"fa fa-eye\" aria-hidden=\"true\" *ngIf=\"!showPw\"></i>\n            <i style=\"color:black\" class=\"fa fa-eye-slash\" aria-hidden=\"true\" *ngIf=\"showPw\"></i>\n          </button>\n        </div>\n      </div>\n     </div>\n\n\n    \n\n    \n    <ion-button (click)=\"confirmThePassword()\"  style=\"width: 98%;\"  class=\"secondarySmallBtn mt-3 mb-4\" color=\"none\" >\n      Submit </ion-button>\n\n    \n\n  </div>\n\n  \n\n</div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=default-src_app_forget-password_otpverification_page_ts.js.map