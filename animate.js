(function (window,document,undefined){
	var _aniQueue = [], //动画序列
		_baseUID = 0,	//动画序列UID基础值
		_aniUpdateTimer = 13,//动画更新时间
		_aniId = -1, //检测进程的ID
		isTicking = false, //检测状态
		/*
		optios 参数
		context 被操作的上下文
		effect 动画效果的算法
		time 效果的持续时间
		starCss 元素起始的偏移量
		css 元素结束时的偏移量
		*/
	window.animateManage = function (optios){
		this.context = optios;	//当前对象
	}
	animateManage.prototype = {
		init : function (){ //初始化方法
			this.start(this.context);
		},
		stop : function (_e){ //停止动画
			clearInterval(_aniId);
			isTicking = false;
		},
		start : function (optios){
			if (optios) {	//开始动画 
				this.pushQueue(optios); //填充队列属性
				if ( isTicking || _aniQueue.length === 0) {
					return false;
				}
				this.tick();
				return true;
			}
		},
		tick : function (){ //动画检测
			var self = this;
			isTicking = true;
			_aniId = setInterval(function(){
				if ( _aniQueue.length === 0 ) {
					self.stop();
				}else {
					for( var i = 0 , len = _aniQueue.length ; i < len ; i++ ){
						_aniQueue[i]&&self.go(_aniQueue[i],i);
					}
				}
			},_aniUpdateTimer)
		},
		go : function (_options,i){ //执行具体动画业务
			var n = this.now(),
				st = _options.startTime,
		} 
	}
})(window,document)