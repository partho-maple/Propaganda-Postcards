//loading the html and js for agri_four_message.js


Ti.include('global.js');



var file = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,'photo.png');
	if (file.exists()) { file.deleteFile(); }

var canvasFilename = 'canvas.html';
var canvasfromFile = Ti.Filesystem.getFile( Ti.Filesystem.resourcesDirectory, canvasFilename );
var canvastoFile = Ti.Filesystem.getFile( Ti.Filesystem.applicationDataDirectory, canvasFilename );
 
canvastoFile.write( canvasfromFile );


var pixasticmyFilename = 'pixastic.core.js';
var pixasticfromFile = Ti.Filesystem.getFile( Ti.Filesystem.resourcesDirectory, pixasticmyFilename );
var pixastictoFile = Ti.Filesystem.getFile( Ti.Filesystem.applicationDataDirectory, pixasticmyFilename );
 
    pixastictoFile.write( pixasticfromFile);


var sepiamyFilename = 'sepia.js';
var sepiafromFile = Ti.Filesystem.getFile( Ti.Filesystem.resourcesDirectory, sepiamyFilename );
var sepiatoFile = Ti.Filesystem.getFile( Ti.Filesystem.applicationDataDirectory, sepiamyFilename );
 
    sepiatoFile.write( sepiafromFile );
    
//end of loading the html and js for agri_four_message.js





// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

Titanium.UI.orientation = Titanium.UI.LANDSCAPE_RIGHT;

// This methode has been depricated on iOS 7. So don't use it. use fullscreen:false when creating a window instead.
// Titanium.UI.iPhone.hideStatusBar(); 
// Titanium.UI.iPhone.statusBarStyle = Titanium.UI.iPhone.StatusBar.OPAQUE_BLACK;
// var statusbar = require("com.widbook.statusbar");
// statusbar.hide();



Titanium.App.Properties.setBool('front', false);


// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//

        //var f = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'postcardd.png');
       	//f.deleteFile();


var win1 = Titanium.UI.createWindow({  
	url: 'theme_choice.js',
	fullscreen:true,
	hideNavBar:true,
    orientationModes: [Titanium.UI.LANDSCAPE_RIGHT]
});

win1.hideNavBar();
win1.navBarHidden = true;
// win1.hideTabBar();  //THis line works


var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Design',
    window:win1
});


//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'Log In',
    url: 'facebook_login.js',
    fullscreen:true,
    hideNavBar:true,
    orientationModes: [Titanium.UI.LANDSCAPE_RIGHT]

});

win2.hideNavBar();
win2.navBarHidden = true;
// win2.hideTabBar();


var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Share',
    window:win2
});


//
// create base UI tab and root window
//
var win3 = Titanium.UI.createWindow({  
    title:'About',
    backgroundColor:'#fff',
    backgroundImage: 'images/BG.png',
    fullscreen:true,
    hideNavBar:true,
    orientationModes: [Titanium.UI.LANDSCAPE_RIGHT]
});

win3.hideNavBar();
win3.navBarHidden = true;
// win3.hideTabBar();

var tab3 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'About',
    window:win3
});

var label3 = Titanium.UI.createLabel({
	color: '#7b0000',
	text:'THIS IS WHERE THE ABOUT PAGE WILL BE',
	font:{fontSize:22,fontFamily:'kremlin'},
	textAlign:'center',
	width:'auto'
});

win3.add(label3);



//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2); 
tabGroup.addTab(tab3); 


// open tab group
tabGroup.open();

// splash screen
Ti.include("welcome.js");

