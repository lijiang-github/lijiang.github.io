//-------------------------------------home2------------------------------
window.onload = function(){
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