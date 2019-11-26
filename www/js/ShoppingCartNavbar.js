

// $(addShoppingCart)
$(incremetCartNumber)

// function addShoppingCart(){
//     $('header > nav').append(`
//     <button type="button" class="btn btn-info">
//     <i class="fa fa-shopping-cart" aria-hidden="true"></i> Cart <span class="badge badge-pill badge-danger">0</span>
//    </button>
//     `)
// }

function incremetCartNumber(){
    $('.btn').click(function(){

        let count = parseInt( $("span").text());
          count++;
        

        $(".btn >span").text(count);
        
    });
}

