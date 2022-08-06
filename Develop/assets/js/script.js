
// create hour elements
const schedEl = document.querySelector('.calendar-container');
const hoursEl = document.createElement('div')
var hour8 = $("#8");
var hour9 = $("#9");
var hour10 = $("#10");
var hour11 = $("#11");
var hour12 = $("#12");
var hour13 = $("#13");
var hour14 = $("#14");
var hour15 = $("#15");
var hour16 = $("#16");

// append hour elements
schedEl.append(hoursEl);
hoursEl.append(hour8,hour9,hour10,hour11,hour12,hour13,hour14,hour15,hour16);


var currentTime = moment().format('LL h:mm:ss'); 
var calendarTime = moment().hours();



function worryStress() {
    var currentTime = moment().format('LL h:mm:ss');
    $("#currentDay").text(currentTime);
    };
    worryStress();
    setInterval(function(){
        worryStress();
    },60);




function scheduleColor(time) {
    return time.text === currentTime.text
    ? "bg-red-300"
    : time.hour < now
    ? "bg-gray-300"
    : "bg-green-200";
}

var saveBtn = $('.saveBtn');
saveBtn.addEventListener('click')




