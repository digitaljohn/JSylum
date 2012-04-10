/**
 * @author mr.doob / http://mrdoob.com/
 */

var MediatorMap = function (bus, coreView) {

	var _bus = bus;
	var _coreView = coreView;
	var map = [];

	this.add = function ( view, mediator ) {
		map[view] = mediator;
	};

	this.remove = function ( view ) {
		map[view] = null;
	};
	
	
	var onNodeInsert = function ( event ) {
		var targ = event.target;
		
		if(targ.nodeType != 1) return;
		
		var classes = targ.getAttribute('class');
		
		if(!classes) return;
		
		var start = classes.indexOf("view-");
		if(start == -1) return;
		
		start += 5;
		
		var end = classes.indexOf(" ", start);
		if(end == -1) end = classes.length;
		
		if(end <= start) return; 
		
		var className = classes.substring(start, end);
		
		if( map[className] )
		{
			
			var mediator = new map[className]( _bus, jQuery(targ) );
			$(targ).data('mediator', mediator);
		}
		else
		{
			return
		}
	}
	
	coreView.bind( 'DOMNodeInserted', onNodeInsert, false );
	
	

};