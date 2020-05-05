(window.webpackJsonp=window.webpackJsonp||[]).push([[564],{1564:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return E},Question:function(){return D},getLinkOrTextNode:function(){return Q}});n(4916),n(5306);var r=n(1942),i=n.n(r),a=n(2991),s=n.n(a),o=n(3109),u=n.n(o),c=(n(5666),n(1161)),l=n.n(c),d=n(7766),h=n.n(d),f=n(1222),p=n.n(f),v=n(4382),g=n.n(v),w=n(7672),b=n.n(w),z=n(2386),m=n(4383),_=n(77),A=n(3735),x=n(9067),S=m.h.getStore(),y=function(e){return(e||"").toLowerCase().replace(/\s/g,"")},k=(0,z.az)(D,{data:{question_level:"Loading",question:"Finding your question",hint:[]}}),E=function(e){function t(){for(var t,n,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return n=e.call.apply(e,h()(t=[this]).call(t,i))||this,b()(p()(n),"state",{fetchedQuestion:null,isFetching:!1,answer:"",isAwaitingAnswer:!1,incorrect:!1}),b()(p()(n),"onInput",(function(e){return n.setState({answer:y(e.target.value)})})),b()(p()(n),"_submit",l()(u().mark((function e(){var t,r,i,a,s;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.state.isAwaitingAnswer&&!n.state.incorrect){e.next=2;break}return e.abrupt("return");case 2:if(t=n.state.answer){e.next=5;break}return e.abrupt("return");case 5:return n.setState({isAwaitingAnswer:!0}),r={answer:t},e.next=9,(0,A.V)(_.hY.answerQuestion,r);case 9:if(i=e.sent,a=i.data,!(s=a.error||i.error)){e.next=14;break}return e.abrupt("return",n.setState({hasError:s,isFetching:!1,isAwaitingAnswer:!1}));case 14:if(!a.result){e.next=16;break}return e.abrupt("return",n.proceedToNextLevel());case 16:n.setState({isAwaitingAnswer:!1,incorrect:!0});case 17:case"end":return e.stop()}}),e)})))),b()(p()(n),"proceedToNextLevel",(function(){n.setState({fetchedQuestion:null,isAwaitingAnswer:!1,incorrect:!1,answer:""})})),b()(p()(n),"resetError",(function(){n.setState({incorrect:!1,hasError:null}),n.__focusAnswer()})),n}g()(t,e);var n=t.prototype;return n.componentDidMount=function(){if(!S.isLoggedIn)return(0,z.uX)("/login?next=/play");this.fetchQuestion()},n.componentDidUpdate=function(){if(null==this.state.fetchedQuestion)return this.fetchQuestion()},n.fetchQuestion=function(){var e=l()(u().mark((function e(){var t,n,r,i;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!S.userData.is_disqualified){e.next=2;break}return e.abrupt("return");case 2:if(!this.state.isFetching&&(S.eventBegan||S.userData.is_admin)){e.next=4;break}return e.abrupt("return");case 4:return this.setState({isFetching:!0}),e.next=7,(0,A.A)(_.hY.getQuestion);case 7:if(t=e.sent,!(n=t.error||t.data.error)){e.next=11;break}return e.abrupt("return",this.setState({hasError:n,isFetching:!1,fetchedQuestion:1}));case 11:r=t.data,i=S.userData.current_level,S.userData.current_level=r.question_level||i,this.setState({fetchedQuestion:r,isFetching:!1});case 15:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),n.__focusAnswer=function(){var e=document.getElementById("answer-input");e&&e.focus()},n.render=function(e,t){return t.hasError?(0,z.az)(x.OK,{errorHead:"Can't play",reasons:[t.hasError],close:this.resetError}):S.isLoggedIn&&S.userData.is_disqualified?(0,z.az)("div",{style:{fontSize:"3rem"},children:["Disqualified!",(0,z.az)("div",{children:(0,z.az)(z.A,{class:"clr hoverable",style:{marginTop:"20px"},href:"/why-am-i-disqualified",children:"Learn More"})})]}):S.eventBegan||S.isLoggedIn&&S.userData.is_admin?(0,z.az)(z.HY,{children:[t.incorrect&&(0,z.az)(z.HY,{children:[(0,z.az)("div",{class:"mask"}),(0,z.az)(x.OK,{errorHead:"Nope",reasons:["That is not the right answer"],close:this.resetError})]}),t.isFetching||!t.fetchedQuestion?k:(0,z.az)(D,{data:t.fetchedQuestion,value:t.answer,onInput:this.onInput,onSubmit:this._submit}),t.isAwaitingAnswer&&"Checking your answer...",(0,z.az)("div",{class:"hint-help",style:{margin:"auto",width:"70%"},children:[(0,z.az)("div",{children:"Find Hints On:"}),(0,z.az)(x.r8,{})]})]}):(0,z.az)("div",{style:{fontSize:"4rem"},children:"Not yet"})},t}(z.wA),I={autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:!1,style:{width:"90%",marginTop:"2rem"}};function D(e){var t,n=e.data,r=e.value,a=e.onInput,o=e.onSubmit,u=e.disableInput;return n.game_over?"You win (?)":(0,z.az)("form",{action:"javascript:",onSubmit:o,children:[(0,z.az)("div",{class:"question-num",children:["Question - ",n.question_level]}),(0,z.az)("div",{class:"question-card",children:[(0,z.az)("div",{children:Q(n.question)}),(0,z.az)("div",{class:"question-hint",children:n.hint&&!!n.hint.length&&s()(t=n.hint).call(t,(function(e,t){return(0,z.az)(q,{data:e,i:t})}))}),!u&&(0,z.az)("input",i()({id:"answer-input",class:"paper-input",placeholder:"Answer",onInput:a,value:r},I))]}),!u&&(0,z.az)("button",{class:"action-button heading-text sbm-button hoverable",children:"Submit"})]})}function Q(e){if("string"==typeof e)return e;var t=e.type,n=e.value;return"text"===t?n:"link"===t?(0,z.az)("a",{target:"_blank",href:n,style:{textDecoration:"underline",color:"var(--spec-color)",wordBreak:"break-all"},children:n}):void 0}function q(e){var t=e.data,n=e.i;return t&&!!t.value&&(0,z.az)("div",{children:["Hint "+(n+1)+": ",Q(t)]})}},9067:function(e,t,n){"use strict";n.d(t,{OK:function(){return g},Pt:function(){return w},GI:function(){return b},r8:function(){return z}});var r=n(2991),i=n.n(r),a=n(7766),s=n.n(a),o=n(1222),u=n.n(o),c=n(4382),l=n.n(c),d=n(7672),h=n.n(d),f=n(1942),p=n.n(f),v=n(2386);function g(e){return(0,v.az)(b,p()(p()({},e),{},{title:"Something Ain't Right"}))}var w=/([^\w]|_)/g,b=function(e){function t(){for(var t,n,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return n=e.call.apply(e,s()(t=[this]).call(t,i))||this,h()(u()(n),"__id",Math.random()),n}l()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=document.getElementById(""+this.__id);e&&e.focus()},n.render=function(e){var t;return(0,v.az)("div",{class:"app-popup",children:[(0,v.az)("div",{class:"heading-text clr app-popup-title",children:e.title}),(0,v.az)("div",{children:e.errorHead}),(0,v.az)("div",{class:"err-reasons",children:(0,v.az)("div",{children:i()(t=e.reasons||[]).call(t,(function(e){return(0,v.az)("div",{children:[" - ",e]})}))})}),(0,v.az)("button",{id:this.__id,class:"app-popup-close",onClick:e.close,children:"OK"})]})},t}(v.ZP);function z(){return(0,v.az)("div",{class:"social-link-container",children:[(0,v.az)("a",{target:"_blank",href:"https://discord.gg/fz8e6Df",class:"heading-text clr hoverable",children:"Discord"}),(0,v.az)("a",{target:"_blank",href:"https://twitter.com/halocrypt1",class:"heading-text clr hoverable",children:"Twitter"})]})}},5306:function(e,t,n){"use strict";var r=n(7007),i=n(9670),a=n(7908),s=n(7466),o=n(9958),u=n(4488),c=n(1530),l=n(7651),d=Math.max,h=Math.min,f=Math.floor,p=/\$([$&'`]|\d\d?|<[^>]*>)/g,v=/\$([$&'`]|\d\d?)/g;r("replace",2,(function(e,t,n,r){var g=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,w=r.REPLACE_KEEPS_$0,b=g?"$":"$0";return[function(n,r){var i=u(this),a=null==n?void 0:n[e];return void 0!==a?a.call(n,i,r):t.call(String(i),n,r)},function(e,r){if(!g&&w||"string"==typeof r&&-1===r.indexOf(b)){var a=n(t,e,this,r);if(a.done)return a.value}var u=i(e),f=String(this),p="function"==typeof r;p||(r=String(r));var v=u.global;if(v){var m=u.unicode;u.lastIndex=0}for(var _=[];;){var A=l(u,f);if(null===A)break;if(_.push(A),!v)break;""===String(A[0])&&(u.lastIndex=c(f,s(u.lastIndex),m))}for(var x,S="",y=0,k=0;k<_.length;k++){A=_[k];for(var E=String(A[0]),I=d(h(o(A.index),f.length),0),D=[],Q=1;Q<A.length;Q++)D.push(void 0===(x=A[Q])?x:String(x));var q=A.groups;if(p){var L=[E].concat(D,I,f);void 0!==q&&L.push(q);var T=String(r.apply(void 0,L))}else T=z(E,f,I,D,q,r);I>=y&&(S+=f.slice(y,I)+T,y=I+E.length)}return S+f.slice(y)}];function z(e,n,r,i,s,o){var u=r+e.length,c=i.length,l=v;return void 0!==s&&(s=a(s),l=p),t.call(o,l,(function(t,a){var o;switch(a.charAt(0)){case"$":return"$";case"&":return e;case"`":return n.slice(0,r);case"'":return n.slice(u);case"<":o=s[a.slice(1,-1)];break;default:var l=+a;if(0===l)return t;if(l>c){var d=f(l/10);return 0===d?t:d<=c?void 0===i[d-1]?a.charAt(1):i[d-1]+a.charAt(1):t}o=i[l-1]}return void 0===o?"":o}))}}))}}]);