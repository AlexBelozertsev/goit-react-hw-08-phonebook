(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[3],{100:function(t,e,n){},101:function(t,e,n){},102:function(t,e,n){t.exports=n(104)},103:function(t,e,n){t.exports={contactsContainer:"Contacts_contactsContainer__1CMGX",contactsList:"Contacts_contactsList__3z-Y9",contactItem:"Contacts_contactItem__69VWE",actions:"Contacts_actions__RLl4u"}},104:function(t,e,n){"use strict";function a(t){return t&&"object"==typeof t&&"default"in t?t.default:t}var r=n(0),o=a(r),i=n(23);n(20);var u=a(n(105));function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}function l(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}function s(t){return requestAnimationFrame(t)}function f(t){cancelAnimationFrame(t)}function h(t){var e=t.ownerDocument;return e.hasFocus()&&e.activeElement===t}function d(t){return null==t?void 0:t.ownerDocument}function m(t){return r.useCallback((function(){var e=t.current,n="undefined"!=typeof window&&function(t){var e=function(t){var e;return null==(e=d(t))?void 0:e.defaultView}(t);return!!e&&t instanceof e.HTMLElement}(e);if(!e||!n)return null;if("INPUT"!==e.nodeName&&(e=e.querySelector("input")),!e)throw new Error("react-input-mask: inputComponent doesn't contain input node");return e}),[t])}function p(t,e){var n,a,o,i,u=r.useRef({start:null,end:null}),c=m(t),l=r.useCallback((function(){return function(t){var e=t.selectionStart,n=t.selectionEnd;return{start:e,end:n,length:n-e}}(c())}),[c]),d=r.useCallback((function(){return u.current}),[]),p=r.useCallback((function(t){var e=c();e&&h(e)&&(function(t,e,n){void 0===n&&(n=e),t.setSelectionRange(e,n)}(e,t.start,t.end),u.current=l())}),[c,l]),v=r.useCallback((function(){u.current=l()}),[l]),g=(n=v,a=r.useRef(null),o=r.useCallback((function(){null===a.current&&function t(){n(),a.current=s(t)}()}),[n]),i=r.useCallback((function(){f(a.current),a.current=null}),[]),r.useEffect((function(){a.current&&(i(),o())}),[o,i]),r.useEffect(f,[]),[o,i]),b=g[0],j=g[1];return r.useLayoutEffect((function(){if(e){var t=c();return t.addEventListener("focus",b),t.addEventListener("blur",j),h(t)&&b(),function(){t.removeEventListener("focus",b),t.removeEventListener("blur",j),j()}}})),{getSelection:l,getLastSelection:d,setSelection:p}}function v(t,e){var n=r.useRef(),a=p(n,e),o=a.getSelection,i=a.getLastSelection,u=a.setSelection,c=function(t,e){var n=m(t),a=r.useRef(e);return{getValue:r.useCallback((function(){return n().value}),[n]),getLastValue:r.useCallback((function(){return a.current}),[]),setValue:r.useCallback((function(t){a.current=t;var e=n();e&&(e.value=t)}),[n])}}(n,t),l=c.getValue,s=c.getLastValue,f=c.setValue;return{inputRef:n,getInputState:function(){return{value:l(),selection:o()}},getLastInputState:function(){return{value:s(),selection:i()}},setInputState:function(t){var e=t.value,n=t.selection;f(e),u(n)}}}n(106);var g=["disabled","onBlur","onChange","onFocus","onMouseDown","readOnly","value"],b={9:/[0-9]/,a:/[A-Za-z]/,"*":/[A-Za-z0-9]/},j=function(t){var e=this;this.isCharacterAllowedAtPosition=function(t,n){var a=e.maskOptions.maskPlaceholder;return!!e.isCharacterFillingPosition(t,n)||!!a&&a[n]===t},this.isCharacterFillingPosition=function(t,n){var a=e.maskOptions.mask;if(!t||n>=a.length)return!1;if(!e.isPositionEditable(n))return a[n]===t;var r=a[n];return new RegExp(r).test(t)},this.isPositionEditable=function(t){var n=e.maskOptions,a=n.mask,r=n.permanents;return t<a.length&&-1===r.indexOf(t)},this.isValueEmpty=function(t){return t.split("").every((function(t,n){return!e.isPositionEditable(n)||!e.isCharacterFillingPosition(t,n)}))},this.isValueFilled=function(t){return e.getFilledLength(t)===e.maskOptions.lastEditablePosition+1},this.getDefaultSelectionForValue=function(t){var n=e.getFilledLength(t),a=e.getRightEditablePosition(n);return{start:a,end:a}},this.getFilledLength=function(t){return function(t,e){for(var n=t.length-1;n>=0;n--)if(e(t[n],n))return n;return-1}(t.split(""),(function(t,n){return e.isPositionEditable(n)&&e.isCharacterFillingPosition(t,n)}))+1},this.getStringFillingLengthAtPosition=function(t,n){return t.split("").reduce((function(t,n){return e.insertCharacterAtPosition(t,n,t.length)}),function(t,e){void 0===e&&(e=1);for(var n="",a=0;a<e;a++)n+=" ";return n}(0,n)).length-n},this.getLeftEditablePosition=function(t){for(var n=t;n>=0;n--)if(e.isPositionEditable(n))return n;return null},this.getRightEditablePosition=function(t){for(var n=e.maskOptions.mask,a=t;a<n.length;a++)if(e.isPositionEditable(a))return a;return null},this.formatValue=function(t){var n=e.maskOptions,a=n.maskPlaceholder,r=n.mask;if(!a){for(t=e.insertStringAtPosition("",t,0);t.length<r.length&&!e.isPositionEditable(t.length);)t+=r[t.length];return t}return e.insertStringAtPosition(a,t,0)},this.clearRange=function(t,n,a){if(!a)return t;var r=n+a,o=e.maskOptions,i=o.maskPlaceholder,u=o.mask,c=t.split("").map((function(t,a){var o=e.isPositionEditable(a);return!i&&a>=r&&!o?"":a<n||a>=r?t:o?i?i[a]:"":u[a]})).join("");return e.formatValue(c)},this.insertCharacterAtPosition=function(t,n,a){var r=e.maskOptions,o=r.mask,i=r.maskPlaceholder;if(a>=o.length)return t;var u=e.isCharacterAllowedAtPosition(n,a),c=e.isPositionEditable(a),l=e.getRightEditablePosition(a),s=i&&l?n===i[l]:null,f=t.slice(0,a);return!u&&c||(t=f+(u?n:o[a])),u||c||s||(t=e.insertCharacterAtPosition(t,n,a+1)),t},this.insertStringAtPosition=function(t,n,a){var r=e.maskOptions,o=r.mask,i=r.maskPlaceholder;if(!n||a>=o.length)return t;var u=n.split(""),c=e.isValueFilled(t)||!!i,l=t.slice(a);return t=u.reduce((function(t,n){return e.insertCharacterAtPosition(t,n,t.length)}),t.slice(0,a)),c?t+=l.slice(t.length-a):e.isValueFilled(t)?t+=o.slice(t.length).join(""):t=l.split("").filter((function(t,n){return e.isPositionEditable(a+n)})).reduce((function(t,n){var a=e.getRightEditablePosition(t.length);return null===a?t:(e.isPositionEditable(t.length)||(t+=o.slice(t.length,a).join("")),e.insertCharacterAtPosition(t,n,t.length))}),t),t},this.processChange=function(t,n){var a=e.maskOptions,r=a.mask,o=a.prefix,i=a.lastEditablePosition,u=t.value,c=t.selection,l=n.value,s=n.selection,f=u,h="",d=0,m=0,p=Math.min(s.start,c.start);return c.end>s.start?(h=f.slice(s.start,c.end),m=(d=e.getStringFillingLengthAtPosition(h,p))?s.length:0):f.length<l.length&&(m=l.length-f.length),f=l,m&&(1!==m||s.length||(p=s.start===c.start?e.getRightEditablePosition(c.start):e.getLeftEditablePosition(c.start)),f=e.clearRange(f,p,m)),f=e.insertStringAtPosition(f,h,p),(p+=d)>=r.length?p=r.length:p<o.length&&!d?p=o.length:p>=o.length&&p<i&&d&&(p=e.getRightEditablePosition(p)),{value:f=e.formatValue(f),enteredString:h,selection:{start:p,end:p}}},this.maskOptions=function(t){var e=t.mask,n=t.maskPlaceholder,a=[];if(!e)return{maskPlaceholder:null,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};if("string"==typeof e){var r=!1,o="";e.split("").forEach((function(t){r||"\\"!==t?(!r&&b[t]||a.push(o.length),o+=t,r=!1):r=!0})),e=o.split("").map((function(t,e){return-1===a.indexOf(e)?b[t]:t}))}else e.forEach((function(t,e){"string"==typeof t&&a.push(e)}));n&&(n=1===n.length?e.map((function(t,e){return-1!==a.indexOf(e)?t:n})):n.split(""),a.forEach((function(t){n[t]=e[t]})),n=n.join(""));for(var i=a.filter((function(t,e){return t===e})).map((function(t){return e[t]})).join(""),u=e.length-1;-1!==a.indexOf(u);)u--;return{maskPlaceholder:n,prefix:i,mask:e,lastEditablePosition:u,permanents:a}}(t)},C=function(t){function e(){return t.apply(this,arguments)||this}return function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,function(t,e){for(var n=Object.getOwnPropertyNames(e),a=0;a<n.length;a++){var r=n[a],o=Object.getOwnPropertyDescriptor(e,r);o&&o.configurable&&void 0===t[r]&&Object.defineProperty(t,r,o)}}(t,e)}(e,t),e.prototype.render=function(){var t=this.props,e=t.children,n=l(t,["children"]);return o.cloneElement(e,n)},e}(o.Component),O=r.forwardRef((function(t,e){var n=t.alwaysShowMask,a=t.children,f=t.mask,p=t.maskPlaceholder,b=t.beforeMaskedStateChange,O=l(t,["alwaysShowMask","children","mask","maskPlaceholder","beforeMaskedStateChange"]);!function(t){var e=t.mask,n=t.maskPlaceholder;e&&n&&1!==n.length&&n.length!==e.length&&u(!1)}(t);var y,k,x=new j({mask:f,maskPlaceholder:p}),P=!!f,S=!O.disabled&&!O.readOnly,w=null!==t.value&&void 0!==t.value,E=(y=P,k=r.useRef(),r.useEffect((function(){k.current=y})),k.current),F=v(function(t){return""+t}((w?t.value:t.defaultValue)||""),P),V=F.inputRef,M=F.getInputState,L=F.setInputState,D=F.getLastInputState,A=m(V);if(P&&w){var N=A(),I=N&&h(N)||n||t.value?x.formatValue(t.value):t.value;b&&(I=b({nextState:{value:I,selection:{start:null,end:null}}}).value),L(c({},D(),{value:I}))}var R=D(),_=R.selection,T=R.value;r.useLayoutEffect((function(){if(P){var t=h(A()),e=_,a=M(),r=c({},a);if(!w){var o=a.value,i=x.formatValue(o),u=x.isValueEmpty(i);!u||t||n?r.value=i:u&&!t&&(r.value="")}t&&!E?r.selection=x.getDefaultSelectionForValue(r.value):w&&t&&e&&null!==e.start&&null!==e.end&&(r.selection=e),b&&(r=b({currentState:a,nextState:r})),L(r)}}));var B=c({},O,{onFocus:function(e){V.current=e.target;var n=M().value;if(P&&!x.isValueFilled(n)){var a=x.formatValue(n),r=x.getDefaultSelectionForValue(a),o={value:a,selection:r};b&&(a=(o=b({currentState:M(),nextState:o})).value,r=o.selection),L(o),a!==n&&t.onChange&&t.onChange(e),s((function(){L(D())}))}t.onFocus&&t.onFocus(e)},onBlur:function(e){var a=M().value,r=D().value;if(P&&!n&&x.isValueEmpty(r)){var o="",i={value:o,selection:{start:null,end:null}};b&&(o=(i=b({currentState:M(),nextState:i})).value),L(i),o!==a&&t.onChange&&t.onChange(e)}t.onBlur&&t.onBlur(e)},onChange:P&&S?function(e){var n=M(),a=D(),r=x.processChange(n,a);b&&(r=b({currentState:n,previousState:a,nextState:r})),L(r),t.onChange&&t.onChange(e)}:t.onChange,onMouseDown:P&&S?function(e){var n=A(),a=M().value,r=d(n);if(!h(n)&&!x.isValueFilled(a)){var o=e.clientX,i=e.clientY,u=(new Date).getTime();r.addEventListener("mouseup",(function t(e){if(r.removeEventListener("mouseup",t),h(n)){var a=Math.abs(e.clientX-o),l=Math.abs(e.clientY-i),s=Math.max(a,l),f=(new Date).getTime()-u;if(s<=10&&f<=200||s<=5&&f<=300){var d=D(),m=c({},d,{selection:x.getDefaultSelectionForValue(d.value)});L(m)}}}))}t.onMouseDown&&t.onMouseDown(e)}:t.onMouseDown,ref:function(t){V.current=i.findDOMNode(t),function(t){return"function"==typeof t}(e)?e(t):null!==e&&"object"==typeof e&&(e.current=t)},value:P&&w?T:t.value});return a?(function(t,e){g.filter((function(n){return null!=e.props[n]&&e.props[n]!==t[n]})).length&&u(!1)}(t,a),o.createElement(C,B,a)):o.createElement("input",B)}));O.displayName="InputMask",O.defaultProps={alwaysShowMask:!1,maskPlaceholder:"_"},t.exports=O},105:function(t,e,n){"use strict";t.exports=function(t,e,n,a,r,o,i,u){if(!t){var c;if(void 0===e)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,a,r,o,i,u],s=0;(c=new Error(e.replace(/%s/g,(function(){return l[s++]})))).name="Invariant Violation"}throw c.framesToPop=1,c}}},106:function(t,e,n){"use strict";var a=function(){};t.exports=a},107:function(t,e,n){},112:function(t,e,n){"use strict";n.r(e);var a,r=n(33),o=n(34),i=n(36),u=n(35),c=n(0),l=n(9),s=n(37),f=n(94),h=n(3),d=n(102),m=n.n(d),p=new Uint8Array(16);function v(){if(!a&&!(a="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(p)}var g=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var b=function(t){return"string"===typeof t&&g.test(t)},j=[],C=0;C<256;++C)j.push((C+256).toString(16).substr(1));var O=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(j[t[e+0]]+j[t[e+1]]+j[t[e+2]]+j[t[e+3]]+"-"+j[t[e+4]]+j[t[e+5]]+"-"+j[t[e+6]]+j[t[e+7]]+"-"+j[t[e+8]]+j[t[e+9]]+"-"+j[t[e+10]]+j[t[e+11]]+j[t[e+12]]+j[t[e+13]]+j[t[e+14]]+j[t[e+15]]).toLowerCase();if(!b(n))throw TypeError("Stringified UUID is invalid");return n};var y=function(t,e,n){var a=(t=t||{}).random||(t.rng||v)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,e){n=n||0;for(var r=0;r<16;++r)e[n+r]=a[r];return e}return O(a)},k=n(98),x=n(96),P=n(97),S=n(38),w=n(1),E=function(t){Object(i.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,r=n.value;t.setState(Object(h.a)({},a,r))},t.handleSubmit=function(e){e.preventDefault();var n=t.props,a=n.contacts,r=n.onSubmit,o=t.state,i=o.name,u=o.number;return a.filter((function(t){return i.toLowerCase()===t})).length?(alert("".concat(i," is already in contacts")),void t.reset()):i&&u?(r(t.state),void t.reset()):void alert("Please enter Name or phone number")},t.reset=function(){t.setState({name:"",number:""})},t.nameInputId=y(),t.phoneInputId=y(),t}return Object(o.a)(n,[{key:"render",value:function(){return Object(w.jsxs)(k.a,{onSubmit:this.handleSubmit,children:[Object(w.jsx)(x.a,{htmlFor:this.nameInputId,name:"Name:",children:Object(w.jsx)(P.a,{type:"text",name:"name",value:this.state.name,id:this.nameInputId,placeholder:"John Smith",onChange:this.handleChange})}),Object(w.jsx)(x.a,{htmlFor:this.phoneInputId,name:"Phone:",children:Object(w.jsx)(m.a,{mask:"+38 (099) 999-99-99",type:"tel",name:"number",value:this.state.number,id:this.phoneInputId,placeholder:"+38 (099) 999-99-99",onChange:this.handleChange})}),Object(w.jsx)(S.a,{type:"submit",text:"Add contact"})]})}}]),n}(c.Component);E.defaultProps={contacts:[]};var F=Object(l.b)((function(t){return{contactsName:s.d.getContactsNames(t)}}),(function(t){return{onSubmit:function(e){return t(s.c.addContact(e))}}}))(E),V=function(t){var e=t.value,n=t.onChange;return Object(w.jsx)(x.a,{name:"Find contact by name",children:Object(w.jsx)(P.a,{type:"text",name:"name",value:e,onChange:n})})};V.defaultProps={value:""};var M=Object(l.b)((function(t){return{value:s.d.getVisibleContacts(t)}}),(function(t){return{onChange:function(e){return t(Object(s.a)(e.target.value))}}}))(V),L=n(103),D=n.n(L),A=n(23),N=(n(107),document.querySelector("#modal-root")),I=function(t){Object(i.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).handleKeyDown=function(e){"Escape"===e.code&&t.props.onClose()},t.handleBackdropClick=function(e){e.currentTarget===e.target&&t.props.onClose()},t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(A.createPortal)(Object(w.jsx)("div",{className:"Modal__backdrop",onClick:this.handleBackdropClick,children:Object(w.jsx)("div",{className:"Modal__content",children:this.props.children})}),N)}}]),n}(c.Component),R=n(19),_=function(t){Object(i.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={id:"",name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,r=n.value;t.setState(Object(h.a)({},a,r))},t.handleSubmit=function(e){e.preventDefault();var n=t.props,a=n.contactsNames,r=n.contactsNumbers,o=n.onEditContact,i=t.state,u=i.id,c=i.name,l=i.number,s=a.filter((function(t){return c.toLowerCase()===t})),f=r.filter((function(t){return l===t}));if(!s.length||!f.length)return c&&l?(o(u,{name:c,number:l}),t.reset(),void t.props.onSave()):void alert("Please enter Name and phone Number");alert("\u0421ontact ".concat(c," has not been changed"))},t.reset=function(){t.setState({id:"",name:"",number:""})},t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.setState(Object(R.a)({},this.props.contact))}},{key:"render",value:function(){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(f.a,{text:"Edit your Contact"}),Object(w.jsxs)(k.a,{onSubmit:this.handleSubmit,children:[Object(w.jsx)(x.a,{name:"Name:",children:Object(w.jsx)(P.a,{type:"text",name:"name",value:this.state.name,placeholder:"John Smith",onChange:this.handleChange})}),Object(w.jsx)(x.a,{name:"Phone:",children:Object(w.jsx)(m.a,{mask:"+38 (099) 999-99-99",type:"tel",name:"number",value:this.state.number,placeholder:"+38 (099) 999-99-99",onChange:this.handleChange})}),Object(w.jsx)(S.a,{type:"submit",text:"Edit contact"})]})]})}}]),n}(c.Component);_.defaultProps={contacts:[]};var T=Object(l.b)((function(t){return{contactsNames:s.d.getContactsNames(t),contactsNumbers:s.d.getContactsNumbers(t)}}),(function(t){return{onEditContact:function(e,n){return t(s.c.editContact({id:e,contact:n}))}}}))(_),B=function(t){Object(i.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={showModal:!1},t.toggleModal=function(){t.setState((function(t){return{showModal:!t.showModal}}))},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this.state.showModal,e=this.props,n=e.id,a=e.name,r=e.number,o=e.onDeliteContact;return Object(w.jsxs)(w.Fragment,{children:[a,": ",r,Object(w.jsxs)("div",{className:D.a.actions,children:[Object(w.jsx)(S.a,{type:"button",text:"Edit",onClick:this.toggleModal}),Object(w.jsx)(S.a,{type:"button",text:"Delete",onClick:o})]}),t&&Object(w.jsx)(I,{onClose:this.toggleModal,children:Object(w.jsx)(T,{onSave:this.toggleModal,contact:{id:n,name:a,number:r}})})]})}}]),n}(c.Component),U=Object(l.b)((function(t){return{list:s.d.getFilteredContact(t)}}),(function(t){return{onDeliteContact:function(e){return t(s.c.deleteContact(e))}}}))((function(t){var e=t.list,n=t.onDeliteContact;return Object(w.jsx)("div",{className:D.a.contactsContainer,children:Object(w.jsx)("ul",{className:D.a.contactsList,children:e.length>0&&e.map((function(t){var e=t.id,a=t.name,r=t.number;return Object(w.jsx)("li",{className:D.a.contactItem,children:Object(w.jsx)(B,{id:e,name:a,number:r,onDeliteContact:function(){return n(e)}})},e)}))})})})),J=function(t){Object(i.a)(n,t);var e=Object(u.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.getContacts()}},{key:"render",value:function(){var t=this.props.contacts;return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(f.a,{text:"Add new Contact"}),Object(w.jsx)(F,{contacts:t}),t.length>0&&Object(w.jsx)(f.a,{text:"Your Contacts:"}),t.length>1&&Object(w.jsx)(M,{}),Object(w.jsx)(U,{})]})}}]),n}(c.Component);e.default=Object(l.b)((function(t){return{contacts:s.d.getAllContacts(t)}}),(function(t){return{getContacts:function(){return t(s.c.getContacts())}}}))(J)},94:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n(0),n(95);var a=n(1),r=function(t){var e=t.text;return Object(a.jsx)("h2",{className:"Title",children:e})}},95:function(t,e,n){},96:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n(0),n(100);var a=n(1),r=function(t){var e=t.htmlFor,n=t.name,r=t.children;return Object(a.jsxs)("label",{htmlFor:e,children:[n," ",r]})};r.defaultProps={htmlFor:null,name:null};var o=r},97:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n(0),n(101);var a=n(1),r=function(t){var e=t.type,n=t.name,r=t.value,o=t.id,i=t.placeholder,u=t.onChange;return Object(a.jsx)("input",{type:e,name:n,value:r,id:o,placeholder:i,onChange:u})};r.defaultProps={id:null,placeholder:null};var o=r},98:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));n(0);var a=n(99),r=n.n(a),o=n(1),i=function(t){var e=t.autoComplete,n=t.children,a=t.onSubmit;return Object(o.jsx)("form",{autoComplete:e,className:r.a.Form,onSubmit:a,children:n})};i.defaultProps={autoComplete:null};var u=i},99:function(t,e,n){t.exports={Form:"Form_Form__39O8e"}}}]);
//# sourceMappingURL=3.01ccee65.chunk.js.map