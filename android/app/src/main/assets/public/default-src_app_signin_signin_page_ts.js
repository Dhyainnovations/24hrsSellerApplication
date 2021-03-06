"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_signin_signin_page_ts"],{

/***/ 1895:
/*!***************************************!*\
  !*** ./src/app/signin/signin.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SigninPage": () => (/* binding */ SigninPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _signin_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signin.page.html?ngResource */ 5840);
/* harmony import */ var _signin_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signin.page.scss?ngResource */ 3601);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/http.service */ 8191);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ 598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _forget_password_otpverification_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../forget-password/otpverification.page */ 2263);
/* harmony import */ var _otp_otp_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../otp/otp.page */ 6076);












let SigninPage = class SigninPage {
    constructor(modalCtrl, router, http, toastCtrl, route) {
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.show = true;
        this.loginstatus = "";
        this.signinemailid = '';
        this.signinpassword = '';
        this.verifyOTPValidate = false;
        route.params.subscribe(val => {
            this.signinemailid = "";
            this.signinpassword = "";
            this.verifyOTPValidate = false;
            this.loginstatus = localStorage.getItem("24hrs-user-data-Seller-Status");
        });
    }
    ngOnInit() {
        this.verifyOTPValidate = false;
        this.password = 'password';
    }
    dismiss() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalCtrl.dismiss();
        });
    }
    otpPage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            localStorage.setItem("24hrs-user-data-mobile-number", this.verifynumber);
            const modal = yield this.modalCtrl.create({
                component: _otp_otp_page__WEBPACK_IMPORTED_MODULE_5__.OtpPage,
                animated: true,
                mode: 'ios',
                backdropDismiss: false,
                cssClass: 'login-modal',
            });
            return yield modal.present();
        });
    }
    forgotPasswordPage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _forget_password_otpverification_page__WEBPACK_IMPORTED_MODULE_4__.OtpverificationPage,
                animated: true,
                mode: 'ios',
                backdropDismiss: false,
                cssClass: 'login-modal',
            });
            return yield modal.present();
        });
    }
    signin() {
        const Data = {
            email_id: this.signinemailid,
            password: this.signinpassword
        };
        this.http.post('/seller_login', Data).subscribe((response) => {
            console.log(response);
            if (response.success == "true") {
                this.dismiss();
                localStorage.setItem("token", response.token);
                localStorage.setItem("tbid", response.tbid);
                localStorage.setItem("StoreName", response.store_name);
                localStorage.setItem("EmailID", response.email_id);
                localStorage.setItem("mobile_Number", response.mobile_number);
                this.http.get('/seller_details').subscribe((response) => {
                    if (response.success == "true") {
                        console.log(response);
                        this.store_category_id = response.records.store_category_id;
                        if (response.records.store_category != null) {
                            this.store_categoryCheck = true;
                        }
                        else {
                            this.store_categoryCheck = false;
                        }
                        if (this.store_categoryCheck == true) {
                            this.router.navigate(['/tabs']);
                        }
                        else {
                            this.router.navigate(['/sellerdetailpage']);
                        }
                    }
                }, (error) => {
                    console.log(error);
                });
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
                    title: 'Signed in successfully'
                });
            }
            else if (response.message == 'INCOMPLETE DATA.') {
                const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', (sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().stopTimer));
                        toast.addEventListener('mouseleave', (sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().resumeTimer));
                    }
                });
                Toast.fire({
                    icon: 'error',
                    title: 'Please enter the valid email & password'
                });
            }
            else if (response.message == 'Your have to verify your account.') {
                this.verifyOTPValidate = true;
                const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', (sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().stopTimer));
                        toast.addEventListener('mouseleave', (sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().resumeTimer));
                    }
                });
                Toast.fire({
                    icon: 'error',
                    title: 'You have to verify your account'
                });
            }
            else {
                const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 1500,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', (sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().stopTimer));
                        toast.addEventListener('mouseleave', (sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().resumeTimer));
                    }
                });
                Toast.fire({
                    icon: 'error',
                    title: 'Invalid Login Credentials'
                });
            }
        }, (error) => {
            console.log(error);
        });
    }
    signupPage() {
        this.dismiss();
        this.router.navigate(['/signuppage']);
    }
    navigatetoforgetpassword() {
        this.router.navigate(['/forget-password']);
    }
    onClick() {
        if (this.password === 'password') {
            this.password = 'text';
            this.show = true;
        }
        else {
            this.password = 'password';
            this.show = false;
        }
    }
};
SigninPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _shared_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute }
];
SigninPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-signin',
        template: _signin_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_signin_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SigninPage);



/***/ }),

/***/ 3601:
/*!****************************************************!*\
  !*** ./src/app/signin/signin.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = ".title {\n  margin-top: -5%;\n  margin-bottom: 30px;\n}\n\n.title h4 {\n  color: var(--ion-color-secondary);\n}\n\n.title p {\n  margin-top: 0 !important;\n  color: #999999;\n  font-size: small;\n}\n\n.forget a {\n  font-size: small !important;\n  margin: 0 !important;\n  padding: 0 !important;\n}\n\n.otp-btn {\n  color: var(--ion-color-light);\n  background-color: var(--ion-color-secondary);\n  border: none !important;\n  font-size: 14px;\n  text-align: center;\n  height: 78%;\n  border-radius: 5px;\n}\n\n.welcomecard {\n  background: var(--ion-color-light);\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n  margin-bottom: 25px;\n}\n\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  appearance: none;\n  margin: 0;\n}\n\n.signup {\n  color: var(--ion-color-secondary);\n}\n\nion-content {\n  background-color: var(--ion-color-light) !important;\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ25pbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGlDQUFBO0FBQ0o7O0FBRUE7RUFDSSx3QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksMkJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSw2QkFBQTtFQUNBLDRDQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFLQTtFQUNJLGtDQUFBO0VBQ0EseUNBQUE7RUFDQSxtQkFBQTtBQUZKOztBQU9BOztFQUVBLHdCQUFBO0VBRUEsZ0JBQUE7RUFDQSxTQUFBO0FBSkE7O0FBT0E7RUFDSSxpQ0FBQTtBQUpKOztBQVNBO0VBQ0ksbURBQUE7RUFJQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQVRKOztBQVVJO0VBQ0ksYUFBQTtBQVJSIiwiZmlsZSI6InNpZ25pbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xuICAgIG1hcmdpbi10b3A6IC01JTtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4udGl0bGUgaDQge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cblxuLnRpdGxlIHAge1xuICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzk5OTk5OTtcbiAgICBmb250LXNpemU6IHNtYWxsO1xufVxuXG4uZm9yZ2V0IGEge1xuICAgIGZvbnQtc2l6ZTogc21hbGwgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAgMCAhaW1wb3J0YW50O1xufVxuXG4ub3RwLWJ0bntcbiAgICBjb2xvcjp2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0Ojc4JTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cblxuXG5cbi53ZWxjb21lY2FyZHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICBcbn1cblxuXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuLW1vei1hcHBlYXJhbmNlOiBub25lO1xuYXBwZWFyYW5jZTogbm9uZTtcbm1hcmdpbjogMDtcbn1cblxuLnNpZ251cHtcbiAgICBjb2xvcjp2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cblxuXG5cbmlvbi1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWlvbi1jb2xvci1saWdodCkgIWltcG9ydGFudDtcbiAgICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCBkYXJrdHVycXVvaXNlXG4gICAgLy8gMCUsICNkMWYyZTdcbiAgICAvLyAxMDAlKSAhaW1wb3J0YW50O1xuICAgIC0tb2Zmc2V0LWJvdHRvbTogYXV0byFpbXBvcnRhbnQ7XG4gICAgLS1vdmVyZmxvdzogaGlkZGVuO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbiAgIl19 */";

/***/ }),

/***/ 5840:
/*!****************************************************!*\
  !*** ./src/app/signin/signin.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<ion-content class=\"ion-padding\">\n  <div class=\"welcomecard p-3\" style=\"margin-top: 55%;\">\n\n    <div class=\"title\">\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <h2><b>Login</b></h2>\n        </div>\n\n      </div>\n      <p>Lets get started</p>\n    </div>\n\n    <div style=\"margin-top: -7%;\" class=\"row\">\n      <div class=\"col-{{MobInputcolSize}}\">\n        <ion-input [(ngModel)]=\"signinemailid\" placeholder=\"Enter your mail\" class=\"primary-input\"></ion-input>\n      </div>\n    </div>\n\n\n\n\n   <div class=\"container\">\n    <div class=\"row primary-input\">\n      <div class=\"col-10\">\n        <ion-input [type]=\"password\" [(ngModel)]=\"signinpassword\"  placeholder=\"Enter Your Password\"> </ion-input>\n      </div>\n      \n      <div class=\"col-2\">\n        <button style=\"background-color:transparent !important;margin-top: 47% !important;\" class=\"eyebutton\" (click)=\"onClick()\">\n          <i style=\"color:black\" class=\"fa fa-eye\" aria-hidden=\"true\" *ngIf=\"!show\"></i>\n          <i style=\"color:black\" class=\"fa fa-eye-slash\" aria-hidden=\"true\" *ngIf=\"show\"></i>\n        </button>\n      </div>\n    </div>\n   </div>\n\n\n    \n\n    <div class=\"row\">\n      <div class=\"col-12 forgot-pw\" (click)=\"forgotPasswordPage()\">\n        Forgot password?\n      </div>\n\n\n\n      <div *ngIf=\"verifyOTPValidate\">\n\n        <ion-input type=\"number\" [(ngModel)]=\"verifynumber\" placeholder=\"Enter your sign-up number\"\n          class=\"primary-input\"></ion-input>\n        <ion-button class=\"secondarySmallBtn\" color=\"none\" (click)=\"otpPage()\">Verify Number</ion-button>\n\n      </div>\n    </div>\n\n    <div>\n      <ion-button style=\"width: 98%;\" [disabled]=\"otp == '' \" class=\"secondaryLargeBtn\" color=\"none\" (click)=\"signin()\">\n        LOGIN</ion-button>\n    </div>\n\n    <div class=\"col-12 forgot-pw ion-text-center\">\n      New user? <span (click)=\"signupPage()\" class=\"signup\"><b>Signup</b></span>\n    </div>\n  </div>\n\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=default-src_app_signin_signin_page_ts.js.map