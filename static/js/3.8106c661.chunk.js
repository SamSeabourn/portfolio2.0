(this["webpackJsonpportfolio_2.0.0"]=this["webpackJsonpportfolio_2.0.0"]||[]).push([[3],{48:function(e,t,n){e.exports=n.p+"static/media/icon_github2.902f0954.svg"},49:function(e,t,n){e.exports=n.p+"static/media/icon_github2_dark.f59a4977.svg"},50:function(e,t,n){e.exports=n.p+"static/media/icon_url.b4f19123.svg"},51:function(e,t,n){e.exports=n.p+"static/media/icon_url_dark.24587ead.svg"},52:function(e,t,n){e.exports=n.p+"static/media/salt_1.6a099936.png"},53:function(e,t,n){e.exports=n.p+"static/media/salt_2.4eb723b3.png"},54:function(e,t,n){e.exports=n.p+"static/media/salt_3.2d9f5c96.png"},55:function(e,t,n){e.exports=n.p+"static/media/slinky_1.8f52f8ba.jpg"},56:function(e,t,n){e.exports=n.p+"static/media/slinky_2.4608c337.jpg"},57:function(e,t,n){e.exports=n.p+"static/media/slinky_3.8bcc0828.jpg"},58:function(e,t,n){e.exports=n.p+"static/media/exactdocs_1.496c1e70.jpg"},59:function(e,t,n){e.exports=n.p+"static/media/exactdocs_2.fb61fdfe.jpg"},60:function(e,t,n){e.exports=n.p+"static/media/exactdocs_3.967ae7a9.jpg"},61:function(e,t,n){e.exports=n.p+"static/media/demo_gb1.f7ed365e.jpg"},62:function(e,t,n){e.exports=n.p+"static/media/demo_gb2.eebedf26.jpg"},63:function(e,t,n){e.exports=n.p+"static/media/demo_gb3.fe074b9f.jpg"},76:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(2),r=function(e){var t,n=e.linkUrl,a=e.linkText,o=e.darkIcon,r=e.lightIcon,s=e.nightMode?r:o;return i.a.createElement("button",{onClick:function(){window.open(n,"_blank")},style:(t=e.nightMode,t?{color:"#fff",transition:"0.2s ease-in"}:{color:"#202536",transition:"0.2s ease-in"})},i.a.createElement("img",{alt:s,src:s}),a)},s=n(14),c=n.n(s),l=n(48),u=n.n(l),d=n(49),m=n.n(d),p=n(50),g=n.n(p),h=n(51),f=n.n(h),b=function(e){return e?{color:"#fff",transition:"0.5s ease-in",lineHeight:"1.5em"}:{color:"rgba(32, 37, 54)",transition:"0.5s ease-in",lineHeight:"1.5em"}},k=function(e){var t=e.imageUrls,n=e.writeUp,s=e.keyWords,l=e.projectName,d=e.githubUrl,p=e.linkText,h=e.linkUrl,k=e.youtubeUrl,y=[],w=n.split(" "),x=i.a.useRef(null),E=i.a.useRef(null),v=i.a.useRef(null),S={dots:!0,speed:500,slidesToShow:1,slidesToScroll:1,arrows:!0,infinite:!1};for(var j=function(){var e=Object(a.useState)([0,0]),t=Object(o.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)([10,10]),s=Object(o.a)(r,2),c=s[0],l=s[1];return Object(a.useLayoutEffect)((function(){function e(){i([window.innerWidth,window.innerHeight]);var e=document.getElementsByClassName("slider-image")[0];l([e.width,e.height])}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),[n,c]}(),M=j[0][0],U=j[1][1],N=j[1][0],_=0;_<t.length;_++)y.push({key:_,value:"".concat(t[_])});var C,T=function(){if("undefined"!==typeof h)return i.a.createElement(r,{nightMode:e.nightMode,linkText:p,linkUrl:h,lightIcon:g.a,darkIcon:f.a})},D=function(){if("undefined"!==typeof d)return i.a.createElement(r,{nightMode:e.nightMode,linkText:"Github",linkUrl:d,lightIcon:u.a,darkIcon:m.a})},R=function(){if("undefined"!==typeof k)return i.a.createElement("iframe",{ref:E,width:N,height:U,alt:"link to ".concat(k),title:k,className:"slider-video",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",volume:"0",srcDoc:"<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=".concat(k,"?autoplay=1%mute=1><img src=").concat(y[0].value,"><span> \u25b6 </span></a>"),src:"".concat(k,"autoplay=1%mute=1"),onLoad:function(){return L()}})},L=function(e){null!=e&&(e.height=x.current.height,e.width=x.current.width)},B=function(){function e(e){var t=(Math.random().toString(16)+"000000000").substr(2,8);return e?"-"+t.substr(0,4)+"-"+t.substr(4,4):t}return e()+e(!0)+e(!0)+e()};return i.a.createElement("div",{ref:v,className:"project",style:(C=e.nightMode,C?{background:"rgba(56, 65, 93, 0.25)",transition:"0.5s ease-in"}:{background:"rgba(255,255,255,0.8)",transition:"0.5s ease-in"})},function(){return M>=1280?i.a.createElement("div",{className:"project-columns"},i.a.createElement("div",{className:"project-text"},i.a.createElement("h2",{className:"project-title",style:(t=e.nightMode,t?{color:"#fff",transition:"0.5s ease-in"}:{color:"rgb(32, 37, 54)",transition:"0.5s ease-in"})},l),i.a.createElement("p",{style:b(e.nightMode)},w.map((function(e){return s.includes(e)?i.a.createElement("strong",{key:B()},"".concat(e," ")):"".concat(e," ")}))),i.a.createElement("section",{style:{textAlign:"left",margin:"0em 2em 0em -0.5em"}},D(),T())),i.a.createElement("div",{className:"slider-images"},i.a.createElement(c.a,S,y.map((function(e){return i.a.createElement("img",{ref:x,onLoad:function(){return L(E.current)},className:"slider-image",src:e.value,alt:"slider",key:B()})})),R()))):i.a.createElement("div",{className:"project-columns"},i.a.createElement("div",{className:"slider-images"},i.a.createElement(c.a,S,y.map((function(e){return i.a.createElement("img",{ref:x,className:"slider-image",src:e.value,alt:"slider",key:B()})})),R())),i.a.createElement("div",{className:"project-row ",onLoad:function(){return L(E.current)}},i.a.createElement("p",{className:"project-text",style:b(e.nightMode)},w.map((function(e){return s.includes(e)?i.a.createElement("strong",{key:B()},"".concat(e," ")):"".concat(e," ")}))),i.a.createElement("section",{style:{margin:"0 0 3em 0"}},D(),T())));var t}())},y=n(52),w=n.n(y),x=n(53),E=n.n(x),v=n(54),S=n.n(v),j=n(55),M=n.n(j),U=n(56),N=n.n(U),_=n(57),C=n.n(_),T=n(58),D=n.n(T),R=n(59),L=n.n(R),B=n(60),G=n.n(B),W=n(61),I=n.n(W),H=n(62),O=n.n(H),z=n(63),A=n.n(z);t.default=function(e){return i.a.createElement("div",{className:"project-panel",style:{background:"rgba(0,0,0,0)"}},i.a.createElement("h2",{className:"text-gradient"}," My Work."),i.a.createElement(k,{nightMode:e.nightMode,projectName:"Salt Compliance LMS",linkText:"GRC Solutions",linkUrl:"https://www.grcsolutions.com.au/platforms/our-platforms",imageUrls:[w.a,E.a,S.a],keyWords:["Salt","Hooks,","React,","Context","API","CSS","Modules."],writeUp:"Salt is a purpose built Compliance Learning Management System (LMS) developed GRC Solutions. The Front End has been redesigned and rebuilt from the ground up using React, Hooks, Context API and CSS Modules. This includes a rework and integration with a 20 year old LMS player and has been designed to be a completely white label product that a client can tailor to suit their own branding."}),i.a.createElement(k,{nightMode:e.nightMode,projectName:"Slinky",linkText:"Chrome Web Store",linkUrl:"https://chrome.google.com/webstore/detail/oiabgomphebmcdglaoppphombggcdbpg/publish-accepted?authuser=0&hl=en-GB",githubUrl:"https://github.com/SamSeabourn/Slinky",imageUrls:[M.a,N.a,C.a],youtubeUrl:"https://www.youtube.com/embed/CtrtrZHS5q8",keyWords:["Firebase's","React","Slinky","Chrome","Extension"],writeUp:"Slinky is a Chrome Extension designed to manage and search through bookmarks with hotkeys and hashtags. This application is built with React using a custom webpack and utilizes Firebase's live database and anonymous authentication to deliver a faster alternative to vanilla bookmarking."}),i.a.createElement(k,{nightMode:e.nightMode,projectName:"ExactDocs",linkText:"ExactDocs.com",linkUrl:"https://exactdocs.com/",imageUrls:[D.a,L.a,G.a],keyWords:["ExactDocs","C#",".Net"],writeUp:"With ExactDocs you can centralize and control all of your document templates and use them to generate perfectly compliant and accurate documents every time. ExactDocs is built with Microsoft .Net in C# by Solentive Software and has been undergoing continuous product updates based on user feedback."}),i.a.createElement(k,{nightMode:e.nightMode,projectName:"DemoGB",linkText:"DemoGB",linkUrl:"http://www.demomygb.games/",githubUrl:"https://demomygb.herokuapp.com/",imageUrls:[I.a,O.a,A.a],youtubeUrl:"https://www.youtube.com/embed/5S6PauVO7To",keyWords:["Mongo.DB.","Node.js,","Express","Server","Side","Rendering"],writeUp:"DemoGB allows indie GameBoy game developers to upload and try each other's creations on a simulated 3D GameBoy in the browser. This app was built in just over a week and utlises Server Side Rendering with Express, blob storage and Mongo.DB."}))}}}]);
//# sourceMappingURL=3.8106c661.chunk.js.map