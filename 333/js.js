$( function() {

	$('.b-menu_index .b-menu__item-i').hover( function() {
		$('.b-menu__item').removeClass('b-menu__item_open');
		$('.b-menu__item__list').removeClass('g-visible');
		$(this).next().addClass('g-visible');
		$(this).parent().addClass('b-menu__item_open');
		$('.b-menu__intro__item').hide();
		$('.b-menu__intro__item').eq($('.b-menu__item-i').index($(this))).show();
	});

	$('.b-menu_index .b-menu__item__list').hover( function() {
		$(this).addClass('g-visible');
	});
	
	$('.b-menu_inner .b-menu__item-i').hover( function() {
		$('.b-menu__item').removeClass('b-menu__item_open');
		$('.b-menu__item__list').removeClass('g-visible');
		$(this).next().addClass('g-visible');
		$(this).parent().addClass('b-menu__item_open');
		$('.b-menu__intro__item').hide();
		$('.b-menu__intro__item').eq($('.b-menu__item-i').index($(this))).show();
	}, function() {
		$(this).next().removeClass('g-visible');
		$('.b-menu__item').removeClass('b-menu__item_open');
	});
	
	$('.b-menu_inner .b-menu__item__list').hover( function() {
		$(this).addClass('g-visible');
	}, function() {
		$(this).removeClass('g-visible');
	});
	
	$('.b-course__age__tabs__item__ctrl').click( function(e) {
		e.preventDefault();
		$('.b-course__age__tabs__item__ctrl').removeClass('b-course__age__tabs__item__ctrl_current');
		$(this).addClass('b-course__age__tabs__item__ctrl_current');
		var i=$('.b-course__age__tabs__item__ctrl').index($(this));
		$('.b-course__age__info').removeClass('g-visible');
		$('.b-course__age__info').eq(i).addClass('g-visible');
	});
	
	
	$('.b-index__teachers__title-i').gradientText({
        colors: ['#f5a300', '#ec7300']
    });
	$('.b-index-head__slide__title-i').gradientText({
		colors: ['#f5a300', '#ea6400']
	});
	$('.b-index-head__slide__title__tagline').gradientText({
		colors: ['#f5a300', '#ea6400']
	});
	
	$('.b-index-head__filials__label').hover( function() {
		$(this).next().show();
	}, function() {
		$(this).next().hide();
	});
	$('.b-index-head__filials__list').hover( function() {
		$(this).show();
	}, function() {
		$(this).hide();
	});
	$('.b-index-head__menu__item').hover( function() {
		$(this).stop().animate({'bottom':0}, 250, function() {});
	}, function() {
		$(this).stop().animate({'bottom':'-130px'}, 250, function() {});
	});
	$('.b-index__responses__list__item__text').readmore({
  		collapsedHeight: 64,
  		moreLink: '<a class="b-index__responses__list__item__ctrl" href="#">показать</a>',
  		lessLink: '<a class="b-index__responses__list__item__ctrl" href="#">скрыть</a>'
  	});
	
	$('.b-head__menu .b-head__menu__item-i').hover( function() {
		$('.b-head__menu__item').removeClass('b-head__menu__item_open');
		$('.b-head__menu__item__list').removeClass('g-visible');
		$(this).next().addClass('g-visible');
		$(this).parent().addClass('b-head__menu__item_open');
	}, function() {
		$(this).next().removeClass('g-visible');
		$('.b-head__menu__item').removeClass('b-head__menu__item_open');
	});
	
	$('.b-head__menu .b-head__menu__item__list').hover( function() {
		$(this).addClass('g-visible');
	}, function() {
		$(this).removeClass('g-visible');
	});

	$('.b-index-head__arrow').click( function() {
		$('html, body').animate({
			   scrollTop: $(".b-index").offset().top
		   }, 1000);
		$(this).hide();
   });
	
});

