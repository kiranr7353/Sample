// var firebaseConfig = {
//   apiKey: "AIzaSyBMRJQUv7VIWe0j8YvNnnCqMtEMqbWN5zE",
//   authDomain: "ecommerce-e072e.firebaseapp.com",
//   databaseURL: "https://ecommerce-e072e.firebaseio.com",
//   projectId: "ecommerce-e072e",
//   storageBucket: "ecommerce-e072e.appspot.com",
//   messagingSenderId: "273839631852",
//   appId: "1:273839631852:web:7782a4aa460c86557c24c9",
//   measurementId: "G-XHZPGWPVGV"
// };
// firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

  function saveCart() {
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
  }

var shoppingCart = (function() {
    
    cart = [];
    
    // Constructor
    // function Item(name, price, count,image) {
    //   this.name = name;
    //   this.price = price;
    //   this.count = count;
     
    // }
    
    function Item(name, price, count,image) {
      this.name = name;
      this.price = price;
      this.count = count;
      this.image=image;
      // this.image=document.querySelectorAll('.card-img-top').getAttribute('src');
    }
    

  
    
      // Load cart
    function loadCart() {
      cart = JSON.parse(localStorage.getItem('shoppingCart'));
    }
    if (localStorage.getItem("shoppingCart") != null) {
      loadCart();
    }
    
  
    // =============================
    // Public methods and propeties
    // =============================
    var obj = {};
    
    // Add to cart
    obj.addItemToCart = function(name, price, count,image) {
      
      
      for(var item in cart) {
        if(cart[item].name === name) {
          
          cart[item].count ++;
          
          saveCart();
          
          return;
        }
      }
      var item = new Item(name, price, count,image);
      
      cart.push(item);
     
      saveCart();
    }



    // obj.addItemToCart1 = function(name, price, count,image) {
      
      
    //   for(var item in cart) {
    //     if(cart[item].name === name) {
          
    //       cart[item].count ++;
          
    //       saveCart();
          
    //       return;
    //     }
    //   }
    //   var item = new Item(name, price, count,image);
      
    //   cart.push(item);
     
    //   saveCart();
    // }
    // Set count from item
    obj.setCountForItem = function(name, count) {
      for(var i in cart) {
        if (cart[i].name === name) {
          cart[i].count = count;
          break;
        }
      }
    };
    // Remove item from cart
    obj.removeItemFromCart = function(name) {
        for(var item in cart) {
          if(cart[item].name === name) {
            cart[item].count --;
            if(cart[item].count === 0) {
              cart.splice(item, 1);
            }
            break;
          }
      }
      saveCart();
    }
  
    // Remove all items from cart
    obj.removeItemFromCartAll = function(name) {
      for(var item in cart) {
        if(cart[item].name === name) {
          cart.splice(item, 1);
          break;
        }
      }
      saveCart();
    }
  
    // Clear cart
    obj.clearCart = function() {
      cart = [];
      saveCart();
    }
  
    // Count cart 
    obj.totalCount = function() {
      var totalCount = 0;
      for(var item in cart) {
        totalCount += cart[item].count;
      }
      // document.getElementById('count').innerHTML=`Shopping Cart Items (${totalCount})`
      return totalCount;
     
    }
    
    // Total cart
    obj.totalCart = function() {
      var totalCart = 0;
      for(var item in cart) {
        totalCart += cart[item].price * cart[item].count;
      }
      return Number(totalCart.toFixed(5));
    }
    // firebase.database().ref('shoppingCart').push({
    //   total:obj.totalCart (),
    //   products:obj.totalCount()
    // })
    // List cart
    obj.listCart = function() {
      var cartCopy = [];
      for(i in cart) {
        item = cart[i];
        itemCopy = {};
        for(p in item) {
          itemCopy[p] = item[p];
  
        }
        itemCopy.total = Number(item.price * item.count).toFixed(2);
        cartCopy.push(itemCopy)
      }
      return cartCopy;
    }
    
  
    // cart : Array
    // Item : Object/Class
    // addItemToCart : Function
    // removeItemFromCart : Function
    // removeItemFromCartAll : Function
    // clearCart : Function
    // countCart : Function
    // totalCart : Function
    // listCart : Function
    // saveCart : Function
    // loadCart : Function
    return obj;
  })();
  
  
  // *****************************************
  // Triggers / Events
  // ***************************************** 
  // Add item
  function loadCart() {
    cart = JSON.parse(localStorage.getItem('shoppingCart'));
  }
  if (localStorage.getItem("shoppingCart") != null) {
    loadCart();
  }
  $('.add-to-cart').click(function(event) {
    event.preventDefault();
    var name = $(this).attr('data-name')
   
    var price = Number($(this).attr('data-price'));
    // var image=$(this).find('img').attr('src')
   
  
    shoppingCart.addItemToCart(name, price, 1);
  //   function pageRedirect() {
  //     window.location.href="cart.html";
  //     setTimeout("pageRedirect()", 5000);
  // }      
      
  
    saveCart()
    // loadCart()
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Added To Cart',
      width:'20rem',
      padding:'0.5rem',
      showConfirmButton: false,
      timer: 1500
    })
   
    displayCart();
    // pageRedirect()
  });
  
      
  
  // Clear items
  $('.clear-cart').click(function() {
    // shoppingCart.clearCart();
    
    
    
    document
    shoppingCart.clearCart();
    saveCart();

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
    displayCart();
  });
  
  
  function displayCart() {
    var cartArray = shoppingCart.listCart();
    var output = '';
    
    for(var i in cartArray) {
output += `

      <ul class="list-group">
      <li class="list-group-item d-flex justify-content-between lh-condensed pb-5">
        <div class="col-md-6">
          <h6 class="my-0">${cartArray[i].name}</h6>
         
        </div>
        
        <span class="col-md-3 text-muted">Qty:${cartArray[i].count}</span>
        
        <i class="fa fa-inr ml-2" aria-hidden="true" style="font-size: 20px;"></i><span class="col-md-3 text-muted product-total">${cartArray[i].total}</span>
      </li>
     
      
    </ul>
       `
};

    if(cart.length>0){
    $('.show-cart').html(output);

    }else{
      
      $('.container-fluid').text('no cart items')
      $('.clear-cart').remove();
      $('.order').remove();
    $('.total').remove();
    $('.Checkout').remove();
    }
    $('.total-cart').html(shoppingCart.totalCart());
    
    $('.total-count').html(shoppingCart.totalCount());
  
  }
  
  // Delete item button
  
  $('.show-cart').on("click", ".delete-item", function(event) {
    var name = $(this).attr('data-name')
    shoppingCart.removeItemFromCartAll(name);
    displayCart();
  })
  
  
  // -1
  $('.show-cart').on("click", ".minus-item", function(event) {
    var name = $(this).attr('data-name')
    shoppingCart.removeItemFromCart(name);
    displayCart();
  })
  // +1
  $('.show-cart').on("click", ".plus-item", function(event) {
    var name = $(this).attr('data-name')
    shoppingCart.addItemToCart(name);
   
    displayCart();
  })
  
  // Item count input
  $('.show-cart').on("change", ".item-count", function(event) {
     var name = $(this).attr('data-name')
     var count = Number($(this).val());
    shoppingCart.setCountForItem(name, count);
    displayCart();
  });
  
  displayCart();

  
  // Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation')

    // Loop over them and prevent submission
    Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      }, false)
    })
  }, false)
}())
