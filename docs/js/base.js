function setOutput(outtext) {
	document.getElementById("outputbox").innerHTML = outtext;
}

function Problem(q, a) {
	this.question = q;
	this.answer = a;
}
function round2(i){
	return Number(i.toFixed(2));
}
function randF(min, max) {
	return round2(Math.random() * (max - min) + min);
}

function randI(min, max) {
	return Math.floor((Math.random() * (max - min) + min));
} 