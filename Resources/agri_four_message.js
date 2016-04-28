// use a closure to (a) test it and (b) not expose this into global scope

Ti.include('global.js');

/* // start of variable files for postcard choices

	var agri1 = Ti.Filesystem.getFile(Titanium.Filesystem.tempDirectory, 'agri1.txt');

	var agri2 = Ti.Filesystem.getFile(Titanium.Filesystem.tempDirectory, 'agri2.txt');

	var agri3 = Ti.Filesystem.getFile(Titanium.Filesystem.tempDirectory, 'agri3.txt');

// end of variable files for postcard choices */


var front = Titanium.App.Properties.getBool('front');


	// window container
	var win = Ti.UI.currentWindow;

	//win.backgroundImage = 'images/agri_four_message.png';
	// win.backgroundColor = 'white';
	win.hideNavBar();
	win.navBarHidden = true;
	
		
	var ff = Ti.Filesystem.applicationDataDirectory; 
		
	var bothImages = Titanium.UI.createView ({
		width: 480,
    	height: 320,
	});	
		
		
	 if (front == true) {
	 			
		var t1 = Ti.UI.create2DMatrix();
			t1 = t1.scale(-1, 1);
            } else {
            };	

// no directory path before file's name (this is a previous file stored at 'applicationDataDirectory')          
//var myHtmlCode = "<body><img src='photo.png' style='filter:gray, -webkit-filter:grayscale(100%), transform:scale(-1,1), -webkit-transform: scale(-1,1)'/></body>";
 
 
// let's create a temp html file (will be created at 'applicationDataDirectory')
//var f2 = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory, 'temp_html_file.html');
//f2.write(myHtmlCode);
 
// finally include the temp file into webview's url
//var webview = Ti.UI.createWebView({  url:Titanium.Filesystem.applicationDataDirectory +'temp_html_file.html' });
	
	
	var overunderImage = Titanium.UI.createWebView({
		url: ff + 'canvas.html',
		width: 480,
		height: 320,
		//tranform:t1,
		top:0,
		left:0,
		});



	
 var underImage = Titanium.UI.createView({
		width: 480,
    	height: 320,
    	//backgroundImage: ff + 'photo.png',
    	top:0,
    	left:0,
    	transform:t1,
	});
	
	underImage.add(overunderImage);
	
			
	bothImages.addEventListener('touchstart', function (e) {
		underImage.ox = e.x - underImage.center.x;
  		underImage.oy = e.y - underImage.center.y;
	});

	bothImages.addEventListener('touchmove', function(e){
  		underImage.center = {
   			x:(e.x - underImage.ox),
    		y:(e.y - underImage.oy)
  		};
	});

 
 
		
		
	var overImage = Titanium.UI.createView({
    width: pWidth,
    height: pHeight,
    backgroundImage: Ti.Filesystem.applicationDataDirectory + 'postcardbg.png',
    top:0,
    left:0
});

bothImages.add(underImage);
bothImages.add(overImage);

		
//	create a label for the user to add their message to
	var messageArea = Titanium.UI.createTextArea({
	value:'ENTER A PERSONAL MESSAGE HERE!',
	//passwordMask: true,
	height:100,
	top:265,
	left:10,
	right:10,
	font:{fontSize:18,fontFamily:'kremlin'},
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	//backgroundColor:'black',
	backgroundColor:'transparent',
	Color:'white',
	});
	
	overImage.add(messageArea);
	
	messageArea.addEventListener('focus', function() {
    win.animate({bottom: 250, duration:500});
	});
 
	messageArea.addEventListener('blur', function() {
    win.animate({bottom: 0, duration:500});
	});
	
	/* where will the message area be?
	
	if(agri1.exists()) {
		messageArea.width = 500;
		messageArea.top = 150;
		messageArea.left = 100;
		};
	
	if(agri2.exists()) {
		messageArea.width = 200;
		messageArea.top = 100;
		messageArea.left = 30;
		};
		
	if(agri3.exists()) {
		messageArea.width = 200;
		messageArea.top = 90;
		messageArea.left = 300;
		};
	
	
	
	// end of where will the message area be? */
	
		
		
		
		//create a button to pick image four (the face)
		
	var finishBtn = Titanium.UI.createButton({
 		height:25, width:75,
	    top:45, right:15,	
	    backgroundImage: 'images/ok.png',	
	});	
	
	finishBtn.addEventListener('click', function()
	{
	 
			bothImages.toImage(function(e){	
        	var f = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'postcard.png');
        	f.write(e.blob);
     	});
        
           	
        	var win = Titanium.UI.createWindow({
		
			url: 'agri_four_finished.js',
			orientationModes: [Titanium.UI.LANDSCAPE_RIGHT],
			});
			
			// get tab group object
			//var tabGroup = win.tabGroup;
			//tabGroup.tabBarVisible = true;
			Ti.UI.currentWindow.showTabBar();
			win.showTabBar();
			Titanium.UI.currentTab.open(win,{animated:true});
			Ti.UI.currentWindow.showTabBar();
			win.showTabBar();		
    });


	
			
	
/*	var donedoneBtn = Titanium.UI.createButton({
		style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN, 
	    title: "OK",
	    borderRadius:12, 
	    font:{fontFamily: 'Times New Roman', fontSize:18},
	    color:'#fff',
	    //backgroundGradient:{type:'linear', colors:['#3a1b0a','#3a1b0a'], startPoint:{x:0,y:0}, endPoint:{x:3,y:80}, backFillStart:false}, 
	    //borderColor:'#b8b29c',
	    borderWidth: 2,
	    height:23,
	    width:40,
	    bottom:5,
	    right:100,		
	});	



	donedoneBtn.addEventListener('click', function()
	{
	// create window 
	//
	
	var win = Titanium.UI.createWindow({
		
		url: 'agri_four_finished.js',
		orientationModes: [Titanium.UI.LANDSCAPE_LEFT,  Titanium.UI.LANDSCAPE_RIGHT],
	
	});

	Titanium.UI.currentTab.open(win,{animated:true});	
	
	}); */
	
	
		// create a button to close window

var backBtn = Titanium.UI.createButton({
	    height:25, width:75,
	    top:45, left:15,	
	    backgroundImage: 'images/ic_Back.png',
		backgroundSelectedImage: 'images/ic_Back_Active.png',	
});	
	
backBtn.addEventListener('click', function()
{

	win.close();
	win.home();
	/*
	var win2 = Titanium.UI.createWindow({
		url: 'agri_four_input.js',
		orientationModes: [Titanium.UI.LANDSCAPE_LEFT,  Titanium.UI.LANDSCAPE_RIGHT]
	});
	Titanium.UI.currentTab.open(win2,{animated:true});
	win2.hideNavBar();
	win2.navBarHidden = true;
	*/
});
	
	win.add(bothImages);
	win.add(underImage);
	win.add(overImage);
	win.add(backBtn);
	win.add(finishBtn);
	//win.add(donedoneBtn);
