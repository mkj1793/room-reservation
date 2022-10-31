"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4910],{44162:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return o},default:function(){return N}});var a=n(63366),l=(n(67294),n(64983)),r=n(27086),i=n(80699),s=n(72184),p=n(1076),d=["components"],o={slug:"/components/number-input/code",title:"NumberInput - Code"},m=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",t)}},u=m("Playground"),c=m("IconCheckCircleFill"),h={_frontmatter:o},k=function(e){var t=e.children,n=e.pageContext;return(0,l.kt)(s.default,{pageContext:n},t)};function N(e){var t=e.components,n=(0,a.Z)(e,d);return(0,l.kt)(k,Object.assign({},h,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"code",style:{position:"relative"}},"Code",(0,l.kt)("a",{parentName:"h2",href:"#code","aria-label":"code permalink",className:"header-anchor after"},(0,l.kt)("i",{parentName:"a",className:"hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs","aria-hidden":"true",style:{verticalAlign:"middle"}}))),(0,l.kt)("h3",{id:"code-examples",style:{position:"relative"}},"Code examples",(0,l.kt)("a",{parentName:"h3",href:"#code-examples","aria-label":"code examples permalink",className:"header-anchor after"},(0,l.kt)("i",{parentName:"a",className:"hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs","aria-hidden":"true",style:{verticalAlign:"middle"}}))),(0,l.kt)("h4",{id:"default",style:{position:"relative"}},"Default",(0,l.kt)("a",{parentName:"h4",href:"#default","aria-label":"default permalink",className:"header-anchor after"},(0,l.kt)("i",{parentName:"a",className:"hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs","aria-hidden":"true",style:{verticalAlign:"middle"}}))),(0,l.kt)(u,{mdxType:"Playground"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<>\n  <NumberInput\n    id="default"\n    helperText="Assistive text"\n    label="Total compensation"\n    unit="€"\n    defaultValue={1000}\n    style={{ maxWidth: \'320px\' }}\n  />\n\n  <NumberInput\n    disabled\n    id="disabled"\n    helperText="Assistive text"\n    label="Total compensation"\n    unit="€"\n    defaultValue={1000}\n    style={{ maxWidth: \'320px\', marginTop: \'var(--spacing-s)\' }}\n  />\n</>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<div style="max-width:320px;">\n  <div class="hds-text-input">\n    <label for="core-default" class="hds-text-input__label"> Total compensation (€) </label>\n    <div class="hds-text-input__input-wrapper">\n      <input id="core-default" value="1000" class="hds-text-input__input" type="number" placeholder="Placeholder" />\n    </div>\n    <span class="hds-text-input__helper-text">Assistive text</span>\n  </div>\n\n  <div class="hds-text-input" style="margin-top:var(--spacing-s);">\n    <label for="core-disabled" class="hds-text-input__label"> Total compensation (€) </label>\n    <div class="hds-text-input__input-wrapper">\n      <input\n        id="core-disabled"\n        value="1000"\n        class="hds-text-input__input"\n        type="number"\n        placeholder="Placeholder"\n        disabled\n      />\n    </div>\n    <span class="hds-text-input__helper-text">Assistive text</span>\n  </div>\n</div>\n'))),(0,l.kt)("h4",{id:"with-steppers",style:{position:"relative"}},"With steppers",(0,l.kt)("a",{parentName:"h4",href:"#with-steppers","aria-label":"with steppers permalink",className:"header-anchor after"},(0,l.kt)("i",{parentName:"a",className:"hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs","aria-hidden":"true",style:{verticalAlign:"middle"}}))),(0,l.kt)(u,{mdxType:"Playground"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<NumberInput\n  id="stepper"\n  helperText="Assistive text"\n  label="Number of attendees"\n  minusStepButtonAriaLabel="Decrease by one"\n  plusStepButtonAriaLabel="Increase by one"\n  step={1}\n  defaultValue={5}\n  style={{ maxWidth: \'320px\' }}\n/>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<div class="hds-text-input" style="max-width:320px;">\n  <label for="core-stepper" class="hds-text-input__label"> Number of attendees </label>\n  <div class="hds-text-input__input-wrapper">\n    <input id="core-stepper" value="5" class="hds-text-input__input" type="number" step="1" placeholder="Placeholder" />\n  </div>\n  <span class="hds-text-input__helper-text">Assistive text</span>\n</div>\n'))),(0,l.kt)("h4",{id:"with-min-and-max-values",style:{position:"relative"}},"With min and max values",(0,l.kt)("a",{parentName:"h4",href:"#with-min-and-max-values","aria-label":"with min and max values permalink",className:"header-anchor after"},(0,l.kt)("i",{parentName:"a",className:"hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs","aria-hidden":"true",style:{verticalAlign:"middle"}}))),(0,l.kt)(u,{mdxType:"Playground"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<NumberInput\n  id="stepper-minmax"\n  helperText="At least 3 attendees are required"\n  label="Number of attendees"\n  min={3}\n  max={99}\n  minusStepButtonAriaLabel="Decrease by one"\n  plusStepButtonAriaLabel="Increase by one"\n  step={1}\n  defaultValue={3}\n  style={{ maxWidth: \'320px\' }}\n/>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<div class="hds-text-input" style="max-width:320px;">\n  <label for="core-stepper-minmax" class="hds-text-input__label"> Number of attendees </label>\n  <div class="hds-text-input__input-wrapper">\n    <input\n      id="core-stepper-minmax"\n      value="3"\n      class="hds-text-input__input"\n      type="number"\n      step="1"\n      min="3"\n      max="99"\n      placeholder="Placeholder"\n      required\n    />\n  </div>\n  <span class="hds-text-input__helper-text">At least 3 attendees are required</span>\n</div>\n'))),(0,l.kt)("h3",{id:"packages",style:{position:"relative"}},"Packages",(0,l.kt)("a",{parentName:"h3",href:"#packages","aria-label":"packages permalink",className:"header-anchor after"},(0,l.kt)("i",{parentName:"a",className:"hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs","aria-hidden":"true",style:{verticalAlign:"middle"}}))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Package"),(0,l.kt)("th",{parentName:"tr",align:null},"Included"),(0,l.kt)("th",{parentName:"tr",align:null},"Storybook link"),(0,l.kt)("th",{parentName:"tr",align:null},"Source link"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"HDS React")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("div",{style:{display:"flex",gap:"var(--spacing-3-xs)"}},(0,l.kt)(c,{mdxType:"IconCheckCircleFill"})," Yes ")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(r.L,{openInNewTab:!0,openInNewTabAriaLabel:"Opens in a new tab",href:"/storybook/react/?path=/story/components-numberinput--default",mdxType:"Link"},"View in Storybook")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(i.Z,{openInNewTab:!0,openInNewTabAriaLabel:"Opens in a new tab",href:"https://github.com/City-of-Helsinki/helsinki-design-system/tree/master/packages/react/src/components/numberInput",mdxType:"ExternalLink"},"View source"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"HDS Core")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("div",{style:{display:"flex",gap:"var(--spacing-3-xs)"}},(0,l.kt)(c,{mdxType:"IconCheckCircleFill"})," Yes ")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(r.L,{openInNewTab:!0,openInNewTabAriaLabel:"Opens in a new tab",href:"/storybook/react/?path=/story/components-numberinput--default",mdxType:"Link"},"View in Storybook")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(i.Z,{openInNewTab:!0,openInNewTabAriaLabel:"Opens in a new tab",href:"https://github.com/City-of-Helsinki/helsinki-design-system/tree/master/packages/core/src/components/number-input",mdxType:"ExternalLink"},"View source"))))),(0,l.kt)("h3",{id:"properties",style:{position:"relative"}},"Properties",(0,l.kt)("a",{parentName:"h3",href:"#properties","aria-label":"properties permalink",className:"header-anchor after"},(0,l.kt)("i",{parentName:"a",className:"hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs","aria-hidden":"true",style:{verticalAlign:"middle"}}))),(0,l.kt)("p",null,"Note! You can find the full list of properties in the ",(0,l.kt)(r.L,{openInNewTab:!0,openInNewTabAriaLabel:"Opens in a new tab",href:"/storybook/react/?path=/story/components-numberinput--default",mdxType:"Link"},"React Storybook.")),(0,l.kt)("p",null,"Also, note that this component is an input. All features supported by the HDS TextInput are also supported by this component. See ",(0,l.kt)(p.Z,{href:"/components/text-input",mdxType:"InternalLink"},"TextInput documentation page")," for more information."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Values"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"id")),(0,l.kt)("td",{parentName:"tr",align:null},"The id for the input."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"label")),(0,l.kt)("td",{parentName:"tr",align:null},"The label for the input."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"value")),(0,l.kt)("td",{parentName:"tr",align:null},"The value of the input element, required for a controlled component."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"defaultValue")),(0,l.kt)("td",{parentName:"tr",align:null},"The default input element value. Use when the component is not controlled."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"minusStepButtonAriaLabel")),(0,l.kt)("td",{parentName:"tr",align:null},"The aria label for minus step button."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plusStepButtonAriaLabel")),(0,l.kt)("td",{parentName:"tr",align:null},"The aria label for plus step button."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"unit")),(0,l.kt)("td",{parentName:"tr",align:null},"Unit characters of the input. Example: €"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[Table 1:NumberInput properties]"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))))}N.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-components-number-input-code-mdx-4dea19ee83e7e450c0e1.js.map