jQuery(window).on('load', function () {
  jQuery.noConflict();
  jQuery('.loading').fadeOut();
  jQuery.noConflict();
  jQuery('.anima_a').addClass('anima_a_data');
  jQuery('.anima_b').addClass('anima_b_data');
  jQuery('.anima_c').addClass('anima_c_data');
  jQuery('.anima_a_map').addClass('anima_a_map_data');
  jQuery('.anima_a_device').addClass('anima_a_device_data');
  jQuery('.anima_a_logo').addClass('anima_a_logo_data');
  jQuery('.anima_a_point_fukuoka').addClass('anima_a_point_fukuoka_data');
  jQuery('.anima_a_point_sapporo').addClass('anima_a_point_sapporo_data');
  jQuery('.anima_a_point_tokyo').addClass('anima_a_point_tokyo_data');
  jQuery('.anima_a_line_fukuoka').addClass('anima_a_line_fukuoka_data');
  jQuery('.anima_a_line_sapporo').addClass('anima_a_line_sapporo_data');
  jQuery('.anima_a_line_tokyo').addClass('anima_a_line_tokyo_data');
  jQuery('.anima_a_name_fukuoka').addClass('anima_a_name_fukuoka_data');
  jQuery('.anima_a_name_sapporo').addClass('anima_a_name_sapporo_data');
  jQuery('.anima_a_name_tokyo').addClass('anima_a_name_tokyo_data');
  jQuery('.anima_a_bubble_fukuoka').addClass('anima_a_bubble_fukuoka_data');
  jQuery('.anima_a_bubble_sapporo').addClass('anima_a_bubble_sapporo_data');
  jQuery('.anima_a_bubble_tokyo').addClass('anima_a_bubble_tokyo_data');
  jQuery('.anima_a_line_c').addClass('anima_a_line_c_data');
  jQuery('.anima_a_line_b').addClass('anima_a_line_b_data');
  jQuery('.anima_a_line_a').addClass('anima_a_line_a_data');
  jQuery('.anima_a_worker_c').addClass('anima_a_worker_c_data');
  jQuery('.anima_a_worker_b').addClass('anima_a_worker_b_data');
  jQuery('.anima_a_worker_a').addClass('anima_a_worker_a_data');
  jQuery('.anima_b_bubble').addClass('anima_b_bubble_data');
  jQuery('.anima_b_device').addClass('anima_b_device_data');
  jQuery('.anima_b_line_device').addClass('anima_b_line_device_data');
  jQuery('.anima_b_line_woker').addClass('anima_b_line_woker_data');
  jQuery('.anima_b_logo').addClass('anima_b_logo_data');
  jQuery('.anima_b_plus').addClass('anima_b_plus_data');
  jQuery('.anima_b_shop').addClass('anima_b_shop_data');
  jQuery('.anima_b_staff').addClass('anima_b_staff_data');
  jQuery('.anima_b_worker_bubble').addClass('anima_b_worker_bubble_data');
  jQuery('.anima_b_worker').addClass('anima_b_worker_data');
  jQuery('.anima_c_bubble_chara').addClass('anima_c_bubble_chara_data');
  jQuery('.anima_c_bubble_face').addClass('anima_c_bubble_face_data');
  jQuery('.anima_c_bubble_robot').addClass('anima_c_bubble_robot_data');
  jQuery('.anima_c_device').addClass('anima_c_device_data');
  jQuery('.anima_c_line_chara').addClass('anima_c_line_chara_data');
  jQuery('.anima_c_line_face').addClass('anima_c_line_face_data');
  jQuery('.anima_c_line_robot').addClass('anima_c_line_robot_data');
  jQuery('.anima_c_logo').addClass('anima_c_logo_data');
  jQuery('.anima_c_name_chara').addClass('anima_c_name_chara_data');
  jQuery('.anima_c_name_face').addClass('anima_c_name_face_data');
  jQuery('.anima_c_name_robot').addClass('anima_c_name_robot_data');
  jQuery('.anima_c_line_worker').addClass('anima_c_line_worker_data');
  jQuery('.anima_c_woker').addClass('anima_c_woker_data');
  jQuery('.span_anima_1').addClass('span_anima_1_data');
  jQuery('.span_anima_2').addClass('span_anima_2_data');
  jQuery('.span_anima_3').addClass('span_anima_3_data');
  jQuery('.underline_anima_1').addClass('underline_anima_1_data');
  jQuery('.underline_anima_2').addClass('underline_anima_2_data');
  jQuery('.underline_anima_3').addClass('underline_anima_3_data');
});
var userAgent = window.navigator.userAgent.toLowerCase();
if (userAgent.indexOf('msie') != -1 || userAgent.indexOf('trident') != -1) {
  document.addEventListener('DOMContentLoaded', function () {
    let elements_display_none_item = document.getElementsByClassName('display_none_item');
    Array.prototype.forEach.call(elements_display_none_item, function (element) {
      element.classList.add('display_none');
    });
    let elements = document.getElementsByClassName('txt_anime_none');
    Array.prototype.forEach.call(elements, function (element) {
      element.classList.remove('passing-txt');
    });
    let elements_fadein = document.getElementsByClassName('fadein_none');
    Array.prototype.forEach.call(elements_fadein, function (element) {
      element.classList.remove('fadein');
    });
    let elements_fadedown = document.getElementsByClassName('fadedown_none');
    Array.prototype.forEach.call(elements_fadedown, function (element) {
      element.classList.remove('fadedown');
    });
    let elements_fadefast = document.getElementsByClassName('fadefast_none');
    Array.prototype.forEach.call(elements_fadefast, function (element) {
      element.classList.remove('fadefast');
    });
    let elements_about_illust_active = document.getElementsByClassName('about_illust_active');
    Array.prototype.forEach.call(elements_about_illust_active, function (element) {
      element.classList.add('active');
    });
    let elements_block_item = document.getElementsByClassName('block_item');
    Array.prototype.forEach.call(elements_block_item, function (element) {
      element.classList.add('display_block');
    });
    let elements_pd = document.getElementsByClassName('pd_24');
    Array.prototype.forEach.call(elements_pd, function (element) {
      element.classList.add('add_pd_24');
    });
    let elements_bg_gray = document.getElementsByClassName('bg_gray_item');
    Array.prototype.forEach.call(elements_bg_gray, function (element) {
      element.classList.add('bg_gray');
    });
  });
}
jQuery(document).ready(function ($) {
  jQuery.noConflict();
  var hSize = $(window).height();
  var wSize = $(window).width();
  $('.header_top').height(hSize);
  if (wSize > 480 && hSize > wSize) {
    $('.header_content').addClass('header_content_ipad');
    $('.headline_header_title').addClass('headline_header_title_ipad');
    $('.header_anime').addClass('header_anime_ipad');
  }
  if (wSize > (hSize * 1.7)) {
    $('.header_anime').addClass('header_anime_width');
    $('.header_content').addClass('header_content_width');
  }
  if (wSize > (hSize * 2)) {
    $('.header_anime').addClass('header_anime_width_25');
    $('.header_content').addClass('header_content_width_25');
  }
});
jQuery(function ($) {
  jQuery.noConflict();
  $('.nav_toggle').click(function () {
    $('header').toggleClass('open');
  });
  var $win = $(window),
    $header = $('header'),
    headerHeight = $header.outerHeight(),
    startPos = 0;
  $win.on('load scroll', function () {
    var value = $(this).scrollTop();
    if (value > startPos && value > headerHeight) {
      $header.css('top', '-' + headerHeight + 'px');
    } else {
      $header.css('top', '0');
      $header.addClass('header_shadow');
    }
    if (value < 100) {
      $header.removeClass('header_shadow');
    }
    startPos = value;
  });
  $(window).scroll(function () {
    $('.fadein').each(function () {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 40) {
        $(this).addClass('active');
      }
    });
  });
  $(window).scroll(function () {
    $('.fadedown').each(function () {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 40) {
        $(this).addClass('active');
      }
    });
  });
  $(window).scroll(function () {
    $('.fadefast').each(function () {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 40) {
        $(this).addClass('active');
      }
    });
  });
  $(window).scroll(function () {
    $('.fadein').each(function () {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 40) {
        $(this).addClass('active');
      }
    });
  });
  $(window).scroll(function () {
    $(".passing").each(function () {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 40) {
        $(this).addClass('move');
      }
    });
  });
  $('.utilize li .toggle').on('click', function () {
    $(this).next().slideToggle();
    // activeが存在する場合
    if ($(this).children('.utilize_icon').hasClass('active')) {
      // activeを削除
      $(this).children('.utilize_icon').removeClass('active');
    } else {
      // activeを追加
      $(this).children('.utilize_icon').addClass('active');
    }
  });
  $('.delay_left')
    .css({
      left: '40px',
      opacity: 0
    })
  $(window).scroll(function () {
    $('.delay_left').each(function (i) {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight) {
        $(this).delay(10 * i)
          .animate({
            left: '0',
            opacity: 1
          }, {
            duration: 700,
            easing: 'swing',
          });
      }
    });
  });
  $(window).scroll(function () {
    $(".passing-box_liner_txt").each(function (i) {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight) {
        $(this).delay(50 * i).queue(function () {
          $(this).addClass('move');
        })
      }
    });
  });
  $(window).scroll(function () {
    $(".passing-box_liner_header").each(function (i) {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight) {
        $(this).delay(200 * i).queue(function () {
          $(this).addClass('move');
        })
      }
    });
  });
  //要素の取得とスピードの設定
  var box = $('.colorbox'),
    speed = 700;
  //.colorboxの付いた全ての要素に対して下記の処理を行う
  box.each(function () {
    $(this).append('<div class="color"></div>')
    var color = $(this).find($('.color')),
      image = $(this).find('img');
    var counter = 0;
    image.css('opacity', '0');
    color.css('width', '0%');
    //inviewを使って背景色が画面に現れたら処理をする
    color.on('inview', function () {
      if (counter == 0) {
        $(this).delay(200).animate({
          'width': '100%'
        }, speed, function () {
          image.css('opacity', '1');
          $(this).css({
            'left': '0',
            'right': 'auto'
          });
          $(this).animate({
            'width': '0%'
          }, speed);
        })
        counter = 1;
      }
    });
  });
  $(window).scroll(function () {
    $(".about_illust_a").each(function () {
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight / 5) {
        $(".about_illust_a_2").addClass('active');
        $(".about_illust_a_3").addClass('active');
        $(".about_illust_a_4").addClass('active');
      }
    });
    $(".about_illust_b").each(function () {
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight / 5) {
        $(".about_illust_ok_illust").addClass('active');
        $(".about_illust_thankyou_illust").addClass('active');
        $(".about_illust_welocme_llust").addClass('active');
        $(".about_illust_hello_llust").addClass('active');
        $(".about_illust_ok_wave").addClass('active');
        $(".about_illust_thankyou_wave").addClass('active');
        $(".about_illust_welcome_wave").addClass('active');
        $(".about_illust_hello_wave").addClass('active');
        $(".about_illust_ok_voice").addClass('active');
        $(".about_illust_thankyou_voice").addClass('active');
        $(".about_illust_welcome_voice").addClass('active');
        $(".about_illust_hello_voice").addClass('active');
      }
    });
    $(".about_illust_c").each(function () {
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight / 5) {
        $(".about_illust_robot").addClass('active');
        $(".about_illust_character").addClass('active');
        $(".about_illust_face").addClass('active');
        $(".about_illust_robot_voice").addClass('active');
        $(".about_illust_character_voice").addClass('active');
        $(".about_illust_face_voice").addClass('active');
      }
    });
  });
  $(window).on('load', function () {
    $('.header_anime_bg_white').addClass('header_anime_bg_white_fade');
    setTimeout(function () {
      $('.header_anime_a_border').removeClass('header_anime_a_border_fade');
    }, 800);
    setTimeout(function () {
      $('.header_anime_a_model').removeClass('header_anime_a_model_fade');
    }, 1400);
    setTimeout(function () {
      $(".passing-box_liner_header_anime_a").each(function (i) {
        $(this).delay(200 * i).queue(function () {
          $(this).addClass('move');
        })
      });
    }, 1400);
    setTimeout(function () {
      $('.header_anime_a_hello').removeClass('header_anime_a_hello_fade');
    }, 1800);
    setTimeout(function () {
      $('.header_anime_a_hello').addClass('header_anime_ballon');
    }, 2600);
    setTimeout(function () {
      $('.header_anime_a_border').addClass('header_anime_a_border_fade');
    }, 5100);
    setTimeout(function () {
      $('.header_anime_a_model').addClass('header_anime_a_model_fade');
    }, 5100);
    setTimeout(function () {
      $('.header_anime_a_hello').addClass('header_anime_a_hello_fade');
    }, 5100);
    setTimeout(function () {
      $('.passing-box_liner_header_anime_a').hide();
    }, 5100);
    setTimeout(function () {
      $('.header_anime_bg_white_2').removeClass('header_anime_bg_white_2_fade');
    }, 5500);
    setTimeout(function () {
      $('.header_anime_bg_white_2').addClass('header_anime_bg_white_2_fade_out');
    }, 5980);
    setTimeout(function () {
      $('.header_anime_b_mac').removeClass('header_anime_b_mac_fade');
    }, 6600);
    setTimeout(function () {
      $('.header_anime_b_white').removeClass('header_anime_b_white_fade');
    }, 7100);
    setTimeout(function () {
      $('.header_anime_b_welcome').removeClass('header_anime_b_welcome_fade');
    }, 7500);
    setTimeout(function () {
      $('.header_anime_b_ruralogo').removeClass('header_anime_b_ruralogo_fade');
    }, 7500);
    setTimeout(function () {
      $('.header_anime_b_worker').removeClass('header_anime_b_worker_fade');
    }, 7500);
    setTimeout(function () {
      $(".passing-box_liner_header_anime_b").each(function (i) {
        $(this).delay(200 * i).queue(function () {
          $(this).addClass('move');
        })
      });
    }, 7500);
    setTimeout(function () {
      $('.header_anime_b_tleapen').removeClass('header_anime_b_tleapen_fade');
    }, 7900);
    setTimeout(function () {
      $('.header_anime_b_hello').removeClass('header_anime_b_hello_fade');
    }, 8500);
    setTimeout(function () {
      $('.header_anime_b_hello').addClass('header_anime_ballon');
    }, 9100);
    setTimeout(function () {
      $('.to_scroll').removeClass('to_scroll_fade');
    }, 10100);
  });
  $('a[href^="#"]').click(function () {
    var speed = 600; // ミリ秒で記述
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({
      scrollTop: position
    }, speed, 'swing');
    return false;
  });
  $('.voice_unchanged_btn_pause').hide();
  $('.voice_unchanged_btn_repeat').hide();
  $('.voice_changed_btn_pause').hide();
  $('.voice_changed_btn_repeat').hide();
  var $audio_unchanged = $('#voice_unchanged').get(0);
  $audio_unchanged.volume = 0.5;
  $('.voice_unchanged_btn_play').on('click', function () {
    $audio_unchanged.play();
    $('.voice_unchanged_btn_play').hide();
    $('.voice_unchanged_btn_pause').show();
    $('.changed_img').addClass('voice_change_box_img_overlay');
    $('.changed_box').addClass('voice_change_box_gray');
    $('.unchanged_img').hideClass('voice_change_box_img_overlay');
    $('.unchanged_box').hideClass('voice_change_box_gray');
  });
  $('.voice_unchanged_btn_pause').on('click', function () {
    $audio_unchanged.play();
    $audio_unchanged.pause();
    $('.voice_unchanged_btn_play').show();
    $('.voice_unchanged_btn_pause').hide();
    $('.changed_img').removeClass('voice_change_box_img_overlay');
    $('.changed_box').removeClass('voice_change_box_gray');
  });
  $audio_unchanged.addEventListener("ended", () => {
    $audio_unchanged.currentTime = 0;
    $('.voice_unchanged_btn_play').hide();
    $('.voice_unchanged_btn_pause').hide();
    $('.voice_unchanged_btn_repeat').show();
    $('.voice_unchanged_btn_pause').hide();
    $('.changed_img').removeClass('voice_change_box_img_overlay');
    $('.changed_box').removeClass('voice_change_box_gray');
  });
  $('.voice_unchanged_btn_repeat').on('click', function () {
    $audio_unchanged.play();
    $('.voice_unchanged_btn_play').hide();
    $('.voice_unchanged_btn_repeat').hide();
    $('.voice_unchanged_btn_pause').show();
    $('.changed_img').addClass('voice_change_box_img_overlay');
    $('.changed_box').addClass('voice_change_box_gray');
  });
  var $audio_changed = $('#voice_changed').get(0);
  $audio_changed.volume = 0.5;
  $('.voice_changed_btn_play').on('click', function () {
    $audio_changed.play();
    $('.voice_changed_btn_play').hide();
    $('.voice_changed_btn_pause').show();
    $('.unchanged_img').addClass('voice_change_box_img_overlay');
    $('.unchanged_box').addClass('voice_change_box_gray');
    $('.changed_img').removeClass('voice_change_box_img_overlay');
    $('.changed_box').removeClass('voice_change_box_gray');
  });
  $('.voice_changed_btn_pause').on('click', function () {
    $audio_changed.play();
    $audio_changed.pause();
    $('.voice_changed_btn_play').show();
    $('.voice_changed_btn_pause').hide();
    $('.unchanged_img').removeClass('voice_change_box_img_overlay');
    $('.unchanged_box').removeClass('voice_change_box_gray');
  });
  $audio_changed.addEventListener("ended", () => {
    $audio_changed.currentTime = 0;
    $('.voice_changed_btn_play').hide();
    $('.voice_changed_btn_pause').hide();
    $('.voice_changed_btn_repeat').show();
    $('.unchanged_img').removeClass('voice_change_box_img_overlay');
    $('.unchanged_box').removeClass('voice_change_box_gray');
  });
  $('.voice_changed_btn_repeat').on('click', function () {
    $audio_changed.play();
    $('.voice_changed_btn_play').hide();
    $('.voice_changed_btn_repeat').hide();
    $('.voice_changed_btn_pause').show();
    $('.unchanged_img').addClass('voice_change_box_img_overlay');
    $('.unchanged_box').addClass('voice_change_box_gray');
  });
  var startPos = 0;
  $(window).scroll(function () {
    var currentPos = $(this).scrollTop();
    if ($(window).scrollTop() < 600) {
      $(".backtotop").css("bottom", "-" + 100 + "px");
    } else {
      $(".backtotop").css("bottom", 16 + "px");
    }
    startPos = currentPos;
  });
  $('.backtotop_btn').click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500);
    return false;
  });
});
