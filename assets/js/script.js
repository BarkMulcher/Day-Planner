

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

var currentTime = moment().hour();
let hourEntry;
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

function startWork() {
const eightA = JSON.parse(localStorage.getItem('hour8')) || "";
hour8.val(eightA); 
const nineA = JSON.parse(localStorage.getItem('hour9')) || "";
hour9.val(nineA);
const tenA = JSON.parse(localStorage.getItem('hour10')) || "";
hour10.val(tenA);
const elevenA = JSON.parse(localStorage.getItem('hour11')) || "";
hour11.val(elevenA);
const twelveP = JSON.parse(localStorage.getItem('hour12')) || "";
hour12.val(twelveP);
const thirteenP = JSON.parse(localStorage.getItem('hour13')) || "";
hour13.val(thirteenP);
const fourteenP = JSON.parse(localStorage.getItem('hour14')) || "";
hour14.val(fourteenP);
const fifteenP = JSON.parse(localStorage.getItem('hour15')) || "";
hour15.val(fifteenP);
const sixteenP = JSON.parse(localStorage.getItem('hour16')) || "";
hour16.val(sixteenP);
}

// initiate scheduler:
$(function() {
    startWork()
    backgroundColor()

    $('.saveBtn').on('click', function() {
    textEntry = $(this).siblings('.description').val().trim();
    console.log(textEntry);
        if (textEntry.length == "") {
    window.alert('Please enter some value');
    hourEntry = $(this).siblings('.hour').text().trim();
    console.log(hourEntry);
    localStorage.setItem(hourEntry, JSON.stringify(textEntry));
    }})

    $('#friday').click(function(event) {
        event.preventDefault;
        $('textarea').val('');
        localStorage.clear();
    startWork();
    })
});

// assign background color based on checking present time + comparing
function backgroundColor() {
    $('.hour-block').each(function() {
        var calendarTime = parseInt($(this).attr('id'));
        currentTime = parseInt(currentTime);
   
        if (currentTime > calendarTime) {
        $(this).addClass('past');
        $(this).removeClass('future');
        $(this).removeClass('present');
        } else if (currentTime === calendarTime) {
        $(this).addClass('present');
        $(this).removeClass('future');
        $(this).removeClass('past');
        } else {
        $(this).addClass('future');
        $(this).removeClass('past');
        $(this).removeClass('present');
        }
})
}




















