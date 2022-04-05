var i = 0;
var txt = 'MAŁE WYMIARY - WIELKIE MOŻLIWOŚCI';
var speed = 50;

function autotekst() {
  if (i < txt.length) {
    document.getElementById("tekst").innerHTML += txt.charAt(i);
    i++;
    setTimeout(autotekst, speed);
  }
}


function zegarek()
{
    var data = new Date();
    var godzina = data.getHours();
    var minuta = data.getMinutes();
    var sekunda = data.getSeconds();
    var dzien = data.getDate();
    var dzienN = data.getDay();
    var miesiac = data.getMonth();
    var rok = data.getFullYear();
   
    if (minuta < 10) minuta = "0" + minuta;
    if (sekunda < 10) sekunda = "0" + sekunda;
   
    var dni = new Array("niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota");
    var miesiace = new Array("stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca", "lipca", "sierpnia", "września", "października", "listopada", "grudnia");
   
    var pokazDate = "Dzisiaj jest " + dni[dzienN] + ', ' + dzien + ' ' + miesiace[miesiac] + ' ' + rok + " roku.<br />Godzina " + godzina + ':' + minuta + ':' + sekunda;
    document.getElementById("zegar").innerHTML = pokazDate;
   
    setTimeout(zegarek, 1000);            
}        

var addFunctionOnWindowLoad = function(callback){
    if(window.addEventListener){
        window.addEventListener('load',callback,false);
    }else{
        window.attachEvent('onload',callback);
    }
}

addFunctionOnWindowLoad(autotekst);
addFunctionOnWindowLoad(zegarek);