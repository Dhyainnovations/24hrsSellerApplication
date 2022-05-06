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
    //Naviagtions
    notification() {
        this.router.navigate(['/notification']);
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

module.exports = ".myproduct-div {\n  background-color: var(--ion-color-light);\n  border: 1px solid #fff;\n  border-radius: 8px;\n  box-shadow: 2px 2px 2px 2px #ccc;\n  width: 96% !important;\n  margin: 5px;\n  box-shadow: 0 0 3px #ccc;\n  border: 1px solid var(--ion-color-light);\n}\n\nimg {\n  margin-left: 10px !important;\n  height: 80px;\n  width: 95px;\n}\n\nspan {\n  font-size: smaller;\n}\n\n.repost-btn {\n  color: var(--ion-color-primary);\n  text-align: center;\n}\n\n.repost-btn:hover {\n  background: none !important;\n}\n\nh6, span, p {\n  margin-top: 0;\n  padding: 0 !important;\n  margin: 5px !important;\n}\n\nimg {\n  border-radius: 10px;\n  height: 100px;\n  width: 100px;\n  margin: 5px;\n}\n\n.no-of-views {\n  font-size: 12px;\n  margin: 0 !important;\n  padding: 0 !important;\n}\n\n#cross {\n  cursor: pointer;\n  margin-top: 20px;\n}\n\n#cross:hover {\n  color: var(--ion-color-primary);\n}\n\n.addproduct-btn {\n  border-radius: 5px !important;\n  background: var(--ion-color-secondary);\n  border: 1px solid #fff;\n  color: var(--ion-color-light);\n}\n\nion-content {\n  background-color: var(--ion-color-light) !important;\n  --offset-bottom: auto !important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n\n.card:hover {\n  color: var(--ion-color-secondary);\n  /* From https://css.glass */\n  /* From https://css.glass */\n  background: rgba(0, 0, 0, 0.04);\n  border-radius: 16px;\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n  backdrop-filter: blur(4.9px);\n  -webkit-backdrop-filter: blur(4.9px);\n}\n\n.welcomecard {\n  background-color: var(--ion-color-light);\n  width: 100%;\n  margin: auto !important;\n  margin-bottom: 8px !important;\n  border-radius: 4px !important;\n  box-shadow: 3px 3px 16px 4px #ccc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15cHJvZHVjdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0NBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFHQSx3QkFBQTtFQUNBLHdDQUFBO0FBQ0Y7O0FBR0E7RUFDRSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQUY7O0FBSUE7RUFDRSxrQkFBQTtBQURGOztBQVVBO0VBRUUsK0JBQUE7RUFDQSxrQkFBQTtBQVJGOztBQVdBO0VBQ0UsMkJBQUE7QUFSRjs7QUFXQTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FBUkY7O0FBV0E7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQVJGOztBQVdBO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7QUFSRjs7QUFXQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQVJGOztBQVdBO0VBQ0UsK0JBQUE7QUFSRjs7QUFtQkE7RUFDRSw2QkFBQTtFQUNBLHNDQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtBQWhCRjs7QUFtQkE7RUFDRSxtREFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBaEJGOztBQWtCRTtFQUNFLGFBQUE7QUFoQko7O0FBb0JBO0VBQ0UsaUNBQUE7RUFDQSwyQkFBQTtFQUNGLDJCQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlDQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQ0FBQTtBQWpCQTs7QUFvQkE7RUFDRSx3Q0FBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQ0FBQTtBQWpCRiIsImZpbGUiOiJteXByb2R1Y3RzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teXByb2R1Y3QtZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvciAgOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBib3JkZXIgICAgICAgICAgICA6IDFweCBzb2xpZCAjZmZmO1xuICBib3JkZXItcmFkaXVzICAgICA6IDhweDtcbiAgYm94LXNoYWRvdyAgICAgICAgOiAycHggMnB4IDJweCAycHggI2NjYztcbiAgd2lkdGggICAgICAgICAgICAgOiA5NiUgIWltcG9ydGFudDtcbiAgbWFyZ2luICAgICAgICAgICAgOiA1cHg7XG4gIC1tb3otYm94LXNoYWRvdyAgIDogMCAwIDNweCAjY2NjO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAzcHggI2NjYztcbiAgYm94LXNoYWRvdyAgICAgICAgOiAwIDAgM3B4ICNjY2M7XG4gIGJvcmRlciAgICAgICAgICAgIDogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCk7XG5cbn1cblxuaW1nIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0ICAgICA6IDgwcHg7XG4gIHdpZHRoICAgICAgOiA5NXB4O1xufVxuXG5cbnNwYW4ge1xuICBmb250LXNpemU6IHNtYWxsZXI7XG59XG5cbi8vIC5wcmljZSB7XG4vLyAgIG1hcmdpbi10b3A6IDEzcHggIWltcG9ydGFudDtcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4vLyB9XG5cbi5yZXBvc3QtYnRuIHtcbiAgLy8gYmFja2dyb3VuZCAgIDogI0VCMTU0QjtcbiAgY29sb3IgICAgICAgIDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB0ZXh0LWFsaWduICAgOiBjZW50ZXI7XG5cbn1cbi5yZXBvc3QtYnRuOmhvdmVye1xuICBiYWNrZ3JvdW5kICAgOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmg2LHNwYW4scHtcbiAgbWFyZ2luLXRvcCA6IDA7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luOiA1cHggIWltcG9ydGFudDtcbn1cblxuaW1ne1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBoZWlnaHQ6MTAwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luOiA1cHg7IFxufVxuXG4ubm8tb2Ytdmlld3N7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luOiAgMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAgMCAhaW1wb3J0YW50O1xufVxuXG4jY3Jvc3Mge1xuICBjdXJzb3IgICAgOiBwb2ludGVyO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4jY3Jvc3M6aG92ZXIge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4vLyAuZXhpdC1idG57XG4vLyAgIHdpZHRoOiA3MCU7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4vLyAgIC8vIG1hcmdpbjogMTBweDtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogIzIzZDVhYjtcbi8vICAgYm9yZGVyOjFweCBzb2xpZCAjZmZmO1xuLy8gICBjb2xvcjogI2ZmZjtcbi8vIH1cbi5hZGRwcm9kdWN0LWJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kICAgOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgYm9yZGVyICAgICAgIDogMXB4IHNvbGlkICNmZmY7XG4gIGNvbG9yICAgICAgICA6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KSFpbXBvcnRhbnQ7XG4gIC0tb2Zmc2V0LWJvdHRvbSA6IGF1dG8gIWltcG9ydGFudDtcbiAgLS1vdmVyZmxvdyAgICAgIDogaGlkZGVuO1xuICBvdmVyZmxvdyAgICAgICAgOiBhdXRvO1xuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi5jYXJkOmhvdmVyIHtcbiAgY29sb3IgICAgIDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIC8qIEZyb20gaHR0cHM6Ly9jc3MuZ2xhc3MgKi9cbi8qIEZyb20gaHR0cHM6Ly9jc3MuZ2xhc3MgKi9cbmJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG5ib3JkZXItcmFkaXVzOiAxNnB4O1xuYm94LXNoYWRvdzogMCA0cHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG5iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNC45cHgpO1xuLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNC45cHgpO1xufVxuXG4ud2VsY29tZWNhcmR7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IGF1dG8gIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogIDhweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzozcHggM3B4IDE2cHggNHB4ICNjY2M7XG59Il19 */";

/***/ }),

/***/ 6067:
/*!************************************************************!*\
  !*** ./src/app/myproducts/myproducts.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<!------------ Header  ---------------->\n<ion-toolbar color=\"light\">\n  <ion-buttons slot=\"start\">\n    <ion-menu-button style=\"margin-top:15px;color:#121212\" autoHide=\"false\">\n      <svg width=\"34\" height=\"34\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M5 7H19\" stroke=\"#121212\" stroke-width=\"2\" stroke-linecap=\"round\" />\n        <path d=\"M5 12H15\" stroke=\"#121212\" stroke-width=\"2\" stroke-linecap=\"round\" />\n        <path d=\"M5 17H11\" stroke=\"#121212\" stroke-width=\"2\" stroke-linecap=\"round\" />\n      </svg>\n    </ion-menu-button>\n  </ion-buttons>\n\n  <div class=\"row\">\n    <div class=\"col-4\">\n      <h5 style=\"margin-top:10px\"><b></b></h5>\n    </div>\n    <div class=\"col-8 mt-2 mx-4\" style=\"text-align: right;width: 90%;\">\n      <svg (click)=\"notification()\" style=\"margin:3px;\" width=\"26\" height=\"26\" viewBox=\"0 0 24 24\" fill=\"none\"\n        xmlns=\"http://www.w3.org/2000/svg\">\n        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\n          d=\"M13.7942 3.29494C13.2296 3.10345 12.6258 3 12 3C9.1535 3 6.7622 5.14032 6.44786 7.96942L6.19605 10.2356L6.1896 10.2933C6.06065 11.417 5.69489 12.5005 5.11646 13.4725L5.08667 13.5222L4.50863 14.4856C3.98408 15.3599 3.7218 15.797 3.77842 16.1559C3.8161 16.3946 3.93899 16.6117 4.12435 16.7668C4.40292 17 4.9127 17 5.93224 17H18.0678C19.0873 17 19.5971 17 19.8757 16.7668C20.061 16.6117 20.1839 16.3946 20.2216 16.1559C20.2782 15.797 20.0159 15.3599 19.4914 14.4856L18.9134 13.5222L18.8836 13.4725C18.4273 12.7059 18.1034 11.8698 17.9236 10.9994C15.1974 10.9586 13 8.73592 13 6C13 5.00331 13.2916 4.07473 13.7942 3.29494ZM16.2741 4.98883C16.0999 5.28551 16 5.63109 16 6C16 6.94979 16.6621 7.74494 17.5499 7.94914C17.4205 6.82135 16.9608 5.80382 16.2741 4.98883Z\"\n          fill=\"black\" />\n        <path\n          d=\"M9 17C9 17.394 9.0776 17.7841 9.22836 18.1481C9.37913 18.512 9.6001 18.8427 9.87868 19.1213C10.1573 19.3999 10.488 19.6209 10.8519 19.7716C11.2159 19.9224 11.606 20 12 20C12.394 20 12.7841 19.9224 13.1481 19.7716C13.512 19.6209 13.8427 19.3999 14.1213 19.1213C14.3999 18.8427 14.6209 18.512 14.7716 18.1481C14.9224 17.7841 15 17.394 15 17L12 17H9Z\"\n          fill=\"black\" />\n        <circle cx=\"18\" cy=\"6\" r=\"2.5\" fill=\"#eb154b\" stroke=\"#eb154b\" />\n      </svg>\n\n    </div>\n  </div>\n</ion-toolbar>\n\n<ion-content [scrollEvents]=\"true\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-6\">\n        <svg (click)=\"exit()\" style=\"margin-left: 3%;margin:5px;cursor:pointer;color:#EB154B\" width=\"30\" height=\"30\"\n          viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path\n            d=\"M5 12L4.29289 11.2929L3.58579 12L4.29289 12.7071L5 12ZM17 13C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11V13ZM8.29289 7.29289L4.29289 11.2929L5.70711 12.7071L9.70711 8.70711L8.29289 7.29289ZM4.29289 12.7071L8.29289 16.7071L9.70711 15.2929L5.70711 11.2929L4.29289 12.7071ZM5 13H17V11H5V13Z\"\n            fill=\"#EB154B\" />\n        </svg>\n\n      </div>\n      <div class=\"col-6 ion-text-right mt-1\">\n        <ion-button (click)=\"navigateTo()\"  style=\"width: 80%;\"  class=\"secondarySmallOutlineBtn mx-3\" color=\"none\" >\n          + Add Product </ion-button>\n      </div>\n\n\n      <div class=\"col-10\">\n        <h2 class=\"title\">\n\n          <b> My Products</b>\n        </h2>\n\n        <!------------ no products gif  --------------->\n        <div *ngIf=\"noProducts\" style=\"margin: auto !important;margin-top: 50%;\">\n          <img style=\"width:100%;height:100%;margin-left: 25px !important;\" src=\"assets/gif/empty.gif\" alt=\"\">\n        </div>\n        \n\n      </div>\n\n\n      <div class=\"col-2 mt-3\">\n\n        <svg (click)=\"searchPage()\" width=\"25\" height=\"25\" viewBox=\"0 0 24 24\" fill=\"none\">\n          <circle cx=\"11\" cy=\"11\" r=\"7\" stroke=\"#121212\" stroke-width=\"2\" />\n          <path\n            d=\"M11 8C10.606 8 10.2159 8.0776 9.85195 8.22836C9.48797 8.37913 9.15726 8.6001 8.87868 8.87868C8.6001 9.15726 8.37913 9.48797 8.22836 9.85195C8.0776 10.2159 8 10.606 8 11\"\n            stroke=\"#CCD2E3\" stroke-width=\"2\" stroke-linecap=\"round\" />\n          <path d=\"M20 20L17 17\" stroke=\"#121212\" stroke-width=\"2\" stroke-linecap=\"round\" />\n        </svg>\n      </div>\n\n    </div>\n\n\n\n    <div *ngFor=\"let product of productlist\" class=\"welcomecard\"\n      style=\"box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px !important;border-radius: 5px; \">\n\n      <div style=\"cursor: pointer;\" class=\"row\">\n        <div class=\"col-5 mt-2\" >\n          <img src=\"{{product.product_image}}\" alt=\"\">\n        </div>\n\n\n        <div class=\"col-7 pt-3\">\n          <h6 class=\"productName\" (click)=\"editDetails(product.product_name)\">\n            <b> Product : </b> <span style=\"font-size: 16px;\" >{{product.product_name}}</span> </h6> \n\n          <p style=\"margin-top: -7px !important;\">Alarm set : &nbsp; {{product.product_count}}</p>\n\n          <h6 style=\"margin-top: -7px !important;\" (click)=\"editDetails(product.product_name)\">\n            Rs.{{product.cost}}/{{product.unit}}</h6>\n\n          <div class=\"row\">\n            <div class=\"col-8\">\n                <ion-button (click)=\"navigatetoaddoffer(product.product_name)\" style=\"width: 80%;\"  class=\"primarySmallOutlineBtn\" color=\"none\" >\n                  + Add Offer </ion-button>\n            </div>\n            <div class=\"col-4 mt-2\">\n              <svg (click)=\"editDetails(product.product_name)\"  width=\"22\" height=\"20\" fill=\"currentColor\"\n                class=\"bi bi-pencil-square\" viewBox=\"0 0 16 16\">\n                <path\n                  d=\"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z\" />\n                <path fill-rule=\"evenodd\"\n                  d=\"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z\" />\n              </svg>\n            </div>\n          </div>\n\n\n        </div>\n\n      </div>\n    </div>\n\n\n  </div>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_myproducts_myproducts_module_ts.js.map