class Page404 {
  render() {
    $('main').html(/*html*/`
      <section class="row">
        <div class="col">
          <h1>Page not found 😢...</h1>
          <p class="font-weight-bolder">It could be our fault, maybe yours... who knows?</p>
          <p class="font-weight-bolder">Do you like to check some of <a href="#shop">our new wooden stuff</a>?</p>
        </div>
      </section>
    `);
  }
}