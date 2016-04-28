// use a closure to (a) test it and (b) not expose this into global scope

Ti.include('global.js');

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

	// window container
	var win = Ti.UI.currentWindow;

	win.backgroundImage = 'images/BGimage.png';
	win.hideNavBar();
	win.navBarHidden = true;

		
  var postcardbg = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'postcardbg.png');
        
  postcardbg.deleteFile();
        
        
	
		var oneBtn = Titanium.UI.createButton({
	    color:'#fff',
	    borderColor:'#7b0000',
	    borderWidth: 2,
	    height:70, width:140,
	    top:95, left:15,	
	    backgroundImage: 'images/preview_agriculture_1.png',
		//backgroundSelectedImage: 'images/Postcard_Agriculture_1.png',	    
	});	
	
	
	oneBtn.addEventListener('click', function()
	{
		
	var postcardbgFromFile = Ti.Filesystem.getFile( Ti.Filesystem.resourcesDirectory, 'images/Postcard_Agriculture_1.png' );
	postcardbg.write(postcardbgFromFile);
		
	//agri1.write('bonk');	
		
	var win = Titanium.UI.createWindow({
		url: 'agri_four_input.js',
		orientationModes: [Titanium.UI.LANDSCAPE_LEFT,  Titanium.UI.LANDSCAPE_RIGHT]
	});
	Titanium.UI.currentTab.open(win,{animated:true});
	win.hideNavBar();
	win.navBarHidden = true;	
	});
	
	

	var twoBtn = Titanium.UI.createButton({
	    color:'#fff',
	    borderColor:'#7b0000',
	    borderWidth: 2,
	    height:70, width:140,
	    top:95, left:170,	
	    backgroundImage: 'images/preview_agriculture_2.png',
	   // backgroundSelectedImage: 'images/Postcard_Agriculture_2.png',

	});	
	
	twoBtn.addEventListener('click', function()
	{
	
	var postcardbgFromFile = Ti.Filesystem.getFile( Ti.Filesystem.resourcesDirectory, 'images/Postcard_Agriculture_2.png' );
	postcardbg.write(postcardbgFromFile);
	
	//agri2.write('bonk');	
	
	var win = Titanium.UI.createWindow({
		url: 'agri_four_input.js',
		orientationModes: [Titanium.UI.LANDSCAPE_LEFT,  Titanium.UI.LANDSCAPE_RIGHT]
	});
	Titanium.UI.currentTab.open(win,{animated:true});	
	win.hideNavBar();
	win.navBarHidden = true;		
	});
	
	var threeBtn = Titanium.UI.createButton({
	    color:'#fff',
	    borderColor:'#7b0000',
	    borderWidth: 2,
	    height:70, width:140,
	    top:95, left:325,	
	    backgroundImage: 'images/preview_agriculture_3.png',		
	    //backgroundSelectedImage: 'images/Postcard_Agriculture_3.png',

	});	
	
	threeBtn.addEventListener('click', function()
	{
	
	var postcardbgFromFile = Ti.Filesystem.getFile( Ti.Filesystem.resourcesDirectory, 'images/Postcard_Agriculture_3.png' );
	postcardbg.write(postcardbgFromFile);
	
	//agri3.write('bonk');		
	
	var win = Titanium.UI.createWindow({
		url: 'agri_four_input.js',
		orientationModes: [Titanium.UI.LANDSCAPE_LEFT,  Titanium.UI.LANDSCAPE_RIGHT]
	});
	Titanium.UI.currentTab.open(win,{animated:true});	
	win.hideNavBar();
	win.navBarHidden = true;
	});
	
	
	var fourBtn = Titanium.UI.createButton({
	    style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN, 
	    borderColor:'#7b0000',
	    borderWidth: 2,
	    height:70, width:140,
	    top:180, left:15,	
	    //backgroundImage: 'images/ic_Military_Inactive_Buy.png',
	});	
	
	var fiveBtn = Titanium.UI.createButton({
		style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN, 

	    borderColor:'#7b0000',
	    borderWidth: 2,
	    height:70, width:140,
	    top:180, left:170,	
	    //backgroundImage: 'images/ic_Space_Race_Inactive_Buy.png',
	});	
	
	var sixBtn = Titanium.UI.createButton({
		style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN, 
	    borderColor:'#7b0000',
	    borderWidth: 2,
	    height:70, width:140,
	    top:180, left:325,	
	    //backgroundImage: 'images/ic_State_Secrets_Buy.png',
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
	win.close()
	});
	
	win.add(backBtn);
	win.add(oneBtn);
	win.add(twoBtn);
	win.add(threeBtn);
	win.add(fourBtn);
	win.add(fiveBtn);
	win.add(sixBtn);


