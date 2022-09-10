// Before-game settings:
let initiators = document.querySelectorAll(".choose-initiator span");
let startGame = document.querySelector(".start-game .start");
let XOFlag = "";
initiators.forEach((ele)=>{
    ele.onclick = ()=>{
        initiators.forEach((e)=>{
            e.classList.remove("selected-settings");
        });
        ele.classList.toggle("selected-settings");
        XOFlag = ele.innerHTML;
        if (document.querySelector("#initiatorWrongSelection") != null) {
            document.querySelector("#initiatorWrongSelection").remove();
        }
    };
});
startGame.onclick = ()=>{
    let initiatorsFlag = false;
    initiators.forEach((e)=>{
        if (e.classList.contains("selected-settings")) {
            initiatorsFlag = true;
        }
    });
    if (initiatorsFlag == true) {
        document.querySelector(".container .overlay").style.display = "none";
        document.querySelector(".settings-before-match").style.display = "none";
        document.querySelector(".settings-in-match").style.display = "block";
        theGame();
    }else {
        if (document.querySelector("#initiatorWrongSelection") == null) {
            let initiatorWrongSelection = document.createElement("span");
            initiatorWrongSelection.id = "initiatorWrongSelection";
            initiatorWrongSelection.textContent = "Please choose who will start!";
            initiatorWrongSelection.style.color = "red";
            initiatorWrongSelection.style.display = "block";
            initiatorWrongSelection.style.marginTop = "10px";
            document.querySelector(".initiator").appendChild(initiatorWrongSelection);
        }
    }
};
// in-game settings:
let changeSettings = document.querySelector(".change-settings .changesettings");
let replayGame = document.querySelector(".replay-game .replay");
replayGame.onclick = ()=>{
    document.querySelectorAll(".square").forEach((ele)=>{
        ele.innerHTML = "";
        ele.style.setProperty('--width', '0');
        ele.style.setProperty('--height', '0');
        ele.style.pointerEvents = "auto";
    });
};
changeSettings.onclick = ()=>{
    document.querySelectorAll(".square").forEach((ele)=>{
        ele.innerHTML = "";
        ele.style.setProperty('--width', '0');
        ele.style.setProperty('--height', '0');
        ele.style.pointerEvents = "auto";
    });
    document.querySelector(".settings-before-match").style.display = "block";
    document.querySelector(".settings-in-match").style.display = "none";
    initiators.forEach((ele)=>{
        ele.classList.remove("selected-settings");
    });
    document.querySelector(".container .overlay").style.display = "block";
    document.querySelector(".stat-x span").innerHTML = 0;
    document.querySelector(".stat-o span").innerHTML = 0;
};
// In-game functions :
function theGame() {
    let statX = document.querySelector(".stat-x span");
    let statO = document.querySelector(".stat-o span");
    let numberOfX = 0;
    let numberOfO = 0;
    let squares = document.querySelectorAll(".square");
    squares.forEach((square)=>{
        square.onclick = ()=>{
            if (XOFlag == "X") {
                square.innerHTML = "X";
                numberOfX++;
                XOFlag = "O";
                square.style.pointerEvents = "none";
            }else{
                square.innerHTML = "O";
                numberOfO++;
                XOFlag = "X";
                square.style.pointerEvents = "none";
            }
            if (numberOfX >= 3 || numberOfO >= 3) {
                if ((squares[0].innerHTML == "X" && squares[1].innerHTML == "X" && squares[2].innerHTML == "X" )
                    ||(squares[0].innerHTML == "O" && squares[1].innerHTML == "O" && squares[2].innerHTML == "O")) {
                    squares[0].style.setProperty("--width","640px");
                    if (squares[0].innerHTML == "X") {
                        statX.innerHTML++;
                    }else {
                        statO.innerHTML++;
                    }
                    squares.forEach((e)=>{
                        e.style.pointerEvents = "none";
                    });
                }else if((squares[3].innerHTML == "X" && squares[4].innerHTML == "X" && squares[5].innerHTML == "X" )
                    ||(squares[3].innerHTML == "O" && squares[4].innerHTML == "O" && squares[5].innerHTML == "O")) {
                        squares[3].style.setProperty("--width","640px");
                        if (squares[3].innerHTML == "X") {
                            statX.innerHTML++;
                        }else {
                            statO.innerHTML++;
                        }
                        squares.forEach((e)=>{
                        e.style.pointerEvents = "none";
                        });
                }else if((squares[6].innerHTML == "X" && squares[7].innerHTML == "X" && squares[8].innerHTML == "X" )
                ||(squares[6].innerHTML == "O" && squares[7].innerHTML == "O" && squares[8].innerHTML == "O")) {
                    squares[6].style.setProperty("--width","640px");
                    if (squares[6].innerHTML == "X") {
                        statX.innerHTML++;
                    }else {
                        statO.innerHTML++;
                    }
                    squares.forEach((e)=>{
                    e.style.pointerEvents = "none";
                    });
                }else if((squares[0].innerHTML == "X" && squares[3].innerHTML == "X" && squares[6].innerHTML == "X" )
                ||(squares[0].innerHTML == "O" && squares[3].innerHTML == "O" && squares[6].innerHTML == "O")) {
                    squares[0].style.setProperty("--height","640px");
                    if (squares[0].innerHTML == "X") {
                        statX.innerHTML++;
                    }else {
                        statO.innerHTML++;
                    }
                    squares.forEach((e)=>{
                    e.style.pointerEvents = "none";
                    });
                }else if((squares[1].innerHTML == "X" && squares[4].innerHTML == "X" && squares[7].innerHTML == "X" )
                ||(squares[1].innerHTML == "O" && squares[4].innerHTML == "O" && squares[7].innerHTML == "O")) {
                    squares[1].style.setProperty("--height","640px");
                    if (squares[1].innerHTML == "X") {
                        statX.innerHTML++;
                    }else {
                        statO.innerHTML++;
                    }
                    squares.forEach((e)=>{
                    e.style.pointerEvents = "none";
                    });
                }else if((squares[2].innerHTML == "X" && squares[5].innerHTML == "X" && squares[8].innerHTML == "X" )
                ||(squares[2].innerHTML == "O" && squares[5].innerHTML == "O" && squares[8].innerHTML == "O")) {
                    squares[2].style.setProperty("--height","640px");
                    if (squares[2].innerHTML == "X") {
                        statX.innerHTML++;
                    }else {
                        statO.innerHTML++;
                    }
                    squares.forEach((e)=>{
                    e.style.pointerEvents = "none";
                    });
                }else if((squares[8].innerHTML == "X" && squares[4].innerHTML == "X" && squares[0].innerHTML == "X" )
                ||(squares[8].innerHTML == "O" && squares[4].innerHTML == "O" && squares[0].innerHTML == "O")) {
                    squares[8].style.setProperty("--height","880px");
                    if (squares[8].innerHTML == "X") {
                        statX.innerHTML++;
                    }else {
                        statO.innerHTML++;
                    }
                    squares.forEach((e)=>{
                    e.style.pointerEvents = "none";
                    });
                }else if((squares[6].innerHTML == "X" && squares[4].innerHTML == "X" && squares[2].innerHTML == "X" )
                ||(squares[6].innerHTML == "O" && squares[4].innerHTML == "O" && squares[2].innerHTML == "O")) {
                    squares[6].style.setProperty("--height","880px");
                    if (squares[6].innerHTML == "X") {
                        statX.innerHTML++;
                    }else {
                        statO.innerHTML++;
                    }
                    squares.forEach((e)=>{
                    e.style.pointerEvents = "none";
                    });
                }
            }
        };
    });
}


