$(document).ready(function () {
  $('.teacher-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      arrows: true,
      prevArrow: '<button type="button" class="prev">❮</button>',
      nextArrow: '<button type="button" class="next">❯</button>',
      responsive: [
          {
              breakpoint: 1200,
              settings: {
                  slidesToShow: 3,
              }
          },
          {
              breakpoint: 992,
              settings: {
                  slidesToShow: 2,
              }
          },
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 1,
                  centerMode: true,
                  centerPadding: '0px',
              }
          },
          {
              breakpoint: 576,
              settings: {
                  slidesToShow: 1,
                  centerMode: true,
                  centerPadding: '0px',
              }
          }
      ]
  });
  $('.teacher-slider').on('afterChange init', function(event, slick){
      if(slick.currentSlide > 0) {
          $('.prev').addClass('active');
      } else {
          $('.prev').removeClass('active');
      }
      if(slick.currentSlide < slick.slideCount - slick.options.slidesToShow) {
          $('.next').addClass('active');
      } else {
          $('.next').removeClass('active');
      }
  });
});