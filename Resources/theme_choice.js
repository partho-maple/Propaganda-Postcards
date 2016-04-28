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

	win.backgroundImage = 'images/BGtheme.png';
	win.hideNavBar();

		
	var agricultureBtn = Titanium.UI.createButton({
	    color:'#fff',
	    borderColor:'#7b0000',
	    borderWidth: 2,
	    height:70, width:140,
	    top:85, left:15,	
	    backgroundImage: 'images/ic_Agriculture.png',
		backgroundSelectedImage: 'images/ic_Agriculture_Active.png',
	});	
	
	
	agricultureBtn.addEventListener('click', function()
	{
	var win = Titanium.UI.createWindow({
		url: 'theme_agri.js',
		fullscreen:true,
		hideNavBar:true,
		orientationModes: [Titanium.UI.LANDSCAPE_LEFT,  Titanium.UI.LANDSCAPE_RIGHT]
	});
	Titanium.UI.currentTab.open(win,{animated:true});
	Titanium.UI.currentWindow.hideNavBar();
	win.hideTabBar();	
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	var Space_Race_Btn = Titanium.UI.createButton({
	    color:'#fff',
	    borderColor:'#7b0000',
	    borderWidth: 2,
	    height:70, width:140,	
	    top:85, left:170,
	    backgroundImage: 'images/ic_Space_Race_Inactive_Buy.png',
	});	
	
	Space_Race_Btn.addEventListener('click', function()
	{
		/**
		 * WARNING
		 * addTransactionObserver must be called after adding the Storekit event listeners.
		 * Failure to call addTransactionObserver will result in no Storekit events getting fired.
		 * Calling addTransactionObserver before event listeners are added can result in lost events.
		 */
		Storekit.addTransactionObserver();
		
		
		/*
		 1) Can the user make payments? Their device may be locked down, or this may be a simulator.
		 */
		if (!Storekit.canMakePayments)
			alert('This device cannot make purchases!');
		else 
		{
		 
			/*
			 2) Tracking what the user has purchased in the past.
			 */
			if ( checkIfProductPurchased('com.coruscatedigital.propaganda.SpaceRace') )
			{
// 				if the product has already been purchesed.
				alert('Purchased!');
				
				/*
			 	6) Restoring past purchases.
			 	*/
				restorePurchases();
			}
			else
			{
// 				if the product has already been purchesed.
				alert('Not Purchased Yet');	
				
				
				/*
			 	3) Buying a single item.
			 	*/
				requestProduct('com.coruscatedigital.propaganda.SpaceRace', function (product) {
					
					alert('Purchasing complete !');
				});
			
		 
				/*
				 7) Receipt verification.
			 	*/
				// verifyingReceipts = true;			
			}
		}
		
		
		Titanium.UI.currentWindow.hideNavBar();
		// win.hideTabBar();	
	});

















	var Glorious_Leaders_Btn = Titanium.UI.createButton({
	    color:'#fff',
	    borderColor:'#7b0000',
	    borderWidth: 2,
	    height:70, width:140,
	    top:170, left:170,	
	    backgroundImage: 'images/ic_Glorious_Leaders_Buy.png',
	});	
	
	var Industry_Btn = Titanium.UI.createButton({
	    color:'#fff',
	    borderColor:'#7b0000',
	    borderWidth: 2,
	    height:70, width:140,
	    top:85, left:325,	
	    backgroundImage: 'images/ic_Industry_Buy.png',
	});	
	
	var Military_Btn = Titanium.UI.createButton({
	    color:'#fff',
	    borderColor:'#7b0000',
	    borderWidth: 2,
	    height:70, width:140,
	    top:170, left:15,	
	    backgroundImage: 'images/ic_Military_Inactive_Buy.png',
	});	
	
	var State_Secrets_Btn = Titanium.UI.createButton({
	    color:'#fff',
	    borderColor:'#7b0000',
	    borderWidth: 2,
	    height:70, width:140,
	    top:170, left:325,	
	    backgroundImage: 'images/ic_State_Secrets_Buy.png',
	});	
	
	
	
	
	
	
	
	win.add(agricultureBtn);
	win.add(Space_Race_Btn);
	win.add(Industry_Btn);
	win.add(Military_Btn);
	win.add(Glorious_Leaders_Btn);
	win.add(State_Secrets_Btn);
	
	
// 	Adds a activity indicator
	win.add(loading);
	
	
	

