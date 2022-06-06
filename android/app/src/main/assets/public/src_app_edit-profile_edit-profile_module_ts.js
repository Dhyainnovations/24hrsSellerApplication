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
                this.mobile_number = response.records.mobile_number;
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
            console.log(this.mobile_number);
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
        sellerdetailformdata.append("mobile_number", this.mobile_number);
        console.log(sellerdetailformdata);
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

module.exports = "input[type=text] {\n  font-size: 14px;\n  margin: 0 0px;\n  margin-top: -12px;\n  margin-left: -20px;\n  margin-bottom: 2px;\n  box-sizing: border-box;\n  border: none;\n  width: 100%;\n  background-color: #fff;\n  border-bottom: 2px solid var(--ion-color-primary);\n}\n\n.profileImageChange {\n  --border-radius: 50% !important;\n  --background: #EB154B ;\n  height: 35px;\n  width: 35px;\n}\n\n#circle {\n  background-color: #EB154B !important;\n  border-radius: 50%;\n  width: 13%;\n  height: 20%;\n  margin: 5px;\n  margin-top: 30%;\n  margin-left: -20%;\n  padding: 6px;\n}\n\n#pencil {\n  position: absolute;\n  top: 12% !important;\n  right: 25%;\n}\n\n.editprofile {\n  width: 155px;\n  height: 150px;\n  border-radius: 50%;\n}\n\ninput[type=number] {\n  font-size: 14px;\n  margin: 0 5px;\n  margin-top: -12px;\n  margin-left: -20px;\n  margin-bottom: 2px;\n  box-sizing: border-box;\n  border: none;\n  width: 100%;\n  background-color: #fff;\n  border-bottom: 2px solid var(--ion-color-primary);\n}\n\ninput[type=file] {\n  display: none;\n}\n\n.infoIcon {\n  position: relative;\n  width: 10px !important;\n  top: 0;\n}\n\n.container {\n  width: 100% !important;\n  margin: auto !important;\n  background: var(--ion-color-light) !important;\n  border-radius: 5px;\n  box-shadow: 2px 2px 2px 2px #d3d3d3;\n  -webkit-backdrop-filter: blur(8.2px) !important;\n          backdrop-filter: blur(8.2px) !important;\n  border: 1px solid rgba(255, 255, 255, 0.3) !important;\n}\n\n.extraInfo {\n  position: absolute;\n  color: var(--ion-color-light);\n  background-color: #2c2c2ce7;\n  border-radius: 5px;\n  padding: 10px 10px;\n  width: 225px;\n  text-align: center;\n  visibility: hidden;\n  font-size: 10px;\n  z-index: 1;\n}\n\n.infoIcon:hover .extraInfo {\n  visibility: visible;\n}\n\n.select {\n  border: 1px solid #fff;\n  border-radius: 0 !important;\n  margin-left: 8px;\n  width: 85% !important;\n  --width: 50% !important;\n}\n\nselect {\n  border: 1px solid #fff;\n  border-radius: 0 !important;\n  border-bottom: 2px solid var(--ion-color-primary) !important;\n}\n\ninput:focus {\n  outline: none !important;\n  border-bottom: 2px solid var(--ion-color-success) !important;\n}\n\n.update-btn {\n  border-radius: 5px !important;\n  background: var(--ion-color-primary);\n  color: var(--ion-color-light);\n  height: 25px;\n  width: 25%;\n  text-align: center;\n  border: 1px solid #fff;\n  font-size: 12px !important;\n  padding: 3px;\n  margin: 15px !important;\n}\n\n.cancel-btn {\n  border-radius: 5px !important;\n  background: var(--ion-color-secondary);\n  color: var(--ion-color-light);\n  height: 25px;\n  width: 25%;\n  text-align: center;\n  border: 1px solid #fff;\n  font-size: 12px !important;\n  padding: 3px;\n  margin: 15px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGlEQUFBO0FBQ0Y7O0FBRUE7RUFDRSwrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQUFGOztBQUdBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxpREFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLE1BQUE7QUFBRjs7QUFHQTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSwrQ0FBQTtVQUFBLHVDQUFBO0VBQ0EscURBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBQUY7O0FBR0E7RUFDRSxtQkFBQTtBQUFGOztBQUlBO0VBQ0Usc0JBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtBQURGOztBQUdBO0VBQ0Usc0JBQUE7RUFDQSwyQkFBQTtFQUdBLDREQUFBO0FBRkY7O0FBS0E7RUFDRSx3QkFBQTtFQUNBLDREQUFBO0FBRkY7O0FBS0E7RUFDRSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQUZGOztBQUtBO0VBQ0UsNkJBQUE7RUFDQSxzQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUFGRiIsImZpbGUiOiJlZGl0LXByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXRbdHlwZT10ZXh0XSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiAwIDBweDtcbiAgbWFyZ2luLXRvcDogLTEycHg7XG4gIG1hcmdpbi1sZWZ0OiAtMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOjEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5wcm9maWxlSW1hZ2VDaGFuZ2V7XG4gIC0tYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogI0VCMTU0QiA7XG4gIGhlaWdodDozNXB4O1xuICB3aWR0aDogMzVweDtcbn1cblxuI2NpcmNsZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VCMTU0QiAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAxMyU7XG4gIGhlaWdodDoyMCU7XG4gIG1hcmdpbjogNXB4O1xuICBtYXJnaW4tdG9wOiAzMCU7XG4gIG1hcmdpbi1sZWZ0OiAgLTIwJTtcbiAgcGFkZGluZzogNnB4O1xuXG59XG5cbiNwZW5jaWx7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOjEyJSAhaW1wb3J0YW50O1xuICByaWdodDoyNSU7XG59XG5cbi5lZGl0cHJvZmlsZSB7XG4gIHdpZHRoOiAxNTVweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG5pbnB1dFt0eXBlPW51bWJlcl0ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogMCA1cHg7XG4gIG1hcmdpbi10b3A6IC0xMnB4O1xuICBtYXJnaW4tbGVmdDogLTIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDoxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pbnB1dFt0eXBlPVwiZmlsZVwiXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5pbmZvSWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwcHggIWltcG9ydGFudDtcbiAgdG9wOiAwO1xufVxuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgbWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCkgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAycHggMnB4IDJweCAycHggI2QzZDNkMztcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDguMnB4KSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMykgIWltcG9ydGFudDtcbn1cblxuLmV4dHJhSW5mbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYzJjMmNlNztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gIHdpZHRoOiAyMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgei1pbmRleDogMTtcbn1cblxuLmluZm9JY29uOmhvdmVyIC5leHRyYUluZm8ge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG5cbi5zZWxlY3Qge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIHdpZHRoOiA4NSUgIWltcG9ydGFudDtcbiAgLS13aWR0aDogNTAlICFpbXBvcnRhbnQ7XG59XG5zZWxlY3Qge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIC8vIG1hcmdpbi1sZWZ0OiAtNHB4O1xuICBcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAhaW1wb3J0YW50O1xufVxuXG5pbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKSAhaW1wb3J0YW50O1xufVxuXG4udXBkYXRlLWJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBoZWlnaHQ6IDI1cHg7XG4gIHdpZHRoOiAyNSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDNweDtcbiAgbWFyZ2luOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jYW5jZWwtYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogMjUlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAzcHg7XG4gIG1hcmdpbjogMTVweCAhaW1wb3J0YW50O1xufSJdfQ== */";

/***/ }),

/***/ 1481:
/*!****************************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <div style=\"margin-top: 15% !important;width: 94% !important;\" class=\"container\">\n    <div class=\"row \">\n      <div class=\"col-12 mt-3\">\n        <p class=\"edit-name\">Store logo <span class=\"infoIcon\">\n            <img src=\"assets/icon/i.png\" alt=\"info icon\" width=\"15px\">\n\n            <p class=\"extraInfo\">Upload Only\n              jpeg or png & Ratio 1:1</p>\n          </span>\n        </p>\n      </div>\n      <div class=\"row\" style=\"padding: 10px;\">\n        <div class=\"col-12 ion-text-center\">\n          <img class=\"editprofile\" src=\"{{store_logo}}\" alt=\"\" width=\"50%\" *ngIf=\"imagefound\">\n          <img class=\"editprofile\" src=\"../../assets/imagenotavilable.png\" alt=\"\" *ngIf=\"noimagefound\" width=\"50%\">\n\n\n          <ion-button class=\"profileImageChange\"  style=\"margin-top: 20% !important;margin-left:-10% !important;\">\n\n            <label  style=\"font-size: 13px;\" (change)=\"MediaFileSelected($event)\" >\n\n              <svg  (change)=\"MediaFileSelected($event)\"  width=\"22\" height=\"20\" fill=\"#fff\" class=\"bi bi-pencil-fill\" viewBox=\"0 0 16 16\">\n                <path d=\"M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z\"/>\n              </svg>\n\n\n           \n              <input type=\"file\"  name=\"image\" accept=\".jpeg,.png\">\n            </label>\n\n           \n          </ion-button>\n\n        </div>\n        <p class=\"small text-success ion-text-center\" *ngIf=\"logoUploadCheck\"><i>Uploaded Successfully</i></p>\n        <p class=\"small text-danger ion-text-center\" *ngIf=\"imageSize\"><i>Uploaded File Size Should Not Exceed More Than 5Mb</i>\n        </p>\n\n\n\n      </div>\n\n\n\n      <!-- Store Name Change -->\n      <div class=\"col-6 mt-1\">\n        <p class=\"edit-name\">Store Name :</p>\n      </div>\n      <div class=\"col-6 mt-1\">\n        <input type=\"text\" [(ngModel)]=\"storeName\">\n      </div>\n      <!-- EmailChange -->\n      <div class=\"col-6 mt-1\">\n        <p class=\"edit-name\">Email:</p>\n      </div>\n      <div class=\"col-6 mt-1\">\n        <input type=\"text\" [ngModel]=\"EmailID\" (ngModelChange)=\"mailID($event)\">\n      </div>\n\n\n      <div class=\"col-5 mt-1\">\n        <p>Store Category</p>\n      </div>\n\n\n      <div class=\"col-7 mt-1\">\n        <form #categoryselect=\"ngForm\" (change)=\"StoreCategory(categoryselect.value)\">\n          <div class=\"select\">\n            <select style=\"color:black;\" ngModel placeholder=\"category\" name=\"category\">\n              <option disabled value=\"\"> {{store_category}}</option>\n              <option *ngFor=\"let cat of listOfCat\" value=\"{{cat.tbid}}\">\n                {{cat.store_category}}</option>\n            </select>\n          </div>\n        </form>\n      </div>\n\n\n      <div class=\"col-6 mt-1 \">Address Line 1</div>\n      <div class=\"col-6 mt-1\">\n        <input [ngModel]=\"sellerDetails.address_line_1 == 'null' ? '': sellerDetails.address_line_1\" type=\"text\"\n          id=\"edit-field\" name=\"address_line_1\" placeholder=\"Enter Your Address\"\n          (ngModelChange)=\"addressline_1($event)\">\n      </div>\n      <div class=\"col-6 mt-1\">Address Line 2</div>\n      <div class=\"col-6 mt-1\">\n        <input [ngModel]=\"sellerDetails.address_line_2 == 'null' ? '': sellerDetails.address_line_2\" type=\"text\"\n          id=\"edit-field\" name=\"address_line_2\" placeholder=\"Enter Your Address\"\n          (ngModelChange)=\"addressline_2($event)\">\n      </div>\n      <div class=\"col-6 mt-1\">City</div>\n      <div class=\"col-6 mt-1\">\n        <input [ngModel]=\"sellerDetails.city == 'null' ? '': sellerDetails.city\" type=\"text\" id=\"edit-field\" name=\"city\"\n          placeholder=\"Enter Your City\" (ngModelChange)=\"city($event)\">\n      </div>\n      <div class=\"col-6 mt-1\">State</div>\n      <div class=\"col-6 mt-1\">\n        <input [ngModel]=\"sellerDetails.state == 'null' ? '': sellerDetails.state\" type=\"text\" id=\"edit-field\"\n          name=\"state\" placeholder=\"Enter Your State\" (ngModelChange)=\"state($event)\">\n      </div>\n      <div class=\"col-6 mt-1\">Pincode</div>\n      <div class=\"col-6 mt-1\">\n        <input [ngModel]=\"sellerDetails.pincode == 'null' ? '': sellerDetails.pincode\" type=\"text\" id=\"edit-field\"\n          name=\"pincode\" maxlength=\"6\" placeholder=\"Enter Your Pincode\" (ngModelChange)=\"pincode($event)\">\n      </div>\n\n      <div class=\"row mt-3\">\n        <div class=\"col-6 ion-text-left\">\n          <ion-button (click)=\"backToprivious()\" style=\"width: 100%;\" class=\"secondarySmallBtn mb-4\" color=\"none\">\n            Cancel </ion-button>\n        </div>\n\n        <div class=\"col-6 ion-text-right\">\n          <ion-button (click)=\"updateProfile()\" style=\"width: 100%;\" class=\"primarySmallBtn mb-4\" color=\"none\">\n            Update</ion-button>\n        </div>\n\n      </div>\n\n    </div>\n  </div>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_edit-profile_edit-profile_module_ts.js.map