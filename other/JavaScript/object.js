// console.log(this);

// const object={
//     firstname:'siddharth',
//     lastname:'rukadikar'
// };
// for (k in object){
//     console.log(object[k]);
//     console.log(k);
// }

// const obj1={
//     rocket:'124',
//     fuel:2,
//     config:{
//         name:'mars'
//     }
// }
// obj1.fuel=200;
// obj1.year=2000;
// console.log(obj1);

// const obj2=new Object()
// obj2.book=12;
// obj2.vehicle='wagonR';
// console.log(obj2);

// const powers={
//     fly:true,
//     coordinate:Math.random()+2
// }
// const obj3=Object.create(powers);
// console.log(obj3.coordinate);
// console.log(Object.getPrototypeOf(obj3));

// const obj4=Object.create({})
// obj4.name='siddharth';
// console.log(obj4);

// const obj4=Object.create({})
// Object.defineProperty(obj4,'book',{
//     get: () =>'history',
//     enumerable: true
// })
// // console.log(obj4.book);
// // console.log(Object.getPrototypeOf(obj4));
// for(k in obj4){
//     console.log(k);
// }


// const obj5={
//     comics:'marvel',
//     pen:'',
//     printcomic: function(){
//         this.pen += 'blue'
//         console.log(this)
//         return this
    },
    // printafunc: () => {
    //     // this.pen += 'blue'    //in this arrow func (this) keyword does not have access. 
    //     console.log(this)
    // },
};
console.log(obj5);
// console.log(obj5.printcomic());
// console.log(obj5.printafunc());
console.log(obj5.printcomic().printcomic().printcomic());