// function add(...number){
//     let total=0;
//     for(let i=0;i<number.length;i++){
//         total+=number[i];
//     }
//     return total;
// }
// console.log(add(1,2,3,4,5,6));

//write an arrow function isEven that takes a number and return Even or Odd
const isEven=(num)=>{
    return num%2===0?"Even":"Odd";
}
console.log(isEven(10));
console.log(isEven(15));

//Write an arrow function reverseString(str) that return the reverse of the string using for loop
const reverseString=(str)=>{
    let reversed="";
    for(let i=str.length-1;i>=0;i--){
        reversed=reversed + str[i];
    }
    return reversed;
}
console.log(reverseString("hello"));

//Write an arrow function averageMarks to compute average marks abd return "Pass" if average >= 40 else "Fail"
const averageMarks=(...marks)=>{
    let total=0;
    for(let i=0;i<marks.length;i++){
        total=total + marks[i];
    }
    let average=total/marks.length;
    return average>=40?"Pass":"Fail";
}
console.log(averageMarks(50,60,70));
