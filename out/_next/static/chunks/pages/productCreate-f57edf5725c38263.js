(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[469],{48427:function(e,r,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/productCreate",function(){return a(80560)}])},45102:function(e,r,a){"use strict";a.d(r,{J:function(){return i}});var t=a(57632),i=[{id:(0,t.Z)(),address:{country:"USA",state:"West Virginia",city:"Parkersburg",street:"2849 Fulton Street"},avatarUrl:"/static/images/avatars/avatar_3.png",createdAt:15550164e5,email:"ekaterina.tankova@devias.io",name:"Ekaterina Tankova",phone:"304-428-3097"},{id:(0,t.Z)(),address:{country:"USA",state:"Bristow",city:"Iowa",street:"1865  Pleasant Hill Road"},avatarUrl:"/static/images/avatars/avatar_4.png",createdAt:15550164e5,email:"cao.yu@devias.io",name:"Cao Yu",phone:"712-351-5711"},{id:(0,t.Z)(),address:{country:"USA",state:"Georgia",city:"Atlanta",street:"4894  Lakeland Park Drive"},avatarUrl:"/static/images/avatars/avatar_2.png",createdAt:15550164e5,email:"alexa.richardson@devias.io",name:"Alexa Richardson",phone:"770-635-2682"},{id:(0,t.Z)(),address:{country:"USA",state:"Ohio",city:"Dover",street:"4158  Hedge Street"},avatarUrl:"/static/images/avatars/avatar_5.png",createdAt:155493e7,email:"anje.keizer@devias.io",name:"Anje Keizer",phone:"908-691-3242"},{id:(0,t.Z)(),address:{country:"USA",state:"Texas",city:"Dallas",street:"75247"},avatarUrl:"/static/images/avatars/avatar_6.png",createdAt:15547572e5,email:"clarke.gillebert@devias.io",name:"Clarke Gillebert",phone:"972-333-4106"},{id:(0,t.Z)(),address:{country:"USA",state:"California",city:"Bakerfield",street:"317 Angus Road"},avatarUrl:"/static/images/avatars/avatar_1.png",createdAt:15546708e5,email:"adam.denisov@devias.io",name:"Adam Denisov",phone:"858-602-3409"},{id:(0,t.Z)(),address:{country:"USA",state:"California",city:"Redondo Beach",street:"2188  Armbrester Drive"},avatarUrl:"/static/images/avatars/avatar_7.png",createdAt:15543252e5,email:"ava.gregoraci@devias.io",name:"Ava Gregoraci",phone:"415-907-2647"},{id:(0,t.Z)(),address:{country:"USA",state:"Nevada",city:"Las Vegas",street:"1798  Hickory Ridge Drive"},avatarUrl:"/static/images/avatars/avatar_8.png",createdAt:15230484e5,email:"emilee.simchenko@devias.io",name:"Emilee Simchenko",phone:"702-661-1654"},{id:(0,t.Z)(),address:{country:"USA",state:"Michigan",city:"Detroit",street:"3934  Wildrose Lane"},avatarUrl:"/static/images/avatars/avatar_9.png",createdAt:15547028e5,email:"kwak.seong.min@devias.io",name:"Kwak Seong-Min",phone:"313-812-8947"},{id:(0,t.Z)(),address:{country:"USA",state:"Utah",city:"Salt Lake City",street:"368 Lamberts Branch Road"},avatarUrl:"/static/images/avatars/avatar_10.png",createdAt:15227028e5,email:"merrile.burgett@devias.io",name:"Merrile Burgett",phone:"801-301-7894"}]},80560:function(e,r,a){"use strict";a.r(r),a.d(r,{default:function(){return F}});var t=a(85893),i=a(9008),n=a.n(i),o=a(61953),s=a(36336),d=a(36729),l=a(72412),c=a(45102),u=a(47568),h=a(26042),p=a(69396),m=a(70603),g=a(20414),v=a(67294),f=a(32671),y=a(82175),_=a(74231),x=a(49837),Z=a(67836),B=a(75084),b=a(9669),j=a.n(b),A=a(9473),C=a(11163),k=a.n(C),w=a(70461),S=a(69243),q=a(82741),U=a(25425),z=function(){(0,A.I0)();var e=(0,v.useState)(0),r=(e[0],e[1],(0,m.Z)((0,w.Z)(["token"]),3)),a=r[0],i=(r[1],r[2],(0,A.v9)((function(e){return e.Profile.itemList?e.Profile.itemList:[]})),(0,A.v9)((function(e){return e.Profile.item?e.Profile.item:[]})),(0,v.useState)({state:!1,message:""})),n=i[0],s=i[1];(0,v.useEffect)((function(){!0===n.open&&setTimeout((function(){s((0,p.Z)((0,h.Z)({},n),{open:!1}))}),1500)}),[n]);var d=(0,y.TA)({initialValues:{prod_name:"",prod_category:"",price:"$ ",added_by:"",prod_description:"",prod_size:"",image:""},validationSchema:_.Ry({prod_name:_.Z_().required("Name is required"),price:_.Z_().required("Price is required."),added_by:_.Z_().required("Author is required."),image:_.Z_().required("Image is required.")}),onSubmit:function(){var e=(0,u.Z)((function(e,r){var t,i;return(0,g.__generator)(this,(function(n){switch(n.label){case 0:console.log(e),n.label=1;case 1:return n.trys.push([1,3,,4]),t={},[4,j().post("http://localhost:4000/admin/addProduct",e,(t.headers={authorization:a.token?a.token:""},t)).then((function(e){console.log(e),l("success"),setTimeout((function(){d.setValues(d.initialValues)}),1e3),k().push("/products").catch(console.error)})).catch((function(e){r.setFieldError("submit","Please try with valid Product")}))];case 2:return n.sent(),[3,4];case 3:return i=n.sent(),console.error(i.message),r.setFieldError("submit",i.message||"Something went wrong"),r.setSubmitting(!1),[3,4];case 4:return[2]}}))}));return function(r,a){return e.apply(this,arguments)}}()}),l=function(e){console.log("open"),s({state:!0,message:e})},c=function(){s((0,p.Z)((0,h.Z)({},n),{state:!1}))},b=function(){var e=(0,u.Z)((function(e){var r,t,i,n,o,s;return(0,g.__generator)(this,(function(l){switch(l.label){case 0:return+(r=e.target.files[0].size)?(1024,2,t=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],i=Math.floor(Math.log(r)/Math.log(1024)),n="".concat(parseFloat((r/Math.pow(1024,i)).toFixed(2))," ").concat(t[i]),r>6e5?[2,alert("Image size should not greater then 600 kb, your upload file size is "+n)]:((o=new FormData).append("image",e.target.files[0],e.target.files[0].name),s={},[4,j().post("http://localhost:4000/admin/uploadProductImg",o,(s.headers={authorization:a.token},s)).then((function(e){console.log(e),d.setFieldValue("image",e.data.url)})).catch((function(e){console.log(e)}))])):[2,"0 Bytes"];case 1:return[2,l.sent()]}}))}));return function(r){return e.apply(this,arguments)}}();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(S.Z,{anchorOrigin:{horizontal:"center",vertical:"top"},TransitionComponent:T,open:n.state,autoHideDuration:2500,onClose:c,children:(0,t.jsx)(P,{onClose:c,sx:{width:"100%"},children:n.message})}),(0,t.jsx)(x.Z,{children:(0,t.jsxs)(o.Z,{component:"form",sx:{"& .MuiTextField-root":{m:2,width:"31ch"}},noValidate:!0,autoComplete:"off",children:[(0,t.jsxs)("div",{style:{width:"100%"},children:[(0,t.jsx)(Z.Z,{fullWidth:!0,id:"outlined-required",required:!0,error:Boolean(d.touched.prod_name&&d.errors.prod_name),helperText:d.touched.prod_name&&d.errors.prod_name,onBlur:d.handleBlur,onChange:d.handleChange,label:"Product Name",name:"prod_name",type:"text",value:d.values.prod_name,variant:"outlined"}),(0,t.jsx)(Z.Z,{fullWidth:!0,id:"outlined-required",required:!0,error:Boolean(d.touched.price&&d.errors.price),helperText:d.touched.price&&d.errors.price,onBlur:d.handleBlur,onChange:d.handleChange,label:"Price",name:"price",type:"text",value:d.values.price,variant:"outlined"}),(0,t.jsx)(Z.Z,{fullWidth:!0,required:!0,id:"outlined-required",label:"Author",error:Boolean(d.touched.added_by&&d.errors.added_by),helperText:d.touched.added_by&&d.errors.added_by,onBlur:d.handleBlur,onChange:d.handleChange,name:"added_by",type:"text",value:d.values.added_by}),(0,t.jsx)(Z.Z,{fullWidth:!0,required:!0,id:"outlined-required",label:"Category",error:Boolean(d.touched.prod_category&&d.errors.prod_category),helperText:d.touched.prod_category&&d.errors.prod_category,onBlur:d.handleBlur,onChange:d.handleChange,name:"prod_category",type:"text",value:d.values.prod_category}),(0,t.jsx)(Z.Z,{fullWidth:!0,required:!0,id:"outlined-required",label:"Size",error:Boolean(d.touched.prod_size&&d.errors.prod_size),helperText:d.touched.prod_size&&d.errors.prod_size,onBlur:d.handleBlur,onChange:d.handleChange,name:"prod_size",type:"text",value:d.values.prod_size}),(0,t.jsx)(Z.Z,{fullWidth:!0,required:!0,id:"outlined-required",label:"Description",error:Boolean(d.touched.prod_description&&d.errors.prod_description),helperText:d.touched.prod_description&&d.errors.prod_description,onBlur:d.handleBlur,onChange:d.handleChange,name:"prod_description",type:"text",multiline:!0,rows:3,value:d.values.prod_description})]}),(0,t.jsxs)("div",{style:{paddingLeft:"1.5rem",display:"flex",justifyContent:"space-between"},children:[(0,t.jsxs)("div",{style:{paddingTop:"2rem"},children:[" ",(0,t.jsx)(f.Z.Group,{controlId:"formFile",className:"mb-3",style:{width:"100%"},children:(0,t.jsx)(f.Z.Control,{type:"file",style:{width:"100%"},onChange:function(e){return b(e)}})}),Boolean(d.touched.image&&d.errors.image)?(0,t.jsxs)("span",{style:{color:"red",fontSize:"13px"},children:["Image is required",(0,t.jsx)("sup",{children:"*"})]}):null]}),(0,t.jsx)("div",{style:{paddingBottom:"3rem",paddingRight:"3rem"},children:(0,t.jsx)(B.Z,{style:{marginTop:21},onClick:d.handleSubmit,variant:"outlined",size:"medium",color:"primary",children:"Submit"})})]})]})})]})},P=v.forwardRef((function(e,r){return(0,t.jsx)(q.Z,(0,h.Z)({elevation:6,ref:r,variant:"filled"},e))}));function T(e){return(0,t.jsx)(U.Z,(0,p.Z)((0,h.Z)({},e),{direction:"down"}))}var E=function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n(),{children:(0,t.jsx)("title",{children:"Create Product"})}),(0,t.jsx)(o.Z,{component:"main",sx:{flexGrow:1,py:8},children:(0,t.jsx)(s.Z,{maxWidth:!1,children:(0,t.jsx)(o.Z,{sx:{mt:3},children:(0,t.jsx)(z,{rochams:c.J})})})})]})};E.getLayout=function(e){return(0,t.jsx)(d.c,{children:(0,t.jsx)(l.a,{children:e})})};var F=E}},function(e){e.O(0,[834,936,836,981,816,243,141,359,925,774,888,179],(function(){return r=48427,e(e.s=r);var r}));var r=e.O();_N_E=r}]);