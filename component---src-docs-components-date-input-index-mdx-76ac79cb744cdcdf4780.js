(self.webpackChunksite=self.webpackChunksite||[]).push([[7390,2761],{91309:function(e,t,a){var n="[object Null]",l="[object Undefined]",s="object"==typeof a.g&&a.g&&a.g.Object===Object&&a.g,i="object"==typeof self&&self&&self.Object===Object&&self,r=s||i||Function("return this")(),o=Object.prototype,c=o.hasOwnProperty,d=o.toString,u=r.Symbol,h=u?u.toStringTag:void 0;function p(e){return null==e?void 0===e?l:n:h&&h in Object(e)?function(e){var t=c.call(e,h),a=e[h];try{e[h]=void 0;var n=!0}catch(s){}var l=d.call(e);n&&(t?e[h]=a:delete e[h]);return l}(e):function(e){return d.call(e)}(e)}e.exports=function(e){if(!function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}(e))return!1;var t=p(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}},83428:function(e,t,a){"use strict";a.d(t,{S:function(){return c}});var n=a(80136),l=a(67294),s=a(7444),i=a(34300),r={statusLabel:"StatusLabel-module_statusLabel__3R2J2 status-label_hds-status-label__1L8YI",statusLabelWithIcon:"StatusLabel-module_statusLabelWithIcon__5lKVk status-label_hds-status-label--with-icon__3bHf6",statusLabelIcon:"StatusLabel-module_statusLabelIcon__2SAou status-label_hds-status-label-icon__3K58a",info:"StatusLabel-module_info__3YrAe status-label_hds-status-label--info__J28-H",success:"StatusLabel-module_success__2BfdX status-label_hds-status-label--success__3jiST",alert:"StatusLabel-module_alert__2VR8r status-label_hds-status-label--alert__1ecsX",error:"StatusLabel-module_error__zNgn8 status-label_hds-status-label--error__2EYi4"};(0,s.s)(".status-label_hds-status-label__1L8YI{--status-label-background:var(--color-black-10);--status-label-color:var(--color-black-90);--status-label-height:32px;background-color:var(--status-label-background);border-radius:20px;color:var(--status-label-color);display:inline-block;font-size:var(--fontsize-body-s);line-height:var(--status-label-height);min-height:var(--status-label-height);padding:0 var(--spacing-2-xs);vertical-align:middle}.status-label_hds-status-label--with-icon__3bHf6{align-items:center;display:inline-flex;padding-left:var(--spacing-3-xs)}.status-label_hds-status-label-icon__3K58a{height:var(--spacing-m);margin-right:var(--spacing-3-xs);width:var(--spacing-m)}.status-label_hds-status-label--info__J28-H{--status-label-background:var(--color-info);--status-label-color:var(--color-white)}.status-label_hds-status-label--success__3jiST{--status-label-background:var(--color-success);--status-label-color:var(--color-white)}.status-label_hds-status-label--alert__1ecsX{--status-label-background:var(--color-alert)}.status-label_hds-status-label--error__2EYi4{--status-label-background:var(--color-error);--status-label-color:var(--color-white)}");const o=e=>{let{icon:t}=e;return l.createElement("span",{className:r.statusLabelIcon,"aria-hidden":"true"},t)},c=e=>{var{children:t,className:a,dataTestId:s,type:c="neutral",iconLeft:d}=e,u=(0,n._)(e,["children","className","dataTestId","type","iconLeft"]);return l.createElement("span",Object.assign({className:(0,i.c)(r.statusLabel,r[c],d&&r.statusLabelWithIcon,a),"data-testid":s},u),d&&l.createElement(o,{icon:d}),t)}},37776:function(e,t,a){"use strict";a.d(t,{c:function(){return n}});var n=(e,t,a,n,l)=>[t&&e+"-helper",a&&e+"-error",n&&e+"-success",l&&e+"-info"].filter((e=>e)).join(" ")},94330:function(e,t,a){"use strict";a.d(t,{m:function(){return s}});var n=a(91309),l=a.n(n),s=(e,t)=>{l()(e)?e(t.current):e.current=t.current}},76510:function(e,t,a){"use strict";a.r(t);var n=a(11151),l=a(67294),s=a(48120),i=a(94474);const r=e=>{let{children:t,pageContext:a}=e;return l.createElement(i.default,{pageContext:a},t)};function o(e){const t=Object.assign({h2:"h2",a:"a",span:"span",h3:"h3",ul:"ul",li:"li",h4:"h4",strong:"strong",p:"p",code:"code"},(0,n.ah)(),e.components),{PlaygroundPreview:a,InternalLink:i,ExternalLink:r}=t;return r||c("ExternalLink",!0),i||c("InternalLink",!0),a||c("PlaygroundPreview",!0),l.createElement(l.Fragment,null,l.createElement(t.h2,{id:"usage",style:{position:"relative"}},"Usage",l.createElement(t.a,{href:"#usage","aria-label":"usage permalink",className:"header-anchor after"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span class="hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs" aria-hidden="true" style="vertical-align: middle"></span>'}}))),"\n",l.createElement(t.h3,{id:"example",style:{position:"relative"}},"Example",l.createElement(t.a,{href:"#example","aria-label":"example permalink",className:"header-anchor after"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span class="hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs" aria-hidden="true" style="vertical-align: middle"></span>'}}))),"\n",l.createElement(a,null,l.createElement("div",{style:{maxWidth:"400px"}},l.createElement(s.D,{helperText:"Use format D.M.YYYY",id:"date-input-example-1",initialMonth:new Date,label:"Choose a date",language:"en",onChange:function(){},required:!0}))),"\n",l.createElement(t.h3,{id:"principles",style:{position:"relative"}},"Principles",l.createElement(t.a,{href:"#principles","aria-label":"principles permalink",className:"header-anchor after"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span class="hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs" aria-hidden="true" style="vertical-align: middle"></span>'}}))),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Only use a date input when you can expect the user to input a specific date. If it can be difficult for the user to determine which date they should choose or if the selected date can be vague, let the user choose, for example, a week, month or a date range.","\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"When selecting weeks or months, it is usually better to use ",l.createElement(i,{size:"M",href:"/components/dropdown#select-single-selection"},"the dropdown select component"),"."),"\n"),"\n"),"\n",l.createElement(t.li,null,'Pay close attention to the date input label. It should clearly describe the date the user is expected to input. A good label describes the input, such as "Arrival date".'),"\n",l.createElement(t.li,null,"The date input should be provided with an assistive text which tells the user the expected date format. Avoid relying on a placeholder text alone because it will disappear when the user starts typing. The recommended way to show the expected format is to use the assistive text below the input.","\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"As specified in ",l.createElement(i,{size:"M",href:"/foundation/guidelines/data-formats"},"the data format guidelines"),", Helsinki services will always use D.M.YYYY format. Do not use the English date format even if the user is using English locale."),"\n"),"\n"),"\n",l.createElement(t.li,null,"When asking for date ranges, you should use two separate date inputs instead of using one input or picker for both dates."),"\n",l.createElement(t.li,null,"HDS Date picker acts as a modal. This means that clicking outside of the date picker closes it. Closing the picker this way also cancels the selection made in the date picker."),"\n"),"\n",l.createElement(t.h4,{id:"when-to-use-the-date-picker",style:{position:"relative"}},"When to use the date picker?",l.createElement(t.a,{href:"#when-to-use-the-date-picker","aria-label":"when to use the date picker permalink",className:"header-anchor after"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span class="hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs" aria-hidden="true" style="vertical-align: middle"></span>'}}))),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"Use the date picker")," (calendar) when it is useful for the user to see how the selected date is related to other dates and/or which weekday it is."),"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"Do not use the date picker")," if the date is easily remembered or is obvious for the user or if the date is further into the past or the future. Date of birth is an example of a situation where the date picker should not be used."),"\n"),"\n",l.createElement(t.h3,{id:"variations",style:{position:"relative"}},"Variations",l.createElement(t.a,{href:"#variations","aria-label":"variations permalink",className:"header-anchor after"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span class="hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs" aria-hidden="true" style="vertical-align: middle"></span>'}}))),"\n",l.createElement(t.h4,{id:"date-input-with-a-picker",style:{position:"relative"}},"Date input with a picker",l.createElement(t.a,{href:"#date-input-with-a-picker","aria-label":"date input with a picker permalink",className:"header-anchor after"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span class="hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs" aria-hidden="true" style="vertical-align: middle"></span>'}}))),"\n",l.createElement(t.p,null,"Out of the box, HDS date input will include an openable date picker which allows the user to select the date via a calendar view. The date can be also inputted manually, which is the recommended setup for most use cases."),"\n",l.createElement(a,null,l.createElement("div",{style:{maxWidth:"400px"}},l.createElement(s.D,{helperText:"Use format D.M.YYYY",id:"date-input-example-2",initialMonth:new Date,label:"Choose a date",language:"en",onChange:function(){},required:!0}))),"\n",l.createElement(t.h4,{id:"date-input-without-a-confirmation",style:{position:"relative"}},"Date input without a confirmation",l.createElement(t.a,{href:"#date-input-without-a-confirmation","aria-label":"date input without a confirmation permalink",className:"header-anchor after"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span class="hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs" aria-hidden="true" style="vertical-align: middle"></span>'}}))),"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Note!")," Since this variant closes the date picker immediately after selection, it violates ",l.createElement(r,{href:"https://www.w3.org/TR/WCAG21/#on-input"},"WCAG 3.2.2 On Input guideline"),". Therefore, this variant should only be used in administration and intranet type of services."),"\n",l.createElement(t.p,null,"The default HDS date picker requires a confirmation after the date has been selected from the calendar. If your service is mostly desktop or meant for administration, the confirmation can be disabled with ",l.createElement(t.code,null,"disableConfirmation")," prop to allow more fluid ser experience when selecting multiple dates in a row."),"\n",l.createElement(t.p,null,"In all other types of services, it is recommended to not disable the confirmation step."),"\n",l.createElement(a,null,l.createElement("div",{style:{maxWidth:"400px"}},l.createElement(s.D,{disableConfirmation:!0,helperText:"Use format D.M.YYYY",id:"date-input-example-3",initialMonth:new Date,label:"Choose a date",language:"en",onChange:function(){},required:!0}))),"\n",l.createElement(t.h4,{id:"date-input-without-a-picker",style:{position:"relative"}},"Date input without a picker",l.createElement(t.a,{href:"#date-input-without-a-picker","aria-label":"date input without a picker permalink",className:"header-anchor after"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span class="hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs" aria-hidden="true" style="vertical-align: middle"></span>'}}))),"\n",l.createElement(t.p,null,"It is possible to disable the date picker functionality by supplying a ",l.createElement(t.code,null,"disableDatePicker")," prop to the input. To learn when the date picker should be hidden, see ",l.createElement(t.a,{href:"#when-to-use-the-date-picker"},"when to use date picker")," above."),"\n",l.createElement(a,null,l.createElement("div",{style:{maxWidth:"400px"}},l.createElement(s.D,{disableDatePicker:!0,helperText:"Use format D.M.YYYY",id:"date-input-example-4",initialMonth:new Date,label:"Choose a date",language:"en",onChange:function(){},required:!0}))))}function c(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}t.default=function(e){return void 0===e&&(e={}),l.createElement(r,e,l.createElement(o,e))}},94474:function(e,t,a){"use strict";a.r(t);var n=a(11151),l=a(67294),s=a(83428),i=a(57674),r=a(89482),o=(a(18607),a(26127));function c(e){const t=Object.assign({h1:"h1",a:"a",span:"span"},(0,n.ah)(),e.components);return o.Z||d("PageTabs",!1),o.Z.Tab||d("PageTabs.Tab",!0),o.Z.TabList||d("PageTabs.TabList",!0),o.Z.TabPanel||d("PageTabs.TabPanel",!0),l.createElement(l.Fragment,null,l.createElement(t.h1,{id:"dateinput",style:{position:"relative"}},"DateInput",l.createElement(t.a,{href:"#dateinput","aria-label":"dateinput permalink",className:"header-anchor after"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span class="hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs" aria-hidden="true" style="vertical-align: middle"></span>'}}))),"\n",l.createElement("div",{class:"status-label-description"},l.createElement(s.S,{type:"info"},"Stable"),l.createElement(s.S,{type:"success",style:{marginLeft:"var(--spacing-xs)"}},"Accessible"),l.createElement(i.Z)),"\n",l.createElement(r.Z,null,"Date input allows the user to easily input a specific date or a date range. By default, HDS date input is supplied with a date picker functionality."),"\n",l.createElement(o.Z,{pageContext:e.pageContext},l.createElement(o.Z.TabList,null,l.createElement(o.Z.Tab,{href:"/"},"Usage"),l.createElement(o.Z.Tab,{href:"/code"},"Code"),l.createElement(o.Z.Tab,{href:"/accessibility"},"Accessibility")),l.createElement(o.Z.TabPanel,null,e.children)))}function d(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}t.default=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?l.createElement(t,e,l.createElement(c,e)):c(e)}},89482:function(e,t,a){"use strict";var n=a(67294);t.Z=e=>{let{color:t="var(--color-black-90)",size:a="var(--fontsize-body-xl)",style:l={},children:s}=e;return n.createElement("p",{style:{fontSize:a,color:t,maxWidth:600,...l}},s)}},26127:function(e,t,a){"use strict";var n=a(67294),l=a(14160),s=a(67461);const i="PageTabList",r="PageTabPanel",o="PageTab",c=e=>{var t;let{pageContext:a,children:c}=e;const d=a.frontmatter.slug,u=Array.isArray(c)?c:[c],h=u.find((e=>(0,n.isValidElement)(e)&&e.type.componentName===i)),p=u.find((e=>(0,n.isValidElement)(e)&&e.type.componentName===r)),m=null===(t=h.props)||void 0===t?void 0:t.children.filter((e=>e.type.componentName===o)),b=m.findIndex((e=>d.endsWith(e.props.href))),f=-1===b?0:b,g=0===f?d:(e=>"/"+e.trim().split("/").filter((e=>!!e)).slice(0,-1).join("/"))(d);return n.createElement(s.a,{initiallyActiveTab:f},n.createElement(s.a.TabList,{className:"page-tabs-list"},m.map((e=>n.createElement(s.a.Tab,{key:e.props.href,onClick:()=>(0,l.navigate)(""+("/"===e.props.href?g:g+e.props.href))},e.props.children)))),m.map(((e,t)=>n.createElement(s.a.TabPanel,{key:e.props.href},f===t?p.props.children:n.createElement("div",null)))))},d=e=>{let{children:t}=e;return n.createElement(s.a.TabList,null,t)};d.componentName=i;const u=e=>{let{href:t,slug:a,children:l}=e;return n.createElement(s.a.Tab,null,l)};u.componentName=o;const h=e=>{let{children:t}=e;return n.createElement(s.a.TabPanel,null,t)};h.componentName=r,c.TabList=d,c.Tab=u,c.TabPanel=h,t.Z=c},57674:function(e,t,a){"use strict";var n=a(67294),l=a(45422);t.Z=()=>{const e={Draft:"The component is work in progress",Beta:"The component is being tested",Stable:"The component has been tested and defects have been fixed",Accessible:"The component has been reviewed for accessibility",Deprecated:"The component will be removed"};return n.createElement(l.T,{placement:"right-end",className:"status-label-tooltip",boxShadow:!0},n.createElement("ul",{className:"status-label-definitions"},Object.keys(e).map((t=>n.createElement("li",{key:t},n.createElement("span",{className:"status-name"},t),n.createElement("span",null,e[t]))))))}}}]);