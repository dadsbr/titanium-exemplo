var currentWindow = Titanium.UI.currentWindow;

var table = Titanium.UI.createTableView();

currentWindow.add(table);

var url = "http://dadsbr.no.de/guia-de-programacao";

var client = Ti.Network.createHTTPClient({
     // function called when the response data is available
 onload : function(e) {
 	
 	Titanium.API.debug('retornou resultado da API');
 	
     var result = JSON.parse(this.responseText);
     
     for( i=0 ; i < result.items.length ; i++ )
     {
     	
     	var image = 'channels/'+result['items'][i]['channel']['abbrev']+'.jpg';
     	
     	//Titanium.API.debug(image);
     	
     	var row = Titanium.UI.createTableViewRow({
     		leftImage: image,
     		title: result['items'][i]['title'],
     		layout: 'vertical',
     		MyProgram: result['items'][i]
     	});
     	
     	table.appendRow(row);
     	
     }
 },
 // function called when an error occurs, including a timeout
 onerror : function(e) {
     Ti.API.debug(e.error);
     alert('error');
     },
     timeout : 5000 
 });
 
 // Prepare the connection.
 client.open("GET", url);
 // Send the request.
 client.send();
 
 
 
 
 table.addEventListener('click',function(e){
 	
 	Titanium.API.debug(e.rowData.MyProgram.title);
 	
 	var winPop = Titanium.UI.createWindow({
 		backgroundColor:'#fff',  
		title: e.rowData.MyProgram.title,
		MyProgram: e.rowData.MyProgram,
		url: 'program.js'
	});

	Titanium.UI.currentTab.open(winPop);
 	
 });
