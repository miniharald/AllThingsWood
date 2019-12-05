// Create a new App
// this is the only line of JS that needs
// to be outside a class declaration
new App();



// text animation
currentId = "";
selectedElement = "";
$('.nav-item').click(function(){
  currentId = $(this).attr('id');
  selectedElement = $(this);
});

$("body").on('click', '.nav-item', e => {
  $(".block").hide();
  if( screenSize > 969){
    $(".block").show();
    let me = $(e.target);
    let getWidth = me.outerWidth(true);
    $(".block").width( getWidth);
    $( ".block" ).animate({  "left": me.offset().left }, "fast" );
  }else{
    $( ".navbar-toggler-icon" ).trigger( "click" );
    $(".block").hide();
  }
  });


 
  $( window ).resize(function() {
      $( ".block" ).animate({ "left":  selectedElement.offset().left }, 0 );
      $(".block").width(`${currentId.outerWidth(true)}`);
      
  });

// här börjar koden för form buttons 

$("body").on('click', '#firstbutton', e => {
        
  $("#creditcard").removeClass("active")
  $("#shipping").addClass("active")
});

$("body").on('click', '#secondbutton', e => {
  
  $("#shipping").removeClass("active")
  $("#greeting").addClass("active")
});
