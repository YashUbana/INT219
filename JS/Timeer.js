<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>CA1</title>
</head>

<body>
<input type="text" id="number" value="5" min="0" max="5">
<button id="start" onclick="decrement()">Start</button>
<button id="stop" onclick="stop()">Stop</button><br><br>
<h1 style="text-align: center;color:brown;" id="result"></h1>
<div id="time"></div>
<script>
var count = 0;

function decrement() {
var value = parseInt(document.getElementById('number').value, 10);
value = isNaN(value) ? 0 : value;
value--;
document.getElementById('number').value = value;
var date = new Date();
var n = date.toDateString();
var time = date.toLocaleTimeString();
document.getElementById('time').innerHTML = n + ' ' + time;
if (value == 0) {
res();
}
count++;
}

function res() {
document.getElementById("number").style.background = 'red';
document.getElementById("result").innerHTML = "OVER !!"
document.body.style.backgroundColor = "green";
}

function stop() {
var value = parseInt(document.getElementById('number').value, 10);
value = isNaN(value) ? 0 : value;
value = 5;
document.getElementById('number').value = value;
document.getElementById("number").style.background = 'red';
document.getElementById("number").style.background = 'red';
document.getElementById("result").innerHTML = "STOPPED !!"
document.body.style.backgroundColor = "green";
}
</script>
</body>

</html>