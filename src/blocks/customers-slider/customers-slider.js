(function(){

  const customers = new Swiper('.customers-slider__inner', {
    speed: 400,
    spaceBetween: 16,
    slidesPerView: 'auto',
    //autoHeight: true,
    grabCursor: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    breakpoints: {
      // 768: {
      //   slidesPerView: 2,
      //   spaceBetween: 16
      // },
      1280: {
       slidesPerView: 6,
       spaceBetween: 16
      }
    }
  });

}());
