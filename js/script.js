$(document).ready(function () {
  $(".card1").mouseover(function () {
    moveProgressBar();

    function moveProgressBar() {
      console.log("moveProgressBar");
      var getPercent = $(".progress-wrap1").data("progress-percent1") / 100;
      var getProgressWrapWidth = $(".progress-wrap1").width();
      var progressTotal = getPercent * getProgressWrapWidth;

      $(".progress-bar1").stop().animate({
        left: progressTotal,
      });
    }
  });

  $(".card1").mouseout(function () {
    moveProgressBar();

    function moveProgressBar() {
      console.log("moveProgressBar");

      $(".progress-bar1").stop().animate({
        left: 0,
      });
    }
  });

  $(".card2").mouseover(function () {
    moveProgressBar();

    function moveProgressBar() {
      console.log("moveProgressBar");
      var getPercent = $(".progress-wrap2").data("progress-percent2") / 100;
      var getProgressWrapWidth = $(".progress-wrap2").width();
      var progressTotal = getPercent * getProgressWrapWidth;

      $(".progress-bar2").stop().animate({
        left: progressTotal,
      });
    }
  });

  $(".card2").mouseout(function () {
    moveProgressBar();

    function moveProgressBar() {
      console.log("moveProgressBar");

      $(".progress-bar2").stop().animate({
        left: 0,
      });
    }
  });

  $(".card3").mouseover(function () {
    moveProgressBar();

    function moveProgressBar() {
      console.log("moveProgressBar");
      var getPercent = $(".progress-wrap3").data("progress-percent3") / 100;
      var getProgressWrapWidth = $(".progress-wrap3").width();
      var progressTotal = getPercent * getProgressWrapWidth;

      $(".progress-bar3").stop().animate({
        left: progressTotal,
      });
    }
  });

  $(".card3").mouseout(function () {
    moveProgressBar();

    function moveProgressBar() {
      console.log("moveProgressBar");

      $(".progress-bar3").stop().animate({
        left: 0,
      });
    }
  });

  $(".card4").mouseover(function () {
    moveProgressBar();

    function moveProgressBar() {
      console.log("moveProgressBar");
      var getPercent = $(".progress-wrap4").data("progress-percent4") / 100;
      var getProgressWrapWidth = $(".progress-wrap4").width();
      var progressTotal = getPercent * getProgressWrapWidth;

      $(".progress-bar4").stop().animate({
        left: progressTotal,
      });
    }
  });

  $(".card4").mouseout(function () {
    moveProgressBar();

    function moveProgressBar() {
      console.log("moveProgressBar");

      $(".progress-bar4").stop().animate({
        left: 0,
      });
    }
  });

  $(".card5").mouseover(function () {
    moveProgressBar();

    function moveProgressBar() {
      console.log("moveProgressBar");
      var getPercent = $(".progress-wrap5").data("progress-percent5") / 100;
      var getProgressWrapWidth = $(".progress-wrap5").width();
      var progressTotal = getPercent * getProgressWrapWidth;

      $(".progress-bar5").stop().animate({
        left: progressTotal,
      });
    }
  });

  $(".card5").mouseout(function () {
    moveProgressBar();

    function moveProgressBar() {
      console.log("moveProgressBar");

      $(".progress-bar5").stop().animate({
        left: 0,
      });
    }
  });

  $(".card6").mouseover(function () {
    moveProgressBar();

    function moveProgressBar() {
      console.log("moveProgressBar");
      var getPercent = $(".progress-wrap6").data("progress-percent6") / 100;
      var getProgressWrapWidth = $(".progress-wrap6").width();
      var progressTotal = getPercent * getProgressWrapWidth;

      $(".progress-bar6").stop().animate({
        left: progressTotal,
      });
    }
  });

  $(".card6").mouseout(function () {
    moveProgressBar();

    function moveProgressBar() {
      console.log("moveProgressBar");

      $(".progress-bar6").stop().animate({
        left: 0,
      });
    }
  });

  $(".accordion_tab").click(function () {
    $(".accordion_tab").each(function () {
      $(this).parent().removeClass("active");
      $(this).removeClass("active");
    });
    $(this).parent().addClass("active");
    $(this).addClass("active");
  });

  particlesJS("particles-js", {
    particles: {
      number: {
        value: 100,
        density: {
          enable: false,
          value_area: 800,
        },
      },
      color: {
        value: "#9a9b9f",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 210,
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 5,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#9a9b9f",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1.5,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: false,
          mode: "repulse",
        },
        onclick: {
          enable: false,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  });

  $(".flexslider").flexslider({
    animation: "slide",
    slideshow: true,
    slideshowSpeed: 5000,
    smoothHeight: true,
  });

  var filterList = {
    init: function () {
      $("#portfoliolist").mixItUp({
        selectors: {
          target: ".portfolio",
          filter: ".filter",
        },
        load: {
          filter: ".design",
        },
      });
    },
  };

  filterList.init();

  $(".fa-whatsapp").mouseover(function () {
    $(".whatsapp").css("visibility", "visible");
  });
  $(".fa-whatsapp").mouseout(function () {
    $(".whatsapp").css("visibility", "hidden");
  });
  $(".fa-telegram-plane").mouseover(function () {
    $(".telegram").css("visibility", "visible");
  });
  $(".fa-telegram-plane").mouseout(function () {
    $(".telegram").css("visibility", "hidden");
  });
  $(".fa-instagram").mouseover(function () {
    $(".instagram").css("visibility", "visible");
  });
  $(".fa-instagram").mouseout(function () {
    $(".instagram").css("visibility", "hidden");
  });
  $(".fa-facebook-f").mouseover(function () {
    $(".facebook").css("visibility", "visible");
  });
  $(".fa-facebook-f").mouseout(function () {
    $(".facebook").css("visibility", "hidden");
  });
  $(".fa-line").mouseover(function () {
    $(".line").css("visibility", "visible");
  });
  $(".fa-line").mouseout(function () {
    $(".line").css("visibility", "hidden");
  });

  var mymap = L.map("mapid").setView([-7.31223, 112.694148], 13);

  L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 20,
      id: "mapbox/streets-v11",
      tileSize: 512,
      zoomOffset: -1,
      accessToken:
        "pk.eyJ1IjoiYWxmaWFubXJmIiwiYSI6ImNrOXQydmNjNTFicHkzcXRyY2ZrbGp0NXMifQ.PL7rFaUzO_MHYy_EAbAhmg",
    }
  ).addTo(mymap);

  var marker = L.marker([-7.31223, 112.694148]).addTo(mymap);

  marker.bindPopup("Wiyung 2/68EE, Surabaya").openPopup();

  var btn = $("#button");

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });

  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "100");
  });
});

function myNavFunc() {
  if (
    navigator.platform.indexOf("iPhone") != -1 ||
    navigator.platform.indexOf("iPod") != -1 ||
    navigator.platform.indexOf("iPad") != -1
  )
    window.open(
      "maps://www.google.com/maps/dir/?api=1&travelmode=driving&layer=traffic&destination=-7.312230, 112.694148"
    );
  else
    window.open(
      "https://www.google.com/maps/dir/?api=1&travelmode=driving&layer=traffic&destination=-7.312230, 112.694148"
    );
}
