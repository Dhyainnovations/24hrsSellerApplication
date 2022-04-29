"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_signin_signin_page_ts"],{

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
                localStorage.setItem("user_mobile_Number", response.mobile_number);
                localStorage.setItem("token", response.token);
                localStorage.setItem("tbid", response.tbid);
                localStorage.setItem("StoreName", response.store_name);
                localStorage.setItem("EmailID", response.email_id);
                this.http.get('/seller_details').subscribe((response) => {
                    if (response.success == "true") {
                        console.log(response);
                        this.store_category_id = response.records.store_category_id;
                        if (response.records.store_category != null) {
                            this.store_categoryCheck = false;
                        }
                        else {
                            this.store_categoryCheck = true;
                        }
                        if (response.records.id_proof != null) {
                            this.idproofcheck = false;
                        }
                        else {
                            this.idproofcheck = true;
                        }
                        if (response.records.address_proof != null) {
                            this.addressproofcheck = false;
                        }
                        else {
                            this.addressproofcheck = true;
                        }
                        if (this.store_categoryCheck == false && this.idproofcheck == false && this.addressproofcheck == false) {
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

/***/ 693:
/*!**********************************************!*\
  !*** ./src/app/otp/otp.page.scss?ngResource ***!
  \**********************************************/
/***/ ((module) => {

module.exports = ".title {\n  margin-top: -5%;\n  margin-bottom: 30px;\n}\n\n.title h4 {\n  color: var(--ion-color-secondary);\n}\n\n.title p {\n  margin-top: 0 !important;\n  color: #999999;\n  font-size: small;\n}\n\n.forget a {\n  font-size: small !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm90cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGlDQUFBO0FBQ0o7O0FBRUE7RUFDSSx3QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksMkJBQUE7QUFDSiIsImZpbGUiOiJvdHAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiAtNSU7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLnRpdGxlIGg0IHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG5cbi50aXRsZSBwIHtcbiAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICM5OTk5OTk7XG4gICAgZm9udC1zaXplOiBzbWFsbDtcbn1cblxuLmZvcmdldCBhIHtcbiAgICBmb250LXNpemU6IHNtYWxsICFpbXBvcnRhbnQ7XG59Il19 */";

/***/ }),

/***/ 3601:
/*!****************************************************!*\
  !*** ./src/app/signin/signin.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = ".title {\n  margin-top: -5%;\n  margin-bottom: 30px;\n}\n\n.title h4 {\n  color: var(--ion-color-secondary);\n}\n\n.title p {\n  margin-top: 0 !important;\n  color: #999999;\n  font-size: small;\n}\n\n.forget a {\n  font-size: small !important;\n  margin: 0 !important;\n  padding: 0 !important;\n}\n\n.otp-btn {\n  color: var(--ion-color-light);\n  background-color: var(--ion-color-secondary);\n  border: none !important;\n  font-size: 14px;\n  text-align: center;\n  height: 78%;\n  border-radius: 5px;\n}\n\n.welcomecard {\n  background: var(--ion-color-light);\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n  margin-bottom: 25px;\n}\n\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  appearance: none;\n  margin: 0;\n}\n\n.signup {\n  color: var(--ion-color-secondary);\n}\n\nion-content {\n  background-color: var(--ion-color-light) !important;\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ25pbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGlDQUFBO0FBQ0o7O0FBRUE7RUFDSSx3QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksMkJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSw2QkFBQTtFQUNBLDRDQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFLQTtFQUNJLGtDQUFBO0VBQ0EseUNBQUE7RUFDQSxtQkFBQTtBQUZKOztBQU1BOztFQUVBLHdCQUFBO0VBRUEsZ0JBQUE7RUFDQSxTQUFBO0FBSEE7O0FBTUE7RUFDSSxpQ0FBQTtBQUhKOztBQVFBO0VBQ0ksbURBQUE7RUFJQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQVJKOztBQVNJO0VBQ0ksYUFBQTtBQVBSIiwiZmlsZSI6InNpZ25pbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xuICAgIG1hcmdpbi10b3A6IC01JTtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4udGl0bGUgaDQge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cblxuLnRpdGxlIHAge1xuICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzk5OTk5OTtcbiAgICBmb250LXNpemU6IHNtYWxsO1xufVxuXG4uZm9yZ2V0IGEge1xuICAgIGZvbnQtc2l6ZTogc21hbGwgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAgMCAhaW1wb3J0YW50O1xufVxuXG4ub3RwLWJ0bntcbiAgICBjb2xvcjp2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0Ojc4JTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cblxuXG5cbi53ZWxjb21lY2FyZHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cblxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbi13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbi1tb3otYXBwZWFyYW5jZTogbm9uZTtcbmFwcGVhcmFuY2U6IG5vbmU7XG5tYXJnaW46IDA7XG59XG5cbi5zaWdudXB7XG4gICAgY29sb3I6dmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG5cblxuXG5pb24tY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1pb24tY29sb3ItbGlnaHQpICFpbXBvcnRhbnQ7XG4gICAgLy8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgZGFya3R1cnF1b2lzZVxuICAgIC8vIDAlLCAjZDFmMmU3XG4gICAgLy8gMTAwJSkgIWltcG9ydGFudDtcbiAgICAtLW9mZnNldC1ib3R0b206IGF1dG8haW1wb3J0YW50O1xuICAgIC0tb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG4gICJdfQ== */";

/***/ }),

/***/ 9815:
/*!**********************************************!*\
  !*** ./src/app/otp/otp.page.html?ngResource ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "<ion-content class=\"ion-padding\">\n  <div class=\"welcomecard p-3\" style=\"margin-top: 55%;\">\n  <div class=\"title\">\n    <div class=\"row\">\n      <div class=\"col-10\">\n        <h4 ><b>OTP Verification</b></h4>\n      </div>\n      <div class=\"col-2\">\n        <div class=\"ion-margin-top ion-text-center\">\n          <svg (click)=\"dismiss()\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <circle cx=\"12\" cy=\"12\" r=\"9\" fill=\"red\" fill-opacity=\"0.25\"/>\n            <path d=\"M16 8L8 16\" stroke=\"white\" stroke-width=\"1.2\" stroke-linecap=\"square\" stroke-linejoin=\"round\"/>\n            <path d=\"M8 8L16 16\" stroke=\"white\" stroke-width=\"1.2\" stroke-linecap=\"square\" stroke-linejoin=\"round\"/>\n            </svg>\n          </div>\n      </div>\n    </div>\n  </div>\n\n\n  <div style=\"margin-top: -10%;\" *ngIf=\"OTPField\">\n    <div class=\"row\">\n\n      <p>Hi User, OTP Has Been Sent To Your <br>Mobile Number : {{PhoneNumber}} </p>\n\n      <div class=\"col-12\">\n        <ion-input  [(ngModel)]=\"OneTimePassword\" placeholder=\" - - - - \"\n          class=\"primary-input\"></ion-input>\n      </div>\n    </div>\n\n    <p class=\"small text-center mt-1\">Resend OTP Will Be Enabled In 60 Seconds</p>\n    \n\n    <div class=\"row\">\n      <div class=\"col-6\">\n        <ion-button  *ngIf=\"AfterSixtySeconds\" class=\"btn btn-sm \" color=\"secondary\" (click)=\"ReSendOTP()\" >Resend OTP\n        </ion-button>\n      </div>\n  \n      <div class=\"col-6\">\n        <ion-button class=\"btn btn-sm text-white\" color=\"secondary\" (click)=\"verifyOTP()\">Verify OTP\n        </ion-button>\n      </div>\n    </div>\n\n  </div>\n</div>\n</ion-content>";

/***/ }),

/***/ 5840:
/*!****************************************************!*\
  !*** ./src/app/signin/signin.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<ion-content class=\"ion-padding\">\n  <div class=\"welcomecard p-3\" style=\"margin-top: 55%;\">\n\n    <div class=\"title\">\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <h2><b>Login</b></h2>\n        </div>\n\n      </div>\n      <p>Lets get started</p>\n    </div>\n\n    <div style=\"margin-top: -7%;\" class=\"row\">\n      <div class=\"col-{{MobInputcolSize}}\">\n        <ion-input [(ngModel)]=\"signinemailid\" placeholder=\"Enter your mail\" class=\"primary-input\"></ion-input>\n      </div>\n    </div>\n\n\n    <ion-input [(ngModel)]=\"signinpassword\" placeholder=\"Enter your password\" type=\"password\" class=\"primary-input\">\n    </ion-input>\n\n    <div class=\"row\">\n      <div class=\"col-12 forgot-pw\" (click)=\"forgotPasswordPage()\">\n        Forgot password?\n      </div>\n\n\n\n      <div *ngIf=\"verifyOTPValidate\">\n\n        <ion-input type=\"number\" [(ngModel)]=\"verifynumber\" placeholder=\"Enter your sign-up number\"\n          class=\"primary-input\"></ion-input>\n        <ion-button class=\"secondarySmallBtn\" color=\"none\" (click)=\"otpPage()\">Verify Number</ion-button>\n\n      </div>\n    </div>\n\n    <div >\n      <ion-button style=\"width: 98%;\" [disabled]=\"otp == '' \" class=\"secondaryLargeBtn\" color=\"none\" (click)=\"signin()\">\n        LOGIN</ion-button>\n    </div>\n\n    <div class=\"col-12 forgot-pw ion-text-center\">\n      New user ? <span (click)=\"signupPage()\" class=\"signup\"><b>Signup</b></span>\n    </div>\n  </div>\n\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=default-src_app_signin_signin_page_ts.js.map