import{C as o}from"./index.73a4398f.js";import{D as l}from"./function-call.ebbd8811.js";import{c as k}from"./index.5499b82e.js";import{a as A}from"./use-translate.813c82b8.js";import{z as E,D as _,r as g,o as b,a as w,e as u,w as r,B as e,d as h,F as v}from"./vue-libs.e99ed056.js";import"./with-install.ed706383.js";import"./use-route.ffc287bb.js";import"./index.b854190e.js";import"./mount-component.852f8ebd.js";import"./use-expose.f2ccb00a.js";import"./constant.80c6de18.js";import"./interceptor.ffa245cd.js";import"./index.a230d5bc.js";import"./use-touch.1aeb3848.js";import"./use-lazy-render.925a18cc.js";import"./on-popup-reopen.8597ae62.js";import"./index.9efe88fe.js";import"./index.a8d195a5.js";import"./index.04ba88cf.js";import"./index.a9c50d91.js";const x=["src"],W=E({name:"index",setup(y){const m=l.Component,t=A({"zh-CN":{title:"\u6807\u9898",alert1:"\u63D0\u793A\u5F39\u7A97",alert2:"\u63D0\u793A\u5F39\u7A97\uFF08\u65E0\u6807\u9898\uFF09",confirm:"\u786E\u8BA4\u5F39\u7A97",content1:"\u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C\u3002",content2:"\u751F\u547D\u8FDC\u4E0D\u6B62\u8FDE\u8F74\u8F6C\u548C\u5FD9\u5230\u6781\u9650\uFF0C\u4EBA\u7C7B\u7684\u4F53\u9A8C\u8FDC\u6BD4\u8FD9\u8FBD\u9614\u3001\u4E30\u5BCC\u5F97\u591A\u3002",content3:"\u5982\u679C\u89E3\u51B3\u65B9\u6CD5\u662F\u4E11\u964B\u7684\uFF0C\u90A3\u5C31\u80AF\u5B9A\u8FD8\u6709\u66F4\u597D\u7684\u89E3\u51B3\u65B9\u6CD5\uFF0C\u53EA\u662F\u8FD8\u6CA1\u6709\u53D1\u73B0\u800C\u5DF2\u3002",beforeClose:"\u5F02\u6B65\u5173\u95ED",roundButton:"\u5706\u89D2\u6309\u94AE\u6837\u5F0F",componentCall:"\u7EC4\u4EF6\u8C03\u7528"},"en-US":{title:"Title",alert1:"Alert",alert2:"Alert without title",confirm:"Confirm dialog",content1:"Content",content2:"Content",content3:"Content",beforeClose:"Before Close",roundButton:"Round Button Style",componentCall:"Component Call"}}),s=_(!1),C=k("apple-3.jpeg"),F=()=>{l.alert({title:t("title"),message:t("content1")})},p=()=>{l.alert({message:t("content2")})},d=()=>{l.alert({theme:"round-button",title:t("title"),message:t("content1")})},f=()=>{l.alert({theme:"round-button",message:t("content2")})},B=()=>{l.confirm({title:t("title"),message:t("content3")})},D=()=>{const a=n=>new Promise(i=>{setTimeout(()=>i(n==="confirm"),1e3)});l.confirm({title:t("title"),message:t("content3"),beforeClose:a})};return(a,n)=>{const i=g("demo-block");return b(),w(v,null,[u(i,{card:"",title:e(t)("basicUsage")},{default:r(()=>[u(e(o),{"is-link":"",title:e(t)("alert1"),onClick:F},null,8,["title"]),u(e(o),{"is-link":"",title:e(t)("alert2"),onClick:p},null,8,["title"]),u(e(o),{"is-link":"",title:e(t)("confirm"),onClick:B},null,8,["title"])]),_:1},8,["title"]),u(i,{card:"",title:e(t)("roundButton")},{default:r(()=>[u(e(o),{"is-link":"",title:e(t)("alert1"),onClick:d},null,8,["title"]),u(e(o),{"is-link":"",title:e(t)("alert2"),onClick:f},null,8,["title"])]),_:1},8,["title"]),u(i,{card:"",title:e(t)("beforeClose")},{default:r(()=>[u(e(o),{"is-link":"",title:e(t)("beforeClose"),onClick:D},null,8,["title"])]),_:1},8,["title"]),u(i,{card:"",title:e(t)("componentCall")},{default:r(()=>[u(e(o),{"is-link":"",title:e(t)("componentCall"),onClick:n[0]||(n[0]=c=>s.value=!0)},null,8,["title"]),u(e(m),{show:s.value,"onUpdate:show":n[1]||(n[1]=c=>s.value=c),title:e(t)("title"),"show-cancel-button":"","lazy-render":!1},{default:r(()=>[h("img",{src:e(C)},null,8,x)]),_:1},8,["show","title"])]),_:1},8,["title"])],64)}}});export{W as default};
