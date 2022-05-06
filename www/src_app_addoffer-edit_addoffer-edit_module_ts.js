"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_addoffer-edit_addoffer-edit_module_ts"],{

/***/ 7099:
/*!***************************************************************!*\
  !*** ./src/app/addoffer-edit/addoffer-edit-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddofferEditPageRoutingModule": () => (/* binding */ AddofferEditPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _addoffer_edit_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addoffer-edit.page */ 5776);




const routes = [
    {
        path: '',
        component: _addoffer_edit_page__WEBPACK_IMPORTED_MODULE_0__.AddofferEditPage
    }
];
let AddofferEditPageRoutingModule = class AddofferEditPageRoutingModule {
};
AddofferEditPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddofferEditPageRoutingModule);



/***/ }),

/***/ 4329:
/*!*******************************************************!*\
  !*** ./src/app/addoffer-edit/addoffer-edit.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddofferEditPageModule": () => (/* binding */ AddofferEditPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _addoffer_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addoffer-edit-routing.module */ 7099);
/* harmony import */ var _addoffer_edit_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addoffer-edit.page */ 5776);







let AddofferEditPageModule = class AddofferEditPageModule {
};
AddofferEditPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _addoffer_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddofferEditPageRoutingModule
        ],
        declarations: [_addoffer_edit_page__WEBPACK_IMPORTED_MODULE_1__.AddofferEditPage]
    })
], AddofferEditPageModule);



/***/ }),

/***/ 5776:
/*!*****************************************************!*\
  !*** ./src/app/addoffer-edit/addoffer-edit.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddofferEditPage": () => (/* binding */ AddofferEditPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _addoffer_edit_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addoffer-edit.page.html?ngResource */ 9673);
/* harmony import */ var _addoffer_edit_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addoffer-edit.page.scss?ngResource */ 6483);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _shared_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/http.service */ 8191);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ 598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);









let AddofferEditPage = class AddofferEditPage {
    constructor(http, router, route, datepipe) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.datepipe = datepipe;
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
        this.category_tbid = "";
        this.subCategoryNotfound = false;
        this.expiryDateandTime = new Date;
        this.addnewcategorypopup = false;
        this.addnewsubcategorypopup = false;
        this.addnewproductpopup = false;
        route.params.subscribe(val => {
            this.sellerAllDetails();
            //this.getsubCategoryList()
            this.gettBid();
            this.readOneOffer();
            console.log(this.productName);
            this.defaultSubCategoryList();
            this.defaultProductList();
            this.isVisible = true;
        });
    }
    ngOnInit() {
    }
    backAddoffer() {
        this.router.navigate(['/tabs/tab4']);
    }
    getCategoryList() {
        var obj = {
            store_category_id: this.store_category_id
        };
        this.http.post('/list_category', obj).subscribe((response) => {
            this.categoryList = response.records;
            console.log(response.records);
        }, (error) => {
            console.log(error);
        });
    }
    gettBid() {
        this.route.queryParams.subscribe(params => {
            console.log(params.tbid);
            this.tbid_value = params.tbid;
            this.OfferproductName = params.tbid;
        });
        const o = this.tbid_value;
        console.log(o);
        this.http.get('/read_one_offer?o=' + o).subscribe((response) => {
            this.tbid_value = response.records.tbid;
            console.log(response);
        }, (error) => {
            console.log(error);
        });
    }
    readOneOffer() {
        this.http.get('/read_one_offer?o=' + this.OfferproductName).subscribe((response) => {
            console.log(response.records);
            this.category_tbid = response.records.category_id;
            this.description = response.records.description;
            this.Category = response.records.category;
            this.subcategory = response.records.subcategory;
            this.productName = response.records.product;
            this.offer = response.records.offer;
            this.otheroffer = response.records.other_offer;
            this.totalCost = response.records.total_cost;
            this.offerPrice = response.records.offer_price;
            this.tbid = response.records.tbid;
            this.producttbid = response.records.product;
            this.offer_end_time = response.records.offer_end_time;
            this.subcategory_tbid = response.records.subcategory_id;
            this.product_tbid = response.records.product_id;
            this.calculateOfferPrice();
            if (this.otheroffer != "") {
                this.offer = "";
                this.offerPrice = "";
                this.offer_checked = false;
                this.other_offer_checked = true;
            }
            else {
                this.otheroffer = "";
                this.offer_checked = true;
                this.other_offer_checked = false;
            }
        }, (error) => {
            console.log(error);
        });
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
    SubCategoryPopupModel(data) {
        console.log(data.subcategory);
        const s = data.subcategory;
        this.http.get('/read_one_subcategory?s=' + s).subscribe((response) => {
            this.subcategory_tbid = response.records.tbid;
            console.log(response.records.tbid);
            this.subcategory = data.subcategory;
        }, (error) => {
            console.log(error);
        });
    }
    popupModel(data) {
        const formdata = new FormData();
        formdata.append("category", data.category);
        this.category_tbid = data.category;
        this.Category = data.category;
        const c = data.category;
        console.log(c);
        this.http.get('/read_one_category?c=' + c).subscribe((response) => {
            this.category_tbid = response.records.tbid;
            console.log(response.records.tbid);
        }, (error) => {
            console.log(error);
        });
    }
    categorysubmit() {
        this.isVisible = true;
        const obj = {
            category_id: this.category_tbid,
            store_category_id: this.store_category_id
        };
        this.http.postFormData('/list_subcategory', obj).subscribe((response) => {
            console.log(response.records);
            this.subcategoryList = response.records;
            console.log(this.subcategoryList);
        }, (error) => {
            console.log(error);
            this.subCategoryNotfound = true;
            this.subcategoryList = [];
        });
        this.addnewcategorypopup = false;
    }
    offerDelete() {
        this.router.navigate(['/tabs/tab4']);
        const obj = {
            tbid: this.tbid_value
        };
        this.http.postFormData('/delete_offer', obj).subscribe((response) => {
            console.log(response);
            if (response.success == "true") {
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
                    title: 'Deleted successfully'
                });
            }
        }, (error) => {
            console.log(error);
        });
    }
    change(data) {
        var time = this.datepipe.transform((data), 'HH:MM:SS');
        let date = this.datepipe.transform((data), 'yyyy-MM-dd');
        this.expireddateandTime = date + " " + time;
    }
    addoffer() {
        const p = this.productName;
        console.log(p);
        this.http.get('/read_one_product?p=' + p).subscribe((response) => {
            this.producttbid = response.records.tbid;
            if (response.success == "true") {
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
                var expiryTime;
                if (this.expireddateandTime == undefined) {
                    expiryTime = this.offer_end_time;
                }
                else {
                    expiryTime = this.expireddateandTime;
                }
                const productData = {
                    tbid: this.tbid,
                    category_id: this.category_tbid,
                    subcategory_id: this.subcategory_tbid,
                    product_id: this.product_tbid,
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
                if (this.offer.length > 0 || this.otheroffer.length > 0) {
                    this.http.postFormData('/update_offer', productData).subscribe((response) => {
                        console.log(response);
                        if (response.success == "true") {
                            this.router.navigate(['/tabs/tab4']);
                            if (response.success == "true") {
                                console.log(response);
                                console.log(productData);
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
                                    title: 'Offer  Successfully Posted'
                                });
                            }
                        }
                    }, (error) => {
                        console.log(error);
                        const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().mixin({
                            toast: true,
                            position: 'top-end',
                            showConfirmButton: false,
                            timer: 1500,
                            timerProgressBar: true,
                            didOpen: (toast) => {
                                toast.addEventListener('mouseenter', (sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().stopTimer));
                                toast.addEventListener('mouseleave', (sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().resumeTimer));
                            }
                        });
                        Toast.fire({
                            icon: 'error',
                            title: 'Kindly Fill All The Details'
                        });
                    });
                }
                else {
                    const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 1500,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.addEventListener('mouseenter', (sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().stopTimer));
                            toast.addEventListener('mouseleave', (sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().resumeTimer));
                        }
                    });
                    Toast.fire({
                        icon: 'error',
                        title: 'Kindly Fill All The Details'
                    });
                }
            }
        }), (error) => {
            console.log(error);
        };
    }
    hideaddnewcategorypopup() {
        this.isVisible = true;
        this.addnewcategorypopup = false;
    }
    showaddnewcategorypopup() {
        this.isVisible = false;
        this.addnewcategorypopup = true;
    }
    showaddnewsubcategorypopup() {
        this.isVisible = false;
        this.addnewsubcategorypopup = true;
    }
    hideaddnewsubcategorypopup() {
        this.isVisible = true;
        this.addnewsubcategorypopup = false;
    }
    subcategorysubmit(value) {
        console.log(value.subcategory);
        this.http.get('/read_one_subcategory?s=' + value.subcategory).subscribe((response) => {
            this.subcategory_tbid = response.records.tbid;
            console.log(this.subcategory_tbid);
            const obj = {
                subcategory_id: this.subcategory_tbid,
                store_category_id: this.store_category_id,
                category_id: this.category_tbid,
            };
            console.log(obj);
            this.http.postFormData('/read_product', obj).subscribe((response) => {
                console.log(response.records);
                this.productList = response.records;
                this.ProductNotfound = false;
            }, (error) => {
                console.log(error);
                this.productList = [];
                this.ProductNotfound = true;
            });
        });
        this.hideaddnewsubcategorypopup();
    }
    showaddproductpopup() {
        this.isVisible = false;
        this.addnewproductpopup = true;
    }
    hideaddproductpopup() {
        this.isVisible = true;
        this.addnewproductpopup = false;
    }
    productselectform(value) {
        this.productName = value.productName;
        console.log(this.productName);
        const p = this.productName;
        this.http.get('/read_one_product?p=' + p).subscribe((response) => {
            if (response.success == "true") {
                this.isVisible = true;
            }
            this.product_tbid = response.records.tbid;
            this.totalCost = response.records.cost;
            console.log(this.product_tbid);
        }, (error) => {
            console.log(error);
            this.isVisible = true;
        });
        this.addnewproductpopup = false;
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
        this.offerPrice = null;
        this.OtherOffer = false;
        this.otherofferenable = false;
    }
    defaultSubCategoryList() {
        const obj = {
            category_id: this.category_tbid
        };
        console.log(obj);
        this.http.postFormData('/read_subcategory', obj).subscribe((response) => {
            console.log(response.records);
            this.subcategoryList = response.records;
            console.log(this.subcategoryList);
            this.subCategoryNotfound = false;
        }, (error) => {
            console.log(error);
            this.subCategoryNotfound = true;
            this.subcategoryList = [];
        });
    }
    defaultProductList() {
        console.log(this.subcategory);
        this.http.get('/read_one_subcategory?s=' + this.subcategory).subscribe((response) => {
            this.subcategory_tbid = response.records.tbid;
            console.log(this.subcategory_tbid);
            const obj = {
                subcategory_id: this.subcategory_tbid, store_category_id: this.store_category_id,
                category_id: this.category_tbid,
            };
            console.log(obj);
            this.http.postFormData('/read_product', obj).subscribe((response) => {
                console.log(response.records);
                this.productList = response.records;
                this.ProductNotfound = false;
                this.hideaddnewsubcategorypopup();
            }, (error) => {
                console.log(error);
                this.productList = [];
                this.ProductNotfound = true;
            });
        });
    }
    sellerAllDetails() {
        this.http.get('/seller_details').subscribe((response) => {
            if (response.success == "true") {
                console.log(response);
                this.store_category_id = response.records.store_category_id;
                this.getCategoryList();
            }
        }, (error) => {
            console.log(error);
        });
    }
};
AddofferEditPage.ctorParameters = () => [
    { type: _shared_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe }
];
AddofferEditPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-addoffer-edit',
        template: _addoffer_edit_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_addoffer_edit_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddofferEditPage);



/***/ }),

/***/ 6483:
/*!******************************************************************!*\
  !*** ./src/app/addoffer-edit/addoffer-edit.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "input[type=text] {\n  font-size: 15px;\n  margin: 0 8px;\n  width: 92%;\n  box-sizing: border-box;\n  background-color: transparent;\n  border: none !important;\n  border-bottom: 2px solid var(--ion-color-primary) !important;\n}\n\n.add-new-btn {\n  background-color: var(--ion-color-primary) !important;\n  border: 1px solid var(--ion-color-primary);\n}\n\n.signin-btn {\n  background-color: var(--ion-color-secondary);\n  color: var(--ion-color-light);\n  border: 1px solid var(--ion-color-secondary);\n}\n\ninput:focus {\n  outline: none !important;\n  border-bottom: 2px solid var(--ion-color-success) !important;\n}\n\n#card {\n  z-index: 1 !important;\n  height: 36% !important;\n  top: 20%;\n  box-shadow: none !important;\n  background: rgba(255, 255, 255, 0.54);\n  border-radius: 5px;\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n}\n\n.card {\n  background-color: var(--ion-color-light);\n  border: 1px solid #fff;\n  border-radius: 8px;\n  width: 96% !important;\n  margin: 5px;\n  box-shadow: 2px 2px 2px 2px #ccc !important;\n  border: 1px solid #fff;\n}\n\n.delete-btn {\n  background-color: var(--ion-color-secondary) !important;\n  color: var(--ion-color-light);\n  text-align: center;\n}\n\n.update-btn {\n  background-color: var(--ion-color-primary);\n  color: var(--ion-color-light);\n  text-align: center;\n}\n\n.btn {\n  margin: 10px 0 !important;\n}\n\n.pop-up-card {\n  box-shadow: none !important;\n  position: absolute;\n  top: 10%;\n  z-index: 1;\n  right: 3px;\n  border-radius: 10px;\n}\n\n#product-popupCard {\n  /* From https://css.glass */\n  /* From https://css.glass */\n  background: rgba(0, 0, 0, 0.18);\n  border-radius: 6px;\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n  -webkit-backdrop-filter: blur(10.2px);\n          backdrop-filter: blur(10.2px);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  height: 26%;\n  margin-top: 50% !important;\n  border: none !important;\n  color: var(--ion-color-light);\n}\n\nbutton {\n  box-shadow: rgba(50, 50, 93, 0.068) 0px 2px 5px -1px, rgba(0, 0, 0, 0.068) 0px 1px 3px -1px;\n}\n\n#subcategory-popupCard {\n  /* From https://css.glass */\n  /* From https://css.glass */\n  background: rgba(0, 0, 0, 0.18);\n  border-radius: 6px;\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n  -webkit-backdrop-filter: blur(10.2px);\n          backdrop-filter: blur(10.2px);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  height: 26%;\n  margin-top: 50% !important;\n  border: none !important;\n  color: var(--ion-color-light);\n}\n\n#category-popupCard {\n  /* From https://css.glass */\n  /* From https://css.glass */\n  background: rgba(0, 0, 0, 0.18);\n  border-radius: 6px;\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n  -webkit-backdrop-filter: blur(10.2px);\n          backdrop-filter: blur(10.2px);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  height: 26%;\n  margin-top: 50% !important;\n  border: none !important;\n  color: var(--ion-color-light);\n}\n\ninput[type=file] {\n  display: none;\n}\n\ninput[type=datetime-local] {\n  font-size: 15px;\n  margin: 0 5px;\n  width: 90%;\n  box-sizing: border-box;\n  border: none;\n  background-color: transparent !important;\n  border-bottom: 2px solid var(--ion-color-primary);\n}\n\n.signin-div {\n  background-color: var(--ion-color-light);\n}\n\nion-content {\n  background-color: var(--ion-color-light-shade) !important;\n  --offset-bottom: auto !important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZG9mZmVyLWVkaXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0VBQ0EsNERBQUE7QUFDRjs7QUFFQTtFQUNFLHFEQUFBO0VBQ0EsMENBQUE7QUFDRjs7QUFDQTtFQUNFLDRDQUFBO0VBQ0EsNkJBQUE7RUFDQSw0Q0FBQTtBQUVGOztBQUNBO0VBQ0Usd0JBQUE7RUFDQSw0REFBQTtBQUVGOztBQUFBO0VBQ0UscUJBQUE7RUFFQSxzQkFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtBQUVGOztBQUVBO0VBQ0Usd0NBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBR0EsMkNBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsdURBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwwQ0FBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBSUE7RUFDRSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFJQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7RUFDQSxxQ0FBQTtVQUFBLDZCQUFBO0VBQ0EsMENBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0FBREE7O0FBSUE7RUFDRSwyRkFBQTtBQURGOztBQUlBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtFQUNBLHFDQUFBO1VBQUEsNkJBQUE7RUFDQSwwQ0FBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7QUFEQTs7QUFJQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7RUFDQSxxQ0FBQTtVQUFBLDZCQUFBO0VBQ0EsMENBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0FBREE7O0FBR0E7RUFDRSxhQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSx3Q0FBQTtFQUNBLGlEQUFBO0FBQUY7O0FBR0E7RUFDRSx3Q0FBQTtBQUFGOztBQUdBO0VBQ0UseURBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUFGOztBQUVFO0VBQ0UsYUFBQTtBQUFKIiwiZmlsZSI6ImFkZG9mZmVyLWVkaXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXRbdHlwZT10ZXh0XSB7XG4gIGZvbnQtc2l6ZSAgICAgICA6IDE1cHg7XG4gIG1hcmdpbiAgICAgICAgICA6IDAgOHB4O1xuICB3aWR0aCAgICAgICAgICAgOiA5MiU7XG4gIGJveC1zaXppbmcgICAgICA6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6bm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tICAgOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XG59XG5cbi5hZGQtbmV3LWJ0bntcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjoxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuLnNpZ25pbi1idG57XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgYm9yZGVyOjFweCBzb2xpZCAgdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSkgO1xufVxuXG5pbnB1dDpmb2N1cyB7XG4gIG91dGxpbmUgICA6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbSAgIDogMnB4IHNvbGlkICB2YXIoLS1pb24tY29sb3Itc3VjY2VzcykgIWltcG9ydGFudDtcbn1cbiNjYXJke1xuICB6LWluZGV4OiAxICFpbXBvcnRhbnQ7XG4gIFxuICBoZWlnaHQ6IDM2JSAhaW1wb3J0YW50O1xuICB0b3A6MjAlO1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMCA0cHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC8vIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMy4xcHgpO1xuICAvLyAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMy4xcHgpO1xufVxuLmNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yICA6ICB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBib3JkZXIgICAgICAgICAgICA6IDFweCBzb2xpZCAjZmZmO1xuICBib3JkZXItcmFkaXVzICAgICA6IDhweDtcbiAgd2lkdGggICAgICAgICAgICAgOiA5NiUgIWltcG9ydGFudDtcbiAgbWFyZ2luICAgICAgICAgICAgOiA1cHg7XG4gIC1tb3otYm94LXNoYWRvdyAgIDogMCAwIDNweCAjY2NjO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAzcHggI2NjYztcbiAgYm94LXNoYWRvdyAgICAgICAgOiAycHggMnB4IDJweCAycHggI2NjYyAhaW1wb3J0YW50O1xuICBib3JkZXIgICAgICAgICAgICA6IDFweCBzb2xpZCAjZmZmO1xufVxuXG4uZGVsZXRlLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSAhaW1wb3J0YW50O1xuICBjb2xvciAgICAgICAgICAgOiAgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgdGV4dC1hbGlnbiAgICAgIDogY2VudGVyO1xufVxuXG4udXBkYXRlLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGNvbG9yICAgICAgICAgICA6ICB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICB0ZXh0LWFsaWduICAgICAgOiBjZW50ZXI7XG59XG5cbi5idG4ge1xuICBtYXJnaW46IDEwcHggMCAhaW1wb3J0YW50O1xufVxuXG5cblxuLnBvcC11cC1jYXJkIHtcbiAgYm94LXNoYWRvdyAgIDogbm9uZSAhaW1wb3J0YW50O1xuICBwb3NpdGlvbiAgICAgOiBhYnNvbHV0ZTtcbiAgdG9wICAgICAgICAgIDogMTAlO1xuICB6LWluZGV4ICAgICAgOiAxO1xuICByaWdodCAgICAgICAgOiAzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbiNwcm9kdWN0LXBvcHVwQ2FyZHtcbi8qIEZyb20gaHR0cHM6Ly9jc3MuZ2xhc3MgKi9cbi8qIEZyb20gaHR0cHM6Ly9jc3MuZ2xhc3MgKi9cbmJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xOCk7XG5ib3JkZXItcmFkaXVzOiA2cHg7XG5ib3gtc2hhZG93OiAwIDRweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbmJhY2tkcm9wLWZpbHRlcjogYmx1cigxMC4ycHgpO1xuYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuaGVpZ2h0OjI2JTtcbm1hcmdpbi10b3A6IDUwJSAhaW1wb3J0YW50O1xuYm9yZGVyOm5vbmUgIWltcG9ydGFudDtcbmNvbG9yOnZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5cbmJ1dHRvbiB7XG4gIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4wNjgpIDBweCAycHggNXB4IC0xcHgsIHJnYmEoMCwgMCwgMCwgMC4wNjgpIDBweCAxcHggM3B4IC0xcHg7XG59XG5cbiNzdWJjYXRlZ29yeS1wb3B1cENhcmQge1xuLyogRnJvbSBodHRwczovL2Nzcy5nbGFzcyAqL1xuLyogRnJvbSBodHRwczovL2Nzcy5nbGFzcyAqL1xuYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjE4KTtcbmJvcmRlci1yYWRpdXM6IDZweDtcbmJveC1zaGFkb3c6IDAgNHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwLjJweCk7XG5ib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG5oZWlnaHQ6MjYlO1xubWFyZ2luLXRvcDogNTAlICFpbXBvcnRhbnQ7XG5ib3JkZXI6bm9uZSAhaW1wb3J0YW50O1xuY29sb3I6dmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cblxuI2NhdGVnb3J5LXBvcHVwQ2FyZHtcbi8qIEZyb20gaHR0cHM6Ly9jc3MuZ2xhc3MgKi9cbi8qIEZyb20gaHR0cHM6Ly9jc3MuZ2xhc3MgKi9cbmJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xOCk7XG5ib3JkZXItcmFkaXVzOiA2cHg7XG5ib3gtc2hhZG93OiAwIDRweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbmJhY2tkcm9wLWZpbHRlcjogYmx1cigxMC4ycHgpO1xuYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuaGVpZ2h0OjI2JTtcbm1hcmdpbi10b3A6IDUwJSAhaW1wb3J0YW50O1xuYm9yZGVyOm5vbmUgIWltcG9ydGFudDtcbmNvbG9yOnZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5pbnB1dFt0eXBlPVwiZmlsZVwiXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59IFxuXG5pbnB1dFt0eXBlPWRhdGV0aW1lLWxvY2FsXSB7XG4gIGZvbnQtc2l6ZSAgICAgICA6IDE1cHg7XG4gIG1hcmdpbiAgICAgICAgICA6IDAgNXB4O1xuICB3aWR0aCAgICAgICAgICAgOiA5MCU7XG4gIGJveC1zaXppbmcgICAgICA6IGJvcmRlci1ib3g7XG4gIGJvcmRlciAgICAgICAgICA6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4uc2lnbmluLWRpdntcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpICFpbXBvcnRhbnQ7XG4gIC0tb2Zmc2V0LWJvdHRvbTogYXV0byAhaW1wb3J0YW50O1xuICAtLW92ZXJmbG93OiBoaWRkZW47XG4gIG92ZXJmbG93OiBhdXRvO1xuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59Il19 */";

/***/ }),

/***/ 9673:
/*!******************************************************************!*\
  !*** ./src/app/addoffer-edit/addoffer-edit.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<!------------ Header  ---------------->\n<ion-toolbar color=\"light \">\n  <ion-buttons slot=\"start\">\n    <ion-menu-button style=\"margin-top:15px;color:#121212\" autoHide=\"false\">\n      <svg width=\"34\" height=\"34\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M5 7H19\" stroke=\"#121212\" stroke-width=\"2\" stroke-linecap=\"round\" />\n        <path d=\"M5 12H15\" stroke=\"#121212\" stroke-width=\"2\" stroke-linecap=\"round\" />\n        <path d=\"M5 17H11\" stroke=\"#121212\" stroke-width=\"2\" stroke-linecap=\"round\" />\n      </svg>\n    </ion-menu-button>\n  </ion-buttons>\n\n  <div class=\"row\">\n    <div class=\"col-4\">\n      <h5 style=\"color:#121212;margin-top:10px\"><b></b></h5>\n    </div>\n    <div class=\"col-8 mt-2 mx-2\" style=\"text-align: right;width: 90%;\">\n      <svg (click)=\"notification()\" style=\"margin:3px;\" width=\"26\" height=\"26\" viewBox=\"0 0 24 24\" fill=\"none\"\n        xmlns=\"http://www.w3.org/2000/svg\">\n        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\n          d=\"M13.7942 3.29494C13.2296 3.10345 12.6258 3 12 3C9.1535 3 6.7622 5.14032 6.44786 7.96942L6.19605 10.2356L6.1896 10.2933C6.06065 11.417 5.69489 12.5005 5.11646 13.4725L5.08667 13.5222L4.50863 14.4856C3.98408 15.3599 3.7218 15.797 3.77842 16.1559C3.8161 16.3946 3.93899 16.6117 4.12435 16.7668C4.40292 17 4.9127 17 5.93224 17H18.0678C19.0873 17 19.5971 17 19.8757 16.7668C20.061 16.6117 20.1839 16.3946 20.2216 16.1559C20.2782 15.797 20.0159 15.3599 19.4914 14.4856L18.9134 13.5222L18.8836 13.4725C18.4273 12.7059 18.1034 11.8698 17.9236 10.9994C15.1974 10.9586 13 8.73592 13 6C13 5.00331 13.2916 4.07473 13.7942 3.29494ZM16.2741 4.98883C16.0999 5.28551 16 5.63109 16 6C16 6.94979 16.6621 7.74494 17.5499 7.94914C17.4205 6.82135 16.9608 5.80382 16.2741 4.98883Z\"\n          fill=\"black\" />\n        <path\n          d=\"M9 17C9 17.394 9.0776 17.7841 9.22836 18.1481C9.37913 18.512 9.6001 18.8427 9.87868 19.1213C10.1573 19.3999 10.488 19.6209 10.8519 19.7716C11.2159 19.9224 11.606 20 12 20C12.394 20 12.7841 19.9224 13.1481 19.7716C13.512 19.6209 13.8427 19.3999 14.1213 19.1213C14.3999 18.8427 14.6209 18.512 14.7716 18.1481C14.9224 17.7841 15 17.394 15 17L12 17H9Z\"\n          fill=\"black\" />\n        <circle cx=\"18\" cy=\"6\" r=\"2.5\" fill=\"#eb154b\" stroke=\"#eb154b\" />\n      </svg>\n\n      <!-- <ion-badge style=\"border-radius: 50%;margin-left: -14px ;color:#eb154b ;font-size: 12px;\" color=\"light\">10</ion-badge> -->\n\n    </div>\n  </div>\n</ion-toolbar>\n\n\n\n<ion-content [ngStyle]=\"{'opacity':addnewproductpopup ? '0.52' : '1'}\"\n  [ngStyle]=\"{'opacity':addnewcategorypopup ? '0.52' : '1'}\"\n  [ngStyle]=\"{'opacity':addnewsubcategorypopup ? '0.52' : '1'}\">\n  <div class=\"container\">\n    <div class=\"signin-div mb-3\" style=\"margin-top: 10px;\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-12 ion-text-left \" style=\"margin-top: 20px;\">\n\n            <svg (click)=\"backAddoffer()\" style=\"margin-top:-8px;cursor:pointer;margin:5px;\"\n              xmlns=\"http://www.w3.org/2000/svg\" width=\"22\" height=\"20\" fill=\"#EB154B\" class=\"bi bi-arrow-left\"\n              viewBox=\"0 0 16 16\">\n              <path fill-rule=\"evenodd\"\n                d=\"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z\" />\n            </svg>\n          </div>\n          <div class=\"col-12\">\n            <h5 class=\"title  ion-text-center\"><b>Edit Your Offer</b></h5>\n          </div>\n          <div class=\"col-10\">\n            <p class=\"title mt-3 ion-text-left\">Category :</p>\n          </div>\n          <div class=\"col-2 mt-2\">\n\n            <svg *ngIf=\"isVisible\" (click)=\"showaddnewcategorypopup()\" style=\"margin: 5px;\" width=\"22\" height=\"18\"\n              fill=\"currentColor\" class=\"bi bi-pencil-square\" viewBox=\"0 0 16 16\">\n              <path\n                d=\"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z\" />\n              <path fill-rule=\"evenodd\"\n                d=\"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z\" />\n            </svg>\n\n          </div>\n          <div class=\"col-12\">\n            <input type=\"text\" disabled [(ngModel)]=\"Category\">\n          </div>\n\n\n          <div class=\"col-10\">\n            <p class=\"name mt-3 ion-text-left\">Sub Category :</p>\n          </div>\n          <div class=\"col-2 mt-2\">\n            <svg *ngIf=\"isVisible\" (click)=\"showaddnewsubcategorypopup()\" style=\"margin: 5px;\" width=\"22\" height=\"18\"\n              fill=\"currentColor\" class=\"bi bi-pencil-square\" viewBox=\"0 0 16 16\">\n              <path\n                d=\"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z\" />\n              <path fill-rule=\"evenodd\"\n                d=\"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z\" />\n            </svg>\n\n\n          </div>\n          <div class=\"col-12\">\n            <input type=\"text\" disabled [(ngModel)]=\"subcategory\">\n          </div>\n\n\n\n\n\n          <div class=\"col-10 ion-text-left\">\n            <p class=\"name mt-2\">Product:</p>\n          </div>\n          <div class=\"col-2 mt-2\">\n            <svg *ngIf=\"isVisible\" (click)=\"showaddproductpopup()\" style=\"margin: 5px;\" width=\"22\" height=\"18\"\n              fill=\"currentColor\" class=\"bi bi-pencil-square\" viewBox=\"0 0 16 16\">\n              <path\n                d=\"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z\" />\n              <path fill-rule=\"evenodd\"\n                d=\"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z\" />\n            </svg>\n\n          </div>\n          <div class=\"col-12\">\n            <input type=\"text\" disabled [(ngModel)]=\"productName\">\n          </div>\n\n\n        </div>\n\n\n        <div class=\"row mt-4\">\n          <div class=\"col-6\">\n            <p class=\"edit-name ion-text-left\">Total Cost(₹) : </p>\n          </div>\n\n          <div class=\"col-6\">\n            <input [(ngModel)]=\"totalCost\" type=\"text\" id=\"offer\" (keyup)=\"calculateOfferPrice()\" disabled>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <p class=\"edit-name ion-text-left\">Offer End Time\n            </p>\n          </div>\n          <div class=\"col-12\">\n            <!-- <input [(ngModel)]=\"offerTime\" type=\"time\" id=\"offer\"> -->\n            <input type=\"datetime-local\" [ngModel]=\"offer_end_time | date:'yyyy-MM-ddTHH:mm'\"\n              (ngModelChange)=\"change($event)\">\n          </div>\n        </div>\n\n\n        <div class=\"row mt-2\">\n          <div class=\"col-1\">\n            <input name=\"offer-select\" type=\"radio\" value=\"DiscountOffer\" (change)=\"onItemChange()\"\n              [checked]=\"offer_checked\">\n\n          </div>\n          <div class=\"col-11\" [ngStyle]=\"{'opacity': DiscountOffer ? '0.5' : '1' }\">\n            <div class=\"row \">\n              <div class=\"col-6\">\n                <p class=\"edit-name ion-text-left\">Offer:</p>\n              </div>\n              <div class=\"col-4\">\n\n                <span><input [(ngModel)]=\"offer\" type=\"text\" id=\"offer\" (keyup)=\"calculateOfferPrice()\" type=\"text\"\n                    pattern=\"\\d*\" maxlength=\"2\" min=\"1\" max=\"99\" id=\"offer\" [disabled]=\"DiscountOffer\"></span>\n              </div>\n              <div class=\"col-2\">\n                <p>%</p>\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <div class=\"col-6\">\n                <p class=\"edit-name ion-text-left\">Offer Price(₹) :</p>\n              </div>\n              <div class=\"col-6\">\n                <input [(ngModel)]=\"offerPrice\" type=\"text\" id=\"offer\" disabled>\n              </div>\n            </div>\n          </div>\n        </div>\n\n\n        <div class=\"row\">\n          <div class=\"col-1\">\n            <input name=\"offer-select\" type=\"radio\" value=\"OtherOffer\" (change)=\"onItemChange2()\"\n              [checked]=\"other_offer_checked\" />\n          </div>\n          <div class=\"col-11\" [ngStyle]=\"{'opacity': OtherOffer ? '0.5' : '1' }\">\n            <div class=\"row\">\n              <div class=\"col-6\">\n                <p class=\"edit-name ion-text-left\">Other Offer :</p>\n              </div>\n              <div class=\"col-6\">\n                <input [(ngModel)]=\"otheroffer\" type=\"text\" id=\"offer\" type=\"text\" id=\"offer\"\n                  placeholder=\"Eg:Buy 2 Get 1 Free\" style=\"font-size: 12px;\" [disabled]=\"otherofferenable\">\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"form-group mt-3 ion-text-center\">\n          <label for=\"exampleFormControlTextarea1\"> Description </label>\n          <textarea style=\"margin-top: 5px;\" class=\"form-control\" [(ngModel)]=\"description\" description\n            id=\"exampleFormControlTextarea1\" rows=\"3\"></textarea>\n        </div>\n        <div class=\"row mb-4\">\n          <div class=\"col-6 ion-text-center\">\n\n            <ion-button *ngIf=\"isVisible\" style=\"width: 95%;\" class=\"secondarySmallBtn\" color=\"none\"\n              (click)=\"offerDelete()\">\n              Delete</ion-button>\n\n          </div>\n          <div class=\"col-6 ion-text-center\">\n\n            <ion-button *ngIf=\"isVisible\" style=\"width: 95%;\" class=\"primarySmallBtn\" color=\"none\" (click)=\"addoffer()\">\n              Post</ion-button>\n\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</ion-content>\n\n<!------------ add new category popup ------------->\n\n<div *ngIf=\"addnewcategorypopup\" class=\"container pop-up-model\">\n  <div class=\"card pop-up-card ion-text-center\" style=\"padding: 7px;\" id=\"category-popupCard\">\n    <div style=\"margin-top: 2px;\" class=\"title\">\n      <div class=\"row\">\n        <div class=\"col-10\">\n          <h4><b>Update category</b></h4>\n        </div>\n        <div class=\"col-2\">\n          <div class=\"ion-margin-top ion-text-center\">\n\n            <svg (click)=\"hideaddnewcategorypopup()\" style=\"margin-top:-8px;cursor:pointer\" width=\"24\" height=\"27\"\n              viewBox=\"0 0 24 27\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n              <g filter=\"url(#filter0_d_1056_2574)\">\n                <path d=\"M18 6L6 18\" stroke=\"#EB154B\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n                <path d=\"M6 6L18 18\" stroke=\"#EB154B\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n              </g>\n              <defs>\n                <filter id=\"filter0_d_1056_2574\" x=\"-4\" y=\"0\" width=\"32\" height=\"32\" filterUnits=\"userSpaceOnUse\"\n                  color-interpolation-filters=\"sRGB\">\n                  <feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\" />\n                  <feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\"\n                    result=\"hardAlpha\" />\n                  <feOffset dy=\"4\" />\n                  <feGaussianBlur stdDeviation=\"2\" />\n                  <feComposite in2=\"hardAlpha\" operator=\"out\" />\n                  <feColorMatrix type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0\" />\n                  <feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_1056_2574\" />\n                  <feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_1056_2574\" result=\"shape\" />\n                </filter>\n              </defs>\n            </svg>\n\n\n\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row ion-text-center mb-4\">\n      <form #categoryselect=\"ngForm\" (change)=\"popupModel(categoryselect.value)\" (ngSubmit)=\"categorysubmit()\">\n        <div class=\"col-12 \">\n          <div  style=\"width: 90%;margin: auto;\" class=\"select\">\n            <select ngModel name=\"category\">\n              <option value=\"\" disabled selected>Select Your Category</option>\n              <option *ngFor=\"let cat of categoryList\" value=\"{{cat.category}}\">{{cat.category}}</option>\n            </select>\n          </div>\n        </div>\n\n        <ion-button type=\"submit\" style=\"width: 90%;\"  class=\"secondaryLargeBtn mt-3\" color=\"none\" >\n          Update Category</ion-button>\n      </form>\n    </div>\n  </div>\n</div>\n\n\n<!------------ add new subcategory popup ------------->\n\n<div *ngIf=\"addnewsubcategorypopup\" class=\"container pop-up-model\">\n  <div class=\"card pop-up-card ion-text-center\" style=\"padding: 7px;\" id=\"subcategory-popupCard\">\n\n    <div style=\"margin-top: 2px;\" class=\"title\">\n      <div class=\"row\">\n        <div class=\"col-10\">\n          <h4><b>Update Sub Category</b></h4>\n        </div>\n        <div class=\"col-2\">\n          <div class=\"ion-margin-top ion-text-center\">\n\n\n            <svg (click)=\"hideaddnewsubcategorypopup()\" style=\"margin-top:-8px;cursor:pointer\" width=\"24\" height=\"27\"\n              viewBox=\"0 0 24 27\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n              <g filter=\"url(#filter0_d_1056_2574)\">\n                <path d=\"M18 6L6 18\" stroke=\"#EB154B\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n                <path d=\"M6 6L18 18\" stroke=\"#EB154B\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n              </g>\n              <defs>\n                <filter id=\"filter0_d_1056_2574\" x=\"-4\" y=\"0\" width=\"32\" height=\"32\" filterUnits=\"userSpaceOnUse\"\n                  color-interpolation-filters=\"sRGB\">\n                  <feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\" />\n                  <feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\"\n                    result=\"hardAlpha\" />\n                  <feOffset dy=\"4\" />\n                  <feGaussianBlur stdDeviation=\"2\" />\n                  <feComposite in2=\"hardAlpha\" operator=\"out\" />\n                  <feColorMatrix type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0\" />\n                  <feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_1056_2574\" />\n                  <feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_1056_2574\" result=\"shape\" />\n                </filter>\n              </defs>\n            </svg>\n\n\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <form #subcategoryselect=\"ngForm\" (ngSubmit)=\"subcategorysubmit(subcategoryselect.value)\"\n      (change)=\"SubCategoryPopupModel(subcategoryselect.value)\">\n      <div class=\"col-12 mt-2\">\n        <div style=\"width: 90%;margin: auto;\" class=\"select\">\n          <select  ngModel name=\"subcategory\">\n            <option value=\"\" disabled selected>Select Your Sub Category</option>\n            <option *ngFor=\"let subcat of subcategoryList; let i = index\" value=\"{{subcat.subsubcategory}}\">\n              {{subcat.subsubcategory}}\n            </option>\n            <option disabled *ngIf=\"subCategoryNotfound\" style=\"background-color: #d1d1d1;\">No Sub Category Found\n            </option>\n            <!-- <option style=\"background-color: #23d5ab;\" value=\"1\">+ add new</option> -->\n\n          </select>\n        </div>\n      </div>\n\n      <ion-button type=\"submit\" style=\"width: 90%;\"  class=\"secondaryLargeBtn mt-3\" color=\"none\" >\n        Update Sub Category</ion-button>\n    </form>\n  </div>\n</div>\n\n<!----------  product popup --------------->\n<div *ngIf=\"addnewproductpopup\" class=\"container pop-up-model\">\n  <div class=\"card pop-up-card ion-text-center\" style=\"padding: 7px;\" id=\"product-popupCard\">\n    <div style=\"margin-top: 2px;\" class=\"title\">\n      <div class=\"row\">\n        <div class=\"col-10\">\n          <h4><b>Update Product Name</b></h4>\n        </div>\n        <div class=\"col-2\">\n          <div class=\"ion-margin-top ion-text-center\">\n\n            <svg (click)=\"hideaddproductpopup()\" style=\"margin-top:-8px;cursor:pointer\" width=\"24\" height=\"27\"\n              viewBox=\"0 0 24 27\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n              <g filter=\"url(#filter0_d_1056_2574)\">\n                <path d=\"M18 6L6 18\" stroke=\"#EB154B\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n                <path d=\"M6 6L18 18\" stroke=\"#EB154B\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n              </g>\n              <defs>\n                <filter id=\"filter0_d_1056_2574\" x=\"-4\" y=\"0\" width=\"32\" height=\"32\" filterUnits=\"userSpaceOnUse\"\n                  color-interpolation-filters=\"sRGB\">\n                  <feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\" />\n                  <feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\"\n                    result=\"hardAlpha\" />\n                  <feOffset dy=\"4\" />\n                  <feGaussianBlur stdDeviation=\"2\" />\n                  <feComposite in2=\"hardAlpha\" operator=\"out\" />\n                  <feColorMatrix type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0\" />\n                  <feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_1056_2574\" />\n                  <feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_1056_2574\" result=\"shape\" />\n                </filter>\n              </defs>\n            </svg>\n\n\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <form #productselect=\"ngForm\" (ngSubmit)=\"productselectform(productselect.value)\">\n\n      <div   style=\"width: 90%;margin: auto;\" class=\"select \" id=\"kg-dropdwon\">\n        <select ngModel name=\"productName\">\n          <option value=\"\" disabled selected>Select Your Product</option>\n          <option *ngFor=\"let product of productList\" value=\"{{product.product_name}}\">{{product.product_name}}\n          </option>\n          <option disabled *ngIf=\"ProductNotfound\">No Product Found</option>\n        </select>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-12\">\n\n          <ion-button type=\"submit\" style=\"width: 90%;\"  class=\"secondaryLargeBtn mt-3\" color=\"none\" >\n            Update Product Name</ion-button>\n\n        </div>\n      </div>\n    </form>\n\n  </div>\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_addoffer-edit_addoffer-edit_module_ts.js.map