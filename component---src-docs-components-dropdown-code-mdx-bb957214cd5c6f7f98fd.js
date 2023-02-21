"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[8644],{17704:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return m},default:function(){return N}});var a=n(63366),l=(n(67294),n(64983)),r=n(94846),i=n(80699),o=n(9460),s=n(30764),d=n(1076),p=["components"],m={slug:"/components/dropdown/code",title:"Dropdown - Code"},c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",t)}},u=c("IconCheckCircleFill"),k=c("IconCrossCircle"),b={_frontmatter:m},h=function(e){var t=e.children,n=e.pageContext;return(0,l.kt)(s.default,{pageContext:n},t)};function N(e){var t=e.components,n=(0,a.Z)(e,p);return(0,l.kt)(h,Object.assign({},b,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"code",style:{position:"relative"}},"Code",(0,l.kt)("a",{parentName:"h2",href:"#code","aria-label":"code permalink",className:"header-anchor after"},(0,l.kt)("span",{parentName:"a",className:"hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs","aria-hidden":"true",style:{verticalAlign:"middle"}}))),(0,l.kt)("h3",{id:"code-examples",style:{position:"relative"}},"Code examples",(0,l.kt)("a",{parentName:"h3",href:"#code-examples","aria-label":"code examples permalink",className:"header-anchor after"},(0,l.kt)("span",{parentName:"a",className:"hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs","aria-hidden":"true",style:{verticalAlign:"middle"}}))),(0,l.kt)("h4",{id:"select-single-selection",style:{position:"relative"}},"Select (single selection)",(0,l.kt)("a",{parentName:"h4",href:"#select-single-selection","aria-label":"select single selection permalink",className:"header-anchor after"},(0,l.kt)("span",{parentName:"a",className:"hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs","aria-hidden":"true",style:{verticalAlign:"middle"}}))),(0,l.kt)(o.ZP,{mdxType:"Playground"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'{() => {\n  const options = [{ label: \'Plutonium\' }, { label: \'Americium\' }, { label: \'Copernicium\' }, { label: \'Berkelium\' }];\n  return (\n    <>\n      <Select required label="Label" helper="Assistive text" placeholder="Placeholder" options={options} />\n      <Select\n        disabled\n        label="Label"\n        helper="Assistive text"\n        placeholder="Placeholder"\n        options={options}\n        style={{ marginTop: \'var(--spacing-xs)\' }}\n      />\n      <Select\n        invalid\n        required\n        label="Label"\n        error="Error description"\n        placeholder="Placeholder"\n        options={options}\n        style={{ marginTop: \'var(--spacing-xs)\' }}\n      />\n      <Select\n        required\n        label="Label"\n        helper="Assistive text"\n        placeholder="Placeholder"\n        icon={<IconUser />}\n        options={[{ label: \'Adam\' }, { label: \'Caitlyn\' }, { label: \'Jack\' }, { label: \'Sally\' }]}\n        style={{ marginTop: \'var(--spacing-xs)\' }}\n      />\n    </>\n  )\n}}\n'))),(0,l.kt)("h3",{id:"select-multi-selection",style:{position:"relative"}},"Select (multi-selection)",(0,l.kt)("a",{parentName:"h3",href:"#select-multi-selection","aria-label":"select multi selection permalink",className:"header-anchor after"},(0,l.kt)("span",{parentName:"a",className:"hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs","aria-hidden":"true",style:{verticalAlign:"middle"}}))),(0,l.kt)(o.ZP,{mdxType:"Playground"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<Select\n  multiselect\n  required\n  label="Label"\n  placeholder="Placeholder"\n  helper="Assistive text"\n  options={[\n    { label: \'Plutonium\' },\n    { label: \'Americium\' },\n    { label: \'Copernicium\' },\n    { label: \'Berkelium\' },\n  ]}\n  clearButtonAriaLabel="Clear all selections"\n  selectedItemRemoveButtonAriaLabel="Remove ${value}"\n/>\n'))),(0,l.kt)("h3",{id:"combobox-single-selection",style:{position:"relative"}},"Combobox (single selection)",(0,l.kt)("a",{parentName:"h3",href:"#combobox-single-selection","aria-label":"combobox single selection permalink",className:"header-anchor after"},(0,l.kt)("span",{parentName:"a",className:"hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs","aria-hidden":"true",style:{verticalAlign:"middle"}}))),(0,l.kt)(o.ZP,{mdxType:"Playground"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"{() => {\n  const options = [\n    { label: 'Americium' },\n    { label: 'Berkelium' },\n    { label: 'Californium' },\n    { label: 'Copernicium' },\n    { label: 'Einsteinium' },\n    { label: 'Fermium' },\n    { label: 'Mendelevium' },\n    { label: 'Plutonium' },\n  ]\n  return (\n    <>\n      <Combobox required label=\"Label\" helper=\"Assistive text\" placeholder=\"Placeholder\" toggleButtonAriaLabel=\"Toggle menu\" options={options} />\n      <Combobox\n        disabled\n        label=\"Label\"\n        helper=\"Assistive text\"\n        placeholder=\"Placeholder\"\n        toggleButtonAriaLabel=\"Toggle menu\"\n        options={options}\n        style={{ marginTop: 'var(--spacing-xs)' }}\n      />\n      <Combobox\n        invalid\n        required\n        label=\"Label\"\n        error=\"Error description\"\n        placeholder=\"Placeholder\"\n        toggleButtonAriaLabel=\"Toggle menu\"\n        options={options}\n        style={{ marginTop: 'var(--spacing-xs)' }}\n      />\n      <Combobox\n        required\n        label=\"Label\"\n        helper=\"Assistive text\"\n        placeholder=\"Placeholder\"\n        toggleButtonAriaLabel=\"Toggle menu\"\n        icon={<IconUser />}\n        options={[\n          { label: 'Adam' },\n          { label: 'Allie' },\n          { label: 'Bob' },\n          { label: 'Caitlyn' },\n          { label: 'Jack' },\n          { label: 'Olivia' },\n          { label: 'Sally' },\n          { label: 'Sam' },\n        ]}\n        style={{ marginTop: 'var(--spacing-xs)' }}\n      />\n    </>\n  )\n}}\n"))),(0,l.kt)("h3",{id:"combobox-multi-selection",style:{position:"relative"}},"Combobox (multi-selection)",(0,l.kt)("a",{parentName:"h3",href:"#combobox-multi-selection","aria-label":"combobox multi selection permalink",className:"header-anchor after"},(0,l.kt)("span",{parentName:"a",className:"hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs","aria-hidden":"true",style:{verticalAlign:"middle"}}))),(0,l.kt)(o.ZP,{mdxType:"Playground"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<Combobox\n  multiselect\n  required\n  label=\"Label\"\n  helper=\"Assistive text\"\n  placeholder=\"Placeholder\"\n  options={[\n    { label: 'Americium' },\n    { label: 'Berkelium' },\n    { label: 'Californium' },\n    { label: 'Copernicium' },\n    { label: 'Einsteinium' },\n    { label: 'Fermium' },\n    { label: 'Mendelevium' },\n    { label: 'Plutonium' },\n  ]}\n  clearButtonAriaLabel=\"Clear all selections\"\n  selectedItemRemoveButtonAriaLabel=\"Remove ${value}\"\n  toggleButtonAriaLabel=\"Toggle menu\"\n/>\n"))),(0,l.kt)("h3",{id:"packages",style:{position:"relative"}},"Packages",(0,l.kt)("a",{parentName:"h3",href:"#packages","aria-label":"packages permalink",className:"header-anchor after"},(0,l.kt)("span",{parentName:"a",className:"hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs","aria-hidden":"true",style:{verticalAlign:"middle"}}))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Package"),(0,l.kt)("th",{parentName:"tr",align:null},"Included"),(0,l.kt)("th",{parentName:"tr",align:null},"Storybook link"),(0,l.kt)("th",{parentName:"tr",align:null},"Source link"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"HDS React")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("div",{style:{display:"flex",gap:"var(--spacing-3-xs)"}},(0,l.kt)(u,{mdxType:"IconCheckCircleFill"})," Yes ")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(r.L,{openInNewTab:!0,openInNewTabAriaLabel:"Opens in a new tab",href:"/storybook/react/?path=/story/components-dropdowns-select--default",mdxType:"Link"},"View Select in Storybook")," ",(0,l.kt)(r.L,{openInNewTab:!0,openInNewTabAriaLabel:"Opens in a new tab",href:"/storybook/react/?path=/story/components-dropdowns-combobox--default",mdxType:"Link"},"View Combobox in Storybook")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(i.Z,{openInNewTab:!0,openInNewTabAriaLabel:"Opens in a new tab",href:"https://github.com/City-of-Helsinki/helsinki-design-system/tree/master/packages/react/src/components/dropdown",mdxType:"ExternalLink"},"View source"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"HDS Core")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("div",{style:{display:"flex",gap:"var(--spacing-3-xs)"}},(0,l.kt)(k,{mdxType:"IconCrossCircle"})," No ")),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h3",{id:"properties",style:{position:"relative"}},"Properties",(0,l.kt)("a",{parentName:"h3",href:"#properties","aria-label":"properties permalink",className:"header-anchor after"},(0,l.kt)("span",{parentName:"a",className:"hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs","aria-hidden":"true",style:{verticalAlign:"middle"}}))),(0,l.kt)("p",null,"Note! You can find the full list of properties in the ",(0,l.kt)(r.L,{openInNewTab:!0,openInNewTabAriaLabel:"Opens in a new tab",href:"/storybook/react/?path=/docs/components-dropdowns-combobox--default",mdxType:"Link"},"React Storybook.")),(0,l.kt)("p",null,"Also, note that this component is an input. All features supported by the HDS TextInput are also supported by this component. See ",(0,l.kt)(d.Z,{href:"/components/text-input",mdxType:"InternalLink"},"TextInput documentation page")," for more information."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Values"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"clearable")),(0,l.kt)("td",{parentName:"tr",align:null},"If set to true, the clear selections button is enabled."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"disabled")),(0,l.kt)("td",{parentName:"tr",align:null},"If set to true, the dropdown is disabled."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"helper")),(0,l.kt)("td",{parentName:"tr",align:null},"Helper text to be displayed below the input."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"error")),(0,l.kt)("td",{parentName:"tr",align:null},"Error text to be displayed below the input."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"icon")),(0,l.kt)("td",{parentName:"tr",align:null},"An icon to be shown in the beginning of the input."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ReactNode")),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"label")),(0,l.kt)("td",{parentName:"tr",align:null},"A text label for the input."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"options")),(0,l.kt)("td",{parentName:"tr",align:null},"The array of options shown in the input."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"OptionType[]")),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"placeholder")),(0,l.kt)("td",{parentName:"tr",align:null},"Short hint displayed in the input before the user enters a value."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"required")),(0,l.kt)("td",{parentName:"tr",align:null},"If set to true, the input is marked as required."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"multiselect")),(0,l.kt)("td",{parentName:"tr",align:null},"If set to true, the user can select multiple values."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"false")))))}N.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-components-dropdown-code-mdx-bb957214cd5c6f7f98fd.js.map