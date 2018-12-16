window.questionList = [];
window.totalUnits = 11;
window.unitList = new Array(totalUnits);
for (var i = 1; i <= totalUnits; i++) {
    unitList[i] = true;
}
function readFile(file,unit) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", file, false);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status == 0) {
                var allText = xhr.responseText;
                processFile(file, allText.split("\n"),unit);
            }
        }
    }
    xhr.send(null);
}

function processFile(filename, file,unit) {
    var problem = new Problem("", "");
    for (var i = 0; i < file.length; i++) {
        line = file[i].replace("\r","");
        lead = line[0];
        content = line.substring(1);
        if (lead == '+') {
            problem = new Problem("", "");
            problem.unit=unit;
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
            //Ignore hash
        } else {
            problem.question += line;
        }

    }
}