"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[8172,4404,1529],{99123:function(e,n,t){t.d(n,{S:function(){return c}});var a=t(80136),l=t(67294),s=(t(7568),t(7444)),r=t(34300),i={statusLabel:"StatusLabel-module_statusLabel__3R2J2 status-label_hds-status-label__1L8YI",statusLabelWithIcon:"StatusLabel-module_statusLabelWithIcon__5lKVk status-label_hds-status-label--with-icon__3bHf6",statusLabelIcon:"StatusLabel-module_statusLabelIcon__2SAou status-label_hds-status-label-icon__3K58a",info:"StatusLabel-module_info__3YrAe status-label_hds-status-label--info__J28-H",success:"StatusLabel-module_success__2BfdX status-label_hds-status-label--success__3jiST",alert:"StatusLabel-module_alert__2VR8r status-label_hds-status-label--alert__1ecsX",error:"StatusLabel-module_error__zNgn8 status-label_hds-status-label--error__2EYi4"};(0,s.s)(".status-label_hds-status-label__1L8YI{--status-label-background:var(--color-black-10);--status-label-color:var(--color-black-90);--status-label-height:32px;background-color:var(--status-label-background);border-radius:20px;color:var(--status-label-color);display:inline-block;font-size:var(--fontsize-body-s);line-height:var(--status-label-height);min-height:var(--status-label-height);padding:0 var(--spacing-2-xs);vertical-align:middle}.status-label_hds-status-label--with-icon__3bHf6{align-items:center;display:inline-flex;padding-left:var(--spacing-3-xs)}.status-label_hds-status-label-icon__3K58a{height:var(--spacing-m);margin-right:var(--spacing-3-xs);width:var(--spacing-m)}.status-label_hds-status-label--info__J28-H{--status-label-background:var(--color-info);--status-label-color:var(--color-white)}.status-label_hds-status-label--success__3jiST{--status-label-background:var(--color-success);--status-label-color:var(--color-white)}.status-label_hds-status-label--alert__1ecsX{--status-label-background:var(--color-alert)}.status-label_hds-status-label--error__2EYi4{--status-label-background:var(--color-error);--status-label-color:var(--color-white)}");const o=e=>{let{icon:n}=e;return l.createElement("span",{className:i.statusLabelIcon,"aria-hidden":"true"},n)},c=e=>{var{children:n,className:t,dataTestId:s,type:c="neutral",iconLeft:d}=e,u=(0,a._)(e,["children","className","dataTestId","type","iconLeft"]);return l.createElement("span",Object.assign({className:(0,r.c)(i.statusLabel,i[c],d&&i.statusLabelWithIcon,t),"data-testid":s},u),d&&l.createElement(o,{icon:d}),n)}},95001:function(e,n,t){t.r(n),t.d(n,{ApiPageAnchorLink:function(){return h},UsagePageAnchorLink:function(){return u}});var a=t(11151),l=t(67294),s=t(50246),r=t(35972),i=t(1076),o=t(80699),c=t(18245);const d=e=>{let{children:n,pageContext:t}=e;return l.createElement(r.default,{pageContext:t},n)},u=e=>{let{anchor:n,children:t}=e;return l.createElement(c.Z,{path:"/components/login/usage",anchor:n},t)},h=e=>{let{anchor:n,children:t}=e;return l.createElement(c.Z,{path:"/components/login/api",anchor:n},t)};function m(e){const n=Object.assign({h2:"h2",a:"a",span:"span",p:"p",h3:"h3",ul:"ul",li:"li",pre:"pre",code:"code",h4:"h4"},(0,a.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(n.h2,{id:"introduction",style:{position:"relative"}},"Introduction",l.createElement(n.a,{href:"#introduction","aria-label":"introduction permalink",className:"header-anchor after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span class="hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs" aria-hidden="true" style="vertical-align: middle"></span>'}}))),"\n",l.createElement(n.p,null,"HDS Login components include React context, components and hooks for handling user authorisation, API tokens and session polling. React is not a requirement, but currently, no plain JavaScript UI components exist."),"\n",l.createElement(n.p,null,"Implementation requires an OIDC provider, which is a server for user authorization. The City of Helsinki uses ",l.createElement(o.Z,{href:"https://github.com/City-of-Helsinki/tunnistamo"},"Tunnistamo"),", but HDS login components can be used with any compatible OIDC provider. Read more about ",l.createElement(o.Z,{href:"https://auth0.com/intro-to-iam/what-is-openid-connect-oidc"},"OpenID Connect (OIDC)"),"."),"\n",l.createElement(n.p,null,"In the OIDC login process, the browser window is redirected to the OIDC provider. Authentication is fully handled by the server. That is why HDS does not provide login or registration forms."),"\n",l.createElement(n.p,null,"When the user has been authenticated, the OIDC server redirects back to the service. HDS provides components to handle the authentication process initiation and responses."),"\n",l.createElement(n.h3,{id:"requirements",style:{position:"relative"}},"Requirements",l.createElement(n.a,{href:"#requirements","aria-label":"requirements permalink",className:"header-anchor after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span class="hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs" aria-hidden="true" style="vertical-align: middle"></span>'}}))),"\n",l.createElement(n.p,null,"Your service must be registered with an OIDC provider, like Tunnistamo."),"\n",l.createElement(n.p,null,"To use the OIDC provider with login components, you need"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"Client id."),"\n",l.createElement(n.li,null,"Authority."),"\n",l.createElement(n.li,null,"URL of the OIDC provider."),"\n"),"\n",l.createElement(n.h3,{id:"important",style:{position:"relative"}},"Important",l.createElement(n.a,{href:"#important","aria-label":"important permalink",className:"header-anchor after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span class="hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs" aria-hidden="true" style="vertical-align: middle"></span>'}}))),"\n",l.createElement(n.p,null,"The HDS ",l.createElement(u,null,"Oidc client")," stores data in session storage for security reasons. Session storage is not shared across browser windows or tabs, so the user must log in separately for each window."),"\n",l.createElement(n.p,null,"HDS Login components cannot support SSR at the moment because of the session storage requirement."),"\n",l.createElement(n.p,null,"Silent session renewal requires a ",l.createElement(u,{anchor:"silent-renewal"},"dedicated HTML file"),' that redirects to the OIDC provider "silently" in an iframe.'),"\n",l.createElement(n.h3,{id:"consents-for-storing-data",style:{position:"relative"}},"Consents for storing data",l.createElement(n.a,{href:"#consents-for-storing-data","aria-label":"consents for storing data permalink",className:"header-anchor after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span class="hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs" aria-hidden="true" style="vertical-align: middle"></span>'}}))),"\n",l.createElement(n.p,null,"The data of the authenticated user is stored in the session storage. Users must give consent to storing data in the session storage, just like cookie consents.\nYou can use the ready-made consents in the ",l.createElement(i.Z,{href:"/patterns/cookies/common-helsinki-cookies/#hds-login-component"},"common Helsinki cookies"),"."),"\n",l.createElement(n.h3,{id:"example-usage",style:{position:"relative"}},"Example Usage",l.createElement(n.a,{href:"#example-usage","aria-label":"example usage permalink",className:"header-anchor after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span class="hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs" aria-hidden="true" style="vertical-align: middle"></span>'}}))),"\n",l.createElement(s.ZP,null,l.createElement(n.pre,null,l.createElement(n.code,{className:"language-jsx"},'// Actual properties are omitted from this example to keep it simple\nconst providerProperties = {...}\n\nconst SayHelloIfUserExists = () => {\n  const user = useAuthenticatedUser();\n  if ( user ) {\n    return <p>Hello, { user.name }!</p>\n  } else {\n    return (\n      <>\n        <p>You are not logged in.</p>\n        <LoginButton errorText="Login failed. Try again!">Log in</LoginButton>\n      </>\n    )\n  }\n}\n\n<LoginProvider {...providerProperties}>\n  <SayHelloIfUserExists />\n</LoginProvider>\n\n'))),"\n",l.createElement(n.h3,{id:"components",style:{position:"relative"}},"Components",l.createElement(n.a,{href:"#components","aria-label":"components permalink",className:"header-anchor after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span class="hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs" aria-hidden="true" style="vertical-align: middle"></span>'}}))),"\n",l.createElement(n.p,null,"HDS Login components include"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"A React context that exposes user data and other modules to React hooks and components."),"\n",l.createElement(n.li,null,"Login buttons with error handling."),"\n",l.createElement(n.li,null,"A callback handler for parsing the authentication response."),"\n",l.createElement(n.li,null,"Wrappers that conditionally render their children depending on authentication status."),"\n"),"\n",l.createElement(n.p,null,"There is no component for logout. It is just a redirection link and any button can be used for it. No error handling is required."),"\n",l.createElement(n.p,null,"Detailed documentation can be found in the ",l.createElement(u,{anchor:"components"},"components section")," of the ",l.createElement(u,{anchor:"usage"},"Usage page"),"."),"\n",l.createElement(n.h3,{id:"hooks",style:{position:"relative"}},"Hooks",l.createElement(n.a,{href:"#hooks","aria-label":"hooks permalink",className:"header-anchor after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span class="hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs" aria-hidden="true" style="vertical-align: middle"></span>'}}))),"\n",l.createElement(n.p,null,"HDS Login hooks enable to"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"Check login status."),"\n",l.createElement(n.li,null,"Get user data."),"\n",l.createElement(n.li,null,"Add listeners."),"\n",l.createElement(n.li,null,"Login and logout."),"\n",l.createElement(n.li,null,"Get API tokens."),"\n",l.createElement(n.li,null,"Get modules."),"\n"),"\n",l.createElement(n.p,null,"Detailed documentation is in the ",l.createElement(u,{anchor:"oidc-client-hooks"},"hooks section")," of the ",l.createElement(u,{anchor:"usage"},"Usage page"),"."),"\n",l.createElement(n.h3,{id:"modules",style:{position:"relative"}},"Modules",l.createElement(n.a,{href:"#modules","aria-label":"modules permalink",className:"header-anchor after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span class="hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs" aria-hidden="true" style="vertical-align: middle"></span>'}}))),"\n",l.createElement(n.p,null,"There are three modules to handle the user's needs:"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(u,null,"Oidc client")," for user data."),"\n",l.createElement(n.li,null,l.createElement(u,null,"Api tokens client")," for acquiring backend tokens."),"\n",l.createElement(n.li,null,l.createElement(u,null,"Session poller")," for checking if the user's session is still valid at the Oidc\nprovider."),"\n"),"\n",l.createElement(n.p,null,"If a module is not needed, it can be dropped with settings. ",l.createElement(i.Z,{href:"/components/login/customisation"},"Custom modules")," can also be added. All modules can be used without React and without each other. But a valid user object is required to get API tokens and poll the session."),"\n",l.createElement(n.p,null,"Modules emit ",l.createElement(u,null,"signals")," to communicate with other modules. For example, the ",l.createElement(u,{anchor:"api-tokens-client"},"Api tokens client module")," refreshes its tokens when user tokens in the ",l.createElement(u,{anchor:"oidc-client"},"Oidc client module")," have been refreshed."),"\n",l.createElement(n.p,null,"Detailed information is in the ",l.createElement(u,{anchor:"modules"},"modules section")," of the ",l.createElement(u,{anchor:"usage"},"Usage page"),"."),"\n",l.createElement(n.h4,{id:"oidc-client-module",style:{position:"relative"}},"Oidc client module",l.createElement(n.a,{href:"#oidc-client-module","aria-label":"oidc client module permalink",className:"header-anchor after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span class="hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs" aria-hidden="true" style="vertical-align: middle"></span>'}}))),"\n",l.createElement(n.p,null,"This module handles the login process and parses tokens from the login response. It also renews tokens and handles token storage and removal. Logout is also handled by this module."),"\n",l.createElement(n.h4,{id:"api-tokens-client-module",style:{position:"relative"}},"Api tokens client module",l.createElement(n.a,{href:"#api-tokens-client-module","aria-label":"api tokens client module permalink",className:"header-anchor after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span class="hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs" aria-hidden="true" style="vertical-align: middle"></span>'}}))),"\n",l.createElement(n.p,null,"This module exchanges the user's tokens for API tokens. API tokens are used for querying data from backend servers. The module renews the tokens if the user's tokens change."),"\n",l.createElement(n.h4,{id:"session-poller-module",style:{position:"relative"}},"Session poller module",l.createElement(n.a,{href:"#session-poller-module","aria-label":"session poller module permalink",className:"header-anchor after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span class="hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs" aria-hidden="true" style="vertical-align: middle"></span>'}}))),"\n",l.createElement(n.p,null,"This module polls the user's session from the Oidc provider and signals an error if polling returns an unauthorized response. If you have logged in with the same user in multiple browser windows, this module detects when the user is logged out in any browser window."),"\n",l.createElement(n.h4,{id:"custom-modules",style:{position:"relative"}},"Custom modules",l.createElement(n.a,{href:"#custom-modules","aria-label":"custom modules permalink",className:"header-anchor after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span class="hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs" aria-hidden="true" style="vertical-align: middle"></span>'}}))),"\n",l.createElement(n.p,null,"Other modules can be added. Detailed information is in the ",l.createElement(i.Z,{href:"/components/login/customisation"},"custom modules section"),"."),"\n",l.createElement(n.h3,{id:"signals",style:{position:"relative"}},"Signals",l.createElement(n.a,{href:"#signals","aria-label":"signals permalink",className:"header-anchor after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span class="hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs" aria-hidden="true" style="vertical-align: middle"></span>'}}))),"\n",l.createElement(n.p,null,"Modules communicate with signals. A module emits signals and listener functions are triggered by them. Listeners can be added by modules, components or plain Javascript. Components can listen to signals with hooks."),"\n",l.createElement(n.p,null,"The signal emitter is called a ",l.createElement(h,null,"Beacon"),". Usually, only error signals should be monitored. Data updates are handled automatically."),"\n",l.createElement(n.p,null,"Detailed information is in the ",l.createElement(u,{anchor:"signals"},"signals section")," of the ",l.createElement(u,{anchor:"usage"},"Usage page"),"."),"\n",l.createElement(n.h3,{id:"common-settings-for-localhost",style:{position:"relative"}},"Common settings for localhost",l.createElement(n.a,{href:"#common-settings-for-localhost","aria-label":"common settings for localhost permalink",className:"header-anchor after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span class="hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs" aria-hidden="true" style="vertical-align: middle"></span>'}}))),"\n",l.createElement(n.p,null,"Every service must have its own ",l.createElement(n.code,null,"client_id")," and ",l.createElement(n.code,null,"scope"),", but these settings can be used for testing.\nThey only work in ",l.createElement(n.code,null,"http://localhost:3000"),". Make sure you have ",l.createElement(n.code,null,"redirect_uri"),", ",l.createElement(n.code,null,"silent_redirect_uri")," and ",l.createElement(n.code,null,"post_logout_redirect_uri")," registered at the OIDC server."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-js"},"const loginProviderProps: LoginProviderProps = {\n  userManagerSettings: {\n    authority: 'https://tunnistamo.dev.hel.ninja/',\n    client_id: 'exampleapp-ui-dev',\n    scope: 'openid profile email https://api.hel.fi/auth/helsinkiprofiledev https://api.hel.fi/auth/exampleappdev',\n    redirect_uri: `YOUR_REGISTERED_REDIRECT_URL`,\n    silent_redirect_uri: `URL_TO_YOUR_REGISTERED_LOCAL_SILENT_RENEW.HTML`,\n    post_logout_redirect_uri: `YOUR_REGISTERED_LOGOUT_URL`,\n  },\n  apiTokensClientSettings: { url: 'https://tunnistamo.dev.hel.ninja/api-tokens/' },\n  sessionPollerSettings: { pollIntervalInMs: 10000 },\n};\n")),"\n",l.createElement(n.p,null,"If you are using Keycloak, then use these settings:"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-js"},"const loginProviderProps: LoginProviderProps = {\n  userManagerSettings: {\n    authority: 'https://tunnistus.dev.hel.ninja/auth/realms/helsinki-tunnistus',\n    client_id: 'exampleapp-ui-dev',\n    scope: 'openid profile',\n    redirect_uri: `YOUR_REGISTERED_REDIRECT_URL`,\n    silent_redirect_uri: `URL_TO_YOUR_REGISTERED_LOCAL_SILENT_RENEW.HTML`,\n    post_logout_redirect_uri: `YOUR_REGISTERED_LOGOUT_URL`,\n  },\n  apiTokensClientSettings: {\n    url: 'https://tunnistus.dev.hel.ninja/auth/realms/helsinki-tunnistus/protocol/openid-connect/token',\n    queryProps: {\n      grantType: 'urn:ietf:params:oauth:grant-type:uma-ticket',\n      permission: '#access',\n    },\n    audiences: ['exampleapp-api-dev', 'profile-api-dev'],\n  },\n  sessionPollerSettings: { pollIntervalInMs: 10000 },\n};\n")))}n.default=function(e){return void 0===e&&(e={}),l.createElement(d,e,l.createElement(m,e))}},35972:function(e,n,t){t.r(n);var a=t(11151),l=t(67294),s=t(57674),r=t(89482),i=t(26127),o=(t(77884),t(55725));function c(e){const n=Object.assign({h1:"h1",a:"a",span:"span"},(0,a.ah)(),e.components);return i.Z||d("PageTabs",!1),i.Z.Tab||d("PageTabs.Tab",!0),i.Z.TabList||d("PageTabs.TabList",!0),i.Z.TabPanel||d("PageTabs.TabPanel",!0),l.createElement(l.Fragment,null,l.createElement(n.h1,{id:"login",style:{position:"relative"}},"Login",l.createElement(n.a,{href:"#login","aria-label":"login permalink",className:"header-anchor after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span class="hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs" aria-hidden="true" style="vertical-align: middle"></span>'}}))),"\n",l.createElement("div",{className:"status-label-description"},l.createElement(o.Z,{type:"error"},"Draft"),l.createElement(o.Z,{type:"success",style:{marginLeft:"var(--spacing-xs)"}},"Accessible"),l.createElement(s.Z)),"\n",l.createElement(r.Z,null,"Login components include React components, context and hooks for handling user authorisation, api tokens and session polling."),"\n",l.createElement(i.Z,{pageContext:e.pageContext},l.createElement(i.Z.TabList,null,l.createElement(i.Z.Tab,{href:"/"},"Intro"),l.createElement(i.Z.Tab,{href:"/usage"},"Usage"),l.createElement(i.Z.Tab,{href:"/api"},"API"),l.createElement(i.Z.Tab,{href:"/accessibility"},"Accessibility"),l.createElement(i.Z.Tab,{href:"/customisation"},"Customisation")),l.createElement(i.Z.TabPanel,null,e.children)))}function d(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}n.default=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?l.createElement(n,e,l.createElement(c,e)):c(e)}},89482:function(e,n,t){var a=t(67294),l=t(42972);n.Z=e=>{let{color:n="var(--color-black-90)",size:t="var(--fontsize-body-xl)",style:s={},children:r}=e;return a.createElement("p",{style:{fontSize:t,color:n,maxWidth:600,...s}},(0,l.g)(r))}},77884:function(e,n,t){var a=t(67294),l=t(98376),s=t(42972);n.Z=e=>{let{children:n,...t}=e;return a.createElement(l.N,t,(0,s.g)(n))}},26127:function(e,n,t){var a=t(67294),l=t(14160),s=t(71386),r=t(42972);const i="PageTabList",o="PageTabPanel",c="PageTab",d=e=>{var n;let{pageContext:t,children:d}=e;const u=t.frontmatter.slug,h=Array.isArray(d)?d:[d],m=h.find((e=>(0,a.isValidElement)(e)&&e.type.componentName===i)),p=h.find((e=>(0,a.isValidElement)(e)&&e.type.componentName===o)),g=null===(n=m.props)||void 0===n?void 0:n.children.filter((e=>e.type.componentName===c)),E=g.findIndex((e=>u.endsWith(e.props.href))),b=-1===E?0:E,f=0===b?u:(e=>`/${e.trim().split("/").filter((e=>!!e)).slice(0,-1).join("/")}`)(u);return a.createElement(s.a,{initiallyActiveTab:b},a.createElement(s.a.TabList,{className:"page-tabs-list"},g.map((e=>a.createElement(s.a.Tab,{key:e.props.href,onClick:()=>(0,l.navigate)(`${"/"===e.props.href?f:f+e.props.href}`)},(0,r.g)(e.props.children))))),g.map(((e,n)=>a.createElement(s.a.TabPanel,{key:e.props.href},b===n?p.props.children:a.createElement("div",null)))))},u=e=>{let{children:n}=e;return a.createElement(s.a.TabList,null,n)};u.componentName=i;const h=e=>{let{href:n,slug:t,children:l}=e;return a.createElement(s.a.Tab,null," ",l)};h.componentName=c;const m=e=>{let{children:n}=e;return a.createElement(s.a.TabPanel,null,n)};m.componentName=o,d.TabList=u,d.Tab=h,d.TabPanel=m,n.Z=d},55725:function(e,n,t){var a=t(67294),l=t(99123),s=t(42972);n.Z=e=>{let{children:n,...t}=e;return a.createElement(l.S,t,(0,s.g)(n))}},57674:function(e,n,t){var a=t(67294),l=t(48868);n.Z=()=>{const e={Draft:"The component is work in progress",Beta:"The component is being tested",Stable:"The component has been tested and defects have been fixed",Accessible:"The component has been reviewed for accessibility",Deprecated:"The component will be removed"};return a.createElement(l.T,{placement:"right-end",className:"status-label-tooltip",boxShadow:!0},a.createElement("ul",{className:"status-label-definitions"},Object.keys(e).map((n=>a.createElement("li",{key:n},a.createElement("span",{className:"status-name"},n),a.createElement("span",null,e[n]))))))}}}]);