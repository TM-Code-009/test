

// let a = "terry" + 3



// console.log(a)

// Arithmetic operators + - * / % **

// let num1 = 20
// let num2 = 5

// console.log(num1 + num2)
// console.log(num1 - num2)
// console.log(num1 * num2)
// console.log(num1 / num2)
// console.log(num1 % num2)
// console.log(num1 ** num2)

// comparison operators > < >= <= == === != !==

// console.log(num1 > num2)
// console.log(num1 < num2)
// console.log(num1 === num2)
// console.log(num1 !== num2)
// console.log(num1 != num2)
// console.log(num1 == num2)


// logical operators && || !

// let hasid = false
// let paidfees = true

// console.log(hasid && paidfees)
// console.log(hasid || paidfees)
// console.log(!hasid)



// Functions

// function greet(name){
//     console.log("Hello", name)
// }

// greet("Terry")
// greet("John")
// greet("Sarah")

// function add(a,b){
//     return a + b;
// }

// const total = add(20,10)

// console.log(total)


// Arrays

// let students = ["Terry","Sarah","John","Mike"]


// Loop

// for(const student of students){
//     console.log(student)
// }


// Objects

// const student = {
//     name:"Terry",
//     age:20,
//     course:"Computer Science"
// }

// console.log(student.name)



// Linear Search 

// const student = ["ada","grace","terry","john","mike"]

// function linearSearch(arr,target) {
//     for(let i = 0; i < arr.length; i++ ){
//         if(arr[i] === target){
//             return i;
//         }
//     }
//     return -1
// }

// console.log(linearSearch(student,"terry"))
// console.log(student[2])


// const numbers = [10,25,40,55,70,95]

// function findNumber(arr,target) {
//     for(let i = 0; i < arr.length; i++ ){
//         if(arr[i] === target){
//             return `Found at index ${i}`;
//         }
//     }
//     return "Number not Found"
// }

// console.log(findNumber(numbers,55));
// console.log(numbers[3]);


// Binary search


// function binarySearch(array, target) {
//     let left = 0;
//     let right = array.length - 1;

//     while (left <= right) {

//         const middle = Math.floor((left + right) / 2);

//         if (array[middle] === target) {
//             return middle;
//         }

//         if (array[middle] < target) {
//             left = middle + 1;
//         } else {
//             right = middle - 1;
//         }
//     }

//     return -1;
// }

// console.log(
//     binarySearch([5,10,15,20,25],20)
// );

// // let terry = false

// // while (terry) {
// //     console.log(terry)
// // }


// Bubble sort


// function bubbleSort(numbers){
    //     const arr = [...numbers];
    
//     for(let i = 0; i < arr.length - 1; i++){
//         for(let j=0;j< arr.length - 1; j++){
//             if(arr[j] > arr[j + 1] ){
//                 let result = arr[j];
//                 arr[j]= arr[j+1];
//                 arr[j+1] = result
//                 console.log(arr)
//             }
//         }
//     }

//     return arr
// }

// // console.log(numbers)
// console.log(bubbleSort(numbers))



// function selectionSort(numbers){
//     const arr = [...numbers];

//     for(let i = 0; i< arr.length; i++){
//         let smallest = i;

//         for(let j = i +1; j < arr.length;j++){

//             if(arr[j] < arr[smallest]){
//                 smallest = j
//             }
//         }

//         if (smallest !== i){
//             let result = arr[i];
//                 arr[i]= arr[smallest];
//                 arr[smallest] = result
//                 console.log(arr)
//         }
//     }

//     return arr
// }

// console.log(selectionSort(numbers))





    // let numbers = [3,23,56,7,8,21,21,14,16,17,98]

    // numbers.sort((a,b) => console.log(a - b ))
    // console.log(numbers);
    

// Recursive function

function countdown(number){
    if(number === 0){
        console.log("Blast off");
        return   
    }

    console.log(number)

    countdown(number - 1)
}

countdown(5)

for(let i = 5; i>=0; i--){
    if(i ===0){
        console.log("blast off");
        
    }else{
        console.log(i);
        
    }
}

