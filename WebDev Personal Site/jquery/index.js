//for (i = 0; i < document.querySelectorAll("button").length; i++) {
//    document.querySelectorAll("button")[i].addEventListener("click", function() {
//        document.querySelector("h1").style.color = "red";
//    });
//}

$(document).ready(function() {
    $("button").click(function() { 
        $("h1").css("color", "red");
    });
});
