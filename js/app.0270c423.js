(function(t){function e(e){for(var n,r,o=e[0],l=e[1],c=e[2],h=0,f=[];h<o.length;h++)r=o[h],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(n=!1)}n&&(s.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},i={app:0},s=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/vue-hextris/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},2395:function(t,e,a){},"3a63":function(t,e){t.exports="data:image/png;base64,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"},"4eda":function(t,e,a){"use strict";a("fffc")},"55b9":function(t,e,a){"use strict";a("ecee")},"569b":function(t,e){t.exports="data:image/png;base64,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"},"6a4a":function(t,e,a){},"7c55":function(t,e,a){"use strict";a("2395")},"88ae":function(t,e){t.exports="data:image/png;base64,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"},9275:function(t,e){t.exports="data:image/png;base64,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"},9534:function(t,e,a){},"969e":function(t,e,a){"use strict";a("9534")},"96a1":function(t,e,a){"use strict";a("6a4a")},cd49:function(t,e,a){"use strict";a.r(e),a.d(e,"store",(function(){return At}));a("e260"),a("e6cf"),a("cca6"),a("a79d");var n,i=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("GameWin"),a("Info")],1)},r=[],o=a("5530"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"info"}},[t.status===t.GameStatus.PAUSED?n("div",{staticClass:"fog"}):t._e(),t.status===t.GameStatus.PAUSED||t.status===t.GameStatus.UNSTART||t.status===t.GameStatus.OVER?n("img",{staticClass:"control-button help-button unselectable",attrs:{src:a("3a63")},on:{click:t.helpClick}}):t._e(),t.status===t.GameStatus.RUNNING?n("img",{staticClass:"control-button pause-button unselectable",attrs:{src:a("88ae")},on:{click:function(e){return t.game.pause()}}}):t._e(),t.status===t.GameStatus.PAUSED||t.status===t.GameStatus.OVER?n("img",{staticClass:"control-button restart-button unselectable",attrs:{src:a("9275")},on:{click:function(e){return t.restart()}}}):t._e(),t.status===t.GameStatus.PAUSED?n("img",{staticClass:"control-button continue-button unselectable",attrs:{src:a("569b")},on:{click:function(e){return t.game.resume()}}}):t._e(),t.status===t.GameStatus.UNSTART?n("div",{staticClass:"start-button unselectable",on:{click:function(e){return t.game.start()}}}):t._e(),t.status===t.GameStatus.PAUSED?n("div",{staticClass:"paused-info unselectable"},[n("div",{staticClass:"pause-title"},[t._v("Game Paused")]),t._m(0)]):t._e(),t.status===t.GameStatus.OVER?n("div",{staticClass:"overed-info unselectable"},[n("div",{staticClass:"pause-title"},[t._v("Game Overed")]),t._m(1)]):t._e(),t.helpShow?n("Help",{on:{"close-help":function(e){t.helpShow=!1}}}):t._e()],1)},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a",{staticClass:"github-link",attrs:{href:"https://github.com/pengfeiw/vue-hextris",target:"_blank"}},[t._v(" Find some issue? click here to help improve the code. ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a",{staticClass:"github-link",attrs:{href:"https://github.com/pengfeiw/vue-hextris",target:"_blank"}},[t._v(" Find some issue? click here to help improve the code. ")])])}];(function(t){t[t["UNSTART"]=0]="UNSTART",t[t["RUNNING"]=1]="RUNNING",t[t["PAUSED"]=2]="PAUSED",t[t["OVER"]=3]="OVER"})(n||(n={}));var u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"help"}},[a("h2",[t._v("HOW TO PLAY")]),t._m(0),a("div",{staticClass:"footer"},[a("el-button",{staticClass:"close-button",attrs:{size:"medium"},on:{click:function(e){return t.$emit("close-help")}}},[t._v("close")])],1)])},h=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("p",[t._v(" The goal of Hextris is to stop blocks from leaving the inside of the outer gray hexagon. ")]),a("p",[t._v(" Press the right and left arrow keys to rotate the Hexagon. Press the down arrow to speed up the block falling. ")]),a("p",[t._v(" Clear blocks and get points by making 3 or more blocks of the same color touch. ")]),a("p",[t._v(" Time left before your combo streak disappears is indicated by the colored lines on outer hexagon. ")])])}],f=i["default"].extend({name:"Help"}),d=f,v=(a("96a1"),a("2877")),m=Object(v["a"])(d,u,h,!1,null,"2964638e",null),g=m.exports,y=a("2f62"),A={Help:g},p=function(){return{GameStatus:n,helpShow:!1}},w=Object(o["a"])({helpClick:function(){this.helpShow=!0}},Object(y["c"])(["restart"])),b=Object(o["a"])(Object(o["a"])({},Object(y["b"])(["status"])),Object(y["d"])(["game"])),k=i["default"].extend({name:"Info",data:p,components:A,methods:w,computed:b}),S=k,x=(a("969e"),Object(v["a"])(S,l,c,!1,null,"5238faf1",null)),T=x.exports,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"gamewin"}},[a("HighScore"),a("canvas",{ref:"canvas",staticClass:"canvas"})],1)},G=[],j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"unselectable",attrs:{id:"high-score"}},[a("div",{staticClass:"title"},[t._v("HIGH SCORE")]),a("div",{staticClass:"value"},[t._v(t._s(t.game.highScore))])])},C=[],O=i["default"].extend({name:"HighScore",computed:Object(o["a"])({},Object(y["d"])(["game"]))}),L=O,R=(a("55b9"),Object(v["a"])(L,j,C,!1,null,"7d4e1aac",null)),D=R.exports,E=a("cffa"),M=function(){return{ctx:null,speedup:!1}},B={HighScore:D},I=Object(o["a"])(Object(o["a"])({},Object(y["b"])(["status"])),Object(y["d"])(["game"])),Y=0,P={loop:function(t){-1===Y&&(Y=t);var e=t-Y;e>0&&(this.speedup&&(e*=10),this.game.tick(this.ctx,e)),Y=t,requestAnimationFrame(this.loop)},setSize:function(){var t=this.$refs.canvas;t.width=window.innerWidth,t.height=window.innerHeight;var e=t.getContext("2d");this.ctx=e;var a=Math.min(window.innerWidth,window.innerHeight);a<800&&(this.game.outerSideL=.4*a)},on:function(){var t=this,e=this.$refs.canvas,a=0,i=function(){t.status===n.RUNNING&&(a-=60,E["a"].to(t.game,{duration:.1,innerRotation:a}))},s=function(){t.status===n.RUNNING&&(a+=60,E["a"].to(t.game,{duration:.1,innerRotation:a}))},r=function(){t.status===n.RUNNING?t.game.pause():t.status===n.UNSTART?t.game.start():t.status===n.PAUSED&&t.game.resume()};window.addEventListener("resize",this.setSize),e.addEventListener("click",(function(a){var r=a.offsetX;t.status===n.RUNNING&&(r>.5*e.width?s():i())})),window.addEventListener("keydown",(function(e){switch(e.code){case"ArrowLeft":i();break;case"ArrowRight":s();break;case"ArrowDown":t.speedup=!0;break;case"Space":r();break;default:break}})),window.addEventListener("keyup",(function(){t.speedup=!1})),window.addEventListener("beforeunload",(function(){t.game.updateScoreToLocalstorage()})),document.addEventListener("visibilitychange",(function(){document.hidden&&t.game.status!==n.UNSTART&&t.game.pause()}))}},U=function(){this.setSize(),this.on(),requestAnimationFrame(this.loop)},q=i["default"].extend({name:"GameWin",data:M,components:B,computed:I,mounted:U,methods:P}),X=q,H=(a("4eda"),Object(v["a"])(X,N,G,!1,null,"48498242",null)),J=H.exports,Q=i["default"].extend({name:"App",components:{Info:T,GameWin:J},data:function(){return{GameStatus:n}},computed:Object(o["a"])({},Object(y["b"])(["status"]))}),K=Q,W=(a("7c55"),Object(v["a"])(K,s,r,!1,null,null,null)),Z=W.exports,V=a("5c96"),z=a.n(V),F=(a("0fae"),a("3835")),_=a("d4ec"),$=a("bee2"),tt=(a("cb29"),a("d3b7"),a("25f0"),a("a434"),a("d9e2"),a("4de4"),a("e9c4"),function(t){switch(t){case 1:return"#2E94B9";case 2:return"#08D9D6";case 3:return"#F0B775";case 4:return"#D25565";default:throw new Error("unkonw block dataIndex")}}),et=function(){function t(){Object(_["a"])(this,t),this.groupSize=8,this._data=[[],[],[],[],[],[]]}return Object($["a"])(t,[{key:"data",get:function(){return this._data}},{key:"isOver",value:function(){var t=this;return!this._data.every((function(e){return e.filter((function(t){return void 0===t.willDelete||!1===t.willDelete})).length<=t.groupSize}))}},{key:"eliminate",value:function(){for(var t=this,e=[],a=[],n=0,i=0;i<this.data.length;i++){var s=this.data[i];e.push([]),a.push([]);for(var r=0;r<s.length;r++)e[i].push(!1),a[i].push(!1)}for(var o=function n(i,s,r){i<t.data.length&&i>=0&&s<t.data[i].length&&s>=0&&(t.data[i][s].willDelete||t.data[i][s].data!==r||!0===e[i][s]||(e[i][s]=!0,a[i][s]=!0,s<t.data[i].length&&n(i,s+1,r),s>0&&n(i,s-1,r),n((i+1)%6,s,r),n((i-1+6)%6,s,r)))},l=0;l<this.data.length;l++)for(var c=0;c<this.data[l].length;c++)if(!1===a[l][c]){var u=JSON.parse(JSON.stringify(e)),h=JSON.parse(JSON.stringify(a));o(l,c,this.data[l][c].data);for(var f=0,d=0;d<u.length;d++)f+=u[d].filter((function(t){return t})).length;for(var v=0,m=0;m<e.length;m++)v+=e[m].filter((function(t){return t})).length;v-f<3&&(e=u,a=h)}for(var g=0;g<e.length;g++)for(var y=e[g].length-1;y>=0;y--)e[g][y]&&(this.data[g][y].willDelete=!0,n++);var A=setInterval((function(){for(var a=0;a<e.length;a++)for(var n=e[a].length-1;n>=0;n--)e[a][n]&&(t.data[a][n].visible=!t.data[a][n].visible)}),200);return setTimeout((function(){window.clearInterval(A);for(var a=0;a<e.length;a++)for(var n=e[a].length-1;n>=0;n--)e[a][n]&&t.data[a].splice(n,1)}),600),n}}]),t}(),at=et,nt=function(t){return t/180*Math.PI},it=function(t,e){var a=Math.ceil(t),n=Math.floor(e);return Math.floor(Math.random()*(n-a))+a},st=function(t){var e=t.x,a=t.y,n=Math.sqrt(e*e+a*a);return{x:e/n,y:a/n}},rt=function(){for(var t=arguments.length,e=new Array(t),a=0;a<t;a++)e[a]=arguments[a];if(e.length<1)throw new Error("addVec Error: the params length must greater then 1");for(var n={x:e[0].x,y:e[0].y},i=1;i<e.length;i++)n.x+=e[i].x,n.y+=e[i].y;return n},ot=function(t,e){return{x:t.x*e,y:t.y*e}},lt=function(t,e){return Math.sqrt(t.x-e.x+t.y-e.y)},ct=function(){function t(e,a){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];Object(_["a"])(this,t),this._start=0,this._callback=e,this._remainTime=a,n&&this.resume()}return Object($["a"])(t,[{key:"pause",value:function(){this._timerId&&(window.clearTimeout(this._timerId),this._timerId=void 0,this._remainTime=Date.now()-this._start)}},{key:"resume",value:function(){this._timerId||(this._start=Date.now(),this._timerId=window.setTimeout(this._callback,this._remainTime))}},{key:"start",value:function(){this.resume()}}]),t}(),ut=function(){function t(e,a){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];Object(_["a"])(this,t),this.state=0,this._callback=e,this._interval=a,n&&this.start()}return Object($["a"])(t,[{key:"start",value:function(){0===this.state&&(this._startTime=Date.now(),this._timerId=window.setInterval(this._callback,this._interval),this.toggleState())}},{key:"pause",value:function(){1!==this.state&&2!==this.state||(1===this.state?(this._remaining=this._interval-(Date.now()-this._startTime),window.clearInterval(this._timerId)):2===this.state&&this.timeoutTimer.pause(),this.toggleState())}},{key:"resume",value:function(){if(3===this.state||4===this.state){if(3===this.state)this.timeoutTimer=new ct(this.timeoutCallback.bind(this),this._remaining);else if(4===this.state){var t;null===(t=this.timeoutTimer)||void 0===t||t.resume()}this.toggleState()}}},{key:"timeoutCallback",value:function(){this._callback(),this._startTime=Date.now(),this._timerId=window.setInterval(this._callback,this._interval),this.state=1}},{key:"toggleState",value:function(){switch(this.state){case 0:this.state=1;break;case 1:this.state=3;break;case 2:this.state=4;break;case 3:case 4:this.state=2;break;default:throw new Error("IntervalTimer: unkonw state")}}}]),t}(),ht="rgba(234,234,234,1)",ft="rgba(80,80,80,1)",dt="rgba(255, 255, 255, 1)",vt="rgba(32,73,105,1)",mt=function(t){var e={x:.5*t,y:-.5*t/Math.tan(nt(30))},a={x:t,y:0},n={x:e.x,y:.5*t/Math.tan(nt(30))},i={x:-.5*t,y:n.y},s={x:-t,y:0},r={x:i.x,y:e.y};return[e,a,n,i,s,r]},gt=function(){function t(){var e=this;Object(_["a"])(this,t),this.status=n.UNSTART,this.data=new at,this.outerSideL=300,this.innerRotation=0,this.highScore=0,this.score=0,this._generateBlockDelay=3e3,this._generateBlockElapse=0,this._lastTickTime=0,this._outlineColor=tt(1),this.speed=1,this.activeBlocks=[],this._speedTimer=new ut((function(){e.speed+=.1,e._generateBlockDelay-=20}),1e4,!1);var a=localStorage.getItem("highscore");a&&(this.highScore=parseInt(a))}return Object($["a"])(t,[{key:"innerSideL",get:function(){return.27*this.outerSideL}},{key:"blockSideL",get:function(){return(this.outerSideL-this.innerSideL)/this.data.groupSize}},{key:"pause",value:function(){this.status=n.PAUSED,this._speedTimer.pause()}},{key:"resume",value:function(){this.status=n.RUNNING,this._speedTimer.resume()}},{key:"start",value:function(){this.status=n.RUNNING,this._speedTimer.start(),this._lastTickTime=Date.now(),this.generateRandomBlock()}},{key:"tick",value:function(t,e){var a=this.status,i=Date.now();if(this.status===n.RUNNING&&(this._generateBlockElapse+=i-this._lastTickTime,this._generateBlockElapse>=this._generateBlockDelay&&(this.generateRandomBlock(),this._generateBlockElapse=0,this._outlineColor=tt(it(1,5)))),this._lastTickTime=i,a===n.RUNNING)for(var s=0;s<this.activeBlocks.length;s++)this.activeBlocks[s].blockInnerSideL2OutersideL-=e*this.speed*3e-4;this.updateData(),this.checkOver(),this.draw(t)}},{key:"draw",value:function(t){t.clearRect(0,0,t.canvas.width,t.canvas.height);var e=t.canvas.clientWidth,a=t.canvas.clientHeight,n={x:.5*e,y:.5*a};this.drawOutline(t,n),this.drawContainer(t,n),this.drawSettledBlock(t,n),this.drawActiveBlock(t,n),this.drawUnrunningInfo(t,n)}},{key:"drawContainer",value:function(t,e){var a=mt(this.outerSideL),n=Object(F["a"])(a,6),i=n[0],s=n[1],r=n[2],o=n[3],l=n[4],c=n[5],u=mt(this.innerSideL),h=Object(F["a"])(u,6),f=h[0],d=h[1],v=h[2],m=h[3],g=h[4],y=h[5];t.translate(e.x,e.y),t.beginPath(),t.fillStyle=ht,t.moveTo(i.x,i.y),t.lineTo(s.x,s.y),t.lineTo(r.x,r.y),t.lineTo(o.x,o.y),t.lineTo(l.x,l.y),t.lineTo(c.x,c.y),t.closePath(),t.fill(),t.rotate(nt(this.innerRotation)),t.beginPath(),t.fillStyle=ft,t.moveTo(f.x,f.y),t.lineTo(d.x,d.y),t.lineTo(v.x,v.y),t.lineTo(m.x,m.y),t.lineTo(g.x,g.y),t.lineTo(y.x,y.y),t.closePath(),t.fill(),t.resetTransform()}},{key:"drawOutline",value:function(t,e){var a=1-this._generateBlockElapse/this._generateBlockDelay,n=mt(this.outerSideL);t.translate(e.x,e.y),t.beginPath();var i=1;t.moveTo(n[0].x,n[0].y);while(i<=5&&a>1/6)t.lineTo(n[i].x,n[i].y),i++,a-=1/6;var s=n[i-1],r=n[i%6],o=st({x:r.x-s.x,y:r.y-s.y}),l=rt(s,ot(o,a*this.outerSideL*6));lt(l,n[0])<.01?t.closePath():t.lineTo(l.x,l.y),t.lineWidth=10,t.strokeStyle=this._outlineColor,t.stroke(),t.resetTransform()}},{key:"drawSettledBlock",value:function(t,e){for(var a=0;a<this.data.data.length;a++)for(var n=this.data.data[a],i=0;i<n.length;i++)if(n[i].visible){var s=n[i].data,r=this.innerSideL+(i+1)*this.blockSideL,o=this.innerSideL+this.blockSideL*i,l={x:-.5*r,y:-.5*r/Math.tan(nt(30))},c={x:.5*r,y:l.y},u={x:-.5*o,y:-.5*o/Math.tan(nt(30))},h={x:.5*o,y:u.y};t.translate(e.x,e.y),t.rotate(nt(60*a+this.innerRotation)),t.beginPath(),t.fillStyle=tt(s),t.moveTo(l.x,l.y),t.lineTo(c.x,c.y),t.lineTo(h.x,h.y),t.lineTo(u.x,u.y),t.closePath(),t.fill(),t.resetTransform()}}},{key:"drawActiveBlock",value:function(t,e){for(var a=0;a<this.activeBlocks.length;a++){var n=this.activeBlocks[a].blockInnerSideL2OutersideL*this.outerSideL,i=n,s=n+this.blockSideL,r={x:-.5*s,y:-.5*s/Math.tan(nt(30))},o={x:.5*s,y:r.y},l={x:-.5*i,y:-.5*i/Math.tan(nt(30))},c={x:.5*i,y:l.y};t.translate(e.x,e.y),t.rotate(nt(60*this.activeBlocks[a].index)),t.beginPath(),t.fillStyle=tt(this.activeBlocks[a].type),t.moveTo(r.x,r.y),t.lineTo(o.x,o.y),t.lineTo(c.x,c.y),t.lineTo(l.x,l.y),t.closePath(),t.fill(),t.resetTransform()}}},{key:"drawUnrunningInfo",value:function(t,e){if(this.status===n.UNSTART){var a=.7*this.innerSideL,i={x:e.x-a*Math.sqrt(3)/4,y:e.y-.5*a},s={x:e.x+a*Math.sqrt(3)/4,y:e.y},r={x:i.x,y:e.y+.5*a};t.beginPath(),t.fillStyle=dt,t.moveTo(i.x,i.y),t.lineTo(s.x,s.y),t.lineTo(r.x,r.y),t.closePath(),t.fill(),t.textAlign="center",t.textBaseline="bottom",t.font="5rem serif",t.fillStyle=vt,t.fillText("Hextris",e.x,e.y-1.2*this.innerSideL),t.textAlign="center",t.textBaseline="top",t.font="1.5rem serif",t.fillStyle=vt,t.fillText("Click Triangle or press SPACE to start!",e.x,e.y+1.2*this.innerSideL)}else t.textAlign="center",t.textBaseline="middle",t.font="2rem serif",t.fillStyle="rgba(255, 255, 255, 1)",t.fillText(this.score.toString(),e.x,e.y)}},{key:"generateRandomBlock",value:function(){for(var t=[1,1,1,1,1,1,1,2,2,2,3,3,4,5,6],e=t[it(0,t.length)],a=[0,1,2,3,4,5],n=0;n<e;n++){var i=a.splice(~~(Math.random()*a.length),1),s=Object(F["a"])(i,1),r=s[0],o=it(1,5),l=1.3;this.activeBlocks.push({index:r,type:o,blockInnerSideL2OutersideL:l})}}},{key:"updateData",value:function(){if(this.status===n.RUNNING){var t=this.data.eliminate();this.score+=10*t,this.score>this.highScore&&(this.highScore=this.score);for(var e=this.activeBlocks.length-1;e>=0;e--){var a=this.activeBlocks[e],i=a.blockInnerSideL2OutersideL*this.outerSideL,s=(a.index-Math.ceil(this.innerRotation/60)%6)%6;s<0&&(s+=6);var r=this.data.data[s],o=this.innerSideL+r.length*this.blockSideL;o>=i&&(r.push({data:a.type,visible:!0}),this.activeBlocks.splice(e,1))}}}},{key:"checkOver",value:function(){this.data.isOver()&&(this.status=n.OVER)}},{key:"updateScoreToLocalstorage",value:function(){localStorage.setItem("highscore",this.highScore.toString())}}]),t}(),yt=gt;i["default"].use(y["a"]),i["default"].use(z.a);var At=new y["a"].Store({state:{game:new yt},mutations:{restart:function(t){t.game.updateScoreToLocalstorage(),t.game=new yt,t.game.start()}},getters:{status:function(t){return t.game.status}}});i["default"].config.productionTip=!1,new i["default"]({render:function(t){return t(Z)},store:At}).$mount("#app")},ecee:function(t,e,a){},fffc:function(t,e,a){}});
//# sourceMappingURL=app.0270c423.js.map