let result;
let resultTwo;
let winner;
let healthOne = 10;
let damageOne = 1; 
let healthTwo = 10;
let damageTwo = 1;
let resultShowOne ="";
let resultShowTwo ="";
let playerNameOne = "Spieler 1";
let playerNameTwo = "Spieler 2";

document.getElementById("charakter").innerHTML += '<p>Erstelle deine Spieler</p>'
document.getElementById("nameOne").innerHTML = '<input type="text" placeholder="Spieler 1" id="nameFirst" >';
document.getElementById("charakterNameOne").innerHTML = '<a class="Info">charakter</a>'
document.getElementById("charakterOneFirst").innerHTML = '<div onclick="caseOneOne()"><img id="OneOneTrans" src="./img/KnightOne.png" alt="charakter"></div>'
document.getElementById("charakterOneSecond").innerHTML = '<div onclick="caseOneTwo()"><img id="OneTwoTrans" src="./img/KingOne.png" alt="charakter"></div>'
document.getElementById("charakterOneFirt").innerHTML = '<div onclick="caseOneThree()"><img id="OneThreeTrans" src="./img/MagicenOne.png" alt="charakter"></div>'
document.getElementById("nameTwo").innerHTML = '<input type="text" placeholder="Spieler 2" id="nameSecond">';
document.getElementById("charakterNameTwo").innerHTML = '<a class="Info">charakter</a>'
document.getElementById("charakterTwoFirst").innerHTML = '<div onclick="caseTwoOne()"><img id="TwoOneTrans" src="./img/KnightTwo.png" alt="charakter"></div>'
document.getElementById("charakterTwoSecond").innerHTML = '<div onclick="caseTwoTwo()"><img id="TwoTwoTrans" src="./img/KingTwo.png" alt="charakter"></div>'
document.getElementById("charakterTwoFirt").innerHTML = '<div onclick="caseTwoThree()"><img id="TwoThreeTrans" src="./img/MagicenTwo.png" alt="charakter"></div>'
document.getElementById("startGame").innerHTML = '<div class="startButton" onclick="checkName()">Dice</div>'


function caseOneOne(){
document.getElementById("OneTwoTrans").style.border = ""
document.getElementById("OneTwoTrans").style.width = ""
document.getElementById("OneThreeTrans").style.border = ""
document.getElementById("OneThreeTrans").style.width = ""
document.getElementById("charakterNameOne").innerHTML = '<a class="Info">The Reckless One</a>'
document.getElementById("OneOneTrans").style.border = "10px solid red"
document.getElementById("OneOneTrans").style.width = "140px"
healthOne = 5;
damageOne = 3;
}
function caseOneTwo(){
document.getElementById("OneOneTrans").style.border = ""
document.getElementById("OneOneTrans").style.width = ""
document.getElementById("OneThreeTrans").style.border = ""
document.getElementById("OneThreeTrans").style.width = ""
document.getElementById("charakterNameOne").innerHTML = '<a class="Info">The Balanced One</a>'
document.getElementById("OneTwoTrans").style.border = "10px solid red"
document.getElementById("OneTwoTrans").style.width = "140px"
healthOne = 10;
damageOne = 2;
}
function caseOneThree(){
document.getElementById("OneOneTrans").style.border = ""
document.getElementById("OneOneTrans").style.width = ""
document.getElementById("OneTwoTrans").style.border = ""
document.getElementById("OneTwoTrans").style.width = ""
document.getElementById("charakterNameOne").innerHTML = '<a class="Info">The Careful One</a>';
document.getElementById("OneThreeTrans").style.border = "10px solid red"
document.getElementById("OneThreeTrans").style.width = "140px"
healthOne = 15;
damageOne = 1;
}
function caseTwoOne(){
    document.getElementById("TwoTwoTrans").style.border = ""
    document.getElementById("TwoTwoTrans").style.width = ""
    document.getElementById("TwoThreeTrans").style.border = ""
    document.getElementById("TwoThreeTrans").style.width = ""
    document.getElementById("charakterNameTwo").innerHTML = '<a class="Info">The Reckless One</a>'
    document.getElementById("TwoOneTrans").style.border = "10px solid red"
    document.getElementById("TwoOneTrans").style.width = "140px"
    healthTwo = 5;
    damageTwo = 3;
}
function caseTwoTwo(){
    document.getElementById("TwoOneTrans").style.border = ""
    document.getElementById("TwoOneTrans").style.width = ""
    document.getElementById("TwoThreeTrans").style.border = ""
    document.getElementById("TwoThreeTrans").style.width = ""
    document.getElementById("charakterNameTwo").innerHTML = '<a class="Info">The Balanced One</a>'
    document.getElementById("TwoTwoTrans").style.border = "10px solid red"
    document.getElementById("TwoTwoTrans").style.width = "140px"
    healthTwo = 10;
    damageTwo = 2;
}
function caseTwoThree(){
    document.getElementById("TwoOneTrans").style.border = ""
    document.getElementById("TwoOneTrans").style.width = ""
    document.getElementById("TwoTwoTrans").style.border = ""
    document.getElementById("TwoTwoTrans").style.width = ""
    document.getElementById("charakterNameTwo").innerHTML = '<a class="Info">The Careful One</a>';
    document.getElementById("TwoThreeTrans").style.border = "10px solid red"
    document.getElementById("TwoThreeTrans").style.width = "140px"
    healthTwo = 15;
    damageTwo = 1;
}


function checkName(){
    playerNameOne = document.getElementById('nameFirst').value;
    playerNameTwo = document.getElementById('nameSecond').value;
    newGame();
}
function newGame(){
document.getElementById("charakterNameOne").innerHTML = ''
document.getElementById("charakterNameTwo").innerHTML = ''
document.getElementById("charakter").innerHTML = "";
document.getElementById("nameOne").innerHTML = '';
document.getElementById("startGame").innerHTML = '';
document.getElementById("nameTwo").innerHTML = '';
document.getElementById("playerOne").innerHTML = '';
document.getElementById("playerTwo").innerHTML = '';
document.getElementById("game").innerHTML = '';
document.getElementById("charakterOneFirst").innerHTML = '';
document.getElementById("charakterOneSecond").innerHTML = '';
document.getElementById("charakterOneFirt").innerHTML = '';
document.getElementById("charakterTwoFirst").innerHTML = '';
document.getElementById("charakterTwoSecond").innerHTML = '';
document.getElementById("charakterTwoFirt").innerHTML = '';

function newDice(){
    result = Math.random();
    result *= 6;
    result = Math.floor(result);
    result += 1;
    resultTwo = Math.random();
    resultTwo *= 6;
    resultTwo = Math.floor(resultTwo);
    resultTwo += 1;
    checkTwoDices();
}
function checkTwoDices(){
    if(result > resultTwo){
        winner = " hat gewonnen!"
        resultShowOne = 'winnerCSS';
        resultShowTwo = 'loserCSS';
        healthTwo -= damageOne;
        playerName = playerNameOne;
    }
    if(resultTwo > result){
        winner = " hat gewonnen!"
        resultShowTwo = 'winnerCSS';
        resultShowOne = 'loserCSS';
        healthOne -= damageTwo;
        playerName = playerNameTwo;
    }
    if(result == resultTwo){
        resultShowTwo = 'drawCSS';
        resultShowOne = 'drawCSS';
        winner = "Unentschieden"
    }
}

newDice();
    document.getElementById("startButton").innerHTML = '<div class="startButton" onclick="newGame()">Dice</div>';
    document.getElementById("playerOne").innerHTML += '<p class = '+ resultShowOne +'>'+playerNameOne+ '<br><img id="heart" src="./img/heart'+healthOne+'.jpg" alt="bild '+healthOne+'"></img><br>'+ '<img src="./Würfelbeispiele 6-8 CubeClipArt/PinClipart_cube_'+ result +'.png" alt="bild '+result+'"></img><br></p>';
    document.getElementById("playerTwo").innerHTML += '<p class = '+ resultShowTwo +'>'+playerNameTwo+ '<br><img id="heart" src="./img/heart'+healthTwo+'.jpg" alt="bild '+healthTwo+'"></img><br>'+ '<img src="./Würfelbeispiele 6-8 CubeClipArt/PinClipart_cube_'+ resultTwo +'.png" alt="bild '+resultTwo+'"></img></p>';
    if(result == resultTwo){
        document.getElementById("game").innerHTML += winner ;
    }else{
        document.getElementById("game").innerHTML += playerName + winner ;
    }
    if(healthTwo <= 0){
       
            document.getElementById("playerOne").innerHTML = ""
            document.getElementById("playerTwo").innerHTML = ""
            document.getElementById("game").innerHTML = ""
            document.getElementById("startButton").innerHTML = ""
            document.getElementById("gameOver").innerHTML += '<p class="gameOver">Game Over</p><p>'+ playerNameOne +' hat das Match gewonnen</p><a class="buttonTwo" href="./index.html" >Back</a>'
            document.getElementById("body").style.backgroundColor = "red";
            document.getElementById("body").style.color = "black";
        
        
    }
    if(healthOne <= 0){
       
            document.getElementById("playerOne").innerHTML = ""
            document.getElementById("playerTwo").innerHTML = ""
            document.getElementById("game").innerHTML = ""
            document.getElementById("startButton").innerHTML = ""
            document.getElementById("gameOver").innerHTML += '<p class="gameOver">Game Over</p><p>'+ playerNameTwo +' hat das Match gewonnen</p><a class="buttonTwo" href="./index.html" >Back</a>'
            document.getElementById("body").style.backgroundColor = "red" ;
            document.getElementById("body").style.color = "black";

        
       
    }
}