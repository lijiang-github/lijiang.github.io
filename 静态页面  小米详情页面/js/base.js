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
