class OrderHistoryList {

    rowOutput() {
        let output = " "
        for(let i in store.orderHistory){
        output += `<section class="row font-weight-bolder listBorder py-2">
                     <section class="col-2">${store.orderHistory[i].date}</section>
                     <section class="col-4">${store.orderHistory[i].orderNr}</section>
                     <section class="col-2">${store.orderHistory[i].name}</section>
                     <section class="col-2">Total kostnad</section>
                     <section class="col-2"><i class="fa fa-chevron-down"></i></section>
                  </section>`;
                }
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