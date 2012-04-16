/**
 * Generic onReady function called from all pages.
 */

$(document).ready(function(){
	
	// Framework Setup
	JSylum.init();

	// Singleton Models
	JSylum.injector.mapSingleton(models.Clock);	

	// View Mediators
	JSylum.mediatorMap.mapView(views.AnalogClock, mediators.Clock);
	JSylum.mediatorMap.mapView(views.DigitalClock, mediators.Clock);
	JSylum.mediatorMap.mapView(views.Tools, mediators.Tools);
	
	// Command Map
	JSylum.commandMap.mapEvent( 'addDigitalClock', commands.addDigitalClock);
	JSylum.commandMap.mapEvent( 'addAnalogClock', commands.addAnalogClock);
	
	// Adding views to the main view then start
	commands.setupViews();
	commands.startTimer();
	
});

