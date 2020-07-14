var H1_TitBox_1 = $("#home1_TitBox_1");
var goal_H1_1 = H1_TitBox_1.offsetTop;//取初值
H1_TitBox_1.style.top = H1_TitBox_1.offsetHeight + "px";

var H1_TitBox_2 = $("#home1_TitBox_2");
var goal_H1_2 = H1_TitBox_2.offsetTop;//取初值
H1_TitBox_2.style.top = H1_TitBox_2.offsetHeight + "px";

var H1_TitBox_3 = $("#home1_TitBox_3");
var goal_H1_3 = H1_TitBox_3.offsetTop;//取初值
H1_TitBox_3.style.top = H1_TitBox_3.offsetHeight + "px";

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
	//-----home1---------
	if(scroll().top >= goal_H1_1 - window.innerHeight && scroll().top <= goal_H1_1 + H1_TitBox_1.offsetHeight){
		animateChange(H1_TitBox_1,{"top":0});
	}

	if(scroll().top >= goal_H1_2 - window.innerHeight && scroll().top <= goal_H1_2 + H1_TitBox_2.offsetHeight){
		animateChange(H1_TitBox_2,{"top":0});
	}

	if(scroll().top >= goal_H1_3 - window.innerHeight && scroll().top <= goal_H1_3 + H1_TitBox_3.offsetHeight){
		animateChange(H1_TitBox_3,{"top":0});
	}

	//------------固定定位---------
	if(scroll().top > 0){
		animate(fd,{"top":0});
	}else{
		animate(fd,{"top":50});//此处top的值为goal_fd;
	}
}