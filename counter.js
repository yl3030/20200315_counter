// 視窗元素.捲動(){內容}
$(window).scroll(function() {
	// each執行每一陣列的內容
	// attr取得屬性
	$("*").each(function() {
		// 視窗高度
		var windowTop = $(window).scrollTop();
		// 元素高度
		var offset = $(this).offset();
		var top = offset.top;
		console.log("目前元素值 : " + number);
		console.log("視窗高度：" + windowTop);
		console.log("目前元素高度 : " + top);

		// console.log(number);
		// console.log(dur);

		if (top - windowTop < 700) {
			// this : 當下的元素
			var number = $(this).attr("data-ct-number");
			var dur = $(this).attr("data-ct-duration");
			// 指定.動畫（屬性物件，設定物件）
			$(this).animate(
				{
					// 計數：指定數字
					countNum: number
				},
				{
					// 時間
					duration: parseInt(dur),
					// 緩動
					easing: "linear",
					// 每一部
					step: function(now) {
						// text():更新文字
						// Math.floor():去小數點
						$(this).text(Math.floor(now));
					}
				}
			);
		}
	});
});
