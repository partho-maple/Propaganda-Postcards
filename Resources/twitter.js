	
	
	
		var image = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'postcard.png');
	
		var xhr = Titanium.Network.createHTTPClient();

		xhr.onerror = function(e)
		{
			Ti.UI.createAlertDialog({title:'Error', message:e.error}).show();
			Ti.API.info('IN ERROR ' + e.error);
		};
		xhr.setTimeout(20000);
		xhr.onload = function(e)
		{
			Ti.UI.createAlertDialog({title:'Success', message:'status code ' + this.status}).show();
			Ti.API.info('IN ONLOAD ' + this.status + ' readyState ' + this.readyState);
		};
		xhr.onsendstream = function(e)
		{
			ind.value = e.progress ;
			Ti.API.info('ONSENDSTREAM - PROGRESS: ' + e.progress);
		};
		// open the client
		xhr.open('POST','https://twitpic.com/api/uploadAndPost');

		// send the data
		xhr.send({media:image,username:'wireandstrings',password:'Crowle5252',message:'Just a shitty appcelerator test, what ho!'});
		

	