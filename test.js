// * 1 create an array containing each student 
//  should have name,age,course and score, display all students using a loop*/

//  const students = [
//     {name: "John",  course:"Computer science", score: 80},
//     {name: "Mary",  course:"Computer science", score: 42},
//     {name: "Peter",  course:"Computer science", score: 90}
// ]
// for(const student of students){
//     console.log(student.name + "  " + student.course + "  " +  "scored" +  " - " + student.score )
//  }


// 2 Write Function that sorts the students by their scores from ., Display the sorted list

// const students = [
//     {name: "John",  course:"Computer science", score: 80},
//     {name: "Mary",  course:"Computer science", score: 42},
//     {name: "Peter",  course:"Computer science", score: 90}
// ]
// function sortScore(students){
//   return students.sort((a,b) => b.score - a.score);

// }
// const sortedStudents = sortScore(students);

// for( const student of sortedStudents){
//  console.log(student.name + "  " + "-" + " " + "score:" + " " + student.score + " ");
  
// }


/* 3 Create afunction called searchStudent().The function accepts a student name, 
search the array using., Return the student's details if found and 
return "Student not found" if the student does not exist*/

// const students = ["ayo","peter","ife","john","emeka"];

// function searchStudent(arr, target){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === target){
//             return arr[i];
//         }


//     }

//     return "Student not Found";
  
// }
// console.log(searchStudent(students,"ayo"));
// console.log(students[2]);


/* Create a recursive function that counts down from .
After reaching 1, display: Starting student Report*/

// function countdown(number){
//     if(number <= 0){
//         console.log("Starting Student Report..")
//         return;
//     }
//     console.log(number)

//     countdown(number - 1)
// }
// countdown(5)





/*Create a function called checkResult(score).
rules:
score 70 and above - Excellent
score 50-69 - Passed
Below 50 - Failed
Display every student in this format 
1. John-82-Excellent
2. Mary-61-Passed
3. Peter-45-Failed */


// const students =[{name: "John", score: 82},
//     {name: "Mary",  score: 61},
//     {name: "Peter",   score: 45}
// ]

// function checkResult(score){
//     if ( score >= 70) {
//         return "Excellent"
//     }else if(score >= 50){
//         return "Passed";
//     }else{
//         return "Failed";
//     }
// }
// for(const student of students){
//     console.log(`${student.name} - ${student.score} - ${checkResult(student.score)}`);
    
// //     console.log(student.name + " " + " - " +  student.score + " - "  + checkResult(student.score))
// //  }
// }







const students = [
    {
        name: "Bello",
        age: 20,
        course: "Computer Science",
        score: 82
    },
    {
        name: "Shaibu",
        age: 22,
        course: "Information Technology",
        score: 61
    },
    {
        name: "Razaq",
        age: 19,
        course: "Software Engineering",
        score: 45
    },
    {
        name: "Onimisi",
        age: 21,
        course: "Cyber Security",
        score: 74
    },
    {
        name: "Hajarat",
        age: 23,
        course: "Data Science",
        score: 55
    }
];


console.log("===== STUDENT LIST =====");


for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}


// ===============================
// Question 2 - Sorting
// ===============================


function sortStudents() {


    students.sort((a, b) => b.score - a.score);


    console.log("\n===== SORTED STUDENTS =====");


    students.forEach(student => {
        console.log(student.name + " - " + student.score);
    });


}


sortStudents();


// ===============================
// Question 3 - Searching
// ===============================


function searchStudent(name) {


    const student = students.find(
        student => student.name.toLowerCase() === name.toLowerCase()
    );


    if (student) {
        return student;
    } else {
        return "Student not found";
    }


}


console.log("\n===== SEARCH RESULT =====");


console.log(searchStudent("Mary"));
console.log(searchStudent("James"));


// ===============================
// Question 4 - Recursion
// ===============================


// function countdown(number) {


//     if (number === 0) {
//         console.log("Starting Student Report...");
//         return;
//     }


//     console.log(number);


//     countdown(number - 1);


// }


// console.log("\n===== COUNTDOWN =====");


// countdown(5);


// ===============================
// Question 5 - Student Result Report
// ===============================


// function checkResult(score) {


//     if (score >= 70) {
//         return "Excellent";
//     } else if (score >= 50) {
//         return "Passed";
//     } else {
//         return "Failed";
//     }


// }


// console.log("\n===== STUDENT REPORT =====");


// students.forEach((student, index) => {


//     console.log(
//         `${index + 1}. ${student.name} - ${student.score} - ${checkResult(student.score)}`
//     );


// });
