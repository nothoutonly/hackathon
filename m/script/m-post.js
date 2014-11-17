$(document).ready(function() {
	$('.searchBar a').click(function (event) {// 控制搜索菜单的display
		event.preventDefault();
		// console.log($(this).parent('.searchBar').hasClass('barplay'))
		if ($(this).parent('.searchBar').hasClass('barplay')) {
			$(this).parent('.searchBar').removeClass('barplay');
			var idx = $(this).index();
			$('.nav').eq(idx).removeClass('menuplay');
		} else {
			$(this).parent('.searchBar').addClass('barplay');
			var idx = $(this).index();
			$('.nav').eq(idx).addClass('menuplay');
		}
	});

	$('#south a').click(function (event) {// 控制南区搜索项的背景图
		event.preventDefault();
		if ($(this).siblings('#southLogo').hasClass('southLogo')) {
			$(this).parent().siblings().children('#northLogo').removeClass('northLogoFocus')
			.end.siblings().removeClass('southLogo').addClass('southLogoFocus');

		}
	});
	$('#north a').click(function (event) {// 控制北区搜索项的背景图
		event.preventDefault();
		if ($(this).siblings('#northLogo').hasClass('northLogo')) {
			$(this).parent().siblings().children('#southLogo').removeClass('southLogoFocus')
			.end.siblings().removeClass('northLogo').addClass('northLogoFocus');

		}
	});
	/*$('#north a').click(function (event) {// 控制南北区搜索项的背景图
		event.preventDefault();
		if ($(this).siblings('.northLogo').attr('class') !== 'northLogo') {
			$(this).siblings('.northLogo').addClass('northLogoFocus')
			.end.parent().siblings('#south').children('.southLogo')
			if ($(this).attr('class') !== 'southLogoFocus'){

			} else {
				$(this).removeClass('southLogoFocus')
			}
		}
	});*/
	$('sort li').click( function (event) {
		event.preventDefault();
		if ( $(this).attr('class') !=='sortbg') {
			$(this).siblings('.sortbg').removeClass('sortbg')
			.end().addClass('sortbg');
		}
	});
});