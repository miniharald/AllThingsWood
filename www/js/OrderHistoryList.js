class OrderHistoryList {

  constructor() {
    this.formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
    let sortOrder = 'ascending'

    $("body").on('click', '.fa-sort', e => {
      sortOrder = sortOrder === 'ascending' ? 'descending' : 'ascending';
      store.orderHistory.sort((a, b) => {
        if (sortOrder === 'descending') {
          return a.date > b.date ? -1 : 1;
        }
        return a.date > b.date ? 1 : -1
      });
      this.render()
    });

    $('body').on('click', '.fa-chevron-down, .fa-chevron-up', e => {
      $(e.currentTarget).toggleClass('fa-chevron-down fa-chevron-up');
      let nr = $(e.currentTarget).attr('id');
      console.log(nr)
      $(`.toToggle-${nr}`).slideToggle("slow");
    });
  }

  rowOutput() {
    let output = " "
    for (let order of store.orderHistory) {
      output += `</div>
      <section class="row font-weight-bolder listOrderBorder py-2">
                     <section class="col-4 col-sm-3 col-md-2">${order.date}</section>
                     <section class="col-4 col-md-5 getNr">${order.orderNr}</section>
                     <section class="d-none d-sm-block col-2 text-center">${order.quantity}</section>
                     <section class="col-2 text-right">${this.formatter.format(order.totalCost)}</section>
                     <section class="col-2 col-sm-1 text-right" ><i id="${order.orderNr}" class="fa fa-chevron-down"></i></section>
                  </section>
                  <div class="toToggle-${order.orderNr} ordertoggle">
                  <section class="row listOrderHeadBorder mt-5">
        <section class="col-2 col-md-1"></section>
        <section class="col-4 col-sm-5 col-md-7 text-dark font-weight-bolder"></section>
        <section class="col-2 text-center text-dark font-weight-bolder">Quantity</section>
        <section class="col-4 col-sm-3 col-md-2 text-dark font-weight-bolder text-right">Price Piece</section>
      </section>`

      for (let product of order.productList.products) {
        output += `<section class="mb-5">
      <section class="row listBorder" >
        <section class="col-2 col-md-1 py-2"><img class="border border-primary rounded list align-middle" src="${product.image}"></section>
        <section class="d-flex col-4 col-sm-5 col-md-7 py-3 align-middle text-dark font-weight-bolder"><span class="align-middle">${product.name}</span><span class="align-middle d-none d-md-block"> - ${product.short}</span></section>
        <section class="col-2 py-3 align-middle text-center text-dark font-weight-bolder"><span class="align-middle">${product.quantity}</span></section>
        <section class="col-4 col-sm-3 col-md-2 py-3 align-middle text-right text-dark font-weight-bolder text-right"><span class="align-middle">${this.formatter.format(product.price)}</span></section>
      </section>`
      }
      output += `<section class="row mb-5 mt-2" >
        <section class="col-6 col-md-7">
          <section class="row">
            <section class="pl-4 col-6 col-sm-4 col-lg-2">
              <section class="row text-dark font-weight-bolder">Shipping:</section>
              <section class="row text-dark font-weight-bolder">Discount:</section>
              <section class="row text-dark font-weight-bolder mt-5">Total Cost:</section>
            </section>
            <section class="col-6 pl-4 col-sm-8 col-lg-10">
              <section class="row text-dark font-weight-bolder text-right">${this.formatter.format(order.shippingCost)}</section>
              <section class="row text-dark font-weight-bolder text-right">${this.formatter.format(order.discount)}</section>
              <section class="row text-dark font-weight-bolder text-right mt-5">${this.formatter.format(order.totalCost)}</section>
            </section>
          </section>
        </section>
        <section class="col-6 col-md-5">
          <section class="row font-weight-bolder text-dark"><u>Shipping Address</u></section>
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

    return output;
  }

  render(output) {

    output = this.rowOutput();

    $('main').html(`
                      <section class="row font-weight-bolder listHeadBorder py-2">
                        <section class="col-4 col-sm-3 col-md-2">Datum <i class="fa fa-sort"></i></section>
                        <section class="col-4 col-md-5">Order</section>
                        <section class="d-none d-sm-block col-2 text-center">Quantity</section>
                        <section class="col-2 text-right">Cost</section>
                        <section class="col-2 col-sm-1"></section>
                       </section>
                        ${output}`);
  }


}