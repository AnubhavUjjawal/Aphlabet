(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-88bef214"],{"1a2c":function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal fade",attrs:{id:t.addModalId,tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v(t._s(t.title))]),t._m(0)]),s("div",{staticClass:"modal-body"},[s("form",[s("div",{staticClass:"form-group"},[s("label",{staticClass:"col-form-label",attrs:{for:"message-text"}},[t._v("Body:")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"form-control",attrs:{id:"message-text",rows:"5"},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}}),t.errComment?s("span",{staticClass:"text-danger text-center"},[t._v("Please enter the Comment.")]):t._e()])])]),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.vaildateAddComm}},[t._v("\n                Add Comment "),t.loadingAddComment?s("span",{staticClass:"ld ld-ring ld-spin"}):t._e()])])])])])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}],o=(s("96cf"),s("1da1")),i=s("2f62"),r=s("d722"),l={name:"AddCommentModal",computed:Object(i["b"])(["getToken","getCourse","getAnnouncement"]),data:function(){return{title:"Add Comment",content:"",errComment:!1,loadingAddComment:!1}},props:{addModalId:String,init:Function},methods:{addComm:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.loadingAddComment=!0,t.next=3,Object(r["d"])(this.getToken.token,this.getAnnouncement.announcement.id,this.content);case 3:e=t.sent,200==e.status?($("#".concat(this.addModalId)).modal("hide"),this.init()):(console.log(e.response.data),this.errJoinClassRes=!0),this.loadingAddComment=!1;case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),vaildateAddComm:function(){0!=this.content.length?(this.errComment=!1,this.addComm()):this.errComment=!0}}},c=l,d=s("2877"),u=Object(d["a"])(c,n,a,!1,null,null,null);u.options.__file="AddCommentModal.vue";e["a"]=u.exports},4654:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"SingleModal"},[s("Navbar"),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-2"},[s("Sidebar",{attrs:{signedIn:t.signedIn,info:t.info}})],1),s("div",{staticClass:"col-md-10"},[s("BackButton"),s("h2",{staticClass:"m-2 ml-4"},[t._v("View Poll")]),s("div",{staticClass:"col-md-12"},[s("PollCard",{staticClass:"col-md-12 my-2 col-sm-12",attrs:{poll:t.getPoll.poll,showDelete:!1}})],1),0!=t.getPoll.poll.is_responded?s("div",[s("br"),s("h4",{staticClass:"m-2 ml-5"},[t._v("You have already responded.")]),t._l(t.getPoll.poll.poll_options,function(e){return s("OptionCard",{key:e.key,attrs:{option:e,init:t.initForSinglePoll,is_responded:t.getPoll.poll.is_responded}})})],2):t._e(),0==t.getPoll.poll.is_responded?s("div",[s("br"),s("h4",{staticClass:"m-2 ml-5"},[t._v("Give a response.")]),t._l(t.getPoll.poll.poll_options,function(e){return s("OptionCard",{key:e.key,attrs:{option:e,is_responded:t.getPoll.poll.is_responded}})}),s("button",{staticClass:"btn btn-primary m-2 ml-5",on:{click:t.submitPoll}},[t._v("\n          Submit\n          "),t.submittingRes?s("span",{staticClass:"ld ld-ring ld-spin"}):t._e()])],2):t._e()],1)]),t._m(0)],1)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal",attrs:{tabindex:"-1",role:"dialog",id:"errorID"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title"},[t._v("Error")]),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),s("div",{staticClass:"modal-body"},[s("p",[t._v("Please select an option before submitting.")])]),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("\n              Close\n            ")])])])])])}],o=(s("96cf"),s("1da1")),i=s("be94"),r=s("1a2c"),l=s("ffcd"),c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"infoCard",staticStyle:{cursor:"pointer"}},[s("div",{staticClass:"card ml-5 mr-5 mb-2"},[s("div",{staticClass:"card-body"},[s("p",{staticClass:"card-text"},[s("label",[t.disabled?s("div",[s("input",{attrs:{type:"radio",name:"option",disabled:"disabled"},domProps:{value:t.option.id,checked:t.checked}}),t._v("  "+t._s(t.option.option_text)+"\n              ")]):t._e(),1!=t.disabled?s("div",[s("input",{attrs:{type:"radio",name:"option"},domProps:{value:t.option.id}}),t._v("  "+t._s(t.option.option_text)+"\n              ")]):t._e()])])])])])},d=[],u=(s("41cb"),s("2f62")),m={name:"OptionCard",props:{option:Object,is_responded:Object},computed:{getDateString:function(){return moment(this.poll.created_at).format("Do MMMM YYYY,  hh:mm a")},disabled:function(){return 0!=this.is_responded},checked:function(){return this.is_responded.poll_option.id==this.option.id?"checked":null}},methods:{}},p=m,h=s("2877"),v=Object(h["a"])(p,c,d,!1,null,null,null);v.options.__file="OptionCard.vue";var f=v.exports,b=s("5520"),g=s("5ea5"),C=s("d178"),_=s("74c9"),k=s("d722"),w={name:"SinglePoll",components:{Navbar:C["a"],Sidebar:g["a"],AddCommentModal:r["a"],PollCard:l["a"],CommentCard:b["a"],OptionCard:f,BackButton:_["a"]},props:{signedIn:Object,info:Object},computed:Object(i["a"])({},Object(u["b"])(["getToken","getCourse","getUser","getPoll"])),data:function(){return{comments:[],submittingRes:!1}},methods:{initForSinglePoll:function(){this.$router.push("Polls")},init:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),submitPoll:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e=$("input[name=option]:checked").val(),void 0!=e){t.next=4;break}return $("#errorID").modal("show"),t.abrupt("return");case 4:return e=parseInt(e),this.submittingRes=!0,t.next=8,Object(k["D"])(this.getToken.token,this.getPoll.poll.id,e);case 8:s=t.sent,this.submittingRes=!1,200==s.status?this.$router.push("Polls"):console.log(s);case 11:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},mounted:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.init();case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},y=w,O=Object(h["a"])(y,n,a,!1,null,null,null);O.options.__file="SinglePoll.vue";e["default"]=O.exports},5520:function(t,e,s){"use strict";var n,a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"infoCard"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("p",{staticClass:"card-text"},[t._v("\n        "+t._s(t.comment.comment_text)+"\n      ")]),s("footer",{staticClass:"blockquote-footer"},[t._v("\n        Commented by "),s("cite",{attrs:{title:"Source Title"}},[t._v(t._s(t.comment.commenter.username))]),t._v("\n          \n        "),s("i",{class:{fa:!0,"fa-thumbs-o-up":0==t.comment.has_Upvoted,"fa-thumbs-up":1==t.comment.has_Upvoted},attrs:{"aria-hidden":"true","data-toggle":"tooltip","data-html":"true",title:t.getTooltipUpvoters()},on:{click:t.upVote}}),t._v(" "+t._s(t.getUpvotesCount)+"  \n        "),s("i",{class:{fa:!0,"fa-thumbs-o-down":0==t.comment.has_Downvoted,"fa-thumbs-down":1==t.comment.has_Downvoted},attrs:{"aria-hidden":"true","data-toggle":"tooltip","data-html":"true",title:t.getTooltipDownvoters()},on:{click:t.DownVote}}),t._v(" "+t._s(t.getDownvotesCount)+" \n        "),s("span",{staticStyle:{float:"right"}},[t._v(t._s(t.getDateString)+" ")]),s("br")])])])])},o=[],i=s("ade3"),r=s("be94"),l=(s("96cf"),s("1da1")),c=(s("41cb"),s("d722")),d=s("2f62"),u=(n={name:"CommentCard",props:{comment:Object},computed:{},methods:{getTooltipUpvoters:function(){for(var t=this.comment.upvoters,e="",s=0;s<t.length;s++)e+=t[s].username,e+="\n";return e},getTooltipDownvoters:function(){for(var t=this.comment.downvoters,e="",s=0;s<t.length;s++)e+=t[s].username,e+="\n";return e},removeUserFromList:function(t,e){var s=t.indexOf(e);-1!=s&&t.splice(s,1)},checkIfUpvoted:function(){for(var t=this.getUser.user.username,e=this.comment.upvoters,s=0;s<e.length;s++)if(e[s].username==t)return!0;return!1},checkIfDownVoted:function(){for(var t=this.getUser.user.username,e=this.comment.downvoters,s=0;s<e.length;s++)if(e[s].username==t)return!0;return!1},upVote:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(){var e,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(1!=this.checkIfUpvoted()){t.next=6;break}return t.next=3,Object(c["z"])(this.getToken.token,1,this.comment.id,this.getUser.user.username);case 3:return e=t.sent,200==e.status&&(this.comment.has_Upvoted=0,this.removeUserFromList(this.comment.upvoters,this.getUser.user)),t.abrupt("return");case 6:if(1!=this.checkIfDownVoted()){t.next=9;break}return t.abrupt("return");case 9:return t.next=11,Object(c["E"])(this.getToken.token,2,this.comment.id,this.getUser.user.username);case 11:s=t.sent,200==s.status&&(this.comment.has_Upvoted=1,this.comment.upvoters.push(this.getUser.user));case 13:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),DownVote:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(){var e,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(1!=this.checkIfDownVoted()){t.next=6;break}return t.next=3,Object(c["z"])(this.getToken.token,2,this.comment.id,this.getUser.user.username);case 3:return e=t.sent,200==e.status&&(this.comment.has_Downvoted=0,this.removeUserFromList(this.comment.downvoters,this.getUser.user)),t.abrupt("return");case 6:if(1!=this.checkIfUpvoted()){t.next=9;break}return t.abrupt("return");case 9:return t.next=11,Object(c["E"])(this.getToken.token,3,this.comment.id,this.getUser.user.username);case 11:s=t.sent,200==s.status&&(console.log(s.data),this.comment.has_Downvoted=1,this.comment.downvoters.push(this.getUser.user));case 13:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},Object(i["a"])(n,"computed",Object(r["a"])({},Object(d["b"])(["getToken","getCourse","getUser"]),{getDateString:function(){return moment(this.comment.created_on).format("Do MMMM YYYY,  hh:mm a")},getUpvotesCount:function(){return this.comment.upvoters.length},getDownvotesCount:function(){return this.comment.downvoters.length}})),Object(i["a"])(n,"mounted",function(){}),n),m=u,p=s("2877"),h=Object(p["a"])(m,a,o,!1,null,null,null);h.options.__file="CommentCard.vue";e["a"]=h.exports},"5ea5":function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Sidebar"},[s("div",{staticClass:"wrapper"},[s("nav",{staticClass:"col-md-2 d-none d-md-block bg-light sidebar",attrs:{id:"sidebar"}},[s("div",{staticClass:"sidebar-sticky"},[s("ul",{staticClass:"nav flex-column"},[s("li",{staticClass:"nav-item active"}),s("li",{staticClass:"nav-item"},[s("router-link",{attrs:{to:{name:"dashboard"}}},[s("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Dashboard")])])],1),s("li",{staticClass:"nav-item"},[s("router-link",{attrs:{to:{name:"lectures"}}},[s("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Lectures")])])],1),s("li",{staticClass:"nav-item"},[s("router-link",{attrs:{to:{name:"resources"}}},[s("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Resources")])])],1),s("li",{staticClass:"nav-item"},[s("router-link",{attrs:{to:{name:"assignments"}}},[s("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Assignments")])])],1),s("li",{staticClass:"nav-item"},[s("router-link",{attrs:{to:{name:"announcements"}}},[s("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Announcements")])])],1),s("li",{staticClass:"nav-item"},[s("router-link",{attrs:{to:{name:"polls"}}},[s("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Polls")])])],1),t._m(0)]),t._m(1),s("ul",{staticClass:"nav flex-column mb-2"},[s("li",{staticClass:"nav-item"},[s("router-link",{attrs:{to:{name:"classinfo"}}},[s("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Class Info")])])],1),t._m(2)])])])])])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("\n                      Storage\n                  ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h6",{staticClass:"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"},[s("span",[t._v("Quick Links")]),s("a",{staticClass:"d-flex align-items-center text-muted",attrs:{href:"#"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("\n                      Submissions\n                  ")])])}],o={name:"Sidebar",props:{signedIn:Object,info:Object},mounted:function(){}},i=o,r=(s("6d1b"),s("2877")),l=Object(r["a"])(i,n,a,!1,null,"9d0e8c00",null);l.options.__file="Sidebar.vue";e["a"]=l.exports},"6d1b":function(t,e,s){"use strict";var n=s("d1fa"),a=s.n(n);a.a},"74c9":function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("button",{staticClass:"btn btn-primary",on:{click:t.goBack}},[s("i",{staticClass:"fa fa-angle-left",attrs:{"aria-hidden":"true"}})])])},a=[],o=s("41cb"),i={name:"BackButton",methods:{goBack:function(){o["a"].go(-1)}}},r=i,l=s("2877"),c=Object(l["a"])(r,n,a,!1,null,null,null);c.options.__file="BackButton.vue";e["a"]=c.exports},ade3:function(t,e,s){"use strict";function n(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}s.d(e,"a",function(){return n})},be94:function(t,e,s){"use strict";s.d(e,"a",function(){return a});var n=s("ade3");function a(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{},a=Object.keys(s);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(s).filter(function(t){return Object.getOwnPropertyDescriptor(s,t).enumerable}))),a.forEach(function(e){Object(n["a"])(t,e,s[e])})}return t}},d1fa:function(t,e,s){},ffcd:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"infoCard"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("p",{staticClass:"card-text",staticStyle:{cursor:"pointer"},on:{click:t.goToPoll}},[t._v("\n          "+t._s(t.poll.poll_text)+"\n        ")]),s("footer",{staticClass:"blockquote-footer"},[t._v("\n          Asked by "),s("cite",{attrs:{title:"Source Title"}},[t._v(t._s(t.poll.creater.username))]),t.getUser.user.is_faculty&&t.showDelete?s("a",{staticStyle:{cursor:"pointer",float:"right"},on:{click:t.showPollDeleteModal}},[s("i",{staticClass:"fa fa-trash",attrs:{"aria-hidden":"true"}})]):t._e(),s("span",{staticStyle:{float:"right"}},[t._v(t._s(t.getDateString)+" ")]),s("br")])])])]),s("div",{staticClass:"modal fade",attrs:{tabindex:"-1",role:"dialog",id:t.poll.id}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[t._m(0),t._m(1),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("\n              Close\n            ")]),s("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.deletePol}},[t._v("\n              Delete "),t.loadingDelete?s("span",{staticClass:"ld ld-ring ld-spin"}):t._e()])])])])])])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title"},[t._v("Delete")]),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-body"},[s("p",[t._v("Are you sure you want to delete this poll?")])])}],o=(s("96cf"),s("1da1")),i=s("be94"),r=s("41cb"),l=s("2f62"),c=s("d722"),d={name:"PollCard",props:{poll:Object,init:Function,showDelete:Boolean},data:function(){return{loadingDelete:!1}},computed:Object(i["a"])({getPollID:function(){return"#"+this.poll.id},getDateString:function(){return moment(this.poll.created_at).format("Do MMMM YYYY,  hh:mm a")}},Object(l["b"])(["getToken","getCourse","getUser","getPoll"])),methods:{deletePol:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.loadingDelete=!0,t.next=3,Object(c["k"])(this.getToken.token,this.poll.id);case 3:e=t.sent,this.loadingDelete=!1,200==e.status?($(this.getPollID).modal("hide"),this.init()):console.log(e);case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),goToPoll:function(){var t=this.poll;this.$store.commit({type:"setPoll",poll:t}),r["a"].push("viewPoll")},showPollDeleteModal:function(){$(this.getPollID).modal("show")}}},u=d,m=s("2877"),p=Object(m["a"])(u,n,a,!1,null,null,null);p.options.__file="PollCard.vue";e["a"]=p.exports}}]);
//# sourceMappingURL=chunk-88bef214.53ef9d3e.js.map