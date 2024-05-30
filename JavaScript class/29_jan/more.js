// spread and rest

// spread 
// function sumone(x,y,z){
//     return x+y+z;
// }

// let var1=[9,7,7]

// console.log(sumone(...var1));

// rest 

// function sum(...args){
//     let sum=0;
//     for (const x of args) {
//         sum=sum+x;
//     }
//     return sum;
// }
// console.log(sum(1,2,3,4,5,6,7,8,9,10));


// try and catch 


// try{
//     let firstname="siddharth"
//     console.log(firstname + "" + lastname);
// }catch(err){
//     console.log(err.name,"variable missing");
// }finally{
//     console.log("i will run");
// }

// throw =>explore

// event loop 

// const userone= ()=>{
//     console.log("hello one");
//     setTimeout(()=>{
//         console.log("hello i am inside 1");
//     },3000)
// }
// const usertwo= ()=>{
//     setTimeout(()=>{
//         console.log("hello i am inside 2");
//     },3000)
//     console.log("hello two");
// }

// const userthree= ()=>{
//     console.log("hello three");
//     setTimeout(()=>{
//         console.log("hello i am inside 3");
//     },3000)
// }


// userone();
// usertwo();
// userthree();

// promise 

const One=()=>{
    return "i am one";
}

const two= () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("credential correct")
        },3000)
    });
}
const three= () =>{
    return "i am three";
}

const callMe=async  () =>{
    let valone=One();
    console.log(valone);

    let valtwo= await two();
    console.log(valtwo);

    let valthree=three();
    console.log(valthree);
    
}

callMe()

