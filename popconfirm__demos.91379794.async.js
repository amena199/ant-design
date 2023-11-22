"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[98312],{455759:function(H,v,n){n.d(v,{Z:function(){return x}});var j=n(97857),s=n.n(j),l=n(805574),e=n.n(l),o=n(513769),u=n.n(o),m=n(667294),E=n(642461),D=n.n(E),B=n(294184),U=n.n(B),p=n(260869),F=n(427712),L=n(518475),$=n(106465),I=n(73287),Y=n(344682),V=n(218283),X=n(586775),Z=n(988872),q=n(196179),nn=n(824504),w=n(667128),K=n(974638),en=n(9783),_=n.n(en),rn=n(141035),sn=function(a){var r,h,P=a.componentCls,A=a.iconCls,f=a.antCls,M=a.zIndexPopup,O=a.colorText,T=a.colorWarning,Q=a.marginXXS,N=a.marginXS,W=a.fontSize,z=a.fontWeightStrong,tn=a.colorTextHeading;return _()({},P,(h={zIndex:M},_()(h,"&".concat(f,"-popover"),{fontSize:W}),_()(h,"".concat(P,"-message"),(r={marginBottom:N,display:"flex",flexWrap:"nowrap",alignItems:"start"},_()(r,"> ".concat(P,"-message-icon ").concat(A),{color:T,fontSize:W,lineHeight:1,marginInlineEnd:N}),_()(r,"".concat(P,"-title"),{fontWeight:z,color:tn,"&:only-child":{fontWeight:"normal"}}),_()(r,"".concat(P,"-description"),{marginTop:Q,color:O}),r)),_()(h,"".concat(P,"-buttons"),{textAlign:"end",whiteSpace:"nowrap",button:{marginInlineStart:N}}),h))},b=(0,rn.Z)("Popconfirm",function(i){return sn(i)},function(i){var a=i.zIndexPopupBase;return{zIndexPopup:a+60}},{resetStyle:!1}),S=n(785893),cn=["prefixCls","placement","className","style"],G=function(a){var r=a.prefixCls,h=a.okButtonProps,P=a.cancelButtonProps,A=a.title,f=a.description,M=a.cancelText,O=a.okText,T=a.okType,Q=T===void 0?"primary":T,N=a.icon,W=N===void 0?(0,S.jsx)(D(),{}):N,z=a.showCancel,tn=z===void 0?!0:z,J=a.close,an=a.onConfirm,dn=a.onCancel,hn=a.onPopupClick,un=m.useContext(I.E_),vn=un.getPrefixCls,mn=(0,nn.Z)("Popconfirm",w.Z.Popconfirm),gn=e()(mn,1),k=gn[0],on=(0,X.Z)(A),fn=(0,X.Z)(f);return(0,S.jsxs)("div",{className:"".concat(r,"-inner-content"),onClick:hn,children:[(0,S.jsxs)("div",{className:"".concat(r,"-message"),children:[W&&(0,S.jsx)("span",{className:"".concat(r,"-message-icon"),children:W}),(0,S.jsxs)("div",{className:"".concat(r,"-message-text"),children:[on&&(0,S.jsx)("div",{className:U()("".concat(r,"-title")),children:on}),fn&&(0,S.jsx)("div",{className:"".concat(r,"-description"),children:fn})]})]}),(0,S.jsxs)("div",{className:"".concat(r,"-buttons"),children:[tn&&(0,S.jsx)(Z.ZP,s()(s()({onClick:dn,size:"small"},P),{},{children:M!=null?M:k==null?void 0:k.cancelText})),(0,S.jsx)(V.Z,{buttonProps:s()(s()({size:"small"},(0,q.nx)(Q)),h),actionFn:an,close:J,prefixCls:vn("btn"),quitOnNullishReturnValue:!0,emitEvent:!0,children:O!=null?O:k==null?void 0:k.okText})]})]})},C=function(a){var r=a.prefixCls,h=a.placement,P=a.className,A=a.style,f=u()(a,cn),M=m.useContext(I.E_),O=M.getPrefixCls,T=O("popconfirm",r),Q=b(T),N=e()(Q,1),W=N[0];return W((0,S.jsx)(K.ZP,{placement:h,className:U()(T,P),style:A,content:(0,S.jsx)(G,s()({prefixCls:T},f))}))},t=C,d=["prefixCls","placement","trigger","okType","icon","children","overlayClassName","onOpenChange","onVisibleChange"],c=void 0,g=m.forwardRef(function(i,a){var r,h,P=i.prefixCls,A=i.placement,f=A===void 0?"top":A,M=i.trigger,O=M===void 0?"click":M,T=i.okType,Q=T===void 0?"primary":T,N=i.icon,W=N===void 0?(0,S.jsx)(D(),{}):N,z=i.children,tn=i.overlayClassName,J=i.onOpenChange,an=i.onVisibleChange,dn=u()(i,d),hn=m.useContext(I.E_),un=hn.getPrefixCls,vn=(0,p.default)(!1,{value:(r=i.open)!==null&&r!==void 0?r:i.visible,defaultValue:(h=i.defaultOpen)!==null&&h!==void 0?h:i.defaultVisible}),mn=e()(vn,2),gn=mn[0],k=mn[1],on=function(y,R){k(y,!0),an==null||an(y),J==null||J(y,R)},fn=function(y){on(!1,y)},Pn=function(y){var R;return(R=i.onConfirm)===null||R===void 0?void 0:R.call(c,y)},En=function(y){var R;on(!1,y),(R=i.onCancel)===null||R===void 0||R.call(c,y)},pn=function(y){y.keyCode===F.Z.ESC&&gn&&on(!1,y)},Sn=function(y){var R=i.disabled,Cn=R===void 0?!1:R;Cn||on(y)},xn=un("popconfirm",P),Mn=U()(xn,tn),Dn=b(xn),On=e()(Dn,1),In=On[0];return In((0,S.jsx)(Y.Z,s()(s()({},(0,L.default)(dn,["title"])),{},{trigger:O,placement:f,onOpenChange:Sn,open:gn,ref:a,overlayClassName:Mn,content:(0,S.jsx)(G,s()(s()({okType:Q,icon:W},i),{},{prefixCls:xn,close:fn,onConfirm:Pn,onCancel:En})),"data-popover-inject":!0,children:(0,$.Tm)(z,{onKeyDown:function(y){if(m.isValidElement(z)){var R,Cn;z==null||(R=(Cn=z.props).onKeyDown)===null||R===void 0||R.call(Cn,y)}pn(y)}})})))});g._InternalPanelDoNotUseOrYouWillBeFired=t;var x=g},979331:function(H,v,n){n.d(v,{Z:function(){return G}});var j=n(97857),s=n.n(j),l=n(9783),e=n.n(l),o=n(805574),u=n.n(o),m=n(513769),E=n.n(m),D=n(667294),B=n(100628),U=n.n(B),p=n(294184),F=n.n(p),L=n(33413),$=n(189265),I=n(73287),Y=n(147315),V=n(947170),X=n(510274),Z=n(548073),q=n(141035),nn=n(986943),w=function(t){var d,c,g,x,i,a=t.componentCls,r=t.trackHeightSM,h=t.trackPadding,P=t.trackMinWidthSM,A=t.innerMinMarginSM,f=t.innerMaxMarginSM,M=t.handleSizeSM,O="".concat(a,"-inner");return e()({},a,e()({},"&".concat(a,"-small"),(i={minWidth:P,height:r,lineHeight:"".concat(r,"px")},e()(i,"".concat(a,"-inner"),(d={paddingInlineStart:f,paddingInlineEnd:A},e()(d,"".concat(O,"-checked"),{marginInlineStart:"calc(-100% + ".concat(M+h*2,"px - ").concat(f*2,"px)"),marginInlineEnd:"calc(100% - ".concat(M+h*2,"px + ").concat(f*2,"px)")}),e()(d,"".concat(O,"-unchecked"),{marginTop:-r,marginInlineStart:0,marginInlineEnd:0}),d)),e()(i,"".concat(a,"-handle"),{width:M,height:M}),e()(i,"".concat(a,"-loading-icon"),{top:(M-t.switchLoadingIconSize)/2,fontSize:t.switchLoadingIconSize}),e()(i,"&".concat(a,"-checked"),(g={},e()(g,"".concat(a,"-inner"),(c={paddingInlineStart:A,paddingInlineEnd:f},e()(c,"".concat(O,"-checked"),{marginInlineStart:0,marginInlineEnd:0}),e()(c,"".concat(O,"-unchecked"),{marginInlineStart:"calc(100% - ".concat(M+h*2,"px + ").concat(f*2,"px)"),marginInlineEnd:"calc(-100% + ".concat(M+h*2,"px - ").concat(f*2,"px)")}),c)),e()(g,"".concat(a,"-handle"),{insetInlineStart:"calc(100% - ".concat(M+h,"px)")}),g)),e()(i,"&:not(".concat(a,"-disabled):active"),(x={},e()(x,"&:not(".concat(a,"-checked) ").concat(O),e()({},"".concat(O,"-unchecked"),{marginInlineStart:t.marginXXS/2,marginInlineEnd:-t.marginXXS/2})),e()(x,"&".concat(a,"-checked ").concat(O),e()({},"".concat(O,"-checked"),{marginInlineStart:-t.marginXXS/2,marginInlineEnd:t.marginXXS/2})),x)),i)))},K=function(t){var d,c=t.componentCls,g=t.handleSize;return e()({},c,(d={},e()(d,"".concat(c,"-loading-icon").concat(t.iconCls),{position:"relative",top:(g-t.fontSize)/2,color:t.switchLoadingIconColor,verticalAlign:"top"}),e()(d,"&".concat(c,"-checked ").concat(c,"-loading-icon"),{color:t.switchColor}),d))},en=function(t){var d,c,g=t.componentCls,x=t.motion,i=t.trackPadding,a=t.handleBg,r=t.handleShadow,h=t.handleSize,P="".concat(g,"-handle");return e()({},g,(c={},e()(c,P,{position:"absolute",top:i,insetInlineStart:i,width:h,height:h,transition:"all ".concat(t.switchDuration," ease-in-out"),"&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:a,borderRadius:h/2,boxShadow:r,transition:"all ".concat(t.switchDuration," ease-in-out"),content:'""'}}),e()(c,"&".concat(g,"-checked ").concat(P),{insetInlineStart:"calc(100% - ".concat(h+i,"px)")}),e()(c,"&:not(".concat(g,"-disabled):active"),x?(d={},e()(d,"".concat(P,"::before"),{insetInlineEnd:t.switchHandleActiveInset,insetInlineStart:0}),e()(d,"&".concat(g,"-checked ").concat(P,"::before"),{insetInlineEnd:0,insetInlineStart:t.switchHandleActiveInset}),d):{}),c))},_=function(t){var d,c,g,x,i=t.componentCls,a=t.trackHeight,r=t.trackPadding,h=t.innerMinMargin,P=t.innerMaxMargin,A=t.handleSize,f="".concat(i,"-inner");return e()({},i,(x={},e()(x,f,(d={display:"block",overflow:"hidden",borderRadius:100,height:"100%",paddingInlineStart:P,paddingInlineEnd:h,transition:"padding-inline-start ".concat(t.switchDuration," ease-in-out, padding-inline-end ").concat(t.switchDuration," ease-in-out")},e()(d,"".concat(f,"-checked, ").concat(f,"-unchecked"),{display:"block",color:t.colorTextLightSolid,fontSize:t.fontSizeSM,transition:"margin-inline-start ".concat(t.switchDuration," ease-in-out, margin-inline-end ").concat(t.switchDuration," ease-in-out"),pointerEvents:"none"}),e()(d,"".concat(f,"-checked"),{marginInlineStart:"calc(-100% + ".concat(A+r*2,"px - ").concat(P*2,"px)"),marginInlineEnd:"calc(100% - ".concat(A+r*2,"px + ").concat(P*2,"px)")}),e()(d,"".concat(f,"-unchecked"),{marginTop:-a,marginInlineStart:0,marginInlineEnd:0}),d)),e()(x,"&".concat(i,"-checked ").concat(f),(c={paddingInlineStart:h,paddingInlineEnd:P},e()(c,"".concat(f,"-checked"),{marginInlineStart:0,marginInlineEnd:0}),e()(c,"".concat(f,"-unchecked"),{marginInlineStart:"calc(100% - ".concat(A+r*2,"px + ").concat(P*2,"px)"),marginInlineEnd:"calc(-100% + ".concat(A+r*2,"px - ").concat(P*2,"px)")}),c)),e()(x,"&:not(".concat(i,"-disabled):active"),(g={},e()(g,"&:not(".concat(i,"-checked) ").concat(f),e()({},"".concat(f,"-unchecked"),{marginInlineStart:r*2,marginInlineEnd:-r*2})),e()(g,"&".concat(i,"-checked ").concat(f),e()({},"".concat(f,"-checked"),{marginInlineStart:-r*2,marginInlineEnd:r*2})),g)),x))},rn=function(t){var d,c=t.componentCls,g=t.trackHeight,x=t.trackMinWidth;return e()({},c,s()(s()(s()({},(0,Z.Wf)(t)),{},e()({position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:x,height:g,lineHeight:"".concat(g,"px"),verticalAlign:"middle",background:t.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:"all ".concat(t.motionDurationMid),userSelect:"none"},"&:hover:not(".concat(c,"-disabled)"),{background:t.colorTextTertiary}),(0,Z.Qy)(t)),{},(d={},e()(d,"&".concat(c,"-checked"),e()({background:t.switchColor},"&:hover:not(".concat(c,"-disabled)"),{background:t.colorPrimaryHover})),e()(d,"&".concat(c,"-loading, &").concat(c,"-disabled"),{cursor:"not-allowed",opacity:t.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}}),e()(d,"&".concat(c,"-rtl"),{direction:"rtl"}),d)))},sn=(0,q.Z)("Switch",function(C){var t=(0,nn.TS)(C,{switchDuration:C.motionDurationMid,switchColor:C.colorPrimary,switchDisabledOpacity:C.opacityLoading,switchLoadingIconSize:C.fontSizeIcon*.75,switchLoadingIconColor:"rgba(0, 0, 0, ".concat(C.opacityLoading,")"),switchHandleActiveInset:"-30%"});return[rn(t),_(t),en(t),K(t),w(t)]},function(C){var t=C.fontSize,d=C.lineHeight,c=C.controlHeight,g=C.colorWhite,x=t*d,i=c/2,a=2,r=x-a*2,h=i-a*2;return{trackHeight:x,trackHeightSM:i,trackMinWidth:r*2+a*4,trackMinWidthSM:h*2+a*2,trackPadding:a,handleBg:g,handleSize:r,handleSizeSM:h,handleShadow:"0 2px 4px 0 ".concat(new X.C("#00230b").setAlpha(.2).toRgbString()),innerMinMargin:r/2,innerMaxMargin:r+a+a*2,innerMinMarginSM:h/2,innerMaxMarginSM:h+a+a*2}}),b=n(785893),S=["prefixCls","size","disabled","loading","className","rootClassName","style"],cn=D.forwardRef(function(C,t){var d,c=C.prefixCls,g=C.size,x=C.disabled,i=C.loading,a=C.className,r=C.rootClassName,h=C.style,P=E()(C,S);if(!1)var A;var f=D.useContext(I.E_),M=f.getPrefixCls,O=f.direction,T=f.switch,Q=D.useContext(Y.Z),N=(x!=null?x:Q)||i,W=M("switch",c),z=(0,b.jsx)("div",{className:"".concat(W,"-handle"),children:i&&(0,b.jsx)(U(),{className:"".concat(W,"-loading-icon")})}),tn=sn(W),J=u()(tn,2),an=J[0],dn=J[1],hn=(0,V.Z)(g),un=F()(T==null?void 0:T.className,(d={},e()(d,"".concat(W,"-small"),hn==="small"),e()(d,"".concat(W,"-loading"),i),e()(d,"".concat(W,"-rtl"),O==="rtl"),d),a,r,dn),vn=s()(s()({},T==null?void 0:T.style),h);return an((0,b.jsx)($.Z,{component:"Switch",children:(0,b.jsx)(L.Z,s()(s()({},P),{},{prefixCls:W,className:un,style:vn,disabled:N,ref:t,loadingIcon:z}))}))});cn.__ANT_SWITCH=!0;var G=cn},609957:function(H,v,n){n.r(v);var j=n(805574),s=n.n(j),l=n(667294),e=n(455759),o=n(988872),u=n(785893),m=function(){var D=(0,l.useState)(!1),B=s()(D,2),U=B[0],p=B[1],F=(0,l.useState)(!1),L=s()(F,2),$=L[0],I=L[1],Y=function(){p(!0)},V=function(){I(!0),setTimeout(function(){p(!1),I(!1)},2e3)},X=function(){console.log("Clicked cancel button"),p(!1)};return(0,u.jsx)(e.Z,{title:"Title",description:"Open Popconfirm with async logic",open:U,onConfirm:V,okButtonProps:{loading:$},onCancel:X,children:(0,u.jsx)(o.ZP,{type:"primary",onClick:Y,children:"Open Popconfirm with async logic"})})};v.default=m},935253:function(H,v,n){n.r(v);var j=n(667294),s=n(373656),l=n(455759),e=n(988872),o=n(785893),u=function(B){console.log(B),s.ZP.success("Click on Yes")},m=function(B){console.log(B),s.ZP.error("Click on No")},E=function(){return(0,o.jsx)(l.Z,{title:"Delete the task",description:"Are you sure to delete this task?",onConfirm:u,onCancel:m,okText:"Yes",cancelText:"No",children:(0,o.jsx)(e.ZP,{danger:!0,children:"Delete"})})};v.default=E},667485:function(H,v,n){n.r(v);var j=n(805574),s=n.n(j),l=n(667294),e=n(373656),o=n(455759),u=n(988872),m=n(979331),E=n(785893),D=function(){var U=(0,l.useState)(!1),p=s()(U,2),F=p[0],L=p[1],$=(0,l.useState)(!0),I=s()($,2),Y=I[0],V=I[1],X=function(K){V(K)},Z=function(){L(!1),e.ZP.success("Next step.")},q=function(){L(!1),e.ZP.error("Click on cancel.")},nn=function(K){if(!K){L(K);return}console.log(Y),Y?Z():L(K)};return(0,E.jsxs)("div",{children:[(0,E.jsx)(o.Z,{title:"Delete the task",description:"Are you sure to delete this task?",open:F,onOpenChange:nn,onConfirm:Z,onCancel:q,okText:"Yes",cancelText:"No",children:(0,E.jsx)(u.ZP,{danger:!0,children:"Delete a task"})}),(0,E.jsx)("br",{}),(0,E.jsx)("br",{}),"Whether directly execute\uFF1A",(0,E.jsx)(m.Z,{defaultChecked:!0,onChange:X})]})};v.default=D},148091:function(H,v,n){n.r(v);var j=n(825035),s=n(667294),l=n(455759),e=n(988872),o=n(785893),u=function(){return(0,o.jsx)(l.Z,{title:"Delete the task",description:"Are you sure to delete this task?",icon:(0,o.jsx)(j.Z,{style:{color:"red"}}),children:(0,o.jsx)(e.ZP,{danger:!0,children:"Delete"})})};v.default=u},570910:function(H,v,n){n.r(v);var j=n(667294),s=n(455759),l=n(988872),e=n(785893),o=function(){return(0,e.jsx)(s.Z,{title:"Delete the task",description:"Are you sure to delete this task?",okText:"Yes",cancelText:"No",children:(0,e.jsx)(l.ZP,{danger:!0,children:"Delete"})})};v.default=o},971797:function(H,v,n){n.r(v);var j=n(667294),s=n(773036),l=n(455759),e=n(988872),o=n(785893),u="Are you sure to delete this task?",m="Delete the task",E=80,D=function(){return(0,o.jsx)(s.ZP,{button:{style:{width:E,margin:4}},children:(0,o.jsxs)("div",{className:"demo",children:[(0,o.jsxs)("div",{style:{marginInlineStart:E,whiteSpace:"nowrap"},children:[(0,o.jsx)(l.Z,{placement:"topLeft",title:u,description:m,okText:"Yes",cancelText:"No",children:(0,o.jsx)(e.ZP,{children:"TL"})}),(0,o.jsx)(l.Z,{placement:"top",title:u,description:m,okText:"Yes",cancelText:"No",children:(0,o.jsx)(e.ZP,{children:"Top"})}),(0,o.jsx)(l.Z,{placement:"topRight",title:u,description:m,okText:"Yes",cancelText:"No",children:(0,o.jsx)(e.ZP,{children:"TR"})})]}),(0,o.jsxs)("div",{style:{width:E,float:"inline-start"},children:[(0,o.jsx)(l.Z,{placement:"leftTop",title:u,description:m,okText:"Yes",cancelText:"No",children:(0,o.jsx)(e.ZP,{children:"LT"})}),(0,o.jsx)(l.Z,{placement:"left",title:u,description:m,okText:"Yes",cancelText:"No",children:(0,o.jsx)(e.ZP,{children:"Left"})}),(0,o.jsx)(l.Z,{placement:"leftBottom",title:u,description:m,okText:"Yes",cancelText:"No",children:(0,o.jsx)(e.ZP,{children:"LB"})})]}),(0,o.jsxs)("div",{style:{width:E,marginInlineStart:E*4+24},children:[(0,o.jsx)(l.Z,{placement:"rightTop",title:u,description:m,okText:"Yes",cancelText:"No",children:(0,o.jsx)(e.ZP,{children:"RT"})}),(0,o.jsx)(l.Z,{placement:"right",title:u,description:m,okText:"Yes",cancelText:"No",children:(0,o.jsx)(e.ZP,{children:"Right"})}),(0,o.jsx)(l.Z,{placement:"rightBottom",title:u,description:m,okText:"Yes",cancelText:"No",children:(0,o.jsx)(e.ZP,{children:"RB"})})]}),(0,o.jsxs)("div",{style:{marginInlineStart:E,clear:"both",whiteSpace:"nowrap"},children:[(0,o.jsx)(l.Z,{placement:"bottomLeft",title:u,description:m,okText:"Yes",cancelText:"No",children:(0,o.jsx)(e.ZP,{children:"BL"})}),(0,o.jsx)(l.Z,{placement:"bottom",title:u,description:m,okText:"Yes",cancelText:"No",children:(0,o.jsx)(e.ZP,{children:"Bottom"})}),(0,o.jsx)(l.Z,{placement:"bottomRight",title:u,description:m,okText:"Yes",cancelText:"No",children:(0,o.jsx)(e.ZP,{children:"BR"})})]})]})})};v.default=D},693541:function(H,v,n){n.r(v);var j=n(667294),s=n(455759),l=n(988872),e=n(785893),o=function(){var m=function(){return new Promise(function(D){setTimeout(function(){return D(null)},3e3)})};return(0,e.jsx)(s.Z,{title:"Title",description:"Open Popconfirm with Promise",onConfirm:m,onOpenChange:function(){return console.log("open change")},children:(0,e.jsx)(l.ZP,{type:"primary",children:"Open Popconfirm with Promise"})})};v.default=o},715165:function(H,v,n){n.r(v);var j=n(667294),s=n(455759),l=n(785893),e=s.Z._InternalPanelDoNotUseOrYouWillBeFired,o=function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e,{title:"Are you OK?",description:"Does this look good?"}),(0,l.jsx)(e,{title:"Are you OK?",description:"Does this look good?",placement:"bottomRight",style:{width:250}}),(0,l.jsx)(e,{icon:null,title:"Are you OK?"}),(0,l.jsx)(e,{icon:null,title:"Are you OK?",description:"Does this look good?"})]})};v.default=o},751273:function(H,v,n){n.r(v);var j=n(667294),s=n(455759),l=n(773036),e=n(785893),o=s.Z._InternalPanelDoNotUseOrYouWillBeFired,u=function(){return(0,e.jsxs)(l.ZP,{theme:{token:{wireframe:!0}},children:[(0,e.jsx)(o,{title:"Are you OK?"}),(0,e.jsx)(o,{title:"Are you OK?",placement:"bottomRight",style:{width:250}})]})};v.default=u},33413:function(H,v,n){var j=n(487462),s=n(204942),l=n(297685),e=n(912402),o=n(667294),u=n(294184),m=n.n(u),E=n(821770),D=n(915105),B=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"],U=o.forwardRef(function(p,F){var L,$=p.prefixCls,I=$===void 0?"rc-switch":$,Y=p.className,V=p.checked,X=p.defaultChecked,Z=p.disabled,q=p.loadingIcon,nn=p.checkedChildren,w=p.unCheckedChildren,K=p.onClick,en=p.onChange,_=p.onKeyDown,rn=(0,e.Z)(p,B),sn=(0,E.default)(!1,{value:V,defaultValue:X}),b=(0,l.Z)(sn,2),S=b[0],cn=b[1];function G(c,g){var x=S;return Z||(x=c,cn(x),en==null||en(x,g)),x}function C(c){c.which===D.Z.LEFT?G(!1,c):c.which===D.Z.RIGHT&&G(!0,c),_==null||_(c)}function t(c){var g=G(!S,c);K==null||K(g,c)}var d=m()(I,Y,(L={},(0,s.Z)(L,"".concat(I,"-checked"),S),(0,s.Z)(L,"".concat(I,"-disabled"),Z),L));return o.createElement("button",(0,j.Z)({},rn,{type:"button",role:"switch","aria-checked":S,disabled:Z,className:d,ref:F,onKeyDown:C,onClick:t}),q,o.createElement("span",{className:"".concat(I,"-inner")},o.createElement("span",{className:"".concat(I,"-inner-checked")},nn),o.createElement("span",{className:"".concat(I,"-inner-unchecked")},w)))});U.displayName="Switch",v.Z=U}}]);
