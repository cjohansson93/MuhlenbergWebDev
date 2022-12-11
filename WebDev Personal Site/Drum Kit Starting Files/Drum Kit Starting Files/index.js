//var tom1 = new Audio("./sounds/tom-1.mp3")

//for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
//    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        //alert("Button " + i + " was clicked.")
//    });
//}

document.addEventListener("keydown", function(event){
    makeSound(event.key);
});
document.addEventListener("keyup", function(event){
    reverseColor(event.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            document.getElementsByClassName("w drum")[0].style.color = "red";
            var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            document.getElementsByClassName("a drum")[0].style.color = "red";
            var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            document.getElementsByClassName("s drum")[0].style.color = "red";
            var tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            document.getElementsByClassName("d drum")[0].style.color = "red";
            var tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            document.getElementsByClassName("j drum")[0].style.color = "red";
            var tom5 = new Audio('./sounds/crash.mp3');
            tom5.play();
            break;
        case "k":
            document.getElementsByClassName("k drum")[0].style.color = "red";
            var tom6 = new Audio('./sounds/snare.mp3');
            tom6.play();
            break;
        case "l":
            document.getElementsByClassName("l drum")[0].style.color = "red";
            var tom7 = new Audio('./sounds/kick-bass.mp3');
            tom1.play();
            break;
        default:
            console.log(key)
            break;
    }
}

function reverseColor(key) {
    switch (key) {
        case "w":
            document.getElementsByClassName("w drum")[0].style.color = "black";
            break;
        case "a":
            document.getElementsByClassName("a drum")[0].style.color = "black";
            break;
        case "s":
            document.getElementsByClassName("s drum")[0].style.color = "black";
            break;
        case "d":
            document.getElementsByClassName("d drum")[0].style.color = "black";
            break;
        case "j":
            document.getElementsByClassName("j drum")[0].style.color = "black";
            break;
        case "k":
            document.getElementsByClassName("k drum")[0].style.color = "black";
            break;
        case "l":
            document.getElementsByClassName("l drum")[0].style.color = "black";
            break;
        default:
            console.log(key)
            break;
    }
}