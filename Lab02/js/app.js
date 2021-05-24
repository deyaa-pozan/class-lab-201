let userName = prompt("What is your name")
document.getElementById("name").textContent = userName;

let Q1 = prompt("Do you have a business?").toLocaleLowerCase()
let Q2 = prompt("Do you need a website?").toLocaleLowerCase()
let Q3 = prompt("Do you need a Mobile Application?").toLocaleLowerCase()
let Q4 = prompt("Do you have money is very important ? :)").toLocaleLowerCase()
let arr = [Q1,Q2,Q3,Q4]
var count = 0;
arr.forEach(element => {
    switch (element) {
        case "yes": count++
            break;
        case "y": count++
            break;
        default:
            break;
    }
});

if(count >=3){
    alert("contact with me 0799999999")
}



