"use strict";(self.webpackChunkloophole_website=self.webpackChunkloophole_website||[]).push([[3119],{785:function(e,t,l){l.r(t),l.d(t,{default:function(){return h}});var n=l(5861),a=l(7757),r=l.n(a),o=l(7294),c=l(6445),i=l(9962),s=l(9524),m=l(3699),u=l(9669),d=l.n(u),p="downloadList_GcW2",E=l(6010),h=function(){var e=(0,i.Z)(),t=(0,o.useState)(null),l=t[0],a=t[1],u=(0,o.useState)(!0),h=u[0],f=u[1],v=(0,o.useState)(!1),b=v[0],w=v[1];(0,o.useEffect)((function(){function e(){return(e=(0,n.Z)(r().mark((function e(){var t;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d().get("https://api.github.com/repos/loophole/cli/releases/latest");case 3:t=e.sent,a(t),f(!1),w(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),f(!1),w(!0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var g=e.siteConfig,k=void 0===g?{}:g,N=h||b?[]:l.data.assets.filter((function(e){return e.name.includes("loophole-cli")&&e.name.includes("windows")})),_=h||b?[]:l.data.assets.filter((function(e){return e.name.includes("loophole-desktop")&&e.name.includes("windows")})),L=h||b?[]:l.data.assets.filter((function(e){return e.name.includes("loophole-cli")&&e.name.includes("linux")})),x=h||b?[]:l.data.assets.filter((function(e){return e.name.includes("loophole-desktop")&&e.name.includes("linux")})),y=h||b?[]:l.data.assets.filter((function(e){return e.name.includes("loophole-cli")&&e.name.includes("macos")})),S=h||b?[]:l.data.assets.filter((function(e){return e.name.includes("loophole-desktop")&&e.name.includes("macos")})),Z=!N.length||!L.length||!y.length,O=!_.length||!x.length||!S.length;return o.createElement(c.Z,{title:"Download",description:k.tagline},o.createElement("header",{className:"hero"},o.createElement("div",{className:"container"},o.createElement("h1",{className:"hero__subtitle"},"Download & Setup"))),o.createElement("main",null,o.createElement("section",null,o.createElement("div",{className:"container"},"Please download the latest version of Loophole for your Operating System and Architecture.")),o.createElement("div",{className:"spacer"}),o.createElement("section",null,o.createElement("div",{className:"container"},o.createElement("div",{className:"content"},o.createElement("h1",{className:"title is-3"},"CLI")))),o.createElement("section",null,o.createElement("div",{className:"container"},o.createElement("div",null,h||b||Z?o.createElement("div",{className:"row"},o.createElement("div",{className:(0,E.Z)("col col--12",p)},h?o.createElement("h5",null,"Loading possible download options..."):null,h||!b&&!Z?null:o.createElement("h5",null,"Please head to"," ",o.createElement("a",{href:"https://github.com/loophole/cli/releases/latest",target:"_blank",rel:"noreferrer"},"GitHub")," ","to get newest release."))):o.createElement("div",{className:"row"},o.createElement("div",{className:(0,E.Z)("col col--4",p)},o.createElement("div",null,"Windows"),o.createElement("div",null,o.createElement("ul",null,N.map((function(e){return o.createElement("li",{key:e.id},o.createElement("a",{href:e.browser_download_url,target:"_blank",rel:"noreferrer"},e.name.split("_").pop().split(".")[0].replace("32bit","Windows (32bit)").replace("64bit","Windows (64bit)").replace("i386","Windows (32bit)").replace("amd64","Windows (64bit)")))})).sort((function(e){return e.id}))))),o.createElement("div",{className:(0,E.Z)("col col--4",p)},o.createElement("div",null,"Linux"),o.createElement("div",null,o.createElement("ul",null,L.map((function(e){return o.createElement("li",{key:e.id},o.createElement("a",{href:e.browser_download_url,target:"_blank",rel:"noreferrer"},e.name.split("_").pop().split(".")[0].replace("32bit","Linux (32-bit)").replace("i386","Linux (32-bit)").replace("64bit","Linux (64-bit)").replace("amd64","Linux (64-bit)").replace("arm64","Linux (arm64)").replace("armv6","Linux (armv6)").replace("armv7","Linux (armv7)")))})).sort((function(e){return e.id}))))),o.createElement("div",{className:(0,E.Z)("col col--4",p)},o.createElement("div",null,"Mac OS"),o.createElement("div",null,o.createElement("ul",null,y.map((function(e){return o.createElement("li",{key:e.id},o.createElement("a",{href:e.browser_download_url,target:"_blank",rel:"noreferrer"},e.name.split("_").pop().split(".")[0].replace("64bit","Mac OS (64-bit)").replace("amd64","Mac OS (64-bit)")))})).sort((function(e){return e.id}))))))))),o.createElement("section",null,o.createElement("div",{className:"container"},o.createElement("h4",null,"Unpack"),o.createElement("p",null,"On Linux or OSX you can unzip loophole from a terminal with the following command:",o.createElement("pre",null,o.createElement("code",null,"$ unzip /path/to/loophole-cli-<version>.zip ")),"On Windows, just double click"," ",o.createElement("em",null,"loophole-cli-<version>.zip"),"."))),o.createElement("section",null,o.createElement("div",{className:"container"},o.createElement("h4",null,"Create account or login"),o.createElement("p",null,"Firstly, open your favorite terminal and change directory to the place you downloaded loophole. To authenticate your CLI, execute",o.createElement("pre",null,o.createElement("code",null,"$ loophole account login")),"and follow the instructions on your screen to complete the login."))),o.createElement("section",null,o.createElement("div",{className:"container"},o.createElement("h4",null,"Run it"),o.createElement("p",null,o.createElement("span",null,"To start an HTTP tunnel on port 3000, execute this next:"),o.createElement("pre",null,o.createElement("code",null,"$ loophole http 3000",o.createElement("br",null),o.createElement("br",null),"# or for 1.0.0-beta.8 and older",o.createElement("br",null),"$ loophole 3000")),"Read the ",o.createElement(m.Z,{to:(0,s.Z)("/docs")},"documentation")," to get more ideas on how to use Loophole."))),o.createElement("div",{className:"spacer"}),o.createElement("section",null,o.createElement("div",{className:"container"},o.createElement("div",{className:"content"},o.createElement("h1",{className:"title is-3"},"Desktop")))),o.createElement("section",null,o.createElement("div",{className:"container"},o.createElement("div",null,"Please download the latest version of Loophole for your Operating System and Architecture.",h||b||O?o.createElement("div",{className:"row"},o.createElement("div",{className:(0,E.Z)("col col--12",p)},h?o.createElement("h5",null,"Loading possible download options..."):null,h||!b&&!O?null:o.createElement("h5",null,"Please head to"," ",o.createElement("a",{href:"https://github.com/loophole/cli/releases/latest",target:"_blank",rel:"noreferrer"},"GitHub")," ","to get newest release."))):o.createElement("div",{className:"row"},o.createElement("div",{className:(0,E.Z)("col col--4",p)},o.createElement("div",null,"Windows"),o.createElement("div",null,o.createElement("ul",null,_.map((function(e){return o.createElement("li",{key:e.id},o.createElement("a",{href:e.browser_download_url,target:"_blank",rel:"noreferrer"},e.name.split("_").pop().split(".")[0].replace("32bit","Windows (32bit)").replace("64bit","Windows (64bit)").replace("i386","Windows (32bit)").replace("amd64","Windows (64bit)")))})).sort((function(e){return e.id}))))),o.createElement("div",{className:(0,E.Z)("col col--4",p)},o.createElement("div",null,"Linux"),o.createElement("div",null,o.createElement("ul",null,x.map((function(e){return o.createElement("li",{key:e.id},o.createElement("a",{href:e.browser_download_url,target:"_blank",rel:"noreferrer"},e.name.split("_").pop().split(".")[0].replace("32bit","Linux (32-bit)").replace("i386","Linux (32-bit)").replace("64bit","Linux (64-bit)").replace("amd64","Linux (64-bit)").replace("arm64","Linux (arm64)").replace("armv6","Linux (armv6)").replace("armv7","Linux (armv7)")))})).sort((function(e){return e.id}))))),o.createElement("div",{className:(0,E.Z)("col col--4",p)},o.createElement("div",null,"Mac OS"),o.createElement("div",null,o.createElement("ul",null,S.map((function(e){return o.createElement("li",{key:e.id},o.createElement("a",{href:e.browser_download_url,target:"_blank",rel:"noreferrer"},e.name.split("_").pop().split(".")[0].replace("64bit","Mac OS (64-bit)").replace("amd64","Mac OS (64-bit)")))})).sort((function(e){return e.id}))))))))),o.createElement("section",null,o.createElement("div",{className:"container"},o.createElement("h4",null,"Unpack"),o.createElement("p",null,"On Linux or OSX you can unzip loophole from a terminal with the following command:",o.createElement("pre",null,o.createElement("code",null,"$ unzip /path/to/loophole-desktop-<version>.zip"," ")),"On Windows, just double click"," ",o.createElement("em",null,"loophole-desktop-<version>.zip"),"."))),o.createElement("section",null,o.createElement("div",{className:"container"},o.createElement("h4",null,"Run it"),o.createElement("p",null,"Simply ",o.createElement("strong",null,"doubleclick")," on it or run from terminal:"),o.createElement("p",null,o.createElement("pre",null,o.createElement("code",null,"$ loophole-desktop")),"Read the ",o.createElement(m.Z,{to:(0,s.Z)("/docs")},"documentation")," to get more ideas on how to use Loophole."))),o.createElement("div",{className:"spacer"})))}}}]);