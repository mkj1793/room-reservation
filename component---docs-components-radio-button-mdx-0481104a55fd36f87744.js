(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{sa0z:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return h})),t.d(a,"default",(function(){return O}));var n=t("cxan"),o=t("+wNj"),l=t("ERkP"),d=t("ZVZ0"),i=t("9Rvw"),c=t("qbsg"),b=t("Ejgk"),r=t("JuSQ"),s=t("8fQv"),u=t("sQ7B"),p=t("vD+s"),m=t("x0e6"),h=(t("l1C2"),{});void 0!==h&&h&&h===Object(h)&&Object.isExtensible(h)&&!h.hasOwnProperty("__filemeta")&&Object.defineProperty(h,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/components/radio_button.mdx"}});var v={_frontmatter:h},g=i.a;function O(e){var a,t,O,j=e.components,x=Object(o.a)(e,["components"]);return Object(d.b)(g,Object(n.a)({},v,x,{components:j,mdxType:"MDXLayout"}),Object(d.b)("h1",{id:"radio-buttons"},"Radio buttons"),Object(d.b)(b.a,{type:"info",mdxType:"StatusLabel"},"Stable"),Object(d.b)(b.a,{type:"success",style:{marginLeft:"var(--spacing-xs)"},mdxType:"StatusLabel"},"Accessible"),Object(d.b)(p.a,{mdxType:"LargeParagraph"},"Radio buttons are used to pick an option when only one option can be chosen."),Object(d.b)("h2",{id:"principles"},"Principles"),Object(d.b)("ul",null,Object(d.b)("li",{parentName:"ul"},"If the user can select more than one option from a list, use ",Object(d.b)("a",Object(n.a)({parentName:"li"},{href:"/components/checkbox"}),"checkboxes")," instead."),Object(d.b)("li",{parentName:"ul"},"Radio button label should always clearly describe what will happen if the specific option is chosen. A good practice is to keep labels a maximum of three words long."),Object(d.b)("li",{parentName:"ul"},"It is recommended to have a default option checked for radio button groups Radio button groups."),Object(d.b)("li",{parentName:"ul"},"When there are more than 4 options, consider switching to ",Object(d.b)("a",Object(n.a)({parentName:"li"},{href:"/components/dropdown"}),"dropdown")," component."),Object(d.b)("li",{parentName:"ul"},"If Radio buttons are related to each other, use ",Object(d.b)("a",Object(n.a)({parentName:"li"},{href:"/components/selection-group"}),"HDS Selection group")," to achieve that. ")),Object(d.b)("h2",{id:"accessibility"},"Accessibility"),Object(d.b)("ul",null,Object(d.b)("li",{parentName:"ul"},Object(d.b)("strong",{parentName:"li"},"It is advisable to use colour combinations provided by the implementation.")," These combinations are ensured to comply with WCAG AA requirements. When customising colours, refer to ",Object(d.b)("a",Object(n.a)({parentName:"li"},{href:"/design-tokens/colour",title:"Colour"}),"colour guidelines")," to ensure accessibility."),Object(d.b)("li",{parentName:"ul"},"When multiple Radio buttons are related to each other, group them together using ",Object(d.b)("a",Object(n.a)({parentName:"li"},{href:"/components/selection-group"}),"HDS Selection group"),". Selection group also includes a title for the group.")),Object(d.b)("h2",{id:"usage"},"Usage"),Object(d.b)("h3",{id:"radio-button-with-label"},"Radio button with label"),Object(d.b)(c.c,{__position:2,__code:'() => {\n  const [selectedItem, setSelectedItem] = React.useState(\'2\')\n  const onChange = event => {\n    setSelectedItem(event.target.value)\n  }\n  return (\n    <>\n      <RadioButton\n        id="radio1"\n        name="example"\n        label="Label"\n        value="1"\n        checked={selectedItem === \'1\'}\n        onChange={onChange}\n      />\n      <RadioButton\n        id="radio2"\n        name="example"\n        label="Label"\n        value="2"\n        checked={selectedItem === \'2\'}\n        onChange={onChange}\n      />\n    </>\n  )\n}',__scope:(a={props:x,DefaultLayout:i.a,Playground:c.c,RadioButton:r.a,StatusLabel:b.a,SelectionGroup:s.a,ColorBox:u.a,LargeParagraph:p.a,Text:m.a},a.DefaultLayout=i.a,a._frontmatter=h,a),mdxType:"Playground"},(function(){var e=l.useState("2"),a=e[0],t=e[1],n=function(e){t(e.target.value)};return Object(d.b)(l.Fragment,null,Object(d.b)(r.a,{id:"radio1",name:"example",label:"Label",value:"1",checked:"1"===a,onChange:n,mdxType:"RadioButton"}),Object(d.b)(r.a,{id:"radio2",name:"example",label:"Label",value:"2",checked:"2"===a,onChange:n,mdxType:"RadioButton"}))})),Object(d.b)("h4",{id:"core-code-example"},"Core code example:"),Object(d.b)("pre",null,Object(d.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'\x3c!-- Enabled--\x3e\n<div class="hds-checkbox">\n  <input type="radio" id="radio1" name="example" class="hds-radio-button__input" />\n  <label for="radio"  class="hds-radio-button__label">Label</label>\n</div>\n\n\x3c!-- Enabled & selected --\x3e\n<div class="hds-checkbox">\n  <input type="radio" id="radio2" name="example" class="hds-radio-button__input" checked />\n  <label for="radio2"  class="hds-radio-button__label">Label</label>\n</div>\n')),Object(d.b)("h4",{id:"react-code-example"},"React code example:"),Object(d.b)("pre",null,Object(d.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),'  {() => {\n    const [selectedItem, setSelectedItem] = React.useState("2");\n    const onChange = (event) => {\n      setSelectedItem(event.target.value);\n    };\n    return (\n      <>\n      <RadioButton id="radio1" name="example" label="Label" value="1" checked={selectedItem === "1"} onChange={onChange}/>\n      <RadioButton id="radio2" name="example" label="Label" value="2" checked={selectedItem === "2"} onChange={onChange} />\n    </>\n    )\n  }}\n')),Object(d.b)("h3",{id:"radio-button-with-label-disabled"},"Radio button with label (disabled)"),Object(d.b)(c.c,{__position:3,__code:'() => {\n  const [selectedItem, setSelectedItem] = React.useState(\'2\')\n  const onChange = event => {\n    setSelectedItem(event.target.value)\n  }\n  return (\n    <>\n      <RadioButton\n        disabled\n        id="radio1"\n        name="example-disabled"\n        label="Label"\n        value="1"\n        checked={selectedItem === \'1\'}\n        onChange={onChange}\n      />\n      <RadioButton\n        disabled\n        id="radio2"\n        name="example-disabled"\n        label="Label"\n        value="2"\n        checked={selectedItem === \'2\'}\n        onChange={onChange}\n      />\n    </>\n  )\n}',__scope:(t={props:x,DefaultLayout:i.a,Playground:c.c,RadioButton:r.a,StatusLabel:b.a,SelectionGroup:s.a,ColorBox:u.a,LargeParagraph:p.a,Text:m.a},t.DefaultLayout=i.a,t._frontmatter=h,t),mdxType:"Playground"},(function(){var e=l.useState("2"),a=e[0],t=e[1],n=function(e){t(e.target.value)};return Object(d.b)(l.Fragment,null,Object(d.b)(r.a,{disabled:!0,id:"radio1",name:"example-disabled",label:"Label",value:"1",checked:"1"===a,onChange:n,mdxType:"RadioButton"}),Object(d.b)(r.a,{disabled:!0,id:"radio2",name:"example-disabled",label:"Label",value:"2",checked:"2"===a,onChange:n,mdxType:"RadioButton"}))})),Object(d.b)("h4",{id:"core-code-example-1"},"Core code example:"),Object(d.b)("pre",null,Object(d.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'\x3c!-- Disabled --\x3e\n<div class="hds-checkbox">\n  <input type="radio" id="radio1" name="example-disabled" class="hds-radio-button__input" disabled />\n  <label for="radio1"  class="hds-radio-button__label">Label</label>\n</div>\n\n\x3c!-- Disabled & selected --\x3e\n<div class="hds-checkbox">\n  <input type="radio" id="radio2" name="example-disabled" class="hds-radio-button__input" checked disabled />\n  <label for="radio2"  class="hds-radio-button__label">Label</label>\n</div>\n')),Object(d.b)("h4",{id:"react-code-example-1"},"React code example:"),Object(d.b)("pre",null,Object(d.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),'  {() => {\n    const [selectedItem, setSelectedItem] = React.useState("2");\n    const onChange = (event) => {\n      setSelectedItem(event.target.value);\n    };\n    return (\n      <>\n        <RadioButton disabled id="radio1" name="example-disabled" label="Label" value="1" checked={selectedItem === "1"} onChange={onChange}/>\n        <RadioButton disabled id="radio2" name="example-disabled" label="Label" value="2" checked={selectedItem === "2"} onChange={onChange} />\n      </>\n    )\n  }}\n')),Object(d.b)("h3",{id:"radio-button-group"},"Radio button group"),Object(d.b)("p",null,"Related radio buttons can be grouped together with the Selection group component. See ",Object(d.b)("a",Object(n.a)({parentName:"p"},{href:"/components/selection-group"}),"HDS Selection group page")," for full documentation."),Object(d.b)(c.c,{__position:4,__code:'() => {\n  const [selectedItem, setSelectedItem] = React.useState(\'1\')\n  const onChange = event => {\n    setSelectedItem(event.target.value)\n  }\n  return (\n    <SelectionGroup label="Radio button group">\n      <RadioButton\n        id="v-radio1"\n        name="v-radio"\n        value="1"\n        label="Option"\n        checked={selectedItem === \'1\'}\n        onChange={onChange}\n      />\n      <RadioButton\n        id="v-radio2"\n        name="v-radio"\n        value="2"\n        label="Option"\n        checked={selectedItem === \'2\'}\n        onChange={onChange}\n      />\n      <RadioButton\n        id="v-radio3"\n        name="v-radio"\n        value="3"\n        label="Option"\n        checked={selectedItem === \'3\'}\n        onChange={onChange}\n      />\n      <RadioButton\n        id="v-radio4"\n        name="v-radio"\n        value="4"\n        label="Option"\n        checked={selectedItem === \'4\'}\n        onChange={onChange}\n      />\n    </SelectionGroup>\n  )\n}',__scope:(O={props:x,DefaultLayout:i.a,Playground:c.c,RadioButton:r.a,StatusLabel:b.a,SelectionGroup:s.a,ColorBox:u.a,LargeParagraph:p.a,Text:m.a},O.DefaultLayout=i.a,O._frontmatter=h,O),mdxType:"Playground"},(function(){var e=l.useState("1"),a=e[0],t=e[1],n=function(e){t(e.target.value)};return Object(d.b)(s.a,{label:"Radio button group",mdxType:"SelectionGroup"},Object(d.b)(r.a,{id:"v-radio1",name:"v-radio",value:"1",label:"Option",checked:"1"===a,onChange:n,mdxType:"RadioButton"}),Object(d.b)(r.a,{id:"v-radio2",name:"v-radio",value:"2",label:"Option",checked:"2"===a,onChange:n,mdxType:"RadioButton"}),Object(d.b)(r.a,{id:"v-radio3",name:"v-radio",value:"3",label:"Option",checked:"3"===a,onChange:n,mdxType:"RadioButton"}),Object(d.b)(r.a,{id:"v-radio4",name:"v-radio",value:"4",label:"Option",checked:"4"===a,onChange:n,mdxType:"RadioButton"}))})),Object(d.b)("h4",{id:"core-code-example-2"},"Core code example:"),Object(d.b)("pre",null,Object(d.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<fieldset class="hds-selection-group">\n  <legend class="hds-selection-group__legend">Radio button group</legend>\n  <div class="hds-selection-group__items">\n    <div class="hds-selection-group__item">\n      <div class="hds-radio-button">\n        <input type="radio" id="v-radio1" name="v-radio" class="hds-radio-button__input" name="example" value="foo" checked />\n        <label for="v-radio1" class="hds-radio-button__label">Option</label>\n      </div>\n    </div>\n    <div class="hds-selection-group__item">\n      <div class="hds-radio-button">\n        <input type="radio" id="v-radio2" name="v-radio" class="hds-radio-button__input" name="example" value="bar" />\n        <label for="v-radio2" class="hds-radio-button__label">Option</label>\n      </div>\n    </div>\n    <div class="hds-selection-group__item">\n      <div class="hds-radio-button">\n        <input type="radio" id="v-radio3" name="v-radio" class="hds-radio-button__input" name="example" value="baz" />\n        <label for="v-radio3" class="hds-radio-button__label">Option</label>\n      </div>\n    </div>\n    <div class="hds-selection-group__item">\n      <div class="hds-radio-button">\n        <input type="radio" id="v-radio4" name="v-radio" class="hds-radio-button__input" name="example" value="qux" />\n        <label for="v-radio4" class="hds-radio-button__label">Option</label>\n      </div>\n    </div>\n  </div>\n</fieldset>\n')),Object(d.b)("h4",{id:"react-code-example-2"},"React code example:"),Object(d.b)("pre",null,Object(d.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),'<SelectionGroup label="Radio button group">\n  <RadioButton id="v-radio1" name="v-radio" value="1" label="Option" checked />\n  <RadioButton id="v-radio2" name="v-radio" value="2" label="Option" />\n  <RadioButton id="v-radio3" name="v-radio" value="3" label="Option" />\n  <RadioButton id="v-radio4" name="v-radio" value="4" label="Option" />\n</SelectionGroup>\n')),Object(d.b)("h2",{id:"demos--api"},"Demos & API"),Object(d.b)("h3",{id:"core"},"Core"),Object(d.b)("p",null,Object(d.b)("a",Object(n.a)({parentName:"p"},{href:"/storybook/core/?path=/story/components-radio-button--default"}),"Radio buttons in hds-core")),Object(d.b)("h3",{id:"react"},"React"),Object(d.b)("p",null,Object(d.b)("a",Object(n.a)({parentName:"p"},{href:"/storybook/react/?path=/story/components-radiobutton--default"}),"Radio buttons in hds-react")),Object(d.b)("p",null,Object(d.b)("a",Object(n.a)({parentName:"p"},{href:"/storybook/react/?path=/docs/components-radiobutton--default"}),"RadioButton API")))}void 0!==O&&O&&O===Object(O)&&Object.isExtensible(O)&&!O.hasOwnProperty("__filemeta")&&Object.defineProperty(O,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/components/radio_button.mdx"}}),O.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-components-radio-button-mdx-0481104a55fd36f87744.js.map