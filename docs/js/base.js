function setOutput(outtext) {
    document.getElementById("outputbox").innerHTML = outtext;
}

function outputProblem(problem) {
    //evaluates question template
    var question = problem.question;
    var answer = problem.answer;
    for (var i in problem.params) {
        param = problem.params[i];
        var key = param[0];
        var val = String(randF(parseFloat(param[1]), parseFloat(param[2])));
        answer = answer.split("[" + key + "]").join(val);
        question = question.split("[" + key + "]").join(val);
    }
    var temp = answer;
    try { answer = round2(math.eval(answer)); } catch (error) {
    	console.log(temp.length)
        answer = temp;
        console.log(error)
    }
    setOutput(`<b>Unit ${problem.unit}</b><br>`+question + "<hr>" + answer);
}

function Problem(q, a) {
	this.unit="";
    this.question = q;
    this.answer = a;
    this.params = [];
}

function round2(i) {
    return Number(i.toFixed(2));
}

function randF(min, max) {
    return round2(Math.random() * (max - min) + min);
}

function randI(min, max) {
    return Math.floor((Math.random() * (max - min) + min));
}