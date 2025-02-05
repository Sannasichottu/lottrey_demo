$(function ($) {
  "use strict";

  jQuery(document).ready(function () {
    // preloader
    $("#preloader")
      .delay(300)
      .animate(
        {
          opacity: "0",
        },
        500,
        function () {
          $("#preloader").css("display", "none");
        }
      );

    // Scroll Top
    var ScrollTop = $(".scrollToTop");
    $(window).on("scroll", function () {
      if ($(this).scrollTop() < 500) {
        ScrollTop.removeClass("active");
      } else {
        ScrollTop.addClass("active");
      }
    });
    $(".scrollToTop").on("click", function () {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        500
      );
      return false;
    });

    // Navbar Dropdown
    var dropdown_menu = $(".header-section .dropdown-menu");
    $(window).resize(function () {
      if ($(window).width() < 992) {
        dropdown_menu.removeClass("show");
      } else {
        dropdown_menu.addClass("show");
      }
    });
    if ($(window).width() < 992) {
      dropdown_menu.removeClass("show");
    } else {
      dropdown_menu.addClass("show");
    }

    // Autocomplete off
    $("input[type=text]").attr("autocomplete", "off");

    // Password Show Hide
    $(".showPass").on("click", function () {
      var passInput = $("#passInput");
      if (passInput.attr("type") === "password") {
        passInput.attr("type", "text");
      } else {
        passInput.attr("type", "password");
      }
    });

    // Sticky Header
    var fixed_top = $(".header-section");
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 50) {
        fixed_top.addClass("animated fadeInDown header-fixed");
      } else {
        fixed_top.removeClass("animated fadeInDown header-fixed");
      }
    });

    // Buy Ticket
    var numbers = $(".numbers li");
    $(numbers).on("click", function () {
      $(this).toggleClass("numActive");
      if ($(numbers).hasClass("numActive")) {
        var numbersVal = $(this).text();
      }
      var numItems = $(".numbers .numActive").length;
      if (numItems === 5) {
        $(numbers).addClass("deactive");
      }
      if (numItems === 1) {
        $(".output-box li span:eq(0)").html(numbersVal);
      } else if (numItems === 2) {
        $(".output-box li span:eq(1)").html(numbersVal);
      } else if (numItems === 3) {
        $(".output-box li span:eq(2)").html(numbersVal);
      } else if (numItems === 4) {
        $(".output-box li span:eq(3)").html(numbersVal);
      } else if (numItems === 5) {
        $(".output-box li span:eq(4)").html(numbersVal);
      }
    });
    var jackpot = $(".jackpot li");
    $(jackpot).on("click", function () {
      $(jackpot).removeClass("jackpotActive");
      $(this).toggleClass("jackpotActive");
      var numbersVal = $(this).text();
      var jackItems = $(".jackpot .jackpotActive").length;
      if (jackItems === 1) {
        $(".output-box li span:eq(5)").html(numbersVal);
      }
    });

    // Login Reg Tab
    $(".reg-btn").on("click", function () {
      $("#regArea-tab").click();
    });
    $(".log-btn").on("click", function () {
      $("#loginArea-tab").click();
    });

    // Modal active
    $(".login").on("click", function () {
      $("#loginArea").addClass("show").addClass("active");
      $("#regArea").removeClass("show").removeClass("active");
      $("#loginArea-tab").addClass("active");
      $("#regArea-tab").removeClass("active");
    });
    $(".reg").on("click", function () {
      $("#regArea").addClass("show").addClass("active");
      $("#loginArea").removeClass("show").removeClass("active");
      $("#loginArea-tab").removeClass("active");
      $("#regArea-tab").addClass("active");
    });

    // Navbar Active Class Only for HTML
    var curUrl = $(location).attr("href");
    var terSegments = curUrl.split("/");
    var desired_segment = terSegments[terSegments.length - 1];
    var removeGarbage = desired_segment.split(".html")[0] + ".html";
    var checkLink = $('.navbar-nav a[href="' + removeGarbage + '"]');
    var targetClass = checkLink.addClass("active");
    targetClass.parents(".sub-navbar").find("a").first().addClass("active");

    // Dropdown Active Remove
    $(".radio-box .single-radio").on("click", function () {
      $(".ticket-box").removeClass("active");
    });
    $(".radio-box .manual").on("click", function () {
      $(".ticket-box").addClass("active");
    });

    // Blog Reply btn
    var replybtn = $(".reply-btn");
    $(replybtn).on("click", function () {
      $(this).next().slideToggle("slow");
    });
  });
});



// popup download app
window.setTimeout(function() {
  $(".alert").fadeTo(500, 0).slideUp(500, function(){
      $(this).remove(); 
  });
}, 4000);

//image slider
jQuery(document).ready(function ($) {

var options = {
  $FillMode: 2,                                      
  $AutoPlay: 1,                                   
  $Idle: 4000,                                     
  $PauseOnHover: 1,                                   

  $ArrowKeyNavigation: 1,   			             
  $SlideEasing: $Jease$.$OutQuint,                 
  $SlideDuration: 800,                             
  $MinDragOffsetToSlide: 20,                      
  $SlideSpacing: 0, 					               
  $UISearchMode: 1,                             
  $PlayOrientation: 1,                                
  $DragOrientation: 1,                               
  $BulletNavigatorOptions: {                         
      $Class: $JssorBulletNavigator$,                
      $ChanceToShow: 2,                              
      $SpacingX: 8,                               
      $Orientation: 1                             
  },

  $ArrowNavigatorOptions: {                         
      $Class: $JssorArrowNavigator$,                
      $ChanceToShow: 2                          
  }
};

var jssor_slider1 = new $JssorSlider$("slider1_container", options);

function ScaleSlider() {
  var bodyWidth = document.body.clientWidth;
  if (bodyWidth)
      jssor_slider1.$ScaleWidth(Math.min(bodyWidth, 1920));
  else
      window.setTimeout(ScaleSlider, 30);
}
ScaleSlider();

$(window).bind("load", ScaleSlider);
$(window).bind("resize", ScaleSlider);
$(window).bind("orientationchange", ScaleSlider);
});

// Digit

function startCountdown(elementId, targetHour) {
  function updateTimer() {
      let now = new Date();
      let targetTime = new Date();
      targetTime.setHours(targetHour, 0, 0, 0);
      if (now > targetTime) {
          targetTime.setDate(targetTime.getDate() + 1);
      }
      let timeLeft = Math.floor((targetTime - now) / 1000);
      let hours = Math.floor(timeLeft / 3600);
      let minutes = Math.floor((timeLeft % 3600) / 60);
      let seconds = timeLeft % 60;
      document.getElementById(elementId).innerHTML = `
          <div class="time-box">${String(hours).padStart(2, '0')}</div>
         <h3>:</h3>
          <div class="time-box">${String(minutes).padStart(2, '0')}</div>
         <h3>:</h3>
          <div class="time-box">${String(seconds).padStart(2, '0')}</div>
      `;
      setTimeout(updateTimer, 1000);
  }
  updateTimer();
}
startCountdown("timer1", 13);
startCountdown("timer2", 15);
startCountdown("timer3", 18);
startCountdown("timer4", 20);


startCountdown("timer1.1", 13);
startCountdown("timer2.1", 15);
startCountdown("timer3.1", 18);
startCountdown("timer4.1", 20);


startCountdown("timer1.2", 13);
startCountdown("timer2.2", 15);
startCountdown("timer3.2", 18);
startCountdown("timer4.2", 20);

startCountdown("timer1.3", 13);
startCountdown("timer2.3", 15);
startCountdown("timer3.3", 18);
startCountdown("timer4.3", 20);