const hour=document.getElementById('hour');
const minute=document.getElementById('minute');
const second=document.getElementById('second');
const progress=document.getElementById('progress');

let showCurrentTime=()=>{
    let date=new Date();
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();

    hour.innerHTML=hours;
    minute.innerHTML=minutes;
    second.innerHTML=seconds;
    progress.style.width=(seconds/60)*100 + '%';
}
showCurrentTime();
setInterval(showCurrentTime,1000);
