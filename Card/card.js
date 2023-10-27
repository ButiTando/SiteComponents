var moduleCards = document.getElementsByClassName("module-card");
var moduleTimers = document.getElementsByClassName("card-timer");
var moduleTasks = document.getElementsByClassName("card-task");

Array.from(moduleTasks).forEach(
    (moduleTask, index) => {
        moduleTask.addEventListener("click",()=>{
            alert("Switching to Modules page with tasks focused");
        });
    }
);

Array.from(moduleTimers).forEach(
    (moduleTasks, index) =>{
        moduleTask.addEventListener("click",()=>{
            alert("Switch to the Timer page");
        });
    }
);