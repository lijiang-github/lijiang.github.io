function $(str) {
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

