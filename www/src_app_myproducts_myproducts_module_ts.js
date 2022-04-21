"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_myproducts_myproducts_module_ts"],{

/***/ 1441:
/*!*********************************************************!*\
  !*** ./src/app/myproducts/myproducts-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyproductsPageRoutingModule": () => (/* binding */ MyproductsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _myproducts_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myproducts.page */ 6329);




const routes = [
    {
        path: '',
        component: _myproducts_page__WEBPACK_IMPORTED_MODULE_0__.MyproductsPage
    }
];
let MyproductsPageRoutingModule = class MyproductsPageRoutingModule {
};
MyproductsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MyproductsPageRoutingModule);



/***/ }),

/***/ 3363:
/*!*************************************************!*\
  !*** ./src/app/myproducts/myproducts.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyproductsPageModule": () => (/* binding */ MyproductsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _myproducts_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myproducts-routing.module */ 1441);
/* harmony import */ var _myproducts_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myproducts.page */ 6329);







let MyproductsPageModule = class MyproductsPageModule {
};
MyproductsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _myproducts_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyproductsPageRoutingModule
        ],
        declarations: [_myproducts_page__WEBPACK_IMPORTED_MODULE_1__.MyproductsPage]
    })
], MyproductsPageModule);



/***/ }),

/***/ 6329:
/*!***********************************************!*\
  !*** ./src/app/myproducts/myproducts.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyproductsPage": () => (/* binding */ MyproductsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _myproducts_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myproducts.page.html?ngResource */ 6067);
/* harmony import */ var _myproducts_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myproducts.page.scss?ngResource */ 8062);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _shared_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/http.service */ 8191);







let MyproductsPage = class MyproductsPage {
    constructor(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.userdetails = atob(localStorage.getItem("24hrs-user-data"));
        this.noProducts = false;
        this.showReadData = "";
        this.productlist = [];
        this.displayReadData = "";
        route.params.subscribe(val => {
            this.ProductList();
        });
    }
    ngOnInit() {
    }
    exit() {
        this.router.navigate(['/tabs']);
    }
    NavigatetoNotification() {
        this.router.navigate(['/notification']);
    }
    ProductList() {
        this.http.get('/read_all_product').subscribe((response) => {
            console.log(response.records);
            this.productlist = response.records;
            this.noProducts = false;
        }, (error) => {
            console.log(error);
            this.noProducts = true;
            this.productlist = [];
        });
    }
    navigatetoaddoffer(productname) {
        this.router.navigate(['/add-product-offer'], { queryParams: { product_name: productname } });
    }
    editDetails(product_name) {
        const p = product_name;
        console.log(p);
        this.http.get('/read_one_product?p=' + p).subscribe((response) => {
            this.displayReadData = response.records.tbid;
            this.showReadData = response.records.product_name;
            this.router.navigate(['/myproductEditPage'], { queryParams: { tbid: this.displayReadData, product_name: this.showReadData } });
        }, (error) => {
            console.log(error);
        });
    }
    searchPage() {
        this.router.navigate(['/searchpage']);
    }
    navigateTo() {
        this.router.navigate(['/tabs/tab3']);
    }
};
MyproductsPage.ctorParameters = () => [
    { type: _shared_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute }
];
MyproductsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-myproducts',
        template: _myproducts_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_myproducts_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MyproductsPage);



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

/***/ 8062:
/*!************************************************************!*\
  !*** ./src/app/myproducts/myproducts.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = ".myproduct-div {\n  background-color: #F4F7FA;\n  border: 1px solid #fff;\n  border-radius: 8px;\n  box-shadow: 2px 2px 2px 2px #ccc;\n  width: 96% !important;\n  margin: 5px;\n  box-shadow: 0 0 3px #ccc;\n  border: 1px solid #fff;\n}\n\nimg {\n  margin-left: 10px !important;\n  height: 80px;\n  width: 95px;\n}\n\nspan {\n  font-size: smaller;\n}\n\n.repost-btn {\n  color: #EB154B;\n  text-align: center;\n}\n\n.repost-btn:hover {\n  background: none !important;\n}\n\nh6, span, p {\n  margin-top: 0;\n  padding: 0;\n}\n\nimg {\n  border-radius: 10px;\n  height: 100px;\n  width: 100px;\n  margin: 5px;\n}\n\n.no-of-views {\n  font-size: 12px;\n  margin: 0 !important;\n  padding: 0 !important;\n}\n\n#cross {\n  cursor: pointer;\n  margin-top: 20px;\n}\n\n#cross:hover {\n  color: red;\n}\n\n.addproduct-btn {\n  border-radius: 5px !important;\n  background: #0D0D0D;\n  border: 1px solid #fff;\n  color: #fff;\n}\n\nion-content {\n  background-color: #ffff !important;\n  --offset-bottom: auto !important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n\n.card:hover {\n  color: black;\n  /* From https://css.glass */\n  /* From https://css.glass */\n  background: rgba(0, 0, 0, 0.04);\n  border-radius: 16px;\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n  backdrop-filter: blur(4.9px);\n  -webkit-backdrop-filter: blur(4.9px);\n}\n\n.welcomecard {\n  background-color: #fff;\n  width: 100%;\n  margin: auto !important;\n  margin-bottom: 8px !important;\n  border-radius: 4px !important;\n  box-shadow: 3px 3px 16px 4px #ccc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15cHJvZHVjdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFHQSx3QkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBR0E7RUFDRSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQUY7O0FBSUE7RUFDRSxrQkFBQTtBQURGOztBQVVBO0VBRUUsY0FBQTtFQUNBLGtCQUFBO0FBUkY7O0FBV0E7RUFDRSwyQkFBQTtBQVJGOztBQVdBO0VBQ0UsYUFBQTtFQUNBLFVBQUE7QUFSRjs7QUFXQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBUkY7O0FBWUE7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtBQVRGOztBQVlBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBVEY7O0FBWUE7RUFDRSxVQUFBO0FBVEY7O0FBb0JBO0VBQ0UsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQWpCRjs7QUFvQkE7RUFDRSxrQ0FBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBakJGOztBQW1CRTtFQUNFLGFBQUE7QUFqQko7O0FBcUJBO0VBQ0UsWUFBQTtFQUNBLDJCQUFBO0VBQ0YsMkJBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUNBQUE7RUFDQSw0QkFBQTtFQUNBLG9DQUFBO0FBbEJBOztBQXFCQTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLGlDQUFBO0FBbEJGIiwiZmlsZSI6Im15cHJvZHVjdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15cHJvZHVjdC1kaXYge1xyXG4gIGJhY2tncm91bmQtY29sb3IgIDogI0Y0RjdGQTtcclxuICBib3JkZXIgICAgICAgICAgICA6IDFweCBzb2xpZCAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXMgICAgIDogOHB4O1xyXG4gIGJveC1zaGFkb3cgICAgICAgIDogMnB4IDJweCAycHggMnB4ICNjY2M7XHJcbiAgd2lkdGggICAgICAgICAgICAgOiA5NiUgIWltcG9ydGFudDtcclxuICBtYXJnaW4gICAgICAgICAgICA6IDVweDtcclxuICAtbW96LWJveC1zaGFkb3cgICA6IDAgMCAzcHggI2NjYztcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAzcHggI2NjYztcclxuICBib3gtc2hhZG93ICAgICAgICA6IDAgMCAzcHggI2NjYztcclxuICBib3JkZXIgICAgICAgICAgICA6IDFweCBzb2xpZCAjZmZmO1xyXG5cclxufVxyXG5cclxuaW1nIHtcclxuICBtYXJnaW4tbGVmdDogMTBweCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodCAgICAgOiA4MHB4O1xyXG4gIHdpZHRoICAgICAgOiA5NXB4O1xyXG59XHJcblxyXG5cclxuc3BhbiB7XHJcbiAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG59XHJcblxyXG4vLyAucHJpY2Uge1xyXG4vLyAgIG1hcmdpbi10b3A6IDEzcHggIWltcG9ydGFudDtcclxuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4vLyB9XHJcblxyXG4ucmVwb3N0LWJ0biB7XHJcbiAgLy8gYmFja2dyb3VuZCAgIDogI0VCMTU0QjtcclxuICBjb2xvciAgICAgICAgOiAjRUIxNTRCO1xyXG4gIHRleHQtYWxpZ24gICA6IGNlbnRlcjtcclxuXHJcbn1cclxuLnJlcG9zdC1idG46aG92ZXJ7XHJcbiAgYmFja2dyb3VuZCAgIDogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5oNixzcGFuLHB7XHJcbiAgbWFyZ2luLXRvcCA6IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuaW1ne1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgaGVpZ2h0OjEwMHB4O1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBtYXJnaW46IDVweDtcclxuXHJcbiAgXHJcbn1cclxuLm5vLW9mLXZpZXdze1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBtYXJnaW46ICAwICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogIDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuI2Nyb3NzIHtcclxuICBjdXJzb3IgICAgOiBwb2ludGVyO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbiNjcm9zczpob3ZlciB7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLy8gLmV4aXQtYnRue1xyXG4vLyAgIHdpZHRoOiA3MCU7XHJcbi8vICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuLy8gICAvLyBtYXJnaW46IDEwcHg7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogIzIzZDVhYjtcclxuLy8gICBib3JkZXI6MXB4IHNvbGlkICNmZmY7XHJcbi8vICAgY29sb3I6ICNmZmY7XHJcbi8vIH1cclxuLmFkZHByb2R1Y3QtYnRuIHtcclxuICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kICAgOiAjMEQwRDBEO1xyXG4gIGJvcmRlciAgICAgICA6IDFweCBzb2xpZCAjZmZmO1xyXG4gIGNvbG9yICAgICAgICA6ICNmZmY7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZiAhaW1wb3J0YW50O1xyXG4gIC0tb2Zmc2V0LWJvdHRvbSA6IGF1dG8gIWltcG9ydGFudDtcclxuICAtLW92ZXJmbG93ICAgICAgOiBoaWRkZW47XHJcbiAgb3ZlcmZsb3cgICAgICAgIDogYXV0bztcclxuXHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi5jYXJkOmhvdmVyIHtcclxuICBjb2xvciAgICAgOiBibGFjaztcclxuICAvKiBGcm9tIGh0dHBzOi8vY3NzLmdsYXNzICovXHJcbi8qIEZyb20gaHR0cHM6Ly9jc3MuZ2xhc3MgKi9cclxuYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA0KTtcclxuYm9yZGVyLXJhZGl1czogMTZweDtcclxuYm94LXNoYWRvdzogMCA0cHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbmJhY2tkcm9wLWZpbHRlcjogYmx1cig0LjlweCk7XHJcbi13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDQuOXB4KTtcclxufVxyXG5cclxuLndlbGNvbWVjYXJke1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogIDhweCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6M3B4IDNweCAxNnB4IDRweCAjY2NjO1xyXG59Il19 */";

/***/ }),

/***/ 6067:
/*!************************************************************!*\
  !*** ./src/app/myproducts/myproducts.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<!------------ Header  ---------------->\r\n<ion-toolbar color=\"light\">\r\n  <ion-buttons slot=\"start\">\r\n    <ion-menu-button style=\"margin-top:15px;color:#121212\" autoHide=\"false\">\r\n      <svg width=\"34\" height=\"34\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n        <path d=\"M5 7H19\" stroke=\"#121212\" stroke-width=\"2\" stroke-linecap=\"round\" />\r\n        <path d=\"M5 12H15\" stroke=\"#121212\" stroke-width=\"2\" stroke-linecap=\"round\" />\r\n        <path d=\"M5 17H11\" stroke=\"#121212\" stroke-width=\"2\" stroke-linecap=\"round\" />\r\n      </svg>\r\n    </ion-menu-button>\r\n  </ion-buttons>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-4\">\r\n      <h5 style=\"color:#121212;margin-top:10px\"><b></b></h5>\r\n    </div>\r\n    <div class=\"col-8 mt-2 mx-2\" style=\"text-align: right;width: 90%;\">\r\n      <svg (click)=\"notification()\" style=\"margin:3px;\" width=\"26\" height=\"26\" viewBox=\"0 0 24 24\" fill=\"none\"\r\n        xmlns=\"http://www.w3.org/2000/svg\">\r\n        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n          d=\"M13.7942 3.29494C13.2296 3.10345 12.6258 3 12 3C9.1535 3 6.7622 5.14032 6.44786 7.96942L6.19605 10.2356L6.1896 10.2933C6.06065 11.417 5.69489 12.5005 5.11646 13.4725L5.08667 13.5222L4.50863 14.4856C3.98408 15.3599 3.7218 15.797 3.77842 16.1559C3.8161 16.3946 3.93899 16.6117 4.12435 16.7668C4.40292 17 4.9127 17 5.93224 17H18.0678C19.0873 17 19.5971 17 19.8757 16.7668C20.061 16.6117 20.1839 16.3946 20.2216 16.1559C20.2782 15.797 20.0159 15.3599 19.4914 14.4856L18.9134 13.5222L18.8836 13.4725C18.4273 12.7059 18.1034 11.8698 17.9236 10.9994C15.1974 10.9586 13 8.73592 13 6C13 5.00331 13.2916 4.07473 13.7942 3.29494ZM16.2741 4.98883C16.0999 5.28551 16 5.63109 16 6C16 6.94979 16.6621 7.74494 17.5499 7.94914C17.4205 6.82135 16.9608 5.80382 16.2741 4.98883Z\"\r\n          fill=\"black\" />\r\n        <path\r\n          d=\"M9 17C9 17.394 9.0776 17.7841 9.22836 18.1481C9.37913 18.512 9.6001 18.8427 9.87868 19.1213C10.1573 19.3999 10.488 19.6209 10.8519 19.7716C11.2159 19.9224 11.606 20 12 20C12.394 20 12.7841 19.9224 13.1481 19.7716C13.512 19.6209 13.8427 19.3999 14.1213 19.1213C14.3999 18.8427 14.6209 18.512 14.7716 18.1481C14.9224 17.7841 15 17.394 15 17L12 17H9Z\"\r\n          fill=\"black\" />\r\n        <circle cx=\"18\" cy=\"6\" r=\"2.5\" fill=\"#eb154b\" stroke=\"#eb154b\" />\r\n      </svg>\r\n\r\n    </div>\r\n  </div>\r\n</ion-toolbar>\r\n\r\n<ion-content [scrollEvents]=\"true\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-6\">\r\n        <svg (click)=\"exit()\" style=\"margin-left: 3%;margin:5px;cursor:pointer;color:#EB154B\" width=\"30\" height=\"30\"\r\n          viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n          <path\r\n            d=\"M5 12L4.29289 11.2929L3.58579 12L4.29289 12.7071L5 12ZM17 13C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11V13ZM8.29289 7.29289L4.29289 11.2929L5.70711 12.7071L9.70711 8.70711L8.29289 7.29289ZM4.29289 12.7071L8.29289 16.7071L9.70711 15.2929L5.70711 11.2929L4.29289 12.7071ZM5 13H17V11H5V13Z\"\r\n            fill=\"#EB154B\" />\r\n        </svg>\r\n\r\n      </div>\r\n      <div class=\"col-6 ion-text-right mt-1\">\r\n        <button (click)=\"navigateTo()\" class=\"btn btn-sm addproduct-btn \">+ Add Product</button>\r\n      </div>\r\n\r\n\r\n      <div class=\"col-10\">\r\n        <h2 style=\"color: #404040;\">\r\n\r\n          <b> My Products</b>\r\n        </h2>\r\n\r\n        <!------------ no products gif  --------------->\r\n        <div *ngIf=\"noProducts\" style=\"margin: auto !important;margin-top: 50%;\">\r\n          <img style=\"width:100%;height:100%;margin-left: 25px !important;\" src=\"assets/gif/empty.gif\" alt=\"\">\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n      <div class=\"col-2 mt-3\">\r\n\r\n        <svg (click)=\"searchPage()\" width=\"25\" height=\"25\" viewBox=\"0 0 24 24\" fill=\"none\">\r\n          <circle cx=\"11\" cy=\"11\" r=\"7\" stroke=\"#121212\" stroke-width=\"2\" />\r\n          <path\r\n            d=\"M11 8C10.606 8 10.2159 8.0776 9.85195 8.22836C9.48797 8.37913 9.15726 8.6001 8.87868 8.87868C8.6001 9.15726 8.37913 9.48797 8.22836 9.85195C8.0776 10.2159 8 10.606 8 11\"\r\n            stroke=\"#CCD2E3\" stroke-width=\"2\" stroke-linecap=\"round\" />\r\n          <path d=\"M20 20L17 17\" stroke=\"#121212\" stroke-width=\"2\" stroke-linecap=\"round\" />\r\n        </svg>\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n\r\n    <div *ngFor=\"let product of productlist\" class=\"welcomecard\"\r\n      style=\"box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px !important;border-radius: 5px; \">\r\n\r\n      <div style=\"cursor: pointer;\" class=\"row\">\r\n        <div class=\"col-5\" >\r\n          <img src=\"{{product.product_image}}\" alt=\"\">\r\n        </div>\r\n\r\n\r\n        <div class=\"col-7\">\r\n          <h6 style=\"margin-top: 5px !important;color:#393636\" (click)=\"editDetails(product.product_name)\">\r\n            <b>{{product.product_name}}</b></h6>\r\n\r\n          <p style=\"margin-top: -7px !important;\">Alarm set : &nbsp; {{product.product_count}}</p>\r\n\r\n          <h6 style=\"margin-top: -7px !important;\" (click)=\"editDetails(product.product_name)\">\r\n            Rs.{{product.cost}}/{{product.unit}}</h6>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-8\">\r\n              <button (click)=\"navigatetoaddoffer(product.product_name)\"\r\n                class=\"btn btn-sm btn-outline-danger repost-btn mb-3\"> + Add Offer</button>\r\n            </div>\r\n            <div class=\"col-4\">\r\n              <svg (click)=\"editDetails(product.product_name)\"  width=\"22\" height=\"20\" fill=\"currentColor\"\r\n                class=\"bi bi-pencil-square\" viewBox=\"0 0 16 16\">\r\n                <path\r\n                  d=\"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z\" />\r\n                <path fill-rule=\"evenodd\"\r\n                  d=\"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z\" />\r\n              </svg>\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_myproducts_myproducts_module_ts.js.map