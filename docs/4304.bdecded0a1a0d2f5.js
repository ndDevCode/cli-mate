"use strict";(self.webpackChunkcli_mate=self.webpackChunkcli_mate||[]).push([[4304],{4304:(M,d,e)=>{e.r(d),e.d(d,{Bouncer:()=>m});var v=e(1528),o=e(3776),E=e(1772);const a="bounce";class m extends o.Ef{constructor(n){super(n)}clear(){}init(){const n=this.container,t=n.actualOptions.interactivity.modes.bounce;t&&(n.retina.bounceModeDistance=t.distance*n.retina.pixelRatio)}interact(){var n=this;return(0,v.c)(function*(){const t=n.container,i=t.actualOptions.interactivity.events,h=i.onDiv;if(t.interactivity.status===o.yG&&i.onHover.enable&&(0,o.Sc)(a,i.onHover.mode)){const{mouseBounce:u}=yield e.e(9152).then(e.bind(e,9152));u(n.container,l=>n.isEnabled(l))}else{const{divBounce:u}=yield e.e(9152).then(e.bind(e,9152));u(n.container,h,a,l=>n.isEnabled(l))}})()}isEnabled(n){const t=this.container,s=t.actualOptions,i=t.interactivity.mouse,c=(n?.interactivity??s.interactivity).events,r=c.onDiv;return!!i.position&&c.onHover.enable&&(0,o.Sc)(a,c.onHover.mode)||(0,o.CY)(a,r)}loadModeOptions(n,...t){n.bounce||(n.bounce=new E._);for(const s of t)n.bounce.load(s?.bounce)}reset(){}}}}]);