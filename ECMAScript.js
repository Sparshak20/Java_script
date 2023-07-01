//1996 JAvaScript
//1997 Ecma International -> Ecma Script
//ES6 ->  2015
//2016 ES7
//2017 ES8
//2018 ES9
//2019 ES10
//2020 ES11


// ES6
//1. LET and CONST 2. Destructuring 3. Template Strings 4. Object Properties
//5. Default Arguments 6/ Arrow function 7. Rest operators 8. Spread Operators

// LET VS CONST VS VAR
//let and const ->Block Scope
//var -> Function Scope
// var myname="Thapa";
// console.log(myname);
// myname="Vinod";
// console.log(myname); // here we will get output as Thapa and Vinod

// let myname="Thapa";
// console.log(myname);
// myname="Vinod";
// console.log(myname); // here we will get output as Thapa and Vinod

// const myname="Thapa";
// console.log(myname);
// myname="Vinod";
// console.log(myname);   //Give error

//let and const ->Block Scope
//var -> Function Scope


// Function Scope
// function biodata(){
//     var myname="thapa";
//     console.log(myname);

//     if(true)
//     {
//         var mylastname="Vinod";
//         console.log('inner'+ mylastname);
//         console.log('inner'+ myname);
//     }
//     console.log('innerOuter'+ mylastname);

// }
// biodata();
//Output
// thapa
// innerVinod
// innerthapa
// innerOuterVinod

// function biodata(){
//     let myname="thapa";
//     console.log(myname);

//     if(true)
//     {
//         let mylastname="Vinod";
//         console.log('inner'+ mylastname);
//         console.log('inner'+ myname);
//     }
//     console.log('innerOuter'+ mylastname);

// }
// biodata();

//Output
// thapa
// innerVinod
// innerthapa
// D:\Frontend\ECMAScript.js:65
//     console.log('innerOuter'+ mylastname); SHowing Errror


// 2. Template Literals (Template Strings)
//JavaScript program to print table of 8

// for(let num =1;num<=10;num++)
// {
//     let tableof =12;
//     console.log(tableof + " * "+num+" = "+ tableof*num);
//     console.log(`${tableof} * ${num} = ${tableof*num}`);
// }

// 3. Default Arguments 
// Default function parameters allow named parameters to be initialised with
//default values if no value or undefined is passed
// function mult(a,b)
// {
//     return a*b;
// }
// console.log(mult(5,2));
//Output = 10;
// function mult(a,b=10)
// {
//     return a*b;
// }
// console.log(mult(5));
// Output = NaN; here we can use default arguments

// 6. Arrow Function
// norwal way of writing a function
// function sum()
// {
//     let a=4; let b=10;
//     let sum=a+b;
//     return `the sum is ${sum}`;
// }
// console.log(sum());

// How to convert into Fat Arrow Function
// First Define then Call
const sum = () => {
    let a=4; let b=10;
    let sum=a+b;
    return `the sum is ${sum}`;
}
console.log(sum());
