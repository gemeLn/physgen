var client = new XMLHttpRequest();
client.open('GET', './test');
client.send();
console.log(client.responseText);