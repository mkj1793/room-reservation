(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"Xl+K":function(e,t,i){"use strict";i.r(t),i.d(t,"_frontmatter",(function(){return h})),i.d(t,"default",(function(){return y}));var n=i("cxan"),a=i("+wNj"),o=i("ERkP"),s=i("ZVZ0"),c=i("9Rvw"),l=i("qbsg"),r=i("gW3n"),d=i("4tii"),b=i("6CJN"),p=i("sQ7B"),u=i("vD+s"),f=i("fSvc"),m=i("x0e6"),h=(i("l1C2"),{});void 0!==h&&h&&h===Object(h)&&Object.isExtensible(h)&&!h.hasOwnProperty("__filemeta")&&Object.defineProperty(h,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/components/notification.mdx"}});var g={_frontmatter:h},v=c.a;function y(e){var t,i,y,N=e.components,O=Object(a.a)(e,["components"]);return Object(s.b)(v,Object(n.a)({},g,O,{components:N,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"notifications"},"Notifications"),Object(s.b)(r.a,{type:"info",mdxType:"StatusLabel"},"Stable"),Object(s.b)(r.a,{type:"success",style:{marginLeft:"var(--spacing-xs)"},mdxType:"StatusLabel"},"Accessible"),Object(s.b)(u.a,{mdxType:"LargeParagraph"},"Notifications are used to present timely information to the user. HDS offers two types of notifications for different use cases."),Object(s.b)("h2",{id:"principles"},"Principles"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Notifications are designed to capture users' attention. ",Object(s.b)("strong",{parentName:"li"},"Therefore, they should be used sparingly only for important information or updates.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Notification title should include the most important information about the notification.")," Aim for a title that is short, concise and easy to understand. Avoid titles that span over multiple lines."),Object(s.b)("li",{parentName:"ul"},"HDS offers multiple options for notification screen locations. Choose locations that fit best for your service and stay consistent."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"If you use automatically disappearing notifications, make sure the information is accessible elsewhere in case the user misses the notification."))),Object(s.b)("h3",{id:"when-to-use-each-notification-type"},"When to use each notification type?"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Use inline notifications when information is related to the content or if you want to keep information visible at all times.")," Inline notifications are part of the content and should therefore be placed as close as possible to the related part of the content. Inline notifications should not be added to the page dynamically."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Use toast notifications to inform the user about a specific event or change in the system status.")," Toast notifications do not relate to any specific object on the page and are therefore placed on top of the content (usually top right or bottom center)."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Use invisible notifications to make system state changes more apparent for screen reader users.")," Some features (such as moving a product to the shopping cart) are apparent for regular users but screen readers may need extra assist.")),Object(s.b)("h3",{id:"when-to-use-each-status-colour-info-success-alert-error"},"When to use each status colour (info, success, alert, error)?"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"You can find guidelines on when to use each status colour in the ",Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"/design-tokens/colour#ui-colours",title:"UI colours"}),"colour guidelines"),". Aim to use notification levels and colours consistently across your service.")),Object(s.b)("h2",{id:"accessibility"},"Accessibility"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Avoid using automatically disappearing toast notifications for critical information or very long messages. It is possible that the notification disappears before the user or screen reader can react to the message. Refer to ",Object(s.b)(f.a,{href:"https://www.w3.org/WAI/WCAG21/Understanding/no-timing.html",external:!0,mdxType:"Link"},"WCAG 2.1 No timing requirement")," for more information."),Object(s.b)("li",{parentName:"ul"},"Remember that colour should never be the only way of conveying information. Make sure the meaning of the notification is clearly described by the title and body. Refer to ",Object(s.b)(f.a,{href:"https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html",external:!0,mdxType:"Link"},"WCAG 2.1 Use of Colour guideline")," for more information."),Object(s.b)("li",{parentName:"ul"},"It is recommended (but not required) to offer a way to turn off less important notifications. Refer to ",Object(s.b)(f.a,{href:"https://www.w3.org/WAI/WCAG21/Understanding/interruptions.html",external:!0,mdxType:"Link"},"WCAG 2.1 Interruptions guideline")," for more information."),Object(s.b)("li",{parentName:"ul"},"HDS Toast notifications use ",Object(s.b)("inlineCode",{parentName:"li"},'role="alert"')," which means they are immediately announced to the screen reader as the node is inserted to the DOM. Inline notifications do not need this role since they are created during page load.")),Object(s.b)("h2",{id:"usage--variations"},"Usage & variations"),Object(s.b)("h3",{id:"inline"},"Inline"),Object(s.b)("p",null,"Inline notifications are used as part of the content. They closely relate to the part of the content and work best when placed as close as the related content as possible. Inline notifications are often used to provide or emphasise key information related to the content of the page. It is recommended not to make them closable - unless their information is not important or can be accessed somewhere else. Inline notifications greatly emphasise the information so they should be used sparingly in order not to dilute their effect. A good rule of thumb is to limit the number of simultaneous inline notifications to one."),Object(s.b)("p",null,"Note! Inline notifications should not be added to the page dynamically. For this use case, use ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"#toast"}),"Toast notifications"),"."),Object(s.b)(l.c,{__position:2,__code:'<Notification label="New messages">\n  You have received new messages.\n</Notification>\n<Notification\n  label="Form done"\n  type="success"\n  style={{ marginTop: \'var(--spacing-s)\' }}\n>\n  Form submit was successful!\n</Notification>\n<Notification\n  label="Slow loading"\n  type="alert"\n  style={{ marginTop: \'var(--spacing-s)\' }}\n>\n  Loading is taking longer than expected.\n</Notification>\n<Notification\n  label="Missing information"\n  type="error"\n  style={{ marginTop: \'var(--spacing-s)\' }}\n>\n  Form is missing critical information.\n</Notification>',__scope:(t={props:O,DefaultLayout:c.a,Playground:l.c,Button:d.a,Notification:b.a,StatusLabel:r.a,ColorBox:p.a,LargeParagraph:u.a,Link:f.a,Text:m.a},t.DefaultLayout=c.a,t._frontmatter=h,t),mdxType:"Playground"},Object(s.b)(b.a,{label:"New messages",mdxType:"Notification"},"You have received new messages."),Object(s.b)(b.a,{label:"Form done",type:"success",style:{marginTop:"var(--spacing-s)"},mdxType:"Notification"},"Form submit was successful!"),Object(s.b)(b.a,{label:"Slow loading",type:"alert",style:{marginTop:"var(--spacing-s)"},mdxType:"Notification"},"Loading is taking longer than expected."),Object(s.b)(b.a,{label:"Missing information",type:"error",style:{marginTop:"var(--spacing-s)"},mdxType:"Notification"},"Form is missing critical information.")),Object(s.b)("h4",{id:"core-code-example"},"Core code example:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'\x3c!-- Default --\x3e\n<section aria-label="Notification" class="hds-notification">\n  <div class="hds-notification__content">\n    <div class="hds-notification__label" role="heading" aria-level="2">\n      <span class="hds-icon hds-icon--info-circle" aria-hidden="true"></span>\n      <span>New messages</span>\n    </div>\n    <div class="hds-notification__body">You have received new messages.</div>\n  </div>\n</section>\n\n\x3c!-- Success --\x3e\n<section aria-label="Notification" class="hds-notification hds-notification--success">\n  <div class="hds-notification__content">\n    <div class="hds-notification__label" role="heading" aria-level="2">\n      <span class="hds-icon hds-icon--check" aria-hidden="true"></span>\n      <span>Form done</span>\n    </div>\n    <div class="hds-notification__body">Form submit was successful!</div>\n  </div>\n</section>\n\n\x3c!-- Alert --\x3e\n<section aria-label="Notification" class="hds-notification hds-notification--alert">\n  <div class="hds-notification__content">\n    <div class="hds-notification__label" role="heading" aria-level="2">\n      <span class="hds-icon hds-icon--alert-circle" aria-hidden="true"></span>\n      <span>Slow loading</span>\n    </div>\n    <div class="hds-notification__body">Loading is taking longer than expected.</div>\n  </div>\n</section>\n\n\x3c!-- Error --\x3e\n<section aria-label="Notification" class="hds-notification hds-notification--error">\n  <div class="hds-notification__content">\n    <div class="hds-notification__label" role="heading" aria-level="2">\n      <span class="hds-icon hds-icon--error" aria-hidden="true"></span>\n      <span>Missing information</span>\n    </div>\n    <div class="hds-notification__body">Form is missing critical information.</div>\n  </div>\n</section>\n')),Object(s.b)("h4",{id:"react-code-example"},"React code example:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),'<Notification label="New messages" dismissible>You have received new messages.</Notification>\n<Notification label="Form done" type="success" dismissible>Form submit was successful!</Notification>\n<Notification label="Slow loading" type="alert" dismissible>Loading is taking longer than expected.</Notification>\n<Notification label="Missing information" type="error">Form is missing critical information.</Notification>\n')),Object(s.b)("h3",{id:"toast"},"Toast"),Object(s.b)("p",null,"Toasts notifications provide lightweight feedback for changes in system status such as successful saving or Internet disconnection. Toasts appear on top of the content (usually top right or bottom center). Be wary using automatically disappearing toasts for critical information such as errors. It is also a good practise to make notifications accessible elsewhere in case the user misses them before they disappear."),Object(s.b)(l.c,{__position:3,__code:'() => {\n  const [open, setOpen] = React.useState(false)\n  const [autoCloseOpen, setAutoCloseOpen] = React.useState(false)\n  return (\n    <>\n      <Button onClick={() => setOpen(true)}>Show toast</Button>\n      <Button\n        onClick={() => setAutoCloseOpen(true)}\n        style={{ display: \'flex\', marginTop: \'var(--spacing-s)\' }}\n      >\n        Show automatically disappearing toast\n      </Button>\n      {open && (\n        <Notification\n          label="New messages"\n          position="top-right"\n          dismissible\n          closeButtonLabelText="Close toast"\n          onClose={() => setOpen(false)}\n          style={{ zIndex: 100 }}\n        >\n          You have received new messages.\n        </Notification>\n      )}\n      {autoCloseOpen && (\n        <Notification\n          label="New messages"\n          position="top-right"\n          dismissible\n          autoClose\n          closeButtonLabelText="Close toast"\n          onClose={() => setAutoCloseOpen(false)}\n          style={{ zIndex: 100 }}\n        >\n          You have received new messages.\n        </Notification>\n      )}\n    </>\n  )\n}',__scope:(i={props:O,DefaultLayout:c.a,Playground:l.c,Button:d.a,Notification:b.a,StatusLabel:r.a,ColorBox:p.a,LargeParagraph:u.a,Link:f.a,Text:m.a},i.DefaultLayout=c.a,i._frontmatter=h,i),mdxType:"Playground"},(function(){var e=o.useState(!1),t=e[0],i=e[1],n=o.useState(!1),a=n[0],c=n[1];return Object(s.b)(o.Fragment,null,Object(s.b)(d.a,{onClick:function(){return i(!0)},mdxType:"Button"},"Show toast"),Object(s.b)(d.a,{onClick:function(){return c(!0)},style:{display:"flex",marginTop:"var(--spacing-s)"},mdxType:"Button"},"Show automatically disappearing toast"),t&&Object(s.b)(b.a,{label:"New messages",position:"top-right",dismissible:!0,closeButtonLabelText:"Close toast",onClose:function(){return i(!1)},style:{zIndex:100},mdxType:"Notification"},"You have received new messages."),a&&Object(s.b)(b.a,{label:"New messages",position:"top-right",dismissible:!0,autoClose:!0,closeButtonLabelText:"Close toast",onClose:function(){return c(!1)},style:{zIndex:100},mdxType:"Notification"},"You have received new messages."))})),Object(s.b)("h4",{id:"core-code-example-1"},"Core code example:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<section aria-label="Notification" class="hds-notification hds-notification--top-right">\n  <div role="alert" class="hds-notification__content">\n    <div class="hds-notification__label" role="heading" aria-level="2">\n      <span class="hds-icon hds-icon--info-circle" aria-hidden="true"></span>\n      <span>New messages</span>\n    </div>\n    <div class="hds-notification__body">You have received new messages.</div>\n  </div>\n  <button class="hds-notification__close-button" aria-label="Close toast" type="button" onclick="">\n    <span class="hds-icon hds-icon--cross" aria-hidden="true"></span>\n  </button>\n</section>\n')),Object(s.b)("h4",{id:"react-code-example-1"},"React code example:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),'<Notification label="New messages" position="top-right" dismissible closeButtonLabelText="Close toast" onClose={() => setOpen(false)}>\n  You have received new messages.\n</Notification>\n\n<Notification label="New messages" position="top-right" dismissible autoClose closeButtonLabelText="Close toast" onClose={() => setAutoCloseOpen(false)}>\n  You have received new messages.\n</Notification>\n')),Object(s.b)("h3",{id:"notification-sizes"},"Notification sizes"),Object(s.b)("p",null,"HDS notifications come in three different sizes, allowing the designer to choose depending on the situation and notification importance."),Object(s.b)(l.c,{__position:4,__code:'<Notification size="large" label="New messages">\n  You have received new messages.\n</Notification>\n<Notification\n  size="default"\n  label="New messages"\n  style={{ marginTop: \'var(--spacing-s)\' }}\n>\n  You have received new messages.\n</Notification>\n<Notification\n  size="small"\n  label="New messages"\n  style={{ marginTop: \'var(--spacing-s)\' }}\n>\n  You have received new messages.\n</Notification>',__scope:(y={props:O,DefaultLayout:c.a,Playground:l.c,Button:d.a,Notification:b.a,StatusLabel:r.a,ColorBox:p.a,LargeParagraph:u.a,Link:f.a,Text:m.a},y.DefaultLayout=c.a,y._frontmatter=h,y),mdxType:"Playground"},Object(s.b)(b.a,{size:"large",label:"New messages",mdxType:"Notification"},"You have received new messages."),Object(s.b)(b.a,{size:"default",label:"New messages",style:{marginTop:"var(--spacing-s)"},mdxType:"Notification"},"You have received new messages."),Object(s.b)(b.a,{size:"small",label:"New messages",style:{marginTop:"var(--spacing-s)"},mdxType:"Notification"},"You have received new messages.")),Object(s.b)("h4",{id:"core-code-example-2"},"Core code example:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'\x3c!-- Large --\x3e\n<section aria-label="Notification" class="hds-notification hds-notification--large">\n  <div class="hds-notification__content">\n    <div class="hds-notification__label" role="heading" aria-level="2">\n      <span class="hds-icon hds-icon--info-circle" aria-hidden="true"></span>\n      <span>New messages</span>\n    </div>\n    <div class="hds-notification__body">You have received new messages.</div>\n  </div>\n</section>\n\n\x3c!-- Default --\x3e\n<section aria-label="Notification" class="hds-notification">\n  <div class="hds-notification__content">\n    <div class="hds-notification__label" role="heading" aria-level="2">\n      <span class="hds-icon hds-icon--info-circle" aria-hidden="true"></span>\n      <span>New messages</span>\n    </div>\n    <div class="hds-notification__body">You have received new messages.</div>\n  </div>\n</section>\n\n\x3c!-- Small --\x3e\n<section aria-label="Notification" class="hds-notification hds-notification--small">\n  <div class="hds-notification__content">\n    <div class="hds-notification__label" role="heading" aria-level="2">\n      <span class="hds-icon hds-icon--info-circle" aria-hidden="true"></span>\n    </div>\n    <div class="hds-notification__body">You have received new messages.</div>\n  </div>\n</section>\n')),Object(s.b)("h4",{id:"react-code-example-2"},"React code example:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),'<Notification size="large" label="New messages (only visible to screen readers)">You have received new messages.</Notification>\n<Notification size="default" label="New messages (only visible to screen readers)">You have received new messages.</Notification>\n<Notification size="small" label="New messages (only visible to screen readers)">You have received new messages.</Notification>\n')),Object(s.b)("h3",{id:"invisible"},"Invisible"),Object(s.b)("p",null,"Invisible notifications do not show up on screen and they are meant to aid screen reader users. Some updates to system status may be apparent to regular users through animations etc. However, screen readers can easily ignore this type of feedback. Invisible notifications are not visible to regular users but screen readers detect them. Use them to improve user experience for screen reader users."),Object(s.b)("h4",{id:"core-code-example-3"},"Core code example:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<div class="hiddenFromScreen" aria-atomic="true" aria-live="assertive" role="status">\n  <section aria-label="Notification" class="hds-notification">\n    <div class="hds-notification__content">\n      <div class="hds-notification__label" role="heading" aria-level="2">\n        <span class="hds-icon hds-icon--info-circle" aria-hidden="true"></span>\n        <span>New messages</span>\n      </div>\n      <div class="hds-notification__body">You have received new messages. This notification is invisible.</div>\n    </div>\n  </section>\n</div>\n')),Object(s.b)("h4",{id:"react-code-example-3"},"React code example:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),'<Notification label="New messages" invisible>You have received new messages. This notification is invisible.</Notification>\n')),Object(s.b)("h2",{id:"demos--api"},"Demos & API"),Object(s.b)("h3",{id:"core"},"Core"),Object(s.b)("p",null,Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"/storybook/core/?path=/story/components-notification--default"}),"Notifications in hds-core")),Object(s.b)("h3",{id:"react"},"React"),Object(s.b)("p",null,Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"/storybook/react/?path=/story/components-notification--default"}),"Notifications in hds-react")),Object(s.b)("p",null,Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"/storybook/react/?path=/docs/components-notification--default"}),"Notifications API")))}void 0!==y&&y&&y===Object(y)&&Object.isExtensible(y)&&!y.hasOwnProperty("__filemeta")&&Object.defineProperty(y,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/components/notification.mdx"}}),y.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-components-notification-mdx-020182ca2307505ebf52.js.map