const calendarLeftArrow = document.getElementById('calendar-left-arrow');
const calendarRightArrow = document.getElementById('calendar-right-arrow');
const calendarMonthLable = document.getElementById('calendar-month');

var monthTracker = 0;

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