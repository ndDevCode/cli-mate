"use strict";(self.webpackChunkcli_mate=self.webpackChunkcli_mate||[]).push([[5384],{5384:(c,a,t)=>{t.r(a),t.d(a,{NoneOutMode:()=>r});var y=t(1528),u=t(3776);class r{constructor(o){this.container=o,this.modes=["none"]}update(o,s,f,l){var m=this;return(0,y.c)(function*(){if(!m.modes.includes(l)||((o.options.move.distance.horizontal&&("left"===s||"right"===s))??(o.options.move.distance.vertical&&("top"===s||"bottom"===s))))return;const _=o.options.move.gravity,i=m.container,v=i.canvas.size,e=o.getRadius();if(_.enable){const h=o.position;(!_.inverse&&h.y>v.height+e&&"bottom"===s||_.inverse&&h.y<-e&&"top"===s)&&i.particles.remove(o)}else{if(o.velocity.y>0&&o.position.y<=v.height+e||o.velocity.y<0&&o.position.y>=-e||o.velocity.x>0&&o.position.x<=v.width+e||o.velocity.x<0&&o.position.x>=-e)return;(0,u.Mv)(o.position,i.canvas.size,u.Cg.origin,e,s)||i.particles.remove(o)}yield Promise.resolve()})()}}}}]);