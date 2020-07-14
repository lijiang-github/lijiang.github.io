//----------home3------------
var H3_TitBox = $("#home3_TitBox");
var goal_H3_1 = H3_TitBox.offsetTop;//取初值
H3_TitBox.style.top = H3_TitBox.offsetHeight + "px";

var H3_img = $("#home3_img");
var goal_H3_2 = H3_img.offsetTop;//取初值
H3_img.style.top = H3_img.offsetHeight + "px";

//----------固定定位----------
var fd = $("#fd");
var goal_fd = fd.offsetTop;//取初值
fd.style.top = fd.offsetHeight + "px";

fd.onmouseover = function(){
	animate(fd,{"opacity":30});
}
fd.onmouseout = function(){
	animate(fd,{"opacity":100});
}

//scroll触发效果  //写完后要搞个函数，初始时调用，触发时 时时调用
window.onscroll = function(){
	pageOneSet();
}

pageOneSet();
function pageOneSet(){//还可以再来一个函数。。。but。。。算了
	// -------home3---------
	if(scroll().top >= goal_H3_1 - window.innerHeight && scroll().top <= goal_H3_1 + H3_TitBox.offsetHeight){
		animate(H3_TitBox,{"top":0});
	}
	
	if(scroll().top >= goal_H3_2 - window.innerHeight && scroll().top <= goal_H3_2 + H3_img.offsetHeight){
		animateChange(H3_img,{"top":0});
	}

	//------------固定定位---------
	if(scroll().top > 0){
		animate(fd,{"top":0});
	}else{
		animate(fd,{"top":50});//此处top的值为goal_fd;
	}
}