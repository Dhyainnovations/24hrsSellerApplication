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
        //formdata.append("category", data.category);
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
        formdata.append("address_proof", this.addressproof);
        formdata.append("id_proof", this.idproof);
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
        if (this.image == null) {
            this.storelogoCheck = true;
        }
        else {
            this.storelogoCheck = false;
        }
        if (this.addressproof == null || this.idproof == null) {
            this.proofCheck = true;
        }
        else {
            this.proofCheck = false;
        }
        if (this.storeNameError == false && this.addresscheck == false && this.proofCheck == false && this.storelogoCheck == false && this.usernameCheck == false && this.usernumber == false) {
            this.http.postFormData("/seller_update_profile", formdata).subscribe((response) => {
                console.log(response);
                this.router.navigate(['/social-media-details']);
            }, (error) => {
                console.log(error);
            });
        }
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

module.exports = ".myproduct-div {\n  position: absolute;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border-radius: 8px;\n  box-shadow: 2px 2px 2px 2px #ebe6e6;\n  width: 96% !important;\n  margin: 5px;\n}\n\ninput[type=text] {\n  font-size: 11px;\n  margin: 0 5px;\n  margin-top: -12px;\n  margin-left: -20px;\n  width: 90%;\n  box-sizing: border-box;\n  border: none;\n  background-color: #fff;\n  border-bottom: 2px solid #EB154B;\n}\n\ninput:focus {\n  outline: none !important;\n  border-bottom: 2px solid #23d5ab !important;\n}\n\n.update-btn {\n  border-radius: 5px !important;\n  background: #0D0D0D;\n  color: #fff;\n  height: 25px;\n  width: 55%;\n  text-align: center;\n  border: 1px solid #fff;\n  font-size: 12px !important;\n  padding: 3px;\n  margin: 10px !important;\n  margin-left: 35px !important;\n}\n\n.skip-btn {\n  border-radius: 5px !important;\n  background-color: #fff;\n  color: #EB154B;\n  height: 25px;\n  width: 25%;\n  text-align: center;\n  border: 1px solid #fff;\n  font-size: 13px !important;\n  padding: 3px;\n  margin: 10px !important;\n}\n\nlottie-player {\n  cursor: pointer;\n}\n\nselect {\n  border: 1px solid #fff;\n}\n\nion-content {\n  --background:#F4F7FA !important;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n\n/* Always set the map height explicitly to define the size of the div\n     * element that contains the map. */\n\n#map {\n  height: 100%;\n}\n\n/* Optional: Makes the sample page fill the window. */\n\nhtml,\nbody {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n}\n\n.controls {\n  background-color: #fff;\n  border-radius: 2px;\n  border: 1px solid transparent;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);\n  box-sizing: border-box;\n  font-family: Roboto;\n  font-size: 15px;\n  font-weight: 300;\n  height: 29px;\n  margin-left: 17px;\n  margin-top: 10px;\n  outline: none;\n  padding: 0 11px 0 13px;\n  text-overflow: ellipsis;\n  width: 400px;\n}\n\n.controls:focus {\n  border-color: #4d90fe;\n}\n\n.title {\n  font-weight: bold;\n}\n\n#infowindow-content {\n  display: none;\n}\n\n#map #infowindow-content {\n  display: inline;\n}\n\ninput[type=file] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGxlcmRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NBQUE7QUFDRjs7QUFDQTtFQUNFLHdCQUFBO0VBQ0EsMkNBQUE7QUFFRjs7QUFBQTtFQUNFLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtBQUdGOztBQURBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQUlBOztBQUZBO0VBQ0UsZUFBQTtBQUtGOztBQUZBO0VBQ0Esc0JBQUE7QUFLQTs7QUFGQTtFQUNBLCtCQUFBO0VBQ0EsY0FBQTtBQUtBOztBQUpBO0VBQ0ksYUFBQTtBQU1KOztBQURBO3VDQUFBOztBQUVLO0VBQ0MsWUFBQTtBQUlOOztBQURJLHFEQUFBOztBQUNBOztFQUVFLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUlOOztBQURJO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0Esd0NBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFJTjs7QUFESTtFQUNFLHFCQUFBO0FBSU47O0FBREk7RUFDRSxpQkFBQTtBQUlOOztBQURJO0VBQ0UsYUFBQTtBQUlOOztBQURJO0VBQ0UsZUFBQTtBQUlOOztBQURJO0VBQ0UsYUFBQTtBQUlOIiwiZmlsZSI6InNlbGxlcmRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15cHJvZHVjdC1kaXZ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBib3gtc2hhZG93OiAycHggMnB4IDJweCAycHggI2ViZTZlNjtcclxuICB3aWR0aDo5NiUgIWltcG9ydGFudDtcclxuICBtYXJnaW46NXB4O1xyXG4gIFxyXG59XHJcbmlucHV0W3R5cGU9dGV4dF0ge1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBtYXJnaW46IDAgNXB4O1xyXG4gIG1hcmdpbi10b3A6IC0xMnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMjBweDtcclxuICB3aWR0aDogOTAlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNFQjE1NEI7O1xyXG59XHJcbmlucHV0OmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbToycHggc29saWQgIzIzZDVhYiAhaW1wb3J0YW50O1xyXG59XHJcbi51cGRhdGUtYnRue1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQ6ICMwRDBEMEQ7XHJcbiAgY29sb3I6I2ZmZjtcclxuICBoZWlnaHQ6MjVweDtcclxuICB3aWR0aDo1NSU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlcjoxcHggc29saWQgI2ZmZjtcclxuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAzcHg7XHJcbiAgbWFyZ2luOjEwcHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tbGVmdDogMzVweCAhaW1wb3J0YW50IDtcclxufVxyXG4uc2tpcC1idG57XHJcbmJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5jb2xvcjojRUIxNTRCO1xyXG5oZWlnaHQ6MjVweDtcclxud2lkdGg6MjUlO1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmJvcmRlcjoxcHggc29saWQgI2ZmZjtcclxuZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XHJcbnBhZGRpbmc6IDNweDtcclxubWFyZ2luOjEwcHggIWltcG9ydGFudDtcclxufVxyXG5sb3R0aWUtcGxheWVye1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuc2VsZWN0e1xyXG5ib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG5cclxufVxyXG5pb24tY29udGVudCB7XHJcbi0tYmFja2dyb3VuZDojRjRGN0ZBICAhaW1wb3J0YW50O1xyXG5vdmVyZmxvdzogYXV0bztcclxuJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG59XHJcblxyXG5cclxuLyogQWx3YXlzIHNldCB0aGUgbWFwIGhlaWdodCBleHBsaWNpdGx5IHRvIGRlZmluZSB0aGUgc2l6ZSBvZiB0aGUgZGl2XHJcbiAgICAgKiBlbGVtZW50IHRoYXQgY29udGFpbnMgdGhlIG1hcC4gKi9cclxuICAgICAjbWFwIHtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKiBPcHRpb25hbDogTWFrZXMgdGhlIHNhbXBsZSBwYWdlIGZpbGwgdGhlIHdpbmRvdy4gKi9cclxuICAgIGh0bWwsIFxyXG4gICAgYm9keSB7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY29udHJvbHMge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICBib3gtc2hhZG93OiAwIDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgIGhlaWdodDogMjlweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDE3cHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIHBhZGRpbmc6IDAgMTFweCAwIDEzcHg7XHJcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jb250cm9sczpmb2N1cyB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogIzRkOTBmZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICNpbmZvd2luZG93LWNvbnRlbnQge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAjbWFwICNpbmZvd2luZG93LWNvbnRlbnQge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG5cclxuICB9XHJcblxyXG4iXX0= */";

/***/ }),

/***/ 4442:
/*!******************************************************************!*\
  !*** ./src/app/sellerdetails/sellerdetails.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-content class=\"mt-2\">\r\n  <div class=\"myproduct-div mt-5 \">\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-9\">\r\n        <span class=\"seller\"><b>24hrs</b></span>\r\n      </div>\r\n\r\n      <div class=\"col-3 ion-text-center mt-3\">\r\n\r\n        <svg (click)=\"navigateHome()\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\">\r\n          <circle cx=\"12\" cy=\"12\" r=\"9\" fill=\"red\" fill-opacity=\"0.25\" />\r\n          <path d=\"M16 8L8 16\" stroke=\"white\" stroke-width=\"1.2\" stroke-linecap=\"square\" stroke-linejoin=\"round\" />\r\n          <path d=\"M8 8L16 16\" stroke=\"white\" stroke-width=\"1.2\" stroke-linecap=\"square\" stroke-linejoin=\"round\" />\r\n        </svg>\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n    <p style=\"font-size:20px;margin-left:10px;margin-top:10px; color: #5C5C5C;\"> Provide Your Details:</p>\r\n    <form #sellerdetailform=\"ngForm\" (ngSubmit)=\"onClickSubmit(sellerdetailform.value)\">\r\n      <div class=\"row\" style=\"padding-left: 10px;\">\r\n        <div class=\"col-12\">\r\n          <p class=\"edit-name\">Store logo: <br><span class=\"small\">(Upload Only jpeg or png & Ratio 1:1)</span></p>\r\n        </div>\r\n\r\n\r\n        <label class=\"btn btn-default ion-text-center\"\r\n          style=\"border:1px solid rgb(202, 202, 202);width:60%;box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;font-size: 13px;margin: auto !important;\"\r\n          (change)=\"MediaFileSelected($event)\">\r\n          <svg width=\"23\" height=\"20\" viewBox=\"0 0 23 20\" fill=\"none\">\r\n            <path\r\n              d=\"M0 2.5C0 1.11914 1.14401 0 2.55556 0H8.94444V5C8.94444 5.69141 9.51545 6.25 10.2222 6.25H15.3333V7.75781C12.3825 8.57422 10.2222 11.2266 10.2222 14.375C10.2222 16.6836 11.3842 18.7227 13.1651 19.9727C13.0413 19.9883 12.9095 20 12.7778 20H2.55556C1.14401 20 0 18.8789 0 17.5V2.5ZM10.2222 5V0L15.3333 5H10.2222ZM11.5 14.375C11.5 11.2695 14.0755 8.75 17.25 8.75C20.4245 8.75 23 11.2695 23 14.375C23 17.4805 20.4245 20 17.25 20C14.0755 20 11.5 17.4805 11.5 14.375ZM17.8889 11.8398C17.8889 11.5313 17.6014 11.2148 17.25 11.2148C16.8986 11.2148 16.6111 11.5313 16.6111 11.8398V13.7148H14.6944C14.3431 13.7148 14.0556 14.0313 14.0556 14.3398C14.0556 14.7188 14.3431 14.9648 14.6944 14.9648H16.6111V16.8398C16.6111 17.2188 16.8986 17.4648 17.25 17.4648C17.6014 17.4648 17.8889 17.2188 17.8889 16.8398V14.9648H19.8056C20.1569 14.9648 20.4444 14.7188 20.4444 14.3398C20.4444 14.0313 20.1569 13.7148 19.8056 13.7148H17.8889V11.8398Z\"\r\n              fill=\"black\" />\r\n          </svg>\r\n          <span class=\"small\">Upload</span>\r\n          <input type=\"file\" class=\"\" name=\"image\" accept=\".jpeg,.png\">\r\n        </label>\r\n        <p class=\"small text-success\" *ngIf=\"logoUploadCheck\"><i>Uploaded Successfully</i></p>\r\n        <p class=\"small text-danger\" *ngIf=\"imageSize\"><i>Uploaded File Size Should Not Exceed More Than 5Mb</i></p>\r\n      </div>\r\n\r\n      <p class=\"small text-danger text-center mt-2\" *ngIf=\"storelogoCheck\">Upload Your Store Logo</p>\r\n      <div class=\"row mt-2\" style=\"padding-left: 10px;\">\r\n        <div class=\"col-6\">\r\n          <p class=\"edit-name\">Store Name:</p>\r\n        </div>\r\n        <div class=\"col-6\">\r\n          <input type=\"text\" id=\"edit-field\" name=\"store_name\" [(ngModel)]=\"store_name\"\r\n            (keyup)=\"RemoveStoreNameError()\">\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\" style=\"padding-left: 10px;\">\r\n        <div class=\"col-12\">\r\n          <p class=\"edit-name\">Store Address:</p>\r\n        </div>\r\n        <div class=\"col-6\">Address Line 1</div>\r\n        <div class=\"col-6\">\r\n          <input ngModel type=\"text\" id=\"edit-field\" name=\"address_line_1\" (keyup)=\"adresscheckFalse()\">\r\n        </div>\r\n        <div class=\"col-6\">Address Line 2</div>\r\n        <div class=\"col-6\">\r\n          <input ngModel type=\"text\" id=\"edit-field\" name=\"address_line_2\" (keyup)=\"adresscheckFalse()\">\r\n        </div>\r\n        <div class=\"col-6\">City</div>\r\n        <div class=\"col-6\">\r\n          <input ngModel type=\"text\" id=\"edit-field\" name=\"city\" (keyup)=\"adresscheckFalse()\">\r\n        </div>\r\n        <div class=\"col-6\">State</div>\r\n        <div class=\"col-6\">\r\n          <input ngModel type=\"text\" id=\"edit-field\" name=\"state\" (keyup)=\"adresscheckFalse()\">\r\n        </div>\r\n        <div class=\"col-6\">Pincode</div>\r\n        <div class=\"col-6\">\r\n          <input ngModel type=\"text\" id=\"edit-field\" name=\"pincode\" (keyup)=\"adresscheckFalse()\">\r\n        </div>\r\n      </div>\r\n\r\n      <p class=\"small text-danger text-center mt-1\" *ngIf=\"addresscheck\">Enter Your Store Address</p>\r\n      <div class=\"row\" style=\"padding-left: 10px;\">\r\n        <div class=\"col-6 mt-3\">\r\n          <p class=\"edit-name\">Store category:</p>\r\n        </div>\r\n        <div class=\"col-6\">\r\n          <div class=\"select\">\r\n            <select ngModel placeholder=\"category\" name=\"category\">\r\n              <option *ngFor=\"let cat of listOfCat\" value=\"{{cat.tbid}}\">{{cat.store_category}}</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <p class=\"small text-danger text-center mt-2\" *ngIf=\"storecategoryCheck\">Choose Store Category</p>\r\n      <div class=\"row\" style=\"padding-left: 10px;\">\r\n        <div class=\"col-6\">\r\n          <p class=\"edit-name\">User Name:</p>\r\n        </div>\r\n        <div class=\"col-6\">\r\n          <input ngModel type=\"text\" id=\"edit-field\" name=\"username\" (keyup)=\"usernameCheckFalse()\">\r\n        </div>\r\n      </div>\r\n      <p class=\"small text-danger text-center mt-2\" *ngIf=\"usernameCheck\">Enter Username</p>\r\n      <div class=\"row\" style=\"padding-left: 10px;\">\r\n        <div class=\"col-6\">\r\n          <p class=\"edit-name\">Mobile Number:</p>\r\n        </div>\r\n        <div class=\"col-6\">\r\n          <input ngModel type=\"text\" id=\"edit-field\" name=\"usernumber\" (keyup)=\"mobileNumbeCheck()\">\r\n        </div>\r\n      </div>\r\n      <p class=\"small text-danger text-center mt-2\" *ngIf=\"usernumber\">Enter MobileNumber</p>\r\n\r\n\r\n      <div class=\"row\" style=\"padding-left: 10px;\">\r\n        <div class=\"col-12\">\r\n          <p class=\"edit-name\">Id Proof:<span class=\"small\"><i>(Pdf Format)</i></span></p>\r\n        </div>\r\n\r\n        <label class=\"btn btn-default mb-2\" style=\"font-size: 13px;\" (change)=\"MediaFileSelected_idproof($event)\"\r\n          style=\"border:1px solid rgb(202, 202, 202);width:60%;box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;font-size: 13px;margin: auto !important;\">\r\n          <svg width=\"23\" height=\"20\" viewBox=\"0 0 23 20\" fill=\"none\">\r\n            <path\r\n              d=\"M0 2.5C0 1.11914 1.14401 0 2.55556 0H8.94444V5C8.94444 5.69141 9.51545 6.25 10.2222 6.25H15.3333V7.75781C12.3825 8.57422 10.2222 11.2266 10.2222 14.375C10.2222 16.6836 11.3842 18.7227 13.1651 19.9727C13.0413 19.9883 12.9095 20 12.7778 20H2.55556C1.14401 20 0 18.8789 0 17.5V2.5ZM10.2222 5V0L15.3333 5H10.2222ZM11.5 14.375C11.5 11.2695 14.0755 8.75 17.25 8.75C20.4245 8.75 23 11.2695 23 14.375C23 17.4805 20.4245 20 17.25 20C14.0755 20 11.5 17.4805 11.5 14.375ZM17.8889 11.8398C17.8889 11.5313 17.6014 11.2148 17.25 11.2148C16.8986 11.2148 16.6111 11.5313 16.6111 11.8398V13.7148H14.6944C14.3431 13.7148 14.0556 14.0313 14.0556 14.3398C14.0556 14.7188 14.3431 14.9648 14.6944 14.9648H16.6111V16.8398C16.6111 17.2188 16.8986 17.4648 17.25 17.4648C17.6014 17.4648 17.8889 17.2188 17.8889 16.8398V14.9648H19.8056C20.1569 14.9648 20.4444 14.7188 20.4444 14.3398C20.4444 14.0313 20.1569 13.7148 19.8056 13.7148H17.8889V11.8398Z\"\r\n              fill=\"black\" />\r\n          </svg>\r\n          <span class=\"small\">Upload</span>\r\n          <input type=\"file\" class=\"\" name=\"image\" accept=\".pdf\">\r\n        </label>\r\n        <p class=\"small text-success\" *ngIf=\"idProofUploadCheck\"><i>Uploaded Successfully</i></p>\r\n      </div>\r\n\r\n      <div class=\"row mt-2\" style=\"padding-left: 10px;\">\r\n        <div class=\"col-12\">\r\n          <p class=\"edit-name\">Address Proof:<span class=\"small\"><i>(Pdf Format)</i></span></p>\r\n        </div>\r\n\r\n        <label class=\"btn btn-default\" style=\"font-size: 13px;\" (change)=\"MediaFileSelected_addressproof($event)\"\r\n          style=\"border:1px solid rgb(202, 202, 202);width:60%;box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;font-size: 13px;margin: auto !important;\">\r\n          <svg width=\"23\" height=\"20\" viewBox=\"0 0 23 20\" fill=\"none\">\r\n            <path\r\n              d=\"M0 2.5C0 1.11914 1.14401 0 2.55556 0H8.94444V5C8.94444 5.69141 9.51545 6.25 10.2222 6.25H15.3333V7.75781C12.3825 8.57422 10.2222 11.2266 10.2222 14.375C10.2222 16.6836 11.3842 18.7227 13.1651 19.9727C13.0413 19.9883 12.9095 20 12.7778 20H2.55556C1.14401 20 0 18.8789 0 17.5V2.5ZM10.2222 5V0L15.3333 5H10.2222ZM11.5 14.375C11.5 11.2695 14.0755 8.75 17.25 8.75C20.4245 8.75 23 11.2695 23 14.375C23 17.4805 20.4245 20 17.25 20C14.0755 20 11.5 17.4805 11.5 14.375ZM17.8889 11.8398C17.8889 11.5313 17.6014 11.2148 17.25 11.2148C16.8986 11.2148 16.6111 11.5313 16.6111 11.8398V13.7148H14.6944C14.3431 13.7148 14.0556 14.0313 14.0556 14.3398C14.0556 14.7188 14.3431 14.9648 14.6944 14.9648H16.6111V16.8398C16.6111 17.2188 16.8986 17.4648 17.25 17.4648C17.6014 17.4648 17.8889 17.2188 17.8889 16.8398V14.9648H19.8056C20.1569 14.9648 20.4444 14.7188 20.4444 14.3398C20.4444 14.0313 20.1569 13.7148 19.8056 13.7148H17.8889V11.8398Z\"\r\n              fill=\"black\" />\r\n          </svg>\r\n          <span class=\"small\">Upload</span>\r\n          <input type=\"file\" class=\"\" name=\"image\" accept=\".pdf\">\r\n        </label>\r\n        <p class=\"small text-success\" *ngIf=\"addressProofUploadCheck\"><i>Uploaded Successfully</i></p>\r\n\r\n      </div>\r\n      <p class=\"small text-danger text-center mt-2\" *ngIf=\"proofCheck\">Upload Both Id And Address Proof</p>\r\n      <div class=\"row \">\r\n        <div class=\"col-7\">\r\n          <button (click)=\"navigateHome()\" type=\"button\" class=\"btn btn-success btn-sm skip-btn\">Skip</button>\r\n        </div>\r\n        <div class=\"col-5\">\r\n          <button type=\"submit\" class=\"btn btn-success btn-sm update-btn\">Next</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_sellerdetails_sellerdetails_module_ts.js.map