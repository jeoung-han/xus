window.onload = setInterval(function(){
    var now = new Date();
    var Clock = document.getElementById('time');
    var Hours = now.getHours();
    var Minutes = "00" + now.getMinutes();
    var Seconds = "00" + now.getSeconds();
    var time = "";

    var day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    for(var i = 0; i!=now.getDay(); i++){
    }
    var today = day[i];
    time += today + " ";
    if(Hours >= 12){
        time += "PM ";
        if(Hours === 12){
        time += Hours;
        } else{
        var HoursAm = Hours - 12;
        time += ("00" + HoursAm).slice(-2);
        }
    } else{
        time += "AM ";
        time += ("00" + Hours).slice(-2);
    }
    time += ":" + Minutes.slice(-2);
    time += ":" + Seconds.slice(-2);

    Clock.innerText = time;   
},500);

function toggle() {
    const nav   = document.querySelector('nav');
    nav.classList.toggle('active');
}

function fetchsection(name, section){
    fetch(name).then(function(response){
        response.text().then(function(text){
            document.querySelector(section).innerHTML = text;
        })
    });
}