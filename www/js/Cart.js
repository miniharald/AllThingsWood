class Cart {





  //objects array   
  products = []
  //count total products



  get count() {
    let cartCount = 0;
    for (let i in this.products) {
      cartCount += this.products[i].quantity;
    }
    return cartCount;

  }

  add(product) {
    for (let i in this.products) {
      if (this.products[i].id === product.id) {
        this.products[i].quantity++;
        $(" a >span").text(this.count);
        return;
      }
    }
    this.products.push(product)
    $(" a >span").text(this.count);
    console.log(this.products)

  }

  listCart() {
    let productsCopy = [];
    for (let i in this.products) {
      let product = this.products[i];
      let productCopy = {};
      for (let p in product) {
        productCopy[p] = product[p];
      }
      productsCopy.push(productCopy);
      console.log("productsCopy: ", productsCopy)
    }
    return productsCopy
  }

  test() {

    //let cartArray = this.products;
    //console.log(cartArray)
    let output = '';
    console.log(output)
    for (let i in this.products) {
      output += `<tr>
                    <td class="w-20">
                      <img class="img-fluid border border-primary rounded list" src="${this.products[i].image}">
                    </td>
                    <td>
                      ${this.products[i].name} - ${this.products[i].short}
                    </td>
                    <td>
                      - ${this.products[i].quantity} +
                    </td>
                    <td>
                      $${this.products[i].price}
                    </td>
                  </tr>`;
    }

    console.log(output)

    $('main').html(`<div class="table-responsive">
                      <table class="table table-striped p-1 align-middle font-weight-bolder">
                        ${output}
                      </table>
                    </div>`);
  }

  render() {
    $("main").html(/*html*/ `
      <section class="row">
        <div id="list" class="col">
          
        </div>
      </section>
    `);
  }

}
