//获取 标签 id class的方法 函数
function $(str) {
	var s = str.substr(0, 1);
	var ss = str.substr(1);

	switch (s) {
		case "#":
			return document.getElementById(ss);
			break;

		case ".":
			return getClass(ss);
			break;

		default:
			return document.getElementsByTagName(str);
	}
}

//解决获取 class兼容的问题的 方法 函数
function getClass(classname) {
	if (document.getElementsByClassName(classname)) {
		return document.getElementsByClassName(classname);
	} else {
		var arr = document.getElementsByTagName("*");
		for (var i = 0; i < arr.length; i++) {
			var arr2 = arr[i].className.split(" ");
			for (var j = 0; j < arr2.length; j++) {
				if (arr2[j] == classname) {
					arr[0].push(arr[i]);
				}
			}
		}
		return arr[0];
	}
}
//获取当前滚动条下，网页上部分被隐藏内容的高度 
function scroll() { //解决滚动条数据获取的兼容问题
	if (window.pageYOffset != null) {
		return {
			top: window.pageYOffset,
			left: window.pageXOffset
		};
	}
	if (document.compatMode = "CSS1Compat") {
		return {
			top: window.document.documentElement.scrollTop,
			left: window.document.documentElement.scrollLeft
		};
	}
	return {
		top: document.body.scrollTop,
		left: document.body.scrollLeft
	};
}

//获取当前 网页的 宽 高 函数 返回对象
function client() {
	//ie9+ 最新浏览器兼容
	if (window.innerHeight != null) {
		return {
			width: window.innerWidth,
			height: window.innerHeight
		};
	}

	if (document.compatMode === "CSS1Compat") {
		//标准浏览器兼容
		return {
			width: document.documentElement.clientWidth,
			height: document.documentElement.clientHeight
		};
	}

	//怪异浏览器
	return {
		width: document.body.clientWidth,
		height: document.body.clientHeight
	};
	//解决client宽高兼容性问题
}

//解决拖动文字选择的方法
function removeSelection() {
	window.getSelection() ? window.getSelection().removeAllRanges() : document.selection.empty(); //兼容
}

//显示与隐藏的方法
function show(obj) {
	obj.style.display = "block";
}

function hidd(obj) {
	boj.style.display = "none";
}

//停止气泡的方法 解决气泡问题的方法 前提event要有，并解决了event的兼容问题 
function stopBubble() {
	if (event && event.stopPropagation) { //兼容
		event.stopPropagation(); //标准浏览器 w3c

	} else {
		event.cancelBubble = true; //ie 6,7,8
	}
}

//匀速公式封装 
function animate(obj, json, callback, time, speed) {
	if(obj.timer){
		clearInterval(obj.timer);
	}
	
	if (time == null) {
		time = 10;
	}
	
	obj.timer = setInterval(function() {
		for (attr in json) {
			var flag = true;
	
			for (attr in json) {
				var current = 0;
				//透明度兼容处理
				if(attr == "opacity"){
					current = Math.round(parseInt(getStyle(obj,attr)*100)) || 0;//0.3 == 30
				}else{
					current = parseInt(getStyle(obj, attr)); //200px 用parseInt取整去掉px
				}
				//计算步长
				if(speed != null){
					var step = json[attr] > current? speed:-speed;
				}else{
					var step = json[attr] > current? 5:-5;
				}
				//判断透明度
				if(attr == "opacity"){
					if("opacity" in obj.style){//浏览器兼容问题
						obj.style.opacity = (current + step) / 100;//0-1 0.3
					}else{
						obj.style.filter = "alpha(opacity:" + (current + step) * 10 + ")";
					}
				}else if(attr == "zIndex"){
					obj.style.zIndex = json[attr];
				}else{
					var num = true;
				}
				if (current != json[attr]) {
					if(num){
						obj.style[attr] = current + step + "px";
					}
					flag = false;
				}
				
					
			}
			if (flag) {
				if(callback){//回调函数
					callback();
				}
				clearInterval(obj.timer)
			}
		}
	
	}, time);
}

// 缓动公式封装 
function animateChange(obj, json, callback, time) {
	if(obj.timer){
		clearInterval(obj.timer);
	}
	if (time == null) {
		time = 20;
	}

	obj.timer = setInterval(function() {
		for (attr in json) {
			var flag = true;

			for (attr in json) {
				var current = 0;
				if(attr == "opacity"){
					current = Math.round(parseInt(getStyle(obj,attr)*100)) || 0;//0.3 == 30
				}else{
					current = parseInt(getStyle(obj, attr)); //200px 用parseInt取整去掉px
				}
				
				//计算步长
				var step = (json[attr] - current) / 10;
				step = step > 0 ? Math.ceil(step) : Math.floor(step);
				//判断透明度
				if(attr == "opacity"){
					if("opacity" in obj.style){//浏览器兼容问题
						obj.style.opacity = (current + step) / 100;//0-1 0.3
					}else{
						obj.style.filter = "alpha(opacity:" + (current + step) * 10 + ")";
					}
				}else if(attr == "zIndex"){
					obj.style.zIndex = json[attr];
				}else{
					// obj.style[attr] = current + step + "px";
				}
				if (current != json[attr]) {
					obj.style[attr] = current + step + "px";
					flag = false;
				}
			}
			if (flag) {
				if(callback){
					callback();
				}
				clearInterval(obj.timer)
			}
		}

	}, time);
}


// js的 css样式获取封装
// 解决浏览器兼容与行内式,内嵌式,外链式 获取样式
function getStyle(obj, attr) {
	if (obj.currentStyle) { //判断ie
		return obj.currentStyle[attr]; //返回兼容ie写法
	} else {
		return window.getComputedStyle(obj, null)[attr];
	}
}
