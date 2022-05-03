import { Tuile } from "./class/class.js";
// export class Touches{
//     constructor(){
//         document.appendChild(NouvelleTouche)
//     }
// }
let horloge = 0
let timing = 800
let graduation = 0
let tuileIdNumber = 1
const startbutton = document.getElementById('startbutton');
/* ============================================================== */
        
        
startbutton.addEventListener('click', event => {
startbutton.disabled = true;
Launchgame()
});
/* ============================================================== */
        
function Launchgame() {
    console.log("GAME IS LAUNCHING")
    setTimer()
        setInterval(interval,)
        //     let interval2 = setInterval(function(){
        //         Game()
        //         if (graduation === 40) {
        //             timing = 600
        //             clearInterval(interval2)
        //             let interval3 = setInterval(function(){
        //                 Game()
        //                 if (graduation === 60) {
        //                     timing = 500
        //                     clearInterval(interval3)
        //                     let interval4 = setInterval(function(){
        //                         Game()
        //                         if (graduation === 80) {
        //                             timing = 400
        //                             clearInterval(interval4)
        //                             let interval5 = setInterval(function(){
        //                                 const box = document.getElementById('lafin');
        //                                 if (box.childNodes.length != 0) { 
        //                                     //Vincent ne me tue pas je sais qu'on peux faire une trigger d'event mais sa mère c'est tellement drole de faire ça
        //                                     //j'ai même mis le text de la même couleur du fond pour que tu ne le trouve jamais UwU
        //                                     clearInterval(interval5)
        //                                     let defDiv = document.getElementById('defaite')
        //                                     defDiv.textContent = "GG"
        //                                 }
        //                                 Game()
        //                             },timing)
        //                         }
        //                     },timing)
        //                 }
        //             },timing)
        //         }
        //     },timing)
        // }
}

/* ============================================================== */

function startTimer(duration, display) {
    let timer = duration, minutes, seconds
    let TimerInter = setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10)
        
        minutes = minutes < 10 ? "0" + minutes : minutes
        seconds = seconds < 10 ? "0" + seconds : seconds
        
        display.textContent = minutes + ":" + seconds
        
        horloge++
        if (--timer < 0) {
            timer = duration;
        }
        if (horloge === 61) {
            clearInterval(TimerInter)
            let div = document.getElementById('lafin');
            div.textContent = 'fini';
            display.textContent = "00:00"
        }
    }, 1000);
}

function setTimer () {
    var TwoMinutes = 60 * 1,
    display = document.querySelector('#time')
    startTimer(TwoMinutes, display)
};
/* ============================================================== */
function Game() {
    new Tuile('TuileN°'+tuileIdNumber)
    tuileIdNumber++
    graduation++
    // const box = document.getElementById('verifperdu');
    // if (box.childNodes.length != 0) clearInterval(interval)
    // if (graduation === 10) //changer vitesse
    // if (graduation === 20) //changer vitesse
    // if (graduation === 30) //changer vitesse
    // if (graduation === 40) //changer vitesse
}

function interval() {
        Game()
        if (graduation%5 == 0) {
            clearInterval(interval)
            console.log("change timing")
            timing -= 200
        }
    }