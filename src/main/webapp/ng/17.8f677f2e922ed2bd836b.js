(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{FQVY:function(l,n,e){"use strict";e.d(n,"a",function(){return o});var t=e("t/Na"),o=(e("SbLv"),e("yu8m"),function(){function l(l,n,e){this.http=l,this.config=n,this.Cookie=e,this.data=[],this.urlTipoTratamientoGET=n.ENDPOINT+"/SeguridadApp/generales/tipo/tratamiento",this.urlGeneradorRiesgoGET=n.ENDPOINT+"/SeguridadApp/generales/generador/riesgo",this.urlResponsableGET=n.ENDPOINT+"/SeguridadApp/generales/responsable",this.urlTipoBrechaGET=n.ENDPOINT+"/SeguridadApp/generales/tipo/brecha",this.urlTipoImpactoGET=n.ENDPOINT+"/SeguridadApp/generales/tipo/impacto",this.urlTipoRiesgoGET=n.ENDPOINT+"/SeguridadApp/generales/tipo/riesgo",this.urlClasificacionGET=n.ENDPOINT+"/SeguridadApp/generales/clasificacion",this.urlArquitecturaAplicacionGET=n.ENDPOINT+"/SeguridadApp/generales/arqui/app",this.urlActivoGET=n.ENDPOINT+"/SeguridadApp/generales/activo",this.urlCapasRiesgoGET=n.ENDPOINT+"/SeguridadApp/generales/riesgo/capa",this.urlSolucionGET=n.ENDPOINT+"/SeguridadApp/generales/solucion"}return l.prototype.getTipoTratamiento=function(){var l=new t.g;return l=l.set("Authorization","Bearer "+this.Cookie.get("access_token")),this.http.get(this.urlTipoTratamientoGET,{headers:l})},l.prototype.getTipoRiesgo=function(){var l=new t.g;return l=l.set("Authorization","Bearer "+this.Cookie.get("access_token")),this.http.get(this.urlTipoRiesgoGET,{headers:l})},l.prototype.getTipoBrecha=function(){var l=new t.g;return l=l.set("Authorization","Bearer "+this.Cookie.get("access_token")),this.http.get(this.urlTipoBrechaGET,{headers:l})},l.prototype.getTipoImpacto=function(){var l=new t.g;return l=l.set("Authorization","Bearer "+this.Cookie.get("access_token")),this.http.get(this.urlTipoImpactoGET,{headers:l})},l.prototype.getGeneradorRiesgo=function(){var l=new t.g;return l=l.set("Authorization","Bearer "+this.Cookie.get("access_token")),this.http.get(this.urlGeneradorRiesgoGET,{headers:l})},l.prototype.getResponsable=function(){var l=new t.g;return l=l.set("Authorization","Bearer "+this.Cookie.get("access_token")),this.http.get(this.urlResponsableGET,{headers:l})},l.prototype.getClasificacion=function(){var l=new t.g;return l=l.set("Authorization","Bearer "+this.Cookie.get("access_token")),this.http.get(this.urlClasificacionGET,{headers:l})},l.prototype.getArquitecturaAplicacion=function(){var l=new t.g;return l=l.set("Authorization","Bearer "+this.Cookie.get("access_token")),this.http.get(this.urlArquitecturaAplicacionGET,{headers:l})},l.prototype.getCapasRiesgo=function(){var l=new t.g;return l=l.set("Authorization","Bearer "+this.Cookie.get("access_token")),this.http.get(this.urlCapasRiesgoGET,{headers:l})},l.prototype.getActivos=function(){var l=new t.g;return l=l.set("Authorization","Bearer "+this.Cookie.get("access_token")),this.http.get(this.urlActivoGET,{headers:l})},l.prototype.getSoluciones=function(){var l=new t.g;return l=l.set("Authorization","Bearer "+this.Cookie.get("access_token")),this.http.get(this.urlSolucionGET,{headers:l})},l}())},poeG:function(l,n,e){"use strict";e.r(n);var t=e("CcnG"),o=function(){return function(){}}(),u=e("pMnS"),r=e("9o+3"),i=e("nKAJ"),a=e("Ip0R"),s=e("gIcY"),p=e("773j"),d=e("3g29"),c=e("d/ut"),g=e("jvMH"),m=e("QW/R"),h=e("gQjB"),v=e("FQVY"),f=e("ysoW"),b=e("OaWH"),C=function(){function l(l,n,e,t){this.formBuilder=l,this.generalService=n,this.generalAddService=e,this.appService=t,this.impactos=[],this.getImpactos()}return l.prototype.ngOnInit=function(){this.tipoImpacto=this.formBuilder.group({nombre:["",[s.Validators.required]]})},l.prototype.onSubmitForm=function(){var l=this,n={};n.nombre=this.tipoImpacto.value.nombre,this.appService.obtainAccessToken(null).subscribe(function(e){l.appService.saveToken(e),l.generalAddService.postTipoImpacto(n).subscribe(function(n){alert(n.message),l.getImpactos(),l.tipoImpacto.reset()},function(l){console.log("error"+l),alert("Ocurrio un error al guardar")})})},l.prototype.getImpactos=function(){var l=this;this.appService.obtainAccessToken(null).subscribe(function(n){l.appService.saveToken(n),l.generalService.getTipoImpacto().subscribe(function(n){l.impactos=n},function(l){alert(l)})})},l}(),T=t["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function k(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t["\u0275ted"](2,null,["",""])),(l()(),t["\u0275eld"](3,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t["\u0275ted"](4,null,["",""]))],null,function(l,n){l(n,2,0,n.context.$implicit.idTipoImpacto),l(n,4,0,n.context.$implicit.nombre)})}function E(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,59,"div",[["class","row"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,15,"div",[["class","col-md-6 col-xs-12"]],null,null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,14,"mk-box",[["contentClasses","table-responsive"],["header","Tipos de Impacto"]],null,null,null,r.b,r.a)),t["\u0275did"](3,4374528,null,4,i.a,[t.ChangeDetectorRef,t.NgZone,t.Renderer2],{header:[0,"header"],isCollapsable:[1,"isCollapsable"],isRemovable:[2,"isRemovable"]},null),t["\u0275qud"](335544320,1,{boxHeaderDirective:0}),t["\u0275qud"](335544320,2,{boxFooterDirective:0}),t["\u0275qud"](335544320,3,{boxContentDirective:0}),t["\u0275qud"](335544320,4,{boxToolsDirective:0}),(l()(),t["\u0275eld"](8,0,null,3,8,"table",[["class","table table-bordered table-hover"]],null,null,null,null,null)),(l()(),t["\u0275eld"](9,0,null,null,7,"tbody",[],null,null,null,null,null)),(l()(),t["\u0275eld"](10,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),t["\u0275eld"](11,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["ID"])),(l()(),t["\u0275eld"](13,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Nombre"])),(l()(),t["\u0275and"](16777216,null,null,1,null,k)),t["\u0275did"](16,278528,null,0,a.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),t["\u0275eld"](17,0,null,null,42,"div",[["class","col-md-6 col-xs-12"]],null,null,null,null,null)),(l()(),t["\u0275eld"](18,0,null,null,41,"mk-box",[["contentClasses","table-responsive"],["header","Agregar Tipo de Impacto"]],null,null,null,r.b,r.a)),t["\u0275did"](19,4374528,null,4,i.a,[t.ChangeDetectorRef,t.NgZone,t.Renderer2],{header:[0,"header"],isCollapsable:[1,"isCollapsable"],isRemovable:[2,"isRemovable"]},null),t["\u0275qud"](335544320,5,{boxHeaderDirective:0}),t["\u0275qud"](335544320,6,{boxFooterDirective:0}),t["\u0275qud"](335544320,7,{boxContentDirective:0}),t["\u0275qud"](335544320,8,{boxToolsDirective:0}),(l()(),t["\u0275eld"](24,0,null,3,35,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,e){var o=!0,u=l.component;return"submit"===n&&(o=!1!==t["\u0275nov"](l,26).onSubmit(e)&&o),"reset"===n&&(o=!1!==t["\u0275nov"](l,26).onReset()&&o),"ngSubmit"===n&&(o=!1!==u.onSubmitForm()&&o),o},null,null)),t["\u0275did"](25,16384,null,0,s["\u0275angular_packages_forms_forms_bh"],[],null,null),t["\u0275did"](26,540672,null,0,s.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t["\u0275prd"](2048,null,s.ControlContainer,null,[s.FormGroupDirective]),t["\u0275did"](28,16384,null,0,s.NgControlStatusGroup,[[4,s.ControlContainer]],null,null),(l()(),t["\u0275eld"](29,0,null,null,27,"mk-input-group",[["inputErrorColor","warning"]],null,null,null,p.b,p.a)),t["\u0275did"](30,1228800,null,5,d.a,[],{inputErrorColor:[0,"inputErrorColor"]},null),t["\u0275qud"](335544320,9,{inputGroupLabelDirective:0}),t["\u0275qud"](335544320,10,{inputGroupAddonLeftDirective:0}),t["\u0275qud"](335544320,11,{inputGroupAddonRightDirective:0}),t["\u0275qud"](335544320,12,{inputGroupContentDirective:0}),t["\u0275qud"](335544320,13,{inputTextDirective:0}),(l()(),t["\u0275eld"](36,0,null,0,2,"mk-input-group-label",[],null,null,null,null,null)),t["\u0275did"](37,16384,[[9,4]],0,c.d,[],null,null),(l()(),t["\u0275ted"](-1,null,["Nombre del Impacto"])),(l()(),t["\u0275eld"](39,0,null,1,2,"mk-input-group-addon-left",[],null,null,null,null,null)),t["\u0275did"](40,16384,[[10,4]],0,c.a,[],null,null),(l()(),t["\u0275eld"](41,0,null,null,0,"i",[["class","fa fa-user"]],null,null,null,null,null)),(l()(),t["\u0275eld"](42,0,null,3,3,"mk-input-group-addon-right",[],null,null,null,null,null)),t["\u0275did"](43,16384,[[11,4]],0,c.b,[],null,null),(l()(),t["\u0275eld"](44,0,null,null,1,"i",[],null,null,null,null,null)),t["\u0275did"](45,278528,null,0,a.NgClass,[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2],{ngClass:[0,"ngClass"]},null),(l()(),t["\u0275eld"](46,0,null,2,10,"mk-input-group-content",[],null,null,null,null,null)),t["\u0275did"](47,16384,[[12,4]],0,c.c,[],null,null),(l()(),t["\u0275eld"](48,0,null,null,8,"input",[["class","toto form-control"],["formControlName","nombre"],["mkInputText",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"keyup"]],function(l,n,e){var o=!0;return"input"===n&&(o=!1!==t["\u0275nov"](l,49)._handleInput(e.target.value)&&o),"blur"===n&&(o=!1!==t["\u0275nov"](l,49).onTouched()&&o),"compositionstart"===n&&(o=!1!==t["\u0275nov"](l,49)._compositionStart()&&o),"compositionend"===n&&(o=!1!==t["\u0275nov"](l,49)._compositionEnd(e.target.value)&&o),"keyup"===n&&(o=!1!==t["\u0275nov"](l,56).keyUpListener()&&o),o},null,null)),t["\u0275did"](49,16384,null,0,s.DefaultValueAccessor,[t.Renderer2,t.ElementRef,[2,s.COMPOSITION_BUFFER_MODE]],null,null),t["\u0275prd"](1024,null,s.NG_VALUE_ACCESSOR,function(l){return[l]},[s.DefaultValueAccessor]),t["\u0275did"](51,671744,null,0,s.FormControlName,[[3,s.ControlContainer],[8,null],[8,null],[6,s.NG_VALUE_ACCESSOR],[2,s["\u0275angular_packages_forms_forms_k"]]],{name:[0,"name"]},null),t["\u0275prd"](2048,null,s.NgControl,null,[s.FormControlName]),t["\u0275did"](53,16384,null,0,s.NgControlStatus,[[4,s.NgControl]],null,null),t["\u0275prd"](512,null,g.a,g.a,[t.Renderer2,t.ElementRef]),t["\u0275prd"](512,null,m.a,m.a,[t.ElementRef,t.Renderer2]),t["\u0275did"](56,81920,[[13,4]],0,h.a,[t.ElementRef,t.Renderer2,s.NgControl,g.a,m.a],{class:[0,"class"]},null),(l()(),t["\u0275eld"](57,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t["\u0275eld"](58,0,null,null,1,"button",[["class","btn btn-primary"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(l()(),t["\u0275ted"](-1,null,[" Crear "]))],function(l,n){var e=n.component;l(n,3,0,"Tipos de Impacto",!0,!1),l(n,16,0,e.impactos),l(n,19,0,"Agregar Tipo de Impacto",!0,!1),l(n,26,0,e.tipoImpacto),l(n,30,0,"warning"),l(n,45,0,e.tipoImpacto.invalid?"fa fa-times":"fa fa-check"),l(n,51,0,"nombre"),l(n,56,0,"toto form-control")},function(l,n){var e=n.component;l(n,24,0,t["\u0275nov"](n,28).ngClassUntouched,t["\u0275nov"](n,28).ngClassTouched,t["\u0275nov"](n,28).ngClassPristine,t["\u0275nov"](n,28).ngClassDirty,t["\u0275nov"](n,28).ngClassValid,t["\u0275nov"](n,28).ngClassInvalid,t["\u0275nov"](n,28).ngClassPending),l(n,48,0,t["\u0275nov"](n,53).ngClassUntouched,t["\u0275nov"](n,53).ngClassTouched,t["\u0275nov"](n,53).ngClassPristine,t["\u0275nov"](n,53).ngClassDirty,t["\u0275nov"](n,53).ngClassValid,t["\u0275nov"](n,53).ngClassInvalid,t["\u0275nov"](n,53).ngClassPending),l(n,58,0,e.tipoImpacto.invalid)})}function _(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"ng-component",[],null,null,null,E,T)),t["\u0275did"](1,114688,null,0,C,[s.FormBuilder,v.a,f.a,b.a],null,null)],function(l,n){l(n,1,0)},null)}var A=t["\u0275ccf"]("ng-component",C,_,{},{},[]),I=e("t/Na"),N=e("yu8m"),R=e("SbLv"),S=e("lp/B"),D=e("k3IM"),G=e("RyNk"),y=e("ZYCi"),F=function(){return function(){}}(),O=e("/hVk"),B=e("9bCd");e.d(n,"InputTextModuleNgFactory",function(){return w});var w=t["\u0275cmf"](o,[],function(l){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[u.a,A]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,a.NgLocalization,a.NgLocaleLocalization,[t.LOCALE_ID,[2,a["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,s["\u0275angular_packages_forms_forms_j"],s["\u0275angular_packages_forms_forms_j"],[]),t["\u0275mpd"](4608,s.FormBuilder,s.FormBuilder,[]),t["\u0275mpd"](4608,v.a,v.a,[I.c,N.a,R.a]),t["\u0275mpd"](4608,f.a,f.a,[I.c,N.a,R.a]),t["\u0275mpd"](1073742336,a.CommonModule,a.CommonModule,[]),t["\u0275mpd"](1073742336,s["\u0275angular_packages_forms_forms_bc"],s["\u0275angular_packages_forms_forms_bc"],[]),t["\u0275mpd"](1073742336,s.FormsModule,s.FormsModule,[]),t["\u0275mpd"](1073742336,s.ReactiveFormsModule,s.ReactiveFormsModule,[]),t["\u0275mpd"](1073742336,S.a,S.a,[]),t["\u0275mpd"](1073742336,D.a,D.a,[]),t["\u0275mpd"](1073742336,G.a,G.a,[]),t["\u0275mpd"](1073742336,y.s,y.s,[[2,y.y],[2,y.q]]),t["\u0275mpd"](1073742336,F,F,[]),t["\u0275mpd"](1073742336,O.a,O.a,[]),t["\u0275mpd"](1073742336,B.a,B.a,[]),t["\u0275mpd"](1073742336,N.c,N.c,[]),t["\u0275mpd"](1073742336,o,o,[]),t["\u0275mpd"](1024,y.o,function(){return[[{path:"",component:C}]]},[]),t["\u0275mpd"](256,N.a,N.b,[])])})}}]);