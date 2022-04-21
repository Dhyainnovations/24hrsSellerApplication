"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tabs_tabs_module_ts"],{

/***/ 530:
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageRoutingModule": () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page */ 7942);




const routes = [
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
        children: [
            {
                path: 'tab1',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_tab1_tab1_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../tab1/tab1.module */ 2168)).then(m => m.Tab1PageModule)
            },
            {
                path: 'tab2',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_tab2_tab2_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../tab2/tab2.module */ 4608)).then(m => m.Tab2PageModule)
            },
            {
                path: 'tab3',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_http_service_ts-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_tab3_tab3_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../tab3/tab3.module */ 3746)).then(m => m.Tab3PageModule)
            },
            {
                path: 'tab4',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_http_service_ts-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_tab4_tab4_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../tab4/tab4.module */ 2486)).then(m => m.Tab4PageModule)
            },
            {
                path: 'tab5',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_http_service_ts-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_tab5_tab5_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../tab5/tab5.module */ 5184)).then(m => m.Tab5PageModule)
            },
            {
                path: '',
                redirectTo: '/tabs/tab1',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
    })
], TabsPageRoutingModule);



/***/ }),

/***/ 5564:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageModule": () => (/* binding */ TabsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-routing.module */ 530);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 7942);







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage]
    })
], TabsPageModule);



/***/ }),

/***/ 7942:
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page.html?ngResource */ 5230);
/* harmony import */ var _tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.scss?ngResource */ 4710);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);





let TabsPage = class TabsPage {
    constructor(platform) {
        this.platform = platform;
    }
    home() {
        localStorage.setItem("location", "home");
    }
    promotion() {
        localStorage.setItem("location", "");
    }
    product() {
        localStorage.setItem("location", "");
    }
};
TabsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.Platform }
];
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-tabs',
        template: _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TabsPage);



/***/ }),

/***/ 4710:
/*!************************************************!*\
  !*** ./src/app/tabs/tabs.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "ion-label {\n  font-size: 11px !important;\n}\n\nion-tab-bar {\n  --color-selected: #eb154b\n  !important;\n}\n\nion-label {\n  --color-selected: #eb154b !important;\n}\n\nion-tabs {\n  --border-radius: 50%;\n  background: #ffffff;\n}\n\nion-tab-bar {\n  --background: #0c0c0c;\n  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);\n  bottom: 15px;\n  position: relative;\n  border-radius: 18px;\n  width: 92%;\n  border-top: none;\n  margin: 0 auto;\n  height: 55px;\n}\n\nion-tab-button {\n  --color: #d4d4d4;\n  --color-selected: #eb154b;\n  --padding-bottom: 8px;\n  --padding-top: 8px;\n}\n\nion-tab-button::before {\n  background-color: transparent;\n  display: block;\n  content: \"\";\n  margin: 0 auto;\n  width: 20px;\n  height: 2px;\n}\n\nion-tab-button.tab-selected::before {\n  background-color: #eb154b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksMEJBQUE7QUFBSjs7QUFFQTtFQUNJO1lBQUE7QUFFSjs7QUFFQTtFQUNJLG9DQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLDBDQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVFO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFDSTtFQUNFLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFDTjs7QUFFSTtFQUNFLHlCQUFBO0FBQU4iLCJmaWxlIjoidGFicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi1sYWJlbHtcbiAgICBmb250LXNpemU6IDExcHggIWltcG9ydGFudDtcbn1cbmlvbi10YWItYmFye1xuICAgIC0tY29sb3Itc2VsZWN0ZWQ6ICNlYjE1NGJcblxuICAgICFpbXBvcnRhbnQ7XG59XG5pb24tbGFiZWx7XG4gICAgLS1jb2xvci1zZWxlY3RlZDogI2ViMTU0YiAhaW1wb3J0YW50O1xufVxuXG5pb24tdGFic3tcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuXG5pb24tdGFiLWJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMGMwYzBjO1xuICAgIGJveC1zaGFkb3c6IDBweCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBib3R0b206IDE1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gICAgd2lkdGg6IDkyJTtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGhlaWdodDogNTVweDtcbiAgfVxuICBcbiAgaW9uLXRhYi1idXR0b24ge1xuICAgIC0tY29sb3I6ICNkNGQ0ZDQ7XG4gICAgLS1jb2xvci1zZWxlY3RlZDogI2ViMTU0YjtcbiAgICAtLXBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgLS1wYWRkaW5nLXRvcDogOHB4O1xuICBcbiAgICAmOjpiZWZvcmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgaGVpZ2h0OiAycHg7XG4gICAgfVxuICBcbiAgICAmLnRhYi1zZWxlY3RlZDo6YmVmb3JlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlYjE1NGI7XG4gICAgfVxuICB9XG4gIFxuXG4gICJdfQ== */";

/***/ }),

/***/ 5230:
/*!************************************************!*\
  !*** ./src/app/tabs/tabs.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "\n\n<ion-tabs style=\"display: fixed;\" >\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button (click)=\"home()\" tab=\"tab1\">\n      <svg width=\"20\" height=\"20\" viewBox=\"0 0 29 25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M28.9911 12.4756C28.9911 13.3545 28.2359 14.043 27.38 14.043H25.7688L25.804 21.8604C25.804 21.9971 25.794 22.124 25.7788 22.2559V23.0469C25.7788 24.126 24.8776 25 23.7649 25H22.9593C22.9039 25 22.8485 24.9561 22.7931 24.9951C22.7226 24.9561 22.6522 25 22.5817 25H19.7369C18.6242 25 17.723 24.126 17.723 23.0469V18.75C17.723 17.8857 17.003 17.1875 16.1118 17.1875H12.8894C11.9982 17.1875 11.2782 17.8857 11.2782 18.75V23.0469C11.2782 24.126 10.377 25 9.26427 25H6.44975C6.37422 25 6.2987 24.9951 6.22318 24.9902C6.16276 24.9951 6.10234 25 6.04192 25H5.23633C4.12411 25 3.22236 24.126 3.22236 23.0469V17.5781C3.22236 17.5342 3.22387 17.4854 3.22689 17.4414V14.043H1.6137C0.705897 14.043 0 13.3545 0 12.4756C0 12.0361 0.151249 11.6455 0.503997 11.3037L13.4131 0.391406C13.7655 0.0489258 14.1683 0 14.5207 0C14.8732 0 15.276 0.0978515 15.5831 0.34248L28.4373 11.3037C28.8401 11.6455 29.0465 12.0361 28.9911 12.4756Z\" fill=\"white\"/>\n        </svg>\n        \n      <ion-label >Home</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button (click)=\"promotion()\" tab=\"tab2\">\n      <svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M0.87868 0.87868C0 1.75736 0 3.17157 0 6V14C0 16.8284 0 18.2426 0.87868 19.1213C1.75736 20 3.17157 20 6 20H14C16.8284 20 18.2426 20 19.1213 19.1213C20 18.2426 20 16.8284 20 14V6C20 3.17157 20 1.75736 19.1213 0.87868C18.2426 0 16.8284 0 14 0H6C3.17157 0 1.75736 0 0.87868 0.87868ZM15.8321 7.5547C16.1384 7.09517 16.0142 6.4743 15.5547 6.16795C15.0952 5.8616 14.4743 5.98577 14.1679 6.4453L11.1238 11.0115L10.6651 10.094C9.9783 8.7205 8.0639 8.6013 7.2121 9.8791L4.16795 14.4453C3.8616 14.9048 3.98577 15.5257 4.4453 15.8321C4.90483 16.1384 5.5257 16.0142 5.83205 15.5547L8.8762 10.9885L9.3349 11.906C10.0217 13.2795 11.9361 13.3987 12.7879 12.1209L15.8321 7.5547Z\" fill=\"white\"/>\n        </svg>\n        \n      <ion-label>Promotion</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button (click)=\"product()\" tab=\"tab3\">\n      <svg width=\"20\" height=\"20\" viewBox=\"0 0 20 22\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M13.5714 4.8125C13.5714 3.90082 13.1952 3.02648 12.5254 2.38182C11.8556 1.73716 10.9472 1.375 10 1.375C9.0528 1.375 8.14439 1.73716 7.47462 2.38182C6.80485 3.02648 6.42857 3.90082 6.42857 4.8125V5.5H13.5714V4.8125ZM15 4.8125V5.5H20V19.25C20 19.9793 19.699 20.6788 19.1632 21.1945C18.6273 21.7103 17.9006 22 17.1429 22H2.85714C2.09938 22 1.37266 21.7103 0.836838 21.1945C0.30102 20.6788 0 19.9793 0 19.25V5.5H5V4.8125C5 3.53615 5.52678 2.31207 6.46447 1.40955C7.40215 0.50703 8.67392 0 10 0C11.3261 0 12.5979 0.50703 13.5355 1.40955C14.4732 2.31207 15 3.53615 15 4.8125V4.8125ZM10.7143 11C10.7143 10.8177 10.639 10.6428 10.5051 10.5139C10.3711 10.3849 10.1894 10.3125 10 10.3125C9.81056 10.3125 9.62888 10.3849 9.49492 10.5139C9.36097 10.6428 9.28571 10.8177 9.28571 11V13.0625H7.14286C6.95342 13.0625 6.77174 13.1349 6.63778 13.2639C6.50383 13.3928 6.42857 13.5677 6.42857 13.75C6.42857 13.9323 6.50383 14.1072 6.63778 14.2361C6.77174 14.3651 6.95342 14.4375 7.14286 14.4375H9.28571V16.5C9.28571 16.6823 9.36097 16.8572 9.49492 16.9861C9.62888 17.1151 9.81056 17.1875 10 17.1875C10.1894 17.1875 10.3711 17.1151 10.5051 16.9861C10.639 16.8572 10.7143 16.6823 10.7143 16.5V14.4375H12.8571C13.0466 14.4375 13.2283 14.3651 13.3622 14.2361C13.4962 14.1072 13.5714 13.9323 13.5714 13.75C13.5714 13.5677 13.4962 13.3928 13.3622 13.2639C13.2283 13.1349 13.0466 13.0625 12.8571 13.0625H10.7143V11Z\" fill=\"white\"/>\n        </svg>\n        \n      <ion-label>Product</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab4\">\n      <svg width=\"25\" height=\"24\" viewBox=\"0 0 25 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M1.84016 0C1.35212 0 0.884067 0.186118 0.53897 0.517411C0.193873 0.848704 0 1.29803 0 1.76655V9.86796C0.000104222 10.3364 0.194046 10.7857 0.539166 11.1169L13.4203 23.4828C13.7654 23.814 14.2333 24 14.7213 24C15.2092 24 15.6772 23.814 16.0223 23.4828L24.4612 15.3814C24.8062 15.0501 25 14.6008 25 14.1324C25 13.664 24.8062 13.2147 24.4612 12.8835L11.5801 0.5176C11.2351 0.186284 10.7671 0.000100053 10.2791 0H1.84016Z\" fill=\"white\"/>\n        <path d=\"M14.0094 6.35989C13.6552 6.25885 13.2865 6.46388 13.1855 6.81804L10.5999 15.8845C10.4989 16.2386 10.7039 16.6073 11.0581 16.7083C11.2358 16.7587 11.4161 16.7324 11.5652 16.6494C11.7143 16.5665 11.8318 16.4267 11.8821 16.2497L14.4678 7.18331C14.5681 6.8289 14.3635 6.46092 14.0094 6.35989ZM9.55561 11.6643C10.1983 11.3069 10.43 10.4934 10.0727 9.85101C9.7155 9.20865 8.90227 8.97649 8.2596 9.3339C7.61693 9.69131 7.38523 10.5048 7.74237 11.147C8.09951 11.7892 8.91294 12.0217 9.55561 11.6643ZM15.5124 11.4029C14.8698 11.7603 14.6381 12.5738 14.9953 13.2162C15.3526 13.8585 16.1659 14.0909 16.8086 13.7335C17.4512 13.3761 17.6829 12.5625 17.3257 11.9202C16.9684 11.2778 16.1551 11.0455 15.5124 11.4029Z\" fill=\"black\"/>\n        <circle cx=\"3\" cy=\"3\" r=\"1\" fill=\"black\"/>\n        </svg>\n        \n        \n        \n      <ion-label>Offer</ion-label>\n    </ion-tab-button>\n    \n\n    <ion-tab-button tab=\"tab5\" >\n      <svg width=\"20\" height=\"20\" viewBox=\"0 0 25 25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M12.5 12.5007C16.4453 12.5007 19.6429 9.70223 19.6429 6.25037C19.6429 2.7985 16.4453 0 12.5 0C8.55469 0 5.35714 2.7985 5.35714 6.25037C5.35714 9.70223 8.55469 12.5007 12.5 12.5007ZM15.3292 14.8446H9.67076C4.33091 14.8446 0 18.6339 0 23.307C0 24.2417 0.866071 25 1.93415 25H23.067C24.135 25.0015 25 24.2446 25 23.307C25 18.6339 20.6696 14.8446 15.3292 14.8446Z\" fill=\"white\"/>\n        </svg>\n        \n      <ion-label>Profile</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>";

/***/ })

}]);
//# sourceMappingURL=src_app_tabs_tabs_module_ts.js.map