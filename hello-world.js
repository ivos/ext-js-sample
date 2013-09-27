Ext.onReady(function() {
	Ext.create('Ext.panel.Panel', {
		title : 'Hello',
		width : '100%',
		height : 400,
		html : '<p>World!</p>',
		renderTo : Ext.getBody()
	});
});
