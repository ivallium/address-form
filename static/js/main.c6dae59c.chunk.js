(this.webpackJsonpsolution=this.webpackJsonpsolution||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),r=n(9),a=n.n(r),i=(n(14),n(15),n(6)),o=n(2),d=n(0);var u=function(e){var t=e.address,n=e.time;return Object(d.jsxs)("div",{className:"address-display",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"".concat(t.firstLine,", ").concat(t.secondLine,", ").concat(t.city,", ").concat(t.postcode)}),Object(d.jsx)("img",{width:10,src:"/assets/delete.png",onClick:e.onRemove})]}),Object(d.jsxs)("p",{children:[" Time at address: ","".concat(n.years," ").concat("1"===n.years?"year":"years",", ").concat(n.months," ").concat("1"===n.months?"month":"months")]})]})},j=n(4),l=n.n(j),b=n(8);var h=function(e){var t=e.split(", ");return console.log(t),{firstLine:t[0],secondLine:t[1],city:t[5]}};var p=function(e){var t=Object(s.useState)(e.address.firstLine),n=Object(o.a)(t,2),c=n[0],r=n[1],a=Object(s.useState)(e.address.secondLine),i=Object(o.a)(a,2),u=i[0],j=i[1],l=Object(s.useState)(e.address.city),b=Object(o.a)(l,2),h=b[0],p=b[1],O=Object(s.useState)(e.postcode),v=Object(o.a)(O,2),f=v[0],m=v[1];return Object(s.useEffect)((function(){r(e.address.firstLine),j(e.address.secondLine),p(e.address.city),m(e.postcode)}),[e]),Object(d.jsxs)("form",{onSubmit:function(t){return function(t){t.preventDefault(),console.log(t.target),e.addAddress(t.target[0].value,t.target[1].value,t.target[2].value,t.target[3].value)}(t)},children:[Object(d.jsx)("label",{children:"Address line 1 *"}),Object(d.jsx)("div",{className:"form-input",children:Object(d.jsx)("input",{type:"text",value:c,required:!0,onChange:function(e){return r(e.currentTarget.value)}})}),Object(d.jsx)("label",{children:"Address line 2"}),Object(d.jsx)("div",{className:"form-input",children:Object(d.jsx)("input",{type:"text",value:u,onChange:function(e){return j(e.currentTarget.value)}})}),Object(d.jsx)("label",{children:"City *"}),Object(d.jsx)("div",{className:"form-input",children:Object(d.jsx)("input",{type:"text",value:h,required:!0,onChange:function(e){return p(e.currentTarget.value)}})}),Object(d.jsx)("label",{children:"Postcode *"}),Object(d.jsx)("div",{className:"form-input",children:Object(d.jsx)("input",{type:"text",value:f,required:!0,onChange:function(e){return m(e.currentTarget.value)}})}),Object(d.jsx)("div",{className:"submit-div",children:Object(d.jsx)("input",{type:"submit",id:"submit-button",value:"Add address"})})]})};var O=function(e){var t=Object(s.useState)([]),n=Object(o.a)(t,2),c=n[0],r=n[1],a=Object(s.useState)("-1"),i=Object(o.a)(a,2),u=i[0],j=i[1],O=Object(s.useState)(null),v=Object(o.a)(O,2),f=v[0],m=v[1];Object(s.useEffect)((function(){function e(){return(e=Object(b.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[e.postcode]);var x=function(){var t=Object(b.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:fetch("https://api.getAddress.io/find/".concat(e.postcode,"?api-key=").concat("2JAuH_oj5UCkmTvKvZhAnA30092")).then((function(e){return e.json()})).then((function(e){m(null),r(e.addresses)})).catch((function(){return m("There was an error finding the postcode.")}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("label",{children:"Address"}),Object(d.jsxs)("div",{className:"form-input",children:[Object(d.jsxs)("select",{name:"address",id:"address",placeholder:"Select your address",value:u,onChange:function(e){return j(e.target.value)},children:[Object(d.jsx)("option",{value:"-1",children:"Select your address"}),c.map((function(e,t){return Object(d.jsx)("option",{value:e,children:e.replace(/ ,/g,"")},"option-".concat(t))}))]}),Object(d.jsx)("img",{width:15,src:"/assets/chevron-down.png"})]}),Object(d.jsx)("img",{className:"double-chev",width:8,src:"/assets/double-chevron.png"}),"-1"!==u&&Object(d.jsx)(p,{address:h(u),postcode:e.postcode,addAddress:e.addAddress}),""!==f&&Object(d.jsx)("p",{children:f})]})};var v=function(e){var t=Object(s.useState)(""),n=Object(o.a)(t,2),c=n[0],r=n[1],a=Object(s.useState)(""),i=Object(o.a)(a,2),u=i[0],j=i[1],l=function(){!function(e){if(void 0===e)return!1;var t="[abcdefghijklmnoprstuwyz]",n="[abcdefghklmnopqrstuvwxy]",s="[abdefghjlnpqrstuwxyz]",c=new Array;c.push(new RegExp("^(bf1)(\\s*)([0-6]{1}[abdefghjlnpqrst]{1}[abdefghjlnpqrstuwzyz]{1})$","i")),c.push(new RegExp("^("+t+"{1}"+n+"?[0-9]{1,2})(\\s*)([0-9]{1}"+s+"{2})$","i")),c.push(new RegExp("^("+t+"{1}[0-9]{1}[abcdefghjkpmnrstuvwxy]{1})(\\s*)([0-9]{1}"+s+"{2})$","i")),c.push(new RegExp("^("+t+"{1}"+n+"{1}?[0-9]{1}[abehmnprvwxy]{1})(\\s*)([0-9]{1}"+s+"{2})$","i")),c.push(/^(GIR)(\s*)(0AA)$/i),c.push(/^(bfpo)(\s*)([0-9]{1,4})$/i),c.push(/^(bfpo)(\s*)(c\/o\s*[0-9]{1,3})$/i),c.push(/^([A-Z]{4})(\s*)(1ZZ)$/i),c.push(/^(ai-2640)$/i);for(var r=e,a=!1,i=0;i<c.length;i++)if(c[i].test(r)){c[i].exec(r),r=(r=RegExp.$1.toUpperCase()+" "+RegExp.$3.toUpperCase()).replace(/C\/O\s*/,"c/o "),"AI-2640"==e.toUpperCase()&&(r="AI-2640"),a=!0;break}return!!a}(u)?r("This is an invalid postcode"):(r(""),e.onSearch(u))};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("label",{children:"Postcode search"}),Object(d.jsxs)("div",{className:"form-input",children:[Object(d.jsx)("input",{type:"text",id:"postcode-input",value:u,onChange:function(e){return j(e.currentTarget.value.toUpperCase())},onKeyDown:function(e){"Enter"===e.key&&l()}}),Object(d.jsx)("img",{src:"/assets/magnifying-glass.png",width:15,onClick:l})]}),Object(d.jsx)("p",{children:c})]})},f=Array.from(Array(30).keys()),m=Array.from(Array(12).keys());var x=function(e){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("label",{children:"How long have you lived at your current address?"}),Object(d.jsxs)("div",{className:"time-select-div",children:[Object(d.jsxs)("div",{className:"form-input",children:[Object(d.jsx)("select",{name:"year",id:"year-select",value:e.year,onChange:function(t){return e.setYears(t.target.value)},children:f.map((function(e,t){return Object(d.jsxs)("option",{value:e,children:[e,1===t?" year":" years"]})}))}),Object(d.jsx)("img",{src:"/assets/chevron-down.png"})]}),Object(d.jsxs)("div",{className:"form-input",children:[Object(d.jsx)("select",{name:"month",id:"month-select",value:e.month,onChange:function(t){return e.setMonths(t.target.value)},children:m.map((function(e,t){return Object(d.jsxs)("option",{value:e,children:[e,1===t?" month":" months"]})}))}),Object(d.jsx)("img",{src:"/assets/chevron-down.png"})]})]})]})};var g=function(){var e=Object(s.useState)(void 0),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(s.useState)([]),a=Object(o.a)(r,2),j=a[0],l=a[1],b=Object(s.useState)("0"),h=Object(o.a)(b,2),p=h[0],f=h[1],m=Object(s.useState)("0"),g=Object(o.a)(m,2),y=g[0],w=g[1];return Object(d.jsx)("div",{className:"background",children:Object(d.jsxs)("div",{className:"search-container",children:[Object(d.jsx)("h3",{children:" Address Search "}),Object(d.jsx)("p",{children:"Please enter your address"}),Object(d.jsx)("div",{className:"horizontal-bar"}),Object(d.jsx)("div",{children:j.map((function(e,t){return Object(d.jsx)(u,{address:e.address,time:e.time,onRemove:function(){return function(e){l([].concat(Object(i.a)(j.slice(0,e)),Object(i.a)(j.slice(e+1))))}(t)}})}))}),Object(d.jsx)(x,{year:p,month:y,setYears:f,setMonths:w}),Object(d.jsx)(v,{postcode:n,onSearch:c}),n&&Object(d.jsx)(O,{postcode:n,addAddress:function(e,t,n,s){console.log({address:{firstLine:e,secondLine:t,city:n,postcode:s},time:{years:p,months:y}}),l([].concat(Object(i.a)(j),[{address:{firstLine:e,secondLine:t,city:n,postcode:s},time:{years:p,months:y}}])),c(void 0),f("0"),w("0")}})]})})};var y=function(){return Object(d.jsx)(g,{})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(y,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.c6dae59c.chunk.js.map