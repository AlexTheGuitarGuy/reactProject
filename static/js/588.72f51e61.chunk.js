"use strict";(self.webpackChunksuka=self.webpackChunksuka||[]).push([[588],{9588:function(e,r,s){s.r(r),s.d(r,{default:function(){return D}});var n=s(1413),t=s(5987),a=s(2807),l=s(364),i=s(2791),o=s(6871),d=s(1694),c=s.n(d),u=s(184),m=function(e){var r=e.message,s=r.from,n=r.text,t=e.pfp,a="me"===s;return(0,u.jsx)("div",{children:(0,u.jsxs)("div",{className:c()("flex font-normal mt-8",{"justify-end ml-8":a},{"mr-8":!a}),children:[(0,u.jsx)("img",{src:t,alt:"me",className:c()("h-10 w-10 rounded-full",{"order-1":!a},{"order-2":a})}),(0,u.jsx)("div",{className:c()("mt-2 p-2 rounded-b-lg",{"ml-4 order-2 bg-gray-400 text-white rounded-r-lg":!a},{"mr-4 order-1 bg-blue-400 text-white rounded-l-lg":a}),children:n})]})})},x=s(3504),f=function(e){var r=e.users.map((function(e){return(0,u.jsx)("div",{children:(0,u.jsxs)(x.OL,{to:"/messages/"+e.id,className:function(e){var r=e.isActive;return c()("p-2 flex items-center mt-4\n            transition-colors\n            border-b-2 border-transparent\n            hover:bg-gray-200 active:bg-gray-300\n            hover:text-gray-600 active:text-gray-700\n            hover:border-gray-400 active:border-gray-500\n            ",{"bg-gray-300 text-gray-700 border-gray-500":r})},children:[(0,u.jsx)("img",{src:s(7461)("./u".concat(e.id,".jpg")),alt:"user ".concat(e.id),className:"h-16 w-16 rounded-full"}),(0,u.jsx)("div",{className:"ml-4",children:e.name})]})},e.id)}));return(0,u.jsxs)("div",{className:"border-r border-gray-300",children:[(0,u.jsx)("div",{className:"text-xl",children:"Messages:"}),(0,u.jsx)("div",{children:r})]})},g=(0,i.memo)(f),h=s(704),j=s(549),v=(0,h.Z)({form:"login"})((function(e){var r=e.handleSubmit;return(0,u.jsx)("form",{onSubmit:r,children:(0,u.jsxs)("div",{className:"flex flex-row justify-center",children:[(0,j.Gr)("Enter your message","send",j.gx,null,null,{className:"resize-none w-full rounded-lg p-2"}),(0,u.jsx)("div",{children:(0,u.jsx)("button",{className:" bg-gray-400 hover:bg-gray-500 active:bg-gray-600 text-gray-100 text-center rounded-full ml-4 px-2 py-2 mt-2 transition-colors cursor-pointer focus:outline-none focus:ring-0",children:(0,u.jsx)("img",{src:s(1037),alt:"Send",className:"w-8 h-8 mr-3"})})})]})})})),b=function(e){var r=e.send,s=e.id;return(0,u.jsx)(v,{onSubmit:function(e){r(s,e.send),e.send=""}})},y=s(9219),p=function(e){for(var r=e.state,n=r.userMessages,t=r.users,a=e.memoryText,l=e.send,i=e.myData,d=[],c=function(e){d[e]=n[e].map((function(r){return(0,u.jsx)("div",{children:(0,u.jsx)(m,{message:r,pfp:"me"===r.from?i.photos.small||y:s(7461)("./u".concat(t[e].id,".jpg"))})},r.id)}))},x=0;x<n.length;x++)c(x);var f=d.map((function(e,r){return(0,u.jsx)(o.AW,{path:"/"+(r+1),element:(0,u.jsxs)("div",{className:"flex flex-col w-full relative",children:[(0,u.jsx)("div",{className:"mx-16 mb-32 overflow-scroll h-full",children:d[r]}),(0,u.jsx)("div",{className:"absolute bottom-0 w-3/5 self-center\r pb-4 rounded-t px-2 py-2 bg-gray-300",children:(0,u.jsx)(b,{memoryText:a,send:l,id:r})})]})},r)}));return(0,u.jsxs)("div",{className:"flex\r bg-gray-100 rounded-lg p-8\r text-gray-700 font-semibold\r h-full",children:[(0,u.jsx)(g,{users:t}),(0,u.jsxs)(o.Z5,{children:[(0,u.jsx)(o.AW,{path:"/",element:(0,u.jsx)(o.Fg,{to:"1"})}),f]})]})},N=s(1468),w=s(7781),k=function(e){return e.dialogsPage.storedText},Z=function(e){return e.dialogsPage},P=s(3008),A=s(6070),S=s(8582),T=s(8295),C=["uid","getProfile"],D=(0,w.qC)(N.Z,(0,l.$j)((function(e){return{memoryText:k(e),state:Z(e),uid:(0,P.Kr)(e),myData:(0,T.$y)(e)}}),{send:a.bG,getProfile:A.Ai}))((function(e){var r=e.uid,s=e.getProfile,a=(0,t.Z)(e,C);return(0,i.useEffect)((function(){s(r)})),a.myData?(0,u.jsx)(p,(0,n.Z)({},a)):(0,u.jsx)(S.Z,{})}))},1037:function(e,r,s){e.exports=s.p+"static/media/send.765a808a6897fcc5d8d1.png"}}]);
//# sourceMappingURL=588.72f51e61.chunk.js.map