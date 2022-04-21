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
                if (response.seller_status == "First Login") {
                    this.router.navigate(['/sellerdetailpage']);
                }
                else {
                    this.router.navigate(['/tabs']);
                }
                localStorage.setItem("user_mobile_Number", response.mobile_number);
                localStorage.setItem("token", response.token);
                localStorage.setItem("tbid", response.tbid);
                localStorage.setItem("StoreName", response.store_name);
                localStorage.setItem("EmailID", response.email_id);
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

module.exports = ".title {\n  margin-top: -5%;\n  margin-bottom: 30px;\n}\n\n.title h4 {\n  color: var(--ion-color-dark);\n}\n\n.title p {\n  margin-top: 0 !important;\n  color: #999999;\n  font-size: small;\n}\n\n.forget a {\n  font-size: small !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm90cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLDRCQUFBO0FBQ0o7O0FBRUE7RUFDSSx3QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksMkJBQUE7QUFDSiIsImZpbGUiOiJvdHAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcclxuICAgIG1hcmdpbi10b3A6IC01JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi50aXRsZSBoNCB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG59XHJcblxyXG4udGl0bGUgcCB7XHJcbiAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzk5OTk5OTtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbn1cclxuXHJcbi5mb3JnZXQgYSB7XHJcbiAgICBmb250LXNpemU6IHNtYWxsICFpbXBvcnRhbnQ7XHJcbn0iXX0= */";

/***/ }),

/***/ 3601:
/*!****************************************************!*\
  !*** ./src/app/signin/signin.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = ".title {\n  margin-top: -5%;\n  margin-bottom: 30px;\n}\n\n.title h4 {\n  color: var(--ion-color-dark);\n}\n\n.title p {\n  margin-top: 0 !important;\n  color: #999999;\n  font-size: small;\n}\n\n.forget a {\n  font-size: small !important;\n}\n\n.otp-btn {\n  color: #fff;\n  background-color: var(--ion-color-dark);\n  border: none !important;\n  font-size: 14px;\n  text-align: center;\n  height: 78%;\n  border-radius: 5px;\n}\n\n.welcomecard {\n  background: #fff;\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n  margin-bottom: 25px;\n}\n\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  appearance: none;\n  margin: 0;\n}\n\nion-content {\n  background-color: #fff !important;\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ25pbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLDRCQUFBO0FBQ0o7O0FBRUE7RUFDSSx3QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksMkJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSx1Q0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBS0E7RUFDSSxnQkFBQTtFQUNBLHlDQUFBO0VBQ0EsbUJBQUE7QUFGSjs7QUFNQTs7RUFFQSx3QkFBQTtFQUVBLGdCQUFBO0VBQ0EsU0FBQTtBQUhBOztBQU9BO0VBQ0ksaUNBQUE7RUFJQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQVBKOztBQVFJO0VBQ0ksYUFBQTtBQU5SIiwiZmlsZSI6InNpZ25pbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xyXG4gICAgbWFyZ2luLXRvcDogLTUlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLnRpdGxlIGg0IHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbn1cclxuXHJcbi50aXRsZSBwIHtcclxuICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjOTk5OTk5O1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxufVxyXG5cclxuLmZvcmdldCBhIHtcclxuICAgIGZvbnQtc2l6ZTogc21hbGwgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm90cC1idG57XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6NzglO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4ud2VsY29tZWNhcmR7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcblxyXG5cclxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxyXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xyXG4td2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbi1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuYXBwZWFyYW5jZTogbm9uZTtcclxubWFyZ2luOiAwO1xyXG59XHJcblxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCBkYXJrdHVycXVvaXNlXHJcbiAgICAvLyAwJSwgI2QxZjJlN1xyXG4gICAgLy8gMTAwJSkgIWltcG9ydGFudDtcclxuICAgIC0tb2Zmc2V0LWJvdHRvbTogYXV0byFpbXBvcnRhbnQ7XHJcbiAgICAtLW92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuICAiXX0= */";

/***/ }),

/***/ 9815:
/*!**********************************************!*\
  !*** ./src/app/otp/otp.page.html?ngResource ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "<ion-content class=\"ion-padding\">\r\n\r\n  <div class=\"title\">\r\n    <div class=\"row\">\r\n      <div class=\"col-10\">\r\n        <h4 ><b>OTP Verification</b></h4>\r\n      </div>\r\n      <div class=\"col-2\">\r\n        <div class=\"ion-margin-top ion-text-center\">\r\n          <svg (click)=\"dismiss()\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n            <circle cx=\"12\" cy=\"12\" r=\"9\" fill=\"red\" fill-opacity=\"0.25\"/>\r\n            <path d=\"M16 8L8 16\" stroke=\"white\" stroke-width=\"1.2\" stroke-linecap=\"square\" stroke-linejoin=\"round\"/>\r\n            <path d=\"M8 8L16 16\" stroke=\"white\" stroke-width=\"1.2\" stroke-linecap=\"square\" stroke-linejoin=\"round\"/>\r\n            </svg>\r\n          </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div style=\"margin-top: -10%;\" *ngIf=\"OTPField\">\r\n    <div class=\"row\">\r\n\r\n      <p>Hi User, OTP Has Been Sent To Your <br>Mobile Number : {{PhoneNumber}} </p>\r\n\r\n      <div class=\"col-12\">\r\n        <ion-input style=\"color: #000000;\" [(ngModel)]=\"OneTimePassword\" placeholder=\" - - - - \"\r\n          class=\"primary-input\"></ion-input>\r\n      </div>\r\n    </div>\r\n\r\n    <p class=\"small text-center mt-1\">Resend OTP Will Be Enabled In 60 Seconds</p>\r\n    \r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-6\">\r\n        <ion-button  *ngIf=\"AfterSixtySeconds\" class=\"btn btn-sm text-white\" color=\"dark\" (click)=\"ReSendOTP()\" >Resend OTP\r\n        </ion-button>\r\n      </div>\r\n  \r\n      <div class=\"col-6\">\r\n        <ion-button class=\"btn btn-sm text-white\" color=\"dark\" (click)=\"verifyOTP()\">Verify OTP\r\n        </ion-button>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</ion-content>";

/***/ }),

/***/ 5840:
/*!****************************************************!*\
  !*** ./src/app/signin/signin.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "\r\n\r\n<ion-content   class=\"ion-padding\">\r\n  <div class=\"welcomecard p-3\" style=\"margin-top: 55%;\">\r\n\r\n  <div class=\"title\">\r\n    <div class=\"row\">\r\n      <div class=\"col-10\">\r\n        <h4 ><b>Login</b></h4>\r\n      </div>\r\n      <div class=\"col-2\">\r\n        <div class=\"ion-margin-top ion-text-center\">\r\n          <svg (click)=\"dismiss()\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n            <circle cx=\"12\" cy=\"12\" r=\"9\" fill=\"red\" fill-opacity=\"0.25\"/>\r\n            <path d=\"M16 8L8 16\" stroke=\"white\" stroke-width=\"1.2\" stroke-linecap=\"square\" stroke-linejoin=\"round\"/>\r\n            <path d=\"M8 8L16 16\" stroke=\"white\" stroke-width=\"1.2\" stroke-linecap=\"square\" stroke-linejoin=\"round\"/>\r\n            </svg>\r\n          </div>\r\n      </div>\r\n    </div>\r\n    <p>Lets get started</p>\r\n  </div>\r\n\r\n  <div style=\"margin-top: -7%;\" class=\"row\">\r\n    <div class=\"col-{{MobInputcolSize}}\">\r\n      <ion-input style=\"color: #000000;\" [(ngModel)]=\"signinemailid\"  placeholder=\"Enter your mail\" class=\"primary-input\"></ion-input>\r\n    </div>\r\n  </div>\r\n\r\n \r\n  <ion-input style=\"color: #000000;\"  [(ngModel)]=\"signinpassword\" placeholder=\"Enter your password\" type=\"password\" class=\"primary-input\"></ion-input>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-12 forgot-pw\" (click)=\"forgotPasswordPage()\">\r\n      Forgot password?\r\n    </div>\r\n    \r\n    <div *ngIf=\"verifyOTPValidate\" >\r\n\r\n        <ion-input style=\"color: #000000;\"  type=\"number\" [(ngModel)]=\"verifynumber\" placeholder=\"Enter your sign-up number\" class=\"primary-input\"></ion-input>\r\n\r\n      <button (click)=\"otpPage()\" class=\"btn btn-sm signin-btn mt-3\">Verify Number</button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"ion-margin-top\">\r\n    <ion-button  [disabled]=\"otp == '' \" expand=\"block\" color=\"dark\" (click)=\"signin()\">LOGIN</ion-button>\r\n  </div>\r\n\r\n\r\n</div>\r\n\r\n  \r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_signin_signin_page_ts.js.map