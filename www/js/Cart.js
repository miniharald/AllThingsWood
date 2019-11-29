class Cart {



   

  //objects array   
  products = []
  //count total products

 

  get count() {
    return this.products.length;

  }
  
  add(product) {
    this.products.push(product)
    $(" a >span").text(this.count);

    }

  render() {

        $('main').html(/*html*/`
         <section class="row">
            <div class="col">
              <h1>Heloo</h1>
              <h1>${name}</h1>
            </div>
          </section>
          <section class="row item">
            <div class="col-12 col-lg-9">
              <p>ssss</p>
              <h4> $100 </p>
              <button class="btn btn-primary my-2"></button>
            </div>
            <div class="col-12 col-lg-3 item">
              <img class="img-fluid border border-primary rounded" src=>
            </div>
          </section>
        `);
      }

}
