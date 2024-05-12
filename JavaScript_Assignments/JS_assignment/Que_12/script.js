// 12. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm

 
const date1=new Date();

const year=date1.getFullYear();
console.log(year);

const month=date1.getMonth()+1;
console.log(month);

const date=date1.getDate();
console.log(date);

const hour=date1.getHours();
console.log(hour);

const minuts=date1.getMinutes();
console.log(minuts);

console.log(`${year}-${month}-${date} ${hour}:${minuts}`);
console.log(`${date}-${month}-${year} ${hour}:${minuts}`);
console.log(`${date}/${month}/${year} ${hour}:${minuts}`);