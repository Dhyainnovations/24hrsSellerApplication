"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_add-product-offer_add-product-offer_module_ts"],{

/***/ 3748:
/*!***********************************************************************!*\
  !*** ./src/app/add-product-offer/add-product-offer-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddProductOfferPageRoutingModule": () => (/* binding */ AddProductOfferPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _add_product_offer_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-product-offer.page */ 3423);




const routes = [
    {
        path: '',
        component: _add_product_offer_page__WEBPACK_IMPORTED_MODULE_0__.AddProductOfferPage
    }
];
let AddProductOfferPageRoutingModule = class AddProductOfferPageRoutingModule {
};
AddProductOfferPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddProductOfferPageRoutingModule);



/***/ }),

/***/ 8362:
/*!***************************************************************!*\
  !*** ./src/app/add-product-offer/add-product-offer.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddProductOfferPageModule": () => (/* binding */ AddProductOfferPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _add_product_offer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-product-offer-routing.module */ 3748);
/* harmony import */ var _add_product_offer_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-product-offer.page */ 3423);







let AddProductOfferPageModule = class AddProductOfferPageModule {
};
AddProductOfferPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _add_product_offer_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddProductOfferPageRoutingModule
        ],
        declarations: [_add_product_offer_page__WEBPACK_IMPORTED_MODULE_1__.AddProductOfferPage]
    })
], AddProductOfferPageModule);



/***/ }),

/***/ 3423:
/*!*************************************************************!*\
  !*** ./src/app/add-product-offer/add-product-offer.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddProductOfferPage": () => (/* binding */ AddProductOfferPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _add_product_offer_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-product-offer.page.html?ngResource */ 1129);
/* harmony import */ var _add_product_offer_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-product-offer.page.scss?ngResource */ 5877);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/http.service */ 8191);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ 598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);










let AddProductOfferPage = class AddProductOfferPage {
    constructor(router, http, toastCtrl, route, datepipe) {
        this.router = router;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.route = route;
        this.datepipe = datepipe;
        this.minutes = [];
        this.hours = [];
        this.tbid_value = localStorage.getItem("tbid");
        this.subcategoryList = [];
        this.Category = '';
        this.subcategory = '';
        this.productName = '';
        this.offer = '';
        this.totalCost = '';
        this.offerPrice = '';
        this.description = '';
        this.otheroffer = "";
        this.isVisible = true;
        this.expiryDateandTime = new Date;
        this.category_tbid = "";
        this.otherofferradio = true;
        this.LoadReadData();
    }
    ngOnInit() {
    }
    LoadReadData() {
        this.route.queryParams.subscribe(params => {
            this.product_name = params.product_name;
            var p = params.product_name;
            this.http.get('/read_one_product?p=' + p).subscribe((response) => {
                console.log(response.records);
                this.Category = response.records.category;
                this.category_tbid = response.records.category_id;
                this.subcategory = response.records.subcategory;
                this.subcategorytbid = response.records.subcategory_id;
                this.productName = response.records.product_name;
                this.producttbid = response.records.tbid;
                this.totalCost = response.records.cost;
            }, (error) => {
                console.log(error);
            });
        });
    }
    change(data) {
        var time = this.datepipe.transform((data), 'HH:MM:SS');
        let date = this.datepipe.transform((data), 'yyyy-MM-dd');
        this.expireddateandTime = date + " " + time;
    }
    addoffer() {
        let hours = new Date().getHours();
        let minutes = new Date().getMinutes();
        let seconds = new Date().getSeconds();
        let date = this.datepipe.transform((new Date), 'yyyy-MM-dd');
        let checkhours;
        let checkmins;
        let checksec;
        if (hours < 10) {
            checkhours = ("0" + hours);
        }
        else {
            checkhours = hours;
        }
        if (seconds < 10) {
            checksec = ("0" + seconds);
        }
        else {
            checksec = seconds;
        }
        if (minutes < 10) {
            checkmins = ("0" + minutes);
        }
        else {
            checkmins = minutes;
        }
        var Time = checkhours + ":" + checkmins + ":" + checksec;
        var currentDate = date;
        var currentTime = currentDate + " " + Time;
        var expiryTime = this.expireddateandTime;
        const productData = {
            category_id: this.category_tbid,
            subcategory_id: this.subcategorytbid,
            product_id: this.producttbid,
            description: this.description,
            offer: this.offer,
            other_offer: this.otheroffer,
            total_cost: this.totalCost,
            offer_price: this.offerPrice,
            offer_start_time: currentTime,
            offer_end_time: expiryTime,
            offer_name: this.productName,
        };
        console.log(productData);
        this.http.postFormData('/create_offer', productData).subscribe((response) => {
            console.log(response);
            if (response.success == "true") {
                console.log(response);
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
                    title: 'Offer Created Successfully'
                });
                this.Category = "";
                this.subcategory = "";
                this.productName = "";
                this.totalCost = "";
                this.router.navigate(['/tabs/tab4']);
            }
        }, (error) => {
            console.log(error);
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
                icon: 'error',
                title: 'Kindly Enter All The Details'
            });
        });
    }
    notification() {
        this.router.navigate(['/notification']);
    }
    backToPrivious() {
        this.router.navigate(['/myproducts']);
    }
    searchPage() {
        this.router.navigate(['/searchpage']);
    }
    calculateOfferPrice() {
        var offerprice = (this.offer / 100) * this.totalCost;
        this.calculateRemainPrice(offerprice);
    }
    calculateRemainPrice(offerprice) {
        this.offerPrice = this.totalCost - offerprice;
    }
    onItemChange() {
        this.DiscountOffer = false;
        this.OtherOffer = true;
        this.otherofferenable = true;
        this.otheroffer = "";
        this.otherofferradio = false;
        this.otheroffersradio = true;
    }
    onItemChange2() {
        this.DiscountOffer = true;
        this.offer = "";
        this.otherofferradio = true;
        this.otheroffersradio = false;
        this.offerPrice = "";
        this.OtherOffer = false;
        this.otherofferenable = false;
    }
};
AddProductOfferPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _shared_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe }
];
AddProductOfferPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-add-product-offer',
        template: _add_product_offer_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_add_product_offer_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddProductOfferPage);



/***/ }),

/***/ 5877:
/*!**************************************************************************!*\
  !*** ./src/app/add-product-offer/add-product-offer.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "input[type=text] {\n  font-size: 15px;\n  margin: 0 8px;\n  width: 98%;\n  box-sizing: border-box;\n  background-color: transparent;\n  border: none !important;\n  border-bottom: 2px solid #EB154B !important;\n}\n\ninput[type=number] {\n  font-size: 15px;\n  margin: 0 8px;\n  width: 98%;\n  box-sizing: border-box;\n  background-color: transparent;\n  border: none !important;\n  border-bottom: 2px solid #EB154B !important;\n}\n\n.add-new-btn {\n  background-color: #EB154B !important;\n  border: 1px solid #EB154B;\n}\n\n.signin-btn {\n  background-color: #ffffff;\n  color: #0D0D0D;\n  border: 1px solid #0D0D0D;\n}\n\ninput:focus {\n  outline: none !important;\n  border-bottom: 2px solid #23d5ab !important;\n}\n\n#card {\n  z-index: 1 !important;\n  height: 36% !important;\n  top: 20%;\n  box-shadow: none !important;\n  background: rgba(245, 245, 245, 0.54);\n  border-radius: 5px;\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n}\n\n.card {\n  background-color: #fff;\n  border: 1px solid #fff;\n  border-radius: 8px;\n  width: 96% !important;\n  margin: 5px;\n  box-shadow: 2px 2px 2px 2px #ccc !important;\n  border: 1px solid #fff;\n}\n\n.delete-btn {\n  background-color: #EB154B !important;\n  color: #fff;\n  text-align: center;\n}\n\n.update-btn {\n  background-color: #121212;\n  color: #fff;\n  text-align: center;\n  width: 55%;\n  border-radius: 5px;\n}\n\n.btn {\n  margin: 10px 0 !important;\n}\n\nion-content {\n  background-color: #F4F7FA !important;\n  --offset-bottom: auto !important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n\n.pop-up-card {\n  box-shadow: none !important;\n  position: absolute;\n  top: 10%;\n  z-index: 1;\n  right: 3px;\n  border-radius: 10px;\n}\n\n#product-popupCard {\n  /* From https://css.glass */\n  /* From https://css.glass */\n  background: #191818;\n  border-radius: 5px;\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n  backdrop-filter: blur(13.1px);\n  -webkit-backdrop-filter: blur(13.1px);\n  height: 26%;\n  margin-top: 50% !important;\n  border: none !important;\n  color: #fff;\n}\n\nbutton {\n  box-shadow: rgba(50, 50, 93, 0.068) 0px 2px 5px -1px, rgba(0, 0, 0, 0.068) 0px 1px 3px -1px;\n}\n\n#subcategory-popupCard {\n  /* From https://css.glass */\n  /* From https://css.glass */\n  background: #191818;\n  border-radius: 5px;\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n  height: 26%;\n  margin-top: 50%;\n  border: none !important;\n  color: #fff;\n}\n\n#category-popupCard {\n  /* From https://css.glass */\n  /* From https://css.glass */\n  background: #191818;\n  border-radius: 5px;\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n  height: 26%;\n  margin-top: 50%;\n  border: none !important;\n  color: #fff;\n}\n\ninput[type=file] {\n  display: none;\n}\n\ninput[type=datetime-local] {\n  font-size: 15px;\n  margin: 0 5px;\n  width: 98%;\n  box-sizing: border-box;\n  border: none;\n  background-color: transparent !important;\n  border-bottom: 2px solid #EB154B;\n}\n\nion-content {\n  background-color: #ffff !important;\n  --offset-bottom: auto !important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1wcm9kdWN0LW9mZmVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtFQUNBLDJDQUFBO0FBQ0o7O0FBRUU7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQ0FBQTtBQUNKOztBQUdFO0VBQ0Usb0NBQUE7RUFDQSx5QkFBQTtBQUFKOztBQUVFO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFRTtFQUNFLHdCQUFBO0VBQ0EsMkNBQUE7QUFDSjs7QUFDRTtFQUNFLHFCQUFBO0VBRUEsc0JBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7QUFDSjs7QUFHRTtFQUNFLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUdBLDJDQUFBO0VBQ0Esc0JBQUE7QUFBSjs7QUFHRTtFQUNFLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0U7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdFO0VBQ0UseUJBQUE7QUFBSjs7QUFHRTtFQUNFLG9DQUFBO0VBS0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFKSjs7QUFNSTtFQUNFLGFBQUE7QUFKTjs7QUFRRTtFQUNFLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQUxKOztBQVFFO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtFQUNBLDZCQUFBO0VBQ0EscUNBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUFMRjs7QUFRRTtFQUNFLDJGQUFBO0FBTEo7O0FBUUU7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0VBR0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUFQRjs7QUFVRTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7RUFHQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQVRGOztBQVdFO0VBQ0UsYUFBQTtBQVJKOztBQVdFO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0Esd0NBQUE7RUFDQSxnQ0FBQTtBQVJKOztBQVdFO0VBQ0Usa0NBQUE7RUFLQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQVpKOztBQWNJO0VBQ0UsYUFBQTtBQVpOIiwiZmlsZSI6ImFkZC1wcm9kdWN0LW9mZmVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0W3R5cGU9dGV4dF0ge1xuICAgIGZvbnQtc2l6ZSAgICAgICA6IDE1cHg7XG4gICAgbWFyZ2luICAgICAgICAgIDogMCA4cHg7XG4gICAgd2lkdGggICAgICAgICAgIDogOTglO1xuICAgIGJveC1zaXppbmcgICAgICA6IGJvcmRlci1ib3g7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOm5vbmUgIWltcG9ydGFudDtcbiAgICBib3JkZXItYm90dG9tICAgOiAycHggc29saWQgI0VCMTU0QiAhaW1wb3J0YW50O1xuICB9XG4gIFxuICBpbnB1dFt0eXBlPW51bWJlcl0ge1xuICAgIGZvbnQtc2l6ZSAgICAgICA6IDE1cHg7XG4gICAgbWFyZ2luICAgICAgICAgIDogMCA4cHg7XG4gICAgd2lkdGggICAgICAgICAgIDogOTglO1xuICAgIGJveC1zaXppbmcgICAgICA6IGJvcmRlci1ib3g7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOm5vbmUgIWltcG9ydGFudDtcbiAgICBib3JkZXItYm90dG9tICAgOiAycHggc29saWQgI0VCMTU0QiAhaW1wb3J0YW50O1xuICB9XG4gIFxuXG4gIC5hZGQtbmV3LWJ0bntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUIxNTRCICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjRUIxNTRCO1xuICB9XG4gIC5zaWduaW4tYnRue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgY29sb3I6ICMwRDBEMEQ7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjMEQwRDBEO1xuICB9XG4gIFxuICBpbnB1dDpmb2N1cyB7XG4gICAgb3V0bGluZSAgIDogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1ib3R0b20gICA6IDJweCBzb2xpZCAjMjNkNWFiICFpbXBvcnRhbnQ7XG4gIH1cbiAgI2NhcmR7XG4gICAgei1pbmRleDogMSAhaW1wb3J0YW50O1xuICAgIFxuICAgIGhlaWdodDogMzYlICFpbXBvcnRhbnQ7XG4gICAgdG9wOjIwJTtcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDUsIDI0NSwgMjQ1LCAwLjU0KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgLy8gYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEzLjFweCk7XG4gICAgLy8gLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTMuMXB4KTtcbiAgfVxuICAuY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvciAgOiAjZmZmO1xuICAgIGJvcmRlciAgICAgICAgICAgIDogMXB4IHNvbGlkICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1cyAgICAgOiA4cHg7XG4gICAgd2lkdGggICAgICAgICAgICAgOiA5NiUgIWltcG9ydGFudDtcbiAgICBtYXJnaW4gICAgICAgICAgICA6IDVweDtcbiAgICAtbW96LWJveC1zaGFkb3cgICA6IDAgMCAzcHggI2NjYztcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAzcHggI2NjYztcbiAgICBib3gtc2hhZG93ICAgICAgICA6IDJweCAycHggMnB4IDJweCAjY2NjICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyICAgICAgICAgICAgOiAxcHggc29saWQgI2ZmZjtcbiAgfVxuICBcbiAgLmRlbGV0ZS1idG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFQjE1NEIgIWltcG9ydGFudDtcbiAgICBjb2xvciAgICAgICAgICAgOiAjZmZmO1xuICAgIHRleHQtYWxpZ24gICAgICA6IGNlbnRlcjtcbiAgfVxuICBcbiAgLnVwZGF0ZS1idG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XG4gICAgY29sb3IgICAgICAgICAgIDogI2ZmZjtcbiAgICB0ZXh0LWFsaWduICAgICAgOiBjZW50ZXI7XG4gICAgd2lkdGg6IDU1JTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIH1cbiAgXG4gIC5idG4ge1xuICAgIG1hcmdpbjogMTBweCAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIGlvbi1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGN0ZBICFpbXBvcnRhbnQ7XG4gICAgLy8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgZGFya3R1cnF1b2lzZVxuICAgIC8vIDAlLCAjZDFmMmU3XG4gICAgLy8gMTAwJSkgIWltcG9ydGFudDtcbiAgXG4gICAgLS1vZmZzZXQtYm90dG9tOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgLS1vdmVyZmxvdyAgICAgOiBoaWRkZW47XG4gICAgb3ZlcmZsb3cgICAgICAgOiBhdXRvO1xuICBcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuICBcbiAgLnBvcC11cC1jYXJkIHtcbiAgICBib3gtc2hhZG93ICAgOiBub25lICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb24gICAgIDogYWJzb2x1dGU7XG4gICAgdG9wICAgICAgICAgIDogMTAlO1xuICAgIHotaW5kZXggICAgICA6IDE7XG4gICAgcmlnaHQgICAgICAgIDogM3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cbiAgXG4gICNwcm9kdWN0LXBvcHVwQ2FyZHtcbiAgLyogRnJvbSBodHRwczovL2Nzcy5nbGFzcyAqL1xuICAvKiBGcm9tIGh0dHBzOi8vY3NzLmdsYXNzICovXG4gIGJhY2tncm91bmQ6ICMxOTE4MTg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMCA0cHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMy4xcHgpO1xuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMy4xcHgpO1xuICBoZWlnaHQ6MjYlO1xuICBtYXJnaW4tdG9wOiA1MCUgIWltcG9ydGFudDtcbiAgYm9yZGVyOm5vbmUgIWltcG9ydGFudDtcbiAgY29sb3I6I2ZmZjtcbiAgfVxuICBcbiAgYnV0dG9uIHtcbiAgICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuMDY4KSAwcHggMnB4IDVweCAtMXB4LCByZ2JhKDAsIDAsIDAsIDAuMDY4KSAwcHggMXB4IDNweCAtMXB4O1xuICB9XG4gIFxuICAjc3ViY2F0ZWdvcnktcG9wdXBDYXJkIHtcbiAgLyogRnJvbSBodHRwczovL2Nzcy5nbGFzcyAqL1xuICAvKiBGcm9tIGh0dHBzOi8vY3NzLmdsYXNzICovXG4gIGJhY2tncm91bmQ6ICMxOTE4MTg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMCA0cHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC8vIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMy4xcHgpO1xuICAvLyAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMy4xcHgpO1xuICBoZWlnaHQ6MjYlO1xuICBtYXJnaW4tdG9wOiA1MCU7XG4gIGJvcmRlcjpub25lICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiNmZmY7XG4gIH1cbiAgXG4gICNjYXRlZ29yeS1wb3B1cENhcmR7XG4gIC8qIEZyb20gaHR0cHM6Ly9jc3MuZ2xhc3MgKi9cbiAgLyogRnJvbSBodHRwczovL2Nzcy5nbGFzcyAqL1xuICBiYWNrZ3JvdW5kOiAjMTkxODE4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAvLyBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTMuMXB4KTtcbiAgLy8gLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTMuMXB4KTtcbiAgaGVpZ2h0OjI2JTtcbiAgbWFyZ2luLXRvcDogNTAlO1xuICBib3JkZXI6bm9uZSAhaW1wb3J0YW50O1xuICBjb2xvcjojZmZmO1xuICB9XG4gIGlucHV0W3R5cGU9XCJmaWxlXCJdIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9IFxuICBcbiAgaW5wdXRbdHlwZT1kYXRldGltZS1sb2NhbF0ge1xuICAgIGZvbnQtc2l6ZSAgICAgICA6IDE1cHg7XG4gICAgbWFyZ2luICAgICAgICAgIDogMCA1cHg7XG4gICAgd2lkdGggICAgICAgICAgIDogOTglO1xuICAgIGJveC1zaXppbmcgICAgICA6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyICAgICAgICAgIDogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0VCMTU0QjtcbiAgfVxuXG4gIGlvbi1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZiAhaW1wb3J0YW50O1xuICAgIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIGRhcmt0dXJxdW9pc2VcbiAgICAvLyAwJSwgI2QxZjJlN1xuICAgIC8vIDEwMCUpICFpbXBvcnRhbnQ7XG4gIFxuICAgIC0tb2Zmc2V0LWJvdHRvbTogYXV0byAhaW1wb3J0YW50O1xuICAgIC0tb3ZlcmZsb3cgICAgIDogaGlkZGVuO1xuICAgIG92ZXJmbG93ICAgICAgIDogYXV0bztcbiAgXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH0iXX0= */";

/***/ }),

/***/ 1129:
/*!**************************************************************************!*\
  !*** ./src/app/add-product-offer/add-product-offer.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "\n\n\n<ion-content>\n  <div class=\"container\">\n    <div  class=\"signin-div mb-3\" style=\"margin-top: 20px;\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-12 ion-text-left \" style=\"margin-top: 20px;\">\n\n            <svg (click)=\"backToPrivious()\" style=\"margin-top:-8px;cursor:pointer;margin:5px;\"\n              xmlns=\"http://www.w3.org/2000/svg\" width=\"22\" height=\"20\" fill=\"#EB154B\" class=\"bi bi-arrow-left\"\n              viewBox=\"0 0 16 16\">\n              <path fill-rule=\"evenodd\"\n                d=\"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z\" />\n            </svg>\n          </div>\n          <div class=\"col-12\">\n            <h5 class=\"name  ion-text-center\" style=\"color:#121212;\"><b>Add Your Offer</b></h5>\n          </div>\n          <div class=\"col-10\">\n            <p class=\"name mt-3 ion-text-left\" style=\"color:#000000;\">Category :</p>\n          </div>\n \n          <div class=\"col-12\">\n            <input type=\"text\" disabled [(ngModel)]=\"Category\">\n          </div>\n\n\n          <div class=\"col-10\">\n            <p class=\"name mt-3 ion-text-left\" style=\"color:#000000;\">Sub Category :</p>\n          </div>\n  \n          <div class=\"col-12\">\n            <input type=\"text\" disabled [(ngModel)]=\"subcategory\">\n          </div>\n        \n\n          <div class=\"col-10 ion-text-left\">          \n            <p class=\"name mt-2\" style=\"color:#000000;\">Product:</p>\n          </div>\n     \n          <div class=\"col-12\">\n            <input type=\"text\" disabled [(ngModel)]=\"productName\">\n          </div>\n      \n\n        </div>\n       \n\n        <div class=\"row mt-4\">\n          <div class=\"col-6\">\n            <p class=\"edit-name ion-text-left\" style=\"color:#000000;\">Total Cost(₹) : </p>\n          </div>\n\n          <div class=\"col-6\">\n            <input style=\"width: 95%\" [(ngModel)]=\"totalCost\" type=\"text\" id=\"offer\" (keyup)=\"calculateOfferPrice()\" disabled>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <p class=\"edit-name ion-text-left\" style=\"color:#000000;\">Offer End Time\n              :{{this.OfferHour}}{{this.OfferMinute}}</p>\n          </div>\n          <div class=\"col-12\">\n         \n            <input type=\"datetime-local\" [ngModel]=\"expiryDateandTime | date:'yyyy-MM-ddTHH:mm'\"\n            (ngModelChange)=\"change($event)\">\n          </div>\n        </div>\n\n\n        <div class=\"row mt-2\">\n          <div class=\"col-1 mt-2\">\n            <input name=\"offer-select\" type=\"radio\" checked=\"otherofferradio\" value=\"DiscountOffer\" (change)=\"onItemChange()\"\n             >\n\n          </div>\n          <div class=\"col-11 mt-2\" [ngStyle]=\"{'opacity': DiscountOffer ? '0.5' : '1' }\">\n            <div class=\"row \">\n              <div class=\"col-6\">\n                <p class=\"edit-name ion-text-left\" style=\"color:#000000;\">Offer:</p>\n              </div>\n              <div class=\"col-6\">\n                \n                <span><input style=\"width:92%\" [(ngModel)]=\"offer\" type=\"text\" id=\"offer\" (keyup)=\"calculateOfferPrice()\" type=\"text\"\n                    pattern=\"\\d*\" maxlength=\"2\" min=\"1\" max=\"99\" id=\"offer\" [disabled]=\"DiscountOffer\"> <span style=\"margin-left: -30px;\">%</span> </span>\n              </div>\n              \n            </div>\n\n            <div class=\"row\">\n              <div class=\"col-6\">\n                <p class=\"edit-name ion-text-left\" style=\"color:#000000;\">Offer Price(₹) :</p>\n              </div>\n              <div class=\"col-6\">\n                <input style=\"width:92%\" [(ngModel)]=\"offerPrice\" type=\"text\" id=\"offer\" disabled>\n              </div>\n            </div>\n          </div>\n        </div>\n\n\n        <div class=\"row\">\n          <div class=\"col-1\">\n            <input name=\"offer-select\" type=\"radio\"  value=\"OtherOffer\" (change)=\"onItemChange2()\" />\n          </div>\n          <div class=\"col-11\" [ngStyle]=\"{'opacity': OtherOffer ? '0.5' : '1' }\">\n            <div class=\"row\">\n              <div class=\"col-6\">\n                <p class=\"edit-name ion-text-left\" style=\"color:#000000;\">Other Offer :</p>\n              </div>\n              <div class=\"col-6\">\n                <input [(ngModel)]=\"otheroffer\" type=\"text\" id=\"offer\" type=\"text\" id=\"offer\"\n                  placeholder=\"Eg:Buy 2 Get 1 Free\" style=\"font-size: 11px;width:92% !important\" [disabled]=\"otherofferenable\">\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"form-group mt-1 ion-text-left\">\n          <label for=\"exampleFormControlTextarea1\" style=\"color:#000000;\"> Description </label>\n          <textarea style=\"margin-top: 5px;\" class=\"form-control\" [(ngModel)]=\"description\"\n            description id=\"exampleFormControlTextarea1\" rows=\"3\"></textarea>\n        </div>\n        <div class=\"row\">\n          <!-- <div class=\"col-6 ion-text-center\">\n            <button *ngIf=\"isVisible\" (click)=\"offerDelete()\" class=\"btn btn-sm delete-btn mt-2\">Delete</button>\n          </div> -->\n          <div class=\"col-12 ion-text-center\">\n\n            <ion-button  *ngIf=\"isVisible\" (click)=\"addoffer()\"  style=\"width: 95%;font-size: 15px;\"  class=\"secondarySmallBtn mb-4\" color=\"none\" >\n              Post</ion-button>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_add-product-offer_add-product-offer_module_ts.js.map