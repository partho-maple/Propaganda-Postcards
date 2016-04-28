Ti.include('global.js');


var win = Titanium.UI.currentWindow;

Titanium.App.Properties.setBool('front', false);


/* var imageView = Titanium.UI.createImageView({
	height:200,
	width:200,
	top:20,
	left:10,
	backgroundColor:'#999'
});

win.add(imageView); */

var popoverView;
var arrowDirection;

if (Titanium.Platform.osname == 'ipad')
{
	// photogallery displays in a popover on the ipad and we
	// want to make it relative to our image with a left arrow
	arrowDirection = Ti.UI.iPad.POPOVER_ARROW_DIRECTION_LEFT;
	popoverView = imageView;
}


var closeAll = false;

var win2 = Titanium.UI.createWindow({
		url: 'agri_four_message.js',
		//url: 'agri_four_post_camera.js',
		orientationModes: [Titanium.UI.LANDSCAPE_LEFT,  Titanium.UI.LANDSCAPE_RIGHT],
		home:function() 
		{ 
// 			Originally there was this line.
			// closeAll = true; win.home(); 
			
			closeAll = true; win.close(); 
		}   
 

		});

win2.addEventListener('close',function(){ if (closeAll) { win.close(); } });	



Titanium.Media.openPhotoGallery({

	success:function(event)
	{
		
		var f = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'photo.png');
		
		f.deleteFile();
		
        f.write(event.media);
		
		
		
		//var winn = Titanium.UI.currentWindow;

		//win.close();
		

		Titanium.UI.currentTab.open(win2,{animated:true});	


		
	/*	var cropRect = event.cropRect;
		var image = event.media;

		// set image view
		Ti.API.debug('Our type was: '+event.mediaType);
		if(event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO)
		{
			imageView.image = image;
		}
		else
		{
			// is this necessary?
		}

		Titanium.API.info('PHOTO GALLERY SUCCESS cropRect.x ' + cropRect.x + ' cropRect.y ' + cropRect.y  + ' cropRect.height ' + cropRect.height + ' cropRect.width ' + cropRect.width);

	*/

	},
	cancel:function()
	{
	win.close();
	},
	error:function(error)
	{
	},
	allowEditing:false,
	popoverView:popoverView,
	arrowDirection:arrowDirection,
	mediaTypes:[Ti.Media.MEDIA_TYPE_VIDEO,Ti.Media.MEDIA_TYPE_PHOTO]
}); 