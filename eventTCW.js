//Exercise 1
let dontPress = document.getElementById("dont");

function youPressedIt(e){
    console.log("Check One Two");
        alert("I TOLD YOU NOT TO CLICK THIS!!!!");
        e.preventDefault()
//    alerts user not to check the box, console.logs "Check One Two".
}

dontPress.addEventListener('click', youPressedIt);
//Allows everything to work smoothly.

//Exercise 2

let butt = false;

let b1 = document.getElementById("b1");
let textE = document.getElementById("tbox");
let heading = document.getElementById("hide");

function hiddenBox(e){
    if(butt){
        textE.setAttribute("disabled", "");
        heading.setAttribute("hidden", "");
        butt = false;
    }
    else{
        textE.removeAttribute("disabled");
        heading.removeAttribute("hidden");
        butt = true;
        e.preventDefault();
    }
//    Allows for the disabling/enabling of textarea and hides/unhides message
}

b1.addEventListener('click', hiddenBox);

//Exercise 3

let blastArray = ["10", "9", "8", "7", "6", "5", "4", "3", "2", "1", "LIFTOFF!!!"];

let b2 = document.getElementById("b2");

function countDown(){
    for(x = 0; x < blastArray.length; x++){
        console.log(blastArray[x]);
    }
//    count down from 10 to LiftOff
}

b2.addEventListener('click', countDown);