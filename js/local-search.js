/* global CONFIG */
window.addEventListener("DOMContentLoaded",()=>{
// Popup Window
let e,t=!1,r=!0,n=CONFIG.path;0===n.length?n="search.xml":/json$/i.test(n)&&(r=!1);const o=CONFIG.root+n,l=document.getElementById("search-input"),s=document.getElementById("search-result"),c=(e,t,r)=>{let n=e.length;if(0===n)return[];let o=0,l=[],s=[];for(r||(t=t.toLowerCase(),e=e.toLowerCase());(l=t.indexOf(e,o))>-1;)s.push({position:l,word:e}),o=l+n;return s},a=(e,t,r,n)=>{let o=r[r.length-1],{position:l,word:s}=o,c=[],a=0;for(;l+s.length<=t&&0!==r.length;){s===n&&a++,c.push({position:l,length:s.length});let e=l+s.length;
// Move to next position of hit
for(r.pop();0!==r.length&&(o=r[r.length-1],l=o.position,s=o.word,e>l);)r.pop()}return{hits:c,start:e,end:t,searchTextCount:a}},i=(e,t)=>{let r="",n=t.start;return t.hits.forEach(t=>{r+=e.substring(n,t.position);let o=t.position+t.length;r+=`<b class="search-keyword">${e.substring(t.position,o)}</b>`,n=o}),r+=e.substring(n,t.end),r},h=()=>{let t=l.value.trim().toLowerCase(),r=t.split(/[-\s]+/);r.length>1&&r.push(t);let n=[];if(t.length>0&&
// Perform local searching
e.forEach(e=>{
// Only match articles with not empty titles
if(!e.title)return;let o=0,l=e.title.trim(),s=l.toLowerCase(),h=e.content?e.content.trim().replace(/<[^>]+>/g,""):"";CONFIG.localsearch.unescape&&(h=String(h).replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&#x3A;/g,":").replace(/&#(\d+);/g,(e,t)=>String.fromCharCode(t)).replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&"));let u=h.toLowerCase(),p=decodeURIComponent(e.url).replace(/\/{2,}/g,"/"),d=[],g=[];
// Show search results
if(r.forEach(e=>{d=d.concat(c(e,s,!1)),g=g.concat(c(e,u,!1))}),d.length>0||g.length>0){let e=d.length+g.length;
// Sort index by position of keyword
[d,g].forEach(e=>{e.sort((e,t)=>t.position!==e.position?t.position-e.position:e.word.length-t.word.length)});let r=[];if(0!==d.length){let e=a(0,l.length,d,t);o+=e.searchTextCountInSlice,r.push(e)}let s=[];for(;0!==g.length;){let e=g[g.length-1],{position:r,word:n}=e,l=r-20,c=r+80;l<0&&(l=0),c<r+n.length&&(c=r+n.length),c>h.length&&(c=h.length);let i=a(l,c,g,t);o+=i.searchTextCountInSlice,s.push(i)}
// Sort slices in content by search text's count and hits' count
s.sort((e,t)=>e.searchTextCount!==t.searchTextCount?t.searchTextCount-e.searchTextCount:e.hits.length!==t.hits.length?t.hits.length-e.hits.length:e.start-t.start);
// Select top N slices in content
let c=parseInt(CONFIG.localsearch.top_n_per_article,10);c>=0&&(s=s.slice(0,c));let u="";0!==r.length?u+=`<li><a href="${p}" class="search-result-title">${i(l,r[0])}</a>`:u+=`<li><a href="${p}" class="search-result-title">${l}</a>`,s.forEach(e=>{u+=`<a href="${p}"><p class="search-result">${i(h,e)}...</p></a>`}),u+="</li>",n.push({item:u,searchTextCount:o,hitCount:e,id:n.length})}}),1===r.length&&""===r[0])s.innerHTML='<div id="no-result"><i class="fa fa-search fa-5x"></i></div>';else if(0===n.length)s.innerHTML='<div id="no-result"><i class="fa fa-frown-o fa-5x"></i></div>';else{n.sort((e,t)=>e.searchTextCount!==t.searchTextCount?t.searchTextCount-e.searchTextCount:e.hitCount!==t.hitCount?t.hitCount-e.hitCount:t.id-e.id);let e='<ul class="search-result-list">';n.forEach(t=>{e+=t.item}),e+="</ul>",s.innerHTML=e,window.pjax&&window.pjax.refresh(s)}},u=n=>{fetch(o).then(e=>e.text()).then(o=>{
// Get the contents from search data
t=!0,e=r?[...(new DOMParser).parseFromString(o,"text/xml").querySelectorAll("entry")].map(e=>({title:e.querySelector("title").innerHTML,content:e.querySelector("content").innerHTML,url:e.querySelector("url").innerHTML})):JSON.parse(o),
// Remove loading animation
document.querySelector(".search-pop-overlay").innerHTML="",document.body.style.overflow="",n&&n()})};CONFIG.localsearch.preload&&u();const p=()=>{document.body.style.overflow="hidden",document.querySelector(".search-pop-overlay").style.display="block",document.querySelector(".popup").style.display="block",document.getElementById("search-input").focus()};
// Search function
"auto"===CONFIG.localsearch.trigger?l.addEventListener("input",h):(document.querySelector(".search-icon").addEventListener("click",h),l.addEventListener("keypress",e=>{13===e.keyCode&&h()})),
// Handle and trigger popup window
document.querySelector(".popup-trigger").addEventListener("click",()=>{!1===t?(document.querySelector(".search-pop-overlay").style.display="",document.querySelector(".search-pop-overlay").innerHTML='<div class="search-loading-icon"><i class="fa fa-spinner fa-pulse fa-5x fa-fw"></i></div>',u(p)):p()});
// Monitor main search box
const d=()=>{document.body.style.overflow="",document.querySelector(".search-pop-overlay").style.display="none",document.querySelector(".popup").style.display="none"};document.querySelector(".search-pop-overlay").addEventListener("click",d),document.querySelector(".popup-btn-close").addEventListener("click",d),window.addEventListener("pjax:success",d),window.addEventListener("keyup",e=>{27===e.which&&d()})});