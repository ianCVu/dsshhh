document.getElementById("frame").srcdoc = `
<html lang="en-us"><head><script src="https://s0.2mdn.net/instream/video/client.js" async="" type="text/javascript"></script><script async="" src="https://www.google-analytics.com/analytics.js"></script><script type="text/javascript" id="analytics" async="" src="https://cdn.jsdelivr.net/gh/st39/sdk@main/ga.js"></script><script type="text/javascript" async="" src="https://imasdk.googleapis.com/js/sdkloader/ima3.js"></script><script id="gamemonetize-sdk" src="https://cdn.jsdelivr.net/gh/st39/sdk@main/sdk.js"></script><script>(function(){
  const injectedHref = "https://1327995734-atari-embeds.googleusercontent.com/embeds/16cb204cf3a9d4d223a0a3fd8b0eec5d/inner-frame-minified.html?jsh=m%3B%2F_%2Fscs%2Fabc-static%2F_%2Fjs%2Fk%3Dgapi.lb.en.gSqfLc8WnvU.O%2Fd%3D1%2Frs%3DAHpOoo_cXXGArE2dtw6vkGR2NQ_1f5L3AQ%2Fm%3D__features__";
  const siteUrl = "https://sites.google.com";
  const injectedDomain = "1327995734-atari-embeds.googleusercontent.com";
  const BASE_FOR_REL = "https://1327995734-atari-embeds.googleusercontent.com/embeds/16cb204cf3a9d4d223a0a3fd8b0eec5d/inner-frame-minified.html?jsh=m%3B%2F_%2Fscs%2Fabc-static%2F_%2Fjs%2Fk%3Dgapi.lb.en.gSqfLc8WnvU.O%2Fd%3D1%2Frs%3DAHpOoo_cXXGArE2dtw6vkGR2NQ_1f5L3AQ%2Fm%3D__features__";
  function hookIMA() {
    let _google = window.google;
    Object.defineProperty(window, 'google', {
      configurable: true, enumerable: true,
      get: function() { return _google; },
      set: function(v) {
        _google = v;
        if (v && v.ima) {
           if (v.ima.settings && v.ima.settings.setPageUrl) {
               v.ima.settings.setPageUrl(siteUrl);
           }
           if (v.ima.AdsRequest && !v.ima.AdsRequest.__patched) {
             const OriginalAdsRequest = v.ima.AdsRequest;
             v.ima.AdsRequest = function() {
               const req = new OriginalAdsRequest();
               req.descriptionUrl = siteUrl;
               req.contentUrl = siteUrl;
               req.url = siteUrl;
               req.pageUrl = siteUrl;
               return req;
             };
             v.ima.AdsRequest.prototype = OriginalAdsRequest.prototype;
             v.ima.AdsRequest.__patched = true;
           }
        }
      }
    });
  }
  hookIMA();
  setInterval(function() {
    if (window.google && window.google.ima) {
       if (window.google.ima.settings && window.google.ima.settings.setPageUrl) { window.google.ima.settings.setPageUrl(siteUrl); }
       if (window.google.ima.AdsRequest && !window.google.ima.AdsRequest.__patched) {
         const OriginalAdsRequest = window.google.ima.AdsRequest;
         window.google.ima.AdsRequest = function() {
            const req = new OriginalAdsRequest();
            req.descriptionUrl = siteUrl;
            req.contentUrl = siteUrl;
            req.url = siteUrl;
            return req;
         };
         window.google.ima.AdsRequest.prototype = OriginalAdsRequest.prototype;
         window.google.ima.AdsRequest.__patched = true;
       }
    }
  }, 50);
  const AD_HOSTS = ['gamemonetize.com', 'gamedistribution.com'];
  function isAdHost(url){ try { return AD_HOSTS.some(h => url.includes(h)); } catch(e){ return false; } }
  function absolutize(url){ try{ new URL(url); return url; }catch(e){ try { return new URL(url, BASE_FOR_REL).href; } catch(e2){ return url; } } }
  function patchDomainParamToUrl(u){ try{ if(!(u instanceof URL)) u=new URL(u,location.href); const cur=u.searchParams.get('domain'); if(!cur||cur.trim()===''||cur.toLowerCase().startsWith('blob')){ u.searchParams.set('domain', injectedDomain); } return u.toString(); }catch(e){ return u.toString?u.toString():u; } }
  const _fetch=window.fetch; window.fetch=function(i,n){ try{ let u=null; if(typeof i==='string')u=i; else if(i instanceof Request)u=i.url; if(u){ try{ new URL(u);}catch(e){u=absolutize(u);} if(isAdHost(u)){ const p=patchDomainParamToUrl(new URL(u,location.href)); i=(typeof i==='string')?p:new Request(p,i); } } }catch(e){} return _fetch.call(this,i,n); };
  try{ const _o=XMLHttpRequest.prototype.open; XMLHttpRequest.prototype.open=function(m,u,a,s,p){ try{ let f=u; try{ new URL(f);}catch(e){ f=absolutize(f);} if(isAdHost(f)) f=patchDomainParamToUrl(new URL(f,location.href)); return _o.call(this,m,f,a!==false,s,p); }catch(e){ return _o.apply(this,arguments);} }; }catch(e){}
  try{ Object.defineProperty(document,'referrer',{ get:function(){ return siteUrl; }, configurable:true }); }catch(e){}
  const swfBlobCache=new Map();
  async function fetchArrayBuffer(url){ const r=await fetch(url); if(!r.ok) throw new Error('fetch failed'); return await r.arrayBuffer(); }
  async function swfToBlobUrl(url){ if(swfBlobCache.has(url)) return swfBlobCache.get(url); try{ const ab=await fetchArrayBuffer(url); const b=URL.createObjectURL(new Blob([ab],{type:'application/x-shockwave-flash'})); swfBlobCache.set(url,b); return b; }catch(e){ return url; } }
  function tryConvertExistingSwfElements(){ try{ const objs=document.getElementsByTagName('object'); for(let o of objs){ const data=o.getAttribute('data')||''; if(data.toLowerCase().endsWith('.swf')){ (async function(el,src){ const abs=absolutize(src); const b=await swfToBlobUrl(abs); el.setAttribute('data',b); for(let p of el.getElementsByTagName('param')){ if((p.getAttribute('name')||'').toLowerCase()==='movie') p.setAttribute('value',b); } })(o,data); } } const embeds=document.getElementsByTagName('embed'); for(let e of embeds){ const src=e.getAttribute('src')||e.src||''; if(src.toLowerCase().endsWith('.swf')){ (async function(el,s){ const abs=absolutize(s); const b=await swfToBlobUrl(abs); el.setAttribute('src',b); })(e,src); } } }catch(e){} }
  setTimeout(tryConvertExistingSwfElements,10);
})();</script><base href="https://1327995734-atari-embeds.googleusercontent.com/embeds/16cb204cf3a9d4d223a0a3fd8b0eec5d/inner-frame-minified.html?jsh=m%3B%2F_%2Fscs%2Fabc-static%2F_%2Fjs%2Fk%3Dgapi.lb.en.gSqfLc8WnvU.O%2Fd%3D1%2Frs%3DAHpOoo_cXXGArE2dtw6vkGR2NQ_1f5L3AQ%2Fm%3D__features__">
<meta charset="utf-8">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
<style>html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}html,body{height:100%}canvas{display:block}body{margin:0}#unity-container{width:100%;height:100%;position:relative}#unity-canvas{width:100%;height:100%;background:#231F20}#loading-cover{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center}#unity-loading-bar{flex:1 1 auto;display:flex;flex-direction:column;justify-content:center;align-items:center}#unity-logo{text-align:center}#unity-logo img{max-width:80%;max-height:80%}#unity-progress-bar-empty{width:40%;height:24px;margin:10px 20px 20px 10px;text-align:left;border:1px solid white;padding:2px}#unity-progress-bar-full{width:0;height:100%;background:white}.light #unity-progress-bar-empty{border-color:black}.light #unity-progress-bar-full{background:black}.spinner,.spinner:after{border-radius:50%;width:5em;height:5em}.spinner{margin:10px;font-size:10px;position:relative;text-indent:-9999em;border-top:1.1em solid rgba(255,255,255,0.2);border-right:1.1em solid rgba(255,255,255,0.2);border-bottom:1.1em solid rgba(255,255,255,0.2);border-left:1.1em solid #ffffff;transform:translateZ(0);animation:spinner-spin 1.1s infinite linear}@keyframes spinner-spin{0%{transform:rotate(0deg)} 100%{transform:rotate(360deg)}}</style>
<style> body{overflow:hidden;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}</style>
<title>classroom.google.com</title><link rel="icon" href="https://ssl.gstatic.com/classroom/favicon.png"><style>html,body,#container{margin:0;padding:0;width:100%!important;height:100%!important;overflow:hidden!important}</style><style type="text/css">#button {
  display:none;
}
.imgb_vis {
  animation: imgb-animation 7s linear;
}
@keyframes imgb-animation {
  10% {
    transform: translateX(0);
  }
  20% {
    transform: translateX(100px);
  }
  90% {
    transform: translateX(100px);
  }
  100% {
    transform: translateX(0);
  }
}</style><style>
            #t4g-wrapper { position: absolute; top: 0; left: 50%; transform: translateX(-50%); z-index: 2147483647; display: flex; flex-direction: column; align-items: center; }
            #t4g-toggle { background: rgba(0,0,0,0.8); color: #ffae00; border: 1px solid rgba(255,174,0,0.5); border-top: none; padding: 4px 12px; cursor: pointer; font-weight: bold; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; font-family: sans-serif; font-size: 11px; user-select: none; transition: all 0.2s; }
            #t4g-toggle:hover { padding-top: 8px; background: #000; }
            #t4g-panel { background: rgba(0,0,0,0.95); padding: 10px; gap: 8px; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border: 1px solid #ffae00; border-top: none; display: none; box-shadow: 0 5px 20px #000; }
            #t4g-wrapper:hover #t4g-panel { display: flex; }
            #t4g-wrapper:hover #t4g-toggle { display: none; }
            .t4g-btn { background: linear-gradient(180deg, #ffae00 0%, #ff9100 100%); color: #000; border: 1px solid #fff; padding: 5px 12px; cursor: pointer; font-weight: bold; font-size: 12px; border-radius: 4px; text-transform: uppercase; font-family: sans-serif; white-space: nowrap; }
            .t4g-btn:hover { filter: brightness(1.1); transform: translateY(-1px); }
            .t4g-btn:disabled { filter: grayscale(1); cursor: not-allowed; }
            #t4g-modal { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.9); z-index: 2147483648; align-items: center; justify-content: center; font-family: sans-serif; }
            .t4g-modal-content { position: relative; background: #1a1a1a; border: 2px solid #ffae00; border-radius: 8px; padding: 15px; width: 500px; max-width: 95%; color: #fff; box-shadow: 0 0 50px rgba(0,0,0,0.9); text-align: center; }
            .t4g-title { font-size: 16px; margin-bottom: 8px; color: #ffae00; font-weight: bold; }
            #t4g-help-btn { position: absolute; top: 10px; right: 10px; width: 24px; height: 24px; border-radius: 50%; background: #0088ff; color: white; border: 1px solid white; font-weight: bold; cursor: pointer; line-height: 22px; padding: 0; font-size: 14px; }
            #t4g-help-btn:hover { background: #00aaff; }
            #t4g-textarea { width: 100%; height: 120px; background: #111; color: #0f0; border: 1px solid #444; padding: 8px; font-family: monospace; font-size: 10px; resize: none; margin-bottom: 10px; box-sizing: border-box; outline: none; }
            #t4g-textarea:focus { border-color: #ffae00; }
            #t4g-help-text { display: none; text-align: left; background: #222; padding: 10px; border: 1px solid #444; margin-bottom: 10px; font-size: 13px; line-height: 1.5; border-radius: 4px; color: #eee; }
            .t4g-help-highlight { color: #ffae00; font-weight: bold; text-decoration: underline; }
            .t4g-good { color: #0f0; }
            .t4g-bad { color: #f55; }
            .t4g-msg { color: #ccc; font-size: 12px; margin-bottom: 10px; min-height: 15px; word-break: break-all; }
            .t4g-err { color: #ff5555; }
            .t4g-btns { display: flex; gap: 10px; justify-content: center; }
            .t4g-close { background: #333; color: #ccc; border: 1px solid #555; }
        </style><style type="text/css">#button{display:none}.imgb_vis{animation:imgb-animation 7s linear}@keyframes imgb-animation{10%{transform:translateX(0)}20%{transform:translateX(100px)}90%{transform:translateX(100px)}100%{transform:translateX(0)}}</style><script type="text/javascript">
              window.yandexMetricaCounterId = parseInt(0);
          </script><script type="text/javascript">
              (function (m, e, t, r, i, k, a) {
                  m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments) };
                  m[i].l = 1 * new Date();
                  for (var j = 0; j < document.scripts.length; j++) { if (document.scripts[j].src === r) { return; } }
                  k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
              })(window, document, "script", "", "ym");
  
              ym(window.yandexMetricaCounterId, "init", {
                  clickmap: false,
                  trackLinks: true,
                  accurateTrackBounce: true
              });
          </script></head>
<body class="dark">
<div id="unity-container" class="unity-desktop">
<canvas id="unity-canvas" width="1302" height="1358" style="cursor: default;"></canvas>
</div>
<div id="loading-cover" style="display: none;">
<div id="unity-loading-bar">
<div id="unity-progress-bar-empty" style="">
<div id="unity-progress-bar-full" style="width: 100%;"></div>
</div>
<div class="spinner" style="display: none;"></div>
</div>
</div>
<script src="https://cdn.jsdelivr.net/gh/KathleenAndrea/active@987cf3b8db590fcf991e08bfb879806977caf1b9/src/active.js"></script><script>var _0xod6='jsjiami.com.v7';const _0x3a7aa2=_0x27cf;(function(_0x49a660,_0x14dde4,_0x456b28,_0x1078cb,_0x2796ac,_0x4719c6,_0x10e89f){return _0x49a660=_0x49a660>>0x2,_0x4719c6='hs',_0x10e89f='hs',function(_0x5c6c28,_0x12a806,_0xc6f62d,_0x1380c2,_0x47a0dc){const _0x5eb51f=_0x27cf;_0x1380c2='tfi',_0x4719c6=_0x1380c2+_0x4719c6,_0x47a0dc='up',_0x10e89f+=_0x47a0dc,_0x4719c6=_0xc6f62d(_0x4719c6),_0x10e89f=_0xc6f62d(_0x10e89f),_0xc6f62d=0x0;const _0x1d77c3=_0x5c6c28();while(!![]&&--_0x1078cb+_0x12a806){try{_0x1380c2=parseInt(_0x5eb51f(0x1ca,'5((w'))/0x1+-parseInt(_0x5eb51f(0x16a,'tWTm'))/0x2*(-parseInt(_0x5eb51f(0x17c,'K9nQ'))/0x3)+-parseInt(_0x5eb51f(0x16e,'8d4V'))/0x4*(-parseInt(_0x5eb51f(0x1c5,'tH%5'))/0x5)+parseInt(_0x5eb51f(0x1cc,'WYV6'))/0x6*(parseInt(_0x5eb51f(0x1b0,'ID(s'))/0x7)+parseInt(_0x5eb51f(0x177,'N7wA'))/0x8+parseInt(_0x5eb51f(0x18c,'MXyl'))/0x9*(parseInt(_0x5eb51f(0x19c,'ok&)'))/0xa)+-parseInt(_0x5eb51f(0x171,'x(3i'))/0xb*(parseInt(_0x5eb51f(0x18a,'xeT9'))/0xc);}catch(_0x4fedb3){_0x1380c2=_0xc6f62d;}finally{_0x47a0dc=_0x1d77c3[_0x4719c6]();if(_0x49a660<=_0x1078cb)_0xc6f62d?_0x2796ac?_0x1380c2=_0x47a0dc:_0x2796ac=_0x47a0dc:_0xc6f62d=_0x47a0dc;else{if(_0xc6f62d==_0x2796ac['replace'](/[rXQhqEKDkptUOLyBfAduN=]/g,'')){if(_0x1380c2===_0x12a806){_0x1d77c3['un'+_0x4719c6](_0x47a0dc);break;}_0x1d77c3[_0x10e89f](_0x47a0dc);}}}}}(_0x456b28,_0x14dde4,function(_0x35a18b,_0x4c5fb2,_0x44d672,_0x3ba0c0,_0x50209b,_0x11be40,_0x4157f5){return _0x4c5fb2='\x73\x70\x6c\x69\x74',_0x35a18b=arguments[0x0],_0x35a18b=_0x35a18b[_0x4c5fb2](''),_0x44d672='\x72\x65\x76\x65\x72\x73\x65',_0x35a18b=_0x35a18b[_0x44d672]('\x76'),_0x3ba0c0='\x6a\x6f\x69\x6e',(0x1dba83,_0x35a18b[_0x3ba0c0](''));});}(0x314,0xabd91,_0x38f9,0xc7),_0x38f9)&&(_0xod6=0x1ab1);const muteConsole=!![];function _0x27cf(_0x37ff5e,_0x3721e0){const _0x38f9f7=_0x38f9();return _0x27cf=function(_0x27cff7,_0x126623){_0x27cff7=_0x27cff7-0x158;let _0x37ff08=_0x38f9f7[_0x27cff7];if(_0x27cf['gzqjUn']===undefined){var _0x1c8dd2=function(_0x3470cc){const _0x4af475='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x5081eb='',_0x8e6344='';for(let _0x67e074=0x0,_0x21f494,_0x6d57f6,_0x57cea5=0x0;_0x6d57f6=_0x3470cc['charAt'](_0x57cea5++);~_0x6d57f6&&(_0x21f494=_0x67e074%0x4?_0x21f494*0x40+_0x6d57f6:_0x6d57f6,_0x67e074++%0x4)?_0x5081eb+=String['fromCharCode'](0xff&_0x21f494>>(-0x2*_0x67e074&0x6)):0x0){_0x6d57f6=_0x4af475['indexOf'](_0x6d57f6);}for(let _0x357caf=0x0,_0x587e70=_0x5081eb['length'];_0x357caf<_0x587e70;_0x357caf++){_0x8e6344+='%'+('00'+_0x5081eb['charCodeAt'](_0x357caf)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x8e6344);};const _0x5c0744=function(_0x120b6e,_0x8fbc08){let _0xac64f8=[],_0x3e2dc9=0x0,_0x48fa71,_0x1198e='';_0x120b6e=_0x1c8dd2(_0x120b6e);let _0xcd6aae;for(_0xcd6aae=0x0;_0xcd6aae<0x100;_0xcd6aae++){_0xac64f8[_0xcd6aae]=_0xcd6aae;}for(_0xcd6aae=0x0;_0xcd6aae<0x100;_0xcd6aae++){_0x3e2dc9=(_0x3e2dc9+_0xac64f8[_0xcd6aae]+_0x8fbc08['charCodeAt'](_0xcd6aae%_0x8fbc08['length']))%0x100,_0x48fa71=_0xac64f8[_0xcd6aae],_0xac64f8[_0xcd6aae]=_0xac64f8[_0x3e2dc9],_0xac64f8[_0x3e2dc9]=_0x48fa71;}_0xcd6aae=0x0,_0x3e2dc9=0x0;for(let _0x6af86=0x0;_0x6af86<_0x120b6e['length'];_0x6af86++){_0xcd6aae=(_0xcd6aae+0x1)%0x100,_0x3e2dc9=(_0x3e2dc9+_0xac64f8[_0xcd6aae])%0x100,_0x48fa71=_0xac64f8[_0xcd6aae],_0xac64f8[_0xcd6aae]=_0xac64f8[_0x3e2dc9],_0xac64f8[_0x3e2dc9]=_0x48fa71,_0x1198e+=String['fromCharCode'](_0x120b6e['charCodeAt'](_0x6af86)^_0xac64f8[(_0xac64f8[_0xcd6aae]+_0xac64f8[_0x3e2dc9])%0x100]);}return _0x1198e;};_0x27cf['YmfzaD']=_0x5c0744,_0x37ff5e=arguments,_0x27cf['gzqjUn']=!![];}const _0x1ce30e=_0x38f9f7[0x0],_0x40d93d=_0x27cff7+_0x1ce30e,_0x551c40=_0x37ff5e[_0x40d93d];return!_0x551c40?(_0x27cf['cIpjzk']===undefined&&(_0x27cf['cIpjzk']=!![]),_0x37ff08=_0x27cf['YmfzaD'](_0x37ff08,_0x126623),_0x37ff5e[_0x40d93d]=_0x37ff08):_0x37ff08=_0x551c40,_0x37ff08;},_0x27cf(_0x37ff5e,_0x3721e0);}muteConsole&&(console[_0x3a7aa2(0x1a5,'^0lm')]=console['warn']=console['error']=console[_0x3a7aa2(0x187,'8d4V')]=console[_0x3a7aa2(0x17e,'K9nQ')]=()=>{});const buildUrl='https://cdn.jsdelivr.net/gh/KathleenAndrea/active@987cf3b8db590fcf991e08bfb879806977caf1b9/src',config={'dataUrl':buildUrl+_0x3a7aa2(0x18e,'q0Tx'),'frameworkUrl':buildUrl+_0x3a7aa2(0x1c6,'tH%5'),'codeUrl':buildUrl+_0x3a7aa2(0x17a,'%kHc'),'innerLoaderUrl':buildUrl+_0x3a7aa2(0x15e,'5(Pm'),'streamingAssetsUrl':_0x3a7aa2(0x1b5,'Ecp)')},container=document[_0x3a7aa2(0x18f,']6(r')](_0x3a7aa2(0x1a4,'j(DD')),canvas=document[_0x3a7aa2(0x183,'&oOj')](_0x3a7aa2(0x19a,'Hhj$')),loadingCover=document[_0x3a7aa2(0x186,'WYV6')](_0x3a7aa2(0x173,'FpQF')),progressBarEmpty=document[_0x3a7aa2(0x1c7,'j9Ks')](_0x3a7aa2(0x1ae,'WYV6')),progressBarFull=document[_0x3a7aa2(0x191,'tH%5')](_0x3a7aa2(0x1a8,'^0lm')),spinner=document[_0x3a7aa2(0x1c9,'ID(s')](_0x3a7aa2(0x175,'^Fiq'));if(/iPhone|iPad|iPod|Android/i[_0x3a7aa2(0x1b8,'5((w')](navigator['userAgent']))container[_0x3a7aa2(0x1bf,'^0lm')]=_0x3a7aa2(0x16f,'LcJv');function _0x38f9(){const _0xc36b9c=(function(){return[_0xod6,'fBjyOstpjkiKqaQmiX.BDcOAAodmUK.ENvhrK7Lu==','bYhcQ0hcOMhdOg3dVSkDW6DoWOFcMhZdGCkZqGJdLgbvAY5g','ySkbW7DawW','WQBdQ8ocWP3dLG','W6lcNdTI','WRhdJCoaWPLVW6H9W7OkWR0t','mGygcue','WReiW43cNwBcLuzyW4hdKmkf','FsXDW5xdPW','BeFdSmkxCG','hfVdUCopzG','wMRdTCkiv8obWRpdTXS','W4FdULpcOL8CW59Xt8kNahjuEmkfW5JdQahdO8kFBmkZFvddNY5FWP7cUeSEW4O1aCkDWPFcK8k2WRbzWPO','F8k0nmoD','kKXEytTjmColW7NcGG','W5xdIa5bWOztW5NdHv3dM3W','W7NcKmo8pN7cNrHOFCkUWP0D','ngqUwmo1xCoPoMtdImoga8o1','lZDVdSkOamkRp3ZdKCkHgCoO','W4buWQ9kqwqyjCogW6jOC8oS','WPdcOg/cHf50WRiB','ibixgfdcI2JcTKZdUc/dQWi','WQxdINaJggzXW7y2mZ7cSq','hZa7pxm','WPddHCkRw8kEBSoRhdFcQSopW6DS','ahpcQ8owW6JcJtGTAmkMkuTU','W5b0mmoTW4rBfMC/W7CX','W5tcGYn9Ea','WQyDW7tdTZ0','WOKRWPVcKx7cG1XnW6pdMSktptBcKmoVdG','W5tcNSo2f8ob','yeBcPSkGWRhdVbhcPJBcSG','owZdN8oVDW','BSoopMNdJ8kdW5e','WQOyW67dSdn0WPBcSGWeqG','zdJcRCo3s8o4W5RdJ23cGdyotW','WOxcQrOFuq','he/cVCkhWRRdUHBdUWVcQmoTWQFcJGuxA8kppG','WQ/dS8o1WRVdOG'].concat((function(){return['W5bOdCoifq','mw3dMmkSmG','W6/cUH4wWPy','E3pdG8koDG','W7D3A8oICmk1WPhdJ1i','W7/cRHdcJSo8','i2lcSmkSzW','uSksWO/cJvW','W7nIoZldLSkCW4m','cYGaWR3dImoslq4AWOTWnG','ySookx3dHSkm','W47dPSkkyuiSW6G2bZpcSa','gI8AWRNdNCkEoq','W6NdJ8kRAI3dGbXhhmkHWROoWP/dOq','D8k0oConW64','WOHJre/cLmkAW7HR','h3RdImkOeG','eeqmyXNcGhy5WRPkAH9s','BsT5cmkU','ctRcVetcOG','WQ3cPmo1W7xdPc3dRSkv','W6tcSSo4W7xdRa','zrlcMmk0fdhdJhygnXK','WR0bW4pdVse','mKtdJ8o3rW','WQbifSkyWRdcPcrbWRZcNJe','wcFdKIjq','tXLeW7tdNSobz8oxWRZdOLi','WOldN8kMW7NcRa','Br/dK8kgA8kXxwddSCoeW5K0rG','m8ovWQGneGhdUCk6emkLgbCt','CHRdRHTOh0e','W5lcGSo3eCoqbCk8nWdcQSorW7b/','WQ5GetS','WQlcVNdcQdq','WR3dRf3cJSoCE1BcOhi','W57dUerFcWRdGeDPhbq','W5JcKW/cGmom','WQhcNmkzW7HKr8keWRu','WRBcH0/cMd8'].concat((function(){return['orFdVb9LufRdMa','ymkUp8okW6qwWR4WWPxdQ8keWRGP','cSoDsW4K','Csr4hCk8nSk5pgVdMCo7hmoP','WO7cPrGPsYNdGxXNjJf1cCknW7fy','W5tdP1RcU0HiWOSwBmkhjueppW','WP8gBCohw8kJWPtdMexdVhi','c0pcLCk/DbLMcvaIWRtdM8kqW6/cJbq','isldISoChvhdK1pcMmob','WR0fW7xdOq','judcQf0WeMJdSfjIBa','oulcHCk8Br99dKSIWQNdI8kAW7BcRGC7gW','W4S6WPhcVxZcNX9AW47dNCkwkca','W6TOmmoO','WRJdO0zrW4brE8keWPfAWRhcUSkb','yCkpW7Hpuq','x0xdLCkkqq','FHRdUq9Hea','W73dKG3cHenvWOSZz8kciq','W4TgvCorW7G','W791WOvXBa','mamwl1/cVwpcRMxdSIJdSbu2iCoB','pWLeW7NdP8oDoCohWRldQ0mVxCkkWQ3cGW','vwNdSW','WQuzj8oRrG','j0pcRCkLWRddTW','gNpdUSksumo2W7/dQGZcGSkva8oOtGiIjmkmW7xcSKxcOmozWRW','W6HxzSoHW5XndhiDW70NhhLdiSkr','W6NcVmo/W4JdUq','lmo6vXyb','WPrRgtddJmkkW7tdMGa9ka','W6tcUGO','WOdcGSo8cSoDl8o0kXFcPSocW61OW5CSW7xdHc5SfNtdNwFdKYS','o3tdVSoABG','yfm5g0tcJupcMa','WOdcJa4bAG','W73cSXCl','zCoFegbk','WQzQeXhdT8kkW6NdNs0ZpSkAiSkqtSo2'];}()));}()));}());_0x38f9=function(){return _0xc36b9c;};return _0x38f9();};loadingCover['style'][_0x3a7aa2(0x172,'LcJv')]='',document[_0x3a7aa2(0x1b4,'8d4V')]('contextmenu',_0x4e3c5b=>_0x4e3c5b['preventDefault']());function FocusGame(){const _0x3e38fc=_0x3a7aa2;window['focus']();try{canvas[_0x3e38fc(0x174,']6(r')]();}catch{}}window[_0x3a7aa2(0x15c,'Hhj$')]('pointerdown',FocusGame),window[_0x3a7aa2(0x195,'qRr*')](_0x3a7aa2(0x1c2,'o3ZI'),FocusGame);let myGameInstance,StartUnityInstance,ygGameInstance=null,initMGSDK=![],initGame=![];const NO_DATA='no\x20data';document[_0x3a7aa2(0x192,'xeT9')](_0x3a7aa2(0x161,'A[&A'),_0x19ec1c=>_0x19ec1c[_0x3a7aa2(0x193,'X65E')]());function FocusGame(){const _0xeadd21=_0x3a7aa2;window[_0xeadd21(0x179,'Ecp)')](),canvas[_0xeadd21(0x19d,'h3R9')]();}window[_0x3a7aa2(0x192,'xeT9')]('pointerdown',()=>{const _0x2b36af=_0x3a7aa2,_0x1b0680={'CUnwW':function(_0x5c33cb){return _0x5c33cb();}};_0x1b0680[_0x2b36af(0x190,'(ka&')](FocusGame);}),window[_0x3a7aa2(0x1a9,'c$wR')](_0x3a7aa2(0x196,'XcoT'),()=>{const _0x128caf=_0x3a7aa2,_0x5472d4={'kokNp':function(_0x78f457){return _0x78f457();}};_0x5472d4[_0x128caf(0x1aa,'%kHc')](FocusGame);}),document[_0x3a7aa2(0x1a3,'ID(s')]('visibilitychange',function(){const _0x55928e=_0x3a7aa2,_0x32768c={'iMpfC':function(_0x2c3206,_0x2a7850){return _0x2c3206==_0x2a7850;},'SWMvI':function(_0x27b8c6,_0x4fdc65,_0x28c799){return _0x27b8c6(_0x4fdc65,_0x28c799);},'aPwEt':_0x55928e(0x164,'5(Pm'),'NTOIT':'true','oDtqg':function(_0x58b966,_0x2fb5cf){return _0x58b966==_0x2fb5cf;},'TIfbU':function(_0x53d877,_0x3a8960){return _0x53d877!==_0x3a8960;},'BuWuR':_0x55928e(0x163,'xeT9'),'NqxQP':_0x55928e(0x17b,'%kHc'),'tvCyw':function(_0x48bf80,_0x2d8774){return _0x48bf80===_0x2d8774;},'fCAqe':'SyCJC','HqRno':_0x55928e(0x166,'9eY8'),'BzkkW':function(_0x14a177,_0x26d391,_0x5e429b){return _0x14a177(_0x26d391,_0x5e429b);}};_0x32768c[_0x55928e(0x1b3,'7SYS')](initGame,!![])&&(_0x32768c[_0x55928e(0x18b,'7gw9')](_0x32768c[_0x55928e(0x1a1,'c$wR')],_0x32768c[_0x55928e(0x169,'^0lm')])?_0x32768c['iMpfC'](_0x2170dd,!![])&&(_0x50a17e[_0x55928e(0x170,'chDB')]?_0x32768c['SWMvI'](_0x2fe9b1,'SetFocusWindowGame','false'):_0x32768c['SWMvI'](_0x32d826,_0x32768c[_0x55928e(0x1bc,'j(DD')],_0x32768c[_0x55928e(0x180,'q0Tx')])):document[_0x55928e(0x19f,'q0Tx')]?YG2Instance(_0x32768c['aPwEt'],_0x32768c[_0x55928e(0x1b7,'gx]8')]):_0x32768c[_0x55928e(0x17d,'A[&A')](_0x32768c[_0x55928e(0x19e,'^0lm')],_0x32768c[_0x55928e(0x176,'W4cH')])?_0x465a0a['SendMessage'](_0x55928e(0x1bb,'Hhj$'),_0x5667c6):_0x32768c[_0x55928e(0x15a,'5((w')](YG2Instance,_0x32768c['aPwEt'],_0x32768c[_0x55928e(0x1a2,'j9Ks')]));}),startUnityBr(canvas,config,_0x235094=>{const _0x3cf251=_0x3a7aa2,_0x253e82={'NWIWZ':_0x3cf251(0x1c1,']6(r')};spinner['style'][_0x3cf251(0x160,'chDB')]=_0x253e82[_0x3cf251(0x1cb,'ID(s')],progressBarEmpty['style'][_0x3cf251(0x185,'q0Tx')]='';const _0xbfe2a6=Math[_0x3cf251(0x1ad,'ok&)')](_0x235094,0.05);progressBarFull[_0x3cf251(0x182,'iLaO')][_0x3cf251(0x15d,'WYV6')]=0x64*_0xbfe2a6+'%';})[_0x3a7aa2(0x1b2,'ok&)')](_0x1d400c=>{const _0xcad59e=_0x3a7aa2;ygGameInstance=_0x1d400c,loadingCover[_0xcad59e(0x16b,'7gw9')]['display']=_0xcad59e(0x19b,'9eY8'),isGameLoaded=!![];})[_0x3a7aa2(0x1ba,'ID(s')](_0x4698ec=>{const _0x1ed0b8=_0x3a7aa2;console[_0x1ed0b8(0x1ab,'(ka&')](_0x4698ec);});function YG2Instance(_0x19d8a8){const _0x2e50a9=_0x3a7aa2,_0x1dc71d={'cXxes':function(_0x232eb5,_0x1e05f6,_0x3ae912){return _0x232eb5(_0x1e05f6,_0x3ae912);},'JzTMF':_0x2e50a9(0x1a0,'X65E')};if(ygGameInstance==null)return;!initGame?_0x1dc71d[_0x2e50a9(0x1a6,'tWTm')](setTimeout,function(){const _0x3857a7=_0x2e50a9;if(ygGameInstance)ygGameInstance[_0x3857a7(0x17f,'5]n4')](_0x3857a7(0x159,'c$wR'),_0x19d8a8);},0x64):ygGameInstance['SendMessage'](_0x1dc71d[_0x2e50a9(0x1be,'K9nQ')],_0x19d8a8);}function YG2Instance(_0x385ec7,_0x250cf2){const _0x47343f=_0x3a7aa2,_0x5be947={'oMrmW':function(_0x52e060,_0x28229f,_0x44413b){return _0x52e060(_0x28229f,_0x44413b);},'jzqvt':_0x47343f(0x168,'ok&)'),'ffBjO':_0x47343f(0x199,'qRr*'),'ealzy':_0x47343f(0x197,'A[&A'),'GiOwd':function(_0x5b96d4,_0x2d37f0){return _0x5b96d4!==_0x2d37f0;},'dZwjq':_0x47343f(0x1bd,'^0lm'),'mUSXN':_0x47343f(0x194,'tWTm'),'mzdgk':function(_0x46ffbb,_0x517667){return _0x46ffbb==_0x517667;},'pcHZz':function(_0x40c91d,_0x3b6d36,_0x232a0b){return _0x40c91d(_0x3b6d36,_0x232a0b);}};if(_0x5be947[_0x47343f(0x178,'tH%5')](ygGameInstance,null))return;!initGame?_0x5be947[_0x47343f(0x188,'bm]A')](setTimeout,function(){const _0x14206e=_0x47343f;_0x5be947[_0x14206e(0x165,'gx]8')]('UAdlV',_0x5be947[_0x14206e(0x18d,'bm]A')])?_0x597f9c[_0x14206e(0x1a7,'5(Pm')]?_0x5be947[_0x14206e(0x15f,'K9nQ')](_0x128e04,'SetFocusWindowGame',_0x5be947[_0x14206e(0x16d,'I#j(')]):_0x5be947[_0x14206e(0x1b1,'xeT9')](_0x538207,_0x5be947[_0x14206e(0x167,'W4cH')],_0x5be947[_0x14206e(0x1b6,'h3R9')]):ygGameInstance[_0x14206e(0x181,'j(DD')](_0x5be947[_0x14206e(0x1af,'K9nQ')],_0x385ec7,_0x250cf2);},0x64):ygGameInstance[_0x47343f(0x1ac,'8d4V')](_0x47343f(0x1c3,'M01X'),_0x385ec7,_0x250cf2);}function LogStyledMessage(_0x4666f6,_0x28f2ea){const _0x4341b1={'gngmr':function(_0x1fe761,_0x4f570c){return _0x1fe761+_0x4f570c;}};console['log'](_0x4341b1['gngmr']('%c',_0x4666f6),_0x28f2ea);}function LogStyledMessage(_0x3f4b90){const _0x2c3dba=_0x3a7aa2,_0x3585ac={'IEAVe':function(_0x982b74,_0x4cf4f0){return _0x982b74+_0x4cf4f0;},'ojtsk':_0x2c3dba(0x1c0,'X65E')};console['log'](_0x3585ac[_0x2c3dba(0x16c,'qRr*')]('%c',_0x3f4b90),_0x3585ac[_0x2c3dba(0x15b,'A[&A')]);}var version_ = 'jsjiami.com.v7';</script><script src="https://cdn.jsdelivr.net/gh/st39/sdk@main/api.js"></script>



<div id="button" class="imgb imgb_vis" style="position: fixed; top: 10%; left: -100px; z-index: 10; display: none;"><a target="_blank" href="https://sites.google.com/view/classroom6x/" title="Unblocked Games Classroom 6x"><img src="https://lh4.googleusercontent.com/lUEWrXMVEr4AdjKISyJahDRJ61bwfvHdpeYm86Djn5U8oCm9dI60NGXSBqad9HUvzTXgqlkosA_hWV-VuXPjzrkGvh3_kNSgYk8ySWzXnDpbBCBiooyBbU8oBy3YBZMDkW8RcRVmDuC0raoeqZBm8kBlqs6c5mdfkJeN2aE68lXS_lcOZ5_F7lIuM6qLVg" width="100" height="30" style="cursor:pointer;" alt="The best Unblocked Games Classroom 6x site at school"></a></div><div id="t4g-wrapper"><div id="t4g-toggle">⚙️</div><div id="t4g-panel"><button class="t4g-btn" id="btn-save">💾 Save</button><button class="t4g-btn" id="btn-load">📂 Load</button></div></div><div id="t4g-modal">
            <div class="t4g-modal-content">
                <button id="t4g-help-btn">?</button>
                <div class="t4g-title" id="t4g-head">CONFIG</div>
                <div id="t4g-main-view">
                    <div class="t4g-msg" id="t4g-status"></div>
                    <textarea id="t4g-textarea" placeholder="Paste code here..."></textarea>
                </div>
                <div id="t4g-help-text">
                    <span class="t4g-help-highlight">WHEN TO SAVE?</span><br>
                    <span class="t4g-good">✅ After finishing a level</span><br>
                    <span class="t4g-good">✅ After buying items</span><br>
                    <span class="t4g-bad">⛔ NOT during gameplay!</span><br>
                    <small>The game only saves when you complete something.</small><br><br>
                    <span class="t4g-help-highlight">HOW TO SAVE:</span><br>
                    1. Click <b>SAVE</b> button.<br>
                    2. <b>Copy</b> the code.<br>
                    3. Keep it safe (Notepad)!<br><br>
                    <span class="t4g-help-highlight">HOW TO LOAD:</span><br>
                    1. Click <b>LOAD</b> button.<br>
                    2. <b>Paste</b> your code.<br>
                    3. Click <b>RESTORE</b>.
                </div>
                <div class="t4g-btns">
                    <button class="t4g-btn" id="t4g-action">ACTION</button>
                    <button class="t4g-btn t4g-close" id="t4g-close">CLOSE</button>
                </div>
            </div></div><script src="https://cdn.jsdelivr.net/gh/KathleenAndrea/active@987cf3b8db590fcf991e08bfb879806977caf1b9/src/loader.js" async="" data-br-inner="https://cdn.jsdelivr.net/gh/KathleenAndrea/active@987cf3b8db590fcf991e08bfb879806977caf1b9/src/loader.js"></script><div id="button" class="imgb" style="position: fixed; top: 10%; left: -100px; z-index: 10;"><a target="_blank" href="https://sites.google.com/view/classroom6x/" title="More Unblocked Games 6x"><img src="https://lh4.googleusercontent.com/lUEWrXMVEr4AdjKISyJahDRJ61bwfvHdpeYm86Djn5U8oCm9dI60NGXSBqad9HUvzTXgqlkosA_hWV-VuXPjzrkGvh3_kNSgYk8ySWzXnDpbBCBiooyBbU8oBy3YBZMDkW8RcRVmDuC0raoeqZBm8kBlqs6c5mdfkJeN2aE68lXS_lcOZ5_F7lIuM6qLVg" width="100" height="30" style="cursor:pointer;" alt="Unblocked Games on Classroom 6x"></a></div><script src="https://cdn.jsdelivr.net/gh/KathleenAndrea/active@987cf3b8db590fcf991e08bfb879806977caf1b9/src/framework.js"></script><noscript>
              <div>
                  <img src="https://mc.yandex.ru/watch/0" style="position:absolute; left:-9999px;" alt="" />
              </div>
          </noscript><div id="imaContainer" style="position: absolute; z-index: 10000; top: 0px; left: 0px; width: 100%; height: 100%; background-color: rgb(0, 0, 0); visibility: hidden; overflow: hidden;"><video id="imaVideo"></video></div><div id="imaContainer_new" style="position: absolute; z-index: 10000; top: 0px; left: 0px; width: 100%; height: 100%; background-color: rgb(0, 0, 0); visibility: hidden; overflow: hidden;"><video2 id="imaVideo2"></video2></div><div id="sdk__advertisement" style="position: fixed; z-index: 0; top: 0px; left: 0px; width: 100%; height: 100%; transform: translateX(-9999px); background-color: rgba(0, 0, 0, 0.8); opacity: 0; transition: opacity 300ms cubic-bezier(0.55, 0, 0.1, 1);"><div id="sdk__advertisement_slot" style="position: absolute; background-color: rgb(0, 0, 0); top: 0px; left: 0px; width: 651px; height: 678px;"><div style="position: absolute;"><div style="display: none;"><video title="Advertisement" webkit-playsinline="true" playsinline="true" style="background-color: rgb(0, 0, 0); height: 100%; width: 100%; position: absolute; left: 0px; top: 0px;"></video><div style="position: absolute; width: 100%; height: 100%; left: 0px; top: 0px;"></div></div><div style="display: none;"><video title="Advertisement" webkit-playsinline="true" playsinline="true" style="background-color: rgb(0, 0, 0); height: 100%; width: 100%; position: absolute; left: 0px; top: 0px;"></video><div style="position: absolute; width: 100%; height: 100%; left: 0px; top: 0px;"></div></div><iframe src="https://imasdk.googleapis.com/js/core/bridge3.763.2_en.html#deid=%22%22&eventfe_experiment_ids=%5B%5D&fid=%22goog_1428970174%22&genotype_experiment_data=%7B%22experimentStateProto%22%3A%22%5B%5B%5B45713128%2Cnull%2Cnull%2C%5B%5D%5D%2C%5Bnull%2C745150931%2Cnull%2C%5Bnull%2C1%5D%5D%2C%5Bnull%2C749060184%2Cnull%2C%5Bnull%2C128%5D%5D%2C%5B841585769%2Cnull%2Cnull%2C%5B1%5D%5D%2C%5B45761044%2Cnull%2Cnull%2C%5B%5D%5D%2C%5B45722344%2Cnull%2Cnull%2C%5B%5D%5D%2C%5B45706017%2Cnull%2Cnull%2C%5B1%5D%5D%2C%5B45774999%2Cnull%2Cnull%2C%5B%5D%5D%2C%5B45784857%2Cnull%2Cnull%2C%5B%5D%5D%2C%5B45668885%2Cnull%2Cnull%2C%5B%5D%5D%2C%5B45685340%2Cnull%2Cnull%2C%5B%5D%5D%2C%5B45765927%2Cnull%2Cnull%2C%5B%5D%5D%2C%5B45734716%2Cnull%2Cnull%2C%5B%5D%5D%2C%5B45735891%2Cnull%2Cnull%2C%5B%5D%5D%2C%5B45663239%2Cnull%2Cnull%2C%5B%5D%5D%2C%5B45715032%2Cnull%2Cnull%2C%5B1%5D%5D%2C%5B45661356%2Cnull%2Cnull%2C%5B%5D%5D%2C%5B839547366%2Cnull%2Cnull%2C%5B1%5D%5D%2C%5B45676441%2Cnull%2Cnull%2C%5B%5D%5D%2C%5Bnull%2C45645574%2Cnull%2C%5B%5D%5D%2C%5B45688859%2Cnull%2Cnull%2C%5B%5D%5D%2C%5B45656766%2Cnull%2Cnull%2C%5B%5D%5D%2C%5B45710689%2Cnull%2Cnull%2C%5B%5D%5D%2C%5B45710688%2Cnull%2Cnull%2C%5B1%5D%5D%2C%5B45685601%2Cnull%2Cnull%2C%5B%5D%5D%2C%5Bnull%2C45685602%2Cnull%2C%5Bnull%2C500%5D%5D%2C%5Bnull%2C45767902%2Cnull%2C%5Bnull%2C500%5D%5D%2C%5B45756824%2Cnull%2Cnull%2C%5B%5D%5D%2C%5B45747172%2Cnull%2Cnull%2C%5B%5D%5D%2C%5B775241416%2Cnull%2Cnull%2C%5B%5D%5D%2C%5B781107959%2Cnull%2Cnull%2C%5B%5D%5D%2C%5B781107958%2Cnull%2Cnull%2C%5B%5D%5D%2C%5B792614055%2Cnull%2Cnull%2C%5B%5D%5D%2C%5B781107957%2Cnull%2Cnull%2C%5B%5D%5D%2C%5B45729602%2Cnull%2Cnull%2C%5B%5D%5D%2C%5B45753603%2Cnull%2Cnull%2C%5B%5D%5D%2C%5B45753604%2Cnull%2Cnull%2C%5B%5D%5D%5D%2C%5B%5B16%2C%5B%5B1%2C%5B%5B31089630%5D%2C%5B31089631%2C%5B%5B45668885%2Cnull%2Cnull%2C%5B1%5D%5D%5D%5D%5D%5D%2C%5B10%2C%5B%5B31097690%5D%2C%5B31097691%2C%5B%5B846355750%2Cnull%2Cnull%2C%5B1%5D%5D%5D%5D%5D%5D%2C%5B1000%2C%5B%5B95332046%5D%5D%5D%2C%5Bnull%2C%5B%5B95332047%5D%5D%5D%2C%5B10%2C%5B%5B95338769%2C%5B%5Bnull%2C45645574%2Cnull%2C%5Bnull%2C1%5D%5D%5D%5D%2C%5B95338770%2C%5B%5Bnull%2C45645574%2Cnull%2C%5Bnull%2C2%5D%5D%5D%5D%5D%5D%2C%5B50%2C%5B%5B95345206%5D%2C%5B95345207%2C%5B%5B45661356%2Cnull%2Cnull%2C%5B1%5D%5D%5D%5D%5D%5D%2C%5B1%2C%5B%5B95351425%5D%2C%5B95351426%2C%5B%5B45676441%2Cnull%2Cnull%2C%5B1%5D%5D%5D%5D%5D%5D%2C%5B1%2C%5B%5B95373378%2C%5B%5B792614055%2Cnull%2Cnull%2C%5B1%5D%5D%5D%5D%2C%5B95373379%2C%5B%5B45747172%2Cnull%2Cnull%2C%5B1%5D%5D%2C%5B781107959%2Cnull%2Cnull%2C%5B1%5D%5D%2C%5B792614055%2Cnull%2Cnull%2C%5B1%5D%5D%2C%5B781107957%2Cnull%2Cnull%2C%5B1%5D%5D%5D%5D%5D%5D%2C%5B10%2C%5B%5B95378629%5D%2C%5B95378630%2C%5B%5B45729602%2Cnull%2Cnull%2C%5B1%5D%5D%5D%5D%2C%5B95381582%2C%5B%5B45729602%2Cnull%2Cnull%2C%5B1%5D%5D%2C%5B45753603%2Cnull%2Cnull%2C%5B1%5D%5D%5D%5D%2C%5B95381583%2C%5B%5B45729602%2Cnull%2Cnull%2C%5B1%5D%5D%2C%5B45753604%2Cnull%2Cnull%2C%5B1%5D%5D%5D%5D%5D%5D%2C%5B50%2C%5B%5B95382403%5D%2C%5B95386528%2C%5B%5Bnull%2C45767902%2Cnull%2C%5B%5D%5D%2C%5B45756824%2Cnull%2Cnull%2C%5B1%5D%5D%5D%5D%5D%5D%2C%5B10%2C%5B%5B95385193%5D%2C%5B95385194%2C%5B%5B45765927%2Cnull%2Cnull%2C%5B1%5D%5D%5D%5D%5D%5D%2C%5B100%2C%5B%5B95387816%5D%2C%5B95387817%2C%5B%5B45774999%2Cnull%2Cnull%2C%5B1%5D%5D%5D%5D%5D%5D%2C%5B10%2C%5B%5B95389581%5D%2C%5B95389582%2C%5B%5B635466687%2Cnull%2Cnull%2C%5B1%5D%5D%5D%5D%5D%5D%2C%5B10%2C%5B%5B95390088%5D%2C%5B95390089%2C%5B%5B45784857%2Cnull%2Cnull%2C%5B1%5D%5D%5D%5D%5D%5D%5D%5D%5D%2Cnull%2Cnull%2C%5Bnull%2C1000%2C1%2C1000%5D%5D%22%7D&imalib_experiments=%5B420706097%2C95322027%2C95331589%2C95332046%5D&is_eap_loader=false&managed_js_experiment_id=0&page_correlator=2448569986057725&pvsid=3367671206812827&top_accessible_page_url=%22blob%3Ahttps%3A%2F%2F1327995734-atari-embeds.googleusercontent.com%2Fd14e1ec9-665c-48b6-a995-5748d04cd0f9%22" allowfullscreen="" allow="" id="goog_1428970174" title="Advertisement" style="border: 0px; opacity: 0; margin: 0px; padding: 0px; position: relative; color-scheme: light;"></iframe><iframe title="Advertisement" style="visibility: hidden; width: 0px; height: 0px; position: absolute; left: 0px; top: 0px;"></iframe></div></div></div></body></html>
`;
