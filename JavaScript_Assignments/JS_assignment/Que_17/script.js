// 17. Write a program which tells the number of days in a month.

function days_in_month(year,month){
    return new Date(year,month,0).getDate();
}

const year=2024;
const month=2;

const numDays=days_in_month(year,month);
console.log(`Numbr of days in ${month}/${year}: ${numDays} `);