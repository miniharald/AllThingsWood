class Product {

  constructor(data, cart) {
    Object.assign(this, data);
    this.cart = cart;
    this.addBuyButtonListener();
    this.formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

  }

  addBuyButtonListener() {
    // $('body').on('click', "#buy-button-" + this.id, e => {
    $('body').on('click', `#buy-button-${this.id}`, (e) => {
      e.preventDefault();
      this.cart.add(this);
      this.animation(`${this.id}`)
      this.animationSound();
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
        <div class="col-12 col-lg-3 item">
          <img id="img-${this.id}" class="img-fluid border border-primary rounded" src="${this.image}">
        </div>
        <div class="col-12 col-lg-9">
          <h4 class="text-dark font-weight-bolder">${this.formatter.format(this.price)}</h4>
          <button id="buy-button-${this.id}" class="font-weight-bolder text-light btn btn-primary my-2">Add to Cart</button>
        </div>
      </section>
      <section class="row mt-2 ml-0 item text-dark font-weight-bolder">
        <p>${this.description}</p>
      </section>
    `);
  }



  renderInListGrid() {

    return `
      <div class="col-12 col-md-6 col-lg-4 col-xl-3 mt-5 item">
        <a href="#${this.slug}">
          <div class="card text-light bg-dark mb-3" style = "max-width: 18rem;" >
            <div class="card-header">
              <img id="img-${this.id}" class="img-fluid border border-primary rounded" src="${this.image}">
            </div>
            <h5 class="card-title text-center font-weight-bolder">${this.name}</h5>
            <div class="card-body">
              <div class="text-right font-weight-bolder">${this.formatter.format(this.price)}</div>
              <div class="text-center">
                <button id="buy-button-${this.id}" class="w-100 font-weight-bolder text-light btn btn-primary my-2 item">Add to Cart</button>
              </div>
            </div>
          </div >
        </a>
      </div>
      
    `
  }

  renderInListList() {

    return `
     
      <section class="item row listBorder">
            <section class="col-2 col-md-1 py-4 py-md-2 align-middle text-center">
              <img id="img-${this.id}" class="border border-primary rounded list" src="${this.image}">
            </section>
            <section class="col-5 col-md-7 py-3 font-weight-bolder"><a class="align-middle" href="#${this.slug}">${this.name}</a></section>
            <section class="col-5 col-md-4 py-2 font-weight-bolder text-right text-primary"><span class="align-middle"><span>${this.formatter.format(this.price)}</span></span>
              <button id="buy-button-${this.id}" class="btn-sm font-weight-bolder text-light btn btn-primary my-2 item">Add to Cart</button>
            </section>
          </section>
      </section>
    
      
    `
  }

  animation(id) {


    let cart = $('.fa-shopping-cart');
    let imgtodrag = $(".item").find(`#img-${id}`);

    // if(!imgtodrag.lenght){
    //   console.log("in if")
    //   imgtodrag = $(".item").find("img").eq(0);}

    if (imgtodrag) {
      var imgclone = imgtodrag.clone().offset({
        top: imgtodrag.offset().top,
        left: imgtodrag.offset().left
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

  animationSound() {
    let player = new Audio();
    player.src = "https://actions.google.com/sounds/v1/cartoon/siren_whistle.ogg";
    player.currentTime = 0.30;
    player.play();
    setTimeout(this.secondarySound, 1800);



  }

  secondarySound() {
    let player = new Audio();
    player.src = "https://actions.google.com/sounds/v1/cartoon/woodpecker.ogg";
    player.currentTime = 0.50;
    player.play();

  }

}