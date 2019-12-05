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

  

//hide navigation bar-animation on different pages

let screenSize = "";
window.setInterval(function(){
      screenSize = $(window).width();
      console.log(screenSize);
    }, 100)

$("body").on('click', '#cartSelector , navbar-toggler-icon,#check-selector', e => {
  $(".block").hide();
  });


  

