function changeColor(color) {
    document.getElementById(color).classList.add(color);
}

function resetColor(color){
    document.getElementById(color).classList.remove(color);
}
let nextLight = "green";

// setInterval(function(){
//     if(nextLight === "green"){
//         resetColor("red");
//         nextLight = "yellow";
//     }
//     else if (nextLight === "red"){
//         changeColor("red");
//         resetColor("yellow");
//         nextLight = "green";
//     }
//     else if(nextLight  === "yellow"){
//         changeColor("yellow");
//         resetColor("green");
//         nextLight = "red";
//     }
// },1000);

function turnOnLight(color){
        if(color === "green"){
            changeColor("green");
            resetColor("red");
            resetColor("yellow");
        }
        else if (color === "red"){
            changeColor("red");
            resetColor("yellow");
            resetColor("green");
        }
        else if(color  === "yellow"){
            changeColor("yellow");
            resetColor("green");
            resetColor("red");
        }
    }



