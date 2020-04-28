function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-auth-auth-routing-module"], {
  /***/
  "./src/modules/auth/auth-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/modules/auth/auth-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: ROUTES, AuthRoutingModule */

  /***/
  function srcModulesAuthAuthRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ROUTES", function () {
      return ROUTES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function () {
      return AuthRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _auth_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.module */
    "./src/modules/auth/auth.module.ts");
    /* harmony import */


    var _containers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./containers */
    "./src/modules/auth/containers/index.ts");
    /* tslint:disable: ordered-imports*/


    var ROUTES = [{
      path: 'login',
      canActivate: [],
      component: _containers__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    }, {
      path: 'register',
      canActivate: [],
      component: _containers__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
    }];

    var AuthRoutingModule = function AuthRoutingModule() {
      _classCallCheck(this, AuthRoutingModule);
    };

    AuthRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_auth_module__WEBPACK_IMPORTED_MODULE_3__["AuthModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AuthRoutingModule);
    /***/
  }
}]);
//# sourceMappingURL=modules-auth-auth-routing-module-es5.js.map