"use strict";(self.webpackChunkcli_mate=self.webpackChunkcli_mate||[]).push([[5408],{5408:(T,s,u)=>{u.r(s),u.d(s,{updateLife:()=>w});var n=u(3776);const t=0,y=-1,o=0,d=0;function w(e,a,l){if(!e.life)return;const i=e.life;let m=!1;if(e.spawning){if(i.delayTime+=a.value,!(i.delayTime>=e.life.delay))return;m=!0,e.spawning=!1,i.delayTime=t,i.time=t}if(i.duration===y||e.spawning||(m?i.time=t:i.time+=a.value,i.time<i.duration))return;if(i.time=t,e.life.count>o&&e.life.count--,e.life.count===o)return void e.destroy();const g=(0,n.Ws)(d,l.width),h=(0,n.Ws)(d,l.width);e.position.x=(0,n.jy)(g),e.position.y=(0,n.jy)(h),e.spawning=!0,i.delayTime=t,i.time=t,e.reset();const f=e.options.life;f&&(i.delay=(0,n.qS)(f.delay.value)*n.Ub,i.duration=(0,n.qS)(f.duration.value)*n.Ub)}}}]);