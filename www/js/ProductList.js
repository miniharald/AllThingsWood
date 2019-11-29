class ProductList {

  constructor(products) {
    this.products = products;
  }

  render() {
    $('main').html(`
      <section class="row">
        <div class="col">
          <h1>Our Products</h1>
        </div>
      </section>
      <section class="row">
        ${this.products.map(product => product.renderInList()).join('')}
      </section>
    `);
  }

}