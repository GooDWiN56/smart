$(document).on("ready", function (e) {

    myCenter = new google.maps.LatLng(55.751537, 37.617845);
    locations = [
        ['Филиал Митинский', 55.847815, 37.359985],
        ['Филиал Черемушки', 55.667464, 37.552789]
    ];
    function initialize() {
        var mapProp = {
            center: myCenter,
            disableDefaultUI: true,
            zoom: 10,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById("map"), mapProp);




        var marker, i;
        var markers = new Array();

        for (i = 0; i < locations.length; i++) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                map: map
            });

            markers.push(marker);

            google.maps.event.addListener(marker, 'click', (function (marker, i) {
                return function () {
                    infowindow.setContent(locations[i][0]);
                    infowindow.open(map, marker);
                }
            })(marker, i));
        }
    }
    google.maps.event.addDomListener(window, 'load', initialize);

    let ageShow = true

    $(window).on("scroll", function () {
        $(window).scrollTop() > 50 ? $('header').addClass('fixed') : $('header').removeClass('fixed');

        if (($(window).scrollTop() > ($('.course-age-tabs').offset().top - $(window).height()/1.5)) && ageShow ){
                setTimeout(function(){$(".course-age-tabs a:nth-child(1)").removeClass('active')}, 500);
                setTimeout(function(){$(".course-age-tabs a:nth-child(2)").addClass('active')}, 500);
                setTimeout(function(){$(".course-age-tabs a:nth-child(2)").removeClass('active')}, 1000);
                setTimeout(function(){$(".course-age-tabs a:nth-child(3)").addClass('active')}, 1000);
                setTimeout(function(){$(".course-age-tabs a:nth-child(3)").removeClass('active')}, 2000);
                setTimeout(function(){$(".course-age-tabs a:nth-child(4)").addClass('active')}, 2000);
                setTimeout(function(){$(".course-age-tabs a:nth-child(4)").removeClass('active')}, 3000);
                setTimeout(function(){$(".course-age-tabs a:nth-child(1)").addClass('active')}, 3000);
              ageShow = false;
        }
    });

    if($(window).width()>1280){
        $('.adress-desc').css('left', ($(window).width() - 1280) / 2 )
    }

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

        if (!r) {
            $('#header-region-change2').addClass('show')
            r = true;
        }
        else {
            $('#header-region-change2').removeClass('show')
            r = false;
        }
    });
    let city = false

    $('a#header-region-button-no').on("click", function () {
        let s = $('div#header-region-select').html();
        let c = $('a#header-region-button-no').html();
        $('div#header-region-select').html(c);
        $('a#header-region-button-no').html(s);
        $('#header-region-change').removeClass('show');
        if (city) {
            $(".moscow").show();
            $(".novgorod").hide();
            myCenter = new google.maps.LatLng(55.751537, 37.617845);
            locations = [
                ['Филиал Митинский', 55.847815, 37.359985],
                ['Филиал Черемушки', 55.667464, 37.552789]
            ];
            initialize();
            city = false;
        }
        else {
            $(".novgorod").show();
            $(".moscow").hide();
            myCenter = new google.maps.LatLng(56.294653, 43.961265);
            locations = [
                ['Филиал Горьковский', 56.319453, 44.021203],
                ['Филиал Ленинский', 56.293466, 43.933068]
            ];
            initialize();
            city = true;
        }
        r = false;
        $('#header-region-change-q').text('Ваш город - ' + c + '?');

    });
    $('a#header-region-button-no2').on("click", function () {
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

    $('.course-name-desc a, .bottom-sign a, .course-programm p a').on('click', function () {
        $('.popup').addClass('show');
        $('.popup #application').show();
    });
    $('.header-user_link').on('click', function () {
        $('.popup').addClass('show');
        $('.popup #login').show();
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
        $('.popup #rates').show();
        $('.popup #rates h3').html('Ваш тариф:<br />' + $(this).attr('data-item'));
    });




    $('.course-name-desc a').on("click", function () {

        var get_id = $(this).attr("meta-item");
        var target = $("#" + get_id).offset().top;

        $("html, body").animate({ scrollTop: target }, 800);

    });


    $('.gallery-items').slick({
        arrows: false,
        dots: false,
        infinite: true,
        slidesToScroll: 1,
        variableWidth: true,
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
                dots: true,
                arrows: false
            }
        }]
    });







}); 