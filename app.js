var x;
var startstop = 0;

function startStop() {
  startstop = startstop + 1;

  if (startstop === 1) {
    start();
    document.getElementById("start").innerHTML = "Stop";
  } else if (startstop === 2) {
    document.getElementById("start").innerHTML = "Start";
    startstop = 0;
    stop();
  }
}

function start() {
  x = setInterval(timer, 10);
}

function stop() {
  clearInterval(x);
}

var milisec = 0;
var sec = 0;
var min = 0;
var hour = 0;

var miliSecOut = 0;
var secOut = 0;
var minOut = 0;
var hourOut = 0;
var power = 0;
var amount = 0;
var battery = 0;
var range = 0;

function timer() {
  miliSecOut = checkTime(milisec);
  secOut = checkTime(sec);
  minOut = checkTime(min);
  hourOut = checkTime(hour);

  amount = minOut*10;
  power = minOut*5;
  battery = minOut*2;
  range = minOut*1.5;

  milisec = ++milisec;

  if (milisec === 100) {
    milisec = 0;
    sec = ++sec;
  }

  if (sec == 60) {
    min = ++min;
    sec = 0;
  }

  if (min == 60) {
    min = 0;
    hour = ++hour;
  }
  document.getElementById("sec").innerHTML = secOut + " Sec";
  document.getElementById("min").innerHTML = minOut + " Min";
  document.getElementById("hour").innerHTML = hourOut + " Hr";
  document.getElementById("power").innerHTML = power + " kW";
  document.getElementById("amount").innerHTML = amount + " Rs";
  document.getElementById("battery").innerHTML = battery + " %";
  document.getElementById("range").innerHTML = range + " Km";
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function reset() {
  alert("Paid Successfully.");
  milisec = 0;
  sec = 0;
  min = 0
  hour = 0;
  document.getElementById("sec").innerHTML = "00 Sec";
  document.getElementById("min").innerHTML = "00 Min";
  document.getElementById("hour").innerHTML = "00 Hr";
  document.getElementById("power").innerHTML = "0 kW";
  document.getElementById("amount").innerHTML = "0 Rs";
  document.getElementById("battery").innerHTML = "0 %";
  document.getElementById("range").innerHTML = "0 Km";
}
