
//------------------------------------------------------普遍js效果----------------------------------------------------

//----------home1----------
var H1_TitBox = $("#home1_TitBox");
var goal_H1 = H1_TitBox.offsetTop;//取初值
H1_TitBox.style.top = H1_TitBox.offsetHeight + "px";//初始化 根据对象定位方式不同要改

// goal_H1 - window.innerHeight = scroll().top 
// goal_H1 + H1_TitBox.offsetHeight = scroll().top //当scroll().top在上下这两个公式的值的区间内时触发动画效果

//----------home2-----------
var H2 = $("#home2_box");
var H2_TitBox = $("#home2_TitBox");
var goal_H2_1 = H2.offsetTop;//取初值
H2_TitBox.style.top = H2_TitBox.offsetHeight + "px";

var H2_img = $("#home2_img");
var goal_H2_2 = H2.offsetTop + H2_img.offsetTop;//取初值
H2_img.style.bottom = -H2_img.offsetHeight + "px";

//----------home3------------
var H3_TitBox = $("#home3_TitBox");
var goal_H3_1 = H3_TitBox.offsetTop;//取初值
H3_TitBox.style.top = H3_TitBox.offsetHeight + "px";

var H3_img = $("#home3_img");
var goal_H3_2 = H3_img.offsetTop;//取初值
H3_img.style.top = H3_img.offsetHeight + "px";

//----------pageOne_center_img------------
var PO = $("#pageOne_center_img")
var POCImg = $("#pageOne_bigImg");
var goal_PO =PO.offsetTop + POCImg.offsetTop + POCImg.offsetHeight;//取初值
POCImg.style.bottom = -POCImg.offsetHeight + "px";

//------------lasthome-----------------
var lasH_TitBox_1 = $("#lasthome_TitBox_1");
var goal_lasH_1 = lasH_TitBox_1.offsetTop;//取初值
lasH_TitBox_1.style.top = lasH_TitBox_1.offsetHeight + "px";

var lasH_TitBox_2 = $("#lasthome_TitBox_2");
var goal_lasH_2 = lasH_TitBox_2.offsetTop;//取初值
lasH_TitBox_2.style.top = lasH_TitBox_2.offsetHeight + "px";

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
	if(scroll().top >= goal_H1 - window.innerHeight && scroll().top <= goal_H1 + H1_TitBox.offsetHeight){
		animate(H1_TitBox,{"top":0});
	}
	//------home2-----------
	if(scroll().top >= goal_H2_1 - window.innerHeight && scroll().top <= goal_H2_1 + H2_TitBox.offsetHeight){
		animate(H2_TitBox,{"top":0});
	}
	
	if(scroll().top >= goal_H2_2 - window.innerHeight && scroll().top <= goal_H2_2 + H2_img.offsetHeight){
		animate(H2_img,{"bottom":0}, false, 1, 2);
	}
	// -------home3---------
	if(scroll().top >= goal_H3_1 - window.innerHeight && scroll().top <= goal_H3_1 + H3_TitBox.offsetHeight){
		animate(H3_TitBox,{"top":0});
	}
	
	if(scroll().top >= goal_H3_2 - window.innerHeight && scroll().top <= goal_H3_2 + H3_img.offsetHeight){
		animate(H3_img,{"top":0});
	}
	
	//-----------pageOne_center_img----------
	if(scroll().top >= goal_PO- window.innerHeight && scroll().top <= goal_PO+ POCImg.offsetHeight){
		animate(POCImg,{"bottom":0}, false, 1, 1);
	}
	//------------lasthome------------
	if(scroll().top >= goal_lasH_1 - window.innerHeight && scroll().top <= goal_lasH_1 + lasH_TitBox_1.offsetHeight){
		animate(lasH_TitBox_1,{"top":0});
	}
	
	if(scroll().top >= goal_lasH_2 - window.innerHeight && scroll().top <= goal_lasH_2 + lasH_TitBox_2.offsetHeight){
		animate(lasH_TitBox_2,{"top":0});
	}
	
	//------------固定定位---------
	if(scroll().top > 0){
		animate(fd,{"top":0});
	}else{
		animate(fd,{"top":50});//此处top的值为goal_fd;
	}
}