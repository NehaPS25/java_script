const btn1 = document.querySelector(".btn");

btn1.addEventListener("mouseover",(event)=>{
const x =    console.log(event.pageX-btn1.offsetLeft);
const y =    console.log(event.pageX-btn1.offsetLeft);

btn1.style.setProperty("--xPos", x +"px")
btn1.style.setProperty("--yPos", y +"px")

})