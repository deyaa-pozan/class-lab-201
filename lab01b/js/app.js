let userName = prompt("What is your name")
console.log(userName);

let Age = prompt("How old are you")
console.log(Age);

let height = prompt("How much your height? M")
console.log(height);

let width = prompt("How much do you weigh? KG")
console.log(width);


let result =parseFloat(width)  / parseFloat(height*height);


let p1 = document.createElement("p");
p1.append("hello "+userName);
let srcP1 = document.getElementById("result");
srcP1.appendChild(p1);

let p2 = document.createElement("p");
p2.append("your age "+Age);
let srcP2 = document.getElementById("result");
srcP2.appendChild(p2);

  
let p3 = document.createElement("p");
p3.append("your BMI  "+result);
let IBM = document.getElementById("result");
IBM.append(p3);

alert("IBM = "+result)