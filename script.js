var hour = 0;
var min = 0;
var sec = 0;
var msec = 0;
var isrun = false;
var timer;

function startfuction(){
    if(isrun){
        clearInterval(timer);
        document.getElementById("start").textContent = "start";
    }else{
        timer = setInterval(updatetime,1);
        document.getElementById("start").textContent = "stop";
    }
    isrun = !isrun;
}
function updatetime(){
    msec++;
    if(msec == 100){
        msec = 0;
        sec++;
        if(sec == 60){
            sec = 0;
            min++;
            if(min == 60){
                min = 0;
                hour++;
            }
        }
    }
    displaytime();
}

function displaytime(){
    document.getElementById("h").textContent = formattime(hour);
    document.getElementById("m").textContent = formattime(min);
    document.getElementById("s").textContent = formattime(sec);
    document.getElementById("ms").textContent = formattime(msec);
}

function formattime(time){
    return time < 10 ? `0${time}`:time;
} 

function resetfuction(){
    clearInterval(timer);
    isrun = false;
    hour = 0;
    min = 0;
    sec = 0;
    msec = 0;
    displaytime();
    document.getElementById("start").textContent="start";
}
