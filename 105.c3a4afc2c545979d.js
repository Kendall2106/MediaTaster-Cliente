"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[105],{105:(I,_,c)=>{c.r(_),c.d(_,{HomePageModule:()=>N});var g=c(6814),i=c(5548),m=c(95),M=c(4670),v=c(5861),e=c(6689),l=c(9862),p=c(553);class h{static getFormData(s){var t=new FormData;for(var n in s)t.append(n,s[n]);return t}static getFormDataArray(s){var t=new FormData;for(let a=0;a<s.length;a++){const r=s[a];for(var n in r)t.append(n,r[n])}return t}}let f=(()=>{class o{constructor(t){this.http=t,this.urlModulo=p.N.urlAPI,this.httpOptions1={headers:new l.WM({mimeType:"multipart/form-data","Access-Control-Allow-Origin":"*"}),responseType:"text"},this.httpOptions2={headers:new l.WM({mimeType:"multipart/form-data","Access-Control-Allow-Origin":"*"})},console.log("Servicio HTTP")}loadMovie(){return this.http.get(this.urlModulo+"listMovie/",this.httpOptions2)}loadMedia(){return this.http.get(this.urlModulo+"listMedia/",this.httpOptions2)}loadTypeMedia(){return this.http.get(this.urlModulo+"listTypeMedia/",this.httpOptions2)}registerMovie(t){return this.http.post(this.urlModulo+"registerMovie",h.getFormData(t),this.httpOptions2)}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(l.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})(),b=(()=>{class o{constructor(t){this.http=t,this.urlModulo=p.N.urlAPI,this.httpOptions2={headers:new l.WM({mimeType:"multipart/form-data","Access-Control-Allow-Origin":"*"})},console.log("Servicio HTTP")}loadGame(){return this.http.get(this.urlModulo+"listGame/",this.httpOptions2)}registerGame(t){return this.http.post(this.urlModulo+"registerGame",h.getFormData(t),this.httpOptions2)}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(l.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})(),C=(()=>{class o{constructor(t){this.http=t,this.urlModulo=p.N.urlAPI,this.httpOptions2={headers:new l.WM({mimeType:"multipart/form-data","Access-Control-Allow-Origin":"*"})},console.log("Servicio HTTP")}loadAnime(){return this.http.get(this.urlModulo+"listAnime/",this.httpOptions2)}registerAnime(t){return this.http.post(this.urlModulo+"registerAnime",h.getFormData(t),this.httpOptions2)}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(l.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})(),T=(()=>{class o{constructor(t){this.http=t,this.urlModulo=p.N.urlAPI,this.httpOptions2={headers:new l.WM({mimeType:"multipart/form-data","Access-Control-Allow-Origin":"*"})},console.log("Servicio HTTP")}loadSeries(){return this.http.get(this.urlModulo+"listSerie/",this.httpOptions2)}registerSerie(t){return this.http.post(this.urlModulo+"registerSerie",h.getFormData(t),this.httpOptions2)}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(l.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})(),Z=(()=>{class o{constructor(t){this.http=t,this.urlModulo=p.N.urlAPI,this.httpOptions2={headers:new l.WM({mimeType:"multipart/form-data","Access-Control-Allow-Origin":"*"})},console.log("Servicio HTTP")}loadBook(){return this.http.get(this.urlModulo+"listBook/",this.httpOptions2)}registerBook(t){return this.http.post(this.urlModulo+"registerBook",h.getFormData(t),this.httpOptions2)}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(l.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();function S(o,s){if(1&o&&(e.TgZ(0,"ion-select-option",12),e._uU(1),e.qZA()),2&o){const t=s.$implicit;e.s9C("value",t.idType),e.xp6(1),e.Oqu(t.name)}}function x(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"ion-item")(1,"ion-input",13),e.NdJ("ngModelChange",function(a){e.CHM(t);const r=e.oxw(2);return e.KtG(r.hours=a)}),e.qZA()()}if(2&o){const t=e.oxw(2);e.xp6(1),e.Q6J("ngModel",t.hours)}}function A(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"ion-item")(1,"ion-input",14),e.NdJ("ngModelChange",function(a){e.CHM(t);const r=e.oxw(2);return e.KtG(r.pages=a)}),e.qZA()()}if(2&o){const t=e.oxw(2);e.xp6(1),e.Q6J("ngModel",t.pages)}}function y(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"ion-item")(1,"ion-input",15),e.NdJ("ngModelChange",function(a){e.CHM(t);const r=e.oxw(2);return e.KtG(r.temp=a)}),e.qZA()()}if(2&o){const t=e.oxw(2);e.xp6(1),e.Q6J("ngModel",t.temp)}}const O=function(o){return{active:o}};function k(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"span",16),e.NdJ("click",function(){const r=e.CHM(t).$implicit,d=e.oxw(2);return e.KtG(d.rate(r))}),e._uU(1,"\u2605"),e.qZA()}if(2&o){const t=s.$implicit,n=e.oxw(2);e.Q6J("ngClass",e.VKq(1,O,n.isStarActive(t)))}}function P(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"div")(1,"ion-card")(2,"ion-item")(3,"ion-input",4),e.NdJ("ngModelChange",function(a){e.CHM(t);const r=e.oxw();return e.KtG(r.name=a)}),e.qZA()(),e.TgZ(4,"ion-item")(5,"ion-input",5),e.NdJ("ngModelChange",function(a){e.CHM(t);const r=e.oxw();return e.KtG(r.date=a)}),e.qZA()(),e.TgZ(6,"ion-item")(7,"ion-select",6),e.NdJ("ngModelChange",function(a){e.CHM(t);const r=e.oxw();return e.KtG(r.typeM=a)}),e.YNc(8,S,2,2,"ion-select-option",7),e.qZA()(),e.YNc(9,x,2,1,"ion-item",3),e.YNc(10,A,2,1,"ion-item",3),e.YNc(11,y,2,1,"ion-item",3),e.TgZ(12,"ion-item")(13,"div",8),e.YNc(14,k,2,3,"span",9),e.qZA()(),e.TgZ(15,"ion-item")(16,"ion-button",10),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.register())}),e._uU(17," Registrar "),e.qZA()()(),e._UZ(18,"ion-toast",11),e.qZA()}if(2&o){const t=e.oxw();e.xp6(3),e.Q6J("ngModel",t.name),e.xp6(2),e.Q6J("ngModel",t.date),e.xp6(2),e.Q6J("ngModel",t.typeM),e.xp6(1),e.Q6J("ngForOf",t.type),e.xp6(1),e.Q6J("ngIf","Juegos"===t.media),e.xp6(1),e.Q6J("ngIf","Libros"===t.media),e.xp6(1),e.Q6J("ngIf","Anime"===t.media||"Series"===t.media),e.xp6(3),e.Q6J("ngForOf",t.stars),e.xp6(4),e.s9C("message",t.answer),e.Q6J("duration",2500)}}let w=(()=>{class o{constructor(t,n,a,r,d,u){this.modalController=t,this.movieService=n,this.gameService=a,this.animeService=r,this.serieService=d,this.bookService=u,this.type=[],this.data=[],this.stars=[1,2,3,4,5],this.selectedStars=0,this.answer="",this.name="",this.date="",this.typeM=0,this.media=""}ngOnInit(){this.loadTypeMedia()}loadTypeMedia(){this.movieService.loadTypeMedia().subscribe(t=>{this.type=t})}register(){"Peliculas"==this.media&&this.movieService.registerMovie({name:this.name,date:this.date,score:this.selectedStars,type:this.typeM}).subscribe(t=>{this.answer=t}),"Juegos"==this.media&&this.gameService.registerGame({name:this.name,date:this.date,score:this.selectedStars,type:this.typeM,hours:this.hours}).subscribe(t=>{console.log(t)}),"Anime"==this.media&&this.animeService.registerAnime({name:this.name,date:this.date,score:this.selectedStars,type:this.typeM,temp:this.temp}).subscribe(t=>{console.log(t)}),"Series"==this.media&&this.serieService.registerSerie({name:this.name,date:this.date,score:this.selectedStars,type:this.typeM,temp:this.temp}).subscribe(t=>{console.log(t)}),"Libros"==this.media&&this.bookService.registerBook({name:this.name,date:this.date,score:this.selectedStars,type:this.typeM,pages:this.pages}).subscribe(t=>{console.log(t)})}closeModal(){this.modalController.dismiss()}rate(t){this.selectedStars=this.selectedStars===t?0:t}isStarActive(t){return t<=this.selectedStars}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(i.IN),e.Y36(f),e.Y36(b),e.Y36(C),e.Y36(T),e.Y36(Z))},o.\u0275cmp=e.Xpm({type:o,selectors:[["modal"]],decls:26,vars:2,consts:[["slot","end"],[3,"click"],["placeholder","Media",3,"ngModel","ngModelChange"],[4,"ngIf"],["label","Nombre","label-placement","floating","placeholder","",3,"ngModel","ngModelChange"],["type","date","label","Fecha","label-placement","floating","placeholder","",3,"ngModel","ngModelChange"],["placeholder","Categoria",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"rating"],["class","star",3,"ngClass","click",4,"ngFor","ngForOf"],["id","open-toast","slot","end","expand","block","fill","outline",3,"click"],["trigger","open-toast","icon","warning",3,"message","duration"],[3,"value"],["type","number","label","Horas","label-placement","floating","placeholder","",3,"ngModel","ngModelChange"],["type","number","label","Paginas","label-placement","floating","placeholder","",3,"ngModel","ngModelChange"],["type","number","label","Temporadas","label-placement","floating","placeholder","",3,"ngModel","ngModelChange"],[1,"star",3,"ngClass","click"]],template:function(t,n){1&t&&(e.TgZ(0,"head")(1,"title"),e._uU(2,"Ejemplo de CSS en el mismo HTML"),e.qZA()(),e.TgZ(3,"ion-header")(4,"ion-toolbar")(5,"ion-buttons",0)(6,"ion-button",1),e.NdJ("click",function(){return n.closeModal()}),e._uU(7,"Cancel"),e.qZA()(),e.TgZ(8,"ion-title"),e._uU(9,"Registrar"),e.qZA()()(),e.TgZ(10,"ion-content")(11,"ion-list")(12,"ion-card")(13,"ion-item")(14,"ion-select",2),e.NdJ("ngModelChange",function(r){return n.media=r}),e.TgZ(15,"ion-select-option"),e._uU(16,"Peliculas"),e.qZA(),e.TgZ(17,"ion-select-option"),e._uU(18,"Series"),e.qZA(),e.TgZ(19,"ion-select-option"),e._uU(20,"Anime"),e.qZA(),e.TgZ(21,"ion-select-option"),e._uU(22,"Libros"),e.qZA(),e.TgZ(23,"ion-select-option"),e._uU(24,"Juegos"),e.qZA()()()(),e.YNc(25,P,19,10,"div",3),e.qZA()()),2&t&&(e.xp6(14),e.Q6J("ngModel",n.media),e.xp6(11),e.Q6J("ngIf",""!=n.media))},dependencies:[g.mk,g.sg,g.O5,i.YG,i.Sm,i.PM,i.W2,i.Gu,i.pK,i.Ie,i.q_,i.t9,i.n0,i.wd,i.Px,i.sr,i.as,i.QI,i.j9,m.JJ,m.On],styles:[".rating[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n\n.star[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n\n\n.star[_ngcontent-%COMP%]:hover {\n  color: gold;\n}\n\n\n\n.star.active[_ngcontent-%COMP%] {\n  color: gold;\n}"]}),o})();function J(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"ion-list",19)(1,"ion-item",20),e.NdJ("click",function(){const r=e.CHM(t).$implicit,d=e.oxw();return e.KtG(d.presentAlert(r,d.selectedSegment))}),e.TgZ(2,"ion-avatar",21),e._UZ(3,"img",22),e.qZA(),e.TgZ(4,"ion-label"),e._uU(5),e._UZ(6,"br"),e._uU(7),e.qZA(),e.TgZ(8,"ion-label"),e._uU(9),e._UZ(10,"ion-icon",23),e.qZA(),e.TgZ(11,"ion-badge",24),e._uU(12),e.qZA()()()}if(2&o){const t=s.$implicit,n=e.oxw();e.Q6J("inset",!0),e.xp6(5),e.Oqu(t.media_name),e.xp6(2),e.hij("",t.date," "),e.xp6(2),e.hij("",t.score," "),e.xp6(2),e.Q6J("ngStyle",n.getBadgeColor(t.type_name)),e.xp6(1),e.Oqu(t.type_name)}}const F=[{path:"",component:(()=>{class o{constructor(t,n,a,r,d,u,U,q){this.modalController=t,this.alertController=n,this.movieService=a,this.bookService=r,this.animeService=d,this.gameService=u,this.serieService=U,this.actionSheetController=q,this.data=[],this.movies=[],this.books=[],this.results=[],this.selectedSegment=""}ngOnInit(){this.clear(),this.loadMedia()}loadMovie(){this.movieService.loadMovie().subscribe(t=>{this.dateChange(t),this.data=t,this.results=this.data})}loadMedia(){this.movieService.loadMedia().subscribe(t=>{this.dateChange(t),this.data=t,this.results=this.data})}dateChange(t){for(let n=0;n<t.length;n++){const a=new Date(t[n].date);t[n].date=a.getDate()+"/"+(a.getMonth()+1)+"/"+a.getFullYear()}}loadBook(){this.bookService.loadBook().subscribe(t=>{this.dateChange(t),this.data=t,this.results=this.data})}loadGame(){this.gameService.loadGame().subscribe(t=>{this.dateChange(t),this.data=t,this.results=this.data})}loadAnime(){this.animeService.loadAnime().subscribe(t=>{this.dateChange(t),this.data=t,this.results=this.data})}loadSerie(){this.serieService.loadSeries().subscribe(t=>{this.dateChange(t),this.data=t,this.results=this.data})}refrescar(){this.ngOnInit()}segmentChanged(t){const n=t.detail.value;switch(this.selectedSegment=n,n){case"all":this.clear(),this.loadMedia();break;case"peliculas":this.clear(),this.loadMovie();break;case"series":this.clear(),this.loadSerie();break;case"anime":this.clear(),this.loadAnime();break;case"juegos":this.clear(),this.loadGame();break;case"libros":this.clear(),this.loadBook()}}handleInput(t){const n=t.target.value.toLowerCase();console.log(n),this.results=this.data.filter(a=>a.media_name.toLowerCase().indexOf(n)>-1)}clear(){this.data=[]}presentAlert(t,n){var a=this;return(0,v.Z)(function*(){let r="";"series"==n||"anime"==n?r="Temporadas: "+t.Temp:"juegos"==n?r="Horas: "+t.hours:"libros"==n&&(r="Paginas: "+t.pages),yield(yield a.alertController.create({header:t.media_name,subHeader:"Categoria: "+t.type_name,message:r,buttons:["OK"]})).present()})()}abrirModal(){var t=this;return(0,v.Z)(function*(){console.log("abrirModal"),yield(yield t.modalController.create({component:w})).present()})()}getBadgeColor(t){let n="";switch(t){case"Comedia":n="red";break;case"Terror":n="green";break;case"Romance":n="pink";break;case"Accion":n="black";break;case"Fantasia":n="purple";break;case"Ciencia Ficcion":n="gray";break;default:n="blue"}return{"background-color":n||"default-color"}}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(i.IN),e.Y36(i.Br),e.Y36(f),e.Y36(Z),e.Y36(C),e.Y36(b),e.Y36(T),e.Y36(i.BX))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-home"]],decls:36,vars:3,consts:[["animated","true","placeholder","Buscar",3,"ionInput"],["id","open-loading","value","all",3,"scrollable","ionChange"],["value","all"],["name","home"],["value","peliculas"],["name","videocam-outline"],["value","series"],["name","aperture-outline"],["value","anime"],["name","ribbon-outline"],["value","juegos"],["name","game-controller-outline"],["value","libros"],["name","book-outline"],["trigger","open-loading","message","Loading...",1,"custom-loading",3,"duration"],["color","light"],[3,"inset",4,"ngFor","ngForOf"],["slot","fixed","vertical","bottom","horizontal","end",3,"click"],["name","add"],[3,"inset"],[3,"click"],["slot","start"],["src","https://ionicframework.com/docs/img/demos/avatar.svg"],["name","star",2,"color","yellow"],[3,"ngStyle"]],template:function(t,n){1&t&&(e.TgZ(0,"section")(1,"ion-grid")(2,"ion-searchbar",0),e.NdJ("ionInput",function(r){return n.handleInput(r)}),e.qZA()()(),e.TgZ(3,"section")(4,"ion-grid")(5,"ion-segment",1),e.NdJ("ionChange",function(r){return n.segmentChanged(r)}),e.TgZ(6,"ion-segment-button",2),e._UZ(7,"ion-icon",3),e.TgZ(8,"ion-label"),e._uU(9,"Home"),e.qZA()(),e.TgZ(10,"ion-segment-button",4),e._UZ(11,"ion-icon",5),e.TgZ(12,"ion-label"),e._uU(13,"Peliculas"),e.qZA()(),e.TgZ(14,"ion-segment-button",6),e._UZ(15,"ion-icon",7),e.TgZ(16,"ion-label"),e._uU(17,"Series"),e.qZA()(),e.TgZ(18,"ion-segment-button",8),e._UZ(19,"ion-icon",9),e.TgZ(20,"ion-label"),e._uU(21,"Anime"),e.qZA()(),e.TgZ(22,"ion-segment-button",10),e._UZ(23,"ion-icon",11),e.TgZ(24,"ion-label"),e._uU(25,"Juegos"),e.qZA()(),e.TgZ(26,"ion-segment-button",12),e._UZ(27,"ion-icon",13),e.TgZ(28,"ion-label"),e._uU(29,"Libros"),e.qZA()()()(),e._UZ(30,"ion-loading",14),e.qZA(),e.TgZ(31,"ion-content",15),e.YNc(32,J,13,6,"ion-list",16),e.TgZ(33,"ion-fab",17),e.NdJ("click",function(){return n.abrirModal()}),e.TgZ(34,"ion-fab-button"),e._UZ(35,"ion-icon",18),e.qZA()()()),2&t&&(e.xp6(5),e.Q6J("scrollable",!0),e.xp6(25),e.Q6J("duration",1500),e.xp6(2),e.Q6J("ngForOf",n.results))},dependencies:[g.sg,g.PC,i.BJ,i.yp,i.W2,i.IJ,i.W4,i.jY,i.gu,i.Ie,i.Q$,i.q_,i.wh,i.VI,i.cJ,i.GO,i.QI,i.j9],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}ion-card-title[_ngcontent-%COMP%]{margin-top:5%;margin-left:20px;margin-bottom:0}ion-avatar[_ngcontent-%COMP%]{--border-radius: 4px}ion-fab-button[_ngcontent-%COMP%]::part(native){background-color:#b7f399;border-radius:15px;box-shadow:0 1px 2px #0000004d,0 1px 3px 1px #00000026;color:#000}ion-fab-button[_ngcontent-%COMP%]::part(native):hover:after{background-color:#a3e681}ion-fab-button[_ngcontent-%COMP%]::part(native):active:after{background-color:#87d361}.block[_ngcontent-%COMP%]{width:100%;height:300px;display:flex;align-items:center;justify-content:center}ion-modal[_ngcontent-%COMP%]{--height: auto}"]}),o})()}];let H=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[M.Bz.forChild(F),M.Bz]}),o})(),N=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({providers:[i.Br],imports:[g.ez,m.u5,i.Pc,H]}),o})()}}]);