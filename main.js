let hours=document.getElementById('hr');
let minute= document.getElementById('min');
let second = document.getElementById('sec');

setInterval(()=>{
    let currentDay=new Date()

    let currentHour=currentDay.getHours();
    hours.textContent=currentHour<10?"0"+currentHour:currentHour;
    
    
    let currentminute=currentDay.getMinutes();
    minute.textContent=currentminute<10?"0"+currentminute:currentminute;
    
    
    let currentSecond=currentDay.getSeconds()
    second.textContent=currentSecond<10?"0"+currentSecond:currentSecond;
    
    
},1000)

