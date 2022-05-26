(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



const routes = [
    {
        path: 'tabs',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tabs/tabs.module */ 5564)).then(m => m.TabsPageModule)
    },
    {
        path: 'signinpage',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_http_service_ts-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("default-src_app_forget-password_otpverification_page_ts"), __webpack_require__.e("default-src_app_signin_signin_page_ts"), __webpack_require__.e("src_app_signin_signin_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./signin/signin.module */ 7445)).then(m => m.SigninPageModule)
    },
    {
        path: 'signuppage',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_http_service_ts-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("default-src_app_forget-password_otpverification_page_ts"), __webpack_require__.e("default-src_app_signin_signin_page_ts"), __webpack_require__.e("src_app_signup_signup_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./signup/signup.module */ 7648)).then(m => m.SignupPageModule)
    },
    {
        path: 'myproducts',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_myproducts_myproducts_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./myproducts/myproducts.module */ 3363)).then(m => m.MyproductsPageModule)
    },
    {
        path: 'support',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_http_service_ts-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("src_app_support_support_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./support/support.module */ 6758)).then(m => m.SupportPageModule)
    },
    {
        path: 'sellerdetailpage',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sellerdetails_sellerdetails_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./sellerdetails/sellerdetails.module */ 6516)).then(m => m.SellerdetailsPageModule)
    },
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_splashscreen_splashscreen_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./splashscreen/splashscreen.module */ 5481)).then(m => m.SplashscreenPageModule)
    },
    {
        path: 'myproductEditPage',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_http_service_ts-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("src_app_myproduct-edit_myproduct-edit_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./myproduct-edit/myproduct-edit.module */ 6093)).then(m => m.MyproductEditPageModule)
    },
    {
        path: 'addofferEditPage',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_http_service_ts-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("src_app_addoffer-edit_addoffer-edit_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./addoffer-edit/addoffer-edit.module */ 4329)).then(m => m.AddofferEditPageModule)
    },
    {
        path: 'terms-and-condition',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_terms-and-condition_terms-and-condition_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./terms-and-condition/terms-and-condition.module */ 7756)).then(m => m.TermsAndConditionPageModule)
    },
    {
        path: 'social-media-details',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_http_service_ts-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("src_app_social-media-details_social-media-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./social-media-details/social-media-details.module */ 930)).then(m => m.SocialMediaDetailsPageModule)
    },
    {
        path: 'notification',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_notification_notification_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./notification/notification.module */ 2154)).then(m => m.NotificationPageModule)
    },
    {
        path: 'forget-password',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_http_service_ts-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("default-src_app_forget-password_otpverification_page_ts"), __webpack_require__.e("src_app_forget-password_otpverification_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./forget-password/otpverification.module */ 1716)).then(m => m.OtpverificationPageModule)
    },
    {
        path: 'frequently-asked-questions',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_frequently-asked-questions_frequently-asked-questions_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./frequently-asked-questions/frequently-asked-questions.module */ 6284)).then(m => m.FrequentlyAskedQuestionsPageModule)
    },
    {
        path: 'otp',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_http_service_ts-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("src_app_otp_otp_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./otp/otp.module */ 1599)).then(m => m.OtpPageModule)
    },
    {
        path: 'searchpage',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_productsearch_productsearch_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./productsearch/productsearch.module */ 2170)).then(m => m.ProductsearchPageModule)
    },
    {
        path: 'offersearch',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_offersearch_offersearch_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./offersearch/offersearch.module */ 7506)).then(m => m.OffersearchPageModule)
    },
    {
        path: 'welcome',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_http_service_ts-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("default-src_app_forget-password_otpverification_page_ts"), __webpack_require__.e("default-src_app_signin_signin_page_ts"), __webpack_require__.e("src_app_welcome_welcome_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./welcome/welcome.module */ 2526)).then(m => m.WelcomePageModule)
    },
    {
        path: 'add-product-offer',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_http_service_ts-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("src_app_add-product-offer_add-product-offer_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./add-product-offer/add-product-offer.module */ 8362)).then(m => m.AddProductOfferPageModule)
    },
    {
        path: 'show-product-image',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_show-product-image_show-product-image_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./show-product-image/show-product-image.module */ 3752)).then(m => m.ShowProductImagePageModule)
    },
    {
        path: 'edit-profile',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_edit-profile_edit-profile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./edit-profile/edit-profile.module */ 1241)).then(m => m.EditProfilePageModule)
    },
    {
        path: 'ref',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_reference_reference_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./reference/reference.module */ 7696)).then(m => m.ReferencePageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);








let AppComponent = class AppComponent {
    constructor(_location, router, route, platform) {
        // App.addListener('backButton', () => {
        //   if (this.location == "home") {
        //     navigator['app'].exitApp();
        //     alert("exit")
        //   }
        //   else {
        //     this._location.back();
        //   }
        // });
        this._location = _location;
        this.router = router;
        this.platform = platform;
        this.appPages = [
            { title: 'Home', url: '/tabs/tab1', icon: 'assets/icon/home.PNG' },
            { title: 'My Products', url: 'myproducts', icon: 'assets/icon/myproducts.png' },
            { title: 'Promotion', url: '/tabs/tab2', icon: 'assets/icon/promotion.png' },
            { title: 'Offers', url: '/tabs/tab4', icon: 'assets/icon/offer.png' },
            { title: 'My Profile', url: '/tabs/tab5', icon: 'assets/icon/myprofile.png' },
            { title: 'Support', url: '/support', icon: 'assets/icon/support.png' },
            // { title: 'Log out', url: '/signinpage', icon:'assets/icon/logout.png' },
        ];
        this.labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
        this.activeItem = "home";
    }
    ngOnInit() {
        this.activeItem = "home";
    }
    close() {
        this.router.navigate(['/']);
    }
    home() {
        this.activeItem = "home";
        this.router.navigate(['/tabs']);
    }
    myproducts() {
        this.activeItem = "myproducts";
        this.router.navigate(['/myproducts']);
    }
    promotion() {
        this.activeItem = "promotion";
        this.router.navigate(['/tabs/tab2']);
    }
    Offers() {
        this.activeItem = "offers";
        this.router.navigate(['/tabs/tab4']);
    }
    myprofile() {
        this.activeItem = "myprofile";
        this.router.navigate(['/tabs/tab5']);
    }
    support() {
        this.activeItem = "support";
        this.router.navigate(['/support']);
    }
    logout() {
        this.activeItem = "home";
        localStorage.clear();
        this.router.navigate(['/welcome']);
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);










let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule.forRoot({ swipeBackEnabled: false }), _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicRouteStrategy }, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: true,
    baseUrl: 'https://dhya.in/24Hrs/api'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 8150);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		9632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 9259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-menu ion-content {\n  --background: var(--ion-color-light);\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, var(--ion-color-light));\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: #fff !important;\n  color: var(--ion-color-light);\n}\n\nion-list {\n  background: var(--ion-color-light) !important;\n}\n\nion-item.selected ion-label {\n  color: var(--ion-color-primary) !important;\n  font-size: 18px;\n  font-weight: 700;\n}\n\nion-item.selected .icon {\n  background-color: var(--ion-color-light) !important;\n  border-radius: 70% !important;\n}\n\nion-menu-button {\n  color: var(--ion-color-light) !important;\n}\n\nion-item {\n  --background: transparent !important;\n  margin: 18px !important;\n}\n\nion-label {\n  margin: 8px !important;\n  margin-top: -6px !important;\n  color: #37373a !important;\n}\n\nion-icon {\n  color: var(--ion-color-light) !important;\n}\n\nion-item {\n  font-weight: 600;\n  --border-color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9DQUFBO0FBQ0o7O0FBRUU7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtBQUNKOztBQUVFO0VBQ0UsbUJBQUE7QUFDSjs7QUFFRTs7RUFFRSxrQkFBQTtBQUNKOztBQUVFO0VBQ0UsMEVBQUE7QUFDSjs7QUFFRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0FBQUo7O0FBR0U7RUFDRSxlQUFBO0VBRUEsbUJBQUE7RUFFQSxjQUFBO0VBRUEsZ0JBQUE7QUFISjs7QUFNRTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUhKOztBQU1FO0VBQ0Usc0RBQUE7QUFISjs7QUFNRTtFQUNFLCtCQUFBO0FBSEo7O0FBTUU7RUFDRSxjQUFBO0FBSEo7O0FBTUU7RUFDRSxnQkFBQTtBQUhKOztBQU1FO0VBQ0Usc0JBQUE7QUFISjs7QUFNRTtFQUNFLG1CQUFBO0FBSEo7O0FBTUU7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBSEo7O0FBTUU7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFISjs7QUFNRTtFQUNFLCtCQUFBO0FBSEo7O0FBTUU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUhKOztBQU1FO0VBQ0Usa0JBQUE7QUFISjs7QUFNRTs7RUFFRSxrQkFBQTtFQUNBLG1CQUFBO0FBSEo7O0FBTUU7RUFDRSxrQkFBQTtBQUhKOztBQU1FO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtBQUhKOztBQUtFO0VBQ0UsNkNBQUE7QUFGSjs7QUFRSTtFQUNFLDBDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBTE47O0FBUUk7RUFDQyxtREFBQTtFQUNBLDZCQUFBO0FBTkw7O0FBU0U7RUFDRSx3Q0FBQTtBQU5KOztBQVFFO0VBQ0Usb0NBQUE7RUFDQSx1QkFBQTtBQUxKOztBQU9FO0VBQ0Usc0JBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0FBSko7O0FBT0U7RUFDRSx3Q0FBQTtBQUpKOztBQU1FO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtBQUhKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51IGlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7O1xuICB9XG4gIFxuICBpb24tbWVudS5tZCBpb24tY29udGVudCB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gICAgLS1wYWRkaW5nLWVuZDogOHB4O1xuICAgIC0tcGFkZGluZy10b3A6IDIwcHg7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgfVxuICBcbiAgaW9uLW1lbnUubWQgaW9uLWxpc3Qge1xuICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgfVxuICBcbiAgaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIH1cbiAgXG4gIGlvbi1tZW51Lm1kIGlvbi1saXN0LWhlYWRlcixcbiAgaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgfVxuICBcbiAgaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KSk7XG4gIH1cbiAgXG4gIGlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgXG4gICAgbWluLWhlaWdodDogMjBweDtcbiAgfVxuICBcbiAgaW9uLW1lbnUubWQgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIFxuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XG4gIFxuICAgIGNvbG9yOiAjNzU3NTc1O1xuICBcbiAgICBtaW4taGVpZ2h0OiAyNnB4O1xuICB9XG4gIFxuICBpb24tbWVudS5tZCBpb24taXRlbSB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB9XG4gIFxuICBpb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCB7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMTQpO1xuICB9XG4gIFxuICBpb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgfVxuICBcbiAgaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWljb24ge1xuICAgIGNvbG9yOiAjNjE2ZTdlO1xuICB9XG4gIFxuICBpb24tbWVudS5tZCBpb24taXRlbSBpb24tbGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbiAgXG4gIGlvbi1tZW51LmlvcyBpb24tY29udGVudCB7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgfVxuICBcbiAgaW9uLW1lbnUuaW9zIGlvbi1saXN0IHtcbiAgICBwYWRkaW5nOiAyMHB4IDAgMCAwO1xuICB9XG4gIFxuICBpb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbiAgXG4gIGlvbi1tZW51LmlvcyBpb24taXRlbSB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gICAgLS1taW4taGVpZ2h0OiA1MHB4O1xuICB9XG4gIFxuICBpb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIH1cbiAgXG4gIGlvbi1tZW51LmlvcyBpb24taXRlbSBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGNvbG9yOiAjNzM4NDlhO1xuICB9XG4gIFxuICBpb24tbWVudS5pb3MgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIH1cbiAgXG4gIGlvbi1tZW51LmlvcyBpb24tbGlzdC1oZWFkZXIsXG4gIGlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIH1cbiAgXG4gIGlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICB9XG4gIFxuICBpb24tbm90ZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjojZmZmICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIH1cbiAgaW9uLWxpc3R7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KSFpbXBvcnRhbnQ7XG4gICBcbiAgfVxuICBcbiAgaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAgIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMxYWJjZjcsICMxMWYxYmQpICFpbXBvcnRhbnQ7XG4gICAgaW9uLWxhYmVse1xuICAgICAgY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICBcbiAgICB9XG4gICAgLmljb257XG4gICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCkhaW1wb3J0YW50O1xuICAgICBib3JkZXItcmFkaXVzOiA3MCUgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbiAgaW9uLW1lbnUtYnV0dG9ue1xuICAgIGNvbG9yOiAgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KSAhaW1wb3J0YW50O1xuICB9XG4gIGlvbi1pdGVte1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDE4cHggIWltcG9ydGFudDtcbiAgfVxuICBpb24tbGFiZWx7XG4gICAgbWFyZ2luOiA4cHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAtNnB4ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IzM3MzczYSAhaW1wb3J0YW50O1xuICB9XG4gIFxuICBpb24taWNvbntcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KSAhaW1wb3J0YW50O1xuICB9XG4gIGlvbi1pdGVte1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgLS1ib3JkZXItY29sb3I6ICNmZmY7XG4gIH1cbiAgXG4iXX0= */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu swipeGesture=\"false\"  contentId=\"main-content\" type=\"overlay\">\n      <ion-content>\n        <ion-list style=\"margin-top:20%\" id=\"inbox-list\">\n        \n          <!-- <div class=\"row\">\n  \n            <div class=\"col-12  mb-2 mx-5 \">\n               <h2><b>24 Hrs</b></h2>\n            </div>\n          </div> -->\n          <ion-menu-toggle  auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\n            <ion-item  routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\" routerLinkActive=\"selected\">\n              <img  class=\"mb-3\" style=\"height:35px;width:35px;margin:5px\" [src]=\"p.icon\" alt=\"\">\n              <ion-label class=\"mb-2\">{{ p.title }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n          <ion-menu-toggle  auto-hide=\"false\" >\n            <ion-item  (click)=\"logout()\" >\n              <img  style=\"height:35px;width:35px;margin:6px;\" src=\"assets/icon/logout.png\" alt=\"\">\n              <ion-label style=\"margin-top: 10px !important;\">Logout</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n\n          <p  style=\"margin-left: 67%;margin-top: -2%;font-size: 10px;\" class=\"ion-text-left\">V17.0.9</p>\n        </ion-list>\n      </ion-content>\n      \n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map