//Get all ids
let day = document.getElementById('day')
let hour =document.getElementById('hour')
let minutes =document.getElementById('minutes')
let second =document.getElementById('second')


function countdown(){
//Get Date module
let date = new Date('jan 1,2024').getTime()
let current_date = new Date().getTime()
let getdate = date-current_date

if(getdate <0){
    return
}
let Day = Math.floor(getdate/(24*60*60*1000))
let Hour = Math.floor((getdate%(1000*60*60*24))/(60*60*1000))
let Minutes = Math.floor((getdate%(1000*60*60)/(1000*60)))
let Second = Math.floor((getdate%(1000*60)/1000))

if(Hour<10){
    Hour='0'+Hour
}
else if(Minutes<10){
    Minutes='0'+Minutes
}
else if(Second<10 ){
    Second='0'+Second
}
day.innerHTML=Day
hour.innerHTML=Hour
minutes.innerHTML=Minutes
second.innerHTML=Second
}

setInterval(countdown,1000)