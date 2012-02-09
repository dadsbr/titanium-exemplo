// Cria a tabGroup
var tabGroup = Titanium.UI.createTabGroup();

// cria a janela 1
var win1 = Titanium.UI.createWindow({
	title : 'Guia de programação',
	backgroundColor : '#fff',
	url : 'guia.js'
});

//cria a tab 1
var tab1 = Titanium.UI.createTab({
	icon : 'images/guia.png',
	title : 'Guia',
	window : win1
});

var win2 = Titanium.UI.createWindow({
	title : 'Mais',
	backgroundColor : '#fff'
});

var tab2 = Titanium.UI.createTab({
	icon : 'images/mais.png',
	title : 'Mais',
	window : win2
});

var label2 = Titanium.UI.createLabel({
	color : '#999',
	text : 'Mais',
	font : {
		fontSize : 20,
		fontFamily : 'Helvetica Neue'
	},
	textAlign : 'center',
	width : 'auto'
});

win2.add(label2);

// Adiciona as tabs na tabGroup
tabGroup.addTab(tab1);
tabGroup.addTab(tab2);

// Abre a tabGroup
tabGroup.open();
