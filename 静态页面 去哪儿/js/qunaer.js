// ----------------------------------header------------------------------------
var chakandingdang = $("#chakandingdang");
var hed_ul_dingdang = $("#header_ul_dingdang");
var home1 = $("#home1");
var home2 = $("#home2");

chakandingdang.onmouseover = function() {
	hed_ul_dingdang.style.display = "block";
}

home1.onmouseover = function() {
	hed_ul_dingdang.style.display = "none";
}

home2.onmouseover = function() {
	hed_ul_dingdang.style.display = "none";
}

for (var i = 1; i < hed_ul_dingdang.children.length; i++) {
	hed_ul_dingdang.children[i].onmouseover = function() {
		for (var j = 0; j < hed_ul_dingdang.children.length; j++) {
			hed_ul_dingdang.children[j].children[0].className = "";
		}
	}
}




var header_title = $("#hed_tit");
for (var i = 0; i < header_title.children.length; i++) {
	header_title.children[i].index = i;
	header_title.children[i].onmouseover = function() {
		for (var j = 0; j < header_title.children.length; j++) {
			header_title.children[j].children[0].className = "";
			header_title.children[j].className = "";
		}
		this.children[0].className = "con";
		if (this.children[1]) {
			var n = this.index;
			setTimeout(function() {
				header_title.children[n].className = "con";
				header_title.children[n].children[1].style.display = "block";
			}, 200);

		}
	}
	header_title.children[i].onmouseout = function() {
		for (var j = 0; j < header_title.children.length; j++) {
			header_title.children[j].className = "";
			if (this.children[1]) {
				this.children[1].style.display = "none";
			}
		}
	}
}



// home1_info_box
// var home1_info_list = $("#home1_info_list");
// var hid_info = $ = home1_info_list.getElementsByClassName("info");
// var home1_list = $("#home1_list");
// 
// 
// 
// for (var i = 0; i < home1_list.children.length; i++) {
// 	home1_list.children[i].onclick = function() {
// 		for (var j = 0; j < home1_list.children.length; j++) {
// 			hid_info[j].style.display = "none";
// 			
// 		}
// 
// 	}
// }












// ------------------------------slide ---------------------------
var ul = $(".slide_img")[0];
var ol = $(".slide_radio")[0];
var num = 0;

for (var i = 0; i < ol.children.length; i++) {
	ol.children[i].index = i;
	ol.children[i].onclick = function() {
		num = this.index;
		slide(num);
	}
}

var leader = 0;
var target = 0;

function slide(z) {
	for (var i = 0; i < ol.children.length; i++) {
		ol.children[i].className = "fl";
	}
	ol.children[z].className = "fl con";
	target = z * 945;
}

setInterval(clock, 10)

function clock() {
	if (leader < target) {
		leader = leader + (target - leader) / 10;
		ul.style.left = -leader + "px";
	} else {
		leader = leader - (leader - target) / 10;
		ul.style.left = -leader + "px";
	}
}
