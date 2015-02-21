var sports = ['hiking', 'cycling', 'running'];

$(document).ready(function() {

	$('.sports div').on('click', function() {
		var sport = $(this).attr('id');
		sports.push(sport);
		$(this).toggleClass('selected');
	});

});