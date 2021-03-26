$(document).on("ready", function (e) {


    $(window).on("scroll", function () {
        $(window).scrollTop() > 50 ? $('header').addClass('fixed') : $('header').removeClass('fixed');
    });

    $('a.tabs_link').on('click', function () {
        e.preventDefault();

        $('a.tabs_link').removeClass('active');
        $(this).addClass('active');
        $('.course-age-tab-item').fadeOut(200);
        $('#' + $(this).attr('name')).fadeIn(500);
        $('.mobile-age-tabs').removeClass('active');
        $('.mobile-age-select').html($(this).html());

    });
    $('.course-advantages-item').on('click', function () {
        if ($(this).hasClass() != 'active') {
            $('.course-advantages-item').removeClass('active');
            $(this).addClass('active');
        }
        else {
            $(this).removeClass('active');
            $('.course-advantages-item').removeClass('active');
        }

    });
    $('.mobile-age-select').on('click', function () {
        $('.mobile-age-tabs').addClass('active');
    });

    $('.adress-tabs a').on('click', function () {
        e.preventDefault();

        $('.adress-tabs a').removeClass('active');
        $(this).addClass('active');
        $('.arderss-mobile').fadeOut(200);
        $('#' + $(this).attr('name')).fadeIn(500);

    });

    let r = false;
    $('div#header-region-select, a#header-region-button-yes').on("click", function (e) {
        Cookies.set('city_id', geoip_record.city.id );
        if (!r) {
            $('#header-region-change').addClass('show')
            r = true;
        }
        else {
            $('#header-region-change').removeClass('show')
            r = false;
        }
    });

    $('div#header-region-select2, a#header-region-button-yes2').on("click", function (e) {
        Cookies.set('city_id', geoip_record.city.id);
        if (!r) {
            $('#header-region-change2').addClass('show')
            r = true;
        }
        else {
            $('#header-region-change2').removeClass('show')
            r = false;
        }
    });

    $('a#header-region-button-no').on("click", function () {
        Cookies.set('city_id', geoip_record.altcity.id);
        location.reload();
        let s = $('div#header-region-select').html();
        let c = $('a#header-region-button-no').html();
        $('div#header-region-select').html(c);
        $('a#header-region-button-no').html(s);
        $('#header-region-change').removeClass('show');
        r = false;
        $('#header-region-change-q').text('Ваш город - ' + c + '?');

    });
    $('a#header-region-button-no2').on("click", function () {
        Cookies.set('city_id', geoip_record.altcity.id);
        location.reload();
        let s = $('div#header-region-select2').html();
        let c = $('a#header-region-button-no2').html();
        $('div#header-region-select2').html(c);
        $('a#header-region-button-no2').html(s);
        $('#header-region-change2').removeClass('show');
        r = false;
        $('#header-region-change-q2').text('Ваш город - ' + c + '?');

    });
    $('#burger').on('change', function () {
        $(this).is(':checked') ? $('#burger-menu').addClass('active') : $('#burger-menu').removeClass('active');
    });

    $('.bottom-sign a, .course-programm p a, a.subscrive-form').on('click', function () {
        $('.popup').addClass('show');
        $('.popup #application').show();
    });
    $('.course-name-desc a:first').on('click', function () {
        $('.popup').addClass('show');
        if ($(this).attr('data-item')) {
            $('#application .course').val($(this).attr('data-item'));
        };
        $('.popup #application').show();
    });

    $('.header-user_link').on('click', function () {
        document.location.href="https://smart-education.t8s.ru";
        // $('.popup').addClass('show');
        // $('.popup #login').show();
    });
    $('a.form_call').on('click', function () {
        $('.popup form').fadeOut(200);
        $('.popup #' + $(this).attr('data-item')).fadeIn(500);
    });
    $('.pop_window a.close').on('click', function () {
        $('.popup').removeClass('show');
        $('.popup form').fadeOut(500);
    });

    $('.course-rates-item a').on('click', function () {
        $('.popup').addClass('show');
        $('.popup #application').show();
        $( '#application .extra').val($(this).attr('data-item'));

        $('.popup #application h3').html('Ваш тариф:<br />' + $(this).attr('data-item'));
    });




    $('.course-name-desc a').on("click", function () {

        var get_id = $(this).attr("meta-item");
        // var target = $("#" + get_id).offset().top;

        // $("html, body").animate({ scrollTop: target }, 800);

    });
    $('a.teacher-link').on("click", function () {
        $('a.teacher-link').removeClass('active');
        $(this).addClass('active');
        $('.teachers-items>div').fadeOut(300);
        $('.teachers-items>div.'+$(this).attr('id')).fadeIn(700);
    });


    $('.faq-button').on("click", function () {
        if ($('#'+$(this).attr('id')+'.course-faq-item').hasClass('active')){
            $('#'+$(this).attr('id')+'.course-faq-item').removeClass('active');
        }
        else{
            $('.course-faq-item').removeClass('active');
            $('#'+$(this).attr('id')+'.course-faq-item').addClass('active');
        }
    });

    $('a.showFeed').on('click', function(){
        if ($('p.'+$(this).attr('id')).hasClass('show')) {
            $('p.'+$(this).attr('id')).removeClass('show')
            $(this).text('Показать');
        }
        else {
            $('p.'+$(this).attr('id')).addClass('show')
            $(this).text('Скрыть');
        }
    });


    $('.gallery-items, .home-feedback-items').slick({
        arrows: false,
        dots: false,
        infinite: true,
        slidesToScroll: 1,

        mobileFirst: true,
        responsive: [{
            breakpoint: 700,
            settings: 'unslick'
        },
        {
            breakpoint: 600,
            settings: 'slick'
        }]
    });
    $('.course-suit-gallery').slick({
        arrows: true,
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                arrows: false
            }
        }]
    });
    $('.course-rewviews-slider').slick({
        arrows: true,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 600,
            settings: {
                dots: false,
                arrows: false
            }
        }]
    });
    $('.course-name-slider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    $('.home-teacher-slider').slick({
        arrows: true,
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2
            }
        },
         {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                arrows: false
            }
        }]
    });

    $(".tel").inputmask({"mask": "+7 (999) 999-9999"});
    $(".email").inputmask({
        mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
        greedy: false,
        onBeforePaste: function (pastedValue, opts) {
            pastedValue = pastedValue.toLowerCase();
            return pastedValue.replace("mailto:", "");
        },
        definitions: {
            '*': {
                validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
                casing: "lower"
            }
        }
    });
});
