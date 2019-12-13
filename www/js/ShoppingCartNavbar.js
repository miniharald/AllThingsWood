
class navBarAnimation {
  constructor() {
    // text animation
    let currentId = "";
    let selectedElement = "";
    $('.nav-item').click(function () {
      currentId = $(this).attr('id');
      selectedElement = $(this);
    });

    // fix of strange bug: the line only gets in the right place
    // if we delay for 100ms
    $("body").on('click', '.nav-item', e => setTimeout(() => {
      $(".block").hide();
      if (screenSize > 750) {
        $(".block").show();
        let me = $(e.target);
        let getWidth = me.outerWidth(true);
       // $(".block").width(getWidth);
        $(".block").animate({ "left": me.offset().left, width: getWidth}, "fast");
      } else {

        $(".navbar-toggler-icon").trigger("click");
        $(".block").hide();
      }
    }, 100));

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
    
  }

}

function add(params) {
  let count = 1;
  $(".btn-primary").click(function () {

    console.log(count)
    count++;
    console.log(count)
    $(".btn >span").text(count);
  });

}
