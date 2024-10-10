let students = [
    { id: 1, name: 'John Doe', age: 20 },
    { id: 2, name: 'Jane Doe', age: 22 },
    { id: 3, name: 'Bob Smith', age: 21 },
    { id: 4, name: 'Alice Johnson', age: 20 },
    { id: 5, name: 'Mike Brown', age: 23 }
];

let slicedStudents = students.slice(1, 4);

console.log("Original Array:");
console.log(students);

console.log("\nSliced Array:");
console.log(slicedStudents);