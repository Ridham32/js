var arr = [1,2,3,4,5,6,7,8,9,10]
// arr.splice(start,deleteCount,elementList)
//replace and deletion
// arr.splice(3,3,10,50,40,30,20)
// console.log(arr)

// var returnarr = arr.splice(3,3)
// console.log(arr);
// console.log("returned Array",returnarr);

//to add element in an array
// arr.splice(5,0,40)
// console.log(arr)

//Loops
// let i = 0
// while (i<=5) {
//     console.log("Hello While");
//     i++
//     }

//     do {
//        console.log("Hello doWhile"); 
    
//     } while (i<=5);

//var sum = 0
// for(let i = 1; i<=5;i++){
//     sum = sum*i
// }
// console.log(sum);


//loops with array

// for(let i = 0; i <arr.length;i++){
//     //console.log(arr[i]);
//     sum += arr[i]
//     }
// console.log(sum);

//for in loop  i(iterative variable)
// for(let i in arr){
//     console.log(arr[i]);
// }

//for of loop i(direct element)
// console.log("For Of Loop");
// for(let i of arr){
//     console.log(i);
// }

// arr.forEach((element)=>{
//     console.log(element);
// })

var studentDetail = [1,["Name","Ridham"],"Advance Js","Node Js","Daviet","Android + Nodejs"]
//console.log(studentDetail);
var studentObj = {
    //key value ,
    roll : 1,
    name:"Ridham",
    currentCourse: "Advance Js",
    upcoming:"Node Js",
    college: "Daviet",
    "company course": "Android + Nodejs",
    marks:[34,45,56,22,55]
}
//to add in the obj 
studentObj.bloodGrp = "B+"
delete studentObj.currentCourse

console.log(studentObj);
console.log(studentObj.college);
var abc = JSON.stringify(studentObj)
console.log(abc);
var parseObj = JSON.parse(abc)
console.log("Parsed Object",parseObj);







