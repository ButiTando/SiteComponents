const calendarLeftArrow = document.getElementById('calendar-left-arrow');
const calendarRightArrow = document.getElementById('calendar-right-arrow');
const calendarMonthLable = document.getElementById('calendar-month');

var calendar = document.getElementById("calendar");
var calendarHeader = document.getElementById("calendar-heading");
var calendarDays = document.getElementsByClassName('calendar-day');
var calendarWeeks = document.getElementsByClassName('calendar-week');
var calendarContainer = document.getElementById('calendar-container');

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

function aduptCalendar(){

    // Calendar dimension    
    calendarWidth = calendarContainer.clientWidth;
    calendarHeight = calendarContainer.clientHeight;

    // Calendar heading dimensions
    var calendarHeadingHeight = calendar.clientHeight * 0.1;
    var calendarHeadingWidth = calendar.clientWidth * 1;

    // Calendar container dimensions

    var calendarContainerHeight = calendar.clientHeight - calendarHeadingHeight;
    var calendarContainerWidth = calendar.clientWidth * 1;

    calendarHeader.style.height = `${calendarHeadingHeight}px`;
    calendarHeader.style.lineHeight = `${calendarHeadingHeight}px`;
    calendarHeader.style.width = `${calendarHeadingWidth}px`;

    calendarContainer.style.height = `${calendarContainerHeight}px`;
    calendarContainer.style.width = `${calendarContainerWidth}px`;

    var dayWidth = calendarWidth / 7;
    var weekHeight = calendarHeight / 5;

    // Converting the calendar day elements into array for iteration
    Array.from(calendarDays).forEach((day)=>{
        day.style.width = `${dayWidth}px`;
    });

    // Converting the calendar week elements into array for iteration
    Array.from(calendarWeeks).forEach((week)=>{
        week.style.height = `${weekHeight}px`;
    });
}

window.onload = () => {
    aduptCalendar();
    populateDays(intMonth, currentDate.getFullYear());
    calendarMonthLable.innerText = `${strMonths[intMonth]}`;
};

// Updating calendar

calendar.onchange = () => {
    aduptCalendar();
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