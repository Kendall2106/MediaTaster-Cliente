"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2313],{2313:(f,a,n)=>{n.r(a),n.d(a,{HomePageModule:()=>h});var l=n(6814),i=n(5548),u=n(95),c=n(4670),o=n(6689),s=n(9862),g=n(553);let m=(()=>{class e{constructor(t){this.http=t,this.urlModulo=g.N.urlAPI,this.httpOptions2={headers:new s.WM({mimeType:"multipart/form-data","Access-Control-Allow-Origin":"*"})},console.log("Servicio HTTP")}loadMovie(){return this.http.get(this.urlModulo,this.httpOptions2)}}return e.\u0275fac=function(t){return new(t||e)(o.LFG(s.eN))},e.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const p=[{path:"",component:(()=>{class e{constructor(t){this.movieService=t}ngOnInit(){console.log("Hola"),this.movieService.loadMovie().subscribe(t=>{console.log(t)})}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(m))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-home"]],decls:16,vars:2,consts:[[3,"translucent"],[3,"fullscreen"],["collapse","condense"],["size","large"],["id","container"],["target","_blank","rel","noopener noreferrer","href","https://ionicframework.com/docs/components"]],template:function(t,M){1&t&&(o.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),o._uU(3," Blank "),o.qZA()()(),o.TgZ(4,"ion-content",1)(5,"ion-header",2)(6,"ion-toolbar")(7,"ion-title",3),o._uU(8,"Blank"),o.qZA()()(),o.TgZ(9,"div",4)(10,"strong"),o._uU(11,"Ready to create an app?"),o.qZA(),o.TgZ(12,"p"),o._uU(13,"Start with Ionic "),o.TgZ(14,"a",5),o._uU(15,"UI Components"),o.qZA()()()()),2&t&&(o.Q6J("translucent",!0),o.xp6(4),o.Q6J("fullscreen",!0))},dependencies:[i.W2,i.Gu,i.wd,i.sr],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),e})()}];let d=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[c.Bz.forChild(p),c.Bz]}),e})(),h=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[l.ez,u.u5,i.Pc,d]}),e})()}}]);