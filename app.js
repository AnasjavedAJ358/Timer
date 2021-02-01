var a = document.getElementById("setHours");
var b = document.getElementById("setMins");
var c = document.getElementById("setSec");
var d = "";

var hours = document.getElementById("hours");
var mins = document.getElementById("min");
var seconds = document.getElementById("sec");
var interval;
console.log(setHours);


function setButton() {
    
      hours.innerHTML = a.value;
     mins.innerHTML =  b.value ;
     seconds.innerHTML = c.value;
     document.getElementById('xyz').className='new';
     document.getElementById('time').className='timer'
   
}


function timer() {
    c.value--
    seconds.innerHTML = c.value;

    if (c.value == 0) {
        b.value--;
        mins.innerHTML = b.value;
        c.value = 60;
    } else if (b.value == 0) {
        a.value--
        hours.innerHTML = a.value
        b.value = 60;
    }

}




function start() {
    interval = setInterval(timer, 1000)
    document.getElementById('start').style.display='none';
    document.getElementById('btn2').style.marginLeft='90px'
}




function pause(){
    clearInterval(interval);
    document.getElementById('start').style.display='';
    document.getElementById('btn2').style.marginLeft=''
    
}

function reset(){
 pause()      
 hours.innerHTML = 0
 mins.innerHTML =  0
seconds.innerHTML = 0
document.getElementById('xyz').className='nnn';
document.getElementById("time").className='new'
 a.value = ''
 b.value = ''
 c.value = ''
}