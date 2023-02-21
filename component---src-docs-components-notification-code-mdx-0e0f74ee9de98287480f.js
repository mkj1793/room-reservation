"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[7922],{90957:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return d},default:function(){return N}});var a=t(63366),i=(t(67294),t(64983)),l=t(94846),o=t(80699),s=t(12001),r=["components"],d={slug:"/components/notification/code",title:"Notification - Code"},c=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",n)}},p=c("Playground"),m=c("IconCheckCircleFill"),h={_frontmatter:d},k=function(e){var n=e.children,t=e.pageContext;return(0,i.kt)(s.default,{pageContext:t},n)};function N(e){var n=e.components,t=(0,a.Z)(e,r);return(0,i.kt)(k,Object.assign({},h,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"code",style:{position:"relative"}},"Code",(0,i.kt)("a",{parentName:"h2",href:"#code","aria-label":"code permalink",className:"header-anchor after"},(0,i.kt)("span",{parentName:"a",className:"hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs","aria-hidden":"true",style:{verticalAlign:"middle"}}))),(0,i.kt)("h3",{id:"code-examples",style:{position:"relative"}},"Code examples",(0,i.kt)("a",{parentName:"h3",href:"#code-examples","aria-label":"code examples permalink",className:"header-anchor after"},(0,i.kt)("span",{parentName:"a",className:"hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs","aria-hidden":"true",style:{verticalAlign:"middle"}}))),(0,i.kt)("h4",{id:"inline",style:{position:"relative"}},"Inline",(0,i.kt)("a",{parentName:"h4",href:"#inline","aria-label":"inline permalink",className:"header-anchor after"},(0,i.kt)("span",{parentName:"a",className:"hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs","aria-hidden":"true",style:{verticalAlign:"middle"}}))),(0,i.kt)(p,{mdxType:"Playground"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'<>\n<Notification label="New messages">You have received new messages.</Notification>\n<Notification label="Form done" type="success" style={{marginTop: \'var(--spacing-s)\'}}>Form submit was successful!</Notification>\n<Notification label="Slow loading" type="alert" style={{marginTop: \'var(--spacing-s)\'}}>Loading is taking longer than expected.</Notification>\n<Notification label="Missing information" type="error" style={{marginTop: \'var(--spacing-s)\'}}>Form is missing critical information.</Notification>\n</>\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<div>\n<section aria-label="Notification" class="hds-notification">\n  <div class="hds-notification__content">\n    <div class="hds-notification__label" role="heading" aria-level="2">\n      <span class="hds-icon hds-icon--info-circle-fill" aria-hidden="true"></span>\n      <span>New messages</span>\n    </div>\n    <div class="hds-notification__body">You have received new messages.</div>\n  </div>\n</section>\n<br />\n<section aria-label="Notification" class="hds-notification hds-notification--success">\n  <div class="hds-notification__content">\n    <div class="hds-notification__label" role="heading" aria-level="2">\n      <span class="hds-icon hds-icon--check-circle-fill" aria-hidden="true"></span>\n      <span>Form done</span>\n    </div>\n    <div class="hds-notification__body">Form submit was successful!</div>\n  </div>\n</section>\n<br />\n<section aria-label="Notification" class="hds-notification hds-notification--alert">\n  <div class="hds-notification__content">\n    <div class="hds-notification__label" role="heading" aria-level="2">\n      <span class="hds-icon hds-icon--alert-circle-fill" aria-hidden="true"></span>\n      <span>Slow loading</span>\n    </div>\n    <div class="hds-notification__body">Loading is taking longer than expected.</div>\n  </div>\n</section>\n<br />\n<section aria-label="Notification" class="hds-notification hds-notification--error">\n  <div class="hds-notification__content">\n    <div class="hds-notification__label" role="heading" aria-level="2">\n      <span class="hds-icon hds-icon--error-fill" aria-hidden="true"></span>\n      <span>Missing information</span>\n    </div>\n    <div class="hds-notification__body">Form is missing critical information.</div>\n  </div>\n</section>\n</div>\n'))),(0,i.kt)("h4",{id:"toast",style:{position:"relative"}},"Toast",(0,i.kt)("a",{parentName:"h4",href:"#toast","aria-label":"toast permalink",className:"header-anchor after"},(0,i.kt)("span",{parentName:"a",className:"hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs","aria-hidden":"true",style:{verticalAlign:"middle"}}))),(0,i.kt)(p,{mdxType:"Playground"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'{() => {\n  const [open, setOpen] = React.useState(false)\n  const [autoCloseOpen, setAutoCloseOpen] = React.useState(false)\n  const showButtonRef = React.useRef(null)\n  const showAutoCloseButtonRef = React.useRef(null)\n  const onClose = () => {\n    setOpen(false);\n    if(showButtonRef.current) {\n      showButtonRef.current.focus();\n    }\n  }\n  const onAutoClose = () => {\n    setAutoCloseOpen(false);\n    if(showAutoCloseButtonRef.current) {\n      showAutoCloseButtonRef.current.focus();\n    }\n  }\n  return (\n    <>\n      <Button ref={showButtonRef} onClick={() => setOpen(true)}>Show toast</Button>\n      <Button ref={showAutoCloseButtonRef} onClick={() => setAutoCloseOpen(true)} style={{ display: "flex", marginTop: "var(--spacing-s)" }}>Show automatically disappearing toast</Button>\n      {open && (\n        <Notification label="New messages" position="top-right" dismissible closeButtonLabelText="Close toast" onClose={() => onClose()} style={{ zIndex: 100 }}>\n          You have received new messages.\n        </Notification>\n      )}\n      {autoCloseOpen && (\n        <Notification label="New messages" position="top-right" autoClose onClose={() => onAutoClose()} style={{ zIndex: 100 }}>\n          You have received new messages.\n        </Notification>\n      )}\n    </>\n  )\n}}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<section aria-label="Notification" class="hds-notification hds-notification--top-right">\n  <div role="alert" class="hds-notification__content">\n    <div class="hds-notification__label">\n      <span class="hds-icon hds-icon--info-circle-fill" aria-hidden="true"></span>\n      <span>New messages</span>\n    </div>\n    <div class="hds-notification__body">You have received new messages.</div>\n  </div>\n  <button class="hds-notification__close-button" aria-label="Close toast" type="button" onclick="">\n    <span class="hds-icon hds-icon--cross" aria-hidden="true"></span>\n  </button>\n</section>\n'))),(0,i.kt)("h4",{id:"notification-sizes",style:{position:"relative"}},"Notification sizes",(0,i.kt)("a",{parentName:"h4",href:"#notification-sizes","aria-label":"notification sizes permalink",className:"header-anchor after"},(0,i.kt)("span",{parentName:"a",className:"hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs","aria-hidden":"true",style:{verticalAlign:"middle"}}))),(0,i.kt)(p,{mdxType:"Playground"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'<>\n<Notification size="large" label="New messages">You have received new messages.</Notification>\n<Notification size="default" label="New messages" style={{marginTop: \'var(--spacing-s)\'}}>You have received new messages.</Notification>\n<Notification size="small" label="New messages" style={{marginTop: \'var(--spacing-s)\'}}>You have received new messages.</Notification>\n</>\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<div>\n<section aria-label="Notification" class="hds-notification hds-notification--large">\n  <div class="hds-notification__content">\n    <div class="hds-notification__label" role="heading" aria-level="2">\n      <span class="hds-icon hds-icon--info-circle-fill" aria-hidden="true"></span>\n      <span>New messages</span>\n    </div>\n    <div class="hds-notification__body">You have received new messages.</div>\n  </div>\n</section>\n<br />\n<section aria-label="Notification" class="hds-notification">\n  <div class="hds-notification__content">\n    <div class="hds-notification__label" role="heading" aria-level="2">\n      <span class="hds-icon hds-icon--info-circle-fill" aria-hidden="true"></span>\n      <span>New messages</span>\n    </div>\n    <div class="hds-notification__body">You have received new messages.</div>\n  </div>\n</section>\n<br />\n<section aria-label="Notification" class="hds-notification hds-notification--small">\n  <div class="hds-notification__content">\n    <div class="hds-notification__label" role="heading" aria-level="2">\n      <span class="hds-icon hds-icon--info-circle-fill" aria-hidden="true"></span>\n    </div>\n    <div class="hds-notification__body">You have received new messages.</div>\n  </div>\n</section>\n</div>\n'))),(0,i.kt)("h4",{id:"invisible",style:{position:"relative"}},"Invisible",(0,i.kt)("a",{parentName:"h4",href:"#invisible","aria-label":"invisible permalink",className:"header-anchor after"},(0,i.kt)("span",{parentName:"a",className:"hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs","aria-hidden":"true",style:{verticalAlign:"middle"}}))),(0,i.kt)(p,{mdxType:"Playground"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'<Notification label="New messages" invisible>\n  You have received new messages. This notification is invisible.\n</Notification>\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<div class="hiddenFromScreen" role="alert">\n  <section aria-label="Notification" class="hds-notification">\n    <div class="hds-notification__content">\n      <div class="hds-notification__label">\n        <span class="hds-icon hds-icon--info-circle-fill" aria-hidden="true"></span>\n        <span>New messages</span>\n      </div>\n      <div class="hds-notification__body">You have received new messages. This notification is invisible.</div>\n    </div>\n  </section>\n</div>\n'))),(0,i.kt)("h3",{id:"packages",style:{position:"relative"}},"Packages",(0,i.kt)("a",{parentName:"h3",href:"#packages","aria-label":"packages permalink",className:"header-anchor after"},(0,i.kt)("span",{parentName:"a",className:"hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs","aria-hidden":"true",style:{verticalAlign:"middle"}}))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Package"),(0,i.kt)("th",{parentName:"tr",align:null},"Included"),(0,i.kt)("th",{parentName:"tr",align:null},"Storybook link"),(0,i.kt)("th",{parentName:"tr",align:null},"Source link"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"HDS React")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("div",{style:{display:"flex",gap:"var(--spacing-3-xs)"}},(0,i.kt)(m,{mdxType:"IconCheckCircleFill"})," Yes ")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)(l.L,{openInNewTab:!0,openInNewTabAriaLabel:"Opens in a new tab",href:"/storybook/react/?path=/story/components-notification--default",mdxType:"Link"},"View in Storybook")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)(o.Z,{openInNewTab:!0,openInNewTabAriaLabel:"Opens in a new tab",href:"https://github.com/City-of-Helsinki/helsinki-design-system/tree/master/packages/react/src/components/notification",mdxType:"ExternalLink"},"View source"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"HDS Core")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("div",{style:{display:"flex",gap:"var(--spacing-3-xs)"}},(0,i.kt)(m,{mdxType:"IconCheckCircleFill"})," Yes ")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)(l.L,{openInNewTab:!0,openInNewTabAriaLabel:"Opens in a new tab",href:"/storybook/core/?path=/story/components-notification--default",mdxType:"Link"},"View in Storybook")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)(o.Z,{openInNewTab:!0,openInNewTabAriaLabel:"Opens in a new tab",href:"https://github.com/City-of-Helsinki/helsinki-design-system/tree/master/packages/core/src/components/notification",mdxType:"ExternalLink"},"View source"))))),(0,i.kt)("h3",{id:"properties",style:{position:"relative"}},"Properties",(0,i.kt)("a",{parentName:"h3",href:"#properties","aria-label":"properties permalink",className:"header-anchor after"},(0,i.kt)("span",{parentName:"a",className:"hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs","aria-hidden":"true",style:{verticalAlign:"middle"}}))),(0,i.kt)("p",null,"Note! You can find the full list of properties in the ",(0,i.kt)(l.L,{openInNewTab:!0,openInNewTabAriaLabel:"Opens in a new tab",href:"/storybook/react/?path=/story/components-notification--default",mdxType:"Link"},"React Storybook.")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Values"),(0,i.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"autoClose")),(0,i.kt)("td",{parentName:"tr",align:null},"If set to true, the Toast notification will be closed automatically after a certain time."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:null},"false")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boxShadow")),(0,i.kt)("td",{parentName:"tr",align:null},"If set to true, the notification will have a box shadow."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:null},"false")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"displayAutoCloseProgress")),(0,i.kt)("td",{parentName:"tr",align:null},"If set to true, a progress is displayed on top of the Toast notification."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:null},"true")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"invisible")),(0,i.kt)("td",{parentName:"tr",align:null},'If set to true, the notification will be visually hidden. Useful when notification should only be "seen" by screen readers.'),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:null},"false")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"label")),(0,i.kt)("td",{parentName:"tr",align:null},"The label of the notification."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ReactNode")),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"notificationAriaLabel")),(0,i.kt)("td",{parentName:"tr",align:null},"The aria-label of the notification section element."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"Notification"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"onClose")),(0,i.kt)("td",{parentName:"tr",align:null},"Callback fired when the notification is closed"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"function")),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"type")),(0,i.kt)("td",{parentName:"tr",align:null},"The type of the notification. Affects the colour and icon of the notification."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"info"'),", ",(0,i.kt)("inlineCode",{parentName:"td"},'"success"'),", ",(0,i.kt)("inlineCode",{parentName:"td"},'"alert"'),", ",(0,i.kt)("inlineCode",{parentName:"td"},'"error"')),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"info"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"position")),(0,i.kt)("td",{parentName:"tr",align:null},"The position of the notification."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"inline"'),", ",(0,i.kt)("inlineCode",{parentName:"td"},'"top-left"'),", ",(0,i.kt)("inlineCode",{parentName:"td"},'"top-center"'),", ",(0,i.kt)("inlineCode",{parentName:"td"},'"top-right"'),", ",(0,i.kt)("inlineCode",{parentName:"td"},'"bottom-left"'),", ",(0,i.kt)("inlineCode",{parentName:"td"},'"bottom-center"'),", ",(0,i.kt)("inlineCode",{parentName:"td"},'"bottom-right"')),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"inline"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"size")),(0,i.kt)("td",{parentName:"tr",align:null},"The size of the notification."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"small"'),", ",(0,i.kt)("inlineCode",{parentName:"td"},'"default"'),", ",(0,i.kt)("inlineCode",{parentName:"td"},'"large"')),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"default"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"dismissible")),(0,i.kt)("td",{parentName:"tr",align:null},"If set to true, the notification can be closed."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:null},"false")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"closeButtonLabelText")),(0,i.kt)("td",{parentName:"tr",align:null},"The aria-label and title for the close button."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"[Table 1:Notification properties]"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})))))}N.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-components-notification-code-mdx-0e0f74ee9de98287480f.js.map