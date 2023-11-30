var h = 0;
var m = 0;
var s = 0;

var tempo = 1000;
var cron;

function iniciar(){
    cron = setInterval(() => {timer();}, tempo);
}

function pausar(){
    clearInterval(cron);
}

function reiniciar(){
    clearInterval(cron);
    h = 0;
    m = 0;
    s = 0;
    document.getElementById('contagem').innerHTML = '00:00:00';
}

function timer(){
    s++;
    if(s == 60){
        s = 0;
        m++
        if(m == 60){
            m = 0;
            h++

        }
    }
    var format = (h < 10 ? '0' + h : h) + ':' + (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s);
    document.getElementById('contagem').innerHTML = format;
}
