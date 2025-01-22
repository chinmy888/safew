"use strict";(self.webpackChunkmy_webpack_project=self.webpackChunkmy_webpack_project||[]).push([[7944],{4675:(e,n,t)=>{t.d(n,{a3:()=>w,Db:()=>h,$G:()=>k});var s=t(959),a=(t(6322),t(9500));const o={};function r(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];"string"==typeof n[0]&&o[n[0]]||("string"==typeof n[0]&&(o[n[0]]=new Date),function(){if(a&&a.warn){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];"string"==typeof n[0]&&(n[0]=`react-i18next:: ${n[0]}`),a.warn(...n)}}(...n))}const i=(e,n)=>()=>{if(e.isInitialized)n();else{const t=()=>{setTimeout((()=>{e.off("initialized",t)}),0),n()};e.on("initialized",t)}};function c(e,n,t){e.loadNamespaces(n,i(e,t))}function u(e,n,t,s){"string"==typeof t&&(t=[t]),t.forEach((n=>{e.options.ns.indexOf(n)<0&&e.options.ns.push(n)})),e.loadLanguages(n,i(e,s))}const l=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,g={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},p=e=>g[e];let d,f={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:e=>e.replace(l,p)};const h={type:"3rdParty",init(e){!function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};f={...f,...e}}(e.options.react),function(e){d=e}(e)}},b=(0,s.createContext)();class m{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach((e=>{this.usedNamespaces[e]||(this.usedNamespaces[e]=!0)}))}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const y=(e,n)=>{const t=(0,s.useRef)();return(0,s.useEffect)((()=>{t.current=n?t.current:e}),[e,n]),t.current};function N(e,n,t,s){return e.getFixedT(n,t,s)}function k(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{i18n:t}=n,{i18n:a,defaultNS:o}=(0,s.useContext)(b)||{},i=t||a||d;if(i&&!i.reportNamespaces&&(i.reportNamespaces=new m),!i){r("You will need to pass in an i18next instance by using initReactI18next");const e=(e,n)=>"string"==typeof n?n:n&&"object"==typeof n&&"string"==typeof n.defaultValue?n.defaultValue:Array.isArray(e)?e[e.length-1]:e,n=[e,{},!1];return n.t=e,n.i18n={},n.ready=!1,n}i.options.react&&void 0!==i.options.react.wait&&r("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const l={...f,...i.options.react,...n},{useSuspense:g,keyPrefix:p}=l;let h=e||o||i.options&&i.options.defaultNS;h="string"==typeof h?[h]:h||["translation"],i.reportNamespaces.addUsedNamespaces&&i.reportNamespaces.addUsedNamespaces(h);const k=(i.isInitialized||i.initializedStoreOnce)&&h.every((e=>function(e,n){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return n.languages&&n.languages.length?void 0!==n.options.ignoreJSONStructure?n.hasLoadedNamespace(e,{lng:t.lng,precheck:(n,s)=>{if(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!s(n.isLanguageChangingTo,e))return!1}}):function(e,n){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const s=n.languages[0],a=!!n.options&&n.options.fallbackLng,o=n.languages[n.languages.length-1];if("cimode"===s.toLowerCase())return!0;const r=(e,t)=>{const s=n.services.backendConnector.state[`${e}|${t}`];return-1===s||2===s};return!(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!r(n.isLanguageChangingTo,e)||!n.hasResourceBundle(s,e)&&n.services.backendConnector.backend&&(!n.options.resources||n.options.partialBundledLanguages)&&(!r(s,e)||a&&!r(o,e)))}(e,n,t):(r("i18n.languages were undefined or empty",n.languages),!0)}(e,i,l))),w=function(e,n,t,a){return(0,s.useCallback)(N(e,n,t,a),[e,n,t,a])}(i,n.lng||null,"fallback"===l.nsMode?h:h[0],p),v=()=>w,C=()=>N(i,n.lng||null,"fallback"===l.nsMode?h:h[0],p),[S,x]=(0,s.useState)(v);let I=h.join();n.lng&&(I=`${n.lng}${I}`);const E=y(I),L=(0,s.useRef)(!0);(0,s.useEffect)((()=>{const{bindI18n:e,bindI18nStore:t}=l;function s(){L.current&&x(C)}return L.current=!0,k||g||(n.lng?u(i,n.lng,h,(()=>{L.current&&x(C)})):c(i,h,(()=>{L.current&&x(C)}))),k&&E&&E!==I&&L.current&&x(C),e&&i&&i.on(e,s),t&&i&&i.store.on(t,s),()=>{L.current=!1,e&&i&&e.split(" ").forEach((e=>i.off(e,s))),t&&i&&t.split(" ").forEach((e=>i.store.off(e,s)))}}),[i,I]),(0,s.useEffect)((()=>{L.current&&k&&x(v)}),[i,p,k]);const T=[S,i,k];if(T.t=S,T.i18n=i,T.ready=k,k)return T;if(!k&&!g)return T;throw new Promise((e=>{n.lng?u(i,n.lng,h,(()=>e())):c(i,h,(()=>e()))}))}function w(e){let{i18n:n,defaultNS:t,children:a}=e;const o=(0,s.useMemo)((()=>({i18n:n,defaultNS:t})),[n,t]);return(0,s.createElement)(b.Provider,{value:o},a)}}}]);