// Create a new App
// this is the only line of JS that needs
// to be outside a class declaration
new App();

// text animation

$("body").on('click', '.nav-item', e => {
    let me = $(e.target);
    let toPosition = me.offset().left;
   $(".block").width( me.outerWidth(true));
     $( ".block" ).animate({ "left": toPosition }, "fast" );
  });