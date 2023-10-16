const calendarLeftArrow = document.getElementById('calendar-left-arrow');
const calendarRightArrow = document.getElementById('calendar-right-arrow');
const calendarMonthLable = document.getElementById('calendar-month');
var calendarWeeks = document.getElementsByClassName('calender-week');


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


function populateDays(currentMonth, year){
    currentMonth ++; //This is done because the value received is offset by one.

    numDays = new Date(year,currentMonth,0).getDate()
    day = 1

    for (var day = 1; i <= numDays; i++){
        
    }
}


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