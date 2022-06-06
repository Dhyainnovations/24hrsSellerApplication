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
        this.show = true;
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
        this.passwordType = 'password';
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
    numberOnly(event) {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
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

module.exports = ".location {\n  color: #171717;\n  font-size: 12px;\n  margin: 5px;\n}\n\n.signin-div {\n  background-color: var(--ion-color-light) !important;\n  width: 95%;\n  height: 20%;\n  margin: auto !important;\n  z-index: 99 !important;\n}\n\n.get-started {\n  font-size: 20px;\n  color: #171717;\n  margin: 8px;\n}\n\n.create-account {\n  color: var(--ion-color-secondary);\n  font-size: 10px;\n  margin-left: 6% !important;\n  margin-top: -6px !important;\n}\n\n.tearmsAndCondition {\n  color: var(--ion-color-secondary);\n  font-size: 10px;\n  margin: 5px;\n  cursor: pointer;\n}\n\nion-input {\n  margin: 2px !important;\n  margin-bottom: 10px !important;\n}\n\n.signup-btn {\n  border-radius: 5px !important;\n  width: 50%;\n  height: 35px;\n  background: var(--ion-color-secondary);\n  color: var(--ion-color-light);\n  border: 1px solid #fff;\n}\n\n.verify-btn {\n  border-radius: 5px !important;\n  margin: 10px;\n  background: var(--ion-color-secondary);\n  color: var(--ion-color-light);\n  border: 1px solid #fff;\n}\n\n.send-otp-btn {\n  border-radius: 5px !important;\n  background: var(--ion-color-secondary);\n  color: var(--ion-color-light);\n  border: 1px solid #fff;\n  margin-bottom: 2px !important;\n}\n\n.tearmsAndCondition {\n  font-size: 10px;\n}\n\nion-label {\n  font-size: 15px !important;\n  color: #4c4c4d !important;\n}\n\n.condition {\n  font-size: 14px;\n  color: gray;\n  padding: 15px;\n}\n\n.container-wrapper {\n  margin-top: 25%;\n}\n\nion-item {\n  border-bottom: 1px solid #fff !important;\n  --highlight-background: var(--ion-color-primary)!important;\n}\n\np {\n  color: var(--ion-color-primary);\n  font-size: 10px;\n}\n\n.signIn {\n  font-size: 25 !important;\n  color: var(--ion-color-secondary);\n}\n\n.md .passInput {\n  margin-left: -10px !important;\n  --margin-left: -10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLG1EQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7QUFDSjs7QUFFQTtFQUNJLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxzQkFBQTtFQUNBLDhCQUFBO0FBQ0o7O0FBQ0E7RUFDSSw2QkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esc0NBQUE7RUFDQSw2QkFBQTtFQUNBLHNCQUFBO0FBRUo7O0FBQ0E7RUFDSSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxzQ0FBQTtFQUNBLDZCQUFBO0VBQ0Esc0JBQUE7QUFFSjs7QUFDQTtFQUNJLDZCQUFBO0VBQ0Esc0NBQUE7RUFDQSw2QkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7QUFFSjs7QUFDQTtFQUNJLGVBQUE7QUFFSjs7QUFFQTtFQUNJLDBCQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksd0NBQUE7RUFDQSwwREFBQTtBQUNKOztBQUlBO0VBQ0ksK0JBQUE7RUFDQSxlQUFBO0FBREo7O0FBR0E7RUFDSSx3QkFBQTtFQUNBLGlDQUFBO0FBQUo7O0FBR0E7RUFDSSw2QkFBQTtFQUNBLCtCQUFBO0FBQUoiLCJmaWxlIjoic2lnbnVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2NhdGlvbiB7XG4gICAgY29sb3IgICAgOiAjMTcxNzE3O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBtYXJnaW4gICA6IDVweDtcbn1cblxuLnNpZ25pbi1kaXZ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiA5NSU7XG4gICAgaGVpZ2h0OiAyMCU7XG4gICAgbWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgei1pbmRleDogOTkgIWltcG9ydGFudDtcbn1cblxuLmdldC1zdGFydGVkIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3IgICAgOiAjMTcxNzE3O1xuICAgIG1hcmdpbiAgIDogOHB4O1xufVxuXG4uY3JlYXRlLWFjY291bnQge1xuICAgIGNvbG9yICAgOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQgICA6IDYlICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogLTZweCAhaW1wb3J0YW50O1xufVxuXG4udGVhcm1zQW5kQ29uZGl0aW9uIHtcbiAgICBjb2xvciAgIDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIG1hcmdpbiAgIDogNXB4O1xuICAgIGN1cnNvciAgIDogcG9pbnRlcjtcbn1cblxuaW9uLWlucHV0e1xuICAgIG1hcmdpbjogMnB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xufVxuLnNpZ251cC1idG4ge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoICAgICAgICA6IDUwJTtcbiAgICBoZWlnaHQgICAgICAgOiAzNXB4O1xuICAgIGJhY2tncm91bmQgICA6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgIGNvbG9yICAgICAgICA6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgYm9yZGVyICAgICAgIDogMXB4IHNvbGlkICNmZmY7XG59XG5cbi52ZXJpZnktYnRuIHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4gICAgICAgOiAxMHB4O1xuICAgIGJhY2tncm91bmQgICA6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgIGNvbG9yICAgICAgICA6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgYm9yZGVyICAgICAgIDogMXB4IHNvbGlkICNmZmY7XG59XG5cbi5zZW5kLW90cC1idG4ge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQgICA6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgIGNvbG9yICAgICAgICA6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgYm9yZGVyICAgICAgIDogMXB4IHNvbGlkICNmZmY7XG4gICAgbWFyZ2luLWJvdHRvbTogMnB4ICFpbXBvcnRhbnQ7XG59XG5cbi50ZWFybXNBbmRDb25kaXRpb24ge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgXG59XG5cbmlvbi1sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgY29sb3IgICAgOiAjNGM0YzRkICFpbXBvcnRhbnQ7XG59XG5cbi5jb25kaXRpb24ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvciAgICA6IGdyYXk7XG4gICAgcGFkZGluZyAgOiAxNXB4O1xufVxuXG4uY29udGFpbmVyLXdyYXBwZXIge1xuICAgIG1hcmdpbi10b3A6IDI1JTtcbn1cblxuaW9uLWl0ZW0ge1xuICAgIGJvcmRlci1ib3R0b20gICAgICAgICA6IDFweCBzb2xpZCAjZmZmICFpbXBvcnRhbnQ7XG4gICAgLS1oaWdobGlnaHQtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpIWltcG9ydGFudDtcbn1cblxuXG5cbnB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBmb250LXNpemU6IDEwcHg7XG59XG4uc2lnbklue1xuICAgIGZvbnQtc2l6ZTogMjUgIWltcG9ydGFudDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG5cbi5tZCAucGFzc0lucHV0e1xuICAgIG1hcmdpbi1sZWZ0OiAtMTBweCAhaW1wb3J0YW50O1xuICAgIC0tbWFyZ2luLWxlZnQ6IC0xMHB4ICFpbXBvcnRhbnQ7XG59Il19 */";

/***/ }),

/***/ 1998:
/*!****************************************************!*\
  !*** ./src/app/signup/signup.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<ion-content class=\"bg-class mb-3\">\n  <div class=\"container-wrapper p-2\">\n\n    <div class=\"signin-div p-1\" style=\"margin-top: -40px;\">\n\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <h2 class=\"mx-3\" ><b>Signup</b></h2>\n        </div>\n      </div>\n\n      <div style=\"margin-top: -2%;\" class=\"row \">\n        <div class=\"col-12\">\n          <p class=\"get-started  mx-3\"><b>Getting Started</b></p>\n          <p  class=\"create-account  \">Create an account to continue!</p>\n        </div>\n       \n\n      </div>\n      <div class=\"input-field mt-1\">\n        <div class=\"container\">\n          <ion-input  required (keyup)=\"isEmailCheck()\" [(ngModel)]=\"emailid\"placeholder=\"Enter your email\" class=\"primary-input\"></ion-input>\n          <p style=\"color:#EB154B;;font-size: 10px;margin: 5px;\" *ngIf=\"isNotEmailAlert\" > Incorrect Email Address </p>\n\n          <ion-input  required [(ngModel)]=\"sellername\"  (keyup)=\"isUSername()\" placeholder=\"Enter your store name\" class=\"primary-input\"></ion-input>\n          <p *ngIf=\"isUserNameAlert\" style=\"color:#EB154B;;font-size: 10px;margin: 5px;\"> Incorrect User name </p>\n\n          <ion-input  (keyup)=\"isMobileNumber()\" required [(ngModel)]=\"mobilenumber\"  maxlength=\"10\"placeholder=\"Enter your mobile number\" class=\"primary-input\" (keypress)=\"numberOnly($event)\" type=\"text\"></ion-input >\n          <p style=\"color:#EB154B;;font-size: 10px;margin: 5px;\"  *ngIf=\"ValidNumber\"> Enter Valid Mobile\n            Number </p>\n\n          <!-- <ion-input  required [(ngModel)]=\"password\" (keyup)=\"isPasswordCheck()\" type=\"password\" placeholder=\"Enter your password\" class=\"primary-input\"></ion-input> -->\n\n          <div class=\"container\">\n            <div style=\"height: 45px !important;\" class=\"row primary-input\">\n              <div  class=\"col-10 passInput\">\n                <ion-input (keyup)=\"isPasswordCheck()\" [type]=\"passwordType\" [(ngModel)]=\"password\"  placeholder=\"Enter Your Password\"> </ion-input>\n              </div>\n              \n              <div class=\"col-2\">\n                <button style=\"background-color:transparent !important;margin-top: 47% !important;\" class=\"eyebutton\" (click)=\"onClick()\">\n                  <i style=\"color:black\" class=\"fa fa-eye\" aria-hidden=\"true\" *ngIf=\"!show\"></i>\n                  <i style=\"color:black\" class=\"fa fa-eye-slash\" aria-hidden=\"true\" *ngIf=\"show\"></i>\n                </button>\n              </div>\n            </div>\n           </div>\n\n\n          <p *ngIf=\"passwordCheck\" style=\"color:#EB154B;;font-size: 10px;margin: 5px;\" >Your password must be 8-16\n            characters, and include at least one lowercse letter, one uppercase letter, and a number</p>       \n        </div>\n       \n      </div>\n\n      <div class=\"row\">\n\n        <div class=\"col-1 tearmsAndCondition\" style=\"margin-left: 14px;\">\n          <ion-checkbox (ionChange)=\"checkboxClick($event)\" color=\"success\" [checked]=\"checked\"></ion-checkbox>\n        </div>\n        <div  class=\"col-8\">\n          <p style=\"margin-left: -2px;font-size: 11px\" class=\"tearmsAndCondition\" (click)=\"termsAndCondition()\" \n            *ngIf=\"acceptCondtioned\">By\n            creating an account, you agree to our\n            <b> Terms & Conditions</b>\n          </p>\n          <p style=\"margin-left: -2px;\" class=\"tearmsAndCondition\" (click)=\"termsAndCondition()\" \n            *ngIf=\"acceptCondtion\" style=\"color:red;font-size: 11px;\">By\n            creating an account, you agree to our\n            <b> Terms & Conditions</b>\n          </p>\n        </div>\n      </div>\n\n      <div class=\"ion-margin-top ion-text-center\">\n        <ion-button style=\"width: 90%;\"   class=\"secondaryLargeBtn\" color=\"none\" (click)=\"signup()\">SIGN UP</ion-button>\n      </div>\n\n      <p style=\"cursor: pointer;\" (click)=\"signinPage()\" class=\"condition ion-text-center\">Already have an account? <b\n        class=\"signIn\"> SignIn</b></p>\n\n\n    </div>\n  </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_signup_signup_module_ts.js.map