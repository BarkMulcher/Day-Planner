// work day scheduler

// pseudocode:



// dayjs for today's date

// functions:
// only one day
//  24 hrs starting at 00:00
// above pulled from moment.js
//
// scrolling
// hours on left in one column

// nick's HTML hour section:
<section class="row">
    <div class="input-group">
        <div class="input-group-prepend">
            <span class="input-group-text hour">09:00 am </span>
        </div>
        <textarea class="form-control" aria-label="With textarea" id="9">
        </textarea>
        <button type="button" class="save"><i class="fas fa-save"></i>
        </button>
    </div>
</section>



// entire rest of page is plans
// each hour or half hour block is editable form
// form to enter plans
// enter all pre-existing CSS selectors by JS createElement
// above uses local.storage
// multiple colors
// color assignment depending on type of event
// color assignment for past, present, and future
// above done w/ math.ceiling?

let events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];

let hours = []

//holy shit i'm retarded
var calendarEl = $('.calendar-container');
var hour8 = $('<section>');
calendarEl.append(hour8);
hour8.addClass('row time-block');
var eightA = $('<div>');
hour8.append(eightA);
eightA.text('8 AM');
var textEntry = $('<textarea>');
hour8.append(textEntry).addClass('description');
var saveBtn = $('<button>');
hour8.append(saveBtn);
saveBtn.addClass('saveBtn');
var hour9 = $('<div>');
calendarEl.append(hour9);
hour9.addClass('row time-block');
var nineA = $('<div>');
hour9.append(nineA);
nineA.text('9 AM');
hour9.append(textEntry).addClass('description');
var saveBtn = $('<button>');
hour9.append(saveBtn);
saveBtn.addClass('saveBtn');
var hour10 = $('<div>');
calendarEl.append(hour10);
hour10.addClass('row time-block');
var tenA = $('<div>');
hour10.append(tenA);
tenA.text('10 AM');
hour10.append(textEntry).addClass('description');
var saveBtn = $('<button>');
hour10.append(saveBtn);
saveBtn.addClass('saveBtn');
var hour11 = $('<div>');
calendarEl.append(hour11);
hour11.addClass('row time-block');
var elevenA = $('<div>');
hour11.append(elevenA);
elevenA.text('11 AM');
hour11.append(textEntry).addClass('description');
var saveBtn = $('<button>');
hour11.append(saveBtn);
saveBtn.addClass('saveBtn');
var hour12 = $('<div>');
var hour13 = $('<div>');
var hour14 = $('<div>');
var hour15 = $('<div>');
var hour16 = $('<div>');