// Create a new App
// this is the only line of JS that needs
// to be outside a class declaration
new App();



// text animation
currentId = "";
selectedElement = "";
$('.nav-item').click(function () {
  currentId = $(this).attr('id');
  selectedElement = $(this);
});

$("body").on('click', '.nav-item', e => {
  $(".block").hide();
  if (screenSize > 750) {
    $(".block").show();
    let me = $(e.target);
    let getWidth = me.outerWidth(true);
    $(".block").width(getWidth);
    $(".block").animate({ "left": me.offset().left }, "fast");
  } else {
    $(".navbar-toggler-icon").trigger("click");
    $(".block").hide();
  }
});



$(window).resize(function () {
  $(".block").animate({ "left": selectedElement.offset().left }, 0);
  $(".block").width(`${currentId.outerWidth(true)}`);

});



//hide navigation bar-animation on different pages

let screenSize = "";
window.setInterval(function () {
  screenSize = $(window).width();
}, 100)
// form click event's
$("body").on('click', '#cartSelector , navbar-toggler-icon,#check-selector', e => {
  $(".block").hide();
});

$("body").on('click', '#firstbutton', e => {

  store_fullName();
  $("#creditcard").removeClass("active")
  $("#shipping").addClass("active")
});

$("body").on('click', '#secondbutton', e => {
  store_shipping_address();
  $("#shipping").removeClass("active")
  $("#greeting").addClass("active")
});
// save form info to localStorage
function store_fullName(){
  let fullName =$("#fullName").val();
  localStorage.setItem("FullName", fullName); 
}

function store_shipping_address() {
  let contry = $("#country").val();
  localStorage.setItem("Country", contry);
  let state =$("#state").val();
  localStorage.setItem("State", state); 
  let street =$("#street").val();
  localStorage.setItem("Address", street); 
  let streetNr = $("#streetNr").val();
  localStorage.setItem("StreetNr", streetNr);
}