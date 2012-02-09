var currentWindow = Titanium.UI.currentWindow;

/*
var btnBack = Titanium.UI.createButton({
	title: 'Voltar'
})

currentWindow.setLeftNavButton(btnBack);

btnBack.addEventListener('click',function(){
	currentWindow.close({
		modalTransitionStyle: Ti.UI.iPhone.MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL,
	    modalStyle: Ti.UI.iPhone.MODAL_PRESENTATION_FORMSHEET
	});
});

*/

Titanium.API.debug( currentWindow.MyProgram );

var html = '<p>Programa: ' + currentWindow.MyProgram.title + '</p>';
html += '<p>Canal: ' + currentWindow.MyProgram.channel.name + '</p>';
html += '<p>Número do canal (TVA): ' + currentWindow.MyProgram.channel.tva_lineup + '</p>';
html += '<p>Descrição: ' + currentWindow.MyProgram.desc + '</p>';
html += '<p>Categoria: ' + currentWindow.MyProgram.type.name + '</p>';
html += '<p>Genero: ' + currentWindow.MyProgram.genre.name + '</p>';
html += '<p>Classificação: ' + currentWindow.MyProgram.rating + '</p>';
html += '<p>Hora de inicio: ' + currentWindow.MyProgram.start + '</p>';
html += '<p>Hora de término: ' + currentWindow.MyProgram.stop + '</p>';

var webview = Titanium.UI.createWebView({
	html: html
});

currentWindow.add(webview);
