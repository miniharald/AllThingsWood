class OrderHistoryList {

    rowOutput() {
        let output = " "
        console.log(store.orderHistory)
        for (let order of store.orderHistory) {
            output += `<section class="row font-weight-bolder listBorder py-2">
                     <section class="col-2">${order.date}</section>
                     <section class="col-4">${order.orderNr}</section>
                     <section class="col-2">Antal köpta produkter</section>
                     <section class="col-2">Total kostnad</section>
                     <section class="col-2"><i class="fa fa-chevron-down"></i></section>
                  </section>
                  `

            for (let product of order.productList.products) {
                output += `<section class="">
      <section class="row listBorder">
        <section class="col-2"></section>
        <section class="col-6 text-dark font-weight-bolder"></section>
        <section class="col-2 text-dark font-weight-bolder">Quantity</section>
        <section class="col-2 text-dark font-weight-bolder">á Price</section>
      </section>
      <section class="row listBorder">
        <section class="col-2"><img class="border border-primary rounded list align-middle" src="${product.image}"></section>
        <section class="col-6 text-dark font-weight-bolder">PRODUCT NAME & SHORT HERE</section>
        <section class="col-2 text-dark font-weight-bolder">PRODUCT QUANTITY HERE</section>
        <section class="col-2 text-dark font-weight-bolder">PRODUCT PRICE (NOT TOTAL) HERE</section>
      </section>`
            }
            output += `<section class="row">
        <section class="col-7">
          <section class="row">
            <section class="col-6">
              <section class="row text-dark font-weight-bolder">Shipping:</section>
              <section class="row text-dark font-weight-bolder">Discount:</section>
              <section class="row text-dark font-weight-bolder mt-5">Total Cost:</section>
            </section>
            <section class="col-6">
              <section class="row text-dark font-weight-bolder text-right">SHIPPING COST HERE</section>
              <section class="row text-dark font-weight-bolder text-right">TOTAL DISCOUNT HERE</section>
              <section class="row text-dark font-weight-bolder text-right mt-5">TOTAL COST HERE</section>
            </section>
          </section>
        </section>
        <section class="col-5">
          <section class="row font-weight-bolder text-dark">Shipping Address</section>
          <section class="row font-weight-bolder text-dark">BUYER NAME HERE</section>
          <section class="row font-weight-bolder text-dark">BUYER ADDRESS HERE</section>
          <section class="row font-weight-bolder text-dark">BUYER ZIP CODE & CITYHERE</section>
          <section class="row font-weight-bolder text-dark">BUYER E-MAIL HERE</section>
          <section class="row font-weight-bolder text-dark">BUYER PHONE# HERE</section>
        </section>
      </section>
    </section>`
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