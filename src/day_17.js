// //functions - resuable code block to perform certain task.

// // syntax - function function_name(){
// // --
// // -- scope of function
// // }


// function hello(){
//     //No parameter is passed.
//     console.log("Hello, Rajvardhan");
// }

// hello();

// //Parameter Function
// function add(a, b){
//     let c = a +b
//     console.log(c);
// }

// add(3,2);

// //fucniton expression
// const mul = function(c,d){
//     return c*d;
// }
// console.log(mul(4,3));


// //arrow function
// const div = (e,f)=>{
// if(f===0){
//     console.log("Value is zero. the result will be infinite")
// }
// else{
//     return e/f;
// }
// }

// console.log(div(2, 5));


// const square = (a) =>{
//     if(a != 0){
//     return a*a;
//     }
//     else{
//         console.log("Invalid Number");
//     }
// }

// console.log(square(9));

// //short fucntion
// const cube = n => n*n*n;

// console.log(cube(3));


// //callback function
// function greet(name, callback){
//     console.log("Hello", name);
//     callback();
// }
// function sayBye(){
//     console.log("Goodbye");
// }

//  greet("Pooja", sayBye);

//  //Default Parameter

//  function name1(name="Guest"){
//     console.log("Hi", name);
//  }

//  name1();
//  name1("Appa");

//  const mul1 = (a = 1,b=1)=>{
//     console.log("Multipication is = " , a*b)
//  }

//  mul1();
//  mul1(2)
//  mul1(2,3)

//Rest Parameter

const prd = (...num) => {
    let product = 1;
    for(let i = 1; i <= num.length; i++) {
        product *num[i];
    }
    console.log(product)
}
prd(2,3,4,5);
