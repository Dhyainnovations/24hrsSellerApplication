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
        this.unit = ["box (Box)",
            "cm (Centimeter)",
            "dz (Dozen)",
            "ft (Feet)",
            "g (Grams)",
            "in (Inches)",
            "kg (Kilograms)",
            "km (Kilometres)",
            "lb (Pounds)",
            "mg (MilliGrams)",
            "ml (MilliLitre)",
            "m (Meter)",
            "pc (Piece)",
            'bag',
            "ltr"];
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
    }
    onClickSubmit(data) {
        if (this.MakeTrue == true) {
            var buttonName = document.getElementById("submit");
            console.log(buttonName);
            var Splittedunit = this.Selectedunit.split(" ", 1);
            this.image = this.selectedFile;
            if (this.image == null) {
                var ImageName = this.DisplayImage.replace('https://dhya.in/24Hrs/images/seller/product/', '');
                this.image = ImageName;
            }
            console.log(this.image);
            console.log(this.DisplayImage);
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
            // console.log('formData: ', formdata.getAll('category'), formdata.getAll('product_image'));
            // var body = "category = " + data.category + "subcategory = " + data.subcategory + "product_name = " + data.product_name + "cost = " + data.cost + "unit = " + data.unit + "product_image = " + this.image + "description = " + data.description;
            // console.log(body);
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
            category: this.category_tbid,
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

module.exports = "input[type=text] {\n  font-size: 15px;\n  margin: 0 8px;\n  width: 92%;\n  box-sizing: border-box;\n  background-color: transparent;\n  border: none !important;\n  border-bottom: 2px solid #EB154B !important;\n}\n\n.add-new-btn {\n  background-color: #EB154B !important;\n  border: 1px solid #EB154B;\n  color: #121212 !important;\n}\n\n.signin-btn {\n  background-color: #fff;\n  color: #0D0D0D;\n  border: 1px solid #fff;\n}\n\ninput:focus {\n  outline: none !important;\n  border-bottom: 2px solid #23d5ab !important;\n}\n\n#card {\n  z-index: 1 !important;\n  background: #191818;\n  border: none !important;\n  height: 36% !important;\n  top: 30%;\n  box-shadow: none !important;\n  border-radius: 5px;\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n  backdrop-filter: blur(13.1px);\n  -webkit-backdrop-filter: blur(13.1px);\n}\n\n.card {\n  background: #191818;\n  border: 1px solid #fff;\n  border-radius: 8px;\n  width: 96% !important;\n  margin: 5px;\n  box-shadow: 2px 2px 2px 2px #ccc !important;\n  border: 1px solid #fff;\n}\n\n.delete-btn {\n  background-color: #121212 !important;\n  color: #fff;\n  text-align: center;\n}\n\n.update-btn {\n  background-color: #EB154B;\n  color: #fff;\n  text-align: center;\n}\n\n.btn {\n  margin: 10px 0 !important;\n}\n\n.title {\n  margin-top: 80px;\n  color: #fff;\n}\n\nion-content {\n  background-color: #F4F7FA !important;\n  --offset-bottom: auto !important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n\n.pop-up-card {\n  box-shadow: none !important;\n  position: absolute;\n  top: 10%;\n  z-index: 1;\n  right: 3px;\n  border-radius: 10px;\n}\n\n#unit-popupCard {\n  /* From https://css.glass */\n  /* From https://css.glass */\n  background: #191818;\n  border-radius: 4px;\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n  backdrop-filter: blur(13.1px);\n  -webkit-backdrop-filter: blur(13.1px);\n  height: 25%;\n  margin-top: 50% !important;\n  border: none !important;\n}\n\nbutton {\n  box-shadow: rgba(50, 50, 93, 0.068) 0px 2px 5px -1px, rgba(0, 0, 0, 0.068) 0px 1px 3px -1px;\n}\n\n#subcategory-popupCard {\n  /* From https://css.glass */\n  /* From https://css.glass */\n  background: #191818;\n  border-radius: 4px;\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n  backdrop-filter: blur(13.1px);\n  -webkit-backdrop-filter: blur(13.1px);\n  height: 35%;\n  margin-top: 50%;\n  border: none !important;\n}\n\n#category-popupCard {\n  /* From https://css.glass */\n  /* From https://css.glass */\n  background: #191818;\n  border-radius: 4px;\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n  backdrop-filter: blur(13.1px);\n  -webkit-backdrop-filter: blur(13.1px);\n  height: 35%;\n  margin-top: 50%;\n  border: none !important;\n}\n\ninput[type=file] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15cHJvZHVjdC1lZGl0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtFQUNBLDJDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFDQTtFQUNFLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FBRUY7O0FBQ0E7RUFDRSx3QkFBQTtFQUNBLDJDQUFBO0FBRUY7O0FBQUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7RUFDQSw2QkFBQTtFQUNBLHFDQUFBO0FBR0Y7O0FBREE7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFHQSwyQ0FBQTtFQUNBLHNCQUFBO0FBSUY7O0FBREE7RUFDRSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUlGOztBQURBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFJRjs7QUFEQTtFQUNFLHlCQUFBO0FBSUY7O0FBRkE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUFLRjs7QUFIQTtFQUNFLG9DQUFBO0VBS0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFFRjs7QUFBRTtFQUNFLGFBQUE7QUFFSjs7QUFFQTtFQUNFLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtFQUNBLDZCQUFBO0VBQ0EscUNBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtBQUNBOztBQUVBO0VBQ0UsMkZBQUE7QUFDRjs7QUFFQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7RUFDQSw2QkFBQTtFQUNBLHFDQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQUNBOztBQUdBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtFQUNBLDZCQUFBO0VBQ0EscUNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FBQUE7O0FBR0E7RUFDRSxhQUFBO0FBQUYiLCJmaWxlIjoibXlwcm9kdWN0LWVkaXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgZm9udC1zaXplICAgICAgIDogMTVweDtcclxuICBtYXJnaW4gICAgICAgICAgOiAwIDhweDtcclxuICB3aWR0aCAgICAgICAgICAgOiA5MiU7XHJcbiAgYm94LXNpemluZyAgICAgIDogYm9yZGVyLWJveDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6bm9uZSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1ib3R0b20gICA6IDJweCBzb2xpZCAjRUIxNTRCICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hZGQtbmV3LWJ0bntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUIxNTRCICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOjFweCBzb2xpZCAjRUIxNTRCO1xyXG4gIGNvbG9yOiMxMjEyMTIgIWltcG9ydGFudDtcclxufVxyXG4uc2lnbmluLWJ0bntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGNvbG9yOiMwRDBEMEQ7XHJcbiAgYm9yZGVyOjFweCBzb2xpZCAjZmZmO1xyXG59XHJcblxyXG5pbnB1dDpmb2N1cyB7XHJcbiAgb3V0bGluZSAgIDogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1ib3R0b20gICA6IDJweCBzb2xpZCAjMjNkNWFiICFpbXBvcnRhbnQ7XHJcbn1cclxuI2NhcmR7XHJcbiAgei1pbmRleDogMSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQ6ICMxOTE4MTg7XHJcbiAgYm9yZGVyOiAgbm9uZSAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMzYlICFpbXBvcnRhbnQ7XHJcbiAgdG9wOjMwJTtcclxuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMy4xcHgpO1xyXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEzLjFweCk7XHJcbn1cclxuLmNhcmQge1xyXG4gIGJhY2tncm91bmQ6ICMxOTE4MTg7XHJcbiAgYm9yZGVyICAgICAgICAgICAgOiAxcHggc29saWQgI2ZmZjtcclxuICBib3JkZXItcmFkaXVzICAgICA6IDhweDtcclxuICB3aWR0aCAgICAgICAgICAgICA6IDk2JSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbiAgICAgICAgICAgIDogNXB4O1xyXG4gIC1tb3otYm94LXNoYWRvdyAgIDogMCAwIDNweCAjY2NjO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDNweCAjY2NjO1xyXG4gIGJveC1zaGFkb3cgICAgICAgIDogMnB4IDJweCAycHggMnB4ICNjY2MgIWltcG9ydGFudDtcclxuICBib3JkZXIgICAgICAgICAgICA6IDFweCBzb2xpZCAjZmZmO1xyXG59XHJcblxyXG4uZGVsZXRlLWJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMiAhaW1wb3J0YW50O1xyXG4gIGNvbG9yICAgICAgICAgICA6ICNmZmY7XHJcbiAgdGV4dC1hbGlnbiAgICAgIDogY2VudGVyO1xyXG59XHJcblxyXG4udXBkYXRlLWJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VCMTU0QjtcclxuICBjb2xvciAgICAgICAgICAgOiAjZmZmO1xyXG4gIHRleHQtYWxpZ24gICAgICA6IGNlbnRlcjtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgbWFyZ2luOiAxMHB4IDAgIWltcG9ydGFudDtcclxufVxyXG4udGl0bGV7XHJcbiAgbWFyZ2luLXRvcDo4MHB4O1xyXG4gIGNvbG9yOiNmZmZcclxufVxyXG5pb24tY29udGVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjdGQSAhaW1wb3J0YW50O1xyXG4gIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIGRhcmt0dXJxdW9pc2VcclxuICAvLyAwJSwgI2QxZjJlN1xyXG4gIC8vIDEwMCUpICFpbXBvcnRhbnQ7XHJcblxyXG4gIC0tb2Zmc2V0LWJvdHRvbTogYXV0byAhaW1wb3J0YW50O1xyXG4gIC0tb3ZlcmZsb3cgICAgIDogaGlkZGVuO1xyXG4gIG92ZXJmbG93ICAgICAgIDogYXV0bztcclxuXHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi5wb3AtdXAtY2FyZCB7XHJcbiAgYm94LXNoYWRvdyAgIDogbm9uZSAhaW1wb3J0YW50O1xyXG4gIHBvc2l0aW9uICAgICA6IGFic29sdXRlO1xyXG4gIHRvcCAgICAgICAgICA6IDEwJTtcclxuICB6LWluZGV4ICAgICAgOiAxO1xyXG4gIHJpZ2h0ICAgICAgICA6IDNweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4jdW5pdC1wb3B1cENhcmQge1xyXG4vKiBGcm9tIGh0dHBzOi8vY3NzLmdsYXNzICovXHJcbi8qIEZyb20gaHR0cHM6Ly9jc3MuZ2xhc3MgKi9cclxuYmFja2dyb3VuZDogIzE5MTgxODtcclxuYm9yZGVyLXJhZGl1czogNHB4O1xyXG5ib3gtc2hhZG93OiAwIDRweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEzLjFweCk7XHJcbi13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEzLjFweCk7XHJcbmhlaWdodDoyNSU7XHJcbm1hcmdpbi10b3A6IDUwJSAhaW1wb3J0YW50O1xyXG5ib3JkZXI6bm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4wNjgpIDBweCAycHggNXB4IC0xcHgsIHJnYmEoMCwgMCwgMCwgMC4wNjgpIDBweCAxcHggM3B4IC0xcHg7XHJcbn1cclxuXHJcbiNzdWJjYXRlZ29yeS1wb3B1cENhcmQge1xyXG4vKiBGcm9tIGh0dHBzOi8vY3NzLmdsYXNzICovXHJcbi8qIEZyb20gaHR0cHM6Ly9jc3MuZ2xhc3MgKi9cclxuYmFja2dyb3VuZDogIzE5MTgxODtcclxuYm9yZGVyLXJhZGl1czogNHB4O1xyXG5ib3gtc2hhZG93OiAwIDRweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEzLjFweCk7XHJcbi13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEzLjFweCk7XHJcbmhlaWdodDozNSU7XHJcbm1hcmdpbi10b3A6IDUwJTtcclxuYm9yZGVyOm5vbmUgIWltcG9ydGFudDtcclxuXHJcbn1cclxuXHJcbiNjYXRlZ29yeS1wb3B1cENhcmR7XHJcbi8qIEZyb20gaHR0cHM6Ly9jc3MuZ2xhc3MgKi9cclxuLyogRnJvbSBodHRwczovL2Nzcy5nbGFzcyAqL1xyXG5iYWNrZ3JvdW5kOiAjMTkxODE4O1xyXG5ib3JkZXItcmFkaXVzOiA0cHg7XHJcbmJveC1zaGFkb3c6IDAgNHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG5iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTMuMXB4KTtcclxuLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTMuMXB4KTtcclxuaGVpZ2h0OjM1JTtcclxubWFyZ2luLXRvcDogNTAlO1xyXG5ib3JkZXI6bm9uZSAhaW1wb3J0YW50O1xyXG5cclxufVxyXG5pbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufSAiXX0= */";

/***/ }),

/***/ 1478:
/*!********************************************************************!*\
  !*** ./src/app/myproduct-edit/myproduct-edit.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<!------------ Header  ---------------->\r\n<ion-toolbar color=\"light\">\r\n  <ion-buttons slot=\"start\">\r\n    <ion-menu-button style=\"margin-top:15px;color:#121212\" autoHide=\"false\">\r\n      <svg width=\"34\" height=\"34\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n        <path d=\"M5 7H19\" stroke=\"#121212\" stroke-width=\"2\" stroke-linecap=\"round\" />\r\n        <path d=\"M5 12H15\" stroke=\"#121212\" stroke-width=\"2\" stroke-linecap=\"round\" />\r\n        <path d=\"M5 17H11\" stroke=\"#121212\" stroke-width=\"2\" stroke-linecap=\"round\" />\r\n      </svg>\r\n    </ion-menu-button>\r\n  </ion-buttons>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-4\">\r\n      <h5 style=\"color:#121212;margin-top:10px\"><b></b></h5>\r\n    </div>\r\n    <div class=\"col-8 mt-2 mx-2\" style=\"text-align: right;width: 90%;\">\r\n      <svg (click)=\"notification()\" style=\"margin:3px;\" width=\"26\" height=\"26\" viewBox=\"0 0 24 24\" fill=\"none\"\r\n        xmlns=\"http://www.w3.org/2000/svg\">\r\n        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n          d=\"M13.7942 3.29494C13.2296 3.10345 12.6258 3 12 3C9.1535 3 6.7622 5.14032 6.44786 7.96942L6.19605 10.2356L6.1896 10.2933C6.06065 11.417 5.69489 12.5005 5.11646 13.4725L5.08667 13.5222L4.50863 14.4856C3.98408 15.3599 3.7218 15.797 3.77842 16.1559C3.8161 16.3946 3.93899 16.6117 4.12435 16.7668C4.40292 17 4.9127 17 5.93224 17H18.0678C19.0873 17 19.5971 17 19.8757 16.7668C20.061 16.6117 20.1839 16.3946 20.2216 16.1559C20.2782 15.797 20.0159 15.3599 19.4914 14.4856L18.9134 13.5222L18.8836 13.4725C18.4273 12.7059 18.1034 11.8698 17.9236 10.9994C15.1974 10.9586 13 8.73592 13 6C13 5.00331 13.2916 4.07473 13.7942 3.29494ZM16.2741 4.98883C16.0999 5.28551 16 5.63109 16 6C16 6.94979 16.6621 7.74494 17.5499 7.94914C17.4205 6.82135 16.9608 5.80382 16.2741 4.98883Z\"\r\n          fill=\"black\" />\r\n        <path\r\n          d=\"M9 17C9 17.394 9.0776 17.7841 9.22836 18.1481C9.37913 18.512 9.6001 18.8427 9.87868 19.1213C10.1573 19.3999 10.488 19.6209 10.8519 19.7716C11.2159 19.9224 11.606 20 12 20C12.394 20 12.7841 19.9224 13.1481 19.7716C13.512 19.6209 13.8427 19.3999 14.1213 19.1213C14.3999 18.8427 14.6209 18.512 14.7716 18.1481C14.9224 17.7841 15 17.394 15 17L12 17H9Z\"\r\n          fill=\"black\" />\r\n        <circle cx=\"18\" cy=\"6\" r=\"2.5\" fill=\"#eb154b\" stroke=\"#eb154b\" />\r\n      </svg>\r\n\r\n      <!-- <ion-badge style=\"border-radius: 50%;margin-left: -14px ;color:#eb154b ;font-size: 12px;\" color=\"light\">10</ion-badge> -->\r\n\r\n    </div>\r\n  </div>\r\n</ion-toolbar>\r\n\r\n<ion-content [ngStyle]=\"{'opacity':selectUnitpopup ? '0.52' : '1' }\"\r\n  [ngStyle]=\"{'opacity':addnewcategorypopup ? '0.52' : '1' }\"\r\n  [ngStyle]=\"{'opacity':addnewsubcategorypopup ? '0.52' : '1' }\" [fullscreen]=\"true\">\r\n  <!----------------Update Product Form---------------->\r\n  <form #addproduct=\"ngForm\" (ngSubmit)=\"onClickSubmit(addproduct.value)\">\r\n    <div class=\"container mb-3\">\r\n      <div class=\"signin-div mt-2\">\r\n        <div class=\"row mt-2 \" style=\"padding: 10px\">\r\n          <h5 class=\"name ion-text-left\" style=\"color: #676767\">\r\n            <b>\r\n              <svg (click)=\"backToMyproducts()\" style=\"margin-top: -8px; cursor: pointer; margin: 5px\"\r\n                xmlns=\"http://www.w3.org/2000/svg\" width=\"22\" height=\"20\" fill=\"#EB154B\" class=\"bi bi-arrow-left\"\r\n                viewBox=\"0 0 16 16\">\r\n                <path fill-rule=\"evenodd\"\r\n                  d=\"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z\" />\r\n              </svg>\r\n              Edit Your Product</b>\r\n          </h5>\r\n\r\n          <p>Product Image:</p>\r\n\r\n          <div class=\"col-12 text-center\">\r\n            <img style=\"border-radius:4px\" height=\"95px\" width=\"95px\" src=\"{{DisplayImage}}\" alt=\"\" />\r\n            <!-- <img height=\"95px\" width=\"95px\" src=\"{{showimage.image}}\" alt=\"\" (click)=\"showPopup()\"\r\n              *ngIf=\"showImageDisplay\" /> -->\r\n          </div>\r\n\r\n          <div class=\"col-12 text-center mt-3\">\r\n            <label (change)=\"MediaFileSelected($event)\" style=\"\r\n                    border: 1px solid rgb(202, 202, 202);\r\n                    width: 60%;\r\n                    margin-left: 10px;\r\n                    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;padding: 5px;border-radius: 5px;cursor: pointer;\r\n                  \">\r\n              <svg width=\"30\" height=\"25\" viewBox=\"0 0 34 27\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                <path\r\n                  d=\"M31.1667 0H8.5C6.93517 0 5.66667 1.25918 5.66667 2.8125V17.8125C5.66667 19.3658 6.93517 20.625 8.5 20.625H31.1667C32.7315 20.625 34 19.3658 34 17.8125V2.8125C34 1.25918 32.7309 0 31.1667 0ZM13.1691 3.75C14.2127 3.75 15.058 4.58965 15.058 5.625C15.058 6.66035 14.267 7.5 13.1691 7.5C12.1261 7.5 11.2802 6.66035 11.2802 5.625C11.2802 4.58965 12.1774 3.75 13.1691 3.75ZM29.1656 16.3828C29.0003 16.6875 28.6816 16.875 28.3333 16.875H11.3333C10.9778 16.875 10.6527 16.677 10.4916 16.3623C10.3305 16.0478 10.3609 15.6703 10.5702 15.385L14.7022 9.75996C14.8809 9.51562 15.1642 9.375 15.4653 9.375C15.767 9.375 16.0506 9.51803 16.2285 9.7602L17.5478 11.5567L21.2512 6.04242C21.374 5.7832 21.6691 5.625 22.0351 5.625C22.3507 5.625 22.6454 5.78156 22.8207 6.04248L29.119 15.4175C29.3132 15.7031 29.3309 16.0723 29.1656 16.3828ZM26.9167 23.4375H7.08333C4.73993 23.4375 2.83333 21.5449 2.83333 19.2188V5.15625C2.83333 4.38281 2.19878 3.75 1.41667 3.75C0.634549 3.75 0 4.38281 0 5.15625V19.2188C0 23.0977 3.17747 26.25 7.08333 26.25H26.9167C27.6988 26.25 28.3333 25.6201 28.3333 24.8438C28.3333 24.0674 27.7017 23.4375 26.9167 23.4375Z\"\r\n                  fill=\"black\" />\r\n              </svg>\r\n\r\n              Upload\r\n              <input type=\"file\" class=\"btn\" name=\"image\" accept=\".jpeg,.jpg,.png\" />\r\n            </label>\r\n          </div>\r\n\r\n\r\n          <div class=\"col-10 mt-4\">\r\n            <p class=\"name\" style=\"color: #404040\">Category :</p>\r\n          </div>\r\n          <div class=\"col-2 mt-4\">\r\n            <svg *ngIf=\"isVisibleButtons\" (click)=\"showaddnewcategorypopup()\" style=\"margin: 5px;\" width=\"22\"\r\n              height=\"18\" fill=\"currentColor\" class=\"bi bi-pencil-square\" viewBox=\"0 0 16 16\">\r\n              <path\r\n                d=\"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z\" />\r\n              <path fill-rule=\"evenodd\"\r\n                d=\"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z\" />\r\n            </svg>\r\n\r\n          </div>\r\n          <div class=\"col-12\">\r\n            <input [(ngModel)]=\"Category\" type=\"text\" name=\"category\" disabled />\r\n          </div>\r\n\r\n          <div class=\"col-10 mt-4\">\r\n            <p class=\"name\" style=\"color: #404040\">Sub Category :</p>\r\n          </div>\r\n          <div class=\"col-2 mt-4\">\r\n\r\n            <svg *ngIf=\"isVisibleButtons\" (click)=\"showaddnewsubcategorypopup()\" style=\"margin: 5px;\" width=\"22\"\r\n              height=\"18\" fill=\"currentColor\" class=\"bi bi-pencil-square\" viewBox=\"0 0 16 16\">\r\n              <path\r\n                d=\"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z\" />\r\n              <path fill-rule=\"evenodd\"\r\n                d=\"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z\" />\r\n            </svg>\r\n\r\n\r\n          </div>\r\n          <div class=\"col-12\">\r\n            <input [(ngModel)]=\"subcategory\" type=\"text\" name=\"subcategory\" disabled />\r\n          </div>\r\n\r\n          <div class=\"col-6 mt-5\">\r\n            <p class=\"name\" style=\"color: #404040\">Product Name :</p>\r\n          </div>\r\n          <div class=\"col-6 mt-5\">\r\n            <input [(ngModel)]=\"productname\" type=\"text\" id=\"offer\" name=\"product_name\" />\r\n          </div>\r\n\r\n          <div class=\"col-6\">\r\n            <p class=\"name\" style=\"color: #404040\">Cost:</p>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <input [(ngModel)]=\"cost\" type=\"text\" id=\"offer\" name=\"cost\" />\r\n          </div>\r\n\r\n          <div class=\"col-6\">\r\n            <p class=\"name\" style=\"color: #404040\">Weight:</p>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <input [(ngModel)]=\"weight\" type=\"text\" id=\"offer\" name=\"weight\" />\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-3 mt-1\">\r\n              <p class=\"name\" style=\"color: #404040\">Unit :</p>\r\n            </div>\r\n\r\n            <div class=\"col-7 \">\r\n              <input [(ngModel)]=\"Selectedunit\" type=\"text\" name=\"unit\" disabled />\r\n            </div>\r\n\r\n            <div class=\"col-2 mt-1\">\r\n\r\n              <svg *ngIf=\"isVisibleButtons\" (click)=\"Changeunit()\" style=\"margin: 5px;\" width=\"22\"\r\n              height=\"18\" fill=\"currentColor\" class=\"bi bi-pencil-square\" viewBox=\"0 0 16 16\">\r\n              <path\r\n                d=\"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z\" />\r\n              <path fill-rule=\"evenodd\"\r\n                d=\"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z\" />\r\n            </svg>\r\n\r\n            \r\n            </div>\r\n\r\n          </div>\r\n          \r\n         \r\n\r\n          \r\n\r\n\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label style=\"color: #404040\" for=\"exampleFormControlTextarea1\">Product Description :</label>\r\n          <textarea *ngIf=\"isVisibleButtons\" [(ngModel)]=\"description\" style=\"background-color: #fff\"\r\n            class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"3\" name=\"description\"></textarea>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-6 ion-text-center\">\r\n            <button *ngIf=\"isVisibleButtons\" (click)=\"deleteProduct()\" class=\"btn btn-sm delete-btn mt-2\">\r\n              Delete\r\n            </button>\r\n          </div>\r\n          <div class=\"col-6 ion-text-center\">\r\n            <button *ngIf=\"isVisibleButtons\" class=\"btn btn-sm update-btn\" (click)=\"showselecteditems()\">\r\n              Update\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</ion-content>\r\n\r\n<div *ngIf=\"isvisible\" class=\"container\">\r\n  <div class=\"card pop-up-card ion-text-center\">\r\n    <div class=\"row ion-text-center\">\r\n      <ion-icon name=\"chevron-back-outline\" style=\"font-size: larger; position: absolute; right: 120px; top: 10px\"\r\n        class=\"ion-text-left\" (click)=\"hidepopup()\"></ion-icon>\r\n      <p class=\"mt-1\">Select Any One Item</p>\r\n      <div *ngFor=\"let items of showProducts; let i = index\" class=\"mt-1 mb-2\">\r\n        <img src=\"{{items.image}}\" height=\"90px\" width=\"90px\" class=\"m-1\" style=\"border-radius: 5px\" />\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<!----------------Category Change---------------->\r\n<div *ngIf=\"addnewcategorypopup\" class=\"container\">\r\n  <div class=\"card pop-up-card ion-text-center\" id=\"category-popupCard\">\r\n\r\n    <div style=\"margin-top: 2px;\" class=\"title\">\r\n      <div class=\"row\">\r\n        <div class=\"col-10\">\r\n          <h4><b>Change Category</b></h4>\r\n        </div>\r\n        <div class=\"col-2\">\r\n          <div class=\"ion-margin-top ion-text-center\">\r\n            <svg (click)=\"hideaddnewcategorypopup()\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\"\r\n              xmlns=\"http://www.w3.org/2000/svg\">\r\n              <circle cx=\"12\" cy=\"12\" r=\"9\" fill=\"red\" fill-opacity=\"0.25\" />\r\n              <path d=\"M16 8L8 16\" stroke=\"white\" stroke-width=\"1.2\" stroke-linecap=\"square\" stroke-linejoin=\"round\" />\r\n              <path d=\"M8 8L16 16\" stroke=\"white\" stroke-width=\"1.2\" stroke-linecap=\"square\" stroke-linejoin=\"round\" />\r\n            </svg>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row ion-text-center\">\r\n      <div class=\"col-12 \">\r\n        <button class=\"btn  add-new-btn \" (click)=\"visibleCategoryPopup()\">\r\n          Add New +\r\n        </button>\r\n      </div>\r\n\r\n\r\n      <form #categoryselect=\"ngForm\" (change)=\"popupModel(categoryselect.value)\">\r\n        <div class=\"col-12 mt-2\">\r\n          <div style=\"width: 90%;margin: auto !important;\" class=\"select\">\r\n            <select ngModel name=\"category\">\r\n              <option value=\"\" disabled selected>Select Your Category</option>\r\n              <option *ngFor=\"let cat of categoryList;\" value=\"{{cat.category}}\">\r\n                {{cat.category}}\r\n              </option>\r\n              <!-- <option style=\"background-color: #23d5ab;\" value=\"1\">+ add new</option> -->\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <button class=\"btn signin-btn \" (click)=\"categorysubmit()\">\r\n          Update Category</button><br />\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<!----------------SubCategory Change---------------->\r\n<div *ngIf=\"addnewsubcategorypopup\" class=\"container\">\r\n  <div class=\"card pop-up-card ion-text-center\" id=\"subcategory-popupCard\">\r\n\r\n\r\n    <div style=\"margin-top: 2px;\" class=\"title\">\r\n      <div class=\"row\">\r\n        <div class=\"col-10\">\r\n          <h4><b>Change Sub Category</b></h4>\r\n        </div>\r\n        <div class=\"col-2\">\r\n          <div class=\"ion-margin-top ion-text-left\">\r\n            <svg (click)=\"hideaddnewsubcategorypopup()\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\"\r\n              xmlns=\"http://www.w3.org/2000/svg\">\r\n              <circle cx=\"12\" cy=\"12\" r=\"9\" fill=\"red\" fill-opacity=\"0.25\" />\r\n              <path d=\"M16 8L8 16\" stroke=\"white\" stroke-width=\"1.2\" stroke-linecap=\"square\" stroke-linejoin=\"round\" />\r\n              <path d=\"M8 8L16 16\" stroke=\"white\" stroke-width=\"1.2\" stroke-linecap=\"square\" stroke-linejoin=\"round\" />\r\n            </svg>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"col-12\">\r\n      <button class=\"btn add-new-btn \" (click)=\"visibleSubCategoryPopup()\">\r\n        Add New +\r\n      </button>\r\n    </div>\r\n\r\n\r\n    <form #subcategoryselect=\"ngForm\" (ngSubmit)=\"subcategorysubmit(subcategoryselect.value)\">\r\n      <div class=\"col-12 mt-2\">\r\n        <div style=\"width: 90%;margin: auto !important;\" class=\"select\">\r\n          <select ngModel name=\"subcategory\">\r\n            <option value=\"\" disabled selected>\r\n              Select Your Sub Category\r\n            </option>\r\n            <option *ngFor=\"let subcat of subcategoryList; let i = index\" value=\"{{subcat.subsubcategory}}\">\r\n              {{subcat.subsubcategory}}\r\n            </option>\r\n            <option disabled *ngIf=\"subCategoryNotfound\">\r\n              No Sub Category Found\r\n            </option>\r\n            <!-- <option style=\"background-color: #23d5ab;\" value=\"1\">+ add new</option> -->\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <button class=\"btn signin-btn \" type=\"submit\">\r\n        Update Sub Category</button><br />\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!----------------Add New Category---------------->\r\n<div class=\"card\" *ngIf=\"PopupModel\" id=\"card\">\r\n  <div class=\"row\" style=\"margin: 5%\" >\r\n    <div class=\"col-12 ion-text-left\">\r\n      <svg (click)=\"backToprivious()\" style=\"color: black; margin-top: -8px; cursor: pointer\"\r\n        xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"#EB154B\" class=\"bi bi-arrow-left\"\r\n        viewBox=\"0 0 16 16\">\r\n        <path fill-rule=\"evenodd\"\r\n          d=\"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z\" />\r\n      </svg>\r\n    </div>\r\n    <div class=\"col-12\">\r\n      <h5 class=\"name ion-text-center\" style=\"color: #ffffff\">\r\n        <b>Enter your category name</b>\r\n      </h5>\r\n    </div>\r\n    <div class=\"col-12\">\r\n      <input [(ngModel)]=\"categoryName\" type=\"text\" />\r\n    </div>\r\n    <div style=\"width: 100%; text-align: center\">\r\n      <button type=\"button\" (click)=\"createCategory()\" class=\"btn signin-btn mt-2\">\r\n        Submit\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<!----------------Add New Sub Category---------------->\r\n<div class=\"card\" *ngIf=\"subcategoryPopupModel\" id=\"card\">\r\n  <div class=\"row\" style=\"margin: 5%\" id=\"modal\">\r\n    <div class=\"col-12 ion-text-left\">\r\n      <svg (click)=\"ScBackToprivious()\" style=\"color: black; margin-top: -8px; cursor: pointer\"\r\n        xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"#EB154B\" class=\"bi bi-arrow-left\"\r\n        viewBox=\"0 0 16 16\">\r\n        <path fill-rule=\"evenodd\"\r\n          d=\"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z\" />\r\n      </svg>\r\n    </div>\r\n\r\n    <div class=\"col-12\">\r\n      <h5 class=\"name ion-text-center\" style=\"color: #ffffff\">\r\n        <b>Enter your sub category name</b>\r\n      </h5>\r\n    </div>\r\n    <div class=\"col-12\">\r\n      <input [(ngModel)]=\"subcategoryName\" type=\"text\" />\r\n    </div>\r\n    <div style=\"width: 100%; text-align: center\">\r\n      <button type=\"button\" (click)=\"createSubcategory()\" class=\"btn signin-btn mt-2\">\r\n        Submit\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<!---------------- unit card popup ---------------->\r\n<div *ngIf=\"selectUnitpopup\" class=\"container\">\r\n  <div class=\"card pop-up-card ion-text-center\" id=\"unit-popupCard\" style=\"margin-top: -2px\">\r\n    <div style=\"margin-top: 2px;\" class=\"title\">\r\n      <div class=\"row\">\r\n        <div class=\"col-10\">\r\n          <h4><b>Update unit</b></h4>\r\n        </div>\r\n        <div class=\"col-2\">\r\n          <div class=\"ion-margin-top ion-text-left\">\r\n            <svg (click)=\"hideChangeunit()\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\"\r\n              xmlns=\"http://www.w3.org/2000/svg\">\r\n              <circle cx=\"12\" cy=\"12\" r=\"9\" fill=\"red\" fill-opacity=\"0.25\" />\r\n              <path d=\"M16 8L8 16\" stroke=\"white\" stroke-width=\"1.2\" stroke-linecap=\"square\" stroke-linejoin=\"round\" />\r\n              <path d=\"M8 8L16 16\" stroke=\"white\" stroke-width=\"1.2\" stroke-linecap=\"square\" stroke-linejoin=\"round\" />\r\n            </svg>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <!----------------Unit Selection---------------->\r\n    <div class=\"col-12 mt-2\">\r\n      <div style=\"width: 90%;margin: auto !important;\" class=\"select\">\r\n        <select name=\"unit\" class=\"unit-dropdown p-1\" (change)=\"unitSelect()\" [(ngModel)]=\"unitSelected\">\r\n          <option value=\"\" disabled selected>unit</option>\r\n          <option *ngFor=\"let item of unitList\" value=\"{{item}}\" class=\"unit-dropdown-options\">\r\n            {{item}}\r\n          </option>\r\n        </select>\r\n      </div>\r\n      <button class=\"btn signin-btn \" type=\"submit\" (click)=\"updateChangeunit()\">\r\n        Update Unit</button><br />\r\n\r\n    </div>\r\n  </div>\r\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_myproduct-edit_myproduct-edit_module_ts.js.map