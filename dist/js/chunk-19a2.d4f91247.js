(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19a2"],{"5ea5":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"Sidebar"},[e("div",{staticClass:"wrapper"},[e("nav",{staticClass:"col-md-2 d-none d-md-block bg-light sidebar",attrs:{id:"sidebar"}},[e("div",{staticClass:"sidebar-sticky"},[e("ul",{staticClass:"nav flex-column"},[e("li",{staticClass:"nav-item active"}),e("li",{staticClass:"nav-item"},[e("router-link",{attrs:{to:{name:"dashboard"}}},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Dashboard")])])],1),e("li",{staticClass:"nav-item"},[e("router-link",{attrs:{to:{name:"lectures"}}},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Lectures")])])],1),e("li",{staticClass:"nav-item"},[e("router-link",{attrs:{to:{name:"resources"}}},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Resources")])])],1),e("li",{staticClass:"nav-item"},[e("router-link",{attrs:{to:{name:"assignments"}}},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Assignments")])])],1),e("li",{staticClass:"nav-item"},[e("router-link",{attrs:{to:{name:"announcements"}}},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Announcements")])])],1),e("li",{staticClass:"nav-item"},[e("router-link",{attrs:{to:{name:"polls"}}},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Polls")])])],1),e("li",{staticClass:"nav-item"},[e("router-link",{attrs:{to:{name:"storagedocs"}}},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Storage")])])],1)]),t._m(0),e("ul",{staticClass:"nav flex-column mb-2"},[e("li",{staticClass:"nav-item"},[e("router-link",{attrs:{to:{name:"classinfo"}}},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Class Info")])])],1),t._m(1)])])])])])},s=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("h6",{staticClass:"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"},[e("span",[t._v("Quick Links")]),e("a",{staticClass:"d-flex align-items-center text-muted",attrs:{href:"#"}})])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("\n                      Submissions\n                  ")])])}],i={name:"Sidebar",props:{signedIn:Object,info:Object},mounted:function(){}},o=i,r=(e("774f"),e("2877")),c=Object(r["a"])(o,a,s,!1,null,"53ba8af8",null);c.options.__file="Sidebar.vue";n["a"]=c.exports},"774f":function(t,n,e){"use strict";var a=e("cb47"),s=e.n(a);s.a},"914a":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"infoCard"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("p",{staticClass:"card-text"},[t._v("\n          "+t._s(t.announcement.content)+"\n        ")]),e("footer",{staticClass:"blockquote-footer"},[t._v("\n          Announced by "),e("cite",{attrs:{title:"Source Title"}},[t._v(t._s(t.announcement.announcer.username))]),t._v("\n             \n          "),e("a",{staticStyle:{cursor:"pointer"},on:{click:t.viewComments}},[e("i",{staticClass:"fa fa-comments",attrs:{"aria-hidden":"true"}}),t._v(" "+t._s(t.announcement.commentCount)+" comments.")]),t.getUser.user.is_faculty?e("a",{staticStyle:{cursor:"pointer",float:"right"},on:{click:t.showAnnDeleteModal}},[e("i",{staticClass:"fa fa-trash",attrs:{"aria-hidden":"true"}})]):t._e(),e("span",{staticStyle:{float:"right"}},[t._v(t._s(t.getDateString)+"  ")]),e("br")])])])]),e("div",{staticClass:"modal fade",attrs:{tabindex:"-1",role:"dialog",id:t.announcement.id}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[t._m(0),t._m(1),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("\n              Close\n            ")]),e("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.deleteAnn}},[t._v("\n              Delete "),t.loadingDelete?e("span",{staticClass:"ld ld-ring ld-spin"}):t._e()])])])])])])},s=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title"},[t._v("Delete")]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"modal-body"},[e("p",[t._v("Are you sure you want to delete this announcement?")])])}],i=e("c93e"),o=e("41cb"),r=e("2f62"),c={name:"AnnouncementCard",props:{announcement:Object},data:function(){return{loadingDelete:!1}},computed:Object(i["a"])({getAnnID:function(){return"#"+this.announcement.id},getDateString:function(){return moment(this.announcement.created_on).format("Do MMMM YYYY,  hh:mm a")}},Object(r["b"])(["getToken","getCourse","getUser","getPoll"])),methods:{viewComments:function(){var t=this.announcement;this.$store.commit({type:"setAnnouncement",announcement:t}),o["a"].push("viewAnnouncement")},showAnnDeleteModal:function(){$(this.getAnnID).modal("show")},deleteAnn:function(){}}},l=c,d=e("2877"),u=Object(d["a"])(l,a,s,!1,null,null,null);u.options.__file="AnnouncementCard.vue";n["a"]=u.exports},a322:function(t,n,e){"use strict";function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}e.d(n,"a",function(){return a})},c93e:function(t,n,e){"use strict";e.d(n,"a",function(){return s});var a=e("a322");function s(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},s=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.forEach(function(n){Object(a["a"])(t,n,e[n])})}return t}},cb47:function(t,n,e){},d1a4:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"Announcements"},[e("Navbar"),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-2"},[e("Sidebar",{attrs:{signedIn:t.signedIn,info:t.info}})],1),e("div",{staticClass:"col-md-10"},[e("div",{staticClass:"col-md-12 col-xs-12"},[t.getUser.user.is_faculty?e("button",{staticClass:"btn btn-primary mb-5 mt-2 float-right",attrs:{"data-toggle":"modal","data-target":"#"+t.addModalId}},[t._v("\n              Add Announcement\n          ")]):t._e(),e("h2",{staticClass:"m-2"},[t._v("Announcements")])]),e("br"),e("br"),e("center",[t.loadingAnnouncements?e("span",{staticClass:"ld ld-ring ld-spin text-primary mt-10",staticStyle:{"font-size":"64px"}}):t._e()]),e("div",{staticClass:"col-md-12"},[e("AddAnnouncementModal",{attrs:{addModalId:t.addModalId,init:t.init}}),t._l(t.announcements,function(t){return e("AnnouncementCard",{key:t.id,staticClass:"col-md-12 my-2 col-sm-12",attrs:{announcement:t,showDelete:!0}})})],2),e("br"),e("br"),e("br")],1)])],1)},s=[],i=(e("96cf"),e("3040")),o=e("c93e"),r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"modal fade",attrs:{id:t.addModalId,tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v(t._s(t.title))]),t._m(0)]),e("div",{staticClass:"modal-body"},[e("form",[e("div",{staticClass:"form-group"},[e("label",{staticClass:"col-form-label",attrs:{for:"message-text"}},[t._v("Body:")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"form-control",attrs:{id:"message-text",rows:"5"},domProps:{value:t.content},on:{input:function(n){n.target.composing||(t.content=n.target.value)}}}),t.errAnnouncement?e("span",{staticClass:"text-danger text-center"},[t._v("Please enter the Announcement.")]):t._e()])])]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.validateAddAnnounce}},[t._v("\n                Add Announcement "),t.loadingAddAnnouncement?e("span",{staticClass:"ld ld-ring ld-spin"}):t._e()])])])])])},c=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}],l=e("2f62"),d=e("d722"),u={name:"AddAnnouncementModal",computed:Object(l["b"])(["getToken","getCourse"]),data:function(){return{title:"Add Announcements",content:"",errAnnouncement:!1,loadingAddAnnouncement:!1}},props:{addModalId:String,init:Function},methods:{addAnnounce:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.loadingAddAnnouncement=!0,t.next=3,Object(d["a"])(this.getToken.token,this.getCourse.info.id,this.content);case 3:n=t.sent,200==n.status?($("#".concat(this.addModalId)).modal("hide"),this.init()):(console.log(n.response.data),this.errAnnouncement=!0),this.loadingAddAnnouncement=!1;case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),validateAddAnnounce:function(){0!=this.content.length?(this.errAnnouncement=!1,this.addAnnounce()):this.errAnnouncement=!0}}},m=u,v=e("2877"),f=Object(v["a"])(m,r,c,!1,null,null,null);f.options.__file="AddAnnouncementModal.vue";var b=f.exports,h=e("914a"),C=e("5ea5"),p=e("d178"),g={name:"Announcements",components:{Navbar:p["a"],Sidebar:C["a"],AddAnnouncementModal:b,AnnouncementCard:h["a"]},props:{signedIn:Object,info:Object},computed:Object(o["a"])({addModalId:function(){return"addAnnouncement"}},Object(l["b"])(["getToken","getCourse","getUser"])),data:function(){return{announcements:[],loadingAnnouncements:!1}},methods:{init:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.loadingAnnouncements=!0,t.next=3,Object(d["q"])(this.getToken.token,this.getCourse.info.id);case 3:n=t.sent,this.loadingAnnouncements=!1,200==n.status?this.announcements=n.data:console.log(n);case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},mounted:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.init();case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},_=g,A=Object(v["a"])(_,a,s,!1,null,null,null);A.options.__file="Announcements.vue";n["default"]=A.exports}}]);
//# sourceMappingURL=chunk-19a2.d4f91247.js.map