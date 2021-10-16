/* global NexT, CONFIG, Pjax */
const pjax=new Pjax({selectors:["head title",'script[type="application/json"]',".main-inner",".post-toc-wrap",".languages",".pjax"],analytics:!1,cacheBust:!1,scrollTo:!CONFIG.bookmark.enable});document.addEventListener("pjax:success",()=>{pjax.executeScripts(document.querySelectorAll("script[data-pjax]")),NexT.boot.refresh(),
// Define Motion Sequence & Bootstrap Motion.
CONFIG.motion.enable&&NexT.motion.integrator.init().add(NexT.motion.middleWares.subMenu).add(NexT.motion.middleWares.postList).bootstrap();const e=document.querySelector(".post-toc");document.querySelector(".sidebar-inner").classList.toggle("sidebar-nav-active",e),NexT.utils.activateSidebarPanel(e?0:1),NexT.utils.updateSidebarPosition()});