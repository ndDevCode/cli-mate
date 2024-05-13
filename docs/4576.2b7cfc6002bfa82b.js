"use strict";(self.webpackChunkcli_mate=self.webpackChunkcli_mate||[]).push([[4576],{4576:(et,O,E)=>{E.r(O),E.d(O,{decodeGIF:()=>j,drawGif:()=>V,getGIFLoopAmount:()=>W,loadGifImage:()=>q});var G=E(1528);const v=[0,4,2,1],N=[8,8,4,2];class H{constructor(o){this.pos=0,this.data=new Uint8ClampedArray(o)}getString(o){const s=this.data.slice(this.pos,this.pos+o);return this.pos+=s.length,s.reduce((n,c)=>n+String.fromCharCode(c),"")}nextByte(){return this.data[this.pos++]}nextTwoBytes(){return this.pos+=2,this.data[this.pos-2]+(this.data[this.pos-1]<<8)}readSubBlocks(){let o="",s=0;do{s=this.data[this.pos++];for(let a=s;--a>=0;o+=String.fromCharCode(this.data[this.pos++]));}while(0!==s);return o}readSubBlocksBin(){let o=this.data[this.pos],s=0;for(let e=0;0!==o;e+=o+1,o=this.data[this.pos+e])s+=o;const a=new Uint8Array(s);o=this.data[this.pos++];for(let e=0;0!==o;o=this.data[this.pos++])for(let r=o;--r>=0;a[e++]=this.data[this.pos++]);return a}skipSubBlocks(){for(const o=1,s=0;this.data[this.pos]!==s;this.pos+=this.data[this.pos]+o);this.pos++}}const u={x:0,y:0},J=0,U=.5,K=0,$=0,z=0;function Q(t,o){const s=[];for(let n=0;n<o;n++)s.push({r:t.data[t.pos],g:t.data[t.pos+1],b:t.data[t.pos+2]}),t.pos+=3;return s}function R(){return(R=(0,G.c)(function*(t,o,s,n,c,a){const e=o.frames[n(!0)];e.left=t.nextTwoBytes(),e.top=t.nextTwoBytes(),e.width=t.nextTwoBytes(),e.height=t.nextTwoBytes();const r=t.nextByte(),w=128==(128&r),d=64==(64&r);e.sortFlag=32==(32&r),e.reserved=(24&r)>>>3,w&&(e.localColorTable=Q(t,1<<1+(7&r)));const m=l=>{const{r:h,g:p,b:i}=(w?e.localColorTable:o.globalColorTable)[l];return l!==c(null)?{r:h,g:p,b:i,a:255}:{r:h,g:p,b:i,a:s?~~((h+p+i)/3):0}},y=(()=>{try{return new ImageData(e.width,e.height,{colorSpace:"srgb"})}catch(l){if(l instanceof DOMException&&"IndexSizeError"===l.name)return null;throw l}})();if(null==y)throw new EvalError("GIF frame size is to large");const k=t.nextByte(),F=t.readSubBlocksBin(),x=1<<k,D=(l,h)=>{const p=l>>>3,i=7&l;return(F[p]+(F[p+1]<<8)+(F[p+2]<<16)&(1<<h)-1<<i)>>>i};if(d){for(let l=0,h=k+1,p=0,i=[[0]],I=0;I<4;I++){if(v[I]<e.height){let g=0,C=0,B=!1;for(;!B;){const b=l;if(l=D(p,h),p+=h+1,l===x){h=k+1,i.length=x+2;for(let T=0;T<i.length;T++)i[T]=T<x?[T]:[]}else{l>=i.length?i.push(i[b].concat(i[b][0])):b!==x&&i.push(i[b].concat(i[l][0]));for(const T of i[l]){const{r:_,g:M,b:S,a:tt}=m(T);y.data.set([_,M,S,tt],v[I]*e.width+N[I]*C+g%(4*e.width)),g+=4}i.length===1<<h&&h<12&&h++}g===4*e.width*(C+1)&&(C++,v[I]+N[I]*C>=e.height&&(B=!0))}}a?.(t.pos/(t.data.length-1),n(!1)+1,y,{x:e.left,y:e.top},{width:o.width,height:o.height})}e.image=y,e.bitmap=yield createImageBitmap(y)}else{let l=0,h=k+1,p=0,i=-4,I=!1;const g=[[0]];for(;!I;){const C=l;if(l=D(p,h),p+=h,l===x){h=k+1,g.length=x+2;for(let B=0;B<g.length;B++)g[B]=B<x?[B]:[]}else{if(l===x+1){I=!0;break}l>=g.length?g.push(g[C].concat(g[C][0])):C!==x&&g.push(g[C].concat(g[l][0]));for(const B of g[l]){const{r:b,g:T,b:_,a:M}=m(B);y.data.set([b,T,_,M],i+=4)}g.length>=1<<h&&h<12&&h++}}e.image=y,e.bitmap=yield createImageBitmap(y),a?.((t.pos+1)/t.data.length,n(!1)+1,e.image,{x:e.left,y:e.top},{width:o.width,height:o.height})}})).apply(this,arguments)}function Z(t,o,s,n,c,a){return L.apply(this,arguments)}function L(){return L=(0,G.c)(function*(t,o,s,n,c,a){switch(t.nextByte()){case 59:return!0;case 44:yield function Y(t,o,s,n,c,a){return R.apply(this,arguments)}(t,o,s,n,c,a);break;case 33:!function X(t,o,s,n){switch(t.nextByte()){case 249:{const c=o.frames[s(!1)];t.pos++;const a=t.nextByte();c.GCreserved=(224&a)>>>5,c.disposalMethod=(28&a)>>>2,c.userInputDelayFlag=2==(2&a);const e=1==(1&a);c.delayTime=10*t.nextTwoBytes();const r=t.nextByte();e&&n(r),t.pos++;break}case 255:{t.pos++;const c={identifier:t.getString(8),authenticationCode:t.getString(3),data:t.readSubBlocksBin()};o.applicationExtensions.push(c);break}case 254:o.comments.push([s(!1),t.readSubBlocks()]);break;case 1:if(0===o.globalColorTable.length)throw new EvalError("plain text extension without global color table");t.pos++,o.frames[s(!1)].plainTextData={left:t.nextTwoBytes(),top:t.nextTwoBytes(),width:t.nextTwoBytes(),height:t.nextTwoBytes(),charSize:{width:t.nextTwoBytes(),height:t.nextTwoBytes()},foregroundColor:t.nextByte(),backgroundColor:t.nextByte(),text:t.readSubBlocks()};break;default:t.skipSubBlocks()}}(t,o,n,c);break;default:throw new EvalError("undefined block found")}return!1}),L.apply(this,arguments)}function W(t){for(const o of t.applicationExtensions)if(o.identifier+o.authenticationCode==="NETSCAPE2.0")return o.data[1]+(o.data[2]<<8);return NaN}function j(t,o,s){return A.apply(this,arguments)}function A(){return(A=(0,G.c)(function*(t,o,s){s||(s=!1);const n=yield fetch(t);if(!n.ok&&404===n.status)throw new EvalError("file not found");const c=yield n.arrayBuffer(),a={width:0,height:0,totalTime:0,colorRes:0,pixelAspectRatio:0,frames:[],sortFlag:!1,globalColorTable:[],backgroundImage:new ImageData(1,1,{colorSpace:"srgb"}),comments:[],applicationExtensions:[]},e=new H(new Uint8ClampedArray(c));if("GIF89a"!==e.getString(6))throw new Error("not a supported GIF file");a.width=e.nextTwoBytes(),a.height=e.nextTwoBytes();const r=e.nextByte(),w=128==(128&r);a.colorRes=(112&r)>>>4,a.sortFlag=8==(8&r);const d=1<<1+(7&r),f=e.nextByte();a.pixelAspectRatio=e.nextByte(),0!==a.pixelAspectRatio&&(a.pixelAspectRatio=(a.pixelAspectRatio+15)/64),w&&(a.globalColorTable=Q(e,d));const m=(()=>{try{return new ImageData(a.width,a.height,{colorSpace:"srgb"})}catch(i){if(i instanceof DOMException&&"IndexSizeError"===i.name)return null;throw i}})();if(null==m)throw new Error("GIF frame size is to large");const{r:y,g:k,b:F}=a.globalColorTable[f];m.data.set(w?[y,k,F,255]:[0,0,0,0]);for(let i=4;i<m.data.length;i*=2)m.data.copyWithin(i,0,i);a.backgroundImage=m;let x=-1,D=!0,l=-1;const h=i=>(i&&(D=!0),x),p=i=>(null!=i&&(l=i),l);try{do{D&&(a.frames.push({left:0,top:0,width:0,height:0,disposalMethod:0,image:new ImageData(1,1,{colorSpace:"srgb"}),plainTextData:null,userInputDelayFlag:!1,delayTime:0,sortFlag:!1,localColorTable:[],reserved:0,GCreserved:0}),x++,l=-1,D=!1)}while(!(yield Z(e,a,s,h,p,o)));a.frames.length--;for(const i of a.frames){if(i.userInputDelayFlag&&0===i.delayTime){a.totalTime=1/0;break}a.totalTime+=i.delayTime}return a}catch(i){throw i instanceof EvalError?new Error(`error while parsing frame ${x} "${i.message}"`):i}})).apply(this,arguments)}function V(t){const{context:o,radius:s,particle:n,delta:c}=t,a=n.image;if(!a?.gifData||!a.gif)return;const e=new OffscreenCanvas(a.gifData.width,a.gifData.height),r=e.getContext("2d");if(!r)throw new Error("could not create offscreen canvas context");r.imageSmoothingQuality="low",r.imageSmoothingEnabled=!1,r.clearRect(u.x,u.y,e.width,e.height),void 0===n.gifLoopCount&&(n.gifLoopCount=a.gifLoopCount??z);let w=n.gifFrame??J;const d={x:-a.gifData.width*U,y:-a.gifData.height*U},f=a.gifData.frames[w];if(void 0===n.gifTime&&(n.gifTime=K),f.bitmap){switch(o.scale(s/a.gifData.width,s/a.gifData.height),f.disposalMethod){case 4:case 5:case 6:case 7:case 0:r.drawImage(f.bitmap,f.left,f.top),o.drawImage(e,d.x,d.y),r.clearRect(u.x,u.y,e.width,e.height);break;case 1:r.drawImage(f.bitmap,f.left,f.top),o.drawImage(e,d.x,d.y);break;case 2:r.drawImage(f.bitmap,f.left,f.top),o.drawImage(e,d.x,d.y),r.clearRect(u.x,u.y,e.width,e.height),a.gifData.globalColorTable.length?r.putImageData(a.gifData.backgroundImage,d.x,d.y):r.putImageData(a.gifData.frames[$].image,d.x+f.left,d.y+f.top);break;case 3:{const m=r.getImageData(u.x,u.y,e.width,e.height);r.drawImage(f.bitmap,f.left,f.top),o.drawImage(e,d.x,d.y),r.clearRect(u.x,u.y,e.width,e.height),r.putImageData(m,u.x,u.y)}}if(n.gifTime+=c.value,n.gifTime>f.delayTime){if(n.gifTime-=f.delayTime,++w>=a.gifData.frames.length){if(--n.gifLoopCount<=z)return;w=$,r.clearRect(u.x,u.y,e.width,e.height)}n.gifFrame=w}o.scale(a.gifData.width/s,a.gifData.height/s)}}function q(t){return P.apply(this,arguments)}function P(){return(P=(0,G.c)(function*(t){if("gif"===t.type){t.loading=!0;try{t.gifData=yield j(t.source),t.gifLoopCount=W(t.gifData)??z,t.gifLoopCount||(t.gifLoopCount=1/0)}catch{t.error=!0}t.loading=!1}else{const{loadImage:o}=yield Promise.resolve().then(E.bind(E,2888));yield o(t)}})).apply(this,arguments)}}}]);