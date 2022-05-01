window.onload = function(){
    AOS.init();
    var swiper = new Swiper("#EtSwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          scrollbar: {
            el: ".swiper-scrollbar",
            hide: true,
          },

      });
};