"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab1_tab1_module_ts"],{

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

/***/ 2580:
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageRoutingModule": () => (/* binding */ Tab1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 6923);




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page,
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ 2168:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageModule": () => (/* binding */ Tab1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 6923);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1-routing.module */ 2580);








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab1PageRoutingModule
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page]
    })
], Tab1PageModule);



/***/ }),

/***/ 6923:
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1Page": () => (/* binding */ Tab1Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page.html?ngResource */ 3852);
/* harmony import */ var _tab1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.page.scss?ngResource */ 8165);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _shared_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/http.service */ 8191);








let Tab1Page = class Tab1Page {
    constructor(platform, toastCtrl, http, router, menu, route, navCtrl) {
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.router = router;
        this.menu = menu;
        this.navCtrl = navCtrl;
        this.StoreName = localStorage.getItem("StoreName");
        this.listOfCat = [];
        this.offerCount = 0;
        this.viewsCount = 0;
        this.offerObj = {
            card: "false",
            form: "true"
        };
        this.listOfSubCat = [];
        this.listOfProduct = [];
        route.params.subscribe(val => {
            this.StoreName = localStorage.getItem("StoreName");
            this.offersCount();
            this.viewCount();
            this.list();
        });
    }
    ngOnInit() {
    }
    //Naviagtions
    notification() {
        this.router.navigate(['/notification']);
    }
    showToast(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                message: message,
                duration: 2000,
                position: 'middle'
            });
            toast.present();
        });
    }
    myproducts() {
        this.router.navigate(['/myproducts']);
    }
    list() {
        this.listOfCat = [];
        this.http.get('/product_count').subscribe((response) => {
            console.log(response);
            this.listOfSubCat = response.records;
        }, (error) => {
            console.log(error);
        });
    }
    listProduct() {
        this.listOfProduct = [];
        for (var i = 0; i < this.listOfSubCat.length; i++) {
            var obj = {
                subcategory: this.listOfSubCat[i]
            };
            console.log(obj);
            this.http.postFormData('/read_product', obj).subscribe((response) => {
                for (var i = 0; i < response.records.length; i++) {
                    this.listOfProduct.push(response.records[i].tbid);
                    console.log(this.listOfProduct);
                }
            }, (error) => {
                console.log(error);
            });
        }
    }
    offers() {
        this.router.navigate(['/tabs/tab4']);
    }
    offersCount() {
        this.http.get('/read_all_offer').subscribe((response) => {
            this.offerCount = response.records.length;
        }, (error) => {
            console.log(error);
        });
    }
    viewCount() {
        this.http.get('/alarm_count').subscribe((response) => {
            this.viewsCount = response.store_alarm_count + response.product_alarm_count;
            console.log(this.viewsCount);
        }, (error) => {
            console.log(error);
        });
    }
    views() {
        this.router.navigate(['/tabs/tab2']);
    }
    searchPage() {
        this.router.navigate(['/searchpage']);
    }
};
Tab1Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _shared_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.MenuController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController }
];
Tab1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-tab1',
        template: _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab1Page);



/***/ }),

/***/ 8165:
/*!************************************************!*\
  !*** ./src/app/tab1/tab1.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "@import url(\"https://fonts.googleapis.com/css2?family=Quicksand&display=swap\");\n.dot {\n  margin: 15px;\n  margin-top: 0 !important;\n  height: 60%;\n  width: 75%;\n  background-color: var(--ion-color-light);\n  border-radius: 10%;\n  display: inline-block;\n  box-shadow: 0px 5px 17px -7px black;\n}\n.welcome {\n  color: var(--ion-color-secondary-shade);\n  font-size: 18px;\n  text-align: center;\n}\n#map_canvas {\n  width: 100%;\n  height: 80vh;\n}\n.count {\n  padding: 25px;\n  text-align: center;\n  color: var(--ion-color-primary);\n  font-size: 25px;\n  font-family: \"Quicksand\", sans-serif !important;\n}\n.views {\n  margin-top: -10px !important;\n  text-align: center;\n  color: var(--ion-color-secondary-shade);\n}\n.offer-btn {\n  margin: 15px;\n  margin-top: 0 !important;\n  background-color: var(--ion-color-secondary);\n  border: 1px solid #fff;\n}\n.myproducts-btn {\n  margin: 15px;\n  color: var(--ion-color-light);\n  border-radius: 5px !important;\n  text-align: center !important;\n  background: var(--ion-color-secondary);\n  border: 1px solid #0D0D0D;\n  border-radius: 5px;\n}\nion-list {\n  background-color: var(--ion-color-light) !important;\n}\nion-item {\n  background-color: var(--ion-color-light) !important;\n}\n.card {\n  background-color: var(--ion-color-light);\n  height: 35px;\n  text-align: center;\n  border: 1px solid #fff;\n  border-radius: 5px;\n  box-shadow: 2px 2px 2px 2px #ccc;\n  width: 96% !important;\n  margin: 5px;\n}\n.myproduct-div {\n  background-color: var(--ion-color-light);\n  border: 1px solid #fff;\n  border-radius: 8px;\n  box-shadow: 2px 2px 2px 2px #ccc;\n  width: 96% !important;\n  margin: 5px;\n  box-shadow: 0 0 3px #ccc;\n  border: 1px solid #fff;\n}\nion-chip {\n  box-shadow: none !important;\n}\nion-content {\n  background-color: var(--ion-color-light) !important;\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n}\nion-content::-webkit-scrollbar {\n  display: none;\n}\n/* Always set the map height explicitly to define the size of the div\n     * element that contains the map. */\n#map {\n  height: 100%;\n}\n/* Optional: Makes the sample page fill the window. */\nhtml,\nbody {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n}\n#description {\n  font-family: Roboto;\n  font-size: 15px;\n  font-weight: 300;\n}\n#infowindow-content .title {\n  font-weight: bold;\n}\n#infowindow-content {\n  display: none;\n}\n#map #infowindow-content {\n  display: inline;\n}\n.pac-card {\n  background-color: var(--ion-color-light);\n  border: 0;\n  border-radius: 2px;\n  box-shadow: 0 1px 4px -1px rgba(0, 0, 0, 0.3);\n  margin: 10px;\n  padding: 0 0.5em;\n  font: 400 18px Roboto, Arial, sans-serif;\n  overflow: hidden;\n  font-family: Roboto;\n  padding: 0;\n}\n#pac-container {\n  padding-bottom: 12px;\n  margin-right: 12px;\n}\n.pac-controls {\n  display: inline-block;\n  padding: 5px 11px;\n}\n.pac-controls label {\n  font-family: Roboto;\n  font-size: 13px;\n  font-weight: 300;\n}\n#pac-input {\n  background-color: var(--ion-color-light);\n  font-family: Roboto;\n  font-size: 15px;\n  font-weight: 300;\n  margin-left: 12px;\n  padding: 0 11px 0 13px;\n  text-overflow: ellipsis;\n  width: 400px;\n}\n#pac-input:focus {\n  border-color: #4d90fe;\n}\n#title {\n  color: var(--ion-color-light);\n  background-color: #4d90fe;\n  font-size: 25px;\n  font-weight: 500;\n  padding: 6px 12px;\n}\n#target {\n  width: 345px;\n}\n.circle {\n  position: relative;\n  width: 60%;\n  padding-bottom: 50%;\n  box-shadow: 1px 1px 1px 2px #ccc;\n  background: var(--ion-color-light);\n  border-radius: 8px;\n  margin: auto !important;\n}\n.circle h3 {\n  position: absolute;\n  color: var(--ion-color-primary);\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  margin: 0;\n}\n.signin-div {\n  background: rgba(128, 120, 120, 0.18);\n  border-radius: 5px;\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n  -webkit-backdrop-filter: blur(8.2px);\n          backdrop-filter: blur(8.2px);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLDhFQUFBO0FBRVI7RUFDSSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHdDQUFBO0VBRUEsa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1DQUFBO0FBREo7QUFLRTtFQUNFLHVDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBRko7QUFLRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBRko7QUFJRTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLCtDQUFBO0FBRE47QUFHRTtFQUNJLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1Q0FBQTtBQUFOO0FBRUU7RUFDRSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSw0Q0FBQTtFQUVBLHNCQUFBO0FBQUo7QUFFRTtFQUNFLFlBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQ0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUNFO0VBQ0UsbURBQUE7QUFFSjtBQUFFO0VBQ0UsbURBQUE7QUFHSjtBQURFO0VBQ0Usd0NBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUFJSjtBQUZFO0VBQ0Usd0NBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFHQSx3QkFBQTtFQUNBLHNCQUFBO0FBS0o7QUFGRTtFQUNFLDJCQUFBO0FBS0o7QUFIRTtFQUNFLG1EQUFBO0VBS0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFFSjtBQURJO0VBQ0ksYUFBQTtBQUdSO0FBRUU7dUNBQUE7QUFFRjtFQUNFLFlBQUE7QUFDRjtBQUVBLHFEQUFBO0FBQ0E7O0VBRUUsWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBQ0Y7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0Y7QUFFQTtFQUNFLGlCQUFBO0FBQ0Y7QUFFQTtFQUNFLGFBQUE7QUFDRjtBQUVBO0VBQ0UsZUFBQTtBQUNGO0FBRUE7RUFDRSx3Q0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLDZDQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0NBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQUNGO0FBRUE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7QUFDRjtBQUVBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDRjtBQUVBO0VBQ0Usd0NBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFDRjtBQUVBO0VBQ0UscUJBQUE7QUFDRjtBQUVBO0VBQ0UsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7QUFFQTtFQUNFLFlBQUE7QUFDRjtBQUVBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQUNGO0FBQ0E7RUFDRSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsUUFBQTtFQUFTLFNBQUE7RUFDVCxnQ0FBQTtFQUNBLFNBQUE7QUFHRjtBQUFBO0VBQ0UscUNBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0VBQ0Esb0NBQUE7VUFBQSw0QkFBQTtFQUNBLDBDQUFBO0FBR0YiLCJmaWxlIjoidGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1RdWlja3NhbmQmZGlzcGxheT1zd2FwJyk7XG5cbi5kb3Qge1xuICAgIG1hcmdpbjoxNXB4O1xuICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDYwJTtcbiAgICB3aWR0aDogNzUlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodClcbiAgICA7XG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDE3cHggLTdweCByZ2JhKDAsIDAsIDAsIDUuNSk7XG4gIH1cblxuXG4gIC53ZWxjb21le1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlKTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICAjbWFwX2NhbnZhcyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA4MHZoO1xuICB9XG4gIC5jb3VudHtcbiAgICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnZpZXdze1xuICAgICAgbWFyZ2luLXRvcDogIC0xMHB4ICFpbXBvcnRhbnQ7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZSk7XG4gIH1cbiAgLm9mZmVyLWJ0bntcbiAgICBtYXJnaW46MTVweDtcbiAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSlcbiAgICA7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjZmZmO1xuICB9XG4gIC5teXByb2R1Y3RzLWJ0bntcbiAgICBtYXJnaW46MTVweDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiAgdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjMEQwRDBEO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgfVxuICBpb24tbGlzdHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KSAhaW1wb3J0YW50O1xuICB9XG4gIGlvbi1pdGVte1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCkgICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmNhcmR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KSA7XG4gICAgaGVpZ2h0OjM1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlcjoxcHggc29saWQgI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMnB4ICNjY2M7XG4gICAgd2lkdGg6OTYlICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOjVweDtcbiAgfVxuICAubXlwcm9kdWN0LWRpdntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpIDtcbiAgICBib3JkZXI6MXB4IHNvbGlkICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDJweCAjY2NjO1xuICAgIHdpZHRoOjk2JSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjo1cHg7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDAgM3B4ICNjY2M7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgM3B4ICNjY2M7XG4gICAgYm94LXNoYWRvdzogMCAwIDNweCAjY2NjO1xuICAgIGJvcmRlcjoxcHggc29saWQgI2ZmZjtcbiAgICBcbiAgfVxuICBpb24tY2hpcHtcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbiAgaW9uLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0taW9uLWNvbG9yLWxpZ2h0KSAgIWltcG9ydGFudDtcbiAgICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmZmXG4gICAgLy8gMCUsICNkMWYyZTdcbiAgICAvLyAxMDAlKSAhaW1wb3J0YW50O1xuXG4gICAgLS1vZmZzZXQtYm90dG9tOiBhdXRvIWltcG9ydGFudDtcbiAgICAtLW92ZXJmbG93OiBoaWRkZW47XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuXG5cbiAgLyogQWx3YXlzIHNldCB0aGUgbWFwIGhlaWdodCBleHBsaWNpdGx5IHRvIGRlZmluZSB0aGUgc2l6ZSBvZiB0aGUgZGl2XG4gICAgICAgKiBlbGVtZW50IHRoYXQgY29udGFpbnMgdGhlIG1hcC4gKi9cbiNtYXAge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi8qIE9wdGlvbmFsOiBNYWtlcyB0aGUgc2FtcGxlIHBhZ2UgZmlsbCB0aGUgd2luZG93LiAqL1xuaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuI2Rlc2NyaXB0aW9uIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4jaW5mb3dpbmRvdy1jb250ZW50IC50aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4jaW5mb3dpbmRvdy1jb250ZW50IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI21hcCAjaW5mb3dpbmRvdy1jb250ZW50IHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG4ucGFjLWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpIDtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgbWFyZ2luOiAxMHB4O1xuICBwYWRkaW5nOiAwIDAuNWVtO1xuICBmb250OiA0MDAgMThweCBSb2JvdG8sIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBwYWRkaW5nOiAwO1xufVxuXG4jcGFjLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG59XG5cbi5wYWMtY29udHJvbHMge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDVweCAxMXB4O1xufVxuXG4ucGFjLWNvbnRyb2xzIGxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4jcGFjLWlucHV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBtYXJnaW4tbGVmdDogMTJweDtcbiAgcGFkZGluZzogMCAxMXB4IDAgMTNweDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdpZHRoOiA0MDBweDtcbn1cblxuI3BhYy1pbnB1dDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogIzRkOTBmZTtcbn1cblxuI3RpdGxlIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCkgO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGQ5MGZlO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xufVxuXG4jdGFyZ2V0IHtcbiAgd2lkdGg6IDM0NXB4O1xufVxuXG4uY2lyY2xle1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgd2lkdGg6NjAlO1xuICBwYWRkaW5nLWJvdHRvbTo1MCU7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IDJweCAjY2NjO1xuICBiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1saWdodCkgO1xuICBib3JkZXItcmFkaXVzOjhweDtcbiAgbWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7XG59XG4uY2lyY2xlIGgze1xuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnkpIDtcbiAgdG9wOjUwJTsgbGVmdDo1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBtYXJnaW46MDtcbn1cblxuLnNpZ25pbi1kaXZ7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTI4LCAxMjAsIDEyMCwgMC4xOCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMCA0cHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4LjJweCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgXG4gIFxufVxuIl19 */";

/***/ }),

/***/ 3852:
/*!************************************************!*\
  !*** ./src/app/tab1/tab1.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<!------------ Header  ---------------->\n<ion-toolbar color=\"light\">\n  <ion-buttons slot=\"start\">\n    <ion-menu-button style=\"margin-top:15px;color:#121212\" autoHide=\"false\">\n      <svg width=\"34\" height=\"34\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M5 7H19\" stroke=\"#121212\" stroke-width=\"2\" stroke-linecap=\"round\" />\n        <path d=\"M5 12H15\" stroke=\"#121212\" stroke-width=\"2\" stroke-linecap=\"round\" />\n        <path d=\"M5 17H11\" stroke=\"#121212\" stroke-width=\"2\" stroke-linecap=\"round\" />\n      </svg>\n    </ion-menu-button>\n  </ion-buttons>\n\n  <div class=\"row\">\n    <div class=\"col-4\">\n      <h5 style=\"margin-top:10px\"><b></b></h5>\n    </div>\n    <div class=\"col-8  mx-4\" style=\"text-align: right;width: 90%;\">\n      <svg (click)=\"notification()\" style=\"margin:3px;\" width=\"30\" height=\"34\" viewBox=\"0 0 24 24\" fill=\"none\"\n        xmlns=\"http://www.w3.org/2000/svg\">\n        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\n          d=\"M13.7942 3.29494C13.2296 3.10345 12.6258 3 12 3C9.1535 3 6.7622 5.14032 6.44786 7.96942L6.19605 10.2356L6.1896 10.2933C6.06065 11.417 5.69489 12.5005 5.11646 13.4725L5.08667 13.5222L4.50863 14.4856C3.98408 15.3599 3.7218 15.797 3.77842 16.1559C3.8161 16.3946 3.93899 16.6117 4.12435 16.7668C4.40292 17 4.9127 17 5.93224 17H18.0678C19.0873 17 19.5971 17 19.8757 16.7668C20.061 16.6117 20.1839 16.3946 20.2216 16.1559C20.2782 15.797 20.0159 15.3599 19.4914 14.4856L18.9134 13.5222L18.8836 13.4725C18.4273 12.7059 18.1034 11.8698 17.9236 10.9994C15.1974 10.9586 13 8.73592 13 6C13 5.00331 13.2916 4.07473 13.7942 3.29494ZM16.2741 4.98883C16.0999 5.28551 16 5.63109 16 6C16 6.94979 16.6621 7.74494 17.5499 7.94914C17.4205 6.82135 16.9608 5.80382 16.2741 4.98883Z\"\n          fill=\"black\" />\n        <path\n          d=\"M9 17C9 17.394 9.0776 17.7841 9.22836 18.1481C9.37913 18.512 9.6001 18.8427 9.87868 19.1213C10.1573 19.3999 10.488 19.6209 10.8519 19.7716C11.2159 19.9224 11.606 20 12 20C12.394 20 12.7841 19.9224 13.1481 19.7716C13.512 19.6209 13.8427 19.3999 14.1213 19.1213C14.3999 18.8427 14.6209 18.512 14.7716 18.1481C14.9224 17.7841 15 17.394 15 17L12 17H9Z\"\n          fill=\"black\" />\n        <circle cx=\"18\" cy=\"6\" r=\"2.5\" fill=\"#eb154b\" stroke=\"#eb154b\" />\n      </svg>\n\n\n    </div>\n  </div>\n</ion-toolbar>\n\n<ion-content class=\"bg-class\" [fullscreen]=\"true\">\n\n  <div class=\"container\">\n    <div class=\"signin-div mt-3 mb-3\">\n      <p class=\"welcome mt-3\"><b> <span style=\"font-size: 20px;\">Welcome Back</span> <br><span style=\"font-size: 17px;\">\n            {{StoreName}} store !</span></b></p>\n      <div class=\"row\">\n        <div (click)=\"offers()\" style=\"cursor: pointer;\" class=\"col-6 \">\n          <div class=\"circle\">\n            <h3>{{offerCount}}</h3>\n          </div>\n\n        </div>\n        <div (click)=\"views()\" style=\"cursor: pointer;\" class=\"col-6\">\n          <div class=\"circle\">\n            <h3>{{viewsCount}}</h3>\n          </div>\n\n        </div>\n\n        <div class=\"col-6 mt-4\">\n          <p class=\"views \">Offers</p>\n        </div>\n\n        <div class=\"col-6 mt-4\">\n          <p class=\"views\"> Views</p>\n        </div>\n\n      </div>\n    </div>\n\n\n\n    <div class=\"signin-div mt-1 \">\n      <!-- <h5 style=\"margin: 20px;color: #5C5C5C;\"> <b>My Products:</b></h5> -->\n\n\n\n\n      <div class=\"container mt-4\">\n        <ion-chip *ngFor=\"let list of listOfSubCat\"\n          style=\"color: #122112;background-color: #fffcfa; font-size: 12px;font-weight: 450;\">\n          <ion-label>{{list.subcategory}} <span style=\"color:#ffff\">({{list.product_count}})</span></ion-label>\n        </ion-chip>\n      </div>\n\n      <div class=\"col-12 mt-2 mb-4\" style=\"text-align: center;font-size: 18px;\">\n\n        <ion-button style=\"width: 55%;\" class=\"secondarySmallBtn\" color=\"none\" (click)=\"myproducts()\">\n          <svg style=\"margin-top: -2px;margin:4px\" width=\"14\" height=\"12\" viewBox=\"0 0 20 22\" fill=\"none\"\n            xmlns=\"http://www.w3.org/2000/svg\">\n            <path\n              d=\"M10 1.375C10.9472 1.375 11.8556 1.73716 12.5254 2.38182C13.1952 3.02648 13.5714 3.90082 13.5714 4.8125V5.5H6.42857V4.8125C6.42857 3.90082 6.80485 3.02648 7.47462 2.38182C8.14439 1.73716 9.0528 1.375 10 1.375V1.375ZM15 5.5V4.8125C15 3.53615 14.4732 2.31207 13.5355 1.40955C12.5979 0.50703 11.3261 0 10 0C8.67392 0 7.40215 0.50703 6.46447 1.40955C5.52678 2.31207 5 3.53615 5 4.8125V5.5H0V19.25C0 19.9793 0.30102 20.6788 0.836838 21.1945C1.37266 21.7103 2.09938 22 2.85714 22H17.1429C17.9006 22 18.6273 21.7103 19.1632 21.1945C19.699 20.6788 20 19.9793 20 19.25V5.5H15Z\"\n              fill=\"white\" />\n          </svg>\n          My Products\n        </ion-button>\n\n\n      </div>\n    </div>\n  </div>\n\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_tab1_tab1_module_ts.js.map