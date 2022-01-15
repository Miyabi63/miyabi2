$(window).on('load scroll resize', function () {
	const $scrollTop = $(window).scrollTop();

	// .page-top TOPへ戻るボタン
	if ($scrollTop > 400) {
		$(".page-top").addClass("is-active");
	} else {
		$(".page-top").removeClass("is-active");
	}
});

// クリックした時にTOPへ戻る挙動
$(".page-top").on("click", function () {
	$("html,body").animate({
		scrollTop: 0
	}, 300);
	return false;
});