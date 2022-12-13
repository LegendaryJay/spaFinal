import{u as A,c as M,a as V,h as O,Q as U,g as $}from"./QBtn.1e42a5f4.js";import{u as Q,Q as F}from"./timer.ac91678f.js";import{Q as W}from"./QPage.a33876ab.js";import{b as E}from"./format.e3cb4f10.js";import{c as u,h as k,g as G,w as J,r as y,x as B,F as R,A as _,z as q,I as T,D as H,L as S,y as L,B as K,_ as X,t as N,J as Y}from"./index.ddcf8c37.js";import{u as Z,U as ee}from"./UserRepository.24346288.js";const te={...A,min:{type:Number,default:0},max:{type:Number,default:100},color:String,centerColor:String,trackColor:String,fontSize:String,rounded:Boolean,thickness:{type:Number,default:.2,validator:e=>e>=0&&e<=1},angle:{type:Number,default:0},showValue:Boolean,reverse:Boolean,instantFeedback:Boolean},P=50,j=2*P,D=j*Math.PI,ae=Math.round(D*1e3)/1e3;var re=M({name:"QCircularProgress",props:{...te,value:{type:Number,default:0},animationSpeed:{type:[String,Number],default:600},indeterminate:Boolean},setup(e,{slots:a}){const{proxy:{$q:o}}=G(),c=V(e),s=u(()=>{const i=(o.lang.rtl===!0?-1:1)*e.angle;return{transform:e.reverse!==(o.lang.rtl===!0)?`scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90-i}deg)`:`rotate3d(0, 0, 1, ${i-90}deg)`}}),l=u(()=>e.instantFeedback!==!0&&e.indeterminate!==!0?{transition:`stroke-dashoffset ${e.animationSpeed}ms ease 0s, stroke ${e.animationSpeed}ms ease`}:""),t=u(()=>j/(1-e.thickness/2)),m=u(()=>`${t.value/2} ${t.value/2} ${t.value} ${t.value}`),d=u(()=>E(e.value,e.min,e.max)),f=u(()=>D*(1-(d.value-e.min)/(e.max-e.min))),n=u(()=>e.thickness/2*t.value);function x({thickness:i,offset:h,color:C,cls:p,rounded:r}){return k("circle",{class:"q-circular-progress__"+p+(C!==void 0?` text-${C}`:""),style:l.value,fill:"transparent",stroke:"currentColor","stroke-width":i,"stroke-dasharray":ae,"stroke-dashoffset":h,"stroke-linecap":r,cx:t.value,cy:t.value,r:P})}return()=>{const i=[];e.centerColor!==void 0&&e.centerColor!=="transparent"&&i.push(k("circle",{class:`q-circular-progress__center text-${e.centerColor}`,fill:"currentColor",r:P-n.value/2,cx:t.value,cy:t.value})),e.trackColor!==void 0&&e.trackColor!=="transparent"&&i.push(x({cls:"track",thickness:n.value,offset:0,color:e.trackColor})),i.push(x({cls:"circle",thickness:n.value,offset:f.value,color:e.color,rounded:e.rounded===!0?"round":void 0}));const h=[k("svg",{class:"q-circular-progress__svg",style:s.value,viewBox:m.value,"aria-hidden":"true"},i)];return e.showValue===!0&&h.push(k("div",{class:"q-circular-progress__text absolute-full row flex-center content-center",style:{fontSize:e.fontSize}},a.default!==void 0?a.default():[k("div",d.value)])),k("div",{class:`q-circular-progress q-circular-progress--${e.indeterminate===!0?"in":""}determinate`,style:c.value,role:"progressbar","aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.indeterminate===!0?void 0:d.value},O(a.internal,h))}}});const se={class:"q-pa-md flex flex-center column"},ne={class:"column justify-center"},oe={class:"col",id:"displayTime",style:{"font-family":"helvetica,serif","font-weight":"bold"}},le={class:"row justify-center col-1"},ie={__name:"timerComponent",props:{maxTime:{type:Number,required:!0}},setup(e){const a=e;J(()=>a.maxTime,()=>{p(),console.log("timer updated")});let o=Q().timer,c=y(100),s=y(0),l=y(0),t=y(0);function m(r){return r.toString().padStart(2,"0")}let d=u(()=>`${s.value?m(s.value)+":":""}${m(l.value)}:${m(t.value)}`);function f(){let r=o.getTime();t.value=r.seconds,l.value=r.minutes,s.value=r.hours,c.value=o.getPercent()}let n=y(!0);const x=()=>{n.value?o.start():o.pause(),n.value=!n.value};let i=u(()=>n.value?"play_arrow":"pause");const h=function(r){let v=Math.floor(r/60);return{hours:Math.floor(v/60),minutes:v%60,seconds:r%60}};function C(r,v,b){let z=r*60,g,w;this.lock=!1;const I=()=>{g-=1,v(this),g===0&&(b(),this.pause())};this.reset=()=>{this.pause(),g=z},this.pause=function(){this.lock=!1,clearInterval(w)},this.start=function(){this.lock=!0,clearInterval(w),w=setInterval(I,1e3),g+=1,I()},this.getTime=()=>h(g),this.getPercent=()=>100*g/z,this.reset()}function p(){Object.assign(o,new C(a.maxTime,()=>f(),()=>console.log("Alert!"))),n.value=!0,f()}return p(),(r,v)=>(B(),R("div",se,[_(re,{onClick:v[0]||(v[0]=b=>x()),reverse:"",value:S(c),"show-value":"","track-color":"grey-3",color:"orange",size:"",class:"col q-ma-md"},{default:q(()=>[T("div",ne,[T("h1",oe,H(S(d)),1),T("div",le,[S(n).value?K("",!0):(B(),L(U,{key:0,fab:"",size:"xl",name:S(i),color:"accent"},null,8,["name"]))])])]),_:1},8,["value"])]))}},ce={components:{TimerComponent:ie},props:{taskId:{type:String,default:""}},data(e){let a=N({}),o=y(0),c=N(Q().presets.classic);function s(l=0){o.value=c[l]}return Z.onUpdate(()=>{let l;ee.onUserDataSnapshot(t=>{var m,d,f,n;l=(d=(m=t.data())==null?void 0:m.options)==null?void 0:d.preset,l&&Object.assign(c,l),Object.assign(a,(n=(f=t.data())==null?void 0:f.tasks)==null?void 0:n[e==null?void 0:e.taskId])})}),s(0),{setTimer:s,maxTime:o,preset:c,task:a}}},ue={class:"q-pa-md flex flex-center column"};function me(e,a,o,c,s,l){const t=Y("TimerComponent");return B(),L(W,{padding:""},{default:q(()=>[T("div",ue,[_(F,{class:"col-1",push:""},{default:q(()=>[_($,{push:"",label:"Work",icon:"work_outline",onClick:a[0]||(a[0]=()=>s.setTimer(0))}),_($,{push:"",label:"Short Break",icon:"emoji_food_beverage",onClick:a[1]||(a[1]=()=>s.setTimer(1))}),_($,{push:"",label:"Long Break",icon:"beach_access",onClick:a[2]||(a[2]=()=>s.setTimer(2))})]),_:1}),_(t,{maxTime:s.maxTime},null,8,["maxTime"])])]),_:1})}var ye=X(ce,[["render",me]]);export{ye as default};
