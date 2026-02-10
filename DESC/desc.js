// const student={
//     name: "Rohit",
//     age:33,
//     address: {
//         city:"Ghz",
//         state:"UP"
//     }
// }
//const {name: stname,age}=student;
//console.log(stname,age);
// const {name: stname,age,address: {city} }=student;
// console.log(stname,age,city);
// const {name: stname="Amit",age,address: {city} }=student;
// console.log(stname,age,city);

// function displaystu({name,age}){
//     console.log(`My name is ${name} and age is ${age}`)
// }
// displaystu(student);

let numbers=[10,20,30];
let a,b,c=numbers;
console.log(a,b,c);


let data=[1,2];
let [x=5,y=7]=data;
console.log(x,y);

let p=5;
let q=10;
[p,q]=[q,p];
console.log(p,q);