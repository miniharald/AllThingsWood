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

  totalCartCost() {
    let totalCost = 0;
    for (let i in this.products) {
      totalCost += this.products[i].price * this.products[i].quantity;
    }
    return totalCost;
  }

  totalShippingCost() {
    let shippingWeight = 0;
    let shippingCost = 0;
    for (let i in this.products) {
      shippingWeight += this.products[i].weight * this.products[i].quantity;
    }
    shippingCost += shippingWeight * 4;
    return shippingCost;
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
    //console.log(this.products)

  }

  reduceItemQuantity(id) {
    for (let i in this.products) {
      console.log(this.products[i])
      if (this.products[i].id == id) {
        console.log(this.products[i].id)
        this.products[i].quantity--;
        if (this.products[i].quantity === 0) {
          this.products.splice(i, 1);
        }
        $(" a >span").text(this.count);
        console.log(this.products)
        this.test();
        break;
      }
    }
  }

  addItemQuantity(id) {
    for (let i in this.products) {
      console.log(this.products[i])
      if (this.products[i].id == id) {
        console.log(this.products[i].id)
        this.products[i].quantity++;
        $(" a >span").text(this.count);
        this.test();
        break;
      }
    }
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
    //console.log(output)
    for (let i in this.products) {
      output += `<tr class="list-item" id="${this.products[i].id}">
                    <td>
                      <img class="img-fluid border border-primary rounded list" src="${this.products[i].image}">
                    </td>
                    <td class="align-middle">
                      ${this.products[i].name} - ${this.products[i].short}
                    </td>
                    <td class="align-middle">
                      <i class="fa fa-minus-circle"></i>
                      <span class="quantity"> ${this.products[i].quantity} </span>
                      <i class="fa fa-plus-circle"></i>
                      <i class="fa fa-trash px-2"></i>
                      
                    </td>
                    <td class="text-right align-middle">
                      $${this.products[i].price * this.products[i].quantity}
                    </td>
                  </tr>`;
    }

    //console.log(output)

    $('main').html(`<div class="table-responsive">
                      <table class="table table-striped align-middle font-weight-bolder text-dark">
                        ${output}
                      </table>
                    </div>
                    <section class="text-right font-weight-bolder">
                      Total Cart Cost: $<span class="totalCartCost">${this.totalCartCost()}</span><br>
                      Total Shipping Cost: $<span>${this.totalShippingCost()}</span><br>
                      Total Cost: $<span>${this.totalShippingCost() + this.totalCartCost()}</span>
                    </section>`);

    this.minusListener();
    this.plusListener();
  }

  minusListener() {
    $('td').on('click', `.fa-minus-circle`, (e) => {
      //e.preventDefault();
      //console.log(e)
      let id = $(e.target).closest('.list-item').attr('id');
      console.log(id)
      this.reduceItemQuantity(id);
    });
  }

  plusListener() {
    $('td').on('click', `.fa-plus-circle`, (e) => {
      //e.preventDefault();
      //console.log(e)
      let id = $(e.target).closest('.list-item').attr('id');
      console.log(id)
      this.addItemQuantity(id);
    });
  }

  render() {
    $('main').html(`<div class="table-responsive">
                      <table class="table table-striped align-middle font-weight-bolder text-dark">
                        ${output}
                      </table>
                    </div>
                    <section class="text-right font-weight-bolder">
                      Total Cart Cost: $<span class="totalCartCost">${this.totalCartCost()}</span><br>
                      Total Shipping Cost: $<span>${this.totalShippingCost()}</span><br>
                      Total Cost: $<span>${this.totalShippingCost() + this.totalCartCost()}</span>
                    </section>`);
  }

}
