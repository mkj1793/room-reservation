"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[6377],{51021:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return d},default:function(){return p}});var n=t(63366),i=(t(67294),t(64983)),l=t(37792),s=t(37274),r=t(20597),o=t(1076),c=["components"],d={slug:"/components/tag",title:"Tag",navTitle:"Tag"},h={_frontmatter:d},m=function(e){var a=e.children,t=e.pageContext;return(0,i.kt)(r.default,{pageContext:t},a)};function p(e){var a=e.components,t=(0,n.Z)(e,c);return(0,i.kt)(m,Object.assign({},h,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"usage",style:{position:"relative"}},"Usage",(0,i.kt)("a",{parentName:"h2",href:"#usage","aria-label":"usage permalink",className:"header-anchor after"},(0,i.kt)("i",{parentName:"a",className:"hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs","aria-hidden":"true",style:{verticalAlign:"middle"}}))),(0,i.kt)("h3",{id:"example",style:{position:"relative"}},"Example",(0,i.kt)("a",{parentName:"h3",href:"#example","aria-label":"example permalink",className:"header-anchor after"},(0,i.kt)("i",{parentName:"a",className:"hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs","aria-hidden":"true",style:{verticalAlign:"middle"}}))),(0,i.kt)(s.ZP,{mdxType:"PlaygroundPreview"},(0,i.kt)(l.T,{mdxType:"Tag"},"News"),(0,i.kt)(l.T,{style:{marginLeft:"var(--spacing-s)"},mdxType:"Tag"},"Announcements")),(0,i.kt)("h3",{id:"principles",style:{position:"relative"}},"Principles",(0,i.kt)("a",{parentName:"h3",href:"#principles","aria-label":"principles permalink",className:"header-anchor after"},(0,i.kt)("i",{parentName:"a",className:"hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs","aria-hidden":"true",style:{verticalAlign:"middle"}}))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Tags are meant for presenting object attributes and filters.")," If you are presenting status information, use ",(0,i.kt)(o.Z,{href:"/components/status-label",mdxType:"InternalLink"},"Status label component")," instead."),(0,i.kt)("li",{parentName:"ul"},"Keep labels short and concise. Use 1-2 words at maximum and do not use labels expanding to two rows."),(0,i.kt)("li",{parentName:"ul"},"Do not use icons inside Tag labels."),(0,i.kt)("li",{parentName:"ul"},"Tags are often related to some other element on the page (e.g. table row or search field as filters). Aim to keep tags and their related elements close to each other so the user can easily interpret the relation."),(0,i.kt)("li",{parentName:"ul"},"Unlike status labels, ",(0,i.kt)("strong",{parentName:"li"},"tags can be configured to be clickable and deletable"),". You can use this feature to create removable filters/selections or links to category filtered pages.")),(0,i.kt)("h3",{id:"variations",style:{position:"relative"}},"Variations",(0,i.kt)("a",{parentName:"h3",href:"#variations","aria-label":"variations permalink",className:"header-anchor after"},(0,i.kt)("i",{parentName:"a",className:"hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs","aria-hidden":"true",style:{verticalAlign:"middle"}}))),(0,i.kt)("h4",{id:"default",style:{position:"relative"}},"Default",(0,i.kt)("a",{parentName:"h4",href:"#default","aria-label":"default permalink",className:"header-anchor after"},(0,i.kt)("i",{parentName:"a",className:"hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs","aria-hidden":"true",style:{verticalAlign:"middle"}}))),(0,i.kt)("p",null,"By default, Tags are non-interactable elements. They only include a label and do not have any specific styling."),(0,i.kt)(s.ZP,{mdxType:"PlaygroundPreview"},(0,i.kt)(l.T,{mdxType:"Tag"},"News"),(0,i.kt)(l.T,{style:{marginLeft:"var(--spacing-s)"},mdxType:"Tag"},"Announcements")),(0,i.kt)("h4",{id:"clickable",style:{position:"relative"}},"Clickable",(0,i.kt)("a",{parentName:"h4",href:"#clickable","aria-label":"clickable permalink",className:"header-anchor after"},(0,i.kt)("i",{parentName:"a",className:"hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs","aria-hidden":"true",style:{verticalAlign:"middle"}}))),(0,i.kt)("p",null,"Tags can be configured to be interactable by giving them an ",(0,i.kt)("inlineCode",{parentName:"p"},"onClick")," function prop. This way Tags can act as links or actions. Since these Tags are fully interactable they can be also focused and receive default HDS focus indicator styling."),(0,i.kt)("p",null,"Remember to add descriptive ",(0,i.kt)("inlineCode",{parentName:"p"},"aria-label")," to clearly indicate the link target or action to assistive technologies."),(0,i.kt)(s.ZP,{mdxType:"PlaygroundPreview"},(0,i.kt)(l.T,{role:"link",onClick:function(){},"aria-label":"Move to category: News",mdxType:"Tag"},"News"),(0,i.kt)(l.T,{role:"link",onClick:function(){},"aria-label":"Move to category: Announcements",style:{marginLeft:"var(--spacing-s)"},mdxType:"Tag"},"Announcements")),(0,i.kt)("h4",{id:"deletable",style:{position:"relative"}},"Deletable",(0,i.kt)("a",{parentName:"h4",href:"#deletable","aria-label":"deletable permalink",className:"header-anchor after"},(0,i.kt)("i",{parentName:"a",className:"hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs","aria-hidden":"true",style:{verticalAlign:"middle"}}))),(0,i.kt)("p",null,"Tags can be configured to be deletable by giving them an ",(0,i.kt)("inlineCode",{parentName:"p"},"onDelete")," function prop. This enables a delete icon inside the Tag. Deleting can be useful in situations where Tags are used as filters (e.g. for search)."),(0,i.kt)("p",null,"Remember to add descriptive ",(0,i.kt)("inlineCode",{parentName:"p"},"aria-label")," to the delete button to clearly indicate what the user is deleting when triggering the action."),(0,i.kt)(s.ZP,{mdxType:"PlaygroundPreview"},(0,i.kt)(l.T,{onDelete:function(){},deleteButtonAriaLabel:"Delete filter: News",mdxType:"Tag"},"News"),(0,i.kt)(l.T,{onDelete:function(){},deleteButtonAriaLabel:"Delete filter: Announcements",style:{marginLeft:"var(--spacing-s)"},mdxType:"Tag"},"Announcements")))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-components-tag-index-mdx-d20e08abdaa5d5dd3201.js.map