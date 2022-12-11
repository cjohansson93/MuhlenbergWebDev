var buttonColors = ["red","blue", "green", "yellow"];
var randomChosenColor = "";
var gamePattern = [];
var userChosenColor = "";
var userClickedPattern = [];
var newGame = true;
var level = 0;

$(document).keypress(function(){
    if (newGame){
        newGame = false;
        $('#level-title').text("Level " + level)
        nextSequence();
    }
});


function nextSequence() {
    level++;
    $('#level-title').text("Level " + level)

    var num = Math.floor(Math.random() * 4);
    randomChosenColor = buttonColors[num];
    gamePattern.push(randomChosenColor);

    gamePattern.forEach((color, i) => {
        setTimeout(() => {
          makeSoundFlash(color);
        }, (i + 1) * 600);
      });

    //for (let i = 0; i < gamePattern.length; i++) {
    //    setTimeout(makeSoundFlash(gamePattern[i]),(i+1) * 600);
    //}
}

function makeSoundFlash(color) {
    switch (color) {
        case "yellow":
            $('#yellow').fadeOut(400).fadeIn(400);
            var toneYellow = new Audio('./sounds/yellow.mp3');
            toneYellow.play();
            break;
        case "blue":
            $('#blue').fadeOut(400).fadeIn(400);
            var toneBlue = new Audio('./sounds/blue.mp3');
            toneBlue.play();
            break;
        case "red":
            $('#red').fadeOut(400).fadeIn(400);
            var toneRed = new Audio('./sounds/red.mp3');
            toneRed.play();
            break;
        case "green":
            $('#green').fadeOut(400).fadeIn(400);
            var toneGreen = new Audio('./sounds/green.mp3');
            toneGreen.play();
            break;
        default:
            console.log(color);
            break;
    }
}

$(document).ready(function() {
    $(".btn").click(function() {
        var colorClicked = $(this).attr('id');

        console.log(colorClicked);
        userChosenColor = colorClicked;

        animatePress(userChosenColor);

        userClickedPattern.push(userChosenColor);
        checkAnswer();
    });
});

function animatePress(currentColor) {
    $('#' + currentColor).addClass("pressed");

    makeSoundFlash(currentColor);

    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}

function checkAnswer() {
    if (userClickedPattern[userClickedPattern.length-1] == gamePattern[userClickedPattern.length-1]){
        if (userClickedPattern.length == gamePattern.length) {
            setTimeout(function() {
                userClickedPattern = [];
                nextSequence();
            }, 1000);
        }
        console.log("success");
    }
    else {
        console.log("wrong");
        var wrong = new Audio('./sounds/wrong.mp3');
        wrong.play();
        $('#level-title').text(" Game Over, Press Any Key to Restart ");
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);
        startOver();
    }
}

function startOver() {
    userClickedPattern = [];
    gamePattern = [];
    level = 0;
    newGame = true;
}

