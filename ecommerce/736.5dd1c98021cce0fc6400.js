(self.webpackChunkecommerce=self.webpackChunkecommerce||[]).push([[736],{9736:(e,n,t)=>{"use strict";t.r(n),t.d(n,{AuthProfileModule:()=>m});var r=t(1116),i=t(4587),o=t(8619);let s=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-auth-profile"]],decls:1,vars:0,template:function(e,n){1&e&&o._UZ(0,"router-outlet")},directives:[i.lC],styles:[""]}),e})();var a=t(6122),g=t(1462);const l=[{path:"",component:s,children:[{path:"login",component:(()=>{class e{constructor(e,n){this.authService=e,this.router=n,this.email="",this.password=""}ngOnInit(){this.authService.user&&this.router.navigate(["/"])}login(){this.email||alertDanger("ES NECESARIO INGRESAR EL EMAIL"),this.password||alertDanger("ES NECESARIO INGRESAR UNA CONTRASE\xd1A"),this.authService.login(this.email,this.password).subscribe(e=>{console.log(e),!e.error&&e?location.reload():alertDanger(e.error.message)})}}return e.\u0275fac=function(n){return new(n||e)(o.Y36(a.e),o.Y36(i.F0))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-login"]],decls:38,vars:2,consts:[[1,"axil-signin-area"],[1,"signin-header"],[1,"row","align-items-center"],[1,"col-sm-4"],["href","index.html",1,"site-logo"],["src","./assets/images/logo/logo.png","alt","logo"],[1,"col-sm-8"],[1,"singin-header-btn"],["href","sign-up.html",1,"axil-btn","btn-bg-secondary","sign-up-btn"],[1,"row"],[1,"col-xl-4","col-lg-6"],[1,"axil-signin-banner","bg_image","bg_image--9"],[1,"title"],[1,"col-lg-6","offset-xl-2"],[1,"axil-signin-form-wrap"],[1,"axil-signin-form"],[1,"b2","mb--55"],[1,"singin-form"],[1,"form-group"],["type","email","name","email",1,"form-control",3,"ngModel","ngModelChange"],["type","password","name","password",1,"form-control",3,"ngModel","ngModelChange"],[1,"form-group","d-flex","align-items-center","justify-content-between"],["type","submit",1,"axil-btn","btn-bg-primary","submit-btn",3,"click"],["href","forgot-password.html",1,"forgot-btn"]],template:function(e,n){1&e&&(o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.TgZ(2,"div",2),o.TgZ(3,"div",3),o.TgZ(4,"a",4),o._UZ(5,"img",5),o.qZA(),o.qZA(),o.TgZ(6,"div",6),o.TgZ(7,"div",7),o.TgZ(8,"p"),o._uU(9,"Not a member?"),o.qZA(),o.TgZ(10,"a",8),o._uU(11,"Sign Up Now"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.TgZ(12,"div",9),o.TgZ(13,"div",10),o.TgZ(14,"div",11),o.TgZ(15,"h3",12),o._uU(16,"We Offer the Best Products"),o.qZA(),o.qZA(),o.qZA(),o.TgZ(17,"div",13),o.TgZ(18,"div",14),o.TgZ(19,"div",15),o.TgZ(20,"h3",12),o._uU(21,"Sign in to eTrade."),o.qZA(),o.TgZ(22,"p",16),o._uU(23,"Enter your detail below"),o.qZA(),o.TgZ(24,"form",17),o.TgZ(25,"div",18),o.TgZ(26,"label"),o._uU(27,"Email"),o.qZA(),o.TgZ(28,"input",19),o.NdJ("ngModelChange",function(e){return n.email=e}),o.qZA(),o.qZA(),o.TgZ(29,"div",18),o.TgZ(30,"label"),o._uU(31,"Password"),o.qZA(),o.TgZ(32,"input",20),o.NdJ("ngModelChange",function(e){return n.password=e}),o.qZA(),o.qZA(),o.TgZ(33,"div",21),o.TgZ(34,"button",22),o.NdJ("click",function(){return n.login()}),o._uU(35,"INGRESAR"),o.qZA(),o.TgZ(36,"a",23),o._uU(37,"Forget password?"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&e&&(o.xp6(28),o.Q6J("ngModel",n.email),o.xp6(4),o.Q6J("ngModel",n.password))},directives:[g._Y,g.JL,g.F,g.Fj,g.JJ,g.On],styles:[""]}),e})()},{path:"registro",component:(()=>{class e{constructor(e,n){this.authServices=e,this.router=n,this.email="",this.name="",this.surname="",this.password="",this.repet_password=""}ngOnInit(){this.authServices.user&&this.router.navigate(["/"])}registro(){this.email&&this.name&&this.surname&&this.password&&this.repet_password||alertDanger("TODOS LOS CAMPOS SON REQUERIDOS"),this.password!=this.repet_password&&alertDanger("LAS CONTRASE\xd1AS DEBEN SER IGUALES"),this.authServices.registro({email:this.email,name:this.name,surname:this.surname,password:this.password,rol:"cliente"}).subscribe(e=>{console.log(e)})}}return e.\u0275fac=function(n){return new(n||e)(o.Y36(a.e),o.Y36(i.F0))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-register"]],decls:48,vars:5,consts:[[1,"axil-signin-area"],[1,"signin-header"],[1,"row","align-items-center"],[1,"col-md-6"],["href","index.html",1,"site-logo"],["src","./assets/images/logo/logo.png","alt","logo"],[1,"singin-header-btn"],["href","sign-in.html",1,"axil-btn","btn-bg-secondary","sign-up-btn"],[1,"row"],[1,"col-xl-4","col-lg-6"],[1,"axil-signin-banner","bg_image","bg_image--10"],[1,"title"],[1,"col-lg-6","offset-xl-2"],[1,"axil-signin-form-wrap"],[1,"axil-signin-form"],[1,"b2","mb--55"],[1,"singin-form"],[1,"form-group"],["type","text","name","name",1,"form-control",3,"ngModel","ngModelChange"],["type","text","name","surname",1,"form-control",3,"ngModel","ngModelChange"],["type","email","name","email",1,"form-control",3,"ngModel","ngModelChange"],["type","password","name","password",1,"form-control",3,"ngModel","ngModelChange"],["type","password","name","repet_password",1,"form-control",3,"ngModel","ngModelChange"],["type","submit",1,"axil-btn","btn-bg-primary","submit-btn",3,"click"]],template:function(e,n){1&e&&(o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.TgZ(2,"div",2),o.TgZ(3,"div",3),o.TgZ(4,"a",4),o._UZ(5,"img",5),o.qZA(),o.qZA(),o.TgZ(6,"div",3),o.TgZ(7,"div",6),o.TgZ(8,"p"),o._uU(9,"Already a member?"),o.qZA(),o.TgZ(10,"a",7),o._uU(11,"Sign In"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.TgZ(12,"div",8),o.TgZ(13,"div",9),o.TgZ(14,"div",10),o.TgZ(15,"h3",11),o._uU(16,"We Offer the Best Products"),o.qZA(),o.qZA(),o.qZA(),o.TgZ(17,"div",12),o.TgZ(18,"div",13),o.TgZ(19,"div",14),o.TgZ(20,"h3",11),o._uU(21,"I'm New Here"),o.qZA(),o.TgZ(22,"p",15),o._uU(23,"Enter your detail below"),o.qZA(),o.TgZ(24,"form",16),o.TgZ(25,"div",17),o.TgZ(26,"label"),o._uU(27,"Nombre completos: *"),o.qZA(),o.TgZ(28,"input",18),o.NdJ("ngModelChange",function(e){return n.name=e}),o.qZA(),o.qZA(),o.TgZ(29,"div",17),o.TgZ(30,"label"),o._uU(31,"Apellidos completos: *"),o.qZA(),o.TgZ(32,"input",19),o.NdJ("ngModelChange",function(e){return n.surname=e}),o.qZA(),o.qZA(),o.TgZ(33,"div",17),o.TgZ(34,"label"),o._uU(35,"Email: *"),o.qZA(),o.TgZ(36,"input",20),o.NdJ("ngModelChange",function(e){return n.email=e}),o.qZA(),o.qZA(),o.TgZ(37,"div",17),o.TgZ(38,"label"),o._uU(39,"Contrase\xf1a: *"),o.qZA(),o.TgZ(40,"input",21),o.NdJ("ngModelChange",function(e){return n.password=e}),o.qZA(),o.qZA(),o.TgZ(41,"div",17),o.TgZ(42,"label"),o._uU(43,"Repetir Contrase\xf1a: *"),o.qZA(),o.TgZ(44,"input",22),o.NdJ("ngModelChange",function(e){return n.repet_password=e}),o.qZA(),o.qZA(),o.TgZ(45,"div",17),o.TgZ(46,"button",23),o.NdJ("click",function(){return n.registro()}),o._uU(47,"Registrar Cuenta"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&e&&(o.xp6(28),o.Q6J("ngModel",n.name),o.xp6(4),o.Q6J("ngModel",n.surname),o.xp6(4),o.Q6J("ngModel",n.email),o.xp6(4),o.Q6J("ngModel",n.password),o.xp6(4),o.Q6J("ngModel",n.repet_password))},directives:[g._Y,g.JL,g.F,g.Fj,g.JJ,g.On],styles:[""]}),e})()}]}];let Z=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[i.Bz.forChild(l)],i.Bz]}),e})();var d=t(5425),u=t(2693);let m=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[r.ez,Z,d.m,g.u5,g.UX,u.JF,i.Bz]]}),e})()}}]);