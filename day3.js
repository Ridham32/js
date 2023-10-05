var studentList = [
  {
    roll: 1,
    name: "Ridham",
    currentCourse: "Advance Js",
    upcoming: "Node Js",
    college: "Daviet",
    "company course": "Android + Nodejs",
    institute: {
        seniorSecondary: "xyz school",
        graduation: "ptu",
        postgraduate: "Nit jal",
      }
  },
  {
    roll: 2,
    name: "Roma",
    currentCourse: "Advance Js",
    upcoming: "Node Js",
    college: "Daviet",
    "company course": "kotlin + Nodejs",
    institute: {
        seniorSecondary: "XYZ school",
        graduation: "hmv",
        postgraduate: "Nit jal",
      }
  },
  {
    roll: 3,
    name: "Shruti",
    currentCourse: "Advance Js",
    upcoming: "Node Js",
    college: "Cjs",
    "company course": "Flutter + Nodejs",
    institute: {
      seniorSecondary: "ABC school",
      graduation: "Cjs",
      postgraduate: "Nit jal",
    },
  },
  {
    roll: 4,
    name: "Astha",
    currentCourse: "Advance Js",
    upcoming: "Node Js",
    college: "Daviet",
    "company course": "Flutter + Nodejs",
    institute: {
      seniorSecondary: "PQR school",
      graduation: "Dav",
      postgraduate: "iit",
    },
  },
];

// console.log(studentList);
// console.log(studentList[3].name);
// console.log(studentList[2].institute)
// to display the info of every student
// for (const i of studentList) {
//     console.log(i.name);
//     console.log(i.institute);
//     console.log("--------");
// }


let upcomingBatch = studentList.filter((element)=>{
    return element.upcoming == "Node Js"
})

let colleges = studentList.filter((item)=>{
     if( item.college == "Daviet"){
        console.log(item.name);
     }
})











