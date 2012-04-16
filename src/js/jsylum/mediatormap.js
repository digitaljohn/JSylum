/**
 * @author DigitalJohn / http://www.rehabstudio.com/
 */

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
		
		for(i in map)
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