/*globals Titanium, Ti, alert, require, setTimeout, setInterval, JSON*/
Ti.include('global.js');

var win = Ti.UI.currentWindow;

win.backgroundImage = 'images/BGshare.png';

Titanium.Facebook.appid = "134793934930";
Titanium.Facebook.permissions = ['publish_stream', 'read_stream'];

var B2_TITLE = "Upload your postcard to facebook!";


var b2 = Ti.UI.createButton({
	//title: B2_TITLE,
	height: 70,
	width: 140,
	left: 60,
	top: 100,
	backgroundImage: 'images/ic_Facebook.png',
	backgroundSelectedImage:'images/ic_Facebook_Active.png',
	borderColor:'#b8b29c',
	borderWidth: 2,
});

var shite = Ti.UI.createImageView({
	height: 70,
	width: 140,
	left: 60,
	top: 100,
	backgroundImage: 'images/ic_Facebook_Active.png',
	borderColor:'#b8b29c',
	borderWidth: 2,
});

win.add(shite);

function showRequestResult(e) {
	var s = '';
	if (e.success) {
		actionsView.show();
		s = "";
		if (e.result) {
			s += "Your postcard has been uploaded, Comrade!";
		}
	} else {
		s = "You haven't created a postcard yet... please choose your image and get creative!";
		if (e.error) {
			s ;
		}
	}
	//b2.title = B2_TITLE;
	alert(s);
}

var login = Titanium.Facebook.createLoginButton({
	top: 175,
	left: 60, 
	//style:'wide',
});
win.add(login);

var actionsView = Ti.UI.createView({
	top: 0, left: 0, right: 0, visible: Titanium.Facebook.loggedIn, height: 'auto'
});
actionsView.add(b2);

Titanium.Facebook.addEventListener('login', function(e) {
	if (e.success) {
		actionsView.show();
	}
	if (e.error) {
		alert(e.error);
	}
});

Titanium.Facebook.addEventListener('logout', function(e){
	Ti.API.info('logout event');
	actionsView.hide();
});


b2.addEventListener('click', function() {
	//b2.title = 'Uploading Postcard...';
	actionsView.hide();
	var f = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'postcard.png');
	var blob = f.read();
	var data = {
		caption: 'Check out my new Communist postcard!',
		picture: blob
	};
	Titanium.Facebook.request('photos.upload', data, showRequestResult);
});

win.add(actionsView);



var emailBtn = Titanium.UI.createButton({
		style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN, 
	    color:'white',
	    backgroundImage: 'images/ic_Email.png',
	    backgroundSelectedImage:'images/ic_Email_Active.png',	   
	    borderColor:'#b8b29c',
	    borderWidth: 2,
	    height:70,
	    width:140,
	    top:100,
	    right:60,		
	});	
	
	emailBtn.addEventListener('click', function()
	{
			
        	var f = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'postcard.png');
     
        	var emailDialog = Titanium.UI.createEmailDialog();
        	emailDialog.setToRecipients(['test@gmail.com']);
       	 	emailDialog.setSubject('Check out my new Communist postcard!');
        	emailDialog.setMessageBody('');
        	emailDialog.setHtml(true);
        	emailDialog.setBarColor('black');
        	emailDialog.addAttachment(f.read());
 	
        	emailDialog.addEventListener('complete', function(e) {
            if(e.result == emailDialog.SENT) {
 
                alert("message was sent");
 
            }
        });
        emailDialog.open();
    });

var twitterBtn = Titanium.UI.createButton({
		style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN, 
	    title: "post to twitter!!",
	    borderRadius:12, 
	    font:{fontFamily: 'Times New Roman', fontSize:18},
	    color:'white',
	    //backgroundGradient:{type:'linear', colors:['#3a1b0a','#3a1b0a'], startPoint:{x:0,y:0}, endPoint:{x:3,y:80}, backFillStart:false}, 
	    borderColor:'#b8b29c',
	    borderWidth: 2,
	    height:23,
	    width:170,
	    bottom:50,
	    left:10,		
	});	
	
		twitterBtn.addEventListener('click', function()
		{
		
		var f = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'postcard.png');
				
		var image = f.read();		
				
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
		//xhr.onsendstream = function(e)
		//{
		//	ind.value = e.progress ;
		//	Ti.API.info('ONSENDSTREAM - PROGRESS: ' + e.progress);
		//};
		// open the client
		xhr.open('POST','https://twitpic.com/api/uploadAndPost');

		// send the data
		xhr.send({media:image,username:'fgsandford1000',password:'sanford1000',message:'Just a shitty appcelerator test, what ho!'});
			
		});		


win.add(emailBtn);
//win.add(twitterBtn);


