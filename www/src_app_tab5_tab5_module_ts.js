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
    backTo() {
        this.PopupModel = false;
    }
    sellerAllDetails() {
        this.http.get('/seller_details').subscribe((response) => {
            if (response.success == "true") {
                console.log(response);
                this.mobile_Number = response.records.mobile_number;
                if (response.records.store_name == "" || response.records.store_name == null) {
                    this.id_proof = "Not Available";
                }
                else {
                    this.userdetails = response.records.store_name;
                }
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

module.exports = ".myproduct-div {\n  position: relative;\n  left: 2%;\n  background-color: var(--ion-color-light);\n  border: 1px solid #ebe6e6;\n  border-radius: 18px;\n  box-shadow: 2px 2px 2px 2px #ebe6e6;\n  width: 96% !important;\n}\n\n.support-btn {\n  border-radius: 5px !important;\n  background: transparent;\n  margin: 10px;\n  width: 50%;\n  text-align: center;\n  border: 1px solid #ebe6e6;\n  font-size: 12px !important;\n  margin-top: 17% !important;\n  color: var(--ion-color-light);\n}\n\n.enable-btn {\n  color: var(--ion-color-primary);\n  border: 1px solid var(--ion-color-primary);\n  border-radius: 4px;\n  padding: 5px;\n}\n\n.disable-btn {\n  color: var(--ion-color-secondary);\n  border: 1px solid var(--ion-color-secondary);\n  border-radius: 4px;\n  padding: 5px;\n}\n\n.name {\n  font-size: 14px;\n  color: #0d0d0d;\n  text-align: left !important;\n  font-style: bold;\n  font-weight: 550;\n}\n\n.sellerDetails {\n  border-bottom: 2px solid var(--ion-color-primary) !important;\n  font-size: 12px;\n}\n\n.edit-name {\n  font-size: 13px;\n  margin-top: 5px;\n}\n\ninput[type=text] {\n  font-size: 13px;\n  margin-top: -12px;\n  margin-left: -20px;\n  width: 100%;\n  box-sizing: border-box;\n  background-color: transparent;\n  border: none !important;\n  border-bottom: 2px solid var(--ion-color-primary) !important;\n}\n\ninput:focus {\n  outline: none !important;\n  border-bottom: 2px solid var(--ion-color-success) !important;\n}\n\n.error-message {\n  font-size: 12px;\n  margin-left: 25px;\n}\n\n#edit {\n  cursor: pointer;\n}\n\n#social-icon {\n  margin-bottom: 5px;\n}\n\n.update-btn {\n  border-radius: 5px !important;\n  background: var(--ion-color-primary);\n  color: var(--ion-color-light);\n  height: 25px;\n  width: 25%;\n  text-align: center;\n  border: 1px solid #fff;\n  font-size: 12px !important;\n  padding: 3px;\n  margin: 15px !important;\n}\n\n.cancel-btn {\n  border-radius: 5px !important;\n  background: var(--ion-color-secondary);\n  color: var(--ion-color-light);\n  height: 25px;\n  width: 25%;\n  text-align: center;\n  border: 1px solid #fff;\n  font-size: 12px !important;\n  padding: 3px;\n  margin: 15px !important;\n}\n\nion-toggle {\n  --handle-box-shadow: 0 3px 12px var(--ion-color-primary), 0 3px 1px var(--ion-color-primary);\n  overflow: visible;\n  contain: none;\n  color: var(--ion-color-primary) !important;\n}\n\nion-badge {\n  border-radius: 3px !important;\n  margin-left: -10px !important;\n}\n\n#card {\n  position: absolute;\n  height: 150%;\n  width: 1500px !important;\n  margin-left: -10px;\n  background-color: rgba(0, 0, 0, 0.4);\n  border: 1px solid #ebe6e6;\n  border-radius: 5px;\n  box-shadow: 2px 2px 2px 2px #ccc;\n  margin-top: -285px !important;\n  z-index: 5;\n}\n\n#modal {\n  position: absolute;\n  top: 7% !important;\n  left: 4% !important;\n  margin: 5% !important;\n  background-color: var(--ion-color-light);\n  border: 1px solid #ebe6e6;\n  border-radius: 5px;\n  width: 94% !important;\n  animation-name: example;\n  animation-duration: 1s;\n  animation-fill-mode: forwards;\n  z-index: 99;\n}\n\n#modal.ios {\n  position: relative;\n  top: -47% !important;\n  left: 4% !important;\n  margin: 5% !important;\n  background-color: var(--ion-color-light);\n  border: 1px solid #ebe6e6;\n  border-radius: 5px;\n  width: 94% !important;\n  animation-name: example;\n  animation-duration: 1s;\n  animation-fill-mode: forwards;\n  z-index: 99;\n}\n\n@keyframes example {\n  from {\n    top: 0px;\n  }\n  to {\n    top: 200px;\n    background-color: #fff;\n  }\n}\n\n.submit-btn {\n  background-color: var(--ion-color-secondary);\n  color: var(--ion-color-light);\n}\n\n.profile {\n  border: 1px solid #ffffff;\n  border-radius: 50%;\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n  margin: 7%;\n  width: 125px;\n  height: 125px;\n  padding: 5px;\n}\n\n.editprofile {\n  width: 155px;\n  height: 150px;\n  border-radius: 50%;\n}\n\n.upload-proff {\n  background: linear-gradient(to left, #23a6d5 0%, #23d5ab 100%);\n  color: #fff !important;\n}\n\n.welcomecard {\n  background: var(--ion-color-light);\n  border-radius: 18px;\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n  -webkit-backdrop-filter: blur(8.2px);\n          backdrop-filter: blur(8.2px);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  width: 96% !important;\n  margin: auto;\n}\n\nion-content {\n  --background-color: var(--ion-color-light) !important;\n  --offset-bottom: auto !important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n\nion-toggle:disabled,\nion-toggle[disabled] {\n  opacity: 1;\n}\n\n.submit-btn {\n  cursor: pointer;\n}\n\ninput[type=file] {\n  display: none;\n}\n\n.infoIcon {\n  position: relative;\n  width: 10px !important;\n  top: 0;\n}\n\n.extraInfo {\n  position: absolute;\n  color: var(--ion-color-light);\n  background-color: #2c2c2ce7;\n  border-radius: 5px;\n  padding: 10px 10px;\n  width: 225px;\n  text-align: center;\n  visibility: hidden;\n  font-size: 10px;\n  z-index: 1;\n}\n\n.infoIcon:hover .extraInfo {\n  visibility: visible;\n}\n\n.success {\n  color: green;\n  font-size: 10px;\n}\n\n.danger {\n  color: var(--ion-color-primary);\n  font-size: 10px;\n}\n\n.button-enable {\n  border: 1px solid var(--ion-color-primary);\n  font-size: 10px;\n  width: 60px;\n  color: var(--ion-color-primary);\n  border-radius: 3px;\n}\n\n.button-disable {\n  border: 1px solid var(--ion-color-secondary);\n  font-size: 10px;\n  width: 60px;\n  color: var(--ion-color-secondary);\n  border-radius: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0Esd0NBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUNBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsNkJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtBQUNGOztBQUdBO0VBQ0UsK0JBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUdBO0VBQ0UsaUNBQUE7RUFDQSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFJQTtFQUNFLDREQUFBO0VBQ0EsZUFBQTtBQURGOztBQUlBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUFERjs7QUFZQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtFQUNBLDREQUFBO0FBVEY7O0FBWUE7RUFDRSx3QkFBQTtFQUNBLDREQUFBO0FBVEY7O0FBWUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFURjs7QUFhQTtFQUNFLGVBQUE7QUFWRjs7QUFhQTtFQUNFLGtCQUFBO0FBVkY7O0FBYUE7RUFDRSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQVZGOztBQWFBO0VBQ0UsNkJBQUE7RUFDQSxzQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUFWRjs7QUFhQTtFQUNFLDRGQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsMENBQUE7QUFWRjs7QUFjQTtFQUNFLDZCQUFBO0VBQ0EsNkJBQUE7QUFYRjs7QUFlQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtBQVpGOztBQWVBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSx3Q0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7QUFiRjs7QUFpQkM7RUFDQyxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHdDQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUVBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtBQWZGOztBQW1CQTtFQUNFO0lBQ0UsUUFBQTtFQWhCRjtFQW1CQTtJQUNFLFVBQUE7SUFDQSxzQkFBQTtFQWpCRjtBQUNGOztBQW9CQTtFQUNFLDRDQUFBO0VBQ0EsNkJBQUE7QUFsQkY7O0FBc0JBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQW5CRjs7QUFzQkE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBbkJGOztBQXNCQTtFQUNFLDhEQUFBO0VBQ0Esc0JBQUE7QUFuQkY7O0FBdUJBO0VBQ0Usa0NBQUE7RUFDQSxtQkFBQTtFQUNBLHlDQUFBO0VBQ0Esb0NBQUE7VUFBQSw0QkFBQTtFQUNBLDBDQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FBcEJGOztBQXVCQTtFQUNFLHFEQUFBO0VBSUEsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUF2QkY7O0FBeUJFO0VBQ0UsYUFBQTtBQXZCSjs7QUEyQkE7O0VBRUUsVUFBQTtBQXhCRjs7QUEyQkE7RUFDRSxlQUFBO0FBeEJGOztBQTJCQTtFQUNFLGFBQUE7QUF4QkY7O0FBNEJBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLE1BQUE7QUF6QkY7O0FBOEJBO0VBQ0Usa0JBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUEzQkY7O0FBOEJBO0VBQ0UsbUJBQUE7QUEzQkY7O0FBOEJBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUEzQkY7O0FBOEJBO0VBQ0UsK0JBQUE7RUFDQSxlQUFBO0FBM0JGOztBQThCQTtFQUNFLDBDQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0FBM0JGOztBQThCQTtFQUNFLDRDQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0FBM0JGIiwiZmlsZSI6InRhYjUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15cHJvZHVjdC1kaXYge1xuICBwb3NpdGlvbiAgICAgICAgOiByZWxhdGl2ZTtcbiAgbGVmdCAgICAgICAgICAgIDogMiU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGJvcmRlciAgICAgICAgICA6IDFweCBzb2xpZCAjZWJlNmU2O1xuICBib3JkZXItcmFkaXVzICAgOiAxOHB4O1xuICBib3gtc2hhZG93ICAgICAgOiAycHggMnB4IDJweCAycHggI2ViZTZlNjtcbiAgd2lkdGggICAgICAgICAgIDogOTYlICFpbXBvcnRhbnQ7XG59XG5cbi5zdXBwb3J0LWJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kICAgOiB0cmFuc3BhcmVudDtcbiAgbWFyZ2luICAgICAgIDogMTBweDtcbiAgd2lkdGggICAgICAgIDogNTAlO1xuICB0ZXh0LWFsaWduICAgOiBjZW50ZXI7XG4gIGJvcmRlciAgICAgICA6IDFweCBzb2xpZCAjZWJlNmU2O1xuICBmb250LXNpemUgICAgOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3AgICA6IDE3JSAhaW1wb3J0YW50O1xuICBjb2xvciAgICAgICAgOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuXG59XG5cbi5lbmFibGUtYnRuIHtcbiAgY29sb3IgICAgICAgIDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBib3JkZXIgICAgICAgOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmcgICAgICA6IDVweDtcbn1cblxuLmRpc2FibGUtYnRuIHtcbiAgY29sb3IgICAgICAgIDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIGJvcmRlciAgICAgICA6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nICAgICAgOiA1cHg7XG59XG5cbi5uYW1lIHtcbiAgZm9udC1zaXplICA6IDE0cHg7XG4gIGNvbG9yICAgICAgOiAjMGQwZDBkO1xuICB0ZXh0LWFsaWduIDogbGVmdCAhaW1wb3J0YW50O1xuICBmb250LXN0eWxlIDogYm9sZDtcbiAgZm9udC13ZWlnaHQ6IDU1MDtcbn1cblxuXG4uc2VsbGVyRGV0YWlsc3tcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uZWRpdC1uYW1lIHtcbiAgZm9udC1zaXplIDogMTNweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4vLyAjZWRpdC1maWVsZHtcbi8vICAgICBib3JkZXI6MXB4IHNvbGlkICNmZmY7XG4vLyAgICAgd2lkdGg6MTAwJTtcbi8vICAgICBtYXJnaW4tbGVmdDogLTIwcHg7XG4vLyAgICAgZm9udC1zaXplOiAxMXB4O1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuLy8gfVxuXG5pbnB1dFt0eXBlPXRleHRdIHtcbiAgZm9udC1zaXplICAgICAgIDogMTNweDtcbiAgbWFyZ2luLXRvcCAgICAgIDogLTEycHg7XG4gIG1hcmdpbi1sZWZ0ICAgICA6IC0yMHB4O1xuICB3aWR0aCAgICAgICAgICAgOiAxMDAlO1xuICBib3gtc2l6aW5nICAgICAgOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyICAgICAgICAgIDogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tICAgOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XG59XG5cbmlucHV0OmZvY3VzIHtcbiAgb3V0bGluZSAgICAgIDogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpICFpbXBvcnRhbnQ7XG59XG5cbi5lcnJvci1tZXNzYWdlIHtcbiAgZm9udC1zaXplICA6IDEycHg7XG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xuXG59XG5cbiNlZGl0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jc29jaWFsLWljb24ge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi51cGRhdGUtYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQgICA6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgY29sb3IgICAgICAgIDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgaGVpZ2h0ICAgICAgIDogMjVweDtcbiAgd2lkdGggICAgICAgIDogMjUlO1xuICB0ZXh0LWFsaWduICAgOiBjZW50ZXI7XG4gIGJvcmRlciAgICAgICA6IDFweCBzb2xpZCAjZmZmO1xuICBmb250LXNpemUgICAgOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmcgICAgICA6IDNweDtcbiAgbWFyZ2luICAgICAgIDogMTVweCAhaW1wb3J0YW50O1xufVxuXG4uY2FuY2VsLWJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kICAgOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgY29sb3IgICAgICAgIDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgaGVpZ2h0ICAgICAgIDogMjVweDtcbiAgd2lkdGggICAgICAgIDogMjUlO1xuICB0ZXh0LWFsaWduICAgOiBjZW50ZXI7XG4gIGJvcmRlciAgICAgICA6IDFweCBzb2xpZCAjZmZmO1xuICBmb250LXNpemUgICAgOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmcgICAgICA6IDNweDtcbiAgbWFyZ2luICAgICAgIDogMTVweCAhaW1wb3J0YW50O1xufVxuXG5pb24tdG9nZ2xlIHtcbiAgLS1oYW5kbGUtYm94LXNoYWRvdzogMCAzcHggMTJweCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSksIDAgM3B4IDFweCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIG92ZXJmbG93ICAgICAgICAgICA6IHZpc2libGU7XG4gIGNvbnRhaW4gICAgICAgICAgICA6IG5vbmU7XG4gIGNvbG9yICAgICAgICAgICAgICA6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAhaW1wb3J0YW50O1xuXG59XG5cbmlvbi1iYWRnZSB7XG4gIGJvcmRlci1yYWRpdXM6IDNweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdCAgOiAtMTBweCAhaW1wb3J0YW50O1xuXG59XG5cbiNjYXJkIHtcbiAgcG9zaXRpb24gICAgICAgIDogYWJzb2x1dGU7XG4gIGhlaWdodCAgICAgICAgICA6IDE1MCU7XG4gIHdpZHRoICAgICAgICAgICA6IDE1MDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdCAgICAgOiAtMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBib3JkZXIgICAgICAgICAgOiAxcHggc29saWQgI2ViZTZlNjtcbiAgYm9yZGVyLXJhZGl1cyAgIDogNXB4O1xuICBib3gtc2hhZG93ICAgICAgOiAycHggMnB4IDJweCAycHggI2NjYztcbiAgbWFyZ2luLXRvcCAgICAgIDogLTI4NXB4ICFpbXBvcnRhbnQ7XG4gIHotaW5kZXggICAgICAgICA6IDU7XG59XG5cbiNtb2RhbCB7XG4gIHBvc2l0aW9uICAgICAgICAgICA6IGFic29sdXRlO1xuICB0b3AgICAgICAgICAgICAgICAgOiA3JSAhaW1wb3J0YW50O1xuICBsZWZ0IDogNCUgIWltcG9ydGFudDtcbiAgbWFyZ2luICAgICAgICAgICAgIDogNSUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvciAgIDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgYm9yZGVyICAgICAgICAgICAgIDogMXB4IHNvbGlkICNlYmU2ZTY7XG4gIGJvcmRlci1yYWRpdXMgICAgICA6IDVweDtcbiAgLy8gYm94LXNoYWRvdzogMnB4IDJweCAycHggMnB4ICNjY2M7XG4gIHdpZHRoICAgICAgICAgICAgICA6IDk0JSAhaW1wb3J0YW50O1xuICBhbmltYXRpb24tbmFtZSAgICAgOiBleGFtcGxlO1xuICBhbmltYXRpb24tZHVyYXRpb24gOiAxcztcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIHotaW5kZXg6IDk5O1xuXG59XG5cbiAjbW9kYWwuaW9ze1xuICBwb3NpdGlvbiAgICAgICAgICAgOiByZWxhdGl2ZTtcbiAgdG9wICAgICAgICAgICAgICAgIDogLTQ3JSAhaW1wb3J0YW50O1xuICBsZWZ0IDogNCUgIWltcG9ydGFudDtcbiAgbWFyZ2luICAgICAgICAgICAgIDogNSUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvciAgIDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgYm9yZGVyICAgICAgICAgICAgIDogMXB4IHNvbGlkICNlYmU2ZTY7XG4gIGJvcmRlci1yYWRpdXMgICAgICA6IDVweDtcbiAgLy8gYm94LXNoYWRvdzogMnB4IDJweCAycHggMnB4ICNjY2M7XG4gIHdpZHRoICAgICAgICAgICAgICA6IDk0JSAhaW1wb3J0YW50O1xuICBhbmltYXRpb24tbmFtZSAgICAgOiBleGFtcGxlO1xuICBhbmltYXRpb24tZHVyYXRpb24gOiAxcztcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIHotaW5kZXg6IDk5O1xuXG59XG5cbkBrZXlmcmFtZXMgZXhhbXBsZSB7XG4gIGZyb20ge1xuICAgIHRvcDogMHB4O1xuICB9XG5cbiAgdG8ge1xuICAgIHRvcCAgICAgICAgICAgICA6IDIwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIH1cbn1cblxuLnN1Ym1pdC1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgY29sb3IgICAgICAgICAgIDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cblxuXG4ucHJvZmlsZSB7XG4gIGJvcmRlciAgICAgICA6IDFweCBzb2xpZCAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJveC1zaGFkb3cgICA6IDAgNHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBtYXJnaW4gICAgICAgOiA3JTtcbiAgd2lkdGggICAgICAgIDogMTI1cHg7XG4gIGhlaWdodCAgICAgICA6IDEyNXB4O1xuICBwYWRkaW5nICAgICAgOiA1cHg7XG59XG5cbi5lZGl0cHJvZmlsZSB7XG4gIHdpZHRoICAgICAgICA6IDE1NXB4O1xuICBoZWlnaHQgICAgICAgOiAxNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4udXBsb2FkLXByb2ZmIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyM2E2ZDUgMCUsICMyM2Q1YWIgMTAwJSk7XG4gIGNvbG9yICAgICA6ICNmZmYgIWltcG9ydGFudDtcblxufVxuXG4ud2VsY29tZWNhcmQge1xuICBiYWNrZ3JvdW5kICAgICA6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGJvcmRlci1yYWRpdXMgIDogMThweDtcbiAgYm94LXNoYWRvdyAgICAgOiAwIDRweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDguMnB4KTtcbiAgYm9yZGVyICAgICAgICAgOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICB3aWR0aCAgICAgICAgICAgOiA5NiUgIWltcG9ydGFudDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KSAhaW1wb3J0YW50O1xuICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCBkYXJrdHVycXVvaXNlXG4gIC8vIDAlLCAjZDFmMmU3XG4gIC8vIDEwMCUpICFpbXBvcnRhbnQ7XG4gIC0tb2Zmc2V0LWJvdHRvbSAgIDogYXV0byAhaW1wb3J0YW50O1xuICAtLW92ZXJmbG93ICAgICAgICA6IGhpZGRlbjtcbiAgb3ZlcmZsb3cgICAgICAgICAgOiBhdXRvO1xuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbmlvbi10b2dnbGU6ZGlzYWJsZWQsXG5pb24tdG9nZ2xlW2Rpc2FibGVkXSB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5zdWJtaXQtYnRuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5pbnB1dFt0eXBlPVwiZmlsZVwiXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG5cbn1cblxuLmluZm9JY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aCAgIDogMTBweCAhaW1wb3J0YW50O1xuICB0b3AgICAgIDogMDtcbn1cblxuXG5cbi5leHRyYUluZm8ge1xuICBwb3NpdGlvbiAgICAgICAgOiBhYnNvbHV0ZTtcbiAgY29sb3IgICAgICAgICAgIDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJjMmMyY2U3O1xuICBib3JkZXItcmFkaXVzICAgOiA1cHg7XG4gIHBhZGRpbmcgICAgICAgICA6IDEwcHggMTBweDtcbiAgd2lkdGggICAgICAgICAgIDogMjI1cHg7XG4gIHRleHQtYWxpZ24gICAgICA6IGNlbnRlcjtcbiAgdmlzaWJpbGl0eSAgICAgIDogaGlkZGVuO1xuICBmb250LXNpemUgICAgICAgOiAxMHB4O1xuICB6LWluZGV4ICAgICAgICAgOiAxO1xufVxuXG4uaW5mb0ljb246aG92ZXIgLmV4dHJhSW5mbyB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5zdWNjZXNzIHtcbiAgY29sb3IgICAgOiBncmVlbjtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4uZGFuZ2VyIHtcbiAgY29sb3IgICAgOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLmJ1dHRvbi1lbmFibGUge1xuICBib3JkZXIgICAgICAgOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXNpemUgICAgOiAxMHB4O1xuICB3aWR0aCAgICAgICAgOiA2MHB4O1xuICBjb2xvciAgICAgICAgOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLmJ1dHRvbi1kaXNhYmxlIHtcbiAgYm9yZGVyICAgICAgIDogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICBmb250LXNpemUgICAgOiAxMHB4O1xuICB3aWR0aCAgICAgICAgOiA2MHB4O1xuICBjb2xvciAgICAgICAgOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufSJdfQ== */";

/***/ }),

/***/ 1503:
/*!************************************************!*\
  !*** ./src/app/tab5/tab5.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<!------------ Header  ---------------->\n<ion-toolbar color=\"light\">\n  <ion-buttons slot=\"start\">\n    <ion-menu-button style=\"margin-top:15px;color:#121212\" autoHide=\"false\">\n      <svg width=\"34\" height=\"34\" viewBox=\"0 0 24 24\" fill=\"none\" >\n        <path d=\"M5 7H19\" stroke=\"#121212\" stroke-width=\"2\" stroke-linecap=\"round\" />\n        <path d=\"M5 12H15\" stroke=\"#121212\" stroke-width=\"2\" stroke-linecap=\"round\" />\n        <path d=\"M5 17H11\" stroke=\"#121212\" stroke-width=\"2\" stroke-linecap=\"round\" />\n      </svg>\n    </ion-menu-button>\n  </ion-buttons>\n\n  <div class=\"row\">\n    <div class=\"col-4\">\n      <h5 style=\"color:#121212;margin-top:10px\"><b></b></h5>\n    </div>\n    <div class=\"col-8 mt-2 mx-4\" style=\"text-align: right;width: 90%;\">\n      <svg (click)=\"notification()\" style=\"margin:3px;\" width=\"30\" height=\"34\" viewBox=\"0 0 24 24\" fill=\"none\"\n        >\n        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\n          d=\"M13.7942 3.29494C13.2296 3.10345 12.6258 3 12 3C9.1535 3 6.7622 5.14032 6.44786 7.96942L6.19605 10.2356L6.1896 10.2933C6.06065 11.417 5.69489 12.5005 5.11646 13.4725L5.08667 13.5222L4.50863 14.4856C3.98408 15.3599 3.7218 15.797 3.77842 16.1559C3.8161 16.3946 3.93899 16.6117 4.12435 16.7668C4.40292 17 4.9127 17 5.93224 17H18.0678C19.0873 17 19.5971 17 19.8757 16.7668C20.061 16.6117 20.1839 16.3946 20.2216 16.1559C20.2782 15.797 20.0159 15.3599 19.4914 14.4856L18.9134 13.5222L18.8836 13.4725C18.4273 12.7059 18.1034 11.8698 17.9236 10.9994C15.1974 10.9586 13 8.73592 13 6C13 5.00331 13.2916 4.07473 13.7942 3.29494ZM16.2741 4.98883C16.0999 5.28551 16 5.63109 16 6C16 6.94979 16.6621 7.74494 17.5499 7.94914C17.4205 6.82135 16.9608 5.80382 16.2741 4.98883Z\"\n          fill=\"black\" />\n        <path\n          d=\"M9 17C9 17.394 9.0776 17.7841 9.22836 18.1481C9.37913 18.512 9.6001 18.8427 9.87868 19.1213C10.1573 19.3999 10.488 19.6209 10.8519 19.7716C11.2159 19.9224 11.606 20 12 20C12.394 20 12.7841 19.9224 13.1481 19.7716C13.512 19.6209 13.8427 19.3999 14.1213 19.1213C14.3999 18.8427 14.6209 18.512 14.7716 18.1481C14.9224 17.7841 15 17.394 15 17L12 17H9Z\"\n          fill=\"black\" />\n        <circle cx=\"18\" cy=\"6\" r=\"2.5\" fill=\"#eb154b\" stroke=\"#eb154b\" />\n      </svg>\n\n      <!-- <ion-badge style=\"border-radius: 50%;margin-left: -14px ;color:#eb154b ;font-size: 12px;\" color=\"light\">10</ion-badge> -->\n\n    </div>\n  </div>\n</ion-toolbar>\n\n<ion-content [ngStyle]=\"{'opacity':PopupModel ? '0.50' : '1'}\">\n\n  \n\n  <div style=\"width: 95%;margin: auto;\" class=\"row welcomecard ion-text-center mt-3\">\n\n    <div class=\"col-12 ion-text-right\">\n      \n    </div>\n    <div class=\"col-5\">\n      <img class=\"profile\" src=\"{{storelogo}}\" alt=\"\" *ngIf=\"imagefound\">\n      <img class=\"profile\" src=\"../../assets/imagenotavilable.png\" alt=\"\" *ngIf=\"noimagefound\">\n    </div>\n    <div class=\"col-7 ion-text-left\">\n      <h4>\n        <svg width=\"18\" height=\"18\" viewBox=\"0 0 100 94\" fill=\"none\" >\n          <path\n            d=\"M88.1484 40.9781C87.4315 41.0699 86.6961 41.125 85.924 41.125C81.1442 41.125 76.8792 39.032 73.9562 35.8008C71.0333 39.032 66.7683 41.125 61.9701 41.125C57.172 41.125 52.907 39.032 49.984 35.8008C47.061 39.032 42.8144 41.125 37.9979 41.125C33.2181 41.125 28.9531 39.032 26.0301 35.8008C23.1071 39.032 18.8421 41.125 14.0366 41.125C13.2903 41.125 12.5384 41.0699 11.8085 40.9781C1.63871 39.6195 -3.1732 27.6492 2.2656 19.057L12.8049 2.41059C13.7425 0.914113 15.4172 0 17.206 0H82.7988C84.582 0 86.2549 0.91393 87.1925 2.41059L97.7263 19.057C103.186 27.6676 98.3513 39.6195 88.1484 40.9781ZM88.9205 46.798C89.5456 46.7062 90.4464 46.5594 91.1817 46.3758V82.25C91.1817 88.7309 85.9056 94 79.4162 94H20.5886C14.0918 94 8.82304 88.7309 8.82304 82.25V46.3758C9.53449 46.5594 10.268 46.7062 11.0236 46.798H11.0456C12.0126 46.9266 13.02 47 14.0366 47C16.3236 47 18.5296 46.6512 20.5886 46.0086V70.5H79.4162V46.027C81.4752 46.6512 83.6628 47 85.924 47C86.9535 47 87.9462 46.9266 88.9205 46.798Z\"\n            fill=\"black\" />\n        </svg>\n\n        <b> &nbsp;{{userdetails}}\n          <svg style=\"margin-top: -2px;\" (click)=\"popupModelOpen()\"  width=\"15\" height=\"15\" fill=\"currentColor\" class=\"bi bi-pencil-fill\" viewBox=\"0 0 16 16\">\n            <path d=\"M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z\"/>\n          </svg>\n        </b>\n      </h4>\n      <h6>\n        <svg  width=\"14\" height=\"15\" viewBox=\"0 0 111 112\" fill=\"none\" >\n          <path\n            d=\"M110.827 83.9017L105.786 105.755C105.078 108.844 102.363 111.006 99.1824 111.006C44.4867 111.001 0 66.5145 0 11.8167C0 8.63846 2.16125 5.91983 5.25082 5.21524L27.1039 0.174714C30.2865 -0.562829 33.5385 1.08916 34.8609 4.10307L44.9463 27.6255C46.1253 30.3962 45.3301 33.6243 42.9995 35.5278L31.3271 44.8999C38.6939 59.9066 50.8952 72.1079 65.9062 79.479L75.4627 67.8153C77.3462 65.4783 80.5986 64.6696 83.3692 65.8696L106.892 75.9528C109.721 77.4411 111.564 80.7364 110.827 83.9017Z\"\n            fill=\"black\" />\n        </svg>\n        &nbsp;<span *ngIf=\"ContactNumberCheck\"><b>Not Availabale</b></span>\n        <b> &nbsp;{{store_number}}</b>\n      </h6>\n\n      <h6>\n        <svg width=\"14\" height=\"12\" viewBox=\"0 0 14 13\" fill=\"none\" >\n          <path\n            d=\"M0 1.5C0 0.671562 0.606573 0 1.35484 0C2.1031 0 2.70968 0.671562 2.70968 1.5C2.70968 2.32812 2.1031 3 1.35484 3C0.606573 3 0 2.32812 0 1.5ZM13.0968 0.5C13.5964 0.5 14 0.947812 14 1.5C14 2.05313 13.5964 2.5 13.0968 2.5H4.96774C4.46815 2.5 4.06452 2.05313 4.06452 1.5C4.06452 0.947812 4.46815 0.5 4.96774 0.5H13.0968ZM13.0968 5.5C13.5964 5.5 14 5.94687 14 6.5C14 7.05313 13.5964 7.5 13.0968 7.5H4.96774C4.46815 7.5 4.06452 7.05313 4.06452 6.5C4.06452 5.94687 4.46815 5.5 4.96774 5.5H13.0968ZM13.0968 10.5C13.5964 10.5 14 10.9469 14 11.5C14 12.0531 13.5964 12.5 13.0968 12.5H4.96774C4.46815 12.5 4.06452 12.0531 4.06452 11.5C4.06452 10.9469 4.46815 10.5 4.96774 10.5H13.0968ZM0 11.5C0 10.6719 0.606573 10 1.35484 10C2.1031 10 2.70968 10.6719 2.70968 11.5C2.70968 12.3281 2.1031 13 1.35484 13C0.606573 13 0 12.3281 0 11.5ZM2.70968 6.5C2.70968 7.32812 2.1031 8 1.35484 8C0.606573 8 0 7.32812 0 6.5C0 5.67188 0.606573 5 1.35484 5C2.1031 5 2.70968 5.67188 2.70968 6.5Z\"\n            fill=\"black\" />\n        </svg>\n        &nbsp;<span style=\"margin-left: 5%\"><b>{{store_category}} </b></span>\n        &nbsp;\n      </h6>\n\n    </div>\n  </div>\n\n\n  <div style=\"width:100%;text-align: center;\">\n    <div class=\"welcomecard mt-3 mb-3 p-1\">\n\n      <!---------Profile_Page_Details----------->\n      <div class=\"row mt-1\" style=\"padding: 10px;\">\n\n        <div class=\"col-6\">\n          <p class=\"name\">Email:</p>\n        </div>\n        <div class=\"col-6\">\n          <p class=\"sellerDetails ion-text-left\">{{EmailID}}</p>\n        </div>\n        <div class=\"col-6\">\n          <p class=\"name\">Store location :</p>\n        </div>\n        <div class=\"col-6\">\n          <p class=\"sellerDetails ion-text-left\">{{location == 'null' ? 'Not Available': location}}</p>\n         \n        </div>\n        <!-- <div class=\"col-6\">\n          <p class=\"name\">Mobile number :</p>\n        </div>\n        <div class=\"col-6\">\n          <p class=\"sellerDetails ion-text-left\">{{mobile_Number}}</p>\n        </div> -->\n\n        <!---------Proof-Section----------->\n        <div class=\"row\" style=\"padding-left: 10px;\">\n          <div class=\"col-6\">\n            <p class=\"name mt-2\">Id Proof\n              <span class=\"infoIcon\">\n                <img src=\"assets/icon/i.png\" alt=\"info icon\" width=\"15px\">\n\n                <p class=\"extraInfo\">Aadhar Card,\n                  Driving License,<br>\n                  Pan Card </p>\n              </span>\n            </p>\n\n          </div>\n          <div class=\"col-2\">\n            <label class=\"btn btn-default\" style=\"font-size: 13px;\" (change)=\"MediaFileSelected_idproof($event)\">\n              <svg width=\"23\" height=\"20\" viewBox=\"0 0 23 20\" fill=\"none\" >\n                <path\n                  d=\"M0 2.5C0 1.11914 1.14401 0 2.55556 0H8.94444V5C8.94444 5.69141 9.51545 6.25 10.2222 6.25H15.3333V7.75781C12.3825 8.57422 10.2222 11.2266 10.2222 14.375C10.2222 16.6836 11.3842 18.7227 13.1651 19.9727C13.0413 19.9883 12.9095 20 12.7778 20H2.55556C1.14401 20 0 18.8789 0 17.5V2.5ZM10.2222 5V0L15.3333 5H10.2222ZM11.5 14.375C11.5 11.2695 14.0755 8.75 17.25 8.75C20.4245 8.75 23 11.2695 23 14.375C23 17.4805 20.4245 20 17.25 20C14.0755 20 11.5 17.4805 11.5 14.375ZM17.8889 11.8398C17.8889 11.5313 17.6014 11.2148 17.25 11.2148C16.8986 11.2148 16.6111 11.5313 16.6111 11.8398V13.7148H14.6944C14.3431 13.7148 14.0556 14.0313 14.0556 14.3398C14.0556 14.7188 14.3431 14.9648 14.6944 14.9648H16.6111V16.8398C16.6111 17.2188 16.8986 17.4648 17.25 17.4648C17.6014 17.4648 17.8889 17.2188 17.8889 16.8398V14.9648H19.8056C20.1569 14.9648 20.4444 14.7188 20.4444 14.3398C20.4444 14.0313 20.1569 13.7148 19.8056 13.7148H17.8889V11.8398Z\"\n                  fill=\"black\" />\n              </svg>\n              <input type=\"file\" class=\"\" name=\"image\" accept=\".pdf\">\n            </label>\n\n          </div>\n\n          <div class=\"col-4 ion-text-center mt-1\">\n            <p>\n              <span [ngClass]='idProofExist == true ? \"success\" : \"danger\"' class=\"small\"> ({{id_proof}})</span>\n            </p>\n          </div>\n        </div>\n\n        <div class=\"row\" style=\"padding-left: 10px;\">\n          <div class=\"col-6\">\n            <p class=\"name mt-2 \">Address Proof <span class=\"infoIcon\">\n                <img src=\"assets/icon/i.png\" alt=\"info icon\" width=\"15px\">\n\n                <p class=\"extraInfo\">GST,\n                  Stores and establishments registered certificate,\n                  Roc,\n                  FSSAI for food related business</p>\n              </span></p>\n          </div>\n          <div class=\"col-2\">\n            <label class=\"btn btn-default\" style=\"font-size: 13px;\" (change)=\"MediaFileSelected_addressproof($event)\">\n              <svg width=\"23\" height=\"20\" viewBox=\"0 0 23 20\" fill=\"none\" >\n                <path\n                  d=\"M0 2.5C0 1.11914 1.14401 0 2.55556 0H8.94444V5C8.94444 5.69141 9.51545 6.25 10.2222 6.25H15.3333V7.75781C12.3825 8.57422 10.2222 11.2266 10.2222 14.375C10.2222 16.6836 11.3842 18.7227 13.1651 19.9727C13.0413 19.9883 12.9095 20 12.7778 20H2.55556C1.14401 20 0 18.8789 0 17.5V2.5ZM10.2222 5V0L15.3333 5H10.2222ZM11.5 14.375C11.5 11.2695 14.0755 8.75 17.25 8.75C20.4245 8.75 23 11.2695 23 14.375C23 17.4805 20.4245 20 17.25 20C14.0755 20 11.5 17.4805 11.5 14.375ZM17.8889 11.8398C17.8889 11.5313 17.6014 11.2148 17.25 11.2148C16.8986 11.2148 16.6111 11.5313 16.6111 11.8398V13.7148H14.6944C14.3431 13.7148 14.0556 14.0313 14.0556 14.3398C14.0556 14.7188 14.3431 14.9648 14.6944 14.9648H16.6111V16.8398C16.6111 17.2188 16.8986 17.4648 17.25 17.4648C17.6014 17.4648 17.8889 17.2188 17.8889 16.8398V14.9648H19.8056C20.1569 14.9648 20.4444 14.7188 20.4444 14.3398C20.4444 14.0313 20.1569 13.7148 19.8056 13.7148H17.8889V11.8398Z\"\n                  fill=\"black\" />\n              </svg>\n\n\n              <input type=\"file\" class=\"\" name=\"image\" accept=\".pdf\">\n            </label>\n          </div>\n\n          <div class=\"col-4 ion-text-center mt-1\">\n            <p>\n              <span [ngClass]='addidProofExist == true ? \"success\" : \"danger\"' class=\"small\"> ({{addressProof}})</span>\n            </p>\n          </div>\n\n        </div>\n\n      </div>\n      <!---------Proof-Upload----------->\n      <button (click)=\"submitidProof()\" class=\"btn btn-sm submit-btn mb-1\" *ngIf=\"idSubmitButtonProof\">SUBMIT</button>\n      <button (click)=\"submitaddressProof()\" class=\"btn btn-sm submit-btn mb-1\"\n        *ngIf=\"addressSubmitButtonProof\">SUBMIT</button>\n    </div>\n  </div>\n\n\n\n  <div class=\"welcomecard mt-1 mb-3 p-1\">\n    <div class=\"row ion-text-left \">\n      <div class=\"col-8 pt-2 mt-1\">\n        <p style=\"font-size: 14px;\" class=\"\">\n\n          <!---------  Delivery icon ---------->\n\n          <svg width=\"38\" height=\"20\" viewBox=\"0 0 38 30\" fill=\"none\">\n            <path\n              d=\"M6.65 0C5.07597 0 3.8 1.25918 3.8 2.8125V5.625H0.95C0.425303 5.625 0 6.04687 0 6.5625C0 7.07813 0.425303 7.5 0.95 7.5H16.15C16.6725 7.5 17.1 7.92187 17.1 8.4375C17.1 8.95313 16.6725 9.375 16.15 9.375H2.85C2.32512 9.375 1.9 9.79687 1.9 10.3125C1.9 10.8281 2.32512 11.25 2.85 11.25H14.25C14.7725 11.25 15.2 11.6719 15.2 12.1875C15.2 12.7031 14.7725 13.125 14.25 13.125H0.95C0.425303 13.125 0 13.5469 0 14.0625C0 14.5781 0.425303 15 0.95 15H12.35C12.8725 15 13.3 15.4219 13.3 15.9375C13.3 16.4531 12.8725 16.875 12.35 16.875H3.8V24.375C3.8 27.4805 6.29969 30 9.5 30C12.6469 30 15.2 27.4805 15.2 24.375H22.8C22.8 27.4805 25.2997 30 28.5 30C31.6469 30 34.2 27.4805 34.2 24.375H36.1C37.1509 24.375 38 23.5371 38 22.5C38 21.4629 37.1509 20.625 36.1 20.625V13.9043C36.1 12.9082 35.7022 11.9531 34.9897 11.25L30.4 6.7207C29.6341 6.01758 28.7197 5.625 27.7103 5.625H24.7V2.8125C24.7 1.25918 23.4234 0 21.85 0H6.65ZM32.3 13.9043V15H24.7V9.375H27.7103L32.3 13.9043ZM9.5 27.1875C7.92656 27.1875 6.65 25.9277 6.65 24.375C6.65 22.8223 7.92656 21.5625 9.5 21.5625C11.0734 21.5625 12.35 22.8223 12.35 24.375C12.35 25.9277 11.0734 27.1875 9.5 27.1875ZM31.35 24.375C31.35 25.9277 30.0734 27.1875 28.5 27.1875C26.9266 27.1875 25.65 25.9277 25.65 24.375C25.65 22.8223 26.9266 21.5625 28.5 21.5625C30.0734 21.5625 31.35 22.8223 31.35 24.375Z\"\n              fill=\"#121212\" />\n          </svg>\n          <span style=\"margin-left:8%\">Delivery Availability:</span>\n        </p>\n      </div>\n      <div class=\"col-4 pt-2 mt-2\">\n        <p *ngIf=\"delivery_availability_button_enabled\" class=\"small button-enable ion-text-center\">Enabled</p>\n        <p *ngIf=\"delivery_availability_button_disabled\" class=\"small button-disable ion-text-center\">Disabled</p>\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"welcomecard mt-2 mb-3\">\n    <p class=\"title mt-3\" style=\"font-size:16px;margin-left:10px;margin-top:10px;\">Select how customers can reach you\n      <!-- <span (click)=\"contactEdit()\" class=\"px-2 submit-btn\">\n        <svg   style=\"margin: 5px;\" width=\"26\" height=\"26\" viewBox=\"0 0 24 24\" fill=\"none\" >\n          <path d=\"M13.5 5.5L6.45321 12.5468C6.22845 12.7716 6.11607 12.8839 6.04454 13.0229C5.97301 13.1619 5.94689 13.3187 5.89463 13.6322L5.11508 18.3095C5.06262 18.6243 5.03639 18.7817 5.12736 18.8726C5.21833 18.9636 5.37571 18.9374 5.69048 18.8849L10.3678 18.1054L10.3678 18.1054C10.6813 18.0531 10.8381 18.027 10.9771 17.9555C11.1161 17.8839 11.2284 17.7716 11.4532 17.5468L11.4532 17.5468L18.5 10.5C19.5171 9.48295 20.0256 8.97442 20.1384 8.36277C20.1826 8.12295 20.1826 7.87705 20.1384 7.63723C20.0256 7.02558 19.5171 6.51705 18.5 5.5C17.4829 4.48295 16.9744 3.97442 16.3628 3.8616C16.1229 3.81737 15.8771 3.81737 15.6372 3.8616C15.0256 3.97442 14.5171 4.48294 13.5 5.5Z\" fill=\"#0D0D0D\"/>\n          <path d=\"M12.2929 6.70711L6.45321 12.5468C6.22845 12.7716 6.11607 12.8839 6.04454 13.0229C5.97301 13.1619 5.94689 13.3187 5.89463 13.6322L5.11508 18.3095C5.06262 18.6243 5.03639 18.7817 5.12736 18.8726C5.21833 18.9636 5.37571 18.9374 5.69048 18.8849L10.3678 18.1054L10.3678 18.1054C10.6813 18.0531 10.8381 18.027 10.9771 17.9555C11.1161 17.8839 11.2284 17.7716 11.4532 17.5468L11.4532 17.5468L17.2929 11.7071C17.6262 11.3738 17.7929 11.2071 17.7929 11C17.7929 10.7929 17.6262 10.6262 17.2929 10.2929L17.2929 10.2929L13.7071 6.70711C13.3738 6.37377 13.2071 6.20711 13 6.20711C12.7929 6.20711 12.6262 6.37377 12.2929 6.70711Z\" fill=\"#0D0D0D\"/>\n          </svg>\n        </span> -->\n\n        <svg style=\"margin-top: -2px;\" (click)=\"contactEdit()\"  width=\"15\" height=\"15\" fill=\"currentColor\" class=\"bi bi-pencil-fill\" viewBox=\"0 0 16 16\">\n          <path d=\"M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z\"/>\n        </svg>\n\n    \n\n      <!-- <span (click)=\"contactview()\" class=\"px-2 submit-btn\">\n        <svg width=\"26\" height=\"21\" viewBox=\"0 0 26 21\" fill=\"none\" >\n          <path d=\"M13.4138 5.77127C13.2875 5.75674 13.1612 5.7512 13.0348 5.75014C10.6425 5.7302 8.68587 7.60517 8.66568 10.0264C8.64584 12.4071 10.5706 14.3549 12.9629 14.3748C15.3958 14.3951 17.3122 12.4794 17.3321 10.0986C17.3331 9.97284 17.3296 9.84702 17.3171 9.72113C16.8957 9.91977 16.4067 10.0909 15.8877 10.0866C14.2943 10.0733 13.0096 8.77328 13.0228 7.18759C13.0271 6.67101 13.2072 6.18734 13.4138 5.77127ZM4.35912 3.54845C2.23044 5.48038 0.798506 7.76404 0.11677 9.40255C-0.0351415 9.75618 -0.0384367 10.1515 0.107558 10.5076C0.762222 12.1168 2.15589 14.424 4.25172 16.4316C6.36129 18.4168 9.2679 20.0942 12.915 20.1246C16.5621 20.155 19.4963 18.5263 21.6377 16.5765C23.7667 14.6042 25.1978 12.3205 25.8827 10.7224C26.0338 10.3688 26.0371 9.97351 25.8919 9.61741C25.234 7.96773 23.8413 5.66053 21.7451 3.69338C19.6364 1.70995 16.7298 0.0307427 13.0827 0.000340955C9.43565 -0.0300608 6.50147 1.60046 4.35912 3.54845ZM13.0528 3.59397C16.6412 3.62388 19.5284 6.54551 19.4986 10.1167C19.4689 13.6878 16.5334 16.5609 12.9449 16.531C9.35653 16.5011 6.46933 13.5795 6.49909 10.0083C6.52886 6.43715 9.46437 3.56405 13.0528 3.59397Z\" fill=\"#0D0D0D\"/>\n          </svg>  \n      </span> -->\n\n    </p>\n\n    <!---------Social-Media-Details and Toggle------------>\n    <div style=\"margin-top: -4%;\" class=\"row p-1\">\n      <div class=\"col-2 p-4\">\n        <svg width=\"30\" height=\"30\" viewBox=\"0 0 448 448\" fill=\"none\">\n          <path\n            d=\"M384 0H64C28.65 0 0 28.65 0 64V384C0 419.35 28.65 448 64 448H384C419.35 448 448 419.35 448 384V64C448 28.65 419.3 0 384 0ZM351.6 289.5L339.98 339.89C338.347 347.015 332.08 352 324.74 352C198.64 352 96.04 249.4 96.04 123.2C96.04 115.872 101.024 109.61 108.15 107.98L158.53 96.35C165.874 94.647 173.41 98.459 176.46 105.412L199.73 159.692C202.449 166.083 200.613 173.522 195.238 177.912L168.3 200C185.29 234.61 213.44 262.75 248.07 279.75L270.09 252.84C274.434 247.449 281.94 245.59 288.33 248.356L342.57 271.606C349.5 274.6 353.3 282.2 351.6 289.5Z\"\n            fill=\"black\" />\n        </svg>\n\n      </div>\n      <div class=\"col-8 text-left mt-3\">\n        <p class=\"title\" style=\"margin-top:12px;margin-left:20%;font-size: 15px;\" *ngIf=\"ContactNumberChecked\">Contact\n          Number</p>\n        <p *ngIf=\"ContactNumberCheck\" style=\"margin-left: 20%;\">Contact Number<br> Not Available</p>\n      </div>\n      <div class=\"col-2 \">\n        <ion-toggle style=\"margin-left:-25px;margin-top: 18px;\" checked=\"{{ContactNumberToggle}}\" color=\"primary\"\n          (click)=\"contactToggle()\" [disabled]=\"ContactNumberCheck\">\n        </ion-toggle>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-2 p-4\">\n        <svg width=\"30\" height=\"30\" viewBox=\"0 0 72 72\" fill=\"none\" >\n          <path\n            d=\"M20.9941 0C9.41714 0 0 9.42586 0 21.0059V51.0059C0 62.5829 9.42586 72 21.0059 72H51.0059C62.5829 72 72 62.5741 72 50.9941V20.9941C72 9.41714 62.5741 0 50.9941 0H20.9941ZM57 12C58.656 12 60 13.344 60 15C60 16.656 58.656 18 57 18C55.344 18 54 16.656 54 15C54 13.344 55.344 12 57 12ZM36 18C45.927 18 54 26.073 54 36C54 45.927 45.927 54 36 54C26.073 54 18 45.927 18 36C18 26.073 26.073 18 36 18ZM36 24C32.8174 24 29.7652 25.2643 27.5147 27.5147C25.2643 29.7652 24 32.8174 24 36C24 39.1826 25.2643 42.2348 27.5147 44.4853C29.7652 46.7357 32.8174 48 36 48C39.1826 48 42.2348 46.7357 44.4853 44.4853C46.7357 42.2348 48 39.1826 48 36C48 32.8174 46.7357 29.7652 44.4853 27.5147C42.2348 25.2643 39.1826 24 36 24V24Z\"\n            fill=\"black\" />\n        </svg>\n\n      </div>\n      <div class=\"col-8 text-left mt-3\">\n        <p class=\"title\" style=\"margin-top:12px;margin-left:20%;font-size: 15px;\" *ngIf=\"InstagramChecked\">Instagram</p>\n        <p *ngIf=\"InstagramCheck\" style=\"margin-left: 20%;\">Instagram<br> Not Availabale</p>\n\n      </div>\n      <div class=\"col-2 \">\n        <ion-toggle style=\"margin-left:-25px;margin-top: 18px;\" color=\"primary\" checked=\"{{InstagramToggle}}\"\n          (click)=\"instagramToggle()\" [disabled]=\"InstagramCheck\">\n        </ion-toggle>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-2 p-4\">\n        <svg width=\"30\" height=\"30\" viewBox=\"0 0 72 72\" fill=\"none\" >\n          <path\n            d=\"M36 0C16.119 0 0 16.119 0 36C0 42.7536 1.89702 49.0502 5.13281 54.4512L0.322266 72L18.2461 67.2949C23.4881 70.2752 29.5395 72 36 72C55.881 72 72 55.881 72 36C72 16.119 55.881 0 36 0ZM23.6777 19.207C24.2627 19.207 24.8638 19.2035 25.3828 19.2305C26.0248 19.2455 26.7236 19.2925 27.3926 20.7715C28.1876 22.5295 29.9186 26.9397 30.1406 27.3867C30.3626 27.8337 30.5199 28.3603 30.2109 28.9453C29.9169 29.5453 29.764 29.9085 29.332 30.4395C28.885 30.9555 28.3952 31.5963 27.9902 31.9863C27.5432 32.4333 27.0817 32.9235 27.5977 33.8145C28.1137 34.7055 29.9057 37.6264 32.5547 39.9844C35.9597 43.0264 38.8326 43.9612 39.7266 44.4082C40.6206 44.8552 41.1383 44.7855 41.6543 44.1855C42.1853 43.6005 43.8844 41.5932 44.4844 40.6992C45.0694 39.8052 45.6666 39.9599 46.4766 40.2539C47.2986 40.5479 51.6822 42.7073 52.5762 43.1543C53.4702 43.6013 54.0562 43.8225 54.2812 44.1855C54.5122 44.5605 54.5125 46.3457 53.7715 48.4277C53.0305 50.5067 49.3918 52.5172 47.7598 52.6582C46.1128 52.8112 44.5757 53.3985 37.0547 50.4375C27.9827 46.8645 22.2615 37.5727 21.8145 36.9727C21.3675 36.3877 18.1816 32.1417 18.1816 27.7617C18.1816 23.3667 20.486 21.2143 21.293 20.3203C22.115 19.4263 23.0777 19.207 23.6777 19.207Z\"\n            fill=\"black\" />\n        </svg>\n\n      </div>\n      <div class=\"col-8 text-left mt-3\">\n        <p class=\"title\" style=\"margin-top:12px;margin-left:20%;font-size: 15px;\" *ngIf=\"WhatsappChecked\">Whatsapp\n        </p>\n        <p *ngIf=\"WhatsappCheck\" style=\"margin-left: 20%;\">Whatsapp<br> Not Availabale</p>\n      </div>\n      <div class=\"col-2 \">\n        <ion-toggle style=\"margin-left:-25px;margin-top: 18px;\" checked=\"{{WhatsappToggle}}\" color=\"primary\"\n          (click)=\"whatsappToggle()\" [disabled]=\"WhatsappCheck\"></ion-toggle>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-2 p-4\">\n        <svg width=\"30\" height=\"30\" viewBox=\"0 0 448 448\" fill=\"none\">\n          <path\n            d=\"M308 224C308 243.425 306.95 262.15 305.113 280H142.888C141.05 262.15 139.213 243.425 139.213 224C139.213 204.575 141.05 185.85 142.888 168H305.113C306.95 185.85 308 204.575 308 224ZM440.912 168C445.55 185.938 448 204.662 448 224C448 243.338 445.55 262.062 440.912 280H333.2C335.037 261.975 336 242.463 336 224C336 204.75 335.037 186.025 333.2 168H440.912ZM431.725 140H329.613C320.863 84.1225 303.537 37.2925 281.225 7.38675C349.825 25.4538 405.475 75.1975 431.725 140ZM301.262 140H146.737C152.075 108.15 160.3 79.9575 170.362 57.1812C179.55 36.5225 189.787 21.5338 199.675 12.0838C209.475 2.78075 217.612 0 224 0C230.388 0 238.525 2.78075 248.325 12.0838C258.212 21.5338 268.45 36.5225 277.637 57.1812C287.7 79.9575 295.925 108.15 301.262 140ZM16.2838 140C42.5163 75.1975 98.175 25.4538 166.775 7.38675C144.463 37.2925 127.138 84.1225 118.388 140H16.2838ZM114.8 168C112.962 186.025 111.212 204.75 111.212 224C111.212 242.463 112.962 261.975 114.8 280H7.05687C2.45 262.062 0 243.338 0 224C0 204.662 2.45 185.938 7.05687 168H114.8ZM170.362 390.775C160.3 368.025 152.075 339.85 146.737 308H301.262C295.925 339.85 287.7 368.025 277.637 390.775C268.45 411.513 258.212 426.475 248.325 435.925C238.525 445.2 230.388 448 223.213 448C217.613 448 209.475 445.2 199.675 435.925C189.787 426.475 179.55 411.513 170.362 390.775ZM166.775 440.65C98.175 422.538 42.5163 372.837 16.2838 308H118.388C127.138 363.913 144.463 410.725 166.775 440.65ZM281.225 440.65C303.537 410.725 320.863 363.913 329.613 308H431.725C405.475 372.837 349.825 422.538 281.225 440.65Z\"\n            fill=\"black\" />\n        </svg>\n\n      </div>\n      <div class=\"col-8 text-left mt-3\">\n        <p class=\"title\" style=\"margin-top:12px;margin-left:20%;font-size: 15px;\" *ngIf=\"WebsiteChecked\"> Website</p>\n        <p *ngIf=\"WebsiteCheck\" style=\"margin-left: 20%;\">Website Link <br> Not Availabale</p>\n      </div>\n      <div class=\"col-2 \">\n        <ion-toggle style=\"margin-left:-25px;margin-top: 18px;\" checked=\"{{WebsiteToggle}}\" color=\"primary\"\n          (click)=\"websiteToggle()\" [disabled]=\"WebsiteCheck\"></ion-toggle>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-2 p-4\">\n        <svg width=\"30\" height=\"30\" fill=\"currentColor\" class=\"bi bi-youtube\" viewBox=\"0 0 16 16\">\n          <path\n            d=\"M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z\" />\n        </svg>\n\n      </div>\n      <div class=\"col-8 text-left mt-3\">\n        <p class=\"title\" style=\"margin-top:12px;margin-left:20%;font-size: 15px;\" *ngIf=\"YoutubeChecked\">Youtube</p>\n\n        <p *ngIf=\"YoutubeCheck\" style=\"margin-left: 20%;\">Youtube <br> Not Availabale</p>\n      </div>\n      <div class=\"col-2 \">\n        <ion-toggle style=\"margin-left:-25px;margin-top: 18px;\" checked=\"{{YoutubeToggle}}\" color=\"primary\"\n          (click)=\"youtubeToggle()\" [disabled]=\"YoutubeCheck\"></ion-toggle>\n      </div>\n    </div>\n\n\n\n\n\n\n    <div class=\"row mb-2\">\n      <div class=\"col-2 p-4\">\n        <svg width=\"30\" height=\"30\" viewBox=\"0 0 15 15\" fill=\"none\" >\n          <path\n            d=\"M13.3929 0H1.60714C1.1809 0 0.772119 0.167913 0.470721 0.466799C0.169323 0.765685 0 1.17106 0 1.59375L0 13.2812C0 13.7039 0.169323 14.1093 0.470721 14.4082C0.772119 14.7071 1.1809 14.875 1.60714 14.875H6.20257V9.81783H4.09319V7.4375H6.20257V5.62328C6.20257 3.55971 7.44141 2.41984 9.33884 2.41984C10.2475 2.41984 11.1978 2.58055 11.1978 2.58055V4.60594H10.1508C9.1192 4.60594 8.79743 5.24078 8.79743 5.89189V7.4375H11.1003L10.732 9.81783H8.79743V14.875H13.3929C13.8191 14.875 14.2279 14.7071 14.5293 14.4082C14.8307 14.1093 15 13.7039 15 13.2812V1.59375C15 1.17106 14.8307 0.765685 14.5293 0.466799C14.2279 0.167913 13.8191 0 13.3929 0V0Z\"\n            fill=\"black\" />\n        </svg>\n\n      </div>\n      <div class=\"col-8 text-left mt-3\">\n        <p class=\"title\" style=\"margin-top:12px;margin-left:20%;font-size: 15px;\" *ngIf=\"Facebookchecked\">Facebook</p>\n        <p *ngIf=\"Facebookcheck\" style=\"margin-left: 20%;\">Facebook <br> Not Availabale</p>\n      </div>\n      <div class=\"col-2 \">\n        <ion-toggle style=\"margin-left:-25px;margin-top: 18px;\" checked=\"{{FacebookToggle}}\" color=\"primary\"\n          (click)=\"facebookToggle()\" [disabled]=\"Facebookcheck\"></ion-toggle>\n      </div>\n    </div>\n\n\n  </div>\n\n  \n\n\n</ion-content>\n\n<div  *ngIf=\"PopupModel\" >\n  <div style=\"margin-top: -36% !important;margin: auto !important;\" class=\"row\" id=\"modal\">\n    <div class=\"hidden\">   \n      <div *ngIf=\"contactVisible\">\n\n        <svg (click)=\"backTo()\" style=\"margin-top: -8px; cursor: pointer; margin: 5px\"\n        xmlns=\"http://www.w3.org/2000/svg\" width=\"22\" height=\"20\" fill=\"#EB154B\" class=\"bi bi-arrow-left\"\n        viewBox=\"0 0 16 16\">\n        <path fill-rule=\"evenodd\"\n          d=\"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z\" />\n      </svg>\n\n        <!---------Edit-Social-Media-Details------------>\n        <div class=\"row ion-text-center mb-4 mt-1\" id=\"social-icon\">\n          <div class=\"col-2\">\n            <svg width=\"20\" height=\"20\" viewBox=\"0 0 448 448\" fill=\"none\">\n              <path\n                d=\"M384 0H64C28.65 0 0 28.65 0 64V384C0 419.35 28.65 448 64 448H384C419.35 448 448 419.35 448 384V64C448 28.65 419.3 0 384 0ZM351.6 289.5L339.98 339.89C338.347 347.015 332.08 352 324.74 352C198.64 352 96.04 249.4 96.04 123.2C96.04 115.872 101.024 109.61 108.15 107.98L158.53 96.35C165.874 94.647 173.41 98.459 176.46 105.412L199.73 159.692C202.449 166.083 200.613 173.522 195.238 177.912L168.3 200C185.29 234.61 213.44 262.75 248.07 279.75L270.09 252.84C274.434 247.449 281.94 245.59 288.33 248.356L342.57 271.606C349.5 274.6 353.3 282.2 351.6 289.5Z\"\n                fill=\"black\" />\n            </svg>\n          </div>\n          <div class=\"col-10\">\n            <input type=\"text\" id=\"edit-field\" [value]=\"contact_number\" [(ngModel)]=\"contact_number\"\n              placeholder=\"Enter Your Contact Number\">\n          </div>\n        </div>\n        <div class=\"row ion-text-center mb-4\" id=\"social-icon\">\n          <div class=\"col-2\">\n            <svg width=\"20\" height=\"20\" viewBox=\"0 0 72 72\" fill=\"none\" >\n              <path\n                d=\"M20.9941 0C9.41714 0 0 9.42586 0 21.0059V51.0059C0 62.5829 9.42586 72 21.0059 72H51.0059C62.5829 72 72 62.5741 72 50.9941V20.9941C72 9.41714 62.5741 0 50.9941 0H20.9941ZM57 12C58.656 12 60 13.344 60 15C60 16.656 58.656 18 57 18C55.344 18 54 16.656 54 15C54 13.344 55.344 12 57 12ZM36 18C45.927 18 54 26.073 54 36C54 45.927 45.927 54 36 54C26.073 54 18 45.927 18 36C18 26.073 26.073 18 36 18ZM36 24C32.8174 24 29.7652 25.2643 27.5147 27.5147C25.2643 29.7652 24 32.8174 24 36C24 39.1826 25.2643 42.2348 27.5147 44.4853C29.7652 46.7357 32.8174 48 36 48C39.1826 48 42.2348 46.7357 44.4853 44.4853C46.7357 42.2348 48 39.1826 48 36C48 32.8174 46.7357 29.7652 44.4853 27.5147C42.2348 25.2643 39.1826 24 36 24V24Z\"\n                fill=\"black\" />\n            </svg>\n          </div>\n          <div class=\"col-10\">\n            <input type=\"text\" id=\"edit-field\" [value]=\"instagram\" [(ngModel)]=\"instagram\"\n              placeholder=\"Enter Your Instagram\">\n          </div>\n        </div>\n        <div class=\"row ion-text-center mb-4\" id=\"social-icon\">\n          <div class=\"col-2\">\n            <svg width=\"20\" height=\"20\" viewBox=\"0 0 72 72\" fill=\"none\" >\n              <path\n                d=\"M36 0C16.119 0 0 16.119 0 36C0 42.7536 1.89702 49.0502 5.13281 54.4512L0.322266 72L18.2461 67.2949C23.4881 70.2752 29.5395 72 36 72C55.881 72 72 55.881 72 36C72 16.119 55.881 0 36 0ZM23.6777 19.207C24.2627 19.207 24.8638 19.2035 25.3828 19.2305C26.0248 19.2455 26.7236 19.2925 27.3926 20.7715C28.1876 22.5295 29.9186 26.9397 30.1406 27.3867C30.3626 27.8337 30.5199 28.3603 30.2109 28.9453C29.9169 29.5453 29.764 29.9085 29.332 30.4395C28.885 30.9555 28.3952 31.5963 27.9902 31.9863C27.5432 32.4333 27.0817 32.9235 27.5977 33.8145C28.1137 34.7055 29.9057 37.6264 32.5547 39.9844C35.9597 43.0264 38.8326 43.9612 39.7266 44.4082C40.6206 44.8552 41.1383 44.7855 41.6543 44.1855C42.1853 43.6005 43.8844 41.5932 44.4844 40.6992C45.0694 39.8052 45.6666 39.9599 46.4766 40.2539C47.2986 40.5479 51.6822 42.7073 52.5762 43.1543C53.4702 43.6013 54.0562 43.8225 54.2812 44.1855C54.5122 44.5605 54.5125 46.3457 53.7715 48.4277C53.0305 50.5067 49.3918 52.5172 47.7598 52.6582C46.1128 52.8112 44.5757 53.3985 37.0547 50.4375C27.9827 46.8645 22.2615 37.5727 21.8145 36.9727C21.3675 36.3877 18.1816 32.1417 18.1816 27.7617C18.1816 23.3667 20.486 21.2143 21.293 20.3203C22.115 19.4263 23.0777 19.207 23.6777 19.207Z\"\n                fill=\"black\" />\n            </svg>\n          </div>\n          <div class=\"col-10\">\n            <input type=\"text\" id=\"edit-field\" [value]=\"whatsapp\" [(ngModel)]=\"whatsapp\"\n              placeholder=\"Enter Your Whatsapp\">\n          </div>\n        </div>\n        <div class=\"row ion-text-center mb-4\" id=\"social-icon\">\n          <div class=\"col-2\">\n            <svg width=\"20\" height=\"20\" viewBox=\"0 0 448 448\" fill=\"none\">\n              <path\n                d=\"M308 224C308 243.425 306.95 262.15 305.113 280H142.888C141.05 262.15 139.213 243.425 139.213 224C139.213 204.575 141.05 185.85 142.888 168H305.113C306.95 185.85 308 204.575 308 224ZM440.912 168C445.55 185.938 448 204.662 448 224C448 243.338 445.55 262.062 440.912 280H333.2C335.037 261.975 336 242.463 336 224C336 204.75 335.037 186.025 333.2 168H440.912ZM431.725 140H329.613C320.863 84.1225 303.537 37.2925 281.225 7.38675C349.825 25.4538 405.475 75.1975 431.725 140ZM301.262 140H146.737C152.075 108.15 160.3 79.9575 170.362 57.1812C179.55 36.5225 189.787 21.5338 199.675 12.0838C209.475 2.78075 217.612 0 224 0C230.388 0 238.525 2.78075 248.325 12.0838C258.212 21.5338 268.45 36.5225 277.637 57.1812C287.7 79.9575 295.925 108.15 301.262 140ZM16.2838 140C42.5163 75.1975 98.175 25.4538 166.775 7.38675C144.463 37.2925 127.138 84.1225 118.388 140H16.2838ZM114.8 168C112.962 186.025 111.212 204.75 111.212 224C111.212 242.463 112.962 261.975 114.8 280H7.05687C2.45 262.062 0 243.338 0 224C0 204.662 2.45 185.938 7.05687 168H114.8ZM170.362 390.775C160.3 368.025 152.075 339.85 146.737 308H301.262C295.925 339.85 287.7 368.025 277.637 390.775C268.45 411.513 258.212 426.475 248.325 435.925C238.525 445.2 230.388 448 223.213 448C217.613 448 209.475 445.2 199.675 435.925C189.787 426.475 179.55 411.513 170.362 390.775ZM166.775 440.65C98.175 422.538 42.5163 372.837 16.2838 308H118.388C127.138 363.913 144.463 410.725 166.775 440.65ZM281.225 440.65C303.537 410.725 320.863 363.913 329.613 308H431.725C405.475 372.837 349.825 422.538 281.225 440.65Z\"\n                fill=\"black\" />\n            </svg>\n          </div>\n          <div class=\"col-10\">\n            <input type=\"text\" id=\"edit-field\" [value]=\"website\" [(ngModel)]=\"website\"\n              placeholder=\"Enter Your Website Url\">\n          </div>\n        </div>\n        <div class=\"row ion-text-center mb-4\" id=\"social-icon\">\n          <div class=\"col-2\">\n            <svg width=\"20\" height=\"20\" fill=\"currentColor\" class=\"bi bi-youtube\" viewBox=\"0 0 16 16\">\n              <path\n                d=\"M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z\" />\n            </svg>\n          </div>\n          <div class=\"col-10\">\n            <input type=\"text\" id=\"edit-field\" [value]=\"youtube\" [(ngModel)]=\"youtube\"\n              placeholder=\"Enter Your Youtube\">\n          </div>\n        </div>\n        <div class=\"row ion-text-center mb-4\" id=\"social-icon\">\n          <div class=\"col-2\">\n            <svg width=\"20\" height=\"20\" viewBox=\"0 0 15 15\" fill=\"none\" >\n              <path\n                d=\"M13.3929 0H1.60714C1.1809 0 0.772119 0.167913 0.470721 0.466799C0.169323 0.765685 0 1.17106 0 1.59375L0 13.2812C0 13.7039 0.169323 14.1093 0.470721 14.4082C0.772119 14.7071 1.1809 14.875 1.60714 14.875H6.20257V9.81783H4.09319V7.4375H6.20257V5.62328C6.20257 3.55971 7.44141 2.41984 9.33884 2.41984C10.2475 2.41984 11.1978 2.58055 11.1978 2.58055V4.60594H10.1508C9.1192 4.60594 8.79743 5.24078 8.79743 5.89189V7.4375H11.1003L10.732 9.81783H8.79743V14.875H13.3929C13.8191 14.875 14.2279 14.7071 14.5293 14.4082C14.8307 14.1093 15 13.7039 15 13.2812V1.59375C15 1.17106 14.8307 0.765685 14.5293 0.466799C14.2279 0.167913 13.8191 0 13.3929 0V0Z\"\n                fill=\"black\" />\n            </svg>\n          </div>\n          <div class=\"col-10\">\n            <input type=\"text\" id=\"edit-field\" [value]=\"facebook\" [(ngModel)]=\"facebook\"\n              placeholder=\"Enter Your Facebook\">\n          </div>\n        </div>\n\n        <div class=\"mt-1\">\n          <div class=\"row ion-text-center mt-1\">\n            <div class=\"col-8 mt-1\">\n              <p style=\"font-size: 14px;\" class=\"\">\n\n                <!---------  Delivery icon ---------->\n      \n                <svg style=\"margin-left: -18%\" width=\"38\" height=\"20\" viewBox=\"0 0 38 30\" fill=\"none\">\n                  <path\n                    d=\"M6.65 0C5.07597 0 3.8 1.25918 3.8 2.8125V5.625H0.95C0.425303 5.625 0 6.04687 0 6.5625C0 7.07813 0.425303 7.5 0.95 7.5H16.15C16.6725 7.5 17.1 7.92187 17.1 8.4375C17.1 8.95313 16.6725 9.375 16.15 9.375H2.85C2.32512 9.375 1.9 9.79687 1.9 10.3125C1.9 10.8281 2.32512 11.25 2.85 11.25H14.25C14.7725 11.25 15.2 11.6719 15.2 12.1875C15.2 12.7031 14.7725 13.125 14.25 13.125H0.95C0.425303 13.125 0 13.5469 0 14.0625C0 14.5781 0.425303 15 0.95 15H12.35C12.8725 15 13.3 15.4219 13.3 15.9375C13.3 16.4531 12.8725 16.875 12.35 16.875H3.8V24.375C3.8 27.4805 6.29969 30 9.5 30C12.6469 30 15.2 27.4805 15.2 24.375H22.8C22.8 27.4805 25.2997 30 28.5 30C31.6469 30 34.2 27.4805 34.2 24.375H36.1C37.1509 24.375 38 23.5371 38 22.5C38 21.4629 37.1509 20.625 36.1 20.625V13.9043C36.1 12.9082 35.7022 11.9531 34.9897 11.25L30.4 6.7207C29.6341 6.01758 28.7197 5.625 27.7103 5.625H24.7V2.8125C24.7 1.25918 23.4234 0 21.85 0H6.65ZM32.3 13.9043V15H24.7V9.375H27.7103L32.3 13.9043ZM9.5 27.1875C7.92656 27.1875 6.65 25.9277 6.65 24.375C6.65 22.8223 7.92656 21.5625 9.5 21.5625C11.0734 21.5625 12.35 22.8223 12.35 24.375C12.35 25.9277 11.0734 27.1875 9.5 27.1875ZM31.35 24.375C31.35 25.9277 30.0734 27.1875 28.5 27.1875C26.9266 27.1875 25.65 25.9277 25.65 24.375C25.65 22.8223 26.9266 21.5625 28.5 21.5625C30.0734 21.5625 31.35 22.8223 31.35 24.375Z\"\n                    fill=\"#121212\" />\n                </svg>\n                <span style=\"margin-left:8%\">Delivery Availability:</span>\n              </p>\n            </div>\n            <div class=\"col-4 mt-1\">\n              <!-- <input type=\"checkbox\" (click)=\"deliveryStatuss($event)\" value=\"null\"\n                ng-checked={{Deliveryavailability}}> -->\n              <ion-toggle [checked]=\"deliveryStatus\" (ionChange)=\"deliveryStatustoggle()\"></ion-toggle>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\" >\n          <div class=\"col-6\">\n            <ion-button (click)=\"backToprivious()\"  style=\"width: 85%;\"  class=\"secondarySmallBtn mb-4\" color=\"none\" >\n              Cancel </ion-button>\n          </div>\n\n          <div class=\"col-6\">\n            <ion-button (click)=\"updateProfile()\"  style=\"width: 85%;\"  class=\"primarySmallBtn mb-4\" color=\"none\" >\n              Update</ion-button>\n          </div>\n        \n        </div>\n      </div>\n    </div>\n  </div>\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_tab5_tab5_module_ts.js.map