(this["webpackJsonpetherealmachines.com"]=this["webpackJsonpetherealmachines.com"]||[]).push([[45],{1683:function(e,t,n){},1798:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(27),o=n(0),i=n.n(o),c=n(229),u=n.n(c),l=(n(1683),n(196)),s=n(187),f=n(232),d=n(205),p=n(233),m=n(252),b=(n(253),n(245),n(246)),h=n(87),y=n(2),j=function(e){return Object(y.jsxs)(f.a,Object(a.a)(Object(a.a)({},e),{},{classValue:"form form--contact-us",children:[Object(y.jsxs)("div",{className:"form-controls single-col-layout",children:[Object(y.jsx)(m.a,Object(a.a)({labelName:"Name",inputName:"name",placeholder:"Enter Name",isRequired:!0},e)),Object(y.jsx)(m.a,Object(a.a)({labelName:"Country",inputName:"country",placeholder:"Enter Country",isRequired:!0},e)),Object(y.jsx)(m.a,Object(a.a)({labelName:"Design Files / Images",inputName:"imagelink",placeholder:"Kindly drop a drive link",isRequired:!0},e)),Object(y.jsx)(m.a,Object(a.a)({labelName:"Email",inputName:"email",placeholder:"Enter Email",isRequired:!0},e)),Object(y.jsx)(m.a,Object(a.a)({labelName:"Contact Number",inputName:"contact_number",placeholder:"Contact No. with Country Code (e.g. +91XXXXXXXXXX)",isRequired:!0},e)),Object(y.jsx)(b.a,Object(a.a)({labelName:"Specific Queries",inputName:"specificQueries",placeholder:"Add details about product/design/type of machining"},e))]}),e.errorMsg?Object(y.jsx)(d.a,Object(a.a)({isRequired:!0},e)):null,e.showLoader?Object(y.jsx)(h.a,{children:"Submitting your request..."}):null,Object(y.jsx)(p.a,{classValue:"form-btn",disabled:e.formSubmissionStart,children:"Submit"})]}))},O=n(243),g=n(291),v=n(39),w=function(e,t){v.a.post("queries/digitalhelp/",t,{headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(t){e(t)})).catch((function(t){return e(t)}))},x=n(292),N=n(228),D=n(47),E=n(195),S=n(194);t.default=Object(D.b)((function(e){return{session:e.login}}))((function(e){var t=Object(o.useState)(new FormData),n=Object(r.a)(t,2),c=(n[0],n[1],Object(o.useState)(!1)),f=Object(r.a)(c,2),d=(f[0],f[1],Object(o.useState)(!1)),p=Object(r.a)(d,2),m=(p[0],p[1],Object(o.useState)(!0)),b=Object(r.a)(m,2),h=(b[0],b[1]),v=Object(o.useState)(null),D=Object(r.a)(v,2),C=D[0],k=D[1],M=Object(o.useState)(!1),P=Object(r.a)(M,2),_=P[0],A=P[1],R=Object(o.useState)(!1),T=Object(r.a)(R,2),q=T[0],H=T[1];Object(o.useEffect)((function(){window.scrollTo(0,0)}),[]);var X=function(t){if(201===t.status)document.querySelector(".form--contact-us").reset(),e.formData.delete("name"),e.formData.delete("country"),e.formData.delete("contact_number"),e.formData.delete("email"),e.formData.delete("imagelink"),e.formData.delete("message"),e.natureOfQuery=null,e.isStateRequired=!1,e.allowStateField=!1,N.a(".select-input"),h(!0),k(null),A(!1),H(!0);else if(t.response)h(!1),k(t.response.data),A(!1);else{h(!1),k({Error:["Oops! Something went wrong, please try again."]}),A(!1)}};return Object(y.jsxs)(i.a.Fragment,{children:[Object(y.jsx)(E.a,{}),Object(y.jsx)(O.a,{show:q,clicked:function(){H(!1)},children:Object(y.jsx)(g.a,{})}),Object(y.jsxs)("div",{className:"page page--contact-us",children:[Object(y.jsx)(u.a,Object(a.a)({},{title:"Ethereal Machines - CAD/CAM Design or Programming Help",meta:{property:{title:"Ethereal Machines - CAD/CAM Design or Programming Help",description:"Ethereal Machines is glad to assist you with CAD/CAM programming for CNC machining and 3D Printing."}}})),Object(y.jsx)(l.a,{heading:"NEED HELP WITH CAD/CAM PROGRAMMING?",subHeading:" ",classValue:"page-banner--design-help"}),Object(y.jsxs)("section",{className:"section section--design-help-form",children:[Object(y.jsx)("div",{className:"container",children:e.session.session?Object(y.jsx)("div",{children:Object(y.jsx)("button",{className:"form-btn",onClick:function(){Object(x.a)()},children:"Query Report"})}):null}),Object(y.jsx)(s.a,{name:"Details form",classValue:"u-margin-bottom-big u-text-center",hasSubHeading:!0,subHeading:"We'd Love to hear about your Project and Help you get started"}),Object(y.jsx)(j,{onInputChange:function(t){var n=t.target.name,a=t.target.value;switch(t.target.type){case"text":"name"===n?(e.formData.delete("name"),e.formData.append("name",a)):"contact_number"===n?(e.formData.delete("contact_number"),e.formData.append("contact_number",a)):"email"===n?(e.formData.delete("email"),e.formData.append("email",a)):"country"===n?(e.formData.delete("country"),e.formData.append("country",a)):"imagelink"===n&&(e.formData.delete("imagelink"),e.formData.append("imagelink",a));break;case"textarea":e.formData.delete("message"),e.formData.append("message",a)}e.formData=e.formData},onSubmitHandler:function(t){t.preventDefault(),A(!0),w(X,e.formData)},formSubmissionStart:_,errorMsg:C,natureOfQuery:e.natureOfQuery,isStateRequired:e.isStateRequired,showLoader:_})]})]}),Object(y.jsx)(S.a,{})]})}))},187:function(e,t,n){"use strict";n(0);var a=n(2);t.a=function(e){return Object(a.jsxs)("div",{className:e.classValue,children:[Object(a.jsx)("h3",{className:"section-heading",children:e.name}),e.hasSubHeading?Object(a.jsx)("span",{className:"section-sub-heading",children:e.subHeading}):null]})}},193:function(e,t,n){},196:function(e,t,n){"use strict";n(0),n(193);var a=n(2);t.a=function(e){return Object(a.jsx)("div",{className:"page-banner ".concat(e.classValue),children:Object(a.jsxs)("div",{className:"container container--page-banner",children:[Object(a.jsxs)("h1",{className:"primary-heading u-text-center",children:[Object(a.jsx)("span",{className:"primary-heading--main",children:e.heading}),Object(a.jsx)("hr",{className:"hr--primary-heading"}),Object(a.jsx)("span",{className:"primary-heading--sub",children:e.subHeading})]}),e.children]})})}},211:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.clone=function(e){var t=e.title,n=e.description,a=e.base,r=e.canonical,o=e.meta,i=e.link,c=e.auto;try{return JSON.parse(JSON.stringify({title:t,description:n,base:a,canonical:r,meta:o,link:i,auto:c}))}catch(u){return{}}},t.defaults=function e(t,n){return Object.keys(n).reduce((function(r,o){return t.hasOwnProperty(o)?"object"===a(t[o])&&!Array.isArray(t[o])&&t[o]&&e(t[o],n[o]):t[o]=n[o],t}),t)},t.forEach=function(e,t){e&&e.length&&Array.prototype.slice.call(e).forEach(t)}},229:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};t.render=j;var o=n(0),i=f(o),c=f(n(6)),u=f(n(264)),l=n(211),s=n(268);function f(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function m(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=[],a="link"===e?"href":"content";return Object.keys(t).forEach((function(r){var o=t[r];"string"!==typeof o?Object.keys(o).forEach((function(t){(Array.isArray(o[t])?o[t]:[o[t]]).forEach((function(o){var i;null!==o&&n.push((b(i={tagName:e},r,t),b(i,a,o),i))}))})):n.push(b({tagName:e},r,o))})),n}function y(e){return[].concat(h("meta",e.meta),h("link",e.link))}function j(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=0,n=[];function a(e){var n=e.tagName,a=m(e,["tagName"]);return"meta"===n?i.default.createElement("meta",r({},a,{key:t++,"data-rdm":!0})):"link"===n?i.default.createElement("link",r({},a,{key:t++,"data-rdm":!0})):null}return e.title&&n.push(i.default.createElement("title",{key:t++},e.title)),y(e).reduce((function(e,t){return e.push(a(t)),e}),n)}var O=function(e){function t(){return d(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"render",value:function(){var e=this.props.children,t=i.default.Children.count(e);return 1===t?i.default.Children.only(e):t?i.default.createElement("div",null,this.props.children):null}}]),t}(o.Component);O.propTypes={title:c.default.oneOfType([c.default.string,c.default.func]),description:c.default.oneOfType([c.default.string,c.default.func]),canonical:c.default.oneOfType([c.default.string,c.default.func]),base:c.default.string,meta:c.default.objectOf(c.default.oneOfType([c.default.string,c.default.objectOf(c.default.oneOfType([c.default.string,c.default.arrayOf(c.default.string)]))])),link:c.default.objectOf(c.default.objectOf(c.default.oneOfType([c.default.string,c.default.arrayOf(c.default.string)]))),auto:c.default.objectOf(c.default.bool)};var g=(0,u.default)((function(e){for(var t={},n={title:void 0,description:void 0,canonical:void 0},a=!0,r=function(){a=e[o].hasOwnProperty("extend");var r=e[o],i=(0,l.clone)(e[o]);["title","description","canonical"].forEach((function(e){r.hasOwnProperty(e)&&("function"===typeof r[e]?n[e]=r[e](n[e]):void 0===n[e]&&(n[e]=r[e]))})),(0,l.defaults)(t,i)},o=e.length-1;a&&o>=0;o--)r();return"string"===typeof n.title&&(t.title=n.title),"string"===typeof n.description&&(0,l.defaults)(t,{meta:{name:{description:n.description}}}),"string"===typeof n.canonical&&(0,l.defaults)(t,{link:{rel:{canonical:n.canonical}}}),t.auto&&t.auto.ograph&&function(e){e.meta||(e.meta={});e.meta.property||(e.meta.property={});var t=e.meta.property;t&&(e.title&&!t["og:title"]&&(t["og:title"]=e.title),e.hasOwnProperty("description")&&!t["og:description"]&&(t["og:description"]=e.description),e.hasOwnProperty("canonical")&&!t["og:url"]&&(t["og:url"]=e.canonical))}(t),t}),(function(e){s.canUseDOM&&("string"===typeof e.title&&(document.title=e.title),(0,s.insertDocumentMeta)(y(e)))}))(O);g.renderAsReact=function(){return j(g.rewind())},t.default=g},264:function(e,t,n){"use strict";function a(e){return e&&"object"===typeof e&&"default"in e?e.default:e}var r=n(0),o=a(r),i=a(n(55));function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=!("undefined"===typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!==typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!==typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!==typeof n&&"function"!==typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(a){if("function"!==typeof a)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function f(){l=e(s.map((function(e){return e.props}))),d.canUseDOM?t(l):n&&(l=n(l))}var d=function(e){var t,n;function r(){return e.apply(this,arguments)||this}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.peek=function(){return l},r.rewind=function(){if(r.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var c=r.prototype;return c.shouldComponentUpdate=function(e){return!i(e,this.props)},c.componentWillMount=function(){s.push(this),f()},c.componentDidUpdate=function(){f()},c.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),f()},c.render=function(){return o.createElement(a,this.props)},r}(r.Component);return c(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(a)+")"),c(d,"canUseDOM",u),d}}},268:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.canUseDOM=void 0,t.removeDocumentMeta=o,t.insertDocumentMeta=function(e){o(),(0,a.forEach)(e,i)};var a=n(211);t.canUseDOM=!("undefined"===typeof window||!window.document||!window.document.createElement);function r(e){e.parentNode.removeChild(e)}function o(){(0,a.forEach)(document.querySelectorAll("head [data-rdm]"),r)}function i(e){var t=e.tagName,n=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["tagName"]),a=document.createElement(t);for(var r in n)e.hasOwnProperty(r)&&a.setAttribute(r,e[r]);a.setAttribute("data-rdm",""),document.getElementsByTagName("head")[0].appendChild(a)}}}]);
//# sourceMappingURL=45.a907ada8.chunk.js.map