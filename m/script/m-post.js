$(document).ready(function() {
	$('.searchBar a').on('click', function (event) {// 控制搜索菜单的弹出
		event.preventDefault();
		$(this).parents('#header').siblings('.nav').addClass('menuplay').animate({"opacity":"1","right":"0%"}, 200);
		$('.bg').addClass('addbg');
	});
	$('.bg').on('click',function (event) {// 控制搜索菜单的缩回
		$('.nav').animate({"right": "-43%"}, 200).css("right": "0");
		$(this).removeClass('addbg');
	});


	$('#south a').click(function (event) {// 控制南区搜索项的背景图
		event.preventDefault();
		if ($(this).siblings('#southLogo').hasClass('southLogoFoucus')) {
			$(this).parent().siblings().children('#northLogo').removeClass('northLogoFocus')
			.end.siblings().removeClass('southLogo').addClass('southLogoFocus');
		} else {
			$(this).parent().siblings().children('#northLogo').removeClass('northLogoFocus')
			.end.siblings('#southLogo').addClass('southLogoFocus').removeClass('southLogo');
			console.log();
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
		if ( $(this).hasClass('sortbg')) {
			$(this).siblings('.sortbg').removeClass('sortbg')
			.end().addClass('sortbg');
		}
	});
});