var menuIcon=document.querySelector(".menu-item")
var closeNav=document.querySelector(".close-nav")
menuIcon.onclick=function(){
    document.querySelector(".header-center-sub").classList.add("openn")
}
closeNav.onclick=function(){
    document.querySelector(".header-center-sub").classList.remove("openn")
}

var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });