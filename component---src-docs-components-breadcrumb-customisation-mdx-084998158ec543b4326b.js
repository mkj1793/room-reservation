"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[761,2291],{96522:function(e,a,t){t.d(a,{B:function(){return g}});var r=t(67294),l=(t(7568),t(7444)),n=t(61655),s=t(46193),i=t(63998),c=t(47645),o=t(35320),d="Breadcrumb-module_breadcrumb__1m52F breadcrumb_hds-breadcrumb__3JFPo",m="Breadcrumb-module_list__3hw46 breadcrumb_hds-breadcrumb__list__3qyFn";(0,l.s)(".breadcrumb_hds-breadcrumb__3JFPo{--horizontal-margin-small:var(--spacing-layout-2-xs);--horizontal-margin-medium:var(--spacing-layout-xs);--horizontal-margin-large:var(--spacing-layout-xs);--horizontal-margin-x-large:var(--spacing-layout-s);--horizontal-margin:var(--horizontal-margin-small);display:flex;margin:0 var(--horizontal-margin);padding:var(--spacing-s) 0}.breadcrumb_hds-breadcrumb__list__3qyFn{align-items:center;flex-direction:row;word-wrap:break-word}.breadcrumb_hds-breadcrumb__list--mobile__3k5FD{display:flex}.breadcrumb_hds-breadcrumb__list--desktop__2mWwT{display:none}.breadcrumb_hds-breadcrumb__list-item__2IJfr{align-items:center;display:flex;line-height:var(--lineheight-l)}.breadcrumb_hds-breadcrumb__list-item--active__cHQPc{font-weight:700;padding:3px}.breadcrumb_hds-breadcrumb__link__mhqc3.breadcrumb_hds-breadcrumb__link__mhqc3{--link-visited-color:none;--link-color:var(--color-black-90)}.breadcrumb_hds-breadcrumb__link__mhqc3:focus,.breadcrumb_hds-breadcrumb__link__mhqc3:hover{-webkit-text-decoration-color:var(--color-black-90);text-decoration-color:var(--color-black-90)}.breadcrumb_hds-breadcrumb__list--mobile__3k5FD .breadcrumb_hds-breadcrumb__link__mhqc3{font-size:var(--fontsize-body-l)}.breadcrumb_hds-breadcrumb__back-arrow__S8SMr.breadcrumb_hds-breadcrumb__back-arrow__S8SMr{display:inline-flex;margin-left:-5px;margin-right:-3px;--icon-size:var(--spacing-m)}.breadcrumb_hds-breadcrumb__separator__2oJ4Y.breadcrumb_hds-breadcrumb__separator__2oJ4Y{display:inline-flex;padding-left:var(--spacing-3-xs);--icon-size:var(--spacing-s)}@media (min-width:768px){.breadcrumb_hds-breadcrumb__3JFPo{--horizontal-margin:var(--horizontal-margin-medium)}.breadcrumb_hds-breadcrumb__list--mobile__3k5FD{display:none}.breadcrumb_hds-breadcrumb__list--desktop__2mWwT{display:flex;flex-wrap:wrap;list-style:none;margin:0;padding:0}}@media (min-width:992px){.breadcrumb_hds-breadcrumb__3JFPo{--horizontal-margin:var(--horizontal-margin-large)}}@media (min-width:1248px){.breadcrumb_hds-breadcrumb__3JFPo{--horizontal-margin:var(--horizontal-margin-x-large)}}.Breadcrumb-module_separator__3Xxu5.Breadcrumb-module_separator__3Xxu5{padding-left:2px;padding-right:2px}");var u=function(e){var a=e.item;return r.createElement(i.L,{href:a.path,className:"Breadcrumb-module_link__BSP1k breadcrumb_hds-breadcrumb__link__mhqc3"},a.title)},b=function(e){var a=e.direction,t="right"===(void 0===a?"right":a),l=t?c.I:o.I,n=t?"Breadcrumb-module_separator__3Xxu5 breadcrumb_hds-breadcrumb__separator__2oJ4Y":"Breadcrumb-module_backArrow__2eSmu breadcrumb_hds-breadcrumb__back-arrow__S8SMr",s=t?"xs":"s";return r.createElement("span",{className:n,"aria-hidden":!0},r.createElement(l,{size:s}))},h=function(e){var a=e.item,t=e.showSeparator,l=null!==a.path;return r.createElement("li",{className:"Breadcrumb-module_listItem__2_AEc breadcrumb_hds-breadcrumb__list-item__2IJfr"},l?r.createElement(u,{item:a}):r.createElement("span",{"aria-current":!0,className:"Breadcrumb-module_activeListItem__2Gz5p breadcrumb_hds-breadcrumb__list-item--active__cHQPc"},a.title),t&&r.createElement(b,{key:"separator-".concat(a.title)}))},_=function(e){var a=e.item;return r.createElement("div",{className:(0,n.c)(m,"Breadcrumb-module_mobileList__1rj5r breadcrumb_hds-breadcrumb__list--mobile__3k5FD")},r.createElement(b,{direction:"left"}),r.createElement(u,{item:a}))},p=function(e){var a=e.list;return r.createElement("ol",{className:(0,n.c)(m,"Breadcrumb-module_desktopList__3WHv- breadcrumb_hds-breadcrumb__list--desktop__2mWwT")},a.map((function(e,t){return r.createElement(r.Fragment,{key:e.title},r.createElement(h,{key:e.title,item:e,showSeparator:t<a.length-1}))})))},g=function(e){var a=e.list,t=e.ariaLabel,l=e.theme,i=(0,s.u)(d,l),c=a.reduceRight((function(e,a){return e||(a.path?a:void 0)}),void 0);return c?r.createElement("nav",{"aria-label":t,className:(0,n.c)(d,i)},r.createElement(p,{list:a}),r.createElement(_,{item:c})):null}},40008:function(e,a,t){t.d(a,{S:function(){return o}});var r=t(77897),l=t(67294),n=(t(7568),t(7444)),s=t(61655),i={statusLabel:"StatusLabel-module_statusLabel__3R2J2 status-label_hds-status-label__1L8YI",statusLabelWithIcon:"StatusLabel-module_statusLabelWithIcon__5lKVk status-label_hds-status-label--with-icon__3bHf6",statusLabelIcon:"StatusLabel-module_statusLabelIcon__2SAou status-label_hds-status-label-icon__3K58a",info:"StatusLabel-module_info__3YrAe status-label_hds-status-label--info__J28-H",success:"StatusLabel-module_success__2BfdX status-label_hds-status-label--success__3jiST",alert:"StatusLabel-module_alert__2VR8r status-label_hds-status-label--alert__1ecsX",error:"StatusLabel-module_error__zNgn8 status-label_hds-status-label--error__2EYi4"};(0,n.s)(".status-label_hds-status-label__1L8YI{--status-label-background:var(--color-black-10);--status-label-color:var(--color-black-90);--status-label-height:32px;background-color:var(--status-label-background);border-radius:20px;color:var(--status-label-color);display:inline-block;font-size:var(--fontsize-body-s);line-height:var(--status-label-height);min-height:var(--status-label-height);padding:0 var(--spacing-2-xs);vertical-align:middle}.status-label_hds-status-label--with-icon__3bHf6{align-items:center;display:inline-flex;padding-left:var(--spacing-3-xs)}.status-label_hds-status-label-icon__3K58a{height:var(--spacing-m);margin-right:var(--spacing-3-xs);width:var(--spacing-m)}.status-label_hds-status-label--info__J28-H{--status-label-background:var(--color-info);--status-label-color:var(--color-white)}.status-label_hds-status-label--success__3jiST{--status-label-background:var(--color-success);--status-label-color:var(--color-white)}.status-label_hds-status-label--alert__1ecsX{--status-label-background:var(--color-alert)}.status-label_hds-status-label--error__2EYi4{--status-label-background:var(--color-error);--status-label-color:var(--color-white)}");var c=function(e){var a=e.icon;return l.createElement("span",{className:i.statusLabelIcon,"aria-hidden":"true"},a)},o=function(e){var a=e.children,t=e.className,n=e.dataTestId,o=e.type,d=void 0===o?"neutral":o,m=e.iconLeft,u=(0,r._)(e,["children","className","dataTestId","type","iconLeft"]);return l.createElement("span",Object.assign({className:(0,s.c)(i.statusLabel,i[d],m&&i.statusLabelWithIcon,t),"data-testid":n},u),m&&l.createElement(c,{icon:m}),a)}},83498:function(e,a,t){t.r(a);var r=t(11151),l=t(67294),n=t(96522),s=t(50275);const i=e=>{let{children:a,pageContext:t}=e;return l.createElement(s.default,{pageContext:t},a)};function c(e){const a=Object.assign({h2:"h2",a:"a",span:"span",h3:"h3",p:"p",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",pre:"pre"},(0,r.ah)(),e.components),{Playground:t}=a;return t||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Playground",!0),l.createElement(l.Fragment,null,l.createElement(a.h2,{id:"customisation",style:{position:"relative"}},"Customisation",l.createElement(a.a,{href:"#customisation","aria-label":"customisation permalink",className:"header-anchor after"},l.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span class="hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs" aria-hidden="true" style="vertical-align: middle"></span>'}}))),"\n",l.createElement(a.h3,{id:"customisation-properties",style:{position:"relative"}},"Customisation properties",l.createElement(a.a,{href:"#customisation-properties","aria-label":"customisation properties permalink",className:"header-anchor after"},l.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span class="hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs" aria-hidden="true" style="vertical-align: middle"></span>'}}))),"\n",l.createElement(a.p,null,"In Core version, you can either use the ",l.createElement(a.code,null,"style")," or ",l.createElement(a.code,null,"class")," attributes in the HTML to customise the component."),"\n",l.createElement(a.p,null,"In React version, you can use the ",l.createElement(a.code,null,"theme")," property to customise the component."),"\n",l.createElement(a.p,null,"See all available theme variables in the table below."),"\n",l.createElement(a.table,null,l.createElement(a.thead,null,l.createElement(a.tr,null,l.createElement(a.th,null,"Theme variable"),l.createElement(a.th,null,"Description"))),l.createElement(a.tbody,null,l.createElement(a.tr,null,l.createElement(a.td,null,l.createElement(a.code,null,"--horizontal-margin-small")),l.createElement(a.td,null,"Horizontal margin on small screens (< 768px). Default is ",l.createElement(a.code,null,"--spacing-layout-2-xs"))),l.createElement(a.tr,null,l.createElement(a.td,null,l.createElement(a.code,null,"--horizontal-margin-medium")),l.createElement(a.td,null,"Horizontal margin on medium screens (>=768px). Default is ",l.createElement(a.code,null,"--spacing-layout-xs"))),l.createElement(a.tr,null,l.createElement(a.td,null,l.createElement(a.code,null,"--horizontal-margin-large")),l.createElement(a.td,null,"Horizontal margin on large screens (>= 992px). Default is ",l.createElement(a.code,null,"--spacing-layout-xs"))),l.createElement(a.tr,null,l.createElement(a.td,null,l.createElement(a.code,null,"--horizontal-margin-x-large")),l.createElement(a.td,null,"Horizontal margin on xtra large screens (>= 1248px). Default is ",l.createElement(a.code,null,"--spacing-layout-s"))))),"\n",l.createElement(a.h3,{id:"customisation-example",style:{position:"relative"}},"Customisation example",l.createElement(a.a,{href:"#customisation-example","aria-label":"customisation example permalink",className:"header-anchor after"},l.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span class="hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs" aria-hidden="true" style="vertical-align: middle"></span>'}}))),"\n",l.createElement(t,{scope:{Breadcrumb:n.B}},l.createElement(a.pre,null,l.createElement(a.code,{className:"language-jsx"},"import { Breadcrumb } from 'hds-react';\n\n() => (\n<Breadcrumb\n  ariaLabel=\"Breadcrumb\"\n  list={[\n    { title: 'Front page', path: '/' },\n    { title: 'Health and social services', path: '/path' },\n    { title: 'Senior services', path: '/path/2ndLevelPath' },\n    { title: 'Informal care', path: '/path/2ndLevelPath/3rdLevelPath' },\n    { title: 'Care options', path: null },\n  ]}\n  theme={{\n    '--horizontal-margin-small': 'var(--spacing-layout-s)',\n    '--horizontal-margin-medium': 'var(--spacing-layout-m)',\n    '--horizontal-margin-large': 'var(--spacing-layout-l)',\n    '--horizontal-margin-x-large': 'var(--spacing-layout-xl)',\n  }}\n/>)\n")),l.createElement(a.pre,null,l.createElement(a.code,{className:"language-html"},'<style scoped>\n  .custom-theme {\n    --horizontal-margin-small: var(--spacing-layout-s);\n    --horizontal-margin-medium: var(--spacing-layout-m);\n    --horizontal-margin-large: var(--spacing-layout-l);\n    --horizontal-margin-x-large: var(--spacing-layout-xl);\n  }\n</style>\n<nav aria-label="Breadcrumb" class="hds-breadcrumb custom-theme">\n  <ol class="hds-breadcrumb__list hds-breadcrumb__list--desktop">\n    <li class="hds-breadcrumb__list-item">\n      <a class="hds-link hds-link--medium hds-breadcrumb__link" href="/">Front page</a>\n      <span class="hds-icon hds-icon--angle-right hds-breadcrumb__separator" aria-hidden="true"></span>\n    </li>\n    <li class="hds-breadcrumb__list-item">\n      <a class="hds-link hds-link--medium hds-breadcrumb__link" href="/path">Health and social services</a>\n      <span class="hds-icon hds-icon--angle-right hds-breadcrumb__separator" aria-hidden="true"></span>\n    </li>\n    <li class="hds-breadcrumb__list-item">\n      <a class="hds-link hds-link--medium hds-breadcrumb__link" href="/path/2ndLevelPath">Senior services</a>\n      <span class="hds-icon hds-icon--angle-right hds-breadcrumb__separator" aria-hidden="true"></span>\n    </li>\n    <li class="hds-breadcrumb__list-item">\n      <a class="hds-link hds-link--medium hds-breadcrumb__link" href="/path/2ndLevelPath/3rdLevelPath">Informal care</a>\n      <span class="hds-icon hds-icon--angle-right hds-breadcrumb__separator" aria-hidden="true"></span>\n    </li>\n    <li class="hds-breadcrumb__list-item hds-breadcrumb__list-item--active">\n      <span aria-current="true" class="Breadcrumb_active__02+NO">Care options</span>\n    </li>\n  </ol>\n  <div class="hds-breadcrumb__list hds-breadcrumb__list--mobile">\n    <span class="hds-icon hds-icon--angle-left hds-breadcrumb__back-arrow" aria-hidden="true"> </span>\n    <a class="hds-link hds-link--medium hds-breadcrumb__link" href="/path/2ndLevelPath/3rdLevelPath">Informal care</a>\n  </div>\n</nav>\n'))))}a.default=function(e){return void 0===e&&(e={}),l.createElement(i,e,l.createElement(c,e))}},50275:function(e,a,t){t.r(a);var r=t(11151),l=t(67294),n=t(57674),s=t(89482),i=(t(18607),t(26127)),c=t(55725);function o(e){const a=Object.assign({h1:"h1",a:"a",span:"span"},(0,r.ah)(),e.components);return i.Z||d("PageTabs",!1),i.Z.Tab||d("PageTabs.Tab",!0),i.Z.TabList||d("PageTabs.TabList",!0),i.Z.TabPanel||d("PageTabs.TabPanel",!0),l.createElement(l.Fragment,null,l.createElement(a.h1,{id:"breadcrumb",style:{position:"relative"}},"Breadcrumb",l.createElement(a.a,{href:"#breadcrumb","aria-label":"breadcrumb permalink",className:"header-anchor after"},l.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span class="hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs" aria-hidden="true" style="vertical-align: middle"></span>'}}))),"\n",l.createElement("div",{class:"status-label-description"},l.createElement(c.Z,{type:"alert"},"Beta"),l.createElement(c.Z,{type:"success",style:{marginLeft:"var(--spacing-xs)"}},"Accessible"),l.createElement(n.Z)),"\n",l.createElement(s.Z,null,"Breadcrumb is a navigational element that provides links back to each previous page the user navigated through and\nshows the user's current location on a website."),"\n",l.createElement(i.Z,{pageContext:e.pageContext},l.createElement(i.Z.TabList,null,l.createElement(i.Z.Tab,{href:"/"},"Usage"),l.createElement(i.Z.Tab,{href:"/code"},"Code"),l.createElement(i.Z.Tab,{href:"/accessibility"},"Accessibility"),l.createElement(i.Z.Tab,{href:"/customisation"},"Customisation")),l.createElement(i.Z.TabPanel,null,e.children)))}function d(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}a.default=function(e){void 0===e&&(e={});const{wrapper:a}=Object.assign({},(0,r.ah)(),e.components);return a?l.createElement(a,e,l.createElement(o,e)):o(e)}},89482:function(e,a,t){var r=t(67294),l=t(42972);a.Z=e=>{let{color:a="var(--color-black-90)",size:t="var(--fontsize-body-xl)",style:n={},children:s}=e;return r.createElement("p",{style:{fontSize:t,color:a,maxWidth:600,...n}},(0,l.g)(s))}},26127:function(e,a,t){var r=t(67294),l=t(14160),n=t(17014),s=t(42972);const i="PageTabList",c="PageTabPanel",o="PageTab",d=e=>{var a;let{pageContext:t,children:d}=e;const m=t.frontmatter.slug,u=Array.isArray(d)?d:[d],b=u.find((e=>(0,r.isValidElement)(e)&&e.type.componentName===i)),h=u.find((e=>(0,r.isValidElement)(e)&&e.type.componentName===c)),_=null===(a=b.props)||void 0===a?void 0:a.children.filter((e=>e.type.componentName===o)),p=_.findIndex((e=>m.endsWith(e.props.href))),g=-1===p?0:p,v=0===g?m:(e=>`/${e.trim().split("/").filter((e=>!!e)).slice(0,-1).join("/")}`)(m);return r.createElement(n.a,{initiallyActiveTab:g},r.createElement(n.a.TabList,{className:"page-tabs-list"},_.map((e=>r.createElement(n.a.Tab,{key:e.props.href,onClick:()=>(0,l.navigate)(`${"/"===e.props.href?v:v+e.props.href}`)},(0,s.g)(e.props.children))))),_.map(((e,a)=>r.createElement(n.a.TabPanel,{key:e.props.href},g===a?h.props.children:r.createElement("div",null)))))},m=e=>{let{children:a}=e;return r.createElement(n.a.TabList,null,a)};m.componentName=i;const u=e=>{let{href:a,slug:t,children:l}=e;return r.createElement(n.a.Tab,null," ",l)};u.componentName=o;const b=e=>{let{children:a}=e;return r.createElement(n.a.TabPanel,null,a)};b.componentName=c,d.TabList=m,d.Tab=u,d.TabPanel=b,a.Z=d},55725:function(e,a,t){var r=t(67294),l=t(40008),n=t(42972);a.Z=e=>{let{children:a,...t}=e;return r.createElement(l.S,t,(0,n.g)(a))}},57674:function(e,a,t){var r=t(67294),l=t(12367);a.Z=()=>{const e={Draft:"The component is work in progress",Beta:"The component is being tested",Stable:"The component has been tested and defects have been fixed",Accessible:"The component has been reviewed for accessibility",Deprecated:"The component will be removed"};return r.createElement(l.T,{placement:"right-end",className:"status-label-tooltip",boxShadow:!0},r.createElement("ul",{className:"status-label-definitions"},Object.keys(e).map((a=>r.createElement("li",{key:a},r.createElement("span",{className:"status-name"},a),r.createElement("span",null,e[a]))))))}}}]);