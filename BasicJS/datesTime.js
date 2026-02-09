let myDate = new Date(); // myDate is an object of the Date class

console.log(myDate);
console.log("toString", myDate.toString());
console.log("toLocaleString", myDate.toLocaleString());
console.log("toLocaleDateString", myDate.toLocaleDateString());
console.log("toLocaleTimeString", myDate.toLocaleTimeString());
console.log("getFullYear", myDate.getFullYear());
console.log("getMonth", myDate.getMonth());
console.log("getDay", myDate.getDay());
console.log("getTime", myDate.getTime());
console.log("getDate", myDate.getDate());

console.log("UTC Time:", myDate.toLocaleString('en-US', {
    timeZone: 'UTC',
    timeStyle: 'medium',
    dateStyle: 'medium'
}));

console.log("New York Time:", myDate.toLocaleString('en-US', {
    timeZone: 'America/New_York',
    timeStyle: 'medium',
    dateStyle: 'medium'
}));

console.log("Tokyo Time:", myDate.toLocaleString('en-JP', {
    timeZone: 'Asia/Tokyo',
    timeStyle: 'medium',
    dateStyle: 'medium'
}));

console.log("India Time:", myDate.toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    timeStyle: 'medium',
    dateStyle: 'medium'
}));


let newDate = Date.now();
console.log("Date.now()", newDate);


let date03 = new Date(2020, 11, 24, 10, 33, 30, 0); // year, month (0-11), day, hours, minutes, seconds, milliseconds
console.log("specific date time", date03.toLocaleString());