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

$('#ordersCheck-1').click(function () {
    if ($(this).is(':checked')) {
        $('#controls-2 input:checkbox').prop('checked', true);
    } else {
        $('#controls-2 input:checkbox').prop('checked', false);
    }
});

$('#templateCheck').click(function () {
    if ($(this).is(':checked')) {
        $('#controls-3 input:checkbox').prop('checked', true);
    } else {
        $('#controls-3 input:checkbox').prop('checked', false);
    }
});

$('#waitingCheck').click(function () {
    if ($(this).is(':checked')) {
        $('#controls-4 input:checkbox').prop('checked', true);
    } else {
        $('#controls-4 input:checkbox').prop('checked', false);
    }
});

$('#notificationsCheck').click(function () {
    if ($(this).is(':checked')) {
        $('#controls-5 input:checkbox').prop('checked', true);
    } else {
        $('#controls-5 input:checkbox').prop('checked', false);
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
    $(this).children('.icon-up').toggleClass('icon-down');
});

$('.orders__button--js').on('click', function () {
    $(this).toggleClass('active');
});

$('.js-contact').on('click', function () {
    $('.contact-manager').toggleClass('active');
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
    $(this).closest(".orders__edit-text-wrap").children(".orders__edit-label").addClass("active").children("input").removeAttr("readonly");
});

$(".js-inBtn-save").click(function () {
    $(this).closest(".orders__edit-text-wrap").children(".orders__edit-label").removeClass("active").children("input").attr("readonly", "true");
});

$(".js-addText-1").on("change", function () {
    var selValue = $(".js-addText-1").val();
    $(".js-addTextIn-1").val(selValue);
});

$(".js-addText-2").on("change", function () {
    var selValue = $(".js-addText-2").val();
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


$('.orders__all-btn').click(function () {
    if ($(this).attr('data-show') === "true") {
        $(this).text("Подробнее");
        $(this).attr('data-show', "false");
    }
    else {
        $(this).text("Показать меньше");
        $(this).attr('data-show', "true");
    }
});

$('.js-to-favorites').click(function () {
    if ($(this).attr('data-show') === "true") {
        $(this).text("В избранное");
        $(this).attr('data-show', "false");
    }
    else {
        $(this).text("В избранном");
        $(this).attr('data-show', "true");
    }
});
$('.js-to-basket').click(function () {
    if ($(this).attr('data-show') === "true") {
        $(this).text("В корзину");
        $(this).attr('data-show', "false");
    }
    else {
        $(this).text("В корзине");
        $(this).attr('data-show', "true");
    }
});
$('.js-add-to-basket').click(function () {
    if ($(this).attr('data-show') === "true") {
        $(this).text("Добавить в корзину");
        $(this).attr('data-show', "false");
    }
    else {
        $(this).text("В корзине");
        $(this).attr('data-show', "true");
    }
});
$('.js-to-waiting-list').click(function () {
    if ($(this).attr('data-show') === "true") {
        $(this).text("В лист ожидания");
        $(this).attr('data-show', "false");
    }
    else {
        $(this).text("В листе ожидания");
        $(this).attr('data-show', "true");
    }
});

$('.js-to-comparison').click(function () {
    if ($(this).attr('data-show') === "true") {
        $(this).text("Добавить к сравнению");
        $(this).attr('data-show', "false");
    }
    else {
        $(this).text("Добавлено к сравнению");
        $(this).attr('data-show', "true");
    }
});

$('.orders__btn--basket').on('click', function () {
    $(this).toggleClass('active');
});

$('.orders__btn--del').on('click', function () {
    $(this).closest(".orders__order").remove();
});

$('.basket__btn-icon--del-card').on('click', function () {
    $(this).closest(".orders__check-item").remove();
});

$('.basket__btn-icon-svg--del-card').on('click', function () {
    $(this).closest(".basket__item").remove();
});
$('.basket__btn-icon-svg--del-card').on('click', function () {
    $(this).closest(".orders__check-item").remove();
});

$('.basket__btn-icon ').on('click', function () {
    $(this).children(".basket__btn-icon-svg--like").toggleClass('active');
});
$('.orders__btn').on('click', function () {
    $(this).children(".orders__btn-svg--basket").toggleClass('active');
});

$('.js-del').on('click', function () {
    $(this).closest(".orders__order").remove();
});

$(".first__click").on("click", function () {
    $(this).removeClass("first__click");
    $(this).addClass("second__click");
    $(".second__click").on("click", function () {
        $(this).removeClass("second__click");
        $(this).addClass("therth__click");
        $(".therth__click").on("click", function () {
            $(this).removeClass("therth__click");
            $(this).addClass("first__click");
        });
    });
});

$('.minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    let price_defautl_min = $(this).closest(".orders__order-text--number").siblings(".orders__order-text--price").children(".price_item").text();
    let price_all_min = $(this).closest(".orders__order-text--number").siblings(".orders__order-text--sum").children(".price").text();
    let min = price_all_min * 1 - price_defautl_min * 1;
    $(this).closest(".orders__order-text--number").siblings(".orders__order-text--sum").children(".price").text(min);
});
$('.plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    let price_defautl = $(this).closest(".orders__order-text--number").siblings(".orders__order-text--price").children(".price_item").text();
    let price_all = $(this).closest(".orders__order-text--number").siblings(".orders__order-text--sum").children(".price").text();
    let sum = price_defautl * 1 + price_all * 1;
    $(this).closest(".orders__order-text--number").siblings(".orders__order-text--sum").children(".price").text(sum);
    return false;
});

$('.mob-list__btn').on('click', function () {
    $(this).closest('.mob-list').children('.aside__list').toggleClass('active');
    $(this).toggleClass('active');
});

$('.open-filter').on('click', function () {
    $('.pa-filter').toggleClass('js_open-menu');
    $(this).closest('html').toggleClass('hidden-pa');
});
$('.filter__close').on('click', function () {
    $(this).closest('.pa-filter').removeClass('js_open-menu');
    $(this).closest('html').removeClass('hidden-pa');
});

const menuBtn3 = $('.open-filter'),
    menu3 = $('.pa-filter');
$(document).click(function (e) {
    if (!menuBtn3.is(e.target) && !menu3.is(e.target) && menu3.has(e.target).length === 0) {
        menu3.removeClass('js_open-menu');
        $('html').removeClass('hidden-pa');
        $('.pa-filter').removeClass('js_open-menu');
    };
});

$('#js-activeCheck').click(function () {
    if ($(this).children('.basket__input').is(':checked')) {
        $('.orders__order').addClass('check-active');
        $('.add-filter').addClass('add-active');
        $(this).toggleClass('active');
        $('#controls-mob-2 input:checkbox').prop('checked', true);
    } else {
        $('#controls-mob-2 input:checkbox').prop('checked', false);
        $('.orders__order').removeClass('check-active');
        $('.add-filter').removeClass('add-active');
    }
});
$('#js-activeCheck-2').click(function () {
    if ($(this).children('.basket__input').is(':checked')) {
        $('.orders__order').addClass('check-active');
        $('.add-filter').addClass('add-active');
        $(this).toggleClass('active');
        $('#controls-mob-3 input:checkbox').prop('checked', true);
    } else {
        $('#controls-mob-3 input:checkbox').prop('checked', false);
        $('.orders__order').removeClass('check-active');
        $('.add-filter').removeClass('add-active');
    }
});
$('#js-activeWaiting').click(function () {
    if ($(this).children('.basket__input').is(':checked')) {
        $('.basket__item').addClass('check-active');
        $(this).toggleClass('active');
        $('.add-filter').addClass('add-active');
        $('#controls-4 input:checkbox').prop('checked', true);
    } else {
        $('#controls-4 input:checkbox').prop('checked', false);
        $('.basket__item').removeClass('check-active');
        $('.add-filter').removeClass('add-active');
    }
});
$('#js-activenotifi').click(function () {
    if ($(this).children('.basket__input').is(':checked')) {
        $('.orders__check-item').addClass('check-active');
        $(this).toggleClass('active');
        $('.add-filter').addClass('add-active');
        $('#controls-5 input:checkbox').prop('checked', true);
    } else {
        $('#controls-5 input:checkbox').prop('checked', false);
        $('.orders__check-item').removeClass('check-active');
        $('.add-filter').removeClass('add-active');
    }
});
$('#js-activeSettings').click(function () {
    if ($(this).children('.basket__input').is(':checked')) {
        $('.notifications-settings__item').addClass('check-active');
        $('.add-filter').addClass('add-active');
        $(this).toggleClass('active');
        $('#controls-6 input:checkbox').prop('checked', true);
    } else {
        $('#controls-6 input:checkbox').prop('checked', false);
        $('.notifications-settings__item').removeClass('check-active');
        $('.add-filter').removeClass('add-active');
    }
});
$('.add-filter__btn').on('click', function () {
    $(this).closest('.add-filter').children('.orders__title-list').toggleClass('active');
});

new Swiper('.comparison__container', {
    navigation: {
        nextEl: '.comparison__arrow--right',
        prevEl: '.comparison__arrow--left',
    },
    slidesPerView: 3.2,
    spaceBetween: 24,
    loop: false,
    breakpoints: {
        320: {
            slidesPerView: 1.1,
            spaceBetween: 20,
            centeredSlides: true,
        },
        576: {
            slidesPerView: 1.5,
            spaceBetween: 12,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 12,
        },
        991: {
            slidesPerView: 3.3,
            spaceBetween: 24,
        }
    }
});
new Swiper('.comparison__fix', {
    navigation: {
        nextEl: '.comparison__arrow-fix--right',
        prevEl: '.comparison__arrow-fix--left',
    },
    slidesPerView: 3.2,
    spaceBetween: 24,
    loop: false,
    breakpoints: {
        320: {
            slidesPerView: 1.1,
            spaceBetween: 20,
            centeredSlides: true,
        },
        576: {
            slidesPerView: 1.5,
            spaceBetween: 12,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 12,
        },
        991: {
            slidesPerView: 3.3,
            spaceBetween: 24,
        }
    }
});

$('.filter-box__btn-menu').on('click', function () {
    $('.product-list__filter').children('.mob-filter').removeClass('js_open-menu');
    $('html').removeClass('hidden-cheeses');
});

$('.filter-box__btn-menu').on('click', function () {
    $('.filter__wrap').children('.filter').removeClass('js_open-menu');
    $('html').removeClass('hidden-sections');
});

$('.filter-box__btn-menu').on('click', function () {
    $('.orders').children('.pa-filter').removeClass('js_open-menu');
    $('html').removeClass('hidden-pa');
});

$('.filter-box__btn-menu').on('click', function () {
    $('.orders').children('.pa-filter').removeClass('js_open-menu');
    $('html').removeClass('hidden-pa');
});

$('.card-info__filter').on('click', function () {
    $(this).toggleClass('active');
});

$('.js-remove').on('click', function () {
    $(this).closest('.product-list__item').remove();
});