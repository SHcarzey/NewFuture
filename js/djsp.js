/*
 * @Author: your name
 * @Date: 2021-12-25 17:54:51
 * @LastEditTime: 2022-04-24 06:55:15
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \WEBPROJECT\常用\jQuery带缩略图焦点图片轮播特效\js\sucaihuo.js
 */
$(document).ready(function () {
	//页面加载完成后执行
	zSlider();
	//执行轮播函数
	//delay延迟
	//autoScrollFUN自动滚动
	//setTimeout等待时间执行
	//.size()与.length同
	//eq(2)与index[2]同 :eq() 选择器选取带有指定 index 值的元素
	//clearTimeout 阻止 setTimeout执行
	function zSlider(ID, delay) {
		//设置ID 以及 delay两个参数 ID为函数执行对象 delay为执行间隔
		var ID = ID ? ID : '#zSlider';
		//执行对象为id=zSlider的元素
		var delay = delay ? delay : 5000;
		//执行间隔为5000毫秒
		var index = 0,
			picnum = $('#picshow_img li').size(),
			autoScrollFUN;
		$('#select_btn li').eq(index).addClass('current');
		$('#picshow_img li').eq(index).show();
		$('#picshow_tx li').eq(index).show();
		// autoScrollFUN = setTimeout(autoScroll, delay);
		// 设置自动轮播
		function autoScroll() {
			clearTimeout(autoScrollFUN);
			index++;
			if (index > picnum - 1) index = 0;
			$('#select_btn li').removeClass('current');
			$('#picshow_img li').hide();
			$('#picshow_tx li').hide().eq(index).slideDown(1000);
			$('#select_btn li').eq(index).addClass('current');
			$('#picshow_img li').eq(index).show();
			autoScrollFUN = setTimeout(autoScroll, delay);
		}
		//自动滚动方法 先清除自动滚动 index自增 如果index大于小图片-1 重置
		//移出旧字和显示图片的样式 给当前的字和图片样式 使用滚动方法
		$('#picshow').click(function () {
			clearTimeout(autoScrollFUN);
		}, function () {
			autoScrollFUN = setTimeout(autoScroll, delay);
		});
		//点击图片 时间清零 时间重置
		$('#select_btn li').click(function () {
			var picEQ = $('#select_btn li').index($(this));
			if (picEQ == index) return false;
			index = picEQ;
			$('#select_btn li').removeClass('current');
			$('#picshow_img li').hide();
			$('#picshow_tx li').hide().eq(index).slideDown(100);
			$('#select_btn li').eq(index).addClass('current');
			$('#picshow_img li').eq(index).show();
			return false;
		});
		//字点击方法 当前选中字的值等于图片的值 之前的字和图片隐藏 选中的显示
	};
})