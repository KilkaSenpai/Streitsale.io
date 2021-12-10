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
    $(this).toggleClass('active');
});

function textCopy() {
    var copyText = document.getElementById("inputText");
    copyText.select();
    document.execCommand("copy");
}

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

// let price = document.querySelector(".js-price");
// let sum = document.querySelector(".js-sum");
// let priceIn = document.getElementById("priceIn");
// let up = document.getElementById("up");
// let down = document.getElementById("down");
// up.onclick = () => {
//     priceIn.value = (isNaN(priceIn.value)) ? 1 : +priceIn.value + 1;
//     setSum();
// };
// down.onclick = () =>{
//     priceIn.value = (priceIn.value) > 0 ? +priceIn.value - 1 : 0;
//     setSum();
// }

// priceIn.oninput = setSum;

// function setSum() {
//     sum.innerText = (price.innerText * priceIn.value)
// }


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
    let other = el.parentElement.querySelector(".card-reviews__other");
    if (prev === other) {
        other.style.display = "none";
        prev = null;
        return false;
    }

    if (prev) prev.style.display = "none";
    other.style.display = "block";
    prev = el.parentElement.querySelector(".card-reviews__other");

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

var inp = document.querySelector('.add-to-basket__input'),

  mediaQuery = window.matchMedia("screen and (min-width: 768px)");
mediaQuery.addListener(changePlaceholder);

function changePlaceholder(mq) {
  if (mq.matches) {
    inp.setAttribute('placeholder', 'Введите код товара, например, 05347554');
  } else {
    inp.setAttribute('placeholder', 'Введите код товара');

  }
}
changePlaceholder(mediaQuery);