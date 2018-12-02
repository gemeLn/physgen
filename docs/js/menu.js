function onMenuClick() {
	cl = document.getElementById("dropmenu").classList;
	if (cl.contains("showmenu")) {
		cl.remove("showmenu");
		onCloseMenu();
	} else {
		cl.add("showmenu")
	}
}
window.onclick = function(event) {
	if (!event.target.matches('#dropdownbutton')) {
		cl = document.getElementById("dropmenu").classList;
		if (cl.contains('showmenu')) {
			cl.remove('showmenu');
			onCloseMenu();
		}
	}
}

function onCloseMenu() {
	console.log("menu closed");
}