function onMenuClick() {
	document.getElementById("dropmenu").classList.toggle('show');
}
window.onclick = function(event) {
	if (!event.target.matches('#button')) {
		cl = document.getElementById("dropmenu").classList;
		if (cl.contains('show')) {
			cl.remove('show');
		}
	}
}