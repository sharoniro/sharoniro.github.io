(this.webpackJsonpsignature=this.webpackJsonpsignature||[]).push([[0],{12:function(e,t,n){},32:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(4),o=n.n(s),i=(n(32),n.p+"static/media/logo.6ce24c58.svg"),l=(n(12),n(10)),r=n.p+"static/media/\uc9c0\uc6d0\uae08.586ebc74.PNG",d=n(1),j=function(e){var t=Object(a.useState)(!1),n=Object(l.a)(t,2);n[0],n[1];console.log(e.inputs.month);var c,s,o,i,j,u,b,h=Object(a.useRef)(),x=Object(a.useRef)(),p=Object(a.useRef)();return Object(a.useEffect)((function(){c=h.current,s=x.current,i=c.getContext("2d"),j=s.getContext("2d"),(b=new Image).onload=function(){i.drawImage(b,0,0)},b.src=r}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{style:{position:"relative",width:"1039px",height:"990px"},children:[Object(d.jsx)("canvas",{id:"canvasTop",ref:h,width:1039,height:990}),Object(d.jsx)("canvas",{id:"canvasBottom",ref:x,width:1039,height:990}),Object(d.jsx)("canvas",{style:{display:"none"},id:"canvasSubmit",ref:p,width:1039,height:990})]}),Object(d.jsx)("button",{onClick:function(){console.log("draw"),s=x.current,(j=s.getContext("2d")).clearRect(0,0,1039,990),j.font="30px serif",j.font="50px serif",j.fillText(e.inputs.attendMonth,560,40),j.font="30px serif",j.fillText(e.inputs.location,230,183),j.fillText(e.inputs.classNum,480,183),j.fillText(e.inputs.name,840,190),j.font="bold  40px serif",j.fillText(e.inputs.name,210,330),j.font="30px serif",j.fillText(e.inputs.attendMonth,395,333),j.font="27px serif",j.fillText(e.inputs.totalDays,590,330),j.fillText(e.inputs.attendDays,900,330),j.fillText(e.inputs.month,840,765),j.fillText(e.inputs.date,920,765),j.fillText(e.inputs.name,740,890),j.font="italic 30px serif",j.fillText(e.inputs.name,900,890)},children:"draw"}),Object(d.jsx)("button",{onClick:function(){c=h.current,s=x.current,o=p.current,i=c.getContext("2d"),j=s.getContext("2d"),u=o.getContext("2d"),console.log(c),u.drawImage(c,0,0),u.drawImage(s,0,0),console.log(u);var e=document.createElement("a");e.download="sign.png",e.href=o.toDataURL(),document.body.appendChild(e),e.click(),document.body.removeChild(e)},children:"download"})]})},u=n(8),b=n(13),h=n(57),x=function(e){var t=function(t){var n=t.target,a=n.value,c=n.name;e.setInputs(Object(b.a)(Object(b.a)({},e.inputs),{},Object(u.a)({},c,a)))};return Object(d.jsxs)("div",{children:["\uc774\ub984 : ",Object(d.jsx)(h.a,{name:"name",onChange:t,placeholder:"\uc774\ub984"})," ",Object(d.jsx)("br",{}),"\ucd1d \uc218\uc5c5\uc77c : ",Object(d.jsx)(h.a,{name:"totalDays",onChange:t,placeholder:"\ucd1d \uc218\uc5c5\uc77c"})," ",Object(d.jsx)("br",{}),"\ucd1d \ucd9c\uc11d\uc77c : ",Object(d.jsx)(h.a,{name:"attendDays",onChange:t,placeholder:"\ucd9c\uc11d\uc77c"})," ",Object(d.jsx)("br",{}),"\uba87\uc6d4 \uad50\uc721 \uc9c0\uc6d0\uae08? ",Object(d.jsx)(h.a,{name:"attendMonth",onChange:t,placeholder:"\ub2ec",defaultValue:e.inputs.attendMonth})," ",Object(d.jsx)("br",{}),"\uc9c0\uc5ed : ",Object(d.jsx)(h.a,{name:"location",onChange:t,placeholder:"\uc9c0\uc5ed"})," ",Object(d.jsx)("br",{}),"\ubc18 : ",Object(d.jsx)(h.a,{name:"classNum",onChange:t,placeholder:"\ubc18"})," ",Object(d.jsx)("br",{}),"\uba87\uc6d4 : ",Object(d.jsx)(h.a,{name:"month",onChange:t,placeholder:"\uba87\uc6d4",defaultValue:e.inputs.month})," ",Object(d.jsx)("br",{}),"\uba87\uc77c : ",Object(d.jsx)(h.a,{name:"date",onChange:t,placeholder:"\uba87\uc77c",defaultValue:e.inputs.date})," ",Object(d.jsx)("br",{})]})},p=function(){var e=new Date,t=Object(a.useState)({name:"",month:e.getMonth()+1,date:e.getDate(),attendMonth:e.getMonth(),totalDays:0,attendDays:0,location:"",classNum:0}),n=Object(l.a)(t,2),c=n[0],s=n[1];return console.log(c),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:Object(d.jsx)(j,{inputs:c})}),Object(d.jsx)(x,{inputs:c,setInputs:s})]})};var f=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("header",{className:"App-header",children:[Object(d.jsx)("img",{src:i,className:"App-logo",alt:"logo",height:"100px",width:"100px"}),Object(d.jsx)(p,{})]})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,58)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),s(e),o(e)}))};n(40);o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),g()}},[[41,1,2]]]);
//# sourceMappingURL=main.daef24b4.chunk.js.map