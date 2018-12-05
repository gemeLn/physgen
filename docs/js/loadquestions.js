window.questionList = [];
window.unitList = new Array(11);
for (var i = 1; i <= 10; i++) {
    unitList[i] = true;
}

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
    for (var i = 0; i < file.length; i++) {
        line = file[i];
        lead = line[0];
        content = line.substring(1);
        if (lead == '+') {
            problem = new Problem("", "");
        } else if (lead == '-') {
            questionList.push(problem);
        } else if (lead == '!') {
            var splits = content.split(" ");
            if (splits.length != 3) {
                console.error("Param length at line " + i + 1 + " of " + filename);
            } else {
                problem.params.push(splits);
            }
        } else if (lead == '@') {
            problem.answer += content;
        } else if (lead == '#') {
            //Comment
        } else {
            problem.question += line;
        }

    }
}