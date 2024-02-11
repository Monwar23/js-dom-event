// option-1
//    directly set on the html element
//  <button onclick="document.body.style.backgroundColor='yellow'">Make Yellow</button>

// option-2
/* <button onclick="makeRed()">Make Red</button> */

function makeRed(){
    document.body.style.backgroundColor='red'
}

// option-3
/* <button id="make-blue">Make blue</button> */

const makeBlue=document.getElementById('make-blue');
makeBlue.onclick=makeBLu

function makeBLu(){
    document.body.style.backgroundColor='blue'
}

// option-3 another
// <button id="make-purpole">Make purpole</button>

const makePurpole=document.getElementById('make-purpole');

       makePurpole.onclick=function makePurp(){
        document.body.style.backgroundColor='purple'
       }
// option-04
//     <button id="make-pink">Make pink</button>

const makePink= document.getElementById('make-pink')
makePink.addEventListener('click',makePi)
function makePi(){
    document.body.style.backgroundColor='pink'
}

// option-04 another
//<button id="make-green">Make green</button>

const makeGreen = document.getElementById('make-green')
makeGreen.addEventListener('click',  function makeGren() {
    document.body.style.backgroundColor = 'green'
}
)

// option-04 final
//<button id="make-goldenrod">make golden</button>

document.getElementById('make-goldenrod').addEventListener('click',function(){
    document.body.style.backgroundColor='goldenrod'
})