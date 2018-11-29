function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status==0)
            {
                var allText = rawFile.responseText;
                console.log(allText.split("\n"));
            }
        }
    }
    rawFile.send(null);
}
readTextFile("./test");
document.getElementById('outputbox').innerHTML='1';