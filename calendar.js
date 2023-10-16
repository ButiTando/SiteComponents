const calendarLeftArrow = document.getElementById('calendar-left-arrow');
const calendarRightArrow = document.getElementById('calendar-right-arrow');
const calendarMonthLable = document.getElementById('calendar-month');


const strMonths = [ "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December"];

const currentDate = new Date()
var intMonth = currentDate.getMonth();

document.onload = ()=>{
    calendarMonthLable.innerText = `${strMonths[intMonth]}`
};

calendarLeftArrow.addEventListener('click',()=>{
    
    if(intMonth > 0){
        intMonth --;
    }    
    calendarMonthLable.innerText = `${strMonths[intMonth]}`;   
    console.log(intMonth); 
});

calendarRightArrow.addEventListener('click',()=>{
    
    if(intMonth < 11){
        intMonth ++;
    }
    calendarMonthLable.innerText = `${strMonths[intMonth]}`;  
    console.log(intMonth);  
});