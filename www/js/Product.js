class Product {

  constructor(data, cart) {
    Object.assign(this, data);
    this.cart = cart;
    this.addBuyButtonListener();

  }

  addBuyButtonListener() {
    // $('body').on('click', "#buy-button-" + this.id, e => {
    $('body').on('click', `#buy-button-${this.id}`, (e) => {
      e.preventDefault();
      this.cart.add(this);
      this.animation(`${this.id}`)
    });
  }

  render() {
    $('main').html(/*html*/`
     <section class="row">
        <div class="col">
          <h1>${this.name}</h1>
        </div>
      </section>
      <section class="row item">
        <div class="col-12 col-lg-9">
          <p>${this.description}</p>
          <h4> $${this.price} </p>
          <button id="buy-button-${this.id}" class="btn btn-primary my-2">Buy</button>
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
        <a href="#${this.slug}">
          <h4>${this.name} $${this.price} </h4>
          <button id="buy-button-${this.id}" class="btn btn-primary my-2 item">Buy</button>
          <img class="img-fluid border border-primary rounded" src="${this.image}">
        </a>
      </div>
      
    `
    
  }

  animation(id){

    let x = id -1 ;
var cart = $('.fa-shopping-cart');
var imgtodrag = $(".item").find("img").eq(x);
if(!imgtodrag.lenght){
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
    }, 1900);

    imgclone.animate({
        'width': 0,
            'height': 0
    }, function () {
        $(this).detach()
    });
}




  }


}