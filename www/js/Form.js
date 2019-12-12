

class Form extends Cart {

  constructor() {
    super()
    this.totalCartCost();
    this.count();
    this.totalShippingCost();
    this.discount();

    //first button
    $("body").on('click', '#firstbutton', e => {

      delivery_info.name = $("#fullName").val();
      $("#creditcard").removeClass("active")
      $("#shipping").addClass("active")
    });

    //second button
    $("body").on('click', '#secondbutton', e => {
      delivery_info.address.country = $("#country").val();
      delivery_info.mail = $("#mail").val();
      delivery_info.phone = $("#phone").val();
      delivery_info.address.city = $("#city").val();
      delivery_info.address.streetName = $("#street").val();
      delivery_info.address.zipCode = $("#zipcode").val();
      $("#shipping").removeClass("active")
      $("#greeting").addClass("active")
    });

    //third button
    $("body").on('click', '#thirdbutton', e => {
       delivery_info.greeting = $("#msg").val();
      delivery_info.discount = this.discount();
      delivery_info.shippingCost = this.totalShippingCost();
      delivery_info.quantity = this.count();
      delivery_info.totalCost = this.totalCartCost();
      let randomOrder = Math.floor(Math.random() * 7488734879);
      delivery_info.orderNr = randomOrder;
      delivery_info.date = current_date;
      delivery_info.productList = JSON.parse(localStorage.store);
      store.orderHistory.push(delivery_info)
      store.products = [];
      store.save();
      $(" a >span").text("0");
    });

    store.orderHistory = store.orderHistory || [];

    let delivery_info = {
      name: "",
      mail: "",
      phone: "",
      address: {
        country: "",
        city: "",
        streetName: "",
        zipCode: ""
      },
      greeting: "",
      orderNr: "",
      date: "",
      productList: "",
      quantity: "",
      totalCost: "",
      shippingCost: "",
      discount: ""
    }
    //get current time
    let today = new Date();
    let current_date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    
  }

  render() {
    $('main').html(/*html*/`
        <section class="row">
  
          <div class="col text-center"> 
          <img class="logo2 img-fluid pb-0" src="/images/betalogoallthingswood.png"  alt="">

<div class="container">

  <!-- For demo purpose -->
  <div class="row mb-4">
    <div class="col-lg-8 mx-auto text-center">

      
    </div>
  </div>
  <!-- End -->


  <div class="row">
    <div class="col-lg-7 mx-auto" id="check-selector">
      <div class="bg-white rounded-lg shadow-sm p-1">
        <!-- Credit card form tabs -->
        <ul role="tablist" class="font-weight-bolder nav bg-light nav-pills rounded-pill nav-fill mb-3">
          <li class="nav-item">
            <a id="creditcard" data-toggle="pill" href="#nav-tab-card" class="nav-link active rounded-pill">
                                <i class="fa fa-credit-card"></i>
                                Credit Card
                            </a>
          </li>
          <li class="nav-item">
            <a id="shipping" data-toggle="pill" href="#nav-tab-paypal" class="nav-link rounded-pill">
                                <i class="fa fa-paper-plane"></i></i>
                                Shipping
                            </a>
          </li>
          <li class="nav-item">
            <a id="greeting" data-toggle="pill" href="#nav-tab-bank" class="nav-link rounded-pill">
            <i class="fa fa-edit"></i> </i>
                                Greeting
                             </a>
          </li>
        </ul>
        <!-- End -->


        <!-- Credit card form content -->
        <div class="tab-content">

          <!-- credit card info-->
          <div id="nav-tab-card" class="font-weight-bolder tab-pane fade show active">
            <p class="alert alert-success">Please fill in your credit card information below</p>
            <form role="form">
              <div class="form-group">
                <label for="username">Full name (on the card)</label>
                <input id="fullName" type="text" name="username" placeholder="Jason Doe" class="form-control">
              </div>
              <div class="form-group">
                <label for="cardNumber">Card number</label>
                <div class="input-group">
                  <input type="text" name="cardNumber" placeholder="Your card number" class="form-control"  >
                  <div class="input-group-append">
                    <span class="input-group-text text-muted">
                                                <i class="fa fa-cc-visa mx-1"></i>
                                                <i class="fa fa-cc-amex mx-1"></i>
                                                <i class="fa fa-cc-mastercard mx-1"></i>
                                            </span>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-8">
                  <div class="form-group">
                    <label><span class="hidden-xs">Expiration</span></label>
                    <div class="input-group">
                      <input type="number" placeholder="MM" name="" class="form-control"  >
                      <input type="number" placeholder="YY" name="" class="form-control"  >
                    </div>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="form-group mb-4">
                    <label data-toggle="tooltip" title="Three-digits code on the back of your card">CVV
                                                <i class="fa fa-question-circle"></i>
                                            </label>
                    <input type="text"   class="form-control">
                  </div>
                </div>



              </div>
              <!-- <button type="button" class="subscribe btn btn-secondary btn-block rounded-pill shadow-sm"> cancel  </button>
              <button type="button" class="subscribe btn btn-primary btn-block rounded-pill shadow-sm"> Confirm  </button>
              -->
              <div class="row">
              
             
              
              <div class="col text-center">
              
              <a id="firstbutton" data-toggle="pill" href="#nav-tab-paypal" class="font-weight-bolder btn btn-primary rounded-pill"> <i class="fa fa-check-square"></i></i> Continue</a>

              <!-- next-button -->
              </div>
              </div>
            </form>
          </div>
          

          <!-- End -->

          <!-- Paypal info -->
          <div id="nav-tab-paypal" class="font-weight-bolder tab-pane fade">
          <div id="nav-tab-card" class="tab-pane fade show active">
          <p class="alert alert-success">Now enter your shipping details</p>
          <form role="form">
          <form role="form">
            <div class="form-group">
              <label for="username">E-Mail</label>
              <input id="mail" type="text" name="username" placeholder="your@mail.com"   class="form-control">
            </div>
            <form role="form">
            <div class="form-group">
              <label for="username">Phone Number</label>
              <input id="phone" type="text" name="username" placeholder="555-12345"   class="form-control">
            </div>
            <div class="form-group">
              <label for="username">Country</label>
              <input id="country" type="text" name="username" placeholder="USA"   class="form-control">
            </div>
            <form role="form">
            <div class="form-group">
              <label for="username">City</label>
              <input id="city" type="text" name="username" placeholder="Green River"   class="form-control">
            </div>
            
            <form role="form">
            <div class="form-group">
                    <label><span class="hidden-xs">Adress</span></label>
                    <div class="input-group">
                      <input id="street" type="text" placeholder="Streetname" name="" class="form-control">
                      <input id="zipcode" type="number" placeholder="Zip Code" name="" class="form-control">
                    </div>
                  </div>
            
            
              
            <!-- <button type="button" class="subscribe btn btn-secondary btn-block rounded-pill shadow-sm"> cancel  </button>
            <button type="button" class="subscribe btn btn-primary btn-block rounded-pill shadow-sm"> Confirm  </button>
            -->
            
           

            </div>
            <div class="col text-center">
            <a id="secondbutton" data-toggle="pill" href="#nav-tab-bank" class="font-weight-bolder btn btn-primary rounded-pill"><i class="fa fa-check-square"></i></i> Continue</a>
           
          </form>
        </div>
          </div>
          <!-- End -->

          <!-- bank transfer info -->
          <div id="nav-tab-bank" class="font-weight-bolder tab-pane fade">
            <div class="form-group">
              <div>
                <p class="alert alert-success">Words mean everything</p>
              </div>
                <p>Send a note to whoever recieves this box!<br> Maximum 100 characters!  </p>
                <input id="msg" type="text" name="username" placeholder="Write your message here"   class="form-control">
                <br>
                <a id="thirdbutton" href="#thankyou" class="font-weight-bolder btn btn-primary rounded-pill"><i class="fa fa-check-square"></i></i> Finish</a>
            </div>
           </div>
                <!-- End -->
        </div>
        <!-- End -->

      </div>
    </div>
  </div>
</div>
  
  
              </section>
      
              </div>
            </section>
  
          </div>
        </section>
          </div>
        </section>
      `);



    /// ny kod 


  }


}
