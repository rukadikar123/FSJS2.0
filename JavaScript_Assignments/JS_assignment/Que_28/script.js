// 28. Write a program to print the given patterns using the loops-
// 	a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
// 	   *
// 	   **
// 	   ***
	
// 	b. Print a square pattern, if the input is 3 then the output should be similar to the given output
// 	   ***
// 	   ***
// 	   ***

// 	c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
// 	     *
// 	    ***
//  	   *****



function printTriangle(n) {
    for (let i = 1; i <= n; i++) {
        console.log("*".repeat(i));
    }
}


function printSquare(n) {
    for (let i = 0; i < n; i++) {
        console.log("*".repeat(n));
    }
}


function printPyramid(n) {
    for (let i = 1; i <= n; i++) {
        console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
    }
}

console.log("Triangle pattern:");
printTriangle(3);
console.log("\nSquare pattern:");
printSquare(3);
console.log("\nPyramid pattern:");
printPyramid(3);
