"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_offersearch_offersearch_module_ts"],{

/***/ 7869:
/*!***********************************************************!*\
  !*** ./src/app/offersearch/offersearch-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OffersearchPageRoutingModule": () => (/* binding */ OffersearchPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _offersearch_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./offersearch.page */ 4944);




const routes = [
    {
        path: '',
        component: _offersearch_page__WEBPACK_IMPORTED_MODULE_0__.OffersearchPage
    }
];
let OffersearchPageRoutingModule = class OffersearchPageRoutingModule {
};
OffersearchPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OffersearchPageRoutingModule);



/***/ }),

/***/ 7506:
/*!***************************************************!*\
  !*** ./src/app/offersearch/offersearch.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OffersearchPageModule": () => (/* binding */ OffersearchPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _offersearch_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./offersearch-routing.module */ 7869);
/* harmony import */ var _offersearch_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./offersearch.page */ 4944);







let OffersearchPageModule = class OffersearchPageModule {
};
OffersearchPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _offersearch_routing_module__WEBPACK_IMPORTED_MODULE_0__.OffersearchPageRoutingModule
        ],
        declarations: [_offersearch_page__WEBPACK_IMPORTED_MODULE_1__.OffersearchPage]
    })
], OffersearchPageModule);



/***/ }),

/***/ 4944:
/*!*************************************************!*\
  !*** ./src/app/offersearch/offersearch.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OffersearchPage": () => (/* binding */ OffersearchPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _offersearch_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./offersearch.page.html?ngResource */ 4966);
/* harmony import */ var _offersearch_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./offersearch.page.scss?ngResource */ 4685);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/http.service */ 8191);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);








let OffersearchPage = class OffersearchPage {
    constructor(router, http, toastCtrl, route) {
        this.router = router;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.ShowOffers = [];
        this.OfferShowname = false;
        this.OfferShowDetail = false;
        this.productImage = "";
        this.productname = "";
        this.productdescription = "";
        this.cost = "";
        this.unit = "";
        this.tbid = "";
        this.OtherOfferShowDetail = false;
    }
    ngOnInit() {
    }
    searchOffer(offerName) {
        console.log(offerName);
        this.OfferShowname = true;
        this.OfferShowDetail = false;
        this.OtherOfferShowDetail = false;
        var s = this.offerName;
        this.ShowOffers = [];
        this.http.get('/search_offer?s=' + s).subscribe((response) => {
            this.ShowOffers = [];
            for (var i = 0; i <= response.records.length; i++) {
                console.log(response.records[i].product);
                this.ShowOffers.push(response.records[i].product);
            }
        }, (error) => {
            console.log(error);
        });
    }
    clearData() {
        this.offerName = " ";
    }
    //Naviagtions
    notification() {
        this.router.navigate(['/notification']);
    }
    offerDetail(data) {
        console.log(data);
        var s = data;
        this.http.get('/search_offer?s=' + s).subscribe((response) => {
            this.OfferShowname = false;
            console.log(response);
            if (response.records[0].offer != "") {
                this.IfOfferPresent = true;
                this.IfNotOfferPresent = false;
            }
            else {
                this.IfOfferPresent = false;
                this.IfNotOfferPresent = true;
            }
            this.OtherOfferShowDetail = false;
            this.OfferShowDetail = true;
            this.productImage = response.records[0].product_image;
            this.productname = response.records[0].product;
            this.productdescription = response.records[0].description;
            this.cost = response.records[0].total_cost;
            this.unit = response.records[0].product_unit;
            this.offer = response.records[0].offer;
            this.offertime = response.records[0].offer_time;
            this.totalcost = response.records[0].total_cost;
            this.offerprice = response.records[0].offer_price;
            this.offertbid = response.records[0].tbid;
            this.otherOffer = response.records[0].other_offer;
        }, (error) => {
            console.log(error);
        });
    }
    redirecttoOffer() {
        this.router.navigate(['/addofferEditPage'], { queryParams: { tbid: this.productname } });
        console.log(this.productname);
    }
    backToHome() {
        this.router.navigate(['/tabs/tab4']);
    }
};
OffersearchPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _shared_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute }
];
OffersearchPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-offersearch',
        template: _offersearch_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_offersearch_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], OffersearchPage);



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

/***/ 4685:
/*!**************************************************************!*\
  !*** ./src/app/offersearch/offersearch.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "img {\n  height: 100px;\n  width: 100px;\n  margin: 5px;\n}\n\np {\n  margin: 0 !important;\n  padding: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9mZmVyc2VhcmNoLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQURBOztBQUlBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtBQURBIiwiZmlsZSI6Im9mZmVyc2VhcmNoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ3tcclxuXHJcblxyXG5oZWlnaHQ6MTAwcHg7XHJcbndpZHRoOiAxMDBweDtcclxubWFyZ2luOiA1cHg7XHJcbn1cclxuXHJcbnB7XHJcbm1hcmdpbjogIDAgIWltcG9ydGFudDtcclxucGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG59Il19 */";

/***/ }),

/***/ 4966:
/*!**************************************************************!*\
  !*** ./src/app/offersearch/offersearch.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<!------------ Header  ---------------->\r\n<ion-toolbar color=\"light\">\r\n  <ion-buttons slot=\"start\">\r\n    <ion-menu-button style=\"margin-top:15px;color:#121212\" autoHide=\"false\">\r\n      <svg width=\"34\" height=\"34\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n        <path d=\"M5 7H19\" stroke=\"#121212\" stroke-width=\"2\" stroke-linecap=\"round\" />\r\n        <path d=\"M5 12H15\" stroke=\"#121212\" stroke-width=\"2\" stroke-linecap=\"round\" />\r\n        <path d=\"M5 17H11\" stroke=\"#121212\" stroke-width=\"2\" stroke-linecap=\"round\" />\r\n      </svg>\r\n    </ion-menu-button>\r\n  </ion-buttons>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-4\">\r\n      <h5 style=\"color:#121212;margin-top:10px\"><b></b></h5>\r\n    </div>\r\n    <div class=\"col-8 mt-2 mx-2\" style=\"text-align: right;width: 90%;\">\r\n      <svg (click)=\"notification()\" style=\"margin:3px;\" width=\"26\" height=\"26\" viewBox=\"0 0 24 24\" fill=\"none\"\r\n        xmlns=\"http://www.w3.org/2000/svg\">\r\n        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n          d=\"M13.7942 3.29494C13.2296 3.10345 12.6258 3 12 3C9.1535 3 6.7622 5.14032 6.44786 7.96942L6.19605 10.2356L6.1896 10.2933C6.06065 11.417 5.69489 12.5005 5.11646 13.4725L5.08667 13.5222L4.50863 14.4856C3.98408 15.3599 3.7218 15.797 3.77842 16.1559C3.8161 16.3946 3.93899 16.6117 4.12435 16.7668C4.40292 17 4.9127 17 5.93224 17H18.0678C19.0873 17 19.5971 17 19.8757 16.7668C20.061 16.6117 20.1839 16.3946 20.2216 16.1559C20.2782 15.797 20.0159 15.3599 19.4914 14.4856L18.9134 13.5222L18.8836 13.4725C18.4273 12.7059 18.1034 11.8698 17.9236 10.9994C15.1974 10.9586 13 8.73592 13 6C13 5.00331 13.2916 4.07473 13.7942 3.29494ZM16.2741 4.98883C16.0999 5.28551 16 5.63109 16 6C16 6.94979 16.6621 7.74494 17.5499 7.94914C17.4205 6.82135 16.9608 5.80382 16.2741 4.98883Z\"\r\n          fill=\"black\" />\r\n        <path\r\n          d=\"M9 17C9 17.394 9.0776 17.7841 9.22836 18.1481C9.37913 18.512 9.6001 18.8427 9.87868 19.1213C10.1573 19.3999 10.488 19.6209 10.8519 19.7716C11.2159 19.9224 11.606 20 12 20C12.394 20 12.7841 19.9224 13.1481 19.7716C13.512 19.6209 13.8427 19.3999 14.1213 19.1213C14.3999 18.8427 14.6209 18.512 14.7716 18.1481C14.9224 17.7841 15 17.394 15 17L12 17H9Z\"\r\n          fill=\"black\" />\r\n        <circle cx=\"18\" cy=\"6\" r=\"2.5\" fill=\"#eb154b\" stroke=\"#eb154b\" />\r\n      </svg>\r\n\r\n      <!-- <ion-badge style=\"border-radius: 50%;margin-left: -14px ;color:#eb154b ;font-size: 12px;\" color=\"light\">10</ion-badge> -->\r\n\r\n    </div>\r\n  </div>\r\n</ion-toolbar>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-12 mt-4 mx-3\">\r\n      <div class=\"row height \">\r\n        <div class=\"col-12 ion-text-center\">\r\n          <div class=\"search\"> <i class=\"fa fa-search\"></i>\r\n\r\n            <input (keydown)=\"searchOffer()\" [(ngModel)]=\"offerName\" type=\"text\" class=\"form-control\"\r\n              placeholder=\"Search\">\r\n            <button>\r\n              <svg (click)=\"clearData()\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\">\r\n                <circle cx=\"12\" cy=\"12\" r=\"9\" fill=\"#7E869E\" fill-opacity=\"0.25\" />\r\n                <path d=\"M16 8L8 16\" stroke=\"white\" stroke-width=\"1.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n                <path d=\"M8 8L16 16\" stroke=\"white\" stroke-width=\"1.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n              </svg>\r\n\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div *ngFor=\"let product of ShowOffers\">\r\n    <div style=\"padding: 10px;\" (click)=\"offerDetail(product)\" *ngIf=\"OfferShowname\">\r\n      <ion-item>{{product}}</ion-item>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"p-2\" *ngIf=\"OfferShowDetail\" (click)=\"redirecttoOffer()\">\r\n\r\n    <!-- Show Offer In Card -->\r\n\r\n    <div class=\"card\"\r\n      style=\"box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px !important;border-radius: 5px;\">\r\n      <div class=\"row\">\r\n        <div class=\"col-5\">\r\n          <img src=\"{{productImage}}\" alt=\"\"\r\n            style=\"box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;border-radius: 5px;\">\r\n\r\n        </div>\r\n        <div class=\"col-7\">\r\n          <h6 class=\"product-name\"><b>{{productname}}</b></h6>\r\n\r\n          <p style=\"font-size: smaller;\" *ngIf=\"IfOfferPresent\">\r\n            <span><b>Offer: &nbsp;</b></span>\r\n            {{offer}}%\r\n          </p>\r\n\r\n          <p style=\"font-size: smaller;\">\r\n            <span style=\"font-size: 13px;\"><b>Offer time: &nbsp;</b></span>\r\n            {{offertime}}\r\n          </p>\r\n\r\n\r\n          <p *ngIf=\"IfOfferPresent\" style=\"font-size: 13px;\">\r\n            <span style=\"font-size: 13px;\"><b>Price: &nbsp;</b></span>\r\n            <b><span style=\"text-decoration: line-through;\">₹{{totalcost}}</span>&nbsp;₹{{offerprice}}</b>\r\n          </p>\r\n          <p *ngIf=\"IfNotOfferPresent\" style=\"font-size: 13px;\">{{other_offer}} </p>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_offersearch_offersearch_module_ts.js.map