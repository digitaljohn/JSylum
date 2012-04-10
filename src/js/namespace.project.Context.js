
/**
 * Generic onReady function called from all pages.
 * Set up your page initialisation code by adding it's ID to the switch statement
 */
$(document).ready(function(){
	
	// Framework Setup
	var coreView = $("#coreView");
	var bus = new EventBus();
	var mediatorMap = new MediatorMap( bus, coreView );






	// View Mediators
	mediatorMap.add('clock', namespace.project.Mediator);
	
	// Classes
	var controller	= new namespace.project.Controller( bus );
	var model		= new namespace.project.Model( bus );

	// Adding views to the main view
	controller.setupViews(coreView);
	
	// Start
	controller.startTimer();

	
});

