//Get all ids

let hour =document.getElementById('hour')
let minutes =document.getElementById('minutes')
let second =document.getElementById('second')


function getdate(){
//Get Date module
let date = new Date()

//Get time
let Hour = date.getHours()
let Minutes = date.getMinutes()
let Second = date.getSeconds()
//Add condition 
if(Minutes<10){
    Minutes='0'+ Minutes
}
else if(Second< 10){
    Second='0'+ Second
}
else if(Hour<10){
 Hour='0' +Hour
}
if(Hour ===true){
    Hour=Hour-12
  }
hour.innerHTML=Hour
minutes.innerHTML=Minutes
second.innerHTML=Second
}
setInterval(getdate, 1000);


