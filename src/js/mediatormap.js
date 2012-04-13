/**
 * @author DigitalJohn / http://www.rehabstudio.com/
 */

var MediatorMap = function () {

	var map = {};
	var mediators = [];

	this.mapView = function ( view, mediator ) {
		map[view] = mediator;
	};
	
	
	this.mediate = function(type)
	{
		// Find unmediated views (DOM elements with the data-view attribute)
		var views = $('[data-view]');
		
		// Loop over unmediated views
		views.each(function(){
			// jQuery reference to the view
			obj = $(this);
			
			// Instanciate the views mediator
			var mediator = new map[obj.data('view')]( obj );
			
			// Add the mediator to the mediators array
			mediators.push(mediator);
			
			// Remove the data and attribute from the view
			obj.removeData('view');
			obj.removeAttr('data-view');
		});
		
		// Loop over all the existing mediators
		for(var i in mediators)
		{
			// Reference to mediator
			obj = mediators[i];
			
			// Is the view still in the root document DOM?
			inDOM = !mediatorMap.isDisconnected(obj.view.context);
			
			// If not… flush it!
			if(!inDOM)
			{
				// Remove from mediators array
				mediators.splice( i, 1 );
				
				// Call the mediators destroy function so it can do internal cleanup (event listeners etc…)
				obj.destroy();
			}
		}
	}
	
	this.isDisconnected = function(node)
	{
		return !node || !node.parentNode || node.parentNode.nodeType === 11;
	}
	
	/*
	$.elementInDocument = function(element)
	{
		while(element = element.parentNode)
		{
			if(element == document)
			{
				return true;
			}
		}
		return false;
	}
	*/

};