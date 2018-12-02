window.list = [];

function readFile(file) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", file, false);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status == 0) {
                var allText = xhr.responseText;
                processFile(file, allText.split("\n"));
            }
        }
    }
    xhr.send(null);
}

function processFile(filename, file) {
    var problem = new Problem("", "");
    var varList = {};
    for (var i = 0; i < file.length; i++) {
        line = file[i];
        lead = line[0];
        content = line.substring(1);
        if (lead == '+') {
            problem = new Problem("", "");
            varList = {};
        } else if (lead == '-') {
            for (var key in varList) {
                problem.answer = problem.answer.split("[" + key + "]").join(varList[key]);
                problem.question = problem.question.split("[" + key + "]").join(varList[key]);
            }
            problem.answer=round2(math.eval(problem.answer));
            list.push(problem);
        } else if (lead == '%') {
            var params = content.split(" ");
            if (params.length != 3) {
                console.error("Param length at line " + i + 1 + " of " + filename);
            } else {
                varList[params[0]] = randF(parseInt(params[1]), parseInt(params[2]));
            }
        } else if (lead == '@') {
            problem.answer += content;
        } else if (lead == '#') {
            //Comment
        } else {
            problem.question += line;
        }

    }
    console.log(list);

}
readFile('./sets/u1');
setOutput(list[0].question + " " + list[0].answer);