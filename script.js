$(".answer").click(function(){
    $(".notp").text("well then click the treasure");
    $(".lucky").show();
});
$(".lucky").click(function(){
   $(".notp").text("Hey...Great now I dont have breakfast! Just, doubble click my nose.");
   $(".lucky").hide();
   $(".notlucky").show();
});
$(".leper").dblclick(function(){
    $(".notlucky").hide();
    $(".notp").text("right click the leprechaun");
    $(".leper").contextmenu(function(){
       alert("psych, there was no treasure");
    });
});