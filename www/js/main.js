// Create a new App
// this is the only line of JS that needs
// to be outside a class declaration
new App();



// text animation


$("body").on('click', '.nav-item', e => {
  $( ".navbar-toggler-icon" ).trigger( "click" );
  $(".block").hide();
  if( screenSize > 969){
    $(".block").show();
    let me = $(e.target);
    let getWidth = me.outerWidth(true);
    $(".block").width( getWidth);
    $( ".block" ).animate({  "left": me.offset().left }, "fast" );
  }
 
  });

 
  $( window ).resize(function() {
      $( ".block" ).animate({ "left":  selectedElement.offset().left }, 0 );
      $(".block").width(`{currentId.outerWidth(true)}`);
      
  });

  

//hide navigation bar-animation on different pages

let screenSize = "";
window.setInterval(function(){
      screenSize = $(window).width();
    }, 100)

$("body").on('click', '#cartSelector ,navbar-toggler-icon', e => {
  $(".block").hide();
  });


  

