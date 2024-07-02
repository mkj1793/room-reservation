"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[513],{40008:function(e,a,t){t.d(a,{S:function(){return i}});var l=t(77897),s=t(67294),n=(t(7568),t(7444)),r=t(61655),o={statusLabel:"StatusLabel-module_statusLabel__3R2J2 status-label_hds-status-label__1L8YI",statusLabelWithIcon:"StatusLabel-module_statusLabelWithIcon__5lKVk status-label_hds-status-label--with-icon__3bHf6",statusLabelIcon:"StatusLabel-module_statusLabelIcon__2SAou status-label_hds-status-label-icon__3K58a",info:"StatusLabel-module_info__3YrAe status-label_hds-status-label--info__J28-H",success:"StatusLabel-module_success__2BfdX status-label_hds-status-label--success__3jiST",alert:"StatusLabel-module_alert__2VR8r status-label_hds-status-label--alert__1ecsX",error:"StatusLabel-module_error__zNgn8 status-label_hds-status-label--error__2EYi4"};(0,n.s)(".status-label_hds-status-label__1L8YI{--status-label-background:var(--color-black-10);--status-label-color:var(--color-black-90);--status-label-height:32px;background-color:var(--status-label-background);border-radius:20px;color:var(--status-label-color);display:inline-block;font-size:var(--fontsize-body-s);line-height:var(--status-label-height);min-height:var(--status-label-height);padding:0 var(--spacing-2-xs);vertical-align:middle}.status-label_hds-status-label--with-icon__3bHf6{align-items:center;display:inline-flex;padding-left:var(--spacing-3-xs)}.status-label_hds-status-label-icon__3K58a{height:var(--spacing-m);margin-right:var(--spacing-3-xs);width:var(--spacing-m)}.status-label_hds-status-label--info__J28-H{--status-label-background:var(--color-info);--status-label-color:var(--color-white)}.status-label_hds-status-label--success__3jiST{--status-label-background:var(--color-success);--status-label-color:var(--color-white)}.status-label_hds-status-label--alert__1ecsX{--status-label-background:var(--color-alert)}.status-label_hds-status-label--error__2EYi4{--status-label-background:var(--color-error);--status-label-color:var(--color-white)}");var c=function(e){var a=e.icon;return s.createElement("span",{className:o.statusLabelIcon,"aria-hidden":"true"},a)},i=function(e){var a=e.children,t=e.className,n=e.dataTestId,i=e.type,u=void 0===i?"neutral":i,b=e.iconLeft,d=(0,l._)(e,["children","className","dataTestId","type","iconLeft"]);return s.createElement("span",Object.assign({className:(0,r.c)(o.statusLabel,o[u],b&&o.statusLabelWithIcon,t),"data-testid":n},d),b&&s.createElement(c,{icon:b}),a)}},28348:function(e,a,t){t.r(a);var l=t(11151),s=t(67294),n=t(89482),r=(t(18607),t(26127)),o=t(55725);function c(e){const a=Object.assign({h1:"h1",a:"a",span:"span"},(0,l.ah)(),e.components);return r.Z||i("PageTabs",!1),r.Z.Tab||i("PageTabs.Tab",!0),r.Z.TabList||i("PageTabs.TabList",!0),r.Z.TabPanel||i("PageTabs.TabPanel",!0),s.createElement(s.Fragment,null,s.createElement(a.h1,{id:"colour",style:{position:"relative"}},"Colour",s.createElement(a.a,{href:"#colour","aria-label":"colour permalink",className:"header-anchor after"},s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span class="hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs" aria-hidden="true" style="vertical-align: middle"></span>'}}))),"\n",s.createElement(o.Z,{type:"info"},"Stable"),"\n",s.createElement(n.Z,null,"Colour tokens store the colour variables for styling elements."),"\n",s.createElement(r.Z,{pageContext:e.pageContext},s.createElement(r.Z.TabList,null,s.createElement(r.Z.Tab,{href:"/"},"Usage"),s.createElement(r.Z.Tab,{href:"/accessibility"},"Accessibility"),s.createElement(r.Z.Tab,{href:"/tokens"},"Tokens")),s.createElement(r.Z.TabPanel,null,e.children)))}function i(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}a.default=function(e){void 0===e&&(e={});const{wrapper:a}=Object.assign({},(0,l.ah)(),e.components);return a?s.createElement(a,e,s.createElement(c,e)):c(e)}},89482:function(e,a,t){var l=t(67294),s=t(42972);a.Z=e=>{let{color:a="var(--color-black-90)",size:t="var(--fontsize-body-xl)",style:n={},children:r}=e;return l.createElement("p",{style:{fontSize:t,color:a,maxWidth:600,...n}},(0,s.g)(r))}},26127:function(e,a,t){var l=t(67294),s=t(14160),n=t(17014),r=t(42972);const o="PageTabList",c="PageTabPanel",i="PageTab",u=e=>{var a;let{pageContext:t,children:u}=e;const b=t.frontmatter.slug,d=Array.isArray(u)?u:[u],h=d.find((e=>(0,l.isValidElement)(e)&&e.type.componentName===o)),m=d.find((e=>(0,l.isValidElement)(e)&&e.type.componentName===c)),p=null===(a=h.props)||void 0===a?void 0:a.children.filter((e=>e.type.componentName===i)),_=p.findIndex((e=>b.endsWith(e.props.href))),f=-1===_?0:_,g=0===f?b:(e=>`/${e.trim().split("/").filter((e=>!!e)).slice(0,-1).join("/")}`)(b);return l.createElement(n.a,{initiallyActiveTab:f},l.createElement(n.a.TabList,{className:"page-tabs-list"},p.map((e=>l.createElement(n.a.Tab,{key:e.props.href,onClick:()=>(0,s.navigate)(`${"/"===e.props.href?g:g+e.props.href}`)},(0,r.g)(e.props.children))))),p.map(((e,a)=>l.createElement(n.a.TabPanel,{key:e.props.href},f===a?m.props.children:l.createElement("div",null)))))},b=e=>{let{children:a}=e;return l.createElement(n.a.TabList,null,a)};b.componentName=o;const d=e=>{let{href:a,slug:t,children:s}=e;return l.createElement(n.a.Tab,null," ",s)};d.componentName=i;const h=e=>{let{children:a}=e;return l.createElement(n.a.TabPanel,null,a)};h.componentName=c,u.TabList=b,u.Tab=d,u.TabPanel=h,a.Z=u},55725:function(e,a,t){var l=t(67294),s=t(40008),n=t(42972);a.Z=e=>{let{children:a,...t}=e;return l.createElement(s.S,t,(0,n.g)(a))}}}]);