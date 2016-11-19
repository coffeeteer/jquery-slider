$(document).ready(function() {
	// Set Options
	var speed = 500;  //fade speed
	var autoswitch = true; //auto slider options
	var autoswitch_speed = 4000; // Auto slider speed

	// Add initial active class
	$('.slide').first().addClass('active');

	//Hide all slides
	$('.slide').hide();

	//Show first slide
	$('.active').show();

	$('#next').on('click', function(){
		$('.active').removeClass('.active').addClass('oldActive');
		if($('.oldActive').is(':last-child') ){
			$('.slide').first().addClass('.active');
		} else {
			$('.oldActive').next().addClass('.active');
		}
		$('.oldActive').removeClass('.oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
	});

	$('#previous').on('click', function(){
		$('.active').removeClass('active').addClass('.oldActive');
		if($('.oldActive').is(':first-child') ){
			$('.slide').last().addClass('active');
		} else {
			$('.oldActive').previous().addClass('active');
		}
		$('.oldActive').removeClass('.oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
	});
});