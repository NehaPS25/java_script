let userscore =0;
let compscore =0;

const choices =document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");

const userScorepara =document.querySelector("#user-score");
const compScorepara =document.querySelector("#comp-score");

const gencompchoice = ()=>{
    const options = ["rock","paper","scissors"]
    const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];
}

const draw  = ()=>{
    console.log("Game is Draw");
    msg.innerText="Game is Draw";
    msg.style.backgroundColor="#081b31";
}
 const showWinner =(userwin) =>
 { if(userwin)
    {
        userscore++;
        userScorepara.innerText=userscore;
        console.log("you win");
        msg.innerText="you win ";
        msg.style.backgroundColor="green";
    }else{
        compscore++;
        compScorepara.innerText=compscore;
        console.log("you loss");
        msg.innerText="you loss";
        msg.style.backgroundColor="red";
    }

 }
const playgame =(choiceid)=>
{
console.log("user choice =" , choiceid);
const compchoice = gencompchoice();
console.log("comp choice =" , compchoice);

 if(choiceid == compchoice)
{
        draw();
}else{
    let userwin = true;
    if(choiceid ==="rock")
    {
        userwin = compchoice ==="paper "? false : true;
    }else if (choiceid==="paper")
    {
        userwin= compchoice==="rock"?false :true;
    }
    else if (choiceid==="scissor")
    {
        userwin= compchoice==="rock"?false :true;
    }

    showWinner(userwin);
}
}








choices.forEach((choice) =>{
    // console.log(choice);
    choice.addEventListener("click" ,() =>{
        const choiceid = choice.getAttribute("id");
        // console.log("choice was clicked",choiceid);
        playgame(choiceid);
    });
});