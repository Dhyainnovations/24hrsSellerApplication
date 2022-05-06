"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_edit-profile_edit-profile_module_ts"],{

/***/ 1871:
/*!*************************************************************!*\
  !*** ./src/app/edit-profile/edit-profile-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProfilePageRoutingModule": () => (/* binding */ EditProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _edit_profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-profile.page */ 2613);




const routes = [
    {
        path: '',
        component: _edit_profile_page__WEBPACK_IMPORTED_MODULE_0__.EditProfilePage
    }
];
let EditProfilePageRoutingModule = class EditProfilePageRoutingModule {
};
EditProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditProfilePageRoutingModule);



/***/ }),

/***/ 1241:
/*!*****************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProfilePageModule": () => (/* binding */ EditProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-profile-routing.module */ 1871);
/* harmony import */ var _edit_profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-profile.page */ 2613);







let EditProfilePageModule = class EditProfilePageModule {
};
EditProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditProfilePageRoutingModule
        ],
        declarations: [_edit_profile_page__WEBPACK_IMPORTED_MODULE_1__.EditProfilePage]
    })
], EditProfilePageModule);



/***/ }),

/***/ 2613:
/*!***************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProfilePage": () => (/* binding */ EditProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _edit_profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-profile.page.html?ngResource */ 1481);
/* harmony import */ var _edit_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-profile.page.scss?ngResource */ 8481);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _shared_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/http.service */ 8191);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);








let EditProfilePage = class EditProfilePage {
    constructor(router, http, toastCtrl, route) {
        this.router = router;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.storeName = localStorage.getItem("StoreName");
        this.user_tbid = localStorage.getItem("tbid");
        this.EmailID = localStorage.getItem("EmailID");
        this.sellerDetails = [];
        this.listOfCat = [];
        this.imageSize = false;
        this.logoUploadCheck = false;
        this.citys = localStorage.getItem("location");
        this.sellerAllDetails();
    }
    ;
    ngOnInit() {
        this.sellerAllDetails();
    }
    backToprivious() {
        this.router.navigate(['/tabs/tab5']);
    }
    mailID(data) {
        this.EmailID = data;
    }
    sellerAllDetails() {
        this.http.get('/seller_details').subscribe((response) => {
            if (response.success == "true") {
                console.log(response);
                this.sellerDetails = response.records;
                console.log(this.sellerDetails);
                this.store_category_tbid = response.records.store_category_id;
                this.address_line_1 = response.records.address_line_1;
                this.address_line_2 = response.records.address_line_2;
                this.citys = response.records.city;
                this.store_logo = response.records.store_logo;
                this.states = response.records.city;
                this.pincodes = response.records.pincode;
                if (response.records.store_category == "" || response.records.store_category == null) {
                    this.store_categoryNotExist = true;
                    this.store_categoryExist = false;
                    this.store_category = "Not Available";
                }
                else {
                    this.store_category = response.records.store_category;
                    this.store_categoryExist = true;
                    this.store_categoryNotExist = false;
                }
                if (response.records.city == "" || response.records.city == null) {
                    this.location = "Not Available";
                }
                else {
                    this.location = response.records.city;
                }
                if (response.records.store_logo == "https://dhya.in/24Hrs/images/seller/store_logo/") {
                    this.noimagefound = true;
                    this.imagefound = false;
                }
                else {
                    this.storelogo = response.records.store_logo;
                    this.noimagefound = false;
                    this.imagefound = true;
                }
            }
        }, (error) => {
            console.log(error);
        });
        this.list();
    }
    list() {
        this.http.get('/list_store_category').subscribe((response) => {
            console.log(response);
            this.listOfCat = response.records;
        }, (error) => {
            console.log(error);
        });
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
            const reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = (_event) => {
                this.storelogo = reader.result;
            };
        }
    }
    updateProfile() {
        localStorage.setItem("location", this.citys);
        localStorage.setItem("EmailID", this.EmailID);
        localStorage.setItem("StoreName", this.storeName);
        //Update-Store-Logo
        const formdata = new FormData();
        formdata.append("tbid", this.user_tbid);
        formdata.append("store_logo", this.selectedFile);
        if (this.selectedFile) {
            this.http.postFormData('/seller_update_store_logo', formdata).subscribe((response) => {
                if (response.success == "true") {
                    console.log(response);
                }
            }, (error) => {
                console.log(error);
            });
        }
        const sellerdetailformdata = new FormData();
        sellerdetailformdata.append("tbid", this.user_tbid);
        sellerdetailformdata.append("store_address", this.storeName + "," + this.citys);
        sellerdetailformdata.append("address_line_1", this.address_line_1);
        sellerdetailformdata.append("address_line_2", this.address_line_2);
        sellerdetailformdata.append("city", this.citys);
        sellerdetailformdata.append("store_category", this.store_category_tbid);
        sellerdetailformdata.append("state", this.states);
        sellerdetailformdata.append("pincode", this.pincodes);
        sellerdetailformdata.append("email_id", this.EmailID);
        sellerdetailformdata.append("store_name", this.storeName);
        this.http.postFormData("/seller_update_profile", sellerdetailformdata).subscribe((response) => {
            console.log(response);
            this.router.navigate(['/tabs/tab5']);
        }, (error) => {
            console.log(error);
        });
    }
    addressline_1(data) {
        this.address_line_1 = data;
    }
    addressline_2(data) {
        this.address_line_2 = data;
    }
    city(data) {
        this.citys = data;
    }
    state(data) {
        this.states = data;
    }
    pincode(data) {
        this.pincodes = data;
    }
    StoreCategory(data) {
        this.store_category_tbid = data.category;
    }
};
EditProfilePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _shared_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute }
];
EditProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-edit-profile',
        template: _edit_profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_edit_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EditProfilePage);



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

/***/ 8481:
/*!****************************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "input[type=text] {\n  font-size: 14px;\n  margin: 0 0px;\n  margin-top: -12px;\n  margin-left: -20px;\n  margin-bottom: 2px;\n  width: 100%;\n  box-sizing: border-box;\n  border: none;\n  background-color: #fff;\n  border-bottom: 2px solid var(--ion-color-primary);\n}\n\n.editprofile {\n  width: 155px;\n  height: 150px;\n  border-radius: 50%;\n}\n\ninput[type=number] {\n  font-size: 14px;\n  margin: 0 5px;\n  margin-top: -12px;\n  margin-left: -20px;\n  margin-bottom: 2px;\n  width: 100%;\n  box-sizing: border-box;\n  border: none;\n  background-color: #fff;\n  border-bottom: 2px solid var(--ion-color-primary);\n}\n\ninput[type=file] {\n  display: none;\n}\n\n.infoIcon {\n  position: relative;\n  width: 10px !important;\n  top: 0;\n}\n\n.container {\n  width: 98% !important;\n  margin: auto !important;\n  background: var(--ion-color-light) !important;\n  border-radius: 5px;\n  box-shadow: 2px 2px 2px 2px #d3d3d3;\n  -webkit-backdrop-filter: blur(8.2px) !important;\n          backdrop-filter: blur(8.2px) !important;\n  border: 1px solid rgba(255, 255, 255, 0.3) !important;\n}\n\n.extraInfo {\n  position: absolute;\n  color: var(--ion-color-light);\n  background-color: #2c2c2ce7;\n  border-radius: 5px;\n  padding: 10px 10px;\n  width: 225px;\n  text-align: center;\n  visibility: hidden;\n  font-size: 10px;\n  z-index: 1;\n}\n\n.infoIcon:hover .extraInfo {\n  visibility: visible;\n}\n\nselect {\n  border: 1px solid #fff;\n  border-radius: 0 !important;\n  margin-left: 5px;\n  border-bottom: 2px solid var(--ion-color-primary) !important;\n}\n\ninput:focus {\n  outline: none !important;\n  border-bottom: 2px solid var(--ion-color-success) !important;\n}\n\n.update-btn {\n  border-radius: 5px !important;\n  background: var(--ion-color-primary);\n  color: var(--ion-color-light);\n  height: 25px;\n  width: 25%;\n  text-align: center;\n  border: 1px solid #fff;\n  font-size: 12px !important;\n  padding: 3px;\n  margin: 15px !important;\n}\n\n.cancel-btn {\n  border-radius: 5px !important;\n  background: var(--ion-color-secondary);\n  color: var(--ion-color-light);\n  height: 25px;\n  width: 25%;\n  text-align: center;\n  border: 1px solid #fff;\n  font-size: 12px !important;\n  padding: 3px;\n  margin: 15px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGlEQUFBO0FBQ0o7O0FBR0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBQUY7O0FBR0U7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGlEQUFBO0FBQUo7O0FBR0U7RUFDRSxhQUFBO0FBQUo7O0FBR0U7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsTUFBQTtBQUFKOztBQUdFO0VBQ0UscUJBQUE7RUFDRix1QkFBQTtFQUNBLDZDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtFQUNBLCtDQUFBO1VBQUEsdUNBQUE7RUFDQSxxREFBQTtBQUFGOztBQUdFO0VBQ0Usa0JBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUFBSjs7QUFHRTtFQUNFLG1CQUFBO0FBQUo7O0FBSUU7RUFDRSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0REFBQTtBQURKOztBQUlFO0VBQ0Usd0JBQUE7RUFDQSw0REFBQTtBQURKOztBQUlFO0VBQ0UsNkJBQUE7RUFDQSxvQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUFESjs7QUFJRTtFQUNFLDZCQUFBO0VBQ0Esc0NBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBREoiLCJmaWxlIjoiZWRpdC1wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0W3R5cGU9dGV4dF0ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW46IDAgMHB4O1xuICAgIG1hcmdpbi10b3A6IC0xMnB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB9XG4gIFxuXG4uZWRpdHByb2ZpbGUge1xuICB3aWR0aCAgICAgICAgOiAxNTVweDtcbiAgaGVpZ2h0ICAgICAgIDogMTUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbiAgXG4gIGlucHV0W3R5cGU9bnVtYmVyXSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbjogMCA1cHg7XG4gICAgbWFyZ2luLXRvcDogLTEycHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIH1cbiAgXG4gIGlucHV0W3R5cGU9XCJmaWxlXCJdIHtcbiAgICBkaXNwbGF5OiBub25lOyAgXG4gIH1cblxuICAuaW5mb0ljb24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aCAgIDogMTBweCAhaW1wb3J0YW50O1xuICAgIHRvcCAgICAgOiAwO1xuICB9XG4gIFxuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogOTglICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogYXV0byAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdyAgICAgIDogMnB4IDJweCAycHggMnB4ICNkM2QzZDM7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4LjJweCkgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5leHRyYUluZm8ge1xuICAgIHBvc2l0aW9uICAgICAgICA6IGFic29sdXRlO1xuICAgIGNvbG9yICAgICAgICAgICA6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJjMmMyY2U3O1xuICAgIGJvcmRlci1yYWRpdXMgICA6IDVweDtcbiAgICBwYWRkaW5nICAgICAgICAgOiAxMHB4IDEwcHg7XG4gICAgd2lkdGggICAgICAgICAgIDogMjI1cHg7XG4gICAgdGV4dC1hbGlnbiAgICAgIDogY2VudGVyO1xuICAgIHZpc2liaWxpdHkgICAgICA6IGhpZGRlbjtcbiAgICBmb250LXNpemUgICAgICAgOiAxMHB4O1xuICAgIHotaW5kZXggICAgICAgICA6IDE7XG4gIH1cbiAgXG4gIC5pbmZvSWNvbjpob3ZlciAuZXh0cmFJbmZvIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG5cblxuICBzZWxlY3Qge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50OyAgICBcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgIWltcG9ydGFudDsgIFxuICB9XG5cbiAgaW5wdXQ6Zm9jdXMge1xuICAgIG91dGxpbmUgICAgICA6IG5vbmUgIWltcG9ydGFudDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpICFpbXBvcnRhbnQ7XG4gIH1cblxuICAudXBkYXRlLWJ0biB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZCAgIDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIGNvbG9yICAgICAgICA6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgaGVpZ2h0ICAgICAgIDogMjVweDtcbiAgICB3aWR0aCAgICAgICAgOiAyNSU7XG4gICAgdGV4dC1hbGlnbiAgIDogY2VudGVyO1xuICAgIGJvcmRlciAgICAgICA6IDFweCBzb2xpZCAjZmZmO1xuICAgIGZvbnQtc2l6ZSAgICA6IDEycHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nICAgICAgOiAzcHg7XG4gICAgbWFyZ2luICAgICAgIDogMTVweCAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAuY2FuY2VsLWJ0biB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZCAgIDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgY29sb3IgICAgICAgIDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICBoZWlnaHQgICAgICAgOiAyNXB4O1xuICAgIHdpZHRoICAgICAgICA6IDI1JTtcbiAgICB0ZXh0LWFsaWduICAgOiBjZW50ZXI7XG4gICAgYm9yZGVyICAgICAgIDogMXB4IHNvbGlkICNmZmY7XG4gICAgZm9udC1zaXplICAgIDogMTJweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmcgICAgICA6IDNweDtcbiAgICBtYXJnaW4gICAgICAgOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG5cblxuICAiXX0= */";

/***/ }),

/***/ 1481:
/*!****************************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <div style=\"margin-top: 15% !important;width: 93% !important;\" class=\"container\">\n    <div class=\"row \">\n      <div class=\"col-12 mt-3\">\n        <p class=\"edit-name\">Store logo <span class=\"infoIcon\">\n            <img src=\"assets/icon/i.png\" alt=\"info icon\" width=\"15px\">\n\n            <p class=\"extraInfo\">Upload Only\n              jpeg or png & Ratio 1:1</p>\n          </span>\n        </p>\n      </div>\n      <div class=\"row\" style=\"padding: 10px;\">\n        <div class=\"col-12 ion-text-center\">\n          <img class=\"editprofile\" src=\"{{store_logo}}\" alt=\"\" width=\"50%\" *ngIf=\"imagefound\">\n          <img class=\"editprofile\" src=\"../../assets/imagenotavilable.png\" alt=\"\" *ngIf=\"noimagefound\" width=\"50%\">\n        </div>\n\n\n        <ion-button style=\"width: 50%;margin: auto;\" [disabled]=\"otp == '' \" class=\"primarySmallOutlineBtn mt-3\" color=\"none\">\n          <label class=\"btn\" style=\"font-size: 13px;\" (change)=\"MediaFileSelected($event)\"\n         \n          type=\"submit\">\n          <svg width=\"30\" height=\"22\" viewBox=\"0 0 34 27\" fill=\"none\">\n            <path\n              d=\"M31.1667 0H8.5C6.93517 0 5.66667 1.25918 5.66667 2.8125V17.8125C5.66667 19.3658 6.93517 20.625 8.5 20.625H31.1667C32.7315 20.625 34 19.3658 34 17.8125V2.8125C34 1.25918 32.7309 0 31.1667 0ZM13.1691 3.75C14.2127 3.75 15.058 4.58965 15.058 5.625C15.058 6.66035 14.267 7.5 13.1691 7.5C12.1261 7.5 11.2802 6.66035 11.2802 5.625C11.2802 4.58965 12.1774 3.75 13.1691 3.75ZM29.1656 16.3828C29.0003 16.6875 28.6816 16.875 28.3333 16.875H11.3333C10.9778 16.875 10.6527 16.677 10.4916 16.3623C10.3305 16.0478 10.3609 15.6703 10.5702 15.385L14.7022 9.75996C14.8809 9.51563 15.1642 9.375 15.4653 9.375C15.767 9.375 16.0506 9.51803 16.2285 9.7602L17.5478 11.5567L21.2512 6.04242C21.374 5.7832 21.6691 5.625 22.0351 5.625C22.3507 5.625 22.6454 5.78156 22.8207 6.04248L29.119 15.4175C29.3132 15.7031 29.3309 16.0723 29.1656 16.3828ZM26.9167 23.4375H7.08333C4.73993 23.4375 2.83333 21.5449 2.83333 19.2188V5.15625C2.83333 4.38281 2.19878 3.75 1.41667 3.75C0.634549 3.75 0 4.38281 0 5.15625V19.2188C0 23.0977 3.17747 26.25 7.08333 26.25H26.9167C27.6988 26.25 28.3333 25.6201 28.3333 24.8438C28.3333 24.0674 27.7017 23.4375 26.9167 23.4375Z\"\n              fill=\"#EB154B\" />\n          </svg>\n          <input type=\"file\" class=\"\" name=\"image\" accept=\".jpeg,.png\">\n        </label></ion-button>\n        <p class=\"small text-success\" *ngIf=\"logoUploadCheck\"><i>Uploaded Successfully</i></p>\n        <p class=\"small text-danger\" *ngIf=\"imageSize\"><i>Uploaded File Size Should Not Exceed More Than 5Mb</i>\n        </p>\n\n\n\n      </div>\n\n\n\n      <!-- Store Name Change -->\n      <div class=\"col-6\">\n        <p class=\"edit-name\">Store Name :</p>\n      </div>\n      <div class=\"col-6\">\n        <input type=\"text\" [(ngModel)]=\"storeName\">\n      </div>\n      <!-- EmailChange -->\n      <div class=\"col-6\">\n        <p class=\"edit-name\">Email:</p>\n      </div>\n      <div class=\"col-6\">\n        <input type=\"text\" [ngModel]=\"EmailID\" (ngModelChange)=\"mailID($event)\">\n      </div>\n\n\n      <div class=\"col-5\">\n        <p>Store Category</p>\n      </div>\n\n\n      <div class=\"col-6\">\n        <form #categoryselect=\"ngForm\" (change)=\"StoreCategory(categoryselect.value)\">\n          <div class=\"select\">\n            <select ngModel placeholder=\"category\" name=\"category\">\n              <option *ngFor=\"let cat of listOfCat\" value=\"{{cat.tbid}}\">\n                {{cat.store_category}}</option>\n            </select>\n          </div>\n        </form>\n      </div>\n\n\n      <div class=\"col-6 \">Address Line 1</div>\n      <div class=\"col-6\">\n        <input [ngModel]=\"sellerDetails.address_line_1 == 'null' ? '': sellerDetails.address_line_1\" type=\"text\"\n          id=\"edit-field\" name=\"address_line_1\" placeholder=\"Enter Your Address\"\n          (ngModelChange)=\"addressline_1($event)\">\n      </div>\n      <div class=\"col-6\">Address Line 2</div>\n      <div class=\"col-6\">\n        <input [ngModel]=\"sellerDetails.address_line_2 == 'null' ? '': sellerDetails.address_line_2\" type=\"text\"\n          id=\"edit-field\" name=\"address_line_2\" placeholder=\"Enter Your Address\"\n          (ngModelChange)=\"addressline_2($event)\">\n      </div>\n      <div class=\"col-6\">City</div>\n      <div class=\"col-6\">\n        <input [ngModel]=\"sellerDetails.city == 'null' ? '': sellerDetails.city\" type=\"text\" id=\"edit-field\" name=\"city\"\n          placeholder=\"Enter Your City\" (ngModelChange)=\"city($event)\">\n      </div>\n      <div class=\"col-6\">State</div>\n      <div class=\"col-6\">\n        <input [ngModel]=\"sellerDetails.state == 'null' ? '': sellerDetails.state\" type=\"text\" id=\"edit-field\"\n          name=\"state\" placeholder=\"Enter Your State\" (ngModelChange)=\"state($event)\">\n      </div>\n      <div class=\"col-6\">Pincode</div>\n      <div class=\"col-6\">\n        <input [ngModel]=\"sellerDetails.pincode == 'null' ? '': sellerDetails.pincode\" type=\"text\" id=\"edit-field\"\n          name=\"pincode\" maxlength=\"6\" placeholder=\"Enter Your Pincode\" (ngModelChange)=\"pincode($event)\">\n      </div>\n\n      <div class=\"row mt-3\">\n        <div style=\"margin-left: -2% !important;\" class=\"col-6\">\n          <ion-button  (click)=\"backToprivious()\" style=\"width: 100%;\" class=\"secondarySmallBtn mb-4\" color=\"none\">\n            Cancel </ion-button>\n        </div>\n\n        <div class=\"col-6\">\n          <ion-button (click)=\"updateProfile()\" style=\"width: 100%;\" class=\"primarySmallBtn mb-4\" color=\"none\">\n            Update</ion-button>\n        </div>\n\n      </div>\n\n    </div>\n  </div>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_edit-profile_edit-profile_module_ts.js.map