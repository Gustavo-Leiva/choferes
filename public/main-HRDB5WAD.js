import{$ as le,A as E,B as h,Ba as L,C as l,D as ee,F as te,G as a,H as k,I as C,J as _,K as w,L as M,M as g,O as ne,P as oe,R as y,S,T as ie,U as re,V as ae,W as se,X as P,Z as ce,_ as pe,aa as me,ba as de,c as Y,ca as ge,d as J,da as ue,ea as fe,fa as xe,ga as he,h as K,j as Q,ja as be,k as d,ka as I,m as u,ma as j,n as f,oa as D,pa as R,q as Z,qa as A,r as c,ra as U,s as m,sa as z,t as b,u as x,v as o,w as i,x as v,y as X,z as $,za as F}from"./chunk-XDI6FCTQ.js";var N=class n{constructor(t){this.http=t;this.datos=new J,this.obtenerDatosUsuario()}datos;obtenerDatosUsuario(){this.http.get("https://api.github.com/users/gustavo-leiva").subscribe(t=>{this.datos.next(t)})}static \u0275fac=function(e){return new(e||n)(Q(ie))};static \u0275prov=K({token:n,factory:n.\u0275fac,providedIn:"root"})};function Se(n,t){if(n&1){let e=E();X(0),o(1,"span",17),a(2),i(),o(3,"a",18),h("click",function(){u(e);let s=l();return f(s.logout())}),a(4,"Cerrar Sesi\xF3n"),i(),$()}if(n&2){let e=l();c(2),k(e.authService.userActive.email)}}function Pe(n,t){n&1&&(o(0,"a",19),a(1,"Iniciar Sesi\xF3n"),i(),o(2,"a",20),a(3,"Registrarse"),i())}var T=class n{constructor(t,e,r){this.authService=t;this.gitServ=e;this.router=r}subsDatos;usuario;imagen;cantidadRepos;isMenuOpen=!1;ngOnInit(){this.gitServ.obtenerDatosUsuario(),this.subsDatos=this.gitServ.datos.subscribe(t=>{this.usuario=t.login,this.imagen=t.avatar_url,this.cantidadRepos=t.public_repos})}toggleMenu(){this.isMenuOpen=!this.isMenuOpen}ngOnDestroy(){this.subsDatos.unsubscribe()}logout(){this.authService.logout()}NavegarChoferes(t){this.authService.getUser()!=null?this.router.navigate([`/choferes/${t}`]):this.router.navigateByUrl("login")}NavegarChoferesSinAcceso(t){this.router.navigate([`/productos/${t}`])}static \u0275fac=function(e){return new(e||n)(m(I),m(N),m(P))};static \u0275cmp=d({type:n,selectors:[["app-bienvenida"]],standalone:!0,features:[g],decls:27,vars:5,consts:[["loggedOut",""],[1,"navbar"],[1,"navbar-left"],["src","assets/imagenes/logo.jpg","alt","Producto Icon",1,"navbar-icon"],[1,"navbar-title"],[1,"navbar-center"],["href","/home",1,"nav-link"],[1,"dropdown"],[1,"dropdown-toggle"],[1,"dropdown-menu"],[1,"dropdown-item",3,"click"],[1,"navbar-right"],[4,"ngIf","ngIfElse"],[1,"central"],[1,"div-texto"],[1,"texto"],["alt","Imagen del usuario",1,"imagen-usuario",3,"src"],[1,"user-email"],[1,"nav-link","logout",3,"click"],["href","/login",1,"nav-link"],["href","/registro",1,"nav-link"]],template:function(e,r){if(e&1){let s=E();o(0,"body")(1,"nav",1)(2,"div",2),v(3,"img",3),o(4,"span",4),a(5,"Gestion de choferes"),i()(),o(6,"div",5)(7,"a",6),a(8,"Home"),i(),o(9,"div",7)(10,"button",8),a(11,"Choferes"),i(),o(12,"div",9)(13,"a",10),h("click",function(){return u(s),f(r.NavegarChoferes("alta-chofer"))}),a(14,"Alta Choferes"),i()()()(),o(15,"div",11),b(16,Se,5,1,"ng-container",12)(17,Pe,4,0,"ng-template",null,0,ne),i()(),o(19,"div",13)(20,"div",14)(21,"h1",15),a(22),i()(),o(23,"div",14)(24,"h1",15),a(25),i()(),v(26,"img",16),i()()}if(e&2){let s=te(18);c(16),x("ngIf",r.authService.userActive)("ngIfElse",s),c(6),C("Usuario: ",r.usuario,""),c(3),C("Cantidad de repositorios p\xFAblicos: ",r.cantidadRepos,""),c(),ee("src",r.imagen,Z)}},dependencies:[pe,S,y],styles:["body[_ngcontent-%COMP%]{background-color:#f4f4f4;margin:0;font-family:Roboto,sans-serif}.navbar[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:15px 30px;background-color:#333;color:#fff;position:fixed;width:100%;top:0;z-index:1000;box-sizing:border-box;flex-wrap:wrap}.navbar-left[_ngcontent-%COMP%], .navbar-center[_ngcontent-%COMP%], .navbar-right[_ngcontent-%COMP%]{display:flex;align-items:center}.navbar-left[_ngcontent-%COMP%]{flex:1}.navbar-right[_ngcontent-%COMP%]{flex:1;justify-content:flex-end}.navbar-center[_ngcontent-%COMP%]{flex:2;justify-content:center}.navbar-icon[_ngcontent-%COMP%]{width:40px;height:40px;margin-right:15px}.navbar-title[_ngcontent-%COMP%]{font-size:1.8rem;font-weight:700;letter-spacing:1px}.nav-link[_ngcontent-%COMP%]{color:#fff;text-decoration:none;margin:0 15px;padding:10px 15px;border-radius:4px;font-size:1rem;white-space:nowrap;transition:background-color .3s}.nav-link[_ngcontent-%COMP%]:hover{background-color:#444}.central[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;background-color:#fff;padding:30px;border-radius:12px;box-shadow:0 8px 30px #0000001a;max-width:600px;margin:20px auto;transition:transform .3s}.central[_ngcontent-%COMP%]:hover{transform:translateY(-5px)}.div-texto[_ngcontent-%COMP%]{margin:15px 0}.texto[_ngcontent-%COMP%]{font-size:26px;color:#333;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;font-weight:600}.imagen-usuario[_ngcontent-%COMP%]{width:120px;height:120px;border-radius:50%;margin-top:20px;border:4px solid #007bff;box-shadow:0 4px 20px #0003;transition:transform .3s}.imagen-usuario[_ngcontent-%COMP%]:hover{transform:scale(1.05)}.dropdown[_ngcontent-%COMP%]{position:relative}.dropdown-toggle[_ngcontent-%COMP%]{background-color:#333;color:#fff;border:none;padding:10px 15px;cursor:pointer;font-size:1rem;border-radius:4px;transition:background-color .3s}.dropdown-toggle[_ngcontent-%COMP%]:hover{background-color:#444}.dropdown-menu[_ngcontent-%COMP%]{display:none;position:absolute;top:100%;right:0;background-color:#fff;color:#333;border:1px solid #ddd;border-radius:5px;box-shadow:0 8px 16px #0003;min-width:160px;z-index:1000}.dropdown-item[_ngcontent-%COMP%]{display:block;padding:10px;text-decoration:none;color:#333}.dropdown-item[_ngcontent-%COMP%]:hover{background-color:#f0f0f0}.dropdown[_ngcontent-%COMP%]:hover   .dropdown-menu[_ngcontent-%COMP%]{display:block}"]})};var W=class{constructor(t,e){this.nombre=t;this.clave=e}};function Oe(n,t){n&1&&(o(0,"div",4),v(1,"div",5),i())}function ke(n,t){if(n&1&&(o(0,"div",14)(1,"p"),a(2),i()()),n&2){let e=l(2);c(2),k(e.msjError)}}function Ie(n,t){if(n&1){let e=E();o(0,"form",6),h("ngSubmit",function(){u(e);let s=l();return f(s.LoginUser())}),o(1,"div",7)(2,"input",8),M("ngModelChange",function(s){u(e);let p=l();return w(p.email,s)||(p.email=s),f(s)}),i()(),o(3,"div",7)(4,"input",9),M("ngModelChange",function(s){u(e);let p=l();return w(p.password,s)||(p.password=s),f(s)}),i()(),o(5,"button",10),h("click",function(){u(e);let s=l();return f(s.UsuarioEmpleado())}),a(6,"Empleado"),i(),o(7,"button",10),h("click",function(){u(e);let s=l();return f(s.UsuarioAdministrador())}),a(8,"Administrador"),i(),o(9,"button",11),a(10,"Iniciar Sesi\xF3n"),i(),o(11,"p"),a(12,"\xBFno tienes una cuenta? "),o(13,"a",12),a(14,"registrate"),i()(),b(15,ke,3,1,"div",13),i()}if(n&2){let e=l();c(2),_("ngModel",e.email),c(2),_("ngModel",e.password),c(11),x("ngIf",e.flagError)}}var B=class n{constructor(t,e,r){this.router=t;this.auth=e;this.firestore=r}email="";password="";flagError=!1;loggedUser="";msjError="";usuario=new W(this.email,this.password);LoginUser(){return Y(this,null,function*(){this.auth.isLoading=!0;try{yield this.auth.Login(this.email,this.password),this.router.navigate(["/bienvenida"])}catch(t){console.log("Error de autenticaci\xF3n:",t),this.flagError=!0,this.msjError=this.getErrorMessage(t)}finally{this.auth.isLoading=!1}})}getErrorMessage(t){switch(t.code){case"auth/invalid-email":return"Email invalido";case"auth/invalid-credential":return"El email o contrase\xF1a son incorrectos";case"auth/missing-password":return"Por favor introduzca una contrase\xF1a";case"auth/too-many-requests":return"Demasiados intentos de inicio de sesi\xF3n fallidos. Intenta de nuevo m\xE1s tarde o restablece tu contrase\xF1a.";default:return"Error desconocido"}}get isLoading(){return this.auth.isLoading}UsuarioEmpleado(){this.email="empleado@gmail.com",this.password="123456"}UsuarioAdministrador(){this.email="admin@gmail.com",this.password="123456"}goTo(t){this.router.navigate([t])}static \u0275fac=function(e){return new(e||n)(m(P),m(I),m(xe))};static \u0275cmp=d({type:n,selectors:[["app-login"]],standalone:!0,features:[g],decls:9,vars:2,consts:[[1,"login-container"],[1,"login-box"],["class","spinner-container",4,"ngIf"],[3,"ngSubmit",4,"ngIf"],[1,"spinner-container"],[1,"spinner"],[3,"ngSubmit"],[1,"form-group"],["id","email","name","email","type","email","required","","placeholder","Usuario",3,"ngModelChange","ngModel"],["id","password","name","password","type","password","required","","placeholder","Contrase\xF1a",3,"ngModelChange","ngModel"],["type","button",1,"btn",3,"click"],["type","submit",1,"btn"],["href","/registro"],["class","error-message",4,"ngIf"],[1,"error-message"]],template:function(e,r){e&1&&(o(0,"body")(1,"div",0)(2,"div",1)(3,"h1"),a(4,"Login"),i(),o(5,"p"),a(6,"\xA1Ingresa tus credenciales!"),i(),b(7,Oe,2,0,"div",2)(8,Ie,16,3,"form",3),i()()()),e&2&&(c(7),x("ngIf",r.isLoading),c(),x("ngIf",!r.isLoading))},dependencies:[L,z,j,D,R,F,U,A,S,y],styles:["body[_ngcontent-%COMP%]{margin:0;padding:0;font-family:Comic Sans MS,sans-serif;background-color:#fdf6e3;background-color:#f5f5f5;display:flex;justify-content:center;align-items:center;height:100vh}.login-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:100%;height:100vh;padding:20px;box-sizing:border-box}.login-box[_ngcontent-%COMP%]{background-color:#fce4ec;padding:10px 40px 40px;border-radius:15px;box-shadow:0 8px 16px #0003;width:100%;max-width:400px;max-height:100vh;overflow-y:auto;border:3px solid #ff9800;animation:_ngcontent-%COMP%_slideDown 1s ease-out;box-sizing:border-box}.error-message[_ngcontent-%COMP%]{background-color:#f8d7da;color:#721c24;padding:10px;border-radius:5px;margin-top:15px;text-align:center;font-size:.9rem;max-width:100%;box-sizing:border-box}h1[_ngcontent-%COMP%]{text-align:center;margin-top:.4rem;font-size:2.5rem;color:#ff5722;text-shadow:2px 2px 4px rgba(0,0,0,.3);letter-spacing:2px;word-wrap:break-word}p[_ngcontent-%COMP%]{text-align:center;margin-bottom:20px;color:#333;font-size:1.1rem}.form-group[_ngcontent-%COMP%]{margin-bottom:20px}label[_ngcontent-%COMP%]{display:block;margin-bottom:8px;font-size:1rem;color:#333}input[_ngcontent-%COMP%]{width:100%;padding:10px;border-radius:8px;border:2px solid #ff9800;font-size:1rem;box-sizing:border-box}input[_ngcontent-%COMP%]:focus{outline:none;border-color:#ff5722}.btn[_ngcontent-%COMP%]{width:100%;padding:12px;margin-top:.5rem;background-color:#ff9800;border:none;border-radius:8px;color:#fff;font-size:1.2rem;cursor:pointer;transition:background-color .3s ease;text-transform:uppercase}.btn[_ngcontent-%COMP%]:hover{background-color:#e65100}@keyframes _ngcontent-%COMP%_slideDown{0%{transform:translateY(-100%);opacity:0}to{transform:translateY(0);opacity:1}}.spinner-container[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;background:#fffc;display:flex;justify-content:center;align-items:center;z-index:9999}.spinner[_ngcontent-%COMP%]{border:4px solid rgba(0,0,0,.1);border-top:4px solid #3498db;border-radius:50%;width:40px;height:40px;animation:_ngcontent-%COMP%_spin 1s linear infinite}@keyframes _ngcontent-%COMP%_spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@media (max-width: 600px){.login-box[_ngcontent-%COMP%]{padding:20px;max-width:100%;box-shadow:none}h1[_ngcontent-%COMP%]{font-size:2rem}}"]})};function je(n,t){if(n&1&&(o(0,"div",9),a(1),i()),n&2){let e=l();c(),C(" ",e.msjError," ")}}function De(n,t){if(n&1&&(o(0,"div",10),a(1),i()),n&2){let e=l();c(),C(" ",e.msjExito," ")}}var G=class n{constructor(t,e){this.auth=t;this.router=e}newUserMail="";newUserPWD="";loggedUser="";flagError=!1;msjError="";msjExito="";Register(){ue(this.auth,this.newUserMail,this.newUserPWD).then(t=>{t.user.email!==null&&(this.loggedUser=t.user.email,this.flagError=!1,this.msjExito="Usuario registrado con \xE9xito",setTimeout(()=>{this.router.navigate(["/bienvenida"])},2e3))}).catch(t=>{switch(this.flagError=!0,console.log(t),t.code){case"auth/invalid-email":this.msjError="Email invalido";break;case"auth/email-already-in-use":this.msjError="Email ya en uso";break;case"auth/weak-password":this.msjError="La contrase\xF1a debe ser de mas de 6 caracteres";break;case"auth/missing-password":this.msjError="Por favor introduzca una contrase\xF1a";break;default:this.msjError=t.code;break}})}static \u0275fac=function(e){return new(e||n)(m(de),m(P))};static \u0275cmp=d({type:n,selectors:[["app-registro"]],standalone:!0,features:[g],decls:16,vars:4,consts:[[1,"login-container"],[1,"login-box"],[3,"ngSubmit"],[1,"form-group"],["id","email","name","email","type","email","required","","placeholder","Usuario",3,"ngModelChange","ngModel"],["id","password","name","password","type","password","required","","placeholder","Contrase\xF1a",3,"ngModelChange","ngModel"],["type","submit",1,"btn"],["class","error-message",4,"ngIf"],["class","success-message",4,"ngIf"],[1,"error-message"],[1,"success-message"]],template:function(e,r){e&1&&(o(0,"body")(1,"div",0)(2,"div",1)(3,"h1"),a(4,"Bienvenido"),i(),o(5,"p"),a(6,"\xA1Registra tus credenciales para iniciar!"),i(),o(7,"form",2),h("ngSubmit",function(){return r.Register()}),o(8,"div",3)(9,"input",4),M("ngModelChange",function(p){return w(r.newUserMail,p)||(r.newUserMail=p),p}),i()(),o(10,"div",3)(11,"input",5),M("ngModelChange",function(p){return w(r.newUserPWD,p)||(r.newUserPWD=p),p}),i()(),o(12,"button",6),a(13,"Registrarse"),i()(),b(14,je,2,1,"div",7)(15,De,2,1,"div",8),i()()()),e&2&&(c(9),_("ngModel",r.newUserMail),c(2),_("ngModel",r.newUserPWD),c(3),x("ngIf",r.flagError),c(),x("ngIf",r.msjExito))},dependencies:[L,z,j,D,R,F,U,A,S,y],styles:["body[_ngcontent-%COMP%]{margin:0;padding:0;font-family:Comic Sans MS,sans-serif;background-color:#fdf6e3;background-color:#f5f5f5;display:flex;justify-content:center;align-items:center;height:100vh}.login-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:100%;height:100vh}.login-box[_ngcontent-%COMP%]{background-color:#fce4ec;padding:40px;border-radius:15px;box-shadow:0 8px 16px #0003;width:100%;max-width:400px;border:3px solid #ff9800;animation:_ngcontent-%COMP%_slideDown 1s ease-out}h1[_ngcontent-%COMP%]{text-align:center;margin-bottom:20px;font-size:2.5rem;color:#ff5722;text-shadow:2px 2px 4px rgba(0,0,0,.3);letter-spacing:2px}p[_ngcontent-%COMP%]{text-align:center;margin-bottom:20px;color:#333;font-size:1.1rem}.form-group[_ngcontent-%COMP%]{margin-bottom:20px}label[_ngcontent-%COMP%]{display:block;margin-bottom:8px;font-size:1rem;color:#333}input[_ngcontent-%COMP%]{width:100%;padding:10px;border-radius:8px;border:2px solid #ff9800;font-size:1rem;box-sizing:border-box}input[_ngcontent-%COMP%]:focus{outline:none;border-color:#ff5722}.btn[_ngcontent-%COMP%]{width:100%;padding:12px;margin-top:.5rem;background-color:#ff9800;border:none;border-radius:8px;color:#fff;font-size:1.2rem;cursor:pointer;transition:background-color .3s ease;text-transform:uppercase}.btn[_ngcontent-%COMP%]:hover{background-color:#e65100}@keyframes _ngcontent-%COMP%_slideDown{0%{transform:translateY(-100%);opacity:0}to{transform:translateY(0);opacity:1}}@media (max-width: 600px){.login-box[_ngcontent-%COMP%]{padding:20px;max-width:100%;box-shadow:none}h1[_ngcontent-%COMP%]{font-size:2rem}}"]})};var q=class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=d({type:n,selectors:[["app-error"]],standalone:!0,features:[g],decls:2,vars:0,template:function(e,r){e&1&&(o(0,"p"),a(1,"error works!"),i())}})};var _e=[{path:"",redirectTo:"/bienvenida",pathMatch:"full"},{path:"bienvenida",component:T},{path:"login",component:B},{path:"registro",component:G},{path:"error",component:q},{path:"choferes",loadChildren:()=>import("./chunk-AQ2ULTXD.js").then(n=>n.ChoferesModule)},{path:"**",redirectTo:"/error"}];var we={providers:[oe({eventCoalescing:!0}),ce(_e),le(()=>me({projectId:"choferes-e79f3",appId:"1:531334371820:web:fb88e3cba7bb43d4c408c9",storageBucket:"choferes-e79f3.appspot.com",apiKey:"AIzaSyBnG3mCVj6G46UINgyA5kSyHk7VugErgJc",authDomain:"choferes-e79f3.firebaseapp.com",messagingSenderId:"531334371820",measurementId:"G-FSRP1Q04M5"})),ge(()=>fe()),he(()=>be()),re()]};var H=class n{title="choferes";static \u0275fac=function(e){return new(e||n)};static \u0275cmp=d({type:n,selectors:[["app-root"]],standalone:!0,features:[g],decls:1,vars:0,template:function(e,r){e&1&&v(0,"router-outlet")},dependencies:[se]})};ae(H,we).catch(n=>console.error(n));