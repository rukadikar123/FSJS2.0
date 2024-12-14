console.log(a);
var a=19;
console.log(a);
 

let user_details={
    firstName:"siddharth",
    lastName:"rukadikar",
    course_list:[],
    website:"siddharth.me",
    buyCourse:function (courseName) {
        this.course_list.push(courseName)
    },
    getCourseCount:function(){
        return `${this.firstName}  is enrolled in ${this.course_list.length}`
    },
}

user_details.buyCourse("fsjs");
// console.log(user_details);

console.log(user_details.getCourseCount());

