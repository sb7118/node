//add module
let add = (a,b) => {
    return a + b;
};

let sub = (a,b) => {
    return a - b;
};

let multiply = (a,b) => {
    return a * b;
};

let div = (a,b) => {
    return a / b;
};

let factorial = (a) => {
    let factor = 1;
    for(let i = 1; i <= a; i++){
        factor *= i;
    }
    return factor;
};
// module.exports = <class> or <function> 
module.exports = add,sub,multiply,div,factorial;

// console.log(factorial(5));