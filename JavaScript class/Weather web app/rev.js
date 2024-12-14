// const number=[1,2,3,4,5,6];

// const num=number.map((arr_val)=> arr_val * 5)
// console.log(num);

// const count=["india","finland","srilanka","ireland"];
// const countr= count.filter((val)=>val.includes("land"))

// console.log(countr);

// reduce

// const num1=[1,2,3,4,5,6,7,8,9];
// const sum=num1.reduce((acc,cur)=> acc+cur,1);
// console.log(sum);

// promise

// const make_promise=new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//       const arr_one=["HTML","CSS","Javascript","Tailwind"];
//       if(arr_one.length>0){
//         resolve("completed")
//       }else{
//         reject("incomplete")
//       }
//     },3000)
// })
// make_promise.then((result)=>{
//   console.log(result);
// }).catch((result)=>{
//   console.log(result);
// })

// const url = "https://restcountries.com/v2/all";

// fetch(url).then((response) => response.json()).then((data) => console.log(data)).catch((error) => console.log(error))

function outer() {
    let x = 10;
  
    function inner() {
      console.log(x); // Output: 10
    }
  
    return inner;
  }
  
  const innerFunc = outer();
  innerFunc(); // Output: 10