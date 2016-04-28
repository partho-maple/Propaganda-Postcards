// use a closure to (a) test it and (b) not expose this into global scope

Ti.include('global.js');

	// window container
	var win2 = Ti.UI.currentWindow;

	win2.backgroundImage = 'images/BG.png';
	Titanium.UI.currentWindow.hideNavBar();
	//hideTabBar();	

	
		
	
	var text = Titanium.UI.createLabel({
		top: -30,
		left: 15,
		right: 10,
		color: '#7b0000',
		font:{fontSize:24,fontFamily:'kremlin'},
		text: 'NOW ADD A MESSAGE TO YOUR POSTCARD, COMRADE',
	});
	
	win2.add(text);
	
			
	
	var nextBtn = Titanium.UI.createButton({
	    height:25, width:75,
	    top:45, right:15,	
	    backgroundImage: 'images/ok.png',
	});	



	nextBtn.addEventListener('click', function()
	{
	// create window 
	//
	
	var win3 = Titanium.UI.createWindow({
		
		url: 'agri_four_message.js',
		orientationModes: [Titanium.UI.LANDSCAPE_LEFT,  Titanium.UI.LANDSCAPE_RIGHT],
	
	});

	Titanium.UI.currentTab.open(win3,{animated:true});	
	
	});
	
	
		// create a button to close window

	var backBtn = Titanium.UI.createButton({
	    height:25, width:75,
	    top:45, left:15,	
	    backgroundImage: 'images/ic_Back.png',
		backgroundSelectedImage: 'images/ic_Back_Active.png',	
	});	
	
		
	backBtn.addEventListener('click', function()
	{

	win2.close();
	win2.home();
	
	/* // start of variable files for postcard choices

	var agri1 = Ti.Filesystem.getFile(Titanium.Filesystem.tempDirectory, 'agri1.txt');
		if(agri1.exists()) {
		agri1.erase();
		};

	var agri2 = Ti.Filesystem.getFile(Titanium.Filesystem.tempDirectory, 'agri2.txt');
		if(agri2.exists()) {
		agri2.erase();
		};
	var agri3 = Ti.Filesystem.getFile(Titanium.Filesystem.tempDirectory, 'agri3.txt');
		if(agri3.exists()) {
		agri3.erase();
		};

	// end of variable files for postcard choices */
	
	});
	

	win2.add(backBtn);
	win2.add(nextBtn);
