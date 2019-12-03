class Cart {

  constructor() {
    this.formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
  }



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
        store.products = this.products;
        //store.products = JSON.stringify(this.products)
        // store.save();
        //this.saveCart();
        return;
      }
    }
    this.products.push(product)
    $(" a >span").text(this.count);
    store.products = this.products;
    //store.products = JSON.stringify(this.products)
    // store.save();
    //this.saveCart();
    console.log(store.products)

  }

  saveCart() {
    localStorage.setItem("Cart", JSON.stringify(this.products))
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
    //this.saveCart();
  }

  addItemQuantity(id) {
    for (let i in this.products) {
      console.log(this.products[i])
      if (this.products[i].id == id) {
        console.log(this.products[i].id)
        this.products[i].quantity++;
        $(" a >span").text(this.count);
        this.test();
        //this.saveCart();
        break;
      }
    }
  }

  removeProductFromCart(id) {
    for (let i in this.products) {
      if (this.products[i].id == id) {
        this.products.splice(i, 1);
        $(" a >span").text(this.count);
        this.test();
        break;
      }
    }
    //this.saveCart();
  }

  //listCart() {
  //  let productsCopy = [];
  //  for (let i in this.products) {
  //    let product = this.products[i];
  //    let productCopy = {};
  //    for (let p in product) {
  //      productCopy[p] = product[p];
  //    }
  //    productsCopy.push(productCopy);
  //    console.log("productsCopy: ", productsCopy)
  //  }
  //  return productsCopy
  //}

  test() {

    //let cartArray = this.products;
    //console.log(cartArray)
    let output = '';
    //console.log(output)
    for (let i in this.products) {
      output += `<tr class="row list-item" id="${this.products[i].id}">
                    <td class="text-center col-1 m-0 py-1 px-0">
                      <img class="img-fluid border border-primary rounded list" src="${this.products[i].image}">
                    </td>
                    <td class="col-6 align-middle m-0 py-1 px-0">
                      ${this.products[i].name} - ${this.products[i].short}
                    </td>
                    <td class="align-middle col-3 row m-0 py-1 px-0">
                      <section class="col-2 m-0 p-0 text-right"><i class="fa fa-minus-circle"></i></section>
                      <span class="quantity col-3 p-0 m-0 text-center"> ${this.products[i].quantity} </span>
                      <section class="col-2 m-0 p-0"><i class="fa fa-plus-circle"></i></section>
                      <section class="col-5 m-0 p-0"><i class="fa fa-trash px-2"></i></section>
                      
                    </td>
                    <td class="text-right align-middle col-2 m-0 py-1 pl-0 pr-3">
                      <span class="font-weight-normal">á $${this.products[i].price}</span>
                      <span>${this.formatter.format(this.products[i].price * this.products[i].quantity)}</span>
                    </td>
                  </tr>`;
    }

    //console.log(output)

    $('main').html(`<div>
                      <table class="table table-striped align-middle font-weight-bolder text-dark">
                        ${output}
                      </table>
                    </div>
                    <section class="text-right font-weight-bolder">
                      Total Cart Cost: <span class="totalCartCost">${this.formatter.format(this.totalCartCost())}</span><br>
                      Total Shipping Cost: <span>${this.formatter.format(this.totalShippingCost())}</span> <br>
  Total Cost: <span>${this.formatter.format(this.totalShippingCost() + this.totalCartCost())}</span>
                    </section>`);

    this.minusListener();
    this.plusListener();
    this.trashListener();
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

  trashListener() {
    $('td').on('click', `.fa-trash`, (e) => {
      //e.preventDefault();
      //console.log(e)
      let id = $(e.target).closest('.list-item').attr('id');
      console.log(id)
      this.removeProductFromCart(id);
    });
  }

  render(output) {
    $('main').html(`< div class="table-responsive" >
  <table class="table table-striped align-middle font-weight-bolder text-dark">
    ${output}
  </table>
                    </div >
  <section class="text-right font-weight-bolder">
    Total Cart Cost: $<span class="totalCartCost">${this.totalCartCost()}</span><br>
      Total Shipping Cost: $<span>${this.totalShippingCost()}</span><br>
        Total Cost: $<span>${this.totalShippingCost() + this.totalCartCost()}</span>
                    </section>`);
  }

}
