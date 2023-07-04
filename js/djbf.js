/*
 * @Author: your name
 * @Date: 2021-12-26 11:29:12
 * @LastEditTime: 2021-12-26 16:15:12
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \WEBPROJECT\常用\视频点击播放\js\sucaihuo.js
 */
$(document).ready(function () {
	//first只对第一个ul中的第一个li隐藏，而first-child对每个ul中的第一个li隐藏
	// $('#select_btn li:first').css('border', 'none');
	if ($('#zSlider').length) {
		zSlider();
		$('#h_sns').find('img').click(function () {
			//点击改变不透明度 时间 透明度
			$(this).fadeTo(200, 0.5);
		}, function () {
			$(this).fadeTo(100, 1);
		});
	}

	function zSlider(ID, delay) {
		var ID = ID ? ID : '#zSlider';
		var delay = delay ? delay : 2000;
		var currentEQ = 0,
			picnum = $('#picshow_img li').size(),
			autoScrollFUN;
		$('#select_btn li').eq(currentEQ).addClass('current');
		$('#picshow_img li').eq(currentEQ).show();
		$('#picshow_tx li').eq(currentEQ).show();
		//注释掉这一句就不会轮播了
		// autoScrollFUN = setTimeout(autoScroll, delay);

		// function autoScroll() {
		// 	clearTimeout(autoScrollFUN);
		// 	currentEQ++;
		// 	if (currentEQ > picnum - 1) currentEQ = 0;
		// 	$('#select_btn li').removeClass('current');
		// 	$('#picshow_img li').hide();
		// 	$('#picshow_tx li').hide().eq(currentEQ).slideDown(400);
		// 	$('#select_btn li').eq(currentEQ).addClass('current');
		// 	$('#picshow_img li').eq(currentEQ).show();
		// 	autoScrollFUN = setTimeout(autoScroll, delay);
		// }
		$('#picshow').click(function () {
			clearTimeout(autoScrollFUN);
		}, function () {
			autoScrollFUN = setTimeout(autoScroll, delay);
		});
		$('#select_btn li').click(function () {


			var picEQ = $('#select_btn li').index($(this));
			if (picEQ == currentEQ) return false;
			currentEQ = picEQ;
			$('#select_btn li').removeClass('current');
			$('#picshow_img li').hide();
			$('#picshow_tx li').hide().eq(currentEQ).slideDown(100);
			$('#select_btn li').eq(currentEQ).addClass('current');
			$('#picshow_img li').eq(currentEQ).show();
			// $('#vi').eq(currentEQ).attr("autoplay", "autoplay");
			// $('video').attr("autoplay");
			//  autoplay
			return false;
		});


	};
})