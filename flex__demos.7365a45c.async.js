"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[73304],{106750:function(te,x,e){e.d(x,{Z:function(){return M}});var I=e(97857),n=e.n(I),S=e(9783),d=e.n(S),y=e(805574),f=e.n(y),l=e(513769),u=e.n(l),P=e(667294),K=e(294184),$=e.n(K),F=e(518475),D=e(376148),T=e(73287),z=e(141035),j=e(986943),p=["wrap","nowrap","wrap-reverse"],X=["flex-start","flex-end","start","end","center","space-between","space-around","space-evenly","stretch","normal","left","right"],W=["center","start","end","flex-start","flex-end","self-start","self-end","baseline","normal","stretch"],J=function(r,a){var m={};return p.forEach(function(h){m["".concat(r,"-wrap-").concat(h)]=a.wrap===h}),m},le=function(r,a){var m={};return W.forEach(function(h){m["".concat(r,"-align-").concat(h)]=a.align===h}),m["".concat(r,"-align-stretch")]=!a.align&&!!a.vertical,m},ne=function(r,a){var m={};return X.forEach(function(h){m["".concat(r,"-justify-").concat(h)]=a.justify===h}),m};function re(i,r){return $()(n()(n()(n()({},J(i,r)),le(i,r)),ne(i,r)))}var c=re,o=function(r){var a=r.componentCls;return d()({},a,{display:"flex","&-vertical":{flexDirection:"column"},"&-rtl":{direction:"rtl"},"&:empty":{display:"none"}})},_=function(r){var a=r.componentCls;return d()({},a,{"&-gap-small":{gap:r.flexGapSM},"&-gap-middle":{gap:r.flexGap},"&-gap-large":{gap:r.flexGapLG}})},A=function(r){var a=r.componentCls,m={};return p.forEach(function(h){m["".concat(a,"-wrap-").concat(h)]={flexWrap:h}}),m},H=function(r){var a=r.componentCls,m={};return W.forEach(function(h){m["".concat(a,"-align-").concat(h)]={alignItems:h}}),m},R=function(r){var a=r.componentCls,m={};return X.forEach(function(h){m["".concat(a,"-justify-").concat(h)]={justifyContent:h}}),m},Q=(0,z.Z)("Flex",function(i){var r=(0,j.TS)(i,{flexGapSM:i.paddingXS,flexGap:i.padding,flexGapLG:i.paddingLG});return[o(r),_(r),A(r),H(r),R(r)]}),s=e(785893),t=["prefixCls","rootClassName","className","style","flex","gap","children","vertical","component"],g=P.forwardRef(function(i,r){var a,m=i.prefixCls,h=i.rootClassName,q=i.className,C=i.style,k=i.flex,B=i.gap,Y=i.children,E=i.vertical,V=E===void 0?!1:E,L=i.component,N=L===void 0?"div":L,ae=u()(i,t),w=P.useContext(T.E_),O=w.flex,Z=w.direction,U=w.getPrefixCls,v=U("flex",m),G=Q(v),b=f()(G,2),ee=b[0],ie=b[1],oe=V!=null?V:O==null?void 0:O.vertical,se=$()(q,h,O==null?void 0:O.className,v,ie,c(v,i),(a={},d()(a,"".concat(v,"-rtl"),Z==="rtl"),d()(a,"".concat(v,"-gap-").concat(B),(0,D.n)(B)),d()(a,"".concat(v,"-vertical"),oe),a)),de=n()(n()({},O==null?void 0:O.style),C);return k&&(de.flex=k),B&&!(0,D.n)(B)&&(de.gap=B),ee((0,s.jsx)(N,n()(n()({ref:r,className:se,style:de},(0,F.default)(ae,["justify","wrap","align"])),{},{children:Y})))}),M=g},260750:function(te,x,e){e.d(x,{Z:function(){return Q}});var I=e(9783),n=e.n(I),S=e(97857),d=e.n(S),y=e(805574),f=e.n(y),l=e(513769),u=e.n(l),P=e(952677),K=e.n(P),$=e(294184),F=e.n($),D=e(466940),T=e(667294),z=e(73287),j=e(947170),p=e(548073),X=e(141035),W=e(986943);function J(s,t){return n()({},"".concat(s,", ").concat(s,":hover, ").concat(s,":focus"),{color:t.colorTextDisabled,cursor:"not-allowed"})}function le(s){return{backgroundColor:s.itemSelectedBg,boxShadow:s.boxShadowTertiary}}var ne=d()({overflow:"hidden"},p.vS),re=function(t){var g,M,i,r,a=t.componentCls;return n()({},a,d()(d()(d()(d()({},(0,p.Wf)(t)),{},(r={display:"inline-block",padding:t.segmentedPadding,color:t.itemColor,backgroundColor:t.segmentedBgColor,borderRadius:t.borderRadius,transition:"all ".concat(t.motionDurationMid," ").concat(t.motionEaseInOut)},n()(r,"".concat(a,"-group"),{position:"relative",display:"flex",alignItems:"stretch",justifyItems:"flex-start",width:"100%"}),n()(r,"&".concat(a,"-rtl"),{direction:"rtl"}),n()(r,"&".concat(a,"-block"),{display:"flex"}),n()(r,"&".concat(a,"-block ").concat(a,"-item"),{flex:1,minWidth:0}),n()(r,"".concat(a,"-item"),(g={position:"relative",textAlign:"center",cursor:"pointer",transition:"color ".concat(t.motionDurationMid," ").concat(t.motionEaseInOut),borderRadius:t.borderRadiusSM,transform:"translateZ(0)","&-selected":d()(d()({},le(t)),{},{color:t.itemSelectedColor}),"&::after":{content:'""',position:"absolute",width:"100%",height:"100%",top:0,insetInlineStart:0,borderRadius:"inherit",transition:"background-color ".concat(t.motionDurationMid),pointerEvents:"none"}},n()(g,"&:hover:not(".concat(a,"-item-selected):not(").concat(a,"-item-disabled)"),{color:t.itemHoverColor,"&::after":{backgroundColor:t.itemHoverBg}}),n()(g,"&:active:not(".concat(a,"-item-selected):not(").concat(a,"-item-disabled)"),{color:t.itemHoverColor,"&::after":{backgroundColor:t.itemActiveBg}}),n()(g,"&-label",d()({minHeight:t.controlHeight-t.segmentedPadding*2,lineHeight:"".concat(t.controlHeight-t.segmentedPadding*2,"px"),padding:"0 ".concat(t.segmentedPaddingHorizontal,"px")},ne)),n()(g,"&-icon + *",{marginInlineStart:t.marginSM/2}),n()(g,"&-input",{position:"absolute",insetBlockStart:0,insetInlineStart:0,width:0,height:0,opacity:0,pointerEvents:"none"}),g)),n()(r,"".concat(a,"-thumb"),d()(d()({},le(t)),{},n()({position:"absolute",insetBlockStart:0,insetInlineStart:0,width:0,height:"100%",padding:"".concat(t.paddingXXS,"px 0"),borderRadius:t.borderRadiusSM},"& ~ ".concat(a,"-item:not(").concat(a,"-item-selected):not(").concat(a,"-item-disabled)::after"),{backgroundColor:"transparent"}))),n()(r,"&".concat(a,"-lg"),(M={borderRadius:t.borderRadiusLG},n()(M,"".concat(a,"-item-label"),{minHeight:t.controlHeightLG-t.segmentedPadding*2,lineHeight:"".concat(t.controlHeightLG-t.segmentedPadding*2,"px"),padding:"0 ".concat(t.segmentedPaddingHorizontal,"px"),fontSize:t.fontSizeLG}),n()(M,"".concat(a,"-item, ").concat(a,"-thumb"),{borderRadius:t.borderRadius}),M)),n()(r,"&".concat(a,"-sm"),(i={borderRadius:t.borderRadiusSM},n()(i,"".concat(a,"-item-label"),{minHeight:t.controlHeightSM-t.segmentedPadding*2,lineHeight:"".concat(t.controlHeightSM-t.segmentedPadding*2,"px"),padding:"0 ".concat(t.segmentedPaddingHorizontalSM,"px")}),n()(i,"".concat(a,"-item, ").concat(a,"-thumb"),{borderRadius:t.borderRadiusXS}),i)),r),J("&-disabled ".concat(a,"-item"),t)),J("".concat(a,"-item-disabled"),t)),{},n()({},"".concat(a,"-thumb-motion-appear-active"),{transition:"transform ".concat(t.motionDurationSlow," ").concat(t.motionEaseInOut,", width ").concat(t.motionDurationSlow," ").concat(t.motionEaseInOut),willChange:"transform, width"})))},c=(0,X.Z)("Segmented",function(s){var t=s.lineWidth,g=s.lineWidthBold,M=s.colorBgLayout,i=(0,W.TS)(s,{segmentedPadding:g,segmentedBgColor:M,segmentedPaddingHorizontal:s.controlPaddingHorizontal-t,segmentedPaddingHorizontalSM:s.controlPaddingHorizontalSM-t});return[re(i)]},function(s){var t=s.colorTextLabel,g=s.colorText,M=s.colorFillSecondary,i=s.colorBgElevated,r=s.colorFill;return{itemColor:t,itemHoverColor:g,itemHoverBg:M,itemSelectedBg:i,itemActiveBg:r,itemSelectedColor:g}}),o=e(785893),_=["prefixCls","className","rootClassName","block","options","size","style"],A=["icon","label"];function H(s){return K()(s)==="object"&&!!(s!=null&&s.icon)}var R=T.forwardRef(function(s,t){var g,M=s.prefixCls,i=s.className,r=s.rootClassName,a=s.block,m=s.options,h=m===void 0?[]:m,q=s.size,C=q===void 0?"middle":q,k=s.style,B=u()(s,_),Y=T.useContext(z.E_),E=Y.getPrefixCls,V=Y.direction,L=Y.segmented,N=E("segmented",M),ae=c(N),w=f()(ae,2),O=w[0],Z=w[1],U=(0,j.Z)(C),v=T.useMemo(function(){return h.map(function(ee){if(H(ee)){var ie=ee.icon,oe=ee.label,se=u()(ee,A);return d()(d()({},se),{},{label:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{className:"".concat(N,"-item-icon"),children:ie}),oe&&(0,o.jsx)("span",{children:oe})]})})}return ee})},[h,N]),G=F()(i,r,L==null?void 0:L.className,(g={},n()(g,"".concat(N,"-block"),a),n()(g,"".concat(N,"-sm"),U==="small"),n()(g,"".concat(N,"-lg"),U==="large"),g),Z),b=d()(d()({},L==null?void 0:L.style),k);return O((0,o.jsx)(D.Z,d()(d()({},B),{},{className:G,style:b,options:v,ref:t,prefixCls:N,direction:V})))}),Q=R},941162:function(te,x,e){e.r(x);var I=e(805574),n=e.n(I),S=e(667294),d=e(106750),y=e(260750),f=e(988872),l=e(785893),u={width:"100%",height:120,borderRadius:6,border:"1px solid #40a9ff"},P=["flex-start","center","flex-end","space-between","space-around","space-evenly"],K=["flex-start","center","flex-end"],$=function(){var D=S.useState(P[0]),T=n()(D,2),z=T[0],j=T[1],p=S.useState(K[0]),X=n()(p,2),W=X[0],J=X[1];return(0,l.jsxs)(d.Z,{gap:"middle",align:"start",vertical:!0,children:[(0,l.jsx)("p",{children:"Select justify :"}),(0,l.jsx)(y.Z,{options:P,onChange:j}),(0,l.jsx)("p",{children:"Select align :"}),(0,l.jsx)(y.Z,{options:K,onChange:J}),(0,l.jsxs)(d.Z,{style:u,justify:z,align:W,children:[(0,l.jsx)(f.ZP,{type:"primary",children:"Primary"}),(0,l.jsx)(f.ZP,{type:"primary",children:"Primary"}),(0,l.jsx)(f.ZP,{type:"primary",children:"Primary"}),(0,l.jsx)(f.ZP,{type:"primary",children:"Primary"})]})]})};x.default=$},225909:function(te,x,e){e.r(x);var I=e(97857),n=e.n(I),S=e(805574),d=e.n(S),y=e(667294),f=e(106750),l=e(371707),u=e(785893),P={width:"25%",height:54},K=function(){var F=y.useState("horizontal"),D=d()(F,2),T=D[0],z=D[1];return(0,u.jsxs)(f.Z,{gap:"middle",vertical:!0,children:[(0,u.jsxs)(l.ZP.Group,{value:T,onChange:function(p){return z(p.target.value)},children:[(0,u.jsx)(l.ZP,{value:"horizontal",children:"horizontal"}),(0,u.jsx)(l.ZP,{value:"vertical",children:"vertical"})]}),(0,u.jsx)(f.Z,{vertical:T==="vertical",children:Array.from({length:4}).map(function(j,p){return(0,u.jsx)("div",{style:n()(n()({},P),{},{backgroundColor:p%2?"#1677ff":"#1677ffbf"})},p)})})]})};x.default=K},193567:function(te,x,e){e.r(x);var I=e(667294),n=e(294047),S=e(106750),d=e(185209),y=e(988872),f=e(785893),l={width:620},u={display:"block",width:273},P=function(){return(0,f.jsx)(n.Z,{hoverable:!0,style:l,bodyStyle:{padding:0,overflow:"hidden"},children:(0,f.jsxs)(S.Z,{justify:"space-between",children:[(0,f.jsx)("img",{alt:"avatar",src:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",style:u}),(0,f.jsxs)(S.Z,{vertical:!0,align:"flex-end",justify:"space-between",style:{padding:32},children:[(0,f.jsx)(d.Z.Title,{level:3,children:"\u201Cantd is an enterprise-class UI design language and React UI library.\u201D"}),(0,f.jsx)(y.ZP,{type:"primary",href:"https://ant.design",target:"_blank",children:"Get Start"})]})]})})};x.default=P},480136:function(te,x,e){e.r(x);var I=e(667294),n=e(106750),S=e(785893),d=function(){return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(n.Z,{vertical:!0,children:Array.from({length:4}).map(function(f,l){return(0,S.jsx)("div",{style:{height:60,backgroundColor:l%2?"#1677ff":"#1677ffbf"}},l)})}),(0,S.jsx)(n.Z,{style:{marginTop:20},children:Array.from({length:4}).map(function(f,l){return(0,S.jsx)("div",{style:{width:"25%",height:l%2?60:40,backgroundColor:l%2?"#1677ff":"#1677ffbf"}},l)})})]})};x.default=d},900690:function(te,x,e){e.r(x);var I=e(805574),n=e.n(I),S=e(667294),d=e(106750),y=e(371707),f=e(329573),l=e(988872),u=e(785893),P=function(){var $=S.useState("small"),F=n()($,2),D=F[0],T=F[1],z=S.useState(0),j=n()(z,2),p=j[0],X=j[1];return(0,u.jsxs)(d.Z,{gap:"middle",vertical:!0,children:[(0,u.jsx)(y.ZP.Group,{value:D,onChange:function(J){return T(J.target.value)},children:["small","middle","large","customize"].map(function(W){return(0,u.jsx)(y.ZP,{value:W,children:W},W)})}),D==="customize"&&(0,u.jsx)(f.Z,{value:p,onChange:X}),(0,u.jsxs)(d.Z,{gap:D!=="customize"?D:p,children:[(0,u.jsx)(l.ZP,{type:"primary",children:"Primary"}),(0,u.jsx)(l.ZP,{children:"Default"}),(0,u.jsx)(l.ZP,{type:"dashed",children:"Dashed"}),(0,u.jsx)(l.ZP,{type:"link",children:"Link"})]})]})};x.default=P},78808:function(te,x,e){e.r(x);var I=e(667294),n=e(106750),S=e(988872),d=e(785893),y=function(){return(0,d.jsx)(n.Z,{wrap:"wrap",gap:"small",children:Array.from({length:24},function(l,u){return(0,d.jsx)(S.ZP,{type:"primary",children:"Button"},u)})})};x.default=y},466940:function(te,x,e){e.d(x,{Z:function(){return re}});var I=e(487462),n=e(297685),S=e(912402),d=e(204942),y=e(601413),f=e(671002),l=e(667294),u=e(294184),P=e.n(u),K=e(821770),$=e(242550),F=e(898423),D=e(82225),T=e(908410),z=function(o){return o?{left:o.offsetLeft,right:o.parentElement.clientWidth-o.clientWidth-o.offsetLeft,width:o.clientWidth}:null},j=function(o){return o!==void 0?"".concat(o,"px"):void 0};function p(c){var o=c.prefixCls,_=c.containerRef,A=c.value,H=c.getValueIndex,R=c.motionName,Q=c.onMotionStart,s=c.onMotionEnd,t=c.direction,g=l.useRef(null),M=l.useState(A),i=(0,n.Z)(M,2),r=i[0],a=i[1],m=function(U){var v,G=H(U),b=(v=_.current)===null||v===void 0?void 0:v.querySelectorAll(".".concat(o,"-item"))[G];return(b==null?void 0:b.offsetParent)&&b},h=l.useState(null),q=(0,n.Z)(h,2),C=q[0],k=q[1],B=l.useState(null),Y=(0,n.Z)(B,2),E=Y[0],V=Y[1];(0,T.Z)(function(){if(r!==A){var Z=m(r),U=m(A),v=z(Z),G=z(U);a(A),k(v),V(G),Z&&U?Q():s()}},[A]);var L=l.useMemo(function(){return j(t==="rtl"?-(C==null?void 0:C.right):C==null?void 0:C.left)},[t,C]),N=l.useMemo(function(){return j(t==="rtl"?-(E==null?void 0:E.right):E==null?void 0:E.left)},[t,E]),ae=function(){return{transform:"translateX(var(--thumb-start-left))",width:"var(--thumb-start-width)"}},w=function(){return{transform:"translateX(var(--thumb-active-left))",width:"var(--thumb-active-width)"}},O=function(){k(null),V(null),s()};return!C||!E?null:l.createElement(D.ZP,{visible:!0,motionName:R,motionAppear:!0,onAppearStart:ae,onAppearActive:w,onVisibleChanged:O},function(Z,U){var v=Z.className,G=Z.style,b=(0,y.Z)((0,y.Z)({},G),{},{"--thumb-start-left":L,"--thumb-start-width":j(C==null?void 0:C.width),"--thumb-active-left":N,"--thumb-active-width":j(E==null?void 0:E.width)}),ee={ref:(0,$.sQ)(g,U),style:b,className:P()("".concat(o,"-thumb"),v)};return l.createElement("div",ee)})}var X=["prefixCls","direction","options","disabled","defaultValue","value","onChange","className","motionName"];function W(c){if(typeof c.title!="undefined")return c.title;if((0,f.Z)(c.label)!=="object"){var o;return(o=c.label)===null||o===void 0?void 0:o.toString()}}function J(c){return c.map(function(o){if((0,f.Z)(o)==="object"&&o!==null){var _=W(o);return(0,y.Z)((0,y.Z)({},o),{},{title:_})}return{label:o==null?void 0:o.toString(),title:o==null?void 0:o.toString(),value:o}})}var le=function(o){var _=o.prefixCls,A=o.className,H=o.disabled,R=o.checked,Q=o.label,s=o.title,t=o.value,g=o.onChange,M=function(r){H||g(r,t)};return l.createElement("label",{className:P()(A,(0,d.Z)({},"".concat(_,"-item-disabled"),H))},l.createElement("input",{className:"".concat(_,"-item-input"),type:"radio",disabled:H,checked:R,onChange:M}),l.createElement("div",{className:"".concat(_,"-item-label"),title:s},Q))},ne=l.forwardRef(function(c,o){var _,A,H=c.prefixCls,R=H===void 0?"rc-segmented":H,Q=c.direction,s=c.options,t=c.disabled,g=c.defaultValue,M=c.value,i=c.onChange,r=c.className,a=r===void 0?"":r,m=c.motionName,h=m===void 0?"thumb-motion":m,q=(0,S.Z)(c,X),C=l.useRef(null),k=l.useMemo(function(){return(0,$.sQ)(C,o)},[C,o]),B=l.useMemo(function(){return J(s)},[s]),Y=(0,K.default)((_=B[0])===null||_===void 0?void 0:_.value,{value:M,defaultValue:g}),E=(0,n.Z)(Y,2),V=E[0],L=E[1],N=l.useState(!1),ae=(0,n.Z)(N,2),w=ae[0],O=ae[1],Z=function(G,b){t||(L(b),i==null||i(b))},U=(0,F.Z)(q,["children"]);return l.createElement("div",(0,I.Z)({},U,{className:P()(R,(A={},(0,d.Z)(A,"".concat(R,"-rtl"),Q==="rtl"),(0,d.Z)(A,"".concat(R,"-disabled"),t),A),a),ref:k}),l.createElement("div",{className:"".concat(R,"-group")},l.createElement(p,{prefixCls:R,value:V,containerRef:C,motionName:"".concat(R,"-").concat(h),direction:Q,getValueIndex:function(G){return B.findIndex(function(b){return b.value===G})},onMotionStart:function(){O(!0)},onMotionEnd:function(){O(!1)}}),B.map(function(v){return l.createElement(le,(0,I.Z)({},v,{key:v.value,prefixCls:R,className:P()(v.className,"".concat(R,"-item"),(0,d.Z)({},"".concat(R,"-item-selected"),v.value===V&&!w)),checked:v.value===V,onChange:Z,disabled:!!t||!!v.disabled}))})))});ne.displayName="Segmented",ne.defaultProps={options:[]};var re=ne}}]);
