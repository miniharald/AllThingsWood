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
      <section class="font-weight-bolder text-dark">
        <h4>
          <i class="fa fa-th pr-2"></i>
          <i class="fa fa-list pl-2"></i>
        </4>
      </section>
      <section class="row">
        ${this.products.map(product => product.renderInListGrid()).join('')}
      </section>
    `);

    $("body").on('click', '.fa-list', e => {
      this.renderList();
      console.log("List?")
    });
  }

  renderList() {
    $('main').html(`
      <section class="row">
        <div class="col">
          <h1>Our Products</h1>
        </div>
      </section>
      <section class="font-weight-bolder text-dark mb-5">
        <h4>
          <i class="fa fa-th pr-2"></i>
          <i class="fa fa-list pl-2"></i>
        </4>
      </section>
      <table class="table table-sm table-striped align-middle font-weight-bolder text-dark">
        ${this.products.map(product => product.renderInListList()).join('')}
      </table>
    `);

    $("body").on('click', '.fa-th', e => {
      this.render();
      console.log("Grid?")
    });
  }




}