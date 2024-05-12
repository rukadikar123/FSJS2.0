// 18. Write a program which tells the number of days in a month, now consider leap year.

function daysInMonth(year, month) {

    if (month === 1) {
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            return 29;
        } else {
            return 28;
        }
    }
    

    if ([3, 5, 8, 10].includes(month)) {
        return 30;
    }
    
   
    return 31;
}

const year = 2024; 
const month = 1; 
console.log(`Number of days in ${month + 1}/${year}: ${daysInMonth(year, month)}`);
