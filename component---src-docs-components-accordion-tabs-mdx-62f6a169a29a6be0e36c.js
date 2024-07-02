"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[7407],{40008:function(e,a,t){t.d(a,{S:function(){return i}});var s=t(77897),l=t(67294),n=(t(7568),t(7444)),r=t(61655),o={statusLabel:"StatusLabel-module_statusLabel__3R2J2 status-label_hds-status-label__1L8YI",statusLabelWithIcon:"StatusLabel-module_statusLabelWithIcon__5lKVk status-label_hds-status-label--with-icon__3bHf6",statusLabelIcon:"StatusLabel-module_statusLabelIcon__2SAou status-label_hds-status-label-icon__3K58a",info:"StatusLabel-module_info__3YrAe status-label_hds-status-label--info__J28-H",success:"StatusLabel-module_success__2BfdX status-label_hds-status-label--success__3jiST",alert:"StatusLabel-module_alert__2VR8r status-label_hds-status-label--alert__1ecsX",error:"StatusLabel-module_error__zNgn8 status-label_hds-status-label--error__2EYi4"};(0,n.s)(".status-label_hds-status-label__1L8YI{--status-label-background:var(--color-black-10);--status-label-color:var(--color-black-90);--status-label-height:32px;background-color:var(--status-label-background);border-radius:20px;color:var(--status-label-color);display:inline-block;font-size:var(--fontsize-body-s);line-height:var(--status-label-height);min-height:var(--status-label-height);padding:0 var(--spacing-2-xs);vertical-align:middle}.status-label_hds-status-label--with-icon__3bHf6{align-items:center;display:inline-flex;padding-left:var(--spacing-3-xs)}.status-label_hds-status-label-icon__3K58a{height:var(--spacing-m);margin-right:var(--spacing-3-xs);width:var(--spacing-m)}.status-label_hds-status-label--info__J28-H{--status-label-background:var(--color-info);--status-label-color:var(--color-white)}.status-label_hds-status-label--success__3jiST{--status-label-background:var(--color-success);--status-label-color:var(--color-white)}.status-label_hds-status-label--alert__1ecsX{--status-label-background:var(--color-alert)}.status-label_hds-status-label--error__2EYi4{--status-label-background:var(--color-error);--status-label-color:var(--color-white)}");var c=function(e){var a=e.icon;return l.createElement("span",{className:o.statusLabelIcon,"aria-hidden":"true"},a)},i=function(e){var a=e.children,t=e.className,n=e.dataTestId,i=e.type,u=void 0===i?"neutral":i,b=e.iconLeft,d=(0,s._)(e,["children","className","dataTestId","type","iconLeft"]);return l.createElement("span",Object.assign({className:(0,r.c)(o.statusLabel,o[u],b&&o.statusLabelWithIcon,t),"data-testid":n},d),b&&l.createElement(c,{icon:b}),a)}},81074:function(e,a,t){t.r(a);var s=t(11151),l=t(67294),n=t(57674),r=t(89482),o=(t(18607),t(26127)),c=t(55725);function i(e){const a=Object.assign({h1:"h1",a:"a",span:"span"},(0,s.ah)(),e.components);return o.Z||u("PageTabs",!1),o.Z.Tab||u("PageTabs.Tab",!0),o.Z.TabList||u("PageTabs.TabList",!0),o.Z.TabPanel||u("PageTabs.TabPanel",!0),l.createElement(l.Fragment,null,l.createElement(a.h1,{id:"accordion",style:{position:"relative"}},"Accordion",l.createElement(a.a,{href:"#accordion","aria-label":"accordion permalink",className:"header-anchor after"},l.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span class="hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs" aria-hidden="true" style="vertical-align: middle"></span>'}}))),"\n",l.createElement("div",{class:"status-label-description"},l.createElement(c.Z,{type:"info"},"Stable"),l.createElement(c.Z,{type:"success",style:{marginLeft:"var(--spacing-xs)"}},"Accessible"),l.createElement(n.Z)),"\n",l.createElement(r.Z,null,"Accordions can be used to hide and reveal information. When used correctly, they are a good way to make a higher amount of information easier to digest for the user."),"\n",l.createElement(o.Z,{pageContext:e.pageContext},l.createElement(o.Z.TabList,null,l.createElement(o.Z.Tab,{href:"/"},"Usage"),l.createElement(o.Z.Tab,{href:"/code"},"Code"),l.createElement(o.Z.Tab,{href:"/accessibility"},"Accessibility"),l.createElement(o.Z.Tab,{href:"/customisation"},"Customisation")),l.createElement(o.Z.TabPanel,null,e.children)))}function u(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}a.default=function(e){void 0===e&&(e={});const{wrapper:a}=Object.assign({},(0,s.ah)(),e.components);return a?l.createElement(a,e,l.createElement(i,e)):i(e)}},89482:function(e,a,t){var s=t(67294),l=t(42972);a.Z=e=>{let{color:a="var(--color-black-90)",size:t="var(--fontsize-body-xl)",style:n={},children:r}=e;return s.createElement("p",{style:{fontSize:t,color:a,maxWidth:600,...n}},(0,l.g)(r))}},26127:function(e,a,t){var s=t(67294),l=t(14160),n=t(17014),r=t(42972);const o="PageTabList",c="PageTabPanel",i="PageTab",u=e=>{var a;let{pageContext:t,children:u}=e;const b=t.frontmatter.slug,d=Array.isArray(u)?u:[u],m=d.find((e=>(0,s.isValidElement)(e)&&e.type.componentName===o)),h=d.find((e=>(0,s.isValidElement)(e)&&e.type.componentName===c)),p=null===(a=m.props)||void 0===a?void 0:a.children.filter((e=>e.type.componentName===i)),_=p.findIndex((e=>b.endsWith(e.props.href))),f=-1===_?0:_,g=0===f?b:(e=>`/${e.trim().split("/").filter((e=>!!e)).slice(0,-1).join("/")}`)(b);return s.createElement(n.a,{initiallyActiveTab:f},s.createElement(n.a.TabList,{className:"page-tabs-list"},p.map((e=>s.createElement(n.a.Tab,{key:e.props.href,onClick:()=>(0,l.navigate)(`${"/"===e.props.href?g:g+e.props.href}`)},(0,r.g)(e.props.children))))),p.map(((e,a)=>s.createElement(n.a.TabPanel,{key:e.props.href},f===a?h.props.children:s.createElement("div",null)))))},b=e=>{let{children:a}=e;return s.createElement(n.a.TabList,null,a)};b.componentName=o;const d=e=>{let{href:a,slug:t,children:l}=e;return s.createElement(n.a.Tab,null," ",l)};d.componentName=i;const m=e=>{let{children:a}=e;return s.createElement(n.a.TabPanel,null,a)};m.componentName=c,u.TabList=b,u.Tab=d,u.TabPanel=m,a.Z=u},55725:function(e,a,t){var s=t(67294),l=t(40008),n=t(42972);a.Z=e=>{let{children:a,...t}=e;return s.createElement(l.S,t,(0,n.g)(a))}},57674:function(e,a,t){var s=t(67294),l=t(12367);a.Z=()=>{const e={Draft:"The component is work in progress",Beta:"The component is being tested",Stable:"The component has been tested and defects have been fixed",Accessible:"The component has been reviewed for accessibility",Deprecated:"The component will be removed"};return s.createElement(l.T,{placement:"right-end",className:"status-label-tooltip",boxShadow:!0},s.createElement("ul",{className:"status-label-definitions"},Object.keys(e).map((a=>s.createElement("li",{key:a},s.createElement("span",{className:"status-name"},a),s.createElement("span",null,e[a]))))))}}}]);