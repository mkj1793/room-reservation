"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[7680,4605],{33808:function(e,n,t){t.r(n);var a=t(11151),i=t(67294),o=t(9807),r=t(80699),s=t(1076),l=t(69636);const c=e=>{let{children:n,pageContext:t}=e;return i.createElement(l.default,{pageContext:t},n)};function h(e){const n=Object.assign({h2:"h2",a:"a",span:"span",p:"p"},(0,a.ah)(),e.components);return i.createElement(i.Fragment,null,i.createElement(n.h2,{id:"design",style:{position:"relative"}},"Design",i.createElement(n.a,{href:"#design","aria-label":"design permalink",className:"header-anchor after"},i.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span class="hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs" aria-hidden="true" style="vertical-align: middle"></span>'}}))),"\n",i.createElement(o.A,{heading:"What design software should I use?",headingLevel:"3",theme:{"--header-font-size":"var(--fontsize-heading-xs)","--padding-vertical":"var(--spacing-s)"}},i.createElement(n.p,null,"The official design software used in the City of Helsinki is Figma. This is also software that the HDS supports - meaning that the design kit is shared for the Figma software only. It is recommended to use Figma in your project if it is possible, and store your projects in the City of Helsinki organisation. It ensures that the HDS team can support you in problem situations.")),"\n",i.createElement(o.A,{heading:"How can I acquire a licence for Figma?",headingLevel:"3",theme:{"--header-font-size":"var(--fontsize-heading-xs)","--padding-vertical":"var(--spacing-s)"}},i.createElement(n.p,null,"The PO or City of Helsinki representative of your project may contact the HDS team. Designers may acquire full editor licences to the City of Helsinki organisation, developers and others get viewer licences.")),"\n",i.createElement(o.A,{heading:"How can I get the Helsinki Grotesk font to my design software?",headingLevel:"3",theme:{"--header-font-size":"var(--fontsize-heading-xs)","--padding-vertical":"var(--spacing-s)"}},i.createElement(n.p,null,"In order to use the font in a design software, you need to have the font locally on your computer. Please refer to ",i.createElement(r.Z,{openInNewTab:!0,openInNewTabAriaLabel:"Opens in a new tab",openInExternalDomainAriaLabel:"Opens a different website",href:"https://helsinkisolutionoffice.atlassian.net/wiki/spaces/DD/pages/296058881/Using+Helsinki+Grotesk+fonts"},"the internal font documentation in Confluence")," and follow the desiger instructions. If you do not have access to Confluence, ask from your project's city representative.")),"\n",i.createElement(o.A,{heading:"Which HDS component colors can I customise?",headingLevel:"3",theme:{"--header-font-size":"var(--fontsize-heading-xs)","--padding-vertical":"var(--spacing-s)"}},i.createElement("p",null,i.createElement(n.p,null,"First, please take a look at ",i.createElement(s.Z,{size:"M",href:"/foundation/design-tokens/colour"},"the Colour token documentation")," for general information about using the colours."),i.createElement(n.p,null,"There are a few rules of thumb that you can follow when customising colours:"),i.createElement("ol",null,i.createElement("li",null,"If the default colour is Black or White, you can replace it with a Black, a White or a Grayscale colour."),i.createElement("li",null,"If the default colour is a brand colour, you can replace it with another brand colour.")),i.createElement(n.p,null,"If you are in doubt, you can always ask questions in the #designsystem Slack channel or via other HDS contact methods."))),"\n",i.createElement(o.A,{heading:"Where can the icons be found in vector/PNG/etc. format?",headingLevel:"3",theme:{"--header-font-size":"var(--fontsize-heading-xs)","--padding-vertical":"var(--spacing-s)"}},i.createElement(n.p,null,"You can ",i.createElement(r.Z,{href:"https://github.com/City-of-Helsinki/helsinki-design-system/releases/latest/download/hds-icon-kit.zip",size:"M",external:!0,openInNewTab:!0,openInExternalDomainAriaLabel:"Opens a different website.",openInNewTabAriaLabel:"Opens in a new tab."},"\ndownload the newest HDS icon kit from GitHub.")," The kit contains all HDS icons in SVG, PNG, EPS and PDF formats. Icons are also available as components in Figma design library.")))}n.default=function(e){return void 0===e&&(e={}),i.createElement(c,e,i.createElement(h,e))}},69636:function(e,n,t){t.r(n);var a=t(11151),i=t(67294),o=t(89482),r=(t(18607),t(26127));function s(e){const n=Object.assign({h1:"h1",a:"a",span:"span"},(0,a.ah)(),e.components);return r.Z||l("PageTabs",!1),r.Z.Tab||l("PageTabs.Tab",!0),r.Z.TabList||l("PageTabs.TabList",!0),r.Z.TabPanel||l("PageTabs.TabPanel",!0),i.createElement(i.Fragment,null,i.createElement(n.h1,{id:"frequently-asked-questions",style:{position:"relative"}},"Frequently asked questions",i.createElement(n.a,{href:"#frequently-asked-questions","aria-label":"frequently asked questions permalink",className:"header-anchor after"},i.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span class="hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs" aria-hidden="true" style="vertical-align: middle"></span>'}}))),"\n",i.createElement(o.Z,null,"Here you will find frequently asked questions about HDS and answers to those questions. If you do not find an answer to your question on this page, you can always contact the HDS team for more information."),"\n",i.createElement(r.Z,{pageContext:e.pageContext},i.createElement(r.Z.TabList,null,i.createElement(r.Z.Tab,{href:"/"},"General"),i.createElement(r.Z.Tab,{href:"/design"},"Design"),i.createElement(r.Z.Tab,{href:"/code"},"Code"),i.createElement(r.Z.Tab,{href:"/accessibility"},"Accessibility")),i.createElement(r.Z.TabPanel,null,e.children)))}function l(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}n.default=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?i.createElement(n,e,i.createElement(s,e)):s(e)}},89482:function(e,n,t){var a=t(67294),i=t(42972);n.Z=e=>{let{color:n="var(--color-black-90)",size:t="var(--fontsize-body-xl)",style:o={},children:r}=e;return a.createElement("p",{style:{fontSize:t,color:n,maxWidth:600,...o}},(0,i.g)(r))}},26127:function(e,n,t){var a=t(67294),i=t(14160),o=t(17014),r=t(42972);const s="PageTabList",l="PageTabPanel",c="PageTab",h=e=>{var n;let{pageContext:t,children:h}=e;const d=t.frontmatter.slug,u=Array.isArray(h)?h:[h],m=u.find((e=>(0,a.isValidElement)(e)&&e.type.componentName===s)),p=u.find((e=>(0,a.isValidElement)(e)&&e.type.componentName===l)),f=null===(n=m.props)||void 0===n?void 0:n.children.filter((e=>e.type.componentName===c)),g=f.findIndex((e=>d.endsWith(e.props.href))),b=-1===g?0:g,y=0===b?d:(e=>`/${e.trim().split("/").filter((e=>!!e)).slice(0,-1).join("/")}`)(d);return a.createElement(o.a,{initiallyActiveTab:b},a.createElement(o.a.TabList,{className:"page-tabs-list"},f.map((e=>a.createElement(o.a.Tab,{key:e.props.href,onClick:()=>(0,i.navigate)(`${"/"===e.props.href?y:y+e.props.href}`)},(0,r.g)(e.props.children))))),f.map(((e,n)=>a.createElement(o.a.TabPanel,{key:e.props.href},b===n?p.props.children:a.createElement("div",null)))))},d=e=>{let{children:n}=e;return a.createElement(o.a.TabList,null,n)};d.componentName=s;const u=e=>{let{href:n,slug:t,children:i}=e;return a.createElement(o.a.Tab,null," ",i)};u.componentName=c;const m=e=>{let{children:n}=e;return a.createElement(o.a.TabPanel,null,n)};m.componentName=l,h.TabList=d,h.Tab=u,h.TabPanel=m,n.Z=h}}]);