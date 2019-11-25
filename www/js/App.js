class App {

  constructor() {
    this.routes = {
      '': new StartPage(),
      'omoss': new AboutUs(),
      'page404': new Page404(),
    };
    this.cart = new Cart();
    $(window).on('hashchange', () => this.changeRoute());
    this.loadProducts();
  }

  changeRoute() {
    let hash = location.hash.replace(/#/g, '');
    let hashFirstPart = hash.split('-')[0];
    let pageToShow = this.routes[hash] || this.routes.page404;
    $('header nav a').removeClass('active');
    $(`header nav a[href="#${hashFirstPart}"]`).addClass('active');
    pageToShow.render();
  }

  async loadProducts() {
    let productsData = await $.getJSON('/json/products.json');
    this.products = [];
    for (let productData of productsData) {
      let product = new Product(productData, this.cart);
      this.products.push(product);
      this.routes[product.slug] = product;
    }
    this.routes.produkter = new ProductList(this.products);
    this.changeRoute();
  }

}