webpackJsonp([6],{1:function(e,t){e.exports=React},2:function(e,t){e.exports=ReactDOM},418:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),a=n(1),c=l(a),d=n(2),m=l(d),s=n(11),p=l(s),f=n(13),h=l(f),v=n(17),g=l(v),y=n(33),b=l(y),_=n(34),k=l(_),E=n(419),w=l(E),O=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),u(t,[{key:"render",value:function(){var e=this,t=this.getLanguage(),n=w.default[t],l=this.props.__html||this.state.__html;return c.default.createElement("div",{className:"md2html development-page"},c.default.createElement(h.default,{currentKey:"development",type:"dark",logo:"/img/hlogo_white.svg",language:t,onLanguageChange:this.onLanguageChange}),c.default.createElement("section",{className:"content-section"},c.default.createElement(k.default,{dataSource:n.sidemenu}),c.default.createElement("div",{className:"doc-content markdown-body",ref:function(t){e.markdownContainer=t},dangerouslySetInnerHTML:{__html:l}})),c.default.createElement(g.default,{logo:"/img/ds_gray.svg",language:t}))}}]),t}((0,b.default)(p.default));document.getElementById("root")&&m.default.render(c.default.createElement(O,null),document.getElementById("root")),t.default=O},419:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={"en-us":{sidemenu:[{title:"Developer guide",children:[{title:"Development Environment Setup",link:"/en-us/development/development-environment-setup.html"},{title:"Architecture Design",link:"/en-us/development/architecture-design.html"},{title:"Backend Development",link:"/en-us/development/backend-development.html"},{title:"Frontend Development",link:"/en-us/development/frontend-development.html"},{title:"Plugin Development",link:"/en-us/development/plugin-development.html"},{title:"Questions & Communications",link:"/en-us/development/have-questions.html"}]}],barText:"Development"},"zh-cn":{sidemenu:[{title:"开发者指南",children:[{title:"环境搭建",link:"/zh-cn/development/development-environment-setup.html"},{title:"架构设计",link:"/zh-cn/development/architecture-design.html"},{title:"后端开发",link:"/zh-cn/development/backend-development.html"},{title:"前端开发",link:"/zh-cn/development/frontend-development.html"},{title:"插件开发",link:"/zh-cn/development/plugin-development.html"},{title:"问题与交流",link:"/zh-cn/development/have-questions.html"}]}],barText:"开发者"}}}},[418]);