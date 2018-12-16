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
    if (!event.target.matches('.dropdown-buttons')) {
        cl = document.getElementById("dropmenu").classList;
        if (cl.contains('showmenu')) {
            cl.remove('showmenu');
            onCloseMenu();
        }
    }
}

function onCloseMenu() {
    questionList = [];
    for (var i = 1; i <= totalUnits; i++) {
        if (unitList[i]) {
            readFile("./sets/u" + i,String(i));
        }
    }
    console.log(questionList);
}
//Generate menu
function genMenu() {
    var table = document.getElementById("dropmenu");
    var total = totalUnits;
    var running = 1;
    var columns = 5;
    while (running <= total) {
        var row = document.createElement("tr");
        for (var i = 0; i < columns; i++) {
            var td = document.createElement("td");
            td.innerHTML = `<button class='dropchoice dropdown-buttons' id='u${running}' onclick='unitSelect(this)'>Unit ${running}</button>`;
            td.className = "dropelement questionOn";
            td.style.width = "calc(100%/" + columns + ")";
            row.appendChild(td);
            running++;
            if (running > total) {
                break;
            }
        }
        table.appendChild(row);
    }
}

function unitSelect(element) {
    uid = parseInt(element.id.substring(1));
    console.log(uid);
    cl = element.parentElement.classList;
    if (cl.contains('questionOn')) {
        cl.remove("questionOn");
        cl.add("questionOff");
        unitList[uid] = false;
    } else {
        cl.add("questionOn");
        cl.remove("questionOff");
        unitList[uid] = true;
    }
    console.log(unitList);
}

function randomQuestion() {
    length = questionList.length;
    question = questionList[randI(0, length)];
    outputProblem(question);
}
genMenu();
onCloseMenu();
// window.questionList = [];
// readFile("./sets/u9","test");
console.log(questionList);
