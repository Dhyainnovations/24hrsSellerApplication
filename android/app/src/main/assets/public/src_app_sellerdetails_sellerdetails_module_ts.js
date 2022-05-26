"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_sellerdetails_sellerdetails_module_ts"],{

/***/ 2779:
/*!***************************************************************!*\
  !*** ./src/app/sellerdetails/sellerdetails-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SellerdetailsPageRoutingModule": () => (/* binding */ SellerdetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _sellerdetails_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sellerdetails.page */ 1783);




const routes = [
    {
        path: '',
        component: _sellerdetails_page__WEBPACK_IMPORTED_MODULE_0__.SellerdetailsPage
    }
];
let SellerdetailsPageRoutingModule = class SellerdetailsPageRoutingModule {
};
SellerdetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SellerdetailsPageRoutingModule);



/***/ }),

/***/ 6516:
/*!*******************************************************!*\
  !*** ./src/app/sellerdetails/sellerdetails.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SellerdetailsPageModule": () => (/* binding */ SellerdetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _sellerdetails_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sellerdetails-routing.module */ 2779);
/* harmony import */ var _sellerdetails_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sellerdetails.page */ 1783);







let SellerdetailsPageModule = class SellerdetailsPageModule {
};
SellerdetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _sellerdetails_routing_module__WEBPACK_IMPORTED_MODULE_0__.SellerdetailsPageRoutingModule
        ],
        declarations: [_sellerdetails_page__WEBPACK_IMPORTED_MODULE_1__.SellerdetailsPage]
    })
], SellerdetailsPageModule);



/***/ }),

/***/ 1783:
/*!*****************************************************!*\
  !*** ./src/app/sellerdetails/sellerdetails.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SellerdetailsPage": () => (/* binding */ SellerdetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _sellerdetails_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sellerdetails.page.html?ngResource */ 4442);
/* harmony import */ var _sellerdetails_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sellerdetails.page.scss?ngResource */ 6880);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/http.service */ 8191);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);







let SellerdetailsPage = class SellerdetailsPage {
    constructor(router, http, route) {
        this.router = router;
        this.http = http;
        this.categoryList = [];
        this.selectedFile = null;
        this.selectedaddressproof = null;
        this.listOfCat = [];
        this.userdetails = localStorage.getItem("tbid");
        this.idproof = null;
        this.addressproof = null;
        this.store_name = localStorage.getItem("StoreName");
        this.addressProofUploadCheck = false;
        this.idProofUploadCheck = false;
        this.logoUploadCheck = false;
        this.imageSize = false;
        this.adressProofSize = false;
        this.idProofSize = false;
        this.mailId = localStorage.getItem("EmailID");
        route.params.subscribe(val => {
            this.list();
        });
    }
    ngOnInit() {
    }
    list() {
        this.http.get('/list_store_category').subscribe((response) => {
            console.log(response);
            this.listOfCat = response.records;
        }, (error) => {
            console.log(error);
        });
    }
    navigateHome() {
        this.router.navigate(['/social-media-details']);
    }
    MediaFileSelected(event) {
        this.selectedFile = event.target.files[0];
        var imageSize = event.target.files[0].size;
        if (imageSize > 5242880) {
            this.imageSize = true;
            this.logoUploadCheck = false;
        }
        else {
            this.imageSize = false;
            this.logoUploadCheck = true;
            this.storelogoCheck = false;
        }
    }
    MediaFileSelected_addressproof(event1) {
        this.addressproof = event1.target.files[0];
        var adressproof = event1.target.files[0].size;
        if (adressproof > 10485760) {
            this.adressProofSize = true;
            this.addressProofUploadCheck = false;
        }
        else {
            this.adressProofSize = false;
            this.addressProofUploadCheck = true;
            this.proofCheck = false;
        }
    }
    MediaFileSelected_idproof(event2) {
        this.idproof = event2.target.files[0];
        var idproof = event2.target.files[0].size;
        if (idproof > 10485760) {
            this.idProofSize = true;
            this.idProofUploadCheck = false;
        }
        else {
            this.idProofSize = false;
            this.idProofUploadCheck = true;
            this.proofCheck = false;
        }
    }
    adresscheckFalse() {
        this.addresscheck = false;
    }
    RemoveStoreNameError() {
        this.storeNameError = false;
    }
    usernameCheckFalse() {
        this.usernameCheck = false;
    }
    mobileNumbeCheck() {
        this.usernumber = false;
    }
    onClickSubmit(data) {
        this.image = this.selectedFile;
        const formdata = new FormData();
        formdata.append("tbid", this.userdetails);
        formdata.append("store_name", this.store_name);
        formdata.append("store_address", this.store_name + "," + data.city);
        formdata.append("address_line_1", data.address_line_1);
        formdata.append("address_line_2", data.address_line_2);
        formdata.append("city", data.city);
        formdata.append("store_category", data.category);
        formdata.append("state", data.state);
        formdata.append("pincode", data.pincode);
        formdata.append("mobile_number", data.usernumber);
        formdata.append("seller_name", data.username);
        formdata.append("store_logo", this.image);
        formdata.append("email_id", this.mailId);
        const idformdata = new FormData();
        idformdata.append("tbid", this.userdetails);
        idformdata.append("id_proof", this.idproof);
        const addressproofform = new FormData();
        addressproofform.append("tbid", this.userdetails);
        addressproofform.append("address_proof", this.addressproof);
        if (data.username.length <= 0) {
            this.usernameCheck = true;
        }
        else {
            this.usernameCheck = false;
        }
        if (data.usernumber.length <= 9) {
            this.usernumber = true;
        }
        else {
            this.usernumber = false;
        }
        if (data.category <= 0) {
            this.storecategoryCheck = true;
        }
        else {
            this.storecategoryCheck = false;
        }
        if (this.store_name == undefined) {
            this.storeNameError = true;
        }
        else {
            this.storeNameError = false;
        }
        console.log(data.city.length);
        if (data.address_line_1.length <= 0 || data.address_line_2.length <= 0 || data.city.length <= 0 || data.state.length <= 0 || data.pincode.length <= 0) {
            this.addresscheck = true;
        }
        else {
            this.addresscheck = false;
        }
        // if (this.image == null) {
        //   this.storelogoCheck = true;
        // } else {
        //   this.storelogoCheck = false;
        // }
        if (this.addressproof == null || this.idproof == null) {
            this.proofCheck = true;
        }
        else {
            this.proofCheck = false;
        }
        // this.storelogoCheck == false &&
        if (this.storeNameError == false && this.addresscheck == false && this.proofCheck == false && this.usernameCheck == false && this.usernumber == false) {
            this.http.postFormData("/seller_update_profile", formdata).subscribe((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
            });
            this.http.postFormData('/seller_id_proof', idformdata).subscribe((response) => {
                if (response.success == "true") {
                    console.log(response);
                }
            }, (error) => {
                console.log(error);
            });
            this.http.postFormData('/seller_address_proof', addressproofform).subscribe((response) => {
                if (response.success == "true") {
                    console.log(response);
                }
            }, (error) => {
                console.log(error);
            });
            this.router.navigate(['/social-media-details']);
        }
    }
    navigatetoNextTab() {
        this.router.navigate(['/social-media-details']);
    }
};
SellerdetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _shared_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute }
];
SellerdetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-sellerdetails',
        template: _sellerdetails_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_sellerdetails_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SellerdetailsPage);



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

/***/ 6880:
/*!******************************************************************!*\
  !*** ./src/app/sellerdetails/sellerdetails.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = ".myproduct-div {\n  margin-top: 55% !important;\n  background-color: var(--ion-color-light);\n  border: 1px solid #ccc;\n  border-radius: 8px;\n  box-shadow: 2px 2px 2px 2px #ebe6e6;\n  width: 96% !important;\n  margin: auto !important;\n}\n\ninput[type=text] {\n  font-size: 14px;\n  margin: 0 5px;\n  margin-top: -12px;\n  margin-left: -20px;\n  margin-bottom: 2px;\n  width: 100%;\n  box-sizing: border-box;\n  border: none;\n  background-color: #fff;\n  border-bottom: 2px solid var(--ion-color-primary);\n}\n\ninput[type=number] {\n  font-size: 14px;\n  margin: 0 5px;\n  margin-top: -12px;\n  margin-left: -20px;\n  margin-bottom: 2px;\n  width: 100%;\n  box-sizing: border-box;\n  border: none;\n  background-color: #fff;\n  border-bottom: 2px solid var(--ion-color-primary);\n}\n\n/* Chrome, Safari, Edge, Opera */\n\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n/* Firefox */\n\ninput[type=number] {\n  -moz-appearance: textfield;\n}\n\ninput:focus {\n  outline: none !important;\n  border-bottom: 2px solid var(--ion-color-success) !important;\n}\n\n.update-btn {\n  border-radius: 5px !important;\n  background: var(--ion-color-secondary);\n  color: var(--ion-color-light);\n  height: 25px;\n  width: 55%;\n  text-align: center;\n  border: 1px solid #fff;\n  font-size: 12px !important;\n  padding: 3px;\n  margin: 10px !important;\n  margin-left: 35px !important;\n}\n\n.primarySmallBtn {\n  background-color: transparent !important;\n  color: var(--ion-color-primary) !important;\n  margin-left: -6px !important;\n  box-shadow: none;\n  border-radius: 3px;\n  font-size: 12px;\n  height: 30px;\n  text-transform: none;\n}\n\nlottie-player {\n  cursor: pointer;\n}\n\nselect {\n  border: 1px solid #fff;\n  border-radius: 0 !important;\n  border-bottom: 2px solid var(--ion-color-primary) !important;\n}\n\nion-content {\n  --background: var(--ion-color-light) !important;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n\n/* Always set the map height explicitly to define the size of the div\n     * element that contains the map. */\n\n#map {\n  height: 100%;\n}\n\n/* Optional: Makes the sample page fill the window. */\n\nhtml,\nbody {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n}\n\n.controls {\n  background-color: var(--ion-color-light);\n  border-radius: 2px;\n  border: 1px solid transparent;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);\n  box-sizing: border-box;\n  font-family: Roboto;\n  font-size: 15px;\n  font-weight: 300;\n  height: 29px;\n  margin-left: 17px;\n  margin-top: 10px;\n  outline: none;\n  padding: 0 11px 0 13px;\n  text-overflow: ellipsis;\n  width: 400px;\n}\n\n.controls:focus {\n  border-color: #4d90fe;\n}\n\n.title {\n  font-weight: bold;\n}\n\n#infowindow-content {\n  display: none;\n}\n\n#map #infowindow-content {\n  display: inline;\n}\n\ninput[type=file] {\n  display: none;\n}\n\ninfoIcon {\n  position: relative;\n  width: 10px !important;\n  top: 0;\n}\n\n.extraInfo {\n  position: absolute;\n  color: var(--ion-color-light);\n  background-color: #2c2c2ce7;\n  border-radius: 5px;\n  padding: 10px 10px;\n  width: 225px;\n  text-align: center;\n  visibility: hidden;\n  font-size: 12px;\n  z-index: 1;\n}\n\n.infoIcon:hover .extraInfo {\n  visibility: visible;\n}\n\n.uploadbtn {\n  padding-right: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGxlcmRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQUE7RUFDQSx3Q0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsaURBQUE7QUFBRjs7QUFJQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsaURBQUE7QUFERjs7QUFJQSxnQ0FBQTs7QUFDQTs7RUFFRSx3QkFBQTtFQUNBLFNBQUE7QUFERjs7QUFJQSxZQUFBOztBQUNBO0VBQ0UsMEJBQUE7QUFERjs7QUFJQTtFQUNFLHdCQUFBO0VBQ0EsNERBQUE7QUFERjs7QUFJQTtFQUNFLDZCQUFBO0VBQ0Esc0NBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsNEJBQUE7QUFERjs7QUFJQTtFQUNFLHdDQUFBO0VBQ0EsMENBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBREY7O0FBSUE7RUFDRSxlQUFBO0FBREY7O0FBSUE7RUFDRSxzQkFBQTtFQUNBLDJCQUFBO0VBRUEsNERBQUE7QUFGRjs7QUFNQTtFQUNFLCtDQUFBO0VBQ0EsY0FBQTtBQUhGOztBQUtFO0VBQ0UsYUFBQTtBQUhKOztBQVFBO3VDQUFBOztBQUVBO0VBQ0UsWUFBQTtBQUxGOztBQVFBLHFEQUFBOztBQUNBOztFQUVFLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUxGOztBQVFBO0VBQ0Usd0NBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0Esd0NBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFMRjs7QUFRQTtFQUNFLHFCQUFBO0FBTEY7O0FBUUE7RUFDRSxpQkFBQTtBQUxGOztBQVFBO0VBQ0UsYUFBQTtBQUxGOztBQVFBO0VBQ0UsZUFBQTtBQUxGOztBQVFBO0VBQ0UsYUFBQTtBQUxGOztBQVNBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLE1BQUE7QUFORjs7QUFXQTtFQUNFLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBUkY7O0FBV0E7RUFDRSxtQkFBQTtBQVJGOztBQVdBO0VBQ0Usa0JBQUE7QUFSRiIsImZpbGUiOiJzZWxsZXJkZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teXByb2R1Y3QtZGl2IHtcbiAgbWFyZ2luLXRvcDogNTUlICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMnB4ICNlYmU2ZTY7XG4gIHdpZHRoOiA5NiUgIWltcG9ydGFudDtcbiAgbWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7XG5cbn1cblxuaW5wdXRbdHlwZT10ZXh0XSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiAwIDVweDtcbiAgbWFyZ2luLXRvcDogLTEycHg7XG4gIG1hcmdpbi1sZWZ0OiAtMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5cbmlucHV0W3R5cGU9bnVtYmVyXSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiAwIDVweDtcbiAgbWFyZ2luLXRvcDogLTEycHg7XG4gIG1hcmdpbi1sZWZ0OiAtMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4vKiBDaHJvbWUsIFNhZmFyaSwgRWRnZSwgT3BlcmEgKi9cbmlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxuaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIG1hcmdpbjogMDtcbn1cblxuLyogRmlyZWZveCAqL1xuaW5wdXRbdHlwZT1udW1iZXJdIHtcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG59XG5cbmlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpICFpbXBvcnRhbnQ7XG59XG5cbi51cGRhdGUtYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogNTUlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAzcHg7XG4gIG1hcmdpbjogMTBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogMzVweCAhaW1wb3J0YW50O1xufVxuXG4ucHJpbWFyeVNtYWxsQnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogLTZweCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxubG90dGllLXBsYXllciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuc2VsZWN0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAhaW1wb3J0YW50O1xuXG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBhdXRvO1xuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cblxuLyogQWx3YXlzIHNldCB0aGUgbWFwIGhlaWdodCBleHBsaWNpdGx5IHRvIGRlZmluZSB0aGUgc2l6ZSBvZiB0aGUgZGl2XG4gICAgICogZWxlbWVudCB0aGF0IGNvbnRhaW5zIHRoZSBtYXAuICovXG4jbWFwIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4vKiBPcHRpb25hbDogTWFrZXMgdGhlIHNhbXBsZSBwYWdlIGZpbGwgdGhlIHdpbmRvdy4gKi9cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5jb250cm9scyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgaGVpZ2h0OiAyOXB4O1xuICBtYXJnaW4tbGVmdDogMTdweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogMCAxMXB4IDAgMTNweDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdpZHRoOiA0MDBweDtcbn1cblxuLmNvbnRyb2xzOmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiAjNGQ5MGZlO1xufVxuXG4udGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuI2luZm93aW5kb3ctY29udGVudCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNtYXAgI2luZm93aW5kb3ctY29udGVudCB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cblxuaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xuICBkaXNwbGF5OiBub25lO1xuXG59XG5cbmluZm9JY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTBweCAhaW1wb3J0YW50O1xuICB0b3A6IDA7XG59XG5cblxuXG4uZXh0cmFJbmZvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJjMmMyY2U3O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgd2lkdGg6IDIyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB6LWluZGV4OiAxO1xufVxuXG4uaW5mb0ljb246aG92ZXIgLmV4dHJhSW5mbyB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi51cGxvYWRidG57XG4gIHBhZGRpbmctcmlnaHQ6IDEwJTtcbn0iXX0= */";

/***/ }),

/***/ 4442:
/*!******************************************************************!*\
  !*** ./src/app/sellerdetails/sellerdetails.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-content class=\"mt-2\">\n  <div style=\"margin-top: 20% !important;\" class=\"myproduct-div  mb-4\">\n\n    <h4 style=\"padding-left: 17px;\" class=\"title\"> Provide Your Details:</h4>\n    <form #sellerdetailform=\"ngForm\" (ngSubmit)=\"onClickSubmit(sellerdetailform.value)\">\n      <div class=\"row mt-2\" style=\"padding-left: 17px;\">\n        <div class=\"col-6 \">\n          <p style=\"margin-top: 4px;\">Store Logo:&nbsp;<span class=\"infoIcon\">\n              <img src=\"assets/icon/i.png\" alt=\"info icon\" width=\"15px\">\n\n              <p class=\"extraInfo\">\n                (Upload Only jpeg or png & Ratio\n                1:1)</p>\n            </span></p>\n        </div>\n        <div class=\"col-6 ion-text-right uploadbtn\">\n\n          <label class=\"btn btn-default\" style=\"font-size: 13px;\" (change)=\"MediaFileSelected($event)\">\n            <svg width=\"20\" height=\"16\" viewBox=\"0 0 23 20\" fill=\"none\">\n              <path\n                d=\"M0 2.5C0 1.11914 1.14401 0 2.55556 0H8.94444V5C8.94444 5.69141 9.51545 6.25 10.2222 6.25H15.3333V7.75781C12.3825 8.57422 10.2222 11.2266 10.2222 14.375C10.2222 16.6836 11.3842 18.7227 13.1651 19.9727C13.0413 19.9883 12.9095 20 12.7778 20H2.55556C1.14401 20 0 18.8789 0 17.5V2.5ZM10.2222 5V0L15.3333 5H10.2222ZM11.5 14.375C11.5 11.2695 14.0755 8.75 17.25 8.75C20.4245 8.75 23 11.2695 23 14.375C23 17.4805 20.4245 20 17.25 20C14.0755 20 11.5 17.4805 11.5 14.375ZM17.8889 11.8398C17.8889 11.5313 17.6014 11.2148 17.25 11.2148C16.8986 11.2148 16.6111 11.5313 16.6111 11.8398V13.7148H14.6944C14.3431 13.7148 14.0556 14.0313 14.0556 14.3398C14.0556 14.7188 14.3431 14.9648 14.6944 14.9648H16.6111V16.8398C16.6111 17.2188 16.8986 17.4648 17.25 17.4648C17.6014 17.4648 17.8889 17.2188 17.8889 16.8398V14.9648H19.8056C20.1569 14.9648 20.4444 14.7188 20.4444 14.3398C20.4444 14.0313 20.1569 13.7148 19.8056 13.7148H17.8889V11.8398Z\"\n                fill=\"black\" />\n            </svg>\n            <span style=\"font-size: 14px;\"> Upload</span>\n            <input type=\"file\" class=\"\" name=\"image\" accept=\".jpeg,.png\">\n          </label>\n        </div>\n\n        <p class=\"small text-success\" *ngIf=\"logoUploadCheck\"><i>Uploaded Successfully</i></p>\n        <p class=\"small text-danger\" *ngIf=\"imageSize\"><i>Uploaded File Size Should Not Exceed More Than 5Mb</i></p>\n        <p class=\"small text-danger text-center mt-2\" *ngIf=\"storelogoCheck\">Upload Your Store Logo</p>\n\n      </div>\n\n\n\n\n      <p class=\"small text-danger text-center mt-2\" *ngIf=\"storelogoCheck\">Upload Your Store Logo</p>\n      <div class=\"row\" style=\"padding-left: 17px;\">\n        <div class=\"col-6\">\n          <p>Store Name</p>\n        </div>\n        <div class=\"col-6\">\n          <input type=\"text\" id=\"edit-field\" name=\"store_name\" [(ngModel)]=\"store_name\"\n            (keyup)=\"RemoveStoreNameError()\">\n        </div>\n      </div>\n\n      <div class=\"row\" style=\"padding-left: 17px;\">\n\n        <div class=\"col-6 mt-2\">Address Line 1</div>\n        <div class=\"col-6\">\n          <input ngModel type=\"text\" id=\"edit-field\" name=\"address_line_1\" (keyup)=\"adresscheckFalse()\">\n        </div>\n        <div class=\"col-6 mt-2\">Address Line 2</div>\n        <div class=\"col-6\">\n          <input ngModel type=\"text\" id=\"edit-field\" name=\"address_line_2\" (keyup)=\"adresscheckFalse()\">\n        </div>\n        <div class=\"col-6 mt-2\">City</div>\n        <div class=\"col-6\">\n          <input ngModel type=\"text\" id=\"edit-field\" name=\"city\" (keyup)=\"adresscheckFalse()\">\n        </div>\n        <div class=\"col-6 mt-2\">State</div>\n        <div class=\"col-6\">\n          <input ngModel type=\"text\" id=\"edit-field\" name=\"state\" (keyup)=\"adresscheckFalse()\">\n        </div>\n        <div class=\"col-6 mt-2\">Pincode</div>\n        <div class=\"col-6\">\n          <input ngModel type=\"text\" id=\"edit-field\" name=\"pincode\" (keyup)=\"adresscheckFalse()\" maxlength=\"6\">\n        </div>\n      </div>\n\n      <p class=\"small text-danger text-center mt-1\" *ngIf=\"addresscheck\">Enter Your Valid Store Address</p>\n      <div class=\"row mt-2\" style=\"padding-left: 17px;\">\n        <div class=\"col-6 mt-2\">\n          <p>Store Category</p>\n        </div>\n        <div class=\"col-6\">\n          <div style=\"margin-left: -20px !important;\" class=\"select\">\n            <select style=\"color:black\" ngModel placeholder=\"category\" name=\"category\">\n              <option  disabled value=\"\"> select</option>\n              <option *ngFor=\"let cat of listOfCat\" value=\"{{cat.tbid}}\">{{cat.store_category}}</option>\n            </select>\n          </div>\n        </div>\n      </div>\n      <p class=\"small text-danger text-center mt-2\" *ngIf=\"storecategoryCheck\">Choose Store Category</p>\n      <div class=\"row\" style=\"padding-left: 17px;\">\n        <div class=\"col-6 mt-2\">\n          <p>User Name</p>\n        </div>\n        <div class=\"col-6\">\n          <input ngModel type=\"text\" id=\"edit-field\" name=\"username\" (keyup)=\"usernameCheckFalse()\">\n        </div>\n      </div>\n      <p class=\"small text-danger text-center mt-2\" *ngIf=\"usernameCheck\">Enter Username</p>\n      <div class=\"row\" style=\"padding-left: 17px;\">\n        <div class=\"col-6 mt-2 mb-2\">\n          <p>Mobile Number</p>\n        </div>\n        <div class=\"col-6\">\n          <input ngModel type=\"text\" id=\"edit-field\" name=\"usernumber\" (keyup)=\"mobileNumbeCheck()\" maxlength=\"10\">\n        </div>\n      </div>\n      <p class=\"small text-danger text-center mt-2\" *ngIf=\"usernumber\">Enter MobileNumber</p>\n\n\n      <div class=\"row\" style=\"padding-left: 17px;\">\n        <div class=\"col-4\">\n          <p style=\"margin-top: 4px;\">Id Proof:&nbsp; <span class=\"infoIcon\">\n              <img src=\"assets/icon/i.png\" alt=\"info icon\" width=\"15px\">\n\n              <p class=\"extraInfo\">\n                Supported Format : Pdf,<br>\n                Aadhar Card,\n                Driving License,<br>\n                Pan Card </p>\n            </span></p>\n\n        </div>\n\n        <div class=\"col-8 ion-text-right uploadbtn\">\n          <label class=\"btn btn-default mb-2\" style=\"font-size: 13px;\" (change)=\"MediaFileSelected_idproof($event)\">\n            <svg width=\"20\" height=\"16\" viewBox=\"0 0 23 20\" fill=\"none\">\n              <path\n                d=\"M0 2.5C0 1.11914 1.14401 0 2.55556 0H8.94444V5C8.94444 5.69141 9.51545 6.25 10.2222 6.25H15.3333V7.75781C12.3825 8.57422 10.2222 11.2266 10.2222 14.375C10.2222 16.6836 11.3842 18.7227 13.1651 19.9727C13.0413 19.9883 12.9095 20 12.7778 20H2.55556C1.14401 20 0 18.8789 0 17.5V2.5ZM10.2222 5V0L15.3333 5H10.2222ZM11.5 14.375C11.5 11.2695 14.0755 8.75 17.25 8.75C20.4245 8.75 23 11.2695 23 14.375C23 17.4805 20.4245 20 17.25 20C14.0755 20 11.5 17.4805 11.5 14.375ZM17.8889 11.8398C17.8889 11.5313 17.6014 11.2148 17.25 11.2148C16.8986 11.2148 16.6111 11.5313 16.6111 11.8398V13.7148H14.6944C14.3431 13.7148 14.0556 14.0313 14.0556 14.3398C14.0556 14.7188 14.3431 14.9648 14.6944 14.9648H16.6111V16.8398C16.6111 17.2188 16.8986 17.4648 17.25 17.4648C17.6014 17.4648 17.8889 17.2188 17.8889 16.8398V14.9648H19.8056C20.1569 14.9648 20.4444 14.7188 20.4444 14.3398C20.4444 14.0313 20.1569 13.7148 19.8056 13.7148H17.8889V11.8398Z\"\n                fill=\"black\" />\n            </svg>\n            <span style=\"font-size: 14px;\"> Upload</span>\n            <input type=\"file\" class=\"\" name=\"image\" accept=\".pdf\">\n          </label>\n        </div>\n\n        <p class=\"small text-success\" *ngIf=\"idProofUploadCheck\"><i>Uploaded Successfully</i></p>\n      </div>\n\n      <div class=\"row mt-2\" style=\"padding-left: 17px;\">\n        <div class=\"col-6 \">\n          <p style=\"margin-top: 4px;\">Address Proof:&nbsp;<span class=\"infoIcon\">\n              <img src=\"assets/icon/i.png\" alt=\"info icon\" width=\"15px\">\n\n              <p class=\"extraInfo\">\n                Supported Format : Pdf,<br>\n                GST,\n                Stores and establishments registered certificate,\n                Roc,\n                FSSAI for food related business</p>\n            </span></p>\n        </div>\n        <div class=\"col-6 ion-text-right uploadbtn\">\n\n          <label class=\"btn btn-default\" style=\"font-size: 13px;\" (change)=\"MediaFileSelected_addressproof($event)\">\n            <svg width=\"20\" height=\"16\" viewBox=\"0 0 23 20\" fill=\"none\">\n              <path\n                d=\"M0 2.5C0 1.11914 1.14401 0 2.55556 0H8.94444V5C8.94444 5.69141 9.51545 6.25 10.2222 6.25H15.3333V7.75781C12.3825 8.57422 10.2222 11.2266 10.2222 14.375C10.2222 16.6836 11.3842 18.7227 13.1651 19.9727C13.0413 19.9883 12.9095 20 12.7778 20H2.55556C1.14401 20 0 18.8789 0 17.5V2.5ZM10.2222 5V0L15.3333 5H10.2222ZM11.5 14.375C11.5 11.2695 14.0755 8.75 17.25 8.75C20.4245 8.75 23 11.2695 23 14.375C23 17.4805 20.4245 20 17.25 20C14.0755 20 11.5 17.4805 11.5 14.375ZM17.8889 11.8398C17.8889 11.5313 17.6014 11.2148 17.25 11.2148C16.8986 11.2148 16.6111 11.5313 16.6111 11.8398V13.7148H14.6944C14.3431 13.7148 14.0556 14.0313 14.0556 14.3398C14.0556 14.7188 14.3431 14.9648 14.6944 14.9648H16.6111V16.8398C16.6111 17.2188 16.8986 17.4648 17.25 17.4648C17.6014 17.4648 17.8889 17.2188 17.8889 16.8398V14.9648H19.8056C20.1569 14.9648 20.4444 14.7188 20.4444 14.3398C20.4444 14.0313 20.1569 13.7148 19.8056 13.7148H17.8889V11.8398Z\"\n                fill=\"black\" />\n            </svg>\n            <span style=\"font-size: 14px;\"> Upload</span>\n            <input type=\"file\" class=\"\" name=\"image\" accept=\".pdf\">\n          </label>\n        </div>\n\n        <p class=\"small text-success\" *ngIf=\"addressProofUploadCheck\"><i>Uploaded Successfully</i></p>\n\n      </div>\n      <p class=\"small text-danger text-center mt-2\" *ngIf=\"proofCheck\">Upload Both Id And Address Proof</p>\n      <div class=\"row p-3\">\n        <div class=\"col-6 mt-1\">\n          <button (click)=\"navigateHome()\" type=\"button\" class=\"btn btn-sm primarySmallBtn\">Skip</button>\n        </div>\n        <div class=\"col-6 ion-text-right \">\n          <ion-button type=\"submit\" class=\"secondarySmallBtn p-2\" color=\"none\">Next</ion-button>\n        </div>\n      </div>\n    </form>\n  </div>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_sellerdetails_sellerdetails_module_ts.js.map