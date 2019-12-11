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