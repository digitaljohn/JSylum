/**
 * @author mr.doob / http://mrdoob.com/
 */

var MediatorMap = function (coreView) {

	var _coreView = coreView;
	var map = [];

	this.add = function ( view, mediator ) {
		map[view] = mediator;
	};

	this.remove = function ( view ) {
		map[view] = null;
	};
	
	
	$.mediate = function()
	{
		var views = $('[data-view]');
		
		views.each(function(){
			obj = $(this);
			var mediator = new map[obj.data('view')]( obj );
			obj.data('mediator', mediator);
			obj.removeData('view');
		});
	}

};