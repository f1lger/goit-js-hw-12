import{a as b,S,i as u}from"./assets/vendor-6e0bf343.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const v="34205532-dcd3b12e75460bc879dbf1602",w="https://pixabay.com/api/?";async function m(e,t){const s={params:{key:v,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}};return await b.get(`${w}`,s).then(i=>i).catch(i=>console.log(i.status))}function q(e){return e.map(({webformatURL:t,largeImageURL:s,tags:i,likes:o,views:r,comments:c,downloads:L})=>`<li class="card-item">
  <a href=${s}
    ><img src=${t} alt="${i}" height="200"/>
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
</li>`).join("")}const C=document.querySelector(".form"),p=document.querySelector(".image-list"),f=document.querySelector(".loader"),l=document.querySelector(".load-btn"),E=document.querySelector(".cards");C.addEventListener("submit",$);l.addEventListener("click",A);const P=new S(".card-item a",{captionsData:"alt",captionDelay:250,captionClass:"caption"});let n=1,h,a;async function $(e){if(e.preventDefault(),n=1,a=e.currentTarget.elements.search.value.trim(),e.currentTarget.elements.search.value="",!a)return u.error({title:"",message:"The field can not be empty!!!",position:"topRight",timeout:3e3});p.innerHTML="",d(),await await m(a,n).then(t=>g(t)).then(t=>y(t))}async function A(e){return n+=1,console.log(n),e.preventDefault(),d(),await m(a,n).then(t=>g(t)).then(t=>y(t)).catch(t=>console.log(t))}async function g({data:e}){return console.log(e),h=Math.ceil(e.totalHits/e.hits.length),n>=h&&e.totalHits?(u.info({position:"topRight",timeout:3e3,message:"We're sorry, but you've reached the end of search results.",color:"blue"}),l.classList.add("is-hidden")):l.classList.remove("is-hidden"),e}function y({hits:e}){if(e.length){const t=q(e);p.insertAdjacentHTML("beforeend",t),d(),P.refresh();const{height:s}=E.getBoundingClientRect();window.scrollBy({top:s,behavior:"smooth"})}else{u.error({title:"Error",timeout:3e3,message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),f.classList.add("is-hidden"),l.classList.add("is-hidden");return}}function d(){f.classList.toggle("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
