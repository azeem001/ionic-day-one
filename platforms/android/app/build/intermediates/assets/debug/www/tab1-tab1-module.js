(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");







var Tab1PageModule = /** @class */ (function () {
    function Tab1PageModule() {
    }
    Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
            ],
            declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
        })
    ], Tab1PageModule);
    return Tab1PageModule;
}());



/***/ }),

/***/ "./src/app/tab1/tab1.page.html":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\" >\n    <ion-title>\n        <ion-icon  name=\"home\" ></ion-icon>  Home\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n   \n    <ion-card class=\"welcome-card\">\n        <ion-img src=\"/assets/logo.png\"></ion-img>\n        <ion-slides pager>\n            <ion-slide>\n              <ion-img src=\"http://bhilwarainfo.com/wp-content/uploads/2018/10/bigdatathumb.jpg\" alt=\"Big Data Analytics\"></ion-img>\n            </ion-slide>\n            <ion-slide> \n                <ion-img src=\"http://bhilwarainfo.com/wp-content/uploads/2018/10/software-development-thumb.jpg\"></ion-img>\n            </ion-slide>\n            <ion-slide>\n              <ion-img src=\"http://bhilwarainfo.com/wp-content/uploads/2018/10/infmthumb.jpg\"></ion-img>\n            </ion-slide>\n          </ion-slides>\n     \n      <ion-card-header>\n        <ion-card-title>Welcome to Bilwara</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <p>Bhilwara Infotechnology Limited (BIL) is a dedicated technology consulting and implementation company and is a part of the LNJ Bhilwara Group, one of the largest employers in India.</p>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-item>\n        <ion-icon name=\"code-working\" slot=\"start\"></ion-icon>\n        <ion-label>Project 1</ion-label>\n        <ion-button fill=\"outline\" slot=\"end\">View</ion-button>\n      </ion-item>\n    \n      <ion-card-content>\n        This is content, without any paragraph or header tags,\n        within an ion-card-content element.\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-item>\n        <ion-icon name=\"code-working\" slot=\"start\"></ion-icon>\n        <ion-label>Project 2</ion-label>\n        <ion-button fill=\"outline\" slot=\"end\">View</ion-button>\n      </ion-item>\n    \n      <ion-card-content>\n        This is content, without any paragraph or header tags,\n        within an ion-card-content element.\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-item>\n        <ion-icon name=\"code-working\" slot=\"start\"></ion-icon>\n        <ion-label>Project 3</ion-label>\n        <ion-button fill=\"outline\" slot=\"end\">View</ion-button>\n      </ion-item>\n    \n      <ion-card-content>\n        This is content, without any paragraph or header tags,\n        within an ion-card-content element.\n      </ion-card-content>\n    </ion-card>\n\n    \n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyL3dvcmtzcGFjZS10ZWNobWFoZW5kcmEvYmlsd2FyYS9zcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpb24taW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Tab1Page = /** @class */ (function () {
    function Tab1Page() {
    }
    Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab1',
            template: __webpack_require__(/*! ./tab1.page.html */ "./src/app/tab1/tab1.page.html"),
            styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
        })
    ], Tab1Page);
    return Tab1Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map