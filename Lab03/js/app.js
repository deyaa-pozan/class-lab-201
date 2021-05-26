"use strict"
let userName = prompt("What is your name")
document.getElementById("name").textContent = userName;

alert("hi " + userName)
alert("Your answer should be yes/y or no/n ")
let Q1 = prompt("Q1 :Do I like football?").toLowerCase()
let Q2 = prompt("Q2 :Do I love Mansaf?").toLocaleLowerCase()
let Q3 = prompt("Q3 :Am I 22 years old?").toLocaleLowerCase()
let Q4 = prompt("Q4 :Am I a programmer?").toLocaleLowerCase()
let Q5 = prompt("Q5 :Am I from Syria?").toLocaleLowerCase()



 let count = 0
 function firstFiveQ(){
let arr = [Q1, Q2, Q3, Q4, Q5]
for (let i = 0; i < arr.length; i++) {
    
    switch (arr[i]) {
        case "yes": {alert(`Q${i+1} Your answer is correct`)
         count++
        break;}
        case "y":  {alert(`Q${i+1} Your answer is correct`)
        count++
       break;}
        case "no":alert(`Q${i+1} Your answer is wrong`) 
        break;
        case "n": alert(`Q${i+1} Your answer is wrong`) 
            break;
        default:
            break;
    }

}   

 }
function sixthQ(){
for (let i = 0; i < 4; i++) {
    let Q6 = prompt("Q6 :Guess a number from 1 to 10")
    Q6 = Number(Q6)
    if (Q6 == 6 ) {
        alert("Your answer is correct")
        count++
        break;
    }else if (Q6 < 6 && Q6 > 0){
        alert("Your answer is too low")
        
    }else if (Q6 > 6 && Q6 < 11){
        
      alert("Your answer is too high")
       
    } else{
        Q6 = prompt("Please enter a number from 1 to 10")
       
        i--;
    }
  
}
}
function seventhQ(){
 let Q7 = prompt("Q7 :Enter one of the top 10 programming languages ​​for the year 2021").toLocaleLowerCase()

let arr2 =  ['python','javascript','java','c++','golang','c#','sql','dart','r','php'];

for (let i = 0; i < 6; i++) {
    for (let j = 0; j < arr2.length; j++) {
        if (Q7 ==arr2[j] ) {
            alert("Your answer is correct")
            alert("Correct answers "+arr2)
            count++;
            i = 7;
            break ;
        }

    }
    
}
}

alert("Correct answers are : " + count)

firstFiveQ();
sixthQ();
seventhQ();




