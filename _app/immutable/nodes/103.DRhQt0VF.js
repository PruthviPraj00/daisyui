import{T as Pt,a as v,t as x,c as rt,f as W,s as a,b as s,K as Dt}from"../chunks/disclose-version.vS8Cq8Jh.js";import{C as xt,E as Bt,a5 as Ot,a6 as Rt,e as zt,j as Nt,K as qt,w as Ht,q as Gt,p as Yt,s as Ct,R as Vt,a as Kt,o as st,u as r,t as b,g as u,x as $t}from"../chunks/runtime.FCCJB71a.js";import{b as Wt,d as Zt,a as T}from"../chunks/render.Bh2lV6rC.js";import{p as ut}from"../chunks/112.BoehNm50.js";import{a as Jt}from"../chunks/await.sk7arveg.js";import{i as L}from"../chunks/if.CGrjAiqq.js";import{e as nt,i as it}from"../chunks/each.CwifjmX2.js";import{h as Qt}from"../chunks/html.CvCJrg-t.js";import{h as Xt,s as g}from"../chunks/i18n.Cn-Kdda_.js";import{s as te}from"../chunks/class.CCmDclRQ.js";import{o as ee}from"../chunks/index-client.DCw5r-pO.js";import{S as ae}from"../chunks/SEO.D5q_0SCJ.js";import{C as re}from"../chunks/Countdown.w8gEokE7.js";const Ft=typeof window<"u",se=Ft?requestAnimationFrame:xt,ne=Ft?()=>performance.now():()=>Date.now(),N={tick:i=>se(i),now:()=>ne(),tasks:new Set};function St(i){N.tasks.forEach(e=>{e.c(i)||(N.tasks.delete(e),e.f())}),N.tasks.size!==0&&N.tick(St)}function ie(i){let e;return N.tasks.size===0&&N.tick(St),{promise:new Promise(c=>{N.tasks.add(e={c:i,f:c})}),abort(){N.tasks.delete(e)}}}function pt(i,e){i.dispatchEvent(new CustomEvent(e))}function oe(i){const e=i.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(c=>c[0].toUpperCase()+c.slice(1)).join("")}function de(i){const e={},c=i.split(";");for(const _ of c){const[l,p]=_.split(":");if(!l||p===void 0)break;const F=oe(l.trim());e[F]=p.trim()}return e}const le=i=>i;function _t(i,e,c,_){var l=(i&Pt)!==0,p="both",F,y=e.inert,S,n;function k(){return F??(F=c()(e,_==null?void 0:_(),{direction:p}))}var U={is_global:l,in(){e.inert=y,pt(e,"introstart"),S=jt(e,k(),n,1,()=>{pt(e,"introend"),S=F=void 0})},out(j){e.inert=!0,pt(e,"outrostart"),n=jt(e,k(),S,0,()=>{pt(e,"outroend"),n=F=void 0,j==null||j()}),n.reset},stop:()=>{S==null||S.abort(),n==null||n.abort()}},$=qt;if(($.transitions??($.transitions=[])).push(U),Wt){let j=l;if(!j){for(var h=$.parent;h&&h.f&Bt;)for(;(h=h.parent)&&!(h.f&Ot););j=!h||(h.f&Rt)!==0}j&&zt(()=>{Nt(()=>U.in())})}}function jt(i,e,c,_,l){if(Ht(e)){var p;return Gt(()=>{var M=e({direction:_===1?"in":"out"});p=jt(i,M,c,_,l)}),{abort:()=>p.abort(),deactivate:()=>p.deactivate(),reset:()=>p.reset(),t:M=>p.t(M)}}if(c==null||c.deactivate(),!(e!=null&&e.duration))return l==null||l(),{abort:xt,deactivate:xt,reset:xt,t:()=>_};var{delay:F=0,duration:y,css:S,tick:n,easing:k=le}=e,U=N.now()+F,$=(c==null?void 0:c.t(U))??1-_,h=_-$;y*=Math.abs(h);var j=U+y,I,q;if(S){for(var w=[],ot=Math.ceil(y/16.666666666666668),X=0;X<=ot;X+=1){var dt=$+h*k(X/ot),ft=S(dt,1-dt);w.push(de(ft))}I=i.animate(w,{delay:F,duration:y,easing:"linear",fill:"forwards"}),I.finished.then(()=>{l==null||l(),_===1&&I.cancel()}).catch(M=>{if(I.startTime!==null&&I.currentTime!==null)throw M})}else $===0&&(n==null||n(0,1)),q=ie(M=>{if(M>=j)return n==null||n(_,1-_),l==null||l(),!1;if(M>=U){var G=$+h*k((M-U)/y);n==null||n(G,1-G)}return!0});return{abort:()=>{I==null||I.cancel(),q==null||q.abort()},deactivate:()=>{l=void 0},reset:()=>{_===0&&(n==null||n(1,0))},t:M=>{var G=$+h*k((M-U)/y);return Math.min(1,Math.max(0,G))}}}const ce=i=>i;function ve(i){const e=i-1;return e*e*e+1}function Mt(i,{delay:e=0,duration:c=400,easing:_=ce}={}){const l=+getComputedStyle(i).opacity;return{delay:e,duration:c,easing:_,css:p=>`opacity: ${p*l}`}}function Lt(i,{delay:e=0,duration:c=400,easing:_=ve,axis:l="y"}={}){const p=getComputedStyle(i),F=+p.opacity,y=l==="y"?"height":"width",S=parseFloat(p[y]),n=l==="y"?["top","bottom"]:["left","right"],k=n.map(w=>`${w[0].toUpperCase()}${w.slice(1)}`),U=parseFloat(p[`padding${k[0]}`]),$=parseFloat(p[`padding${k[1]}`]),h=parseFloat(p[`margin${k[0]}`]),j=parseFloat(p[`margin${k[1]}`]),I=parseFloat(p[`border${k[0]}Width`]),q=parseFloat(p[`border${k[1]}Width`]);return{delay:e,duration:c,easing:_,css:w=>`overflow: hidden;opacity: ${Math.min(w*20,1)*F};${y}: ${w*S}px;padding-${n[0]}: ${w*U}px;padding-${n[1]}: ${w*$}px;margin-${n[0]}: ${w*h}px;margin-${n[1]}: ${w*j}px;border-${n[0]}-width: ${w*I}px;border-${n[1]}-width: ${w*q}px;`}}var ue=(i,e,c)=>e(r(c)),pe=x('<svg aria-label="Clear filters" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5"><path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"></path></svg>'),_e=x("<button><!></button>"),xe=(i,e,c)=>e(u(c).data.attributes.code),fe=x('<div class="tooltip shrink-0 after:hidden" data-tip="Remaining time"><date class="grid grid-cols-3 gap-2 text-center font-mono text-xs"><div class="border-neutral-content/40 rounded-btn border border-dashed p-2"><span class="countdown block text-2xl"><span></span></span> <span class="text-neutral-content/40 text-xs">hour</span></div> <div class="border-neutral-content/40 rounded-btn border border-dashed p-2"><span class="countdown block text-2xl"><span></span></span> <span class="text-neutral-content/40 text-xs">min</span></div> <div class="border-neutral-content/40 rounded-btn border border-dashed p-2"><span class="countdown block text-2xl"><span></span></span> <span class="text-neutral-content/40 text-xs">sec</span></div></date></div>'),me=x('<div class="text-neutral-content/20 rounded-btn shrink-0 border border-dashed p-2">Ended</div>'),he=x('<div class="mx-4 mb-10"><div class="alert min-h-24 border-transparent bg-neutral text-neutral-content"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mx-4"><path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"></path></svg> <div class="flex w-full flex-col items-center justify-between gap-10 sm:flex-row"><div class="flex flex-col gap-1"><h2 class="text-lg font-bold"> </h2> <div class="text-neutral-content/70 text-sm [text-wrap:balance]">Use <span class="tooltip tooltip-info"><button class="font-mono tracking-wide badge px-2 badge-info"> </button></span> </div></div> <!></div></div></div>'),be=x('<span class="badge badge-success badge-outline italic"> </span>'),ge=x('<span class="flex gap-2"></span>'),we=x('<span class="text-2xl line-through opacity-40 xl:text-4xl"> </span>'),ye=x('<span class="font-title text-2xl font-light xl:text-5xl"> </span>'),ke=x('From <span class="font-title text-2xl font-light xl:text-5xl"> </span> to <span class="font-title text-2xl font-light xl:text-5xl"> </span>',1),Ce=x('<span class="font-title text-2xl font-light xl:text-5xl"> </span>'),$e=x('<span class="text-sm italic opacity-40"> </span>'),je=x('<a class="link text-xs" target="_blank">Live Preview</a>'),Me=x('<div class="prose prose-sm prose-li:my-0 prose-ul:leading-none prose-li:leading-normal prose-p:my-2 prose-ul:my-2 text-xs [text-wrap:balance]"><!></div>'),Le=x('<div class="lg:border-base-content/10 tooltip grid place-content-center rounded-full border-dashed lg:border lg:p-2 xl:p-3"><img class="aspect-square w-5 xl:w-6"></div>'),Fe=x('<div class="flex items-center justify-center gap-4 md:justify-end"><span class="text-base-content/50 text-xs italic">made with</span> <!></div>'),Se=x('<div class="rounded-box relative grid grid-cols-12 gap-y-10 py-10 xl:gap-x-10"><div class="col-span-12 row-start-2 flex flex-col gap-8 xl:col-span-5 xl:row-start-1"><div><!> <h2 class="font-title text-lg font-black [text-wrap:balance] sm:text-3xl xl:text-5xl"> </h2></div> <div class="flex items-start justify-between"><div class="flex gap-2"><!> <span class="flex flex-col"><span class="flex items-center gap-2"><!></span> <!></span></div> <div class="flex flex-col items-center gap-3"><a class="btn btn-primary shadow-primary/50 group shrink-0 rounded-full shadow xl:px-10" target="_blank" rel="noopener noreferrer">Get it now <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="hidden h-6 w-6 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1 md:inline-block"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path></svg></a> <!></div></div> <!></div> <div class="col-span-12 row-start-1 flex flex-col gap-6 xl:col-span-7"><a target="_blank" rel="noopener noreferrer" class="rounded-box border-base-200 group relative block aspect-[4/3] overflow-hidden border object-cover"><div class="absolute inset-0 z-[1] grid place-content-center bg-black/50 opacity-0 transition-all duration-500 group-hover:scale-150 group-hover:opacity-100"><svg class="text-white" width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"></path><path d="M21 15L21 27" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.0156 21.0156L27 21" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M33.2216 33.2217L41.7069 41.707" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg></div> <img loading="lazy" class="bg-base-300 aspect-[4/3] w-full bg-cover bg-center object-cover"></a> <!></div></div>'),Ie=x('<div class="lg:col-span-3 flex justify-center items-center font-bold text-base-content/20 py-32">Coming soon…</div>'),Ee=x('<div class="rounded-box border-base-300 text-base-content/30 flex h-72 flex-col items-center justify-center gap-6 border-2 border-dashed p-10 text-center [text-wrap:balance]"><svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="10" width="40" height="30" rx="2" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></rect><path d="M14 6V14" stroke="currentColor" stroke-width="4" stroke-linecap="round"></path><path d="M25 23L14 23" stroke="currentColor" stroke-width="4" stroke-linecap="round"></path><path d="M34 31L14 31" stroke="currentColor" stroke-width="4" stroke-linecap="round"></path><path d="M34 6V14" stroke="currentColor" stroke-width="4" stroke-linecap="round"></path></svg> <div> </div></div>'),Te=x('<div class="lg:col-span-3 flex justify-center items-center font-bold text-base-content/20">Coming soon…</div>'),Ue=x(`<!> <div class="flex gap-6 justify-between mx-4 flex-col lg:flex-row"><div class="flex flex-col gap-2"><h1 class="font-title text-base-content text-3xl font-extrabold lg:text-4xl">daisyUI store</h1> <p class="text-base-content/60 text-sm">Official templates made by daisyUI</p></div> <div class="flex flex-col gap-3"><div class="text-xs text-base-content/50">Filter by</div> <div class="flex gap-2 items-center"></div></div></div> <hr class="mb-20 mt-10 mx-4"> <div><!> <div class="mx-auto flex max-w-7xl flex-col gap-16"></div> <div class="divider text-base-content/30 my-20">In development</div> <div class="grid gap-12 lg:grid-cols-3"></div> <div class="divider text-base-content/30 my-20"></div> <div id="mc_embed_shell" class="card bg-base-200 mt-10"><div class="card-body flex flex-col gap-4"><h2 class="text-xl font-black lg:text-4xl">Get notified about upcoming products and discounts!</h2> <div><p class="font-bold">Subscribe to daisyUI store newsletter to get updates about new products and discounts codes.</p> <p class="text-base-content/60 text-xs">You will only receive a single email when a new product is added or when a new discount code
          is available. No spam. No ads.</p></div> <div id="mc_embed_signup"><form action="https://gmail.us8.list-manage.com/subscribe/post?u=42813cff910e47b1bd132369a&amp;id=9fd7333f07&amp;f_id=003d03e0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" novalidate=""><input type="checkbox" name="group[347002][8]" value="1" class="hidden" checked="checked"> <input type="checkbox" name="group[347002][1]" value="1" class="hidden" checked="checked"> <div class="form-control w-full max-w-sm"><label class="label" for="mce-EMAIL"><span class="label-text">Email Address</span></label> <div class="join"><input type="email" name="EMAIL" class="join-item input input-bordered w-full max-w-sm" id="mce-EMAIL" placeholder="mail@site.com" required> <button name="subscribe" class="join-item btn btn-success">Subscribe</button></div></div> <div aria-hidden="true" class="hidden"><input type="text" name="b_42813cff910e47b1bd132369a_9fd7333f07" tabindex="-1" value=""></div></form></div></div></div></div>`,1);function Ke(i,e){Yt(e,!0);let c=Ct(ut(new Date().toISOString()));Vt(()=>{const o=setInterval(()=>{st(c,ut(new Date().toISOString()))},1e3);return()=>clearInterval(o)});const _=(async()=>await(await fetch("https://api.daisyui.com/api/discount.json")).json())();function l(o){const t=(o/100).toFixed(2);return`$${t.endsWith(".00")?t.slice(0,-3):t}`}function p(o){const t=/\/buy\/([a-f0-9-]{36})(?:\?|$)/,D=o.match(t);return D?D[1]:null}const F={year:"numeric",month:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"};let y=Ct(!1);const S=o=>{navigator.clipboard.writeText(o),st(y,!0),setTimeout(()=>{st(y,!1)},2e3)};let n=Ct("");ee(()=>{const t=new URLSearchParams(window.location.search).get("filter")||"";st(n,ut(t))});function k(o,t){const D=new URL(window.location);D.searchParams.set(o,t),window.history.pushState({},"",D)}function U(o){st(n,ut(o==="all"?"":o)),k("filter",u(n))}let $=$t(()=>e.data.products.filter(o=>{var t;return u(n)===""||((t=o.tech)==null?void 0:t.includes(u(n)))}).sort((o,t)=>0));var h=Ue(),j=W(h);ae(j,{title:"Official daisyUI Store",desc:"daisyUI Store - Professional templates made by daisyUI"});var I=a(a(j,!0)),q=s(I),w=a(a(q,!0)),ot=s(w),X=a(a(ot,!0));nt(X,73,()=>e.data.techFilters,it,(o,t,D)=>{var B=rt(),H=W(B);L(H,()=>u(n)===""&&r(t)!=="all"||u(n)==="all"||u(n)!==""&&(r(t)===u(n)||r(t)==="all"),R=>{var C=_e();_t(3,C,()=>Lt,()=>({duration:50,axis:"x"})),C.__click=[ue,U,t];var tt=s(C);L(tt,()=>r(t)==="all",z=>{var O=pe();v(z,O)},z=>{var O=Dt(z);b(()=>T(O,e.data.tech[r(t)].title)),v(z,O)}),b(()=>{te(C,`btn btn-sm rounded-full ${r(t)==="all"?"btn-circle":""} ${u(n)===r(t)?"btn-neutral":""}`),g(C,"xstyle",r(t)!=="all"?`background-color: ${e.data.tech[r(t)].bg};border-color: ${e.data.tech[r(t)].bg};color: ${e.data.tech[r(t)].fg};`:""),g(C,"aria-label",r(t)==="all"?"×":e.data.tech[r(t)].title)}),v(R,C)}),v(o,B)});var dt=a(a(I,!0)),ft=a(a(dt,!0)),M=s(ft);Jt(M,()=>_,o=>{},(o,t)=>{var D=rt(),B=W(D);L(B,()=>u(t).data.attributes.expires_at&&new Date(u(t).data.attributes.expires_at).toISOString()>u(c),H=>{var R=he(),C=s(R);_t(3,C,()=>Lt,()=>({duration:400}));var tt=s(C),z=a(a(tt,!0));_t(3,z,()=>Mt,()=>({duration:400}));var O=s(z),et=s(O),lt=s(et),mt=a(a(et,!0)),Z=a(s(mt)),ct=s(Z);ct.__click=[xe,S,t];var ht=s(ct),bt=a(Z,!0),vt=a(a(O,!0));L(vt,()=>u(t).data.attributes.expires_at,gt=>{var wt=$t(()=>new Date(u(t).data.attributes.expires_at).toLocaleString("en-GB",F));re(gt,{get from(){return u(wt)},dateFormat:"DD/MM/YYYY, HH:mm:ss",children:(yt,at)=>{const J=$t(()=>at.remaining);var Y=rt(),kt=W(Y);L(kt,()=>u(J).done===!1,f=>{var d=fe();_t(3,d,()=>Mt,()=>({duration:400}));var m=s(d);b(()=>g(m,"datetime",new Date(u(t).data.attributes.expires_at).toLocaleString("en-GB",F)));var A=s(m),P=s(A),E=s(P),V=a(a(A,!0)),K=s(V),Q=s(K),Tt=a(a(V,!0)),Ut=s(Tt),At=s(Ut);b(()=>{g(E,"style",`--value:${u(J).hours};`),g(Q,"style",`--value:${u(J).minutes};`),g(At,"style",`--value:${u(J).seconds};`)}),v(f,d)},f=>{var d=rt(),m=W(d);L(m,()=>!e.data,A=>{var P=me();v(A,P)},null,!0),v(f,d)}),v(yt,Y)},$$slots:{default:!0}})}),b(()=>{T(lt,u(t).data.attributes.name),g(Z,"data-tip",u(y)?"copied":"copy"),T(ht,u(t).data.attributes.code),T(bt,` code at checkout to get ${u(t).data.attributes.amount??""}% discount on all products.`)}),v(H,R)}),v(o,D)});var G=a(a(M,!0));nt(G,73,()=>u($),it,(o,t,D)=>{var B=Se(),H=s(B),R=s(H),C=s(R);L(C,()=>r(t).tags,f=>{var d=ge();nt(d,73,()=>r(t).tags,it,(m,A,P)=>{var E=be(),V=s(E);b(()=>T(V,r(A))),v(m,E)}),v(f,d)});var tt=a(a(C,!0)),z=s(tt),O=a(a(R,!0)),et=s(O),lt=s(et);L(lt,()=>r(t).originalprice,f=>{var d=we(),m=s(d);b(()=>T(m,` ${l(r(t).originalprice)??""} `)),v(f,d)});var mt=a(a(lt,!0)),Z=s(mt),ct=s(Z);L(ct,()=>r(t).displayprice,f=>{var d=ye(),m=s(d);b(()=>T(m,l(r(t).displayprice))),v(f,d)},f=>{var d=rt(),m=W(d);L(m,()=>r(t).attributes.from_price&&r(t).attributes.to_price&&r(t).attributes.from_price!==r(t).attributes.to_price,A=>{var P=ke(),E=a(W(P,!0)),V=s(E);b(()=>T(V,l(r(t).attributes.from_price)));var K=a(a(E,!0)),Q=s(K);b(()=>T(Q,l(r(t).attributes.to_price))),v(A,P)},A=>{var P=Ce(),E=s(P);b(()=>T(E,l(r(t).attributes.price))),v(A,P)},!0),v(f,d)});var ht=a(a(Z,!0));L(ht,()=>r(t).displaypricenote,f=>{var d=$e(),m=s(d);b(()=>T(m,r(t).displaypricenote)),v(f,d)});var bt=a(a(et,!0)),vt=s(bt);b(()=>g(vt,"href",r(t).ref?`/store/checkout?product=${p(r(t).attributes.buy_now_url)}&aff=${r(t).ref}`:r(t).attributes.buy_now_url));var gt=a(a(vt,!0));L(gt,()=>r(t).preveiw_url,f=>{var d=je();b(()=>g(d,"href",r(t).preveiw_url)),v(f,d)});var wt=a(a(O,!0));L(wt,()=>r(t).attributes.description,f=>{var d=Me(),m=s(d);Qt(m,()=>r(t).attributes.description),v(f,d)});var yt=a(a(H,!0)),at=s(yt),J=s(at),Y=a(a(J,!0)),kt=a(a(at,!0));L(kt,()=>r(t).tech,f=>{var d=Fe(),m=s(d),A=a(a(m,!0));nt(A,65,()=>r(t).tech,it,(P,E,V)=>{var K=Le(),Q=s(K);b(()=>{g(K,"data-tip",e.data.tech[r(E)].title),g(Q,"src",`https://img.daisyui.com/images/logos/${r(E)}.svg`),g(Q,"alt",r(E))}),v(P,K)}),v(f,d)}),b(()=>{g(B,"id",r(t).id),T(z,r(t).attributes.name),g(at,"href",r(t).screenshot?r(t).screenshot:r(t).attributes.large_thumb_url),g(Y,"style",`background-image: url('${r(t).attributes.thumb_url}')`),g(Y,"src",r(t).attributes.large_thumb_url),g(Y,"alt",r(t).attributes.name)}),Xt(Y),v(o,B)},o=>{var t=Ie();v(o,t)});var It=a(a(G,!0)),Et=a(a(It,!0));nt(Et,73,()=>e.data.futureProducts,it,(o,t,D)=>{var B=Ee(),H=s(B),R=a(a(H,!0)),C=s(R);b(()=>T(C,r(t))),v(o,B)},o=>{var t=Te();v(o,t)}),v(i,h),Kt()}Zt(["click"]);export{Ke as component};
