"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab4_tab4_module_ts"],{

/***/ 5355:
/*!*********************************************!*\
  !*** ./src/app/tab4/tab4-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab4PageRoutingModule": () => (/* binding */ Tab4PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab4.page */ 3631);




const routes = [
    {
        path: '',
        component: _tab4_page__WEBPACK_IMPORTED_MODULE_0__.Tab4Page,
    }
];
let Tab4PageRoutingModule = class Tab4PageRoutingModule {
};
Tab4PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab4PageRoutingModule);



/***/ }),

/***/ 2486:
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab4PageModule": () => (/* binding */ Tab4PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab4.page */ 3631);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab4_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab4-routing.module */ 5355);









let Tab4PageModule = class Tab4PageModule {
};
Tab4PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([{ path: '', component: _tab4_page__WEBPACK_IMPORTED_MODULE_0__.Tab4Page }]),
            _tab4_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab4PageRoutingModule,
        ],
        declarations: [_tab4_page__WEBPACK_IMPORTED_MODULE_0__.Tab4Page]
    })
], Tab4PageModule);



/***/ }),

/***/ 3631:
/*!***********************************!*\
  !*** ./src/app/tab4/tab4.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab4Page": () => (/* binding */ Tab4Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab4_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab4.page.html?ngResource */ 9184);
/* harmony import */ var _tab4_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab4.page.scss?ngResource */ 7432);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/http.service */ 8191);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ 598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);










let Tab4Page = class Tab4Page {
    constructor(router, http, toastCtrl, route, datepipe) {
        this.router = router;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.datepipe = datepipe;
        this.date = new Date().toISOString();
        this.subcategoryList = [];
        this.offerList = [];
        this.subcategoryName = "";
        this.isvisible = true;
        this.userdetails = localStorage.getItem("tbid");
        this.storeName = localStorage.getItem("StoreName");
        this.Category = '';
        this.subcategory = '';
        this.productName = '';
        this.offer = '';
        this.otheroffer = '';
        this.totalCost = '';
        this.offerTime = '';
        this.description = '';
        this.otherofferradio = true;
        this.otherofferenable = true;
        this.DiscountOffer = false;
        this.OtherOffer = true;
        this.noOffer = false;
        this.PopupModel = false;
        this.subcategoryPopupModel = false;
        this.categoryName = "";
        this.subsubcategoryAddnew = true;
        this.ProductNotfound = true;
        this.subCategoryNotfound = true;
        this.OnlyIfCategorySelected = true;
        this.otherofferList = [];
        this.expiryDateandTime = new Date;
        //Get All available Offer
        this.expiredofferList = [];
        this.expiredotherofferList = [];
        route.params.subscribe(val => {
            this.isvisible = false;
            this.cardVisible = true;
            this.sellerAllDetails();
            this.GetOtherList();
        });
    }
    ngOnInit() {
    }
    backToPrivious() {
        this.cardVisible = true;
        this.isvisible = false;
    }
    offerPage() {
        this.cardVisible = false;
        this.isvisible = true;
        this.noOffer = false;
    }
    //Naviagtions
    notification() {
        this.router.navigate(['/notification']);
    }
    //Get SubCategory Based On Category
    popupModel(data) {
        this.OnlyIfCategorySelected = false;
        const formdata = new FormData();
        formdata.append("category", data.category);
        this.category_tbid = data.category;
        this.CheckCategoryTbidCheck = false;
        console.log(data.category);
        const obj = {
            category_id: this.category_tbid,
            store_category_id: this.store_category_id
        };
        this.http.postFormData('/list_subcategory', obj).subscribe((response) => {
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
    //Get Product Based On SubCategory
    popupModelSubCategory(data) {
        const formdata = new FormData();
        formdata.append("subcategory", data.subcategory);
        this.subcategory_tbid = data.subcategory;
        const obj = {
            store_category_id: this.store_category_id,
            category_id: this.category_tbid,
            subcategory_id: data.subcategory
        };
        console.log(obj);
        this.CheckSubCategoryTbidCheck = false;
        this.http.postFormData('/read_product', obj).subscribe((response) => {
            console.log(response.records);
            this.productList = response.records;
            this.ProductNotfound = false;
        }, (error) => {
            console.log(error);
            this.productList = [];
            this.ProductNotfound = true;
        });
    }
    //Calculate Offer Amount
    keydownoffer() {
        var offerprice = (this.offer / 100) * this.totalCost;
        this.calculateRemainPrice(offerprice);
    }
    keydown() {
        var offerprice = (this.offer / 100) * this.totalCost;
        this.calculateRemainPrice(offerprice);
        this.totalcosterror = false;
        this.OfferCheck = false;
        this.totalcosterror = false;
    }
    //Make False Function
    otheroffercheck() {
        this.OfferCheck = false;
        this.totalcosterror = false;
    }
    productNameCheckCondition(data) {
        this.ProductTbidCheck = false;
        const p = data.productName;
        this.productName = data.productName;
        this.http.get('/read_one_product?p=' + p).subscribe((response) => {
            this.totalCost = response.records.cost;
        }, (error) => {
            console.log(error);
        });
    }
    descrtionerrorFalse() {
        this.descriptionerror = false;
    }
    calculateRemainPrice(offerprice) {
        this.offerPrice = this.totalCost - offerprice;
    }
    //Check Whether Value Is Present Or Not
    CheckCategoryTbid() {
        if (this.category_tbid == undefined) {
            this.CheckCategoryTbidCheck = true;
        }
        else {
            this.CheckCategoryTbidCheck = false;
        }
    }
    CheckSubCategoryTbid() {
        if (this.subcategory_tbid == undefined) {
            this.CheckSubCategoryTbidCheck = true;
        }
        else {
            this.CheckSubCategoryTbidCheck = false;
        }
    }
    CheckProductTbid() {
        if (this.productName.length <= 0) {
            this.ProductTbidCheck = true;
        }
        else {
            this.ProductTbidCheck = false;
        }
    }
    checkOfferCost() {
        if (this.totalCost.length <= 0) {
            this.totalcosterror = true;
        }
        else {
            this.totalcosterror = false;
        }
    }
    offerorOtherOffer() {
        if (this.offer.length <= 0 && this.otheroffer.length <= 0) {
            this.OfferCheck = true;
        }
        else {
            this.OfferCheck = false;
        }
    }
    descriptioncheck() {
        if (this.description.length <= 0) {
            this.descriptionerror = true;
        }
        else {
            this.descriptionerror = false;
        }
    }
    change(data) {
        var time = this.datepipe.transform((data), 'HH:MM:SS');
        let date = this.datepipe.transform((data), 'yyyy-MM-dd');
        this.expireddateandTime = date + " " + time;
    }
    //OfferAdd
    addoffer() {
        this.CheckCategoryTbid();
        this.CheckSubCategoryTbid();
        this.CheckProductTbid();
        this.checkOfferCost();
        this.offerorOtherOffer();
        this.descriptioncheck();
        if (this.idproofcheck == false && this.addressproofcheck == false && this.store_categoryCheck == false) {
            if (this.CheckCategoryTbidCheck == false && this.CheckSubCategoryTbidCheck == false && this.ProductTbidCheck == false && this.totalcosterror == false && this.OfferCheck == false && this.descriptionerror == false) {
                const p = this.productName;
                console.log(p);
                this.http.get('/read_one_product?p=' + p).subscribe((response) => {
                    this.producttbid = response.records.tbid;
                    console.log(this.producttbid);
                    if (response.success == "true") {
                        //GetCurrentDateandTimeStamp
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
                            subcategory_id: this.subcategory_tbid,
                            product_id: this.producttbid,
                            description: this.description,
                            offer_name: this.productName,
                            offer: this.offer,
                            other_offer: this.otheroffer,
                            total_cost: this.totalCost,
                            offer_price: this.offerPrice,
                            offer_start_time: currentTime,
                            offer_end_time: expiryTime
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
                                this.totalCost = '';
                                this.otheroffer = '';
                                this.subcategory = '';
                                this.description = '';
                                this.productName = '';
                                this.offerTime = '';
                                this.offerPrice = 0;
                                this.offer = '';
                                this.category_tbid = '';
                                this.cardVisible = true;
                                this.isvisible = false;
                                this.PopupModel = false;
                                this.GetOtherList();
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
                                icon: 'success',
                                title: 'Offer Already Exist'
                            });
                        });
                    }
                }, (error) => {
                    console.log(error);
                });
            }
        }
        else {
            const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 2500,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', (sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().stopTimer));
                    toast.addEventListener('mouseleave', (sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().resumeTimer));
                }
            });
            Toast.fire({
                icon: 'error',
                title: 'Kindly Update Your Profile Details'
            });
            this.router.navigate(['/sellerdetailpage']);
        }
    }
    //PopUpModel True - False / Show - Hide;
    visibleCategoryPopup() {
        if (this.idproofcheck == false && this.addressproofcheck == false && this.store_categoryCheck == false) {
            this.PopupModel = true;
        }
        else {
            const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 2500,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', (sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().stopTimer));
                    toast.addEventListener('mouseleave', (sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().resumeTimer));
                }
            });
            Toast.fire({
                icon: 'error',
                title: 'Kindly Update Your Profile Details'
            });
            this.router.navigate(['/sellerdetailpage']);
        }
    }
    backToprivious() {
        this.PopupModel = false;
    }
    visibleSubCategoryPopup() {
        this.subcategoryPopupModel = true;
    }
    ScBackToprivious() {
        this.subcategoryPopupModel = false;
    }
    //Create New Category
    createCategory() {
        const catData = {
            category_name: this.categoryName,
        };
        this.http.postFormData('/create_category', catData).subscribe((response) => {
            console.log(response);
            if (response.success == "true") {
                this.Category = '';
                this.categoryName = '';
                this.getCategoryList();
                this.PopupModel = false;
                this.subsubcategoryAddnew = false;
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
                title: 'Category Already Exist'
            });
        });
    }
    //Get Category List
    getCategoryList() {
        var obj = {
            store_category_id: this.store_category_id
        };
        console.log(obj);
        this.http.post('/list_category', obj).subscribe((response) => {
            this.categoryList = response.records;
            console.log(response.records);
        }, (error) => {
            console.log(error);
        });
    }
    //Get Sub Category List
    getSubcategoryList() {
        const obj = {
            store_category_id: this.store_category_id,
            category_id: this.category_tbid
        };
        this.http.post('/list_subcategory', obj).subscribe((response) => {
            console.log(response.records);
            this.subcategoryList = response.records;
            console.log(response.records);
            console.log(this.subcategoryList);
        }, (error) => {
            console.log(error);
        });
    }
    //Redirect To View One Offer
    repostOffer(tbid) {
        this.router.navigate(['/addofferEditPage'], { queryParams: { tbid: tbid } });
        console.log(tbid);
    }
    searchPage() {
        this.router.navigate(['/offersearch']);
    }
    GetOtherList() {
        this.expiredotherofferList = [];
        this.otherofferList = [];
        this.http.get('/offer_time_calculate').subscribe((response) => {
            console.log(response);
            for (var i = 0; i <= response.records.length; i++) {
                if (response.records[i].remaining_time[0] != "-") {
                    const data = {
                        product_image: response.records[i].product_image,
                        offer_end_time: response.records[i].offer_end_time,
                        total_cost: response.records[i].total_cost,
                        product: response.records[i].product,
                        product_unit: response.records[i].product_unit,
                        other_offer: response.records[i].other_offer,
                        remaining_time: response.records[i].remaining_time,
                        offer: response.records[i].offer,
                        offer_price: response.records[i].offer_price,
                    };
                    console.log(this.otherofferList);
                    this.otherofferList.push(data);
                }
            }
            this.noOffer = false;
        }, (error) => {
            console.log(error);
            this.noOffer = true;
        });
        this.GetOfferExpiredList();
    }
    GetOfferExpiredList() {
        this.http.get('/offer_time_calculate').subscribe((response) => {
            console.log(response);
            for (var i = 0; i <= response.records.length; i++) {
                console.log(response.records);
                if (response.records[i].remaining_time[0] == "-") {
                    const data = {
                        product_image: response.records[i].product_image,
                        offer_end_time: response.records[i].offer_end_time,
                        total_cost: response.records[i].total_cost,
                        product: response.records[i].product,
                        product_unit: response.records[i].product_unit,
                        other_offer: response.records[i].other_offer,
                        remaining_time: response.records[i].remaining_time,
                        offer: response.records[i].offer,
                        offer_price: response.records[i].offer_price
                    };
                    this.expiredotherofferList.push(data);
                }
                this.CheckOtherOfferExpiry = this.expiredotherofferList.length;
                if (this.CheckOtherOfferExpiry > 0) {
                    this.expiredOffersBanner = true;
                }
                else {
                    this.expiredOffersBanner = false;
                }
            }
            this.noOffer = false;
        }, (error) => {
            console.log(error);
            this.noOffer = true;
        });
    }
    //Create New Sub Category
    createSubcategory() {
        const subcatData = {
            category_id: this.category_tbid,
            subcategory_name: this.subcategoryName
        };
        this.http.postFormData('/create_subcategory', subcatData).subscribe((response) => {
            console.log(response);
            if (response.success == "true") {
                this.subcategoryName = '';
                this.subcategoryPopupModel = false;
                const obj = {
                    category_id: this.category_tbid
                };
                this.http.postFormData('/list_subcategory', obj).subscribe((response) => {
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
                title: 'Sub Category Already Exist'
            });
        });
    }
    onItemChange() {
        this.DiscountOffer = false;
        this.OtherOffer = true;
        this.otherofferenable = true;
        this.otheroffer = "";
    }
    onItemChange2() {
        this.DiscountOffer = true;
        this.offer = "";
        this.otherofferradio = false;
        this.offerPrice = null;
        this.OtherOffer = false;
        this.otherofferenable = false;
    }
    sellerAllDetails() {
        this.http.get('/seller_details').subscribe((response) => {
            if (response.success == "true") {
                console.log(response);
                this.store_category_id = response.records.store_category_id;
                this.getCategoryList();
                console.log(response.records.id_proof);
                console.log(response.records.address_proof);
                if (response.records.store_category != null) {
                    this.store_categoryCheck = false;
                }
                else {
                    this.store_categoryCheck = true;
                }
                if (response.records.id_proof != null) {
                    this.idproofcheck = false;
                }
                else {
                    this.idproofcheck = true;
                }
                if (response.records.address_proof != null) {
                    this.addressproofcheck = false;
                }
                else {
                    this.addressproofcheck = true;
                }
            }
        }, (error) => {
            console.log(error);
        });
    }
};
Tab4Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _shared_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe }
];
Tab4Page = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-tab4',
        template: _tab4_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab4_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab4Page);



/***/ }),

/***/ 7432:
/*!************************************************!*\
  !*** ./src/app/tab4/tab4.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = ".card {\n  border: 1px solid #bfbfbf;\n  border-radius: 5px;\n  background-color: var(--ion-color-light) !important;\n  box-shadow: 3px 3px 16px 4px #ccc;\n  width: 100% !important;\n  margin: 5px;\n}\n\n.signin-div {\n  width: 95%;\n}\n\n.welcomecard {\n  background-color: var(--ion-color-light);\n  width: 97%;\n  margin: auto !important;\n  margin-bottom: 8px !important;\n  border-radius: 4px !important;\n  box-shadow: 3px 3px 16px 4px #ccc;\n}\n\n.expiredcard {\n  background-color: rgba(136, 136, 136, 0.171);\n  width: 97%;\n  margin: auto !important;\n  margin-bottom: 8px !important;\n  border-radius: 4px !important;\n  color: #888888;\n}\n\n.expiredcard img {\n  opacity: 0.5;\n}\n\n.expiredcard ion-badge {\n  opacity: 0.5;\n}\n\n.Expiredrepost-btn {\n  color: var(--ion-color-primary);\n  text-align: center;\n  opacity: 1 !important;\n}\n\nimg {\n  border-radius: 3px;\n  width: 80px;\n  height: 80px;\n}\n\n.offer-btn {\n  background: var(--ion-color-secondary);\n  border: 1px solid #fff;\n  border-radius: 5px;\n  color: var(--ion-color-light);\n}\n\n.product-name {\n  margin-top: -10px !important;\n  text-align: center;\n}\n\n.badge {\n  background-color: #ffffff91;\n  font-size: 10px !important;\n  margin-top: 33% !important;\n  color: var(--ion-color-secondary) !important;\n}\n\n#offer:focus {\n  outline: none !important;\n  border: 1px solid #fff;\n  box-shadow: 0 0 2px #e9f3ff;\n}\n\n.confirm-btn {\n  border-radius: 5px !important;\n  width: 50%;\n  height: 35px;\n  background: var(--ion-color-secondary);\n  color: var(--ion-color-light);\n  border: 1px solid #fff;\n  margin: 5px;\n}\n\n#card {\n  background-color: var(--ion-color-light);\n  border-radius: 5px;\n  box-shadow: 2px 2px 2px 2px #ccc;\n  margin-bottom: 5px;\n  border: 1px solid #ebe6e6;\n}\n\n#blurred {\n  -moz-filter: blur(2px);\n  -o-filter: blur(2px);\n  -ms-filter: blur(2px);\n  filter: blur(2px);\n}\n\n#kg-dropdwon {\n  position: relative;\n  display: flex;\n  width: 100%;\n  height: 3em;\n  border-radius: 0.25em;\n  overflow: hidden;\n}\n\ninput[type=text] {\n  font-size: 15px;\n  margin: 0 5px;\n  width: 90%;\n  box-sizing: border-box;\n  border: none;\n  background-color: transparent !important;\n  border-bottom: 2px solid var(--ion-color-primary);\n}\n\n#edit {\n  cursor: pointer;\n}\n\n.myproduct-div {\n  position: absolute;\n  background-color: var(--ion-color-light);\n  border: 1px solid #ccc;\n  border-radius: 8px;\n  box-shadow: 2px 2px 2px 2px #ebe6e6;\n  width: 96% !important;\n  margin: 5px;\n}\n\n.select {\n  width: 95% !important;\n  text-align: center !important;\n}\n\n.repost-btn {\n  color: var(--ion-color-primary);\n  text-align: center;\n}\n\n.repost-btn:hover {\n  background: none !important;\n}\n\n.no-of-views {\n  font-size: 12px;\n  margin: 0 !important;\n  padding: 0 !important;\n}\n\n.outter-badge {\n  position: relative;\n  margin: 10px;\n  width: 74px;\n}\n\n.inner-badge {\n  display: table;\n  position: absolute;\n  border-radius: 50%;\n  top: 55%;\n  left: 30px;\n  color: #0D0D0D;\n  background: #ccccccbe;\n  background-repeat: no-repeat;\n  background-size: cover;\n  text-align: center;\n}\n\n.inner-badge p {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 8px;\n}\n\nion-content {\n  background-color: var(--ion-color-light) !important;\n  --offset-bottom: auto !important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n\n.valuePadding {\n  border: 1px inset #ccc;\n  margin: 0 !important;\n  padding: 0 !important;\n}\n\n.valuePadding input {\n  border: none;\n  padding: 0px;\n  outline: none;\n}\n\ninput[type=number] {\n  font-size: 15px;\n  margin: 0 5px;\n  width: 90%;\n  box-sizing: border-box;\n  border: none;\n  background-color: transparent !important;\n  border-bottom: 2px solid var(--ion-color-primary);\n}\n\ninput:focus {\n  outline: none !important;\n  border-bottom: 2px solid var(--ion-color-success) !important;\n}\n\n#offercard {\n  background-color: #9b4f4f;\n}\n\ninput[type=datetime-local] {\n  font-size: 15px;\n  margin: 0 5px;\n  width: 90%;\n  box-sizing: border-box;\n  border: none;\n  background-color: transparent !important;\n  border-bottom: 2px solid var(--ion-color-primary);\n}\n\n.show {\n  visibility: visible;\n}\n\n.hidden {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1EQUFBO0VBQ0EsaUNBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7QUFDRjs7QUFFQTtFQUNFLHdDQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLGlDQUFBO0FBQ0Y7O0FBRUE7RUFDRSw0Q0FBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFFQSxjQUFBO0FBQUY7O0FBR0E7RUFDRSxZQUFBO0FBQUY7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBR0E7RUFDRywrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFBSDs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFBRjs7QUFHQTtFQUVFLHNDQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0FBREY7O0FBSUE7RUFDRSw0QkFBQTtFQUNBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0Q0FBQTtBQURGOztBQU1BO0VBQ0Usd0JBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FBSEY7O0FBTUE7RUFDRSw2QkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esc0NBQUE7RUFDQSw2QkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQUhGOztBQU1BO0VBQ0Usd0NBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUhGOztBQU1BO0VBRUUsc0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUFIRjs7QUFNQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUhGOztBQU1BO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0Esd0NBQUE7RUFDQSxpREFBQTtBQUhGOztBQWFBO0VBQ0UsZUFBQTtBQVZGOztBQWFBO0VBQ0Usa0JBQUE7RUFDQSx3Q0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQVZGOztBQWNBO0VBQ0UscUJBQUE7RUFDQSw2QkFBQTtBQVhGOztBQWNBO0VBRUUsK0JBQUE7RUFDQSxrQkFBQTtBQVpGOztBQWdCQTtFQUNFLDJCQUFBO0FBYkY7O0FBZ0JBO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7QUFiRjs7QUFnQkE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFFQSxXQUFBO0FBZEY7O0FBaUJBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQWRGOztBQWtCQTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBZkY7O0FBbUJBO0VBQ0UsbURBQUE7RUFLQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQXBCRjs7QUFzQkU7RUFDRSxhQUFBO0FBcEJKOztBQXdCQTtFQUNFLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtBQXJCRjs7QUF3QkE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFyQkY7O0FBd0JBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0Esd0NBQUE7RUFDQSxpREFBQTtBQXJCRjs7QUF3QkE7RUFDRSx3QkFBQTtFQUNBLDREQUFBO0FBckJGOztBQTRCQTtFQUNFLHlCQUFBO0FBekJGOztBQTRCQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLHdDQUFBO0VBQ0EsaURBQUE7QUF6QkY7O0FBNkJBO0VBQ0UsbUJBQUE7QUExQkY7O0FBNkJBO0VBQ0UsYUFBQTtBQTFCRiIsImZpbGUiOiJ0YWI0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcbiAgYm9yZGVyICAgICAgICAgIDogMXB4IHNvbGlkICNiZmJmYmY7XG4gIGJvcmRlci1yYWRpdXMgICA6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KSFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3cgICAgICA6IDNweCAzcHggMTZweCA0cHggI2NjYztcbiAgd2lkdGggICAgICAgICAgIDogMTAwJSAhaW1wb3J0YW50O1xuICBtYXJnaW4gICAgICAgICAgOiA1cHg7XG59XG5cbi5zaWduaW4tZGl2IHtcbiAgd2lkdGg6IDk1JTtcbn1cblxuLndlbGNvbWVjYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgd2lkdGggICAgICAgICAgIDogOTclO1xuICBtYXJnaW4gICAgICAgICAgOiBhdXRvICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b20gICA6IDhweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzICAgOiA0cHggIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdyAgICAgIDogM3B4IDNweCAxNnB4IDRweCAjY2NjO1xufVxuXG4uZXhwaXJlZGNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzNiwgMTM2LCAxMzYsIDAuMTcxKTtcbiAgd2lkdGggICAgICAgICAgIDogOTclO1xuICBtYXJnaW4gICAgICAgICAgOiBhdXRvICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b20gICA6IDhweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzICAgOiA0cHggIWltcG9ydGFudDtcbiAgLy8gYm94LXNoYWRvdyAgICAgIDogM3B4IDNweCAxNnB4IDRweCAjY2NjO1xuICBjb2xvcjogcmdiKDEzNiwgMTM2LCAxMzYpO1xufVxuXG4uZXhwaXJlZGNhcmQgaW1ne1xuICBvcGFjaXR5OiAwLjU7XG59XG4uZXhwaXJlZGNhcmQgaW9uLWJhZGdle1xuICBvcGFjaXR5OiAwLjU7XG59XG5cblxuLkV4cGlyZWRyZXBvc3QtYnRue1xuICAgY29sb3IgICAgIDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgb3BhY2l0eSAgICAgICAgIDogMSAhaW1wb3J0YW50O1xufVxuXG5pbWcge1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6ODBweDtcbn1cblxuLm9mZmVyLWJ0biB7XG5cbiAgYmFja2dyb3VuZCAgIDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIGJvcmRlciAgICAgICA6IDFweCBzb2xpZCAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGNvbG9yICAgICAgICA6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5cbi5wcm9kdWN0LW5hbWUge1xuICBtYXJnaW4tdG9wOiAtMTBweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5iYWRnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY5MTtcbiAgZm9udC1zaXplICAgICAgIDogMTBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wICAgICAgOiAzMyUgIWltcG9ydGFudDtcbiAgY29sb3IgICAgICAgICAgIDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSkhaW1wb3J0YW50O1xufVxuXG5cblxuI29mZmVyOmZvY3VzIHtcbiAgb3V0bGluZSAgIDogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXIgICAgOiAxcHggc29saWQgI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAwIDJweCAjZTlmM2ZmO1xufVxuXG4uY29uZmlybS1idG4ge1xuICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbiAgd2lkdGggICAgICAgIDogNTAlO1xuICBoZWlnaHQgICAgICAgOiAzNXB4O1xuICBiYWNrZ3JvdW5kICAgOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgY29sb3IgICAgICAgIDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgYm9yZGVyICAgICAgIDogMXB4IHNvbGlkICNmZmY7XG4gIG1hcmdpbiAgICAgICA6IDVweDtcbn1cblxuI2NhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBib3JkZXItcmFkaXVzICAgOiA1cHg7XG4gIGJveC1zaGFkb3cgICAgICA6IDJweCAycHggMnB4IDJweCAjY2NjO1xuICBtYXJnaW4tYm90dG9tICAgOiA1cHg7XG4gIGJvcmRlciAgICAgICAgICA6IDFweCBzb2xpZCAjZWJlNmU2O1xufVxuXG4jYmx1cnJlZCB7XG4gIC13ZWJraXQtZmlsdGVyOiBibHVyKDJweCk7XG4gIC1tb3otZmlsdGVyICAgOiBibHVyKDJweCk7XG4gIC1vLWZpbHRlciAgICAgOiBibHVyKDJweCk7XG4gIC1tcy1maWx0ZXIgICAgOiBibHVyKDJweCk7XG4gIGZpbHRlciAgICAgICAgOiBibHVyKDJweCk7XG59XG5cbiNrZy1kcm9wZHdvbiB7XG4gIHBvc2l0aW9uICAgICA6IHJlbGF0aXZlO1xuICBkaXNwbGF5ICAgICAgOiBmbGV4O1xuICB3aWR0aCAgICAgICAgOiAxMDAlO1xuICBoZWlnaHQgICAgICAgOiAzZW07XG4gIGJvcmRlci1yYWRpdXM6IC4yNWVtO1xuICBvdmVyZmxvdyAgICAgOiBoaWRkZW47XG59XG5cbmlucHV0W3R5cGU9dGV4dF0ge1xuICBmb250LXNpemUgICAgICAgOiAxNXB4O1xuICBtYXJnaW4gICAgICAgICAgOiAwIDVweDtcbiAgd2lkdGggICAgICAgICAgIDogOTAlO1xuICBib3gtc2l6aW5nICAgICAgOiBib3JkZXItYm94O1xuICBib3JkZXIgICAgICAgICAgOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tICAgOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4vLyBpbnB1dDpmb2N1cyB7XG4vLyAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbi8vICAgYm9yZGVyOjFweCBzb2xpZCAjZTlmM2ZmICFpbXBvcnRhbnQ7XG4vLyAgIGJveC1zaGFkb3c6IDAgMCAycHggIzhiOGQ5MTtcbi8vIH1cblxuXG4jZWRpdCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm15cHJvZHVjdC1kaXYge1xuICBwb3NpdGlvbiAgICAgICAgOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgYm9yZGVyICAgICAgICAgIDogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXMgICA6IDhweDtcbiAgYm94LXNoYWRvdyAgICAgIDogMnB4IDJweCAycHggMnB4ICNlYmU2ZTY7XG4gIHdpZHRoICAgICAgICAgICA6IDk2JSAhaW1wb3J0YW50O1xuICBtYXJnaW4gICAgICAgICAgOiA1cHg7XG5cbn1cblxuLnNlbGVjdCB7XG4gIHdpZHRoICAgICA6IDk1JSAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLnJlcG9zdC1idG4ge1xuICAvLyBiYWNrZ3JvdW5kICAgOiAjRUIxNTRCO1xuICBjb2xvciAgICAgOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxufVxuXG4ucmVwb3N0LWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLm5vLW9mLXZpZXdzIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4gICA6IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZyAgOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5vdXR0ZXItYmFkZ2Uge1xuICBwb3NpdGlvbiAgICAgOiByZWxhdGl2ZTtcbiAgbWFyZ2luICAgICAgIDogMTBweDtcbiAgLy8gYmFja2dyb3VuZDogI2ZmZjtcbiAgd2lkdGggICAgICAgIDogNzRweDtcbn1cblxuLmlubmVyLWJhZGdlIHtcbiAgZGlzcGxheSAgICAgICAgICA6IHRhYmxlO1xuICBwb3NpdGlvbiAgICAgICAgIDogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXMgICAgOiA1MCU7XG4gIHRvcCAgICAgICAgICAgICAgOiA1NSU7XG4gIGxlZnQgICAgICAgICAgICAgOiAzMHB4O1xuICBjb2xvciAgICAgICAgICAgIDogIzBEMEQwRDtcbiAgYmFja2dyb3VuZCAgICAgICA6ICNjY2NjY2NiZTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplICA6IGNvdmVyO1xuICB0ZXh0LWFsaWduICAgICAgIDogY2VudGVyO1xuXG59XG5cbi5pbm5lci1iYWRnZSBwIHtcbiAgZGlzcGxheSAgICAgICA6IHRhYmxlLWNlbGw7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHBhZGRpbmcgICAgICAgOiA4cHg7XG59XG5cblxuaW9uLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpICFpbXBvcnRhbnQ7XG4gIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIGRhcmt0dXJxdW9pc2VcbiAgLy8gMCUsICNkMWYyZTdcbiAgLy8gMTAwJSkgIWltcG9ydGFudDtcblxuICAtLW9mZnNldC1ib3R0b206IGF1dG8gIWltcG9ydGFudDtcbiAgLS1vdmVyZmxvdyAgICAgOiBoaWRkZW47XG4gIG92ZXJmbG93ICAgICAgIDogYXV0bztcblxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4udmFsdWVQYWRkaW5nIHtcbiAgYm9yZGVyIDogMXB4IGluc2V0ICNjY2M7XG4gIG1hcmdpbiA6IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG4udmFsdWVQYWRkaW5nIGlucHV0IHtcbiAgYm9yZGVyIDogbm9uZTtcbiAgcGFkZGluZzogMHB4O1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5pbnB1dFt0eXBlPW51bWJlcl0ge1xuICBmb250LXNpemUgICAgICAgOiAxNXB4O1xuICBtYXJnaW4gICAgICAgICAgOiAwIDVweDtcbiAgd2lkdGggICAgICAgICAgIDogOTAlO1xuICBib3gtc2l6aW5nICAgICAgOiBib3JkZXItYm94O1xuICBib3JkZXIgICAgICAgICAgOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tICAgOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pbnB1dDpmb2N1cyB7XG4gIG91dGxpbmUgICAgICA6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKSAhaW1wb3J0YW50O1xufVxuXG5cblxuLy8tLS0tLS0tIGNhcmQtLS0tLS0tLS8vQGF0LXJvb3RcblxuI29mZmVyY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTUsIDc5LCA3OSk7XG59XG5cbmlucHV0W3R5cGU9ZGF0ZXRpbWUtbG9jYWxdIHtcbiAgZm9udC1zaXplICAgICAgIDogMTVweDtcbiAgbWFyZ2luICAgICAgICAgIDogMCA1cHg7XG4gIHdpZHRoICAgICAgICAgICA6IDkwJTtcbiAgYm94LXNpemluZyAgICAgIDogYm9yZGVyLWJveDtcbiAgYm9yZGVyICAgICAgICAgIDogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbSAgIDogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuXG4uc2hvdyB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5oaWRkZW4ge1xuICBkaXNwbGF5Om5vbmVcblxufSJdfQ== */";

/***/ }),

/***/ 9184:
/*!************************************************!*\
  !*** ./src/app/tab4/tab4.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<!------------ Header  ---------------->\n<ion-toolbar color=\"light\">\n  <ion-buttons slot=\"start\">\n    <ion-menu-button style=\"margin-top:15px;color:#121212\" autoHide=\"false\">\n      <svg width=\"34\" height=\"34\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M5 7H19\" stroke=\"#121212\" stroke-width=\"2\" stroke-linecap=\"round\" />\n        <path d=\"M5 12H15\" stroke=\"#121212\" stroke-width=\"2\" stroke-linecap=\"round\" />\n        <path d=\"M5 17H11\" stroke=\"#121212\" stroke-width=\"2\" stroke-linecap=\"round\" />\n      </svg>\n    </ion-menu-button>\n  </ion-buttons>\n\n  <div class=\"row\">\n    <div class=\"col-4\">\n      <h5 style=\"margin-top:10px\"><b></b></h5>\n    </div>\n    <div class=\"col-8 mt-2 mx-2\" style=\"text-align: right;width: 90%;\">\n      <svg (click)=\"notification()\" style=\"margin:3px;\" width=\"26\" height=\"26\" viewBox=\"0 0 24 24\" fill=\"none\"\n        xmlns=\"http://www.w3.org/2000/svg\">\n        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\n          d=\"M13.7942 3.29494C13.2296 3.10345 12.6258 3 12 3C9.1535 3 6.7622 5.14032 6.44786 7.96942L6.19605 10.2356L6.1896 10.2933C6.06065 11.417 5.69489 12.5005 5.11646 13.4725L5.08667 13.5222L4.50863 14.4856C3.98408 15.3599 3.7218 15.797 3.77842 16.1559C3.8161 16.3946 3.93899 16.6117 4.12435 16.7668C4.40292 17 4.9127 17 5.93224 17H18.0678C19.0873 17 19.5971 17 19.8757 16.7668C20.061 16.6117 20.1839 16.3946 20.2216 16.1559C20.2782 15.797 20.0159 15.3599 19.4914 14.4856L18.9134 13.5222L18.8836 13.4725C18.4273 12.7059 18.1034 11.8698 17.9236 10.9994C15.1974 10.9586 13 8.73592 13 6C13 5.00331 13.2916 4.07473 13.7942 3.29494ZM16.2741 4.98883C16.0999 5.28551 16 5.63109 16 6C16 6.94979 16.6621 7.74494 17.5499 7.94914C17.4205 6.82135 16.9608 5.80382 16.2741 4.98883Z\"\n          fill=\"black\" />\n        <path\n          d=\"M9 17C9 17.394 9.0776 17.7841 9.22836 18.1481C9.37913 18.512 9.6001 18.8427 9.87868 19.1213C10.1573 19.3999 10.488 19.6209 10.8519 19.7716C11.2159 19.9224 11.606 20 12 20C12.394 20 12.7841 19.9224 13.1481 19.7716C13.512 19.6209 13.8427 19.3999 14.1213 19.1213C14.3999 18.8427 14.6209 18.512 14.7716 18.1481C14.9224 17.7841 15 17.394 15 17L12 17H9Z\"\n          fill=\"black\" />\n        <circle cx=\"18\" cy=\"6\" r=\"2.5\" fill=\"#eb154b\" stroke=\"#eb154b\" />\n      </svg>\n\n\n    </div>\n  </div>\n</ion-toolbar>\n\n\n\n\n<!-- If No Offer -- Add Offer -->\n<ion-content class=\"bg-class mb-3\" [ngStyle]=\"{'opacity':PopupModel ? '0.52' : '1' }\"\n  [ngStyle]=\"{'opacity':backgroundisvisible ? '0.52' : '1' }\">\n  <div class=\"  row mt-2 mb-2\">\n    <div class=\"col-9\">\n      <div style=\"width: 100%; \">\n        <button *ngIf=\"cardVisible\" (click)=\"offerPage()\" class=\"btn btn-success btn-sm offer-btn mx-2 \">+ Add\n          Offer</button>\n      </div>\n    </div>\n\n    <div class=\"col-3\">\n      <svg (click)=\"searchPage()\" style=\"margin-left: 20%;\" width=\"25\" height=\"25\" viewBox=\"0 0 24 24\" fill=\"none\">\n        <circle cx=\"11\" cy=\"11\" r=\"7\" stroke=\"#121212\" stroke-width=\"2\" />\n        <path\n          d=\"M11 8C10.606 8 10.2159 8.0776 9.85195 8.22836C9.48797 8.37913 9.15726 8.6001 8.87868 8.87868C8.6001 9.15726 8.37913 9.48797 8.22836 9.85195C8.0776 10.2159 8 10.606 8 11\"\n          stroke=\"#CCD2E3\" stroke-width=\"2\" stroke-linecap=\"round\" />\n        <path d=\"M20 20L17 17\" stroke=\"#121212\" stroke-width=\"2\" stroke-linecap=\"round\" />\n      </svg>\n\n    </div>\n  </div>\n\n  <!------------ no products gif  --------------->\n  <div *ngIf=\"noOffer\" style=\"margin: auto !important;margin-top: 50%;\">\n    <img style=\"width:100%;height:100%;margin-left: 25px !important;\" src=\"assets/gif/empty.gif\" alt=\"\">\n  </div>\n\n\n\n\n\n  <div *ngIf=\"cardVisible\" class=\"add-card-div\">\n    <div *ngFor=\"let offer of otherofferList; let i = index\">\n      <div class=\"welcomecard\">\n        <div class=\"row\">\n          <div class=\"col-4\">\n            <div class=\"outter-badge\">\n              <img src=\"{{offer.product_image}}\" alt=\"\">\n            </div>\n            <button (click)=\"repostOffer(offer.product)\"\n              class=\"btn btn-sm btn-outline-danger repost-btn mx-3 mb-2\">Repost</button>\n          </div>\n          <div class=\"col-8\">\n            <div class=\"row\">\n              <div style=\"margin-top: -5px;\" class=\"col-8\">\n                <h6><b>{{offer.product}}</b></h6>\n              </div>\n              <div class=\"col-4 mt-3\">\n                <ion-badge slot=\"start\" color=\"secondary\">1\n                  {{offer.product_unit}}</ion-badge>\n              </div>\n            </div>\n            <!-- <h6 style=\"margin-top: -15px;\" class=\"no-of-views\">\n              <b>Views</b>&nbsp;\n              <span> 10</span>\n            </h6> -->\n            <p class=\"no-of-views\" [ngClass]='offer.offer != \"\" ? \"show\" : \"hidden\"'>\n              <b>Offer</b>&nbsp;\n              {{offer.offer}}%\n            </p>\n            <p class=\"no-of-views\">\n              <b>Offer time</b>&nbsp;\n              {{offer.offer_end_time}}\n            </p>\n            <p class=\"no-of-views\">\n              <b>Remaining Time</b>&nbsp;\n              {{offer.remaining_time}}\n            </p>\n\n            <p class=\"no-of-views\" [ngClass]='offer.offer == \"\" ? \"show\" : \"hidden\"'>\n              <b>Offer : </b>&nbsp;\n              {{offer.other_offer}}\n            </p>\n            <div class=\"row\" [ngClass]='offer.offer != \"\" ? \"show\" : \"hidden\"'>\n              <div class=\"col-6\">\n                <p style=\"font-size: 12px;\">\n                  <b>Cost</b>&nbsp;\n                  <del>₹{{offer.total_cost}} </del> &nbsp;₹{{offer.offer_price}}\n                </p>\n              </div>\n            </div>\n            <div class=\"row\" [ngClass]='offer.offer == \"\" ? \"show\" : \"hidden\"'>\n              <div class=\"col-6\">\n                <p style=\"font-size: 12px;\">\n                  <b>Cost</b>&nbsp;\n                  ₹{{offer.total_cost}}\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n  <div class=\"container mt-5\" *ngIf=\"cardVisible\">\n    <h5 *ngIf=\"expiredOffersBanner\">Expired Offers:</h5>\n    <div *ngFor=\"let offer of expiredotherofferList; let i = index\">\n      <div class=\"expiredcard\">\n        <div class=\"row\">\n          <div class=\"col-4\">\n            <div class=\"outter-badge\">\n              <img src=\"{{offer.product_image}}\" alt=\"\">\n            </div>\n            <button (click)=\"repostOffer(offer.product)\"\n              class=\"btn btn-sm btn-outline-danger repost-btn mx-3 mb-2\" style=\"opacity:1;\">Repost</button>\n          </div>\n          <div class=\"col-8\">\n            <div class=\"row\">\n              <div style=\"margin-top: -5px;\" class=\"col-8\">\n                <h6><b>{{offer.product}}</b></h6>\n              </div>\n              <div class=\"col-4 mt-3\">\n                <ion-badge style=\"color:#ffffff !important;font-size: 10px;\" slot=\"start\" color=\"secondary\">1\n                  {{offer.product_unit}}</ion-badge>\n              </div>\n            </div>\n            <!-- <h6 style=\"margin-top: -15px;\" class=\"no-of-views\">\n              <b>Views</b>&nbsp;\n              <span> 10</span>\n            </h6> -->\n            <p class=\"no-of-views\" [ngClass]='offer.offer != \"\" ? \"show\" : \"hidden\"'>\n              <b>Offer</b>&nbsp;\n              {{offer.offer}}%\n            </p>\n            <p class=\"no-of-views\">\n              <b>Offer time</b>&nbsp;\n              {{offer.offer_end_time}}\n            </p>\n\n            <p class=\"no-of-views\" [ngClass]='offer.offer == \"\" ? \"show\" : \"hidden\"'>\n              <b>Other Offer : </b>&nbsp;\n              {{offer.other_offer}}\n            </p>\n            <div class=\"row\" [ngClass]='offer.offer != \"\" ? \"show\" : \"hidden\"'>\n              <div class=\"col-6\">\n                <p style=\"font-size: 12px;\">\n                  <b>Cost</b>&nbsp;\n                  <del>₹{{offer.total_cost}} </del> &nbsp;₹{{offer.offer_price}}\n                </p>\n              </div>\n            </div>\n            <div class=\"row\" [ngClass]='offer.offer == \"\" ? \"show\" : \"hidden\"'>\n              <div class=\"col-6\">\n                <p style=\"font-size: 12px;\">\n                  <b>Cost</b>&nbsp;\n                  ₹{{offer.total_cost}}\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"isvisible\" class=\"container signin-div mb-4\">\n    <div class=\"row\">\n      <div class=\"col-12 ion-text-left mt-2\">\n        <svg style=\"margin-top: 5px !important;\" (click)=\"backToPrivious()\" width=\"22\" height=\"20\" fill=\"#EB154B\"\n          class=\"bi bi-arrow-left\" viewBox=\"0 0 16 16\">\n          <path fill-rule=\"evenodd\"\n            d=\"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z\" />\n        </svg>\n      </div>\n      <div class=\"col-12\">\n        <h5 class=\"name  ion-text-center\" style=\"color:#676767;\"><b>Add Your Offer</b></h5>\n        <div class=\"row\">\n          <div class=\"col-6\">\n            <p class=\"name mt-2 ion-text-left\" style=\"color:hsl(0, 0%, 25%);\">Category :</p>\n          </div>\n          <!-- <div class=\"col-6\">\n            <button class=\"btn signin-btn text-white\" (click)=\"visibleCategoryPopup()\">Add New +</button>\n          </div> -->\n        </div>\n      </div>\n\n\n      <form #categoryselect=\"ngForm\" (change)=\"popupModel(categoryselect.value)\">\n        <div class=\"col-12 \">\n          <div class=\"select\">\n            <select ngModel placeholder=\"category\" name=\"category\">\n              <option value=\"\" disabled selected>Select Your Category</option>\n              <option *ngFor=\"let cat of categoryList\" value=\"{{cat.tbid}}\">{{cat.category}}</option>\n              <!-- <option style=\"background-color:#23d5ab;color:#fff;\" value=\"categoryPopup\" (click)=\"popupModelOpen()\">+ add new</option> -->\n            </select>\n          </div>\n        </div>\n      </form>\n      <p class=\"small text-danger text-center\" *ngIf=\"CheckCategoryTbidCheck\">Select Your Category</p>\n\n      <div class=\"col-12 mt-4\">\n        <div class=\"row\">\n          <div class=\"col-6\">\n            <p class=\"name mt-2 ion-text-left\" style=\"color:hsl(0, 0%, 25%);\">Sub Category :</p>\n          </div>\n          <!-- <div class=\"col-6\">\n            <button class=\"btn signin-btn text-white\" (click)=\"visibleSubCategoryPopup()\"\n              [disabled]=\"OnlyIfCategorySelected\">Add New +</button>\n          </div> -->\n        </div>\n        <form #subcategoryselect=\"ngForm\" (change)=\"popupModelSubCategory(subcategoryselect.value)\">\n          <div class=\"select\" id=\"kg-dropdwon\">\n            <select ngModel name=\"subcategory\">\n              <option value=\"\" disabled selected>Select Your Sub Category</option>\n              <option *ngFor=\"let subcat of subcategoryList\" value=\"{{subcat.tbid}}\">{{subcat.subsubcategory}}\n              </option>\n              <option disabled *ngIf=\"subCategoryNotfound\">No Sub Category Found</option>\n              <!-- <option style=\"background-color:#23d5ab;color:#fff;\" value=\"subcategoryPopup\">+ add new</option> -->\n            </select>\n          </div>\n        </form>\n        <p class=\"small text-danger text-center\" *ngIf=\"CheckSubCategoryTbidCheck\">Select Your Subcategory</p>\n      </div>\n\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-12 ion-text-left\">\n        <p class=\"name mt-2\">Product:</p>\n      </div>\n      <div class=\"col-12\">\n        <form #productselect=\"ngForm\" (change)=\"productNameCheckCondition(productselect.value)\">\n          <div class=\"select\" id=\"kg-dropdwon\">\n            <select ngModel name=\"productName\">\n              <option value=\"\" disabled selected>Select Your Product</option>\n              <option *ngFor=\"let product of productList\" value=\"{{product.product_name}}\">{{product.product_name}}\n              </option>\n              <option disabled *ngIf=\"ProductNotfound\">No Product Found</option>\n            </select>\n          </div>\n        </form>\n      </div>\n    </div>\n    <p class=\"small text-danger text-center\" *ngIf=\"ProductTbidCheck\">Select Your Product</p>\n\n    <div class=\"row mt-4\">\n      <div class=\"col-6\">\n        <p class=\"edit-name ion-text-left\">Total Cost(₹) : </p>\n      </div>\n\n      <div class=\"col-6\">\n        <input [(ngModel)]=\"totalCost\" type=\"number\" id=\"offer\" (keyup)=\"keydownoffer()\" disabled>\n      </div>\n    </div>\n    <p class=\"small text-danger text-center\" *ngIf=\"totalcosterror\">Enter Your Cost</p>\n\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <p class=\"edit-name ion-text-left\">Offer End Time :</p>\n      </div>\n      <div class=\"col-12\">\n        <!-- <input [(ngModel)]=\"offerTime\" type=\"time\" id=\"offer\"> -->\n        <input type=\"datetime-local\" [ngModel]=\"expiryDateandTime | date:'yyyy-MM-ddTHH:mm'\"\n          (ngModelChange)=\"change($event)\">\n      </div>\n    </div>\n    <p class=\"small text-danger text-center\" *ngIf=\"timerrorcheck\">Select The Time</p>\n    <div class=\"row mt-2\">\n      <div class=\"col-1\">\n        <input name=\"offer-select\" type=\"radio\" value=\"DiscountOffer\" (change)=\"onItemChange()\"\n          checked=\"otherofferradio\">\n      </div>\n      <div class=\"col-11\" [ngStyle]=\"{'opacity': DiscountOffer ? '0.5' : '1' }\">\n        <div class=\"row \">\n          <div class=\"col-6\">\n            <p class=\"edit-name ion-text-left\">Offer:</p>\n          </div>\n          <div class=\"col-4\">\n            <!-- <span class=\"valuePadding\"><input id=\"inputRRPDiscount\" style=\"text-align:left;\">%</span> -->\n            <span><input [(ngModel)]=\"offer\" type=\"text\" pattern=\"\\d*\" maxlength=\"2\" min=\"1\" max=\"99\" id=\"offer\"\n                (keyup)=\"keydown()\" [disabled]=\"DiscountOffer\"></span>\n          </div>\n          <div class=\"col-2\">\n            <p>%</p>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-6\">\n            <p class=\"edit-name ion-text-left\">Offer Price(₹) :</p>\n          </div>\n          <div class=\"col-6\">\n            <input [(ngModel)]=\"offerPrice\" type=\"text\" id=\"offer\" disabled>\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n    <div class=\"row\">\n      <div class=\"col-1\">\n        <input name=\"offer-select\" type=\"radio\" name=\"offer-select\" value=\"OtherOffer\" (change)=\"onItemChange2()\" />\n      </div>\n      <div class=\"col-11\" [ngStyle]=\"{'opacity': OtherOffer ? '0.5' : '1' }\">\n        <div class=\"row\">\n          <div class=\"col-6\">\n            <p class=\"edit-name ion-text-left\">Offer :</p>\n          </div>\n          <div class=\"col-6\">\n            <input [(ngModel)]=\"otheroffer\" type=\"text\" id=\"offer\" placeholder=\"Eg:Buy 2 Get 1 Free\"\n              style=\"font-size: 12px;\" [disabled]=\"otherofferenable\" (keyup)=\"otheroffercheck()\">\n          </div>\n        </div>\n      </div>\n    </div>\n    <p class=\"small text-danger text-center\" *ngIf=\"OfferCheck\">Choose Anyone one of the offer</p>\n    <div class=\"form-group mt-3 ion-text-center\">\n      <label for=\"exampleFormControlTextarea1\"> Description </label>\n      <textarea [(ngModel)]=\"description\" maxlength=\"50\" style=\"background-color: #fff;margin-top: 5px;\"\n        class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"3\" (keyup)=\" descrtionerrorFalse()\"></textarea>\n    </div>\n    <p class=\"small text-danger text-center\" *ngIf=\"descriptionerror\">Enter The Description</p>\n    <div style=\"width:100%; text-align: center;\">\n      <button type=\"button\" (click)=\"addoffer()\" class=\"btn btn-primary  confirm-btn mt-2\">Confirm</button>\n    </div>\n  </div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n</ion-content>\n\n\n\n<!-- Add New Category Pop Up-->\n<div class=\"card\" *ngIf=\"PopupModel\" style=\"margin-top: 20px;\" id=\"card\">\n  <div class=\"row\" style=\"margin:10%\" id=\"modal\">\n    <div class=\"col-12 ion-text-left \" style=\"margin-top: 20px;\">\n      <svg (click)=\"backToprivious()\" style=\"color: black;margin-top:-8px;cursor:pointer\"\n        xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"#23d5ab\" class=\"bi bi-arrow-left\"\n        viewBox=\"0 0 16 16\">\n        <path fill-rule=\"evenodd\"\n          d=\"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z\" />\n      </svg>\n    </div>\n    <div class=\"col-12\">\n      <h5 class=\"name  ion-text-center\" style=\"color:#676767;\"><b>Type Your Category Name</b></h5>\n    </div>\n    <div class=\"col-12\">\n      <input [(ngModel)]=\"categoryName\" type=\"text\">\n    </div>\n\n    <div style=\"width:100%; text-align: center;\">\n      <button type=\"button\" (click)=\"createCategory()\" class=\"btn  submit-btn mt-2\">Submit</button>\n    </div>\n  </div>\n</div>\n\n\n<!-- Add New Sub-Category Pop Up-->\n<div class=\"card\" *ngIf=\"subcategoryPopupModel\" style=\"margin-top: 20px;\" id=\"card\">\n  <div class=\"row\" style=\"margin:10%\" id=\"modal\">\n    <div class=\"col-12 ion-text-left \" style=\"margin-top: 20px;\">\n      <svg (click)=\"ScBackToprivious()\" style=\"color: black;margin-top:-8px;cursor:pointer\"\n        xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"#23d5ab\" class=\"bi bi-arrow-left\"\n        viewBox=\"0 0 16 16\">\n        <path fill-rule=\"evenodd\"\n          d=\"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z\" />\n      </svg>\n    </div>\n    <div class=\"col-12\">\n      <h5 class=\"name  ion-text-center\" style=\"color:#676767;\"><b>Type Your Subcategory Name</b></h5>\n    </div>\n    <div class=\"col-12\">\n      <input [(ngModel)]=\"subcategoryName\" type=\"text\">\n    </div>\n    <div style=\"width:100%; text-align: center;\">\n      <button type=\"button\" (click)=\"createSubcategory()\" class=\"btn  submit-btn mt-2\">Submit</button>\n    </div>\n  </div>\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_tab4_tab4_module_ts.js.map