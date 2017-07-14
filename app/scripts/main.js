var panorama, viewer;

var mainContainer = document.getElementById( 'maincontainer' );

viewer = new PANOLENS.Viewer( { container: mainContainer } );
panorama = new PANOLENS.ImagePanorama('images/field.jpg');



$('#maincontainer').click(function(){
	$('.footer').addClass('img-360-footer');
	$('main').addClass('main-hide');
	console.log('trigger');
	// viewer.add (panorama);
	setTimeout(function(){
		$('main').removeClass('main-hide');
		$('.footer').removeClass('img-360-footer');
	}, 2000);
});


