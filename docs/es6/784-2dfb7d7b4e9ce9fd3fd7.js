(window.webpackJsonp=window.webpackJsonp||[]).push([[784,326,564,499],{564:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>h,Question:()=>f,getLinkOrTextNode:()=>g});var s=i(386),a=i(804),r=i(77),n=i(649),o=i(67);function l(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}const d=a.h.getStore(),c=e=>(e||"").toLowerCase().replace(/\s/g,""),u=(0,s.az)(f,{data:{question_level:"Loading",question:"Finding your question",hint:[]}});class h extends s.wA{constructor(...e){var t;super(...e),t=this,l(this,"state",{fetchedQuestion:null,isFetching:!1,answer:"",isAwaitingAnswer:!1,incorrect:!1}),l(this,"onInput",e=>this.setState({answer:c(e.target.value)})),l(this,"_submit",(async function(){if(t.state.isAwaitingAnswer||t.state.incorrect)return;const e=t.state.answer;if(!e)return;t.setState({isAwaitingAnswer:!0});const i={answer:e},s=await(0,n.V)(r.hY.answerQuestion,i),a=s.data,o=a.error||s.error;return o?t.setState({hasError:o,isFetching:!1,isAwaitingAnswer:!1}):a.result?t.proceedToNextLevel():void t.setState({isAwaitingAnswer:!1,incorrect:!0})})),l(this,"proceedToNextLevel",()=>{this.setState({fetchedQuestion:null,isAwaitingAnswer:!1,incorrect:!1,answer:""})}),l(this,"resetError",()=>{this.setState({incorrect:!1,hasError:null}),this.__focusAnswer()})}componentDidMount(){if(!d.isLoggedIn)return(0,s.uX)("/login?next=/play");this.fetchQuestion()}componentDidUpdate(){if(null==this.state.fetchedQuestion)return this.fetchQuestion()}async fetchQuestion(){if(d.userData.is_disqualified)return;if(this.state.isFetching||!d.eventBegan&&!d.userData.is_admin)return;this.setState({isFetching:!0});const e=await(0,n.A)(r.hY.getQuestion),t=e.error||e.data.error;if(t)return this.setState({hasError:t,isFetching:!1,fetchedQuestion:1});const i=e.data,s=d.userData.current_level;d.userData.current_level=i.question_level||s,this.setState({fetchedQuestion:i,isFetching:!1})}__focusAnswer(){const e=document.getElementById("answer-input");e&&e.focus()}render(e,t){return t.hasError?(0,s.az)(o.OK,{errorHead:"Can't play",reasons:[t.hasError],close:this.resetError}):d.isLoggedIn&&d.userData.is_disqualified?(0,s.az)("div",{style:{fontSize:"3rem"},children:["Disqualified!",(0,s.az)("div",{children:(0,s.az)(s.A,{class:"clr hoverable",style:{marginTop:"20px"},href:"/why-am-i-disqualified",children:"Learn More"})})]}):d.eventBegan||d.isLoggedIn&&d.userData.is_admin?(0,s.az)(s.HY,{children:[t.incorrect&&(0,s.az)(s.HY,{children:[(0,s.az)("div",{class:"mask"}),(0,s.az)(o.OK,{errorHead:"Nope",reasons:["That is not the right answer"],close:this.resetError})]}),t.isFetching||!t.fetchedQuestion?u:(0,s.az)(f,{data:t.fetchedQuestion,value:t.answer,onInput:this.onInput,onSubmit:this._submit}),t.isAwaitingAnswer&&"Checking your answer...",(0,s.az)("div",{class:"hint-help",style:{margin:"auto",width:"70%"},children:[(0,s.az)("div",{children:"Find Hints On:"}),(0,s.az)(o.r8,{})]})]}):(0,s.az)("div",{style:{fontSize:"4rem"},children:"Not yet"})}}const p={autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:!1,style:{width:"90%",marginTop:"2rem"}};function f(e){const{data:t,value:i,onInput:a,onSubmit:r,disableInput:n}=e;return t.game_over?"You win (?)":(0,s.az)("form",{action:"javascript:",onSubmit:r,children:[(0,s.az)("div",{class:"question-num",children:["Question - ",t.question_level]}),(0,s.az)("div",{class:"question-card",children:[(0,s.az)("div",{children:g(t.question)}),(0,s.az)("div",{class:"question-hint",children:t.hint&&!!t.hint.length&&t.hint.map((e,t)=>(0,s.az)(v,{data:e,i:t}))}),!n&&(0,s.az)("input",{...Object.assign({id:"answer-input",class:"paper-input",placeholder:"Answer",onInput:a,value:i},p)})]}),!n&&(0,s.az)("button",{class:"action-button heading-text sbm-button hoverable",children:"Submit"})]})}function g(e){if("string"==typeof e)return e;const t=e.type,i=e.value;return"text"===t?i:"link"===t?(0,s.az)("a",{target:"_blank",href:i,style:{textDecoration:"underline",color:"var(--spec-color)",wordBreak:"break-all"},children:i}):void 0}function v(e){const t=e.data,i=e.i;return t&&!!t.value&&(0,s.az)("div",{children:[`Hint ${i+1}: `,g(t)]})}},326:(e,t,i)=>{"use strict";i.r(t);var s=i(386);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}const r={id:"Username",current_level:"Level",ig_user_id:"Insta",is_admin:"Player Type"};class n extends s.ZP{constructor(...e){super(...e),a(this,"__sendSuccess",()=>(this.state.value||"").trim()&&this.props.onUpdate(this.state.value)),a(this,"state",{value:this.props.value||""}),a(this,"onInput",e=>this.setState({value:e.target.value}))}render(e,t){const i=e.detailName,a=r[i]||i;return(0,s.az)(s.HY,{children:[(0,s.az)("div",{class:"mask"}),(0,s.az)("div",{class:"app-popup profile-info-updater",children:[(0,s.az)("div",{class:"heading-text clr",style:{marginTop:"5px",marginBottom:"10px"},children:["Edit ",a]}),e.progress&&(0,s.az)("div",{children:e.progress}),(0,s.az)("form",{action:"javascript:",onSubmit:this.__sendSuccess,children:[(0,s.az)("input",{type:"email"===i?i:"text",value:t.value,class:"paper-input",style:{width:"80%"},onInput:this.onInput,placeholder:a}),(0,s.az)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,s.az)("span",{class:"action-button hoverable update-action",onClick:this.__sendSuccess,children:"Update"}),(0,s.az)("span",{onClick:e.close,class:"action-button hoverable update-action",children:"Cancel"})]})]})]})]})}}var o=i(804),l=i(77),d=i(649),c=i(67),u=i(659),h=i(264);function p(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}i.d(t,{Profile:()=>m,default:()=>D});const f=o.h.getStore(),g={},v="heading-text hoverable landing-action-button";class m extends s.wA{constructor(...e){super(...e),p(this,"state",{isEditing:!1,fieldEdited:null,__receivedData:this.props.data}),p(this,"headerText","Profile"),p(this,"helpText","You can edit your email, instagram and school fields by clicking them"),p(this,"editableFieldsValidatorFunctions",{ig_user_id:h.oS,email:h.sQ,school:h.oS}),p(this,"requestEditUserDetail",e=>{!this.state.isEditing&&this._isAllowedToEditProfile()&&this.setState({isEditing:!0,fieldEdited:e})}),p(this,"syncProfileInfoWithServer",e=>{if(this.state.workProgress)return;const t=this.state.fieldEdited,i=this.editableFieldsValidatorFunctions[t](e);i.valid?(this.setState({workProgress:"Syncing new data with the server..."}),(0,d.V)(l.EA.edit,{user:this.state.__receivedData.id,field:t,new_value:(e||"").trim()}).then(this.__onResponse)):this.setState({error:i.error,workProgress:null})}),p(this,"__onResponse",e=>{if(!f.isLoggedIn)return;const t=e.error||e.data.error;if(t)return this.setState({error:t,workProgress:null});const i=e.data.user_data;this.setState({workProgress:null,isEditing:null,fieldEdited:null,__receivedData:i}),i.id===f.userData.id&&o.h.set("userData",i)}),p(this,"_getRequestEditUserDetail",e=>()=>this.requestEditUserDetail(e)),p(this,"closePrompt",()=>this.setState({isEditing:!1,fieldEdited:null})),p(this,"resetError",()=>this.setState({error:null}))}_getKeys(e){return["name","id","current_level","is_admin","school"].concat((0,u.Z)(e&&e.secure_data||g))}_getActionPanel(){const e=this.state.__receivedData,t=f.isLoggedIn&&f.userData.id;return(0,s.az)("div",{class:"action-buttons-profile",children:(0,s.az)(_,{data:e,currID:t})})}_isAllowedToEditProfile(){const e=f.userData?f.userData.id:null;return this.state.__receivedData.id===e}render(e,t){const i=t.__receivedData,a=i.secure_data||g;return(0,s.az)("div",{children:[t.isEditing&&(0,s.az)(s.HY,{children:[t.error&&(0,s.az)(c.OK,{errorHead:"Can't edit",close:this.resetError,reason:t.error}),(0,s.az)(n,{progress:this.state.workProgress,close:this.closePrompt,detailName:t.fieldEdited,onUpdate:this.syncProfileInfoWithServer,value:t.__receivedData[t.fieldEdited]||t.__receivedData.secure_data[t.fieldEdited]})]}),(0,s.az)("div",{class:"heading-text bfont",children:this.headerText}),(0,s.az)("div",{style:{fontSize:"0.96rem"},children:this._isAllowedToEditProfile()&&this.helpText}),(0,s.az)("div",{class:"prof-data-box",children:this._getKeys(i).map(e=>(0,s.az)(z,{editableFieldsValidatorFunctions:this.editableFieldsValidatorFunctions,x:e,getRequestEditUserDetail:this._getRequestEditUserDetail,data:i,sec:a}))}),this._getActionPanel()]})}}function _(e){const t=e.data,i=e.currID;return(0,s.az)(s.HY,{children:[y(t,i)&&(0,s.az)(s.A,{href:"/__admin__",class:v,children:"Admin Panel"}),t.id===i&&[!t.has_verified_email&&(0,s.az)(s.A,{href:"/verify-email",class:v,children:"Verify Email"}),(0,s.az)(s.A,{href:"/logout",class:v,children:"Logout"})]]})}function z(e){const{x:t,getRequestEditUserDetail:i,data:a,sec:n,editableFieldsValidatorFunctions:o}=e;return(0,s.az)("div",{onClick:t in o?i(t):null,class:"prof-container"+(t in o?" hoverable":""),children:[(0,s.az)("div",{class:"heading-text prof-field",children:r[t]||t}),(0,s.az)("div",{class:"prof-field",children:w(a,n,t)})]})}async function b(){const e=new URLSearchParams(s.F0.getQs).get("id");let t;const a=f.isLoggedIn&&e===f.userData.id,r=f.isLoggedIn&&f.userData.is_admin&&!a;return a?t=f.userData:(t=await(0,d.A)(`${l.EA.getUserDetails}?id=${e}`),t=t.data),t?()=>r?(0,s.az)(s.gr,{componentPromise:()=>i.e(499).then(i.bind(i,499)).then(e=>{const i=e.UserProfileEditor;return()=>(0,s.az)(i,{data:t})}),fallbackComponent:()=>"Loading admin js chunk"}):(0,s.az)(m,{data:t}):()=>(0,s.az)(c.OK,{errorHead:"Profile Error",reasons:["User does not exist"],close:()=>(0,s.uX)("/")})}function w(e,t,i){let s=i in e?e[i]:t[i];return"is_admin"===i&&(s=!0===s?"Team Halocrypt":"Player"),"boolean"==typeof s&&(s=""+s),null!=s&&""!==s||(s="N/A"),s}function y(e,t){return e.is_admin&&e.id===t}const S={id:"Loading..",current_level:"Infinity",has_verified_email:null,name:"??"},D=()=>new URLSearchParams(s.F0.getQs).get("id")?(0,s.az)(s.gr,{componentPromise:b,fallbackComponent:()=>(0,s.az)(m,{data:S})}):f.isLoggedIn?(0,s.uX)("/profile?id="+f.userData.id):(0,s.uX)("/login")},784:(e,t,i)=>{"use strict";i.r(t);var s=i(386),a=i(804);var r=i(77),n=i(649);const o=e=>e.data;function l(){return(0,n.A)(r.SA.getLatestQuestionNumber).then(o)}function d(){return(0,n.A)(r.SA.getAllQuestions).then(o)}const c=()=>"Loading data...";var u=i(67),h=i(564);function p(e){const t=e.propName,i=e.propVal,a=e.handleHint,r=e.toggleType,n=e.add;return(0,s.az)(s.HY,{children:[(0,s.az)("div",{class:"input-parent",children:[(0,s.az)("div",{class:"task-desc",children:[t,":"]}),(0,s.az)(v,{name:t,hint:i,handleHint:a(t),setType:r}),(0,s.az)(m,{add:n(t),name:t})]}),(0,s.az)("hr",{})]})}function f(e){return(0,s.az)("div",{class:"input-parent",children:[(0,s.az)("div",{class:"task-desc",children:"Answer:"}),(0,s.az)("input",{class:"paper-input",value:e.answer,placeholder:"Answer",onInput:e.handleAnswer})]})}function g(e){return(0,s.az)("div",{class:"input-parent",children:[(0,s.az)("div",{class:"task-desc",children:"Question:"}),(0,s.az)("div",{children:["Type ",e.question.type]}),(0,s.az)("input",{class:"paper-input",value:e.question.value,placeholder:"Question",onInput:e.handleQuestion}),(0,s.az)("div",{"data-type":e.question.type,class:"hoverable action-button",onClick:e.toggleQuestionType,children:"Toggle Type"})]})}function v(e){let{hint:t,handleHint:i,name:a}=e;return(!t||t.length<=0)&&(t=[DEFAULT_INPUT]),t.map((t,r)=>(0,s.az)("div",{class:"hints-parent-admin",children:[e.setType&&"Type: "+t.type,(0,s.az)("input",{"data-value":r,class:"paper-input","data-type":t.type,value:t.value,placeholder:`${a} #${r}`,onInput:i}),e.setType&&(0,s.az)("div",{"data-type":t.type,"data-value":r,"data-name":a,onClick:e.setType,class:"hoverable action-button",children:"Toggle Type"})]}))}function m(e){return(0,s.az)("img",{class:"hoverable plus back",src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMTkgMTNoLTZ2NmgtMnYtNkg1di0yaDZWNWgydjZoNnYyeiIgZmlsbD0iI2ZmZiIgLz48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PC9zdmc+",title:"add "+e.name,onClick:e.add})}function _(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}const z={type:"text",value:""},b={text:"link",link:"text"};class w extends s.wA{constructor(...e){super(...e),_(this,"state",{hasQuestionData:null,question:{...z},hint:[],special:[],answer:""}),_(this,"_handleQuestion",e=>{const t={value:e.target.value||"",type:this.state.question.type||"text"};this.syncProp("question",t)}),_(this,"_handleAnswer",e=>{const t=e.target.value||"";this.syncProp("answer",t)}),_(this,"componentDidUpdate",this.componentDidMount),_(this,"_handleHintLike",e=>t=>{const i=+t.target.dataset.value,s=t.target.value||"",a=t.target.dataset.type;this.setState(t=>{const r=[].slice.call(t[e]||[]);return r[i]={value:s,type:a},t[e]=r,this.props.propUpdater(e,r.filter(e=>e.value&&e.value.trim())),t})}),_(this,"_add",e=>()=>this.setState(t=>{const i=[].slice.call(t[e]);return i.push(z),t[e]=i,t})),_(this,"toggleHintType",e=>{const t=+e.target.dataset.value,i=e.target.dataset.type,s=e.target.dataset.name;this.setState(e=>{const a=e[s],r={...a[t]};return r.type=b[i],a[t]=r,this.props.propUpdater(s,a),e})}),_(this,"toggleQuestionType",e=>{const t=e.target.dataset.type,i=b[t],s={...this.state.question};s.type=i,this.syncProp("question",s)})}syncProp(e,t){this.setState({[e]:t}),this.props.propUpdater(e,t)}setDefaultValues(e){["hint","special"].forEach(t=>{e[t]&&e[t].length||(e[t]=[z],this.props.propUpdater(t,e[t]))})}componentDidMount(){if(this.state.hasQuestionData&&this.state.question_level===this.props.questionData.question_level)return;const e={...this.props.questionData};this.setDefaultValues(e),this.setState({hasQuestionData:!0,...e})}render(e,t){if(t.hasQuestionData)return(0,s.az)("form",{action:"javascript:",onSubmit:e.onSubmit,children:[(0,s.az)(g,{question:t.question,handleQuestion:this._handleQuestion,toggleQuestionType:this.toggleQuestionType}),(0,s.az)("hr",{}),(0,s.az)(f,{answer:t.answer,handleAnswer:this._handleAnswer}),(0,s.az)("hr",{}),["hint","special"].map(e=>(0,s.az)(p,{propName:e,propVal:t[e],handleHint:this._handleHintLike,toggleType:this.toggleHintType,add:this._add})),(0,s.az)("button",{class:"action-button hoverable",children:"Submit"})]})}}var y=i(682);function S(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class D extends s.wA{constructor(...e){super(...e),S(this,"url",r.SA.addQuestion),S(this,"state",{questionData:{question:{...z},hint:[],special_hint:[]}}),S(this,"_sendQuestion",()=>{this.setState({isLoading:!0}),(0,n.V)(this.url,this.state.questionData).then(e=>{if(e.error||e.data.error)return this.setState({isLoading:!1,error:e.error||e.data.error});this.props.close()})}),S(this,"_propUpdater",(e,t)=>this.setState(i=>(i.questionData[e]=t,i))),S(this,"_reset",()=>this.setState({error:!1}))}async getLastQuestionData(){this.setState({isLoading:!0,data:null,showLastQuestion:!1});const e=await l(),t=this.state.questionData;let i=e.question_number;null==i&&(i=-1),t.question_level=i+1,this.setState({data:!0,isLoading:!1,questionData:t})}componentDidMount(){this.getLastQuestionData()}render(e,t){if(t.isLoading)return(0,s.az)(c,{});if(t.data){if(t.error)return(0,s.az)(u.OK,{errorHead:"unknown error",reasons:["check your console?"],close:this._reset});if(!t.success)return(0,s.az)(E,{propUpdater:this._propUpdater,sendQuestion:this._sendQuestion,questionData:t.questionData})}}}const A=e=>(e+"").replace(u.Pt,"").toLowerCase(),k=(e,t)=>A(e).includes(t);class P extends D{constructor(...e){super(...e),S(this,"state",{questionData:null,isLoading:!1,data:!1,fetchedQuestions:null,filteredData:null,searchValue:""}),S(this,"url",r.SA.editQuestion),S(this,"_search",e=>{const t=e.target.value||"";let i;const s=this.state.fetchedQuestions;(0,y.uz)(()=>{i=t?s.filter(e=>function(e,t){const i=A(t),{question:s,question_level:a,hint:r,answer:n}=e;if(k(s.value,i)||k(a,i)||k(n,i))return!0;if(r&&r.length)for(const e of r)if(k(e.value||e,i))return!0;return!1}(e,t.trim())):s,this.setState({filteredData:i})}),this.setState({searchValue:t})}),S(this,"_setEditQuestion",e=>{const t=+e.target.dataset.bind,i=this.state.filteredData[t];this.setState({questionData:i})}),S(this,"closeEditingQuestion",()=>this.setState({questionData:null}))}async fetchAll(){this.setState({isLoading:!0});const e=await d();this.setState({data:!0,isLoading:!1,fetchedQuestions:e,filteredData:e})}componentDidMount(){this.fetchAll()}render(e,t){if(t.isLoading)return(0,s.az)(c,{});if(t.data){if(t.error)return(0,s.az)(u.OK,{errorHead:"unknown error",reasons:["check your console?"],close:this._reset});if(t.data){if(!t.questionData&&t.filteredData){const e=t.filteredData.length;return(0,s.az)("div",{children:[(0,s.az)("div",{style:{fontSize:"2rem"},children:["Result: ",e," ",U("Question",e)]}),(0,s.az)("div",{class:"search-box",children:[(0,s.az)("div",{style:{marginBottom:"10px"},children:"Search By Question/Question number/Answer/Hint Content"}),(0,s.az)("input",{value:t.searchValue,class:"paper-input",onInput:this._search})]}),(0,s.az)("hr",{}),(0,s.az)("div",{children:(0,s.az)(q,{filteredData:t.filteredData,setEditQuestion:this._setEditQuestion})})]})}return t.questionData?(0,s.az)(s.HY,{children:[(0,s.az)("div",{style:{textAlign:"left"},children:(0,s.az)("img",{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNi4wMSAxMUg0djJoMTIuMDF2M0wyMCAxMmwtMy45OS00eiIvPjwvc3ZnPg==",class:"back hoverable",title:"go back",onClick:this.closeEditingQuestion})}),(0,s.az)(E,{questionData:t.questionData,propUpdater:this._propUpdater,sendQuestion:this._sendQuestion})]}):void 0}}}}function q(e){return e.filteredData.map((t,i)=>(0,s.az)("div",{class:"c_u question-parent",children:[(0,s.az)(h.Question,{data:t,disableInput:!0}),(0,s.az)("button",{"data-bind":i,onClick:e.setEditQuestion,class:"action-button hoverable edit-q",children:["Edit Question ",t.question_level]})]}))}class E extends s.wA{constructor(...e){super(...e),S(this,"state",{showGameLivePreview:!0}),S(this,"_toggle",()=>this.setState(e=>({showGameLivePreview:!e.showGameLivePreview})))}render(e,t){const{propUpdater:i,sendQuestion:a,questionData:r}=e,n=t.showGameLivePreview;return(0,s.az)("div",{children:[(0,s.az)("button",{onClick:this._toggle,class:"heading-text last-q hoverable action-button",children:[n?"hide":"show"," Live Preview"]}),n&&(0,s.az)("div",{class:"last-question-card",children:(0,s.az)(h.Question,{data:r,disableInput:!0})}),(0,s.az)(w,{propUpdater:i,onSubmit:a,questionData:r})]})}}function U(e,t){return 1===t?e:e+"s"}class I extends s.wA{constructor(...e){super(...e),S(this,"state",{currentTask:null}),S(this,"closeWorkspaceTask",()=>this.setState({currentTask:null})),S(this,"setTask_addQuestion",()=>this.setState({currentTask:D})),S(this,"setTask_editQuestion",()=>this.setState({currentTask:P}))}render(e,t){if(null==t.currentTask)return(0,s.az)("div",{children:[(0,s.az)("span",{children:"Available Actions:"}),(0,s.az)("button",{class:"btn-act hoverable",onClick:this.setTask_addQuestion,children:"Add Question"}),(0,s.az)("button",{class:"btn-act hoverable",onClick:this.setTask_editQuestion,children:"Edit Question"})]});const i=this.state.currentTask;return(0,s.az)(i,{close:this.closeWorkspaceTask})}}var Q=i(499);function x(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class T extends s.wA{constructor(...e){super(...e),x(this,"state",{isFetching:!1,fetchedUsers:null,filteredUsers:null,query:""}),x(this,"execSearchQueryAsynchronously",e=>{const t=e.target.value||"",i=A(t);return this.state.fetchedUsers&&this.state.fetchedUsers.length?t?void(0,y.uz)(()=>{const e=this.state.fetchedUsers.filter(e=>{const t=e.name,s=e.id;return k(t,i)||k(s,i)});this.setState({error:!1,filteredUsers:e})}):this.setState({filteredUsers:this.state.fetchedUsers}):this.setState({filteredUsers:[]})}),x(this,"setUserEditingCandidate",e=>{const t=+e.target.dataset.eindex;this.setState({isEditingUserDetails:!0,currentUserDetails:this.state.filteredUsers[t],currentEditIndex:t})}),x(this,"_closeEditor",e=>{let t=this.state.fetchedUsers;e&&(t=(this.state.fetchedUsers||[]).filter(t=>t!==e)),this.setState({isEditingUserDetails:!1,fetchedUsers:t,filteredUsers:t})})}fetchUsers(){this.state.isFetching||(this.setState({isFetching:!0}),(0,n.A)(r.SA.getAllUsers).then(e=>{const t=e.error||e.data.error;if(t)return this.setState({error:t});const i=e.data;this.setState({isFetching:!1,error:!1,fetchedUsers:i,filteredUsers:i})}))}componentDidMount(){this.fetchUsers()}render(e,t){if(t.isFetching)return"fetching all user data...";if(t.error)return(0,s.az)("div",{children:["An error occured: ",(0,s.az)("div",{children:t.error})]});if(t.isEditingUserDetails)return(0,s.az)(s.HY,{children:[(0,s.az)("span",{class:"hoverable action-button act",onClick:this._closeEditor,children:"Go Back to Users List"}),(0,s.az)(Q.UserProfileEditor,{closeProfileEditor:this._closeEditor,data:t.currentUserDetails,propUpdateCallback:this._syncProps})]});const i=this.state.filteredUsers&&this.state.filteredUsers.length;return(0,s.az)("div",{children:[(0,s.az)("div",{style:{fontSize:"0.96rem"},children:"Click a user to edit"}),(0,s.az)("div",{class:"input-parent",children:(0,s.az)("input",{placeholder:"Search by username or name",class:"paper-input",onInput:this.execSearchQueryAsynchronously})}),t.filteredUsers&&(0,s.az)(s.HY,{children:[(0,s.az)("div",{style:{fontSize:"2rem"},children:["Results: ",i," ",U("User",i)]}),(0,s.az)("div",{class:"search-results heading-text",children:t.filteredUsers.map((e,t)=>(0,s.az)("div",{"data-eindex":t,class:"search-result-element hoverable",onClick:this.setUserEditingCandidate,children:[e.id," ( ",e.name," )"]}))})]})]})}}function C(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}i.d(t,{default:()=>H});const L=a.h.getStore();function H(){return L.isLoggedIn&&L.userData.is_admin?(0,s.az)("div",{class:"admin-data-panel",children:(0,s.az)(F,{})}):(0,s.az)("div",{style:{fontSize:"8rem"},children:"NO"})}class F extends s.wA{constructor(...e){super(...e),C(this,"state",{currentTab:"questions"}),C(this,"setTab",e=>this.setState({currentTab:e?e.target.dataset.tab:null}))}render(e,t){const i="questions"===t.currentTab,a="users"===t.currentTab;t.currentTab;return(0,s.az)(s.HY,{children:[(0,s.az)("div",{class:"btn-box",children:["questions","users","logs"].map(e=>t.currentTab!==e&&(0,s.az)("span",{onClick:this.setTab,"data-tab":e,class:"admin-button-tab",children:e}))}),(0,s.az)("div",{style:{fontSize:"2rem"},children:["Workspace: ",t.currentTab||"Not selected"]}),i&&(0,s.az)(I,{}),a&&(0,s.az)(T,{})]})}}},499:(e,t,i)=>{"use strict";i.r(t),i.d(t,{UserProfileEditor:()=>p});var s=i(386),a=i(326),r=i(659),n=i(264),o=i(649),l=i(77),d=i(804),c=i(67);function u(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}const h=d.h.getStore();class p extends a.Profile{constructor(...e){super(...e),u(this,"helpText","Click on a property to edit"),u(this,"editableFieldsValidatorFunctions",{name:n.u2,ig_user_id:n.oS,email:n.sQ,school:n.oS,current_level:n.If,last_question_answered_at:n.If}),u(this,"_promiseErrorHandler",()=>this.setState({error:"Unknown error occured",isEditing:!0})),u(this,"__confirmAction",e=>{const t=e.target.dataset.action;this.setState({confirmAction:t,isConfirmed:!1})}),u(this,"__executeConfirmedAction",()=>{const e=this.state.confirmAction;if(this.setState({isConfirmed:!0,workProgress:"Making irreversible changes to the database...."}),"delete"===e)return(0,o.V)(l.SA.deleteUser,{user:this.state.__receivedData.id,field:this.state.fieldEdited}).then(e=>{const t=e.error||e.data.error;if(t)return this.setState({error:t,workProgress:null,confirmAction:null});this.props.closeProfileEditor(this.state.__receivedData)}).catch(this._promiseErrorHandler);if("qualification-toggle"==e){const e=this.state.__receivedData.is_disqualified?"requalify":"disqualify",t=l.SA[e];return(0,o.V)(t,{user:this.state.__receivedData.id}).then(this.__cxResponses).catch(this._promiseErrorHandler)}}),u(this,"__cxResponses",e=>{this.setState({confirmAction:null}),this.__onResponse(e)}),u(this,"syncProfileInfoWithServer",e=>{const t=this.state.fieldEdited;"last_question_answered_at"!==t&&"current_level"!==t||(e=e.length>1?e.replace(/^0+/,""):e);const i=this.editableFieldsValidatorFunctions[t](e);if(!i.valid)return this.setState({error:i.error,workProgress:null,isEditing:!0});this.setState({workProgress:"Syncing new data with the server..."}),(0,o.V)(l.SA.adminEditUserData,{user:this.state.__receivedData.id,field:t,new_value:(e||"").trim()}).then(this.__onResponse).catch(this._promiseErrorHandler)}),u(this,"__closeAction",()=>this.setState({confirmAction:null,isConfirmed:null}))}_getKeys(e){return["id","has_verified_email"].concat((0,r.Z)(this.editableFieldsValidatorFunctions))}_isAllowedToEditProfile(){return!0}_getActionPanel(){if(!h.isLoggedIn)return;const e=this.state.__receivedData;return e&&e.id!==h.userData.id?(0,s.az)("div",{children:[(0,s.az)("div",{class:"heading-text clr",style:{fontSize:"2rem"},children:"DANGER SECTION"}),(0,s.az)("span",{"data-action":"delete",class:"hoverable action-button act",onClick:this.__confirmAction,children:"Delete Account"}),(0,s.az)("span",{"data-action":"qualification-toggle",class:"hoverable action-button act",onClick:this.__confirmAction,children:[e.is_disqualified?"Requalify":"Disqualify"," Account"]})]}):void 0}render(e,t){const i=t.confirmAction;if(!i)return super.render(e,t);{const e=t.__receivedData,a=e.is_disqualified,r=e.id,n=e.name;if(!t.isConfirmed)return(0,s.az)(s.HY,{children:[(0,s.az)("div",{class:"mask",onClick:this.__closeAction}),(0,s.az)(c.GI,{close:this.__executeConfirmedAction,title:"Woah there..",errorHead:(0,s.az)("span",{children:["Are you sure you want to",(0,s.az)("span",{style:{color:"red"},children:" "+("delete"===i?i:a?"Requalify":"Disqualify").toUpperCase()}),` ${r}( ${n} ) ?`]})}),";"]});if(t.workProgress)return(0,s.az)("div",{children:t.workProgress})}}}},67:(e,t,i)=>{"use strict";i.d(t,{OK:()=>a,Pt:()=>r,GI:()=>n,r8:()=>o});var s=i(386);function a(e){return(0,s.az)(n,{...Object.assign({},e,{title:"Something Ain't Right"})})}const r=/([^\w]|_)/g;class n extends s.ZP{constructor(...e){var t,i,s;super(...e),t=this,i="__id",s=Math.random(),i in t?Object.defineProperty(t,i,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[i]=s}componentDidMount(){const e=document.getElementById(""+this.__id);e&&e.focus()}render(e){return(0,s.az)("div",{class:"app-popup",children:[(0,s.az)("div",{class:"heading-text clr app-popup-title",children:e.title}),(0,s.az)("div",{children:e.errorHead}),(0,s.az)("div",{class:"err-reasons",children:(0,s.az)("div",{children:(e.reasons||[]).map(e=>(0,s.az)("div",{children:[" - ",e]}))})}),(0,s.az)("button",{id:this.__id,class:"app-popup-close",onClick:e.close,children:"OK"})]})}}function o(){return(0,s.az)("div",{class:"social-link-container",children:[(0,s.az)("a",{target:"_blank",href:"https://discord.gg/fz8e6Df",class:"heading-text clr hoverable",children:"Discord"}),(0,s.az)("a",{target:"_blank",href:"https://twitter.com/halocrypt1",class:"heading-text clr hoverable",children:"Twitter"})]})}},682:(e,t,i)=>{"use strict";i.d(t,{uz:()=>a,ru:()=>r,r3:()=>n});var s=i(67);const a=window.requestIdleCallback||window.requestAnimationFrame||window.Promise&&Promise.prototype.then.bind(Promise.resolve())||setTimeout,r=e=>(e+"").replace(s.Pt,"").toLowerCase(),n=(e,t)=>r(e).includes(t)},264:(e,t,i)=>{"use strict";i.d(t,{Vy:()=>a,sQ:()=>n,oS:()=>o,If:()=>l,Bj:()=>d,RX:()=>c,u2:()=>u,R0:()=>h});var s=i(67);const a={valid:!0},r={valid:!1};function n(e){return e?a:{error:"Value required"}}const o=()=>a;function l(e){return(t=+(t=e))==t?a:r;var t}function d(e){return e.length<5?{error:h.pwLength}:a}function c(e){const t=e.length;return t<3||t>30?{error:h.userLength}:e!==e.replace(s.Pt,"")?{error:h.invalidCharacters}:a}function u(e){const t=e.length;return!t||t>30?{error:h.nameLength}:a}const h={userLength:"Username should be between 3 and 30 characters",invalidCharacters:"Username and name can not contain special characters",invalidEmail:"Invalid email",nameLength:"Name should be less than 30 characters and cannot be blank",pwLength:"Password should be longer than 5 characters",pwNomatch:"Passwords do not match"}}}]);