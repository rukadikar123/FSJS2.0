// let names=['siddharth','rahul','sagar','tejas','sachin','sourabh','shailesh'];

// console.log(names);
// console.log(names.length);
// console.log(names[3]);
// console.log(names[names.length-1]);
// names[5]='sohel';
// console.log(names);
// names.push('sid');
// console.log(names);

// slice:
// console.log(names.slice(1,5));

// splice:
// let fruits=['apple','orange','mango','bananas'];
// fruits.splice(2,0,'chota apple','bada apple');
// console.log(fruits);
// fruits.splice(2,1,'chota apple','bada apple');
// console.log(fruits);

// concatination:

// let arr1=[1,2,4,6];
// let arr2=[2,5,4,1];
// console.log(arr1.concat(arr2));

// let arr4=[1,2,3,4,5,6,7,8,9];
// arr4.fill('sid',2,6);
// console.log(arr4)

// // include:
// let arr5=[1,2,4,8,5,6,8,7];
// console.log(arr5.includes(8,6));

// indexof:
// let num=[1,2,4,8,5,6,8,7];
// console.log(num.indexOf(6));

// // isArray:
// let num=[1,2,4,8,5,6,8,7];
// console.log(Array.isArray(num));

// let num2=[1,2,4,8,5,6,8,7];
// console.log(num2.join(' '))

// map:
// let math=[1,4,9,16,25];
// console.log(math.map(Math.sqrt));

// pop:

// let math=[1,4,9,16,25];
// console.log(math.pop());
// console.log(math);

// let rev=[1,4,9,16,25];
// console.log(rev.reverse())

// // shift:
// let shift=[1,4,9,16,25];
// console.log(shift.shift());
// console.log(shift);

// sort:

// let name=['siddharth','rahul','sagar','tejas','sachin','sourabh','shailesh'];
// console.log(name.sort());
// console.log(name.reverse(name.sort()));

// let nm=['siddharth','rahul','sagar','tejas','sachin','sourabh','shailesh'];
// nm.unshift('vinay','tushar');
// console.log(nm)

// converting to array:

// let name='siddharth';
// let array1=name.split('');
// console.log(array1)

// for of:

// let fruits=['apple','Bada apple', 'chota apple','double apple'];
// let upperfruits=[];
// for(const bigletter of fruits){
//     upperfruits.push(bigletter.toUpperCase());
// }
// console.log(upperfruits);

// continue:

// for(let i=0; i<=5; i++){
//     if(i==3){
//         continue;
    
//     }
//     console.log(i);
// }