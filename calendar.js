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
var month = currentDate.getMonth();

calendarLeftArrow.addEventListener('click',()=>{
    console.log("The left arrow key was pressed");
    monthTracker --;
    calendarMonthLable.innerText = `Month ${monthTracker}`;
    
})

calendarRightArrow.addEventListener('click',()=>{
    console.log("The right arrow key was pressed");
    monthTracker ++;
    calendarMonthLable.innerText = `Month ${monthTracker}`;
    
})