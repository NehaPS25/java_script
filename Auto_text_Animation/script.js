const containerEl = document.querySelector(".container");
const careers = ["YouTube","WebDeveloper","Freelancer","Instructor"];
let carrInd=0;
let characterIndex=0;
updateText()

function updateText(){
    characterIndex++
    containerEl.innerHTML=` <h1>I am ${careers[carrInd].slice(0,1)==="I" ?"an":"a"} ${careers[carrInd].slice(0,characterIndex)}</h1>`
          
           if(characterIndex===careers[carrInd].length)
           {
            carrInd++;
            characterIndex=0;
           }
           if(carrInd=== careers.length)
           {
            carrInd=0;
           }
           setTimeout(updateText,400);
}
