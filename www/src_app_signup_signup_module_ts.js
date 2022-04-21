"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_signup_signup_module_ts"],{

/***/ 6661:
/*!*************************************************!*\
  !*** ./src/app/signup/signup-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageRoutingModule": () => (/* binding */ SignupPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.page */ 771);




const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_0__.SignupPage
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SignupPageRoutingModule);



/***/ }),

/***/ 7648:
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageModule": () => (/* binding */ SignupPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup-routing.module */ 6661);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page */ 771);







let SignupPageModule = class SignupPageModule {
};
SignupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignupPageRoutingModule
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_1__.SignupPage]
    })
], SignupPageModule);



/***/ }),

/***/ 771:
/*!***************************************!*\
  !*** ./src/app/signup/signup.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPage": () => (/* binding */ SignupPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _signup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.page.html?ngResource */ 1998);
/* harmony import */ var _signup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page.scss?ngResource */ 2444);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/http.service */ 8191);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ 598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _signin_signin_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../signin/signin.page */ 1895);












let SignupPage = class SignupPage {
    constructor(modalCtrl, router, http, toastCtrl, popoverController, route) {
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.popoverController = popoverController;
        this.route = route;
        this.checked = "false";
        this.emailid = '';
        this.sellername = '';
        this.mobilenumber = '';
        this.password = '';
        this.AfterSixtySeconds = false;
        this.checkedSts = false;
        this.isVisible = false;
        this.emailidRes = false;
        this.usernameRes = false;
        this.mobilenumberRes = false;
        this.passwordRes = false;
        this.ValidNumber = false;
        this.isNotEmailAlert = false;
        this.isUserNameAlert = false;
        this.pwLowercaseAlert = false;
        this.pwUppercaseAlert = false;
        this.pwNumberAlert = false;
        this.pwMinimumAlert = false;
        this.invalidAlert = false;
        this.acceptCondtion = false;
        this.passwordCheck = false;
        this.acceptCondtioned = true;
        this.invalidAlert = false;
        this.acceptCondtion = false;
        this.route.queryParams.subscribe(queryParams => {
            this.checked = queryParams['checkbox'];
        });
    }
    ngOnInit() {
    }
    isEmailCheck() {
        this.isNotEmailAlert = false;
    }
    isEmail() {
        var expression = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        var regex = new RegExp(expression);
        if (regex.test(this.emailid) == true) {
            this.isNotEmailAlert = false;
        }
        else {
            this.isNotEmailAlert = true;
        }
    }
    isMobileNumber() {
        this.ValidNumber = false;
    }
    mobileNumVerification() {
        console.log(this.mobilenumber);
        if (this.mobilenumber.length == 10) {
            this.ValidNumber = false;
        }
        else {
            this.ValidNumber = true;
        }
    }
    isPasswordCheck() {
        this.passwordCheck = false;
    }
    passwordValidation() {
        console.log(this.password);
        var lowerCaseLetters = /[a-z]/g;
        this.passwordRes = (lowerCaseLetters.test(this.password));
        if (this.passwordRes) {
            this.passwordCheck = false;
        }
        else {
            this.passwordCheck = true;
        }
        var upperCaseLetters = /[A-Z]/g;
        this.passwordRes = (upperCaseLetters.test(this.password));
        if (this.passwordRes) {
            this.passwordCheck = false;
        }
        else {
            this.passwordCheck = true;
        }
        var numbers = /[0-9]/g;
        this.passwordRes = (numbers.test(this.password));
        if (this.passwordRes) {
            this.passwordCheck = false;
        }
        else {
            this.passwordCheck = true;
        }
        if (this.password.length >= 8) {
            this.passwordCheck = false;
        }
        else {
            this.passwordCheck = true;
        }
        return numbers.test(this.password);
    }
    username() {
        if (this.sellername) {
            this.isUserNameAlert = false;
        }
        else {
            this.isUserNameAlert = true;
        }
    }
    isUSername() {
        this.isUserNameAlert = false;
    }
    signup() {
        if (this.checked == false || this.checked == undefined) {
            this.acceptCondtion = true;
            this.acceptCondtioned = false;
        }
        else {
            this.acceptCondtion = false;
            this.acceptCondtioned = true;
        }
        this.mobileNumVerification();
        this.isEmail();
        this.passwordValidation();
        this.username();
        const userData = {
            store_name: this.sellername,
            email_id: this.emailid,
            mobile_number: this.mobilenumber,
            password: this.password
        };
        if (this.isNotEmailAlert == false && this.passwordCheck == false && this.ValidNumber == false && this.isUserNameAlert == false && this.checked == true) {
            this.http.post('/seller_register', userData).subscribe((response) => {
                if (response.success == "true") {
                    this.passwordCheck = false;
                    localStorage.setItem("24hrs-user-data-Seller-Status", response.seller_status);
                    localStorage.setItem("24hrs-user-data-mobile-number", this.mobilenumber);
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
                    console.log(response);
                    this.router.navigate(['/otp']);
                    this.navigateOTPPage();
                }
                else if (response.message == "Email-Id Already Exist") {
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
                        title: 'Email Already Exist'
                    });
                }
                else if (response.message == "User name Already Exist") {
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
                        title: 'Username Already Exist'
                    });
                }
                else if (response.message == "Mobile Number Already Exist") {
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
                        title: 'Mobile Number Already Exist'
                    });
                }
                else if (response.message == "Store Number Already Exist") {
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
                        title: 'Phone Number Already Exist'
                    });
                }
                else if (response.message == "Store Name Already Exist") {
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
                        title: 'Phone Number Already Exist'
                    });
                }
            }, (error) => {
                console.log(error);
            });
        }
    }
    navigateOTPPage() {
        this.sellername = '';
        this.emailid = '';
        this.mobilenumber = '';
        this.password = '';
    }
    // signinPage() {
    //   this.router.navigate(['/signinpage'])
    // }
    termsAndCondition() {
        this.router.navigate(['/terms-and-condition']);
    }
    checkboxClick(e) {
        console.log(e.detail.checked);
        this.acceptCondtion = false;
        this.checked = e.detail.checked;
        this.acceptCondtioned = true;
    }
    navigateHome() {
        this.router.navigate(['/welcome']);
    }
    dismiss() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalCtrl.dismiss();
        });
    }
    signinPage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _signin_signin_page__WEBPACK_IMPORTED_MODULE_4__.SigninPage,
                animated: true,
                mode: 'ios',
                backdropDismiss: false,
                cssClass: 'login-modal',
            });
            return yield modal.present();
        });
    }
};
SignupPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _shared_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.PopoverController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute }
];
SignupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-signup',
        template: _signup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_signup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SignupPage);



/***/ }),

/***/ 2444:
/*!****************************************************!*\
  !*** ./src/app/signup/signup.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = ".location {\n  color: #171717;\n  font-size: 12px;\n  margin: 5px;\n}\n\n.signin-div {\n  background-color: #fff !important;\n  width: 95%;\n  height: 20%;\n  margin: auto !important;\n  z-index: 99 !important;\n}\n\n.get-started {\n  font-size: 20px;\n  color: #171717;\n  margin: 8px;\n}\n\n.create-account {\n  font-size: 10px;\n  margin: 8px;\n}\n\n.tearmsAndCondition {\n  font-size: 10px;\n  margin: 5px;\n  cursor: pointer;\n}\n\n.signup-btn {\n  border-radius: 5px !important;\n  width: 50%;\n  height: 35px;\n  background: #0D0D0D;\n  color: #fff;\n  border: 1px solid #fff;\n}\n\n.verify-btn {\n  border-radius: 5px !important;\n  margin: 10px;\n  background: #0D0D0D;\n  color: #fff;\n  border: 1px solid #fff;\n}\n\n.send-otp-btn {\n  border-radius: 5px !important;\n  background: #0D0D0D;\n  color: #fff;\n  border: 1px solid #fff;\n  margin-bottom: 2px !important;\n}\n\n.tearmsAndCondition {\n  font-size: 10px;\n}\n\nion-label {\n  font-size: 15px !important;\n  color: #4c4c4d !important;\n}\n\n.condition {\n  font-size: 12px;\n  color: gray;\n  padding: 15px;\n}\n\n.container-wrapper {\n  margin-top: 25%;\n}\n\nion-item {\n  border-bottom: 1px solid #fff !important;\n  --highlight-background: #EB154B !important;\n}\n\nion-content {\n  background-color: #F4F7FA !important;\n  --offset-bottom: auto !important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGlDQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFDSjs7QUFNQTtFQUNJLDZCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQUhKOztBQU1BO0VBQ0ksNkJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFISjs7QUFNQTtFQUNJLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtBQUhKOztBQU1BO0VBQ0ksZUFBQTtBQUhKOztBQU1BO0VBQ0ksMEJBQUE7RUFDQSx5QkFBQTtBQUhKOztBQU1BO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBSEo7O0FBTUE7RUFDSSxlQUFBO0FBSEo7O0FBTUE7RUFDSSx3Q0FBQTtFQUNBLDBDQUFBO0FBSEo7O0FBTUE7RUFDSSxvQ0FBQTtFQUtBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBUEo7O0FBU0k7RUFDSSxhQUFBO0FBUFIiLCJmaWxlIjoic2lnbnVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2NhdGlvbiB7XHJcbiAgICBjb2xvciAgICA6ICMxNzE3MTc7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW4gICA6IDVweDtcclxufVxyXG5cclxuLnNpZ25pbi1kaXZ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgaGVpZ2h0OiAyMCU7XHJcbiAgICBtYXJnaW46IGF1dG8gIWltcG9ydGFudDtcclxuICAgIHotaW5kZXg6IDk5ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5nZXQtc3RhcnRlZCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvciAgICA6ICMxNzE3MTc7XHJcbiAgICBtYXJnaW4gICA6IDhweDtcclxufVxyXG5cclxuLmNyZWF0ZS1hY2NvdW50IHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIG1hcmdpbiAgIDogOHB4O1xyXG59XHJcblxyXG4udGVhcm1zQW5kQ29uZGl0aW9uIHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIG1hcmdpbiAgIDogNXB4O1xyXG4gICAgY3Vyc29yICAgOiBwb2ludGVyO1xyXG59XHJcblxyXG4vLyAuaW5wdXQtZmllbGR7XHJcbi8vICAgICBtYXJnaW4tbGVmdCA6LTEwcHg7XHJcblxyXG4vLyB9XHJcbi5zaWdudXAtYnRuIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGggICAgICAgIDogNTAlO1xyXG4gICAgaGVpZ2h0ICAgICAgIDogMzVweDtcclxuICAgIGJhY2tncm91bmQgICA6ICMwRDBEMEQ7XHJcbiAgICBjb2xvciAgICAgICAgOiAjZmZmO1xyXG4gICAgYm9yZGVyICAgICAgIDogMXB4IHNvbGlkICNmZmY7XHJcbn1cclxuXHJcbi52ZXJpZnktYnRuIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luICAgICAgIDogMTBweDtcclxuICAgIGJhY2tncm91bmQgICA6ICMwRDBEMEQ7XHJcbiAgICBjb2xvciAgICAgICAgOiAjZmZmO1xyXG4gICAgYm9yZGVyICAgICAgIDogMXB4IHNvbGlkICNmZmY7XHJcbn1cclxuXHJcbi5zZW5kLW90cC1idG4ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kICAgOiAjMEQwRDBEO1xyXG4gICAgY29sb3IgICAgICAgIDogI2ZmZjtcclxuICAgIGJvcmRlciAgICAgICA6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZWFybXNBbmRDb25kaXRpb24ge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcblxyXG5pb24tbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvciAgICA6ICM0YzRjNGQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNvbmRpdGlvbiB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvciAgICA6IGdyYXk7XHJcbiAgICBwYWRkaW5nICA6IDE1cHg7XHJcbn1cclxuXHJcbi5jb250YWluZXItd3JhcHBlciB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNSU7XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAgIGJvcmRlci1ib3R0b20gICAgICAgICA6IDFweCBzb2xpZCAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAtLWhpZ2hsaWdodC1iYWNrZ3JvdW5kOiAjRUIxNTRCICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEY3RkEgIWltcG9ydGFudDtcclxuICAgIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIGRhcmt0dXJxdW9pc2VcclxuICAgIC8vIDAlLCAjZDFmMmU3XHJcbiAgICAvLyAxMDAlKSAhaW1wb3J0YW50O1xyXG5cclxuICAgIC0tb2Zmc2V0LWJvdHRvbTogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgLS1vdmVyZmxvdyAgICAgOiBoaWRkZW47XHJcbiAgICBvdmVyZmxvdyAgICAgICA6IGF1dG87XHJcblxyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ== */";

/***/ }),

/***/ 1998:
/*!****************************************************!*\
  !*** ./src/app/signup/signup.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<ion-content class=\"bg-class\">\r\n  <div class=\"container-wrapper\">\r\n\r\n    <div class=\"signin-div\" style=\"margin-top: -40px;\">\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-9\">\r\n          <h2 class=\"mx-3\" ><b>Signup</b></h2>\r\n\r\n        </div>\r\n\r\n        <div class=\"col-3 ion-text-center\">\r\n          <svg (click)=\"navigateHome()\" style=\"margin-top:12px;cursor:pointer\" width=\"24\" height=\"27\"\r\n            viewBox=\"0 0 24 27\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n            <g filter=\"url(#filter0_d_1056_2574)\">\r\n              <path d=\"M18 6L6 18\" stroke=\"#EB154B\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n              <path d=\"M6 6L18 18\" stroke=\"#EB154B\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n            </g>\r\n            <defs>\r\n              <filter id=\"filter0_d_1056_2574\" x=\"-4\" y=\"0\" width=\"32\" height=\"32\" filterUnits=\"userSpaceOnUse\"\r\n                color-interpolation-filters=\"sRGB\">\r\n                <feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\" />\r\n                <feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\"\r\n                  result=\"hardAlpha\" />\r\n                <feOffset dy=\"4\" />\r\n                <feGaussianBlur stdDeviation=\"2\" />\r\n                <feComposite in2=\"hardAlpha\" operator=\"out\" />\r\n                <feColorMatrix type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0\" />\r\n                <feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_1056_2574\" />\r\n                <feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_1056_2574\" result=\"shape\" />\r\n              </filter>\r\n            </defs>\r\n          </svg>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"row \">\r\n        <div class=\"col-12\">\r\n          <p class=\"get-started mt-2 mx-3\"><b>Getting Started</b></p>\r\n          <p class=\"create-account mx-3\">Create an account to continue!</p>\r\n        </div>\r\n       \r\n\r\n      </div>\r\n      <div class=\"input-field\">\r\n        <div class=\"container\">\r\n          <ion-input style=\"color: #000000;\" required (keyup)=\"isEmailCheck()\" [(ngModel)]=\"emailid\"placeholder=\"Enter your email\" class=\"primary-input\"></ion-input>\r\n          <p *ngIf=\"isNotEmailAlert\" style=\"color:#EB154B;font-size: 10px;\"> Incorrect Email Address </p>\r\n\r\n          <ion-input style=\"color: #000000;\" required [(ngModel)]=\"sellername\"  (keyup)=\"isUSername()\" placeholder=\"Enter your user name\" class=\"primary-input\"></ion-input>\r\n          <p *ngIf=\"isUserNameAlert\" style=\"color:#EB154B;;font-size: 10px;\"> Incorrect User name </p>\r\n\r\n          <ion-input style=\"color: #000000;\" (keyup)=\"isMobileNumber()\" required [(ngModel)]=\"mobilenumber\" type=\"text\" maxlength=\"10\"placeholder=\"Enter your mobile number\" class=\"primary-input\"></ion-input>\r\n          <p style=\"color:#EB154B;font-size: 10px; \"  *ngIf=\"ValidNumber\"> Enter Valid Mobile\r\n            Number </p>\r\n\r\n          <ion-input style=\"color: #000000;\" required [(ngModel)]=\"password\" (keyup)=\"isPasswordCheck()\" type=\"password\" placeholder=\"Enter your password\" class=\"primary-input\"></ion-input>\r\n          <p *ngIf=\"passwordCheck\" style=\"color:#EB154B;font-size: 10px;\">Your password must be 8-16\r\n            characters, and include at least one lowercse letter, one uppercase letter, and a number</p>       \r\n        </div>\r\n       \r\n      </div>\r\n\r\n      <div class=\"row\">\r\n\r\n        <div class=\"col-1 tearmsAndCondition\" style=\"margin-left: 14px;\">\r\n          <ion-checkbox (ionChange)=\"checkboxClick($event)\" color=\"success\" [checked]=\"checked\"></ion-checkbox>\r\n        </div>\r\n        <div class=\"col-8\">\r\n          <p class=\"tearmsAndCondition\" (click)=\"termsAndCondition()\" \r\n            *ngIf=\"acceptCondtioned\">By\r\n            creating an account, you agree to our\r\n            <b> Terms & Conditions</b>\r\n          </p>\r\n          <p class=\"tearmsAndCondition\" (click)=\"termsAndCondition()\" \r\n            *ngIf=\"acceptCondtion\" style=\"color:red;font-size: 10px;padding-top: 8px;\">By\r\n            creating an account, you agree to our\r\n            <b> Terms & Conditions</b>\r\n          </p>\r\n        </div>\r\n      </div>\r\n\r\n      <div style=\"width:100%; text-align: center;\">\r\n        <button (click)=\"signup()\" type=\"button\" class=\"btn btn-primary  signup-btn mt-2\">SIGN UP </button>\r\n      </div>\r\n      <p style=\"cursor: pointer;\" (click)=\"signinPage()\" class=\"condition ion-text-center\">Already have an account? <b\r\n          style=\"color:#EB154B\"> Sign in</b></p>\r\n\r\n\r\n    </div>\r\n  </div>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_signup_signup_module_ts.js.map