function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?_arrayLikeToArray(t,e):void 0}}function _iterableToArray(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,a){return e&&_defineProperties(t.prototype,e),a&&_defineProperties(t,a),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{pdzT:function(t,e,a){"use strict";a.r(e),a.d(e,"ROUTES",(function(){return Tt})),a.d(e,"HomeRoutingModule",(function(){return Pt}));var n,r,o,i,c,s,u,l,d,b,f,p=a("tyNb"),m=a("ofXK"),h=a("3Pt+"),g=a("fXoL"),k=[(n=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"canActivate",value:function(t,e){return!0}}]),t}(),n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=g.Lb({token:n,factory:n.\u0275fac,providedIn:"root"}),n)],v=a("AytR"),y=a("tk/3"),C=a("+nzF"),D=((r=function(){function t(e,a){_classCallCheck(this,t),this._http=e,this._auth=a,this.baseUrl=v.a.apiUrl+"data",this.userId=a.UserId}return _createClass(t,[{key:"getData$",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.userId;return this._http.get("".concat(this.baseUrl,"/").concat(t,"/getData"),{responseType:"json"})}}]),t}()).\u0275fac=function(t){return new(t||r)(g.Zb(y.b),g.Zb(C.a))},r.\u0275prov=g.Lb({token:r,factory:r.\u0275fac,providedIn:"root"}),r),_=[D,(i=function(){function t(e,a){_classCallCheck(this,t),this._dataService=e,this._auth=a}return _createClass(t,[{key:"resolve",value:function(t){return this._dataService.getData$(this._auth.UserId)}}]),t}(),i.\u0275fac=function(t){return new(t||i)(g.Zb(D),g.Zb(C.a))},i.\u0275prov=g.Lb({token:i,factory:i.\u0275fac}),i)],U=[(o=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"canActivate",value:function(t,e){return!0}}]),t}(),o.\u0275fac=function(t){return new(t||o)},o.\u0275prov=g.Lb({token:o,factory:o.\u0275fac,providedIn:"root"}),o)],w=function(t){return t[t.Done=0]="Done",t[t.Expired=1]="Expired",t[t.Onway=2]="Onway",t}({}),S=((s=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"transform",value:function(t){return w[t]}}]),t}()).\u0275fac=function(t){return new(t||s)},s.\u0275pipe=g.Ob({name:"Status",type:s,pure:!0}),s),V=((c=function(){function t(e,a){_classCallCheck(this,t),this._http=e,this._auth=a,this.baseUrl=v.a.apiUrl+"project"}return _createClass(t,[{key:"removeProject$",value:function(t){return this._http.delete("".concat(this.baseUrl,"/").concat(this._auth.UserId,"/remove/").concat(t),{responseType:"json"})}},{key:"updateProject$",value:function(t,e){return this._http.put("".concat(this.baseUrl,"/").concat(this._auth.UserId,"/update"),{id:t,name:e},{responseType:"json"})}},{key:"createProject$",value:function(t){return this._http.post("".concat(this.baseUrl,"/").concat(this._auth.UserId,"/create"),{name:t},{responseType:"json"})}}]),t}()).\u0275fac=function(t){return new(t||c)(g.Zb(y.b),g.Zb(C.a))},c.\u0275prov=g.Lb({token:c,factory:c.\u0275fac,providedIn:"root"}),c),j=a("Nm8O"),T=((u=function(){function t(e){_classCallCheck(this,t),this._http=e,this.baseUrl=v.a.apiUrl+"task",this.userId=(new j.a).decodeToken(localStorage.getItem("token")).nameid}return _createClass(t,[{key:"getTask$",value:function(t){return this._http.get("".concat(this.baseUrl,"/").concat(this.userId,"/get/").concat(t),{responseType:"json"})}},{key:"createTask$",value:function(t,e,a,n){return this._http.post("".concat(this.baseUrl,"/").concat(this.userId,"/create/").concat(t),{name:e,deadline:a,priority:n},{responseType:"json"})}},{key:"updateTask$",value:function(t,e,a){return this._http.put("".concat(this.baseUrl,"/").concat(this.userId,"/update"),{id:t,name:e,deadline:a},{responseType:"json"})}},{key:"updateStatus$",value:function(t,e){return this._http.put("".concat(this.baseUrl,"/").concat(this.userId,"/updateStatus"),{id:t,status:e},{responseType:"json"})}},{key:"updatePrioraty$",value:function(t){return this._http.put("".concat(this.baseUrl,"/").concat(this.userId,"/updatePrioraty"),{tasks:t},{responseType:"json"})}},{key:"removeTask$",value:function(t){return this._http.delete("".concat(this.baseUrl,"/").concat(this.userId,"/remove/").concat(t),{responseType:"json"})}}]),t}()).\u0275fac=function(t){return new(t||u)(g.Zb(y.b))},u.\u0275prov=g.Lb({token:u,factory:u.\u0275fac,providedIn:"root"}),u),P=[S],I=[V,T],O=a("ZAI4"),$=a("qC+V"),x=a("+0xr"),R=a("Dh3D"),M=a("0IaG"),A=a("kmnG"),Q=a("qFsG"),L=a("iadO"),N=a("bTqV"),q=((l=function(){function t(e,a,n){_classCallCheck(this,t),this.formBuilder=e,this.dialogRef=a,this.data=n}return _createClass(t,[{key:"ngOnInit",value:function(){this.form=this.formBuilder.group({task:[this.data.task,h.o.required],deadline:[this.data.deadline,h.o.required]})}},{key:"submit",value:function(t){this.dialogRef.close(t.value)}}]),t}()).\u0275fac=function(t){return new(t||l)(g.Pb(h.c),g.Pb(M.f),g.Pb(M.a))},l.\u0275cmp=g.Jb({type:l,selectors:[["app-updateTaskDialog"]],decls:18,vars:4,consts:[[3,"formGroup","ngSubmit"],["mat-dialog-title",""],["appearance","fill"],["matInput","","formControlName","task","placeholder","Enter task"],["matInput","","formControlName","deadline",3,"matDatepicker"],["matSuffix","",3,"for"],["picker",""],["mat-button","","type","submit",3,"disabled"],["mat-button","","type","button",3,"click"]],template:function(t,e){if(1&t&&(g.Vb(0,"form",0),g.dc("ngSubmit",(function(){return e.submit(e.form)})),g.Vb(1,"h1",1),g.Dc(2,"Update task"),g.Ub(),g.Vb(3,"mat-dialog-content"),g.Vb(4,"mat-form-field",2),g.Qb(5,"input",3),g.Ub(),g.Vb(6,"mat-form-field",2),g.Vb(7,"mat-label"),g.Dc(8,"Choose a date"),g.Ub(),g.Qb(9,"input",4),g.Qb(10,"mat-datepicker-toggle",5),g.Qb(11,"mat-datepicker",null,6),g.Ub(),g.Ub(),g.Vb(13,"mat-dialog-actions"),g.Vb(14,"button",7),g.Dc(15,"Update"),g.Ub(),g.Vb(16,"button",8),g.dc("click",(function(){return e.dialogRef.close()})),g.Dc(17,"Cancel"),g.Ub(),g.Ub(),g.Ub()),2&t){var a=g.uc(12);g.nc("formGroup",e.form),g.Db(9),g.nc("matDatepicker",a),g.Db(1),g.nc("for",a),g.Db(4),g.nc("disabled",!e.form.valid)}},directives:[h.p,h.k,h.e,M.g,M.d,A.b,Q.b,h.b,h.j,h.d,A.e,L.b,L.d,A.f,L.a,M.c,N.a],styles:[""]}),l),E=a("5+WD"),B=((f=function(){function t(e,a,n){_classCallCheck(this,t),this.formBuilder=e,this.dialogRef=a,this.data=n}return _createClass(t,[{key:"ngOnInit",value:function(){this.form=this.formBuilder.group({task:["",h.o.required],deadline:["",h.o.required],priority:["",h.o.required]})}},{key:"submit",value:function(t){this.dialogRef.close(t.value)}}]),t}()).\u0275fac=function(t){return new(t||f)(g.Pb(h.c),g.Pb(M.f),g.Pb(M.a))},f.\u0275cmp=g.Jb({type:f,selectors:[["app-createTaskDialog"]],decls:20,vars:4,consts:[[3,"formGroup","ngSubmit"],["mat-dialog-title",""],["appearance","fill"],["matInput","","formControlName","task","placeholder","Enter task"],["matInput","","type","number","formControlName","priority","placeholder","Enter priority"],["matInput","","formControlName","deadline",3,"matDatepicker"],["matSuffix","",3,"for"],["picker",""],["mat-button","","type","submit",3,"disabled"],["mat-button","","type","button",3,"click"]],template:function(t,e){if(1&t&&(g.Vb(0,"form",0),g.dc("ngSubmit",(function(){return e.submit(e.form)})),g.Vb(1,"h1",1),g.Dc(2,"Create task"),g.Ub(),g.Vb(3,"mat-dialog-content"),g.Vb(4,"mat-form-field",2),g.Qb(5,"input",3),g.Ub(),g.Vb(6,"mat-form-field",2),g.Qb(7,"input",4),g.Ub(),g.Vb(8,"mat-form-field",2),g.Vb(9,"mat-label"),g.Dc(10,"Choose a date"),g.Ub(),g.Qb(11,"input",5),g.Qb(12,"mat-datepicker-toggle",6),g.Qb(13,"mat-datepicker",null,7),g.Ub(),g.Ub(),g.Vb(15,"mat-dialog-actions"),g.Vb(16,"button",8),g.Dc(17,"Create"),g.Ub(),g.Vb(18,"button",9),g.dc("click",(function(){return e.dialogRef.close()})),g.Dc(19,"Cancel"),g.Ub(),g.Ub(),g.Ub()),2&t){var a=g.uc(14);g.nc("formGroup",e.form),g.Db(11),g.nc("matDatepicker",a),g.Db(1),g.nc("for",a),g.Db(4),g.nc("disabled",!e.form.valid)}},directives:[h.p,h.k,h.e,M.g,M.d,A.b,Q.b,h.b,h.j,h.d,h.m,A.e,L.b,L.d,A.f,L.a,M.c,N.a],styles:[""]}),f),F=((b=function(){function t(e,a,n){_classCallCheck(this,t),this.formBuilder=e,this.dialogRef=a,this.data=n}return _createClass(t,[{key:"ngOnInit",value:function(){this.form=this.formBuilder.group({task:[this.data.task,h.o.required]})}},{key:"submit",value:function(t){this.dialogRef.close(t.value)}}]),t}()).\u0275fac=function(t){return new(t||b)(g.Pb(h.c),g.Pb(M.f),g.Pb(M.a))},b.\u0275cmp=g.Jb({type:b,selectors:[["app-updateProjectDialog"]],decls:11,vars:2,consts:[[3,"formGroup","ngSubmit"],["mat-dialog-title",""],["appearance","fill"],["matInput","","formControlName","task","placeholder","Enter project"],["mat-button","","type","submit",3,"disabled"],["mat-button","","type","button",3,"click"]],template:function(t,e){1&t&&(g.Vb(0,"form",0),g.dc("ngSubmit",(function(){return e.submit(e.form)})),g.Vb(1,"h1",1),g.Dc(2,"Update project"),g.Ub(),g.Vb(3,"mat-dialog-content"),g.Vb(4,"mat-form-field",2),g.Qb(5,"input",3),g.Ub(),g.Ub(),g.Vb(6,"mat-dialog-actions"),g.Vb(7,"button",4),g.Dc(8,"Update"),g.Ub(),g.Vb(9,"button",5),g.dc("click",(function(){return e.dialogRef.close()})),g.Dc(10,"Cancel"),g.Ub(),g.Ub(),g.Ub()),2&t&&(g.nc("formGroup",e.form),g.Db(7),g.nc("disabled",!e.form.valid))},directives:[h.p,h.k,h.e,M.g,M.d,A.b,Q.b,h.b,h.j,h.d,M.c,N.a],styles:[""]}),b),G=((d=function(){function t(e,a,n){_classCallCheck(this,t),this.formBuilder=e,this.dialogRef=a,this.data=n}return _createClass(t,[{key:"ngOnInit",value:function(){this.form=this.formBuilder.group({task:["",h.o.required]})}},{key:"submit",value:function(t){this.dialogRef.close(t.value)}}]),t}()).\u0275fac=function(t){return new(t||d)(g.Pb(h.c),g.Pb(M.f),g.Pb(M.a))},d.\u0275cmp=g.Jb({type:d,selectors:[["app-createProjecrDialog"]],decls:11,vars:2,consts:[[3,"formGroup","ngSubmit"],["mat-dialog-title",""],["appearance","fill"],["matInput","","formControlName","task","placeholder","Enter project name"],["mat-button","","type","submit",3,"disabled"],["mat-button","","type","button",3,"click"]],template:function(t,e){1&t&&(g.Vb(0,"form",0),g.dc("ngSubmit",(function(){return e.submit(e.form)})),g.Vb(1,"h1",1),g.Dc(2,"Create project"),g.Ub(),g.Vb(3,"mat-dialog-content"),g.Vb(4,"mat-form-field",2),g.Qb(5,"input",3),g.Ub(),g.Ub(),g.Vb(6,"mat-dialog-actions"),g.Vb(7,"button",4),g.Dc(8,"Create"),g.Ub(),g.Vb(9,"button",5),g.dc("click",(function(){return e.dialogRef.close()})),g.Dc(10,"Cancel"),g.Ub(),g.Ub(),g.Ub()),2&t&&(g.nc("formGroup",e.form),g.Db(7),g.nc("disabled",!e.form.valid))},directives:[h.p,h.k,h.e,M.g,M.d,A.b,Q.b,h.b,h.j,h.d,M.c,N.a],styles:[""]}),d),H=a("NFeN");function W(t,e){1&t&&g.Qb(0,"div",10)}function J(t,e){1&t&&g.Qb(0,"th",27)}var Z=function(t,e){return{done:t,expired:e}};function z(t,e){if(1&t){var a=g.Wb();g.Vb(0,"td",28),g.Vb(1,"button",29),g.dc("click",(function(){g.wc(a);var t=e.$implicit;return g.hc(3).setDone(t)})),g.Vb(2,"mat-icon"),g.Dc(3,"check_circle_outline"),g.Ub(),g.Ub(),g.Ub()}if(2&t){var n=e.$implicit;g.nc("ngClass",g.qc(2,Z,0==n.status,1==n.status)),g.Db(1),g.nc("disabled",0==n.status)}}function X(t,e){1&t&&(g.Vb(0,"th",30),g.Dc(1,"Pr."),g.Ub())}function K(t,e){if(1&t&&(g.Vb(0,"td",31),g.Dc(1),g.Ub()),2&t){var a=e.$implicit;g.nc("ngClass",g.qc(2,Z,0==a.status,1==a.status)),g.Db(1),g.Fc(" ",a.priority," ")}}function Y(t,e){1&t&&(g.Vb(0,"th",30),g.Dc(1,"Name"),g.Ub())}function tt(t,e){if(1&t&&(g.Vb(0,"td",32),g.Dc(1),g.Ub()),2&t){var a=e.$implicit;g.nc("ngClass",g.qc(2,Z,0==a.status,1==a.status)),g.Db(1),g.Fc(" ",a.name," ")}}function et(t,e){1&t&&(g.Vb(0,"th",30),g.Dc(1,"Deadline"),g.Ub())}function at(t,e){if(1&t&&(g.Vb(0,"td",28),g.Vb(1,"u"),g.Dc(2),g.ic(3,"date"),g.Ub(),g.Ub()),2&t){var a=e.$implicit;g.nc("ngClass",g.qc(5,Z,0==a.status,1==a.status)),g.Db(2),g.Fc(" ",g.kc(3,2,a.deadline,"dd:MM:yyyy"),"")}}function nt(t,e){1&t&&(g.Vb(0,"th",30),g.Dc(1,"Status"),g.Ub())}function rt(t,e){if(1&t&&(g.Vb(0,"td",28),g.Dc(1),g.ic(2,"Status"),g.Ub()),2&t){var a=e.$implicit;g.nc("ngClass",g.qc(4,Z,0==a.status,1==a.status)),g.Db(1),g.Fc(" ",g.jc(2,2,a.status)," ")}}function ot(t,e){1&t&&g.Qb(0,"th",27)}function it(t,e){1&t&&g.Qb(0,"th",33)}function ct(t,e){if(1&t){var a=g.Wb();g.Vb(0,"td",28),g.Vb(1,"button",34),g.dc("click",(function(){g.wc(a);var t=e.$implicit;return g.hc(3).updateTaskDialog(t)})),g.Vb(2,"mat-icon"),g.Dc(3,"ballot"),g.Ub(),g.Ub(),g.Ub()}if(2&t){var n=e.$implicit;g.nc("ngClass",g.qc(2,Z,0==n.status,1==n.status)),g.Db(1),g.nc("disabled",0==n.status)}}function st(t,e){1&t&&g.Qb(0,"th",27)}function ut(t,e){1&t&&g.Qb(0,"th",33)}function lt(t,e){if(1&t){var a=g.Wb();g.Vb(0,"td",28),g.Vb(1,"button",34),g.dc("click",(function(){g.wc(a);var t=e.$implicit;return g.hc(3).removeTask(t.id)}))("click",(function(){return null})),g.Vb(2,"mat-icon",6),g.Dc(3,"delete_outline"),g.Ub(),g.Ub(),g.Ub()}if(2&t){var n=e.$implicit;g.nc("ngClass",g.qc(2,Z,0==n.status,1==n.status)),g.Db(1),g.nc("disabled",!1)}}function dt(t,e){1&t&&g.Qb(0,"tr",35)}function bt(t,e){1&t&&g.Qb(0,"tr",36),2&t&&g.nc("cdkDragData",e.$implicit)}function ft(t,e){if(1&t){var a=g.Wb();g.Vb(0,"table",11),g.dc("cdkDropListDropped",(function(t){return g.wc(a),g.hc(2).dropTable(t)})),g.Tb(1,12),g.Cc(2,J,1,0,"th",13),g.Cc(3,z,4,5,"td",14),g.Sb(),g.Tb(4,15),g.Cc(5,X,2,0,"th",16),g.Cc(6,K,2,5,"td",17),g.Sb(),g.Tb(7,18),g.Cc(8,Y,2,0,"th",16),g.Cc(9,tt,2,5,"td",19),g.Sb(),g.Tb(10,20),g.Cc(11,et,2,0,"th",16),g.Cc(12,at,4,8,"td",14),g.Sb(),g.Tb(13,21),g.Cc(14,nt,2,0,"th",16),g.Cc(15,rt,3,7,"td",14),g.Sb(),g.Tb(16,22),g.Cc(17,ot,1,0,"th",13),g.Cc(18,it,1,0,"th",23),g.Cc(19,ct,4,5,"td",14),g.Sb(),g.Tb(20,24),g.Cc(21,st,1,0,"th",13),g.Cc(22,ut,1,0,"th",23),g.Cc(23,lt,4,5,"td",14),g.Sb(),g.Cc(24,dt,1,0,"tr",25),g.Cc(25,bt,1,1,"tr",26),g.Ub()}if(2&t){var n=g.hc(2);g.nc("dataSource",n.dataSource)("cdkDropListData",n.dataSource),g.Db(24),g.nc("matHeaderRowDef",n.displayedColumns),g.Db(1),g.nc("matRowDefColumns",n.displayedColumns)}}function pt(t,e){if(1&t){var a=g.Wb();g.Vb(0,"div",1),g.Vb(1,"div",2),g.Vb(2,"div",3),g.Vb(3,"div",4),g.Dc(4),g.Vb(5,"button",5),g.dc("click",(function(){return g.wc(a),g.hc().removeProject()})),g.Vb(6,"mat-icon",6),g.Dc(7,"delete_outline"),g.Ub(),g.Ub(),g.Vb(8,"button",5),g.dc("click",(function(){return g.wc(a),g.hc().updateProjectDialog()})),g.Vb(9,"mat-icon"),g.Dc(10,"create"),g.Ub(),g.Ub(),g.Ub(),g.Vb(11,"div",4),g.Vb(12,"button",5),g.dc("click",(function(){return g.wc(a),g.hc().createTaskDialog()})),g.Vb(13,"mat-icon"),g.Dc(14,"add_box"),g.Ub(),g.Ub(),g.Ub(),g.Vb(15,"div",7),g.Cc(16,W,1,0,"div",8),g.Cc(17,ft,26,4,"table",9),g.Ub(),g.Ub(),g.Ub(),g.Ub()}if(2&t){var n=g.hc();g.Db(4),g.Fc(" ",n.projectName," "),g.Db(12),g.nc("ngIf",!(null!=n.dataSource&&null!=n.dataSource.data&&n.dataSource.data.length)),g.Db(1),g.nc("ngIf",null==n.dataSource||null==n.dataSource.data?null:n.dataSource.data.length)}}var mt,ht,gt=((ht=function(){function t(e,a,n){_classCallCheck(this,t),this._dialog=e,this._taskService=a,this._projectService=n,this.displayedColumns=["state","priority","name","deadline","status","update","remove"]}return _createClass(t,[{key:"ngDoCheck",value:function(){this.dataSource.data.forEach((function(t){w.Onway===t.status&&new Date(t.deadline).getTime()<(new Date).getTime()?t.status=w.Expired:w.Expired===t.status&&new Date(t.deadline).getTime()>(new Date).getTime()&&(t.status=w.Onway)}))}},{key:"ngOnInit",value:function(){this._setStatus(this.data.tasks),this.dataSource=new x.k(this.data.tasks),this.projectId=this.data.projectId,this.projectName=this.data.projectName}},{key:"_setStatus",value:function(t){var e=this;t.forEach((function(t){new Date(t.deadline).getTime()<(new Date).getTime()&&t.status===w.Onway?(e._taskService.updateStatus$(t.id,w.Expired).subscribe((function(){}),(function(t){return console.error(t.message)})),t.status=w.Expired):new Date(t.deadline).getTime()>(new Date).getTime()&&t.status===w.Expired&&e._taskService.updateStatus$(t.id,w.Onway).subscribe((function(){}),(function(t){return console.error(t.message)}))}))}},{key:"updateTaskDialog",value:function(t){var e=this;this.updateTaskDialogRef=this._dialog.open(q,{data:{task:t.name,deadline:t.deadline}}),this.updateTaskDialogRef.afterClosed().subscribe((function(a){t&&e._taskService.updateTask$(t.id,a.task,a.deadline).subscribe((function(t){e._updateTask(t)}),(function(t){return console.error(t.message)}))}))}},{key:"_updateTask",value:function(t){this.dataSource.data=this.dataSource.data.map((function(e){return e.id===t.id?t:e}))}},{key:"updateProjectDialog",value:function(){var t=this;this.updateProjectDialogRef=this._dialog.open(F,{data:{task:this.projectName}}),this.updateProjectDialogRef.afterClosed().subscribe((function(e){t._projectService.updateProject$(t.projectId,e.task).subscribe((function(){t.projectName=e.task}),(function(t){return console.error(t.message)}))}))}},{key:"createTaskDialog",value:function(){var t=this;this.createTaskDialogRef=this._dialog.open(B,{data:{task:"",deadline:"",priority:""}}),this.createTaskDialogRef.afterClosed().subscribe((function(e){e&&t._taskService.createTask$(t.projectId,e.task,e.deadline,e.priority).subscribe((function(e){t._addTaskToTable(e)}),(function(t){return console.error(t.message)}))}))}},{key:"_addTaskToTable",value:function(t){var e=_toConsumableArray(this.dataSource.data);e.push(t),this.dataSource.data=e}},{key:"dropTable",value:function(t){var e=this.dataSource.data.findIndex((function(e){return e===t.item.data}));Object(E.e)(this.dataSource.data,e,t.currentIndex);for(var a=0;a<this.dataSource.filteredData.length;a++)this.dataSource.data[a].priority=a;this.dataSource.data=this.dataSource.data,this._taskService.updatePrioraty$(this.dataSource.data).subscribe((function(){}),(function(t){return console.error(t.message)}))}},{key:"setDone",value:function(t){this._taskService.updateStatus$(t.id,w.Done).subscribe((function(){}),(function(t){return console.error(t.message)})),t.status=w.Done}},{key:"removeTask",value:function(t){this.dataSource.data=this.dataSource.data.filter((function(e){return e.id!==t})),this._taskService.removeTask$(t).subscribe((function(){}),(function(t){return console.error(t.message)}))}},{key:"removeProject",value:function(){this.isDeleted=!0,this._projectService.removeProject$(this.projectId).subscribe((function(){}),(function(t){return console.error(t.message)}))}},{key:"matSort",set:function(t){this.sort=t,this.dataSource.sort=this.sort}}]),t}()).\u0275fac=function(t){return new(t||ht)(g.Pb(M.b),g.Pb(T),g.Pb(V))},ht.\u0275cmp=g.Jb({type:ht,selectors:[["app-project"]],viewQuery:function(t,e){var a;1&t&&(g.Ac(R.a,!0),g.Hc(R.a,!0)),2&t&&(g.tc(a=g.ec())&&(e.sort=a.first),g.tc(a=g.ec())&&(e.matSort=a.first))},inputs:{data:"data"},decls:1,vars:1,consts:[["class","container",4,"ngIf"],[1,"container"],[1,"row","justify-content-center"],[1,"card-size","card","mb-3"],[1,"card-header"],["mat-icon-button","","color","primary",3,"click"],["color","warn"],[1,"card-body"],["class","no-data",4,"ngIf"],["mat-table","","matSort","","class","mat-elevation-z8","cdkDropList","",3,"dataSource","cdkDropListData","cdkDropListDropped",4,"ngIf"],[1,"no-data"],["mat-table","","matSort","","cdkDropList","",1,"mat-elevation-z8",3,"dataSource","cdkDropListData","cdkDropListDropped"],["matColumnDef","state"],["mat-header-cell","","mat-header","",4,"matHeaderCellDef"],["mat-cell","",3,"ngClass",4,"matCellDef"],["matColumnDef","priority"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["cdkDragHandle","","mat-cell","",3,"ngClass",4,"matCellDef"],["matColumnDef","name"],["class","draw-border","mat-cell","",3,"ngClass",4,"matCellDef"],["matColumnDef","deadline"],["matColumnDef","status"],["matColumnDef","update"],["mat-header-cell","",4,"matHeaderCellDef"],["matColumnDef","remove"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","","cdkDrag","",3,"cdkDragData",4,"matRowDef","matRowDefColumns"],["mat-header-cell","","mat-header",""],["mat-cell","",3,"ngClass"],["mat-icon-button","","color","primary",3,"disabled","click"],["mat-header-cell","","mat-sort-header",""],["cdkDragHandle","","mat-cell","",3,"ngClass"],["mat-cell","",1,"draw-border",3,"ngClass"],["mat-header-cell",""],["color","accent","mat-icon-button","","color","primary",3,"disabled","click"],["mat-header-row",""],["mat-row","","cdkDrag","",3,"cdkDragData"]],template:function(t,e){1&t&&g.Cc(0,pt,18,3,"div",0),2&t&&g.nc("ngIf",!e.isDeleted)},directives:[m.l,N.a,H.a,x.j,R.a,E.c,x.c,x.e,x.b,x.g,x.i,x.d,x.a,m.j,R.b,E.b,x.f,x.h,E.a],pipes:[m.e,S],styles:[".container[_ngcontent-%COMP%]{align-items:flex-start}.no-data[_ngcontent-%COMP%]{background:url(no-data.6bc7979f17a25ddd351d.jpeg) no-repeat 50%;height:500px;width:auto}card-container[_ngcontent-%COMP%]{position:relative}.card-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{float:right}#add[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto;margin-top:50px;position:-webkit-sticky;position:sticky;bottom:1rem;align-self:flex-end}.done[_ngcontent-%COMP%]{background:-webkit-linear-gradient(top,#fff 1%,#b7e6c1 99%)}.expired[_ngcontent-%COMP%]{background:-webkit-linear-gradient(top,#fff 1%,#fd0000 99%)}table[_ngcontent-%COMP%]{width:100%}.card-size[_ngcontent-%COMP%]{width:100%;margin-top:50px}td.mat-cell[_ngcontent-%COMP%]{padding:20px 0;border:none}.mat-column-name[_ngcontent-%COMP%]{flex:0 0 60%!important;width:60%!important}.mat-column-name[_ngcontent-%COMP%], .mat-column-position[_ngcontent-%COMP%]{word-wrap:break-word!important;white-space:unset!important;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;-ms-hyphens:auto;-webkit-hyphens:auto;hyphens:auto}.mat-column-position[_ngcontent-%COMP%]{flex:0 0 7%!important;width:7%!important}"]}),ht),kt=((mt=function t(){_classCallCheck(this,t)}).\u0275mod=g.Nb({type:mt}),mt.\u0275inj=g.Mb({factory:function(t){return new(t||mt)},providers:[].concat(P,I,U),imports:[[m.c,p.c,h.n,h.f,O.b,$.b]]}),mt),vt=a("cxgq");function yt(t,e){if(1&t){var a=g.Wb();g.Vb(0,"button",5),g.dc("click",(function(){return g.wc(a),g.hc()._auth.logOut()})),g.Vb(1,"mat-icon"),g.Dc(2,"exit_to_app"),g.Ub(),g.Ub()}}function Ct(t,e){1&t&&g.Qb(0,"app-project",6),2&t&&g.nc("data",e.$implicit)}function Dt(t,e){if(1&t){var a=g.Wb();g.Vb(0,"button",7),g.dc("click",(function(){return g.wc(a),g.hc().createProjectDialog()})),g.Vb(1,"mat-icon"),g.Dc(2,"add"),g.Ub(),g.Ub()}}var _t,Ut,wt,St=function(){return{fullScreenBackdrop:!0}},Vt=((Ut=function(){function t(e,a,n,r,o){_classCallCheck(this,t),this._auth=e,this._dataService=a,this._dialog=n,this._projectService=r,this._loaderServ=o,this.fetched=!1,this.loaded=this._loaderServ.isLoading,this.config={animationType:$.c.doubleBounce,backdropBackgroundColour:"rgba(0, 255, 0, 0)",backdropBorderRadius:"8px",primaryColour:"#1ea",secondaryColour:"#f11",tertiaryColour:"#1ee"}}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this._dataService.getData$(this._auth.UserId).subscribe((function(e){t.userData=e}))}},{key:"createProjectDialog",value:function(){var t=this;this.createProjectDialogRef=this._dialog.open(G,{data:{task:""}}),this.createProjectDialogRef.afterClosed().subscribe((function(e){e&&t._projectService.createProject$(e.task).subscribe((function(){t._dataService.getData$(t._auth.UserId).subscribe((function(e){t.userData=e}))}),(function(t){return alert(t.message)}))}))}}]),t}()).\u0275fac=function(t){return new(t||Ut)(g.Pb(C.a),g.Pb(D),g.Pb(M.b),g.Pb(V),g.Pb(vt.a))},Ut.\u0275cmp=g.Jb({type:Ut,selectors:[["app-home"]],decls:8,vars:10,consts:[[3,"show","config"],["id","exit","mat-icon-button","","color","warn",3,"click",4,"ngIf"],[3,"data",4,"ngFor","ngForOf"],["id","add","mat-fab","","color","primary",3,"click",4,"ngIf"],["id","loader"],["id","exit","mat-icon-button","","color","warn",3,"click"],[3,"data"],["id","add","mat-fab","","color","primary",3,"click"]],template:function(t,e){1&t&&(g.Vb(0,"div"),g.Qb(1,"ngx-loading",0),g.Cc(2,yt,3,0,"button",1),g.Cc(3,Ct,1,1,"app-project",2),g.Cc(4,Dt,3,0,"button",3),g.Vb(5,"div",4),g.Qb(6,"ngx-loading",0),g.ic(7,"async"),g.Ub(),g.Ub()),2&t&&(g.Db(1),g.nc("show",!e.userData)("config",g.oc(9,St)),g.Db(1),g.nc("ngIf",e.userData),g.Db(1),g.nc("ngForOf",e.userData),g.Db(1),g.nc("ngIf",e.userData),g.Db(2),g.nc("show",g.jc(7,7,e.loaded))("config",e.config))},directives:[$.a,m.l,m.k,N.a,H.a,gt],pipes:[m.b],styles:["#exit[_ngcontent-%COMP%]{float:right;top:1rem;right:1rem}#add[_ngcontent-%COMP%], #exit[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky}#add[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto;margin-top:50px;bottom:1rem;align-self:flex-end}#loader[_ngcontent-%COMP%]{position:fixed;bottom:5%;right:5%}"]}),Ut),jt=((_t=function t(){_classCallCheck(this,t)}).\u0275mod=g.Nb({type:_t}),_t.\u0275inj=g.Mb({factory:function(t){return new(t||_t)},providers:[].concat(_,k),imports:[[m.c,p.c,h.n,h.f,kt,O.b,$.b]]}),_t),Tt=[{path:"home",canActivate:[],component:Vt}],Pt=((wt=function t(){_classCallCheck(this,t)}).\u0275mod=g.Nb({type:wt}),wt.\u0275inj=g.Mb({factory:function(t){return new(t||wt)},imports:[[jt,p.c.forChild(Tt)],p.c]}),wt)}}]);