// teacher's team:-----------------
$(document).ready(function () {
  $(".teacher-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    arrows: true,
    prevArrow:
      '<button type="button" class="d-flex d-xs-none d-sm-none d-md-none me-4 d-lg-flex d-xl-flex align-items-center justify-content-center prev slider-action-btn">❮</button>',
    nextArrow:
      '<button type="button" class="d-flex d-xs-none d-sm-none d-md-none ms-5 d-lg-flex d-xl-flex align-items-center justify-content-center next slider-action-btn">❯</button>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2.5,
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
   
  });
});
// faq question:---------
document.querySelectorAll(".faq-item").forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
    const answer = item.querySelector(".faq-answer");
    const button = item.querySelector(".show-faq-ans");

    if (answer.style.display === "block") {
      answer.style.display = "none";
      button.textContent = "+";
    } else {
      answer.style.display = "block";
      button.textContent = "-";
    }
  });
});
// animation
document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll(".animate-on-scroll");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  );
  animatedElements.forEach((element) => {
    observer.observe(element);
  });
});
