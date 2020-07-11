window.onload = function(){
	
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
	
	// -----------------------------mi-proHome1轮播图------------------------------------
	// 按钮设置
		var proSImgs = document.getElementsByClassName("pro-slide-img");
		var proH1Rs = document.getElementById("pro-home1-radio").getElementsByTagName("a");
		var proS_con = new Array(0, 0);//判断语句的控制数组；
		var proS_con_2 = 0;//当前图片定位
		
		//初始化设置
		proSImgs[0].style.display = "block";
		proH1Rs[0].style.backgroundColor = "#DDDCF8";
		proS_con[0] = 1;
	
		for (var i = 0; i < proH1Rs.length; i++) {
			proH1Rs[i].index = i;
			proH1Rs[i].onclick = function() {
				proS1(this.index);
				proS_con_2 = this.index;
			}
	
			proH1Rs[i].onmouseover = function() {
				this.style.backgroundColor = "#DDDCF8";
			}
			proH1Rs[i].onmouseout = function() {
				if (proS_con[this.index] == 0) {//限制条件，由于触发事件函数是长期存在的，无法限制其的存在，所以就将判断语句写在触发事件函数的内部，限制该函数里的代码的运行！！！！
					this.style.backgroundColor = "#777692";
				}
			}
	
		}
	
		function proS1(num) {
			for (var i = 0; i < proH1Rs.length; i++) {
				//点击触发事件调用函数后全部初始化设置
				proSImgs[i].style.display = "none";
				proH1Rs[i].style.backgroundColor = "#777692";
				proS_con[i] = 0;
			}
			// 指定设置
			proSImgs[num].style.display = "block";
			proH1Rs[num].style.backgroundColor = "#DDDCF8";
			proS_con[num] = 1;//返回判断语句的控制值；
		}
		
		// -----------------左右箭头-----------
		var proSbtnL =document.getElementById("pro_slide_Lbtn");
		var proSbtnR =document.getElementById("pro_slide_Rbtn");
		
		proSbtnL.onclick = function(){
			if(proS_con_2 == 0){
				proS_con_2 = 2;
			}
			proS_con_2 -= 1;
			proS1(proS_con_2);
		}
		
		proSbtnR.onclick = function(){
			proS_con_2 += 1;
			if(proS_con_2 == 2){
				proS_con_2 = 0;
			}
			proS1(proS_con_2);
		}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}