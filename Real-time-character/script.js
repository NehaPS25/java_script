const textareaEl = document.getElementById("textarea");
const totalcounterEl = document.getElementById("total-counter");
const reaminingEl = document.getElementById("Remaining-counter");
textareaEl.addEventListener("keyup",()=>{
    console.log("Key is pressed");
    updatecounter();
})
updatecounter();
function updatecounter(){
   totalcounterEl.innerText= textareaEl.value.length
    reaminingEl.innerText=textareaEl.getAttribute("maxlength")-textareaEl.value.length
}