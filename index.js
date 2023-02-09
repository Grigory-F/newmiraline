let inputRange = document.querySelector(".input-range");
let inputWithRange = document.querySelector(".input-with-range");

if (inputRange && inputWithRange) {
  inputRange.addEventListener("input", (event) => {
    inputWithRange.value = event.target.value;
  });
  inputWithRange.addEventListener("input", (event) => {
    inputRange.value = event.target.value;
  });
}

$(".articles-slider").slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  speed: 500,
  arrows: true,
  prevArrow: '<a href="#" class="slick-prev"><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 7.23242H4.33L9.92 1.64242L8.5 0.232422L0.5 8.23242L8.5 16.2324L9.91 14.8224L4.33 9.23242H16.5V7.23242Z" fill="white"/></svg></a>',
  nextArrow: '<a href="#" class="slick-next"><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 0.232422L7.09 1.64242L12.67 7.23242H0.5V9.23242H12.67L7.09 14.8224L8.5 16.2324L16.5 8.23242L8.5 0.232422Z" fill="white"/></svg></a>',
  dots: false,
  responsive: [
    {
      breakpoint: 1230,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});


$(".qa-block__container").click(function (e) {
  $(this).find('.qa-block__inner-answer').slideToggle(300);
  $(this).toggleClass("qa-block__container--active");
});
