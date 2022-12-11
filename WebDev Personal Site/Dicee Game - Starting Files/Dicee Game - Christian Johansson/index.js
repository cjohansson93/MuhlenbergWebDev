document.getElementsByTagName("button")[0].addEventListener("click", function(){
    
    var dice1 = Math.floor(Math.random() * 6 + 1);
    var dice2 = Math.floor(Math.random() * 6 + 1);
    //alert(dice1);
    document.getElementById("img1").src = "./images/dice-"+ dice1 +".png";
    document.getElementById("img2").src = "./images/dice-"+ dice2 +".png";

    if (dice1 > dice2) {
        document.getElementsByTagName("button")[0].innerHTML = '<h1 id="blink">Left Wins! Click to Play Again</h1>';
    } 
    else if (dice2 > dice1){
        document.getElementsByTagName("button")[0].innerHTML = '<h1 id="blink">Right Wins! Click to Play Again</h1>';
    }
    else {
        document.getElementsByTagName("button")[0].innerHTML = '<h1 id="blink">Tie! Click to Play Again</h1>';
    } 
});