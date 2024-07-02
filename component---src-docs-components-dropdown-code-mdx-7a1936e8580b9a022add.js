"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[8644],{53598:function(e,n,l){l.r(n);var t=l(11151),a=l(67294),r=l(63666),o=l(90945),c=l(93862),s=l(13573);const i=e=>{let{children:n,pageContext:l}=e;return a.createElement(s.default,{pageContext:l},n)};function m(e){const n=Object.assign({h2:"h2",a:"a",span:"span",h3:"h3",h4:"h4",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",p:"p"},(0,t.ah)(),e.components),{Playground:l,IconCheckCircleFill:s,Link:i,ExternalLink:m,IconCrossCircle:u,InternalLink:p}=n;return m||d("ExternalLink",!0),s||d("IconCheckCircleFill",!0),u||d("IconCrossCircle",!0),p||d("InternalLink",!0),i||d("Link",!0),l||d("Playground",!0),a.createElement(a.Fragment,null,a.createElement(n.h2,{id:"code",style:{position:"relative"}},"Code",a.createElement(n.a,{href:"#code","aria-label":"code permalink",className:"header-anchor after"},a.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span class="hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs" aria-hidden="true" style="vertical-align: middle"></span>'}}))),"\n",a.createElement(n.h3,{id:"code-examples",style:{position:"relative"}},"Code examples",a.createElement(n.a,{href:"#code-examples","aria-label":"code examples permalink",className:"header-anchor after"},a.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span class="hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs" aria-hidden="true" style="vertical-align: middle"></span>'}}))),"\n",a.createElement(n.h4,{id:"select-single-selection",style:{position:"relative"}},"Select (single selection)",a.createElement(n.a,{href:"#select-single-selection","aria-label":"select single selection permalink",className:"header-anchor after"},a.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span class="hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs" aria-hidden="true" style="vertical-align: middle"></span>'}}))),"\n",a.createElement(l,{scope:{Select:r.b,IconUser:o.d}},a.createElement(n.pre,null,a.createElement(n.code,{className:"language-jsx"},"import { Select, IconUser } from 'hds-react';\n\n() => {\n  const options = [{ label: 'Plutonium' }, { label: 'Americium' }, { label: 'Copernicium' }, { label: 'Berkelium' }];\n  return (\n    <>\n      <Select required label=\"Label\" helper=\"Assistive text\" placeholder=\"Placeholder\" options={options} />\n      <Select\n        disabled\n        label=\"Label\"\n        helper=\"Assistive text\"\n        placeholder=\"Placeholder\"\n        options={options}\n        style={{ marginTop: 'var(--spacing-xs)' }}\n      />\n      <Select\n        invalid\n        required\n        label=\"Label\"\n        error=\"Error description\"\n        placeholder=\"Placeholder\"\n        options={options}\n        style={{ marginTop: 'var(--spacing-xs)' }}\n      />\n      <Select\n        required\n        label=\"Label\"\n        helper=\"Assistive text\"\n        placeholder=\"Placeholder\"\n        icon={<IconUser />}\n        options={[{ label: 'Adam' }, { label: 'Caitlyn' }, { label: 'Jack' }, { label: 'Sally' }]}\n        style={{ marginTop: 'var(--spacing-xs)' }}\n      />\n    </>\n  )\n}\n"))),"\n",a.createElement(n.h3,{id:"select-multi-selection",style:{position:"relative"}},"Select (multi-selection)",a.createElement(n.a,{href:"#select-multi-selection","aria-label":"select multi selection permalink",className:"header-anchor after"},a.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span class="hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs" aria-hidden="true" style="vertical-align: middle"></span>'}}))),"\n",a.createElement(l,{scope:{Select:r.b}},a.createElement(n.pre,null,a.createElement(n.code,{className:"language-jsx"},"import { Select } from 'hds-react';\n\n() => (\n  <Select\n    multiselect\n    required\n    label=\"Label\"\n    placeholder=\"Placeholder\"\n    helper=\"Assistive text\"\n    options={[\n      { label: 'Plutonium' },\n      { label: 'Americium' },\n      { label: 'Copernicium' },\n      { label: 'Berkelium' },\n    ]}\n    clearButtonAriaLabel=\"Clear all selections\"\n    selectedItemRemoveButtonAriaLabel=\"Remove ${value}\"\n  />\n)\n"))),"\n",a.createElement(n.h3,{id:"combobox-single-selection",style:{position:"relative"}},"Combobox (single selection)",a.createElement(n.a,{href:"#combobox-single-selection","aria-label":"combobox single selection permalink",className:"header-anchor after"},a.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span class="hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs" aria-hidden="true" style="vertical-align: middle"></span>'}}))),"\n",a.createElement(l,{scope:{Combobox:c.C,IconUser:o.d}},a.createElement(n.pre,null,a.createElement(n.code,{className:"language-jsx"},"import { Combobox, IconUser } from 'hds-react';\n\n() => {\n  const options = [\n    { label: 'Americium' },\n    { label: 'Berkelium' },\n    { label: 'Californium' },\n    { label: 'Copernicium' },\n    { label: 'Einsteinium' },\n    { label: 'Fermium' },\n    { label: 'Mendelevium' },\n    { label: 'Plutonium' },\n  ]\n  return (\n    <>\n      <Combobox required label=\"Label\" helper=\"Assistive text\" placeholder=\"Placeholder\" toggleButtonAriaLabel=\"Toggle menu\" options={options} />\n      <Combobox\n        disabled\n        label=\"Label\"\n        helper=\"Assistive text\"\n        placeholder=\"Placeholder\"\n        toggleButtonAriaLabel=\"Toggle menu\"\n        options={options}\n        style={{ marginTop: 'var(--spacing-xs)' }}\n      />\n      <Combobox\n        invalid\n        required\n        label=\"Label\"\n        error=\"Error description\"\n        placeholder=\"Placeholder\"\n        toggleButtonAriaLabel=\"Toggle menu\"\n        options={options}\n        style={{ marginTop: 'var(--spacing-xs)' }}\n      />\n      <Combobox\n        required\n        label=\"Label\"\n        helper=\"Assistive text\"\n        placeholder=\"Placeholder\"\n        toggleButtonAriaLabel=\"Toggle menu\"\n        icon={<IconUser />}\n        options={[\n          { label: 'Adam' },\n          { label: 'Allie' },\n          { label: 'Bob' },\n          { label: 'Caitlyn' },\n          { label: 'Jack' },\n          { label: 'Olivia' },\n          { label: 'Sally' },\n          { label: 'Sam' },\n        ]}\n        style={{ marginTop: 'var(--spacing-xs)' }}\n      />\n    </>\n  )\n}\n"))),"\n",a.createElement(n.h3,{id:"combobox-multi-selection",style:{position:"relative"}},"Combobox (multi-selection)",a.createElement(n.a,{href:"#combobox-multi-selection","aria-label":"combobox multi selection permalink",className:"header-anchor after"},a.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span class="hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs" aria-hidden="true" style="vertical-align: middle"></span>'}}))),"\n",a.createElement(l,{scope:{Combobox:c.C}},a.createElement(n.pre,null,a.createElement(n.code,{className:"language-jsx"},"import { Combobox } from 'hds-react';\n\n() => (\n  <Combobox\n    multiselect\n    required\n    label=\"Label\"\n    helper=\"Assistive text\"\n    placeholder=\"Placeholder\"\n    options={[\n      { label: 'Americium' },\n      { label: 'Berkelium' },\n      { label: 'Californium' },\n      { label: 'Copernicium' },\n      { label: 'Einsteinium' },\n      { label: 'Fermium' },\n      { label: 'Mendelevium' },\n      { label: 'Plutonium' },\n    ]}\n    clearButtonAriaLabel=\"Clear all selections\"\n    selectedItemRemoveButtonAriaLabel=\"Remove ${value}\"\n    toggleButtonAriaLabel=\"Toggle menu\"\n  />\n)\n"))),"\n",a.createElement(n.h3,{id:"packages",style:{position:"relative"}},"Packages",a.createElement(n.a,{href:"#packages","aria-label":"packages permalink",className:"header-anchor after"},a.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span class="hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs" aria-hidden="true" style="vertical-align: middle"></span>'}}))),"\n",a.createElement(n.table,null,a.createElement(n.thead,null,a.createElement(n.tr,null,a.createElement(n.th,null,"Package"),a.createElement(n.th,null,"Included"),a.createElement(n.th,null,"Storybook link"),a.createElement(n.th,null,"Source link"))),a.createElement(n.tbody,null,a.createElement(n.tr,null,a.createElement(n.td,null,a.createElement(n.strong,null,"HDS React")),a.createElement(n.td,null,a.createElement("div",{style:{display:"flex",gap:"var(--spacing-3-xs)"}},a.createElement(s)," Yes ")),a.createElement(n.td,null,a.createElement(i,{openInNewTab:!0,openInNewTabAriaLabel:"Opens in a new tab",href:"/storybook/react/?path=/story/components-dropdowns-select--default"},"View Select in Storybook")," ",a.createElement(i,{openInNewTab:!0,openInNewTabAriaLabel:"Opens in a new tab",href:"/storybook/react/?path=/story/components-dropdowns-combobox--default"},"View Combobox in Storybook")),a.createElement(n.td,null,a.createElement(m,{openInNewTab:!0,openInNewTabAriaLabel:"Opens in a new tab",href:"https://github.com/City-of-Helsinki/helsinki-design-system/tree/master/packages/react/src/components/dropdown"},"View source"))),a.createElement(n.tr,null,a.createElement(n.td,null,a.createElement(n.strong,null,"HDS Core")),a.createElement(n.td,null,a.createElement("div",{style:{display:"flex",gap:"var(--spacing-3-xs)"}},a.createElement(u)," No ")),a.createElement(n.td,null,"-"),a.createElement(n.td,null,"-")))),"\n",a.createElement(n.h3,{id:"properties",style:{position:"relative"}},"Properties",a.createElement(n.a,{href:"#properties","aria-label":"properties permalink",className:"header-anchor after"},a.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span class="hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs" aria-hidden="true" style="vertical-align: middle"></span>'}}))),"\n",a.createElement(n.p,null,"Note! You can find the full list of properties in the ",a.createElement(i,{openInNewTab:!0,openInNewTabAriaLabel:"Opens in a new tab",href:"/storybook/react/?path=/docs/components-dropdowns-combobox--default"},"React Storybook.")),"\n",a.createElement(n.p,null,"Also, note that this component is an input. All features supported by the HDS TextInput are also supported by this component. See ",a.createElement(p,{href:"/components/text-input"},"TextInput documentation page")," for more information."),"\n",a.createElement(n.table,null,a.createElement(n.thead,null,a.createElement(n.tr,null,a.createElement(n.th,null,"Property"),a.createElement(n.th,null,"Description"),a.createElement(n.th,null,"Values"),a.createElement(n.th,null,"Default value"))),a.createElement(n.tbody,null,a.createElement(n.tr,null,a.createElement(n.td,null,a.createElement(n.code,null,"clearable")),a.createElement(n.td,null,"If set to true, the clear selections button is enabled."),a.createElement(n.td,null,a.createElement(n.code,null,"boolean")),a.createElement(n.td,null,"false")),a.createElement(n.tr,null,a.createElement(n.td,null,a.createElement(n.code,null,"disabled")),a.createElement(n.td,null,"If set to true, the dropdown is disabled."),a.createElement(n.td,null,a.createElement(n.code,null,"boolean")),a.createElement(n.td,null,"false")),a.createElement(n.tr,null,a.createElement(n.td,null,a.createElement(n.code,null,"helper")),a.createElement(n.td,null,"Helper text to be displayed below the input."),a.createElement(n.td,null,a.createElement(n.code,null,"string")),a.createElement(n.td,null,"-")),a.createElement(n.tr,null,a.createElement(n.td,null,a.createElement(n.code,null,"error")),a.createElement(n.td,null,"Error text to be displayed below the input."),a.createElement(n.td,null,a.createElement(n.code,null,"string")),a.createElement(n.td,null,"-")),a.createElement(n.tr,null,a.createElement(n.td,null,a.createElement(n.code,null,"icon")),a.createElement(n.td,null,"An icon to be shown in the beginning of the input."),a.createElement(n.td,null,a.createElement(n.code,null,"ReactNode")),a.createElement(n.td,null,"-")),a.createElement(n.tr,null,a.createElement(n.td,null,a.createElement(n.code,null,"label")),a.createElement(n.td,null,"A text label for the input."),a.createElement(n.td,null,a.createElement(n.code,null,"string")),a.createElement(n.td,null,"-")),a.createElement(n.tr,null,a.createElement(n.td,null,a.createElement(n.code,null,"options")),a.createElement(n.td,null,"The array of options shown in the input."),a.createElement(n.td,null,a.createElement(n.code,null,"OptionType[]")),a.createElement(n.td,null,"-")),a.createElement(n.tr,null,a.createElement(n.td,null,a.createElement(n.code,null,"placeholder")),a.createElement(n.td,null,"Short hint displayed in the input before the user enters a value."),a.createElement(n.td,null,a.createElement(n.code,null,"string")),a.createElement(n.td,null,"-")),a.createElement(n.tr,null,a.createElement(n.td,null,a.createElement(n.code,null,"required")),a.createElement(n.td,null,"If set to true, the input is marked as required."),a.createElement(n.td,null,a.createElement(n.code,null,"boolean")),a.createElement(n.td,null,"false")),a.createElement(n.tr,null,a.createElement(n.td,null,a.createElement(n.code,null,"multiselect")),a.createElement(n.td,null,"If set to true, the user can select multiple values."),a.createElement(n.td,null,a.createElement(n.code,null,"boolean")),a.createElement(n.td,null,"false")))))}function d(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}n.default=function(e){return void 0===e&&(e={}),a.createElement(i,e,a.createElement(m,e))}},13573:function(e,n,l){l.r(n);var t=l(11151),a=l(67294),r=l(57674),o=l(89482),c=(l(18607),l(26127)),s=l(55725),i=l(77884);function m(e){const n=Object.assign({h1:"h1",a:"a",span:"span",p:"p"},(0,t.ah)(),e.components);return c.Z||d("PageTabs",!1),c.Z.Tab||d("PageTabs.Tab",!0),c.Z.TabList||d("PageTabs.TabList",!0),c.Z.TabPanel||d("PageTabs.TabPanel",!0),a.createElement(a.Fragment,null,a.createElement(n.h1,{id:"dropdown",style:{position:"relative"}},"Dropdown",a.createElement(n.a,{href:"#dropdown","aria-label":"dropdown permalink",className:"header-anchor after"},a.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span class="hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs" aria-hidden="true" style="vertical-align: middle"></span>'}}))),"\n",a.createElement("div",{class:"status-label-description"},a.createElement(s.Z,{type:"info"},"Stable"),a.createElement(s.Z,{type:"success",style:{marginLeft:"var(--spacing-xs)"}},a.createElement(n.p,null,"Accessible")),a.createElement(r.Z)),"\n",a.createElement(o.Z,null,a.createElement(n.p,null,"A dropdown offers a user a list of options, of which one or multiple can be selected. Dropdowns are often used as part\nof forms and filters. HDS offers two types of dropdowns, a Select and a Combobox component.")),"\n",a.createElement(i.Z,{type:"alert",label:"Dropdowns are deprecated",className:"siteNotification"},a.createElement("p",null,"Combobox is deprecated and will be removed in the next major release."),a.createElement("p",null,"Select is being redesigned and will have different props in the next major release.")),"\n",a.createElement(c.Z,{pageContext:e.pageContext},a.createElement(c.Z.TabList,null,a.createElement(c.Z.Tab,{href:"/"},"Usage"),a.createElement(c.Z.Tab,{href:"/code"},"Code"),a.createElement(c.Z.Tab,{href:"/accessibility"},"Accessibility"),a.createElement(c.Z.Tab,{href:"/customisation"},"Customisation")),a.createElement(c.Z.TabPanel,null,e.children)))}function d(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}n.default=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?a.createElement(n,e,a.createElement(m,e)):m(e)}},77884:function(e,n,l){var t=l(67294),a=l(26653),r=l(42972);n.Z=e=>{let{children:n,...l}=e;return t.createElement(a.N,l,(0,r.g)(n))}},55725:function(e,n,l){var t=l(67294),a=l(40008),r=l(42972);n.Z=e=>{let{children:n,...l}=e;return t.createElement(a.S,l,(0,r.g)(n))}},57674:function(e,n,l){var t=l(67294),a=l(12367);n.Z=()=>{const e={Draft:"The component is work in progress",Beta:"The component is being tested",Stable:"The component has been tested and defects have been fixed",Accessible:"The component has been reviewed for accessibility",Deprecated:"The component will be removed"};return t.createElement(a.T,{placement:"right-end",className:"status-label-tooltip",boxShadow:!0},t.createElement("ul",{className:"status-label-definitions"},Object.keys(e).map((n=>t.createElement("li",{key:n},t.createElement("span",{className:"status-name"},n),t.createElement("span",null,e[n]))))))}}}]);