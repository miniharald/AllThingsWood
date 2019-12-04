class Form {

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
    <div class="col-lg-7 mx-auto">
      <div class="bg-white rounded-lg shadow-sm p-1">
        <!-- Credit card form tabs -->
        <ul role="tablist" class="nav bg-light nav-pills rounded-pill nav-fill mb-3">
          <li class="nav-item">
            <a data-toggle="pill" href="#nav-tab-card" class="nav-link active rounded-pill">
                                <i class="fa fa-credit-card"></i>
                                Credit Card
                            </a>
          </li>
          <li class="nav-item">
            <a data-toggle="pill" href="#nav-tab-paypal" class="nav-link rounded-pill">
                                <i class="fa fa-paper-plane"></i></i>
                                Shipping
                            </a>
          </li>
          <li class="nav-item">
            <a data-toggle="pill" href="#nav-tab-bank" class="nav-link rounded-pill">
                                <i class="fa fa-university"></i>
                                Greeting
                             </a>
          </li>
        </ul>
        <!-- End -->


        <!-- Credit card form content -->
        <div class="tab-content">

          <!-- credit card info-->
          <div id="nav-tab-card" class="tab-pane fade show active">
            <p class="alert alert-success">Please fill in your credit card information below</p>
            <form role="form">
              <div class="form-group">
                <label for="username">Full name (on the card)</label>
                <input type="text" name="username" placeholder="Jason Doe" required class="form-control">
              </div>
              <div class="form-group">
                <label for="cardNumber">Card number</label>
                <div class="input-group">
                  <input type="text" name="cardNumber" placeholder="Your card number" class="form-control" required>
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
                      <input type="number" placeholder="MM" name="" class="form-control" required>
                      <input type="number" placeholder="YY" name="" class="form-control" required>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="form-group mb-4">
                    <label data-toggle="tooltip" title="Three-digits code on the back of your card">CVV
                                                <i class="fa fa-question-circle"></i>
                                            </label>
                    <input type="text" required class="form-control">
                  </div>
                </div>



              </div>
              <!-- <button type="button" class="subscribe btn btn-secondary btn-block rounded-pill shadow-sm"> cancel  </button>
              <button type="button" class="subscribe btn btn-primary btn-block rounded-pill shadow-sm"> Confirm  </button>
              -->
              <div class="row">
              
             
              
              <div class="col text-center">
              
              <a data-toggle="pill" href="#nav-tab-paypal" class=" btn btn-primary rounded-pill"><i class="fa fa-check-square"></i></i> Next</a>

              <!-- next-button -->
              </div>
              </div>
            </form>
          </div>
          

          <!-- End -->

          <!-- Paypal info -->
          <div id="nav-tab-paypal" class="tab-pane fade">
          <div id="nav-tab-card" class="tab-pane fade show active">
          <p class="alert alert-success">Now enter your shipping details</p>
          <form role="form">
            <div class="form-group">
              <label for="username">Country</label>
              <input type="text" name="username" placeholder="USA" required class="form-control">
            </div>
            <form role="form">
            <div class="form-group">
              <label for="username">State</label>
              <input type="text" name="username" placeholder="Wyoming" required class="form-control">
            </div>
            <form role="form">
            <div class="form-group">
              <label for="username">City</label>
              <input type="text" name="username" placeholder="Green river" required class="form-control">
            </div>
            
            <form role="form">
            <div class="form-group">
                    <label><span class="hidden-xs">Adress</span></label>
                    <div class="input-group">
                      <input type="number" placeholder="Streetname" name="" class="form-control" required>
                      <input type="number" placeholder="Number" name="" class="form-control" required>
                    </div>
                  </div>
            
            
              
            <!-- <button type="button" class="subscribe btn btn-secondary btn-block rounded-pill shadow-sm"> cancel  </button>
            <button type="button" class="subscribe btn btn-primary btn-block rounded-pill shadow-sm"> Confirm  </button>
            -->
            
           

            </div>
            <div class="col text-center">
            <a data-toggle="pill" href="#nav-tab-bank" class=" btn btn-primary rounded-pill"><i class="fa fa-check-square"></i></i> Next-greeting</a>
           
          </form>
        </div>
          </div>
          <!-- End -->

          <!-- bank transfer info -->
          <div id="nav-tab-bank" class="tab-pane fade">
          <form role="form">
          <div class="form-group">
            <label for="username"><p class="alert alert-success">Words mean everything</p></label>
            <p>Send a note to whoever recieves this box!<br> Maximum 100 characters!  </p>
            
            <input type="text" name="username" placeholder="Write your message here" required class="form-control">
            <br>

            
            
            <a href="#thankyou"  class=" btn btn-primary rounded-pill"><i class="fa fa-check-square"></i></i> Next-greeting</a>
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
    }
  
  }