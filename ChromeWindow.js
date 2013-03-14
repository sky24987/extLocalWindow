Ext.ns('Ext.air','Ext.air.Window');
Ext.air.ChromeWindow = Ext.extend(Ext.Window, {
	layout: 'fit',
	draggable: true,
	initComponent: function() {
		Ext.apply(this.panel, {itemId: 'panel'});
		this.items = [this.panel];
		Ext.air.ChromeWindow.superclass.initComponent.call(this);		
		this.panel = this.getComponent('panel');
	},
	afterRender: function() {
		Ext.air.ChromeWindow.superclass.afterRender.call(this);
		// error that element does not exist unless deferred 1ms.
		(function() {
			this.panel.dd = new Ext.air.ChromeWindow.DD(this.panel);
		}).defer(1, this);
	}
	,
	close:function(){
		
		
	}
});
Ext.air.ChromeWindow.DD = Ext.extend(Ext.dd.DD,{
    moveOnly:true,
    headerOffsets:[100, 25],
    startDrag: function(){
        window.nativeWindow.startMove();
    },
    onDrag : Ext.emptyFn,
	b4Drag: Ext.emptyFn,
	endDrag: Ext.emptyFn
});