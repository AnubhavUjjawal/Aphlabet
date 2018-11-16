(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-278fa1c2"],{"5ea5":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Sidebar"},[a("div",{staticClass:"wrapper"},[a("nav",{staticClass:"col-md-2 d-none d-md-block bg-light sidebar",attrs:{id:"sidebar"}},[a("div",{staticClass:"sidebar-sticky"},[a("ul",{staticClass:"nav flex-column"},[a("li",{staticClass:"nav-item active"}),a("li",{staticClass:"nav-item"},[a("router-link",{attrs:{to:{name:"dashboard"}}},[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Dashboard")])])],1),a("li",{staticClass:"nav-item"},[a("router-link",{attrs:{to:{name:"lectures"}}},[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Lectures")])])],1),a("li",{staticClass:"nav-item"},[a("router-link",{attrs:{to:{name:"resources"}}},[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Resources")])])],1),a("li",{staticClass:"nav-item"},[a("router-link",{attrs:{to:{name:"assignments"}}},[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Assignments")])])],1),a("li",{staticClass:"nav-item"},[a("router-link",{attrs:{to:{name:"announcements"}}},[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Announcements")])])],1),a("li",{staticClass:"nav-item"},[a("router-link",{attrs:{to:{name:"polls"}}},[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Polls")])])],1),t._m(0)]),t._m(1),a("ul",{staticClass:"nav flex-column mb-2"},[a("li",{staticClass:"nav-item"},[a("router-link",{attrs:{to:{name:"classinfo"}}},[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Class Info")])])],1),t._m(2)])])])])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("\n                      Storage\n                  ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h6",{staticClass:"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"},[a("span",[t._v("Quick Links")]),a("a",{staticClass:"d-flex align-items-center text-muted",attrs:{href:"#"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("\n                      Submissions\n                  ")])])}],r={name:"Sidebar",props:{signedIn:Object,info:Object},mounted:function(){}},i=r,o=(a("6d1b"),a("2877")),l=Object(o["a"])(i,s,n,!1,null,"9d0e8c00",null);l.options.__file="Sidebar.vue";e["a"]=l.exports},"6d1b":function(t,e,a){"use strict";var s=a("d1fa"),n=a.n(s);n.a},"74c9":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("button",{staticClass:"btn btn-primary",on:{click:t.goBack}},[a("i",{staticClass:"fa fa-angle-left",attrs:{"aria-hidden":"true"}})])])},n=[],r=a("41cb"),i={name:"BackButton",methods:{goBack:function(){r["a"].go(-1)}}},o=i,l=a("2877"),c=Object(l["a"])(o,s,n,!1,null,null,null);c.options.__file="BackButton.vue";e["a"]=c.exports},"93b9":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Lectures"},[a("Navbar"),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-2"},[a("Sidebar")],1),a("div",{staticClass:"col-md-10"},[a("div",{staticClass:"col-md-11 col-xs-11"},[a("button",{staticClass:"btn btn-primary mb-5 mt-2 float-right",attrs:{"data-toggle":"modal","data-target":"#"+t.addModalId}},[t._v("\n              Share Resource\n          ")]),a("h2",{staticClass:"m-2"},[t._v("Resources")]),a("AddResourceModal",{attrs:{addModalId:t.addModalId,init:t.init}}),a("ResourceTable",{attrs:{resources:t.lectures}})],1)])])],1)},n=[],r=(a("96cf"),a("1da1")),i=a("be94"),o=a("d178"),l=a("5ea5"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"resourceTable table-responsive"},[a("table",{staticClass:"table table-hover"},[t._m(0),a("tbody",t._l(t.resources,function(e,s){return a("tr",{key:e.id},[a("th",{attrs:{scope:"row"}},[t._v(t._s(t.doMath(s)))]),a("td",{attrs:{colspan:"3"}},[a("small",[t._v(t._s(e.description))])]),a("td",{attrs:{colspan:"1"}},[a("b",[a("small",[t._v(t._s(e.uploader.username))])])]),a("td",{attrs:{colspan:"1"}},[a("small",[t._v(t._s(t.getDateString(e.uploaded_on)))])]),a("td",{attrs:{colspan:"1"}},[a("a",{staticClass:"btn btn-primary",attrs:{target:"_blank",href:t.getURL(e.attachment),role:"button"}},[t._v("Download")])])])}))])])},d=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("#")]),a("th",{attrs:{scope:"col",colspan:"3"}},[t._v("Description")]),a("th",{attrs:{scope:"col",colspan:"1"}},[t._v("Uploaded By")]),a("th",{attrs:{scope:"col",colspan:"1"}},[t._v("Uploaded On")]),a("th",{attrs:{scope:"col",colspan:"1"}},[t._v("Attachment")])])])}],u=a("d722"),m={name:"ResourceTable",props:{resources:Array},computed:{},methods:{doMath:function(t){return t+1},getDateString:function(t){return moment(t).format("Do MMMM YYYY,  hh:mm a")},getURL:function(t){return u["A"]+t}}},f=m,v=a("2877"),b=Object(v["a"])(f,c,d,!1,null,null,null);b.options.__file="ResourceTable.vue";var p=b.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal fade",attrs:{id:t.addModalId,tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v(t._s(t.title))]),t._m(0)]),a("div",{staticClass:"modal-body"},[a("form",[a("div",{staticClass:"form-group"},[a("input",{staticClass:"form-control-file",attrs:{type:"file"},on:{change:function(e){t.changeFile(e)}}}),t.errLecture?a("span",{staticClass:"text-danger"},[t._v("Please add a file.")]):t._e()]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"col-form-label",attrs:{for:"message-text"}},[t._v("Description:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"form-control",attrs:{id:"message-text",maxlength:"100"},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}})])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.validateAddLec}},[t._v("\n                Share Resource "),t.loadingAddLecture?a("span",{staticClass:"ld ld-ring ld-spin"}):t._e()])])])])])},_=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}],g=a("2f62"),C={name:"AddResourceModal",computed:Object(g["b"])(["getToken","getCourse"]),data:function(){return{title:"Add Resource",content:"",errLecture:!1,loadingAddLecture:!1,file:null}},props:{addModalId:String,init:Function},methods:{addLec:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return console.log(this.getCourse.info.id),this.loadingAddLecture=!0,t.next=4,Object(u["i"])(this.getToken.token,this.getCourse.info.id,this.content,this.file);case 4:e=t.sent,this.loadingAddLecture=!1,200==e.status?($("#".concat(this.addModalId)).modal("hide"),this.init()):(console.log(e.response.data),this.errLecture=!0);case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),changeFile:function(){this.file=event.target.files[0]},validateAddLec:function(){null!=this.file?(this.errLecture=!1,this.addLec()):this.errLecture=!0}}},k=C,y=Object(v["a"])(k,h,_,!1,null,null,null);y.options.__file="AddResourceModal.vue";var O=y.exports,x=a("74c9"),L={name:"Resources",components:{Navbar:o["a"],Sidebar:l["a"],ResourceTable:p,AddResourceModal:O,BackButton:x["a"]},data:function(){return{lectures:[],loadingLectures:!1,addModalId:"addLecture"}},computed:Object(i["a"])({},Object(g["b"])(["getUser","getToken","getCourse"])),props:{signedIn:Object,course:Object},methods:{init:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.loadingLectures=!0,t.next=3,Object(u["v"])(this.getToken.token,this.getCourse.info.id);case 3:e=t.sent,this.loadingLectures=!1,(e.status=200)?(this.lectures=e.data,console.log(e.data)):console.log(e);case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},mounted:function(){this.init()}},j=L,w=Object(v["a"])(j,s,n,!1,null,null,null);w.options.__file="Resources.vue";e["default"]=w.exports},ade3:function(t,e,a){"use strict";function s(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}a.d(e,"a",function(){return s})},be94:function(t,e,a){"use strict";a.d(e,"a",function(){return n});var s=a("ade3");function n(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),n.forEach(function(e){Object(s["a"])(t,e,a[e])})}return t}},d1fa:function(t,e,a){}}]);
//# sourceMappingURL=chunk-278fa1c2.7859f4a8.js.map