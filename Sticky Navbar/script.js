const navbarEl = document.querySelector(".navbar");
const bottomcontainerEl = document.querySelector(".bottom-conatiner");
window.addEventListener("scroll",()=>{

   if(window.scrollY>bottomcontainerEl.offsetTop-navbarEl.offsetHeight-50)
   {
      navbarEl.classList.add("active");
   } else{
    navbarEl.classList.remove("active");
  }
   
   
});