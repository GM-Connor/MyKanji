/* Listeners */

//Groups viewer
$('.groups-page .group').click(function() {
	$('.groups-page .group.active').removeClass('active');
	$(this).addClass('active');
});
$('.groups-page .children .panel-heading li').click(function() {
	$('.groups-page .children .panel-heading li.active').removeClass('active');
	$(this).addClass('active');
});