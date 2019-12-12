class OrderHistoryList {

  constructor() {
    this.formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

    $("body").on('click', '.fa-sort', e => {
      store.orderHistory.sort((a, b) => (a.date > b.date ? 1 : -1))
      this.render()
    });
  }

  rowOutput() {
    let output = " "
    for (let order of store.orderHistory) {
      output += `</div>
      <section class="row font-weight-bolder listBorder py-2">
                     <section class="col-2">${order.date}</section>
                     <section class="col-4 getNr">${order.orderNr}</section>
                     <section class="col-2">${order.quantity}</section>
                     <section class="col-2">${this.formatter.format(order.totalCost)}</section>
                     <section class="col-2" ><i id="${order.orderNr}" class="fa fa-chevron-down"></i></section>
                  </section>
                  <div class="toToggle-${order.orderNr} ordertoggle">
                  <section class="row listHeadBorder mt-5">
        <section class="col-2"></section>
        <section class="col-6 text-dark font-weight-bolder"></section>
        <section class="col-2 text-center text-dark font-weight-bolder">Quantity</section>
        <section class="col-2 text-dark font-weight-bolder ">Price Piece</section>
      </section>`

      for (let product of order.productList.products) {
        output += `<section class="mb-5 toToggle-${order.orderNr} ordertoggle">
      <section class="row listBorder" >
        <section class="col-2 py-2"><img class="border border-primary rounded list align-middle" src="${product.image}"></section>
        <section class="col-6 py-3 align-middle text-dark font-weight-bolder">${product.name} - ${product.short}</section>
        <section class="col-2 py-3 align-middle text-center text-dark font-weight-bolder">${product.quantity}</section>
        <section class="col-2 py-3 align-middle text-right text-dark font-weight-bolder">${this.formatter.format(product.price)}</section>
      </section>`
      }
      output += `<section class="row toToggle-${order.orderNr} ordertoggle " >
        <section class="col-7">
          <section class="row">
            <section class="col-6">
              <section class="row text-dark font-weight-bolder">Shipping:</section>
              <section class="row text-dark font-weight-bolder">Discount:</section>
              <section class="row text-dark font-weight-bolder mt-5">Total Cost:</section>
            </section>
            <section class="col-6">
              <section class="row text-dark font-weight-bolder text-right">${this.formatter.format(order.shippingCost)}</section>
              <section class="row text-dark font-weight-bolder text-right">${this.formatter.format(order.discount)}</section>
              <section class="row text-dark font-weight-bolder text-right mt-5">${this.formatter.format(order.totalCost)}</section>
            </section>
          </section>
        </section>
        <section class="col-5">
          <section class="row font-weight-bolder text-dark">Shipping Address</section>
          <section class="row font-weight-bolder text-dark">${order.name}</section>
          <section class="row font-weight-bolder text-dark">${order.address.streetName}</section>
          <section class="row font-weight-bolder text-dark">${order.address.zipCode} ${order.address.city}</section>
          <section class="row font-weight-bolder text-dark">${order.mail}</section>
          <section class="row font-weight-bolder text-dark">${order.phone}</section>
        </section>
      </section>
    </section>
    </div>
    </div>`
    }
    //console.log(output)
    //    for (let i in store.products) {
    //        output += `<section class="row">
    //                     <section class="col">Datum</section>
    //                     <section class="col">OrderNr</section>
    //                     <section class="col">Antal köpta produkter</section>
    //                     <section class="col">Total kostnad</section>
    //                     <section class="col">Toggle ikon</section>
    //                  </section>`;
    //    }

    return output;
  }

  render(output) {

    output = this.rowOutput();

    $('main').html(`
                      <section class="row font-weight-bolder listHeadBorder py-2">
                        <section class="col-2">Datum <i class="fa fa-sort"></i></section>
                        <section class="col-4">Order</section>
                        <section class="col-2">Antal</section>
                        <section class="col-2">Summa</section>
                        <section class="col-2"></section>
                       </section>
                        ${output}`);
  }


}