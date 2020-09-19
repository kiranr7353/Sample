$('.owl-carousel').owlCarousel({
    loop:true,
    
    nav:true,
    navText:[`<div class='nav-btn prev-slide'><i class="fa fa-angle-left" aria-hidden="true"></i></div>`,`<div class='nav-btn next-slide'><i class="fa fa-angle-right" aria-hidden="true"></i></div>`],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})