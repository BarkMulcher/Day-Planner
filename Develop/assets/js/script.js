

// get & update time under header element:
function updateTime() {
    // define current time for header:
    var currentTime = moment().format('LL h:mm:ss');
    $("#currentDay").text(currentTime);
    };
    updateTime();
    setInterval(function(){
        updateTime();
    },60);
// create hour elements for schedule:
var hour8 = $('#8');
var hour9 = $('#9');
var hour10= $('#10');
var hour11 = $('#11');
var hour12 = $('#12');
var hour13 = $('#13');
var hour14 = $('#14');
var hour15 = $('#15');
var hour16 = $('#16');
// get local storage or set to empty:
const eightA = JSON.parse(localStorage.getItem('hour8'));
hour8.val(eightA); 
var nineA = JSON.parse(localStorage.getItem('hour9')) || "";
var tenA = JSON.parse(localStorage.getItem('hour10')) || "";
var elevenA = JSON.parse(localStorage.getItem('hour11')) || "";
var twelveP = JSON.parse(localStorage.getItem('hour12')) || "";
var thirteenP = JSON.parse(localStorage.getItem('hour13')) || "";
var fourteenP = JSON.parse(localStorage.getItem('hour14')) || "";
var fifteenP = JSON.parse(localStorage.getItem('hour15')) || "";
var sixteenP = JSON.parse(localStorage.getItem('hour16')) || "";



var textAreaEl = $('<textarea>').attr('id', 'textArea');
// define current time:
var currentTime = moment().hour();
// assign background color based on checking present time + comparing
function backgroundColor() {
    $('#textArea').each(function() {
    var calendarTime = parseInt($(this).attr('id'));
    currentTime = parseInt(currentTime);
   
    if (currentTime < calendarTime) {
        $(this).addClass('future');
    } else if (currentTime > calendarTime) {
        $(this).addClass('past');
    } else {
        $(this).addClass('present');
    }
});
}
// initiate schedule function:
$(function() {
backgroundColor()
$('.saveBtn').on('click', function() {
    var textEntry = $('.description').val();
    if (textEntry.length == 0) {
    window.alert('Please enter some value');
}
})
})
















