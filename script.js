const num1 = Math.ceil(Math.random()*10);
 const num2 = Math.ceil(Math.random()*10);
//console.log(num1); to check whether code run or not

//to manipulate the header question we need it ti bring it first at javascript
const questionE1 = document.getElementById("question");
//we need to get the answer from the user
const formE1 = document.getElementById("form");
//if someone submit the form the information we want to get is the whatever inside the input
const inputE1 = document.getElementById("input");
const scoreE1 = document.getElementById("score");


let score = JSON.parse(localStorage.getItem("score"));
if(!score) {
    score = 0;
}
scoreE1.innerText = `score: ${score}`

//now we can manipulated using .innerText
questionE1.innerText = `what is ${num1} multiply by ${num2}?`
//here we need correct answer for user submit
const correctAns = num1 * num2;
//add evenr listener here whenever user submit the form we activate call bacj function
formE1.addEventListener("submit",()=>{
    const userAns = +inputE1.value//here adding + to input is to change string into number
    if(userAns === correctAns){
        score++;
        updateLocalStorage()
    }else{
        score--;
        updateLocalStorage()
    }
});
function updateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score))//here jason added to change number into string
}; 

