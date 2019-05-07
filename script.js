$(".answer").click(function(){
    $(".notp").text("well then click the treasure");
    $(".lucky").fadeIn();
});
$(".lucky").click(function(){
   $(".notp").text("Hey...Great now I dont have breakfast! Just, doubble click my nose.");
   $(".lucky").hide();
   $(".notlucky").fadeIn();
});
$(".leper").dblclick(function(){
    $(".notlucky").hide();
    $(".notp").text("right click the leprechaun");
    $(".leper").contextmenu(function(){
       alert("psych, there was no treasure,<br>now get out");
    });
});