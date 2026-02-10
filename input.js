// const r1=require("readline").createInterface({
//     input:process.stdin,
//     output:process.stdout
//});
// r1.question("Enter something: ",
//     (answer)=>{   // callback function
//     console.log("You entered: "+answer);
//     r1.close();
// });



function calculator() {
    return {
        add: (a, b) => a + b,
        sub: (a, b) => a - b,
        mul: (a, b) => a * b,
        div: (a, b) => b !== 0 ? a / b : "Error: Division by zero"
    };
}

const calc = calculator();
console.log(calc.add(10, 5));    
console.log(calc.sub(10, 5));    
console.log(calc.mul(10, 5));    
console.log(calc.div(10, 0));    

//Question 2 
//write a java script program that creates a calculator() function. The Calculator() function should return an object that has four methods: add(a,b),sub(a,b),mul(a,b),div(a,b).
function calculatorSwitch(operation, a, b) {
    switch(operation) {
        case 'add':
            return a + b;
        case 'sub':
            return a - b;
        case 'mul':
            return a * b;
        case 'div':
            return b !== 0 ? a / b : "Error ho gyi";
        default:
            return "Invalid operation";
    }
}

console.log(calculatorSwitch('add', 10, 5));
console.log(calculatorSwitch('sub', 10, 5));
console.log(calculatorSwitch('mul', 10, 5));
console.log(calculatorSwitch('div', 10, 5));