const containerEl = document.querySelector(".container");

const btnEl = document.querySelector(".btn");

const popupcontelEL = document.querySelector(".popup-container");

const closeIconEL = document.querySelector(".close-icon");

btnEl.addEventListener("click", ()=>{
  containerEl.classList.add("active");
  popupcontelEL.classList.remove("active");
})
closeIconEL.addEventListener("click",()=>{
    containerEl.classList.remove("active");
  popupcontelEL.classList.add("active");
})