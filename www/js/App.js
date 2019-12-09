class App {
  constructor() {
    this.routes = {
      "": new StartPage(),
      "about": new AboutUs(),
      "page404": new Page404(),
      "cart": new Cart(),
      "confirm": new ConfirmationPage(),

      "form": new Form(),
      "thankyou": new Thankyou(),
      "orderlist": new OrderHistoryList(),


    }
    this.cart = new Cart();
    $(window).on("hashchange", (e) => this.changeRoute(e));
    this.loadProducts();
    //this.cartListListener();
  }

  cartListListener() {
    $('nav').on('click', `.cart`, (e) => {
      e.preventDefault();
      if (history.pushState) {
        history.pushState(null, null, '#cart');
      }
      else {
        location.hash = '#cart';
      }
      this.cart.test();
    });
  }

  changeRoute(e) {
    e.preventDefault();
    let hash = location.hash.replace(/#/g, "");
    let hashFirstPart = hash.split("-")[0];
    let pageToShow = this.routes[hash] || this.routes.page404;
    $("header nav a").removeClass("active");
    $(`header nav a[href="#${hashFirstPart}"]`).addClass("active");
    pageToShow.render();
  }

  async loadProducts() {
    let productsData = await $.getJSON("/json/products.json");
    this.products = [];
    for (let productData of productsData) {
      let product = new Product(productData, this.cart);
      this.products.push(product);
      this.routes[product.slug] = product;
    }
    this.routes.shop = new ProductList(this.products);
    this.changeRoute();
  }
}
