window.NexT||(window.NexT={}),function(){const e={};let n={};const t=t=>{const o=document.querySelector(`.next-config[data-name="${t}"]`);if(!o)return;const c=(i=o.text,JSON.parse(i||"{}"));var i;"main"===t?Object.assign(e,c):n[t]=c};t("main"),window.CONFIG=new Proxy({},{get(o,c){let i;if(c in e?i=e[c]:(c in n||t(c),i=n[c]),
// For unset override and mixable existing
c in o||"object"!=typeof i||(
// Get ready to mix.
o[c]={}),c in o){const e=o[c];
// When mixable
return"object"==typeof e&&"object"==typeof i?new Proxy({...i,...e},{set:(n,t,o)=>(n[t]=o,e[t]=o,!0)}):e}
// Only when not mixable and override hasn't been set.
return i}}),document.addEventListener("pjax:success",()=>{n={}})}();;
/* global CONFIG */
window.addEventListener("tabs:register",()=>{let{activeClass:t}=CONFIG.comments;if(CONFIG.comments.storage&&(t=localStorage.getItem("comments_active")||t),t){const e=document.querySelector(`a[href="#comment-${t}"]`);e&&e.click()}}),CONFIG.comments.storage&&window.addEventListener("tabs:click",t=>{if(!t.target.matches(".tabs-comment .tab-content .tab-pane"))return;const e=t.target.classList[1];localStorage.setItem("comments_active",e)});;
/* global NexT, CONFIG */
HTMLElement.prototype.wrap=function(e){this.parentNode.insertBefore(e,this),this.parentNode.removeChild(this),e.appendChild(this)},function(){const e=()=>document.dispatchEvent(new Event("page:loaded",{bubbles:!0}));"loading"===document.readyState?document.addEventListener("readystatechange",e,{once:!0}):e(),document.addEventListener("pjax:success",e)}(),NexT.utils={registerExtURL:function(){document.querySelectorAll("span.exturl").forEach(e=>{const t=document.createElement("a");
// https://stackoverflow.com/questions/30106476/using-javascripts-atob-to-decode-base64-doesnt-properly-decode-utf-8-strings
t.href=decodeURIComponent(atob(e.dataset.url).split("").map(e=>"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)).join("")),t.rel="noopener external nofollow noreferrer",t.target="_blank",t.className=e.className,t.title=e.title,t.innerHTML=e.innerHTML,e.parentNode.replaceChild(t,e)})},
/**
   * One-click copy code support.
   */
registerCopyCode:function(){let e=document.querySelectorAll("figure.highlight");0===e.length&&(e=document.querySelectorAll("pre:not(.mermaid)")),e.forEach(e=>{if(e.querySelectorAll(".code .line span").forEach(e=>{e.classList.forEach(t=>{e.classList.replace(t,"hljs-"+t)})}),!CONFIG.copycode)return;e.insertAdjacentHTML("beforeend",'<div class="copy-btn"><i class="fa fa-copy fa-fw"></i></div>');const t=e.querySelector(".copy-btn");t.addEventListener("click",()=>{const n=(e.querySelector(".code")||e.querySelector("code")).innerText;if(navigator.clipboard)
// https://caniuse.com/mdn-api_clipboard_writetext
navigator.clipboard.writeText(n).then(()=>{t.querySelector("i").className="fa fa-check-circle fa-fw"},()=>{t.querySelector("i").className="fa fa-times-circle fa-fw"});else{const e=document.createElement("textarea");e.style.top=window.scrollY+"px",// Prevent page scrolling
e.style.position="absolute",e.style.opacity="0",e.readOnly=!0,e.value=n,document.body.append(e),e.select(),e.setSelectionRange(0,n.length),e.readOnly=!1;const o=document.execCommand("copy");t.querySelector("i").className=o?"fa fa-check-circle fa-fw":"fa fa-times-circle fa-fw",e.blur(),// For iOS
t.blur(),document.body.removeChild(e)}}),e.addEventListener("mouseleave",()=>{setTimeout(()=>{t.querySelector("i").className="fa fa-copy fa-fw"},300)})})},wrapTableWithBox:function(){document.querySelectorAll("table").forEach(e=>{const t=document.createElement("div");t.className="table-container",e.wrap(t)})},registerVideoIframe:function(){document.querySelectorAll("iframe").forEach(e=>{if(["www.youtube.com","player.vimeo.com","player.youku.com","player.bilibili.com","www.tudou.com"].some(t=>e.src.includes(t))&&!e.parentNode.matches(".video-container")){const t=document.createElement("div");t.className="video-container",e.wrap(t);const n=Number(e.width),o=Number(e.height);n&&o&&(t.style.paddingTop=o/n*100+"%")}})},registerScrollPercent:function(){const e=document.querySelector(".back-to-top"),t=document.querySelector(".reading-progress-bar");
// For init back to top in sidebar if page was scrolled after page refresh.
window.addEventListener("scroll",()=>{if(e||t){const n=document.body.scrollHeight-window.innerHeight,o=n>0?Math.min(100*window.scrollY/n,100):0;e&&(e.classList.toggle("back-to-top-on",Math.round(o)>=5),e.querySelector("span").innerText=Math.round(o)+"%"),t&&t.style.setProperty("--progress",o.toFixed(2)+"%")}if(!Array.isArray(NexT.utils.sections))return;let n=NexT.utils.sections.findIndex(e=>e&&e.getBoundingClientRect().top>10);-1===n?n=NexT.utils.sections.length-1:n>0&&n--,this.activateNavByIndex(n)},{passive:!0}),e&&e.addEventListener("click",()=>{window.anime({targets:document.scrollingElement,duration:500,easing:"linear",scrollTop:0})})},
/**
   * Tabs tag listener (without twitter bootstrap).
   */
registerTabsTag:function(){
// Binding `nav-tabs` & `tab-content` by real time permalink changing.
document.querySelectorAll(".tabs ul.nav-tabs .tab").forEach(e=>{e.addEventListener("click",t=>{
// Prevent selected tab to select again.
if(t.preventDefault(),e.classList.contains("active"))return;const n=e.parentNode;
// Add & Remove active class on `nav-tabs` & `tab-content`.
[...n.children].forEach(t=>{t.classList.toggle("active",t===e)});
// https://stackoverflow.com/questions/20306204/using-queryselector-with-ids-that-are-numbers
const o=document.getElementById(e.querySelector("a").getAttribute("href").replace("#",""));if([...o.parentNode.children].forEach(e=>{e.classList.toggle("active",e===o)}),
// Trigger event
o.dispatchEvent(new Event("tabs:click",{bubbles:!0})),!CONFIG.stickytabs)return;const r=n.parentNode.getBoundingClientRect().top+window.scrollY+10;window.anime({targets:document.scrollingElement,duration:500,easing:"linear",scrollTop:r})})}),window.dispatchEvent(new Event("tabs:register"))},registerCanIUseTag:function(){
// Get responsive height passed from iframe.
window.addEventListener("message",({data:e})=>{if("string"==typeof e&&e.includes("ciu_embed")){const t=e.split(":")[1],n=e.split(":")[2];document.querySelector(`iframe[data-feature=${t}]`).style.height=parseInt(n,10)+5+"px"}},!1)},registerActiveMenuItem:function(){document.querySelectorAll(".menu-item a[href]").forEach(e=>{const t=e.pathname===location.pathname||e.pathname===location.pathname.replace("index.html",""),n=!CONFIG.root.startsWith(e.pathname)&&location.pathname.startsWith(e.pathname);e.classList.toggle("menu-item-active",e.hostname===location.hostname&&(t||n))})},registerLangSelect:function(){document.querySelectorAll(".lang-select").forEach(e=>{e.value=CONFIG.page.lang,e.addEventListener("change",()=>{const t=e.options[e.selectedIndex];document.querySelectorAll(".lang-select-label span").forEach(e=>{e.innerText=t.text}),
// Disable Pjax to force refresh translation of menu item
window.location.href=t.dataset.href})})},registerSidebarTOC:function(){this.sections=[...document.querySelectorAll(".post-toc li a.nav-link")].map(e=>{const t=document.getElementById(decodeURI(e.getAttribute("href")).replace("#",""));
// TOC item animation navigate.
return e.addEventListener("click",n=>{n.preventDefault();const o=t.getBoundingClientRect().top+window.scrollY;window.anime({targets:document.scrollingElement,duration:500,easing:"linear",scrollTop:o,complete:()=>{history.pushState(null,document.title,e.href)}})}),t})},registerPostReward:function(){const e=document.querySelector(".reward-container button");e&&e.addEventListener("click",()=>{document.querySelector(".post-reward").classList.toggle("active")})},activateNavByIndex:function(e){const t=document.querySelectorAll(".post-toc li a.nav-link")[e];if(!t||t.classList.contains("active-current"))return;document.querySelectorAll(".post-toc .active").forEach(e=>{e.classList.remove("active","active-current")}),t.classList.add("active","active-current");let n=t.parentNode;for(;!n.matches(".post-toc");)n.matches("li")&&n.classList.add("active"),n=n.parentNode;
// Scrolling to center active TOC element if TOC content is taller then viewport.
const o=document.querySelector(".sidebar-panel-container");o.parentNode.classList.contains("sidebar-toc-active")&&window.anime({targets:o,duration:200,easing:"linear",scrollTop:o.scrollTop-o.offsetHeight/2+t.getBoundingClientRect().top-o.getBoundingClientRect().top})},updateSidebarPosition:function(){if(window.innerWidth<992||"Pisces"===CONFIG.scheme||"Gemini"===CONFIG.scheme)return;
// Expand sidebar on post detail page by default, when post has a toc.
const e=document.querySelector(".post-toc");let t=CONFIG.page.sidebar;"boolean"!=typeof t&&(
// There's no definition sidebar in the page front-matter.
t="always"===CONFIG.sidebar.display||"post"===CONFIG.sidebar.display&&e),t&&window.dispatchEvent(new Event("sidebar:show"))},activateSidebarPanel:function(e){const t=document.querySelector(".sidebar-inner"),n=document.querySelector(".sidebar-panel-container"),o=["sidebar-toc-active","sidebar-overview-active"];t.classList.contains(o[e])||window.anime({duration:200,targets:n,easing:"linear",opacity:0,translateY:[0,-20],complete:()=>{
// Prevent adding TOC to Overview if Overview was selected when close & open sidebar.
t.classList.replace(o[1-e],o[e]),window.anime({duration:200,targets:n,easing:"linear",opacity:[0,1],translateY:[-20,0]})}})},getScript:function(e,t={},n){if("function"==typeof t)return this.getScript(e,{condition:n}).then(t);const{condition:o=!1,attributes:{id:r="",async:a=!1,defer:c=!1,crossOrigin:i="",dataset:s={},...l}={},parentNode:d=null}=t;return new Promise((t,n)=>{if(o)t();else{const o=document.createElement("script");if(r&&(o.id=r),i&&(o.crossOrigin=i),o.async=a,o.defer=c,Object.assign(o.dataset,s),Object.entries(l).forEach(([e,t])=>{o.setAttribute(e,String(t))}),o.onload=t,o.onerror=n,"object"==typeof e){const{url:t,integrity:n}=e;o.src=t,n&&(o.integrity=n,o.crossOrigin="anonymous")}else o.src=e;(d||document.head).appendChild(o)}})},loadComments:function(e,t){return t?this.loadComments(e).then(t):new Promise(t=>{const n=document.querySelector(e);if(!CONFIG.comments.lazyload||!n)return void t();new IntersectionObserver((e,n)=>{e[0].isIntersecting&&(t(),n.disconnect())}).observe(n)})}};;
/* global NexT, CONFIG */
NexT.motion={},NexT.motion.integrator={queue:[],init:function(){return this.queue=[],this},add:function(e){const t=e();return CONFIG.motion.async?this.queue.push(t):this.queue=this.queue.concat(t),this},bootstrap:function(){CONFIG.motion.async||(this.queue=[this.queue]),this.queue.forEach(e=>{const t=window.anime.timeline({duration:200,easing:"linear"});e.forEach(e=>{e.deltaT?t.add(e,e.deltaT):t.add(e)})})}},NexT.motion.middleWares={header:function(){const e=[];function t(t,o=!1){e.push({targets:t,opacity:1,top:0,deltaT:o?"-=200":"-=0"})}var o;return t(".header"),"Mist"===CONFIG.scheme&&(o=".logo-line",e.push({targets:o,scaleX:[0,1],duration:500,deltaT:"-=200"})),"Muse"===CONFIG.scheme&&t(".custom-logo-image"),t(".site-title"),t(".site-brand-container .toggle",!0),t(".site-subtitle"),("Pisces"===CONFIG.scheme||"Gemini"===CONFIG.scheme)&&t(".custom-logo-image"),document.querySelectorAll(".menu-item").forEach(t=>{e.push({targets:t,complete:()=>t.classList.add("animated","fadeInDown"),deltaT:"-=200"})}),e},subMenu:function(){const e=document.querySelectorAll(".sub-menu .menu-item");return e.length>0&&e.forEach(e=>{e.classList.add("animated")}),[]},postList:function(){const e=[],{post_block:t,post_header:o,post_body:n,coll_header:s}=CONFIG.motion.transition;function i(t,o){t&&document.querySelectorAll(o).forEach(o=>{e.push({targets:o,complete:()=>o.classList.add("animated",t),deltaT:"-=100"})})}return i(t,".post-block, .pagination, .comments"),i(s,".collection-header"),i(o,".post-header"),i(n,".post-body"),e},sidebar:function(){const e=document.querySelector(".sidebar"),t=CONFIG.motion.transition.sidebar;
// Only for Pisces | Gemini.
return!t||"Pisces"!==CONFIG.scheme&&"Gemini"!==CONFIG.scheme?[]:[{targets:e,complete:()=>e.classList.add("animated",t)}]},footer:function(){return[{targets:document.querySelector(".footer"),opacity:1}]}};;
/* global CONFIG */
document.addEventListener("DOMContentLoaded",()=>{const e="right"===CONFIG.sidebar.position,i={};function t(){const e=document.querySelector(".footer"),i=document.querySelector(".header").offsetHeight+document.querySelector(".main").offsetHeight+e.offsetHeight;e.classList.toggle("footer-fixed",i<=window.innerHeight)}({lines:document.querySelector(".sidebar-toggle"),init:function(){window.addEventListener("mousedown",this.mousedownHandler),window.addEventListener("mouseup",this.mouseupHandler.bind(this)),document.querySelector(".sidebar-dimmer").addEventListener("click",this.clickHandler.bind(this)),document.querySelector(".sidebar-toggle").addEventListener("click",this.clickHandler.bind(this)),window.addEventListener("sidebar:show",this.showSidebar),window.addEventListener("sidebar:hide",this.hideSidebar)},mousedownHandler:function(e){i.X=e.pageX,i.Y=e.pageY},mouseupHandler:function(e){const t=e.pageX-i.X,d=e.pageY-i.Y;
// Fancybox has z-index property, but medium-zoom does not, so the sidebar will overlay the zoomed image.
(Math.hypot(t,d)<20&&e.target.matches(".main")||e.target.matches("img.medium-zoom-image"))&&this.hideSidebar()},clickHandler:function(){document.body.classList.contains("sidebar-active")?this.hideSidebar():this.showSidebar()},showSidebar:function(){document.body.classList.add("sidebar-active");const i=e?"fadeInRight":"fadeInLeft";document.querySelectorAll(".sidebar .animated").forEach((e,t)=>{e.style.animationDelay=100*t+"ms",e.classList.remove(i),setTimeout(()=>{
// Trigger a DOM reflow
e.classList.add(i)})})},hideSidebar:function(){document.body.classList.remove("sidebar-active")}}).init(),t(),window.addEventListener("resize",t),window.addEventListener("scroll",t,{passive:!0})});;
/* global NexT, CONFIG */
NexT.boot={},NexT.boot.registerEvents=function(){NexT.utils.registerScrollPercent(),NexT.utils.registerCanIUseTag(),
// Mobile top menu bar.
document.querySelector(".site-nav-toggle .toggle").addEventListener("click",e=>{e.currentTarget.classList.toggle("toggle-close");const t=document.querySelector(".site-nav");t&&(t.style.setProperty("--scroll-height",t.scrollHeight+"px"),document.body.classList.toggle("site-nav-on"))}),document.querySelectorAll(".sidebar-nav li").forEach((e,t)=>{e.addEventListener("click",()=>{NexT.utils.activateSidebarPanel(t)})}),window.addEventListener("hashchange",()=>{const e=location.hash;if(""!==e&&!e.match(/%\S{2}/)){const t=document.querySelector(`.tabs ul.nav-tabs li a[href="${e}"]`);t&&t.click()}})},NexT.boot.refresh=function(){
/**
   * Register JS handlers by condition option.
   * Need to add config option in Front-End at 'scripts/helpers/next-config.js' file.
   */
CONFIG.prism&&window.Prism.highlightAll(),CONFIG.mediumzoom&&window.mediumZoom(".post-body :not(a) > img, .post-body > img",{background:"var(--content-bg-color)"}),CONFIG.lazyload&&window.lozad(".post-body img").observe(),CONFIG.pangu&&window.pangu.spacingPage(),CONFIG.exturl&&NexT.utils.registerExtURL(),NexT.utils.registerCopyCode(),NexT.utils.registerTabsTag(),NexT.utils.registerActiveMenuItem(),NexT.utils.registerLangSelect(),NexT.utils.registerSidebarTOC(),NexT.utils.registerPostReward(),NexT.utils.wrapTableWithBox(),NexT.utils.registerVideoIframe()},NexT.boot.motion=function(){
// Define Motion Sequence & Bootstrap Motion.
CONFIG.motion.enable&&NexT.motion.integrator.add(NexT.motion.middleWares.header).add(NexT.motion.middleWares.postList).add(NexT.motion.middleWares.sidebar).add(NexT.motion.middleWares.footer).bootstrap(),NexT.utils.updateSidebarPosition()},document.addEventListener("DOMContentLoaded",()=>{NexT.boot.registerEvents(),NexT.boot.refresh(),NexT.boot.motion()});