"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_notification_notification_module_ts"],{

/***/ 9753:
/*!*************************************************************!*\
  !*** ./src/app/notification/notification-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationPageRoutingModule": () => (/* binding */ NotificationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _notification_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification.page */ 3320);




const routes = [
    {
        path: '',
        component: _notification_page__WEBPACK_IMPORTED_MODULE_0__.NotificationPage
    }
];
let NotificationPageRoutingModule = class NotificationPageRoutingModule {
};
NotificationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NotificationPageRoutingModule);



/***/ }),

/***/ 2154:
/*!*****************************************************!*\
  !*** ./src/app/notification/notification.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationPageModule": () => (/* binding */ NotificationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _notification_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification-routing.module */ 9753);
/* harmony import */ var _notification_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification.page */ 3320);







let NotificationPageModule = class NotificationPageModule {
};
NotificationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _notification_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotificationPageRoutingModule
        ],
        declarations: [_notification_page__WEBPACK_IMPORTED_MODULE_1__.NotificationPage]
    })
], NotificationPageModule);



/***/ }),

/***/ 3320:
/*!***************************************************!*\
  !*** ./src/app/notification/notification.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationPage": () => (/* binding */ NotificationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _notification_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification.page.html?ngResource */ 5224);
/* harmony import */ var _notification_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification.page.scss?ngResource */ 8521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _shared_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/http.service */ 8191);







let NotificationPage = class NotificationPage {
    constructor(router, activatedRoute, http, route) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.noRecords = false;
        this.displaynotifications = [];
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.displaynotification();
    }
    searchPage() {
        this.router.navigate(['/searchpage']);
    }
    setalarm() {
        this.router.navigate(['/setalarm']);
    }
    displaynotification() {
        this.http.get('/read_notification').subscribe((response) => {
            console.log(response);
            this.noRecords = false;
            this.displaynotifications = response.records;
        }, (error) => {
            console.log(error);
            this.noRecords = true;
        });
    }
};
NotificationPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _shared_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute }
];
NotificationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-notification',
        template: _notification_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_notification_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NotificationPage);



/***/ }),

/***/ 8191:
/*!****************************************!*\
  !*** ./src/app/shared/http.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpService": () => (/* binding */ HttpService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);




let HttpService = class HttpService {
    constructor(http) {
        this.http = http;
    }
    get(serviceName) {
        const userdetails = localStorage.getItem("token");
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + serviceName;
        const header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
            // .set("Access-Control-Allow-Origin", "*")
            // .set("Access-Control-Allow-Methods", "GET,POST")
            // .set('Accept','application/json')
            // .set('Content-Type','application/json')
            // .set("Access-Control-Allow-Headers", "Token, Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")
            .set("Token", userdetails);
        //   let httpOptions = {
        //     headers: new HttpHeaders({
        //       "Access-Control-Allow-Origin": "*",
        //       "Access-Control-Allow-Methods": "*",
        //       "Access-Control-Allow-Headers":"Token, Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
        //       'Authorization':userdetails.token,
        //       "Content-Type": "application/json"
        //     })
        // };
        const options = { headers: header, withCredentials: true };
        return this.http.get(url, { headers: header });
    }
    post(serviceName, data) {
        const token = ((localStorage.getItem("token")));
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + serviceName;
        if (serviceName == '/seller_login' || serviceName == '/seller_register' || serviceName == '/seller_get_otp' || serviceName == '/seller_verify_otp' || '/seller_forget_pwd') {
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
            const options = { headers: headers, withCredentials: false };
            return this.http.post(url, JSON.stringify(data), { headers: headers });
        }
        else {}
    }
    postFormData(serviceName, data) {
        const token = ((localStorage.getItem("token")));
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + serviceName;
        const headers = {
            // 'enctype': 'multipart/form-data',
            // 'Content-Type': 'multipart/form-data',
            // 'Accept': 'plain/text',
            // 'Access-Control-Allow-Origin': '*',
            // 'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
            // 'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token',
            'Token': token
        };
        // const headers = new HttpHeaders().set("Token", token );
        //  headers.set('Content-Type', 'multipart/form-data'); 
        const options = { headers: headers, withCredentials: true };
        return this.http.post(url, data, { headers: headers });
    }
};
HttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
HttpService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], HttpService);



/***/ }),

/***/ 8521:
/*!****************************************************************!*\
  !*** ./src/app/notification/notification.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = ".dot {\n  margin: 10px;\n  height: 25px;\n  width: 55px;\n  background: linear-gradient(to left, #23a6d5 0%, #23d5ab 100%);\n  color: #fff;\n  border-radius: 10%;\n  display: inline-block;\n}\n\n.card {\n  /* From https://css.glass */\n  /* From https://css.glass */\n  background: #fff;\n  border-radius: 4px;\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n  backdrop-filter: blur(8.1px);\n  -webkit-backdrop-filter: blur(8.1px);\n}\n\nion-content {\n  background-color: #fff !important;\n  --offset-bottom: auto !important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSw4REFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBR0E7RUFFRSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQ0FBQTtBQURGOztBQUtBO0VBQ0UsaUNBQUE7RUFLQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQU5GOztBQVFFO0VBQ0UsYUFBQTtBQU5KIiwiZmlsZSI6Im5vdGlmaWNhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZG90IHtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIHdpZHRoOiA1NXB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMjNhNmQ1IDAlLCAjMjNkNWFiIDEwMCUpO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcblxyXG4uY2FyZCB7XHJcblxyXG4gIC8qIEZyb20gaHR0cHM6Ly9jc3MuZ2xhc3MgKi9cclxuICAvKiBGcm9tIGh0dHBzOi8vY3NzLmdsYXNzICovXHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDguMXB4KTtcclxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig4LjFweCk7XHJcbiAgXHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgLy8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzhjZGJlMlxyXG4gIC8vIDAlLCAjZDFmMmU3XHJcbiAgLy8gMTAwJSkgIWltcG9ydGFudDtcclxuXHJcbiAgLS1vZmZzZXQtYm90dG9tOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgLS1vdmVyZmxvdzogaGlkZGVuO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG5cclxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufSJdfQ== */";

/***/ }),

/***/ 5224:
/*!****************************************************************!*\
  !*** ./src/app/notification/notification.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<!------------ Header  ---------------->\r\n<ion-toolbar color=\"light\">\r\n  <ion-buttons slot=\"start\">\r\n    <ion-menu-button style=\"margin-top:15px;color:#121212\" autoHide=\"false\">\r\n      <svg width=\"34\" height=\"34\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n        <path d=\"M5 7H19\" stroke=\"#121212\" stroke-width=\"2\" stroke-linecap=\"round\" />\r\n        <path d=\"M5 12H15\" stroke=\"#121212\" stroke-width=\"2\" stroke-linecap=\"round\" />\r\n        <path d=\"M5 17H11\" stroke=\"#121212\" stroke-width=\"2\" stroke-linecap=\"round\" />\r\n      </svg>\r\n    </ion-menu-button>\r\n  </ion-buttons>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-4\">\r\n      <h5 style=\"color:#121212;margin-top:10px\"><b></b></h5>\r\n    </div>\r\n    <div class=\"col-8 mt-2 mx-2\" style=\"text-align: right;width: 90%;\">\r\n      <svg (click)=\"searchPage()\"  width=\"25\" height=\"25\" viewBox=\"0 0 24 24\" fill=\"none\">\r\n        <circle cx=\"11\" cy=\"11\" r=\"7\" stroke=\"#121212\" stroke-width=\"2\" />\r\n        <path\r\n          d=\"M11 8C10.606 8 10.2159 8.0776 9.85195 8.22836C9.48797 8.37913 9.15726 8.6001 8.87868 8.87868C8.6001 9.15726 8.37913 9.48797 8.22836 9.85195C8.0776 10.2159 8 10.606 8 11\"\r\n          stroke=\"#CCD2E3\" stroke-width=\"2\" stroke-linecap=\"round\" />\r\n        <path d=\"M20 20L17 17\" stroke=\"#121212\" stroke-width=\"2\" stroke-linecap=\"round\" />\r\n      </svg>\r\n\r\n\r\n    </div>\r\n  </div>\r\n</ion-toolbar>\r\n\r\n<ion-content>\r\n  <div class=\"container\">\r\n\r\n\r\n\r\n    <div *ngFor=\"let notification of displaynotifications\" class=\"card mt-4\">\r\n      <div class=\"row\" style=\"font-size: 14px; padding: 10px;\">\r\n        <p>{{notification.message}} for  <span>{{notification.notification}} </span></p>\r\n        <div class=\"row\" style=\"font-size: 10px;\">\r\n          <div class=\"col-6\">\r\n            <p>{{notification.created_at | date: 'MMMM d, y'}}</p>\r\n          </div>\r\n\r\n          <div class=\"col-6 ion-text-right\">\r\n            <svg width=\"16\" height=\"16\" viewBox=\"0 0 25 23\" fill=\"none\" >\r\n              <path d=\"M23.0058 6.00409C22.8742 6.00485 22.7437 5.97963 22.6219 5.92986C22.5001 5.8801 22.3892 5.80677 22.2958 5.71409L18.2958 1.71409C18.1075 1.52579 18.0017 1.27039 18.0017 1.00409C18.0017 0.73779 18.1075 0.482395 18.2958 0.294092C18.4841 0.105788 18.7395 0 19.0058 0C19.2721 0 19.5275 0.105788 19.7158 0.294092L23.7158 4.29409C23.8095 4.38705 23.8839 4.49766 23.9347 4.61951C23.9855 4.74137 24.0116 4.87208 24.0116 5.00409C24.0116 5.1361 23.9855 5.26681 23.9347 5.38867C23.8839 5.51053 23.8095 5.62113 23.7158 5.71409C23.6224 5.80677 23.5115 5.8801 23.3897 5.92986C23.2679 5.97963 23.1374 6.00485 23.0058 6.00409ZM1.7158 5.71409L5.7158 1.71409C5.9041 1.52579 6.00989 1.27039 6.00989 1.00409C6.00989 0.73779 5.9041 0.482395 5.7158 0.294092C5.52749 0.105788 5.2721 0 5.0058 0C4.7395 0 4.4841 0.105788 4.2958 0.294092L0.295798 4.29409C0.20207 4.38705 0.127676 4.49766 0.0769072 4.61951C0.0261385 4.74137 0 4.87208 0 5.00409C0 5.1361 0.0261385 5.26681 0.0769072 5.38867C0.127676 5.51053 0.20207 5.62113 0.295798 5.71409C0.388761 5.80782 0.499362 5.88221 0.621222 5.93298C0.743081 5.98375 0.873786 6.00989 1.0058 6.00989C1.13781 6.00989 1.26852 5.98375 1.39038 5.93298C1.51223 5.88221 1.62284 5.80782 1.7158 5.71409ZM12.0058 13.0041C11.808 13.0041 11.6147 13.0627 11.4502 13.1726C11.2858 13.2825 11.1576 13.4387 11.0819 13.6214C11.0062 13.8041 10.9864 14.0052 11.025 14.1992C11.0636 14.3932 11.1588 14.5713 11.2987 14.7112C11.4385 14.8511 11.6167 14.9463 11.8107 14.9849C12.0047 15.0235 12.2058 15.0037 12.3885 14.928C12.5712 14.8523 12.7274 14.7241 12.8373 14.5597C12.9472 14.3952 13.0058 14.2019 13.0058 14.0041C13.0058 13.7389 12.9004 13.4845 12.7129 13.297C12.5254 13.1094 12.271 13.0041 12.0058 13.0041ZM22.0058 12.0041C22.0058 13.9819 21.4193 15.9153 20.3205 17.5598C19.2217 19.2043 17.6599 20.486 15.8326 21.2429C14.0054 21.9998 11.9947 22.1978 10.0549 21.8119C8.11509 21.4261 6.33326 20.4737 4.93473 19.0752C3.53621 17.6766 2.5838 15.8948 2.19795 13.955C1.81209 12.0152 2.01013 10.0045 2.767 8.17726C3.52388 6.35 4.8056 4.78821 6.4501 3.6894C8.09459 2.59058 10.028 2.00409 12.0058 2.00409C14.658 2.00409 17.2015 3.05766 19.0769 4.93302C20.9522 6.80839 22.0058 9.35193 22.0058 12.0041ZM15.0058 14.0041C15.0041 13.3851 14.8109 12.7819 14.4529 12.277C14.0948 11.7722 13.5893 11.3904 13.0058 11.1841V7.00409C13.0058 6.73888 12.9004 6.48452 12.7129 6.29699C12.5254 6.10945 12.271 6.00409 12.0058 6.00409C11.7406 6.00409 11.4862 6.10945 11.2987 6.29699C11.1112 6.48452 11.0058 6.73888 11.0058 7.00409V11.1841C10.4869 11.3675 10.0285 11.6902 9.68072 12.1167C9.33294 12.5433 9.10919 13.0573 9.03397 13.6025C8.95874 14.1476 9.03494 14.703 9.25421 15.2078C9.47349 15.7126 9.8274 16.1473 10.2772 16.4644C10.727 16.7816 11.2554 16.9688 11.8045 17.0058C12.3536 17.0427 12.9023 16.9279 13.3905 16.6738C13.8787 16.4198 14.2877 16.0364 14.5726 15.5655C14.8575 15.0946 15.0073 14.5544 15.0058 14.0041Z\" fill=\"#0D0D0D\"/>\r\n              </svg>\r\n              \r\n            {{notification.created_at | date: 'h:mm:ss a'}}\r\n          </div>\r\n\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div *ngIf=\"noRecords\" style=\"margin: auto !important;margin-top: 40% !important;\">\r\n    <img src=\"assets/gif/empty.gif\" alt=\"\">\r\n  </div>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_notification_notification_module_ts.js.map