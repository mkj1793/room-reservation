"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3107,4404,1529],{83428:function(e,t,n){n.d(t,{S:function(){return i}});var a=n(80136),l=n(67294),s=n(7444),r=n(34300),o={statusLabel:"StatusLabel-module_statusLabel__3R2J2 status-label_hds-status-label__1L8YI",statusLabelWithIcon:"StatusLabel-module_statusLabelWithIcon__5lKVk status-label_hds-status-label--with-icon__3bHf6",statusLabelIcon:"StatusLabel-module_statusLabelIcon__2SAou status-label_hds-status-label-icon__3K58a",info:"StatusLabel-module_info__3YrAe status-label_hds-status-label--info__J28-H",success:"StatusLabel-module_success__2BfdX status-label_hds-status-label--success__3jiST",alert:"StatusLabel-module_alert__2VR8r status-label_hds-status-label--alert__1ecsX",error:"StatusLabel-module_error__zNgn8 status-label_hds-status-label--error__2EYi4"};(0,s.s)(".status-label_hds-status-label__1L8YI{--status-label-background:var(--color-black-10);--status-label-color:var(--color-black-90);--status-label-height:32px;background-color:var(--status-label-background);border-radius:20px;color:var(--status-label-color);display:inline-block;font-size:var(--fontsize-body-s);line-height:var(--status-label-height);min-height:var(--status-label-height);padding:0 var(--spacing-2-xs);vertical-align:middle}.status-label_hds-status-label--with-icon__3bHf6{align-items:center;display:inline-flex;padding-left:var(--spacing-3-xs)}.status-label_hds-status-label-icon__3K58a{height:var(--spacing-m);margin-right:var(--spacing-3-xs);width:var(--spacing-m)}.status-label_hds-status-label--info__J28-H{--status-label-background:var(--color-info);--status-label-color:var(--color-white)}.status-label_hds-status-label--success__3jiST{--status-label-background:var(--color-success);--status-label-color:var(--color-white)}.status-label_hds-status-label--alert__1ecsX{--status-label-background:var(--color-alert)}.status-label_hds-status-label--error__2EYi4{--status-label-background:var(--color-error);--status-label-color:var(--color-white)}");const c=e=>{let{icon:t}=e;return l.createElement("span",{className:o.statusLabelIcon,"aria-hidden":"true"},t)},i=e=>{var{children:t,className:n,dataTestId:s,type:i="neutral",iconLeft:m}=e,d=(0,a._)(e,["children","className","dataTestId","type","iconLeft"]);return l.createElement("span",Object.assign({className:(0,r.c)(o.statusLabel,o[i],m&&o.statusLabelWithIcon,n),"data-testid":s},d),m&&l.createElement(c,{icon:m}),t)}},88639:function(e,t,n){n.r(t);var a=n(11151),l=n(67294),s=n(50246),r=n(35972);const o=e=>{let{children:t,pageContext:n}=e;return l.createElement(r.default,{pageContext:n},t)};function c(e){const t=Object.assign({h2:"h2",a:"a",span:"span",p:"p",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",pre:"pre",h3:"h3",h4:"h4"},(0,a.ah)(),e.components),{InternalLink:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("InternalLink",!0),l.createElement(l.Fragment,null,l.createElement(t.h2,{id:"creating-and-connecting-your-own-module",style:{position:"relative"}},"Creating and connecting your own module",l.createElement(t.a,{href:"#creating-and-connecting-your-own-module","aria-label":"creating and connecting your own module permalink",className:"header-anchor after"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span class="hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs" aria-hidden="true" style="vertical-align: middle"></span>'}}))),"\n",l.createElement(t.p,null,"If there is a need for a deeper connection to other modules, a custom module can be created. Modules can emit signals. Modules are not React-specific, just plain javascript.\nA module passed to the ",l.createElement(n,{href:"/components/login/api/#beacon"},"Beacon")," must have the following properties:"),"\n",l.createElement(t.table,null,l.createElement(t.thead,null,l.createElement(t.tr,null,l.createElement(t.th,null,"Property"),l.createElement(t.th,null,"Description"))),l.createElement(t.tbody,null,l.createElement(t.tr,null,l.createElement(t.td,null,l.createElement(t.code,null,"connect(beacon)")),l.createElement(t.td,null,"Function called when a module is added to the ",l.createElement(t.code,null,"Beacon"),".")),l.createElement(t.tr,null,l.createElement(t.td,null,l.createElement(t.code,null,"namespace")),l.createElement(t.td,null,"String. A unique namespace.")),l.createElement(t.tr,null,l.createElement(t.td,null,"[Table 1: Custom module properties]"),l.createElement(t.td)))),"\n",l.createElement(s.ZP,null,l.createElement(t.pre,null,l.createElement(t.code,{className:"language-jsx"},"import { createNamespacedBeacon, ConnectedModule } from 'hds-react';\n\nconst createMyCustomModule = (): ConnectedModule => {\n  const customBeacon = createNamespacedBeacon('myModule');\n  const listener = (signal) => {\n    // This is listenening everything\n  };\n  return {\n    namespace: helperNamespace,\n    connect: (targetBeacon) => {\n      customBeacon.storeBeacon(targetBeacon);\n      customBeacon.addListener(createTriggerForAllSignalTypes(), listener);\n    },\n  };\n};\n"))),"\n",l.createElement(t.h3,{id:"connecting-your-module",style:{position:"relative"}},"Connecting your module",l.createElement(t.a,{href:"#connecting-your-module","aria-label":"connecting your module permalink",className:"header-anchor after"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span class="hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs" aria-hidden="true" style="vertical-align: middle"></span>'}}))),"\n",l.createElement(t.p,null,"Modules are automatically connected to other modules when they are passed in the ",l.createElement(t.code,null,"modules")," property of the ",l.createElement(n,{href:"/components/login/usage/#loginprovider"},"LoginProvider"),"."),"\n",l.createElement(t.p,null,l.createElement(t.code,null,"Module.connect()")," is called and when all modules are connected, an ",l.createElement(t.code,null,"init")," signal is emitted for each module. This is done by the ",l.createElement(t.code,null,"Beacon"),"."),"\n",l.createElement(s.ZP,null,l.createElement(t.pre,null,l.createElement(t.code,{className:"language-jsx"},"import { createNamespacedBeacon, ConnectedModule } from 'hds-react';\n\nconst myModule = createMyCustomModule()\n\nconst providerProperties = {..., modules=[myModule]}\n\n<LoginProvider {...providerProperties}>\n  <Content />\n</LoginProvider>\n"))),"\n",l.createElement(t.h3,{id:"custom-namespaced-beacons-for-modules",style:{position:"relative"}},"Custom namespaced beacons for modules",l.createElement(t.a,{href:"#custom-namespaced-beacons-for-modules","aria-label":"custom namespaced beacons for modules permalink",className:"header-anchor after"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span class="hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs" aria-hidden="true" style="vertical-align: middle"></span>'}}))),"\n",l.createElement(t.p,null,"Modules must emit signals in their namespace. Beacon has only one emit function. To make emitting easier, the ",l.createElement(t.code,null,"createNamespacedBeacon")," returns a utility where all emitted signals have a pre-set namespace and there are emit functions for different signal types."),"\n",l.createElement(t.p,null,"This utility also handles cases where listeners are added before the module is connected to the ",l.createElement(t.code,null,"Beacon"),"."),"\n",l.createElement(t.p,null,"It also ignores signals from its namespace when listening to generic signals."),"\n",l.createElement(t.table,null,l.createElement(t.thead,null,l.createElement(t.tr,null,l.createElement(t.th,null,"Name"),l.createElement(t.th,null,"Description"),l.createElement(t.th,null,"Return values"))),l.createElement(t.tbody,null,l.createElement(t.tr,null,l.createElement(t.td,null,l.createElement(t.code,null,"addListener(signalProps, listener)")),l.createElement(t.td,null,"Adds a listener for given signal props. Module's own signals are filtered out if the namespace is for all signals."),l.createElement(t.td,null,"A disposer function")),l.createElement(t.tr,null,l.createElement(t.td,null,l.createElement(t.code,null,"emit(signal)")),l.createElement(t.td,null,"Calls the ",l.createElement(t.code,null,"beacon.emit"),", if the ",l.createElement(t.code,null,"Beacon")," is connected."),l.createElement(t.td,null,"none")),l.createElement(t.tr,null,l.createElement(t.td,null,l.createElement(t.code,null,"emitError(payload)")),l.createElement(t.td,null,"Emits an error with the given payload."),l.createElement(t.td,null,"Context module or ",l.createElement(t.code,null,"undefined"))),l.createElement(t.tr,null,l.createElement(t.td,null,l.createElement(t.code,null,"emitEvent(payload, data)")),l.createElement(t.td,null,"Emits an event with the given type and data in the payload."),l.createElement(t.td,null,l.createElement(t.code,null,"Object"))),l.createElement(t.tr,null,l.createElement(t.td,null,l.createElement(t.code,null,"emitStateChange(state,previousState)")),l.createElement(t.td,null,"Emits a ",l.createElement(t.code,null,"stateChange")," with the given state and ",l.createElement(t.code,null,"previousState")," in the payload."),l.createElement(t.td,null,"none")),l.createElement(t.tr,null,l.createElement(t.td,null,l.createElement(t.code,null,"storeBeacon(beacon)")),l.createElement(t.td,null,l.createElement(t.code,null,"Beacon"),". Call this from the ",l.createElement(t.code,null,"module.connect()"),". Stores the beacon, so the module does not have to store it."),l.createElement(t.td,null,"none")),l.createElement(t.tr,null,l.createElement(t.td,null,"[Table 2: Custom beacon utility functions]"),l.createElement(t.td),l.createElement(t.td)))),"\n",l.createElement(s.ZP,null,l.createElement(t.pre,null,l.createElement(t.code,{className:"language-jsx"},"import { createNamespacedBeacon, ConnectedModule } from 'hds-react';\n\nconst createMyCustomModule = (): ConnectedModule => {\n  let state = 'none';\n  const customBeacon = createNamespacedBeacon('myModule');\n  const listener = (signal) => {\n    if (isErrorSignal) {\n      newState = 'error';\n      customBeacon.emitStateChange(newState, state);\n      state = newState;\n    }\n  };\n  return {\n    namespace: helperNamespace,\n    connect: (targetBeacon) => {\n      customBeacon.storeBeacon(targetBeacon);\n      customBeacon.addListener(createTriggerForAllSignalTypes(), listener);\n    },\n  };\n};\n"))),"\n",l.createElement(t.h3,{id:"emitting-signals",style:{position:"relative"}},"Emitting signals",l.createElement(t.a,{href:"#emitting-signals","aria-label":"emitting signals permalink",className:"header-anchor after"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span class="hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs" aria-hidden="true" style="vertical-align: middle"></span>'}}))),"\n",l.createElement(t.p,null,"The following example is for custom modules because components cannot emit signals."),"\n",l.createElement(s.ZP,null,l.createElement(t.pre,null,l.createElement(t.code,{className:"language-jsx"},"// Beacon is not imported, this example assumes it is in the scope\n\nconst error  = new OidcClientError('Failed', oidcClientError.SIGNIN_ERROR),\n\n// This is the same as\nbeacon.emit({\n  type: errorSignalType,\n  namespace: 'teamHDS',\n  payload: error,\n});\n\n// This\nbeacon.emit(createErrorSignal('teamHDS', error));\n\n// and this - if custom, namespaced beacon is created for 'teamHDS'\ncustomBeacon.emitError(error);\n\n"))),"\n",l.createElement(t.h4,{id:"listening-to-signals",style:{position:"relative"}},"Listening to signals",l.createElement(t.a,{href:"#listening-to-signals","aria-label":"listening to signals permalink",className:"header-anchor after"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span class="hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs" aria-hidden="true" style="vertical-align: middle"></span>'}}))),"\n",l.createElement(t.p,null,"A signal listener is a function that receives one argument: the signal. A listener can listen to all signals or just one type of signal with a certain namespace.\nListeners can be even more specific and listen to signals with certain payloads. In short, a listener can listen to any properties of the signal and is triggered when all properties match."),"\n",l.createElement(t.p,null,"The listener is called only if the emitted signal matches the given props."),"\n",l.createElement(t.p,null,"For example, if the trigger props (the first argument) passed to ",l.createElement(t.code,null,"beacon.addListener(trigger, listener)")," is ",l.createElement(t.code,null,"{ type:'error' }"),", the listener (second argument) is called when the emitted signal has a matching type. It does not matter what other props the signal has."),"\n",l.createElement(t.p,null,"If the trigger props are ",l.createElement(t.code,null,"{ namespace:'myModule', payload:{type:'click'} }"),", the emitted signal must have those properties with the same, exact values. Other properties are not checked."),"\n",l.createElement(t.p,null,"The trigger can also be a function. Internally all triggers are converted to functions."),"\n",l.createElement(s.ZP,null,l.createElement(t.pre,null,l.createElement(t.code,{className:"language-jsx"},"const listener = (signal) => {\n  // Do something with the signal.\n};\n// Listen to all error signals\nconst trigger = { type: 'error' };\nconst disposer = beacon.addListener(trigger, listener);\n// The listener can be removed by calling the returned disposer\ndisposer();\n"))))}t.default=function(e){return void 0===e&&(e={}),l.createElement(o,e,l.createElement(c,e))}},35972:function(e,t,n){n.r(t);var a=n(11151),l=n(67294),s=n(83428),r=n(12818),o=n(57674),c=n(89482),i=n(26127);function m(e){const t=Object.assign({h1:"h1",a:"a",span:"span",p:"p"},(0,a.ah)(),e.components);return i.Z||d("PageTabs",!1),i.Z.Tab||d("PageTabs.Tab",!0),i.Z.TabList||d("PageTabs.TabList",!0),i.Z.TabPanel||d("PageTabs.TabPanel",!0),l.createElement(l.Fragment,null,l.createElement(t.h1,{id:"login",style:{position:"relative"}},"Login",l.createElement(t.a,{href:"#login","aria-label":"login permalink",className:"header-anchor after"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span class="hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs" aria-hidden="true" style="vertical-align: middle"></span>'}}))),"\n",l.createElement("div",{className:"status-label-description"},l.createElement(s.S,{type:"error"},"Draft"),l.createElement(s.S,{variant:"rounded",type:"success",style:{marginLeft:"var(--spacing-xs)"}},"Accessible"),l.createElement(o.Z)),"\n",l.createElement(c.Z,null,"Login components include React components, context and hooks for handling user authorisation, api tokens and session polling."),"\n",l.createElement(r.N,{label:"A work in progress!",className:"siteNotification"},l.createElement(t.p,null,"The HDS Login system is a set of components the HDS team is currently making. This means\nthat this component is subject to change, and we don't recommend using it in production.")),"\n",l.createElement(i.Z,{pageContext:e.pageContext},l.createElement(i.Z.TabList,null,l.createElement(i.Z.Tab,{href:"/"},"Intro"),l.createElement(i.Z.Tab,{href:"/usage"},"Usage"),l.createElement(i.Z.Tab,{href:"/api"},"API"),l.createElement(i.Z.Tab,{href:"/accessibility"},"Accessibility"),l.createElement(i.Z.Tab,{href:"/customisation"},"Customisation")),l.createElement(i.Z.TabPanel,null,e.children)))}function d(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}t.default=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?l.createElement(t,e,l.createElement(m,e)):m(e)}},89482:function(e,t,n){var a=n(67294);t.Z=e=>{let{color:t="var(--color-black-90)",size:n="var(--fontsize-body-xl)",style:l={},children:s}=e;return a.createElement("p",{style:{fontSize:n,color:t,maxWidth:600,...l}},s)}},26127:function(e,t,n){var a=n(67294),l=n(14160),s=n(67461);const r="PageTabList",o="PageTabPanel",c="PageTab",i=e=>{var t;let{pageContext:n,children:i}=e;const m=n.frontmatter.slug,d=Array.isArray(i)?i:[i],u=d.find((e=>(0,a.isValidElement)(e)&&e.type.componentName===r)),h=d.find((e=>(0,a.isValidElement)(e)&&e.type.componentName===o)),p=null===(t=u.props)||void 0===t?void 0:t.children.filter((e=>e.type.componentName===c)),g=p.findIndex((e=>m.endsWith(e.props.href))),E=-1===g?0:g,b=0===E?m:(e=>"/"+e.trim().split("/").filter((e=>!!e)).slice(0,-1).join("/"))(m);return a.createElement(s.a,{initiallyActiveTab:E},a.createElement(s.a.TabList,{className:"page-tabs-list"},p.map((e=>a.createElement(s.a.Tab,{key:e.props.href,onClick:()=>(0,l.navigate)(""+("/"===e.props.href?b:b+e.props.href))},e.props.children)))),p.map(((e,t)=>a.createElement(s.a.TabPanel,{key:e.props.href},E===t?h.props.children:a.createElement("div",null)))))},m=e=>{let{children:t}=e;return a.createElement(s.a.TabList,null,t)};m.componentName=r;const d=e=>{let{href:t,slug:n,children:l}=e;return a.createElement(s.a.Tab,null,l)};d.componentName=c;const u=e=>{let{children:t}=e;return a.createElement(s.a.TabPanel,null,t)};u.componentName=o,i.TabList=m,i.Tab=d,i.TabPanel=u,t.Z=i},57674:function(e,t,n){var a=n(67294),l=n(45422);t.Z=()=>{const e={Draft:"The component is work in progress",Beta:"The component is being tested",Stable:"The component has been tested and defects have been fixed",Accessible:"The component has been reviewed for accessibility",Deprecated:"The component will be removed"};return a.createElement(l.T,{placement:"right-end",className:"status-label-tooltip",boxShadow:!0},a.createElement("ul",{className:"status-label-definitions"},Object.keys(e).map((t=>a.createElement("li",{key:t},a.createElement("span",{className:"status-name"},t),a.createElement("span",null,e[t]))))))}}}]);