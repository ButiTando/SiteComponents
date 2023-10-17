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

    numDays = new Date(year,currentMonth,0).getDate();
    wday = 1;

    for (week in calendarWeeks){
        for (day in week){
            day.innerText = wday;
            wday++;
        }
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