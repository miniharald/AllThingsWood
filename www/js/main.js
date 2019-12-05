// Create a new App
// this is the only line of JS that needs
// to be outside a class declaration
new App();



// text animation

//get element & id 
currentId = "";
selectedElement = "";
$('.nav-item').click(function(){
  currentId = $(this).attr('id');
  selectedElement = $(this);
});


$("body").on('click', '.nav-item', e => {
  let me = $(e.target);
  let getWidth = me.outerWidth(true);
  $(".block").width( getWidth);
  $( ".block" ).animate({  "left": me.offset().left }, "fast" );
  });

 
  $( window ).resize(function() {
      $( ".block" ).animate({ "left":  selectedElement.offset().left }, 0 );
      $(".block").width(`{currentId.outerWidth(true)}`);
      
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
