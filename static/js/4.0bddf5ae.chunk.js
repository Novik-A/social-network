(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{189:function(t,e,r){t.exports={formControl:"FormsControls_formControl__2Nv7S",error:"FormsControls_error__2VzmY",formSummaryError:"FormsControls_formSummaryError__aOmkg"}},190:function(t,e,r){"use strict";r.d(e,"b",(function(){return c})),r.d(e,"a",(function(){return u}));var s=r(2),n=r(188),o=(r(0),r(189)),i=r.n(o),a=r(1),c=function(t){var e=t.input,r=t.meta,o=Object(n.a)(t,["input","meta"]),c=r.touched&&r.error;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:i.a.formControl+" "+(c?i.a.error:""),children:[Object(a.jsx)("div",{children:Object(a.jsx)("textarea",Object(s.a)(Object(s.a)({},e),o))}),c&&Object(a.jsx)("span",{children:r.error})]})})},u=function(t){var e=t.input,r=t.meta,o=Object(n.a)(t,["input","meta"]),c=r.touched&&r.error;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:i.a.formControl+" "+(c?i.a.error:""),children:[Object(a.jsx)("div",{children:Object(a.jsx)("input",Object(s.a)(Object(s.a)({},e),o))}),c&&Object(a.jsx)("span",{children:r.error})]})})}},191:function(t,e,r){"use strict";r.d(e,"b",(function(){return s})),r.d(e,"a",(function(){return n}));var s=function(t){if(!t)return"Field is required"},n=function(t){return function(e){if(e.length>t)return"Max length is ".concat(t," symbols")}}},199:function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));var s=r(2),n=r(188),o=(r(0),r(6)),i=r(17),a=r(1),c=function(t){return{isAuth:t.auth.isAuth}};function u(t){return Object(i.b)(c)((function(e){var r=e.isAuth,i=Object(n.a)(e,["isAuth"]);return r?Object(a.jsx)(t,Object(s.a)({},i)):Object(a.jsx)(o.a,{to:"/login"})}))}},200:function(t,e,r){"use strict";e.a=r.p+"static/media/avatar.68cdc451.png"},201:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var s=r(56);function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],s=!0,n=!1,o=void 0;try{for(var i,a=t[Symbol.iterator]();!(s=(i=a.next()).done)&&(r.push(i.value),!e||r.length!==e);s=!0);}catch(c){n=!0,o=c}finally{try{s||null==a.return||a.return()}finally{if(n)throw o}}return r}}(t,e)||Object(s.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},257:function(t,e,r){t.exports={bg:"ProfileInfo_bg__3-drJ",description:"ProfileInfo_description__3fgMY",mainPhoto:"ProfileInfo_mainPhoto__3M7De"}},258:function(t,e,r){t.exports={myPosts:"MyPosts_myPosts__3Mbj9",posts:"MyPosts_posts__3LCja"}},259:function(t,e,r){t.exports={post:"Post_post__1-VPp"}},266:function(t,e,r){"use strict";r.r(e);var s=r(31),n=r(32),o=r(41),i=r(40),a=r(0),c=r.n(a),u=r(257),j=r.n(u),f=r(50),l=r(200),p=r(201),d=r(1),b=function(t){var e=Object(a.useState)(!1),r=Object(p.a)(e,2),s=r[0],n=r[1],o=Object(a.useState)(t.status),i=Object(p.a)(o,2),c=i[0],u=i[1];Object(a.useEffect)((function(){u(t.status)}),[t.status]);return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{children:[!s&&Object(d.jsx)("div",{children:Object(d.jsx)("span",{onDoubleClick:function(){n(!0)},children:t.status||"==="})}),s&&Object(d.jsx)("div",{children:Object(d.jsx)("input",{autoFocus:!0,onChange:function(t){u(t.currentTarget.value)},onBlur:function(){n(!1),t.updateStatus(c)},value:c})})]})})},h=function(t){var e=t.isOwner,r=t.profile,s=t.status,n=t.updateStatus,o=t.savePhoto;if(!r)return Object(d.jsx)(f.a,{});return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:j.a.description,children:[Object(d.jsx)("img",{className:j.a.mainPhoto,src:r.photos.large||l.a,alt:"Avatar"}),e&&Object(d.jsx)("input",{type:"file",onChange:function(t){t.target.files.length&&o(t.target.files[0])}}),Object(d.jsx)(b,{status:s,updateStatus:n})]})})},m=r(55),O=r(258),v=r.n(O),x=r(259),g=r.n(x),P=function(t){return Object(d.jsxs)("div",{className:g.a.post,children:[Object(d.jsx)("img",{src:"https://image.freepik.com/free-vector/samurai-esports-logo-for-your-team_116205-81.jpg",alt:""}),t.message,Object(d.jsx)("div",{children:"likes ".concat(t.likes)})]})},y=r(265),_=r(264),S=r(191),k=r(190),w=c.a.memo((function(t){var e=t.posts.map((function(t){return Object(d.jsx)(P,{id:t.id,message:t.message,likes:t.likes})}));return Object(d.jsxs)("div",{className:v.a.myPosts,children:[Object(d.jsx)("h3",{children:"My posts"}),Object(d.jsx)(A,{onSubmit:function(e){t.addPost(e.newPostText)}}),Object(d.jsx)("div",{className:v.a.posts,children:e})]})})),C=Object(S.a)(20),A=Object(_.a)({form:"ProfileAddNewPostForm"})((function(t){return Object(d.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(d.jsx)("div",{children:Object(d.jsx)(y.a,{component:k.b,name:"newPostText",placeholder:"Post message",validate:[S.b,C]})}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{children:"Add post"})})]})})),I=r(17),F=Object(I.b)((function(t){return{posts:t.profilePage.posts}}),(function(t){return{addPost:function(e){t(Object(m.a)(e))}}}))(w),N=function(t){var e=t.isOwner,r=t.profile,s=t.status,n=t.updateStatus,o=t.savePhoto;return Object(d.jsxs)("div",{children:[Object(d.jsx)(h,{isOwner:e,profile:r,status:s,updateStatus:n,savePhoto:o}),Object(d.jsx)(F,{})]})},M=r(6),U=r(199),D=r(18),E=function(t){Object(o.a)(r,t);var e=Object(i.a)(r);function r(){return Object(s.a)(this,r),e.apply(this,arguments)}return Object(n.a)(r,[{key:"refreshProfile",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId.toString())||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(t,e,r){this.props.match.params.userId!==t.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(d.jsx)(N,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto})}}]),r}(c.a.Component);e.default=Object(D.compose)(Object(I.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.id,isAuth:t.auth.isAuth}}),{getUserProfile:m.c,getStatus:m.b,updateStatus:m.f,savePhoto:m.e}),M.g,U.a)(E)}}]);
//# sourceMappingURL=4.0bddf5ae.chunk.js.map