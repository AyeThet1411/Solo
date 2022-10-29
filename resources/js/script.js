$(window).on("load", function () {
  $("#status").fadeOut(1000);
  $("#preloader").delay(1100).fadeOut(1000);
});
// Carousel
$(document).ready(function () {
  $("#team-members").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  });
});
//  scroll waypoint progress bar
$(document).ready(function () {
  $("#proress-elements").waypoint(
    function () {
      // each=nothing action like click
      $(".progress-bar").each(function () {
        $(this).animate(
          {
            width: $(this).attr("aria-valuenow") + "%",
          },
          3000
        );
      });
      // work only one time
      this.destroy();
    },
    {
      offset: "bottom-in-view",
    }
  );
});
// Responsive Tab to Services Section 2
$(document).ready(function () {
  $("#services-tab").responsiveTabs({
    animation: "slide",
  });
});

// portfolio
$(window).on("load", function () {
  // init Isotope
  $(".isotope-container").isotope({
    // options
  });
  // filter items on button click
  $("#isotope-filters").on("click", "button", function () {
    var filterValue = $(this).attr("data-filter");
    $(".isotope-container").isotope({ filter: filterValue });

    // find acitve button
    $("#isotope-filters").find(".active").removeClass("active");
    $(this).addClass("active");
  });
});
// Magnifire popup
$(document).ready(function () {
  $("#portfolio-wapper").magnificPopup({
    delegate: "a", // child items selector, by clicking on it popup will open
    type: "image",
    // other options
    gallery: {
      enabled: true,
    },
  });
});
//Testimonial Section
$(document).ready(function () {
  $("#testimonial-slider").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
});
//Stats Counter up
$(document).ready(function () {
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });
});
//Client Carousel
$(document).ready(function () {
  $(".client-list").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
});
//map section
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}
//nav section
$(document).ready(function () {
  $(window).scroll(function () {
    // for show
    if ($(window).scrollTop() > 50) {
      $("nav").addClass("white-nav-top");
      $(".navbar-brand img").attr("src", "./resources/img/logo/logo-dark.png");
    } else {
      //for hide
      $("nav").removeClass("white-nav-top");
      $(".navbar-brand img").attr("src", "./resources/img/logo/logo.png");
    }
  });
});
