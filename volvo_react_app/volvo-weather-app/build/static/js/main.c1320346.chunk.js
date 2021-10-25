(this["webpackJsonpvolvo-weather-app"]=this["webpackJsonpvolvo-weather-app"]||[]).push([[0],{43:function(e,t,a){},44:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n,c,r=a(4),s=a(17),i=a.n(s),l=(a(43),a(10)),o=(a(44),a(1)),u=function(e){var t=e.titleGreeting,a=e.onDateChange;return Object(o.jsx)("div",{"data-testid":"header-elemet",className:"navbar ad-header",children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsxs)("div",{className:"navbar-header ",children:[Object(o.jsx)("img",{src:"/volvo.png",alt:"React Logo"})," \xa0 Hello ",Object(o.jsx)("b",{children:t}),","]}),Object(o.jsxs)("div",{className:"d-flex",children:[Object(o.jsx)("span",{children:"Weather for: \xa0"}),Object(o.jsx)("span",{children:Object(o.jsxs)("select",{className:"form-select ad-select ",defaultValue:"tomorrow",onChange:function(e){return a(e.target.value)},"aria-label":"Default select example",children:[Object(o.jsx)("option",{value:"today",label:"Today"}),Object(o.jsx)("option",{value:"tomorrow",label:"Tomorrow"}),Object(o.jsx)("option",{value:"twoDaysLater",label:"2 Days later",children:"  "})]})})]})]})})},d=a(13),j=a(12),b=a.n(j),h=a(18),m=(a(47),function(e){var t=e.title,a=e.value,n=e.units,c=e.size;return Object(o.jsxs)("span",{className:"px-2 ".concat(c," heading "),children:[Object(o.jsxs)("span",{className:"text-muted",children:[t,": "]}),Object(o.jsxs)("i",{children:[" ",a," ",n]})]})}),p="http://localhost:8080",x="https://www.metaweather.com";function O(e){return v.apply(this,arguments)}function v(){return(v=Object(h.a)(b.a.mark((function e(t){var a,r,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(p,"/").concat(x,"/api/location/search/?query=").concat(t));case 3:return r=e.sent,e.next=6,r.json();case 6:return c=e.sent,e.next=9,fetch("".concat(p,"/").concat(x,"/api/location/").concat(c[0].woeid));case 9:return s=e.sent,e.next=12,s.json();case 12:return n=e.sent,e.next=15,n.consolidated_weather;case 15:return a=e.sent,e.abrupt("return",a);case 19:return e.prev=19,e.t0=e.catch(0),console.warn("fetchFailed"),e.abrupt("return","E");case 23:case"end":return e.stop()}}),e,null,[[0,19]])})))).apply(this,arguments)}var f=new Date,w=f.toISOString().split("T")[0];f.setDate(f.getDate()+1);var g=f.toISOString().split("T")[0];f.setDate(f.getDate()+1);var _=f.toISOString().split("T")[0],N=function(e,t){var a={};return console.log(e),"today"===t&&(a=e.filter((function(e){return e.applicable_date===w}))),"tomorrow"===t&&(a=e.filter((function(e){return e.applicable_date===g}))),"twoDaysLater"===t&&(a=e.filter((function(e){return e.applicable_date===_}))),a[0]},y={min_temp:0,max_temp:0,wind_speed:0,the_temp:0,humidity:0,weather_state_name:"",weather_state_abbr:"",wind_direction_compass:"",applicable_date:null,visibility:0,air_pressure:0},S=function(e){return 9*e/5+32},D=function(e){return 5*(e-32)/9},k=function(e){var t,a=e.city,n=e.whatDate,c=Object(r.useState)(null),s=Object(l.a)(c,2),i=s[0],u=s[1],j=Object(r.useState)(y),p=Object(l.a)(j,2),v=p[0],f=p[1],w=Object(r.useState)(""),g=Object(l.a)(w,2),_=g[0],k=g[1],C=Object(r.useState)(!0),L=Object(l.a)(C,2),z=L[0],M=L[1],T=Object(r.useState)(!1),E=Object(l.a)(T,2),F=E[0],I=E[1];Object(r.useEffect)((function(){var e=function(){var e=Object(h.a)(b.a.mark((function e(){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==i){e.next=10;break}return e.next=3,I(!0);case 3:return e.next=5,O(a);case 5:return t=e.sent,e.next=8,I(!1);case 8:e.next=11;break;case 10:t=i;case 11:return e.next=13,u(t);case 13:if("E"==t){e.next=23;break}return e.next=16,M(!0);case 16:return e.next=18,N(t,n);case 18:return c=e.sent,e.next=21,f(c);case 21:return e.next=23,k("".concat(x,"/static/img/weather/png/64/").concat(c.weather_state_abbr,".png"));case 23:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[n]);return Object(o.jsx)("div",{"data-testid":"card-".concat(a),className:"col-lg-4 col-md-6 col-sm-6 col-xs-12 ",children:Object(o.jsxs)("div",{className:"card",children:["E"===i&&Object(o.jsx)("div",{className:"alert alert-danger",role:"alert",children:"Failed to fetch Data"}),Object(o.jsxs)("div",{className:"row ",style:{cursor:"pointer"},children:[Object(o.jsxs)("div",{className:"card-title col-8 px-4",onClick:function(){M(!z),f(z?Object(d.a)(Object(d.a)({},v),{},{min_temp:S(v.min_temp),max_temp:S(v.max_temp)}):Object(d.a)(Object(d.a)({},v),{},{min_temp:D(v.min_temp),max_temp:D(v.max_temp)}))},children:[" ",Object(o.jsxs)("h2",{children:[" ",a," "]}),Object(o.jsxs)("div",{className:"tempClass",children:[Object(o.jsx)(m,{title:"H",value:Math.round(v.max_temp).toString(),units:"\xb0".concat(z?"c":"f"),size:"h4"}),Object(o.jsx)(m,{title:"L",value:Math.round(v.min_temp).toString(),units:"\xb0".concat(z?"c":"f"),size:"h4"})]})]}),Object(o.jsxs)("div",{className:"col-4 text-center my-2",children:[Object(o.jsx)("img",{className:"border border-dark rounded",src:_,height:"64px",width:"64px",alt:"Loading"}),Object(o.jsxs)("p",{className:"font-weight-bold",children:[v.weather_state_name," "]})]})]}),F?Object(o.jsx)("div",{className:"d-flex justify-content-center",children:Object(o.jsx)("div",{className:"spinner-border",role:"status",children:Object(o.jsx)("span",{className:"sr-only"})})}):Object(o.jsx)("div",{}),Object(o.jsxs)("div",{className:" card-text",children:[Object(o.jsx)("div",{}),Object(o.jsxs)("div",{className:"row py-2",children:[Object(o.jsx)("div",{className:"col-6 ",children:Object(o.jsx)(m,{title:"Wind",value:(v.wind_direction_compass+" ").concat(Math.round(v.wind_speed).toString()),units:"mph",size:"h7"})}),Object(o.jsx)("div",{className:"col-6",children:Object(o.jsx)(m,{title:"Humidity",value:Math.round(v.humidity).toString(),units:"%",size:"h7"})})]}),Object(o.jsxs)("div",{className:"row py-2",children:[Object(o.jsx)("div",{className:"col-6",children:Object(o.jsx)(m,{title:"Visibility",value:Math.round(v.visibility).toString(),units:"miles",size:"h7"})}),Object(o.jsx)("div",{className:"col-6",children:Object(o.jsx)(m,{title:"Preasure",value:Math.round(v.air_pressure).toString(),units:"mbar",size:"h7"})})]})]})]})})},C=["Gothenburg","Stockholm","Mountain View","London","New York","Berlin"],L=function(e){var t=e.whatDate;return Object(o.jsx)("div",{"data-testid":"weather-container",style:z,children:Object(o.jsx)("div",{className:"row",children:C.map((function(e,a){return Object(o.jsx)(k,{city:e,whatDate:t},a)}))})})},z={margin:"20px"},M=(a(48),a(49),function(){var e=Object(r.useState)("tomorrow"),t=Object(l.a)(e,2),a=t[0],n=t[1];return Object(r.useEffect)((function(){}),[]),Object(o.jsxs)("div",{"data-testid":"App",className:"App",children:[Object(o.jsx)(u,{titleGreeting:"Volvo",onDateChange:function(e){console.log(e),n(e)}}),Object(o.jsx)(L,{whatDate:a})]})}),T=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,53)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))},E=a(21),F=new E.QueryClient;i.a.render(Object(o.jsx)(E.QueryClientProvider,{client:F,children:Object(o.jsx)(M,{})}),document.getElementById("root")),T()}},[[50,1,2]]]);
//# sourceMappingURL=main.c1320346.chunk.js.map