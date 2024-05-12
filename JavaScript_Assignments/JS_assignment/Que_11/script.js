// 11. Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.


const date_1=new Date()

console.log(date_1.getFullYear());
console.log(date_1.getMonth()+1);
console.log(date_1.getDate());
console.log(date_1.getDay());
console.log(date_1.getHours());
console.log(date_1.getMinutes());
console.log(date_1.getTime()/1000);