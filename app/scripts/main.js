var footer = $('.footer');
var header = $('.header');
var main = $('main');
var normalImgHolder = $('#maincontainer');
var btnClose = $('.share');
var viewHolderJ = $('#viewbox-360');
var viewHolder = document.getElementById( 'viewbox-360' );
var panorama;

var isMobile = {
	    Android: function() {
	        return navigator.userAgent.match(/Android/i);
	    },
	    BlackBerry: function() {
	        return navigator.userAgent.match(/BlackBerry/i);
	    },
	    iOS: function() {
	        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	    },
	    Opera: function() {
	        return navigator.userAgent.match(/Opera Mini/i);
	    },
	    Windows: function() {
	        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
	    },
	    any: function() {
	        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	    }
};

var carousel = $('.main-carousel');

var viewer = new PANOLENS.Viewer({ 
	container: viewHolder,
	controlBar: false,
	cameraFov: 120
});

// viewHolderJ.hide();

carousel.flickity({
  // options
  initialIndex: 1,
  setGallerySize: false,
  imagesLoaded: true,
  prevNextButtons: false,
  pageDots: false,
  wrapAround: true,
  cellAlign: 'left',
  contain: true
});

carousel.on( 'staticClick.flickity', function( event, pointer, cellElement, cellIndex ) {
  
  let image = 'https://cdn.rawgit.com/diptchau/HomeAway360/61bc5f82/app/images/field.jpg';

  // dismiss if cell was not clicked
  if ( !cellElement ) {
    return;
  }
  
  switch(cellIndex){
  	case 0: image = 'https://cdn.rawgit.com/diptchau/HomeAway360/61bc5f82/app/images/b1.jpg';
  		break;
  	case 1: image = 'https://cdn.rawgit.com/diptchau/HomeAway360/61bc5f82/app/images/b3.jpg';
  		break;
  	case 2: image = 'https://cdn.rawgit.com/diptchau/HomeAway360/61bc5f82/app/images/b2.jpg';
  		break;
  	case 3: image = 'https://cdn.rawgit.com/diptchau/HomeAway360/61bc5f82/app/images/a1.jpg';
  		break;
  }

  LetTheGamesBegin(image);

});

function LetTheGamesBegin(image){
	footer.addClass('img-360-footer');
	header.addClass('img-360-header');
    main.addClass('main-hide');
    carousel.css('height', '100vh');

    setTimeout(function(){
    	main.hide();
    	Show360pic(image);
    	carousel.fadeOut(200);
    }, 500);
}

normalImgHolder.click(function() {
    footer.addClass('img-360-footer');
    main.addClass('main-hide');
    normalImgHolder.css('height', '100vh');
    
    setTimeout(function(){
    	main.hide();
    	Show360pic();
    	normalImgHolder.css('position', 'absolute');
    }, 400);

});

btnClose.click(function(){
	BacktoPDP();
});

function Show360pic(image) {	
	panorama = new PANOLENS.ImagePanorama(image);
	viewer.add(panorama);

	if(isMobile.any() != null){
		viewer.enableControl(1);
	}
	//add loader here
	viewHolderJ.removeClass("closed");
}

function Hide360pic(){

	viewHolderJ.addClass("closed");
	setTimeout(function(){
		if(panorama != null) {
			panorama.dispose();
		    viewer.remove(panorama);
		    panorama = null;
		}
	}, 500);
}


function BacktoPDP() {
	Hide360pic();
	header.removeClass('img-360-header');
	footer.removeClass('img-360-footer');
	setTimeout(function(){
		// footer.fadeIn(500);
		main.show().removeClass('main-hide');
		// normalImgHolder.css({
	 //    	'height': '60vh',
	 //    	'position': 'initial'
	 //    });
	    carousel.fadeIn(600).css('height', '60vh');
	}, 400);
}
