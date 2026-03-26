(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();const ts=globalThis,Wi=ts.ShadowRoot&&(ts.ShadyCSS===void 0||ts.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,qi=Symbol(),Xa=new WeakMap;let Ir=class{constructor(t,n,s){if(this._$cssResult$=!0,s!==qi)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(Wi&&t===void 0){const s=n!==void 0&&n.length===1;s&&(t=Xa.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Xa.set(n,t))}return t}toString(){return this.cssText}};const Wc=e=>new Ir(typeof e=="string"?e:e+"",void 0,qi),qc=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((s,i,a)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[a+1],e[0]);return new Ir(n,e,qi)},Gc=(e,t)=>{if(Wi)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const s=document.createElement("style"),i=ts.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=n.cssText,e.appendChild(s)}},eo=Wi?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const s of t.cssRules)n+=s.cssText;return Wc(n)})(e):e;const{is:Vc,defineProperty:Qc,getOwnPropertyDescriptor:Yc,getOwnPropertyNames:Zc,getOwnPropertySymbols:Jc,getPrototypeOf:Xc}=Object,xs=globalThis,to=xs.trustedTypes,ed=to?to.emptyScript:"",td=xs.reactiveElementPolyfillSupport,$n=(e,t)=>e,ls={toAttribute(e,t){switch(t){case Boolean:e=e?ed:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},Gi=(e,t)=>!Vc(e,t),no={attribute:!0,type:String,converter:ls,reflect:!1,useDefault:!1,hasChanged:Gi};Symbol.metadata??=Symbol("metadata"),xs.litPropertyMetadata??=new WeakMap;let Zt=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=no){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(t,n),!n.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,n);i!==void 0&&Qc(this.prototype,t,i)}}static getPropertyDescriptor(t,n,s){const{get:i,set:a}=Yc(this.prototype,t)??{get(){return this[n]},set(o){this[n]=o}};return{get:i,set(o){const r=i?.call(this);a?.call(this,o),this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??no}static _$Ei(){if(this.hasOwnProperty($n("elementProperties")))return;const t=Xc(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty($n("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($n("properties"))){const n=this.properties,s=[...Zc(n),...Jc(n)];for(const i of s)this.createProperty(i,n[i])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[s,i]of n)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[n,s]of this.elementProperties){const i=this._$Eu(n,s);i!==void 0&&this._$Eh.set(i,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)n.unshift(eo(i))}else t!==void 0&&n.push(eo(t));return n}static _$Eu(t,n){const s=n.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const s of n.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Gc(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,n,s){this._$AK(t,s)}_$ET(t,n){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const a=(s.converter?.toAttribute!==void 0?s.converter:ls).toAttribute(n,s.type);this._$Em=t,a==null?this.removeAttribute(i):this.setAttribute(i,a),this._$Em=null}}_$AK(t,n){const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const a=s.getPropertyOptions(i),o=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:ls;this._$Em=i;const r=o.fromAttribute(n,a.type);this[i]=r??this._$Ej?.get(i)??r,this._$Em=null}}requestUpdate(t,n,s,i=!1,a){if(t!==void 0){const o=this.constructor;if(i===!1&&(a=this[t]),s??=o.getPropertyOptions(t),!((s.hasChanged??Gi)(a,n)||s.useDefault&&s.reflect&&a===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,s))))return;this.C(t,n,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,n,{useDefault:s,reflect:i,wrapped:a},o){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??n??this[t]),a!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(n=void 0),this._$AL.set(t,n)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,a]of this._$Ep)this[i]=a;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[i,a]of s){const{wrapped:o}=a,r=this[i];o!==!0||this._$AL.has(i)||r===void 0||this.C(i,void 0,a,r)}}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(n)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(n)}willUpdate(t){}_$AE(t){this._$EO?.forEach(n=>n.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(n=>this._$ET(n,this[n])),this._$EM()}updated(t){}firstUpdated(t){}};Zt.elementStyles=[],Zt.shadowRootOptions={mode:"open"},Zt[$n("elementProperties")]=new Map,Zt[$n("finalized")]=new Map,td?.({ReactiveElement:Zt}),(xs.reactiveElementVersions??=[]).push("2.1.2");const Vi=globalThis,so=e=>e,cs=Vi.trustedTypes,io=cs?cs.createPolicy("lit-html",{createHTML:e=>e}):void 0,Pr="$lit$",ut=`lit$${Math.random().toFixed(9).slice(2)}$`,Dr="?"+ut,nd=`<${Dr}>`,Ft=document,Cn=()=>Ft.createComment(""),Tn=e=>e===null||typeof e!="object"&&typeof e!="function",Qi=Array.isArray,sd=e=>Qi(e)||typeof e?.[Symbol.iterator]=="function",Ks=`[ 	
\f\r]`,dn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ao=/-->/g,oo=/>/g,wt=RegExp(`>|${Ks}(?:([^\\s"'>=/]+)(${Ks}*=${Ks}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ro=/'/g,lo=/"/g,Fr=/^(?:script|style|textarea|title)$/i,Nr=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),c=Nr(1),kt=Nr(2),ht=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),co=new WeakMap,It=Ft.createTreeWalker(Ft,129);function Or(e,t){if(!Qi(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return io!==void 0?io.createHTML(t):t}const id=(e,t)=>{const n=e.length-1,s=[];let i,a=t===2?"<svg>":t===3?"<math>":"",o=dn;for(let r=0;r<n;r++){const l=e[r];let d,p,g=-1,h=0;for(;h<l.length&&(o.lastIndex=h,p=o.exec(l),p!==null);)h=o.lastIndex,o===dn?p[1]==="!--"?o=ao:p[1]!==void 0?o=oo:p[2]!==void 0?(Fr.test(p[2])&&(i=RegExp("</"+p[2],"g")),o=wt):p[3]!==void 0&&(o=wt):o===wt?p[0]===">"?(o=i??dn,g=-1):p[1]===void 0?g=-2:(g=o.lastIndex-p[2].length,d=p[1],o=p[3]===void 0?wt:p[3]==='"'?lo:ro):o===lo||o===ro?o=wt:o===ao||o===oo?o=dn:(o=wt,i=void 0);const u=o===wt&&e[r+1].startsWith("/>")?" ":"";a+=o===dn?l+nd:g>=0?(s.push(d),l.slice(0,g)+Pr+l.slice(g)+ut+u):l+ut+(g===-2?r:u)}return[Or(e,a+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class _n{constructor({strings:t,_$litType$:n},s){let i;this.parts=[];let a=0,o=0;const r=t.length-1,l=this.parts,[d,p]=id(t,n);if(this.el=_n.createElement(d,s),It.currentNode=this.el.content,n===2||n===3){const g=this.el.content.firstChild;g.replaceWith(...g.childNodes)}for(;(i=It.nextNode())!==null&&l.length<r;){if(i.nodeType===1){if(i.hasAttributes())for(const g of i.getAttributeNames())if(g.endsWith(Pr)){const h=p[o++],u=i.getAttribute(g).split(ut),f=/([.?@])?(.*)/.exec(h);l.push({type:1,index:a,name:f[2],strings:u,ctor:f[1]==="."?od:f[1]==="?"?rd:f[1]==="@"?ld:ws}),i.removeAttribute(g)}else g.startsWith(ut)&&(l.push({type:6,index:a}),i.removeAttribute(g));if(Fr.test(i.tagName)){const g=i.textContent.split(ut),h=g.length-1;if(h>0){i.textContent=cs?cs.emptyScript:"";for(let u=0;u<h;u++)i.append(g[u],Cn()),It.nextNode(),l.push({type:2,index:++a});i.append(g[h],Cn())}}}else if(i.nodeType===8)if(i.data===Dr)l.push({type:2,index:a});else{let g=-1;for(;(g=i.data.indexOf(ut,g+1))!==-1;)l.push({type:7,index:a}),g+=ut.length-1}a++}}static createElement(t,n){const s=Ft.createElement("template");return s.innerHTML=t,s}}function tn(e,t,n=e,s){if(t===ht)return t;let i=s!==void 0?n._$Co?.[s]:n._$Cl;const a=Tn(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,s)),s!==void 0?(n._$Co??=[])[s]=i:n._$Cl=i),i!==void 0&&(t=tn(e,i._$AS(e,t.values),i,s)),t}class ad{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:s}=this._$AD,i=(t?.creationScope??Ft).importNode(n,!0);It.currentNode=i;let a=It.nextNode(),o=0,r=0,l=s[0];for(;l!==void 0;){if(o===l.index){let d;l.type===2?d=new $s(a,a.nextSibling,this,t):l.type===1?d=new l.ctor(a,l.name,l.strings,this,t):l.type===6&&(d=new cd(a,this,t)),this._$AV.push(d),l=s[++r]}o!==l?.index&&(a=It.nextNode(),o++)}return It.currentNode=Ft,i}p(t){let n=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,n),n+=s.strings.length-2):s._$AI(t[n])),n++}}let $s=class Br{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,n,s,i){this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&t?.nodeType===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=tn(this,t,n),Tn(t)?t===m||t==null||t===""?(this._$AH!==m&&this._$AR(),this._$AH=m):t!==this._$AH&&t!==ht&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):sd(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==m&&Tn(this._$AH)?this._$AA.nextSibling.data=t:this.T(Ft.createTextNode(t)),this._$AH=t}$(t){const{values:n,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=_n.createElement(Or(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(n);else{const a=new ad(i,this),o=a.u(this.options);a.p(n),this.T(o),this._$AH=a}}_$AC(t){let n=co.get(t.strings);return n===void 0&&co.set(t.strings,n=new _n(t)),n}k(t){Qi(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let s,i=0;for(const a of t)i===n.length?n.push(s=new Br(this.O(Cn()),this.O(Cn()),this,this.options)):s=n[i],s._$AI(a),i++;i<n.length&&(this._$AR(s&&s._$AB.nextSibling,i),n.length=i)}_$AR(t=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);t!==this._$AB;){const s=so(t).nextSibling;so(t).remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},ws=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,s,i,a){this.type=1,this._$AH=m,this._$AN=void 0,this.element=t,this.name=n,this._$AM=i,this.options=a,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=m}_$AI(t,n=this,s,i){const a=this.strings;let o=!1;if(a===void 0)t=tn(this,t,n,0),o=!Tn(t)||t!==this._$AH&&t!==ht,o&&(this._$AH=t);else{const r=t;let l,d;for(t=a[0],l=0;l<a.length-1;l++)d=tn(this,r[s+l],n,l),d===ht&&(d=this._$AH[l]),o||=!Tn(d)||d!==this._$AH[l],d===m?t=m:t!==m&&(t+=(d??"")+a[l+1]),this._$AH[l]=d}o&&!i&&this.j(t)}j(t){t===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},od=class extends ws{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===m?void 0:t}},rd=class extends ws{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==m)}},ld=class extends ws{constructor(t,n,s,i,a){super(t,n,s,i,a),this.type=5}_$AI(t,n=this){if((t=tn(this,t,n,0)??m)===ht)return;const s=this._$AH,i=t===m&&s!==m||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,a=t!==m&&(s===m||i);i&&this.element.removeEventListener(this.name,this,s),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},cd=class{constructor(t,n,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){tn(this,t)}};const dd={I:$s},ud=Vi.litHtmlPolyfillSupport;ud?.(_n,$s),(Vi.litHtmlVersions??=[]).push("3.3.2");const gd=(e,t,n)=>{const s=n?.renderBefore??t;let i=s._$litPart$;if(i===void 0){const a=n?.renderBefore??null;s._$litPart$=i=new $s(t.insertBefore(Cn(),a),a,void 0,n??{})}return i._$AI(e),i};const Yi=globalThis;let en=class extends Zt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=gd(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ht}};en._$litElement$=!0,en.finalized=!0,Yi.litElementHydrateSupport?.({LitElement:en});const pd=Yi.litElementPolyfillSupport;pd?.({LitElement:en});(Yi.litElementVersions??=[]).push("4.2.2");const Ur=e=>(t,n)=>{n!==void 0?n.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};const fd={attribute:!0,type:String,converter:ls,reflect:!1,hasChanged:Gi},hd=(e=fd,t,n)=>{const{kind:s,metadata:i}=n;let a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),s==="setter"&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),s==="accessor"){const{name:o}=n;return{set(r){const l=t.get.call(this);t.set.call(this,r),this.requestUpdate(o,l,e,!0,r)},init(r){return r!==void 0&&this.C(o,void 0,e,r),r}}}if(s==="setter"){const{name:o}=n;return function(r){const l=this[o];t.call(this,r),this.requestUpdate(o,l,e,!0,r)}}throw Error("Unsupported decorator location: "+s)};function ks(e){return(t,n)=>typeof n=="object"?hd(e,t,n):((s,i,a)=>{const o=i.hasOwnProperty(a);return i.constructor.createProperty(a,s),o?Object.getOwnPropertyDescriptor(i,a):void 0})(e,t,n)}function $(e){return ks({...e,state:!0,attribute:!1})}const md="modulepreload",vd=function(e,t){return new URL(e,t).href},uo={},Ws=function(t,n,s){let i=Promise.resolve();if(n&&n.length>0){let d=function(p){return Promise.all(p.map(g=>Promise.resolve(g).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};const o=document.getElementsByTagName("link"),r=document.querySelector("meta[property=csp-nonce]"),l=r?.nonce||r?.getAttribute("nonce");i=d(n.map(p=>{if(p=vd(p,s),p in uo)return;uo[p]=!0;const g=p.endsWith(".css"),h=g?'[rel="stylesheet"]':"";if(s)for(let f=o.length-1;f>=0;f--){const v=o[f];if(v.href===p&&(!g||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${p}"]${h}`))return;const u=document.createElement("link");if(u.rel=g?"stylesheet":md,g||(u.as="script"),u.crossOrigin="",u.href=p,l&&u.setAttribute("nonce",l),document.head.appendChild(u),g)return new Promise((f,v)=>{u.addEventListener("load",f),u.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${p}`)))})}))}function a(o){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=o,window.dispatchEvent(r),!r.defaultPrevented)throw o}return i.then(o=>{for(const r of o||[])r.status==="rejected"&&a(r.reason);return t().catch(a)})},bd={common:{health:"Health",ok:"OK",offline:"Offline",connect:"Connect",refresh:"Refresh",enabled:"Enabled",disabled:"Disabled",na:"n/a",docs:"Docs",resources:"Resources"},nav:{chat:"Chat",control:"Control",agent:"Agent",settings:"Settings",expand:"Expand sidebar",collapse:"Collapse sidebar"},tabs:{agents:"Agents",overview:"Overview",channels:"Channels",instances:"Instances",sessions:"Sessions",usage:"Usage",cron:"Cron Jobs",skills:"Skills",nodes:"Nodes",chat:"Chat",config:"Config",debug:"Debug",logs:"Logs"},subtitles:{agents:"Manage agent workspaces, tools, and identities.",overview:"Gateway status, entry points, and a fast health read.",channels:"Manage channels and settings.",instances:"Presence beacons from connected clients and nodes.",sessions:"Inspect active sessions and adjust per-session defaults.",usage:"Monitor API usage and costs.",cron:"Schedule wakeups and recurring agent runs.",skills:"Manage skill availability and API key injection.",nodes:"Paired devices, capabilities, and command exposure.",chat:"Direct gateway chat session for quick interventions.",config:"Edit ~/.openclaw/openclaw.json safely.",debug:"Gateway snapshots, events, and manual RPC calls.",logs:"Live tail of the gateway file logs."},overview:{access:{title:"Gateway Access",subtitle:"Where the dashboard connects and how it authenticates.",wsUrl:"WebSocket URL",token:"Gateway Token",password:"Password (not stored)",sessionKey:"Default Session Key",language:"Language",connectHint:"Click Connect to apply connection changes.",trustedProxy:"Authenticated via trusted proxy."},snapshot:{title:"Snapshot",subtitle:"Latest gateway handshake information.",status:"Status",uptime:"Uptime",tickInterval:"Tick Interval",lastChannelsRefresh:"Last Channels Refresh",channelsHint:"Use Channels to link WhatsApp, Telegram, Discord, Signal, or iMessage."},stats:{instances:"Instances",instancesHint:"Presence beacons in the last 5 minutes.",sessions:"Sessions",sessionsHint:"Recent session keys tracked by the gateway.",cron:"Cron",cronNext:"Next wake {time}"},notes:{title:"Notes",subtitle:"Quick reminders for remote control setups.",tailscaleTitle:"Tailscale serve",tailscaleText:"Prefer serve mode to keep the gateway on loopback with tailnet auth.",sessionTitle:"Session hygiene",sessionText:"Use /new or sessions.patch to reset context.",cronTitle:"Cron reminders",cronText:"Use isolated sessions for recurring runs."},auth:{required:"This gateway requires auth. Add a token or password, then click Connect.",failed:"Auth failed. Re-copy a tokenized URL with {command}, or update the token, then click Connect."},insecure:{hint:"This page is HTTP, so the browser blocks device identity. Use HTTPS (Tailscale Serve) or open {url} on the gateway host.",stayHttp:"If you must stay on HTTP, set {config} (token-only)."}},chat:{disconnected:"Disconnected from gateway.",refreshTitle:"Refresh chat data",thinkingToggle:"Toggle assistant thinking/working output",focusToggle:"Toggle focus mode (hide sidebar + page header)",onboardingDisabled:"Disabled during onboarding"},languages:{en:"English",zhCN:"简体中文 (Simplified Chinese)",zhTW:"繁體中文 (Traditional Chinese)",ptBR:"Português (Brazilian Portuguese)"}},yd=["en","zh-CN","zh-TW","pt-BR"];function Zi(e){return e!=null&&yd.includes(e)}class xd{constructor(){this.locale="en",this.translations={en:bd},this.subscribers=new Set,this.loadLocale()}loadLocale(){const t=localStorage.getItem("openclaw.i18n.locale");if(Zi(t))this.locale=t;else{const n=navigator.language;n.startsWith("zh")?this.locale=n==="zh-TW"||n==="zh-HK"?"zh-TW":"zh-CN":n.startsWith("pt")?this.locale="pt-BR":this.locale="en"}}getLocale(){return this.locale}async setLocale(t){if(this.locale!==t){if(!this.translations[t])try{let n;if(t==="zh-CN")n=await Ws(()=>import("./zh-CN-CGVPSYVJ.js"),[],import.meta.url);else if(t==="zh-TW")n=await Ws(()=>import("./zh-TW-BVv_0_oO.js"),[],import.meta.url);else if(t==="pt-BR")n=await Ws(()=>import("./pt-BR-jDuotdpV.js"),[],import.meta.url);else return;this.translations[t]=n[t.replace("-","_")]}catch(n){console.error(`Failed to load locale: ${t}`,n);return}this.locale=t,localStorage.setItem("openclaw.i18n.locale",t),this.notify()}}registerTranslation(t,n){this.translations[t]=n}subscribe(t){return this.subscribers.add(t),()=>this.subscribers.delete(t)}notify(){this.subscribers.forEach(t=>t(this.locale))}t(t,n){const s=t.split(".");let i=this.translations[this.locale]||this.translations.en;for(const a of s)if(i&&typeof i=="object")i=i[a];else{i=void 0;break}if(i===void 0&&this.locale!=="en"){i=this.translations.en;for(const a of s)if(i&&typeof i=="object")i=i[a];else{i=void 0;break}}return typeof i!="string"?t:n?i.replace(/\{(\w+)\}/g,(a,o)=>n[o]||`{${o}}`):i}}const En=new xd,P=(e,t)=>En.t(e,t);class $d{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){this.unsubscribe=En.subscribe(()=>{this.host.requestUpdate()})}hostDisconnected(){this.unsubscribe?.()}}async function Ce(e,t){if(!(!e.client||!e.connected)&&!e.channelsLoading){e.channelsLoading=!0,e.channelsError=null;try{const n=await e.client.request("channels.status",{probe:t,timeoutMs:8e3});e.channelsSnapshot=n,e.channelsLastSuccess=Date.now()}catch(n){e.channelsError=String(n)}finally{e.channelsLoading=!1}}}async function wd(e,t){if(!(!e.client||!e.connected||e.whatsappBusy)){e.whatsappBusy=!0;try{const n=await e.client.request("web.login.start",{force:t,timeoutMs:3e4});e.whatsappLoginMessage=n.message??null,e.whatsappLoginQrDataUrl=n.qrDataUrl??null,e.whatsappLoginConnected=null}catch(n){e.whatsappLoginMessage=String(n),e.whatsappLoginQrDataUrl=null,e.whatsappLoginConnected=null}finally{e.whatsappBusy=!1}}}async function kd(e){if(!(!e.client||!e.connected||e.whatsappBusy)){e.whatsappBusy=!0;try{const t=await e.client.request("web.login.wait",{timeoutMs:12e4});e.whatsappLoginMessage=t.message??null,e.whatsappLoginConnected=t.connected??null,t.connected&&(e.whatsappLoginQrDataUrl=null)}catch(t){e.whatsappLoginMessage=String(t),e.whatsappLoginConnected=null}finally{e.whatsappBusy=!1}}}async function Sd(e){if(!(!e.client||!e.connected||e.whatsappBusy)){e.whatsappBusy=!0;try{await e.client.request("channels.logout",{channel:"whatsapp"}),e.whatsappLoginMessage="Logged out.",e.whatsappLoginQrDataUrl=null,e.whatsappLoginConnected=null}catch(t){e.whatsappLoginMessage=String(t)}finally{e.whatsappBusy=!1}}}function Ee(e){if(e)return Array.isArray(e.type)?e.type.filter(n=>n!=="null")[0]??e.type[0]:e.type}function zr(e){if(!e)return"";if(e.default!==void 0)return e.default;switch(Ee(e)){case"object":return{};case"array":return[];case"boolean":return!1;case"number":case"integer":return 0;case"string":return"";default:return""}}function Ji(e){return e.filter(t=>typeof t=="string").join(".")}function Ie(e,t){const n=Ji(e),s=t[n];if(s)return s;const i=n.split(".");for(const[a,o]of Object.entries(t)){if(!a.includes("*"))continue;const r=a.split(".");if(r.length!==i.length)continue;let l=!0;for(let d=0;d<i.length;d+=1)if(r[d]!=="*"&&r[d]!==i[d]){l=!1;break}if(l)return o}}function nt(e){return e.replace(/_/g," ").replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/\s+/g," ").replace(/^./,t=>t.toUpperCase())}function go(e,t){const n=e.trim();if(n==="")return;const s=Number(n);return!Number.isFinite(s)||t&&!Number.isInteger(s)?e:s}function po(e){const t=e.trim();return t==="true"?!0:t==="false"?!1:e}function dt(e,t){if(e==null)return e;if(t.allOf&&t.allOf.length>0){let s=e;for(const i of t.allOf)s=dt(s,i);return s}const n=Ee(t);if(t.anyOf||t.oneOf){const s=(t.anyOf??t.oneOf??[]).filter(i=>!(i.type==="null"||Array.isArray(i.type)&&i.type.includes("null")));if(s.length===1)return dt(e,s[0]);if(typeof e=="string")for(const i of s){const a=Ee(i);if(a==="number"||a==="integer"){const o=go(e,a==="integer");if(o===void 0||typeof o=="number")return o}if(a==="boolean"){const o=po(e);if(typeof o=="boolean")return o}}for(const i of s){const a=Ee(i);if(a==="object"&&typeof e=="object"&&!Array.isArray(e)||a==="array"&&Array.isArray(e))return dt(e,i)}return e}if(n==="number"||n==="integer"){if(typeof e=="string"){const s=go(e,n==="integer");if(s===void 0||typeof s=="number")return s}return e}if(n==="boolean"){if(typeof e=="string"){const s=po(e);if(typeof s=="boolean")return s}return e}if(n==="object"){if(typeof e!="object"||Array.isArray(e))return e;const s=e,i=t.properties??{},a=t.additionalProperties&&typeof t.additionalProperties=="object"?t.additionalProperties:null,o={};for(const[r,l]of Object.entries(s)){const d=i[r]??a,p=d?dt(l,d):l;p!==void 0&&(o[r]=p)}return o}if(n==="array"){if(!Array.isArray(e))return e;if(Array.isArray(t.items)){const i=t.items;return e.map((a,o)=>{const r=o<i.length?i[o]:void 0;return r?dt(a,r):a})}const s=t.items;return s?e.map(i=>dt(i,s)).filter(i=>i!==void 0):e}return e}function Nt(e){return typeof structuredClone=="function"?structuredClone(e):JSON.parse(JSON.stringify(e))}function Ln(e){return`${JSON.stringify(e,null,2).trimEnd()}
`}function Hr(e,t,n){if(t.length===0)return;let s=e;for(let a=0;a<t.length-1;a+=1){const o=t[a],r=t[a+1];if(typeof o=="number"){if(!Array.isArray(s))return;s[o]==null&&(s[o]=typeof r=="number"?[]:{}),s=s[o]}else{if(typeof s!="object"||s==null)return;const l=s;l[o]==null&&(l[o]=typeof r=="number"?[]:{}),s=l[o]}}const i=t[t.length-1];if(typeof i=="number"){Array.isArray(s)&&(s[i]=n);return}typeof s=="object"&&s!=null&&(s[i]=n)}function jr(e,t){if(t.length===0)return;let n=e;for(let i=0;i<t.length-1;i+=1){const a=t[i];if(typeof a=="number"){if(!Array.isArray(n))return;n=n[a]}else{if(typeof n!="object"||n==null)return;n=n[a]}if(n==null)return}const s=t[t.length-1];if(typeof s=="number"){Array.isArray(n)&&n.splice(s,1);return}typeof n=="object"&&n!=null&&delete n[s]}async function Oe(e){if(!(!e.client||!e.connected)){e.configLoading=!0,e.lastError=null;try{const t=await e.client.request("config.get",{});Cd(e,t)}catch(t){e.lastError=String(t)}finally{e.configLoading=!1}}}async function Kr(e){if(!(!e.client||!e.connected)&&!e.configSchemaLoading){e.configSchemaLoading=!0;try{const t=await e.client.request("config.schema",{});Ad(e,t)}catch(t){e.lastError=String(t)}finally{e.configSchemaLoading=!1}}}function Ad(e,t){e.configSchema=t.schema??null,e.configUiHints=t.uiHints??{},e.configSchemaVersion=t.version??null}function Cd(e,t){e.configSnapshot=t;const n=typeof t.raw=="string"?t.raw:t.config&&typeof t.config=="object"?Ln(t.config):e.configRaw;!e.configFormDirty||e.configFormMode==="raw"?e.configRaw=n:e.configForm?e.configRaw=Ln(e.configForm):e.configRaw=n,e.configValid=typeof t.valid=="boolean"?t.valid:null,e.configIssues=Array.isArray(t.issues)?t.issues:[],e.configFormDirty||(e.configForm=Nt(t.config??{}),e.configFormOriginal=Nt(t.config??{}),e.configRawOriginal=n)}function Td(e){return!e||typeof e!="object"||Array.isArray(e)?null:e}function Wr(e){if(e.configFormMode!=="form"||!e.configForm)return e.configRaw;const t=Td(e.configSchema),n=t?dt(e.configForm,t):e.configForm;return Ln(n)}async function ns(e){if(!(!e.client||!e.connected)){e.configSaving=!0,e.lastError=null;try{const t=Wr(e),n=e.configSnapshot?.hash;if(!n){e.lastError="Config hash missing; reload and retry.";return}await e.client.request("config.set",{raw:t,baseHash:n}),e.configFormDirty=!1,await Oe(e)}catch(t){e.lastError=String(t)}finally{e.configSaving=!1}}}async function _d(e){if(!(!e.client||!e.connected)){e.configApplying=!0,e.lastError=null;try{const t=Wr(e),n=e.configSnapshot?.hash;if(!n){e.lastError="Config hash missing; reload and retry.";return}await e.client.request("config.apply",{raw:t,baseHash:n,sessionKey:e.applySessionKey}),e.configFormDirty=!1,await Oe(e)}catch(t){e.lastError=String(t)}finally{e.configApplying=!1}}}async function fo(e){if(!(!e.client||!e.connected)){e.updateRunning=!0,e.lastError=null;try{await e.client.request("update.run",{sessionKey:e.applySessionKey})}catch(t){e.lastError=String(t)}finally{e.updateRunning=!1}}}function _e(e,t,n){const s=Nt(e.configForm??e.configSnapshot?.config??{});Hr(s,t,n),e.configForm=s,e.configFormDirty=!0,e.configFormMode==="form"&&(e.configRaw=Ln(s))}function Xe(e,t){const n=Nt(e.configForm??e.configSnapshot?.config??{});jr(n,t),e.configForm=n,e.configFormDirty=!0,e.configFormMode==="form"&&(e.configRaw=Ln(n))}function Ed(e){const{values:t,original:n}=e;return t.name!==n.name||t.displayName!==n.displayName||t.about!==n.about||t.picture!==n.picture||t.banner!==n.banner||t.website!==n.website||t.nip05!==n.nip05||t.lud16!==n.lud16}function Ld(e){const{state:t,callbacks:n,accountId:s}=e,i=Ed(t),a=(r,l,d={})=>{const{type:p="text",placeholder:g,maxLength:h,help:u}=d,f=t.values[r]??"",v=t.fieldErrors[r],w=`nostr-profile-${r}`;return p==="textarea"?c`
        <div class="form-field" style="margin-bottom: 12px;">
          <label for="${w}" style="display: block; margin-bottom: 4px; font-weight: 500;">
            ${l}
          </label>
          <textarea
            id="${w}"
            .value=${f}
            placeholder=${g??""}
            maxlength=${h??2e3}
            rows="3"
            style="width: 100%; padding: 8px; border: 1px solid var(--border-color); border-radius: 4px; resize: vertical; font-family: inherit;"
            @input=${S=>{const C=S.target;n.onFieldChange(r,C.value)}}
            ?disabled=${t.saving}
          ></textarea>
          ${u?c`<div style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">${u}</div>`:m}
          ${v?c`<div style="font-size: 12px; color: var(--danger-color); margin-top: 2px;">${v}</div>`:m}
        </div>
      `:c`
      <div class="form-field" style="margin-bottom: 12px;">
        <label for="${w}" style="display: block; margin-bottom: 4px; font-weight: 500;">
          ${l}
        </label>
        <input
          id="${w}"
          type=${p}
          .value=${f}
          placeholder=${g??""}
          maxlength=${h??256}
          style="width: 100%; padding: 8px; border: 1px solid var(--border-color); border-radius: 4px;"
          @input=${S=>{const C=S.target;n.onFieldChange(r,C.value)}}
          ?disabled=${t.saving}
        />
        ${u?c`<div style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">${u}</div>`:m}
        ${v?c`<div style="font-size: 12px; color: var(--danger-color); margin-top: 2px;">${v}</div>`:m}
      </div>
    `},o=()=>{const r=t.values.picture;return r?c`
      <div style="margin-bottom: 12px;">
        <img
          src=${r}
          alt="Profile picture preview"
          style="max-width: 80px; max-height: 80px; border-radius: 50%; object-fit: cover; border: 2px solid var(--border-color);"
          @error=${l=>{const d=l.target;d.style.display="none"}}
          @load=${l=>{const d=l.target;d.style.display="block"}}
        />
      </div>
    `:m};return c`
    <div class="nostr-profile-form" style="padding: 16px; background: var(--bg-secondary); border-radius: 8px; margin-top: 12px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
        <div style="font-weight: 600; font-size: 16px;">Edit Profile</div>
        <div style="font-size: 12px; color: var(--text-muted);">Account: ${s}</div>
      </div>

      ${t.error?c`<div class="callout danger" style="margin-bottom: 12px;">${t.error}</div>`:m}

      ${t.success?c`<div class="callout success" style="margin-bottom: 12px;">${t.success}</div>`:m}

      ${o()}

      ${a("name","Username",{placeholder:"satoshi",maxLength:256,help:"Short username (e.g., satoshi)"})}

      ${a("displayName","Display Name",{placeholder:"Satoshi Nakamoto",maxLength:256,help:"Your full display name"})}

      ${a("about","Bio",{type:"textarea",placeholder:"Tell people about yourself...",maxLength:2e3,help:"A brief bio or description"})}

      ${a("picture","Avatar URL",{type:"url",placeholder:"https://example.com/avatar.jpg",help:"HTTPS URL to your profile picture"})}

      ${t.showAdvanced?c`
            <div style="border-top: 1px solid var(--border-color); padding-top: 12px; margin-top: 12px;">
              <div style="font-weight: 500; margin-bottom: 12px; color: var(--text-muted);">Advanced</div>

              ${a("banner","Banner URL",{type:"url",placeholder:"https://example.com/banner.jpg",help:"HTTPS URL to a banner image"})}

              ${a("website","Website",{type:"url",placeholder:"https://example.com",help:"Your personal website"})}

              ${a("nip05","NIP-05 Identifier",{placeholder:"you@example.com",help:"Verifiable identifier (e.g., you@domain.com)"})}

              ${a("lud16","Lightning Address",{placeholder:"you@getalby.com",help:"Lightning address for tips (LUD-16)"})}
            </div>
          `:m}

      <div style="display: flex; gap: 8px; margin-top: 16px; flex-wrap: wrap;">
        <button
          class="btn primary"
          @click=${n.onSave}
          ?disabled=${t.saving||!i}
        >
          ${t.saving?"Saving...":"Save & Publish"}
        </button>

        <button
          class="btn"
          @click=${n.onImport}
          ?disabled=${t.importing||t.saving}
        >
          ${t.importing?"Importing...":"Import from Relays"}
        </button>

        <button
          class="btn"
          @click=${n.onToggleAdvanced}
        >
          ${t.showAdvanced?"Hide Advanced":"Show Advanced"}
        </button>

        <button
          class="btn"
          @click=${n.onCancel}
          ?disabled=${t.saving}
        >
          Cancel
        </button>
      </div>

      ${i?c`
              <div style="font-size: 12px; color: var(--warning-color); margin-top: 8px">
                You have unsaved changes
              </div>
            `:m}
    </div>
  `}function Md(e){const t={name:e?.name??"",displayName:e?.displayName??"",about:e?.about??"",picture:e?.picture??"",banner:e?.banner??"",website:e?.website??"",nip05:e?.nip05??"",lud16:e?.lud16??""};return{values:t,original:{...t},saving:!1,importing:!1,error:null,success:null,fieldErrors:{},showAdvanced:!!(e?.banner||e?.website||e?.nip05||e?.lud16)}}async function Rd(e,t){await wd(e,t),await Ce(e,!0)}async function Id(e){await kd(e),await Ce(e,!0)}async function Pd(e){await Sd(e),await Ce(e,!0)}async function Dd(e){await ns(e),await Oe(e),await Ce(e,!0)}async function Fd(e){await Oe(e),await Ce(e,!0)}function Nd(e){if(!Array.isArray(e))return{};const t={};for(const n of e){if(typeof n!="string")continue;const[s,...i]=n.split(":");if(!s||i.length===0)continue;const a=s.trim(),o=i.join(":").trim();a&&o&&(t[a]=o)}return t}function qr(e){return(e.channelsSnapshot?.channelAccounts?.nostr??[])[0]?.accountId??e.nostrProfileAccountId??"default"}function Gr(e,t=""){return`/api/channels/nostr/${encodeURIComponent(e)}/profile${t}`}function Od(e){const t=e.hello?.auth?.deviceToken?.trim();if(t)return`Bearer ${t}`;const n=e.settings.token.trim();if(n)return`Bearer ${n}`;const s=e.password.trim();return s?`Bearer ${s}`:null}function Vr(e){const t=Od(e);return t?{Authorization:t}:{}}function Bd(e,t,n){e.nostrProfileAccountId=t,e.nostrProfileFormState=Md(n??void 0)}function Ud(e){e.nostrProfileFormState=null,e.nostrProfileAccountId=null}function zd(e,t,n){const s=e.nostrProfileFormState;s&&(e.nostrProfileFormState={...s,values:{...s.values,[t]:n},fieldErrors:{...s.fieldErrors,[t]:""}})}function Hd(e){const t=e.nostrProfileFormState;t&&(e.nostrProfileFormState={...t,showAdvanced:!t.showAdvanced})}async function jd(e){const t=e.nostrProfileFormState;if(!t||t.saving)return;const n=qr(e);e.nostrProfileFormState={...t,saving:!0,error:null,success:null,fieldErrors:{}};try{const s=await fetch(Gr(n),{method:"PUT",headers:{"Content-Type":"application/json",...Vr(e)},body:JSON.stringify(t.values)}),i=await s.json().catch(()=>null);if(!s.ok||i?.ok===!1||!i){const a=i?.error??`Profile update failed (${s.status})`;e.nostrProfileFormState={...t,saving:!1,error:a,success:null,fieldErrors:Nd(i?.details)};return}if(!i.persisted){e.nostrProfileFormState={...t,saving:!1,error:"Profile publish failed on all relays.",success:null};return}e.nostrProfileFormState={...t,saving:!1,error:null,success:"Profile published to relays.",fieldErrors:{},original:{...t.values}},await Ce(e,!0)}catch(s){e.nostrProfileFormState={...t,saving:!1,error:`Profile update failed: ${String(s)}`,success:null}}}async function Kd(e){const t=e.nostrProfileFormState;if(!t||t.importing)return;const n=qr(e);e.nostrProfileFormState={...t,importing:!0,error:null,success:null};try{const s=await fetch(Gr(n,"/import"),{method:"POST",headers:{"Content-Type":"application/json",...Vr(e)},body:JSON.stringify({autoMerge:!0})}),i=await s.json().catch(()=>null);if(!s.ok||i?.ok===!1||!i){const l=i?.error??`Profile import failed (${s.status})`;e.nostrProfileFormState={...t,importing:!1,error:l,success:null};return}const a=i.merged??i.imported??null,o=a?{...t.values,...a}:t.values,r=!!(o.banner||o.website||o.nip05||o.lud16);e.nostrProfileFormState={...t,importing:!1,values:o,error:null,success:i.saved?"Profile imported from relays. Review and publish.":"Profile imported. Review and publish.",showAdvanced:r},i.saved&&await Ce(e,!0)}catch(s){e.nostrProfileFormState={...t,importing:!1,error:`Profile import failed: ${String(s)}`,success:null}}}function Qr(e){const t=(e??"").trim();if(!t)return null;const n=t.split(":").filter(Boolean);if(n.length<3||n[0]!=="agent")return null;const s=n[1]?.trim(),i=n.slice(2).join(":");return!s||!i?null:{agentId:s,rest:i}}const bi=450;function Dn(e,t=!1,n=!1){e.chatScrollFrame&&cancelAnimationFrame(e.chatScrollFrame),e.chatScrollTimeout!=null&&(clearTimeout(e.chatScrollTimeout),e.chatScrollTimeout=null);const s=()=>{const i=e.querySelector(".chat-thread");if(i){const a=getComputedStyle(i).overflowY;if(a==="auto"||a==="scroll"||i.scrollHeight-i.clientHeight>1)return i}return document.scrollingElement??document.documentElement};e.updateComplete.then(()=>{e.chatScrollFrame=requestAnimationFrame(()=>{e.chatScrollFrame=null;const i=s();if(!i)return;const a=i.scrollHeight-i.scrollTop-i.clientHeight,o=t&&!e.chatHasAutoScrolled;if(!(o||e.chatUserNearBottom||a<bi)){e.chatNewMessagesBelow=!0;return}o&&(e.chatHasAutoScrolled=!0);const l=n&&(typeof window>"u"||typeof window.matchMedia!="function"||!window.matchMedia("(prefers-reduced-motion: reduce)").matches),d=i.scrollHeight;typeof i.scrollTo=="function"?i.scrollTo({top:d,behavior:l?"smooth":"auto"}):i.scrollTop=d,e.chatUserNearBottom=!0,e.chatNewMessagesBelow=!1;const p=o?150:120;e.chatScrollTimeout=window.setTimeout(()=>{e.chatScrollTimeout=null;const g=s();if(!g)return;const h=g.scrollHeight-g.scrollTop-g.clientHeight;(o||e.chatUserNearBottom||h<bi)&&(g.scrollTop=g.scrollHeight,e.chatUserNearBottom=!0)},p)})})}function Yr(e,t=!1){e.logsScrollFrame&&cancelAnimationFrame(e.logsScrollFrame),e.updateComplete.then(()=>{e.logsScrollFrame=requestAnimationFrame(()=>{e.logsScrollFrame=null;const n=e.querySelector(".log-stream");if(!n)return;const s=n.scrollHeight-n.scrollTop-n.clientHeight;(t||s<80)&&(n.scrollTop=n.scrollHeight)})})}function Wd(e,t){const n=t.currentTarget;if(!n)return;const s=n.scrollHeight-n.scrollTop-n.clientHeight;e.chatUserNearBottom=s<bi,e.chatUserNearBottom&&(e.chatNewMessagesBelow=!1)}function qd(e,t){const n=t.currentTarget;if(!n)return;const s=n.scrollHeight-n.scrollTop-n.clientHeight;e.logsAtBottom=s<80}function ho(e){e.chatHasAutoScrolled=!1,e.chatUserNearBottom=!0,e.chatNewMessagesBelow=!1}function Gd(e,t){if(e.length===0)return;const n=new Blob([`${e.join(`
`)}
`],{type:"text/plain"}),s=URL.createObjectURL(n),i=document.createElement("a"),a=new Date().toISOString().slice(0,19).replace(/[:T]/g,"-");i.href=s,i.download=`openclaw-logs-${t}-${a}.log`,i.click(),URL.revokeObjectURL(s)}function Vd(e){if(typeof ResizeObserver>"u")return;const t=e.querySelector(".topbar");if(!t)return;const n=()=>{const{height:s}=t.getBoundingClientRect();e.style.setProperty("--topbar-height",`${s}px`)};n(),e.topbarObserver=new ResizeObserver(()=>n()),e.topbarObserver.observe(t)}async function Ss(e){if(!(!e.client||!e.connected)&&!e.debugLoading){e.debugLoading=!0;try{const[t,n,s,i]=await Promise.all([e.client.request("status",{}),e.client.request("health",{}),e.client.request("models.list",{}),e.client.request("last-heartbeat",{})]);e.debugStatus=t,e.debugHealth=n;const a=s;e.debugModels=Array.isArray(a?.models)?a?.models:[],e.debugHeartbeat=i}catch(t){e.debugCallError=String(t)}finally{e.debugLoading=!1}}}async function Qd(e){if(!(!e.client||!e.connected)){e.debugCallError=null,e.debugCallResult=null;try{const t=e.debugCallParams.trim()?JSON.parse(e.debugCallParams):{},n=await e.client.request(e.debugCallMethod.trim(),t);e.debugCallResult=JSON.stringify(n,null,2)}catch(t){e.debugCallError=String(t)}}}const Yd=2e3,Zd=new Set(["trace","debug","info","warn","error","fatal"]);function Jd(e){if(typeof e!="string")return null;const t=e.trim();if(!t.startsWith("{")||!t.endsWith("}"))return null;try{const n=JSON.parse(t);return!n||typeof n!="object"?null:n}catch{return null}}function Xd(e){if(typeof e!="string")return null;const t=e.toLowerCase();return Zd.has(t)?t:null}function eu(e){if(!e.trim())return{raw:e,message:e};try{const t=JSON.parse(e),n=t&&typeof t._meta=="object"&&t._meta!==null?t._meta:null,s=typeof t.time=="string"?t.time:typeof n?.date=="string"?n?.date:null,i=Xd(n?.logLevelName??n?.level),a=typeof t[0]=="string"?t[0]:typeof n?.name=="string"?n?.name:null,o=Jd(a);let r=null;o&&(typeof o.subsystem=="string"?r=o.subsystem:typeof o.module=="string"&&(r=o.module)),!r&&a&&a.length<120&&(r=a);let l=null;return typeof t[1]=="string"?l=t[1]:!o&&typeof t[0]=="string"?l=t[0]:typeof t.message=="string"&&(l=t.message),{raw:e,time:s,level:i,subsystem:r,message:l??e,meta:n??void 0}}catch{return{raw:e,message:e}}}async function Xi(e,t){if(!(!e.client||!e.connected)&&!(e.logsLoading&&!t?.quiet)){t?.quiet||(e.logsLoading=!0),e.logsError=null;try{const s=await e.client.request("logs.tail",{cursor:t?.reset?void 0:e.logsCursor??void 0,limit:e.logsLimit,maxBytes:e.logsMaxBytes}),a=(Array.isArray(s.lines)?s.lines.filter(r=>typeof r=="string"):[]).map(eu),o=!!(t?.reset||s.reset||e.logsCursor==null);e.logsEntries=o?a:[...e.logsEntries,...a].slice(-Yd),typeof s.cursor=="number"&&(e.logsCursor=s.cursor),typeof s.file=="string"&&(e.logsFile=s.file),e.logsTruncated=!!s.truncated,e.logsLastFetchAt=Date.now()}catch(n){e.logsError=String(n)}finally{t?.quiet||(e.logsLoading=!1)}}}async function As(e,t){if(!(!e.client||!e.connected)&&!e.nodesLoading){e.nodesLoading=!0,t?.quiet||(e.lastError=null);try{const n=await e.client.request("node.list",{});e.nodes=Array.isArray(n.nodes)?n.nodes:[]}catch(n){t?.quiet||(e.lastError=String(n))}finally{e.nodesLoading=!1}}}function tu(e){e.nodesPollInterval==null&&(e.nodesPollInterval=window.setInterval(()=>{As(e,{quiet:!0})},5e3))}function nu(e){e.nodesPollInterval!=null&&(clearInterval(e.nodesPollInterval),e.nodesPollInterval=null)}function ea(e){e.logsPollInterval==null&&(e.logsPollInterval=window.setInterval(()=>{e.tab==="logs"&&Xi(e,{quiet:!0})},2e3))}function ta(e){e.logsPollInterval!=null&&(clearInterval(e.logsPollInterval),e.logsPollInterval=null)}function na(e){e.debugPollInterval==null&&(e.debugPollInterval=window.setInterval(()=>{e.tab==="debug"&&Ss(e)},3e3))}function sa(e){e.debugPollInterval!=null&&(clearInterval(e.debugPollInterval),e.debugPollInterval=null)}async function Zr(e,t){if(!(!e.client||!e.connected||e.agentIdentityLoading)&&!e.agentIdentityById[t]){e.agentIdentityLoading=!0,e.agentIdentityError=null;try{const n=await e.client.request("agent.identity.get",{agentId:t});n&&(e.agentIdentityById={...e.agentIdentityById,[t]:n})}catch(n){e.agentIdentityError=String(n)}finally{e.agentIdentityLoading=!1}}}async function Jr(e,t){if(!e.client||!e.connected||e.agentIdentityLoading)return;const n=t.filter(s=>!e.agentIdentityById[s]);if(n.length!==0){e.agentIdentityLoading=!0,e.agentIdentityError=null;try{for(const s of n){const i=await e.client.request("agent.identity.get",{agentId:s});i&&(e.agentIdentityById={...e.agentIdentityById,[s]:i})}}catch(s){e.agentIdentityError=String(s)}finally{e.agentIdentityLoading=!1}}}async function ss(e,t){if(!(!e.client||!e.connected)&&!e.agentSkillsLoading){e.agentSkillsLoading=!0,e.agentSkillsError=null;try{const n=await e.client.request("skills.status",{agentId:t});n&&(e.agentSkillsReport=n,e.agentSkillsAgentId=t)}catch(n){e.agentSkillsError=String(n)}finally{e.agentSkillsLoading=!1}}}async function ia(e){if(!(!e.client||!e.connected)&&!e.agentsLoading){e.agentsLoading=!0,e.agentsError=null;try{const t=await e.client.request("agents.list",{});if(t){e.agentsList=t;const n=e.agentsSelectedId,s=t.agents.some(i=>i.id===n);(!n||!s)&&(e.agentsSelectedId=t.defaultId??t.agents[0]?.id??null)}}catch(t){e.agentsError=String(t)}finally{e.agentsLoading=!1}}}function aa(e,t){if(e==null||!Number.isFinite(e)||e<=0)return;if(e<1e3)return`${Math.round(e)}ms`;const n=t?.spaced?" ":"",s=Math.round(e/1e3),i=Math.floor(s/3600),a=Math.floor(s%3600/60),o=s%60;if(i>=24){const r=Math.floor(i/24),l=i%24;return l>0?`${r}d${n}${l}h`:`${r}d`}return i>0?a>0?`${i}h${n}${a}m`:`${i}h`:a>0?o>0?`${a}m${n}${o}s`:`${a}m`:`${o}s`}function oa(e,t="n/a"){if(e==null||!Number.isFinite(e)||e<0)return t;if(e<1e3)return`${Math.round(e)}ms`;const n=Math.round(e/1e3);if(n<60)return`${n}s`;const s=Math.round(n/60);if(s<60)return`${s}m`;const i=Math.round(s/60);return i<24?`${i}h`:`${Math.round(i/24)}d`}function ee(e,t){const n=t?.fallback??"n/a";if(e==null||!Number.isFinite(e))return n;const s=Date.now()-e,i=Math.abs(s),a=s>=0,o=Math.round(i/1e3);if(o<60)return a?"just now":"in <1m";const r=Math.round(o/60);if(r<60)return a?`${r}m ago`:`in ${r}m`;const l=Math.round(r/60);if(l<48)return a?`${l}h ago`:`in ${l}h`;const d=Math.round(l/24);return a?`${d}d ago`:`in ${d}d`}const su=/<\s*\/?\s*(?:think(?:ing)?|thought|antthinking|final)\b/i,jn=/<\s*\/?\s*final\b[^<>]*>/gi,mo=/<\s*(\/?)\s*(?:think(?:ing)?|thought|antthinking)\b[^<>]*>/gi;function vo(e){const t=[],n=/(^|\n)(```|~~~)[^\n]*\n[\s\S]*?(?:\n\2(?:\n|$)|$)/g;for(const i of e.matchAll(n)){const a=(i.index??0)+i[1].length;t.push({start:a,end:a+i[0].length-i[1].length})}const s=/`+[^`]+`+/g;for(const i of e.matchAll(s)){const a=i.index??0,o=a+i[0].length;t.some(l=>a>=l.start&&o<=l.end)||t.push({start:a,end:o})}return t.sort((i,a)=>i.start-a.start),t}function bo(e,t){return t.some(n=>e>=n.start&&e<n.end)}function iu(e,t){return e.trimStart()}function au(e,t){if(!e||!su.test(e))return e;let n=e;if(jn.test(n)){jn.lastIndex=0;const r=[],l=vo(n);for(const d of n.matchAll(jn)){const p=d.index??0;r.push({start:p,length:d[0].length,inCode:bo(p,l)})}for(let d=r.length-1;d>=0;d--){const p=r[d];p.inCode||(n=n.slice(0,p.start)+n.slice(p.start+p.length))}}else jn.lastIndex=0;const s=vo(n);mo.lastIndex=0;let i="",a=0,o=!1;for(const r of n.matchAll(mo)){const l=r.index??0,d=r[1]==="/";bo(l,s)||(o?d&&(o=!1):(i+=n.slice(a,l),d||(o=!0)),a=l+r[0].length)}return i+=n.slice(a),iu(i)}function Ot(e){return!e&&e!==0?"n/a":new Date(e).toLocaleString()}function yi(e){return!e||e.length===0?"none":e.filter(t=>!!(t&&t.trim())).join(", ")}function xi(e,t=120){return e.length<=t?e:`${e.slice(0,Math.max(0,t-1))}…`}function Xr(e,t){return e.length<=t?{text:e,truncated:!1,total:e.length}:{text:e.slice(0,Math.max(0,t)),truncated:!0,total:e.length}}function ds(e,t){const n=Number(e);return Number.isFinite(n)?n:t}function qs(e){return au(e)}function ou(e){return e.sessionTarget==="isolated"&&e.payloadKind==="agentTurn"}function el(e){return e.deliveryMode!=="announce"||ou(e)?e:{...e,deliveryMode:"none"}}async function Fn(e){if(!(!e.client||!e.connected))try{const t=await e.client.request("cron.status",{});e.cronStatus=t}catch(t){e.cronError=String(t)}}async function Cs(e){if(!(!e.client||!e.connected)&&!e.cronLoading){e.cronLoading=!0,e.cronError=null;try{const t=await e.client.request("cron.list",{includeDisabled:!0});e.cronJobs=Array.isArray(t.jobs)?t.jobs:[]}catch(t){e.cronError=String(t)}finally{e.cronLoading=!1}}}function ru(e){if(e.scheduleKind==="at"){const n=Date.parse(e.scheduleAt);if(!Number.isFinite(n))throw new Error("Invalid run time.");return{kind:"at",at:new Date(n).toISOString()}}if(e.scheduleKind==="every"){const n=ds(e.everyAmount,0);if(n<=0)throw new Error("Invalid interval amount.");const s=e.everyUnit;return{kind:"every",everyMs:n*(s==="minutes"?6e4:s==="hours"?36e5:864e5)}}const t=e.cronExpr.trim();if(!t)throw new Error("Cron expression required.");return{kind:"cron",expr:t,tz:e.cronTz.trim()||void 0}}function lu(e){if(e.payloadKind==="systemEvent"){const i=e.payloadText.trim();if(!i)throw new Error("System event text required.");return{kind:"systemEvent",text:i}}const t=e.payloadText.trim();if(!t)throw new Error("Agent message required.");const n={kind:"agentTurn",message:t},s=ds(e.timeoutSeconds,0);return s>0&&(n.timeoutSeconds=s),n}async function cu(e){if(!(!e.client||!e.connected||e.cronBusy)){e.cronBusy=!0,e.cronError=null;try{const t=el(e.cronForm);t!==e.cronForm&&(e.cronForm=t);const n=ru(t),s=lu(t),i=t.deliveryMode,a=i&&i!=="none"?{mode:i,channel:i==="announce"?t.deliveryChannel.trim()||"last":void 0,to:t.deliveryTo.trim()||void 0}:void 0,o=t.agentId.trim(),r={name:t.name.trim(),description:t.description.trim()||void 0,agentId:o||void 0,enabled:t.enabled,schedule:n,sessionTarget:t.sessionTarget,wakeMode:t.wakeMode,payload:s,delivery:a};if(!r.name)throw new Error("Name required.");await e.client.request("cron.add",r),e.cronForm={...e.cronForm,name:"",description:"",payloadText:""},await Cs(e),await Fn(e)}catch(t){e.cronError=String(t)}finally{e.cronBusy=!1}}}async function du(e,t,n){if(!(!e.client||!e.connected||e.cronBusy)){e.cronBusy=!0,e.cronError=null;try{await e.client.request("cron.update",{id:t.id,patch:{enabled:n}}),await Cs(e),await Fn(e)}catch(s){e.cronError=String(s)}finally{e.cronBusy=!1}}}async function uu(e,t){if(!(!e.client||!e.connected||e.cronBusy)){e.cronBusy=!0,e.cronError=null;try{await e.client.request("cron.run",{id:t.id,mode:"force"}),await tl(e,t.id)}catch(n){e.cronError=String(n)}finally{e.cronBusy=!1}}}async function gu(e,t){if(!(!e.client||!e.connected||e.cronBusy)){e.cronBusy=!0,e.cronError=null;try{await e.client.request("cron.remove",{id:t.id}),e.cronRunsJobId===t.id&&(e.cronRunsJobId=null,e.cronRuns=[]),await Cs(e),await Fn(e)}catch(n){e.cronError=String(n)}finally{e.cronBusy=!1}}}async function tl(e,t){if(!(!e.client||!e.connected))try{const n=await e.client.request("cron.runs",{id:t,limit:50});e.cronRunsJobId=t,e.cronRuns=Array.isArray(n.entries)?n.entries:[]}catch(n){e.cronError=String(n)}}function ra(e){return e.trim()}function pu(e){if(!Array.isArray(e))return[];const t=new Set;for(const n of e){const s=n.trim();s&&t.add(s)}return[...t].toSorted()}const nl="openclaw.device.auth.v1";function la(){try{const e=window.localStorage.getItem(nl);if(!e)return null;const t=JSON.parse(e);return!t||t.version!==1||!t.deviceId||typeof t.deviceId!="string"||!t.tokens||typeof t.tokens!="object"?null:t}catch{return null}}function sl(e){try{window.localStorage.setItem(nl,JSON.stringify(e))}catch{}}function fu(e){const t=la();if(!t||t.deviceId!==e.deviceId)return null;const n=ra(e.role),s=t.tokens[n];return!s||typeof s.token!="string"?null:s}function il(e){const t=ra(e.role),n={version:1,deviceId:e.deviceId,tokens:{}},s=la();s&&s.deviceId===e.deviceId&&(n.tokens={...s.tokens});const i={token:e.token,role:t,scopes:pu(e.scopes),updatedAtMs:Date.now()};return n.tokens[t]=i,sl(n),i}function al(e){const t=la();if(!t||t.deviceId!==e.deviceId)return;const n=ra(e.role);if(!t.tokens[n])return;const s={...t,tokens:{...t.tokens}};delete s.tokens[n],sl(s)}const ol={p:0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffedn,n:0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3edn,h:8n,a:0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffecn,d:0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3n,Gx:0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51an,Gy:0x6666666666666666666666666666666666666666666666666666666666666658n},{p:ye,n:is,Gx:yo,Gy:xo,a:Gs,d:Vs,h:hu}=ol,Bt=32,ca=64,mu=(...e)=>{"captureStackTrace"in Error&&typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(...e)},pe=(e="")=>{const t=new Error(e);throw mu(t,pe),t},vu=e=>typeof e=="bigint",bu=e=>typeof e=="string",yu=e=>e instanceof Uint8Array||ArrayBuffer.isView(e)&&e.constructor.name==="Uint8Array",bt=(e,t,n="")=>{const s=yu(e),i=e?.length,a=t!==void 0;if(!s||a&&i!==t){const o=n&&`"${n}" `,r=a?` of length ${t}`:"",l=s?`length=${i}`:`type=${typeof e}`;pe(o+"expected Uint8Array"+r+", got "+l)}return e},Ts=e=>new Uint8Array(e),rl=e=>Uint8Array.from(e),ll=(e,t)=>e.toString(16).padStart(t,"0"),cl=e=>Array.from(bt(e)).map(t=>ll(t,2)).join(""),et={_0:48,_9:57,A:65,F:70,a:97,f:102},$o=e=>{if(e>=et._0&&e<=et._9)return e-et._0;if(e>=et.A&&e<=et.F)return e-(et.A-10);if(e>=et.a&&e<=et.f)return e-(et.a-10)},dl=e=>{const t="hex invalid";if(!bu(e))return pe(t);const n=e.length,s=n/2;if(n%2)return pe(t);const i=Ts(s);for(let a=0,o=0;a<s;a++,o+=2){const r=$o(e.charCodeAt(o)),l=$o(e.charCodeAt(o+1));if(r===void 0||l===void 0)return pe(t);i[a]=r*16+l}return i},ul=()=>globalThis?.crypto,xu=()=>ul()?.subtle??pe("crypto.subtle must be defined, consider polyfill"),Mn=(...e)=>{const t=Ts(e.reduce((s,i)=>s+bt(i).length,0));let n=0;return e.forEach(s=>{t.set(s,n),n+=s.length}),t},$u=(e=Bt)=>ul().getRandomValues(Ts(e)),us=BigInt,_t=(e,t,n,s="bad number: out of range")=>vu(e)&&t<=e&&e<n?e:pe(s),N=(e,t=ye)=>{const n=e%t;return n>=0n?n:t+n},gl=e=>N(e,is),wu=(e,t)=>{(e===0n||t<=0n)&&pe("no inverse n="+e+" mod="+t);let n=N(e,t),s=t,i=0n,a=1n;for(;n!==0n;){const o=s/n,r=s%n,l=i-a*o;s=n,n=r,i=a,a=l}return s===1n?N(i,t):pe("no inverse")},ku=e=>{const t=ml[e];return typeof t!="function"&&pe("hashes."+e+" not set"),t},Qs=e=>e instanceof Me?e:pe("Point expected"),$i=2n**256n;class Me{static BASE;static ZERO;X;Y;Z;T;constructor(t,n,s,i){const a=$i;this.X=_t(t,0n,a),this.Y=_t(n,0n,a),this.Z=_t(s,1n,a),this.T=_t(i,0n,a),Object.freeze(this)}static CURVE(){return ol}static fromAffine(t){return new Me(t.x,t.y,1n,N(t.x*t.y))}static fromBytes(t,n=!1){const s=Vs,i=rl(bt(t,Bt)),a=t[31];i[31]=a&-129;const o=fl(i);_t(o,0n,n?$i:ye);const l=N(o*o),d=N(l-1n),p=N(s*l+1n);let{isValid:g,value:h}=Au(d,p);g||pe("bad point: y not sqrt");const u=(h&1n)===1n,f=(a&128)!==0;return!n&&h===0n&&f&&pe("bad point: x==0, isLastByteOdd"),f!==u&&(h=N(-h)),new Me(h,o,1n,N(h*o))}static fromHex(t,n){return Me.fromBytes(dl(t),n)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}assertValidity(){const t=Gs,n=Vs,s=this;if(s.is0())return pe("bad point: ZERO");const{X:i,Y:a,Z:o,T:r}=s,l=N(i*i),d=N(a*a),p=N(o*o),g=N(p*p),h=N(l*t),u=N(p*N(h+d)),f=N(g+N(n*N(l*d)));if(u!==f)return pe("bad point: equation left != right (1)");const v=N(i*a),w=N(o*r);return v!==w?pe("bad point: equation left != right (2)"):this}equals(t){const{X:n,Y:s,Z:i}=this,{X:a,Y:o,Z:r}=Qs(t),l=N(n*r),d=N(a*i),p=N(s*r),g=N(o*i);return l===d&&p===g}is0(){return this.equals(Xt)}negate(){return new Me(N(-this.X),this.Y,this.Z,N(-this.T))}double(){const{X:t,Y:n,Z:s}=this,i=Gs,a=N(t*t),o=N(n*n),r=N(2n*N(s*s)),l=N(i*a),d=t+n,p=N(N(d*d)-a-o),g=l+o,h=g-r,u=l-o,f=N(p*h),v=N(g*u),w=N(p*u),S=N(h*g);return new Me(f,v,S,w)}add(t){const{X:n,Y:s,Z:i,T:a}=this,{X:o,Y:r,Z:l,T:d}=Qs(t),p=Gs,g=Vs,h=N(n*o),u=N(s*r),f=N(a*g*d),v=N(i*l),w=N((n+s)*(o+r)-h-u),S=N(v-f),C=N(v+f),k=N(u-p*h),A=N(w*S),E=N(C*k),T=N(w*k),R=N(S*C);return new Me(A,E,R,T)}subtract(t){return this.add(Qs(t).negate())}multiply(t,n=!0){if(!n&&(t===0n||this.is0()))return Xt;if(_t(t,1n,is),t===1n)return this;if(this.equals(Ut))return Fu(t).p;let s=Xt,i=Ut;for(let a=this;t>0n;a=a.double(),t>>=1n)t&1n?s=s.add(a):n&&(i=i.add(a));return s}multiplyUnsafe(t){return this.multiply(t,!1)}toAffine(){const{X:t,Y:n,Z:s}=this;if(this.equals(Xt))return{x:0n,y:1n};const i=wu(s,ye);N(s*i)!==1n&&pe("invalid inverse");const a=N(t*i),o=N(n*i);return{x:a,y:o}}toBytes(){const{x:t,y:n}=this.assertValidity().toAffine(),s=pl(n);return s[31]|=t&1n?128:0,s}toHex(){return cl(this.toBytes())}clearCofactor(){return this.multiply(us(hu),!1)}isSmallOrder(){return this.clearCofactor().is0()}isTorsionFree(){let t=this.multiply(is/2n,!1).double();return is%2n&&(t=t.add(this)),t.is0()}}const Ut=new Me(yo,xo,1n,N(yo*xo)),Xt=new Me(0n,1n,1n,0n);Me.BASE=Ut;Me.ZERO=Xt;const pl=e=>dl(ll(_t(e,0n,$i),ca)).reverse(),fl=e=>us("0x"+cl(rl(bt(e)).reverse())),He=(e,t)=>{let n=e;for(;t-- >0n;)n*=n,n%=ye;return n},Su=e=>{const n=e*e%ye*e%ye,s=He(n,2n)*n%ye,i=He(s,1n)*e%ye,a=He(i,5n)*i%ye,o=He(a,10n)*a%ye,r=He(o,20n)*o%ye,l=He(r,40n)*r%ye,d=He(l,80n)*l%ye,p=He(d,80n)*l%ye,g=He(p,10n)*a%ye;return{pow_p_5_8:He(g,2n)*e%ye,b2:n}},wo=0x2b8324804fc1df0b2b4d00993dfbd7a72f431806ad2fe478c4ee1b274a0ea0b0n,Au=(e,t)=>{const n=N(t*t*t),s=N(n*n*t),i=Su(e*s).pow_p_5_8;let a=N(e*n*i);const o=N(t*a*a),r=a,l=N(a*wo),d=o===e,p=o===N(-e),g=o===N(-e*wo);return d&&(a=r),(p||g)&&(a=l),(N(a)&1n)===1n&&(a=N(-a)),{isValid:d||p,value:a}},wi=e=>gl(fl(e)),da=(...e)=>ml.sha512Async(Mn(...e)),Cu=(...e)=>ku("sha512")(Mn(...e)),hl=e=>{const t=e.slice(0,Bt);t[0]&=248,t[31]&=127,t[31]|=64;const n=e.slice(Bt,ca),s=wi(t),i=Ut.multiply(s),a=i.toBytes();return{head:t,prefix:n,scalar:s,point:i,pointBytes:a}},ua=e=>da(bt(e,Bt)).then(hl),Tu=e=>hl(Cu(bt(e,Bt))),_u=e=>ua(e).then(t=>t.pointBytes),Eu=e=>da(e.hashable).then(e.finish),Lu=(e,t,n)=>{const{pointBytes:s,scalar:i}=e,a=wi(t),o=Ut.multiply(a).toBytes();return{hashable:Mn(o,s,n),finish:d=>{const p=gl(a+wi(d)*i);return bt(Mn(o,pl(p)),ca)}}},Mu=async(e,t)=>{const n=bt(e),s=await ua(t),i=await da(s.prefix,n);return Eu(Lu(s,i,n))},ml={sha512Async:async e=>{const t=xu(),n=Mn(e);return Ts(await t.digest("SHA-512",n.buffer))},sha512:void 0},Ru=(e=$u(Bt))=>e,Iu={getExtendedPublicKeyAsync:ua,getExtendedPublicKey:Tu,randomSecretKey:Ru},gs=8,Pu=256,vl=Math.ceil(Pu/gs)+1,ki=2**(gs-1),Du=()=>{const e=[];let t=Ut,n=t;for(let s=0;s<vl;s++){n=t,e.push(n);for(let i=1;i<ki;i++)n=n.add(t),e.push(n);t=n.double()}return e};let ko;const So=(e,t)=>{const n=t.negate();return e?n:t},Fu=e=>{const t=ko||(ko=Du());let n=Xt,s=Ut;const i=2**gs,a=i,o=us(i-1),r=us(gs);for(let l=0;l<vl;l++){let d=Number(e&o);e>>=r,d>ki&&(d-=a,e+=1n);const p=l*ki,g=p,h=p+Math.abs(d)-1,u=l%2!==0,f=d<0;d===0?s=s.add(So(u,t[g])):n=n.add(So(f,t[h]))}return e!==0n&&pe("invalid wnaf"),{p:n,f:s}},Ys="openclaw-device-identity-v1";function Si(e){let t="";for(const n of e)t+=String.fromCharCode(n);return btoa(t).replaceAll("+","-").replaceAll("/","_").replace(/=+$/g,"")}function bl(e){const t=e.replaceAll("-","+").replaceAll("_","/"),n=t+"=".repeat((4-t.length%4)%4),s=atob(n),i=new Uint8Array(s.length);for(let a=0;a<s.length;a+=1)i[a]=s.charCodeAt(a);return i}function Nu(e){return Array.from(e).map(t=>t.toString(16).padStart(2,"0")).join("")}async function yl(e){const t=await crypto.subtle.digest("SHA-256",e.slice().buffer);return Nu(new Uint8Array(t))}async function Ou(){const e=Iu.randomSecretKey(),t=await _u(e);return{deviceId:await yl(t),publicKey:Si(t),privateKey:Si(e)}}async function ga(){try{const n=localStorage.getItem(Ys);if(n){const s=JSON.parse(n);if(s?.version===1&&typeof s.deviceId=="string"&&typeof s.publicKey=="string"&&typeof s.privateKey=="string"){const i=await yl(bl(s.publicKey));if(i!==s.deviceId){const a={...s,deviceId:i};return localStorage.setItem(Ys,JSON.stringify(a)),{deviceId:i,publicKey:s.publicKey,privateKey:s.privateKey}}return{deviceId:s.deviceId,publicKey:s.publicKey,privateKey:s.privateKey}}}}catch{}const e=await Ou(),t={version:1,deviceId:e.deviceId,publicKey:e.publicKey,privateKey:e.privateKey,createdAtMs:Date.now()};return localStorage.setItem(Ys,JSON.stringify(t)),e}async function Bu(e,t){const n=bl(e),s=new TextEncoder().encode(t),i=await Mu(s,n);return Si(i)}async function yt(e,t){if(!(!e.client||!e.connected)&&!e.devicesLoading){e.devicesLoading=!0,t?.quiet||(e.devicesError=null);try{const n=await e.client.request("device.pair.list",{});e.devicesList={pending:Array.isArray(n?.pending)?n.pending:[],paired:Array.isArray(n?.paired)?n.paired:[]}}catch(n){t?.quiet||(e.devicesError=String(n))}finally{e.devicesLoading=!1}}}async function Uu(e,t){if(!(!e.client||!e.connected))try{await e.client.request("device.pair.approve",{requestId:t}),await yt(e)}catch(n){e.devicesError=String(n)}}async function zu(e,t){if(!(!e.client||!e.connected||!window.confirm("Reject this device pairing request?")))try{await e.client.request("device.pair.reject",{requestId:t}),await yt(e)}catch(s){e.devicesError=String(s)}}async function Hu(e,t){if(!(!e.client||!e.connected))try{const n=await e.client.request("device.token.rotate",t);if(n?.token){const s=await ga(),i=n.role??t.role;(n.deviceId===s.deviceId||t.deviceId===s.deviceId)&&il({deviceId:s.deviceId,role:i,token:n.token,scopes:n.scopes??t.scopes??[]}),window.prompt("New device token (copy and store securely):",n.token)}await yt(e)}catch(n){e.devicesError=String(n)}}async function ju(e,t){if(!(!e.client||!e.connected||!window.confirm(`Revoke token for ${t.deviceId} (${t.role})?`)))try{await e.client.request("device.token.revoke",t);const s=await ga();t.deviceId===s.deviceId&&al({deviceId:s.deviceId,role:t.role}),await yt(e)}catch(s){e.devicesError=String(s)}}function Ku(e){if(!e||e.kind==="gateway")return{method:"exec.approvals.get",params:{}};const t=e.nodeId.trim();return t?{method:"exec.approvals.node.get",params:{nodeId:t}}:null}function Wu(e,t){if(!e||e.kind==="gateway")return{method:"exec.approvals.set",params:t};const n=e.nodeId.trim();return n?{method:"exec.approvals.node.set",params:{...t,nodeId:n}}:null}async function pa(e,t){if(!(!e.client||!e.connected)&&!e.execApprovalsLoading){e.execApprovalsLoading=!0,e.lastError=null;try{const n=Ku(t);if(!n){e.lastError="Select a node before loading exec approvals.";return}const s=await e.client.request(n.method,n.params);qu(e,s)}catch(n){e.lastError=String(n)}finally{e.execApprovalsLoading=!1}}}function qu(e,t){e.execApprovalsSnapshot=t,e.execApprovalsDirty||(e.execApprovalsForm=Nt(t.file??{}))}async function Gu(e,t){if(!(!e.client||!e.connected)){e.execApprovalsSaving=!0,e.lastError=null;try{const n=e.execApprovalsSnapshot?.hash;if(!n){e.lastError="Exec approvals hash missing; reload and retry.";return}const s=e.execApprovalsForm??e.execApprovalsSnapshot?.file??{},i=Wu(t,{file:s,baseHash:n});if(!i){e.lastError="Select a node before saving exec approvals.";return}await e.client.request(i.method,i.params),e.execApprovalsDirty=!1,await pa(e,t)}catch(n){e.lastError=String(n)}finally{e.execApprovalsSaving=!1}}}function Vu(e,t,n){const s=Nt(e.execApprovalsForm??e.execApprovalsSnapshot?.file??{});Hr(s,t,n),e.execApprovalsForm=s,e.execApprovalsDirty=!0}function Qu(e,t){const n=Nt(e.execApprovalsForm??e.execApprovalsSnapshot?.file??{});jr(n,t),e.execApprovalsForm=n,e.execApprovalsDirty=!0}async function fa(e){if(!(!e.client||!e.connected)&&!e.presenceLoading){e.presenceLoading=!0,e.presenceError=null,e.presenceStatus=null;try{const t=await e.client.request("system-presence",{});Array.isArray(t)?(e.presenceEntries=t,e.presenceStatus=t.length===0?"No instances yet.":null):(e.presenceEntries=[],e.presenceStatus="No presence payload.")}catch(t){e.presenceError=String(t)}finally{e.presenceLoading=!1}}}async function Ht(e,t){if(!(!e.client||!e.connected)&&!e.sessionsLoading){e.sessionsLoading=!0,e.sessionsError=null;try{const n=t?.includeGlobal??e.sessionsIncludeGlobal,s=t?.includeUnknown??e.sessionsIncludeUnknown,i=t?.activeMinutes??ds(e.sessionsFilterActive,0),a=t?.limit??ds(e.sessionsFilterLimit,0),o={includeGlobal:n,includeUnknown:s};i>0&&(o.activeMinutes=i),a>0&&(o.limit=a);const r=await e.client.request("sessions.list",o);r&&(e.sessionsResult=r)}catch(n){e.sessionsError=String(n)}finally{e.sessionsLoading=!1}}}async function Yu(e,t,n){if(!e.client||!e.connected)return;const s={key:t};"label"in n&&(s.label=n.label),"thinkingLevel"in n&&(s.thinkingLevel=n.thinkingLevel),"verboseLevel"in n&&(s.verboseLevel=n.verboseLevel),"reasoningLevel"in n&&(s.reasoningLevel=n.reasoningLevel);try{await e.client.request("sessions.patch",s),await Ht(e)}catch(i){e.sessionsError=String(i)}}async function Zu(e,t){if(!e.client||!e.connected||e.sessionsLoading||!window.confirm(`Delete session "${t}"?

Deletes the session entry and archives its transcript.`))return!1;e.sessionsLoading=!0,e.sessionsError=null;try{return await e.client.request("sessions.delete",{key:t,deleteTranscript:!0}),!0}catch(s){return e.sessionsError=String(s),!1}finally{e.sessionsLoading=!1}}async function Ju(e,t){return await Zu(e,t)?(await Ht(e),!0):!1}function nn(e,t,n){if(!t.trim())return;const s={...e.skillMessages};n?s[t]=n:delete s[t],e.skillMessages=s}function _s(e){return e instanceof Error?e.message:String(e)}async function Nn(e,t){if(t?.clearMessages&&Object.keys(e.skillMessages).length>0&&(e.skillMessages={}),!(!e.client||!e.connected)&&!e.skillsLoading){e.skillsLoading=!0,e.skillsError=null;try{const n=await e.client.request("skills.status",{});n&&(e.skillsReport=n)}catch(n){e.skillsError=_s(n)}finally{e.skillsLoading=!1}}}function Xu(e,t,n){e.skillEdits={...e.skillEdits,[t]:n}}async function eg(e,t,n){if(!(!e.client||!e.connected)){e.skillsBusyKey=t,e.skillsError=null;try{await e.client.request("skills.update",{skillKey:t,enabled:n}),await Nn(e),nn(e,t,{kind:"success",message:n?"Skill enabled":"Skill disabled"})}catch(s){const i=_s(s);e.skillsError=i,nn(e,t,{kind:"error",message:i})}finally{e.skillsBusyKey=null}}}async function tg(e,t){if(!(!e.client||!e.connected)){e.skillsBusyKey=t,e.skillsError=null;try{const n=e.skillEdits[t]??"";await e.client.request("skills.update",{skillKey:t,apiKey:n}),await Nn(e),nn(e,t,{kind:"success",message:"API key saved"})}catch(n){const s=_s(n);e.skillsError=s,nn(e,t,{kind:"error",message:s})}finally{e.skillsBusyKey=null}}}async function ng(e,t,n,s){if(!(!e.client||!e.connected)){e.skillsBusyKey=t,e.skillsError=null;try{const i=await e.client.request("skills.install",{name:n,installId:s,timeoutMs:12e4});await Nn(e),nn(e,t,{kind:"success",message:i?.message??"Installed"})}catch(i){const a=_s(i);e.skillsError=a,nn(e,t,{kind:"error",message:a})}finally{e.skillsBusyKey=null}}}const sg=[{label:"chat",tabs:["chat"]},{label:"control",tabs:["overview","channels","instances","sessions","usage","cron"]},{label:"agent",tabs:["agents","skills","nodes"]},{label:"settings",tabs:["config","debug","logs"]}],xl={agents:"/agents",overview:"/overview",channels:"/channels",instances:"/instances",sessions:"/sessions",usage:"/usage",cron:"/cron",skills:"/skills",nodes:"/nodes",chat:"/chat",config:"/config",debug:"/debug",logs:"/logs"},$l=new Map(Object.entries(xl).map(([e,t])=>[t,e]));function an(e){if(!e)return"";let t=e.trim();return t.startsWith("/")||(t=`/${t}`),t==="/"?"":(t.endsWith("/")&&(t=t.slice(0,-1)),t)}function Rn(e){if(!e)return"/";let t=e.trim();return t.startsWith("/")||(t=`/${t}`),t.length>1&&t.endsWith("/")&&(t=t.slice(0,-1)),t}function Es(e,t=""){const n=an(t),s=xl[e];return n?`${n}${s}`:s}function wl(e,t=""){const n=an(t);let s=e||"/";n&&(s===n?s="/":s.startsWith(`${n}/`)&&(s=s.slice(n.length)));let i=Rn(s).toLowerCase();return i.endsWith("/index.html")&&(i="/"),i==="/"?"chat":$l.get(i)??null}function ig(e){let t=Rn(e);if(t.endsWith("/index.html")&&(t=Rn(t.slice(0,-11))),t==="/")return"";const n=t.split("/").filter(Boolean);if(n.length===0)return"";for(let s=0;s<n.length;s++){const i=`/${n.slice(s).join("/")}`.toLowerCase();if($l.has(i)){const a=n.slice(0,s);return a.length?`/${a.join("/")}`:""}}return`/${n.join("/")}`}function ag(e){switch(e){case"agents":return"folder";case"chat":return"messageSquare";case"overview":return"barChart";case"channels":return"link";case"instances":return"radio";case"sessions":return"fileText";case"usage":return"barChart";case"cron":return"loader";case"skills":return"zap";case"nodes":return"monitor";case"config":return"settings";case"debug":return"bug";case"logs":return"scrollText";default:return"folder"}}function Ai(e){return P(`tabs.${e}`)}function og(e){return P(`subtitles.${e}`)}const kl="openclaw.control.settings.v1";function rg(){const t={gatewayUrl:`${location.protocol==="https:"?"wss":"ws"}://${location.host}`,token:"",sessionKey:"main",lastActiveSessionKey:"main",theme:"system",chatFocusMode:!1,chatShowThinking:!0,splitRatio:.6,navCollapsed:!1,navGroupsCollapsed:{}};try{const n=localStorage.getItem(kl);if(!n)return t;const s=JSON.parse(n);return{gatewayUrl:typeof s.gatewayUrl=="string"&&s.gatewayUrl.trim()?s.gatewayUrl.trim():t.gatewayUrl,token:typeof s.token=="string"?s.token:t.token,sessionKey:typeof s.sessionKey=="string"&&s.sessionKey.trim()?s.sessionKey.trim():t.sessionKey,lastActiveSessionKey:typeof s.lastActiveSessionKey=="string"&&s.lastActiveSessionKey.trim()?s.lastActiveSessionKey.trim():typeof s.sessionKey=="string"&&s.sessionKey.trim()||t.lastActiveSessionKey,theme:s.theme==="light"||s.theme==="dark"||s.theme==="system"?s.theme:t.theme,chatFocusMode:typeof s.chatFocusMode=="boolean"?s.chatFocusMode:t.chatFocusMode,chatShowThinking:typeof s.chatShowThinking=="boolean"?s.chatShowThinking:t.chatShowThinking,splitRatio:typeof s.splitRatio=="number"&&s.splitRatio>=.4&&s.splitRatio<=.7?s.splitRatio:t.splitRatio,navCollapsed:typeof s.navCollapsed=="boolean"?s.navCollapsed:t.navCollapsed,navGroupsCollapsed:typeof s.navGroupsCollapsed=="object"&&s.navGroupsCollapsed!==null?s.navGroupsCollapsed:t.navGroupsCollapsed,locale:Zi(s.locale)?s.locale:void 0}}catch{return t}}function lg(e){localStorage.setItem(kl,JSON.stringify(e))}const Kn=e=>Number.isNaN(e)?.5:e<=0?0:e>=1?1:e,cg=()=>typeof window>"u"||typeof window.matchMedia!="function"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches??!1,Wn=e=>{e.classList.remove("theme-transition"),e.style.removeProperty("--theme-switch-x"),e.style.removeProperty("--theme-switch-y")},dg=({nextTheme:e,applyTheme:t,context:n,currentTheme:s})=>{if(s===e)return;const i=globalThis.document??null;if(!i){t();return}const a=i.documentElement,o=i,r=cg();if(!!o.startViewTransition&&!r){let d=.5,p=.5;if(n?.pointerClientX!==void 0&&n?.pointerClientY!==void 0&&typeof window<"u")d=Kn(n.pointerClientX/window.innerWidth),p=Kn(n.pointerClientY/window.innerHeight);else if(n?.element){const g=n.element.getBoundingClientRect();g.width>0&&g.height>0&&typeof window<"u"&&(d=Kn((g.left+g.width/2)/window.innerWidth),p=Kn((g.top+g.height/2)/window.innerHeight))}a.style.setProperty("--theme-switch-x",`${d*100}%`),a.style.setProperty("--theme-switch-y",`${p*100}%`),a.classList.add("theme-transition");try{const g=o.startViewTransition?.(()=>{t()});g?.finished?g.finished.finally(()=>Wn(a)):Wn(a)}catch{Wn(a),t()}return}t(),Wn(a)};function ug(){return typeof window>"u"||typeof window.matchMedia!="function"||window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function ha(e){return e==="system"?ug():e}function mt(e,t){const n={...t,lastActiveSessionKey:t.lastActiveSessionKey?.trim()||t.sessionKey.trim()||"main"};e.settings=n,lg(n),t.theme!==e.theme&&(e.theme=t.theme,Ls(e,ha(t.theme))),e.applySessionKey=e.settings.lastActiveSessionKey}function Sl(e,t){const n=t.trim();n&&e.settings.lastActiveSessionKey!==n&&mt(e,{...e.settings,lastActiveSessionKey:n})}function gg(e){if(!window.location.search&&!window.location.hash)return;const t=new URL(window.location.href),n=new URLSearchParams(t.search),s=new URLSearchParams(t.hash.startsWith("#")?t.hash.slice(1):t.hash),i=n.get("token")??s.get("token"),a=n.get("password")??s.get("password"),o=n.get("session")??s.get("session"),r=n.get("gatewayUrl")??s.get("gatewayUrl");let l=!1;if(i!=null){const p=i.trim();p&&p!==e.settings.token&&mt(e,{...e.settings,token:p}),n.delete("token"),s.delete("token"),l=!0}if(a!=null&&(n.delete("password"),s.delete("password"),l=!0),o!=null){const p=o.trim();p&&(e.sessionKey=p,mt(e,{...e.settings,sessionKey:p,lastActiveSessionKey:p}))}if(r!=null){const p=r.trim();p&&p!==e.settings.gatewayUrl&&(e.pendingGatewayUrl=p),n.delete("gatewayUrl"),s.delete("gatewayUrl"),l=!0}if(!l)return;t.search=n.toString();const d=s.toString();t.hash=d?`#${d}`:"",window.history.replaceState({},"",t.toString())}function pg(e,t){e.tab!==t&&(e.tab=t),t==="chat"&&(e.chatHasAutoScrolled=!1),t==="logs"?ea(e):ta(e),t==="debug"?na(e):sa(e),ma(e),Cl(e,t,!1)}function fg(e,t,n){dg({nextTheme:t,applyTheme:()=>{e.theme=t,mt(e,{...e.settings,theme:t}),Ls(e,ha(t))},context:n,currentTheme:e.theme})}async function ma(e){if(e.tab==="overview"&&await Tl(e),e.tab==="channels"&&await wg(e),e.tab==="instances"&&await fa(e),e.tab==="sessions"&&await Ht(e),e.tab==="cron"&&await ps(e),e.tab==="skills"&&await Nn(e),e.tab==="agents"){await ia(e),await Oe(e);const t=e.agentsList?.agents?.map(s=>s.id)??[];t.length>0&&Jr(e,t);const n=e.agentsSelectedId??e.agentsList?.defaultId??e.agentsList?.agents?.[0]?.id;n&&(Zr(e,n),e.agentsPanel==="skills"&&ss(e,n),e.agentsPanel==="channels"&&Ce(e,!1),e.agentsPanel==="cron"&&ps(e))}e.tab==="nodes"&&(await As(e),await yt(e),await Oe(e),await pa(e)),e.tab==="chat"&&(await Fl(e),Dn(e,!e.chatHasAutoScrolled)),e.tab==="config"&&(await Kr(e),await Oe(e)),e.tab==="debug"&&(await Ss(e),e.eventLog=e.eventLogBuffer),e.tab==="logs"&&(e.logsAtBottom=!0,await Xi(e,{reset:!0}),Yr(e,!0))}function hg(){if(typeof window>"u")return"";const e=window.__OPENCLAW_CONTROL_UI_BASE_PATH__;return typeof e=="string"&&e.trim()?an(e):ig(window.location.pathname)}function mg(e){e.theme=e.settings.theme??"system",Ls(e,ha(e.theme))}function Ls(e,t){if(e.themeResolved=t,typeof document>"u")return;const n=document.documentElement;n.dataset.theme=t,n.style.colorScheme=t}function vg(e){if(typeof window>"u"||typeof window.matchMedia!="function")return;if(e.themeMedia=window.matchMedia("(prefers-color-scheme: dark)"),e.themeMediaHandler=n=>{e.theme==="system"&&Ls(e,n.matches?"dark":"light")},typeof e.themeMedia.addEventListener=="function"){e.themeMedia.addEventListener("change",e.themeMediaHandler);return}e.themeMedia.addListener(e.themeMediaHandler)}function bg(e){if(!e.themeMedia||!e.themeMediaHandler)return;if(typeof e.themeMedia.removeEventListener=="function"){e.themeMedia.removeEventListener("change",e.themeMediaHandler);return}e.themeMedia.removeListener(e.themeMediaHandler),e.themeMedia=null,e.themeMediaHandler=null}function yg(e,t){if(typeof window>"u")return;const n=wl(window.location.pathname,e.basePath)??"chat";Al(e,n),Cl(e,n,t)}function xg(e){if(typeof window>"u")return;const t=wl(window.location.pathname,e.basePath);if(!t)return;const s=new URL(window.location.href).searchParams.get("session")?.trim();s&&(e.sessionKey=s,mt(e,{...e.settings,sessionKey:s,lastActiveSessionKey:s})),Al(e,t)}function Al(e,t){e.tab!==t&&(e.tab=t),t==="chat"&&(e.chatHasAutoScrolled=!1),t==="logs"?ea(e):ta(e),t==="debug"?na(e):sa(e),e.connected&&ma(e)}function Cl(e,t,n){if(typeof window>"u")return;const s=Rn(Es(t,e.basePath)),i=Rn(window.location.pathname),a=new URL(window.location.href);t==="chat"&&e.sessionKey?a.searchParams.set("session",e.sessionKey):a.searchParams.delete("session"),i!==s&&(a.pathname=s),n?window.history.replaceState({},"",a.toString()):window.history.pushState({},"",a.toString())}function $g(e,t,n){if(typeof window>"u")return;const s=new URL(window.location.href);s.searchParams.set("session",t),window.history.replaceState({},"",s.toString())}async function Tl(e){await Promise.all([Ce(e,!1),fa(e),Ht(e),Fn(e),Ss(e)])}async function wg(e){await Promise.all([Ce(e,!0),Kr(e),Oe(e)])}async function ps(e){await Promise.all([Ce(e,!1),Fn(e),Cs(e)])}const Ao=50,kg=80,Sg=12e4;function Re(e){if(typeof e!="string")return null;const t=e.trim();return t||null}function Qt(e,t){const n=Re(t);if(!n)return null;const s=Re(e);if(s){const a=`${s}/`;if(n.toLowerCase().startsWith(a.toLowerCase())){const o=n.slice(a.length).trim();if(o)return`${s}/${o}`}return`${s}/${n}`}const i=n.indexOf("/");if(i>0){const a=n.slice(0,i).trim(),o=n.slice(i+1).trim();if(a&&o)return`${a}/${o}`}return n}function Ag(e){return Array.isArray(e)?e.map(t=>Re(t)).filter(t=>!!t):[]}function Cg(e){if(!Array.isArray(e))return[];const t=[];for(const n of e){if(!n||typeof n!="object")continue;const s=n,i=Re(s.provider),a=Re(s.model);if(!i||!a)continue;const o=Re(s.reason)?.replace(/_/g," ")??Re(s.code)??(typeof s.status=="number"?`HTTP ${s.status}`:null)??Re(s.error)??"error";t.push({provider:i,model:a,reason:o})}return t}function Tg(e){if(!e||typeof e!="object")return null;const t=e;if(typeof t.text=="string")return t.text;const n=t.content;if(!Array.isArray(n))return null;const s=n.map(i=>{if(!i||typeof i!="object")return null;const a=i;return a.type==="text"&&typeof a.text=="string"?a.text:null}).filter(i=>!!i);return s.length===0?null:s.join(`
`)}function Co(e){if(e==null)return null;if(typeof e=="number"||typeof e=="boolean")return String(e);const t=Tg(e);let n;if(typeof e=="string")n=e;else if(t)n=t;else try{n=JSON.stringify(e,null,2)}catch{n=String(e)}const s=Xr(n,Sg);return s.truncated?`${s.text}

… truncated (${s.total} chars, showing first ${s.text.length}).`:s.text}function _g(e){const t=[];return t.push({type:"toolcall",name:e.name,arguments:e.args??{}}),e.output&&t.push({type:"toolresult",name:e.name,text:e.output}),{role:"assistant",toolCallId:e.toolCallId,runId:e.runId,content:t,timestamp:e.startedAt}}function Eg(e){if(e.toolStreamOrder.length<=Ao)return;const t=e.toolStreamOrder.length-Ao,n=e.toolStreamOrder.splice(0,t);for(const s of n)e.toolStreamById.delete(s)}function Lg(e){e.chatToolMessages=e.toolStreamOrder.map(t=>e.toolStreamById.get(t)?.message).filter(t=>!!t)}function Ci(e){e.toolStreamSyncTimer!=null&&(clearTimeout(e.toolStreamSyncTimer),e.toolStreamSyncTimer=null),Lg(e)}function Mg(e,t=!1){if(t){Ci(e);return}e.toolStreamSyncTimer==null&&(e.toolStreamSyncTimer=window.setTimeout(()=>Ci(e),kg))}function Ms(e){e.toolStreamById.clear(),e.toolStreamOrder=[],e.chatToolMessages=[],Ci(e)}const Rg=5e3,Ig=8e3;function Pg(e,t){const n=t.data??{},s=typeof n.phase=="string"?n.phase:"";e.compactionClearTimer!=null&&(window.clearTimeout(e.compactionClearTimer),e.compactionClearTimer=null),s==="start"?e.compactionStatus={active:!0,startedAt:Date.now(),completedAt:null}:s==="end"&&(e.compactionStatus={active:!1,startedAt:e.compactionStatus?.startedAt??null,completedAt:Date.now()},e.compactionClearTimer=window.setTimeout(()=>{e.compactionStatus=null,e.compactionClearTimer=null},Rg))}function _l(e,t,n){const s=typeof t.sessionKey=="string"?t.sessionKey:void 0;return s&&s!==e.sessionKey?{accepted:!1}:!e.chatRunId&&n?.allowSessionScopedWhenIdle&&s?{accepted:!0,sessionKey:s}:!s&&e.chatRunId&&t.runId!==e.chatRunId?{accepted:!1}:e.chatRunId&&t.runId!==e.chatRunId?{accepted:!1}:e.chatRunId?{accepted:!0,sessionKey:s}:{accepted:!1}}function Dg(e,t){const n=t.data??{},s=t.stream==="fallback"?"fallback":Re(n.phase);if(t.stream==="lifecycle"&&s!=="fallback"&&s!=="fallback_cleared"||!_l(e,t,{allowSessionScopedWhenIdle:!0}).accepted)return;const a=Qt(n.selectedProvider,n.selectedModel)??Qt(n.fromProvider,n.fromModel),o=Qt(n.activeProvider,n.activeModel)??Qt(n.toProvider,n.toModel),r=Qt(n.previousActiveProvider,n.previousActiveModel)??Re(n.previousActiveModel);if(!a||!o||s==="fallback"&&a===o)return;const l=Re(n.reasonSummary)??Re(n.reason),d=(()=>{const p=Ag(n.attemptSummaries);return p.length>0?p:Cg(n.attempts).map(g=>`${Qt(g.provider,g.model)??`${g.provider}/${g.model}`}: ${g.reason}`)})();e.fallbackClearTimer!=null&&(window.clearTimeout(e.fallbackClearTimer),e.fallbackClearTimer=null),e.fallbackStatus={phase:s==="fallback_cleared"?"cleared":"active",selected:a,active:s==="fallback_cleared"?a:o,previous:s==="fallback_cleared"?r??(o!==a?o:void 0):void 0,reason:l??void 0,attempts:d,occurredAt:Date.now()},e.fallbackClearTimer=window.setTimeout(()=>{e.fallbackStatus=null,e.fallbackClearTimer=null},Ig)}function Fg(e,t){if(!t)return;if(t.stream==="compaction"){Pg(e,t);return}if(t.stream==="lifecycle"||t.stream==="fallback"){Dg(e,t);return}if(t.stream!=="tool")return;const n=_l(e,t);if(!n.accepted)return;const s=n.sessionKey,i=t.data??{},a=typeof i.toolCallId=="string"?i.toolCallId:"";if(!a)return;const o=typeof i.name=="string"?i.name:"tool",r=typeof i.phase=="string"?i.phase:"",l=r==="start"?i.args:void 0,d=r==="update"?Co(i.partialResult):r==="result"?Co(i.result):void 0,p=Date.now();let g=e.toolStreamById.get(a);g?(g.name=o,l!==void 0&&(g.args=l),d!==void 0&&(g.output=d||void 0),g.updatedAt=p):(g={toolCallId:a,runId:t.runId,sessionKey:s,name:o,args:l,output:d||void 0,startedAt:typeof t.ts=="number"?t.ts:p,updatedAt:p,message:{}},e.toolStreamById.set(a,g),e.toolStreamOrder.push(a)),g.message=_g(g),Eg(e),Mg(e,r==="result")}const El=["Conversation info (untrusted metadata):","Sender (untrusted metadata):","Thread starter (untrusted, for context):","Replied message (untrusted, for context):","Forwarded message context (untrusted metadata):","Chat history since last reply (untrusted, for context):"],Ng=new RegExp(El.map(e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("|"));function as(e){if(!e||!Ng.test(e))return e;const t=e.split(`
`),n=[];let s=!1,i=!1;for(let a=0;a<t.length;a++){const o=t[a];if(!s&&El.some(r=>o.startsWith(r))){s=!0,i=!1;continue}if(s){if(!i&&o.trim()==="```json"){i=!0;continue}if(i){o.trim()==="```"&&(s=!1,i=!1);continue}if(o.trim()==="")continue;s=!1}n.push(o)}return n.join(`
`).replace(/^\n+/,"")}const Og=/^\[([^\]]+)\]\s*/,Bg=["WebChat","WhatsApp","Telegram","Signal","Slack","Discord","Google Chat","iMessage","Teams","Matrix","Zalo","Zalo Personal","BlueBubbles"];function Ug(e){return/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}Z\b/.test(e)||/\d{4}-\d{2}-\d{2} \d{2}:\d{2}\b/.test(e)?!0:Bg.some(t=>e.startsWith(`${t} `))}function Yt(e){const t=e.match(Og);if(!t)return e;const n=t[1]??"";return Ug(n)?e.slice(t[0].length):e}const Zs=new WeakMap,Js=new WeakMap;function Ti(e){const t=e,n=typeof t.role=="string"?t.role:"",s=n.toLowerCase()==="user",i=t.content;if(typeof i=="string")return n==="assistant"?qs(i):s?as(Yt(i)):Yt(i);if(Array.isArray(i)){const a=i.map(o=>{const r=o;return r.type==="text"&&typeof r.text=="string"?r.text:null}).filter(o=>typeof o=="string");if(a.length>0){const o=a.join(`
`);return n==="assistant"?qs(o):s?as(Yt(o)):Yt(o)}}return typeof t.text=="string"?n==="assistant"?qs(t.text):s?as(Yt(t.text)):Yt(t.text):null}function Ll(e){if(!e||typeof e!="object")return Ti(e);const t=e;if(Zs.has(t))return Zs.get(t)??null;const n=Ti(e);return Zs.set(t,n),n}function To(e){const n=e.content,s=[];if(Array.isArray(n))for(const r of n){const l=r;if(l.type==="thinking"&&typeof l.thinking=="string"){const d=l.thinking.trim();d&&s.push(d)}}if(s.length>0)return s.join(`
`);const i=Hg(e);if(!i)return null;const o=[...i.matchAll(/<\s*think(?:ing)?\s*>([\s\S]*?)<\s*\/\s*think(?:ing)?\s*>/gi)].map(r=>(r[1]??"").trim()).filter(Boolean);return o.length>0?o.join(`
`):null}function zg(e){if(!e||typeof e!="object")return To(e);const t=e;if(Js.has(t))return Js.get(t)??null;const n=To(e);return Js.set(t,n),n}function Hg(e){const t=e,n=t.content;if(typeof n=="string")return n;if(Array.isArray(n)){const s=n.map(i=>{const a=i;return a.type==="text"&&typeof a.text=="string"?a.text:null}).filter(i=>typeof i=="string");if(s.length>0)return s.join(`
`)}return typeof t.text=="string"?t.text:null}function jg(e){const t=e.trim();if(!t)return"";const n=t.split(/\r?\n/).map(s=>s.trim()).filter(Boolean).map(s=>`_${s}_`);return n.length?["_Reasoning:_",...n].join(`
`):""}let _o=!1;function Eo(e){e[6]=e[6]&15|64,e[8]=e[8]&63|128;let t="";for(let n=0;n<e.length;n++)t+=e[n].toString(16).padStart(2,"0");return`${t.slice(0,8)}-${t.slice(8,12)}-${t.slice(12,16)}-${t.slice(16,20)}-${t.slice(20)}`}function Kg(){const e=new Uint8Array(16),t=Date.now();for(let n=0;n<e.length;n++)e[n]=Math.floor(Math.random()*256);return e[0]^=t&255,e[1]^=t>>>8&255,e[2]^=t>>>16&255,e[3]^=t>>>24&255,e}function Wg(){_o||(_o=!0,console.warn("[uuid] crypto API missing; falling back to weak randomness"))}function va(e=globalThis.crypto){if(e&&typeof e.randomUUID=="function")return e.randomUUID();if(e&&typeof e.getRandomValues=="function"){const t=new Uint8Array(16);return e.getRandomValues(t),Eo(t)}return Wg(),Eo(Kg())}async function In(e){if(!(!e.client||!e.connected)){e.chatLoading=!0,e.lastError=null;try{const t=await e.client.request("chat.history",{sessionKey:e.sessionKey,limit:200});e.chatMessages=Array.isArray(t.messages)?t.messages:[],e.chatThinkingLevel=t.thinkingLevel??null}catch(t){e.lastError=String(t)}finally{e.chatLoading=!1}}}function qg(e){const t=/^data:([^;]+);base64,(.+)$/.exec(e);return t?{mimeType:t[1],content:t[2]}:null}function Gg(e){if(!e||typeof e!="object")return null;const t=e;return t.role!=="assistant"||!("content"in t)||!Array.isArray(t.content)?null:t}async function Vg(e,t,n){if(!e.client||!e.connected)return null;const s=t.trim(),i=n&&n.length>0;if(!s&&!i)return null;const a=Date.now(),o=[];if(s&&o.push({type:"text",text:s}),i)for(const d of n)o.push({type:"image",source:{type:"base64",media_type:d.mimeType,data:d.dataUrl}});e.chatMessages=[...e.chatMessages,{role:"user",content:o,timestamp:a}],e.chatSending=!0,e.lastError=null;const r=va();e.chatRunId=r,e.chatStream="",e.chatStreamStartedAt=a;const l=i?n.map(d=>{const p=qg(d.dataUrl);return p?{type:"image",mimeType:p.mimeType,content:p.content}:null}).filter(d=>d!==null):void 0;try{return await e.client.request("chat.send",{sessionKey:e.sessionKey,message:s,deliver:!1,idempotencyKey:r,attachments:l}),r}catch(d){const p=String(d);return e.chatRunId=null,e.chatStream=null,e.chatStreamStartedAt=null,e.lastError=p,e.chatMessages=[...e.chatMessages,{role:"assistant",content:[{type:"text",text:"Error: "+p}],timestamp:Date.now()}],null}finally{e.chatSending=!1}}async function Qg(e){if(!e.client||!e.connected)return!1;const t=e.chatRunId;try{return await e.client.request("chat.abort",t?{sessionKey:e.sessionKey,runId:t}:{sessionKey:e.sessionKey}),!0}catch(n){return e.lastError=String(n),!1}}function Yg(e,t){if(!t||t.sessionKey!==e.sessionKey)return null;if(t.runId&&e.chatRunId&&t.runId!==e.chatRunId)return t.state==="final"?"final":null;if(t.state==="delta"){const n=Ti(t.message);if(typeof n=="string"){const s=e.chatStream??"";(!s||n.length>=s.length)&&(e.chatStream=n)}}else if(t.state==="final")e.chatStream=null,e.chatRunId=null,e.chatStreamStartedAt=null;else if(t.state==="aborted"){const n=Gg(t.message);if(n)e.chatMessages=[...e.chatMessages,n];else{const s=e.chatStream??"";s.trim()&&(e.chatMessages=[...e.chatMessages,{role:"assistant",content:[{type:"text",text:s}],timestamp:Date.now()}])}e.chatStream=null,e.chatRunId=null,e.chatStreamStartedAt=null}else t.state==="error"&&(e.chatStream=null,e.chatRunId=null,e.chatStreamStartedAt=null,e.lastError=t.errorMessage??"chat error");return t.state}const Ml=120;function Rl(e){return e.chatSending||!!e.chatRunId}function Zg(e){const t=e.trim();if(!t)return!1;const n=t.toLowerCase();return n==="/stop"?!0:n==="stop"||n==="esc"||n==="abort"||n==="wait"||n==="exit"}function Jg(e){const t=e.trim();if(!t)return!1;const n=t.toLowerCase();return n==="/new"||n==="/reset"?!0:n.startsWith("/new ")||n.startsWith("/reset ")}async function Il(e){e.connected&&(e.chatMessage="",await Qg(e))}function Xg(e,t,n,s){const i=t.trim(),a=!!(n&&n.length>0);!i&&!a||(e.chatQueue=[...e.chatQueue,{id:va(),text:i,createdAt:Date.now(),attachments:a?n?.map(o=>({...o})):void 0,refreshSessions:s}])}async function Pl(e,t,n){Ms(e);const s=await Vg(e,t,n?.attachments),i=!!s;return!i&&n?.previousDraft!=null&&(e.chatMessage=n.previousDraft),!i&&n?.previousAttachments&&(e.chatAttachments=n.previousAttachments),i&&Sl(e,e.sessionKey),i&&n?.restoreDraft&&n.previousDraft?.trim()&&(e.chatMessage=n.previousDraft),i&&n?.restoreAttachments&&n.previousAttachments?.length&&(e.chatAttachments=n.previousAttachments),Dn(e),i&&!e.chatRunId&&Dl(e),i&&n?.refreshSessions&&s&&e.refreshSessionsAfterChat.add(s),i}async function Dl(e){if(!e.connected||Rl(e))return;const[t,...n]=e.chatQueue;if(!t)return;e.chatQueue=n,await Pl(e,t.text,{attachments:t.attachments,refreshSessions:t.refreshSessions})||(e.chatQueue=[t,...e.chatQueue])}function ep(e,t){e.chatQueue=e.chatQueue.filter(n=>n.id!==t)}async function tp(e,t,n){if(!e.connected)return;const s=e.chatMessage,i=(t??e.chatMessage).trim(),a=e.chatAttachments??[],o=t==null?a:[],r=o.length>0;if(!i&&!r)return;if(Zg(i)){await Il(e);return}const l=Jg(i);if(t==null&&(e.chatMessage="",e.chatAttachments=[]),Rl(e)){Xg(e,i,o,l);return}await Pl(e,i,{previousDraft:t==null?s:void 0,restoreDraft:!!(t&&n?.restoreDraft),attachments:r?o:void 0,previousAttachments:t==null?a:void 0,restoreAttachments:!!(t&&n?.restoreDraft),refreshSessions:l})}async function Fl(e,t){await Promise.all([In(e),Ht(e,{activeMinutes:Ml}),_i(e)]),t?.scheduleScroll!==!1&&Dn(e)}const np=Dl;function sp(e){const t=Qr(e.sessionKey);return t?.agentId?t.agentId:e.hello?.snapshot?.sessionDefaults?.defaultAgentId?.trim()||"main"}function ip(e,t){const n=an(e),s=encodeURIComponent(t);return n?`${n}/avatar/${s}?meta=1`:`/avatar/${s}?meta=1`}async function _i(e){if(!e.connected){e.chatAvatarUrl=null;return}const t=sp(e);if(!t){e.chatAvatarUrl=null;return}e.chatAvatarUrl=null;const n=ip(e.basePath,t);try{const s=await fetch(n,{method:"GET"});if(!s.ok){e.chatAvatarUrl=null;return}const i=await s.json(),a=typeof i.avatarUrl=="string"?i.avatarUrl.trim():"";e.chatAvatarUrl=a||null}catch{e.chatAvatarUrl=null}}const ap={trace:!0,debug:!0,info:!0,warn:!0,error:!0,fatal:!0},op={name:"",description:"",agentId:"",enabled:!0,scheduleKind:"every",scheduleAt:"",everyAmount:"30",everyUnit:"minutes",cronExpr:"0 7 * * *",cronTz:"",sessionTarget:"isolated",wakeMode:"now",payloadKind:"agentTurn",payloadText:"",deliveryMode:"announce",deliveryChannel:"last",deliveryTo:"",timeoutSeconds:""},rp="update.available",lp=50,cp=200,dp="Assistant";function Lo(e,t){if(typeof e!="string")return;const n=e.trim();if(n)return n.length<=t?n:n.slice(0,t)}function ba(e){const t=Lo(e?.name,lp)??dp,n=Lo(e?.avatar??void 0,cp)??null;return{agentId:typeof e?.agentId=="string"&&e.agentId.trim()?e.agentId.trim():null,name:t,avatar:n}}async function Nl(e,t){if(!e.client||!e.connected)return;const n=e.sessionKey.trim(),s=n?{sessionKey:n}:{};try{const i=await e.client.request("agent.identity.get",s);if(!i)return;const a=ba(i);e.assistantName=a.name,e.assistantAvatar=a.avatar,e.assistantAgentId=a.agentId??null}catch{}}function Ei(e){return typeof e=="object"&&e!==null}function up(e){if(!Ei(e))return null;const t=typeof e.id=="string"?e.id.trim():"",n=e.request;if(!t||!Ei(n))return null;const s=typeof n.command=="string"?n.command.trim():"";if(!s)return null;const i=typeof e.createdAtMs=="number"?e.createdAtMs:0,a=typeof e.expiresAtMs=="number"?e.expiresAtMs:0;return!i||!a?null:{id:t,request:{command:s,cwd:typeof n.cwd=="string"?n.cwd:null,host:typeof n.host=="string"?n.host:null,security:typeof n.security=="string"?n.security:null,ask:typeof n.ask=="string"?n.ask:null,agentId:typeof n.agentId=="string"?n.agentId:null,resolvedPath:typeof n.resolvedPath=="string"?n.resolvedPath:null,sessionKey:typeof n.sessionKey=="string"?n.sessionKey:null},createdAtMs:i,expiresAtMs:a}}function gp(e){if(!Ei(e))return null;const t=typeof e.id=="string"?e.id.trim():"";return t?{id:t,decision:typeof e.decision=="string"?e.decision:null,resolvedBy:typeof e.resolvedBy=="string"?e.resolvedBy:null,ts:typeof e.ts=="number"?e.ts:null}:null}function Ol(e){const t=Date.now();return e.filter(n=>n.expiresAtMs>t)}function pp(e,t){const n=Ol(e).filter(s=>s.id!==t.id);return n.push(t),n}function Mo(e,t){return Ol(e).filter(n=>n.id!==t)}function fp(e){const t=e.version??(e.nonce?"v2":"v1"),n=e.scopes.join(","),s=e.token??"",i=[t,e.deviceId,e.clientId,e.clientMode,e.role,n,String(e.signedAtMs),s];return t==="v2"&&i.push(e.nonce??""),i.join("|")}const Bl={WEBCHAT_UI:"webchat-ui",CONTROL_UI:"openclaw-control-ui",WEBCHAT:"webchat",CLI:"cli",GATEWAY_CLIENT:"gateway-client",MACOS_APP:"openclaw-macos",IOS_APP:"openclaw-ios",ANDROID_APP:"openclaw-android",NODE_HOST:"node-host",TEST:"test",FINGERPRINT:"fingerprint",PROBE:"openclaw-probe"},Ro=Bl,Li={WEBCHAT:"webchat",CLI:"cli",UI:"ui",BACKEND:"backend",NODE:"node",PROBE:"probe",TEST:"test"};new Set(Object.values(Bl));new Set(Object.values(Li));const hp=4008;class mp{constructor(t){this.opts=t,this.ws=null,this.pending=new Map,this.closed=!1,this.lastSeq=null,this.connectNonce=null,this.connectSent=!1,this.connectTimer=null,this.backoffMs=800}start(){this.closed=!1,this.connect()}stop(){this.closed=!0,this.ws?.close(),this.ws=null,this.flushPending(new Error("gateway client stopped"))}get connected(){return this.ws?.readyState===WebSocket.OPEN}connect(){this.closed||(this.ws=new WebSocket(this.opts.url),this.ws.addEventListener("open",()=>this.queueConnect()),this.ws.addEventListener("message",t=>this.handleMessage(String(t.data??""))),this.ws.addEventListener("close",t=>{const n=String(t.reason??"");this.ws=null,this.flushPending(new Error(`gateway closed (${t.code}): ${n}`)),this.opts.onClose?.({code:t.code,reason:n}),this.scheduleReconnect()}),this.ws.addEventListener("error",()=>{}))}scheduleReconnect(){if(this.closed)return;const t=this.backoffMs;this.backoffMs=Math.min(this.backoffMs*1.7,15e3),window.setTimeout(()=>this.connect(),t)}flushPending(t){for(const[,n]of this.pending)n.reject(t);this.pending.clear()}async sendConnect(){if(this.connectSent)return;this.connectSent=!0,this.connectTimer!==null&&(window.clearTimeout(this.connectTimer),this.connectTimer=null);const t=typeof crypto<"u"&&!!crypto.subtle,n=["operator.admin","operator.approvals","operator.pairing"],s="operator";let i=null,a=!1,o=this.opts.token;if(t){i=await ga();const p=fu({deviceId:i.deviceId,role:s})?.token;o=p??this.opts.token,a=!!(p&&this.opts.token)}const r=o||this.opts.password?{token:o,password:this.opts.password}:void 0;let l;if(t&&i){const p=Date.now(),g=this.connectNonce??void 0,h=fp({deviceId:i.deviceId,clientId:this.opts.clientName??Ro.CONTROL_UI,clientMode:this.opts.mode??Li.WEBCHAT,role:s,scopes:n,signedAtMs:p,token:o??null,nonce:g}),u=await Bu(i.privateKey,h);l={id:i.deviceId,publicKey:i.publicKey,signature:u,signedAt:p,nonce:g}}const d={minProtocol:3,maxProtocol:3,client:{id:this.opts.clientName??Ro.CONTROL_UI,version:this.opts.clientVersion??"dev",platform:this.opts.platform??navigator.platform??"web",mode:this.opts.mode??Li.WEBCHAT,instanceId:this.opts.instanceId},role:s,scopes:n,device:l,caps:[],auth:r,userAgent:navigator.userAgent,locale:navigator.language};this.request("connect",d).then(p=>{p?.auth?.deviceToken&&i&&il({deviceId:i.deviceId,role:p.auth.role??s,token:p.auth.deviceToken,scopes:p.auth.scopes??[]}),this.backoffMs=800,this.opts.onHello?.(p)}).catch(()=>{a&&i&&al({deviceId:i.deviceId,role:s}),this.ws?.close(hp,"connect failed")})}handleMessage(t){let n;try{n=JSON.parse(t)}catch{return}const s=n;if(s.type==="event"){const i=n;if(i.event==="connect.challenge"){const o=i.payload,r=o&&typeof o.nonce=="string"?o.nonce:null;r&&(this.connectNonce=r,this.sendConnect());return}const a=typeof i.seq=="number"?i.seq:null;a!==null&&(this.lastSeq!==null&&a>this.lastSeq+1&&this.opts.onGap?.({expected:this.lastSeq+1,received:a}),this.lastSeq=a);try{this.opts.onEvent?.(i)}catch(o){console.error("[gateway] event handler error:",o)}return}if(s.type==="res"){const i=n,a=this.pending.get(i.id);if(!a)return;this.pending.delete(i.id),i.ok?a.resolve(i.payload):a.reject(new Error(i.error?.message??"request failed"));return}}request(t,n){if(!this.ws||this.ws.readyState!==WebSocket.OPEN)return Promise.reject(new Error("gateway not connected"));const s=va(),i={type:"req",id:s,method:t,params:n},a=new Promise((o,r)=>{this.pending.set(s,{resolve:l=>o(l),reject:r})});return this.ws.send(JSON.stringify(i)),a}queueConnect(){this.connectNonce=null,this.connectSent=!1,this.connectTimer!==null&&window.clearTimeout(this.connectTimer),this.connectTimer=window.setTimeout(()=>{this.sendConnect()},750)}}function Xs(e,t){const n=(e??"").trim(),s=t.mainSessionKey?.trim();if(!s)return n;if(!n)return s;const i=t.mainKey?.trim()||"main",a=t.defaultAgentId?.trim();return n==="main"||n===i||a&&(n===`agent:${a}:main`||n===`agent:${a}:${i}`)?s:n}function vp(e,t){if(!t?.mainSessionKey)return;const n=Xs(e.sessionKey,t),s=Xs(e.settings.sessionKey,t),i=Xs(e.settings.lastActiveSessionKey,t),a=n||s||e.sessionKey,o={...e.settings,sessionKey:s||a,lastActiveSessionKey:i||a},r=o.sessionKey!==e.settings.sessionKey||o.lastActiveSessionKey!==e.settings.lastActiveSessionKey;a!==e.sessionKey&&(e.sessionKey=a),r&&mt(e,o)}function Ul(e){e.lastError=null,e.hello=null,e.connected=!1,e.execApprovalQueue=[],e.execApprovalError=null;const t=e.client,n=new mp({url:e.settings.gatewayUrl,token:e.settings.token.trim()?e.settings.token:void 0,password:e.password.trim()?e.password:void 0,clientName:"openclaw-control-ui",mode:"webchat",onHello:s=>{e.client===n&&(e.connected=!0,e.lastError=null,e.hello=s,xp(e,s),e.chatRunId=null,e.chatStream=null,e.chatStreamStartedAt=null,Ms(e),Nl(e),ia(e),As(e,{quiet:!0}),yt(e,{quiet:!0}),ma(e))},onClose:({code:s,reason:i})=>{e.client===n&&(e.connected=!1,s!==1012&&(e.lastError=`disconnected (${s}): ${i||"no reason"}`))},onEvent:s=>{e.client===n&&bp(e,s)},onGap:({expected:s,received:i})=>{e.client===n&&(e.lastError=`event gap detected (expected seq ${s}, got ${i}); refresh recommended`)}});e.client=n,t?.stop(),n.start()}function bp(e,t){try{yp(e,t)}catch(n){console.error("[gateway] handleGatewayEvent error:",t.event,n)}}function yp(e,t){if(e.eventLogBuffer=[{ts:Date.now(),event:t.event,payload:t.payload},...e.eventLogBuffer].slice(0,250),e.tab==="debug"&&(e.eventLog=e.eventLogBuffer),t.event==="agent"){if(e.onboarding)return;Fg(e,t.payload);return}if(t.event==="chat"){const n=t.payload;n?.sessionKey&&Sl(e,n.sessionKey);const s=Yg(e,n);if(s==="final"||s==="error"||s==="aborted"){Ms(e),np(e);const i=n?.runId;i&&e.refreshSessionsAfterChat.has(i)&&(e.refreshSessionsAfterChat.delete(i),s==="final"&&Ht(e,{activeMinutes:Ml}))}s==="final"&&In(e);return}if(t.event==="presence"){const n=t.payload;n?.presence&&Array.isArray(n.presence)&&(e.presenceEntries=n.presence,e.presenceError=null,e.presenceStatus=null);return}if(t.event==="cron"&&e.tab==="cron"&&ps(e),(t.event==="device.pair.requested"||t.event==="device.pair.resolved")&&yt(e,{quiet:!0}),t.event==="exec.approval.requested"){const n=up(t.payload);if(n){e.execApprovalQueue=pp(e.execApprovalQueue,n),e.execApprovalError=null;const s=Math.max(0,n.expiresAtMs-Date.now()+500);window.setTimeout(()=>{e.execApprovalQueue=Mo(e.execApprovalQueue,n.id)},s)}return}if(t.event==="exec.approval.resolved"){const n=gp(t.payload);n&&(e.execApprovalQueue=Mo(e.execApprovalQueue,n.id));return}if(t.event===rp){const n=t.payload;e.updateAvailable=n?.updateAvailable??null}}function xp(e,t){const n=t.snapshot;n?.presence&&Array.isArray(n.presence)&&(e.presenceEntries=n.presence),n?.health&&(e.debugHealth=n.health),n?.sessionDefaults&&vp(e,n.sessionDefaults),e.updateAvailable=n?.updateAvailable??null}const Io="/__openclaw/control-ui-config.json";async function $p(e){if(typeof window>"u"||typeof fetch!="function")return;const t=an(e.basePath??""),n=t?`${t}${Io}`:Io;try{const s=await fetch(n,{method:"GET",headers:{Accept:"application/json"},credentials:"same-origin"});if(!s.ok)return;const i=await s.json(),a=ba({agentId:i.assistantAgentId??null,name:i.assistantName,avatar:i.assistantAvatar??null});e.assistantName=a.name,e.assistantAvatar=a.avatar,e.assistantAgentId=a.agentId??null}catch{}}function wp(e){e.basePath=hg(),$p(e),gg(e),yg(e,!0),mg(e),vg(e),window.addEventListener("popstate",e.popStateHandler),Ul(e),tu(e),e.tab==="logs"&&ea(e),e.tab==="debug"&&na(e)}function kp(e){Vd(e)}function Sp(e){window.removeEventListener("popstate",e.popStateHandler),nu(e),ta(e),sa(e),bg(e),e.topbarObserver?.disconnect(),e.topbarObserver=null}function Ap(e,t){if(!(e.tab==="chat"&&e.chatManualRefreshInFlight)){if(e.tab==="chat"&&(t.has("chatMessages")||t.has("chatToolMessages")||t.has("chatStream")||t.has("chatLoading")||t.has("tab"))){const n=t.has("tab"),s=t.has("chatLoading")&&t.get("chatLoading")===!0&&!e.chatLoading;Dn(e,n||s||!e.chatHasAutoScrolled)}e.tab==="logs"&&(t.has("logsEntries")||t.has("logsAutoFollow")||t.has("tab"))&&e.logsAutoFollow&&e.logsAtBottom&&Yr(e,t.has("tab")||t.has("logsAutoFollow"))}}const zl="openclaw.control.usage.date-params.v1",Cp="__default__",Tp=/unexpected property ['"]mode['"]/i,_p=/unexpected property ['"]utcoffset['"]/i,Ep=/invalid sessions\.usage params/i;let ei=null;function Hl(){return typeof window<"u"&&window.localStorage?window.localStorage:typeof localStorage<"u"?localStorage:null}function Lp(){const e=Hl();if(!e)return new Set;try{const t=e.getItem(zl);if(!t)return new Set;const n=JSON.parse(t);return!n||!Array.isArray(n.unsupportedGatewayKeys)?new Set:new Set(n.unsupportedGatewayKeys.filter(s=>typeof s=="string").map(s=>s.trim()).filter(Boolean))}catch{return new Set}}function Mp(e){const t=Hl();if(t)try{t.setItem(zl,JSON.stringify({unsupportedGatewayKeys:Array.from(e)}))}catch{}}function jl(){return ei||(ei=Lp()),ei}function Rp(e){const t=e?.trim();if(!t)return Cp;try{const n=new URL(t),s=n.pathname==="/"?"":n.pathname;return`${n.protocol}//${n.host}${s}`.toLowerCase()}catch{return t.toLowerCase()}}function Kl(e){return Rp(e.settings?.gatewayUrl)}function Ip(e){return!jl().has(Kl(e))}function Pp(e){const t=jl();t.add(Kl(e)),Mp(t)}function Dp(e){const t=Wl(e);return Ep.test(t)&&(Tp.test(t)||_p.test(t))}const Fp=e=>{const t=-e,n=t>=0?"+":"-",s=Math.abs(t),i=Math.floor(s/60),a=s%60;return a===0?`UTC${n}${i}`:`UTC${n}${i}:${a.toString().padStart(2,"0")}`},Np=(e,t)=>{if(t)return e==="utc"?{mode:"utc"}:{mode:"specific",utcOffset:Fp(new Date().getTimezoneOffset())}};function Wl(e){if(typeof e=="string")return e;if(e instanceof Error&&typeof e.message=="string"&&e.message.trim())return e.message;if(e&&typeof e=="object")try{const t=JSON.stringify(e);if(t)return t}catch{}return"request failed"}async function Mi(e,t){const n=e.client;if(!(!n||!e.connected)&&!e.usageLoading){e.usageLoading=!0,e.usageError=null;try{const s=t?.startDate??e.usageStartDate,i=t?.endDate??e.usageEndDate,a=async l=>{const d=Np(e.usageTimeZone,l);return await Promise.all([n.request("sessions.usage",{startDate:s,endDate:i,...d,limit:1e3,includeContextWeight:!0}),n.request("usage.cost",{startDate:s,endDate:i,...d})])},o=(l,d)=>{l&&(e.usageResult=l),d&&(e.usageCostSummary=d)},r=Ip(e);try{const[l,d]=await a(r);o(l,d)}catch(l){if(r&&Dp(l)){Pp(e);const[d,p]=await a(!1);o(d,p)}else throw l}}catch(s){e.usageError=Wl(s)}finally{e.usageLoading=!1}}}async function Op(e,t){if(!(!e.client||!e.connected)&&!e.usageTimeSeriesLoading){e.usageTimeSeriesLoading=!0,e.usageTimeSeries=null;try{const n=await e.client.request("sessions.usage.timeseries",{key:t});n&&(e.usageTimeSeries=n)}catch{e.usageTimeSeries=null}finally{e.usageTimeSeriesLoading=!1}}}async function Bp(e,t){if(!(!e.client||!e.connected)&&!e.usageSessionLogsLoading){e.usageSessionLogsLoading=!0,e.usageSessionLogs=null;try{const n=await e.client.request("sessions.usage.logs",{key:t,limit:1e3});n&&Array.isArray(n.logs)&&(e.usageSessionLogs=n.logs)}catch{e.usageSessionLogs=null}finally{e.usageSessionLogsLoading=!1}}}const Up=new Set(["agent","channel","chat","provider","model","tool","label","key","session","id","has","mintokens","maxtokens","mincost","maxcost","minmessages","maxmessages"]),fs=e=>e.trim().toLowerCase(),zp=e=>{const t=e.replace(/[.+^${}()|[\]\\]/g,"\\$&").replace(/\*/g,".*").replace(/\?/g,".");return new RegExp(`^${t}$`,"i")},Et=e=>{let t=e.trim().toLowerCase();if(!t)return null;t.startsWith("$")&&(t=t.slice(1));let n=1;t.endsWith("k")?(n=1e3,t=t.slice(0,-1)):t.endsWith("m")&&(n=1e6,t=t.slice(0,-1));const s=Number(t);return Number.isFinite(s)?s*n:null},ya=e=>(e.match(/"[^"]+"|\S+/g)??[]).map(n=>{const s=n.replace(/^"|"$/g,""),i=s.indexOf(":");if(i>0){const a=s.slice(0,i),o=s.slice(i+1);return{key:a,value:o,raw:s}}return{value:s,raw:s}}),Hp=e=>[e.label,e.key,e.sessionId].filter(n=>!!n).map(n=>n.toLowerCase()),Po=e=>{const t=new Set;e.modelProvider&&t.add(e.modelProvider.toLowerCase()),e.providerOverride&&t.add(e.providerOverride.toLowerCase()),e.origin?.provider&&t.add(e.origin.provider.toLowerCase());for(const n of e.usage?.modelUsage??[])n.provider&&t.add(n.provider.toLowerCase());return Array.from(t)},Do=e=>{const t=new Set;e.model&&t.add(e.model.toLowerCase());for(const n of e.usage?.modelUsage??[])n.model&&t.add(n.model.toLowerCase());return Array.from(t)},jp=e=>(e.usage?.toolUsage?.tools??[]).map(t=>t.name.toLowerCase()),Kp=(e,t)=>{const n=fs(t.value??"");if(!n)return!0;if(!t.key)return Hp(e).some(i=>i.includes(n));switch(fs(t.key)){case"agent":return e.agentId?.toLowerCase().includes(n)??!1;case"channel":return e.channel?.toLowerCase().includes(n)??!1;case"chat":return e.chatType?.toLowerCase().includes(n)??!1;case"provider":return Po(e).some(i=>i.includes(n));case"model":return Do(e).some(i=>i.includes(n));case"tool":return jp(e).some(i=>i.includes(n));case"label":return e.label?.toLowerCase().includes(n)??!1;case"key":case"session":case"id":if(n.includes("*")||n.includes("?")){const i=zp(n);return i.test(e.key)||(e.sessionId?i.test(e.sessionId):!1)}return e.key.toLowerCase().includes(n)||(e.sessionId?.toLowerCase().includes(n)??!1);case"has":switch(n){case"tools":return(e.usage?.toolUsage?.totalCalls??0)>0;case"errors":return(e.usage?.messageCounts?.errors??0)>0;case"context":return!!e.contextWeight;case"usage":return!!e.usage;case"model":return Do(e).length>0;case"provider":return Po(e).length>0;default:return!0}case"mintokens":{const i=Et(n);return i===null?!0:(e.usage?.totalTokens??0)>=i}case"maxtokens":{const i=Et(n);return i===null?!0:(e.usage?.totalTokens??0)<=i}case"mincost":{const i=Et(n);return i===null?!0:(e.usage?.totalCost??0)>=i}case"maxcost":{const i=Et(n);return i===null?!0:(e.usage?.totalCost??0)<=i}case"minmessages":{const i=Et(n);return i===null?!0:(e.usage?.messageCounts?.total??0)>=i}case"maxmessages":{const i=Et(n);return i===null?!0:(e.usage?.messageCounts?.total??0)<=i}default:return!0}},Wp=(e,t)=>{const n=ya(t);if(n.length===0)return{sessions:e,warnings:[]};const s=[];for(const a of n){if(!a.key)continue;const o=fs(a.key);if(!Up.has(o)){s.push(`Unknown filter: ${a.key}`);continue}if(a.value===""&&s.push(`Missing value for ${a.key}`),o==="has"){const r=new Set(["tools","errors","context","usage","model","provider"]);a.value&&!r.has(fs(a.value))&&s.push(`Unknown has:${a.value}`)}["mintokens","maxtokens","mincost","maxcost","minmessages","maxmessages"].includes(o)&&a.value&&Et(a.value)===null&&s.push(`Invalid number for ${a.key}`)}return{sessions:e.filter(a=>n.every(o=>Kp(a,o))),warnings:s}};function ql(e){const t=e.split(`
`),n=new Map,s=[];for(const r of t){const l=/^\[Tool:\s*([^\]]+)\]/.exec(r.trim());if(l){const d=l[1];n.set(d,(n.get(d)??0)+1);continue}r.trim().startsWith("[Tool Result]")||s.push(r)}const i=Array.from(n.entries()).toSorted((r,l)=>l[1]-r[1]),a=i.reduce((r,[,l])=>r+l,0),o=i.length>0?`Tools: ${i.map(([r,l])=>`${r}×${l}`).join(", ")} (${a} calls)`:"";return{tools:i,summary:o,cleanContent:s.join(`
`).trim()}}function qp(e){return{byChannel:Array.from(e.byChannelMap.entries()).map(([t,n])=>({channel:t,totals:n})).toSorted((t,n)=>n.totals.totalCost-t.totals.totalCost),latency:e.latencyTotals.count>0?{count:e.latencyTotals.count,avgMs:e.latencyTotals.sum/e.latencyTotals.count,minMs:e.latencyTotals.min===Number.POSITIVE_INFINITY?0:e.latencyTotals.min,maxMs:e.latencyTotals.max,p95Ms:e.latencyTotals.p95Max}:void 0,dailyLatency:Array.from(e.dailyLatencyMap.values()).map(t=>({date:t.date,count:t.count,avgMs:t.count?t.sum/t.count:0,minMs:t.min===Number.POSITIVE_INFINITY?0:t.min,maxMs:t.max,p95Ms:t.p95Max})).toSorted((t,n)=>t.date.localeCompare(n.date)),modelDaily:Array.from(e.modelDailyMap.values()).toSorted((t,n)=>t.date.localeCompare(n.date)||n.cost-t.cost),daily:Array.from(e.dailyMap.values()).toSorted((t,n)=>t.date.localeCompare(n.date))}}const Gp=4;function St(e){return Math.round(e/Gp)}function B(e){return e>=1e6?`${(e/1e6).toFixed(1)}M`:e>=1e3?`${(e/1e3).toFixed(1)}K`:String(e)}function Vp(e){const t=new Date;return t.setHours(e,0,0,0),t.toLocaleTimeString(void 0,{hour:"numeric"})}function Qp(e,t){const n=Array.from({length:24},()=>0),s=Array.from({length:24},()=>0);for(const i of e){const a=i.usage;if(!a?.messageCounts||a.messageCounts.total===0)continue;const o=a.firstActivity??i.updatedAt,r=a.lastActivity??i.updatedAt;if(!o||!r)continue;const l=Math.min(o,r),d=Math.max(o,r),g=Math.max(d-l,1)/6e4;let h=l;for(;h<d;){const u=new Date(h),f=xa(u,t),v=$a(u,t),w=Math.min(v.getTime(),d),C=Math.max((w-h)/6e4,0)/g;n[f]+=a.messageCounts.errors*C,s[f]+=a.messageCounts.total*C,h=w+1}}return s.map((i,a)=>{const o=n[a],r=i>0?o/i:0;return{hour:a,rate:r,errors:o,msgs:i}}).filter(i=>i.msgs>0&&i.errors>0).toSorted((i,a)=>a.rate-i.rate).slice(0,5).map(i=>({label:Vp(i.hour),value:`${(i.rate*100).toFixed(2)}%`,sub:`${Math.round(i.errors)} errors · ${Math.round(i.msgs)} msgs`}))}const Yp=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];function xa(e,t){return t==="utc"?e.getUTCHours():e.getHours()}function Zp(e,t){return t==="utc"?e.getUTCDay():e.getDay()}function $a(e,t){const n=new Date(e);return t==="utc"?n.setUTCMinutes(59,59,999):n.setMinutes(59,59,999),n}function Jp(e,t){const n=Array.from({length:24},()=>0),s=Array.from({length:7},()=>0);let i=0,a=!1;for(const r of e){const l=r.usage;if(!l||!l.totalTokens||l.totalTokens<=0)continue;i+=l.totalTokens;const d=l.firstActivity??r.updatedAt,p=l.lastActivity??r.updatedAt;if(!d||!p)continue;a=!0;const g=Math.min(d,p),h=Math.max(d,p),f=Math.max(h-g,1)/6e4;let v=g;for(;v<h;){const w=new Date(v),S=xa(w,t),C=Zp(w,t),k=$a(w,t),A=Math.min(k.getTime(),h),T=Math.max((A-v)/6e4,0)/f;n[S]+=l.totalTokens*T,s[C]+=l.totalTokens*T,v=A+1}}const o=Yp.map((r,l)=>({label:r,tokens:s[l]}));return{hasData:a,totalTokens:i,hourTotals:n,weekdayTotals:o}}function Xp(e,t,n,s){const i=Jp(e,t);if(!i.hasData)return c`
      <div class="card usage-mosaic">
        <div class="usage-mosaic-header">
          <div>
            <div class="usage-mosaic-title">Activity by Time</div>
            <div class="usage-mosaic-sub">Estimates require session timestamps.</div>
          </div>
          <div class="usage-mosaic-total">${B(0)} tokens</div>
        </div>
        <div class="muted" style="padding: 12px; text-align: center;">No timeline data yet.</div>
      </div>
    `;const a=Math.max(...i.hourTotals,1),o=Math.max(...i.weekdayTotals.map(r=>r.tokens),1);return c`
    <div class="card usage-mosaic">
      <div class="usage-mosaic-header">
        <div>
          <div class="usage-mosaic-title">Activity by Time</div>
          <div class="usage-mosaic-sub">
            Estimated from session spans (first/last activity). Time zone: ${t==="utc"?"UTC":"Local"}.
          </div>
        </div>
        <div class="usage-mosaic-total">${B(i.totalTokens)} tokens</div>
      </div>
      <div class="usage-mosaic-grid">
        <div class="usage-mosaic-section">
          <div class="usage-mosaic-section-title">Day of Week</div>
          <div class="usage-daypart-grid">
            ${i.weekdayTotals.map(r=>{const l=Math.min(r.tokens/o,1),d=r.tokens>0?`rgba(255, 77, 77, ${.12+l*.6})`:"transparent";return c`
                <div class="usage-daypart-cell" style="background: ${d};">
                  <div class="usage-daypart-label">${r.label}</div>
                  <div class="usage-daypart-value">${B(r.tokens)}</div>
                </div>
              `})}
          </div>
        </div>
        <div class="usage-mosaic-section">
          <div class="usage-mosaic-section-title">
            <span>Hours</span>
            <span class="usage-mosaic-sub">0 → 23</span>
          </div>
          <div class="usage-hour-grid">
            ${i.hourTotals.map((r,l)=>{const d=Math.min(r/a,1),p=r>0?`rgba(255, 77, 77, ${.08+d*.7})`:"transparent",g=`${l}:00 · ${B(r)} tokens`,h=d>.7?"rgba(255, 77, 77, 0.6)":"rgba(255, 77, 77, 0.2)",u=n.includes(l);return c`
                <div
                  class="usage-hour-cell ${u?"selected":""}"
                  style="background: ${p}; border-color: ${h};"
                  title="${g}"
                  @click=${f=>s(l,f.shiftKey)}
                ></div>
              `})}
          </div>
          <div class="usage-hour-labels">
            <span>Midnight</span>
            <span>4am</span>
            <span>8am</span>
            <span>Noon</span>
            <span>4pm</span>
            <span>8pm</span>
          </div>
          <div class="usage-hour-legend">
            <span></span>
            Low → High token density
          </div>
        </div>
      </div>
    </div>
  `}function X(e,t=2){return`$${e.toFixed(t)}`}function ti(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}function Gl(e){const t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(e);if(!t)return null;const[,n,s,i]=t,a=new Date(Date.UTC(Number(n),Number(s)-1,Number(i)));return Number.isNaN(a.valueOf())?null:a}function Vl(e){const t=Gl(e);return t?t.toLocaleDateString(void 0,{month:"short",day:"numeric"}):e}function ef(e){const t=Gl(e);return t?t.toLocaleDateString(void 0,{month:"long",day:"numeric",year:"numeric"}):e}const qn=()=>({input:0,output:0,cacheRead:0,cacheWrite:0,totalTokens:0,totalCost:0,inputCost:0,outputCost:0,cacheReadCost:0,cacheWriteCost:0,missingCostEntries:0}),Gn=(e,t)=>{e.input+=t.input??0,e.output+=t.output??0,e.cacheRead+=t.cacheRead??0,e.cacheWrite+=t.cacheWrite??0,e.totalTokens+=t.totalTokens??0,e.totalCost+=t.totalCost??0,e.inputCost+=t.inputCost??0,e.outputCost+=t.outputCost??0,e.cacheReadCost+=t.cacheReadCost??0,e.cacheWriteCost+=t.cacheWriteCost??0,e.missingCostEntries+=t.missingCostEntries??0},tf=(e,t)=>{if(e.length===0)return t??{messages:{total:0,user:0,assistant:0,toolCalls:0,toolResults:0,errors:0},tools:{totalCalls:0,uniqueTools:0,tools:[]},byModel:[],byProvider:[],byAgent:[],byChannel:[],daily:[]};const n={total:0,user:0,assistant:0,toolCalls:0,toolResults:0,errors:0},s=new Map,i=new Map,a=new Map,o=new Map,r=new Map,l=new Map,d=new Map,p=new Map,g={count:0,sum:0,min:Number.POSITIVE_INFINITY,max:0,p95Max:0};for(const u of e){const f=u.usage;if(f){if(f.messageCounts&&(n.total+=f.messageCounts.total,n.user+=f.messageCounts.user,n.assistant+=f.messageCounts.assistant,n.toolCalls+=f.messageCounts.toolCalls,n.toolResults+=f.messageCounts.toolResults,n.errors+=f.messageCounts.errors),f.toolUsage)for(const v of f.toolUsage.tools)s.set(v.name,(s.get(v.name)??0)+v.count);if(f.modelUsage)for(const v of f.modelUsage){const w=`${v.provider??"unknown"}::${v.model??"unknown"}`,S=i.get(w)??{provider:v.provider,model:v.model,count:0,totals:qn()};S.count+=v.count,Gn(S.totals,v.totals),i.set(w,S);const C=v.provider??"unknown",k=a.get(C)??{provider:v.provider,model:void 0,count:0,totals:qn()};k.count+=v.count,Gn(k.totals,v.totals),a.set(C,k)}if(f.latency){const{count:v,avgMs:w,minMs:S,maxMs:C,p95Ms:k}=f.latency;v>0&&(g.count+=v,g.sum+=w*v,g.min=Math.min(g.min,S),g.max=Math.max(g.max,C),g.p95Max=Math.max(g.p95Max,k))}if(u.agentId){const v=o.get(u.agentId)??qn();Gn(v,f),o.set(u.agentId,v)}if(u.channel){const v=r.get(u.channel)??qn();Gn(v,f),r.set(u.channel,v)}for(const v of f.dailyBreakdown??[]){const w=l.get(v.date)??{date:v.date,tokens:0,cost:0,messages:0,toolCalls:0,errors:0};w.tokens+=v.tokens,w.cost+=v.cost,l.set(v.date,w)}for(const v of f.dailyMessageCounts??[]){const w=l.get(v.date)??{date:v.date,tokens:0,cost:0,messages:0,toolCalls:0,errors:0};w.messages+=v.total,w.toolCalls+=v.toolCalls,w.errors+=v.errors,l.set(v.date,w)}for(const v of f.dailyLatency??[]){const w=d.get(v.date)??{date:v.date,count:0,sum:0,min:Number.POSITIVE_INFINITY,max:0,p95Max:0};w.count+=v.count,w.sum+=v.avgMs*v.count,w.min=Math.min(w.min,v.minMs),w.max=Math.max(w.max,v.maxMs),w.p95Max=Math.max(w.p95Max,v.p95Ms),d.set(v.date,w)}for(const v of f.dailyModelUsage??[]){const w=`${v.date}::${v.provider??"unknown"}::${v.model??"unknown"}`,S=p.get(w)??{date:v.date,provider:v.provider,model:v.model,tokens:0,cost:0,count:0};S.tokens+=v.tokens,S.cost+=v.cost,S.count+=v.count,p.set(w,S)}}}const h=qp({byChannelMap:r,latencyTotals:g,dailyLatencyMap:d,modelDailyMap:p,dailyMap:l});return{messages:n,tools:{totalCalls:Array.from(s.values()).reduce((u,f)=>u+f,0),uniqueTools:s.size,tools:Array.from(s.entries()).map(([u,f])=>({name:u,count:f})).toSorted((u,f)=>f.count-u.count)},byModel:Array.from(i.values()).toSorted((u,f)=>f.totals.totalCost-u.totals.totalCost),byProvider:Array.from(a.values()).toSorted((u,f)=>f.totals.totalCost-u.totals.totalCost),byAgent:Array.from(o.entries()).map(([u,f])=>({agentId:u,totals:f})).toSorted((u,f)=>f.totals.totalCost-u.totals.totalCost),...h}},nf=(e,t,n)=>{let s=0,i=0;for(const p of e){const g=p.usage?.durationMs??0;g>0&&(s+=g,i+=1)}const a=i?s/i:0,o=t&&s>0?t.totalTokens/(s/6e4):void 0,r=t&&s>0?t.totalCost/(s/6e4):void 0,l=n.messages.total?n.messages.errors/n.messages.total:0,d=n.daily.filter(p=>p.messages>0&&p.errors>0).map(p=>({date:p.date,errors:p.errors,messages:p.messages,rate:p.errors/p.messages})).toSorted((p,g)=>g.rate-p.rate||g.errors-p.errors)[0];return{durationSumMs:s,durationCount:i,avgDurationMs:a,throughputTokensPerMin:o,throughputCostPerMin:r,errorRate:l,peakErrorDay:d}};function ni(e,t,n="text/plain"){const s=new Blob([t],{type:`${n};charset=utf-8`}),i=URL.createObjectURL(s),a=document.createElement("a");a.href=i,a.download=e,a.click(),URL.revokeObjectURL(i)}function sf(e){return/[",\n]/.test(e)?`"${e.replaceAll('"','""')}"`:e}function hs(e){return e.map(t=>t==null?"":sf(String(t))).join(",")}const af=e=>{const t=[hs(["key","label","agentId","channel","provider","model","updatedAt","durationMs","messages","errors","toolCalls","inputTokens","outputTokens","cacheReadTokens","cacheWriteTokens","totalTokens","totalCost"])];for(const n of e){const s=n.usage;t.push(hs([n.key,n.label??"",n.agentId??"",n.channel??"",n.modelProvider??n.providerOverride??"",n.model??n.modelOverride??"",n.updatedAt?new Date(n.updatedAt).toISOString():"",s?.durationMs??"",s?.messageCounts?.total??"",s?.messageCounts?.errors??"",s?.messageCounts?.toolCalls??"",s?.input??"",s?.output??"",s?.cacheRead??"",s?.cacheWrite??"",s?.totalTokens??"",s?.totalCost??""]))}return t.join(`
`)},of=e=>{const t=[hs(["date","inputTokens","outputTokens","cacheReadTokens","cacheWriteTokens","totalTokens","inputCost","outputCost","cacheReadCost","cacheWriteCost","totalCost"])];for(const n of e)t.push(hs([n.date,n.input,n.output,n.cacheRead,n.cacheWrite,n.totalTokens,n.inputCost??"",n.outputCost??"",n.cacheReadCost??"",n.cacheWriteCost??"",n.totalCost]));return t.join(`
`)},rf=(e,t,n)=>{const s=e.trim();if(!s)return[];const i=s.length?s.split(/\s+/):[],a=i.length?i[i.length-1]:"",[o,r]=a.includes(":")?[a.slice(0,a.indexOf(":")),a.slice(a.indexOf(":")+1)]:["",""],l=o.toLowerCase(),d=r.toLowerCase(),p=C=>{const k=new Set;for(const A of C)A&&k.add(A);return Array.from(k)},g=p(t.map(C=>C.agentId)).slice(0,6),h=p(t.map(C=>C.channel)).slice(0,6),u=p([...t.map(C=>C.modelProvider),...t.map(C=>C.providerOverride),...n?.byProvider.map(C=>C.provider)??[]]).slice(0,6),f=p([...t.map(C=>C.model),...n?.byModel.map(C=>C.model)??[]]).slice(0,6),v=p(n?.tools.tools.map(C=>C.name)??[]).slice(0,6);if(!l)return[{label:"agent:",value:"agent:"},{label:"channel:",value:"channel:"},{label:"provider:",value:"provider:"},{label:"model:",value:"model:"},{label:"tool:",value:"tool:"},{label:"has:errors",value:"has:errors"},{label:"has:tools",value:"has:tools"},{label:"minTokens:",value:"minTokens:"},{label:"maxCost:",value:"maxCost:"}];const w=[],S=(C,k)=>{for(const A of k)(!d||A.toLowerCase().includes(d))&&w.push({label:`${C}:${A}`,value:`${C}:${A}`})};switch(l){case"agent":S("agent",g);break;case"channel":S("channel",h);break;case"provider":S("provider",u);break;case"model":S("model",f);break;case"tool":S("tool",v);break;case"has":["errors","tools","context","usage","model","provider"].forEach(C=>{(!d||C.includes(d))&&w.push({label:`has:${C}`,value:`has:${C}`})});break}return w},lf=(e,t)=>{const n=e.trim();if(!n)return`${t} `;const s=n.split(/\s+/);return s[s.length-1]=t,`${s.join(" ")} `},Lt=e=>e.trim().toLowerCase(),cf=(e,t)=>{const n=e.trim();if(!n)return`${t} `;const s=n.split(/\s+/),i=s[s.length-1]??"",a=t.includes(":")?t.split(":")[0]:null,o=i.includes(":")?i.split(":")[0]:null;return i.endsWith(":")&&a&&o===a?(s[s.length-1]=t,`${s.join(" ")} `):s.includes(t)?`${s.join(" ")} `:`${s.join(" ")} ${t} `},Fo=(e,t)=>{const s=e.trim().split(/\s+/).filter(Boolean).filter(i=>i!==t);return s.length?`${s.join(" ")} `:""},No=(e,t,n)=>{const s=Lt(t),a=[...ya(e).filter(o=>Lt(o.key??"")!==s).map(o=>o.raw),...n.map(o=>`${t}:${o}`)];return a.length?`${a.join(" ")} `:""};function gt(e,t){return t===0?0:e/t*100}function df(e){const t=e.totalCost||0;return{input:{tokens:e.input,cost:e.inputCost||0,pct:gt(e.inputCost||0,t)},output:{tokens:e.output,cost:e.outputCost||0,pct:gt(e.outputCost||0,t)},cacheRead:{tokens:e.cacheRead,cost:e.cacheReadCost||0,pct:gt(e.cacheReadCost||0,t)},cacheWrite:{tokens:e.cacheWrite,cost:e.cacheWriteCost||0,pct:gt(e.cacheWriteCost||0,t)},totalCost:t}}function uf(e,t,n,s,i,a,o,r){if(!(e.length>0||t.length>0||n.length>0))return m;const d=n.length===1?s.find(f=>f.key===n[0]):null,p=d?(d.label||d.key).slice(0,20)+((d.label||d.key).length>20?"…":""):n.length===1?n[0].slice(0,8)+"…":`${n.length} sessions`,g=d?d.label||d.key:n.length===1?n[0]:n.join(", "),h=e.length===1?e[0]:`${e.length} days`,u=t.length===1?`${t[0]}:00`:`${t.length} hours`;return c`
    <div class="active-filters">
      ${e.length>0?c`
            <div class="filter-chip">
              <span class="filter-chip-label">Days: ${h}</span>
              <button class="filter-chip-remove" @click=${i} title="Remove filter">×</button>
            </div>
          `:m}
      ${t.length>0?c`
            <div class="filter-chip">
              <span class="filter-chip-label">Hours: ${u}</span>
              <button class="filter-chip-remove" @click=${a} title="Remove filter">×</button>
            </div>
          `:m}
      ${n.length>0?c`
            <div class="filter-chip" title="${g}">
              <span class="filter-chip-label">Session: ${p}</span>
              <button class="filter-chip-remove" @click=${o} title="Remove filter">×</button>
            </div>
          `:m}
      ${(e.length>0||t.length>0)&&n.length>0?c`
            <button class="btn btn-sm filter-clear-btn" @click=${r}>
              Clear All
            </button>
          `:m}
    </div>
  `}function gf(e,t,n,s,i,a){if(!e.length)return c`
      <div class="daily-chart-compact">
        <div class="sessions-panel-title">Daily Usage</div>
        <div class="muted" style="padding: 20px; text-align: center">No data</div>
      </div>
    `;const o=n==="tokens",r=e.map(g=>o?g.totalTokens:g.totalCost),l=Math.max(...r,o?1:1e-4),d=e.length>30?12:e.length>20?18:e.length>14?24:32,p=e.length<=14;return c`
    <div class="daily-chart-compact">
      <div class="daily-chart-header">
        <div class="chart-toggle small sessions-toggle">
          <button
            class="toggle-btn ${s==="total"?"active":""}"
            @click=${()=>i("total")}
          >
            Total
          </button>
          <button
            class="toggle-btn ${s==="by-type"?"active":""}"
            @click=${()=>i("by-type")}
          >
            By Type
          </button>
        </div>
        <div class="card-title">Daily ${o?"Token":"Cost"} Usage</div>
      </div>
      <div class="daily-chart">
        <div class="daily-chart-bars" style="--bar-max-width: ${d}px">
          ${e.map((g,h)=>{const f=r[h]/l*100,v=t.includes(g.date),w=Vl(g.date),S=e.length>20?String(parseInt(g.date.slice(8),10)):w,C=e.length>20?"font-size: 8px":"",k=s==="by-type"?o?[{value:g.output,class:"output"},{value:g.input,class:"input"},{value:g.cacheWrite,class:"cache-write"},{value:g.cacheRead,class:"cache-read"}]:[{value:g.outputCost??0,class:"output"},{value:g.inputCost??0,class:"input"},{value:g.cacheWriteCost??0,class:"cache-write"},{value:g.cacheReadCost??0,class:"cache-read"}]:[],A=s==="by-type"?o?[`Output ${B(g.output)}`,`Input ${B(g.input)}`,`Cache write ${B(g.cacheWrite)}`,`Cache read ${B(g.cacheRead)}`]:[`Output ${X(g.outputCost??0)}`,`Input ${X(g.inputCost??0)}`,`Cache write ${X(g.cacheWriteCost??0)}`,`Cache read ${X(g.cacheReadCost??0)}`]:[],E=o?B(g.totalTokens):X(g.totalCost);return c`
              <div
                class="daily-bar-wrapper ${v?"selected":""}"
                @click=${T=>a(g.date,T.shiftKey)}
              >
                ${s==="by-type"?c`
                        <div
                          class="daily-bar"
                          style="height: ${f.toFixed(1)}%; display: flex; flex-direction: column;"
                        >
                          ${(()=>{const T=k.reduce((R,H)=>R+H.value,0)||1;return k.map(R=>c`
                                <div
                                  class="cost-segment ${R.class}"
                                  style="height: ${R.value/T*100}%"
                                ></div>
                              `)})()}
                        </div>
                      `:c`
                        <div class="daily-bar" style="height: ${f.toFixed(1)}%"></div>
                      `}
                ${p?c`<div class="daily-bar-total">${E}</div>`:m}
                <div class="daily-bar-label" style="${C}">${S}</div>
                <div class="daily-bar-tooltip">
                  <strong>${ef(g.date)}</strong><br />
                  ${B(g.totalTokens)} tokens<br />
                  ${X(g.totalCost)}
                  ${A.length?c`${A.map(T=>c`<div>${T}</div>`)}`:m}
                </div>
              </div>
            `})}
        </div>
      </div>
    </div>
  `}function pf(e,t){const n=df(e),s=t==="tokens",i=e.totalTokens||1,a={output:gt(e.output,i),input:gt(e.input,i),cacheWrite:gt(e.cacheWrite,i),cacheRead:gt(e.cacheRead,i)};return c`
    <div class="cost-breakdown cost-breakdown-compact">
      <div class="cost-breakdown-header">${s?"Tokens":"Cost"} by Type</div>
      <div class="cost-breakdown-bar">
        <div class="cost-segment output" style="width: ${(s?a.output:n.output.pct).toFixed(1)}%"
          title="Output: ${s?B(e.output):X(n.output.cost)}"></div>
        <div class="cost-segment input" style="width: ${(s?a.input:n.input.pct).toFixed(1)}%"
          title="Input: ${s?B(e.input):X(n.input.cost)}"></div>
        <div class="cost-segment cache-write" style="width: ${(s?a.cacheWrite:n.cacheWrite.pct).toFixed(1)}%"
          title="Cache Write: ${s?B(e.cacheWrite):X(n.cacheWrite.cost)}"></div>
        <div class="cost-segment cache-read" style="width: ${(s?a.cacheRead:n.cacheRead.pct).toFixed(1)}%"
          title="Cache Read: ${s?B(e.cacheRead):X(n.cacheRead.cost)}"></div>
      </div>
      <div class="cost-breakdown-legend">
        <span class="legend-item"><span class="legend-dot output"></span>Output ${s?B(e.output):X(n.output.cost)}</span>
        <span class="legend-item"><span class="legend-dot input"></span>Input ${s?B(e.input):X(n.input.cost)}</span>
        <span class="legend-item"><span class="legend-dot cache-write"></span>Cache Write ${s?B(e.cacheWrite):X(n.cacheWrite.cost)}</span>
        <span class="legend-item"><span class="legend-dot cache-read"></span>Cache Read ${s?B(e.cacheRead):X(n.cacheRead.cost)}</span>
      </div>
      <div class="cost-breakdown-total">
        Total: ${s?B(e.totalTokens):X(e.totalCost)}
      </div>
    </div>
  `}function Mt(e,t,n){return c`
    <div class="usage-insight-card">
      <div class="usage-insight-title">${e}</div>
      ${t.length===0?c`<div class="muted">${n}</div>`:c`
              <div class="usage-list">
                ${t.map(s=>c`
                    <div class="usage-list-item">
                      <span>${s.label}</span>
                      <span class="usage-list-value">
                        <span>${s.value}</span>
                        ${s.sub?c`<span class="usage-list-sub">${s.sub}</span>`:m}
                      </span>
                    </div>
                  `)}
              </div>
            `}
    </div>
  `}function Oo(e,t,n){return c`
    <div class="usage-insight-card">
      <div class="usage-insight-title">${e}</div>
      ${t.length===0?c`<div class="muted">${n}</div>`:c`
              <div class="usage-error-list">
                ${t.map(s=>c`
                    <div class="usage-error-row">
                      <div class="usage-error-date">${s.label}</div>
                      <div class="usage-error-rate">${s.value}</div>
                      ${s.sub?c`<div class="usage-error-sub">${s.sub}</div>`:m}
                    </div>
                  `)}
              </div>
            `}
    </div>
  `}function ff(e,t,n,s,i,a,o){if(!e)return m;const r=t.messages.total?Math.round(e.totalTokens/t.messages.total):0,l=t.messages.total?e.totalCost/t.messages.total:0,d=e.input+e.cacheRead,p=d>0?e.cacheRead/d:0,g=d>0?`${(p*100).toFixed(1)}%`:"—",h=n.errorRate*100,u=n.throughputTokensPerMin!==void 0?`${B(Math.round(n.throughputTokensPerMin))} tok/min`:"—",f=n.throughputCostPerMin!==void 0?`${X(n.throughputCostPerMin,4)} / min`:"—",v=n.durationCount>0?aa(n.avgDurationMs,{spaced:!0})??"—":"—",w="Cache hit rate = cache read / (input + cache read). Higher is better.",S="Error rate = errors / total messages. Lower is better.",C="Throughput shows tokens per minute over active time. Higher is better.",k="Average tokens per message in this range.",A=s?"Average cost per message when providers report costs. Cost data is missing for some or all sessions in this range.":"Average cost per message when providers report costs.",E=t.daily.filter(I=>I.messages>0&&I.errors>0).map(I=>{const q=I.errors/I.messages;return{label:Vl(I.date),value:`${(q*100).toFixed(2)}%`,sub:`${I.errors} errors · ${I.messages} msgs · ${B(I.tokens)}`,rate:q}}).toSorted((I,q)=>q.rate-I.rate).slice(0,5).map(({rate:I,...q})=>q),T=t.byModel.slice(0,5).map(I=>({label:I.model??"unknown",value:X(I.totals.totalCost),sub:`${B(I.totals.totalTokens)} · ${I.count} msgs`})),R=t.byProvider.slice(0,5).map(I=>({label:I.provider??"unknown",value:X(I.totals.totalCost),sub:`${B(I.totals.totalTokens)} · ${I.count} msgs`})),H=t.tools.tools.slice(0,6).map(I=>({label:I.name,value:`${I.count}`,sub:"calls"})),Z=t.byAgent.slice(0,5).map(I=>({label:I.agentId,value:X(I.totals.totalCost),sub:B(I.totals.totalTokens)})),te=t.byChannel.slice(0,5).map(I=>({label:I.channel,value:X(I.totals.totalCost),sub:B(I.totals.totalTokens)}));return c`
    <section class="card" style="margin-top: 16px;">
      <div class="card-title">Usage Overview</div>
      <div class="usage-summary-grid">
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            Messages
            <span class="usage-summary-hint" title="Total user + assistant messages in range.">?</span>
          </div>
          <div class="usage-summary-value">${t.messages.total}</div>
          <div class="usage-summary-sub">
            ${t.messages.user} user · ${t.messages.assistant} assistant
          </div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            Tool Calls
            <span class="usage-summary-hint" title="Total tool call count across sessions.">?</span>
          </div>
          <div class="usage-summary-value">${t.tools.totalCalls}</div>
          <div class="usage-summary-sub">${t.tools.uniqueTools} tools used</div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            Errors
            <span class="usage-summary-hint" title="Total message/tool errors in range.">?</span>
          </div>
          <div class="usage-summary-value">${t.messages.errors}</div>
          <div class="usage-summary-sub">${t.messages.toolResults} tool results</div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            Avg Tokens / Msg
            <span class="usage-summary-hint" title=${k}>?</span>
          </div>
          <div class="usage-summary-value">${B(r)}</div>
          <div class="usage-summary-sub">Across ${t.messages.total||0} messages</div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            Avg Cost / Msg
            <span class="usage-summary-hint" title=${A}>?</span>
          </div>
          <div class="usage-summary-value">${X(l,4)}</div>
          <div class="usage-summary-sub">${X(e.totalCost)} total</div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            Sessions
            <span class="usage-summary-hint" title="Distinct sessions in the range.">?</span>
          </div>
          <div class="usage-summary-value">${a}</div>
          <div class="usage-summary-sub">of ${o} in range</div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            Throughput
            <span class="usage-summary-hint" title=${C}>?</span>
          </div>
          <div class="usage-summary-value">${u}</div>
          <div class="usage-summary-sub">${f}</div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            Error Rate
            <span class="usage-summary-hint" title=${S}>?</span>
          </div>
          <div class="usage-summary-value ${h>5?"bad":h>1?"warn":"good"}">${h.toFixed(2)}%</div>
          <div class="usage-summary-sub">
            ${t.messages.errors} errors · ${v} avg session
          </div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            Cache Hit Rate
            <span class="usage-summary-hint" title=${w}>?</span>
          </div>
          <div class="usage-summary-value ${p>.6?"good":p>.3?"warn":"bad"}">${g}</div>
          <div class="usage-summary-sub">
            ${B(e.cacheRead)} cached · ${B(d)} prompt
          </div>
        </div>
      </div>
      <div class="usage-insights-grid">
        ${Mt("Top Models",T,"No model data")}
        ${Mt("Top Providers",R,"No provider data")}
        ${Mt("Top Tools",H,"No tool calls")}
        ${Mt("Top Agents",Z,"No agent data")}
        ${Mt("Top Channels",te,"No channel data")}
        ${Oo("Peak Error Days",E,"No error data")}
        ${Oo("Peak Error Hours",i,"No error data")}
      </div>
    </section>
  `}function hf(e,t,n,s,i,a,o,r,l,d,p,g,h,u,f){const v=_=>h.includes(_),w=_=>{const j=_.label||_.key;return j.startsWith("agent:")&&j.includes("?token=")?j.slice(0,j.indexOf("?token=")):j},S=async _=>{const j=w(_);try{await navigator.clipboard.writeText(j)}catch{}},C=_=>{const j=[];return v("channel")&&_.channel&&j.push(`channel:${_.channel}`),v("agent")&&_.agentId&&j.push(`agent:${_.agentId}`),v("provider")&&(_.modelProvider||_.providerOverride)&&j.push(`provider:${_.modelProvider??_.providerOverride}`),v("model")&&_.model&&j.push(`model:${_.model}`),v("messages")&&_.usage?.messageCounts&&j.push(`msgs:${_.usage.messageCounts.total}`),v("tools")&&_.usage?.toolUsage&&j.push(`tools:${_.usage.toolUsage.totalCalls}`),v("errors")&&_.usage?.messageCounts&&j.push(`errors:${_.usage.messageCounts.errors}`),v("duration")&&_.usage?.durationMs&&j.push(`dur:${aa(_.usage.durationMs,{spaced:!0})??"—"}`),j},k=_=>{const j=_.usage;if(!j)return 0;if(n.length>0&&j.dailyBreakdown&&j.dailyBreakdown.length>0){const Q=j.dailyBreakdown.filter(re=>n.includes(re.date));return s?Q.reduce((re,fe)=>re+fe.tokens,0):Q.reduce((re,fe)=>re+fe.cost,0)}return s?j.totalTokens??0:j.totalCost??0},A=[...e].toSorted((_,j)=>{switch(i){case"recent":return(j.updatedAt??0)-(_.updatedAt??0);case"messages":return(j.usage?.messageCounts?.total??0)-(_.usage?.messageCounts?.total??0);case"errors":return(j.usage?.messageCounts?.errors??0)-(_.usage?.messageCounts?.errors??0);case"cost":return k(j)-k(_);default:return k(j)-k(_)}}),E=a==="asc"?A.toReversed():A,T=E.reduce((_,j)=>_+k(j),0),R=E.length?T/E.length:0,H=E.reduce((_,j)=>_+(j.usage?.messageCounts?.errors??0),0),Z=(_,j)=>{const Q=k(_),re=w(_),fe=C(_);return c`
      <div
        class="session-bar-row ${j?"selected":""}"
        @click=${M=>l(_.key,M.shiftKey)}
        title="${_.key}"
      >
        <div class="session-bar-label">
          <div class="session-bar-title">${re}</div>
          ${fe.length>0?c`<div class="session-bar-meta">${fe.join(" · ")}</div>`:m}
        </div>
        <div class="session-bar-track" style="display: none;"></div>
        <div class="session-bar-actions">
          <button
            class="session-copy-btn"
            title="Copy session name"
            @click=${M=>{M.stopPropagation(),S(_)}}
          >
            Copy
          </button>
          <div class="session-bar-value">${s?B(Q):X(Q)}</div>
        </div>
      </div>
    `},te=new Set(t),I=E.filter(_=>te.has(_.key)),q=I.length,ne=new Map(E.map(_=>[_.key,_])),oe=o.map(_=>ne.get(_)).filter(_=>!!_);return c`
    <div class="card sessions-card">
      <div class="sessions-card-header">
        <div class="card-title">Sessions</div>
        <div class="sessions-card-count">
          ${e.length} shown${u!==e.length?` · ${u} total`:""}
        </div>
      </div>
      <div class="sessions-card-meta">
        <div class="sessions-card-stats">
          <span>${s?B(R):X(R)} avg</span>
          <span>${H} errors</span>
        </div>
        <div class="chart-toggle small">
          <button
            class="toggle-btn ${r==="all"?"active":""}"
            @click=${()=>g("all")}
          >
            All
          </button>
          <button
            class="toggle-btn ${r==="recent"?"active":""}"
            @click=${()=>g("recent")}
          >
            Recently viewed
          </button>
        </div>
        <label class="sessions-sort">
          <span>Sort</span>
          <select
            @change=${_=>d(_.target.value)}
          >
            <option value="cost" ?selected=${i==="cost"}>Cost</option>
            <option value="errors" ?selected=${i==="errors"}>Errors</option>
            <option value="messages" ?selected=${i==="messages"}>Messages</option>
            <option value="recent" ?selected=${i==="recent"}>Recent</option>
            <option value="tokens" ?selected=${i==="tokens"}>Tokens</option>
          </select>
        </label>
        <button
          class="btn btn-sm sessions-action-btn icon"
          @click=${()=>p(a==="desc"?"asc":"desc")}
          title=${a==="desc"?"Descending":"Ascending"}
        >
          ${a==="desc"?"↓":"↑"}
        </button>
        ${q>0?c`
                <button class="btn btn-sm sessions-action-btn sessions-clear-btn" @click=${f}>
                  Clear Selection
                </button>
              `:m}
      </div>
      ${r==="recent"?oe.length===0?c`
                <div class="muted" style="padding: 20px; text-align: center">No recent sessions</div>
              `:c`
	                <div class="session-bars" style="max-height: 220px; margin-top: 6px;">
	                  ${oe.map(_=>Z(_,te.has(_.key)))}
	                </div>
	              `:e.length===0?c`
                <div class="muted" style="padding: 20px; text-align: center">No sessions in range</div>
              `:c`
	                <div class="session-bars">
	                  ${E.slice(0,50).map(_=>Z(_,te.has(_.key)))}
	                  ${e.length>50?c`<div class="muted" style="padding: 8px; text-align: center; font-size: 11px;">+${e.length-50} more</div>`:m}
	                </div>
	              `}
      ${q>1?c`
              <div style="margin-top: 10px;">
                <div class="sessions-card-count">Selected (${q})</div>
                <div class="session-bars" style="max-height: 160px; margin-top: 6px;">
                  ${I.map(_=>Z(_,!0))}
                </div>
              </div>
            `:m}
    </div>
  `}const mf=.75,vf=8,bf=.06,Vn=5,Le=12,ct=.7;function pt(e,t){return!t||t<=0?0:e/t*100}function yf(){return m}function Ql(e){return e<1e12?e*1e3:e}function xf(e,t,n){const s=Math.min(t,n),i=Math.max(t,n);return e.filter(a=>{if(a.timestamp<=0)return!0;const o=Ql(a.timestamp);return o>=s&&o<=i})}function $f(e,t,n){const s=t||e.usage;if(!s)return c`
      <div class="muted">No usage data for this session.</div>
    `;const i=g=>g?new Date(g).toLocaleString():"—",a=[];e.channel&&a.push(`channel:${e.channel}`),e.agentId&&a.push(`agent:${e.agentId}`),(e.modelProvider||e.providerOverride)&&a.push(`provider:${e.modelProvider??e.providerOverride}`),e.model&&a.push(`model:${e.model}`);const o=s.toolUsage?.tools.slice(0,6)??[];let r,l,d;if(n){const g=new Map;for(const h of n){const{tools:u}=ql(h.content);for(const[f]of u)g.set(f,(g.get(f)||0)+1)}d=o.map(h=>({label:h.name,value:`${g.get(h.name)??0}`,sub:"calls"})),r=[...g.values()].reduce((h,u)=>h+u,0),l=g.size}else d=o.map(g=>({label:g.name,value:`${g.count}`,sub:"calls"})),r=s.toolUsage?.totalCalls??0,l=s.toolUsage?.uniqueTools??0;const p=s.modelUsage?.slice(0,6).map(g=>({label:g.model??"unknown",value:X(g.totals.totalCost),sub:B(g.totals.totalTokens)}))??[];return c`
    ${a.length>0?c`<div class="usage-badges">${a.map(g=>c`<span class="usage-badge">${g}</span>`)}</div>`:m}
    <div class="session-summary-grid">
      <div class="session-summary-card">
        <div class="session-summary-title">Messages</div>
        <div class="session-summary-value">${s.messageCounts?.total??0}</div>
        <div class="session-summary-meta">${s.messageCounts?.user??0} user · ${s.messageCounts?.assistant??0} assistant</div>
      </div>
      <div class="session-summary-card">
        <div class="session-summary-title">Tool Calls</div>
        <div class="session-summary-value">${r}</div>
        <div class="session-summary-meta">${l} tools</div>
      </div>
      <div class="session-summary-card">
        <div class="session-summary-title">Errors</div>
        <div class="session-summary-value">${s.messageCounts?.errors??0}</div>
        <div class="session-summary-meta">${s.messageCounts?.toolResults??0} tool results</div>
      </div>
      <div class="session-summary-card">
        <div class="session-summary-title">Duration</div>
        <div class="session-summary-value">${aa(s.durationMs,{spaced:!0})??"—"}</div>
        <div class="session-summary-meta">${i(s.firstActivity)} → ${i(s.lastActivity)}</div>
      </div>
    </div>
    <div class="usage-insights-grid" style="margin-top: 12px;">
      ${Mt("Top Tools",d,"No tool calls")}
      ${Mt("Model Mix",p,"No model data")}
    </div>
  `}function wf(e,t,n,s){const i=Math.min(n,s),a=Math.max(n,s),o=t.filter(v=>v.timestamp>=i&&v.timestamp<=a);if(o.length===0)return;let r=0,l=0,d=0,p=0,g=0,h=0,u=0,f=0;for(const v of o)r+=v.totalTokens||0,l+=v.cost||0,g+=v.input||0,h+=v.output||0,u+=v.cacheRead||0,f+=v.cacheWrite||0,v.output>0&&p++,v.input>0&&d++;return{...e,totalTokens:r,totalCost:l,input:g,output:h,cacheRead:u,cacheWrite:f,durationMs:o[o.length-1].timestamp-o[0].timestamp,firstActivity:o[0].timestamp,lastActivity:o[o.length-1].timestamp,messageCounts:{total:o.length,user:d,assistant:p,toolCalls:0,toolResults:0,errors:0}}}function kf(e,t,n,s,i,a,o,r,l,d,p,g,h,u,f,v,w,S,C,k,A,E,T,R,H,Z){const te=e.label||e.key,I=te.length>50?te.slice(0,50)+"…":te,q=e.usage,ne=r!==null&&l!==null,oe=r!==null&&l!==null&&t?.points&&q?wf(q,t.points,r,l):void 0,_=oe?{totalTokens:oe.totalTokens,totalCost:oe.totalCost}:{totalTokens:q?.totalTokens??0,totalCost:q?.totalCost??0},j=oe?" (filtered)":"";return c`
    <div class="card session-detail-panel">
      <div class="session-detail-header">
        <div class="session-detail-header-left">
          <div class="session-detail-title">
            ${I}
            ${j?c`<span style="font-size: 11px; color: var(--muted); margin-left: 8px;">${j}</span>`:m}
          </div>
        </div>
        <div class="session-detail-stats">
          ${q?c`
            <span><strong>${B(_.totalTokens)}</strong> tokens${j}</span>
            <span><strong>${X(_.totalCost)}</strong>${j}</span>
          `:m}
        </div>
        <button class="session-close-btn" @click=${Z} title="Close session details">×</button>
      </div>
      <div class="session-detail-content">
        ${$f(e,oe,r!=null&&l!=null&&u?xf(u,r,l):void 0)}
        <div class="session-detail-row">
          ${Sf(t,n,s,i,a,o,p,g,h,r,l,d)}
        </div>
        <div class="session-detail-bottom">
          ${Cf(u,f,v,w,S,C,k,A,E,T,ne?r:null,ne?l:null)}
          ${Af(e.contextWeight,q,R,H)}
        </div>
      </div>
    </div>
  `}function Sf(e,t,n,s,i,a,o,r,l,d,p,g){if(t)return c`
      <div class="session-timeseries-compact">
        <div class="muted" style="padding: 20px; text-align: center">Loading...</div>
      </div>
    `;if(!e||e.points.length<2)return c`
      <div class="session-timeseries-compact">
        <div class="muted" style="padding: 20px; text-align: center">No timeline data</div>
      </div>
    `;let h=e.points;if(o||r||l&&l.length>0){const z=o?new Date(o+"T00:00:00").getTime():0,ie=r?new Date(r+"T23:59:59").getTime():1/0;h=e.points.filter(le=>{if(le.timestamp<z||le.timestamp>ie)return!1;if(l&&l.length>0){const he=new Date(le.timestamp),Te=`${he.getFullYear()}-${String(he.getMonth()+1).padStart(2,"0")}-${String(he.getDate()).padStart(2,"0")}`;return l.includes(Te)}return!0})}if(h.length<2)return c`
      <div class="session-timeseries-compact">
        <div class="muted" style="padding: 20px; text-align: center">No data in range</div>
      </div>
    `;let u=0,f=0,v=0,w=0,S=0,C=0;h=h.map(z=>(u+=z.totalTokens,f+=z.cost,v+=z.output,w+=z.input,S+=z.cacheRead,C+=z.cacheWrite,{...z,cumulativeTokens:u,cumulativeCost:f}));const k=d!=null&&p!=null,A=k?Math.min(d,p):0,E=k?Math.max(d,p):1/0;let T=0,R=h.length;if(k){T=h.findIndex(ie=>ie.timestamp>=A),T===-1&&(T=h.length);const z=h.findIndex(ie=>ie.timestamp>E);R=z===-1?h.length:z}const H=k?h.slice(T,R):h;let Z=0,te=0,I=0,q=0;for(const z of H)Z+=z.output,te+=z.input,I+=z.cacheRead,q+=z.cacheWrite;const ne=400,oe=100,_={top:8,right:4,bottom:14,left:30},j=ne-_.left-_.right,Q=oe-_.top-_.bottom,re=n==="cumulative",fe=n==="per-turn"&&i==="by-type",M=Z+te+I+q,D=h.map(z=>re?z.cumulativeTokens:fe?z.input+z.output+z.cacheRead+z.cacheWrite:z.totalTokens),F=Math.max(...D,1),K=j/h.length,ce=Math.min(vf,Math.max(1,K*mf)),J=K-ce,se=_.left+T*(ce+J),G=R>=h.length?_.left+(h.length-1)*(ce+J)+ce:_.left+(R-1)*(ce+J)+ce;return c`
    <div class="session-timeseries-compact">
      <div class="timeseries-header-row">
        <div class="card-title" style="font-size: 12px; color: var(--text);">Usage Over Time</div>
        <div class="timeseries-controls">
          ${k?c`
            <div class="chart-toggle small">
              <button class="toggle-btn active" @click=${()=>g?.(null,null)}>Reset</button>
            </div>
          `:m}
          <div class="chart-toggle small">
            <button
              class="toggle-btn ${re?"":"active"}"
              @click=${()=>s("per-turn")}
            >
              Per Turn
            </button>
            <button
              class="toggle-btn ${re?"active":""}"
              @click=${()=>s("cumulative")}
            >
              Cumulative
            </button>
          </div>
          ${re?m:c`
                  <div class="chart-toggle small">
                    <button
                      class="toggle-btn ${i==="total"?"active":""}"
                      @click=${()=>a("total")}
                    >
                      Total
                    </button>
                    <button
                      class="toggle-btn ${i==="by-type"?"active":""}"
                      @click=${()=>a("by-type")}
                    >
                      By Type
                    </button>
                  </div>
                `}
        </div>
      </div>
      <div class="timeseries-chart-wrapper" style="position: relative; cursor: crosshair;">
        <svg 
          viewBox="0 0 ${ne} ${oe+18}" 
          class="timeseries-svg" 
          style="width: 100%; height: auto; display: block;"
        >
          <!-- Y axis -->
          <line x1="${_.left}" y1="${_.top}" x2="${_.left}" y2="${_.top+Q}" stroke="var(--border)" />
          <!-- X axis -->
          <line x1="${_.left}" y1="${_.top+Q}" x2="${ne-_.right}" y2="${_.top+Q}" stroke="var(--border)" />
          <!-- Y axis labels -->
          <text x="${_.left-4}" y="${_.top+5}" text-anchor="end" class="ts-axis-label">${B(F)}</text>
          <text x="${_.left-4}" y="${_.top+Q}" text-anchor="end" class="ts-axis-label">0</text>
          <!-- X axis labels (first and last) -->
          ${h.length>0?kt`
            <text x="${_.left}" y="${_.top+Q+10}" text-anchor="start" class="ts-axis-label">${new Date(h[0].timestamp).toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"})}</text>
            <text x="${ne-_.right}" y="${_.top+Q+10}" text-anchor="end" class="ts-axis-label">${new Date(h[h.length-1].timestamp).toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"})}</text>
          `:m}
          <!-- Bars -->
          ${h.map((z,ie)=>{const le=D[ie],he=_.left+ie*(ce+J),Te=le/F*Q,qe=_.top+Q-Te,me=[new Date(z.timestamp).toLocaleDateString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),`${B(le)} tokens`];fe&&(me.push(`Out ${B(z.output)}`),me.push(`In ${B(z.input)}`),me.push(`CW ${B(z.cacheWrite)}`),me.push(`CR ${B(z.cacheRead)}`));const Be=me.join(" · "),Ge=k&&(ie<T||ie>=R);if(!fe)return kt`<rect x="${he}" y="${qe}" width="${ce}" height="${Te}" class="ts-bar${Ge?" dimmed":""}" rx="1"><title>${Be}</title></rect>`;const Ve=[{value:z.output,cls:"output"},{value:z.input,cls:"input"},{value:z.cacheWrite,cls:"cache-write"},{value:z.cacheRead,cls:"cache-read"}];let Qe=_.top+Q;const at=Ge?" dimmed":"";return kt`
              ${Ve.map(ot=>{if(ot.value<=0||le<=0)return m;const xt=Te*(ot.value/le);return Qe-=xt,kt`<rect x="${he}" y="${Qe}" width="${ce}" height="${xt}" class="ts-bar ${ot.cls}${at}" rx="1"><title>${Be}</title></rect>`})}
            `})}
          <!-- Selection highlight overlay (always visible between handles) -->
          ${kt`
            <rect 
              x="${se}" 
              y="${_.top}" 
              width="${Math.max(1,G-se)}" 
              height="${Q}" 
              fill="var(--accent)" 
              opacity="${bf}" 
              pointer-events="none"
            />
          `}
          <!-- Left cursor line + handle -->
          ${kt`
            <line x1="${se}" y1="${_.top}" x2="${se}" y2="${_.top+Q}" stroke="var(--accent)" stroke-width="0.8" opacity="0.7" />
            <rect x="${se-Vn/2}" y="${_.top+Q/2-Le/2}" width="${Vn}" height="${Le}" rx="1.5" fill="var(--accent)" class="cursor-handle" />
            <line x1="${se-ct}" y1="${_.top+Q/2-Le/5}" x2="${se-ct}" y2="${_.top+Q/2+Le/5}" stroke="var(--bg)" stroke-width="0.4" pointer-events="none" />
            <line x1="${se+ct}" y1="${_.top+Q/2-Le/5}" x2="${se+ct}" y2="${_.top+Q/2+Le/5}" stroke="var(--bg)" stroke-width="0.4" pointer-events="none" />
          `}
          <!-- Right cursor line + handle -->
          ${kt`
            <line x1="${G}" y1="${_.top}" x2="${G}" y2="${_.top+Q}" stroke="var(--accent)" stroke-width="0.8" opacity="0.7" />
            <rect x="${G-Vn/2}" y="${_.top+Q/2-Le/2}" width="${Vn}" height="${Le}" rx="1.5" fill="var(--accent)" class="cursor-handle" />
            <line x1="${G-ct}" y1="${_.top+Q/2-Le/5}" x2="${G-ct}" y2="${_.top+Q/2+Le/5}" stroke="var(--bg)" stroke-width="0.4" pointer-events="none" />
            <line x1="${G+ct}" y1="${_.top+Q/2-Le/5}" x2="${G+ct}" y2="${_.top+Q/2+Le/5}" stroke="var(--bg)" stroke-width="0.4" pointer-events="none" />
          `}
        </svg>
        <!-- Handle drag zones (only on handles, not full chart) -->
        ${(()=>{const z=`${(se/ne*100).toFixed(1)}%`,ie=`${(G/ne*100).toFixed(1)}%`,le=he=>Te=>{if(!g)return;Te.preventDefault(),Te.stopPropagation();const it=Te.currentTarget.closest(".timeseries-chart-wrapper")?.querySelector("svg");if(!it)return;const me=it.getBoundingClientRect(),Be=me.width,Ge=_.left/ne*Be,Qe=(ne-_.right)/ne*Be-Ge,at=Ue=>{const Se=Math.max(0,Math.min(1,(Ue-me.left-Ge)/Qe));return Math.min(Math.floor(Se*h.length),h.length-1)},ot=he==="left"?se:G,xt=me.left+ot/ne*Be,Ns=Te.clientX-xt;document.body.style.cursor="col-resize";const Kt=Ue=>{const Se=Ue.clientX-Ns,ln=at(Se),Wt=h[ln];if(Wt)if(he==="left"){const lt=p??h[h.length-1].timestamp;g(Math.min(Wt.timestamp,lt),lt)}else{const lt=d??h[0].timestamp;g(lt,Math.max(Wt.timestamp,lt))}},rt=()=>{document.body.style.cursor="",document.removeEventListener("mousemove",Kt),document.removeEventListener("mouseup",rt)};document.addEventListener("mousemove",Kt),document.addEventListener("mouseup",rt)};return c`
            <div class="chart-handle-zone chart-handle-left" 
                 style="left: ${z};"
                 @mousedown=${le("left")}></div>
            <div class="chart-handle-zone chart-handle-right" 
                 style="left: ${ie};"
                 @mousedown=${le("right")}></div>
          `})()}
      </div>
      <div class="timeseries-summary">
        ${k?c`
              <span style="color: var(--accent);">▶ Turns ${T+1}–${R} of ${h.length}</span> · 
              ${new Date(A).toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"})}–${new Date(E).toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"})} · 
              ${B(Z+te+I+q)} · 
              ${X(H.reduce((z,ie)=>z+(ie.cost||0),0))}
            `:c`${h.length} msgs · ${B(u)} · ${X(f)}`}
      </div>
      ${fe?c`
              <div style="margin-top: 8px;">
                <div class="card-title" style="font-size: 12px; margin-bottom: 6px; color: var(--text);">Tokens by Type</div>
                <div class="cost-breakdown-bar" style="height: 18px;">
                  <div class="cost-segment output" style="width: ${pt(Z,M).toFixed(1)}%"></div>
                  <div class="cost-segment input" style="width: ${pt(te,M).toFixed(1)}%"></div>
                  <div class="cost-segment cache-write" style="width: ${pt(q,M).toFixed(1)}%"></div>
                  <div class="cost-segment cache-read" style="width: ${pt(I,M).toFixed(1)}%"></div>
                </div>
                <div class="cost-breakdown-legend">
                  <div class="legend-item" title="Assistant output tokens">
                    <span class="legend-dot output"></span>Output ${B(Z)}
                  </div>
                  <div class="legend-item" title="User + tool input tokens">
                    <span class="legend-dot input"></span>Input ${B(te)}
                  </div>
                  <div class="legend-item" title="Tokens written to cache">
                    <span class="legend-dot cache-write"></span>Cache Write ${B(q)}
                  </div>
                  <div class="legend-item" title="Tokens read from cache">
                    <span class="legend-dot cache-read"></span>Cache Read ${B(I)}
                  </div>
                </div>
                <div class="cost-breakdown-total">Total: ${B(M)}</div>
              </div>
            `:m}
    </div>
  `}function Af(e,t,n,s){if(!e)return c`
      <div class="context-details-panel">
        <div class="muted" style="padding: 20px; text-align: center">No context data</div>
      </div>
    `;const i=St(e.systemPrompt.chars),a=St(e.skills.promptChars),o=St(e.tools.listChars+e.tools.schemaChars),r=St(e.injectedWorkspaceFiles.reduce((k,A)=>k+A.injectedChars,0)),l=i+a+o+r;let d="";if(t&&t.totalTokens>0){const k=t.input+t.cacheRead;k>0&&(d=`~${Math.min(l/k*100,100).toFixed(0)}% of input`)}const p=e.skills.entries.toSorted((k,A)=>A.blockChars-k.blockChars),g=e.tools.entries.toSorted((k,A)=>A.summaryChars+A.schemaChars-(k.summaryChars+k.schemaChars)),h=e.injectedWorkspaceFiles.toSorted((k,A)=>A.injectedChars-k.injectedChars),u=4,f=n,v=f?p:p.slice(0,u),w=f?g:g.slice(0,u),S=f?h:h.slice(0,u),C=p.length>u||g.length>u||h.length>u;return c`
    <div class="context-details-panel">
      <div class="context-breakdown-header">
        <div class="card-title" style="font-size: 12px; color: var(--text);">System Prompt Breakdown</div>
        ${C?c`<button class="context-expand-btn" @click=${s}>
                ${f?"Collapse":"Expand all"}
              </button>`:m}
      </div>
      <p class="context-weight-desc">
        ${d||"Base context per message"}
      </p>
      <div class="context-stacked-bar">
        <div class="context-segment system" style="width: ${pt(i,l).toFixed(1)}%" title="System: ~${B(i)}"></div>
        <div class="context-segment skills" style="width: ${pt(a,l).toFixed(1)}%" title="Skills: ~${B(a)}"></div>
        <div class="context-segment tools" style="width: ${pt(o,l).toFixed(1)}%" title="Tools: ~${B(o)}"></div>
        <div class="context-segment files" style="width: ${pt(r,l).toFixed(1)}%" title="Files: ~${B(r)}"></div>
      </div>
      <div class="context-legend">
        <span class="legend-item"><span class="legend-dot system"></span>Sys ~${B(i)}</span>
        <span class="legend-item"><span class="legend-dot skills"></span>Skills ~${B(a)}</span>
        <span class="legend-item"><span class="legend-dot tools"></span>Tools ~${B(o)}</span>
        <span class="legend-item"><span class="legend-dot files"></span>Files ~${B(r)}</span>
      </div>
      <div class="context-total">Total: ~${B(l)}</div>
      <div class="context-breakdown-grid">
        ${p.length>0?(()=>{const k=p.length-v.length;return c`
                  <div class="context-breakdown-card">
                    <div class="context-breakdown-title">Skills (${p.length})</div>
                    <div class="context-breakdown-list">
                      ${v.map(A=>c`
                          <div class="context-breakdown-item">
                            <span class="mono">${A.name}</span>
                            <span class="muted">~${B(St(A.blockChars))}</span>
                          </div>
                        `)}
                    </div>
                    ${k>0?c`<div class="context-breakdown-more">+${k} more</div>`:m}
                  </div>
                `})():m}
        ${g.length>0?(()=>{const k=g.length-w.length;return c`
                  <div class="context-breakdown-card">
                    <div class="context-breakdown-title">Tools (${g.length})</div>
                    <div class="context-breakdown-list">
                      ${w.map(A=>c`
                          <div class="context-breakdown-item">
                            <span class="mono">${A.name}</span>
                            <span class="muted">~${B(St(A.summaryChars+A.schemaChars))}</span>
                          </div>
                        `)}
                    </div>
                    ${k>0?c`<div class="context-breakdown-more">+${k} more</div>`:m}
                  </div>
                `})():m}
        ${h.length>0?(()=>{const k=h.length-S.length;return c`
                  <div class="context-breakdown-card">
                    <div class="context-breakdown-title">Files (${h.length})</div>
                    <div class="context-breakdown-list">
                      ${S.map(A=>c`
                          <div class="context-breakdown-item">
                            <span class="mono">${A.name}</span>
                            <span class="muted">~${B(St(A.injectedChars))}</span>
                          </div>
                        `)}
                    </div>
                    ${k>0?c`<div class="context-breakdown-more">+${k} more</div>`:m}
                  </div>
                `})():m}
      </div>
    </div>
  `}function Cf(e,t,n,s,i,a,o,r,l,d,p,g){if(t)return c`
      <div class="session-logs-compact">
        <div class="session-logs-header">Conversation</div>
        <div class="muted" style="padding: 20px; text-align: center">Loading...</div>
      </div>
    `;if(!e||e.length===0)return c`
      <div class="session-logs-compact">
        <div class="session-logs-header">Conversation</div>
        <div class="muted" style="padding: 20px; text-align: center">No messages</div>
      </div>
    `;const h=i.query.trim().toLowerCase(),u=e.map(E=>{const T=ql(E.content),R=T.cleanContent||E.content;return{log:E,toolInfo:T,cleanContent:R}}),f=Array.from(new Set(u.flatMap(E=>E.toolInfo.tools.map(([T])=>T)))).toSorted((E,T)=>E.localeCompare(T)),v=u.filter(E=>{if(p!=null&&g!=null){const T=E.log.timestamp;if(T>0){const R=Math.min(p,g),H=Math.max(p,g),Z=Ql(T);if(Z<R||Z>H)return!1}}return!(i.roles.length>0&&!i.roles.includes(E.log.role)||i.hasTools&&E.toolInfo.tools.length===0||i.tools.length>0&&!E.toolInfo.tools.some(([R])=>i.tools.includes(R))||h&&!E.cleanContent.toLowerCase().includes(h))}),w=i.roles.length>0||i.tools.length>0||i.hasTools||h,S=p!=null&&g!=null,C=w||S?`${v.length} of ${e.length} ${S?"(timeline filtered)":""}`:`${e.length}`,k=new Set(i.roles),A=new Set(i.tools);return c`
    <div class="session-logs-compact">
      <div class="session-logs-header">
        <span>Conversation <span style="font-weight: normal; color: var(--muted);">(${C} messages)</span></span>
        <button class="btn btn-sm usage-action-btn usage-secondary-btn" @click=${s}>
          ${n?"Collapse All":"Expand All"}
        </button>
      </div>
      <div class="usage-filters-inline" style="margin: 10px 12px;">
        <select
          multiple
          size="4"
          @change=${E=>a(Array.from(E.target.selectedOptions).map(T=>T.value))}
        >
          <option value="user" ?selected=${k.has("user")}>User</option>
          <option value="assistant" ?selected=${k.has("assistant")}>Assistant</option>
          <option value="tool" ?selected=${k.has("tool")}>Tool</option>
          <option value="toolResult" ?selected=${k.has("toolResult")}>Tool result</option>
        </select>
        <select
          multiple
          size="4"
          @change=${E=>o(Array.from(E.target.selectedOptions).map(T=>T.value))}
        >
          ${f.map(E=>c`<option value=${E} ?selected=${A.has(E)}>${E}</option>`)}
        </select>
        <label class="usage-filters-inline" style="gap: 6px;">
          <input
            type="checkbox"
            .checked=${i.hasTools}
            @change=${E=>r(E.target.checked)}
          />
          Has tools
        </label>
        <input
          type="text"
          placeholder="Search conversation"
          .value=${i.query}
          @input=${E=>l(E.target.value)}
        />
        <button class="btn btn-sm usage-action-btn usage-secondary-btn" @click=${d}>
          Clear
        </button>
      </div>
      <div class="session-logs-list">
        ${v.map(E=>{const{log:T,toolInfo:R,cleanContent:H}=E,Z=T.role==="user"?"user":"assistant",te=T.role==="user"?"You":T.role==="assistant"?"Assistant":"Tool";return c`
          <div class="session-log-entry ${Z}">
            <div class="session-log-meta">
              <span class="session-log-role">${te}</span>
              <span>${new Date(T.timestamp).toLocaleString()}</span>
              ${T.tokens?c`<span>${B(T.tokens)}</span>`:m}
            </div>
            <div class="session-log-content">${H}</div>
            ${R.tools.length>0?c`
                    <details class="session-log-tools" ?open=${n}>
                      <summary>${R.summary}</summary>
                      <div class="session-log-tools-list">
                        ${R.tools.map(([I,q])=>c`
                            <span class="session-log-tools-pill">${I} × ${q}</span>
                          `)}
                      </div>
                    </details>
                  `:m}
          </div>
        `})}
        ${v.length===0?c`
                <div class="muted" style="padding: 12px">No messages match the filters.</div>
              `:m}
      </div>
    </div>
  `}const Tf=`
  .usage-page-header {
    margin: 4px 0 12px;
  }
  .usage-page-title {
    font-size: 28px;
    font-weight: 700;
    letter-spacing: -0.02em;
    margin-bottom: 4px;
  }
  .usage-page-subtitle {
    font-size: 13px;
    color: var(--muted);
    margin: 0 0 12px;
  }
  /* ===== FILTERS & HEADER ===== */
  .usage-filters-inline {
    display: flex;
    gap: 8px;
    align-items: center;
    flex-wrap: wrap;
  }
  .usage-filters-inline select {
    padding: 6px 10px;
    border: 1px solid var(--border);
    border-radius: 6px;
    background: var(--bg);
    color: var(--text);
    font-size: 13px;
  }
  .usage-filters-inline input[type="date"] {
    padding: 6px 10px;
    border: 1px solid var(--border);
    border-radius: 6px;
    background: var(--bg);
    color: var(--text);
    font-size: 13px;
  }
  .usage-filters-inline input[type="text"] {
    padding: 6px 10px;
    border: 1px solid var(--border);
    border-radius: 6px;
    background: var(--bg);
    color: var(--text);
    font-size: 13px;
    min-width: 180px;
  }
  .usage-filters-inline .btn-sm {
    padding: 6px 12px;
    font-size: 14px;
  }
  .usage-refresh-indicator {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 10px;
    background: rgba(255, 77, 77, 0.1);
    border-radius: 4px;
    font-size: 12px;
    color: #ff4d4d;
  }
  .usage-refresh-indicator::before {
    content: "";
    width: 10px;
    height: 10px;
    border: 2px solid #ff4d4d;
    border-top-color: transparent;
    border-radius: 50%;
    animation: usage-spin 0.6s linear infinite;
  }
  @keyframes usage-spin {
    to { transform: rotate(360deg); }
  }
  .active-filters {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
  }
  .filter-chip {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 4px 8px 4px 12px;
    background: var(--accent-subtle);
    border: 1px solid var(--accent);
    border-radius: 16px;
    font-size: 12px;
  }
  .filter-chip-label {
    color: var(--accent);
    font-weight: 500;
  }
  .filter-chip-remove {
    background: none;
    border: none;
    color: var(--accent);
    cursor: pointer;
    padding: 2px 4px;
    font-size: 14px;
    line-height: 1;
    opacity: 0.7;
    transition: opacity 0.15s;
  }
  .filter-chip-remove:hover {
    opacity: 1;
  }
  .filter-clear-btn {
    padding: 4px 10px !important;
    font-size: 12px !important;
    line-height: 1 !important;
    margin-left: 8px;
  }
  .usage-query-bar {
    display: grid;
    grid-template-columns: minmax(220px, 1fr) auto;
    gap: 10px;
    align-items: center;
    /* Keep the dropdown filter row from visually touching the query row. */
    margin-bottom: 10px;
  }
  .usage-query-actions {
    display: flex;
    align-items: center;
    gap: 6px;
    flex-wrap: nowrap;
    justify-self: end;
  }
  .usage-query-actions .btn {
    height: 34px;
    padding: 0 14px;
    border-radius: 999px;
    font-weight: 600;
    font-size: 13px;
    line-height: 1;
    border: 1px solid var(--border);
    background: var(--bg-secondary);
    color: var(--text);
    box-shadow: none;
    transition: background 0.15s, border-color 0.15s, color 0.15s;
  }
  .usage-query-actions .btn:hover {
    background: var(--bg);
    border-color: var(--border-strong);
  }
  .usage-action-btn {
    height: 34px;
    padding: 0 14px;
    border-radius: 999px;
    font-weight: 600;
    font-size: 13px;
    line-height: 1;
    border: 1px solid var(--border);
    background: var(--bg-secondary);
    color: var(--text);
    box-shadow: none;
    transition: background 0.15s, border-color 0.15s, color 0.15s;
  }
  .usage-action-btn:hover {
    background: var(--bg);
    border-color: var(--border-strong);
  }
  .usage-primary-btn {
    background: #ff4d4d;
    color: #fff;
    border-color: #ff4d4d;
    box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.12);
  }
  .btn.usage-primary-btn {
    background: #ff4d4d !important;
    border-color: #ff4d4d !important;
    color: #fff !important;
  }
  .usage-primary-btn:hover {
    background: #e64545;
    border-color: #e64545;
  }
  .btn.usage-primary-btn:hover {
    background: #e64545 !important;
    border-color: #e64545 !important;
  }
  .usage-primary-btn:disabled {
    background: rgba(255, 77, 77, 0.18);
    border-color: rgba(255, 77, 77, 0.3);
    color: #ff4d4d;
    box-shadow: none;
    cursor: default;
    opacity: 1;
  }
  .usage-primary-btn[disabled] {
    background: rgba(255, 77, 77, 0.18) !important;
    border-color: rgba(255, 77, 77, 0.3) !important;
    color: #ff4d4d !important;
    opacity: 1 !important;
  }
  .usage-secondary-btn {
    background: var(--bg-secondary);
    color: var(--text);
    border-color: var(--border);
  }
  .usage-query-input {
    width: 100%;
    min-width: 220px;
    padding: 6px 10px;
    border: 1px solid var(--border);
    border-radius: 6px;
    background: var(--bg);
    color: var(--text);
    font-size: 13px;
  }
  .usage-query-suggestions {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 6px;
  }
  .usage-query-suggestion {
    padding: 4px 8px;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: var(--bg-secondary);
    font-size: 11px;
    color: var(--text);
    cursor: pointer;
    transition: background 0.15s;
  }
  .usage-query-suggestion:hover {
    background: var(--bg-hover);
  }
  .usage-filter-row {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: center;
    margin-top: 14px;
  }
  details.usage-filter-select {
    position: relative;
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 6px 10px;
    background: var(--bg);
    font-size: 12px;
    min-width: 140px;
  }
  details.usage-filter-select summary {
    cursor: pointer;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6px;
    font-weight: 500;
  }
  details.usage-filter-select summary::-webkit-details-marker {
    display: none;
  }
  .usage-filter-badge {
    font-size: 11px;
    color: var(--muted);
  }
  .usage-filter-popover {
    position: absolute;
    left: 0;
    top: calc(100% + 6px);
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
    min-width: 220px;
    z-index: 20;
  }
  .usage-filter-actions {
    display: flex;
    gap: 6px;
    margin-bottom: 8px;
  }
  .usage-filter-actions button {
    border-radius: 999px;
    padding: 4px 10px;
    font-size: 11px;
  }
  .usage-filter-options {
    display: flex;
    flex-direction: column;
    gap: 6px;
    max-height: 200px;
    overflow: auto;
  }
  .usage-filter-option {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
  }
  .usage-query-hint {
    font-size: 11px;
    color: var(--muted);
  }
  .usage-query-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 6px;
  }
  .usage-query-chip {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 8px;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: var(--bg-secondary);
    font-size: 11px;
  }
  .usage-query-chip button {
    background: none;
    border: none;
    color: var(--muted);
    cursor: pointer;
    padding: 0;
    line-height: 1;
  }
  .usage-header {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: var(--bg);
  }
  .usage-header.pinned {
    position: sticky;
    top: 12px;
    z-index: 6;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
  }
  .usage-pin-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 8px;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: var(--bg-secondary);
    font-size: 11px;
    color: var(--text);
    cursor: pointer;
  }
  .usage-pin-btn.active {
    background: var(--accent-subtle);
    border-color: var(--accent);
    color: var(--accent);
  }
  .usage-header-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    flex-wrap: wrap;
  }
  .usage-header-title {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .usage-header-metrics {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
  }
  .usage-metric-badge {
    display: inline-flex;
    align-items: baseline;
    gap: 6px;
    padding: 2px 8px;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: transparent;
    font-size: 11px;
    color: var(--muted);
  }
  .usage-metric-badge strong {
    font-size: 12px;
    color: var(--text);
  }
  .usage-controls {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
  }
  .usage-controls .active-filters {
    flex: 1 1 100%;
  }
  .usage-controls input[type="date"] {
    min-width: 140px;
  }
  .usage-presets {
    display: inline-flex;
    gap: 6px;
    flex-wrap: wrap;
  }
  .usage-presets .btn {
    padding: 4px 8px;
    font-size: 11px;
  }
  .usage-quick-filters {
    display: flex;
    gap: 8px;
    align-items: center;
    flex-wrap: wrap;
  }
  .usage-select {
    min-width: 120px;
    padding: 6px 10px;
    border: 1px solid var(--border);
    border-radius: 6px;
    background: var(--bg);
    color: var(--text);
    font-size: 12px;
  }
  .usage-export-menu summary {
    cursor: pointer;
    font-weight: 500;
    color: var(--text);
    list-style: none;
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }
  .usage-export-menu summary::-webkit-details-marker {
    display: none;
  }
  .usage-export-menu {
    position: relative;
  }
  .usage-export-button {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 10px;
    border-radius: 8px;
    border: 1px solid var(--border);
    background: var(--bg);
    font-size: 12px;
  }
  .usage-export-popover {
    position: absolute;
    right: 0;
    top: calc(100% + 6px);
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 8px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
    min-width: 160px;
    z-index: 10;
  }
  .usage-export-list {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .usage-export-item {
    text-align: left;
    padding: 6px 10px;
    border-radius: 8px;
    border: 1px solid var(--border);
    background: var(--bg-secondary);
    font-size: 12px;
  }
  .usage-summary-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 12px;
    margin-top: 12px;
  }
  .usage-summary-card {
    padding: 12px;
    border-radius: 8px;
    background: var(--bg-secondary);
    border: 1px solid var(--border);
  }
  .usage-mosaic {
    margin-top: 16px;
    padding: 16px;
  }
  .usage-mosaic-header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 12px;
  }
  .usage-mosaic-title {
    font-weight: 600;
  }
  .usage-mosaic-sub {
    font-size: 12px;
    color: var(--muted);
  }
  .usage-mosaic-grid {
    display: grid;
    grid-template-columns: minmax(200px, 1fr) minmax(260px, 2fr);
    gap: 16px;
    align-items: start;
  }
  .usage-mosaic-section {
    background: var(--bg-subtle);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 12px;
  }
  .usage-mosaic-section-title {
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .usage-mosaic-total {
    font-size: 20px;
    font-weight: 700;
  }
  .usage-daypart-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
    gap: 8px;
  }
  .usage-daypart-cell {
    border-radius: 8px;
    padding: 10px;
    color: var(--text);
    background: rgba(255, 77, 77, 0.08);
    border: 1px solid rgba(255, 77, 77, 0.2);
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .usage-daypart-label {
    font-size: 12px;
    font-weight: 600;
  }
  .usage-daypart-value {
    font-size: 14px;
  }
  .usage-hour-grid {
    display: grid;
    grid-template-columns: repeat(24, minmax(6px, 1fr));
    gap: 4px;
  }
  .usage-hour-cell {
    height: 28px;
    border-radius: 6px;
    background: rgba(255, 77, 77, 0.1);
    border: 1px solid rgba(255, 77, 77, 0.2);
    cursor: pointer;
    transition: border-color 0.15s, box-shadow 0.15s;
  }
  .usage-hour-cell.selected {
    border-color: rgba(255, 77, 77, 0.8);
    box-shadow: 0 0 0 2px rgba(255, 77, 77, 0.2);
  }
  .usage-hour-labels {
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    gap: 6px;
    margin-top: 8px;
    font-size: 11px;
    color: var(--muted);
  }
  .usage-hour-legend {
    display: flex;
    gap: 8px;
    align-items: center;
    margin-top: 10px;
    font-size: 11px;
    color: var(--muted);
  }
  .usage-hour-legend span {
    display: inline-block;
    width: 14px;
    height: 10px;
    border-radius: 4px;
    background: rgba(255, 77, 77, 0.15);
    border: 1px solid rgba(255, 77, 77, 0.2);
  }
  .usage-calendar-labels {
    display: grid;
    grid-template-columns: repeat(7, minmax(10px, 1fr));
    gap: 6px;
    font-size: 10px;
    color: var(--muted);
    margin-bottom: 6px;
  }
  .usage-calendar {
    display: grid;
    grid-template-columns: repeat(7, minmax(10px, 1fr));
    gap: 6px;
  }
  .usage-calendar-cell {
    height: 18px;
    border-radius: 4px;
    border: 1px solid rgba(255, 77, 77, 0.2);
    background: rgba(255, 77, 77, 0.08);
  }
  .usage-calendar-cell.empty {
    background: transparent;
    border-color: transparent;
  }
  .usage-summary-title {
    font-size: 11px;
    color: var(--muted);
    margin-bottom: 6px;
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }
  .usage-info {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    margin-left: 6px;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: var(--bg);
    font-size: 10px;
    color: var(--muted);
    cursor: help;
  }
  .usage-summary-value {
    font-size: 16px;
    font-weight: 600;
    color: var(--text-strong);
  }
  .usage-summary-value.good {
    color: #1f8f4e;
  }
  .usage-summary-value.warn {
    color: #c57a00;
  }
  .usage-summary-value.bad {
    color: #c9372c;
  }
  .usage-summary-hint {
    font-size: 10px;
    color: var(--muted);
    cursor: help;
    border: 1px solid var(--border);
    border-radius: 999px;
    padding: 0 6px;
    line-height: 16px;
    height: 16px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .usage-summary-sub {
    font-size: 11px;
    color: var(--muted);
    margin-top: 4px;
  }
  .usage-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .usage-list-item {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    font-size: 12px;
    color: var(--text);
    align-items: flex-start;
  }
  .usage-list-value {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 2px;
    text-align: right;
  }
  .usage-list-sub {
    font-size: 11px;
    color: var(--muted);
  }
  .usage-list-item.button {
    border: none;
    background: transparent;
    padding: 0;
    text-align: left;
    cursor: pointer;
  }
  .usage-list-item.button:hover {
    color: var(--text-strong);
  }
`,_f=`
  .usage-list-item .muted {
    font-size: 11px;
  }
  .usage-error-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .usage-error-row {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 8px;
    align-items: center;
    font-size: 12px;
  }
  .usage-error-date {
    font-weight: 600;
  }
  .usage-error-rate {
    font-variant-numeric: tabular-nums;
  }
  .usage-error-sub {
    grid-column: 1 / -1;
    font-size: 11px;
    color: var(--muted);
  }
  .usage-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 8px;
  }
  .usage-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 2px 8px;
    border: 1px solid var(--border);
    border-radius: 999px;
    font-size: 11px;
    background: var(--bg);
    color: var(--text);
  }
  .usage-meta-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 12px;
  }
  .usage-meta-item {
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-size: 12px;
  }
  .usage-meta-item span {
    color: var(--muted);
    font-size: 11px;
  }
  .usage-insights-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 16px;
    margin-top: 12px;
  }
  .usage-insight-card {
    padding: 14px;
    border-radius: 10px;
    border: 1px solid var(--border);
    background: var(--bg-secondary);
  }
  .usage-insight-title {
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  .usage-insight-subtitle {
    font-size: 11px;
    color: var(--muted);
    margin-top: 6px;
  }
  /* ===== CHART TOGGLE ===== */
  .chart-toggle {
    display: flex;
    background: var(--bg);
    border-radius: 6px;
    overflow: hidden;
    border: 1px solid var(--border);
  }
  .chart-toggle .toggle-btn {
    padding: 6px 14px;
    font-size: 13px;
    background: transparent;
    border: none;
    color: var(--muted);
    cursor: pointer;
    transition: all 0.15s;
  }
  .chart-toggle .toggle-btn:hover {
    color: var(--text);
  }
  .chart-toggle .toggle-btn.active {
    background: #ff4d4d;
    color: white;
  }
  .chart-toggle.small .toggle-btn {
    padding: 4px 8px;
    font-size: 11px;
  }
  .sessions-toggle {
    border-radius: 4px;
  }
  .sessions-toggle .toggle-btn {
    border-radius: 4px;
  }
  .daily-chart-header {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
    margin-bottom: 6px;
  }

  /* ===== DAILY BAR CHART ===== */
  .daily-chart {
    margin-top: 12px;
  }
  .daily-chart-bars {
    display: flex;
    align-items: flex-end;
    height: 200px;
    gap: 4px;
    padding: 8px 4px 36px;
  }
  .daily-bar-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    justify-content: flex-end;
    cursor: pointer;
    position: relative;
    border-radius: 4px 4px 0 0;
    transition: background 0.15s;
    min-width: 0;
  }
  .daily-bar-wrapper:hover {
    background: var(--bg-hover);
  }
  .daily-bar-wrapper.selected {
    background: var(--accent-subtle);
  }
  .daily-bar-wrapper.selected .daily-bar {
    background: var(--accent);
  }
  .daily-bar {
    width: 100%;
    max-width: var(--bar-max-width, 32px);
    background: #ff4d4d;
    border-radius: 3px 3px 0 0;
    min-height: 2px;
    transition: all 0.15s;
    overflow: hidden;
  }
  .daily-bar-wrapper:hover .daily-bar {
    background: #cc3d3d;
  }
  .daily-bar-label {
    position: absolute;
    bottom: -28px;
    font-size: 10px;
    color: var(--muted);
    white-space: nowrap;
    text-align: center;
    transform: rotate(-35deg);
    transform-origin: top center;
  }
  .daily-bar-total {
    position: absolute;
    top: -16px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 10px;
    color: var(--muted);
    white-space: nowrap;
  }
  .daily-bar-tooltip {
    position: absolute;
    bottom: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 8px 12px;
    font-size: 12px;
    white-space: nowrap;
    z-index: 100;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.15s;
  }
  .daily-bar-wrapper:hover .daily-bar-tooltip {
    opacity: 1;
  }

  /* ===== COST/TOKEN BREAKDOWN BAR ===== */
  .cost-breakdown {
    margin-top: 18px;
    padding: 16px;
    background: var(--bg-secondary);
    border-radius: 8px;
  }
  .cost-breakdown-header {
    font-weight: 600;
    font-size: 15px;
    letter-spacing: -0.02em;
    margin-bottom: 12px;
    color: var(--text-strong);
  }
  .cost-breakdown-bar {
    height: 28px;
    background: var(--bg);
    border-radius: 6px;
    overflow: hidden;
    display: flex;
  }
  .cost-segment {
    height: 100%;
    transition: width 0.3s ease;
    position: relative;
  }
  .cost-segment.output {
    background: #ef4444;
  }
  .cost-segment.input {
    background: #f59e0b;
  }
  .cost-segment.cache-write {
    background: #10b981;
  }
  .cost-segment.cache-read {
    background: #06b6d4;
  }
  .cost-breakdown-legend {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 12px;
  }
  .cost-breakdown-total {
    margin-top: 10px;
    font-size: 12px;
    color: var(--muted);
  }
  .legend-item {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    color: var(--text);
    cursor: help;
  }
  .legend-dot {
    width: 10px;
    height: 10px;
    border-radius: 2px;
    flex-shrink: 0;
  }
  .legend-dot.output {
    background: #ef4444;
  }
  .legend-dot.input {
    background: #f59e0b;
  }
  .legend-dot.cache-write {
    background: #10b981;
  }
  .legend-dot.cache-read {
    background: #06b6d4;
  }
  .legend-dot.system {
    background: #ff4d4d;
  }
  .legend-dot.skills {
    background: #8b5cf6;
  }
  .legend-dot.tools {
    background: #ec4899;
  }
  .legend-dot.files {
    background: #f59e0b;
  }
  .cost-breakdown-note {
    margin-top: 10px;
    font-size: 11px;
    color: var(--muted);
    line-height: 1.4;
  }

  /* ===== SESSION BARS (scrollable list) ===== */
  .session-bars {
    margin-top: 16px;
    max-height: 400px;
    overflow-y: auto;
    border: 1px solid var(--border);
    border-radius: 8px;
    background: var(--bg);
  }
  .session-bar-row {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 14px;
    border-bottom: 1px solid var(--border);
    cursor: pointer;
    transition: background 0.15s;
  }
  .session-bar-row:last-child {
    border-bottom: none;
  }
  .session-bar-row:hover {
    background: var(--bg-hover);
  }
  .session-bar-row.selected {
    background: var(--accent-subtle);
  }
  .session-bar-label {
    flex: 1 1 auto;
    min-width: 0;
    font-size: 13px;
    color: var(--text);
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .session-bar-title {
    /* Prefer showing the full name; wrap instead of truncating. */
    white-space: normal;
    overflow-wrap: anywhere;
    word-break: break-word;
  }
  .session-bar-meta {
    font-size: 10px;
    color: var(--muted);
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .session-bar-track {
    flex: 0 0 90px;
    height: 6px;
    background: var(--bg-secondary);
    border-radius: 4px;
    overflow: hidden;
    opacity: 0.6;
  }
  .session-bar-fill {
    height: 100%;
    background: rgba(255, 77, 77, 0.7);
    border-radius: 4px;
    transition: width 0.3s ease;
  }
  .session-bar-value {
    flex: 0 0 70px;
    text-align: right;
    font-size: 12px;
    font-family: var(--font-mono);
    color: var(--muted);
  }
  .session-bar-actions {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    flex: 0 0 auto;
  }
  .session-copy-btn {
    height: 26px;
    padding: 0 10px;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: var(--bg-secondary);
    font-size: 11px;
    font-weight: 600;
    color: var(--muted);
    cursor: pointer;
    transition: background 0.15s, border-color 0.15s, color 0.15s;
  }
  .session-copy-btn:hover {
    background: var(--bg);
    border-color: var(--border-strong);
    color: var(--text);
  }

  /* ===== TIME SERIES CHART ===== */
  .session-timeseries {
    margin-top: 24px;
    padding: 16px;
    background: var(--bg-secondary);
    border-radius: 8px;
  }
  .timeseries-header-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
  }
  .timeseries-controls {
    display: flex;
    gap: 6px;
    align-items: center;
  }
  .timeseries-header {
    font-weight: 600;
    color: var(--text);
  }
  .timeseries-chart {
    width: 100%;
    overflow: hidden;
  }
  .timeseries-svg {
    width: 100%;
    height: auto;
    display: block;
  }
  .timeseries-svg .axis-label {
    font-size: 10px;
    fill: var(--muted);
  }
  .timeseries-svg .ts-area {
    fill: #ff4d4d;
    fill-opacity: 0.1;
  }
  .timeseries-svg .ts-line {
    fill: none;
    stroke: #ff4d4d;
    stroke-width: 2;
  }
  .timeseries-svg .ts-dot {
    fill: #ff4d4d;
    transition: r 0.15s, fill 0.15s;
  }
  .timeseries-svg .ts-dot:hover {
    r: 5;
  }
  .timeseries-svg .ts-bar {
    fill: #ff4d4d;
    transition: fill 0.15s;
  }
  .timeseries-svg .ts-bar:hover {
    fill: #cc3d3d;
  }
  .timeseries-svg .ts-bar.output { fill: #ef4444; }
  .timeseries-svg .ts-bar.input { fill: #f59e0b; }
  .timeseries-svg .ts-bar.cache-write { fill: #10b981; }
  .timeseries-svg .ts-bar.cache-read { fill: #06b6d4; }
  .timeseries-summary {
    margin-top: 12px;
    font-size: 13px;
    color: var(--muted);
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  .timeseries-loading {
    padding: 24px;
    text-align: center;
    color: var(--muted);
  }

  /* ===== SESSION LOGS ===== */
  .session-logs {
    margin-top: 24px;
    background: var(--bg-secondary);
    border-radius: 8px;
    overflow: hidden;
  }
  .session-logs-header {
    padding: 10px 14px;
    font-weight: 600;
    border-bottom: 1px solid var(--border);
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;
    background: var(--bg-secondary);
  }
  .session-logs-loading {
    padding: 24px;
    text-align: center;
    color: var(--muted);
  }
  .session-logs-list {
    max-height: 400px;
    overflow-y: auto;
  }
  .session-log-entry {
    padding: 10px 14px;
    border-bottom: 1px solid var(--border);
    display: flex;
    flex-direction: column;
    gap: 6px;
    background: var(--bg);
  }
  .session-log-entry:last-child {
    border-bottom: none;
  }
  .session-log-entry.user {
    border-left: 3px solid var(--accent);
  }
  .session-log-entry.assistant {
    border-left: 3px solid var(--border-strong);
  }
  .session-log-meta {
    display: flex;
    gap: 8px;
    align-items: center;
    font-size: 11px;
    color: var(--muted);
    flex-wrap: wrap;
  }
  .session-log-role {
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    font-size: 10px;
    padding: 2px 6px;
    border-radius: 999px;
    background: var(--bg-secondary);
    border: 1px solid var(--border);
  }
  .session-log-entry.user .session-log-role {
    color: var(--accent);
  }
  .session-log-entry.assistant .session-log-role {
    color: var(--muted);
  }
  .session-log-content {
    font-size: 13px;
    line-height: 1.5;
    color: var(--text);
    white-space: pre-wrap;
    word-break: break-word;
    background: var(--bg-secondary);
    border-radius: 8px;
    padding: 8px 10px;
    border: 1px solid var(--border);
    max-height: 220px;
    overflow-y: auto;
  }

  /* ===== CONTEXT WEIGHT BREAKDOWN ===== */
  .context-weight-breakdown {
    margin-top: 24px;
    padding: 16px;
    background: var(--bg-secondary);
    border-radius: 8px;
  }
  .context-weight-breakdown .context-weight-header {
    font-weight: 600;
    font-size: 13px;
    margin-bottom: 4px;
    color: var(--text);
  }
  .context-weight-desc {
    font-size: 12px;
    color: var(--muted);
    margin: 0 0 12px 0;
  }
  .context-stacked-bar {
    height: 24px;
    background: var(--bg);
    border-radius: 6px;
    overflow: hidden;
    display: flex;
  }
  .context-segment {
    height: 100%;
    transition: width 0.3s ease;
  }
  .context-segment.system {
    background: #ff4d4d;
  }
  .context-segment.skills {
    background: #8b5cf6;
  }
  .context-segment.tools {
    background: #ec4899;
  }
  .context-segment.files {
    background: #f59e0b;
  }
  .context-legend {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 12px;
  }
  .context-total {
    margin-top: 10px;
    font-size: 12px;
    font-weight: 600;
    color: var(--muted);
  }
  .context-details {
    margin-top: 12px;
    border: 1px solid var(--border);
    border-radius: 6px;
    overflow: hidden;
  }
  .context-details summary {
    padding: 10px 14px;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    background: var(--bg);
    border-bottom: 1px solid var(--border);
  }
  .context-details[open] summary {
    border-bottom: 1px solid var(--border);
  }
  .context-list {
    max-height: 200px;
    overflow-y: auto;
  }
  .context-list-header {
    display: flex;
    justify-content: space-between;
    padding: 8px 14px;
    font-size: 11px;
    text-transform: uppercase;
    color: var(--muted);
    background: var(--bg-secondary);
    border-bottom: 1px solid var(--border);
  }
  .context-list-item {
    display: flex;
    justify-content: space-between;
    padding: 8px 14px;
    font-size: 12px;
    border-bottom: 1px solid var(--border);
  }
  .context-list-item:last-child {
    border-bottom: none;
  }
  .context-list-item .mono {
    font-family: var(--font-mono);
    color: var(--text);
  }
  .context-list-item .muted {
    color: var(--muted);
    font-family: var(--font-mono);
  }

  /* ===== NO CONTEXT NOTE ===== */
  .no-context-note {
    margin-top: 24px;
    padding: 16px;
    background: var(--bg-secondary);
    border-radius: 8px;
    font-size: 13px;
    color: var(--muted);
    line-height: 1.5;
  }

  /* ===== TWO COLUMN LAYOUT ===== */
  .usage-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px;
    margin-top: 18px;
    align-items: stretch;
  }
  .usage-grid-left {
    display: flex;
    flex-direction: column;
  }
  .usage-grid-right {
    display: flex;
    flex-direction: column;
  }
  
  /* ===== LEFT CARD (Daily + Breakdown) ===== */
  .usage-left-card {
    /* inherits background, border, shadow from .card */
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .usage-left-card .daily-chart-bars {
    flex: 1;
    min-height: 200px;
  }
  .usage-left-card .sessions-panel-title {
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 12px;
  }
`,Ef=`
  
  /* ===== COMPACT DAILY CHART ===== */
  .daily-chart-compact {
    margin-bottom: 16px;
  }
  .daily-chart-compact .sessions-panel-title {
    margin-bottom: 8px;
  }
  .daily-chart-compact .daily-chart-bars {
    height: 100px;
    padding-bottom: 20px;
  }
  
  /* ===== COMPACT COST BREAKDOWN ===== */
  .cost-breakdown-compact {
    padding: 0;
    margin: 0;
    background: transparent;
    border-top: 1px solid var(--border);
    padding-top: 12px;
  }
  .cost-breakdown-compact .cost-breakdown-header {
    margin-bottom: 8px;
  }
  .cost-breakdown-compact .cost-breakdown-legend {
    gap: 12px;
  }
  .cost-breakdown-compact .cost-breakdown-note {
    display: none;
  }
  
  /* ===== SESSIONS CARD ===== */
  .sessions-card {
    /* inherits background, border, shadow from .card */
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .sessions-card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }
  .sessions-card-title {
    font-weight: 600;
    font-size: 14px;
  }
  .sessions-card-count {
    font-size: 12px;
    color: var(--muted);
  }
  .sessions-card-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    margin: 8px 0 10px;
    font-size: 12px;
    color: var(--muted);
  }
  .sessions-card-stats {
    display: inline-flex;
    gap: 12px;
  }
  .sessions-sort {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    color: var(--muted);
  }
  .sessions-sort select {
    padding: 4px 8px;
    border-radius: 6px;
    border: 1px solid var(--border);
    background: var(--bg);
    color: var(--text);
    font-size: 12px;
  }
  .sessions-action-btn {
    height: 28px;
    padding: 0 10px;
    border-radius: 8px;
    font-size: 12px;
    line-height: 1;
  }
  .sessions-action-btn.icon {
    width: 32px;
    padding: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .sessions-card-hint {
    font-size: 11px;
    color: var(--muted);
    margin-bottom: 8px;
  }
  .sessions-card .session-bars {
    max-height: 280px;
    background: var(--bg);
    border-radius: 6px;
    border: 1px solid var(--border);
    margin: 0;
    overflow-y: auto;
    padding: 8px;
  }
  .sessions-card .session-bar-row {
    padding: 6px 8px;
    border-radius: 6px;
    margin-bottom: 3px;
    border: 1px solid transparent;
    transition: all 0.15s;
  }
  .sessions-card .session-bar-row:hover {
    border-color: var(--border);
    background: var(--bg-hover);
  }
  .sessions-card .session-bar-row.selected {
    border-color: var(--accent);
    background: var(--accent-subtle);
    box-shadow: inset 0 0 0 1px rgba(255, 77, 77, 0.15);
  }
  .sessions-card .session-bar-label {
    flex: 1 1 auto;
    min-width: 140px;
    font-size: 12px;
  }
  .sessions-card .session-bar-value {
    flex: 0 0 60px;
    font-size: 11px;
    font-weight: 600;
  }
  .sessions-card .session-bar-track {
    flex: 0 0 70px;
    height: 5px;
    opacity: 0.5;
  }
  .sessions-card .session-bar-fill {
    background: rgba(255, 77, 77, 0.55);
  }
  .sessions-clear-btn {
    margin-left: auto;
  }
  
  /* ===== EMPTY DETAIL STATE ===== */
  .session-detail-empty {
    margin-top: 18px;
    background: var(--bg-secondary);
    border-radius: 8px;
    border: 2px dashed var(--border);
    padding: 32px;
    text-align: center;
  }
  .session-detail-empty-title {
    font-size: 15px;
    font-weight: 600;
    color: var(--text);
    margin-bottom: 8px;
  }
  .session-detail-empty-desc {
    font-size: 13px;
    color: var(--muted);
    margin-bottom: 16px;
    line-height: 1.5;
  }
  .session-detail-empty-features {
    display: flex;
    justify-content: center;
    gap: 24px;
    flex-wrap: wrap;
  }
  .session-detail-empty-feature {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    color: var(--muted);
  }
  .session-detail-empty-feature .icon {
    font-size: 16px;
  }
  
  /* ===== SESSION DETAIL PANEL ===== */
  .session-detail-panel {
    margin-top: 12px;
    /* inherits background, border-radius, shadow from .card */
    border: 2px solid var(--accent) !important;
  }
  .session-detail-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px;
    border-bottom: 1px solid var(--border);
    cursor: pointer;
  }
  .session-detail-header:hover {
    background: var(--bg-hover);
  }
  .session-detail-title {
    font-weight: 600;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .session-detail-header-left {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .session-close-btn {
    background: var(--bg);
    border: 1px solid var(--border);
    color: var(--text);
    cursor: pointer;
    padding: 2px 8px;
    font-size: 16px;
    line-height: 1;
    border-radius: 4px;
    transition: background 0.15s, color 0.15s;
  }
  .session-close-btn:hover {
    background: var(--bg-hover);
    color: var(--text);
    border-color: var(--accent);
  }
  .session-detail-stats {
    display: flex;
    gap: 10px;
    font-size: 12px;
    color: var(--muted);
  }
  .session-detail-stats strong {
    color: var(--text);
    font-family: var(--font-mono);
  }
  .session-detail-content {
    padding: 12px;
  }
  .session-summary-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 8px;
    margin-bottom: 12px;
  }
  .session-summary-card {
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 8px;
    background: var(--bg-secondary);
  }
  .session-summary-title {
    font-size: 11px;
    color: var(--muted);
    margin-bottom: 4px;
  }
  .session-summary-value {
    font-size: 14px;
    font-weight: 600;
  }
  .session-summary-meta {
    font-size: 11px;
    color: var(--muted);
    margin-top: 4px;
  }
  .session-detail-row {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
    /* Separate "Usage Over Time" from the summary + Top Tools/Model Mix cards above. */
    margin-top: 12px;
    margin-bottom: 10px;
  }
  .session-detail-bottom {
    display: grid;
    grid-template-columns: minmax(0, 1.8fr) minmax(0, 1fr);
    gap: 10px;
    align-items: stretch;
  }
  .session-detail-bottom .session-logs-compact {
    margin: 0;
    display: flex;
    flex-direction: column;
  }
  .session-detail-bottom .session-logs-compact .session-logs-list {
    flex: 1 1 auto;
    max-height: none;
  }
  .context-details-panel {
    display: flex;
    flex-direction: column;
    gap: 8px;
    background: var(--bg);
    border-radius: 6px;
    border: 1px solid var(--border);
    padding: 12px;
  }
  .context-breakdown-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 10px;
    margin-top: 8px;
  }
  .context-breakdown-card {
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 8px;
    background: var(--bg-secondary);
  }
  .context-breakdown-title {
    font-size: 11px;
    font-weight: 600;
    margin-bottom: 6px;
  }
  .context-breakdown-list {
    display: flex;
    flex-direction: column;
    gap: 6px;
    font-size: 11px;
  }
  .context-breakdown-item {
    display: flex;
    justify-content: space-between;
    gap: 8px;
  }
  .context-breakdown-more {
    font-size: 10px;
    color: var(--muted);
    margin-top: 4px;
  }
  .context-breakdown-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }
  .context-expand-btn {
    border: 1px solid var(--border);
    background: var(--bg-secondary);
    color: var(--muted);
    font-size: 11px;
    padding: 4px 8px;
    border-radius: 999px;
    cursor: pointer;
    transition: all 0.15s;
  }
  .context-expand-btn:hover {
    color: var(--text);
    border-color: var(--border-strong);
    background: var(--bg);
  }
  
  /* ===== COMPACT TIMESERIES ===== */
  .session-timeseries-compact {
    background: var(--bg);
    border-radius: 6px;
    border: 1px solid var(--border);
    padding: 12px;
    margin: 0;
  }
  .session-timeseries-compact .timeseries-header-row {
    margin-bottom: 8px;
  }
  .session-timeseries-compact .timeseries-header {
    font-size: 12px;
  }
  .session-timeseries-compact .timeseries-summary {
    font-size: 11px;
    margin-top: 8px;
  }
  
  /* ===== COMPACT CONTEXT ===== */
  .context-weight-compact {
    background: var(--bg);
    border-radius: 6px;
    border: 1px solid var(--border);
    padding: 12px;
    margin: 0;
  }
  .context-weight-compact .context-weight-header {
    font-size: 12px;
    margin-bottom: 4px;
  }
  .context-weight-compact .context-weight-desc {
    font-size: 11px;
    margin-bottom: 8px;
  }
  .context-weight-compact .context-stacked-bar {
    height: 16px;
  }
  .context-weight-compact .context-legend {
    font-size: 11px;
    gap: 10px;
    margin-top: 8px;
  }
  .context-weight-compact .context-total {
    font-size: 11px;
    margin-top: 6px;
  }
  .context-weight-compact .context-details {
    margin-top: 8px;
  }
  .context-weight-compact .context-details summary {
    font-size: 12px;
    padding: 6px 10px;
  }
  
  /* ===== COMPACT LOGS ===== */
  .session-logs-compact {
    background: var(--bg);
    border-radius: 10px;
    border: 1px solid var(--border);
    overflow: hidden;
    margin: 0;
    display: flex;
    flex-direction: column;
  }
  .session-logs-compact .session-logs-header {
    padding: 10px 12px;
    font-size: 12px;
  }
  .session-logs-compact .session-logs-list {
    max-height: none;
    flex: 1 1 auto;
    overflow: auto;
  }
  .session-logs-compact .session-log-entry {
    padding: 8px 12px;
  }
  .session-logs-compact .session-log-content {
    font-size: 12px;
    max-height: 160px;
  }
  .session-log-tools {
    margin-top: 6px;
    border: 1px solid var(--border);
    border-radius: 8px;
    background: var(--bg-secondary);
    padding: 6px 8px;
    font-size: 11px;
    color: var(--text);
  }
  .session-log-tools summary {
    cursor: pointer;
    list-style: none;
    display: flex;
    align-items: center;
    gap: 6px;
    font-weight: 600;
  }
  .session-log-tools summary::-webkit-details-marker {
    display: none;
  }
  .session-log-tools-list {
    margin-top: 6px;
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
  .session-log-tools-pill {
    border: 1px solid var(--border);
    border-radius: 999px;
    padding: 2px 8px;
    font-size: 10px;
    background: var(--bg);
    color: var(--text);
  }

  /* ===== RESPONSIVE ===== */
  @media (max-width: 900px) {
    .usage-grid {
      grid-template-columns: 1fr;
    }
    .session-detail-row {
      grid-template-columns: 1fr;
    }
  }
  @media (max-width: 600px) {
    .session-bar-label {
      flex: 0 0 100px;
    }
    .cost-breakdown-legend {
      gap: 10px;
    }
    .legend-item {
      font-size: 11px;
    }
    .daily-chart-bars {
      height: 170px;
      gap: 6px;
      padding-bottom: 40px;
    }
    .daily-bar-label {
      font-size: 8px;
      bottom: -30px;
      transform: rotate(-45deg);
    }
    .usage-mosaic-grid {
      grid-template-columns: 1fr;
    }
    .usage-hour-grid {
      grid-template-columns: repeat(12, minmax(10px, 1fr));
    }
    .usage-hour-cell {
      height: 22px;
    }
  }

  /* ===== CHART AXIS ===== */
  .ts-axis-label {
    font-size: 5px;
    fill: var(--muted);
  }

  /* ===== RANGE SELECTION HANDLES ===== */
  .chart-handle-zone {
    position: absolute;
    top: 0;
    width: 16px;
    height: 100%;
    cursor: col-resize;
    z-index: 10;
    transform: translateX(-50%);
  }

  .timeseries-chart-wrapper {
    position: relative;
  }

  .timeseries-reset-btn {
    background: var(--bg-secondary);
    border: 1px solid var(--border);
    border-radius: 999px;
    padding: 2px 10px;
    font-size: 11px;
    color: var(--muted);
    cursor: pointer;
    transition: all 0.15s ease;
    margin-left: 8px;
  }

  .timeseries-reset-btn:hover {
    background: var(--bg-hover);
    color: var(--text);
    border-color: var(--border-strong);
  }
`,Lf=[Tf,_f,Ef].join(`
`);function Mf(e){if(e.loading&&!e.totals)return c`
      <style>
        @keyframes initial-spin {
          to { transform: rotate(360deg); }
        }
        @keyframes initial-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
      </style>
      <section class="card">
        <div class="row" style="justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 12px;">
          <div style="flex: 1; min-width: 250px;">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 2px;">
              <div class="card-title" style="margin: 0;">Token Usage</div>
              <span style="
                display: inline-flex;
                align-items: center;
                gap: 6px;
                padding: 4px 10px;
                background: rgba(255, 77, 77, 0.1);
                border-radius: 4px;
                font-size: 12px;
                color: #ff4d4d;
              ">
                <span style="
                  width: 10px;
                  height: 10px;
                  border: 2px solid #ff4d4d;
                  border-top-color: transparent;
                  border-radius: 50%;
                  animation: initial-spin 0.6s linear infinite;
                "></span>
                Loading
              </span>
            </div>
          </div>
          <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 8px;">
            <div style="display: flex; gap: 8px; align-items: center;">
              <input type="date" .value=${e.startDate} disabled style="padding: 6px 10px; border: 1px solid var(--border); border-radius: 6px; background: var(--bg); color: var(--text); font-size: 13px; opacity: 0.6;" />
              <span style="color: var(--muted);">to</span>
              <input type="date" .value=${e.endDate} disabled style="padding: 6px 10px; border: 1px solid var(--border); border-radius: 6px; background: var(--bg); color: var(--text); font-size: 13px; opacity: 0.6;" />
            </div>
          </div>
        </div>
      </section>
    `;const t=e.chartMode==="tokens",n=e.query.trim().length>0,s=e.queryDraft.trim().length>0,i=[...e.sessions].toSorted((M,D)=>{const F=t?M.usage?.totalTokens??0:M.usage?.totalCost??0;return(t?D.usage?.totalTokens??0:D.usage?.totalCost??0)-F}),a=e.selectedDays.length>0?i.filter(M=>{if(M.usage?.activityDates?.length)return M.usage.activityDates.some(K=>e.selectedDays.includes(K));if(!M.updatedAt)return!1;const D=new Date(M.updatedAt),F=`${D.getFullYear()}-${String(D.getMonth()+1).padStart(2,"0")}-${String(D.getDate()).padStart(2,"0")}`;return e.selectedDays.includes(F)}):i,o=(M,D)=>{if(D.length===0)return!0;const F=M.usage,K=F?.firstActivity??M.updatedAt,ce=F?.lastActivity??M.updatedAt;if(!K||!ce)return!1;const J=Math.min(K,ce),se=Math.max(K,ce);let G=J;for(;G<=se;){const z=new Date(G),ie=xa(z,e.timeZone);if(D.includes(ie))return!0;const le=$a(z,e.timeZone);G=Math.min(le.getTime(),se)+1}return!1},r=e.selectedHours.length>0?a.filter(M=>o(M,e.selectedHours)):a,l=Wp(r,e.query),d=l.sessions,p=l.warnings,g=rf(e.queryDraft,i,e.aggregates),h=ya(e.query),u=M=>{const D=Lt(M);return h.filter(F=>Lt(F.key??"")===D).map(F=>F.value).filter(Boolean)},f=M=>{const D=new Set;for(const F of M)F&&D.add(F);return Array.from(D)},v=f(i.map(M=>M.agentId)).slice(0,12),w=f(i.map(M=>M.channel)).slice(0,12),S=f([...i.map(M=>M.modelProvider),...i.map(M=>M.providerOverride),...e.aggregates?.byProvider.map(M=>M.provider)??[]]).slice(0,12),C=f([...i.map(M=>M.model),...e.aggregates?.byModel.map(M=>M.model)??[]]).slice(0,12),k=f(e.aggregates?.tools.tools.map(M=>M.name)??[]).slice(0,12),A=e.selectedSessions.length===1?e.sessions.find(M=>M.key===e.selectedSessions[0])??d.find(M=>M.key===e.selectedSessions[0]):null,E=M=>M.reduce((D,F)=>(F.usage&&(D.input+=F.usage.input,D.output+=F.usage.output,D.cacheRead+=F.usage.cacheRead,D.cacheWrite+=F.usage.cacheWrite,D.totalTokens+=F.usage.totalTokens,D.totalCost+=F.usage.totalCost,D.inputCost+=F.usage.inputCost??0,D.outputCost+=F.usage.outputCost??0,D.cacheReadCost+=F.usage.cacheReadCost??0,D.cacheWriteCost+=F.usage.cacheWriteCost??0,D.missingCostEntries+=F.usage.missingCostEntries??0),D),{input:0,output:0,cacheRead:0,cacheWrite:0,totalTokens:0,totalCost:0,inputCost:0,outputCost:0,cacheReadCost:0,cacheWriteCost:0,missingCostEntries:0}),T=M=>e.costDaily.filter(F=>M.includes(F.date)).reduce((F,K)=>(F.input+=K.input,F.output+=K.output,F.cacheRead+=K.cacheRead,F.cacheWrite+=K.cacheWrite,F.totalTokens+=K.totalTokens,F.totalCost+=K.totalCost,F.inputCost+=K.inputCost??0,F.outputCost+=K.outputCost??0,F.cacheReadCost+=K.cacheReadCost??0,F.cacheWriteCost+=K.cacheWriteCost??0,F),{input:0,output:0,cacheRead:0,cacheWrite:0,totalTokens:0,totalCost:0,inputCost:0,outputCost:0,cacheReadCost:0,cacheWriteCost:0,missingCostEntries:0});let R,H;const Z=i.length;if(e.selectedSessions.length>0){const M=d.filter(D=>e.selectedSessions.includes(D.key));R=E(M),H=M.length}else e.selectedDays.length>0&&e.selectedHours.length===0?(R=T(e.selectedDays),H=d.length):e.selectedHours.length>0||n?(R=E(d),H=d.length):(R=e.totals,H=Z);const te=e.selectedSessions.length>0?d.filter(M=>e.selectedSessions.includes(M.key)):n||e.selectedHours.length>0?d:e.selectedDays.length>0?a:i,I=tf(te,e.aggregates),q=e.selectedSessions.length>0?(()=>{const M=d.filter(F=>e.selectedSessions.includes(F.key)),D=new Set;for(const F of M)for(const K of F.usage?.activityDates??[])D.add(K);return D.size>0?e.costDaily.filter(F=>D.has(F.date)):e.costDaily})():e.costDaily,ne=nf(te,R,I),oe=!e.loading&&!e.totals&&e.sessions.length===0,_=(R?.missingCostEntries??0)>0||(R?R.totalTokens>0&&R.totalCost===0&&R.input+R.output+R.cacheRead+R.cacheWrite>0:!1),j=[{label:"Today",days:1},{label:"7d",days:7},{label:"30d",days:30}],Q=M=>{const D=new Date,F=new Date;F.setDate(F.getDate()-(M-1)),e.onStartDateChange(ti(F)),e.onEndDateChange(ti(D))},re=(M,D,F)=>{if(F.length===0)return m;const K=u(M),ce=new Set(K.map(G=>Lt(G))),J=F.length>0&&F.every(G=>ce.has(Lt(G))),se=K.length;return c`
      <details
        class="usage-filter-select"
        @toggle=${G=>{const z=G.currentTarget;if(!z.open)return;const ie=le=>{le.composedPath().includes(z)||(z.open=!1,window.removeEventListener("click",ie,!0))};window.addEventListener("click",ie,!0)}}
      >
        <summary>
          <span>${D}</span>
          ${se>0?c`<span class="usage-filter-badge">${se}</span>`:c`
                  <span class="usage-filter-badge">All</span>
                `}
        </summary>
        <div class="usage-filter-popover">
          <div class="usage-filter-actions">
            <button
              class="btn btn-sm"
              @click=${G=>{G.preventDefault(),G.stopPropagation(),e.onQueryDraftChange(No(e.queryDraft,M,F))}}
              ?disabled=${J}
            >
              Select All
            </button>
            <button
              class="btn btn-sm"
              @click=${G=>{G.preventDefault(),G.stopPropagation(),e.onQueryDraftChange(No(e.queryDraft,M,[]))}}
              ?disabled=${se===0}
            >
              Clear
            </button>
          </div>
          <div class="usage-filter-options">
            ${F.map(G=>{const z=ce.has(Lt(G));return c`
                <label class="usage-filter-option">
                  <input
                    type="checkbox"
                    .checked=${z}
                    @change=${ie=>{const le=ie.target,he=`${M}:${G}`;e.onQueryDraftChange(le.checked?cf(e.queryDraft,he):Fo(e.queryDraft,he))}}
                  />
                  <span>${G}</span>
                </label>
              `})}
          </div>
        </div>
      </details>
    `},fe=ti(new Date);return c`
    <style>${Lf}</style>

    <section class="usage-page-header">
      <div class="usage-page-title">Usage</div>
      <div class="usage-page-subtitle">See where tokens go, when sessions spike, and what drives cost.</div>
    </section>

    <section class="card usage-header ${e.headerPinned?"pinned":""}">
      <div class="usage-header-row">
        <div class="usage-header-title">
          <div class="card-title" style="margin: 0;">Filters</div>
          ${e.loading?c`
                  <span class="usage-refresh-indicator">Loading</span>
                `:m}
          ${oe?c`
                  <span class="usage-query-hint">Select a date range and click Refresh to load usage.</span>
                `:m}
        </div>
        <div class="usage-header-metrics">
          ${R?c`
                <span class="usage-metric-badge">
                  <strong>${B(R.totalTokens)}</strong> tokens
                </span>
                <span class="usage-metric-badge">
                  <strong>${X(R.totalCost)}</strong> cost
                </span>
                <span class="usage-metric-badge">
                  <strong>${H}</strong>
                  session${H!==1?"s":""}
                </span>
              `:m}
          <button
            class="usage-pin-btn ${e.headerPinned?"active":""}"
            title=${e.headerPinned?"Unpin filters":"Pin filters"}
            @click=${e.onToggleHeaderPinned}
          >
            ${e.headerPinned?"Pinned":"Pin"}
          </button>
          <details
            class="usage-export-menu"
            @toggle=${M=>{const D=M.currentTarget;if(!D.open)return;const F=K=>{K.composedPath().includes(D)||(D.open=!1,window.removeEventListener("click",F,!0))};window.addEventListener("click",F,!0)}}
          >
            <summary class="usage-export-button">Export ▾</summary>
            <div class="usage-export-popover">
              <div class="usage-export-list">
                <button
                  class="usage-export-item"
                  @click=${()=>ni(`openclaw-usage-sessions-${fe}.csv`,af(d),"text/csv")}
                  ?disabled=${d.length===0}
                >
                  Sessions CSV
                </button>
                <button
                  class="usage-export-item"
                  @click=${()=>ni(`openclaw-usage-daily-${fe}.csv`,of(q),"text/csv")}
                  ?disabled=${q.length===0}
                >
                  Daily CSV
                </button>
                <button
                  class="usage-export-item"
                  @click=${()=>ni(`openclaw-usage-${fe}.json`,JSON.stringify({totals:R,sessions:d,daily:q,aggregates:I},null,2),"application/json")}
                  ?disabled=${d.length===0&&q.length===0}
                >
                  JSON
                </button>
              </div>
            </div>
          </details>
        </div>
      </div>
      <div class="usage-header-row">
        <div class="usage-controls">
          ${uf(e.selectedDays,e.selectedHours,e.selectedSessions,e.sessions,e.onClearDays,e.onClearHours,e.onClearSessions,e.onClearFilters)}
          <div class="usage-presets">
            ${j.map(M=>c`
                <button class="btn btn-sm" @click=${()=>Q(M.days)}>
                  ${M.label}
                </button>
              `)}
          </div>
          <input
            type="date"
            .value=${e.startDate}
            title="Start Date"
            @change=${M=>e.onStartDateChange(M.target.value)}
          />
          <span style="color: var(--muted);">to</span>
          <input
            type="date"
            .value=${e.endDate}
            title="End Date"
            @change=${M=>e.onEndDateChange(M.target.value)}
          />
          <select
            title="Time zone"
            .value=${e.timeZone}
            @change=${M=>e.onTimeZoneChange(M.target.value)}
          >
            <option value="local">Local</option>
            <option value="utc">UTC</option>
          </select>
          <div class="chart-toggle">
            <button
              class="toggle-btn ${t?"active":""}"
              @click=${()=>e.onChartModeChange("tokens")}
            >
              Tokens
            </button>
            <button
              class="toggle-btn ${t?"":"active"}"
              @click=${()=>e.onChartModeChange("cost")}
            >
              Cost
            </button>
          </div>
          <button
            class="btn btn-sm usage-action-btn usage-primary-btn"
            @click=${e.onRefresh}
            ?disabled=${e.loading}
          >
            Refresh
          </button>
        </div>
        
      </div>

      <div style="margin-top: 12px;">
          <div class="usage-query-bar">
          <input
            class="usage-query-input"
            type="text"
            .value=${e.queryDraft}
            placeholder="Filter sessions (e.g. key:agent:main:cron* model:gpt-4o has:errors minTokens:2000)"
            @input=${M=>e.onQueryDraftChange(M.target.value)}
            @keydown=${M=>{M.key==="Enter"&&(M.preventDefault(),e.onApplyQuery())}}
          />
          <div class="usage-query-actions">
            <button
              class="btn btn-sm usage-action-btn usage-secondary-btn"
              @click=${e.onApplyQuery}
              ?disabled=${e.loading||!s&&!n}
            >
              Filter (client-side)
            </button>
            ${s||n?c`<button class="btn btn-sm usage-action-btn usage-secondary-btn" @click=${e.onClearQuery}>Clear</button>`:m}
            <span class="usage-query-hint">
              ${n?`${d.length} of ${Z} sessions match`:`${Z} sessions in range`}
            </span>
          </div>
        </div>
        <div class="usage-filter-row">
          ${re("agent","Agent",v)}
          ${re("channel","Channel",w)}
          ${re("provider","Provider",S)}
          ${re("model","Model",C)}
          ${re("tool","Tool",k)}
          <span class="usage-query-hint">
            Tip: use filters or click bars to filter days.
          </span>
        </div>
        ${h.length>0?c`
                <div class="usage-query-chips">
                  ${h.map(M=>{const D=M.raw;return c`
                      <span class="usage-query-chip">
                        ${D}
                        <button
                          title="Remove filter"
                          @click=${()=>e.onQueryDraftChange(Fo(e.queryDraft,D))}
                        >
                          ×
                        </button>
                      </span>
                    `})}
                </div>
              `:m}
        ${g.length>0?c`
                <div class="usage-query-suggestions">
                  ${g.map(M=>c`
                      <button
                        class="usage-query-suggestion"
                        @click=${()=>e.onQueryDraftChange(lf(e.queryDraft,M.value))}
                      >
                        ${M.label}
                      </button>
                    `)}
                </div>
              `:m}
        ${p.length>0?c`
                <div class="callout warning" style="margin-top: 8px;">
                  ${p.join(" · ")}
                </div>
              `:m}
      </div>

      ${e.error?c`<div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:m}

      ${e.sessionsLimitReached?c`
              <div class="callout warning" style="margin-top: 12px">
                Showing first 1,000 sessions. Narrow date range for complete results.
              </div>
            `:m}
    </section>

    ${ff(R,I,ne,_,Qp(te,e.timeZone),H,Z)}

    ${Xp(te,e.timeZone,e.selectedHours,e.onSelectHour)}

    <!-- Two-column layout: Daily+Breakdown on left, Sessions on right -->
    <div class="usage-grid">
      <div class="usage-grid-left">
        <div class="card usage-left-card">
          ${gf(q,e.selectedDays,e.chartMode,e.dailyChartMode,e.onDailyChartModeChange,e.onSelectDay)}
          ${R?pf(R,e.chartMode):m}
        </div>
      </div>
      <div class="usage-grid-right">
        ${hf(d,e.selectedSessions,e.selectedDays,t,e.sessionSort,e.sessionSortDir,e.recentSessions,e.sessionsTab,e.onSelectSession,e.onSessionSortChange,e.onSessionSortDirChange,e.onSessionsTabChange,e.visibleColumns,Z,e.onClearSessions)}
      </div>
    </div>

    <!-- Session Detail Panel (when selected) or Empty State -->
    ${A?kf(A,e.timeSeries,e.timeSeriesLoading,e.timeSeriesMode,e.onTimeSeriesModeChange,e.timeSeriesBreakdownMode,e.onTimeSeriesBreakdownChange,e.timeSeriesCursorStart,e.timeSeriesCursorEnd,e.onTimeSeriesCursorRangeChange,e.startDate,e.endDate,e.selectedDays,e.sessionLogs,e.sessionLogsLoading,e.sessionLogsExpanded,e.onToggleSessionLogsExpanded,{roles:e.logFilterRoles,tools:e.logFilterTools,hasTools:e.logFilterHasTools,query:e.logFilterQuery},e.onLogFilterRolesChange,e.onLogFilterToolsChange,e.onLogFilterHasToolsChange,e.onLogFilterQueryChange,e.onLogFilterClear,e.contextExpanded,e.onToggleContextExpanded,e.onClearSessions):yf()}
  `}let si=null;const Bo=e=>{si&&clearTimeout(si),si=window.setTimeout(()=>{Mi(e)},400)};function Rf(e){return e.tab!=="usage"?m:Mf({loading:e.usageLoading,error:e.usageError,startDate:e.usageStartDate,endDate:e.usageEndDate,sessions:e.usageResult?.sessions??[],sessionsLimitReached:(e.usageResult?.sessions?.length??0)>=1e3,totals:e.usageResult?.totals??null,aggregates:e.usageResult?.aggregates??null,costDaily:e.usageCostSummary?.daily??[],selectedSessions:e.usageSelectedSessions,selectedDays:e.usageSelectedDays,selectedHours:e.usageSelectedHours,chartMode:e.usageChartMode,dailyChartMode:e.usageDailyChartMode,timeSeriesMode:e.usageTimeSeriesMode,timeSeriesBreakdownMode:e.usageTimeSeriesBreakdownMode,timeSeries:e.usageTimeSeries,timeSeriesLoading:e.usageTimeSeriesLoading,timeSeriesCursorStart:e.usageTimeSeriesCursorStart,timeSeriesCursorEnd:e.usageTimeSeriesCursorEnd,sessionLogs:e.usageSessionLogs,sessionLogsLoading:e.usageSessionLogsLoading,sessionLogsExpanded:e.usageSessionLogsExpanded,logFilterRoles:e.usageLogFilterRoles,logFilterTools:e.usageLogFilterTools,logFilterHasTools:e.usageLogFilterHasTools,logFilterQuery:e.usageLogFilterQuery,query:e.usageQuery,queryDraft:e.usageQueryDraft,sessionSort:e.usageSessionSort,sessionSortDir:e.usageSessionSortDir,recentSessions:e.usageRecentSessions,sessionsTab:e.usageSessionsTab,visibleColumns:e.usageVisibleColumns,timeZone:e.usageTimeZone,contextExpanded:e.usageContextExpanded,headerPinned:e.usageHeaderPinned,onStartDateChange:t=>{e.usageStartDate=t,e.usageSelectedDays=[],e.usageSelectedHours=[],e.usageSelectedSessions=[],Bo(e)},onEndDateChange:t=>{e.usageEndDate=t,e.usageSelectedDays=[],e.usageSelectedHours=[],e.usageSelectedSessions=[],Bo(e)},onRefresh:()=>Mi(e),onTimeZoneChange:t=>{e.usageTimeZone=t,e.usageSelectedDays=[],e.usageSelectedHours=[],e.usageSelectedSessions=[],Mi(e)},onToggleContextExpanded:()=>{e.usageContextExpanded=!e.usageContextExpanded},onToggleSessionLogsExpanded:()=>{e.usageSessionLogsExpanded=!e.usageSessionLogsExpanded},onLogFilterRolesChange:t=>{e.usageLogFilterRoles=t},onLogFilterToolsChange:t=>{e.usageLogFilterTools=t},onLogFilterHasToolsChange:t=>{e.usageLogFilterHasTools=t},onLogFilterQueryChange:t=>{e.usageLogFilterQuery=t},onLogFilterClear:()=>{e.usageLogFilterRoles=[],e.usageLogFilterTools=[],e.usageLogFilterHasTools=!1,e.usageLogFilterQuery=""},onToggleHeaderPinned:()=>{e.usageHeaderPinned=!e.usageHeaderPinned},onSelectHour:(t,n)=>{if(n&&e.usageSelectedHours.length>0){const s=Array.from({length:24},(r,l)=>l),i=e.usageSelectedHours[e.usageSelectedHours.length-1],a=s.indexOf(i),o=s.indexOf(t);if(a!==-1&&o!==-1){const[r,l]=a<o?[a,o]:[o,a],d=s.slice(r,l+1);e.usageSelectedHours=[...new Set([...e.usageSelectedHours,...d])]}}else e.usageSelectedHours.includes(t)?e.usageSelectedHours=e.usageSelectedHours.filter(s=>s!==t):e.usageSelectedHours=[...e.usageSelectedHours,t]},onQueryDraftChange:t=>{e.usageQueryDraft=t,e.usageQueryDebounceTimer&&window.clearTimeout(e.usageQueryDebounceTimer),e.usageQueryDebounceTimer=window.setTimeout(()=>{e.usageQuery=e.usageQueryDraft,e.usageQueryDebounceTimer=null},250)},onApplyQuery:()=>{e.usageQueryDebounceTimer&&(window.clearTimeout(e.usageQueryDebounceTimer),e.usageQueryDebounceTimer=null),e.usageQuery=e.usageQueryDraft},onClearQuery:()=>{e.usageQueryDebounceTimer&&(window.clearTimeout(e.usageQueryDebounceTimer),e.usageQueryDebounceTimer=null),e.usageQueryDraft="",e.usageQuery=""},onSessionSortChange:t=>{e.usageSessionSort=t},onSessionSortDirChange:t=>{e.usageSessionSortDir=t},onSessionsTabChange:t=>{e.usageSessionsTab=t},onToggleColumn:t=>{e.usageVisibleColumns.includes(t)?e.usageVisibleColumns=e.usageVisibleColumns.filter(n=>n!==t):e.usageVisibleColumns=[...e.usageVisibleColumns,t]},onSelectSession:(t,n)=>{if(e.usageTimeSeries=null,e.usageSessionLogs=null,e.usageRecentSessions=[t,...e.usageRecentSessions.filter(s=>s!==t)].slice(0,8),n&&e.usageSelectedSessions.length>0){const s=e.usageChartMode==="tokens",a=[...e.usageResult?.sessions??[]].toSorted((d,p)=>{const g=s?d.usage?.totalTokens??0:d.usage?.totalCost??0;return(s?p.usage?.totalTokens??0:p.usage?.totalCost??0)-g}).map(d=>d.key),o=e.usageSelectedSessions[e.usageSelectedSessions.length-1],r=a.indexOf(o),l=a.indexOf(t);if(r!==-1&&l!==-1){const[d,p]=r<l?[r,l]:[l,r],g=a.slice(d,p+1),h=[...new Set([...e.usageSelectedSessions,...g])];e.usageSelectedSessions=h}}else e.usageSelectedSessions.length===1&&e.usageSelectedSessions[0]===t?e.usageSelectedSessions=[]:e.usageSelectedSessions=[t];e.usageTimeSeriesCursorStart=null,e.usageTimeSeriesCursorEnd=null,e.usageSelectedSessions.length===1&&(Op(e,e.usageSelectedSessions[0]),Bp(e,e.usageSelectedSessions[0]))},onSelectDay:(t,n)=>{if(n&&e.usageSelectedDays.length>0){const s=(e.usageCostSummary?.daily??[]).map(r=>r.date),i=e.usageSelectedDays[e.usageSelectedDays.length-1],a=s.indexOf(i),o=s.indexOf(t);if(a!==-1&&o!==-1){const[r,l]=a<o?[a,o]:[o,a],d=s.slice(r,l+1),p=[...new Set([...e.usageSelectedDays,...d])];e.usageSelectedDays=p}}else e.usageSelectedDays.includes(t)?e.usageSelectedDays=e.usageSelectedDays.filter(s=>s!==t):e.usageSelectedDays=[t]},onChartModeChange:t=>{e.usageChartMode=t},onDailyChartModeChange:t=>{e.usageDailyChartMode=t},onTimeSeriesModeChange:t=>{e.usageTimeSeriesMode=t},onTimeSeriesBreakdownChange:t=>{e.usageTimeSeriesBreakdownMode=t},onTimeSeriesCursorRangeChange:(t,n)=>{e.usageTimeSeriesCursorStart=t,e.usageTimeSeriesCursorEnd=n},onClearDays:()=>{e.usageSelectedDays=[]},onClearHours:()=>{e.usageSelectedHours=[]},onClearSessions:()=>{e.usageSelectedSessions=[],e.usageTimeSeries=null,e.usageSessionLogs=null},onClearFilters:()=>{e.usageSelectedDays=[],e.usageSelectedHours=[],e.usageSelectedSessions=[],e.usageTimeSeries=null,e.usageSessionLogs=null}})}const wa={CHILD:2},ka=e=>(...t)=>({_$litDirective$:e,values:t});let Sa=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,s){this._$Ct=t,this._$AM=n,this._$Ci=s}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}};const{I:If}=dd,Uo=e=>e,Pf=e=>e.strings===void 0,zo=()=>document.createComment(""),un=(e,t,n)=>{const s=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(n===void 0){const a=s.insertBefore(zo(),i),o=s.insertBefore(zo(),i);n=new If(a,o,e,e.options)}else{const a=n._$AB.nextSibling,o=n._$AM,r=o!==e;if(r){let l;n._$AQ?.(e),n._$AM=e,n._$AP!==void 0&&(l=e._$AU)!==o._$AU&&n._$AP(l)}if(a!==i||r){let l=n._$AA;for(;l!==a;){const d=Uo(l).nextSibling;Uo(s).insertBefore(l,i),l=d}}}return n},At=(e,t,n=e)=>(e._$AI(t,n),e),Df={},Ff=(e,t=Df)=>e._$AH=t,Nf=e=>e._$AH,ii=e=>{e._$AR(),e._$AA.remove()};const Ho=(e,t,n)=>{const s=new Map;for(let i=t;i<=n;i++)s.set(e[i],i);return s},Yl=ka(class extends Sa{constructor(e){if(super(e),e.type!==wa.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,n){let s;n===void 0?n=t:t!==void 0&&(s=t);const i=[],a=[];let o=0;for(const r of e)i[o]=s?s(r,o):o,a[o]=n(r,o),o++;return{values:a,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,s]){const i=Nf(e),{values:a,keys:o}=this.dt(t,n,s);if(!Array.isArray(i))return this.ut=o,a;const r=this.ut??=[],l=[];let d,p,g=0,h=i.length-1,u=0,f=a.length-1;for(;g<=h&&u<=f;)if(i[g]===null)g++;else if(i[h]===null)h--;else if(r[g]===o[u])l[u]=At(i[g],a[u]),g++,u++;else if(r[h]===o[f])l[f]=At(i[h],a[f]),h--,f--;else if(r[g]===o[f])l[f]=At(i[g],a[f]),un(e,l[f+1],i[g]),g++,f--;else if(r[h]===o[u])l[u]=At(i[h],a[u]),un(e,i[g],i[h]),h--,u++;else if(d===void 0&&(d=Ho(o,u,f),p=Ho(r,g,h)),d.has(r[g]))if(d.has(r[h])){const v=p.get(o[u]),w=v!==void 0?i[v]:null;if(w===null){const S=un(e,i[g]);At(S,a[u]),l[u]=S}else l[u]=At(w,a[u]),un(e,i[g],w),i[v]=null;u++}else ii(i[h]),h--;else ii(i[g]),g++;for(;u<=f;){const v=un(e,l[f+1]);At(v,a[u]),l[u++]=v}for(;g<=h;){const v=i[g++];v!==null&&ii(v)}return this.ut=o,Ff(e,l),ht}}),ge={messageSquare:c`
    <svg viewBox="0 0 24 24">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  `,barChart:c`
    <svg viewBox="0 0 24 24">
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  `,link:c`
    <svg viewBox="0 0 24 24">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  `,radio:c`
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="2" />
      <path
        d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"
      />
    </svg>
  `,fileText:c`
    <svg viewBox="0 0 24 24">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" x2="8" y1="13" y2="13" />
      <line x1="16" x2="8" y1="17" y2="17" />
      <line x1="10" x2="8" y1="9" y2="9" />
    </svg>
  `,zap:c`
    <svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
  `,monitor:c`
    <svg viewBox="0 0 24 24">
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <line x1="8" x2="16" y1="21" y2="21" />
      <line x1="12" x2="12" y1="17" y2="21" />
    </svg>
  `,settings:c`
    <svg viewBox="0 0 24 24">
      <path
        d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
      />
      <circle cx="12" cy="12" r="3" />
    </svg>
  `,bug:c`
    <svg viewBox="0 0 24 24">
      <path d="m8 2 1.88 1.88" />
      <path d="M14.12 3.88 16 2" />
      <path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" />
      <path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6" />
      <path d="M12 20v-9" />
      <path d="M6.53 9C4.6 8.8 3 7.1 3 5" />
      <path d="M6 13H2" />
      <path d="M3 21c0-2.1 1.7-3.9 3.8-4" />
      <path d="M20.97 5c0 2.1-1.6 3.8-3.5 4" />
      <path d="M22 13h-4" />
      <path d="M17.2 17c2.1.1 3.8 1.9 3.8 4" />
    </svg>
  `,scrollText:c`
    <svg viewBox="0 0 24 24">
      <path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4" />
      <path d="M19 17V5a2 2 0 0 0-2-2H4" />
      <path d="M15 8h-5" />
      <path d="M15 12h-5" />
    </svg>
  `,folder:c`
    <svg viewBox="0 0 24 24">
      <path
        d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
      />
    </svg>
  `,menu:c`
    <svg viewBox="0 0 24 24">
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  `,x:c`
    <svg viewBox="0 0 24 24">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  `,check:c`
    <svg viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5" /></svg>
  `,arrowDown:c`
    <svg viewBox="0 0 24 24">
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </svg>
  `,copy:c`
    <svg viewBox="0 0 24 24">
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  `,search:c`
    <svg viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  `,brain:c`
    <svg viewBox="0 0 24 24">
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
      <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
      <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
      <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
      <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
      <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
      <path d="M6 18a4 4 0 0 1-1.967-.516" />
      <path d="M19.967 17.484A4 4 0 0 1 18 18" />
    </svg>
  `,book:c`
    <svg viewBox="0 0 24 24">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  `,loader:c`
    <svg viewBox="0 0 24 24">
      <path d="M12 2v4" />
      <path d="m16.2 7.8 2.9-2.9" />
      <path d="M18 12h4" />
      <path d="m16.2 16.2 2.9 2.9" />
      <path d="M12 18v4" />
      <path d="m4.9 19.1 2.9-2.9" />
      <path d="M2 12h4" />
      <path d="m4.9 4.9 2.9 2.9" />
    </svg>
  `,wrench:c`
    <svg viewBox="0 0 24 24">
      <path
        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
      />
    </svg>
  `,fileCode:c`
    <svg viewBox="0 0 24 24">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <path d="m10 13-2 2 2 2" />
      <path d="m14 17 2-2-2-2" />
    </svg>
  `,edit:c`
    <svg viewBox="0 0 24 24">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  `,penLine:c`
    <svg viewBox="0 0 24 24">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  `,paperclip:c`
    <svg viewBox="0 0 24 24">
      <path
        d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
      />
    </svg>
  `,globe:c`
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  `,image:c`
    <svg viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  `,smartphone:c`
    <svg viewBox="0 0 24 24">
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  `,plug:c`
    <svg viewBox="0 0 24 24">
      <path d="M12 22v-5" />
      <path d="M9 8V2" />
      <path d="M15 8V2" />
      <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" />
    </svg>
  `,circle:c`
    <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
  `,puzzle:c`
    <svg viewBox="0 0 24 24">
      <path
        d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.076.874.54 1.02 1.02a2.5 2.5 0 1 0 3.237-3.237c-.48-.146-.944-.505-1.02-1.02a.98.98 0 0 1 .303-.917l1.526-1.526A2.402 2.402 0 0 1 11.998 2c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.236 3.236c-.464.18-.894.527-.967 1.02Z"
      />
    </svg>
  `};function Of(e){const t=e.hello?.snapshot,n=t?.sessionDefaults?.mainSessionKey?.trim();if(n)return n;const s=t?.sessionDefaults?.mainKey?.trim();return s||"main"}function Bf(e,t){e.sessionKey=t,e.chatMessage="",e.chatStream=null,e.chatStreamStartedAt=null,e.chatRunId=null,e.resetToolStream(),e.resetChatScroll(),e.applySettings({...e.settings,sessionKey:t,lastActiveSessionKey:t})}function Uf(e,t){const n=Es(t,e.basePath);return c`
    <a
      href=${n}
      class="nav-item ${e.tab===t?"active":""}"
      @click=${s=>{if(!(s.defaultPrevented||s.button!==0||s.metaKey||s.ctrlKey||s.shiftKey||s.altKey)){if(s.preventDefault(),t==="chat"){const i=Of(e);e.sessionKey!==i&&(Bf(e,i),e.loadAssistantIdentity())}e.setTab(t)}}}
      title=${Ai(t)}
    >
      <span class="nav-item__icon" aria-hidden="true">${ge[ag(t)]}</span>
      <span class="nav-item__text">${Ai(t)}</span>
    </a>
  `}function zf(e){const t=Hf(e.hello,e.sessionsResult),n=Wf(e.sessionKey,e.sessionsResult,t),s=e.onboarding,i=e.onboarding,a=e.onboarding?!1:e.settings.chatShowThinking,o=e.onboarding?!0:e.settings.chatFocusMode,r=c`
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path>
      <path d="M21 3v5h-5"></path>
    </svg>
  `,l=c`
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M4 7V4h3"></path>
      <path d="M20 7V4h-3"></path>
      <path d="M4 17v3h3"></path>
      <path d="M20 17v3h-3"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  `;return c`
    <div class="chat-controls">
      <label class="field chat-controls__session">
        <select
          .value=${e.sessionKey}
          ?disabled=${!e.connected}
          @change=${d=>{const p=d.target.value;e.sessionKey=p,e.chatMessage="",e.chatStream=null,e.chatStreamStartedAt=null,e.chatRunId=null,e.resetToolStream(),e.resetChatScroll(),e.applySettings({...e.settings,sessionKey:p,lastActiveSessionKey:p}),e.loadAssistantIdentity(),$g(e,p),In(e)}}
        >
          ${Yl(n,d=>d.key,d=>c`<option value=${d.key} title=${d.key}>
                ${d.displayName??d.key}
              </option>`)}
        </select>
      </label>
      <button
        class="btn btn--sm btn--icon"
        ?disabled=${e.chatLoading||!e.connected}
        @click=${async()=>{const d=e;d.chatManualRefreshInFlight=!0,d.chatNewMessagesBelow=!1,await d.updateComplete,d.resetToolStream();try{await Fl(e,{scheduleScroll:!1}),d.scrollToBottom({smooth:!0})}finally{requestAnimationFrame(()=>{d.chatManualRefreshInFlight=!1,d.chatNewMessagesBelow=!1})}}}
        title=${P("chat.refreshTitle")}
      >
        ${r}
      </button>
      <span class="chat-controls__separator">|</span>
      <button
        class="btn btn--sm btn--icon ${a?"active":""}"
        ?disabled=${s}
        @click=${()=>{s||e.applySettings({...e.settings,chatShowThinking:!e.settings.chatShowThinking})}}
        aria-pressed=${a}
        title=${P(s?"chat.onboardingDisabled":"chat.thinkingToggle")}
      >
        ${ge.brain}
      </button>
      <button
        class="btn btn--sm btn--icon ${o?"active":""}"
        ?disabled=${i}
        @click=${()=>{i||e.applySettings({...e.settings,chatFocusMode:!e.settings.chatFocusMode})}}
        aria-pressed=${o}
        title=${P(i?"chat.onboardingDisabled":"chat.focusToggle")}
      >
        ${l}
      </button>
    </div>
  `}function Hf(e,t){const n=e?.snapshot,s=n?.sessionDefaults?.mainSessionKey?.trim();if(s)return s;const i=n?.sessionDefaults?.mainKey?.trim();return i||(t?.sessions?.some(a=>a.key==="main")?"main":null)}const os={bluebubbles:"iMessage",telegram:"Telegram",discord:"Discord",signal:"Signal",slack:"Slack",whatsapp:"WhatsApp",matrix:"Matrix",email:"Email",sms:"SMS"},jf=Object.keys(os);function jo(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Kf(e){if(e==="main"||e==="agent:main:main")return{prefix:"",fallbackName:"Main Session"};if(e.includes(":subagent:"))return{prefix:"Subagent:",fallbackName:"Subagent:"};if(e.includes(":cron:"))return{prefix:"Cron:",fallbackName:"Cron Job:"};const t=e.match(/^agent:[^:]+:([^:]+):direct:(.+)$/);if(t){const s=t[1],i=t[2];return{prefix:"",fallbackName:`${os[s]??jo(s)} · ${i}`}}const n=e.match(/^agent:[^:]+:([^:]+):group:(.+)$/);if(n){const s=n[1];return{prefix:"",fallbackName:`${os[s]??jo(s)} Group`}}for(const s of jf)if(e===s||e.startsWith(`${s}:`))return{prefix:"",fallbackName:`${os[s]} Session`};return{prefix:"",fallbackName:e}}function ai(e,t){const n=t?.label?.trim()||"",s=t?.displayName?.trim()||"",{prefix:i,fallbackName:a}=Kf(e),o=r=>i?new RegExp(`^${i.replace(/[.*+?^${}()|[\\]\\]/g,"\\$&")}\\s*`,"i").test(r)?r:`${i} ${r}`:r;return n&&n!==e?o(n):s&&s!==e?o(s):a}function Wf(e,t,n){const s=new Set,i=[],a=n&&t?.sessions?.find(r=>r.key===n),o=t?.sessions?.find(r=>r.key===e);if(n&&(s.add(n),i.push({key:n,displayName:ai(n,a||void 0)})),s.has(e)||(s.add(e),i.push({key:e,displayName:ai(e,o)})),t?.sessions)for(const r of t.sessions)s.has(r.key)||(s.add(r.key),i.push({key:r.key,displayName:ai(r.key,r)}));return i}const qf=["system","light","dark"];function Gf(e){const t=Math.max(0,qf.indexOf(e.theme)),n=s=>i=>{const o={element:i.currentTarget};(i.clientX||i.clientY)&&(o.pointerClientX=i.clientX,o.pointerClientY=i.clientY),e.setTheme(s,o)};return c`
    <div class="theme-toggle" style="--theme-index: ${t};">
      <div class="theme-toggle__track" role="group" aria-label="Theme">
        <span class="theme-toggle__indicator"></span>
        <button
          class="theme-toggle__button ${e.theme==="system"?"active":""}"
          @click=${n("system")}
          aria-pressed=${e.theme==="system"}
          aria-label="System theme"
          title="System"
        >
          ${Yf()}
        </button>
        <button
          class="theme-toggle__button ${e.theme==="light"?"active":""}"
          @click=${n("light")}
          aria-pressed=${e.theme==="light"}
          aria-label="Light theme"
          title="Light"
        >
          ${Vf()}
        </button>
        <button
          class="theme-toggle__button ${e.theme==="dark"?"active":""}"
          @click=${n("dark")}
          aria-pressed=${e.theme==="dark"}
          aria-label="Dark theme"
          title="Dark"
        >
          ${Qf()}
        </button>
      </div>
    </div>
  `}function Vf(){return c`
    <svg class="theme-icon" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="4"></circle>
      <path d="M12 2v2"></path>
      <path d="M12 20v2"></path>
      <path d="m4.93 4.93 1.41 1.41"></path>
      <path d="m17.66 17.66 1.41 1.41"></path>
      <path d="M2 12h2"></path>
      <path d="M20 12h2"></path>
      <path d="m6.34 17.66-1.41 1.41"></path>
      <path d="m19.07 4.93-1.41 1.41"></path>
    </svg>
  `}function Qf(){return c`
    <svg class="theme-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"
      ></path>
    </svg>
  `}function Yf(){return c`
    <svg class="theme-icon" viewBox="0 0 24 24" aria-hidden="true">
      <rect width="20" height="14" x="2" y="3" rx="2"></rect>
      <line x1="8" x2="16" y1="21" y2="21"></line>
      <line x1="12" x2="12" y1="17" y2="21"></line>
    </svg>
  `}function Zl(e,t){if(!e)return e;const s=e.files.some(i=>i.name===t.name)?e.files.map(i=>i.name===t.name?t:i):[...e.files,t];return{...e,files:s}}async function oi(e,t){if(!(!e.client||!e.connected||e.agentFilesLoading)){e.agentFilesLoading=!0,e.agentFilesError=null;try{const n=await e.client.request("agents.files.list",{agentId:t});n&&(e.agentFilesList=n,e.agentFileActive&&!n.files.some(s=>s.name===e.agentFileActive)&&(e.agentFileActive=null))}catch(n){e.agentFilesError=String(n)}finally{e.agentFilesLoading=!1}}}async function Zf(e,t,n,s){if(!(!e.client||!e.connected||e.agentFilesLoading)&&!Object.hasOwn(e.agentFileContents,n)){e.agentFilesLoading=!0,e.agentFilesError=null;try{const i=await e.client.request("agents.files.get",{agentId:t,name:n});if(i?.file){const a=i.file.content??"",o=e.agentFileContents[n]??"",r=e.agentFileDrafts[n],l=s?.preserveDraft??!0;e.agentFilesList=Zl(e.agentFilesList,i.file),e.agentFileContents={...e.agentFileContents,[n]:a},(!l||!Object.hasOwn(e.agentFileDrafts,n)||r===o)&&(e.agentFileDrafts={...e.agentFileDrafts,[n]:a})}}catch(i){e.agentFilesError=String(i)}finally{e.agentFilesLoading=!1}}}async function Jf(e,t,n,s){if(!(!e.client||!e.connected||e.agentFileSaving)){e.agentFileSaving=!0,e.agentFilesError=null;try{const i=await e.client.request("agents.files.set",{agentId:t,name:n,content:s});i?.file&&(e.agentFilesList=Zl(e.agentFilesList,i.file),e.agentFileContents={...e.agentFileContents,[n]:s},e.agentFileDrafts={...e.agentFileDrafts,[n]:s})}catch(i){e.agentFilesError=String(i)}finally{e.agentFileSaving=!1}}}function Xf(e){const t=e.host??"unknown",n=e.ip?`(${e.ip})`:"",s=e.mode??"",i=e.version??"";return`${t} ${n} ${s} ${i}`.trim()}function eh(e){const t=e.ts??null;return t?ee(t):"n/a"}function Aa(e){return e?`${Ot(e)} (${ee(e)})`:"n/a"}function th(e){if(e.totalTokens==null)return"n/a";const t=e.totalTokens??0,n=e.contextTokens??0;return n?`${t} / ${n}`:String(t)}function nh(e){if(e==null)return"";try{return JSON.stringify(e,null,2)}catch{return String(e)}}function sh(e){const t=e.state??{},n=t.nextRunAtMs?Ot(t.nextRunAtMs):"n/a",s=t.lastRunAtMs?Ot(t.lastRunAtMs):"n/a";return`${t.lastStatus??"n/a"} · next ${n} · last ${s}`}function Jl(e){const t=e.schedule;if(t.kind==="at"){const n=Date.parse(t.at);return Number.isFinite(n)?`At ${Ot(n)}`:`At ${t.at}`}return t.kind==="every"?`Every ${oa(t.everyMs)}`:`Cron ${t.expr}${t.tz?` (${t.tz})`:""}`}function ih(e){const t=e.payload;if(t.kind==="systemEvent")return`System: ${t.text}`;const n=`Agent: ${t.message}`,s=e.delivery;if(s&&s.mode!=="none"){const i=s.mode==="webhook"?s.to?` (${s.to})`:"":s.channel||s.to?` (${s.channel??"last"}${s.to?` -> ${s.to}`:""})`:"";return`${n} · ${s.mode}${i}`}return n}const ah={bash:"exec","apply-patch":"apply_patch"},oh={"group:memory":["memory_search","memory_get"],"group:web":["web_search","web_fetch"],"group:fs":["read","write","edit","apply_patch"],"group:runtime":["exec","process"],"group:sessions":["sessions_list","sessions_history","sessions_send","sessions_spawn","subagents","session_status"],"group:ui":["browser","canvas"],"group:automation":["cron","gateway"],"group:messaging":["message"],"group:nodes":["nodes"],"group:openclaw":["browser","canvas","nodes","cron","message","gateway","agents_list","sessions_list","sessions_history","sessions_send","sessions_spawn","subagents","session_status","memory_search","memory_get","web_search","web_fetch","image"]},rh={minimal:{allow:["session_status"]},coding:{allow:["group:fs","group:runtime","group:sessions","group:memory","image"]},messaging:{allow:["group:messaging","sessions_list","sessions_history","sessions_send","session_status"]},full:{}};function We(e){const t=e.trim().toLowerCase();return ah[t]??t}function lh(e){return e?e.map(We).filter(Boolean):[]}function ch(e){const t=lh(e),n=[];for(const s of t){const i=oh[s];if(i){n.push(...i);continue}n.push(s)}return Array.from(new Set(n))}function dh(e){if(!e)return;const t=rh[e];if(t&&!(!t.allow&&!t.deny))return{allow:t.allow?[...t.allow]:void 0,deny:t.deny?[...t.deny]:void 0}}const Ko=[{id:"fs",label:"Files",tools:[{id:"read",label:"read",description:"Read file contents"},{id:"write",label:"write",description:"Create or overwrite files"},{id:"edit",label:"edit",description:"Make precise edits"},{id:"apply_patch",label:"apply_patch",description:"Patch files (OpenAI)"}]},{id:"runtime",label:"Runtime",tools:[{id:"exec",label:"exec",description:"Run shell commands"},{id:"process",label:"process",description:"Manage background processes"}]},{id:"web",label:"Web",tools:[{id:"web_search",label:"web_search",description:"Search the web"},{id:"web_fetch",label:"web_fetch",description:"Fetch web content"}]},{id:"memory",label:"Memory",tools:[{id:"memory_search",label:"memory_search",description:"Semantic search"},{id:"memory_get",label:"memory_get",description:"Read memory files"}]},{id:"sessions",label:"Sessions",tools:[{id:"sessions_list",label:"sessions_list",description:"List sessions"},{id:"sessions_history",label:"sessions_history",description:"Session history"},{id:"sessions_send",label:"sessions_send",description:"Send to session"},{id:"sessions_spawn",label:"sessions_spawn",description:"Spawn sub-agent"},{id:"session_status",label:"session_status",description:"Session status"}]},{id:"ui",label:"UI",tools:[{id:"browser",label:"browser",description:"Control web browser"},{id:"canvas",label:"canvas",description:"Control canvases"}]},{id:"messaging",label:"Messaging",tools:[{id:"message",label:"message",description:"Send messages"}]},{id:"automation",label:"Automation",tools:[{id:"cron",label:"cron",description:"Schedule tasks"},{id:"gateway",label:"gateway",description:"Gateway control"}]},{id:"nodes",label:"Nodes",tools:[{id:"nodes",label:"nodes",description:"Nodes + devices"}]},{id:"agents",label:"Agents",tools:[{id:"agents_list",label:"agents_list",description:"List agents"}]},{id:"media",label:"Media",tools:[{id:"image",label:"image",description:"Image understanding"}]}],uh=[{id:"minimal",label:"Minimal"},{id:"coding",label:"Coding"},{id:"messaging",label:"Messaging"},{id:"full",label:"Full"}];function Ri(e){return e.name?.trim()||e.identity?.name?.trim()||e.id}function Qn(e){const t=e.trim();if(!t||t.length>16)return!1;let n=!1;for(let s=0;s<t.length;s+=1)if(t.charCodeAt(s)>127){n=!0;break}return!(!n||t.includes("://")||t.includes("/")||t.includes("."))}function Rs(e,t){const n=t?.emoji?.trim();if(n&&Qn(n))return n;const s=e.identity?.emoji?.trim();if(s&&Qn(s))return s;const i=t?.avatar?.trim();if(i&&Qn(i))return i;const a=e.identity?.avatar?.trim();return a&&Qn(a)?a:""}function Xl(e,t){return t&&e===t?"default":null}function gh(e){if(e==null||!Number.isFinite(e))return"-";if(e<1024)return`${e} B`;const t=["KB","MB","GB","TB"];let n=e/1024,s=0;for(;n>=1024&&s<t.length-1;)n/=1024,s+=1;return`${n.toFixed(n<10?1:0)} ${t[s]}`}function Is(e,t){const n=e;return{entry:(n?.agents?.list??[]).find(a=>a?.id===t),defaults:n?.agents?.defaults,globalTools:n?.tools}}function Wo(e,t,n,s,i){const a=Is(t,e.id),r=(n&&n.agentId===e.id?n.workspace:null)||a.entry?.workspace||a.defaults?.workspace||"default",l=a.entry?.model?wn(a.entry?.model):wn(a.defaults?.model),d=i?.name?.trim()||e.identity?.name?.trim()||e.name?.trim()||a.entry?.name||e.id,p=Rs(e,i)||"-",g=Array.isArray(a.entry?.skills)?a.entry?.skills:null,h=g?.length??null;return{workspace:r,model:l,identityName:d,identityEmoji:p,skillsLabel:g?`${h} selected`:"all skills",isDefault:!!(s&&e.id===s)}}function wn(e){if(!e)return"-";if(typeof e=="string")return e.trim()||"-";if(typeof e=="object"&&e){const t=e,n=t.primary?.trim();if(n){const s=Array.isArray(t.fallbacks)?t.fallbacks.length:0;return s>0?`${n} (+${s} fallback)`:n}}return"-"}function qo(e){const t=e.match(/^(.+) \(\+\d+ fallback\)$/);return t?t[1]:e}function Go(e){if(!e)return null;if(typeof e=="string")return e.trim()||null;if(typeof e=="object"&&e){const t=e;return(typeof t.primary=="string"?t.primary:typeof t.model=="string"?t.model:typeof t.id=="string"?t.id:typeof t.value=="string"?t.value:null)?.trim()||null}return null}function ph(e){if(!e||typeof e=="string")return null;if(typeof e=="object"&&e){const t=e,n=Array.isArray(t.fallbacks)?t.fallbacks:Array.isArray(t.fallback)?t.fallback:null;return n?n.filter(s=>typeof s=="string"):null}return null}function fh(e){return e.split(",").map(t=>t.trim()).filter(Boolean)}function hh(e){const n=e?.agents?.defaults?.models;if(!n||typeof n!="object")return[];const s=[];for(const[i,a]of Object.entries(n)){const o=i.trim();if(!o)continue;const r=a&&typeof a=="object"&&"alias"in a&&typeof a.alias=="string"?a.alias?.trim():void 0,l=r&&r!==o?`${r} (${o})`:o;s.push({value:o,label:l})}return s}function mh(e,t){const n=hh(e),s=t?n.some(i=>i.value===t):!1;return t&&!s&&n.unshift({value:t,label:`Current (${t})`}),n.length===0?c`
      <option value="" disabled>No configured models</option>
    `:n.map(i=>c`<option value=${i.value}>${i.label}</option>`)}function vh(e){const t=We(e);if(!t)return{kind:"exact",value:""};if(t==="*")return{kind:"all"};if(!t.includes("*"))return{kind:"exact",value:t};const n=t.replace(/[.*+?^${}()|[\\]\\]/g,"\\$&");return{kind:"regex",value:new RegExp(`^${n.replaceAll("\\*",".*")}$`)}}function Ii(e){return Array.isArray(e)?ch(e).map(vh).filter(t=>t.kind!=="exact"||t.value.length>0):[]}function kn(e,t){for(const n of t)if(n.kind==="all"||n.kind==="exact"&&e===n.value||n.kind==="regex"&&n.value.test(e))return!0;return!1}function bh(e,t){if(!t)return!0;const n=We(e),s=Ii(t.deny);if(kn(n,s))return!1;const i=Ii(t.allow);return!!(i.length===0||kn(n,i)||n==="apply_patch"&&kn("exec",i))}function Vo(e,t){if(!Array.isArray(t)||t.length===0)return!1;const n=We(e),s=Ii(t);return!!(kn(n,s)||n==="apply_patch"&&kn("exec",s))}function yh(e){return dh(e)??void 0}function ec(e,t){return c`
    <section class="card">
      <div class="card-title">Agent Context</div>
      <div class="card-sub">${t}</div>
      <div class="agents-overview-grid" style="margin-top: 16px;">
        <div class="agent-kv">
          <div class="label">Workspace</div>
          <div class="mono">${e.workspace}</div>
        </div>
        <div class="agent-kv">
          <div class="label">Primary Model</div>
          <div class="mono">${e.model}</div>
        </div>
        <div class="agent-kv">
          <div class="label">Identity Name</div>
          <div>${e.identityName}</div>
        </div>
        <div class="agent-kv">
          <div class="label">Identity Emoji</div>
          <div>${e.identityEmoji}</div>
        </div>
        <div class="agent-kv">
          <div class="label">Skills Filter</div>
          <div>${e.skillsLabel}</div>
        </div>
        <div class="agent-kv">
          <div class="label">Default</div>
          <div>${e.isDefault?"yes":"no"}</div>
        </div>
      </div>
    </section>
  `}function xh(e,t){const n=e.channelMeta?.find(s=>s.id===t);return n?.label?n.label:e.channelLabels?.[t]??t}function $h(e){if(!e)return[];const t=new Set;for(const i of e.channelOrder??[])t.add(i);for(const i of e.channelMeta??[])t.add(i.id);for(const i of Object.keys(e.channelAccounts??{}))t.add(i);const n=[],s=e.channelOrder?.length?e.channelOrder:Array.from(t);for(const i of s)t.has(i)&&(n.push(i),t.delete(i));for(const i of t)n.push(i);return n.map(i=>({id:i,label:xh(e,i),accounts:e.channelAccounts?.[i]??[]}))}const wh=["groupPolicy","streamMode","dmPolicy"];function kh(e,t){if(!e)return null;const s=(e.channels??{})[t];if(s&&typeof s=="object")return s;const i=e[t];return i&&typeof i=="object"?i:null}function Sh(e){if(e==null)return"n/a";if(typeof e=="string"||typeof e=="number"||typeof e=="boolean")return String(e);try{return JSON.stringify(e)}catch{return"n/a"}}function Ah(e,t){const n=kh(e,t);return n?wh.flatMap(s=>s in n?[{label:s,value:Sh(n[s])}]:[]):[]}function Ch(e){let t=0,n=0,s=0;for(const i of e){const a=i.probe&&typeof i.probe=="object"&&"ok"in i.probe?!!i.probe.ok:!1;(i.connected===!0||i.running===!0||a)&&(t+=1),i.configured&&(n+=1),i.enabled&&(s+=1)}return{total:e.length,connected:t,configured:n,enabled:s}}function Th(e){const t=$h(e.snapshot),n=e.lastSuccess?ee(e.lastSuccess):"never";return c`
    <section class="grid grid-cols-2">
      ${ec(e.context,"Workspace, identity, and model configuration.")}
      <section class="card">
        <div class="row" style="justify-content: space-between;">
          <div>
            <div class="card-title">Channels</div>
            <div class="card-sub">Gateway-wide channel status snapshot.</div>
          </div>
          <button class="btn btn--sm" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?"Refreshing…":"Refresh"}
          </button>
        </div>
        <div class="muted" style="margin-top: 8px;">
          Last refresh: ${n}
        </div>
        ${e.error?c`<div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:m}
        ${e.snapshot?m:c`
                <div class="callout info" style="margin-top: 12px">Load channels to see live status.</div>
              `}
        ${t.length===0?c`
                <div class="muted" style="margin-top: 16px">No channels found.</div>
              `:c`
                <div class="list" style="margin-top: 16px;">
                  ${t.map(s=>{const i=Ch(s.accounts),a=i.total?`${i.connected}/${i.total} connected`:"no accounts",o=i.configured?`${i.configured} configured`:"not configured",r=i.total?`${i.enabled} enabled`:"disabled",l=Ah(e.configForm,s.id);return c`
                      <div class="list-item">
                        <div class="list-main">
                          <div class="list-title">${s.label}</div>
                          <div class="list-sub mono">${s.id}</div>
                        </div>
                        <div class="list-meta">
                          <div>${a}</div>
                          <div>${o}</div>
                          <div>${r}</div>
                          ${l.length>0?l.map(d=>c`<div>${d.label}: ${d.value}</div>`):m}
                        </div>
                      </div>
                    `})}
                </div>
              `}
      </section>
    </section>
  `}function _h(e){const t=e.jobs.filter(n=>n.agentId===e.agentId);return c`
    <section class="grid grid-cols-2">
      ${ec(e.context,"Workspace and scheduling targets.")}
      <section class="card">
        <div class="row" style="justify-content: space-between;">
          <div>
            <div class="card-title">Scheduler</div>
            <div class="card-sub">Gateway cron status.</div>
          </div>
          <button class="btn btn--sm" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?"Refreshing…":"Refresh"}
          </button>
        </div>
        <div class="stat-grid" style="margin-top: 16px;">
          <div class="stat">
            <div class="stat-label">Enabled</div>
            <div class="stat-value">
              ${e.status?e.status.enabled?"Yes":"No":"n/a"}
            </div>
          </div>
          <div class="stat">
            <div class="stat-label">Jobs</div>
            <div class="stat-value">${e.status?.jobs??"n/a"}</div>
          </div>
          <div class="stat">
            <div class="stat-label">Next wake</div>
            <div class="stat-value">${Aa(e.status?.nextWakeAtMs??null)}</div>
          </div>
        </div>
        ${e.error?c`<div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:m}
      </section>
    </section>
    <section class="card">
      <div class="card-title">Agent Cron Jobs</div>
      <div class="card-sub">Scheduled jobs targeting this agent.</div>
      ${t.length===0?c`
              <div class="muted" style="margin-top: 16px">No jobs assigned.</div>
            `:c`
              <div class="list" style="margin-top: 16px;">
                ${t.map(n=>c`
                    <div class="list-item">
                      <div class="list-main">
                        <div class="list-title">${n.name}</div>
                        ${n.description?c`<div class="list-sub">${n.description}</div>`:m}
                        <div class="chip-row" style="margin-top: 6px;">
                          <span class="chip">${Jl(n)}</span>
                          <span class="chip ${n.enabled?"chip-ok":"chip-warn"}">
                            ${n.enabled?"enabled":"disabled"}
                          </span>
                          <span class="chip">${n.sessionTarget}</span>
                        </div>
                      </div>
                      <div class="list-meta">
                        <div class="mono">${sh(n)}</div>
                        <div class="muted">${ih(n)}</div>
                      </div>
                    </div>
                  `)}
              </div>
            `}
    </section>
  `}function Eh(e){const t=e.agentFilesList?.agentId===e.agentId?e.agentFilesList:null,n=t?.files??[],s=e.agentFileActive??null,i=s?n.find(l=>l.name===s)??null:null,a=s?e.agentFileContents[s]??"":"",o=s?e.agentFileDrafts[s]??a:"",r=s?o!==a:!1;return c`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">Core Files</div>
          <div class="card-sub">Bootstrap persona, identity, and tool guidance.</div>
        </div>
        <button
          class="btn btn--sm"
          ?disabled=${e.agentFilesLoading}
          @click=${()=>e.onLoadFiles(e.agentId)}
        >
          ${e.agentFilesLoading?"Loading…":"Refresh"}
        </button>
      </div>
      ${t?c`<div class="muted mono" style="margin-top: 8px;">Workspace: ${t.workspace}</div>`:m}
      ${e.agentFilesError?c`<div class="callout danger" style="margin-top: 12px;">${e.agentFilesError}</div>`:m}
      ${t?c`
              <div class="agent-files-grid" style="margin-top: 16px;">
                <div class="agent-files-list">
                  ${n.length===0?c`
                          <div class="muted">No files found.</div>
                        `:n.map(l=>Lh(l,s,()=>e.onSelectFile(l.name)))}
                </div>
                <div class="agent-files-editor">
                  ${i?c`
                          <div class="agent-file-header">
                            <div>
                              <div class="agent-file-title mono">${i.name}</div>
                              <div class="agent-file-sub mono">${i.path}</div>
                            </div>
                            <div class="agent-file-actions">
                              <button
                                class="btn btn--sm"
                                ?disabled=${!r}
                                @click=${()=>e.onFileReset(i.name)}
                              >
                                Reset
                              </button>
                              <button
                                class="btn btn--sm primary"
                                ?disabled=${e.agentFileSaving||!r}
                                @click=${()=>e.onFileSave(i.name)}
                              >
                                ${e.agentFileSaving?"Saving…":"Save"}
                              </button>
                            </div>
                          </div>
                          ${i.missing?c`
                                  <div class="callout info" style="margin-top: 10px">
                                    This file is missing. Saving will create it in the agent workspace.
                                  </div>
                                `:m}
                          <label class="field" style="margin-top: 12px;">
                            <span>Content</span>
                            <textarea
                              .value=${o}
                              @input=${l=>e.onFileDraftChange(i.name,l.target.value)}
                            ></textarea>
                          </label>
                        `:c`
                          <div class="muted">Select a file to edit.</div>
                        `}
                </div>
              </div>
            `:c`
              <div class="callout info" style="margin-top: 12px">
                Load the agent workspace files to edit core instructions.
              </div>
            `}
    </section>
  `}function Lh(e,t,n){const s=e.missing?"Missing":`${gh(e.size)} · ${ee(e.updatedAtMs??null)}`;return c`
    <button
      type="button"
      class="agent-file-row ${t===e.name?"active":""}"
      @click=${n}
    >
      <div>
        <div class="agent-file-name mono">${e.name}</div>
        <div class="agent-file-meta">${s}</div>
      </div>
      ${e.missing?c`
              <span class="agent-pill warn">missing</span>
            `:m}
    </button>
  `}const Yn=[{id:"workspace",label:"Workspace Skills",sources:["openclaw-workspace"]},{id:"built-in",label:"Built-in Skills",sources:["openclaw-bundled"]},{id:"installed",label:"Installed Skills",sources:["openclaw-managed"]},{id:"extra",label:"Extra Skills",sources:["openclaw-extra"]}];function tc(e){const t=new Map;for(const a of Yn)t.set(a.id,{id:a.id,label:a.label,skills:[]});const n=Yn.find(a=>a.id==="built-in"),s={id:"other",label:"Other Skills",skills:[]};for(const a of e){const o=a.bundled?n:Yn.find(r=>r.sources.includes(a.source));o?t.get(o.id)?.skills.push(a):s.skills.push(a)}const i=Yn.map(a=>t.get(a.id)).filter(a=>!!(a&&a.skills.length>0));return s.skills.length>0&&i.push(s),i}function nc(e){return[...e.missing.bins.map(t=>`bin:${t}`),...e.missing.env.map(t=>`env:${t}`),...e.missing.config.map(t=>`config:${t}`),...e.missing.os.map(t=>`os:${t}`)]}function sc(e){const t=[];return e.disabled&&t.push("disabled"),e.blockedByAllowlist&&t.push("blocked by allowlist"),t}function ic(e){const t=e.skill,n=!!e.showBundledBadge;return c`
    <div class="chip-row" style="margin-top: 6px;">
      <span class="chip">${t.source}</span>
      ${n?c`
              <span class="chip">bundled</span>
            `:m}
      <span class="chip ${t.eligible?"chip-ok":"chip-warn"}">
        ${t.eligible?"eligible":"blocked"}
      </span>
      ${t.disabled?c`
              <span class="chip chip-warn">disabled</span>
            `:m}
    </div>
  `}function Mh(e){const t=Is(e.configForm,e.agentId),n=t.entry?.tools??{},s=t.globalTools??{},i=n.profile??s.profile??"full",a=n.profile?"agent override":s.profile?"global default":"default",o=Array.isArray(n.allow)&&n.allow.length>0,r=Array.isArray(s.allow)&&s.allow.length>0,l=!!e.configForm&&!e.configLoading&&!e.configSaving&&!o,d=o?[]:Array.isArray(n.alsoAllow)?n.alsoAllow:[],p=o?[]:Array.isArray(n.deny)?n.deny:[],g=o?{allow:n.allow??[],deny:n.deny??[]}:yh(i)??void 0,h=Ko.flatMap(S=>S.tools.map(C=>C.id)),u=S=>{const C=bh(S,g),k=Vo(S,d),A=Vo(S,p);return{allowed:(C||k)&&!A,baseAllowed:C,denied:A}},f=h.filter(S=>u(S).allowed).length,v=(S,C)=>{const k=new Set(d.map(R=>We(R)).filter(R=>R.length>0)),A=new Set(p.map(R=>We(R)).filter(R=>R.length>0)),E=u(S).baseAllowed,T=We(S);C?(A.delete(T),E||k.add(T)):(k.delete(T),A.add(T)),e.onOverridesChange(e.agentId,[...k],[...A])},w=S=>{const C=new Set(d.map(A=>We(A)).filter(A=>A.length>0)),k=new Set(p.map(A=>We(A)).filter(A=>A.length>0));for(const A of h){const E=u(A).baseAllowed,T=We(A);S?(k.delete(T),E||C.add(T)):(C.delete(T),k.add(T))}e.onOverridesChange(e.agentId,[...C],[...k])};return c`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">Tool Access</div>
          <div class="card-sub">
            Profile + per-tool overrides for this agent.
            <span class="mono">${f}/${h.length}</span> enabled.
          </div>
        </div>
        <div class="row" style="gap: 8px;">
          <button class="btn btn--sm" ?disabled=${!l} @click=${()=>w(!0)}>
            Enable All
          </button>
          <button class="btn btn--sm" ?disabled=${!l} @click=${()=>w(!1)}>
            Disable All
          </button>
          <button class="btn btn--sm" ?disabled=${e.configLoading} @click=${e.onConfigReload}>
            Reload Config
          </button>
          <button
            class="btn btn--sm primary"
            ?disabled=${e.configSaving||!e.configDirty}
            @click=${e.onConfigSave}
          >
            ${e.configSaving?"Saving…":"Save"}
          </button>
        </div>
      </div>

      ${e.configForm?m:c`
              <div class="callout info" style="margin-top: 12px">
                Load the gateway config to adjust tool profiles.
              </div>
            `}
      ${o?c`
              <div class="callout info" style="margin-top: 12px">
                This agent is using an explicit allowlist in config. Tool overrides are managed in the Config tab.
              </div>
            `:m}
      ${r?c`
              <div class="callout info" style="margin-top: 12px">
                Global tools.allow is set. Agent overrides cannot enable tools that are globally blocked.
              </div>
            `:m}

      <div class="agent-tools-meta" style="margin-top: 16px;">
        <div class="agent-kv">
          <div class="label">Profile</div>
          <div class="mono">${i}</div>
        </div>
        <div class="agent-kv">
          <div class="label">Source</div>
          <div>${a}</div>
        </div>
        ${e.configDirty?c`
                <div class="agent-kv">
                  <div class="label">Status</div>
                  <div class="mono">unsaved</div>
                </div>
              `:m}
      </div>

      <div class="agent-tools-presets" style="margin-top: 16px;">
        <div class="label">Quick Presets</div>
        <div class="agent-tools-buttons">
          ${uh.map(S=>c`
              <button
                class="btn btn--sm ${i===S.id?"active":""}"
                ?disabled=${!l}
                @click=${()=>e.onProfileChange(e.agentId,S.id,!0)}
              >
                ${S.label}
              </button>
            `)}
          <button
            class="btn btn--sm"
            ?disabled=${!l}
            @click=${()=>e.onProfileChange(e.agentId,null,!1)}
          >
            Inherit
          </button>
        </div>
      </div>

      <div class="agent-tools-grid" style="margin-top: 20px;">
        ${Ko.map(S=>c`
              <div class="agent-tools-section">
                <div class="agent-tools-header">${S.label}</div>
                <div class="agent-tools-list">
                  ${S.tools.map(C=>{const{allowed:k}=u(C.id);return c`
                      <div class="agent-tool-row">
                        <div>
                          <div class="agent-tool-title mono">${C.label}</div>
                          <div class="agent-tool-sub">${C.description}</div>
                        </div>
                        <label class="cfg-toggle">
                          <input
                            type="checkbox"
                            .checked=${k}
                            ?disabled=${!l}
                            @change=${A=>v(C.id,A.target.checked)}
                          />
                          <span class="cfg-toggle__track"></span>
                        </label>
                      </div>
                    `})}
                </div>
              </div>
            `)}
      </div>
    </section>
  `}function Rh(e){const t=!!e.configForm&&!e.configLoading&&!e.configSaving,n=Is(e.configForm,e.agentId),s=Array.isArray(n.entry?.skills)?n.entry?.skills:void 0,i=new Set((s??[]).map(u=>u.trim()).filter(Boolean)),a=s!==void 0,o=!!(e.report&&e.activeAgentId===e.agentId),r=o?e.report?.skills??[]:[],l=e.filter.trim().toLowerCase(),d=l?r.filter(u=>[u.name,u.description,u.source].join(" ").toLowerCase().includes(l)):r,p=tc(d),g=a?r.filter(u=>i.has(u.name)).length:r.length,h=r.length;return c`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">Skills</div>
          <div class="card-sub">
            Per-agent skill allowlist and workspace skills.
            ${h>0?c`<span class="mono">${g}/${h}</span>`:m}
          </div>
        </div>
        <div class="row" style="gap: 8px;">
          <button class="btn btn--sm" ?disabled=${!t} @click=${()=>e.onClear(e.agentId)}>
            Use All
          </button>
          <button
            class="btn btn--sm"
            ?disabled=${!t}
            @click=${()=>e.onDisableAll(e.agentId)}
          >
            Disable All
          </button>
          <button class="btn btn--sm" ?disabled=${e.configLoading} @click=${e.onConfigReload}>
            Reload Config
          </button>
          <button class="btn btn--sm" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?"Loading…":"Refresh"}
          </button>
          <button
            class="btn btn--sm primary"
            ?disabled=${e.configSaving||!e.configDirty}
            @click=${e.onConfigSave}
          >
            ${e.configSaving?"Saving…":"Save"}
          </button>
        </div>
      </div>

      ${e.configForm?m:c`
              <div class="callout info" style="margin-top: 12px">
                Load the gateway config to set per-agent skills.
              </div>
            `}
      ${a?c`
              <div class="callout info" style="margin-top: 12px">This agent uses a custom skill allowlist.</div>
            `:c`
              <div class="callout info" style="margin-top: 12px">
                All skills are enabled. Disabling any skill will create a per-agent allowlist.
              </div>
            `}
      ${!o&&!e.loading?c`
              <div class="callout info" style="margin-top: 12px">
                Load skills for this agent to view workspace-specific entries.
              </div>
            `:m}
      ${e.error?c`<div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:m}

      <div class="filters" style="margin-top: 14px;">
        <label class="field" style="flex: 1;">
          <span>Filter</span>
          <input
            .value=${e.filter}
            @input=${u=>e.onFilterChange(u.target.value)}
            placeholder="Search skills"
          />
        </label>
        <div class="muted">${d.length} shown</div>
      </div>

      ${d.length===0?c`
              <div class="muted" style="margin-top: 16px">No skills found.</div>
            `:c`
              <div class="agent-skills-groups" style="margin-top: 16px;">
                ${p.map(u=>Ih(u,{agentId:e.agentId,allowSet:i,usingAllowlist:a,editable:t,onToggle:e.onToggle}))}
              </div>
            `}
    </section>
  `}function Ih(e,t){const n=e.id==="workspace"||e.id==="built-in";return c`
    <details class="agent-skills-group" ?open=${!n}>
      <summary class="agent-skills-header">
        <span>${e.label}</span>
        <span class="muted">${e.skills.length}</span>
      </summary>
      <div class="list skills-grid">
        ${e.skills.map(s=>Ph(s,{agentId:t.agentId,allowSet:t.allowSet,usingAllowlist:t.usingAllowlist,editable:t.editable,onToggle:t.onToggle}))}
      </div>
    </details>
  `}function Ph(e,t){const n=t.usingAllowlist?t.allowSet.has(e.name):!0,s=nc(e),i=sc(e);return c`
    <div class="list-item agent-skill-row">
      <div class="list-main">
        <div class="list-title">${e.emoji?`${e.emoji} `:""}${e.name}</div>
        <div class="list-sub">${e.description}</div>
        ${ic({skill:e})}
        ${s.length>0?c`<div class="muted" style="margin-top: 6px;">Missing: ${s.join(", ")}</div>`:m}
        ${i.length>0?c`<div class="muted" style="margin-top: 6px;">Reason: ${i.join(", ")}</div>`:m}
      </div>
      <div class="list-meta">
        <label class="cfg-toggle">
          <input
            type="checkbox"
            .checked=${n}
            ?disabled=${!t.editable}
            @change=${a=>t.onToggle(t.agentId,e.name,a.target.checked)}
          />
          <span class="cfg-toggle__track"></span>
        </label>
      </div>
    </div>
  `}function Dh(e){const t=e.agentsList?.agents??[],n=e.agentsList?.defaultId??null,s=e.selectedAgentId??n??t[0]?.id??null,i=s?t.find(a=>a.id===s)??null:null;return c`
    <div class="agents-layout">
      <section class="card agents-sidebar">
        <div class="row" style="justify-content: space-between;">
          <div>
            <div class="card-title">Agents</div>
            <div class="card-sub">${t.length} configured.</div>
          </div>
          <button class="btn btn--sm" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?"Loading…":"Refresh"}
          </button>
        </div>
        ${e.error?c`<div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:m}
        <div class="agent-list" style="margin-top: 12px;">
          ${t.length===0?c`
                  <div class="muted">No agents found.</div>
                `:t.map(a=>{const o=Xl(a.id,n),r=Rs(a,e.agentIdentityById[a.id]??null);return c`
                    <button
                      type="button"
                      class="agent-row ${s===a.id?"active":""}"
                      @click=${()=>e.onSelectAgent(a.id)}
                    >
                      <div class="agent-avatar">${r||Ri(a).slice(0,1)}</div>
                      <div class="agent-info">
                        <div class="agent-title">${Ri(a)}</div>
                        <div class="agent-sub mono">${a.id}</div>
                      </div>
                      ${o?c`<span class="agent-pill">${o}</span>`:m}
                    </button>
                  `})}
        </div>
      </section>
      <section class="agents-main">
        ${i?c`
                ${Fh(i,n,e.agentIdentityById[i.id]??null)}
                ${Nh(e.activePanel,a=>e.onSelectPanel(a))}
                ${e.activePanel==="overview"?Oh({agent:i,defaultId:n,configForm:e.configForm,agentFilesList:e.agentFilesList,agentIdentity:e.agentIdentityById[i.id]??null,agentIdentityError:e.agentIdentityError,agentIdentityLoading:e.agentIdentityLoading,configLoading:e.configLoading,configSaving:e.configSaving,configDirty:e.configDirty,onConfigReload:e.onConfigReload,onConfigSave:e.onConfigSave,onModelChange:e.onModelChange,onModelFallbacksChange:e.onModelFallbacksChange}):m}
                ${e.activePanel==="files"?Eh({agentId:i.id,agentFilesList:e.agentFilesList,agentFilesLoading:e.agentFilesLoading,agentFilesError:e.agentFilesError,agentFileActive:e.agentFileActive,agentFileContents:e.agentFileContents,agentFileDrafts:e.agentFileDrafts,agentFileSaving:e.agentFileSaving,onLoadFiles:e.onLoadFiles,onSelectFile:e.onSelectFile,onFileDraftChange:e.onFileDraftChange,onFileReset:e.onFileReset,onFileSave:e.onFileSave}):m}
                ${e.activePanel==="tools"?Mh({agentId:i.id,configForm:e.configForm,configLoading:e.configLoading,configSaving:e.configSaving,configDirty:e.configDirty,onProfileChange:e.onToolsProfileChange,onOverridesChange:e.onToolsOverridesChange,onConfigReload:e.onConfigReload,onConfigSave:e.onConfigSave}):m}
                ${e.activePanel==="skills"?Rh({agentId:i.id,report:e.agentSkillsReport,loading:e.agentSkillsLoading,error:e.agentSkillsError,activeAgentId:e.agentSkillsAgentId,configForm:e.configForm,configLoading:e.configLoading,configSaving:e.configSaving,configDirty:e.configDirty,filter:e.skillsFilter,onFilterChange:e.onSkillsFilterChange,onRefresh:e.onSkillsRefresh,onToggle:e.onAgentSkillToggle,onClear:e.onAgentSkillsClear,onDisableAll:e.onAgentSkillsDisableAll,onConfigReload:e.onConfigReload,onConfigSave:e.onConfigSave}):m}
                ${e.activePanel==="channels"?Th({context:Wo(i,e.configForm,e.agentFilesList,n,e.agentIdentityById[i.id]??null),configForm:e.configForm,snapshot:e.channelsSnapshot,loading:e.channelsLoading,error:e.channelsError,lastSuccess:e.channelsLastSuccess,onRefresh:e.onChannelsRefresh}):m}
                ${e.activePanel==="cron"?_h({context:Wo(i,e.configForm,e.agentFilesList,n,e.agentIdentityById[i.id]??null),agentId:i.id,jobs:e.cronJobs,status:e.cronStatus,loading:e.cronLoading,error:e.cronError,onRefresh:e.onCronRefresh}):m}
              `:c`
                <div class="card">
                  <div class="card-title">Select an agent</div>
                  <div class="card-sub">Pick an agent to inspect its workspace and tools.</div>
                </div>
              `}
      </section>
    </div>
  `}function Fh(e,t,n){const s=Xl(e.id,t),i=Ri(e),a=e.identity?.theme?.trim()||"Agent workspace and routing.",o=Rs(e,n);return c`
    <section class="card agent-header">
      <div class="agent-header-main">
        <div class="agent-avatar agent-avatar--lg">${o||i.slice(0,1)}</div>
        <div>
          <div class="card-title">${i}</div>
          <div class="card-sub">${a}</div>
        </div>
      </div>
      <div class="agent-header-meta">
        <div class="mono">${e.id}</div>
        ${s?c`<span class="agent-pill">${s}</span>`:m}
      </div>
    </section>
  `}function Nh(e,t){return c`
    <div class="agent-tabs">
      ${[{id:"overview",label:"Overview"},{id:"files",label:"Files"},{id:"tools",label:"Tools"},{id:"skills",label:"Skills"},{id:"channels",label:"Channels"},{id:"cron",label:"Cron Jobs"}].map(s=>c`
          <button
            class="agent-tab ${e===s.id?"active":""}"
            type="button"
            @click=${()=>t(s.id)}
          >
            ${s.label}
          </button>
        `)}
    </div>
  `}function Oh(e){const{agent:t,configForm:n,agentFilesList:s,agentIdentity:i,agentIdentityLoading:a,agentIdentityError:o,configLoading:r,configSaving:l,configDirty:d,onConfigReload:p,onConfigSave:g,onModelChange:h,onModelFallbacksChange:u}=e,f=Is(n,t.id),w=(s&&s.agentId===t.id?s.workspace:null)||f.entry?.workspace||f.defaults?.workspace||"default",S=f.entry?.model?wn(f.entry?.model):wn(f.defaults?.model),C=wn(f.defaults?.model),k=Go(f.entry?.model)||(S!=="-"?qo(S):null),A=Go(f.defaults?.model)||(C!=="-"?qo(C):null),E=k??A??null,T=ph(f.entry?.model),R=T?T.join(", "):"",H=i?.name?.trim()||t.identity?.name?.trim()||t.name?.trim()||f.entry?.name||"-",te=Rs(t,i)||"-",I=Array.isArray(f.entry?.skills)?f.entry?.skills:null,q=I?.length??null,ne=a?"Loading…":o?"Unavailable":"",oe=!!(e.defaultId&&t.id===e.defaultId);return c`
    <section class="card">
      <div class="card-title">Overview</div>
      <div class="card-sub">Workspace paths and identity metadata.</div>
      <div class="agents-overview-grid" style="margin-top: 16px;">
        <div class="agent-kv">
          <div class="label">Workspace</div>
          <div class="mono">${w}</div>
        </div>
        <div class="agent-kv">
          <div class="label">Primary Model</div>
          <div class="mono">${S}</div>
        </div>
        <div class="agent-kv">
          <div class="label">Identity Name</div>
          <div>${H}</div>
          ${ne?c`<div class="agent-kv-sub muted">${ne}</div>`:m}
        </div>
        <div class="agent-kv">
          <div class="label">Default</div>
          <div>${oe?"yes":"no"}</div>
        </div>
        <div class="agent-kv">
          <div class="label">Identity Emoji</div>
          <div>${te}</div>
        </div>
        <div class="agent-kv">
          <div class="label">Skills Filter</div>
          <div>${I?`${q} selected`:"all skills"}</div>
        </div>
      </div>

      <div class="agent-model-select" style="margin-top: 20px;">
        <div class="label">Model Selection</div>
        <div class="row" style="gap: 12px; flex-wrap: wrap;">
          <label class="field" style="min-width: 260px; flex: 1;">
            <span>Primary model${oe?" (default)":""}</span>
            <select
              .value=${E??""}
              ?disabled=${!n||r||l}
              @change=${_=>h(t.id,_.target.value||null)}
            >
              ${oe?m:c`
                      <option value="">
                        ${A?`Inherit default (${A})`:"Inherit default"}
                      </option>
                    `}
              ${mh(n,E??void 0)}
            </select>
          </label>
          <label class="field" style="min-width: 260px; flex: 1;">
            <span>Fallbacks (comma-separated)</span>
            <input
              .value=${R}
              ?disabled=${!n||r||l}
              placeholder="provider/model, provider/model"
              @input=${_=>u(t.id,fh(_.target.value))}
            />
          </label>
        </div>
        <div class="row" style="justify-content: flex-end; gap: 8px;">
          <button class="btn btn--sm" ?disabled=${r} @click=${p}>
            Reload Config
          </button>
          <button
            class="btn btn--sm primary"
            ?disabled=${l||!d}
            @click=${g}
          >
            ${l?"Saving…":"Save"}
          </button>
        </div>
      </div>
    </section>
  `}const Bh=new Set(["title","description","default","nullable"]);function Uh(e){return Object.keys(e??{}).filter(n=>!Bh.has(n)).length===0}function zh(e){if(e===void 0)return"";try{return JSON.stringify(e,null,2)??""}catch{return""}}const Pn={chevronDown:c`
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,plus:c`
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  `,minus:c`
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  `,trash:c`
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <polyline points="3 6 5 6 21 6"></polyline>
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
    </svg>
  `,edit:c`
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
    </svg>
  `};function vt(e){const{schema:t,value:n,path:s,hints:i,unsupported:a,disabled:o,onPatch:r}=e,l=e.showLabel??!0,d=Ee(t),p=Ie(s,i),g=p?.label??t.title??nt(String(s.at(-1))),h=p?.help??t.description,u=Ji(s);if(a.has(u))return c`<div class="cfg-field cfg-field--error">
      <div class="cfg-field__label">${g}</div>
      <div class="cfg-field__error">Unsupported schema node. Use Raw mode.</div>
    </div>`;if(t.anyOf||t.oneOf){const v=(t.anyOf??t.oneOf??[]).filter(E=>!(E.type==="null"||Array.isArray(E.type)&&E.type.includes("null")));if(v.length===1)return vt({...e,schema:v[0]});const w=E=>{if(E.const!==void 0)return E.const;if(E.enum&&E.enum.length===1)return E.enum[0]},S=v.map(w),C=S.every(E=>E!==void 0);if(C&&S.length>0&&S.length<=5){const E=n??t.default;return c`
        <div class="cfg-field">
          ${l?c`<label class="cfg-field__label">${g}</label>`:m}
          ${h?c`<div class="cfg-field__help">${h}</div>`:m}
          <div class="cfg-segmented">
            ${S.map(T=>c`
              <button
                type="button"
                class="cfg-segmented__btn ${T===E||String(T)===String(E)?"active":""}"
                ?disabled=${o}
                @click=${()=>r(s,T)}
              >
                ${String(T)}
              </button>
            `)}
          </div>
        </div>
      `}if(C&&S.length>5)return Yo({...e,options:S,value:n??t.default});const k=new Set(v.map(E=>Ee(E)).filter(Boolean)),A=new Set([...k].map(E=>E==="integer"?"number":E));if([...A].every(E=>["string","number","boolean"].includes(E))){const E=A.has("string"),T=A.has("number");if(A.has("boolean")&&A.size===1)return vt({...e,schema:{...t,type:"boolean",anyOf:void 0,oneOf:void 0}});if(E||T)return Qo({...e,inputType:T&&!E?"number":"text"})}}if(t.enum){const f=t.enum;if(f.length<=5){const v=n??t.default;return c`
        <div class="cfg-field">
          ${l?c`<label class="cfg-field__label">${g}</label>`:m}
          ${h?c`<div class="cfg-field__help">${h}</div>`:m}
          <div class="cfg-segmented">
            ${f.map(w=>c`
              <button
                type="button"
                class="cfg-segmented__btn ${w===v||String(w)===String(v)?"active":""}"
                ?disabled=${o}
                @click=${()=>r(s,w)}
              >
                ${String(w)}
              </button>
            `)}
          </div>
        </div>
      `}return Yo({...e,options:f,value:n??t.default})}if(d==="object")return jh(e);if(d==="array")return Kh(e);if(d==="boolean"){const f=typeof n=="boolean"?n:typeof t.default=="boolean"?t.default:!1;return c`
      <label class="cfg-toggle-row ${o?"disabled":""}">
        <div class="cfg-toggle-row__content">
          <span class="cfg-toggle-row__label">${g}</span>
          ${h?c`<span class="cfg-toggle-row__help">${h}</span>`:m}
        </div>
        <div class="cfg-toggle">
          <input
            type="checkbox"
            .checked=${f}
            ?disabled=${o}
            @change=${v=>r(s,v.target.checked)}
          />
          <span class="cfg-toggle__track"></span>
        </div>
      </label>
    `}return d==="number"||d==="integer"?Hh(e):d==="string"?Qo({...e,inputType:"text"}):c`
    <div class="cfg-field cfg-field--error">
      <div class="cfg-field__label">${g}</div>
      <div class="cfg-field__error">Unsupported type: ${d}. Use Raw mode.</div>
    </div>
  `}function Qo(e){const{schema:t,value:n,path:s,hints:i,disabled:a,onPatch:o,inputType:r}=e,l=e.showLabel??!0,d=Ie(s,i),p=d?.label??t.title??nt(String(s.at(-1))),g=d?.help??t.description,h=(d?.sensitive??!1)&&!/^\$\{[^}]*\}$/.test(String(n??"").trim()),u=d?.placeholder??(h?"••••":t.default!==void 0?`Default: ${String(t.default)}`:""),f=n??"";return c`
    <div class="cfg-field">
      ${l?c`<label class="cfg-field__label">${p}</label>`:m}
      ${g?c`<div class="cfg-field__help">${g}</div>`:m}
      <div class="cfg-input-wrap">
        <input
          type=${h?"password":r}
          class="cfg-input"
          placeholder=${u}
          .value=${f==null?"":String(f)}
          ?disabled=${a}
          @input=${v=>{const w=v.target.value;if(r==="number"){if(w.trim()===""){o(s,void 0);return}const S=Number(w);o(s,Number.isNaN(S)?w:S);return}o(s,w)}}
          @change=${v=>{if(r==="number")return;const w=v.target.value;o(s,w.trim())}}
        />
        ${t.default!==void 0?c`
          <button
            type="button"
            class="cfg-input__reset"
            title="Reset to default"
            ?disabled=${a}
            @click=${()=>o(s,t.default)}
          >↺</button>
        `:m}
      </div>
    </div>
  `}function Hh(e){const{schema:t,value:n,path:s,hints:i,disabled:a,onPatch:o}=e,r=e.showLabel??!0,l=Ie(s,i),d=l?.label??t.title??nt(String(s.at(-1))),p=l?.help??t.description,g=n??t.default??"",h=typeof g=="number"?g:0;return c`
    <div class="cfg-field">
      ${r?c`<label class="cfg-field__label">${d}</label>`:m}
      ${p?c`<div class="cfg-field__help">${p}</div>`:m}
      <div class="cfg-number">
        <button
          type="button"
          class="cfg-number__btn"
          ?disabled=${a}
          @click=${()=>o(s,h-1)}
        >−</button>
        <input
          type="number"
          class="cfg-number__input"
          .value=${g==null?"":String(g)}
          ?disabled=${a}
          @input=${u=>{const f=u.target.value,v=f===""?void 0:Number(f);o(s,v)}}
        />
        <button
          type="button"
          class="cfg-number__btn"
          ?disabled=${a}
          @click=${()=>o(s,h+1)}
        >+</button>
      </div>
    </div>
  `}function Yo(e){const{schema:t,value:n,path:s,hints:i,disabled:a,options:o,onPatch:r}=e,l=e.showLabel??!0,d=Ie(s,i),p=d?.label??t.title??nt(String(s.at(-1))),g=d?.help??t.description,h=n??t.default,u=o.findIndex(v=>v===h||String(v)===String(h)),f="__unset__";return c`
    <div class="cfg-field">
      ${l?c`<label class="cfg-field__label">${p}</label>`:m}
      ${g?c`<div class="cfg-field__help">${g}</div>`:m}
      <select
        class="cfg-select"
        ?disabled=${a}
        .value=${u>=0?String(u):f}
        @change=${v=>{const w=v.target.value;r(s,w===f?void 0:o[Number(w)])}}
      >
        <option value=${f}>Select...</option>
        ${o.map((v,w)=>c`
          <option value=${String(w)}>${String(v)}</option>
        `)}
      </select>
    </div>
  `}function jh(e){const{schema:t,value:n,path:s,hints:i,unsupported:a,disabled:o,onPatch:r}=e,l=Ie(s,i),d=l?.label??t.title??nt(String(s.at(-1))),p=l?.help??t.description,g=n??t.default,h=g&&typeof g=="object"&&!Array.isArray(g)?g:{},u=t.properties??{},v=Object.entries(u).toSorted((A,E)=>{const T=Ie([...s,A[0]],i)?.order??0,R=Ie([...s,E[0]],i)?.order??0;return T!==R?T-R:A[0].localeCompare(E[0])}),w=new Set(Object.keys(u)),S=t.additionalProperties,C=!!S&&typeof S=="object",k=c`
    ${v.map(([A,E])=>vt({schema:E,value:h[A],path:[...s,A],hints:i,unsupported:a,disabled:o,onPatch:r}))}
    ${C?Wh({schema:S,value:h,path:s,hints:i,unsupported:a,disabled:o,reservedKeys:w,onPatch:r}):m}
  `;return s.length===1?c`
      <div class="cfg-fields">
        ${k}
      </div>
    `:c`
    <details class="cfg-object" open>
      <summary class="cfg-object__header">
        <span class="cfg-object__title">${d}</span>
        <span class="cfg-object__chevron">${Pn.chevronDown}</span>
      </summary>
      ${p?c`<div class="cfg-object__help">${p}</div>`:m}
      <div class="cfg-object__content">
        ${k}
      </div>
    </details>
  `}function Kh(e){const{schema:t,value:n,path:s,hints:i,unsupported:a,disabled:o,onPatch:r}=e,l=e.showLabel??!0,d=Ie(s,i),p=d?.label??t.title??nt(String(s.at(-1))),g=d?.help??t.description,h=Array.isArray(t.items)?t.items[0]:t.items;if(!h)return c`
      <div class="cfg-field cfg-field--error">
        <div class="cfg-field__label">${p}</div>
        <div class="cfg-field__error">Unsupported array schema. Use Raw mode.</div>
      </div>
    `;const u=Array.isArray(n)?n:Array.isArray(t.default)?t.default:[];return c`
    <div class="cfg-array">
      <div class="cfg-array__header">
        ${l?c`<span class="cfg-array__label">${p}</span>`:m}
        <span class="cfg-array__count">${u.length} item${u.length!==1?"s":""}</span>
        <button
          type="button"
          class="cfg-array__add"
          ?disabled=${o}
          @click=${()=>{const f=[...u,zr(h)];r(s,f)}}
        >
          <span class="cfg-array__add-icon">${Pn.plus}</span>
          Add
        </button>
      </div>
      ${g?c`<div class="cfg-array__help">${g}</div>`:m}

      ${u.length===0?c`
              <div class="cfg-array__empty">No items yet. Click "Add" to create one.</div>
            `:c`
        <div class="cfg-array__items">
          ${u.map((f,v)=>c`
            <div class="cfg-array__item">
              <div class="cfg-array__item-header">
                <span class="cfg-array__item-index">#${v+1}</span>
                <button
                  type="button"
                  class="cfg-array__item-remove"
                  title="Remove item"
                  ?disabled=${o}
                  @click=${()=>{const w=[...u];w.splice(v,1),r(s,w)}}
                >
                  ${Pn.trash}
                </button>
              </div>
              <div class="cfg-array__item-content">
                ${vt({schema:h,value:f,path:[...s,v],hints:i,unsupported:a,disabled:o,showLabel:!1,onPatch:r})}
              </div>
            </div>
          `)}
        </div>
      `}
    </div>
  `}function Wh(e){const{schema:t,value:n,path:s,hints:i,unsupported:a,disabled:o,reservedKeys:r,onPatch:l}=e,d=Uh(t),p=Object.entries(n??{}).filter(([g])=>!r.has(g));return c`
    <div class="cfg-map">
      <div class="cfg-map__header">
        <span class="cfg-map__label">Custom entries</span>
        <button
          type="button"
          class="cfg-map__add"
          ?disabled=${o}
          @click=${()=>{const g={...n};let h=1,u=`custom-${h}`;for(;u in g;)h+=1,u=`custom-${h}`;g[u]=d?{}:zr(t),l(s,g)}}
        >
          <span class="cfg-map__add-icon">${Pn.plus}</span>
          Add Entry
        </button>
      </div>

      ${p.length===0?c`
              <div class="cfg-map__empty">No custom entries.</div>
            `:c`
        <div class="cfg-map__items">
          ${p.map(([g,h])=>{const u=[...s,g],f=zh(h);return c`
              <div class="cfg-map__item">
                <div class="cfg-map__item-key">
                  <input
                    type="text"
                    class="cfg-input cfg-input--sm"
                    placeholder="Key"
                    .value=${g}
                    ?disabled=${o}
                    @change=${v=>{const w=v.target.value.trim();if(!w||w===g)return;const S={...n};w in S||(S[w]=S[g],delete S[g],l(s,S))}}
                  />
                </div>
                <div class="cfg-map__item-value">
                  ${d?c`
                        <textarea
                          class="cfg-textarea cfg-textarea--sm"
                          placeholder="JSON value"
                          rows="2"
                          .value=${f}
                          ?disabled=${o}
                          @change=${v=>{const w=v.target,S=w.value.trim();if(!S){l(u,void 0);return}try{l(u,JSON.parse(S))}catch{w.value=f}}}
                        ></textarea>
                      `:vt({schema:t,value:h,path:u,hints:i,unsupported:a,disabled:o,showLabel:!1,onPatch:l})}
                </div>
                <button
                  type="button"
                  class="cfg-map__item-remove"
                  title="Remove entry"
                  ?disabled=${o}
                  @click=${()=>{const v={...n};delete v[g],l(s,v)}}
                >
                  ${Pn.trash}
                </button>
              </div>
            `})}
        </div>
      `}
    </div>
  `}const Zo={env:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="3"></circle>
      <path
        d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
      ></path>
    </svg>
  `,update:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="7 10 12 15 17 10"></polyline>
      <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
  `,agents:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path
        d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"
      ></path>
      <circle cx="8" cy="14" r="1"></circle>
      <circle cx="16" cy="14" r="1"></circle>
    </svg>
  `,auth:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
  `,channels:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
  `,messages:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  `,commands:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <polyline points="4 17 10 11 4 5"></polyline>
      <line x1="12" y1="19" x2="20" y2="19"></line>
    </svg>
  `,hooks:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
    </svg>
  `,skills:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      ></polygon>
    </svg>
  `,tools:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path
        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
      ></path>
    </svg>
  `,gateway:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path
        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
      ></path>
    </svg>
  `,wizard:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M15 4V2"></path>
      <path d="M15 16v-2"></path>
      <path d="M8 9h2"></path>
      <path d="M20 9h2"></path>
      <path d="M17.8 11.8 19 13"></path>
      <path d="M15 9h0"></path>
      <path d="M17.8 6.2 19 5"></path>
      <path d="m3 21 9-9"></path>
      <path d="M12.2 6.2 11 5"></path>
    </svg>
  `,meta:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M12 20h9"></path>
      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
    </svg>
  `,logging:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
  `,browser:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="10"></circle>
      <circle cx="12" cy="12" r="4"></circle>
      <line x1="21.17" y1="8" x2="12" y2="8"></line>
      <line x1="3.95" y1="6.06" x2="8.54" y2="14"></line>
      <line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>
    </svg>
  `,ui:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="3" y1="9" x2="21" y2="9"></line>
      <line x1="9" y1="21" x2="9" y2="9"></line>
    </svg>
  `,models:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path
        d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
      ></path>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
      <line x1="12" y1="22.08" x2="12" y2="12"></line>
    </svg>
  `,bindings:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
      <line x1="6" y1="6" x2="6.01" y2="6"></line>
      <line x1="6" y1="18" x2="6.01" y2="18"></line>
    </svg>
  `,broadcast:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"></path>
      <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"></path>
      <circle cx="12" cy="12" r="2"></circle>
      <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"></path>
      <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"></path>
    </svg>
  `,audio:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M9 18V5l12-2v13"></path>
      <circle cx="6" cy="18" r="3"></circle>
      <circle cx="18" cy="16" r="3"></circle>
    </svg>
  `,session:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  `,cron:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  `,web:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path
        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
      ></path>
    </svg>
  `,discovery:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  `,canvasHost:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <circle cx="8.5" cy="8.5" r="1.5"></circle>
      <polyline points="21 15 16 10 5 21"></polyline>
    </svg>
  `,talk:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
      <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
      <line x1="12" y1="19" x2="12" y2="23"></line>
      <line x1="8" y1="23" x2="16" y2="23"></line>
    </svg>
  `,plugins:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M12 2v6"></path>
      <path d="m4.93 10.93 4.24 4.24"></path>
      <path d="M2 12h6"></path>
      <path d="m4.93 13.07 4.24-4.24"></path>
      <path d="M12 22v-6"></path>
      <path d="m19.07 13.07-4.24-4.24"></path>
      <path d="M22 12h-6"></path>
      <path d="m19.07 10.93-4.24 4.24"></path>
    </svg>
  `,default:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
    </svg>
  `},Ca={env:{label:"Environment Variables",description:"Environment variables passed to the gateway process"},update:{label:"Updates",description:"Auto-update settings and release channel"},agents:{label:"Agents",description:"Agent configurations, models, and identities"},auth:{label:"Authentication",description:"API keys and authentication profiles"},channels:{label:"Channels",description:"Messaging channels (Telegram, Discord, Slack, etc.)"},messages:{label:"Messages",description:"Message handling and routing settings"},commands:{label:"Commands",description:"Custom slash commands"},hooks:{label:"Hooks",description:"Webhooks and event hooks"},skills:{label:"Skills",description:"Skill packs and capabilities"},tools:{label:"Tools",description:"Tool configurations (browser, search, etc.)"},gateway:{label:"Gateway",description:"Gateway server settings (port, auth, binding)"},wizard:{label:"Setup Wizard",description:"Setup wizard state and history"},meta:{label:"Metadata",description:"Gateway metadata and version information"},logging:{label:"Logging",description:"Log levels and output configuration"},browser:{label:"Browser",description:"Browser automation settings"},ui:{label:"UI",description:"User interface preferences"},models:{label:"Models",description:"AI model configurations and providers"},bindings:{label:"Bindings",description:"Key bindings and shortcuts"},broadcast:{label:"Broadcast",description:"Broadcast and notification settings"},audio:{label:"Audio",description:"Audio input/output settings"},session:{label:"Session",description:"Session management and persistence"},cron:{label:"Cron",description:"Scheduled tasks and automation"},web:{label:"Web",description:"Web server and API settings"},discovery:{label:"Discovery",description:"Service discovery and networking"},canvasHost:{label:"Canvas Host",description:"Canvas rendering and display"},talk:{label:"Talk",description:"Voice and speech settings"},plugins:{label:"Plugins",description:"Plugin management and extensions"}};function Jo(e){return Zo[e]??Zo.default}function qh(e,t,n){if(!n)return!0;const s=n.toLowerCase(),i=Ca[e];return e.toLowerCase().includes(s)||i&&(i.label.toLowerCase().includes(s)||i.description.toLowerCase().includes(s))?!0:yn(t,s)}function yn(e,t){if(e.title?.toLowerCase().includes(t)||e.description?.toLowerCase().includes(t)||e.enum?.some(s=>String(s).toLowerCase().includes(t)))return!0;if(e.properties){for(const[s,i]of Object.entries(e.properties))if(s.toLowerCase().includes(t)||yn(i,t))return!0}if(e.items){const s=Array.isArray(e.items)?e.items:[e.items];for(const i of s)if(i&&yn(i,t))return!0}if(e.additionalProperties&&typeof e.additionalProperties=="object"&&yn(e.additionalProperties,t))return!0;const n=e.anyOf??e.oneOf??e.allOf;if(n){for(const s of n)if(s&&yn(s,t))return!0}return!1}function Gh(e){if(!e.schema)return c`
      <div class="muted">Schema unavailable.</div>
    `;const t=e.schema,n=e.value??{};if(Ee(t)!=="object"||!t.properties)return c`
      <div class="callout danger">Unsupported schema. Use Raw.</div>
    `;const s=new Set(e.unsupportedPaths??[]),i=t.properties,a=e.searchQuery??"",o=e.activeSection,r=e.activeSubsection??null,d=Object.entries(i).toSorted((g,h)=>{const u=Ie([g[0]],e.uiHints)?.order??50,f=Ie([h[0]],e.uiHints)?.order??50;return u!==f?u-f:g[0].localeCompare(h[0])}).filter(([g,h])=>!(o&&g!==o||a&&!qh(g,h,a)));let p=null;if(o&&r&&d.length===1){const g=d[0]?.[1];g&&Ee(g)==="object"&&g.properties&&g.properties[r]&&(p={sectionKey:o,subsectionKey:r,schema:g.properties[r]})}return d.length===0?c`
      <div class="config-empty">
        <div class="config-empty__icon">${ge.search}</div>
        <div class="config-empty__text">
          ${a?`No settings match "${a}"`:"No settings in this section"}
        </div>
      </div>
    `:c`
    <div class="config-form config-form--modern">
      ${p?(()=>{const{sectionKey:g,subsectionKey:h,schema:u}=p,f=Ie([g,h],e.uiHints),v=f?.label??u.title??nt(h),w=f?.help??u.description??"",S=n[g],C=S&&typeof S=="object"?S[h]:void 0,k=`config-section-${g}-${h}`;return c`
              <section class="config-section-card" id=${k}>
                <div class="config-section-card__header">
                  <span class="config-section-card__icon">${Jo(g)}</span>
                  <div class="config-section-card__titles">
                    <h3 class="config-section-card__title">${v}</h3>
                    ${w?c`<p class="config-section-card__desc">${w}</p>`:m}
                  </div>
                </div>
                <div class="config-section-card__content">
                  ${vt({schema:u,value:C,path:[g,h],hints:e.uiHints,unsupported:s,disabled:e.disabled??!1,showLabel:!1,onPatch:e.onPatch})}
                </div>
              </section>
            `})():d.map(([g,h])=>{const u=Ca[g]??{label:g.charAt(0).toUpperCase()+g.slice(1),description:h.description??""};return c`
              <section class="config-section-card" id="config-section-${g}">
                <div class="config-section-card__header">
                  <span class="config-section-card__icon">${Jo(g)}</span>
                  <div class="config-section-card__titles">
                    <h3 class="config-section-card__title">${u.label}</h3>
                    ${u.description?c`<p class="config-section-card__desc">${u.description}</p>`:m}
                  </div>
                </div>
                <div class="config-section-card__content">
                  ${vt({schema:h,value:n[g],path:[g],hints:e.uiHints,unsupported:s,disabled:e.disabled??!1,showLabel:!1,onPatch:e.onPatch})}
                </div>
              </section>
            `})}
    </div>
  `}const Vh=new Set(["title","description","default","nullable"]);function Qh(e){return Object.keys(e??{}).filter(n=>!Vh.has(n)).length===0}function ac(e){const t=e.filter(i=>i!=null),n=t.length!==e.length,s=[];for(const i of t)s.some(a=>Object.is(a,i))||s.push(i);return{enumValues:s,nullable:n}}function oc(e){return!e||typeof e!="object"?{schema:null,unsupportedPaths:["<root>"]}:Sn(e,[])}function Sn(e,t){const n=new Set,s={...e},i=Ji(t)||"<root>";if(e.anyOf||e.oneOf||e.allOf){const r=Yh(e,t);return r||{schema:e,unsupportedPaths:[i]}}const a=Array.isArray(e.type)&&e.type.includes("null"),o=Ee(e)??(e.properties||e.additionalProperties?"object":void 0);if(s.type=o??e.type,s.nullable=a||e.nullable,s.enum){const{enumValues:r,nullable:l}=ac(s.enum);s.enum=r,l&&(s.nullable=!0),r.length===0&&n.add(i)}if(o==="object"){const r=e.properties??{},l={};for(const[d,p]of Object.entries(r)){const g=Sn(p,[...t,d]);g.schema&&(l[d]=g.schema);for(const h of g.unsupportedPaths)n.add(h)}if(s.properties=l,e.additionalProperties===!0)n.add(i);else if(e.additionalProperties===!1)s.additionalProperties=!1;else if(e.additionalProperties&&typeof e.additionalProperties=="object"&&!Qh(e.additionalProperties)){const d=Sn(e.additionalProperties,[...t,"*"]);s.additionalProperties=d.schema??e.additionalProperties,d.unsupportedPaths.length>0&&n.add(i)}}else if(o==="array"){const r=Array.isArray(e.items)?e.items[0]:e.items;if(!r)n.add(i);else{const l=Sn(r,[...t,"*"]);s.items=l.schema??r,l.unsupportedPaths.length>0&&n.add(i)}}else o!=="string"&&o!=="number"&&o!=="integer"&&o!=="boolean"&&!s.enum&&n.add(i);return{schema:s,unsupportedPaths:Array.from(n)}}function Yh(e,t){if(e.allOf)return null;const n=e.anyOf??e.oneOf;if(!n)return null;const s=[],i=[];let a=!1;for(const r of n){if(!r||typeof r!="object")return null;if(Array.isArray(r.enum)){const{enumValues:l,nullable:d}=ac(r.enum);s.push(...l),d&&(a=!0);continue}if("const"in r){if(r.const==null){a=!0;continue}s.push(r.const);continue}if(Ee(r)==="null"){a=!0;continue}i.push(r)}if(s.length>0&&i.length===0){const r=[];for(const l of s)r.some(d=>Object.is(d,l))||r.push(l);return{schema:{...e,enum:r,nullable:a,anyOf:void 0,oneOf:void 0,allOf:void 0},unsupportedPaths:[]}}if(i.length===1){const r=Sn(i[0],t);return r.schema&&(r.schema.nullable=a||r.schema.nullable),r}const o=new Set(["string","number","integer","boolean"]);return i.length>0&&s.length===0&&i.every(r=>r.type&&o.has(String(r.type)))?{schema:{...e,nullable:a},unsupportedPaths:[]}:null}function Zh(e,t){let n=e;for(const s of t){if(!n)return null;const i=Ee(n);if(i==="object"){const a=n.properties??{};if(typeof s=="string"&&a[s]){n=a[s];continue}const o=n.additionalProperties;if(typeof s=="string"&&o&&typeof o=="object"){n=o;continue}return null}if(i==="array"){if(typeof s!="number")return null;n=(Array.isArray(n.items)?n.items[0]:n.items)??null;continue}return null}return n}function Jh(e,t){const s=(e.channels??{})[t],i=e[t];return(s&&typeof s=="object"?s:null)??(i&&typeof i=="object"?i:null)??{}}const Xh=["groupPolicy","streamMode","dmPolicy"];function em(e){if(e==null)return"n/a";if(typeof e=="string"||typeof e=="number"||typeof e=="boolean")return String(e);try{return JSON.stringify(e)}catch{return"n/a"}}function tm(e){const t=Xh.flatMap(n=>n in e?[[n,e[n]]]:[]);return t.length===0?null:c`
    <div class="status-list" style="margin-top: 12px;">
      ${t.map(([n,s])=>c`
          <div>
            <span class="label">${n}</span>
            <span>${em(s)}</span>
          </div>
        `)}
    </div>
  `}function nm(e){const t=oc(e.schema),n=t.schema;if(!n)return c`
      <div class="callout danger">Schema unavailable. Use Raw.</div>
    `;const s=Zh(n,["channels",e.channelId]);if(!s)return c`
      <div class="callout danger">Channel config schema unavailable.</div>
    `;const i=e.configValue??{},a=Jh(i,e.channelId);return c`
    <div class="config-form">
      ${vt({schema:s,value:a,path:["channels",e.channelId],hints:e.uiHints,unsupported:new Set(t.unsupportedPaths),disabled:e.disabled,showLabel:!1,onPatch:e.onPatch})}
    </div>
    ${tm(a)}
  `}function st(e){const{channelId:t,props:n}=e,s=n.configSaving||n.configSchemaLoading;return c`
    <div style="margin-top: 16px;">
      ${n.configSchemaLoading?c`
              <div class="muted">Loading config schema…</div>
            `:nm({channelId:t,configValue:n.configForm,schema:n.configSchema,uiHints:n.configUiHints,disabled:s,onPatch:n.onConfigPatch})}
      <div class="row" style="margin-top: 12px;">
        <button
          class="btn primary"
          ?disabled=${s||!n.configFormDirty}
          @click=${()=>n.onConfigSave()}
        >
          ${n.configSaving?"Saving…":"Save"}
        </button>
        <button
          class="btn"
          ?disabled=${s}
          @click=${()=>n.onConfigReload()}
        >
          Reload
        </button>
      </div>
    </div>
  `}function sm(e){const{props:t,discord:n,accountCountLabel:s}=e;return c`
    <div class="card">
      <div class="card-title">Discord</div>
      <div class="card-sub">Bot status and channel configuration.</div>
      ${s}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">Configured</span>
          <span>${n?.configured?"Yes":"No"}</span>
        </div>
        <div>
          <span class="label">Running</span>
          <span>${n?.running?"Yes":"No"}</span>
        </div>
        <div>
          <span class="label">Last start</span>
          <span>${n?.lastStartAt?ee(n.lastStartAt):"n/a"}</span>
        </div>
        <div>
          <span class="label">Last probe</span>
          <span>${n?.lastProbeAt?ee(n.lastProbeAt):"n/a"}</span>
        </div>
      </div>

      ${n?.lastError?c`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:m}

      ${n?.probe?c`<div class="callout" style="margin-top: 12px;">
            Probe ${n.probe.ok?"ok":"failed"} ·
            ${n.probe.status??""} ${n.probe.error??""}
          </div>`:m}

      ${st({channelId:"discord",props:t})}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          Probe
        </button>
      </div>
    </div>
  `}function im(e){const{props:t,googleChat:n,accountCountLabel:s}=e;return c`
    <div class="card">
      <div class="card-title">Google Chat</div>
      <div class="card-sub">Chat API webhook status and channel configuration.</div>
      ${s}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">Configured</span>
          <span>${n?n.configured?"Yes":"No":"n/a"}</span>
        </div>
        <div>
          <span class="label">Running</span>
          <span>${n?n.running?"Yes":"No":"n/a"}</span>
        </div>
        <div>
          <span class="label">Credential</span>
          <span>${n?.credentialSource??"n/a"}</span>
        </div>
        <div>
          <span class="label">Audience</span>
          <span>
            ${n?.audienceType?`${n.audienceType}${n.audience?` · ${n.audience}`:""}`:"n/a"}
          </span>
        </div>
        <div>
          <span class="label">Last start</span>
          <span>${n?.lastStartAt?ee(n.lastStartAt):"n/a"}</span>
        </div>
        <div>
          <span class="label">Last probe</span>
          <span>${n?.lastProbeAt?ee(n.lastProbeAt):"n/a"}</span>
        </div>
      </div>

      ${n?.lastError?c`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:m}

      ${n?.probe?c`<div class="callout" style="margin-top: 12px;">
            Probe ${n.probe.ok?"ok":"failed"} ·
            ${n.probe.status??""} ${n.probe.error??""}
          </div>`:m}

      ${st({channelId:"googlechat",props:t})}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          Probe
        </button>
      </div>
    </div>
  `}function am(e){const{props:t,imessage:n,accountCountLabel:s}=e;return c`
    <div class="card">
      <div class="card-title">iMessage</div>
      <div class="card-sub">macOS bridge status and channel configuration.</div>
      ${s}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">Configured</span>
          <span>${n?.configured?"Yes":"No"}</span>
        </div>
        <div>
          <span class="label">Running</span>
          <span>${n?.running?"Yes":"No"}</span>
        </div>
        <div>
          <span class="label">Last start</span>
          <span>${n?.lastStartAt?ee(n.lastStartAt):"n/a"}</span>
        </div>
        <div>
          <span class="label">Last probe</span>
          <span>${n?.lastProbeAt?ee(n.lastProbeAt):"n/a"}</span>
        </div>
      </div>

      ${n?.lastError?c`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:m}

      ${n?.probe?c`<div class="callout" style="margin-top: 12px;">
            Probe ${n.probe.ok?"ok":"failed"} ·
            ${n.probe.error??""}
          </div>`:m}

      ${st({channelId:"imessage",props:t})}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          Probe
        </button>
      </div>
    </div>
  `}function Xo(e){return e?e.length<=20?e:`${e.slice(0,8)}...${e.slice(-8)}`:"n/a"}function om(e){const{props:t,nostr:n,nostrAccounts:s,accountCountLabel:i,profileFormState:a,profileFormCallbacks:o,onEditProfile:r}=e,l=s[0],d=n?.configured??l?.configured??!1,p=n?.running??l?.running??!1,g=n?.publicKey??l?.publicKey,h=n?.lastStartAt??l?.lastStartAt??null,u=n?.lastError??l?.lastError??null,f=s.length>1,v=a!=null,w=C=>{const k=C.publicKey,A=C.profile,E=A?.displayName??A?.name??C.name??C.accountId;return c`
      <div class="account-card">
        <div class="account-card-header">
          <div class="account-card-title">${E}</div>
          <div class="account-card-id">${C.accountId}</div>
        </div>
        <div class="status-list account-card-status">
          <div>
            <span class="label">Running</span>
            <span>${C.running?"Yes":"No"}</span>
          </div>
          <div>
            <span class="label">Configured</span>
            <span>${C.configured?"Yes":"No"}</span>
          </div>
          <div>
            <span class="label">Public Key</span>
            <span class="monospace" title="${k??""}">${Xo(k)}</span>
          </div>
          <div>
            <span class="label">Last inbound</span>
            <span>${C.lastInboundAt?ee(C.lastInboundAt):"n/a"}</span>
          </div>
          ${C.lastError?c`
                <div class="account-card-error">${C.lastError}</div>
              `:m}
        </div>
      </div>
    `},S=()=>{if(v&&o)return Ld({state:a,callbacks:o,accountId:s[0]?.accountId??"default"});const C=l?.profile??n?.profile,{name:k,displayName:A,about:E,picture:T,nip05:R}=C??{},H=k||A||E||T||R;return c`
      <div style="margin-top: 16px; padding: 12px; background: var(--bg-secondary); border-radius: 8px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <div style="font-weight: 500;">Profile</div>
          ${d?c`
                <button
                  class="btn btn-sm"
                  @click=${r}
                  style="font-size: 12px; padding: 4px 8px;"
                >
                  Edit Profile
                </button>
              `:m}
        </div>
        ${H?c`
              <div class="status-list">
                ${T?c`
                      <div style="margin-bottom: 8px;">
                        <img
                          src=${T}
                          alt="Profile picture"
                          style="width: 48px; height: 48px; border-radius: 50%; object-fit: cover; border: 2px solid var(--border-color);"
                          @error=${Z=>{Z.target.style.display="none"}}
                        />
                      </div>
                    `:m}
                ${k?c`<div><span class="label">Name</span><span>${k}</span></div>`:m}
                ${A?c`<div><span class="label">Display Name</span><span>${A}</span></div>`:m}
                ${E?c`<div><span class="label">About</span><span style="max-width: 300px; overflow: hidden; text-overflow: ellipsis;">${E}</span></div>`:m}
                ${R?c`<div><span class="label">NIP-05</span><span>${R}</span></div>`:m}
              </div>
            `:c`
                <div style="color: var(--text-muted); font-size: 13px">
                  No profile set. Click "Edit Profile" to add your name, bio, and avatar.
                </div>
              `}
      </div>
    `};return c`
    <div class="card">
      <div class="card-title">Nostr</div>
      <div class="card-sub">Decentralized DMs via Nostr relays (NIP-04).</div>
      ${i}

      ${f?c`
            <div class="account-card-list">
              ${s.map(C=>w(C))}
            </div>
          `:c`
            <div class="status-list" style="margin-top: 16px;">
              <div>
                <span class="label">Configured</span>
                <span>${d?"Yes":"No"}</span>
              </div>
              <div>
                <span class="label">Running</span>
                <span>${p?"Yes":"No"}</span>
              </div>
              <div>
                <span class="label">Public Key</span>
                <span class="monospace" title="${g??""}"
                  >${Xo(g)}</span
                >
              </div>
              <div>
                <span class="label">Last start</span>
                <span>${h?ee(h):"n/a"}</span>
              </div>
            </div>
          `}

      ${u?c`<div class="callout danger" style="margin-top: 12px;">${u}</div>`:m}

      ${S()}

      ${st({channelId:"nostr",props:t})}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!1)}>Refresh</button>
      </div>
    </div>
  `}function rm(e,t){const n=t.snapshot,s=n?.channels;if(!n||!s)return!1;const i=s[e],a=typeof i?.configured=="boolean"&&i.configured,o=typeof i?.running=="boolean"&&i.running,r=typeof i?.connected=="boolean"&&i.connected,d=(n.channelAccounts?.[e]??[]).some(p=>p.configured||p.running||p.connected);return a||o||r||d}function lm(e,t){return t?.[e]?.length??0}function rc(e,t){const n=lm(e,t);return n<2?m:c`<div class="account-count">Accounts (${n})</div>`}function cm(e){const{props:t,signal:n,accountCountLabel:s}=e;return c`
    <div class="card">
      <div class="card-title">Signal</div>
      <div class="card-sub">signal-cli status and channel configuration.</div>
      ${s}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">Configured</span>
          <span>${n?.configured?"Yes":"No"}</span>
        </div>
        <div>
          <span class="label">Running</span>
          <span>${n?.running?"Yes":"No"}</span>
        </div>
        <div>
          <span class="label">Base URL</span>
          <span>${n?.baseUrl??"n/a"}</span>
        </div>
        <div>
          <span class="label">Last start</span>
          <span>${n?.lastStartAt?ee(n.lastStartAt):"n/a"}</span>
        </div>
        <div>
          <span class="label">Last probe</span>
          <span>${n?.lastProbeAt?ee(n.lastProbeAt):"n/a"}</span>
        </div>
      </div>

      ${n?.lastError?c`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:m}

      ${n?.probe?c`<div class="callout" style="margin-top: 12px;">
            Probe ${n.probe.ok?"ok":"failed"} ·
            ${n.probe.status??""} ${n.probe.error??""}
          </div>`:m}

      ${st({channelId:"signal",props:t})}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          Probe
        </button>
      </div>
    </div>
  `}function dm(e){const{props:t,slack:n,accountCountLabel:s}=e;return c`
    <div class="card">
      <div class="card-title">Slack</div>
      <div class="card-sub">Socket mode status and channel configuration.</div>
      ${s}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">Configured</span>
          <span>${n?.configured?"Yes":"No"}</span>
        </div>
        <div>
          <span class="label">Running</span>
          <span>${n?.running?"Yes":"No"}</span>
        </div>
        <div>
          <span class="label">Last start</span>
          <span>${n?.lastStartAt?ee(n.lastStartAt):"n/a"}</span>
        </div>
        <div>
          <span class="label">Last probe</span>
          <span>${n?.lastProbeAt?ee(n.lastProbeAt):"n/a"}</span>
        </div>
      </div>

      ${n?.lastError?c`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:m}

      ${n?.probe?c`<div class="callout" style="margin-top: 12px;">
            Probe ${n.probe.ok?"ok":"failed"} ·
            ${n.probe.status??""} ${n.probe.error??""}
          </div>`:m}

      ${st({channelId:"slack",props:t})}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          Probe
        </button>
      </div>
    </div>
  `}function um(e){const{props:t,telegram:n,telegramAccounts:s,accountCountLabel:i}=e,a=s.length>1,o=r=>{const d=r.probe?.bot?.username,p=r.name||r.accountId;return c`
      <div class="account-card">
        <div class="account-card-header">
          <div class="account-card-title">
            ${d?`@${d}`:p}
          </div>
          <div class="account-card-id">${r.accountId}</div>
        </div>
        <div class="status-list account-card-status">
          <div>
            <span class="label">Running</span>
            <span>${r.running?"Yes":"No"}</span>
          </div>
          <div>
            <span class="label">Configured</span>
            <span>${r.configured?"Yes":"No"}</span>
          </div>
          <div>
            <span class="label">Last inbound</span>
            <span>${r.lastInboundAt?ee(r.lastInboundAt):"n/a"}</span>
          </div>
          ${r.lastError?c`
                <div class="account-card-error">
                  ${r.lastError}
                </div>
              `:m}
        </div>
      </div>
    `};return c`
    <div class="card">
      <div class="card-title">Telegram</div>
      <div class="card-sub">Bot status and channel configuration.</div>
      ${i}

      ${a?c`
            <div class="account-card-list">
              ${s.map(r=>o(r))}
            </div>
          `:c`
            <div class="status-list" style="margin-top: 16px;">
              <div>
                <span class="label">Configured</span>
                <span>${n?.configured?"Yes":"No"}</span>
              </div>
              <div>
                <span class="label">Running</span>
                <span>${n?.running?"Yes":"No"}</span>
              </div>
              <div>
                <span class="label">Mode</span>
                <span>${n?.mode??"n/a"}</span>
              </div>
              <div>
                <span class="label">Last start</span>
                <span>${n?.lastStartAt?ee(n.lastStartAt):"n/a"}</span>
              </div>
              <div>
                <span class="label">Last probe</span>
                <span>${n?.lastProbeAt?ee(n.lastProbeAt):"n/a"}</span>
              </div>
            </div>
          `}

      ${n?.lastError?c`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:m}

      ${n?.probe?c`<div class="callout" style="margin-top: 12px;">
            Probe ${n.probe.ok?"ok":"failed"} ·
            ${n.probe.status??""} ${n.probe.error??""}
          </div>`:m}

      ${st({channelId:"telegram",props:t})}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          Probe
        </button>
      </div>
    </div>
  `}function gm(e){const{props:t,whatsapp:n,accountCountLabel:s}=e;return c`
    <div class="card">
      <div class="card-title">WhatsApp</div>
      <div class="card-sub">Link WhatsApp Web and monitor connection health.</div>
      ${s}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">Configured</span>
          <span>${n?.configured?"Yes":"No"}</span>
        </div>
        <div>
          <span class="label">Linked</span>
          <span>${n?.linked?"Yes":"No"}</span>
        </div>
        <div>
          <span class="label">Running</span>
          <span>${n?.running?"Yes":"No"}</span>
        </div>
        <div>
          <span class="label">Connected</span>
          <span>${n?.connected?"Yes":"No"}</span>
        </div>
        <div>
          <span class="label">Last connect</span>
          <span>
            ${n?.lastConnectedAt?ee(n.lastConnectedAt):"n/a"}
          </span>
        </div>
        <div>
          <span class="label">Last message</span>
          <span>
            ${n?.lastMessageAt?ee(n.lastMessageAt):"n/a"}
          </span>
        </div>
        <div>
          <span class="label">Auth age</span>
          <span>
            ${n?.authAgeMs!=null?oa(n.authAgeMs):"n/a"}
          </span>
        </div>
      </div>

      ${n?.lastError?c`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:m}

      ${t.whatsappMessage?c`<div class="callout" style="margin-top: 12px;">
            ${t.whatsappMessage}
          </div>`:m}

      ${t.whatsappQrDataUrl?c`<div class="qr-wrap">
            <img src=${t.whatsappQrDataUrl} alt="WhatsApp QR" />
          </div>`:m}

      <div class="row" style="margin-top: 14px; flex-wrap: wrap;">
        <button
          class="btn primary"
          ?disabled=${t.whatsappBusy}
          @click=${()=>t.onWhatsAppStart(!1)}
        >
          ${t.whatsappBusy?"Working…":"Show QR"}
        </button>
        <button
          class="btn"
          ?disabled=${t.whatsappBusy}
          @click=${()=>t.onWhatsAppStart(!0)}
        >
          Relink
        </button>
        <button
          class="btn"
          ?disabled=${t.whatsappBusy}
          @click=${()=>t.onWhatsAppWait()}
        >
          Wait for scan
        </button>
        <button
          class="btn danger"
          ?disabled=${t.whatsappBusy}
          @click=${()=>t.onWhatsAppLogout()}
        >
          Logout
        </button>
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          Refresh
        </button>
      </div>

      ${st({channelId:"whatsapp",props:t})}
    </div>
  `}function pm(e){const t=e.snapshot?.channels,n=t?.whatsapp??void 0,s=t?.telegram??void 0,i=t?.discord??null,a=t?.googlechat??null,o=t?.slack??null,r=t?.signal??null,l=t?.imessage??null,d=t?.nostr??null,g=fm(e.snapshot).map((h,u)=>({key:h,enabled:rm(h,e),order:u})).toSorted((h,u)=>h.enabled!==u.enabled?h.enabled?-1:1:h.order-u.order);return c`
    <section class="grid grid-cols-2">
      ${g.map(h=>hm(h.key,e,{whatsapp:n,telegram:s,discord:i,googlechat:a,slack:o,signal:r,imessage:l,nostr:d,channelAccounts:e.snapshot?.channelAccounts??null}))}
    </section>

    <section class="card" style="margin-top: 18px;">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">Channel health</div>
          <div class="card-sub">Channel status snapshots from the gateway.</div>
        </div>
        <div class="muted">${e.lastSuccessAt?ee(e.lastSuccessAt):"n/a"}</div>
      </div>
      ${e.lastError?c`<div class="callout danger" style="margin-top: 12px;">
            ${e.lastError}
          </div>`:m}
      <pre class="code-block" style="margin-top: 12px;">
${e.snapshot?JSON.stringify(e.snapshot,null,2):"No snapshot yet."}
      </pre>
    </section>
  `}function fm(e){return e?.channelMeta?.length?e.channelMeta.map(t=>t.id):e?.channelOrder?.length?e.channelOrder:["whatsapp","telegram","discord","googlechat","slack","signal","imessage","nostr"]}function hm(e,t,n){const s=rc(e,n.channelAccounts);switch(e){case"whatsapp":return gm({props:t,whatsapp:n.whatsapp,accountCountLabel:s});case"telegram":return um({props:t,telegram:n.telegram,telegramAccounts:n.channelAccounts?.telegram??[],accountCountLabel:s});case"discord":return sm({props:t,discord:n.discord,accountCountLabel:s});case"googlechat":return im({props:t,googleChat:n.googlechat,accountCountLabel:s});case"slack":return dm({props:t,slack:n.slack,accountCountLabel:s});case"signal":return cm({props:t,signal:n.signal,accountCountLabel:s});case"imessage":return am({props:t,imessage:n.imessage,accountCountLabel:s});case"nostr":{const i=n.channelAccounts?.nostr??[],a=i[0],o=a?.accountId??"default",r=a?.profile??null,l=t.nostrProfileAccountId===o?t.nostrProfileFormState:null,d=l?{onFieldChange:t.onNostrProfileFieldChange,onSave:t.onNostrProfileSave,onImport:t.onNostrProfileImport,onCancel:t.onNostrProfileCancel,onToggleAdvanced:t.onNostrProfileToggleAdvanced}:null;return om({props:t,nostr:n.nostr,nostrAccounts:i,accountCountLabel:s,profileFormState:l,profileFormCallbacks:d,onEditProfile:()=>t.onNostrProfileEdit(o,r)})}default:return mm(e,t,n.channelAccounts??{})}}function mm(e,t,n){const s=bm(t.snapshot,e),i=t.snapshot?.channels?.[e],a=typeof i?.configured=="boolean"?i.configured:void 0,o=typeof i?.running=="boolean"?i.running:void 0,r=typeof i?.connected=="boolean"?i.connected:void 0,l=typeof i?.lastError=="string"?i.lastError:void 0,d=n[e]??[],p=rc(e,n);return c`
    <div class="card">
      <div class="card-title">${s}</div>
      <div class="card-sub">Channel status and configuration.</div>
      ${p}

      ${d.length>0?c`
            <div class="account-card-list">
              ${d.map(g=>wm(g))}
            </div>
          `:c`
            <div class="status-list" style="margin-top: 16px;">
              <div>
                <span class="label">Configured</span>
                <span>${a==null?"n/a":a?"Yes":"No"}</span>
              </div>
              <div>
                <span class="label">Running</span>
                <span>${o==null?"n/a":o?"Yes":"No"}</span>
              </div>
              <div>
                <span class="label">Connected</span>
                <span>${r==null?"n/a":r?"Yes":"No"}</span>
              </div>
            </div>
          `}

      ${l?c`<div class="callout danger" style="margin-top: 12px;">
            ${l}
          </div>`:m}

      ${st({channelId:e,props:t})}
    </div>
  `}function vm(e){return e?.channelMeta?.length?Object.fromEntries(e.channelMeta.map(t=>[t.id,t])):{}}function bm(e,t){return vm(e)[t]?.label??e?.channelLabels?.[t]??t}const ym=600*1e3;function lc(e){return e.lastInboundAt?Date.now()-e.lastInboundAt<ym:!1}function xm(e){return e.running?"Yes":lc(e)?"Active":"No"}function $m(e){return e.connected===!0?"Yes":e.connected===!1?"No":lc(e)?"Active":"n/a"}function wm(e){const t=xm(e),n=$m(e);return c`
    <div class="account-card">
      <div class="account-card-header">
        <div class="account-card-title">${e.name||e.accountId}</div>
        <div class="account-card-id">${e.accountId}</div>
      </div>
      <div class="status-list account-card-status">
        <div>
          <span class="label">Running</span>
          <span>${t}</span>
        </div>
        <div>
          <span class="label">Configured</span>
          <span>${e.configured?"Yes":"No"}</span>
        </div>
        <div>
          <span class="label">Connected</span>
          <span>${n}</span>
        </div>
        <div>
          <span class="label">Last inbound</span>
          <span>${e.lastInboundAt?ee(e.lastInboundAt):"n/a"}</span>
        </div>
        ${e.lastError?c`
              <div class="account-card-error">
                ${e.lastError}
              </div>
            `:m}
      </div>
    </div>
  `}const An=(e,t)=>{const n=e._$AN;if(n===void 0)return!1;for(const s of n)s._$AO?.(t,!1),An(s,t);return!0},ms=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},cc=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),Am(t)}};function km(e){this._$AN!==void 0?(ms(this),this._$AM=e,cc(this)):this._$AM=e}function Sm(e,t=!1,n=0){const s=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(s))for(let a=n;a<s.length;a++)An(s[a],!1),ms(s[a]);else s!=null&&(An(s,!1),ms(s));else An(this,e)}const Am=e=>{e.type==wa.CHILD&&(e._$AP??=Sm,e._$AQ??=km)};class Cm extends Sa{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,n,s){super._$AT(t,n,s),cc(this),this.isConnected=t._$AU}_$AO(t,n=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),n&&(An(this,t),ms(this))}setValue(t){if(Pf(this._$Ct))this._$Ct._$AI(t,this);else{const n=[...this._$Ct._$AH];n[this._$Ci]=t,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}}const ri=new WeakMap,Tm=ka(class extends Cm{render(e){return m}update(e,[t]){const n=t!==this.G;return n&&this.G!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),m}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let n=ri.get(t);n===void 0&&(n=new WeakMap,ri.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?ri.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});class Pi extends Sa{constructor(t){if(super(t),this.it=m,t.type!==wa.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===m||t==null)return this._t=void 0,this.it=t;if(t===ht)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const n=[t];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}}Pi.directiveName="unsafeHTML",Pi.resultType=1;const Di=ka(Pi);const{entries:dc,setPrototypeOf:er,isFrozen:_m,getPrototypeOf:Em,getOwnPropertyDescriptor:Lm}=Object;let{freeze:we,seal:Pe,create:Fi}=Object,{apply:Ni,construct:Oi}=typeof Reflect<"u"&&Reflect;we||(we=function(t){return t});Pe||(Pe=function(t){return t});Ni||(Ni=function(t,n){for(var s=arguments.length,i=new Array(s>2?s-2:0),a=2;a<s;a++)i[a-2]=arguments[a];return t.apply(n,i)});Oi||(Oi=function(t){for(var n=arguments.length,s=new Array(n>1?n-1:0),i=1;i<n;i++)s[i-1]=arguments[i];return new t(...s)});const Zn=ke(Array.prototype.forEach),Mm=ke(Array.prototype.lastIndexOf),tr=ke(Array.prototype.pop),gn=ke(Array.prototype.push),Rm=ke(Array.prototype.splice),rs=ke(String.prototype.toLowerCase),li=ke(String.prototype.toString),ci=ke(String.prototype.match),pn=ke(String.prototype.replace),Im=ke(String.prototype.indexOf),Pm=ke(String.prototype.trim),De=ke(Object.prototype.hasOwnProperty),xe=ke(RegExp.prototype.test),fn=Dm(TypeError);function ke(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);for(var n=arguments.length,s=new Array(n>1?n-1:0),i=1;i<n;i++)s[i-1]=arguments[i];return Ni(e,t,s)}}function Dm(e){return function(){for(var t=arguments.length,n=new Array(t),s=0;s<t;s++)n[s]=arguments[s];return Oi(e,n)}}function W(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:rs;er&&er(e,null);let s=t.length;for(;s--;){let i=t[s];if(typeof i=="string"){const a=n(i);a!==i&&(_m(t)||(t[s]=a),i=a)}e[i]=!0}return e}function Fm(e){for(let t=0;t<e.length;t++)De(e,t)||(e[t]=null);return e}function je(e){const t=Fi(null);for(const[n,s]of dc(e))De(e,n)&&(Array.isArray(s)?t[n]=Fm(s):s&&typeof s=="object"&&s.constructor===Object?t[n]=je(s):t[n]=s);return t}function hn(e,t){for(;e!==null;){const s=Lm(e,t);if(s){if(s.get)return ke(s.get);if(typeof s.value=="function")return ke(s.value)}e=Em(e)}function n(){return null}return n}const nr=we(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),di=we(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),ui=we(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Nm=we(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),gi=we(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Om=we(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),sr=we(["#text"]),ir=we(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),pi=we(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),ar=we(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Jn=we(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Bm=Pe(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Um=Pe(/<%[\w\W]*|[\w\W]*%>/gm),zm=Pe(/\$\{[\w\W]*/gm),Hm=Pe(/^data-[\-\w.\u00B7-\uFFFF]+$/),jm=Pe(/^aria-[\-\w]+$/),uc=Pe(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Km=Pe(/^(?:\w+script|data):/i),Wm=Pe(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),gc=Pe(/^html$/i),qm=Pe(/^[a-z][.\w]*(-[.\w]+)+$/i);var or=Object.freeze({__proto__:null,ARIA_ATTR:jm,ATTR_WHITESPACE:Wm,CUSTOM_ELEMENT:qm,DATA_ATTR:Hm,DOCTYPE_NAME:gc,ERB_EXPR:Um,IS_ALLOWED_URI:uc,IS_SCRIPT_OR_DATA:Km,MUSTACHE_EXPR:Bm,TMPLIT_EXPR:zm});const mn={element:1,text:3,progressingInstruction:7,comment:8,document:9},Gm=function(){return typeof window>"u"?null:window},Vm=function(t,n){if(typeof t!="object"||typeof t.createPolicy!="function")return null;let s=null;const i="data-tt-policy-suffix";n&&n.hasAttribute(i)&&(s=n.getAttribute(i));const a="dompurify"+(s?"#"+s:"");try{return t.createPolicy(a,{createHTML(o){return o},createScriptURL(o){return o}})}catch{return console.warn("TrustedTypes policy "+a+" could not be created."),null}},rr=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function pc(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Gm();const t=U=>pc(U);if(t.version="3.3.1",t.removed=[],!e||!e.document||e.document.nodeType!==mn.document||!e.Element)return t.isSupported=!1,t;let{document:n}=e;const s=n,i=s.currentScript,{DocumentFragment:a,HTMLTemplateElement:o,Node:r,Element:l,NodeFilter:d,NamedNodeMap:p=e.NamedNodeMap||e.MozNamedAttrMap,HTMLFormElement:g,DOMParser:h,trustedTypes:u}=e,f=l.prototype,v=hn(f,"cloneNode"),w=hn(f,"remove"),S=hn(f,"nextSibling"),C=hn(f,"childNodes"),k=hn(f,"parentNode");if(typeof o=="function"){const U=n.createElement("template");U.content&&U.content.ownerDocument&&(n=U.content.ownerDocument)}let A,E="";const{implementation:T,createNodeIterator:R,createDocumentFragment:H,getElementsByTagName:Z}=n,{importNode:te}=s;let I=rr();t.isSupported=typeof dc=="function"&&typeof k=="function"&&T&&T.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:q,ERB_EXPR:ne,TMPLIT_EXPR:oe,DATA_ATTR:_,ARIA_ATTR:j,IS_SCRIPT_OR_DATA:Q,ATTR_WHITESPACE:re,CUSTOM_ELEMENT:fe}=or;let{IS_ALLOWED_URI:M}=or,D=null;const F=W({},[...nr,...di,...ui,...gi,...sr]);let K=null;const ce=W({},[...ir,...pi,...ar,...Jn]);let J=Object.seal(Fi(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),se=null,G=null;const z=Object.seal(Fi(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let ie=!0,le=!0,he=!1,Te=!0,qe=!1,it=!0,me=!1,Be=!1,Ge=!1,Ve=!1,Qe=!1,at=!1,ot=!0,xt=!1;const Ns="user-content-";let Kt=!0,rt=!1,Ue={},Se=null;const ln=W({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Wt=null;const lt=W({},["audio","video","img","source","image","track"]);let Os=null;const Ua=W({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Bn="http://www.w3.org/1998/Math/MathML",Un="http://www.w3.org/2000/svg",Ye="http://www.w3.org/1999/xhtml";let qt=Ye,Bs=!1,Us=null;const Oc=W({},[Bn,Un,Ye],li);let zn=W({},["mi","mo","mn","ms","mtext"]),Hn=W({},["annotation-xml"]);const Bc=W({},["title","style","font","a","script"]);let cn=null;const Uc=["application/xhtml+xml","text/html"],zc="text/html";let ue=null,Gt=null;const Hc=n.createElement("form"),za=function(b){return b instanceof RegExp||b instanceof Function},zs=function(){let b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(Gt&&Gt===b)){if((!b||typeof b!="object")&&(b={}),b=je(b),cn=Uc.indexOf(b.PARSER_MEDIA_TYPE)===-1?zc:b.PARSER_MEDIA_TYPE,ue=cn==="application/xhtml+xml"?li:rs,D=De(b,"ALLOWED_TAGS")?W({},b.ALLOWED_TAGS,ue):F,K=De(b,"ALLOWED_ATTR")?W({},b.ALLOWED_ATTR,ue):ce,Us=De(b,"ALLOWED_NAMESPACES")?W({},b.ALLOWED_NAMESPACES,li):Oc,Os=De(b,"ADD_URI_SAFE_ATTR")?W(je(Ua),b.ADD_URI_SAFE_ATTR,ue):Ua,Wt=De(b,"ADD_DATA_URI_TAGS")?W(je(lt),b.ADD_DATA_URI_TAGS,ue):lt,Se=De(b,"FORBID_CONTENTS")?W({},b.FORBID_CONTENTS,ue):ln,se=De(b,"FORBID_TAGS")?W({},b.FORBID_TAGS,ue):je({}),G=De(b,"FORBID_ATTR")?W({},b.FORBID_ATTR,ue):je({}),Ue=De(b,"USE_PROFILES")?b.USE_PROFILES:!1,ie=b.ALLOW_ARIA_ATTR!==!1,le=b.ALLOW_DATA_ATTR!==!1,he=b.ALLOW_UNKNOWN_PROTOCOLS||!1,Te=b.ALLOW_SELF_CLOSE_IN_ATTR!==!1,qe=b.SAFE_FOR_TEMPLATES||!1,it=b.SAFE_FOR_XML!==!1,me=b.WHOLE_DOCUMENT||!1,Ve=b.RETURN_DOM||!1,Qe=b.RETURN_DOM_FRAGMENT||!1,at=b.RETURN_TRUSTED_TYPE||!1,Ge=b.FORCE_BODY||!1,ot=b.SANITIZE_DOM!==!1,xt=b.SANITIZE_NAMED_PROPS||!1,Kt=b.KEEP_CONTENT!==!1,rt=b.IN_PLACE||!1,M=b.ALLOWED_URI_REGEXP||uc,qt=b.NAMESPACE||Ye,zn=b.MATHML_TEXT_INTEGRATION_POINTS||zn,Hn=b.HTML_INTEGRATION_POINTS||Hn,J=b.CUSTOM_ELEMENT_HANDLING||{},b.CUSTOM_ELEMENT_HANDLING&&za(b.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(J.tagNameCheck=b.CUSTOM_ELEMENT_HANDLING.tagNameCheck),b.CUSTOM_ELEMENT_HANDLING&&za(b.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(J.attributeNameCheck=b.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),b.CUSTOM_ELEMENT_HANDLING&&typeof b.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(J.allowCustomizedBuiltInElements=b.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),qe&&(le=!1),Qe&&(Ve=!0),Ue&&(D=W({},sr),K=[],Ue.html===!0&&(W(D,nr),W(K,ir)),Ue.svg===!0&&(W(D,di),W(K,pi),W(K,Jn)),Ue.svgFilters===!0&&(W(D,ui),W(K,pi),W(K,Jn)),Ue.mathMl===!0&&(W(D,gi),W(K,ar),W(K,Jn))),b.ADD_TAGS&&(typeof b.ADD_TAGS=="function"?z.tagCheck=b.ADD_TAGS:(D===F&&(D=je(D)),W(D,b.ADD_TAGS,ue))),b.ADD_ATTR&&(typeof b.ADD_ATTR=="function"?z.attributeCheck=b.ADD_ATTR:(K===ce&&(K=je(K)),W(K,b.ADD_ATTR,ue))),b.ADD_URI_SAFE_ATTR&&W(Os,b.ADD_URI_SAFE_ATTR,ue),b.FORBID_CONTENTS&&(Se===ln&&(Se=je(Se)),W(Se,b.FORBID_CONTENTS,ue)),b.ADD_FORBID_CONTENTS&&(Se===ln&&(Se=je(Se)),W(Se,b.ADD_FORBID_CONTENTS,ue)),Kt&&(D["#text"]=!0),me&&W(D,["html","head","body"]),D.table&&(W(D,["tbody"]),delete se.tbody),b.TRUSTED_TYPES_POLICY){if(typeof b.TRUSTED_TYPES_POLICY.createHTML!="function")throw fn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof b.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw fn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');A=b.TRUSTED_TYPES_POLICY,E=A.createHTML("")}else A===void 0&&(A=Vm(u,i)),A!==null&&typeof E=="string"&&(E=A.createHTML(""));we&&we(b),Gt=b}},Ha=W({},[...di,...ui,...Nm]),ja=W({},[...gi,...Om]),jc=function(b){let L=k(b);(!L||!L.tagName)&&(L={namespaceURI:qt,tagName:"template"});const O=rs(b.tagName),ae=rs(L.tagName);return Us[b.namespaceURI]?b.namespaceURI===Un?L.namespaceURI===Ye?O==="svg":L.namespaceURI===Bn?O==="svg"&&(ae==="annotation-xml"||zn[ae]):!!Ha[O]:b.namespaceURI===Bn?L.namespaceURI===Ye?O==="math":L.namespaceURI===Un?O==="math"&&Hn[ae]:!!ja[O]:b.namespaceURI===Ye?L.namespaceURI===Un&&!Hn[ae]||L.namespaceURI===Bn&&!zn[ae]?!1:!ja[O]&&(Bc[O]||!Ha[O]):!!(cn==="application/xhtml+xml"&&Us[b.namespaceURI]):!1},ze=function(b){gn(t.removed,{element:b});try{k(b).removeChild(b)}catch{w(b)}},$t=function(b,L){try{gn(t.removed,{attribute:L.getAttributeNode(b),from:L})}catch{gn(t.removed,{attribute:null,from:L})}if(L.removeAttribute(b),b==="is")if(Ve||Qe)try{ze(L)}catch{}else try{L.setAttribute(b,"")}catch{}},Ka=function(b){let L=null,O=null;if(Ge)b="<remove></remove>"+b;else{const de=ci(b,/^[\r\n\t ]+/);O=de&&de[0]}cn==="application/xhtml+xml"&&qt===Ye&&(b='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+b+"</body></html>");const ae=A?A.createHTML(b):b;if(qt===Ye)try{L=new h().parseFromString(ae,cn)}catch{}if(!L||!L.documentElement){L=T.createDocument(qt,"template",null);try{L.documentElement.innerHTML=Bs?E:ae}catch{}}const be=L.body||L.documentElement;return b&&O&&be.insertBefore(n.createTextNode(O),be.childNodes[0]||null),qt===Ye?Z.call(L,me?"html":"body")[0]:me?L.documentElement:be},Wa=function(b){return R.call(b.ownerDocument||b,b,d.SHOW_ELEMENT|d.SHOW_COMMENT|d.SHOW_TEXT|d.SHOW_PROCESSING_INSTRUCTION|d.SHOW_CDATA_SECTION,null)},Hs=function(b){return b instanceof g&&(typeof b.nodeName!="string"||typeof b.textContent!="string"||typeof b.removeChild!="function"||!(b.attributes instanceof p)||typeof b.removeAttribute!="function"||typeof b.setAttribute!="function"||typeof b.namespaceURI!="string"||typeof b.insertBefore!="function"||typeof b.hasChildNodes!="function")},qa=function(b){return typeof r=="function"&&b instanceof r};function Ze(U,b,L){Zn(U,O=>{O.call(t,b,L,Gt)})}const Ga=function(b){let L=null;if(Ze(I.beforeSanitizeElements,b,null),Hs(b))return ze(b),!0;const O=ue(b.nodeName);if(Ze(I.uponSanitizeElement,b,{tagName:O,allowedTags:D}),it&&b.hasChildNodes()&&!qa(b.firstElementChild)&&xe(/<[/\w!]/g,b.innerHTML)&&xe(/<[/\w!]/g,b.textContent)||b.nodeType===mn.progressingInstruction||it&&b.nodeType===mn.comment&&xe(/<[/\w]/g,b.data))return ze(b),!0;if(!(z.tagCheck instanceof Function&&z.tagCheck(O))&&(!D[O]||se[O])){if(!se[O]&&Qa(O)&&(J.tagNameCheck instanceof RegExp&&xe(J.tagNameCheck,O)||J.tagNameCheck instanceof Function&&J.tagNameCheck(O)))return!1;if(Kt&&!Se[O]){const ae=k(b)||b.parentNode,be=C(b)||b.childNodes;if(be&&ae){const de=be.length;for(let Ae=de-1;Ae>=0;--Ae){const Je=v(be[Ae],!0);Je.__removalCount=(b.__removalCount||0)+1,ae.insertBefore(Je,S(b))}}}return ze(b),!0}return b instanceof l&&!jc(b)||(O==="noscript"||O==="noembed"||O==="noframes")&&xe(/<\/no(script|embed|frames)/i,b.innerHTML)?(ze(b),!0):(qe&&b.nodeType===mn.text&&(L=b.textContent,Zn([q,ne,oe],ae=>{L=pn(L,ae," ")}),b.textContent!==L&&(gn(t.removed,{element:b.cloneNode()}),b.textContent=L)),Ze(I.afterSanitizeElements,b,null),!1)},Va=function(b,L,O){if(ot&&(L==="id"||L==="name")&&(O in n||O in Hc))return!1;if(!(le&&!G[L]&&xe(_,L))){if(!(ie&&xe(j,L))){if(!(z.attributeCheck instanceof Function&&z.attributeCheck(L,b))){if(!K[L]||G[L]){if(!(Qa(b)&&(J.tagNameCheck instanceof RegExp&&xe(J.tagNameCheck,b)||J.tagNameCheck instanceof Function&&J.tagNameCheck(b))&&(J.attributeNameCheck instanceof RegExp&&xe(J.attributeNameCheck,L)||J.attributeNameCheck instanceof Function&&J.attributeNameCheck(L,b))||L==="is"&&J.allowCustomizedBuiltInElements&&(J.tagNameCheck instanceof RegExp&&xe(J.tagNameCheck,O)||J.tagNameCheck instanceof Function&&J.tagNameCheck(O))))return!1}else if(!Os[L]){if(!xe(M,pn(O,re,""))){if(!((L==="src"||L==="xlink:href"||L==="href")&&b!=="script"&&Im(O,"data:")===0&&Wt[b])){if(!(he&&!xe(Q,pn(O,re,"")))){if(O)return!1}}}}}}}return!0},Qa=function(b){return b!=="annotation-xml"&&ci(b,fe)},Ya=function(b){Ze(I.beforeSanitizeAttributes,b,null);const{attributes:L}=b;if(!L||Hs(b))return;const O={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:K,forceKeepAttr:void 0};let ae=L.length;for(;ae--;){const be=L[ae],{name:de,namespaceURI:Ae,value:Je}=be,Vt=ue(de),js=Je;let ve=de==="value"?js:Pm(js);if(O.attrName=Vt,O.attrValue=ve,O.keepAttr=!0,O.forceKeepAttr=void 0,Ze(I.uponSanitizeAttribute,b,O),ve=O.attrValue,xt&&(Vt==="id"||Vt==="name")&&($t(de,b),ve=Ns+ve),it&&xe(/((--!?|])>)|<\/(style|title|textarea)/i,ve)){$t(de,b);continue}if(Vt==="attributename"&&ci(ve,"href")){$t(de,b);continue}if(O.forceKeepAttr)continue;if(!O.keepAttr){$t(de,b);continue}if(!Te&&xe(/\/>/i,ve)){$t(de,b);continue}qe&&Zn([q,ne,oe],Ja=>{ve=pn(ve,Ja," ")});const Za=ue(b.nodeName);if(!Va(Za,Vt,ve)){$t(de,b);continue}if(A&&typeof u=="object"&&typeof u.getAttributeType=="function"&&!Ae)switch(u.getAttributeType(Za,Vt)){case"TrustedHTML":{ve=A.createHTML(ve);break}case"TrustedScriptURL":{ve=A.createScriptURL(ve);break}}if(ve!==js)try{Ae?b.setAttributeNS(Ae,de,ve):b.setAttribute(de,ve),Hs(b)?ze(b):tr(t.removed)}catch{$t(de,b)}}Ze(I.afterSanitizeAttributes,b,null)},Kc=function U(b){let L=null;const O=Wa(b);for(Ze(I.beforeSanitizeShadowDOM,b,null);L=O.nextNode();)Ze(I.uponSanitizeShadowNode,L,null),Ga(L),Ya(L),L.content instanceof a&&U(L.content);Ze(I.afterSanitizeShadowDOM,b,null)};return t.sanitize=function(U){let b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},L=null,O=null,ae=null,be=null;if(Bs=!U,Bs&&(U="<!-->"),typeof U!="string"&&!qa(U))if(typeof U.toString=="function"){if(U=U.toString(),typeof U!="string")throw fn("dirty is not a string, aborting")}else throw fn("toString is not a function");if(!t.isSupported)return U;if(Be||zs(b),t.removed=[],typeof U=="string"&&(rt=!1),rt){if(U.nodeName){const Je=ue(U.nodeName);if(!D[Je]||se[Je])throw fn("root node is forbidden and cannot be sanitized in-place")}}else if(U instanceof r)L=Ka("<!---->"),O=L.ownerDocument.importNode(U,!0),O.nodeType===mn.element&&O.nodeName==="BODY"||O.nodeName==="HTML"?L=O:L.appendChild(O);else{if(!Ve&&!qe&&!me&&U.indexOf("<")===-1)return A&&at?A.createHTML(U):U;if(L=Ka(U),!L)return Ve?null:at?E:""}L&&Ge&&ze(L.firstChild);const de=Wa(rt?U:L);for(;ae=de.nextNode();)Ga(ae),Ya(ae),ae.content instanceof a&&Kc(ae.content);if(rt)return U;if(Ve){if(Qe)for(be=H.call(L.ownerDocument);L.firstChild;)be.appendChild(L.firstChild);else be=L;return(K.shadowroot||K.shadowrootmode)&&(be=te.call(s,be,!0)),be}let Ae=me?L.outerHTML:L.innerHTML;return me&&D["!doctype"]&&L.ownerDocument&&L.ownerDocument.doctype&&L.ownerDocument.doctype.name&&xe(gc,L.ownerDocument.doctype.name)&&(Ae="<!DOCTYPE "+L.ownerDocument.doctype.name+`>
`+Ae),qe&&Zn([q,ne,oe],Je=>{Ae=pn(Ae,Je," ")}),A&&at?A.createHTML(Ae):Ae},t.setConfig=function(){let U=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};zs(U),Be=!0},t.clearConfig=function(){Gt=null,Be=!1},t.isValidAttribute=function(U,b,L){Gt||zs({});const O=ue(U),ae=ue(b);return Va(O,ae,L)},t.addHook=function(U,b){typeof b=="function"&&gn(I[U],b)},t.removeHook=function(U,b){if(b!==void 0){const L=Mm(I[U],b);return L===-1?void 0:Rm(I[U],L,1)[0]}return tr(I[U])},t.removeHooks=function(U){I[U]=[]},t.removeAllHooks=function(){I=rr()},t}var Bi=pc();function Ta(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var jt=Ta();function fc(e){jt=e}var Rt={exec:()=>null};function V(e,t=""){let n=typeof e=="string"?e:e.source,s={replace:(i,a)=>{let o=typeof a=="string"?a:a.source;return o=o.replace($e.caret,"$1"),n=n.replace(i,o),s},getRegex:()=>new RegExp(n,t)};return s}var Qm=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),$e={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,"i"),blockquoteBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}>`)},Ym=/^(?:[ \t]*(?:\n|$))+/,Zm=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Jm=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,On=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Xm=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,_a=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,hc=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,mc=V(hc).replace(/bull/g,_a).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),ev=V(hc).replace(/bull/g,_a).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Ea=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,tv=/^[^\n]+/,La=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,nv=V(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",La).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),sv=V(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,_a).getRegex(),Ps="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Ma=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,iv=V("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Ma).replace("tag",Ps).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),vc=V(Ea).replace("hr",On).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ps).getRegex(),av=V(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",vc).getRegex(),Ra={blockquote:av,code:Zm,def:nv,fences:Jm,heading:Xm,hr:On,html:iv,lheading:mc,list:sv,newline:Ym,paragraph:vc,table:Rt,text:tv},lr=V("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",On).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ps).getRegex(),ov={...Ra,lheading:ev,table:lr,paragraph:V(Ea).replace("hr",On).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",lr).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ps).getRegex()},rv={...Ra,html:V(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Ma).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Rt,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:V(Ea).replace("hr",On).replace("heading",` *#{1,6} *[^
]`).replace("lheading",mc).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},lv=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,cv=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,bc=/^( {2,}|\\)\n(?!\s*$)/,dv=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Ds=/[\p{P}\p{S}]/u,Ia=/[\s\p{P}\p{S}]/u,yc=/[^\s\p{P}\p{S}]/u,uv=V(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Ia).getRegex(),xc=/(?!~)[\p{P}\p{S}]/u,gv=/(?!~)[\s\p{P}\p{S}]/u,pv=/(?:[^\s\p{P}\p{S}]|~)/u,$c=/(?![*_])[\p{P}\p{S}]/u,fv=/(?![*_])[\s\p{P}\p{S}]/u,hv=/(?:[^\s\p{P}\p{S}]|[*_])/u,mv=V(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",Qm?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),wc=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,vv=V(wc,"u").replace(/punct/g,Ds).getRegex(),bv=V(wc,"u").replace(/punct/g,xc).getRegex(),kc="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",yv=V(kc,"gu").replace(/notPunctSpace/g,yc).replace(/punctSpace/g,Ia).replace(/punct/g,Ds).getRegex(),xv=V(kc,"gu").replace(/notPunctSpace/g,pv).replace(/punctSpace/g,gv).replace(/punct/g,xc).getRegex(),$v=V("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,yc).replace(/punctSpace/g,Ia).replace(/punct/g,Ds).getRegex(),wv=V(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,$c).getRegex(),kv="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",Sv=V(kv,"gu").replace(/notPunctSpace/g,hv).replace(/punctSpace/g,fv).replace(/punct/g,$c).getRegex(),Av=V(/\\(punct)/,"gu").replace(/punct/g,Ds).getRegex(),Cv=V(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Tv=V(Ma).replace("(?:-->|$)","-->").getRegex(),_v=V("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Tv).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),vs=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,Ev=V(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",vs).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Sc=V(/^!?\[(label)\]\[(ref)\]/).replace("label",vs).replace("ref",La).getRegex(),Ac=V(/^!?\[(ref)\](?:\[\])?/).replace("ref",La).getRegex(),Lv=V("reflink|nolink(?!\\()","g").replace("reflink",Sc).replace("nolink",Ac).getRegex(),cr=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,Pa={_backpedal:Rt,anyPunctuation:Av,autolink:Cv,blockSkip:mv,br:bc,code:cv,del:Rt,delLDelim:Rt,delRDelim:Rt,emStrongLDelim:vv,emStrongRDelimAst:yv,emStrongRDelimUnd:$v,escape:lv,link:Ev,nolink:Ac,punctuation:uv,reflink:Sc,reflinkSearch:Lv,tag:_v,text:dv,url:Rt},Mv={...Pa,link:V(/^!?\[(label)\]\((.*?)\)/).replace("label",vs).getRegex(),reflink:V(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",vs).getRegex()},Ui={...Pa,emStrongRDelimAst:xv,emStrongLDelim:bv,delLDelim:wv,delRDelim:Sv,url:V(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",cr).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:V(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",cr).getRegex()},Rv={...Ui,br:V(bc).replace("{2,}","*").getRegex(),text:V(Ui.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Xn={normal:Ra,gfm:ov,pedantic:rv},vn={normal:Pa,gfm:Ui,breaks:Rv,pedantic:Mv},Iv={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},dr=e=>Iv[e];function Ke(e,t){if(t){if($e.escapeTest.test(e))return e.replace($e.escapeReplace,dr)}else if($e.escapeTestNoEncode.test(e))return e.replace($e.escapeReplaceNoEncode,dr);return e}function ur(e){try{e=encodeURI(e).replace($e.percentDecode,"%")}catch{return null}return e}function gr(e,t){let n=e.replace($e.findPipe,(a,o,r)=>{let l=!1,d=o;for(;--d>=0&&r[d]==="\\";)l=!l;return l?"|":" |"}),s=n.split($e.splitPipe),i=0;if(s[0].trim()||s.shift(),s.length>0&&!s.at(-1)?.trim()&&s.pop(),t)if(s.length>t)s.splice(t);else for(;s.length<t;)s.push("");for(;i<s.length;i++)s[i]=s[i].trim().replace($e.slashPipe,"|");return s}function bn(e,t,n){let s=e.length;if(s===0)return"";let i=0;for(;i<s&&e.charAt(s-i-1)===t;)i++;return e.slice(0,s-i)}function Pv(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let s=0;s<e.length;s++)if(e[s]==="\\")s++;else if(e[s]===t[0])n++;else if(e[s]===t[1]&&(n--,n<0))return s;return n>0?-2:-1}function Dv(e,t=0){let n=t,s="";for(let i of e)if(i==="	"){let a=4-n%4;s+=" ".repeat(a),n+=a}else s+=i,n++;return s}function pr(e,t,n,s,i){let a=t.href,o=t.title||null,r=e[1].replace(i.other.outputLinkReplace,"$1");s.state.inLink=!0;let l={type:e[0].charAt(0)==="!"?"image":"link",raw:n,href:a,title:o,text:r,tokens:s.inlineTokens(r)};return s.state.inLink=!1,l}function Fv(e,t,n){let s=e.match(n.other.indentCodeCompensation);if(s===null)return t;let i=s[1];return t.split(`
`).map(a=>{let o=a.match(n.other.beginningSpace);if(o===null)return a;let[r]=o;return r.length>=i.length?a.slice(i.length):a}).join(`
`)}var bs=class{options;rules;lexer;constructor(e){this.options=e||jt}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let n=t[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:bn(n,`
`)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let n=t[0],s=Fv(n,t[3]||"",this.rules);return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:s}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(this.rules.other.endingHash.test(n)){let s=bn(n,"#");(this.options.pedantic||!s||this.rules.other.endingSpaceChar.test(s))&&(n=s.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:bn(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let n=bn(t[0],`
`).split(`
`),s="",i="",a=[];for(;n.length>0;){let o=!1,r=[],l;for(l=0;l<n.length;l++)if(this.rules.other.blockquoteStart.test(n[l]))r.push(n[l]),o=!0;else if(!o)r.push(n[l]);else break;n=n.slice(l);let d=r.join(`
`),p=d.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");s=s?`${s}
${d}`:d,i=i?`${i}
${p}`:p;let g=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(p,a,!0),this.lexer.state.top=g,n.length===0)break;let h=a.at(-1);if(h?.type==="code")break;if(h?.type==="blockquote"){let u=h,f=u.raw+`
`+n.join(`
`),v=this.blockquote(f);a[a.length-1]=v,s=s.substring(0,s.length-u.raw.length)+v.raw,i=i.substring(0,i.length-u.text.length)+v.text;break}else if(h?.type==="list"){let u=h,f=u.raw+`
`+n.join(`
`),v=this.list(f);a[a.length-1]=v,s=s.substring(0,s.length-h.raw.length)+v.raw,i=i.substring(0,i.length-u.raw.length)+v.raw,n=f.substring(a.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:s,tokens:a,text:i}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),s=n.length>1,i={type:"list",raw:"",ordered:s,start:s?+n.slice(0,-1):"",loose:!1,items:[]};n=s?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=s?n:"[*+-]");let a=this.rules.other.listItemRegex(n),o=!1;for(;e;){let l=!1,d="",p="";if(!(t=a.exec(e))||this.rules.block.hr.test(e))break;d=t[0],e=e.substring(d.length);let g=Dv(t[2].split(`
`,1)[0],t[1].length),h=e.split(`
`,1)[0],u=!g.trim(),f=0;if(this.options.pedantic?(f=2,p=g.trimStart()):u?f=t[1].length+1:(f=g.search(this.rules.other.nonSpaceChar),f=f>4?1:f,p=g.slice(f),f+=t[1].length),u&&this.rules.other.blankLine.test(h)&&(d+=h+`
`,e=e.substring(h.length+1),l=!0),!l){let v=this.rules.other.nextBulletRegex(f),w=this.rules.other.hrRegex(f),S=this.rules.other.fencesBeginRegex(f),C=this.rules.other.headingBeginRegex(f),k=this.rules.other.htmlBeginRegex(f),A=this.rules.other.blockquoteBeginRegex(f);for(;e;){let E=e.split(`
`,1)[0],T;if(h=E,this.options.pedantic?(h=h.replace(this.rules.other.listReplaceNesting,"  "),T=h):T=h.replace(this.rules.other.tabCharGlobal,"    "),S.test(h)||C.test(h)||k.test(h)||A.test(h)||v.test(h)||w.test(h))break;if(T.search(this.rules.other.nonSpaceChar)>=f||!h.trim())p+=`
`+T.slice(f);else{if(u||g.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||S.test(g)||C.test(g)||w.test(g))break;p+=`
`+h}u=!h.trim(),d+=E+`
`,e=e.substring(E.length+1),g=T.slice(f)}}i.loose||(o?i.loose=!0:this.rules.other.doubleBlankLine.test(d)&&(o=!0)),i.items.push({type:"list_item",raw:d,task:!!this.options.gfm&&this.rules.other.listIsTask.test(p),loose:!1,text:p,tokens:[]}),i.raw+=d}let r=i.items.at(-1);if(r)r.raw=r.raw.trimEnd(),r.text=r.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let l of i.items){if(this.lexer.state.top=!1,l.tokens=this.lexer.blockTokens(l.text,[]),l.task){if(l.text=l.text.replace(this.rules.other.listReplaceTask,""),l.tokens[0]?.type==="text"||l.tokens[0]?.type==="paragraph"){l.tokens[0].raw=l.tokens[0].raw.replace(this.rules.other.listReplaceTask,""),l.tokens[0].text=l.tokens[0].text.replace(this.rules.other.listReplaceTask,"");for(let p=this.lexer.inlineQueue.length-1;p>=0;p--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[p].src)){this.lexer.inlineQueue[p].src=this.lexer.inlineQueue[p].src.replace(this.rules.other.listReplaceTask,"");break}}let d=this.rules.other.listTaskCheckbox.exec(l.raw);if(d){let p={type:"checkbox",raw:d[0]+" ",checked:d[0]!=="[ ]"};l.checked=p.checked,i.loose?l.tokens[0]&&["paragraph","text"].includes(l.tokens[0].type)&&"tokens"in l.tokens[0]&&l.tokens[0].tokens?(l.tokens[0].raw=p.raw+l.tokens[0].raw,l.tokens[0].text=p.raw+l.tokens[0].text,l.tokens[0].tokens.unshift(p)):l.tokens.unshift({type:"paragraph",raw:p.raw,text:p.raw,tokens:[p]}):l.tokens.unshift(p)}}if(!i.loose){let d=l.tokens.filter(g=>g.type==="space"),p=d.length>0&&d.some(g=>this.rules.other.anyLine.test(g.raw));i.loose=p}}if(i.loose)for(let l of i.items){l.loose=!0;for(let d of l.tokens)d.type==="text"&&(d.type="paragraph")}return i}}html(e){let t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){let t=this.rules.block.def.exec(e);if(t){let n=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),s=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",i=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:n,raw:t[0],href:s,title:i}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=gr(t[1]),s=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),i=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],a={type:"table",raw:t[0],header:[],align:[],rows:[]};if(n.length===s.length){for(let o of s)this.rules.other.tableAlignRight.test(o)?a.align.push("right"):this.rules.other.tableAlignCenter.test(o)?a.align.push("center"):this.rules.other.tableAlignLeft.test(o)?a.align.push("left"):a.align.push(null);for(let o=0;o<n.length;o++)a.header.push({text:n[o],tokens:this.lexer.inline(n[o]),header:!0,align:a.align[o]});for(let o of i)a.rows.push(gr(o,a.header.length).map((r,l)=>({text:r,tokens:this.lexer.inline(r),header:!1,align:a.align[l]})));return a}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let n=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(n)){if(!this.rules.other.endAngleBracket.test(n))return;let a=bn(n.slice(0,-1),"\\");if((n.length-a.length)%2===0)return}else{let a=Pv(t[2],"()");if(a===-2)return;if(a>-1){let o=(t[0].indexOf("!")===0?5:4)+t[1].length+a;t[2]=t[2].substring(0,a),t[0]=t[0].substring(0,o).trim(),t[3]=""}}let s=t[2],i="";if(this.options.pedantic){let a=this.rules.other.pedanticHrefTitle.exec(s);a&&(s=a[1],i=a[3])}else i=t[3]?t[3].slice(1,-1):"";return s=s.trim(),this.rules.other.startAngleBracket.test(s)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(n)?s=s.slice(1):s=s.slice(1,-1)),pr(t,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:i&&i.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let s=(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," "),i=t[s.toLowerCase()];if(!i){let a=n[0].charAt(0);return{type:"text",raw:a,text:a}}return pr(n,i,n[0],this.lexer,this.rules)}}emStrong(e,t,n=""){let s=this.rules.inline.emStrongLDelim.exec(e);if(!(!s||s[3]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(s[1]||s[2])||!n||this.rules.inline.punctuation.exec(n))){let i=[...s[0]].length-1,a,o,r=i,l=0,d=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(d.lastIndex=0,t=t.slice(-1*e.length+i);(s=d.exec(t))!=null;){if(a=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!a)continue;if(o=[...a].length,s[3]||s[4]){r+=o;continue}else if((s[5]||s[6])&&i%3&&!((i+o)%3)){l+=o;continue}if(r-=o,r>0)continue;o=Math.min(o,o+r+l);let p=[...s[0]][0].length,g=e.slice(0,i+s.index+p+o);if(Math.min(i,o)%2){let u=g.slice(1,-1);return{type:"em",raw:g,text:u,tokens:this.lexer.inlineTokens(u)}}let h=g.slice(2,-2);return{type:"strong",raw:g,text:h,tokens:this.lexer.inlineTokens(h)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(this.rules.other.newLineCharGlobal," "),s=this.rules.other.nonSpaceChar.test(n),i=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return s&&i&&(n=n.substring(1,n.length-1)),{type:"codespan",raw:t[0],text:n}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e,t,n=""){let s=this.rules.inline.delLDelim.exec(e);if(s&&(!s[1]||!n||this.rules.inline.punctuation.exec(n))){let i=[...s[0]].length-1,a,o,r=i,l=this.rules.inline.delRDelim;for(l.lastIndex=0,t=t.slice(-1*e.length+i);(s=l.exec(t))!=null;){if(a=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!a||(o=[...a].length,o!==i))continue;if(s[3]||s[4]){r+=o;continue}if(r-=o,r>0)continue;o=Math.min(o,o+r);let d=[...s[0]][0].length,p=e.slice(0,i+s.index+d+o),g=p.slice(i,-i);return{type:"del",raw:p,text:g,tokens:this.lexer.inlineTokens(g)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let n,s;return t[2]==="@"?(n=t[1],s="mailto:"+n):(n=t[1],s=n),{type:"link",raw:t[0],text:n,href:s,tokens:[{type:"text",raw:n,text:n}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let n,s;if(t[2]==="@")n=t[0],s="mailto:"+n;else{let i;do i=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??"";while(i!==t[0]);n=t[0],t[1]==="www."?s="http://"+t[0]:s=t[0]}return{type:"link",raw:t[0],text:n,href:s,tokens:[{type:"text",raw:n,text:n}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let n=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:n}}}},Fe=class zi{tokens;options;state;inlineQueue;tokenizer;constructor(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||jt,this.options.tokenizer=this.options.tokenizer||new bs,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let n={other:$e,block:Xn.normal,inline:vn.normal};this.options.pedantic?(n.block=Xn.pedantic,n.inline=vn.pedantic):this.options.gfm&&(n.block=Xn.gfm,this.options.breaks?n.inline=vn.breaks:n.inline=vn.gfm),this.tokenizer.rules=n}static get rules(){return{block:Xn,inline:vn}}static lex(t,n){return new zi(n).lex(t)}static lexInline(t,n){return new zi(n).inlineTokens(t)}lex(t){t=t.replace($e.carriageReturn,`
`),this.blockTokens(t,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){let s=this.inlineQueue[n];this.inlineTokens(s.src,s.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(t,n=[],s=!1){for(this.options.pedantic&&(t=t.replace($e.tabCharGlobal,"    ").replace($e.spaceLine,""));t;){let i;if(this.options.extensions?.block?.some(o=>(i=o.call({lexer:this},t,n))?(t=t.substring(i.raw.length),n.push(i),!0):!1))continue;if(i=this.tokenizer.space(t)){t=t.substring(i.raw.length);let o=n.at(-1);i.raw.length===1&&o!==void 0?o.raw+=`
`:n.push(i);continue}if(i=this.tokenizer.code(t)){t=t.substring(i.raw.length);let o=n.at(-1);o?.type==="paragraph"||o?.type==="text"?(o.raw+=(o.raw.endsWith(`
`)?"":`
`)+i.raw,o.text+=`
`+i.text,this.inlineQueue.at(-1).src=o.text):n.push(i);continue}if(i=this.tokenizer.fences(t)){t=t.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.heading(t)){t=t.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.hr(t)){t=t.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.blockquote(t)){t=t.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.list(t)){t=t.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.html(t)){t=t.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.def(t)){t=t.substring(i.raw.length);let o=n.at(-1);o?.type==="paragraph"||o?.type==="text"?(o.raw+=(o.raw.endsWith(`
`)?"":`
`)+i.raw,o.text+=`
`+i.raw,this.inlineQueue.at(-1).src=o.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title},n.push(i));continue}if(i=this.tokenizer.table(t)){t=t.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.lheading(t)){t=t.substring(i.raw.length),n.push(i);continue}let a=t;if(this.options.extensions?.startBlock){let o=1/0,r=t.slice(1),l;this.options.extensions.startBlock.forEach(d=>{l=d.call({lexer:this},r),typeof l=="number"&&l>=0&&(o=Math.min(o,l))}),o<1/0&&o>=0&&(a=t.substring(0,o+1))}if(this.state.top&&(i=this.tokenizer.paragraph(a))){let o=n.at(-1);s&&o?.type==="paragraph"?(o.raw+=(o.raw.endsWith(`
`)?"":`
`)+i.raw,o.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=o.text):n.push(i),s=a.length!==t.length,t=t.substring(i.raw.length);continue}if(i=this.tokenizer.text(t)){t=t.substring(i.raw.length);let o=n.at(-1);o?.type==="text"?(o.raw+=(o.raw.endsWith(`
`)?"":`
`)+i.raw,o.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=o.text):n.push(i);continue}if(t){let o="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(o);break}else throw new Error(o)}}return this.state.top=!0,n}inline(t,n=[]){return this.inlineQueue.push({src:t,tokens:n}),n}inlineTokens(t,n=[]){let s=t,i=null;if(this.tokens.links){let l=Object.keys(this.tokens.links);if(l.length>0)for(;(i=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null;)l.includes(i[0].slice(i[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,i.index)+"["+"a".repeat(i[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(i=this.tokenizer.rules.inline.anyPunctuation.exec(s))!=null;)s=s.slice(0,i.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let a;for(;(i=this.tokenizer.rules.inline.blockSkip.exec(s))!=null;)a=i[2]?i[2].length:0,s=s.slice(0,i.index+a)+"["+"a".repeat(i[0].length-a-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);s=this.options.hooks?.emStrongMask?.call({lexer:this},s)??s;let o=!1,r="";for(;t;){o||(r=""),o=!1;let l;if(this.options.extensions?.inline?.some(p=>(l=p.call({lexer:this},t,n))?(t=t.substring(l.raw.length),n.push(l),!0):!1))continue;if(l=this.tokenizer.escape(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.tag(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.link(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(l.raw.length);let p=n.at(-1);l.type==="text"&&p?.type==="text"?(p.raw+=l.raw,p.text+=l.text):n.push(l);continue}if(l=this.tokenizer.emStrong(t,s,r)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.codespan(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.br(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.del(t,s,r)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.autolink(t)){t=t.substring(l.raw.length),n.push(l);continue}if(!this.state.inLink&&(l=this.tokenizer.url(t))){t=t.substring(l.raw.length),n.push(l);continue}let d=t;if(this.options.extensions?.startInline){let p=1/0,g=t.slice(1),h;this.options.extensions.startInline.forEach(u=>{h=u.call({lexer:this},g),typeof h=="number"&&h>=0&&(p=Math.min(p,h))}),p<1/0&&p>=0&&(d=t.substring(0,p+1))}if(l=this.tokenizer.inlineText(d)){t=t.substring(l.raw.length),l.raw.slice(-1)!=="_"&&(r=l.raw.slice(-1)),o=!0;let p=n.at(-1);p?.type==="text"?(p.raw+=l.raw,p.text+=l.text):n.push(l);continue}if(t){let p="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(p);break}else throw new Error(p)}}return n}},ys=class{options;parser;constructor(e){this.options=e||jt}space(e){return""}code({text:e,lang:t,escaped:n}){let s=(t||"").match($e.notSpaceStart)?.[0],i=e.replace($e.endingNewline,"")+`
`;return s?'<pre><code class="language-'+Ke(s)+'">'+(n?i:Ke(i,!0))+`</code></pre>
`:"<pre><code>"+(n?i:Ke(i,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return""}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,n=e.start,s="";for(let o=0;o<e.items.length;o++){let r=e.items[o];s+=this.listitem(r)}let i=t?"ol":"ul",a=t&&n!==1?' start="'+n+'"':"";return"<"+i+a+`>
`+s+"</"+i+`>
`}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t="",n="";for(let i=0;i<e.header.length;i++)n+=this.tablecell(e.header[i]);t+=this.tablerow({text:n});let s="";for(let i=0;i<e.rows.length;i++){let a=e.rows[i];n="";for(let o=0;o<a.length;o++)n+=this.tablecell(a[o]);s+=this.tablerow({text:n})}return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+s+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),n=e.header?"th":"td";return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${Ke(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){let s=this.parser.parseInline(n),i=ur(e);if(i===null)return s;e=i;let a='<a href="'+e+'"';return t&&(a+=' title="'+Ke(t)+'"'),a+=">"+s+"</a>",a}image({href:e,title:t,text:n,tokens:s}){s&&(n=this.parser.parseInline(s,this.parser.textRenderer));let i=ur(e);if(i===null)return Ke(n);e=i;let a=`<img src="${e}" alt="${Ke(n)}"`;return t&&(a+=` title="${Ke(t)}"`),a+=">",a}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:Ke(e.text)}},Da=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}checkbox({raw:e}){return e}},Ne=class Hi{options;renderer;textRenderer;constructor(t){this.options=t||jt,this.options.renderer=this.options.renderer||new ys,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Da}static parse(t,n){return new Hi(n).parse(t)}static parseInline(t,n){return new Hi(n).parseInline(t)}parse(t){let n="";for(let s=0;s<t.length;s++){let i=t[s];if(this.options.extensions?.renderers?.[i.type]){let o=i,r=this.options.extensions.renderers[o.type].call({parser:this},o);if(r!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(o.type)){n+=r||"";continue}}let a=i;switch(a.type){case"space":{n+=this.renderer.space(a);break}case"hr":{n+=this.renderer.hr(a);break}case"heading":{n+=this.renderer.heading(a);break}case"code":{n+=this.renderer.code(a);break}case"table":{n+=this.renderer.table(a);break}case"blockquote":{n+=this.renderer.blockquote(a);break}case"list":{n+=this.renderer.list(a);break}case"checkbox":{n+=this.renderer.checkbox(a);break}case"html":{n+=this.renderer.html(a);break}case"def":{n+=this.renderer.def(a);break}case"paragraph":{n+=this.renderer.paragraph(a);break}case"text":{n+=this.renderer.text(a);break}default:{let o='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return n}parseInline(t,n=this.renderer){let s="";for(let i=0;i<t.length;i++){let a=t[i];if(this.options.extensions?.renderers?.[a.type]){let r=this.options.extensions.renderers[a.type].call({parser:this},a);if(r!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(a.type)){s+=r||"";continue}}let o=a;switch(o.type){case"escape":{s+=n.text(o);break}case"html":{s+=n.html(o);break}case"link":{s+=n.link(o);break}case"image":{s+=n.image(o);break}case"checkbox":{s+=n.checkbox(o);break}case"strong":{s+=n.strong(o);break}case"em":{s+=n.em(o);break}case"codespan":{s+=n.codespan(o);break}case"br":{s+=n.br(o);break}case"del":{s+=n.del(o);break}case"text":{s+=n.text(o);break}default:{let r='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(r),"";throw new Error(r)}}}return s}},xn=class{options;block;constructor(e){this.options=e||jt}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(){return this.block?Fe.lex:Fe.lexInline}provideParser(){return this.block?Ne.parse:Ne.parseInline}},Nv=class{defaults=Ta();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=Ne;Renderer=ys;TextRenderer=Da;Lexer=Fe;Tokenizer=bs;Hooks=xn;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let s of e)switch(n=n.concat(t.call(this,s)),s.type){case"table":{let i=s;for(let a of i.header)n=n.concat(this.walkTokens(a.tokens,t));for(let a of i.rows)for(let o of a)n=n.concat(this.walkTokens(o.tokens,t));break}case"list":{let i=s;n=n.concat(this.walkTokens(i.items,t));break}default:{let i=s;this.defaults.extensions?.childTokens?.[i.type]?this.defaults.extensions.childTokens[i.type].forEach(a=>{let o=i[a].flat(1/0);n=n.concat(this.walkTokens(o,t))}):i.tokens&&(n=n.concat(this.walkTokens(i.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(n=>{let s={...n};if(s.async=this.defaults.async||s.async||!1,n.extensions&&(n.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if("renderer"in i){let a=t.renderers[i.name];a?t.renderers[i.name]=function(...o){let r=i.renderer.apply(this,o);return r===!1&&(r=a.apply(this,o)),r}:t.renderers[i.name]=i.renderer}if("tokenizer"in i){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let a=t[i.level];a?a.unshift(i.tokenizer):t[i.level]=[i.tokenizer],i.start&&(i.level==="block"?t.startBlock?t.startBlock.push(i.start):t.startBlock=[i.start]:i.level==="inline"&&(t.startInline?t.startInline.push(i.start):t.startInline=[i.start]))}"childTokens"in i&&i.childTokens&&(t.childTokens[i.name]=i.childTokens)}),s.extensions=t),n.renderer){let i=this.defaults.renderer||new ys(this.defaults);for(let a in n.renderer){if(!(a in i))throw new Error(`renderer '${a}' does not exist`);if(["options","parser"].includes(a))continue;let o=a,r=n.renderer[o],l=i[o];i[o]=(...d)=>{let p=r.apply(i,d);return p===!1&&(p=l.apply(i,d)),p||""}}s.renderer=i}if(n.tokenizer){let i=this.defaults.tokenizer||new bs(this.defaults);for(let a in n.tokenizer){if(!(a in i))throw new Error(`tokenizer '${a}' does not exist`);if(["options","rules","lexer"].includes(a))continue;let o=a,r=n.tokenizer[o],l=i[o];i[o]=(...d)=>{let p=r.apply(i,d);return p===!1&&(p=l.apply(i,d)),p}}s.tokenizer=i}if(n.hooks){let i=this.defaults.hooks||new xn;for(let a in n.hooks){if(!(a in i))throw new Error(`hook '${a}' does not exist`);if(["options","block"].includes(a))continue;let o=a,r=n.hooks[o],l=i[o];xn.passThroughHooks.has(a)?i[o]=d=>{if(this.defaults.async&&xn.passThroughHooksRespectAsync.has(a))return(async()=>{let g=await r.call(i,d);return l.call(i,g)})();let p=r.call(i,d);return l.call(i,p)}:i[o]=(...d)=>{if(this.defaults.async)return(async()=>{let g=await r.apply(i,d);return g===!1&&(g=await l.apply(i,d)),g})();let p=r.apply(i,d);return p===!1&&(p=l.apply(i,d)),p}}s.hooks=i}if(n.walkTokens){let i=this.defaults.walkTokens,a=n.walkTokens;s.walkTokens=function(o){let r=[];return r.push(a.call(this,o)),i&&(r=r.concat(i.call(this,o))),r}}this.defaults={...this.defaults,...s}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return Fe.lex(e,t??this.defaults)}parser(e,t){return Ne.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let s={...n},i={...this.defaults,...s},a=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&s.async===!1)return a(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof t>"u"||t===null)return a(new Error("marked(): input parameter is undefined or null"));if(typeof t!="string")return a(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));if(i.hooks&&(i.hooks.options=i,i.hooks.block=e),i.async)return(async()=>{let o=i.hooks?await i.hooks.preprocess(t):t,r=await(i.hooks?await i.hooks.provideLexer():e?Fe.lex:Fe.lexInline)(o,i),l=i.hooks?await i.hooks.processAllTokens(r):r;i.walkTokens&&await Promise.all(this.walkTokens(l,i.walkTokens));let d=await(i.hooks?await i.hooks.provideParser():e?Ne.parse:Ne.parseInline)(l,i);return i.hooks?await i.hooks.postprocess(d):d})().catch(a);try{i.hooks&&(t=i.hooks.preprocess(t));let o=(i.hooks?i.hooks.provideLexer():e?Fe.lex:Fe.lexInline)(t,i);i.hooks&&(o=i.hooks.processAllTokens(o)),i.walkTokens&&this.walkTokens(o,i.walkTokens);let r=(i.hooks?i.hooks.provideParser():e?Ne.parse:Ne.parseInline)(o,i);return i.hooks&&(r=i.hooks.postprocess(r)),r}catch(o){return a(o)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let s="<p>An error occurred:</p><pre>"+Ke(n.message+"",!0)+"</pre>";return t?Promise.resolve(s):s}if(t)return Promise.reject(n);throw n}}},zt=new Nv;function Y(e,t){return zt.parse(e,t)}Y.options=Y.setOptions=function(e){return zt.setOptions(e),Y.defaults=zt.defaults,fc(Y.defaults),Y};Y.getDefaults=Ta;Y.defaults=jt;Y.use=function(...e){return zt.use(...e),Y.defaults=zt.defaults,fc(Y.defaults),Y};Y.walkTokens=function(e,t){return zt.walkTokens(e,t)};Y.parseInline=zt.parseInline;Y.Parser=Ne;Y.parser=Ne.parse;Y.Renderer=ys;Y.TextRenderer=Da;Y.Lexer=Fe;Y.lexer=Fe.lex;Y.Tokenizer=bs;Y.Hooks=xn;Y.parse=Y;Y.options;Y.setOptions;Y.use;Y.walkTokens;Y.parseInline;Ne.parse;Fe.lex;Y.setOptions({gfm:!0,breaks:!0});const Ov=["a","b","blockquote","br","code","del","em","h1","h2","h3","h4","hr","i","li","ol","p","pre","strong","table","tbody","td","th","thead","tr","ul","img"],Bv=["class","href","rel","target","title","start","src","alt"],fr={ALLOWED_TAGS:Ov,ALLOWED_ATTR:Bv,ADD_DATA_URI_TAGS:["img"]};let hr=!1;const Uv=14e4,zv=4e4,Hv=200,fi=5e4,Pt=new Map;function jv(e){const t=Pt.get(e);return t===void 0?null:(Pt.delete(e),Pt.set(e,t),t)}function mr(e,t){if(Pt.set(e,t),Pt.size<=Hv)return;const n=Pt.keys().next().value;n&&Pt.delete(n)}function Kv(){hr||(hr=!0,Bi.addHook("afterSanitizeAttributes",e=>{!(e instanceof HTMLAnchorElement)||!e.getAttribute("href")||(e.setAttribute("rel","noreferrer noopener"),e.setAttribute("target","_blank"))}))}function ji(e){const t=e.trim();if(!t)return"";if(Kv(),t.length<=fi){const o=jv(t);if(o!==null)return o}const n=Xr(t,Uv),s=n.truncated?`

… truncated (${n.total} chars, showing first ${n.text.length}).`:"";if(n.text.length>zv){const r=`<pre class="code-block">${Tc(`${n.text}${s}`)}</pre>`,l=Bi.sanitize(r,fr);return t.length<=fi&&mr(t,l),l}const i=Y.parse(`${n.text}${s}`,{renderer:Cc}),a=Bi.sanitize(i,fr);return t.length<=fi&&mr(t,a),a}const Cc=new Y.Renderer;Cc.html=({text:e})=>Tc(e);function Tc(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}const Wv=new RegExp("\\p{Script=Hebrew}|\\p{Script=Arabic}|\\p{Script=Syriac}|\\p{Script=Thaana}|\\p{Script=Nko}|\\p{Script=Samaritan}|\\p{Script=Mandaic}|\\p{Script=Adlam}|\\p{Script=Phoenician}|\\p{Script=Lydian}","u");function _c(e,t=/[\s\p{P}\p{S}]/u){if(!e)return"ltr";for(const n of e)if(!t.test(n))return Wv.test(n)?"rtl":"ltr";return"ltr"}const qv=1500,Gv=2e3,Ec="Copy as markdown",Vv="Copied",Qv="Copy failed";async function Yv(e){if(!e)return!1;try{return await navigator.clipboard.writeText(e),!0}catch{return!1}}function es(e,t){e.title=t,e.setAttribute("aria-label",t)}function Zv(e){const t=e.label??Ec;return c`
    <button
      class="chat-copy-btn"
      type="button"
      title=${t}
      aria-label=${t}
      @click=${async n=>{const s=n.currentTarget;if(!s||s.dataset.copying==="1")return;s.dataset.copying="1",s.setAttribute("aria-busy","true"),s.disabled=!0;const i=await Yv(e.text());if(s.isConnected){if(delete s.dataset.copying,s.removeAttribute("aria-busy"),s.disabled=!1,!i){s.dataset.error="1",es(s,Qv),window.setTimeout(()=>{s.isConnected&&(delete s.dataset.error,es(s,t))},Gv);return}s.dataset.copied="1",es(s,Vv),window.setTimeout(()=>{s.isConnected&&(delete s.dataset.copied,es(s,t))},qv)}}}
    >
      <span class="chat-copy-btn__icon" aria-hidden="true">
        <span class="chat-copy-btn__icon-copy">${ge.copy}</span>
        <span class="chat-copy-btn__icon-check">${ge.check}</span>
      </span>
    </button>
  `}function Jv(e){return Zv({text:()=>e,label:Ec})}function Lc(e){const t=e;let n=typeof t.role=="string"?t.role:"unknown";const s=typeof t.toolCallId=="string"||typeof t.tool_call_id=="string",i=t.content,a=Array.isArray(i)?i:null,o=Array.isArray(a)&&a.some(g=>{const h=g,u=(typeof h.type=="string"?h.type:"").toLowerCase();return u==="toolresult"||u==="tool_result"}),r=typeof t.toolName=="string"||typeof t.tool_name=="string";(s||o||r)&&(n="toolResult");let l=[];typeof t.content=="string"?l=[{type:"text",text:t.content}]:Array.isArray(t.content)?l=t.content.map(g=>({type:g.type||"text",text:g.text,name:g.name,args:g.args||g.arguments})):typeof t.text=="string"&&(l=[{type:"text",text:t.text}]);const d=typeof t.timestamp=="number"?t.timestamp:Date.now(),p=typeof t.id=="string"?t.id:void 0;return(n==="user"||n==="User")&&(l=l.map(g=>g.type==="text"&&typeof g.text=="string"?{...g,text:as(g.text)}:g)),{role:n,content:l,timestamp:d,id:p}}function Fa(e){const t=e.toLowerCase();return e==="user"||e==="User"?e:e==="assistant"?"assistant":e==="system"?"system":t==="toolresult"||t==="tool_result"||t==="tool"||t==="function"?"tool":e}function Mc(e){const t=e,n=typeof t.role=="string"?t.role.toLowerCase():"";return n==="toolresult"||n==="tool_result"}function on(e){return e&&typeof e=="object"?e:void 0}function Xv(e){return(e??"tool").trim()}function eb(e){const t=e.replace(/_/g," ").trim();return t?t.split(/\s+/).map(n=>n.length<=2&&n.toUpperCase()===n?n:`${n.at(0)?.toUpperCase()??""}${n.slice(1)}`).join(" "):"Tool"}function tb(e){const t=e?.trim();if(t)return t.replace(/_/g," ")}function Rc(e,t={}){const n=t.maxStringChars??160,s=t.maxArrayEntries??3;if(e!=null){if(typeof e=="string"){const i=e.trim();if(!i)return;const a=i.split(/\r?\n/)[0]?.trim()??"";return a?a.length>n?`${a.slice(0,Math.max(0,n-3))}…`:a:void 0}if(typeof e=="boolean")return!e&&!t.includeFalse?void 0:e?"true":"false";if(typeof e=="number")return Number.isFinite(e)?e===0&&!t.includeZero?void 0:String(e):t.includeNonFinite?String(e):void 0;if(Array.isArray(e)){const i=e.map(o=>Rc(o,t)).filter(o=>!!o);if(i.length===0)return;const a=i.slice(0,s).join(", ");return i.length>s?`${a}…`:a}}}function nb(e,t){if(!e||typeof e!="object")return;let n=e;for(const s of t.split(".")){if(!s||!n||typeof n!="object")return;n=n[s]}return n}function Ic(e){const t=on(e);if(t)for(const n of[t.path,t.file_path,t.filePath]){if(typeof n!="string")continue;const s=n.trim();if(s)return s}}function sb(e){const t=on(e);if(!t)return;const n=Ic(t);if(!n)return;const s=typeof t.offset=="number"&&Number.isFinite(t.offset)?Math.floor(t.offset):void 0,i=typeof t.limit=="number"&&Number.isFinite(t.limit)?Math.floor(t.limit):void 0,a=s!==void 0?Math.max(1,s):void 0,o=i!==void 0?Math.max(1,i):void 0;return a!==void 0&&o!==void 0?`${o===1?"line":"lines"} ${a}-${a+o-1} from ${n}`:a!==void 0?`from line ${a} in ${n}`:o!==void 0?`first ${o} ${o===1?"line":"lines"} of ${n}`:`from ${n}`}function ib(e,t){const n=on(t);if(!n)return;const s=Ic(n)??(typeof n.url=="string"?n.url.trim():void 0);if(!s)return;if(e==="attach")return`from ${s}`;const i=e==="edit"?"in":"to",a=typeof n.content=="string"?n.content:typeof n.newText=="string"?n.newText:typeof n.new_string=="string"?n.new_string:void 0;return a&&a.length>0?`${i} ${s} (${a.length} chars)`:`${i} ${s}`}function ab(e){const t=on(e);if(!t)return;const n=typeof t.query=="string"?t.query.trim():void 0,s=typeof t.count=="number"&&Number.isFinite(t.count)&&t.count>0?Math.floor(t.count):void 0;if(n)return s!==void 0?`for "${n}" (top ${s})`:`for "${n}"`}function ob(e){const t=on(e);if(!t)return;const n=typeof t.url=="string"?t.url.trim():void 0;if(!n)return;const s=typeof t.extractMode=="string"?t.extractMode.trim():void 0,i=typeof t.maxChars=="number"&&Number.isFinite(t.maxChars)&&t.maxChars>0?Math.floor(t.maxChars):void 0,a=[s?`mode ${s}`:void 0,i!==void 0?`max ${i} chars`:void 0].filter(o=>!!o).join(", ");return a?`from ${n} (${a})`:`from ${n}`}function Na(e){if(!e)return e;const t=e.trim();return t.length>=2&&(t.startsWith('"')&&t.endsWith('"')||t.startsWith("'")&&t.endsWith("'"))?t.slice(1,-1).trim():t}function Dt(e,t=48){if(!e)return[];const n=[];let s="",i,a=!1;for(let o=0;o<e.length;o+=1){const r=e[o];if(a){s+=r,a=!1;continue}if(r==="\\"){a=!0;continue}if(i){r===i?i=void 0:s+=r;continue}if(r==='"'||r==="'"){i=r;continue}if(/\s/.test(r)){if(!s)continue;if(n.push(s),n.length>=t)return n;s="";continue}s+=r}return s&&n.push(s),n}function rn(e){if(!e)return;const t=Na(e)??e;return(t.split(/[/]/).at(-1)??t).trim().toLowerCase()}function Ct(e,t){const n=new Set(t);for(let s=0;s<e.length;s+=1){const i=e[s];if(i){if(n.has(i)){const a=e[s+1];if(a&&!a.startsWith("-"))return a;continue}for(const a of t)if(a.startsWith("--")&&i.startsWith(`${a}=`))return i.slice(a.length+1)}}}function Jt(e,t=1,n=[]){const s=[],i=new Set(n);for(let a=t;a<e.length;a+=1){const o=e[a];if(o){if(o==="--"){for(let r=a+1;r<e.length;r+=1){const l=e[r];l&&s.push(l)}break}if(o.startsWith("--")){if(o.includes("="))continue;i.has(o)&&(a+=1);continue}if(o.startsWith("-")){i.has(o)&&(a+=1);continue}s.push(o)}}return s}function tt(e,t=1,n=[]){return Jt(e,t,n)[0]}function hi(e){if(e.length===0)return e;let t=0;if(rn(e[0])==="env"){for(t=1;t<e.length;){const n=e[t];if(!n)break;if(n.startsWith("-")){t+=1;continue}if(/^[A-Za-z_][A-Za-z0-9_]*=/.test(n)){t+=1;continue}break}return e.slice(t)}for(;t<e.length&&/^[A-Za-z_][A-Za-z0-9_]*=/.test(e[t]);)t+=1;return e.slice(t)}function rb(e){const t=Dt(e,10);if(t.length<3)return e;const n=rn(t[0]);if(!(n==="bash"||n==="sh"||n==="zsh"||n==="fish"))return e;const s=t.findIndex((a,o)=>o>0&&(a==="-c"||a==="-lc"||a==="-ic"));if(s===-1)return e;const i=t.slice(s+1).join(" ").trim();return i?Na(i)??e:e}function Oa(e,t){let n,s=!1;for(let i=0;i<e.length;i+=1){const a=e[i];if(s){s=!1;continue}if(a==="\\"){s=!0;continue}if(n){a===n&&(n=void 0);continue}if(a==='"'||a==="'"){n=a;continue}if(t(a,i)===!1)return}}function lb(e){const t=[];let n=0;return Oa(e,(s,i)=>s===";"?(t.push(e.slice(n,i)),n=i+1,!0):((s==="&"||s==="|")&&e[i+1]===s&&(t.push(e.slice(n,i)),n=i+2),!0)),t.push(e.slice(n)),t.map(s=>s.trim()).filter(s=>s.length>0)}function cb(e){const t=[];let n=0;return Oa(e,(s,i)=>(s==="|"&&e[i-1]!=="|"&&e[i+1]!=="|"&&(t.push(e.slice(n,i)),n=i+1),!0)),t.push(e.slice(n)),t.map(s=>s.trim()).filter(s=>s.length>0)}function db(e){const t=Dt(e,3),n=rn(t[0]);if(n==="cd"||n==="pushd")return t[1]||void 0}function ub(e){const t=rn(Dt(e,2)[0]);return t==="cd"||t==="pushd"||t==="popd"}function gb(e){return rn(Dt(e,2)[0])==="popd"}function pb(e){let t=e.trim(),n;for(let s=0;s<4;s+=1){let i;Oa(t,(l,d)=>{if(l==="&"&&t[d+1]==="&")return i={index:d,length:2},!1;if(l==="|"&&t[d+1]==="|")return i={index:d,length:2,isOr:!0},!1;if(l===";"||l===`
`)return i={index:d,length:1},!1});const a=(i?t.slice(0,i.index):t).trim(),o=(i?!i.isOr:s>0)&&ub(a);if(!(a.startsWith("set ")||a.startsWith("export ")||a.startsWith("unset ")||o)||(o&&(gb(a)?n=void 0:n=db(a)??n),t=i?t.slice(i.index+i.length).trimStart():"",!t))break}return{command:t.trim(),chdirPath:n}}function mi(e){if(e.length===0)return"run command";const t=rn(e[0])??"command";if(t==="git"){const s=new Set(["-C","-c","--git-dir","--work-tree","--namespace","--config-env"]),i=Ct(e,["-C"]);let a;for(let r=1;r<e.length;r+=1){const l=e[r];if(l){if(l==="--"){a=tt(e,r+1);break}if(l.startsWith("--")){if(l.includes("="))continue;s.has(l)&&(r+=1);continue}if(l.startsWith("-")){s.has(l)&&(r+=1);continue}a=l;break}}const o={status:"check git status",diff:"check git diff",log:"view git history",show:"show git object",branch:"list git branches",checkout:"switch git branch",switch:"switch git branch",commit:"create git commit",pull:"pull git changes",push:"push git changes",fetch:"fetch git changes",merge:"merge git changes",rebase:"rebase git branch",add:"stage git changes",restore:"restore git files",reset:"reset git state",stash:"stash git changes"};return a&&o[a]?o[a]:!a||a.startsWith("/")||a.startsWith("~")||a.includes("/")?i?`run git command in ${i}`:"run git command":`run git ${a}`}if(t==="grep"||t==="rg"||t==="ripgrep"){const s=Jt(e,1,["-e","--regexp","-f","--file","-m","--max-count","-A","--after-context","-B","--before-context","-C","--context"]),i=Ct(e,["-e","--regexp"])??s[0],a=s.length>1?s.at(-1):void 0;return i?a?`search "${i}" in ${a}`:`search "${i}"`:"search text"}if(t==="find"){const s=e[1]&&!e[1].startsWith("-")?e[1]:".",i=Ct(e,["-name","-iname"]);return i?`find files named "${i}" in ${s}`:`find files in ${s}`}if(t==="ls"){const s=tt(e,1);return s?`list files in ${s}`:"list files"}if(t==="head"||t==="tail"){const s=Ct(e,["-n","--lines"])??e.slice(1).find(l=>/^-\d+$/.test(l))?.slice(1),i=Jt(e,1,["-n","--lines"]);let a=i.at(-1);a&&/^\d+$/.test(a)&&i.length===1&&(a=void 0);const o=t==="head"?"first":"last",r=s==="1"?"line":"lines";return s&&a?`show ${o} ${s} ${r} of ${a}`:s?`show ${o} ${s} ${r}`:a?`show ${a}`:`show ${t} output`}if(t==="cat"){const s=tt(e,1);return s?`show ${s}`:"show output"}if(t==="sed"){const s=Ct(e,["-e","--expression"]),i=Jt(e,1,["-e","--expression","-f","--file"]),a=s??i[0],o=s?i[0]:i[1];if(a){const r=(Na(a)??a).replace(/\s+/g,""),l=r.match(/^([0-9]+),([0-9]+)p$/);if(l)return o?`print lines ${l[1]}-${l[2]} from ${o}`:`print lines ${l[1]}-${l[2]}`;const d=r.match(/^([0-9]+)p$/);if(d)return o?`print line ${d[1]} from ${o}`:`print line ${d[1]}`}return o?`run sed on ${o}`:"run sed transform"}if(t==="printf"||t==="echo")return"print text";if(t==="cp"||t==="mv"){const s=Jt(e,1,["-t","--target-directory","-S","--suffix"]),i=s[0],a=s[1],o=t==="cp"?"copy":"move";return i&&a?`${o} ${i} to ${a}`:i?`${o} ${i}`:`${o} files`}if(t==="rm"){const s=tt(e,1);return s?`remove ${s}`:"remove files"}if(t==="mkdir"){const s=tt(e,1);return s?`create folder ${s}`:"create folder"}if(t==="touch"){const s=tt(e,1);return s?`create file ${s}`:"create file"}if(t==="curl"||t==="wget"){const s=e.find(i=>/^https?:\/\//i.test(i));return s?`fetch ${s}`:"fetch url"}if(t==="npm"||t==="pnpm"||t==="yarn"||t==="bun"){const s=Jt(e,1,["--prefix","-C","--cwd","--config"]),i=s[0]??"command";return{install:"install dependencies",test:"run tests",build:"run build",start:"start app",lint:"run lint",run:s[1]?`run ${s[1]}`:"run script"}[i]??`run ${t} ${i}`}if(t==="node"||t==="python"||t==="python3"||t==="ruby"||t==="php"){if(e.slice(1).find(l=>l.startsWith("<<")))return`run ${t} inline script (heredoc)`;if((t==="node"?Ct(e,["-e","--eval"]):t==="python"||t==="python3"?Ct(e,["-c"]):void 0)!==void 0)return`run ${t} inline script`;const r=tt(e,1,t==="node"?["-e","--eval","-m"]:["-c","-e","--eval","-m"]);return r?t==="node"?`${e.includes("--check")||e.includes("-c")?"check js syntax for":"run node script"} ${r}`:`run ${t} ${r}`:`run ${t}`}if(t==="openclaw"){const s=tt(e,1);return s?`run openclaw ${s}`:"run openclaw"}const n=tt(e,1);return!n||n.length>48?`run ${t}`:/^[A-Za-z0-9._/-]+$/.test(n)?`run ${t} ${n}`:`run ${t}`}function fb(e){const t=cb(e);if(t.length>1){const n=mi(hi(Dt(t[0]))),s=mi(hi(Dt(t[t.length-1]))),i=t.length>2?` (+${t.length-2} steps)`:"";return`${n} -> ${s}${i}`}return mi(hi(Dt(e)))}function vr(e){const{command:t,chdirPath:n}=pb(e);if(!t)return n?{text:"",chdirPath:n}:void 0;const s=lb(t);if(s.length===0)return;const i=s.map(r=>fb(r)),a=i.length===1?i[0]:i.join(" → "),o=i.every(r=>Pc(r));return{text:a,chdirPath:n,allGeneric:o}}const hb=["check git","view git","show git","list git","switch git","create git","pull git","push git","fetch git","merge git","rebase git","stage git","restore git","reset git","stash git","search ","find files","list files","show first","show last","print line","print text","copy ","move ","remove ","create folder","create file","fetch http","install dependencies","run tests","run build","start app","run lint","run openclaw","run node script","run node ","run python","run ruby","run php","run sed","run git ","run npm ","run pnpm ","run yarn ","run bun ","check js syntax"];function Pc(e){return e==="run command"?!0:e.startsWith("run ")?!hb.some(t=>e.startsWith(t)):!1}function mb(e,t=120){const n=e.replace(/\s*\n\s*/g," ").replace(/\s{2,}/g," ").trim();return n.length<=t?n:`${n.slice(0,Math.max(0,t-1))}…`}function vb(e){const t=on(e);if(!t)return;const n=typeof t.command=="string"?t.command.trim():void 0;if(!n)return;const s=rb(n),i=vr(s)??vr(n),a=i?.text||"run command",r=(typeof t.workdir=="string"?t.workdir:typeof t.cwd=="string"?t.cwd:void 0)?.trim()||i?.chdirPath||void 0,l=mb(s);if(i?.allGeneric!==!1&&Pc(a))return r?`${l} (in ${r})`:l;const d=r?`${a} (in ${r})`:a;return l&&l!==d&&l!==a?`${d}

\`${l}\``:d}function bb(e,t){if(!(!e||!t))return e.actions?.[t]??void 0}function yb(e,t,n){{for(const s of t){const i=nb(e,s),a=Rc(i,n.coerce);if(a)return a}return}}const xb={icon:"puzzle",detailKeys:["command","path","url","targetUrl","targetId","ref","element","node","nodeId","id","requestId","to","channelId","guildId","userId","name","query","pattern","messageId"]},$b={bash:{icon:"wrench",title:"Bash",detailKeys:["command"]},process:{icon:"wrench",title:"Process",detailKeys:["sessionId"]},read:{icon:"fileText",title:"Read",detailKeys:["path"]},write:{icon:"edit",title:"Write",detailKeys:["path"]},edit:{icon:"penLine",title:"Edit",detailKeys:["path"]},attach:{icon:"paperclip",title:"Attach",detailKeys:["path","url","fileName"]},browser:{icon:"globe",title:"Browser",actions:{status:{label:"status"},start:{label:"start"},stop:{label:"stop"},tabs:{label:"tabs"},open:{label:"open",detailKeys:["targetUrl"]},focus:{label:"focus",detailKeys:["targetId"]},close:{label:"close",detailKeys:["targetId"]},snapshot:{label:"snapshot",detailKeys:["targetUrl","targetId","ref","element","format"]},screenshot:{label:"screenshot",detailKeys:["targetUrl","targetId","ref","element"]},navigate:{label:"navigate",detailKeys:["targetUrl","targetId"]},console:{label:"console",detailKeys:["level","targetId"]},pdf:{label:"pdf",detailKeys:["targetId"]},upload:{label:"upload",detailKeys:["paths","ref","inputRef","element","targetId"]},dialog:{label:"dialog",detailKeys:["accept","promptText","targetId"]},act:{label:"act",detailKeys:["request.kind","request.ref","request.selector","request.text","request.value"]}}},canvas:{icon:"image",title:"Canvas",actions:{present:{label:"present",detailKeys:["target","node","nodeId"]},hide:{label:"hide",detailKeys:["node","nodeId"]},navigate:{label:"navigate",detailKeys:["url","node","nodeId"]},eval:{label:"eval",detailKeys:["javaScript","node","nodeId"]},snapshot:{label:"snapshot",detailKeys:["format","node","nodeId"]},a2ui_push:{label:"A2UI push",detailKeys:["jsonlPath","node","nodeId"]},a2ui_reset:{label:"A2UI reset",detailKeys:["node","nodeId"]}}},nodes:{icon:"smartphone",title:"Nodes",actions:{status:{label:"status"},describe:{label:"describe",detailKeys:["node","nodeId"]},pending:{label:"pending"},approve:{label:"approve",detailKeys:["requestId"]},reject:{label:"reject",detailKeys:["requestId"]},notify:{label:"notify",detailKeys:["node","nodeId","title","body"]},camera_snap:{label:"camera snap",detailKeys:["node","nodeId","facing","deviceId"]},camera_list:{label:"camera list",detailKeys:["node","nodeId"]},camera_clip:{label:"camera clip",detailKeys:["node","nodeId","facing","duration","durationMs"]},screen_record:{label:"screen record",detailKeys:["node","nodeId","duration","durationMs","fps","screenIndex"]}}},cron:{icon:"loader",title:"Cron",actions:{status:{label:"status"},list:{label:"list"},add:{label:"add",detailKeys:["job.name","job.id","job.schedule","job.cron"]},update:{label:"update",detailKeys:["id"]},remove:{label:"remove",detailKeys:["id"]},run:{label:"run",detailKeys:["id"]},runs:{label:"runs",detailKeys:["id"]},wake:{label:"wake",detailKeys:["text","mode"]}}},gateway:{icon:"plug",title:"Gateway",actions:{restart:{label:"restart",detailKeys:["reason","delayMs"]},"config.get":{label:"config get"},"config.schema":{label:"config schema"},"config.apply":{label:"config apply",detailKeys:["restartDelayMs"]},"update.run":{label:"update run",detailKeys:["restartDelayMs"]}}},whatsapp_login:{icon:"circle",title:"WhatsApp Login",actions:{start:{label:"start"},wait:{label:"wait"}}},discord:{icon:"messageSquare",title:"Discord",actions:{react:{label:"react",detailKeys:["channelId","messageId","emoji"]},reactions:{label:"reactions",detailKeys:["channelId","messageId"]},sticker:{label:"sticker",detailKeys:["to","stickerIds"]},poll:{label:"poll",detailKeys:["question","to"]},permissions:{label:"permissions",detailKeys:["channelId"]},readMessages:{label:"read messages",detailKeys:["channelId","limit"]},sendMessage:{label:"send",detailKeys:["to","content"]},editMessage:{label:"edit",detailKeys:["channelId","messageId"]},deleteMessage:{label:"delete",detailKeys:["channelId","messageId"]},threadCreate:{label:"thread create",detailKeys:["channelId","name"]},threadList:{label:"thread list",detailKeys:["guildId","channelId"]},threadReply:{label:"thread reply",detailKeys:["channelId","content"]},pinMessage:{label:"pin",detailKeys:["channelId","messageId"]},unpinMessage:{label:"unpin",detailKeys:["channelId","messageId"]},listPins:{label:"list pins",detailKeys:["channelId"]},searchMessages:{label:"search",detailKeys:["guildId","content"]},memberInfo:{label:"member",detailKeys:["guildId","userId"]},roleInfo:{label:"roles",detailKeys:["guildId"]},emojiList:{label:"emoji list",detailKeys:["guildId"]},roleAdd:{label:"role add",detailKeys:["guildId","userId","roleId"]},roleRemove:{label:"role remove",detailKeys:["guildId","userId","roleId"]},channelInfo:{label:"channel",detailKeys:["channelId"]},channelList:{label:"channels",detailKeys:["guildId"]},voiceStatus:{label:"voice",detailKeys:["guildId","userId"]},eventList:{label:"events",detailKeys:["guildId"]},eventCreate:{label:"event create",detailKeys:["guildId","name"]},timeout:{label:"timeout",detailKeys:["guildId","userId"]},kick:{label:"kick",detailKeys:["guildId","userId"]},ban:{label:"ban",detailKeys:["guildId","userId"]}}},slack:{icon:"messageSquare",title:"Slack",actions:{react:{label:"react",detailKeys:["channelId","messageId","emoji"]},reactions:{label:"reactions",detailKeys:["channelId","messageId"]},sendMessage:{label:"send",detailKeys:["to","content"]},editMessage:{label:"edit",detailKeys:["channelId","messageId"]},deleteMessage:{label:"delete",detailKeys:["channelId","messageId"]},readMessages:{label:"read messages",detailKeys:["channelId","limit"]},pinMessage:{label:"pin",detailKeys:["channelId","messageId"]},unpinMessage:{label:"unpin",detailKeys:["channelId","messageId"]},listPins:{label:"list pins",detailKeys:["channelId"]},memberInfo:{label:"member",detailKeys:["userId"]},emojiList:{label:"emoji list"}}}},wb={fallback:xb,tools:$b},Dc=wb,br=Dc.fallback??{icon:"puzzle"},kb=Dc.tools??{};function Sb(e){if(!e)return e;const t=[{re:/^\/Users\/[^/]+(\/|$)/,replacement:"~$1"},{re:/^\/home\/[^/]+(\/|$)/,replacement:"~$1"},{re:/^C:\\Users\\[^\\]+(\\|$)/i,replacement:"~$1"}];for(const n of t)if(n.re.test(e))return e.replace(n.re,n.replacement);return e}function Ab(e){const t=Xv(e.name),n=t.toLowerCase(),s=kb[n],i=s?.icon??br.icon??"puzzle",a=s?.title??eb(t),o=s?.label??a,r=e.args&&typeof e.args=="object"?e.args.action:void 0,l=typeof r=="string"?r.trim():void 0,d=bb(s,l),p=n==="web_search"?"search":n==="web_fetch"?"fetch":n.replace(/_/g," ").replace(/\./g," "),g=tb(d?.label??l??p);let h;n==="exec"&&(h=vb(e.args)),!h&&n==="read"&&(h=sb(e.args)),!h&&(n==="write"||n==="edit"||n==="attach")&&(h=ib(n,e.args)),!h&&n==="web_search"&&(h=ab(e.args)),!h&&n==="web_fetch"&&(h=ob(e.args));const u=d?.detailKeys??s?.detailKeys??br.detailKeys??[];return!h&&u.length>0&&(h=yb(e.args,u,{coerce:{includeFalse:!0,includeZero:!0}})),!h&&e.meta&&(h=e.meta),h&&(h=Sb(h)),{name:t,icon:i,title:a,label:o,verb:g,detail:h}}function Cb(e){if(e.detail){if(e.detail.includes(" · ")){const t=e.detail.split(" · ").map(n=>n.trim()).filter(n=>n.length>0).join(", ");return t?`with ${t}`:void 0}return e.detail}}const Tb=80,_b=2,yr=100;function Eb(e){const t=e.trim();if(t.startsWith("{")||t.startsWith("["))try{const n=JSON.parse(t);return"```json\n"+JSON.stringify(n,null,2)+"\n```"}catch{}return e}function Lb(e){const t=e.split(`
`),n=t.slice(0,_b),s=n.join(`
`);return s.length>yr?s.slice(0,yr)+"…":n.length<t.length?s+"…":s}function Mb(e){const t=e,n=Rb(t.content),s=[];for(const i of n){const a=(typeof i.type=="string"?i.type:"").toLowerCase();(["toolcall","tool_call","tooluse","tool_use"].includes(a)||typeof i.name=="string"&&i.arguments!=null)&&s.push({kind:"call",name:i.name??"tool",args:Ib(i.arguments??i.args)})}for(const i of n){const a=(typeof i.type=="string"?i.type:"").toLowerCase();if(a!=="toolresult"&&a!=="tool_result")continue;const o=Pb(i),r=typeof i.name=="string"?i.name:"tool";s.push({kind:"result",name:r,text:o})}if(Mc(e)&&!s.some(i=>i.kind==="result")){const i=typeof t.toolName=="string"&&t.toolName||typeof t.tool_name=="string"&&t.tool_name||"tool",a=Ll(e)??void 0;s.push({kind:"result",name:i,text:a})}return s}function xr(e,t){const n=Ab({name:e.name,args:e.args}),s=Cb(n),i=!!e.text?.trim(),a=!!t,o=a?()=>{if(i){t(Eb(e.text));return}const g=`## ${n.label}

${s?`**Command:** \`${s}\`

`:""}*No output — tool completed successfully.*`;t(g)}:void 0,r=i&&(e.text?.length??0)<=Tb,l=i&&!r,d=i&&r,p=!i;return c`
    <div
      class="chat-tool-card ${a?"chat-tool-card--clickable":""}"
      @click=${o}
      role=${a?"button":m}
      tabindex=${a?"0":m}
      @keydown=${a?g=>{g.key!=="Enter"&&g.key!==" "||(g.preventDefault(),o?.())}:m}
    >
      <div class="chat-tool-card__header">
        <div class="chat-tool-card__title">
          <span class="chat-tool-card__icon">${ge[n.icon]}</span>
          <span>${n.label}</span>
        </div>
        ${a?c`<span class="chat-tool-card__action">${i?"View":""} ${ge.check}</span>`:m}
        ${p&&!a?c`<span class="chat-tool-card__status">${ge.check}</span>`:m}
      </div>
      ${s?c`<div class="chat-tool-card__detail">${s}</div>`:m}
      ${p?c`
              <div class="chat-tool-card__status-text muted">Completed</div>
            `:m}
      ${l?c`<div class="chat-tool-card__preview mono">${Lb(e.text)}</div>`:m}
      ${d?c`<div class="chat-tool-card__inline mono">${e.text}</div>`:m}
    </div>
  `}function Rb(e){return Array.isArray(e)?e.filter(Boolean):[]}function Ib(e){if(typeof e!="string")return e;const t=e.trim();if(!t||!t.startsWith("{")&&!t.startsWith("["))return e;try{return JSON.parse(t)}catch{return e}}function Pb(e){if(typeof e.text=="string")return e.text;if(typeof e.content=="string")return e.content}function Db(e){const n=e.content,s=[];if(Array.isArray(n))for(const i of n){if(typeof i!="object"||i===null)continue;const a=i;if(a.type==="image"){const o=a.source;if(o?.type==="base64"&&typeof o.data=="string"){const r=o.data,l=o.media_type||"image/png",d=r.startsWith("data:")?r:`data:${l};base64,${r}`;s.push({url:d})}else typeof a.url=="string"&&s.push({url:a.url})}else if(a.type==="image_url"){const o=a.image_url;typeof o?.url=="string"&&s.push({url:o.url})}}return s}function Fb(e){return c`
    <div class="chat-group assistant">
      ${Ba("assistant",e)}
      <div class="chat-group-messages">
        <div class="chat-bubble chat-reading-indicator" aria-hidden="true">
          <span class="chat-reading-indicator__dots">
            <span></span><span></span><span></span>
          </span>
        </div>
      </div>
    </div>
  `}function Nb(e,t,n,s){const i=new Date(t).toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}),a=s?.name??"Assistant";return c`
    <div class="chat-group assistant">
      ${Ba("assistant",s)}
      <div class="chat-group-messages">
        ${Fc({role:"assistant",content:[{type:"text",text:e}],timestamp:t},{isStreaming:!0,showReasoning:!1},n)}
        <div class="chat-group-footer">
          <span class="chat-sender-name">${a}</span>
          <span class="chat-group-timestamp">${i}</span>
        </div>
      </div>
    </div>
  `}function Ob(e,t){const n=Fa(e.role),s=t.assistantName??"Assistant",i=n==="user"?"You":n==="assistant"?s:n,a=n==="user"?"user":n==="assistant"?"assistant":"other",o=new Date(e.timestamp).toLocaleTimeString([],{hour:"numeric",minute:"2-digit"});return c`
    <div class="chat-group ${a}">
      ${Ba(e.role,{name:s,avatar:t.assistantAvatar??null})}
      <div class="chat-group-messages">
        ${e.messages.map((r,l)=>Fc(r.message,{isStreaming:e.isStreaming&&l===e.messages.length-1,showReasoning:t.showReasoning},t.onOpenSidebar))}
        <div class="chat-group-footer">
          <span class="chat-sender-name">${i}</span>
          <span class="chat-group-timestamp">${o}</span>
        </div>
      </div>
    </div>
  `}function Ba(e,t){const n=Fa(e),s=t?.name?.trim()||"Assistant",i=t?.avatar?.trim()||"",a=n==="user"?"U":n==="assistant"?s.charAt(0).toUpperCase()||"A":n==="tool"?"⚙":"?",o=n==="user"?"user":n==="assistant"?"assistant":n==="tool"?"tool":"other";return i&&n==="assistant"?Bb(i)?c`<img
        class="chat-avatar ${o}"
        src="${i}"
        alt="${s}"
      />`:c`<div class="chat-avatar ${o}">${i}</div>`:c`<div class="chat-avatar ${o}">${a}</div>`}function Bb(e){return/^https?:\/\//i.test(e)||/^data:image\//i.test(e)||e.startsWith("/")}function Ub(e){return e.length===0?m:c`
    <div class="chat-message-images">
      ${e.map(t=>c`
          <img
            src=${t.url}
            alt=${t.alt??"Attached image"}
            class="chat-message-image"
            @click=${()=>window.open(t.url,"_blank")}
          />
        `)}
    </div>
  `}function Fc(e,t,n){const s=e,i=typeof s.role=="string"?s.role:"unknown",a=Mc(e)||i.toLowerCase()==="toolresult"||i.toLowerCase()==="tool_result"||typeof s.toolCallId=="string"||typeof s.tool_call_id=="string",o=Mb(e),r=o.length>0,l=Db(e),d=l.length>0,p=Ll(e),g=t.showReasoning&&i==="assistant"?zg(e):null,h=p?.trim()?p:null,u=g?jg(g):null,f=h,v=i==="assistant"&&!!f?.trim(),w=["chat-bubble",v?"has-copy":"",t.isStreaming?"streaming":"","fade-in"].filter(Boolean).join(" ");return!f&&r&&a?c`${o.map(S=>xr(S,n))}`:!f&&!r&&!d?m:c`
    <div class="${w}">
      ${v?Jv(f):m}
      ${Ub(l)}
      ${u?c`<div class="chat-thinking">${Di(ji(u))}</div>`:m}
      ${f?c`<div class="chat-text" dir="${_c(f)}">${Di(ji(f))}</div>`:m}
      ${o.map(S=>xr(S,n))}
    </div>
  `}function zb(e){return c`
    <div class="sidebar-panel">
      <div class="sidebar-header">
        <div class="sidebar-title">Tool Output</div>
        <button @click=${e.onClose} class="btn" title="Close sidebar">
          ${ge.x}
        </button>
      </div>
      <div class="sidebar-content">
        ${e.error?c`
              <div class="callout danger">${e.error}</div>
              <button @click=${e.onViewRawText} class="btn" style="margin-top: 12px;">
                View Raw Text
              </button>
            `:e.content?c`<div class="sidebar-markdown">${Di(ji(e.content))}</div>`:c`
                  <div class="muted">No content available</div>
                `}
      </div>
    </div>
  `}var Hb=Object.defineProperty,jb=Object.getOwnPropertyDescriptor,Fs=(e,t,n,s)=>{for(var i=s>1?void 0:s?jb(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(s?o(t,n,i):o(i))||i);return s&&i&&Hb(t,n,i),i};let sn=class extends en{constructor(){super(...arguments),this.splitRatio=.6,this.minRatio=.4,this.maxRatio=.7,this.isDragging=!1,this.startX=0,this.startRatio=0,this.handleMouseDown=e=>{this.isDragging=!0,this.startX=e.clientX,this.startRatio=this.splitRatio,this.classList.add("dragging"),document.addEventListener("mousemove",this.handleMouseMove),document.addEventListener("mouseup",this.handleMouseUp),e.preventDefault()},this.handleMouseMove=e=>{if(!this.isDragging)return;const t=this.parentElement;if(!t)return;const n=t.getBoundingClientRect().width,i=(e.clientX-this.startX)/n;let a=this.startRatio+i;a=Math.max(this.minRatio,Math.min(this.maxRatio,a)),this.dispatchEvent(new CustomEvent("resize",{detail:{splitRatio:a},bubbles:!0,composed:!0}))},this.handleMouseUp=()=>{this.isDragging=!1,this.classList.remove("dragging"),document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("mouseup",this.handleMouseUp)}}render(){return m}connectedCallback(){super.connectedCallback(),this.addEventListener("mousedown",this.handleMouseDown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("mousedown",this.handleMouseDown),document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("mouseup",this.handleMouseUp)}};sn.styles=qc`
    :host {
      width: 4px;
      cursor: col-resize;
      background: var(--border, #333);
      transition: background 150ms ease-out;
      flex-shrink: 0;
      position: relative;
    }
    :host::before {
      content: "";
      position: absolute;
      top: 0;
      left: -4px;
      right: -4px;
      bottom: 0;
    }
    :host(:hover) {
      background: var(--accent, #007bff);
    }
    :host(.dragging) {
      background: var(--accent, #007bff);
    }
  `;Fs([ks({type:Number})],sn.prototype,"splitRatio",2);Fs([ks({type:Number})],sn.prototype,"minRatio",2);Fs([ks({type:Number})],sn.prototype,"maxRatio",2);sn=Fs([Ur("resizable-divider")],sn);const Kb=5e3,Wb=8e3;function $r(e){e.style.height="auto",e.style.height=`${e.scrollHeight}px`}function qb(e){return e?e.active?c`
      <div class="compaction-indicator compaction-indicator--active" role="status" aria-live="polite">
        ${ge.loader} Compacting context...
      </div>
    `:e.completedAt&&Date.now()-e.completedAt<Kb?c`
        <div class="compaction-indicator compaction-indicator--complete" role="status" aria-live="polite">
          ${ge.check} Context compacted
        </div>
      `:m:m}function Gb(e){if(!e)return m;const t=e.phase??"active";if(Date.now()-e.occurredAt>=Wb)return m;const s=[`Selected: ${e.selected}`,t==="cleared"?`Active: ${e.selected}`:`Active: ${e.active}`,t==="cleared"&&e.previous?`Previous fallback: ${e.previous}`:null,e.reason?`Reason: ${e.reason}`:null,e.attempts.length>0?`Attempts: ${e.attempts.slice(0,3).join(" | ")}`:null].filter(Boolean).join(" • "),i=t==="cleared"?`Fallback cleared: ${e.selected}`:`Fallback active: ${e.active}`,a=t==="cleared"?"compaction-indicator compaction-indicator--fallback-cleared":"compaction-indicator compaction-indicator--fallback",o=t==="cleared"?ge.check:ge.brain;return c`
    <div
      class=${a}
      role="status"
      aria-live="polite"
      title=${s}
    >
      ${o} ${i}
    </div>
  `}function Vb(){return`att-${Date.now()}-${Math.random().toString(36).slice(2,9)}`}function Qb(e,t){const n=e.clipboardData?.items;if(!n||!t.onAttachmentsChange)return;const s=[];for(let i=0;i<n.length;i++){const a=n[i];a.type.startsWith("image/")&&s.push(a)}if(s.length!==0){e.preventDefault();for(const i of s){const a=i.getAsFile();if(!a)continue;const o=new FileReader;o.addEventListener("load",()=>{const r=o.result,l={id:Vb(),dataUrl:r,mimeType:a.type},d=t.attachments??[];t.onAttachmentsChange?.([...d,l])}),o.readAsDataURL(a)}}}function Yb(e){const t=e.attachments??[];return t.length===0?m:c`
    <div class="chat-attachments">
      ${t.map(n=>c`
          <div class="chat-attachment">
            <img
              src=${n.dataUrl}
              alt="Attachment preview"
              class="chat-attachment__img"
            />
            <button
              class="chat-attachment__remove"
              type="button"
              aria-label="Remove attachment"
              @click=${()=>{const s=(e.attachments??[]).filter(i=>i.id!==n.id);e.onAttachmentsChange?.(s)}}
            >
              ${ge.x}
            </button>
          </div>
        `)}
    </div>
  `}function Zb(e){const t=e.connected,n=e.sending||e.stream!==null,s=!!(e.canAbort&&e.onAbort),a=e.sessions?.sessions?.find(u=>u.key===e.sessionKey)?.reasoningLevel??"off",o=e.showThinking&&a!=="off",r={name:e.assistantName,avatar:e.assistantAvatar??e.assistantAvatarUrl??null},l=(e.attachments?.length??0)>0,d=e.connected?l?"Add a message or paste more images...":"Message (↩ to send, Shift+↩ for line breaks, paste images)":"Connect to the gateway to start chatting…",p=e.splitRatio??.6,g=!!(e.sidebarOpen&&e.onCloseSidebar),h=c`
    <div
      class="chat-thread"
      role="log"
      aria-live="polite"
      @scroll=${e.onChatScroll}
    >
      ${e.loading?c`
              <div class="muted">Loading chat…</div>
            `:m}
      ${Yl(Xb(e),u=>u.key,u=>u.kind==="divider"?c`
              <div class="chat-divider" role="separator" data-ts=${String(u.timestamp)}>
                <span class="chat-divider__line"></span>
                <span class="chat-divider__label">${u.label}</span>
                <span class="chat-divider__line"></span>
              </div>
            `:u.kind==="reading-indicator"?Fb(r):u.kind==="stream"?Nb(u.text,u.startedAt,e.onOpenSidebar,r):u.kind==="group"?Ob(u,{onOpenSidebar:e.onOpenSidebar,showReasoning:o,assistantName:e.assistantName,assistantAvatar:r.avatar}):m)}
    </div>
  `;return c`
    <section class="card chat">
      ${e.disabledReason?c`<div class="callout">${e.disabledReason}</div>`:m}

      ${e.error?c`<div class="callout danger">${e.error}</div>`:m}

      ${e.focusMode?c`
            <button
              class="chat-focus-exit"
              type="button"
              @click=${e.onToggleFocusMode}
              aria-label="Exit focus mode"
              title="Exit focus mode"
            >
              ${ge.x}
            </button>
          `:m}

      <div
        class="chat-split-container ${g?"chat-split-container--open":""}"
      >
        <div
          class="chat-main"
          style="flex: ${g?`0 0 ${p*100}%`:"1 1 100%"}"
        >
          ${h}
        </div>

        ${g?c`
              <resizable-divider
                .splitRatio=${p}
                @resize=${u=>e.onSplitRatioChange?.(u.detail.splitRatio)}
              ></resizable-divider>
              <div class="chat-sidebar">
                ${zb({content:e.sidebarContent??null,error:e.sidebarError??null,onClose:e.onCloseSidebar,onViewRawText:()=>{!e.sidebarContent||!e.onOpenSidebar||e.onOpenSidebar(`\`\`\`
${e.sidebarContent}
\`\`\``)}})}
              </div>
            `:m}
      </div>

      ${e.queue.length?c`
            <div class="chat-queue" role="status" aria-live="polite">
              <div class="chat-queue__title">Queued (${e.queue.length})</div>
              <div class="chat-queue__list">
                ${e.queue.map(u=>c`
                    <div class="chat-queue__item">
                      <div class="chat-queue__text">
                        ${u.text||(u.attachments?.length?`Image (${u.attachments.length})`:"")}
                      </div>
                      <button
                        class="btn chat-queue__remove"
                        type="button"
                        aria-label="Remove queued message"
                        @click=${()=>e.onQueueRemove(u.id)}
                      >
                        ${ge.x}
                      </button>
                    </div>
                  `)}
              </div>
            </div>
          `:m}

      ${Gb(e.fallbackStatus)}
      ${qb(e.compactionStatus)}

      ${e.showNewMessages?c`
            <button
              class="btn chat-new-messages"
              type="button"
              @click=${e.onScrollToBottom}
            >
              New messages ${ge.arrowDown}
            </button>
          `:m}

      <div class="chat-compose">
        ${Yb(e)}
        <div class="chat-compose__row">
          <label class="field chat-compose__field">
            <span>Message</span>
            <textarea
              ${Tm(u=>u&&$r(u))}
              .value=${e.draft}
              dir=${_c(e.draft)}
              ?disabled=${!e.connected}
              @keydown=${u=>{u.key==="Enter"&&(u.isComposing||u.keyCode===229||u.shiftKey||e.connected&&(u.preventDefault(),t&&e.onSend()))}}
              @input=${u=>{const f=u.target;$r(f),e.onDraftChange(f.value)}}
              @paste=${u=>Qb(u,e)}
              placeholder=${d}
            ></textarea>
          </label>
          <div class="chat-compose__actions">
            <button
              class="btn"
              ?disabled=${!e.connected||!s&&e.sending}
              @click=${s?e.onAbort:e.onNewSession}
            >
              ${s?"Stop":"New session"}
            </button>
            <button
              class="btn primary"
              ?disabled=${!e.connected}
              @click=${e.onSend}
            >
              ${n?"Queue":"Send"}<kbd class="btn-kbd">↵</kbd>
            </button>
          </div>
        </div>
      </div>
    </section>
  `}const wr=200;function Jb(e){const t=[];let n=null;for(const s of e){if(s.kind!=="message"){n&&(t.push(n),n=null),t.push(s);continue}const i=Lc(s.message),a=Fa(i.role),o=i.timestamp||Date.now();!n||n.role!==a?(n&&t.push(n),n={kind:"group",key:`group:${a}:${s.key}`,role:a,messages:[{message:s.message,key:s.key}],timestamp:o,isStreaming:!1}):n.messages.push({message:s.message,key:s.key})}return n&&t.push(n),t}function Xb(e){const t=[],n=Array.isArray(e.messages)?e.messages:[],s=Array.isArray(e.toolMessages)?e.toolMessages:[],i=Math.max(0,n.length-wr);i>0&&t.push({kind:"message",key:"chat:history:notice",message:{role:"system",content:`Showing last ${wr} messages (${i} hidden).`,timestamp:Date.now()}});for(let a=i;a<n.length;a++){const o=n[a],r=Lc(o),d=o.__openclaw;if(d&&d.kind==="compaction"){t.push({kind:"divider",key:typeof d.id=="string"?`divider:compaction:${d.id}`:`divider:compaction:${r.timestamp}:${a}`,label:"Compaction",timestamp:r.timestamp??Date.now()});continue}!e.showThinking&&r.role.toLowerCase()==="toolresult"||t.push({kind:"message",key:kr(o,a),message:o})}if(e.showThinking)for(let a=0;a<s.length;a++)t.push({kind:"message",key:kr(s[a],a+n.length),message:s[a]});if(e.stream!==null){const a=`stream:${e.sessionKey}:${e.streamStartedAt??"live"}`;e.stream.trim().length>0?t.push({kind:"stream",key:a,text:e.stream,startedAt:e.streamStartedAt??Date.now()}):t.push({kind:"reading-indicator",key:a})}return Jb(t)}function kr(e,t){const n=e,s=typeof n.toolCallId=="string"?n.toolCallId:"";if(s)return`tool:${s}`;const i=typeof n.id=="string"?n.id:"";if(i)return`msg:${i}`;const a=typeof n.messageId=="string"?n.messageId:"";if(a)return`msg:${a}`;const o=typeof n.timestamp=="number"?n.timestamp:null,r=typeof n.role=="string"?n.role:"unknown";return o!=null?`msg:${r}:${o}:${t}`:`msg:${r}:${t}`}const Ki={all:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="3" width="7" height="7"></rect>
      <rect x="14" y="3" width="7" height="7"></rect>
      <rect x="14" y="14" width="7" height="7"></rect>
      <rect x="3" y="14" width="7" height="7"></rect>
    </svg>
  `,env:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="3"></circle>
      <path
        d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
      ></path>
    </svg>
  `,update:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="7 10 12 15 17 10"></polyline>
      <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
  `,agents:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path
        d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"
      ></path>
      <circle cx="8" cy="14" r="1"></circle>
      <circle cx="16" cy="14" r="1"></circle>
    </svg>
  `,auth:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
  `,channels:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
  `,messages:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  `,commands:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="4 17 10 11 4 5"></polyline>
      <line x1="12" y1="19" x2="20" y2="19"></line>
    </svg>
  `,hooks:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
    </svg>
  `,skills:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      ></polygon>
    </svg>
  `,tools:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path
        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
      ></path>
    </svg>
  `,gateway:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path
        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
      ></path>
    </svg>
  `,wizard:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M15 4V2"></path>
      <path d="M15 16v-2"></path>
      <path d="M8 9h2"></path>
      <path d="M20 9h2"></path>
      <path d="M17.8 11.8 19 13"></path>
      <path d="M15 9h0"></path>
      <path d="M17.8 6.2 19 5"></path>
      <path d="m3 21 9-9"></path>
      <path d="M12.2 6.2 11 5"></path>
    </svg>
  `,meta:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 20h9"></path>
      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
    </svg>
  `,logging:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
  `,browser:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"></circle>
      <circle cx="12" cy="12" r="4"></circle>
      <line x1="21.17" y1="8" x2="12" y2="8"></line>
      <line x1="3.95" y1="6.06" x2="8.54" y2="14"></line>
      <line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>
    </svg>
  `,ui:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="3" y1="9" x2="21" y2="9"></line>
      <line x1="9" y1="21" x2="9" y2="9"></line>
    </svg>
  `,models:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path
        d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
      ></path>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
      <line x1="12" y1="22.08" x2="12" y2="12"></line>
    </svg>
  `,bindings:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
      <line x1="6" y1="6" x2="6.01" y2="6"></line>
      <line x1="6" y1="18" x2="6.01" y2="18"></line>
    </svg>
  `,broadcast:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"></path>
      <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"></path>
      <circle cx="12" cy="12" r="2"></circle>
      <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"></path>
      <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"></path>
    </svg>
  `,audio:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M9 18V5l12-2v13"></path>
      <circle cx="6" cy="18" r="3"></circle>
      <circle cx="18" cy="16" r="3"></circle>
    </svg>
  `,session:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  `,cron:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  `,web:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path
        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
      ></path>
    </svg>
  `,discovery:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  `,canvasHost:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <circle cx="8.5" cy="8.5" r="1.5"></circle>
      <polyline points="21 15 16 10 5 21"></polyline>
    </svg>
  `,talk:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
      <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
      <line x1="12" y1="19" x2="12" y2="23"></line>
      <line x1="8" y1="23" x2="16" y2="23"></line>
    </svg>
  `,plugins:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 2v6"></path>
      <path d="m4.93 10.93 4.24 4.24"></path>
      <path d="M2 12h6"></path>
      <path d="m4.93 13.07 4.24-4.24"></path>
      <path d="M12 22v-6"></path>
      <path d="m19.07 13.07-4.24-4.24"></path>
      <path d="M22 12h-6"></path>
      <path d="m19.07 10.93-4.24 4.24"></path>
    </svg>
  `,default:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
    </svg>
  `},Sr=[{key:"env",label:"Environment"},{key:"update",label:"Updates"},{key:"agents",label:"Agents"},{key:"auth",label:"Authentication"},{key:"channels",label:"Channels"},{key:"messages",label:"Messages"},{key:"commands",label:"Commands"},{key:"hooks",label:"Hooks"},{key:"skills",label:"Skills"},{key:"tools",label:"Tools"},{key:"gateway",label:"Gateway"},{key:"wizard",label:"Setup Wizard"}],Ar="__all__";function Cr(e){return Ki[e]??Ki.default}function ey(e,t){const n=Ca[e];return n||{label:t?.title??nt(e),description:t?.description??""}}function ty(e){const{key:t,schema:n,uiHints:s}=e;if(!n||Ee(n)!=="object"||!n.properties)return[];const i=Object.entries(n.properties).map(([a,o])=>{const r=Ie([t,a],s),l=r?.label??o.title??nt(a),d=r?.help??o.description??"",p=r?.order??50;return{key:a,label:l,description:d,order:p}});return i.sort((a,o)=>a.order!==o.order?a.order-o.order:a.key.localeCompare(o.key)),i}function ny(e,t){if(!e||!t)return[];const n=[];function s(i,a,o){if(i===a)return;if(typeof i!=typeof a){n.push({path:o,from:i,to:a});return}if(typeof i!="object"||i===null||a===null){i!==a&&n.push({path:o,from:i,to:a});return}if(Array.isArray(i)&&Array.isArray(a)){JSON.stringify(i)!==JSON.stringify(a)&&n.push({path:o,from:i,to:a});return}const r=i,l=a,d=new Set([...Object.keys(r),...Object.keys(l)]);for(const p of d)s(r[p],l[p],o?`${o}.${p}`:p)}return s(e,t,""),n}function Tr(e,t=40){let n;try{n=JSON.stringify(e)??String(e)}catch{n=String(e)}return n.length<=t?n:n.slice(0,t-3)+"..."}function sy(e){const t=e.valid==null?"unknown":e.valid?"valid":"invalid",n=oc(e.schema),s=n.schema?n.unsupportedPaths.length>0:!1,i=n.schema?.properties??{},a=Sr.filter(T=>T.key in i),o=new Set(Sr.map(T=>T.key)),r=Object.keys(i).filter(T=>!o.has(T)).map(T=>({key:T,label:T.charAt(0).toUpperCase()+T.slice(1)})),l=[...a,...r],d=e.activeSection&&n.schema&&Ee(n.schema)==="object"?n.schema.properties?.[e.activeSection]:void 0,p=e.activeSection?ey(e.activeSection,d):null,g=e.activeSection?ty({key:e.activeSection,schema:d,uiHints:e.uiHints}):[],h=e.formMode==="form"&&!!e.activeSection&&g.length>0,u=e.activeSubsection===Ar,f=e.searchQuery||u?null:e.activeSubsection??g[0]?.key??null,v=e.formMode==="form"?ny(e.originalValue,e.formValue):[],w=e.formMode==="raw"&&e.raw!==e.originalRaw,S=e.formMode==="form"?v.length>0:w,C=!!e.formValue&&!e.loading&&!!n.schema,k=e.connected&&!e.saving&&S&&(e.formMode==="raw"?!0:C),A=e.connected&&!e.applying&&!e.updating&&S&&(e.formMode==="raw"?!0:C),E=e.connected&&!e.applying&&!e.updating;return c`
    <div class="config-layout">
      <!-- Sidebar -->
      <aside class="config-sidebar">
        <div class="config-sidebar__header">
          <div class="config-sidebar__title">Settings</div>
          <span
            class="pill pill--sm ${t==="valid"?"pill--ok":t==="invalid"?"pill--danger":""}"
            >${t}</span
          >
        </div>

        <!-- Search -->
        <div class="config-search">
          <svg
            class="config-search__icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="M21 21l-4.35-4.35"></path>
          </svg>
          <input
            type="text"
            class="config-search__input"
            placeholder="Search settings..."
            .value=${e.searchQuery}
            @input=${T=>e.onSearchChange(T.target.value)}
          />
          ${e.searchQuery?c`
                <button
                  class="config-search__clear"
                  @click=${()=>e.onSearchChange("")}
                >
                  ×
                </button>
              `:m}
        </div>

        <!-- Section nav -->
        <nav class="config-nav">
          <button
            class="config-nav__item ${e.activeSection===null?"active":""}"
            @click=${()=>e.onSectionChange(null)}
          >
            <span class="config-nav__icon">${Ki.all}</span>
            <span class="config-nav__label">All Settings</span>
          </button>
          ${l.map(T=>c`
              <button
                class="config-nav__item ${e.activeSection===T.key?"active":""}"
                @click=${()=>e.onSectionChange(T.key)}
              >
                <span class="config-nav__icon"
                  >${Cr(T.key)}</span
                >
                <span class="config-nav__label">${T.label}</span>
              </button>
            `)}
        </nav>

        <!-- Mode toggle at bottom -->
        <div class="config-sidebar__footer">
          <div class="config-mode-toggle">
            <button
              class="config-mode-toggle__btn ${e.formMode==="form"?"active":""}"
              ?disabled=${e.schemaLoading||!e.schema}
              @click=${()=>e.onFormModeChange("form")}
            >
              Form
            </button>
            <button
              class="config-mode-toggle__btn ${e.formMode==="raw"?"active":""}"
              @click=${()=>e.onFormModeChange("raw")}
            >
              Raw
            </button>
          </div>
        </div>
      </aside>

      <!-- Main content -->
      <main class="config-main">
        <!-- Action bar -->
        <div class="config-actions">
          <div class="config-actions__left">
            ${S?c`
                  <span class="config-changes-badge"
                    >${e.formMode==="raw"?"Unsaved changes":`${v.length} unsaved change${v.length!==1?"s":""}`}</span
                  >
                `:c`
                    <span class="config-status muted">No changes</span>
                  `}
          </div>
          <div class="config-actions__right">
            <button
              class="btn btn--sm"
              ?disabled=${e.loading}
              @click=${e.onReload}
            >
              ${e.loading?"Loading…":"Reload"}
            </button>
            <button
              class="btn btn--sm primary"
              ?disabled=${!k}
              @click=${e.onSave}
            >
              ${e.saving?"Saving…":"Save"}
            </button>
            <button
              class="btn btn--sm"
              ?disabled=${!A}
              @click=${e.onApply}
            >
              ${e.applying?"Applying…":"Apply"}
            </button>
            <button
              class="btn btn--sm"
              ?disabled=${!E}
              @click=${e.onUpdate}
            >
              ${e.updating?"Updating…":"Update"}
            </button>
          </div>
        </div>

        <!-- Diff panel (form mode only - raw mode doesn't have granular diff) -->
        ${S&&e.formMode==="form"?c`
              <details class="config-diff">
                <summary class="config-diff__summary">
                  <span
                    >View ${v.length} pending
                    change${v.length!==1?"s":""}</span
                  >
                  <svg
                    class="config-diff__chevron"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </summary>
                <div class="config-diff__content">
                  ${v.map(T=>c`
                      <div class="config-diff__item">
                        <div class="config-diff__path">${T.path}</div>
                        <div class="config-diff__values">
                          <span class="config-diff__from"
                            >${Tr(T.from)}</span
                          >
                          <span class="config-diff__arrow">→</span>
                          <span class="config-diff__to"
                            >${Tr(T.to)}</span
                          >
                        </div>
                      </div>
                    `)}
                </div>
              </details>
            `:m}
        ${p&&e.formMode==="form"?c`
              <div class="config-section-hero">
                <div class="config-section-hero__icon">
                  ${Cr(e.activeSection??"")}
                </div>
                <div class="config-section-hero__text">
                  <div class="config-section-hero__title">
                    ${p.label}
                  </div>
                  ${p.description?c`<div class="config-section-hero__desc">
                        ${p.description}
                      </div>`:m}
                </div>
              </div>
            `:m}
        ${h?c`
              <div class="config-subnav">
                <button
                  class="config-subnav__item ${f===null?"active":""}"
                  @click=${()=>e.onSubsectionChange(Ar)}
                >
                  All
                </button>
                ${g.map(T=>c`
                    <button
                      class="config-subnav__item ${f===T.key?"active":""}"
                      title=${T.description||T.label}
                      @click=${()=>e.onSubsectionChange(T.key)}
                    >
                      ${T.label}
                    </button>
                  `)}
              </div>
            `:m}

        <!-- Form content -->
        <div class="config-content">
          ${e.formMode==="form"?c`
                ${e.schemaLoading?c`
                        <div class="config-loading">
                          <div class="config-loading__spinner"></div>
                          <span>Loading schema…</span>
                        </div>
                      `:Gh({schema:n.schema,uiHints:e.uiHints,value:e.formValue,disabled:e.loading||!e.formValue,unsupportedPaths:n.unsupportedPaths,onPatch:e.onFormPatch,searchQuery:e.searchQuery,activeSection:e.activeSection,activeSubsection:f})}
                ${s?c`
                        <div class="callout danger" style="margin-top: 12px">
                          Form view can't safely edit some fields. Use Raw to avoid losing config entries.
                        </div>
                      `:m}
              `:c`
                <label class="field config-raw-field">
                  <span>Raw JSON5</span>
                  <textarea
                    .value=${e.raw}
                    @input=${T=>e.onRawChange(T.target.value)}
                  ></textarea>
                </label>
              `}
        </div>

        ${e.issues.length>0?c`<div class="callout danger" style="margin-top: 12px;">
              <pre class="code-block">
${JSON.stringify(e.issues,null,2)}</pre
              >
            </div>`:m}
      </main>
    </div>
  `}function iy(e){const t=["last",...e.channels.filter(Boolean)],n=e.form.deliveryChannel?.trim();n&&!t.includes(n)&&t.push(n);const s=new Set;return t.filter(i=>s.has(i)?!1:(s.add(i),!0))}function ay(e,t){if(t==="last")return"last";const n=e.channelMeta?.find(s=>s.id===t);return n?.label?n.label:e.channelLabels?.[t]??t}function oy(e){const t=iy(e),s=(e.runsJobId==null?void 0:e.jobs.find(r=>r.id===e.runsJobId))?.name??e.runsJobId??"(select a job)",i=e.runs.toSorted((r,l)=>l.ts-r.ts),a=e.form.sessionTarget==="isolated"&&e.form.payloadKind==="agentTurn",o=e.form.deliveryMode==="announce"&&!a?"none":e.form.deliveryMode;return c`
    <section class="grid grid-cols-2">
      <div class="card">
        <div class="card-title">Scheduler</div>
        <div class="card-sub">Gateway-owned cron scheduler status.</div>
        <div class="stat-grid" style="margin-top: 16px;">
          <div class="stat">
            <div class="stat-label">Enabled</div>
            <div class="stat-value">
              ${e.status?e.status.enabled?"Yes":"No":"n/a"}
            </div>
          </div>
          <div class="stat">
            <div class="stat-label">Jobs</div>
            <div class="stat-value">${e.status?.jobs??"n/a"}</div>
          </div>
          <div class="stat">
            <div class="stat-label">Next wake</div>
            <div class="stat-value">${Aa(e.status?.nextWakeAtMs??null)}</div>
          </div>
        </div>
        <div class="row" style="margin-top: 12px;">
          <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?"Refreshing…":"Refresh"}
          </button>
          ${e.error?c`<span class="muted">${e.error}</span>`:m}
        </div>
      </div>

      <div class="card">
        <div class="card-title">New Job</div>
        <div class="card-sub">Create a scheduled wakeup or agent run.</div>
        <div class="form-grid" style="margin-top: 16px;">
          <label class="field">
            <span>Name</span>
            <input
              .value=${e.form.name}
              @input=${r=>e.onFormChange({name:r.target.value})}
            />
          </label>
          <label class="field">
            <span>Description</span>
            <input
              .value=${e.form.description}
              @input=${r=>e.onFormChange({description:r.target.value})}
            />
          </label>
          <label class="field">
            <span>Agent ID</span>
            <input
              .value=${e.form.agentId}
              @input=${r=>e.onFormChange({agentId:r.target.value})}
              placeholder="default"
            />
          </label>
          <label class="field checkbox">
            <span>Enabled</span>
            <input
              type="checkbox"
              .checked=${e.form.enabled}
              @change=${r=>e.onFormChange({enabled:r.target.checked})}
            />
          </label>
          <label class="field">
            <span>Schedule</span>
            <select
              .value=${e.form.scheduleKind}
              @change=${r=>e.onFormChange({scheduleKind:r.target.value})}
            >
              <option value="every">Every</option>
              <option value="at">At</option>
              <option value="cron">Cron</option>
            </select>
          </label>
        </div>
        ${ry(e)}
        <div class="form-grid" style="margin-top: 12px;">
          <label class="field">
            <span>Session</span>
            <select
              .value=${e.form.sessionTarget}
              @change=${r=>e.onFormChange({sessionTarget:r.target.value})}
            >
              <option value="main">Main</option>
              <option value="isolated">Isolated</option>
            </select>
          </label>
          <label class="field">
            <span>Wake mode</span>
            <select
              .value=${e.form.wakeMode}
              @change=${r=>e.onFormChange({wakeMode:r.target.value})}
            >
              <option value="now">Now</option>
              <option value="next-heartbeat">Next heartbeat</option>
            </select>
          </label>
          <label class="field">
            <span>Payload</span>
            <select
              .value=${e.form.payloadKind}
              @change=${r=>e.onFormChange({payloadKind:r.target.value})}
            >
              <option value="systemEvent">System event</option>
              <option value="agentTurn">Agent turn</option>
            </select>
          </label>
        </div>
        <label class="field" style="margin-top: 12px;">
          <span>${e.form.payloadKind==="systemEvent"?"System text":"Agent message"}</span>
          <textarea
            .value=${e.form.payloadText}
            @input=${r=>e.onFormChange({payloadText:r.target.value})}
            rows="4"
          ></textarea>
        </label>
        <div class="form-grid" style="margin-top: 12px;">
          <label class="field">
            <span>Delivery</span>
            <select
              .value=${o}
              @change=${r=>e.onFormChange({deliveryMode:r.target.value})}
            >
              ${a?c`
                      <option value="announce">Announce summary (default)</option>
                    `:m}
              <option value="webhook">Webhook POST</option>
              <option value="none">None (internal)</option>
            </select>
          </label>
          ${e.form.payloadKind==="agentTurn"?c`
                  <label class="field">
                    <span>Timeout (seconds)</span>
                    <input
                      .value=${e.form.timeoutSeconds}
                      @input=${r=>e.onFormChange({timeoutSeconds:r.target.value})}
                    />
                  </label>
                `:m}
          ${o!=="none"?c`
                  <label class="field">
                    <span>${o==="webhook"?"Webhook URL":"Channel"}</span>
                    ${o==="webhook"?c`
                            <input
                              .value=${e.form.deliveryTo}
                              @input=${r=>e.onFormChange({deliveryTo:r.target.value})}
                              placeholder="https://example.invalid/cron"
                            />
                          `:c`
                            <select
                              .value=${e.form.deliveryChannel||"last"}
                              @change=${r=>e.onFormChange({deliveryChannel:r.target.value})}
                            >
                              ${t.map(r=>c`<option value=${r}>
                                    ${ay(e,r)}
                                  </option>`)}
                            </select>
                          `}
                  </label>
                  ${o==="announce"?c`
                          <label class="field">
                            <span>To</span>
                            <input
                              .value=${e.form.deliveryTo}
                              @input=${r=>e.onFormChange({deliveryTo:r.target.value})}
                              placeholder="+1555… or chat id"
                            />
                          </label>
                        `:m}
                `:m}
        </div>
        <div class="row" style="margin-top: 14px;">
          <button class="btn primary" ?disabled=${e.busy} @click=${e.onAdd}>
            ${e.busy?"Saving…":"Add job"}
          </button>
        </div>
      </div>
    </section>

    <section class="card" style="margin-top: 18px;">
      <div class="card-title">Jobs</div>
      <div class="card-sub">All scheduled jobs stored in the gateway.</div>
      ${e.jobs.length===0?c`
              <div class="muted" style="margin-top: 12px">No jobs yet.</div>
            `:c`
            <div class="list" style="margin-top: 12px;">
              ${e.jobs.map(r=>ly(r,e))}
            </div>
          `}
    </section>

    <section class="card" style="margin-top: 18px;">
      <div class="card-title">Run history</div>
      <div class="card-sub">Latest runs for ${s}.</div>
      ${e.runsJobId==null?c`
              <div class="muted" style="margin-top: 12px">Select a job to inspect run history.</div>
            `:i.length===0?c`
                <div class="muted" style="margin-top: 12px">No runs yet.</div>
              `:c`
              <div class="list" style="margin-top: 12px;">
                ${i.map(r=>uy(r,e.basePath))}
              </div>
            `}
    </section>
  `}function ry(e){const t=e.form;return t.scheduleKind==="at"?c`
      <label class="field" style="margin-top: 12px;">
        <span>Run at</span>
        <input
          type="datetime-local"
          .value=${t.scheduleAt}
          @input=${n=>e.onFormChange({scheduleAt:n.target.value})}
        />
      </label>
    `:t.scheduleKind==="every"?c`
      <div class="form-grid" style="margin-top: 12px;">
        <label class="field">
          <span>Every</span>
          <input
            .value=${t.everyAmount}
            @input=${n=>e.onFormChange({everyAmount:n.target.value})}
          />
        </label>
        <label class="field">
          <span>Unit</span>
          <select
            .value=${t.everyUnit}
            @change=${n=>e.onFormChange({everyUnit:n.target.value})}
          >
            <option value="minutes">Minutes</option>
            <option value="hours">Hours</option>
            <option value="days">Days</option>
          </select>
        </label>
      </div>
    `:c`
    <div class="form-grid" style="margin-top: 12px;">
      <label class="field">
        <span>Expression</span>
        <input
          .value=${t.cronExpr}
          @input=${n=>e.onFormChange({cronExpr:n.target.value})}
        />
      </label>
      <label class="field">
        <span>Timezone (optional)</span>
        <input
          .value=${t.cronTz}
          @input=${n=>e.onFormChange({cronTz:n.target.value})}
        />
      </label>
    </div>
  `}function ly(e,t){const s=`list-item list-item-clickable cron-job${t.runsJobId===e.id?" list-item-selected":""}`;return c`
    <div class=${s} @click=${()=>t.onLoadRuns(e.id)}>
      <div class="list-main">
        <div class="list-title">${e.name}</div>
        <div class="list-sub">${Jl(e)}</div>
        ${cy(e)}
        ${e.agentId?c`<div class="muted cron-job-agent">Agent: ${e.agentId}</div>`:m}
      </div>
      <div class="list-meta">
        ${dy(e)}
      </div>
      <div class="cron-job-footer">
        <div class="chip-row cron-job-chips">
          <span class=${`chip ${e.enabled?"chip-ok":"chip-danger"}`}>
            ${e.enabled?"enabled":"disabled"}
          </span>
          <span class="chip">${e.sessionTarget}</span>
          <span class="chip">${e.wakeMode}</span>
        </div>
        <div class="row cron-job-actions">
          <button
            class="btn"
            ?disabled=${t.busy}
            @click=${i=>{i.stopPropagation(),t.onToggle(e,!e.enabled)}}
          >
            ${e.enabled?"Disable":"Enable"}
          </button>
          <button
            class="btn"
            ?disabled=${t.busy}
            @click=${i=>{i.stopPropagation(),t.onRun(e)}}
          >
            Run
          </button>
          <button
            class="btn"
            ?disabled=${t.busy}
            @click=${i=>{i.stopPropagation(),t.onLoadRuns(e.id)}}
          >
            History
          </button>
          <button
            class="btn danger"
            ?disabled=${t.busy}
            @click=${i=>{i.stopPropagation(),t.onRemove(e)}}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  `}function cy(e){if(e.payload.kind==="systemEvent")return c`<div class="cron-job-detail">
      <span class="cron-job-detail-label">System</span>
      <span class="muted cron-job-detail-value">${e.payload.text}</span>
    </div>`;const t=e.delivery,n=t?.mode==="webhook"?t.to?` (${t.to})`:"":t?.channel||t?.to?` (${t.channel??"last"}${t.to?` -> ${t.to}`:""})`:"";return c`
    <div class="cron-job-detail">
      <span class="cron-job-detail-label">Prompt</span>
      <span class="muted cron-job-detail-value">${e.payload.message}</span>
    </div>
    ${t?c`<div class="cron-job-detail">
            <span class="cron-job-detail-label">Delivery</span>
            <span class="muted cron-job-detail-value">${t.mode}${n}</span>
          </div>`:m}
  `}function _r(e){return typeof e!="number"||!Number.isFinite(e)?"n/a":ee(e)}function dy(e){const t=e.state?.lastStatus??"n/a",n=t==="ok"?"cron-job-status-ok":t==="error"?"cron-job-status-error":t==="skipped"?"cron-job-status-skipped":"cron-job-status-na",s=e.state?.nextRunAtMs,i=e.state?.lastRunAtMs;return c`
    <div class="cron-job-state">
      <div class="cron-job-state-row">
        <span class="cron-job-state-key">Status</span>
        <span class=${`cron-job-status-pill ${n}`}>${t}</span>
      </div>
      <div class="cron-job-state-row">
        <span class="cron-job-state-key">Next</span>
        <span class="cron-job-state-value" title=${Ot(s)}>
          ${_r(s)}
        </span>
      </div>
      <div class="cron-job-state-row">
        <span class="cron-job-state-key">Last</span>
        <span class="cron-job-state-value" title=${Ot(i)}>
          ${_r(i)}
        </span>
      </div>
    </div>
  `}function uy(e,t){const n=typeof e.sessionKey=="string"&&e.sessionKey.trim().length>0?`${Es("chat",t)}?session=${encodeURIComponent(e.sessionKey)}`:null;return c`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${e.status}</div>
        <div class="list-sub">${e.summary??""}</div>
      </div>
      <div class="list-meta">
        <div>${Ot(e.ts)}</div>
        <div class="muted">${e.durationMs??0}ms</div>
        ${n?c`<div><a class="session-link" href=${n}>Open run chat</a></div>`:m}
        ${e.error?c`<div class="muted">${e.error}</div>`:m}
      </div>
    </div>
  `}function gy(e){const n=(e.status&&typeof e.status=="object"?e.status.securityAudit:null)?.summary??null,s=n?.critical??0,i=n?.warn??0,a=n?.info??0,o=s>0?"danger":i>0?"warn":"success",r=s>0?`${s} critical`:i>0?`${i} warnings`:"No critical issues";return c`
    <section class="grid grid-cols-2">
      <div class="card">
        <div class="row" style="justify-content: space-between;">
          <div>
            <div class="card-title">Snapshots</div>
            <div class="card-sub">Status, health, and heartbeat data.</div>
          </div>
          <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?"Refreshing…":"Refresh"}
          </button>
        </div>
        <div class="stack" style="margin-top: 12px;">
          <div>
            <div class="muted">Status</div>
            ${n?c`<div class="callout ${o}" style="margin-top: 8px;">
                  Security audit: ${r}${a>0?` · ${a} info`:""}. Run
                  <span class="mono">openclaw security audit --deep</span> for details.
                </div>`:m}
            <pre class="code-block">${JSON.stringify(e.status??{},null,2)}</pre>
          </div>
          <div>
            <div class="muted">Health</div>
            <pre class="code-block">${JSON.stringify(e.health??{},null,2)}</pre>
          </div>
          <div>
            <div class="muted">Last heartbeat</div>
            <pre class="code-block">${JSON.stringify(e.heartbeat??{},null,2)}</pre>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-title">Manual RPC</div>
        <div class="card-sub">Send a raw gateway method with JSON params.</div>
        <div class="form-grid" style="margin-top: 16px;">
          <label class="field">
            <span>Method</span>
            <input
              .value=${e.callMethod}
              @input=${l=>e.onCallMethodChange(l.target.value)}
              placeholder="system-presence"
            />
          </label>
          <label class="field">
            <span>Params (JSON)</span>
            <textarea
              .value=${e.callParams}
              @input=${l=>e.onCallParamsChange(l.target.value)}
              rows="6"
            ></textarea>
          </label>
        </div>
        <div class="row" style="margin-top: 12px;">
          <button class="btn primary" @click=${e.onCall}>Call</button>
        </div>
        ${e.callError?c`<div class="callout danger" style="margin-top: 12px;">
              ${e.callError}
            </div>`:m}
        ${e.callResult?c`<pre class="code-block" style="margin-top: 12px;">${e.callResult}</pre>`:m}
      </div>
    </section>

    <section class="card" style="margin-top: 18px;">
      <div class="card-title">Models</div>
      <div class="card-sub">Catalog from models.list.</div>
      <pre class="code-block" style="margin-top: 12px;">${JSON.stringify(e.models??[],null,2)}</pre>
    </section>

    <section class="card" style="margin-top: 18px;">
      <div class="card-title">Event Log</div>
      <div class="card-sub">Latest gateway events.</div>
      ${e.eventLog.length===0?c`
              <div class="muted" style="margin-top: 12px">No events yet.</div>
            `:c`
            <div class="list" style="margin-top: 12px;">
              ${e.eventLog.map(l=>c`
                  <div class="list-item">
                    <div class="list-main">
                      <div class="list-title">${l.event}</div>
                      <div class="list-sub">${new Date(l.ts).toLocaleTimeString()}</div>
                    </div>
                    <div class="list-meta">
                      <pre class="code-block">${nh(l.payload)}</pre>
                    </div>
                  </div>
                `)}
            </div>
          `}
    </section>
  `}function py(e){const t=Math.max(0,e),n=Math.floor(t/1e3);if(n<60)return`${n}s`;const s=Math.floor(n/60);return s<60?`${s}m`:`${Math.floor(s/60)}h`}function Tt(e,t){return t?c`<div class="exec-approval-meta-row"><span>${e}</span><span>${t}</span></div>`:m}function fy(e){const t=e.execApprovalQueue[0];if(!t)return m;const n=t.request,s=t.expiresAtMs-Date.now(),i=s>0?`expires in ${py(s)}`:"expired",a=e.execApprovalQueue.length;return c`
    <div class="exec-approval-overlay" role="dialog" aria-live="polite">
      <div class="exec-approval-card">
        <div class="exec-approval-header">
          <div>
            <div class="exec-approval-title">Exec approval needed</div>
            <div class="exec-approval-sub">${i}</div>
          </div>
          ${a>1?c`<div class="exec-approval-queue">${a} pending</div>`:m}
        </div>
        <div class="exec-approval-command mono">${n.command}</div>
        <div class="exec-approval-meta">
          ${Tt("Host",n.host)}
          ${Tt("Agent",n.agentId)}
          ${Tt("Session",n.sessionKey)}
          ${Tt("CWD",n.cwd)}
          ${Tt("Resolved",n.resolvedPath)}
          ${Tt("Security",n.security)}
          ${Tt("Ask",n.ask)}
        </div>
        ${e.execApprovalError?c`<div class="exec-approval-error">${e.execApprovalError}</div>`:m}
        <div class="exec-approval-actions">
          <button
            class="btn primary"
            ?disabled=${e.execApprovalBusy}
            @click=${()=>e.handleExecApprovalDecision("allow-once")}
          >
            Allow once
          </button>
          <button
            class="btn"
            ?disabled=${e.execApprovalBusy}
            @click=${()=>e.handleExecApprovalDecision("allow-always")}
          >
            Always allow
          </button>
          <button
            class="btn danger"
            ?disabled=${e.execApprovalBusy}
            @click=${()=>e.handleExecApprovalDecision("deny")}
          >
            Deny
          </button>
        </div>
      </div>
    </div>
  `}function hy(e){const{pendingGatewayUrl:t}=e;return t?c`
    <div class="exec-approval-overlay" role="dialog" aria-modal="true" aria-live="polite">
      <div class="exec-approval-card">
        <div class="exec-approval-header">
          <div>
            <div class="exec-approval-title">Change Gateway URL</div>
            <div class="exec-approval-sub">This will reconnect to a different gateway server</div>
          </div>
        </div>
        <div class="exec-approval-command mono">${t}</div>
        <div class="callout danger" style="margin-top: 12px;">
          Only confirm if you trust this URL. Malicious URLs can compromise your system.
        </div>
        <div class="exec-approval-actions">
          <button
            class="btn primary"
            @click=${()=>e.handleGatewayUrlConfirm()}
          >
            Confirm
          </button>
          <button
            class="btn"
            @click=${()=>e.handleGatewayUrlCancel()}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  `:m}function my(e){return c`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">Connected Instances</div>
          <div class="card-sub">Presence beacons from the gateway and clients.</div>
        </div>
        <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
          ${e.loading?"Loading…":"Refresh"}
        </button>
      </div>
      ${e.lastError?c`<div class="callout danger" style="margin-top: 12px;">
            ${e.lastError}
          </div>`:m}
      ${e.statusMessage?c`<div class="callout" style="margin-top: 12px;">
            ${e.statusMessage}
          </div>`:m}
      <div class="list" style="margin-top: 16px;">
        ${e.entries.length===0?c`
                <div class="muted">No instances reported yet.</div>
              `:e.entries.map(t=>vy(t))}
      </div>
    </section>
  `}function vy(e){const t=e.lastInputSeconds!=null?`${e.lastInputSeconds}s ago`:"n/a",n=e.mode??"unknown",s=Array.isArray(e.roles)?e.roles.filter(Boolean):[],i=Array.isArray(e.scopes)?e.scopes.filter(Boolean):[],a=i.length>0?i.length>3?`${i.length} scopes`:`scopes: ${i.join(", ")}`:null;return c`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${e.host??"unknown host"}</div>
        <div class="list-sub">${Xf(e)}</div>
        <div class="chip-row">
          <span class="chip">${n}</span>
          ${s.map(o=>c`<span class="chip">${o}</span>`)}
          ${a?c`<span class="chip">${a}</span>`:m}
          ${e.platform?c`<span class="chip">${e.platform}</span>`:m}
          ${e.deviceFamily?c`<span class="chip">${e.deviceFamily}</span>`:m}
          ${e.modelIdentifier?c`<span class="chip">${e.modelIdentifier}</span>`:m}
          ${e.version?c`<span class="chip">${e.version}</span>`:m}
        </div>
      </div>
      <div class="list-meta">
        <div>${eh(e)}</div>
        <div class="muted">Last input ${t}</div>
        <div class="muted">Reason ${e.reason??""}</div>
      </div>
    </div>
  `}const Er=["trace","debug","info","warn","error","fatal"];function by(e){if(!e)return"";const t=new Date(e);return Number.isNaN(t.getTime())?e:t.toLocaleTimeString()}function yy(e,t){return t?[e.message,e.subsystem,e.raw].filter(Boolean).join(" ").toLowerCase().includes(t):!0}function xy(e){const t=e.filterText.trim().toLowerCase(),n=Er.some(a=>!e.levelFilters[a]),s=e.entries.filter(a=>a.level&&!e.levelFilters[a.level]?!1:yy(a,t)),i=t||n?"filtered":"visible";return c`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">Logs</div>
          <div class="card-sub">Gateway file logs (JSONL).</div>
        </div>
        <div class="row" style="gap: 8px;">
          <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?"Loading…":"Refresh"}
          </button>
          <button
            class="btn"
            ?disabled=${s.length===0}
            @click=${()=>e.onExport(s.map(a=>a.raw),i)}
          >
            Export ${i}
          </button>
        </div>
      </div>

      <div class="filters" style="margin-top: 14px;">
        <label class="field" style="min-width: 220px;">
          <span>Filter</span>
          <input
            .value=${e.filterText}
            @input=${a=>e.onFilterTextChange(a.target.value)}
            placeholder="Search logs"
          />
        </label>
        <label class="field checkbox">
          <span>Auto-follow</span>
          <input
            type="checkbox"
            .checked=${e.autoFollow}
            @change=${a=>e.onToggleAutoFollow(a.target.checked)}
          />
        </label>
      </div>

      <div class="chip-row" style="margin-top: 12px;">
        ${Er.map(a=>c`
            <label class="chip log-chip ${a}">
              <input
                type="checkbox"
                .checked=${e.levelFilters[a]}
                @change=${o=>e.onLevelToggle(a,o.target.checked)}
              />
              <span>${a}</span>
            </label>
          `)}
      </div>

      ${e.file?c`<div class="muted" style="margin-top: 10px;">File: ${e.file}</div>`:m}
      ${e.truncated?c`
              <div class="callout" style="margin-top: 10px">Log output truncated; showing latest chunk.</div>
            `:m}
      ${e.error?c`<div class="callout danger" style="margin-top: 10px;">${e.error}</div>`:m}

      <div class="log-stream" style="margin-top: 12px;" @scroll=${e.onScroll}>
        ${s.length===0?c`
                <div class="muted" style="padding: 12px">No log entries.</div>
              `:s.map(a=>c`
                <div class="log-row">
                  <div class="log-time mono">${by(a.time)}</div>
                  <div class="log-level ${a.level??""}">${a.level??""}</div>
                  <div class="log-subsystem mono">${a.subsystem??""}</div>
                  <div class="log-message mono">${a.message??a.raw}</div>
                </div>
              `)}
      </div>
    </section>
  `}const ft="__defaults__",Lr=[{value:"deny",label:"Deny"},{value:"allowlist",label:"Allowlist"},{value:"full",label:"Full"}],$y=[{value:"off",label:"Off"},{value:"on-miss",label:"On miss"},{value:"always",label:"Always"}];function Mr(e){return e==="allowlist"||e==="full"||e==="deny"?e:"deny"}function wy(e){return e==="always"||e==="off"||e==="on-miss"?e:"on-miss"}function ky(e){const t=e?.defaults??{};return{security:Mr(t.security),ask:wy(t.ask),askFallback:Mr(t.askFallback??"deny"),autoAllowSkills:!!(t.autoAllowSkills??!1)}}function Sy(e){const t=e?.agents??{},n=Array.isArray(t.list)?t.list:[],s=[];return n.forEach(i=>{if(!i||typeof i!="object")return;const a=i,o=typeof a.id=="string"?a.id.trim():"";if(!o)return;const r=typeof a.name=="string"?a.name.trim():void 0,l=a.default===!0;s.push({id:o,name:r||void 0,isDefault:l})}),s}function Ay(e,t){const n=Sy(e),s=Object.keys(t?.agents??{}),i=new Map;n.forEach(o=>i.set(o.id,o)),s.forEach(o=>{i.has(o)||i.set(o,{id:o})});const a=Array.from(i.values());return a.length===0&&a.push({id:"main",isDefault:!0}),a.sort((o,r)=>{if(o.isDefault&&!r.isDefault)return-1;if(!o.isDefault&&r.isDefault)return 1;const l=o.name?.trim()?o.name:o.id,d=r.name?.trim()?r.name:r.id;return l.localeCompare(d)}),a}function Cy(e,t){return e===ft?ft:e&&t.some(n=>n.id===e)?e:ft}function Ty(e){const t=e.execApprovalsForm??e.execApprovalsSnapshot?.file??null,n=!!t,s=ky(t),i=Ay(e.configForm,t),a=Py(e.nodes),o=e.execApprovalsTarget;let r=o==="node"&&e.execApprovalsTargetNodeId?e.execApprovalsTargetNodeId:null;o==="node"&&r&&!a.some(g=>g.id===r)&&(r=null);const l=Cy(e.execApprovalsSelectedAgent,i),d=l!==ft?(t?.agents??{})[l]??null:null,p=Array.isArray(d?.allowlist)?d.allowlist??[]:[];return{ready:n,disabled:e.execApprovalsSaving||e.execApprovalsLoading,dirty:e.execApprovalsDirty,loading:e.execApprovalsLoading,saving:e.execApprovalsSaving,form:t,defaults:s,selectedScope:l,selectedAgent:d,agents:i,allowlist:p,target:o,targetNodeId:r,targetNodes:a,onSelectScope:e.onExecApprovalsSelectAgent,onSelectTarget:e.onExecApprovalsTargetChange,onPatch:e.onExecApprovalsPatch,onRemove:e.onExecApprovalsRemove,onLoad:e.onLoadExecApprovals,onSave:e.onSaveExecApprovals}}function _y(e){const t=e.ready,n=e.target!=="node"||!!e.targetNodeId;return c`
    <section class="card">
      <div class="row" style="justify-content: space-between; align-items: center;">
        <div>
          <div class="card-title">Exec approvals</div>
          <div class="card-sub">
            Allowlist and approval policy for <span class="mono">exec host=gateway/node</span>.
          </div>
        </div>
        <button
          class="btn"
          ?disabled=${e.disabled||!e.dirty||!n}
          @click=${e.onSave}
        >
          ${e.saving?"Saving…":"Save"}
        </button>
      </div>

      ${Ey(e)}

      ${t?c`
            ${Ly(e)}
            ${My(e)}
            ${e.selectedScope===ft?m:Ry(e)}
          `:c`<div class="row" style="margin-top: 12px; gap: 12px;">
            <div class="muted">Load exec approvals to edit allowlists.</div>
            <button class="btn" ?disabled=${e.loading||!n} @click=${e.onLoad}>
              ${e.loading?"Loading…":"Load approvals"}
            </button>
          </div>`}
    </section>
  `}function Ey(e){const t=e.targetNodes.length>0,n=e.targetNodeId??"";return c`
    <div class="list" style="margin-top: 12px;">
      <div class="list-item">
        <div class="list-main">
          <div class="list-title">Target</div>
          <div class="list-sub">
            Gateway edits local approvals; node edits the selected node.
          </div>
        </div>
        <div class="list-meta">
          <label class="field">
            <span>Host</span>
            <select
              ?disabled=${e.disabled}
              @change=${s=>{if(s.target.value==="node"){const o=e.targetNodes[0]?.id??null;e.onSelectTarget("node",n||o)}else e.onSelectTarget("gateway",null)}}
            >
              <option value="gateway" ?selected=${e.target==="gateway"}>Gateway</option>
              <option value="node" ?selected=${e.target==="node"}>Node</option>
            </select>
          </label>
          ${e.target==="node"?c`
                <label class="field">
                  <span>Node</span>
                  <select
                    ?disabled=${e.disabled||!t}
                    @change=${s=>{const a=s.target.value.trim();e.onSelectTarget("node",a||null)}}
                  >
                    <option value="" ?selected=${n===""}>Select node</option>
                    ${e.targetNodes.map(s=>c`<option
                          value=${s.id}
                          ?selected=${n===s.id}
                        >
                          ${s.label}
                        </option>`)}
                  </select>
                </label>
              `:m}
        </div>
      </div>
      ${e.target==="node"&&!t?c`
              <div class="muted">No nodes advertise exec approvals yet.</div>
            `:m}
    </div>
  `}function Ly(e){return c`
    <div class="row" style="margin-top: 12px; gap: 8px; flex-wrap: wrap;">
      <span class="label">Scope</span>
      <div class="row" style="gap: 8px; flex-wrap: wrap;">
        <button
          class="btn btn--sm ${e.selectedScope===ft?"active":""}"
          @click=${()=>e.onSelectScope(ft)}
        >
          Defaults
        </button>
        ${e.agents.map(t=>{const n=t.name?.trim()?`${t.name} (${t.id})`:t.id;return c`
            <button
              class="btn btn--sm ${e.selectedScope===t.id?"active":""}"
              @click=${()=>e.onSelectScope(t.id)}
            >
              ${n}
            </button>
          `})}
      </div>
    </div>
  `}function My(e){const t=e.selectedScope===ft,n=e.defaults,s=e.selectedAgent??{},i=t?["defaults"]:["agents",e.selectedScope],a=typeof s.security=="string"?s.security:void 0,o=typeof s.ask=="string"?s.ask:void 0,r=typeof s.askFallback=="string"?s.askFallback:void 0,l=t?n.security:a??"__default__",d=t?n.ask:o??"__default__",p=t?n.askFallback:r??"__default__",g=typeof s.autoAllowSkills=="boolean"?s.autoAllowSkills:void 0,h=g??n.autoAllowSkills,u=g==null;return c`
    <div class="list" style="margin-top: 16px;">
      <div class="list-item">
        <div class="list-main">
          <div class="list-title">Security</div>
          <div class="list-sub">
            ${t?"Default security mode.":`Default: ${n.security}.`}
          </div>
        </div>
        <div class="list-meta">
          <label class="field">
            <span>Mode</span>
            <select
              ?disabled=${e.disabled}
              @change=${f=>{const w=f.target.value;!t&&w==="__default__"?e.onRemove([...i,"security"]):e.onPatch([...i,"security"],w)}}
            >
              ${t?m:c`<option value="__default__" ?selected=${l==="__default__"}>
                    Use default (${n.security})
                  </option>`}
              ${Lr.map(f=>c`<option
                    value=${f.value}
                    ?selected=${l===f.value}
                  >
                    ${f.label}
                  </option>`)}
            </select>
          </label>
        </div>
      </div>

      <div class="list-item">
        <div class="list-main">
          <div class="list-title">Ask</div>
          <div class="list-sub">
            ${t?"Default prompt policy.":`Default: ${n.ask}.`}
          </div>
        </div>
        <div class="list-meta">
          <label class="field">
            <span>Mode</span>
            <select
              ?disabled=${e.disabled}
              @change=${f=>{const w=f.target.value;!t&&w==="__default__"?e.onRemove([...i,"ask"]):e.onPatch([...i,"ask"],w)}}
            >
              ${t?m:c`<option value="__default__" ?selected=${d==="__default__"}>
                    Use default (${n.ask})
                  </option>`}
              ${$y.map(f=>c`<option
                    value=${f.value}
                    ?selected=${d===f.value}
                  >
                    ${f.label}
                  </option>`)}
            </select>
          </label>
        </div>
      </div>

      <div class="list-item">
        <div class="list-main">
          <div class="list-title">Ask fallback</div>
          <div class="list-sub">
            ${t?"Applied when the UI prompt is unavailable.":`Default: ${n.askFallback}.`}
          </div>
        </div>
        <div class="list-meta">
          <label class="field">
            <span>Fallback</span>
            <select
              ?disabled=${e.disabled}
              @change=${f=>{const w=f.target.value;!t&&w==="__default__"?e.onRemove([...i,"askFallback"]):e.onPatch([...i,"askFallback"],w)}}
            >
              ${t?m:c`<option value="__default__" ?selected=${p==="__default__"}>
                    Use default (${n.askFallback})
                  </option>`}
              ${Lr.map(f=>c`<option
                    value=${f.value}
                    ?selected=${p===f.value}
                  >
                    ${f.label}
                  </option>`)}
            </select>
          </label>
        </div>
      </div>

      <div class="list-item">
        <div class="list-main">
          <div class="list-title">Auto-allow skill CLIs</div>
          <div class="list-sub">
            ${t?"Allow skill executables listed by the Gateway.":u?`Using default (${n.autoAllowSkills?"on":"off"}).`:`Override (${h?"on":"off"}).`}
          </div>
        </div>
        <div class="list-meta">
          <label class="field">
            <span>Enabled</span>
            <input
              type="checkbox"
              ?disabled=${e.disabled}
              .checked=${h}
              @change=${f=>{const v=f.target;e.onPatch([...i,"autoAllowSkills"],v.checked)}}
            />
          </label>
          ${!t&&!u?c`<button
                class="btn btn--sm"
                ?disabled=${e.disabled}
                @click=${()=>e.onRemove([...i,"autoAllowSkills"])}
              >
                Use default
              </button>`:m}
        </div>
      </div>
    </div>
  `}function Ry(e){const t=["agents",e.selectedScope,"allowlist"],n=e.allowlist;return c`
    <div class="row" style="margin-top: 18px; justify-content: space-between;">
      <div>
        <div class="card-title">Allowlist</div>
        <div class="card-sub">Case-insensitive glob patterns.</div>
      </div>
      <button
        class="btn btn--sm"
        ?disabled=${e.disabled}
        @click=${()=>{const s=[...n,{pattern:""}];e.onPatch(t,s)}}
      >
        Add pattern
      </button>
    </div>
    <div class="list" style="margin-top: 12px;">
      ${n.length===0?c`
              <div class="muted">No allowlist entries yet.</div>
            `:n.map((s,i)=>Iy(e,s,i))}
    </div>
  `}function Iy(e,t,n){const s=t.lastUsedAt?ee(t.lastUsedAt):"never",i=t.lastUsedCommand?xi(t.lastUsedCommand,120):null,a=t.lastResolvedPath?xi(t.lastResolvedPath,120):null;return c`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${t.pattern?.trim()?t.pattern:"New pattern"}</div>
        <div class="list-sub">Last used: ${s}</div>
        ${i?c`<div class="list-sub mono">${i}</div>`:m}
        ${a?c`<div class="list-sub mono">${a}</div>`:m}
      </div>
      <div class="list-meta">
        <label class="field">
          <span>Pattern</span>
          <input
            type="text"
            .value=${t.pattern??""}
            ?disabled=${e.disabled}
            @input=${o=>{const r=o.target;e.onPatch(["agents",e.selectedScope,"allowlist",n,"pattern"],r.value)}}
          />
        </label>
        <button
          class="btn btn--sm danger"
          ?disabled=${e.disabled}
          @click=${()=>{if(e.allowlist.length<=1){e.onRemove(["agents",e.selectedScope,"allowlist"]);return}e.onRemove(["agents",e.selectedScope,"allowlist",n])}}
        >
          Remove
        </button>
      </div>
    </div>
  `}function Py(e){const t=[];for(const n of e){if(!(Array.isArray(n.commands)?n.commands:[]).some(r=>String(r)==="system.execApprovals.get"||String(r)==="system.execApprovals.set"))continue;const a=typeof n.nodeId=="string"?n.nodeId.trim():"";if(!a)continue;const o=typeof n.displayName=="string"&&n.displayName.trim()?n.displayName.trim():a;t.push({id:a,label:o===a?a:`${o} · ${a}`})}return t.sort((n,s)=>n.label.localeCompare(s.label)),t}function Dy(e){const t=Uy(e),n=Ty(e);return c`
    ${_y(n)}
    ${zy(t)}
    ${Fy(e)}
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">Nodes</div>
          <div class="card-sub">Paired devices and live links.</div>
        </div>
        <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
          ${e.loading?"Loading…":"Refresh"}
        </button>
      </div>
      <div class="list" style="margin-top: 16px;">
        ${e.nodes.length===0?c`
                <div class="muted">No nodes found.</div>
              `:e.nodes.map(s=>Wy(s))}
      </div>
    </section>
  `}function Fy(e){const t=e.devicesList??{pending:[],paired:[]},n=Array.isArray(t.pending)?t.pending:[],s=Array.isArray(t.paired)?t.paired:[];return c`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">Devices</div>
          <div class="card-sub">Pairing requests + role tokens.</div>
        </div>
        <button class="btn" ?disabled=${e.devicesLoading} @click=${e.onDevicesRefresh}>
          ${e.devicesLoading?"Loading…":"Refresh"}
        </button>
      </div>
      ${e.devicesError?c`<div class="callout danger" style="margin-top: 12px;">${e.devicesError}</div>`:m}
      <div class="list" style="margin-top: 16px;">
        ${n.length>0?c`
              <div class="muted" style="margin-bottom: 8px;">Pending</div>
              ${n.map(i=>Ny(i,e))}
            `:m}
        ${s.length>0?c`
              <div class="muted" style="margin-top: 12px; margin-bottom: 8px;">Paired</div>
              ${s.map(i=>Oy(i,e))}
            `:m}
        ${n.length===0&&s.length===0?c`
                <div class="muted">No paired devices.</div>
              `:m}
      </div>
    </section>
  `}function Ny(e,t){const n=e.displayName?.trim()||e.deviceId,s=typeof e.ts=="number"?ee(e.ts):"n/a",i=e.role?.trim()?`role: ${e.role}`:"role: -",a=e.isRepair?" · repair":"",o=e.remoteIp?` · ${e.remoteIp}`:"";return c`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${n}</div>
        <div class="list-sub">${e.deviceId}${o}</div>
        <div class="muted" style="margin-top: 6px;">
          ${i} · requested ${s}${a}
        </div>
      </div>
      <div class="list-meta">
        <div class="row" style="justify-content: flex-end; gap: 8px; flex-wrap: wrap;">
          <button class="btn btn--sm primary" @click=${()=>t.onDeviceApprove(e.requestId)}>
            Approve
          </button>
          <button class="btn btn--sm" @click=${()=>t.onDeviceReject(e.requestId)}>
            Reject
          </button>
        </div>
      </div>
    </div>
  `}function Oy(e,t){const n=e.displayName?.trim()||e.deviceId,s=e.remoteIp?` · ${e.remoteIp}`:"",i=`roles: ${yi(e.roles)}`,a=`scopes: ${yi(e.scopes)}`,o=Array.isArray(e.tokens)?e.tokens:[];return c`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${n}</div>
        <div class="list-sub">${e.deviceId}${s}</div>
        <div class="muted" style="margin-top: 6px;">${i} · ${a}</div>
        ${o.length===0?c`
                <div class="muted" style="margin-top: 6px">Tokens: none</div>
              `:c`
              <div class="muted" style="margin-top: 10px;">Tokens</div>
              <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 6px;">
                ${o.map(r=>By(e.deviceId,r,t))}
              </div>
            `}
      </div>
    </div>
  `}function By(e,t,n){const s=t.revokedAtMs?"revoked":"active",i=`scopes: ${yi(t.scopes)}`,a=ee(t.rotatedAtMs??t.createdAtMs??t.lastUsedAtMs??null);return c`
    <div class="row" style="justify-content: space-between; gap: 8px;">
      <div class="list-sub">${t.role} · ${s} · ${i} · ${a}</div>
      <div class="row" style="justify-content: flex-end; gap: 6px; flex-wrap: wrap;">
        <button
          class="btn btn--sm"
          @click=${()=>n.onDeviceRotate(e,t.role,t.scopes)}
        >
          Rotate
        </button>
        ${t.revokedAtMs?m:c`
              <button
                class="btn btn--sm danger"
                @click=${()=>n.onDeviceRevoke(e,t.role)}
              >
                Revoke
              </button>
            `}
      </div>
    </div>
  `}function Uy(e){const t=e.configForm,n=jy(e.nodes),{defaultBinding:s,agents:i}=Ky(t),a=!!t,o=e.configSaving||e.configFormMode==="raw";return{ready:a,disabled:o,configDirty:e.configDirty,configLoading:e.configLoading,configSaving:e.configSaving,defaultBinding:s,agents:i,nodes:n,onBindDefault:e.onBindDefault,onBindAgent:e.onBindAgent,onSave:e.onSaveBindings,onLoadConfig:e.onLoadConfig,formMode:e.configFormMode}}function zy(e){const t=e.nodes.length>0,n=e.defaultBinding??"";return c`
    <section class="card">
      <div class="row" style="justify-content: space-between; align-items: center;">
        <div>
          <div class="card-title">Exec node binding</div>
          <div class="card-sub">
            Pin agents to a specific node when using <span class="mono">exec host=node</span>.
          </div>
        </div>
        <button
          class="btn"
          ?disabled=${e.disabled||!e.configDirty}
          @click=${e.onSave}
        >
          ${e.configSaving?"Saving…":"Save"}
        </button>
      </div>

      ${e.formMode==="raw"?c`
              <div class="callout warn" style="margin-top: 12px">
                Switch the Config tab to <strong>Form</strong> mode to edit bindings here.
              </div>
            `:m}

      ${e.ready?c`
            <div class="list" style="margin-top: 16px;">
              <div class="list-item">
                <div class="list-main">
                  <div class="list-title">Default binding</div>
                  <div class="list-sub">Used when agents do not override a node binding.</div>
                </div>
                <div class="list-meta">
                  <label class="field">
                    <span>Node</span>
                    <select
                      ?disabled=${e.disabled||!t}
                      @change=${s=>{const a=s.target.value.trim();e.onBindDefault(a||null)}}
                    >
                      <option value="" ?selected=${n===""}>Any node</option>
                      ${e.nodes.map(s=>c`<option
                            value=${s.id}
                            ?selected=${n===s.id}
                          >
                            ${s.label}
                          </option>`)}
                    </select>
                  </label>
                  ${t?m:c`
                          <div class="muted">No nodes with system.run available.</div>
                        `}
                </div>
              </div>

              ${e.agents.length===0?c`
                      <div class="muted">No agents found.</div>
                    `:e.agents.map(s=>Hy(s,e))}
            </div>
          `:c`<div class="row" style="margin-top: 12px; gap: 12px;">
            <div class="muted">Load config to edit bindings.</div>
            <button class="btn" ?disabled=${e.configLoading} @click=${e.onLoadConfig}>
              ${e.configLoading?"Loading…":"Load config"}
            </button>
          </div>`}
    </section>
  `}function Hy(e,t){const n=e.binding??"__default__",s=e.name?.trim()?`${e.name} (${e.id})`:e.id,i=t.nodes.length>0;return c`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${s}</div>
        <div class="list-sub">
          ${e.isDefault?"default agent":"agent"} ·
          ${n==="__default__"?`uses default (${t.defaultBinding??"any"})`:`override: ${e.binding}`}
        </div>
      </div>
      <div class="list-meta">
        <label class="field">
          <span>Binding</span>
          <select
            ?disabled=${t.disabled||!i}
            @change=${a=>{const r=a.target.value.trim();t.onBindAgent(e.index,r==="__default__"?null:r)}}
          >
            <option value="__default__" ?selected=${n==="__default__"}>
              Use default
            </option>
            ${t.nodes.map(a=>c`<option
                  value=${a.id}
                  ?selected=${n===a.id}
                >
                  ${a.label}
                </option>`)}
          </select>
        </label>
      </div>
    </div>
  `}function jy(e){const t=[];for(const n of e){if(!(Array.isArray(n.commands)?n.commands:[]).some(r=>String(r)==="system.run"))continue;const a=typeof n.nodeId=="string"?n.nodeId.trim():"";if(!a)continue;const o=typeof n.displayName=="string"&&n.displayName.trim()?n.displayName.trim():a;t.push({id:a,label:o===a?a:`${o} · ${a}`})}return t.sort((n,s)=>n.label.localeCompare(s.label)),t}function Ky(e){const t={id:"main",name:void 0,index:0,isDefault:!0,binding:null};if(!e||typeof e!="object")return{defaultBinding:null,agents:[t]};const s=(e.tools??{}).exec??{},i=typeof s.node=="string"&&s.node.trim()?s.node.trim():null,a=e.agents??{},o=Array.isArray(a.list)?a.list:[];if(o.length===0)return{defaultBinding:i,agents:[t]};const r=[];return o.forEach((l,d)=>{if(!l||typeof l!="object")return;const p=l,g=typeof p.id=="string"?p.id.trim():"";if(!g)return;const h=typeof p.name=="string"?p.name.trim():void 0,u=p.default===!0,v=(p.tools??{}).exec??{},w=typeof v.node=="string"&&v.node.trim()?v.node.trim():null;r.push({id:g,name:h||void 0,index:d,isDefault:u,binding:w})}),r.length===0&&r.push(t),{defaultBinding:i,agents:r}}function Wy(e){const t=!!e.connected,n=!!e.paired,s=typeof e.displayName=="string"&&e.displayName.trim()||(typeof e.nodeId=="string"?e.nodeId:"unknown"),i=Array.isArray(e.caps)?e.caps:[],a=Array.isArray(e.commands)?e.commands:[];return c`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${s}</div>
        <div class="list-sub">
          ${typeof e.nodeId=="string"?e.nodeId:""}
          ${typeof e.remoteIp=="string"?` · ${e.remoteIp}`:""}
          ${typeof e.version=="string"?` · ${e.version}`:""}
        </div>
        <div class="chip-row" style="margin-top: 6px;">
          <span class="chip">${n?"paired":"unpaired"}</span>
          <span class="chip ${t?"chip-ok":"chip-warn"}">
            ${t?"connected":"offline"}
          </span>
          ${i.slice(0,12).map(o=>c`<span class="chip">${String(o)}</span>`)}
          ${a.slice(0,8).map(o=>c`<span class="chip">${String(o)}</span>`)}
        </div>
      </div>
    </div>
  `}function qy(e){const t=e.hello?.snapshot,n=t?.uptimeMs?oa(t.uptimeMs):P("common.na"),s=t?.policy?.tickIntervalMs?`${t.policy.tickIntervalMs}ms`:P("common.na"),a=t?.authMode==="trusted-proxy",o=(()=>{if(e.connected||!e.lastError)return null;const d=e.lastError.toLowerCase();if(!(d.includes("unauthorized")||d.includes("connect failed")))return null;const g=!!e.settings.token.trim(),h=!!e.password.trim();return!g&&!h?c`
        <div class="muted" style="margin-top: 8px">
          ${P("overview.auth.required")}
          <div style="margin-top: 6px">
            <span class="mono">openclaw dashboard --no-open</span> → tokenized URL<br />
            <span class="mono">openclaw doctor --generate-gateway-token</span> → set token
          </div>
          <div style="margin-top: 6px">
            <a
              class="session-link"
              href="https://docs.openclaw.ai/web/dashboard"
              target="_blank"
              rel="noreferrer"
              title="Control UI auth docs (opens in new tab)"
              >Docs: Control UI auth</a
            >
          </div>
        </div>
      `:c`
      <div class="muted" style="margin-top: 8px">
        ${P("overview.auth.failed",{command:"openclaw dashboard --no-open"})}
        <div style="margin-top: 6px">
          <a
            class="session-link"
            href="https://docs.openclaw.ai/web/dashboard"
            target="_blank"
            rel="noreferrer"
            title="Control UI auth docs (opens in new tab)"
            >Docs: Control UI auth</a
          >
        </div>
      </div>
    `})(),r=(()=>{if(e.connected||!e.lastError||(typeof window<"u"?window.isSecureContext:!0))return null;const p=e.lastError.toLowerCase();return!p.includes("secure context")&&!p.includes("device identity required")?null:c`
      <div class="muted" style="margin-top: 8px">
        ${P("overview.insecure.hint",{url:"http://127.0.0.1:18789"})}
        <div style="margin-top: 6px">
          ${P("overview.insecure.stayHttp",{config:"gateway.controlUi.allowInsecureAuth: true"})}
        </div>
        <div style="margin-top: 6px">
          <a
            class="session-link"
            href="https://docs.openclaw.ai/gateway/tailscale"
            target="_blank"
            rel="noreferrer"
            title="Tailscale Serve docs (opens in new tab)"
            >Docs: Tailscale Serve</a
          >
          <span class="muted"> · </span>
          <a
            class="session-link"
            href="https://docs.openclaw.ai/web/control-ui#insecure-http"
            target="_blank"
            rel="noreferrer"
            title="Insecure HTTP docs (opens in new tab)"
            >Docs: Insecure HTTP</a
          >
        </div>
      </div>
    `})(),l=En.getLocale();return c`
    <section class="grid grid-cols-2">
      <div class="card">
        <div class="card-title">${P("overview.access.title")}</div>
        <div class="card-sub">${P("overview.access.subtitle")}</div>
        <div class="form-grid" style="margin-top: 16px;">
          <label class="field">
            <span>${P("overview.access.wsUrl")}</span>
            <input
              .value=${e.settings.gatewayUrl}
              @input=${d=>{const p=d.target.value;e.onSettingsChange({...e.settings,gatewayUrl:p})}}
              placeholder="ws://100.x.y.z:18789"
            />
          </label>
          ${a?"":c`
                <label class="field">
                  <span>${P("overview.access.token")}</span>
                  <input
                    .value=${e.settings.token}
                    @input=${d=>{const p=d.target.value;e.onSettingsChange({...e.settings,token:p})}}
                    placeholder="OPENCLAW_GATEWAY_TOKEN"
                  />
                </label>
                <label class="field">
                  <span>${P("overview.access.password")}</span>
                  <input
                    type="password"
                    .value=${e.password}
                    @input=${d=>{const p=d.target.value;e.onPasswordChange(p)}}
                    placeholder="system or shared password"
                  />
                </label>
              `}
          <label class="field">
            <span>${P("overview.access.sessionKey")}</span>
            <input
              .value=${e.settings.sessionKey}
              @input=${d=>{const p=d.target.value;e.onSessionKeyChange(p)}}
            />
          </label>
          <label class="field">
            <span>${P("overview.access.language")}</span>
            <select
              .value=${l}
              @change=${d=>{const p=d.target.value;En.setLocale(p),e.onSettingsChange({...e.settings,locale:p})}}
            >
              <option value="en">${P("languages.en")}</option>
              <option value="zh-CN">${P("languages.zhCN")}</option>
              <option value="zh-TW">${P("languages.zhTW")}</option>
              <option value="pt-BR">${P("languages.ptBR")}</option>
            </select>
          </label>
        </div>
        <div class="row" style="margin-top: 14px;">
          <button class="btn" @click=${()=>e.onConnect()}>${P("common.connect")}</button>
          <button class="btn" @click=${()=>e.onRefresh()}>${P("common.refresh")}</button>
          <span class="muted">${P(a?"overview.access.trustedProxy":"overview.access.connectHint")}</span>
        </div>
      </div>

      <div class="card">
        <div class="card-title">${P("overview.snapshot.title")}</div>
        <div class="card-sub">${P("overview.snapshot.subtitle")}</div>
        <div class="stat-grid" style="margin-top: 16px;">
          <div class="stat">
            <div class="stat-label">${P("overview.snapshot.status")}</div>
            <div class="stat-value ${e.connected?"ok":"warn"}">
              ${e.connected?P("common.ok"):P("common.offline")}
            </div>
          </div>
          <div class="stat">
            <div class="stat-label">${P("overview.snapshot.uptime")}</div>
            <div class="stat-value">${n}</div>
          </div>
          <div class="stat">
            <div class="stat-label">${P("overview.snapshot.tickInterval")}</div>
            <div class="stat-value">${s}</div>
          </div>
          <div class="stat">
            <div class="stat-label">${P("overview.snapshot.lastChannelsRefresh")}</div>
            <div class="stat-value">
              ${e.lastChannelsRefresh?ee(e.lastChannelsRefresh):P("common.na")}
            </div>
          </div>
        </div>
        ${e.lastError?c`<div class="callout danger" style="margin-top: 14px;">
              <div>${e.lastError}</div>
              ${o??""}
              ${r??""}
            </div>`:c`
                <div class="callout" style="margin-top: 14px">
                  ${P("overview.snapshot.channelsHint")}
                </div>
              `}
      </div>
    </section>

    <section class="grid grid-cols-3" style="margin-top: 18px;">
      <div class="card stat-card">
        <div class="stat-label">${P("overview.stats.instances")}</div>
        <div class="stat-value">${e.presenceCount}</div>
        <div class="muted">${P("overview.stats.instancesHint")}</div>
      </div>
      <div class="card stat-card">
        <div class="stat-label">${P("overview.stats.sessions")}</div>
        <div class="stat-value">${e.sessionsCount??P("common.na")}</div>
        <div class="muted">${P("overview.stats.sessionsHint")}</div>
      </div>
      <div class="card stat-card">
        <div class="stat-label">${P("overview.stats.cron")}</div>
        <div class="stat-value">
          ${e.cronEnabled==null?P("common.na"):e.cronEnabled?P("common.enabled"):P("common.disabled")}
        </div>
        <div class="muted">${P("overview.stats.cronNext",{time:Aa(e.cronNext)})}</div>
      </div>
    </section>

    <section class="card" style="margin-top: 18px;">
      <div class="card-title">${P("overview.notes.title")}</div>
      <div class="card-sub">${P("overview.notes.subtitle")}</div>
      <div class="note-grid" style="margin-top: 14px;">
        <div>
          <div class="note-title">${P("overview.notes.tailscaleTitle")}</div>
          <div class="muted">
            ${P("overview.notes.tailscaleText")}
          </div>
        </div>
        <div>
          <div class="note-title">${P("overview.notes.sessionTitle")}</div>
          <div class="muted">${P("overview.notes.sessionText")}</div>
        </div>
        <div>
          <div class="note-title">${P("overview.notes.cronTitle")}</div>
          <div class="muted">${P("overview.notes.cronText")}</div>
        </div>
      </div>
    </section>
  `}const Gy=["","off","minimal","low","medium","high","xhigh"],Vy=["","off","on"],Qy=[{value:"",label:"inherit"},{value:"off",label:"off (explicit)"},{value:"on",label:"on"},{value:"full",label:"full"}],Yy=["","off","on","stream"];function Zy(e){if(!e)return"";const t=e.trim().toLowerCase();return t==="z.ai"||t==="z-ai"?"zai":t}function Nc(e){return Zy(e)==="zai"}function Jy(e){return Nc(e)?Vy:Gy}function Rr(e,t){return t?e.includes(t)?[...e]:[...e,t]:[...e]}function Xy(e,t){return t?e.some(n=>n.value===t)?[...e]:[...e,{value:t,label:`${t} (custom)`}]:[...e]}function e0(e,t){return!t||!e||e==="off"?e:"on"}function t0(e,t){return e?t&&e==="on"?"low":e:null}function n0(e){const t=e.result?.sessions??[];return c`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">Sessions</div>
          <div class="card-sub">Active session keys and per-session overrides.</div>
        </div>
        <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
          ${e.loading?"Loading…":"Refresh"}
        </button>
      </div>

      <div class="filters" style="margin-top: 14px;">
        <label class="field">
          <span>Active within (minutes)</span>
          <input
            .value=${e.activeMinutes}
            @input=${n=>e.onFiltersChange({activeMinutes:n.target.value,limit:e.limit,includeGlobal:e.includeGlobal,includeUnknown:e.includeUnknown})}
          />
        </label>
        <label class="field">
          <span>Limit</span>
          <input
            .value=${e.limit}
            @input=${n=>e.onFiltersChange({activeMinutes:e.activeMinutes,limit:n.target.value,includeGlobal:e.includeGlobal,includeUnknown:e.includeUnknown})}
          />
        </label>
        <label class="field checkbox">
          <span>Include global</span>
          <input
            type="checkbox"
            .checked=${e.includeGlobal}
            @change=${n=>e.onFiltersChange({activeMinutes:e.activeMinutes,limit:e.limit,includeGlobal:n.target.checked,includeUnknown:e.includeUnknown})}
          />
        </label>
        <label class="field checkbox">
          <span>Include unknown</span>
          <input
            type="checkbox"
            .checked=${e.includeUnknown}
            @change=${n=>e.onFiltersChange({activeMinutes:e.activeMinutes,limit:e.limit,includeGlobal:e.includeGlobal,includeUnknown:n.target.checked})}
          />
        </label>
      </div>

      ${e.error?c`<div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:m}

      <div class="muted" style="margin-top: 12px;">
        ${e.result?`Store: ${e.result.path}`:""}
      </div>

      <div class="table" style="margin-top: 16px;">
        <div class="table-head">
          <div>Key</div>
          <div>Label</div>
          <div>Kind</div>
          <div>Updated</div>
          <div>Tokens</div>
          <div>Thinking</div>
          <div>Verbose</div>
          <div>Reasoning</div>
          <div>Actions</div>
        </div>
        ${t.length===0?c`
                <div class="muted">No sessions found.</div>
              `:t.map(n=>s0(n,e.basePath,e.onPatch,e.onDelete,e.loading))}
      </div>
    </section>
  `}function s0(e,t,n,s,i){const a=e.updatedAt?ee(e.updatedAt):"n/a",o=e.thinkingLevel??"",r=Nc(e.modelProvider),l=e0(o,r),d=Rr(Jy(e.modelProvider),l),p=e.verboseLevel??"",g=Xy(Qy,p),h=e.reasoningLevel??"",u=Rr(Yy,h),f=typeof e.displayName=="string"&&e.displayName.trim().length>0?e.displayName.trim():null,v=typeof e.label=="string"?e.label.trim():"",w=!!(f&&f!==e.key&&f!==v),S=e.kind!=="global",C=S?`${Es("chat",t)}?session=${encodeURIComponent(e.key)}`:null;return c`
    <div class="table-row">
      <div class="mono session-key-cell">
        ${S?c`<a href=${C} class="session-link">${e.key}</a>`:e.key}
        ${w?c`<span class="muted session-key-display-name">${f}</span>`:m}
      </div>
      <div>
        <input
          .value=${e.label??""}
          ?disabled=${i}
          placeholder="(optional)"
          @change=${k=>{const A=k.target.value.trim();n(e.key,{label:A||null})}}
        />
      </div>
      <div>${e.kind}</div>
      <div>${a}</div>
      <div>${th(e)}</div>
      <div>
        <select
          ?disabled=${i}
          @change=${k=>{const A=k.target.value;n(e.key,{thinkingLevel:t0(A,r)})}}
        >
          ${d.map(k=>c`<option value=${k} ?selected=${l===k}>
                ${k||"inherit"}
              </option>`)}
        </select>
      </div>
      <div>
        <select
          ?disabled=${i}
          @change=${k=>{const A=k.target.value;n(e.key,{verboseLevel:A||null})}}
        >
          ${g.map(k=>c`<option value=${k.value} ?selected=${p===k.value}>
                ${k.label}
              </option>`)}
        </select>
      </div>
      <div>
        <select
          ?disabled=${i}
          @change=${k=>{const A=k.target.value;n(e.key,{reasoningLevel:A||null})}}
        >
          ${u.map(k=>c`<option value=${k} ?selected=${h===k}>
                ${k||"inherit"}
              </option>`)}
        </select>
      </div>
      <div>
        <button class="btn danger" ?disabled=${i} @click=${()=>s(e.key)}>
          Delete
        </button>
      </div>
    </div>
  `}function i0(e){const t=e.report?.skills??[],n=e.filter.trim().toLowerCase(),s=n?t.filter(a=>[a.name,a.description,a.source].join(" ").toLowerCase().includes(n)):t,i=tc(s);return c`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">Skills</div>
          <div class="card-sub">Bundled, managed, and workspace skills.</div>
        </div>
        <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
          ${e.loading?"Loading…":"Refresh"}
        </button>
      </div>

      <div class="filters" style="margin-top: 14px;">
        <label class="field" style="flex: 1;">
          <span>Filter</span>
          <input
            .value=${e.filter}
            @input=${a=>e.onFilterChange(a.target.value)}
            placeholder="Search skills"
          />
        </label>
        <div class="muted">${s.length} shown</div>
      </div>

      ${e.error?c`<div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:m}

      ${s.length===0?c`
              <div class="muted" style="margin-top: 16px">No skills found.</div>
            `:c`
            <div class="agent-skills-groups" style="margin-top: 16px;">
              ${i.map(a=>{const o=a.id==="workspace"||a.id==="built-in";return c`
                  <details class="agent-skills-group" ?open=${!o}>
                    <summary class="agent-skills-header">
                      <span>${a.label}</span>
                      <span class="muted">${a.skills.length}</span>
                    </summary>
                    <div class="list skills-grid">
                      ${a.skills.map(r=>a0(r,e))}
                    </div>
                  </details>
                `})}
            </div>
          `}
    </section>
  `}function a0(e,t){const n=t.busyKey===e.skillKey,s=t.edits[e.skillKey]??"",i=t.messages[e.skillKey]??null,a=e.install.length>0&&e.missing.bins.length>0,o=!!(e.bundled&&e.source!=="openclaw-bundled"),r=nc(e),l=sc(e);return c`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">
          ${e.emoji?`${e.emoji} `:""}${e.name}
        </div>
        <div class="list-sub">${xi(e.description,140)}</div>
        ${ic({skill:e,showBundledBadge:o})}
        ${r.length>0?c`
              <div class="muted" style="margin-top: 6px;">
                Missing: ${r.join(", ")}
              </div>
            `:m}
        ${l.length>0?c`
              <div class="muted" style="margin-top: 6px;">
                Reason: ${l.join(", ")}
              </div>
            `:m}
      </div>
      <div class="list-meta">
        <div class="row" style="justify-content: flex-end; flex-wrap: wrap;">
          <button
            class="btn"
            ?disabled=${n}
            @click=${()=>t.onToggle(e.skillKey,e.disabled)}
          >
            ${e.disabled?"Enable":"Disable"}
          </button>
          ${a?c`<button
                class="btn"
                ?disabled=${n}
                @click=${()=>t.onInstall(e.skillKey,e.name,e.install[0].id)}
              >
                ${n?"Installing…":e.install[0].label}
              </button>`:m}
        </div>
        ${i?c`<div
              class="muted"
              style="margin-top: 8px; color: ${i.kind==="error"?"var(--danger-color, #d14343)":"var(--success-color, #0a7f5a)"};"
            >
              ${i.message}
            </div>`:m}
        ${e.primaryEnv?c`
              <div class="field" style="margin-top: 10px;">
                <span>API key</span>
                <input
                  type="password"
                  .value=${s}
                  @input=${d=>t.onEdit(e.skillKey,d.target.value)}
                />
              </div>
              <button
                class="btn primary"
                style="margin-top: 8px;"
                ?disabled=${n}
                @click=${()=>t.onSaveKey(e.skillKey)}
              >
                Save key
              </button>
            `:m}
      </div>
    </div>
  `}const o0=/^data:/i,r0=/^https?:\/\//i;function l0(e){const t=e.agentsList?.agents??[],s=Qr(e.sessionKey)?.agentId??e.agentsList?.defaultId??"main",a=t.find(r=>r.id===s)?.identity,o=a?.avatarUrl??a?.avatar;if(o)return o0.test(o)||r0.test(o)?o:a?.avatarUrl}function c0(e){const t=e.presenceEntries.length,n=e.sessionsResult?.count??null,s=e.cronStatus?.nextWakeAtMs??null,i=e.connected?null:P("chat.disconnected"),a=e.tab==="chat",o=a&&(e.settings.chatFocusMode||e.onboarding),r=e.onboarding?!1:e.settings.chatShowThinking,l=l0(e),d=e.chatAvatarUrl??l??null,p=e.configForm??e.configSnapshot?.config,g=an(e.basePath??""),h=e.agentsSelectedId??e.agentsList?.defaultId??e.agentsList?.agents?.[0]?.id??null;return c`
    <div class="shell ${a?"shell--chat":""} ${o?"shell--chat-focus":""} ${e.settings.navCollapsed?"shell--nav-collapsed":""} ${e.onboarding?"shell--onboarding":""}">
      <header class="topbar">
        <div class="topbar-left">
          <button
            class="nav-collapse-toggle"
            @click=${()=>e.applySettings({...e.settings,navCollapsed:!e.settings.navCollapsed})}
            title="${e.settings.navCollapsed?P("nav.expand"):P("nav.collapse")}"
            aria-label="${e.settings.navCollapsed?P("nav.expand"):P("nav.collapse")}"
          >
            <span class="nav-collapse-toggle__icon">${ge.menu}</span>
          </button>
          <div class="brand">
            <div class="brand-logo">
              <img src=${g?`${g}/favicon.svg`:"/favicon.svg"} alt="OpenClaw" />
            </div>
            <div class="brand-text">
              <div class="brand-title">OPENCLAW</div>
              <div class="brand-sub">Gateway Dashboard</div>
            </div>
          </div>
        </div>
        <div class="topbar-status">
          <div class="pill">
            <span class="statusDot ${e.connected?"ok":""}"></span>
            <span>${P("common.health")}</span>
            <span class="mono">${e.connected?P("common.ok"):P("common.offline")}</span>
          </div>
          ${Gf(e)}
        </div>
      </header>
      <aside class="nav ${e.settings.navCollapsed?"nav--collapsed":""}">
        ${sg.map(u=>{const f=e.settings.navGroupsCollapsed[u.label]??!1,v=u.tabs.some(w=>w===e.tab);return c`
            <div class="nav-group ${f&&!v?"nav-group--collapsed":""}">
              <button
                class="nav-label"
                @click=${()=>{const w={...e.settings.navGroupsCollapsed};w[u.label]=!f,e.applySettings({...e.settings,navGroupsCollapsed:w})}}
                aria-expanded=${!f}
              >
                <span class="nav-label__text">${P(`nav.${u.label}`)}</span>
                <span class="nav-label__chevron">${f?"+":"−"}</span>
              </button>
              <div class="nav-group__items">
                ${u.tabs.map(w=>Uf(e,w))}
              </div>
            </div>
          `})}
        <div class="nav-group nav-group--links">
          <div class="nav-label nav-label--static">
            <span class="nav-label__text">${P("common.resources")}</span>
          </div>
          <div class="nav-group__items">
            <a
              class="nav-item nav-item--external"
              href="https://docs.openclaw.ai"
              target="_blank"
              rel="noreferrer"
              title="${P("common.docs")} (opens in new tab)"
            >
              <span class="nav-item__icon" aria-hidden="true">${ge.book}</span>
              <span class="nav-item__text">${P("common.docs")}</span>
            </a>
          </div>
        </div>
      </aside>
      <main class="content ${a?"content--chat":""}">
        ${e.updateAvailable?c`<div class="update-banner callout danger" role="alert">
              <strong>Update available:</strong> v${e.updateAvailable.latestVersion}
              (running v${e.updateAvailable.currentVersion}).
              <button
                class="btn btn--sm update-banner__btn"
                ?disabled=${e.updateRunning||!e.connected}
                @click=${()=>fo(e)}
              >${e.updateRunning?"Updating…":"Update now"}</button>
            </div>`:m}
        <section class="content-header">
          <div>
            ${e.tab==="usage"?m:c`<div class="page-title">${Ai(e.tab)}</div>`}
            ${e.tab==="usage"?m:c`<div class="page-sub">${og(e.tab)}</div>`}
          </div>
          <div class="page-meta">
            ${e.lastError?c`<div class="pill danger">${e.lastError}</div>`:m}
            ${a?zf(e):m}
          </div>
        </section>

        ${e.tab==="overview"?qy({connected:e.connected,hello:e.hello,settings:e.settings,password:e.password,lastError:e.lastError,presenceCount:t,sessionsCount:n,cronEnabled:e.cronStatus?.enabled??null,cronNext:s,lastChannelsRefresh:e.channelsLastSuccess,onSettingsChange:u=>e.applySettings(u),onPasswordChange:u=>e.password=u,onSessionKeyChange:u=>{e.sessionKey=u,e.chatMessage="",e.resetToolStream(),e.applySettings({...e.settings,sessionKey:u,lastActiveSessionKey:u}),e.loadAssistantIdentity()},onConnect:()=>e.connect(),onRefresh:()=>e.loadOverview()}):m}

        ${e.tab==="channels"?pm({connected:e.connected,loading:e.channelsLoading,snapshot:e.channelsSnapshot,lastError:e.channelsError,lastSuccessAt:e.channelsLastSuccess,whatsappMessage:e.whatsappLoginMessage,whatsappQrDataUrl:e.whatsappLoginQrDataUrl,whatsappConnected:e.whatsappLoginConnected,whatsappBusy:e.whatsappBusy,configSchema:e.configSchema,configSchemaLoading:e.configSchemaLoading,configForm:e.configForm,configUiHints:e.configUiHints,configSaving:e.configSaving,configFormDirty:e.configFormDirty,nostrProfileFormState:e.nostrProfileFormState,nostrProfileAccountId:e.nostrProfileAccountId,onRefresh:u=>Ce(e,u),onWhatsAppStart:u=>e.handleWhatsAppStart(u),onWhatsAppWait:()=>e.handleWhatsAppWait(),onWhatsAppLogout:()=>e.handleWhatsAppLogout(),onConfigPatch:(u,f)=>_e(e,u,f),onConfigSave:()=>e.handleChannelConfigSave(),onConfigReload:()=>e.handleChannelConfigReload(),onNostrProfileEdit:(u,f)=>e.handleNostrProfileEdit(u,f),onNostrProfileCancel:()=>e.handleNostrProfileCancel(),onNostrProfileFieldChange:(u,f)=>e.handleNostrProfileFieldChange(u,f),onNostrProfileSave:()=>e.handleNostrProfileSave(),onNostrProfileImport:()=>e.handleNostrProfileImport(),onNostrProfileToggleAdvanced:()=>e.handleNostrProfileToggleAdvanced()}):m}

        ${e.tab==="instances"?my({loading:e.presenceLoading,entries:e.presenceEntries,lastError:e.presenceError,statusMessage:e.presenceStatus,onRefresh:()=>fa(e)}):m}

        ${e.tab==="sessions"?n0({loading:e.sessionsLoading,result:e.sessionsResult,error:e.sessionsError,activeMinutes:e.sessionsFilterActive,limit:e.sessionsFilterLimit,includeGlobal:e.sessionsIncludeGlobal,includeUnknown:e.sessionsIncludeUnknown,basePath:e.basePath,onFiltersChange:u=>{e.sessionsFilterActive=u.activeMinutes,e.sessionsFilterLimit=u.limit,e.sessionsIncludeGlobal=u.includeGlobal,e.sessionsIncludeUnknown=u.includeUnknown},onRefresh:()=>Ht(e),onPatch:(u,f)=>Yu(e,u,f),onDelete:u=>Ju(e,u)}):m}

        ${Rf(e)}

        ${e.tab==="cron"?oy({basePath:e.basePath,loading:e.cronLoading,status:e.cronStatus,jobs:e.cronJobs,error:e.cronError,busy:e.cronBusy,form:e.cronForm,channels:e.channelsSnapshot?.channelMeta?.length?e.channelsSnapshot.channelMeta.map(u=>u.id):e.channelsSnapshot?.channelOrder??[],channelLabels:e.channelsSnapshot?.channelLabels??{},channelMeta:e.channelsSnapshot?.channelMeta??[],runsJobId:e.cronRunsJobId,runs:e.cronRuns,onFormChange:u=>e.cronForm=el({...e.cronForm,...u}),onRefresh:()=>e.loadCron(),onAdd:()=>cu(e),onToggle:(u,f)=>du(e,u,f),onRun:u=>uu(e,u),onRemove:u=>gu(e,u),onLoadRuns:u=>tl(e,u)}):m}

        ${e.tab==="agents"?Dh({loading:e.agentsLoading,error:e.agentsError,agentsList:e.agentsList,selectedAgentId:h,activePanel:e.agentsPanel,configForm:p,configLoading:e.configLoading,configSaving:e.configSaving,configDirty:e.configFormDirty,channelsLoading:e.channelsLoading,channelsError:e.channelsError,channelsSnapshot:e.channelsSnapshot,channelsLastSuccess:e.channelsLastSuccess,cronLoading:e.cronLoading,cronStatus:e.cronStatus,cronJobs:e.cronJobs,cronError:e.cronError,agentFilesLoading:e.agentFilesLoading,agentFilesError:e.agentFilesError,agentFilesList:e.agentFilesList,agentFileActive:e.agentFileActive,agentFileContents:e.agentFileContents,agentFileDrafts:e.agentFileDrafts,agentFileSaving:e.agentFileSaving,agentIdentityLoading:e.agentIdentityLoading,agentIdentityError:e.agentIdentityError,agentIdentityById:e.agentIdentityById,agentSkillsLoading:e.agentSkillsLoading,agentSkillsReport:e.agentSkillsReport,agentSkillsError:e.agentSkillsError,agentSkillsAgentId:e.agentSkillsAgentId,skillsFilter:e.skillsFilter,onRefresh:async()=>{await ia(e);const u=e.agentsList?.agents?.map(f=>f.id)??[];u.length>0&&Jr(e,u)},onSelectAgent:u=>{e.agentsSelectedId!==u&&(e.agentsSelectedId=u,e.agentFilesList=null,e.agentFilesError=null,e.agentFilesLoading=!1,e.agentFileActive=null,e.agentFileContents={},e.agentFileDrafts={},e.agentSkillsReport=null,e.agentSkillsError=null,e.agentSkillsAgentId=null,Zr(e,u),e.agentsPanel==="files"&&oi(e,u),e.agentsPanel==="skills"&&ss(e,u))},onSelectPanel:u=>{e.agentsPanel=u,u==="files"&&h&&e.agentFilesList?.agentId!==h&&(e.agentFilesList=null,e.agentFilesError=null,e.agentFileActive=null,e.agentFileContents={},e.agentFileDrafts={},oi(e,h)),u==="skills"&&h&&ss(e,h),u==="channels"&&Ce(e,!1),u==="cron"&&e.loadCron()},onLoadFiles:u=>oi(e,u),onSelectFile:u=>{e.agentFileActive=u,h&&Zf(e,h,u)},onFileDraftChange:(u,f)=>{e.agentFileDrafts={...e.agentFileDrafts,[u]:f}},onFileReset:u=>{const f=e.agentFileContents[u]??"";e.agentFileDrafts={...e.agentFileDrafts,[u]:f}},onFileSave:u=>{if(!h)return;const f=e.agentFileDrafts[u]??e.agentFileContents[u]??"";Jf(e,h,u,f)},onToolsProfileChange:(u,f,v)=>{if(!p)return;const w=p.agents?.list;if(!Array.isArray(w))return;const S=w.findIndex(k=>k&&typeof k=="object"&&"id"in k&&k.id===u);if(S<0)return;const C=["agents","list",S,"tools"];f?_e(e,[...C,"profile"],f):Xe(e,[...C,"profile"]),v&&Xe(e,[...C,"allow"])},onToolsOverridesChange:(u,f,v)=>{if(!p)return;const w=p.agents?.list;if(!Array.isArray(w))return;const S=w.findIndex(k=>k&&typeof k=="object"&&"id"in k&&k.id===u);if(S<0)return;const C=["agents","list",S,"tools"];f.length>0?_e(e,[...C,"alsoAllow"],f):Xe(e,[...C,"alsoAllow"]),v.length>0?_e(e,[...C,"deny"],v):Xe(e,[...C,"deny"])},onConfigReload:()=>Oe(e),onConfigSave:()=>ns(e),onChannelsRefresh:()=>Ce(e,!1),onCronRefresh:()=>e.loadCron(),onSkillsFilterChange:u=>e.skillsFilter=u,onSkillsRefresh:()=>{h&&ss(e,h)},onAgentSkillToggle:(u,f,v)=>{if(!p)return;const w=p.agents?.list;if(!Array.isArray(w))return;const S=w.findIndex(H=>H&&typeof H=="object"&&"id"in H&&H.id===u);if(S<0)return;const C=w[S],k=f.trim();if(!k)return;const A=e.agentSkillsReport?.skills?.map(H=>H.name).filter(Boolean)??[],T=(Array.isArray(C.skills)?C.skills.map(H=>String(H).trim()).filter(Boolean):void 0)??A,R=new Set(T);v?R.add(k):R.delete(k),_e(e,["agents","list",S,"skills"],[...R])},onAgentSkillsClear:u=>{if(!p)return;const f=p.agents?.list;if(!Array.isArray(f))return;const v=f.findIndex(w=>w&&typeof w=="object"&&"id"in w&&w.id===u);v<0||Xe(e,["agents","list",v,"skills"])},onAgentSkillsDisableAll:u=>{if(!p)return;const f=p.agents?.list;if(!Array.isArray(f))return;const v=f.findIndex(w=>w&&typeof w=="object"&&"id"in w&&w.id===u);v<0||_e(e,["agents","list",v,"skills"],[])},onModelChange:(u,f)=>{if(!p)return;const v=p.agents?.list;if(!Array.isArray(v))return;const w=v.findIndex(A=>A&&typeof A=="object"&&"id"in A&&A.id===u);if(w<0)return;const S=["agents","list",w,"model"];if(!f){Xe(e,S);return}const k=v[w]?.model;if(k&&typeof k=="object"&&!Array.isArray(k)){const A=k.fallbacks,E={primary:f,...Array.isArray(A)?{fallbacks:A}:{}};_e(e,S,E)}else _e(e,S,f)},onModelFallbacksChange:(u,f)=>{if(!p)return;const v=p.agents?.list;if(!Array.isArray(v))return;const w=v.findIndex(H=>H&&typeof H=="object"&&"id"in H&&H.id===u);if(w<0)return;const S=["agents","list",w,"model"],C=v[w],k=f.map(H=>H.trim()).filter(Boolean),A=C.model,T=(()=>{if(typeof A=="string")return A.trim()||null;if(A&&typeof A=="object"&&!Array.isArray(A)){const H=A.primary;if(typeof H=="string")return H.trim()||null}return null})();if(k.length===0){T?_e(e,S,T):Xe(e,S);return}_e(e,S,T?{primary:T,fallbacks:k}:{fallbacks:k})}}):m}

        ${e.tab==="skills"?i0({loading:e.skillsLoading,report:e.skillsReport,error:e.skillsError,filter:e.skillsFilter,edits:e.skillEdits,messages:e.skillMessages,busyKey:e.skillsBusyKey,onFilterChange:u=>e.skillsFilter=u,onRefresh:()=>Nn(e,{clearMessages:!0}),onToggle:(u,f)=>eg(e,u,f),onEdit:(u,f)=>Xu(e,u,f),onSaveKey:u=>tg(e,u),onInstall:(u,f,v)=>ng(e,u,f,v)}):m}

        ${e.tab==="nodes"?Dy({loading:e.nodesLoading,nodes:e.nodes,devicesLoading:e.devicesLoading,devicesError:e.devicesError,devicesList:e.devicesList,configForm:e.configForm??e.configSnapshot?.config,configLoading:e.configLoading,configSaving:e.configSaving,configDirty:e.configFormDirty,configFormMode:e.configFormMode,execApprovalsLoading:e.execApprovalsLoading,execApprovalsSaving:e.execApprovalsSaving,execApprovalsDirty:e.execApprovalsDirty,execApprovalsSnapshot:e.execApprovalsSnapshot,execApprovalsForm:e.execApprovalsForm,execApprovalsSelectedAgent:e.execApprovalsSelectedAgent,execApprovalsTarget:e.execApprovalsTarget,execApprovalsTargetNodeId:e.execApprovalsTargetNodeId,onRefresh:()=>As(e),onDevicesRefresh:()=>yt(e),onDeviceApprove:u=>Uu(e,u),onDeviceReject:u=>zu(e,u),onDeviceRotate:(u,f,v)=>Hu(e,{deviceId:u,role:f,scopes:v}),onDeviceRevoke:(u,f)=>ju(e,{deviceId:u,role:f}),onLoadConfig:()=>Oe(e),onLoadExecApprovals:()=>{const u=e.execApprovalsTarget==="node"&&e.execApprovalsTargetNodeId?{kind:"node",nodeId:e.execApprovalsTargetNodeId}:{kind:"gateway"};return pa(e,u)},onBindDefault:u=>{u?_e(e,["tools","exec","node"],u):Xe(e,["tools","exec","node"])},onBindAgent:(u,f)=>{const v=["agents","list",u,"tools","exec","node"];f?_e(e,v,f):Xe(e,v)},onSaveBindings:()=>ns(e),onExecApprovalsTargetChange:(u,f)=>{e.execApprovalsTarget=u,e.execApprovalsTargetNodeId=f,e.execApprovalsSnapshot=null,e.execApprovalsForm=null,e.execApprovalsDirty=!1,e.execApprovalsSelectedAgent=null},onExecApprovalsSelectAgent:u=>{e.execApprovalsSelectedAgent=u},onExecApprovalsPatch:(u,f)=>Vu(e,u,f),onExecApprovalsRemove:u=>Qu(e,u),onSaveExecApprovals:()=>{const u=e.execApprovalsTarget==="node"&&e.execApprovalsTargetNodeId?{kind:"node",nodeId:e.execApprovalsTargetNodeId}:{kind:"gateway"};return Gu(e,u)}}):m}

        ${e.tab==="chat"?Zb({sessionKey:e.sessionKey,onSessionKeyChange:u=>{e.sessionKey=u,e.chatMessage="",e.chatAttachments=[],e.chatStream=null,e.chatStreamStartedAt=null,e.chatRunId=null,e.chatQueue=[],e.resetToolStream(),e.resetChatScroll(),e.applySettings({...e.settings,sessionKey:u,lastActiveSessionKey:u}),e.loadAssistantIdentity(),In(e),_i(e)},thinkingLevel:e.chatThinkingLevel,showThinking:r,loading:e.chatLoading,sending:e.chatSending,compactionStatus:e.compactionStatus,fallbackStatus:e.fallbackStatus,assistantAvatarUrl:d,messages:e.chatMessages,toolMessages:e.chatToolMessages,stream:e.chatStream,streamStartedAt:e.chatStreamStartedAt,draft:e.chatMessage,queue:e.chatQueue,connected:e.connected,canSend:e.connected,disabledReason:i,error:e.lastError,sessions:e.sessionsResult,focusMode:o,onRefresh:()=>(e.resetToolStream(),Promise.all([In(e),_i(e)])),onToggleFocusMode:()=>{e.onboarding||e.applySettings({...e.settings,chatFocusMode:!e.settings.chatFocusMode})},onChatScroll:u=>e.handleChatScroll(u),onDraftChange:u=>e.chatMessage=u,attachments:e.chatAttachments,onAttachmentsChange:u=>e.chatAttachments=u,onSend:()=>e.handleSendChat(),canAbort:!!e.chatRunId,onAbort:()=>{e.handleAbortChat()},onQueueRemove:u=>e.removeQueuedMessage(u),onNewSession:()=>e.handleSendChat("/new",{restoreDraft:!0}),showNewMessages:e.chatNewMessagesBelow&&!e.chatManualRefreshInFlight,onScrollToBottom:()=>e.scrollToBottom(),sidebarOpen:e.sidebarOpen,sidebarContent:e.sidebarContent,sidebarError:e.sidebarError,splitRatio:e.splitRatio,onOpenSidebar:u=>e.handleOpenSidebar(u),onCloseSidebar:()=>e.handleCloseSidebar(),onSplitRatioChange:u=>e.handleSplitRatioChange(u),assistantName:e.assistantName,assistantAvatar:e.assistantAvatar}):m}

        ${e.tab==="config"?sy({raw:e.configRaw,originalRaw:e.configRawOriginal,valid:e.configValid,issues:e.configIssues,loading:e.configLoading,saving:e.configSaving,applying:e.configApplying,updating:e.updateRunning,connected:e.connected,schema:e.configSchema,schemaLoading:e.configSchemaLoading,uiHints:e.configUiHints,formMode:e.configFormMode,formValue:e.configForm,originalValue:e.configFormOriginal,searchQuery:e.configSearchQuery,activeSection:e.configActiveSection,activeSubsection:e.configActiveSubsection,onRawChange:u=>{e.configRaw=u},onFormModeChange:u=>e.configFormMode=u,onFormPatch:(u,f)=>_e(e,u,f),onSearchChange:u=>e.configSearchQuery=u,onSectionChange:u=>{e.configActiveSection=u,e.configActiveSubsection=null},onSubsectionChange:u=>e.configActiveSubsection=u,onReload:()=>Oe(e),onSave:()=>ns(e),onApply:()=>_d(e),onUpdate:()=>fo(e)}):m}

        ${e.tab==="debug"?gy({loading:e.debugLoading,status:e.debugStatus,health:e.debugHealth,models:e.debugModels,heartbeat:e.debugHeartbeat,eventLog:e.eventLog,callMethod:e.debugCallMethod,callParams:e.debugCallParams,callResult:e.debugCallResult,callError:e.debugCallError,onCallMethodChange:u=>e.debugCallMethod=u,onCallParamsChange:u=>e.debugCallParams=u,onRefresh:()=>Ss(e),onCall:()=>Qd(e)}):m}

        ${e.tab==="logs"?xy({loading:e.logsLoading,error:e.logsError,file:e.logsFile,entries:e.logsEntries,filterText:e.logsFilterText,levelFilters:e.logsLevelFilters,autoFollow:e.logsAutoFollow,truncated:e.logsTruncated,onFilterTextChange:u=>e.logsFilterText=u,onLevelToggle:(u,f)=>{e.logsLevelFilters={...e.logsLevelFilters,[u]:f}},onToggleAutoFollow:u=>e.logsAutoFollow=u,onRefresh:()=>Xi(e,{reset:!0}),onExport:(u,f)=>e.exportLogs(u,f),onScroll:u=>e.handleLogsScroll(u)}):m}
      </main>
      ${fy(e)}
      ${hy(e)}
    </div>
  `}var d0=Object.defineProperty,u0=Object.getOwnPropertyDescriptor,x=(e,t,n,s)=>{for(var i=s>1?void 0:s?u0(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(s?o(t,n,i):o(i))||i);return s&&i&&d0(t,n,i),i};const vi=ba({});function g0(){if(!window.location.search)return!1;const t=new URLSearchParams(window.location.search).get("onboarding");if(!t)return!1;const n=t.trim().toLowerCase();return n==="1"||n==="true"||n==="yes"||n==="on"}let y=class extends en{constructor(){super(),this.i18nController=new $d(this),this.settings=rg(),this.password="",this.tab="chat",this.onboarding=g0(),this.connected=!1,this.theme=this.settings.theme??"system",this.themeResolved="dark",this.hello=null,this.lastError=null,this.eventLog=[],this.eventLogBuffer=[],this.toolStreamSyncTimer=null,this.sidebarCloseTimer=null,this.assistantName=vi.name,this.assistantAvatar=vi.avatar,this.assistantAgentId=vi.agentId??null,this.sessionKey=this.settings.sessionKey,this.chatLoading=!1,this.chatSending=!1,this.chatMessage="",this.chatMessages=[],this.chatToolMessages=[],this.chatStream=null,this.chatStreamStartedAt=null,this.chatRunId=null,this.compactionStatus=null,this.fallbackStatus=null,this.chatAvatarUrl=null,this.chatThinkingLevel=null,this.chatQueue=[],this.chatAttachments=[],this.chatManualRefreshInFlight=!1,this.sidebarOpen=!1,this.sidebarContent=null,this.sidebarError=null,this.splitRatio=this.settings.splitRatio,this.nodesLoading=!1,this.nodes=[],this.devicesLoading=!1,this.devicesError=null,this.devicesList=null,this.execApprovalsLoading=!1,this.execApprovalsSaving=!1,this.execApprovalsDirty=!1,this.execApprovalsSnapshot=null,this.execApprovalsForm=null,this.execApprovalsSelectedAgent=null,this.execApprovalsTarget="gateway",this.execApprovalsTargetNodeId=null,this.execApprovalQueue=[],this.execApprovalBusy=!1,this.execApprovalError=null,this.pendingGatewayUrl=null,this.configLoading=!1,this.configRaw=`{
}
`,this.configRawOriginal="",this.configValid=null,this.configIssues=[],this.configSaving=!1,this.configApplying=!1,this.updateRunning=!1,this.applySessionKey=this.settings.lastActiveSessionKey,this.configSnapshot=null,this.configSchema=null,this.configSchemaVersion=null,this.configSchemaLoading=!1,this.configUiHints={},this.configForm=null,this.configFormOriginal=null,this.configFormDirty=!1,this.configFormMode="form",this.configSearchQuery="",this.configActiveSection=null,this.configActiveSubsection=null,this.channelsLoading=!1,this.channelsSnapshot=null,this.channelsError=null,this.channelsLastSuccess=null,this.whatsappLoginMessage=null,this.whatsappLoginQrDataUrl=null,this.whatsappLoginConnected=null,this.whatsappBusy=!1,this.nostrProfileFormState=null,this.nostrProfileAccountId=null,this.presenceLoading=!1,this.presenceEntries=[],this.presenceError=null,this.presenceStatus=null,this.agentsLoading=!1,this.agentsList=null,this.agentsError=null,this.agentsSelectedId=null,this.agentsPanel="overview",this.agentFilesLoading=!1,this.agentFilesError=null,this.agentFilesList=null,this.agentFileContents={},this.agentFileDrafts={},this.agentFileActive=null,this.agentFileSaving=!1,this.agentIdentityLoading=!1,this.agentIdentityError=null,this.agentIdentityById={},this.agentSkillsLoading=!1,this.agentSkillsError=null,this.agentSkillsReport=null,this.agentSkillsAgentId=null,this.sessionsLoading=!1,this.sessionsResult=null,this.sessionsError=null,this.sessionsFilterActive="",this.sessionsFilterLimit="120",this.sessionsIncludeGlobal=!0,this.sessionsIncludeUnknown=!1,this.usageLoading=!1,this.usageResult=null,this.usageCostSummary=null,this.usageError=null,this.usageStartDate=(()=>{const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`})(),this.usageEndDate=(()=>{const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`})(),this.usageSelectedSessions=[],this.usageSelectedDays=[],this.usageSelectedHours=[],this.usageChartMode="tokens",this.usageDailyChartMode="by-type",this.usageTimeSeriesMode="per-turn",this.usageTimeSeriesBreakdownMode="by-type",this.usageTimeSeries=null,this.usageTimeSeriesLoading=!1,this.usageTimeSeriesCursorStart=null,this.usageTimeSeriesCursorEnd=null,this.usageSessionLogs=null,this.usageSessionLogsLoading=!1,this.usageSessionLogsExpanded=!1,this.usageQuery="",this.usageQueryDraft="",this.usageSessionSort="recent",this.usageSessionSortDir="desc",this.usageRecentSessions=[],this.usageTimeZone="local",this.usageContextExpanded=!1,this.usageHeaderPinned=!1,this.usageSessionsTab="all",this.usageVisibleColumns=["channel","agent","provider","model","messages","tools","errors","duration"],this.usageLogFilterRoles=[],this.usageLogFilterTools=[],this.usageLogFilterHasTools=!1,this.usageLogFilterQuery="",this.usageQueryDebounceTimer=null,this.cronLoading=!1,this.cronJobs=[],this.cronStatus=null,this.cronError=null,this.cronForm={...op},this.cronRunsJobId=null,this.cronRuns=[],this.cronBusy=!1,this.updateAvailable=null,this.skillsLoading=!1,this.skillsReport=null,this.skillsError=null,this.skillsFilter="",this.skillEdits={},this.skillsBusyKey=null,this.skillMessages={},this.debugLoading=!1,this.debugStatus=null,this.debugHealth=null,this.debugModels=[],this.debugHeartbeat=null,this.debugCallMethod="",this.debugCallParams="{}",this.debugCallResult=null,this.debugCallError=null,this.logsLoading=!1,this.logsError=null,this.logsFile=null,this.logsEntries=[],this.logsFilterText="",this.logsLevelFilters={...ap},this.logsAutoFollow=!0,this.logsTruncated=!1,this.logsCursor=null,this.logsLastFetchAt=null,this.logsLimit=500,this.logsMaxBytes=25e4,this.logsAtBottom=!0,this.client=null,this.chatScrollFrame=null,this.chatScrollTimeout=null,this.chatHasAutoScrolled=!1,this.chatUserNearBottom=!0,this.chatNewMessagesBelow=!1,this.nodesPollInterval=null,this.logsPollInterval=null,this.debugPollInterval=null,this.logsScrollFrame=null,this.toolStreamById=new Map,this.toolStreamOrder=[],this.refreshSessionsAfterChat=new Set,this.basePath="",this.popStateHandler=()=>xg(this),this.themeMedia=null,this.themeMediaHandler=null,this.topbarObserver=null,Zi(this.settings.locale)&&En.setLocale(this.settings.locale)}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),wp(this)}firstUpdated(){kp(this)}disconnectedCallback(){Sp(this),super.disconnectedCallback()}updated(e){Ap(this,e)}connect(){Ul(this)}handleChatScroll(e){Wd(this,e)}handleLogsScroll(e){qd(this,e)}exportLogs(e,t){Gd(e,t)}resetToolStream(){Ms(this)}resetChatScroll(){ho(this)}scrollToBottom(e){ho(this),Dn(this,!0,!!e?.smooth)}async loadAssistantIdentity(){await Nl(this)}applySettings(e){mt(this,e)}setTab(e){pg(this,e)}setTheme(e,t){fg(this,e,t)}async loadOverview(){await Tl(this)}async loadCron(){await ps(this)}async handleAbortChat(){await Il(this)}removeQueuedMessage(e){ep(this,e)}async handleSendChat(e,t){await tp(this,e,t)}async handleWhatsAppStart(e){await Rd(this,e)}async handleWhatsAppWait(){await Id(this)}async handleWhatsAppLogout(){await Pd(this)}async handleChannelConfigSave(){await Dd(this)}async handleChannelConfigReload(){await Fd(this)}handleNostrProfileEdit(e,t){Bd(this,e,t)}handleNostrProfileCancel(){Ud(this)}handleNostrProfileFieldChange(e,t){zd(this,e,t)}async handleNostrProfileSave(){await jd(this)}async handleNostrProfileImport(){await Kd(this)}handleNostrProfileToggleAdvanced(){Hd(this)}async handleExecApprovalDecision(e){const t=this.execApprovalQueue[0];if(!(!t||!this.client||this.execApprovalBusy)){this.execApprovalBusy=!0,this.execApprovalError=null;try{await this.client.request("exec.approval.resolve",{id:t.id,decision:e}),this.execApprovalQueue=this.execApprovalQueue.filter(n=>n.id!==t.id)}catch(n){this.execApprovalError=`Exec approval failed: ${String(n)}`}finally{this.execApprovalBusy=!1}}}handleGatewayUrlConfirm(){const e=this.pendingGatewayUrl;e&&(this.pendingGatewayUrl=null,mt(this,{...this.settings,gatewayUrl:e}),this.connect())}handleGatewayUrlCancel(){this.pendingGatewayUrl=null}handleOpenSidebar(e){this.sidebarCloseTimer!=null&&(window.clearTimeout(this.sidebarCloseTimer),this.sidebarCloseTimer=null),this.sidebarContent=e,this.sidebarError=null,this.sidebarOpen=!0}handleCloseSidebar(){this.sidebarOpen=!1,this.sidebarCloseTimer!=null&&window.clearTimeout(this.sidebarCloseTimer),this.sidebarCloseTimer=window.setTimeout(()=>{this.sidebarOpen||(this.sidebarContent=null,this.sidebarError=null,this.sidebarCloseTimer=null)},200)}handleSplitRatioChange(e){const t=Math.max(.4,Math.min(.7,e));this.splitRatio=t,this.applySettings({...this.settings,splitRatio:t})}render(){return c0(this)}};x([$()],y.prototype,"settings",2);x([$()],y.prototype,"password",2);x([$()],y.prototype,"tab",2);x([$()],y.prototype,"onboarding",2);x([$()],y.prototype,"connected",2);x([$()],y.prototype,"theme",2);x([$()],y.prototype,"themeResolved",2);x([$()],y.prototype,"hello",2);x([$()],y.prototype,"lastError",2);x([$()],y.prototype,"eventLog",2);x([$()],y.prototype,"assistantName",2);x([$()],y.prototype,"assistantAvatar",2);x([$()],y.prototype,"assistantAgentId",2);x([$()],y.prototype,"sessionKey",2);x([$()],y.prototype,"chatLoading",2);x([$()],y.prototype,"chatSending",2);x([$()],y.prototype,"chatMessage",2);x([$()],y.prototype,"chatMessages",2);x([$()],y.prototype,"chatToolMessages",2);x([$()],y.prototype,"chatStream",2);x([$()],y.prototype,"chatStreamStartedAt",2);x([$()],y.prototype,"chatRunId",2);x([$()],y.prototype,"compactionStatus",2);x([$()],y.prototype,"fallbackStatus",2);x([$()],y.prototype,"chatAvatarUrl",2);x([$()],y.prototype,"chatThinkingLevel",2);x([$()],y.prototype,"chatQueue",2);x([$()],y.prototype,"chatAttachments",2);x([$()],y.prototype,"chatManualRefreshInFlight",2);x([$()],y.prototype,"sidebarOpen",2);x([$()],y.prototype,"sidebarContent",2);x([$()],y.prototype,"sidebarError",2);x([$()],y.prototype,"splitRatio",2);x([$()],y.prototype,"nodesLoading",2);x([$()],y.prototype,"nodes",2);x([$()],y.prototype,"devicesLoading",2);x([$()],y.prototype,"devicesError",2);x([$()],y.prototype,"devicesList",2);x([$()],y.prototype,"execApprovalsLoading",2);x([$()],y.prototype,"execApprovalsSaving",2);x([$()],y.prototype,"execApprovalsDirty",2);x([$()],y.prototype,"execApprovalsSnapshot",2);x([$()],y.prototype,"execApprovalsForm",2);x([$()],y.prototype,"execApprovalsSelectedAgent",2);x([$()],y.prototype,"execApprovalsTarget",2);x([$()],y.prototype,"execApprovalsTargetNodeId",2);x([$()],y.prototype,"execApprovalQueue",2);x([$()],y.prototype,"execApprovalBusy",2);x([$()],y.prototype,"execApprovalError",2);x([$()],y.prototype,"pendingGatewayUrl",2);x([$()],y.prototype,"configLoading",2);x([$()],y.prototype,"configRaw",2);x([$()],y.prototype,"configRawOriginal",2);x([$()],y.prototype,"configValid",2);x([$()],y.prototype,"configIssues",2);x([$()],y.prototype,"configSaving",2);x([$()],y.prototype,"configApplying",2);x([$()],y.prototype,"updateRunning",2);x([$()],y.prototype,"applySessionKey",2);x([$()],y.prototype,"configSnapshot",2);x([$()],y.prototype,"configSchema",2);x([$()],y.prototype,"configSchemaVersion",2);x([$()],y.prototype,"configSchemaLoading",2);x([$()],y.prototype,"configUiHints",2);x([$()],y.prototype,"configForm",2);x([$()],y.prototype,"configFormOriginal",2);x([$()],y.prototype,"configFormDirty",2);x([$()],y.prototype,"configFormMode",2);x([$()],y.prototype,"configSearchQuery",2);x([$()],y.prototype,"configActiveSection",2);x([$()],y.prototype,"configActiveSubsection",2);x([$()],y.prototype,"channelsLoading",2);x([$()],y.prototype,"channelsSnapshot",2);x([$()],y.prototype,"channelsError",2);x([$()],y.prototype,"channelsLastSuccess",2);x([$()],y.prototype,"whatsappLoginMessage",2);x([$()],y.prototype,"whatsappLoginQrDataUrl",2);x([$()],y.prototype,"whatsappLoginConnected",2);x([$()],y.prototype,"whatsappBusy",2);x([$()],y.prototype,"nostrProfileFormState",2);x([$()],y.prototype,"nostrProfileAccountId",2);x([$()],y.prototype,"presenceLoading",2);x([$()],y.prototype,"presenceEntries",2);x([$()],y.prototype,"presenceError",2);x([$()],y.prototype,"presenceStatus",2);x([$()],y.prototype,"agentsLoading",2);x([$()],y.prototype,"agentsList",2);x([$()],y.prototype,"agentsError",2);x([$()],y.prototype,"agentsSelectedId",2);x([$()],y.prototype,"agentsPanel",2);x([$()],y.prototype,"agentFilesLoading",2);x([$()],y.prototype,"agentFilesError",2);x([$()],y.prototype,"agentFilesList",2);x([$()],y.prototype,"agentFileContents",2);x([$()],y.prototype,"agentFileDrafts",2);x([$()],y.prototype,"agentFileActive",2);x([$()],y.prototype,"agentFileSaving",2);x([$()],y.prototype,"agentIdentityLoading",2);x([$()],y.prototype,"agentIdentityError",2);x([$()],y.prototype,"agentIdentityById",2);x([$()],y.prototype,"agentSkillsLoading",2);x([$()],y.prototype,"agentSkillsError",2);x([$()],y.prototype,"agentSkillsReport",2);x([$()],y.prototype,"agentSkillsAgentId",2);x([$()],y.prototype,"sessionsLoading",2);x([$()],y.prototype,"sessionsResult",2);x([$()],y.prototype,"sessionsError",2);x([$()],y.prototype,"sessionsFilterActive",2);x([$()],y.prototype,"sessionsFilterLimit",2);x([$()],y.prototype,"sessionsIncludeGlobal",2);x([$()],y.prototype,"sessionsIncludeUnknown",2);x([$()],y.prototype,"usageLoading",2);x([$()],y.prototype,"usageResult",2);x([$()],y.prototype,"usageCostSummary",2);x([$()],y.prototype,"usageError",2);x([$()],y.prototype,"usageStartDate",2);x([$()],y.prototype,"usageEndDate",2);x([$()],y.prototype,"usageSelectedSessions",2);x([$()],y.prototype,"usageSelectedDays",2);x([$()],y.prototype,"usageSelectedHours",2);x([$()],y.prototype,"usageChartMode",2);x([$()],y.prototype,"usageDailyChartMode",2);x([$()],y.prototype,"usageTimeSeriesMode",2);x([$()],y.prototype,"usageTimeSeriesBreakdownMode",2);x([$()],y.prototype,"usageTimeSeries",2);x([$()],y.prototype,"usageTimeSeriesLoading",2);x([$()],y.prototype,"usageTimeSeriesCursorStart",2);x([$()],y.prototype,"usageTimeSeriesCursorEnd",2);x([$()],y.prototype,"usageSessionLogs",2);x([$()],y.prototype,"usageSessionLogsLoading",2);x([$()],y.prototype,"usageSessionLogsExpanded",2);x([$()],y.prototype,"usageQuery",2);x([$()],y.prototype,"usageQueryDraft",2);x([$()],y.prototype,"usageSessionSort",2);x([$()],y.prototype,"usageSessionSortDir",2);x([$()],y.prototype,"usageRecentSessions",2);x([$()],y.prototype,"usageTimeZone",2);x([$()],y.prototype,"usageContextExpanded",2);x([$()],y.prototype,"usageHeaderPinned",2);x([$()],y.prototype,"usageSessionsTab",2);x([$()],y.prototype,"usageVisibleColumns",2);x([$()],y.prototype,"usageLogFilterRoles",2);x([$()],y.prototype,"usageLogFilterTools",2);x([$()],y.prototype,"usageLogFilterHasTools",2);x([$()],y.prototype,"usageLogFilterQuery",2);x([$()],y.prototype,"cronLoading",2);x([$()],y.prototype,"cronJobs",2);x([$()],y.prototype,"cronStatus",2);x([$()],y.prototype,"cronError",2);x([$()],y.prototype,"cronForm",2);x([$()],y.prototype,"cronRunsJobId",2);x([$()],y.prototype,"cronRuns",2);x([$()],y.prototype,"cronBusy",2);x([$()],y.prototype,"updateAvailable",2);x([$()],y.prototype,"skillsLoading",2);x([$()],y.prototype,"skillsReport",2);x([$()],y.prototype,"skillsError",2);x([$()],y.prototype,"skillsFilter",2);x([$()],y.prototype,"skillEdits",2);x([$()],y.prototype,"skillsBusyKey",2);x([$()],y.prototype,"skillMessages",2);x([$()],y.prototype,"debugLoading",2);x([$()],y.prototype,"debugStatus",2);x([$()],y.prototype,"debugHealth",2);x([$()],y.prototype,"debugModels",2);x([$()],y.prototype,"debugHeartbeat",2);x([$()],y.prototype,"debugCallMethod",2);x([$()],y.prototype,"debugCallParams",2);x([$()],y.prototype,"debugCallResult",2);x([$()],y.prototype,"debugCallError",2);x([$()],y.prototype,"logsLoading",2);x([$()],y.prototype,"logsError",2);x([$()],y.prototype,"logsFile",2);x([$()],y.prototype,"logsEntries",2);x([$()],y.prototype,"logsFilterText",2);x([$()],y.prototype,"logsLevelFilters",2);x([$()],y.prototype,"logsAutoFollow",2);x([$()],y.prototype,"logsTruncated",2);x([$()],y.prototype,"logsCursor",2);x([$()],y.prototype,"logsLastFetchAt",2);x([$()],y.prototype,"logsLimit",2);x([$()],y.prototype,"logsMaxBytes",2);x([$()],y.prototype,"logsAtBottom",2);x([$()],y.prototype,"chatNewMessagesBelow",2);y=x([Ur("openclaw-app")],y);
//# sourceMappingURL=index-Cx1_w3YP.js.map
