"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2205],{2205:(y,d,l)=>{l.r(d),l.d(d,{HomePageModule:()=>P});var g=l(6814),i=l(5548),p=l(95),m=l(4670),v=l(5861),e=l(6689),c=l(9862),u=l(553);let f=(()=>{class o{constructor(t){this.http=t,this.urlModulo=u.N.urlAPI,this.httpOptions2={headers:new c.WM({mimeType:"multipart/form-data","Access-Control-Allow-Origin":"*"})},console.log("Servicio HTTP")}loadMovie(){return this.http.get(this.urlModulo+"listMovie/",this.httpOptions2)}loadMedia(){return this.http.get(this.urlModulo+"listMedia/",this.httpOptions2)}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(c.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})(),b=(()=>{class o{constructor(t){this.http=t,this.urlModulo=u.N.urlAPI,this.httpOptions2={headers:new c.WM({mimeType:"multipart/form-data","Access-Control-Allow-Origin":"*"})},console.log("Servicio HTTP")}loadBook(){return this.http.get(this.urlModulo+"listBook/",this.httpOptions2)}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(c.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})(),Z=(()=>{class o{constructor(t){this.http=t,this.urlModulo=u.N.urlAPI,this.httpOptions2={headers:new c.WM({mimeType:"multipart/form-data","Access-Control-Allow-Origin":"*"})},console.log("Servicio HTTP")}loadAnime(){return this.http.get(this.urlModulo+"listAnime/",this.httpOptions2)}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(c.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})(),M=(()=>{class o{constructor(t){this.http=t,this.urlModulo=u.N.urlAPI,this.httpOptions2={headers:new c.WM({mimeType:"multipart/form-data","Access-Control-Allow-Origin":"*"})},console.log("Servicio HTTP")}loadGame(){return this.http.get(this.urlModulo+"listGame/",this.httpOptions2)}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(c.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})(),T=(()=>{class o{constructor(t){this.http=t,this.urlModulo=u.N.urlAPI,this.httpOptions2={headers:new c.WM({mimeType:"multipart/form-data","Access-Control-Allow-Origin":"*"})},console.log("Servicio HTTP")}loadSeries(){return this.http.get(this.urlModulo+"listSerie/",this.httpOptions2)}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(c.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();function S(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"ion-list",23)(1,"ion-item",24),e.NdJ("click",function(){const s=e.CHM(t).$implicit,h=e.oxw();return e.KtG(h.presentAlert(s,h.selectedSegment))}),e.TgZ(2,"ion-avatar",25),e._UZ(3,"img",26),e.qZA(),e.TgZ(4,"ion-label"),e._uU(5),e._UZ(6,"br"),e._uU(7),e.qZA(),e._UZ(8,"ion-label"),e.TgZ(9,"ion-label"),e._uU(10),e._UZ(11,"ion-icon",27),e.qZA()()()}if(2&o){const t=a.$implicit;e.Q6J("inset",!0),e.xp6(5),e.Oqu(t.media_name),e.xp6(2),e.hij("",t.date," "),e.xp6(3),e.hij("",t.score," ")}}const A=[{path:"",component:(()=>{class o{constructor(t,n,r,s,h,_,O){this.alertController=t,this.movieService=n,this.bookService=r,this.animeService=s,this.gameService=h,this.serieService=_,this.actionSheetController=O,this.data=[],this.movies=[],this.books=[],this.selectedSegment="",this.results=[...this.data],this.darkMode=!1}ngOnInit(){}loadMovie(){this.movieService.loadMovie().subscribe(t=>{this.dateChange(t),this.data=t})}loadMedia(){this.movieService.loadMedia().subscribe(t=>{this.dateChange(t),this.data=t})}dateChange(t){for(let n=0;n<t.length;n++){const r=new Date(t[n].date);t[n].date=r.getDate()+"/"+(r.getMonth()+1)+"/"+r.getFullYear()}}loadBook(){this.bookService.loadBook().subscribe(t=>{this.dateChange(t),this.data=t})}loadGame(){this.gameService.loadGame().subscribe(t=>{this.dateChange(t),this.data=t})}loadAnime(){this.animeService.loadAnime().subscribe(t=>{this.dateChange(t),this.data=t})}loadSerie(){this.serieService.loadSeries().subscribe(t=>{this.dateChange(t),this.data=t})}refrescar(){this.ngOnInit()}segmentChanged(t){const n=t.detail.value;switch(this.selectedSegment=n,n){case"home":this.clear(),this.loadMedia();break;case"peliculas":this.clear(),this.loadMovie();break;case"series":this.clear(),this.loadSerie();break;case"anime":this.clear(),this.loadAnime();break;case"juegos":this.clear(),this.loadGame();break;case"libros":this.clear(),this.loadBook();break;default:this.clear()}}handleInput(t){const n=t.target.value.toLowerCase();console.log(n),this.data=this.data.filter(r=>r.media_name.toLowerCase().indexOf(n)>-1)}clear(){this.data=[]}presentAlert(t,n){var r=this;return(0,v.Z)(function*(){let s="";"series"==n||"anime"==n?s="Temporadas: "+t.Temp:"juegos"==n?s="Horas: "+t.hours:"libros"==n&&(s="Paginas: "+t.pages),yield(yield r.alertController.create({header:t.media_name,subHeader:"Categoria: "+t.type_name,message:s,buttons:["OK"]})).present()})()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(i.Br),e.Y36(f),e.Y36(b),e.Y36(Z),e.Y36(M),e.Y36(T),e.Y36(i.BX))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-home"]],decls:43,vars:4,consts:[[3,"debounce","ionInput"],["id","open-loading","value","heart",3,"scrollable","ionChange"],["value","all"],["name","home"],["value","peliculas"],["name","videocam-outline"],["value","series"],["name","aperture-outline"],["value","anime"],["name","ribbon-outline"],["value","juegos"],["name","game-controller-outline"],["value","libros"],["name","book-outline"],["trigger","open-loading","message","Loading...",1,"custom-loading",3,"duration"],["color","light"],[3,"inset",4,"ngFor","ngForOf"],["slot","fixed","vertical","bottom","horizontal","end"],["name","chevron-up-circle"],["side","top"],["name","document"],["name","color-palette"],["name","globe"],[3,"inset"],[3,"click"],["slot","start"],["src","https://ionicframework.com/docs/img/demos/avatar.svg"],["name","star",2,"color","yellow"]],template:function(t,n){1&t&&(e.TgZ(0,"section")(1,"ion-grid")(2,"ion-searchbar",0),e.NdJ("ionInput",function(s){return n.handleInput(s)}),e.qZA()()(),e.TgZ(3,"section")(4,"ion-grid")(5,"ion-segment",1),e.NdJ("ionChange",function(s){return n.segmentChanged(s)}),e.TgZ(6,"ion-segment-button",2),e._UZ(7,"ion-icon",3),e.TgZ(8,"ion-label"),e._uU(9,"Home"),e.qZA()(),e.TgZ(10,"ion-segment-button",4),e._UZ(11,"ion-icon",5),e.TgZ(12,"ion-label"),e._uU(13,"Peliculas"),e.qZA()(),e.TgZ(14,"ion-segment-button",6),e._UZ(15,"ion-icon",7),e.TgZ(16,"ion-label"),e._uU(17,"Series"),e.qZA()(),e.TgZ(18,"ion-segment-button",8),e._UZ(19,"ion-icon",9),e.TgZ(20,"ion-label"),e._uU(21,"Anime"),e.qZA()(),e.TgZ(22,"ion-segment-button",10),e._UZ(23,"ion-icon",11),e.TgZ(24,"ion-label"),e._uU(25,"Juegos"),e.qZA()(),e.TgZ(26,"ion-segment-button",12),e._UZ(27,"ion-icon",13),e.TgZ(28,"ion-label"),e._uU(29,"Libros"),e.qZA()()()(),e._UZ(30,"ion-loading",14),e.qZA(),e.TgZ(31,"ion-content",15),e.YNc(32,S,12,4,"ion-list",16),e.TgZ(33,"ion-fab",17)(34,"ion-fab-button"),e._UZ(35,"ion-icon",18),e.qZA(),e.TgZ(36,"ion-fab-list",19)(37,"ion-fab-button"),e._UZ(38,"ion-icon",20),e.qZA(),e.TgZ(39,"ion-fab-button"),e._UZ(40,"ion-icon",21),e.qZA(),e.TgZ(41,"ion-fab-button"),e._UZ(42,"ion-icon",22),e.qZA()()()()),2&t&&(e.xp6(2),e.Q6J("debounce",1e3),e.xp6(3),e.Q6J("scrollable",!0),e.xp6(25),e.Q6J("duration",1500),e.xp6(2),e.Q6J("ngForOf",n.data))},dependencies:[g.sg,i.BJ,i.W2,i.IJ,i.W4,i.zq,i.jY,i.gu,i.Ie,i.Q$,i.q_,i.wh,i.VI,i.cJ,i.GO,i.QI,i.j9],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}ion-card-title[_ngcontent-%COMP%]{margin-top:5%;margin-left:20px;margin-bottom:0}ion-avatar[_ngcontent-%COMP%]{--border-radius: 4px}ion-fab-button[_ngcontent-%COMP%]::part(native){background-color:#b7f399;border-radius:15px;box-shadow:0 1px 2px #0000004d,0 1px 3px 1px #00000026;color:#000}ion-fab-button[_ngcontent-%COMP%]::part(native):hover:after{background-color:#a3e681}ion-fab-button[_ngcontent-%COMP%]::part(native):active:after{background-color:#87d361}.block[_ngcontent-%COMP%]{width:100%;height:300px;display:flex;align-items:center;justify-content:center}ion-modal[_ngcontent-%COMP%]{--height: auto}"]}),o})()}];let C=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[m.Bz.forChild(A),m.Bz]}),o})(),P=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({providers:[i.Br],imports:[g.ez,p.u5,i.Pc,C]}),o})()}}]);