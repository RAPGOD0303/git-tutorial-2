let a = 10;
let b = "10";

// loose comparison
console.log(a==b);
//Strict Comparison
console.log(a===b);


let marks = 88;

if(marks >= 95){
    console.log("Distinction Grade.");
}
else if(marks >= 85 && marks <=94){
 console.log("A+ Grade.")
}
else if(marks >= 75 && marks <= 84){
    console.log("A Grade.")
}
else{
    console.log("You Failed!!!")
}

//Even Odd Number.
let num = 123;

if(num %2 == 0){
    console.log("The Number is Even.")
}
else{
    console.log("The Number is odd.")
}

//Largest Number

let num1 = 3;
let num2 = 15;
let num3 = 11;

if(num1 > num2 && num1 > num3){
    console.log("Num 1 is larger", num1);
}
else if(num2 > num1 && num2 > num3){
    console.log("Num 2 is lager", num2);
}
else{
    console.log("Num 3 is larger", num3);
}

//Assignment

let c = 12;
let d = 30;

if(c > d){
    let result = c/d;
    console.log("Result of c/d == ", result);
}
else{
    let result = d/c;
    console.log("Result of d/c == ", result);
}

