const num1 = Math.ceil(Math.random()*10)
const num2 = Math.ceil(Math.random()*10)
const questionEl = document.getElementById("question");
let score=JSON.parse(localStorage.getItem("score"))
questionEl.innerText=`what is ${num1} multiply ${num2} ?`
// let score=0;
if(!score){
    score=0;
}
const scoreEl = document.getElementById("score");
console.log(num1)
console.log(num2)
scoreEl.innerText=`score:${score}`
const corrAns =num1*num2;
const inputEl = document.getElementById('input');
 const formEl = document.getElementById('form');
 formEl.addEventListener("submit", ()=>{
    // event.preventDefault();
  const userAns=+inputEl.value
 if(userAns==corrAns)
 {
    score++;
    console.log(score);
 upLocalstorage()

 }else{
    score--;
    console.log(score)
     upLocalstorage()


 }
 })

 function upLocalstorage()
 {
    localStorage.setItem("score" ,JSON.stringify(score))
 }