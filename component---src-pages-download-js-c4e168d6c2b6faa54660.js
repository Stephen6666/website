(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"9V/+":function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),l=n.n(a),r=n("CyKR"),o=n("ohv3"),i=n("mxZk"),c=n("vOnD"),m=n("DDoQ"),u=function(){return l.a.createElement(d,{id:"loophole"},l.a.createElement(m.a,null,l.a.createElement(s,null,l.a.createElement(p,null,l.a.createElement("h1",null,"Download & Setup Loophole")))))},d=c.c.header.withConfig({displayName:"header__HeaderWrapper",componentId:"hsvmjy-0"})(["background-color:#f8f8f8;padding:160px 0 80px 0;position:relative;clip-path:polygon(0 0,100% 0,100% 100%,0 calc(100% - 5vw));@media (max-width:","){}"],(function(e){return e.theme.screen.md})),p=c.c.div.withConfig({displayName:"header__HeaderTextGroup",componentId:"hsvmjy-1"})(["margin:0;> div{width:120%;margin-bottom:-4.5%;@media (max-width:","){margin:0 16px;}}h1{font-size:35px;margin:0 0 24px;color:",";}h2{font-size:5 rem;margin-bottom:24px;","}p{margin-bottom:48px;}@media (max-width:","){text-align:center;}"],(function(e){return e.theme.screen.md}),(function(e){return e.theme.color.primary}),(function(e){return e.theme.font_size.regular}),(function(e){return e.theme.screen.sm})),s=c.c.div.withConfig({displayName:"header__Flex",componentId:"hsvmjy-2"})(["display:grid;justify-content:space-between;align-content:center;grid-template-columns:1fr 1fr;@media (max-width:","){grid-template-columns:1fr;grid-gap:64px;}"],(function(e){return e.theme.screen.md})),h=n("o0o1"),f=n.n(h),g=(n("ls82"),n("HaE+")),w=n("vDqi"),E=n.n(w),x=n("Wbzz"),b=n("rk4w"),y=function(){var e=Object(b.b)(),t=(e.isAuthenticated,e.loginWithRedirect,Object(a.useState)(null)),n=t[0],r=t[1],o=Object(a.useState)(!0),i=o[0],c=o[1],u=Object(a.useState)(!1),d=u[0],p=u[1];Object(a.useEffect)((function(){function e(){return(e=Object(g.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.get("https://api.github.com/repos/loophole/cli/releases/latest");case 3:t=e.sent,r(t),c(!1),p(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),c(!1),p(!0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var s=i?[]:n.data.assets.filter((function(e){return e.name.includes("windows")})),h=i?[]:n.data.assets.filter((function(e){return e.name.includes("linux")})),w=i?[]:n.data.assets.filter((function(e){return e.name.includes("darwin")})),y=!s.length||!h.length||!w.length;return l.a.createElement(m.b,{id:"Download"},l.a.createElement(_,null,l.a.createElement(L,null,l.a.createElement(j,null,"Download"),l.a.createElement(q,null,l.a.createElement(N,null,"Please download the latest version of Loophole for your Operating System and Architecture.",i||d||y?l.a.createElement("div",null,i?l.a.createElement("h5",null,"Loading possible download options..."):null,i||!d&&!y?null:l.a.createElement("h5",null,"Please head to"," ",l.a.createElement("a",{href:"https://github.com/loophole/cli/releases/latest",target:"_blank",rel:"noreferrer"},"GitHub")," ","to get newest release.")):l.a.createElement(v,null,l.a.createElement(k,null,l.a.createElement(C,null,"Windows"),l.a.createElement(I,null,s.map((function(e){return l.a.createElement("li",{key:e.id},l.a.createElement("a",{href:e.browser_download_url,target:"_blank",rel:"noreferrer"},e.name.split("_").pop().split(".")[0]))})))),l.a.createElement(k,null,l.a.createElement(C,null,"Linux"),l.a.createElement(I,null,h.map((function(e){return l.a.createElement("li",{key:e.id},l.a.createElement("a",{href:e.browser_download_url,target:"_blank",rel:"noreferrer"},e.name.split("_").pop().split(".")[0]))})))),l.a.createElement(k,null,l.a.createElement(C,null,"Mac OSX"),l.a.createElement(I,null,w.map((function(e){return l.a.createElement("li",{key:e.id},l.a.createElement("a",{href:e.browser_download_url,target:"_blank",rel:"noreferrer"},e.name.split("_").pop().split(".")[0]))}))))),"On Linux or OSX you can unzip loophole from a terminal with the following command:",l.a.createElement("pre",null,l.a.createElement("code",null,"$ unzip /path/to/loophole.zip ")),"On Windows, just double click ",l.a.createElement("em",null,"loophole.zip"),"."))),l.a.createElement(L,null,l.a.createElement(j,null,"Authenticate"),l.a.createElement(q,null,l.a.createElement(N,null,l.a.createElement("br",null),"Firstly, open your favorite terminal and change directory to the place you downloaded loophole.",l.a.createElement("br",null),l.a.createElement("br",null),"To authenticate your CLI, execute",l.a.createElement("pre",null,l.a.createElement("code",null,"$ loophole account login")),"and follow the instructions on your screen to complete the login."))),l.a.createElement(L,null,l.a.createElement(j,null,"Test it!"),l.a.createElement(q,null,l.a.createElement(N,null,"To start an HTTP tunnel on port 3000, execute this next:",l.a.createElement("pre",null,l.a.createElement("code",null,"$ loophole http 3000",l.a.createElement("br",null),"# or ...",l.a.createElement("br",null),"# for 1.0.0-beta.8 and older",l.a.createElement("br",null),"$ loophole 3000")),"Read the ",l.a.createElement(x.Link,{to:"/docs"},"documentation")," to get more ideas on how to use Loophole.")))))},_=Object(c.c)(m.a).withConfig({displayName:"features__StyledContainer",componentId:"nv8q86-0"})(["pre{background-color:",";padding:10px;overflow:auto;width:auto;}code{background-color:",";padding:2px;font-family:monospace;color:",";}"],(function(e){return e.theme.color.white.darker}),(function(e){return e.theme.color.white.darker}),(function(e){return e.theme.color.primary})),v=c.c.div.withConfig({displayName:"features__DownloadLinksContainer",componentId:"nv8q86-1"})(["margin-top:2rem;margin-bottom:2rem;display:flex;border:1px solid ",";flex-wrap:wrap;flex-direction:row;@media screen and (min-width:1000px){flex-wrap:nowrap;}"],(function(e){return e.theme.color.black.light})),k=c.c.div.withConfig({displayName:"features__DownloadLinksSection",componentId:"nv8q86-2"})(["flex:1 1 auto;@media screen and (min-width:1000px){border-right:1px solid  ",";:last-child{border-right:none;}}"],(function(e){return e.theme.color.black.light})),C=c.c.h4.withConfig({displayName:"features__DownloadLinksSectionTitle",componentId:"nv8q86-3"})(["padding:0.5rem;margin:0;text-align:center;border-bottom:1px solid  ",";"],(function(e){return e.theme.color.black.light})),I=c.c.ul.withConfig({displayName:"features__DownloadLinksList",componentId:"nv8q86-4"})(["li{margin:2px;margin-top:3px;a{color:",";:hover{color:",";}text-decoration:none;}padding:0;}"],(function(e){return e.theme.color.white.primary}),(function(e){return e.theme.color.black.light})),L=c.c.div.withConfig({displayName:"features__FeatureItem",componentId:"nv8q86-5"})(["display:flex;justify-content:left;align-items:left;flex-direction:column;"]),j=c.c.h4.withConfig({displayName:"features__FeatureTitle",componentId:"nv8q86-6"})(["color:",";letter-spacing:0px;line-height:30px;margin-bottom:10px;text-align:left;"],(function(e){return e.theme.color.primary})),q=c.c.div.withConfig({displayName:"features__FeatureText",componentId:"nv8q86-7"})(["padding:10px;text-align:left;"]),N=c.c.div.withConfig({displayName:"features__Boxx",componentId:"nv8q86-8"})(['font-family:Consolas,"courier new";color:black;padding:8px;font-size:105%;clear:left;@media (max-width:',"){font-size:95%;}"],(function(e){return e.theme.screen.sm})),O=(c.c.button.withConfig({displayName:"features__ButtonLink",componentId:"nv8q86-9"})(["font-weight:bold;"]),n("0Bqs")),D=n("//Cv");t.default=function(){return l.a.createElement(r.a,null,l.a.createElement(o.a,{title:"Download"}),l.a.createElement(i.a,{isIndex:!1}),l.a.createElement(u,null),l.a.createElement(y,null),l.a.createElement(D.a,null),l.a.createElement(O.a,null))}}}]);
//# sourceMappingURL=component---src-pages-download-js-c4e168d6c2b6faa54660.js.map