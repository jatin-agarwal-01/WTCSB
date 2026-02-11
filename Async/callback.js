// console.log("First");console.log("Second");console.log("LAST");

// function roll(num,time,next){
//     setTimeout(()=>{
//         console.log("Roll No is: "+num);
//         if(next)next();
//     },time);
// }
// roll(12212,1000,()=>{
//     console.log("Wait its getting downloaded");
//     roll(12312,2000,()=>{
//         console.log("Wait its getting downloaded");
//         roll(12412,3000,()=>{
//             console.log("Wait its almost over");
//             roll(12512);
//         });
//     });
// }); 
// const p = new Promise((resolve, reject) => {
//   reject("Big Block error");
//   resolve("sab theek hai");
// });
// p.then((value) => {
//   console.log(value);
// }).catch((error) => {
//   console.log("error hai", error);
// });

console.log("1) Start");

const p = new Promise((resolve, reject) => {
  console.log("2) Promise created ");
  setTimeout(() => {
    resolve("3) Work finished");
  }, 1000);
});
console.log("4) After creating promise");

p.then((value) => {
  console.log(value); // runs AFTER resolve(...)
  console.log("5) then() runs only when promise is resolved");
});

console.log("6) End (JS keeps running; then will run later)");