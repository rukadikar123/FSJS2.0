let firstname = 'siddharth';
let lastname = 'rukadikar';
const mobile = 9284312621;

console.log(firstname);
console.log(lastname);
console.log(mobile);

// decision/conditions:
let rating=1;
if (rating==5){
    console.log("5 stars");
} else if(rating==4){
    console.log("4 stars");
} else if(rating==3){
    console.log("3 stars");
}else{
    console.log("i am else");
}


// switch case:

// let user='Admin';

// switch(user){
//     case 'Admin':
//         console.log("redirect him to the admin page");
//         break;
//     case 'mentor':
//         console.log("redirect him to mentor dashboard");
//         break;
//     default:
//         console.log("i am visiter" );
// }

// ternory:

let raining=false;

raining ? console.log("its raining"): console.log("not raining");