let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    
    navbar.classList.add('active');

}

document.querySelector('#nav-close').onclick = () =>{
    
    navbar.classList.remove('active');

}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    
    searchForm.classList.add('active');

}

document.querySelector('#search-close').onclick = () =>{
    
    searchForm.classList.remove('active');

}

window.onscroll = () =>{

    navbar.classList.remove('active');
    
}


// swiper slider work


var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });


//   reviews slider


var swiper = new Swiper(".reviews-slider", {
  spaceBetween: 20,
  grabCursor:true,
  loop:true,
  pagination: {
    el: ".swiper-pagination",
      clickable:true,
  },
  breakpoints: {
      540: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
});
