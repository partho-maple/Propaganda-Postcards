
Ti.include('global.js');

var win = Titanium.UI.currentWindow;

win.orientationModes = [Titanium.UI.LANDSCAPE_LEFT,  Titanium.UI.LANDSCAPE_RIGHT];

Titanium.App.Properties.setBool('front', false);

var frontback = Titanium.UI.createButton({
		height:30, width:55,
	    top:65, right:15,	
	    backgroundImage: 'images/switch.png',
});


frontback.addEventListener('click',function()
{
  if (Ti.Media.camera == Ti.Media.CAMERA_FRONT) {
  				//front: 0;
  				Titanium.App.Properties.setBool('front', true);
                Ti.Media.switchCamera(Ti.Media.CAMERA_REAR);
            } else {
            	Titanium.App.Properties.setBool('front', false);
            	//front: 1;
                Ti.Media.switchCamera(Ti.Media.CAMERA_FRONT);
            }
});





var button = Titanium.UI.createButton({
		height:40, width:55,
	    top:15, right:15,	
	    backgroundImage: 'images/snap.png',
});



var overlay = Titanium.UI.createView({


});


var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;

var landscapeOverlay = Ti.UI.createView({
    width: pWidth,
    height: pHeight,
    //top: (160 / 2),
    transform: Ti.UI.create2DMatrix().rotate(90),
    backgroundImage: Ti.Filesystem.applicationDataDirectory + 'postcardbg.png',
    //orientationModes: [Titanium.UI.LANDSCAPE_LEFT,  Titanium.UI.LANDSCAPE_RIGHT],

});

overlay.add(landscapeOverlay);

//overlay.add(scanner);
landscapeOverlay.add(button);
landscapeOverlay.add(frontback);
//overlay.add(messageView);

button.addEventListener('click',function()
{
	Ti.Media.takePicture();
	setTimeout(function()
	{
		
	},500);
});

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


		win2.addEventListener('close',function(){ 
			if (closeAll) { 
				win.close(); 
			} 
		});	



Titanium.Media.showCamera({
	

	success:function(event)
	{
		Ti.API.debug("picture was taken");
		
	// our picture into our window
		//var imageView = Ti.UI.createImageView({
			//image:event.media,
			//width:480,
			//height:320,
			//transform: Ti.UI.create2DMatrix().rotate(90),
		//});
		//landscapeOverlay.add(imageView);
		
        var f = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'photo.png');
        
        f.deleteFile();
        
        
        
        f.write(event.media);
		
		


		

		Titanium.UI.currentTab.open(win2,{
			animated:true,
			});	
		

		//win.close();
		
	
		// programatically hide the camera
		Ti.Media.hideCamera();	
		
		Titanium.UI.currentWindow.hideNavBar();
		win.hideTabBar();	
		
	},
	cancel:function()
	{
	},
	error:function(error)
	{
		var a = Titanium.UI.createAlertDialog({title:'Camera'});
		if (error.code == Titanium.Media.NO_CAMERA)
		{
			a.setMessage('Please run this test on device');
		}
		else
		{
			a.setMessage('Unexpected error: ' + error.code);
		}
		a.show();
	},
	overlay:overlay,
	showControls:false,	// don't show system controls
	mediaTypes:Ti.Media.MEDIA_TYPE_PHOTO,
	fullscreen:true,
	hideNavBar:true,
	autohide:false // tell the system not to auto-hide and we'll do it ourself
});


		// create a button to close window

var backBtn = Titanium.UI.createButton({
	    height:25, width:75,
	    top:35, left:15,	
	    backgroundImage: 'images/ic_Back.png',
		backgroundSelectedImage: 'images/ic_Back_Active.png',	
	});	

// win.leftNavButton = backBtn;
	backBtn.addEventListener('click', function()
	{
		closeAll = true; 
		win.close();
	});

landscapeOverlay.add(backBtn);


/*

// use a closure to (a) test it and (b) not expose this into global scope

	// window container
	var win = Ti.UI.currentWindow;

	win.backgroundImage = 'images/agri_four_camera.png';
	win.backgroundColor = 'white';
		
		//create a button to pick image four (the face)
		
	var photoBtn = Titanium.UI.createButton({
		style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN, 
	    //title: "Agriculture",
	    borderRadius:12, 
	    font:{fontFamily: 'Times New Roman', fontSize:18},
	    color:'#fff',
	    //backgroundGradient:{type:'linear', colors:['#3a1b0a','#3a1b0a'], startPoint:{x:0,y:0}, endPoint:{x:3,y:80}, backFillStart:false}, 
	    //borderColor:'#b8b29c',
	    borderWidth: 2,
	    height:30,
	    width:30,
	    bottom:117,
	    left:140,		
	});	
	
	photoBtn.addEventListener('click', function()
	{
			
			
	//
	// create window 
	//
	
	var win = Titanium.UI.createWindow({
		url: 'agri_four_message.js',
		orientationModes: [Titanium.UI.LANDSCAPE_LEFT,  Titanium.UI.LANDSCAPE_RIGHT]
	
	});

	Titanium.UI.currentTab.open(win,{animated:true});	
	
	});

	
	
		// create a button to close window

	var backBtn = Titanium.UI.createButton({
		style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN, 
	    title: "back",
	    borderRadius:9, 
	    font:{fontFamily: 'Times New Roman', fontSize:18},
	    color:'black',
	    //backgroundGradient:{type:'linear', colors:['#3a1b0a','#3a1b0a'], startPoint:{x:0,y:0}, endPoint:{x:3,y:80}, backFillStart:false}, 
	    //borderColor:'#b8b29c',
	    borderWidth: 2,
	    height:20,
	    width:50,
	    top:10,
	    right:5,		
	});	

	
	
	backBtn.addEventListener('click', function()
	{

	win.close()
	
	});
	
	win.add(backBtn);
	win.add(photoBtn);
	
	*/
