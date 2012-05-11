/**
 * @author DigitalJohn / http://www.rehabstudio.com/
 */

(function(window) {

var MediatorMap = function() {
  this.initialize();
}

var p = MediatorMap.prototype;

	p.map = [];
	p.mediators = [];
	
	p.initialize = function() {

	}

	p.mapView = function ( view, mediator )
	{
		this.map.push( {view:view, mediator:mediator} );
	};

	p.mediate = function(view)
	{
		var index = false;
		
		for(var i in map)
		{
			if(this.map[i].view === view.constructor)
			{
				index = i;
				break;
			}
		}
		
		if(index !== false)
		{
			var mediator = new this.map[index].mediator( view );
			this.mediators.push(mediator);
		}
	}


window.MediatorMap = MediatorMap;
}(window));

/*

var MediatorMap = function () {

	var map = [];
	var mediators = [];

	this.mapView = function ( view, mediator )
	{
		map.push( {view:view, mediator:mediator} );
	};
	
	
	this.mediate = function(view)
	{
		var index = false;
		
		for(var i in map)
		{
			if(map[i].view === view.constructor)
			{
				index = i;
				break;
			}
		}
		
		if(index !== false)
		{
			var mediator = new map[index].mediator( view );
			mediators.push(mediator);
		}
	}

};

*/