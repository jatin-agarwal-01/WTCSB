// (function show(){
//     console.log("Hello, World!");
// })();     // imidiately invoked function expression (IIFE)
// const aa =() => {
//     console.log("Hello, World!");
// };
// aa();
function person() {
    this.age = 30;
    
    setTimeout(() => {
        console.log(this.age);
    }, 1000);

}
person();