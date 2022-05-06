"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab5_tab5_module_ts"],{

/***/ 6672:
/*!*********************************************!*\
  !*** ./src/app/tab5/tab5-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab5PageRoutingModule": () => (/* binding */ Tab5PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _tab5_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab5.page */ 2584);




const routes = [
    {
        path: '',
        component: _tab5_page__WEBPACK_IMPORTED_MODULE_0__.Tab5Page,
    }
];
let Tab5PageRoutingModule = class Tab5PageRoutingModule {
};
Tab5PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab5PageRoutingModule);



/***/ }),

/***/ 5184:
/*!*************************************!*\
  !*** ./src/app/tab5/tab5.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab5PageModule": () => (/* binding */ Tab5PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _tab5_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab5.page */ 2584);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab5_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab5-routing.module */ 6672);









let Tab5PageModule = class Tab5PageModule {
};
Tab5PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([{ path: '', component: _tab5_page__WEBPACK_IMPORTED_MODULE_0__.Tab5Page }]),
            _tab5_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab5PageRoutingModule,
        ],
        declarations: [_tab5_page__WEBPACK_IMPORTED_MODULE_0__.Tab5Page]
    })
], Tab5PageModule);



/***/ }),

/***/ 2584:
/*!***********************************!*\
  !*** ./src/app/tab5/tab5.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab5Page": () => (/* binding */ Tab5Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab5_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab5.page.html?ngResource */ 1503);
/* harmony import */ var _tab5_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab5.page.scss?ngResource */ 5271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _shared_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/http.service */ 8191);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ 598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);









let Tab5Page = class Tab5Page {
    constructor(router, http, toastCtrl, route) {
        this.router = router;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.addressproof = null;
        this.idSubmitButtonProof = false;
        this.addressSubmitButtonProof = false;
        this.userMobileNumber = localStorage.getItem("user_mobile_Number");
        this.userdetails = localStorage.getItem("StoreName");
        this.EmailID = localStorage.getItem("EmailID");
        this.InstagramToggle = " ";
        this.Deliveryavailability = true;
        this.parsedObj = localStorage.getItem("tbid");
        this.PopupModel = false;
        this.userDetailstVisible = true;
        this.contactVisible = true;
        this.idproof = null;
        this.findClick = false;
        this.selectedFile = null;
        this.listOfCat = [];
        route.params.subscribe(val => {
            this.PopupModel = false;
            this.sellerAllDetails();
            this.list();
        });
    }
    ngOnInit() {
    }
    //Seller-get-Details
    sellerAllDetails() {
        this.http.get('/seller_details').subscribe((response) => {
            if (response.success == "true") {
                console.log(response);
                if (response.records.id_proof == "" || response.records.id_proof == null) {
                    this.idProofNotExist = true;
                    this.idProofExist = false;
                    this.id_proof = "Not Available";
                }
                else {
                    this.id_proof = response.records.id_proof;
                    this.idProofExist = true;
                    this.idProofNotExist = false;
                }
                if (response.records.store_category == "" || response.records.store_category == null) {
                    this.store_categoryNotExist = true;
                    this.store_categoryExist = false;
                    this.store_category = "Not Available";
                }
                else {
                    this.store_category = response.records.store_category;
                    this.store_categoryExist = true;
                    this.store_categoryNotExist = false;
                }
                if (response.records.address_proof == "" || response.records.address_proof == null) {
                    this.addProofNotExist = true;
                    this.addidProofExist = false;
                    this.addressProof = "Not Available";
                }
                else {
                    this.addressProof = response.records.address_proof;
                    this.addidProofExist = true;
                    this.addProofNotExist = false;
                }
                if (response.records.city == "" || response.records.city == null) {
                    this.location = "Not Available";
                }
                else {
                    this.location = response.records.city;
                }
                this.contact_number = response.records.store_number;
                this.instagram = response.records.instagram;
                this.whatsapp = response.records.whatsapp;
                this.website = response.records.website;
                this.facebook = response.records.facebook;
                this.youtube = response.records.youtube;
                if (response.records.store_logo == "https://dhya.in/24Hrs/images/seller/store_logo/") {
                    this.noimagefound = true;
                    this.imagefound = false;
                }
                else {
                    this.storelogo = response.records.store_logo;
                    this.noimagefound = false;
                    this.imagefound = true;
                }
                this.store_number = response.records.store_number;
                if (response.records.delivery_availability == "") {
                    this.delivery_availability_button_disabled = true;
                    this.delivery_availability_button_enabled = false;
                }
                else {
                    this.delivery_availability_button_disabled = false;
                    this.delivery_availability_button_enabled = true;
                }
                if (response.records.instagram != null && response.records.instagram != "") {
                    this.InstagramChecked = true;
                    this.InstagramCheck = false;
                    this.InstagramToggle = true;
                    this.theInstagramToggle = true;
                }
                else {
                    this.InstagramChecked = false;
                    this.InstagramCheck = true;
                    this.InstagramToggle = false;
                    this.theInstagramToggle = false;
                }
                console.log(this.delivery_availability);
                if (response.records.delivery_availability == "1") {
                    this.deliveryStatus = true;
                }
                else {
                    this.deliveryStatus = false;
                }
                if (this.delivery_availability == true) {
                    this.delivery_availability_toggle = true;
                }
                else {
                    this.delivery_availability_toggle = false;
                }
                if (response.records.whatsapp != null && response.records.whatsapp != "") {
                    this.WhatsappChecked = true;
                    this.WhatsappCheck = false;
                    this.WhatsappToggle = true;
                    this.theWhatsappToggle = true;
                }
                else {
                    this.WhatsappCheck = true;
                    this.WhatsappChecked = false;
                    this.WhatsappToggle = false;
                    this.theWhatsappToggle = false;
                }
                if (response.records.store_number != null && response.records.store_number != "") {
                    this.ContactNumberCheck = false;
                    this.ContactNumberChecked = true;
                    this.ContactNumberToggle = true;
                    this.theContactToggle = true;
                }
                else {
                    this.ContactNumberCheck = true;
                    this.ContactNumberChecked = false;
                    this.ContactNumberToggle = false;
                    this.theContactToggle = false;
                }
                if (response.records.website != null && response.records.website != "") {
                    this.WebsiteCheck = false;
                    this.WebsiteChecked = true;
                    this.WebsiteToggle = true;
                    this.theWebsiteToggle = true;
                }
                else {
                    this.WebsiteCheck = true;
                    this.WebsiteChecked = false;
                    this.WebsiteToggle = false;
                    this.theWebsiteToggle = false;
                }
                if (response.records.youtube != null && response.records.youtube != "") {
                    this.YoutubeCheck = false;
                    this.YoutubeChecked = true;
                    this.YoutubeToggle = true;
                    this.theYoutubeToggle = true;
                }
                else {
                    this.YoutubeCheck = true;
                    this.YoutubeChecked = false;
                    this.YoutubeToggle = false;
                    this.theYoutubeToggle = false;
                }
                if (response.records.facebook != null && response.records.facebook != "") {
                    this.Facebookcheck = false;
                    this.Facebookchecked = true;
                    this.FacebookToggle = true;
                    this.theFacebookToggle = true;
                }
                else {
                    this.Facebookcheck = true;
                    this.Facebookchecked = false;
                    this.FacebookToggle = false;
                    this.theFacebookToggle = false;
                }
                this.updateToggle();
            }
        }, (error) => {
            console.log(error);
        });
    }
    //Change-Delivery-Availability
    deliveryStatustoggle() {
        this.deliveryStatus = !this.deliveryStatus;
        console.log(this.deliveryStatus);
    }
    //Get-Seller-Details-Based-On-Store-Name
    // DisplayUserDetails() {
    //   const obj = {
    //     store_name: this.userdetails
    //   }
    //   this.http.postFormData('/seller_store_details', obj).subscribe((response: any) => {
    //     console.log(obj);
    //     if (response.success == "true") {
    //       console.log(response);
    //       this.storelogo = response.records.store_logo;
    //       this.store_number = response.records.store_number;
    //       this.contact_number = response.records.store_number;
    //       this.instagram = response.records.instagram;
    //       this.whatsapp = response.records.whatsapp;
    //       this.website = response.records.website;
    //       this.facebook = response.records.facebook;
    //       this.youtube = response.records.youtube;
    //       this.delivery_availability = response.records.delivery_availability;
    //       this.location = response.records.city;
    //     }
    //   }, (error: any) => {
    //     console.log(error);
    //   }
    //   );
    // }
    backToprivious() {
        this.PopupModel = false;
        this.logoUploadCheck = false;
    }
    popupModelOpen() {
        // this.PopupModel = true;
        // this.userDetailstVisible = true;
        // this.contactVisible = false;
        this.router.navigate(['edit-profile']);
    }
    contactEdit() {
        this.PopupModel = true;
        this.contactVisible = true;
        this.userDetailstVisible = false;
    }
    contactview() {
        this.contactVisible = true;
        this.userDetailstVisible = false;
    }
    //Update-Social-Media-Details
    updateProfile() {
        localStorage.setItem("StoreName", this.userdetails);
        const contactData = {
            tbid: this.parsedObj,
            website: this.website,
            whatsapp: this.whatsapp,
            instagram: this.instagram,
            facebook: this.facebook,
            youtube: this.youtube,
            store_number: this.contact_number,
            delivery_availability: this.deliveryStatus
        };
        this.http.postFormData('/seller_contact', contactData).subscribe((response) => {
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
                    title: 'updated successfully'
                });
                this.router.navigate(['/tabs']);
                this.sellerAllDetails();
            }
            this.backToprivious();
            this.router.navigate(['/tabs/tab5']);
        }, (error) => {
            console.log(error);
        });
    }
    //Update-Store-Logo
    //Upload-Id-Proof
    MediaFileSelected_idproof(event2) {
        this.idproof = event2.target.files[0];
        var idproof = event2.target.files[0].size;
        var name = event2.target.files[0].name;
        this.idSubmitButtonProof = true;
        if (idproof > 10485760) {
            this.idProofSize = true;
            this.idProofUploadCheck = false;
        }
        else {
            this.idProofSize = false;
            this.idProofUploadCheck = true;
        }
    }
    //Upload-Address-Proof
    MediaFileSelected_addressproof(event1) {
        this.addressSubmitButtonProof = true;
        this.addressproof = event1.target.files[0];
        var adressproof = event1.target.files[0].size;
        var name = event1.target.files[0].name;
        if (adressproof > 10485760) {
            this.adressProofSize = true;
            this.addressProofUploadCheck = false;
        }
        else {
            this.adressProofSize = false;
            this.addressProofUploadCheck = true;
        }
    }
    //Upload-Id-Proof
    submitidProof() {
        const formdata = new FormData();
        formdata.append("tbid", this.parsedObj);
        formdata.append("id_proof", this.idproof);
        this.http.postFormData('/seller_id_proof', formdata).subscribe((response) => {
            if (response.success == "true") {
                console.log(response);
                this.idSubmitButtonProof = false;
                this.sellerAllDetails();
            }
        }, (error) => {
            console.log(error);
        });
    }
    //Upload-Address-Proof
    submitaddressProof() {
        const formdata = new FormData();
        formdata.append("tbid", this.parsedObj);
        formdata.append("address_proof", this.addressproof);
        this.http.postFormData('/seller_address_proof', formdata).subscribe((response) => {
            if (response.success == "true") {
                console.log(response);
                this.addressSubmitButtonProof = false;
                this.sellerAllDetails();
            }
        }, (error) => {
            console.log(error);
        });
    }
    //Toggle-Functions
    contactToggle() {
        if (this.ContactNumberChecked == true) {
            if (this.theContactToggle == true) {
                this.theContactToggle = !this.theContactToggle;
            }
            else {
                this.theContactToggle = !this.theContactToggle;
            }
        }
        else if (this.ContactNumberChecked == false) {
            this.theContactToggle = false;
        }
        this.updateToggle();
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
    }
    instagramToggle() {
        if (this.InstagramChecked == true) {
            if (this.theInstagramToggle == true) {
                this.theInstagramToggle = !this.theInstagramToggle;
            }
            else {
                this.theInstagramToggle = !this.theInstagramToggle;
            }
        }
        else if (this.InstagramChecked == false) {
            this.theInstagramToggle = false;
        }
        this.updateToggle();
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
    }
    whatsappToggle() {
        if (this.WhatsappChecked == true) {
            if (this.theWhatsappToggle == true) {
                this.theWhatsappToggle = !this.theWhatsappToggle;
            }
            else {
                this.theWhatsappToggle = !this.theWhatsappToggle;
            }
        }
        else if (this.WhatsappChecked == false) {
            this.theWhatsappToggle = false;
        }
        this.updateToggle();
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
    }
    websiteToggle() {
        if (this.WebsiteChecked == true) {
            if (this.theWebsiteToggle == true) {
                this.theWebsiteToggle = !this.theWebsiteToggle;
            }
            else {
                this.theWebsiteToggle = !this.theWebsiteToggle;
            }
        }
        else if (this.WebsiteChecked == false) {
            this.theWebsiteToggle = false;
        }
        this.updateToggle();
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
    }
    youtubeToggle() {
        if (this.YoutubeChecked == true) {
            if (this.theYoutubeToggle == true) {
                this.theYoutubeToggle = !this.theYoutubeToggle;
            }
            else {
                this.theYoutubeToggle = !this.theYoutubeToggle;
            }
        }
        else if (this.YoutubeChecked == false) {
            this.theYoutubeToggle = false;
        }
        this.updateToggle();
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
    }
    facebookToggle() {
        if (this.Facebookchecked == true) {
            if (this.theFacebookToggle == true) {
                this.theFacebookToggle = !this.theFacebookToggle;
            }
            else {
                this.theFacebookToggle = !this.theFacebookToggle;
            }
        }
        else if (this.Facebookchecked == false) {
            this.theFacebookToggle = false;
        }
        this.updateToggle();
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
    }
    //Toggle-Status-Upload
    updateToggle() {
        var obj = {
            tbid: this.parsedObj,
            seller_toggle: {
                whatsapp: this.theWhatsappToggle,
                website: this.theWebsiteToggle,
                instagram: this.theInstagramToggle,
                facebook: this.theFacebookToggle,
                youtube: this.theYoutubeToggle,
                contact_number: this.theContactToggle
            }
        };
        this.http.postFormData('/seller_toggle', obj).subscribe((response) => {
            if (response.success == "true") {
                console.log(response);
            }
        }, (error) => {
            console.log(error);
        });
    }
    list() {
        this.http.get('/list_store_category').subscribe((response) => {
            console.log(response);
            this.listOfCat = response.records;
        }, (error) => {
            console.log(error);
        });
    }
    //Naviagtions
    notification() {
        this.router.navigate(['/notification']);
    }
    StoreCategorySelect(data) {
        const formdata = new FormData();
        formdata.append("category", data.storeCategory);
        this.store_category_tbid = data.storeCategory;
    }
};
Tab5Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _shared_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute }
];
Tab5Page = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-tab5',
        template: _tab5_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab5_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab5Page);



/***/ }),

/***/ 5271:
/*!************************************************!*\
  !*** ./src/app/tab5/tab5.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = ".myproduct-div {\n  position: relative;\n  left: 2%;\n  background-color: var(--ion-color-light);\n  border: 1px solid #ebe6e6;\n  border-radius: 18px;\n  box-shadow: 2px 2px 2px 2px #ebe6e6;\n  width: 96% !important;\n}\n\n.support-btn {\n  border-radius: 5px !important;\n  background: transparent;\n  margin: 10px;\n  width: 50%;\n  text-align: center;\n  border: 1px solid #ebe6e6;\n  font-size: 12px !important;\n  margin-top: 17% !important;\n  color: var(--ion-color-light);\n}\n\n.enable-btn {\n  color: var(--ion-color-primary);\n  border: 1px solid var(--ion-color-primary);\n  border-radius: 4px;\n  padding: 5px;\n}\n\n.disable-btn {\n  color: var(--ion-color-secondary);\n  border: 1px solid var(--ion-color-secondary);\n  border-radius: 4px;\n  padding: 5px;\n}\n\n.name {\n  font-size: 14px;\n  color: #0d0d0d;\n  text-align: left;\n  font-style: bold;\n  font-weight: 550;\n}\n\n.edit-name {\n  font-size: 13px;\n  margin-top: 5px;\n}\n\ninput[type=text] {\n  font-size: 13px;\n  margin-top: -12px;\n  margin-left: -20px;\n  width: 100%;\n  box-sizing: border-box;\n  background-color: transparent;\n  border: none !important;\n  border-bottom: 2px solid var(--ion-color-primary) !important;\n}\n\ninput:focus {\n  outline: none !important;\n  border-bottom: 2px solid var(--ion-color-success) !important;\n}\n\n.error-message {\n  font-size: 12px;\n  margin-left: 25px;\n}\n\n#edit {\n  cursor: pointer;\n}\n\n#social-icon {\n  margin-bottom: 5px;\n}\n\n.update-btn {\n  border-radius: 5px !important;\n  background: var(--ion-color-primary);\n  color: var(--ion-color-light);\n  height: 25px;\n  width: 25%;\n  text-align: center;\n  border: 1px solid #fff;\n  font-size: 12px !important;\n  padding: 3px;\n  margin: 15px !important;\n}\n\n.cancel-btn {\n  border-radius: 5px !important;\n  background: var(--ion-color-secondary);\n  color: var(--ion-color-light);\n  height: 25px;\n  width: 25%;\n  text-align: center;\n  border: 1px solid #fff;\n  font-size: 12px !important;\n  padding: 3px;\n  margin: 15px !important;\n}\n\nion-toggle {\n  --handle-box-shadow: 0 3px 12px var(--ion-color-primary), 0 3px 1px var(--ion-color-primary);\n  overflow: visible;\n  contain: none;\n  color: var(--ion-color-primary) !important;\n}\n\nion-badge {\n  border-radius: 3px !important;\n  margin-left: -10px !important;\n}\n\n#card {\n  position: absolute;\n  height: 150%;\n  width: 1500px !important;\n  margin-left: -10px;\n  background-color: rgba(0, 0, 0, 0.4);\n  border: 1px solid #ebe6e6;\n  border-radius: 5px;\n  box-shadow: 2px 2px 2px 2px #ccc;\n  margin-top: -285px !important;\n  z-index: 5;\n}\n\n#modal {\n  position: fixed;\n  top: 18% !important;\n  margin: 5%;\n  background-color: var(--ion-color-light);\n  border: 1px solid #ebe6e6;\n  border-radius: 5px;\n  width: 94% !important;\n  animation-name: example;\n  animation-duration: 1s;\n  animation-fill-mode: forwards;\n}\n\n@keyframes example {\n  from {\n    top: 0px;\n  }\n  to {\n    top: 200px;\n    background-color: #fff;\n  }\n}\n\n.submit-btn {\n  background-color: var(--ion-color-secondary);\n  color: var(--ion-color-light);\n}\n\n.profile {\n  border: 1px solid #ffffff;\n  border-radius: 50%;\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n  margin: 7%;\n  width: 125px;\n  height: 125px;\n  padding: 5px;\n}\n\n.editprofile {\n  width: 155px;\n  height: 150px;\n  border-radius: 50%;\n}\n\n.upload-proff {\n  background: linear-gradient(to left, #23a6d5 0%, #23d5ab 100%);\n  color: #fff !important;\n}\n\n.welcomecard {\n  background: var(--ion-color-light);\n  border-radius: 18px;\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n  -webkit-backdrop-filter: blur(8.2px);\n          backdrop-filter: blur(8.2px);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n}\n\nion-content {\n  --background-color: var(--ion-color-light) !important;\n  --offset-bottom: auto !important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n\nion-toggle:disabled,\nion-toggle[disabled] {\n  opacity: 1;\n}\n\n.submit-btn {\n  cursor: pointer;\n}\n\ninput[type=file] {\n  display: none;\n}\n\n.infoIcon {\n  position: relative;\n  width: 10px !important;\n  top: 0;\n}\n\n.extraInfo {\n  position: absolute;\n  color: var(--ion-color-light);\n  background-color: #2c2c2ce7;\n  border-radius: 5px;\n  padding: 10px 10px;\n  width: 225px;\n  text-align: center;\n  visibility: hidden;\n  font-size: 10px;\n  z-index: 1;\n}\n\n.infoIcon:hover .extraInfo {\n  visibility: visible;\n}\n\n.success {\n  color: green;\n  font-size: 10px;\n}\n\n.danger {\n  color: var(--ion-color-primary);\n  font-size: 10px;\n}\n\n.button-enable {\n  border: 1px solid var(--ion-color-primary);\n  font-size: 10px;\n  width: 60px;\n  color: var(--ion-color-primary);\n  border-radius: 3px;\n}\n\n.button-disable {\n  border: 1px solid var(--ion-color-secondary);\n  font-size: 10px;\n  width: 60px;\n  color: var(--ion-color-secondary);\n  border-radius: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0Esd0NBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUNBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsNkJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtBQUNGOztBQUdBO0VBQ0UsK0JBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUdBO0VBQ0UsaUNBQUE7RUFDQSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFJQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FBREY7O0FBWUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSw0REFBQTtBQVRGOztBQVlBO0VBQ0Usd0JBQUE7RUFDQSw0REFBQTtBQVRGOztBQVlBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBVEY7O0FBYUE7RUFDRSxlQUFBO0FBVkY7O0FBYUE7RUFDRSxrQkFBQTtBQVZGOztBQWFBO0VBQ0UsNkJBQUE7RUFDQSxvQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUFWRjs7QUFhQTtFQUNFLDZCQUFBO0VBQ0Esc0NBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBVkY7O0FBYUE7RUFDRSw0RkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLDBDQUFBO0FBVkY7O0FBY0E7RUFDRSw2QkFBQTtFQUNBLDZCQUFBO0FBWEY7O0FBZUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw2QkFBQTtFQUNBLFVBQUE7QUFaRjs7QUFlQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSx3Q0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtBQWJGOztBQWlCQTtFQUNFO0lBQ0UsUUFBQTtFQWRGO0VBaUJBO0lBQ0UsVUFBQTtJQUNBLHNCQUFBO0VBZkY7QUFDRjs7QUFrQkE7RUFDRSw0Q0FBQTtFQUNBLDZCQUFBO0FBaEJGOztBQW9CQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFqQkY7O0FBb0JBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQWpCRjs7QUFvQkE7RUFDRSw4REFBQTtFQUNBLHNCQUFBO0FBakJGOztBQXFCQTtFQUNFLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSx5Q0FBQTtFQUNBLG9DQUFBO1VBQUEsNEJBQUE7RUFDQSwwQ0FBQTtBQWxCRjs7QUFxQkE7RUFDRSxxREFBQTtFQUlBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBckJGOztBQXVCRTtFQUNFLGFBQUE7QUFyQko7O0FBeUJBOztFQUVFLFVBQUE7QUF0QkY7O0FBeUJBO0VBQ0UsZUFBQTtBQXRCRjs7QUF5QkE7RUFDRSxhQUFBO0FBdEJGOztBQTBCQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxNQUFBO0FBdkJGOztBQTRCQTtFQUNFLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBekJGOztBQTRCQTtFQUNFLG1CQUFBO0FBekJGOztBQTRCQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FBekJGOztBQTRCQTtFQUNFLCtCQUFBO0VBQ0EsZUFBQTtBQXpCRjs7QUE0QkE7RUFDRSwwQ0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtBQXpCRjs7QUE0QkE7RUFDRSw0Q0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtBQXpCRiIsImZpbGUiOiJ0YWI1LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teXByb2R1Y3QtZGl2IHtcbiAgcG9zaXRpb24gICAgICAgIDogcmVsYXRpdmU7XG4gIGxlZnQgICAgICAgICAgICA6IDIlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBib3JkZXIgICAgICAgICAgOiAxcHggc29saWQgI2ViZTZlNjtcbiAgYm9yZGVyLXJhZGl1cyAgIDogMThweDtcbiAgYm94LXNoYWRvdyAgICAgIDogMnB4IDJweCAycHggMnB4ICNlYmU2ZTY7XG4gIHdpZHRoICAgICAgICAgICA6IDk2JSAhaW1wb3J0YW50O1xufVxuXG4uc3VwcG9ydC1idG4ge1xuICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZCAgIDogdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbiAgICAgICA6IDEwcHg7XG4gIHdpZHRoICAgICAgICA6IDUwJTtcbiAgdGV4dC1hbGlnbiAgIDogY2VudGVyO1xuICBib3JkZXIgICAgICAgOiAxcHggc29saWQgI2ViZTZlNjtcbiAgZm9udC1zaXplICAgIDogMTJweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wICAgOiAxNyUgIWltcG9ydGFudDtcbiAgY29sb3IgICAgICAgIDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcblxufVxuXG4uZW5hYmxlLWJ0biB7XG4gIGNvbG9yICAgICAgICA6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgYm9yZGVyICAgICAgIDogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nICAgICAgOiA1cHg7XG59XG5cbi5kaXNhYmxlLWJ0biB7XG4gIGNvbG9yICAgICAgICA6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICBib3JkZXIgICAgICAgOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZyAgICAgIDogNXB4O1xufVxuXG4ubmFtZSB7XG4gIGZvbnQtc2l6ZSAgOiAxNHB4O1xuICBjb2xvciAgICAgIDogIzBkMGQwZDtcbiAgdGV4dC1hbGlnbiA6IGxlZnQ7XG4gIGZvbnQtc3R5bGUgOiBib2xkO1xuICBmb250LXdlaWdodDogNTUwO1xufVxuXG5cbi5lZGl0LW5hbWUge1xuICBmb250LXNpemUgOiAxM3B4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi8vICNlZGl0LWZpZWxke1xuLy8gICAgIGJvcmRlcjoxcHggc29saWQgI2ZmZjtcbi8vICAgICB3aWR0aDoxMDAlO1xuLy8gICAgIG1hcmdpbi1sZWZ0OiAtMjBweDtcbi8vICAgICBmb250LXNpemU6IDExcHg7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4vLyB9XG5cbmlucHV0W3R5cGU9dGV4dF0ge1xuICBmb250LXNpemUgICAgICAgOiAxM3B4O1xuICBtYXJnaW4tdG9wICAgICAgOiAtMTJweDtcbiAgbWFyZ2luLWxlZnQgICAgIDogLTIwcHg7XG4gIHdpZHRoICAgICAgICAgICA6IDEwMCU7XG4gIGJveC1zaXppbmcgICAgICA6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXIgICAgICAgICAgOiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b20gICA6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgIWltcG9ydGFudDtcbn1cblxuaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lICAgICAgOiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3VjY2VzcykgIWltcG9ydGFudDtcbn1cblxuLmVycm9yLW1lc3NhZ2Uge1xuICBmb250LXNpemUgIDogMTJweDtcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XG5cbn1cblxuI2VkaXQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNzb2NpYWwtaWNvbiB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLnVwZGF0ZS1idG4ge1xuICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZCAgIDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBjb2xvciAgICAgICAgOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBoZWlnaHQgICAgICAgOiAyNXB4O1xuICB3aWR0aCAgICAgICAgOiAyNSU7XG4gIHRleHQtYWxpZ24gICA6IGNlbnRlcjtcbiAgYm9yZGVyICAgICAgIDogMXB4IHNvbGlkICNmZmY7XG4gIGZvbnQtc2l6ZSAgICA6IDEycHggIWltcG9ydGFudDtcbiAgcGFkZGluZyAgICAgIDogM3B4O1xuICBtYXJnaW4gICAgICAgOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jYW5jZWwtYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQgICA6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICBjb2xvciAgICAgICAgOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBoZWlnaHQgICAgICAgOiAyNXB4O1xuICB3aWR0aCAgICAgICAgOiAyNSU7XG4gIHRleHQtYWxpZ24gICA6IGNlbnRlcjtcbiAgYm9yZGVyICAgICAgIDogMXB4IHNvbGlkICNmZmY7XG4gIGZvbnQtc2l6ZSAgICA6IDEycHggIWltcG9ydGFudDtcbiAgcGFkZGluZyAgICAgIDogM3B4O1xuICBtYXJnaW4gICAgICAgOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10b2dnbGUge1xuICAtLWhhbmRsZS1ib3gtc2hhZG93OiAwIDNweCAxMnB4IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSwgMCAzcHggMXB4IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgb3ZlcmZsb3cgICAgICAgICAgIDogdmlzaWJsZTtcbiAgY29udGFpbiAgICAgICAgICAgIDogbm9uZTtcbiAgY29sb3IgICAgICAgICAgICAgIDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XG5cbn1cblxuaW9uLWJhZGdlIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0ICA6IC0xMHB4ICFpbXBvcnRhbnQ7XG5cbn1cblxuI2NhcmQge1xuICBwb3NpdGlvbiAgICAgICAgOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0ICAgICAgICAgIDogMTUwJTtcbiAgd2lkdGggICAgICAgICAgIDogMTUwMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0ICAgICA6IC0xMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIGJvcmRlciAgICAgICAgICA6IDFweCBzb2xpZCAjZWJlNmU2O1xuICBib3JkZXItcmFkaXVzICAgOiA1cHg7XG4gIGJveC1zaGFkb3cgICAgICA6IDJweCAycHggMnB4IDJweCAjY2NjO1xuICBtYXJnaW4tdG9wICAgICAgOiAtMjg1cHggIWltcG9ydGFudDtcbiAgei1pbmRleCAgICAgICAgIDogNTtcbn1cblxuI21vZGFsIHtcbiAgcG9zaXRpb24gICAgICAgICAgIDogZml4ZWQ7XG4gIHRvcCAgICAgICAgICAgICAgICA6IDE4JSAhaW1wb3J0YW50O1xuICBtYXJnaW4gICAgICAgICAgICAgOiA1JTtcbiAgYmFja2dyb3VuZC1jb2xvciAgIDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgYm9yZGVyICAgICAgICAgICAgIDogMXB4IHNvbGlkICNlYmU2ZTY7XG4gIGJvcmRlci1yYWRpdXMgICAgICA6IDVweDtcbiAgLy8gYm94LXNoYWRvdzogMnB4IDJweCAycHggMnB4ICNjY2M7XG4gIHdpZHRoICAgICAgICAgICAgICA6IDk0JSAhaW1wb3J0YW50O1xuICBhbmltYXRpb24tbmFtZSAgICAgOiBleGFtcGxlO1xuICBhbmltYXRpb24tZHVyYXRpb24gOiAxcztcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG5cbn1cblxuQGtleWZyYW1lcyBleGFtcGxlIHtcbiAgZnJvbSB7XG4gICAgdG9wOiAwcHg7XG4gIH1cblxuICB0byB7XG4gICAgdG9wICAgICAgICAgICAgIDogMjAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgfVxufVxuXG4uc3VibWl0LWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICBjb2xvciAgICAgICAgICAgOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuXG5cbi5wcm9maWxlIHtcbiAgYm9yZGVyICAgICAgIDogMXB4IHNvbGlkICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm94LXNoYWRvdyAgIDogMCA0cHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIG1hcmdpbiAgICAgICA6IDclO1xuICB3aWR0aCAgICAgICAgOiAxMjVweDtcbiAgaGVpZ2h0ICAgICAgIDogMTI1cHg7XG4gIHBhZGRpbmcgICAgICA6IDVweDtcbn1cblxuLmVkaXRwcm9maWxlIHtcbiAgd2lkdGggICAgICAgIDogMTU1cHg7XG4gIGhlaWdodCAgICAgICA6IDE1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi51cGxvYWQtcHJvZmYge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzIzYTZkNSAwJSwgIzIzZDVhYiAxMDAlKTtcbiAgY29sb3IgICAgIDogI2ZmZiAhaW1wb3J0YW50O1xuXG59XG5cbi53ZWxjb21lY2FyZCB7XG4gIGJhY2tncm91bmQgICAgIDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgYm9yZGVyLXJhZGl1cyAgOiAxOHB4O1xuICBib3gtc2hhZG93ICAgICA6IDAgNHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOC4ycHgpO1xuICBib3JkZXIgICAgICAgICA6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpICFpbXBvcnRhbnQ7XG4gIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIGRhcmt0dXJxdW9pc2VcbiAgLy8gMCUsICNkMWYyZTdcbiAgLy8gMTAwJSkgIWltcG9ydGFudDtcbiAgLS1vZmZzZXQtYm90dG9tICAgOiBhdXRvICFpbXBvcnRhbnQ7XG4gIC0tb3ZlcmZsb3cgICAgICAgIDogaGlkZGVuO1xuICBvdmVyZmxvdyAgICAgICAgICA6IGF1dG87XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuaW9uLXRvZ2dsZTpkaXNhYmxlZCxcbmlvbi10b2dnbGVbZGlzYWJsZWRdIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnN1Ym1pdC1idG4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmlucHV0W3R5cGU9XCJmaWxlXCJdIHtcbiAgZGlzcGxheTogbm9uZTtcblxufVxuXG4uaW5mb0ljb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoICAgOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHRvcCAgICAgOiAwO1xufVxuXG5cblxuLmV4dHJhSW5mbyB7XG4gIHBvc2l0aW9uICAgICAgICA6IGFic29sdXRlO1xuICBjb2xvciAgICAgICAgICAgOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMyYzJjZTc7XG4gIGJvcmRlci1yYWRpdXMgICA6IDVweDtcbiAgcGFkZGluZyAgICAgICAgIDogMTBweCAxMHB4O1xuICB3aWR0aCAgICAgICAgICAgOiAyMjVweDtcbiAgdGV4dC1hbGlnbiAgICAgIDogY2VudGVyO1xuICB2aXNpYmlsaXR5ICAgICAgOiBoaWRkZW47XG4gIGZvbnQtc2l6ZSAgICAgICA6IDEwcHg7XG4gIHotaW5kZXggICAgICAgICA6IDE7XG59XG5cbi5pbmZvSWNvbjpob3ZlciAuZXh0cmFJbmZvIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLnN1Y2Nlc3Mge1xuICBjb2xvciAgICA6IGdyZWVuO1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5kYW5nZXIge1xuICBjb2xvciAgICA6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4uYnV0dG9uLWVuYWJsZSB7XG4gIGJvcmRlciAgICAgICA6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZSAgICA6IDEwcHg7XG4gIHdpZHRoICAgICAgICA6IDYwcHg7XG4gIGNvbG9yICAgICAgICA6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4uYnV0dG9uLWRpc2FibGUge1xuICBib3JkZXIgICAgICAgOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIGZvbnQtc2l6ZSAgICA6IDEwcHg7XG4gIHdpZHRoICAgICAgICA6IDYwcHg7XG4gIGNvbG9yICAgICAgICA6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59Il19 */";

/***/ }),

/***/ 1503:
/*!************************************************!*\
  !*** ./src/app/tab5/tab5.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<!------------ Header  ---------------->\n<ion-toolbar color=\"light\">\n  <ion-buttons slot=\"start\">\n    <ion-menu-button style=\"margin-top:15px;color:#121212\" autoHide=\"false\">\n      <svg width=\"34\" height=\"34\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M5 7H19\" stroke=\"#121212\" stroke-width=\"2\" stroke-linecap=\"round\" />\n        <path d=\"M5 12H15\" stroke=\"#121212\" stroke-width=\"2\" stroke-linecap=\"round\" />\n        <path d=\"M5 17H11\" stroke=\"#121212\" stroke-width=\"2\" stroke-linecap=\"round\" />\n      </svg>\n    </ion-menu-button>\n  </ion-buttons>\n\n  <div class=\"row\">\n    <div class=\"col-4\">\n      <h5 style=\"color:#121212;margin-top:10px\"><b></b></h5>\n    </div>\n    <div class=\"col-8 mt-2 mx-4\" style=\"text-align: right;width: 90%;\">\n      <svg (click)=\"notification()\" style=\"margin:3px;\" width=\"26\" height=\"26\" viewBox=\"0 0 24 24\" fill=\"none\"\n        xmlns=\"http://www.w3.org/2000/svg\">\n        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\n          d=\"M13.7942 3.29494C13.2296 3.10345 12.6258 3 12 3C9.1535 3 6.7622 5.14032 6.44786 7.96942L6.19605 10.2356L6.1896 10.2933C6.06065 11.417 5.69489 12.5005 5.11646 13.4725L5.08667 13.5222L4.50863 14.4856C3.98408 15.3599 3.7218 15.797 3.77842 16.1559C3.8161 16.3946 3.93899 16.6117 4.12435 16.7668C4.40292 17 4.9127 17 5.93224 17H18.0678C19.0873 17 19.5971 17 19.8757 16.7668C20.061 16.6117 20.1839 16.3946 20.2216 16.1559C20.2782 15.797 20.0159 15.3599 19.4914 14.4856L18.9134 13.5222L18.8836 13.4725C18.4273 12.7059 18.1034 11.8698 17.9236 10.9994C15.1974 10.9586 13 8.73592 13 6C13 5.00331 13.2916 4.07473 13.7942 3.29494ZM16.2741 4.98883C16.0999 5.28551 16 5.63109 16 6C16 6.94979 16.6621 7.74494 17.5499 7.94914C17.4205 6.82135 16.9608 5.80382 16.2741 4.98883Z\"\n          fill=\"black\" />\n        <path\n          d=\"M9 17C9 17.394 9.0776 17.7841 9.22836 18.1481C9.37913 18.512 9.6001 18.8427 9.87868 19.1213C10.1573 19.3999 10.488 19.6209 10.8519 19.7716C11.2159 19.9224 11.606 20 12 20C12.394 20 12.7841 19.9224 13.1481 19.7716C13.512 19.6209 13.8427 19.3999 14.1213 19.1213C14.3999 18.8427 14.6209 18.512 14.7716 18.1481C14.9224 17.7841 15 17.394 15 17L12 17H9Z\"\n          fill=\"black\" />\n        <circle cx=\"18\" cy=\"6\" r=\"2.5\" fill=\"#eb154b\" stroke=\"#eb154b\" />\n      </svg>\n\n      <!-- <ion-badge style=\"border-radius: 50%;margin-left: -14px ;color:#eb154b ;font-size: 12px;\" color=\"light\">10</ion-badge> -->\n\n    </div>\n  </div>\n</ion-toolbar>\n\n<ion-content>\n\n  <div style=\"width: 95%;margin: auto;\" class=\"row welcomecard ion-text-center mt-3\">\n\n    <div class=\"col-12 ion-text-right\">\n      <svg style=\"margin-top: 6px;\" (click)=\"popupModelOpen()\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"15\" fill=\"currentColor\" class=\"bi bi-pencil-fill\" viewBox=\"0 0 16 16\">\n        <path d=\"M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z\"/>\n      </svg>\n    </div>\n    <div class=\"col-5\">\n      <img class=\"profile\" src=\"{{storelogo}}\" alt=\"\" *ngIf=\"imagefound\">\n      <img class=\"profile\" src=\"../../assets/imagenotavilable.png\" alt=\"\" *ngIf=\"noimagefound\">\n    </div>\n    <div class=\"col-7 ion-text-left\">\n      <h4>\n        <svg width=\"18\" height=\"18\" viewBox=\"0 0 100 94\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path\n            d=\"M88.1484 40.9781C87.4315 41.0699 86.6961 41.125 85.924 41.125C81.1442 41.125 76.8792 39.032 73.9562 35.8008C71.0333 39.032 66.7683 41.125 61.9701 41.125C57.172 41.125 52.907 39.032 49.984 35.8008C47.061 39.032 42.8144 41.125 37.9979 41.125C33.2181 41.125 28.9531 39.032 26.0301 35.8008C23.1071 39.032 18.8421 41.125 14.0366 41.125C13.2903 41.125 12.5384 41.0699 11.8085 40.9781C1.63871 39.6195 -3.1732 27.6492 2.2656 19.057L12.8049 2.41059C13.7425 0.914113 15.4172 0 17.206 0H82.7988C84.582 0 86.2549 0.91393 87.1925 2.41059L97.7263 19.057C103.186 27.6676 98.3513 39.6195 88.1484 40.9781ZM88.9205 46.798C89.5456 46.7062 90.4464 46.5594 91.1817 46.3758V82.25C91.1817 88.7309 85.9056 94 79.4162 94H20.5886C14.0918 94 8.82304 88.7309 8.82304 82.25V46.3758C9.53449 46.5594 10.268 46.7062 11.0236 46.798H11.0456C12.0126 46.9266 13.02 47 14.0366 47C16.3236 47 18.5296 46.6512 20.5886 46.0086V70.5H79.4162V46.027C81.4752 46.6512 83.6628 47 85.924 47C86.9535 47 87.9462 46.9266 88.9205 46.798Z\"\n            fill=\"black\" />\n        </svg>\n\n        <b> &nbsp;{{userdetails}}\n         \n        </b>\n      </h4>\n      <h6>\n        <svg width=\"18\" height=\"15\" viewBox=\"0 0 111 112\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path\n            d=\"M110.827 83.9017L105.786 105.755C105.078 108.844 102.363 111.006 99.1824 111.006C44.4867 111.001 0 66.5145 0 11.8167C0 8.63846 2.16125 5.91983 5.25082 5.21524L27.1039 0.174714C30.2865 -0.562829 33.5385 1.08916 34.8609 4.10307L44.9463 27.6255C46.1253 30.3962 45.3301 33.6243 42.9995 35.5278L31.3271 44.8999C38.6939 59.9066 50.8952 72.1079 65.9062 79.479L75.4627 67.8153C77.3462 65.4783 80.5986 64.6696 83.3692 65.8696L106.892 75.9528C109.721 77.4411 111.564 80.7364 110.827 83.9017Z\"\n            fill=\"black\" />\n        </svg>\n        &nbsp;<span *ngIf=\"ContactNumberCheck\"><b>Not Availabale</b></span>\n        <b> &nbsp;{{store_number}}</b>\n      </h6>\n\n      <h6>\n        <svg width=\"14\" height=\"12\" viewBox=\"0 0 14 13\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path\n            d=\"M0 1.5C0 0.671562 0.606573 0 1.35484 0C2.1031 0 2.70968 0.671562 2.70968 1.5C2.70968 2.32812 2.1031 3 1.35484 3C0.606573 3 0 2.32812 0 1.5ZM13.0968 0.5C13.5964 0.5 14 0.947812 14 1.5C14 2.05313 13.5964 2.5 13.0968 2.5H4.96774C4.46815 2.5 4.06452 2.05313 4.06452 1.5C4.06452 0.947812 4.46815 0.5 4.96774 0.5H13.0968ZM13.0968 5.5C13.5964 5.5 14 5.94687 14 6.5C14 7.05313 13.5964 7.5 13.0968 7.5H4.96774C4.46815 7.5 4.06452 7.05313 4.06452 6.5C4.06452 5.94687 4.46815 5.5 4.96774 5.5H13.0968ZM13.0968 10.5C13.5964 10.5 14 10.9469 14 11.5C14 12.0531 13.5964 12.5 13.0968 12.5H4.96774C4.46815 12.5 4.06452 12.0531 4.06452 11.5C4.06452 10.9469 4.46815 10.5 4.96774 10.5H13.0968ZM0 11.5C0 10.6719 0.606573 10 1.35484 10C2.1031 10 2.70968 10.6719 2.70968 11.5C2.70968 12.3281 2.1031 13 1.35484 13C0.606573 13 0 12.3281 0 11.5ZM2.70968 6.5C2.70968 7.32812 2.1031 8 1.35484 8C0.606573 8 0 7.32812 0 6.5C0 5.67188 0.606573 5 1.35484 5C2.1031 5 2.70968 5.67188 2.70968 6.5Z\"\n            fill=\"black\" />\n        </svg>\n        &nbsp;<span><b>{{store_category}} </b></span>\n        &nbsp;\n      </h6>\n\n    </div>\n  </div>\n\n\n  <div style=\"width:100%;text-align: center;\">\n    <div class=\"myproduct-div mt-3 mb-3\">\n\n      <!---------Profile_Page_Details----------->\n      <div class=\"row mt-1\" style=\"padding: 10px;\">\n\n        <div class=\"col-6\">\n          <p class=\"name\">Email:</p>\n        </div>\n        <div class=\"col-6\">\n          <input type=\"text\" id=\"edit-field\" disabled [(ngModel)]=\"EmailID\">\n        </div>\n        <div class=\"col-6\">\n          <p class=\"name\">Store location :</p>\n        </div>\n        <div class=\"col-6\">\n          <input type=\"text\" id=\"edit-field\" [(ngModel)]=\"location == 'null' ? 'Not Available': location\" disabled>\n        </div>\n        <div class=\"col-6\">\n          <p class=\"name\">Mobile number :</p>\n        </div>\n        <div class=\"col-6\">\n          <input type=\"text\" id=\"edit-field\" [(ngModel)]=\"userMobileNumber\" disabled>\n        </div>\n\n        <!---------Proof-Section----------->\n        <div class=\"row\" style=\"padding-left: 10px;\">\n          <div class=\"col-6\">\n            <p class=\"name mt-2\">Id Proof\n              <span class=\"infoIcon\">\n                <img src=\"assets/icon/i.png\" alt=\"info icon\" width=\"15px\">\n\n                <p class=\"extraInfo\">Aadhar Card,\n                  Driving License,<br>\n                  Pan Card </p>\n              </span>\n            </p>\n\n          </div>\n          <div class=\"col-2\">\n            <label class=\"btn btn-default\" style=\"font-size: 13px;\" (change)=\"MediaFileSelected_idproof($event)\">\n              <svg width=\"23\" height=\"20\" viewBox=\"0 0 23 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path\n                  d=\"M0 2.5C0 1.11914 1.14401 0 2.55556 0H8.94444V5C8.94444 5.69141 9.51545 6.25 10.2222 6.25H15.3333V7.75781C12.3825 8.57422 10.2222 11.2266 10.2222 14.375C10.2222 16.6836 11.3842 18.7227 13.1651 19.9727C13.0413 19.9883 12.9095 20 12.7778 20H2.55556C1.14401 20 0 18.8789 0 17.5V2.5ZM10.2222 5V0L15.3333 5H10.2222ZM11.5 14.375C11.5 11.2695 14.0755 8.75 17.25 8.75C20.4245 8.75 23 11.2695 23 14.375C23 17.4805 20.4245 20 17.25 20C14.0755 20 11.5 17.4805 11.5 14.375ZM17.8889 11.8398C17.8889 11.5313 17.6014 11.2148 17.25 11.2148C16.8986 11.2148 16.6111 11.5313 16.6111 11.8398V13.7148H14.6944C14.3431 13.7148 14.0556 14.0313 14.0556 14.3398C14.0556 14.7188 14.3431 14.9648 14.6944 14.9648H16.6111V16.8398C16.6111 17.2188 16.8986 17.4648 17.25 17.4648C17.6014 17.4648 17.8889 17.2188 17.8889 16.8398V14.9648H19.8056C20.1569 14.9648 20.4444 14.7188 20.4444 14.3398C20.4444 14.0313 20.1569 13.7148 19.8056 13.7148H17.8889V11.8398Z\"\n                  fill=\"black\" />\n              </svg>\n              <input type=\"file\" class=\"\" name=\"image\" accept=\".pdf\">\n            </label>\n\n          </div>\n\n          <div class=\"col-4 ion-text-center mt-1\">\n            <p>\n              <span [ngClass]='idProofExist == true ? \"success\" : \"danger\"' class=\"small\"> ({{id_proof}})</span>\n            </p>\n          </div>\n        </div>\n\n        <div class=\"row\" style=\"padding-left: 10px;\">\n          <div class=\"col-6\">\n            <p class=\"name mt-2 \">Address Proof <span class=\"infoIcon\">\n                <img src=\"assets/icon/i.png\" alt=\"info icon\" width=\"15px\">\n\n                <p class=\"extraInfo\">GST,\n                  Stores and establishments registered certificate,\n                  Roc,\n                  FSSAI for food related business</p>\n              </span></p>\n          </div>\n          <div class=\"col-2\">\n            <label class=\"btn btn-default\" style=\"font-size: 13px;\" (change)=\"MediaFileSelected_addressproof($event)\">\n              <svg width=\"23\" height=\"20\" viewBox=\"0 0 23 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path\n                  d=\"M0 2.5C0 1.11914 1.14401 0 2.55556 0H8.94444V5C8.94444 5.69141 9.51545 6.25 10.2222 6.25H15.3333V7.75781C12.3825 8.57422 10.2222 11.2266 10.2222 14.375C10.2222 16.6836 11.3842 18.7227 13.1651 19.9727C13.0413 19.9883 12.9095 20 12.7778 20H2.55556C1.14401 20 0 18.8789 0 17.5V2.5ZM10.2222 5V0L15.3333 5H10.2222ZM11.5 14.375C11.5 11.2695 14.0755 8.75 17.25 8.75C20.4245 8.75 23 11.2695 23 14.375C23 17.4805 20.4245 20 17.25 20C14.0755 20 11.5 17.4805 11.5 14.375ZM17.8889 11.8398C17.8889 11.5313 17.6014 11.2148 17.25 11.2148C16.8986 11.2148 16.6111 11.5313 16.6111 11.8398V13.7148H14.6944C14.3431 13.7148 14.0556 14.0313 14.0556 14.3398C14.0556 14.7188 14.3431 14.9648 14.6944 14.9648H16.6111V16.8398C16.6111 17.2188 16.8986 17.4648 17.25 17.4648C17.6014 17.4648 17.8889 17.2188 17.8889 16.8398V14.9648H19.8056C20.1569 14.9648 20.4444 14.7188 20.4444 14.3398C20.4444 14.0313 20.1569 13.7148 19.8056 13.7148H17.8889V11.8398Z\"\n                  fill=\"black\" />\n              </svg>\n\n\n              <input type=\"file\" class=\"\" name=\"image\" accept=\".pdf\">\n            </label>\n          </div>\n\n          <div class=\"col-4 ion-text-center mt-1\">\n            <p>\n              <span [ngClass]='addidProofExist == true ? \"success\" : \"danger\"' class=\"small\"> ({{addressProof}})</span>\n            </p>\n          </div>\n\n        </div>\n\n      </div>\n      <!---------Proof-Upload----------->\n      <button (click)=\"submitidProof()\" class=\"btn btn-sm submit-btn mb-1\" *ngIf=\"idSubmitButtonProof\">SUBMIT</button>\n      <button (click)=\"submitaddressProof()\" class=\"btn btn-sm submit-btn mb-1\"\n        *ngIf=\"addressSubmitButtonProof\">SUBMIT</button>\n    </div>\n  </div>\n\n\n\n  <div class=\"myproduct-div mt-1 mb-3\">\n    <div class=\"row ion-text-center \">\n      <div class=\"col-8 pt-2 mt-1\">\n        <p style=\"font-size: 14px;\" class=\"\">\n\n          <!---------  Delivery icon ---------->\n\n          <svg width=\"38\" height=\"20\" viewBox=\"0 0 38 30\" fill=\"none\">\n            <path\n              d=\"M6.65 0C5.07597 0 3.8 1.25918 3.8 2.8125V5.625H0.95C0.425303 5.625 0 6.04687 0 6.5625C0 7.07813 0.425303 7.5 0.95 7.5H16.15C16.6725 7.5 17.1 7.92187 17.1 8.4375C17.1 8.95313 16.6725 9.375 16.15 9.375H2.85C2.32512 9.375 1.9 9.79687 1.9 10.3125C1.9 10.8281 2.32512 11.25 2.85 11.25H14.25C14.7725 11.25 15.2 11.6719 15.2 12.1875C15.2 12.7031 14.7725 13.125 14.25 13.125H0.95C0.425303 13.125 0 13.5469 0 14.0625C0 14.5781 0.425303 15 0.95 15H12.35C12.8725 15 13.3 15.4219 13.3 15.9375C13.3 16.4531 12.8725 16.875 12.35 16.875H3.8V24.375C3.8 27.4805 6.29969 30 9.5 30C12.6469 30 15.2 27.4805 15.2 24.375H22.8C22.8 27.4805 25.2997 30 28.5 30C31.6469 30 34.2 27.4805 34.2 24.375H36.1C37.1509 24.375 38 23.5371 38 22.5C38 21.4629 37.1509 20.625 36.1 20.625V13.9043C36.1 12.9082 35.7022 11.9531 34.9897 11.25L30.4 6.7207C29.6341 6.01758 28.7197 5.625 27.7103 5.625H24.7V2.8125C24.7 1.25918 23.4234 0 21.85 0H6.65ZM32.3 13.9043V15H24.7V9.375H27.7103L32.3 13.9043ZM9.5 27.1875C7.92656 27.1875 6.65 25.9277 6.65 24.375C6.65 22.8223 7.92656 21.5625 9.5 21.5625C11.0734 21.5625 12.35 22.8223 12.35 24.375C12.35 25.9277 11.0734 27.1875 9.5 27.1875ZM31.35 24.375C31.35 25.9277 30.0734 27.1875 28.5 27.1875C26.9266 27.1875 25.65 25.9277 25.65 24.375C25.65 22.8223 26.9266 21.5625 28.5 21.5625C30.0734 21.5625 31.35 22.8223 31.35 24.375Z\"\n              fill=\"#121212\" />\n          </svg>\n          Delivery Avilability:\n        </p>\n      </div>\n      <div class=\"col-4 pt-2 mt-2\">\n        <p *ngIf=\"delivery_availability_button_enabled\" class=\"small button-enable\">Enabled</p>\n        <p *ngIf=\"delivery_availability_button_disabled\" class=\"small button-disable\">Disabled</p>\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"myproduct-div mt-2 mb-3\">\n    <p class=\"title mt-3\" style=\"font-size:16px;margin-left:10px;margin-top:10px;\">Select how customers can reach you\n      <!-- <span (click)=\"contactEdit()\" class=\"px-2 submit-btn\">\n        <svg   style=\"margin: 5px;\" width=\"26\" height=\"26\" viewBox=\"0 0 24 24\" fill=\"none\" >\n          <path d=\"M13.5 5.5L6.45321 12.5468C6.22845 12.7716 6.11607 12.8839 6.04454 13.0229C5.97301 13.1619 5.94689 13.3187 5.89463 13.6322L5.11508 18.3095C5.06262 18.6243 5.03639 18.7817 5.12736 18.8726C5.21833 18.9636 5.37571 18.9374 5.69048 18.8849L10.3678 18.1054L10.3678 18.1054C10.6813 18.0531 10.8381 18.027 10.9771 17.9555C11.1161 17.8839 11.2284 17.7716 11.4532 17.5468L11.4532 17.5468L18.5 10.5C19.5171 9.48295 20.0256 8.97442 20.1384 8.36277C20.1826 8.12295 20.1826 7.87705 20.1384 7.63723C20.0256 7.02558 19.5171 6.51705 18.5 5.5C17.4829 4.48295 16.9744 3.97442 16.3628 3.8616C16.1229 3.81737 15.8771 3.81737 15.6372 3.8616C15.0256 3.97442 14.5171 4.48294 13.5 5.5Z\" fill=\"#0D0D0D\"/>\n          <path d=\"M12.2929 6.70711L6.45321 12.5468C6.22845 12.7716 6.11607 12.8839 6.04454 13.0229C5.97301 13.1619 5.94689 13.3187 5.89463 13.6322L5.11508 18.3095C5.06262 18.6243 5.03639 18.7817 5.12736 18.8726C5.21833 18.9636 5.37571 18.9374 5.69048 18.8849L10.3678 18.1054L10.3678 18.1054C10.6813 18.0531 10.8381 18.027 10.9771 17.9555C11.1161 17.8839 11.2284 17.7716 11.4532 17.5468L11.4532 17.5468L17.2929 11.7071C17.6262 11.3738 17.7929 11.2071 17.7929 11C17.7929 10.7929 17.6262 10.6262 17.2929 10.2929L17.2929 10.2929L13.7071 6.70711C13.3738 6.37377 13.2071 6.20711 13 6.20711C12.7929 6.20711 12.6262 6.37377 12.2929 6.70711Z\" fill=\"#0D0D0D\"/>\n          </svg>\n        </span> -->\n\n\n        <ion-button style=\"width: 25%;\"  class=\"secondarySmallBtn mt-2\" color=\"none\" (click)=\"contactEdit()\">\n          <svg style=\"margin: 2px;\" width=\"22\" height=\"22\" fill=\"currentColor\"\n          class=\"bi bi-pencil-square\" viewBox=\"0 0 16 16\">\n          <path\n            d=\"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z\" />\n          <path fill-rule=\"evenodd\"\n            d=\"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z\" />\n        </svg>\n        EDIT</ion-button>\n\n\n      <!-- <span (click)=\"contactview()\" class=\"px-2 submit-btn\">\n        <svg width=\"26\" height=\"21\" viewBox=\"0 0 26 21\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path d=\"M13.4138 5.77127C13.2875 5.75674 13.1612 5.7512 13.0348 5.75014C10.6425 5.7302 8.68587 7.60517 8.66568 10.0264C8.64584 12.4071 10.5706 14.3549 12.9629 14.3748C15.3958 14.3951 17.3122 12.4794 17.3321 10.0986C17.3331 9.97284 17.3296 9.84702 17.3171 9.72113C16.8957 9.91977 16.4067 10.0909 15.8877 10.0866C14.2943 10.0733 13.0096 8.77328 13.0228 7.18759C13.0271 6.67101 13.2072 6.18734 13.4138 5.77127ZM4.35912 3.54845C2.23044 5.48038 0.798506 7.76404 0.11677 9.40255C-0.0351415 9.75618 -0.0384367 10.1515 0.107558 10.5076C0.762222 12.1168 2.15589 14.424 4.25172 16.4316C6.36129 18.4168 9.2679 20.0942 12.915 20.1246C16.5621 20.155 19.4963 18.5263 21.6377 16.5765C23.7667 14.6042 25.1978 12.3205 25.8827 10.7224C26.0338 10.3688 26.0371 9.97351 25.8919 9.61741C25.234 7.96773 23.8413 5.66053 21.7451 3.69338C19.6364 1.70995 16.7298 0.0307427 13.0827 0.000340955C9.43565 -0.0300608 6.50147 1.60046 4.35912 3.54845ZM13.0528 3.59397C16.6412 3.62388 19.5284 6.54551 19.4986 10.1167C19.4689 13.6878 16.5334 16.5609 12.9449 16.531C9.35653 16.5011 6.46933 13.5795 6.49909 10.0083C6.52886 6.43715 9.46437 3.56405 13.0528 3.59397Z\" fill=\"#0D0D0D\"/>\n          </svg>  \n      </span> -->\n\n    </p>\n\n    <!---------Social-Media-Details and Toggle------------>\n    <div style=\"margin-top: -4%;\" class=\"row\">\n      <div class=\"col-2 p-4\">\n        <svg width=\"30\" height=\"30\" viewBox=\"0 0 448 448\" fill=\"none\">\n          <path\n            d=\"M384 0H64C28.65 0 0 28.65 0 64V384C0 419.35 28.65 448 64 448H384C419.35 448 448 419.35 448 384V64C448 28.65 419.3 0 384 0ZM351.6 289.5L339.98 339.89C338.347 347.015 332.08 352 324.74 352C198.64 352 96.04 249.4 96.04 123.2C96.04 115.872 101.024 109.61 108.15 107.98L158.53 96.35C165.874 94.647 173.41 98.459 176.46 105.412L199.73 159.692C202.449 166.083 200.613 173.522 195.238 177.912L168.3 200C185.29 234.61 213.44 262.75 248.07 279.75L270.09 252.84C274.434 247.449 281.94 245.59 288.33 248.356L342.57 271.606C349.5 274.6 353.3 282.2 351.6 289.5Z\"\n            fill=\"black\" />\n        </svg>\n\n      </div>\n      <div class=\"col-8 text-left mt-3\">\n        <p class=\"title\" style=\"margin-top:12px;margin-left:20%;font-size: 15px;\" *ngIf=\"ContactNumberChecked\">Contact\n          Number</p>\n        <p *ngIf=\"ContactNumberCheck\" style=\"margin-left: 20%;\">Contact Number<br> Not Available</p>\n      </div>\n      <div class=\"col-2 \">\n        <ion-toggle style=\"margin-left:-25px;margin-top: 18px;\" checked=\"{{ContactNumberToggle}}\" color=\"primary\"\n          (click)=\"contactToggle()\" [disabled]=\"ContactNumberCheck\">\n        </ion-toggle>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-2 p-4\">\n        <svg width=\"30\" height=\"30\" viewBox=\"0 0 72 72\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path\n            d=\"M20.9941 0C9.41714 0 0 9.42586 0 21.0059V51.0059C0 62.5829 9.42586 72 21.0059 72H51.0059C62.5829 72 72 62.5741 72 50.9941V20.9941C72 9.41714 62.5741 0 50.9941 0H20.9941ZM57 12C58.656 12 60 13.344 60 15C60 16.656 58.656 18 57 18C55.344 18 54 16.656 54 15C54 13.344 55.344 12 57 12ZM36 18C45.927 18 54 26.073 54 36C54 45.927 45.927 54 36 54C26.073 54 18 45.927 18 36C18 26.073 26.073 18 36 18ZM36 24C32.8174 24 29.7652 25.2643 27.5147 27.5147C25.2643 29.7652 24 32.8174 24 36C24 39.1826 25.2643 42.2348 27.5147 44.4853C29.7652 46.7357 32.8174 48 36 48C39.1826 48 42.2348 46.7357 44.4853 44.4853C46.7357 42.2348 48 39.1826 48 36C48 32.8174 46.7357 29.7652 44.4853 27.5147C42.2348 25.2643 39.1826 24 36 24V24Z\"\n            fill=\"black\" />\n        </svg>\n\n      </div>\n      <div class=\"col-8 text-left mt-3\">\n        <p class=\"title\" style=\"margin-top:12px;margin-left:20%;font-size: 15px;\" *ngIf=\"InstagramChecked\">Instagram</p>\n        <p *ngIf=\"InstagramCheck\" style=\"margin-left: 20%;\">Instagram<br> Not Availabale</p>\n\n      </div>\n      <div class=\"col-2 \">\n        <ion-toggle style=\"margin-left:-25px;margin-top: 18px;\" color=\"primary\" checked=\"{{InstagramToggle}}\"\n          (click)=\"instagramToggle()\" [disabled]=\"InstagramCheck\">\n        </ion-toggle>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-2 p-4\">\n        <svg width=\"30\" height=\"30\" viewBox=\"0 0 72 72\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path\n            d=\"M36 0C16.119 0 0 16.119 0 36C0 42.7536 1.89702 49.0502 5.13281 54.4512L0.322266 72L18.2461 67.2949C23.4881 70.2752 29.5395 72 36 72C55.881 72 72 55.881 72 36C72 16.119 55.881 0 36 0ZM23.6777 19.207C24.2627 19.207 24.8638 19.2035 25.3828 19.2305C26.0248 19.2455 26.7236 19.2925 27.3926 20.7715C28.1876 22.5295 29.9186 26.9397 30.1406 27.3867C30.3626 27.8337 30.5199 28.3603 30.2109 28.9453C29.9169 29.5453 29.764 29.9085 29.332 30.4395C28.885 30.9555 28.3952 31.5963 27.9902 31.9863C27.5432 32.4333 27.0817 32.9235 27.5977 33.8145C28.1137 34.7055 29.9057 37.6264 32.5547 39.9844C35.9597 43.0264 38.8326 43.9612 39.7266 44.4082C40.6206 44.8552 41.1383 44.7855 41.6543 44.1855C42.1853 43.6005 43.8844 41.5932 44.4844 40.6992C45.0694 39.8052 45.6666 39.9599 46.4766 40.2539C47.2986 40.5479 51.6822 42.7073 52.5762 43.1543C53.4702 43.6013 54.0562 43.8225 54.2812 44.1855C54.5122 44.5605 54.5125 46.3457 53.7715 48.4277C53.0305 50.5067 49.3918 52.5172 47.7598 52.6582C46.1128 52.8112 44.5757 53.3985 37.0547 50.4375C27.9827 46.8645 22.2615 37.5727 21.8145 36.9727C21.3675 36.3877 18.1816 32.1417 18.1816 27.7617C18.1816 23.3667 20.486 21.2143 21.293 20.3203C22.115 19.4263 23.0777 19.207 23.6777 19.207Z\"\n            fill=\"black\" />\n        </svg>\n\n      </div>\n      <div class=\"col-8 text-left mt-3\">\n        <p class=\"title\" style=\"margin-top:12px;margin-left:20%;font-size: 15px;\" *ngIf=\"WhatsappChecked\">Whatsapp\n        </p>\n        <p *ngIf=\"WhatsappCheck\" style=\"margin-left: 20%;\">Whatsapp<br> Not Availabale</p>\n      </div>\n      <div class=\"col-2 \">\n        <ion-toggle style=\"margin-left:-25px;margin-top: 18px;\" checked=\"{{WhatsappToggle}}\" color=\"primary\"\n          (click)=\"whatsappToggle()\" [disabled]=\"WhatsappCheck\"></ion-toggle>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-2 p-4\">\n        <svg width=\"30\" height=\"30\" viewBox=\"0 0 448 448\" fill=\"none\">\n          <path\n            d=\"M308 224C308 243.425 306.95 262.15 305.113 280H142.888C141.05 262.15 139.213 243.425 139.213 224C139.213 204.575 141.05 185.85 142.888 168H305.113C306.95 185.85 308 204.575 308 224ZM440.912 168C445.55 185.938 448 204.662 448 224C448 243.338 445.55 262.062 440.912 280H333.2C335.037 261.975 336 242.463 336 224C336 204.75 335.037 186.025 333.2 168H440.912ZM431.725 140H329.613C320.863 84.1225 303.537 37.2925 281.225 7.38675C349.825 25.4538 405.475 75.1975 431.725 140ZM301.262 140H146.737C152.075 108.15 160.3 79.9575 170.362 57.1812C179.55 36.5225 189.787 21.5338 199.675 12.0838C209.475 2.78075 217.612 0 224 0C230.388 0 238.525 2.78075 248.325 12.0838C258.212 21.5338 268.45 36.5225 277.637 57.1812C287.7 79.9575 295.925 108.15 301.262 140ZM16.2838 140C42.5163 75.1975 98.175 25.4538 166.775 7.38675C144.463 37.2925 127.138 84.1225 118.388 140H16.2838ZM114.8 168C112.962 186.025 111.212 204.75 111.212 224C111.212 242.463 112.962 261.975 114.8 280H7.05687C2.45 262.062 0 243.338 0 224C0 204.662 2.45 185.938 7.05687 168H114.8ZM170.362 390.775C160.3 368.025 152.075 339.85 146.737 308H301.262C295.925 339.85 287.7 368.025 277.637 390.775C268.45 411.513 258.212 426.475 248.325 435.925C238.525 445.2 230.388 448 223.213 448C217.613 448 209.475 445.2 199.675 435.925C189.787 426.475 179.55 411.513 170.362 390.775ZM166.775 440.65C98.175 422.538 42.5163 372.837 16.2838 308H118.388C127.138 363.913 144.463 410.725 166.775 440.65ZM281.225 440.65C303.537 410.725 320.863 363.913 329.613 308H431.725C405.475 372.837 349.825 422.538 281.225 440.65Z\"\n            fill=\"black\" />\n        </svg>\n\n      </div>\n      <div class=\"col-8 text-left mt-3\">\n        <p class=\"title\" style=\"margin-top:12px;margin-left:20%;font-size: 15px;\" *ngIf=\"WebsiteChecked\"> Website</p>\n        <p *ngIf=\"WebsiteCheck\" style=\"margin-left: 20%;\">Website Link <br> Not Availabale</p>\n      </div>\n      <div class=\"col-2 \">\n        <ion-toggle style=\"margin-left:-25px;margin-top: 18px;\" checked=\"{{WebsiteToggle}}\" color=\"primary\"\n          (click)=\"websiteToggle()\" [disabled]=\"WebsiteCheck\"></ion-toggle>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-2 p-4\">\n        <svg width=\"30\" height=\"30\" fill=\"currentColor\" class=\"bi bi-youtube\" viewBox=\"0 0 16 16\">\n          <path\n            d=\"M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z\" />\n        </svg>\n\n      </div>\n      <div class=\"col-8 text-left mt-3\">\n        <p class=\"title\" style=\"margin-top:12px;margin-left:20%;font-size: 15px;\" *ngIf=\"YoutubeChecked\">Youtube</p>\n\n        <p *ngIf=\"YoutubeCheck\" style=\"margin-left: 20%;\">Youtube <br> Not Availabale</p>\n      </div>\n      <div class=\"col-2 \">\n        <ion-toggle style=\"margin-left:-25px;margin-top: 18px;\" checked=\"{{YoutubeToggle}}\" color=\"primary\"\n          (click)=\"youtubeToggle()\" [disabled]=\"YoutubeCheck\"></ion-toggle>\n      </div>\n    </div>\n\n\n\n\n\n\n    <div class=\"row mb-2\">\n      <div class=\"col-2 p-4\">\n        <svg width=\"30\" height=\"30\" viewBox=\"0 0 15 15\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path\n            d=\"M13.3929 0H1.60714C1.1809 0 0.772119 0.167913 0.470721 0.466799C0.169323 0.765685 0 1.17106 0 1.59375L0 13.2812C0 13.7039 0.169323 14.1093 0.470721 14.4082C0.772119 14.7071 1.1809 14.875 1.60714 14.875H6.20257V9.81783H4.09319V7.4375H6.20257V5.62328C6.20257 3.55971 7.44141 2.41984 9.33884 2.41984C10.2475 2.41984 11.1978 2.58055 11.1978 2.58055V4.60594H10.1508C9.1192 4.60594 8.79743 5.24078 8.79743 5.89189V7.4375H11.1003L10.732 9.81783H8.79743V14.875H13.3929C13.8191 14.875 14.2279 14.7071 14.5293 14.4082C14.8307 14.1093 15 13.7039 15 13.2812V1.59375C15 1.17106 14.8307 0.765685 14.5293 0.466799C14.2279 0.167913 13.8191 0 13.3929 0V0Z\"\n            fill=\"black\" />\n        </svg>\n\n      </div>\n      <div class=\"col-8 text-left mt-3\">\n        <p class=\"title\" style=\"margin-top:12px;margin-left:20%;font-size: 15px;\" *ngIf=\"Facebookchecked\">Facebook</p>\n        <p *ngIf=\"Facebookcheck\" style=\"margin-left: 20%;\">Facebook <br> Not Availabale</p>\n      </div>\n      <div class=\"col-2 \">\n        <ion-toggle style=\"margin-left:-25px;margin-top: 18px;\" checked=\"{{FacebookToggle}}\" color=\"primary\"\n          (click)=\"facebookToggle()\" [disabled]=\"Facebookcheck\"></ion-toggle>\n      </div>\n    </div>\n\n\n  </div>\n\n  <div class=\"card\" *ngIf=\"PopupModel\" style=\"margin-top: 20px;\" id=\"card\">\n    <div class=\"row\" id=\"modal\">\n      <div class=\"hidden\">\n        <div class=\"col-12 ion-text-left \" style=\"margin-top: 20px;\">\n          <h5 class=\"title\" style=\"text-align: left;margin-top: 20px;\"> <b>Edit Here</b></h5>\n        </div>\n        \n        <div *ngIf=\"contactVisible\">\n          <!---------Edit-Social-Media-Details------------>\n          <div class=\"row ion-text-center mb-4\" id=\"social-icon\">\n            <div class=\"col-2\">\n              <svg width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-telephone\" viewBox=\"0 0 16 16\">\n                <path\n                  d=\"M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z\" />\n              </svg>\n            </div>\n            <div class=\"col-10\">\n              <input type=\"text\" id=\"edit-field\" [value]=\"contact_number\" [(ngModel)]=\"contact_number\"\n                placeholder=\"Enter Your Contact Number\">\n            </div>\n          </div>\n          <div class=\"row ion-text-center mb-4\" id=\"social-icon\">\n            <div class=\"col-2\">\n              <svg width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-instagram\" viewBox=\"0 0 16 16\">\n                <path\n                  d=\"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z\" />\n              </svg>\n            </div>\n            <div class=\"col-10\">\n              <input type=\"text\" id=\"edit-field\" [value]=\"instagram\" [(ngModel)]=\"instagram\"\n                placeholder=\"Enter Your Instagram\">\n            </div>\n          </div>\n          <div class=\"row ion-text-center mb-4\" id=\"social-icon\">\n            <div class=\"col-2\">\n              <svg width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-whatsapp\" viewBox=\"0 0 16 16\">\n                <path\n                  d=\"M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z\" />\n              </svg>\n            </div>\n            <div class=\"col-10\">\n              <input type=\"text\" id=\"edit-field\" [value]=\"whatsapp\" [(ngModel)]=\"whatsapp\"\n                placeholder=\"Enter Your Whatsapp\">\n            </div>\n          </div>\n          <div class=\"row ion-text-center mb-4\" id=\"social-icon\">\n            <div class=\"col-2\">\n              <svg width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-globe\" viewBox=\"0 0 16 16\">\n                <path\n                  d=\"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z\" />\n              </svg>\n            </div>\n            <div class=\"col-10\">\n              <input type=\"text\" id=\"edit-field\" [value]=\"website\" [(ngModel)]=\"website\"\n                placeholder=\"Enter Your Website Url\">\n            </div>\n          </div>\n          <div class=\"row ion-text-center mb-4\" id=\"social-icon\">\n            <div class=\"col-2\">\n              <svg width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-youtube\" viewBox=\"0 0 16 16\">\n                <path\n                  d=\"M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z\" />\n              </svg>\n            </div>\n            <div class=\"col-10\">\n              <input type=\"text\" id=\"edit-field\" [value]=\"youtube\" [(ngModel)]=\"youtube\"\n                placeholder=\"Enter Your Youtube\">\n            </div>\n          </div>\n          <div class=\"row ion-text-center mb-4\" id=\"social-icon\">\n            <div class=\"col-2\">\n              <svg width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-facebook\" viewBox=\"0 0 16 16\">\n                <path\n                  d=\"M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z\" />\n              </svg>\n            </div>\n            <div class=\"col-10\">\n              <input type=\"text\" id=\"edit-field\" [value]=\"facebook\" [(ngModel)]=\"facebook\"\n                placeholder=\"Enter Your Facebook\">\n            </div>\n          </div>\n\n          <div class=\"mt-1\">\n            <div class=\"row ion-text-center mt-1\">\n              <div class=\"col-8 mt-1\">\n                <p style=\"font-size: 14px;\">\n                  <svg style=\"padding-right: 10px;margin-left: -6%;\" width=\"26\" height=\"26\" fill=\"currentColor\" class=\"bi bi-truck\"\n                    viewBox=\"0 0 16 16\">\n                    <path\n                      d=\"M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z\" />\n                  </svg>\n                  Delivery Avilability:\n                </p>\n              </div>\n              <div class=\"col-4 mt-1\">\n                <!-- <input type=\"checkbox\" (click)=\"deliveryStatuss($event)\" value=\"null\"\n                  ng-checked={{Deliveryavailability}}> -->\n                <ion-toggle [checked]=\"deliveryStatus\" (ionChange)=\"deliveryStatustoggle()\"></ion-toggle>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\" >\n            <div class=\"col-6\">\n              <ion-button (click)=\"backToprivious()\"  style=\"width: 85%;\"  class=\"secondarySmallBtn mb-4\" color=\"none\" >\n                Cancel </ion-button>\n            </div>\n\n            <div class=\"col-6\">\n              <ion-button (click)=\"updateProfile()\"  style=\"width: 85%;\"  class=\"primarySmallBtn mb-4\" color=\"none\" >\n                Update</ion-button>\n            </div>\n          \n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_tab5_tab5_module_ts.js.map