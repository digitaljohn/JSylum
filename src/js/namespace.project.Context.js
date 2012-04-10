
/**
 * Generic onReady function called from all pages.
 * Set up your page initialisation code by adding it's ID to the switch statement
 */
$(document).ready(function(){
	
	var coreView = $("#coreView");
	
	var bus = new EventBus();
	
	var	controller,
		model,
		view,
		dom = {},
		mediatorMap = [];
		
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
		
		console.log('start: '+start);
		console.log('end: '+end);
		
		var className = classes.substring(start, end);
		
		console.log('className: '+className);
		
		if( mediatorMap[className] )
		{
			
			var mediator = new mediatorMap[className]( bus, jQuery(targ) );
			//jQuery.data('mediator', mediator); // Store so we can easily remove?
		}
		else
		{
			return
		}
	}
		
	coreView.bind( 'DOMNodeInserted', onNodeInsert, false );
	
	
	
		
	mediatorMap['clock'] = namespace.project.Mediator;

	controller	= new namespace.project.Controller( bus );
	model		= new namespace.project.Model( bus );
	
	
	
	
	
	controller.startTimer();
	
	coreView.append("<h2 class='view-clock'>Clock</h2>");

	
});

