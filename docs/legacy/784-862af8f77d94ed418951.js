(window.webpackJsonp=window.webpackJsonp||[]).push([[784,326,564,499],{1564:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return E},Question:function(){return I},getLinkOrTextNode:function(){return q}});n(4916),n(5306);var r=n(1942),a=n.n(r),i=n(2991),s=n.n(i),o=n(3109),u=n.n(o),l=(n(5666),n(1161)),c=n.n(l),d=n(7766),h=n.n(d),f=n(1222),p=n.n(f),v=n(4382),g=n.n(v),_=n(7672),m=n.n(_),y=n(2386),z=n(4383),b=n(77),w=n(3735),S=n(9067),A=z.h.getStore(),k=function(e){return(e||"").toLowerCase().replace(/\s/g,"")},D=(0,y.az)(I,{data:{question_level:"Loading",question:"Finding your question",hint:[]}}),E=function(e){function t(){for(var t,n,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=e.call.apply(e,h()(t=[this]).call(t,a))||this,m()(p()(n),"state",{fetchedQuestion:null,isFetching:!1,answer:"",isAwaitingAnswer:!1,incorrect:!1}),m()(p()(n),"onInput",(function(e){return n.setState({answer:k(e.target.value)})})),m()(p()(n),"_submit",c()(u().mark((function e(){var t,r,a,i,s;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.state.isAwaitingAnswer&&!n.state.incorrect){e.next=2;break}return e.abrupt("return");case 2:if(t=n.state.answer){e.next=5;break}return e.abrupt("return");case 5:return n.setState({isAwaitingAnswer:!0}),r={answer:t},e.next=9,(0,w.V)(b.hY.answerQuestion,r);case 9:if(a=e.sent,i=a.data,!(s=i.error||a.error)){e.next=14;break}return e.abrupt("return",n.setState({hasError:s,isFetching:!1,isAwaitingAnswer:!1}));case 14:if(!i.result){e.next=16;break}return e.abrupt("return",n.proceedToNextLevel());case 16:n.setState({isAwaitingAnswer:!1,incorrect:!0});case 17:case"end":return e.stop()}}),e)})))),m()(p()(n),"proceedToNextLevel",(function(){n.setState({fetchedQuestion:null,isAwaitingAnswer:!1,incorrect:!1,answer:""})})),m()(p()(n),"resetError",(function(){n.setState({incorrect:!1,hasError:null}),n.__focusAnswer()})),n}g()(t,e);var n=t.prototype;return n.componentDidMount=function(){if(!A.isLoggedIn)return(0,y.uX)("/login?next=/play");this.fetchQuestion()},n.componentDidUpdate=function(){if(null==this.state.fetchedQuestion)return this.fetchQuestion()},n.fetchQuestion=function(){var e=c()(u().mark((function e(){var t,n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!A.userData.is_disqualified){e.next=2;break}return e.abrupt("return");case 2:if(!this.state.isFetching&&(A.eventBegan||A.userData.is_admin)){e.next=4;break}return e.abrupt("return");case 4:return this.setState({isFetching:!0}),e.next=7,(0,w.A)(b.hY.getQuestion);case 7:if(t=e.sent,!(n=t.error||t.data.error)){e.next=11;break}return e.abrupt("return",this.setState({hasError:n,isFetching:!1,fetchedQuestion:1}));case 11:r=t.data,this.setState({fetchedQuestion:r,isFetching:!1});case 13:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),n.__focusAnswer=function(){var e=document.getElementById("answer-input");e&&e.focus()},n.render=function(e,t){return t.hasError?(0,y.az)(S.OK,{errorHead:"Can't play",reasons:[t.hasError],close:this.resetError}):A.isLoggedIn&&A.userData.is_disqualified?(0,y.az)("div",{style:{fontSize:"3rem"},children:["Disqualified!",(0,y.az)("div",{children:(0,y.az)(y.A,{class:"clr hoverable",style:{marginTop:"20px"},href:"/why-am-i-disqualified",children:"Learn More"})})]}):A.eventBegan||A.isLoggedIn&&A.userData.is_admin?(0,y.az)(y.HY,{children:[t.incorrect&&(0,y.az)(y.HY,{children:[(0,y.az)("div",{class:"mask"}),(0,y.az)(S.OK,{errorHead:"Nope",reasons:["That is not the right answer"],close:this.resetError})]}),t.isFetching||!t.fetchedQuestion?D:(0,y.az)(I,{data:t.fetchedQuestion,value:t.answer,onInput:this.onInput,onSubmit:this._submit}),t.isAwaitingAnswer&&"Checking your answer...",(0,y.az)("div",{class:"hint-help",style:{margin:"auto",width:"70%"},children:[(0,y.az)("div",{children:"Find Hints On:"}),(0,y.az)(S.r8,{})]})]}):(0,y.az)("div",{style:{fontSize:"4rem"},children:"Not yet"})},t}(y.wA),x={autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:!1,style:{width:"90%",marginTop:"2rem"}};function I(e){var t,n=e.data,r=e.value,i=e.onInput,o=e.onSubmit,u=e.disableInput;return n.game_over?"You win (?)":(0,y.az)("form",{action:"javascript:",onSubmit:o,children:[(0,y.az)("div",{class:"question-num",children:["Question - ",n.question_level]}),(0,y.az)("div",{class:"question-card",children:[(0,y.az)("div",{children:q(n.question)}),(0,y.az)("div",{class:"question-hint",children:n.hint&&!!n.hint.length&&s()(t=n.hint).call(t,(function(e,t){return(0,y.az)(U,{data:e,i:t})}))}),!u&&(0,y.az)("input",a()({id:"answer-input",class:"paper-input",placeholder:"Answer",onInput:i,value:r},x))]}),!u&&(0,y.az)("button",{class:"action-button heading-text sbm-button hoverable",children:"Submit"})]})}function q(e){if("string"==typeof e)return e;var t=e.type,n=e.value;return"text"===t?n:"link"===t?(0,y.az)("a",{target:"_blank",href:n,style:{textDecoration:"underline",color:"var(--spec-color)",wordBreak:"break-all"},children:n}):void 0}function U(e){var t=e.data,n=e.i;return t&&!!t.value&&(0,y.az)("div",{children:["Hint "+(n+1)+": ",q(t)]})}},1326:function(e,t,n){"use strict";n.r(t);n(1539),n(8674);var r=n(3109),a=n.n(r),i=(n(5666),n(4435)),s=n.n(i),o=n(1161),u=n.n(o),l=n(2991),c=n.n(l),d=n(5843),h=n.n(d),f=n(7766),p=n.n(f),v=n(1222),g=n.n(v),_=n(4382),m=n.n(_),y=n(7672),z=n.n(y),b=n(2386),w={id:"Username",current_level:"Level",ig_user_id:"Insta",is_admin:"Player Type"},S=function(e){function t(){for(var t,n,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=e.call.apply(e,p()(t=[this]).call(t,a))||this,z()(g()(n),"__sendSuccess",(function(){var e;return h()(e=n.state.value||"").call(e)&&n.props.onUpdate(n.state.value)})),z()(g()(n),"state",{value:n.props.value||""}),z()(g()(n),"onInput",(function(e){return n.setState({value:e.target.value})})),n}return m()(t,e),t.prototype.render=function(e,t){var n=e.detailName,r=w[n]||n;return(0,b.az)(b.HY,{children:[(0,b.az)("div",{class:"mask"}),(0,b.az)("div",{class:"app-popup profile-info-updater",children:[(0,b.az)("div",{class:"heading-text clr",style:{marginTop:"5px",marginBottom:"10px"},children:["Edit ",r]}),e.progress&&(0,b.az)("div",{children:e.progress}),(0,b.az)("form",{action:"javascript:",onSubmit:this.__sendSuccess,children:[(0,b.az)("input",{type:"email"===n?n:"text",value:t.value,class:"paper-input",style:{width:"80%"},onInput:this.onInput,placeholder:r}),(0,b.az)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,b.az)("span",{class:"action-button hoverable update-action",onClick:this.__sendSuccess,children:"Update"}),(0,b.az)("span",{onClick:e.close,class:"action-button hoverable update-action",children:"Cancel"})]})]})]})]})},t}(b.ZP),A=n(4383),k=n(77),D=n(3735),E=n(9067),x=n(3659),I=n(9264);n.d(t,{Profile:function(){return T},default:function(){return R}});var q=A.h.getStore(),U={},P="heading-text hoverable landing-action-button",T=function(e){function t(){for(var t,n,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=e.call.apply(e,p()(t=[this]).call(t,a))||this,z()(g()(n),"state",{isEditing:!1,fieldEdited:null,__receivedData:n.props.data}),z()(g()(n),"headerText","Profile"),z()(g()(n),"helpText","You can edit your email, instagram and school fields by clicking them"),z()(g()(n),"editableFieldsValidatorFunctions",{ig_user_id:I.oS,email:I.sQ,school:I.oS}),z()(g()(n),"requestEditUserDetail",(function(e){!n.state.isEditing&&n._isAllowedToEditProfile()&&n.setState({isEditing:!0,fieldEdited:e})})),z()(g()(n),"syncProfileInfoWithServer",(function(e){if(!n.state.workProgress){var t,r=n.state.fieldEdited,a=n.editableFieldsValidatorFunctions[r](e);if(a.valid)n.setState({workProgress:"Syncing new data with the server..."}),(0,D.V)(k.EA.edit,{user:n.state.__receivedData.id,field:r,new_value:h()(t=e||"").call(t)}).then(n.__onResponse);else n.setState({error:a.error,workProgress:null})}})),z()(g()(n),"__onResponse",(function(e){if(q.isLoggedIn){var t=e.error||e.data.error;if(t)return n.setState({error:t,workProgress:null});var r=e.data.user_data;n.setState({workProgress:null,isEditing:null,fieldEdited:null,__receivedData:r}),r.id===q.userData.id&&A.h.set("userData",r)}})),z()(g()(n),"_getRequestEditUserDetail",(function(e){return function(){return n.requestEditUserDetail(e)}})),z()(g()(n),"closePrompt",(function(){return n.setState({isEditing:!1,fieldEdited:null})})),z()(g()(n),"resetError",(function(){return n.setState({error:null})})),n}m()(t,e);var n=t.prototype;return n._getKeys=function(e){var t;return p()(t=["name","id","current_level","is_admin","school"]).call(t,(0,x.Z)(e&&e.secure_data||U))},n._getActionPanel=function(){var e=this.state.__receivedData,t=q.isLoggedIn&&q.userData.id;return(0,b.az)("div",{class:"action-buttons-profile",children:(0,b.az)(Q,{data:e,currID:t})})},n._isAllowedToEditProfile=function(){var e=q.userData?q.userData.id:null;return this.state.__receivedData.id===e},n.render=function(e,t){var n,r=this,a=t.__receivedData,i=a.secure_data||U;return(0,b.az)("div",{children:[t.isEditing&&(0,b.az)(b.HY,{children:[t.error&&(0,b.az)(E.OK,{errorHead:"Can't edit",close:this.resetError,reason:t.error}),(0,b.az)(S,{progress:this.state.workProgress,close:this.closePrompt,detailName:t.fieldEdited,onUpdate:this.syncProfileInfoWithServer,value:t.__receivedData[t.fieldEdited]||t.__receivedData.secure_data[t.fieldEdited]})]}),(0,b.az)("div",{class:"heading-text bfont",children:this.headerText}),(0,b.az)("div",{style:{fontSize:"0.96rem"},children:this._isAllowedToEditProfile()&&this.helpText}),(0,b.az)("div",{class:"prof-data-box",children:c()(n=this._getKeys(a)).call(n,(function(e){return(0,b.az)(C,{editableFieldsValidatorFunctions:r.editableFieldsValidatorFunctions,x:e,getRequestEditUserDetail:r._getRequestEditUserDetail,data:a,sec:i})}))}),this._getActionPanel()]})},t}(b.wA);function Q(e){var t=e.data,n=e.currID;return(0,b.az)(b.HY,{children:[N(t,n)&&(0,b.az)(b.A,{href:"/__admin__",class:P,children:"Admin Panel"}),t.id===n&&[!t.has_verified_email&&(0,b.az)(b.A,{href:"/verify-email",class:P,children:"Verify Email"}),(0,b.az)(b.A,{href:"/logout",class:P,children:"Logout"})]]})}function C(e){var t=e.x,n=e.getRequestEditUserDetail,r=e.data,a=e.sec,i=e.editableFieldsValidatorFunctions;return(0,b.az)("div",{onClick:t in i?n(t):null,class:"prof-container"+(t in i?" hoverable":""),children:[(0,b.az)("div",{class:"heading-text prof-field",children:w[t]||t}),(0,b.az)("div",{class:"prof-field",children:F(r,a,t)})]})}function L(){return H.apply(this,arguments)}function H(){return(H=u()(a().mark((function e(){var t,r,i,o,u;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=new(s())(b.F0.getQs),r=t.get("id"),!(o=q.isLoggedIn&&r===q.userData.id)){e.next=7;break}i=q.userData,e.next=11;break;case 7:return e.next=9,(0,D.A)(k.EA.getUserDetails+"?id="+r);case 9:i=(i=e.sent).data;case 11:if(u=q.isLoggedIn&&q.userData.is_admin&&!o,!i){e.next=14;break}return e.abrupt("return",(function(){return u?(0,b.az)(b.gr,{componentPromise:function(){return n.e(499).then(n.bind(n,1499)).then((function(e){var t=e.UserProfileEditor;return function(){return(0,b.az)(t,{data:i})}}))},fallbackComponent:function(){return"Loading admin js chunk"}}):(0,b.az)(T,{data:i})}));case 14:return e.abrupt("return",(function(){return(0,b.az)(E.OK,{errorHead:"Profile Error",reasons:["User does not exist"],close:function(){return(0,b.uX)("/")}})}));case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(e,t,n){var r=n in e?e[n]:t[n];return"is_admin"===n&&(r=!0===r?"Team Halocrypt":"Player"),"boolean"==typeof r&&(r=""+r),null!=r&&""!==r||(r="N/A"),r}function N(e,t){return e.is_admin&&e.id===t}var M={id:"Loading..",current_level:"Infinity",has_verified_email:null,name:"??"},R=function(){return new(s())(b.F0.getQs).get("id")?(0,b.az)(b.gr,{componentPromise:L,fallbackComponent:function(){return(0,b.az)(T,{data:M})}}):q.isLoggedIn?(0,b.uX)("/profile?id="+q.userData.id):(0,b.uX)("/login")}},784:function(e,t,n){"use strict";n.r(t);var r=n(2991),a=n.n(r),i=n(7766),s=n.n(i),o=n(1222),u=n.n(o),l=n(4382),c=n.n(l),d=n(7672),h=n.n(d),f=n(2386),p=n(4383),v=(n(8309),n(1539),n(4916),n(9714),n(5306),n(6976)),g=n.n(v),_=n(1511),m=n.n(_),y=n(9996),z=n.n(y),b=n(5420),w=n.n(b),S=n(6419),A=n.n(S),k=n(3649),D=n.n(k),E=n(4103),x=n.n(E),I=n(5843),q=n.n(I),U=n(116),P=n.n(U),T=n(8580),Q=n.n(T),C=n(3109),L=n.n(C),H=(n(5666),n(1161)),F=n.n(H),N=n(1942),M=n.n(N),R=n(77),V=n(3735),Z=function(e){return e.data};function j(){return(0,V.A)(R.SA.getLatestQuestionNumber).then(Z)}function Y(){return(0,V.A)(R.SA.getAllQuestions).then(Z)}var B=function(){return"Loading data..."},G=n(9067),O=n(1564),W=n(8914),K=n.n(W);function $(e){var t=e.propName,n=e.propVal,r=e.handleHint,a=e.toggleType,i=e.add;return(0,f.az)(f.HY,{children:[(0,f.az)("div",{class:"input-parent",children:[(0,f.az)("div",{class:"task-desc",children:[t,":"]}),(0,f.az)(ee,{name:t,hint:n,handleHint:r(t),setType:a}),(0,f.az)(te,{add:i(t),name:t})]}),(0,f.az)("hr",{})]})}function X(e){return(0,f.az)("div",{class:"input-parent",children:[(0,f.az)("div",{class:"task-desc",children:"Answer:"}),(0,f.az)("input",{class:"paper-input",value:e.answer,placeholder:"Answer",onInput:e.handleAnswer})]})}function J(e){return(0,f.az)("div",{class:"input-parent",children:[(0,f.az)("div",{class:"task-desc",children:"Question:"}),(0,f.az)("div",{children:["Type ",e.question.type]}),(0,f.az)("input",{class:"paper-input",value:e.question.value,placeholder:"Question",onInput:e.handleQuestion}),(0,f.az)("div",{"data-type":e.question.type,class:"hoverable action-button",onClick:e.toggleQuestionType,children:"Toggle Type"})]})}function ee(e){var t=e.hint,n=e.handleHint,r=e.name;return(!t||t.length<=0)&&(t=[DEFAULT_INPUT]),a()(t).call(t,(function(t,a){return(0,f.az)("div",{class:"hints-parent-admin",children:[e.setType&&"Type: "+t.type,(0,f.az)("input",{"data-value":a,class:"paper-input","data-type":t.type,value:t.value,placeholder:r+" #"+a,onInput:n}),e.setType&&(0,f.az)("div",{"data-type":t.type,"data-value":a,"data-name":r,onClick:e.setType,class:"hoverable action-button",children:"Toggle Type"})]})}))}function te(e){return(0,f.az)("img",{class:"hoverable plus back",src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMTkgMTNoLTZ2NmgtMnYtNkg1di0yaDZWNWgydjZoNnYyeiIgZmlsbD0iI2ZmZiIgLz48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PC9zdmc+",title:"add "+e.name,onClick:e.add})}var ne={type:"text",value:""},re={text:"link",link:"text"},ae=function(e){function t(){for(var t,n,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=e.call.apply(e,s()(t=[this]).call(t,a))||this,h()(u()(n),"state",{hasQuestionData:null,question:M()({},ne),hint:[],special:[],answer:""}),h()(u()(n),"_handleQuestion",(function(e){var t={value:e.target.value||"",type:n.state.question.type||"text"};n.syncProp("question",t)})),h()(u()(n),"_handleAnswer",(function(e){var t=e.target.value||"";n.syncProp("answer",t)})),h()(u()(n),"componentDidUpdate",n.componentDidMount),h()(u()(n),"_handleHintLike",(function(e){return function(t){var r=+t.target.dataset.value,a=t.target.value||"",i=t.target.dataset.type;n.setState((function(t){var s=D()([]).call(t[e]||[]);return s[r]={value:a,type:i},t[e]=s,n.props.propUpdater(e,P()(s).call(s,(function(e){var t;return e.value&&q()(t=e.value).call(t)}))),t}))}})),h()(u()(n),"_add",(function(e){return function(){return n.setState((function(t){var n=D()([]).call(t[e]);return n.push(ne),t[e]=n,t}))}})),h()(u()(n),"toggleHintType",(function(e){var t=+e.target.dataset.value,r=e.target.dataset.type,a=e.target.dataset.name;n.setState((function(e){var i=e[a],s=M()({},i[t]);return s.type=re[r],i[t]=s,n.props.propUpdater(a,i),e}))})),h()(u()(n),"toggleQuestionType",(function(e){var t=e.target.dataset.type,r=re[t],a=M()({},n.state.question);a.type=r,n.syncProp("question",a)})),n}c()(t,e);var n=t.prototype;return n.syncProp=function(e,t){var n;this.setState(((n={})[e]=t,n)),this.props.propUpdater(e,t)},n.setDefaultValues=function(e){var t=this,n=["hint","special"];K()(n).call(n,(function(n){e[n]&&e[n].length||(e[n]=[ne],t.props.propUpdater(n,e[n]))}))},n.componentDidMount=function(){if(!this.state.hasQuestionData||this.state.question_level!==this.props.questionData.question_level){var e=M()({},this.props.questionData);this.setDefaultValues(e),this.setState(M()({hasQuestionData:!0},e))}},n.render=function(e,t){var n,r=this;if(t.hasQuestionData)return(0,f.az)("form",{action:"javascript:",onSubmit:e.onSubmit,children:[(0,f.az)(J,{question:t.question,handleQuestion:this._handleQuestion,toggleQuestionType:this.toggleQuestionType}),(0,f.az)("hr",{}),(0,f.az)(X,{answer:t.answer,handleAnswer:this._handleAnswer}),(0,f.az)("hr",{}),a()(n=["hint","special"]).call(n,(function(e){return(0,f.az)($,{propName:e,propVal:t[e],handleHint:r._handleHintLike,toggleType:r.toggleHintType,add:r._add})})),(0,f.az)("button",{class:"action-button hoverable",children:"Submit"})]})},t}(f.wA),ie=n(5682);function se(e){var t,n=0;if(void 0===w()||null==z()(e)){if(m()(e)||(e=function(e,t){var n;if(!e)return;if("string"==typeof e)return oe(e,t);var r=D()(n=Object.prototype.toString.call(e)).call(n,8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return A()(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return oe(e,t)}(e)))return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return n=g()(e),x()(t=n.next).call(t,n)}function oe(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var ue=function(e){function t(){for(var t,n,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=e.call.apply(e,s()(t=[this]).call(t,a))||this,h()(u()(n),"url",R.SA.addQuestion),h()(u()(n),"state",{questionData:{question:M()({},ne),hint:[],special_hint:[]}}),h()(u()(n),"_sendQuestion",(function(){n.setState({isLoading:!0}),(0,V.V)(n.url,n.state.questionData).then((function(e){if(e.error||e.data.error)return n.setState({isLoading:!1,error:e.error||e.data.error});n.props.close()}))})),h()(u()(n),"_propUpdater",(function(e,t){return n.setState((function(n){return n.questionData[e]=t,n}))})),h()(u()(n),"_reset",(function(){return n.setState({error:!1})})),n}c()(t,e);var n=t.prototype;return n.getLastQuestionData=function(){var e=F()(L().mark((function e(){var t,n,r;return L().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0,data:null,showLastQuestion:!1}),e.next=3,j();case 3:t=e.sent,n=this.state.questionData,null==(r=t.question_number)&&(r=-1),n.question_level=r+1,this.setState({data:!0,isLoading:!1,questionData:n});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),n.componentDidMount=function(){this.getLastQuestionData()},n.render=function(e,t){if(t.isLoading)return(0,f.az)(B,{});if(t.data){if(t.error)return(0,f.az)(G.OK,{errorHead:"unknown error",reasons:["check your console?"],close:this._reset});if(!t.success)return(0,f.az)(pe,{propUpdater:this._propUpdater,sendQuestion:this._sendQuestion,questionData:t.questionData})}},t}(f.wA),le=function(e){return(e+"").replace(G.Pt,"").toLowerCase()},ce=function(e,t){var n;return Q()(n=le(e)).call(n,t)};function de(e,t){var n=le(t),r=e.question,a=e.question_level,i=e.hint,s=e.answer;if(ce(r.value,n)||ce(a,n)||ce(s,n))return!0;if(i&&i.length)for(var o,u=se(i);!(o=u()).done;){var l=o.value;if(ce(l.value||l,n))return!0}return!1}var he=function(e){function t(){for(var t,n,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=e.call.apply(e,s()(t=[this]).call(t,a))||this,h()(u()(n),"state",{questionData:null,isLoading:!1,data:!1,fetchedQuestions:null,filteredData:null,searchValue:""}),h()(u()(n),"url",R.SA.editQuestion),h()(u()(n),"_search",(function(e){var t,r=e.target.value||"",a=n.state.fetchedQuestions;(0,ie.uz)((function(){t=r?P()(a).call(a,(function(e){return de(e,q()(r).call(r))})):a,n.setState({filteredData:t})})),n.setState({searchValue:r})})),h()(u()(n),"_setEditQuestion",(function(e){var t=+x()(e.target.dataset),r=n.state.filteredData[t];n.setState({questionData:r})})),h()(u()(n),"closeEditingQuestion",(function(){return n.setState({questionData:null})})),n}c()(t,e);var n=t.prototype;return n.fetchAll=function(){var e=F()(L().mark((function e(){var t;return L().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),e.next=3,Y();case 3:t=e.sent,this.setState({data:!0,isLoading:!1,fetchedQuestions:t,filteredData:t});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),n.componentDidMount=function(){this.fetchAll()},n.render=function(e,t){if(t.isLoading)return(0,f.az)(B,{});if(t.data){if(t.error)return(0,f.az)(G.OK,{errorHead:"unknown error",reasons:["check your console?"],close:this._reset});if(t.data){if(!t.questionData&&t.filteredData){var n=t.filteredData.length;return(0,f.az)("div",{children:[(0,f.az)("div",{style:{fontSize:"2rem"},children:["Result: ",n," ",ve("Question",n)]}),(0,f.az)("div",{class:"search-box",children:[(0,f.az)("div",{style:{marginBottom:"10px"},children:"Search By Question/Question number/Answer/Hint Content"}),(0,f.az)("input",{value:t.searchValue,class:"paper-input",onInput:this._search})]}),(0,f.az)("hr",{}),(0,f.az)("div",{children:(0,f.az)(fe,{filteredData:t.filteredData,setEditQuestion:this._setEditQuestion})})]})}return t.questionData?(0,f.az)(f.HY,{children:[(0,f.az)("div",{style:{textAlign:"left"},children:(0,f.az)("img",{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNi4wMSAxMUg0djJoMTIuMDF2M0wyMCAxMmwtMy45OS00eiIvPjwvc3ZnPg==",class:"back hoverable",title:"go back",onClick:this.closeEditingQuestion})}),(0,f.az)(pe,{questionData:t.questionData,propUpdater:this._propUpdater,sendQuestion:this._sendQuestion})]}):void 0}}},t}(ue);function fe(e){var t;return a()(t=e.filteredData).call(t,(function(t,n){return(0,f.az)("div",{class:"c_u question-parent",children:[(0,f.az)(O.Question,{data:t,disableInput:!0}),(0,f.az)("button",{"data-bind":n,onClick:e.setEditQuestion,class:"action-button hoverable edit-q",children:["Edit Question ",t.question_level]})]})}))}var pe=function(e){function t(){for(var t,n,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=e.call.apply(e,s()(t=[this]).call(t,a))||this,h()(u()(n),"state",{showGameLivePreview:!0}),h()(u()(n),"_toggle",(function(){return n.setState((function(e){return{showGameLivePreview:!e.showGameLivePreview}}))})),n}return c()(t,e),t.prototype.render=function(e,t){var n=e.propUpdater,r=e.sendQuestion,a=e.questionData,i=t.showGameLivePreview;return(0,f.az)("div",{children:[(0,f.az)("button",{onClick:this._toggle,class:"heading-text last-q hoverable action-button",children:[i?"hide":"show"," Live Preview"]}),i&&(0,f.az)("div",{class:"last-question-card",children:(0,f.az)(O.Question,{data:a,disableInput:!0})}),(0,f.az)(ae,{propUpdater:n,onSubmit:r,questionData:a})]})},t}(f.wA);function ve(e,t){return 1===t?e:e+"s"}var ge=function(e){function t(){for(var t,n,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=e.call.apply(e,s()(t=[this]).call(t,a))||this,h()(u()(n),"state",{currentTask:null}),h()(u()(n),"closeWorkspaceTask",(function(){return n.setState({currentTask:null})})),h()(u()(n),"setTask_addQuestion",(function(){return n.setState({currentTask:ue})})),h()(u()(n),"setTask_editQuestion",(function(){return n.setState({currentTask:he})})),n}return c()(t,e),t.prototype.render=function(e,t){if(null==t.currentTask)return(0,f.az)("div",{children:[(0,f.az)("span",{children:"Available Actions:"}),(0,f.az)("button",{class:"btn-act hoverable",onClick:this.setTask_addQuestion,children:"Add Question"}),(0,f.az)("button",{class:"btn-act hoverable",onClick:this.setTask_editQuestion,children:"Edit Question"})]});var n=this.state.currentTask;return(0,f.az)(n,{close:this.closeWorkspaceTask})},t}(f.wA),_e=n(1499),me=function(e){function t(){for(var t,n,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=e.call.apply(e,s()(t=[this]).call(t,a))||this,h()(u()(n),"state",{isFetching:!1,fetchedUsers:null,filteredUsers:null,query:""}),h()(u()(n),"execSearchQueryAsynchronously",(function(e){var t=e.target.value||"",r=le(t);return n.state.fetchedUsers&&n.state.fetchedUsers.length?t?void(0,ie.uz)((function(){var e,t=P()(e=n.state.fetchedUsers).call(e,(function(e){var t=e.name,n=e.id;return ce(t,r)||ce(n,r)}));n.setState({error:!1,filteredUsers:t})})):n.setState({filteredUsers:n.state.fetchedUsers}):n.setState({filteredUsers:[]})})),h()(u()(n),"setUserEditingCandidate",(function(e){var t=+e.target.dataset.eindex;n.setState({isEditingUserDetails:!0,currentUserDetails:n.state.filteredUsers[t],currentEditIndex:t})})),h()(u()(n),"_closeEditor",(function(e){var t,r=n.state.fetchedUsers;e&&(r=P()(t=n.state.fetchedUsers||[]).call(t,(function(t){return t!==e})));n.setState({isEditingUserDetails:!1,fetchedUsers:r,filteredUsers:r})})),n}c()(t,e);var n=t.prototype;return n.fetchUsers=function(){var e=this;this.state.isFetching||(this.setState({isFetching:!0}),(0,V.A)(R.SA.getAllUsers).then((function(t){var n=t.error||t.data.error;if(n)return e.setState({error:n});var r=t.data;e.setState({isFetching:!1,error:!1,fetchedUsers:r,filteredUsers:r})})))},n.componentDidMount=function(){this.fetchUsers()},n.render=function(e,t){var n,r=this;if(t.isFetching)return"fetching all user data...";if(t.error)return(0,f.az)("div",{children:["An error occured: ",(0,f.az)("div",{children:t.error})]});if(t.isEditingUserDetails)return(0,f.az)(f.HY,{children:[(0,f.az)("span",{class:"hoverable action-button act",onClick:this._closeEditor,children:"Go Back to Users List"}),(0,f.az)(_e.UserProfileEditor,{closeProfileEditor:this._closeEditor,data:t.currentUserDetails,propUpdateCallback:this._syncProps})]});var i=this.state.filteredUsers&&this.state.filteredUsers.length;return(0,f.az)("div",{children:[(0,f.az)("div",{style:{fontSize:"0.96rem"},children:"Click a user to edit"}),(0,f.az)("div",{class:"input-parent",children:(0,f.az)("input",{placeholder:"Search by username or name",class:"paper-input",onInput:this.execSearchQueryAsynchronously})}),t.filteredUsers&&(0,f.az)(f.HY,{children:[(0,f.az)("div",{style:{fontSize:"2rem"},children:["Results: ",i," ",ve("User",i)]}),(0,f.az)("div",{class:"search-results heading-text",children:a()(n=t.filteredUsers).call(n,(function(e,t){return(0,f.az)("div",{"data-eindex":t,class:"search-result-element hoverable",onClick:r.setUserEditingCandidate,children:[e.id," ( ",e.name," )"]})}))})]})]})},t}(f.wA);n.d(t,{default:function(){return ze}});var ye=p.h.getStore();function ze(){return ye.isLoggedIn&&ye.userData.is_admin?(0,f.az)("div",{class:"admin-data-panel",children:(0,f.az)(be,{})}):(0,f.az)("div",{style:{fontSize:"8rem"},children:"NO"})}var be=function(e){function t(){for(var t,n,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=e.call.apply(e,s()(t=[this]).call(t,a))||this,h()(u()(n),"state",{currentTab:"questions"}),h()(u()(n),"setTab",(function(e){return n.setState({currentTab:e?e.target.dataset.tab:null})})),n}return c()(t,e),t.prototype.render=function(e,t){var n,r=this,i="questions"===t.currentTab,s="users"===t.currentTab;t.currentTab;return(0,f.az)(f.HY,{children:[(0,f.az)("div",{class:"btn-box",children:a()(n=["questions","users","logs"]).call(n,(function(e){return t.currentTab!==e&&(0,f.az)("span",{onClick:r.setTab,"data-tab":e,class:"admin-button-tab",children:e})}))}),(0,f.az)("div",{style:{fontSize:"2rem"},children:["Workspace: ",t.currentTab||"Not selected"]}),i&&(0,f.az)(ge,{}),s&&(0,f.az)(me,{})]})},t}(f.wA)},1499:function(e,t,n){"use strict";n.r(t),n.d(t,{UserProfileEditor:function(){return w}});n(8309),n(4916),n(5306);var r=n(5843),a=n.n(r),i=n(7766),s=n.n(i),o=n(1222),u=n.n(o),l=n(4382),c=n.n(l),d=n(7672),h=n.n(d),f=n(2386),p=n(1326),v=n(3659),g=n(9264),_=n(3735),m=n(77),y=n(4383),z=n(9067),b=y.h.getStore(),w=function(e){function t(){for(var t,n,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return n=e.call.apply(e,s()(t=[this]).call(t,i))||this,h()(u()(n),"helpText","Click on a property to edit"),h()(u()(n),"editableFieldsValidatorFunctions",{name:g.u2,ig_user_id:g.oS,email:g.sQ,school:g.oS,current_level:g.If,last_question_answered_at:g.If}),h()(u()(n),"_promiseErrorHandler",(function(){return n.setState({error:"Unknown error occured",isEditing:!0})})),h()(u()(n),"__confirmAction",(function(e){var t=e.target.dataset.action;n.setState({confirmAction:t,isConfirmed:!1})})),h()(u()(n),"__executeConfirmedAction",(function(){var e=n.state.confirmAction;if(n.setState({isConfirmed:!0,workProgress:"Making irreversible changes to the database...."}),"delete"===e)return(0,_.V)(m.SA.deleteUser,{user:n.state.__receivedData.id,field:n.state.fieldEdited}).then((function(e){var t=e.error||e.data.error;if(t)return n.setState({error:t,workProgress:null,confirmAction:null});n.props.closeProfileEditor(n.state.__receivedData)})).catch(n._promiseErrorHandler);if("qualification-toggle"==e){var t=n.state.__receivedData.is_disqualified?"requalify":"disqualify",r=m.SA[t];return(0,_.V)(r,{user:n.state.__receivedData.id}).then(n.__cxResponses).catch(n._promiseErrorHandler)}})),h()(u()(n),"__cxResponses",(function(e){n.setState({confirmAction:null}),n.__onResponse(e)})),h()(u()(n),"syncProfileInfoWithServer",(function(e){var t=n.state.fieldEdited;"last_question_answered_at"!==t&&"current_level"!==t||(e=e.length>1?e.replace(/^0+/,""):e);var r,i=n.editableFieldsValidatorFunctions[t](e);if(!i.valid)return n.setState({error:i.error,workProgress:null,isEditing:!0});n.setState({workProgress:"Syncing new data with the server..."}),(0,_.V)(m.SA.adminEditUserData,{user:n.state.__receivedData.id,field:t,new_value:a()(r=e||"").call(r)}).then(n.__onResponse).catch(n._promiseErrorHandler)})),h()(u()(n),"__closeAction",(function(){return n.setState({confirmAction:null,isConfirmed:null})})),n}c()(t,e);var n=t.prototype;return n._getKeys=function(e){var t;return s()(t=["id","has_verified_email"]).call(t,(0,v.Z)(this.editableFieldsValidatorFunctions))},n._isAllowedToEditProfile=function(){return!0},n._getActionPanel=function(){if(b.isLoggedIn){var e=this.state.__receivedData;return e&&e.id!==b.userData.id?(0,f.az)("div",{children:[(0,f.az)("div",{class:"heading-text clr",style:{fontSize:"2rem"},children:"DANGER SECTION"}),(0,f.az)("span",{"data-action":"delete",class:"hoverable action-button act",onClick:this.__confirmAction,children:"Delete Account"}),(0,f.az)("span",{"data-action":"qualification-toggle",class:"hoverable action-button act",onClick:this.__confirmAction,children:[e.is_disqualified?"Requalify":"Disqualify"," Account"]})]}):void 0}},n.render=function(t,n){var r=n.confirmAction;if(!r)return e.prototype.render.call(this,t,n);var a=n.__receivedData,i=a.is_disqualified,s=a.id,o=a.name;return n.isConfirmed?n.workProgress?(0,f.az)("div",{children:n.workProgress}):void 0:(0,f.az)(f.HY,{children:[(0,f.az)("div",{class:"mask",onClick:this.__closeAction}),(0,f.az)(z.GI,{close:this.__executeConfirmedAction,title:"Woah there..",errorHead:(0,f.az)("span",{children:["Are you sure you want to",(0,f.az)("span",{style:{color:"red"},children:" "+("delete"===r?r:i?"Requalify":"Disqualify").toUpperCase()})," "+s+"( "+o+" ) ?"]})}),";"]})},t}(p.Profile)},9067:function(e,t,n){"use strict";n.d(t,{OK:function(){return g},Pt:function(){return _},GI:function(){return m},r8:function(){return y}});var r=n(2991),a=n.n(r),i=n(7766),s=n.n(i),o=n(1222),u=n.n(o),l=n(4382),c=n.n(l),d=n(7672),h=n.n(d),f=n(1942),p=n.n(f),v=n(2386);function g(e){return(0,v.az)(m,p()(p()({},e),{},{title:"Something Ain't Right"}))}var _=/([^\w]|_)/g,m=function(e){function t(){for(var t,n,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=e.call.apply(e,s()(t=[this]).call(t,a))||this,h()(u()(n),"__id",Math.random()),n}c()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=document.getElementById(""+this.__id);e&&e.focus()},n.render=function(e){var t;return(0,v.az)("div",{class:"app-popup",children:[(0,v.az)("div",{class:"heading-text clr app-popup-title",children:e.title}),(0,v.az)("div",{children:e.errorHead}),(0,v.az)("div",{class:"err-reasons",children:(0,v.az)("div",{children:a()(t=e.reasons||[]).call(t,(function(e){return(0,v.az)("div",{children:[" - ",e]})}))})}),(0,v.az)("button",{id:this.__id,class:"app-popup-close",onClick:e.close,children:"OK"})]})},t}(v.ZP);function y(){return(0,v.az)("div",{class:"social-link-container",children:[(0,v.az)("a",{target:"_blank",href:"https://discord.gg/fz8e6Df",class:"heading-text clr hoverable",children:"Discord"}),(0,v.az)("a",{target:"_blank",href:"https://twitter.com/halocrypt1",class:"heading-text clr hoverable",children:"Twitter"})]})}},5682:function(e,t,n){"use strict";n.d(t,{uz:function(){return f},ru:function(){return p},r3:function(){return v}});n(1539),n(8674),n(4916),n(5306);var r,a=n(8580),i=n.n(a),s=n(3032),o=n.n(s),u=n(875),l=n.n(u),c=n(4103),d=n.n(c),h=n(9067),f=window.requestIdleCallback||window.requestAnimationFrame||window.Promise&&d()(r=l().prototype.then).call(r,l().resolve())||o(),p=function(e){return(e+"").replace(h.Pt,"").toLowerCase()},v=function(e,t){var n;return i()(n=p(e)).call(n,t)}},9264:function(e,t,n){"use strict";n.d(t,{Vy:function(){return a},sQ:function(){return s},oS:function(){return o},If:function(){return u},Bj:function(){return l},RX:function(){return c},u2:function(){return d},R0:function(){return h}});n(4916),n(5306);var r=n(9067),a={valid:!0},i={valid:!1};function s(e){return e?a:{error:"Value required"}}var o=function(){return a};function u(e){return(t=+(t=e))==t?a:i;var t}function l(e){return e.length<5?{error:h.pwLength}:a}function c(e){var t=e.length;return t<3||t>30?{error:h.userLength}:e!==e.replace(r.Pt,"")?{error:h.invalidCharacters}:a}function d(e){var t=e.length;return!t||t>30?{error:h.nameLength}:a}var h={userLength:"Username should be between 3 and 30 characters",invalidCharacters:"Username and name can not contain special characters",invalidEmail:"Invalid email",nameLength:"Name should be less than 30 characters and cannot be blank",pwLength:"Password should be longer than 5 characters",pwNomatch:"Passwords do not match"}},5306:function(e,t,n){"use strict";var r=n(7007),a=n(9670),i=n(7908),s=n(7466),o=n(9958),u=n(4488),l=n(1530),c=n(7651),d=Math.max,h=Math.min,f=Math.floor,p=/\$([$&'`]|\d\d?|<[^>]*>)/g,v=/\$([$&'`]|\d\d?)/g;r("replace",2,(function(e,t,n,r){var g=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,_=r.REPLACE_KEEPS_$0,m=g?"$":"$0";return[function(n,r){var a=u(this),i=null==n?void 0:n[e];return void 0!==i?i.call(n,a,r):t.call(String(a),n,r)},function(e,r){if(!g&&_||"string"==typeof r&&-1===r.indexOf(m)){var i=n(t,e,this,r);if(i.done)return i.value}var u=a(e),f=String(this),p="function"==typeof r;p||(r=String(r));var v=u.global;if(v){var z=u.unicode;u.lastIndex=0}for(var b=[];;){var w=c(u,f);if(null===w)break;if(b.push(w),!v)break;""===String(w[0])&&(u.lastIndex=l(f,s(u.lastIndex),z))}for(var S,A="",k=0,D=0;D<b.length;D++){w=b[D];for(var E=String(w[0]),x=d(h(o(w.index),f.length),0),I=[],q=1;q<w.length;q++)I.push(void 0===(S=w[q])?S:String(S));var U=w.groups;if(p){var P=[E].concat(I,x,f);void 0!==U&&P.push(U);var T=String(r.apply(void 0,P))}else T=y(E,f,x,I,U,r);x>=k&&(A+=f.slice(k,x)+T,k=x+E.length)}return A+f.slice(k)}];function y(e,n,r,a,s,o){var u=r+e.length,l=a.length,c=v;return void 0!==s&&(s=i(s),c=p),t.call(o,c,(function(t,i){var o;switch(i.charAt(0)){case"$":return"$";case"&":return e;case"`":return n.slice(0,r);case"'":return n.slice(u);case"<":o=s[i.slice(1,-1)];break;default:var c=+i;if(0===c)return t;if(c>l){var d=f(c/10);return 0===d?t:d<=l?void 0===a[d-1]?i.charAt(1):a[d-1]+i.charAt(1):t}o=a[c-1]}return void 0===o?"":o}))}}))}}]);