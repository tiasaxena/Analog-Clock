var hourHand = document.getElementById('hour');
var minHand = document.getElementById('min');
var secHand = document.getElementById('sec');

function initialClock() {
    var date = new Date();
    var hr = date.getHours() % 12;
    var mn = date.getMinutes();
    var sc = date.getSeconds();

    var hourDeg = (hr*30) + (0.5*mn);
    var minDeg = (mn*6) + (0.1*sc);
    var secDeg = (sc*6);

    hourHand.style.transform = 'rotate('+hourDeg+'deg)';
    minHand.style.transform = 'rotate('+minDeg+'deg)';
    secHand.style.transform = 'rotate('+secDeg+'deg)';

    setTimeout(initialClock, 1000);
};

initialClock();