webpackJsonp([1],{"5AqT":function(t,n){},"7zck":function(t,n){},AhIe:function(t,n){},D4uH:function(t,n,e){"use strict";var i={},o={name:"icon",props:{name:{type:String,validator:function(t){return t?t in i||(console.warn('Invalid prop: prop "name" is referring to an unregistered icon "'+t+'".\nPlease make sure you have imported this icon before using it.'),!1):(console.warn('Invalid prop: prop "name" is required.'),!1)}},scale:[Number,String],spin:Boolean,inverse:Boolean,pulse:Boolean,flip:{validator:function(t){return"horizontal"===t||"vertical"===t}},label:String},data:function(){return{x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var t=this.scale;return t=void 0===t?1:Number(t),isNaN(t)||t<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):t*this.outerScale},klass:function(){return{"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-inverse":this.inverse,"fa-pulse":this.pulse}},icon:function(){return this.name?i[this.name]:null},box:function(){return this.icon?"0 0 "+this.icon.width+" "+this.icon.height:"0 0 "+this.width+" "+this.height},ratio:function(){if(!this.icon)return 1;var t=this.icon,n=t.width,e=t.height;return Math.max(n,e)/16},width:function(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}},raw:function(){if(!this.icon||!this.icon.raw)return null;var t=this.icon.raw,n={};return t=t.replace(/\s(?:xml:)?id=(["']?)([^"')\s]+)\1/g,function(t,e,i){var o="fa-"+(a++).toString(16);return n[i]=o,' id="'+o+'"'}),t=t.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,function(t,e,i,o){var a=e||o;return a&&n[a]?"#"+n[a]:t}),t}},mounted:function(){var t=this;if(!this.icon){this.$children.forEach(function(n){n.outerScale=t.normalizedScale});var n=0,e=0;this.$children.forEach(function(t){n=Math.max(n,t.width),e=Math.max(e,t.height)}),this.childrenWidth=n,this.childrenHeight=e,this.$children.forEach(function(t){t.x=(n-t.width)/2,t.y=(e-t.height)/2})}},register:function(t){for(var n in t){var e=t[n];e.paths||(e.paths=[]),e.d&&e.paths.push({d:e.d}),e.polygons||(e.polygons=[]),e.points&&e.polygons.push({points:e.points}),i[n]=e}},icons:i},a=870711;var r={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("svg",{class:t.klass,style:t.style,attrs:{version:"1.1",role:t.label?"img":"presentation","aria-label":t.label,x:t.x,y:t.y,width:t.width,height:t.height,viewBox:t.box}},[t._t("default",[t.icon&&t.icon.paths?t._l(t.icon.paths,function(n,i){return e("path",t._b({key:"path-"+i},"path",n,!1))}):t._e(),t._v(" "),t.icon&&t.icon.polygons?t._l(t.icon.polygons,function(n,i){return e("polygon",t._b({key:"polygon-"+i},"polygon",n,!1))}):t._e(),t._v(" "),t.icon&&t.icon.raw?[e("g",{domProps:{innerHTML:t._s(t.raw)}})]:t._e()])],2)},staticRenderFns:[]};var s=e("VU/8")(o,r,!1,function(t){e("5AqT")},null,null);n.a=s.exports},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("7+uW"),o=e("3EgV"),a=e.n(o);e("7zck");var r={checkStatus:function(t){t(deviceReady)},openFile:function(t,n){window.resolveLocalFileSystemURL(cordova.file.applicationDirectory+"www/hymnals-data/index.json",function(n){n.file(function(n){var e=new FileReader;e.onloadend=function(n){t(null,this.result)},e.readAsText(n)})},function(){t(!0)})}},s={data:function(){return{name:"App",users:[],drawer:!1,hymnals:[],hymnalsopen:!1,Languages:[]}},created:function(){var t=this;r.checkStatus(function(n){!function n(e){if(!0===e)return r.openFile(function(n,e){e=JSON.parse(e),t.hymnals=e;var i=void 0,o=[];for(i in t.hymnals){var a=t.hymnals[i].Language;o[a]=a}var r=[];for(var s in o)r.push({lang:s,isOpen:!1});t.Languages=r,alert(t.Languages)},"index.json"),!0;r.checkStatus(function(t){setTimeout(function(){n(t)},500)})}(n)})},methods:{openGithub:function(){window.open("https://github.com/disjfa/vuetify-sidebar-template")}}},l={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-app",{staticStyle:{"margin-top":"0px"}},[e("v-navigation-drawer",{staticClass:"indigo",staticStyle:{"margin-top":"48px"},attrs:{temporary:"",fixed:"",dark:"",height:"100%"},model:{value:t.drawer,callback:function(n){t.drawer=n},expression:"drawer"}},[e("v-list",[e("v-list-tile",[e("v-list-tile-action",[e("v-icon",[t._v("fa-home")])],1),t._v(" "),e("v-list-tile-title",[t._v("Home")])],1),t._v(" "),e("v-divider"),t._v(" "),e("v-list-group",{attrs:{"prepend-icon":"fa-book",value:"true"},model:{value:t.hymnalsopen,callback:function(n){t.hymnalsopen=n},expression:"hymnalsopen"}},[e("v-list-tile",{attrs:{slot:"activator"},slot:"activator"},[e("v-list-tile-content",[e("v-list-tile-title",[t._v("Hymnals")])],1)],1),t._v(" "),t._l(t.Languages,function(n){return e("v-list-group",{key:n.lang,attrs:{"sub-group":"","no-action":"",value:"false"},model:{value:n.isOpen,callback:function(e){t.$set(n,"isOpen",e)},expression:"tlang.isOpen"}},[e("v-list-tile",{attrs:{slot:"activator"},slot:"activator"},[e("v-list-tile-title",[t._v(t._s(n.lang))])],1),t._v(" "),t._l(t.hymnals,function(i){return i.Language===n.lang?e("v-list-tile",{key:i.id,on:{click:function(t){t.stopPropagation()}}},[i.Language===n.lang?e("v-list-tile-title",{domProps:{textContent:t._s(i.name)}}):t._e()],1):t._e()}),t._v(" "),e("v-divider")],2)})],2),t._v(" "),e("v-divider"),t._v(" "),e("v-list-tile",{attrs:{to:"/About"}},[e("v-list-tile-action",[e("v-icon",[t._v("fa-info")])],1),t._v(" "),e("v-list-tile-title",[t._v("About")])],1)],1)],1),t._v(" "),e("v-toolbar",{staticStyle:{"padding-top":"0px"},attrs:{dark:"",app:"",dense:""}},[e("v-toolbar-side-icon",{on:{click:function(n){n.stopPropagation(),t.drawer=!t.drawer}}},[e("icon",{attrs:{name:"align-justify"}})],1),t._v(" "),e("v-spacer"),t._v(" "),e("v-menu",{attrs:{transition:"slide-x-transition",bottom:"",right:""}},[e("v-btn",{staticStyle:{color:"#fff","font-weight":"bold"},attrs:{slot:"activator"},slot:"activator"},[e("v-subheader",{staticStyle:{color:"#fff","font-weight":"bold","font-size":"1.0em"}}),t._v(" "),e("v-icon",[t._v("caret-square-o-down")])],1),t._v(" "),e("v-list",t._l(t.hymnals,function(n){return e("v-list-tile",{key:n.id},[e("v-list-tile-title",[t._v(t._s(n.shortname))])],1)}))],1),t._v(" "),e("v-btn",{staticStyle:{color:"green"},attrs:{icon:""},nativeOn:{click:function(n){n.stopPropagation(),t.openGithub()}}},[e("v-icon",[t._v("fa-arrow-circle-left")])],1),t._v(" "),e("v-btn",{staticStyle:{color:"purple"},attrs:{icon:""},nativeOn:{click:function(n){n.stopPropagation(),t.openGithub()}}},[e("v-subheader",{staticStyle:{color:"#fff","font-weight":"bold","font-size":"1.0em"}})],1),t._v(" "),e("v-btn",{staticStyle:{color:"green"},attrs:{icon:""},nativeOn:{click:function(n){n.stopPropagation(),t.openGithub()}}},[e("v-icon",[t._v("fa-arrow-circle-right")])],1),t._v(" "),e("v-btn",{attrs:{icon:""}},[e("v-icon",[t._v("more_vert")])],1)],1),t._v(" "),e("v-content",{staticStyle:{padding:"0px 0px 0px 0px","margin-top":"48px"}},[e("v-fade-transition",{attrs:{mode:"out-in"}},[e("router-view")],1)],1),t._v(" "),e("v-footer",{staticClass:"DarkCyan pa-3",staticStyle:{"background-color":"Black"},attrs:{app:"",color:"#52BE80"}},[e("v-flex",{attrs:{xs1:""}},[e("v-btn",{staticStyle:{color:"green"},attrs:{icon:""},nativeOn:{click:function(n){n.stopPropagation(),t.openGithub()}}},[e("v-icon",[t._v("fa-arrow-circle-left")])],1)],1),t._v(" "),e("v-flex",{attrs:{xs2:""}},[e("v-btn",{staticStyle:{color:"green"},attrs:{icon:""},nativeOn:{click:function(n){n.stopPropagation(),t.openGithub()}}},[e("v-icon",[t._v("fa-arrow-circle-right")])],1)],1),t._v(" "),e("v-flex",{attrs:{xs2:""}},[e("v-btn",{staticStyle:{color:"purple"},attrs:{icon:""},nativeOn:{click:function(n){n.stopPropagation(),t.openGithub()}}},[e("v-icon",[t._v("fa-search")])],1)],1),t._v(" "),e("v-flex",{attrs:{xs2:""}},[e("v-btn",{staticStyle:{color:"purple"},attrs:{icon:"",to:"/Settings"}},[e("v-icon",[t._v("fa-gear")])],1)],1),t._v(" "),e("v-flex",{attrs:{xs6:""}},[e("v-btn",{attrs:{round:"",fab:"",color:"success",to:"/HymnNumbers"}},[e("v-icon",[t._v("dialpad")])],1)],1),t._v(" "),e("v-flex",{attrs:{xs2:""}},[e("v-btn",{staticStyle:{color:"green"},attrs:{icon:""},nativeOn:{click:function(n){n.stopPropagation(),t.openGithub()}}},[e("v-icon",[t._v("help")])],1)],1)],1)],1)},staticRenderFns:[]};var c=e("VU/8")(s,l,!1,function(t){e("AhIe"),e("sf3N")},null,null).exports,v=e("/ocq"),u=void 0;var p={setCurrentHymnal:function(t){u=t},getCurrentHymnal:function(){return u}},h={data:function(){return{states:p}},mounted:function(){},created:function(){},methods:{openGithub:function(){window.open("https://github.com/disjfa/vuetify-sidebar-template")},gotoHymnNumber:function(){console.log("clicked..."),w.go("/HymnNumbers")}}},f={render:function(){var t=this.$createElement,n=this._self._c||t;return n("v-app",[n("textarea",{attrs:{id:"textArea"}},[this._v("Somethings in appp")]),this._v("\n    Somethings in appp\n\n\n    "),n("textarea",{attrs:{id:"textArea"}})])},staticRenderFns:[]},d=(e("VU/8")(h,f,!1,null,null,null).exports,{data:function(){return{numbers:[{row1:[1,2,3],row2:[4,5,6],row3:[7,8,9]}]}},methods:{typeNumber:function(t){console.log("typed... "+t),console.log(p.currentHymnal())},backspaceNumber:function(){},gotoNumber:function(){}}}),m={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-container",{staticStyle:{"margin-top":"48px"},attrs:{"grid-list-md":"","text-xs-center":""}},[e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{xs12:""}},[t._v("\n    Enter Hymn Number\n    ")]),t._v(" "),t._l(t.numbers[0].row1,function(n){return e("v-flex",{key:"4"+n,attrs:{xs4:""}},[e("v-card",{attrs:{dark:"",color:"primary"}},[e("v-btn",{attrs:{icon:""},nativeOn:{click:function(e){e.stopPropagation(),t.typeNumber(n)}}},[e("v-card-text",{staticClass:"px-0",staticStyle:{"font-size":"2em","font-weight":"bold"}},[t._v(t._s(n))])],1)],1)],1)}),t._v(" "),t._l(t.numbers[0].row2,function(n){return e("v-flex",{key:"4"+n,attrs:{xs4:""}},[e("v-card",{attrs:{dark:"",color:"primary"}},[e("v-btn",{attrs:{icon:""},nativeOn:{click:function(e){e.stopPropagation(),t.typeNumber(n)}}},[e("v-card-text",{staticClass:"px-0",staticStyle:{"font-size":"2em","font-weight":"bold"}},[t._v(t._s(n))])],1)],1)],1)}),t._v(" "),t._l(t.numbers[0].row3,function(n){return e("v-flex",{key:"4"+n,attrs:{xs4:""}},[e("v-card",{attrs:{dark:"",color:"primary"}},[e("v-btn",{attrs:{icon:""},nativeOn:{click:function(e){e.stopPropagation(),t.typeNumber(n)}}},[e("v-card-text",{staticClass:"px-0",staticStyle:{"font-size":"2em","font-weight":"bold"}},[t._v(t._s(n))])],1)],1)],1)}),t._v(" "),e("v-flex",{attrs:{xs4:""}},[e("v-card",{attrs:{dark:"",color:"primary"}},[e("v-btn",{attrs:{icon:""},nativeOn:{click:function(n){n.stopPropagation(),t.typeNumber()}}},[e("v-icon",{staticStyle:{"font-size":"2em","font-weight":"bold"}},[t._v("cancel")])],1)],1)],1),t._v(" "),e("v-flex",{attrs:{xs4:""}},[e("v-card",{attrs:{dark:"",color:"primary"}},[e("v-btn",{attrs:{icon:""},nativeOn:{click:function(n){n.stopPropagation(),t.typeNumber(0)}}},[e("v-card-text",{staticClass:"px-0",staticStyle:{"font-size":"2em","font-weight":"bold"}},[t._v("0")])],1)],1)],1),t._v(" "),e("v-flex",{attrs:{xs4:""}},[e("v-card",{attrs:{dark:"",color:"primary"}},[e("v-btn",{attrs:{icon:""},nativeOn:{click:function(n){n.stopPropagation(),t.backspaceNumber()}}},[e("v-icon",{staticStyle:{"font-size":"2em","font-weight":"bold"}},[t._v("backspace")])],1)],1)],1),t._v(" "),e("v-flex",{attrs:{xs12:""}},[e("v-card",{attrs:{dark:"",color:"primary"}},[e("v-btn",{attrs:{icon:""},nativeOn:{click:function(n){n.stopPropagation(),t.gotoNumber()}}},[e("v-card-text",{staticClass:"px-0",staticStyle:{"font-size":"2em","font-weight":"bold"}},[t._v("GO")])],1)],1)],1)],2)],1)},staticRenderFns:[]},_=e("VU/8")(d,m,!1,null,null,null).exports,g={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"hello"},[e("h1",[t._v(t._s(t.msg))]),t._v(" "),e("h2",[t._v("About....")]),t._v(" "),t._m(0),t._v(" "),e("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ul",[e("li",[e("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        What should be included here? About App, About Creator\n      ")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),e("br"),t._v(" "),e("li",[e("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),n("li",[n("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),n("li",[n("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var b=e("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},g,!1,function(t){e("yI25")},"data-v-0bddcbde",null).exports,y={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-list",[e("v-list-tile",[e("v-list-tile-action",[e("v-icon",[t._v("home")])],1),t._v(" "),e("v-list-tile-title",[t._v("Donate")])],1),t._v(" "),e("v-divider"),t._v(" "),e("v-list-tile",[e("v-list-tile-action",[e("v-icon",[t._v("flag")])],1),t._v(" "),e("v-list-tile-title",[t._v("Report Problems")])],1),t._v(" "),e("v-divider"),t._v(" "),e("v-list-tile",[e("v-list-tile-action",[e("v-icon",[t._v("home")])],1),t._v(" "),e("v-list-tile-title",[t._v("Send Feedback")])],1),t._v(" "),e("v-divider"),t._v(" "),e("v-list-tile",[e("v-list-tile-action",[e("v-icon",[t._v("home")])],1),t._v(" "),e("v-list-tile-title",[t._v("Update Hymnals")])],1),t._v(" "),e("v-divider")],1)},staticRenderFns:[]};var x=e("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},y,!1,function(t){e("tp91")},"data-v-64ccdf76",null).exports;i.a.use(v.a);var w=new v.a({routes:[{path:"/",name:"HymnNumbers",component:_},{path:"/HymnNumbers",name:"HymnNumbers",component:_},{path:"/About",name:"About",component:b},{path:"/Settings",name:"Settings",component:x}]}),k=(e("8AWp"),e("Em2B"),e("jpe6"),e("b4+G"),e("Nbi/"),e("D4uH"));i.a.component("icon",k.a),i.a.use(a.a),i.a.config.productionTip=!1,i.a.config.ignoredElements=[],new i.a({el:"#app",router:w,components:{App:c},template:"<App/>"})},sf3N:function(t,n){},tp91:function(t,n){},yI25:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.8e14d4495700e9d1b627.js.map