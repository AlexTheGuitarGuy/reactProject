"use strict";(self.webpackChunksuka=self.webpackChunksuka||[]).push([[240],{6240:function(n,e,s){s.r(e),s.d(e,{default:function(){return A}});var r=s(1413),t=s(2791),a=s(2176),l=s.n(a),i=s(9502);var o=function(n){var e=n.getIn;return function(n,s){l()(n,"Form value must be specified");var r=s||function(n){return e(n,"form")};return function(s){for(var t=arguments.length,a=new Array(t>1?t-1:0),o=1;o<t;o++)a[o-1]=arguments[o];return l()(a.length,"No fields specified"),1===a.length?e(r(s),n+".values."+a[0]):a.reduce((function(t,a){var l=e(r(s),n+".values."+a);return void 0===l?t:i.Z.setIn(t,a,l)}),{})}}}(i.Z),c=s(704),u=s(5304),f=s(1595),m=s(9548),d=s(9219),x=s(8433),p=s(7146),j=s(184),h=function(n){var e=n.maxLen,s=n.lookingForAJob;return(0,j.jsxs)("div",{className:"border-2 border-slate-800 \n                         rounded bg-slate-600 \n                         p-2 mt-2 text-white",children:[(0,j.jsxs)("span",{className:"content flex justify-center mr-5",children:[(0,j.jsx)("span",{className:"mr-2",children:(0,f.Gr)("isLookingForJob","lookingForAJob",f.II,null,"checkbox")}),"is looking for a job"]}),s&&(0,j.jsx)("div",{className:"flex flex-col justify-center items-center text-black mt-2",children:(0,f.Gr)("Please enter your skills...","lookingForAJobDescription",f.gx,[e],null)})]})},b=s(1694),g=s.n(b),v=function(n){var e=n.contactName;return(0,j.jsxs)("div",{className:"mt-1",children:[e,":",(0,j.jsx)("span",{className:g()("ml-1 text-black"),children:(0,f.Gr)("insert "+e,"contacts."+e,f.II,null)})]})},N=function(n){var e=n.contacts,s=Object.keys(e).map((function(n){return(0,j.jsx)("span",{children:(0,j.jsx)(v,{contactName:n})},n)}));return(0,j.jsxs)("span",{className:"mt-1 text-white",children:["Contacts:",(0,j.jsx)("div",{className:"ml-1",children:s})]})},k=s(9058),Z=s(364),I=function(n){var e=n.profileStatus,s=n.pfp,r=n.updateStatus,t=n.isOwner,a=n.uploadPFP,l=n.handleSubmit,i=n.profileData.contacts,o=n.error,c=n.lookingForAJob,u=n.maxLen1000;return(0,j.jsxs)("form",{onSubmit:l,children:[(0,j.jsx)("img",{src:p,alt:"banner",className:m.Z.banner+" w-full"}),o&&(0,j.jsx)("div",{className:k.Z.summaryError,children:o}),(0,j.jsxs)("div",{className:m.Z.pfpAndDetails,children:[(0,j.jsx)("div",{className:m.Z.pfp,children:(0,j.jsx)("img",{src:s||d,alt:"pfp"})}),(0,j.jsxs)("span",{className:m.Z.jobInfo,children:[(0,j.jsx)("span",{className:"grid",children:t?(0,j.jsx)("button",{children:"Save"}):null}),(0,j.jsx)("input",{type:"file",onChange:function(n){n.target.files.length&&a(n.target.files[0])}}),(0,j.jsx)(h,{lookingForAJob:c,maxLen:u})]}),(0,j.jsxs)("div",{className:m.Z.details,children:[(0,j.jsx)("span",{className:m.Z.username,children:(0,j.jsx)("span",{className:"flex flex-col justify-center items-center text-black",children:(0,f.Gr)("Please insert your name...","fullName",f.II,null,null)})}),(0,j.jsx)("span",{className:m.Z.status,children:(0,j.jsx)(x.Z,{status:e,updateStatus:r,isOwner:t})}),(0,j.jsx)("span",{className:m.Z.contacts,children:(0,j.jsx)(N,{contacts:i})})]})]})]})};I=(0,c.Z)({form:"profileInfo"})(I);var F=o("profileInfo");I=(0,Z.$j)((function(n){return{lookingForAJob:F(n,"lookingForAJob")}}))(I);var y=function(n){var e=(0,u.g)(50),s=(0,u.g)(1e3);return(0,j.jsx)(I,(0,r.Z)((0,r.Z)({onSubmit:function(e){n.uploadProfileInfo(e)}},n),{},{maxLen50:e,maxLen1000:s,initialValues:n.profileData}))},A=(0,t.memo)(y)},5304:function(n,e,s){s.d(e,{C:function(){return r},g:function(){return t}});var r=function(n){if(!n)return"field is required"},t=function(n){return function(e){if(e&&e.length>n)return"maximum length is ".concat(n)}}}}]);
//# sourceMappingURL=240.e6f1f32e.chunk.js.map