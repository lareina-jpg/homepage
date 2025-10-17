$(".sequence-btn").click(function() {
    // hide the clicked button
    $(this).hide();
    
    // show the next one in sequence
    $(this).next(".sequence-btn").show();
});






