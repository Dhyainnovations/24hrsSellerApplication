"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_t-and-c_t-and-c_module_ts"],{

/***/ 1108:
/*!***************************************************!*\
  !*** ./src/app/t-and-c/t-and-c-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TAndCPageRoutingModule": () => (/* binding */ TAndCPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _t_and_c_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./t-and-c.page */ 6965);




const routes = [
    {
        path: '',
        component: _t_and_c_page__WEBPACK_IMPORTED_MODULE_0__.TAndCPage
    }
];
let TAndCPageRoutingModule = class TAndCPageRoutingModule {
};
TAndCPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TAndCPageRoutingModule);



/***/ }),

/***/ 6878:
/*!*******************************************!*\
  !*** ./src/app/t-and-c/t-and-c.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TAndCPageModule": () => (/* binding */ TAndCPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _t_and_c_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./t-and-c-routing.module */ 1108);
/* harmony import */ var _t_and_c_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./t-and-c.page */ 6965);







let TAndCPageModule = class TAndCPageModule {
};
TAndCPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _t_and_c_routing_module__WEBPACK_IMPORTED_MODULE_0__.TAndCPageRoutingModule
        ],
        declarations: [_t_and_c_page__WEBPACK_IMPORTED_MODULE_1__.TAndCPage]
    })
], TAndCPageModule);



/***/ }),

/***/ 6965:
/*!*****************************************!*\
  !*** ./src/app/t-and-c/t-and-c.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TAndCPage": () => (/* binding */ TAndCPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _t_and_c_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./t-and-c.page.html?ngResource */ 3677);
/* harmony import */ var _t_and_c_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./t-and-c.page.scss?ngResource */ 5525);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);





let TAndCPage = class TAndCPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    backToprivious() {
        this.router.navigate(['/support']);
    }
};
TAndCPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
TAndCPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-t-and-c',
        template: _t_and_c_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_t_and_c_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TAndCPage);



/***/ }),

/***/ 5525:
/*!******************************************************!*\
  !*** ./src/app/t-and-c/t-and-c.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = ".accept-btn {\n  border-radius: 5px !important;\n  background: var(--ion-color-secondary);\n  color: var(--ion-color-light);\n  border: 1px solid #fff;\n  margin-bottom: 10px !important;\n  margin: 20px;\n}\n\nion-content {\n  background-color: var(--ion-color-light) !important;\n  --offset-bottom: auto !important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n\n.container {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInQtYW5kLWMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQUE7RUFDQSxzQ0FBQTtFQUNBLDZCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLG1EQUFBO0VBSUEsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFGRjs7QUFJRTtFQUNFLGFBQUE7QUFGSjs7QUFNQTtFQUNFLGVBQUE7QUFIRiIsImZpbGUiOiJ0LWFuZC1jLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY2NlcHQtYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQgICA6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICBjb2xvciAgICAgICAgOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBib3JkZXIgICAgICAgOiAxcHggc29saWQgI2ZmZjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4gICAgICAgOiAyMHB4XG59XG5cbmlvbi1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KSAhaW1wb3J0YW50O1xuICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCBkYXJrdHVycXVvaXNlXG4gIC8vIDAlLCAjZDFmMmU3XG4gIC8vIDEwMCUpICFpbXBvcnRhbnQ7XG4gIC0tb2Zmc2V0LWJvdHRvbSA6IGF1dG8gIWltcG9ydGFudDtcbiAgLS1vdmVyZmxvdyAgICAgIDogaGlkZGVuO1xuICBvdmVyZmxvdyAgICAgICAgOiBhdXRvO1xuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi5jb250YWluZXIge1xuICBmb250LXNpemU6IDEycHg7XG59Il19 */";

/***/ }),

/***/ 3677:
/*!******************************************************!*\
  !*** ./src/app/t-and-c/t-and-c.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <div class=\"container mt-5\" style=\"justify-content: center;\">\n\n    <div class=\"col-12 ion-text-left \" style=\"margin-top: 20px;\">\n      <svg (click)=\"backToprivious()\" style=\"margin-top:-8px;cursor:pointer\" xmlns=\"http://www.w3.org/2000/svg\"\n        width=\"16\" height=\"16\" fill=\"#EB154B\" class=\"bi bi-arrow-left\" viewBox=\"0 0 16 16\">\n        <path fill-rule=\"evenodd\"\n          d=\"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z\" />\n      </svg>\n      <span class=\"seller mx-2\"><b>24hrs</b></span>\n    </div>\n    <h3><b>TERMS AND CONDITIONS:</b></h3>\n    <h6><b>TERMS OF SERVICE :</b></h6>\n    <p>Please read the following terms & conditions carefully since your use of the 24HRS APPLICATION and its Services\n      is subject to the acceptance of the same. By subscribing to or using any of our services you agree that you have\n      read, understood, and are bound by these Terms & Conditions, regardless of how you subscribe to or use these\n      Services. In case you do not agree with these Terms & Conditions, in whole or in part, you are advised to not\n      subscribe to our Services and immediately stop using our services and application.</p>\n\n    <h6><b>TERMS OF USE INTRODUCTION:</b></h6>\n    <p>You are reading a legal document which is an agreement between you, the User (referred as you, your, User,\n      Customer hereafter), and us (referred as us, we, our, 24HRS hereafter), the 24HRS APPLICATION registered as a\n      company. The content of these Terms & Conditions can be changed or amended at any time by us and we reserve the\n      rights for the same. If we make changes that affect your use of the APPLICATION or our services, we will post\n      notice of the change on the Terms of Use page. 24hrs APPLICATION at its sole discretion reserves the right not to\n      accept a User from registering on the APPLICATION without assigning any reason thereof. By signing up for an\n      account or using 24HRS APPLICATION you agree to these Terms of Use and acknowledge that you will regularly visit\n      the Terms of Use to familiarize yourself with any updates. These Terms of Use were last updated on 08TH MAY 2021.\n    </p>\n\n    <h6><b>DEFINITIONS USED IN THE TERM & CONDITIONS:</b></h6>\n    <p> 1. Seller refers to a third-party seller of goods or services for which we provide a discount voucher or coupon.\n      2. Services refer to any of the services offered by 24hrs application through its application or any other forms\n      of communication.\n      3. Login\" means we have enabled the \"User\" to register and have access to certain elements of the website under\n      our terms of use.\n      4. \"User\" means any person who visits or uses the application.</p>\n\n    <h6> <b>SERVICES OFFERED :</b></h6>\n    <p>The Services provided by the 24hrs application shall be subject to Terms of use which may be updated by 24hrs\n      from time to time. Please re-visit the “terms of use” on our 24hrs app to stay abreast of any changes that we may\n      introduce.</p>\n    <p style=\"color: red;\">The user sign-ups through the 24hrs user app by answering some general questions and\n      selecting the desired categories for which the user would love to see the deals and offers. On the home page, the\n      offers and deals of the selected categories pop up with the website link, Phone number, whats-app option, and also\n      inbuilt chat opinion. By clicking the use offer and accepting some terms and conditions the user can claim the\n      offer. The offer alarm option lets the users set an alarm for a particular store or a product in that way the user\n      will not miss out on an offer. This is a win-win situation for both the seller and the user. </p>\n    <p>We suggest that you exercise utmost care and caution and carefully read the fine print associated with each such\n      offer. All deals, coupons, and promotions on the mobile application are subject to change without notice. 24hrs\n      does not guarantee or endorse the accuracy of links, coupon codes, or any deals on tour mobile application or any\n      products and services or their usability, merchantability, and suitability for your need and requirements. You\n      agree to comply with all the rules and regulations that apply to your use of our mobile application, including,\n      without limitation, those governing the transmission or use of any data, information, or software.</p>\n\n    <h6><b>OWNERSHIP OF THE SITE :</b></h6>\n    <p>Any content on the Site and the infrastructure used to provide the Site are proprietary to us, our affiliates,\n      Sellers, and other content providers. 24HRS grants you a limited, personal, non-transferable, nonexclusive,\n      revocable license to use the APPLICATION under these Terms of Use and to any additional terms and policies set\n      forth by 24HRS and you agree not to reproduce, distribute, create derivative works from, publicly display,\n      publicly perform, license, sell, or re-sell any content, software, products, or services obtained from or through\n      the APPLICATION without the express permission of 24HRS APPLICATION.</p>\n\n    <h6><b>ACCEPTABLE USE:</b> </h6>\n    <p>As a condition of your use of the APPLICATION, you agree NOT TO:\n      1. Allow or assist any other person to impersonate you.\n      2. Share your password or log in with any other person.\n      3. Create more than one account, forging user names, manipulating identifiers, or otherwise impersonating any\n      other person or misrepresenting your identity or affiliation with any person or entity.\n      4. Violate or attempt to violate any security features of the Services.\n      5. use the Site with crawlers, robots, data mining, or extraction tools or any other functionality introducing\n      viruses, worms, software, Trojan horses, or other similar harmful code into the Services.\n      6. Tamper with the operation, functionality, or the security of the Services.\n      7. Misuse, trick, or otherwise interfere with the functioning of the Services;\n      8. Collect email addresses or other contact information of other users or clients from the Services by electronic\n      or other means.\n      9. Act illegally or maliciously against the business interests or reputation of 24HRS or the SELLERS promoted via\n      the Services.\n      10. Use the Services or any of its contents to advertise or solicit, for any other commercial, political or\n      religious purpose, or to compete, directly or indirectly with 24HRS..\n      AND ANY ACT THAT VIOLATES APPLICABLE LAW IN INDIA.</p>\n\n    <h6><b>REGISTRATION:</b></h6>\n    <p>To utilize certain portions of the Services, you may be required to complete a registration process and establish\n      an account with 24HRS APPLICATION. You represent and warrant that all information provided by you to 24HRS is\n      current, accurate, and complete and that you will maintain the accuracy and completeness of this information on a\n      prompt, timely basis. You are solely responsible for maintaining the confidentiality and security of your password\n      and account(s). You understand and agree that you are individually and fully responsible for all actions made from\n      your Account. Any account you create is not transferrable.</p>\n\n    <h6><b>PRIVACY: </b></h6>\n    <p>24HRS takes the privacy of your personal information seriously. We encourage you to carefully review our Privacy\n      Statement for important disclosures about ways that we may collect, use, personal data and your choices  which may\n      be found at Privacy Policy, is expressly incorporated herein by reference and made a part of these Terms</p>\n\n    <h6><b>USE OF 24HRS APPLICATION:</b></h6>\n    <p>At no point does 24 HRS guarantee that its APPLICATION or Service will be free of errors, omissions, and faults\n      though we will ensure reasonable measures to maintain the accuracy of all data presented on the APPLICATION. We do\n      not guarantee uninterrupted APPLICATION and access to the same may be suspended, restricted, or terminated at any\n      point in time. We reserve the right to change, modify or delete any information or any discount OR voucher code at\n      any time without giving any prior notice Nothing in this Agreement can be used to construe a partnership or a\n      joint venture between you, the user, and us, 24HRS. We may change the format and content of our 24HRS application\n      from time to time. You agree that your use of OUR 24HRS application and its products and services is on an 'as is'\n      and 'as available basis and at your sole discretion and risk. We do not accept any liability for any loss or\n      claims arising from Any Loss, Damage, or Harm Caused Due To Action Taken Upon Any Advice Provided/Posted On our\n      mobile application.</p>\n\n    <h6><b>INTELLECTUAL PROPERTY INFRINGEMENT:</b></h6>\n    <p>The Sellers/brands whose products, services or deals are made available on mobile application may be protected by\n      intellectual property laws of India or a country outside India. Your attempt to modify, copy, distribute,\n      transmit, resell, redistribute, broadcast, display, perform, reproduce, publish, license, frame, transfer, or\n      otherwise use in whole or in part, any intellectual property contained in the products or services of such\n      Sellers/brands, may subject you to infringement consequences in accordance with the policies of such\n      brands/Sellers which may be enforced by them in India or outside India. We are not bound by any agreement with any\n      of the brands/sellers for ensuring security of their intellectual property appearing on our our mobile\n      application. You hereby indemnify and keep indemnified, saved, defended and harmless 24 HRS and all persons\n      claiming under 24 HRS('Indemnified Persons'), from and against all losses and/or damages arising as a result of\n      any notices, proceedings, litigations, claims, penalties, demands and costs that may be made and/or raised on the\n      Indemnified Persons by any of the brands/Sellers or any concerned authority and/or alleging infringement of their\n      intellectual property contained in their brands/deals. </p>\n\n    <h6><b>TRADEMARK INFORMATION:</b></h6>\n    <p>You agree that all of 24 HRS trademarks, trade names, service marks, and other logos and brand features that are\n      displayed via the Services (collectively, the \"Marks\") are trademarks and the property of 24 HRS. You agree not to\n      display or use our Marks in any manner without 24 HRS’s prior permission. Third-party trademarks are the property\n      of their respective third-party owners. Presence of a third-party trademark on the Services does not mean that 24\n      HRS has any relationship with that third party or that such third party endorses the Services or 24 HRS.</p>\n\n    <h6><b>INDEMNIFICATION:</b></h6>\n    <p>The User agrees to defend, indemnify and hold harmless 24HRS, its Subsidiaries and Business Associates, and their\n      respective Directors, officers, employees, and agents from and against all claims and expenses, including\n      attorneys’ fees, arising out of the use of the mobile application by the User, the use of the Voucher, the use of\n      the mobile application through your password, any breach of this Agreement by you. </p>\n\n    <h6><b>DISCLAIMER:</b></h6>\n    <p>The services are provided by 24HRS on an \"as is\" and \"as available\" basis. 24HRS makes no representations or\n      warranties of any kind, express or implied, as to the operation of the services or the information, content,\n      materials, or products available via the services.. you expressly agree that your use of the services is at your\n      sole risk.</p>\n\n\n    <h6><b>LIMITED LIABILITY:</b></h6>\n    <p>24hrs will not be liable for any damages of any kind arising from the use of these services, including, but not\n      limited to direct, indirect, incidental, punitive, and consequential damages.</p>\n\n    <h6><b>TERMINATION:</b></h6>\n    <p>All rights granted to you under the terms of this \"Terms of Use\" document will terminate immediately if you\n      breach any of such terms and conditions.</p>\n\n    <h6><b>FORCE MAJEURE:</b></h6>\n    <p>24HRS shall be excused from performance under these Terms of Use, to the extent it or a SELLER is prevented or\n      delayed from performing, in whole or in part, as a result of an event or series of events caused by or resulting\n      from weather conditions or other elements of nature or acts of God, acts of war, acts of terrorism, insurrection,\n      riots, civil disorders, or rebellion, quarantines or embargoes, labor strikes, error or disruption to major\n      computer hardware or networks or software failure, other causes beyond the reasonable control of 24HRS, as\n      applicable</p>\n\n    <h6><b>SERVICES TAKE DOWN POLICY:</b> </h6>\n    <p>We want to list the OFFERS, COUPONS, and services of genuine sellers on a mobile application to ensure that\n      infringing products are removed from the APPLICATION, as they affect your and genuine Seller’s valuable trust.\n      We do not and cannot verify if the Sellers have the right or ability to sell or distribute their listed OFFERS,\n      COUPONS, and services. However, we are committed to removing any infringing or unlicensed product or service once\n      an authorized representative of the rights owner properly reports them to us. We sincerely want to ensure that\n      item listings do not infringe upon the copyright, trademark, or other intellectual property rights of third\n      parties. We can identify and request the removal of allegedly infringing products and materials. Any person or\n      company who holds intellectual property rights (such as a copyright, trademark, or patent) that may be infringed\n      upon by OFFERS, COUPONS, and services listed on 24HRS APPLICATION is encouraged to report the same to our Legal\n      Team.</p>\n\n    <h6><b>DISPUTE RESOLUTION AND GOVERNING LAW:</b></h6>\n    <p>The terms of this “Terms of Use” document are exclusively based on and subject to the laws of India. You hereby\n      consent to ARBITRATION IN CHENNAI in all disputes arising out of or relating to the use of this Website and/or our\n      mobile application.</p>\n  </div>\n\n \n  \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_t-and-c_t-and-c_module_ts.js.map