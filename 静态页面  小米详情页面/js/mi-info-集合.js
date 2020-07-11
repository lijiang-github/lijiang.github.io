window.onload = function() {

	//-------------------------------------------- 小米头部----------------------------------------------
	// -----------搜索框------------
	var header_inp = document.getElementById("header_inp");
	var header_btn = document.getElementById("header_btn");
	var header_hidlist = document.getElementById("header_hidlist");
	var header_search_con = 0;
	header_inp.onfocus = function() {
		header_inp.style.borderColor = "#FF6700";
		header_btn.style.borderColor = "#FF6700";
		header_hidlist.style.display = "block";
		header_search_con = 1;
	}
	header_inp.onblur = function() {
		header_inp.style.borderColor = "#E0E0E0";
		header_btn.style.borderColor = "#E0E0E0";
		header_hidlist.style.display = "none";
		header_search_con = 0;
	}

	header_inp.onmouseover = function() {
		if (header_search_con == 0) {
			header_inp.style.borderColor = "#B0B0B0";
			header_btn.style.borderColor = "#B0B0B0";
		}
	}
	header_inp.onmouseout = function() {
		if (header_search_con == 0) {
			header_inp.style.borderColor = "#E0E0E0";
			header_btn.style.borderColor = "#E0E0E0";
		}
	}

	//----------------------------选择-----------------------------------
	//版本
	var info_btns = document.getElementsByClassName("info-Abtn1");

	for (var i = 0; i < info_btns.length; i++) {
		info_btns[i].index = i;
		info_btns[i].beforeClass = info_btns[i].className;
		info_btns[i].onclick = function() {
			info_BTN(this.index);
		}
	}
	
	function info_BTN(index) {
		for (var i = 0; i < info_btns.length; i++) {
			// 初始化
			info_btns[i].className = info_btns[i].beforeClass;
		}
		info_btns[index].className += " con";
	}
	
	//颜色
	var info_btns2 = document.getElementsByClassName("info-Abtn2");
	
	for (var i = 0; i < info_btns2.length; i++) {
		info_btns2[i].index = i;
		info_btns2[i].beforeClass = info_btns2[i].className;
		info_btns2[i].onclick = function() {
			info_BTN2(this.index);
		}
	}
	 
	function info_BTN2(index) {
		for (var i = 0; i < info_btns2.length; i++) {
			// 初始化
			info_btns2[i].className = info_btns2[i].beforeClass;
		}
		info_btns2[index].className += " con";
	}
	
	//套餐
	var info_btns3 = document.getElementsByClassName("info-Abtn3");
	
	for (var i = 0; i < info_btns3.length; i++) {
		info_btns3[i].index = i;
		info_btns3[i].beforeClass = info_btns3[i].className;
		info_btns3[i].onclick = function() {
			info_BTN3(this.index);
		}
	}
	 
	function info_BTN3(index) {
		for (var i = 0; i < info_btns3.length; i++) {
			// 初始化
			info_btns3[i].className = info_btns3[i].beforeClass;
		}
		info_btns3[index].className += " con";
	}
	// ----------------------保修保险业务-----------------------------
	
	var box5_btn = $("#box5_btn");
	for (var i = 0; i < box5_btn.children.length; i++) {
		box5_btn.children[i].index = i;
		box5_btn.children[i].beforeClass = box5_btn.children[i].className;
		box5_btn.children[i].onclick = function() {
			info_box5_btn(this.index);
		}
	}
	 
	function info_box5_btn(index) {
		for (var i = 0; i < box5_btn.children.length; i++) {
			// 初始化
			box5_btn.children[i].className = box5_btn.children[i].beforeClass;
		}
		console.log(box5_btn.children[index].className);
		if(box5_btn.children[index].className == "but2"){
			box5_btn.children[index].className += " special_style1";
		}
		box5_btn.children[index].className += " con";
	}

	//-----------------------------------绝对定位------------------------------


	var fix_1 = $("#fix_1");
	var fix_2 = $("#fix_2");
	window.onscroll = function() {
		var event = event || window.event;
		if (scroll().top >= 212) {
			fix_1.style.position = "fixed";
			fix_1.style.top = "0px";
			fix_1.style.zIndex = "1000";
			fix_2.style.position = "fixed"
			fix_2.style.top = "63px";
			fix_2.style.zIndex = "999";
		} else if (scroll().top < 212) {
			fix_1.style.position = null;
			fix_2.style.position = null;
		}
		if (scroll().top >= 1077) {
			fix_2.style.position = "absolute"
			fix_2.style.bottom = "0";
			fix_2.children[0].style.position = "absolute";
			fix_2.children[0].style.bottom = "0";
		} else {
			fix_2.children[0].style.position = null;

		}
	}



	//-----------------------base.js-------------------
	function $(str) { //解决获取标签 id class的兼容问题
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









}
