/*! For license information please see main.26509d9a.js.LICENSE.txt */
!function(){var e={35525:function(e,t,n){"use strict";n.d(t,{a:function(){return B}});var r=n(78465),o=n(87462),i=n(4942),a=n(93433),s=n(15671),l=n(43144),c=n(60136),u=n(54062),d=n(71002),f=n(8010),p=n.n(f),h=n(91670),m=n.n(h),g=n(81065),v=n(66501),y=n(29439),b=r.forwardRef((function(e,t){var n,o=e.prefixCls,a=e.forceRender,s=e.className,l=e.style,c=e.children,u=e.isActive,d=e.role,f=r.useState(u||a),h=(0,y.Z)(f,2),m=h[0],g=h[1];return r.useEffect((function(){(a||u)&&g(!0)}),[a,u]),m?r.createElement("div",{ref:t,className:p()("".concat(o,"-content"),(n={},(0,i.Z)(n,"".concat(o,"-content-active"),u),(0,i.Z)(n,"".concat(o,"-content-inactive"),!u),n),s),style:l,role:d},r.createElement("div",{className:"".concat(o,"-content-box")},c)):null}));b.displayName="PanelContent";var w=b,x=function(e){(0,c.Z)(n,e);var t=(0,u.Z)(n);function n(){var e;return(0,s.Z)(this,n),(e=t.apply(this,arguments)).handleItemClick=function(){var t=e.props,n=t.onItemClick,r=t.panelKey;"function"===typeof n&&n(r)},e.handleKeyPress=function(t){"Enter"!==t.key&&13!==t.keyCode&&13!==t.which||e.handleItemClick()},e}return(0,l.Z)(n,[{key:"shouldComponentUpdate",value:function(e){return!m()(this.props,e)}},{key:"render",value:function(){var e,t,n=this,a=this.props,s=a.className,l=a.id,c=a.style,u=a.prefixCls,d=a.header,f=a.headerClass,h=a.children,m=a.isActive,g=a.showArrow,y=a.destroyInactivePanel,b=a.accordion,x=a.forceRender,S=a.openMotion,E=a.expandIcon,_=a.extra,C=a.collapsible,k="disabled"===C,A=p()("".concat(u,"-header"),(e={},(0,i.Z)(e,f,f),(0,i.Z)(e,"".concat(u,"-header-collapsible-only"),"header"===C),e)),T=p()((t={},(0,i.Z)(t,"".concat(u,"-item"),!0),(0,i.Z)(t,"".concat(u,"-item-active"),m),(0,i.Z)(t,"".concat(u,"-item-disabled"),k),t),s),N=r.createElement("i",{className:"arrow"});return g&&"function"===typeof E&&(N=E(this.props)),r.createElement("div",{className:T,style:c,id:l},r.createElement("div",{className:A,onClick:function(){return"header"!==C&&n.handleItemClick()},role:b?"tab":"button",tabIndex:k?-1:0,"aria-expanded":m,onKeyPress:this.handleKeyPress},g&&N,"header"===C?r.createElement("span",{onClick:this.handleItemClick,className:"".concat(u,"-header-text")},d):d,_&&r.createElement("div",{className:"".concat(u,"-extra")},_)),r.createElement(v.Z,(0,o.Z)({visible:m,leavedClassName:"".concat(u,"-content-hidden")},S,{forceRender:x,removeOnLeave:y}),(function(e,t){var n=e.className,o=e.style;return r.createElement(w,{ref:t,prefixCls:u,className:n,style:o,isActive:m,forceRender:x,role:b?"tabpanel":null},h)})))}}]),n}(r.Component);x.defaultProps={showArrow:!0,isActive:!1,onItemClick:function(){},headerClass:"",forceRender:!1};var S=x;function E(e){var t=e;if(!Array.isArray(t)){var n=(0,d.Z)(t);t="number"===n||"string"===n?[t]:[]}return t.map((function(e){return String(e)}))}var _=function(e){(0,c.Z)(n,e);var t=(0,u.Z)(n);function n(e){var o;(0,s.Z)(this,n),(o=t.call(this,e)).onClickItem=function(e){var t=o.state.activeKey;if(o.props.accordion)t=t[0]===e?[]:[e];else{var n=(t=(0,a.Z)(t)).indexOf(e);n>-1?t.splice(n,1):t.push(e)}o.setActiveKey(t)},o.getNewChild=function(e,t){if(!e)return null;var n=o.state.activeKey,i=o.props,a=i.prefixCls,s=i.openMotion,l=i.accordion,c=i.destroyInactivePanel,u=i.expandIcon,d=i.collapsible,f=e.key||String(t),p=e.props,h=p.header,m=p.headerClass,g=p.destroyInactivePanel,v=p.collapsible,y=null!==v&&void 0!==v?v:d,b={key:f,panelKey:f,header:h,headerClass:m,isActive:l?n[0]===f:n.indexOf(f)>-1,prefixCls:a,destroyInactivePanel:null!==g&&void 0!==g?g:c,openMotion:s,accordion:l,children:e.props.children,onItemClick:"disabled"===y?null:o.onClickItem,expandIcon:u,collapsible:y};return"string"===typeof e.type?e:r.cloneElement(e,b)},o.getItems=function(){var e=o.props.children;return(0,g.Z)(e).map(o.getNewChild)},o.setActiveKey=function(e){"activeKey"in o.props||o.setState({activeKey:e}),o.props.onChange(o.props.accordion?e[0]:e)};var i=e.activeKey,l=e.defaultActiveKey;return"activeKey"in e&&(l=i),o.state={activeKey:E(l)},o}return(0,l.Z)(n,[{key:"shouldComponentUpdate",value:function(e,t){return!m()(this.props,e)||!m()(this.state,t)}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,o=t.className,a=t.style,s=t.accordion,l=p()((e={},(0,i.Z)(e,n,!0),(0,i.Z)(e,o,!!o),e));return r.createElement("div",{className:l,style:a,role:s?"tablist":null},this.getItems())}}],[{key:"getDerivedStateFromProps",value:function(e){var t={};return"activeKey"in e&&(t.activeKey=E(e.activeKey)),t}}]),n}(r.Component);_.defaultProps={prefixCls:"rc-collapse",onChange:function(){},accordion:!1,destroyInactivePanel:!1},_.Panel=S;var C=_,k=(_.Panel,n(82194)),A=n(17224),T=n(8143),N=n(43969),R=function(e){(0,N.Z)(!("disabled"in e),"Collapse.Panel",'`disabled` is deprecated. Please use `collapsible="disabled"` instead.');var t=r.useContext(T.E_).getPrefixCls,n=e.prefixCls,a=e.className,s=void 0===a?"":a,l=e.showArrow,c=void 0===l||l,u=t("collapse",n),d=p()((0,i.Z)({},"".concat(u,"-no-arrow"),!c),s);return r.createElement(C.Panel,(0,o.Z)({},e,{prefixCls:u,className:d}))},O=n(58115),I=n(16605),M=function(e){var t,n=r.useContext(T.E_),a=n.getPrefixCls,s=n.direction,l=e.prefixCls,c=e.className,u=void 0===c?"":c,d=e.bordered,f=void 0===d||d,h=e.ghost,m=a("collapse",l),v=function(){var t=e.expandIconPosition;return void 0!==t?t:"rtl"===s?"right":"left"}(),y=p()((t={},(0,i.Z)(t,"".concat(m,"-borderless"),!f),(0,i.Z)(t,"".concat(m,"-icon-position-").concat(v),!0),(0,i.Z)(t,"".concat(m,"-rtl"),"rtl"===s),(0,i.Z)(t,"".concat(m,"-ghost"),!!h),t),u),b=(0,o.Z)((0,o.Z)({},O.Z),{motionAppear:!1,leavedClassName:"".concat(m,"-content-hidden")});return r.createElement(C,(0,o.Z)({openMotion:b},e,{bordered:f,expandIcon:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.expandIcon,o=n?n(t):r.createElement(k.Z,{rotate:t.isActive?90:void 0});return(0,I.Tm)(o,(function(){return{className:p()(o.props.className,"".concat(m,"-arrow"))}}))},prefixCls:m,className:y}),function(){var t=e.children;return(0,g.Z)(t).map((function(e,t){var n;if(null===(n=e.props)||void 0===n?void 0:n.disabled){var r=e.key||String(t),i=e.props,a=i.disabled,s=i.collapsible,l=(0,o.Z)((0,o.Z)({},(0,A.Z)(e.props,["disabled"])),{key:r,collapsible:null!==s&&void 0!==s?s:a?"disabled":void 0});return(0,I.Tm)(e,l)}return e}))}())};M.Panel=R;var P=M,D=n(23255),L=n(31742),Z=n(15132);var F={name:"1k6747e",styles:"font-size:20px!important"};function B(e){const{title:t,forceOpen:n,showServerError:r,defaultCollapsed:o,onChange:i}=e,a=n&&{activeKey:["1"]},s=o?null:["1"];return(0,Z.tZ)(P,{className:"collapsible-section",css:z.wrapper,bordered:!1,...a,defaultActiveKey:s,expandIcon:e=>{let{isActive:t}=e;return(0,Z.tZ)(L.XCv,{css:F,rotate:t?90:0})},onChange:i,children:(0,Z.tZ)(P.Panel,{className:"collapsible-panel",header:t,children:(0,Z.tZ)(D.K,{showServerError:r,children:e.children})},"1")})}const z={wrapper:{".collapsible-panel":{position:"relative"},'& > .collapsible-panel > [role="button"]:focus':{outline:"revert"}}};B.defaultProps={forceOpen:!1}},18528:function(e,t,n){"use strict";n.d(t,{U:function(){return v}});var r=n(78465),o=n(31742),i=n(82313),a=n(41031),s=n(52742),l=n.n(s),c=n(43258);const u={allowedTags:["h1","h2","h3","h4","h5","h6","h7","h8","blockquote","p","a","ul","ol","nl","li","ins","b","i","strong","em","strike","code","hr","br","div","table","thead","tbody","tr","th","td","pre","del","sup","sub","dl","dt","dd","kbd","q","samp","samp","var","hr","rt","rp","summary","iframe","img","caption","figure"],allowedAttributes:{a:["href","name","target"],img:["src","longdesc"],div:["itemscope","itemtype"]}};var d=n(66671),f=n(12502),p=n(15132);class h extends r.Component{constructor(){super(...arguments),this.state={markdown:this.props.defaultMarkdown,selectedTab:this.props.defaultSelectedTab,error:null},this.converter=(()=>{const e=new c.Converter;return e.setFlavor("github"),e})(),this.handleMdeValueChange=e=>{this.setState({markdown:e})},this.handleTabChange=e=>{this.setState({selectedTab:e})},this.handleSubmitClick=()=>{const{onSubmit:e}=this.props,{markdown:t}=this.state;return this.setState({confirmLoading:!0}),e?Promise.resolve(e(t)).then((()=>{this.setState({confirmLoading:!1,error:null})})).catch((e=>{this.setState({confirmLoading:!1,error:e&&e.getMessageField?e.getMessageField():this.props.intl.formatMessage({id:"SzvvXl",defaultMessage:"Failed to submit"})})})):null},this.handleCancelClick=()=>{this.setState({markdown:this.props.defaultMarkdown,selectedTab:this.props.defaultSelectedTab});const{onCancel:e}=this.props;e&&e()}}contentHasChanged(){return this.state.markdown!==this.props.defaultMarkdown}renderActions(){const{confirmLoading:e}=this.state;return(0,p.tZ)("div",{className:"editable-note-actions",children:(0,p.BX)("div",{children:[(0,p.tZ)(o.zxk,{type:"primary",className:"editable-note-save-button",onClick:this.handleSubmitClick,disabled:!this.contentHasChanged()||e,loading:e,"data-testid":"editable-note-save-button",children:this.props.saveText}),(0,p.tZ)(o.zxk,{htmlType:"button",className:"editable-note-cancel-button",onClick:this.handleCancelClick,disabled:e,children:(0,p.tZ)(d.Z,{id:"17k196",defaultMessage:"Cancel"})})]})})}getSanitizedHtmlContent(){const{markdown:e}=this.state;if(e){const n=(t=this.converter.makeHtml(e),l()(t,u));return n.replace(new RegExp("<a","g"),'<a target="_blank"')}var t;return null}render(){const{showEditor:e}=this.props,{markdown:t,selectedTab:n,error:s}=this.state,l=this.getSanitizedHtmlContent();return(0,p.tZ)("div",{className:"note-view-outer-container",children:e?(0,p.BX)(r.Fragment,{children:[(0,p.tZ)("div",{className:"note-view-text-area",children:(0,p.tZ)(a.default,{value:t,minEditorHeight:this.props.minEditorHeight,maxEditorHeight:this.props.maxEditorHeight,minPreviewHeight:50,childProps:this.props.childProps,toolbarCommands:this.props.toolbarCommands,onChange:this.handleMdeValueChange,selectedTab:n,onTabChange:this.handleTabChange,generateMarkdownPreview:e=>Promise.resolve(this.getSanitizedHtmlContent(e)),getIcon:e=>(0,p.tZ)(m,{name:e})})}),s&&(0,p.tZ)(o.bZj,{type:"error",message:this.props.intl.formatMessage({id:"79dD5F",defaultMessage:"There was an error submitting your note."}),description:s,closable:!0}),this.renderActions(),(0,p.tZ)(i.NL,{when:this.contentHasChanged(),message:this.props.intl.formatMessage({id:"dwTTNK",defaultMessage:"Are you sure you want to navigate away? Your pending text changes will be lost."})})]}):(0,p.tZ)(g,{content:l})})}}function m(e){const{name:t}=e;return(0,p.tZ)(o.ua7,{position:"top",title:t,children:(0,p.tZ)("span",{children:(0,p.tZ)(a.SvgIcon,{icon:t})})})}function g(e){const{content:t}=e;return t?(0,p.tZ)("div",{className:"note-view-outer-container",children:(0,p.tZ)("div",{className:"note-view-text-area",children:(0,p.tZ)("div",{className:"note-view-preview note-editor-preview",children:(0,p.tZ)("div",{className:"note-editor-preview-content","data-testid":"note-editor-preview-content",dangerouslySetInnerHTML:{__html:e.content}})})})}):(0,p.tZ)("div",{children:(0,p.tZ)(d.Z,{id:"PRe/8y",defaultMessage:"None"})})}h.defaultProps={defaultMarkdown:"",defaultSelectedTab:"write",showEditor:!1,saveText:(0,p.tZ)(d.Z,{id:"Shv28w",defaultMessage:"Save"}),confirmLoading:!1,toolbarCommands:[["header","bold","italic","strikethrough"],["link","quote","code","image"],["unordered-list","ordered-list","checked-list"]],maxEditorHeight:500,minEditorHeight:200,childProps:{}};const v=(0,f.ZP)(h)},32207:function(e,t,n){"use strict";n.d(t,{h:function(){return i}});n(78465);var r=n(31742),o=n(15132);const i=e=>{let{icon:t,className:n,style:i,...a}=e;return(0,o.tZ)(r.zxk,{type:"link",className:n,style:{padding:0,...i},...a,children:t})}},43600:function(e,t,n){"use strict";n.d(t,{ZP:function(){return d},zQ:function(){return u}});var r=n(78465),o=n(22655),i=n(15444),a=n(65190),s=n(37126),l=n(15132);class c extends r.Component{constructor(){super(...arguments),this.state={shouldRender:!1,shouldRenderError:!1}}static getErrorRequests(e,t){return e.filter((e=>void 0!==e.error&&!(t&&t.includes(e.id)&&e.error.getErrorCode()===s.SM.RESOURCE_DOES_NOT_EXIST)))}static getDerivedStateFromProps(e){const t=!!e.requests.length&&e.requests.every((e=>e&&!1===e.active)),n=c.getErrorRequests(e.requests,e.requestIdsWith404sToIgnore);return{shouldRender:t,shouldRenderError:n.length>0,requestErrors:n}}getRenderedContent(){const{children:e,requests:t,customSpinner:n}=this.props,{shouldRender:r,shouldRenderError:o,requestErrors:i}=this.state;return"function"===typeof e?e(!r,o,t):r||o||this.props.shouldOptimisticallyRender?(o&&u(i),e):n||(0,l.tZ)(a.$,{})}render(){return this.getRenderedContent()}}c.defaultProps={requests:[],requestIdsWith404sToIgnore:[],shouldOptimisticallyRender:!1};const u=e=>{throw console.error("ERROR",e),Error(`A request error occurred.: ${e.error}`)};var d=(0,o.$j)(((e,t)=>({requests:(0,i.M_)(t.requestIds,e)})))(c)},65190:function(e,t,n){"use strict";n.d(t,{$:function(){return s}});var r=n(78465),o=n(42117),i=n(1053),a=n(15132);class s extends r.Component{render(){return(0,a.tZ)("div",{css:e=>l.spinner(e,this.props.showImmediately),children:(0,a.tZ)("img",{alt:"Page loading...",src:o})})}}const l={spinner:(e,t)=>({width:100,marginTop:100,marginLeft:"auto",marginRight:"auto",img:{position:"absolute",opacity:0,top:"50%",left:"50%",width:2*e.general.heightBase,height:2*e.general.heightBase,marginTop:-e.general.heightBase,marginLeft:-e.general.heightBase,animation:`${i.F4`
          0% {
            opacity: 1;
          }
          100% {
            opacity: 1;
            -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
            }