// 21. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.


const countries = [
    "India",
    "Afghanistan",
    "England",
    "Sri lanka",
    "West Indies"
];


const ethiopiaIndex = countries.indexOf('Ethiopia');

if(ethiopiaIndex!==-1){
    console.log("ETHIOPIA");
}
else{
    countries.push("Ethiopia");
}

console.log(countries);