/*! For license information please see 3.f65e4966.chunk.js.LICENSE.txt */
(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{303:function(e,t,a){e.exports={profile:"Profile_profile__Tl0bf",inner:"Profile_inner__3YQNQ",avatar:"Profile_avatar__33H1P",wrapper:"Profile_wrapper__3TEQ_",itemInner:"Profile_itemInner__2Dgea",name:"Profile_name__1ObWH",status:"Profile_status__3JRFd",contacts:"Profile_contacts__-fwET",contactsItem:"Profile_contactsItem__3CVXa",link:"Profile_link__1-Yo_",info:"Profile_info__teaQ1",wrapperInput:"Profile_wrapperInput__eociG",inputFile:"Profile_inputFile__gUTLQ",inputLabel:"Profile_inputLabel__1AWDA",wrapperBtn:"Profile_wrapperBtn__2oamb"}},304:function(e,t,a){e.exports={post:"MyPosts_post__2BU6s",posts:"MyPosts_posts__3qzdi",inner:"MyPosts_inner__r2hqX"}},305:function(e,t,a){e.exports={item:"Post_item__3-n6J",messages:"Post_messages__18KT8",title:"Post_title__2oXB_",likes:"Post_likes__3izvk",countLike:"Post_countLike__2ythp",ButtonLike:"Post_ButtonLike__wS1dW",colorLike:"Post_colorLike__2sanc"}},306:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)&&n.length){var i=s.apply(null,n);i&&e.push(i)}else if("object"===r)for(var l in n)a.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(n=function(){return s}.apply(t,[]))||(e.exports=n)}()},307:function(e,t,a){e.exports={form:"EditForm_form__3e5lV",btn:"EditForm_btn__193W-"}},308:function(e,t,a){"use strict";a.r(t);var n=a(24),s=a(25),r=a(27),i=a(26),l=a(0),o=a.n(l),c=a(39),u=a(44),m=a(303),p=a.n(m),f=function(e){var t=Object(l.useState)(!1),a=Object(c.a)(t,2),n=a[0],s=a[1],r=Object(l.useState)(e.status),i=Object(c.a)(r,2),u=i[0],m=i[1];return Object(l.useEffect)((function(){m(e.status)}),[e.status]),o.a.createElement("div",null,!n&&o.a.createElement("div",null,o.a.createElement("span",{onDoubleClick:function(){s(!0)}},u||"--")),n&&o.a.createElement("div",null,o.a.createElement("input",{autoFocus:!0,onBlur:function(){s(!1),e.updateStatus(u)},onChange:function(e){m(e.currentTarget.value)},value:u})))},d=function(e){return o.a.createElement("div",null,e.isOwner?o.a.createElement(f,e):o.a.createElement("span",null,e.status||"--"))},_=a(59),E=a.n(_),v=a(49),b=a(304),h=a.n(b),k=a(305),P=a.n(k),O=a(144),N=a(306),j=a.n(N),g=function(e){var t=Object(l.useState)(e.likePost),a=Object(c.a)(t,2),n=a[0],s=a[1];return Object(l.useEffect)((function(){s(e.likePost)}),[e.likePost]),o.a.createElement("div",{className:P.a.item},o.a.createElement("div",{className:P.a.title},o.a.createElement(O.a,null)),o.a.createElement("div",{className:P.a.messages},e.message),o.a.createElement("div",{className:P.a.likes},o.a.createElement("button",{className:j()(P.a.ButtonLike,n?P.a.colorLike:""),onClick:function(){s(!n),e.likeDislike(e.postId,n)}},o.a.createElement("i",{className:"far fa-heart"}),o.a.createElement("span",{className:P.a.countLike},e.likeCounts))))},w=a(141),y=a(142),S=a(86),I=a(109),L=a(28),x=a(307),B=a.n(x),C=Object(y.a)()((function(e){return o.a.createElement("form",{className:B.a.form,onSubmit:e.handleSubmit},o.a.createElement("div",{className:B.a.formInner},o.a.createElement(w.a,{placeholder:"Enter new text....",name:e.identifierText,component:L.b,validate:[S.b]})),o.a.createElement("div",{className:B.a.btn},o.a.createElement(I.a,{textBtn:"Add post",type:"submit"})))})),F=function(e){Object(r.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.props.posts.map((function(t){return o.a.createElement(g,{key:t.id,postId:t.id,message:t.message,likeCounts:t.likesCount,likePost:t.isLikes,likeDislike:e.props.likeDislikeSucsess})}));return o.a.createElement("div",{className:h.a.inner},o.a.createElement("div",{className:h.a.form},o.a.createElement(C,{form:"addPost",onSubmit:function(t){e.props.addPost(t.newPostText)},identifierText:"newPostText"})),o.a.createElement("div",{className:h.a.posts},t))}}]),a}(o.a.PureComponent),D=a(14),T=a(69),A={addPost:v.a,likeDislikeSucsess:v.e},M=Object(D.b)((function(e){return{posts:Object(T.b)(e)}}),A)(F),U=function(e){var t=e.profile,a=e.status,n=e.updateStatus,s=e.isOwner;return o.a.createElement("div",{className:p.a.info},o.a.createElement("h3",{className:p.a.name},t.fullName),o.a.createElement("div",{className:p.a.status},o.a.createElement(d,{status:a,updateStatus:n,isOwner:s})),o.a.createElement("div",null,"About: ",t.aboutMe),o.a.createElement("div",null,"LookingForAJob: ",t.lookingForAJob?"yes":"no"),o.a.createElement("div",null,"My profecional skills: ",t.lookingForAJobDescription),o.a.createElement("div",{className:p.a.contacts},Object.keys(t.contacts).map((function(e){return o.a.createElement(z,{key:e,contactKey:e,contactValue:t.contacts[e]})}))))},J=function(e){return o.a.createElement("div",{className:p.a.wrapperInput},o.a.createElement("i",{className:"fas fa-download"}),o.a.createElement("input",{className:p.a.inputFile,onChange:e.onMainPhotoSelected,id:"file",name:"file",type:"file"}),o.a.createElement("label",{className:p.a.inputLabel,htmlFor:"file"},"Choose file"))},z=function(e){var t=e.contactKey,a=e.contactValue;return o.a.createElement("div",{className:p.a.contactsItem},o.a.createElement("label",null,t,": "),o.a.createElement("a",{className:p.a.link,href:a,target:"_blank"},a))},Q=function(e){var t=Object(l.useState)(!1),a=Object(c.a)(t,2);a[0],a[1];return e.profile?o.a.createElement("div",{className:p.a.profile},o.a.createElement("div",{className:p.a.inner},o.a.createElement("div",{className:p.a.item},o.a.createElement("div",{className:p.a.wrapper},o.a.createElement("img",{className:p.a.avatar,src:e.profile.photos.large||E.a,alt:""}),o.a.createElement("div",{className:p.a.loadPhoto},e.isOwner&&o.a.createElement(J,{onMainPhotoSelected:function(t){t.target.files.length&&e.savePhoto(t.target.files[0])}}))),e.isOwner&&o.a.createElement("div",{className:p.a.wrapperBtn},o.a.createElement(I.a,{textBtn:"Edit mode",link:"/edit"}))),o.a.createElement("div",{className:p.a.item},o.a.createElement("div",{className:p.a.itemInner},o.a.createElement("div",{className:p.a.wrapper},o.a.createElement(U,{profile:e.profile,status:e.status,updateStatus:e.updateStatus,isOwner:e.isOwner})),o.a.createElement("div",null,e.isOwner&&o.a.createElement(M,null)))))):o.a.createElement(u.a,null)},V=a(13),W=a(35),K=a(8),X=function(e){Object(r.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"checkProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.autorizedUserId),this.props.getUser(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.checkProfile()}},{key:"componentDidUpdate",value:function(e,t){this.props.match.params.userId!=e.match.params.userId&&this.checkProfile()}},{key:"render",value:function(){var e=!this.props.match.params.userId||this.props.match.params.userId==this.props.autorizedUserId;return o.a.createElement(Q,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,isOwner:e,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),a}(o.a.Component),q={getUser:v.d,getStatus:v.c,updateStatus:v.h,savePhoto:v.f};t.default=Object(K.d)(Object(D.b)((function(e){return{profile:Object(T.c)(e),status:Object(T.d)(e),autorizedUserId:Object(T.a)(e)}}),q),V.h,W.a)(X)}}]);
//# sourceMappingURL=3.f65e4966.chunk.js.map