var __reflect=this&&this.__reflect||function(t,e,i){t.__class__=e,i?i.push(e):i=[e],t.__types__=t.__types__?i.concat(t.__types__):i},__extends=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);i.prototype=e.prototype,t.prototype=new i},__awaiter=this&&this.__awaiter||function(t,e,i,r){return new(i||(i=Promise))(function(a,s){function n(t){try{d(r.next(t))}catch(e){s(e)}}function h(t){try{d(r["throw"](t))}catch(e){s(e)}}function d(t){t.done?a(t.value):new i(function(e){e(t.value)}).then(n,h)}d((r=r.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){function i(t){return function(e){return r([t,e])}}function r(i){if(a)throw new TypeError("Generator is already executing.");for(;d;)try{if(a=1,s&&(n=s[2&i[0]?"return":i[0]?"throw":"next"])&&!(n=n.call(s,i[1])).done)return n;switch(s=0,n&&(i=[0,n.value]),i[0]){case 0:case 1:n=i;break;case 4:return d.label++,{value:i[1],done:!1};case 5:d.label++,s=i[1],i=[0];continue;case 7:i=d.ops.pop(),d.trys.pop();continue;default:if(n=d.trys,!(n=n.length>0&&n[n.length-1])&&(6===i[0]||2===i[0])){d=0;continue}if(3===i[0]&&(!n||i[1]>n[0]&&i[1]<n[3])){d.label=i[1];break}if(6===i[0]&&d.label<n[1]){d.label=n[1],n=i;break}if(n&&d.label<n[2]){d.label=n[2],d.ops.push(i);break}n[2]&&d.ops.pop(),d.trys.pop();continue}i=e.call(t,d)}catch(r){i=[6,r],s=0}finally{a=n=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}var a,s,n,h,d={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return h={next:i(0),"throw":i(1),"return":i(2)},"function"==typeof Symbol&&(h[Symbol.iterator]=function(){return this}),h},Main=function(t){function e(){var e=t.call(this)||this;return e.cards=[],e.cardsPos=[],e.leaveCards=54,e.dealCards=[],e.selectedCards=[],e.endTarget=new egret.Point,e.faceCards=[],e.dealing=!1,e.addEventListener(egret.Event.ADDED_TO_STAGE,e.onAddToStage,e),e}return __extends(e,t),e.prototype.onAddToStage=function(t){egret.lifecycle.addLifecycleListener(function(t){t.onUpdate=function(){}}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()},this.runGame()["catch"](function(t){console.log(t)})},e.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return[4,this.loadResource()];case 1:return t.sent(),this.createGameScene(),[2]}})})},e.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(i){switch(i.label){case 0:return i.trys.push([0,3,,4]),t=new LoadingUI,this.stage.addChild(t),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return i.sent(),[4,RES.loadGroup("preload",0,t)];case 2:return i.sent(),this.stage.removeChild(t),[3,4];case 3:return e=i.sent(),console.error(e),[3,4];case 4:return[2]}})})},e.prototype.createGameScene=function(){this.addGameBackground(),this.addGameUI(),this.createCards(),this.setCardPos(),this.setdealCards(),this.initGame(),this.menuManage.open("intro",null)},e.prototype.test=function(){for(var t=0;54>t;t++)this.faceCards.push(this.cards[t]),this.cards[t].x=this.endTarget.x,this.cards[t].y=50+5*t,this.setChildIndex(this.cards[t],t+20);this.replayGame()},e.prototype.test2=function(){this.addChild(this.endEffect),this.endEffect.x=400,this.endEffect.y=500,this.endEffect.startPlay()},e.prototype.addGameBackground=function(){var t=new egret.Shape;t.graphics.beginFill(2640246),t.graphics.drawRect(0,0,this.stage.stageWidth,this.stage.stageHeight),this.addChild(t);var e=new egret.Shape;e.graphics.beginFill(16777215,.1),e.graphics.drawRect(0,0,500,692),e.x=250,e.y=50,this.addChild(e);var i=this.createBitmapByName("title");this.addChild(i)},e.prototype.addGameUI=function(){var t=this.createBitmapByName("startBtn");t.x=70,t.y=580,this.addChild(t),t.touchEnabled=!0,t.addEventListener(egret.TouchEvent.TOUCH_BEGIN,function(){54!=this.leaveCards||this.dealing||this.deal(16,this.cardsPos)},this);var e=this.createBitmapByName("updateBtn");e.x=70,e.y=660,this.addChild(e),e.touchEnabled=!0,e.addEventListener(egret.TouchEvent.TOUCH_BEGIN,function(){this.dealing||this.initGame()},this);var i=this.createBitmapByName("helpBtn");i.x=10,i.y=720,i.width=30,i.height=30,this.addChild(i),i.touchEnabled=!0,i.addEventListener(egret.TouchEvent.TOUCH_BEGIN,function(){this.menuManage.open("intro",null)},this),this.replayBtn=this.createBitmapByName("replayBtn"),this.replayBtn.x=850,this.replayBtn.y=715,this.replayBtn.width=70,this.replayBtn.height=25,this.addChild(this.replayBtn),this.replayBtn.touchEnabled=!0,this.replayBtn.visible=!1,this.replayBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN,function(){this.endEffect.stop(),this.replayGame()},this),this.player1=new Player,this.addChild(this.player1),this.player1.x=795,this.player1.y=50,this.player1.headID=0,this.player1.cardPot.x=885,this.player1.cardPot.y=60,this.player1.head.touchEnabled=!0,this.player1.head.addEventListener(egret.TouchEvent.TOUCH_BEGIN,function(){this.menuManage.open("headImgs",this.player1)},this),this.player2=new Player,this.addChild(this.player2),this.player2.x=795,this.player2.y=390,this.player2.headID=1,this.player2.cardPot.x=885,this.player2.cardPot.y=400,this.player2.head.touchEnabled=!0,this.player2.head.addEventListener(egret.TouchEvent.TOUCH_BEGIN,function(){this.menuManage.open("headImgs",this.player2)},this),this.endEffect=new SpEffect},e.prototype.initGame=function(){this.initCards(),this.cleardealCards(),this.player1.focus=!1,this.player2.focus=!1,this.player1.cardNum=0,this.player2.cardNum=0,this.currentPlayer=this.player1,this.currentPlayer.focus=!0,this.endTarget=this.currentPlayer.cardPot,this.faceCards=[],this.menuManage=MenuManage.getInstance(this.stage)},e.prototype.createCards=function(){var t=["a","b","c","d"];this.cards=[];for(var e=0;13>e;e++)for(var i=0;4>i;i++){var r=t[i]+(e+1),a="cards_json#back",s=new Card(r,a);s.touchEnabled=!0,s.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.cardClickHandler,this),this.addChild(s),this.cards.push(s)}for(var i=1;2>=i;i++){var r="e"+i,a="cards_json#back",s=new Card(r,a);s.touchEnabled=!0,s.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.cardClickHandler,this),this.addChild(s),this.cards.push(s)}},e.prototype.initCards=function(){this.shuffer(this.cards);for(var t=0;t<this.cards.length;t++)this.addChild(this.cards[t]),this.cards[t].alpha=0,this.cards[t].rotation=0,this.cards[t].x=125,this.cards[t].y=50+5*t,this.cards[t].isdeal=!1,this.cards[t].state!=CardState.BACK&&this.cards[t].reverse(),this.setChildIndex(this.cards[t],t+10),egret.Tween.get(this.cards[t]).to({alpha:1},500);this.selectedCards=[],this.leaveCards=54},e.prototype.setCardPos=function(){for(var t=0;4>t;t++)for(var e=0;4>e;e++){var i=new egret.Point;i.x=314+124*e,i.y=54+172*t,this.cardsPos.push(i)}},e.prototype.setdealCards=function(){for(var t=0;16>t;t++)this.dealCards.push(null)},e.prototype.cleardealCards=function(){for(var t=0;16>t;t++)this.dealCards[t]=null},e.prototype.cardClickHandler=function(t){var e=t.currentTarget;if(e.isdeal&&!(this.selectedCards.length>=2)&&e.state==CardState.BACK&&(this.selectedCards.push(e),e.reverse(),2==this.selectedCards.length)){var i=this.selectedCards[0].faceID.substr(0,1),r=this.selectedCards[1].faceID.substr(0,1),a=this.selectedCards[0].faceID.slice(1),s=this.selectedCards[1].faceID.slice(1);"e"==i&&"e"==r||"e"!=i&&"e"!=r&&a==s?this.right():this.wrong()}},e.prototype.wrong=function(){egret.setTimeout(function(){this.selectedCards[0].reverse(),this.selectedCards[1].reverse(),this.selectedCards=[],this.currentPlayer.focus=!1,this.currentPlayer==this.player1?this.currentPlayer=this.player2:this.currentPlayer=this.player1,this.currentPlayer.focus=!0,this.endTarget=this.currentPlayer.cardPot},this,1e3)},e.prototype.right=function(){egret.setTimeout(function(){var t=this.selectedCards[0],e=this.selectedCards[1];egret.Tween.get(t).to({x:this.endTarget.x,y:this.endTarget.y},200),egret.Tween.get(e).to({x:this.endTarget.x,y:this.endTarget.y},200);var i=this.cardsPos[this.dealCards.indexOf(t)],r=this.cardsPos[this.dealCards.indexOf(e)];this.faceCards.push(t),this.faceCards.push(e),this.setChildIndex(t,this.faceCards.length+54),this.setChildIndex(e,this.faceCards.length+55),egret.setTimeout(function(){this.currentPlayer.cardNum+=2,this.leaveCards>0&&this.deal(2,[i,r]),this.selectedCards=[],54==this.faceCards.length&&this.gameOver()},this,200)},this,1e3)},e.prototype.gameOver=function(){this.player1.focus=!1,this.player2.focus=!1;var t=this.player1.cardNum>this.player2.cardNum?this.player1:this.player2;t.focus=!0,this.addChild(this.endEffect),this.endEffect.x=t.cardPot.x,this.endEffect.y=t.cardPot.y+80,this.endEffect.startPlay(),this.replayBtn.visible=!0},e.prototype.replayGame=function(){this.replayBtn.visible=!1;for(var t=0;t<this.faceCards.length;t++)egret.setTimeout(function(){var t=this.faceCards.pop();console.log(t);var e=new egret.Point;e.x=-400+Math.random()*this.stage.stageWidth,e.y=Math.random()*this.stage.stageHeight+200,egret.Tween.get(t).to({x:e.x,y:e.y,alpha:0,rotation:360},1e3)},this,50*(54-t));egret.setTimeout(function(){this.initGame()},this,4e3)},e.prototype.deal=function(t,e){this.dealing=!0;for(var i=function(t,i){egret.setTimeout(function(){var r=this.cards[t],a=this.cardsPos.indexOf(e[i]);this.setChildIndex(r,t+10+54),egret.Tween.get(r).to({x:e[i].x,y:e[i].y},100).call(function(){r.isdeal=!0,this.dealCards[a]=r,this.setChildIndex(r,t+10)},this)},r,110*i)},r=this,a=this.leaveCards-1,s=0;a>=this.leaveCards-t;a--,s++)i(a,s);egret.setTimeout(function(){this.leaveCards-=t,this.dealing=!1},this,110*t+10)},e.prototype.shuffer=function(t){for(var e=0,i=t.length;i>e;e++){var r=Math.floor(Math.random()*i),a=t[e];t[e]=t[r],t[r]=a}},e.prototype.createBitmapByName=function(t){var e=new egret.Bitmap,i=RES.getRes(t);return e.texture=i,e},e}(egret.DisplayObjectContainer);__reflect(Main.prototype,"Main");var Button=function(t){function e(){var e=t.call(this)||this;return e.draw(),e}return __extends(e,t),e.prototype.draw=function(){var t=new egret.Shape;t.graphics.lineStyle(1,28282),t.graphics.beginFill(9753036),t.graphics.drawRoundRect(0,0,70,30,20,20),this.addChild(t);var e=new egret.TextField;e.text="确定",e.fontFamily="微软雅黑",e.width=70,e.height=30,e.textColor=18512,e.size=15,e.textAlign="center",e.verticalAlign="middle",this.addChild(e)},e}(egret.Sprite);__reflect(Button.prototype,"Button");var HeadImgs=function(t){function e(){var e=t.call(this)||this;return e._selected=[],e._headMcs=[],e.draw(),e.fillHeadImgs(),e.init(),e.addEventListener(egret.Event.ADDED_TO_STAGE,function(){this.setState()},e),e}return __extends(e,t),e.getInstance=function(){return null==this._instance&&(this._instance=new e),this._instance},e.prototype.init=function(){this._currenthead=null,this._selected=[this._headMcs[0],this._headMcs[1]],this.setState()},Object.defineProperty(e.prototype,"currentPlayer",{set:function(t){this._currentPlayer=t,this._currentheadID=t.headID,this._currenthead=this._headMcs[this._currentheadID],this.setState()},enumerable:!0,configurable:!0}),e.prototype.close=function(){this._selected.push(this._currenthead),this.parent.removeChild(this)},e.prototype.draw=function(){var t=new egret.Shape;t.graphics.beginFill(0,.6),t.graphics.drawRect(10,10,400,200),this.addChild(t);var e=new egret.Shape;e.graphics.beginFill(16777215),e.graphics.drawRect(0,0,400,200),this.addChild(e);var i=new egret.Shape;i.graphics.beginFill(41394),i.graphics.drawRect(0,0,400,40),this.addChild(i);var r=new egret.TextField;r.text="请选择你喜欢的头像",r.textColor=16777215,r.fontFamily="微软雅黑",r.size=20,r.x=20,r.y=10,this.addChild(r);var a=new Button;this.addChild(a),a.x=300,a.y=160,a.touchEnabled=!0,a.addEventListener(egret.TouchEvent.TOUCH_BEGIN,function(){this._selected.push(this._currenthead),this.close()},this)},e.prototype.fillHeadImgs=function(){for(var t=0;4>t;t++){var e=this.createBitmapByName("headpic_json#h"+(t+1)),i=new HeadMc(e);this._headMcs.push(i),i.x=20+90*t,i.y=60,i.headID=t,this.addChild(i),i.touchEnabled=!0,i.addEventListener(egret.TouchEvent.TOUCH_BEGIN,function(t){var e=t.currentTarget;-1==this._selected.indexOf(e)&&(this._currentPlayer.headID=e.headID,this._currenthead=e,this.setState())},this)}},e.prototype.setState=function(){for(var t=0;t<this._headMcs.length;t++)this._headMcs[t].state="nomal";if(this._selected.length>0){for(var e=0;e<this._selected.length;e++)null!=this._currenthead&&this._selected[e].headImg==this._currenthead.headImg&&this._selected.splice(e,1);for(var t=0;t<this._selected.length;t++)this._selected[t].state="selected"}null!=this._currenthead&&(this._currenthead.state="current")},e.prototype.createBitmapByName=function(t){var e=new egret.Bitmap,i=RES.getRes(t);return e.texture=i,e},e}(egret.Sprite);__reflect(HeadImgs.prototype,"HeadImgs");var HeadMc=function(t){function e(e){var i=t.call(this)||this;return i._state="noselected",i._headImg=e,i.create(),i}return __extends(e,t),Object.defineProperty(e.prototype,"state",{set:function(t){this._state=t,this.draw()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"headID",{get:function(){return this._headID},set:function(t){this._headID=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"headImg",{get:function(){return this._headImg},set:function(t){this._headImg=t},enumerable:!0,configurable:!0}),e.prototype.create=function(){this._bg=new egret.Shape,this.addChild(this._bg),this.addChild(this._headImg),this._headImg.width=80,this._headImg.height=80},e.prototype.draw=function(){this._bg.graphics.clear(),"current"==this._state&&this._bg.graphics.lineStyle(2,16711680),this._bg.graphics.beginFill(16777215),this._bg.graphics.drawRect(0,0,80,80),"selected"==this._state?this.alpha=.2:this.alpha=1},e}(egret.Sprite);__reflect(HeadMc.prototype,"HeadMc");var Instruction=function(t){function e(){var e=t.call(this)||this;return e.draw(),e}return __extends(e,t),e.getInstance=function(){return null==this._instance&&(this._instance=new e),this._instance},e.prototype.draw=function(){var t=new egret.Shape;t.graphics.beginFill(0,1),t.graphics.drawRect(0,0,1024,768),this.addChild(t);var e=this.createBitmapByName("intro");e.x=0,e.y=150,this.addChild(e);var i=this.createBitmapByName("introCloseBtn");i.x=800,i.y=460,this.addChild(i),i.touchEnabled=!0,i.addEventListener(egret.TouchEvent.TOUCH_BEGIN,function(){this.close()},this)},e.prototype.close=function(){egret.Tween.get(this).to({alpha:0},200).call(function(){-1!=this.parent.getChildIndex(this)&&this.parent.removeChild(this)})},e.prototype.createBitmapByName=function(t){var e=new egret.Bitmap,i=RES.getRes(t);return e.texture=i,e},e}(egret.Sprite);__reflect(Instruction.prototype,"Instruction");var LoadingUI=function(t){function e(){var e=t.call(this)||this;return e.createView(),e}return __extends(e,t),e.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.y=300,this.textField.width=480,this.textField.height=100,this.textField.textAlign="center"},e.prototype.onProgress=function(t,e){this.textField.text="Loading..."+t+"/"+e},e}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var CardState;!function(t){t[t.FACE=0]="FACE",t[t.BACK=1]="BACK",t[t.REVERSING=2]="REVERSING"}(CardState||(CardState={}));var Card=function(t){function e(e,i){var r=t.call(this)||this;return r._speed=.1,r._isdeal=!1,r.width=120,r.height=168,r.anchorOffsetX=r.width/2,r._faceID=e,r._backID=i,r.draw(),r}return __extends(e,t),Object.defineProperty(e.prototype,"faceID",{get:function(){return this._faceID},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"state",{get:function(){return this._state},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isdeal",{get:function(){return this._isdeal},set:function(t){this._isdeal=t},enumerable:!0,configurable:!0}),e.prototype.init=function(){this._state=CardState.FACE,this.reverse()},e.prototype.reverse=function(){this._state!=CardState.REVERSING&&(this._stateBeforeReverse=this._state,this._state=CardState.REVERSING,egret.startTick(this.enterFrameHandler,this))},e.prototype.draw=function(){var t=RES.getRes(this._faceID);this._faceImg=new egret.Bitmap(t),this._faceImg.width=this.width,this._faceImg.height=this.height;var e=RES.getRes(this._backID);this._backImg=new egret.Bitmap(e),this._backImg.width=this.width,this._backImg.height=this.height,this.addChild(this._backImg),this._state=CardState.BACK},e.prototype.enterFrameHandler=function(){return this.scaleX-=this._speed,Math.abs(this.scaleX)<.1&&(this._stateBeforeReverse==CardState.FACE?(-1!=this.getChildIndex(this._faceImg)&&this.removeChild(this._faceImg),this.addChild(this._backImg)):(-1!=this.getChildIndex(this._backImg)&&this.removeChild(this._backImg),this.addChild(this._faceImg)),this._speed=-.1),1==this.scaleX&&(egret.stopTick(this.enterFrameHandler,this),this._stateBeforeReverse==CardState.FACE?this._state=CardState.BACK:this._state=CardState.FACE,this._speed=.1),!0},e}(egret.Sprite);__reflect(Card.prototype,"Card");var MenuManage=function(){function t(t){this._stage=t}return t.getInstance=function(e){return null==this._instance&&(this._instance=new t(e)),this._instance},t.prototype.open=function(t,e){switch(t){case"headImgs":var i=HeadImgs.getInstance();this._stage.addChild(i),i.currentPlayer=e,i.x=310,i.y=300;break;case"intro":var r=Instruction.getInstance();this._stage.addChild(r),egret.Tween.get(r).to({alpha:1},200)}},t.prototype.close=function(t){switch(t){case"headImgs":this._headImgs=HeadImgs.getInstance(),-1!=this._stage.getChildIndex(this._headImgs)&&this._stage.removeChild(this._headImgs)}},t}();__reflect(MenuManage.prototype,"MenuManage");var DebugPlatform=function(){function t(){}return t.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2,{nickName:"username"}]})})},t.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2]})})},t}();__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new DebugPlatform);var Player=function(t){function e(){var e=t.call(this)||this;return e._cardnum=0,e._headID=0,e._focus=!1,e._bg=new egret.Shape,e._headImgs=[],e._cardPot=new egret.Point,e._frameShape=new egret.Shape,e.createHeadImgs(),e.draw(),e}return __extends(e,t),Object.defineProperty(e.prototype,"cardNum",{get:function(){return this._cardnum},set:function(t){this._cardnum=t,this._cardNumText.text=String(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"headID",{get:function(){return this._headID},set:function(t){this._headID=t,this._headImg=this._headImgs[t];for(var e=0;e<this._headImgs.length;e++)-1!=this._head.getChildIndex(this._headImgs[e])&&this._head.removeChild(this._headImgs[e]);this._head.addChild(this._headImg),this._headImg.mask=this._mask},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"head",{get:function(){return this._head},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"focus",{set:function(t){this._focus=t,this.drawFrameShape()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"cardPot",{get:function(){return this._cardPot},enumerable:!0,configurable:!0}),e.prototype.createHeadImgs=function(){for(var t=0;4>t;t++){var e=this.createBitmapByName("headpic_json#h"+(t+1));e.width=60,e.height=60,e.x=-e.width/2,e.y=-e.height/2,e.mask=this._mask,this._headImgs.push(e)}this._headImg=this._headImgs[this._headID]},e.prototype.draw=function(){this.addChild(this._frameShape),this.drawFrameShape(),this.addChild(this._bg),this.drawbg(),this.drawfooter(),this._head=this.createHeadpic(),this._head.x=40,this._head.y=235,this.addChild(this._head);var t=this.createCardNumInfo();t.x=90,t.y=235,this.addChild(t)},e.prototype.drawFrameShape=function(){this._frameShape.graphics.clear(),this._focus&&this._frameShape.graphics.lineStyle(2,16776960),this._frameShape.graphics.beginFill(16777215,0),this._frameShape.graphics.drawRoundRect(-5,-5,190,305,20,20),this._frameShape.graphics.endFill()},e.prototype.drawbg=function(){this._bg.graphics.clear(),this._bg.graphics.beginFill(16777215,.2),this._bg.graphics.drawRoundRect(0,0,180,295,20,20),this._bg.graphics.endFill()},e.prototype.drawfooter=function(){var t=new egret.Shape;t.graphics.beginFill(41394),t.graphics.drawRoundRect(0,190,180,105,20,20),t.graphics.endFill(),this.addChild(t);var e=new egret.Shape;e.graphics.beginFill(41394),e.graphics.drawRect(0,220,180,75),e.graphics.endFill(),e.mask=t,this.addChild(e)},e.prototype.createHeadpic=function(){var t=new egret.Sprite,e=new egret.Shape;e.graphics.lineStyle(4,41394),e.graphics.beginFill(16777215),e.graphics.drawCircle(0,0,30),e.graphics.endFill(),t.addChild(e),this._mask=new egret.Shape,this._mask.graphics.beginFill(41394),this._mask.graphics.drawCircle(0,0,28),this._mask.graphics.endFill(),t.addChild(this._mask),this._headImg.x=-this._headImg.width/2,this._headImg.y=-this._headImg.height/2,this._headImg.mask=this._mask,t.addChild(this._headImg);var i=new egret.Shape;i.graphics.lineStyle(1,28282),i.graphics.beginFill(9753036),i.graphics.drawRoundRect(-this._headImg.width/2-7,32,this._headImg.width+15,25,20,20),t.addChild(i);var r=new egret.TextField;return r.text="设置头像",r.fontFamily="微软雅黑",r.textColor=18512,r.size=15,r.x=-this._headImg.width/2,r.y=36,t.addChild(r),t},e.prototype.createCardNumInfo=function(){var t=new egret.Sprite;this._cardNumText=new egret.TextField,this._cardNumText.text=String(54),this._cardNumText.width=60,this._cardNumText.size=50,this._cardNumText.textAlign="center",t.addChild(this._cardNumText);var e=new egret.TextField;return e.text="张",e.size=20,e.textAlign="center",e.x=60,e.y=20,t.addChild(e),t},e.prototype.createBitmapByName=function(t){var e=new egret.Bitmap,i=RES.getRes(t);return e.texture=i,e},e}(egret.Sprite);__reflect(Player.prototype,"Player");var SpEffect=function(t){function e(){var e=t.call(this)||this;return e._effectMcs=[],e._addStages=[],e._vxs=[],e._vys=[],e._gravity=.8,e._radius=400,e._runing=!1,e.setEffectMcs(),e}return __extends(e,t),e.prototype.startPlay=function(){this._runing=!0;for(var t=function(t){egret.setTimeout(function(){this._runing&&(this._addStages.push(this._effectMcs[t]),this.addChild(this._effectMcs[t]))},e,50*t)},e=this,i=0;50>i;i++)t(i);this.addEventListener(egret.Event.ENTER_FRAME,this.enterFrameHandler,this)},e.prototype.stop=function(){this._runing=!1,this.removeEventListener(egret.Event.ENTER_FRAME,this.enterFrameHandler,this);for(var t=0;t<this._effectMcs.length;t++)-1!=this.getChildIndex(this._effectMcs[t])&&this.removeChild(this._effectMcs[t]);this._addStages=[]},e.prototype.setEffectMcs=function(){for(var t=0;50>t;t++){var e=10*Math.random()-5,i=20*-Math.random();this._vxs.push(e),this._vys.push(i)}for(var t=0;100>t;t++){var r=this.createBitmapByName("tx"+(t%4+1));this._effectMcs.push(r)}},e.prototype.createBitmapByName=function(t){var e=new egret.Bitmap,i=RES.getRes(t);return e.texture=i,e},e.prototype.enterFrameHandler=function(){this._addStages.forEach(function(t,e){t.rotation+=5,t.alpha-=.01,t.x+=this._vxs[e],this._vys[e]+=this._gravity,t.y+=this._vys[e],t.y>300&&(this._vxs[e]=10*Math.random()-5,this._vys[e]=20*-Math.random(),t.x=0,t.y=0,t.alpha=1)},this)},e}(egret.Sprite);__reflect(SpEffect.prototype,"SpEffect");