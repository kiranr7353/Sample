/* =================================
------------------------------------
	Divisima | eCommerce Template
	Version: 1.0
 ------------------------------------
 ====================================*/


 'use strict';


 $(window).on('load', function() {
     /*------------------
         Preloder
     --------------------*/
     $(".loader").fadeOut();
     $("#preloder").delay(400).fadeOut("slow");
 
 });
 


 var header = $('.navbar');
 var topNav = $('.top_nav')
 var hamburger = $('.hamburger_container');
 var menu = $('.hamburger_menu');
 var menuActive = false;
 var hamburgerClose = $('.hamburger_close');
 var fsOverlay = $('.fs_menu_overlay');

 setHeader();

 $(window).on('resize', function()
 {
     setHeader();
 });

 $(document).on('scroll', function()
 {
     setHeader();
 });

 initMenu();
//  initThumbnail();
//  initQuantity();
//  initStarRating();
//  initFavorite();
//  initTabs();

 /* 

 2. Set Header

 */

 function setHeader()
 {
     if(window.innerWidth < 992)
     {
         if($(window).scrollTop() > 100)
         {
             header.css({'top':"0"});
         }
         else
         {
             header.css({'top':"0"});
         }
     }
     else
     {
         if($(window).scrollTop() > 100)
         {
             header.css({'top':"-0px"});
         }
         else
         {
             header.css({'top':"0"});
         }
     }
     if(window.innerWidth > 991 && menuActive)
     {
         closeMenu();
     }
 }

 /* 

 3. Init Menu

 */

 function initMenu()
 {
     if(hamburger.length)
     {
         hamburger.on('click', function()
         {
             if(!menuActive)
             {
                 openMenu();
             }
         });
     }

     if(fsOverlay.length)
     {
         fsOverlay.on('click', function()
         {
             if(menuActive)
             {
                 closeMenu();
             }
         });
     }

     if(hamburgerClose.length)
     {
         hamburgerClose.on('click', function()
         {
             if(menuActive)
             {
                 closeMenu();
             }
         });
     }

     if($('.menu_item').length)
     {
         var items = document.getElementsByClassName('menu_item');
         var i;

         for(i = 0; i < items.length; i++)
         {
             if(items[i].classList.contains("has-children"))
             {
                 items[i].onclick = function()
                 {
                     this.classList.toggle("active");
                     var panel = this.children[1];
                     if(panel.style.maxHeight)
                     {
                         panel.style.maxHeight = null;
                     }
                     else
                     {
                         panel.style.maxHeight = panel.scrollHeight + "px";
                     }
                 }
             }	
         }
     }
 }

 function openMenu()
 {
     menu.addClass('active');
     // menu.css('right', "0");
     fsOverlay.css('pointer-events', "auto");
     menuActive = true;
 }

 function closeMenu()
 {
     menu.removeClass('active');
     fsOverlay.css('pointer-events', "none");
     menuActive = false;
 }



 
 
 
 (function($) {
     /*------------------
         Navigation
     --------------------*/
     $('.main-menu').slicknav({
         prependTo:'.main-navbar .container',
         closedSymbol: '<i class="flaticon-right-arrow"></i>',
         openedSymbol: '<i class="flaticon-down-arrow"></i>'
     });
 
 
     /*------------------
         ScrollBar
     --------------------*/
     $(".cart-table-warp, .product-thumbs").niceScroll({
         cursorborder:"",
         cursorcolor:"#afafaf",
         boxzoom:false
     });
 
 
     /*------------------
         Category menu
     --------------------*/
     $('.category-menu > li').hover( function(e) {
         $(this).addClass('active');
         e.preventDefault();
     });
     $('.category-menu').mouseleave( function(e) {
         $('.category-menu li').removeClass('active');
         e.preventDefault();
     });
 
 
     /*------------------
         Background Set
     --------------------*/
     $('.set-bg').each(function() {
         var bg = $(this).data('setbg');
         $(this).css('background-image', 'url(' + bg + ')');
     });
 
 
 
     /*------------------
         Hero Slider
     --------------------*/
     var hero_s = $(".hero-slider");
     hero_s.owlCarousel({
         loop: true,
         margin: 0,
         nav: true,
         items: 1,
         dots: true,
         animateOut: 'fadeOut',
         animateIn: 'fadeIn',
         navText: ['<i class="flaticon-left-arrow-1"></i>', '<i class="flaticon-right-arrow-1"></i>'],
         smartSpeed: 1200,
         autoHeight: false,
         autoplay: true,
         onInitialized: function() {
             var a = this.items().length;
             $("#snh-1").html("<span>1</span><span>" + a + "</span>");
         }
     }).on("changed.owl.carousel", function(a) {
         var b = --a.item.index, a = a.item.count;
         $("#snh-1").html("<span> "+ (1 > b ? b + a : b > a ? b - a : b) + "</span><span>" + a + "</span>");
 
     });
 
     hero_s.append('<div class="slider-nav-warp"><div class="slider-nav"></div></div>');
     $(".hero-slider .owl-nav, .hero-slider .owl-dots").appendTo('.slider-nav');
 
 
 
     /*------------------
         Brands Slider
     --------------------*/
     $('.product-slider').owlCarousel({
         loop: true,
         nav: true,
         dots: false,
         margin : 0,
         autoplay: true,
         navText: ['<i class="fa fa-chevron-left" aria-hidden="true" style="font-size:60px;color:black"></i>', '<i class="fa fa-chevron-right" aria-hidden="true" style="font-size:60px;color:black"></i>'],
         responsive : {
             0 : {
                 items: 1,
             },
             480 : {
                 items: 2,
             },
             768 : {
                 items: 3,
             },
             1200 : {
                 items: 5,
             }
         }
     });
 
 
     /*------------------
         Popular Services
     --------------------*/
     $('.popular-services-slider').owlCarousel({
         loop: true,
         dots: false,
         margin : 40,
         autoplay: true,
         nav:true,
         navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
         responsive : {
             0 : {
                 items: 1,
             },
             768 : {
                 items: 2,
             },
             991: {
                 items: 3
             }
         }
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
 
 
     /*-------------------
         Range Slider
     --------------------- */
     var rangeSlider = $(".price-range"),
         minamount = $("#minamount"),
         maxamount = $("#maxamount"),
         minPrice = rangeSlider.data('min'),
         maxPrice = rangeSlider.data('max');
     rangeSlider.slider({
         range: true,
         min: minPrice,
         max: maxPrice,
         values: [minPrice, maxPrice],
         slide: function (event, ui) {
             minamount.val('$' + ui.values[0]);
             maxamount.val('$' + ui.values[1]);
         }
     });
     minamount.val('$' + rangeSlider.slider("values", 0));
     maxamount.val('$' + rangeSlider.slider("values", 1));
 
 
     /*-------------------
         Quantity change
     --------------------- */
     var proQty = $('.pro-qty');
     proQty.prepend('<span class="dec qtybtn">-</span>');
     proQty.append('<span class="inc qtybtn">+</span>');
     proQty.on('click', '.qtybtn', function () {
         var $button = $(this);
         var oldValue = $button.parent().find('input').val();
         if ($button.hasClass('inc')) {
             var newVal = parseFloat(oldValue) + 1;
         } else {
             // Don't allow decrementing below zero
             if (oldValue > 0) {
                 var newVal = parseFloat(oldValue) - 1;
             } else {
                 newVal = 0;
             }
         }
         $button.parent().find('input').val(newVal);
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