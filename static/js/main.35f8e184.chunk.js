(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{100:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return a})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return c}));var r=function(e){return e.profilePage.profile},a=function(e){return e.profilePage.status},o=function(e){return e.authPage.userId},c=function(e){return e.profilePage.posts}},101:function(e,t,n){},112:function(e,t,n){e.exports=n.p+"static/media/user.775b91d4.png"},133:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n(47),a=n(5),o="social-network/dialogs/SEND_MESSAGE",c={dialogs:[{id:"1",name:"Dima"},{id:"2",name:"Alex"},{id:"3",name:"Andrey"},{id:"4",name:"Sveta"},{id:"5",name:"Sasha"},{id:"6",name:"Victor"},{id:"7",name:"Valera"}],messages:[{id:"1",message:"Hi"},{id:"2",message:"How are you?"},{id:"3",message:"Yo"},{id:"4",message:"Yo"},{id:"5",message:"Yo"}]},i=function(e){return{type:o,newMessageText:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:"6",message:t.newMessageText}])});default:return e}}},138:function(e,t,n){e.exports=n.p+"static/media/Preloader.7a1293ee.svg"},14:function(e,t,n){"use strict";n.d(t,"d",(function(){return u})),n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return f}));var r=n(4),a=n.n(r),o=n(10),c=n(93),i=(n(49),c.create({withCredentials:!0,headers:{"API-KEY":"17ce7864-7abb-4461-acc2-1f1b971290ad"},baseURL:"https://social-network.samuraijs.com/api/1.0/",responseType:"json"})),u={getUsers:function(e,t){return Object(o.a)(a.a.mark((function n(){var r;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("users?page=".concat(e,"&count=").concat(t));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))()}},s={getAuth:function(){return Object(o.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("auth/me");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))()},postAuth:function(e){return i.post("/auth/login",e)},deleteAuth:function(){return i.delete("/auth/login")}},l={postUser:function(e){return Object(o.a)(a.a.mark((function t(){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.post("follow/".concat(e),{});case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))()},deleteUser:function(e){return Object(o.a)(a.a.mark((function t(){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.delete("follow/".concat(e));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))()}},f={getUserProfile:function(e){return Object(o.a)(a.a.mark((function t(){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("profile/"+e);case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))()},getStatust:function(e){return Object(o.a)(a.a.mark((function t(){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("profile/status/"+e);case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))()},updateStatus:function(e){return i.put("profile/status",{status:e})},dispachPhoto:function(e){return Object(o.a)(a.a.mark((function t(){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=new FormData).append("image",e),t.next=4,i.put("profile/photo",n,{headers:{"Content-Type":"multipart/form-data"}});case 4:return r=t.sent,t.abrupt("return",r.data);case 6:case"end":return t.stop()}}),t)})))()},dispachProfileInfo:function(e){return Object(o.a)(a.a.mark((function t(){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.put("profile",e);case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})))()}}},166:function(e,t,n){e.exports=n(295)},17:function(e,t,n){e.exports={nav:"NavBar_nav__SXYLZ",item:"NavBar_item__3O9hl",active:"NavBar_active__aFvT3"}},171:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},172:function(e,t,n){},177:function(e,t,n){},178:function(e,t,n){},179:function(e,t,n){},22:function(e,t,n){e.exports={header:"Header_header__vSHIp",inner:"Header_inner__2Ez4k",wrapper:"Header_wrapper__39tqT",img:"Header_img__1ETF1",login_block:"Header_login_block__3i5u2",btn:"Header_btn__igg9H",menu:"Header_menu__3rjiq",link:"Header_link__3DW5T",outBtn:"Header_outBtn__1XUMX",out:"Header_out__3zhpC"}},295:function(e,t,n){"use strict";n.r(t);n(101),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=n(0),a=n.n(r),o=n(69),c=n.n(o),i=n(26),u=n(27),s=n(29),l=n(28),f=(n(171),n(172),n(17)),m=n.n(f),p=n(12),d=function(){return a.a.createElement("nav",{className:m.a.nav},a.a.createElement("div",{className:m.a.item},a.a.createElement(p.b,{to:"/profile",activeClassName:m.a.active},"Profile")),a.a.createElement("div",{className:m.a.item},a.a.createElement(p.b,{to:"/dialogs",activeClassName:m.a.active},"Messages")),a.a.createElement("div",{className:m.a.item},a.a.createElement(p.b,{to:"/news",activeClassName:m.a.active},"News")),a.a.createElement("div",{className:m.a.item},a.a.createElement(p.b,{to:"/music",activeClassName:m.a.active},"Music")),a.a.createElement("div",{className:m.a.item},a.a.createElement(p.b,{to:"/users",activeClassName:m.a.active},"Users")),a.a.createElement("div",{className:m.a.item},a.a.createElement(p.b,{to:"/settings",activeClassName:m.a.active},"Settings")))},g=n(11),h=(n(177),function(){return a.a.createElement("div",null)}),b=(n(178),function(){return a.a.createElement("div",null)}),v=(n(179),function(){return a.a.createElement("div",null)}),E=n(13),_=(n(93),n(4)),O=n.n(_),w=n(10),j=n(47),P=n(5),S=n(14),k="social-network/users/FOLLOW",C="social-network/users/UNFOLLOW",y="social-network/users/SET_USERS",N="social-network/users/SET_CURRENT_PAGE",x="social-network/users/SET_TOTAL_USERS_COUNT",I="social-network/users/TOGGLE_IS_FETCHING",U={users:[],pageSize:100,totalUsersCount:0,currentPage:1,isFetching:!0,followingIsProgress:[]},T=function(e){return{type:k,userId:e}},A=function(e){return{type:C,userId:e}},F=function(e){return{type:I,isFetching:e}},L=function(e,t){return{type:"social-network/users/TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(P.a)(Object(P.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(P.a)(Object(P.a)({},e),{},{followed:!0}):e}))});case C:return Object(P.a)(Object(P.a)({},e),{},{users:e.users.map((function(e){return e.id==t.userId?Object(P.a)(Object(P.a)({},e),{},{followed:!1}):e}))});case y:return Object(P.a)(Object(P.a)({},e),{},{users:t.users});case N:return Object(P.a)(Object(P.a)({},e),{},{currentPage:t.currentPage});case x:return Object(P.a)(Object(P.a)({},e),{},{totalUsersCount:t.totalUsersCount});case I:return Object(P.a)(Object(P.a)({},e),{},{isFetching:t.isFetching});case"social-network/users/TOGGLE_IS_FOLLOWING_PROGRESS":return Object(P.a)(Object(P.a)({},e),{},{followingIsProgress:t.isFetching?[].concat(Object(j.a)(e.followingIsProgress),[t.userId]):e.followingIsProgress.filter((function(e){return e!==t.userId}))});default:return e}},M=n(57),H=n.n(M),D=n(43),G=n(48),R=n.n(G),B=function(e){for(var t=e.totalCount,n=e.pageSize,o=e.currentPage,c=e.onPageChanged,i=e.portionSize,u=void 0===i?10:i,s=Math.ceil(t/n),l=[],f=1;f<=s;f++)l.push(f);var m=Math.ceil(s/u),p=Object(r.useState)(1),d=Object(D.a)(p,2),g=d[0],h=d[1],b=(g-1)*u+1,v=g*u;return a.a.createElement("div",{className:R.a.paginator},g>1&&a.a.createElement("button",{className:R.a.button_left,onClick:function(){h(g-1),c(b-1)}}),a.a.createElement("div",{className:R.a.inner},l.filter((function(e){return e>=b&&e<=v})).map((function(e){return a.a.createElement("span",{className:o===e&&R.a.selectPage,onClick:function(t){c(e)}},e)}))),m>g&&a.a.createElement("button",{className:R.a.button_right,onClick:function(){h(g+1),c(v+1)}}))},W=n(112),X=n.n(W),J=function(e){var t=e.user,n=e.follow,r=e.unfollow,o=e.followingIsProgress;return a.a.createElement("div",{key:t.id,className:H.a.item},a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement(p.b,{to:"/profile/"+t.id},a.a.createElement("img",{src:null!=t.photos.small?t.photos.small:X.a,className:H.a.user_photo}))),a.a.createElement("div",null,t.name),a.a.createElement("div",null,t.followed?a.a.createElement("button",{disabled:o.some((function(e){return e===t.id})),onClick:function(){r(t.id)}},"Unfollow"):a.a.createElement("button",{disabled:o.some((function(e){return e===t.id})),onClick:function(){n(t.id)}},"Follow")),a.a.createElement("div",null,null==t.status||t.status.length>=20?"------":t.status),a.a.createElement("div",null,"user.location.country"),a.a.createElement("div",null,"user.location.city")))},V=function(e){return a.a.createElement("div",null,a.a.createElement(B,{totalCount:e.totalUsersCount,pageSize:e.pageSize,currentPage:e.currentPage,onPageChanged:e.onPageChanged}),a.a.createElement("div",{className:H.a.inner},e.users.map((function(t){return a.a.createElement(J,{user:t,follow:e.follow,unfollow:e.unfollow,followingIsProgress:e.followingIsProgress})}))))},Y=n(42),q=n(99),Z=n(9),K=function(e){return e.usersPage.users},$=function(e){return e.usersPage.pageSize},Q=function(e){return e.usersPage.totalUsersCount},ee=function(e){return e.usersPage.currentPage},te=function(e){return e.usersPage.isFetching},ne=function(e){return e.usersPage.followingIsProgress},re=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){e.props.setCurrentPage(t),e.props.getUsers(t,e.props.pageSize)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,this.props.isFetching?a.a.createElement(Y.a,null):null,a.a.createElement(V,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingIsProgress:this.props.followingIsProgress}))}}]),n}(a.a.Component),ae={follow:function(e){return function(){var t=Object(w.a)(O.a.mark((function t(n){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(L(!0,e)),t.next=3,S.b.postUser(e);case 3:0==t.sent.resultCode&&n(T(e)),n(L(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(w.a)(O.a.mark((function t(n){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(L(!0,e)),t.next=3,S.b.deleteUser(e);case 3:0==t.sent.resultCode&&n(A(e)),n(L(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:function(e){return{type:N,currentPage:e}},getUsers:function(e,t){return function(){var n=Object(w.a)(O.a.mark((function n(r){var a;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(F(!0)),n.next=3,S.d.getUsers(e,t);case 3:a=n.sent,r(F(!1)),r((c=a.items,{type:y,users:c})),r((o=a.totalCount,{type:x,totalUsersCount:o}));case 7:case"end":return n.stop()}var o,c}),n)})));return function(e){return n.apply(this,arguments)}}()}},oe=Object(Z.d)(Object(E.b)((function(e){return{users:K(e),pageSize:$(e),totalUsersCount:Q(e),currentPage:ee(e),isFetching:te(e),followingIsProgress:ne(e)}}),ae),q.a)(re),ce=n(22),ie=n.n(ce),ue=function(e){var t=e.leftToMenuMode,n=e.logout;return a.a.createElement("div",{className:ie.a.menu,onBlur:t},a.a.createElement("div",{className:ie.a.link},a.a.createElement(p.b,{onClick:t,to:"/profile"},"Profile")),a.a.createElement("div",{className:ie.a.link},a.a.createElement(p.b,{onClick:t,to:"/settings"},"Settings")),a.a.createElement("div",{className:ie.a.out},a.a.createElement("a",{className:ie.a.outBtn,onClick:n},"Out")))},se=function(e){var t=Object(r.useState)(!1),n=Object(D.a)(t,2),o=n[0],c=n[1];return a.a.createElement("header",{className:ie.a.header},a.a.createElement("div",{className:ie.a.wrapper},a.a.createElement("div",{className:ie.a.inner},a.a.createElement("img",{className:ie.a.img,src:"https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg"}),a.a.createElement("div",{className:ie.a.login_block}," ",e.isAuth?a.a.createElement("div",null,e.login," ",a.a.createElement("button",{onClick:function(){c(!o)},className:ie.a.btn})):a.a.createElement(p.b,{to:"/login"},"Login"))),o?a.a.createElement(ue,{logout:e.logout,leftToMenuMode:function(){c(!1)}}):a.a.createElement(a.a.Fragment,null)))},le=n(39),fe="social-network/auth/SET_USER_DATA",me={id:null,email:null,login:null,isAuth:!1},pe=function(e,t,n,r){return{type:fe,data:{userId:e,email:t,login:n,isAuth:r}}},de=function(){return function(){var e=Object(w.a)(O.a.mark((function e(t){var n,r,a,o,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.getAuth();case 2:0===(n=e.sent).resultCode&&(r=n.data,a=r.id,o=r.email,c=r.login,t(pe(a,o,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case fe:return Object(P.a)(Object(P.a)({},e),t.data);default:return e}},he=function(e){return e.authPage.isAuth},be=function(e){return e.authPage.login},ve=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return a.a.createElement(se,this.props)}}]),n}(a.a.Component),Ee={logout:function(){return function(){var e=Object(w.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.deleteAuth();case 2:0===e.sent.data.resultCode&&t(pe(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},_e=Object(E.b)((function(e){return{isAuth:he(e),login:be(e)}}),Ee)(ve),Oe=n(134),we=n(135),je=n(78),Pe=n(30),Se=n(58),ke=n.n(Se),Ce=n(73),ye=n.n(Ce),Ne=Object(we.a)({form:"login"})((function(e){return a.a.createElement("form",{className:ye.a.formInner,onSubmit:e.handleSubmit},a.a.createElement("div",null,a.a.createElement(Oe.a,{placeholder:"Login",name:"email",component:Pe.a,validate:[je.b]})),a.a.createElement("div",null,a.a.createElement(Oe.a,{placeholder:"password",name:"password",component:Pe.a,type:"password",validate:[je.b]})),a.a.createElement("div",null,a.a.createElement(Oe.a,{component:Pe.a,name:"rememberMe",type:"checkbox"}),"remember me"),e.error&&a.a.createElement("div",{className:ke.a.formCommonError},e.error),a.a.createElement("div",null,a.a.createElement("button",null,"Sign in")))})),xe=function(e){return e.isAuth?a.a.createElement(g.a,{to:"/profile"}):a.a.createElement("div",{className:ye.a.form},a.a.createElement("h1",{className:ye.a.formTitle},"Social network"),a.a.createElement(Ne,{onSubmit:function(t){e.login(t)}}))},Ie={login:function(e){return function(){var t=Object(w.a)(O.a.mark((function t(n){var r,a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.a.postAuth(e);case 2:0===(r=t.sent).data.resultCode?n(de()):(a=r.data.messages.length>0?r.data.messages[0]:"Some error",n(Object(le.a)("login",{_error:a})));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},Ue=Object(E.b)((function(e){return{isAuth:he(e),login:be(e)}}),Ie)(xe),Te={initialized:!1},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"social-network/app/INITIALIZED_SUCCSESS":return Object(P.a)(Object(P.a)({},e),{},{initialized:!0});default:return e}},Fe=function(e){return e.app.initialized},Le=function(e){return function(t){return a.a.createElement(a.a.Suspense,{fallback:a.a.createElement(Y.a,null)},a.a.createElement(e,t))}},ze=n(100),Me=n(49),He=n(38),De=n.n(He),Ge=Object(we.a)({form:"profileInfo"})((function(e){var t=e.handleSubmit,n=e.changeSaved;return a.a.createElement("form",{className:De.a.form,onSubmit:t},a.a.createElement("div",{className:De.a.item},a.a.createElement("strong",null,"fullName: "),a.a.createElement(Oe.a,{name:"fullName",placeholder:"",component:Pe.a,validate:[]})),a.a.createElement("div",{className:De.a.item},a.a.createElement("strong",null,"AboutMe: "),a.a.createElement(Oe.a,{name:"aboutMe",placeholder:"",component:Pe.a,validate:[]})),a.a.createElement("div",{className:De.a.item},a.a.createElement("strong",null,"lookingForAJob: "),a.a.createElement(Oe.a,{name:"lookingForAJob",placeholder:"",component:Pe.a,validate:[],type:"checkbox"})),a.a.createElement("div",{className:De.a.item},a.a.createElement("strong",null,"My profecional skills: "),a.a.createElement(Oe.a,{name:"lookingForAJobDescription",placeholder:"",component:Pe.b,validate:[],type:"text"})),a.a.createElement("div",{className:De.a.item},a.a.createElement("button",{onClick:n},"Save change")))})),Re=function(e){var t=Object(r.useState)(!1),n=Object(D.a)(t,2),o=n[0],c=n[1];return a.a.createElement("div",null,o&&a.a.createElement("div",null,"Change saved!"),a.a.createElement(Ge,{initialValues:e.profile,onSubmit:function(t){e.saveProfileInfo(t)},changeSaved:function(){c(!0)}}))},Be=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return null==this.props.profile?a.a.createElement(g.a,{to:"/profile"}):a.a.createElement(Re,{profile:this.props.profile,saveProfileInfo:this.props.saveProfileInfo})}}]),n}(a.a.Component),We={saveProfileInfo:Me.f},Xe=Object(E.b)((function(e){return{profile:Object(ze.c)(e)}}),We)(Be),Je=a.a.lazy((function(){return n.e(4).then(n.bind(null,301))})),Ve=a.a.lazy((function(){return n.e(3).then(n.bind(null,300))})),Ye=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?a.a.createElement("div",null,a.a.createElement(_e,null),a.a.createElement("div",{className:"app-wrapper"},a.a.createElement(d,null),a.a.createElement("div",{className:"app-wrapper-content"},a.a.createElement(g.b,{path:"/profile/:userId?",render:Le(Ve)}),a.a.createElement(g.b,{path:"/dialogs",render:Le(Je)}),a.a.createElement(g.b,{path:"/news",component:h}),a.a.createElement(g.b,{path:"/music",component:b}),a.a.createElement(g.b,{path:"/users",render:Le(oe)}),a.a.createElement(g.b,{path:"/settings",component:v}),a.a.createElement(g.b,{path:"/login",render:function(){return a.a.createElement(Ue,null)}}),a.a.createElement(g.b,{path:"/edit",render:function(){return a.a.createElement(Xe,null)}})))):a.a.createElement(Y.a,null)}}]),n}(a.a.Component),qe={initializeApp:function(){return function(){var e=Object(w.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(de());case 2:e.sent,t({type:"social-network/app/INITIALIZED_SUCCSESS"});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},Ze=Object(Z.d)(Object(E.b)((function(e){return{initialized:Fe(e)}}),qe),g.f)(Ye),Ke=n(133),$e={},Qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$e;return e},et=n(140),tt=n(136),nt=Object(Z.c)({profilePage:Me.b,dialogsPage:Ke.a,sidebar:Qe,usersPage:z,authPage:ge,form:tt.a,app:Ae}),rt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Z.d,at=Object(Z.e)(nt,rt(Object(Z.a)(et.a)));c.a.render(a.a.createElement(p.a,null,a.a.createElement(E.a,{store:at},a.a.createElement(Ze,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},30:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return l}));var r=n(75),a=n(0),o=n.n(a),c=n(58),i=n.n(c),u=function(e){var t=e.meta,n=(e.input,e.child,Object(r.a)(e,["meta","input","child"])),a=t.error&&t.touched;return o.a.createElement("div",{className:i.a.formControl+" "+(a?i.a.error:"")},o.a.createElement("div",null,n.children),a&&o.a.createElement("span",null,t.error))},s=function(e){e.meta;var t=e.input,n=(e.child,Object(r.a)(e,["meta","input","child"]));return o.a.createElement(u,e,o.a.createElement("textarea",Object.assign({},t,n)))},l=function(e){e.meta;var t=e.input,n=(e.child,Object(r.a)(e,["meta","input","child"]));return o.a.createElement(u,e,o.a.createElement("input",Object.assign({},t,n)))}},38:function(e,t,n){e.exports={form:"ProfileDataForm_form__Noc2H",item:"ProfileDataForm_item__3rNy4"}},42:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(138),c=n.n(o);t.a=function(){return a.a.createElement("div",null,a.a.createElement("img",{src:c.a}))}},48:function(e,t,n){e.exports={selectPage:"Paginator_selectPage__dIHwE",paginator:"Paginator_paginator__27I-8",inner:"Paginator_inner__3qg7G",button_left:"Paginator_button_left__1jI50",button_right:"Paginator_button_right__3bMyZ"}},49:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"d",(function(){return h})),n.d(t,"c",(function(){return b})),n.d(t,"g",(function(){return v})),n.d(t,"e",(function(){return E})),n.d(t,"f",(function(){return _}));var r=n(4),a=n.n(r),o=n(10),c=n(47),i=n(5),u=n(14),s="social-network/profile/ADD_POST",l="social-network/profile/SET_USER_PROFILE",f="social-network/profile/SET_USER_STATUS",m="social-network/profile/SAVE_PHOTO_SUCSESS",p={posts:[{id:"1",message:"Hi, how are you?",likesCount:"15"},{id:"2",message:"It`s my first post",likesCount:"10"}],profile:null,status:""},d=function(e){return{type:s,newPostText:e}},g=function(e){return{type:f,status:e}},h=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.getUserProfile(e);case 2:r=t.sent,n({type:l,profile:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.getStatust(e);case 2:r=t.sent,n(g(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(g(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.dispachPhoto(e);case 2:0===(r=t.sent).resultCode&&n((a=r.data.photos,{type:m,photos:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n,r){var o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.dispachProfileInfo(e);case 2:o=t.sent,console.log(o),0===o.resultCode&&n(h(r().auth.id));case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(c.a)(e.posts),[{id:"3",message:t.newPostText,likesCount:"0"}])});case l:return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case f:return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case m:return Object(i.a)(Object(i.a)({},e),{},{profile:Object(i.a)(Object(i.a)({},e.profile),{},{photos:t.photos})});default:return e}}},57:function(e,t,n){e.exports={user_photo:"Users_user_photo__1Wt85",inner:"Users_inner__3wm2d",item:"Users_item__mrLBS"}},58:function(e,t,n){e.exports={formControl:"FormsControl_formControl__2Ce7c",error:"FormsControl_error__3yPMF",formCommonError:"FormsControl_formCommonError__1t9Bs"}},73:function(e,t,n){e.exports={form:"Login_form__XfNtz",formTitle:"Login_formTitle__DC42s",formInner:"Login_formInner__1Dui-"}},78:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},99:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n(26),a=n(27),o=n(29),c=n(28),i=n(0),u=n.n(i),s=n(13),l=n(11),f=function(e){return{isAuth:e.authPage.isAuth}},m=function(e){var t=function(t){Object(o.a)(i,t);var n=Object(c.a)(i);function i(){return Object(r.a)(this,i),n.apply(this,arguments)}return Object(a.a)(i,[{key:"render",value:function(){return this.props.isAuth?u.a.createElement(e,this.props):u.a.createElement(l.a,{to:"/login"})}}]),i}(u.a.Component);return Object(s.b)(f)(t)}}},[[166,1,2]]]);
//# sourceMappingURL=main.35f8e184.chunk.js.map