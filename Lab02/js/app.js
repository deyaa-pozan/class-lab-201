"use strict"
let userName = prompt("What is your name")
document.getElementById("name").textContent = userName;

alert("hi " + userName)
alert("Your answer should be yes/y or no/n ")
let Q1 = prompt("Q1 :Do I like football?").toLocaleLowerCase()
let Q2 = prompt("Q2 :Do I love Mansaf?").toLocaleLowerCase()
let Q3 = prompt("Q3 :Am I 22 years old?").toLocaleLowerCase()
let Q4 = prompt("Q4 :Am I a programmer?").toLocaleLowerCase()
let Q5 = prompt("Q5 :Am I from Syria??").toLocaleLowerCase()

let arr = [Q1, Q2, Q3, Q4, Q5]
for (let i = 0; i < arr.length; i++) {
    
    switch (arr[i]) {
        case "yes": alert(`Q${i+1}Your answer is correct`)
        break;
        case "y": alert(`Q${i+1}Your answer is correct`)
            break;
        case "no":alert(`Q${i+1}Your answer is wrong`) 
        break;
        case "n": alert(`Q${i+1}Your answer is wrong`) 
            break;
        default:
            break;
    }

}    





