(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e0d"],{"3c11":function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"modal fade",attrs:{id:t.addModalId,tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v(t._s(t.title))]),t._m(0)]),e("div",{staticClass:"modal-body"},[e("form",[e("div",{staticClass:"form-group"},[e("label",{staticClass:"col-form-label",attrs:{for:"message-text"}},[t._v("Title:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"form-control",attrs:{id:"message-text",maxlength:"100"},domProps:{value:t.content},on:{input:function(s){s.target.composing||(t.content=s.target.value)}}}),t.errTitle?e("span",{staticClass:"text-danger"},[t._v("Please add a title.")]):t._e()]),e("div",{staticClass:"form-group"},[e("input",{staticClass:"form-control-file",attrs:{type:"file"},on:{change:function(s){t.changeFile(s)}}}),t.errLecture?e("span",{staticClass:"text-danger"},[t._v("Please add a file.")]):t._e()]),e("div",{staticClass:"form-group"},[e("label",{staticClass:"col-form-label",attrs:{for:"message-text"}},[t._v("Deadline:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.deadline,expression:"deadline"}],staticClass:"form-control",attrs:{type:"datetime-local"},domProps:{value:t.deadline},on:{input:function(s){s.target.composing||(t.deadline=s.target.value)}}}),t.errDeadline?e("span",{staticClass:"text-danger"},[t._v("Please add a deadline.")]):t._e()]),e("div",{staticClass:"form-group"},[e("label",{staticClass:"col-form-label",attrs:{for:"message-text"}},[t._v("Max Score:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.max_score,expression:"max_score"}],staticClass:"form-control",attrs:{type:"number",max:"1000",min:"0"},domProps:{value:t.max_score},on:{input:function(s){s.target.composing||(t.max_score=s.target.value)}}}),t.errMax?e("span",{staticClass:"text-danger"},[t._v("Please add a valid Max Score.")]):t._e()])])]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.validateAddLec}},[t._v("\n                Add Assignment "),t.loadingAddLecture?e("span",{staticClass:"ld ld-ring ld-spin"}):t._e()])])])])])},n=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}],i=(e("96cf"),e("3040")),r=e("2f62"),o=e("d722"),l={name:"AddAssignmentModal",computed:Object(r["b"])(["getToken","getCourse"]),data:function(){return{title:"Add Assignment",content:"",errLecture:!1,errDeadline:!1,errTitle:!1,loadingAddLecture:!1,errMax:!1,file:null,deadline:"",max_score:0}},props:{addModalId:String,init:Function},methods:{addLec:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.loadingAddLecture=!0,t.next=3,Object(o["b"])(this.getToken.token,this.getCourse.info.id,this.content,this.file,this.deadline,this.max_score);case 3:s=t.sent,this.loadingAddLecture=!1,200==s.status?($("#".concat(this.addModalId)).modal("hide"),this.init()):(console.log(s.response.data),this.errLecture=!0);case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),changeFile:function(){this.file=event.target.files[0]},validateAddLec:function(){null==this.file?this.errLecture=!0:this.errLecture=!1,this.max_score<0||this.max_score>1e3?this.errMax=!0:this.errMax=!1,0==this.content.length?this.errTitle=!0:this.errTitle=!1,0==this.deadline.length?this.errDeadline=!0:this.errDeadline=!1,this.errLecture||this.errDeadline||this.errTitle||this.errMax||this.addLec()}}},c=l,d=e("2877"),m=Object(d["a"])(c,a,n,!1,null,null,null);m.options.__file="AddAssignmentModal.vue";s["a"]=m.exports},"5ea5":function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"Sidebar"},[e("div",{staticClass:"wrapper"},[e("nav",{staticClass:"col-md-2 d-none d-md-block bg-light sidebar",attrs:{id:"sidebar"}},[e("div",{staticClass:"sidebar-sticky"},[e("ul",{staticClass:"nav flex-column"},[e("li",{staticClass:"nav-item active"}),e("li",{staticClass:"nav-item"},[e("router-link",{attrs:{to:{name:"dashboard"}}},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Dashboard")])])],1),e("li",{staticClass:"nav-item"},[e("router-link",{attrs:{to:{name:"lectures"}}},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Lectures")])])],1),e("li",{staticClass:"nav-item"},[e("router-link",{attrs:{to:{name:"resources"}}},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Resources")])])],1),e("li",{staticClass:"nav-item"},[e("router-link",{attrs:{to:{name:"assignments"}}},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Assignments")])])],1),e("li",{staticClass:"nav-item"},[e("router-link",{attrs:{to:{name:"announcements"}}},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Announcements")])])],1),e("li",{staticClass:"nav-item"},[e("router-link",{attrs:{to:{name:"polls"}}},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Polls")])])],1),e("li",{staticClass:"nav-item"},[e("router-link",{attrs:{to:{name:"storagedocs"}}},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Storage")])])],1)]),t._m(0),e("ul",{staticClass:"nav flex-column mb-2"},[e("li",{staticClass:"nav-item"},[e("router-link",{attrs:{to:{name:"classinfo"}}},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Class Info")])])],1),t._m(1)])])])])])},n=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("h6",{staticClass:"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"},[e("span",[t._v("Quick Links")]),e("a",{staticClass:"d-flex align-items-center text-muted",attrs:{href:"#"}})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("\n                      Submissions\n                  ")])])}],i={name:"Sidebar",props:{signedIn:Object,info:Object},mounted:function(){}},r=i,o=(e("774f"),e("2877")),l=Object(o["a"])(r,a,n,!1,null,"53ba8af8",null);l.options.__file="Sidebar.vue";s["a"]=l.exports},"774f":function(t,s,e){"use strict";var a=e("cb47"),n=e.n(a);n.a},a322:function(t,s,e){"use strict";function a(t,s,e){return s in t?Object.defineProperty(t,s,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[s]=e,t}e.d(s,"a",function(){return a})},c7a6:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"Lectures"},[e("Navbar"),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-2"},[e("Sidebar")],1),e("div",{staticClass:"col-md-10"},[e("div",{staticClass:"col-md-12 col-xs-12"},[e("h2",{staticClass:"m-2"},[t._v("Assignment Submissions: ")]),e("h3",{staticClass:"m-3 pull-right"},[t._v("Max Score: "+t._s(t.getAssignment.assignment.max_score))]),e("AssignmentSubmissionsTable",{attrs:{submissions:t.submissions,init:t.init}})],1)])])],1)},n=[],i=(e("96cf"),e("3040")),r=e("c93e"),o=e("d178"),l=e("5ea5"),c=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"AssignmentTable table-responsive"},[e("table",{staticClass:"table table-hover"},[t._m(0),e("tbody",t._l(t.submissions,function(s,a){return e("tr",{key:s.id},[e("th",{attrs:{scope:"row"}},[t._v(t._s(t.doMath(a)))]),e("td",{attrs:{colspan:"3"}},[e("small",[t._v(t._s(s.submitter.username))])]),e("td",{attrs:{colspan:"1"}},[e("small",[t._v(t._s(s.submitter.email))])]),e("td",{attrs:{colspan:"1"}},[e("small",[t._v(t._s(s.score))])]),t.getUser.user.is_faculty?e("td",{attrs:{colspan:"1"}},[e("a",{staticClass:"btn btn-primary mr-2",attrs:{target:"_blank",href:t.getURL(s.attachment),role:"button"}},[t._v("Download")]),e("button",{staticClass:"btn btn-primary",attrs:{"data-toggle":"modal","data-target":"#"+t.submitAssignment},on:{click:function(e){t.changeSubmissionData(s)}}},[t._v("Give/Change Marks")])]):t._e()])}))]),e("SubmitAssignmentGradeModal",{attrs:{addModalId:t.submitAssignment,init:t.init,submission:t.submission}})],1)},d=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("#")]),e("th",{attrs:{scope:"col",colspan:"3"}},[t._v("Username")]),e("th",{attrs:{scope:"col",colspan:"1"}},[t._v("Email")]),e("th",{attrs:{scope:"col",colspan:"1"}},[t._v("Score Given")]),e("th",{attrs:{scope:"col",colspan:"1"}},[t._v("Download")])])])}],m=e("d722"),u=e("2f62"),b=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"modal fade",attrs:{id:t.addModalId,tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v(t._s(t.title))]),t._m(0)]),e("div",{staticClass:"modal-body"},[e("form",[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"msg"}},[t._v("\n                    Enter the marks for "),e("strong",[t._v(t._s(t.submission.submitter.username))]),t._v(" out of "),e("strong",[t._v(t._s(t.getAssignment.assignment.max_score))])])]),e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.marks,expression:"marks"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.marks},on:{input:function(s){s.target.composing||(t.marks=s.target.value)}}}),t.errMarks?e("span",{staticClass:"text-danger"},[t._v("Please give valid marks.")]):t._e()])])]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.validateAddGrade}},[t._v("\n                Submit Marks "),t.loadingAddMarks?e("span",{staticClass:"ld ld-ring ld-spin"}):t._e()])])])])])},v=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}],g={name:"SubmitAssignmentGradeModal",computed:Object(u["b"])(["getToken","getAssignment","getUser"]),data:function(){return{title:"Add Submission Grade",errMarks:!1,loadingAddMarks:!1,marks:0}},props:{addModalId:String,init:Function,submission:Object,assignment:Object},methods:{addGrade:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.loadingAddMarks=!0,t.next=3,Object(m["I"])(this.getToken.token,this.getAssignment.assignment.id,[{username:this.submission.submitter.username,score:parseInt(this.marks)}]);case 3:s=t.sent,this.loadingAddMarks=!1,200==s.status?($("#".concat(this.addModalId)).modal("hide"),this.init()):(console.log(s.response.data),this.errMarks=!0);case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),changeFile:function(){this.file=event.target.files[0]},validateAddGrade:function(){this.marks>=0&&this.marks<=this.getAssignment.assignment.max_score?this.errMarks=!1:this.errMarks=!0,0==this.errMarks&&this.addGrade()}},mounted:function(){}},f=g,h=e("2877"),p=Object(h["a"])(f,b,v,!1,null,null,null);p.options.__file="SubmitAssignmentGradeModal.vue";var _=p.exports,C={name:"AssignmentSubmissionsTable",components:{SubmitAssignmentGradeModal:_},data:function(){return{submission:{submitter:{username:""},max_marks:0}}},props:{submissions:Array,init:Function},computed:Object(r["a"])({},Object(u["b"])(["getUser"]),{submitAssignment:function(){return"submitAssignment"}}),methods:{doMath:function(t){return t+1},changeSubmissionData:function(t){this.submission=t},getDateString:function(t){return moment(t).format("Do MMMM YYYY,  hh:mm a")},getURL:function(t){return m["F"]+t},changeAssignment:function(t){this.submission=t},navToSubmissions:function(t){this.$store.commit({type:"setAssignment",submission:t}),this.$router.push("AssignmentSubmissions")},isDisabled:function(t){return moment(t.deadline).toDate()<new Date}},mounted:function(){this.init()}},k=C,x=Object(h["a"])(k,c,d,!1,null,null,null);x.options.__file="AssignmentSubmissionTable.vue";var A=x.exports,M=e("3c11"),y={name:"AssignmentSubmissions",components:{Navbar:o["a"],Sidebar:l["a"],AssignmentSubmissionsTable:A,AddAssignmentModal:M["a"]},data:function(){return{submissions:[],loadingAssignments:!1,addModalId:"addAssignment"}},computed:Object(r["a"])({},Object(u["b"])(["getUser","getToken","getAssignment"])),props:{},methods:{init:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.loadingAssignments=!0,t.next=3,Object(m["s"])(this.getToken.token,this.getAssignment.assignment.id);case 3:s=t.sent,this.loadingAssignments=!1,(s.status=200)?(console.log(s.data),this.submissions=s.data):console.log(s);case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},mounted:function(){this.init()}},S=y,w=Object(h["a"])(S,a,n,!1,null,null,null);w.options.__file="AssignmentSubmissions.vue";s["default"]=w.exports},c93e:function(t,s,e){"use strict";e.d(s,"a",function(){return n});var a=e("a322");function n(t){for(var s=1;s<arguments.length;s++){var e=null!=arguments[s]?arguments[s]:{},n=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.forEach(function(s){Object(a["a"])(t,s,e[s])})}return t}},cb47:function(t,s,e){}}]);
//# sourceMappingURL=chunk-7e0d.ce9abb06.js.map