(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[345],{47638:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/products",function(){return a(56616)}])},45102:function(e,t,a){"use strict";a.d(t,{J:function(){return n}});var r=a(57632),n=[{id:(0,r.Z)(),address:{country:"USA",state:"West Virginia",city:"Parkersburg",street:"2849 Fulton Street"},avatarUrl:"/static/images/avatars/avatar_3.png",createdAt:15550164e5,email:"ekaterina.tankova@devias.io",name:"Ekaterina Tankova",phone:"304-428-3097"},{id:(0,r.Z)(),address:{country:"USA",state:"Bristow",city:"Iowa",street:"1865  Pleasant Hill Road"},avatarUrl:"/static/images/avatars/avatar_4.png",createdAt:15550164e5,email:"cao.yu@devias.io",name:"Cao Yu",phone:"712-351-5711"},{id:(0,r.Z)(),address:{country:"USA",state:"Georgia",city:"Atlanta",street:"4894  Lakeland Park Drive"},avatarUrl:"/static/images/avatars/avatar_2.png",createdAt:15550164e5,email:"alexa.richardson@devias.io",name:"Alexa Richardson",phone:"770-635-2682"},{id:(0,r.Z)(),address:{country:"USA",state:"Ohio",city:"Dover",street:"4158  Hedge Street"},avatarUrl:"/static/images/avatars/avatar_5.png",createdAt:155493e7,email:"anje.keizer@devias.io",name:"Anje Keizer",phone:"908-691-3242"},{id:(0,r.Z)(),address:{country:"USA",state:"Texas",city:"Dallas",street:"75247"},avatarUrl:"/static/images/avatars/avatar_6.png",createdAt:15547572e5,email:"clarke.gillebert@devias.io",name:"Clarke Gillebert",phone:"972-333-4106"},{id:(0,r.Z)(),address:{country:"USA",state:"California",city:"Bakerfield",street:"317 Angus Road"},avatarUrl:"/static/images/avatars/avatar_1.png",createdAt:15546708e5,email:"adam.denisov@devias.io",name:"Adam Denisov",phone:"858-602-3409"},{id:(0,r.Z)(),address:{country:"USA",state:"California",city:"Redondo Beach",street:"2188  Armbrester Drive"},avatarUrl:"/static/images/avatars/avatar_7.png",createdAt:15543252e5,email:"ava.gregoraci@devias.io",name:"Ava Gregoraci",phone:"415-907-2647"},{id:(0,r.Z)(),address:{country:"USA",state:"Nevada",city:"Las Vegas",street:"1798  Hickory Ridge Drive"},avatarUrl:"/static/images/avatars/avatar_8.png",createdAt:15230484e5,email:"emilee.simchenko@devias.io",name:"Emilee Simchenko",phone:"702-661-1654"},{id:(0,r.Z)(),address:{country:"USA",state:"Michigan",city:"Detroit",street:"3934  Wildrose Lane"},avatarUrl:"/static/images/avatars/avatar_9.png",createdAt:15547028e5,email:"kwak.seong.min@devias.io",name:"Kwak Seong-Min",phone:"313-812-8947"},{id:(0,r.Z)(),address:{country:"USA",state:"Utah",city:"Salt Lake City",street:"368 Lamberts Branch Road"},avatarUrl:"/static/images/avatars/avatar_10.png",createdAt:15227028e5,email:"merrile.burgett@devias.io",name:"Merrile Burgett",phone:"801-301-7894"}]},56616:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return X}});var r=a(85893),n=a(9008),i=a.n(n),s=a(61953),o=a(36336),l=a(47568),c=a(40872),d=a(26042),u=a(69396),m=a(70603),p=a(20414),h=a(67294),f=a(51964),g=a.n(f),v=a(65462),x=a(75084),y=a(67836),j=a(49837),Z=a(90244),b=a(93978),_=a(69417),w=a(5605),k=a(39807),N=a(82773),C=a(9669),P=a.n(C),A=a(9473),S=a(32671),F=a(8364),z=a(8842),R=a(772),U=a(69243),I=a(1890),E=a(76779),T=a(95398),B=a(77745),L=a(70461),W=a(70754),D=function(e){var t=(0,c.Z)({},e),a=(0,h.useState)(!1),n=a[0],i=a[1],o=(0,m.Z)((0,L.Z)(["token"]),3),f=o[0],C=(o[1],o[2],(0,h.useState)([])),D=C[0],V=(C[1],(0,h.useState)(10)),M=V[0],O=V[1],$=(0,h.useState)(0),G=$[0],H=$[1],K=(0,h.useState)([]),J=K[0],X=K[1],Y=((0,A.I0)(),(0,h.useState)({})),q=Y[0],Q=Y[1],ee=(0,h.useState)(!1),te=ee[0],ae=ee[1],re=(0,h.useState)(!1),ne=re[0],ie=re[1],se=(0,h.useState)({}),oe=se[0],le=se[1],ce=(0,h.useState)({prod_name:"",prod_category:"",price:"",added_by:"Admin",prod_description:"",image:"https://raw.githubusercontent.com/thesatyasahoo/My-codes/master/user.png",prod_size:""}),de=ce[0],ue=ce[1],me=(0,h.useState)({open:!1,message:"Success"}),pe=me[0],he=me[1];(0,v.Eu)().user;(0,h.useEffect)((function(){fe(f.token)}),[]);var fe=function(){var e=(0,l.Z)((function(e){var t;return(0,p.__generator)(this,(function(a){switch(a.label){case 0:return t={},[4,P().get("http://localhost:4000/admin/productsList",(t.headers={authorization:e},t)).then((function(e){console.log(e);e.data.productList.sort((function(e,t){return new Date(t.updatedAt)-new Date(e.updatedAt)}));X(e.data.productList)})).catch((function(e){console.log(e)}))];case 1:return a.sent(),[2]}}))}));return function(t){return e.apply(this,arguments)}}(),ge=function(){var e=(0,l.Z)((function(e){var t;return(0,p.__generator)(this,(function(a){switch(a.label){case 0:return i(!0),t={},[4,P().delete("http://localhost:4000/admin/deleteProduct/"+e._id,(t.headers={authorization:f.token},t)).then((function(e){he({open:!0,message:"Product Deleted Successfully."}),fe(f.token),i(!1)})).catch((function(e){he({open:!0,message:"Failed To Delete Product !"}),console.log(e),i(!1)}))];case 1:return a.sent(),[2]}}))}));return function(t){return e.apply(this,arguments)}}(),ve=function(){var e=(0,l.Z)((function(e){var t;return(0,p.__generator)(this,(function(a){return ue(((t={}).prod_name=e.prod_name?e.prod_name:"",t.prod_category=e.prod_category?e.prod_category:"",t.price=e.price?e.price:"",t.added_by="Admin",t.prod_description=e.prod_description?e.prod_description:"",t.image=e.image?e.image:"https://raw.githubusercontent.com/thesatyasahoo/My-codes/master/user.png",t.prod_size=e.prod_size?e.prod_size:"",t)),console.log(e),Ze(),Q(e),[2]}))}));return function(t){return e.apply(this,arguments)}}(),xe=function(){var e=(0,l.Z)((function(e){var t;return(0,p.__generator)(this,(function(a){switch(a.label){case 0:return console.log(e),console.log(de),t={},[4,P().put("http://localhost:4000/admin/editProduct/"+q._id,e,(t.headers={authorization:f.token},t)).then((function(e){he({open:!0,message:"Product Uploaded Successfully."}),fe(f.token),Q({}),je()})).catch((function(e){he({open:!0,message:"Failed To Update Product !"}),console.log(e)}))];case 1:return a.sent(),[2]}}))}));return function(t){return e.apply(this,arguments)}}(),ye=function(){var e=(0,l.Z)((function(e){var t,a,r,n,s,o;return(0,p.__generator)(this,(function(l){switch(l.label){case 0:return console.log(de),console.log(q),i(!0),+(t=e.target.files[0].size)?(1024,2,a=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],r=Math.floor(Math.log(t)/Math.log(1024)),n="".concat(parseFloat((t/Math.pow(1024,r)).toFixed(2))," ").concat(a[r]),t>6e5?(i(!1),[2,alert("Image size should not greater then 600 kb, your upload file size is "+n)]):((s=new FormData).append("image",e.target.files[0],e.target.files[0].name),o={},[4,P().put("http://localhost:4000/admin/addProdPic/"+q._id,s,(o.headers={authorization:f.token},o)).then((function(e){i(!1),ue((0,u.Z)((0,d.Z)({},de),{image:e.data.url}))})).catch((function(e){i(!1),console.log(e)}))])):[2,"0 Bytes"];case 1:return[2,l.sent()]}}))}));return function(t){return e.apply(this,arguments)}}(),je=function(){ae(!1)},Ze=function(){ae(!0)},be=function(){ie(!1)};return(0,h.useEffect)((function(){fe(f.token),!0===pe.open&&setTimeout((function(){he((0,u.Z)((0,d.Z)({},pe),{open:!1}))}),1500)}),[pe]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(U.Z,{anchorOrigin:{horizontal:"center",vertical:"top"},open:pe.open,message:pe.message,onClick:function(){return he((0,u.Z)((0,d.Z)({},pe),{open:!1}))},style:{cursor:"pointer"},color:"danger"}),(0,r.jsxs)(I.Z,{open:ne,maxWidth:"lg",onClose:be,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[(0,r.jsx)(B.Z,{id:"alert-dialog-title",children:"Product Details"}),(0,r.jsx)("hr",{}),(0,r.jsx)(T.Z,{style:{minWidth:"30rem"},children:(0,r.jsx)("table",{className:"table",style:{borderCollapse:"separate",borderSpacing:"0 1em"},children:(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{scope:"row",style:{paddingRight:"3rem"},children:["Name : ",oe.prod_name?oe.prod_name:"NA"]}),(0,r.jsxs)("td",{children:["Price : ",oe.price?oe.price:"NA"]})]})})})}),(0,r.jsx)(E.Z,{children:(0,r.jsx)(x.Z,{fullWidth:!0,size:"small",sx:{mt:2},onClick:function(){return be()},variant:"contained",color:"info",children:"close"})})]}),(0,r.jsxs)(I.Z,{open:te,maxWidth:"lg",onClose:je,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[(0,r.jsx)(B.Z,{id:"alert-dialog-title",children:"Update Product"}),(0,r.jsxs)(T.Z,{style:{minWidth:"30rem"},children:[(0,r.jsx)("div",{children:(0,r.jsx)(y.Z,{style:{marginBottom:"1rem",marginTop:"1rem"},fullWidth:!0,label:"Name",name:"prod_name",type:"text",defaultValue:q.prod_name,onChange:function(e){ue((0,u.Z)((0,d.Z)({},de),{prod_name:e.target.value}))},variant:"outlined"})}),(0,r.jsx)("div",{children:(0,r.jsx)(y.Z,{style:{marginBottom:"1rem",marginTop:"1rem"},fullWidth:!0,label:"Product Category",name:"prod_category",type:"text",defaultValue:q.prod_category,onChange:function(e){ue((0,u.Z)((0,d.Z)({},de),{prod_category:e.target.value}))},variant:"outlined"})}),(0,r.jsx)("div",{children:(0,r.jsx)(y.Z,{style:{marginBottom:"1rem",marginTop:"1rem"},fullWidth:!0,label:"Price",name:"price",type:"text",defaultValue:q.price,onChange:function(e){ue((0,u.Z)((0,d.Z)({},de),{price:e.target.value}))},variant:"outlined"})}),(0,r.jsx)("div",{children:(0,r.jsx)(y.Z,{style:{marginBottom:"1rem",marginTop:"1rem"},fullWidth:!0,label:"Author",name:"added_by",type:"text",defaultValue:q.added_by,onChange:function(e){ue((0,u.Z)((0,d.Z)({},de),{added_by:e.target.value}))},variant:"outlined"})}),(0,r.jsx)("div",{children:(0,r.jsx)(y.Z,{style:{marginBottom:"1rem",marginTop:"1rem"},fullWidth:!0,label:"Description",name:"prod_description",type:"text",defaultValue:q.prod_description,onChange:function(e){ue((0,u.Z)((0,d.Z)({},de),{prod_description:e.target.value}))},variant:"outlined"})}),(0,r.jsx)("div",{children:(0,r.jsx)(y.Z,{style:{marginBottom:"1rem",marginTop:"1rem"},fullWidth:!0,label:"Size",name:"prod_size",type:"text",defaultValue:q.prod_size,onChange:function(e){ue((0,u.Z)((0,d.Z)({},de),{prod_size:e.target.value}))},variant:"outlined"})}),(0,r.jsx)("div",{children:(0,r.jsx)(S.Z.Group,{controlId:"formFile",className:"mb-3",style:{width:"100%"},children:(0,r.jsx)(S.Z.Control,{type:"file",style:{width:"100%"},onChange:function(e){return ye(e)}})})})]}),(0,r.jsxs)(E.Z,{children:[!0===n?(0,r.jsx)("div",{style:{textAlign:"center",marginTop:"1rem",width:"100%"},children:(0,r.jsx)(W.Z,{color:"primary",style:{marginLeft:"2rem"}})}):(0,r.jsx)(x.Z,{fullWidth:!0,size:"small",sx:{mt:2},onClick:function(e){return xe(de)},variant:"contained",children:"Update"}),(0,r.jsx)(x.Z,{fullWidth:!0,size:"small",sx:{mt:2},onClick:function(){return je()},variant:"contained",color:"info",children:"close"})]})]}),(0,r.jsxs)(j.Z,(0,u.Z)((0,d.Z)({},t),{children:[(0,r.jsx)(g(),{children:(0,r.jsx)(s.Z,{sx:{minWidth:1050},children:(0,r.jsxs)(Z.Z,{children:[(0,r.jsx)(b.Z,{children:(0,r.jsxs)(_.Z,{children:[(0,r.jsx)(w.Z,{children:"Logo"}),(0,r.jsx)(w.Z,{children:"Created At"}),(0,r.jsx)(w.Z,{children:"Name"}),(0,r.jsx)(w.Z,{children:"Price"}),(0,r.jsx)(w.Z,{children:"Action"})]})}),(0,r.jsx)(k.Z,{children:J.length>0&&!1===n?J.map((function(e){return(0,r.jsxs)(_.Z,{hover:!0,selected:-1!==D.indexOf(e._id),children:[(0,r.jsxs)(w.Z,{children:[(0,r.jsx)("img",{alt:"...loading",src:e.image?e.image:"https://raw.githubusercontent.com/thesatyasahoo/My-codes/master/user.png",style:{height:"3rem",width:"3rem",borderRadius:"50%"}})," "]}),(0,r.jsx)(w.Z,{children:e.createdAt?new Date(e.createdAt).toLocaleDateString():null}),(0,r.jsx)(w.Z,{children:e.prod_name?e.prod_name:null}),(0,r.jsx)(w.Z,{children:e.price?e.price:null}),(0,r.jsxs)(w.Z,{children:[(0,r.jsx)(z.Z,{color:"info",onClick:function(){return t=e,ie(!0),void le(t);var t},style:{marginRight:"0.3rem",cursor:"pointer"}}),(0,r.jsx)(R.Z,{color:"success",onClick:function(){return ve(e)},style:{marginRight:"0.3rem",cursor:"pointer"}}),(0,r.jsx)(F.Z,{color:"success",onClick:function(){return ge(e)},style:{cursor:"pointer",color:"red"}})]})]},e._id)})):(0,r.jsx)(_.Z,{hover:!0,selected:-1!==D.indexOf(J._id),children:(0,r.jsx)(w.Z,{colSpan:5,style:{textAlign:"center",paddingTop:"2rem"},children:(0,r.jsx)(W.Z,{color:"primary",size:80,style:{marginLeft:"2rem"}})})},J._id)})]})})}),(0,r.jsx)(N.Z,{component:"div",count:J.length,onPageChange:function(e,t){H(t)},onRowsPerPageChange:function(e){O(e.target.value)},page:G,rowsPerPage:M,rowsPerPageOptions:[5,10,25]})]}))]})},V=a(29630),M=a(41664),O=a.n(M),$=function(e){return(0,r.jsx)(s.Z,(0,u.Z)((0,d.Z)({},e),{children:(0,r.jsxs)(s.Z,{sx:{alignItems:"center",display:"flex",justifyContent:"space-between",flexWrap:"wrap",m:-1},children:[(0,r.jsx)(V.Z,{sx:{m:1},variant:"h5",children:"Products"}),(0,r.jsx)(O(),{href:"/productCreate",passHref:!0,children:(0,r.jsx)(x.Z,{variant:"contained",children:"CREATE"})})]})}))},G=a(36729),H=a(45102),K=a(72412),J=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i(),{children:(0,r.jsx)("title",{children:"Products"})}),(0,r.jsx)(s.Z,{component:"main",sx:{flexGrow:1,py:8},children:(0,r.jsxs)(o.Z,{maxWidth:!1,children:[(0,r.jsx)($,{}),(0,r.jsx)(s.Z,{sx:{mt:3},children:(0,r.jsx)(D,{runrooms:H.J})})]})})]})};J.getLayout=function(e){return(0,r.jsx)(G.c,{children:(0,r.jsx)(K.a,{children:e})})};var X=J},32671:function(e,t,a){"use strict";a.d(t,{Z:function(){return V}});var r=a(94184),n=a.n(r),i=a(45697),s=a.n(i),o=a(67294),l=a(85893);const c={type:s().string,tooltip:s().bool,as:s().elementType},d=o.forwardRef((({as:e="div",className:t,type:a="valid",tooltip:r=!1,...i},s)=>(0,l.jsx)(e,{...i,ref:s,className:n()(t,`${a}-${r?"tooltip":"feedback"}`)})));d.displayName="Feedback",d.propTypes=c;var u=d;var m=o.createContext({}),p=a(76792);const h=o.forwardRef((({id:e,bsPrefix:t,className:a,type:r="checkbox",isValid:i=!1,isInvalid:s=!1,as:c="input",...d},u)=>{const{controlId:h}=(0,o.useContext)(m);return t=(0,p.vE)(t,"form-check-input"),(0,l.jsx)(c,{...d,ref:u,type:r,id:e||h,className:n()(a,t,i&&"is-valid",s&&"is-invalid")})}));h.displayName="FormCheckInput";var f=h;const g=o.forwardRef((({bsPrefix:e,className:t,htmlFor:a,...r},i)=>{const{controlId:s}=(0,o.useContext)(m);return e=(0,p.vE)(e,"form-check-label"),(0,l.jsx)("label",{...r,ref:i,htmlFor:a||s,className:n()(t,e)})}));g.displayName="FormCheckLabel";var v=g;const x=o.forwardRef((({id:e,bsPrefix:t,bsSwitchPrefix:a,inline:r=!1,reverse:i=!1,disabled:s=!1,isValid:c=!1,isInvalid:d=!1,feedbackTooltip:h=!1,feedback:g,feedbackType:x,className:y,style:j,title:Z="",type:b="checkbox",label:_,children:w,as:k="input",...N},C)=>{t=(0,p.vE)(t,"form-check"),a=(0,p.vE)(a,"form-switch");const{controlId:P}=(0,o.useContext)(m),A=(0,o.useMemo)((()=>({controlId:e||P})),[P,e]),S=!w&&null!=_&&!1!==_||function(e,t){return o.Children.toArray(e).some((e=>o.isValidElement(e)&&e.type===t))}(w,v),F=(0,l.jsx)(f,{...N,type:"switch"===b?"checkbox":b,ref:C,isValid:c,isInvalid:d,disabled:s,as:k});return(0,l.jsx)(m.Provider,{value:A,children:(0,l.jsx)("div",{style:j,className:n()(y,S&&t,r&&`${t}-inline`,i&&`${t}-reverse`,"switch"===b&&a),children:w||(0,l.jsxs)(l.Fragment,{children:[F,S&&(0,l.jsx)(v,{title:Z,children:_}),g&&(0,l.jsx)(u,{type:x,tooltip:h,children:g})]})})})}));x.displayName="FormCheck";var y=Object.assign(x,{Input:f,Label:v});a(42473);const j=o.forwardRef((({bsPrefix:e,type:t,size:a,htmlSize:r,id:i,className:s,isValid:c=!1,isInvalid:d=!1,plaintext:u,readOnly:h,as:f="input",...g},v)=>{const{controlId:x}=(0,o.useContext)(m);let y;return e=(0,p.vE)(e,"form-control"),y=u?{[`${e}-plaintext`]:!0}:{[e]:!0,[`${e}-${a}`]:a},(0,l.jsx)(f,{...g,type:t,size:r,ref:v,readOnly:h,id:i||x,className:n()(s,y,c&&"is-valid",d&&"is-invalid","color"===t&&`${e}-color`)})}));j.displayName="FormControl";var Z=Object.assign(j,{Feedback:u}),b=/-(.)/g;const _=e=>{return e[0].toUpperCase()+(t=e,t.replace(b,(function(e,t){return t.toUpperCase()}))).slice(1);var t};var w=function(e,{displayName:t=_(e),Component:a,defaultProps:r}={}){const i=o.forwardRef((({className:t,bsPrefix:r,as:i=a||"div",...s},o)=>{const c=(0,p.vE)(r,e);return(0,l.jsx)(i,{ref:o,className:n()(t,c),...s})}));return i.defaultProps=r,i.displayName=t,i}("form-floating");const k=o.forwardRef((({controlId:e,as:t="div",...a},r)=>{const n=(0,o.useMemo)((()=>({controlId:e})),[e]);return(0,l.jsx)(m.Provider,{value:n,children:(0,l.jsx)(t,{...a,ref:r})})}));k.displayName="FormGroup";var N=k,C=a(31555);const P=o.forwardRef((({as:e="label",bsPrefix:t,column:a,visuallyHidden:r,className:i,htmlFor:s,...c},d)=>{const{controlId:u}=(0,o.useContext)(m);t=(0,p.vE)(t,"form-label");let h="col-form-label";"string"===typeof a&&(h=`${h} ${h}-${a}`);const f=n()(i,t,r&&"visually-hidden",a&&h);return s=s||u,a?(0,l.jsx)(C.Z,{ref:d,as:"label",className:f,htmlFor:s,...c}):(0,l.jsx)(e,{ref:d,className:f,htmlFor:s,...c})}));P.displayName="FormLabel",P.defaultProps={column:!1,visuallyHidden:!1};var A=P;const S=o.forwardRef((({bsPrefix:e,className:t,id:a,...r},i)=>{const{controlId:s}=(0,o.useContext)(m);return e=(0,p.vE)(e,"form-range"),(0,l.jsx)("input",{...r,type:"range",ref:i,className:n()(t,e),id:a||s})}));S.displayName="FormRange";var F=S;const z=o.forwardRef((({bsPrefix:e,size:t,htmlSize:a,className:r,isValid:i=!1,isInvalid:s=!1,id:c,...d},u)=>{const{controlId:h}=(0,o.useContext)(m);return e=(0,p.vE)(e,"form-select"),(0,l.jsx)("select",{...d,size:a,ref:u,className:n()(r,e,t&&`${e}-${t}`,i&&"is-valid",s&&"is-invalid"),id:c||h})}));z.displayName="FormSelect";var R=z;const U=o.forwardRef((({bsPrefix:e,className:t,as:a="small",muted:r,...i},s)=>(e=(0,p.vE)(e,"form-text"),(0,l.jsx)(a,{...i,ref:s,className:n()(t,e,r&&"text-muted")}))));U.displayName="FormText";var I=U;const E=o.forwardRef(((e,t)=>(0,l.jsx)(y,{...e,ref:t,type:"switch"})));E.displayName="Switch";var T=Object.assign(E,{Input:y.Input,Label:y.Label});const B=o.forwardRef((({bsPrefix:e,className:t,children:a,controlId:r,label:i,...s},o)=>(e=(0,p.vE)(e,"form-floating"),(0,l.jsxs)(N,{ref:o,className:n()(t,e),controlId:r,...s,children:[a,(0,l.jsx)("label",{htmlFor:r,children:i})]}))));B.displayName="FloatingLabel";var L=B;const W={_ref:s().any,validated:s().bool,as:s().elementType},D=o.forwardRef((({className:e,validated:t,as:a="form",...r},i)=>(0,l.jsx)(a,{...r,ref:i,className:n()(e,t&&"was-validated")})));D.displayName="Form",D.propTypes=W;var V=Object.assign(D,{Group:N,Control:Z,Floating:w,Check:y,Switch:T,Label:A,Text:I,Range:F,Select:R,FloatingLabel:L})},42473:function(e){"use strict";var t=function(){};e.exports=t}},function(e){e.O(0,[834,936,836,981,816,243,487,22,964,925,774,888,179],(function(){return t=47638,e(e.s=t);var t}));var t=e.O();_N_E=t}]);