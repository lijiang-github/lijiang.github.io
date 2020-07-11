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













}
