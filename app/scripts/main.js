var footer = $('.footer');
var main = $('main');
var normalImgHolder = $('#maincontainer');
var btnBook = $('#book-btn');
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



var viewer = new PANOLENS.Viewer({ 
		container: viewHolder,
		controlBar: true,
		cameraFov: 120
	});

// viewHolderJ.hide();



normalImgHolder.click(function() {
    footer.addClass('img-360-footer');
    main.addClass('main-hide');
    normalImgHolder.css('height', '100vh');
    
    setTimeout(function(){
    	main.hide();
    	Show360pic();
    	normalImgHolder.css('position', 'absolute');
    }, 350);

});

btnBook.click(function(){
	BacktoPDP();
});

function Show360pic(){	
	panorama = new PANOLENS.ImagePanorama('images/field.jpg');
	viewer.add(panorama);

	if(isMobile.any() != null){
		viewer.enableControl(1);
	}

	viewHolderJ.removeClass("closed");
}

function Hide360pic(){

	panorama.dispose();
    viewer.remove(panorama);
    panorama = null;
	viewHolderJ.addClass("closed");
	
}


function BacktoPDP() {
	footer.removeClass('img-360-footer');
	main.show().removeClass('main-hide');
	normalImgHolder.css({
    	'height': '60vh',
    	'position': 'initial'
    });
    Hide360pic();
}
