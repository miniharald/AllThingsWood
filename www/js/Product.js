class Product {

  constructor(data, cart) {
    Object.assign(this, data);
    this.cart = cart;
    this.addBuyButtonListener();
  }

  addBuyButtonListener() {
    $('body').on('click', `#buy-button-${this.id}`, e => {
      e.preventDefault();
      this.cart.add(this);
    });
  }

  render() {
    $('main').html(/*html*/`
     <section class="row">
        <div class="col">
          <h1>${this.name}</h1>
        </div>
      </section>
      <section class="row">
        <div class="col-12 col-lg-9">
          <p>${this.description}</p>
          <h4>${this.price} kr</p>
          <button id="buy-button-${this.id}" class="btn btn-primary my-2">Köp</button>
        </div>
        <div class="col-12 col-lg-3">
          <img class="img-fluid border border-primary rounded" src="${this.image}">
        </div>
      </section>
    `);
  }

  renderInList() {
    return `
      <div class="col-12 col-md-6 col-lg-4 mt-5">
        <a href="#${this.slug}">
          <h4>${this.name} ${this.price} kr</h4>
          <button id="buy-button-${this.id}" class="btn btn-primary my-2">Köp</button>
          <img class="img-fluid border border-primary rounded" src="${this.image}">
        </a>
      </div>
    `
  }

}