$("Submit").css("color, black");
$(".twoimg").hide();
$(".thrimg").hide();
$(".forimg").hide();
$(".fivimg").hide();
$(".Submit").click(function(){
    var ageInput = $(".age").val();
    var heightInput = $(".height").val();
    var cheatInput = $(".cheat").val();
    var smartInput = $(".smart").val();
     if (ageInput === "14" && heightInput === "tall" && cheatInput === "cheated on" && smartInput === "school smart" || ageInput === "14 years old" && smartInput === "school" && heightInput === "tall" && cheatInput === "cheated on"){
         $(".msg").text("Congrats, you are Jamal! You are a kinda clingy and very underestemated. You are also determined and you don't give up when you put your mind to something!");
         $(".twoimg").fadeIn();
         $(".img").hide();
} else if (ageInput === "15" && heightInput === "tall" && cheatInput === "cheater" && smartInput === "street smart" || ageInput === "15 years old" && smartInput === "street" && heightInput === "tall" && cheatInput === "cheater"){
    $(".msg").text("Congrats, you are Cesar! You are tough and you don't like asking for help. You would do anything to keep your friends safe, even if it means breakin' a few hearts in the process!");
        $(".twoimg").fadeIn();
        $(".img").hide();
} else if (ageInput === "15" && heightInput === "short" && cheatInput === "cheater" && smartInput === "school smart"){
    $(".msg").text("Congrats, you are Ruby! You are super smart and you always know how to talk yourself out of a bad situation. You are also a little obsessed with finding the right soul mate!");
    $(".thrimg").fadeIn();
    $(".img").hide();
} else if (ageInput === "14" && heightInput === "short" && cheatInput === "cheated on" && smartInput === "street smart"){
    $(".msg").text("Congrats, you are Monse! You are very cautious and mature. You love to help others out of bad situations and fix all of the problems around you. You are also one of the most loyalest friends that anyone could ever ask for!");
     $(".forimg").fadeIn();
      $(".img").hide();
} else{
    $(".msg").text("I'm sorry but you unfortunately don't qualify to be any character on 'On My Block'. But the good news is that you are your own unique person! Congrats on that!");
     $(".fivimg").fadeIn();
     $(".img").hide();
}
});