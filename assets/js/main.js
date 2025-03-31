$(document).ready(function () {
  $(".teacher-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    arrows: true,
    prevArrow:
      '<button type="button" class="d-flex d-sm-none d-md-none d-lg-flex d-xl-flex align-items-center justify-content-center prev">❮</button>',
    nextArrow:
      '<button type="button" class="d-flex d-sm-none d-md-none d-lg-flex d-xl-flex align-items-center justify-content-center next">❯</button>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  });
  updateButtonStates();
  $(".teacher-slider").on("afterChange", updateButtonStates);
  function updateButtonStates() {
    var slider = $(".teacher-slider");
    var currentSlide = slider.slick("slickCurrentSlide");
    var slideCount = slider.slick("getSlick").slideCount;
    var slidesToShow = slider.slick("slickGetOption", "slidesToShow");
    if (currentSlide === 0) {
      $(".prev").removeClass("active");
    } else {
      $(".prev").addClass("active");
    }
    if (currentSlide >= slideCount - slidesToShow) {
      $(".next").removeClass("active");
    } else {
      $(".next").addClass("active");
    }
    $(".prev, .next").removeClass("slick-disabled");
    if (currentSlide === 0) {
      $(".prev").addClass("slick-disabled");
    }
    if (currentSlide >= slideCount - slidesToShow) {
      $(".next").addClass("slick-disabled");
    }
  }
});

// swiper in student-review

document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    direction: "horizontal",
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },

    on: {
      init: function () {
        this.autoplay.run();
      },
      slideChange: function () {},
    },
  });
});


