var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(t,n){t.appendChild(n)}function a(t){t.parentNode.removeChild(t)}function s(t){return document.createElement(t)}function i(t){return document.createTextNode(t)}function l(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}let f;function d(t){f=t}const p=[],h=[],m=[],$=[],g=Promise.resolve();let b=!1;function y(t){m.push(t)}let _=!1;const x=new Set;function v(){if(!_){_=!0;do{for(let t=0;t<p.length;t+=1){const n=p[t];d(n),k(n.$$)}for(d(null),p.length=0;h.length;)h.pop()();for(let t=0;t<m.length;t+=1){const n=m[t];x.has(n)||(x.add(n),n())}m.length=0}while(p.length);for(;$.length;)$.pop()();b=!1,_=!1,x.clear()}}function k(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(y)}}const w=new Set;function E(t,n){-1===t.$$.dirty[0]&&(p.push(t),b||(b=!0,g.then(v)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function j(c,u,s,i,l,p,h=[-1]){const m=f;d(c);const $=c.$$={fragment:null,ctx:null,props:p,update:t,not_equal:l,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(m?m.$$.context:u.context||[]),callbacks:e(),dirty:h,skip_bound:!1};let g=!1;if($.ctx=s?s(c,u.props||{},((t,n,...e)=>{const o=e.length?e[0]:n;return $.ctx&&l($.ctx[t],$.ctx[t]=o)&&(!$.skip_bound&&$.bound[t]&&$.bound[t](o),g&&E(c,t)),n})):[],$.update(),g=!0,o($.before_update),$.fragment=!!i&&i($.ctx),u.target){if(u.hydrate){const t=function(t){return Array.from(t.childNodes)}(u.target);$.fragment&&$.fragment.l(t),t.forEach(a)}else $.fragment&&$.fragment.c();u.intro&&((b=c.$$.fragment)&&b.i&&(w.delete(b),b.i(_))),function(t,e,c,u){const{fragment:a,on_mount:s,on_destroy:i,after_update:l}=t.$$;a&&a.m(e,c),u||y((()=>{const e=s.map(n).filter(r);i?i.push(...e):o(e),t.$$.on_mount=[]})),l.forEach(y)}(c,u.target,u.anchor,u.customElement),v()}var b,_;d(m)}function A(n){let e,o,r,c,f,d,p;return{c(){e=s("main"),o=s("h1"),r=i("¡Holaaaaaaa "),c=i(n[0]),f=i("!"),d=i(" "),p=s("p"),p.innerHTML='Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.',l(o,"class","svelte-1tky8bj"),l(e,"class","svelte-1tky8bj")},m(t,n){!function(t,n,e){t.insertBefore(n,e||null)}(t,e,n),u(e,o),u(o,r),u(o,c),u(o,f),u(e,d),u(e,p)},p(t,[n]){1&n&&function(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}(c,t[0])},i:t,o:t,d(t){t&&a(e)}}}function S(t,n,e){let{name:o}=n;return t.$$set=t=>{"name"in t&&e(0,o=t.name)},[o]}return new class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),j(this,t,S,A,c,{name:0})}}({target:document.body,props:{name:"mundooooo"}})}();
//# sourceMappingURL=bundle.js.map
