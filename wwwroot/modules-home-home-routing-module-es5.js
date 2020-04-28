function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-home-home-routing-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/home/containers/home/home.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/home/containers/home/home.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesHomeContainersHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<button id=\"exit\" (click)=\"auth.logOut()\" mat-icon-button color=\"warn\">\r\n    <mat-icon>exit_to_app</mat-icon>\r\n</button>\r\n\r\n<app-project *ngFor=\"let item of this.userData;\" [data]='item'></app-project>\r\n\r\n<button id=\"add\" (click)=\"createProjectDialog()\" mat-fab color=\"primary\">\r\n    <mat-icon>add</mat-icon>\r\n</button>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/project/components/create-project-dialog/createProjecrDialog.component.html":
  /*!***************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/project/components/create-project-dialog/createProjecrDialog.component.html ***!
    \***************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesProjectComponentsCreateProjectDialogCreateProjecrDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"form\" (ngSubmit)=\"submit(form)\">\n  <h1 mat-dialog-title>Create project</h1>\n  <mat-dialog-content>\n\n    <mat-form-field appearance=\"fill\">\n      <input matInput formControlName=\"task\" placeholder=\"Enter project name\" />\n    </mat-form-field>\n\n  </mat-dialog-content>\n\n  <mat-dialog-actions>\n    <button [disabled]=\"!form.valid\" mat-button type=\"submit\">Create</button>\n    <button mat-button type=\"button\" (click)=\"dialogRef.close()\">Cancel</button>\n  </mat-dialog-actions>\n\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/project/components/create-task-dialog/createTaskDialog.component.html":
  /*!*********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/project/components/create-task-dialog/createTaskDialog.component.html ***!
    \*********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesProjectComponentsCreateTaskDialogCreateTaskDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"form\" (ngSubmit)=\"submit(form)\">\n  <h1 mat-dialog-title>Create task</h1>\n  <mat-dialog-content>\n\n    <mat-form-field appearance=\"fill\">\n      <input matInput formControlName=\"task\" placeholder=\"Enter task\" />\n    </mat-form-field>\n\n    <mat-form-field appearance=\"fill\">\n      <input matInput type=\"number\" formControlName=\"priority\" placeholder=\"Enter priority\" />\n    </mat-form-field>\n\n\n    <mat-form-field appearance=\"fill\">\n      <mat-label>Choose a date</mat-label>\n      <input matInput [matDatepicker]=\"picker\" formControlName=\"deadline\">\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n      <mat-datepicker #picker></mat-datepicker>\n    </mat-form-field>\n\n  </mat-dialog-content>\n\n  <mat-dialog-actions>\n    <button [disabled]=\"!form.valid\" mat-button type=\"submit\">Create</button>\n    <button mat-button type=\"button\" (click)=\"dialogRef.close()\">Cancel</button>\n  </mat-dialog-actions>\n\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/project/components/update-project-dialog/updateProjectDialog.component.html":
  /*!***************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/project/components/update-project-dialog/updateProjectDialog.component.html ***!
    \***************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesProjectComponentsUpdateProjectDialogUpdateProjectDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"form\" (ngSubmit)=\"submit(form)\">\n  <h1 mat-dialog-title>Update project</h1>\n  <mat-dialog-content>\n\n    <mat-form-field appearance=\"fill\">\n      <input matInput formControlName=\"task\" placeholder=\"Enter project\" />\n    </mat-form-field>\n\n  </mat-dialog-content>\n\n  <mat-dialog-actions>\n    <button [disabled]=\"!form.valid\" mat-button type=\"submit\">Update</button>\n    <button mat-button type=\"button\" (click)=\"dialogRef.close()\">Cancel</button>\n  </mat-dialog-actions>\n\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/project/components/update-task-dialog/updateTaskDialog.component.html":
  /*!*********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/project/components/update-task-dialog/updateTaskDialog.component.html ***!
    \*********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesProjectComponentsUpdateTaskDialogUpdateTaskDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"form\" (ngSubmit)=\"submit(form)\">\n  <h1 mat-dialog-title>Update task</h1>\n  <mat-dialog-content>\n\n    <mat-form-field appearance=\"fill\">\n      <input matInput formControlName=\"task\" placeholder=\"Enter task\" />\n    </mat-form-field>\n\n\n    <mat-form-field appearance=\"fill\">\n      <mat-label>Choose a date</mat-label>\n      <input matInput [matDatepicker]=\"picker\" formControlName=\"deadline\">\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n      <mat-datepicker #picker></mat-datepicker>\n    </mat-form-field>\n\n  </mat-dialog-content>\n\n  <mat-dialog-actions>\n    <button [disabled]=\"!form.valid\" mat-button type=\"submit\">Update</button>\n    <button mat-button type=\"button\" (click)=\"dialogRef.close()\">Cancel</button>\n  </mat-dialog-actions>\n\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/project/containers/project/project.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/project/containers/project/project.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesProjectContainersProjectProjectComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div [hidden]=\"deleted\" class=\"container\">\r\n\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"card-size card mb-3\">\r\n\r\n      <div class=\"card-header\">\r\n        {{projectName}}\r\n\r\n        <button (click)=\"removeProject()\" mat-icon-button color=\"primary\">\r\n          <mat-icon color=\"warn\">delete_outline</mat-icon>\r\n        </button>\r\n\r\n        <button (click)=\"updateProjectDialog()\" mat-icon-button color=\"primary\">\r\n          <mat-icon>create</mat-icon>\r\n        </button>\r\n\r\n      </div>\r\n\r\n      <div class=\"card-header\">\r\n        <button (click)=\"createTaskDialog()\" mat-icon-button color=\"primary\">\r\n          <mat-icon>add_box</mat-icon>\r\n        </button>\r\n      </div>\r\n\r\n\r\n      <div class=\"card-body\">\r\n        <div class=\"no-data\" *ngIf=\"!dataSource?.data?.length\"></div>\r\n        <table *ngIf=\" dataSource?.data?.length\" mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\"\r\n          cdkDropList [cdkDropListData]=\"dataSource\" (cdkDropListDropped)=\"dropTable($event)\">\r\n\r\n          <ng-container matColumnDef=\"state\">\r\n            <th mat-header-cell *matHeaderCellDef mat-header> </th>\r\n            <td [ngClass]=\"{'done': element.status == 0 ? true : false, 'expired': element.status == 1 ? true : false}\"\r\n              mat-cell *matCellDef=\"let element\">\r\n              <button [disabled]=\"element.status == 0 ? true : false \" (click)=\" setDone(element)\" mat-icon-button\r\n                color=\"primary\">\r\n                <mat-icon>check_circle_outline</mat-icon>\r\n              </button>\r\n            </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"priority\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Pr. </th>\r\n            <td [ngClass]=\"{'done': element.status == 0 ? true : false, 'expired': element.status == 1 ? true : false}\"\r\n              cdkDragHandle mat-cell *matCellDef=\"let element\"> {{element.priority}} </td>\r\n          </ng-container>\r\n\r\n\r\n          <ng-container matColumnDef=\"name\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n            <td [ngClass]=\"{'done': element.status == 0 ? true : false, 'expired': element.status == 1 ? true : false}\"\r\n              class=\"draw-border\" mat-cell *matCellDef=\" let element\"> {{element.name}}\r\n            </td>\r\n          </ng-container>\r\n\r\n\r\n          <ng-container matColumnDef=\"deadline\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Deadline </th>\r\n            <td [ngClass]=\"{'done': element.status == 0 ? true : false, 'expired': element.status == 1 ? true : false}\"\r\n              mat-cell *matCellDef=\"let element\">\r\n              <u> {{element.deadline | date:\"dd:MM:yyyy\"}}</u>\r\n            </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"status\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Status </th>\r\n            <td [ngClass]=\"{'done': element.status == 0 ? true : false, 'expired': element.status == 1 ? true : false}\"\r\n              mat-cell *matCellDef=\"let element\">\r\n              {{element.status | Status}}\r\n            </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"update\">\r\n            <th mat-header-cell *matHeaderCellDef mat-header> </th>\r\n            <th mat-header-cell *matHeaderCellDef> </th>\r\n            <td [ngClass]=\"{'done': element.status == 0 ? true : false, 'expired': element.status == 1 ? true : false}\"\r\n              mat-cell *matCellDef=\"let element\">\r\n              <button color=\"accent\" [disabled]=\"element.status == 0 ? true : false \"\r\n                (click)=\" updateTaskDialog(element)\" mat-icon-button color=\"primary\">\r\n                <mat-icon>ballot</mat-icon>\r\n              </button>\r\n            </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"remove\">\r\n            <th mat-header-cell *matHeaderCellDef mat-header> </th>\r\n            <th mat-header-cell *matHeaderCellDef> </th>\r\n            <td [ngClass]=\"{'done': element.status == 0 ? true : false, 'expired': element.status == 1 ? true : false}\"\r\n              mat-cell *matCellDef=\"let element\">\r\n              <button (click)=\"removeTask(element.id)\" color=\"accent\" [disabled]=\"element.status == 0 ? false : false \"\r\n                (click)=\"null\" mat-icon-button color=\"primary\">\r\n                <mat-icon color=\"warn\">delete_outline</mat-icon>\r\n              </button>\r\n            </td>\r\n          </ng-container>\r\n\r\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" cdkDrag [cdkDragData]=\"row\"></tr>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>";
    /***/
  },

  /***/
  "./src/modules/home/components/index.ts":
  /*!**********************************************!*\
    !*** ./src/modules/home/components/index.ts ***!
    \**********************************************/

  /*! exports provided: components */

  /***/
  function srcModulesHomeComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "components", function () {
      return components;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /** @format */


    var components = [];
    /***/
  },

  /***/
  "./src/modules/home/containers/home/home.component.css":
  /*!*************************************************************!*\
    !*** ./src/modules/home/containers/home/home.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesHomeContainersHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/** @format */\r\n\r\n#exit {\r\n  float: right;\r\n\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 1rem;\r\n  right: 1rem;\r\n}\r\n\r\n#add {\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: 50px;\r\n\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  bottom: 1rem;\r\n  align-self: flex-end;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL2hvbWUvY29udGFpbmVycy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxhQUFhOztBQUViO0VBQ0UsWUFBWTs7RUFFWix3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7O0VBRWhCLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJzcmMvbW9kdWxlcy9ob21lL2NvbnRhaW5lcnMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGZvcm1hdCAqL1xyXG5cclxuI2V4aXQge1xyXG4gIGZsb2F0OiByaWdodDtcclxuXHJcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAxcmVtO1xyXG4gIHJpZ2h0OiAxcmVtO1xyXG59XHJcblxyXG4jYWRkIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuXHJcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgYm90dG9tOiAxcmVtO1xyXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/modules/home/containers/home/home.component.ts":
  /*!************************************************************!*\
    !*** ./src/modules/home/containers/home/home.component.ts ***!
    \************************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcModulesHomeContainersHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
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


    var src_modules_auth_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/modules/auth/services */
    "./src/modules/auth/services/index.ts");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services */
    "./src/modules/home/services/index.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _project_components_create_project_dialog_createProjectDialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../project/components/create-project-dialog/createProjectDialog.component */
    "./src/modules/project/components/create-project-dialog/createProjectDialog.component.ts");
    /* harmony import */


    var src_modules_project_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/modules/project/services */
    "./src/modules/project/services/index.ts");
    /** @format */


    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(auth, dataService, dialog, projectService) {
        _classCallCheck(this, HomeComponent);

        this.auth = auth;
        this.dataService = dataService;
        this.dialog = dialog;
        this.projectService = projectService;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.dataService.getData$(this.auth.UserId).subscribe(function (res) {
            _this.userData = res;
          });
        }
      }, {
        key: "createProjectDialog",
        value: function createProjectDialog() {
          var _this2 = this;

          this.createProjectDialogRef = this.dialog.open(_project_components_create_project_dialog_createProjectDialog_component__WEBPACK_IMPORTED_MODULE_5__["CreateProjectDialogComponent"], {
            data: {
              task: ''
            }
          });
          this.createProjectDialogRef.afterClosed().subscribe(function (result) {
            if (result) {
              _this2.projectService.createProject$(result.task).subscribe(function () {
                _this2.dataService.getData$(_this2.auth.UserId).subscribe(function (res) {
                  _this2.userData = res;
                });
              }, function (error) {
                return alert(error.message);
              });
            }
          });
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: src_modules_auth_services__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_3__["DataService"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
      }, {
        type: src_modules_project_services__WEBPACK_IMPORTED_MODULE_6__["ProjectService"]
      }];
    };

    HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/home/containers/home/home.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./home.component.css */
      "./src/modules/home/containers/home/home.component.css"))["default"]]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/modules/home/containers/index.ts":
  /*!**********************************************!*\
    !*** ./src/modules/home/containers/index.ts ***!
    \**********************************************/

  /*! exports provided: containers, HomeComponent */

  /***/
  function srcModulesHomeContainersIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "containers", function () {
      return containers;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/modules/home/containers/home/home.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"];
    });

    var containers = [_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]];
    /***/
  },

  /***/
  "./src/modules/home/guards/home.guard.ts":
  /*!***********************************************!*\
    !*** ./src/modules/home/guards/home.guard.ts ***!
    \***********************************************/

  /*! exports provided: HomeGuard */

  /***/
  function srcModulesHomeGuardsHomeGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeGuard", function () {
      return HomeGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HomeGuard = /*#__PURE__*/function () {
      function HomeGuard() {
        _classCallCheck(this, HomeGuard);
      }

      _createClass(HomeGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          return true;
        }
      }]);

      return HomeGuard;
    }();

    HomeGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], HomeGuard);
    /***/
  },

  /***/
  "./src/modules/home/guards/index.ts":
  /*!******************************************!*\
    !*** ./src/modules/home/guards/index.ts ***!
    \******************************************/

  /*! exports provided: guards, HomeGuard */

  /***/
  function srcModulesHomeGuardsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "guards", function () {
      return guards;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _home_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./home.guard */
    "./src/modules/home/guards/home.guard.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HomeGuard", function () {
      return _home_guard__WEBPACK_IMPORTED_MODULE_1__["HomeGuard"];
    });

    var guards = [_home_guard__WEBPACK_IMPORTED_MODULE_1__["HomeGuard"]];
    /***/
  },

  /***/
  "./src/modules/home/home-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/modules/home/home-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: ROUTES, HomeRoutingModule */

  /***/
  function srcModulesHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ROUTES", function () {
      return ROUTES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function () {
      return HomeRoutingModule;
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


    var _home_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home.module */
    "./src/modules/home/home.module.ts");
    /* harmony import */


    var _containers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./containers */
    "./src/modules/home/containers/index.ts");
    /** @format */


    var ROUTES = [{
      path: 'home',
      canActivate: [],
      component: _containers__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] // resolve: {
      //   dataResolver: DataResolve
      // }

    }];

    var HomeRoutingModule = function HomeRoutingModule() {
      _classCallCheck(this, HomeRoutingModule);
    };

    HomeRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_home_module__WEBPACK_IMPORTED_MODULE_3__["HomeModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HomeRoutingModule);
    /***/
  },

  /***/
  "./src/modules/home/home.module.ts":
  /*!*****************************************!*\
    !*** ./src/modules/home/home.module.ts ***!
    \*****************************************/

  /*! exports provided: HomeModule */

  /***/
  function srcModulesHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
      return HomeModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components */
    "./src/modules/home/components/index.ts");
    /* harmony import */


    var _containers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./containers */
    "./src/modules/home/containers/index.ts");
    /* harmony import */


    var _guards__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./guards */
    "./src/modules/home/guards/index.ts");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./services */
    "./src/modules/home/services/index.ts");
    /* harmony import */


    var _project_project_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../project/project.module */
    "./src/modules/project/project.module.ts");
    /* harmony import */


    var src_app_app_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/app.module */
    "./src/app/app.module.ts");
    /** @format */


    var HomeModule = function HomeModule() {
      _classCallCheck(this, HomeModule);
    };

    HomeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _project_project_module__WEBPACK_IMPORTED_MODULE_9__["ProjectModule"], src_app_app_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"]],
      providers: [].concat(_toConsumableArray(_services__WEBPACK_IMPORTED_MODULE_8__["services"]), _toConsumableArray(_guards__WEBPACK_IMPORTED_MODULE_7__["guards"])),
      declarations: [].concat(_toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_6__["containers"]), _toConsumableArray(_components__WEBPACK_IMPORTED_MODULE_5__["components"])),
      exports: [].concat(_toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_6__["containers"]), _toConsumableArray(_components__WEBPACK_IMPORTED_MODULE_5__["components"]))
    })], HomeModule);
    /***/
  },

  /***/
  "./src/modules/home/services/data.resolve.ts":
  /*!***************************************************!*\
    !*** ./src/modules/home/services/data.resolve.ts ***!
    \***************************************************/

  /*! exports provided: DataResolve */

  /***/
  function srcModulesHomeServicesDataResolveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataResolve", function () {
      return DataResolve;
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


    var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! . */
    "./src/modules/home/services/index.ts");
    /* harmony import */


    var src_modules_auth_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/modules/auth/services */
    "./src/modules/auth/services/index.ts");
    /** @format */


    var DataResolve = /*#__PURE__*/function () {
      function DataResolve(dataService, auth) {
        _classCallCheck(this, DataResolve);

        this.dataService = dataService;
        this.auth = auth;
      }

      _createClass(DataResolve, [{
        key: "resolve",
        value: function resolve(route) {
          return this.dataService.getData$(this.auth.UserId);
        }
      }]);

      return DataResolve;
    }();

    DataResolve.ctorParameters = function () {
      return [{
        type: ___WEBPACK_IMPORTED_MODULE_2__["DataService"]
      }, {
        type: src_modules_auth_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    DataResolve = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], DataResolve);
    /***/
  },

  /***/
  "./src/modules/home/services/data.service.ts":
  /*!***************************************************!*\
    !*** ./src/modules/home/services/data.service.ts ***!
    \***************************************************/

  /*! exports provided: DataService */

  /***/
  function srcModulesHomeServicesDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
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


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var src_modules_auth_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/modules/auth/services */
    "./src/modules/auth/services/index.ts");
    /** @format */


    var DataService = /*#__PURE__*/function () {
      function DataService(http, auth) {
        _classCallCheck(this, DataService);

        this.http = http;
        this.auth = auth;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'data';
        this.userId = auth.UserId;
      }

      _createClass(DataService, [{
        key: "getData$",
        value: function getData$() {
          var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.userId;
          return this.http.get("".concat(this.baseUrl, "/").concat(id, "/getData"), {
            responseType: 'json'
          });
        }
      }]);

      return DataService;
    }();

    DataService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: src_modules_auth_services__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };

    DataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], DataService);
    /***/
  },

  /***/
  "./src/modules/home/services/index.ts":
  /*!********************************************!*\
    !*** ./src/modules/home/services/index.ts ***!
    \********************************************/

  /*! exports provided: services, DataService */

  /***/
  function srcModulesHomeServicesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "services", function () {
      return services;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./data.service */
    "./src/modules/home/services/data.service.ts");
    /* harmony import */


    var _data_resolve__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./data.resolve */
    "./src/modules/home/services/data.resolve.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"];
    });
    /** @format */


    var services = [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _data_resolve__WEBPACK_IMPORTED_MODULE_2__["DataResolve"]];
    /***/
  },

  /***/
  "./src/modules/project/components/create-project-dialog/createProjecrDialog.component.css":
  /*!************************************************************************************************!*\
    !*** ./src/modules/project/components/create-project-dialog/createProjecrDialog.component.css ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesProjectComponentsCreateProjectDialogCreateProjecrDialogComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9wcm9qZWN0L2NvbXBvbmVudHMvY3JlYXRlLXByb2plY3QtZGlhbG9nL2NyZWF0ZVByb2plY3JEaWFsb2cuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/modules/project/components/create-project-dialog/createProjectDialog.component.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/modules/project/components/create-project-dialog/createProjectDialog.component.ts ***!
    \***********************************************************************************************/

  /*! exports provided: CreateProjectDialogComponent */

  /***/
  function srcModulesProjectComponentsCreateProjectDialogCreateProjectDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateProjectDialogComponent", function () {
      return CreateProjectDialogComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /** @format */


    var CreateProjectDialogComponent = /*#__PURE__*/function () {
      function CreateProjectDialogComponent(formBuilder, dialogRef, data) {
        _classCallCheck(this, CreateProjectDialogComponent);

        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
      }

      _createClass(CreateProjectDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = this.formBuilder.group({
            task: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "submit",
        value: function submit(form) {
          this.dialogRef.close(form.value);
        }
      }]);

      return CreateProjectDialogComponent;
    }();

    CreateProjectDialogComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    CreateProjectDialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-createProjecrDialog',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./createProjecrDialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/project/components/create-project-dialog/createProjecrDialog.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./createProjecrDialog.component.css */
      "./src/modules/project/components/create-project-dialog/createProjecrDialog.component.css"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))], CreateProjectDialogComponent);
    /***/
  },

  /***/
  "./src/modules/project/components/create-task-dialog/createTaskDialog.component.css":
  /*!******************************************************************************************!*\
    !*** ./src/modules/project/components/create-task-dialog/createTaskDialog.component.css ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesProjectComponentsCreateTaskDialogCreateTaskDialogComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9wcm9qZWN0L2NvbXBvbmVudHMvY3JlYXRlLXRhc2stZGlhbG9nL2NyZWF0ZVRhc2tEaWFsb2cuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/modules/project/components/create-task-dialog/createTaskDialog.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/modules/project/components/create-task-dialog/createTaskDialog.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: CreateTaskDialogComponent */

  /***/
  function srcModulesProjectComponentsCreateTaskDialogCreateTaskDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateTaskDialogComponent", function () {
      return CreateTaskDialogComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /** @format */


    var CreateTaskDialogComponent = /*#__PURE__*/function () {
      function CreateTaskDialogComponent(formBuilder, dialogRef, data) {
        _classCallCheck(this, CreateTaskDialogComponent);

        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
      }

      _createClass(CreateTaskDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = this.formBuilder.group({
            task: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            deadline: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            priority: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "submit",
        value: function submit(form) {
          this.dialogRef.close(form.value);
        }
      }]);

      return CreateTaskDialogComponent;
    }();

    CreateTaskDialogComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    CreateTaskDialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-createTaskDialog',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./createTaskDialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/project/components/create-task-dialog/createTaskDialog.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./createTaskDialog.component.css */
      "./src/modules/project/components/create-task-dialog/createTaskDialog.component.css"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))], CreateTaskDialogComponent);
    /***/
  },

  /***/
  "./src/modules/project/components/index.ts":
  /*!*************************************************!*\
    !*** ./src/modules/project/components/index.ts ***!
    \*************************************************/

  /*! exports provided: components, UpdateTaskDialogComponent, CreateTaskDialogComponent, UpdateProjectDialogComponent, CreateProjectDialogComponent */

  /***/
  function srcModulesProjectComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "components", function () {
      return components;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _update_task_dialog_updateTaskDialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./update-task-dialog/updateTaskDialog.component */
    "./src/modules/project/components/update-task-dialog/updateTaskDialog.component.ts");
    /* harmony import */


    var _create_task_dialog_createTaskDialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./create-task-dialog/createTaskDialog.component */
    "./src/modules/project/components/create-task-dialog/createTaskDialog.component.ts");
    /* harmony import */


    var _update_project_dialog_updateProjectDialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./update-project-dialog/updateProjectDialog.component */
    "./src/modules/project/components/update-project-dialog/updateProjectDialog.component.ts");
    /* harmony import */


    var _create_project_dialog_createProjectDialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./create-project-dialog/createProjectDialog.component */
    "./src/modules/project/components/create-project-dialog/createProjectDialog.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UpdateTaskDialogComponent", function () {
      return _update_task_dialog_updateTaskDialog_component__WEBPACK_IMPORTED_MODULE_1__["UpdateTaskDialogComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CreateTaskDialogComponent", function () {
      return _create_task_dialog_createTaskDialog_component__WEBPACK_IMPORTED_MODULE_2__["CreateTaskDialogComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UpdateProjectDialogComponent", function () {
      return _update_project_dialog_updateProjectDialog_component__WEBPACK_IMPORTED_MODULE_3__["UpdateProjectDialogComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CreateProjectDialogComponent", function () {
      return _create_project_dialog_createProjectDialog_component__WEBPACK_IMPORTED_MODULE_4__["CreateProjectDialogComponent"];
    });
    /** @format */


    var components = [_update_task_dialog_updateTaskDialog_component__WEBPACK_IMPORTED_MODULE_1__["UpdateTaskDialogComponent"], _update_project_dialog_updateProjectDialog_component__WEBPACK_IMPORTED_MODULE_3__["UpdateProjectDialogComponent"], _create_task_dialog_createTaskDialog_component__WEBPACK_IMPORTED_MODULE_2__["CreateTaskDialogComponent"], _create_project_dialog_createProjectDialog_component__WEBPACK_IMPORTED_MODULE_4__["CreateProjectDialogComponent"]];
    /***/
  },

  /***/
  "./src/modules/project/components/update-project-dialog/updateProjectDialog.component.css":
  /*!************************************************************************************************!*\
    !*** ./src/modules/project/components/update-project-dialog/updateProjectDialog.component.css ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesProjectComponentsUpdateProjectDialogUpdateProjectDialogComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9wcm9qZWN0L2NvbXBvbmVudHMvdXBkYXRlLXByb2plY3QtZGlhbG9nL3VwZGF0ZVByb2plY3REaWFsb2cuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/modules/project/components/update-project-dialog/updateProjectDialog.component.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/modules/project/components/update-project-dialog/updateProjectDialog.component.ts ***!
    \***********************************************************************************************/

  /*! exports provided: UpdateProjectDialogComponent */

  /***/
  function srcModulesProjectComponentsUpdateProjectDialogUpdateProjectDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateProjectDialogComponent", function () {
      return UpdateProjectDialogComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /** @format */


    var UpdateProjectDialogComponent = /*#__PURE__*/function () {
      function UpdateProjectDialogComponent(formBuilder, dialogRef, data) {
        _classCallCheck(this, UpdateProjectDialogComponent);

        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
      }

      _createClass(UpdateProjectDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = this.formBuilder.group({
            task: [this.data.task, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "submit",
        value: function submit(form) {
          this.dialogRef.close(form.value);
        }
      }]);

      return UpdateProjectDialogComponent;
    }();

    UpdateProjectDialogComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    UpdateProjectDialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-updateProjectDialog',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./updateProjectDialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/project/components/update-project-dialog/updateProjectDialog.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./updateProjectDialog.component.css */
      "./src/modules/project/components/update-project-dialog/updateProjectDialog.component.css"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))], UpdateProjectDialogComponent);
    /***/
  },

  /***/
  "./src/modules/project/components/update-task-dialog/updateTaskDialog.component.css":
  /*!******************************************************************************************!*\
    !*** ./src/modules/project/components/update-task-dialog/updateTaskDialog.component.css ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesProjectComponentsUpdateTaskDialogUpdateTaskDialogComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9wcm9qZWN0L2NvbXBvbmVudHMvdXBkYXRlLXRhc2stZGlhbG9nL3VwZGF0ZVRhc2tEaWFsb2cuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/modules/project/components/update-task-dialog/updateTaskDialog.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/modules/project/components/update-task-dialog/updateTaskDialog.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: UpdateTaskDialogComponent */

  /***/
  function srcModulesProjectComponentsUpdateTaskDialogUpdateTaskDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateTaskDialogComponent", function () {
      return UpdateTaskDialogComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /** @format */


    var UpdateTaskDialogComponent = /*#__PURE__*/function () {
      function UpdateTaskDialogComponent(formBuilder, dialogRef, data) {
        _classCallCheck(this, UpdateTaskDialogComponent);

        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
      }

      _createClass(UpdateTaskDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = this.formBuilder.group({
            task: [this.data.task, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            deadline: [this.data.deadline, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "submit",
        value: function submit(form) {
          this.dialogRef.close(form.value);
        }
      }]);

      return UpdateTaskDialogComponent;
    }();

    UpdateTaskDialogComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    UpdateTaskDialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-updateTaskDialog',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./updateTaskDialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/project/components/update-task-dialog/updateTaskDialog.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./updateTaskDialog.component.css */
      "./src/modules/project/components/update-task-dialog/updateTaskDialog.component.css"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))], UpdateTaskDialogComponent);
    /***/
  },

  /***/
  "./src/modules/project/containers/index.ts":
  /*!*************************************************!*\
    !*** ./src/modules/project/containers/index.ts ***!
    \*************************************************/

  /*! exports provided: containers, ProjectComponent */

  /***/
  function srcModulesProjectContainersIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "containers", function () {
      return containers;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _project_project_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./project/project.component */
    "./src/modules/project/containers/project/project.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ProjectComponent", function () {
      return _project_project_component__WEBPACK_IMPORTED_MODULE_1__["ProjectComponent"];
    });

    var containers = [_project_project_component__WEBPACK_IMPORTED_MODULE_1__["ProjectComponent"]];
    /***/
  },

  /***/
  "./src/modules/project/containers/project/project.component.css":
  /*!**********************************************************************!*\
    !*** ./src/modules/project/containers/project/project.component.css ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesProjectContainersProjectProjectComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/** @format */\r\n\r\n.container {\r\n  align-items: flex-start;\r\n}\r\n\r\n.no-data {\r\n  background: url('no-data.jpeg') no-repeat center center;\r\n  height: 500px;\r\n  width: auto;\r\n}\r\n\r\ncard-container {\r\n  position: relative;\r\n}\r\n\r\n.card-header button {\r\n  float: right;\r\n}\r\n\r\n#add {\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: 50px;\r\n\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  bottom: 1rem;\r\n  align-self: flex-end;\r\n}\r\n\r\n/*  */\r\n\r\n.done {\r\n  background: -webkit-linear-gradient(top, rgb(255, 255, 255) 1%, rgb(183, 230, 193) 99%);\r\n}\r\n\r\n.expired {\r\n  background: -webkit-linear-gradient(top, rgb(255, 255, 255) 1%, rgb(253, 0, 0) 99%);\r\n}\r\n\r\ntable {\r\n  width: 100%;\r\n}\r\n\r\n.card-size {\r\n  width: 100%;\r\n  margin-top: 50px;\r\n}\r\n\r\ntd.mat-cell {\r\n  padding: 20px 0;\r\n  border: none;\r\n}\r\n\r\n.mat-column-name {\r\n  word-wrap: break-word !important;\r\n  white-space: unset !important;\r\n  flex: 0 0 60% !important;\r\n  width: 60% !important;\r\n  overflow-wrap: break-word;\r\n  word-wrap: break-word;\r\n\r\n  word-break: break-word;\r\n\r\n  -ms-hyphens: auto;\r\n  -webkit-hyphens: auto;\r\n  hyphens: auto;\r\n}\r\n\r\n.mat-column-position {\r\n  word-wrap: break-word !important;\r\n  white-space: unset !important;\r\n  flex: 0 0 7% !important;\r\n  width: 7% !important;\r\n  overflow-wrap: break-word;\r\n  word-wrap: break-word;\r\n\r\n  word-break: break-word;\r\n\r\n  -ms-hyphens: auto;\r\n  -webkit-hyphens: auto;\r\n  hyphens: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL3Byb2plY3QvY29udGFpbmVycy9wcm9qZWN0L3Byb2plY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxhQUFhOztBQUViO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdURBQXdFO0VBQ3hFLGFBQWE7RUFDYixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7O0VBRWhCLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLG9CQUFvQjtBQUN0Qjs7QUFFQSxLQUFLOztBQUVMO0VBQ0UsdUZBQXVGO0FBQ3pGOztBQUVBO0VBQ0UsbUZBQW1GO0FBQ3JGOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsNkJBQTZCO0VBQzdCLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLHFCQUFxQjs7RUFFckIsc0JBQXNCOztFQUV0QixpQkFBaUI7RUFFakIscUJBQXFCO0VBQ3JCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyw2QkFBNkI7RUFDN0IsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIscUJBQXFCOztFQUVyQixzQkFBc0I7O0VBRXRCLGlCQUFpQjtFQUVqQixxQkFBcUI7RUFDckIsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9tb2R1bGVzL3Byb2plY3QvY29udGFpbmVycy9wcm9qZWN0L3Byb2plY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAZm9ybWF0ICovXHJcblxyXG4uY29udGFpbmVyIHtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxufVxyXG5cclxuLm5vLWRhdGEge1xyXG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvbm8tZGF0YS5qcGVnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcclxuICBoZWlnaHQ6IDUwMHB4O1xyXG4gIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG5jYXJkLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXIgYnV0dG9uIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbiNhZGQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG5cclxuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICBib3R0b206IDFyZW07XHJcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi8qICAqL1xyXG5cclxuLmRvbmUge1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiKDI1NSwgMjU1LCAyNTUpIDElLCByZ2IoMTgzLCAyMzAsIDE5MykgOTklKTtcclxufVxyXG5cclxuLmV4cGlyZWQge1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiKDI1NSwgMjU1LCAyNTUpIDElLCByZ2IoMjUzLCAwLCAwKSA5OSUpO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jYXJkLXNpemUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuXHJcbnRkLm1hdC1jZWxsIHtcclxuICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1uYW1lIHtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcclxuICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcclxuICBmbGV4OiAwIDAgNjAlICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDYwJSAhaW1wb3J0YW50O1xyXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG5cclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG5cclxuICAtbXMtaHlwaGVuczogYXV0bztcclxuICAtbW96LWh5cGhlbnM6IGF1dG87XHJcbiAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xyXG4gIGh5cGhlbnM6IGF1dG87XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLXBvc2l0aW9uIHtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcclxuICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcclxuICBmbGV4OiAwIDAgNyUgIWltcG9ydGFudDtcclxuICB3aWR0aDogNyUgIWltcG9ydGFudDtcclxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuXHJcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuXHJcbiAgLW1zLWh5cGhlbnM6IGF1dG87XHJcbiAgLW1vei1oeXBoZW5zOiBhdXRvO1xyXG4gIC13ZWJraXQtaHlwaGVuczogYXV0bztcclxuICBoeXBoZW5zOiBhdXRvO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/modules/project/containers/project/project.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/modules/project/containers/project/project.component.ts ***!
    \*********************************************************************/

  /*! exports provided: ProjectComponent */

  /***/
  function srcModulesProjectContainersProjectProjectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectComponent", function () {
      return ProjectComponent;
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


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _components_update_task_dialog_updateTaskDialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../components/update-task-dialog/updateTaskDialog.component */
    "./src/modules/project/components/update-task-dialog/updateTaskDialog.component.ts");
    /* harmony import */


    var _models_task_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../models/task.models */
    "./src/modules/project/models/task.models.ts");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../services */
    "./src/modules/project/services/index.ts");
    /* harmony import */


    var src_modules_home_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/modules/home/services */
    "./src/modules/home/services/index.ts");
    /* harmony import */


    var _components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../components */
    "./src/modules/project/components/index.ts");
    /** @format */


    var ProjectComponent = /*#__PURE__*/function () {
      //#endregion
      function ProjectComponent(dialog, taskService, projectService, dataService) {
        _classCallCheck(this, ProjectComponent);

        this.dialog = dialog;
        this.taskService = taskService;
        this.projectService = projectService;
        this.dataService = dataService;
        this.displayedColumns = ['state', 'priority', 'name', 'deadline', 'status', 'update', 'remove'];
      }

      _createClass(ProjectComponent, [{
        key: "ngDoCheck",
        value: function ngDoCheck() {
          var _this3 = this;

          var _a, _b;

          if ((_b = (_a = this.dataSource) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.length) {
            var _this$dataSource$data = _slicedToArray(this.dataSource.data, 1),
                checkingTask = _this$dataSource$data[0];

            if (new Date(checkingTask.deadline).getTime() < new Date().getTime() && checkingTask.status === _models_task_models__WEBPACK_IMPORTED_MODULE_6__["Status"].Onway) this.taskService.updateStatus$(checkingTask.id, _models_task_models__WEBPACK_IMPORTED_MODULE_6__["Status"].Expired).subscribe(function () {
              return _this3._updateTableData();
            }, function (error) {
              return console.error(error.message);
            });
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.data.tasks);
          this.dataSource.sort = this.sort;
          this.projectId = this.data.projectId;
          this.projectName = this.data.projectName;
        }
      }, {
        key: "updateTaskDialog",
        value: function updateTaskDialog(transfer) {
          var _this4 = this;

          this.updateTaskDialogRef = this.dialog.open(_components_update_task_dialog_updateTaskDialog_component__WEBPACK_IMPORTED_MODULE_5__["UpdateTaskDialogComponent"], {
            data: {
              task: transfer.name,
              deadline: transfer.deadline
            }
          });
          this.updateTaskDialogRef.afterClosed().subscribe(function (result) {
            if (transfer) {
              _this4.taskService.updateTask$(transfer.id, result.task, result.deadline).subscribe(function () {
                _this4._updateTableData();
              }, function (error) {
                return console.error(error.message);
              });
            }
          });
        }
      }, {
        key: "updateProjectDialog",
        value: function updateProjectDialog() {
          var _this5 = this;

          this.updateProjectDialogRef = this.dialog.open(_components__WEBPACK_IMPORTED_MODULE_10__["UpdateProjectDialogComponent"], {
            data: {
              task: this.projectName
            }
          });
          this.updateProjectDialogRef.afterClosed().subscribe(function (result) {
            _this5.projectService.updateProject$(_this5.projectId, result.task).subscribe(function () {
              _this5.projectName = result.task;
            }, function (error) {
              return console.error(error.message);
            });
          });
        }
      }, {
        key: "createTaskDialog",
        value: function createTaskDialog() {
          var _this6 = this;

          this.createTaskDialogRef = this.dialog.open(_components__WEBPACK_IMPORTED_MODULE_10__["CreateTaskDialogComponent"], {
            data: {
              task: '',
              deadline: '',
              priority: ''
            }
          });
          this.createTaskDialogRef.afterClosed().subscribe(function (result) {
            if (result) {
              var val = result;

              _this6.taskService.createTask$(_this6.projectId, result.task, result.deadline, result.priority).subscribe(function () {
                _this6._updateTableData();
              }, function (error) {
                return console.error(error.message);
              });
            }
          });
        }
      }, {
        key: "dropTable",
        value: function dropTable(event) {
          var prevIndex = this.data.tasks.findIndex(function (d) {
            return d === event.item.data;
          });
          Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["moveItemInArray"])(this.data.tasks, prevIndex, event.currentIndex);

          for (var index = 0; index < this.dataSource.filteredData.length; index++) {
            this.data.tasks[index].priority = index;
          }

          this.dataSource.data = this.data.tasks;
          this.taskService.updatePrioraty$(this.data.tasks).subscribe(function () {}, function (error) {
            return console.error(error.message);
          });
        }
      }, {
        key: "setDone",
        value: function setDone(element) {
          var _this7 = this;

          this.taskService.updateStatus$(element.id, _models_task_models__WEBPACK_IMPORTED_MODULE_6__["Status"].Done).subscribe(function () {
            _this7._updateTableData();
          }, function (error) {
            return console.error(error.message);
          });
        }
      }, {
        key: "removeTask",
        value: function removeTask(id) {
          var _this8 = this;

          this.taskService.removeTask$(id).subscribe(function () {
            _this8._updateTableData();
          }, function (error) {
            return console.error(error.message);
          });
        }
      }, {
        key: "removeProject",
        value: function removeProject() {
          var _this9 = this;

          this.projectService.removeProject$(this.projectId).subscribe(function () {
            _this9.deleted = !_this9.deleted;
          }, function (error) {
            return console.error(error.message);
          });
        }
      }, {
        key: "_updateTableData",
        value: function _updateTableData() {
          var _this10 = this;

          this.dataService.getData$().subscribe(function (res) {
            _this10.data.tasks = res.find(function (x) {
              return x.projectId === _this10.projectId;
            }).tasks;
            _this10.dataSource.data = _this10.data.tasks;
          }, function (error) {
            return console.error(error.message);
          });
        }
      }]);

      return ProjectComponent;
    }();

    ProjectComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_8__["TaskService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_8__["ProjectService"]
      }, {
        type: src_modules_home_services__WEBPACK_IMPORTED_MODULE_9__["DataService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], {
      "static": true
    })], ProjectComponent.prototype, "sort", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ProjectComponent.prototype, "data", void 0);
    ProjectComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-project',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./project.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/project/containers/project/project.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./project.component.css */
      "./src/modules/project/containers/project/project.component.css"))["default"]]
    })], ProjectComponent);
    /***/
  },

  /***/
  "./src/modules/project/guards/index.ts":
  /*!*********************************************!*\
    !*** ./src/modules/project/guards/index.ts ***!
    \*********************************************/

  /*! exports provided: guards, ProjectGuard */

  /***/
  function srcModulesProjectGuardsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "guards", function () {
      return guards;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _project_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./project.guard */
    "./src/modules/project/guards/project.guard.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ProjectGuard", function () {
      return _project_guard__WEBPACK_IMPORTED_MODULE_1__["ProjectGuard"];
    });

    var guards = [_project_guard__WEBPACK_IMPORTED_MODULE_1__["ProjectGuard"]];
    /***/
  },

  /***/
  "./src/modules/project/guards/project.guard.ts":
  /*!*****************************************************!*\
    !*** ./src/modules/project/guards/project.guard.ts ***!
    \*****************************************************/

  /*! exports provided: ProjectGuard */

  /***/
  function srcModulesProjectGuardsProjectGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectGuard", function () {
      return ProjectGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ProjectGuard = /*#__PURE__*/function () {
      function ProjectGuard() {
        _classCallCheck(this, ProjectGuard);
      }

      _createClass(ProjectGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          return true;
        }
      }]);

      return ProjectGuard;
    }();

    ProjectGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ProjectGuard);
    /***/
  },

  /***/
  "./src/modules/project/models/task.models.ts":
  /*!***************************************************!*\
    !*** ./src/modules/project/models/task.models.ts ***!
    \***************************************************/

  /*! exports provided: Status */

  /***/
  function srcModulesProjectModelsTaskModelsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Status", function () {
      return Status;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /** @format */


    var Status;

    (function (Status) {
      Status[Status["Done"] = 0] = "Done";
      Status[Status["Expired"] = 1] = "Expired";
      Status[Status["Onway"] = 2] = "Onway";
    })(Status || (Status = {}));
    /***/

  },

  /***/
  "./src/modules/project/project.module.ts":
  /*!***********************************************!*\
    !*** ./src/modules/project/project.module.ts ***!
    \***********************************************/

  /*! exports provided: ProjectModule */

  /***/
  function srcModulesProjectProjectModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectModule", function () {
      return ProjectModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components */
    "./src/modules/project/components/index.ts");
    /* harmony import */


    var _containers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./containers */
    "./src/modules/project/containers/index.ts");
    /* harmony import */


    var _guards__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./guards */
    "./src/modules/project/guards/index.ts");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./services */
    "./src/modules/project/services/index.ts");
    /* harmony import */


    var src_app_app_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/app.module */
    "./src/app/app.module.ts");
    /**
     * /* tslint:disable: ordered-imports
     *
     * @format
     */


    var ProjectModule = function ProjectModule() {
      _classCallCheck(this, ProjectModule);
    };

    ProjectModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], src_app_app_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"]],
      providers: [].concat(_toConsumableArray(_services__WEBPACK_IMPORTED_MODULE_8__["pipes"]), _toConsumableArray(_services__WEBPACK_IMPORTED_MODULE_8__["services"]), _toConsumableArray(_guards__WEBPACK_IMPORTED_MODULE_7__["guards"])),
      declarations: [].concat(_toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_6__["containers"]), _toConsumableArray(_components__WEBPACK_IMPORTED_MODULE_5__["components"]), _toConsumableArray(_services__WEBPACK_IMPORTED_MODULE_8__["pipes"])),
      exports: [].concat(_toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_6__["containers"]), _toConsumableArray(_components__WEBPACK_IMPORTED_MODULE_5__["components"])),
      entryComponents: _toConsumableArray(_components__WEBPACK_IMPORTED_MODULE_5__["components"])
    })], ProjectModule);
    /***/
  },

  /***/
  "./src/modules/project/services/index.ts":
  /*!***********************************************!*\
    !*** ./src/modules/project/services/index.ts ***!
    \***********************************************/

  /*! exports provided: pipes, services, StatusPipe, ProjectService, TaskService */

  /***/
  function srcModulesProjectServicesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "pipes", function () {
      return pipes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "services", function () {
      return services;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _pipe_status_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./pipe/status.pipe */
    "./src/modules/project/services/pipe/status.pipe.ts");
    /* harmony import */


    var _project_service_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./project-service/project.service */
    "./src/modules/project/services/project-service/project.service.ts");
    /* harmony import */


    var _task_service_task_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./task-service/task.service */
    "./src/modules/project/services/task-service/task.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "StatusPipe", function () {
      return _pipe_status_pipe__WEBPACK_IMPORTED_MODULE_1__["StatusPipe"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ProjectService", function () {
      return _project_service_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TaskService", function () {
      return _task_service_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"];
    });
    /** @format */


    var pipes = [_pipe_status_pipe__WEBPACK_IMPORTED_MODULE_1__["StatusPipe"]];
    var services = [_project_service_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"], _task_service_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"]]; // export * from './task.resolve';

    /***/
  },

  /***/
  "./src/modules/project/services/pipe/status.pipe.ts":
  /*!**********************************************************!*\
    !*** ./src/modules/project/services/pipe/status.pipe.ts ***!
    \**********************************************************/

  /*! exports provided: StatusPipe */

  /***/
  function srcModulesProjectServicesPipeStatusPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StatusPipe", function () {
      return StatusPipe;
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


    var _models_task_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../models/task.models */
    "./src/modules/project/models/task.models.ts");
    /** @format */


    var StatusPipe = /*#__PURE__*/function () {
      function StatusPipe() {
        _classCallCheck(this, StatusPipe);
      }

      _createClass(StatusPipe, [{
        key: "transform",
        value: function transform(value) {
          var result = _models_task_models__WEBPACK_IMPORTED_MODULE_2__["Status"][value];
          return result;
        }
      }]);

      return StatusPipe;
    }();

    StatusPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'Status'
    })], StatusPipe);
    /***/
  },

  /***/
  "./src/modules/project/services/project-service/project.service.ts":
  /*!*************************************************************************!*\
    !*** ./src/modules/project/services/project-service/project.service.ts ***!
    \*************************************************************************/

  /*! exports provided: ProjectService */

  /***/
  function srcModulesProjectServicesProjectServiceProjectServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectService", function () {
      return ProjectService;
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


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var src_modules_auth_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/modules/auth/services */
    "./src/modules/auth/services/index.ts");
    /** @format */


    var ProjectService = /*#__PURE__*/function () {
      function ProjectService(http, auth) {
        _classCallCheck(this, ProjectService);

        this.http = http;
        this.auth = auth;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'project';
      }

      _createClass(ProjectService, [{
        key: "removeProject$",
        value: function removeProject$(id) {
          return this.http["delete"]("".concat(this.baseUrl, "/").concat(this.auth.UserId, "/remove/").concat(id), {
            responseType: 'json'
          });
        }
      }, {
        key: "updateProject$",
        value: function updateProject$(id, name) {
          return this.http.put("".concat(this.baseUrl, "/").concat(this.auth.UserId, "/update"), {
            id: id,
            name: name
          }, {
            responseType: 'json'
          });
        }
      }, {
        key: "createProject$",
        value: function createProject$(name) {
          return this.http.post("".concat(this.baseUrl, "/").concat(this.auth.UserId, "/create"), {
            name: name
          }, {
            responseType: 'json'
          });
        }
      }]);

      return ProjectService;
    }();

    ProjectService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: src_modules_auth_services__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };

    ProjectService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ProjectService);
    /***/
  },

  /***/
  "./src/modules/project/services/task-service/task.service.ts":
  /*!*******************************************************************!*\
    !*** ./src/modules/project/services/task-service/task.service.ts ***!
    \*******************************************************************/

  /*! exports provided: TaskService */

  /***/
  function srcModulesProjectServicesTaskServiceTaskServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskService", function () {
      return TaskService;
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


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");
    /** @format */


    var TaskService = /*#__PURE__*/function () {
      function TaskService(http) {
        _classCallCheck(this, TaskService);

        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'task';
        this.userId = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]().decodeToken(localStorage.getItem('token')).nameid;
      }

      _createClass(TaskService, [{
        key: "createTask$",
        value: function createTask$(projectId, name, deadline, priority) {
          return this.http.post("".concat(this.baseUrl, "/").concat(this.userId, "/create/").concat(projectId), {
            name: name,
            deadline: deadline,
            priority: priority
          }, {
            responseType: 'json'
          });
        }
      }, {
        key: "updateTask$",
        value: function updateTask$(id, name, deadline) {
          return this.http.put("".concat(this.baseUrl, "/").concat(this.userId, "/update"), {
            id: id,
            name: name,
            deadline: deadline
          }, {
            responseType: 'json'
          });
        }
      }, {
        key: "updateStatus$",
        value: function updateStatus$(id, status) {
          return this.http.put("".concat(this.baseUrl, "/").concat(this.userId, "/updateStatus"), {
            id: id,
            status: status
          }, {
            responseType: 'json'
          });
        }
      }, {
        key: "updatePrioraty$",
        value: function updatePrioraty$(tasks) {
          return this.http.put("".concat(this.baseUrl, "/").concat(this.userId, "/updatePrioraty"), {
            tasks: tasks
          }, {
            responseType: 'json'
          });
        }
      }, {
        key: "removeTask$",
        value: function removeTask$(id) {
          return this.http["delete"]("".concat(this.baseUrl, "/").concat(this.userId, "/remove/").concat(id), {
            responseType: 'json'
          });
        }
      }]);

      return TaskService;
    }();

    TaskService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    TaskService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], TaskService);
    /***/
  }
}]);
//# sourceMappingURL=modules-home-home-routing-module-es5.js.map