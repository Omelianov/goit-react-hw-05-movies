"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[223],{342:function(n,t,e){e.d(t,{Z:function(){return P}});var r,i,o,a,c,s,u,p=e(7),d=e.n(p),l=e(689),v=e(87),h=e(17),m=e(168),f=e(686),x=e(624),g=f.Z.li(r||(r=(0,m.Z)(["\n  @media (max-width: 767px) {\n    margin-bottom: 50px;\n    border-radius: 5px;\n  }\n\n  @media (min-width: 768px) {\n    display: flex;\n    justify-content: center;\n    width: calc((100% - 4 * 10px) / 2);\n    margin: 10px;\n  }\n\n  @media (min-width: 1440px) {\n    width: calc((100% - 6 * 10px) / 3);\n  }\n"]))),w=f.Z.p(i||(i=(0,m.Z)(["\n  font-size: 20px;\n  font-weight: 700;\n  text-align: center;\n\n  color: ",";\n\n  width: 300px;\n  margin-bottom: 15px;\n\n  @media (min-width: 768px) {\n    width: 350px;\n  }\n"])),x.NN),b=f.Z.img(o||(o=(0,m.Z)(["\n  width: 300px;\n  margin-bottom: 15px;\n\n  @media (min-width: 768px) {\n    width: 350px;\n  }\n"]))),Z=f.Z.div(a||(a=(0,m.Z)(["\n  display: flex;\n  justify-content: space-between;\n  width: 300px;\n\n  @media (min-width: 768px) {\n    width: 350px;\n  }\n"]))),j=f.Z.p(c||(c=(0,m.Z)(["\n  color: ",";\n"])),x.Dq),y=f.Z.p(s||(s=(0,m.Z)(["\n  color: ",";\n"])),x.Dq),_=f.Z.span(u||(u=(0,m.Z)(["\n  font-weight: 700;\n"]))),k=e(184);function C(n){var t=n.id,e=n.title,r=n.poster,i=n.voteAverage,o=n.voteCount,a=(0,l.TH)();return(0,k.jsx)(g,{children:(0,k.jsxs)(v.rU,{to:"/movies/".concat(t),state:{from:a},children:[(0,k.jsx)(w,{children:e||"Movie without a title"}),(0,k.jsx)(b,{src:r?"https://image.tmdb.org/t/p/w500/".concat(r):h,alt:e}),(0,k.jsxs)(Z,{children:[(0,k.jsxs)(j,{children:["Vote average: ",(0,k.jsx)(_,{children:i})]}),(0,k.jsxs)(y,{children:["Vote count:",(0,k.jsxs)(_,{children:[" ",o]})]})]})]})})}C.prototype={id:d().number,title:d().string,poster:d().string,voteAverage:d().number,voteCount:d().number};var A,q=C,D=f.Z.ul(A||(A=(0,m.Z)(["\n  @media (min-width: 768px) {\n    display: flex;\n    flex-wrap: wrap;\n    margin: -10px;\n  }\n"])));function N(n){var t=n.movies;return(0,k.jsx)(D,{children:t.map((function(n){var t=n.id,e=n.title,r=n.poster,i=n.voteAverage,o=n.voteCount;return(0,k.jsx)(q,{id:t,title:e,poster:r,voteAverage:i,voteCount:o},t)}))})}N.prototype={movies:d().arrayOf(d().shape({id:d().number,title:d().string,poster:d().string,voteAverage:d().number,voteCount:d().number})).isRequired};var P=N},842:function(n,t,e){e.r(t),e.d(t,{default:function(){return v}});var r=e(439),i=e(791),o=e(861),a=e(687),c=e.n(a);function s(){return(s=(0,o.Z)(c().mark((function n(){var t,e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"2d0cc810611b68a053d01f920b18df6a","https://api.themoviedb.org/3/trending/all/day",t="?api_key=".concat("2d0cc810611b68a053d01f920b18df6a","&language=en-US"),n.next=5,fetch("".concat("https://api.themoviedb.org/3/trending/all/day").concat(t));case 5:return e=n.sent,n.next=8,e.json();case 8:return r=n.sent,n.abrupt("return",r);case 10:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var u=function(){return s.apply(this,arguments)},p=e(70),d=e(342),l=e(184);var v=function(){var n=(0,i.useState)(null),t=(0,r.Z)(n,2),e=t[0],o=t[1];return(0,i.useEffect)((function(){u().then((function(n){var t=n.results,e=[];t.map((function(n){var t={id:n.id,title:n.original_title,poster:n.poster_path,voteAverage:n.vote_average,voteCount:n.vote_count};return e.push(t)})),o(e)}))}),[]),e&&(0,l.jsx)(p.Z,{children:(0,l.jsx)(d.Z,{movies:e})})}},17:function(n){n.exports="data:image/jpeg;base64,"},861:function(n,t,e){function r(n,t,e,r,i,o,a){try{var c=n[o](a),s=c.value}catch(u){return void e(u)}c.done?t(s):Promise.resolve(s).then(r,i)}function i(n){return function(){var t=this,e=arguments;return new Promise((function(i,o){var a=n.apply(t,e);function c(n){r(a,i,o,c,s,"next",n)}function s(n){r(a,i,o,c,s,"throw",n)}c(void 0)}))}}e.d(t,{Z:function(){return i}})}}]);
//# sourceMappingURL=home-page.b8b4c00b.chunk.js.map