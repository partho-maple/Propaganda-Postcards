// use a closure to (a) test it and (b) not expose this into global scope

Ti.include('global.js');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


	// window container
	var win2 = Ti.UI.currentWindow;
	var tab = Titanium.UI.currentTab;
 
	// get tab group object
	//var tabGroup = win2.tabGroup;
	tabGroup.tabBarVisible = true;
	//win2.hideTabBar({animated:true});


	win2.backgroundImage = 'images/BG.png';
	win2.hideNavBar();
	win2.navBarHidden = true;
	win2.tabBarHidden = false;
	
	Ti.UI.currentWindow.showTabBar();
	win2.showTabBar();
	
		
	
	var text = Titanium.UI.createLabel({
		top: 15,
		left: 15,
		right: 10,
		text: 'OK, YOUR POSTCARD IS FINISHED! SEND IT TO YOUR FRIENDS BY TOUCHING "SHARE" BELOW',
		color: '#7b0000',
		font:{fontSize:24,fontFamily:'kremlin'},
	});
	
	win2.add(text);
	
		var backBtn = Titanium.UI.createButton({
	    height:25, width:75,
	    top:100, left:15,	
	    backgroundImage: 'images/ic_Back.png',
		backgroundSelectedImage: 'images/ic_Back_Active.png',	
	});	

	
	
	backBtn.addEventListener('click', function()
	{
		win2.hideTabBar();
		tabGroup.tabBarVisible = false;
		win2.close()
		win2.hideTabBar();
		tabGroup.removeTab;
		//tab1.hide();
		//tab2.hide();
		//tab3.hide();
		
	});
	

win2.add(backBtn);
// win2.add(finalImage);






















/*

var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Design',
    window:win2
});


//
// create controls tab and root window
//
var win22 = Titanium.UI.createWindow({  
    title:'Log In',
    url: 'facebook_login.js',
    fullscreen:true,
    hideNavBar:true,
    orientationModes: [Titanium.UI.LANDSCAPE_RIGHT]

});

win22.hideNavBar();
win22.navBarHidden = true;
// win2.hideTabBar();


var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Share',
    window:win22
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

*/












/*

	// window container
	var win = Ti.UI.currentWindow;
	var tab = Titanium.UI.currentTab;
 
	// get tab group object
	var tabGroup = win.tabGroup;
	tabGroup.tabBarVisible = true;


    var ff = Ti.Filesystem.applicationDataDirectory; 
    
    var finalImage = Titanium.UI.createView({
    width: 480,
    height: 320,
    backgroundImage: ff + 'postcard.png',
    top:0,
    left:0
	});


	win.backgroundImage = ff + 'postcard.png';
	win.backgroundImage = 'images/postcard.png';
	win.backgroundColor = 'white';
	win.add(finalImage);
	
	

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
	
	alert('OK, your postcard is finished! Send it to your friends by touching "Share Your Postcard" below');
	win.add(backBtn);
	Titanium.UI.currentTab.open(win,{animated:true});
	
*/
	
	
	 
	
	
	
	
