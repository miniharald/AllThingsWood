class Cart {

  

  
  add(product) {

    let count = 1;
    $(".btn-primary").click(function(){
      
      console.log(count)
      count++;
      console.log(count)
      $("span").text(count);
      });

    // alert(`
    //   I am the cart. I'm still really stupid 😢!
    //   I have no render-method and no methods that calc sums.
    //   I have no add and remove methods...
    //   But I know that you tried to add this product to me:
    //   ${JSON.stringify({ ...product, cart: undefined }, '', '  ')}
    // `.replace(/\n\s*/g, '\n'))
  }
}
