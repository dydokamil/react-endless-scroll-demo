(this["webpackJsonpendless-scroller-demo"]=this["webpackJsonpendless-scroller-demo"]||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},15:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(7),c=n.n(a),s=(n(15),n(4)),i=n.n(s),l=n(5),u=n(8),d=n(2),m=n(9),f=n.n(m);n(17);function p(e){return new Promise((function(t){setTimeout((function(){t(Array.from(Array(10).keys()).map((function(t,n){return n+e})))}),1e3)}))}function h(e){var t=e.children;return o.a.createElement("div",{style:{padding:"40px",marginBottom:"10px",marginTop:"10px",backgroundColor:"cornflowerblue"}},t)}var v=function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(!1),s=Object(d.a)(c,2),m=s[0],v=s[1],b=Object(r.useState)(!0),w=Object(d.a)(b,2),y=w[0],g=w[1],j=Object(r.useState)(0),E=Object(d.a)(j,2),O=E[0],x=E[1];function k(){return(k=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.next=3,p(O);case 3:t=e.sent,a((function(e){return[].concat(Object(l.a)(e),Object(l.a)(t))})),x(O+10),g(Math.random()>.05),v(!1);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return o.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},o.a.createElement(f.a,{onReachBottom:function(){return k.apply(this,arguments)},isLoading:m,hasMore:y},n.map((function(e){return o.a.createElement(h,{key:e},e)}))),!y&&o.a.createElement("p",null,"You've reached the bottom!"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);!function(e){if(e&&"undefined"!==typeof window){var t=document.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e,document.head.appendChild(t)}}(".endless-scroll-loader-wrapper {\n  position: relative;\n}\n\n.endless-scroll-loader {\n  bottom: 0px;\n  height: 100px;\n  left: 0;\n  position: absolute;\n  width: 100%;\n}"),t.default=function(e){var t=e.children,n=e.className,o=void 0===n?"":n,a=e.hasMore,c=e.isLoading,s=e.onReachBottom,i=e.threshold,l=void 0===i?0:i,u=r.useRef(null);return r.useEffect((function(){var e=new IntersectionObserver((function(e){var t=e[0];!c&&a&&t.isIntersecting&&s()}),{threshold:l}),t=u.current;return t&&e.observe(t),function(){t&&e.unobserve(t)}}),[a,c,s,l]),r.createElement("div",{className:"endless-scroll-wrapper "+o},t,r.createElement("div",{className:"endless-scroll-loader-wrapper"},r.createElement("div",{ref:u,className:"endless-scroll-loader"})))}}},[[10,1,2]]]);
//# sourceMappingURL=main.0042e31f.chunk.js.map