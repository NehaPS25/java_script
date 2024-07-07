const bgIamgeEl = document.getElementById("bg-image")

window.addEventListener("scroll" ,()=>{
    updateImage()
})
function updateImage(){
    bgIamgeEl.style.opacity=1 - window.pageYOffset/800
    bgIamgeEl.style.backgroundSize =160-window.pageYOffset/12 +"%"
}