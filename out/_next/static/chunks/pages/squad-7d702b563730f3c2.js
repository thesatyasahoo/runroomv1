(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[51],{94816:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/squad",function(){return a(33547)}])},45102:function(e,t,a){"use strict";a.d(t,{J:function(){return r}});var n=a(57632),r=[{id:(0,n.Z)(),address:{country:"USA",state:"West Virginia",city:"Parkersburg",street:"2849 Fulton Street"},avatarUrl:"/static/images/avatars/avatar_3.png",createdAt:15550164e5,email:"ekaterina.tankova@devias.io",name:"Ekaterina Tankova",phone:"304-428-3097"},{id:(0,n.Z)(),address:{country:"USA",state:"Bristow",city:"Iowa",street:"1865  Pleasant Hill Road"},avatarUrl:"/static/images/avatars/avatar_4.png",createdAt:15550164e5,email:"cao.yu@devias.io",name:"Cao Yu",phone:"712-351-5711"},{id:(0,n.Z)(),address:{country:"USA",state:"Georgia",city:"Atlanta",street:"4894  Lakeland Park Drive"},avatarUrl:"/static/images/avatars/avatar_2.png",createdAt:15550164e5,email:"alexa.richardson@devias.io",name:"Alexa Richardson",phone:"770-635-2682"},{id:(0,n.Z)(),address:{country:"USA",state:"Ohio",city:"Dover",street:"4158  Hedge Street"},avatarUrl:"/static/images/avatars/avatar_5.png",createdAt:155493e7,email:"anje.keizer@devias.io",name:"Anje Keizer",phone:"908-691-3242"},{id:(0,n.Z)(),address:{country:"USA",state:"Texas",city:"Dallas",street:"75247"},avatarUrl:"/static/images/avatars/avatar_6.png",createdAt:15547572e5,email:"clarke.gillebert@devias.io",name:"Clarke Gillebert",phone:"972-333-4106"},{id:(0,n.Z)(),address:{country:"USA",state:"California",city:"Bakerfield",street:"317 Angus Road"},avatarUrl:"/static/images/avatars/avatar_1.png",createdAt:15546708e5,email:"adam.denisov@devias.io",name:"Adam Denisov",phone:"858-602-3409"},{id:(0,n.Z)(),address:{country:"USA",state:"California",city:"Redondo Beach",street:"2188  Armbrester Drive"},avatarUrl:"/static/images/avatars/avatar_7.png",createdAt:15543252e5,email:"ava.gregoraci@devias.io",name:"Ava Gregoraci",phone:"415-907-2647"},{id:(0,n.Z)(),address:{country:"USA",state:"Nevada",city:"Las Vegas",street:"1798  Hickory Ridge Drive"},avatarUrl:"/static/images/avatars/avatar_8.png",createdAt:15230484e5,email:"emilee.simchenko@devias.io",name:"Emilee Simchenko",phone:"702-661-1654"},{id:(0,n.Z)(),address:{country:"USA",state:"Michigan",city:"Detroit",street:"3934  Wildrose Lane"},avatarUrl:"/static/images/avatars/avatar_9.png",createdAt:15547028e5,email:"kwak.seong.min@devias.io",name:"Kwak Seong-Min",phone:"313-812-8947"},{id:(0,n.Z)(),address:{country:"USA",state:"Utah",city:"Salt Lake City",street:"368 Lamberts Branch Road"},avatarUrl:"/static/images/avatars/avatar_10.png",createdAt:15227028e5,email:"merrile.burgett@devias.io",name:"Merrile Burgett",phone:"801-301-7894"}]},97169:function(e,t,a){"use strict";var n=a(85893);(0,a(58175).Z)((0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,n.jsx)("path",{fillRule:"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",clipRule:"evenodd"})}),"Search")},33547:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return H}});var n=a(85893),r=a(9008),i=a.n(r),s=a(61953),o=a(36336),l=a(47568),d=a(40872),c=a(26042),u=a(69396),m=a(70603),p=a(20414),h=a(67294),g=a(51964),v=a.n(g),y=a(65462),x=a(75084),_=a(67836),f=a(49837),Z=a(90244),j=a(93978),S=a(69417),A=a(5605),b=a(39807),k=a(82773),w=a(9669),C=a.n(w),U=a(9473),q=a(8364),T=a(8842),D=a(772),P=a(69243),R=a(1890),W=a(76779),z=a(95398),O=a(77745),L=a(70461),N=a(70754),B=function(e){var t=(0,d.Z)({},e),a=(0,h.useState)(!1),r=a[0],i=(a[1],(0,m.Z)((0,L.Z)(["token"]),3)),o=i[0],g=(i[1],i[2],(0,h.useState)([])),w=g[0],B=(g[1],(0,h.useState)(10)),E=B[0],I=B[1],M=(0,h.useState)(0),V=M[0],G=M[1],F=(0,h.useState)([]),H=F[0],J=F[1],K=((0,U.I0)(),(0,h.useState)({})),X=K[0],Y=K[1],Q=(0,h.useState)(!1),$=Q[0],ee=Q[1],te=(0,h.useState)(!1),ae=te[0],ne=te[1],re=(0,h.useState)({}),ie=re[0],se=re[1],oe=(0,h.useState)({createdAt:0,description:"",front_image:"",image:"",invite_users:[""],member_enroll:"",name:"",payment_type:"",run_setup:"",runroom_id:[],squadType:1,squad_leaders:[""],squad_runners:[""],timezone:(new Date).toISOString(),updatedAt:(new Date).toISOString(),user_id:"",visibility_type:"1"}),le=oe[0],de=oe[1];(0,y.Eu)().user;(0,h.useEffect)((function(){ce(o.token)}),[]);var ce=function(){var e=(0,l.Z)((function(e){var t;return(0,p.__generator)(this,(function(a){switch(a.label){case 0:return t={},[4,C().get("http://localhost:4000/admin/squadList",(t.headers={authorization:e},t)).then((function(e){console.log(e),J(e.data.squadList)})).catch((function(e){console.log(e)}))];case 1:return a.sent(),[2]}}))}));return function(t){return e.apply(this,arguments)}}(),ue=function(){var e=(0,l.Z)((function(e){var t;return(0,p.__generator)(this,(function(a){switch(a.label){case 0:return t={},[4,C().delete("http://localhost:4000/admin/delete-squad/"+e.id,(t.headers={authorization:o.token},t)).then((function(e){ce(o.token)})).catch((function(e){console.log(e)}))];case 1:return a.sent(),[2]}}))}));return function(t){return e.apply(this,arguments)}}(),me=function(){ee(!1)},pe=function(){ee(!0)},he=function(){ne(!1)};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(P.Z,{open:open.open,message:open.message,onClick:function(){return setOpen((0,u.Z)((0,c.Z)({},open),{open:!1}))},style:{cursor:"pointer"},color:"danger"}),(0,n.jsxs)(R.Z,{open:ae,maxWidth:"lg",onClose:he,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[(0,n.jsx)(O.Z,{id:"alert-dialog-title",children:"Squad Details"}),(0,n.jsx)("hr",{}),(0,n.jsx)(z.Z,{style:{minWidth:"30rem"},children:(0,n.jsx)("table",{className:"table",style:{borderCollapse:"separate",borderSpacing:"0 1em"},children:(0,n.jsx)("tbody",{children:(0,n.jsxs)("tr",{children:[(0,n.jsxs)("td",{scope:"row",style:{paddingRight:"3rem"},children:["Name : ",ie.name?ie.name:"NA"]}),(0,n.jsxs)("td",{children:["Payment Type : ",ie.payment_type?ie.payment_type:"NA"]})]})})})}),(0,n.jsx)(W.Z,{children:(0,n.jsx)(x.Z,{fullWidth:!0,size:"small",sx:{mt:2},onClick:function(){return he()},variant:"contained",color:"info",children:"close"})})]}),(0,n.jsxs)(R.Z,{open:$,maxWidth:"lg",onClose:me,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[(0,n.jsx)(O.Z,{id:"alert-dialog-title",children:"Update Squad"}),(0,n.jsxs)(z.Z,{style:{minWidth:"30rem"},children:[(0,n.jsx)("div",{children:(0,n.jsx)(_.Z,{style:{marginBottom:"1rem",marginTop:"1rem"},fullWidth:!0,label:"Name",name:"name",type:"text",defaultValue:X.name,onChange:function(e){de((0,u.Z)((0,c.Z)({},le),{name:e.target.value}))},variant:"outlined"})}),(0,n.jsx)("div",{children:(0,n.jsx)(_.Z,{style:{marginBottom:"1rem",marginTop:"1rem"},fullWidth:!0,label:"Payment Type",name:"payment_type",type:"text",defaultValue:X.payment_type,onChange:function(e){de((0,u.Z)((0,c.Z)({},le),{payment_type:e.target.value}))},variant:"outlined"})}),(0,n.jsx)("div",{children:(0,n.jsx)(_.Z,{style:{marginBottom:"1rem",marginTop:"1rem"},fullWidth:!0,label:"Run Setup",name:"run_setup",type:"text",defaultValue:X.run_setup,onChange:function(e){de((0,u.Z)((0,c.Z)({},le),{run_setup:e.target.value}))},variant:"outlined"})})]}),(0,n.jsxs)(W.Z,{children:[!0===r?(0,n.jsx)("div",{style:{textAlign:"center",marginTop:"1rem",width:"100%"},children:(0,n.jsx)(N.Z,{color:"primary",style:{marginLeft:"2rem"}})}):(0,n.jsx)(x.Z,{fullWidth:!0,size:"small",sx:{mt:2},onClick:function(e){return handleUpdateRoom(le)},variant:"contained",children:"Update"}),(0,n.jsx)(x.Z,{fullWidth:!0,size:"small",sx:{mt:2},onClick:function(){return me()},variant:"contained",color:"info",children:"close"})]})]}),(0,n.jsxs)(f.Z,(0,u.Z)((0,c.Z)({},t),{children:[(0,n.jsx)(v(),{children:(0,n.jsx)(s.Z,{sx:{minWidth:1050},children:(0,n.jsxs)(Z.Z,{children:[(0,n.jsx)(j.Z,{children:(0,n.jsxs)(S.Z,{children:[(0,n.jsx)(A.Z,{children:"Created At"}),(0,n.jsx)(A.Z,{children:"Name"}),(0,n.jsx)(A.Z,{children:"Payment Type"}),(0,n.jsx)(A.Z,{children:"Run Setup"}),(0,n.jsx)(A.Z,{children:"Action"})]})}),(0,n.jsx)(b.Z,{children:H.length>0?H.map((function(e){return(0,n.jsxs)(S.Z,{hover:!0,selected:-1!==w.indexOf(e._id),children:[(0,n.jsx)(A.Z,{children:e.createdAt?new Date(e.createdAt).toLocaleDateString():null}),(0,n.jsx)(A.Z,{children:e.name?e.name:null}),(0,n.jsx)(A.Z,{children:e.payment_type?e.payment_type:null}),(0,n.jsx)(A.Z,{children:e.run_setup?e.run_setup:null}),(0,n.jsxs)(A.Z,{children:[(0,n.jsx)(T.Z,{color:"info",onClick:function(){return t=e,ne(!0),void se(t);var t},style:{marginRight:"0.3rem",cursor:"pointer"}}),(0,n.jsx)(D.Z,{color:"success",onClick:function(){return t=e,pe(),Y(t),void de({createdAt:t.createdAt?t.createdAt:(new Date).toISOString(),description:t.description?t.description:"",front_image:t.front_image?t.front_image:"",image:t.image?t.image:"",invite_users:t.image?t.image:[""],member_enroll:t.member_enroll?t.member_enroll:"",name:t.name?t.name:"",payment_type:t.payment_type?t.payment_type:"",run_setup:t.run_setup?t.run_setup:"",runroom_id:t.runroom_id?t.runroom_id:[""],squadType:t.squadType?t.squadType:1,squad_leaders:t.squad_leaders?t.squad_leaders:[""],squad_runners:t.squad_runners?t.squad_runners:[""],timezone:t.timezone?t.timezone:(new Date).toISOString(),updatedAt:(new Date).toISOString(),user_id:t.user_id?t.user_id:"",visibility_type:t.visibility_type?t.visibility_type:"1"});var t},style:{marginRight:"0.3rem",cursor:"pointer"}}),(0,n.jsx)(q.Z,{color:"success",onClick:function(){return ue(e)},style:{cursor:"pointer",color:"red"}})]})]},e._id)})):(0,n.jsx)(S.Z,{hover:!0,selected:-1!==w.indexOf(H._id),children:(0,n.jsx)(A.Z,{colSpan:5,style:{textAlign:"center",paddingTop:"2rem"},children:(0,n.jsx)(N.Z,{color:"primary",size:80,style:{marginLeft:"2rem"}})})},H._id)})]})})}),(0,n.jsx)(k.Z,{component:"div",count:H.length,onPageChange:function(e,t){G(t)},onRowsPerPageChange:function(e){I(e.target.value)},page:V,rowsPerPage:E,rowsPerPageOptions:[5,10,25]})]}))]})},E=a(29630),I=(a(97169),function(e){return(0,n.jsx)(s.Z,(0,u.Z)((0,c.Z)({},e),{children:(0,n.jsx)(s.Z,{sx:{alignItems:"center",display:"flex",justifyContent:"space-between",flexWrap:"wrap",m:-1},children:(0,n.jsx)(E.Z,{sx:{m:1},variant:"h5",children:"List Of Squad"})})}))}),M=a(55950),V=a(45102),G=a(72412),F=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i(),{children:(0,n.jsx)("title",{children:"Squad"})}),(0,n.jsx)(s.Z,{component:"main",sx:{flexGrow:1,py:8},children:(0,n.jsxs)(o.Z,{maxWidth:!1,children:[(0,n.jsx)(I,{}),(0,n.jsx)(s.Z,{sx:{mt:3},children:(0,n.jsx)(B,{runrooms:V.J})})]})})]})};F.getLayout=function(e){return(0,n.jsx)(M.c,{children:(0,n.jsx)(G.a,{children:e})})};var H=F}},function(e){e.O(0,[834,383,836,981,423,243,487,62,433,927,774,888,179],(function(){return t=94816,e(e.s=t);var t}));var t=e.O();_N_E=t}]);