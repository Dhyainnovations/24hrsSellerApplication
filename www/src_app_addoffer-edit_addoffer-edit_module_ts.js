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
            const myArray = response.records.offer_time;
            var Splittedetime = myArray.split(":", 3);
            this.OfferHour = Splittedetime[0];
            this.OfferMinute = Splittedetime[1];
            console.log(Splittedetime);
            if (this.otheroffer != "") {
                this.offer = "";
                this.offerPrice = "";
                this.otherofferradio = false;
                this.otheroffersradio = true;
            }
            else {
                this.otheroffer = "";
                this.otherofferradio = true;
                this.otheroffersradio = false;
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
                var expiryTime = this.expireddateandTime;
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

module.exports = "input[type=text] {\n  font-size: 15px;\n  margin: 0 8px;\n  width: 92%;\n  box-sizing: border-box;\n  background-color: transparent;\n  border: none !important;\n  border-bottom: 2px solid #EB154B !important;\n}\n\n.add-new-btn {\n  background-color: #EB154B !important;\n  border: 1px solid #EB154B;\n}\n\n.signin-btn {\n  background-color: #ffffff;\n  color: #0D0D0D;\n  border: 1px solid #0D0D0D;\n}\n\ninput:focus {\n  outline: none !important;\n  border-bottom: 2px solid #23d5ab !important;\n}\n\n#card {\n  z-index: 1 !important;\n  height: 36% !important;\n  top: 20%;\n  box-shadow: none !important;\n  background: rgba(255, 255, 255, 0.54);\n  border-radius: 5px;\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n}\n\n.card {\n  background-color: #fff;\n  border: 1px solid #fff;\n  border-radius: 8px;\n  width: 96% !important;\n  margin: 5px;\n  box-shadow: 2px 2px 2px 2px #ccc !important;\n  border: 1px solid #fff;\n}\n\n.delete-btn {\n  background-color: #121212 !important;\n  color: #fff;\n  text-align: center;\n}\n\n.update-btn {\n  background-color: #EB154B;\n  color: #fff;\n  text-align: center;\n}\n\n.btn {\n  margin: 10px 0 !important;\n}\n\nion-content {\n  background-color: #fff !important;\n  --offset-bottom: auto !important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n\n.pop-up-card {\n  box-shadow: none !important;\n  position: absolute;\n  top: 10%;\n  z-index: 1;\n  right: 3px;\n  border-radius: 10px;\n}\n\n#product-popupCard {\n  /* From https://css.glass */\n  /* From https://css.glass */\n  background: #191818;\n  border-radius: 5px;\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n  backdrop-filter: blur(13.1px);\n  -webkit-backdrop-filter: blur(13.1px);\n  height: 26%;\n  margin-top: 50% !important;\n  border: none !important;\n  color: #fff;\n}\n\nbutton {\n  box-shadow: rgba(50, 50, 93, 0.068) 0px 2px 5px -1px, rgba(0, 0, 0, 0.068) 0px 1px 3px -1px;\n}\n\n#subcategory-popupCard {\n  /* From https://css.glass */\n  /* From https://css.glass */\n  background: #191818;\n  border-radius: 5px;\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n  height: 26%;\n  margin-top: 50%;\n  border: none !important;\n  color: #fff;\n}\n\n#category-popupCard {\n  /* From https://css.glass */\n  /* From https://css.glass */\n  background: #191818;\n  border-radius: 5px;\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n  height: 26%;\n  margin-top: 50%;\n  border: none !important;\n  color: #fff;\n}\n\ninput[type=file] {\n  display: none;\n}\n\ninput[type=datetime-local] {\n  font-size: 15px;\n  margin: 0 5px;\n  width: 90%;\n  box-sizing: border-box;\n  border: none;\n  background-color: transparent !important;\n  border-bottom: 2px solid #EB154B;\n}\n\n.signin-div {\n  background-color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZG9mZmVyLWVkaXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0VBQ0EsMkNBQUE7QUFDRjs7QUFFQTtFQUNFLG9DQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBRUY7O0FBQ0E7RUFDRSx3QkFBQTtFQUNBLDJDQUFBO0FBRUY7O0FBQUE7RUFDRSxxQkFBQTtFQUVBLHNCQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0FBRUY7O0FBRUE7RUFDRSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFHQSwyQ0FBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtFQUtBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBSEY7O0FBS0U7RUFDRSxhQUFBO0FBSEo7O0FBT0E7RUFDRSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUFKRjs7QUFPQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7RUFDQSw2QkFBQTtFQUNBLHFDQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FBSkE7O0FBT0E7RUFDRSwyRkFBQTtBQUpGOztBQU9BO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtFQUdBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FBTkE7O0FBU0E7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0VBR0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUFSQTs7QUFVQTtFQUNFLGFBQUE7QUFQRjs7QUFVQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLHdDQUFBO0VBQ0EsZ0NBQUE7QUFQRjs7QUFVQTtFQUNFLHNCQUFBO0FBUEYiLCJmaWxlIjoiYWRkb2ZmZXItZWRpdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFt0eXBlPXRleHRdIHtcclxuICBmb250LXNpemUgICAgICAgOiAxNXB4O1xyXG4gIG1hcmdpbiAgICAgICAgICA6IDAgOHB4O1xyXG4gIHdpZHRoICAgICAgICAgICA6IDkyJTtcclxuICBib3gtc2l6aW5nICAgICAgOiBib3JkZXItYm94O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjpub25lICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbSAgIDogMnB4IHNvbGlkICNFQjE1NEIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmFkZC1uZXctYnRue1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFQjE1NEIgIWltcG9ydGFudDtcclxuICBib3JkZXI6MXB4IHNvbGlkICNFQjE1NEI7XHJcbn1cclxuLnNpZ25pbi1idG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBjb2xvcjogIzBEMEQwRDtcclxuICBib3JkZXI6MXB4IHNvbGlkICMwRDBEMEQ7XHJcbn1cclxuXHJcbmlucHV0OmZvY3VzIHtcclxuICBvdXRsaW5lICAgOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbSAgIDogMnB4IHNvbGlkICMyM2Q1YWIgIWltcG9ydGFudDtcclxufVxyXG4jY2FyZHtcclxuICB6LWluZGV4OiAxICFpbXBvcnRhbnQ7XHJcbiAgXHJcbiAgaGVpZ2h0OiAzNiUgIWltcG9ydGFudDtcclxuICB0b3A6MjAlO1xyXG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTQpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3gtc2hhZG93OiAwIDRweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAvLyBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTMuMXB4KTtcclxuICAvLyAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMy4xcHgpO1xyXG59XHJcbi5jYXJkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yICA6ICNmZmY7XHJcbiAgYm9yZGVyICAgICAgICAgICAgOiAxcHggc29saWQgI2ZmZjtcclxuICBib3JkZXItcmFkaXVzICAgICA6IDhweDtcclxuICB3aWR0aCAgICAgICAgICAgICA6IDk2JSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbiAgICAgICAgICAgIDogNXB4O1xyXG4gIC1tb3otYm94LXNoYWRvdyAgIDogMCAwIDNweCAjY2NjO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDNweCAjY2NjO1xyXG4gIGJveC1zaGFkb3cgICAgICAgIDogMnB4IDJweCAycHggMnB4ICNjY2MgIWltcG9ydGFudDtcclxuICBib3JkZXIgICAgICAgICAgICA6IDFweCBzb2xpZCAjZmZmO1xyXG59XHJcblxyXG4uZGVsZXRlLWJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMiAhaW1wb3J0YW50O1xyXG4gIGNvbG9yICAgICAgICAgICA6ICNmZmY7XHJcbiAgdGV4dC1hbGlnbiAgICAgIDogY2VudGVyO1xyXG59XHJcblxyXG4udXBkYXRlLWJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VCMTU0QjtcclxuICBjb2xvciAgICAgICAgICAgOiAjZmZmO1xyXG4gIHRleHQtYWxpZ24gICAgICA6IGNlbnRlcjtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgbWFyZ2luOiAxMHB4IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCBkYXJrdHVycXVvaXNlXHJcbiAgLy8gMCUsICNkMWYyZTdcclxuICAvLyAxMDAlKSAhaW1wb3J0YW50O1xyXG5cclxuICAtLW9mZnNldC1ib3R0b206IGF1dG8gIWltcG9ydGFudDtcclxuICAtLW92ZXJmbG93ICAgICA6IGhpZGRlbjtcclxuICBvdmVyZmxvdyAgICAgICA6IGF1dG87XHJcblxyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4ucG9wLXVwLWNhcmQge1xyXG4gIGJveC1zaGFkb3cgICA6IG5vbmUgIWltcG9ydGFudDtcclxuICBwb3NpdGlvbiAgICAgOiBhYnNvbHV0ZTtcclxuICB0b3AgICAgICAgICAgOiAxMCU7XHJcbiAgei1pbmRleCAgICAgIDogMTtcclxuICByaWdodCAgICAgICAgOiAzcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuI3Byb2R1Y3QtcG9wdXBDYXJke1xyXG4vKiBGcm9tIGh0dHBzOi8vY3NzLmdsYXNzICovXHJcbi8qIEZyb20gaHR0cHM6Ly9jc3MuZ2xhc3MgKi9cclxuYmFja2dyb3VuZDogIzE5MTgxODtcclxuYm9yZGVyLXJhZGl1czogNXB4O1xyXG5ib3gtc2hhZG93OiAwIDRweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEzLjFweCk7XHJcbi13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEzLjFweCk7XHJcbmhlaWdodDoyNiU7XHJcbm1hcmdpbi10b3A6IDUwJSAhaW1wb3J0YW50O1xyXG5ib3JkZXI6bm9uZSAhaW1wb3J0YW50O1xyXG5jb2xvcjojZmZmO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4wNjgpIDBweCAycHggNXB4IC0xcHgsIHJnYmEoMCwgMCwgMCwgMC4wNjgpIDBweCAxcHggM3B4IC0xcHg7XHJcbn1cclxuXHJcbiNzdWJjYXRlZ29yeS1wb3B1cENhcmQge1xyXG4vKiBGcm9tIGh0dHBzOi8vY3NzLmdsYXNzICovXHJcbi8qIEZyb20gaHR0cHM6Ly9jc3MuZ2xhc3MgKi9cclxuYmFja2dyb3VuZDogIzE5MTgxODtcclxuYm9yZGVyLXJhZGl1czogNXB4O1xyXG5ib3gtc2hhZG93OiAwIDRweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuLy8gYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEzLjFweCk7XHJcbi8vIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEzLjFweCk7XHJcbmhlaWdodDoyNiU7XHJcbm1hcmdpbi10b3A6IDUwJTtcclxuYm9yZGVyOm5vbmUgIWltcG9ydGFudDtcclxuY29sb3I6I2ZmZjtcclxufVxyXG5cclxuI2NhdGVnb3J5LXBvcHVwQ2FyZHtcclxuLyogRnJvbSBodHRwczovL2Nzcy5nbGFzcyAqL1xyXG4vKiBGcm9tIGh0dHBzOi8vY3NzLmdsYXNzICovXHJcbmJhY2tncm91bmQ6ICMxOTE4MTg7XHJcbmJvcmRlci1yYWRpdXM6IDVweDtcclxuYm94LXNoYWRvdzogMCA0cHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbi8vIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMy4xcHgpO1xyXG4vLyAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMy4xcHgpO1xyXG5oZWlnaHQ6MjYlO1xyXG5tYXJnaW4tdG9wOiA1MCU7XHJcbmJvcmRlcjpub25lICFpbXBvcnRhbnQ7XHJcbmNvbG9yOiNmZmY7XHJcbn1cclxuaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn0gXHJcblxyXG5pbnB1dFt0eXBlPWRhdGV0aW1lLWxvY2FsXSB7XHJcbiAgZm9udC1zaXplICAgICAgIDogMTVweDtcclxuICBtYXJnaW4gICAgICAgICAgOiAwIDVweDtcclxuICB3aWR0aCAgICAgICAgICAgOiA5MCU7XHJcbiAgYm94LXNpemluZyAgICAgIDogYm9yZGVyLWJveDtcclxuICBib3JkZXIgICAgICAgICAgOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjRUIxNTRCO1xyXG59XHJcblxyXG4uc2lnbmluLWRpdntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59Il19 */";

/***/ }),

/***/ 9673:
/*!******************************************************************!*\
  !*** ./src/app/addoffer-edit/addoffer-edit.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<!------------ Header  ---------------->\r\n<ion-toolbar color=\"light \">\r\n  <ion-buttons slot=\"start\">\r\n    <ion-menu-button style=\"margin-top:15px;color:#121212\" autoHide=\"false\">\r\n      <svg width=\"34\" height=\"34\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n        <path d=\"M5 7H19\" stroke=\"#121212\" stroke-width=\"2\" stroke-linecap=\"round\" />\r\n        <path d=\"M5 12H15\" stroke=\"#121212\" stroke-width=\"2\" stroke-linecap=\"round\" />\r\n        <path d=\"M5 17H11\" stroke=\"#121212\" stroke-width=\"2\" stroke-linecap=\"round\" />\r\n      </svg>\r\n    </ion-menu-button>\r\n  </ion-buttons>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-4\">\r\n      <h5 style=\"color:#121212;margin-top:10px\"><b></b></h5>\r\n    </div>\r\n    <div class=\"col-8 mt-2 mx-2\" style=\"text-align: right;width: 90%;\">\r\n      <svg (click)=\"notification()\" style=\"margin:3px;\" width=\"26\" height=\"26\" viewBox=\"0 0 24 24\" fill=\"none\"\r\n        xmlns=\"http://www.w3.org/2000/svg\">\r\n        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n          d=\"M13.7942 3.29494C13.2296 3.10345 12.6258 3 12 3C9.1535 3 6.7622 5.14032 6.44786 7.96942L6.19605 10.2356L6.1896 10.2933C6.06065 11.417 5.69489 12.5005 5.11646 13.4725L5.08667 13.5222L4.50863 14.4856C3.98408 15.3599 3.7218 15.797 3.77842 16.1559C3.8161 16.3946 3.93899 16.6117 4.12435 16.7668C4.40292 17 4.9127 17 5.93224 17H18.0678C19.0873 17 19.5971 17 19.8757 16.7668C20.061 16.6117 20.1839 16.3946 20.2216 16.1559C20.2782 15.797 20.0159 15.3599 19.4914 14.4856L18.9134 13.5222L18.8836 13.4725C18.4273 12.7059 18.1034 11.8698 17.9236 10.9994C15.1974 10.9586 13 8.73592 13 6C13 5.00331 13.2916 4.07473 13.7942 3.29494ZM16.2741 4.98883C16.0999 5.28551 16 5.63109 16 6C16 6.94979 16.6621 7.74494 17.5499 7.94914C17.4205 6.82135 16.9608 5.80382 16.2741 4.98883Z\"\r\n          fill=\"black\" />\r\n        <path\r\n          d=\"M9 17C9 17.394 9.0776 17.7841 9.22836 18.1481C9.37913 18.512 9.6001 18.8427 9.87868 19.1213C10.1573 19.3999 10.488 19.6209 10.8519 19.7716C11.2159 19.9224 11.606 20 12 20C12.394 20 12.7841 19.9224 13.1481 19.7716C13.512 19.6209 13.8427 19.3999 14.1213 19.1213C14.3999 18.8427 14.6209 18.512 14.7716 18.1481C14.9224 17.7841 15 17.394 15 17L12 17H9Z\"\r\n          fill=\"black\" />\r\n        <circle cx=\"18\" cy=\"6\" r=\"2.5\" fill=\"#eb154b\" stroke=\"#eb154b\" />\r\n      </svg>\r\n\r\n      <!-- <ion-badge style=\"border-radius: 50%;margin-left: -14px ;color:#eb154b ;font-size: 12px;\" color=\"light\">10</ion-badge> -->\r\n\r\n    </div>\r\n  </div>\r\n</ion-toolbar>\r\n\r\n\r\n\r\n<ion-content [ngStyle]=\"{'opacity':addnewproductpopup ? '0.30' : '1'}\" [ngStyle]=\"{'opacity':addnewcategorypopup ? '0.30' : '1'}\" [ngStyle]=\"{'opacity':addnewsubcategorypopup ? '0.30' : '1'}\">\r\n  <div class=\"container\">\r\n    <div  class=\"signin-div mb-3\" style=\"margin-top: 10px;\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-12 ion-text-left \" style=\"margin-top: 20px;\">\r\n\r\n            <svg (click)=\"backAddoffer()\" style=\"margin-top:-8px;cursor:pointer;margin:5px;\"\r\n              xmlns=\"http://www.w3.org/2000/svg\" width=\"22\" height=\"20\" fill=\"#EB154B\" class=\"bi bi-arrow-left\"\r\n              viewBox=\"0 0 16 16\">\r\n              <path fill-rule=\"evenodd\"\r\n                d=\"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z\" />\r\n            </svg>\r\n          </div>\r\n          <div class=\"col-12\">\r\n            <h5 class=\"name  ion-text-center\" style=\"color:#676767;\"><b>Edit Your Offer</b></h5>\r\n          </div>\r\n          <div class=\"col-10\">\r\n            <p class=\"name mt-3 ion-text-left\" style=\"color:#404040;\">Category :</p>\r\n          </div>\r\n          <div class=\"col-2 mt-2\">\r\n\r\n            <svg *ngIf=\"isVisible\" (click)=\"showaddnewcategorypopup()\" style=\"margin: 5px;\" width=\"22\"\r\n              height=\"18\" fill=\"currentColor\" class=\"bi bi-pencil-square\" viewBox=\"0 0 16 16\">\r\n              <path\r\n                d=\"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z\" />\r\n              <path fill-rule=\"evenodd\"\r\n                d=\"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z\" />\r\n            </svg>\r\n\r\n          </div>\r\n          <div class=\"col-12\">\r\n            <input type=\"text\" disabled [(ngModel)]=\"Category\">\r\n          </div>\r\n\r\n\r\n          <div class=\"col-10\">\r\n            <p class=\"name mt-3 ion-text-left\" style=\"color:#404040;\">Sub Category :</p>\r\n          </div>\r\n          <div class=\"col-2 mt-2\">\r\n            <svg *ngIf=\"isVisible\" (click)=\"showaddnewsubcategorypopup()\" style=\"margin: 5px;\" width=\"22\"\r\n            height=\"18\" fill=\"currentColor\" class=\"bi bi-pencil-square\" viewBox=\"0 0 16 16\">\r\n            <path\r\n              d=\"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z\" />\r\n            <path fill-rule=\"evenodd\"\r\n              d=\"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z\" />\r\n          </svg>\r\n\r\n            \r\n          </div>\r\n          <div class=\"col-12\">\r\n            <input type=\"text\" disabled [(ngModel)]=\"subcategory\">\r\n          </div>\r\n        \r\n\r\n\r\n\r\n\r\n          <div class=\"col-10 ion-text-left\">          \r\n            <p class=\"name mt-2\" style=\"color:#404040;\">Product:</p>\r\n          </div>\r\n          <div class=\"col-2 mt-2\">\r\n            <svg *ngIf=\"isVisible\" (click)=\"showaddproductpopup()\" style=\"margin: 5px;\" width=\"22\"\r\n              height=\"18\" fill=\"currentColor\" class=\"bi bi-pencil-square\" viewBox=\"0 0 16 16\">\r\n              <path\r\n                d=\"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z\" />\r\n              <path fill-rule=\"evenodd\"\r\n                d=\"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z\" />\r\n            </svg>\r\n\r\n          </div>\r\n          <div class=\"col-12\">\r\n            <input type=\"text\" disabled [(ngModel)]=\"productName\">\r\n          </div>\r\n      \r\n\r\n        </div>\r\n       \r\n\r\n        <div class=\"row mt-4\">\r\n          <div class=\"col-6\">\r\n            <p class=\"edit-name ion-text-left\" style=\"color:#404040;\">Total Cost(₹) : </p>\r\n          </div>\r\n\r\n          <div class=\"col-6\">\r\n            <input [(ngModel)]=\"totalCost\" type=\"text\" id=\"offer\" (keyup)=\"calculateOfferPrice()\" disabled>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <p class=\"edit-name ion-text-left\" style=\"color:#404040;\">Offer Time\r\n              </p>\r\n          </div>\r\n          <div class=\"col-12\">\r\n            <!-- <input [(ngModel)]=\"offerTime\" type=\"time\" id=\"offer\"> -->\r\n            <input type=\"datetime-local\" [ngModel]=\"offer_end_time | date:'yyyy-MM-ddTHH:mm'\"\r\n            (ngModelChange)=\"change($event)\">\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"row mt-2\">\r\n          <div class=\"col-1\">\r\n            <input name=\"offer-select\" type=\"radio\" value=\"DiscountOffer\" (change)=\"onItemChange()\"\r\n             >\r\n\r\n          </div>\r\n          <div class=\"col-11\" [ngStyle]=\"{'opacity': DiscountOffer ? '0.5' : '1' }\">\r\n            <div class=\"row \">\r\n              <div class=\"col-6\">\r\n                <p class=\"edit-name ion-text-left\" style=\"color:#404040;\">Offer:</p>\r\n              </div>\r\n              <div class=\"col-4\">\r\n                \r\n                <span><input [(ngModel)]=\"offer\" type=\"text\" id=\"offer\" (keyup)=\"calculateOfferPrice()\" type=\"text\"\r\n                    pattern=\"\\d*\" maxlength=\"2\" min=\"1\" max=\"99\" id=\"offer\" [disabled]=\"DiscountOffer\"></span>\r\n              </div>\r\n              <div class=\"col-2\">\r\n                <p>%</p>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-6\">\r\n                <p class=\"edit-name ion-text-left\" style=\"color:#404040;\">Offer Price(₹) :</p>\r\n              </div>\r\n              <div class=\"col-6\">\r\n                <input [(ngModel)]=\"offerPrice\" type=\"text\" id=\"offer\" disabled>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-1\">\r\n            <input name=\"offer-select\" type=\"radio\"  value=\"OtherOffer\" (change)=\"onItemChange2()\" />\r\n          </div>\r\n          <div class=\"col-11\" [ngStyle]=\"{'opacity': OtherOffer ? '0.5' : '1' }\">\r\n            <div class=\"row\">\r\n              <div class=\"col-6\">\r\n                <p class=\"edit-name ion-text-left\" style=\"color:#404040;\">Other Offer :</p>\r\n              </div>\r\n              <div class=\"col-6\">\r\n                <input [(ngModel)]=\"otheroffer\" type=\"text\" id=\"offer\" type=\"text\" id=\"offer\"\r\n                  placeholder=\"Eg:Buy 2 Get 1 Free\" style=\"font-size: 12px;\" [disabled]=\"otherofferenable\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group mt-3 ion-text-center\">\r\n          <label for=\"exampleFormControlTextarea1\" style=\"color:#404040;\"> Description </label>\r\n          <textarea style=\"background-color: #fff;margin-top: 5px;\" class=\"form-control\" [(ngModel)]=\"description\"\r\n            description id=\"exampleFormControlTextarea1\" rows=\"3\"></textarea>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-6 ion-text-center\">\r\n            <button *ngIf=\"isVisible\" (click)=\"offerDelete()\" class=\"btn btn-sm delete-btn mt-2\">Delete</button>\r\n          </div>\r\n          <div class=\"col-6 ion-text-center\">\r\n            <button *ngIf=\"isVisible\" class=\"btn btn-sm update-btn mt-2\" (click)=\"addoffer() \">Post</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n\r\n<!------------ add new category popup ------------->\r\n\r\n<div *ngIf=\"addnewcategorypopup\" class=\"container pop-up-model\">\r\n  <div class=\"card pop-up-card ion-text-center\" style=\"padding: 7px;\"  id=\"category-popupCard\">\r\n    <div style=\"margin-top: 2px;\" class=\"title\">\r\n      <div class=\"row\">\r\n        <div class=\"col-10\">\r\n          <h4 ><b>Update  category</b></h4>\r\n        </div>\r\n        <div class=\"col-2\">\r\n          <div class=\"ion-margin-top ion-text-center\">\r\n            <svg style=\"margin-top: -4px !important;\" (click)=\"hideaddnewcategorypopup()\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n              <circle cx=\"12\" cy=\"12\" r=\"9\" fill=\"#fff\" fill-opacity=\"0.25\"/>\r\n              <path d=\"M16 8L8 16\" stroke=\"#EB154B\" stroke-width=\"1.2\" stroke-linecap=\"square\" stroke-linejoin=\"round\"/>\r\n              <path d=\"M8 8L16 16\" stroke=\"#EB154B\" stroke-width=\"1.2\" stroke-linecap=\"square\" stroke-linejoin=\"round\"/>\r\n              </svg>\r\n            </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row ion-text-center mb-4\" >\r\n      <form #categoryselect=\"ngForm\" (change)=\"popupModel(categoryselect.value)\" (ngSubmit)=\"categorysubmit()\">\r\n        <div class=\"col-12 \">\r\n          <div class=\"select\">\r\n            <select ngModel name=\"category\">\r\n              <option value=\"\" disabled selected>Select Your Category</option>\r\n              <option *ngFor=\"let cat of categoryList\" value=\"{{cat.category}}\">{{cat.category}}</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <button class=\"btn  mt-4 signin-btn mb-4\" type=\"submit\"> Update Category</button><br>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!------------ add new subcategory popup ------------->\r\n\r\n<div *ngIf=\"addnewsubcategorypopup\" class=\"container pop-up-model\">\r\n  <div class=\"card pop-up-card ion-text-center\" style=\"padding: 7px;\" id=\"subcategory-popupCard\">\r\n\r\n    <div style=\"margin-top: 2px;\" class=\"title\">\r\n      <div class=\"row\">\r\n        <div class=\"col-10\">\r\n          <h4 ><b>Update sub category</b></h4>\r\n        </div>\r\n        <div class=\"col-2\">\r\n          <div class=\"ion-margin-top ion-text-center\">\r\n            <svg style=\"margin-top: -4px !important;\" (click)=\"hideaddnewsubcategorypopup()\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"#fff\" xmlns=\"http://www.w3.org/2000/svg\">\r\n              <circle cx=\"12\" cy=\"12\" r=\"9\" fill=\"#fff\" fill-opacity=\"0.25\"/>\r\n              <path d=\"M16 8L8 16\" stroke=\"#EB154B\" stroke-width=\"1.2\" stroke-linecap=\"square\" stroke-linejoin=\"round\"/>\r\n              <path d=\"M8 8L16 16\" stroke=\"#EB154B\" stroke-width=\"1.2\" stroke-linecap=\"square\" stroke-linejoin=\"round\"/>\r\n              </svg>\r\n            </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n      <form #subcategoryselect=\"ngForm\" (ngSubmit)=\"subcategorysubmit(subcategoryselect.value)\" (change)=\"SubCategoryPopupModel(subcategoryselect.value)\">\r\n        <div class=\"col-12 mt-2\">\r\n          <div class=\"select\">\r\n            <select ngModel name=\"subcategory\">\r\n              <option value=\"\" disabled selected>Select Your Sub Category</option>\r\n              <option *ngFor=\"let subcat of subcategoryList; let i = index\" value=\"{{subcat.subsubcategory}}\">\r\n                {{subcat.subsubcategory}}\r\n              </option>\r\n              <option disabled *ngIf=\"subCategoryNotfound\" style=\"background-color: #d1d1d1;\">No Sub Category Found\r\n              </option>\r\n              <!-- <option style=\"background-color: #23d5ab;\" value=\"1\">+ add new</option> -->\r\n\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <button class=\"btn  mt-4 signin-btn\" type=\"submit\"> Update Sub Category</button><br>\r\n      </form>\r\n  </div>\r\n</div>\r\n\r\n<!----------  product popup --------------->\r\n<div *ngIf=\"addnewproductpopup\" class=\"container pop-up-model\">\r\n  <div class=\"card pop-up-card ion-text-center\" style=\"padding: 7px;\" id=\"product-popupCard\">\r\n    <div style=\"margin-top: 2px;\" class=\"title\">\r\n      <div class=\"row\">\r\n        <div class=\"col-10\">\r\n          <h4 ><b>Update  product name</b></h4>\r\n        </div>\r\n        <div class=\"col-2\">\r\n          <div class=\"ion-margin-top ion-text-center\">\r\n            <svg style=\"margin-top: -4px !important;\" (click)=\"hideaddproductpopup()\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n              <circle cx=\"12\" cy=\"12\" r=\"9\" fill=\"#fff\" fill-opacity=\"0.25\"/>\r\n              <path d=\"M16 8L8 16\" stroke=\"#EB154B\" stroke-width=\"1.2\" stroke-linecap=\"square\" stroke-linejoin=\"round\"/>\r\n              <path d=\"M8 8L16 16\" stroke=\"#EB154B\" stroke-width=\"1.2\" stroke-linecap=\"square\" stroke-linejoin=\"round\"/>\r\n              </svg>\r\n            </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n      <form #productselect=\"ngForm\" (ngSubmit)=\"productselectform(productselect.value)\">\r\n\r\n        <div class=\"select \" id=\"kg-dropdwon\">\r\n          <select ngModel name=\"productName\">\r\n            <option value=\"\" disabled selected>Select Your Product</option>\r\n            <option *ngFor=\"let product of productList\" value=\"{{product.product_name}}\">{{product.product_name}}\r\n            </option>\r\n            <option disabled *ngIf=\"ProductNotfound\">No Product Found</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <button class=\"btn  mt-4 signin-btn\" type=\"submit\"> Update product name</button><br>\r\n          </div>\r\n        </div>\r\n      </form>\r\n\r\n  </div>\r\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_addoffer-edit_addoffer-edit_module_ts.js.map