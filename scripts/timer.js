var begin = new Date("Dec 7, 2018 00:00:00").getTime();

var x = setInterval(function () {    // update every so often

    var now = new Date().getTime();
    var diff = now - begin;

    var years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    var days = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // display result in paragraph element since it has id "timer"
    document.getElementById("timery").innerHTML = years;
    document.getElementById("timerd").innerHTML = days;
    document.getElementById("timerh").innerHTML = hours;
    document.getElementById("timerm").innerHTML = minutes;
    document.getElementById("timers").innerHTML = seconds;

    if (diff < 0)
    {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "It's released!";
    }

}, 1000);