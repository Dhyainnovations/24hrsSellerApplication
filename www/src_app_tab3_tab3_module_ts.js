"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab3_tab3_module_ts"],{

/***/ 9818:
/*!*********************************************!*\
  !*** ./src/app/tab3/tab3-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageRoutingModule": () => (/* binding */ Tab3PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 8592);




const routes = [
    {
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page,
    }
];
let Tab3PageRoutingModule = class Tab3PageRoutingModule {
};
Tab3PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab3PageRoutingModule);



/***/ }),

/***/ 3746:
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageModule": () => (/* binding */ Tab3PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 8592);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab3-routing.module */ 9818);









let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page }]),
            _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab3PageRoutingModule,
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page]
    })
], Tab3PageModule);



/***/ }),

/***/ 8592:
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3Page": () => (/* binding */ Tab3Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab3_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page.html?ngResource */ 9769);
/* harmony import */ var _tab3_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab3.page.scss?ngResource */ 7087);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _shared_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/http.service */ 8191);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ 598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8784);












let Tab3Page = class Tab3Page {
    constructor(popoverController, router, http, toastCtrl, route, _sanitizer, https) {
        this.popoverController = popoverController;
        this.router = router;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.route = route;
        this._sanitizer = _sanitizer;
        this.https = https;
        this.employees = [];
        this.selectedFile = null;
        this.OnlyIfCategorySelected = true;
        this.subcategory_tbid = "";
        this.category_tbid = " ";
        this.userdetails = localStorage.getItem("tbid");
        this.date = new Date().toISOString();
        this.Category = '';
        this.subcategory = '';
        this.productname = '';
        this.description = '';
        this.cost = '';
        this.weight = '';
        this.categoryName = '';
        this.subcategoryName = '';
        this.categoryList = [];
        this.subcategoryList = [];
        this.unitList = [
            "kg (Kilograms)",
            "g (Grams)",
            "pc (Piece)",
            'bag ',
            "dz (Dozen)",
            "box (Box)",
            "ltr",
            "ml (MilliLitre)",
            "m (Meter)",
            "cm (Centimeter)",
            "km (Kilometres)",
            "mg (MilliGrams)",
            "in (Inches)",
            "ft (Feet)",
            "lb (Pounds)",
        ];
        this.PopupModel = false;
        this.subcategoryPopupModel = false;
        this.subCategoryNotfound = false;
        route.params.subscribe(val => {
            this.sellerAllDetails();
            this.PopupModel = false;
            this.subcategoryPopupModel = false;
        });
        this.route.queryParams.subscribe(queryParams => {
            this.galleryImage = queryParams['selectedProductImageTbid'];
            if (this.galleryImage) {
                this.logoUploadCheck = true;
            }
        });
    }
    ngOnInit() {
    }
    //Naviagtions
    notification() {
        this.router.navigate(['/notification']);
    }
    //Upload Product Image
    MediaFileSelected(event) {
        this.selectedFile = event.target.files[0];
        console.log(this.selectedFile);
        var imageSize = event.target.files[0].size;
        if (imageSize > 5242880) {
            this.imageSize = true;
            this.logoUploadCheck = false;
        }
        else {
            this.imageSize = false;
            this.logoUploadCheck = true;
            this.productImagecheck = false;
        }
    }
    redirecttoGallery() {
        if (this.subcategory_tbid) {
            this.router.navigate(['/show-product-image'], { queryParams: { productname: this.subcategory_tbid } });
        }
        else {
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
                title: 'Kindly Select Subcategory'
            });
        }
    }
    //PopUpModel Show-Hide / True-False
    backToprivious() {
        this.PopupModel = false;
        this.Category = '';
    }
    ScBackToprivious() {
        this.subcategoryPopupModel = false;
        this.subcategory = '';
    }
    visibleCategoryPopup() {
        this.PopupModel = true;
    }
    visibleSubCategoryPopup() {
        this.subcategoryPopupModel = true;
    }
    popupModelsubcategory(data) {
        if (data.subcategory == "subcategoryPopup") {
            this.subcategoryPopupModel = true;
        }
        this.Subcategory_tbid_check = false;
        this.subcategory_tbid = data.subcategory;
    }
    //Navigate To MyProducts
    addproduct() {
        this.router.navigate(['/myproducts']);
    }
    //Create New Category
    createCategory() {
        const catData = {
            category_name: this.categoryName
        };
        this.http.postFormData('/create_category', catData).subscribe((response) => {
            console.log(response);
            if (response.success == "true") {
                this.Category = '';
                this.categoryName = '';
                this.getCategoryList();
                this.PopupModel = false;
            }
        }, (error) => {
            console.log(error);
        });
    }
    //FormData Inital Call
    makeTrue() {
        this.makeTrueCall = true;
    }
    //List SubCategory Based On Category
    popupModel(data) {
        const formdata = new FormData();
        formdata.append("category", data.category);
        console.log(data.category);
        this.category_tbid = data.category;
        this.category_tbid_check = false;
        this.OnlyIfCategorySelected = false;
        const obj = {
            category_id: this.category_tbid,
            store_category_id: this.store_category_id
        };
        this.http.post('/list_subcategory', obj).subscribe((response) => {
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
    //Create New Sub Category
    createSubcategory() {
        const subcatData = {
            // tbid: this.userdetails,
            category_id: this.category_tbid,
            subcategory_name: this.subcategoryName
        };
        this.http.postFormData('/create_subcategory', subcatData).subscribe((response) => {
            console.log(response);
            if (response.success == "true") {
                this.subcategoryName = '';
                this.subcategoryPopupModel = false;
                const obj = {
                    category_id: this.category_tbid,
                    store_category_id: this.store_category_id
                };
                this.http.post('/list_subcategory', obj).subscribe((response) => {
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
        });
    }
    //Get Category List
    getCategoryList() {
        var obj = {
            store_category_id: this.store_category_id
        };
        console.log(obj);
        this.http.post('/list_category', obj).subscribe((response) => {
            console.log(response.records);
            this.categoryList = response.records;
            console.log(this.categoryList);
        }, (error) => {
            console.log(error);
        });
    }
    //Make Error False
    ProductNAmeAvailableCheck() {
        this.productName_check = false;
    }
    UnitAvailableCheck() {
        this.unitAvailable = false;
    }
    CostAvailableCheck() {
        this.CostAvailable = false;
    }
    DescriptionAvailableCheck() {
        this.descrptionAvailable = false;
    }
    WeightAvailableCheck() {
        this.weightavailable = false;
    }
    //Create New Product
    onClickSubmit(data) {
        if (this.idproofcheck == false && this.addressproofcheck == false && this.store_categoryCheck == false) {
            if (this.makeTrueCall == true) {
                if (this.selectedFile) {
                    this.galleryImage = null;
                }
                var str = data.unit;
                var splittedUnit = str.split(" ", 1);
                console.log(splittedUnit);
                this.image = this.selectedFile;
                console.log(this.image);
                if (this.galleryImage) {
                    this.selectedFile = null;
                    const formdata = new FormData();
                    formdata.append("category_id", this.category_tbid);
                    formdata.append("subcategory_id", this.subcategory_tbid);
                    formdata.append("product_name", data.product_name);
                    formdata.append("cost", data.cost);
                    formdata.append("unit", splittedUnit);
                    formdata.append("description", data.description);
                    formdata.append("product_image_url", "http://localhost/24Hrs/images/seller/product/" + this.galleryImage);
                    formdata.append("weight", data.weight);
                    console.log('formData: ', formdata.getAll('category'), formdata.getAll('product_image'));
                    console.log(this.subcategory_tbid.length);
                    console.log(this.subcategory_tbid.length);
                    if (this.subcategory_tbid.length <= 0) {
                        this.Subcategory_tbid_check = true;
                        this.category_tbid_check = true;
                    }
                    else {
                        this.Subcategory_tbid_check = false;
                        this.category_tbid_check = false;
                    }
                    if (data.product_name.length <= 0) {
                        this.productName_check = true;
                    }
                    else {
                        this.productName_check = false;
                    }
                    if (data.cost.length <= 0) {
                        this.CostAvailable = true;
                    }
                    else {
                        this.CostAvailable = false;
                    }
                    if (data.unit.length <= 0) {
                        this.unitAvailable = true;
                    }
                    else {
                        this.unitAvailable = false;
                    }
                    if (data.description.length <= 0) {
                        this.descrptionAvailable = true;
                    }
                    else {
                        this.descrptionAvailable = false;
                    }
                    if (data.weight.length <= 0) {
                        this.weightavailable = true;
                    }
                    else {
                        this.weightavailable = false;
                    }
                    if (this.galleryImage == null) {
                        this.productImagecheck = true;
                    }
                    else {
                        this.productImagecheck = false;
                    }
                    if (this.Subcategory_tbid_check == false && this.productName_check == false && this.CostAvailable == false && this.unitAvailable == false && this.weightavailable == false
                        && this.productImagecheck == false) {
                        this.http.postFormData("/product_gallery_create", formdata).subscribe((response) => {
                            this.router.navigate(['/myproducts']);
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
                                    title: 'Product Added Successfully '
                                });
                                setTimeout(() => {
                                    location.reload();
                                }, 10);
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
                                title: 'Product Already Exist'
                            });
                        });
                    }
                }
                else {
                    const formdata = new FormData();
                    formdata.append("category_id", this.category_tbid);
                    formdata.append("subcategory_id", this.subcategory_tbid);
                    formdata.append("product_name", data.product_name);
                    formdata.append("cost", data.cost);
                    formdata.append("unit", splittedUnit);
                    formdata.append("description", data.description);
                    formdata.append("product_image", this.image);
                    formdata.append("weight", data.weight);
                    console.log('formData: ', formdata.getAll('category'), formdata.getAll('product_image'));
                    console.log(this.subcategory_tbid.length);
                    console.log(this.subcategory_tbid.length);
                    if (this.subcategory_tbid.length <= 0) {
                        this.Subcategory_tbid_check = true;
                        this.category_tbid_check = true;
                    }
                    else {
                        this.Subcategory_tbid_check = false;
                        this.category_tbid_check = false;
                    }
                    if (data.product_name.length <= 0) {
                        this.productName_check = true;
                    }
                    else {
                        this.productName_check = false;
                    }
                    if (data.cost.length <= 0) {
                        this.CostAvailable = true;
                    }
                    else {
                        this.CostAvailable = false;
                    }
                    if (data.unit.length <= 0) {
                        this.unitAvailable = true;
                    }
                    else {
                        this.unitAvailable = false;
                    }
                    if (data.description.length <= 0) {
                        this.descrptionAvailable = true;
                    }
                    else {
                        this.descrptionAvailable = false;
                    }
                    if (data.weight.length <= 0) {
                        this.weightavailable = true;
                    }
                    else {
                        this.weightavailable = false;
                    }
                    if (this.image == null) {
                        this.productImagecheck = true;
                    }
                    else {
                        this.productImagecheck = false;
                    }
                    if (this.Subcategory_tbid_check == false && this.productName_check == false && this.CostAvailable == false && this.unitAvailable == false && this.weightavailable == false
                        && this.productImagecheck == false) {
                        this.http.postFormData("/create_product", formdata).subscribe((response) => {
                            this.router.navigate(['/myproducts']);
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
                                    title: 'Product Added Successfully '
                                });
                                setTimeout(() => {
                                    location.reload();
                                }, 10);
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
                                title: 'Product Already Exist'
                            });
                        });
                    }
                }
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
    searchPage() {
        this.router.navigate(['/searchpage']);
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
Tab3Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.PopoverController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _shared_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.DomSanitizer },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient }
];
Tab3Page = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-tab3',
        template: _tab3_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab3_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab3Page);



/***/ }),

/***/ 7087:
/*!************************************************!*\
  !*** ./src/app/tab3/tab3.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = ".addproduct-btn {\n  border-radius: 5px !important;\n  width: 50%;\n  height: 35px;\n  background: var(--ion-color-secondary) !important;\n  border: 1px solid var(--ion-color-secondary);\n  margin: 5px;\n  color: var(--ion-color-light);\n}\n\n.welcomecard {\n  width: 93% !important;\n  margin: auto !important;\n  background: var(--ion-color-light) !important;\n  border-radius: 5px;\n  box-shadow: 2px 2px 2px 2px #d3d3d3;\n  -webkit-backdrop-filter: blur(8.2px) !important;\n          backdrop-filter: blur(8.2px) !important;\n  border: 1px solid rgba(255, 255, 255, 0.3) !important;\n}\n\nselect {\n  border: 1px solid #fff;\n  border-radius: 0 !important;\n  border-bottom: 2px solid var(--ion-color-primary) !important;\n}\n\ninput[type=text] {\n  font-size: 15px;\n  margin: 0 8px;\n  width: 92%;\n  box-sizing: border-box;\n  background-color: transparent;\n  border: none !important;\n  color: var(--ion-color-light);\n  border-bottom: 2px solid var(--ion-color-primary) !important;\n}\n\ninput[type=number] {\n  font-size: 15px;\n  margin: 0 5px;\n  width: 100%;\n  box-sizing: border-box;\n  background-color: transparent;\n  color: var(--ion-color-light);\n  border-bottom: 2px solid var(--ion-color-primary);\n}\n\ninput:focus {\n  outline: none !important;\n  border-bottom: 2px solid var(--ion-color-success) !important;\n}\n\nion-content {\n  background-color: var(--ion-color-light-shade) !important;\n  --offset-bottom: auto !important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n\ninput[type=file] {\n  display: none;\n}\n\n.unit-dropdown {\n  height: 85% !important;\n  margin: 5px 5px !important;\n  width: 15% !important;\n}\n\n.submit-btn {\n  border-radius: 5px !important;\n  width: 50%;\n  height: 35px;\n  background: var(--ion-color-secondary) !important;\n  border: 1px solid var(--ion-color-secondary);\n  margin: 5px;\n  color: var(--ion-color-light);\n}\n\n#card {\n  background: rgba(0, 0, 0, 0.18);\n  border-radius: 6px;\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n  -webkit-backdrop-filter: blur(50.2px);\n          backdrop-filter: blur(50.2px);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlEQUFBO0VBQ0EsNENBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSwrQ0FBQTtVQUFBLHVDQUFBO0VBQ0EscURBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0VBQ0EsMkJBQUE7RUFFQSw0REFBQTtBQUFGOztBQUlBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSw0REFBQTtBQURGOztBQUlBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsaURBQUE7QUFERjs7QUFJQTtFQUNFLHdCQUFBO0VBQ0EsNERBQUE7QUFERjs7QUFJQTtFQUNFLHlEQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFERjs7QUFHRTtFQUNFLGFBQUE7QUFESjs7QUFPQTtFQUNFLGFBQUE7QUFKRjs7QUFRQTtFQUNFLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtBQUxGOztBQVNBO0VBQ0UsNkJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlEQUFBO0VBQ0EsNENBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7QUFORjs7QUFVQTtFQUNFLCtCQUFBO0VBQ0Usa0JBQUE7RUFDQSx5Q0FBQTtFQUNBLHFDQUFBO1VBQUEsNkJBQUE7RUFDQSwwQ0FBQTtBQVBKIiwiZmlsZSI6InRhYjMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZHByb2R1Y3QtYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMzVweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSkgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIG1hcmdpbjogNXB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cblxuLndlbGNvbWVjYXJkIHtcbiAgd2lkdGg6IDkzJSAhaW1wb3J0YW50O1xuICBtYXJnaW46IGF1dG8gIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3cgICAgICA6IDJweCAycHggMnB4IDJweCAjZDNkM2QzO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOC4ycHgpICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKSAhaW1wb3J0YW50O1xufVxuXG5zZWxlY3Qge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XG5cbn1cblxuaW5wdXRbdHlwZT10ZXh0XSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luOiAwIDhweDtcbiAgd2lkdGg6IDkyJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAhaW1wb3J0YW50O1xufVxuXG5pbnB1dFt0eXBlPW51bWJlcl0ge1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbjogMCA1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKSAhaW1wb3J0YW50O1xuICAtLW9mZnNldC1ib3R0b206IGF1dG8gIWltcG9ydGFudDtcbiAgLS1vdmVyZmxvdzogaGlkZGVuO1xuICBvdmVyZmxvdzogYXV0bztcblxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG5cblxuaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5cbi51bml0LWRyb3Bkb3duIHtcbiAgaGVpZ2h0OiA4NSUgIWltcG9ydGFudDtcbiAgbWFyZ2luOiA1cHggNXB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxNSUgIWltcG9ydGFudDtcbn1cblxuXG4uc3VibWl0LWJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICBtYXJnaW46IDVweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5cblxuI2NhcmQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBib3gtc2hhZG93OiAwIDRweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNTAuMnB4KTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG59Il19 */";

/***/ }),

/***/ 9769:
/*!************************************************!*\
  !*** ./src/app/tab3/tab3.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<!------------ Header  ---------------->\n<ion-toolbar color=\"light\">\n  <ion-buttons slot=\"start\">\n    <ion-menu-button style=\"margin-top:15px;color:#121212\" autoHide=\"false\">\n      <svg width=\"34\" height=\"34\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M5 7H19\" stroke=\"#121212\" stroke-width=\"2\" stroke-linecap=\"round\" />\n        <path d=\"M5 12H15\" stroke=\"#121212\" stroke-width=\"2\" stroke-linecap=\"round\" />\n        <path d=\"M5 17H11\" stroke=\"#121212\" stroke-width=\"2\" stroke-linecap=\"round\" />\n      </svg>\n    </ion-menu-button>\n  </ion-buttons>\n\n  <div class=\"row\">\n    <div class=\"col-4\">\n      <h5 style=\"color:#121212;margin-top:10px\"><b></b></h5>\n    </div>\n    <div class=\"col-8 mt-2 mx-2\" style=\"text-align: right;width: 90%;\">\n      <svg (click)=\"notification()\" style=\"margin:3px;\" width=\"26\" height=\"26\" viewBox=\"0 0 24 24\" fill=\"none\"\n        xmlns=\"http://www.w3.org/2000/svg\">\n        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\n          d=\"M13.7942 3.29494C13.2296 3.10345 12.6258 3 12 3C9.1535 3 6.7622 5.14032 6.44786 7.96942L6.19605 10.2356L6.1896 10.2933C6.06065 11.417 5.69489 12.5005 5.11646 13.4725L5.08667 13.5222L4.50863 14.4856C3.98408 15.3599 3.7218 15.797 3.77842 16.1559C3.8161 16.3946 3.93899 16.6117 4.12435 16.7668C4.40292 17 4.9127 17 5.93224 17H18.0678C19.0873 17 19.5971 17 19.8757 16.7668C20.061 16.6117 20.1839 16.3946 20.2216 16.1559C20.2782 15.797 20.0159 15.3599 19.4914 14.4856L18.9134 13.5222L18.8836 13.4725C18.4273 12.7059 18.1034 11.8698 17.9236 10.9994C15.1974 10.9586 13 8.73592 13 6C13 5.00331 13.2916 4.07473 13.7942 3.29494ZM16.2741 4.98883C16.0999 5.28551 16 5.63109 16 6C16 6.94979 16.6621 7.74494 17.5499 7.94914C17.4205 6.82135 16.9608 5.80382 16.2741 4.98883Z\"\n          fill=\"black\" />\n        <path\n          d=\"M9 17C9 17.394 9.0776 17.7841 9.22836 18.1481C9.37913 18.512 9.6001 18.8427 9.87868 19.1213C10.1573 19.3999 10.488 19.6209 10.8519 19.7716C11.2159 19.9224 11.606 20 12 20C12.394 20 12.7841 19.9224 13.1481 19.7716C13.512 19.6209 13.8427 19.3999 14.1213 19.1213C14.3999 18.8427 14.6209 18.512 14.7716 18.1481C14.9224 17.7841 15 17.394 15 17L12 17H9Z\"\n          fill=\"black\" />\n        <circle cx=\"18\" cy=\"6\" r=\"2.5\" fill=\"#eb154b\" stroke=\"#eb154b\" />\n      </svg>\n\n      <!-- <ion-badge style=\"border-radius: 50%;margin-left: -14px ;color:#eb154b ;font-size: 12px;\" color=\"light\">10</ion-badge> -->\n\n    </div>\n  </div>\n</ion-toolbar>\n\n<ion-content class=\"bg-class mb-3\" [ngStyle]=\"{'opacity':subcategoryPopupModel ? '0.50' : '1'}\"\n  [ngStyle]=\"{'opacity':PopupModel ? '0.50' : '1'}\" [fullscreen]=\"true\">\n  <div class=\"mt-2 mb-2\">\n    <!--------  Add Product Form  -------->\n    <form #addproduct=\"ngForm\" (ngSubmit)=\"onClickSubmit(addproduct.value)\">\n      <div class=\"welcomecard mt-2\">\n        <div class=\"row mt-2\" style=\"padding: 10px;\">\n          <div class=\"col-12\">\n\n            <h5 class=\"name  ion-text-center\" ><b>Add Your Product</b></h5>\n            <div class=\"row\">\n              <div class=\"col-6\">\n                <p class=\"name mt-2 ion-text-left\" >Category :</p>\n              </div>\n              <div class=\"col-6\">\n\n                <ion-button style=\"width: 90%;\"  class=\"primarySmallBtn\" color=\"none\" (click)=\"visibleCategoryPopup()\">\n                  Add New +</ion-button>\n              </div>\n            </div>\n          </div>\n\n\n          <form #categoryselect=\"ngForm\" (change)=\"popupModel(categoryselect.value)\">\n            <div class=\"col-12 \">\n              <div class=\"select\">\n                <select ngModel name=\"category\">\n                  <option value=\"\" disabled selected>Select Your Category (e.g Grocery)</option>\n                  <option *ngFor=\"let cat of categoryList\" value=\"{{cat.tbid}}\">{{cat.category}}</option>\n                  <!-- <option style=\"background-color: #23d5ab;\" value=\"categoryPopup\" (click)=\"check()\">+ add new</option> -->\n                </select>\n              </div>\n            </div>\n          </form>\n\n\n\n          <p class=\"small text-danger text-center\" *ngIf=\"category_tbid_check\">Select Your Category</p>\n          <form #subcategoryselect=\"ngForm\" (change)=\"popupModelsubcategory(subcategoryselect.value)\">\n            <div class=\"col-12 mt-2\">\n              <div class=\"row\">\n                <div class=\"col-6\">\n                  <p class=\"name mt-2 ion-text-left\" >Sub Category :</p>\n                </div>\n                <div class=\"col-6\">\n\n                  <ion-button style=\"width: 90%;\" [disabled]=\"OnlyIfCategorySelected\" class=\"primarySmallBtn\" color=\"none\" (click)=\"visibleSubCategoryPopup()\">\n                    Add New +</ion-button>\n\n                </div>\n              </div>\n              <div class=\"select\">\n                <select ngModel name=\"subcategory\">\n                  <option value=\"\" disabled selected>Select Your Subcategory (e.g Fruits)</option>\n                  <option *ngFor=\"let subcat of subcategoryList\" value=\"{{subcat.tbid}}\">{{subcat.subsubcategory}}\n                  </option>\n                  <option disabled *ngIf=\"subCategoryNotfound\">No Sub Category Found</option>\n                  <!-- <option style=\"background-color:#23d5ab;\" value=\"subcategoryPopup\">+ add new</option> -->\n                </select>\n              </div>\n            </div>\n          </form>\n          <p class=\"small text-danger text-center\" *ngIf=\"Subcategory_tbid_check\">Select Your Subcategory</p>\n\n          <div class=\"col-6 mt-3\">\n            <p class=\"name\" >Product Name :</p>\n          </div>\n          <div class=\"col-6 mt-2\">\n            <input [(ngModel)]=\"productnameBind\" name=\"product_name\" type=\"text\" placeholder=\"\" id=\"offer\"\n              (keyup)=\"ProductNAmeAvailableCheck()\" style=\"color: black;\">\n          </div>\n          <p class=\"small text-danger text-center\" *ngIf=\"productName_check\">Enter the Product Name</p>\n\n          <div class=\"col-6\">\n            <p class=\"name\" >Cost:</p>\n          </div>\n          <div class=\"col-6\">\n            <input ngModel name=\"cost\" type=\"text\" id=\"offer\" (keyup)=\"CostAvailableCheck()\" style=\"color: black;\">\n          </div>\n          <p class=\"small text-danger text-center\" *ngIf=\"CostAvailable\">Enter The Cost</p>\n          <div class=\"col-12\">\n            <div class=\"row\">\n              <div class=\"col-12\">\n                <p class=\"name mt-1\" >Quantity :</p>\n              </div>\n              <div style=\"margin-top: -5%;\" class=\"col-6\">\n                <input ngModel name=\"weight\" type=\"text\" id=\"quantityTextBox\" (keyup)=\"WeightAvailableCheck()\" style=\"color: black;\">\n              </div>\n              <div  style=\"margin-top: -6%;\" class=\"col-6\">\n                <div class=\"select\">\n                  <select  ngModel name=\"unit\" placeholder=\"category\" (change)=\"UnitAvailableCheck()\" name=\"category\">\n                    <option value=\"\" disabled selected>unit </option>\n                    <option *ngFor=\"let item of unitList\" value=\"{{item}}\">{{item}}</option>\n                  </select>\n                  \n           \n                </div>\n              </div>\n              <p class=\"small text-danger text-center\" *ngIf=\"unitAvailable\">Choose anyone of the Unit</p>\n              <p class=\"small text-danger text-center\" *ngIf=\"weightavailable\">Enter The Weight Of The Product</p>\n\n            </div>\n          </div>\n          <div class=\"col-12 mt-4\">\n            <p>Product Image:</p>\n\n            <div class=\"row\">\n                <div class=\"col-9\">\n                  <ion-button style=\"width: 98%;\" [disabled]=\"otp == '' \" class=\"primarySmallOutlineBtn\" color=\"none\">\n                    <label class=\"btn btn-sm\" (change)=\"MediaFileSelected($event)\"\n                    >\n  \n                    <svg width=\"20\" height=\"16\" viewBox=\"0 0 11 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                      <path\n                        d=\"M9.42857 8.24995V9.74997C9.42857 10.1641 9.07672 10.5 8.64286 10.5H2.35714C1.92328 10.5 1.57143 10.1641 1.57143 9.74997V8.24995C1.57143 7.8358 1.21958 7.49994 0.785714 7.49994C0.351853 7.49994 0 7.8358 0 8.24995V9.74997C0 10.9926 1.05531 12 2.35714 12H8.64286C9.94469 12 11 10.9926 11 9.74997V8.24995C11 7.8358 10.6481 7.49994 10.2143 7.49994C9.78042 7.49994 9.42857 7.8351 9.42857 8.24995ZM4.94509 0.219569L1.80223 3.21961C1.49507 3.51282 1.49556 3.98743 1.80223 4.28017C2.10915 4.57314 2.60636 4.57314 2.91328 4.28017L4.71429 2.56159V7.49994C4.71429 7.91455 5.06565 8.24995 5.5 8.24995C5.93435 8.24995 6.28571 7.91455 6.28571 7.49994V2.56159L8.08746 4.28146C8.39437 4.57443 8.89158 4.57443 9.1985 4.28146C9.50542 3.98849 9.50542 3.51387 9.1985 3.2209L6.05565 0.220858C5.74799 -0.073404 5.25201 -0.073404 4.94509 0.219569Z\"\n                        fill=\"#EB154B\" />\n                    </svg>\n  \n  \n                    <input type=\"file\" class=\"\" name=\"image\" accept=\".jpeg,.jpg,.png\">\n                  </label></ion-button>\n                </div>\n                <div class=\"col-3\">\n                  <ion-button style=\"width: 98%;\" [disabled]=\"otp == '' \" class=\"primarySmallOutlineBtn\" color=\"none\" (click)=\"redirecttoGallery()\">\n                    <svg width=\"20\" height=\"16\"\n                    viewBox=\"0 0 34 27\" fill=\"none\">\n                    <path\n                      d=\"M31.1667 0H8.5C6.93517 0 5.66667 1.25918 5.66667 2.8125V17.8125C5.66667 19.3658 6.93517 20.625 8.5 20.625H31.1667C32.7315 20.625 34 19.3658 34 17.8125V2.8125C34 1.25918 32.7309 0 31.1667 0ZM13.1691 3.75C14.2127 3.75 15.058 4.58965 15.058 5.625C15.058 6.66035 14.267 7.5 13.1691 7.5C12.1261 7.5 11.2802 6.66035 11.2802 5.625C11.2802 4.58965 12.1774 3.75 13.1691 3.75ZM29.1656 16.3828C29.0003 16.6875 28.6816 16.875 28.3333 16.875H11.3333C10.9778 16.875 10.6527 16.677 10.4916 16.3623C10.3305 16.0478 10.3609 15.6703 10.5702 15.385L14.7022 9.75996C14.8809 9.51563 15.1642 9.375 15.4653 9.375C15.767 9.375 16.0506 9.51803 16.2285 9.7602L17.5478 11.5567L21.2512 6.04242C21.374 5.7832 21.6691 5.625 22.0351 5.625C22.3507 5.625 22.6454 5.78156 22.8207 6.04248L29.119 15.4175C29.3132 15.7031 29.3309 16.0723 29.1656 16.3828ZM26.9167 23.4375H7.08333C4.73993 23.4375 2.83333 21.5449 2.83333 19.2188V5.15625C2.83333 4.38281 2.19878 3.75 1.41667 3.75C0.634549 3.75 0 4.38281 0 5.15625V19.2188C0 23.0977 3.17747 26.25 7.08333 26.25H26.9167C27.6988 26.25 28.3333 25.6201 28.3333 24.8438C28.3333 24.0674 27.7017 23.4375 26.9167 23.4375Z\"\n                      fill=\"#EB154B\" />\n                  </svg></ion-button>\n                </div>\n              </div>\n          </div>\n\n          \n\n          <div style=\"margin-top: -7%;\" class=\"col-12 \">\n            <p class=\"small text-success text-center\" *ngIf=\"logoUploadCheck\">Uploaded Successfully</p>\n            <p class=\"small text-danger text-center\" *ngIf=\"imageSize\">Uploaded File Size Should Not Exceed More Than\n              5Mb\n            </p><!-- <button class=\"btn btn-primary\" (click)=\"uploadMedia()\">Submit</button> -->\n            <p class=\"small text-danger text-center\" *ngIf=\"productImagecheck\">Upload Product Image</p>\n            <span  class=\"validationtext small \"><br>(Upload Only jpeg or png & Ratio 1:1)</span>\n          </div>\n\n        </div>\n\n        <div class=\"form-group \">\n          <label  for=\"exampleFormControlTextarea1\">Product Description :</label>\n          <textarea maxlength=\"50\" ngModel name=\"description\"  class=\"form-control\"\n            id=\"exampleFormControlTextarea1\" rows=\"3\" (keyup)=\"DescriptionAvailableCheck()\"></textarea>\n        </div>\n        <p class=\"small text-danger text-center\" *ngIf=\"descrptionAvailable\">Enter The Description</p>\n        <div style=\"width:100%; text-align: center;\">\n          <ion-button (click)=\"makeTrue()\"  style=\"width: 90%;\"  class=\"secondarySmallBtn mb-4\" color=\"none\" >\n            Add Product </ion-button>\n        </div>\n      </div>\n    </form>\n  </div>\n</ion-content>\n\n\n\n\n\n\n\n<!--------  Add New Category  -------->\n<div class=\"card\" *ngIf=\"PopupModel\" style=\"margin-top: 25%;\" id=\"card\">\n  <div class=\"row\" style=\"margin:auto !important\" id=\"modal\">\n    <div class=\"col-10\">\n      <h5 class=\"name  ion-text-center\" style=\"color:#000000;font-size: 16px;\"><b>Enter your category name</b></h5>\n    </div>\n\n    <div class=\"col-2 ion-text-right \">\n\n      <svg (click)=\"backToprivious()\" style=\"margin-top:12px;cursor:pointer\" width=\"24\" height=\"27\" viewBox=\"0 0 24 27\"\n        fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <g filter=\"url(#filter0_d_1056_2574)\">\n          <path d=\"M18 6L6 18\" stroke=\"#EB154B\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n          <path d=\"M6 6L18 18\" stroke=\"#EB154B\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n        </g>\n        <defs>\n          <filter id=\"filter0_d_1056_2574\" x=\"-4\" y=\"0\" width=\"32\" height=\"32\" filterUnits=\"userSpaceOnUse\"\n            color-interpolation-filters=\"sRGB\">\n            <feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\" />\n            <feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\"\n              result=\"hardAlpha\" />\n            <feOffset dy=\"4\" />\n            <feGaussianBlur stdDeviation=\"2\" />\n            <feComposite in2=\"hardAlpha\" operator=\"out\" />\n            <feColorMatrix type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0\" />\n            <feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_1056_2574\" />\n            <feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_1056_2574\" result=\"shape\" />\n          </filter>\n        </defs>\n      </svg>\n    </div>\n\n    <div class=\"col-12 mx-3\">\n      <input style=\"text-align: center;border-bottom: 2px solid #EB154B !important;color:#000000;width:90%;margin: auto !important;\" [(ngModel)]=\"categoryName\"\n        type=\"text\" placeholder=\"\">\n    </div>\n    <div style=\"width:100%; text-align: center;\">\n      <ion-button (click)=\"createCategory()\"  style=\"width: 90%;\"  class=\"secondarySmallBtn mt-3 mb-4\" color=\"none\" >\n        Submit </ion-button>\n          </div>\n  </div>\n</div>\n\n\n<!--------  Add New Sub Category  -------->\n<div class=\"card\" *ngIf=\"subcategoryPopupModel\" style=\"margin-top: 25%;\" id=\"card\">\n  <div class=\"row\" style=\"margin:auto !important\" id=\"modal\">\n    <div class=\"col-10\">\n      <h6 class=\"name  ion-text-right\" style=\"color:#030303;font-size: 16px;\"><b>Enter your subcategory name</b></h6>\n    </div>\n\n    <div class=\"col-2 ion-text-center \">\n\n      <svg (click)=\"ScBackToprivious()\" style=\"margin-top:12px;cursor:pointer\" width=\"24\" height=\"27\"\n        viewBox=\"0 0 24 27\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <g filter=\"url(#filter0_d_1056_2574)\">\n          <path d=\"M18 6L6 18\" stroke=\"#EB154B\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n          <path d=\"M6 6L18 18\" stroke=\"#EB154B\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n        </g>\n        <defs>\n          <filter id=\"filter0_d_1056_2574\" x=\"-4\" y=\"0\" width=\"32\" height=\"32\" filterUnits=\"userSpaceOnUse\"\n            color-interpolation-filters=\"sRGB\">\n            <feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\" />\n            <feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\"\n              result=\"hardAlpha\" />\n            <feOffset dy=\"4\" />\n            <feGaussianBlur stdDeviation=\"2\" />\n            <feComposite in2=\"hardAlpha\" operator=\"out\" />\n            <feColorMatrix type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0\" />\n            <feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_1056_2574\" />\n            <feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_1056_2574\" result=\"shape\" />\n          </filter>\n        </defs>\n      </svg>\n    </div>\n\n    <div style=\"margin-top: -5%;\" class=\"col-12 \">\n      <input style=\"text-align: center;border-bottom: 2px solid #EB154B !important;color:#000000;width:97%;\" [(ngModel)]=\"subcategoryName\" type=\"text\" class=\"py-2\"\n        placeholder=\"\">\n    </div>\n    <div style=\"width:100%;\">\n      <ion-button (click)=\"createSubcategory()\"  style=\"width: 98%;\"  class=\"secondarySmallBtn mt-3 mb-4\" color=\"none\" >\n        Submit </ion-button>\n    </div>\n  </div>\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_tab3_tab3_module_ts.js.map