(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-858b"],{"230f":function(t,e,n){},"5ea5":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Sidebar"},[n("div",{staticClass:"wrapper"},[n("nav",{staticClass:"col-md-2 d-none d-md-block bg-light sidebar",attrs:{id:"sidebar"}},[n("div",{staticClass:"sidebar-sticky"},[n("ul",{staticClass:"nav flex-column"},[t._m(0),n("li",{staticClass:"nav-item"},[n("router-link",{attrs:{to:{name:"lectures"}}},[n("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Lectures")])])],1),t._m(1),n("li",{staticClass:"nav-item"},[n("router-link",{attrs:{to:{name:"announcements"}}},[n("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Announcements")])])],1),t._m(2),t._m(3)]),t._m(4),n("ul",{staticClass:"nav flex-column mb-2"},[n("li",{staticClass:"nav-item"},[n("router-link",{attrs:{to:{name:"classinfo"}}},[n("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Class Info")])])],1),t._m(5)])])])])])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"nav-item active"},[n("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("\n                      Dashboard "),n("span",{staticClass:"sr-only"},[t._v("(current)")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("\n                      Resources\n                  ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("\n                      Polls\n                  ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("\n                      Storage\n                  ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h6",{staticClass:"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"},[n("span",[t._v("Quick Links")]),n("a",{staticClass:"d-flex align-items-center text-muted",attrs:{href:"#"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("\n                      Submissions\n                  ")])])}],o={name:"Sidebar",props:{signedIn:Object,info:Object},mounted:function(){}},i=o,r=(n("b5f9"),n("2877")),c=Object(r["a"])(i,a,s,!1,null,"03a5f9c8",null);c.options.__file="Sidebar.vue";e["a"]=c.exports},"7c55":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"SingleAnnouncement"},[n("Navbar"),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-2"},[n("Sidebar",{attrs:{signedIn:t.signedIn,info:t.info}})],1),n("div",{staticClass:"col-md-10"},[n("div",{staticClass:"col-md-12 col-xs-12"},[n("button",{staticClass:"btn btn-primary mb-5 mt-2 float-right",attrs:{"data-toggle":"modal","data-target":"#"+t.addModalId}},[t._v("\n              Comment\n          ")]),n("h4",{staticClass:"m-2"},[t._v("View Announcement")])]),n("br"),n("br"),n("br"),n("div",{staticClass:"col-md-12"},[n("AddCommentModal",{attrs:{addModalId:t.addModalId}}),n("AnnouncementCard",{staticClass:"col-md-12 my-2 col-sm-12",attrs:{announcement:t.getAnnouncement.announcement}})],1),n("center",[t.loadingComments?n("span",{staticClass:"ld ld-ring ld-spin text-primary mt-10",staticStyle:{"font-size":"64px"}}):t._e()]),n("br"),0==t.loadingComments?n("div",[n("h4",{staticClass:"m-2"},[t._v("Comments")]),n("br"),t._l(t.comments,function(t){return n("CommentCard",{key:t.id,staticClass:"col-md-12 my-2 col-sm-12",attrs:{comment:t}})})],2):t._e()],1)])],1)},s=[],o=(n("96cf"),n("3040")),i=n("c93e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal fade",attrs:{id:t.addModalId,tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[n("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-header"},[n("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v(t._s(t.title))]),t._m(0)]),n("div",{staticClass:"modal-body"},[n("form",[n("div",{staticClass:"form-group"},[n("label",{staticClass:"col-form-label",attrs:{for:"message-text"}},[t._v("Body:")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"form-control",attrs:{id:"message-text",rows:"5"},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}}),t.errComment?n("span",{staticClass:"text-danger text-center"},[t._v("Please enter the Comment.")]):t._e()])])]),n("div",{staticClass:"modal-footer"},[n("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.vaildateAddComm}},[t._v("\n                Add Comment "),t.loadingAddComment?n("span",{staticClass:"ld ld-ring ld-spin"}):t._e()])])])])])},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}],l=n("2f62"),m=n("d722"),d={name:"AddCommentModal",computed:Object(l["b"])(["getToken","getCourse","getAnnouncement"]),data:function(){return{title:"Add Comment",content:"",errComment:!1,loadingAddComment:!1}},props:{addModalId:String},methods:{addComm:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.loadingAddComment=!0,t.next=3,Object(m["c"])(this.getToken.token,this.getAnnouncement.announcement.id,this.content);case 3:e=t.sent,200==e.status?($("#".concat(this.addModalId)).modal("hide"),this.$router.go(this.$router.currentRoute)):(console.log(e.response.data),this.errJoinClassRes=!0),this.loadingAddComment=!1;case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),vaildateAddComm:function(){0!=this.content.length?(this.errComment=!1,this.addComm()):this.errComment=!0}}},u=d,v=n("2877"),f=Object(v["a"])(u,r,c,!1,null,null,null);f.options.__file="AddCommentModal.vue";var C=f.exports,b=n("914a"),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"infoCard"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-body"},[n("p",{staticClass:"card-text"},[t._v("\n        "+t._s(t.comment.comment_text)+"\n      ")]),n("footer",{staticClass:"blockquote-footer"},[t._v("\n        Commented by "),n("cite",{attrs:{title:"Source Title"}},[t._v(t._s(t.comment.commenter.username))]),t._v("\n          \n        "),n("i",{staticClass:"fa fa-thumbs-o-up",attrs:{"aria-hidden":"true"}}),t._v(" "+t._s(t.getUpvotesCount)+"  \n        "),n("i",{staticClass:"fa fa-thumbs-o-down",attrs:{"aria-hidden":"true"}}),t._v(" "+t._s(t.getDownvotesCount)+" \n        "),n("span",{staticStyle:{float:"right"}},[t._v(t._s(t.getDateString)+" ")]),n("br")])])])])},h=[],p=(n("41cb"),{name:"CommentCard",props:{comment:Object},computed:{getDateString:function(){return moment(this.comment.created_on).format("Do MMMM YYYY,  hh:mm a")},getUpvotesCount:function(){return this.comment.upvoters.length},getDownvotesCount:function(){return this.comment.downvoters.length}},mounted:function(){console.log(this.comment)}}),g=p,y=Object(v["a"])(g,_,h,!1,null,null,null);y.options.__file="CommentCard.vue";var k=y.exports,x=n("5ea5"),A=n("d178"),w={name:"SingleAnnouncement",components:{Navbar:A["a"],Sidebar:x["a"],AddCommentModal:C,AnnouncementCard:b["a"],CommentCard:k},props:{signedIn:Object,info:Object},computed:Object(i["a"])({addModalId:function(){return"addAnnouncementComment"}},Object(l["b"])(["getToken","getCourse","getUser","getAnnouncement"])),data:function(){return{comments:[],loadingComments:!1}},mounted:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.loadingComments=!0,t.next=3,Object(m["d"])(this.getToken.token,this.getAnnouncement.announcement.id);case 3:e=t.sent,this.loadingComments=!1,200==e.status?this.comments=e.data.comments:console.log(e);case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},O=w,j=Object(v["a"])(O,a,s,!1,null,null,null);j.options.__file="SingleAnnouncement.vue";e["default"]=j.exports},"914a":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"infoCard"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-body"},[n("p",{staticClass:"card-text"},[t._v("\n        "+t._s(t.announcement.content)+"\n      ")]),n("footer",{staticClass:"blockquote-footer"},[t._v("\n        Announced by "),n("cite",{attrs:{title:"Source Title"}},[t._v(t._s(t.announcement.announcer.username))]),t._v("\n           \n        "),n("a",{staticStyle:{cursor:"pointer"},on:{click:t.viewComments}},[n("i",{staticClass:"fa fa-comments",attrs:{"aria-hidden":"true"}}),t._v(" "+t._s(t.announcement.commentCount)+" comments.")]),n("span",{staticStyle:{float:"right"}},[t._v(t._s(t.getDateString)+" ")]),n("br")])])])])},s=[],o=n("41cb"),i={name:"AnnouncementCard",props:{announcement:Object},computed:{getDateString:function(){return moment(this.announcement.created_on).format("Do MMMM YYYY,  hh:mm a")}},methods:{viewComments:function(){var t=this.announcement;this.$store.commit({type:"setAnnouncement",announcement:t}),o["a"].push("viewAnnouncement")}}},r=i,c=n("2877"),l=Object(c["a"])(r,a,s,!1,null,null,null);l.options.__file="AnnouncementCard.vue";e["a"]=l.exports},b5f9:function(t,e,n){"use strict";var a=n("230f"),s=n.n(a);s.a},c93e:function(t,e,n){"use strict";function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},s=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),s.forEach(function(e){a(t,e,n[e])})}return t}n.d(e,"a",function(){return s})}}]);
//# sourceMappingURL=chunk-858b.45ce4414.js.map