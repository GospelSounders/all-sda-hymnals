webpackJsonp([1],{"5AqT":function(t,n){},"7zck":function(t,n){},D4uH:function(t,n,e){"use strict";var a={},r={name:"icon",props:{name:{type:String,validator:function(t){return t?t in a||(console.warn('Invalid prop: prop "name" is referring to an unregistered icon "'+t+'".\nPlease make sure you have imported this icon before using it.'),!1):(console.warn('Invalid prop: prop "name" is required.'),!1)}},scale:[Number,String],spin:Boolean,inverse:Boolean,pulse:Boolean,flip:{validator:function(t){return"horizontal"===t||"vertical"===t}},label:String},data:function(){return{x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var t=this.scale;return t=void 0===t?1:Number(t),isNaN(t)||t<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):t*this.outerScale},klass:function(){return{"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-inverse":this.inverse,"fa-pulse":this.pulse}},icon:function(){return this.name?a[this.name]:null},box:function(){return this.icon?"0 0 "+this.icon.width+" "+this.icon.height:"0 0 "+this.width+" "+this.height},ratio:function(){if(!this.icon)return 1;var t=this.icon,n=t.width,e=t.height;return Math.max(n,e)/16},width:function(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}},raw:function(){if(!this.icon||!this.icon.raw)return null;var t=this.icon.raw,n={};return t=t.replace(/\s(?:xml:)?id=(["']?)([^"')\s]+)\1/g,function(t,e,a){var r="fa-"+(i++).toString(16);return n[a]=r,' id="'+r+'"'}),t=t.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,function(t,e,a,r){var i=e||r;return i&&n[i]?"#"+n[i]:t}),t}},mounted:function(){var t=this;if(!this.icon){this.$children.forEach(function(n){n.outerScale=t.normalizedScale});var n=0,e=0;this.$children.forEach(function(t){n=Math.max(n,t.width),e=Math.max(e,t.height)}),this.childrenWidth=n,this.childrenHeight=e,this.$children.forEach(function(t){t.x=(n-t.width)/2,t.y=(e-t.height)/2})}},register:function(t){for(var n in t){var e=t[n];e.paths||(e.paths=[]),e.d&&e.paths.push({d:e.d}),e.polygons||(e.polygons=[]),e.points&&e.polygons.push({points:e.points}),a[n]=e}},icons:a},i=870711;var o={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("svg",{class:t.klass,style:t.style,attrs:{version:"1.1",role:t.label?"img":"presentation","aria-label":t.label,x:t.x,y:t.y,width:t.width,height:t.height,viewBox:t.box}},[t._t("default",[t.icon&&t.icon.paths?t._l(t.icon.paths,function(n,a){return e("path",t._b({key:"path-"+a},"path",n,!1))}):t._e(),t._v(" "),t.icon&&t.icon.polygons?t._l(t.icon.polygons,function(n,a){return e("polygon",t._b({key:"polygon-"+a},"polygon",n,!1))}):t._e(),t._v(" "),t.icon&&t.icon.raw?[e("g",{domProps:{innerHTML:t._s(t.raw)}})]:t._e()])],2)},staticRenderFns:[]};var l=e("VU/8")(r,o,!1,function(t){e("5AqT")},null,null);n.a=l.exports},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("7+uW"),r=e("3EgV"),i=e.n(r),o=(e("7zck"),e("mvHQ")),l=e.n(o),s=e("fZjL"),c=e.n(s),u=e("Zrlr"),m=e.n(u),v=e("wxAW"),d=e.n(v);function h(t){window.resolveLocalFileSystemURL(cordova.file.dataDirectory,function(n){window.resolveLocalFileSystemURL(cordova.file.applicationDirectory+"www/hymnals-data/"+t,function(t){window.resolveLocalFileSystemURL(cordova.file.dataDirectory,function(t){try{window.resolveLocalFileSystemURL(cordova.file.dataDirectory+"www/hymnals-data",function(t){},function(){t.getDirectory("www",{create:!0},function(t){window.resolveLocalFileSystemURL(cordova.file.applicationDirectory+"www",function(t){t.getDirectory("hymnals-data",{create:!1},function(t){window.resolveLocalFileSystemURL(cordova.file.dataDirectory+"www",function(n){t.copyTo(n,"hymnals-data",function(){},function(t){})},null)},function(){})},function(){})},function(t){})})}catch(t){}},function(){})},null)},null)}function y(t,n){window.resolveLocalFileSystemURL(n,function(n){n.file(function(n){var e=new FileReader;e.onloadend=function(n){return t(null,this.result)},e.readAsText(n)})},function(){t(!0)})}var p={checkStatus:function(t){t(deviceReady)},openFile:function(t,n){var e=cordova.file.dataDirectory+"www/hymnals-data/"+n;y(function(a,r){if(!a)return t(a,r);h(n),y(function(n,e){return t(n,e)},e=cordova.file.applicationDirectory+"www/hymnals-data/"+n)},e)},writeFile:function(t,n,e){window.resolveLocalFileSystemURL(cordova.file.dataDirectory+"www/hymnals-data/",function(a){a.getFile(e,{create:!0,exclusive:!1},function(e){e.createWriter(function(e){var a=new Blob([n],{type:"text/plain"});e.write(a),e.onwriteend=function(){t(null)},e.onerror=function(t){}},function(t){})})},function(n){t(!0)})}},f=e("mtWM"),g=e.n(f),b={hymnalInst:new(function(){function t(){m()(this,t);var n=this;n.deviceReady=!1,n.currentHymnal={};var e=!1;p.checkStatus(function(t){!function t(a){if(!0===a&&(e=!0,n.checkHymnalsDb(function(){return n.Languages=n.Languages_d,n.hymnals=n.hymnals_d,n.default=n.default_d,n.deviceReady=!0,!0})),!0===e)return!0;p.checkStatus(function(n){setTimeout(function(){t(n)},100)})}(t)})}return d()(t,[{key:"deviceIsReady",value:function(t){var n=this;!function e(){setTimeout(function(){if(!0===n.deviceReady)return t(!0);e()},100)}()}},{key:"getHymnals",value:function(t){return t(this.Languages,this.hymnals,this.default,this.currentHymnal)}},{key:"getHymnals_d",value:function(t){return t(this.Languages_d,this.hymnals_d,this.default_d)}},{key:"gotoNumberinCurrentHymnal",value:function(t,n,e){var a=this,r=void 0,i=a.currentHymnal.hymnNumber;switch(t){case"next":r=a.currentHymnal.hymnNumber+1;break;case"prev":r=a.currentHymnal.hymnNumber-1;break;case"this":r=n;break;default:r=a.currentHymnal.hymnNumber}a.currentHymnal.hymnNumber=r,a.loadSongWords(function(){if(a.currentHymnal.hymnNumber===r)return e(a.currentHymnal);a.currentHymnal.hymnNumber=i,a.loadSongWords(function(){return e(a.currentHymnal)})})}},{key:"loadSongWords",value:function(t){var n=this;0===n.currentHymnal.hymnNumber&&(n.currentHymnal.text="Hymn still not available");var e=n.currentHymnal.path;p.openFile(function(e,a){try{return e?(n.setNavigation(),t()):(a=JSON.parse(a),n.currentHymnal.text=a.songs[n.currentHymnal.hymnNumber]||"Hymn still not available",n.currentHymnal.NumSongs=a.NumSongs,n.currentHymnal.otherHymnals=a.songs[n.currentHymnal.hymnNumber].otherHymnals,n.setNavigation(),t())}catch(e){return n.setNavigation(),t()}},e+"/index.json")}},{key:"setNavigation",value:function(){this.currentHymnal.hymnNumber>=this.currentHymnal.NumSongs?(this.currentHymnal.canGoNext=!1,this.currentHymnal.canGoBack=!0,this.currentHymnal.Dialpad=!1,this.currentHymnal.hymnNumber=this.currentHymnal.NumSongs):(this.currentHymnal.canGoNext=!0,this.currentHymnal.canGoBack=!0,this.currentHymnal.Dialpad=!1),0===this.currentHymnal.hymnNumber&&(this.currentHymnal.canGoNext=!0,this.currentHymnal.canGoBack=!1,this.currentHymnal.Dialpad=!0),(this.currentHymnal.hymnNumber<0||this.currentHymnal.hymnNumber>this.currentHymnal.NumSongs)&&(this.currentHymnal.hymnNumber=0)}},{key:"gotoHymnal",value:function(t,n){var e=this;try{var a=e.hymnals[parseInt(t)],r=e.currentHymnal;e.currentHymnal=a;try{e.currentHymnal.hymnNumber=r.otherHymnals[e.currentHymnal.id]||0}catch(t){}e.currentHymnal.hymnNumber=e.currentHymnal.hymnNumber||0,e.currentHymnal.Dialpad=!1,e.setNavigation(),e.loadSongWords(function(){return n(e.currentHymnal)})}catch(t){}}},{key:"typeNumber",value:function(t,n){try{var e=this;e.typedNumber=e.typedNumber||0,0===e.typedNumber?e.typedNumber+=t:e.typedNumber=e.typedNumber.toString()+t.toString(),e.typedNumber=parseInt(e.typedNumber);var a=e.currentHymnal.id;if(e.currentHymnal.Dialpad=!0,void 0===a&&e.gotoHymnal(e.default,function(){if(e.typedNumber>e.currentHymnal.NumSongs){var t=[];e.typedNumber=e.typedNumber.toString();var a=void 0;for(a in e.typedNumber)t.push(e.typedNumber[a]);t.pop(),t=t.join(""),e.typedNumber=t}return n(e.currentHymnal)}),e.typedNumber>e.currentHymnal.NumSongs){var r=[];e.typedNumber=e.typedNumber.toString();var i=void 0;for(i in e.typedNumber)r.push(e.typedNumber[i]);r.pop(),r=r.join(""),e.typedNumber=r}e.typedNumber=parseInt(e.typedNumber)||0,e.typedNumber.toString().length===e.currentHymnal.NumSongs.toString().length?e.gotoNumberinCurrentHymnal("this",parseInt(e.typedNumber),function(){return e.currentHymnal.hymnNumber=e.typedNumber,e.currentHymnal.Dialpad=!1,n(e.currentHymnal)}):n(e.currentHymnal)}catch(t){}}},{key:"gettypedNumber",value:function(){return this.typedNumber}},{key:"getcurrentHymnal",value:function(){return this.currentHymnal}},{key:"resettypedNumber",value:function(){this.typedNumber=null}},{key:"backspaceTypedNumber",value:function(){var t=[];this.typedNumber=this.typedNumber.toString();var n=void 0;for(n in this.typedNumber)t.push(this.typedNumber[n]);t.pop(),t=t.join(""),this.typedNumber=parseInt(t)||null}},{key:"arrangeSingleSongWords",value:function(t){var n=void 0;if("string"==typeof t)return t;try{var e=(n=t).title,a=n.stanzas,r=n.choruses,i=(n.order,n.author||""),o=n.key||"",l=void 0,s=void 0;for(s in l=[],a)l.push(s+"  "+a[s]);if(a=l,l=[],1===c()(r).length){for(s in a)l.push(a[s]),l.push(r[0]||r[1]);a=l}return{text:a.join("\n\r\n\r")+"\n\r\n\r",title:e,author:i,key:o}}catch(n){return t}}},{key:"checkOnlinedb",value:function(t){var n=this;g.a.get("https://raw.githubusercontent.com/GospelSounders/hymnals-data/master/index.json").then(function(e){var a=e.data;try{a=JSON.parse(a)}catch(t){a=a}var r=void 0;n.hymnals_d=a.hymnals,n.default_d=a.default,p.openFile(function(e,a){try{if(e)return t(!0);for(r in a=JSON.parse(a),n.hymnals_d){var i=n.hymnals_d[r].id;n.hymnals_d[r].isDownloaded=a.includes(parseInt(i))}}catch(t){}var o=[];for(r in n.hymnals_d){var l=n.hymnals_d[r].Language;o[l]=l}var s=[];for(var c in o)s.push({lang:c,isOpen:!1});return n.Languages_d=s,t()},"downloaded.json")}).catch(function(){return t(!0)})}},{key:"checklocalDb",value:function(t){var n=this;p.openFile(function(e,a){a=JSON.parse(a);n.hymnals_d=a.hymnals,n.default_d=a.default;var r=void 0;p.openFile(function(e,a){try{if(e)return t(!0);for(r in a=JSON.parse(a),n.hymnals_d){var i=n.hymnals_d[r].id;n.hymnals_d[r].isDownloaded=a.includes(parseInt(i))}}catch(t){}var o=[];for(r in n.hymnals_d){var l=n.hymnals_d[r].Language;o[l]=l}var s=[];for(var c in o)s.push({lang:c,isOpen:!1});return n.Languages_d=s,t()},"downloaded.json")},"index.json")}},{key:"checkHymnalsDb",value:function(t){var n=this;n.checkOnlinedb(function(e){if(!e)return t();n.checklocalDb(function(){return t()})})}},{key:"getHymnalsData",value:function(){}},{key:"updateHymnals",value:function(t,n){var e=void 0,a=this,r=[];for(e in t){var i=t[e];!0===i.isDownloaded&&r.push(i.id)}p.writeFile(function(){a.checkHymnalsDb(function(){return a.Languages=a.Languages_d,a.hymnals=a.hymnals_d,a.default=a.default_d,n()})},l()(r),"downloaded.json")}}]),t}())},_=e("/ocq"),N={};var H={setCurrentHymnal:function(t){N=t},getCurrentHymnal:function(){return N}},x={data:function(){return{states:H}},mounted:function(){},created:function(){},methods:{openGithub:function(){window.open("https://github.com/disjfa/vuetify-sidebar-template")},gotoHymnNumber:function(){console.log("clicked..."),C.go("/HymnNumbers")}}},w={render:function(){var t=this.$createElement,n=this._self._c||t;return n("v-app",[n("textarea",{attrs:{id:"textArea"}},[this._v("Somethings in appp")]),this._v("\n    Somethings in appp\n\n\n    "),n("textarea",{attrs:{id:"textArea"}})])},staticRenderFns:[]},k=(e("VU/8")(x,w,!1,null,null,null).exports,{data:function(){return{numbers:[{row1:[1,2,3],row2:[4,5,6],row3:[7,8,9]}],typedNumber:null}},created:function(){b.hymnalInst.resettypedNumber(),this.typedNumber=null},methods:{typeNumber:function(t){var n=this;b.hymnalInst.typeNumber(t,function(t){n.typedNumber=b.hymnalInst.gettypedNumber(),!1===t.Dialpad&&C.push("/Hymnal")})},backspaceNumber:function(){b.hymnalInst.backspaceTypedNumber(),this.typedNumber=b.hymnalInst.gettypedNumber()},canceltypeNumber:function(){b.hymnalInst.resettypedNumber(),this.typedNumber=null},gotoNumber:function(){null!==this.typedNumber&&b.hymnalInst.gotoNumberinCurrentHymnal("this",parseInt(this.typedNumber),function(){C.push("/Hymnal")})}}}),S={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-container",{staticStyle:{"margin-top":"48px"},attrs:{"grid-list-md":"","text-xs-center":""}},[e("v-layout",{attrs:{row:"",wrap:""}},[null===t.typedNumber?e("v-flex",{attrs:{xs12:""}},[t._v("\n    Enter Hymn Number\n    ")]):e("v-flex",{attrs:{xs12:""}},[t._v("\n      "+t._s(t.typedNumber)+"\n    ")]),t._v(" "),t._l(t.numbers[0].row1,function(n){return e("v-flex",{key:"4"+n,attrs:{xs4:""}},[e("v-card",{attrs:{dark:"",color:"primary"}},[e("v-btn",{attrs:{icon:""},nativeOn:{click:function(e){e.stopPropagation(),t.typeNumber(n)}}},[e("v-card-text",{staticClass:"px-0",staticStyle:{"font-size":"2em","font-weight":"bold"}},[t._v(t._s(n))])],1)],1)],1)}),t._v(" "),t._l(t.numbers[0].row2,function(n){return e("v-flex",{key:"4"+n,attrs:{xs4:""}},[e("v-card",{attrs:{dark:"",color:"primary"}},[e("v-btn",{attrs:{icon:""},nativeOn:{click:function(e){e.stopPropagation(),t.typeNumber(n)}}},[e("v-card-text",{staticClass:"px-0",staticStyle:{"font-size":"2em","font-weight":"bold"}},[t._v(t._s(n))])],1)],1)],1)}),t._v(" "),t._l(t.numbers[0].row3,function(n){return e("v-flex",{key:"4"+n,attrs:{xs4:""}},[e("v-card",{attrs:{dark:"",color:"primary"}},[e("v-btn",{attrs:{icon:""},nativeOn:{click:function(e){e.stopPropagation(),t.typeNumber(n)}}},[e("v-card-text",{staticClass:"px-0",staticStyle:{"font-size":"2em","font-weight":"bold"}},[t._v(t._s(n))])],1)],1)],1)}),t._v(" "),e("v-flex",{attrs:{xs4:""}},[e("v-card",{attrs:{dark:"",color:"primary"}},[e("v-btn",{attrs:{icon:""},nativeOn:{click:function(n){n.stopPropagation(),t.canceltypeNumber()}}},[e("v-icon",{staticStyle:{"font-size":"2em","font-weight":"bold"}},[t._v("cancel")])],1)],1)],1),t._v(" "),e("v-flex",{attrs:{xs4:""}},[e("v-card",{attrs:{dark:"",color:"primary"}},[e("v-btn",{attrs:{icon:""},nativeOn:{click:function(n){n.stopPropagation(),t.typeNumber(0)}}},[e("v-card-text",{staticClass:"px-0",staticStyle:{"font-size":"2em","font-weight":"bold"}},[t._v("0")])],1)],1)],1),t._v(" "),e("v-flex",{attrs:{xs4:""}},[e("v-card",{attrs:{dark:"",color:"primary"}},[e("v-btn",{attrs:{icon:""},nativeOn:{click:function(n){n.stopPropagation(),t.backspaceNumber()}}},[e("v-icon",{staticStyle:{"font-size":"2em","font-weight":"bold"}},[t._v("backspace")])],1)],1)],1),t._v(" "),e("v-flex",{attrs:{xs12:""}},[e("v-card",{attrs:{dark:"",color:"primary"}},[e("v-btn",{attrs:{icon:""},nativeOn:{click:function(n){n.stopPropagation(),t.gotoNumber()}}},[e("v-card-text",{staticClass:"px-0",staticStyle:{"font-size":"2em","font-weight":"bold"}},[t._v("GO")])],1)],1)],1)],2)],1)},staticRenderFns:[]},G=e("VU/8")(k,S,!1,null,null,null).exports,D={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"hello"},[e("h1",[t._v(t._s(t.msg))]),t._v(" "),e("h2",[t._v("About....")]),t._v(" "),t._m(0),t._v(" "),e("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ul",[e("li",[e("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        What should be included here? About App, About Creator\n      ")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),e("br"),t._v(" "),e("li",[e("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),n("li",[n("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),n("li",[n("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var I=e("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},D,!1,function(t){e("yI25")},"data-v-0bddcbde",null).exports,L={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-list",[e("v-list-tile",[e("v-list-tile-action",[e("v-icon",[t._v("home")])],1),t._v(" "),e("v-list-tile-title",[t._v("Donate")])],1),t._v(" "),e("v-divider"),t._v(" "),e("v-list-tile",[e("v-list-tile-action",[e("v-icon",[t._v("flag")])],1),t._v(" "),e("v-list-tile-title",[t._v("Report Problems")])],1),t._v(" "),e("v-divider"),t._v(" "),e("v-list-tile",[e("v-list-tile-action",[e("v-icon",[t._v("home")])],1),t._v(" "),e("v-list-tile-title",[t._v("Send Feedback")])],1),t._v(" "),e("v-divider"),t._v(" "),e("v-list-tile",[e("v-list-tile-action",[e("v-icon",[t._v("home")])],1),t._v(" "),e("v-list-tile-title",[t._v("Update Hymnals")])],1),t._v(" "),e("v-divider")],1)},staticRenderFns:[]};var O=e("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},L,!1,function(t){e("tp91")},"data-v-64ccdf76",null).exports,B={data:function(){return{numbers:[{row1:[1,2,3],row2:[4,5,6],row3:[7,8,9]}],hymnNumber:0,hymnText:"",title:"",author:"",key:""}},created:function(){var t=b.hymnalInst.getcurrentHymnal();this.hymnNumber=t.hymnNumber;var n=b.hymnalInst.arrangeSingleSongWords(t.text);this.hymnText=n.text||n,this.title=n.title||"",this.author=n.author||"",this.key=n.key||""},methods:{}},z={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-container",{staticStyle:{"white-space":"pre-line","font-weight":"bold","text-align":"left"},attrs:{"grid-list-md":""}},[e("div",{staticStyle:{color:"#000","font-weight":"bold","font-size":"2.0em",padding:"0px 0px 0px 0px","text-align":"center",margin:"0px 0px 0px 0px"}},[t._v(t._s(t.title)+" ")]),t._v(" "),e("div",{staticStyle:{"background-color":"green","padding-right":"5px","padding-left":"5px","font-size":"0.5em"}},[e("div",{staticStyle:{width:"75%","text-align":"left",float:"left","padding-left":"5px"}},[t._v(t._s(t.author))]),t._v(" "),e("div",{staticStyle:{width:"25%","text-align":"right",float:"right","padding-right":"5px"}},[t._v(t._s(t.key)+" ")])]),t._v(" "),e("div",{staticStyle:{padding:"0px 0px 0px 0px","font-size":"1.5em"}},[t._v("\n    "+t._s(t.hymnText)+"\n  ")])])},staticRenderFns:[]},F=e("VU/8")(B,z,!1,null,null,null).exports,j={name:"HelloWorld",data:function(){return{hymnals:[],Languages:[]}},created:function(){var t=this;b.hymnalInst.checkHymnalsDb(function(){b.hymnalInst.getHymnals_d(function(n,e,a){t.Languages=n,t.hymnals=e})})},methods:{updateHymnals:function(){var t=this;b.hymnalInst.updateHymnals(t.hymnals,function(){b.hymnalInst.getHymnals(function(n,e,a,r){t.Languages=n,t.hymnals=e})})}}},P={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-layout",{attrs:{row:""}},[e("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[e("v-card",[e("v-list",{staticStyle:{background:"-color:red"},attrs:{"three-line":"",subheader:""}},[e("v-list-tile",[e("v-list-tile-content",[e("v-list-tile-title",[t._v("Manage Hymnals")]),t._v(" "),e("v-list-tile-sub-title",[t._v("Download new hymnals and delete old hymnals you no longer need. You need to be connected to the internet to see new hymnals")])],1)],1),t._v(" "),e("v-divider"),t._v(" "),t._l(t.Languages,function(n){return e("v-list-group",{key:n.lang,staticStyle:{background:"-color:red"},attrs:{"three-line":"",value:"false"},model:{value:n.isOpen,callback:function(e){t.$set(n,"isOpen",e)},expression:"tlang.isOpen"}},[e("v-list-tile",{attrs:{slot:"activator"},slot:"activator"},[e("v-list-tile-title",[t._v(t._s(n.lang))])],1),t._v(" "),e("v-divider"),t._v(" "),t._l(t.hymnals,function(a){return a.Language===n.lang?e("v-list-tile",{key:a.id},[e("v-list-tile-action",[e("v-checkbox",{model:{value:a.isDownloaded,callback:function(n){t.$set(a,"isDownloaded",n)},expression:"hymnal.isDownloaded"}})],1),t._v(" "),e("v-list-tile-content",[e("v-list-tile-title",{domProps:{textContent:t._s(a.name)}}),t._v(" "),e("v-list-tile-sub-title",{staticStyle:{color:"gray"},domProps:{textContent:t._s(a.longName)}})],1)],1):t._e()}),t._v(" "),e("v-divider")],2)}),t._v(" "),e("v-list-tile",[e("v-list-tile-content",[e("v-btn",{attrs:{color:"info"},nativeOn:{click:function(n){return n.stopPropagation(),t.updateHymnals(n)}}},[t._v("update")])],1)],1),t._v(" "),e("v-spacer"),t._v(" "),e("v-spacer")],2)],1)],1)],1)},staticRenderFns:[]};var R=e("VU/8")(j,P,!1,function(t){e("tbod")},"data-v-22ec1324",null).exports;a.a.use(_.a);var C=new _.a({routes:[{path:"/",name:"HymnNumbers",component:G},{path:"/HymnNumbers",name:"HymnNumbers",component:G},{path:"/About",name:"About",component:I},{path:"/Settings",name:"Settings",component:O},{path:"/Hymnal",name:"Hymnal",component:F},{path:"/ManageDownloads",name:"ManageDownloads",component:R}]}),A={data:function(){return{name:"App",users:[],drawer:!1,hymnals:[],hymnalsopen:!1,hymnalsShortopen:!1,Languages:[],currentHymnalName:"",currentHymnNumber:"",canGoNext:!1,canGoBack:!1}},watch:{$route:function(t,n){var e=b.hymnalInst.getcurrentHymnal();this.currentHymnalName=e.shortname,this.currentHymnNumber=e.hymnNumber,this.canGoNext=e.canGoNext,this.canGoBack=e.canGoBack},drawer:function(t){var n=this;b.hymnalInst.getHymnals(function(t,e,a,r){n.Languages=t,n.hymnals=e,r=e.hymnalInst.getcurrentHymnal(),n.currentHymnalName=r.shortname,n.currentHymnNumber=r.hymnNumber,n.canGoNext=r.canGoNext,n.canGoBack=r.canGoBack})},hymnalsShortopen:function(t){var n=this;b.hymnalInst.getHymnals(function(t,e,a,r){n.Languages=t,n.hymnals=e,r=e.hymnalInst.getcurrentHymnal(),n.currentHymnalName=r.shortname,n.currentHymnNumber=r.hymnNumber,n.canGoNext=r.canGoNext,n.canGoBack=r.canGoBack})}},created:function(){var t=this;b.hymnalInst.deviceIsReady(function(n){b.hymnalInst.getHymnals(function(n,e,a,r){t.Languages=n,t.hymnals=e,r=e.hymnalInst.getcurrentHymnal(),t.currentHymnalName=r.shortname,t.currentHymnNumber=r.hymnNumber,t.canGoNext=r.canGoNext,t.canGoBack=r.canGoBack})})},methods:{gotoHymnal:function(t){var n=this;n.drawer=!1,n.hymnalsShortopen=!1,b.hymnalInst.gotoHymnal(t,function(t){n.currentHymnalName=t.shortname,n.currentHymnNumber=t.hymnNumber,n.canGoNext=t.canGoNext,n.canGoBack=t.canGoBack,!1===t.Dialpad?C.push("/Hymnal?num="+n.currentHymnNumber):C.push("/HymnNumbers")})},nextHymn:function(){var t=this;b.hymnalInst.gotoNumberinCurrentHymnal("next",!1,function(n){t.currentHymnalName=n.shortname,t.currentHymnNumber=n.hymnNumber,t.canGoNext=n.canGoNext,t.canGoBack=n.canGoBack,!1===n.Dialpad?C.push("/Hymnal?num="+t.currentHymnNumber):C.push("/HymnNumbers")})},prevHymn:function(){var t=this;b.hymnalInst.gotoNumberinCurrentHymnal("prev",!1,function(n){t.currentHymnalName=n.shortname,t.currentHymnNumber=n.hymnNumber,t.canGoNext=n.canGoNext,t.canGoBack=n.canGoBack,!1===n.Dialpad?C.push("/Hymnal?num="+t.currentHymnNumber):C.push("/HymnNumbers")})}}},W={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-app",{staticStyle:{"margin-top":"0px"}},[e("v-navigation-drawer",{staticClass:"indigo",staticStyle:{"margin-top":"48px"},attrs:{temporary:"",fixed:"",dark:"",height:"100%"},model:{value:t.drawer,callback:function(n){t.drawer=n},expression:"drawer"}},[e("v-list",[e("v-list-tile",[e("v-list-tile-action",[e("v-icon",[t._v("fa-home")])],1),t._v(" "),e("v-list-tile-title",[t._v("Home")])],1),t._v(" "),e("v-divider"),t._v(" "),e("v-list-group",{attrs:{"prepend-icon":"fa-book",value:"true"},model:{value:t.hymnalsopen,callback:function(n){t.hymnalsopen=n},expression:"hymnalsopen"}},[e("v-list-tile",{attrs:{slot:"activator"},slot:"activator"},[e("v-list-tile-content",[e("v-list-tile-title",[t._v("Hymnals")])],1)],1),t._v(" "),t._l(t.Languages,function(n){return!0===t.hymnals.some(function(t,e,a){return t.Language===n.lang&&!0===t.isDownloaded})?e("v-list-group",{key:n.lang,attrs:{"sub-group":"","no-action":"",value:"false"},model:{value:n.isOpen,callback:function(e){t.$set(n,"isOpen",e)},expression:"tlang.isOpen"}},[e("v-list-tile",{attrs:{slot:"activator"},slot:"activator"},[e("v-list-tile-title",[t._v(t._s(n.lang))])],1),t._v(" "),t._l(t.hymnals,function(a){return a.Language===n.lang&&!0===a.isDownloaded?e("v-list-tile",{key:a.id,nativeOn:{click:function(n){n.stopPropagation(),t.gotoHymnal(a.id)}}},[e("v-list-tile-title",{domProps:{textContent:t._s(a.name)}})],1):t._e()}),t._v(" "),e("v-divider")],2):t._e()})],2),t._v(" "),e("v-divider"),t._v(" "),e("v-list-tile",{attrs:{slot:"activator"},slot:"activator"},[e("v-list-tile-content",[e("v-list-tile-title",[t._v("Hymnals")])],1)],1),t._v(" "),e("v-divider"),t._v(" "),e("v-list-tile",{attrs:{to:"/ManageDownloads"}},[e("v-list-tile-action",[e("v-icon",[t._v("fa-gear")])],1),t._v(" "),e("v-list-tile-title",[t._v("Downloads")])],1),t._v(" "),e("v-divider"),t._v(" "),e("v-list-tile",{attrs:{to:"/About"}},[e("v-list-tile-action",[e("v-icon",[t._v("fa-info")])],1),t._v(" "),e("v-list-tile-title",[t._v("About")])],1)],1)],1),t._v(" "),e("v-toolbar",{staticStyle:{"padding-top":"0px"},attrs:{dark:"",app:"",dense:""}},[e("v-toolbar-side-icon",{on:{click:function(n){n.stopPropagation(),t.drawer=!t.drawer}}},[e("icon",{attrs:{name:"align-justify"}})],1),t._v(" "),e("v-spacer"),t._v(" "),e("v-menu",{attrs:{transition:"slide-x-transition",bottom:"",right:""},model:{value:t.hymnalsShortopen,callback:function(n){t.hymnalsShortopen=n},expression:"hymnalsShortopen"}},[e("v-btn",{staticStyle:{color:"#fff","font-weight":"bold"},attrs:{slot:"activator"},slot:"activator"},[e("v-subheader",{staticStyle:{color:"#fff","font-weight":"bold","font-size":"1.0em"}},[t._v(t._s(t.currentHymnalName)+" ")]),t._v(" "),e("v-icon",[t._v("fa-caret-square-o-down")])],1),t._v(" "),e("v-list",t._l(t.hymnals,function(n){return!0===n.isDownloaded?e("v-list-tile",{key:n.id,nativeOn:{click:function(e){e.stopPropagation(),t.gotoHymnal(n.id)}}},[e("v-list-tile-title",[t._v(t._s(n.shortname))])],1):t._e()}))],1),t._v(" "),e("v-btn",{staticStyle:{color:"green"},attrs:{icon:"",disabled:!t.canGoBack},nativeOn:{click:function(n){n.stopPropagation(),t.prevHymn()}},model:{value:t.canGoBack,callback:function(n){t.canGoBack=n},expression:"canGoBack"}},[e("v-icon",[t._v("fa-arrow-circle-left")])],1),t._v(" "),e("v-btn",{staticStyle:{color:"purple"},attrs:{icon:"",to:"/HymnNumbers"}},[e("v-subheader",{staticStyle:{color:"#fff","font-weight":"bold","font-size":"1.0em"}},[t._v(t._s(t.currentHymnNumber)+" ")])],1),t._v(" "),e("v-btn",{staticStyle:{color:"green"},attrs:{icon:"",disabled:!t.canGoNext},nativeOn:{click:function(n){n.stopPropagation(),t.nextHymn()}},model:{value:t.canGoNext,callback:function(n){t.canGoNext=n},expression:"canGoNext"}},[e("v-icon",[t._v("fa-arrow-circle-right")])],1),t._v(" "),e("v-btn",{attrs:{icon:""}},[e("v-icon",[t._v("more_vert")])],1)],1),t._v(" "),e("v-content",{staticStyle:{padding:"0px 0px 0px 0px","margin-top":"48px"}},[e("v-fade-transition",{attrs:{mode:"out-in"}},[e("router-view",{key:t.$route.fullPath})],1)],1),t._v(" "),e("v-footer",{staticClass:"DarkCyan pa-3",staticStyle:{"background-color":"Black"},attrs:{app:"",color:"#52BE80"}},[e("v-flex",{attrs:{xs1:""}},[e("v-btn",{staticStyle:{color:"green"},attrs:{icon:"",disabled:!t.canGoBack},nativeOn:{click:function(n){n.stopPropagation(),t.prevHymn()}}},[e("v-icon",[t._v("fa-arrow-circle-left")])],1)],1),t._v(" "),e("v-flex",{attrs:{xs2:""}},[e("v-btn",{staticStyle:{color:"green"},attrs:{icon:"",disabled:!t.canGoNext},nativeOn:{click:function(n){n.stopPropagation(),t.nextHymn()}}},[e("v-icon",[t._v("fa-arrow-circle-right")])],1)],1),t._v(" "),e("v-flex",{attrs:{xs2:""}},[e("v-btn",{staticStyle:{color:"purple"},attrs:{icon:""}},[e("v-icon",[t._v("fa-search")])],1)],1),t._v(" "),e("v-flex",{attrs:{xs2:""}},[e("v-btn",{staticStyle:{color:"purple"},attrs:{icon:"",to:"/Settings"}},[e("v-icon",[t._v("fa-gear")])],1)],1),t._v(" "),e("v-flex",{attrs:{xs6:""}},[e("v-btn",{attrs:{round:"",fab:"",color:"success",to:"/HymnNumbers"}},[e("v-icon",[t._v("dialpad")])],1)],1),t._v(" "),e("v-flex",{attrs:{xs2:""}},[e("v-btn",{staticStyle:{color:"green"},attrs:{icon:""},nativeOn:{click:function(n){n.stopPropagation(),t.gotoHymnal(10)}}},[e("v-icon",[t._v("help")])],1)],1)],1)],1)},staticRenderFns:[]};var E=e("VU/8")(A,W,!1,function(t){e("rJ5r"),e("uzkh")},null,null).exports,$=(e("8AWp"),e("Em2B"),e("jpe6"),e("b4+G"),e("Nbi/"),e("D4uH"));a.a.component("icon",$.a),a.a.use(i.a),a.a.config.productionTip=!1,a.a.config.ignoredElements=[],new a.a({el:"#app",router:C,components:{App:E},template:"<App/>"})},rJ5r:function(t,n){},tbod:function(t,n){},tp91:function(t,n){},uzkh:function(t,n){},yI25:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.a937ac521d12f275f9fa.js.map