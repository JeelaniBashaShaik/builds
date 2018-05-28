webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_page_home_page_component__ = __webpack_require__("../../../../../src/app/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_page_login_page_component__ = __webpack_require__("../../../../../src/app/login-page/login-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customer_customer_component__ = __webpack_require__("../../../../../src/app/customer/customer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






const routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__login_page_login_page_component__["a" /* LoginPageComponent */] },
    { path: 'login-page', component: __WEBPACK_IMPORTED_MODULE_3__login_page_login_page_component__["a" /* LoginPageComponent */] },
    { path: 'home-page', component: __WEBPACK_IMPORTED_MODULE_2__home_page_home_page_component__["a" /* HomePageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */]] },
    { path: 'customer', component: __WEBPACK_IMPORTED_MODULE_4__customer_customer_component__["a" /* CustomerComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */]] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!-- <h6 (click)=\"goToHomePage()\" style=\"cursor:pointer\">RJ Shopping Demo</h6> -->\n\n\n\n\n\n<!--   <nav *ngIf=\"(user | async)?.uid\">\n    <div *ngIf=\"(user | async)?.uid\" class=\"nav-wrapper\">\n    <div class=\"chip\">\n    \n    {{userName}}\n  </div>  -->\n <!--  {{userName}} -->\n     <!-- <img src={{imageUrl}} style=\"border-radius:50%;margin-top:1%;margin-left:1%\" height=\"25 !important\" width=\"25 !important\"> -->\n      <!-- <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n        <li><a (click)=\"logout()\">LogOut</a></li>\n        <li><a href=\"badges.html\">Components</a></li>\n      </ul>\n    </div>\n  </nav>\n<button (click)=\"login()\" *ngIf=\"!(user | async)?.uid\">Login</button> -->\n<router-outlet></router-outlet>\n\n\n<!-- <footer class=\"page-footer\">\n          <div class=\"footer-copyright\">\n            © 2017 RJ Shopping Demo \n          </div>\n        </footer> -->"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_app__ = __webpack_require__("../../../../firebase/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








let AppComponent = class AppComponent {
    constructor(afAuth, af, _productService, router) {
        this.afAuth = afAuth;
        this.af = af;
        this._productService = _productService;
        this.router = router;
        this.title = 'app';
        this.user = this.afAuth.authState;
    }
    ngOnInit() {
        this.issubCategorySelected = false;
        this.isCategorySelected = false;
        this.isDepartmentSelected = false;
        this.isProductSelected = false;
    }
    login() {
        this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_6_firebase_app__["auth"].GoogleAuthProvider());
        let fireBaseUser = __WEBPACK_IMPORTED_MODULE_6_firebase_app__["auth"]().currentUser;
        this.user.subscribe(data => {
            console.log(data);
            if (data != null) {
                this.imageUrl = data.photoURL;
                this.userName = data.displayName;
                console.log('Im in');
                this.isLoggedIn = true;
                this.router.navigateByUrl('home-page');
            }
            /* this.imageUrl = this.afAuth.auth.currentUser.photoURL; */
        });
    }
    setDepartment() {
        this.currentDepartment = this._productService.selectedDepartment;
        this.isDepartmentSelected = true;
        this.isCategorySelected = false;
        this.issubCategorySelected = false;
    }
    setCategory() {
        this.currentCategory = this._productService.selectedCategory;
        this.isCategorySelected = true;
        this.issubCategorySelected = false;
    }
    setSubCategory() {
        this.currentSubCategory = this._productService.selectedSubCategory;
        this.issubCategorySelected = true;
    }
    setProduct() {
    }
    shiftToDepartment() {
        this.isCategorySelected = false;
        this.issubCategorySelected = false;
        this.isDepartmentSelected = true;
    }
    shiftToCategory() {
        this.issubCategorySelected = false;
        this.isCategorySelected = true;
    }
    shiftToSubCategory() {
    }
    shiftToHome() {
        this.isDepartmentSelected = false;
    }
    logout() {
        this.afAuth.auth.signOut();
        this.imageUrl = "";
        this.userName = "";
        this.isLoggedIn = false;
        this.router.navigateByUrl("home-page");
    }
    call() {
        this.router.navigateByUrl("login-page");
    }
    goToHomePage() {
        this.router.navigateByUrl('home-page');
    }
};
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_product_service__["a" /* ProductService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */]) === "function" && _d || Object])
], AppComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_materialize__ = __webpack_require__("../../../../angular2-materialize/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_dnd__ = __webpack_require__("../../../../ng2-dnd/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_localstorage_LocalStorageEmitter__ = __webpack_require__("../../../../angular2-localstorage/LocalStorageEmitter.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular_async_local_storage__ = __webpack_require__("../../../../angular-async-local-storage/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__swimlane_ngx_datatable__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_page_login_page_component__ = __webpack_require__("../../../../../src/app/login-page/login-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_page_home_page_component__ = __webpack_require__("../../../../../src/app/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_firebase_service__ = __webpack_require__("../../../../../src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_customer_service__ = __webpack_require__("../../../../../src/app/services/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__customer_customer_component__ = __webpack_require__("../../../../../src/app/customer/customer.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










//import { WebStorageModule } from 'angular2-localstorage';
//import { MdlModule } from '@angular-mdl/core';













const firebaseConfig = {
    apiKey: "AIzaSyCYozTNiEyOyUKVl_1DLoY9hJPgddlxKVE",
    authDomain: "shoppingdemo-e8235.firebaseapp.com",
    databaseURL: "https://shoppingdemo-e8235.firebaseio.com",
    storageBucket: "shoppingdemo-e8235",
    messagingSenderId: "383193231090"
};
/* unused harmony export firebaseConfig */

let AppModule = class AppModule {
};
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_12__login_page_login_page_component__["a" /* LoginPageComponent */],
            __WEBPACK_IMPORTED_MODULE_13__home_page_home_page_component__["a" /* HomePageComponent */],
            __WEBPACK_IMPORTED_MODULE_21__customer_customer_component__["a" /* CustomerComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"], __WEBPACK_IMPORTED_MODULE_10__swimlane_ngx_datatable__["NgxDatatableModule"], __WEBPACK_IMPORTED_MODULE_5_angular2_materialize__["a" /* MaterializeModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_14_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_19_angularfire2_database__["a" /* AngularFireDatabaseModule */], __WEBPACK_IMPORTED_MODULE_7_ng2_dnd__["a" /* DndModule */],
            __WEBPACK_IMPORTED_MODULE_20_angularfire2_auth__["a" /* AngularFireAuthModule */], __WEBPACK_IMPORTED_MODULE_6_ng2_dragula__["DragulaModule"], __WEBPACK_IMPORTED_MODULE_9_angular_async_local_storage__["a" /* AsyncLocalStorageModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_15__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_16__services_firebase_service__["a" /* FirebaseService */], __WEBPACK_IMPORTED_MODULE_17__services_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_7_ng2_dnd__["b" /* DragDropService */], __WEBPACK_IMPORTED_MODULE_7_ng2_dnd__["c" /* DragDropConfig */], __WEBPACK_IMPORTED_MODULE_8_angular2_localstorage_LocalStorageEmitter__["a" /* LocalStorageService */], __WEBPACK_IMPORTED_MODULE_18__services_customer_service__["a" /* CustomerService */]],
        schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/customer/customer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".noHover:hover{\r\nbackground-color: darkorange;\r\ncursor: pointer;\r\nfont-size: 120%;\r\n}\r\n\r\n.items{\r\n    border: 1.5px solid darkorange;\r\n    padding: 1%;\r\n    margin: 1%;\r\n}\r\n\r\n.count{\r\n        display: inline;\r\n    padding-left: 7%;\r\n    padding-right: 2%;\r\n    border: 1px solid black;\r\n    margin-left: 2%;\r\n    margin-right: 2%;\r\n}\r\n\r\n#section1{\r\n          overflow-y: scroll;\r\n    /* padding: 1%; */\r\n    height: 550px;\r\n    border: 1px solid darkorange;\r\n     margin-top: 1%;   \r\n     border-right: none;\r\n}\r\n\r\n#section2{\r\n         overflow-y: scroll;\r\n    padding: 1%;\r\n    height: 500px;\r\n    border: 1px solid darkorange;\r\n    margin: 1%; \r\n}\r\n\r\n#shippingLabel{\r\n    padding: 1%;\r\n    border: 1px solid black;\r\n    margin-top: 1.5%;\r\n}\r\n\r\n#customBill{\r\n    border: 1px solid black;\r\n    margin-left: 1.5%;\r\n    margin-top: 1.5%;\r\n}\r\n\r\n.datatable-header.datatable-header-cell.sortable.resizeable{\r\n      background-color: red !important;\r\n    }\r\n    \r\n\r\n    .ngx-datatable.material.datatable-body.datatable-body-row.datatable-body-cell{\r\n        background-color: red;\r\n\r\n    }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/customer/customer.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<nav class=\"nav-extended\" style=\"background-color:darkorange\">\n    <div class=\"nav-wrapper\">\n      <a class=\"brand-logo\">Manage Your Details</a>\n      <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n        <li><a class=\"noHover\" (click)=\"goToHome()\">Home Page</a></li>\n        <li><a class=\"noHover\" (click)=\"logout()\">LogOut</a></li>\n      </ul>\n    </div>\n    <div class=\"nav-content\">\n      <ul class=\"tabs tabs-transparent\" materialize=\"tabs\">\n        <li class=\"tab\"><a href=\"#test1\">Basic Details</a></li>\n        <li class=\"tab\"><a href=\"#test2\">My Cart</a></li>\n        <li class=\"tab\"><a href=\"#test3\">Orders</a></li>\n      <!--   <li class=\"tab\"><a href=\"#test4\">Test 4</a></li> -->\n      </ul>\n    </div>\n  </nav>\n\n\n<div id=\"test2\" class=\"col s12\">\n    <div class=\"row\">\n        <div class=\"col s5\" id=\"section1\">\n    <div class=\"row\"  *ngFor=\"let product of customerCart\">\n\n<div class=\"col s12 m12\" dnd-draggable [dragEnabled]=\"true\" [dragData]=\"product\">\n    <div class=\"card horizontal\">\n      <div class=\"card-image\">\n        <img src={{product.productImage}} height=\"100\" width=\"100\">\n      </div>\n      <div class=\"card-stacked\">\n        <div class=\"card-content\">\n          <h5>{{product.productName}}</h5>\n           Price:&nbsp;{{product.productTotalPrice}}\n        </div>\n        <div class=\"card-action\">\n          <span style=\"float:right;margin-left:-20%\">Quantity:&nbsp;{{product.quantity}}\n          <button style=\"\" class=\"btn\"><i class=\"material-icons center\" (click)=\"incrementCartCount(product)\">keyboard_arrow_up</i></button>\n          <button style=\"\" class=\"btn\"><i class=\"material-icons center\" (click)=\"decrementCartCount(product)\">keyboard_arrow_down</i></button>\n           <button style=\"\" class=\"btn\"><i class=\"material-icons center\" (click)=\"addToCheckOut(product)\">near_me</i></button>\n            <button class=\"btn\"><i class=\"material-icons center\" (click)=\"deleteFromCart(product)\">delete</i></button> </span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div></div>\n<div class=\"col s7\" style=\"border: 1px solid darkorange;margin-top: 1%;height: 550px;\">  \n<h5>CheckOut Estimator</h5>\n<div id=\"calculatorZone\" dnd-droppable (onDropSuccess)=\"transferDataSuccess($event)\">\n<!-- <p *ngIf=\"checkOutProducts.length === 0\">Drag n Drop Ur Items Here</p> -->\n\n <ngx-datatable [rowHeight]=\"40\" #checkout class='material' [columnMode]=\"'force'\" [headerHeight]=\"30\" style=\"height:250px;border: 1px solid black\" [scrollbarH]=\"true\" [rows]=\"checkOutProducts\">\n<ngx-datatable-column name=\"S.No\" prop=\"count\" [width]=\"20\"></ngx-datatable-column>\n<ngx-datatable-column name=\"Product Id\" prop=\"productId\" [width]=\"60\"></ngx-datatable-column>\n<ngx-datatable-column name=\"Product Name\" prop=\"productName\" [width]=\"60\"></ngx-datatable-column>\n<ngx-datatable-column name=\"Unit Price\" prop=\"productUnitPrice\" [width]=\"60\"></ngx-datatable-column>\n<ngx-datatable-column name=\"Quantity\" prop=\"quantity\"[width]=\"60\">\n  <ng-template ngx-datatable-cell-template let-row=\"row\" let-value=\"value\" let-column=\"column\">\n    <!-- <span><button (click)=\"increment(column.prop,row.$$index)\">+</button>{{value}}<button (click)=\"decrement(column.prop,row.$$index)\">-</button></span> -->\n    <span title=\"double click to edit\" (dblclick)=\"editing[row.$$index] = true\" *ngIf=\"!editing[row.$$index]\">{{value}}</span>\n\n<input autofocus (blur)=\"updateValue($event,row.$$index)\" *ngIf=\"editing[row.$$index]\" type=\"text\" [value]=\"value\"/>\n  </ng-template>\n</ngx-datatable-column>\n<ngx-datatable-column name=\"Total Price\" prop=\"productTotalPrice\" [width]=\"60\"></ngx-datatable-column>\n<ngx-datatable-column [width]=\"60\">\n  <ng-template ngx-datatable-cell-template let-row=\"row\" let-value=\"value\" let-column=\"column\">\n    <!-- <span><button (click)=\"increment(column.prop,row.$$index)\">+</button>{{value}}<button (click)=\"decrement(column.prop,row.$$index)\">-</button></span> -->\n    <!-- <span title=\"double click to edit\"><button class=\"btn\" (click)=\"removeItem(row.$$index)\"><i class=\"material-icons center\">delete</i></button></span> -->\n    <span title=\"double click to edit\"><i (click)=\"removeItem(row.$$index)\" class=\"material-icons center\">delete</i></span>\n\n\n  </ng-template>\n</ngx-datatable-column>\n</ngx-datatable> \n\n</div>\n<div class=\"row\">\n  <div class=\"col s3\" id=\"shippingLabel\">\n  <h6 style=\"    border-bottom: 1px solid black;\n    padding-bottom: 3%;\">Shipping Label:</h6>\n      <div class=\"row\" style=\"margin-bottom:-2%\"><label style=\"color:black\">{{customerToUpdate.displayName}}</label></div>\n      <div class=\"row\" style=\"margin-bottom:-2%\"> <label style=\"color:black\">{{address.flat_HouseNo}}</label></div>\n      <div class=\"row\" style=\"margin-bottom:-2%\"> <label style=\"color:black\">{{address.street}}</label></div>\n      <div class=\"row\" style=\"margin-bottom:-2%\"> <label style=\"color:black\">{{address.city}}</label></div>\n      <div class=\"row\" style=\"margin-bottom:-2%\"> <label style=\"color:black\">{{address.pincode}}</label></div>\n      <div class=\"row\" style=\"margin-bottom:-2%\"> <label style=\"color:black\">{{address.state}}</label></div>\n      <div class=\"row\" style=\"margin-bottom:-2%\"> <label style=\"color:black\">Phone:{{customerToUpdate.phoneNumber}}</label></div>\n  </div>\n<div class=\"col s4\" id=\"customBill\">\n<!-- <p>Total No. Of Unique Products:&nbsp;{{checkOutProducts.length}} </p> -->\n<p style=\"    padding: 0;\n    margin-top: 5%;\n    margin-bottom: -5%;\">Total Quantity Of Products: &nbsp;{{totalCheckoutCartCount}}</p>\n<p>Total Price: &nbsp;{{totalOrderCost}}</p>\n</div>  \n</div>\n</div>\n</div></div>\n  <div id=\"test1\" class=\"col s12\">\n   <!--  <input type=\"text\" [(ngModel)]=\"customer.fullName\" placeholder=\"Full Name\"> -->\n     <!--  <input id=\"changedValue\" type=\"text\" name=\"changedValue\" [(ngModel)]=\"customer.fullName\" class=\"validate\">  -->\n      <div class = \"row\">\n          <!--  <div class=\"col s2\">\n              <img src=\"{{photoUrl}}\" height=\"150\" width=\"150\" style=\"margin-top:1%\">\n          </div>  -->\n          <!-- <div class=\"input-field col s2\">\n           <i class=\"material-icons prefix\">account_circle</i>\n           <input id=\"icon_prefix\" type=\"text\" disabled [(ngModel)]=\"customerToUpdate.displayName\">\n           <i class=\"material-icons prefix\">email</i>\n           <input id=\"icon_prefix\" type=\"text\" disabled [(ngModel)]=\"customerToUpdate.email\">\n          <i class=\"material-icons prefix\">phone</i>\n          <input id=\"icon_telephone\" type=\"tel\" [(ngModel)]=\"customerToUpdate.phoneNumber\" class=\"validate\"> -->\n            <div class=\"row\">\n          <div class=\"input-field col s3\" style=\"height:22px\">\n                <i class=\"material-icons prefix\">account_circle</i> \n                <input type=\"text\" disabled [(ngModel)]=\"customerToUpdate.displayName\" class=\"validate\">\n          </div>\n          </div>\n          <div class=\"row\">\n          <div class=\"input-field col s3\" style=\"height:22px\">\n                <i class=\"material-icons prefix\">email</i> \n                <input type=\"text\" disabled [(ngModel)]=\"customerToUpdate.email\" class=\"validate\">\n          </div></div>\n  <div class=\"row\">\n          <div class=\"input-field col s3\" style=\"height:22px\">\n                <i class=\"material-icons prefix\">phone</i> \n                <input type=\"text\" [(ngModel)]=\"customerToUpdate.phoneNumber\" class=\"validate\">\n          </div></div>\n\n          \n            <!-- <input type=\"text\" class=\"datepicker\" materialize=\"pickadate\"> -->\n           \n      <!--   </div> -->\n        <div  *ngIf=\"noGenderFlag\" class=\"col s4\">\n\n        <p>\n        <input class=\"with-gap\" name=\"group3\" type=\"radio\" id=\"male\" (click)=\"setGender('male')\" />\n    <label for=\"male\">Male</label>\n  </p>\n\n  <p>\n    <input class=\"with-gap\" name=\"group3\" type=\"radio\" id=\"female\" (click)=\"setGender('female')\"/>\n    <label for=\"female\">Female</label>\n  </p>\n\n   <p>\n    <input class=\"with-gap\" name=\"group3\" type=\"radio\" id=\"transGender\" (click)=\"setGender('transGender')\"/>\n    <label for=\"transGender\">TransGender</label>\n  </p>\n\n\n        </div>\n       <!--  <div class=\"col s2\" *ngIf=\"!noAddressFlag\">\n            Shipping Address:\n            <div class=\"row\" style=\"margin-bottom:-1%\">\n            <label>{{customerToUpdate.displayName}}</label></div>\n         <div class=\"row\" style=\"margin-bottom:-1%\">   <label>{{address.flat_HouseNo}}</label></div>\n          <div class=\"row\" style=\"margin-bottom:-1%\">  <label>{{address.street}}</label></div>\n         <div class=\"row\" style=\"margin-bottom:-1%\">   <label>{{address.city}}</label></div>\n         <div class=\"row\" style=\"margin-bottom:-1%\">   <label>{{address.pincode}}</label></div>\n         <div class=\"row\" style=\"margin-bottom:-1%\">   <label>{{address.state}}</label></div>\n         <div class=\"row\" style=\"margin-bottom:-1%\">   <label>Phone:{{customerToUpdate.phoneNumber}}</label></div>\n        </div> -->\n      </div>\n    <div clas=\"row\">\n        <div class=\"col s5\" *ngIf=\"!noAddressFlag\">\n              <div class=\"row\">\n                  <div class=\"input-field col s3\" style=\"height:22px\">\n                    <i class=\"material-icons prefix\">home</i>\n                    <input id=\"icon_home\" type=\"text\" [(ngModel)]=\"address.flat_HouseNo\" class=\"validate\">\n                  </div>\n              </div>\n              <div class=\"row\">\n                  <div class=\"input-field col s3\" style=\"height:22px\">\n                    <i class=\"material-icons prefix\">transfer_within_a_station</i>\n                    <input id=\"street\" type=\"text\" [(ngModel)]=\"address.street\" class=\"validate\">\n                  </div>\n              </div>\n              <div class=\"row\">\n                  <div class=\"input-field col s3\" style=\"height:22px\">\n                    <i class=\"material-icons prefix\">location_city</i>\n                    <input id=\"icon_city\" type=\"text\" [(ngModel)]=\"address.city\" class=\"validate\">\n                  </div>\n              </div>\n              <div class=\"row\">\n                  <div class=\"input-field col s3\" style=\"height:22px\">\n                    <i class=\"material-icons prefix\">fiber_pin</i>\n                    <input id=\"icon_code\" type=\"text\" [(ngModel)]=\"address.pincode\" class=\"validate\">\n                  </div>\n              </div>\n              <div class=\"row\">\n                  <div class=\"input-field col s3\" style=\"height:22px\">\n                    <i class=\"material-icons prefix\">explore</i>\n                    <input id=\"icon_state\" type=\"text\" [(ngModel)]=\"address.state\" class=\"validate\">\n                  </div>\n              </div>\n\n                </div>\n             </div>\n             <div class=\"row\">\n            <div *ngIf=\"noAddressFlag else showAvailableAddresses\"><p style=\"margin-left:2%\">It seems you have not added any address yet. Go Ahead, add an Address</p>\n             <div class=\"row\">\n\n\n                <div class=\"input-field col s2\">\n                    <i class=\"material-icons prefix\">home</i> \n                    <input type=\"text\" [(ngModel)]=\"address.flat_HouseNo\" placeholder=\"Flat/House #\" class=\"validate\">\n                </div>\n                <div class=\"input-field col s2\">\n                    <i class=\"material-icons prefix\">transfer_within_a_station</i> \n                    <input type=\"text\" [(ngModel)]=\"address.street\" placeholder=\"Street\" class=\"validate\">\n                </div>\n                <div class=\"input-field col s2\">\n                    <i class=\"material-icons prefix\">location_city</i> \n                    <input type=\"text\" [(ngModel)]=\"address.city\" placeholder=\"City\" class=\"validate\">\n                </div>\n                <div class=\"input-field col s2\">\n                    <i class=\"material-icons prefix\">fiber_pin</i> \n                    <input type=\"text\" [(ngModel)]=\"address.pincode\" placeholder=\"Pincode\" class=\"validate\">\n                </div>\n                <div class=\"input-field col s2\">\n                    <i class=\"material-icons prefix\">explore</i> \n                    <input type=\"text\" [(ngModel)]=\"address.state\" placeholder=\"State\" class=\"validate\">\n                </div>\n\n                \n             </div>             \n            </div>\n        <a class=\"waves-effect waves-light btn\" (click)=\"updateCustomer()\"><i class=\"material-icons right\">update</i>Update</a>\n          </div>\n      </div>\n       \n\n\n  <div id=\"test3\" class=\"col s12\">\n      <!-- <div class=\"row\">\n          <div class=\"col s6 m3\" *ngFor=\"let product of customerCart\">\n            <div class=\"card\" style=\"overflow: visible;\">\n              <div class=\"card-image waves-effect waves-block waves-light\">\n                <img class=\"activator\" style=\"width:250px;height:250px;\" src={{product.productImage}}>\n              </div>\n              <div class=\"card-content\">\n                <span class=\"card-title activator grey-text text-darken-4\">{{product.productName}}<i class=\"material-icons right\">more_vert</i></span>\n\n              </div>\n              <div class=\"card-reveal\" style=\"display: none; transform: translateY(0px);\">\n                <span class=\"card-title grey-text text-darken-4\">{{product.productName}}<i class=\"material-icons right\">close</i></span>\n                <p>{{product.productLongDescription}}</p>\n              </div>\n\n              <div class=\"card-action\">\n              <span><span class=\"card-title activator green-text text-darken-4\">{{product.productCurrentPrice}}</span><button style=\"margin-left:25%\" (click)=\"addToCart(product,product.productInCarts)\" class=\"waves-effect waves-light btn\"><i class=\"material-icons center\">add_shopping_cart</i></button>\n                <button (click)=\"addToWishList()\" class=\"waves-effect waves-light btn\"><i class=\"material-icons center\">favorite</i></button></span>\n               \n              </div>\n            </div>\n          </div>\n      </div> -->\n  </div>\n  \n\n\n  "

/***/ }),

/***/ "../../../../../src/app/customer/customer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_Customer__ = __webpack_require__("../../../../../src/app/models/Customer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_address__ = __webpack_require__("../../../../../src/app/models/address.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_localstorage_WebStorage__ = __webpack_require__("../../../../angular2-localstorage/WebStorage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_customer_service__ = __webpack_require__("../../../../../src/app/services/customer.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









let CustomerComponent = class CustomerComponent {
    constructor(_customerService, router, db, afAuth) {
        this._customerService = _customerService;
        this.router = router;
        this.db = db;
        this.afAuth = afAuth;
        this.checkOutProducts = new Array();
        this.address = new __WEBPACK_IMPORTED_MODULE_5__models_address__["a" /* Address */]();
        this.customerToUpdate = new __WEBPACK_IMPORTED_MODULE_2__models_Customer__["a" /* Customer */]();
        this.customer = new __WEBPACK_IMPORTED_MODULE_2__models_Customer__["a" /* Customer */]();
        this.allGenders = ['Male', 'Female', 'Others'];
        this.username = 'asfd';
        this.availableProducts = [];
        this.shoppingBasket = [];
        this.list1 = [];
        this.customerCart = [];
        this.Columns1 = [
            { name: 'No', prop: 'count', width: 50 },
            { name: 'Product Id', prop: 'productId', width: 150 },
            { name: 'Product Name', prop: 'productName', width: 150 },
            { name: 'Quantity', prop: 'quantity', width: 150, cellTemplate: this.quantity, headerTemplate: this.hdrTpl },
            { name: 'Unit Price', prop: 'productUnitPrice', width: 100 },
            { name: 'Total Price', prop: 'productTotalPrice', width: 150 },
        ];
        this.totalCheckoutCartCount = 0;
        this.totalUniqueProductsCount = 0;
        this.totalOrderCost = 0;
        this.editing = {};
        //  this.availableProducts.push(new Product('Blue Shoes', 3, 35));
        ////  this.availableProducts.push(new Product('Good Jacket', 1, 90));
        //  this.availableProducts.push(new Product('Red Shirt', 5, 12));
        //  this.availableProducts.push(new Product('Blue Jeans', 4, 60));
        this.customersList = this.db.list('/Customers_List');
        this.afAuth.authState.subscribe(data => {
            this.customer.displayName = data.displayName;
            this.customer.email = data.email;
            this.photoUrl = data.photoURL;
        });
    }
    selectGender(gender) {
        //console.log(gender);
    }
    setGender(value) {
        console.log(value);
        this.customerToUpdate.gender = value;
        console.log(this.customerToUpdate);
    }
    ngOnInit() {
        this.checkoutGrid.messages.emptyMessage = 'Drag N Drop Items Here';
        console.log(this.username);
        this.address.city = '';
        this.address.flat_HouseNo = '';
        this.address.pincode = '';
        this.address.street = '';
        this.address.state = '';
        var query = this.db.database.ref('/Customers_List').orderByChild('email').equalTo(this.customer.email);
        var x = query.once("value", (snapshot) => {
            //console.log(snapshot.val());
            this.dat = snapshot.val();
            var xKeys = Object.keys(this.dat);
            this.customerToUpdate = this.dat[xKeys[0]];
            //this.noAddressFlag = true;
            console.log(this.customerToUpdate);
            if (!this.customerToUpdate.hasOwnProperty('address')) {
                this.noAddressFlag = true;
            }
            if (this.customerToUpdate.hasOwnProperty('address')) {
                this.address = this.customerToUpdate.address[0];
            }
            if (!this.customerToUpdate.hasOwnProperty('gender')) {
                this.noGenderFlag = true;
            }
            if (this.customerToUpdate.hasOwnProperty('gender')) {
                this.noGenderFlag = false;
            }
            this.fetchCart();
        });
        this.jqueryDependencies();
    }
    jqueryDependencies() {
        $('.datepicker').pickadate({
            selectMonths: true,
            selectYears: 15,
            today: 'Today',
            clear: 'Clear',
            close: 'Ok',
            closeOnSelect: false // Close upon selecting a date,
        });
    }
    goToHome() {
        this.router.navigateByUrl('home-page');
    }
    updateCustomer() {
        var y;
        this.customerToUpdate.address = [];
        this.customerToUpdate.address.unshift(this.address);
        y = this.customerToUpdate;
        this._customerService.updateCustomerDetails(y);
        this.router.navigateByUrl('home-page');
    }
    fetchCart() {
        console.log(this.customerToUpdate.cart);
        this.customerCart = [];
        // var x = this._customerService.fetchProductInfo(this.customerToUpdate.cart);
        //console.log(customerCart);
        /* for(var i=0;i<this.customerToUpdate.cart.length;i++){
            if(this.customerToUpdate.cart[i] === ''){
                continue;
            }else{
                this.customerCart.push(this.customerToUpdate.cart[i]);
                this.list1.push(this.customerToUpdate.cart[i].productId);
            }
               } */
        this.customerCart = this._customerService.currentCustomer.cart;
        console.log(this.list1);
        console.log(this.customerCart);
        // this._customerService.customerCart= this.customerCart;
    }
    /* orderedProduct($event: any) {
        let orderedProduct: Product = $event.dragData;
        orderedProduct.quantity--;
    } */
    /*  addToBasket($event: any) {
         let newProduct: Product = $event.dragData;
         for (let indx in this.shoppingBasket) {
             let product: Product = this.shoppingBasket[indx];
             if (product.name === newProduct.name) {
                 product.quantity++;
                 return;
             }
         }
         this.shoppingBasket.push(new Product(newProduct.name, 1, newProduct.cost));
         this.shoppingBasket.sort((a: Product, b: Product) => {
             return a.name.localeCompare(b.name);
         });
     } */
    /* totalCost(): number {
        let cost: number = 0;
        for (let indx in this.shoppingBasket) {
            let product: Product = this.shoppingBasket[indx];
            cost += (product.cost * product.quantity);
        }
        return cost;
    } */
    deleteFromCart(product) {
        this._customerService.deleteFromCart(product);
    }
    incrementCartCount(product) {
        this._customerService.updateCartCount(product);
    }
    decrementCartCount(product) {
        this._customerService.decrementCartCount(product);
    }
    transferDataSuccess(event) {
        setTimeout(() => {
            this.checkoutGrid.recalculate();
        }, 100);
        console.log(event);
        this.totalOrderCost = 0;
        this.totalCheckoutCartCount = 0;
        var x = new __WEBPACK_IMPORTED_MODULE_2__models_Customer__["b" /* CheckOutProducts */]();
        ;
        var y = event.dragData;
        x.productId = y.productId;
        x.productName = y.productBrand;
        x.productUnitPrice = y.productCurrentPrice;
        x.quantity = y.quantity;
        x.productTotalPrice = y.productTotalPrice;
        this.checkOutProducts.unshift(x);
        for (var i = 0; i < this.checkOutProducts.length; i++) {
            this.checkOutProducts[i]['count'] = i + 1;
            this.totalOrderCost = this.totalOrderCost + Number(this.checkOutProducts[i].productTotalPrice);
            this.totalCheckoutCartCount = this.totalCheckoutCartCount + Number(this.checkOutProducts[i].quantity);
            //console.log(this.totalOrderCost);
        }
        //console.log(this.totalOrderCost);
    }
    addToCheckOut(product) {
        var event = { dragData: product };
        this.transferDataSuccess(event);
    }
    incrementCount(item) {
        for (var i = 0; i < this.checkOutProducts.length; i++) {
            if (item.productId === this.checkOutProducts[i].productId) {
                this.checkOutProducts[i].quantity++;
                this.checkOutProducts[i].productTotalPrice = this.checkOutProducts[i].productUnitPrice * this.checkOutProducts[i].quantity;
            }
            this.checkOutProducts[i]['count'] = i + 1;
        }
        console.log(this.checkOutProducts);
    }
    decrementCount(item) {
        console.log(item);
    }
    updateValue(event, row) {
        //console.log(event.target.value,row);
        this.editing[row] = false;
        this.totalOrderCost = 0;
        this.totalCheckoutCartCount = 0;
        this.checkOutProducts[row].quantity = event.target.value;
        this.checkOutProducts[row].productTotalPrice = this.checkOutProducts[row].quantity * this.checkOutProducts[row].productUnitPrice;
        for (var i = 0; i < this.checkOutProducts.length; i++) {
            this.totalOrderCost = this.totalOrderCost + Number(this.checkOutProducts[i].productTotalPrice);
            this.totalCheckoutCartCount = this.totalCheckoutCartCount + Number(this.checkOutProducts[i].quantity);
        }
        console.log(this.totalOrderCost, this.totalCheckoutCartCount);
        setTimeout(() => {
            console.log('inside recalculate');
            this.checkoutGrid.recalculate();
        }, 200);
    }
    removeItem(index) {
        //console.log(index);
        // console.log(this.checkOutProducts);
        setTimeout(() => {
            console.log('inside delete recalculate');
            var price;
            price = this.checkOutProducts[index].productTotalPrice;
            this.totalOrderCost = this.totalOrderCost - Number(price);
            this.totalCheckoutCartCount = this.totalCheckoutCartCount - Number(this.checkOutProducts[index].quantity);
            this.checkOutProducts.splice(index, 1);
            for (var i = 0; i < this.checkOutProducts.length; i++) {
                this.checkOutProducts[i]['count'] = i + 1;
            }
            console.log(this.totalOrderCost, this.totalCheckoutCartCount);
            this.checkoutGrid.recalculate();
        }, 200);
    }
    increment(prop, index) {
        this.totalOrderCost = this.totalOrderCost - this.checkOutProducts[index].productTotalPrice;
        this.checkOutProducts[index]['quantity']++;
        this.checkOutProducts[index].productTotalPrice = this.checkOutProducts[index].quantity * this.checkOutProducts[index].productUnitPrice;
        this.totalOrderCost = this.totalOrderCost + this.checkOutProducts[index].productTotalPrice;
        console.log(this.totalOrderCost);
        setTimeout(() => {
            this.checkoutGrid.recalculate();
        }, 100);
    }
    decrement(prop, index) {
        this.checkOutProducts[index][prop]--;
        this.checkOutProducts[index].productTotalPrice = this.checkOutProducts[index].quantity * this.checkOutProducts[index].productUnitPrice;
        setTimeout(() => {
            this.checkoutGrid.recalculate();
        }, 100);
    }
    logout() {
        this.afAuth.auth.signOut();
        this.router.navigateByUrl("login-page");
    }
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('quantity'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]) === "function" && _a || Object)
], CustomerComponent.prototype, "quantity", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('hdrTpl'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]) === "function" && _b || Object)
], CustomerComponent.prototype, "hdrTpl", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('checkout'),
    __metadata("design:type", Object)
], CustomerComponent.prototype, "checkoutGrid", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_angular2_localstorage_WebStorage__["a" /* LocalStorage */])(),
    __metadata("design:type", String)
], CustomerComponent.prototype, "username", void 0);
CustomerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-customer',
        template: __webpack_require__("../../../../../src/app/customer/customer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/customer/customer.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__services_customer_service__["a" /* CustomerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_customer_service__["a" /* CustomerService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _f || Object])
], CustomerComponent);

var _a, _b, _c, _d, _e, _f;
/* class Product {
  constructor(public name: string, public quantity: number, public cost: number) {}
} */
//# sourceMappingURL=customer.component.js.map

/***/ }),

/***/ "../../../../../src/app/home-page/home-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#dept{\r\n    border: 1.5px solid darkorange !important;\r\n    padding: 2%;\r\n    margin: 1%;\r\n}\r\n\r\n.dept1{\r\n    border: 1.5px solid mediumseagreen;\r\n    cursor: pointer;\r\n    text-align: center;\r\n    padding: 1%;\r\n    font-size: x-large;\r\n    margin: 0.5%;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  text-align: center;\r\n}\r\n\r\n.bc{\r\n    cursor: pointer;\r\n}\r\n\r\n.dept1:hover{\r\n    border: 1.5px solid darkorange;\r\n\r\n}\r\n\r\n\r\n.dept1 {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 100px;\r\n  height: 100px;\r\n  background-color: #fff;\r\n  border-radius: 5px;\r\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\r\n  border-radius: 5px;\r\n  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);\r\n}\r\n\r\n.dept1::after {\r\n  content: \"\";\r\n  border-radius: 5px;\r\n  position: absolute;\r\n  z-index: -1;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\r\n  opacity: 0;\r\n  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);\r\n}\r\n\r\n.dept1:hover {\r\n  -webkit-transform: scale(0.90, 0.90);\r\n  transform: scale(0.90, 0.90);\r\n}\r\n\r\n.dept1:hover::after {\r\n    opacity: 1;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home-page/home-page.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <nav style=\"background-color:darkorange\">\n  <div class=\"nav-wrapper\">\n    <div class=\"col s12\">\n      <a class=\"breadcrumb bc\" style=\"margin-left:1%\" (click)=\"shiftToHome()\">Home</a>\n      <a class=\"breadcrumb bc\" (click)=\"shiftToDepartment()\" *ngIf=\"isDepartmentSelected\">{{currentDepartment}}</a>\n      <a class=\"breadcrumb bc\" (click)='shiftToCategory()' *ngIf=\"isCategorySelected\">{{currentCategory}}</a>\n      <a class=\"breadcrumb bc\" (click)='shiftToSubCategory()' *ngIf=\"issubCategorySelected\">{{currentSubCategory}}</a>\n      <a class=\"breadcrumb bc\" *ngIf=\"showRouterOutlet\">{{currentProduct.productName}}</a>\n      <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\"> -->\n      <!--   <div class=\"chip\">\n    <img src=\"{{photoUrl}}\">\n    {{userName}}\n  </div> -->\n <!--  <li (click)=\"goToCustomer()\">Manage Account</li>\n        <li><a (click)=\"logout()\">LogOut</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n -->\n\n<nav class=\"nav-extended\" style=\"background-color:darkorange\">\n    <div class=\"nav-wrapper\">\n      <a class=\"brand-logo\">RJShopping Demo</a>\n       <a data-activates=\"mobile-demo\" class=\"button-collapse\"><i class=\"material-icons\">menu</i></a>\n      <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n        <li><a (click)=\"goToCustomer()\">Manage Account</a></li>\n        <li><a (click)=\"logout()\">LogOut</a></li>\n      </ul>\n      <ul class=\"side-nav\" id=\"mobile-demo\">\n        <li><a (click)=\"goToCustomer()\">Manage Account</a></li>\n        <li><a (click)=\"logout()\">LogOut</a></li>\n      </ul>\n    </div>\n    <div class=\"nav-content\">\n        <div class=\"col s12\">\n      <a class=\"breadcrumb bc\" style=\"margin-left:1%\" (click)=\"shiftToHome()\">Home</a>\n      <a class=\"breadcrumb bc\" (click)=\"shiftToDepartment()\" *ngIf=\"isDepartmentSelected\">{{currentDepartment}}</a>\n      <a class=\"breadcrumb bc\" (click)='shiftToCategory()' *ngIf=\"isCategorySelected\">{{currentCategory}}</a>\n      <a class=\"breadcrumb bc\" (click)='shiftToSubCategory()' *ngIf=\"issubCategorySelected\">{{currentSubCategory}}</a>\n      <a class=\"breadcrumb bc\" *ngIf=\"showRouterOutlet\">{{currentProduct.productName}}</a>\n        </div>\n    </div>\n  </nav>\n\n\n<marquee direction=\"right\" width=\"40%\">\n  <h6>{{selectText}}</h6>\n</marquee>\n\n\n\n\n<div *ngIf=\"!isDepartmentSelected && !isCategorySelected && !issubCategorySelected\">\n  <div class=\"row\" id=\"dept\">\n    <div class=\"department\" class=\"col s3 dept1\" style=\"width:24.5%;height:5%\" *ngFor=\"let x of allDepartmentsList\">\n      <div class=\"animated fadeIn\" (click)=\"selectDepartment($event.target.innerText)\">\n        {{x}}\n      </div>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"isDepartmentSelected && !isCategorySelected\">\n  <div class=\"row\" id=\"dept\">\n    <div class=\"category\" class=\"col s3 dept1\" style=\"width:24.5%;height:5%\" *ngFor=\"let x of specificCategoriesList\">\n      <div class=\"animated fadeIn\" (click)=\"selectCategory($event.target.innerText)\">\n        {{x}}\n      </div>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"!issubCategorySelected && isCategorySelected\">\n  <div class=\"row\" id=\"dept\">\n    <div class=\"category\" class=\"col s3 dept1\" style=\"width:24.5%;height:5%\" *ngFor=\"let x of specificSubCategoriesList\">\n      <div class=\"animated fadeIn\" (click)=\"selectSubCategory($event.target.innerText)\">\n        {{x}}\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\" *ngIf=\"displayAllProductsFlag\">\n  \n  <div class=\"col s9\">\n    <div class=\"row\">\n      <div class=\"col s6 m4\" *ngFor=\"let product of productsToBeDisplayed\" dnd-draggable [dragEnabled]=\"true\" [dragData]=\"product\">\n            <div class=\"card\" style=\"overflow: visible;\" >\n              <div class=\"card-image waves-block\" (click)=\"goToSpecificProduct(product)\">\n                <img class=\"activator\" style=\"width:250px;height:250px;\" src={{product.productImage}}>\n              </div>\n              <div class=\"card-content\">\n                <span class=\"card-title activator grey-text text-darken-4\">{{product.productName}}<i class=\"material-icons right\">more_vert</i></span>\n\n              </div>\n               <div class=\"card-reveal\" style=\"display: none; transform: translateY(0px);\">\n                <span class=\"card-title grey-text text-darken-4\">{{product.productName}}<i class=\"material-icons right\">close</i></span>\n                <p>{{product.productLongDescription}}</p>\n              </div> \n\n              <div class=\"card-action\">\n              <span><span class=\"card-title activator green-text text-darken-4\">{{product.productCurrentPrice}}</span><button style=\"float:right\" (click)=\"addToCart(product,product.productInCarts)\" class=\"waves-effect waves-light btn\"><i class=\"material-icons center\">add_shopping_cart</i></button></span>\n                <!-- <a href=\"#\">This is a link</a>favorite -->\n              </div>\n            </div>\n      </div>\n    </div>\n          </div>\n          <!-- <div class=\"col s2\"></div> -->\n<div class=\"col s3\" dnd-droppable (onDropSuccess)=\"transferDataSuccess($event)\" style=\"\n    border: 1px solid darkorange;\n    height: 580px;\n    margin-left: -1%;\n    padding: 1%;overflow-y:auto\" >\n   <div class=\"row\" ><p style=\"    border-bottom: 1px solid black;\n    margin-top: -3%;\n    text-align: start;\">My Cart</p>\n    <div class=\"col s12 m12\" >\n    <div class=\"card horizontal\" *ngFor=\"let product of customerCart\">\n      <div class=\"card-image\">\n        <img src={{product.productImage}} height=\"75\" width=\"75\">\n      </div>\n      <div class=\"card-stacked\">\n        <div class=\"card-content\" style=\"height:0px\">\n          <span><p>{{product.productBrand}} <span class=\"WebRupee\" style=\"color:black !important\">&#x20B9;</span>:{{product.productTotalPrice}}&nbsp;/-</p></span>\n        </div>\n        <div class=\"card-action\" style=\"margin-bottom:-7%\">\n\n          \n         <span style=\"float:right;margin-top:-6%\"> <i style=\"border: 1px solid black;margin-left:-10%;\n    cursor: pointer;\" class=\"material-icons center\" (click)=\"incrementCount(product)\">keyboard_arrow_up</i><span style=\"margin-left:9px\">{{product.quantity}}</span><i style=\"border: 1px solid black;\n    cursor: pointer;margin-left:10%\" class=\"material-icons center\" (click)=\"decrementCount(product)\">keyboard_arrow_down</i><i class=\"material-icons center\" style=\"\" (click)=deleteFromCart(product) >delete</i></span>\n        </div>\n      </div>\n    </div>\n  </div>\n  </div> \n\n<div class=\"myCart\"></div>\n</div>\n\n</div>\n<div *ngIf=\"noProductsFlag\">{{noProduct}}</div>\n\n\n\n\n\n\n<div class=\"row\" *ngIf=\"showRouterOutlet\">\n  <div class=\"col s6 m3\" >\n    <div class=\"card\">\n      <div class=\"card-image\">\n        <img src={{currentProduct.productImage}} style=\"width:350px;height:350px;\">\n      </div>\n      <div class=\"card-action\">\n        <a>{{currentProduct.productBrand}}</a>\n        <div><span class=\"card-title\" style=\"color:black\">{{currentProduct.productName}}</span></div>\n      </div>\n    </div>\n    <button style=\"float:right\" (click)=\"addToCart(currentProduct,currentProduct.productInCarts)\" class=\"waves-effect waves-light btn\"><i class=\"material-icons right\">add_shopping_cart</i>Add To Cart</button>\n  </div>\n  <div class=\"col s6\" style=\"margin-left: 3%;\">\n     <div class=\"row\">\n      <label class=\"x1\">Name:</label><span style=\"margin-left:1%\">{{currentProduct.productName}}</span>\n    </div>\n    <div class=\"row\">\n      <label class=\"x1\">Brand:</label><span style=\"margin-left:1%\">{{currentProduct.productBrand}}</span>\n    </div>\n    <div class=\"row\">\n      <label class=\"x1\">Price:</label><span style=\"margin-left:1%\">{{currentProduct.productCurrentPrice}}&nbsp;/-</span>\n    </div>\n    <div class=\"row\">\n      <label class=\"x1\">Short Desc.,:</label><span style=\"margin-left:1%\">{{currentProduct.productShortDescription}}</span>\n    </div>\n    <div class=\"row\">\n      <label class=\"x1\">Features:</label>\n      <ul class=\"collection\">\n        <li *ngFor=\"let x of currentProduct.productFeatures\" class=\"collection-item\">{{x}}</li>\n      </ul>\n    </div>\n    <div class=\"row\">\n      <label class=\"x1\">Description:</label><span style=\"margin-left:1%\">{{currentProduct.productLongDescription}}</span>\n    </div>\n    \n    \n   \n    \n    \n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home-page/home-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__("../../../../../src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_product__ = __webpack_require__("../../../../../src/app/models/product.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_customer_service__ = __webpack_require__("../../../../../src/app/services/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_Customer__ = __webpack_require__("../../../../../src/app/models/Customer.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










let HomePageComponent = class HomePageComponent {
    constructor(afAuth, customerSerivce, auth, router, db, fb, _productService) {
        this.afAuth = afAuth;
        this.customerSerivce = customerSerivce;
        this.auth = auth;
        this.router = router;
        this.db = db;
        this.fb = fb;
        this._productService = _productService;
        this.custCart = new Array();
        this.currentProduct = new __WEBPACK_IMPORTED_MODULE_4__models_product__["a" /* Product */]();
        this.allDepartmentsList = [];
        this.specificCategoriesList = [];
        this.specificSubCategoriesList = [];
        this.productsToBeDisplayed = new Array();
        this.noProduct = 'There are no products available in this section yet!!';
        this.customerCart = [];
        this.cartProduct = new __WEBPACK_IMPORTED_MODULE_9__models_Customer__["b" /* CheckOutProducts */]();
        this.ProductsList = this.db.list('/Products_List');
        ////console.log(this.db.database.ref('/Products_Lists'));
    }
    goToCustomer() {
        this.router.navigateByUrl('customer');
    }
    ngOnInit() {
        $(document).ready(function () {
            $(".button-collapse").sideNav();
        });
        this.issubCategorySelected = false;
        this.isCategorySelected = false;
        this.isDepartmentSelected = false;
        this.isProductSelected = false;
        this.showRouterOutlet = false;
        this.displayAllProductsFlag = false;
        this.noProductsFlag = false;
        this.photoUrl = this.auth.photoUrl;
        this.userName = this.auth.userName;
        this.selectText = 'Select any Department to get Started';
        this.fb.fetchDepartments().subscribe(data => {
            ////console.log(data);
            var x = Object.keys(data);
            ////console.log(Object.values(data));
            for (var i = 0; i < x.length; i++) {
                this.allDepartmentsList.push(data[x[i]]);
            }
            //////console.log(this.allDepartmentsList);
        });
        console.log(this.customerSerivce.currentCustomer);
        var query = this.db.database.ref('/Customers_List').orderByChild("email").equalTo(this.customerSerivce.currentCustomer.email).once("child_added", (snapshot) => {
            var userData = snapshot.val();
            console.log(Object.values(userData));
        });
    }
    transferDataSuccess(event) {
        console.log(event);
        this.addToCart(event.dragData, event.dragData.productInCarts);
        //this.customerCart.unshift(event.dragData);
    }
    logout() {
        this.afAuth.auth.signOut();
        /*   this.imageUrl = "";
          this.userName = "";
          this.isLoggedIn= false; */
        this.router.navigateByUrl("login-page");
    }
    incrementCount(product) {
        this.customerSerivce.updateCartCount(product);
    }
    decrementCount(product) {
        this.customerSerivce.decrementCartCount(product);
    }
    addToCart(product, productInCarts) {
        console.log(product, productInCarts);
        product['productTotalPrice'] = product.productCurrentPrice;
        product['quantity'] = 1;
        product['addedDate'] = Date.now();
        delete product.productInCarts;
        delete product.productInWishLists;
        delete product.productLongDescription;
        delete product.productShortDescription;
        delete product.productFeatures;
        delete product.parentCategory;
        delete product.parentSubCategory;
        delete product.parentDepartment;
        this.customerSerivce.updateCart(product);
        this._productService.updateCartCount(this.currentDepartment, this.currentCategory, this.currentSubCategory, product.productId, productInCarts);
    }
    selectDepartment(value) {
        this.isDepartmentSelected = true;
        this.currentDepartment = value;
        //////console.log(value);
        this.fb.fetchSpecificDepartment(value).subscribe(data => {
            var x = Object.keys(data);
            ////console.log(Object.values(data));
            this.specificCategoriesList = [];
            this.specificCategoriesList = x;
            this.selectText = 'Select a Category';
        });
    }
    selectCategory(value) {
        this.isCategorySelected = true;
        this.currentCategory = value;
        this.specificSubCategoriesList = [];
        this.fb.fetchSpecificCategory(this.currentDepartment, this.currentCategory).subscribe(data => {
            var x = Object.keys(data);
            ////console.log(Object.values(data));
            for (var i = 0; i < x.length; i++) {
                if (data[x[i]] === '') {
                    continue;
                }
                else {
                    this.specificSubCategoriesList.push(x[i]);
                }
            }
            this.selectText = 'Select a Sub Category';
        });
    }
    selectSubCategory(value) {
        this.issubCategorySelected = true;
        this.noProductsFlag = false;
        this.displayAllProductsFlag = true;
        this.currentSubCategory = value;
        this.productsToBeDisplayed = [];
        this.fb.fetchSpecificSubCategory(this.currentDepartment, this.currentCategory, this.currentSubCategory).subscribe(data => {
            for (var prop in data) {
                this.productsToBeDisplayed.push(data[prop]);
            }
            for (var i = 0; i < this.productsToBeDisplayed.length; i++) {
                if (this.productsToBeDisplayed[i] === '') {
                    this.productsToBeDisplayed.splice(i, 1);
                }
            }
            if (this.productsToBeDisplayed.length === 0) {
                this.noProductsFlag = true;
            }
            else {
                this.noProductsFlag = false;
            }
            console.log(this.productsToBeDisplayed);
            this.selectText = 'Choose a Product';
            console.log(this.customerSerivce.currentCustomer.cart);
            /* for(var i=0;i<this.customerSerivce.currentCustomer.cart.length;i++){
              if(this.customerSerivce.currentCustomer.cart[i] != ''){
                this.customerCart.unshift(this.customerSerivce.currentCustomer.cart[i]);
              }
            } */
            this.customerCart = this.customerSerivce.currentCustomer.cart;
        });
    }
    goToSpecificProduct(product) {
        //////console.log(product);
        this.isDepartmentSelected = true;
        this.isCategorySelected = true;
        this.issubCategorySelected = true;
        //this.productsToBeDisplayed = [];
        this.selectText = null;
        this.displayAllProductsFlag = false;
        this.showRouterOutlet = true;
        this._productService.setProduct(product);
        this.currentProduct = this._productService.getProduct();
        this.isProductSelected = true;
        //this.router.navigateByUrl('home-page/specific-product');
    }
    deleteFromCart(product) {
        this.customerSerivce.deleteFromCart(product);
    }
    shiftToDepartment() {
        this.isCategorySelected = false;
        this.issubCategorySelected = false;
        this.isDepartmentSelected = true;
        this.showRouterOutlet = false;
        this.displayAllProductsFlag = false;
        this.noProductsFlag = false;
        this.selectText = 'Select any Category';
    }
    shiftToCategory() {
        this.noProductsFlag = false;
        this.issubCategorySelected = false;
        this.isCategorySelected = true;
        this.showRouterOutlet = false;
        this.displayAllProductsFlag = false;
        this.selectText = 'Select a SubCategory';
    }
    shiftToSubCategory() {
        this.noProductsFlag = false;
        this.selectText = 'Choose a Product';
        this.showRouterOutlet = false;
        this.displayAllProductsFlag = true;
    }
    shiftToHome() {
        this.noProductsFlag = false;
        this.isDepartmentSelected = false;
        this.isCategorySelected = false;
        this.issubCategorySelected = false;
        this.showRouterOutlet = false;
        this.displayAllProductsFlag = false;
        this.selectText = 'Select any Department';
    }
    ngOnDestroy() {
        ////console.log('im leaving');
        this.isDepartmentSelected = true;
        this.isCategorySelected = true;
        this.issubCategorySelected = true;
    }
};
HomePageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home-page',
        template: __webpack_require__("../../../../../src/app/home-page/home-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home-page/home-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8__services_customer_service__["a" /* CustomerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_customer_service__["a" /* CustomerService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_product_service__["a" /* ProductService */]) === "function" && _g || Object])
], HomePageComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=home-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/login-page/login-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login-page/login-page.component.html":
/***/ (function(module, exports) {

module.exports = "\n<button mdl-button mdl-button-type=\"raised\" mdl-ripple (click)=\"login()\" *ngIf=\"!(user | async)?.uid\">Login</button>\n  \n\n\n  <nav *ngIf=\"(user | async)?.uid\">\n    <div class=\"nav-wrapper\">\n       <div class=\"chip\" style=\"width:12%\">\n    {{userName}}\n  </div>\n    \n      <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n        <li></li>\n        <li><a href=\"badges.html\">Components</a></li>\n      </ul>\n    </div>\n  </nav>"

/***/ }),

/***/ "../../../../../src/app/login-page/login-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_localstorage_WebStorage__ = __webpack_require__("../../../../angular2-localstorage/WebStorage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_Customer__ = __webpack_require__("../../../../../src/app/models/Customer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_async_local_storage__ = __webpack_require__("../../../../angular-async-local-storage/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_customer_service__ = __webpack_require__("../../../../../src/app/services/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase_app__ = __webpack_require__("../../../../firebase/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_SuccessfulCheckOuts__ = __webpack_require__("../../../../../src/app/models/SuccessfulCheckOuts.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











let LoginPageComponent = class LoginPageComponent {
    constructor(storage, customerService, afAuth, db, auth, router) {
        this.storage = storage;
        this.customerService = customerService;
        this.afAuth = afAuth;
        this.db = db;
        this.auth = auth;
        this.router = router;
        this.username = 'hello world';
        this.customer = new __WEBPACK_IMPORTED_MODULE_6__models_Customer__["a" /* Customer */]();
        this.checkOuts = new __WEBPACK_IMPORTED_MODULE_10__models_SuccessfulCheckOuts__["a" /* SuccessfulCheckOuts */]();
        this.user = this.afAuth.authState;
        this.customersList = this.db.list('/Customers_List');
        /*  console.log(this.customersList.subscribe(data=>{
           console.log(data);
         })) */
        this.afAuth.authState.subscribe(auth => {
            if (auth) {
                this.customerService.currentCustomer.email = auth.email;
                this.customerService.currentCustomer.displayName = auth.displayName;
                this.router.navigateByUrl('home-page');
            }
        });
        // this.ProductsList = this.db.list('/Products_List');
    }
    ngOnInit() {
        console.log(this.username);
        this.storage.setItem('lang', 'fr').subscribe(() => {
            // Done
        });
        this.storage.getItem('lang').subscribe((data) => {
            data; // null
            console.log(data);
        }, () => {
            // Not called
        });
    }
    login() {
        this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_9_firebase_app__["auth"].GoogleAuthProvider());
        let fireBaseUser = __WEBPACK_IMPORTED_MODULE_9_firebase_app__["auth"]().currentUser;
        var y;
        this.user.subscribe(data => {
            //console.log(data);
            if (data != null) {
                this.imageUrl = data.photoURL;
                this.userName = data.displayName;
                this.customer.email = data.email;
                this.customer.displayName = data.displayName;
                this.auth.userName = data.displayName;
                this.auth.photoUrl = data.photoURL;
                this.auth.requestToken = data.getIdToken(true).then(token => {
                    this.auth.requestToken = token;
                    //console.log(data.toJSON())
                    //console.log(this.auth.requestToken);
                });
                this.customersList = this.db.list('/Customers_List');
                this.customersList.subscribe(data => {
                    console.log(data);
                });
                var query = this.db.database.ref('/Customers_List').orderByChild("email").equalTo(data.email).once("value", (snapshot) => {
                    var userData = snapshot.val();
                    if (userData) {
                        console.log('user already exists');
                    }
                    else {
                        console.log('user doesnt exits');
                        this.checkOuts.checkOutDate = '';
                        this.checkOuts.checkOutPrice = 0;
                        this.checkOuts.itemId = '';
                        this.checkOuts.itemImage = '';
                        this.customer.cart = [''];
                        this.customer.interests = [''];
                        this.customer.viewedItems = [''];
                        this.customer.wishList = [''];
                        this.customer.checkOutsDone[0] = this.checkOuts;
                        console.log(this.customer);
                        this.customersList.push(this.customer);
                    }
                    console.log(userData);
                    /* this.customerService.currentCustomer.email = data.email;
                    this.customerService.currentCustomer.displayName = data.displayName; */
                    this.customerService.currentCustomer = this.customer;
                });
                /* if(y === true){
                     console.log('i exist in db');
                   }else if(y === false){
                     console.log('i dont exist in db');
                     //this.customersList.push('123')
                   } */
                this.isLoggedIn = true;
                this.router.navigateByUrl('home-page');
            }
            /* this.imageUrl = this.afAuth.auth.currentUser.photoURL; */
        });
    }
    fetch() {
        console.log(this.afAuth.auth.currentUser);
        this.imageUrl = this.afAuth.auth.currentUser.photoURL;
    }
    logout() {
        this.afAuth.auth.signOut();
        this.imageUrl = "";
        this.userName = "";
        this.isLoggedIn = false;
        this.router.navigateByUrl("login-page");
    }
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_angular2_localstorage_WebStorage__["a" /* LocalStorage */])(),
    __metadata("design:type", String)
], LoginPageComponent.prototype, "username", void 0);
LoginPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login-page',
        template: __webpack_require__("../../../../../src/app/login-page/login-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login-page/login-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7_angular_async_local_storage__["b" /* AsyncLocalStorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_angular_async_local_storage__["b" /* AsyncLocalStorage */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8__services_customer_service__["a" /* CustomerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_customer_service__["a" /* CustomerService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */]) === "function" && _f || Object])
], LoginPageComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=login-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/Customer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__address__ = __webpack_require__("../../../../../src/app/models/address.ts");

class Customer {
    constructor() {
        this.interests = [];
        this.cart = [];
        this.checkOutsDone = [];
        this.viewedItems = [];
        this.wishList = [];
        this.address = [];
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Customer;

class ShippingLabel extends __WEBPACK_IMPORTED_MODULE_0__address__["a" /* Address */] {
}
/* unused harmony export ShippingLabel */

class cartProducts {
}
/* unused harmony export cartProducts */

class CheckOutProducts {
}
/* harmony export (immutable) */ __webpack_exports__["b"] = CheckOutProducts;

//# sourceMappingURL=Customer.js.map

/***/ }),

/***/ "../../../../../src/app/models/SuccessfulCheckOuts.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class SuccessfulCheckOuts {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SuccessfulCheckOuts;

//# sourceMappingURL=SuccessfulCheckOuts.js.map

/***/ }),

/***/ "../../../../../src/app/models/address.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Address {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Address;

//# sourceMappingURL=address.js.map

/***/ }),

/***/ "../../../../../src/app/models/product.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Product {
    constructor() {
        this.productFeatures = [];
        this.productPriceArray = [];
        this.productComments = [];
        this.productInCarts = 0;
        this.productInWishLists = 0;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Product;

//# sourceMappingURL=product.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







let AuthService = class AuthService {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
        this.currentUser = null;
    }
    canActivate() {
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].from(this.auth.authState).take(1).map(state => !!state).do(authenticated => {
            if (!authenticated)
                this.router.navigateByUrl('login-page');
        });
    }
};
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/customer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_Customer__ = __webpack_require__("../../../../../src/app/models/Customer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let CustomerService = class CustomerService {
    constructor(db, _productService, afAuth) {
        this.db = db;
        this._productService = _productService;
        this.afAuth = afAuth;
        this.currentCustomer = new __WEBPACK_IMPORTED_MODULE_1__models_Customer__["a" /* Customer */]();
        this.customersList = this.db.list('/Customers_List');
        this.afAuth.authState.subscribe(data => {
            if (data) {
                this.email = data.email;
                var query = this.db.database.ref('/Customers_List').orderByChild('email').equalTo(this.email);
                var y = query.once("value", (snapshot) => {
                    var data = snapshot.val();
                    var xKeys = Object.keys(data);
                    this.currentCustomer = data[xKeys[0]];
                    //this.currentCustomer.cart.unshift();
                    console.log(this.currentCustomer);
                });
            }
            else {
                console.log('still not logged in');
            }
        });
    }
    setCurrentCustomer(customer) {
        this.currentCustomer = customer;
    }
    updateCartCount(product) {
        var x = [];
        x = this.currentCustomer.cart;
        for (var i = 0; i < this.currentCustomer.cart.length; i++) {
            if (product.productId === this.currentCustomer.cart[i].productId) {
                x[i].quantity++;
                x[i].productTotalPrice = x[i].quantity * x[i].productCurrentPrice;
            }
        }
        var query = this.db.database.ref('/Customers_List').orderByChild('email').equalTo(this.email);
        var y = query.once("child_added", function (snapshot) {
            snapshot.ref.update({ 'cart': x }).then(data => {
                console.log(snapshot.val());
            });
            //console.log(snapshot.val());
        });
    }
    decrementCartCount(product) {
        var x = [];
        x = this.currentCustomer.cart;
        for (var i = 0; i < this.currentCustomer.cart.length; i++) {
            if (product.productId === this.currentCustomer.cart[i].productId) {
                x[i].quantity--;
                x[i].productTotalPrice = x[i].quantity * x[i].productCurrentPrice;
            }
        }
        var query = this.db.database.ref('/Customers_List').orderByChild('email').equalTo(this.email);
        var y = query.once("child_added", function (snapshot) {
            snapshot.ref.update({ 'cart': x }).then(data => {
                console.log(snapshot.val());
            });
            //console.log(snapshot.val());
        });
    }
    updateCart(product) {
        var x = [];
        x = this.currentCustomer.cart;
        x.unshift(product);
        console.log(x);
        var query = this.db.database.ref('/Customers_List').orderByChild('email').equalTo(this.email);
        var y = query.once("child_added", function (snapshot) {
            snapshot.ref.update({ 'cart': x }).then(data => {
                console.log(snapshot.val());
            });
            //console.log(snapshot.val());
        });
    }
    deleteFromCart(product) {
        var x = this.currentCustomer.cart;
        if (this.currentCustomer.cart.length >= 1) {
            for (var i = 0; i < this.currentCustomer.cart.length; i++) {
                if (this.currentCustomer.cart[i].productId === product.productId) {
                    console.log('match found at', i);
                    x.splice(i, 1);
                }
            }
        }
        else {
            x.unshift('');
        }
        var query = this.db.database.ref('/Customers_List').orderByChild('email').equalTo(this.email);
        var y = query.once("child_added", function (snapshot) {
            snapshot.ref.update({ 'cart': x }).then(data => {
                console.log(snapshot.val());
            });
            //console.log(snapshot.val());
        });
    }
    updateCustomerDetails(y) {
        var query = this.db.database.ref('/Customers_List').orderByChild('email').equalTo(this.email);
        var x = query.once("child_added", function (snapshot) {
            snapshot.ref.update(y).then(data => {
                console.log(data);
                Materialize.toast('Details Updated Successfully', 2000);
                ;
                //this.router.navigateByUrl('home-page');
                this.router.navigateByUrl('home-page');
            });
        });
    }
    fetchProductInfo(productId) {
        var query = this.db.database.ref('/Customers_List').orderByChild('email').equalTo(this.email);
        var x = query.once("child_added", function (snapshot) {
            console.log(snapshot.val());
        });
    }
};
CustomerService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_product_service__["a" /* ProductService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _c || Object])
], CustomerService);

var _a, _b, _c;
//# sourceMappingURL=customer.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/firebase.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let FirebaseService = class FirebaseService {
    constructor(http, afAuth) {
        this.http = http;
        this.afAuth = afAuth;
        this._authService = new __WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */](this.af, this.router);
        this.user = this.afAuth.authState;
        /*  this.user.subscribe(data=>{
             data.getIdToken(true).then(token=>{
                 this.requestToken = token;
                 //console.log(this.requestToken);
             })
         }) */
        //console.log(this.requestToken);
        //console.log(this._authService.requestToken);
        /*      //console.log(this.http.get('http://push.cricbuzz.com/match-api/18462/commentary.json').map(res=>res.json()).subscribe(data=>{
                 //console.log(data);
             })); */
    }
    fetchCategories() {
        return this.http.get('https://shoppingdemo-e8235.firebaseio.com/Lists/CategoriesList.json').map(res => res.json());
    }
    fetchDepartments() {
        return this.http.get('https://shoppingdemo-e8235.firebaseio.com/Lists/DepartmentsList.json').map(res => res.json());
    }
    fetchSubCategories() {
        return this.http.get('https://shoppingdemo-e8235.firebaseio.com/Lists/SubCategoriesList.json').map(res => res.json());
    }
    fetchClasses() {
        return this.http.get('https://shoppingdemo-e8235.firebaseio.com/Lists/ProductsList.json').map(res => res.json());
    }
    fetchSpecificDepartment(department) {
        return this.http.get('https://shoppingdemo-e8235.firebaseio.com/Products_List/' + department + '.json').map(res => res.json());
    }
    fetchSpecificCategory(department, category) {
        return this.http.get('https://shoppingdemo-e8235.firebaseio.com/Products_List/' + department + '/' + category + '/' + '.json').map(res => res.json());
    }
    fetchSpecificSubCategory(d, c, s) {
        return this.http.get('https://shoppingdemo-e8235.firebaseio.com/Products_List/' + d + '/' + c + '/' + s + '/' + '.json').map(res => res.json());
    }
};
FirebaseService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _b || Object])
], FirebaseService);

var _a, _b;
//# sourceMappingURL=firebase.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_product__ = __webpack_require__("../../../../../src/app/models/product.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let ProductService = class ProductService {
    constructor(db) {
        this.db = db;
        this.productToReturn = new __WEBPACK_IMPORTED_MODULE_1__models_product__["a" /* Product */]();
    }
    setProduct(product) {
        this.productToBeLoaded = product;
    }
    getProduct() {
        return this.productToBeLoaded;
    }
    updateCartCount(d, c, s, productId, previousCartCount) {
        previousCartCount++;
        console.log(previousCartCount);
        var query = this.db.database.ref('/Products_List/' + d + '/' + c + '/' + s).orderByChild('productId').equalTo(productId);
        var y = query.once("child_added", function (snapshot) {
            snapshot.ref.update({ 'productInCarts': previousCartCount }).then(data => {
                Materialize.toast('Product added in Cart', 2000);
            });
        });
        var query1 = this.db.database.ref('/EnitreProductsList').orderByChild('productId').equalTo(productId);
        var x = query.once("child_added", function (snapshot) {
            snapshot.ref.update({ 'productInCarts': previousCartCount }).then(data => {
            });
        });
    }
    fetchProductInfo(productId) {
        console.log(productId);
        var query = this.db.database.ref('/EntireProductsList').orderByChild('productId').equalTo(productId);
        var y = query.once("value", (snapshot) => {
            var x = snapshot.val();
            this.productToReturn = x;
        });
        console.log(this.productToReturn);
        return this.productToReturn;
    }
};
ProductService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object])
], ProductService);

var _a;
//# sourceMappingURL=product.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
const environment = {
    production: false
};
/* harmony export (immutable) */ __webpack_exports__["a"] = environment;

//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map