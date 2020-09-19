/* =================================
------------------------------------
	Divisima | eCommerce Template
	Version: 1.0
 ------------------------------------
 ====================================*/
 window.addEventListener('scroll',function(){
	var scroll=document.querySelector('.scrollTop');
	scroll.classList.toggle("active",window.scrollY>500);
})
function scrollToTop(){
	window.scrollTo({
		top:0
	})
}






 (function($) {


  

	// * 1. Proloder */
    $(window).on('load', function () {
      $('#preloader-active').delay(650).fadeOut('slow');
      $('body').delay(650).css({
        'overflow': 'visible'
      });
    });

	$('.main-menu').slicknav({
		prependTo:'.main-navbar .container',
		closedSymbol: '<i class="flaticon-right-arrow"></i>',
		openedSymbol: '<i class="flaticon-down-arrow"></i>'
	});



	/*------------------
		Background Set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});

 /*------------------
         Accordions
     --------------------*/
     $('.panel-link').on('click', function (e) {
      $('.panel-link').removeClass('active');
      var $this = $(this);
      if (!$this.hasClass('active')) {
          $this.addClass('active');
      }
      e.preventDefault();
  });

  /*------------------
         Single Product
     --------------------*/
     $('.product-thumbs-track > .pt').on('click', function(){
      $('.product-thumbs-track .pt').removeClass('active');
      $(this).addClass('active');
      var imgurl = $(this).data('imgbigurl');
      var bigImg = $('.product-big-img').attr('src');
      if(imgurl != bigImg) {
          $('.product-big-img').attr({src: imgurl});
          $('.zoomImg').attr({src: imgurl});
      }
  });


  $('.product-pic-zoom').zoom();


  function initTabs()
  {
      if($('.tabs').length)
      {
          var tabs = $('.tabs li');
          var tabContainers = $('.tab_container');

          tabs.each(function()
          {
              var tab = $(this);
              var tab_id = tab.data('active-tab');

              tab.on('click', function()
              {
                  if(!tab.hasClass('active'))
                  {
                      tabs.removeClass('active');
                      tabContainers.removeClass('active');
                      tab.addClass('active');
                      $('#' + tab_id).addClass('active');
                  }
              });
          });
      }
  }
  initTabs()

    
	



})(jQuery);







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

     











      output += `<tr>
       
        <td class="product-name"> <h2 class="h5 text-black">  ${cartArray[i].name} </h2></td> 
        
        <td class="product-price"> ${cartArray[i].price} </td>
        
        <td>
        <div class="input-group mb-3">
        <div class="input-group-prepend">
        <button class='minus-item input-group-addon btn btn-outline-primary' data-name="${cartArray[i].name}">-</button>
        </div>
        <input type='number' class='item-count form-control text-center' data-name="${cartArray[i].name}" value="${cartArray[i].count}" aria-label="Example text with button addon" aria-describedby="button-addon1">
        <div class="input-group-append">
        <button class='plus-item btn btn-outline-primary input-group-addon' data-name="${cartArray[i].name}">+</button>
        </div>
        </div>
        </td>
        
        <td class="product-total">  ${cartArray[i].total}  </td> 
        
        <td><button class='delete-item btn btn-danger btn-sm' data-name="${cartArray[i].name}">X</button>
        
        </td>
         
        
        </tr>
        
        ;`
       }

    if(cart.length>0){
    $('.show-cart').html(output);
    }else{
      
      $('.show-cart').text('no cart items')
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
  