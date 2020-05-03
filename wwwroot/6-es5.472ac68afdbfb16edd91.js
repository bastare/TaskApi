function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?_arrayLikeToArray(t,e):void 0}}function _iterableToArray(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,a){return e&&_defineProperties(t.prototype,e),a&&_defineProperties(t,a),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{pdzT:function(t,e,a){"use strict";a.r(e),a.d(e,"ROUTES",(function(){return St})),a.d(e,"HomeRoutingModule",(function(){return Vt}));var n,r,o,i,c,s,u,l,d,b,f,p=a("tyNb"),m=a("ofXK"),h=a("3Pt+"),k=a("fXoL"),g=[(n=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"canActivate",value:function(t,e){return!0}}]),t}(),n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=k.Lb({token:n,factory:n.\u0275fac,providedIn:"root"}),n)],v=a("AytR"),y=a("tk/3"),D=a("+nzF"),C=((r=function(){function t(e,a){_classCallCheck(this,t),this._http=e,this._auth=a,this.baseUrl=v.a.apiUrl+"data",this.userId=a.UserId}return _createClass(t,[{key:"getData$",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.userId;return this._http.get("".concat(this.baseUrl,"/").concat(t,"/getData"),{responseType:"json"})}}]),t}()).\u0275fac=function(t){return new(t||r)(k.Zb(y.b),k.Zb(D.a))},r.\u0275prov=k.Lb({token:r,factory:r.\u0275fac,providedIn:"root"}),r),_=[C,(i=function(){function t(e,a){_classCallCheck(this,t),this._dataService=e,this._auth=a}return _createClass(t,[{key:"resolve",value:function(t){return this._dataService.getData$(this._auth.UserId)}}]),t}(),i.\u0275fac=function(t){return new(t||i)(k.Zb(C),k.Zb(D.a))},i.\u0275prov=k.Lb({token:i,factory:i.\u0275fac}),i)],U=[(o=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"canActivate",value:function(t,e){return!0}}]),t}(),o.\u0275fac=function(t){return new(t||o)},o.\u0275prov=k.Lb({token:o,factory:o.\u0275fac,providedIn:"root"}),o)],w=function(t){return t[t.Done=0]="Done",t[t.Expired=1]="Expired",t[t.Onway=2]="Onway",t}({}),S=((s=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"transform",value:function(t){return w[t]}}]),t}()).\u0275fac=function(t){return new(t||s)},s.\u0275pipe=k.Ob({name:"Status",type:s,pure:!0}),s),V=((c=function(){function t(e,a){_classCallCheck(this,t),this._http=e,this._auth=a,this.baseUrl=v.a.apiUrl+"project"}return _createClass(t,[{key:"removeProject$",value:function(t){return this._http.delete("".concat(this.baseUrl,"/").concat(this._auth.UserId,"/remove/").concat(t),{responseType:"json"})}},{key:"updateProject$",value:function(t,e){return this._http.put("".concat(this.baseUrl,"/").concat(this._auth.UserId,"/update"),{id:t,name:e},{responseType:"json"})}},{key:"createProject$",value:function(t){return this._http.post("".concat(this.baseUrl,"/").concat(this._auth.UserId,"/create"),{name:t},{responseType:"json"})}}]),t}()).\u0275fac=function(t){return new(t||c)(k.Zb(y.b),k.Zb(D.a))},c.\u0275prov=k.Lb({token:c,factory:c.\u0275fac,providedIn:"root"}),c),j=a("Nm8O"),T=((u=function(){function t(e){_classCallCheck(this,t),this._http=e,this.baseUrl=v.a.apiUrl+"task",this.userId=(new j.a).decodeToken(localStorage.getItem("token")).nameid}return _createClass(t,[{key:"getTask$",value:function(t){return this._http.get("".concat(this.baseUrl,"/").concat(this.userId,"/get/").concat(t),{responseType:"json"})}},{key:"createTask$",value:function(t,e,a,n){return this._http.post("".concat(this.baseUrl,"/").concat(this.userId,"/create/").concat(t),{name:e,deadline:a,priority:n},{responseType:"json"})}},{key:"updateTask$",value:function(t,e,a){return this._http.put("".concat(this.baseUrl,"/").concat(this.userId,"/update"),{id:t,name:e,deadline:a},{responseType:"json"})}},{key:"updateStatus$",value:function(t,e){return this._http.put("".concat(this.baseUrl,"/").concat(this.userId,"/updateStatus"),{id:t,status:e},{responseType:"json"})}},{key:"updatePrioraty$",value:function(t){return this._http.put("".concat(this.baseUrl,"/").concat(this.userId,"/updatePrioraty"),{tasks:t},{responseType:"json"})}},{key:"removeTask$",value:function(t){return this._http.delete("".concat(this.baseUrl,"/").concat(this.userId,"/remove/").concat(t),{responseType:"json"})}}]),t}()).\u0275fac=function(t){return new(t||u)(k.Zb(y.b))},u.\u0275prov=k.Lb({token:u,factory:u.\u0275fac,providedIn:"root"}),u),P=[S],I=[V,T],O=a("ZAI4"),$=a("qC+V"),x=a("+0xr"),R=a("Dh3D"),M=a("0IaG"),A=a("kmnG"),Q=a("qFsG"),N=a("iadO"),L=a("bTqV"),q=((l=function(){function t(e,a,n){_classCallCheck(this,t),this.formBuilder=e,this.dialogRef=a,this.data=n}return _createClass(t,[{key:"ngOnInit",value:function(){this.form=this.formBuilder.group({task:[this.data.task,h.o.required],deadline:[this.data.deadline,h.o.required]})}},{key:"submit",value:function(t){this.dialogRef.close(t.value)}}]),t}()).\u0275fac=function(t){return new(t||l)(k.Pb(h.c),k.Pb(M.f),k.Pb(M.a))},l.\u0275cmp=k.Jb({type:l,selectors:[["app-updateTaskDialog"]],decls:18,vars:4,consts:[[3,"formGroup","ngSubmit"],["mat-dialog-title",""],["appearance","fill"],["matInput","","formControlName","task","placeholder","Enter task"],["matInput","","formControlName","deadline",3,"matDatepicker"],["matSuffix","",3,"for"],["picker",""],["mat-button","","type","submit",3,"disabled"],["mat-button","","type","button",3,"click"]],template:function(t,e){if(1&t&&(k.Vb(0,"form",0),k.dc("ngSubmit",(function(){return e.submit(e.form)})),k.Vb(1,"h1",1),k.Dc(2,"Update task"),k.Ub(),k.Vb(3,"mat-dialog-content"),k.Vb(4,"mat-form-field",2),k.Qb(5,"input",3),k.Ub(),k.Vb(6,"mat-form-field",2),k.Vb(7,"mat-label"),k.Dc(8,"Choose a date"),k.Ub(),k.Qb(9,"input",4),k.Qb(10,"mat-datepicker-toggle",5),k.Qb(11,"mat-datepicker",null,6),k.Ub(),k.Ub(),k.Vb(13,"mat-dialog-actions"),k.Vb(14,"button",7),k.Dc(15,"Update"),k.Ub(),k.Vb(16,"button",8),k.dc("click",(function(){return e.dialogRef.close()})),k.Dc(17,"Cancel"),k.Ub(),k.Ub(),k.Ub()),2&t){var a=k.uc(12);k.nc("formGroup",e.form),k.Db(9),k.nc("matDatepicker",a),k.Db(1),k.nc("for",a),k.Db(4),k.nc("disabled",!e.form.valid)}},directives:[h.p,h.k,h.e,M.g,M.d,A.b,Q.b,h.b,h.j,h.d,A.e,N.b,N.d,A.f,N.a,M.c,L.a],styles:[""]}),l),E=a("5+WD"),F=((f=function(){function t(e,a,n){_classCallCheck(this,t),this.formBuilder=e,this.dialogRef=a,this.data=n}return _createClass(t,[{key:"ngOnInit",value:function(){this.form=this.formBuilder.group({task:["",h.o.required],deadline:["",h.o.required],priority:["",h.o.required]})}},{key:"submit",value:function(t){this.dialogRef.close(t.value)}}]),t}()).\u0275fac=function(t){return new(t||f)(k.Pb(h.c),k.Pb(M.f),k.Pb(M.a))},f.\u0275cmp=k.Jb({type:f,selectors:[["app-createTaskDialog"]],decls:20,vars:4,consts:[[3,"formGroup","ngSubmit"],["mat-dialog-title",""],["appearance","fill"],["matInput","","formControlName","task","placeholder","Enter task"],["matInput","","type","number","formControlName","priority","placeholder","Enter priority"],["matInput","","formControlName","deadline",3,"matDatepicker"],["matSuffix","",3,"for"],["picker",""],["mat-button","","type","submit",3,"disabled"],["mat-button","","type","button",3,"click"]],template:function(t,e){if(1&t&&(k.Vb(0,"form",0),k.dc("ngSubmit",(function(){return e.submit(e.form)})),k.Vb(1,"h1",1),k.Dc(2,"Create task"),k.Ub(),k.Vb(3,"mat-dialog-content"),k.Vb(4,"mat-form-field",2),k.Qb(5,"input",3),k.Ub(),k.Vb(6,"mat-form-field",2),k.Qb(7,"input",4),k.Ub(),k.Vb(8,"mat-form-field",2),k.Vb(9,"mat-label"),k.Dc(10,"Choose a date"),k.Ub(),k.Qb(11,"input",5),k.Qb(12,"mat-datepicker-toggle",6),k.Qb(13,"mat-datepicker",null,7),k.Ub(),k.Ub(),k.Vb(15,"mat-dialog-actions"),k.Vb(16,"button",8),k.Dc(17,"Create"),k.Ub(),k.Vb(18,"button",9),k.dc("click",(function(){return e.dialogRef.close()})),k.Dc(19,"Cancel"),k.Ub(),k.Ub(),k.Ub()),2&t){var a=k.uc(14);k.nc("formGroup",e.form),k.Db(11),k.nc("matDatepicker",a),k.Db(1),k.nc("for",a),k.Db(4),k.nc("disabled",!e.form.valid)}},directives:[h.p,h.k,h.e,M.g,M.d,A.b,Q.b,h.b,h.j,h.d,h.m,A.e,N.b,N.d,A.f,N.a,M.c,L.a],styles:[""]}),f),G=((b=function(){function t(e,a,n){_classCallCheck(this,t),this.formBuilder=e,this.dialogRef=a,this.data=n}return _createClass(t,[{key:"ngOnInit",value:function(){this.form=this.formBuilder.group({task:[this.data.task,h.o.required]})}},{key:"submit",value:function(t){this.dialogRef.close(t.value)}}]),t}()).\u0275fac=function(t){return new(t||b)(k.Pb(h.c),k.Pb(M.f),k.Pb(M.a))},b.\u0275cmp=k.Jb({type:b,selectors:[["app-updateProjectDialog"]],decls:11,vars:2,consts:[[3,"formGroup","ngSubmit"],["mat-dialog-title",""],["appearance","fill"],["matInput","","formControlName","task","placeholder","Enter project"],["mat-button","","type","submit",3,"disabled"],["mat-button","","type","button",3,"click"]],template:function(t,e){1&t&&(k.Vb(0,"form",0),k.dc("ngSubmit",(function(){return e.submit(e.form)})),k.Vb(1,"h1",1),k.Dc(2,"Update project"),k.Ub(),k.Vb(3,"mat-dialog-content"),k.Vb(4,"mat-form-field",2),k.Qb(5,"input",3),k.Ub(),k.Ub(),k.Vb(6,"mat-dialog-actions"),k.Vb(7,"button",4),k.Dc(8,"Update"),k.Ub(),k.Vb(9,"button",5),k.dc("click",(function(){return e.dialogRef.close()})),k.Dc(10,"Cancel"),k.Ub(),k.Ub(),k.Ub()),2&t&&(k.nc("formGroup",e.form),k.Db(7),k.nc("disabled",!e.form.valid))},directives:[h.p,h.k,h.e,M.g,M.d,A.b,Q.b,h.b,h.j,h.d,M.c,L.a],styles:[""]}),b),H=((d=function(){function t(e,a,n){_classCallCheck(this,t),this.formBuilder=e,this.dialogRef=a,this.data=n}return _createClass(t,[{key:"ngOnInit",value:function(){this.form=this.formBuilder.group({task:["",h.o.required]})}},{key:"submit",value:function(t){this.dialogRef.close(t.value)}}]),t}()).\u0275fac=function(t){return new(t||d)(k.Pb(h.c),k.Pb(M.f),k.Pb(M.a))},d.\u0275cmp=k.Jb({type:d,selectors:[["app-createProjecrDialog"]],decls:11,vars:2,consts:[[3,"formGroup","ngSubmit"],["mat-dialog-title",""],["appearance","fill"],["matInput","","formControlName","task","placeholder","Enter project name"],["mat-button","","type","submit",3,"disabled"],["mat-button","","type","button",3,"click"]],template:function(t,e){1&t&&(k.Vb(0,"form",0),k.dc("ngSubmit",(function(){return e.submit(e.form)})),k.Vb(1,"h1",1),k.Dc(2,"Create project"),k.Ub(),k.Vb(3,"mat-dialog-content"),k.Vb(4,"mat-form-field",2),k.Qb(5,"input",3),k.Ub(),k.Ub(),k.Vb(6,"mat-dialog-actions"),k.Vb(7,"button",4),k.Dc(8,"Create"),k.Ub(),k.Vb(9,"button",5),k.dc("click",(function(){return e.dialogRef.close()})),k.Dc(10,"Cancel"),k.Ub(),k.Ub(),k.Ub()),2&t&&(k.nc("formGroup",e.form),k.Db(7),k.nc("disabled",!e.form.valid))},directives:[h.p,h.k,h.e,M.g,M.d,A.b,Q.b,h.b,h.j,h.d,M.c,L.a],styles:[""]}),d),W=a("NFeN");function B(t,e){1&t&&k.Qb(0,"div",9)}function J(t,e){1&t&&k.Qb(0,"th",26)}var Z=function(t,e){return{done:t,expired:e}};function z(t,e){if(1&t){var a=k.Wb();k.Vb(0,"td",27),k.Vb(1,"button",28),k.dc("click",(function(){k.wc(a);var t=e.$implicit;return k.hc(2).setDone(t)})),k.Vb(2,"mat-icon"),k.Dc(3,"check_circle_outline"),k.Ub(),k.Ub(),k.Ub()}if(2&t){var n=e.$implicit;k.nc("ngClass",k.qc(2,Z,0==n.status,1==n.status)),k.Db(1),k.nc("disabled",0==n.status)}}function X(t,e){1&t&&(k.Vb(0,"th",29),k.Dc(1," Pr. "),k.Ub())}function K(t,e){if(1&t&&(k.Vb(0,"td",30),k.Dc(1),k.Ub()),2&t){var a=e.$implicit;k.nc("ngClass",k.qc(2,Z,0==a.status,1==a.status)),k.Db(1),k.Fc(" ",a.priority," ")}}function Y(t,e){1&t&&(k.Vb(0,"th",29),k.Dc(1," Name "),k.Ub())}function tt(t,e){if(1&t&&(k.Vb(0,"td",31),k.Dc(1),k.Ub()),2&t){var a=e.$implicit;k.nc("ngClass",k.qc(2,Z,0==a.status,1==a.status)),k.Db(1),k.Fc(" ",a.name," ")}}function et(t,e){1&t&&(k.Vb(0,"th",29),k.Dc(1," Deadline "),k.Ub())}function at(t,e){if(1&t&&(k.Vb(0,"td",27),k.Vb(1,"u"),k.Dc(2),k.ic(3,"date"),k.Ub(),k.Ub()),2&t){var a=e.$implicit;k.nc("ngClass",k.qc(5,Z,0==a.status,1==a.status)),k.Db(2),k.Fc(" ",k.kc(3,2,a.deadline,"dd:MM:yyyy"),"")}}function nt(t,e){1&t&&(k.Vb(0,"th",29),k.Dc(1," Status "),k.Ub())}function rt(t,e){if(1&t&&(k.Vb(0,"td",27),k.Dc(1),k.ic(2,"Status"),k.Ub()),2&t){var a=e.$implicit;k.nc("ngClass",k.qc(4,Z,0==a.status,1==a.status)),k.Db(1),k.Fc(" ",k.jc(2,2,a.status)," ")}}function ot(t,e){1&t&&k.Qb(0,"th",26)}function it(t,e){1&t&&k.Qb(0,"th",32)}function ct(t,e){if(1&t){var a=k.Wb();k.Vb(0,"td",27),k.Vb(1,"button",33),k.dc("click",(function(){k.wc(a);var t=e.$implicit;return k.hc(2).updateTaskDialog(t)})),k.Vb(2,"mat-icon"),k.Dc(3,"ballot"),k.Ub(),k.Ub(),k.Ub()}if(2&t){var n=e.$implicit;k.nc("ngClass",k.qc(2,Z,0==n.status,1==n.status)),k.Db(1),k.nc("disabled",0==n.status)}}function st(t,e){1&t&&k.Qb(0,"th",26)}function ut(t,e){1&t&&k.Qb(0,"th",32)}function lt(t,e){if(1&t){var a=k.Wb();k.Vb(0,"td",27),k.Vb(1,"button",33),k.dc("click",(function(){k.wc(a);var t=e.$implicit;return k.hc(2).removeTask(t.id)}))("click",(function(){return null})),k.Vb(2,"mat-icon",5),k.Dc(3,"delete_outline"),k.Ub(),k.Ub(),k.Ub()}if(2&t){var n=e.$implicit;k.nc("ngClass",k.qc(2,Z,0==n.status,1==n.status)),k.Db(1),k.nc("disabled",!1)}}function dt(t,e){1&t&&k.Qb(0,"tr",34)}function bt(t,e){1&t&&k.Qb(0,"tr",35),2&t&&k.nc("cdkDragData",e.$implicit)}function ft(t,e){if(1&t){var a=k.Wb();k.Vb(0,"table",10),k.dc("cdkDropListDropped",(function(t){return k.wc(a),k.hc().dropTable(t)})),k.Tb(1,11),k.Cc(2,J,1,0,"th",12),k.Cc(3,z,4,5,"td",13),k.Sb(),k.Tb(4,14),k.Cc(5,X,2,0,"th",15),k.Cc(6,K,2,5,"td",16),k.Sb(),k.Tb(7,17),k.Cc(8,Y,2,0,"th",15),k.Cc(9,tt,2,5,"td",18),k.Sb(),k.Tb(10,19),k.Cc(11,et,2,0,"th",15),k.Cc(12,at,4,8,"td",13),k.Sb(),k.Tb(13,20),k.Cc(14,nt,2,0,"th",15),k.Cc(15,rt,3,7,"td",13),k.Sb(),k.Tb(16,21),k.Cc(17,ot,1,0,"th",12),k.Cc(18,it,1,0,"th",22),k.Cc(19,ct,4,5,"td",13),k.Sb(),k.Tb(20,23),k.Cc(21,st,1,0,"th",12),k.Cc(22,ut,1,0,"th",22),k.Cc(23,lt,4,5,"td",13),k.Sb(),k.Cc(24,dt,1,0,"tr",24),k.Cc(25,bt,1,1,"tr",25),k.Ub()}if(2&t){var n=k.hc();k.nc("dataSource",n.dataSource)("cdkDropListData",n.dataSource),k.Db(24),k.nc("matHeaderRowDef",n.displayedColumns),k.Db(1),k.nc("matRowDefColumns",n.displayedColumns)}}var pt,mt,ht=((mt=function(){function t(e,a,n){_classCallCheck(this,t),this._dialog=e,this._taskService=a,this._projectService=n,this.displayedColumns=["state","priority","name","deadline","status","update","remove"]}return _createClass(t,[{key:"ngDoCheck",value:function(){this.dataSource.data.forEach((function(t){w.Onway===t.status&&new Date(t.deadline).getTime()<(new Date).getTime()?t.status=w.Expired:w.Expired===t.status&&new Date(t.deadline).getTime()>(new Date).getTime()&&(t.status=w.Onway)}))}},{key:"ngOnInit",value:function(){this._setStatus(this.data.tasks),this.dataSource=new x.k(this.data.tasks),this.projectId=this.data.projectId,this.projectName=this.data.projectName}},{key:"_setStatus",value:function(t){var e=this;t.forEach((function(t){new Date(t.deadline).getTime()<(new Date).getTime()&&t.status===w.Onway?(e._taskService.updateStatus$(t.id,w.Expired).subscribe((function(){}),(function(t){return console.error(t.message)})),t.status=w.Expired):new Date(t.deadline).getTime()>(new Date).getTime()&&t.status===w.Expired&&e._taskService.updateStatus$(t.id,w.Onway).subscribe((function(){}),(function(t){return console.error(t.message)}))}))}},{key:"updateTaskDialog",value:function(t){var e=this;this.updateTaskDialogRef=this._dialog.open(q,{data:{task:t.name,deadline:t.deadline}}),this.updateTaskDialogRef.afterClosed().subscribe((function(a){t&&e._taskService.updateTask$(t.id,a.task,a.deadline).subscribe((function(t){e._updateTask(t)}),(function(t){return console.error(t.message)}))}))}},{key:"_updateTask",value:function(t){this.dataSource.data=this.dataSource.data.map((function(e){return e.id===t.id?t:e}))}},{key:"updateProjectDialog",value:function(){var t=this;this.updateProjectDialogRef=this._dialog.open(G,{data:{task:this.projectName}}),this.updateProjectDialogRef.afterClosed().subscribe((function(e){t._projectService.updateProject$(t.projectId,e.task).subscribe((function(){t.projectName=e.task}),(function(t){return console.error(t.message)}))}))}},{key:"createTaskDialog",value:function(){var t=this;this.createTaskDialogRef=this._dialog.open(F,{data:{task:"",deadline:"",priority:""}}),this.createTaskDialogRef.afterClosed().subscribe((function(e){e&&t._taskService.createTask$(t.projectId,e.task,e.deadline,e.priority).subscribe((function(e){t._addTaskToTable(e)}),(function(t){return console.error(t.message)}))}))}},{key:"_addTaskToTable",value:function(t){var e=_toConsumableArray(this.dataSource.data);e.push(t),this.dataSource.data=e}},{key:"dropTable",value:function(t){var e=this.dataSource.data.findIndex((function(e){return e===t.item.data}));Object(E.e)(this.dataSource.data,e,t.currentIndex);for(var a=0;a<this.dataSource.filteredData.length;a++)this.dataSource.data[a].priority=a;this.dataSource.data=this.dataSource.data,this._taskService.updatePrioraty$(this.dataSource.data).subscribe((function(){}),(function(t){return console.error(t.message)}))}},{key:"setDone",value:function(t){this._taskService.updateStatus$(t.id,w.Done).subscribe((function(){}),(function(t){return console.error(t.message)})),t.status=w.Done}},{key:"removeTask",value:function(t){this._taskService.removeTask$(t).subscribe((function(){}),(function(t){return console.error(t.message)})),this.dataSource.data=this.dataSource.data.filter((function(e){return e.id!==t}))}},{key:"removeProject",value:function(){var t=this;this._projectService.removeProject$(this.projectId).subscribe((function(){t.deleted=!t.deleted}),(function(t){return console.error(t.message)}))}},{key:"matSort",set:function(t){this.sort=t,this.dataSource.sort=this.sort}}]),t}()).\u0275fac=function(t){return new(t||mt)(k.Pb(M.b),k.Pb(T),k.Pb(V))},mt.\u0275cmp=k.Jb({type:mt,selectors:[["app-project"]],viewQuery:function(t,e){var a;1&t&&(k.Ac(R.a,!0),k.Hc(R.a,!0)),2&t&&(k.tc(a=k.ec())&&(e.sort=a.first),k.tc(a=k.ec())&&(e.matSort=a.first))},inputs:{data:"data"},decls:18,vars:4,consts:[[1,"container",3,"hidden"],[1,"row","justify-content-center"],[1,"card-size","card","mb-3"],[1,"card-header"],["mat-icon-button","","color","primary",3,"click"],["color","warn"],[1,"card-body"],["class","no-data",4,"ngIf"],["mat-table","","matSort","","class","mat-elevation-z8","cdkDropList","",3,"dataSource","cdkDropListData","cdkDropListDropped",4,"ngIf"],[1,"no-data"],["mat-table","","matSort","","cdkDropList","",1,"mat-elevation-z8",3,"dataSource","cdkDropListData","cdkDropListDropped"],["matColumnDef","state"],["mat-header-cell","","mat-header","",4,"matHeaderCellDef"],["mat-cell","",3,"ngClass",4,"matCellDef"],["matColumnDef","priority"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["cdkDragHandle","","mat-cell","",3,"ngClass",4,"matCellDef"],["matColumnDef","name"],["class","draw-border","mat-cell","",3,"ngClass",4,"matCellDef"],["matColumnDef","deadline"],["matColumnDef","status"],["matColumnDef","update"],["mat-header-cell","",4,"matHeaderCellDef"],["matColumnDef","remove"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","","cdkDrag","",3,"cdkDragData",4,"matRowDef","matRowDefColumns"],["mat-header-cell","","mat-header",""],["mat-cell","",3,"ngClass"],["mat-icon-button","","color","primary",3,"disabled","click"],["mat-header-cell","","mat-sort-header",""],["cdkDragHandle","","mat-cell","",3,"ngClass"],["mat-cell","",1,"draw-border",3,"ngClass"],["mat-header-cell",""],["color","accent","mat-icon-button","","color","primary",3,"disabled","click"],["mat-header-row",""],["mat-row","","cdkDrag","",3,"cdkDragData"]],template:function(t,e){1&t&&(k.Vb(0,"div",0),k.Vb(1,"div",1),k.Vb(2,"div",2),k.Vb(3,"div",3),k.Dc(4),k.Vb(5,"button",4),k.dc("click",(function(){return e.removeProject()})),k.Vb(6,"mat-icon",5),k.Dc(7,"delete_outline"),k.Ub(),k.Ub(),k.Vb(8,"button",4),k.dc("click",(function(){return e.updateProjectDialog()})),k.Vb(9,"mat-icon"),k.Dc(10,"create"),k.Ub(),k.Ub(),k.Ub(),k.Vb(11,"div",3),k.Vb(12,"button",4),k.dc("click",(function(){return e.createTaskDialog()})),k.Vb(13,"mat-icon"),k.Dc(14,"add_box"),k.Ub(),k.Ub(),k.Ub(),k.Vb(15,"div",6),k.Cc(16,B,1,0,"div",7),k.Cc(17,ft,26,4,"table",8),k.Ub(),k.Ub(),k.Ub(),k.Ub()),2&t&&(k.nc("hidden",e.deleted),k.Db(4),k.Fc(" ",e.projectName," "),k.Db(12),k.nc("ngIf",!(null!=e.dataSource&&null!=e.dataSource.data&&e.dataSource.data.length)),k.Db(1),k.nc("ngIf",null==e.dataSource||null==e.dataSource.data?null:e.dataSource.data.length))},directives:[L.a,W.a,m.l,x.j,R.a,E.c,x.c,x.e,x.b,x.g,x.i,x.d,x.a,m.j,R.b,E.b,x.f,x.h,E.a],pipes:[m.e,S],styles:[".container[_ngcontent-%COMP%]{align-items:flex-start}.no-data[_ngcontent-%COMP%]{background:url(no-data.6bc7979f17a25ddd351d.jpeg) no-repeat 50%;height:500px;width:auto}card-container[_ngcontent-%COMP%]{position:relative}.card-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{float:right}#add[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto;margin-top:50px;position:-webkit-sticky;position:sticky;bottom:1rem;align-self:flex-end}.done[_ngcontent-%COMP%]{background:-webkit-linear-gradient(top,#fff 1%,#b7e6c1 99%)}.expired[_ngcontent-%COMP%]{background:-webkit-linear-gradient(top,#fff 1%,#fd0000 99%)}table[_ngcontent-%COMP%]{width:100%}.card-size[_ngcontent-%COMP%]{width:100%;margin-top:50px}td.mat-cell[_ngcontent-%COMP%]{padding:20px 0;border:none}.mat-column-name[_ngcontent-%COMP%]{flex:0 0 60%!important;width:60%!important}.mat-column-name[_ngcontent-%COMP%], .mat-column-position[_ngcontent-%COMP%]{word-wrap:break-word!important;white-space:unset!important;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;-ms-hyphens:auto;-webkit-hyphens:auto;hyphens:auto}.mat-column-position[_ngcontent-%COMP%]{flex:0 0 7%!important;width:7%!important}"]}),mt),kt=((pt=function t(){_classCallCheck(this,t)}).\u0275mod=k.Nb({type:pt}),pt.\u0275inj=k.Mb({factory:function(t){return new(t||pt)},providers:[].concat(P,I,U),imports:[[m.c,p.c,h.n,h.f,O.b,$.b]]}),pt);function gt(t,e){if(1&t){var a=k.Wb();k.Vb(0,"button",4),k.dc("click",(function(){return k.wc(a),k.hc().auth.logOut()})),k.Vb(1,"mat-icon"),k.Dc(2,"exit_to_app"),k.Ub(),k.Ub()}}function vt(t,e){1&t&&k.Qb(0,"app-project",5),2&t&&k.nc("data",e.$implicit)}function yt(t,e){if(1&t){var a=k.Wb();k.Vb(0,"button",6),k.dc("click",(function(){return k.wc(a),k.hc().createProjectDialog()})),k.Vb(1,"mat-icon"),k.Dc(2,"add"),k.Ub(),k.Ub()}}var Dt,Ct,_t,Ut=((Ct=function(){function t(e,a,n,r){_classCallCheck(this,t),this.auth=e,this.dataService=a,this.dialog=n,this.projectService=r,this.fetched=!1}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.dataService.getData$(this.auth.UserId).subscribe((function(e){t.userData=e}))}},{key:"createProjectDialog",value:function(){var t=this;this.createProjectDialogRef=this.dialog.open(H,{data:{task:""}}),this.createProjectDialogRef.afterClosed().subscribe((function(e){e&&t.projectService.createProject$(e.task).subscribe((function(){t.dataService.getData$(t.auth.UserId).subscribe((function(e){t.userData=e}))}),(function(t){return alert(t.message)}))}))}}]),t}()).\u0275fac=function(t){return new(t||Ct)(k.Pb(D.a),k.Pb(C),k.Pb(M.b),k.Pb(V))},Ct.\u0275cmp=k.Jb({type:Ct,selectors:[["app-home"]],decls:5,vars:4,consts:[[3,"show"],["id","exit","mat-icon-button","","color","warn",3,"click",4,"ngIf"],[3,"data",4,"ngFor","ngForOf"],["id","add","mat-fab","","color","primary",3,"click",4,"ngIf"],["id","exit","mat-icon-button","","color","warn",3,"click"],[3,"data"],["id","add","mat-fab","","color","primary",3,"click"]],template:function(t,e){1&t&&(k.Vb(0,"div"),k.Qb(1,"ngx-loading",0),k.Cc(2,gt,3,0,"button",1),k.Cc(3,vt,1,1,"app-project",2),k.Cc(4,yt,3,0,"button",3),k.Ub()),2&t&&(k.Db(1),k.nc("show",!e.userData),k.Db(1),k.nc("ngIf",e.userData),k.Db(1),k.nc("ngForOf",e.userData),k.Db(1),k.nc("ngIf",e.userData))},directives:[$.a,m.l,m.k,L.a,W.a,ht],styles:["#exit[_ngcontent-%COMP%]{float:right;top:1rem;right:1rem}#add[_ngcontent-%COMP%], #exit[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky}#add[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto;margin-top:50px;bottom:1rem;align-self:flex-end}"]}),Ct),wt=((Dt=function t(){_classCallCheck(this,t)}).\u0275mod=k.Nb({type:Dt}),Dt.\u0275inj=k.Mb({factory:function(t){return new(t||Dt)},providers:[].concat(_,g),imports:[[m.c,p.c,h.n,h.f,kt,O.b,$.b]]}),Dt),St=[{path:"home",canActivate:[],component:Ut}],Vt=((_t=function t(){_classCallCheck(this,t)}).\u0275mod=k.Nb({type:_t}),_t.\u0275inj=k.Mb({factory:function(t){return new(t||_t)},imports:[[wt,p.c.forChild(St)],p.c]}),_t)}}]);