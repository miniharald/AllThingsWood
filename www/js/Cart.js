class Cart {

  constructor() {
    this.formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
    //store = JSON.parse(localStorage.store)
    store.products = store.products || []
    $(" a >span").text(this.count);
  }



  //objects array   

  //count total products



  count() {
    let cartCount = 0;
    for (let i in store.products) {
      cartCount += store.products[i].quantity;
    }
    return cartCount;

  }

  totalCartCost() {
    let totalCost = 0;
    for (let i in store.products) {
      totalCost += store.products[i].price * store.products[i].quantity;
    }
    return totalCost;
  }

  totalShippingCost() {
    let shippingWeight = 0;
    let shippingCost = 0;
    for (let i in store.products) {
      shippingWeight += store.products[i].weight * store.products[i].quantity;
    }
    shippingCost = shippingWeight * 4;
    return shippingCost;
  }

  add(product) {
    for (let i in store.products) {
      if (store.products[i].id === product.id) {
        store.products[i].quantity++;
        $(" a >span").text(this.count);
        //this.discount()
        //store.products = JSON.stringify(store.products)
        store.save();
        //this.saveCart();
        return;
      }
    }
    store.products.push(product)
    $(" a >span").text(this.count);
    //this.discount()
    //store.products = JSON.stringify(store.products)
    store.save();
    //this.saveCart();
    console.log(store.products)

  }

  reduceItemQuantity(id) {
    for (let i in store.products) {
      if (store.products[i].id == id) {
        if (store.products[i].quantity > 1) {
          store.products[i].quantity--;
        }
        $(" a >span").text(this.count);
        store.save()
        this.render();
        break;
      }
    }
  }

  addItemQuantity(id) {
    for (let i in store.products) {
      if (store.products[i].id == id) {
        store.products[i].quantity++;
        $(" a >span").text(this.count);
        store.save();
        this.render();
        break;
      }
    }
  }

  removeProductFromCart(id) {
    for (let i in store.products) {
      if (store.products[i].id == id) {
        store.products.splice(i, 1);
        $(" a >span").text(this.count);
        store.save();
        this.render();
        break;
      }
    }
    //this.saveCart();
  }

  //listCart() {
  //  let productsCopy = [];
  //  for (let i in store.products) {
  //    let product = store.products[i];
  //    let productCopy = {};
  //    for (let p in product) {
  //      productCopy[p] = product[p];
  //    }
  //    productsCopy.push(productCopy);
  //    console.log("productsCopy: ", productsCopy)
  //  }
  //  return productsCopy
  //}

  discount() {
    let discountTotal = 0;
    for (let product of store.products) {

      let [discountQuantity, _for] = product.discount || [];

      if (discountQuantity) {
        let numberOfDiscounts = Math.floor(product.quantity / discountQuantity);
        discountTotal = numberOfDiscounts * product.price * (discountQuantity - _for);
      }
    }

    return discountTotal
  }

  taxes() {
    let totalCost = 0;
    for (let i in store.products) {
      totalCost += store.products[i].price * store.products[i].quantity;
    }
    let taxes = totalCost * 0.07;
    //let taxes = this.totalCartCost * 0.25;
    //console.log(taxes)
    return taxes;
  }

  tableRowOutput() {
    //this.discount()

    //let cartArray = store.products;
    //console.log(cartArray)
    let output = '';
    //console.log(output)
    for (let i in store.products) {
      output += `<section class="row list-item font-weight-bolder listBorder text-dark" id="${store.products[i].id}">
                    <section class="py-1 text-center d-none d-lg-block col-1 align-middle">
                      <img class="border border-primary rounded list align-middle" src="${store.products[i].image}">
                    </section>
                    <section class="col-6 m-0 py-3 px-2 px-lg-0">
                      <a class="d-flex" href="#${store.products[i].slug}"><span>${store.products[i].name}</span><span class="pl-1 d-none d-md-block"> - ${store.products[i].short}</span></a>
                    </section>
                    <section class="align-middle col-3 row m-0 py-3 px-0">
                      <section class="col-2 m-0 p-0 text-right"><i class="fa fa-minus-circle"></i></section>
                      <span class="quantity col-3 p-0 m-0 text-center"> ${store.products[i].quantity} </span>
                      <section class="col-2 m-0 p-0"><i class="fa fa-plus-circle"></i></section>
                      <section class="col-5 m-0 p-0"><i class="fa fa-trash px-2"></i></section>
                      
                    </section>
                    <section class="text-right align-middle col-3 col-lg-2 m-0 py-3 pl-0 pr-3">
                      <span class="font-weight-normal">á $${store.products[i].price}</span>
                      <span>${this.formatter.format(store.products[i].price * store.products[i].quantity)}</span>
                    </section>
                  </section>`;
    }

    return output;
  }

  minusListener() {
    $('section').on('click', `.fa-minus-circle`, (e) => {
      //e.preventDefault();
      //console.log(e)
      let id = $(e.target).closest('.list-item').attr('id');
      console.log(id)
      this.reduceItemQuantity(id);
    });
  }

  plusListener() {
    $('section').on('click', `.fa-plus-circle`, (e) => {
      //e.preventDefault();
      //console.log(e)
      let id = $(e.target).closest('.list-item').attr('id');
      console.log(id)
      this.addItemQuantity(id);
    });
  }

  trashListener() {
    $('section').on('click', `.fa-trash`, (e) => {
      //e.preventDefault();
      //console.log(e)
      let id = $(e.target).closest('.list-item').attr('id');
      console.log(id)
      this.removeProductFromCart(id);
    });
  }

  render(output) {
    output = this.tableRowOutput();

    if (store.products.length == 0) {
      output = " ";
    }

    $('main').html(`<div>
                        ${output}
                    </div>
                    <section class="mt-2 text-right font-weight-bolder text-dark">
                      Total Cart Cost: <span class="totalCartCost">${this.formatter.format(this.totalCartCost())}</span><br>
                      Taxes: <span>${this.formatter.format(this.taxes())}</span><br>
                      Discount: <span>${this.formatter.format(this.discount())}</span><br>
                      Total Shipping Cost: <span>${this.formatter.format(this.totalShippingCost())}</span> <br>
  Total Cost: <span>${this.formatter.format(this.totalShippingCost() + this.totalCartCost() + this.taxes() - this.discount())}</span>
                    </section>
                    <section class="text-center mt-5">
                      <a href="#form" class="btn btn-primary text-light font-weight-bolder">Proceed to Checkout</a>
                    </section>`);

    this.minusListener();
    this.plusListener();
    this.trashListener();
  }

}
