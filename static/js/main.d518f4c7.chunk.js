(this.webpackJsonpbreadcrumb=this.webpackJsonpbreadcrumb||[]).push([[0],[,,,,,,,function(e){e.exports=JSON.parse('{"type":"dir","children":{"home":{"type":"dir","children":{"myname":{"type":"dir","children":{"filea.txt":{"type":"file"},"fileb.txt":{"type":"file"},"projects":{"type":"dir","children":{"mysupersecretproject":{"type":"dir","children":{"mysupersecretfile":{"type":"file"}}}}}}}}}}}')},,function(e,n,t){e.exports=t(16)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var r=t(0),c=t.n(r),a=t(6),i=t.n(a),o=(t(14),t(8)),l=t(4),u=t(2),s=[],m=function e(n){var t={name:"",type:"",children:[],showFiles:!1},r=function(r){"children"===r&&(t.children=[],Object.keys(n[r]).forEach((function(c){s.length>0&&s[s.length-1].children.push({name:c,type:n[r][c].type}),"dir"===n[r][c].type&&(t.name=c,t.type=n[r][c].type,s.push(t),e(n[r][c]))})))};for(var c in n)r(c);return s},d=(t(15),function(e){var n=e.breadCrumb,t=e.showChildren,a=Object(r.useState)(""),i=Object(u.a)(a,2),o=i[0],l=i[1];return c.a.createElement("section",{className:"bcContainer"},n.map((function(e,n){return c.a.createElement("div",{className:"breadCrumb",key:n},c.a.createElement("div",{className:"bcBox bcItem",onClick:function(){return function(e,n){l(""),t(e,n)}(e.children,n)}},e.name," >"),c.a.createElement("div",{className:"bcChildren"},e.showFiles&&e.children.filter((function(e){return"dir"!==e.type})).map((function(e,n){return c.a.createElement("div",{key:n,className:"bcBox",onClick:function(){return n=e.name,void l("THIS IS FILE ".concat(n));var n}},e.name)}))))})),c.a.createElement("div",{className:"bcFileText"},o))}),f=t(7),h=function(){var e=Object(r.useState)([]),n=Object(u.a)(e,2),t=n[0],a=n[1],i=Object(r.useState)([]),s=Object(u.a)(i,2),h=s[0],p=s[1],b=function(e){p(Object(l.a)(e))};Object(r.useEffect)((function(){var e;(e=f,new Promise((function(n){n(m(e))}))).then((function(e){a(Object(l.a)(e)),b([e[0]])}))}),[]);return c.a.createElement("div",null,c.a.createElement(d,{breadCrumb:h,showChildren:function(e,n){var r=h;if(h.length>n+1)r.length=n+1,b(r);else{var c=r.map((function(e){return Object(o.a)({},e,{showFiles:!0})}));e.forEach((function(e){var n=t.filter((function(n){return n.name===e.name}));c.some((function(n){return n.name===e.name}))||(c.push.apply(c,Object(l.a)(n)),b(c))}))}}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.d518f4c7.chunk.js.map