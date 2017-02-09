/* Listeners */

//Groups viewer
$('.groups-page .parent > .group').click(function() {
	$('.groups-page .parent > .group.active').removeClass('active');
	$(this).addClass('active');
});
$('.groups-page .child .group').click(function() {
	$('.groups-page .child .group.active').removeClass('active');
	$(this).addClass('active');
});