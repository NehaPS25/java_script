const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove" , (event)=>{
  const xPos = event.offsetX;
  const yPos = event.offsetY;
  const SpanEl = document.createElement("span");
  SpanEl.style.left=xPos+"px";
  SpanEl.style.top=yPos+"px"; 
  const size = Math.random()*100;
  SpanEl.style.width =size +"px";
  
  SpanEl.style.height =size +"px";
  bodyEl.appendChild(SpanEl);
  setTimeout(()=>{
      SpanEl.remove();
  },3000)

})