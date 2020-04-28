(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/modules/auth/containers/login/login.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/auth/containers/login/login.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-lg-5\">\r\n      <div class=\"card shadow-lg border-0 rounded-lg mt-5\">\r\n\r\n        <div class=\"card-header\">\r\n          <h3 class=\"text-center font-weight-light my-4\">Login</h3>\r\n        </div>\r\n\r\n        <div class=\"card-body\">\r\n          <form [formGroup]=\"loginForm\" (ngSubmit)=\"authorize()\">\r\n            <div class=\"form-group\">\r\n              <label class=\"small mb-1\" for=\"inputLogin\">Login</label>\r\n              <input class=\"form-control py-4\" id=\"inputLogin\"\r\n                [ngClass]=\"{'is-invalid': loginForm.get('login').errors && loginForm.get('login').touched}\"\r\n                formControlName=\"login\" type=\"email\" placeholder=\"Enter login\" />\r\n\r\n              <div class=\"invalid-feedback\"\r\n                *ngIf=\"loginForm.get('login').hasError('required') && loginForm.get('login').touched\">\r\n                Login is required\r\n              </div>\r\n\r\n              <div class=\"invalid-feedback\"\r\n                *ngIf=\"loginForm.get('login').hasError('pattern') && loginForm.get('login').touched\">\r\n                Login invalid\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label class=\"small mb-1\" for=\"inputPassword\">Password</label>\r\n              <input class=\"form-control py-4\" id=\"inputPassword\" [ngClass]=\"{'is-invalid': loginForm.get('password').errors &&\r\n                    loginForm.get('password').touched}\" formControlName=\"password\" type=\"password\"\r\n                placeholder=\"Enter password\" />\r\n\r\n              <div class=\"invalid-feedback\"\r\n                *ngIf=\"loginForm.get('password').hasError('required') && loginForm.get('password').touched\">\r\n                Password is required\r\n              </div>\r\n\r\n              <div class=\"invalid-feedback\"\r\n                *ngIf=\"loginForm.get('password').hasError('pattern') && loginForm.get('password').touched\">\r\n                Password invalid\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <div [hidden]=\"!error.state\" class=\"alert alert-danger\" role=\"alert\">\r\n              {{error.message}}\r\n            </div>\r\n            <div class=\"form-group d-flex align-items-center justify-content-between mt-4 mb-0\">\r\n              <button [disabled]=\"!loginForm.valid\" class=\"btn btn-primary\" style=\"width: 100%;\"\r\n                type=\"submit\">Login</button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n\r\n        <div class=\" card-footer text-center\">\r\n          <div class=\"small\">\r\n            <a routerLink=\"/auth/register\">Need an account? Sign up!</a>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/modules/auth/containers/register/register.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/auth/containers/register/register.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-lg-7\">\r\n      <div class=\"card shadow-lg border-0 rounded-lg mt-5\">\r\n        <div class=\"card-header\">\r\n          <h3 class=\"text-center font-weight-light my-4\">Create Account</h3>\r\n        </div>\r\n\r\n        <div class=\"card-body\">\r\n          <form [formGroup]=\"registerForm\" (ngSubmit)=\"authorization()\">\r\n\r\n            <div class=\"form-group\">\r\n              <label class=\"small mb-1\" for=\"login\">Login</label>\r\n              <input class=\"form-control py-4\"\r\n                [ngClass]=\"{'is-invalid': registerForm.get('login').errors && registerForm.get('login').touched}\"\r\n                formControlName=\"login\" type=\"text\" placeholder=\"Enter login\" />\r\n\r\n              <div class=\"invalid-feedback\"\r\n                *ngIf=\"registerForm.get('login').hasError('required') && registerForm.get('login').touched\">\r\n                Login is required\r\n              </div>\r\n\r\n              <div class=\"invalid-feedback\"\r\n                *ngIf=\"registerForm.get('login').hasError('minlength') && registerForm.get('login').touched\">\r\n                Login must be at least 3 char\r\n              </div>\r\n\r\n              <div class=\"invalid-feedback\"\r\n                *ngIf=\"registerForm.get('login').hasError('maxlength') && registerForm.get('login').touched\">\r\n                Login must be at least 16 char\r\n              </div>\r\n\r\n              <div class=\"invalid-feedback\"\r\n                *ngIf=\"registerForm.get('login').hasError('pattern') && registerForm.get('login').touched\">\r\n                Login invalid\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-row\">\r\n\r\n              <div class=\"col-md-6\">\r\n                <div class=\"form-group\">\r\n                  <label class=\"small mb-1\" for=\"password\">Password</label>\r\n                  <input class=\"form-control py-4\" [ngClass]=\"{'is-invalid': registerForm.get('password').errors &&\r\n                    registerForm.get('password').touched}\" formControlName=\"password\" type=\"password\"\r\n                    placeholder=\"Enter password\" />\r\n\r\n                  <div class=\"invalid-feedback\"\r\n                    *ngIf=\"registerForm.get('password').hasError('required') && registerForm.get('password').touched\">\r\n                    Password is required\r\n                  </div>\r\n\r\n                  <div class=\"invalid-feedback\"\r\n                    *ngIf=\"registerForm.get('password').hasError('minlength') && registerForm.get('password').touched\">\r\n                    Password must be at least 6 char\r\n                  </div>\r\n\r\n                  <div class=\"invalid-feedback\"\r\n                    *ngIf=\"registerForm.get('password').hasError('maxlength') && registerForm.get('password').touched\">\r\n                    Password must be at least 18 char\r\n                  </div>\r\n\r\n                  <div class=\"invalid-feedback\"\r\n                    *ngIf=\"registerForm.get('password').hasError('pattern') && registerForm.get('password').touched\">\r\n                    Password invalid\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-md-6\">\r\n                <div class=\"form-group\">\r\n                  <label class=\"small mb-1\" for=\"confirmPassword\">Confirm Password</label>\r\n                  <input class=\"form-control py-4\" [ngClass]=\"{'is-invalid': registerForm.get('confirmPassword').errors\r\n                    && registerForm.get('confirmPassword').touched \r\n                    || registerForm.get('password').touched \r\n                    && registerForm.hasError('mismatch')}\" formControlName=\"confirmPassword\" type=\"password\"\r\n                    placeholder=\"Confirm password\" />\r\n                  <div class=\"invalid-feedback\" *ngIf=\"registerForm.get('confirmPassword').hasError('mismatch')\r\n                      && registerForm.get('confirmPassword').touched\">\r\n                    Password must match\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div [hidden]=\"!error.state\" class=\"alert alert-danger\" role=\"alert\">\r\n              {{error.message}}\r\n            </div>\r\n\r\n            <div class=\"form-group mt-4 mb-0\">\r\n              <button [disabled]=\"!registerForm.valid\" class=\"btn btn-primary btn-block\" type=\"submit\">Create\r\n                Account</button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n\r\n        <div class=\"card-footer text-center\">\r\n          <div class=\"small\">\r\n            <a routerLink=\"/auth/login\">Have an account? Go to login</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_modules_auth_guards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/modules/auth/guards */ "./src/modules/auth/guards/index.ts");
/* harmony import */ var src_modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/modules/auth/auth.module */ "./src/modules/auth/auth.module.ts");
/** @format */





const routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'auth/login'
    },
    {
        path: '',
        canActivate: [src_modules_auth_guards__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        loadChildren: () => __webpack_require__.e(/*! import() | modules-home-home-routing-module */ "modules-home-home-routing-module").then(__webpack_require__.bind(null, /*! ../modules/home/home-routing.module */ "./src/modules/home/home-routing.module.ts")).then(m => m.HomeRoutingModule)
    },
    {
        path: 'auth',
        loadChildren: () => __webpack_require__.e(/*! import() | modules-auth-auth-routing-module */ "modules-auth-auth-routing-module").then(__webpack_require__.bind(null, /*! ../modules/auth/auth-routing.module */ "./src/modules/auth/auth-routing.module.ts")).then(m => m.AuthRoutingModule)
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: '/home'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes), src_modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_4__["AuthModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/** @format */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsYUFBYSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBmb3JtYXQgKi9cclxuIl19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/** @format */


let AppComponent = class AppComponent {
    constructor() {
        this.version = _angular_core__WEBPACK_IMPORTED_MODULE_1__["VERSION"];
    }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: MaterialModule, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/clipboard */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/tree.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/cdk/observers */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/observers.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
/* harmony import */ var _node_modules_ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../../node_modules/ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/** @format */



















































let MaterialModule = class MaterialModule {
};
MaterialModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        exports: [
            // CDK
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["A11yModule"],
            _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_44__["BidiModule"],
            _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_45__["ObserversModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_46__["OverlayModule"],
            _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_47__["PlatformModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__["PortalModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["DragDropModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["ScrollingModule"],
            // ScrollDispatchModule,
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_9__["CdkStepperModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_10__["CdkTableModule"],
            _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_5__["ClipboardModule"],
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_11__["CdkTreeModule"],
            // Material
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__["MatAutocompleteModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_17__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__["MatChipsModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_24__["MatExpansionModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_25__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_27__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_28__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__["MatMenuModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_31__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_33__["MatRadioModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_30__["MatRippleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_34__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_35__["MatSidenavModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_37__["MatSlideToggleModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_36__["MatSliderModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_38__["MatSnackBarModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_21__["MatStepperModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_40__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_41__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_42__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_43__["MatTooltipModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_30__["MatNativeDateModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_39__["MatSortModule"]
        ]
    })
], MaterialModule);

let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_50__["AppComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_49__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
            _node_modules_ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_48__["BsDatepickerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
            MaterialModule
        ],
        providers: [_app_component__WEBPACK_IMPORTED_MODULE_50__["AppComponent"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_50__["AppComponent"]],
        entryComponents: []
    })
], AppModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    apiUrl: 'https://localhost:5001/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "./src/modules/auth/auth.module.ts":
/*!*****************************************!*\
  !*** ./src/modules/auth/auth.module.ts ***!
  \*****************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components */ "./src/modules/auth/components/index.ts");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./containers */ "./src/modules/auth/containers/index.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guards */ "./src/modules/auth/guards/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services */ "./src/modules/auth/services/index.ts");

/* tslint:disable: ordered-imports*/




/* Components */

/* Containers */

/* Guards */

/* Services */

let AuthModule = class AuthModule {
};
AuthModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]],
        providers: [..._services__WEBPACK_IMPORTED_MODULE_8__["services"], ..._guards__WEBPACK_IMPORTED_MODULE_7__["guards"]],
        declarations: [..._containers__WEBPACK_IMPORTED_MODULE_6__["containers"], ..._components__WEBPACK_IMPORTED_MODULE_5__["components"]],
        exports: [..._containers__WEBPACK_IMPORTED_MODULE_6__["containers"], ..._components__WEBPACK_IMPORTED_MODULE_5__["components"]]
    })
], AuthModule);



/***/ }),

/***/ "./src/modules/auth/components/index.ts":
/*!**********************************************!*\
  !*** ./src/modules/auth/components/index.ts ***!
  \**********************************************/
/*! exports provided: components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const components = [];


/***/ }),

/***/ "./src/modules/auth/containers/index.ts":
/*!**********************************************!*\
  !*** ./src/modules/auth/containers/index.ts ***!
  \**********************************************/
/*! exports provided: containers, LoginComponent, RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containers", function() { return containers; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "./src/modules/auth/containers/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register/register.component */ "./src/modules/auth/containers/register/register.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return _register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"]; });




const containers = [_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"]];




/***/ }),

/***/ "./src/modules/auth/containers/login/login.component.css":
/*!***************************************************************!*\
  !*** ./src/modules/auth/containers/login/login.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9hdXRoL2NvbnRhaW5lcnMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/modules/auth/containers/login/login.component.ts":
/*!**************************************************************!*\
  !*** ./src/modules/auth/containers/login/login.component.ts ***!
  \**************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services */ "./src/modules/auth/services/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/** @format */





let LoginComponent = class LoginComponent {
    constructor(authService, router, formBuilder) {
        this.authService = authService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.error = {};
    }
    ngOnInit() {
        this.createLoginForm();
    }
    createLoginForm() {
        this.loginForm = this.formBuilder.group({
            login: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[a-z0-9_-]+$/)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[a-z0-9_-]+$/)]]
        });
    }
    authorize() {
        if (this.loginForm.valid) {
            const user = this.loginForm.value;
            this.authService.login$(user).subscribe(() => {
                this.router.navigateByUrl('/home');
            }, error => {
                if (error.status === 401) {
                    if (!this.error.state) {
                        this.error.state = !this.error.state;
                        this.error.message = error.error;
                        console.log(error);
                    }
                }
            });
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/modules/auth/containers/login/login.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.component.css */ "./src/modules/auth/containers/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/modules/auth/containers/register/register.component.css":
/*!*********************************************************************!*\
  !*** ./src/modules/auth/containers/register/register.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9hdXRoL2NvbnRhaW5lcnMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/modules/auth/containers/register/register.component.ts":
/*!********************************************************************!*\
  !*** ./src/modules/auth/containers/register/register.component.ts ***!
  \********************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services */ "./src/modules/auth/services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/** @format */





let RegisterComponent = class RegisterComponent {
    constructor(authService, router, formBuilder) {
        this.authService = authService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.error = {};
    }
    ngOnInit() {
        this.createRegisterForm();
    }
    createRegisterForm() {
        this.registerForm = this.formBuilder.group({
            login: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(16),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[a-z0-9_-]+$/)
                ]
            ],
            password: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(18),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[a-z0-9_-]+$/)
                ]
            ],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        }, {
            validators: form => form.get('password').value === form.get('confirmPassword').value
                ? null
                : { mismatch: true }
        });
    }
    authorization() {
        if (this.registerForm.valid) {
            const user = this.registerForm.value;
            debugger;
            this.authService.register$(user).subscribe(() => this.authService.login$(user).subscribe(() => this.router.navigateByUrl('/home'), error => {
                if (!this.error.state) {
                    this.error.state = !this.error.state;
                    this.error.message = error.message;
                    console.error(error);
                }
            }), error => {
                if (!this.error.state) {
                    this.error.state = !this.error.state;
                    this.error.message = error.message;
                    console.error(error);
                }
            });
        }
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/modules/auth/containers/register/register.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./register.component.css */ "./src/modules/auth/containers/register/register.component.css")).default]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/modules/auth/guards/auth.guard.ts":
/*!***********************************************!*\
  !*** ./src/modules/auth/guards/auth.guard.ts ***!
  \***********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services */ "./src/modules/auth/services/index.ts");





let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate() {
        return this.authService.loggedIn()
            ? Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(true)
            : (() => {
                this.router.navigateByUrl('/auth/login');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
            })();
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthGuard);



/***/ }),

/***/ "./src/modules/auth/guards/index.ts":
/*!******************************************!*\
  !*** ./src/modules/auth/guards/index.ts ***!
  \******************************************/
/*! exports provided: guards, AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guards", function() { return guards; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.guard */ "./src/modules/auth/guards/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]; });



const guards = [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]];



/***/ }),

/***/ "./src/modules/auth/services/auth.service.ts":
/*!***************************************************!*\
  !*** ./src/modules/auth/services/auth.service.ts ***!
  \***************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/** @format */







let AuthService = class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'api/auth';
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]();
    }
    get UserId() {
        var _a, _b;
        return (_b = (_a = this.jwtHelper.decodeToken(localStorage.getItem('token'))) === null || _a === void 0 ? void 0 : _a.nameid) !== null && _b !== void 0 ? _b : {};
    }
    login$(model) {
        return this.http.post(`${this.baseUrl}/authentication`, model).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => {
            const user = response;
            if (user) {
                localStorage.setItem('token', user.token);
                localStorage.setItem('user', JSON.stringify(user.user));
                this.currentUser = user.user;
                return user.user;
            }
        }));
    }
    register$(user) {
        return this.http.post(`${this.baseUrl}/authorization`, user);
    }
    loggedIn() {
        const token = localStorage.getItem('token');
        return !this.jwtHelper.isTokenExpired(token);
    }
    logOut() {
        localStorage.clear();
        this.router.navigateByUrl('/auth/login');
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/modules/auth/services/index.ts":
/*!********************************************!*\
  !*** ./src/modules/auth/services/index.ts ***!
  \********************************************/
/*! exports provided: services, AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "services", function() { return services; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/modules/auth/services/auth.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]; });

/** @format */


const services = [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]];



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\reds\Desktop\Task\TaskSPA\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map