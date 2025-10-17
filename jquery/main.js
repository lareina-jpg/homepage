$(".dark-btn").click(
    function(){
      $(".box").toggleClass("dark");
      $("body").toggleClass("dark");
    }
);

$(".spin-btn").click(function(){
    $(".box").toggleClass("spin");
});

$(".reveal-btn").click(function(){
    // there are a few different methods to reveal: // 

    // $(".bokchoy").addClass("reveal"); //
    // instead of toggleClass, you can also addClass and removeClass //

    // $(".bokchoy").css("display","block"); //
    // first "" is property and second "" is value for that css property. remember this is an inline style and is the most specific. //

    $(".bokchoy").show();
    // this is a pre-programmed, jquery-specific method //

    $(".reveal-btn").hide();
    // this hides your reveal button //
});

$( ".draggable" ).draggable({
    snap:true,
    containment:".container",
    scroll:false,
    stack: ".draggable"
    // another useful one is stack, to control the z index (layering) of your objects //
});
