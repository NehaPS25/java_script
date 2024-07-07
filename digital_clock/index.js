// const h = document.getElementById("hours");
// const m = document.getElementById("Minutes");
// const s = document.getElementById("seconds");
// const amp = document.getElementById("ampm");

// function updateclock()
// {
//     let h1 = new Date().getHours();
//     let m2= new Date().getMinutes();
//     let s2 = new Date().getSeconds();
//     // let ampp ="AM";


//     let ampm = hours >= 12 ? "PM" : "AM";




    // if(h1>12)
    // {
    //     h1= h1-12
    //     ampp="PM";
    // }


    // if (hours >= 12) {
    //     ampm = "PM";
    //     if (hours > 12) {
    //         hours -= 12;
    //     } else if (hours === 0) {
    //         hours = 12; // Adjusts 0 to 12 for 12-hour format
    //     }
    // }
    





//     h1 = h1 % 12; 
//     h1 = h1 < 10 ? "0" + h1 :h1;
//     m2 = m2 < 10 ? "0" + m2 :m2;
//     s2 = s2 < 10 ? "0" + s2 :s2;
//     h.innerText = h1;
//     m.innerText = m2;
  
//     s.innerText = s2;
//     amp,(innerText=ampp);
//     setTimeout(()=>{
//         updateclock()
//     },1000);
// }
// updateclock()



const h = document.getElementById("hours");
const m = document.getElementById("Minutes");
const s = document.getElementById("seconds");
const amp = document.getElementById("ampm");

function updateClock() {
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    let ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12; // Ensure 12-hour format and handle 0 case

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    h.innerText = hours;
    m.innerText = minutes;
    s.innerText = seconds;
    amp.innerText = ampm;

    setTimeout(updateClock, 1000);
}

updateClock();

































