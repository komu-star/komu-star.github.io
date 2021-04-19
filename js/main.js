$(function() {
  // ハンバーガーメニュー--------------------------------------------------
  $('#js-hamburger').click(function() {
      $('body').toggleClass('is-drawerActive');

      if ($(this).attr('aria-expanded') == 'false') {
        $(this).attr('aria-expanded', 'true');
        $('#js-global-menu').attr('area-hidden', 'false');
      } else {
        $(this).attr('aria-expanded', 'false');
        $('#js-global-menu').attr('area-hidden', 'true');
      }
  });

  // アコーディオン--------------------------------------------------------
  $('.jsAccordionQuestion').click(function() {
    $(this).next().toggleClass('is-open');
  });

  // スムーススクロール
  $('a[href^="#"]').click(function(){
    var adjust = -94;
    var speed = 400;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top + adjust;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });

  // バリデーション
  const $submitBtn = $('#js-submit');
  $('#form input, #form textarea').on('change', function() {
    if (
      $('#form input[type="text"]').val() !== "" &&
      $('#form input[type="email"]').val() !== "" &&
      $('#form input[type="checkbox"]').val() !== "" &&
      $('#form #privacyCheck').prop('checked') == true
    ) {
      $submitBtn.prop('disabled', false)
    } else {
      $submitBtn.prop('disabled', true)
    }
  });


});

// AOS.js-----------------------------------------------------------------
AOS.init()

// swiper-----------------------------------------------------------------
var swiper = new Swiper('.swiper-container', {
  autoplay: {
    deray: 5000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
    reverseDirection: false
  },
  spaceBetween: 56,
  initialSlide: 1,
  loop: true,
  slidesPerView: 1.5,
  breakpoints: {
    769: {
      slidesPerView: 3.5,
    }
  },
  centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true
  }

});