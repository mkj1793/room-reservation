"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3424],{40008:function(e,t,a){a.d(t,{S:function(){return o}});var s=a(77897),l=a(67294),n=(a(7568),a(7444)),r=a(61655),i={statusLabel:"StatusLabel-module_statusLabel__3R2J2 status-label_hds-status-label__1L8YI",statusLabelWithIcon:"StatusLabel-module_statusLabelWithIcon__5lKVk status-label_hds-status-label--with-icon__3bHf6",statusLabelIcon:"StatusLabel-module_statusLabelIcon__2SAou status-label_hds-status-label-icon__3K58a",info:"StatusLabel-module_info__3YrAe status-label_hds-status-label--info__J28-H",success:"StatusLabel-module_success__2BfdX status-label_hds-status-label--success__3jiST",alert:"StatusLabel-module_alert__2VR8r status-label_hds-status-label--alert__1ecsX",error:"StatusLabel-module_error__zNgn8 status-label_hds-status-label--error__2EYi4"};(0,n.s)(".status-label_hds-status-label__1L8YI{--status-label-background:var(--color-black-10);--status-label-color:var(--color-black-90);--status-label-height:32px;background-color:var(--status-label-background);border-radius:20px;color:var(--status-label-color);display:inline-block;font-size:var(--fontsize-body-s);line-height:var(--status-label-height);min-height:var(--status-label-height);padding:0 var(--spacing-2-xs);vertical-align:middle}.status-label_hds-status-label--with-icon__3bHf6{align-items:center;display:inline-flex;padding-left:var(--spacing-3-xs)}.status-label_hds-status-label-icon__3K58a{height:var(--spacing-m);margin-right:var(--spacing-3-xs);width:var(--spacing-m)}.status-label_hds-status-label--info__J28-H{--status-label-background:var(--color-info);--status-label-color:var(--color-white)}.status-label_hds-status-label--success__3jiST{--status-label-background:var(--color-success);--status-label-color:var(--color-white)}.status-label_hds-status-label--alert__1ecsX{--status-label-background:var(--color-alert)}.status-label_hds-status-label--error__2EYi4{--status-label-background:var(--color-error);--status-label-color:var(--color-white)}");var c=function(e){var t=e.icon;return l.createElement("span",{className:i.statusLabelIcon,"aria-hidden":"true"},t)},o=function(e){var t=e.children,a=e.className,n=e.dataTestId,o=e.type,u=void 0===o?"neutral":o,b=e.iconLeft,d=(0,s._)(e,["children","className","dataTestId","type","iconLeft"]);return l.createElement("span",Object.assign({className:(0,r.c)(i.statusLabel,i[u],b&&i.statusLabelWithIcon,a),"data-testid":n},d),b&&l.createElement(c,{icon:b}),t)}},59309:function(e,t,a){a.r(t);var s=a(11151),l=a(67294),n=a(57674),r=a(89482),i=(a(18607),a(26127)),c=a(55725);function o(e){const t=Object.assign({h1:"h1",a:"a",span:"span"},(0,s.ah)(),e.components);return i.Z||u("PageTabs",!1),i.Z.Tab||u("PageTabs.Tab",!0),i.Z.TabList||u("PageTabs.TabList",!0),i.Z.TabPanel||u("PageTabs.TabPanel",!0),l.createElement(l.Fragment,null,l.createElement(t.h1,{id:"textinput",style:{position:"relative"}},"TextInput",l.createElement(t.a,{href:"#textinput","aria-label":"textinput permalink",className:"header-anchor after"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span class="hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs" aria-hidden="true" style="vertical-align: middle"></span>'}}))),"\n",l.createElement("div",{class:"status-label-description"},l.createElement(c.Z,{type:"info"},"Stable"),l.createElement(c.Z,{type:"success",style:{marginLeft:"var(--spacing-xs)"}},"Accessible"),l.createElement(n.Z)),"\n",l.createElement(r.Z,null,"A text field is an input field that the user can interact with and input content and data. The user can also be provided with helper text if needed. Text inputs are used for shorter information while Text areas can be used for multiline answers."),"\n",l.createElement(i.Z,{pageContext:e.pageContext},l.createElement(i.Z.TabList,null,l.createElement(i.Z.Tab,{href:"/"},"Usage"),l.createElement(i.Z.Tab,{href:"/code"},"Code"),l.createElement(i.Z.Tab,{href:"/accessibility"},"Accessibility")),l.createElement(i.Z.TabPanel,null,e.children)))}function u(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}t.default=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?l.createElement(t,e,l.createElement(o,e)):o(e)}},89482:function(e,t,a){var s=a(67294),l=a(42972);t.Z=e=>{let{color:t="var(--color-black-90)",size:a="var(--fontsize-body-xl)",style:n={},children:r}=e;return s.createElement("p",{style:{fontSize:a,color:t,maxWidth:600,...n}},(0,l.g)(r))}},26127:function(e,t,a){var s=a(67294),l=a(14160),n=a(17014),r=a(42972);const i="PageTabList",c="PageTabPanel",o="PageTab",u=e=>{var t;let{pageContext:a,children:u}=e;const b=a.frontmatter.slug,d=Array.isArray(u)?u:[u],h=d.find((e=>(0,s.isValidElement)(e)&&e.type.componentName===i)),m=d.find((e=>(0,s.isValidElement)(e)&&e.type.componentName===c)),p=null===(t=h.props)||void 0===t?void 0:t.children.filter((e=>e.type.componentName===o)),_=p.findIndex((e=>b.endsWith(e.props.href))),f=-1===_?0:_,g=0===f?b:(e=>`/${e.trim().split("/").filter((e=>!!e)).slice(0,-1).join("/")}`)(b);return s.createElement(n.a,{initiallyActiveTab:f},s.createElement(n.a.TabList,{className:"page-tabs-list"},p.map((e=>s.createElement(n.a.Tab,{key:e.props.href,onClick:()=>(0,l.navigate)(`${"/"===e.props.href?g:g+e.props.href}`)},(0,r.g)(e.props.children))))),p.map(((e,t)=>s.createElement(n.a.TabPanel,{key:e.props.href},f===t?m.props.children:s.createElement("div",null)))))},b=e=>{let{children:t}=e;return s.createElement(n.a.TabList,null,t)};b.componentName=i;const d=e=>{let{href:t,slug:a,children:l}=e;return s.createElement(n.a.Tab,null," ",l)};d.componentName=o;const h=e=>{let{children:t}=e;return s.createElement(n.a.TabPanel,null,t)};h.componentName=c,u.TabList=b,u.Tab=d,u.TabPanel=h,t.Z=u},55725:function(e,t,a){var s=a(67294),l=a(40008),n=a(42972);t.Z=e=>{let{children:t,...a}=e;return s.createElement(l.S,a,(0,n.g)(t))}},57674:function(e,t,a){var s=a(67294),l=a(12367);t.Z=()=>{const e={Draft:"The component is work in progress",Beta:"The component is being tested",Stable:"The component has been tested and defects have been fixed",Accessible:"The component has been reviewed for accessibility",Deprecated:"The component will be removed"};return s.createElement(l.T,{placement:"right-end",className:"status-label-tooltip",boxShadow:!0},s.createElement("ul",{className:"status-label-definitions"},Object.keys(e).map((t=>s.createElement("li",{key:t},s.createElement("span",{className:"status-name"},t),s.createElement("span",null,e[t]))))))}}}]);