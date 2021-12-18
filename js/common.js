jQuery(document).ready(function ($) {
    $(".main-banner__input").focus(function () {
        $(this).parent().addClass("is_focused");
    }).blur(function () {
        if ($(this).val().length == 0) {
            $(this).parent().removeClass("is_focused");
        }
    });
});

$('.js_btn').on('click', function () {
    $('.header__menu').toggleClass('js_open');
});

$('.js_btn-menu').on('click', function () {
    $('.header-mob').toggleClass('js_open-menu');
    $('html').toggleClass('hidden');
});

const menuBtn = $('.js_btn-menu'),
    menu = $('.header-mob');

$(document).click(function (e) {
    if (!menuBtn.is(e.target) && !menu.is(e.target) && menu.has(e.target).length === 0) {
        menu.removeClass('js_open-menu');
        $('html').removeClass('hidden');
        $('.header__menu').removeClass('js_open');
    };
});

$(".js-form").submit(function (e) {
    e.preventDefault();
    let form_data = $(this).serializeArray();
    $.ajax({
        type: "POST",
        url: "../../mail.php",
        data: form_data,
    });
    return false;
});

$('.footer__input').on('input', function () {
    $(this).val($(this).val().replace(/[A-Za-zА-Яа-яЁё]/, ''))
});

$('.filter_btn').on('click', function () {
    $(this).next('.filter_list').slideToggle();
});
$('.filter_btn').on('click', function () {
    $(this).on(".filter_btn").toggleClass("filter_title");
});

new Swiper('.catalog-slider__container', {
    pagination: {
        el: '.catalog-slider__pagination',
        clickable: true,
    },
    spaceBetween: 15,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
    },
});

$('.jc_btn-sections').on('click', function () {
    $('.filter').toggleClass('js_open-menu');
    $('html').toggleClass('hidden-sections');
});

$('.filter__close').on('click', function () {
    $('.filter').removeClass('js_open-menu');
    $('.mob-filter').removeClass('js_open-menu');
    $('html').removeClass('hidden-sections');
    $('html').removeClass('hidden-cheeses');
});

const menuBtn1 = $('.jc_btn-sections'),
    menu1 = $('.filter');
$(document).click(function (e) {
    if (!menuBtn1.is(e.target) && !menu1.is(e.target) && menu1.has(e.target).length === 0) {
        menu1.removeClass('js_open-menu');
        $('html').removeClass('hidden-sections');
        $('.filter').removeClass('js_open');
    };
});

$('.jc_btn-sorting').on('click', function () {
    $('.mob-filter').toggleClass('js_open-menu');
    $('html').toggleClass('hidden-cheeses');
});

const menuBtn2 = $('.jc_btn-sorting'),
    menu2 = $('.mob-filter');
$(document).click(function (e) {
    if (!menuBtn2.is(e.target) && !menu2.is(e.target) && menu2.has(e.target).length === 0) {
        menu2.removeClass('js_open-menu');
        $('html').removeClass('hidden-cheeses');
        $('.mob-filter').removeClass('js_open');
    };
});

$('.product-card__icon').on('click', function () {
    $(this).toggleClass('active');
});

$('.product-card__basket').on('click', function () {
    $(this).toggleClass('active');
});
$('.js-active').on('click', function () {
    $(this).toggleClass('icon-active');
});

var swiper = new Swiper(".swiper-thumb", {
    spaceBetween: 5,
    slidesPerView: 3,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".swiper-main", {
    slidesPerView: 1,
    spaceBetween: 10,

    thumbs: {
        swiper: swiper,
    },
    pagination: {
        el: '.card-info__pagination',
        clickable: true,
    },
});

$('.card-info__filter-box').on('click', function () {
    $(this).toggleClass('active');
});

$('.text-hide').on('click', function () {
    $('.card-info__description-text').toggleClass('js-text');
});

$('.text-hide').on('click', function () {
    $('.card-info__description-span').toggleClass('js-active');
});

$('.scroll-card__btn').on('click', function () {
    $(this).toggleClass('active');
});

$('.js-photo').magnificPopup({
    type: 'image',
    gallery: {
        enabled: true
    },
    zoom: {
        enabled: true,
        duration: 500,
        easing: 'ease-in-out',
    },
    navigateByImgClick: true,
});

let prev = null;
document.body.addEventListener("click", (e) => {
    let el = e.target;
    if (!el.classList.contains("js-more")) return false;
    let other = el.parentElement.querySelector(".card-reviews__other, .orders__all-other");
    if (prev === other) {
        other.style.display = "none";
        prev = null;
        return false;
    }

    if (prev) prev.style.display = "none";
    other.style.display = "block";
    prev = el.parentElement.querySelector(".card-reviews__other, .orders__all-other");

});

$('.more-text').on('click', function () {
    $('.card-reviews__text').toggleClass('all-text');
});

new Swiper('.similar-mobile', {
    pagination: {
        el: '.similar-products__pagination',
        clickable: true,
    },
    slidesPerView: 1,
    spaceBetween: 15,
    centeredSlides: true,
});

$('#InCheck-1').click(function () {
    if ($(this).is(':checked')) {
        $('#controls input:checkbox').prop('checked', true);
    } else {
        $('#controls input:checkbox').prop('checked', false);
    }
});


$('#InCheck-mob').click(function () {
    $('.mobil-check').toggleClass('active');
    $('.basket__item').toggleClass('check-active');

    if ($(this).is(':checked')) {
        $('#controls input:checkbox').prop('checked', true);
    } else {
        $('#controls input:checkbox').prop('checked', false);
    }
});


$(document).ready(function () {
    function change($tr, val) {
        var $input = $tr.find('input');
        var count = parseInt($input.val()) + val;
        count = count < 1 ? 1 : count;
        $input.val(count);
        var $price = $tr.find('.basket__price .basket__calc-price');
        $price.text(count * $price.data('price'));
        var $price2 = $tr.find('.basket__min-price .basket__calc-price');
        $price2.text(count * $price2.data('price'));
    }
    function call_all_price() {
        $(".basket__list .basket__item").each(function () {
            var price_dollar = parseInt($(this).find(".basket__price .basket__calc-price").text());
            var price_rub = parseInt($(this).find(".basket__min-price .basket__calc-price").text());
            var dollar = + price_dollar;
            var rub = + price_rub;
            $(".basket-section .all_dolar").text(dollar);
            $(".basket-section .all_rub").text(rub);
        });
    }
    $('.minus').click(function () {
        change($(this).closest('.basket__price-wrap'), -1);
        call_all_price();
    });
    $('.plus').click(function () {
        change($(this).closest('.basket__price-wrap'), 1);
        call_all_price();
    });
    $('.number input').on("input", function () {
        var $price = $(this).closest('.basket__price-wrap').find('.basket__price .basket__calc-price');
        $price.text(this.value * $price.data('price'));
        var $price2 = $(this).closest('.basket__price-wrap').find('.basket__min-price .basket__calc-price');
        $price2.text(this.value * $price2.data('price'));
    });
});


$('.js-arrow').on('click', function () {
    $('.icon-up').toggleClass('icon-down');
});

$('.orders__button').on('click', function () {
    $(this).toggleClass('active');
});

$('.main-title__contact').on('click', function () {
    $('.contact-manager').toggleClass('active');
});

$('.orders__nav-btn').on('click', function () {
    $(this).toggleClass('active-arrow');
});

$(function () {
    $('.orders__check-title').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true,
    });
    $(document).on('click', '.modal-notification__btn, .modal-notification__close', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });
});

$('.orders__check-title').on('click', function () {
    $(this).closest(".orders__check-item").addClass("active-item");
});


$(".js-inBtn").click(function () {
    $('.orders__edit-input').prop('readonly', function (i, currentValue) {
        $('.orders__edit-label').addClass('active');
        return !currentValue;
    });
});

$(".js-inBtn-save").click(function () {
    $('.orders__edit-input').prop('readonly', function (i, currentValue) {
        $('.orders__edit-label').removeClass('active');
        return !currentValue;
    });
});

$(".js-addText-1").on("change", function () {
    //Getting Value
    var selValue = $(".js-addText-1").val();
    //Setting Value
    $(".js-addTextIn-1").val(selValue);
});

$(".js-addText-2").on("change", function () {
    //Getting Value
    var selValue = $(".js-addText-2").val();
    //Setting Value
    $(".js-addTextIn-2").val(selValue);
});

$('.js-addSelect-1').on('click', function () {
    $('.orders__select-wrap-1').addClass('active');
    $('.js-addTextIn-1').addClass('hidden-text');

});

$('.js-addSelect-2').on('click', function () {
    $('.orders__select-wrap-2').addClass('active');
    $('.js-addTextIn-2').addClass('hidden-text');
});

$('.js-removeSelect-1').on('click', function () {
    $('.orders__select-wrap-1').removeClass('active');
    $('.js-addTextIn-1').removeClass('hidden-text');
});

$('.js-removeSelect-2').on('click', function () {
    $('.orders__select-wrap-2').removeClass('active');
    $('.js-addTextIn-2').removeClass('hidden-text');
});

$('.orders__edit-box').on('click', function () {
    $(this).children(".orders__edit-btn--edit").toggleClass('active');
    $(this).children(".orders__edit-btn--save").toggleClass('active');
});

$(".orders__edit-form").submit(function (e) {
    e.preventDefault();
    let form_data = $(this).serializeArray();
    $.ajax({
        type: "POST",
        url: "../../mail.php",
        data: form_data,
        success: function (response) {
            $(".theank-click").click();
        },
        error: function (error) {
            $(".theank-click").click();
        }
    });
    return false;
});
