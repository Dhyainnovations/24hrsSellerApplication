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
        this.backgroundisvisible = false;
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
        this.orderObjRes = [];
        this.OnlyIfCategorySelected = true;
        this.otherofferList = [];
        this.expiryDateandTime = new Date;
        //Get All available Offer
        this.expiredofferList = [];
        this.expiredotherofferList = [];
        route.params.subscribe(val => {
            this.isvisible = false;
            this.cardVisible = true;
            this.getOfferList();
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
                                this.getOfferList();
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
                if (response.records[i].other_offer != "" && response.records[i].remaining_time[0] != "-") {
                    const data = {
                        product_image: response.records[i].product_image,
                        offer_time: response.records[i].offer_end_time,
                        total_cost: response.records[i].total_cost,
                        product: response.records[i].product,
                        product_unit: response.records[i].product_unit,
                        other_offer: response.records[i].other_offer,
                        remaining_time: response.records[i].remaining_time
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
                if (response.records[i].other_offer != "" && response.records[i].remaining_time[0] == "-") {
                    const data = {
                        product_image: response.records[i].product_image,
                        offer_time: response.records[i].offer_end_time,
                        total_cost: response.records[i].total_cost,
                        product: response.records[i].product,
                        product_unit: response.records[i].product_unit,
                        other_offer: response.records[i].other_offer,
                        remaining_time: response.records[i].remaining_time
                    };
                    this.expiredotherofferList.push(data);
                }
                this.CheckOtherOfferExpiry = this.expiredotherofferList.length;
                if (this.CheckOfferExpiry > 0 || this.CheckOtherOfferExpiry > 0) {
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
    getOfferList() {
        this.offerList = [];
        this.expiredofferList = [];
        this.http.get('/offer_time_calculate').subscribe((response) => {
            console.log(response);
            for (var i = 0; i < response.records.length; i++) {
                if (response.records[i].offer_price != "" && response.records[i].remaining_time[0] != "-") {
                    console.log(response.records[i].offer_price.length);
                    const data = {
                        product_image: response.records[i].product_image,
                        offer: response.records[i].offer,
                        offer_time: response.records[i].offer_end_time,
                        total_cost: response.records[i].total_cost,
                        offer_price: response.records[i].offer_price,
                        product: response.records[i].product,
                        product_unit: response.records[i].product_unit,
                        remaining_time: response.records[i].remaining_time
                    };
                    console.log(this.offerList);
                    this.offerList.push(data);
                }
            }
            this.noOffer = false;
        }, (error) => {
            console.log(error);
            this.noOffer = true;
        });
        this.getExpiredOfferList();
    }
    getExpiredOfferList() {
        this.http.get('/offer_time_calculate').subscribe((response) => {
            console.log(response);
            for (var i = 0; i < response.records.length; i++) {
                if (response.records[i].offer_price != "" && response.records[i].remaining_time[0] == "-") {
                    const data = {
                        product_image: response.records[i].product_image,
                        offer_time: response.records[i].offer_end_time,
                        total_cost: response.records[i].total_cost,
                        product: response.records[i].product,
                        product_unit: response.records[i].product_unit,
                        offer_price: response.records[i].offer_price,
                        offer: response.records[i].offer,
                        remaining_time: response.records[i].remaining_time
                    };
                    this.expiredofferList.push(data);
                }
                this.CheckOfferExpiry = this.expiredofferList.length;
                if (this.CheckOfferExpiry > 0 || this.CheckOtherOfferExpiry > 0) {
                    this.expiredOffersBanner = true;
                }
                else {
                    this.expiredOffersBanner = false;
                    3.;
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

module.exports = ".card {\n  border: 1px solid #bfbfbf;\n  border-radius: 5px;\n  background-color: #fff !important;\n  box-shadow: 3px 3px 16px 4px #ccc;\n  width: 100% !important;\n  margin: 5px;\n}\n\n.signin-div {\n  width: 95%;\n}\n\n.welcomecard {\n  background-color: #fff;\n  width: 97%;\n  margin: auto !important;\n  margin-bottom: 8px !important;\n  border-radius: 4px !important;\n  box-shadow: 3px 3px 16px 4px #ccc;\n}\n\n.expiredcard {\n  background-color: #cbcbcb;\n  width: 97%;\n  margin: auto !important;\n  margin-bottom: 8px !important;\n  border-radius: 4px !important;\n  box-shadow: 3px 3px 16px 4px #ccc;\n  opacity: 0.8;\n}\n\nimg {\n  border-radius: 3px;\n}\n\n.offer-btn {\n  background: #0D0D0D;\n  border: 1px solid #fff;\n  border-radius: 5px;\n  color: #fff;\n}\n\n.product-name {\n  margin-top: -10px !important;\n  text-align: center;\n}\n\n.badge {\n  background-color: #ffffff91;\n  font-size: 10px !important;\n  margin-top: 33% !important;\n  color: #121212 !important;\n}\n\n#offer:focus {\n  outline: none !important;\n  border: 1px solid #fff;\n  box-shadow: 0 0 2px #e9f3ff;\n}\n\n.confirm-btn {\n  border-radius: 5px !important;\n  width: 50%;\n  height: 35px;\n  background: #0D0D0D;\n  color: #fff;\n  border: 1px solid #fff;\n  margin: 5px;\n}\n\n#card {\n  background-color: #fff;\n  border-radius: 5px;\n  box-shadow: 2px 2px 2px 2px #ccc;\n  margin-bottom: 5px;\n  border: 1px solid #ebe6e6;\n}\n\n#blurred {\n  -moz-filter: blur(2px);\n  -o-filter: blur(2px);\n  -ms-filter: blur(2px);\n  filter: blur(2px);\n}\n\n#kg-dropdwon {\n  position: relative;\n  display: flex;\n  width: 100%;\n  height: 3em;\n  border-radius: 0.25em;\n  overflow: hidden;\n}\n\ninput[type=text] {\n  font-size: 15px;\n  margin: 0 5px;\n  width: 90%;\n  box-sizing: border-box;\n  border: none;\n  background-color: transparent !important;\n  border-bottom: 2px solid #EB154B;\n}\n\n#edit {\n  cursor: pointer;\n}\n\n.myproduct-div {\n  position: absolute;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border-radius: 8px;\n  box-shadow: 2px 2px 2px 2px #ebe6e6;\n  width: 96% !important;\n  margin: 5px;\n}\n\n.select {\n  width: 95% !important;\n  text-align: center !important;\n}\n\n.repost-btn {\n  color: #EB154B;\n  text-align: center;\n}\n\n.repost-btn:hover {\n  background: none !important;\n}\n\n.no-of-views {\n  font-size: 12px;\n  margin: 0 !important;\n  padding: 0 !important;\n}\n\n.outter-badge {\n  position: relative;\n  margin: 10px;\n  width: 74px;\n}\n\n.inner-badge {\n  display: table;\n  position: absolute;\n  border-radius: 50%;\n  top: 55%;\n  left: 30px;\n  color: #0D0D0D;\n  background: #ccccccbe;\n  background-repeat: no-repeat;\n  background-size: cover;\n  text-align: center;\n}\n\n.inner-badge p {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 8px;\n}\n\nion-badge {\n  border-radius: 4px !important;\n}\n\nion-content {\n  background-color: #ffff !important;\n  --offset-bottom: auto !important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n\n.valuePadding {\n  border: 1px inset #ccc;\n  margin: 0 !important;\n  padding: 0 !important;\n}\n\n.valuePadding input {\n  border: none;\n  padding: 0px;\n  outline: none;\n}\n\ninput[type=number] {\n  font-size: 15px;\n  margin: 0 5px;\n  width: 90%;\n  box-sizing: border-box;\n  border: none;\n  background-color: transparent !important;\n  border-bottom: 2px solid #EB154B;\n}\n\ninput:focus {\n  outline: none !important;\n  border-bottom: 2px solid #23d5ab !important;\n}\n\n#offercard {\n  background-color: #9b4f4f;\n}\n\ninput[type=datetime-local] {\n  font-size: 15px;\n  margin: 0 5px;\n  width: 90%;\n  box-sizing: border-box;\n  border: none;\n  background-color: transparent !important;\n  border-bottom: 2px solid #EB154B;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsaUNBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7QUFDRjs7QUFDQTtFQUNFLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLGlDQUFBO0FBRUY7O0FBQUE7RUFDRSx5QkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQ0FBQTtFQUNBLFlBQUE7QUFHRjs7QUFEQTtFQUNFLGtCQUFBO0FBSUY7O0FBQUE7RUFFRSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBRUY7O0FBQ0E7RUFDRSw0QkFBQTtFQUNBLGtCQUFBO0FBRUY7O0FBQ0E7RUFDRSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtBQUVGOztBQUdBO0VBQ0Usd0JBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSw2QkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBQUY7O0FBR0E7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBQUY7O0FBR0E7RUFFRSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSx3Q0FBQTtFQUNBLGdDQUFBO0FBQUY7O0FBVUE7RUFDRSxlQUFBO0FBUEY7O0FBVUE7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FBUEY7O0FBV0E7RUFDRSxxQkFBQTtFQUNBLDZCQUFBO0FBUkY7O0FBV0E7RUFFRSxjQUFBO0VBQ0Esa0JBQUE7QUFURjs7QUFZQTtFQUNFLDJCQUFBO0FBVEY7O0FBWUE7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtBQVRGOztBQVlBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBRUEsV0FBQTtBQVZGOztBQVlBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQVRGOztBQVlBO0VBQ0UsbUJBQUE7RUFDRSxzQkFBQTtFQUNKLFlBQUE7QUFUQTs7QUFZQTtFQUNFLDZCQUFBO0FBVEY7O0FBWUE7RUFDRSxrQ0FBQTtFQUtBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBYkY7O0FBZUU7RUFDRSxhQUFBO0FBYko7O0FBaUJBO0VBQ0Usc0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FBZEY7O0FBaUJBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBZEY7O0FBaUJBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0Esd0NBQUE7RUFDQSxnQ0FBQTtBQWRGOztBQWlCQTtFQUNFLHdCQUFBO0VBQ0EsMkNBQUE7QUFkRjs7QUFxQkE7RUFDRSx5QkFBQTtBQWxCRjs7QUFxQkE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSx3Q0FBQTtFQUNBLGdDQUFBO0FBbEJGIiwiZmlsZSI6InRhYjQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gIGJvcmRlciAgICAgICAgICA6IDFweCBzb2xpZCAjYmZiZmJmO1xyXG4gIGJvcmRlci1yYWRpdXMgICA6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzozcHggM3B4IDE2cHggNHB4ICNjY2M7XHJcbiAgd2lkdGggICAgICAgICAgIDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbiAgICAgICAgICA6IDVweDtcclxufVxyXG5cclxuLnNpZ25pbi1kaXZ7XHJcbiAgd2lkdGg6IDk1JTtcclxufVxyXG4ud2VsY29tZWNhcmR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB3aWR0aDogOTclO1xyXG4gIG1hcmdpbjogYXV0byAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1ib3R0b206ICA4cHggIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93OjNweCAzcHggMTZweCA0cHggI2NjYztcclxufVxyXG4uZXhwaXJlZGNhcmR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMywgMjAzLCAyMDMpO1xyXG4gIHdpZHRoOiA5NyU7XHJcbiAgbWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogIDhweCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6M3B4IDNweCAxNnB4IDRweCAjY2NjO1xyXG4gIG9wYWNpdHk6IDAuODtcclxufVxyXG5pbWd7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIFxyXG59XHJcblxyXG4ub2ZmZXItYnRuIHtcclxuICBcclxuICBiYWNrZ3JvdW5kICAgOiAjMEQwRDBEO1xyXG4gIGJvcmRlciAgICAgICA6IDFweCBzb2xpZCAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBjb2xvciAgICAgICAgOiAjZmZmO1xyXG59XHJcblxyXG4ucHJvZHVjdC1uYW1lIHtcclxuICBtYXJnaW4tdG9wOiAtMTBweCAhaW1wb3J0YW50O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJhZGdlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOTE7XHJcbiAgZm9udC1zaXplICA6IDEwcHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tdG9wOiAzMyUgIWltcG9ydGFudDtcclxuICBjb2xvciAgICAgIDogIzEyMTIxMiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuXHJcbiNvZmZlcjpmb2N1cyB7XHJcbiAgb3V0bGluZSAgIDogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlciAgICA6IDFweCBzb2xpZCAjZmZmO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAycHggI2U5ZjNmZjtcclxufVxyXG5cclxuLmNvbmZpcm0tYnRuIHtcclxuICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcclxuICB3aWR0aCAgICAgICAgOiA1MCU7XHJcbiAgaGVpZ2h0ICAgICAgIDogMzVweDtcclxuICBiYWNrZ3JvdW5kICAgOiAjMEQwRDBEO1xyXG4gIGNvbG9yICAgICAgICA6ICNmZmY7XHJcbiAgYm9yZGVyICAgICAgIDogMXB4IHNvbGlkICNmZmY7XHJcbiAgbWFyZ2luICAgICAgIDogNXB4O1xyXG59XHJcblxyXG4jY2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzICAgOiA1cHg7XHJcbiAgYm94LXNoYWRvdyAgICAgIDogMnB4IDJweCAycHggMnB4ICNjY2M7XHJcbiAgbWFyZ2luLWJvdHRvbSAgIDogNXB4O1xyXG4gIGJvcmRlciAgICAgICAgICA6IDFweCBzb2xpZCAjZWJlNmU2O1xyXG59XHJcblxyXG4jYmx1cnJlZCB7XHJcbiAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoMnB4KTtcclxuICAtbW96LWZpbHRlciAgIDogYmx1cigycHgpO1xyXG4gIC1vLWZpbHRlciAgICAgOiBibHVyKDJweCk7XHJcbiAgLW1zLWZpbHRlciAgICA6IGJsdXIoMnB4KTtcclxuICBmaWx0ZXIgICAgICAgIDogYmx1cigycHgpO1xyXG59XHJcblxyXG4ja2ctZHJvcGR3b24ge1xyXG4gIHBvc2l0aW9uICAgICA6IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXkgICAgICA6IGZsZXg7XHJcbiAgd2lkdGggICAgICAgIDogMTAwJTtcclxuICBoZWlnaHQgICAgICAgOiAzZW07XHJcbiAgYm9yZGVyLXJhZGl1czogLjI1ZW07XHJcbiAgb3ZlcmZsb3cgICAgIDogaGlkZGVuO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXRleHRdIHtcclxuICBmb250LXNpemUgICAgICAgOiAxNXB4O1xyXG4gIG1hcmdpbiAgICAgICAgICA6IDAgNXB4O1xyXG4gIHdpZHRoICAgICAgICAgICA6IDkwJTtcclxuICBib3gtc2l6aW5nICAgICAgOiBib3JkZXItYm94O1xyXG4gIGJvcmRlciAgICAgICAgICA6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICBib3JkZXItYm90dG9tICAgOiAycHggc29saWQgI0VCMTU0QjtcclxufVxyXG5cclxuLy8gaW5wdXQ6Zm9jdXMge1xyXG4vLyAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuLy8gICBib3JkZXI6MXB4IHNvbGlkICNlOWYzZmYgIWltcG9ydGFudDtcclxuLy8gICBib3gtc2hhZG93OiAwIDAgMnB4ICM4YjhkOTE7XHJcbi8vIH1cclxuXHJcblxyXG4jZWRpdCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubXlwcm9kdWN0LWRpdiB7XHJcbiAgcG9zaXRpb24gICAgICAgIDogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXIgICAgICAgICAgOiAxcHggc29saWQgI2NjYztcclxuICBib3JkZXItcmFkaXVzICAgOiA4cHg7XHJcbiAgYm94LXNoYWRvdyAgICAgIDogMnB4IDJweCAycHggMnB4ICNlYmU2ZTY7XHJcbiAgd2lkdGggICAgICAgICAgIDogOTYlICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luICAgICAgICAgIDogNXB4O1xyXG5cclxufVxyXG5cclxuLnNlbGVjdCB7XHJcbiAgd2lkdGggICAgIDogOTUlICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yZXBvc3QtYnRuIHtcclxuICAvLyBiYWNrZ3JvdW5kICAgOiAjRUIxNTRCO1xyXG4gIGNvbG9yICAgICAgICA6ICNFQjE1NEI7XHJcbiAgdGV4dC1hbGlnbiAgIDogY2VudGVyO1xyXG5cclxufVxyXG4ucmVwb3N0LWJ0bjpob3ZlcntcclxuICBiYWNrZ3JvdW5kICAgOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uby1vZi12aWV3c3tcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbWFyZ2luOiAgMCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6ICAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5vdXR0ZXItYmFkZ2Uge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgLy8gYmFja2dyb3VuZDogI2ZmZjtcclxuICB3aWR0aDogNzRweDtcclxufVxyXG4uaW5uZXItYmFkZ2Uge1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgdG9wOiA1NSU7XHJcbiAgbGVmdDogMzBweDtcclxuICBjb2xvcjogIzBEMEQwRDtcclxuICBiYWNrZ3JvdW5kOiNjY2NjY2NiZTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIFxyXG59XHJcbi5pbm5lci1iYWRnZSBwe1xyXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5wYWRkaW5nOiA4cHg7XHJcbn1cclxuXHJcbmlvbi1iYWRnZXtcclxuICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmICFpbXBvcnRhbnQ7XHJcbiAgLy8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgZGFya3R1cnF1b2lzZVxyXG4gIC8vIDAlLCAjZDFmMmU3XHJcbiAgLy8gMTAwJSkgIWltcG9ydGFudDtcclxuXHJcbiAgLS1vZmZzZXQtYm90dG9tOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgLS1vdmVyZmxvdyAgICAgOiBoaWRkZW47XHJcbiAgb3ZlcmZsb3cgICAgICAgOiBhdXRvO1xyXG5cclxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLnZhbHVlUGFkZGluZyB7XHJcbiAgYm9yZGVyOiAxcHggaW5zZXQgI2NjYztcclxuICBtYXJnaW46ICAwICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogIDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnZhbHVlUGFkZGluZyBpbnB1dCB7XHJcbiAgYm9yZGVyIDogbm9uZTtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1udW1iZXJdIHtcclxuICBmb250LXNpemUgICAgICAgOiAxNXB4O1xyXG4gIG1hcmdpbiAgICAgICAgICA6IDAgNXB4O1xyXG4gIHdpZHRoICAgICAgICAgICA6IDkwJTtcclxuICBib3gtc2l6aW5nICAgICAgOiBib3JkZXItYm94O1xyXG4gIGJvcmRlciAgICAgICAgICA6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbSAgIDogMnB4IHNvbGlkICNFQjE1NEI7XHJcbn1cclxuXHJcbmlucHV0OmZvY3VzIHtcclxuICBvdXRsaW5lICAgOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbSAgIDogMnB4IHNvbGlkICMyM2Q1YWIgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcblxyXG4vLy0tLS0tLS0gY2FyZC0tLS0tLS0tLy9AYXQtcm9vdFxyXG5cclxuI29mZmVyY2FyZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU1LCA3OSwgNzkpO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPWRhdGV0aW1lLWxvY2FsXSB7XHJcbiAgZm9udC1zaXplICAgICAgIDogMTVweDtcclxuICBtYXJnaW4gICAgICAgICAgOiAwIDVweDtcclxuICB3aWR0aCAgICAgICAgICAgOiA5MCU7XHJcbiAgYm94LXNpemluZyAgICAgIDogYm9yZGVyLWJveDtcclxuICBib3JkZXIgICAgICAgICAgOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjRUIxNTRCO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 9184:
/*!************************************************!*\
  !*** ./src/app/tab4/tab4.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<!------------ Header  ---------------->\r\n<ion-toolbar color=\"light\">\r\n  <ion-buttons slot=\"start\">\r\n    <ion-menu-button style=\"margin-top:15px;color:#121212\" autoHide=\"false\">\r\n      <svg width=\"34\" height=\"34\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n        <path d=\"M5 7H19\" stroke=\"#121212\" stroke-width=\"2\" stroke-linecap=\"round\" />\r\n        <path d=\"M5 12H15\" stroke=\"#121212\" stroke-width=\"2\" stroke-linecap=\"round\" />\r\n        <path d=\"M5 17H11\" stroke=\"#121212\" stroke-width=\"2\" stroke-linecap=\"round\" />\r\n      </svg>\r\n    </ion-menu-button>\r\n  </ion-buttons>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-4\">\r\n      <h5 style=\"color:#121212;margin-top:10px\"><b></b></h5>\r\n    </div>\r\n    <div class=\"col-8 mt-2 mx-2\" style=\"text-align: right;width: 90%;\">\r\n      <svg (click)=\"notification()\" style=\"margin:3px;\" width=\"26\" height=\"26\" viewBox=\"0 0 24 24\" fill=\"none\"\r\n        xmlns=\"http://www.w3.org/2000/svg\">\r\n        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n          d=\"M13.7942 3.29494C13.2296 3.10345 12.6258 3 12 3C9.1535 3 6.7622 5.14032 6.44786 7.96942L6.19605 10.2356L6.1896 10.2933C6.06065 11.417 5.69489 12.5005 5.11646 13.4725L5.08667 13.5222L4.50863 14.4856C3.98408 15.3599 3.7218 15.797 3.77842 16.1559C3.8161 16.3946 3.93899 16.6117 4.12435 16.7668C4.40292 17 4.9127 17 5.93224 17H18.0678C19.0873 17 19.5971 17 19.8757 16.7668C20.061 16.6117 20.1839 16.3946 20.2216 16.1559C20.2782 15.797 20.0159 15.3599 19.4914 14.4856L18.9134 13.5222L18.8836 13.4725C18.4273 12.7059 18.1034 11.8698 17.9236 10.9994C15.1974 10.9586 13 8.73592 13 6C13 5.00331 13.2916 4.07473 13.7942 3.29494ZM16.2741 4.98883C16.0999 5.28551 16 5.63109 16 6C16 6.94979 16.6621 7.74494 17.5499 7.94914C17.4205 6.82135 16.9608 5.80382 16.2741 4.98883Z\"\r\n          fill=\"black\" />\r\n        <path\r\n          d=\"M9 17C9 17.394 9.0776 17.7841 9.22836 18.1481C9.37913 18.512 9.6001 18.8427 9.87868 19.1213C10.1573 19.3999 10.488 19.6209 10.8519 19.7716C11.2159 19.9224 11.606 20 12 20C12.394 20 12.7841 19.9224 13.1481 19.7716C13.512 19.6209 13.8427 19.3999 14.1213 19.1213C14.3999 18.8427 14.6209 18.512 14.7716 18.1481C14.9224 17.7841 15 17.394 15 17L12 17H9Z\"\r\n          fill=\"black\" />\r\n        <circle cx=\"18\" cy=\"6\" r=\"2.5\" fill=\"#eb154b\" stroke=\"#eb154b\" />\r\n      </svg>\r\n\r\n      <!-- <ion-badge style=\"border-radius: 50%;margin-left: -14px ;color:#eb154b ;font-size: 12px;\" color=\"light\">10</ion-badge> -->\r\n\r\n    </div>\r\n  </div>\r\n</ion-toolbar>\r\n\r\n\r\n\r\n\r\n<!-- If No Offer -- Add Offer -->\r\n<ion-content class=\"bg-class mb-3\" [ngStyle]=\"{'opacity':PopupModel ? '0.52' : '1' }\"\r\n  [ngStyle]=\"{'opacity':backgroundisvisible ? '0.52' : '1' }\">\r\n  <div class=\"  row mt-2 mb-2\">\r\n    <div class=\"col-9\">\r\n      <div style=\"width: 100%; \">\r\n        <button *ngIf=\"cardVisible\" (click)=\"offerPage()\" class=\"btn btn-success btn-sm  offer-btn mx-2 \">+ Add\r\n          Offer</button>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-3\">\r\n      <svg (click)=\"searchPage()\" style=\"margin-left: 20%;\" width=\"25\" height=\"25\" viewBox=\"0 0 24 24\" fill=\"none\">\r\n        <circle cx=\"11\" cy=\"11\" r=\"7\" stroke=\"#121212\" stroke-width=\"2\" />\r\n        <path\r\n          d=\"M11 8C10.606 8 10.2159 8.0776 9.85195 8.22836C9.48797 8.37913 9.15726 8.6001 8.87868 8.87868C8.6001 9.15726 8.37913 9.48797 8.22836 9.85195C8.0776 10.2159 8 10.606 8 11\"\r\n          stroke=\"#CCD2E3\" stroke-width=\"2\" stroke-linecap=\"round\" />\r\n        <path d=\"M20 20L17 17\" stroke=\"#121212\" stroke-width=\"2\" stroke-linecap=\"round\" />\r\n      </svg>\r\n\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"noOffer\" style=\"margin: auto !important;margin-top: 50%;\">\r\n    <img src=\"assets/gif/empty.gif\" alt=\"\">\r\n  </div>\r\n\r\n\r\n\r\n  <div *ngIf=\"cardVisible\" class=\"add-card-div\">\r\n    <!-----------------  offers card ------------->\r\n    <!-- Show Offer In Card -->\r\n    <div *ngFor=\"let offer of offerList; let i = index\">\r\n      <div class=\"welcomecard\">\r\n        <div class=\"row\">\r\n          <div class=\"col-4\">\r\n            <div class=\"outter-badge\">\r\n              <img src=\"{{offer.product_image}}\" alt=\"\">\r\n            </div>\r\n            <button (click)=\"repostOffer(offer.product)\" class=\"btn btn-sm btn-outline-danger repost-btn mx-3 \">Repost</button>\r\n\r\n          </div>\r\n          <div class=\"col-8\">\r\n            <div class=\"row\">\r\n              <div style=\"margin-top: -5px;\" class=\"col-8\">\r\n                <h6><b>{{offer.product}}</b></h6>\r\n              </div>\r\n              <div class=\"col-4 mt-3\">\r\n                <ion-badge style=\"color:#ffffff !important;font-size: 10px;\" slot=\"start\" color=\"dark\">1\r\n                  {{offer.product_unit}}</ion-badge>\r\n              </div>\r\n            </div>\r\n            <h6 style=\"margin-top: -15px;\" class=\"no-of-views\">\r\n              <b>Views</b>&nbsp;\r\n              <span> 10</span>\r\n            </h6>\r\n            <p class=\"no-of-views\">\r\n              <b>Offer</b>&nbsp;\r\n              {{offer.offer}}%\r\n            </p>\r\n            <p class=\"no-of-views\">\r\n              <b>Offer time</b>&nbsp;\r\n              {{offer.offer_time}}\r\n            </p>\r\n\r\n            <p class=\"no-of-views\">\r\n              <b>Remaining Time</b>&nbsp;\r\n              {{offer.remaining_time}}\r\n            </p>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-6\">\r\n\r\n                <p style=\"font-size: 12px;\">\r\n                  <b>Cost</b>&nbsp;\r\n                  <del>₹{{offer.total_cost}} </del> &nbsp;₹{{offer.offer_price}}\r\n                </p>\r\n                <!-- <p style=\"font-size: 13px;\"><b>{{offer.other_offer}}</b></p> -->\r\n              </div>\r\n              <!-- <div class=\"col-6\">\r\n                <button (click)=\"repostOffer(offer.product)\" class=\"btn btn-sm btn-outline-danger repost-btn mx-3 \">Repost</button>\r\n              </div> -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <!--------------- other offer card ------------->\r\n    <div *ngFor=\"let offer of otherofferList; let i = index\">\r\n\r\n      <div class=\"welcomecard \">\r\n        <div class=\"row\">\r\n          <div class=\"col-4\">\r\n\r\n            <div class=\"outter-badge\">\r\n              <img src=\"{{offer.product_image}}\" alt=\"\">\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"col-8\">\r\n            <div class=\"row\">\r\n              <div style=\"margin-top: -5px;\" class=\"col-8\">\r\n                <h6><b>{{offer.product}}</b></h6>\r\n              </div>\r\n              <div class=\"col-4 mt-3\">\r\n                <ion-badge style=\"color:#ffffff !important;font-size: 10px;\" slot=\"start\" color=\"dark\">1\r\n                  {{offer.product_unit}}</ion-badge>\r\n\r\n              </div>\r\n            </div>\r\n            <h6 style=\"margin-top: -15px;\" class=\"no-of-views\">\r\n              <b>Views</b>&nbsp;\r\n              <span> 10</span>\r\n            </h6>\r\n\r\n            <p class=\"no-of-views\">\r\n              <b>Offer </b>&nbsp;\r\n              {{offer.other_offer}}\r\n            </p>\r\n\r\n            <p class=\"no-of-views\">\r\n              <b>Offer time</b>&nbsp;\r\n              {{offer.offer_time}}\r\n            </p>\r\n\r\n            <p class=\"no-of-views\">\r\n              <b>Remaining Time</b>&nbsp;\r\n              {{offer.remaining_time}}\r\n            </p>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-6\">\r\n\r\n                <p style=\"font-size: 12px;\">\r\n                  <b>Cost</b>&nbsp;\r\n                  ₹{{offer.total_cost}}\r\n                </p>\r\n\r\n              </div>\r\n              <div class=\"col-6\">\r\n                <button (click)=\"repostOffer(offer.product)\" class=\"btn btn-sm repost-btn mx-3 \">Repost</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  <div class=\"container mt-5\" *ngIf=\"cardVisible\">\r\n    <h5 *ngIf=\"expiredOffersBanner\">Expired Offers:</h5>\r\n\r\n  </div>\r\n\r\n  <div *ngIf=\"cardVisible\" class=\"add-card-div\">\r\n    <!-----------------  offers card ------------->\r\n    <!-- Show Offer In Card -->\r\n    <div *ngFor=\"let offer of expiredofferList; let i = index\">\r\n      <div class=\"expiredcard\">\r\n        <div class=\"row\">\r\n          <div class=\"col-4\">\r\n            <div class=\"outter-badge\">\r\n              <img src=\"{{offer.product_image}}\" alt=\"\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-8\">\r\n            <div class=\"row\">\r\n              <div style=\"margin-top: -5px;\" class=\"col-8\">\r\n                <h6><b>{{offer.product}}</b></h6>\r\n              </div>\r\n              <div class=\"col-4 mt-3\">\r\n                <ion-badge style=\"color:#ffffff !important;font-size: 10px;\" slot=\"start\" color=\"dark\">1\r\n                  {{offer.product_unit}}</ion-badge>\r\n              </div>\r\n            </div>\r\n            <h6 style=\"margin-top: -15px;\" class=\"no-of-views\">\r\n              <b>Views</b>&nbsp;\r\n              <span> 10</span>\r\n            </h6>\r\n            <p class=\"no-of-views\">\r\n              <b>Offer</b>&nbsp;\r\n              {{offer.offer}}%\r\n            </p>\r\n            <p class=\"no-of-views\">\r\n              <b>Offer time</b>&nbsp;\r\n              {{offer.offer_time}}\r\n            </p>\r\n\r\n         \r\n            <div class=\"row\">\r\n              <div class=\"col-6\">\r\n\r\n                <p style=\"font-size: 12px;\">\r\n                  <b>Cost</b>&nbsp;\r\n                  <del>₹{{offer.total_cost}} </del> &nbsp;₹{{offer.offer_price}}\r\n                </p>\r\n                <!-- <p style=\"font-size: 13px;\"><b>{{offer.other_offer}}</b></p> -->\r\n              </div>\r\n              <div class=\"col-6\">\r\n                <button (click)=\"repostOffer(offer.product)\" class=\"btn btn-sm repost-btn mx-3 mt-5\">Repost</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <!--------------- other offer card ------------->\r\n    <div *ngFor=\"let offer of expiredotherofferList; let i = index\">\r\n\r\n      <div class=\"expiredcard \">\r\n        <div class=\"row\">\r\n          <div class=\"col-4\">\r\n\r\n            <div class=\"outter-badge\">\r\n              <img src=\"{{offer.product_image}}\" alt=\"\">\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"col-8\">\r\n            <div class=\"row\">\r\n              <div style=\"margin-top: -5px;\" class=\"col-8\">\r\n                <h6><b>{{offer.product}}</b></h6>\r\n              </div>\r\n              <div class=\"col-4 mt-3\">\r\n                <ion-badge style=\"color:#ffffff !important;font-size: 10px;\" slot=\"start\" color=\"dark\">1\r\n                  {{offer.product_unit}}</ion-badge>\r\n\r\n              </div>\r\n            </div>\r\n            <h6 style=\"margin-top: -15px;\" class=\"no-of-views\">\r\n              <b>Views</b>&nbsp;\r\n              <span> 10</span>\r\n            </h6>\r\n\r\n            <p class=\"no-of-views\">\r\n              <b>Offer </b>&nbsp;\r\n              {{offer.other_offer}}\r\n            </p>\r\n\r\n            <p class=\"no-of-views\">\r\n              <b>Offer time</b>&nbsp;\r\n              {{offer.offer_time}}\r\n            </p>\r\n\r\n           \r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-6\">\r\n\r\n                <p style=\"font-size: 12px;\">\r\n                  <b>Cost</b>&nbsp;\r\n                  ₹{{offer.total_cost}}\r\n                </p>\r\n\r\n              </div>\r\n              <div class=\"col-6\">\r\n                <button (click)=\"repostOffer(offer.product)\" class=\"btn btn-sm repost-btn mx-3 \">Repost</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  <!-- Add Offer Pop Up Card -->\r\n  <div *ngIf=\"isvisible\" class=\"container signin-div mb-4\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12 ion-text-left mt-2\">\r\n        <svg style=\"margin-top: 5px !important;\" (click)=\"backToPrivious()\" width=\"22\" height=\"20\" fill=\"#EB154B\"\r\n          class=\"bi bi-arrow-left\" viewBox=\"0 0 16 16\">\r\n          <path fill-rule=\"evenodd\"\r\n            d=\"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z\" />\r\n        </svg>\r\n      </div>\r\n      <div class=\"col-12\">\r\n        <h5 class=\"name  ion-text-center\" style=\"color:#676767;\"><b>Add Your Offer</b></h5>\r\n        <div class=\"row\">\r\n          <div class=\"col-6\">\r\n            <p class=\"name mt-2 ion-text-left\" style=\"color:hsl(0, 0%, 25%);\">Category :</p>\r\n          </div>\r\n          <!-- <div class=\"col-6\">\r\n            <button class=\"btn signin-btn text-white\" (click)=\"visibleCategoryPopup()\">Add New +</button>\r\n          </div> -->\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <form #categoryselect=\"ngForm\" (change)=\"popupModel(categoryselect.value)\">\r\n        <div class=\"col-12 \">\r\n          <div class=\"select\">\r\n            <select ngModel placeholder=\"category\" name=\"category\">\r\n              <option value=\"\" disabled selected>Select Your Category</option>\r\n              <option *ngFor=\"let cat of categoryList\" value=\"{{cat.tbid}}\">{{cat.category}}</option>\r\n              <!-- <option style=\"background-color:#23d5ab;color:#fff;\" value=\"categoryPopup\" (click)=\"popupModelOpen()\">+ add new</option> -->\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </form>\r\n      <p class=\"small text-danger text-center\" *ngIf=\"CheckCategoryTbidCheck\">Select Your Category</p>\r\n\r\n      <div class=\"col-12 mt-4\">\r\n        <div class=\"row\">\r\n          <div class=\"col-6\">\r\n            <p class=\"name mt-2 ion-text-left\" style=\"color:hsl(0, 0%, 25%);\">Sub Category :</p>\r\n          </div>\r\n          <!-- <div class=\"col-6\">\r\n            <button class=\"btn signin-btn text-white\" (click)=\"visibleSubCategoryPopup()\"\r\n              [disabled]=\"OnlyIfCategorySelected\">Add New +</button>\r\n          </div> -->\r\n        </div>\r\n        <form #subcategoryselect=\"ngForm\" (change)=\"popupModelSubCategory(subcategoryselect.value)\">\r\n          <div class=\"select\" id=\"kg-dropdwon\">\r\n            <select ngModel name=\"subcategory\">\r\n              <option value=\"\" disabled selected>Select Your Sub Category</option>\r\n              <option *ngFor=\"let subcat of subcategoryList\" value=\"{{subcat.tbid}}\">{{subcat.subsubcategory}}\r\n              </option>\r\n              <option disabled *ngIf=\"subCategoryNotfound\">No Sub Category Found</option>\r\n              <!-- <option style=\"background-color:#23d5ab;color:#fff;\" value=\"subcategoryPopup\">+ add new</option> -->\r\n            </select>\r\n          </div>\r\n        </form>\r\n        <p class=\"small text-danger text-center\" *ngIf=\"CheckSubCategoryTbidCheck\">Select Your Subcategory</p>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-12 ion-text-left\">\r\n        <p class=\"name mt-2\" style=\"color:#404040;\">Product:</p>\r\n      </div>\r\n      <div class=\"col-12\">\r\n        <form #productselect=\"ngForm\" (change)=\"productNameCheckCondition(productselect.value)\">\r\n          <div class=\"select\" id=\"kg-dropdwon\">\r\n            <select ngModel name=\"productName\">\r\n              <option value=\"\" disabled selected>Select Your Product</option>\r\n              <option *ngFor=\"let product of productList\" value=\"{{product.product_name}}\">{{product.product_name}}\r\n              </option>\r\n              <option disabled *ngIf=\"ProductNotfound\">No Product Found</option>\r\n            </select>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <p class=\"small text-danger text-center\" *ngIf=\"ProductTbidCheck\">Select Your Product</p>\r\n\r\n    <div class=\"row mt-4\">\r\n      <div class=\"col-6\">\r\n        <p class=\"edit-name ion-text-left\" style=\"color:#404040;\">Total Cost(₹) : </p>\r\n      </div>\r\n\r\n      <div class=\"col-6\">\r\n        <input [(ngModel)]=\"totalCost\" type=\"number\" id=\"offer\" (keyup)=\"keydownoffer()\" disabled>\r\n      </div>\r\n    </div>\r\n    <p class=\"small text-danger text-center\" *ngIf=\"totalcosterror\">Enter Your Cost</p>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-12\">\r\n        <p class=\"edit-name ion-text-left\" style=\"color:#404040;\">Offer Time :</p>\r\n      </div>\r\n      <div class=\"col-12\">\r\n        <!-- <input [(ngModel)]=\"offerTime\" type=\"time\" id=\"offer\"> -->\r\n        <input type=\"datetime-local\" [ngModel]=\"expiryDateandTime | date:'yyyy-MM-ddTHH:mm'\"\r\n        (ngModelChange)=\"change($event)\">\r\n      </div>\r\n    </div>\r\n    <p class=\"small text-danger text-center\" *ngIf=\"timerrorcheck\">Select The Time</p>\r\n    <div class=\"row mt-2\">\r\n      <div class=\"col-1\">\r\n        <input name=\"offer-select\" type=\"radio\" value=\"DiscountOffer\" (change)=\"onItemChange()\"\r\n          checked=\"otherofferradio\">\r\n      </div>\r\n      <div class=\"col-11\" [ngStyle]=\"{'opacity': DiscountOffer ? '0.5' : '1' }\">\r\n        <div class=\"row \">\r\n          <div class=\"col-6\">\r\n            <p class=\"edit-name ion-text-left\" style=\"color:#404040;\">Offer:</p>\r\n          </div>\r\n          <div class=\"col-4\">\r\n            <!-- <span class=\"valuePadding\"><input id=\"inputRRPDiscount\" style=\"text-align:left;\">%</span> -->\r\n            <span><input [(ngModel)]=\"offer\" type=\"text\" pattern=\"\\d*\" maxlength=\"2\" min=\"1\" max=\"99\" id=\"offer\"\r\n                (keyup)=\"keydown()\" [disabled]=\"DiscountOffer\"></span>\r\n          </div>\r\n          <div class=\"col-2\">\r\n            <p>%</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-6\">\r\n            <p class=\"edit-name ion-text-left\" style=\"color:#404040;\">Offer Price(₹) :</p>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <input [(ngModel)]=\"offerPrice\" type=\"text\" id=\"offer\" disabled>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-1\">\r\n        <input name=\"offer-select\" type=\"radio\" name=\"offer-select\" value=\"OtherOffer\" (change)=\"onItemChange2()\" />\r\n      </div>\r\n      <div class=\"col-11\" [ngStyle]=\"{'opacity': OtherOffer ? '0.5' : '1' }\">\r\n        <div class=\"row\">\r\n          <div class=\"col-6\">\r\n            <p class=\"edit-name ion-text-left\" style=\"color:#404040;\">Other Offer :</p>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <input [(ngModel)]=\"otheroffer\" type=\"text\" id=\"offer\" placeholder=\"Eg:Buy 2 Get 1 Free\"\r\n              style=\"font-size: 12px;\" [disabled]=\"otherofferenable\" (keyup)=\"otheroffercheck()\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <p class=\"small text-danger text-center\" *ngIf=\"OfferCheck\">Choose Anyone one of the offer</p>\r\n    <div class=\"form-group mt-3 ion-text-center\">\r\n      <label for=\"exampleFormControlTextarea1\" style=\"color:#404040;\"> Description </label>\r\n      <textarea [(ngModel)]=\"description\" maxlength=\"50\" style=\"background-color: #fff;margin-top: 5px;\"\r\n        class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"3\" (keyup)=\" descrtionerrorFalse()\"></textarea>\r\n    </div>\r\n    <p class=\"small text-danger text-center\" *ngIf=\"descriptionerror\">Enter The Description</p>\r\n    <div style=\"width:100%; text-align: center;\">\r\n      <button type=\"button\" (click)=\"addoffer()\" class=\"btn btn-primary  confirm-btn mt-2\">Confirm</button>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>\r\n\r\n\r\n\r\n<!-- Add New Category Pop Up-->\r\n<div class=\"card\" *ngIf=\"PopupModel\" style=\"margin-top: 20px;\" id=\"card\">\r\n  <div class=\"row\" style=\"margin:10%\" id=\"modal\">\r\n    <div class=\"col-12 ion-text-left \" style=\"margin-top: 20px;\">\r\n      <svg (click)=\"backToprivious()\" style=\"color: black;margin-top:-8px;cursor:pointer\"\r\n        xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"#23d5ab\" class=\"bi bi-arrow-left\"\r\n        viewBox=\"0 0 16 16\">\r\n        <path fill-rule=\"evenodd\"\r\n          d=\"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z\" />\r\n      </svg>\r\n    </div>\r\n    <div class=\"col-12\">\r\n      <h5 class=\"name  ion-text-center\" style=\"color:#676767;\"><b>Type Your Category Name</b></h5>\r\n    </div>\r\n    <div class=\"col-12\">\r\n      <input [(ngModel)]=\"categoryName\" type=\"text\">\r\n    </div>\r\n\r\n    <div style=\"width:100%; text-align: center;\">\r\n      <button type=\"button\" (click)=\"createCategory()\" class=\"btn  submit-btn mt-2\">Submit</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- Add New Sub-Category Pop Up-->\r\n<div class=\"card\" *ngIf=\"subcategoryPopupModel\" style=\"margin-top: 20px;\" id=\"card\">\r\n  <div class=\"row\" style=\"margin:10%\" id=\"modal\">\r\n    <div class=\"col-12 ion-text-left \" style=\"margin-top: 20px;\">\r\n      <svg (click)=\"ScBackToprivious()\" style=\"color: black;margin-top:-8px;cursor:pointer\"\r\n        xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"#23d5ab\" class=\"bi bi-arrow-left\"\r\n        viewBox=\"0 0 16 16\">\r\n        <path fill-rule=\"evenodd\"\r\n          d=\"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z\" />\r\n      </svg>\r\n    </div>\r\n    <div class=\"col-12\">\r\n      <h5 class=\"name  ion-text-center\" style=\"color:#676767;\"><b>Type Your Subcategory Name</b></h5>\r\n    </div>\r\n    <div class=\"col-12\">\r\n      <input [(ngModel)]=\"subcategoryName\" type=\"text\">\r\n    </div>\r\n    <div style=\"width:100%; text-align: center;\">\r\n      <button type=\"button\" (click)=\"createSubcategory()\" class=\"btn  submit-btn mt-2\">Submit</button>\r\n    </div>\r\n  </div>\r\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_tab4_tab4_module_ts.js.map