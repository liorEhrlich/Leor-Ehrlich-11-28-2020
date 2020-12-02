(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{119:function(e,n,t){"use strict";t.r(n);var r=t(1),c=t(0),i=t.n(c),o=t(7),a=t.n(o),u=t(5),l="ADD_FAVORITE",s="REMOVE_FAVORITE",f="ADD_CITY_WEATHER",d="UPDATE_SELECTED_CITY",b="SET_IS_HOME_VIEW_SHOWN",p="SET_IS_FERENHEIT";function j(e){return{type:d,payload:e}}function m(e){return{type:b,payload:e}}var h=t(6),O=t(2),x=t(38),v=t.n(x),g=t(3),y=t(39),w=t.n(y),C=function(e){return Math.round(5*(parseInt(e)-32)/9)};function E(){var e=Object(g.a)(["\n  font-size: 14px;\n  color: ",";\n  margin-top: 10px;\n"]);return E=function(){return e},e}function F(){var e=Object(g.a)(["\n  word-break: break-word;\n  font-size: 16px;\n  color: ",";\n  margin-top: 10px;\n"]);return F=function(){return e},e}function k(){var e=Object(g.a)(["\n  word-break: break-word;\n  font-size: 18px;\n  color: ",";\n  margin-top: 10px;\n"]);return k=function(){return e},e}function S(){var e=Object(g.a)(["\n  display: inline-block;\n  text-align: center;\n  padding: 10px;\n  background-color: ",";\n  border-radius: 2px;\n  border: 4px solid ",";\n  height: 170px;\n  width: 110px;\n  font-weight: bold;\n\n  @media ","{\n    height: auto;\n    padding: 15px;\n    margin-bottom: 10px;\n  }\n"]);return S=function(){return e},e}var A=function(e){var n=e.title,t=e.desc,c=e.minTemperature,i=e.maxTemperature,o=e.isFerenheit;return Object(r.jsxs)(T,{children:[Object(r.jsx)(z,{children:n}),Object(r.jsx)(B,{children:t}),o?Object(r.jsx)(I,{children:"".concat(c,"\xb0F - ").concat(i,"\xb0F")}):Object(r.jsx)(I,{children:"".concat(C(c),"\xb0C - ").concat(C(i),"\xb0C")})]})},T=O.default.div(S(),(function(e){return e.theme.colors.primaryBackground}),(function(e){return e.theme.colors.primaryContrast}),(function(e){return e.theme.mobile})),z=O.default.div(k(),(function(e){return e.theme.colors.tertiary})),B=O.default.div(F(),(function(e){return e.theme.colors.secondary})),I=O.default.div(E(),(function(e){return e.theme.colors.secondary})),L=Object(u.b)((function(e){return{isFerenheit:e.isFerenheit}}))(A);function N(){var e=Object(g.a)(["\n  margin-left: 20px;\n  font-size: 18px;\n"]);return N=function(){return e},e}function D(){var e=Object(g.a)(["\n  margin: 20px;\n\n  :hover {\n    cursor: pointer;\n  }\n"]);return D=function(){return e},e}function H(){var e=Object(g.a)(["\n  display: flex;\n  flex-wrap: wrap;\n"]);return H=function(){return e},e}var V=function(e){var n=e.citiesWeather,t=e.updateCity,c=e.setIsHomeViewShown;return Object(r.jsxs)(R,{children:[!Object.keys(n).length&&Object(r.jsx)(Y,{children:"No favorites yet. Feel free to add them from the home view."}),Object.keys(n).map((function(e){var i=n[e][0];return Object(r.jsx)(P,{onClick:function(){return function(e){t(e),c(!0)}(e)},children:Object(r.jsx)(L,{title:e,desc:i.desc,minTemperature:i.minTemperature,maxTemperature:i.maxTemperature})},"favorite-".concat(e))}))]})},R=O.default.div(H()),P=O.default.div(D()),Y=O.default.p(N()),W=Object(u.b)((function(e){return{citiesWeather:v()(e.citiesWeather,e.favoriteCities)}}),(function(e){return{updateCity:function(n){return e(j(n))},setIsHomeViewShown:function(n){return e(m(n))}}}))(V);function X(){var e=Object(g.a)(["\n  width: 300px;\n  height: 120px;\n  background-color: ",";\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  text-align: center;\n"]);return X=function(){return e},e}function _(){var e=Object(g.a)(["\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n"]);return _=function(){return e},e}var G=document.getElementById("modal"),M=O.default.div(_()),Z=O.default.div(X(),(function(e){return e.theme.colors.primaryBackground})),q=function(e){var n=e.isOpen,t=e.children,i=document.createElement("div");return Object(c.useEffect)((function(){return G.appendChild(i),function(){G.removeChild(i)}}),[i]),!!n&&Object(o.createPortal)(Object(r.jsx)(M,{children:Object(r.jsx)(Z,{children:t})}),i)};function U(){var e=Object(g.a)(["\n  border-radius: 3px;\n  padding: 5px;\n  background-color: ",";\n  font-weight: bold;\n  color: ",";\n  border: 2px solid ",";\n  margin: 0 5px;\n  transition: 0.3s;\n\n  :hover {\n    cursor: pointer;\n    opacity: 0.8;\n  }\n\n  @media ","{\n    font-size: 10px;\n    word-break: normal;\n  }\n"]);return U=function(){return e},e}var J=t(2).default.button(U(),(function(e){return e.theme.colors.tertiary}),(function(e){return e.theme.colors.primaryBackground}),(function(e){return e.theme.colors.secondary}),(function(e){return e.theme.mobile})),K=t(10),Q=t.n(K),$=t(23),ee=t(43),ne=t.n(ee),te=t(4),re="https://dataservice.accuweather.com/",ce="locations/v1/search",ie="locations/v1/cities/autocomplete",oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object(te.a)(Object(te.a)({},e),{},{apikey:"qwYX57fohaqbbZT6uf6fZiGkg7x9BBhu"}),t=new URLSearchParams(Object.entries(n));return t},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=oe(e);return fetch("".concat(re).concat(ce,"?").concat(n))},ue=function(e){var n=oe();return fetch("".concat(re).concat("forecasts/v1/daily/5day/").concat(e,"?").concat(n))},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=oe(e);return fetch("".concat(re).concat(ie,"?").concat(n))};function se(){var e=Object(g.a)(["\n  padding: 5px;\n  border-bottom: 2px solid ",";\n  transition: 0.3s;\n  color: ",";\n\n  :last-of-type {\n    border-bottom: none;\n  }\n  :hover {\n    cursor: pointer;\n    font-weight: bold;\n  }\n"]);return se=function(){return e},e}function fe(){var e=Object(g.a)(["\n  position: absolute;\n  top: 145px;\n  width: 185px;\n  list-style: none;\n  background-color: ",";\n  margin: 0;\n  padding: 10px;\n  border: 2px solid ",";\n  border-radius: 2px;\n"]);return fe=function(){return e},e}var de=function(e){var n=e.results,t=e.onCitySelect;return n.length?Object(r.jsx)(be,{children:n.map((function(e){return Object(r.jsx)(pe,{onClick:function(e){return t(e.target.innerHTML)},children:e},e)}))}):null},be=O.default.ul(fe(),(function(e){return e.theme.colors.primaryBackground}),(function(e){return e.theme.colors.primaryContrast})),pe=O.default.li(se(),(function(e){return e.theme.colors.primaryContrast}),(function(e){return e.theme.colors.defaultFont}));function je(){var e=Object(g.a)(["\n  width: 185px;\n  font-size: 18px;\n  padding: 10px;\n\n  @media ","{\n    font-size: 16px;\n  }\n"]);return je=function(){return e},e}function me(){var e=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return me=function(){return e},e}var he=function(){var e=Object($.a)(Q.a.mark((function e(n,t){var r,c,i,o;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(1!==n.length){e.next=2;break}return e.abrupt("return");case 2:return r={q:n},e.next=5,le(r);case 5:return c=e.sent,e.next=8,c.json();case 8:i=e.sent,o=i.map((function(e){return"".concat(e.LocalizedName,", ").concat(e.Country.LocalizedName)})),t(o);case 11:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),Oe=ne()(he,500),xe=function(e){var n=e.updateCity,t=e.onError,i=Object(c.useState)(""),o=Object(h.a)(i,2),a=o[0],u=o[1],l=Object(c.useState)([]),s=Object(h.a)(l,2),f=s[0],d=s[1],b=Object(c.useState)(""),p=Object(h.a)(b,2),j=p[0],m=p[1];return Object(c.useEffect)((function(){j&&(u(j),n(j))}),[j,n]),Object(r.jsxs)(ve,{children:[Object(r.jsx)(ge,{value:a,placeholder:"City",pattern:"[a-z][A-Z]",onChange:function(e){m(""),d([]);var n=e.target.value;u(n),!function(e){return RegExp("[a-zA-Z-]").test(e)}(n)&&n?(u(""),t(!0)):n.length&&Oe(n,d)}}),!j&&Object(r.jsx)(de,{results:f,onCitySelect:m})]})},ve=O.default.div(me()),ge=O.default.input(je(),(function(e){return e.theme.mobile})),ye=Object(u.b)(null,(function(e){return{updateCity:function(n){return e(j(n))}}}))(xe);function we(){var e=Object(g.a)(["\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n"]);return we=function(){return e},e}var Ce=function(e){var n=e.dailyForecasts,t=void 0===n?[]:n;return Object(r.jsx)(Ee,{children:t.map((function(e,n){return Object(r.jsx)(L,{title:e.day,desc:e.desc,minTemperature:e.minTemperature,maxTemperature:e.maxTemperature},"forecast-".concat(n))}))})},Ee=O.default.div(we());function Fe(){return(Fe=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function ke(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var Se=c.createElement("g",null,c.createElement("path",{d:"M142.119,19.245C123.68,9.39,99.36,12.383,84.077,26.134C68.72,12.394,44.361,9.433,25.984,19.245 C9.968,27.737,0,44,0,61.658c0,5.056,0.84,10.08,2.326,14.408c7.839,33.931,58.163,78.583,81.751,78.583 c23.537,0,73.823-44.656,81.527-78.008c1.652-4.908,2.495-9.92,2.495-14.988C168.1,44,158.141,27.731,142.119,19.245z  M154.157,73.396c-7.294,31.578-54.816,69.347-70.08,69.347c-16.987,0-63.271-39.567-70.303-69.921 c-1.256-3.661-1.86-7.409-1.86-11.157c0-13.241,7.526-25.478,19.638-31.902c5.64-3.021,12.056-4.58,18.542-4.58 c11.416,0,22.162,4.843,29.492,13.308l4.543,5.199l4.475-5.199c11.415-13.247,32.384-17.056,47.97-8.728 c12.112,6.424,19.639,18.661,19.639,31.902C156.188,65.406,155.58,69.155,154.157,73.396z M149.506,61.658 c0,3.114-0.523,6.244-1.564,9.324c-0.425,1.253-1.56,1.993-2.824,1.993c-0.317,0-0.63-0.022-0.952-0.131 c-1.564-0.526-2.386-2.222-1.86-3.776c0.837-2.473,1.286-4.98,1.286-7.41c0-8.891-5.049-17.083-13.172-21.362 c-3.852-2.057-8.021-3.114-12.397-3.114c-1.665,0-2.96-1.308-2.96-2.96c0-1.653,1.295-2.955,2.96-2.955 c5.341,0,10.45,1.253,15.188,3.776C143.257,40.366,149.506,50.556,149.506,61.658z"})),Ae=c.createElement("g",null),Te=c.createElement("g",null),ze=c.createElement("g",null),Be=c.createElement("g",null),Ie=c.createElement("g",null),Le=c.createElement("g",null),Ne=c.createElement("g",null),De=c.createElement("g",null),He=c.createElement("g",null),Ve=c.createElement("g",null),Re=c.createElement("g",null),Pe=c.createElement("g",null),Ye=c.createElement("g",null),We=c.createElement("g",null),Xe=c.createElement("g",null);function _e(e,n){var t=e.title,r=e.titleId,i=ke(e,["title","titleId"]);return c.createElement("svg",Fe({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"168.1px",height:"168.1px",viewBox:"0 0 168.1 168.1",style:{enableBackground:"new 0 0 168.1 168.1"},xmlSpace:"preserve",ref:n,"aria-labelledby":r},i),t?c.createElement("title",{id:r},t):null,Se,Ae,Te,ze,Be,Ie,Le,Ne,De,He,Ve,Re,Pe,Ye,We,Xe)}var Ge=c.forwardRef(_e);t.p;function Me(){var e=Object(g.a)(["\n  > "," {\n    fill: ",";\n\n    :hover {\n      fill: ",";\n    }\n  }\n"]);return Me=function(){return e},e}function Ze(){var e=Object(g.a)(["\n  width: 35px;\n  height: 35px;\n  transition: 0.3s;\n\n  :hover {\n    cursor: pointer;\n  }\n"]);return Ze=function(){return e},e}var qe=Object(O.default)(Ge)(Ze()),Ue=O.default.div(Me(),qe,(function(e){return e.isFavorite?e.theme.colors.favorite:e.theme.colors.secondaryBackground}),(function(e){return e.isFavorite?e.theme.colors.secondaryBackground:e.theme.colors.favorite})),Je=function(e){var n=e.isFavorite,t=e.onClick;return Object(r.jsx)(Ue,{isFavorite:n,onClick:t,children:Object(r.jsx)(qe,{})})},Ke=function(e){var n=e.cityName,t=e.isFavorite,c=e.addFavorite,i=e.removeFavorite;return Object(r.jsx)(Je,{isFavorite:t,onClick:function(){return t?i(n):c(n)}})},Qe=Object(u.b)((function(e){return{cityName:e.selectedCityName,isFavorite:e.favoriteCities.indexOf(e.selectedCityName)>-1}}),(function(e){return{addFavorite:function(n){return e(function(e){return{type:l,payload:e}}(n))},removeFavorite:function(n){return e(function(e){return{type:s,payload:e}}(n))}}}))(Ke),$e=t(24),en=function(e,n,t){var r=Object(c.useState)(n),i=Object(h.a)(r,2),o=i[0],a=i[1],u=Object(c.useState)(!1),l=Object(h.a)(u,2),s=l[0],f=l[1];return Object(c.useEffect)((function(){var r=function(){var n=Object($.a)(Q.a.mark((function n(){var r,c,i,o,u,l,s,d,b;return Q.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={q:e},n.prev=1,n.next=4,ae(r);case 4:return c=n.sent,n.next=7,c.json();case 7:return i=n.sent,o=Object(h.a)(i,1),u=o[0].Key,n.next=11,ue(u);case 11:return l=n.sent,n.next=14,l.json();case 14:s=n.sent,p=s.DailyForecasts,d=p.map((function(e){return{date:e.Date,day:w()(e.Date).format("dddd"),minTemperature:e.Temperature.Minimum.Value,maxTemperature:e.Temperature.Maximum.Value,desc:e.Day.IconPhrase}})),a(d),b=Object($e.a)({},e,d),t(b),n.next=24;break;case 21:n.prev=21,n.t0=n.catch(1),f(!0);case 24:case"end":return n.stop()}var p}),n,null,[[1,21]])})));return function(){return n.apply(this,arguments)}}();n.length||r()}),[e,t,n.length]),[o,s]};function nn(){var e=Object(g.a)(["\n  margin-top: 55px;\n  font-size: 24px;\n  color: ",";\n\n  @media ","{\n    font-size: 18px;\n  }\n"]);return nn=function(){return e},e}function tn(){var e=Object(g.a)(["\n  font-size: 36px;\n  color: ",";\n\n  @media ","{\n    font-size: 20px;\n  }\n"]);return tn=function(){return e},e}function rn(){var e=Object(g.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return rn=function(){return e},e}function cn(){var e=Object(g.a)(["\n  font-size: 28px;\n  color: ",";\n  background-color: ",";\n  padding: 5px;\n  border-radius: 2px;\n\n  @media ","{\n    font-size: 18px;\n  }\n"]);return cn=function(){return e},e}function on(){var e=Object(g.a)(["\n  border-radius: 3px;\n  background-color: ",";\n  color: ",";\n  margin-top: 20px;\n  padding: 20px 30px;\n"]);return on=function(){return e},e}var an=function(e){var n=e.cityName,t=e.cityWeather,i=e.addCityWeather,o=en(n,t,i),a=Object(h.a)(o,2),u=a[0],l=a[1],s=Object(c.useState)(l),f=Object(h.a)(s,2),d=f[0],b=f[1];return Object(c.useEffect)((function(){l&&b(!0)}),[l]),Object(r.jsxs)(un,{children:[Object(r.jsxs)(sn,{children:[Object(r.jsx)(ln,{children:n}),Object(r.jsx)(Qe,{})]}),Object(r.jsxs)(q,{isOpen:d,children:[Object(r.jsx)("div",{children:"Sorry, the server is not responding."}),Object(r.jsx)(J,{onClick:function(){return b(!1)},children:"I'll try again later"})]}),u.length?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(fn,{children:u[0].desc}),Object(r.jsx)(dn,{children:"This week's forecast"}),Object(r.jsx)(Ce,{dailyForecasts:u})]}):Object(r.jsx)("div",{children:l?"The server is not responding. Please try again later":"Loading..."})]})},un=O.default.div(on(),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.primaryBackground})),ln=O.default.h2(cn(),(function(e){return e.theme.colors.defaultFont}),(function(e){return e.theme.colors.secondary}),(function(e){return e.theme.mobile})),sn=O.default.div(rn()),fn=O.default.h3(tn(),(function(e){return e.theme.colors.primaryBackground}),(function(e){return e.theme.mobile})),dn=O.default.h4(nn(),(function(e){return e.theme.colors.primaryBackground}),(function(e){return e.theme.mobile})),bn=Object(u.b)((function(e){return{cityName:e.selectedCityName,cityWeather:e.citiesWeather[e.selectedCityName]||[]}}),(function(e){return{addCityWeather:function(n){return e(function(e){return{type:f,payload:e}}(n))}}}))(an);function pn(){var e=Object(g.a)(["\n  text-align: center;\n  padding: 30px;\n"]);return pn=function(){return e},e}var jn=function(){var e=Object(c.useState)(!1),n=Object(h.a)(e,2),t=n[0],i=n[1];return Object(r.jsxs)(mn,{children:[Object(r.jsxs)(q,{isOpen:t,children:[Object(r.jsx)("div",{children:"Please type the city name in English"}),Object(r.jsx)(J,{onClick:function(){return i(!1)},children:"I understand"})]}),Object(r.jsx)(ye,{onError:i}),Object(r.jsx)(bn,{})]})},mn=O.default.div(pn());function hn(){var e=Object(g.a)(["\n  border-radius: 50%;\n  margin-left: 5px;\n  background-color: ",";\n  color: ",";\n  font-weight: bold;\n  opacity: ",";\n  border: 2px solid ",";\n  font-size: 12px;\n\n  :hover {\n    cursor: pointer;\n  }\n\n  @media ","{\n    font-size: 10px;\n  }\n"]);return hn=function(){return e},e}var On=function(e){var n=e.onLabel,t=e.offLabel,c=e.isOn,i=e.onToggle;return Object(r.jsxs)("span",{children:[Object(r.jsx)(xn,{onClick:i,isOn:c,children:n}),Object(r.jsx)(xn,{onClick:function(){return i(!1)},isOn:!c,children:t})]})},xn=O.default.button(hn(),(function(e){return e.theme.colors.tertiary}),(function(e){return e.theme.colors.primaryBackground}),(function(e){return e.isOn?1:.5}),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.mobile}));function vn(){var e=Object(g.a)(["\n  font-size: 12px;\n  margin: 0;\n  color: ",";\n  font-weight: bold;\n\n  @media ","{\n    font-size: 10px;\n  }\n"]);return vn=function(){return e},e}function gn(){var e=Object(g.a)(["\n  width: 45px;\n\n  @media ","{\n    width: 35px;\n  }\n"]);return gn=function(){return e},e}function yn(){var e=Object(g.a)([""]);return yn=function(){return e},e}var wn=function(){return Object(r.jsxs)(Cn,{children:[Object(r.jsx)(En,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADa0lEQVRoge2Y32tTZxjHP09ykrQbrR3NqqEalsTRodhdzV3MCyvrRCbTi+m8amE3ijAHXin+B154I8z1Ygz0xk1BYTLYJrjd7tIirqypUN1qXYulyjTJ6Xl20USb8yM55zRJK8sHDiTP+5zn/X5P3vO+b15o06ZNm1cWHSOtF/hVvyK7Vhok7I06RhrlFpAFprEYkuNMNU6aP0IZsImvsCYmAhvwEF+h5SbqGtCv0VV3ciz8UK1HpFmFW4UR6q5kN+RS0NsNiRgUSjC3CPkZmF9ssMTaBDMQEXg3C9lN1fHOOGxJLl/5Gbh9D6xVjzx/kmo16hjpqoCbeDu5FAxmqus0cZ3wNLBitlkm2V1ffIXK8HrZy61mmXA14DpV5lLBKueqzKabZcLxDnjO8yufqB+SG158XIp28Xf/aHp206d3bubfX1Qx3gDmRLirqteNZ7Fvh7bL04YYwOIi4vKkErFglRPLpWdTnzExcI5ivA+go3wBpFRJgewxO80zv0yZJ4azxvfBOnEbQhFGwGUlLZSCVS6Y3MucYnzHpYr4WmwEvXwzXzodrBOPldh1GO0cWJ4myywsDXK/eJCFpUFKbCDGAj3R22yJX6cnOs7sw/cYf/2sVxdeKMiRIL+EZ3WHid4u2D2IapSJwpc8KH3iWbQ/doN//t1JMVb3ybvxqLNobN31jjzxk+w5jcpRphGGXgTmn0B+pq54gL9K+8OKB+h7Fi+N+k2uuZDJUaZXfn98f3Nd8Y1BDvjNDLSZe9B/LLiWcGzzmxjIwELPB8GlhKPXb2IgA6VEsn5SQ5B535m1Gn+a1L5IxDwBfAy8DfoaSNP+nNiYQ+QHi6WzezOJP7ySPMX8PGUeEvQboKsp8vxjgp4czsbPuzW6GiiL/86rfU1QPT6ci1+whx0Cy8NmkrV/8naeo8bAcE6qpnbHS1we8+tNPEAHYn5hDzoMCOxvjZ7gqLDPHnMYUPfznnWBKG/ZY6/UsYpA0R5zM5BvgZZQKEzYY24GbrRASyhEuGaPOQxYlnEe8LUXbzEPOwqGYx1wGNi7VR4J8jms/ky0gRRVOOL2J8f1Jf4wa1wV5LBAqJOCxqLTarHno0zsN7fWmluFH//UN42IeSYijCD0qLZka2EBTwX5HbGuRIldHMrI8xb026ZNmzb/R/4DCVIBE00wl24AAAAASUVORK5CYII=",alt:"log"}),Object(r.jsx)(Fn,{children:"Weather App"})]})},Cn=O.default.div(yn()),En=O.default.img(gn(),(function(e){return e.theme.mobile})),Fn=O.default.h1(vn(),(function(e){return e.theme.colors.primaryContrast}),(function(e){return e.theme.mobile}));function kn(){var e=Object(g.a)(["\n  display: flex;\n  align-items: center;\n"]);return kn=function(){return e},e}function Sn(){var e=Object(g.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 70px;\n  padding: 0 20px;\n  background-color: ",";\n\n  @media ","{\n    font-size: 10px;\n  }\n"]);return Sn=function(){return e},e}var An=function(e){var n=e.onSetIsHomeSelected,t=e.isFerenheit,c=e.setIsFerenheit,i=e.isThemeLight,o=e.setIsThemeLight;return Object(r.jsxs)(Tn,{children:[Object(r.jsx)(wn,{}),Object(r.jsxs)(zn,{children:[Object(r.jsx)(On,{onLabel:"\u2600",offLabel:"\u263e",onToggle:o,isOn:i}),Object(r.jsx)(On,{onLabel:"\xb0F",offLabel:"\xb0C",onToggle:c,isOn:t}),Object(r.jsx)(J,{onClick:n,children:"Home"}),Object(r.jsx)(J,{onClick:function(){return n(!1)},children:"Favorites"})]})]})},Tn=O.default.header(Sn(),(function(e){return e.theme.colors.secondaryBackground}),(function(e){return e.theme.mobile})),zn=O.default.div(kn()),Bn=Object(u.b)((function(e){return{isFerenheit:e.isFerenheit}}),(function(e){return{setIsFerenheit:function(n){return e(function(e){return{type:p,payload:e}}(n))}}}))(An),In={mobile:"only screen and (max-width: 420px)"},Ln=Object(te.a)(Object(te.a)({},In),{},{colors:Object(te.a)({},{primaryBackground:"#FFFFFF",secondaryBackground:"#F2F2F2",primary:"#F2CB05",primaryContrast:"#79C4F2",secondary:"#F2BF27",tertiary:"#D99441",defaultFont:"#0a0a0a",favorite:"#F5041F"})}),Nn=Object(te.a)(Object(te.a)({},In),{},{colors:Object(te.a)({},{primaryBackground:"#012840",secondaryBackground:"#024067",primary:"#F2C791",primaryContrast:"#849EBF",secondary:"#566D8C",tertiary:"#BFA288",defaultFont:"#f2faff",favorite:"#F5041F"})});function Dn(){var e=Object(g.a)(["\n  body {\n    margin: 0;\n    padding: 0;\n    font-family: 'Montserrat', sans-serif;\n    background-color: ",";\n    word-break: break-word;\n  }\n"]);return Dn=function(){return e},e}var Hn=Object(O.createGlobalStyle)(Dn(),(function(e){return e.theme.colors.primaryBackground})),Vn=function(e){var n=e.isHomeViewShown,t=e.setIsHomeViewShown,i=Object(c.useState)(!0),o=Object(h.a)(i,2),a=o[0],u=o[1];return Object(r.jsxs)(O.ThemeProvider,{theme:a?Ln:Nn,children:[Object(r.jsx)(Hn,{}),Object(r.jsxs)("div",{children:[Object(r.jsx)(Bn,{onSetIsHomeSelected:t,isThemeLight:a,setIsThemeLight:u}),n?Object(r.jsx)(jn,{}):Object(r.jsx)(W,{})]})]})},Rn=Object(u.b)((function(e){return{isHomeViewShown:e.isHomeViewShown}}),(function(e){return{setIsHomeViewShown:function(n){return e(m(n))}}}))(Vn),Pn=t(21),Yn=t(44),Wn={favoriteCities:[],selectedCityName:"Tel Aviv",citiesWeather:{},isHomeViewShown:!0,isFerenheit:!0};var Xn=Object(Pn.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Wn,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case l:return Object(te.a)(Object(te.a)({},e),{},{favoriteCities:[].concat(Object(Yn.a)(e.favoriteCities),[n.payload])});case s:return Object(te.a)(Object(te.a)({},e),{},{favoriteCities:e.favoriteCities.filter((function(e){return e!==n.payload}))});case f:return Object(te.a)(Object(te.a)({},e),{},{citiesWeather:Object(te.a)(Object(te.a)({},e.citiesWeather),n.payload)});case d:return Object(te.a)(Object(te.a)({},e),{},{selectedCityName:n.payload});case b:return Object(te.a)(Object(te.a)({},e),{},{isHomeViewShown:n.payload});case p:return Object(te.a)(Object(te.a)({},e),{},{isFerenheit:n.payload});default:return e}}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),_n=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,120)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,i=n.getLCP,o=n.getTTFB;t(e),r(e),c(e),i(e),o(e)}))};a.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(u.a,{store:Xn,children:Object(r.jsx)(Rn,{})})}),document.getElementById("root")),_n()}},[[119,1,2]]]);
//# sourceMappingURL=main.17f669f3.chunk.js.map