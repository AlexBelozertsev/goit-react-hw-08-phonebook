(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{22:function(t,e,n){t.exports={container:"UserMenu_container__3OyKB",userContainer:"UserMenu_userContainer__2PYHM",avatar:"UserMenu_avatar__2O6vl",name:"UserMenu_name__3zP-r"}},29:function(t,e,n){},37:function(t,e,n){"use strict";n.d(e,"c",(function(){return y})),n.d(e,"d",(function(){return U})),n.d(e,"b",(function(){return T})),n.d(e,"a",(function(){return k}));var r,c,a=n(7),u=n.n(a),o=n(17),s=n(14),i=n.n(s),b=n(2),l=Object(b.b)("contact/getContactsRequest"),j=Object(b.b)("contact/getContactsSuccess"),f=Object(b.b)("contact/getContactsError"),O=Object(b.b)("contact/addContactRequest"),d=Object(b.b)("contact/addContactSuccess"),p=Object(b.b)("contact/addContactError"),h=Object(b.b)("contact/deleteContactRequest"),g=Object(b.b)("contact/deleteContactSuccess"),v=Object(b.b)("contact/deleteContactError"),m=Object(b.b)("contact/editContactRequest"),x=Object(b.b)("contact/editContactSuccess"),C=Object(b.b)("contact/editContactError"),k=Object(b.b)("contact/changeFilter"),y={getContacts:function(){return function(){var t=Object(o.a)(u.a.mark((function t(e){var n,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(l()),t.prev=1,t.next=4,i.a.get("/contacts");case 4:n=t.sent,r=n.data,e(j(r)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(f(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},addContact:function(t){var e=t.name,n=t.number;return function(){var t=Object(o.a)(u.a.mark((function t(r){var c,a,o;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c={name:e,number:n},r(O()),t.prev=2,t.next=5,i.a.post("/contacts",c);case 5:a=t.sent,o=a.data,r(d(o)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),r(p(t.t0.message));case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}()},deleteContact:function(t){return function(){var e=Object(o.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(h()),e.prev=1,e.next=4,i.a.delete("/contacts/".concat(t));case 4:n(g(t)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n(v(e.t0));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()},editContact:function(t){var e=t.id,n=t.contact;return function(){var t=Object(o.a)(u.a.mark((function t(r){var c,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(m()),t.prev=1,t.next=4,i.a.patch("/contacts/".concat(e),n);case 4:c=t.sent,a=c.data,r(x(a)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),r(C(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}},S=n(24),E=function(t){return t.contacts.items},w=function(t){return t.contacts.filter},A=Object(S.a)([E,w],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),U={getAllContacts:E,getVisibleContacts:function(t){var e=w(t);return A(t).length?e:""},getFilteredContact:function(t){var e=E(t),n=A(t);return n.length?n:e},getContactsNames:function(t){return E(t).reduce((function(t,e){return t.push(e.name.toLowerCase()),t}),[])},getContactsNumbers:function(t){return E(t).reduce((function(t,e){return t.push(e.number),t}),[])}},R=n(3),N=n(25),_=n(6),q=Object(b.c)([],(r={},Object(R.a)(r,j,(function(t,e){return e.payload})),Object(R.a)(r,d,(function(t,e){var n=e.payload;return[].concat(Object(N.a)(t),[n])})),Object(R.a)(r,g,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),Object(R.a)(r,x,(function(t,e){var n=e.payload;return t.map((function(t){return t.id===n.id?n:t}))})),r)),L=Object(b.c)(!1,(c={},Object(R.a)(c,l,(function(){return!0})),Object(R.a)(c,j,(function(){return!1})),Object(R.a)(c,f,(function(){return!1})),Object(R.a)(c,O,(function(){return!0})),Object(R.a)(c,d,(function(){return!1})),Object(R.a)(c,p,(function(){return!1})),Object(R.a)(c,h,(function(){return!0})),Object(R.a)(c,g,(function(){return!1})),Object(R.a)(c,v,(function(){return!1})),Object(R.a)(c,m,(function(){return!0})),Object(R.a)(c,x,(function(){return!1})),Object(R.a)(c,C,(function(){return!1})),c)),I=Object(b.c)("",Object(R.a)({},k,(function(t,e){return e.payload}))),M=Object(b.c)(null,{}),T=Object(_.c)({items:q,filter:I,loading:L,error:M})},38:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n(0);var r=n(52),c=n.n(r),a=n(1),u=function(t){var e=t.type,n=t.text,r=t.onClick;return Object(a.jsxs)("button",{type:e,className:c.a.button,onClick:r,children:[" ",n," "]})};u.defaultProps={onClick:null};var o=u},52:function(t,e,n){t.exports={button:"Button_button__3fBtn",buttonForm:"Button_buttonForm__2Y-6a"}},8:function(t,e,n){"use strict";n.d(e,"a",(function(){return C})),n.d(e,"c",(function(){return k})),n.d(e,"b",(function(){return _}));var r=n(7),c=n.n(r),a=n(17),u=n(14),o=n.n(u),s=n(2),i=Object(s.b)("auth/registerRequest"),b=Object(s.b)("auth/registerSuccess"),l=Object(s.b)("auth/registerError"),j=Object(s.b)("auth/loginRequest"),f=Object(s.b)("auth/loginSuccess"),O=Object(s.b)("auth/loginError"),d={registerRequest:i,registerSuccess:b,registerError:l,logoutRequest:Object(s.b)("auth/logoutRequest"),logoutSuccess:Object(s.b)("auth/logoutSuccess"),logoutError:Object(s.b)("auth/logoutError"),loginRequest:j,loginSuccess:f,loginError:O,getCurrentUserRequest:Object(s.b)("auth/getCurrentUserRequest"),getCurrentUserSuccess:Object(s.b)("auth/getCurrentUserSuccess"),getCurrentUserError:Object(s.b)("auth/getCurrentUserError")};o.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com";var p,h,g,v,m=function(t){o.a.defaults.headers.common.Authorization="Bearer ".concat(t)},x=function(){o.a.defaults.headers.common.Authorization=""},C={register:function(t){return function(){var e=Object(a.a)(c.a.mark((function e(n){var r,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(d.registerRequest()),e.prev=1,e.next=4,o.a.post("/users/signup",t);case 4:r=e.sent,a=r.data,m(a.token),n(d.registerSuccess(a)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),n(d.registerError(e.t0.message));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()},logOut:function(){return function(){var t=Object(a.a)(c.a.mark((function t(e){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(d.logoutRequest()),t.prev=1,t.next=4,o.a.post("/users/logout");case 4:x(),e(d.logoutSuccess()),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(d.logoutError(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},logIn:function(t){return function(){var e=Object(a.a)(c.a.mark((function e(n){var r,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(d.loginRequest()),e.prev=1,e.next=4,o.a.post("/users/login",t);case 4:r=e.sent,a=r.data,m(a.token),n(d.loginSuccess(a)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),n(d.loginError(e.t0.message));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()},getCurrentUser:function(){return function(){var t=Object(a.a)(c.a.mark((function t(e,n){var r,a,u,s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n(),a=r.auth.token){t.next=3;break}return t.abrupt("return");case 3:return m(a),e(d.getCurrentUserRequest()),t.prev=5,t.next=8,o.a.get("/users/current");case 8:u=t.sent,s=u.data,e(d.getCurrentUserSuccess(s)),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(5),e(d.getCurrentUserError(t.t0.message));case 16:case"end":return t.stop()}}),t,null,[[5,13]])})));return function(e,n){return t.apply(this,arguments)}}()}},k={getIsAuthenticated:function(t){return t.auth.isAuthenticated},getUsername:function(t){return t.auth.user.name},getUserEmail:function(t){return t.auth.user.email}},y=n(3),S=n(6),E={name:null,email:null},w=function(t,e){return e.payload},A=Object(s.c)(E,(p={},Object(y.a)(p,d.registerSuccess,(function(t,e){return e.payload.user})),Object(y.a)(p,d.loginSuccess,(function(t,e){return e.payload.user})),Object(y.a)(p,d.logoutSuccess,(function(){return E})),Object(y.a)(p,d.getCurrentUserSuccess,(function(t,e){return e.payload})),p)),U=Object(s.c)(null,(h={},Object(y.a)(h,d.registerSuccess,(function(t,e){return e.payload.token})),Object(y.a)(h,d.loginSuccess,(function(t,e){return e.payload.token})),Object(y.a)(h,d.logoutSuccess,(function(){return null})),h)),R=Object(s.c)(null,(g={},Object(y.a)(g,d.registerError,(function(t,e){e.payload;alert("E-MAIL already taken or your PASSWORD is too short")})),Object(y.a)(g,d.loginError,(function(t,e){e.payload;alert("E-MAIL or PASSWORD is incorrect")})),Object(y.a)(g,d.logoutError,w),Object(y.a)(g,d.getCurrentUserError,w),g)),N=Object(s.c)(!1,(v={},Object(y.a)(v,d.registerSuccess,(function(){return!0})),Object(y.a)(v,d.loginSuccess,(function(){return!0})),Object(y.a)(v,d.logoutSuccess,(function(){return!1})),Object(y.a)(v,d.getCurrentUserRequest,(function(){return!0})),Object(y.a)(v,d.getCurrentUserSuccess,(function(){return!0})),Object(y.a)(v,d.registerError,(function(){return!1})),Object(y.a)(v,d.loginError,(function(){return!1})),Object(y.a)(v,d.getCurrentUserError,(function(){return!1})),v)),_=Object(S.c)({user:A,isAuthenticated:N,token:U,error:R})},85:function(t,e,n){},90:function(t,e,n){},91:function(t,e,n){},92:function(t,e,n){},93:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),a=n(23),u=n.n(a),o=n(9),s=n(50),i=n(16),b=n(25),l=n(2),j=n(6),f=n(18),O=n(51),d=n.n(O),p=n(8),h=n(37),g=[].concat(Object(b.a)(Object(l.d)({serializableCheck:{ignoredActions:[f.a,f.f,f.b,f.c,f.d,f.e]}})),[function(t){return function(t){return function(e){t(e)}}}]),v={key:"auth",storage:d.a,whitelist:["token"]},m=Object(l.a)({reducer:Object(j.c)({auth:Object(f.g)(v,p.b),contacts:h.b}),middleware:g,devTools:!1}),x={store:m,persistStor:Object(f.h)(m)},C=(n(84),n(85),n(33)),k=n(34),y=n(36),S=n(35),E=n(5),w=(n(29),n(1)),A=Object(o.b)((function(t){return{isAuthenticated:p.c.getIsAuthenticated(t)}}))((function(t){var e=t.isAuthenticated;return Object(w.jsxs)("nav",{children:[Object(w.jsx)(i.b,{to:"/",exact:!0,className:"link",activeClassName:"activeLink",children:"Home"}),e&&Object(w.jsx)(i.b,{to:"/contacts",exact:!0,className:"link",activeClassName:"activeLink",children:"Contacts"})]})})),U=n.p+"static/media/defaultAvatar.4aaad0ed.png",R=n(22),N=n.n(R),_=n(38),q={onLogout:p.a.logOut},L=Object(o.b)((function(t){return{userEmail:p.c.getUserEmail(t),avatar:U}}),q)((function(t){var e=t.avatar,n=t.userEmail,r=t.onLogout;return Object(w.jsxs)("div",{className:N.a.container,children:[Object(w.jsxs)("div",{className:N.a.userContainer,children:[Object(w.jsx)("img",{src:e,alt:"avatar",width:"32",className:N.a.avatar}),Object(w.jsx)("span",{className:N.a.name,children:n})]}),Object(w.jsx)(_.a,{type:"button",text:"Logout",onClick:r})]})})),I=function(){return Object(w.jsxs)("div",{children:[Object(w.jsx)(i.b,{to:"/register",exact:!0,className:"link",activeClassName:"activeLink",children:"Signup"}),Object(w.jsx)(i.b,{to:"/login",exact:!0,className:"link",activeClassName:"activeLink",children:"Login"})]})},M=Object(o.b)((function(t){return{isAuthenticated:p.c.getIsAuthenticated(t)}}))((function(t){var e=t.isAuthenticated;return Object(w.jsxs)("header",{className:"AppBar",children:[Object(w.jsx)(A,{}),e?Object(w.jsx)(L,{}):Object(w.jsx)(I,{})]})})),T=(n(90),function(){return Object(w.jsx)("footer",{className:"Footer",children:Object(w.jsx)("p",{children:"\xa9 GoIT. React hw-08. 2021"})})}),z=(n(91),function(t){var e=t.children;return Object(w.jsx)("div",{className:"Container",children:e})}),B=(n(92),function(t){var e=t.children;return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)("div",{className:"content",children:[Object(w.jsx)(M,{}),Object(w.jsx)(z,{children:e})]}),Object(w.jsx)(T,{})]})}),F=n(19),P=n(26),D=Object(o.b)((function(t){return{isAuthenticated:p.c.getIsAuthenticated(t)}}))((function(t){var e=t.component,n=t.isAuthenticated,r=t.redirectTo,c=Object(P.a)(t,["component","isAuthenticated","redirectTo"]);return Object(w.jsx)(E.b,Object(F.a)(Object(F.a)({},c),{},{render:function(t){return n?Object(w.jsx)(e,Object(F.a)({},t)):Object(w.jsx)(E.a,{to:r})}}))})),G=Object(o.b)((function(t){return{isAuthenticated:p.c.getIsAuthenticated(t)}}))((function(t){var e=t.component,n=t.isAuthenticated,r=t.redirectTo,c=Object(P.a)(t,["component","isAuthenticated","redirectTo"]);return Object(w.jsx)(E.b,Object(F.a)(Object(F.a)({},c),{},{render:function(t){return n&&c.restricted?Object(w.jsx)(E.a,{to:r}):Object(w.jsx)(e,Object(F.a)({},t))}}))})),H=Object(r.lazy)((function(){return n.e(6).then(n.bind(null,109))})),J=Object(r.lazy)((function(){return n.e(3).then(n.bind(null,112))})),W=Object(r.lazy)((function(){return n.e(5).then(n.bind(null,110))})),Y=Object(r.lazy)((function(){return n.e(4).then(n.bind(null,111))})),K=function(t){Object(y.a)(n,t);var e=Object(S.a)(n);function n(){return Object(C.a)(this,n),e.apply(this,arguments)}return Object(k.a)(n,[{key:"componentDidMount",value:function(){this.props.onGetCurrentUser()}},{key:"render",value:function(){return Object(w.jsx)(B,{children:Object(w.jsx)(E.d,{children:Object(w.jsxs)(r.Suspense,{fallback:Object(w.jsx)("p",{children:"Load..."}),children:[Object(w.jsx)(G,{path:"/",exact:!0,component:H}),Object(w.jsx)(G,{path:"/register",restricted:!0,component:W,redirectTo:"/contacts"}),Object(w.jsx)(G,{path:"/login",restricted:!0,component:Y,redirectTo:"/contacts"}),Object(w.jsx)(D,{path:"/contacts",component:J,redirectTo:"/login"}),Object(w.jsx)(E.a,{to:"/"})]})})})}}]),n}(r.Component),V={onGetCurrentUser:p.a.getCurrentUser},Q=Object(o.b)(null,V)(K);u.a.render(Object(w.jsx)(c.a.StrictMode,{children:Object(w.jsx)(o.a,{store:x.store,children:Object(w.jsx)(s.a,{loading:null,persistor:x.persistStor,children:Object(w.jsx)(i.a,{children:Object(w.jsx)(Q,{})})})})}),document.getElementById("root"))}},[[93,1,2]]]);
//# sourceMappingURL=main.5220640f.chunk.js.map