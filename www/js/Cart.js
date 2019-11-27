class Cart {
  products = []

  get count() {
    return this.products.length;
  }

  add(product) {
    this.products.push(product)

    $("nav > .btn >span").text(this.count);

    //console.log(this.products)

    // alert(`
    //   I am the cart. I'm still really stupid 😢!
    //   I have no render-method and no methods that calc sums.
    //   I have no add and remove methods...
    //   But I know that you tried to add this product to me:
    //   ${JSON.stringify({ ...product, cart: undefined }, '', '  ')}
    // `.replace(/\n\s*/g, '\n'))
  }
}
