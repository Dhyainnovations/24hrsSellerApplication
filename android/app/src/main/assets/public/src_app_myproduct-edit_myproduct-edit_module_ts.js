"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_myproduct-edit_myproduct-edit_module_ts"],{

/***/ 7676:
/*!*****************************************************************!*\
  !*** ./src/app/myproduct-edit/myproduct-edit-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyproductEditPageRoutingModule": () => (/* binding */ MyproductEditPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _myproduct_edit_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myproduct-edit.page */ 7591);




const routes = [
    {
        path: '',
        component: _myproduct_edit_page__WEBPACK_IMPORTED_MODULE_0__.MyproductEditPage
    }
];
let MyproductEditPageRoutingModule = class MyproductEditPageRoutingModule {
};
MyproductEditPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MyproductEditPageRoutingModule);



/***/ }),

/***/ 6093:
/*!*********************************************************!*\
  !*** ./src/app/myproduct-edit/myproduct-edit.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyproductEditPageModule": () => (/* binding */ MyproductEditPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _myproduct_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myproduct-edit-routing.module */ 7676);
/* harmony import */ var _myproduct_edit_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myproduct-edit.page */ 7591);







let MyproductEditPageModule = class MyproductEditPageModule {
};
MyproductEditPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _myproduct_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyproductEditPageRoutingModule
        ],
        declarations: [_myproduct_edit_page__WEBPACK_IMPORTED_MODULE_1__.MyproductEditPage]
    })
], MyproductEditPageModule);



/***/ }),

/***/ 7591:
/*!*******************************************************!*\
  !*** ./src/app/myproduct-edit/myproduct-edit.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyproductEditPage": () => (/* binding */ MyproductEditPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _myproduct_edit_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myproduct-edit.page.html?ngResource */ 1478);
/* harmony import */ var _myproduct_edit_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myproduct-edit.page.scss?ngResource */ 8112);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _shared_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/http.service */ 8191);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ 598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);








let MyproductEditPage = class MyproductEditPage {
    constructor(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.userdetails = localStorage.getItem("tbid");
        this.subCategoryNotfound = false;
        this.Category_value = 1;
        this.Selectedunit = "";
        this.product_name = "";
        this.tbid = "";
        this.DisplayImage = "";
        this.tbid_value = "";
        this.displayreaddata = [];
        // readunit: [];
        this.showProducts = [];
        this.date = new Date().toISOString();
        this.Category = '';
        this.subcategory = '';
        this.productname = '';
        this.description = '';
        this.cost = '';
        this.showimage = '';
        this.showImageDisplay = false;
        this.categoryName = '';
        this.subcategoryName = '';
        this.categoryList = [];
        this.subcategoryList = [];
        this.PopupModel = false;
        this.subcategoryPopupModel = false;
        this.readunitvalue = "";
        this.unit = [
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
            "lb (Pounds)"
        ];
        this.selectedFile = null;
        this.isvisible = false;
        this.isVisibleButtons = true;
        this.addnewcategorypopup = false;
        this.addnewsubcategorypopup = false;
        this.productPage = true;
        this.unitList = ["box (Box)",
            "cm (Centimeter)",
            "dz (Dozen)",
            "ft (Feet)",
            "  g (Grams)",
            "in (Inches)",
            " kg (Kilograms)",
            "km (Kilometres)",
            "lb (Pounds)",
            "mg (Milli Grams)",
            "ml (Milli Litre)",
            " m (Meter)",
            "pc (Piece)",
            'bag ',
            "ltr"];
        route.params.subscribe(val => {
            this.sellerAllDetails();
            //this.getSubcategoryList();
            // this.getUnit();
            this.LoadReadData();
            this.appendReadData();
            console.log(this.subcategory);
            this.imageSize = false;
            this.logoUploadCheck = false;
            this.isVisibleButtons = true;
        });
    }
    LoadReadData() {
        this.route.queryParams.subscribe(params => {
            //console.log(params.product_name);
            this.product_name = params.product_name;
            this.tbid_value = params.tbid;
        });
    }
    ngOnInit() {
    }
    searchPage() {
        this.router.navigate(['/searchpage']);
    }
    popupModel(data) {
        const formdata = new FormData();
        formdata.append("category", data.category);
        this.category_tbid = data.category;
        this.Category = data.category;
        console.log(data.category);
        const c = data.category;
        this.subcategory = "";
        this.http.get('/read_one_category?c=' + c).subscribe((response) => {
            this.category_tbid = response.records.tbid;
            console.log(response.records.tbid);
            this.subcategory = "";
            this.PopupModel = false;
            this.productname = "";
            this.cost = "";
            this.weight = "";
            this.Selectedunit = "";
            this.description = "";
        }, (error) => {
            console.log(error);
        });
    }
    appendReadData() {
        const p = this.product_name;
        //console.log(p);
        this.http.get('/read_one_product?p=' + p).subscribe((response) => {
            this.description = response.records.description;
            this.Category = response.records.category;
            this.subcategory = response.records.subcategory;
            this.productname = response.records.product_name;
            this.cost = response.records.cost;
            this.DisplayImage = response.records.product_image;
            this.tbid = response.records.tbid;
            this.weight = response.records.weight;
            this.Selectedunit = response.records.unit;
            this.category_tbid = response.records.category_id;
            this.subcategory_tbid = response.records.subcategory_id;
            console.log(response.records);
            this.defaultSubCategoryList();
        }, (error) => {
            console.log(error);
        });
    }
    showselecteditems() {
        this.MakeTrue = true;
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
            this.productImagecheck = false;
            const reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = (_event) => {
                this.DisplayImage = reader.result;
            };
        }
        console.log(this.selectedFile);
        const files = event.target.files;
    }
    onClickSubmit(data) {
        if (this.MakeTrue == true) {
            var buttonName = document.getElementById("submit");
            console.log(buttonName);
            var Splittedunit = this.Selectedunit.split(" ", 1);
            this.image = this.selectedFile;
            if (this.image == null) {
                this.uploadImageFile = false;
                var ImageName = this.DisplayImage.replace('https://dhya.in/24Hrs/images/seller/product/', '');
                this.image = ImageName;
            }
            // console.log('formData: ', formdata.getAll('category'), formdata.getAll('product_image'));
            // var body = "category = " + data.category + "subcategory = " + data.subcategory + "product_name = " + data.product_name + "cost = " + data.cost + "unit = " + data.unit + "product_image = " + this.image + "description = " + data.description;
            // console.log(body);
            if (this.uploadImageFile != false) {
                const formdata = new FormData();
                formdata.append("tbid", this.tbid_value);
                formdata.append("category_id", this.category_tbid);
                formdata.append("subcategory_id", this.subcategory_tbid);
                formdata.append("product_name", data.product_name);
                formdata.append("cost", data.cost);
                formdata.append("unit", Splittedunit);
                formdata.append("description", data.description);
                formdata.append("product_image", this.image);
                formdata.append("weight", data.weight);
                this.http.postFormData("/update_product", formdata).subscribe((response) => {
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
                        title: 'Updated successfully'
                    });
                    this.router.navigate(['/myproducts']);
                }, (error) => {
                    if (error.error.message == "Please select a image file to upload. Data is incomplete.") {
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
                            title: 'Kindly Upload Image Once Again To Update Product'
                        });
                    }
                    if (error.error.message == "Unable to Update Product. Data is incomplete.") {
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
                });
            }
            else {
                const formdata = new FormData();
                formdata.append("tbid", this.tbid_value);
                formdata.append("category_id", this.category_tbid);
                formdata.append("subcategory_id", this.subcategory_tbid);
                formdata.append("product_name", data.product_name);
                formdata.append("cost", data.cost);
                formdata.append("unit", Splittedunit);
                formdata.append("description", data.description);
                formdata.append("product_image_url", this.image);
                formdata.append("weight", data.weight);
                this.http.postFormData("/products_gallery", formdata).subscribe((response) => {
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
                        title: 'Updated successfully'
                    });
                    this.router.navigate(['/myproducts']);
                }, (error) => {
                    if (error.error.message == "Please select a image file to upload. Data is incomplete.") {
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
                            title: 'Kindly Upload Image Once Again To Update Product'
                        });
                    }
                    if (error.error.message == "Unable to Update Product. Data is incomplete.") {
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
                });
            }
        }
    }
    backToprivious() {
        this.PopupModel = false;
    }
    deleteProduct() {
        const obj = {
            tbid: this.tbid_value
        };
        console.log(obj);
        this.http.postFormData('/delete_product', obj).subscribe((response) => {
            //console.log(response);
            if (response.success == "true") {
                const o = this.productname;
                console.log(o);
                this.http.get('/read_one_offer?o=' + o).subscribe((response) => {
                    var OfferTbidValue = response.records.tbid;
                    const obj = {
                        tbid: OfferTbidValue
                    };
                    this.http.postFormData('/delete_offer', obj).subscribe((response) => {
                        console.log(response);
                    }, (error) => {
                        console.log(error);
                    });
                }, (error) => {
                    console.log(error);
                });
                this.http.postFormData('/delete_offer', obj).subscribe((response) => {
                    console.log(response);
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
                    title: 'Deleted successfully'
                });
                this.router.navigate(['/myproducts']);
            }
        }, (error) => {
            //console.log(error);
        });
    }
    NavigatetoNotification() {
        this.router.navigate(['/notification']);
    }
    ScBackToprivious() {
        this.subcategoryPopupModel = false;
    }
    addproduct() {
        this.router.navigate(['/myproducts']);
    }
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
                this.subcategory = "";
                this.PopupModel = false;
                this.productname = "";
                this.cost = "";
                this.weight = "";
                this.Selectedunit = "";
                this.description = "";
            }
        }, (error) => {
            console.log(error);
        });
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
    backToMyproducts() {
        this.router.navigate(['/myproducts']);
    }
    hidepopup() {
        this.isvisible = false;
    }
    hideaddnewcategorypopup() {
        this.isVisibleButtons = true;
        this.addnewcategorypopup = false;
    }
    showaddnewcategorypopup() {
        this.isVisibleButtons = false;
        this.addnewcategorypopup = true;
    }
    showaddnewsubcategorypopup() {
        this.isVisibleButtons = false;
        this.addnewsubcategorypopup = true;
    }
    hideaddnewsubcategorypopup() {
        this.isVisibleButtons = true;
        this.addnewsubcategorypopup = false;
    }
    defaultSubCategoryList() {
        const obj = {
            category_id: this.category_tbid,
            store_category_id: this.store_category_id
        };
        console.log(obj);
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
    categorysubmit() {
        const obj = {
            category_id: this.category_tbid,
            store_category_id: this.store_category_id
        };
        console.log(obj);
        this.http.postFormData('/list_subcategory', obj).subscribe((response) => {
            if (response.success == "true") {
                this.isVisibleButtons = true;
            }
            console.log(response.records);
            this.subcategoryList = response.records;
            console.log(this.subcategoryList);
            this.subCategoryNotfound = false;
        }, (error) => {
            console.log(error);
            this.subCategoryNotfound = true;
            this.subcategoryList = [];
        });
        this.addnewcategorypopup = false;
        this.isVisibleButtons = true;
    }
    subcategorysubmit(value) {
        console.log(value.subcategory);
        this.subcategory = value.subcategory;
        const s = value.subcategory;
        this.http.get('/read_one_subcategory?s=' + s).subscribe((response) => {
            if (response.success == "true") {
                this.isVisibleButtons = true;
            }
            this.subcategory_tbid = response.records.tbid;
        }, (error) => {
            console.log(error);
        });
        this.addnewsubcategorypopup = false;
    }
    visibleCategoryPopup() {
        this.PopupModel = true;
    }
    visibleSubCategoryPopup() {
        this.subcategoryPopupModel = true;
    }
    createSubcategory() {
        const subcatData = {
            category_id: this.category_tbid,
            subcategory_name: this.subcategoryName
        };
        this.http.postFormData('/create_subcategory', subcatData).subscribe((response) => {
            console.log(response);
            if (response.success == "true") {
                console.log("test");
                this.subcategoryName = '';
                this.subcategoryPopupModel = false;
                const obj = {
                    category_id: this.category_tbid,
                    store_category_id: this.store_category_id
                };
                console.log(obj);
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
        });
    }
    onSubmit(buttonType) {
        if (buttonType === "Next") {
            console.log(buttonType);
        }
        if (buttonType === "Previous") {
            console.log(buttonType);
        }
    }
    Changeunit() {
        this.isVisibleButtons = false;
        this.selectUnitpopup = true;
    }
    hideChangeunit() {
        this.isVisibleButtons = true;
        this.selectUnitpopup = false;
    }
    unitSelect() {
        this.Selectedunit = this.unitSelected;
        console.log(this.unitSelected);
    }
    updateChangeunit() {
        this.isVisibleButtons = true;
        this.selectUnitpopup = false;
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
MyproductEditPage.ctorParameters = () => [
    { type: _shared_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute }
];
MyproductEditPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-myproduct-edit',
        template: _myproduct_edit_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_myproduct_edit_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MyproductEditPage);



/***/ }),

/***/ 8112:
/*!********************************************************************!*\
  !*** ./src/app/myproduct-edit/myproduct-edit.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "input[type=text] {\n  font-size: 15px;\n  margin: 0 8px;\n  width: 92%;\n  box-sizing: border-box;\n  background-color: transparent;\n  border: none !important;\n  border-bottom: 2px solid var(--ion-color-primary) !important;\n}\n\n.add-new-btn {\n  background-color: var(--ion-color-primary) !important;\n  border: 1px solid #EB154B;\n  color: #121212 !important;\n}\n\n.signin-btn {\n  background-color: var(--ion-color-secondary);\n  color: var(--ion-color-light);\n  border: 1px solid var(--ion-color-secondary);\n}\n\ninput:focus {\n  outline: none !important;\n  border-bottom: 2px solid var(--ion-color-success) !important;\n}\n\n#card {\n  z-index: 1 !important;\n  background: rgba(0, 0, 0, 0.18);\n  border: none !important;\n  height: 32% !important;\n  top: 32%;\n  box-shadow: none !important;\n  border-radius: 5px;\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n  backdrop-filter: blur(13.1px);\n  -webkit-backdrop-filter: blur(13.1px);\n}\n\n.card {\n  background: var(--ion-color-secondary);\n  border: 1px solid #fff;\n  border-radius: 8px;\n  width: 96% !important;\n  margin: 5px;\n  box-shadow: 2px 2px 2px 2px #ccc !important;\n  border: 1px solid #fff;\n}\n\n.delete-btn {\n  background-color: #121212 !important;\n  color: var(--ion-color-light);\n  text-align: center;\n}\n\n.update-btn {\n  background-color: #EB154B;\n  color: var(--ion-color-light);\n  text-align: center;\n}\n\n.btn {\n  margin: 10px 0 !important;\n}\n\n.title {\n  color: var(--ion-color-secondary);\n}\n\nion-content {\n  background-color: var(--ion-color-light-shade) !important;\n  --offset-bottom: auto !important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n\n.pop-up-card {\n  box-shadow: none !important;\n  position: absolute;\n  top: 10%;\n  z-index: 1;\n  right: 3px;\n  border-radius: 10px;\n}\n\n#unit-popupCard {\n  /* From https://css.glass */\n  /* From https://css.glass */\n  background: rgba(0, 0, 0, 0.18);\n  border-radius: 6px;\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n  -webkit-backdrop-filter: blur(10.2px);\n          backdrop-filter: blur(10.2px);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  height: 30%;\n  margin-top: 50% !important;\n  border: none !important;\n  color: var(--ion-color-light);\n}\n\nbutton {\n  box-shadow: rgba(50, 50, 93, 0.068) 0px 2px 5px -1px, rgba(0, 0, 0, 0.068) 0px 1px 3px -1px;\n}\n\n#subcategory-popupCard {\n  /* From https://css.glass */\n  /* From https://css.glass */\n  background: rgba(0, 0, 0, 0.18);\n  border-radius: 6px;\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n  -webkit-backdrop-filter: blur(10.2px);\n          backdrop-filter: blur(10.2px);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  height: 30%;\n  margin-top: 50% !important;\n  border: none !important;\n  color: var(--ion-color-light);\n}\n\n#category-popupCard {\n  /* From https://css.glass */\n  /* From https://css.glass */\n  background: rgba(0, 0, 0, 0.18);\n  border-radius: 6px;\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n  -webkit-backdrop-filter: blur(10.2px);\n          backdrop-filter: blur(10.2px);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  height: 30%;\n  margin-top: 50% !important;\n  border: none !important;\n  color: var(--ion-color-light);\n}\n\ninput[type=file] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15cHJvZHVjdC1lZGl0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtFQUNBLDREQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxREFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFDQTtFQUNFLDRDQUFBO0VBQ0EsNkJBQUE7RUFDQSw0Q0FBQTtBQUVGOztBQUNBO0VBQ0Usd0JBQUE7RUFDQSw0REFBQTtBQUVGOztBQUFBO0VBQ0UscUJBQUE7RUFDQSwrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQ0FBQTtBQUdGOztBQURBO0VBQ0Usc0NBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBR0EsMkNBQUE7RUFDQSxzQkFBQTtBQUlGOztBQURBO0VBQ0Usb0NBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0FBSUY7O0FBREE7RUFDRSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7QUFJRjs7QUFEQTtFQUNFLHlCQUFBO0FBSUY7O0FBRkE7RUFDRSxpQ0FBQTtBQUtGOztBQUhBO0VBQ0UseURBQUE7RUFLQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUVGOztBQUFFO0VBQ0UsYUFBQTtBQUVKOztBQUVBO0VBQ0UsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0VBQ0EscUNBQUE7VUFBQSw2QkFBQTtFQUNBLDBDQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtBQUNBOztBQUVBO0VBQ0UsMkZBQUE7QUFDRjs7QUFFQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7RUFDQSxxQ0FBQTtVQUFBLDZCQUFBO0VBQ0EsMENBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0FBQ0E7O0FBR0E7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0VBQ0EscUNBQUE7VUFBQSw2QkFBQTtFQUNBLDBDQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtBQUFBOztBQUdBO0VBQ0UsYUFBQTtBQUFGIiwiZmlsZSI6Im15cHJvZHVjdC1lZGl0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0W3R5cGU9dGV4dF0ge1xuICBmb250LXNpemUgICAgICAgOiAxNXB4O1xuICBtYXJnaW4gICAgICAgICAgOiAwIDhweDtcbiAgd2lkdGggICAgICAgICAgIDogOTIlO1xuICBib3gtc2l6aW5nICAgICAgOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOm5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbSAgIDogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSFpbXBvcnRhbnQ7XG59XG5cbi5hZGQtbmV3LWJ0bntcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjoxcHggc29saWQgI0VCMTU0QjtcbiAgY29sb3I6IzEyMTIxMiAhaW1wb3J0YW50O1xufVxuLnNpZ25pbi1idG57XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICBjb2xvcjp2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBib3JkZXI6MXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuXG5pbnB1dDpmb2N1cyB7XG4gIG91dGxpbmUgICA6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbSAgIDogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKSAhaW1wb3J0YW50O1xufVxuI2NhcmR7XG4gIHotaW5kZXg6IDEgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjE4KTtcbiAgYm9yZGVyOiAgbm9uZSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDMyJSAhaW1wb3J0YW50O1xuICB0b3A6MzIlO1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMCA0cHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMy4xcHgpO1xuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMy4xcHgpO1xufVxuLmNhcmQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgYm9yZGVyICAgICAgICAgICAgOiAxcHggc29saWQgI2ZmZjtcbiAgYm9yZGVyLXJhZGl1cyAgICAgOiA4cHg7XG4gIHdpZHRoICAgICAgICAgICAgIDogOTYlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbiAgICAgICAgICAgIDogNXB4O1xuICAtbW96LWJveC1zaGFkb3cgICA6IDAgMCAzcHggI2NjYztcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgM3B4ICNjY2M7XG4gIGJveC1zaGFkb3cgICAgICAgIDogMnB4IDJweCAycHggMnB4ICNjY2MgIWltcG9ydGFudDtcbiAgYm9yZGVyICAgICAgICAgICAgOiAxcHggc29saWQgI2ZmZjtcbn1cblxuLmRlbGV0ZS1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyICFpbXBvcnRhbnQ7XG4gIGNvbG9yICAgICAgICAgICA6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIHRleHQtYWxpZ24gICAgICA6IGNlbnRlcjtcbn1cblxuLnVwZGF0ZS1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUIxNTRCO1xuICBjb2xvciAgICAgICAgICAgOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICB0ZXh0LWFsaWduICAgICAgOiBjZW50ZXI7XG59XG5cbi5idG4ge1xuICBtYXJnaW46IDEwcHggMCAhaW1wb3J0YW50O1xufVxuLnRpdGxle1xuICBjb2xvcjp2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KVxufVxuaW9uLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpICFpbXBvcnRhbnQ7XG4gIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIGRhcmt0dXJxdW9pc2VcbiAgLy8gMCUsICNkMWYyZTdcbiAgLy8gMTAwJSkgIWltcG9ydGFudDtcblxuICAtLW9mZnNldC1ib3R0b206IGF1dG8gIWltcG9ydGFudDtcbiAgLS1vdmVyZmxvdyAgICAgOiBoaWRkZW47XG4gIG92ZXJmbG93ICAgICAgIDogYXV0bztcblxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4ucG9wLXVwLWNhcmQge1xuICBib3gtc2hhZG93ICAgOiBub25lICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uICAgICA6IGFic29sdXRlO1xuICB0b3AgICAgICAgICAgOiAxMCU7XG4gIHotaW5kZXggICAgICA6IDE7XG4gIHJpZ2h0ICAgICAgICA6IDNweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuI3VuaXQtcG9wdXBDYXJkIHtcbi8qIEZyb20gaHR0cHM6Ly9jc3MuZ2xhc3MgKi9cbi8qIEZyb20gaHR0cHM6Ly9jc3MuZ2xhc3MgKi9cbmJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xOCk7XG5ib3JkZXItcmFkaXVzOiA2cHg7XG5ib3gtc2hhZG93OiAwIDRweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbmJhY2tkcm9wLWZpbHRlcjogYmx1cigxMC4ycHgpO1xuYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuaGVpZ2h0OjMwJTtcbm1hcmdpbi10b3A6IDUwJSAhaW1wb3J0YW50O1xuYm9yZGVyOm5vbmUgIWltcG9ydGFudDtcbmNvbG9yOnZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5cbmJ1dHRvbiB7XG4gIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4wNjgpIDBweCAycHggNXB4IC0xcHgsIHJnYmEoMCwgMCwgMCwgMC4wNjgpIDBweCAxcHggM3B4IC0xcHg7XG59XG5cbiNzdWJjYXRlZ29yeS1wb3B1cENhcmQge1xuLyogRnJvbSBodHRwczovL2Nzcy5nbGFzcyAqL1xuLyogRnJvbSBodHRwczovL2Nzcy5nbGFzcyAqL1xuYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjE4KTtcbmJvcmRlci1yYWRpdXM6IDZweDtcbmJveC1zaGFkb3c6IDAgNHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwLjJweCk7XG5ib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG5oZWlnaHQ6MzAlO1xubWFyZ2luLXRvcDogNTAlICFpbXBvcnRhbnQ7XG5ib3JkZXI6bm9uZSAhaW1wb3J0YW50O1xuY29sb3I6dmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcblxufVxuXG4jY2F0ZWdvcnktcG9wdXBDYXJke1xuLyogRnJvbSBodHRwczovL2Nzcy5nbGFzcyAqL1xuLyogRnJvbSBodHRwczovL2Nzcy5nbGFzcyAqL1xuYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjE4KTtcbmJvcmRlci1yYWRpdXM6IDZweDtcbmJveC1zaGFkb3c6IDAgNHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwLjJweCk7XG5ib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG5oZWlnaHQ6MzAlO1xubWFyZ2luLXRvcDogNTAlICFpbXBvcnRhbnQ7XG5ib3JkZXI6bm9uZSAhaW1wb3J0YW50O1xuY29sb3I6dmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcblxufVxuaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xuICBkaXNwbGF5OiBub25lO1xufSAiXX0= */";

/***/ }),

/***/ 1478:
/*!********************************************************************!*\
  !*** ./src/app/myproduct-edit/myproduct-edit.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "\n\n<ion-content [ngStyle]=\"{'opacity':selectUnitpopup ? '0.52' : '1' }\"\n  [ngStyle]=\"{'opacity':addnewcategorypopup ? '0.52' : '1' }\"\n  [ngStyle]=\"{'opacity':addnewsubcategorypopup ? '0.52' : '1' }\" [fullscreen]=\"true\">\n  <!----------------Update Product Form---------------->\n  <form #addproduct=\"ngForm\" (ngSubmit)=\"onClickSubmit(addproduct.value)\">\n    <div class=\"container mt-4 mb-3\">\n      <div class=\"signin-div mt-2\">\n        <div class=\"row mt-2 \" style=\"padding: 10px\">\n          <h5 class=\"title ion-text-left\">\n            <b>\n              <svg (click)=\"backToMyproducts()\" style=\"margin-top: -8px; cursor: pointer; margin: 5px\"\n                xmlns=\"http://www.w3.org/2000/svg\" width=\"22\" height=\"20\" fill=\"#EB154B\" class=\"bi bi-arrow-left\"\n                viewBox=\"0 0 16 16\">\n                <path fill-rule=\"evenodd\"\n                  d=\"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z\" />\n              </svg>\n              Edit Your Product</b>\n          </h5>\n\n          <p>Product Image:</p>\n\n          <div class=\"col-12 text-center\">\n            <img style=\"border-radius:4px\" height=\"95px\" width=\"95px\" src=\"{{DisplayImage}}\" alt=\"\" />\n            <!-- <img height=\"95px\" width=\"95px\" src=\"{{showimage.image}}\" alt=\"\" (click)=\"showPopup()\"\n              *ngIf=\"showImageDisplay\" /> -->\n          </div>\n\n          <div class=\"col-12 text-center mt-3\">\n\n            <ion-button style=\"width: 50%;\" class=\"primarySmallOutlineBtn\" color=\"none\">\n              <label (change)=\"MediaFileSelected($event)\">\n                <svg width=\"25\" height=\"25\" viewBox=\"0 0 34 27\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                  <path\n                    d=\"M31.1667 0H8.5C6.93517 0 5.66667 1.25918 5.66667 2.8125V17.8125C5.66667 19.3658 6.93517 20.625 8.5 20.625H31.1667C32.7315 20.625 34 19.3658 34 17.8125V2.8125C34 1.25918 32.7309 0 31.1667 0ZM13.1691 3.75C14.2127 3.75 15.058 4.58965 15.058 5.625C15.058 6.66035 14.267 7.5 13.1691 7.5C12.1261 7.5 11.2802 6.66035 11.2802 5.625C11.2802 4.58965 12.1774 3.75 13.1691 3.75ZM29.1656 16.3828C29.0003 16.6875 28.6816 16.875 28.3333 16.875H11.3333C10.9778 16.875 10.6527 16.677 10.4916 16.3623C10.3305 16.0478 10.3609 15.6703 10.5702 15.385L14.7022 9.75996C14.8809 9.51562 15.1642 9.375 15.4653 9.375C15.767 9.375 16.0506 9.51803 16.2285 9.7602L17.5478 11.5567L21.2512 6.04242C21.374 5.7832 21.6691 5.625 22.0351 5.625C22.3507 5.625 22.6454 5.78156 22.8207 6.04248L29.119 15.4175C29.3132 15.7031 29.3309 16.0723 29.1656 16.3828ZM26.9167 23.4375H7.08333C4.73993 23.4375 2.83333 21.5449 2.83333 19.2188V5.15625C2.83333 4.38281 2.19878 3.75 1.41667 3.75C0.634549 3.75 0 4.38281 0 5.15625V19.2188C0 23.0977 3.17747 26.25 7.08333 26.25H26.9167C27.6988 26.25 28.3333 25.6201 28.3333 24.8438C28.3333 24.0674 27.7017 23.4375 26.9167 23.4375Z\"\n                    fill=\"#EB154B\" />\n                </svg>\n\n\n                <input type=\"file\" class=\"btn\" name=\"image\" accept=\".jpeg,.jpg,.png\" />\n              </label>\n            </ion-button>\n\n\n            <p class=\"small text-success text-center pt-3\" *ngIf=\"logoUploadCheck\">Uploaded Successfully</p>\n            <p class=\"small text-danger text-center\" *ngIf=\"imageSize\">Uploaded File Size Should Not Exceed More Than\n              5Mb\n            </p>\n          </div>\n\n\n          <div class=\"col-10 mt-4\">\n            <p class=\"name\">Category :</p>\n          </div>\n          <div class=\"col-2 mt-4\">\n            <svg *ngIf=\"isVisibleButtons\" (click)=\"showaddnewcategorypopup()\"   width=\"15\" height=\"15\" fill=\"currentColor\" class=\"bi bi-pencil-fill\" viewBox=\"0 0 16 16\">\n              <path d=\"M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z\"/>\n            </svg>\n\n           \n\n          </div>\n          <div class=\"col-12\">\n            <input [(ngModel)]=\"Category\" type=\"text\" name=\"category\" disabled />\n          </div>\n\n          <div class=\"col-10 mt-4\">\n            <p class=\"name\">Sub Category :</p>\n          </div>\n          <div class=\"col-2 mt-4\">\n\n            <svg *ngIf=\"isVisibleButtons\" (click)=\"showaddnewsubcategorypopup()\"   width=\"15\" height=\"15\" fill=\"currentColor\" class=\"bi bi-pencil-fill\" viewBox=\"0 0 16 16\">\n              <path d=\"M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z\"/>\n            </svg>\n\n         \n\n\n          </div>\n          <div class=\"col-12\">\n            <input [(ngModel)]=\"subcategory\" type=\"text\" name=\"subcategory\" disabled />\n          </div>\n\n          <div class=\"col-6 mt-5\">\n            <p class=\"name\">Product Name :</p>\n          </div>\n          <div class=\"col-6 mt-5\">\n            <input [(ngModel)]=\"productname\" type=\"text\" id=\"offer\" name=\"product_name\" />\n          </div>\n\n          <div class=\"col-6\">\n            <p class=\"name\">Cost:</p>\n          </div>\n          <div class=\"col-6\">\n            <input [(ngModel)]=\"cost\" type=\"text\" id=\"offer\" name=\"cost\" />\n          </div>\n\n          <div class=\"col-6\">\n            <p class=\"name\">Weight:</p>\n          </div>\n          <div class=\"col-6\">\n            <input [(ngModel)]=\"weight\" type=\"text\" id=\"offer\" name=\"weight\" />\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-3 mt-1\">\n              <p class=\"name\">Unit :</p>\n            </div>\n\n            <div class=\"col-7 \">\n              <input [(ngModel)]=\"Selectedunit\" type=\"text\" name=\"unit\" disabled />\n            </div>\n\n            <div class=\"col-2 ion-text-right mt-1\">\n\n              <svg *ngIf=\"isVisibleButtons\" (click)=\"Changeunit()\"   width=\"15\" height=\"15\" fill=\"currentColor\" class=\"bi bi-pencil-fill\" viewBox=\"0 0 16 16\">\n                <path d=\"M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z\"/>\n              </svg>\n\n              \n\n\n            </div>\n\n          </div>\n\n\n\n\n\n\n        </div>\n        <div class=\"form-group\">\n          <label for=\"exampleFormControlTextarea1\">Product Description :</label>\n          <textarea *ngIf=\"isVisibleButtons\" [(ngModel)]=\"description\" class=\"form-control\"\n            id=\"exampleFormControlTextarea1\" rows=\"3\" name=\"description\"></textarea>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-6 ion-text-center\">\n\n            <ion-button *ngIf=\"isVisibleButtons\" style=\"width: 90%;\" class=\"secondarySmallBtn mb-3\" color=\"none\"\n              (click)=\"deleteProduct()\">\n              Delete</ion-button>\n          </div>\n          <div class=\"col-6 ion-text-center\">\n\n            <ion-button *ngIf=\"isVisibleButtons\" style=\"width: 90%;\" class=\"primarySmallBtn mb-3\" color=\"none\"\n              (click)=\"showselecteditems()\">\n              Post</ion-button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </form>\n</ion-content>\n\n<div *ngIf=\"isvisible\" class=\"container\">\n  <div class=\"card pop-up-card ion-text-center\">\n    <div class=\"row ion-text-center\">\n      <ion-icon name=\"chevron-back-outline\" style=\"font-size: larger; position: absolute; right: 120px; top: 10px\"\n        class=\"ion-text-left\" (click)=\"hidepopup()\"></ion-icon>\n      <p class=\"mt-1\">Select Any One Item</p>\n      <div *ngFor=\"let items of showProducts; let i = index\" class=\"mt-1 mb-2\">\n        <img src=\"{{items.image}}\" height=\"90px\" width=\"90px\" class=\"m-1\" style=\"border-radius: 5px\" />\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n<!----------------Category Change---------------->\n<div *ngIf=\"addnewcategorypopup\" class=\"container\">\n  <div class=\"card pop-up-card ion-text-center\" id=\"category-popupCard\">\n\n    <div style=\"margin-top: 2px;\" class=\"title\">\n      <div class=\"row\">\n        <div class=\"col-9 ion-text-left mt-2\">\n          <h4 style=\"margin-left: 8%;\"><b>Change Category</b></h4>\n        </div>\n        <div class=\"col-3\">\n          <div class=\"ion-margin-top ion-text-center\">\n            <svg (click)=\"hideaddnewcategorypopup()\" style=\"margin-top:15% !important;margin:4px;cursor:pointer\" width=\"24\" height=\"27\"\n              viewBox=\"0 0 24 27\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n              <g filter=\"url(#filter0_d_1056_2574)\">\n                <path d=\"M18 6L6 18\" stroke=\"#EB154B\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n                <path d=\"M6 6L18 18\" stroke=\"#EB154B\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n              </g>\n              <defs>\n                <filter id=\"filter0_d_1056_2574\" x=\"-4\" y=\"0\" width=\"32\" height=\"32\" filterUnits=\"userSpaceOnUse\"\n                  color-interpolation-filters=\"sRGB\">\n                  <feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\" />\n                  <feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\"\n                    result=\"hardAlpha\" />\n                  <feOffset dy=\"4\" />\n                  <feGaussianBlur stdDeviation=\"2\" />\n                  <feComposite in2=\"hardAlpha\" operator=\"out\" />\n                  <feColorMatrix type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0\" />\n                  <feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_1056_2574\" />\n                  <feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_1056_2574\" result=\"shape\" />\n                </filter>\n              </defs>\n            </svg>\n\n\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row ion-text-center\">\n      <form #categoryselect=\"ngForm\" (change)=\"popupModel(categoryselect.value)\">\n        <div class=\"col-12 mt-3\">\n          <div style=\"width: 90%;margin: auto !important;\" class=\"select\">\n            <select ngModel name=\"category\">\n              <option value=\"\" disabled selected>Select Your Category</option>\n              <option *ngFor=\"let cat of categoryList;\" value=\"{{cat.category}}\">\n                {{cat.category}}\n              </option>\n              <!-- <option style=\"background-color: #23d5ab;\" value=\"1\">+ add new</option> -->\n            </select>\n          </div>\n        </div>\n\n        <div class=\"row mt-4\">\n          <div class=\"col-6 \">\n            <ion-button style=\"width: 80%;\" class=\"secondarySmallBtn\" color=\"none\" (click)=\"visibleCategoryPopup()\">\n              Add New </ion-button>\n\n          </div>\n\n          <div class=\"col-6 \">\n            <ion-button style=\"width: 80%;\" class=\"primarySmallBtn\" color=\"none\" (click)=\"categorysubmit()\">\n              Update Category</ion-button>\n\n          </div>\n        </div>\n\n\n      </form>\n    </div>\n  </div>\n</div>\n\n\n\n<!----------------SubCategory Change---------------->\n<div *ngIf=\"addnewsubcategorypopup\" class=\"container\">\n  <div class=\"card pop-up-card ion-text-center\" id=\"subcategory-popupCard\">\n\n\n    <div style=\"margin-top: 2px;\" class=\"title\">\n      <div class=\"row\">\n        <div class=\"col-10 ion-text-left\">\n          <h4><b>Change Sub Category</b></h4>\n        </div>\n        <div class=\"col-2\">\n          <div class=\"ion-margin-top ion-text-left\">\n\n            <svg (click)=\"hideaddnewsubcategorypopup()\" style=\"margin-top:15%;cursor:pointer\" width=\"24\" height=\"27\"\n            viewBox=\"0 0 24 27\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <g filter=\"url(#filter0_d_1056_2574)\">\n              <path d=\"M18 6L6 18\" stroke=\"#EB154B\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n              <path d=\"M6 6L18 18\" stroke=\"#EB154B\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n            </g>\n            <defs>\n              <filter id=\"filter0_d_1056_2574\" x=\"-4\" y=\"0\" width=\"32\" height=\"32\" filterUnits=\"userSpaceOnUse\"\n                color-interpolation-filters=\"sRGB\">\n                <feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\" />\n                <feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\"\n                  result=\"hardAlpha\" />\n                <feOffset dy=\"4\" />\n                <feGaussianBlur stdDeviation=\"2\" />\n                <feComposite in2=\"hardAlpha\" operator=\"out\" />\n                <feColorMatrix type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0\" />\n                <feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_1056_2574\" />\n                <feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_1056_2574\" result=\"shape\" />\n              </filter>\n            </defs>\n          </svg>\n\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n    \n\n\n    <form #subcategoryselect=\"ngForm\" (ngSubmit)=\"subcategorysubmit(subcategoryselect.value)\">\n      <div class=\"col-12 mt-4\">\n        <div style=\"width: 90%;margin: auto !important;\" class=\"select\">\n          <select ngModel name=\"subcategory\">\n            <option value=\"\" disabled selected>\n              Select Your Sub Category\n            </option>\n            <option *ngFor=\"let subcat of subcategoryList; let i = index\" value=\"{{subcat.subsubcategory}}\">\n              {{subcat.subsubcategory}}\n            </option>\n            <option disabled *ngIf=\"subCategoryNotfound\">\n              No Sub Category Found\n            </option>\n            <!-- <option style=\"background-color: #23d5ab;\" value=\"1\">+ add new</option> -->\n          </select>\n        </div>\n      </div>\n\n\n      <div class=\"row mt-4\">\n        <div class=\"col-6 \">\n          <ion-button style=\"width: 80%;\" class=\"secondarySmallBtn\" color=\"none\" (click)=\"visibleSubCategoryPopup()\">\n            Add New </ion-button>\n\n        </div>\n\n        <div class=\"col-6 \">\n          <ion-button type=\"submit\"  style=\"width: 80%;\" class=\"primarySmallBtn\" color=\"none\" >\n            Update Category</ion-button>\n\n        </div>\n      </div>\n\n    </form>\n  </div>\n</div>\n\n\n<!----------------Add New Category---------------->\n<div class=\"card\" *ngIf=\"PopupModel\" id=\"card\">\n  <div class=\"row\" style=\"margin: 5%\">\n    <div class=\"col-12 ion-text-left\">\n      <svg (click)=\"backToprivious()\" style=\"color: black; margin-top: -8px; cursor: pointer\"\n        xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"#EB154B\" class=\"bi bi-arrow-left\"\n        viewBox=\"0 0 16 16\">\n        <path fill-rule=\"evenodd\"\n          d=\"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z\" />\n      </svg>\n    </div>\n    <div class=\"col-12\">\n      <h5 class=\"name ion-text-center\">\n        <b>Enter your category name</b>\n      </h5>\n    </div>\n    <div class=\"col-12\">\n      <input style=\"width: 93%;\" [(ngModel)]=\"categoryName\" type=\"text\" class=\"input-popup\" />\n    </div>\n    <div style=\"width: 100%; text-align: center\">\n\n      <ion-button style=\"width: 96%;\"  class=\"secondarySmallBtn mt-4\" color=\"none\" (click)=\"createCategory()\">\n        Submit</ion-button>\n    </div>\n  </div>\n</div>\n\n\n\n<!----------------Add New Sub Category---------------->\n<div class=\"card\" *ngIf=\"subcategoryPopupModel\" id=\"card\">\n  <div class=\"row\" style=\"margin: 5%\" id=\"modal\">\n    <div class=\"col-12 ion-text-left\">\n      <svg (click)=\"ScBackToprivious()\" style=\" margin-top: -8px; cursor: pointer\" xmlns=\"http://www.w3.org/2000/svg\"\n        width=\"16\" height=\"16\" fill=\"#EB154B\" class=\"bi bi-arrow-left\" viewBox=\"0 0 16 16\">\n        <path fill-rule=\"evenodd\"\n          d=\"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z\" />\n      </svg>\n\n     \n\n\n    </div>\n\n    <div class=\"col-12\">\n      <h5 class=\"title ion-text-center\">\n        <b>Enter your sub category name</b>\n      </h5>\n    </div>\n    <div class=\"col-12\">\n      <input [(ngModel)]=\"subcategoryName\" type=\"text\" />\n    </div>\n    <div style=\"width: 100%; text-align: center\">\n      <button type=\"button\" (click)=\"createSubcategory()\" class=\"btn signin-btn mt-2\">\n        Submit\n      </button>\n    </div>\n  </div>\n</div>\n\n\n\n<!---------------- unit card popup ---------------->\n<div *ngIf=\"selectUnitpopup\" class=\"container\">\n  <div class=\"card pop-up-card ion-text-center\" id=\"unit-popupCard\" style=\"margin-top: -2px\">\n    <div style=\"margin-top: 2px;\" class=\"title\">\n      <div class=\"row\">\n        <div class=\"col-10 ion-text-left\">\n          <h4 style=\"margin-left: 8%;\"><b>Update unit</b></h4>\n        </div>\n        <div class=\"col-2\">\n          <div class=\"ion-margin-top ion-text-left\">\n\n            <svg (click)=\"hideChangeunit()\" style=\"margin-top:-8px;cursor:pointer\" width=\"24\" height=\"27\"\n          viewBox=\"0 0 24 27\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <g filter=\"url(#filter0_d_1056_2574)\">\n            <path d=\"M18 6L6 18\" stroke=\"#EB154B\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n            <path d=\"M6 6L18 18\" stroke=\"#EB154B\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n          </g>\n          <defs>\n            <filter id=\"filter0_d_1056_2574\" x=\"-4\" y=\"0\" width=\"32\" height=\"32\" filterUnits=\"userSpaceOnUse\"\n              color-interpolation-filters=\"sRGB\">\n              <feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\" />\n              <feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\"\n                result=\"hardAlpha\" />\n              <feOffset dy=\"4\" />\n              <feGaussianBlur stdDeviation=\"2\" />\n              <feComposite in2=\"hardAlpha\" operator=\"out\" />\n              <feColorMatrix type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0\" />\n              <feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_1056_2574\" />\n              <feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_1056_2574\" result=\"shape\" />\n            </filter>\n          </defs>\n        </svg>\n\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n    <!----------------Unit Selection---------------->\n    <div class=\"col-12 mt-2\">\n      <div style=\"width: 90%;margin: auto !important;\" class=\"select mt-3\">\n        <select name=\"unit\" class=\"unit-dropdown p-1\" (change)=\"unitSelect()\" [(ngModel)]=\"unitSelected\">\n          <option value=\"\" disabled selected>unit</option>\n          <option *ngFor=\"let item of unitList\" value=\"{{item}}\" class=\"unit-dropdown-options\">\n            {{item}}\n          </option>\n        </select>\n      </div>\n\n      <ion-button style=\"width: 90%;\" type=\"submit\" class=\"secondarySmallBtn mt-4\" color=\"none\" (click)=\"updateChangeunit()\">\n        Update Unit\n      </ion-button>\n\n    </div>\n  </div>\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_myproduct-edit_myproduct-edit_module_ts.js.map