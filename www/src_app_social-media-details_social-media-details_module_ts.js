"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_social-media-details_social-media-details_module_ts"],{

/***/ 1657:
/*!*****************************************************************************!*\
  !*** ./src/app/social-media-details/social-media-details-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SocialMediaDetailsPageRoutingModule": () => (/* binding */ SocialMediaDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _social_media_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./social-media-details.page */ 7589);




const routes = [
    {
        path: '',
        component: _social_media_details_page__WEBPACK_IMPORTED_MODULE_0__.SocialMediaDetailsPage
    }
];
let SocialMediaDetailsPageRoutingModule = class SocialMediaDetailsPageRoutingModule {
};
SocialMediaDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SocialMediaDetailsPageRoutingModule);



/***/ }),

/***/ 930:
/*!*********************************************************************!*\
  !*** ./src/app/social-media-details/social-media-details.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SocialMediaDetailsPageModule": () => (/* binding */ SocialMediaDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _social_media_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./social-media-details-routing.module */ 1657);
/* harmony import */ var _social_media_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./social-media-details.page */ 7589);







let SocialMediaDetailsPageModule = class SocialMediaDetailsPageModule {
};
SocialMediaDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _social_media_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.SocialMediaDetailsPageRoutingModule
        ],
        declarations: [_social_media_details_page__WEBPACK_IMPORTED_MODULE_1__.SocialMediaDetailsPage]
    })
], SocialMediaDetailsPageModule);



/***/ }),

/***/ 7589:
/*!*******************************************************************!*\
  !*** ./src/app/social-media-details/social-media-details.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SocialMediaDetailsPage": () => (/* binding */ SocialMediaDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _social_media_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./social-media-details.page.html?ngResource */ 8365);
/* harmony import */ var _social_media_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./social-media-details.page.scss?ngResource */ 6283);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/http.service */ 8191);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ 598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);








let SocialMediaDetailsPage = class SocialMediaDetailsPage {
    constructor(router, http, route) {
        this.router = router;
        this.http = http;
        this.tbid = (localStorage.getItem("tbid"));
        this.Deliveryavailability = true;
        this.delivery_availability = '';
        this.deliveryStatus = false;
        this.Deliveryavailabilitytoggle = true;
        this.facebookurl = false;
        route.params.subscribe(val => {
        });
    }
    ngOnInit() {
        // console.log(this.parsedObj);
    }
    // deliveryStatus(event) {
    //   console.log(event);
    //   this.Deliveryavailability = !this.Deliveryavailability;
    //   console.log(this.Deliveryavailability);
    //   if (this.Deliveryavailability == true || this.Deliveryavailability == null) {
    //     this.delivery_availability = false
    //   } else {
    //     this.delivery_availability = true
    //   }
    // }
    deliveryStatustoggle() {
        this.deliveryStatus = !this.deliveryStatus;
        console.log(this.deliveryStatus);
    }
    sellerContact() {
        const contactData = {
            tbid: this.tbid,
            website: this.website,
            whatsapp: this.whatsapp,
            instagram: this.instagram,
            facebook: this.facebook,
            youtube: this.youtube,
            store_number: this.mobilenumber,
            delivery_availability: this.deliveryStatus
        };
        console.log(contactData);
        this.http.postFormData('/seller_contact', contactData).subscribe((response) => {
            if (response.success == "true") {
                console.log(response);
                if (this.instagram) {
                    var instagramtoggle = true;
                }
                else {
                    instagramtoggle = false;
                }
                if (this.website) {
                    var websitetoggle = true;
                }
                else {
                    websitetoggle = false;
                }
                if (this.whatsapp) {
                    var whatsapptoggle = true;
                }
                else {
                    whatsapptoggle = false;
                }
                if (this.facebook) {
                    var facebooktoggle = true;
                }
                else {
                    facebooktoggle = false;
                }
                if (this.youtube) {
                    var youtubetoggle = true;
                }
                else {
                    youtubetoggle = false;
                }
                if (this.mobilenumber) {
                    var mobilenumbertoggle = true;
                }
                else {
                    mobilenumbertoggle = false;
                }
                const obj = {
                    tbid: this.tbid,
                    seller_toggle: {
                        instagram: instagramtoggle,
                        website: websitetoggle,
                        whatsapp: whatsapptoggle,
                        facebook: facebooktoggle,
                        youtube: youtubetoggle,
                        contact_number: mobilenumbertoggle
                    }
                };
                this.http.postFormData('/seller_toggle', obj).subscribe((response) => {
                    if (response.success == "true") {
                        console.log(response);
                    }
                }, (error) => {
                    console.log(error);
                });
                const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 1000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', (sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().stopTimer));
                        toast.addEventListener('mouseleave', (sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().resumeTimer));
                    }
                });
                Toast.fire({
                    icon: 'success',
                    title: 'updated successfully'
                });
                this.router.navigate(['/tabs']);
            }
            else {
            }
        }, (error) => {
            console.log(error);
        });
    }
    navigateHome() {
        this.router.navigate(['/tabs']);
    }
};
SocialMediaDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _shared_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute }
];
SocialMediaDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-social-media-details',
        template: _social_media_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_social_media_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SocialMediaDetailsPage);



/***/ }),

/***/ 6283:
/*!********************************************************************************!*\
  !*** ./src/app/social-media-details/social-media-details.page.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = ".myproduct-div {\n  position: absolute;\n  background-color: var(--ion-color-light);\n  border: 1px solid #ccc;\n  border-radius: 8px;\n  box-shadow: 2px 2px 2px 2px #ebe6e6;\n  width: 96% !important;\n  margin: 5px;\n}\n\nsvg {\n  margin-top: 22px !important;\n  margin-left: -25px !important;\n}\n\ninput[type=text] {\n  font-size: 15px;\n  margin: 0 5px;\n  margin-top: 25px !important;\n  margin-left: -45px !important;\n  width: 100%;\n  box-sizing: border-box;\n  border: none;\n  background-color: #fff;\n  border-bottom: 2px solid var(--ion-color-primary);\n}\n\ninput:focus {\n  outline: none !important;\n  border-bottom: 2px solid var(--ion-color-success);\n}\n\n.primarySmallBtn {\n  background-color: transparent !important;\n  color: var(--ion-color-primary) !important;\n  margin-left: -6px !important;\n  box-shadow: none;\n  border-radius: 3px;\n  font-size: 12px;\n  height: 30px;\n  text-transform: none;\n}\n\nselect {\n  border: 1px solid #fff;\n}\n\nion-content {\n  --background: var(--ion-color-light) !important;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2lhbC1tZWRpYS1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0Esd0NBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFRTtFQUNFLDJCQUFBO0VBQ0EsNkJBQUE7QUFDSjs7QUFDRTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGlEQUFBO0FBRUo7O0FBQUU7RUFDRSx3QkFBQTtFQUdBLGlEQUFBO0FBQ0o7O0FBQ0U7RUFDRSx3Q0FBQTtFQUNBLDBDQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQUVKOztBQUNBO0VBQ0Usc0JBQUE7QUFFRjs7QUFFQTtFQUNFLCtDQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUFFO0VBQ0ksYUFBQTtBQUVOIiwiZmlsZSI6InNvY2lhbC1tZWRpYS1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teXByb2R1Y3QtZGl2e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIGJvcmRlcjoxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMnB4ICNlYmU2ZTY7XG4gICAgd2lkdGg6OTYlICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOjVweDtcbiAgICBcbiAgfVxuICBzdmd7XG4gICAgbWFyZ2luLXRvcDogMjJweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAtMjVweCAhaW1wb3J0YW50IDtcbiAgfVxuICBpbnB1dFt0eXBlPXRleHRdIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbWFyZ2luOiAwIDVweDtcbiAgICBtYXJnaW4tdG9wOiAyNXB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IC00NXB4ICFpbXBvcnRhbnQgO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTs7XG4gIH1cbiAgaW5wdXQ6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgICAvLyBib3JkZXI6MXB4IHNvbGlkICMyM2Q1YWIgIWltcG9ydGFudDtcbiAgICAvLyBib3gtc2hhZG93OiAwIDAgMnB4ICMyM2Q1YWI7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTs7XG4gIH1cbiAgLnByaW1hcnlTbWFsbEJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IC02cHggIWltcG9ydGFudDtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICB9XG5cbnNlbGVjdHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiBcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCkgICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBhdXRvO1xuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICB9XG59Il19 */";

/***/ }),

/***/ 8365:
/*!********************************************************************************!*\
  !*** ./src/app/social-media-details/social-media-details.page.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content class=\"mt-2\">\n  <div style=\"margin-top: 25%;\" class=\"myproduct-div\">\n\n    <h5 class=\"title mx-3 mt-4\"> <b>Provide Your Contact Details :</b></h5>\n\n \n\n    <div class=\"row ion-text-center\">\n      <div class=\"col-4\">\n        <svg width=\"30\" height=\"30\" viewBox=\"0 0 448 448\" fill=\"none\">\n          <path\n            d=\"M384 0H64C28.65 0 0 28.65 0 64V384C0 419.35 28.65 448 64 448H384C419.35 448 448 419.35 448 384V64C448 28.65 419.3 0 384 0ZM351.6 289.5L339.98 339.89C338.347 347.015 332.08 352 324.74 352C198.64 352 96.04 249.4 96.04 123.2C96.04 115.872 101.024 109.61 108.15 107.98L158.53 96.35C165.874 94.647 173.41 98.459 176.46 105.412L199.73 159.692C202.449 166.083 200.613 173.522 195.238 177.912L168.3 200C185.29 234.61 213.44 262.75 248.07 279.75L270.09 252.84C274.434 247.449 281.94 245.59 288.33 248.356L342.57 271.606C349.5 274.6 353.3 282.2 351.6 289.5Z\"\n            fill=\"#2b2b2b\" />\n        </svg>\n      </div>\n      <div class=\"col-8\">\n        <input type=\"text\" id=\"edit-field\" placeholder=\"Mobile Number\" [(ngModel)]=\"mobilenumber\" maxlength=\"10\">\n      </div>\n    </div>\n    \n\n\n\n    <div class=\"row ion-text-center\">\n      <div class=\"col-4\">\n        <svg width=\"30\" height=\"30\" viewBox=\"0 0 448 448\" fill=\"none\">\n          <path\n            d=\"M308 224C308 243.425 306.95 262.15 305.113 280H142.888C141.05 262.15 139.213 243.425 139.213 224C139.213 204.575 141.05 185.85 142.888 168H305.113C306.95 185.85 308 204.575 308 224ZM440.912 168C445.55 185.938 448 204.662 448 224C448 243.338 445.55 262.062 440.912 280H333.2C335.037 261.975 336 242.463 336 224C336 204.75 335.037 186.025 333.2 168H440.912ZM431.725 140H329.613C320.863 84.1225 303.537 37.2925 281.225 7.38675C349.825 25.4538 405.475 75.1975 431.725 140ZM301.262 140H146.737C152.075 108.15 160.3 79.9575 170.362 57.1812C179.55 36.5225 189.787 21.5338 199.675 12.0838C209.475 2.78075 217.612 0 224 0C230.388 0 238.525 2.78075 248.325 12.0838C258.212 21.5338 268.45 36.5225 277.637 57.1812C287.7 79.9575 295.925 108.15 301.262 140ZM16.2838 140C42.5163 75.1975 98.175 25.4538 166.775 7.38675C144.463 37.2925 127.138 84.1225 118.388 140H16.2838ZM114.8 168C112.962 186.025 111.212 204.75 111.212 224C111.212 242.463 112.962 261.975 114.8 280H7.05687C2.45 262.062 0 243.338 0 224C0 204.662 2.45 185.938 7.05687 168H114.8ZM170.362 390.775C160.3 368.025 152.075 339.85 146.737 308H301.262C295.925 339.85 287.7 368.025 277.637 390.775C268.45 411.513 258.212 426.475 248.325 435.925C238.525 445.2 230.388 448 223.213 448C217.613 448 209.475 445.2 199.675 435.925C189.787 426.475 179.55 411.513 170.362 390.775ZM166.775 440.65C98.175 422.538 42.5163 372.837 16.2838 308H118.388C127.138 363.913 144.463 410.725 166.775 440.65ZM281.225 440.65C303.537 410.725 320.863 363.913 329.613 308H431.725C405.475 372.837 349.825 422.538 281.225 440.65Z\"\n            fill=\"#2b2b2b\" />\n        </svg>\n      </div>\n      <div class=\"col-8\">\n        <input type=\"text\" id=\"edit-field\" placeholder=\"Website Link\" [(ngModel)]=\"website\">\n        <p class=\"small text-danger\" *ngIf=\"urlCheck\"><i>Kindly Enter Correct Url</i></p>\n      </div>\n    </div>\n    \n\n    <div class=\"row ion-text-center\">\n      <div class=\"col-4\">\n        <svg width=\"30\" height=\"30\" viewBox=\"0 0 72 72\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path d=\"M20.9941 0C9.41714 0 0 9.42586 0 21.0059V51.0059C0 62.5829 9.42586 72 21.0059 72H51.0059C62.5829 72 72 62.5741 72 50.9941V20.9941C72 9.41714 62.5741 0 50.9941 0H20.9941ZM57 12C58.656 12 60 13.344 60 15C60 16.656 58.656 18 57 18C55.344 18 54 16.656 54 15C54 13.344 55.344 12 57 12ZM36 18C45.927 18 54 26.073 54 36C54 45.927 45.927 54 36 54C26.073 54 18 45.927 18 36C18 26.073 26.073 18 36 18ZM36 24C32.8174 24 29.7652 25.2643 27.5147 27.5147C25.2643 29.7652 24 32.8174 24 36C24 39.1826 25.2643 42.2348 27.5147 44.4853C29.7652 46.7357 32.8174 48 36 48C39.1826 48 42.2348 46.7357 44.4853 44.4853C46.7357 42.2348 48 39.1826 48 36C48 32.8174 46.7357 29.7652 44.4853 27.5147C42.2348 25.2643 39.1826 24 36 24V24Z\" fill=\"#2b2b2b\"/>\n          </svg>\n      </div>\n      <div class=\"col-8\">\n        <input type=\"text\" id=\"edit-field\" placeholder=\"Instagram Id\" [(ngModel)]=\"instagram\">\n      </div>\n    </div>\n\n    <div class=\"row ion-text-center\">\n      <div class=\"col-4\">\n        <svg width=\"30\" height=\"30\" viewBox=\"0 0 72 72\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path d=\"M36 0C16.119 0 0 16.119 0 36C0 42.7536 1.89702 49.0502 5.13281 54.4512L0.322266 72L18.2461 67.2949C23.4881 70.2752 29.5395 72 36 72C55.881 72 72 55.881 72 36C72 16.119 55.881 0 36 0ZM23.6777 19.207C24.2627 19.207 24.8638 19.2035 25.3828 19.2305C26.0248 19.2455 26.7236 19.2925 27.3926 20.7715C28.1876 22.5295 29.9186 26.9397 30.1406 27.3867C30.3626 27.8337 30.5199 28.3603 30.2109 28.9453C29.9169 29.5453 29.764 29.9085 29.332 30.4395C28.885 30.9555 28.3952 31.5963 27.9902 31.9863C27.5432 32.4333 27.0817 32.9235 27.5977 33.8145C28.1137 34.7055 29.9057 37.6264 32.5547 39.9844C35.9597 43.0264 38.8326 43.9612 39.7266 44.4082C40.6206 44.8552 41.1383 44.7855 41.6543 44.1855C42.1853 43.6005 43.8844 41.5932 44.4844 40.6992C45.0694 39.8052 45.6666 39.9599 46.4766 40.2539C47.2986 40.5479 51.6822 42.7073 52.5762 43.1543C53.4702 43.6013 54.0562 43.8225 54.2812 44.1855C54.5122 44.5605 54.5125 46.3457 53.7715 48.4277C53.0305 50.5067 49.3918 52.5172 47.7598 52.6582C46.1128 52.8112 44.5757 53.3985 37.0547 50.4375C27.9827 46.8645 22.2615 37.5727 21.8145 36.9727C21.3675 36.3877 18.1816 32.1417 18.1816 27.7617C18.1816 23.3667 20.486 21.2143 21.293 20.3203C22.115 19.4263 23.0777 19.207 23.6777 19.207Z\" fill=\"#2b2b2b\"/>\n          </svg>\n      </div>\n      <div class=\"col-8\">\n        <input type=\"text\" id=\"edit-field\" placeholder=\"Whatsapp Number\" [(ngModel)]=\"whatsapp\" maxlength=\"10\">\n      </div>\n    </div>\n\n    <div class=\"row ion-text-center\">\n      <div class=\"col-4\">\n        <svg  width=\"30\" height=\"30\" fill=\"currentColor\" class=\"bi bi-youtube\" viewBox=\"0 0 16 16\">\n          <path\n            d=\"M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z\" />\n        </svg>\n      </div>\n      <div class=\"col-8\">\n        <input type=\"text\" id=\"edit-field\" placeholder=\"youtube Link\" [(ngModel)]=\"youtube\">\n        <p class=\"small text-danger\" *ngIf=\"youtubeurlCheck\"><i>Kindly Enter Correct Youtube Url</i></p>\n      </div>\n    </div>\n    <div class=\"row ion-text-center\">\n      <div class=\"col-4\">\n        <svg  width=\"30\" height=\"30\" viewBox=\"0 0 15 15\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path d=\"M13.3929 0H1.60714C1.1809 0 0.772119 0.167913 0.470721 0.466799C0.169323 0.765685 0 1.17106 0 1.59375L0 13.2812C0 13.7039 0.169323 14.1093 0.470721 14.4082C0.772119 14.7071 1.1809 14.875 1.60714 14.875H6.20257V9.81783H4.09319V7.4375H6.20257V5.62328C6.20257 3.55971 7.44141 2.41984 9.33884 2.41984C10.2475 2.41984 11.1978 2.58055 11.1978 2.58055V4.60594H10.1508C9.1192 4.60594 8.79743 5.24078 8.79743 5.89189V7.4375H11.1003L10.732 9.81783H8.79743V14.875H13.3929C13.8191 14.875 14.2279 14.7071 14.5293 14.4082C14.8307 14.1093 15 13.7039 15 13.2812V1.59375C15 1.17106 14.8307 0.765685 14.5293 0.466799C14.2279 0.167913 13.8191 0 13.3929 0V0Z\" fill=\"#2b2b2b\"/>\n          </svg>\n      </div>\n      <div class=\"col-8\">\n        <input type=\"text\" id=\"edit-field\" placeholder=\"Facebook Id\" [(ngModel)]=\"facebook\">\n        <p class=\"small text-danger\" *ngIf=\"facebookurl\"><i>Kindly Enter Facebook Url</i></p>\n      </div>\n    </div>\n\n\n    <div class=\"mt-2\">\n      <div class=\"row ion-text-right mt-1\">\n        <div class=\"col-2 mt-1\">\n          <p style=\"font-size: 14px;margin-left:42px\">\n            <svg width=\"24\" height=\"19\" viewBox=\"0 0 24 19\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n              <path d=\"M4.2 0C3.20588 0 2.4 0.79748 2.4 1.78125V3.5625H0.6C0.268613 3.5625 0 3.82969 0 4.15625C0 4.48281 0.268613 4.75 0.6 4.75H10.2C10.53 4.75 10.8 5.01719 10.8 5.34375C10.8 5.67031 10.53 5.9375 10.2 5.9375H1.8C1.4685 5.9375 1.2 6.20469 1.2 6.53125C1.2 6.85781 1.4685 7.125 1.8 7.125H9C9.33 7.125 9.6 7.39219 9.6 7.71875C9.6 8.04531 9.33 8.3125 9 8.3125H0.6C0.268613 8.3125 0 8.57969 0 8.90625C0 9.23281 0.268613 9.5 0.6 9.5H7.8C8.13 9.5 8.4 9.76719 8.4 10.0938C8.4 10.4203 8.13 10.6875 7.8 10.6875H2.4V15.4375C2.4 17.4043 3.97875 19 6 19C7.9875 19 9.6 17.4043 9.6 15.4375H14.4C14.4 17.4043 15.9788 19 18 19C19.9875 19 21.6 17.4043 21.6 15.4375H22.8C23.4638 15.4375 24 14.9068 24 14.25C24 13.5932 23.4638 13.0625 22.8 13.0625V8.80605C22.8 8.1752 22.5488 7.57031 22.0988 7.125L19.2 4.25645C18.7163 3.81113 18.1388 3.5625 17.5013 3.5625H15.6V1.78125C15.6 0.79748 14.7938 0 13.8 0H4.2ZM20.4 8.80605V9.5H15.6V5.9375H17.5013L20.4 8.80605ZM6 17.2188C5.00625 17.2188 4.2 16.4209 4.2 15.4375C4.2 14.4541 5.00625 13.6562 6 13.6562C6.99375 13.6562 7.8 14.4541 7.8 15.4375C7.8 16.4209 6.99375 17.2188 6 17.2188ZM19.8 15.4375C19.8 16.4209 18.9938 17.2188 18 17.2188C17.0063 17.2188 16.2 16.4209 16.2 15.4375C16.2 14.4541 17.0063 13.6562 18 13.6562C18.9938 13.6562 19.8 14.4541 19.8 15.4375Z\" fill=\"#2b2b2b\"/>\n              </svg>\n              \n          </p>\n        </div>\n        <div class=\"col-6 ion-text-center mt-4 mx-4\">\n          <span > Delivery Availability:</span>\n        </div>\n        <div class=\"col-2 mt-3\">\n          <!-- <input type=\"checkbox\" (click)=\"deliveryStatus($event)\" value=\"null\" ng-checked={{Deliveryavailability}}> -->\n          <ion-toggle style=\"margin-left: -50px;\" [checked]=\"deliveryStatus\" (ionChange)=\"deliveryStatustoggle()\"></ion-toggle>\n        </div>\n      </div>\n    </div>\n\n    \n\n    <div class=\"row p-3\">\n      <div class=\"col-6 mt-1\">\n        <button (click)=\"navigateHome()\" type=\"button\" class=\"btn btn-sm primarySmallBtn\">Skip</button>\n      </div>\n      <div class=\"col-6 ion-text-right \">\n        <ion-button (click)=\"sellerContact()\"  type=\"button\" class=\"secondarySmallBtn p-2\" color=\"none\">Next</ion-button>\n      </div>\n    </div>\n\n\n  </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_social-media-details_social-media-details_module_ts.js.map