"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9211],{9211:(V,Z,u)=>{u.r(Z),u.d(Z,{HomePageModule:()=>B});var g=u(6814),s=u(5548),p=u(95),A=u(4670),h=u(5861),e=u(6689),c=u(9862),_=u(553);class d{static getFormData(l){var t=new FormData;for(var o in l)t.append(o,l[o]);return t}static getFormDataArray(l){var t=new FormData;for(let n=0;n<l.length;n++){const r=l[n];for(var o in r)t.append(o,r[o])}return t}}let f=(()=>{class i{constructor(t){this.http=t,this.urlModulo=_.N.urlAPI,this.httpOptions1={headers:new c.WM({mimeType:"multipart/form-data","Access-Control-Allow-Origin":"*"}),responseType:"text"},this.httpOptions2={headers:new c.WM({mimeType:"multipart/form-data","Access-Control-Allow-Origin":"*"})},console.log("Servicio HTTP")}loadMovie(){return this.http.get(this.urlModulo+"listMovie/",this.httpOptions2)}loadMedia(){return this.http.get(this.urlModulo+"listMedia/",this.httpOptions2)}loadTypeMedia(){return this.http.get(this.urlModulo+"listTypeMedia/",this.httpOptions2)}registerType(t){return this.http.post(this.urlModulo+"registerType",d.getFormData(t),this.httpOptions2)}registerMovie(t){return this.http.post(this.urlModulo+"registerMovie",d.getFormData(t),this.httpOptions2)}deleteMovie(t){return this.http.post(this.urlModulo+"deleteMovie",d.getFormData(t),this.httpOptions2)}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(c.eN))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),M=(()=>{class i{constructor(t){this.http=t,this.urlModulo=_.N.urlAPI,this.httpOptions2={headers:new c.WM({mimeType:"multipart/form-data","Access-Control-Allow-Origin":"*"})},console.log("Servicio HTTP")}loadGame(){return this.http.get(this.urlModulo+"listGame/",this.httpOptions2)}registerGame(t){return this.http.post(this.urlModulo+"registerGame",d.getFormData(t),this.httpOptions2)}deleteGame(t){return this.http.post(this.urlModulo+"deleteGame",d.getFormData(t),this.httpOptions2)}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(c.eN))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),b=(()=>{class i{constructor(t){this.http=t,this.urlModulo=_.N.urlAPI,this.httpOptions2={headers:new c.WM({mimeType:"multipart/form-data","Access-Control-Allow-Origin":"*"})},console.log("Servicio HTTP")}loadAnime(){return this.http.get(this.urlModulo+"listAnime/",this.httpOptions2)}registerAnime(t){return this.http.post(this.urlModulo+"registerAnime",d.getFormData(t),this.httpOptions2)}deleteAnime(t){return this.http.post(this.urlModulo+"deleteAnime",d.getFormData(t),this.httpOptions2)}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(c.eN))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),v=(()=>{class i{constructor(t){this.http=t,this.urlModulo=_.N.urlAPI,this.httpOptions2={headers:new c.WM({mimeType:"multipart/form-data","Access-Control-Allow-Origin":"*"})},console.log("Servicio HTTP")}loadSeries(){return this.http.get(this.urlModulo+"listSerie/",this.httpOptions2)}registerSerie(t){return this.http.post(this.urlModulo+"registerSerie",d.getFormData(t),this.httpOptions2)}deleteSerie(t){return console.log("aja "+t.id),this.http.post(this.urlModulo+"deleteSerie",d.getFormData(t),this.httpOptions2)}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(c.eN))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),C=(()=>{class i{constructor(t){this.http=t,this.urlModulo=_.N.urlAPI,this.httpOptions2={headers:new c.WM({mimeType:"multipart/form-data","Access-Control-Allow-Origin":"*"})},console.log("Servicio HTTP")}loadBook(){return this.http.get(this.urlModulo+"listBook/",this.httpOptions2)}registerBook(t){return this.http.post(this.urlModulo+"registerBook",d.getFormData(t),this.httpOptions2)}deleteBook(t){return this.http.post(this.urlModulo+"deleteBook",d.getFormData(t),this.httpOptions2)}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(c.eN))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();function S(i,l){if(1&i&&(e.TgZ(0,"ion-select-option",12),e._uU(1),e.qZA()),2&i){const t=l.$implicit;e.s9C("value",t.idType),e.xp6(1),e.Oqu(t.name)}}function P(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"ion-item")(1,"ion-input",13),e.NdJ("ngModelChange",function(n){e.CHM(t);const r=e.oxw(2);return e.KtG(r.hours=n)}),e.qZA()()}if(2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("ngModel",t.hours)}}function k(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"ion-item")(1,"ion-input",14),e.NdJ("ngModelChange",function(n){e.CHM(t);const r=e.oxw(2);return e.KtG(r.pages=n)}),e.qZA()()}if(2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("ngModel",t.pages)}}function x(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"ion-item")(1,"ion-input",15),e.NdJ("ngModelChange",function(n){e.CHM(t);const r=e.oxw(2);return e.KtG(r.temp=n)}),e.qZA()()}if(2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("ngModel",t.temp)}}const y=function(i){return{active:i}};function O(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"span",16),e.NdJ("click",function(){const r=e.CHM(t).$implicit,a=e.oxw(2);return e.KtG(a.rate(r))}),e._uU(1,"\u2605"),e.qZA()}if(2&i){const t=l.$implicit,o=e.oxw(2);e.Q6J("ngClass",e.VKq(1,y,o.isStarActive(t)))}}function N(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"div")(1,"ion-card")(2,"ion-item")(3,"ion-input",4),e.NdJ("ngModelChange",function(n){e.CHM(t);const r=e.oxw();return e.KtG(r.name=n)}),e.qZA()(),e.TgZ(4,"ion-item")(5,"ion-input",5),e.NdJ("ngModelChange",function(n){e.CHM(t);const r=e.oxw();return e.KtG(r.date=n)}),e.qZA()(),e.TgZ(6,"ion-item")(7,"ion-select",6),e.NdJ("ngModelChange",function(n){e.CHM(t);const r=e.oxw();return e.KtG(r.typeM=n)}),e.YNc(8,S,2,2,"ion-select-option",7),e.qZA()(),e.YNc(9,P,2,1,"ion-item",3),e.YNc(10,k,2,1,"ion-item",3),e.YNc(11,x,2,1,"ion-item",3),e.TgZ(12,"ion-item")(13,"div",8),e.YNc(14,O,2,3,"span",9),e.qZA()(),e.TgZ(15,"ion-item")(16,"ion-button",10),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.register())}),e._uU(17," Registrar "),e.qZA()()(),e._UZ(18,"ion-toast",11),e.qZA()}if(2&i){const t=e.oxw();e.xp6(3),e.Q6J("ngModel",t.name),e.xp6(2),e.Q6J("ngModel",t.date),e.xp6(2),e.Q6J("ngModel",t.typeM),e.xp6(1),e.Q6J("ngForOf",t.type),e.xp6(1),e.Q6J("ngIf","Juegos"===t.media),e.xp6(1),e.Q6J("ngIf","Libros"===t.media),e.xp6(1),e.Q6J("ngIf","Anime"===t.media||"Series"===t.media),e.xp6(3),e.Q6J("ngForOf",t.stars),e.xp6(4),e.s9C("message",t.answer),e.Q6J("duration",2500)}}let J=(()=>{class i{constructor(t,o,n,r,a,m){this.modalController=t,this.movieService=o,this.gameService=n,this.animeService=r,this.serieService=a,this.bookService=m,this.type=[],this.data=[],this.stars=[1,2,3,4,5],this.selectedStars=0,this.answer="",this.name="",this.date="",this.typeM=0,this.media=""}ngOnInit(){this.loadTypeMedia()}loadTypeMedia(){this.movieService.loadTypeMedia().subscribe(t=>{this.type=t})}register(){"Peliculas"==this.media&&this.movieService.registerMovie({name:this.name,date:this.date,score:this.selectedStars,type:this.typeM}).subscribe(t=>{this.answer=t}),"Juegos"==this.media&&this.gameService.registerGame({name:this.name,date:this.date,score:this.selectedStars,type:this.typeM,hours:this.hours}).subscribe(t=>{console.log(t)}),"Anime"==this.media&&this.animeService.registerAnime({name:this.name,date:this.date,score:this.selectedStars,type:this.typeM,temp:this.temp}).subscribe(t=>{console.log(t)}),"Series"==this.media&&this.serieService.registerSerie({name:this.name,date:this.date,score:this.selectedStars,type:this.typeM,temp:this.temp}).subscribe(t=>{console.log(t)}),"Libros"==this.media&&this.bookService.registerBook({name:this.name,date:this.date,score:this.selectedStars,type:this.typeM,pages:this.pages}).subscribe(t=>{console.log(t)}),this.closeModal()}closeModal(){this.modalController.dismiss()}rate(t){this.selectedStars=this.selectedStars===t?0:t}isStarActive(t){return t<=this.selectedStars}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(s.IN),e.Y36(f),e.Y36(M),e.Y36(b),e.Y36(v),e.Y36(C))},i.\u0275cmp=e.Xpm({type:i,selectors:[["modal"]],decls:26,vars:2,consts:[["slot","end"],[3,"click"],["placeholder","Media",3,"ngModel","ngModelChange"],[4,"ngIf"],["label","Nombre","label-placement","floating","placeholder","",3,"ngModel","ngModelChange"],["type","date","label","Fecha","label-placement","floating","placeholder","",3,"ngModel","ngModelChange"],["placeholder","Categoria",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"rating"],["class","star",3,"ngClass","click",4,"ngFor","ngForOf"],["id","open-toast","slot","end","expand","block","fill","outline",3,"click"],["trigger","open-toast","icon","warning",3,"message","duration"],[3,"value"],["type","number","label","Horas","label-placement","floating","placeholder","",3,"ngModel","ngModelChange"],["type","number","label","Paginas","label-placement","floating","placeholder","",3,"ngModel","ngModelChange"],["type","number","label","Temporadas","label-placement","floating","placeholder","",3,"ngModel","ngModelChange"],[1,"star",3,"ngClass","click"]],template:function(t,o){1&t&&(e.TgZ(0,"head")(1,"title"),e._uU(2,"Ejemplo de CSS en el mismo HTML"),e.qZA()(),e.TgZ(3,"ion-header")(4,"ion-toolbar")(5,"ion-buttons",0)(6,"ion-button",1),e.NdJ("click",function(){return o.closeModal()}),e._uU(7,"Cancel"),e.qZA()(),e.TgZ(8,"ion-title"),e._uU(9,"Registrar"),e.qZA()()(),e.TgZ(10,"ion-content")(11,"ion-list")(12,"ion-card")(13,"ion-item")(14,"ion-select",2),e.NdJ("ngModelChange",function(r){return o.media=r}),e.TgZ(15,"ion-select-option"),e._uU(16,"Peliculas"),e.qZA(),e.TgZ(17,"ion-select-option"),e._uU(18,"Series"),e.qZA(),e.TgZ(19,"ion-select-option"),e._uU(20,"Anime"),e.qZA(),e.TgZ(21,"ion-select-option"),e._uU(22,"Libros"),e.qZA(),e.TgZ(23,"ion-select-option"),e._uU(24,"Juegos"),e.qZA()()()(),e.YNc(25,N,19,10,"div",3),e.qZA()()),2&t&&(e.xp6(14),e.Q6J("ngModel",o.media),e.xp6(11),e.Q6J("ngIf",""!=o.media))},dependencies:[g.mk,g.sg,g.O5,s.YG,s.Sm,s.PM,s.W2,s.Gu,s.pK,s.Ie,s.q_,s.t9,s.n0,s.wd,s.Px,s.sr,s.as,s.QI,s.j9,p.JJ,p.On],styles:["ion-content[_ngcontent-%COMP%]{\n      --background: linear-gradient(to right, #000, #334e65);\n    }\n\n    ion-list[_ngcontent-%COMP%]{\n      background: linear-gradient(to right, #000, #334e65);\n    }\n\n .rating[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n\n.star[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n\n\n.star[_ngcontent-%COMP%]:hover {\n  color: gold;\n}\n\n\n\n.star.active[_ngcontent-%COMP%] {\n  color: gold;\n}"]}),i})();function q(i,l){if(1&i&&(e.TgZ(0,"ion-item"),e._uU(1),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.hij(" ",t.message," ")}}let w=(()=>{class i{constructor(t,o,n,r,a,m,T){this.actionSheetCtrl=t,this.modalController=o,this.movieService=n,this.bookService=r,this.animeService=a,this.gameService=m,this.serieService=T,this.title="",this.category="",this.message="",this.id=0,this.seleccion=""}closeModal(){this.modalController.dismiss()}deleteMovie(){this.movieService.deleteMovie({id:this.id}).subscribe(t=>{console.log(t)})}deleteAnime(){this.animeService.deleteAnime({id:this.id}).subscribe(t=>{console.log(t)})}deleteSerie(){console.log("mmmm "+this.id),this.serieService.deleteSerie({id:this.id}).subscribe(t=>{console.log(t)})}deleteGame(){this.gameService.deleteGame({id:this.id}).subscribe(t=>{console.log(t)})}deleteBook(){this.bookService.deleteBook({id:this.id}).subscribe(t=>{console.log(t)})}deleteMedia(){var t=this;return(0,h.Z)(function*(){"series"==t.seleccion?t.deleteSerie():"juegos"==t.seleccion?t.deleteGame():"libros"==t.seleccion?t.deleteBook():"anime"==t.seleccion?t.deleteAnime():"peliculas"==t.seleccion&&t.deleteMovie()})()}presentActionSheet(){var t=this;return(0,h.Z)(function*(){yield(yield t.actionSheetCtrl.create({header:"Est\xe1s seguro?",buttons:[{text:"Eliminar",role:"destructive",handler:()=>{t.deleteMedia(),t.closeModal()}},{text:"Cerrar",role:"cancel"}]})).present()})()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(s.BX),e.Y36(s.IN),e.Y36(f),e.Y36(C),e.Y36(b),e.Y36(M),e.Y36(v))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-alerta"]],inputs:{title:"title",category:"category",message:"message",id:"id",seleccion:"seleccion"},decls:18,vars:3,consts:[["slot","end"],[3,"click"],["name","reorder-four-outline"],[4,"ngIf"],["expand","block","fill","outline",3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0)(3,"ion-button",1),e.NdJ("click",function(){return o.closeModal()}),e._uU(4,"Cancel"),e.qZA()()()(),e.TgZ(5,"ion-content")(6,"ion-card-header")(7,"ion-card-title"),e._UZ(8,"ion-icon",2),e._uU(9),e.qZA()(),e.TgZ(10,"ion-card-content")(11,"ion-list")(12,"ion-item"),e._uU(13),e.qZA(),e.YNc(14,q,2,1,"ion-item",3),e.TgZ(15,"ion-item")(16,"ion-button",4),e.NdJ("click",function(){return o.presentActionSheet()}),e._uU(17," Eliminar "),e.qZA()()()()()),2&t&&(e.xp6(9),e.hij(" ",o.title," "),e.xp6(4),e.hij(" Categoria: ",o.category," "),e.xp6(1),e.Q6J("ngIf",""!=o.message))},dependencies:[g.O5,s.YG,s.Sm,s.FN,s.Zi,s.Dq,s.W2,s.Gu,s.gu,s.Ie,s.q_,s.sr],styles:["ion-button[_ngcontent-%COMP%]{width:100px;height:30px}ion-toolbar[_ngcontent-%COMP%]{--background: white}ion-card-title[_ngcontent-%COMP%]{font-size:20px}"]}),i})();function U(i,l){1&i&&e._UZ(0,"ion-card",19)}function F(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"ion-list",31)(1,"ion-item",32),e.NdJ("click",function(){const r=e.CHM(t).$implicit,a=e.oxw(2);return e.KtG(a.presentAlert(r,a.selectedSegment))}),e.TgZ(2,"ion-label"),e._uU(3),e._UZ(4,"br"),e._uU(5),e.qZA(),e.TgZ(6,"ion-label",33),e._uU(7),e._UZ(8,"ion-icon",34),e.qZA(),e.TgZ(9,"ion-badge",35),e._uU(10),e.qZA()()()}if(2&i){const t=l.$implicit,o=e.oxw(2);e.Q6J("inset",!0),e.xp6(3),e.Oqu(t.media_name),e.xp6(2),e.Oqu(t.date),e.xp6(2),e.hij("",t.score," "),e.xp6(2),e.Q6J("ngStyle",o.getBadgeColor(t.type_name)),e.xp6(1),e.Oqu(t.type_name)}}function H(i,l){if(1&i&&(e.TgZ(0,"div"),e.YNc(1,F,11,6,"ion-list",30),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.results)}}function Y(i,l){if(1&i&&(e.TgZ(0,"ion-list",31)(1,"ion-item")(2,"ion-label"),e._uU(3),e.qZA(),e.TgZ(4,"ion-label",33),e._uU(5),e._UZ(6,"ion-icon",34),e.qZA()()()),2&i){const t=l.$implicit;e.Q6J("inset",!0),e.xp6(3),e.Oqu(t.media_name),e.xp6(2),e.hij("",t.score," ")}}function I(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"div"),e.YNc(1,Y,7,3,"ion-list",30),e.TgZ(2,"ion-item",36)(3,"ion-button",37),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.prev())}),e._uU(4,"Anterior"),e.qZA(),e.TgZ(5,"ion-button",38),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.next())}),e._uU(6,"Siguiente"),e.qZA()()()}if(2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.getCurrentItems()),e.xp6(2),e.Q6J("disabled",!t.hasPrev()),e.xp6(2),e.Q6J("disabled",!t.hasNext())}}const G=[{path:"",component:(()=>{class i{constructor(t,o,n,r,a,m,T,D){this.modalController=t,this.alertController=o,this.movieService=n,this.bookService=r,this.animeService=a,this.gameService=m,this.serieService=T,this.actionSheetController=D,this.data=[],this.type=[],this.years=[],this.movies=[],this.books=[],this.results=[],this.selectedSegment="all",this.regNum=0,this.typeM=0,this.defaultValue="Todos",this.typeName="",this.prevYear=0,this.miSelectValue=this.defaultValue,this.miSelectValue2=this.defaultValue,this.miSelectValue3=this.defaultValue,this.currentPage=0,this.itemsPerPage=3}ngOnInit(){this.clear(),this.loadMedia(),this.loadTypeMedia()}loadMovie(){this.clear(),this.movieService.loadMovie().subscribe(t=>{this.dateChange(t),this.data=t,this.results=this.data,this.regNum=this.results.length})}loadMedia(){this.clear(),this.movieService.loadMedia().subscribe(t=>{this.dateChange(t),this.data=t,this.results=this.data,this.regNum=this.results.length})}loadBook(){this.clear(),this.bookService.loadBook().subscribe(t=>{this.dateChange(t),this.data=t,this.results=this.data,this.regNum=this.results.length})}loadGame(){this.clear(),this.gameService.loadGame().subscribe(t=>{this.dateChange(t),this.data=t,this.results=this.data,this.regNum=this.results.length})}loadAnime(){this.clear(),this.animeService.loadAnime().subscribe(t=>{this.dateChange(t),this.data=t,this.results=this.data,this.regNum=this.results.length})}loadSerie(){this.clear(),this.serieService.loadSeries().subscribe(t=>{this.dateChange(t),this.data=t,this.results=this.data,this.regNum=this.results.length})}loadTypeMedia(){return this.movieService.loadTypeMedia().subscribe(t=>{this.type=t}),this.type}dateChange(t){for(let o=0;o<t.length;o++){const n=new Date(t[o].date);t[o].date=n.getDate()+1+"/"+(n.getMonth()+1)+"/"+n.getFullYear()}}refrescar(){switch(this.selectedSegment){case"peliculas":this.loadMovie();break;case"series":this.loadSerie();break;case"anime":this.loadAnime();break;case"juegos":this.loadGame();break;case"libros":this.loadBook()}}segmentChanged(t){this.selectedSegment=t.detail.value}sacarAnio(t){for(let n=0;n<t.length;n++);}handleInput(t){const o=t.target.value.toLowerCase();console.log(o),this.results=this.data.filter(n=>n.media_name.toLowerCase().indexOf(o)>-1),this.regNum=this.results.length}clear(){this.data=[],this.results=[],this.regNum=this.results.length}presentAlert(t,o){var n=this;return(0,h.Z)(function*(){let r="";"series"==o||"anime"==o?r="Temporadas: "+t.Temp:"juegos"==o?r="Horas: "+t.hours:"libros"==o&&(r="Paginas: "+t.pages),console.log("wat "+t.idAnime);const a=yield n.modalController.create({component:w,componentProps:{title:t.media_name,category:t.type_name,message:r,id:t.id,seleccion:o},mode:"ios"});a.onDidDismiss().then(()=>{n.refrescar()}),a.style.cssText="--max-width: 80%; --height:40%",a.present()})()}abrirModal(){var t=this;return(0,h.Z)(function*(){console.log("abrirModal");const o=yield t.modalController.create({component:J});o.onDidDismiss().then(()=>{t.refrescar()}),yield o.present()})()}getBadgeColor(t){let o="";switch(t){case"Comedia":o="orange";break;case"Terror":o="black";break;case"Romance":o="red";break;case"Accion":o="green";break;case"Fantasia":o="purple";break;case"Ciencia Ficcion":o="gray";break;default:o="blue"}return{"background-color":o||"default-color"}}filterType(t){const o=t.target.value.toLowerCase();this.results="todos"===o?this.data:this.results.filter(n=>n.type_name.toLowerCase().indexOf(o)>-1),this.regNum=this.results.length}filterScore(t){const o=t.target.value.toLowerCase();this.results="todos"===o?this.data:this.results.filter(n=>n.score.toString().toLowerCase().indexOf(o)>-1),this.regNum=this.results.length}filterYear(t){const o=t.target.value.toLowerCase();this.results="todos"===o?this.data:this.results.filter(n=>{var r=n.date.split("/"),a=parseInt(r[2],10);return console.log(a),a.toString().toLowerCase().indexOf(o)>-1}),this.regNum=this.results.length}registerType(t){this.movieService.registerType({name:t}).subscribe(o=>{console.log(o)}),this.loadTypeMedia()}mostrarAlert(){var t=this;return(0,h.Z)(function*(){yield(yield t.alertController.create({header:"Crear cuenta:",inputs:[{name:"nombre",placeholder:"Nombre",type:"text"}],buttons:[{text:"Cancelar",role:"cancel"},{text:"Aceptar",handler:n=>{t.registerType(n.nombre)}}]})).present()})()}restaurarSelect(){this.miSelectValue=this.defaultValue,this.miSelectValue2=this.defaultValue,this.miSelectValue3=this.defaultValue}deleteFilter(){var t=this;return(0,h.Z)(function*(){t.results=t.data,t.regNum=t.results.length,t.restaurarSelect()})()}next(){this.currentPage++}prev(){this.currentPage>0&&this.currentPage--}hasNext(){return(this.currentPage+1)*this.itemsPerPage<this.results.length}hasPrev(){return this.currentPage>0}getCurrentItems(){const t=this.currentPage*this.itemsPerPage;return this.results.slice(t,t+this.itemsPerPage)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(s.IN),e.Y36(s.Br),e.Y36(f),e.Y36(C),e.Y36(b),e.Y36(M),e.Y36(v),e.Y36(s.BX))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-home"]],decls:92,vars:8,consts:[[1,"sectionNew"],["animated","true","placeholder","Buscar",1,"color-primary",3,"ionInput"],["id","open-loading","value","all",3,"scrollable","ionChange","click"],["value","all",3,"click"],["name","home"],["value","peliculas",3,"click"],["name","videocam-outline"],["value","series",3,"click"],["name","aperture-outline"],["value","anime",3,"click"],["name","ribbon-outline"],["value","juegos",3,"click"],["name","game-controller-outline"],["value","libros",3,"click"],["name","book-outline"],["trigger","open-loading","message","Loading...",1,"custom-loading",3,"duration"],["id","main-content"],[1,"filtros"],["size","large","name","filter-outline"],[1,"content-prin"],["class","content-prin",4,"ngIf"],[4,"ngIf"],["slot","fixed","vertical","bottom","horizontal","end",3,"click"],["name","add",1,"icon2"],["side","end","contentId","main-content"],[1,"ion-padding"],[1,"labelFiltros"],[3,"ngModel","ngModelChange","ionChange"],["value","Todos"],["expand","block","fill","outline",3,"click"],[3,"inset",4,"ngFor","ngForOf"],[3,"inset"],[3,"click"],["slot","end"],["name","star",2,"color","gold"],[3,"ngStyle"],[1,"botones"],[3,"disabled","click"],["slot","end",3,"disabled","click"]],template:function(t,o){1&t&&(e.TgZ(0,"section",0)(1,"ion-grid")(2,"ion-searchbar",1),e.NdJ("ionInput",function(r){return o.handleInput(r)}),e.qZA()()(),e.TgZ(3,"section",0)(4,"ion-grid")(5,"ion-segment",2),e.NdJ("ionChange",function(r){return o.segmentChanged(r)})("click",function(){return o.deleteFilter()}),e.TgZ(6,"ion-segment-button",3),e.NdJ("click",function(){return o.loadMedia()}),e._UZ(7,"ion-icon",4),e.TgZ(8,"ion-label"),e._uU(9,"Home"),e.qZA()(),e.TgZ(10,"ion-segment-button",5),e.NdJ("click",function(){return o.loadMovie()}),e._UZ(11,"ion-icon",6),e.TgZ(12,"ion-label"),e._uU(13,"Peliculas"),e.qZA()(),e.TgZ(14,"ion-segment-button",7),e.NdJ("click",function(){return o.loadSerie()}),e._UZ(15,"ion-icon",8),e.TgZ(16,"ion-label"),e._uU(17,"Series"),e.qZA()(),e.TgZ(18,"ion-segment-button",9),e.NdJ("click",function(){return o.loadAnime()}),e._UZ(19,"ion-icon",10),e.TgZ(20,"ion-label"),e._uU(21,"Anime"),e.qZA()(),e.TgZ(22,"ion-segment-button",11),e.NdJ("click",function(){return o.loadGame()}),e._UZ(23,"ion-icon",12),e.TgZ(24,"ion-label"),e._uU(25,"Juegos"),e.qZA()(),e.TgZ(26,"ion-segment-button",13),e.NdJ("click",function(){return o.loadBook()}),e._UZ(27,"ion-icon",14),e.TgZ(28,"ion-label"),e._uU(29,"Libros"),e.qZA()()()(),e._UZ(30,"ion-loading",15),e.qZA(),e.TgZ(31,"section",0)(32,"div",16)(33,"ion-item",17)(34,"ion-label"),e._uU(35),e.qZA(),e.TgZ(36,"ion-menu-toggle"),e._UZ(37,"ion-icon",18),e.qZA()()()(),e.TgZ(38,"ion-content",19),e.YNc(39,U,1,0,"ion-card",20),e.YNc(40,H,2,1,"div",21),e.YNc(41,I,7,3,"div",21),e.TgZ(42,"ion-fab",22),e.NdJ("click",function(){return o.abrirModal()}),e.TgZ(43,"ion-fab-button"),e._UZ(44,"ion-icon",23),e.qZA()()(),e.TgZ(45,"ion-menu",24)(46,"ion-header")(47,"ion-toolbar")(48,"ion-title"),e._uU(49,"Filtros"),e.qZA()()(),e.TgZ(50,"ion-content",25)(51,"ion-list")(52,"ion-item")(53,"ion-label",26),e._uU(54,"Por anio"),e.qZA(),e.TgZ(55,"ion-select",27),e.NdJ("ngModelChange",function(r){return o.miSelectValue=r})("ionChange",function(r){return o.filterYear(r)}),e.TgZ(56,"ion-select-option",28),e._uU(57,"Todos"),e.qZA(),e.TgZ(58,"ion-select-option"),e._uU(59,"2019"),e.qZA(),e.TgZ(60,"ion-select-option"),e._uU(61,"2020"),e.qZA(),e.TgZ(62,"ion-select-option"),e._uU(63,"2021"),e.qZA(),e.TgZ(64,"ion-select-option"),e._uU(65,"2022"),e.qZA(),e.TgZ(66,"ion-select-option"),e._uU(67,"2023"),e.qZA(),e.TgZ(68,"ion-select-option"),e._uU(69,"2024"),e.qZA()()(),e.TgZ(70,"ion-item")(71,"ion-label",26),e._uU(72,"Por puntaje"),e.qZA(),e.TgZ(73,"ion-select",27),e.NdJ("ngModelChange",function(r){return o.miSelectValue3=r})("ionChange",function(r){return o.filterScore(r)}),e.TgZ(74,"ion-select-option",28),e._uU(75,"Todos"),e.qZA(),e.TgZ(76,"ion-select-option"),e._uU(77,"1"),e.qZA(),e.TgZ(78,"ion-select-option"),e._uU(79,"2"),e.qZA(),e.TgZ(80,"ion-select-option"),e._uU(81,"3"),e.qZA(),e.TgZ(82,"ion-select-option"),e._uU(83,"4"),e.qZA(),e.TgZ(84,"ion-select-option"),e._uU(85,"5"),e.qZA()()(),e.TgZ(86,"ion-item")(87,"ion-button",29),e.NdJ("click",function(){return o.mostrarAlert()}),e._uU(88,"Agregar Categorias"),e.qZA()(),e.TgZ(89,"ion-item")(90,"ion-button",29),e.NdJ("click",function(){return o.deleteFilter()}),e._uU(91,"BORRAR TODO"),e.qZA()()()()()),2&t&&(e.xp6(5),e.Q6J("scrollable",!0),e.xp6(25),e.Q6J("duration",1500),e.xp6(5),e.hij(" ",o.regNum," resultados"),e.xp6(4),e.Q6J("ngIf","all"===o.selectedSegment),e.xp6(1),e.Q6J("ngIf","all"!=o.selectedSegment),e.xp6(1),e.Q6J("ngIf","all"===o.selectedSegment),e.xp6(14),e.Q6J("ngModel",o.miSelectValue),e.xp6(18),e.Q6J("ngModel",o.miSelectValue3))},dependencies:[g.sg,g.O5,g.PC,p.JJ,p.On,s.yp,s.YG,s.PM,s.W2,s.IJ,s.W4,s.jY,s.Gu,s.gu,s.Ie,s.Q$,s.q_,s.wh,s.z0,s.zc,s.VI,s.cJ,s.GO,s.t9,s.n0,s.wd,s.sr,s.QI,s.j9],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}ion-card-title[_ngcontent-%COMP%]{margin-top:5%;margin-left:20px;margin-bottom:0}ion-avatar[_ngcontent-%COMP%]{--border-radius: 4px}ion-fab-button[_ngcontent-%COMP%]::part(native){background-color:#fff;border-radius:15px;box-shadow:0 1px 2px #0000004d,0 1px 3px 1px #00000026;color:#000}ion-fab-button[_ngcontent-%COMP%]::part(native):hover:after{background-color:#fff}ion-fab-button[_ngcontent-%COMP%]::part(native):active:after{background-color:#fff}.block[_ngcontent-%COMP%]{width:100%;height:300px;display:flex;align-items:center;justify-content:center}ion-modal[_ngcontent-%COMP%]{--height: auto}.content-prin[_ngcontent-%COMP%]{--background: linear-gradient(to right, #000, #334e65)}.sectionNew[_ngcontent-%COMP%]{background:linear-gradient(to right,#000,#334e65)}ion-list[_ngcontent-%COMP%]{background-color:#1a2936}ion-item[_ngcontent-%COMP%]{--background: #1A2936;color:#fff}ion-label[_ngcontent-%COMP%]{color:#fff}ion-icon[_ngcontent-%COMP%]{color:#fff}.icon2[_ngcontent-%COMP%]{color:#000}ion-segment-button[_ngcontent-%COMP%]{--indicator-color: #fff}ion-segment.segment-scrollable[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.ion-padding[_ngcontent-%COMP%]{--background: #1A2936}.filtros[_ngcontent-%COMP%]{margin-left:5%;--background: none;width:90%}.labelFiltros[_ngcontent-%COMP%]{color:#c7c3c3}.my-modal[_ngcontent-%COMP%]{--background: red}.botones[_ngcontent-%COMP%]{--background: none}"]}),i})()}];let Q=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[A.Bz.forChild(G),A.Bz]}),i})(),B=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({providers:[s.Br],imports:[g.ez,p.u5,s.Pc,Q]}),i})()}}]);