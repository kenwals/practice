$("#btn-start").click(function(){
    console.log("you clicked the start button");
    $("#page-home").addClass("collapse");
    $("#page-game").removeClass("collapse");
     console.log("game page open , home page is collapsed");
});




$("#btn-back").click(function(){
    console.log("you clicked go back button");
    $("#page-game").addClass("collapse");
    $("#page-home").removeClass("collapse");
     console.log("game page collapsed , home page is open");
});