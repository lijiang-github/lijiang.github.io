window.onload = function(){//不能同时存在两个window.onload,若同时存在两个window.onload,将只执行第二个里面的代码

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


// -------------------------------小米home1---------------------------------------------
//-------------轮播图 小按钮--------------
	
	var Slide_imgs = document.getElementById("mizhuSlideImg").getElementsByTagName("img");
	var Slide_btns = document.getElementById("mizhuSlideBtn").getElementsByTagName("li");
	var Slide_cons = new Array(0, 0, 0, 0, 0);//此数组变量是为了令被点击触发事件的按钮不会再被徘徊触发事件影响
	var home1_con = 0;//此声明变量是给左右箭头的

	Slide_imgs[0].style.display = "block";//初始图片设定

	for (var i = 0; i < Slide_btns.length; i++) {
		Slide_btns[i].index = i;
		Slide_btns[i].onmouseover = function() {
			this.style.background = "rgba(255,255,255,0.25)";//触发更改按钮背景颜色
		}
		Slide_btns[i].onmouseout = function() {
			if (Slide_cons[this.index] == 0) {
				this.style.backgroundColor = "rgba(0,0,0,0.18)";
			}
		}
		Slide_btns[i].onclick = function() {
			Slide_btns_onclick(this.index);
		}
	}

	function Slide_btns_onclick(num) {
		for (var i = 0; i < Slide_btns.length; i++) {//全部重新初始化--按钮背景颜色---关联图片
			Slide_btns[i].style.backgroundColor = "rgba(0,0,0,0.18)";
			Slide_imgs[i].style.display = "none";
			Slide_cons[i] = 0;
		}
		//根据传值重新设定指定的被初始化的值
		Slide_btns[num].style.backgroundColor = "rgba(255,255,255,0.25)";
		Slide_imgs[num].style.display = "block";
		Slide_cons[num] = 1;
		home1_con = num;//这个是返回给左右箭头的值，左右箭头以此为起点左右切换图片

	}

	//轮播图左右箭头
	var home1_Lbtn = document.getElementById("home1_Lbtn");
	var home1_Rbtn = document.getElementById("home1_Rbtn");
	
	home1_Lbtn.onclick = function() {
		if (home1_con == 0) {
			home1_con = 5;
		}
		home1_con -= 1; //每被触发一次，都定位到本来图片的下一张图片
		Slide_btns_onclick(home1_con);
	}
	
	home1_Rbtn.onclick = function() {
		home1_con += 1;
		if (home1_con == 5) {
			home1_con = 0;
		}
		
		Slide_btns_onclick(home1_con);
	}

	//--------轮播图左边列表----------
	var lis = document.getElementById("categoryRList").getElementsByTagName("li");
	var hids = document.getElementsByClassName("hidden-box");

	for (var i = 0; i < lis.length; i++) {
		lis[i].index = i;
		lis[i].onmouseover = function() {
			this.style.backgroundColor = "#FF6700";
			hids[this.index].style.display = "block";
		}
		lis[i].onmouseout = function() {
			this.style.background = "url(images/arrow-right.png) no-repeat 200px 12px";
			hids[this.index].style.display = "none";
		}
	}
	//--------轮播图左边列表----------
	var lis = document.getElementById("categoryRList").getElementsByTagName("li");
	var hids = document.getElementsByClassName("hidden-box");
	
	for (var i = 0; i < lis.length; i++) {
		lis[i].index = i;
		lis[i].onmouseover = function() {
			this.style.backgroundColor = "#FF6700";
			hids[this.index].style.display = "block";
		}
		lis[i].onmouseout = function() {
			this.style.background = "url(images/arrow-right.png) no-repeat 200px 12px";
			hids[this.index].style.display = "none";
		}
	}

//-------------------------------------home2------------------------------
	var home2_btns = document.getElementById("home2-btn").getElementsByTagName("a");
	var home2_tables = document.getElementById("home2").getElementsByClassName("table");
	
	home2_tables[0].style.display ="block" ;
	home2_btns[0].style.borderBottom = "2px solid #FF6700";
	home2_btns[0].style.color = "#FF6700";
	//切换盒子动作
	for(var i = 0; i < home2_btns.length; i++){
		home2_btns[i].index = i;
		home2_btns[i].onmouseover = function(){
			home2_hid(this.index);
		}
	}
	
	function home2_hid(num){
		for(var i = 0; i< home2_btns.length; i++){
			home2_tables[i].style.display = "none";
			home2_btns[i].style.borderBottom = "hidden";
			home2_btns[i].style.color = "#424242";
		}
		home2_tables[num].style.display ="block" ;
		home2_btns[num].style.borderBottom = "2px solid #FF6700";
		home2_btns[num].style.color = "#FF6700";
	}
}