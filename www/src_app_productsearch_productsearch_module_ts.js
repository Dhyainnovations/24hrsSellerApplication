"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_productsearch_productsearch_module_ts"],{

/***/ 4606:
/*!***************************************************************!*\
  !*** ./src/app/productsearch/productsearch-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsearchPageRoutingModule": () => (/* binding */ ProductsearchPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _productsearch_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productsearch.page */ 4525);




const routes = [
    {
        path: '',
        component: _productsearch_page__WEBPACK_IMPORTED_MODULE_0__.ProductsearchPage
    }
];
let ProductsearchPageRoutingModule = class ProductsearchPageRoutingModule {
};
ProductsearchPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProductsearchPageRoutingModule);



/***/ }),

/***/ 2170:
/*!*******************************************************!*\
  !*** ./src/app/productsearch/productsearch.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsearchPageModule": () => (/* binding */ ProductsearchPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _productsearch_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productsearch-routing.module */ 4606);
/* harmony import */ var _productsearch_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productsearch.page */ 4525);







let ProductsearchPageModule = class ProductsearchPageModule {
};
ProductsearchPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _productsearch_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductsearchPageRoutingModule
        ],
        declarations: [_productsearch_page__WEBPACK_IMPORTED_MODULE_1__.ProductsearchPage]
    })
], ProductsearchPageModule);



/***/ }),

/***/ 4525:
/*!*****************************************************!*\
  !*** ./src/app/productsearch/productsearch.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsearchPage": () => (/* binding */ ProductsearchPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _productsearch_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productsearch.page.html?ngResource */ 8236);
/* harmony import */ var _productsearch_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productsearch.page.scss?ngResource */ 4992);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/http.service */ 8191);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);








let ProductsearchPage = class ProductsearchPage {
    constructor(router, http, toastCtrl, route) {
        this.router = router;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.ShowProducts = [];
        this.productShowname = true;
        this.productImage = "";
        this.productname = "";
        this.productdescription = "";
        this.cost = "";
        this.unit = "";
        this.tbid = "";
    }
    ngOnInit() {
    }
    searchProduct() {
        this.productShowname = true;
        this.productShowDetail = false;
        var s = this.productName;
        this.ShowProducts = [];
        this.http.get('/search_product?s=' + s).subscribe((response) => {
            for (var i = 0; i <= response.records.length; i++) {
                console.log(response.records[i].product_name);
                this.ShowProducts.push(response.records[i].product_name);
            }
        }, (error) => {
            console.log(error);
        });
    }
    clearData() {
        this.productName = " ";
    }
    //Naviagtions
    notification() {
        this.router.navigate(['/notification']);
    }
    productDetail(data) {
        console.log(data);
        var s = data;
        var product_name;
        this.http.get('/search_product?s=' + s).subscribe((response) => {
            this.productShowname = false;
            this.productShowDetail = true;
            console.log(response);
            this.productImage = response.records[0].product_image;
            this.productname = response.records[0].product_name;
            this.productdescription = response.records[0].description;
            this.cost = response.records[0].cost;
            this.unit = response.records[0].unit;
            this.storeName = response.records[0].store_name;
        }, (error) => {
            console.log(error);
        });
    }
    RedirectToOneProduct() {
        const p = this.productname;
        console.log(p);
        this.http.get('/read_one_product?p=' + p).subscribe((response) => {
            this.displayReadData = response.records.tbid;
            this.showReadData = response.records.product_name;
            this.router.navigate(['/myproductEditPage'], { queryParams: { tbid: this.displayReadData, product_name: this.showReadData } });
            this.productName = "";
            this.productShowDetail = false;
        }, (error) => {
            console.log(error);
        });
    }
    backToHome() {
        this.productShowDetail = false;
        this.router.navigate(['/myproducts']);
    }
};
ProductsearchPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _shared_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute }
];
ProductsearchPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-productsearch',
        template: _productsearch_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_productsearch_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProductsearchPage);



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

/***/ 4992:
/*!******************************************************************!*\
  !*** ./src/app/productsearch/productsearch.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = ".product-name, .price {\n  padding: 0;\n  margin: 0;\n}\n\nimg {\n  height: 70px;\n  width: 70px;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RzZWFyY2gucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFDQTs7QUFFQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFDQSIsImZpbGUiOiJwcm9kdWN0c2VhcmNoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0LW5hbWUsLnByaWNle1xucGFkZGluZzogMDtcbm1hcmdpbjogMDtcbn1cblxuaW1ne1xuaGVpZ2h0OjcwcHg7XG53aWR0aDogNzBweDtcbmJvcmRlci1yYWRpdXM6IDRweDtcbn0iXX0= */";

/***/ }),

/***/ 8236:
/*!******************************************************************!*\
  !*** ./src/app/productsearch/productsearch.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<!------------ Header  ---------------->\n<ion-toolbar color=\"light\">\n  <ion-buttons slot=\"start\">\n    <ion-menu-button style=\"margin-top:15px;\" autoHide=\"false\">\n      <svg width=\"34\" height=\"34\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M5 7H19\" stroke=\"#121212\" stroke-width=\"2\" stroke-linecap=\"round\" />\n        <path d=\"M5 12H15\" stroke=\"#121212\" stroke-width=\"2\" stroke-linecap=\"round\" />\n        <path d=\"M5 17H11\" stroke=\"#121212\" stroke-width=\"2\" stroke-linecap=\"round\" />\n      </svg>\n    </ion-menu-button>\n  </ion-buttons>\n\n  <div class=\"row\">\n    <div class=\"col-4\">\n      <h5 style=\"margin-top:10px\"><b></b></h5>\n    </div>\n    <div class=\"col-8 mt-2 mx-2\" style=\"text-align: right;width: 90%;\">\n      <svg (click)=\"notification()\" style=\"margin:3px;\" width=\"26\" height=\"26\" viewBox=\"0 0 24 24\" fill=\"none\"\n        xmlns=\"http://www.w3.org/2000/svg\">\n        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\n          d=\"M13.7942 3.29494C13.2296 3.10345 12.6258 3 12 3C9.1535 3 6.7622 5.14032 6.44786 7.96942L6.19605 10.2356L6.1896 10.2933C6.06065 11.417 5.69489 12.5005 5.11646 13.4725L5.08667 13.5222L4.50863 14.4856C3.98408 15.3599 3.7218 15.797 3.77842 16.1559C3.8161 16.3946 3.93899 16.6117 4.12435 16.7668C4.40292 17 4.9127 17 5.93224 17H18.0678C19.0873 17 19.5971 17 19.8757 16.7668C20.061 16.6117 20.1839 16.3946 20.2216 16.1559C20.2782 15.797 20.0159 15.3599 19.4914 14.4856L18.9134 13.5222L18.8836 13.4725C18.4273 12.7059 18.1034 11.8698 17.9236 10.9994C15.1974 10.9586 13 8.73592 13 6C13 5.00331 13.2916 4.07473 13.7942 3.29494ZM16.2741 4.98883C16.0999 5.28551 16 5.63109 16 6C16 6.94979 16.6621 7.74494 17.5499 7.94914C17.4205 6.82135 16.9608 5.80382 16.2741 4.98883Z\"\n          fill=\"black\" />\n        <path\n          d=\"M9 17C9 17.394 9.0776 17.7841 9.22836 18.1481C9.37913 18.512 9.6001 18.8427 9.87868 19.1213C10.1573 19.3999 10.488 19.6209 10.8519 19.7716C11.2159 19.9224 11.606 20 12 20C12.394 20 12.7841 19.9224 13.1481 19.7716C13.512 19.6209 13.8427 19.3999 14.1213 19.1213C14.3999 18.8427 14.6209 18.512 14.7716 18.1481C14.9224 17.7841 15 17.394 15 17L12 17H9Z\"\n          fill=\"black\" />\n        <circle cx=\"18\" cy=\"6\" r=\"2.5\" fill=\"#eb154b\" stroke=\"#eb154b\" />\n      </svg>\n\n\n    </div>\n  </div>\n</ion-toolbar>\n\n<ion-content>\n\n  <div class=\"row\">\n    <div class=\"col-12 mt-4 mx-3\">\n      <div class=\"row height \">\n        <div class=\"col-12 ion-text-center\">\n          <div class=\"search\"> <i class=\"fa fa-search\"></i>\n\n            <input (keydown)=\"searchProduct()\" [(ngModel)]=\"productName\" type=\"text\" class=\"form-control\"\n              placeholder=\"Search\">\n            <button>\n              <svg (click)=\"clearData()\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\">\n                <circle cx=\"12\" cy=\"12\" r=\"9\" fill=\"#7E869E\" fill-opacity=\"0.25\" />\n                <path d=\"M16 8L8 16\" stroke=\"white\" stroke-width=\"1.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n                <path d=\"M8 8L16 16\" stroke=\"white\" stroke-width=\"1.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n              </svg>\n\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <!-- <ion-searchbar (keyup)=\"searchProduct()\" [(ngModel)]=\"productName\"></ion-searchbar> -->\n  <div *ngFor=\"let product of ShowProducts\" >\n    <div style=\"padding: 10px;\"  (click)=\"productDetail(product)\" *ngIf=\"productShowname\">\n      <ion-item>{{product}}</ion-item>\n    </div>\n  </div>\n\n\n  <div class=\"p-2\" *ngIf=\"productShowDetail\" (click)=\"RedirectToOneProduct()\">\n    <div class=\"card p-3\"\n      style=\"box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px !important;border-radius: 5px;\">\n      \n      <div style=\"cursor: pointer;\"  class=\"row\">\n        <div class=\"col-5\">\n          <img src=\"{{productImage}}\" alt=\"\"\n            >\n        </div>\n    \n        <div class=\"col-7 small\">\n          <h4 class=\"product-name\"><b>{{storeName}}</b></h4>\n          <p class=\"product-name\"><b>Product : {{productname}}</b></p>\n          <p class=\"price\">Price : Rs.{{cost}}/{{unit}}</p>\n        </div>\n        \n      </div>\n    </div>\n  </div>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_productsearch_productsearch_module_ts.js.map