"use strict";(self.webpackChunkcli_mate=self.webpackChunkcli_mate||[]).push([[9816],{9816:(p,a,t)=>{t.r(a),t.d(a,{OpacityUpdater:()=>y});var c=t(1528),n=t(3776);class y{constructor(o){this.container=o}init(o){var e=this;return(0,c.c)(function*(){const s=o.options.opacity;o.opacity=(0,n.aI)(s,1);const i=s.animation;i.enable&&(o.opacity.velocity=(0,n.qS)(i.speed)/n.sc*e.container.retina.reduceFactor,i.sync||(o.opacity.velocity*=(0,n.CE)())),yield Promise.resolve()})()}isEnabled(o){return!o.destroyed&&!o.spawning&&!!o.opacity&&o.opacity.enable&&((o.opacity.maxLoops??0)<=0||(o.opacity.maxLoops??0)>0&&(o.opacity.loops??0)<(o.opacity.maxLoops??0))}reset(o){o.opacity&&(o.opacity.time=0,o.opacity.loops=0)}update(o,e){var s=this;return(0,c.c)(function*(){!s.isEnabled(o)||!o.opacity||((0,n.C2)(o,o.opacity,!0,o.options.opacity.animation.destroy,e),yield Promise.resolve())})()}}}}]);