

// $(addShoppingCart)
// $(incremetCartNumber)


// function addShoppingCart(){
//     $('header > nav').append(`
//     <button type="button" class="btn btn-info">
//     <i class="fa fa-shopping-cart" aria-hidden="true"></i> Cart <span class="badge badge-pill badge-danger">0</span>
//    </button>
//     `)
// }

   
function add(params) {
    let count = 1;
    $(".btn-primary").click(function(){
      
      console.log(count)
      count++;
      console.log(count)
      $(".btn >span").text(count);
      });

  }
  
// function incremetCartNumber(){
//   console.log("ba")
//     $("main > section > .btn-primary").click(function(){
//       console.log("Helo");
//         // let count = 1;
//         //   count++;
//         // $(".btn >span").text(count);
        
//     });
// }

