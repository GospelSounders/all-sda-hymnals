webpackJsonp([1],{"5AqT":function(t,e){},"7Ook":function(t,e){},"7zck":function(t,e){},D4uH:function(t,e,n){"use strict";var a={},r={name:"icon",props:{name:{type:String,validator:function(t){return t?t in a||(console.warn('Invalid prop: prop "name" is referring to an unregistered icon "'+t+'".\nPlease make sure you have imported this icon before using it.'),!1):(console.warn('Invalid prop: prop "name" is required.'),!1)}},scale:[Number,String],spin:Boolean,inverse:Boolean,pulse:Boolean,flip:{validator:function(t){return"horizontal"===t||"vertical"===t}},label:String},data:function(){return{x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var t=this.scale;return t=void 0===t?1:Number(t),isNaN(t)||t<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):t*this.outerScale},klass:function(){return{"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-inverse":this.inverse,"fa-pulse":this.pulse}},icon:function(){return this.name?a[this.name]:null},box:function(){return this.icon?"0 0 "+this.icon.width+" "+this.icon.height:"0 0 "+this.width+" "+this.height},ratio:function(){if(!this.icon)return 1;var t=this.icon,e=t.width,n=t.height;return Math.max(e,n)/16},width:function(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}},raw:function(){if(!this.icon||!this.icon.raw)return null;var t=this.icon.raw,e={};return t=t.replace(/\s(?:xml:)?id=(["']?)([^"')\s]+)\1/g,function(t,n,a){var r="fa-"+(i++).toString(16);return e[a]=r,' id="'+r+'"'}),t=t.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,function(t,n,a,r){var i=n||r;return i&&e[i]?"#"+e[i]:t}),t}},mounted:function(){var t=this;if(!this.icon){this.$children.forEach(function(e){e.outerScale=t.normalizedScale});var e=0,n=0;this.$children.forEach(function(t){e=Math.max(e,t.width),n=Math.max(n,t.height)}),this.childrenWidth=e,this.childrenHeight=n,this.$children.forEach(function(t){t.x=(e-t.width)/2,t.y=(n-t.height)/2})}},register:function(t){for(var e in t){var n=t[e];n.paths||(n.paths=[]),n.d&&n.paths.push({d:n.d}),n.polygons||(n.polygons=[]),n.points&&n.polygons.push({points:n.points}),a[e]=n}},icons:a},i=870711;var o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{class:t.klass,style:t.style,attrs:{version:"1.1",role:t.label?"img":"presentation","aria-label":t.label,x:t.x,y:t.y,width:t.width,height:t.height,viewBox:t.box}},[t._t("default",[t.icon&&t.icon.paths?t._l(t.icon.paths,function(e,a){return n("path",t._b({key:"path-"+a},"path",e,!1))}):t._e(),t._v(" "),t.icon&&t.icon.polygons?t._l(t.icon.polygons,function(e,a){return n("polygon",t._b({key:"polygon-"+a},"polygon",e,!1))}):t._e(),t._v(" "),t.icon&&t.icon.raw?[n("g",{domProps:{innerHTML:t._s(t.raw)}})]:t._e()])],2)},staticRenderFns:[]};var l=n("VU/8")(r,o,!1,function(t){n("5AqT")},null,null);e.a=l.exports},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),r=n("3EgV"),i=n.n(r),o=(n("7zck"),n("Xxa5")),l=n.n(o),s=n("mvHQ"),c=n.n(s),u=n("exGp"),v=n.n(u),d=n("fZjL"),m=n.n(d),h=n("Zrlr"),y=n.n(h),p=n("wxAW"),f=n.n(p);function b(t){window.resolveLocalFileSystemURL(cordova.file.dataDirectory,function(e){window.resolveLocalFileSystemURL(cordova.file.applicationDirectory+"www/hymnals-data/"+t,function(t){window.resolveLocalFileSystemURL(cordova.file.dataDirectory,function(t){try{window.resolveLocalFileSystemURL(cordova.file.dataDirectory+"www/hymnals-data",function(t){},function(){t.getDirectory("www",{create:!0},function(t){window.resolveLocalFileSystemURL(cordova.file.applicationDirectory+"www",function(t){t.getDirectory("hymnals-data",{create:!1},function(t){window.resolveLocalFileSystemURL(cordova.file.dataDirectory+"www",function(e){t.copyTo(e,"hymnals-data",function(){},function(t){})},null)},function(){})},function(){})},function(t){})})}catch(t){}},function(){})},null)},null)}function g(t,e){window.resolveLocalFileSystemURL(e,function(e){e.file(function(e){var n=new FileReader;n.onloadend=function(e){return t(null,this.result)},n.readAsText(e)})},function(){t(!0)})}var _={checkStatus:function(t){t(deviceReady)},openFile:function(t,e){var n=cordova.file.dataDirectory+"www/hymnals-data/"+e;g(function(a,r){if(!a)return t(a,r);b(e),g(function(e,n){return t(e,n)},n=cordova.file.applicationDirectory+"www/hymnals-data/"+e)},n)},writeFile:function(t,e,n){window.resolveLocalFileSystemURL(cordova.file.dataDirectory+"www/hymnals-data/",function(a){a.getFile(n,{create:!0,exclusive:!1},function(n){n.createWriter(function(n){var a=new Blob([e],{type:"text/plain"});n.write(a),n.onwriteend=function(){t(null)},n.onerror=function(){t(!0)}},function(){t(!0)})},function(){t(!0)})},function(){t(!0)})},createDirectory:function(t,e,n){void 0===n&&(n=""),window.resolveLocalFileSystemURL(cordova.file.dataDirectory+"www/hymnals-data/"+n,function(n){n.getDirectory(e,{create:!0},function(e){return t()},function(){return t(!0)})},function(e){t(!0)})}};var x={checkConnection:function(){return navigator.connection.type}},N=n("mtWM"),k=n.n(N),w=n("5KK7"),H={hymnalInst:new(function(){function t(){y()(this,t);var e=this;e.deviceReady=!1,e.currentHymnal={};var n=!1;_.checkStatus(function(t){!function t(a){if(!0===a&&(n=!0,e.checkHymnalsDb(function(){return e.Languages=e.Languages_d,e.hymnals=e.hymnals_d,e.default=e.default_d,e.deviceReady=!0,!0})),!0===n)return!0;_.checkStatus(function(e){setTimeout(function(){t(e)},100)})}(t)})}return f()(t,[{key:"deviceIsReady",value:function(t){var e=this;!function n(){setTimeout(function(){if(!0===e.deviceReady)return t(!0);n()},100)}()}},{key:"getHymnals",value:function(t){return t(this.Languages,this.hymnals,this.default,this.currentHymnal)}},{key:"getHymnals_d",value:function(t){return t(this.Languages_d,this.hymnals_d,this.default_d)}},{key:"gotoNumberinCurrentHymnal",value:function(t,e,n){var a=this,r=void 0,i=a.currentHymnal.hymnNumber;switch(t){case"next":r=a.currentHymnal.hymnNumber+1;break;case"prev":r=a.currentHymnal.hymnNumber-1;break;case"this":r=e;break;default:r=a.currentHymnal.hymnNumber}a.currentHymnal.hymnNumber=r,a.loadSongWords(function(){if(a.currentHymnal.hymnNumber===r)return n(a.currentHymnal);a.currentHymnal.hymnNumber=i,a.loadSongWords(function(){return n(a.currentHymnal)})})}},{key:"loadSongWords",value:function(t){var e=this;0===e.currentHymnal.hymnNumber&&(e.currentHymnal.text="Hymn still not available");var n=e.currentHymnal.path;_.openFile(function(n,a){try{if(n)return e.setNavigation(),t();a=JSON.parse(a),e.currentHymnal.text=a.songs[e.currentHymnal.hymnNumber]||"Hymn still not available",e.currentHymnal.NumSongs=a.NumSongs,_.openFile(function(n,a){try{a=JSON.parse(a);var r=new w.Search(e.currentHymnal.shortname),i=[];for(var o in a){var l={};for(var s in l[o]=a[o],l[o])l[o][s]=l[o][s].toString();r.addIndex([o.toString(),e.currentHymnal.shortname]),i.push(l)}r.addDocuments(i);var c=r.search(e.currentHymnal.hymnNumber.toString()),u={};for(var v in c=c[0]||[]){c=c[v];var d=0;for(var m in c)u[d++]=parseInt(c[m])}return e.currentHymnal.otherHymnals=u,e.setNavigation(),t()}catch(n){return e.setNavigation(),t()}},"allhymns.json")}catch(n){return e.setNavigation(),t()}},n+"/index.json")}},{key:"setNavigation",value:function(){this.currentHymnal.hymnNumber>=this.currentHymnal.NumSongs?(this.currentHymnal.canGoNext=!1,this.currentHymnal.canGoBack=!0,this.currentHymnal.Dialpad=!1,this.currentHymnal.hymnNumber=this.currentHymnal.NumSongs):(this.currentHymnal.canGoNext=!0,this.currentHymnal.canGoBack=!0,this.currentHymnal.Dialpad=!1),0===this.currentHymnal.hymnNumber&&(this.currentHymnal.canGoNext=!0,this.currentHymnal.canGoBack=!1,this.currentHymnal.Dialpad=!0),(this.currentHymnal.hymnNumber<0||this.currentHymnal.hymnNumber>this.currentHymnal.NumSongs)&&(this.currentHymnal.hymnNumber=0)}},{key:"gotoHymnal",value:function(t,e){var n=this;try{var a=n.hymnals[parseInt(t)],r=n.currentHymnal;n.currentHymnal=a;try{n.currentHymnal.hymnNumber=r.otherHymnals[n.currentHymnal.id]||0}catch(t){n.currentHymnal.hymnNumber=0}n.currentHymnal.hymnNumber=n.currentHymnal.hymnNumber||0,n.currentHymnal.Dialpad=!1,n.setNavigation(),n.loadSongWords(function(){return e(n.currentHymnal)})}catch(t){alert(t)}}},{key:"typeNumber",value:function(t,e){try{var n=this;n.typedNumber=n.typedNumber||0,0===n.typedNumber?n.typedNumber+=t:n.typedNumber=n.typedNumber.toString()+t.toString(),n.typedNumber=parseInt(n.typedNumber);var a=n.currentHymnal.id;if(n.currentHymnal.Dialpad=!0,void 0===a&&n.gotoHymnal(n.default,function(){if(n.typedNumber>n.currentHymnal.NumSongs){var t=[];n.typedNumber=n.typedNumber.toString();var a=void 0;for(a in n.typedNumber)t.push(n.typedNumber[a]);t.pop(),t=t.join(""),n.typedNumber=t}return e(n.currentHymnal)}),n.typedNumber>n.currentHymnal.NumSongs){var r=[];n.typedNumber=n.typedNumber.toString();var i=void 0;for(i in n.typedNumber)r.push(n.typedNumber[i]);r.pop(),r=r.join(""),n.typedNumber=r}n.typedNumber=parseInt(n.typedNumber)||0,n.typedNumber.toString().length===n.currentHymnal.NumSongs.toString().length?n.gotoNumberinCurrentHymnal("this",parseInt(n.typedNumber),function(){return n.currentHymnal.hymnNumber=n.typedNumber,n.currentHymnal.Dialpad=!1,e(n.currentHymnal)}):e(n.currentHymnal)}catch(t){}}},{key:"gettypedNumber",value:function(){return this.typedNumber}},{key:"getcurrentHymnal",value:function(){return this.currentHymnal}},{key:"resettypedNumber",value:function(){this.typedNumber=null}},{key:"backspaceTypedNumber",value:function(){var t=[];this.typedNumber=this.typedNumber.toString();var e=void 0;for(e in this.typedNumber)t.push(this.typedNumber[e]);t.pop(),t=t.join(""),this.typedNumber=parseInt(t)||null}},{key:"arrangeSingleSongWords",value:function(t){var e=void 0;if("string"==typeof t)return t;try{var n=(e=t).title,a=e.stanzas,r=e.choruses,i=(e.order,e.author||""),o=e.key||"",l=void 0,s=void 0;for(s in l=[],a)l.push(s+"  "+a[s]);if(a=l,l=[],1===m()(r).length){for(s in a)l.push(a[s]),l.push(r[0]||r[1]);a=l}return{text:a.join("\n\r\n\r")+"\n\r\n\r",title:n,author:i,key:o}}catch(e){return t}}},{key:"checkOnlinedb",value:function(t){if("none"===x.checkConnection())return t(!0);var e=this;k.a.get("https://raw.githubusercontent.com/GospelSounders/hymnals-data/master/index.json").then(function(n){var a=n.data;try{a=JSON.parse(a)}catch(t){a=a}var r=void 0;e.hymnals_d=a.hymnals,e.default_d=a.default,e.Interval=a.Interval,_.openFile(function(n,a){try{if(n)return t(!0);for(r in a=JSON.parse(a),e.hymnals_d){var i=e.hymnals_d[r].id;e.hymnals_d[r].isDownloaded=a.includes(parseInt(i))}}catch(t){}var o=[];for(r in e.hymnals_d){var l=e.hymnals_d[r].Language;o[l]=l}var s=[];for(var c in o)s.push({lang:c,isOpen:!1});return e.Languages_d=s,t()},"downloaded.json")}).catch(function(){return t(!0)})}},{key:"getInterval",value:function(){return this.Interval}},{key:"checklocalDb",value:function(t){var e=this;_.openFile(function(n,a){a=JSON.parse(a);e.hymnals_d=a.hymnals,e.default_d=a.default,e.Interval=a.Interval;var r=void 0;_.openFile(function(n,a){try{if(n)return t(!0);for(r in a=JSON.parse(a),e.hymnals_d){var i=e.hymnals_d[r].id;e.hymnals_d[r].isDownloaded=a.includes(parseInt(i))}}catch(t){}var o=[];for(r in e.hymnals_d){var l=e.hymnals_d[r].Language;o[l]=l}var s=[];for(var c in o)s.push({lang:c,isOpen:!1});return e.Languages_d=s,t()},"downloaded.json")},"index.json")}},{key:"checkHymnalsDb",value:function(t){var e=this;e.checkOnlinedb(function(n){if(!n)return t();e.checklocalDb(function(){return t()})})}},{key:"actuallyUpdateHymnals",value:function(t){var e=this,n=void 0,a=void 0,r=void 0;e.checkOnlinedb(function(i){if(i)return t(!0);r=e.hymnals_d,e.checklocalDb(function(){var i,o,s=(i=v()(l.a.mark(function t(e){var n,a;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.path,n="https://raw.githubusercontent.com/GospelSounders/hymnals-data/master/"+(a=n+"/index.json"),t.next=5,k.a.get(n).then(function(t){var n=t.data;_.createDirectory(function(t){t||_.writeFile(function(){_.openFile(function(t,n){var a=void 0,i=(n=JSON.parse(n)).hymnals;for(a in i)i[a].id===e.id&&(i[a].DoneSongs=r[j].DoneSongs,i[a].Fixed=r[j].Fixed);_.writeFile(function(){return!0},c()(i),"index.json")},"index.json")},c()(n),a)},e.path)}).catch(function(t){return t});case 5:case"end":return t.stop()}},t,this)})),function(t){return i.apply(this,arguments)}),u=(o=v()(l.a.mark(function e(){var i,o;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=l.a.keys(a);case 1:if((e.t1=e.t0()).done){e.next=18;break}if(n=e.t1.value,!0!==(i=a[n]).isDownloaded){e.next=16;break}o=void 0,e.t2=l.a.keys(r);case 7:if((e.t3=e.t2()).done){e.next=16;break}if(o=e.t3.value,r[o].id!==i.id){e.next=14;break}if(i.DoneSongs===r[o].DoneSongs&&i.Fixed===r[o].Fixed){e.next=14;break}return e.next=13,s(i);case 13:e.sent;case 14:e.next=7;break;case 16:e.next=1;break;case 18:t();case 19:case"end":return e.stop()}},e,this)})),function(){return o.apply(this,arguments)});a=e.hymnals_d,[],alert("starting"),navigator.notification.prompt("Please enter your name",function(t){alert("You selected button number "+t.buttonIndex+" and entered "+t.input1)},"Registration",["Ok","Exit"],"Jane Doe");try{SpinnerPlugin.activityStart("Loading...",{dimBackground:!0})}catch(t){alert(t)}u(),alert("FINISHED"),SpinnerPlugin.activityStop()})})}},{key:"updateHymnals",value:function(t,e){var n=void 0,a=this,r=[];for(n in t){var i=t[n];!0===i.isDownloaded&&r.push(i.id)}_.writeFile(function(){a.checkHymnalsDb(function(){a.Languages=a.Languages_d,a.hymnals=a.hymnals_d,a.default=a.default_d,a.actuallyUpdateHymnals(function(){return e()})})},c()(r),"downloaded.json")}},{key:"quickUpdateApp",value:function(t){var e=this,n="https://raw.githubusercontent.com/GospelSounders/hymnals-data/master/index.json";k.a.get(n).then(function(a){var r=a.data;_.writeFile(function(){n="https://raw.githubusercontent.com/GospelSounders/hymnals-data/master/allhymns.json",k.a.get(n).then(function(n){var a=n.data;_.writeFile(function(){e.actuallyUpdateHymnals(t)},c()(a),"allhymns.json")}).catch(function(){return t(!0)})},c()(r),"index.json")}).catch(function(){return t(!0)})}}]),t}())};function S(){return!0!==updateinProgress&&(!1!==updateScheduled&&(updateinProgress=!0,void H.hymnalInst.quickUpdateApp(function(t){t?updateinProgress=!1:(updateScheduled=!1,updateinProgress=!1,updated=!0)})))}var I={scheduleUpdates:function(t){!1===updateScheduled&&(updateScheduled=!0,S(),setInterval(function(){updateScheduled=!0,S()},t))},checkforUpdates:S},D=n("/ocq"),G={};var L={setCurrentHymnal:function(t){G=t},getCurrentHymnal:function(){return G}},F={data:function(){return{states:L}},mounted:function(){},created:function(){},methods:{openGithub:function(){window.open("https://github.com/disjfa/vuetify-sidebar-template")},gotoHymnNumber:function(){X.go("/HymnNumbers")}}},O={render:function(){var t=this.$createElement;return(this._self._c||t)("v-app")},staticRenderFns:[]},P=(n("VU/8")(F,O,!1,null,null,null).exports,{data:function(){return{numbers:[{row1:[1,2,3],row2:[4,5,6],row3:[7,8,9]}],typedNumber:null}},created:function(){H.hymnalInst.resettypedNumber(),this.typedNumber=null},methods:{typeNumber:function(t){var e=this;H.hymnalInst.typeNumber(t,function(t){e.typedNumber=H.hymnalInst.gettypedNumber(),!1===t.Dialpad&&X.push("/Hymnal")})},backspaceNumber:function(){H.hymnalInst.backspaceTypedNumber(),this.typedNumber=H.hymnalInst.gettypedNumber()},canceltypeNumber:function(){H.hymnalInst.resettypedNumber(),this.typedNumber=null},gotoNumber:function(){null!==this.typedNumber&&H.hymnalInst.gotoNumberinCurrentHymnal("this",parseInt(this.typedNumber),function(){X.push("/Hymnal")})}}}),B={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticStyle:{"margin-top":"48px"},attrs:{"grid-list-md":"","text-xs-center":""}},[n("v-layout",{attrs:{row:"",wrap:""}},[null===t.typedNumber?n("v-flex",{attrs:{xs12:""}},[t._v("\n    Enter Hymn Number\n    ")]):n("v-flex",{attrs:{xs12:""}},[t._v("\n      "+t._s(t.typedNumber)+"\n    ")]),t._v(" "),t._l(t.numbers[0].row1,function(e){return n("v-flex",{key:"4"+e,attrs:{xs4:""}},[n("v-card",{attrs:{dark:"",color:"primary"}},[n("v-btn",{attrs:{icon:""},nativeOn:{click:function(n){n.stopPropagation(),t.typeNumber(e)}}},[n("v-card-text",{staticClass:"px-0",staticStyle:{"font-size":"2em","font-weight":"bold"}},[t._v(t._s(e))])],1)],1)],1)}),t._v(" "),t._l(t.numbers[0].row2,function(e){return n("v-flex",{key:"4"+e,attrs:{xs4:""}},[n("v-card",{attrs:{dark:"",color:"primary"}},[n("v-btn",{attrs:{icon:""},nativeOn:{click:function(n){n.stopPropagation(),t.typeNumber(e)}}},[n("v-card-text",{staticClass:"px-0",staticStyle:{"font-size":"2em","font-weight":"bold"}},[t._v(t._s(e))])],1)],1)],1)}),t._v(" "),t._l(t.numbers[0].row3,function(e){return n("v-flex",{key:"4"+e,attrs:{xs4:""}},[n("v-card",{attrs:{dark:"",color:"primary"}},[n("v-btn",{attrs:{icon:""},nativeOn:{click:function(n){n.stopPropagation(),t.typeNumber(e)}}},[n("v-card-text",{staticClass:"px-0",staticStyle:{"font-size":"2em","font-weight":"bold"}},[t._v(t._s(e))])],1)],1)],1)}),t._v(" "),n("v-flex",{attrs:{xs4:""}},[n("v-card",{attrs:{dark:"",color:"primary"}},[n("v-btn",{attrs:{icon:""},nativeOn:{click:function(e){e.stopPropagation(),t.canceltypeNumber()}}},[n("v-icon",{staticStyle:{"font-size":"2em","font-weight":"bold"}},[t._v("cancel")])],1)],1)],1),t._v(" "),n("v-flex",{attrs:{xs4:""}},[n("v-card",{attrs:{dark:"",color:"primary"}},[n("v-btn",{attrs:{icon:""},nativeOn:{click:function(e){e.stopPropagation(),t.typeNumber(0)}}},[n("v-card-text",{staticClass:"px-0",staticStyle:{"font-size":"2em","font-weight":"bold"}},[t._v("0")])],1)],1)],1),t._v(" "),n("v-flex",{attrs:{xs4:""}},[n("v-card",{attrs:{dark:"",color:"primary"}},[n("v-btn",{attrs:{icon:""},nativeOn:{click:function(e){e.stopPropagation(),t.backspaceNumber()}}},[n("v-icon",{staticStyle:{"font-size":"2em","font-weight":"bold"}},[t._v("backspace")])],1)],1)],1),t._v(" "),n("v-flex",{attrs:{xs12:""}},[n("v-card",{attrs:{dark:"",color:"primary"}},[n("v-btn",{attrs:{icon:""},nativeOn:{click:function(e){e.stopPropagation(),t.gotoNumber()}}},[n("v-card-text",{staticClass:"px-0",staticStyle:{"font-size":"2em","font-weight":"bold"}},[t._v("GO")])],1)],1)],1)],2)],1)},staticRenderFns:[]},T=n("VU/8")(P,B,!1,null,null,null).exports,C={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("h2",[t._v("About....")]),t._v(" "),t._m(0),t._v(" "),n("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        What should be included here? About App, About Creator\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),n("br"),t._v(" "),n("li",[n("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var R=n("VU/8")({data:function(){return{}}},C,!1,function(t){n("zNSP")},"data-v-9e973086",null).exports,U={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list",[n("v-list-tile",[n("v-list-tile-action",[n("v-icon",[t._v("home")])],1),t._v(" "),n("v-list-tile-title",[t._v("Donate")])],1),t._v(" "),n("v-divider"),t._v(" "),n("v-list-tile",[n("v-list-tile-action",[n("v-icon",[t._v("flag")])],1),t._v(" "),n("v-list-tile-title",[t._v("Report Problems")])],1),t._v(" "),n("v-divider"),t._v(" "),n("v-list-tile",[n("v-list-tile-action",[n("v-icon",[t._v("home")])],1),t._v(" "),n("v-list-tile-title",[t._v("Send Feedback")])],1),t._v(" "),n("v-divider"),t._v(" "),n("v-list-tile",[n("v-list-tile-action",[n("v-icon",[t._v("home")])],1),t._v(" "),n("v-list-tile-title",[t._v("Update Hymnals")])],1),t._v(" "),n("v-divider")],1)},staticRenderFns:[]};var z=n("VU/8")({data:function(){return{}}},U,!1,function(t){n("XDI2")},"data-v-205bc0f1",null).exports,E={data:function(){return{numbers:[{row1:[1,2,3],row2:[4,5,6],row3:[7,8,9]}],hymnNumber:0,hymnText:"",title:"",author:"",key:""}},created:function(){var t=H.hymnalInst.getcurrentHymnal();this.hymnNumber=t.hymnNumber;var e=H.hymnalInst.arrangeSingleSongWords(t.text);this.hymnText=e.text||e,this.title=e.title||"",this.author=e.author||"",this.key=e.key||""},methods:{}},A={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticStyle:{"white-space":"pre-line","font-weight":"bold","text-align":"left"},attrs:{"grid-list-md":""}},[n("div",{staticStyle:{color:"#000","font-weight":"bold","font-size":"2.0em",padding:"0px 0px 0px 0px","text-align":"center",margin:"0px 0px 0px 0px"}},[t._v(t._s(t.title)+" ")]),t._v(" "),n("div",{staticStyle:{"background-color":"green","padding-right":"5px","padding-left":"5px","font-size":"0.5em"}},[n("div",{staticStyle:{width:"75%","text-align":"left",float:"left","padding-left":"5px"}},[t._v(t._s(t.author))]),t._v(" "),n("div",{staticStyle:{width:"25%","text-align":"right",float:"right","padding-right":"5px"}},[t._v(t._s(t.key)+" ")])]),t._v(" "),n("div",{staticStyle:{padding:"0px 0px 0px 0px","font-size":"1.5em"}},[t._v("\n    "+t._s(t.hymnText)+"\n  ")])])},staticRenderFns:[]},W=n("VU/8")(E,A,!1,null,null,null).exports,$={data:function(){return{hymnals:[],Languages:[]}},created:function(){var t=this;H.hymnalInst.checkHymnalsDb(function(){H.hymnalInst.getHymnals_d(function(e,n,a){t.Languages=e,t.hymnals=n})})},methods:{updateHymnals:function(){var t=this;H.hymnalInst.updateHymnals(t.hymnals,function(){H.hymnalInst.getHymnals(function(e,n,a,r){t.Languages=e,t.hymnals=n})})}}},M={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[n("v-card",[n("v-list",{staticStyle:{background:"-color:red"},attrs:{"three-line":"",subheader:""}},[n("v-list-tile",[n("v-list-tile-content",[n("v-list-tile-title",[t._v("Manage Hymnals")]),t._v(" "),n("v-list-tile-sub-title",[t._v("Download new hymnals and delete old hymnals you no longer need. You need to be connected to the internet to see new hymnals")])],1)],1),t._v(" "),n("v-divider"),t._v(" "),t._l(t.Languages,function(e){return n("v-list-group",{key:e.lang,staticStyle:{background:"-color:red"},attrs:{"three-line":"",value:"false"},model:{value:e.isOpen,callback:function(n){t.$set(e,"isOpen",n)},expression:"tlang.isOpen"}},[n("v-list-tile",{attrs:{slot:"activator"},slot:"activator"},[n("v-list-tile-title",[t._v(t._s(e.lang))])],1),t._v(" "),n("v-divider"),t._v(" "),t._l(t.hymnals,function(a){return a.Language===e.lang?n("v-list-tile",{key:a.id},[n("v-list-tile-action",[n("v-checkbox",{model:{value:a.isDownloaded,callback:function(e){t.$set(a,"isDownloaded",e)},expression:"hymnal.isDownloaded"}})],1),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",{domProps:{textContent:t._s(a.name)}}),t._v(" "),n("v-list-tile-sub-title",{staticStyle:{color:"gray"},domProps:{textContent:t._s(a.longName)}})],1)],1):t._e()}),t._v(" "),n("v-divider")],2)}),t._v(" "),n("v-list-tile",[n("v-list-tile-content",[n("v-btn",{attrs:{color:"info"},nativeOn:{click:function(e){return e.stopPropagation(),t.updateHymnals(e)}}},[t._v("update")])],1)],1),t._v(" "),n("v-spacer"),t._v(" "),n("v-spacer")],2)],1)],1)],1)},staticRenderFns:[]};var V=n("VU/8")($,M,!1,function(t){n("7Ook")},"data-v-8897aa86",null).exports,J={data:function(){return{critea:{words:!0,title:!0,key:!0,author:!0},selected:[]}},created:function(){H.hymnalInst.resettypedNumber(),this.typedNumber=null},methods:{typeNumber:function(t){var e=this;H.hymnalInst.typeNumber(t,function(t){e.typedNumber=H.hymnalInst.gettypedNumber(),!1===t.Dialpad&&X.push("/Hymnal")})},backspaceNumber:function(){H.hymnalInst.backspaceTypedNumber(),this.typedNumber=H.hymnalInst.gettypedNumber()},canceltypeNumber:function(){H.hymnalInst.resettypedNumber(),this.typedNumber=null},gotoNumber:function(){null!==this.typedNumber&&H.hymnalInst.gotoNumberinCurrentHymnal("this",parseInt(this.typedNumber),function(){X.push("/Hymnal")})}}},q={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[n("v-expansion-panel",t._l(1,function(e,a){return n("v-expansion-panel-content",{key:a},[n("div",{attrs:{slot:"header"},slot:"header"},[n("v-text-field",{attrs:{name:"searchinput",label:"search","single-line":"","prepend-icon":"fa-search"}})],1),t._v(" "),n("div",{staticStyle:{width:"100%"}},[n("div",{staticStyle:{width:"50%",float:"left","padding-left":"15px"}},[n("v-checkbox",{attrs:{label:"Title",value:"Title"},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1),t._v(" "),n("div",{staticStyle:{width:"50%",float:"right"}},[n("v-checkbox",{attrs:{label:"Words",value:"Words"},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)]),t._v(" "),n("div",{staticStyle:{width:"100%"}},[n("div",{staticStyle:{width:"50%",float:"left","padding-left":"15px"}},[n("v-checkbox",{attrs:{label:"Author",value:"Author"},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1),t._v(" "),n("div",{staticStyle:{width:"50%",float:"right"}},[n("v-checkbox",{attrs:{label:"Key",value:"Key"},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)])])})),t._v("\n  List items will go here\n    "),n("v-card",[n("v-list",{staticStyle:{background:"-color:red"},attrs:{"three-line":"",subheader:""}},[n("v-list-tile",[n("v-list-tile-content",[n("v-list-tile-title",[t._v("Manage Hymnals")]),t._v(" "),n("v-list-tile-sub-title",[t._v("Download new hymnals and delete old hymnals you no longer need. You need to be connected to the internet to see new hymnals")])],1)],1),t._v(" "),n("v-divider"),t._v(" "),n("v-list-tile",[n("v-list-tile-content",[n("v-btn",{attrs:{color:"info"},nativeOn:{click:function(e){return e.stopPropagation(),t.updateHymnals(e)}}},[t._v("update")])],1)],1),t._v(" "),n("v-spacer"),t._v(" "),n("v-spacer")],1)],1),t._v(" "),n("v-expansion-panel",t._l(1,function(e,a){return n("v-expansion-panel-content",{key:a},[n("div",{attrs:{slot:"header"},slot:"header"},[n("v-text-field",{attrs:{name:"searchinput",label:"search","single-line":"","prepend-icon":"fa-search"}})],1),t._v(" "),n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("flex",{attrs:{xs3:""}},[n("v-checkbox",{attrs:{label:"Title",value:"Title"},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1),t._v(" "),n("flex",{attrs:{xs3:""}},[n("v-checkbox",{attrs:{label:"Titled",value:"Titled"},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)],1)],1),t._v(" "),n("v-card",[n("v-card-text",{staticClass:"grey lighten-3"},[n("p",[t._v(t._s(t.selected))]),t._v(" "),n("v-checkbox",{attrs:{label:"Title",value:"Title"},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}}),t._v(" "),n("v-checkbox",{attrs:{label:"Words",value:"Words"},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}}),t._v(" "),n("v-checkbox",{attrs:{label:"Author",value:"Author"},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}}),t._v(" "),n("v-checkbox",{attrs:{label:"Key",value:"Key"},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}}),t._v(" "),n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("flex",{attrs:{xs3:""}},[n("v-checkbox",{attrs:{label:"Title",value:"Title"},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1),t._v(" "),n("flex",{attrs:{xs3:""}},[n("v-checkbox",{attrs:{label:"Titled",value:"Titled"},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)],1)],1),t._v(" "),n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("flex",[n("v-checkbox",{attrs:{label:"Title",value:"Title"},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)],1)],1)],1)],1)],1)}))],1)],1)},staticRenderFns:[]};var K=n("VU/8")(J,q,!1,function(t){n("P33C")},null,null).exports;a.a.use(D.a);var X=new D.a({routes:[{path:"/",name:"HymnNumbers",component:T},{path:"/HymnNumbers",name:"HymnNumbers",component:T},{path:"/About",name:"About",component:R},{path:"/Settings",name:"Settings",component:z},{path:"/Hymnal",name:"Hymnal",component:W},{path:"/ManageDownloads",name:"ManageDownloads",component:V},{path:"/Search",name:"Search",component:K}]}),Y={data:function(){return{name:"App",users:[],drawer:!1,hymnals:[],hymnalsopen:!1,hymnalsShortopen:!1,Languages:[],currentHymnalName:"",currentHymnNumber:"",canGoNext:!1,canGoBack:!1}},watch:{$route:function(t,e){var n=this,a=H.hymnalInst.getcurrentHymnal();n.currentHymnalName=a.shortname,n.currentHymnNumber=a.hymnNumber,n.canGoNext=a.canGoNext,n.canGoBack=a.canGoBack,I.checkforUpdates(),!0===updated&&(updated=!1,H.hymnalInst.getHymnals(function(t,e,a,r){n.Languages=t,n.hymnals=e,r=e.hymnalInst.getcurrentHymnal(),n.currentHymnalName=r.shortname,n.currentHymnNumber=r.hymnNumber,n.canGoNext=r.canGoNext,n.canGoBack=r.canGoBack}))},drawer:function(t){var e=this;H.hymnalInst.getHymnals(function(t,n,a,r){e.Languages=t,e.hymnals=n,r=n.hymnalInst.getcurrentHymnal(),e.currentHymnalName=r.shortname,e.currentHymnNumber=r.hymnNumber,e.canGoNext=r.canGoNext,e.canGoBack=r.canGoBack})},hymnalsShortopen:function(t){var e=this;H.hymnalInst.getHymnals(function(t,n,a,r){e.Languages=t,e.hymnals=n,r=n.hymnalInst.getcurrentHymnal(),e.currentHymnalName=r.shortname,e.currentHymnNumber=r.hymnNumber,e.canGoNext=r.canGoNext,e.canGoBack=r.canGoBack})}},created:function(){var t=this;H.hymnalInst.deviceIsReady(function(e){var n=H;H.hymnalInst.getHymnals(function(e,a,r,i){I.scheduleUpdates(n.hymnalInst.getInterval()),t.Languages=e,t.hymnals=a,i=a.hymnalInst.getcurrentHymnal(),t.currentHymnalName=i.shortname,t.currentHymnNumber=i.hymnNumber,t.canGoNext=i.canGoNext,t.canGoBack=i.canGoBack})})},methods:{gotoHymnal:function(t){var e=this;e.drawer=!1,e.hymnalsShortopen=!1,H.hymnalInst.gotoHymnal(t,function(t){e.currentHymnalName=t.shortname,e.currentHymnNumber=t.hymnNumber,e.canGoNext=t.canGoNext,e.canGoBack=t.canGoBack,!1===t.Dialpad?X.push("/Hymnal?num="+e.currentHymnNumber):X.push("/HymnNumbers")})},nextHymn:function(){var t=this;H.hymnalInst.gotoNumberinCurrentHymnal("next",!1,function(e){t.currentHymnalName=e.shortname,t.currentHymnNumber=e.hymnNumber,t.canGoNext=e.canGoNext,t.canGoBack=e.canGoBack,!1===e.Dialpad?X.push("/Hymnal?num="+t.currentHymnNumber):X.push("/HymnNumbers")})},prevHymn:function(){var t=this;H.hymnalInst.gotoNumberinCurrentHymnal("prev",!1,function(e){t.currentHymnalName=e.shortname,t.currentHymnNumber=e.hymnNumber,t.canGoNext=e.canGoNext,t.canGoBack=e.canGoBack,!1===e.Dialpad?X.push("/Hymnal?num="+t.currentHymnNumber):X.push("/HymnNumbers")})}}},Z={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{staticStyle:{"margin-top":"0px"}},[n("v-navigation-drawer",{staticClass:"indigo",staticStyle:{"margin-top":"48px"},attrs:{temporary:"",fixed:"",dark:"",height:"100%"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",[n("v-list-tile",[n("v-list-tile-action",[n("v-icon",[t._v("fa-home")])],1),t._v(" "),n("v-list-tile-title",[t._v("Home")])],1),t._v(" "),n("v-divider"),t._v(" "),n("v-list-group",{attrs:{"prepend-icon":"fa-book",value:"true"},model:{value:t.hymnalsopen,callback:function(e){t.hymnalsopen=e},expression:"hymnalsopen"}},[n("v-list-tile",{attrs:{slot:"activator"},slot:"activator"},[n("v-list-tile-content",[n("v-list-tile-title",[t._v("Hymnals")])],1)],1),t._v(" "),t._l(t.Languages,function(e){return!0===t.hymnals.some(function(t,n,a){return t.Language===e.lang&&!0===t.isDownloaded})?n("v-list-group",{key:e.lang,attrs:{"sub-group":"","no-action":"",value:"false"},model:{value:e.isOpen,callback:function(n){t.$set(e,"isOpen",n)},expression:"tlang.isOpen"}},[n("v-list-tile",{attrs:{slot:"activator"},slot:"activator"},[n("v-list-tile-title",[t._v(t._s(e.lang))])],1),t._v(" "),t._l(t.hymnals,function(a){return a.Language===e.lang&&!0===a.isDownloaded?n("v-list-tile",{key:a.id,nativeOn:{click:function(e){e.stopPropagation(),t.gotoHymnal(a.id)}}},[n("v-list-tile-title",{domProps:{textContent:t._s(a.name)}})],1):t._e()}),t._v(" "),n("v-divider")],2):t._e()})],2),t._v(" "),n("v-divider"),t._v(" "),n("v-list-tile",{attrs:{slot:"activator"},slot:"activator"},[n("v-list-tile-content",[n("v-list-tile-title",[t._v("Hymnals")])],1)],1),t._v(" "),n("v-divider"),t._v(" "),n("v-list-tile",{attrs:{to:"/ManageDownloads"}},[n("v-list-tile-action",[n("v-icon",[t._v("fa-gear")])],1),t._v(" "),n("v-list-tile-title",[t._v("H-Manager")])],1),t._v(" "),n("v-divider"),t._v(" "),n("v-list-tile",{attrs:{to:"/resources"}},[n("v-list-tile-action",[n("v-icon",[t._v("fa-info")])],1),t._v(" "),n("v-list-tile-title",[t._v("More Resources")])],1),t._v(" "),n("v-divider"),t._v(" "),n("v-list-tile",{attrs:{to:"/buyhymnal"}},[n("v-list-tile-action",[n("v-icon",[t._v("fa-info")])],1),t._v(" "),n("v-list-tile-title",[t._v("Buy Hymnals")])],1),t._v(" "),n("v-divider"),t._v(" "),n("v-list-tile",{attrs:{to:"/About"}},[n("v-list-tile-action",[n("v-icon",[t._v("fa-info")])],1),t._v(" "),n("v-list-tile-title",[t._v("About")])],1)],1)],1),t._v(" "),n("v-toolbar",{staticStyle:{"padding-top":"0px"},attrs:{dark:"",app:"",dense:""}},[n("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}},[n("icon",{attrs:{name:"align-justify"}})],1),t._v(" "),n("v-spacer"),t._v(" "),n("v-menu",{attrs:{transition:"slide-x-transition",bottom:"",right:""},model:{value:t.hymnalsShortopen,callback:function(e){t.hymnalsShortopen=e},expression:"hymnalsShortopen"}},[n("v-btn",{staticStyle:{color:"#fff","font-weight":"bold"},attrs:{slot:"activator"},slot:"activator"},[n("v-subheader",{staticStyle:{color:"#fff","font-weight":"bold","font-size":"1.0em"}},[t._v(t._s(t.currentHymnalName)+" ")]),t._v(" "),n("v-icon",[t._v("fa-caret-square-o-down")])],1),t._v(" "),n("v-list",t._l(t.hymnals,function(e){return!0===e.isDownloaded?n("v-list-tile",{key:e.id,nativeOn:{click:function(n){n.stopPropagation(),t.gotoHymnal(e.id)}}},[n("v-list-tile-title",[t._v(t._s(e.shortname))])],1):t._e()}))],1),t._v(" "),n("v-btn",{staticStyle:{color:"green"},attrs:{icon:"",disabled:!t.canGoBack},nativeOn:{click:function(e){e.stopPropagation(),t.prevHymn()}},model:{value:t.canGoBack,callback:function(e){t.canGoBack=e},expression:"canGoBack"}},[n("v-icon",[t._v("fa-arrow-circle-left")])],1),t._v(" "),n("v-btn",{staticStyle:{color:"purple"},attrs:{icon:"",to:"/HymnNumbers"}},[n("v-subheader",{staticStyle:{color:"#fff","font-weight":"bold","font-size":"1.0em"}},[t._v(t._s(t.currentHymnNumber)+" ")])],1),t._v(" "),n("v-btn",{staticStyle:{color:"green"},attrs:{icon:"",disabled:!t.canGoNext},nativeOn:{click:function(e){e.stopPropagation(),t.nextHymn()}},model:{value:t.canGoNext,callback:function(e){t.canGoNext=e},expression:"canGoNext"}},[n("v-icon",[t._v("fa-arrow-circle-right")])],1),t._v(" "),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("more_vert")])],1)],1),t._v(" "),n("v-content",{staticStyle:{padding:"0px 0px 0px 0px","margin-top":"48px"}},[n("v-fade-transition",{attrs:{mode:"out-in"}},[n("router-view",{key:t.$route.fullPath})],1)],1),t._v(" "),n("v-footer",{staticClass:"DarkCyan pa-3",staticStyle:{"background-color":"Black"},attrs:{app:"",color:"#52BE80"}},[n("v-flex",{attrs:{xs1:""}},[n("v-btn",{staticStyle:{color:"green"},attrs:{icon:"",disabled:!t.canGoBack},nativeOn:{click:function(e){e.stopPropagation(),t.prevHymn()}}},[n("v-icon",[t._v("fa-arrow-circle-left")])],1)],1),t._v(" "),n("v-flex",{attrs:{xs2:""}},[n("v-btn",{staticStyle:{color:"green"},attrs:{icon:"",disabled:!t.canGoNext},nativeOn:{click:function(e){e.stopPropagation(),t.nextHymn()}}},[n("v-icon",[t._v("fa-arrow-circle-right")])],1)],1),t._v(" "),n("v-flex",{attrs:{xs2:""}},[n("v-btn",{staticStyle:{color:"purple"},attrs:{icon:"",to:"/Search"}},[n("v-icon",[t._v("fa-search")])],1)],1),t._v(" "),n("v-flex",{attrs:{xs2:""}},[n("v-btn",{staticStyle:{color:"purple"},attrs:{icon:"",to:"/Settings"}},[n("v-icon",[t._v("fa-gear")])],1)],1),t._v(" "),n("v-flex",{attrs:{xs6:""}},[n("v-btn",{attrs:{round:"",fab:"",color:"success",to:"/HymnNumbers"}},[n("v-icon",[t._v("dialpad")])],1)],1),t._v(" "),n("v-flex",{attrs:{xs2:""}},[n("v-btn",{staticStyle:{color:"green"},attrs:{icon:""},nativeOn:{click:function(e){e.stopPropagation(),t.gotoHymnal(10)}}},[n("v-icon",[t._v("help")])],1)],1)],1)],1)},staticRenderFns:[]};var Q=n("VU/8")(Y,Z,!1,function(t){n("mvGE"),n("jHe9")},null,null).exports,tt=(n("8AWp"),n("Em2B"),n("jpe6"),n("b4+G"),n("Nbi/"),n("D4uH"));a.a.component("icon",tt.a),a.a.use(i.a),a.a.config.productionTip=!1,a.a.config.ignoredElements=[],new a.a({el:"#app",router:X,components:{App:Q},template:"<App/>"})},P33C:function(t,e){},XDI2:function(t,e){},jHe9:function(t,e){},mvGE:function(t,e){},zNSP:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.e24dbd8723c998e1da90.js.map