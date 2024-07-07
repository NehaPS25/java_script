const nexEl = document.querySelector(".next");
const prevEl = document.querySelector(".prev");
const imgEl = document.querySelector("img")
const imageContainerEl = document.querySelector(".image-container");
let currentImg=1
let timeout;
nexEl.addEventListener("click",()=>
{
    currentImg++
    clearTimeout(timeout)
        updateImg ();


})

prevEl.addEventListener("click",()=>
{
    currentImg--
    clearTimeout(timeout)

        updateImg ();


})

function updateImg()
{
    if(currentImg>imgEl.length)
    {
        currentImg=1;
    }else if (currentImg<1)
    {
        currentImg=imgEl.length
    }
    imageContainerEl.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;}

timeout=setTimeout(()=>{
  currentImg++
  updateImg();
},3000)