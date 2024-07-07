const contE= document.querySelector(".conatiner");
for (let index = 0; index < 30; index++) {
    const colorContainerEl=document.createElement("div");
    colorContainerEl.classList.add("color-c");
    contE.appendChild(colorContainerEl);
    
}
const colorConatinerEls = document.querySelectorAll(".color-c");
generateColors();
// console.log(colorConatinerEls);
function generateColors()
{
  colorConatinerEls.forEach((colorContainerEl)=>{
    const newColorCode = randomColor();
    
    colorContainerEl.style.backgroundColor="#" + newColorCode;
    colorContainerEl.innerText ="# "+ newColorCode;

  })
}



function randomColor(){
    const chars ="0123456789abcdef"
    const colorCodeLen =6;
    let colorCode =""
    for (let index = 0; index < colorCodeLen; index++) {
       const randomNum = Math.floor(Math.random() * chars.length);
       colorCode += chars.substring(randomNum, randomNum + 1);
    }
    return colorCode;
}
