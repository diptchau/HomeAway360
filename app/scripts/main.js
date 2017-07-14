

// document.addEventListener("DOMContentLoaded", function() {
//   var lastElementClicked;
//   Barba.Pjax.init();
//   Barba.Prefetch.init();
// });

// Barba.Dispatcher.on('newPageReady', function(currentStatus, oldStatus, container) {
// 	if(currentStatus.url.includes('360.html')){
// 		SetFooterTransparent();
// 		SetupPanolens();
// 	}
// 	else{
// 		SetFooterPDP();
// 	}
// });

// function SetFooterTransparent(){
// 	$('.footer').addClass('img-360-footer');
// }

// function SetFooterPDP(){
// 	$('.footer').removeClass('img-360-footer');
// }

SetupPanolens();

function SetupPanolens(){
	var panorama;
	var viewer = new PANOLENS.Viewer();
    panorama = new PANOLENS.ImagePanorama( 'images/field.jpg' );
    viewer.add( panorama );
}