"use strict";(self.webpackChunkcli_mate=self.webpackChunkcli_mate||[]).push([[732],{3112:(f,r,a)=>{a.r(r),a.d(r,{ParallaxMover:()=>y});var i=a(1528),l=a(3776);class y{init(){return(0,i.c)(function*(){yield Promise.resolve()})()}isEnabled(e){return!(0,l.EB)()&&!e.destroyed&&e.container.actualOptions.interactivity.events.onHover.parallax.enable}move(e){return(0,i.c)(function*(){const n=e.container,o=n.actualOptions.interactivity.events.onHover.parallax;if((0,l.EB)()||!o.enable)return;const p=o.force,s=n.interactivity.mouse.position;if(!s)return;const _=n.canvas.size,u_x=.5*_.width,u_y=.5*_.height,v=o.smooth,m=e.getRadius()/p,x_x=(s.x-u_x)*m,x_y=(s.y-u_y)*m,{offset:t}=e;t.x+=(x_x-t.x)/v,t.y+=(x_y-t.y)/v,yield Promise.resolve()})()}}}}]);