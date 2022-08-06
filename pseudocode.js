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
// entire rest of page is plans
// each hour or half hour block is editable form
// form to enter plans
// enter all pre-existing CSS selectors by JS createElement
// above uses local.storage
// multiple colors
// color assignment depending on type of event
// color assignment for past, present, and future

let events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];

let hours = []