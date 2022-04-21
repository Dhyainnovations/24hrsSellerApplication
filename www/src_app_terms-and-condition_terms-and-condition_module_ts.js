"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_terms-and-condition_terms-and-condition_module_ts"],{

/***/ 1919:
/*!***************************************************************************!*\
  !*** ./src/app/terms-and-condition/terms-and-condition-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsAndConditionPageRoutingModule": () => (/* binding */ TermsAndConditionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _terms_and_condition_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terms-and-condition.page */ 622);




const routes = [
    {
        path: '',
        component: _terms_and_condition_page__WEBPACK_IMPORTED_MODULE_0__.TermsAndConditionPage
    }
];
let TermsAndConditionPageRoutingModule = class TermsAndConditionPageRoutingModule {
};
TermsAndConditionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TermsAndConditionPageRoutingModule);



/***/ }),

/***/ 7756:
/*!*******************************************************************!*\
  !*** ./src/app/terms-and-condition/terms-and-condition.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsAndConditionPageModule": () => (/* binding */ TermsAndConditionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _terms_and_condition_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terms-and-condition-routing.module */ 1919);
/* harmony import */ var _terms_and_condition_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./terms-and-condition.page */ 622);







let TermsAndConditionPageModule = class TermsAndConditionPageModule {
};
TermsAndConditionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _terms_and_condition_routing_module__WEBPACK_IMPORTED_MODULE_0__.TermsAndConditionPageRoutingModule
        ],
        declarations: [_terms_and_condition_page__WEBPACK_IMPORTED_MODULE_1__.TermsAndConditionPage]
    })
], TermsAndConditionPageModule);



/***/ }),

/***/ 622:
/*!*****************************************************************!*\
  !*** ./src/app/terms-and-condition/terms-and-condition.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsAndConditionPage": () => (/* binding */ TermsAndConditionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _terms_and_condition_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terms-and-condition.page.html?ngResource */ 9379);
/* harmony import */ var _terms_and_condition_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./terms-and-condition.page.scss?ngResource */ 88);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);






let TermsAndConditionPage = class TermsAndConditionPage {
    constructor(router, route) {
        this.router = router;
    }
    ngOnInit() {
    }
    acceptConditions() {
        this.router.navigate(['/signuppage'], { queryParams: { checkbox: true } });
    }
    backToprivious() {
        this.router.navigate(['/signuppage']);
    }
};
TermsAndConditionPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute }
];
TermsAndConditionPage.propDecorators = {
    scroller: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ['scroller1',] }]
};
TermsAndConditionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-terms-and-condition',
        template: _terms_and_condition_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_terms_and_condition_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TermsAndConditionPage);



/***/ }),

/***/ 88:
/*!******************************************************************************!*\
  !*** ./src/app/terms-and-condition/terms-and-condition.page.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = ".accept-btn {\n  border-radius: 5px !important;\n  background: #0D0D0D;\n  color: #fff;\n  border: 1px solid #fff;\n  margin-bottom: 10px !important;\n  margin: 20px;\n}\n\nion-content {\n  background-color: #fff !important;\n  --offset-bottom: auto !important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n\n.container {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlcm1zLWFuZC1jb25kaXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFJQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUZGOztBQUlFO0VBQ0UsYUFBQTtBQUZKOztBQU1BO0VBQ0UsZUFBQTtBQUhGIiwiZmlsZSI6InRlcm1zLWFuZC1jb25kaXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjY2VwdC1idG4ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQgICA6ICMwRDBEMEQ7XHJcbiAgY29sb3IgICAgICAgIDogI2ZmZjtcclxuICBib3JkZXIgICAgICAgOiAxcHggc29saWQgI2ZmZjtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luICAgICAgIDogMjBweFxyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIGRhcmt0dXJxdW9pc2VcclxuICAvLyAwJSwgI2QxZjJlN1xyXG4gIC8vIDEwMCUpICFpbXBvcnRhbnQ7XHJcbiAgLS1vZmZzZXQtYm90dG9tIDogYXV0byAhaW1wb3J0YW50O1xyXG4gIC0tb3ZlcmZsb3cgICAgICA6IGhpZGRlbjtcclxuICBvdmVyZmxvdyAgICAgICAgOiBhdXRvO1xyXG5cclxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59Il19 */";

/***/ }),

/***/ 9379:
/*!******************************************************************************!*\
  !*** ./src/app/terms-and-condition/terms-and-condition.page.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <div class=\"container mt-5\" style=\"justify-content: center;\">\r\n\r\n    <div class=\"col-12 ion-text-left \" style=\"margin-top: 20px;\">\r\n      <svg (click)=\"backToprivious()\" style=\"margin-top:-8px;cursor:pointer\" xmlns=\"http://www.w3.org/2000/svg\"\r\n        width=\"16\" height=\"16\" fill=\"#EB154B\" class=\"bi bi-arrow-left\" viewBox=\"0 0 16 16\">\r\n        <path fill-rule=\"evenodd\"\r\n          d=\"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z\" />\r\n      </svg>\r\n      <span class=\"seller mx-2\"><b>24hrs</b></span>\r\n    </div>\r\n    <h3><b>TERMS AND CONDITIONS:</b></h3>\r\n    <h6><b>TERMS OF SERVICE :</b></h6>\r\n    <p>Please read the following terms & conditions carefully since your use of the 24HRS APPLICATION and its Services\r\n      is subject to the acceptance of the same. By subscribing to or using any of our services you agree that you have\r\n      read, understood, and are bound by these Terms & Conditions, regardless of how you subscribe to or use these\r\n      Services. In case you do not agree with these Terms & Conditions, in whole or in part, you are advised to not\r\n      subscribe to our Services and immediately stop using our services and application.</p>\r\n\r\n    <h6><b>TERMS OF USE INTRODUCTION:</b></h6>\r\n    <p>You are reading a legal document which is an agreement between you, the User (referred as you, your, User,\r\n      Customer hereafter), and us (referred as us, we, our, 24HRS hereafter), the 24HRS APPLICATION registered as a\r\n      company. The content of these Terms & Conditions can be changed or amended at any time by us and we reserve the\r\n      rights for the same. If we make changes that affect your use of the APPLICATION or our services, we will post\r\n      notice of the change on the Terms of Use page. 24hrs APPLICATION at its sole discretion reserves the right not to\r\n      accept a User from registering on the APPLICATION without assigning any reason thereof. By signing up for an\r\n      account or using 24HRS APPLICATION you agree to these Terms of Use and acknowledge that you will regularly visit\r\n      the Terms of Use to familiarize yourself with any updates. These Terms of Use were last updated on 08TH MAY 2021.\r\n    </p>\r\n\r\n    <h6><b>DEFINITIONS USED IN THE TERM & CONDITIONS:</b></h6>\r\n    <p> 1. Seller refers to a third-party seller of goods or services for which we provide a discount voucher or coupon.\r\n      2. Services refer to any of the services offered by 24hrs application through its application or any other forms\r\n      of communication.\r\n      3. Login\" means we have enabled the \"User\" to register and have access to certain elements of the website under\r\n      our terms of use.\r\n      4. \"User\" means any person who visits or uses the application.</p>\r\n\r\n    <h6> <b>SERVICES OFFERED :</b></h6>\r\n    <p>The Services provided by the 24hrs application shall be subject to Terms of use which may be updated by 24hrs\r\n      from time to time. Please re-visit the “terms of use” on our 24hrs app to stay abreast of any changes that we may\r\n      introduce.</p>\r\n    <p style=\"color: red;\">The user sign-ups through the 24hrs user app by answering some general questions and\r\n      selecting the desired categories for which the user would love to see the deals and offers. On the home page, the\r\n      offers and deals of the selected categories pop up with the website link, Phone number, whats-app option, and also\r\n      inbuilt chat opinion. By clicking the use offer and accepting some terms and conditions the user can claim the\r\n      offer. The offer alarm option lets the users set an alarm for a particular store or a product in that way the user\r\n      will not miss out on an offer. This is a win-win situation for both the seller and the user. </p>\r\n    <p>We suggest that you exercise utmost care and caution and carefully read the fine print associated with each such\r\n      offer. All deals, coupons, and promotions on the mobile application are subject to change without notice. 24hrs\r\n      does not guarantee or endorse the accuracy of links, coupon codes, or any deals on tour mobile application or any\r\n      products and services or their usability, merchantability, and suitability for your need and requirements. You\r\n      agree to comply with all the rules and regulations that apply to your use of our mobile application, including,\r\n      without limitation, those governing the transmission or use of any data, information, or software.</p>\r\n\r\n    <h6><b>OWNERSHIP OF THE SITE :</b></h6>\r\n    <p>Any content on the Site and the infrastructure used to provide the Site are proprietary to us, our affiliates,\r\n      Sellers, and other content providers. 24HRS grants you a limited, personal, non-transferable, nonexclusive,\r\n      revocable license to use the APPLICATION under these Terms of Use and to any additional terms and policies set\r\n      forth by 24HRS and you agree not to reproduce, distribute, create derivative works from, publicly display,\r\n      publicly perform, license, sell, or re-sell any content, software, products, or services obtained from or through\r\n      the APPLICATION without the express permission of 24HRS APPLICATION.</p>\r\n\r\n    <h6><b>ACCEPTABLE USE:</b> </h6>\r\n    <p>As a condition of your use of the APPLICATION, you agree NOT TO:\r\n      1. Allow or assist any other person to impersonate you.\r\n      2. Share your password or log in with any other person.\r\n      3. Create more than one account, forging user names, manipulating identifiers, or otherwise impersonating any\r\n      other person or misrepresenting your identity or affiliation with any person or entity.\r\n      4. Violate or attempt to violate any security features of the Services.\r\n      5. use the Site with crawlers, robots, data mining, or extraction tools or any other functionality introducing\r\n      viruses, worms, software, Trojan horses, or other similar harmful code into the Services.\r\n      6. Tamper with the operation, functionality, or the security of the Services.\r\n      7. Misuse, trick, or otherwise interfere with the functioning of the Services;\r\n      8. Collect email addresses or other contact information of other users or clients from the Services by electronic\r\n      or other means.\r\n      9. Act illegally or maliciously against the business interests or reputation of 24HRS or the SELLERS promoted via\r\n      the Services.\r\n      10. Use the Services or any of its contents to advertise or solicit, for any other commercial, political or\r\n      religious purpose, or to compete, directly or indirectly with 24HRS..\r\n      AND ANY ACT THAT VIOLATES APPLICABLE LAW IN INDIA.</p>\r\n\r\n    <h6><b>REGISTRATION:</b></h6>\r\n    <p>To utilize certain portions of the Services, you may be required to complete a registration process and establish\r\n      an account with 24HRS APPLICATION. You represent and warrant that all information provided by you to 24HRS is\r\n      current, accurate, and complete and that you will maintain the accuracy and completeness of this information on a\r\n      prompt, timely basis. You are solely responsible for maintaining the confidentiality and security of your password\r\n      and account(s). You understand and agree that you are individually and fully responsible for all actions made from\r\n      your Account. Any account you create is not transferrable.</p>\r\n\r\n    <h6><b>PRIVACY: </b></h6>\r\n    <p>24HRS takes the privacy of your personal information seriously. We encourage you to carefully review our Privacy\r\n      Statement for important disclosures about ways that we may collect, use, personal data and your choices  which may\r\n      be found at Privacy Policy, is expressly incorporated herein by reference and made a part of these Terms</p>\r\n\r\n    <h6><b>USE OF 24HRS APPLICATION:</b></h6>\r\n    <p>At no point does 24 HRS guarantee that its APPLICATION or Service will be free of errors, omissions, and faults\r\n      though we will ensure reasonable measures to maintain the accuracy of all data presented on the APPLICATION. We do\r\n      not guarantee uninterrupted APPLICATION and access to the same may be suspended, restricted, or terminated at any\r\n      point in time. We reserve the right to change, modify or delete any information or any discount OR voucher code at\r\n      any time without giving any prior notice Nothing in this Agreement can be used to construe a partnership or a\r\n      joint venture between you, the user, and us, 24HRS. We may change the format and content of our 24HRS application\r\n      from time to time. You agree that your use of OUR 24HRS application and its products and services is on an 'as is'\r\n      and 'as available basis and at your sole discretion and risk. We do not accept any liability for any loss or\r\n      claims arising from Any Loss, Damage, or Harm Caused Due To Action Taken Upon Any Advice Provided/Posted On our\r\n      mobile application.</p>\r\n\r\n    <h6><b>INTELLECTUAL PROPERTY INFRINGEMENT:</b></h6>\r\n    <p>The Sellers/brands whose products, services or deals are made available on mobile application may be protected by\r\n      intellectual property laws of India or a country outside India. Your attempt to modify, copy, distribute,\r\n      transmit, resell, redistribute, broadcast, display, perform, reproduce, publish, license, frame, transfer, or\r\n      otherwise use in whole or in part, any intellectual property contained in the products or services of such\r\n      Sellers/brands, may subject you to infringement consequences in accordance with the policies of such\r\n      brands/Sellers which may be enforced by them in India or outside India. We are not bound by any agreement with any\r\n      of the brands/sellers for ensuring security of their intellectual property appearing on our our mobile\r\n      application. You hereby indemnify and keep indemnified, saved, defended and harmless 24 HRS and all persons\r\n      claiming under 24 HRS('Indemnified Persons'), from and against all losses and/or damages arising as a result of\r\n      any notices, proceedings, litigations, claims, penalties, demands and costs that may be made and/or raised on the\r\n      Indemnified Persons by any of the brands/Sellers or any concerned authority and/or alleging infringement of their\r\n      intellectual property contained in their brands/deals. </p>\r\n\r\n    <h6><b>TRADEMARK INFORMATION:</b></h6>\r\n    <p>You agree that all of 24 HRS trademarks, trade names, service marks, and other logos and brand features that are\r\n      displayed via the Services (collectively, the \"Marks\") are trademarks and the property of 24 HRS. You agree not to\r\n      display or use our Marks in any manner without 24 HRS’s prior permission. Third-party trademarks are the property\r\n      of their respective third-party owners. Presence of a third-party trademark on the Services does not mean that 24\r\n      HRS has any relationship with that third party or that such third party endorses the Services or 24 HRS.</p>\r\n\r\n    <h6><b>INDEMNIFICATION:</b></h6>\r\n    <p>The User agrees to defend, indemnify and hold harmless 24HRS, its Subsidiaries and Business Associates, and their\r\n      respective Directors, officers, employees, and agents from and against all claims and expenses, including\r\n      attorneys’ fees, arising out of the use of the mobile application by the User, the use of the Voucher, the use of\r\n      the mobile application through your password, any breach of this Agreement by you. </p>\r\n\r\n    <h6><b>DISCLAIMER:</b></h6>\r\n    <p>The services are provided by 24HRS on an \"as is\" and \"as available\" basis. 24HRS makes no representations or\r\n      warranties of any kind, express or implied, as to the operation of the services or the information, content,\r\n      materials, or products available via the services.. you expressly agree that your use of the services is at your\r\n      sole risk.</p>\r\n\r\n\r\n    <h6><b>LIMITED LIABILITY:</b></h6>\r\n    <p>24hrs will not be liable for any damages of any kind arising from the use of these services, including, but not\r\n      limited to direct, indirect, incidental, punitive, and consequential damages.</p>\r\n\r\n    <h6><b>TERMINATION:</b></h6>\r\n    <p>All rights granted to you under the terms of this \"Terms of Use\" document will terminate immediately if you\r\n      breach any of such terms and conditions.</p>\r\n\r\n    <h6><b>FORCE MAJEURE:</b></h6>\r\n    <p>24HRS shall be excused from performance under these Terms of Use, to the extent it or a SELLER is prevented or\r\n      delayed from performing, in whole or in part, as a result of an event or series of events caused by or resulting\r\n      from weather conditions or other elements of nature or acts of God, acts of war, acts of terrorism, insurrection,\r\n      riots, civil disorders, or rebellion, quarantines or embargoes, labor strikes, error or disruption to major\r\n      computer hardware or networks or software failure, other causes beyond the reasonable control of 24HRS, as\r\n      applicable</p>\r\n\r\n    <h6><b>SERVICES TAKE DOWN POLICY:</b> </h6>\r\n    <p>We want to list the OFFERS, COUPONS, and services of genuine sellers on a mobile application to ensure that\r\n      infringing products are removed from the APPLICATION, as they affect your and genuine Seller’s valuable trust.\r\n      We do not and cannot verify if the Sellers have the right or ability to sell or distribute their listed OFFERS,\r\n      COUPONS, and services. However, we are committed to removing any infringing or unlicensed product or service once\r\n      an authorized representative of the rights owner properly reports them to us. We sincerely want to ensure that\r\n      item listings do not infringe upon the copyright, trademark, or other intellectual property rights of third\r\n      parties. We can identify and request the removal of allegedly infringing products and materials. Any person or\r\n      company who holds intellectual property rights (such as a copyright, trademark, or patent) that may be infringed\r\n      upon by OFFERS, COUPONS, and services listed on 24HRS APPLICATION is encouraged to report the same to our Legal\r\n      Team.</p>\r\n\r\n    <h6><b>DISPUTE RESOLUTION AND GOVERNING LAW:</b></h6>\r\n    <p>The terms of this “Terms of Use” document are exclusively based on and subject to the laws of India. You hereby\r\n      consent to ARBITRATION IN CHENNAI in all disputes arising out of or relating to the use of this Website and/or our\r\n      mobile application.</p>\r\n  </div>\r\n\r\n \r\n  <div style=\"width: 100%;text-align:right;\">\r\n    <button (click)=\"acceptConditions()\" class=\"btn btn-sm btn-success accept-btn\">Accept</button>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_terms-and-condition_terms-and-condition_module_ts.js.map