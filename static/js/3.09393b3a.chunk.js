(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{295:function(t,e,a){t.exports={intro:"ProfileInfo_intro__3q8pO",descriptionBlock:"ProfileInfo_descriptionBlock__3BsSQ"}},296:function(t,e,a){t.exports={postsBlock:"MyPosts_postsBlock__mBpXk",post:"MyPosts_post__1VWrW",posts:"MyPosts_posts__1JHv-"}},297:function(t,e,a){t.exports={item:"Post_item__UHDgP"}},298:function(t,e,a){"use strict";a.r(e);var n=a(27),s=a(28),r=a(30),o=a(29),u=a(0),c=a.n(u),l=a(97),i=a(130),p=a(131),m=a(74),f=a(65),d=a(296),b=a.n(d),E=a(297),v=a.n(E),h=function(t){return c.a.createElement("div",{className:v.a.item},c.a.createElement("img",{src:"https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/06/18/10/avatar.jpg"}),t.message,c.a.createElement("div",null,c.a.createElement("span",null,t.likeCounts," likes")))},g=Object(m.a)(15),j=Object(p.a)({form:"addPost"})((function(t){return c.a.createElement("form",{onSubmit:t.handleSubmit},c.a.createElement("div",null,c.a.createElement(i.a,{component:f.b,name:"newPostText",placeholder:"Enter new post text",validate:[m.b,g]})),c.a.createElement("div",null,c.a.createElement("button",null,"Add posts")))})),O=function(t){Object(r.a)(a,t);var e=Object(o.a)(a);function a(){return Object(n.a)(this,a),e.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var t=this,e=this.props.posts.map((function(t){return c.a.createElement(h,{message:t.message,likeCounts:t.likesCount})}));return c.a.createElement("div",{className:b.a.postsBlock},c.a.createElement("h3",null,"My posts"),c.a.createElement(j,{onSubmit:function(e){t.props.addPost(e.newPostText)}}),c.a.createElement("div",{className:b.a.posts},e))}}]),a}(c.a.PureComponent),k=a(12),_=function(t){return t.profilePage.profile},P=function(t){return t.profilePage.status},S=function(t){return t.authPage.userId},y=function(t){return t.profilePage.posts},B={addPost:l.a},C=Object(k.b)((function(t){return{posts:y(t)}}),B)(O),x=a(38),I=a(295),M=a.n(I),w=(c.a.Component,a(132)),U=function(t){var e=Object(u.useState)(!1),a=Object(w.a)(e,2),n=a[0],s=a[1],r=Object(u.useState)(t.status),o=Object(w.a)(r,2),l=o[0],i=o[1];return Object(u.useEffect)((function(){i(t.status)}),[t.status]),c.a.createElement("div",null,!n&&c.a.createElement("div",null,c.a.createElement("span",{onDoubleClick:function(){s(!0)}},l||"--")),n&&c.a.createElement("div",null,c.a.createElement("input",{autoFocus:!0,onBlur:function(){s(!1),t.updateStatus(l)},onChange:function(t){i(t.currentTarget.value)},value:l})))},N=function(t){return t.profile?c.a.createElement("div",null,c.a.createElement("div",{className:M.a.descriptionBlock},c.a.createElement("img",{src:t.profile.photos.large,alt:""}),c.a.createElement(U,{status:t.status,updateStatus:t.updateStatus}),c.a.createElement("div",null,"About: ",t.profile.aboutMe),c.a.createElement("div",null,"Contact: ",t.profile.contacts.vk))):c.a.createElement(x.a,null)},D=function(t){return c.a.createElement("div",null,c.a.createElement(N,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),c.a.createElement(C,null))},J=a(10),T=a(96),z=a(9),A=function(t){Object(r.a)(a,t);var e=Object(o.a)(a);function a(){return Object(n.a)(this,a),e.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.autorizedUserId),this.props.getUser(t),this.props.getStatus(t)}},{key:"render",value:function(){return c.a.createElement(D,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),a}(c.a.Component),H={getUser:l.d,getStatus:l.c,updateStatus:l.e};e.default=Object(z.d)(Object(k.b)((function(t){return{profile:_(t),status:P(t),autorizedUserId:S(t)}}),H),J.f,T.a)(A)}}]);
//# sourceMappingURL=3.09393b3a.chunk.js.map