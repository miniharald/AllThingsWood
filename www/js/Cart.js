class Cart {
  products = []

  get count() {
    return this.products.length;
  }

  add(product) {
    this.products.push(product)
    let x = $(product).attr('id') - 1;
   console.log(x);

        var cart = $('.fa-shopping-cart');
        var imgtodrag = $(".item").find("img").eq(x);
        if (imgtodrag) {
            var imgclone = imgtodrag.clone().offset({
                top : imgtodrag.offset().top,
                left : imgtodrag.offset().left
            })
                .css({
                'opacity': '0.5',
                    'position': 'absolute',
                    'height': '150px',
                    'width': '150px',
                    'z-index': '100'
            })
                .appendTo($('main'))
                .animate({
                'top': cart.offset().top + 10,
                    'left': cart.offset().left + 10,
                    'width': 75,
                    'height': 75
            }, 1000, 'easeInOutExpo');
            
            setTimeout(function () {
                cart.effect("shake", {
                    times: 2
                }, 200);
            }, 1500);

            imgclone.animate({
                'width': 0,
                    'height': 0
            }, function () {
                $(this).detach()
            });
        }
        $("nav > div > .btn >span").text(this.count);

  
    // alert(`
    //   I am the cart. I'm still really stupid 
    //   I have no render-method and no methods that calc sums.
    //   I have no add and remove methods...
    //   But I know that you tried to add this product to me:
    //   ${JSON.stringify({ ...product, cart: undefined }, '', '  ')}
    // `.replace(/\n\s*/g, '\n'))
  }
}
