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


    __webpack_exports__["default"] = "<div>\n  <ngx-loading\n    [show]=\"!this.userData\"\n    [config]=\"{ fullScreenBackdrop: true }\"\n  ></ngx-loading>\n  <button\n    *ngIf=\"this.userData\"\n    id=\"exit\"\n    (click)=\"_auth.logOut()\"\n    mat-icon-button\n    color=\"warn\"\n  >\n    <mat-icon>exit_to_app</mat-icon>\n  </button>\n\n  <app-project *ngFor=\"let item of this.userData\" [data]=\"item\"></app-project>\n\n  <button\n    *ngIf=\"this.userData\"\n    id=\"add\"\n    (click)=\"createProjectDialog()\"\n    mat-fab\n    color=\"primary\"\n  >\n    <mat-icon>add</mat-icon>\n  </button>\n  <div id=\"loader\">\n    <ngx-loading [show]=\"loaded | async\" [config]=\"config\"></ngx-loading>\n  </div>\n</div>\n";
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


    __webpack_exports__["default"] = "<div *ngIf=\"!isDeleted\" class=\"container\">\n  <div class=\"row justify-content-center\">\n    <div class=\"card-size card mb-3\">\n      <div class=\"card-header\">\n        {{ projectName }}\n\n        <button (click)=\"removeProject()\" mat-icon-button color=\"primary\">\n          <mat-icon color=\"warn\">delete_outline</mat-icon>\n        </button>\n\n        <button (click)=\"updateProjectDialog()\" mat-icon-button color=\"primary\">\n          <mat-icon>create</mat-icon>\n        </button>\n      </div>\n\n      <div class=\"card-header\">\n        <button (click)=\"createTaskDialog()\" mat-icon-button color=\"primary\">\n          <mat-icon>add_box</mat-icon>\n        </button>\n      </div>\n\n      <div class=\"card-body\">\n        <div class=\"no-data\" *ngIf=\"!dataSource?.data?.length\"></div>\n\n        <table\n          *ngIf=\"dataSource?.data?.length\"\n          mat-table\n          [dataSource]=\"dataSource\"\n          matSort\n          class=\"mat-elevation-z8\"\n          cdkDropList\n          [cdkDropListData]=\"dataSource\"\n          (cdkDropListDropped)=\"dropTable($event)\"\n        >\n          <ng-container matColumnDef=\"state\">\n            <th mat-header-cell *matHeaderCellDef mat-header></th>\n            <td\n              [ngClass]=\"{\n                done: element.status == 0 ? true : false,\n                expired: element.status == 1 ? true : false\n              }\"\n              mat-cell\n              *matCellDef=\"let element\"\n            >\n              <button\n                [disabled]=\"element.status == 0 ? true : false\"\n                (click)=\"setDone(element)\"\n                mat-icon-button\n                color=\"primary\"\n              >\n                <mat-icon>check_circle_outline</mat-icon>\n              </button>\n            </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"priority\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Pr.</th>\n            <td\n              [ngClass]=\"{\n                done: element.status == 0 ? true : false,\n                expired: element.status == 1 ? true : false\n              }\"\n              cdkDragHandle\n              mat-cell\n              *matCellDef=\"let element\"\n            >\n              {{ element.priority }}\n            </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"name\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>\n            <td\n              [ngClass]=\"{\n                done: element.status == 0 ? true : false,\n                expired: element.status == 1 ? true : false\n              }\"\n              class=\"draw-border\"\n              mat-cell\n              *matCellDef=\"let element\"\n            >\n              {{ element.name }}\n            </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"deadline\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Deadline</th>\n            <td\n              [ngClass]=\"{\n                done: element.status == 0 ? true : false,\n                expired: element.status == 1 ? true : false\n              }\"\n              mat-cell\n              *matCellDef=\"let element\"\n            >\n              <u> {{ element.deadline | date: 'dd:MM:yyyy' }}</u>\n            </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"status\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Status</th>\n            <td\n              [ngClass]=\"{\n                done: element.status == 0 ? true : false,\n                expired: element.status == 1 ? true : false\n              }\"\n              mat-cell\n              *matCellDef=\"let element\"\n            >\n              {{ element.status | Status }}\n            </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"update\">\n            <th mat-header-cell *matHeaderCellDef mat-header></th>\n            <th mat-header-cell *matHeaderCellDef></th>\n            <td\n              [ngClass]=\"{\n                done: element.status == 0 ? true : false,\n                expired: element.status == 1 ? true : false\n              }\"\n              mat-cell\n              *matCellDef=\"let element\"\n            >\n              <button\n                color=\"accent\"\n                [disabled]=\"element.status == 0 ? true : false\"\n                (click)=\"updateTaskDialog(element)\"\n                mat-icon-button\n                color=\"primary\"\n              >\n                <mat-icon>ballot</mat-icon>\n              </button>\n            </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"remove\">\n            <th mat-header-cell *matHeaderCellDef mat-header></th>\n            <th mat-header-cell *matHeaderCellDef></th>\n            <td\n              [ngClass]=\"{\n                done: element.status == 0 ? true : false,\n                expired: element.status == 1 ? true : false\n              }\"\n              mat-cell\n              *matCellDef=\"let element\"\n            >\n              <button\n                (click)=\"removeTask(element.id)\"\n                color=\"accent\"\n                [disabled]=\"element.status == 0 ? false : false\"\n                (click)=\"(null)\"\n                mat-icon-button\n                color=\"primary\"\n              >\n                <mat-icon color=\"warn\">delete_outline</mat-icon>\n              </button>\n            </td>\n          </ng-container>\n\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n          <tr\n            mat-row\n            *matRowDef=\"let row; columns: displayedColumns\"\n            cdkDrag\n            [cdkDragData]=\"row\"\n          ></tr>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n";
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


    __webpack_exports__["default"] = "/** @format */\n\n#exit {\n  float: right;\n\n  position: -webkit-sticky;\n  position: sticky;\n  top: 1rem;\n  right: 1rem;\n}\n\n#add {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 50px;\n\n  position: -webkit-sticky;\n  position: sticky;\n  bottom: 1rem;\n  align-self: flex-end;\n}\n\n#loader {\n  position: fixed;\n  bottom: 5%;\n  right: 5%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL2hvbWUvY29udGFpbmVycy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxhQUFhOztBQUViO0VBQ0UsWUFBWTs7RUFFWix3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7O0VBRWhCLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixVQUFVO0VBQ1YsU0FBUztBQUNYIiwiZmlsZSI6InNyYy9tb2R1bGVzL2hvbWUvY29udGFpbmVycy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAZm9ybWF0ICovXG5cbiNleGl0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuXG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAxcmVtO1xuICByaWdodDogMXJlbTtcbn1cblxuI2FkZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuXG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgYm90dG9tOiAxcmVtO1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbn1cblxuI2xvYWRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiA1JTtcbiAgcmlnaHQ6IDUlO1xufVxuIl19 */";
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


    var ngx_loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-loading */
    "./node_modules/ngx-loading/__ivy_ngcc__/fesm2015/ngx-loading.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _project_components_create_project_dialog_createProjectDialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../project/components/create-project-dialog/createProjectDialog.component */
    "./src/modules/project/components/create-project-dialog/createProjectDialog.component.ts");
    /* harmony import */


    var src_modules_project_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/modules/project/services */
    "./src/modules/project/services/index.ts");
    /* harmony import */


    var src_app_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/services/loader.service */
    "./src/app/shared/services/loader.service.ts");
    /** @format */


    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(_auth, _dataService, _dialog, _projectService, _loaderServ) {
        _classCallCheck(this, HomeComponent);

        this._auth = _auth;
        this._dataService = _dataService;
        this._dialog = _dialog;
        this._projectService = _projectService;
        this._loaderServ = _loaderServ;
        this.fetched = false;
        this.loaded = this._loaderServ.isLoading;
        this.config = {
          animationType: ngx_loading__WEBPACK_IMPORTED_MODULE_4__["ngxLoadingAnimationTypes"].doubleBounce,
          backdropBackgroundColour: 'rgba(0, 255, 0, 0)',
          backdropBorderRadius: '8px',
          primaryColour: '#1ea',
          secondaryColour: '#f11',
          tertiaryColour: '#1ee'
        };
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this._dataService.getData$(this._auth.UserId).subscribe(function (res) {
            _this.userData = res;
          });
        }
      }, {
        key: "createProjectDialog",
        value: function createProjectDialog() {
          var _this2 = this;

          this.createProjectDialogRef = this._dialog.open(_project_components_create_project_dialog_createProjectDialog_component__WEBPACK_IMPORTED_MODULE_6__["CreateProjectDialogComponent"], {
            data: {
              task: ''
            }
          });
          this.createProjectDialogRef.afterClosed().subscribe(function (result) {
            if (result) {
              _this2._projectService.createProject$(result.task).subscribe(function () {
                _this2._dataService.getData$(_this2._auth.UserId).subscribe(function (res) {
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
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
      }, {
        type: src_modules_project_services__WEBPACK_IMPORTED_MODULE_7__["ProjectService"]
      }, {
        type: src_app_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_8__["LoaderService"]
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
    /* harmony import */


    var ngx_loading__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-loading */
    "./node_modules/ngx-loading/__ivy_ngcc__/fesm2015/ngx-loading.js");
    /** @format */


    var HomeModule = function HomeModule() {
      _classCallCheck(this, HomeModule);
    };

    HomeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _project_project_module__WEBPACK_IMPORTED_MODULE_9__["ProjectModule"], src_app_app_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"], ngx_loading__WEBPACK_IMPORTED_MODULE_11__["NgxLoadingModule"]],
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
      function DataResolve(_dataService, _auth) {
        _classCallCheck(this, DataResolve);

        this._dataService = _dataService;
        this._auth = _auth;
      }

      _createClass(DataResolve, [{
        key: "resolve",
        value: function resolve(route) {
          return this._dataService.getData$(this._auth.UserId);
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
      function DataService(_http, _auth) {
        _classCallCheck(this, DataService);

        this._http = _http;
        this._auth = _auth;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'data';
        this.userId = _auth.UserId;
      }

      _createClass(DataService, [{
        key: "getData$",
        value: function getData$() {
          var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.userId;
          return this._http.get("".concat(this.baseUrl, "/").concat(id, "/getData"), {
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


    __webpack_exports__["default"] = "/** @format */\n\n.container {\n  align-items: flex-start;\n}\n\n.no-data {\n  background: url('no-data.jpeg') no-repeat center center;\n  height: 500px;\n  width: auto;\n}\n\ncard-container {\n  position: relative;\n}\n\n.card-header button {\n  float: right;\n}\n\n#add {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 50px;\n\n  position: -webkit-sticky;\n  position: sticky;\n  bottom: 1rem;\n  align-self: flex-end;\n}\n\n/*  */\n\n.done {\n  background: -webkit-linear-gradient(top, rgb(255, 255, 255) 1%, rgb(183, 230, 193) 99%);\n}\n\n.expired {\n  background: -webkit-linear-gradient(top, rgb(255, 255, 255) 1%, rgb(253, 0, 0) 99%);\n}\n\ntable {\n  width: 100%;\n}\n\n.card-size {\n  width: 100%;\n  margin-top: 50px;\n}\n\ntd.mat-cell {\n  padding: 20px 0;\n  border: none;\n}\n\n.mat-column-name {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 60% !important;\n  width: 60% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n\n  word-break: break-word;\n\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.mat-column-position {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 7% !important;\n  width: 7% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n\n  word-break: break-word;\n\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL3Byb2plY3QvY29udGFpbmVycy9wcm9qZWN0L3Byb2plY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxhQUFhOztBQUViO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdURBQXdFO0VBQ3hFLGFBQWE7RUFDYixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7O0VBRWhCLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLG9CQUFvQjtBQUN0Qjs7QUFFQSxLQUFLOztBQUVMO0VBQ0UsdUZBQXVGO0FBQ3pGOztBQUVBO0VBQ0UsbUZBQW1GO0FBQ3JGOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsNkJBQTZCO0VBQzdCLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLHFCQUFxQjs7RUFFckIsc0JBQXNCOztFQUV0QixpQkFBaUI7RUFFakIscUJBQXFCO0VBQ3JCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyw2QkFBNkI7RUFDN0IsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIscUJBQXFCOztFQUVyQixzQkFBc0I7O0VBRXRCLGlCQUFpQjtFQUVqQixxQkFBcUI7RUFDckIsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9tb2R1bGVzL3Byb2plY3QvY29udGFpbmVycy9wcm9qZWN0L3Byb2plY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAZm9ybWF0ICovXG5cbi5jb250YWluZXIge1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLm5vLWRhdGEge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL25vLWRhdGEuanBlZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XG4gIGhlaWdodDogNTAwcHg7XG4gIHdpZHRoOiBhdXRvO1xufVxuXG5jYXJkLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNhcmQtaGVhZGVyIGJ1dHRvbiB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuI2FkZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuXG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgYm90dG9tOiAxcmVtO1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbn1cblxuLyogICovXG5cbi5kb25lIHtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCByZ2IoMjU1LCAyNTUsIDI1NSkgMSUsIHJnYigxODMsIDIzMCwgMTkzKSA5OSUpO1xufVxuXG4uZXhwaXJlZCB7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiKDI1NSwgMjU1LCAyNTUpIDElLCByZ2IoMjUzLCAwLCAwKSA5OSUpO1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2FyZC1zaXplIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbnRkLm1hdC1jZWxsIHtcbiAgcGFkZGluZzogMjBweCAwO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5tYXQtY29sdW1uLW5hbWUge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcbiAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGZsZXg6IDAgMCA2MCUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDYwJSAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG5cbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcblxuICAtbXMtaHlwaGVuczogYXV0bztcbiAgLW1vei1oeXBoZW5zOiBhdXRvO1xuICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XG4gIGh5cGhlbnM6IGF1dG87XG59XG5cbi5tYXQtY29sdW1uLXBvc2l0aW9uIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XG4gIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xuICBmbGV4OiAwIDAgNyUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDclICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcblxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuXG4gIC1tcy1oeXBoZW5zOiBhdXRvO1xuICAtbW96LWh5cGhlbnM6IGF1dG87XG4gIC13ZWJraXQtaHlwaGVuczogYXV0bztcbiAgaHlwaGVuczogYXV0bztcbn1cbiJdfQ== */";
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


    var _components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../components */
    "./src/modules/project/components/index.ts");
    /** @format */


    var ProjectComponent = /*#__PURE__*/function () {
      //#endregion
      function ProjectComponent(_dialog, _taskService, _projectService) {
        _classCallCheck(this, ProjectComponent);

        this._dialog = _dialog;
        this._taskService = _taskService;
        this._projectService = _projectService;
        this.displayedColumns = ['state', 'priority', 'name', 'deadline', 'status', 'update', 'remove'];
      }

      _createClass(ProjectComponent, [{
        key: "ngDoCheck",
        value: function ngDoCheck() {
          this.dataSource.data.forEach(function (x) {
            if (_models_task_models__WEBPACK_IMPORTED_MODULE_6__["Status"].Onway === x.status && new Date(x.deadline).getTime() < new Date().getTime()) {
              x.status = _models_task_models__WEBPACK_IMPORTED_MODULE_6__["Status"].Expired;
            } else if (_models_task_models__WEBPACK_IMPORTED_MODULE_6__["Status"].Expired === x.status && new Date(x.deadline).getTime() > new Date().getTime()) {
              x.status = _models_task_models__WEBPACK_IMPORTED_MODULE_6__["Status"].Onway;
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this._setStatus(this.data.tasks);

          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.data.tasks);
          this.projectId = this.data.projectId;
          this.projectName = this.data.projectName;
        }
      }, {
        key: "_setStatus",
        value: function _setStatus(tasks) {
          var _this3 = this;

          tasks.forEach(function (checkingTask) {
            if (new Date(checkingTask.deadline).getTime() < new Date().getTime() && checkingTask.status === _models_task_models__WEBPACK_IMPORTED_MODULE_6__["Status"].Onway) {
              _this3._taskService.updateStatus$(checkingTask.id, _models_task_models__WEBPACK_IMPORTED_MODULE_6__["Status"].Expired).subscribe(function () {}, function (error) {
                return console.error(error.message);
              });

              checkingTask.status = _models_task_models__WEBPACK_IMPORTED_MODULE_6__["Status"].Expired;
            } else if (new Date(checkingTask.deadline).getTime() > new Date().getTime() && checkingTask.status === _models_task_models__WEBPACK_IMPORTED_MODULE_6__["Status"].Expired) {
              _this3._taskService.updateStatus$(checkingTask.id, _models_task_models__WEBPACK_IMPORTED_MODULE_6__["Status"].Onway).subscribe(function () {}, function (error) {
                return console.error(error.message);
              });
            }
          });
        }
      }, {
        key: "updateTaskDialog",
        value: function updateTaskDialog(transfer) {
          var _this4 = this;

          this.updateTaskDialogRef = this._dialog.open(_components_update_task_dialog_updateTaskDialog_component__WEBPACK_IMPORTED_MODULE_5__["UpdateTaskDialogComponent"], {
            data: {
              task: transfer.name,
              deadline: transfer.deadline
            }
          });
          this.updateTaskDialogRef.afterClosed().subscribe(function (result) {
            if (transfer) {
              _this4._taskService.updateTask$(transfer.id, result.task, result.deadline).subscribe(function (task) {
                _this4._updateTask(task);
              }, function (error) {
                return console.error(error.message);
              });
            }
          });
        }
      }, {
        key: "_updateTask",
        value: function _updateTask(task) {
          this.dataSource.data = this.dataSource.data.map(function (x) {
            return x.id === task.id ? task : x;
          });
        }
      }, {
        key: "updateProjectDialog",
        value: function updateProjectDialog() {
          var _this5 = this;

          this.updateProjectDialogRef = this._dialog.open(_components__WEBPACK_IMPORTED_MODULE_9__["UpdateProjectDialogComponent"], {
            data: {
              task: this.projectName
            }
          });
          this.updateProjectDialogRef.afterClosed().subscribe(function (result) {
            _this5._projectService.updateProject$(_this5.projectId, result.task).subscribe(function () {
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

          this.createTaskDialogRef = this._dialog.open(_components__WEBPACK_IMPORTED_MODULE_9__["CreateTaskDialogComponent"], {
            data: {
              task: '',
              deadline: '',
              priority: ''
            }
          });
          this.createTaskDialogRef.afterClosed().subscribe(function (result) {
            if (result) {
              _this6._taskService.createTask$(_this6.projectId, result.task, result.deadline, result.priority).subscribe(function (task) {
                _this6._addTaskToTable(task);
              }, function (error) {
                return console.error(error.message);
              });
            }
          });
        }
      }, {
        key: "_addTaskToTable",
        value: function _addTaskToTable(task) {
          var tmpTask = _toConsumableArray(this.dataSource.data);

          tmpTask.push(task);
          this.dataSource.data = tmpTask;
        }
      }, {
        key: "dropTable",
        value: function dropTable(event) {
          var prevIndex = this.dataSource.data.findIndex(function (d) {
            return d === event.item.data;
          });
          Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["moveItemInArray"])(this.dataSource.data, prevIndex, event.currentIndex);

          for (var index = 0; index < this.dataSource.filteredData.length; index++) {
            this.dataSource.data[index].priority = index;
          }

          this.dataSource.data = this.dataSource.data;

          this._taskService.updatePrioraty$(this.dataSource.data).subscribe(function () {}, function (error) {
            return console.error(error.message);
          });
        }
      }, {
        key: "setDone",
        value: function setDone(element) {
          this._taskService.updateStatus$(element.id, _models_task_models__WEBPACK_IMPORTED_MODULE_6__["Status"].Done).subscribe(function () {}, function (error) {
            return console.error(error.message);
          });

          element.status = _models_task_models__WEBPACK_IMPORTED_MODULE_6__["Status"].Done;
        }
      }, {
        key: "removeTask",
        value: function removeTask(id) {
          this.dataSource.data = this.dataSource.data.filter(function (x) {
            return x.id !== id;
          });

          this._taskService.removeTask$(id).subscribe(function () {}, function (error) {
            return console.error(error.message);
          });
        }
      }, {
        key: "removeProject",
        value: function removeProject() {
          this.isDeleted = true;

          this._projectService.removeProject$(this.projectId).subscribe(function () {}, function (error) {
            return console.error(error.message);
          });
        }
      }, {
        key: "matSort",
        set: function set(ms) {
          this.sort = ms;
          this.dataSource.sort = this.sort;
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
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], {
      "static": true
    })], ProjectComponent.prototype, "sort", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])], ProjectComponent.prototype, "matSort", null);
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
    /* harmony import */


    var ngx_loading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-loading */
    "./node_modules/ngx-loading/__ivy_ngcc__/fesm2015/ngx-loading.js");
    /**
     * /* tslint:disable: ordered-imports
     *
     * @format
     */


    var ProjectModule = function ProjectModule() {
      _classCallCheck(this, ProjectModule);
    };

    ProjectModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], src_app_app_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"], ngx_loading__WEBPACK_IMPORTED_MODULE_10__["NgxLoadingModule"]],
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
      function ProjectService(_http, _auth) {
        _classCallCheck(this, ProjectService);

        this._http = _http;
        this._auth = _auth;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'project';
      }

      _createClass(ProjectService, [{
        key: "removeProject$",
        value: function removeProject$(id) {
          return this._http["delete"]("".concat(this.baseUrl, "/").concat(this._auth.UserId, "/remove/").concat(id), {
            responseType: 'json'
          });
        }
      }, {
        key: "updateProject$",
        value: function updateProject$(id, name) {
          return this._http.put("".concat(this.baseUrl, "/").concat(this._auth.UserId, "/update"), {
            id: id,
            name: name
          }, {
            responseType: 'json'
          });
        }
      }, {
        key: "createProject$",
        value: function createProject$(name) {
          return this._http.post("".concat(this.baseUrl, "/").concat(this._auth.UserId, "/create"), {
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
      function TaskService(_http) {
        _classCallCheck(this, TaskService);

        this._http = _http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'task';
        this.userId = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]().decodeToken(localStorage.getItem('token')).nameid;
      }

      _createClass(TaskService, [{
        key: "getTask$",
        value: function getTask$(id) {
          return this._http.get("".concat(this.baseUrl, "/").concat(this.userId, "/get/").concat(id), {
            responseType: 'json'
          });
        }
      }, {
        key: "createTask$",
        value: function createTask$(projectId, name, deadline, priority) {
          return this._http.post("".concat(this.baseUrl, "/").concat(this.userId, "/create/").concat(projectId), {
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
          return this._http.put("".concat(this.baseUrl, "/").concat(this.userId, "/update"), {
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
          return this._http.put("".concat(this.baseUrl, "/").concat(this.userId, "/updateStatus"), {
            id: id,
            status: status
          }, {
            responseType: 'json'
          });
        }
      }, {
        key: "updatePrioraty$",
        value: function updatePrioraty$(tasks) {
          return this._http.put("".concat(this.baseUrl, "/").concat(this.userId, "/updatePrioraty"), {
            tasks: tasks
          }, {
            responseType: 'json'
          });
        }
      }, {
        key: "removeTask$",
        value: function removeTask$(id) {
          return this._http["delete"]("".concat(this.baseUrl, "/").concat(this.userId, "/remove/").concat(id), {
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