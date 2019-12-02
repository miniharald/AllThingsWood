class Cart {



   

  //objects array   
  products = []
  //count total products
  get count() {
    return this.products.length;

  }
  
  //gets the product play the animation and add product to array
  add(product) {
    this.products.push(product)
        let x = $(product).attr('id') - 1;

        var cart = $('.fa-shopping-cart');
        var imgtodrag = $(".item").find("img").eq(x);
        if(!imgtodrag.length){
          imgtodrag = $(".item").find("img").eq(0);
        }
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
        $(" a >span").text(this.count);
        
    }

  render() {
      let name = "HHGGS"
    $('main').html(/*html*/`
     <section class="row">
        <div class="col">
          <h1>${name}</h1>
        </div>
      </section>
      <section class="row item">
        <div class="col-12 col-lg-9">
          <p>${myProduc.description}</p>
          <h4> $${myProduc.price} </p>
          <button id="buy-button-${this.id}" class="btn btn-primary my-2">K??p</button>
        </div>
        <div class="col-12 col-lg-3 item">
          <img class="img-fluid border border-primary rounded" src="${this.image}">
        </div>
      </section>
    `);
  }
  renderInList() {
    return `
      <div class="col-12 col-md-6 col-lg-4 mt-5 item">
        <a href="#${product.slug}">
          <h4>${product.name} $${this.price} </h4>
          <button id="buy-button-${this.id}" class="btn btn-primary my-2 item">K??p</button>
          <img class="img-fluid border border-primary rounded" src="${this.image}">
        </a>
      </div>
    `
  }


}
