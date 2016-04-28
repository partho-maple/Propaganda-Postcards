// use a closure to (a) test it and (b) not expose this into global scope

	// window container
	var welcomeWindow = Titanium.UI.createWindow({
		//height:320,
		//width:480,
		backgroundColor:'#fff',
		opacity:1,
		top:0,
  		backgroundImage: 'images/menu.png',
		touchEnabled:true
	});


	
	
	var t = Titanium.UI.create2DMatrix();
	
	welcomeWindow.addEventListener('click', function()
	{
		var tt3 = Titanium.UI.create2DMatrix();
		tt3 = tt3.scale(0);
		welcomeWindow.close({transform:tt3,duration:300});
	});
	
	welcomeWindow.open();
