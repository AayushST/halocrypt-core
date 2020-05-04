(window.webpackJsonp=window.webpackJsonp||[]).push([[564],{564:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>h,Question:()=>g,getLinkOrTextNode:()=>f});var n=i(386),r=i(804),s=i(77),a=i(649),o=i(67);function c(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}const l=r.h.getStore(),d=e=>(e||"").toLowerCase().replace(/\s/g,""),u=(0,n.az)(g,{data:{question_level:"Loading",question:"Finding your question",hint:[]}});class h extends n.wA{constructor(...e){var t;super(...e),t=this,c(this,"state",{fetchedQuestion:null,isFetching:!1,answer:"",isAwaitingAnswer:!1,incorrect:!1}),c(this,"onInput",e=>this.setState({answer:d(e.target.value)})),c(this,"_submit",(async function(){if(t.state.isAwaitingAnswer||t.state.incorrect)return;const e=t.state.answer;if(!e)return;t.setState({isAwaitingAnswer:!0});const i={answer:e},n=await(0,a.V)(s.hY.answerQuestion,i),r=n.data,o=r.error||n.error;return o?t.setState({hasError:o,isFetching:!1,isAwaitingAnswer:!1}):r.result?t.proceedToNextLevel():void t.setState({isAwaitingAnswer:!1,incorrect:!0})})),c(this,"proceedToNextLevel",()=>{this.setState({fetchedQuestion:null,isAwaitingAnswer:!1,incorrect:!1,answer:""})}),c(this,"resetError",()=>{this.setState({incorrect:!1,hasError:null}),this.__focusAnswer()})}componentDidMount(){if(!l.isLoggedIn)return(0,n.uX)("/login?next=/play");this.fetchQuestion()}componentDidUpdate(){if(null==this.state.fetchedQuestion)return this.fetchQuestion()}async fetchQuestion(){if(l.userData.is_disqualified)return;if(this.state.isFetching||!l.eventBegan&&!l.userData.is_admin)return;this.setState({isFetching:!0});const e=await(0,a.A)(s.hY.getQuestion),t=e.error||e.data.error;if(t)return this.setState({hasError:t,isFetching:!1,fetchedQuestion:1});const i=e.data;this.setState({fetchedQuestion:i,isFetching:!1})}__focusAnswer(){const e=document.getElementById("answer-input");e&&e.focus()}render(e,t){return t.hasError?(0,n.az)(o.OK,{errorHead:"Can't play",reasons:[t.hasError],close:this.resetError}):l.isLoggedIn&&l.userData.is_disqualified?(0,n.az)("div",{style:{fontSize:"3rem"},children:["Disqualified!",(0,n.az)("div",{children:(0,n.az)(n.A,{class:"clr hoverable",style:{marginTop:"20px"},href:"/why-am-i-disqualified",children:"Learn More"})})]}):l.eventBegan||l.isLoggedIn&&l.userData.is_admin?(0,n.az)(n.HY,{children:[t.incorrect&&(0,n.az)(n.HY,{children:[(0,n.az)("div",{class:"mask"}),(0,n.az)(o.OK,{errorHead:"Nope",reasons:["That is not the right answer"],close:this.resetError})]}),t.isFetching||!t.fetchedQuestion?u:(0,n.az)(g,{data:t.fetchedQuestion,value:t.answer,onInput:this.onInput,onSubmit:this._submit}),t.isAwaitingAnswer&&"Checking your answer...",(0,n.az)("div",{class:"hint-help",style:{margin:"auto",width:"70%"},children:[(0,n.az)("div",{children:"Find Hints On:"}),(0,n.az)(o.r8,{})]})]}):(0,n.az)("div",{style:{fontSize:"4rem"},children:"Not yet"})}}const p={autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:!1,style:{width:"90%",marginTop:"2rem"}};function g(e){const{data:t,value:i,onInput:r,onSubmit:s,disableInput:a}=e;return t.game_over?"You win (?)":(0,n.az)("form",{action:"javascript:",onSubmit:s,children:[(0,n.az)("div",{class:"question-num",children:["Question - ",t.question_level]}),(0,n.az)("div",{class:"question-card",children:[(0,n.az)("div",{children:f(t.question)}),(0,n.az)("div",{class:"question-hint",children:t.hint&&!!t.hint.length&&t.hint.map((e,t)=>(0,n.az)(w,{data:e,i:t}))}),!a&&(0,n.az)("input",{...Object.assign({id:"answer-input",class:"paper-input",placeholder:"Answer",onInput:r,value:i},p)})]}),!a&&(0,n.az)("button",{class:"action-button heading-text sbm-button hoverable",children:"Submit"})]})}function f(e){if("string"==typeof e)return e;const t=e.type,i=e.value;return"text"===t?i:"link"===t?(0,n.az)("a",{target:"_blank",href:i,style:{textDecoration:"underline",color:"var(--spec-color)",wordBreak:"break-all"},children:i}):void 0}function w(e){const t=e.data,i=e.i;return t&&!!t.value&&(0,n.az)("div",{children:[`Hint ${i+1}: `,f(t)]})}},67:(e,t,i)=>{"use strict";i.d(t,{OK:()=>r,Pt:()=>s,GI:()=>a,r8:()=>o});var n=i(386);function r(e){return(0,n.az)(a,{...Object.assign({},e,{title:"Something Ain't Right"})})}const s=/([^\w]|_)/g;class a extends n.ZP{constructor(...e){var t,i,n;super(...e),t=this,i="__id",n=Math.random(),i in t?Object.defineProperty(t,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[i]=n}componentDidMount(){const e=document.getElementById(""+this.__id);e&&e.focus()}render(e){return(0,n.az)("div",{class:"app-popup",children:[(0,n.az)("div",{class:"heading-text clr app-popup-title",children:e.title}),(0,n.az)("div",{children:e.errorHead}),(0,n.az)("div",{class:"err-reasons",children:(0,n.az)("div",{children:(e.reasons||[]).map(e=>(0,n.az)("div",{children:[" - ",e]}))})}),(0,n.az)("button",{id:this.__id,class:"app-popup-close",onClick:e.close,children:"OK"})]})}}function o(){return(0,n.az)("div",{class:"social-link-container",children:[(0,n.az)("a",{target:"_blank",href:"https://discord.gg/fz8e6Df",class:"heading-text clr hoverable",children:"Discord"}),(0,n.az)("a",{target:"_blank",href:"https://twitter.com/halocrypt1",class:"heading-text clr hoverable",children:"Twitter"})]})}}}]);