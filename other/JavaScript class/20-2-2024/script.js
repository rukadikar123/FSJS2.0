// let heros=["thor", "iron man","spiderman"]
// let dcheros=["batman","superman"]

// let heropowers={
//     thor:'hammer',
//     spiderman:'sling',

//     getspiderpower: function(){
//         console.log(`spidy power is ${this.spiderman} `);
//     }
// }
// Object.prototype.sid=function(){
//     console.log(`sid is present in all objects`); 
// }

// heros.sid()

// inheritance

// const user={
//     name:'top name',
//     email:'topuser@gmail.com'
// }
// const Teacher={
//     makeVideos:'true'
// }
// const Teachingsupport={
//     isavailable:false
// }

// const TAassistant={
//     makeassignment:'js assiognment',
//     fulltime:true,
//     __proto__: Teachingsupport
// }
// Teacher.__proto__=user
// Object.setPrototypeOf(Teachingsupport,Teacher)

// to get true length

let yourname="rahul    "

String.prototype.truelength = function(){
    console.log(`true length is ${this.trim().length}`)
}
myname="sid   "