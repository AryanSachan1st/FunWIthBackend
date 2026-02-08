let myDate = new Date(); // myDate is an object of the Date class

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.getFullYear());
// console.log(myDate.getMonth());
// console.log(myDate.getDay());
// console.log(myDate.getTime());
console.log(myDate.toLocaleString('default', {
    timeZone: 'UTC',
    timeStyle: 'medium'
}))

let newDate = Date.now();
// console.log(newDate);


let date03 = new Date(2020, 11, 24, 10, 33, 30, 0); // year, month (0-11), day, hours, minutes, seconds, milliseconds
// console.log(date03.toLocaleString());