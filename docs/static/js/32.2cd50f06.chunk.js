webpackJsonp([32],{1365:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function s(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return{basic:e.Basic.basic}}function l(e){return{firstTime:function(t){e({type:v.u,value:t})}}}Object.defineProperty(t,"__esModule",{value:!0});var c=n(0),u=n.n(c),p=(n(111),n(150)),f=n(88),m=n(496),d=n(1540),h=n(1550),y=n(1514),b=n(1532),g=n(2843),v=n(28),w=n(151),E=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),T=f.k.Content,k=f.k.Footer,P=function(e){function t(){var e,n,s,i;r(this,t);for(var l=arguments.length,c=Array(l),u=0;u<l;u++)c[u]=arguments[u];return n=s=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),s.state={password:"",reTypePassword:"",err:""},s.callback=function(e){200===e.status?(s.props.firstTime(e.data),s.setState({err:""}),s.props.history.push("/user/profile")):e.response&&console.log(e.response)},s.onFormSubmit=function(e){e.preventDefault();var t=s.state,n=t.password,a=t.reTypePassword,r=Object(w.b)();n===a?r?Object(g.a)(s.callback,s.props.basic._id,{password:n},r):console.log("Token is missing"):s.setState({err:"Password not matched"})},s.onInputChange=function(e){s.setState(a({},e.target.name,e.target.value))},i=n,o(s,i)}return s(t,e),E(t,[{key:"render",value:function(){return u.a.createElement(f.k,null,u.a.createElement(m.a,null),u.a.createElement(f.k,{style:{marginTop:64,height:"100vh"}},u.a.createElement(T,{className:"login"},u.a.createElement("div",{className:"login-box"},u.a.createElement(d.a,{heading:u.a.createElement("b",null,"Update Password")}),u.a.createElement(b.a,{onSubmitHandler:this.onFormSubmit},u.a.createElement(h.a,{type:"password",value:this.state.password,name:"password",prefixType:"lock",placeholder:"Enter New Password",onInputChange:this.onInputChange,isRequired:!0,labelName:"New Password"}),u.a.createElement(h.a,{type:"text",value:this.state.reTypePassword,name:"reTypePassword",prefixType:"lock",placeholder:"Retype Password",onInputChange:this.onInputChange,isRequired:!0,labelName:"Retype Password"}),this.state.err,u.a.createElement(y.a,{isType:"primary",htmlTypes:"submit",isBlock:!0},"UPDATE")))),u.a.createElement(k,{style:{textAlign:"center",marginBottom:64}},"Copyright \xa9 2018. Ethereal Machines Pvt Ltd. All rights reserved.")))}}]),t}(c.Component);t.default=Object(p.connect)(i,l)(P)},1486:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=function(e){return r.a.createElement("div",{className:"form-control"},e.children)};t.a=o},1514:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(88),s=function(e){return r.a.createElement(o.c,{htmlType:e.htmlTypes,block:!!e.isBlock,size:e.isSize?e.isSize:"large",type:e.isType?e.isType:"default",disabled:!!e.isDisabled&&e.isDisabled,shape:e.shape,className:e.classValue,onClick:e.onClick},e.children)};t.a=s},1532:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=function(e){return r.a.createElement("form",{onSubmit:e.onSubmitHandler},e.children)};t.a=o},1540:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=function(e){return r.a.createElement("div",{className:"heading"},r.a.createElement("h1",null,e.heading))};t.a=o},1550:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(88),s=n(1486),i=function(e){return r.a.createElement(s.a,null,r.a.createElement("label",{htmlFor:e.name},e.labelName,e.isRequired?r.a.createElement("span",{className:"star"},"*"):null),r.a.createElement(o.j,{type:e.type,className:e.classValue,placeholder:e.placeholder,prefix:e.prefixType?r.a.createElement(o.i,{type:e.prefixType,style:{color:"rgba(0,0,0,.25)"}}):null,name:e.name,value:e.value,onChange:e.onInputChange,required:!!e.isRequired&&e.isRequired,size:"large",readOnly:!!e.isReadonly&&e.isReadonly}))};t.a=i},2843:function(e,t,n){"use strict";var a=n(470),r=function(e,t,n,r){a.a.patch("/user/update-password/"+t,n,{headers:{Accept:"application/json",Authorization:r?"Token "+r:"","Content-Type":"application/json"}}).then(function(t){e(t)}).catch(function(t){return e(t)})};t.a=r}});
//# sourceMappingURL=32.2cd50f06.chunk.js.map