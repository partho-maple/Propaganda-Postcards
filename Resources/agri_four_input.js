// use a closure to (a) test it and (b) not expose this into global scope
Ti.include('global.js');



	// window container
	var win = Ti.UI.currentWindow;
	
	


	win.backgroundImage = 'images/BG.png';
		
		//create a button to pick image four (the face)
		
		
					
	var text = Titanium.UI.createLabel({
		top: -55,
		left: 15,
		right: 10,
		color: '#7b0000',
		font:{fontSize:22,fontFamily:'kremlin'},
		text: 'CHOOSE A PHOTO TO ADD TO YOUR IMAGE',
	});
	
	win.add(text);
		
		
		
	var photoBtn = Titanium.UI.createButton({
		style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN, 
	    title: "FROM CAMERA",
	    borderRadius:12, 
	    font:{fontFamily: 'kremlin', fontSize:14},
	    color:'#7b0000',
	    borderColor:'#7b0000',
	    borderWidth: 2,
	    height:80,
	    width:140,
	    top:140,
	    left:80,		
	});	
	
	photoBtn.addEventListener('click', function()
	{
			
				var file = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,'photo.png');
	if (file.exists()) { file.deleteFile(); }

			
	//
	// create window 
	//
	
	var win = Titanium.UI.createWindow({
		url: 'agri_four_camera.js',
		orientationModes: [Titanium.UI.LANDSCAPE_LEFT,  Titanium.UI.LANDSCAPE_RIGHT]
	
	});

	Titanium.UI.currentTab.open(win,{animated:true});	
	
	});
	
	
	// gallery button
	
		var galleryBtn = Titanium.UI.createButton({
			
		style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN, 
	    title: "FROM ALBUM",
	    borderRadius:12, 
	    font:{fontFamily: 'kremlin', fontSize:14},
	    color:'#7b0000',
	    borderColor:'#7b0000',
	    borderWidth: 2,
	    height:80,
	    width:140,
	    top:140,
	    right:80,	
				
	});	
	
	galleryBtn.addEventListener('click', function()
	{
			
				var file = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,'photo.png');
	if (file.exists()) { file.deleteFile(); }

	//
	// create window 
	//
	
	var win = Titanium.UI.createWindow({
		url: 'agri_four_gallery.js',
		orientationModes: [Titanium.UI.LANDSCAPE_LEFT,  Titanium.UI.LANDSCAPE_RIGHT]
	
	});

	Titanium.UI.currentTab.open(win,{animated:true});	
	
	});

	
	// gallery button ends

	
	
		// create a button to close window

var backBtn = Titanium.UI.createButton({
	    height:25, width:75,
	    top:45, left:15,	
	    backgroundImage: 'images/ic_Back.png',
		backgroundSelectedImage: 'images/ic_Back_Active.png',	
	});	

	
	
	backBtn.addEventListener('click', function()
	{
	win.close()
	});
	
	win.add(backBtn);
	win.add(photoBtn);
	win.add(galleryBtn);

