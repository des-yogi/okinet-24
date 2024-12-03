(function(){
  const stickyMain = document.querySelector('.page-header__main--sticky');
  const stickyTop = document.querySelector('.page-header__top--sticky');
  const main = document.querySelector('.main');

  function throttle(fn, delay) {
    let last = undefined;
    let timer = undefined;
    return function () {
      const now = +new Date();
      if (last && now < last + delay) {
        clearTimeout(timer);
        timer = setTimeout(function () {
          last = now;
          fn();
        }, delay);
      } else {
        last = now;
        fn();
      }
    };
  }

  function onScroll() {
    if (window.matchMedia('(max-width: 1279px)').matches){
      //do functionality on screens bigger than 1366px
      if (window.pageYOffset >= 52) {
        stickyMain.classList.add('is-active');
        main.style = 'margin-top: 120px;'
      } else {
        stickyMain.classList.remove('is-active');
        main.style = 'margin-top: none;'
      }

    } else {

      if (window.pageYOffset) {
        stickyTop.classList.add('is-active');
        stickyMain.style = 'margin-top: 52px;'
      } else {
        stickyTop.classList.remove('is-active');
        stickyMain.style = 'margin-top: none;'
      }
    }
  }


  window.addEventListener('scroll', throttle(onScroll, 25), {passive: true});
}());

