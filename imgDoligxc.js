<script type="text/javascript">
var jumpUrl = "http://www.duoqu.com/game/play/index/g/57/s/0";
dj.addEvent(window, 'load', function(){
	/*
	** path为flash地址
	** Width为flash宽度
	** Height为flash高度
	** href为跳转地址
	** time为自动关闭时间
	*/
	imgDolig.init({
		path : "http://s0.static.duoqu.com/www/v2/img/global/game_ad_57.swf",
		Width:  800,
		Height : 450,
		href : jumpUrl,
		time: 10000,
		closeRight : "38px",
		hrefLeft : "281px",
		hrefBottom : "38px"
	}).show();
});

function GetUrl(){
	return jumpUrl;
}
var imgDolig = {
	path :'',
	Width :"",
	Height :"",
	boxId : "imgDoligbox",
	divId :'imgDoligdiv',
	init : function (ops){
		for (var i in ops) {
			this[i] = ops[i];
		}
		return this;
	},
	show : function (){
		var ele = this.createDom();
		ele.id = this.divId;
		ele.style.position = "fixed";
		ele.style.width = this.Width  + "px";
		ele.style.height = this.Height + "px";
		ele.style.left = "50%";
		ele.style.top = "50%";
		ele.style.zIndex = 10000;
		ele.style.marginLeft = - this.Width/ 2 + 'px';
		ele.style.marginTop = - this.Height /2 + "px";
		var arr = [];
		arr.push("<div style='position:relative;'>");
		arr.push("<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0' width="+this.Width+" height="+this.Height+" id='firecracker'>");
		arr.push("<param name='allowScriptAccess' value='always' />");
		arr.push("<param name='movie' value="+this.path+">")
		arr.push("<param name='menu' value='false'>");
		arr.push("<param name='quality' value='high'>");
		arr.push("<param name='wmode' value='transparent'>");
		arr.push("<embed src="+this.path+" width="+this.Width+" height="+this.Height+" id='firecracker' name='firecracker' quality='high' wmode='transparent' allowScriptAccess='always'  pluginspage='http://www.macromedia.com/go/getflashplayer' type='application/x-shockwave-flash'>");
		arr.push("</embed>");
		arr.push("</object>");
		arr.push("<p id='imgDoligclose'style='position:absolute;width:50px;height:50px;right:"+this.closeRight+";top:0;cursor:pointer;background-color:#ccc;filter:alpha(opacity=0);opacity:0;' onclick='imgDolig.hide();return false'></p>");
		arr.push("<a href="+this.href+" target='_blank' id='imgDolighref'style='background-color:#ccc;filter:alpha(opacity=0);opacity:0;position:absolute;width:200px;height:73px;bottom:"+this.hrefBottom+";left:"+this.hrefLeft+";' ></a>");
		arr.push("</div>");
		ele.innerHTML = arr.join("");
		var that = this;
		setTimeout(function (){
			that.hide();
		},this.time);
	},
	hide : function (){
		var that = this;
		var el = document.getElementById(that.divId);
		var box = document.getElementById(that.boxId);
		if (el && el.parentNode) {
			el.parentNode.removeChild(el);
			box.parentNode.removeChild(box);
		}
	},
	createDom : function (){
		var bgdiv = document.createElement("div");
		var el = document.createElement("div");
		var Maxwidth = document.getElementsByTagName("body")[0].offsetHeight;
		bgdiv.id = this.boxId;
		var bgStyle = bgdiv.style;
		bgStyle.width = "100%";
		bgStyle.height = Maxwidth + "px";
		bgStyle.position = "absolute";
		bgStyle.zIndex = 9999;
		bgStyle.backgroundColor = "#000";
		bgStyle.top = "0px";
		bgStyle.left = '0px';
		bgStyle.opacity = "0.6";
		bgStyle.filter = "alpha(opacity=60)";
		var parent = document.body;
		parent.appendChild(bgdiv);
		parent.appendChild(el);
		return el;
	}
}
</script>