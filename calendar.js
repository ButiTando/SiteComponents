const calendarLeftArrow = document.getElementById('calendar-left-arrow');
const calendarRightArrow = document.getElementById('calendar-right-arrow');
const calendarMonthLable = document.getElementById('calendar-month');
var calendarDays = document.getElementsByClassName('calender-day');


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

const currentDate = new Date();
var intMonth = currentDate.getMonth();

function populateDays(currentMonth, year){
    currentMonth ++; //This is done because the value received is offset by one.

    numDays = new Date(year,currentMonth,0).getDate();
    dayIncr = 1
    Array.from(calendarDays).forEach((dayElement) => {
        if(dayIncr <= numDays){
            dayElement.innerText = dayIncr;
            dayIncr ++;
        }

        else{
            dayElement.innerText = "";
        }
    });
};

window.onload = () => {
    populateDays(intMonth, currentDate.getFullYear());
    calendarMonthLable.innerText = `${strMonths[intMonth]}`;
};

calendarLeftArrow.addEventListener('click',()=>{
    
    if(intMonth > 0){
        intMonth --;
    }    
    calendarMonthLable.innerText = `${strMonths[intMonth]}`;  
    populateDays(intMonth,currentDate.getFullYear()) 
    console.log(intMonth); 
});

calendarRightArrow.addEventListener('click',()=>{
    
    if(intMonth < 11){
        intMonth ++;
    }
    calendarMonthLable.innerText = `${strMonths[intMonth]}`;  
    populateDays(intMonth,currentDate.getFullYear()) 
    console.log(intMonth);  
});