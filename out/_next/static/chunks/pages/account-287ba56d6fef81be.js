(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[966],{95458:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account",function(){return t(57526)}])},57526:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return V}});var n=t(85893),r=t(9008),a=t.n(r),i=t(61953),l=t(36336),o=t(29630),c=t(79072),d=t(26042),u=t(69396),m=t(49837),x=t(91359),h=t(44731),g=t(44373),f=t(62026),j=t(75084),Z=t(9473),P="/static/images/avatars/avatar_1.png",w="Los Angeles",p="USA",v="GTM-7",y=function(e){var s=(0,Z.v9)((function(e){return e.Profile.item?e.Profile.item:[]}));return console.log(s),(0,n.jsxs)(m.Z,(0,u.Z)((0,d.Z)({},e),{children:[(0,n.jsx)(x.Z,{children:(0,n.jsxs)(i.Z,{sx:{alignItems:"center",display:"flex",flexDirection:"column"},children:[(0,n.jsx)(h.Z,{src:P,sx:{height:64,mb:2,width:64}}),(0,n.jsx)(o.Z,{color:"textPrimary",gutterBottom:!0,variant:"h5",children:s.name}),(0,n.jsx)(o.Z,{color:"textSecondary",variant:"body2",children:"".concat(w," ").concat(p)}),(0,n.jsx)(o.Z,{color:"textSecondary",variant:"body2",children:v})]})}),(0,n.jsx)(g.Z,{}),(0,n.jsx)(f.Z,{children:(0,n.jsx)(j.Z,{color:"primary",fullWidth:!0,variant:"text",children:"Upload picture"})})]}))},b=t(47568),_=(t(14924),t(70603)),A=t(20414),N=t(67294),C=t(67836),S=t(59742),k=t(1890),W=t(76779),E=t(95398),T=t(77745),B=t(9669),M=t.n(B),L=t(70461),z=function(e){var s=(0,N.useState)(!1),t=s[0],r=s[1],a=(0,_.Z)((0,L.Z)(["token"]),3),l=a[0],h=(a[1],a[2],(0,N.useState)({oldPassword:"",newPassword:"",confirmPassword:""})),f=h[0],P=h[1],w=(0,N.useState)({status:0,message:""}),p=w[0],v=w[1],y=(0,N.useState)({status:0,message:""}),B=y[0],z=y[1],F=(0,N.useState)({status:0,message:""}),O=F[0],U=F[1],V="http://159.223.96.89:4000/admin/resetPassword/",D=((0,Z.v9)((function(e){return e.Profile.itemList?e.Profile.itemList:[]})),(0,Z.v9)((function(e){return e.Profile.item?e.Profile.item:[]}))),G=(0,N.useState)({firstName:D.name,lastName:"k",email:D.email,phone:D.mobile,state:"Alabama",country:"USA"}),I=G[0],R=(G[1],function(){v({status:0,message:""}),z({status:0,message:""}),U({status:0,message:""}),P({oldPassword:"",newPassword:"",confirmPassword:""}),r(!1)}),X=function(){var e=(0,b.Z)((function(){var e,s,t;return(0,A.__generator)(this,(function(n){switch(n.label){case 0:return n.trys.push([0,4,,5]),0===f.length&&f.length<4?(e={},setMobileMsg((e.status=400,e.message="Please Enter Valid Password",e)),[3,3]):[3,1];case 1:return s={},[4,M().put(V.toString()+D.email,f,(s.headers={authorization:l.token},s)).then((function(e){console.log(e),"200"===e.data.status?(U({status:200,message:e.data.msg}),setTimeout((function(){v({status:0,message:""}),z({status:0,message:""}),U({status:0,message:""}),P({oldPassword:"",newPassword:"",confirmPassword:""})}),3e3)):v({status:e.data.status,message:e.data.msg})})).catch((function(e){console.log(e),v({status:400,message:"Please Provide a Valid Number, Exist In Database!"}),console.log("submit","Please Provide a Number")}))];case 2:n.sent(),n.label=3;case 3:return[3,5];case 4:return t=n.sent(),console.error(t.message),[3,5];case 5:return[2]}}))}));return function(){return e.apply(this,arguments)}}();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(k.Z,{open:t,maxWidth:"lg",onClose:R,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[(0,n.jsx)(T.Z,{id:"alert-dialog-title",children:"Reset Password"}),(0,n.jsxs)(E.Z,{style:{minWidth:"30rem"},children:[(0,n.jsxs)("div",{children:[(0,n.jsx)(C.Z,{style:{marginBottom:"1rem",marginTop:"1rem"},fullWidth:!0,label:"Old password",name:"oldPassword",type:"password",value:f.oldPassword,onChange:function(e){P((0,u.Z)((0,d.Z)({},f),{oldPassword:e.target.value})),v((0,u.Z)((0,d.Z)({},p),{message:null}))},variant:"outlined"}),p.status?200===p.status?(0,n.jsx)("p",{style:{color:"#5cb85c",textAlign:"center"},children:p.message}):(0,n.jsx)("p",{style:{color:"red",textAlign:"center"},children:p.message}):null]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(C.Z,{style:{marginBottom:"1rem",marginTop:"1rem"},fullWidth:!0,label:"New password",name:"newPassword",type:"password",value:f.newPassword,onChange:function(e){P((0,u.Z)((0,d.Z)({},f),{newPassword:e.target.value})),z((0,u.Z)((0,d.Z)({},B),{message:null}))},variant:"outlined"}),B.status?200===B.status?(0,n.jsx)("p",{style:{color:"#5cb85c",textAlign:"center"},children:B.message}):(0,n.jsx)("p",{style:{color:"red",textAlign:"center"},children:B.message}):null]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(C.Z,{style:{marginBottom:"1rem",marginTop:"1rem"},fullWidth:!0,label:"Confirm password",name:"confirmPassword",type:"password",value:f.confirmPassword,onChange:function(e){P((0,u.Z)((0,d.Z)({},f),{confirmPassword:e.target.value})),U((0,u.Z)((0,d.Z)({},O),{message:null}))},variant:"outlined"}),O.status?200===O.status?(0,n.jsx)("p",{style:{color:"#5cb85c",textAlign:"center"},children:O.message}):(0,n.jsx)("p",{style:{color:"red",textAlign:"center"},children:O.message}):null,f.confirmPassword.length>0?f.newPassword!==f.confirmPassword?(0,n.jsx)("p",{style:{color:"red",textAlign:"center"},children:"Password Not Matched"}):200===O.status?null:(0,n.jsx)("p",{style:{color:"#5cb85c",textAlign:"center"},children:"Password Matched"}):null]})]}),(0,n.jsxs)(W.Z,{children:[(0,n.jsx)(j.Z,{fullWidth:!0,size:"small",sx:{mt:2},onClick:function(){return X()},variant:"contained",children:"Submit"}),(0,n.jsx)(j.Z,{fullWidth:!0,size:"small",sx:{mt:2},onClick:function(){return R()},variant:"contained",color:"info",children:"close"})]})]}),(0,n.jsx)("form",(0,u.Z)((0,d.Z)({autoComplete:"off",noValidate:!0},e),{children:(0,n.jsxs)(m.Z,{children:[(0,n.jsx)(S.Z,{subheader:"The information can be edited",title:"Profile"}),(0,n.jsx)(g.Z,{}),(0,n.jsx)(x.Z,{children:(0,n.jsxs)(c.ZP,{container:!0,spacing:3,children:[(0,n.jsx)(c.ZP,{item:!0,md:6,xs:12,children:(0,n.jsxs)(o.Z,{color:"textPrimary",gutterBottom:!0,variant:"p",children:["First Name: ",I.firstName]})}),(0,n.jsx)(c.ZP,{item:!0,md:6,xs:12,children:(0,n.jsxs)(o.Z,{color:"textPrimary",gutterBottom:!0,variant:"p",children:["Email: ",I.email]})}),(0,n.jsx)(c.ZP,{item:!0,md:6,xs:12,children:(0,n.jsxs)(o.Z,{color:"textPrimary",gutterBottom:!0,variant:"p",children:["Mobile: ",I.phone]})})]})}),(0,n.jsx)(g.Z,{}),(0,n.jsx)(i.Z,{sx:{display:"flex",justifyContent:"center",p:2},children:(0,n.jsx)(j.Z,{onClick:function(){r(!0)},color:"primary",variant:"contained",children:"Reset Password"})})]})}))]})},F=t(55950),O=t(72412),U=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a(),{children:(0,n.jsx)("title",{children:"Account"})}),(0,n.jsx)(i.Z,{component:"main",sx:{flexGrow:1,py:8},children:(0,n.jsxs)(l.Z,{maxWidth:"lg",children:[(0,n.jsx)(o.Z,{sx:{mb:3},variant:"h4",children:"Account"}),(0,n.jsxs)(c.ZP,{container:!0,spacing:3,children:[(0,n.jsx)(c.ZP,{item:!0,lg:4,md:6,xs:12,children:(0,n.jsx)(y,{})}),(0,n.jsx)(c.ZP,{item:!0,lg:8,md:6,xs:12,children:(0,n.jsx)(z,{})})]})]})})]})};U.getLayout=function(e){return(0,n.jsx)(F.c,{children:(0,n.jsx)(O.a,{children:e})})};var V=U}},function(e){e.O(0,[834,383,836,981,423,487,72,273,927,774,888,179],(function(){return s=95458,e(e.s=s);var s}));var s=e.O();_N_E=s}]);