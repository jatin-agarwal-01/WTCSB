// (function show(){
//     console.log("Hello, World!");
// })();     // imidiately invoked function expression (IIFE)
// const aa =() => {
//     console.log("Hello, World!");
// };
// aa();
// function person() {
//     this.age = 30;
    
//     setTimeout(() => {
//         console.log(this.age);
//     }, 1000);

// }
// person();
const aa = () =>{ return { user: "name"}};
console.log(aa());

const bb = ()=> [1,2,3,4,5,6];
console.log(bb());

const user = {
    name: "JA", age:20,
    welcome: function(){
        console.log(`hello ${this.name}`);
        console.log(this)
    }
};

user.welcome();
user.name="Jatin";
user.welcome();