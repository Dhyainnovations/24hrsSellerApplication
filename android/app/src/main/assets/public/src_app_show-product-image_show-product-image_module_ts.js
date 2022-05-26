"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_show-product-image_show-product-image_module_ts"],{

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

/***/ 3732:
/*!*************************************************************************!*\
  !*** ./src/app/show-product-image/show-product-image-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowProductImagePageRoutingModule": () => (/* binding */ ShowProductImagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _show_product_image_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show-product-image.page */ 390);




const routes = [
    {
        path: '',
        component: _show_product_image_page__WEBPACK_IMPORTED_MODULE_0__.ShowProductImagePage
    }
];
let ShowProductImagePageRoutingModule = class ShowProductImagePageRoutingModule {
};
ShowProductImagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ShowProductImagePageRoutingModule);



/***/ }),

/***/ 3752:
/*!*****************************************************************!*\
  !*** ./src/app/show-product-image/show-product-image.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowProductImagePageModule": () => (/* binding */ ShowProductImagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _show_product_image_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show-product-image-routing.module */ 3732);
/* harmony import */ var _show_product_image_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show-product-image.page */ 390);







let ShowProductImagePageModule = class ShowProductImagePageModule {
};
ShowProductImagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _show_product_image_routing_module__WEBPACK_IMPORTED_MODULE_0__.ShowProductImagePageRoutingModule
        ],
        declarations: [_show_product_image_page__WEBPACK_IMPORTED_MODULE_1__.ShowProductImagePage]
    })
], ShowProductImagePageModule);



/***/ }),

/***/ 390:
/*!***************************************************************!*\
  !*** ./src/app/show-product-image/show-product-image.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowProductImagePage": () => (/* binding */ ShowProductImagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _show_product_image_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show-product-image.page.html?ngResource */ 740);
/* harmony import */ var _show_product_image_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show-product-image.page.scss?ngResource */ 3762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/http.service */ 8191);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);








let ShowProductImagePage = class ShowProductImagePage {
    constructor(router, http, toastCtrl, route) {
        this.router = router;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.route = route;
        this.route.queryParams.subscribe(queryParams => {
            this.productImage = queryParams['productname'];
        });
    }
    ngOnInit() {
        this.getProductImage();
    }
    BackToPrevious() {
        this.router.navigate(['/tabs/tab3']);
    }
    notification() {
        this.router.navigate(['/notification']);
    }
    getProductImage() {
        this.productImageList = [];
        var obj = {
            subcategory_id: this.productImage
        };
        this.http.post('/product_image_list', obj).subscribe((response) => {
            console.log(response.records);
            this.noImage = false;
            this.productImageList = response.records;
        }, (error) => {
            console.log(error);
            this.noImage = true;
        });
    }
    SelectImage(data) {
        console.log(data);
        var slicedUrl = data.replace("https://dhya.in/24Hrs/images/seller/product/", "");
        console.log(slicedUrl);
        this.router.navigate(['/tabs/tab3'], { queryParams: { selectedProductImageTbid: slicedUrl } });
    }
};
ShowProductImagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _shared_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute }
];
ShowProductImagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-show-product-image',
        template: _show_product_image_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_show_product_image_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ShowProductImagePage);



/***/ }),

/***/ 3762:
/*!****************************************************************************!*\
  !*** ./src/app/show-product-image/show-product-image.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "#productCard {\n  border: 1px solid var(--ion-color-light);\n  box-shadow: 3px 3px 16px 4px #ccc;\n  width: 100%;\n  height: 100%;\n  background-color: var(--ion-color-light) !important;\n  border-radius: 8px;\n  margin: 5px !important;\n  margin-left: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3ctcHJvZHVjdC1pbWFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtREFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBQUNKIiwiZmlsZSI6InNob3ctcHJvZHVjdC1pbWFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcHJvZHVjdENhcmR7XG4gICAgYm9yZGVyOjFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIGJveC1zaGFkb3c6M3B4IDNweCAxNnB4IDRweCAjY2NjO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDoxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCkgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgbWFyZ2luOiA1cHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogIDAgIWltcG9ydGFudDtcbiAgfSJdfQ== */";

/***/ }),

/***/ 740:
/*!****************************************************************************!*\
  !*** ./src/app/show-product-image/show-product-image.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "\n\n<ion-content>\n\n  <!--------------- Live offer card ------------------>\n  <div class=\"container mt-5\">\n  \n    <div class=\"row\">\n      <div class=\"col-2\">\n        <svg (click)=\"BackToPrevious()\" style=\"cursor:pointer;color:#EB154B\" width=\"30\" height=\"30\"\n        viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path\n          d=\"M5 12L4.29289 11.2929L3.58579 12L4.29289 12.7071L5 12ZM17 13C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11V13ZM8.29289 7.29289L4.29289 11.2929L5.70711 12.7071L9.70711 8.70711L8.29289 7.29289ZM4.29289 12.7071L8.29289 16.7071L9.70711 15.2929L5.70711 11.2929L4.29289 12.7071ZM5 13H17V11H5V13Z\"\n          fill=\"#EB154B\" />\n      </svg>\n      </div>\n      <div class=\"col-10 mt-1\">\n        <p class=\"ion-text-left\">  Pleae Select a Picture</p>\n      </div>\n      <div *ngIf=\"noImage\" style=\"margin: auto !important;margin-top: 50%;\">\n        <img style=\"width:100%;height:100%;\" src=\"assets/gif/empty.gif\" alt=\"\">\n      </div>\n    </div>\n    <div class=\"row mb-2\">\n      <div *ngFor=\"let item of productImageList\" class=\"col-6 ion-text-center\">\n        <img src=\"{{item.image}}\" alt=\"\"   id=\"productCard\" (click)=\"SelectImage(item.image)\">\n      </div>\n\n    </div>\n  </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_show-product-image_show-product-image_module_ts.js.map