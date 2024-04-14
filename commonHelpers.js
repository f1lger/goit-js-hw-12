import{a as b,S,i as h}from"./assets/vendor-6e0bf343.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const v="34205532-dcd3b12e75460bc879dbf1602",w="https://pixabay.com/api/?";async function p(e,t){const n={params:{key:v,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}};return await b.get(`${w}`,n).then(s=>s).catch(s=>console.log(s.status))}function q(e){return e.map(({webformatURL:t,largeImageURL:n,tags:s,likes:o,views:r,comments:c,downloads:L})=>`<li class="card-item">
  <a href=${n}
    ><img src=${t} alt="${s}" height="200"/>
    <ul class="card-info">
      <li>
        Likes
        <p>${o}</p>
      </li>
      <li>
        Views
        <p>${r}</p>
      </li>
      <li>
        Comments
        <p>${c}</p>
      </li>
      <li>
        Downloads
        <p>${L}</p>
      </li>
    </ul></a
  >
</li>`).join("")}const C=document.querySelector(".form"),f=document.querySelector(".image-list"),m=document.querySelector(".loader"),a=document.querySelector(".load-btn"),E=document.querySelector(".cards");C.addEventListener("submit",$);a.addEventListener("click",A);const P=new S(".card-item a",{captionsData:"alt",captionDelay:250,captionClass:"caption"});let i=1,d,l;async function $(e){e.preventDefault(),i=1,l=e.currentTarget.elements.search.value.trim(),e.currentTarget.elements.search.value="",f.innerHTML="",u(),await await p(l,i).then(t=>g(t)).then(t=>y(t))}async function A(e){return i+=1,console.log(i),e.preventDefault(),u(),await p(l,i).then(t=>g(t)).then(t=>y(t)).catch(t=>console.log(t))}async function g({data:e}){return console.log(e),d=Math.ceil(e.totalHits/e.hits.length),i>=d&&e.totalHits?(h.info({position:"topRight",timeout:3e3,message:"We're sorry, but you've reached the end of search results.",color:"blue"}),a.classList.add("is-hidden")):a.classList.remove("is-hidden"),e}function y({hits:e}){if(e.length){const t=q(e);f.insertAdjacentHTML("beforeend",t),u(),P.refresh();const{height:n}=E.getBoundingClientRect();window.scrollBy({top:n,behavior:"smooth"})}else{h.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),m.classList.add("is-hidden"),a.classList.add("is-hidden");return}}function u(){m.classList.toggle("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
