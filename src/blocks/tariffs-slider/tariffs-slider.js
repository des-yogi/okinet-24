(function(){
  const home = new Swiper('.tariffs-slider__home', {
    speed: 400,
    spaceBetween: 16,
    slidesPerView: 'auto',
    autoHeight: true,
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
      1280: {
        slidesPerView: 4,
        spaceBetween: 16
      }
    }
  });

  const privat = new Swiper('.tariffs-slider__privat', {
    speed: 400,
    spaceBetween: 16,
    slidesPerView: 'auto',
    autoHeight: true,
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
      1280: {
        slidesPerView: 4,
        spaceBetween: 16
      }
    }
  });

  const business = new Swiper('.tariffs-slider__business', {
    speed: 400,
    spaceBetween: 16,
    slidesPerView: 'auto',
    autoHeight: true,
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
      1280: {
        slidesPerView: 4,
        spaceBetween: 16
      }
    }
  });
}());
