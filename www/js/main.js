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

$("body").on('click', '#cartSelector , navbar-toggler-icon,#check-selector', e => {
  $(".block").hide();
});
// form click event's & save form info to localStorage
$("body").on('click', '#firstbutton', e => {

  delivery_info.name = $("#fullName").val();
  $("#creditcard").removeClass("active")
  $("#shipping").addClass("active")
});

$("body").on('click', '#secondbutton', e => {
  delivery_info.addres.country = $("#country").val();
  delivery_info.addres.state = $("#state").val();
  delivery_info.addres.city = $("#city").val();
  delivery_info.addres.streetName = $("#streetNr").val();
  delivery_info.addres.streetNr = $("#streetNr").val();
  $("#shipping").removeClass("active")
  $("#greeting").addClass("active")
  localStorage.setItem('deliveryInfo', JSON.stringify(delivery_info));
});
$("body").on('click', '#thirdbutton', e => {
  let greet = $("#msg").val();
  store.products = [];
  cart = this.cart;
  $(" a >span").text("0");
  console.log("main", store.products)
  store.save();
  console.log(greet);
  delivery_info.greeting = $("#msg").val();

});


let delivery_info = {
  name: "",
  addres: {
    country: "",
    state: "",
    city: "",
    streetName: "",
    streetNr: ""
  },
  greeting: ""

};