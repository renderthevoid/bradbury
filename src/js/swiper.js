let swiper = new Swiper(".swiper", {
    loop: true,
    speed: 1000,
    spaceBetween: 30,
    autoplay: {
      delay: 2000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    mousewheel: true,
    keyboard: true,
    // allowTouchMove: false,
});